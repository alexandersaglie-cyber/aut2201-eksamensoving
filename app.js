// Audiologi eksamensøving – hele appen ligger i denne fila.
//
// Dataene kommer fra data/oppgaver*.js (OPPGAVER) og data/kort*.js (KORT).
// Fremgang lagres alltid i nettleserens localStorage, så appen virker uten nett og uten konto.
// Er man innlogget, synkroniseres den i tillegg med skyen (se sky.js).
//
// Oppbygging:
//   1. Lagring        – lese/skrive localStorage
//   2. Data           – kort og spørsmål med egne endringer, filter, hjelpefunksjoner
//   3. Forside
//   4. Flashcards     – bokssystem: kort du ikke kan, kommer oftere
//   5. Flervalg       – runde med poengsum, karakter og svake tema, og «Mine resultater»
//   6. Adminpanel     – brukere, innhold (for alle brukere) og feilmeldinger. Bare for admin.
//   7. Konto          – innlogging, registrering, passord, skjul for meg og meld feil
//   8. Sikkerhetskopi – laste ned / hente inn fremgang og endringer
//   9. Hendelser      – kobler knapper og taster til funksjonene over

"use strict";

// =====================================================================
// 1. Lagring
// =====================================================================

const LAGRINGSNOKKEL = "aut2201-eksamensoving";

// bokser:     hvilken boks (1–5) hvert flashcard ligger i. Mangler = nytt kort.
// boksTid:    når hvert kort sist ble besvart (brukes til å avgjøre hva som er nyest ved synk).
// innhold:    admins endringer fra databasen (kopi, så de finnes også uten nett): { id: { type, data, slettet } }.
// endringer:  eldre, lokale redigeringer fra før appen fikk adminpanel.
// skjult:     kort/spørsmål man har skjult for seg selv: { id: { skjult, tid } }.
// resultater: fullførte flervalgsrunder med karakter (se lagreRunde()).
// pagaendeRunde: flervalgsrundene man er midt i, per fag ({ AUT2201: runde, … }), så de kan
//             fortsettes etter at appen er lukket, også på en annen enhet (se lagreRundeTilstand()).
// fagliste:   fagene fra databasen (kode, navn, status, rekkefolge), så de finnes også uten nett.
// valgtFag:   koden til faget man øver på (f.eks. "AUT2201"). Appen åpner i dette faget neste gang.
// pagaendeRundeTid: når den påbegynte runden sist endret seg (brukes til å avgjøre hva som er nyest ved synk).
// nullstilt:  når fremgangen / resultathistorikken sist ble nullstilt: { fremgang, resultater }.
//             Alt fra før dette regnes som slettet, også på andre enheter (se sky.js).
// slettedeResultater: id-er til enkeltrunder som er slettet.
// eier:       id-en til kontoen fremgangen tilhører (null = ikke koblet til noen konto ennå).
// profil:     den innloggede brukerens profil fra sist, så rollen er kjent også uten nett.
// usynket:    true hvis det finnes endringer som ikke er sendt til skyen ennå.
// flyttetKort: flashcards som er slått sammen med et annet kort, og der fremgangen er flyttet over.
function tomLagring() {
  return {
    bokser: {}, boksTid: {}, innhold: {}, endringer: {}, skjult: {}, resultater: [],
    pagaendeRunde: {}, pagaendeRundeTid: null,
    nullstilt: { fremgang: null, resultater: null }, slettedeResultater: [],
    valgtFag: null, eier: null, profil: null, usynket: false, flyttetKort: {}
  };
}

// Påbegynte runder lagres per fag: { AUT2201: runde, AUT1000: runde }. Eldre versjoner
// lagret én runde (med feltet sporsmal), som da hører til AUT2201.
function somRundekart(data) {
  if (!data) return {};
  return data.sporsmal ? { AUT2201: data } : data;
}
let lagret = tomLagring();

function lastInn() {
  try {
    const tekst = localStorage.getItem(LAGRINGSNOKKEL);
    if (tekst) lagret = Object.assign(tomLagring(), JSON.parse(tekst));
    oppgraderLagring();
  } catch (feil) {
    // Lagring er ikke tilgjengelig (f.eks. privat vindu). Appen virker, men husker ingenting.
  }
}

// Gjør om data lagret av eldre versjoner av appen til dagens format.
function oppgraderLagring() {
  // «Eksamensark» og «Øvingssett» er nå en del av «Høst 2024» (se tilpass()).
  lagret.resultater.forEach(r => {
    r.beskrivelse = r.beskrivelse.replace("Eksamensark", "Høst 2024").replace("Øvingssett", "Høst 2024");
  });
  flyttKortfremgang();
  // Tidligere «slettet» er nå «skjult for meg».
  if (Array.isArray(lagret.slettet)) {
    lagret.slettet.forEach(id => { lagret.skjult[id] = { skjult: true, tid: null }; });
    delete lagret.slettet;
  }
  // Hver runde trenger en unik id, så den ikke lagres to ganger i skyen.
  lagret.resultater.forEach(r => { if (!r.id) r.id = lagNyId(); });
  // Påbegynte runder lagres per fag, og de fra før synken fantes får et tidspunkt.
  lagret.pagaendeRunde = somRundekart(lagret.pagaendeRunde);
  if (Object.keys(lagret.pagaendeRunde).length && !lagret.pagaendeRundeTid) lagret.pagaendeRundeTid = naa();
  // Resultater fra før appen fikk flere fag, hører til AUT2201.
  lagret.resultater.forEach(r => { if (!r.emne) r.emne = "AUT2201"; });
}

// Flashcards som er slått sammen med et annet kort (se duplikat-rapport.md). Boksen på det
// gamle kortet flyttes til det nye. Har begge en boks, beholdes den høyeste. Kjøres når appen
// starter og etter synk, siden fremgangen på det gamle kortet kan komme fra en annen enhet.
const FLYTTEDE_KORT = { K001: "KE037", K029: "KE003", K085: "KE014", K061: "KE033" };
function flyttKortfremgang() {
  if (!lagret.flyttetKort) lagret.flyttetKort = {};
  let endret = false;
  Object.entries(FLYTTEDE_KORT).forEach(([gammel, ny]) => {
    if (!lagret.bokser[gammel] || lagret.flyttetKort[gammel]) return;
    lagret.bokser[ny] = Math.max(lagret.bokser[ny] || 0, lagret.bokser[gammel]);
    lagret.boksTid[ny] = naa();
    lagret.flyttetKort[gammel] = true;
    endret = true;
  });
  return endret;
}

// Unik id (UUID). crypto.randomUUID finnes ikke når siden åpnes direkte fra disken.
function lagNyId() {
  if (window.crypto?.randomUUID) return crypto.randomUUID();
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}

function naa() { return new Date().toISOString(); }

// Lagrer bare på enheten. Brukes av synken selv.
function lagreLokalt() {
  try {
    localStorage.setItem(LAGRINGSNOKKEL, JSON.stringify(lagret));
  } catch (feil) {
    // Se kommentaren i lastInn().
  }
}

// Lagrer på enheten og sender endringen til skyen hvis man er innlogget.
function lagre() {
  if (bruker) lagret.usynket = true;
  lagreLokalt();
  planleggSynk();
}

// Fjerner fremgang, resultater og skjulte kort fra enheten (f.eks. ved utlogging).
function tomLokalFremgang() {
  const { innhold, endringer, valgtFag } = lagret; // innhold og fagvalg hører til enheten og beholdes
  lagret = tomLagring();
  lagret.innhold = innhold;
  lagret.endringer = endringer;
  lagret.valgtFag = valgtFag;
  lagreLokalt();
}

// =====================================================================
// 2. Data og hjelpefunksjoner
// =====================================================================

function erSkjult(id) { return Boolean(lagret.skjult[id]?.skjult); }

// Setter sammen innholdet:
//   1. grunninnholdet fra datafilene (KORT / OPPGAVER)
//   2. admins endringer, nye kort/spørsmål og slettinger fra databasen (lagret.innhold)
//   3. eldre lokale redigeringer (lagret.endringer), der admin ikke har endret noe
// type er "kort" eller "sporsmal". Skjulte er med; bruk alleKort()/alleOppgaver() for å fjerne dem.
function sammensatt(type, grunnlag) {
  const iDatafilene = new Set(grunnlag.map(x => x.id));
  const nye = Object.entries(lagret.innhold)
    .filter(([id, r]) => r.type === type && !iDatafilene.has(id))
    .map(([id, r]) => ({ ...r.data, id }));
  return [...grunnlag, ...nye]
    .filter(x => !lagret.innhold[x.id]?.slettet)
    .map(x => tilpass(lagret.innhold[x.id] ? { ...lagret.innhold[x.id].data, id: x.id } : (lagret.endringer[x.id] || x), x));
}

// Redigerte kopier (fra admin eller eldre lokale endringer) kan være lagret før datafilene fikk
// kilden «ogsa», og før øvingsspørsmålene (EA-/KE-) ble en del av «Høst 2024» med nr 101–220.
// Her får de kilde og nummer fra datafilene.
function tilpass(x, original) {
  const ut = { ...x };
  if (!ut.ogsa && original.ogsa) ut.ogsa = original.ogsa;
  if (/^(EA-|KE)/.test(ut.id) && ut.id === original.id) {
    ut.eksamen = original.eksamen;
    if ("nr" in original) ut.nr = original.nr;
    if ("oppgaver" in original) ut.oppgaver = original.oppgaver;
  }
  return ut;
}

// Fagene styres av admin i tabellen «fag» i Supabase (se supabase/06_fagliste.sql), med status
// utkast / prove (prøveversjon) / publisert / skjult. Lista hentes ved innlogging og huskes i lagret.fagliste.
// Denne lista brukes bare før lista er hentet første gang (f.eks. uten nett).
// Spørsmål og kort til et fag ligger i egne datafiler med emne: "<kode>".
const STANDARD_FAG = [
  { kode: "AUT1000", navn: "Audiologisk grunnkurs 1", status: "publisert", rekkefolge: 1 },
  { kode: "AUT2201", navn: "Audiologisk grunnkurs 2", status: "publisert", rekkefolge: 2 }
];
const FAGSTATUS = { utkast: "Utkast", prove: "Prøveversjon", publisert: "Publisert", skjult: "Skjult" };

// Alle fag appen kjenner til, i riktig rekkefølge.
function alleFag() {
  const liste = lagret.fagliste?.length ? lagret.fagliste : STANDARD_FAG;
  return [...liste].sort((a, b) => a.rekkefolge - b.rekkefolge || a.kode.localeCompare(b.kode));
}
// Fagene brukeren får velge: publiserte og prøveversjoner, og for admin også utkast og skjulte.
function synligeFag() { return alleFag().filter(f => f.status === "publisert" || f.status === "prove" || erAdmin()); }
// Liten merkelapp på fag som ikke er publisert (prøveversjon ser alle, de andre bare admin).
function fagMerke(f) { return f.status === "publisert" ? "" : ` <span class="merke">${esc(FAGSTATUS[f.status] || f.status)}</span>`; }

// Innhold uten emne-felt (de første datafilene) hører til AUT2201.
function fagFor(x) { return x.emne || "AUT2201"; }
function valgtFag() { return synligeFag().find(f => f.kode === lagret.valgtFag) || null; }
function iValgtFag(liste) { return liste.filter(x => fagFor(x) === lagret.valgtFag); }

// Kort og spørsmål i faget som er valgt, uten de man har skjult for seg selv.
function alleKort() { return iValgtFag(sammensatt("kort", KORT)).filter(x => !erSkjult(x.id)); }
function alleOppgaver() { return iValgtFag(sammensatt("sporsmal", OPPGAVER)).filter(x => !erSkjult(x.id)); }

function typeFor(x) { return "forside" in x ? "kort" : "sporsmal"; }

// Finner et kort eller spørsmål på id, også om det er skjult.
function finnElement(id) {
  return [...sammensatt("kort", KORT), ...sammensatt("sporsmal", OPPGAVER)].find(x => x.id === id);
}

// Temaer og eksamener i faget som er valgt. Regnes ut fra innholdet, så nye temaer fra admin kommer med.
function temaer() {
  const alle = iValgtFag([...sammensatt("sporsmal", OPPGAVER), ...sammensatt("kort", KORT)]);
  return [...new Set(alle.map(x => x.tema))].sort((a, b) => a.localeCompare(b, "no"));
}
function eksamener() {
  const alle = iValgtFag([...sammensatt("sporsmal", OPPGAVER), ...sammensatt("kort", KORT)]);
  return [...new Set(alle.flatMap(eksamenerFor))];
}

// Resultater (fullførte flervalgsrunder) i faget som er valgt.
function mineResultater() { return lagret.resultater.filter(r => (r.emne || "AUT2201") === lagret.valgtFag); }

// Filteret på forsiden gjelder både flashcards og flervalg. Man kan krysse av for flere tema og
// eksamener. En tom liste betyr «alle».
let filter = { tema: [], eksamen: [] };
// Hvilken av avkrysningslistene som er åpen ("tema", "eksamen" eller null), så den holdes åpen
// når forsiden tegnes på nytt etter et kryss.
let apentFilter = null;
// Hvor mange spørsmål en flervalgsrunde har. Spørsmålene trekkes tilfeldig fra utvalget.
const ANTALL_VALG = ["25", "50", "100"];
let antallValgt = "100";

function filtrert(liste) {
  return liste.filter(x =>
    (!filter.tema.length || filter.tema.includes(x.tema)) &&
    (!filter.eksamen.length || eksamenerFor(x).some(e => filter.eksamen.includes(e))));
}

// Avkrysningsliste for tema eller eksamen på forsiden.
// felt er "tema" eller "eksamen", alle er alle valgene, alleTekst f.eks. "Alle tema".
// I AUT2200 er «eksamenene» forelesninger i pensum (ingen tidligere eksamener), så filteret heter bare Pensum.
const BARE_PENSUM = ["AUT2200"];
function barePensum() { return BARE_PENSUM.includes(lagret.valgtFag); }
function eksamenEtikett() { return barePensum() ? "Pensum" : "Eksamen/Pensum"; }
function alleEksamenerTekst() { return barePensum() ? "Hele pensum" : "Alle eksamener"; }

function flervalgFilter(felt, etikett, alle, alleTekst) {
  const valgt = filter[felt];
  const sammendrag = !valgt.length ? alleTekst
    : valgt.length === 1 ? valgt[0]
    : `${valgt.length} valgt`;
  return `
    <div class="filterfelt">
      <span class="filteretikett">${etikett}</span>
      <details class="flervalgfilter" data-felt="${felt}" ${apentFilter === felt ? "open" : ""}>
        <summary>${esc(sammendrag)}</summary>
        <div class="filtervalg">
          <label class="filterlinje alle"><input type="checkbox" data-filter="${felt}" value="" ${valgt.length ? "" : "checked"}> ${esc(alleTekst)}</label>
          ${alle.map(v => `
            <label class="filterlinje"><input type="checkbox" data-filter="${felt}" value="${esc(v)}" ${valgt.includes(v) ? "checked" : ""}> ${esc(v)}</label>`).join("")}
        </div>
      </details>
    </div>`;
}

// Et kryss i en avkrysningsliste. «Alle» tømmer lista. Er alt krysset av, blir det «alle».
function endreFilter(felt, verdi, pa) {
  const alle = felt === "tema" ? temaer() : eksamener();
  let valgt = verdi === "" ? [] : pa ? [...filter[felt], verdi] : filter[felt].filter(v => v !== verdi);
  valgt = alle.filter(v => valgt.includes(v)); // samme rekkefølge som i lista, uten doble
  if (valgt.length === alle.length) valgt = [];
  filter[felt] = valgt;
  apentFilter = felt;
  // Tegn forsiden på nytt uten å hoppe til toppen.
  const y = window.scrollY;
  visHjem();
  window.scrollTo(0, y);
}

// Et spørsmål kan ha gått igjen på flere eksamener. «ogsa» lister de andre kildene,
// f.eks. [{ eksamen: "Høst 2024", nr: 1 }], så spørsmålet vises under alle eksamenene.
function eksamenerFor(x) { return [x.eksamen, ...(x.ogsa || []).map(k => k.eksamen)]; }
// Innhold generert fra forelesninger (f.eks. AUT2200) har en egen kildetekst i feltet kilde.
function kildeOppgave(o) {
  if (o.kilde) return o.kilde;
  return [o, ...(o.ogsa || [])].map(k => `${k.eksamen}, oppg. ${k.nr}`).join(" + ");
}
function kildeKort(k) {
  if (k.kilde) return k.kilde;
  const egen = k.oppgaver?.length ? `${k.eksamen}, oppg. ${k.oppgaver.join(", ")}` : k.eksamen;
  return [egen, ...(k.ogsa || []).map(o => `${o.eksamen}, oppg. ${o.nr}`)].join(" + ");
}

// Gjør tekst trygg å sette inn i HTML (så f.eks. «<» ikke tolkes som kode).
function esc(tekst) {
  const erstatt = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return String(tekst ?? "").replace(/[&<>"']/g, tegn => erstatt[tegn]);
}

// Returnerer en stokket kopi av lista.
function stokk(liste) {
  const kopi = [...liste];
  for (let i = kopi.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopi[i], kopi[j]] = [kopi[j], kopi[i]];
  }
  return kopi;
}

// Små merkelapper over et kort/spørsmål: tema, usikker fasit, redigert.
function merker(x) {
  let html = `<span class="merke">${esc(x.tema)}</span>`;
  if (x.sikkerhet === "lav") html += `<span class="merke varsel">Usikker fasit – sjekk i pensum</span>`;
  if (x.redigert) html += `<span class="merke">Redigert</span>`;
  return html;
}

const app = document.getElementById("app");
const hjemKnapp = document.getElementById("hjem-knapp");
const menyKnapp = document.getElementById("meny-knapp");
const meny = document.getElementById("meny");

// Egne dialogvinduer i stedet for nettleserens confirm() og alert(). Noen nettlesere
// (f.eks. de som åpnes inne i Messenger og Snapchat) stopper de innebygde vinduene uten
// å vise dem, og da ville knapper som «Slett» sett ut som de ikke virker.
// Svarer med true (OK) eller false (Avbryt / Esc).
function dialog(tekst, { avbryt = true, okTekst = "OK" } = {}) {
  return new Promise(svar => {
    const bakgrunn = document.createElement("div");
    bakgrunn.className = "dialog-bakgrunn";
    bakgrunn.innerHTML = `
      <div class="dialog" role="dialog" aria-modal="true">
        <p>${esc(tekst).replace(/\n/g, "<br>")}</p>
        <div class="knapperad">
          ${avbryt ? `<button data-svar="nei">Avbryt</button>` : ""}
          <button class="hoved" data-svar="ja">${esc(okTekst)}</button>
        </div>
      </div>`;
    const lukk = ja => {
      bakgrunn.remove();
      document.removeEventListener("keydown", tast, true);
      svar(ja);
    };
    const tast = e => {
      if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); lukk(false); }
    };
    bakgrunn.addEventListener("click", e => {
      const knapp = e.target.closest("[data-svar]");
      if (knapp) lukk(knapp.dataset.svar === "ja");
    });
    document.addEventListener("keydown", tast, true);
    document.body.appendChild(bakgrunn);
    bakgrunn.querySelector(".hoved").focus();
  });
}

// Spør om noe skal gjøres. Brukes med await: if (!await bekreft("Slette?")) return;
function bekreft(tekst) { return dialog(tekst); }

// Viser en melding med bare en OK-knapp.
function melding(tekst) { return dialog(tekst, { avbryt: false }); }

// Hvilken skjerm som vises nå: "hjem", "kort", "flervalg", "resultat", "liste" eller "rediger".
let skjerm = "hjem";

function vis(navn, html) {
  skjerm = navn;
  if (navn !== "hjem") apentFilter = null;
  if (navn !== "muntlig") stoppTidtaker();
  app.innerHTML = html;
  hjemKnapp.hidden = navn === "hjem" || maLoggeInn();
  menyKnapp.hidden = maLoggeInn();
  // Tegnes siden på nytt (f.eks. etter synk) mens menyen er åpen, oppdateres menyen også.
  if (maLoggeInn()) lukkMeny();
  else if (!meny.hidden) meny.innerHTML = menyInnhold();
  window.scrollTo(0, 0);
}

// ---------- Menyen (de tre strekene øverst til høyre) ----------

function apneMeny() {
  meny.innerHTML = menyInnhold();
  meny.hidden = false;
  menyKnapp.setAttribute("aria-expanded", "true");
}

function lukkMeny() {
  meny.hidden = true;
  menyKnapp.setAttribute("aria-expanded", "false");
}

// Profil, fag, innstillinger og utlogging.
function menyInnhold() {
  const antallSkjulte = Object.values(lagret.skjult).filter(s => s.skjult).length;
  const profil = sky && bruker
    ? `<b>${esc(bruker.epost)}</b>${erAdmin() ? ` <span class="merke">Admin</span>` : ""}<br>
       <span class="dempet" id="synkstatus">${esc(synkStatus)}</span>`
    : `<span class="dempet">Ikke kontakt med serveren. Fremgangen lagres på enheten og synkroniseres senere.</span>`;
  return `
    <div class="menydel">${profil}</div>
    <div class="menydel">
      <h3>Fag</h3>
      ${synligeFag().map(f => `
        <button class="menyvalg ${f.kode === lagret.valgtFag ? "aktiv" : ""}" data-handling="velg-fag" data-fag="${f.kode}">
          ${esc(f.kode)} ${esc(f.navn)}${fagMerke(f)}${f.kode === lagret.valgtFag ? " ✓" : ""}
        </button>`).join("")}
    </div>
    <div class="menydel">
      <h3>Innstillinger</h3>
      ${erAdmin() ? `<button class="menyvalg" data-handling="admin">Adminpanel</button>` : ""}
      <button class="menyvalg" data-handling="tilbakemelding">Send tilbakemelding eller meld feil</button>
      <button class="menyvalg" data-handling="vis-skjulte">Skjulte kort og spørsmål${antallSkjulte ? ` (${antallSkjulte})` : ""}</button>
      <button class="menyvalg" data-handling="eksporter">Last ned sikkerhetskopi</button>
      <label class="menyvalg">Hent sikkerhetskopi
        <input type="file" id="importer" accept=".json,application/json" hidden>
      </label>
      <button class="menyvalg" data-handling="nullstill">Nullstill fremgang</button>
    </div>
    ${sky && bruker ? `<div class="menydel"><button class="menyvalg" data-handling="logg-ut">Logg ut</button></div>` : ""}`;
}

// Man må logge inn før man får bruke appen (når Supabase er satt opp i config.js).
// Unntak: uten nett, når Supabase-biblioteket ikke kunne lastes, slipper den inn som
// har vært innlogget på enheten før. Da øver man lokalt og synker senere.
function maLoggeInn() {
  if (!innloggingSattOpp || bruker) return false;
  if (!sky) return !lagret.profil;
  return true;
}

function visLaster() {
  vis("laster", `<section class="panel"><p class="dempet">Laster …</p></section>`);
}

function visIngenNett() {
  vis("ingennett", `
    <section class="panel">
      <h2>Ingen kontakt med serveren</h2>
      <p>Du må være på nett for å logge inn første gang. Sjekk nettet og prøv igjen.</p>
      <button class="hoved" data-handling="last-pa-nytt">Prøv igjen</button>
    </section>`);
}

// =====================================================================
// 3. Forside
// =====================================================================

function visHjem() {
  // Ikke innlogget: vis innloggingen i stedet (eller «Laster …» mens vi sjekker).
  if (maLoggeInn()) {
    if (!sky) return visIngenNett();
    return innloggingSjekket ? visLoggInn() : visLaster();
  }
  // Ikke valgt fag ennå: vis fagsiden.
  if (!valgtFag()) return visVelgFag();

  const kort = filtrert(alleKort());
  const oppgaver = filtrert(alleOppgaver());

  const iBoks = [0, 0, 0, 0, 0, 0]; // plass 0 = nye kort, 1–5 = boksene
  kort.forEach(k => iBoks[boks(k.id)]++);
  const kan = iBoks[5];
  const sisteRunde = mineResultater().at(-1);

  const antallValg = ANTALL_VALG.map(a =>
    `<option value="${a}" ${a === antallValgt ? "selected" : ""}>${a} spørsmål</option>`).join("");
  // Har utvalget (f.eks. ett tema) færre spørsmål enn valgt, blir runden kortere.
  const forFa = oppgaver.length > 0 && oppgaver.length < Number(antallValgt)
    ? `<p class="dempet">Utvalget har bare ${oppgaver.length} spørsmål, så runden får ${oppgaver.length}.</p>` : "";

  vis("hjem", `
    ${kontoPanel()}
    ${pabegyntPanel()}
    ${provePanel()}

    <section class="panel">
      <h2>Hva vil du øve på?</h2>
      <div class="filtre">
        ${flervalgFilter("tema", "Tema", temaer(), "Alle tema")}
        ${flervalgFilter("eksamen", eksamenEtikett(), eksamener(), alleEksamenerTekst())}
      </div>
      <p class="dempet">${kort.length} flashcards og ${oppgaver.length} flervalgsspørsmål i utvalget.</p>
    </section>

    <section class="panel">
      <h2>Flashcards</h2>
      <ol class="slik">
        <li>Les spørsmålet og svar i hodet.</li>
        <li>Snu kortet og se svaret.</li>
        <li>Si ærlig hvor godt du kunne det. Kort du ikke kan, kommer oftere igjen.</li>
      </ol>
      <div class="skala"><span>Ikke forstått</span><span>Forstått</span></div>
      <div class="bokser">
        ${BOKSNAVN.map((navn, i) => `<div class="niva${i}"><b>${iBoks[i]}</b><span>${navn}</span></div>`).join("")}
      </div>
      <div class="fremdrift"><div style="width:${kort.length ? Math.round(100 * kan / kort.length) : 0}%"></div></div>
      <p class="dempet">Du kan ${kan} av ${kort.length} kort.</p>
      <button class="hoved" data-handling="start-kort" ${kort.length ? "" : "disabled"}>Øv med flashcards</button>
    </section>

    <section class="panel">
      <h2>Flervalg</h2>
      <p class="dempet">Eksamensspørsmål med stokkede alternativer. Du får forklaring etter hvert svar,
        og karakter og svake tema etter runden.</p>
      <label>Antall spørsmål <select id="antall">${antallValg}</select></label>
      ${forFa}
      <button class="hoved" data-handling="start-flervalg" ${oppgaver.length ? "" : "disabled"}>Start runde</button>
      ${sisteRunde ? `<p class="dempet">Siste runde: <b>${sisteRunde.karakter}</b> (${sisteRunde.prosent} %) · ${esc(formaterDato(sisteRunde.dato))}</p>` : ""}
      <div class="knapperad liten"><button data-handling="mine-resultater">Mine resultater${mineResultater().length ? ` (${mineResultater().length})` : ""}</button></div>
    </section>

    ${muntligPanel()}
  `);
}

// På forsiden når en flervalgsrunde er påbegynt men ikke fullført.
function pabegyntPanel() {
  const p = pabegynt();
  if (!p) return "";
  const { besvart, totalt } = pabegyntStatus();
  return `
    <section class="panel pabegynt">
      <h2>Påbegynt flervalgsrunde</h2>
      <p><b>${besvart} av ${totalt}</b> spørsmål besvart · ${esc(p.beskrivelse)}</p>
      <div class="fremdrift"><div style="width:${Math.round(100 * besvart / totalt)}%"></div></div>
      <p class="dempet">Startet ${esc(formaterDato(p.startet))}</p>
      <button class="hoved" data-handling="fortsett-runde">Fortsett der du slapp</button>
      <div class="knapperad liten"><button data-handling="forkast-runde">Forkast runden</button></div>
    </section>`;
}

// På forsiden når faget er en prøveversjon: forklaring og knapp til vurderingsskjemaet.
function provePanel() {
  const f = valgtFag();
  if (!f || f.status !== "prove") return "";
  return `
    <section class="panel prove">
      <h2>${esc(f.kode)} er en prøveversjon</h2>
      <p>Innholdet er nytt og laget ut fra forelesningene. Prøv det gjerne, og si fra hvordan det fungerer.
        Da blir det bedre før faget publiseres for fullt.</p>
      <button class="hoved" data-handling="vurder-fag">Vurder faget</button>
    </section>`;
}

// Øverst på forsiden når man er uten nett. Kontoen og utloggingen ligger i menyen.
function kontoPanel() {
  if (!innloggingSattOpp || (sky && bruker)) return "";
  return `<section class="panel konto"><p class="dempet">Ingen kontakt med serveren akkurat nå.
    Fremgangen lagres på denne enheten og synkroniseres når nettet er tilbake.</p></section>`;
}

// Fagsiden: vises etter innlogging til man har valgt fag. Senere byttes fag i menyen.
function visVelgFag() {
  const alleOpp = sammensatt("sporsmal", OPPGAVER);
  const alleK = sammensatt("kort", KORT);
  vis("velgfag", `
    <section class="panel">
      <h2>Velg fag</h2>
      <p class="dempet">Hvilket fag vil du øve på? Appen husker valget, og du kan bytte i menyen (☰) øverst til høyre.</p>
    </section>
    ${synligeFag().map(f => {
      const opp = alleOpp.filter(x => fagFor(x) === f.kode);
      const kort = alleK.filter(x => fagFor(x) === f.kode);
      const eks = [...new Set(opp.flatMap(eksamenerFor))];
      const runder = lagret.resultater.filter(r => (r.emne || "AUT2201") === f.kode).length;
      const ovd = kort.filter(k => boks(k.id) > 0).length;
      return `
        <button class="panel fagvalg ${f.kode === lagret.valgtFag ? "aktiv" : ""}" data-handling="velg-fag" data-fag="${f.kode}">
          <span class="fagkode">${esc(f.kode)}</span>
          <b>${esc(f.navn)}${fagMerke(f)}</b>
          <span class="dempet">${opp.length} spørsmål · ${kort.length} flashcards${eks.length ? " · " + esc(eks.join(", ")) : ""}</span>
          <span class="dempet">${runder} runder fullført · ${ovd} kort øvd</span>
        </button>`;
    }).join("")}
  `);
}

// =====================================================================
// 4. Flashcards
// =====================================================================

// Hvor ofte et kort trekkes, ut fra boksen det ligger i (plass 0 = nytt kort).
// Et kort i boks 1 trekkes 16 ganger så ofte som et kort i boks 5.
const VEKT = [10, 16, 8, 4, 2, 1];

// Navnene på boksene, fra ikke forstått til forstått. Plass 0 er kort man ikke har øvd på ennå.
const BOKSNAVN = ["Ikke øvd", "Kan ikke", "Lærer", "Halvveis", "Nesten", "Kan"];

function boks(id) { return lagret.bokser[id] || 0; }

// Pågående økt: kortene i utvalget, kortet som vises, om det er snudd, og telling av svar.
let okt = null;

function startKort() {
  okt = { kort: filtrert(alleKort()), naa: null, snudd: false, telling: { kunne: 0, usikker: 0, ikke: 0 } };
  nesteKort();
}

function nesteKort() {
  // Unngå samme kort to ganger på rad (hvis det finnes flere).
  const kandidater = okt.kort.length > 1 ? okt.kort.filter(k => k.id !== okt.naa?.id) : okt.kort;

  // Vektet trekning: summer vektene og finn kortet et tilfeldig tall lander på.
  const sum = kandidater.reduce((s, k) => s + VEKT[boks(k.id)], 0);
  let tall = Math.random() * sum;
  okt.naa = kandidater.find(k => (tall -= VEKT[boks(k.id)]) < 0) || kandidater[0];
  okt.snudd = false;
  visKort();
}

function visKort() {
  const k = okt.naa;
  const t = okt.telling;
  const b = boks(k.id);

  const bakside = okt.snudd ? `
      <hr>
      <p class="bakside">${esc(k.bakside)}</p>
      ${k.forklaring ? `<p class="forklaring">${esc(k.forklaring)}</p>` : ""}`
    : `<p class="hint">Trykk på kortet for å snu det</p>`;

  const svarknapper = okt.snudd ? `
    <div class="svarknapper">
      <button class="ikke" data-handling="svar-kort" data-svar="ikke">Kunne ikke</button>
      <button class="usikker" data-handling="svar-kort" data-svar="usikker">Usikker</button>
      <button class="kunne" data-handling="svar-kort" data-svar="kunne">Kunne</button>
    </div>` : "";

  vis("kort", `
    <div class="statuslinje">
      <span>Kunne ${t.kunne} · Usikker ${t.usikker} · Kunne ikke ${t.ikke}</span>
      <span>${BOKSNAVN[b]}</span>
    </div>
    <article class="flashcard ${okt.snudd ? "snudd" : ""}" data-handling="snu">
      <div>${merker(k)}</div>
      <p class="forside">${esc(k.forside)}</p>
      ${bakside}
      <p class="kilde">Kilde: ${esc(kildeKort(k))}</p>
    </article>
    ${svarknapper}
    <div class="knapperad liten">
      ${elementKnapper("kort", k.id)}
      <button data-handling="hjem">Avslutt</button>
    </div>
  `);
}

// Knapper under et kort/spørsmål: admin redigerer, alle kan skjule for seg selv og melde feil.
function elementKnapper(type, id) {
  return `
    ${erAdmin() ? `<button data-handling="rediger" data-type="${type}" data-id="${id}">Rediger</button>` : ""}
    <button data-handling="skjul" data-id="${id}">Skjul for meg</button>
    <button data-handling="meld-feil" data-id="${id}">Meld feil</button>`;
}

function svarKort(svar) {
  const id = okt.naa.id;
  const b = boks(id);
  if (svar === "kunne") lagret.bokser[id] = b === 0 ? 2 : Math.min(5, b + 1);
  if (svar === "usikker") lagret.bokser[id] = Math.max(1, b - 1);
  if (svar === "ikke") lagret.bokser[id] = 1;
  lagret.boksTid[id] = naa();
  okt.telling[svar]++;
  lagre();
  nesteKort();
}

// Kalles når man kommer tilbake fra redigering midt i en økt.
function fortsettKort() {
  okt.kort = filtrert(alleKort());
  if (okt.kort.length === 0) return visHjem();
  const oppdatert = okt.kort.find(k => k.id === okt.naa.id);
  if (oppdatert) {
    okt.naa = oppdatert;
    visKort();
  } else {
    nesteKort(); // kortet ble slettet
  }
}

// =====================================================================
// 4b. Muntlig øving
// =====================================================================
// Forklar-kort og praktiske scenarier (lista MUNTLIG, se f.eks. data/aut2200-muntlig.js).
// Man forklarer høyt med tidtaker, krysser av i sjekklisten, svarer på oppfølgingsspørsmål
// og vurderer seg selv. Egenvurderingen flytter kortet mellom boksene, som for flashcards,
// og lagres og synkes på samme måte (lagret.bokser). Modusen vises bare i fag som har innhold.

const TIDSVALG = ["2", "3", "4", "5", "8", "10"]; // minutter
let muntligMinutter = "4";
let muntligType = ""; // "" = alle, "forklar" eller "scenario"

// Pågående økt: kortene i utvalget, kortet som vises, hvor man er i kortet (fase),
// avkryssede punkter, hvilket oppfølgingsspørsmål som vises, tidtakeren og telling av svar.
let muntlig = null;

function alleMuntlige() { return iValgtFag(window.MUNTLIG || []).filter(x => !erSkjult(x.id)); }
function muntligUtvalg() { return filtrert(alleMuntlige()).filter(x => !muntligType || x.type === muntligType); }

function startMuntlig() {
  muntlig = { kort: muntligUtvalg(), naa: null, telling: { klarte: 0, delvis: 0, ikke: 0 }, tid: null };
  if (!muntlig.kort.length) return visHjem();
  nesteMuntlig();
}

function nesteMuntlig() {
  stoppTidtaker();
  const kandidater = muntlig.kort.length > 1 ? muntlig.kort.filter(k => k.id !== muntlig.naa?.id) : muntlig.kort;
  const sum = kandidater.reduce((s, k) => s + VEKT[boks(k.id)], 0);
  let tall = Math.random() * sum;
  muntlig.naa = kandidater.find(k => (tall -= VEKT[boks(k.id)]) < 0) || kandidater[0];
  muntlig.fase = "forklar";         // forklar → sjekk → oppfolging → vurder
  muntlig.huket = [];               // indeksene til punktene man har krysset av
  muntlig.oppIndeks = 0;            // hvilket oppfølgingsspørsmål som vises
  muntlig.visSvar = false;
  muntlig.tid = { gjenstar: Number(muntligMinutter) * 60, kjorer: false };
  visMuntlig();
}

// ---------- Tidtaker ----------

let tidtakerIntervall = null;

function formaterTid(sek) {
  const m = Math.floor(sek / 60), s = sek % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function oppdaterTidtaker() {
  const el = document.getElementById("tidtaker");
  if (!el || !muntlig?.tid) return;
  el.textContent = muntlig.tid.gjenstar > 0 ? formaterTid(muntlig.tid.gjenstar) : "Tiden er ute!";
  el.classList.toggle("ute", muntlig.tid.gjenstar === 0);
  const knapp = document.getElementById("tidtaker-knapp");
  if (knapp) knapp.textContent = muntlig.tid.kjorer ? "Pause" : (muntlig.tid.gjenstar < Number(muntligMinutter) * 60 ? "Fortsett" : "Start tidtaker");
}

function startTidtaker() {
  if (!muntlig?.tid || muntlig.tid.gjenstar === 0) return;
  muntlig.tid.kjorer = true;
  clearInterval(tidtakerIntervall);
  tidtakerIntervall = setInterval(() => {
    muntlig.tid.gjenstar = Math.max(0, muntlig.tid.gjenstar - 1);
    if (muntlig.tid.gjenstar === 0) {
      stoppTidtaker();
      if (navigator.vibrate) navigator.vibrate(300);
    }
    oppdaterTidtaker();
  }, 1000);
  oppdaterTidtaker();
}

function stoppTidtaker() {
  clearInterval(tidtakerIntervall);
  tidtakerIntervall = null;
  if (muntlig?.tid) muntlig.tid.kjorer = false;
  oppdaterTidtaker();
}

// ---------- Visning ----------

function visMuntlig() {
  const k = muntlig.naa;
  const t = muntlig.telling;
  const erScenario = k.type === "scenario";
  const punkter = (erScenario ? k.steg : k.sjekkliste) || [];
  const opp = k.oppfolging || [];
  const fase = muntlig.fase;

  const tidtaker = `
    <div class="tidtakerboks">
      <span id="tidtaker" class="tidtaker">${formaterTid(muntlig.tid.gjenstar)}</span>
      <div class="knapperad liten">
        <button id="tidtaker-knapp" data-handling="tidtaker">Start tidtaker</button>
        <button data-handling="tidtaker-nullstill">Start på nytt</button>
      </div>
    </div>`;

  let innhold = "";
  if (fase === "forklar") {
    innhold = `
      <p class="dempet">${erScenario
        ? "Beskriv høyt hva du gjør, steg for steg, og hvorfor."
        : "Forklar høyt, som om du snakker til sensor. Start tidtakeren når du begynner."}</p>
      <button class="hoved" data-handling="muntlig-fase" data-fase="sjekk">${erScenario ? "Vis fremgangsmåten" : "Vis sjekklisten"}</button>`;
  }
  if (fase === "sjekk") {
    innhold = `
      <h3>${erScenario ? "Fremgangsmåte – kryss av stegene du fikk med" : "Sjekkliste – kryss av det du fikk med"}</h3>
      <ul class="sjekkliste">
        ${punkter.map((p, i) => `
          <li><label><input type="checkbox" data-punkt="${i}" ${muntlig.huket.includes(i) ? "checked" : ""}>
            <span>${erScenario ? `<b>${i + 1}.</b> ` : ""}${esc(p)}</span></label></li>`).join("")}
      </ul>
      <p class="dempet" id="sjekktelling">Du fikk med ${muntlig.huket.length} av ${punkter.length}.</p>
      <button class="hoved" data-handling="muntlig-fase" data-fase="${opp.length ? "oppfolging" : "vurder"}">
        ${opp.length ? "Videre til oppfølgingsspørsmål" : "Vurder deg selv"}</button>`;
  }
  if (fase === "oppfolging") {
    const o = opp[muntlig.oppIndeks];
    const siste = muntlig.oppIndeks === opp.length - 1;
    innhold = `
      <h3>Oppfølgingsspørsmål ${muntlig.oppIndeks + 1} av ${opp.length}</h3>
      <p class="oppfolging">${esc(o.sporsmal)}</p>
      ${muntlig.visSvar
        ? `<div class="forklaringsboks"><p>${esc(o.svar)}</p></div>`
        : `<p class="dempet">Svar høyt først, og se så på svaret.</p>
           <button data-handling="muntlig-svar">Vis svar</button>`}
      <button class="hoved" data-handling="${siste ? "muntlig-fase" : "muntlig-neste-opp"}" data-fase="vurder">
        ${siste ? "Vurder deg selv" : "Neste oppfølgingsspørsmål"}</button>`;
  }
  if (fase === "vurder") {
    innhold = `
      <h3>Hvordan gikk det?</h3>
      ${punkter.length ? `<p class="dempet">Du fikk med ${muntlig.huket.length} av ${punkter.length} ${erScenario ? "steg" : "punkter"}.</p>` : ""}
      <div class="svarknapper">
        <button class="ikke" data-handling="vurder-muntlig" data-svar="ikke">Klarte ikke</button>
        <button class="usikker" data-handling="vurder-muntlig" data-svar="delvis">Delvis</button>
        <button class="kunne" data-handling="vurder-muntlig" data-svar="klarte">Klarte det</button>
      </div>
      <p class="dempet">«Klarte ikke» kommer oftest igjen, «Klarte det» sjeldnest.</p>`;
  }

  vis("muntlig", `
    <div class="statuslinje">
      <span>Klarte ${t.klarte} · Delvis ${t.delvis} · Klarte ikke ${t.ikke}</span>
      <span>${BOKSNAVN[boks(k.id)]}</span>
    </div>
    <article class="panel muntligkort">
      <div><span class="merke">${erScenario ? "Scenario" : "Forklar"}</span> <span class="merke">${esc(k.tema)}</span></div>
      <p class="forside">${esc(k.sporsmal)}</p>
      ${tidtaker}
      ${innhold}
      <p class="kilde">Kilde: ${esc(k.kilde || k.eksamen)}</p>
    </article>
    <div class="knapperad liten">
      <button data-handling="muntlig-hopp">Hopp over</button>
      <button data-handling="hjem">Avslutt</button>
    </div>
  `);
  oppdaterTidtaker();
}

// Egenvurderingen flytter kortet mellom boksene, akkurat som «Kunne / Usikker / Kunne ikke».
function vurderMuntlig(svar) {
  const id = muntlig.naa.id;
  const b = boks(id);
  if (svar === "klarte") lagret.bokser[id] = b === 0 ? 2 : Math.min(5, b + 1);
  if (svar === "delvis") lagret.bokser[id] = Math.max(1, b - 1);
  if (svar === "ikke") lagret.bokser[id] = 1;
  lagret.boksTid[id] = naa();
  muntlig.telling[svar]++;
  lagre();
  nesteMuntlig();
}

// Panelet på forsiden. Vises bare når faget har muntlig innhold.
function muntligPanel() {
  const alle = alleMuntlige();
  if (!alle.length) return "";
  const utvalg = muntligUtvalg();
  const iFilter = filtrert(alle);
  const forklar = iFilter.filter(x => x.type === "forklar").length;
  const scenario = iFilter.filter(x => x.type === "scenario").length;
  const iBoks = [0, 0, 0, 0, 0, 0];
  utvalg.forEach(k => iBoks[boks(k.id)]++);
  const typeValg = [["", "Alle"], ["forklar", "Forklar-kort"], ["scenario", "Scenarier"]]
    .map(([v, t]) => `<option value="${v}" ${v === muntligType ? "selected" : ""}>${t}</option>`).join("");
  const tidValg = TIDSVALG.map(m => `<option value="${m}" ${m === muntligMinutter ? "selected" : ""}>${m} minutter</option>`).join("");
  return `
    <section class="panel">
      <h2>Muntlig øving</h2>
      <p class="dempet">Øv som til muntlig eksamen: forklar høyt mens tidtakeren går, sjekk hva du fikk med,
        svar på oppfølgingsspørsmål og vurder deg selv.</p>
      <p class="dempet">${forklar} forklar-kort og ${scenario} scenarier i utvalget.</p>
      <div class="bokser">
        ${BOKSNAVN.map((navn, i) => `<div class="niva${i}"><b>${iBoks[i]}</b><span>${navn}</span></div>`).join("")}
      </div>
      <div class="filtre">
        <label>Type <select id="muntlig-type">${typeValg}</select></label>
        <label>Tid <select id="muntlig-tid">${tidValg}</select></label>
      </div>
      <button class="hoved" data-handling="start-muntlig" ${utvalg.length ? "" : "disabled"}>Start muntlig øving</button>
    </section>`;
}

// =====================================================================
// 5. Flervalg
// =====================================================================

// Pågående runde: spørsmålene (hvert med stokket rekkefølge på alternativene og svaret man
// har gitt, eller null), hvor langt vi har kommet, hva som er valgt nå, og resultatene så langt.
let runde = null;

// beskrivelse: hva runden besto av, f.eks. «Statistikk · Alle eksamener». Lagres i historikken.
// ovelse = true for «Øv på feilene»: runden lagres ikke i Mine resultater.
function startFlervalg(liste, antall, beskrivelse, ovelse = false) {
  const utvalg = stokk(liste).slice(0, antall);
  runde = {
    sporsmal: utvalg.map(o => ({ o, rekkefolge: stokk([0, 1, 2, 3]), svar: null })),
    i: 0,
    valgt: null,
    resultater: [],
    beskrivelse,
    ovelse,
    startet: naa(),
    lagret: false
  };
  lagreRundeTilstand();
  visSporsmal();
}

// Starter en ny runde, men spør først hvis det finnes en påbegynt runde som da forkastes.
async function startNyRunde(liste, antall, beskrivelse) {
  if (pabegynt()) {
    const { besvart, totalt } = pabegyntStatus();
    if (!await bekreft(`Du har en påbegynt runde (${besvart} av ${totalt} besvart).\n\nVil du starte en ny? Den påbegynte runden forkastes.`)) return;
  }
  startFlervalg(liste, antall, beskrivelse);
}

// Den påbegynte runden i faget som er valgt, eller null.
function pabegynt() { return lagret.pagaendeRunde[lagret.valgtFag] || null; }

// Setter (eller fjerner, med null) den påbegynte runden i faget som er valgt, og sender
// endringen til skyen.
function settPabegyntRunde(verdi) {
  if (verdi) lagret.pagaendeRunde[lagret.valgtFag] = verdi;
  else delete lagret.pagaendeRunde[lagret.valgtFag];
  lagret.pagaendeRundeTid = naa();
  lagre();
}

// Lagrer runden etter hvert svar, så den kan fortsettes hvis appen lukkes – også på en annen enhet.
function lagreRundeTilstand() {
  settPabegyntRunde({
    beskrivelse: runde.beskrivelse,
    ovelse: runde.ovelse,
    startet: runde.startet,
    sporsmal: runde.sporsmal.map(s => ({ id: s.o.id, rekkefolge: s.rekkefolge, svar: s.svar }))
  });
}

function pabegyntStatus() {
  const s = pabegynt().sporsmal;
  return { besvart: s.filter(x => x.svar !== null).length, totalt: s.length };
}

// Henter frem den påbegynte runden og fortsetter ved første spørsmål som ikke er besvart.
function fortsettPabegyntRunde() {
  const p = pabegynt();
  const sporsmal = p.sporsmal
    .map(s => ({ o: alleOppgaver().find(o => o.id === s.id), rekkefolge: s.rekkefolge, svar: s.svar }))
    .filter(s => s.o); // spørsmål som er slettet eller skjult siden, tas ut
  if (sporsmal.length === 0) {
    settPabegyntRunde(null);
    return visHjem();
  }
  runde = {
    sporsmal,
    i: 0,
    valgt: null,
    resultater: sporsmal.filter(s => s.svar !== null).map(s => ({ o: s.o, riktig: s.svar === s.o.riktig })),
    beskrivelse: p.beskrivelse,
    ovelse: Boolean(p.ovelse),
    startet: p.startet,
    lagret: false
  };
  const neste = sporsmal.findIndex(s => s.svar === null);
  if (neste === -1) return visResultat(); // alt var besvart, bare resultatet manglet
  runde.i = neste;
  visSporsmal();
}

function forkastPabegyntRunde() {
  settPabegyntRunde(null);
  visHjem();
}

function beskrivFilter() {
  const tekst = (valgt, alle, flertall) =>
    !valgt.length ? alle : valgt.length <= 2 ? valgt.join(" og ") : `${valgt.length} ${flertall}`;
  return `${tekst(filter.tema, "Alle tema", "tema")} · ${tekst(filter.eksamen, alleEksamenerTekst(), barePensum() ? "forelesninger" : "eksamener")}`;
}

function visSporsmal() {
  const { o, rekkefolge } = runde.sporsmal[runde.i];
  const besvart = runde.valgt !== null;
  const erSiste = runde.i === runde.sporsmal.length - 1;

  // rekkefolge sier hvilket originalt alternativ (0–3) som vises på hver plass.
  const alternativer = rekkefolge.map(nr => {
    let klasse = "";
    if (besvart && nr === o.riktig) klasse = "riktig";
    else if (besvart && nr === runde.valgt) klasse = "feil";
    return `<button class="alternativ ${klasse}" data-handling="velg" data-nr="${nr}" ${besvart ? "disabled" : ""}>
      ${esc(o.alternativer[nr])}</button>`;
  }).join("");

  let forklaring = "";
  if (besvart) {
    const riktig = runde.valgt === o.riktig;
    const kandidatNotat = o.kandidatsvar !== undefined && o.kandidatsvar !== o.riktig
      ? `<p class="dempet">I eksamensbesvarelsen ble «${esc(o.alternativer[o.kandidatsvar])}» krysset av.</p>` : "";
    const usikkerNotat = o.sikkerhet === "lav"
      ? `<p class="dempet">Merk: fasiten er generert og usikker – sjekk i pensum.</p>` : "";
    forklaring = `
      <div class="forklaringsboks ${riktig ? "" : "ikke-ok"}">
        <p><b>${riktig ? "Riktig!" : "Feil."}</b> ${esc(o.forklaring)}</p>
        ${usikkerNotat}
        ${kandidatNotat}
        <p class="kilde">Kilde: ${esc(kildeOppgave(o))} · Fasit: ${esc(o.fasit)}</p>
      </div>
      <button class="hoved" data-handling="neste">${erSiste ? "Se resultat" : "Neste spørsmål"}</button>
      <div class="knapperad liten">${elementKnapper("sporsmal", o.id)}</div>`;
  }

  vis("flervalg", `
    <div class="statuslinje">
      <span>Spørsmål ${runde.i + 1} av ${runde.sporsmal.length}</span>
      <span>${runde.resultater.filter(r => r.riktig).length} riktige</span>
    </div>
    <section class="panel">
      <div>${merker(o)}</div>
      ${o.figur ? `<a href="${esc(o.figur)}" target="_blank" title="Åpne figuren i full størrelse">
        <img class="figur" src="${esc(o.figur)}" alt="Figur til oppgave ${o.nr}"></a>` : ""}
      <p class="oppgavetekst">${esc(o.tekst)}</p>
      ${alternativer}
      ${forklaring}
    </section>
    <div class="knapperad liten"><button data-handling="hjem">Ta pause – fortsett senere</button></div>
    <p class="dempet">Svarene dine lagres underveis. Lukker du appen, kan du fortsette der du slapp fra forsiden.</p>
  `);
}

function velgAlternativ(nr) {
  const gjeldende = runde.sporsmal[runde.i];
  runde.valgt = nr;
  gjeldende.svar = nr;
  runde.resultater.push({ o: gjeldende.o, riktig: nr === gjeldende.o.riktig });
  lagreRundeTilstand();
  visSporsmal();
}

function nesteSporsmal() {
  runde.i++;
  runde.valgt = null;
  if (runde.i >= runde.sporsmal.length) visResultat();
  else visSporsmal();
}

// Kalles når man kommer tilbake fra redigering midt i en runde.
function fortsettFlervalg() {
  const gjeldende = runde.sporsmal[runde.i];
  const oppdatert = alleOppgaver().find(o => o.id === gjeldende.o.id);
  if (oppdatert) {
    gjeldende.o = oppdatert;
    return visSporsmal();
  }
  // Spørsmålet ble slettet: fjern det og svaret på det fra runden.
  runde.sporsmal.splice(runde.i, 1);
  runde.resultater.pop();
  runde.valgt = null;
  lagreRundeTilstand();
  if (runde.i >= runde.sporsmal.length) visResultat();
  else visSporsmal();
}

const SVAK_GRENSE = 0.7; // tema med under 70 % riktige regnes som svake

// NTNUs prosentvurderingsmetode: laveste prosent som gir hver karakter.
const KARAKTERSKALA = [
  { karakter: "A", fra: 89 },
  { karakter: "B", fra: 77 },
  { karakter: "C", fra: 65 },
  { karakter: "D", fra: 53 },
  { karakter: "E", fra: 41 },
  { karakter: "F", fra: 0 }
];

function karakterFor(prosent) {
  return KARAKTERSKALA.find(k => prosent >= k.fra).karakter;
}

function erBestatt(karakter) { return karakter !== "F"; }

// Gjør { tema: { riktig, totalt } } om til en liste sortert med svakeste tema først.
function temaOversikt(perTema) {
  return Object.entries(perTema)
    .map(([tema, t]) => ({ tema, ...t, andel: t.riktig / t.totalt }))
    .sort((a, b) => a.andel - b.andel);
}

// Stolper med andel riktige per tema. Med klikkbar = true kan man trykke for å øve på temaet.
function temaStolper(temaListe, klikkbar) {
  return temaListe.map(t => `
    <div class="temarad">
      <div class="navn">
        ${klikkbar
          ? `<button class="lenkeknapp" data-handling="ov-tema" data-tema="${esc(t.tema)}">${esc(t.tema)}</button>`
          : `<span>${esc(t.tema)}</span>`}
        <span>${t.riktig} / ${t.totalt}</span>
      </div>
      <div class="stolpe ${t.andel < SVAK_GRENSE ? "svak" : ""}"><div style="width:${Math.round(t.andel * 100)}%"></div></div>
    </div>`).join("");
}

// Lagrer den fullførte runden i historikken (bare én gang, selv om resultatsiden tegnes på nytt).
function lagreRunde(antallRiktig, prosent, karakter, perTema) {
  if (runde.lagret) return;
  runde.lagret = true;
  if (runde.ovelse) { // øvingsrunder lagres ikke i Mine resultater
    settPabegyntRunde(null);
    return;
  }
  lagret.resultater.push({
    id: lagNyId(),
    emne: lagret.valgtFag,
    dato: naa(),
    beskrivelse: runde.beskrivelse,
    antall: runde.resultater.length,
    riktige: antallRiktig,
    prosent,
    karakter,
    perTema,
    feil: runde.feil.map(o => o.id)
  });
  settPabegyntRunde(null); // runden er ferdig og trenger ikke fortsettes
}

function visResultat() {
  const resultater = runde.resultater;
  if (resultater.length === 0) { // alle spørsmålene ble slettet underveis
    settPabegyntRunde(null);
    return visHjem();
  }

  const antallRiktig = resultater.filter(r => r.riktig).length;
  const prosent = Math.round(100 * antallRiktig / resultater.length);
  const karakter = karakterFor(prosent);

  // Tell riktige per tema.
  const perTema = {};
  resultater.forEach(r => {
    perTema[r.o.tema] = perTema[r.o.tema] || { riktig: 0, totalt: 0 };
    perTema[r.o.tema].totalt++;
    if (r.riktig) perTema[r.o.tema].riktig++;
  });
  const temaListe = temaOversikt(perTema);
  const svake = temaListe.filter(t => t.andel < SVAK_GRENSE);

  runde.feil = resultater.filter(r => !r.riktig).map(r => r.o);
  lagreRunde(antallRiktig, prosent, karakter, perTema);

  vis("resultat", `
    <section class="panel resultat">
      <h2>Resultat</h2>
      ${runde.ovelse ? `<p class="dempet">Dette var en øvingsrunde på feilene. Den lagres ikke i Mine resultater.</p>` : ""}
      <div class="karakterlinje">
        <span class="karakter karakter-${karakter}">${karakter}</span>
        <div>
          <p class="poengsum">${antallRiktig} / ${resultater.length}</p>
          <p class="dempet">${prosent} % riktig · <b class="${erBestatt(karakter) ? "bestatt" : "ikke-bestatt"}">${erBestatt(karakter) ? "Bestått" : "Ikke bestått"}</b></p>
        </div>
      </div>
      <p class="dempet">Karakter etter NTNUs prosentskala: A ≥ 89 %, B ≥ 77 %, C ≥ 65 %, D ≥ 53 %, E ≥ 41 %.</p>
      <div class="knapperad liten"><button data-handling="mine-resultater">Se alle resultatene dine</button></div>
    </section>

    <section class="panel">
      <h2>Svake tema</h2>
      ${svake.length
        ? `<p>Du bør øve mer på: <b>${svake.map(t => esc(t.tema)).join(", ")}</b></p>`
        : `<p>Ingen svake tema i denne runden. Bra!</p>`}
      ${temaStolper(temaListe, false)}
    </section>

    ${runde.feil.length ? `
    <section class="panel">
      <h2>Spørsmål du svarte feil på</h2>
      <ul class="liste">
        ${runde.feil.map(o => `<li><span class="dempet">${esc(kildeOppgave(o))}</span><br>${esc(o.tekst.slice(0, 140))}${o.tekst.length > 140 ? "…" : ""}</li>`).join("")}
      </ul>
    </section>` : ""}

    ${runde.feil.length ? `<button class="hoved" data-handling="ov-feil">Øv på feilene (${runde.feil.length})</button>` : ""}
    <button class="hoved" data-handling="start-flervalg">Ny runde</button>
  `);
}

// ---------- Mine resultater: historikk over fullførte runder ----------

function formaterDato(iso) {
  return new Date(iso).toLocaleString("nb-NO",
    { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function visMineResultater() {
  const liste = mineResultater();
  if (liste.length === 0) {
    return vis("historikk", `
      <section class="panel">
        <h2>Mine resultater</h2>
        <p>Du har ikke fullført noen flervalgsrunder ennå. Når du kommer til slutten av en runde,
          lagres resultatet og karakteren her.</p>
        <button class="hoved" data-handling="hjem">Til forsiden</button>
      </section>`);
  }

  const snitt = Math.round(liste.reduce((sum, r) => sum + r.prosent, 0) / liste.length);
  const beste = liste.reduce((best, r) => (r.prosent > best.prosent ? r : best));
  const antallBestatt = liste.filter(r => erBestatt(r.karakter)).length;

  // Legg sammen riktige per tema fra alle rundene.
  const perTema = {};
  liste.forEach(r => Object.entries(r.perTema).forEach(([tema, t]) => {
    perTema[tema] = perTema[tema] || { riktig: 0, totalt: 0 };
    perTema[tema].riktig += t.riktig;
    perTema[tema].totalt += t.totalt;
  }));
  const temaListe = temaOversikt(perTema);
  const svake = temaListe.filter(t => t.andel < SVAK_GRENSE);

  const siste = liste.slice(-20); // grafen viser de 20 siste rundene

  vis("historikk", `
    <section class="panel">
      <h2>Mine resultater</h2>
      <div class="nokkeltall">
        <div><b>${liste.length}</b><span>runder</span></div>
        <div><b>${karakterFor(snitt)}</b><span>snitt (${snitt} %)</span></div>
        <div><b>${beste.karakter}</b><span>beste (${beste.prosent} %)</span></div>
        <div><b>${antallBestatt}</b><span>bestått</span></div>
      </div>
    </section>

    <section class="panel">
      <h2>Utvikling</h2>
      <p class="dempet">Prosent riktig i de ${siste.length} siste rundene, eldste til venstre.
        Den stiplede linjen er grensen for bestått (41 %).</p>
      <div class="graf">
        <div class="bestattlinje"></div>
        ${siste.map(r => `
          <div class="soyle" title="${esc(formaterDato(r.dato))}: ${r.prosent} %">
            <div class="fyll karakter-${r.karakter}" style="height:${Math.max(r.prosent, 2)}%"></div>
          </div>`).join("")}
      </div>
      <div class="graf-etiketter">${siste.map(r => `<span>${r.karakter}</span>`).join("")}</div>
    </section>

    <section class="panel">
      <h2>Svake tema totalt</h2>
      ${svake.length
        ? `<p>Over alle rundene bør du øve mer på: <b>${svake.map(t => esc(t.tema)).join(", ")}</b></p>`
        : `<p>Ingen svake tema så langt. Bra!</p>`}
      <p class="dempet">Trykk på et tema for å starte en runde med bare det temaet.</p>
      ${temaStolper(temaListe, true)}
    </section>

    <section class="panel">
      <h2>Alle runder</h2>
      <ul class="liste">
        ${[...liste].reverse().map(r => `
          <li class="runde">
            <span class="karakter liten karakter-${r.karakter}">${r.karakter}</span>
            <div>
              <b>${r.riktige} / ${r.antall}</b> (${r.prosent} %)<br>
              <span class="dempet">${esc(formaterDato(r.dato))} · ${esc(r.beskrivelse)}</span>
            </div>
          </li>`).join("")}
      </ul>
      <div class="knapperad liten"><button data-handling="slett-historikk">Slett resultathistorikken</button></div>
    </section>
  `);
}

// =====================================================================
// 6. Adminpanel: brukere, innhold og feilmeldinger
// =====================================================================
// Panelet vises bare for admin, men det er databasen og serverfunksjonen som faktisk
// sjekker rollen. En vanlig bruker som fikser frem knappene, blir likevel avvist.

function adminFaner(aktiv) {
  const fane = (navn, tekst) =>
    `<button class="${aktiv === navn ? "aktiv" : ""}" data-handling="admin-fane" data-fane="${navn}">${tekst}</button>`;
  return `
    <section class="panel">
      <h2>Adminpanel</h2>
      <p class="dempet">Innholdet gjelder ${esc(lagret.valgtFag)}. Bytt fag i menyen (☰) for å redigere et annet fag.</p>
      <div class="faner">${fane("brukere", "Brukere")}${fane("innhold", "Innhold")}${fane("feil", "Meldinger")}${fane("fag", "Fag")}</div>
    </section>`;
}

function datoTekst(iso) { return iso ? formaterDato(iso) : "aldri"; }

// ---------- Brukere ----------

async function visAdminBrukere() {
  vis("admin-brukere", adminFaner("brukere") + `<section class="panel"><p class="dempet">Laster brukere …</p></section>`);
  let brukere;
  try {
    brukere = await hentBrukeroversikt();
  } catch (feil) {
    if (skjerm === "admin-brukere") {
      app.querySelector("section:last-child").innerHTML = `<p class="feiltekst">${esc(feil.message)}</p>`;
    }
    return;
  }
  if (skjerm !== "admin-brukere") return; // brukeren har gått videre mens vi ventet

  const rad = b => {
    const erMeg = b.id === bruker.id;
    const knapp = (handling, tekst) =>
      `<button data-handling="admin-bruker" data-hva="${handling}" data-id="${b.id}" data-epost="${esc(b.epost)}">${tekst}</button>`;
    return `
      <li class="brukerrad">
        <div>
          <b>${esc(b.epost)}</b>
          ${b.rolle === "admin" ? `<span class="merke">Admin</span>` : ""}
          ${b.blokkert ? `<span class="merke varsel">Blokkert</span>` : ""}
          ${erMeg ? `<span class="merke">Deg</span>` : ""}
        </div>
        <div class="dempet">Registrert ${esc(datoTekst(b.opprettet))} · Sist aktiv ${esc(datoTekst(b.sist_aktiv || b.sist_innlogget))}</div>
        <div class="dempet">${b.antall_runder} runder${b.snitt_prosent !== null ? ` · snitt ${b.snitt_prosent} % (${karakterFor(Number(b.snitt_prosent))})` : ""}
          · ${b.kort_ovd} kort øvd · ${b.antall_feilmeldinger} meldinger</div>
        ${erMeg ? "" : `
          <div class="knapperad liten">
            ${b.rolle === "admin" ? knapp("fjern-admin", "Fjern admin") : knapp("gjor-admin", "Gjør til admin")}
            ${b.blokkert ? knapp("opphev-blokkering", "Opphev blokkering") : knapp("blokker", "Blokker")}
            ${knapp("slett", "Slett bruker")}
          </div>`}
      </li>`;
  };

  vis("admin-brukere", adminFaner("brukere") + `
    <section class="panel">
      <p class="dempet">${brukere.length} brukere.</p>
      <ul class="liste">${brukere.map(rad).join("")}</ul>
    </section>`);
}

const ADMIN_SPORSMAL = {
  "gjor-admin": e => `Gjøre ${e} til admin?\n\nAdmin kan se alle brukere, redigere innhold og blokkere og slette brukere.`,
  "fjern-admin": e => `Fjerne admin-rollen fra ${e}?`,
  "blokker": e => `Blokkere ${e}?\n\nBrukeren blir logget ut og kan ikke logge inn eller lagre noe før blokkeringen oppheves.`,
  "opphev-blokkering": e => `Oppheve blokkeringen av ${e}?`,
  "slett": e => `SLETTE kontoen ${e}?\n\nAll fremgang, alle resultater og feilmeldinger fra brukeren slettes for godt. Dette kan ikke angres.`
};

async function utforAdminHandling(el) {
  const { hva, id, epost } = el.dataset;
  if (!await bekreft(ADMIN_SPORSMAL[hva](epost))) return;
  el.disabled = true;
  const feil = await adminHandling(hva, id);
  if (feil) melding(feil);
  visAdminBrukere();
}

// ---------- Innhold ----------

let listeValg = { type: "kort", sok: "", slettede: false };

// Hva som skal skje etter lagring/avbryt/sletting – avhenger av hvor man kom fra.
let etterRedigering = visHjem;

function slettedeElementer(type) {
  return Object.entries(lagret.innhold)
    .filter(([, r]) => r.type === type && r.slettet && fagFor(r.data) === lagret.valgtFag)
    .map(([id, r]) => ({ ...r.data, id }));
}

function visRedigerListe() {
  const type = listeValg.type;
  const antallSlettede = slettedeElementer(type).length;
  vis("liste", adminFaner("innhold") + `
    <section class="panel">
      <div class="faner">
        <button class="${type === "kort" ? "aktiv" : ""}" data-handling="fane" data-type="kort">Flashcards</button>
        <button class="${type === "sporsmal" ? "aktiv" : ""}" data-handling="fane" data-type="sporsmal">Flervalgsspørsmål</button>
      </div>
      <p class="dempet">Endringer her gjelder for alle brukere.</p>
      <div class="knapperad liten">
        <button data-handling="nytt-element" data-type="${type}">+ Nytt ${type === "kort" ? "flashcard" : "spørsmål"}</button>
        <button data-handling="vis-slettede">${listeValg.slettede ? "Vis aktive" : `Slettede (${antallSlettede})`}</button>
      </div>
      <input id="sok" type="search" placeholder="Søk i tekst eller tema …" value="${esc(listeValg.sok)}">
      <ul id="liste" class="liste">${lagListe()}</ul>
    </section>
  `);
}

function lagListe() {
  const sok = listeValg.sok.toLowerCase();
  const erKort = listeValg.type === "kort";
  const elementer = listeValg.slettede
    ? slettedeElementer(listeValg.type)
    : iValgtFag(erKort ? sammensatt("kort", KORT) : sammensatt("sporsmal", OPPGAVER));

  const treff = elementer.filter(x =>
    (erKort ? x.forside + " " + x.bakside : x.tekst).toLowerCase().includes(sok) ||
    x.tema.toLowerCase().includes(sok));
  if (treff.length === 0) return `<li class="dempet">Ingen treff.</li>`;

  return treff.map(x => `
    <li>
      <span class="dempet">${esc(erKort ? kildeKort(x) : kildeOppgave(x))} · ${esc(x.tema)}${x.redigert ? " · redigert" : ""}</span><br>
      ${esc((erKort ? x.forside : x.tekst).slice(0, 160))}
      <div class="knapperad liten">
        ${listeValg.slettede
          ? `<button data-handling="gjenopprett-innhold" data-id="${x.id}">Gjenopprett</button>`
          : `<button data-handling="rediger" data-type="${listeValg.type}" data-id="${x.id}">Rediger</button>`}
      </div>
    </li>`).join("");
}

// Et tomt kort/spørsmål når admin lager noe nytt.
function nyttElement(type) {
  const felles = { emne: lagret.valgtFag, eksamen: "Egne", tema: temaer()[0], sikkerhet: "høy", forklaring: "" };
  if (type === "kort") {
    return { ...felles, id: "K-" + lagNyId(), oppgaver: [], forside: "", bakside: "" };
  }
  return { ...felles, id: "S-" + lagNyId(), nr: 0, poeng: 1, tekst: "", figur: null,
    alternativer: ["", "", "", ""], riktig: 0, fasit: "egen" };
}

// id = null betyr nytt kort/spørsmål.
function visRediger(type, id) {
  const erNy = id === null;
  const x = erNy ? nyttElement(type) : finnElement(id);
  const iDatafilene = (type === "kort" ? KORT : OPPGAVER).some(d => d.id === x.id);

  const felter = type === "kort" ? `
      <label>Forside (spørsmål)<textarea name="forside" rows="3" required>${esc(x.forside)}</textarea></label>
      <label>Bakside (svar)<textarea name="bakside" rows="3" required>${esc(x.bakside)}</textarea></label>
      <label>Forklaring<textarea name="forklaring" rows="3">${esc(x.forklaring)}</textarea></label>
      <label>Bygger på oppgave nr. (valgfritt, skill med komma)
        <input type="search" name="oppgaver" value="${esc(x.oppgaver.join(", "))}"></label>`
    : `
      <label>Oppgavetekst<textarea name="tekst" rows="5" required>${esc(x.tekst)}</textarea></label>
      <fieldset>
        <legend>Alternativer – merk det riktige</legend>
        ${x.alternativer.map((alt, i) => `
          <div class="alt-rad">
            <input type="radio" name="riktig" value="${i}" ${i === x.riktig ? "checked" : ""} aria-label="Alternativ ${i + 1} er riktig">
            <textarea name="alt${i}" rows="2" required>${esc(alt)}</textarea>
          </div>`).join("")}
      </fieldset>
      <label>Forklaring<textarea name="forklaring" rows="4">${esc(x.forklaring)}</textarea></label>`;

  vis("rediger", `
    <form class="panel" id="redigerskjema" data-type="${type}" data-id="${x.id}" data-ny="${erNy}">
      <h2>${erNy ? "Nytt" : "Rediger"} ${type === "kort" ? "flashcard" : "flervalgsspørsmål"}</h2>
      ${erNy ? "" : `<p class="dempet">Kilde: ${esc(type === "kort" ? kildeKort(x) : kildeOppgave(x))}</p>`}
      <p class="dempet">Endringen lagres for alle brukere.</p>
      <div class="filtre">
        <label>Tema<input type="search" name="tema" list="temaliste" value="${esc(x.tema)}" required></label>
        <label>Eksamen<input type="search" name="eksamen" list="eksamenliste" value="${esc(x.eksamen)}" required></label>
      </div>
      <datalist id="temaliste">${temaer().map(t => `<option value="${esc(t)}">`).join("")}</datalist>
      <datalist id="eksamenliste">${eksamener().map(e => `<option value="${esc(e)}">`).join("")}</datalist>
      ${felter}
      <p class="skjemamelding" role="status"></p>
      <div class="knapperad">
        <button class="hoved" type="submit">Lagre for alle</button>
        <button type="button" data-handling="avbryt">Avbryt</button>
        ${!erNy && iDatafilene && lagret.innhold[x.id]
          ? `<button type="button" data-handling="tilbakestill" data-id="${x.id}">Tilbakestill til original</button>` : ""}
        ${erNy ? "" : `<button type="button" data-handling="slett-for-alle" data-id="${x.id}">Slett for alle</button>`}
      </div>
    </form>
  `);
}

async function lagreRedigering(skjema) {
  const type = skjema.dataset.type;
  const id = skjema.dataset.id;
  const erNy = skjema.dataset.ny === "true";
  const data = new FormData(skjema);
  const gammel = erNy ? nyttElement(type) : finnElement(id);
  const ny = {
    ...gammel, id,
    tema: data.get("tema").trim(),
    eksamen: data.get("eksamen").trim(),
    forklaring: data.get("forklaring").trim(),
    redigert: !erNy
  };

  if (type === "kort") {
    ny.forside = data.get("forside").trim();
    ny.bakside = data.get("bakside").trim();
    ny.oppgaver = data.get("oppgaver").split(",").map(s => parseInt(s, 10)).filter(n => !isNaN(n));
  } else {
    ny.tekst = data.get("tekst").trim();
    ny.alternativer = [0, 1, 2, 3].map(i => data.get("alt" + i).trim());
    ny.riktig = Number(data.get("riktig"));
    // Har du endret hvilket svar som er riktig, er fasiten din egen.
    if (ny.riktig !== gammel.riktig) {
      ny.fasit = "egen";
      ny.sikkerhet = "høy";
    }
    // Nye spørsmål får neste ledige nummer i eksamenen de hører til.
    if (erNy || ny.eksamen !== gammel.eksamen) {
      const brukt = sammensatt("sporsmal", OPPGAVER).filter(o => o.eksamen === ny.eksamen).map(o => o.nr);
      ny.nr = Math.max(0, ...brukt) + 1;
    }
  }

  const knapp = skjema.querySelector("button[type=submit]");
  knapp.disabled = true;
  skjemaMelding(skjema, "Lagrer …");
  const feil = await lagreInnhold(id, type, ny);
  knapp.disabled = false;
  if (feil) return skjemaMelding(skjema, feil, true);
  etterRedigering();
}

async function slettForAlle(id) {
  const x = finnElement(id);
  if (!await bekreft("Slette dette for alle brukere?\n\nDet kan gjenopprettes senere under «Slettede».")) return;
  const feil = await lagreInnhold(id, typeFor(x), x, true);
  if (feil) return melding(feil);
  etterRedigering();
}

async function gjenopprettInnhold(id) {
  const r = lagret.innhold[id];
  const feil = await lagreInnhold(id, r.type, r.data, false);
  if (feil) return melding(feil);
  visRedigerListe();
}

async function tilbakestill(id) {
  if (!await bekreft("Fjerne endringene og gå tilbake til originalen fra eksamensfilene? Det gjelder for alle brukere.")) return;
  const feil = await fjernInnhold(id);
  if (feil) return melding(feil);
  etterRedigering();
}

// Admin kan ha redigert kort lokalt før adminpanelet fantes. Tilbys publisert én gang.
async function publiserLokaleEndringer() {
  const ider = Object.keys(lagret.endringer);
  if (!erAdmin() || ider.length === 0 || lagret.spurtOmPublisering) return;
  lagret.spurtOmPublisering = true;
  lagreLokalt();
  if (!await bekreft(`Du har ${ider.length} redigerte kort/spørsmål fra før, som bare ligger på denne enheten. Vil du lagre dem for alle brukere?`)) return;
  for (const id of ider) {
    const feil = await lagreInnhold(id, typeFor(lagret.endringer[id]), lagret.endringer[id]);
    if (feil) return melding("Stoppet: " + feil);
    delete lagret.endringer[id];
  }
  lagreLokalt();
  melding("Endringene er lagret for alle.");
  visHjem();
}

// Kalles fra sky.js når admins endringer er hentet fra databasen.
function vedInnholdHentet() {
  if (skjerm === "hjem") visHjem();
}

// ---------- Fag ----------

// Kalles fra sky.js når faglista er hentet. Er det valgte faget ikke lenger synlig
// (f.eks. skjult av admin), må brukeren velge et annet.
function vedFagHentet() {
  if (skjerm === "hjem" || skjerm === "velgfag") visHjem();
  if (skjerm === "admin-fag") visAdminFag();
}

function visAdminFag() {
  const rad = f => `
    <div class="fagrad" data-kode="${esc(f.kode)}">
      <div class="fagrad-felt">
        <label>Kode<input type="text" value="${esc(f.kode)}" disabled></label>
        <label>Navn<input type="text" name="navn" value="${esc(f.navn)}"></label>
        <label>Status
          <select name="status">${Object.entries(FAGSTATUS).map(([v, t]) =>
            `<option value="${v}" ${v === f.status ? "selected" : ""}>${t}</option>`).join("")}</select>
        </label>
        <label>Rekkefølge<input type="number" name="rekkefolge" value="${f.rekkefolge}"></label>
      </div>
      <button data-handling="lagre-fag" data-kode="${esc(f.kode)}">Lagre</button>
    </div>`;
  vis("admin-fag", adminFaner("fag") + `
    <section class="panel">
      <h2>Fag</h2>
      <p class="dempet">Utkast og skjulte fag ser bare admin. Publiserte fag ser alle. Spørsmål og flashcards
        legges i datafiler med samme fagkode, eller under Innhold når faget er valgt.</p>
      ${alleFag().map(rad).join("")}
    </section>
    <section class="panel">
      <h2>Nytt fag</h2>
      <form id="nyttfagskjema">
        <div class="fagrad-felt">
          <label>Kode<input type="text" name="kode" placeholder="f.eks. AUT2200" required></label>
          <label>Navn<input type="text" name="navn" placeholder="f.eks. Klinisk audiologi 2" required></label>
        </div>
        <p class="dempet">Nye fag starter som utkast.</p>
        <button class="hoved" type="submit">Opprett fag</button>
        <p class="skjemamelding"></p>
      </form>
    </section>`);
}

async function lagreFagrad(kode) {
  const rad = app.querySelector(`.fagrad[data-kode="${CSS.escape(kode)}"]`);
  const gammel = alleFag().find(f => f.kode === kode);
  const ny = {
    kode,
    navn: rad.querySelector("[name=navn]").value.trim() || gammel.navn,
    status: rad.querySelector("[name=status]").value,
    rekkefolge: Number(rad.querySelector("[name=rekkefolge]").value) || 0
  };
  const feil = await lagreFag(ny);
  if (feil) return melding(feil);
  melding(`${kode} er lagret.`);
}

async function opprettFag(skjema) {
  const data = new FormData(skjema);
  const kode = data.get("kode").trim().toUpperCase();
  const navn = data.get("navn").trim();
  if (alleFag().some(f => f.kode === kode)) return skjemaMelding(skjema, `${kode} finnes allerede.`, true);
  const rekkefolge = Math.max(0, ...alleFag().map(f => f.rekkefolge)) + 1;
  const feil = await lagreFag({ kode, navn, status: "utkast", rekkefolge });
  if (feil) return skjemaMelding(skjema, feil, true);
  visAdminFag();
}

// ---------- Feilmeldinger ----------

async function visAdminFeil() {
  vis("admin-feil", adminFaner("feil") + `<section class="panel"><p class="dempet">Laster feilmeldinger …</p></section>`);
  let meldinger;
  try {
    meldinger = await hentFeilmeldinger();
  } catch (feil) {
    if (skjerm === "admin-feil") {
      app.querySelector("section:last-child").innerHTML = `<p class="feiltekst">${esc(feil.message)}</p>`;
    }
    return;
  }
  if (skjerm !== "admin-feil") return;

  meldinger.sort((a, b) => a.lost - b.lost); // uløste først
  const rad = m => {
    const erGenerell = m.element_id === TILBAKEMELDING;
    const erVurdering = m.element_id.startsWith(VURDERING);
    const x = erGenerell || erVurdering ? null : finnElement(m.element_id);
    const gjelder = erGenerell ? "<b>Tilbakemelding</b>"
      : erVurdering ? `<b>Vurdering av ${esc(m.element_id.slice(VURDERING.length))}</b>`
      : x ? esc(x.forside ? kildeKort(x) : kildeOppgave(x)) : "Slettet element";
    return `
      <li class="${m.lost ? "lost" : ""}">
        <span class="dempet">${gjelder}
          · fra ${esc(m.profiler?.epost || "slettet bruker")} · ${esc(formaterDato(m.opprettet))}
          ${m.lost ? " · <b>løst</b>" : ""}</span><br>
        ${x ? `<i>${esc((x.forside || x.tekst).slice(0, 120))}</i><br>` : ""}
        ${erVurdering ? `<span class="melding-tekst">${esc(m.melding)}</span>` : `<b>«${esc(m.melding)}»</b>`}
        <div class="knapperad liten">
          ${x ? `<button data-handling="rediger" data-type="${typeFor(x)}" data-id="${x.id}">Rediger elementet</button>` : ""}
          <button data-handling="feil-lost" data-id="${m.id}" data-lost="${!m.lost}">${m.lost ? "Åpne igjen" : "Merk som løst"}</button>
          <button data-handling="slett-feilmelding" data-id="${m.id}">Slett</button>
        </div>
      </li>`;
  };

  // Snittkarakter per fag fra vurderingene av prøveversjoner.
  const karakterer = {};
  meldinger.filter(m => m.element_id.startsWith(VURDERING)).forEach(m => {
    const k = Number(m.melding.match(/^Karakter: (\d)\/5/)?.[1]);
    if (k) (karakterer[m.element_id.slice(VURDERING.length)] ||= []).push(k);
  });
  const snitt = Object.entries(karakterer).map(([fag, k]) =>
    `<p><b>${esc(fag)}:</b> ${k.length} vurdering${k.length === 1 ? "" : "er"},
      snitt ${(k.reduce((a, b) => a + b, 0) / k.length).toFixed(1).replace(".", ",")} av 5</p>`).join("");

  vis("admin-feil", adminFaner("feil") + `
    ${snitt ? `<section class="panel"><h2>Vurderinger av prøveversjoner</h2>${snitt}</section>` : ""}
    <section class="panel">
      <p class="dempet">${meldinger.filter(m => !m.lost).length} uløste av ${meldinger.length}.</p>
      <ul class="liste">${meldinger.length ? meldinger.map(rad).join("") : `<li class="dempet">Ingen meldinger.</li>`}</ul>
    </section>`);
}

// Hvor man skal tilbake etter redigering, skjuling eller feilmelding.
function tilbakeFunksjon() {
  if (skjerm === "kort") return fortsettKort;
  if (skjerm === "flervalg") return fortsettFlervalg;
  if (skjerm === "skjulte") return visSkjulte;
  if (skjerm === "liste") return visRedigerListe;
  if (skjerm === "admin-feil") return visAdminFeil;
  return visHjem;
}

// =====================================================================
// 7. Konto: innlogging, passord, skjul for meg og meld feil
// =====================================================================

const PERSONVERN = `Når du lager konto, lagres e-postadressen din, fremgangen din (flashcards,
  flervalgsresultater og statistikk per tema), feil du melder fra om, og når du sist var aktiv.
  Dataene lagres hos Supabase i EU og brukes bare i denne appen. Appens administrator kan se
  e-postadressen og statistikken din, men aldri passordet ditt. Du kan når som helst be
  administrator om å slette kontoen og dataene dine.`;

let innloggingFane = "logg-inn";

// Passordfelt med avkrysningsboks for å se det man skriver.
function passordFelt(etikett, autocomplete) {
  return `
    <label>${etikett}<input type="password" name="passord" minlength="6" required autocomplete="${autocomplete}"></label>
    <label class="avkrysning"><input type="checkbox" class="vis-passord"> Vis passord</label>`;
}

function visLoggInn() {
  const erNy = innloggingFane === "ny-konto";
  vis("logginn", `
    <section class="panel velkommen">
      <h2>Velkommen</h2>
      <p class="dempet">Øv til eksamen i audiologifagene (AUT2201 og AUT1000) med flashcards og flervalgsspørsmål fra tidligere eksamener.
        Logg inn eller lag en konto for å komme i gang. Fremgangen lagres i kontoen din og følger deg
        mellom PC og mobil.</p>
    </section>
    <section class="panel">
      <div class="faner">
        <button class="${erNy ? "" : "aktiv"}" data-handling="innlogging-fane" data-fane="logg-inn">Logg inn</button>
        <button class="${erNy ? "aktiv" : ""}" data-handling="innlogging-fane" data-fane="ny-konto">Ny konto</button>
      </div>
      <form id="${erNy ? "registrerskjema" : "logginnskjema"}">
        <label>E-post<input type="email" name="epost" autocomplete="email" required></label>
        ${passordFelt("Passord", erNy ? "new-password" : "current-password")}
        ${erNy ? `
          <p class="dempet personvern">${PERSONVERN}</p>
          <label class="avkrysning"><input type="checkbox" name="godtar" required>
            Jeg har lest dette og godtar at dataene lagres</label>` : ""}
        <p class="skjemamelding" role="status"></p>
        <button class="hoved" type="submit">${erNy ? "Lag konto" : "Logg inn"}</button>
      </form>
      ${erNy ? "" : `<div class="knapperad liten"><button data-handling="glemt-passord">Glemt passord?</button></div>`}
      <p class="dempet">Du forblir innlogget på denne enheten til du logger ut.</p>
    </section>
  `);
}

function visGlemtPassord() {
  vis("logginn", `
    <form class="panel" id="glemtskjema">
      <h2>Glemt passord</h2>
      <p class="dempet">Skriv e-postadressen din, så får du en lenke for å lage nytt passord.</p>
      <label>E-post<input type="email" name="epost" autocomplete="email" required></label>
      <p class="skjemamelding" role="status"></p>
      <button class="hoved" type="submit">Send lenke</button>
      <div class="knapperad liten"><button type="button" data-handling="vis-logg-inn">Tilbake til innlogging</button></div>
    </form>
  `);
}

// Vises når man kommer tilbake fra lenken i «glemt passord»-e-posten.
function visNyttPassord() {
  vis("nyttpassord", `
    <form class="panel" id="nyttpassordskjema">
      <h2>Lag nytt passord</h2>
      ${passordFelt("Nytt passord", "new-password")}
      <p class="skjemamelding" role="status"></p>
      <button class="hoved" type="submit">Lagre passord</button>
    </form>
  `);
}

function skjemaMelding(skjema, tekst, erFeil) {
  const el = skjema.querySelector(".skjemamelding");
  el.textContent = tekst;
  el.classList.toggle("feil", Boolean(erFeil));
}

// Felles for alle skjemaene på konto-sidene. Knappen låses mens vi venter på serveren.
async function sendKontoskjema(skjema) {
  const data = new FormData(skjema);
  const epost = (data.get("epost") || "").trim();
  const passord = data.get("passord");
  const knapp = skjema.querySelector("button[type=submit]");
  knapp.disabled = true;
  skjemaMelding(skjema, "Vent litt …");

  try {
    if (skjema.id === "logginnskjema") {
      const feil = await loggInn(epost, passord);
      // Gikk det bra, viser vedInnloggingEndret() forsiden.
      if (feil) skjemaMelding(skjema, feil, true);
    } else if (skjema.id === "registrerskjema") {
      const svar = await registrer(epost, passord);
      if (svar.feil) skjemaMelding(skjema, svar.feil, true);
      else if (svar.maBekrefte) skjemaMelding(skjema, "Kontoen er laget. Sjekk e-posten din og trykk på lenken for å bekrefte den.");
    } else if (skjema.id === "glemtskjema") {
      const feil = await glemtPassord(epost);
      skjemaMelding(skjema, feil || "Hvis det finnes en konto med denne adressen, er lenken sendt nå.", Boolean(feil));
    } else if (skjema.id === "nyttpassordskjema") {
      const feil = await settNyttPassord(passord);
      if (feil) skjemaMelding(skjema, feil, true);
      else { melding("Passordet er endret."); visHjem(); }
    }
  } finally {
    knapp.disabled = false;
  }
}

// Kalles fra sky.js når man logger inn eller ut.
function vedInnloggingEndret() {
  // Utlogget (eller blokkert/slettet): tilbake til innloggingen, uansett hvor man var.
  // Står man midt i «lag nytt passord», får man bli der.
  if (maLoggeInn()) {
    if (!["logginn", "nyttpassord"].includes(skjerm)) visHjem();
    return;
  }
  const paAdminside = ["admin-brukere", "admin-feil", "admin-fag", "liste", "rediger"].includes(skjerm);
  if (["hjem", "laster", "logginn"].includes(skjerm) || (paAdminside && !erAdmin())) visHjem();
  publiserLokaleEndringer();
}

// Kalles fra sky.js når synken har hentet ned endringer fra andre enheter.
function vedSynkFerdig() {
  if (flyttKortfremgang()) lagre();
  if (skjerm === "hjem") visHjem();
  if (skjerm === "historikk") visMineResultater();
  if (skjerm === "velgfag") visVelgFag();
}

function skjul(id) {
  lagret.skjult[id] = { skjult: true, tid: naa() };
  lagre();
  tilbakeFunksjon()();
}

function visSkjulte() {
  const skjulte = Object.keys(lagret.skjult).filter(erSkjult).map(finnElement).filter(Boolean);
  vis("skjulte", `
    <section class="panel">
      <h2>Skjulte kort og spørsmål</h2>
      <p class="dempet">Disse har du skjult for deg selv. De kommer ikke i flashcards eller flervalg
        før du viser dem igjen.</p>
      <ul class="liste">
        ${skjulte.length ? skjulte.map(x => `
          <li>
            <span class="dempet">${esc(x.forside ? kildeKort(x) : kildeOppgave(x))} · ${esc(x.tema)}</span><br>
            ${esc((x.forside || x.tekst).slice(0, 160))}
            <div class="knapperad liten"><button data-handling="vis-igjen" data-id="${x.id}">Vis igjen</button></div>
          </li>`).join("") : `<li class="dempet">Du har ikke skjult noe.</li>`}
      </ul>
    </section>
  `);
}

let feilmeldingTilbake = visHjem;

function visMeldFeil(id) {
  const x = finnElement(id);
  if (!sky) {
    return vis("meldfeil", `
      <section class="panel">
        <h2>Meld feil</h2>
        <p>Å melde feil krever innlogging, og det er ikke tilgjengelig akkurat nå.</p>
        <div class="knapperad liten"><button data-handling="avbryt-melding">Tilbake</button></div>
      </section>`);
  }
  if (!bruker) {
    return vis("meldfeil", `
      <section class="panel">
        <h2>Meld feil</h2>
        <p>Du må være innlogget for å melde feil, så administrator kan se hvem som har meldt fra.</p>
        <button class="hoved" data-handling="vis-logg-inn">Logg inn eller lag konto</button>
        <div class="knapperad liten"><button data-handling="avbryt-melding">Tilbake</button></div>
      </section>`);
  }
  vis("meldfeil", `
    <form class="panel" id="meldskjema" data-id="${id}">
      <h2>Meld feil</h2>
      <p class="dempet">${esc(x.forside ? kildeKort(x) : kildeOppgave(x))}</p>
      <p>${esc(x.forside || x.tekst)}</p>
      <label>Hva er feil?<textarea name="melding" rows="4" maxlength="2000" required
        placeholder="F.eks. «Riktig svar skal være C, se forelesning 5.»"></textarea></label>
      <p class="skjemamelding" role="status"></p>
      <button class="hoved" type="submit">Send</button>
      <div class="knapperad liten"><button type="button" data-handling="avbryt-melding">Avbryt</button></div>
    </form>
  `);
}

async function sendMeldFeil(skjema) {
  const knapp = skjema.querySelector("button[type=submit]");
  knapp.disabled = true;
  const feil = await sendFeilmelding(skjema.dataset.id, new FormData(skjema).get("melding").trim());
  knapp.disabled = false;
  if (feil) return skjemaMelding(skjema, feil, true);
  melding("Takk! Administrator får se meldingen.");
  feilmeldingTilbake();
}

// Generell tilbakemelding (ikke om ett bestemt kort/spørsmål). Lagres i samme tabell som
// «Meld feil», med element-id TILBAKEMELDING og kategorien foran teksten.
const TILBAKEMELDING = "tilbakemelding";
const KATEGORIER = ["Feil i appen", "Feil i et spørsmål eller kort", "Forslag til forbedring", "Annet"];

function visTilbakemelding() {
  vis("tilbakemelding", `
    <form class="panel" id="tilbakemeldingskjema">
      <h2>Send tilbakemelding</h2>
      <p class="dempet">Meld fra om feil, eller kom med forslag til hvordan appen kan bli bedre.
        Administrator får se meldingen og hvem den er fra.</p>
      <label>Hva gjelder det?
        <select name="kategori">${KATEGORIER.map(k => `<option>${esc(k)}</option>`).join("")}</select>
      </label>
      <label>Melding<textarea name="melding" rows="5" maxlength="1900" required
        placeholder="Beskriv hva som er feil, eller hva du ønsker deg."></textarea></label>
      <p class="dempet">Gjelder det ett bestemt kort eller spørsmål? Da er det enklest å trykke
        «Meld feil» under det, så ser administrator hvilket det er.</p>
      <p class="skjemamelding" role="status"></p>
      <button class="hoved" type="submit">Send</button>
    </form>
  `);
}

async function sendTilbakemelding(skjema) {
  const data = new FormData(skjema);
  const knapp = skjema.querySelector("button[type=submit]");
  knapp.disabled = true;
  skjemaMelding(skjema, "Sender …");
  const feil = await sendFeilmelding(TILBAKEMELDING, `[${data.get("kategori")}] ${data.get("melding").trim()}`);
  knapp.disabled = false;
  if (feil) return skjemaMelding(skjema, feil, true);
  await melding("Takk for tilbakemeldingen! Administrator får se den.");
  visHjem();
}

// ---------- Vurdering av et fag i prøveversjon ----------
// Lagres også i feilmeldinger, med element-id «vurdering:<fagkode>». Teksten har faste
// linjer («Karakter: 4/5» osv.), så adminpanelet kan regne ut snittet.
const VURDERING = "vurdering:";
const VURDER_DELER = ["Flashcards", "Flervalg", "Muntlig øving"];
const KARAKTERTEKST = ["", "Fungerer dårlig", "Ikke så bra", "Greit", "Bra", "Veldig bra"];

function visVurdering() {
  const f = valgtFag();
  vis("vurdering", `
    <form class="panel" id="vurderingskjema" data-fag="${esc(f.kode)}">
      <h2>Vurder ${esc(f.kode)} ${esc(f.navn)}</h2>
      <p class="dempet">Faget er en prøveversjon. Svarene dine hjelper med å gjøre det bedre.
        Administrator får se vurderingen og hvem den er fra.</p>
      <fieldset class="karakter">
        <legend>Hvordan fungerer faget alt i alt?</legend>
        ${[1, 2, 3, 4, 5].map(k => `
          <label class="avkrysning"><input type="radio" name="karakter" value="${k}" required> ${k} – ${KARAKTERTEKST[k]}</label>`).join("")}
      </fieldset>
      <fieldset>
        <legend>Hva har du prøvd?</legend>
        ${VURDER_DELER.map(d => `<label class="avkrysning"><input type="checkbox" name="prove" value="${d}"> ${d}</label>`).join("")}
      </fieldset>
      <label>Hva fungerer bra?<textarea name="bra" rows="3" maxlength="800"></textarea></label>
      <label>Hva bør bli bedre? (f.eks. feil, uklare spørsmål, noe som mangler)<textarea name="bedre" rows="3" maxlength="800"></textarea></label>
      <p class="skjemamelding" role="status"></p>
      <button class="hoved" type="submit">Send vurdering</button>
    </form>
  `);
}

async function sendVurdering(skjema) {
  const data = new FormData(skjema);
  const linjer = [
    `Karakter: ${data.get("karakter")}/5`,
    `Prøvd: ${data.getAll("prove").join(", ") || "ikke oppgitt"}`
  ];
  if (data.get("bra").trim()) linjer.push(`Fungerer bra: ${data.get("bra").trim()}`);
  if (data.get("bedre").trim()) linjer.push(`Bør bli bedre: ${data.get("bedre").trim()}`);
  const knapp = skjema.querySelector("button[type=submit]");
  knapp.disabled = true;
  skjemaMelding(skjema, "Sender …");
  const feil = await sendFeilmelding(VURDERING + skjema.dataset.fag, linjer.join("\n"));
  knapp.disabled = false;
  if (feil) return skjemaMelding(skjema, feil, true);
  await melding("Takk for vurderingen!");
  visHjem();
}

// =====================================================================
// 8. Sikkerhetskopi
// =====================================================================

function eksporter() {
  const fil = new Blob([JSON.stringify(lagret, null, 2)], { type: "application/json" });
  const lenke = document.createElement("a");
  lenke.href = URL.createObjectURL(fil);
  lenke.download = "aut2201-sikkerhetskopi.json";
  lenke.click();
  setTimeout(() => URL.revokeObjectURL(lenke.href), 1000);
}

function importer(fil) {
  fil.text()
    .then(tekst => {
      const data = JSON.parse(tekst);
      if (typeof data !== "object" || !data.bokser) throw new Error("Feil format");
      // Kontoen man er innlogget på og slettinger fra andre enheter beholdes.
      const { eier, profil, nullstilt, slettedeResultater } = lagret;
      lagret = Object.assign(tomLagring(), {
        bokser: data.bokser,
        boksTid: {},
        endringer: data.endringer || {},
        skjult: data.skjult || {},
        slettet: data.slettet, // fra eldre versjoner; gjøres om i oppgraderLagring()
        resultater: data.resultater || [],
        eier, profil, nullstilt, slettedeResultater
      });
      // Kortene i kopien regnes som besvart nå, så de vinner over skyen og ikke regnes som
      // nullstilt fra før.
      Object.keys(lagret.bokser).forEach(id => { lagret.boksTid[id] = naa(); });
      oppgraderLagring();
      lagre();
      melding("Sikkerhetskopien er hentet inn.");
      visHjem();
    })
    .catch(() => melding("Kunne ikke lese filen. Velg en sikkerhetskopi lastet ned fra denne appen."));
}

// =====================================================================
// 8. Hendelser
// =====================================================================

// Alle knapper har data-handling="…". Her står hva hver handling gjør.
const HANDLINGER = {
  "hjem": () => visHjem(),
  "start-kort": () => startKort(),
  "start-muntlig": () => startMuntlig(),
  "tidtaker": () => (muntlig?.tid?.kjorer ? stoppTidtaker() : startTidtaker()),
  "tidtaker-nullstill": () => { stoppTidtaker(); muntlig.tid.gjenstar = Number(muntligMinutter) * 60; oppdaterTidtaker(); },
  "muntlig-fase": el => { muntlig.fase = el.dataset.fase; muntlig.visSvar = false; visMuntlig(); },
  "muntlig-svar": () => { muntlig.visSvar = true; visMuntlig(); },
  "muntlig-neste-opp": () => { muntlig.oppIndeks++; muntlig.visSvar = false; visMuntlig(); },
  "muntlig-hopp": () => nesteMuntlig(),
  "vurder-muntlig": el => vurderMuntlig(el.dataset.svar),
  "snu": () => { if (!okt.snudd) { okt.snudd = true; visKort(); } },
  "svar-kort": el => svarKort(el.dataset.svar),
  "start-flervalg": () => {
    const liste = filtrert(alleOppgaver());
    startNyRunde(liste, Number(antallValgt), beskrivFilter());
  },
  "fortsett-runde": () => fortsettPabegyntRunde(),
  "forkast-runde": async () => {
    const { besvart, totalt } = pabegyntStatus();
    if (!await bekreft(`Forkaste den påbegynte runden (${besvart} av ${totalt} besvart)?\n\nSvarene i runden blir ikke lagret i resultatene dine.`)) return;
    forkastPabegyntRunde();
  },
  "ov-tema": el => {
    filter = { tema: [el.dataset.tema], eksamen: [] };
    HANDLINGER["start-flervalg"]();
  },
  "mine-resultater": () => visMineResultater(),
  "velg-fag": el => {
    lagret.valgtFag = el.dataset.fag;
    filter = { tema: [], eksamen: [] }; // temaer og eksamener er forskjellige i hvert fag
    lagreLokalt();
    visHjem();
  },
  "slett-historikk": async () => {
    if (!await bekreft(`Vil du slette alle resultatene dine i ${lagret.valgtFag}? Det gjelder alle enhetene dine, og kan ikke angres.`)) return;
    // Rundene merkes som slettet, og synken sletter dem i skyen og på de andre enhetene (se sky.js).
    const ider = mineResultater().map(r => r.id);
    lagret.slettedeResultater = [...new Set([...lagret.slettedeResultater, ...ider])];
    lagret.resultater = lagret.resultater.filter(r => !ider.includes(r.id));
    lagre();
    visMineResultater();
  },
  "velg": el => velgAlternativ(Number(el.dataset.nr)),
  "neste": () => nesteSporsmal(),
  "ov-feil": () => startFlervalg(runde.feil, runde.feil.length, "Øv på feilene", true),
  "admin": () => visAdminBrukere(),
  "admin-fane": el => {
    const fane = el.dataset.fane;
    if (fane === "brukere") visAdminBrukere();
    if (fane === "innhold") visRedigerListe();
    if (fane === "feil") visAdminFeil();
    if (fane === "fag") visAdminFag();
  },
  "lagre-fag": el => lagreFagrad(el.dataset.kode),
  "admin-bruker": el => utforAdminHandling(el),
  "fane": el => { listeValg.type = el.dataset.type; listeValg.slettede = false; visRedigerListe(); },
  "vis-slettede": () => { listeValg.slettede = !listeValg.slettede; visRedigerListe(); },
  "nytt-element": el => { etterRedigering = visRedigerListe; visRediger(el.dataset.type, null); },
  "slett-for-alle": el => slettForAlle(el.dataset.id),
  "gjenopprett-innhold": el => gjenopprettInnhold(el.dataset.id),
  "feil-lost": async el => {
    const feil = await settFeilmeldingLost(Number(el.dataset.id), el.dataset.lost === "true");
    if (feil) melding(feil);
    visAdminFeil();
  },
  "slett-feilmelding": async el => {
    if (!await bekreft("Slette denne feilmeldingen?")) return;
    const feil = await slettFeilmelding(Number(el.dataset.id));
    if (feil) melding(feil);
    visAdminFeil();
  },
  "rediger": el => {
    etterRedigering = tilbakeFunksjon(); // husk hvor vi skal tilbake etterpå
    visRediger(el.dataset.type, el.dataset.id);
  },
  "avbryt": () => etterRedigering(),
  "tilbakestill": el => tilbakestill(el.dataset.id),
  "skjul": el => skjul(el.dataset.id),
  "vis-skjulte": () => visSkjulte(),
  "vis-igjen": el => {
    lagret.skjult[el.dataset.id] = { skjult: false, tid: naa() };
    lagre();
    visSkjulte();
  },
  "meld-feil": el => {
    feilmeldingTilbake = tilbakeFunksjon();
    visMeldFeil(el.dataset.id);
  },
  "avbryt-melding": () => feilmeldingTilbake(),
  "tilbakemelding": () => visTilbakemelding(),
  "vurder-fag": () => visVurdering(),
  "vis-logg-inn": () => { innloggingFane = "logg-inn"; visLoggInn(); },
  "last-pa-nytt": () => location.reload(),
  "innlogging-fane": el => { innloggingFane = el.dataset.fane; visLoggInn(); },
  "glemt-passord": () => visGlemtPassord(),
  "logg-ut": async () => {
    if (!await bekreft("Vil du logge ut? Fremgangen er lagret i kontoen din og hentes ned igjen når du logger inn.")) return;
    await loggUt();
    visHjem();
  },
  "eksporter": () => eksporter(),
  "nullstill": async () => {
    if (!await bekreft("Vil du nullstille fremgangen for flashcards? Det gjelder alle enhetene dine.")) return;
    // Synken sletter den i skyen og på de andre enhetene (se sky.js).
    lagret.nullstilt.fremgang = naa();
    lagret.bokser = {};
    lagret.boksTid = {};
    lagre();
    visHjem();
  }
};

// Knappene i både appen og menyen. Et trykk utenfor menyen lukker den.
document.addEventListener("click", hendelse => {
  if (!meny.hidden && !hendelse.target.closest("#meny, #meny-knapp")) lukkMeny();
  if (!hendelse.target.closest("#app, #meny")) return;
  const el = hendelse.target.closest("[data-handling]");
  if (el && HANDLINGER[el.dataset.handling]) {
    if (el.closest("#meny")) lukkMeny();
    HANDLINGER[el.dataset.handling](el);
  }
});

menyKnapp.addEventListener("click", () => meny.hidden ? apneMeny() : lukkMeny());

// Husk hvilken avkrysningsliste på forsiden som er åpen («toggle» bobler ikke, derfor true).
document.addEventListener("toggle", hendelse => {
  const d = hendelse.target;
  if (!d.classList?.contains("flervalgfilter")) return;
  if (d.open) apentFilter = d.dataset.felt;
  else if (apentFilter === d.dataset.felt) apentFilter = null;
}, true);

document.addEventListener("change", hendelse => {
  if (!hendelse.target.closest("#app, #meny")) return;
  if (hendelse.target.id === "importer") lukkMeny();
  const el = hendelse.target;
  if (el.dataset.filter) endreFilter(el.dataset.filter, el.value, el.checked);
  if (el.id === "antall") { antallValgt = el.value; visHjem(); }
  if (el.id === "muntlig-type") { muntligType = el.value; visHjem(); }
  if (el.id === "muntlig-tid") { muntligMinutter = el.value; visHjem(); }
  if (el.dataset.punkt !== undefined && muntlig) {
    const i = Number(el.dataset.punkt);
    muntlig.huket = el.checked ? [...new Set([...muntlig.huket, i])] : muntlig.huket.filter(x => x !== i);
    const alle = (muntlig.naa.type === "scenario" ? muntlig.naa.steg : muntlig.naa.sjekkliste).length;
    document.getElementById("sjekktelling").textContent = `Du fikk med ${muntlig.huket.length} av ${alle}.`;
  }
  if (el.id === "importer" && el.files[0]) importer(el.files[0]);
  if (el.classList.contains("vis-passord")) {
    el.form.querySelector("input[name=passord]").type = el.checked ? "text" : "password";
  }
});

// Søket oppdaterer bare lista, så tekstfeltet beholder markøren.
app.addEventListener("input", hendelse => {
  if (hendelse.target.id === "sok") {
    listeValg.sok = hendelse.target.value;
    document.getElementById("liste").innerHTML = lagListe();
  }
});

app.addEventListener("submit", hendelse => {
  hendelse.preventDefault();
  const skjema = hendelse.target;
  if (skjema.id === "redigerskjema") lagreRedigering(skjema);
  else if (skjema.id === "meldskjema") sendMeldFeil(skjema);
  else if (skjema.id === "tilbakemeldingskjema") sendTilbakemelding(skjema);
  else if (skjema.id === "vurderingskjema") sendVurdering(skjema);
  else if (skjema.id === "nyttfagskjema") opprettFag(skjema);
  else sendKontoskjema(skjema);
});

hjemKnapp.addEventListener("click", visHjem);

// Hurtigtaster på PC: mellomrom snur kortet, 1/2/3 svarer, 1–4 velger alternativ, Enter går videre.
document.addEventListener("keydown", hendelse => {
  if (["INPUT", "TEXTAREA", "SELECT"].includes(hendelse.target.tagName)) return;
  const tast = hendelse.key;
  if (tast === "Escape" && !meny.hidden) { lukkMeny(); menyKnapp.focus(); return; }

  if (skjerm === "kort") {
    if ((tast === " " || tast === "Enter") && !okt.snudd) { hendelse.preventDefault(); HANDLINGER.snu(); }
    else if (okt.snudd && ["1", "2", "3"].includes(tast)) svarKort(["ikke", "usikker", "kunne"][Number(tast) - 1]);
  }

  if (skjerm === "flervalg") {
    if (runde.valgt === null && ["1", "2", "3", "4"].includes(tast)) {
      velgAlternativ(runde.sporsmal[runde.i].rekkefolge[Number(tast) - 1]);
    } else if (runde.valgt !== null && tast === "Enter") {
      hendelse.preventDefault();
      nesteSporsmal();
    }
  }
});

// Start appen
lastInn();
visHjem();
startSky();
