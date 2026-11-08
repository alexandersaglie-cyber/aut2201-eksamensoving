# Audiologi eksamensøving

Øvingsapp for audiologifagene ved NTNU: AUT2201 Audiologisk grunnkurs 2 (eksamen høst 2025 og høst 2024) og AUT1000 Audiologisk grunnkurs 1 (eksamen høst 2025 og høst 2023). Etter innlogging velger man fag, og appen husker valget. Hvert fag har egne spørsmål, flashcards, resultater og påbegynte runder.

## Slik bruker du den

Dobbeltklikk på `index.html`, så åpnes appen i nettleseren. Den trenger ingen installasjon, innlogging eller internett.

- **Flashcards:** Snu kortet og svar «Kunne», «Usikker» eller «Kunne ikke». Kort du ikke kan, kommer oftere igjen.
- **Flervalg:** Eksamensspørsmål med stokkede alternativer, forklaring etter hvert svar, og karakter (A–F) og svake tema til slutt. Svarene lagres underveis, så lukker man appen midt i en runde, kan man trykke «Fortsett der du slapp» på forsiden – også på en annen enhet.
- **Mine resultater:** Alle fullførte flervalgsrunder lagres med karakter. Siden viser utvikling over tid, snitt, beste karakter og svake tema samlet. Karakteren følger NTNUs prosentskala: A ≥ 89 %, B ≥ 77 %, C ≥ 65 %, D ≥ 53 %, E ≥ 41 %, F under 41 %.
- **Filter:** Velg tema eller eksamen på forsiden. Filteret gjelder begge modusene.
- **Skjul for meg / Meld feil:** Skjul kort og spørsmål du ikke vil se, eller meld fra om feil i et bestemt kort til administrator.
- **Send tilbakemelding:** Under Innstillinger kan alle sende generelle tilbakemeldinger og forslag til administrator.
- **Rediger (admin):** Administrator kan endre kort og spørsmål.

Hurtigtaster på PC: mellomrom snur kortet og 1/2/3 svarer. I flervalg velger 1–4 alternativ og Enter går videre.

## Lagring og innlogging

Det første man ser, er innloggingen. Man må logge inn eller lage konto før man kommer til appen, og man forblir innlogget på enheten til man logger ut. Skjemaene har en «Vis passord»-boks.

Fremgang, resultater, skjulte kort og påbegynte flervalgsrunder synkroniseres med Supabase og følger deg mellom PC og mobil. Alt lagres først i nettleseren (localStorage), så appen virker også uten nett når man har vært innlogget på enheten før. Første gang man logger inn, flyttes fremgang som allerede ligger på enheten over til kontoen.

- `config.js` har Supabase-adressen og den offentlige nøkkelen. De er ikke hemmelige, siden tilgangsreglene i databasen beskytter dataene. Service role-nøkkelen skal aldri inn i appen.
- `supabase/01_innlogging.sql` setter opp tabeller og tilgangsregler, `supabase/03_pagaende_runde.sql` tabellen for påbegynte runder, `supabase/04_slettinger.sql` tabellen som husker nullstillinger og slettede runder, så de ikke kommer tilbake fra andre enheter, og `supabase/05_fag.sql` fag-feltet på resultatene. De kjøres én gang i Supabases SQL Editor.
- `sky.js` står for innlogging og synk.

## Admin

Kontoen alexandersaglie@gmail.com er admin. Admin får knappen «Adminpanel» på forsiden, med tre faner:

- **Brukere:** e-post, registrert, sist aktiv og enkel statistikk. Her kan admin gjøre andre til admin, fjerne admin-rollen, blokkere, oppheve blokkering og slette brukere. Alt ber om bekreftelse først.
- **Innhold:** redigere, legge til og slette flashcards og flervalgsspørsmål. Endringene gjelder for alle brukere, og slettede kan gjenopprettes.
- **Meldinger:** feil brukerne har meldt fra om og generelle tilbakemeldinger, med knapper for å redigere elementet og merke meldingen som løst.

Rollen sjekkes på serveren, ikke bare i appen:

- `supabase/02_admin.sql` setter opp tilgangsregler som bare lar admin endre innhold og se brukeroversikten.
- `supabase/functions/admin/index.ts` er serverfunksjonen som blokkerer, sletter og endrer roller. Den sjekker at den som spør er admin, og nekter handlinger på egen konto. Service role-nøkkelen finnes bare hos Supabase.

## Publisering

Appen ligger på GitHub Pages: https://alexandersaglie-cyber.github.io/aut2201-eksamensoving/

- **Oppdatere appen:** `git push` til `main`. GitHub bygger siden på nytt på 1–2 minutter. Nettlesere kan bruke den gamle versjonen i opptil 10 minutter etterpå. Last inn siden på nytt.
- **Endre serverfunksjonen:** lim inn den nye koden i Supabase → Edge Functions → admin → Code, og trykk Deploy. «Verify JWT» skal være av, fordi funksjonen sjekker innloggingen selv.
- **Endre databasen:** lag en ny SQL-fil (`03_…sql`) og kjør den i SQL Editor.
- **Ny adresse** (f.eks. Netlify eller eget domene): legg den nye adressen inn i Supabase → Authentication → URL Configuration (Site URL og Redirect URLs).

## Filer

| Fil | Innhold |
|---|---|
| `index.html` | Siden som åpnes |
| `app.js` | Skjermene og logikken i appen |
| `sky.js` | Innlogging og synk med Supabase |
| `config.js` | Supabase-adresse og offentlig nøkkel |
| `supabase/` | SQL for databasen |
| `style.css` | Utseende |
| `data/oppgaver.js` | De 100 oppgavene fra eksamen høst 2025 med fasit og forklaring |
| `data/oppgaver-host2024.js` | De 120 spørsmålene fra eksamen høst 2024 |
| `data/kort.js` | 93 flashcards fra høsteksamenen |
| `data/kort-host2024.js` | 38 flashcards med nye begreper fra høst 2024 |
| `data/aut1000-h25-oppgaver.js`, `data/aut1000-h23-oppgaver.js` | AUT1000: 100 + 100 spørsmål fra høst 2025 og høst 2023 |
| `data/aut1000-kort.js` | 43 flashcards for AUT1000 |
| `figurer/` | Figurene til figuroppgavene |

Fasiten er **generert** (det fantes ingen offisiell fasit). Spørsmål og kort merket «Usikker fasit» bør sjekkes i pensum.
