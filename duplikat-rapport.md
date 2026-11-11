# Duplikat-rapport – AUT2201 høst 2024 (offisiell eksamen)

Laget 11.11.2026. **Gjennomført samme dag:** Du valgte å følge alle anbefalingene, og den offisielle eksamenen heter nå «Høst 2024». Det gamle settet heter «Øvingssett». Utkastet ligger nå i `kilder/`, og de nye oppgavene i `data/oppgaver-host2024-offisiell.js`. Feltene «Min beslutning:» er derfor tomme.

En rettelse til tallene under: de 8 oppgavene i A2 og de nye i A3 ble lagt inn som egne spørsmål, med øvingsspørsmålet slått sammen inn i dem. Til sammen ble altså 50 nye oppgaver lagt inn (ikke 42), og 50 ble slått sammen med høst 2025.

**Backup:**
- git-taggen `backup-sporsmalsbank-2026-11-11`, som peker på commit `e33ade8`
- en kopi av alle datafilene i `backup/2026-11-11/`

**Utkast fra steg 1** (lastes ikke av appen):
- `utkast/oppgaver-host2024-offisiell.js`: de 100 oppgavene i samme format som appen
- `utkast/host2024-offisiell.txt`: det samme i lesbar form
- `utkast/figurer/`: de to nye figurene (oppg. 42 og 80)

Kildene forkortes slik:
- **Ny** = offisiell eksamen høst 2024 (02.12.2024), ID `O24-xxx`
- **H25** = eksamen høst 2025 (`data/oppgaver.js`)
- **EA** = settet som i dag heter «Høst 2024» (`data/oppgaver-host2024.js`, fra eksamensark.docx)
- **K / KE** = flashcards (`data/kort.js` / `data/kort-host2024.js`)

---

## Tre ting du bør vite før du bestemmer

### 1. De blå markeringene i PDF-en er ikke en fasit

PDF-en ble laget 04.12.2024, før sensuren. Den markerer ett svar per oppgave, men mange av de markerte svarene er tydelig feil:
- oppg. 19: ansiktsnerven i stedet for trigeminus
- oppg. 20: IQR for normalfordelte data
- oppg. 37: «høyre og venstre» for koronalplanet
- oppg. 49: inferior colliculus i thalamus
- oppg. 97: «DPOAE er et subjektivt mål»

Dette er altså en kandidats besvarelse. 22 oppgaver har ingen markering. Jeg har brukt markeringene på samme måte som for AUT1000, som `kandidatsvar`, slik at appen kan vise «I eksamensbesvarelsen ble … krysset av». **Fasiten er generert av meg.** Jeg har kontrollert den mot eksisterende fasit og fagkilder. 7 oppgaver er merket «lav» sikkerhet og 19 «middels».

### 2. Settet som i dag heter «Høst 2024», er ikke den offisielle 2024-eksamenen

Ingen av de 120 EA-spørsmålene er ordrett like noen av de 100 oppgavene i den offisielle eksamenen. EA-spørsmålene er korte definisjonsspørsmål, som «Hva er presbyakusis?». De ser ut som et øvingssett laget ut fra pensum, ikke som en eksamen. Mange av dem tester likevel det samme som oppgaver i H25 eller i den nye eksamenen, se del A og B.

**Mitt forslag:**
- La den offisielle eksamenen hete «Høst 2024».
- Gi EA-settet et nytt navn, f.eks. «Øvingssett». Det gjelder også flashcardene KE001–KE038.

Ellers får appen to forskjellige sett som begge heter «Høst 2024».

**Min beslutning (navn på de to settene):**

### 3. Fremgang og statistikk

Slik ligger fremgangen lagret, og dette skjer ved sletting:
- **Flashcards:** Fremgangen lagres per kort-ID. Slettes et kort, flytter jeg boksen over til kortet som beholdes. Har begge kortene en boks, beholder jeg den høyeste. Da går ingen kortfremgang tapt.
- **Flervalg:** Resultatene lagres per runde, med karakter og tema. De påvirkes ikke når et spørsmål slettes, så tidligere runder og karakterer blir som før.
- **Det som går tapt:** «Skjul for meg»-valg og eventuelle admin-endringer på et slettet spørsmål. Jeg sier fra i oppsummeringen hvis noe av dette finnes.
- **Kildene «Høst 2025, oppg. 73 + Høst 2024, oppg. 1»:** Appen har i dag bare én eksamen per spørsmål. I steg 4 legger jeg til en kildeliste. Et sammenslått spørsmål vises da under begge eksamenene i eksamensfilteret, og kildelinjen viser begge.

---

## Oversikt

| Kategori | Antall nye (av 100) |
|---|---|
| Identisk med H25 (av dem 23 også med EA) | 50 |
| Identisk med bare EA | 8 |
| Nesten likt | 12 |
| Samme tema, men forskjellig nok | 19 |
| Ingen likheter | 11 |

**Hvis du følger anbefalingene, blir det:**
- **58 nye spørsmål slås sammen med et eksisterende.** Det eksisterende beholdes, og den nye kilden legges til.
- **42 nye spørsmål legges inn.**
- **EA-spørsmål:** 48 slås sammen inn i H25 eller i de nye, se del A og B.
- **Flashcards:** 4 par slås sammen, og nye kort lages for de nye temaene.

---

# Del A – Nye spørsmål mot banken

## A1. Identisk med H25

**Standardanbefaling for hele A1:** Behold H25-spørsmålet. Det har forklaring, og eventuell fremgang er knyttet til det. Jeg legger til kilden «Høst 2024, oppg. N». Det nye spørsmålet legges ikke inn. Bare avvik fra dette står under hver gruppe.

Står det «samme fasit», er fasiten den samme i begge spørsmålene. Der et EA-spørsmål tester det samme, står det også. Det anbefales slått sammen inn i det samme spørsmålet, og kilden blir da «Øvingssett nr. X».

### A1-1. ABLB: hva brukes det til
| Ny oppg. 1 (O24-001) | H25 oppg. 73 (H25-073) |
|---|---|
| ABLB står for alternating binaural level balancing. Hvilket av utsagnene er RIKTIG angående ABLB? | Samme tekst og samme fire alternativer |

**Kategori:** Identisk. **Likt:** alt. Samme fasit: skille cochleært fra retrocochleært tap. **Anbefaling:** behold H25-073.
**Min beslutning:**

### A1-2. Hårcellemotilitet
| Ny oppg. 2 | H25 oppg. 16 | EA nr. 2 |
|---|---|---|
| Hvilket utsagn om hårcellemotilitet er RIKTIG? | Samme | Hvilket protein er spesielt viktig for elektromotiliteten i ytre hårceller? |

**Kategori:** Identisk (Ny og H25). EA-002 tester samme fakta (prestin), men er enklere.
**Forskjell:**
- H25 har «indre *vestibulære* hårceller» og «…tonotopiske steder hvor vi finner døde regioner». Ny har den enklere ordlyden.
- Samme fasit: prestin og reseptorpotensialet.

**Anbefaling:** Behold H25-016, men bruk den enklere ordlyden fra 2024-eksamenen i de to alternativene. Behold EA-002, fordi det er et enklere begrepsspørsmål.
**Min beslutning:**

### A1-3. ABLB-skjermbilde ved 1000 Hz (figur)
Ny oppg. 4 ↔ H25 oppg. 70. Samme figur, tekst og alternativer. Samme fasit: cochleær patologi i høyre øre. **Kategori:** Identisk. **Anbefaling:** behold H25-070.
**Min beslutning:**

### A1-4. NBSPH
Ny oppg. 5 ↔ H25 oppg. 90. Samme tekst. Samme fasit: sansetap og psykiske lidelser, krever henvisning. Kandidaten valgte «kombinert syns- og hørselstap». **Kategori:** Identisk. **Anbefaling:** behold H25-090.
**Min beslutning:**

### A1-5. Standardavvik, hva er FEIL
Ny oppg. 6 ↔ H25 oppg. 40. Samme tekst. Samme fasit: «viser korrelasjon». EA-103 («Hva beskriver standardavvik?») har samme tema, men spør enklere. **Kategori:** Identisk. **Anbefaling:** behold H25-040, og behold EA-103.
**Min beslutning:**

### A1-6. Døde regioner – hva er riktig
| Ny oppg. 7 | H25 oppg. 46 |
|---|---|
| Tenk deg en person med cochleære døde regioner. … | … døde regioner **over 2000 Hz**. … |

**Kategori:** Identisk (litt annen ordlyd).
**Forskjell:**
- H25 sier «store» døde regioner og «forsterkning ved **lyse** frekvenser».
- Ny sier «svært omfattende» og «**lave** frekvenser».

Samme fasit: cochleaimplantat. **Anbefaling:** behold H25-046.
**Min beslutning:**

### A1-7. To toner på 40-phon-kurven
Ny oppg. 8 ↔ H25 oppg. 2. Samme tekst. Samme fasit: 100-Hz-tonen. Kandidaten valgte 1000 Hz. **Kategori:** Identisk. **Anbefaling:** behold H25-002.
**Min beslutning:**

### A1-8. Arne Holtes psykiske helserettigheter
Ny oppg. 12 ↔ H25 oppg. 24. Samme fasit: «Frihet og verdighet». **Kategori:** Identisk. **Anbefaling:** behold H25-024.
**Min beslutning:**

### A1-9. Hva reduserer skadelig stress
Ny oppg. 13 ↔ H25 oppg. 53 ↔ EA nr. 83. Alle har samme fasit: forutsigbarhet, sosial støtte og opplevd kontroll. EA har andre distraktorer. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-053, og slå EA-083 sammen inn i det.
**Min beslutning:**

### A1-10. Selvstereotypi blant eldre – IKKE eksempel
Ny oppg. 17 ↔ H25 oppg. 65. Samme fasit: «eldre mann må tenke over hva jeg vil ha ut av livet». EA-070 spør omvendt, om hva som ER en selvstereotypi. **Kategori:** Identisk. EA-070 er samme tema, men forskjellig nok. **Anbefaling:** behold H25-065, og behold EA-070.
**Min beslutning:**

### A1-11. Frekvenskoding / volley-prinsippet
Ny oppg. 22 ↔ H25 oppg. 85. Samme fasit: faselåsing opp til ca. 3 kHz via volley. EA-033 («Hva beskriver volley-prinsippet?») har samme tema, men er et definisjonsspørsmål. **Kategori:** Identisk. **Anbefaling:** behold H25-085, og behold EA-033.
**Min beslutning:**

### A1-12. TEOAE-screening: målenivå
Ny oppg. 23 ↔ H25 oppg. 60 ↔ EA nr. 116 («bestått / ikke bestått på en hørselsscreening»). Alle har samme fasit: nominal. **Kategori:** Identisk. **Anbefaling:** behold H25-060, og slå EA-116 sammen inn i det.
**Min beslutning:**

### A1-13. Parametriske tester brukes ikke dersom …
Ny oppg. 25 ↔ H25 oppg. 93. Samme fasit: ikke homogen varians. **Kategori:** Identisk. **Anbefaling:** behold H25-093.
**Min beslutning:**

### A1-14. cVEMP/oVEMP – hva er IKKE riktig
Ny oppg. 27 ↔ H25 oppg. 37. EA-093 og EA-094 spør hvilket organ hver av dem vurderer. **Kategori:** Identisk (Ny og H25). EA-093/094 er nesten likt, fordi de tester samme fakta enkeltvis. **Anbefaling:** Behold H25-037. EA-093 og EA-094 kan beholdes som enkle drill, eller slås sammen. Jeg anbefaler å beholde dem.
**Min beslutning:**

### A1-15. Aleneboende kvinner (SSB-figur)
Ny oppg. 28 ↔ H25 oppg. 99. Samme figur og samme fasit: 80 år. Ordlyden i innledningen er litt ulik. Kandidaten valgte 23 år. **Kategori:** Identisk. **Anbefaling:** behold H25-099.
**Min beslutning:**

### A1-16. Stigma og audiologisk rehabilitering
Ny oppg. 29 ↔ H25 oppg. 48 ↔ EA nr. 79. Samme fasit: stigma påvirker aksept, valg av høreapparat og bruk. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-048, og slå EA-079 sammen inn i det.
**Min beslutning:**

### A1-17. Box plot: den vertikale streken (figur)
Ny oppg. 31 ↔ H25 oppg. 8. Samme figur. Samme fasit: medianen. **Kategori:** Identisk. **Anbefaling:** behold H25-008.
**Min beslutning:**

### A1-18. Hørsel og psyke – hva er IKKE riktig
Ny oppg. 35 ↔ H25 oppg. 75. Samme fasit: tinnitus og dobbelt så høy selvmordsrisiko. **Kategori:** Identisk. **Anbefaling:** behold H25-075.
**Min beslutning:**

### A1-19. Koronalplanet
Ny oppg. 37 ↔ H25 oppg. 21. Samme fasit: forside og bakside. **Kategori:** Identisk. **Anbefaling:** behold H25-021.
**Min beslutning:**

### A1-20. ABC – hva står C for
Ny oppg. 38 ↔ H25 oppg. 56 ↔ EA nr. 69. Samme fasit: Commit. EA har bare ordene, uten forklaringene. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-056, og slå EA-069 sammen inn i det.
**Min beslutning:**

### A1-21. Design for prevalens
Ny oppg. 41 ↔ H25 oppg. 95 ↔ EA nr. 111. Samme fasit: tverrsnittstudie. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-095, og slå EA-111 sammen inn i det.
**Min beslutning:**

### A1-22. Obligatorisk koblingsstasjon i thalamus
Ny oppg. 49 ↔ H25 oppg. 34 ↔ EA nr. 23. Samme fasit: medial geniculate body. Kandidaten valgte inferior colliculus. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-034, og slå EA-023 sammen inn i det.
**Min beslutning:**

### A1-23. OAE – hva er riktig
| Ny oppg. 51 | H25 oppg. 52 |
|---|---|
| Alt. C: «TEOAE, men ikke DPOAE, kan måles hos **bevisstløse pasienter**» | Alt. D: «… hos **nyfødte barn**» |

Samme fasit: støyskade gir lavere DPOAE. EA-015 tester det samme («reduserte amplituder kan være tegn på cochleær skade»). **Kategori:** Identisk. **Anbefaling:** behold H25-052, og slå EA-015 sammen inn i det.
**Min beslutning:**

### A1-24. Godt basshør – hvilke taledeler
Ny oppg. 54 ↔ H25 oppg. 98. Samme fasit: skille stemt fra ustemt. EA-047 er samme tema, men omvendt: hva blir vanskelig. **Kategori:** Identisk. **Anbefaling:** behold H25-098, og behold EA-047.
**Min beslutning:**

### A1-25. Goffman – hva beskriver IKKE stigma
Ny oppg. 56 ↔ H25 oppg. 45. Samme fasit: «en urettferdig fordel». EA-078 er samme tema, men spør positivt om hva stigma er. **Kategori:** Identisk. **Anbefaling:** behold H25-045, og behold EA-078.
**Min beslutning:**

### A1-26. Umoden mestringsstrategi
Ny oppg. 63 ↔ H25 oppg. 23. Samme fasit: projeksjon. Kandidaten valgte «avvente». **Kategori:** Identisk. **Anbefaling:** behold H25-023.
**Min beslutning:**

### A1-27. Psykoakustisk tuningkurve (figur)
Ny oppg. 65 ↔ H25 oppg. 79. Samme figur. Samme fasit: de indre hårcellene fungerer ikke ved stimulusfrekvensen. **Kategori:** Identisk. **Anbefaling:** behold H25-079.
**Min beslutning:**

### A1-28. Ménière
| Ny oppg. 66 | H25 oppg. 11 |
|---|---|
| «Morbus Ménière», alt. D: «begynner vanligvis ved begge ørene samtidig» | «Ménières sykdom», alt. D: «begynner vanligvis flere dager etter støyeksponering» |

Samme fasit: endolymfatisk hydrops. EA-097 («Hva er endolymfatisk hydrops?») og EA-096 («Hva kjennetegner Ménière?») har samme tema. **Kategori:** Identisk. **Anbefaling:** Behold H25-011, og legg 2024-varianten av alt. D inn i forklaringen. Behold EA-096 og EA-097.
**Min beslutning:**

### A1-29. Normterskler: dB SPL til dB HL
Ny oppg. 67 ↔ H25 oppg. 9. Samme tall. Samme fasit: pasient 2. **Kategori:** Identisk. **Anbefaling:** behold H25-009.
**Min beslutning:**

### A1-30. Recruitment forbindes med …
Ny oppg. 68 ↔ H25 oppg. 69. Samme fasit: cochleær patologi. **Kategori:** Identisk. EA-005 og Ny oppg. 58 står i A2-6. **Anbefaling:** behold H25-069.
**Min beslutning:**

### A1-31. HUNT – avhengig variabel (figur)
Ny oppg. 71 ↔ H25 oppg. 97. Samme fasit: høreterskler. EA-119 («Hva er en avhengig variabel?») er samme begrep uten figur. **Kategori:** Identisk. **Anbefaling:** behold H25-097, og slå EA-119 sammen inn i det.
**Min beslutning:**

### A1-32. Forskningsdesign-hierarkiet
Ny oppg. 74 ↔ H25 oppg. 61. Samme fasit: metaanalyser. **Kategori:** Identisk. **Anbefaling:** behold H25-061.
**Min beslutning:**

### A1-33. BILD og BMLD
Ny oppg. 75 ↔ H25 oppg. 44. Samme fasit: SπN0 > S0Nπ. **Kategori:** Identisk. **Anbefaling:** behold H25-044.
**Min beslutning:**

### A1-34. Sekundær aldring
Ny oppg. 76 ↔ H25 oppg. 84 ↔ EA nr. 57. Samme fasit: sykdom, livsstil og miljø. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-084, og slå EA-057 sammen inn i det.
**Min beslutning:**

### A1-35. Type 1-feil (alfafeil)
Ny oppg. 77 ↔ H25 oppg. 4 ↔ EA nr. 107. Samme fasit: konkluderer med signifikans når det ikke var noen. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-004, og slå EA-107 sammen inn i det.
**Min beslutning:**

### A1-36. Hvem får mest slitasje i arbeidslivet
Ny oppg. 78 ↔ H25 oppg. 49. Samme fasit: milde til moderate tap. **Kategori:** Identisk. **Anbefaling:** behold H25-049.
**Min beslutning:**

### A1-37. SISI: 15 % ved 90 dB HL
Ny oppg. 79 ↔ H25 oppg. 94. Samme fasit: retrocochleær. **Kategori:** Identisk. H25-088 (90 % ved 20 dB SL) står i B2-1. **Anbefaling:** behold H25-094.
**Min beslutning:**

### A1-38. Hva er IKKE en forsvarsmekanisme
Ny oppg. 82 ↔ H25 oppg. 78. Samme fasit: selvmedlidenhet. **Kategori:** Identisk. **Anbefaling:** behold H25-078.
**Min beslutning:**

### A1-39. Gjenkjenning av vokaler
| Ny oppg. 84 | H25 oppg. 19 |
|---|---|
| Alt. B: «avstanden mellom **overtonene**» | Alt. B: «avstanden mellom **deltonene**» |

Samme fasit: formantene. EA-042 («Hva er viktig for å skille vokaler? – formantfrekvensene») tester det samme. **Kategori:** Identisk. **Anbefaling:** behold H25-019, og slå EA-042 sammen inn i det.
**Min beslutning:**

### A1-40. PTA i dB HL: målenivå
Ny oppg. 85 ↔ H25 oppg. 30 ↔ EA nr. 117. Samme fasit: intervall. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-030, og slå EA-117 sammen inn i det.
**Min beslutning:**

### A1-41. Primær aldring
Ny oppg. 86 ↔ H25 oppg. 36 ↔ EA nr. 56. Samme fasit: gradvise kroppslige endringer. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-036, og slå EA-056 sammen inn i det.
**Min beslutning:**

### A1-42. Lineær forsterkning uten ytre hårceller
Ny oppg. 87 ↔ H25 oppg. 64. Samme fasit: større område av basilarmembranen. **Kategori:** Identisk. **Anbefaling:** behold H25-064.
**Min beslutning:**

### A1-43. Over 80 år på institusjon
Ny oppg. 88 ↔ H25 oppg. 1. Samme fasit: ca. 10 %. **Kategori:** Identisk. **Anbefaling:** behold H25-001.
**Min beslutning:**

### A1-44. Mildt, moderat …: målenivå
Ny oppg. 89 ↔ H25 oppg. 32 ↔ EA nr. 115. Samme fasit: ordinal. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-032, og slå EA-115 sammen inn i det.
**Min beslutning:**

### A1-45. MSO-nevroner – hva er IKKE riktig
Ny oppg. 91 ↔ H25 oppg. 57. Samme fasit: «synapser ved de indre hårcellene». **Kategori:** Identisk. H25-020 (samme spørsmål om LSO) står i B2-2. **Anbefaling:** behold H25-057.
**Min beslutning:**

### A1-46. LTASS – høyeste nivå
Ny oppg. 94 ↔ H25 oppg. 91. Samme fasit: 500 Hz. EA-045 («Hvor finner man mye av taleenergien i LTASS? – i de lavere frekvensområdene») tester det samme, men mindre presist. **Kategori:** Identisk. **Anbefaling:** behold H25-091, og slå EA-045 sammen inn i det.
**Min beslutning:**

### A1-47. Store oVEMP-amplituder
Ny oppg. 95 ↔ H25 oppg. 92 ↔ EA nr. 98. Samme fasit: SCD. **Kategori:** Identisk (alle tre). **Anbefaling:** behold H25-092, og slå EA-098 sammen inn i det.
**Min beslutning:**

### A1-48. Spontan nystagmus
Ny oppg. 96 ↔ H25 oppg. 47. Samme fasit: patologi. EA-099 («Hva er nystagmus?») har samme tema, men er et definisjonsspørsmål. **Kategori:** Identisk. **Anbefaling:** behold H25-047, og behold EA-099.
**Min beslutning:**

### A1-49. DPOAE – hva er riktig
| Ny oppg. 97 | H25 oppg. 86 |
|---|---|
| Distraktorer: klikk, «ytre hårceller i bare ett område», «subjektivt mål» | Distraktorer: «bare apex», «bare under 4 kHz», «subjektivt mål» |

Samme fasit: gjenspeiler funksjonen til de ytre hårcellene. EA-014 tester det samme. **Kategori:** Identisk (samme poeng, delvis andre distraktorer). **Anbefaling:** behold H25-086, og slå EA-014 sammen inn i det.
**Min beslutning:**

### A1-50. Humanvitenskapelig tradisjon
Ny oppg. 100 ↔ H25 oppg. 62. Samme fasit: «meningsfulle fenomener må fortolkes». **Kategori:** Identisk. **Anbefaling:** behold H25-062.
**Min beslutning:**

## A2. Identisk med bare EA

Her har den nye oppgaven ekte eksamensform, mens EA-spørsmålet er en enkel definisjon. **Standardanbefaling:** Behold den nye eksamensoppgaven. Slå EA-spørsmålet sammen inn i den, og legg til kilden «Øvingssett nr. X».

### A2-1. Vanligste psykiske lidelser
Ny oppg. 11 ↔ EA nr. 77. Samme fasit: angst og depresjon. Distraktorene er ulike. **Kategori:** Identisk. **Anbefaling:** behold Ny 11, og slå EA-077 sammen inn i den.
**Min beslutning:**

### A2-2. Nevroplastisitet – definisjon
Ny oppg. 30 («Hjernens evne til å endre seg … kalles …») ↔ EA nr. 27 («Hva betyr nevroplastisitet?»). Samme begrep, spurt hver sin vei. **Kategori:** Identisk. **Anbefaling:** behold Ny 30, og slå EA-027 sammen inn i den.
**Min beslutning:**

### A2-3. Seleksjon i SOC-modellen
Ny oppg. 34 ↔ EA nr. 66. Samme fasit: fokus på de viktigste målene. **Kategori:** Identisk. **Anbefaling:** behold Ny 34, og slå EA-066 sammen inn i den. EA-067 og EA-068 (optimalisering og kompensasjon) beholdes.
**Min beslutning:**

### A2-4. Goffmans informasjonskontroll
Ny oppg. 44 ↔ EA nr. 80. Begge handler om å styre hva andre får vite. Ny konkretiserer det: «styre samtaler og plassering». **Kategori:** Identisk. **Anbefaling:** behold Ny 44, og slå EA-080 sammen inn i den.
**Min beslutning:**

### A2-5. Kognitiv aldring svekker …
Ny oppg. 53 ↔ EA nr. 61. Samme fasit: arbeidsminnet. **Kategori:** Identisk. **Anbefaling:** behold Ny 53, og slå EA-061 sammen inn i den.
**Min beslutning:**

### A2-6. Lydstyrkeendring ved cochleært tap (recruitment)
Ny oppg. 58 («… lydstyrkeendring som er større enn normalt») ↔ EA nr. 5 («unormalt rask hørestyrkevekst»). EA-020 (redusert dynamikkområde) har samme tema. **Kategori:** Identisk. **Anbefaling:** behold Ny 58, slå EA-005 sammen inn i den, og behold EA-020.
**Min beslutning:**

### A2-7. Nullhypotesen
Ny oppg. 64 ↔ EA nr. 106. Samme fasit: ingen forskjell eller sammenheng. **Kategori:** Identisk. **Anbefaling:** behold Ny 64, og slå EA-106 sammen inn i den.
**Min beslutning:**

### A2-8. Type II-fibre
Ny oppg. 92 ↔ EA nr. 4. Samme fasit: ytre hårceller. Kandidaten valgte indre. H25-029 er speilbildet (type I → indre). **Kategori:** Identisk med EA-004, nesten likt med H25-029. **Anbefaling:** Behold Ny 92, og slå EA-004 sammen inn i den. Behold H25-029, fordi type I og type II tester hver sin halvdel.
**Min beslutning:**

## A3. Nesten likt

### A3-1. REM-target under høreterskelen
| Ny oppg. 33 | H25 oppg. 55 |
|---|---|
| Hvilken årsaksforklaring er **IKKE** riktig? Fasit: «tar hensyn til feedback» | **Hvorfor** kan målforsterkningen ligge under terskelen? Fasit: «redusert forsterkning gir bedre taleforståelse» |

**Likt:** samme fenomen.
**Forskjellig:** spørsmålene er stilt motsatt vei, med andre alternativer.

**NB:** 2024-oppgaven regner «døde regioner / effektiv hørbarhet» og «LTASS-target» som *riktige* forklaringer. I H25-055 er de to brukt som feil alternativer. Det tyder på at fasiten på H25-055 bør sjekkes. Jeg anbefaler å sette den til «middels» sikkerhet og nevne dette i forklaringen.
**Anbefaling:** Behold begge, og juster forklaringen og sikkerheten på H25-055.
**Min beslutning:**

### A3-2. Hvilken måling påvirkes IKKE
| Ny oppg. 36 | H25 oppg. 27 |
|---|---|
| … hos pasienter med **auditiv nevropati**. Alt. D: «signaldeteksjon i støy» | … ved **nedsatt tidsprosessering**. Alt. C: «taleoppfattelse i støy» |

Samme fasit: lokalisering med ILD. **Kategori:** Nesten likt. Samme resonnement, men ny pasientgruppe. **Anbefaling:** Behold begge. Ny 36 viser at auditiv nevropati er en tidsprosesseringslidelse.
**Min beslutning:**

### A3-3. Lydlokalisering – hva er riktig
| Ny oppg. 83 | H25 oppg. 5 |
|---|---|
| Fasit: «elevasjon er en monaural oppgave». Distraktorer: MSO–ILD, LSO–ITD, ITD vertikalt | Fasit: «LSO behandler ILD». Distraktorer: ITD vertikalt, elevasjon binaural, MSO–ILD |

**Kategori:** Nesten likt. Det er de samme fire påstandene, men den riktige er byttet om. EA-050 (spektrale endringer fra øremuslingen) er samme tema. **Anbefaling:** Behold begge, fordi de tester ulike påstander. Behold EA-050.
**Min beslutning:**

### A3-4. Median i et lite datasett
| Ny oppg. 42 (figur: 97, 12, 11, 10, 10) | EA nr. 101 (4, 8, 10, 12, 16) |
|---|---|
| Fasit: 11 (usortert liste med en ekstremverdi) | Fasit: 10 |

**Kategori:** Nesten likt. Samme fremgangsmåte med andre tall, men den nye har fellen med en usortert liste og en ekstremverdi. **Anbefaling:** Behold Ny 42. EA-101 kan slås sammen inn i den eller beholdes som enkel drill. Jeg anbefaler å beholde begge.
**Min beslutning:**

### A3-5. Problemfokusert mestring
| Ny oppg. 9 | EA nr. 81 | H25 oppg. 17 |
|---|---|---|
| Hva **beskriver** problemfokusert mestring? Fasit: innhente informasjon og planlegge | **Eksempel** på problemfokusert mestring? Fasit: forsøke å løse utfordringen | Eksempel på **følelsesfokusert** mestring |

**Kategori:** Nesten likt (Ny og EA). H25-017 er samme tema, men tester den andre typen. **Anbefaling:** Behold Ny 9, og slå EA-081 sammen inn i den. Behold H25-017.
**Min beslutning:**

### A3-6. Type II-feil i praksis
Ny oppg. 69 (et moderat tap ble ikke fanget opp med TEOAE, altså type II) ↔ EA nr. 108 (definisjonen av type II-feil). **Kategori:** Nesten likt. Samme begrep, men den nye krever at man bruker det. **Anbefaling:** Behold Ny 69, og slå EA-108 sammen inn i den.
**Min beslutning:**

### A3-7. Målenivå for nye variabler
Ny oppg. 45 («kjønn» er nominal) og Ny oppg. 98 («øregangsvolum» er ratio) ↔ målenivå-gruppen: H25-030/032/060, EA-115/116/117 og kort K004–K007. **Kategori:** Nesten likt. Samme oppgavetype, men en ny variabel. Oppg. 98 er den eneste i banken som tester ratio. **Anbefaling:** Legg inn begge, fordi de gir nye variabler å øve på.
**Min beslutning:**

### A3-8. Hva er kognisjon
| Ny oppg. 70 | EA nr. 60 |
|---|---|
| Fasit (generert, **lav**): «sansing, minner, tanker og språk» | Fasit: «mentale prosesser som oppmerksomhet, hukommelse, læring og tenkning» |

**Kategori:** Nesten likt. **Anbefaling:** Behold Ny 70, og slå EA-060 sammen inn i den. Sjekk definisjonen i pensum, fordi fasiten er usikker.
**Min beslutning:**

### A3-9. Nevroplastisitet etter skade
Ny oppg. 48 (deprivasjon etter sykdom eller skade gir kompensatorisk plastisitet) ↔ EA nr. 84 (nevroplastisitetens betydning for rehabilitering) og H25-043 (hvor plastisiteten er mest fremtredende). **Kategori:** Nesten likt med EA-084, samme tema som H25-043. **Anbefaling:** behold alle.
**Min beslutning:**

### A3-10. BMLD og frekvens
Ny oppg. 81 (BMLD er størst ved lave frekvenser) ↔ H25 oppg. 44 (SπN0 > S0Nπ) og EA nr. 52 (hva BMLD er). **Kategori:** Nesten likt. Samme fenomen, men et annet aspekt. **Anbefaling:** behold alle.
**Min beslutning:**

### A3-11. Tidsprosessering – hvilken tilstand påvirker IKKE
Ny oppg. 72 (mekanisk tap) ↔ H25 oppg. 27 og Ny oppg. 36. **Kategori:** Nesten likt. Samme tema, men denne spør etter tilstanden og ikke målingen. **Anbefaling:** behold.
**Min beslutning:**

## A4. Samme tema, men forskjellig nok

**Standardanbefaling for hele A4:** behold begge, og legg den nye inn. Fyll bare ut hvis du er uenig.

| Ny oppg. | Tester | Ligner (tema) |
|---|---|---|
| 15 | Hva er FEIL om box plot («kun multimodal») | H25-008 (median i box plot), K003 |
| 16 | GVS: sinus-GVS gir opplevd rulling | EA-100 (hva GVS er), KE034 |
| 18 | Sorgreaksjon kan hindre rehabilitering (**lav**) | EA-090 (stigma utsetter rehabilitering) |
| 20 | Spredningsmål for normalfordelte data: SD | EA-103, H25-040 |
| 26 | DPOAE-vekstfunksjoner og terskelestimering | H25-086, EA-014 |
| 39 | Tegn på psykisk lidelse | EA-076 (lidelse eller plage) |
| 50 | IKKE en vanlig følge av cochleært tap (**lav**, se merknad i utkastet: oppgaven har to mulige svar) | EA-006 (bredere filtre) |
| 55 | Hørbarhet forklarer mest av taletapet hos eldre | H25-068 (arbeidsminne) |
| 59 | ICF: hva er IKKE hensikten | H25-050, EA-085, EA-086 |
| 60 | TEN(HL)-testfrekvenser | H25-035, H25-096, EA-009 |
| 61 | VEMP er myogene potensialer | H25-037 |
| 62 | Spatial release from masking: «det bedre øret» | EA-051 (ILD og hodeskygge) |
| 73 | Kognisjon og tolkning av tale | H25-068, EA-054 |
| 90 | Psykiske plager kan bli lidelser | EA-076 |
| 3, 21, 32 | Hørselstap og arbeidsliv (kjønn, deltakelse, Svinndal) | H25-049 |
| 14, 93 | Arbeidsmiljøloven og likestillingsloven | – |

**Min beslutning (hele A4):**

---

# Del B – Duplikater som allerede ligger i banken

## B1. H25 mot EA (uten den nye eksamenen)

**Standardanbefaling:** Behold H25-spørsmålet, som er eksamensformen. Slå EA-spørsmålet sammen inn i det, og legg til kilden «Øvingssett nr. X». Står det «behold begge», tester de noe ulikt nok.

| # | H25 | EA | Kategori | Anbefaling |
|---|---|---|---|---|
| B1-1 | 3: hvor beskrives deltakerne – metode | 120: hvor beskrives utvalg og analyse – metode | Identisk | Slå sammen |
| B1-2 | 63: p < α – forkast H0 | 109: p < 0,05 – forkast H0 | Identisk | Slå sammen |
| B1-3 | 76: positivt skjev – gj.snitt > median | 105: samme | Identisk | Slå sammen |
| B1-4 | 100: «common cause» | 64: samme | Identisk | Slå sammen |
| B1-5 | 50: ICF aktivitet og deltakelse | 86: samme | Identisk | Slå sammen |
| B1-6 | 43: hvor nevroplastisitet er mest fremtredende – cortex | 28: samme | Identisk | Slå sammen |
| B1-7 | 39: plastisitet er kritisk for språktilegnelse | 40: samme | Identisk | Slå sammen |
| B1-8 | 81: grå substans | 39: samme | Identisk | Slå sammen |
| B1-9 | 33: endogen redundans | 38: samme | Identisk | Slå sammen |
| B1-10 | 96: kriteriet for død region i TEN | 10: samme | Identisk | Slå sammen |
| B1-11 | 29: type I-fibre – indre hårceller | 3: samme | Identisk | Slå sammen |
| B1-12 | 77: aldersrelatert diskanttap – basalt | 59: samme | Identisk | Slå sammen |
| B1-13 | 89: når passer kvalitativ metode | 112: hva kjennetegner kvalitativ forskning | Identisk | Slå sammen |
| B1-14 | 51: utvalg i kvalitative studier – strategisk | 114: strategisk utvalg | Identisk | Slå sammen |
| B1-15 | 6: paret t-test (scenario) | 118: paret t-test (generelt) | Nesten likt | Slå sammen |
| B1-16 | 58: corpus callosum-modning – interhemisfærisk | 29: corpus callosums funksjon | Nesten likt | Slå sammen |
| B1-17 | 22: hørselstap – økt demensrisiko | 65: sammenheng hørselstap–demens | Nesten likt | Slå sammen |
| B1-18 | 68: hukommelse som påvirker tale mest – arbeidsminne | 54: arbeidsminnets funksjon ved tale | Nesten likt | Behold begge |
| B1-19 | 25: forsterkning ved døde regioner – reduser | 12: konsekvens av døde regioner | Nesten likt | Slå sammen |
| B1-20 | 31: kvalitative datainnsamlingsmetoder | 113: dybdeintervju | Nesten likt | Slå sammen |
| B1-21 | 17: følelsesfokusert mestring (ytringer) | 82: følelsesfokusert – humor | Nesten likt | Slå sammen |
| B1-22 | 41: hvorfor maskert terskel stiger i død region | 11: hva off-frequency listening er | Samme tema | Behold begge |
| B1-23 | 87: ITD-prosessering i MSO | 53: koinsidensdeteksjon i MSO | Samme tema | Behold begge |
| B1-24 | 35: hvorfor TEN avslører døde regioner | 9: hva TEN brukes til | Samme tema | Behold begge |

**Min beslutning (B1, oppgi radnumre du vil endre):**

## B2. Innenfor H25

| # | Spørsmål | Kategori | Forklaring | Anbefaling |
|---|---|---|---|---|
| B2-1 | 88 (SISI 90 % ved 20 dB SL → cochleært) og 94 (SISI 15 % ved 90 dB HL → retrocochleært) | Nesten likt | Samme måling, men andre tall og motsatt svar | Behold begge (begge er ekte eksamensoppgaver) |
| B2-2 | 20 (LSO – IKKE riktig) og 57 (MSO – IKKE riktig) | Nesten likt | Samme oppsett, speilvendt | Behold begge |
| B2-3 | 36 (primær aldring) og 84 (sekundær aldring) | Nesten likt | Speilvendt | Behold begge |
| B2-4 | 30, 32, 60 (målenivå) | Nesten likt | Samme oppgavetype, ulike variabler | Behold alle |
| B2-5 | 13, 31, 51, 71, 89 (kvalitativ metode) | Samme tema | Ulike sider av kvalitativ metode | Behold alle |
| B2-6 | 35, 41, 96 (TEN-testen) | Samme tema | Hvorfor, mekanisme og kriterium | Behold alle |
| B2-7 | 70 og 73 (ABLB) | Samme tema | Figurtolkning og formål | Behold begge |
| B2-8 | 12 og 97 (samme HUNT-figur) | Forskjellig nok | Ulike spørsmål til samme figur | Behold begge |

**Min beslutning (B2):**

## B3. Innenfor EA

Dette er «speilpar», der samme begrepspar spørres hver sin vei: EA-025/026 (ITD/ILD), 048/049, 056/057, 062/063, 091/092, 093/094, 107/108 og 066/067/068. **Kategori:** Nesten likt. **Anbefaling:** behold paret der det ikke allerede er slått sammen i del A.

Disse ligner hverandre også:
- EA-027 og EA-084 (nevroplastisitet): løses av A2-2
- EA-005 og EA-020 (recruitment): samme tema
- EA-032, 033, 034 og 035 (tidskoding): samme tema, ulike begreper
- EA-041, 042 og 043 (formanter og F0): samme tema
- EA-001 og EA-002 (ytre hårceller): samme tema

**Anbefaling:** behold.
**Min beslutning (B3):**

## B4. Flashcards

| # | Kort | Kategori | Forklaring | Anbefaling |
|---|---|---|---|---|
| B4-1 | K001 (type 1-feil) og KE037 (H0, type I og II) | Identisk (delvis) | KE037 dekker K001 og mer | Behold KE037, slett K001, flytt fremgangen |
| B4-2 | K029 (volley) og KE003 (fasekobling og grensen) | Nesten likt | Samme poeng | Slå sammen til ett kort |
| B4-3 | K039 (nevroplastisitet i cortex) og KE012 (nevroplastisitet og rehabilitering) | Nesten likt | Overlapper | Behold begge |
| B4-4 | K085 (top-down) og KE014 (bottom-up / top-down) | Nesten likt | KE014 dekker K085 | Behold KE014, slett K085, flytt fremgangen |
| B4-5 | K026 (ribbon-synapse, glutamat) og KE004 (glutamat) | Nesten likt | Samme fakta | Behold begge (K026 har otoferlin) |
| B4-6 | K069 (vokalgjenkjenning) og KE027 (formanter og F0) | Nesten likt | Overlapper | Behold begge |
| B4-7 | K061 (Ménière, hydrops) og KE033 (hydrops og symptomer) | Identisk (delvis) | KE033 dekker K061 | Behold KE033, slett K061, flytt fremgangen |
| B4-8 | K021 (design for prevalens) og KE038 (prevalens og insidens) | Samme tema | Ulike spørsmål | Behold begge |
| B4-9 | K043 (LSO/MSO) og KE029 (ITD og ILD) | Samme tema | Ulike spørsmål | Behold begge |

**Min beslutning (B4):**

---

# Del C – Nye spørsmål uten likheter

Disse kan legges inn direkte. Jeg lager også flashcards for dem.

| Ny oppg. | Tema | Spørsmål (kort) | Fasit | Sikkerhet |
|---|---|---|---|---|
| 10 | Aldring og kognisjon | Sensorisk hukommelse = hvilken fase? | Inntaksfasen | middels |
| 19 | Anatomi | Nerve som IKKE går gjennom indre øregang | N. trigeminus | høy |
| 24 | Psykisk helse | «Information deprivation trauma» | Sosialt traume ved å miste informasjon | **lav** |
| 40 | Aldring og kognisjon | Andel over 75 år med mild kognitiv svikt | 35 % | middels |
| 43 | Høreapparat | Forsterkning ved fallende HF-tap | Kompresjon i diskanten | høy |
| 46 | Høreapparat | For lav MPO | Middels og sterke lyder høres like ut | middels |
| 47 | Sentrale baner | Hoved-output fra MSO | Ipsilateral inferior colliculus | høy |
| 52 | Tale og akustikk | «Skuff» ved flatt mekanisk tap | U | høy |
| 57 | Anatomi | Nerve i stapediusrefleksen | N. facialis | høy |
| 80 | Statistikk | Negativt skjev fordeling (figur) | Alder ved dødsfall | høy |
| 99 | Høreapparat | Dillons tre typer kommunikasjonsstrategier | Mestringsstrategier, tekniske hjelpemidler og assisterende kommunikasjon | **lav** |

Oppg. 3, 14, 21, 32 og 93 står i A4 og legges også inn direkte.

**Usikre fasiter du bør se på** (lav sikkerhet): oppg. 3, 18, 24, 32, 50, 70 og 99. Forklaringen i utkastet sier hva jeg er usikker på.

Kilder brukt til de usikre fasitene:
- Information deprivation trauma (Schild og Dalenberg): [Journal of Aggression, Maltreatment & Trauma (2016)](https://informahealthcare.com/doi/full/10.1080/10926771.2016.1145162), [Kentucky DMH: Trauma and the Deaf Community](https://manuals-sp-chfs.ky.gov/Resources/Related%20Resources%20Library/DMH%20Facts%20Truma%20and%20the%20Deaf%20Community.pdf)
- Mild kognitiv svikt, 35 % (HUNT4 70+): [Gjøra m.fl., Journal of Alzheimer's Disease](https://pubmed.ncbi.nlm.nih.gov/33427745/), [Tidsskriftet 2023](https://tidsskriftet.no/2023/06/originalartikkel/demens-og-mild-kognitiv-svikt-hos-eldre-personer-i-trondelag)
- Hørselstap og arbeidsliv: [Svinndal m.fl. 2018](https://eld.bl.uk/catalog/100092302386_0x000001), [Helvik m.fl., HUNT](https://pmc.ncbi.nlm.nih.gov/articles/PMC3719475)
