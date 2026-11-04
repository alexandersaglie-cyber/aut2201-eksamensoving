# AUT2201 eksamensøving

Øvingsapp for AUT2201 Audiologisk grunnkurs 2, bygget på eksamen høst 2025 (100 spørsmål) og høst 2024 (120 spørsmål).

## Slik bruker du den

Dobbeltklikk på `index.html`, så åpnes appen i nettleseren. Den trenger ingen installasjon, innlogging eller internett.

- **Flashcards:** Snu kortet og svar «Kunne», «Usikker» eller «Kunne ikke». Kort du ikke kan, kommer oftere igjen.
- **Flervalg:** Eksamensspørsmål med stokkede alternativer, forklaring etter hvert svar, og karakter (A–F) og svake tema til slutt.
- **Mine resultater:** Alle fullførte flervalgsrunder lagres med karakter. Siden viser utvikling over tid, snitt, beste karakter og svake tema samlet. Karakteren følger NTNUs prosentskala: A ≥ 89 %, B ≥ 77 %, C ≥ 65 %, D ≥ 53 %, E ≥ 41 %, F under 41 %.
- **Filter:** Velg tema eller eksamen på forsiden. Filteret gjelder begge modusene.
- **Skjul for meg / Meld feil:** Skjul kort og spørsmål du ikke vil se, eller meld fra om feil til administrator.
- **Rediger (admin):** Administrator kan endre kort og spørsmål.

Hurtigtaster på PC: mellomrom snur kortet og 1/2/3 svarer. I flervalg velger 1–4 alternativ og Enter går videre.

## Lagring og innlogging

Fremgangen lagres alltid først i nettleseren (localStorage), så appen virker uten nett og uten konto.

Er du innlogget, synkroniseres fremgang, resultater og skjulte kort med Supabase, og følger deg mellom PC og mobil. Første gang du logger inn, flyttes det som ligger på enheten over til kontoen. Du forblir innlogget på enheten til du logger ut.

- `config.js` har Supabase-adressen og den offentlige nøkkelen. De er ikke hemmelige, siden tilgangsreglene i databasen beskytter dataene. Service role-nøkkelen skal aldri inn i appen.
- `supabase/01_innlogging.sql` setter opp tabeller og tilgangsregler. Den kjøres én gang i Supabases SQL Editor.
- `sky.js` står for innlogging og synk.

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
| `figurer/` | Figurene til figuroppgavene |

Fasiten er **generert** (det fantes ingen offisiell fasit). Spørsmål og kort merket «Usikker fasit» bør sjekkes i pensum.
