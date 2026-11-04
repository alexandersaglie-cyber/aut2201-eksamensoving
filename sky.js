// Innlogging og synkronisering med Supabase.
//
// Appen lagrer alltid først lokalt (localStorage), så den virker uten nett og uten konto.
// Er man innlogget, sendes fremgang, resultater og skjulte kort til skyen, og endringer fra
// andre enheter hentes ned. Er PC og mobil uenige om et kort, vinner den nyeste endringen.
// Første gang man logger inn, flyttes det som allerede ligger lokalt over til kontoen.
//
// Supabase husker innloggingen på enheten, så man forblir innlogget til man logger ut.
//
// Bruker disse fra app.js: lagret, lagreLokalt(), tomLokalFremgang(), naa(),
// vedInnloggingEndret(), vedSynkFerdig(), vedInnholdHentet(), visNyttPassord().

"use strict";

// =====================================================================
// Oppkobling
// =====================================================================

// Stopper appen fra å bruke en hemmelig nøkkel hvis den er limt inn i config.js ved et uhell.
function erHemmeligNokkel(nokkel) {
  if (nokkel.startsWith("sb_secret_")) return true;
  try {
    const innhold = JSON.parse(atob(nokkel.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    return innhold.role === "service_role";
  } catch (feil) {
    return false;
  }
}

// Klienten mot Supabase, eller null hvis innlogging ikke er satt opp eller biblioteket
// ikke kunne lastes (f.eks. uten nett første gang appen åpnes).
const sky = (() => {
  if (!SUPABASE_URL || !SUPABASE_NOKKEL || typeof supabase === "undefined") return null;
  if (erHemmeligNokkel(SUPABASE_NOKKEL)) {
    console.error("config.js inneholder en HEMMELIG nøkkel. Bytt den ut med anon/publishable-nøkkelen.");
    return null;
  }
  return supabase.createClient(SUPABASE_URL, SUPABASE_NOKKEL);
})();

// Er innlogging satt opp i config.js? (Brukes for å vise en melding hvis biblioteket mangler.)
const innloggingSattOpp = Boolean(SUPABASE_URL && SUPABASE_NOKKEL);

// Den innloggede brukeren: { id, epost, rolle, blokkert }, eller null.
let bruker = null;

// Kort tekst om synken som vises på forsiden, f.eks. «Synkronisert 10:31».
let synkStatus = "";

function erAdmin() { return bruker?.rolle === "admin"; }

// Adressen appen ligger på. Lenker i e-poster (bekreftelse, nytt passord) sender folk hit.
function appAdresse() { return location.origin + location.pathname; }

// Startes av app.js når alt er lastet.
function startSky() {
  if (!sky) return;
  sky.auth.onAuthStateChange((hendelse, sesjon) => {
    // Supabase anbefaler å ikke vente på andre kall inne i denne funksjonen.
    setTimeout(() => behandleInnlogging(hendelse, sesjon), 0);
  });
  window.addEventListener("online", () => { synk(); hentInnhold(); });
  hentInnhold();
}

async function behandleInnlogging(hendelse, sesjon) {
  if (hendelse === "PASSWORD_RECOVERY") return visNyttPassord();

  if (!sesjon) {
    bruker = null;
    synkStatus = "";
    return vedInnloggingEndret();
  }
  // Fornyet innlogging for samme bruker: ingenting å gjøre.
  if (bruker && bruker.id === sesjon.user.id && hendelse === "TOKEN_REFRESHED") return;

  try {
    const { data, error } = await sky.from("profiler")
      .select("epost, rolle, blokkert").eq("id", sesjon.user.id).maybeSingle();
    if (error) throw error;
    if (!data) {
      // Kontoen er slettet av admin.
      await sky.auth.signOut();
      tomLokalFremgang();
      alert("Kontoen din finnes ikke lenger.");
      return;
    }
    if (data.blokkert) {
      await sky.auth.signOut();
      alert("Kontoen din er blokkert. Ta kontakt med administrator.");
      return;
    }
    bruker = { id: sesjon.user.id, ...data };
    lagret.profil = bruker; // huskes, så rollen er kjent også uten nett
    sky.rpc("registrer_aktivitet").then(() => {});
  } catch (feil) {
    // Uten nett: bruk profilen fra forrige gang, og synk når nettet er tilbake.
    bruker = lagret.profil?.id === sesjon.user.id
      ? lagret.profil
      : { id: sesjon.user.id, epost: sesjon.user.email, rolle: "bruker", blokkert: false };
    synkStatus = "Venter på nett";
  }
  vedInnloggingEndret();
  synk();
}

// =====================================================================
// Innlogging, registrering og passord
// =====================================================================

// Supabase svarer på engelsk. Disse gjøres om til norsk.
const FEILTEKSTER = [
  ["invalid login credentials", "Feil e-post eller passord."],
  ["email not confirmed", "Du må bekrefte e-postadressen først. Sjekk innboksen din."],
  ["user already registered", "Det finnes allerede en konto med denne e-postadressen."],
  ["password should be at least", "Passordet må være minst 6 tegn."],
  ["should be different from the old", "Det nye passordet må være forskjellig fra det gamle."],
  ["unable to validate email", "E-postadressen ser ikke gyldig ut."],
  ["is invalid", "E-postadressen ser ikke gyldig ut."],
  ["rate limit", "For mange forsøk på kort tid. Vent litt og prøv igjen."],
  ["banned", "Kontoen din er blokkert."],
  ["failed to fetch", "Fikk ikke kontakt med serveren. Sjekk at du er på nett."]
];

function oversettFeil(feil) {
  const melding = String(feil?.message || feil);
  const treff = FEILTEKSTER.find(([engelsk]) => melding.toLowerCase().includes(engelsk));
  return treff ? treff[1] : "Noe gikk galt: " + melding;
}

// Returnerer en feilmelding, eller null hvis det gikk bra.
async function loggInn(epost, passord) {
  const { error } = await sky.auth.signInWithPassword({ email: epost, password: passord });
  return error ? oversettFeil(error) : null;
}

// Returnerer { feil } eller { maBekrefte } (true hvis brukeren må bekrefte e-posten først).
async function registrer(epost, passord) {
  const { data, error } = await sky.auth.signUp({
    email: epost,
    password: passord,
    options: { data: { godtatt_personvern: true }, emailRedirectTo: appAdresse() }
  });
  if (error) return { feil: oversettFeil(error) };
  return { maBekrefte: !data.session };
}

async function glemtPassord(epost) {
  const { error } = await sky.auth.resetPasswordForEmail(epost, { redirectTo: appAdresse() });
  return error ? oversettFeil(error) : null;
}

async function settNyttPassord(passord) {
  const { error } = await sky.auth.updateUser({ password: passord });
  return error ? oversettFeil(error) : null;
}

// Synker først, så ingenting går tapt, og tømmer så fremgangen på enheten
// (den ligger trygt i kontoen og hentes ned igjen ved neste innlogging).
async function loggUt() {
  await synk();
  if (lagret.usynket &&
      !confirm("Noe av fremgangen er ikke lagret i skyen ennå (ingen nett?). Logge ut likevel?")) {
    return;
  }
  await sky.auth.signOut();
  tomLokalFremgang();
}

// =====================================================================
// Synkronisering
// =====================================================================

let synkPagar = false;   // en synk kjører nå
let synkIgjen = false;   // det kom endringer mens synken kjørte
let synkTimer = null;

// Kalles av lagre() i app.js. Venter litt, så mange raske endringer blir én synk.
function planleggSynk() {
  if (!bruker) return;
  clearTimeout(synkTimer);
  synkTimer = setTimeout(synk, 1500);
}

function settSynkStatus(tekst) {
  synkStatus = tekst;
  const el = document.getElementById("synkstatus");
  if (el) el.textContent = tekst;
}

// Tidspunkt som tall, så de kan sammenlignes. Mangler tidspunkt = eldst mulig.
function tid(iso) { return iso ? Date.parse(iso) : 0; }

function klokkeslett() {
  return new Date().toLocaleTimeString("nb-NO", { hour: "2-digit", minute: "2-digit" });
}

async function synk() {
  if (!sky || !bruker) return;
  if (!navigator.onLine) return settSynkStatus("Venter på nett");
  if (synkPagar) { synkIgjen = true; return; }
  synkPagar = true;
  settSynkStatus("Synkroniserer …");

  try {
    // Fremgang som tilhører en annen konto, skal ikke blandes inn i denne.
    if (lagret.eier && lagret.eier !== bruker.id) tomLokalFremgang();
    lagret.eier = bruker.id;

    // 1. Hent det som ligger i skyen. (Filtrerer på egen id: admin kan lese alles rader.)
    const [fremgang, resultater, skjulte] = await Promise.all([
      sky.from("kort_fremgang").select("kort_id, boks, oppdatert").eq("bruker_id", bruker.id),
      sky.from("flervalg_resultater").select("*").eq("bruker_id", bruker.id),
      sky.from("skjulte").select("element_id, skjult, oppdatert").eq("bruker_id", bruker.id)
    ]);
    for (const svar of [fremgang, resultater, skjulte]) if (svar.error) throw svar.error;

    // 2. Ta inn det som er nyere i skyen enn lokalt.
    const kortISkyen = {};
    fremgang.data.forEach(r => {
      kortISkyen[r.kort_id] = tid(r.oppdatert);
      if (tid(r.oppdatert) > tid(lagret.boksTid[r.kort_id])) {
        lagret.bokser[r.kort_id] = r.boks;
        lagret.boksTid[r.kort_id] = r.oppdatert;
      }
    });

    const resultaterISkyen = new Set(resultater.data.map(r => r.id));
    resultater.data.forEach(r => {
      if (!lagret.resultater.some(l => l.id === r.id)) {
        lagret.resultater.push({
          id: r.id, dato: r.dato, beskrivelse: r.beskrivelse, antall: r.antall, riktige: r.riktige,
          prosent: r.prosent, karakter: r.karakter, perTema: r.per_tema, feil: r.feil
        });
      }
    });
    lagret.resultater.sort((a, b) => tid(a.dato) - tid(b.dato));

    const skjulteISkyen = {};
    skjulte.data.forEach(r => {
      skjulteISkyen[r.element_id] = tid(r.oppdatert);
      if (tid(r.oppdatert) > tid(lagret.skjult[r.element_id]?.tid)) {
        lagret.skjult[r.element_id] = { skjult: r.skjult, tid: r.oppdatert };
      }
    });

    // 3. Send opp det som er nyere lokalt enn i skyen (alt, første gang man logger inn).
    const nyeKort = Object.entries(lagret.bokser)
      .filter(([id]) => tid(lagret.boksTid[id]) > (kortISkyen[id] ?? -1))
      .map(([id, b]) => ({
        bruker_id: bruker.id, kort_id: id, boks: b,
        oppdatert: lagret.boksTid[id] || new Date(0).toISOString()
      }));
    const nyeResultater = lagret.resultater
      .filter(r => !resultaterISkyen.has(r.id))
      .map(r => ({
        id: r.id, bruker_id: bruker.id, dato: r.dato, beskrivelse: r.beskrivelse, antall: r.antall,
        riktige: r.riktige, prosent: r.prosent, karakter: r.karakter, per_tema: r.perTema, feil: r.feil
      }));
    const nyeSkjulte = Object.entries(lagret.skjult)
      .filter(([id, s]) => tid(s.tid) > (skjulteISkyen[id] ?? -1))
      .map(([id, s]) => ({
        bruker_id: bruker.id, element_id: id, skjult: s.skjult,
        oppdatert: s.tid || new Date(0).toISOString()
      }));

    const opplasting = [];
    if (nyeKort.length) opplasting.push(sky.from("kort_fremgang").upsert(nyeKort));
    if (nyeResultater.length) {
      opplasting.push(sky.from("flervalg_resultater").upsert(nyeResultater, { onConflict: "id", ignoreDuplicates: true }));
    }
    if (nyeSkjulte.length) opplasting.push(sky.from("skjulte").upsert(nyeSkjulte));
    for (const svar of await Promise.all(opplasting)) if (svar.error) throw svar.error;

    lagret.usynket = false;
    lagreLokalt();
    settSynkStatus("Synkronisert " + klokkeslett());
    vedSynkFerdig();
  } catch (feil) {
    console.warn("Synk feilet:", feil);
    settSynkStatus(navigator.onLine ? "Synk feilet – prøver igjen senere" : "Venter på nett");
  } finally {
    synkPagar = false;
    if (synkIgjen) { synkIgjen = false; planleggSynk(); }
  }
}

// =====================================================================
// Sletting i skyen og feilmeldinger
// =====================================================================

// Brukes av «Nullstill fremgang» og «Slett resultathistorikken». Returnerer feilmelding eller null.
async function slettSkyFremgang() {
  const { error } = await sky.from("kort_fremgang").delete().eq("bruker_id", bruker.id);
  return error ? oversettFeil(error) : null;
}

async function slettSkyResultater() {
  const { error } = await sky.from("flervalg_resultater").delete().eq("bruker_id", bruker.id);
  return error ? oversettFeil(error) : null;
}

async function sendFeilmelding(elementId, melding) {
  const { error } = await sky.from("feilmeldinger").insert({ element_id: elementId, melding });
  return error ? oversettFeil(error) : null;
}

// =====================================================================
// Innhold (admins endringer i kort og spørsmål)
// =====================================================================

// Henter admins endringer og legger dem i lagret.innhold, så de også finnes uten nett.
async function hentInnhold() {
  if (!sky || !navigator.onLine) return;
  const { data, error } = await sky.from("innhold").select("id, type, data, slettet");
  if (error) return console.warn("Fikk ikke hentet innhold:", error);
  lagret.innhold = Object.fromEntries(data.map(r => [r.id, { type: r.type, data: r.data, slettet: r.slettet }]));
  lagreLokalt();
  vedInnholdHentet();
}

// Lagrer et kort/spørsmål for alle brukere. Bare admin får lov (sjekkes i databasen).
async function lagreInnhold(id, type, data, slettet = false) {
  const { error } = await sky.from("innhold").upsert({ id, type, data, slettet, oppdatert: naa() });
  if (error) return oversettFeil(error);
  lagret.innhold[id] = { type, data, slettet };
  lagreLokalt();
  return null;
}

// Fjerner admins endring, så grunninnholdet fra datafilene gjelder igjen.
async function fjernInnhold(id) {
  const { error } = await sky.from("innhold").delete().eq("id", id);
  if (error) return oversettFeil(error);
  delete lagret.innhold[id];
  lagreLokalt();
  return null;
}

// =====================================================================
// Admin: brukere og feilmeldinger
// =====================================================================
// Databasen og serverfunksjonen sjekker selv at den som spør er admin.

async function hentBrukeroversikt() {
  const { data, error } = await sky.rpc("admin_brukeroversikt");
  if (error) throw new Error(oversettFeil(error));
  return data;
}

// Blokkere, oppheve blokkering, endre rolle og slette går via serverfunksjonen «admin».
async function adminHandling(handling, brukerId) {
  const { error } = await sky.functions.invoke("admin", { body: { handling, brukerId } });
  if (!error) return null;
  try {
    const svar = await error.context.json(); // feilmeldingen fra serverfunksjonen
    return svar.feil || oversettFeil(error);
  } catch (feil) {
    return oversettFeil(error);
  }
}

async function hentFeilmeldinger() {
  const { data, error } = await sky.from("feilmeldinger")
    .select("id, element_id, melding, opprettet, lost, profiler(epost)")
    .order("opprettet", { ascending: false });
  if (error) throw new Error(oversettFeil(error));
  return data;
}

async function settFeilmeldingLost(id, lost) {
  const { error } = await sky.from("feilmeldinger").update({ lost }).eq("id", id);
  return error ? oversettFeil(error) : null;
}

async function slettFeilmelding(id) {
  const { error } = await sky.from("feilmeldinger").delete().eq("id", id);
  return error ? oversettFeil(error) : null;
}
