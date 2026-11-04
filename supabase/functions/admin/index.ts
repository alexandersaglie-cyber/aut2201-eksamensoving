// Serverfunksjon «admin»: brukerhandlinger som krever spesielle rettigheter.
//
// Kjører hos Supabase (Edge Function), ikke i nettleseren. Her er den hemmelige service
// role-nøkkelen tilgjengelig – Supabase legger den inn automatisk som miljøvariabel, så den
// står aldri i koden og aldri i appen.
//
// Før noe gjøres, sjekkes det at den som spør er innlogget OG er admin i databasen.
//
// Appen kaller funksjonen med { handling, brukerId }, der handling er en av:
//   "blokker", "opphev-blokkering", "gjor-admin", "fjern-admin", "slett"

import { createClient } from "npm:@supabase/supabase-js@2.110.0";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function svar(innhold: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(innhold), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

const HANDLINGER = ["blokker", "opphev-blokkering", "gjor-admin", "fjern-admin", "slett"];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return svar({ feil: "Bare POST er tillatt." }, 405);

  // Klient med full tilgang. Brukes bare etter at vi har sjekket at den som spør er admin.
  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );

  // 1. Hvem spør? Innloggingen (JWT) sendes med fra appen og sjekkes mot Supabase.
  const jwt = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
  const { data: innlogget, error: innloggingsfeil } = await admin.auth.getUser(jwt);
  if (innloggingsfeil || !innlogget?.user) return svar({ feil: "Du må være innlogget." }, 401);
  const sporId = innlogget.user.id;

  // 2. Er den som spør admin? Sjekkes i databasen – ikke i appen.
  const { data: profil } = await admin
    .from("profiler").select("rolle, blokkert").eq("id", sporId).maybeSingle();
  if (!profil || profil.rolle !== "admin" || profil.blokkert) {
    return svar({ feil: "Bare admin har tilgang til dette." }, 403);
  }

  // 3. Hva skal gjøres, og med hvem?
  let foresporsel: { handling?: string; brukerId?: string };
  try {
    foresporsel = await req.json();
  } catch {
    return svar({ feil: "Ugyldig forespørsel." }, 400);
  }
  const { handling, brukerId } = foresporsel;
  if (!handling || !HANDLINGER.includes(handling)) return svar({ feil: "Ukjent handling." }, 400);
  if (typeof brukerId !== "string") return svar({ feil: "Mangler bruker." }, 400);

  // Sperre: admin kan ikke blokkere, slette eller fjerne admin-rollen fra seg selv,
  // så appen aldri blir stående uten admin.
  if (brukerId === sporId) return svar({ feil: "Du kan ikke gjøre dette med din egen konto." }, 400);

  const { data: maal } = await admin.from("profiler").select("id").eq("id", brukerId).maybeSingle();
  if (!maal) return svar({ feil: "Fant ikke brukeren." }, 404);

  // 4. Utfør handlingen.
  let feil: { message: string } | null = null;

  if (handling === "blokker" || handling === "opphev-blokkering") {
    const blokker = handling === "blokker";
    // Utestengt i innloggingen (ca. 100 år), så brukeren ikke kan logge inn igjen.
    ({ error: feil } = await admin.auth.admin.updateUserById(brukerId, {
      ban_duration: blokker ? "876000h" : "none",
    }));
    if (!feil) {
      ({ error: feil } = await admin.from("profiler").update({ blokkert: blokker }).eq("id", brukerId));
    }
  } else if (handling === "gjor-admin" || handling === "fjern-admin") {
    const rolle = handling === "gjor-admin" ? "admin" : "bruker";
    ({ error: feil } = await admin.from("profiler").update({ rolle }).eq("id", brukerId));
  } else if (handling === "slett") {
    // Sletter kontoen. Profil, fremgang, resultater og feilmeldinger slettes automatisk med.
    ({ error: feil } = await admin.auth.admin.deleteUser(brukerId));
  }

  if (feil) return svar({ feil: "Klarte ikke å utføre handlingen: " + feil.message }, 500);
  return svar({ ok: true });
});
