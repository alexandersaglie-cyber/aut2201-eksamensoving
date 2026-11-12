// Flervalgsspørsmål for AUT2200 Klinisk audiologi 2, generert fra forelesningsfoilene.
// AUT2200 har ingen tidligere eksamener. eksamen er forelesningen spørsmålet er laget fra,
// og kilde sier hvor i foilene stoffet står. Ellers samme felter som i data/oppgaver.js.
// Fila legger spørsmålene til i lista OPPGAVER, så den må lastes etter data/oppgaver.js.

OPPGAVER.push(
  // ---------- Forsterkningsberegning (L. Rosvoldaunet, 07.09.2026) ----------
  {
    id: "S22-FB01", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 1, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 11",
    tekst: "En pasient har høreterskel 60 dB HL ved 500 Hz. Hvor mye innskuddsforsterkning (IG) gir POGO-formelen ved denne frekvensen? (IG = 0,5 × H + k, der k = −5 dB ved 500 Hz)",
    figur: null,
    alternativer: ["25 dB", "30 dB", "20 dB", "35 dB"],
    riktig: 0, forklaring: "0,5 × 60 = 30 dB, og k ved 500 Hz er −5 dB: 30 − 5 = 25 dB.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB02", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 2, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 11",
    tekst: "En pasient har høreterskel 75 dB HL ved 1000 Hz. Hvor mye forsterkning gir POGO II ved denne frekvensen? (k = 0 dB ved 1 kHz, og tillegget 0,5 × (H − 65) gjelder når H er over 65 dB HL)",
    figur: null,
    alternativer: ["37,5 dB", "42,5 dB", "47,5 dB", "32,5 dB"],
    riktig: 1, forklaring: "0,5 × 75 = 37,5 dB. Terskelen er over 65 dB HL, så tillegget blir 0,5 × (75 − 65) = 5 dB. Til sammen 42,5 dB.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB03", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 3, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 4",
    tekst: "Etter half-gain-regelen (Lybarger, 1944): Hvor mye forsterkning skal en pasient med 60 dB HL ved en frekvens ha der?",
    figur: null,
    alternativer: ["60 dB", "45 dB", "30 dB", "15 dB"],
    riktig: 2, forklaring: "Half-gain-regelen sier at foretrukket forsterkning er omtrent halvparten av høreterskelen: 60 / 2 = 30 dB.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB04", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 4, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 29",
    tekst: "En pasient har luftledningsterskel 65 dB HL og beinledningsterskel 45 dB HL ved 1 kHz. Hvor mye ekstra forsterkning gir NAL-NL2 ved denne frekvensen på grunn av den mekaniske delen av tapet?",
    figur: null,
    alternativer: ["20 dB", "10 dB", "5 dB", "15 dB"],
    riktig: 3, forklaring: "Luft-bein-gapet er 65 − 45 = 20 dB. NAL-NL2 gir et tillegg på 75 % av gapet: 0,75 × 20 = 15 dB, i tillegg til forsterkningen for den sensorinevrale delen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB05", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 5, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 12",
    tekst: "Den første NAL-metoden (1976) foreskrev en foretrukket innskuddsforsterkning ved 1 kHz på 0,46 ganger terskelen. Hvor mye blir det ved en terskel på 50 dB HL?",
    figur: null,
    alternativer: ["23 dB", "25 dB", "46 dB", "18 dB"],
    riktig: 0, forklaring: "0,46 × 50 = 23 dB.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB06", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 6, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 5",
    tekst: "Hva kjennetegner proprietære (leverandørspesifikke) metoder for forsterkningsberegning?",
    figur: null,
    alternativer: [
      "De er åpne og dokumenterte, og bygger på forskning",
      "De er lukkede og hemmeligholdte, og ikke forskningsbaserte",
      "De er utviklet av National Acoustic Laboratories",
      "De bygger alltid på individuelt målt lydstyrke"
    ],
    riktig: 1, forklaring: "Proprietære metoder er leverandørens egne, lukkede metoder. Generiske metoder som NAL og DSL er åpne, dokumenterte og forskningsbaserte.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB07", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 7, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 24",
    tekst: "Hva er målet med NAL-NL1?",
    figur: null,
    alternativer: [
      "Å gjenopprette normal lydstyrke på hver frekvens",
      "Å gi et hørbart og komfortabelt signal i hver frekvensregion, særlig for barn",
      "Å maksimere taleforståeligheten uten at talen blir sterkere enn for en normalthørende",
      "Å speile audiogrammet slik at 1 dB mer tap gir 1 dB mer forsterkning"
    ],
    riktig: 2, forklaring: "NAL-NL1 optimaliserer taleforståelsen i hvert 1/3-oktavbånd og prøver ikke å gjenopprette normal lydstyrke. Et hørbart og komfortabelt signal i hver frekvensregion er målet til DSL.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB08", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 8, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 25",
    tekst: "Hvilket av utsagnene om NAL-NL2 er IKKE riktig?",
    figur: null,
    alternativer: [
      "Den gir litt mer forsterkning til menn enn til kvinner",
      "Den gir mer forsterkning til vante brukere",
      "Den gir barn 5 dB mer forsterkning enn voksne på midtnivå",
      "Den gir mer forsterkning ved binaural tilpasning enn ved monaural"
    ],
    riktig: 3, forklaring: "NAL-NL2 gir MINDRE forsterkning ved binaural tilpasning. De tre andre utsagnene stemmer.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB09", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 9, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 14",
    tekst: "Hvilken tilpasningsregel har tradisjonelt vært brukt for barn, og baserer seg på REAG?",
    figur: null,
    alternativer: ["NAL-RP", "DSL", "POGO II", "Half-gain"],
    riktig: 1, forklaring: "DSL (Desired Sensation Level) fra Canada skal gi et hørbart og komfortabelt signal i hver frekvensregion. Den baserer seg på REAG og har tradisjonelt vært brukt for barn.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB10", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 10, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 38",
    tekst: "Hva er en fordel med peak clipping sammenlignet med kompresjonsbegrensning?",
    figur: null,
    alternativer: [
      "Mindre forvrengning",
      "Opptil 9 dB høyere MPO for talesignaler",
      "Passer best for de fleste brukere",
      "Brukes i de fleste høreapparat i dag"
    ],
    riktig: 1, forklaring: "Peak clipping kan gi opptil 9 dB høyere MPO for tale, men gir mer forvrengning. Kompresjon gir mindre forvrengning, passer best for de fleste og brukes i de aller fleste apparat i dag.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB11", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 11, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 43",
    tekst: "Hvor mye forsterkning foretrekker den gjennomsnittlige høreapparatbrukeren, sammenlignet med NAL-RP og NAL-NL1?",
    figur: null,
    alternativer: ["Omtrent det samme", "3–4 dB mer", "3–4 dB mindre", "10–15 dB mindre"],
    riktig: 2, forklaring: "Brukerne foretrekker i snitt 3–4 dB mindre forsterkning enn det NAL-RP og NAL-NL1 foreskriver. Derfor kan et tilvenningstrinn litt under målforsterkningen være lurt.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB12", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 12, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 44",
    tekst: "Ved 4 kHz er en cochleær død region mer sannsynlig enn ikke når høreterskelen er over …",
    figur: null,
    alternativer: ["40 dB HL", "55 dB HL", "70 dB HL", "100 dB HL"],
    riktig: 2, forklaring: "Forelesningen oppgir at en død region ved 4 kHz er mer sannsynlig enn ikke når terskelen overstiger 70 dB HL. Det bør undersøkes med TEN-test før man forsterker mye der.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB13", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 13, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 40",
    tekst: "Etter NAL-rasjonalet (NAL-SSPL): Hva er det minste OSPL90 et høreapparat bør ha?",
    figur: null,
    alternativer: [
      "Pasientens ubehagsterskel (ULL)",
      "Nivået som gir bare minimal begrensning når langtidsnivået for tale er 75 dB SPL",
      "Alltid 90 dB SPL, uavhengig av hørselstapet",
      "Nivået der normal samtaletale (65 dB SPL) akkurat blir hørbar"
    ],
    riktig: 1, forklaring: "Hevet stemme bør ikke få apparatet til å begrense. Minimum OSPL90 er nivået som gir bare minimal begrensning ved tale på 75 dB SPL. Maksimum er ULL.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-FB14", emne: "AUT2200", eksamen: "Forsterkningsberegning (07.09)", nr: 14, tema: "Forsterkningsberegning", poeng: 1,
    kilde: "Generert fra forelesning: Forsterkningsberegning (07.09), foil 36",
    tekst: "Hvilken pasient har MINST sannsynlighet for å ha nytte av flere lytteprogram?",
    figur: null,
    alternativer: [
      "En som bruker høreapparatet i mange ulike lyttemiljøer",
      "En som er fornøyd med apparatet i noen situasjoner, men ikke i andre",
      "En med hørselstap over 55 dB HL ved 2–4 kHz",
      "En med target nær 0 dB ved 500 Hz og volumkontroll på apparatet"
    ],
    riktig: 3, forklaring: "Ved target nær 0 ved 500 Hz og volumkontroll klarer pasienten seg ofte bedre uten flere program. De tre andre er typiske kandidater for flere program.",
    fasit: "generert", sikkerhet: "høy"
  },

  // ---------- Kvalitetssikring og REM (L. Rosvoldaunet, 14.09.2026) ----------
  {
    id: "S22-RE01", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 1, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 28",
    tekst: "Ved 2 kHz måler du REAR = 85 dB SPL og REUR = 70 dB SPL i samme punkt og samme lydfelt. Hva er REIG?",
    figur: null,
    alternativer: ["155 dB", "70 dB", "15 dB", "−15 dB"],
    riktig: 2, forklaring: "REIG = REAR − REUR = 85 − 70 = 15 dB.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE02", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 2, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 20",
    tekst: "Med et inputsignal på 65 dB SPL måler du REAR = 80 dB SPL ved 1 kHz. Hva er REAG ved 1 kHz?",
    figur: null,
    alternativer: ["15 dB", "80 dB", "145 dB", "65 dB"],
    riktig: 0, forklaring: "G (gain) er en forskjellsmåling der inputnivået trekkes fra responsen: 80 − 65 = 15 dB.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE03", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 3, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 41, og Brukermanual REM",
    tekst: "REUG-målingen viser −9 dB ved 6 kHz. Hva er mest sannsynlig, og hva gjør du?",
    figur: null,
    alternativer: [
      "Pasienten har en død region ved 6 kHz; gå videre til TEN-test",
      "Sondeslangen ligger for langt ute; før den lenger inn og mål på nytt",
      "Øregangsresonansen er normal; gå videre til REAR",
      "Høyttaleren står for nær; flytt den til 2 m"
    ],
    riktig: 1, forklaring: "Nivået ved 6 kHz i REUG skal ikke være under −5 dB. Er det lavere, ligger slangen for langt ute og må føres lenger inn.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE04", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 4, tema: "Validering og utbyttevurdering", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 8–10",
    tekst: "Hvilken av disse er en VALIDERING av en høreapparattilpasning?",
    figur: null,
    alternativer: ["REAR-måling med ISTS", "Koplermåling i testboks", "COSI-skjema etter noen ukers bruk", "REUG-måling"],
    riktig: 2, forklaring: "Validering er et subjektivt mål på opplevd nytte (taletest i fritt felt, spørreskjema eller intervju). REM og koplermåling er verifisering.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE05", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 5, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 33",
    tekst: "Du skal gjøre REM på en åpen RITE-tilpasning med dome. Hvilken metode bør du bruke?",
    figur: null,
    alternativer: [
      "MPCE, fordi pasienten da kan bevege seg fritt",
      "MPSE (åpen REM-kalibrering), og be pasienten sitte helt i ro",
      "Koplermåling i stedet for REM",
      "REIG uten REUR"
    ],
    riktig: 1, forklaring: "Ved åpne tilpasninger lekker forsterket lyd ut til referansemikrofonen, og da blir MPCE feil. Med MPSE lagres kalibreringen og referansemikrofonen slås av, så pasienten må ikke flytte seg.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE06", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 6, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 38",
    tekst: "Du tar av høreapparatet og sondeslangen, setter dem på igjen og måler på nytt ved samme besøk. Hvor stor test-retest-forskjell kan du forvente?",
    figur: null,
    alternativer: ["Inntil 2 dB", "Inntil 3–5 dB", "Inntil 6–7 dB", "Over 10 dB"],
    riktig: 1, forklaring: "Kortsiktig gjentakelse gir inntil 3–5 dB. Umiddelbar gjentakelse uten å røre utstyret gir inntil 2 dB, og ved ulike besøk inntil 6–7 dB.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE07", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 7, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 30",
    tekst: "Hvorfor har REAR i stor grad tatt over for REIG ved verifisering?",
    figur: null,
    alternativer: [
      "REAR krever ikke sondeslange",
      "REAR viser om signalet ligger innenfor pasientens dynamikkområde (over terskel, under ubehag)",
      "REAR påvirkes ikke av øregangsresonansen",
      "REAR er det eneste ISO 21388 godtar"
    ],
    riktig: 1, forklaring: "REAR viser i mye større grad om hørbarhet er oppnådd: om signalet ligger over tersklene og under ubehagsnivået, og hvordan topper og bunner i responsen ser ut.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE08", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 8, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 32",
    tekst: "Hvor dypt bør sondeslangen i gjennomsnitt plasseres i øregangen hos en voksen mann, ifølge forelesningen?",
    figur: null,
    alternativer: ["18 mm", "24 mm", "31 mm", "40 mm"],
    riktig: 2, forklaring: "Gjennomsnittsmålet er 28 mm for kvinner og 31 mm for menn. I praksis kan det være lurt å legge seg litt under (27 og 30 mm).",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE09", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 9, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 17",
    tekst: "Simulerte forsterkningskurver bygger på modellens standardiserte 2 cm³-verdier. Hvor store avvik kan toleranser i mikrofon og lydgiver alene gi?",
    figur: null,
    alternativer: ["±1 dB", "±5 dB", "±15 dB", "Ingen, fordi CORFIG korrigerer for dette"],
    riktig: 1, forklaring: "Toleranseforskjeller på komponenter kan gi avvik opp mot ±5 dB. I tillegg kommer individuelle forskjeller i øregang, øremusling og mellomøre.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE10", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 10, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 11",
    tekst: "Hva krever NS-EN ISO 21388:2021 for verifisering av en høreapparattilpasning?",
    figur: null,
    alternativer: [
      "At pasienten fyller ut COSI",
      "Minst én av: REM etter IEC 61669 eller funksjonell forsterkning etter ISO 8253-2",
      "Bare koplermåling i testboks",
      "Taleaudiometri i fritt felt med og uten høreapparat"
    ],
    riktig: 1, forklaring: "Verifisering skal gjøres med REM (helst med ISTS på flere nivåer) eller funksjonell forsterkning. COSI og taleaudiometri i fritt felt hører til validering.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE11", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 11, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 42",
    tekst: "Hva kan REM IKKE si noe om?",
    figur: null,
    alternativer: [
      "Hvor mye forsterkning apparatet faktisk gir i øregangen",
      "Om målforsterkningen er nådd",
      "Om pasienten forstår tale bedre og faktisk bruker apparatet",
      "Om signalet ligger over pasientens terskler"
    ],
    riktig: 2, forklaring: "REM viser hva apparatet gir akustisk i det enkelte øret. Om pasienten forstår bedre og bruker apparatet, må måles med validering.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE12", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 12, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 25",
    tekst: "Hva viser REOR (Real Ear Occluded Response) først og fremst?",
    figur: null,
    alternativer: [
      "Forsterkningen fra høreapparatet med påslått lyd",
      "Effekten av ventileringen og okklusjonen fra proppen eller domen",
      "Øregangsresonansen uten noe i øret",
      "Høreapparatets maksimale utgangsnivå"
    ],
    riktig: 1, forklaring: "REOR måles med apparatet eller proppen i øret, men avslått. Den viser om ventileringen virker som ønsket, og om åpne domer faktisk er åpne.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE13", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 13, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 35",
    tekst: "Programvaren viser en simulert kurve laget med et rentonesignal. Du vil verifisere at REAR stemmer med denne kurven. Hvilket målesignal bør du bruke?",
    figur: null,
    alternativer: [
      "Samme type signal som programvaren har brukt i simuleringen",
      "Alltid ISTS, uansett hva programvaren viser",
      "Live-stemme fra en pårørende",
      "Rosa støy på 90 dB SPL"
    ],
    riktig: 0, forklaring: "Ved verifisering mot en simulert kurve må du måle med samme type signal som kurven bygger på, ellers sammenligner du epler og pærer. ISTS passer når du vil se hvordan apparatet fungerer med tale.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RE14", emne: "AUT2200", eksamen: "Kvalitetssikring og REM (14.09)", nr: 14, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 40",
    tekst: "Hvordan bør høyttaleren plasseres ved REM?",
    figur: null,
    alternativer: [
      "0,5–1 m fra pasienten, minst 1 m fra reflekterende flater, helst 0° (eller 45°)",
      "Rett ved siden av øret som måles, 90°",
      "2–3 m fra pasienten for å unngå nærfelt",
      "Bak pasienten, 180°"
    ],
    riktig: 0, forklaring: "Høyttaleren skal stå 0,5–1 m unna og minst 1 m fra reflekterende flater, på 0° eller 45° (0° er vanligst klinisk).",
    fasit: "generert", sikkerhet: "høy"
  }
);
