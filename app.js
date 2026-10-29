// AUT2201 eksamensøving – hele appen ligger i denne fila.
//
// Dataene kommer fra data/oppgaver.js (OPPGAVER) og data/kort.js (KORT).
// Fremgang og egne endringer lagres i nettleserens localStorage, så det trengs
// ingen innlogging eller server. Hver nettleser (PC, mobil) har sin egen lagring.
//
// Oppbygging:
//   1. Lagring        – lese/skrive localStorage
//   2. Data           – kort og spørsmål med egne endringer, filter, hjelpefunksjoner
//   3. Forside
//   4. Flashcards     – bokssystem: kort du ikke kan, kommer oftere
//   5. Flervalg       – runde med poengsum og svake tema
//   6. Redigering     – endre/slette kort og spørsmål
//   7. Sikkerhetskopi – laste ned / hente inn fremgang og endringer
//   8. Hendelser      – kobler knapper og taster til funksjonene over

"use strict";

// =====================================================================
// 1. Lagring
// =====================================================================

const LAGRINGSNOKKEL = "aut2201-eksamensoving";

// bokser:    hvilken boks (1–5) hvert flashcard ligger i. Mangler = nytt kort.
// endringer: redigerte kort/spørsmål, lagret som hele objekter under sin id.
// slettet:   id-er til kort/spørsmål som er slettet.
let lagret = { bokser: {}, endringer: {}, slettet: [] };

function lastInn() {
  try {
    const tekst = localStorage.getItem(LAGRINGSNOKKEL);
    if (tekst) lagret = Object.assign(lagret, JSON.parse(tekst));
  } catch (feil) {
    // Lagring er ikke tilgjengelig (f.eks. privat vindu). Appen virker, men husker ingenting.
  }
}

function lagre() {
  try {
    localStorage.setItem(LAGRINGSNOKKEL, JSON.stringify(lagret));
  } catch (feil) {
    // Se kommentaren i lastInn().
  }
}

// =====================================================================
// 2. Data og hjelpefunksjoner
// =====================================================================

// Bruker den redigerte versjonen der den finnes, og hopper over slettede.
function medEndringer(liste) {
  return liste
    .filter(x => !lagret.slettet.includes(x.id))
    .map(x => lagret.endringer[x.id] || x);
}

function alleKort() { return medEndringer(KORT); }
function alleOppgaver() { return medEndringer(OPPGAVER); }

const TEMAER = [...new Set(OPPGAVER.map(o => o.tema))].sort((a, b) => a.localeCompare(b, "no"));
const EKSAMENER = [...new Set(OPPGAVER.map(o => o.eksamen))];

// Filteret på forsiden gjelder både flashcards og flervalg.
let filter = { tema: "", eksamen: "" };
let antallValgt = "20";

function filtrert(liste) {
  return liste.filter(x =>
    (!filter.tema || x.tema === filter.tema) &&
    (!filter.eksamen || x.eksamen === filter.eksamen));
}

function kildeOppgave(o) { return `${o.eksamen}, oppg. ${o.nr}`; }
function kildeKort(k) { return `${k.eksamen}, oppg. ${k.oppgaver.join(", ")}`; }

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

  const temaValg = TEMAER.map(t =>
    `<option ${t === filter.tema ? "selected" : ""}>${esc(t)}</option>`).join("");
  const eksamenValg = EKSAMENER.map(e =>
    `<option ${e === filter.eksamen ? "selected" : ""}>${esc(e)}</option>`).join("");
  const antallValg = ["10", "20", "alle"].map(a =>
    `<option value="${a}" ${a === antallValgt ? "selected" : ""}>${a === "alle" ? "Alle" : a}</option>`).join("");

  vis("hjem", `
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
      <p class="dempet">Ekte eksamensspørsmål med stokkede alternativer. Du får forklaring etter hvert svar,
        og poengsum og svake tema etter runden.</p>
      <label>Antall spørsmål <select id="antall">${antallValg}</select></label>
      <button class="hoved" data-handling="start-flervalg" ${oppgaver.length ? "" : "disabled"}>Start runde</button>
    </section>

    <section class="panel">
      <h2>Administrer</h2>
      <div class="knapperad">
        <button data-handling="rediger-liste">Rediger kort og spørsmål</button>
        <button data-handling="eksporter">Last ned sikkerhetskopi</button>
        <label class="knapp" style="margin:0;font-weight:normal">Hent sikkerhetskopi
          <input type="file" id="importer" accept=".json,application/json" hidden>
        </label>
        <button data-handling="nullstill">Nullstill fremgang</button>
      </div>
      <p class="dempet">Fremgangen lagres bare i denne nettleseren. Bruk sikkerhetskopi for å flytte den
        mellom PC og mobil.</p>
    </section>
  `);
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
      <button data-handling="rediger" data-type="kort" data-id="${k.id}">Rediger eller slett kortet</button>
      <button data-handling="hjem">Avslutt</button>
    </div>
  `);
}

function svarKort(svar) {
  const id = okt.naa.id;
  const b = boks(id);
  if (svar === "kunne") lagret.bokser[id] = b === 0 ? 2 : Math.min(5, b + 1);
  if (svar === "usikker") lagret.bokser[id] = Math.max(1, b - 1);
  if (svar === "ikke") lagret.bokser[id] = 1;
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

function startFlervalg(liste, antall) {
  const utvalg = stokk(liste).slice(0, antall);
  runde = {
    sporsmal: utvalg.map(o => ({ o, rekkefolge: stokk([0, 1, 2, 3]) })),
    i: 0,
    valgt: null,
    resultater: []
  };
  visSporsmal();
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
      <div class="knapperad liten">
        <button data-handling="rediger" data-type="sporsmal" data-id="${o.id}">Rediger eller slett spørsmålet</button>
      </div>`;
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

function visResultat() {
  const resultater = runde.resultater;
  const antallRiktig = resultater.filter(r => r.riktig).length;
  const prosent = resultater.length ? Math.round(100 * antallRiktig / resultater.length) : 0;

  // Regn ut riktige per tema, svakeste tema først.
  const perTema = {};
  resultater.forEach(r => {
    perTema[r.o.tema] = perTema[r.o.tema] || { riktig: 0, totalt: 0 };
    perTema[r.o.tema].totalt++;
    if (r.riktig) perTema[r.o.tema].riktig++;
  });
  const temaListe = Object.entries(perTema)
    .map(([tema, t]) => ({ tema, ...t, andel: t.riktig / t.totalt }))
    .sort((a, b) => a.andel - b.andel);
  const svake = temaListe.filter(t => t.andel < SVAK_GRENSE);

  runde.feil = resultater.filter(r => !r.riktig).map(r => r.o);

  vis("resultat", `
    <section class="panel">
      <h2>Resultat</h2>
      <p class="poengsum">${antallRiktig} / ${resultater.length}</p>
      <p class="dempet">${prosent} % riktig</p>
    </section>

    <section class="panel">
      <h2>Svake tema</h2>
      ${svake.length
        ? `<p>Du bør øve mer på: <b>${svake.map(t => esc(t.tema)).join(", ")}</b></p>`
        : `<p>Ingen svake tema i denne runden. Bra!</p>`}
      ${temaListe.map(t => `
        <div class="temarad">
          <div class="navn"><span>${esc(t.tema)}</span><span>${t.riktig} / ${t.totalt}</span></div>
          <div class="stolpe ${t.andel < SVAK_GRENSE ? "svak" : ""}"><div style="width:${Math.round(t.andel * 100)}%"></div></div>
        </div>`).join("")}
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

// =====================================================================
// 6. Redigering
// =====================================================================

let listeValg = { type: "kort", sok: "" };

// Hva som skal skje etter lagring/avbryt/sletting – avhenger av hvor man kom fra.
let etterRedigering = visHjem;

function visRedigerListe() {
  const antallSlettet = lagret.slettet.length;
  vis("liste", `
    <section class="panel">
      <h2>Rediger kort og spørsmål</h2>
      <div class="faner">
        <button class="${listeValg.type === "kort" ? "aktiv" : ""}" data-handling="fane" data-type="kort">Flashcards</button>
        <button class="${listeValg.type === "sporsmal" ? "aktiv" : ""}" data-handling="fane" data-type="sporsmal">Flervalgsspørsmål</button>
      </div>
      <input id="sok" type="search" placeholder="Søk i tekst eller tema …" value="${esc(listeValg.sok)}">
      ${antallSlettet ? `<div class="knapperad liten"><button data-handling="gjenopprett">Gjenopprett ${antallSlettet} slettede</button></div>` : ""}
      <ul id="liste" class="liste">${lagListe()}</ul>
    </section>
  `);
}

function lagListe() {
  const sok = listeValg.sok.toLowerCase();
  const erKort = listeValg.type === "kort";
  const elementer = erKort ? alleKort() : alleOppgaver();

  const treff = elementer.filter(x =>
    (erKort ? x.forside + " " + x.bakside : x.tekst).toLowerCase().includes(sok) ||
    x.tema.toLowerCase().includes(sok));
  if (treff.length === 0) return `<li class="dempet">Ingen treff.</li>`;

  return treff.map(x => `
    <li>
      <span class="dempet">${esc(erKort ? kildeKort(x) : kildeOppgave(x))} · ${esc(x.tema)}${x.redigert ? " · redigert" : ""}</span><br>
      ${esc(erKort ? x.forside : x.tekst.slice(0, 160))}
      <div class="knapperad liten">
        <button data-handling="rediger" data-type="${listeValg.type}" data-id="${x.id}">Rediger</button>
        <button data-handling="slett" data-id="${x.id}">Slett</button>
      </div>
    </li>`).join("");
}

function visRediger(type, id) {
  const x = (type === "kort" ? alleKort() : alleOppgaver()).find(x => x.id === id);
  const temaValg = TEMAER.map(t => `<option ${t === x.tema ? "selected" : ""}>${esc(t)}</option>`).join("");

  const felter = type === "kort" ? `
      <label>Forside (spørsmål)<textarea name="forside" rows="3">${esc(x.forside)}</textarea></label>
      <label>Bakside (svar)<textarea name="bakside" rows="3">${esc(x.bakside)}</textarea></label>
      <label>Forklaring<textarea name="forklaring" rows="3">${esc(x.forklaring)}</textarea></label>`
    : `
      <label>Oppgavetekst<textarea name="tekst" rows="5">${esc(x.tekst)}</textarea></label>
      <fieldset>
        <legend>Alternativer – merk det riktige</legend>
        ${x.alternativer.map((alt, i) => `
          <div class="alt-rad">
            <input type="radio" name="riktig" value="${i}" ${i === x.riktig ? "checked" : ""} aria-label="Alternativ ${i + 1} er riktig">
            <textarea name="alt${i}" rows="2">${esc(alt)}</textarea>
          </div>`).join("")}
      </fieldset>
      <label>Forklaring<textarea name="forklaring" rows="4">${esc(x.forklaring)}</textarea></label>`;

  vis("rediger", `
    <form class="panel" id="redigerskjema" data-type="${type}" data-id="${id}">
      <h2>Rediger ${type === "kort" ? "flashcard" : "flervalgsspørsmål"}</h2>
      <p class="dempet">Kilde: ${esc(type === "kort" ? kildeKort(x) : kildeOppgave(x))}</p>
      <label>Tema<select name="tema">${temaValg}</select></label>
      ${felter}
      <div class="knapperad">
        <button class="hoved" type="submit">Lagre</button>
        <button type="button" data-handling="avbryt">Avbryt</button>
        ${lagret.endringer[id] ? `<button type="button" data-handling="tilbakestill" data-id="${id}">Tilbakestill til original</button>` : ""}
        <button type="button" data-handling="slett" data-id="${id}">Slett</button>
      </div>
    </form>
  `);
}

function lagreRedigering(skjema) {
  const type = skjema.dataset.type;
  const id = skjema.dataset.id;
  const data = new FormData(skjema);
  const gammel = (type === "kort" ? alleKort() : alleOppgaver()).find(x => x.id === id);
  const ny = { ...gammel, tema: data.get("tema"), forklaring: data.get("forklaring").trim(), redigert: true };

  if (type === "kort") {
    ny.forside = data.get("forside").trim();
    ny.bakside = data.get("bakside").trim();
  } else {
    ny.tekst = data.get("tekst").trim();
    ny.alternativer = [0, 1, 2, 3].map(i => data.get("alt" + i).trim());
    ny.riktig = Number(data.get("riktig"));
    // Har du endret hvilket svar som er riktig, er fasiten din egen.
    if (ny.riktig !== gammel.riktig) {
      ny.fasit = "egen";
      ny.sikkerhet = "høy";
    }
  }

  lagret.endringer[id] = ny;
  lagre();
  etterRedigering();
}

function slett(id) {
  if (!confirm("Vil du slette dette? Du kan gjenopprette det senere fra redigeringslista.")) return;
  lagret.slettet.push(id);
  lagre();
  // Fra lista blir vi værende i lista; ellers går vi tilbake dit vi kom fra.
  if (skjerm === "liste") visRedigerListe();
  else etterRedigering();
}

// =====================================================================
// 7. Sikkerhetskopi
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
      lagret = { bokser: data.bokser || {}, endringer: data.endringer || {}, slettet: data.slettet || [] };
      lagre();
      alert("Sikkerhetskopien er hentet inn.");
      visHjem();
    })
    .catch(() => alert("Kunne ikke lese filen. Velg en sikkerhetskopi lastet ned fra denne appen."));
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
    startFlervalg(liste, antallValgt === "alle" ? liste.length : Number(antallValgt));
  },
  "velg": el => velgAlternativ(Number(el.dataset.nr)),
  "neste": () => nesteSporsmal(),
  "ov-feil": () => startFlervalg(runde.feil, runde.feil.length),
  "rediger-liste": () => visRedigerListe(),
  "fane": el => { listeValg.type = el.dataset.type; visRedigerListe(); },
  "rediger": el => {
    // Husk hvor vi skal tilbake etter redigeringen.
    if (skjerm === "kort") etterRedigering = fortsettKort;
    else if (skjerm === "flervalg") etterRedigering = fortsettFlervalg;
    else etterRedigering = visRedigerListe;
    visRediger(el.dataset.type, el.dataset.id);
  },
  "avbryt": () => etterRedigering(),
  "slett": el => slett(el.dataset.id),
  "tilbakestill": el => {
    if (!confirm("Vil du fjerne endringene dine og gå tilbake til originalen?")) return;
    delete lagret.endringer[el.dataset.id];
    lagre();
    etterRedigering();
  },
  "gjenopprett": () => {
    if (!confirm("Vil du gjenopprette alle slettede kort og spørsmål?")) return;
    lagret.slettet = [];
    lagre();
    visRedigerListe();
  },
  "eksporter": () => eksporter(),
  "nullstill": () => {
    if (!confirm("Vil du nullstille fremgangen for flashcards? Redigeringene dine beholdes.")) return;
    lagret.bokser = {};
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
  if (el.id === "antall") antallValgt = el.value;
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
  lagreRedigering(hendelse.target);
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
