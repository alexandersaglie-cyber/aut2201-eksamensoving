// Innhold til modusen «Muntlig øving» for AUT2200, generert fra forelesningsfoilene.
//
// To typer:
//   type "forklar"   et tema/spørsmål du forklarer høyt, med sjekkliste over hva en god forklaring
//                    bør inneholde, og oppfølgingsspørsmål slik en sensor kunne spurt
//   type "scenario"  en praktisk oppgave («Beskriv hvordan du ville …»), med fremgangsmåten steg for
//                    steg som fasit, og oppfølgingsspørsmål
// Felter: id, emne, type, tema, eksamen (forelesningen), kilde, sporsmal,
//   sjekkliste (forklar) eller steg (scenario), oppfolging: [{ sporsmal, svar }]
// Fila legger innholdet til i lista MUNTLIG. Modusen vises bare i fag som har slikt innhold.

var MUNTLIG = window.MUNTLIG || [];
window.MUNTLIG = MUNTLIG;

MUNTLIG.push(
  // ---------- Forsterkningsberegning (07.09) ----------
  {
    id: "M22-FB01", emne: "AUT2200", type: "forklar", tema: "Forsterkningsberegning", eksamen: "Forsterkningsberegning (07.09)",
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 3–5, 10–14 og 34",
    sporsmal: "Forklar hva forsterkningsberegning er, og forskjellen på generiske og proprietære tilpasningsregler.",
    sjekkliste: [
      "Man måler pasientens karakteristikker (typisk høreterskler) og beregner forsterkning med en formel (algoritme)",
      "Resultatet kalles målforsterkning, beregningsmål eller target",
      "Generiske regler (NAL, DSL) er åpne, dokumenterte og forskningsbaserte",
      "Proprietære regler er leverandørens egne: lukkede og ikke forskningsbaserte",
      "Forelesningen anbefaler klinisk evaluerte (validerte) formler",
      "Kort historikk: speiling av audiogrammet, MCL, half-gain og POGO før dagens NAL og DSL",
      "Grunnlaget kan være terskler (raskt, alle pasienter) eller lydstyrke (samme audiogram kan gi ulik lydstyrkeoppfattelse)"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor holdt det ikke å speile audiogrammet?", svar: "Det ga mye forsterkning, særlig ved høye terskler, og fungerte bare på terskelnivå, ikke for lyder over terskel." },
      { sporsmal: "Hva gjør du hvis den proprietære regelen og den generiske gir ganske ulik forsterkning?", svar: "Bruk en klinisk evaluert generisk regel som utgangspunkt, og verifiser med REM at du faktisk når den. Studier viser at proprietære regler varierer mye seg imellom." },
      { sporsmal: "Hva er argumentene for lydstyrkebaserte metoder?", svar: "Personer med samme audiogram kan oppleve lydstyrke ulikt, og lydstyrke er viktig for hørbarhet og komfort, særlig i apparat uten volumkontroll." }
    ]
  },
  {
    id: "M22-FB02", emne: "AUT2200", type: "forklar", tema: "Forsterkningsberegning", eksamen: "Forsterkningsberegning (07.09)",
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 14 og 22–27",
    sporsmal: "Forklar NAL-NL2 og DSL v5.0: hva målet med hver regel er, og hvordan de skiller seg fra hverandre.",
    sjekkliste: [
      "NAL-NL2 bygger på NAL-NL1: maksimere taleforståeligheten uten at talen blir sterkere enn for en normalthørende",
      "NAL prøver ikke å gjenopprette normal lydstyrke på hver frekvens",
      "NAL-NL2 tar hensyn til kjønn, erfaring (vante brukere får mer), alder (barn får mer) og binaural tilpasning (mindre)",
      "DSL har som mål et hørbart og komfortabelt signal i hver frekvensregion, og er tradisjonelt brukt for barn",
      "DSL v5.0: begrensning på høye nivåer, WDRC på midtnivå, lineær under kompresjonsterskelen, eventuelt ekspansjon helt nederst",
      "DSL v5.0 gir mindre forsterkning for svake lyder (støy), til voksne og ved binaural tilpasning",
      "De to reglene gir ulik forsterkning for samme hørselstap",
      "NAL-NL3 er på vei: KI-drevet og mer persontilpasset"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor gir NAL-NL2 mindre forsterkning ved binaural tilpasning?", svar: "Med to apparater summeres lydstyrken fra begge ørene, så hvert apparat trenger mindre forsterkning for samme opplevde lydstyrke. (Begrunnelsen står ikke i foilene. Den bygger på binaural summasjon fra AUT2201.)" },
      { sporsmal: "Hvilken regel ville du valgt til et barn, og hvorfor?", svar: "DSL har tradisjonelt vært brukt for barn og bygger på REAG. NAL-NL2 gir også barn mer forsterkning (5 dB mer på midtnivå). Begge er generiske og validerte." },
      { sporsmal: "Hva er nytt med NAL-NL3?", svar: "Den er trent med KI på millioner av tilpasninger, er mer persontilpasset, gir mindre forsterkning der støy dominerer og mindre overforsterkning i diskanten ved bratte tap, og er bedre for musikk." }
    ]
  },
  {
    id: "M22-FB03", emne: "AUT2200", type: "forklar", tema: "Forsterkningsberegning", eksamen: "Forsterkningsberegning (07.09)",
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 37–40, 42–45 og 48–49",
    sporsmal: "Forklar hvorfor målforsterkningen bare er et utgangspunkt, og hva du må vurdere i tillegg.",
    sjekkliste: [
      "Målforsterkningen bygger på gjennomsnittsdata, ikke på den enkelte pasienten",
      "Adapsjon: ønsket forsterkning øker ofte over tid, og mer jo større tapet er",
      "Brukere foretrekker i snitt 3–4 dB mindre enn NAL-RP og NAL-NL1, så et tilvenningstrinn kan være lurt",
      "Døde regioner: ved terskel over 70 dB HL ved 4 kHz er død region sannsynlig; vurder TEN-test",
      "Overdreven forsterkning i diskanten ved store tap kan senke taleforståeligheten",
      "MPO (OSPL90) må være passe: ikke ubehagelig, men ikke så lav at tale og lydkvalitet blir dårlig",
      "De fleste beregner MPO ut fra gjennomsnitt, ikke pasientens målte ULL",
      "Finjustering er ofte nødvendig, og du må verifisere at du faktisk er på målet"
    ],
    oppfolging: [
      { sporsmal: "Hvordan kan økningen i forsterkning skje etter hvert?", svar: "Manuelt gjennom tilvenningstrinn ved kontroller, eller automatisk i høreapparatet." },
      { sporsmal: "Hva gjør du hvis MPO er beregnet ut fra gjennomsnitt og pasienten klager på at sterke lyder er ubehagelige?", svar: "Mål pasientens ubehagsterskler (ULL/UCL) og juster MPO etter dem. Kontroller med REAR85 (MPO-test) at output ligger under UCL." },
      { sporsmal: "Hvorfor kan det være lite vits i å forsterke fullt ut i en død region?", svar: "Indre hårceller eller nervefibre virker ikke der, så forsterket lyd gir lite ekstra informasjon. Den kan heller gi mer lydstyrke, dårligere lydkvalitet og lavere taleforståelighet." }
    ]
  },
  {
    id: "M22-FB04", emne: "AUT2200", type: "forklar", tema: "Forsterkningsberegning", eksamen: "Forsterkningsberegning (07.09)",
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 29–32",
    sporsmal: "Forklar hvordan forsterkningen beregnes ved et mekanisk eller kombinert hørselstap, og hvorfor.",
    sjekkliste: [
      "Skill mellom den sensorinevrale delen (beinledning) og den mekaniske delen (luft-bein-gapet)",
      "NAL-NL2 gir forsterkning ut fra beinledningstersklene",
      "I tillegg gis 75 % av luft-bein-gapet som ekstra forsterkning på hver frekvens",
      "Det brukes mindre kompresjon",
      "Gi et regneeksempel: gap 20 dB gir 15 dB ekstra",
      "Andre regler bruker samme prinsipp (også NAL-NL3)"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor får ikke pasienten hele luft-bein-gapet som ekstra forsterkning?", svar: "Forelesningen oppgir 75 % av gapet. Mer forklaring på hvorfor akkurat 75 % står ikke i foilene. Spør gjerne foreleser, eller sjekk Dillon kap. 10." },
      { sporsmal: "Hva må du huske i REM-programvaren ved et kombinert tap?", svar: "Å legge inn beinledningstersklene (haken for beinledning), ellers blir målforsterkningen beregnet feil." },
      { sporsmal: "Hvilken diagnose er et typisk eksempel?", svar: "Otosklerose, som forelesningen viser som eksempel på mekanisk tap." }
    ]
  },
  {
    id: "M22-FB05", emne: "AUT2200", type: "scenario", tema: "Forsterkningsberegning", eksamen: "Forsterkningsberegning (07.09)",
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 5, 25, 42–45 og 48; pasient inspirert av «Ukas pasient HA1»",
    sporsmal: "Jonas (52) har et ensidig sensorinevralt hørselstap på høyre øre etter et akustisk traume, med terskel over 70 dB HL ved 4 kHz. Han har aldri brukt høreapparat og er skeptisk. Beskriv hvordan du setter opp forsterkningen i første tilpasning.",
    steg: [
      "Kontroller audiogrammet: luft- og beinledning (er tapet rent sensorinevralt?), og om ubehagsterskler er målt",
      "Velg en klinisk evaluert generisk regel, f.eks. NAL-NL2, i stedet for leverandørens proprietære regel",
      "Legg inn riktige opplysninger: førstegangsbruker, mann, voksen, monaural tilpasning",
      "Terskelen over 70 dB HL ved 4 kHz gjør en død region sannsynlig: vurder TEN-test og hvor mye det er verdt å forsterke i diskanten",
      "Start med et tilvenningstrinn litt under målforsterkningen, fordi han er ny bruker og skeptisk",
      "Sett MPO ut fra målte ubehagsterskler hvis du har dem, ellers sjekk den spesielt",
      "Verifiser med REM at forsterkningen faktisk er der du tror",
      "Avtal kontroll for å øke forsterkningen gradvis (adapsjon) og finjustere"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor ikke bare bruke «first fit» fra programvaren?", svar: "First fit er ofte proprietær, bygger på gjennomsnitt og underforsterker ofte. En validert regel som verifiseres med REM gir et kjent utgangspunkt." },
      { sporsmal: "Hva hvis Jonas synes lyden er for skarp etter tilpasningen?", svar: "Sjekk med REM om du ligger over target i diskanten. Vurder et lavere tilvenningstrinn og øk gradvis ved kontrollene, siden brukere ofte foretrekker litt mindre enn målet i starten." }
    ]
  },
  {
    id: "M22-FB06", emne: "AUT2200", type: "scenario", tema: "Forsterkningsberegning", eksamen: "Forsterkningsberegning (07.09)",
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 29–32 og 37–40",
    sporsmal: "En pasient med otosklerose har luftledning 65 dB HL og beinledning 45 dB HL ved 1 kHz. Beskriv hvordan du beregner og setter forsterkningen ved denne frekvensen.",
    steg: [
      "Regn ut luft-bein-gapet: 65 − 45 = 20 dB",
      "Grunnforsterkningen beregnes ut fra beinledningsterskelen (den sensorinevrale delen)",
      "Legg til 75 % av gapet: 0,75 × 20 = 15 dB ekstra",
      "Bruk mindre kompresjon enn ved et rent sensorinevralt tap",
      "Sørg for at beinledningstersklene er lagt inn i tilpasningsprogrammet (og i REM-programvaren)",
      "Vurder MPO: høyere forsterkning gir høyere output, så kontroller at det ikke blir ubehagelig",
      "Verifiser med REM og finjuster ut fra pasientens opplevelse"
    ],
    oppfolging: [
      { sporsmal: "Hva skjer hvis du glemmer å legge inn beinledningen?", svar: "Programmet tror tapet er rent sensorinevralt. Da blir både forsterkning og kompresjon beregnet feil, og pasienten får for lite forsterkning for den mekaniske delen." },
      { sporsmal: "Hvorfor trengs mindre kompresjon ved mekanisk tap?", svar: "Et mekanisk tap demper lyden, men dynamikkområdet i cochlea er normalt. Da trengs ikke den kompresjonen som brukes for recruitment ved cochleære tap. (Foilene sier bare at kompresjonen blir mindre. Begrunnelsen bygger på AUT2201.)" }
    ]
  },

  // ---------- Kvalitetssikring og REM (14.09) ----------
  {
    id: "M22-RE01", emne: "AUT2200", type: "forklar", tema: "Verifisering (REM)", eksamen: "Kvalitetssikring og REM (14.09)",
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 2–11",
    sporsmal: "Forklar forskjellen på verifisering og validering av en høreapparattilpasning, og hvordan du gjør hver av dem.",
    sjekkliste: [
      "Begge er kvalitetssikring, og det mest håndfaste vi har av beste praksis",
      "Verifisering er objektivt: fungerer apparatet som tiltenkt, og gir det riktig forsterkning?",
      "Verifisering gjøres med REM (helst ISTS på flere nivåer) eller funksjonell forsterkning; koplermåling sjekker apparatet mot databladet",
      "Validering er subjektivt: opplevd nytte, tilfredshet og handikapreduksjon",
      "Validering gjøres med taleaudiometri i fritt felt med og uten apparat (HINT, HiST m.fl.) eller validerte spørreskjema (COSI, APHAB, GHABP, SSQ12)",
      "Spørreskjema brukes etter flere ukers bruk",
      "NS-EN ISO 21388:2021 krever både verifisering og validering",
      "Kunnskapsbasert praksis: forskning, erfaring og pasientens ønsker"
    ],
    oppfolging: [
      { sporsmal: "Hvis REM viser at du treffer target, er tilpasningen da god nok?", svar: "Ikke nødvendigvis. REM sier ikke om pasienten forstår tale bedre eller bruker apparatet. Det må valideres med taletest eller spørreskjema." },
      { sporsmal: "Hvorfor skal spørreskjemaet fylles ut etter flere uker?", svar: "Pasienten trenger erfaring med apparatet i hverdagen for å kunne vurdere den opplevde nytten." },
      { sporsmal: "Hva er de tre elementene i kvalitet i audiologi?", svar: "Effektivitet, effekt og resultatmåling (Taylor, 2013)." }
    ]
  },
  {
    id: "M22-RE02", emne: "AUT2200", type: "forklar", tema: "Verifisering (REM)", eksamen: "Kvalitetssikring og REM (14.09)",
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 20–30",
    sporsmal: "Forklar REUR, REOR, REAR og REIG, og hvordan de henger sammen.",
    sjekkliste: [
      "R er absolutt lydtrykk ved trommehinnen (dB SPL); G er forskjellen der inputnivået er trukket fra",
      "REUR/REUG: uten apparat, øregangsresonansen med topp rundt 2–4 kHz (ofte rundt 3 kHz, 10–20 dB)",
      "REUR brukes til å kontrollere slangeplasseringen og som referanse for REIG",
      "REOR/REOG: apparat eller propp i øret, men avslått; viser ventilasjon og okklusjon",
      "REAR/REAG: med påslått apparat; lydtrykket ved trommehinnen",
      "REIG = REAR − REUR: den faktiske innskuddsforsterkningen",
      "REAR brukes mest i dag, fordi den viser om signalet er innenfor dynamikkområdet"
    ],
    oppfolging: [
      { sporsmal: "Hva betyr en negativ REIG?", svar: "At lydtrykket ved trommehinnen er lavere med apparatet enn uten. Apparatet og proppen tar bort mer av den naturlige øregangsresonansen enn de gir tilbake. (Foilene stiller bare spørsmålet om forsterkningen er positiv eller negativ. Forklaringen er min.)" },
      { sporsmal: "Regn ut: REAR = 85 dB SPL og REUR = 70 dB SPL. Hva er REIG?", svar: "85 − 70 = 15 dB." },
      { sporsmal: "Hva kan REOR fortelle deg om en åpen dome?", svar: "Om den faktisk er åpen. Ligger REOR nær REUR, er domen åpen. Faller resonansen bort, okkluderer den mer enn ønsket." }
    ]
  },
  {
    id: "M22-RE03", emne: "AUT2200", type: "forklar", tema: "Verifisering (REM)", eksamen: "Kvalitetssikring og REM (14.09)",
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 15–19 og 42–49",
    sporsmal: "Forklar hvorfor du bør gjøre REM, og hvorfor de simulerte kurvene i tilpasningsprogrammet ikke er nok.",
    sjekkliste: [
      "Simulerte kurver regnes om fra 2 cm³-koplerverdier med CORFIG, og bygger på gjennomsnittsdata",
      "De tar ikke hensyn til den enkeltes øregang, øremusling og mellomøre, og bygger på modellens standardverdier",
      "Toleranser i komponentene kan alene gi ±5 dB avvik",
      "REM er eneste måte å se hva apparatet faktisk gir den enkelte pasienten",
      "REM gir objektiv kunnskap om hvorfor pasienten er fornøyd eller misfornøyd",
      "Rosvoldaunet (2012): varierende samsvar mellom simulert og målt REIG, og avhengig av kjønn",
      "Svar på motargumentene: tid (færre etterkontroller), stoler på programvaren (first fit underforsterker ofte)",
      "Men REM sier ikke noe om taleoppfattelse og bruk; det må valideres"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor kan samsvaret mellom simulert og målt forsterkning avhenge av kjønn?", svar: "Forelesningen peker på forskjeller i øregangsvolum og mellomøreimpedans mellom kvinner og menn." },
      { sporsmal: "Hva svarer du en kollega som sier REM tar for lang tid?", svar: "Det går fort etter litt trening, og det fører sannsynligvis til færre etterkontroller (Kochkin, 2011). Målet er en kvalitetsmessig god hørselsrehabilitering." }
    ]
  },
  {
    id: "M22-RE04", emne: "AUT2200", type: "forklar", tema: "Verifisering (REM)", eksamen: "Kvalitetssikring og REM (14.09)",
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 32–41",
    sporsmal: "Forklar hvilke feilkilder som finnes ved REM, og hvordan du unngår dem.",
    sjekkliste: [
      "Otoskopi først: voks kan blokkere sondeslangen, og du ser anatomien",
      "Kalibrer sondeslangen hver gang du bytter slange",
      "Sondeslangen nær trommehinnen (gj.snitt 28 mm kvinner, 31 mm menn; i praksis litt mindre), ellers stående bølger og dårlig diskant",
      "Kontroller plasseringen med REUG: 6 kHz skal ikke være under −5 dB",
      "Slangen kan flytte seg eller bli klemt når proppen settes inn",
      "Høyttaler 0,5–1 m unna, minst 1 m fra reflekterende flater, 0° eller 45°",
      "Pasienten skal sitte i ro, særlig med MPSE (åpen kalibrering)",
      "Riktig målesignal: det samme som simuleringen når du sammenligner med programvaren",
      "Test-retest: inntil 2 dB umiddelbart, 3–5 dB samme dag, 6–7 dB mellom besøk"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor gir 45° mindre variasjon enn 0°?", svar: "Forelesningen sier at små bevegelser hos pasienten gir variasjon ved 0°, og mindre ved 45°. Ulempen er at pasienten må flyttes ved binaural måling." },
      { sporsmal: "Når må du bruke MPSE i stedet for MPCE?", svar: "Ved åpne tilpasninger, fordi forsterket lyd lekker ut til referansemikrofonen og forstyrrer den løpende justeringen i MPCE." },
      { sporsmal: "Du måler på nytt etter å ha tatt av apparatet og ser 4 dB forskjell. Er det et problem?", svar: "Nei, kortsiktig test-retest kan gi 3–5 dB forskjell." }
    ]
  },
  {
    id: "M22-RE05", emne: "AUT2200", type: "scenario", tema: "Verifisering (REM)", eksamen: "Kvalitetssikring og REM (14.09)",
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 32–41, Brukermanual REM og REM-ferdighetsøkt 2026",
    sporsmal: "Du skal verifisere en åpen RITE-tilpasning med dome, programmert etter NAL-NL2, på en voksen kvinne. Beskriv hvordan du gjennomfører REM steg for steg.",
    steg: [
      "Forbered: romkalibrering ved behov, og kalibrer sondeslangen",
      "Otoskoper: trommehinnen skal være intakt og øregangen fri for voks; se på anatomien",
      "Plasser pasienten ca. 0,5–1 m foran høyttaleren (0°), og be henne se på høyttaleren og sitte i ro",
      "Sett inn sondeslangen ca. 27–28 mm (kvinne), nær trommehinnen",
      "Mål REUR/REUG (f.eks. rosa støy 65 dB) og kontroller resonanstopp rundt 2–4 kHz og at 6 kHz ikke er under −5 dB",
      "Sett inn apparatet uten å flytte slangen, og mål REOR/REOG for å se om domen er åpen",
      "Velg åpen REM-kalibrering (MPSE), fordi tilpasningen er åpen",
      "Fyll ut Fitting Details riktig (NAL-NL2, HA-type, ventilering, mono/binaural, alder, erfaring), og sjekk at riktig audiogram er brukt",
      "Slå på apparatet i hovedprogrammet og mål REAR med ISTS ved 50, 65 og 80 dB SPL",
      "Sammenlign med target, og juster forsterkningen i tilpasningsprogrammet til du er nær målet",
      "Mål REAR85 (MPO-test) og sammenlign med UCL",
      "Dokumenter resultatet, og planlegg validering etter noen uker (taletest, COSI)"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor måler du på 50, 65 og 80 dB SPL?", svar: "For å se hørbarhet for svak, middels og sterk tale og hvordan kompresjonen virker, slik ISO 21388 anbefaler." },
      { sporsmal: "Hva gjør du hvis REUG har en topp ved 3 kHz, men −8 dB ved 6 kHz?", svar: "Sondeslangen ligger for langt ute. Før den lenger inn og mål REUR på nytt før du går videre." },
      { sporsmal: "Hvorfor skal apparatet stå i hovedprogrammet med samme regel som REM-programmet?", svar: "Ellers sammenligner du målingen med et annet target enn det apparatet er programmert etter." }
    ]
  },
  {
    id: "M22-RE06", emne: "AUT2200", type: "scenario", tema: "Verifisering (REM)", eksamen: "Kvalitetssikring og REM (14.09)",
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 7, 30 og 34–41",
    sporsmal: "Ved REM ser du at REAR for 65 dB ISTS ligger ca. 10 dB under NAL-NL2-target fra 2 til 4 kHz, mens programvaren viser at du skal være på target. Beskriv hvordan du feilsøker og hva du gjør.",
    steg: [
      "Kontroller målingen først: sondeslangens dybde (6 kHz-testen i REUG), om slangen er klemt eller har flyttet seg, og om pasienten har sittet i ro",
      "Sjekk at riktig audiogram og samme tilpasningsregel er valgt i REM-programmet og i apparatet",
      "Sjekk at du har brukt samme type målesignal som programvaren simulerer, så du ikke sammenligner epler og pærer",
      "Sjekk Fitting Details (ventilering, HA-type) og om MPSE er brukt ved åpen tilpasning",
      "Er målingen riktig, skyldes avviket trolig at den simulerte kurven bygger på gjennomsnitt (CORFIG, ±5 dB, individuell øregang)",
      "Øk forsterkningen i diskanten i tilpasningsprogrammet og mål REAR på nytt til du er nær target",
      "Vurder sammen med pasienten om et tilvenningstrinn under target er riktig (kunnskapsbasert praksis: forskning, erfaring, pasientens ønsker)",
      "Kontroller at signalet ligger over tersklene og under ubehag, og sjekk MPO på nytt"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor kan programvaren vise at du er på target når du ikke er det?", svar: "Den simulerte kurven er regnet ut fra 2 cm³-koplerverdier og gjennomsnittsdata, og tar ikke hensyn til denne pasientens øregang, mellomøre eller toleranser i apparatet." },
      { sporsmal: "Pasienten synes lyden er bra som den er. Skal du likevel øke til target?", svar: "Vei forskningen (validert target gir best taleoppfattelse) mot erfaring (start gjerne svakere i diskanten) og pasientens ønsker. Gå eventuelt via tilvenningstrinn, og valider med taletest." }
    ]
  }
);
