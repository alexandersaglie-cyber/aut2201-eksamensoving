# AUT2201 eksamensøving

Øvingsapp for AUT2201 Audiologisk grunnkurs 2, bygget på eksamen høst 2025.

## Slik bruker du den

Dobbeltklikk på `index.html`, så åpnes appen i nettleseren. Den trenger ingen installasjon, innlogging eller internett.

- **Flashcards:** Snu kortet og svar «Kunne», «Usikker» eller «Kunne ikke». Kort du ikke kan, kommer oftere igjen.
- **Flervalg:** Ekte eksamensspørsmål med stokkede alternativer, forklaring etter hvert svar, og poengsum og svake tema til slutt.
- **Filter:** Velg tema eller eksamen på forsiden. Filteret gjelder begge modusene.
- **Rediger:** Endre eller slett kort og spørsmål, enten underveis eller fra «Rediger kort og spørsmål».

Hurtigtaster på PC: mellomrom snur kortet og 1/2/3 svarer. I flervalg velger 1–4 alternativ og Enter går videre.

## Lagring

Fremgang og endringer lagres i nettleseren (localStorage). PC og mobil har derfor hver sin lagring. Bruk «Last ned sikkerhetskopi» og «Hent sikkerhetskopi» for å flytte den, eller som backup.

## Filer

| Fil | Innhold |
|---|---|
| `index.html` | Siden som åpnes |
| `app.js` | All logikk |
| `style.css` | Utseende |
| `data/oppgaver.js` | De 100 eksamensoppgavene med fasit og forklaring |
| `data/kort.js` | 93 flashcards |
| `figurer/` | Figurene til figuroppgavene |

Fasiten er **generert** (det fantes ingen offisiell fasit). Spørsmål og kort merket «Usikker fasit» bør sjekkes i pensum.
