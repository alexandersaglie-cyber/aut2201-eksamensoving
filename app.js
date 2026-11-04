// AUT2201 eksamensøving – hele appen ligger i denne fila.
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
// eier:       id-en til kontoen fremgangen tilhører (null = ikke koblet til noen konto ennå).
// profil:     den innloggede brukerens profil fra sist, så rollen er kjent også uten nett.
// usynket:    true hvis det finnes endringer som ikke er sendt til skyen ennå.
function tomLagring() {
  return {
    bokser: {}, boksTid: {}, innhold: {}, endringer: {}, skjult: {}, resultater: [],
    eier: null, profil: null, usynket: false
  };
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
  // «Eksamensark» heter nå «Høst 2024».
  Object.values(lagret.endringer).forEach(x => {
    if (x.eksamen === "Eksamensark") x.eksamen = "Høst 2024";
  });
  lagret.resultater.forEach(r => {
    r.beskrivelse = r.beskrivelse.replace("Eksamensark", "Høst 2024");
  });
  // Tidligere «slettet» er nå «skjult for meg».
  if (Array.isArray(lagret.slettet)) {
    lagret.slettet.forEach(id => { lagret.skjult[id] = { skjult: true, tid: null }; });
    delete lagret.slettet;
  }
  // Hver runde trenger en unik id, så den ikke lagres to ganger i skyen.
  lagret.resultater.forEach(r => { if (!r.id) r.id = lagNyId(); });
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
  const { innhold, endringer } = lagret; // innholdet er felles for alle og beholdes
  lagret = tomLagring();
  lagret.innhold = innhold;
  lagret.endringer = endringer;
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
    .map(x => lagret.innhold[x.id] ? { ...lagret.innhold[x.id].data, id: x.id } : (lagret.endringer[x.id] || x));
}

function alleKort() { return sammensatt("kort", KORT).filter(x => !erSkjult(x.id)); }
function alleOppgaver() { return sammensatt("sporsmal", OPPGAVER).filter(x => !erSkjult(x.id)); }

function typeFor(x) { return "forside" in x ? "kort" : "sporsmal"; }

// Finner et kort eller spørsmål på id, også om det er skjult.
function finnElement(id) {
  return [...sammensatt("kort", KORT), ...sammensatt("sporsmal", OPPGAVER)].find(x => x.id === id);
}

// Temaer og eksamener regnes ut fra innholdet, så nye temaer fra admin kommer med.
function temaer() {
  const alle = [...sammensatt("sporsmal", OPPGAVER), ...sammensatt("kort", KORT)];
  return [...new Set(alle.map(x => x.tema))].sort((a, b) => a.localeCompare(b, "no"));
}
function eksamener() {
  const alle = [...sammensatt("sporsmal", OPPGAVER), ...sammensatt("kort", KORT)];
  return [...new Set(alle.map(x => x.eksamen))];
}

// Filteret på forsiden gjelder både flashcards og flervalg.
let filter = { tema: "", eksamen: "" };
// Hvor mange spørsmål en flervalgsrunde har. Spørsmålene trekkes tilfeldig fra utvalget.
const ANTALL_VALG = ["25", "50", "100"];
let antallValgt = "25";

function filtrert(liste) {
  return liste.filter(x =>
    (!filter.tema || x.tema === filter.tema) &&
    (!filter.eksamen || x.eksamen === filter.eksamen));
}

function kildeOppgave(o) { return `${o.eksamen}, oppg. ${o.nr}`; }
function kildeKort(k) {
  return k.oppgaver?.length ? `${k.eksamen}, oppg. ${k.oppgaver.join(", ")}` : k.eksamen;
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
  app.innerHTML = html;
  hjemKnapp.hidden = navn === "hjem";
  window.scrollTo(0, 0);
}

// =====================================================================
// 3. Forside
// =====================================================================

function visHjem() {
  const kort = filtrert(alleKort());
  const oppgaver = filtrert(alleOppgaver());

  const iBoks = [0, 0, 0, 0, 0, 0]; // plass 0 = nye kort, 1–5 = boksene
  kort.forEach(k => iBoks[boks(k.id)]++);
  const boksnavn = ["Nye", "Boks 1", "Boks 2", "Boks 3", "Boks 4", "Boks 5"];
  const sisteRunde = lagret.resultater[lagret.resultater.length - 1];

  const temaValg = temaer().map(t =>
    `<option ${t === filter.tema ? "selected" : ""}>${esc(t)}</option>`).join("");
  const eksamenValg = eksamener().map(e =>
    `<option ${e === filter.eksamen ? "selected" : ""}>${esc(e)}</option>`).join("");
  const antallValg = ANTALL_VALG.map(a =>
    `<option value="${a}" ${a === antallValgt ? "selected" : ""}>${a} spørsmål</option>`).join("");
  // Har utvalget (f.eks. ett tema) færre spørsmål enn valgt, blir runden kortere.
  const forFa = oppgaver.length > 0 && oppgaver.length < Number(antallValgt)
    ? `<p class="dempet">Utvalget har bare ${oppgaver.length} spørsmål, så runden får ${oppgaver.length}.</p>` : "";

  const antallSkjulte = Object.values(lagret.skjult).filter(s => s.skjult).length;

  vis("hjem", `
    ${kontoPanel()}

    <section class="panel">
      <h2>Hva vil du øve på?</h2>
      <div class="filtre">
        <label>Tema
          <select id="filter-tema"><option value="">Alle tema</option>${temaValg}</select>
        </label>
        <label>Eksamen
          <select id="filter-eksamen"><option value="">Alle eksamener</option>${eksamenValg}</select>
        </label>
      </div>
      <p class="dempet">${kort.length} flashcards og ${oppgaver.length} flervalgsspørsmål i utvalget.</p>
    </section>

    <section class="panel">
      <h2>Flashcards</h2>
      <p class="dempet">Snu kortet og si hvor godt du kunne det. «Kunne» flytter kortet en boks opp,
        «Usikker» en boks ned og «Kunne ikke» helt tilbake til boks 1. Kort i lave bokser kommer oftere.</p>
      <div class="bokser">
        ${boksnavn.map((navn, i) => `<div><b>${iBoks[i]}</b><span>${navn}</span></div>`).join("")}
      </div>
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
      <div class="knapperad liten"><button data-handling="mine-resultater">Mine resultater${lagret.resultater.length ? ` (${lagret.resultater.length})` : ""}</button></div>
    </section>

    <section class="panel">
      <h2>Innstillinger</h2>
      <div class="knapperad">
        <button data-handling="vis-skjulte">Skjulte kort og spørsmål${antallSkjulte ? ` (${antallSkjulte})` : ""}</button>
        <button data-handling="eksporter">Last ned sikkerhetskopi</button>
        <label class="knapp" style="margin:0;font-weight:normal">Hent sikkerhetskopi
          <input type="file" id="importer" accept=".json,application/json" hidden>
        </label>
        <button data-handling="nullstill">Nullstill fremgang</button>
      </div>
    </section>
  `);
}

// Øverst på forsiden: hvem som er innlogget og om synken er ferdig.
function kontoPanel() {
  if (!innloggingSattOpp) return "";
  if (!sky) {
    return `<section class="panel konto"><p class="dempet">Innlogging er ikke tilgjengelig akkurat nå
      (ingen nett?). Fremgangen lagres på denne enheten.</p></section>`;
  }
  if (!bruker) {
    return `
      <section class="panel konto">
        <p>Logg inn for å lagre fremgangen i skyen og bruke den på både PC og mobil.
          Uten konto lagres alt bare på denne enheten.</p>
        <button class="hoved" data-handling="vis-logg-inn">Logg inn eller lag konto</button>
      </section>`;
  }
  return `
    <section class="panel konto">
      <div class="kontolinje">
        <div>
          <b>${esc(bruker.epost)}</b>${erAdmin() ? ` <span class="merke">Admin</span>` : ""}<br>
          <span class="dempet" id="synkstatus">${esc(synkStatus)}</span>
        </div>
        <button data-handling="logg-ut">Logg ut</button>
      </div>
      ${erAdmin() ? `<button class="hoved" data-handling="admin">Adminpanel</button>` : ""}
    </section>`;
}

// =====================================================================
// 4. Flashcards
// =====================================================================

// Hvor ofte et kort trekkes, ut fra boksen det ligger i (plass 0 = nytt kort).
// Et kort i boks 1 trekkes 16 ganger så ofte som et kort i boks 5.
const VEKT = [10, 16, 8, 4, 2, 1];

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
      <span>${b ? "Boks " + b : "Nytt kort"}</span>
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
// 5. Flervalg
// =====================================================================

// Pågående runde: spørsmålene (hvert med stokket rekkefølge på alternativene),
// hvor langt vi har kommet, hva som er valgt nå, og resultatene så langt.
let runde = null;

// beskrivelse: hva runden besto av, f.eks. «Statistikk · Alle eksamener». Lagres i historikken.
function startFlervalg(liste, antall, beskrivelse) {
  const utvalg = stokk(liste).slice(0, antall);
  runde = {
    sporsmal: utvalg.map(o => ({ o, rekkefolge: stokk([0, 1, 2, 3]) })),
    i: 0,
    valgt: null,
    resultater: [],
    beskrivelse,
    lagret: false
  };
  visSporsmal();
}

function beskrivFilter() {
  return `${filter.tema || "Alle tema"} · ${filter.eksamen || "Alle eksamener"}`;
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
    <div class="knapperad liten"><button data-handling="hjem">Avslutt runden</button></div>
  `);
}

function velgAlternativ(nr) {
  const { o } = runde.sporsmal[runde.i];
  runde.valgt = nr;
  runde.resultater.push({ o, riktig: nr === o.riktig });
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
  lagret.resultater.push({
    id: lagNyId(),
    dato: naa(),
    beskrivelse: runde.beskrivelse,
    antall: runde.resultater.length,
    riktige: antallRiktig,
    prosent,
    karakter,
    perTema,
    feil: runde.feil.map(o => o.id)
  });
  lagre();
}

function visResultat() {
  const resultater = runde.resultater;
  if (resultater.length === 0) return visHjem(); // alle spørsmålene ble slettet underveis

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
  const liste = lagret.resultater;
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
      <div class="faner">${fane("brukere", "Brukere")}${fane("innhold", "Innhold")}${fane("feil", "Feilmeldinger")}</div>
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
          · ${b.kort_ovd} kort øvd · ${b.antall_feilmeldinger} feilmeldinger</div>
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
    .filter(([, r]) => r.type === type && r.slettet)
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
    : (erKort ? sammensatt("kort", KORT) : sammensatt("sporsmal", OPPGAVER));

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
  const felles = { eksamen: "Egne", tema: temaer()[0], sikkerhet: "høy", forklaring: "" };
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
    const x = finnElement(m.element_id);
    return `
      <li class="${m.lost ? "lost" : ""}">
        <span class="dempet">${x ? esc(x.forside ? kildeKort(x) : kildeOppgave(x)) : "Slettet element"}
          · fra ${esc(m.profiler?.epost || "slettet bruker")} · ${esc(formaterDato(m.opprettet))}
          ${m.lost ? " · <b>løst</b>" : ""}</span><br>
        ${x ? `<i>${esc((x.forside || x.tekst).slice(0, 120))}</i><br>` : ""}
        <b>«${esc(m.melding)}»</b>
        <div class="knapperad liten">
          ${x ? `<button data-handling="rediger" data-type="${typeFor(x)}" data-id="${x.id}">Rediger elementet</button>` : ""}
          <button data-handling="feil-lost" data-id="${m.id}" data-lost="${!m.lost}">${m.lost ? "Åpne igjen" : "Merk som løst"}</button>
          <button data-handling="slett-feilmelding" data-id="${m.id}">Slett</button>
        </div>
      </li>`;
  };

  vis("admin-feil", adminFaner("feil") + `
    <section class="panel">
      <p class="dempet">${meldinger.filter(m => !m.lost).length} uløste av ${meldinger.length}.</p>
      <ul class="liste">${meldinger.length ? meldinger.map(rad).join("") : `<li class="dempet">Ingen feilmeldinger.</li>`}</ul>
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

function visLoggInn() {
  const erNy = innloggingFane === "ny-konto";
  vis("logginn", `
    <section class="panel">
      <div class="faner">
        <button class="${erNy ? "" : "aktiv"}" data-handling="innlogging-fane" data-fane="logg-inn">Logg inn</button>
        <button class="${erNy ? "aktiv" : ""}" data-handling="innlogging-fane" data-fane="ny-konto">Ny konto</button>
      </div>
      <form id="${erNy ? "registrerskjema" : "logginnskjema"}">
        <label>E-post<input type="email" name="epost" autocomplete="email" required></label>
        <label>Passord<input type="password" name="passord" minlength="6" required
          autocomplete="${erNy ? "new-password" : "current-password"}"></label>
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
    </form>
  `);
}

// Vises når man kommer tilbake fra lenken i «glemt passord»-e-posten.
function visNyttPassord() {
  vis("nyttpassord", `
    <form class="panel" id="nyttpassordskjema">
      <h2>Lag nytt passord</h2>
      <label>Nytt passord<input type="password" name="passord" minlength="6" autocomplete="new-password" required></label>
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
  const paAdminside = ["admin-brukere", "admin-feil", "liste", "rediger"].includes(skjerm);
  if (skjerm === "hjem" || (skjerm === "logginn" && bruker) || (paAdminside && !erAdmin())) visHjem();
  publiserLokaleEndringer();
}

// Kalles fra sky.js når synken har hentet ned endringer fra andre enheter.
function vedSynkFerdig() {
  if (skjerm === "hjem") visHjem();
  if (skjerm === "historikk") visMineResultater();
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
      const { eier, profil } = lagret; // kontoen man er innlogget på, beholdes
      lagret = Object.assign(tomLagring(), {
        bokser: data.bokser,
        boksTid: data.boksTid || {},
        endringer: data.endringer || {},
        skjult: data.skjult || {},
        slettet: data.slettet, // fra eldre versjoner; gjøres om i oppgraderLagring()
        resultater: data.resultater || [],
        eier, profil
      });
      // Kort uten tidspunkt regnes som besvart nå, så de vinner over det som ligger i skyen.
      Object.keys(lagret.bokser).forEach(id => { if (!lagret.boksTid[id]) lagret.boksTid[id] = naa(); });
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
  "snu": () => { if (!okt.snudd) { okt.snudd = true; visKort(); } },
  "svar-kort": el => svarKort(el.dataset.svar),
  "start-flervalg": () => {
    const liste = filtrert(alleOppgaver());
    startFlervalg(liste, Number(antallValgt), beskrivFilter());
  },
  "ov-tema": el => {
    filter = { tema: el.dataset.tema, eksamen: "" };
    HANDLINGER["start-flervalg"]();
  },
  "mine-resultater": () => visMineResultater(),
  "slett-historikk": async () => {
    if (!await bekreft("Vil du slette alle lagrede resultater? Dette kan ikke angres.")) return;
    if (bruker) {
      const feil = await slettSkyResultater();
      if (feil) return melding("Fikk ikke slettet resultatene i skyen. " + feil);
    }
    lagret.resultater = [];
    lagre();
    visMineResultater();
  },
  "velg": el => velgAlternativ(Number(el.dataset.nr)),
  "neste": () => nesteSporsmal(),
  "ov-feil": () => startFlervalg(runde.feil, runde.feil.length, "Øv på feilene"),
  "admin": () => visAdminBrukere(),
  "admin-fane": el => {
    const fane = el.dataset.fane;
    if (fane === "brukere") visAdminBrukere();
    if (fane === "innhold") visRedigerListe();
    if (fane === "feil") visAdminFeil();
  },
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
  "vis-logg-inn": () => { innloggingFane = "logg-inn"; visLoggInn(); },
  "innlogging-fane": el => { innloggingFane = el.dataset.fane; visLoggInn(); },
  "glemt-passord": () => visGlemtPassord(),
  "logg-ut": async () => {
    if (!await bekreft("Vil du logge ut? Fremgangen er lagret i kontoen din og hentes ned igjen når du logger inn.")) return;
    await loggUt();
    visHjem();
  },
  "eksporter": () => eksporter(),
  "nullstill": async () => {
    if (!await bekreft("Vil du nullstille fremgangen for flashcards?")) return;
    if (bruker) {
      const feil = await slettSkyFremgang();
      if (feil) return melding("Fikk ikke nullstilt fremgangen i skyen. " + feil);
    }
    lagret.bokser = {};
    lagret.boksTid = {};
    lagre();
    visHjem();
  }
};

app.addEventListener("click", hendelse => {
  const el = hendelse.target.closest("[data-handling]");
  if (el && HANDLINGER[el.dataset.handling]) HANDLINGER[el.dataset.handling](el);
});

app.addEventListener("change", hendelse => {
  const el = hendelse.target;
  if (el.id === "filter-tema") { filter.tema = el.value; visHjem(); }
  if (el.id === "filter-eksamen") { filter.eksamen = el.value; visHjem(); }
  if (el.id === "antall") { antallValgt = el.value; visHjem(); }
  if (el.id === "importer" && el.files[0]) importer(el.files[0]);
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
  else sendKontoskjema(skjema);
});

hjemKnapp.addEventListener("click", visHjem);

// Hurtigtaster på PC: mellomrom snur kortet, 1/2/3 svarer, 1–4 velger alternativ, Enter går videre.
document.addEventListener("keydown", hendelse => {
  if (["INPUT", "TEXTAREA", "SELECT"].includes(hendelse.target.tagName)) return;
  const tast = hendelse.key;

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
