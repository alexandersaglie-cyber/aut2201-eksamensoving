// AUT2200: kompresjon, retningsmikrofoner og elektroakustiske målinger (koplermåling, feedback, feilsøking).
// Generert fra forelesningene «Compression» (Nagaraj, 12.10, Dillon kap. 6), «Directional microphones»
// (Nagaraj, 12.10, Dillon kap. 7) og «Electroacoustic performance and measurements» (Nagaraj, 14.09, Dillon kap. 4).

var MUNTLIG = window.MUNTLIG || [];
window.MUNTLIG = MUNTLIG;

KORT.push(
  { id: "K22-KO01", emne: "AUT2200", tema: "Kompresjon", eksamen: "Compression (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesningene: Compression (12.10) og Hearing aid components (19.08)",
    forside: "Hva er kompresjon i et høreapparat, og hvorfor trengs det?",
    bakside: "En funksjon som automatisk senker forsterkningen når inputnivået øker: svake lyder forsterkes mer og sterke mindre. Det trengs fordi dynamikkområdet er redusert ved sensorinevralt tap.",
    forklaring: "Målene er komfort (sterke lyder blir ikke ubehagelige), forståelighet (svake talelyder blir hørbare) og lydkvalitet. Kompressoren skal ikke endre formen (spekteret) på bølgeformen." },
  { id: "K22-KO02", emne: "AUT2200", tema: "Kompresjon", eksamen: "Compression (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Compression (12.10)",
    forside: "Hva er kompresjonsterskel (knepunkt) og kompresjonsratio?",
    bakside: "Kompresjonsterskelen er inputnivået der kompresjonen starter, «der apparatet begynner å bremse». Kompresjonsratioen er hvor mange dB inputen må øke for at outputen skal øke 1 dB, altså helningen på I/O-kurven.",
    forklaring: "Eksempel: input øker 20 dB og output 10 dB gir 2:1. Ratio over 1 er kompresjon, ratio under 1 er ekspansjon, og 1:1 er lineært." },
  { id: "K22-KO03", emne: "AUT2200", tema: "Kompresjon", eksamen: "Compression (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Compression (12.10)",
    forside: "Hva er attack time og release time?",
    bakside: "Attack time (innkoblingstid) er tiden kompressoren bruker på å reagere når signalet øker. Release time (utkoblingstid) er tiden den bruker når signalet minker.",
    forklaring: "Dette er de dynamiske egenskapene til kompressoren: hvor raskt den reagerer på endringer." },
  { id: "K22-KO04", emne: "AUT2200", tema: "Kompresjon", eksamen: "Compression (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Compression (12.10)",
    forside: "Hva kjennetegner WDRC (wide dynamic range compression)?",
    bakside: "Kort attack time (under 5 ms), kort release time (20–100 ms), lav kompresjonsterskel (under 50 dB SPL) og lav kompresjonsratio (under 5:1).",
    forklaring: "Også kalt syllabisk eller fonemisk kompresjon. Den gjør svake lyder hørbare og sterke komfortable." },
  { id: "K22-KO05", emne: "AUT2200", tema: "Kompresjon", eksamen: "Compression (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Compression (12.10)",
    forside: "Hva er ekspansjon, og hvorfor brukes det?",
    bakside: "Ekspansjon (ratio under 1) reduserer forsterkningen for svært svake lyder. Den kalles også mikrofonstøyreduksjon, fordi den hindrer at apparatet forsterker egenstøy og svake, uinteressante lyder i stille omgivelser.",
    forklaring: "Kompresjon gjør flere lydnivåer hørbare; ekspansjon demper det aller svakeste." },
  { id: "K22-KO06", emne: "AUT2200", tema: "Kompresjon", eksamen: "Compression (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Compression (12.10)",
    forside: "Hva er forskjellen på AGCi og AGCo?",
    bakside: "AGCi (inngangsstyrt) regulerer forsterkningen ut fra inputnivået. AGCo (utgangsstyrt) regulerer ut fra outputnivået.",
    forklaring: "Det påvirker hvordan volumkontrollen virker sammen med kompresjonen." },
  { id: "K22-KO07", emne: "AUT2200", tema: "Kompresjon", eksamen: "Compression (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Compression (12.10)",
    forside: "Hva er flerkanalkompresjon, og hva er frekvenssenking?",
    bakside: "Flerkanalkompresjon: hver kanal har sin egen kompressor, så forsterkning og kompresjon kan tilpasses tapet i hvert frekvensområde. Frekvenssenking (f.eks. frekvenskompresjon): diskantlyder flyttes ned til frekvenser der de kan høres.",
    forklaring: "Begge brukes for å bedre hørbarhet, forståelighet og komfort." },
  { id: "K22-KO08", emne: "AUT2200", tema: "Kompresjon", eksamen: "Compression (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Compression (12.10)",
    forside: "Hvor stor er nivåforskjellen mellom de svakeste og sterkeste talelydene, og hvorfor betyr det noe?",
    bakside: "De sterkeste talelydene er ca. 30 dB sterkere enn de svakeste. Med et lite dynamikkområde må man finne et nivå der de svakeste høres uten at de sterkeste blir for sterke.",
    forklaring: "Kompresjon reduserer forskjellen mellom svake og sterke talelyder, f.eks. mellom konsonanter og vokaler." },
  { id: "K22-RM01", emne: "AUT2200", tema: "Retningsmikrofoner og avansert signalbehandling", eksamen: "Directional microphones (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Directional microphones (12.10)",
    forside: "Hvorfor er retningsmikrofoner viktige?",
    bakside: "De bedrer signal/støy-forholdet for tale foran i støy. Bortsett fra en ekstern mikrofon nær lydkilden er de den mest effektive måten å bedre taleforståelsen i støy på, og det eneste «høreapparatalternativet» som har vist seg å gjøre det.",
    forklaring: "Forsterkning av bakgrunnsstøy er en av de største utfordringene med høreapparat." },
  { id: "K22-RM02", emne: "AUT2200", tema: "Retningsmikrofoner og avansert signalbehandling", eksamen: "Directional microphones (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Directional microphones (12.10)",
    forside: "Hvordan virker en retningsmikrofon med to porter?",
    bakside: "Lyden når fram- og bakporten til litt ulik tid. Den ytre forsinkelsen bestemmes av avstanden mellom portene, og den indre av en akustisk demper ved bakporten. Forholdet mellom forsinkelsene bestemmer hvilken retning mikrofonen er mest følsom for.",
    forklaring: "I en subtraktiv array trekkes signalet bakfra fra signalet forfra." },
  { id: "K22-RM03", emne: "AUT2200", tema: "Retningsmikrofoner og avansert signalbehandling", eksamen: "Directional microphones (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Directional microphones (12.10), Dillon fig. 2.7",
    forside: "Hvordan skiller polarmønstrene omni, nyre (cardioid), super-/hypernyre og åttetall seg?",
    bakside: "Omni: lik følsomhet i alle retninger (sirkel). Nyre: mest følsom forfra, minst bakfra. Fra nyre til super- og hypernyre blir følsomheten bakfra større og fra siden mindre. Åttetall: like følsom foran og bak, men tar ikke inn lyd fra sidene.",
    forklaring: "Polardiagrammet viser følsomheten (i dB) for lyd fra ulike retninger." },
  { id: "K22-RM04", emne: "AUT2200", tema: "Retningsmikrofoner og avansert signalbehandling", eksamen: "Directional microphones (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Directional microphones (12.10)",
    forside: "Hva er direktivitetsindeks (DI)?",
    bakside: "Forholdet i dB mellom følsomheten for lyd rett forfra og gjennomsnittlig følsomhet for lyd fra alle andre retninger. Høyere DI betyr bedre evne til å dempe bakgrunnsstøy.",
    forklaring: "DI er frekvensavhengig og øker generelt med frekvensen. Unidirectional index (UI) sammenligner hele fronthalvdelen med hele bakhalvdelen." },
  { id: "K22-RM05", emne: "AUT2200", tema: "Retningsmikrofoner og avansert signalbehandling", eksamen: "Directional microphones (12.10)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Directional microphones (12.10)",
    forside: "Hva er adaptive retningsmikrofoner, og hva er ulempene med retningsmikrofoner?",
    bakside: "Adaptive retningsmikrofoner bytter automatisk polarmønster etter lyttemiljøet og signal/støy-forholdet, og kan «lete opp» og dempe støyen. Ulemper: begrenset direktivitet, avhengig av at talen kommer forfra, økt internstøy og påvirkning av vindstøy.",
    forklaring: "Med flere mikrofoner (array) kan man få super-retningsvirkning." },
  { id: "K22-EA01", emne: "AUT2200", tema: "Verifisering (REM)", eksamen: "Electroacoustic measurements (14.09)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09)",
    forside: "Hvorfor gjør man elektroakustiske målinger (koplermåling) av høreapparat?",
    bakside: "For å sjekke at apparatet stemmer med standard spesifikasjoner (kvalitetskontroll), sammenligne apparater, se effekten av elektroniske og akustiske endringer, og vurdere apparatet ved tilpasning og under bruk.",
    forklaring: "Målingen gjøres i en testboks med lydabsorberende vegger, høyttaler, kontrollmikrofon og kopler." },
  { id: "K22-EA02", emne: "AUT2200", tema: "Verifisering (REM)", eksamen: "Electroacoustic measurements (14.09)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09)",
    forside: "Hva er en 2cc-kopler, og hvorfor gir den lavere lydtrykk enn et ekte øre?",
    bakside: "Et hulrom på 2 cm³ som kobler lydgiveren til en målemikrofon. Den er større enn en gjennomsnittlig øregang, og større volum gir lavere lydtrykk.",
    forklaring: "HA1 brukes for ITE/ITC (apparatet kobles direkte), HA2 har en øreproppsimulator og brukes med slange (BTE). Øresimulatorer og Zwislocki-kopler etterligner øret bedre, men er også gjennomsnitt." },
  { id: "K22-EA03", emne: "AUT2200", tema: "Verifisering (REM)", eksamen: "Electroacoustic measurements (14.09)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09)",
    forside: "Hva er OSPL90, FOG og RTG i et datablad?",
    bakside: "OSPL90: output ved 90 dB SPL input og volumkontroll på maks (peak og ved 1600 Hz). FOG (full-on gain): forsterkning med volumkontroll på maks, input 50 eller 60 dB, f.eks. som HFA (snitt av 1000, 1600 og 2500 Hz). RTG (reference test gain): forsterkning med en innstilling nærmere vanlig bruk.",
    forklaring: "1600 Hz er IEC sin referansefrekvens." },
  { id: "K22-EA04", emne: "AUT2200", tema: "Verifisering (REM)", eksamen: "Electroacoustic measurements (14.09)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09)",
    forside: "Hva er RECD, og når er den nyttig?",
    bakside: "RECD = SPL i øregangen − SPL i kopleren. Den gjør at man kan måle apparatet i kopleren og regne om til hva det gir i pasientens øre, uten at pasienten må sitte stille under hele målingen.",
    forklaring: "Særlig nyttig for små barn." },
  { id: "K22-EA05", emne: "AUT2200", tema: "Problemløsning og finjustering", eksamen: "Electroacoustic measurements (14.09)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09)",
    forside: "Hva er feedback, og hva kan forårsake det?",
    bakside: "Output fra apparatet lekker tilbake til mikrofonen og forsterkes på nytt, sterkere for hver runde. Årsaker: alt som øker lekkasjen eller reflekterer lyd mot mikrofonen, f.eks. løs propp eller skall, for stor vent, voks som skyver proppen ut eller leder lyd mot venten, sprekk i hook eller slange, tygging og snakking, krympende propp og voksende øregang hos barn.",
    forklaring: "Feedback kommer oftest i diskanten, fordi forsterkningen er størst der." },
  { id: "K22-EA06", emne: "AUT2200", tema: "Problemløsning og finjustering", eksamen: "Electroacoustic measurements (14.09)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09), feilsøkingstabeller",
    forside: "Hvordan finner du ut hvor en BTE piper fra?",
    bakside: "Hold en finger over mikrofoninngangen: fortsetter pipingen, er det en intern lekkasje (slange løsnet), og apparatet må sendes inn. Hold en finger over tuppen av hooken eller proppen: fortsetter pipingen, er det sprekk i hook eller slange. Stopper pipingen når proppen tettes rundt, passer proppen ikke lenger.",
    forklaring: "Sjekk også om proppen er riktig satt inn." },
  { id: "K22-EA07", emne: "AUT2200", tema: "Problemløsning og finjustering", eksamen: "Electroacoustic measurements (14.09)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09), feilsøkingstabeller",
    forside: "Hva sjekker du når et høreapparat gir svak lyd eller ingen lyd?",
    bakside: "Batteriet (bytt), skitne, rustne eller bøyde batterikontakter, tett lydutgang eller voksfilter, tett demper i hooken (BTE), tett mikrofoninngang, og om programmeringen er endret. Hjelper ikke det, sendes apparatet inn.",
    forklaring: "Virker apparatet på telespole men ikke på mikrofon, er mikrofonen trolig defekt." }
);

OPPGAVER.push(
  {
    id: "S22-KO01", emne: "AUT2200", eksamen: "Compression (12.10)", nr: 1, tema: "Kompresjon", poeng: 1,
    kilde: "Generert fra forelesning: Compression (12.10)",
    tekst: "Over kompresjonsterskelen øker inputnivået fra 50 til 80 dB SPL, og outputnivået øker fra 80 til 90 dB SPL. Hva er kompresjonsratioen?",
    figur: null,
    alternativer: ["1:3", "3:1", "2:1", "10:1"],
    riktig: 1, forklaring: "Input øker 30 dB og output 10 dB. Kompresjonsratio = input-økning / output-økning = 30 / 10 = 3:1.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-KO02", emne: "AUT2200", eksamen: "Compression (12.10)", nr: 2, tema: "Kompresjon", poeng: 1,
    kilde: "Generert fra forelesning: Compression (12.10)",
    tekst: "Med kompresjonsratio 2:1: hvor mye øker outputen når inputen øker 20 dB (over kompresjonsterskelen)?",
    figur: null,
    alternativer: ["40 dB", "20 dB", "10 dB", "2 dB"],
    riktig: 2, forklaring: "Ved 2:1 gir 2 dB mer input 1 dB mer output. 20 dB mer input gir 10 dB mer output.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-KO03", emne: "AUT2200", eksamen: "Compression (12.10)", nr: 3, tema: "Kompresjon", poeng: 1,
    kilde: "Generert fra forelesning: Compression (12.10)",
    tekst: "En bruker klager over at apparatet suser i stille rom selv om ingen snakker. Hvilken funksjon er laget for akkurat dette?",
    figur: null,
    alternativer: ["Ekspansjon (mikrofonstøyreduksjon)", "Høyere kompresjonsratio", "Peak clipping", "Lengre release time"],
    riktig: 0, forklaring: "Ekspansjon reduserer forsterkningen for svært svake lyder, slik at apparatet ikke forsterker egenstøy og svake, uinteressante lyder i stille omgivelser.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-KO04", emne: "AUT2200", eksamen: "Compression (12.10)", nr: 4, tema: "Kompresjon", poeng: 1,
    kilde: "Generert fra forelesning: Compression (12.10)",
    tekst: "Hvorfor gir peak clipping dårligere lydkvalitet enn kompresjon?",
    figur: null,
    alternativer: [
      "Fordi den senker forsterkningen for svake lyder",
      "Fordi den kutter toppene av bølgeformen, som gir forvrengning",
      "Fordi den gir lengre attack time",
      "Fordi den bare virker på lave frekvenser"
    ],
    riktig: 1, forklaring: "Peak clipping kutter toppene av lydbølgen når den blir for høy. Det beskytter mot for sterk lyd, men endrer bølgeformen og gir forvrengning. Kompresjon senker forsterkningen uten å endre bølgeformen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-KO05", emne: "AUT2200", eksamen: "Compression (12.10)", nr: 5, tema: "Kompresjon", poeng: 1,
    kilde: "Generert fra forelesning: Compression (12.10)",
    tekst: "Hvilken kombinasjon kjennetegner WDRC?",
    figur: null,
    alternativer: [
      "Høy kompresjonsterskel og høy kompresjonsratio",
      "Lav kompresjonsterskel, lav kompresjonsratio og korte tider",
      "Ingen kompresjon under 90 dB SPL",
      "Lang attack time og lang release time"
    ],
    riktig: 1, forklaring: "WDRC: attack under 5 ms, release 20–100 ms, terskel under 50 dB SPL og ratio under 5:1. Høy terskel og høy ratio er kompresjonsbegrensning.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-KO06", emne: "AUT2200", eksamen: "Compression (12.10)", nr: 6, tema: "Kompresjon", poeng: 1,
    kilde: "Generert fra forelesning: Compression (12.10)",
    tekst: "Lavfrekvent bakgrunnsstøy maskerer talen. Hva anbefaler forelesningen for å bedre forståeligheten?",
    figur: null,
    alternativer: [
      "Mer forsterkning i bassen og mindre i diskanten",
      "Mindre forsterkning i bassen (kompresjon eller adaptivt basskutt) og mer i diskanten",
      "Slå av all kompresjon",
      "Høyere MPO i bassen"
    ],
    riktig: 1, forklaring: "Mindre bassforsterkning gir mindre maskering fra lavfrekvent støy. Mer diskant gir bedre tilgang til konsonantene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RM01", emne: "AUT2200", eksamen: "Directional microphones (12.10)", nr: 1, tema: "Retningsmikrofoner og avansert signalbehandling", poeng: 1,
    kilde: "Generert fra forelesning: Directional microphones (12.10)",
    tekst: "I hvilken situasjon gir en retningsmikrofon minst nytte?",
    figur: null,
    alternativer: [
      "Taleren står foran, og støyen kommer bakfra",
      "Taleren står bak brukeren, og støyen kommer forfra",
      "Restaurant med støy fra mange retninger og taler foran",
      "Møte der taleren sitter rett overfor"
    ],
    riktig: 1, forklaring: "Retningsmikrofoner er mest følsomme forfra. Kommer talen bakfra og støyen forfra, dempes talen og støyen forsterkes. Nytten avhenger av signalets retning.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RM02", emne: "AUT2200", eksamen: "Directional microphones (12.10)", nr: 2, tema: "Retningsmikrofoner og avansert signalbehandling", poeng: 1,
    kilde: "Generert fra forelesning: Directional microphones (12.10)",
    tekst: "Hvilket polarmønster tar IKKE inn lyd fra sidene?",
    figur: null,
    alternativer: ["Omni", "Nyre (cardioid)", "Hypernyre", "Åttetall"],
    riktig: 3, forklaring: "Åttetallsmønsteret er like følsomt foran og bak, men tar ikke inn lyd fra sidene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-RM03", emne: "AUT2200", eksamen: "Directional microphones (12.10)", nr: 3, tema: "Retningsmikrofoner og avansert signalbehandling", poeng: 1,
    kilde: "Generert fra forelesning: Directional microphones (12.10)",
    tekst: "Høreapparat A har direktivitetsindeks 5 dB, apparat B har 2 dB. Hva betyr det?",
    figur: null,
    alternativer: [
      "A forsterker mer enn B",
      "A er bedre enn B til å fremheve lyd forfra i forhold til lyd fra andre retninger",
      "B har mindre egenstøy",
      "A er mer følsom for vindstøy"
    ],
    riktig: 1, forklaring: "DI er forholdet mellom følsomheten forfra og gjennomsnittet fra alle andre retninger. Høyere DI gir bedre demping av bakgrunnsstøy.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-EA01", emne: "AUT2200", eksamen: "Electroacoustic measurements (14.09)", nr: 1, tema: "Verifisering (REM)", poeng: 1,
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09)",
    tekst: "Ved 2 kHz gir et apparat 100 dB SPL i pasientens øregang og 94 dB SPL i 2cc-kopleren. Hva er RECD ved 2 kHz?",
    figur: null,
    alternativer: ["−6 dB", "6 dB", "194 dB", "0 dB"],
    riktig: 1, forklaring: "RECD = SPL i øregangen − SPL i kopleren = 100 − 94 = 6 dB. Positivt fordi øregangen er mindre enn 2 cm³.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-EA02", emne: "AUT2200", eksamen: "Electroacoustic measurements (14.09)", nr: 2, tema: "Problemløsning og finjustering", poeng: 1,
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09), feilsøkingstabeller",
    tekst: "En BTE piper. Du holder en finger over mikrofoninngangen, og pipingen fortsetter. Hva er mest sannsynlig?",
    figur: null,
    alternativer: [
      "Proppen passer ikke lenger i øret",
      "En intern slange har løsnet fra mikrofonen eller lydgiveren; apparatet må sendes inn",
      "Brukeren har satt inn proppen feil",
      "Venten er for stor"
    ],
    riktig: 1, forklaring: "Fortsetter pipingen når mikrofoninngangen er tettet, kommer lekkasjen innenfra (slange løsnet fra mikrofon eller lydgiver). Problemer med propp og vent ville forsvunnet når mikrofonen tettes.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-EA03", emne: "AUT2200", eksamen: "Electroacoustic measurements (14.09)", nr: 3, tema: "Problemløsning og finjustering", poeng: 1,
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09)",
    tekst: "Hvorfor oppstår feedback oftest i diskanten?",
    figur: null,
    alternativer: [
      "Fordi mikrofonen ikke tar opp bass",
      "Fordi forsterkningen er størst i diskanten, så selv små lekkasjer gir hørbar piping",
      "Fordi ventileringen bare slipper ut diskant",
      "Fordi batteriet gir mer strøm til diskanten"
    ],
    riktig: 1, forklaring: "Diskanten trenger mest forsterkning. Høy forsterkning, lydlekkasje og dårlig passform gjør høye frekvenser spesielt utsatt.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-EA04", emne: "AUT2200", eksamen: "Electroacoustic measurements (14.09)", nr: 4, tema: "Problemløsning og finjustering", poeng: 1,
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09), feilsøkingstabeller",
    tekst: "En bruker hører en summing, og vanlig lyd forsvinner nesten. Summingen forsvinner når apparatet settes i vanlig lytteprogram. Hva er løsningen?",
    figur: null,
    alternativer: [
      "Sende apparatet inn",
      "Instruere brukeren om programvalg (apparatet sto i T-program), eventuelt deaktivere T-programmet",
      "Bytte batteri",
      "Lage ny propp"
    ],
    riktig: 1, forklaring: "Apparatet sto i telespoleposisjon og fanger opp magnetisk støy. Brukeren må instrueres i programvalg, eller T-programmet kan deaktiveres.",
    fasit: "generert", sikkerhet: "høy"
  }
);

MUNTLIG.push(
  {
    id: "M22-KO01", emne: "AUT2200", type: "forklar", tema: "Kompresjon", eksamen: "Compression (12.10)",
    kilde: "Generert fra forelesning: Compression (12.10); eksempelspørsmål fra eksamensinformasjonen",
    sporsmal: "Forklar hva kompresjon er, og hvorfor det er et viktig aspekt i forsterkning.",
    sjekkliste: [
      "Sensorinevralt tap gir redusert dynamikkområde mellom terskel og ubehag",
      "Lineær forsterkning gjør enten svake lyder uhørbare eller sterke lyder ubehagelige",
      "Kompresjon: svake lyder forsterkes mer, sterke mindre",
      "Begreper: kompresjonsterskel (knepunkt), kompresjonsratio (input-økning per 1 dB output-økning), attack og release time",
      "WDRC: lav terskel, lav ratio, korte tider",
      "Mål: komfort, forståelighet og lydkvalitet, mindre forskjell mellom svake og sterke talelyder (ca. 30 dB)",
      "Kompresjonsbegrensning mot ubehag og skade, med mindre forvrengning enn peak clipping",
      "Flerkanalkompresjon og ekspansjon mot svake støylyder"
    ],
    oppfolging: [
      { sporsmal: "Hva skjer om kompresjonsratioen er for høy?", svar: "Forelesningens båt-bilde: høy ratio er som å bøye hodet så langt fram som mulig. Lyden blir svært «flat», og stiger nivået mer, hjelper det ikke. En lavere ratio er mer komfortabel og fleksibel." },
      { sporsmal: "Regn ut kompresjonsratioen når input øker 20 dB og output 10 dB.", svar: "20 / 10 = 2:1." },
      { sporsmal: "Hvordan henger kompresjon sammen med tilpasningsreglene du bruker?", svar: "Ulineære regler som NAL-NL2 og DSL v5.0 foreskriver ulik forsterkning for svake, middels og sterke input. Det realiseres med kompresjon, og verifiseres med REAR ved 50, 65 og 80 dB." }
    ]
  },
  {
    id: "M22-RM01", emne: "AUT2200", type: "forklar", tema: "Retningsmikrofoner og avansert signalbehandling", eksamen: "Directional microphones (12.10)",
    kilde: "Generert fra forelesning: Directional microphones (12.10)",
    sporsmal: "Forklar hvordan retningsmikrofoner virker, og når de hjelper og ikke hjelper.",
    sjekkliste: [
      "Målet er bedre signal/støy-forhold for tale forfra",
      "To porter eller to mikrofoner; ytre forsinkelse (portavstand) og indre forsinkelse (demper) bestemmer retningsvirkningen",
      "Polarmønstre: omni, nyre, super- og hypernyre, åttetall",
      "Direktivitetsindeks: følsomhet forfra mot snitt fra alle retninger; høyere er bedre, øker med frekvensen",
      "Adaptive mikrofoner bytter mønster etter lydmiljøet og kan dempe støyretningen",
      "Mest effektive tiltaket i apparatet for tale i støy (bortsett fra ekstern mikrofon)",
      "Begrensninger: talen må komme forfra, begrenset direktivitet, internstøy, vindstøy; stor vent svekker effekten"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor svekker en stor vent effekten av retningsmikrofonen?", svar: "Uprosessert lyd fra alle retninger kommer rett inn gjennom venten og blandes med den retningsbehandlede lyden fra apparatet." },
      { sporsmal: "Hva anbefaler du en bruker som må høre en taler som sitter bak hen i bilen?", svar: "Retningsmikrofonen hjelper ikke da. Bruk omni eller et eget program, eller en ekstern mikrofon hos taleren." }
    ]
  },
  {
    id: "M22-EA01", emne: "AUT2200", type: "scenario", tema: "Problemløsning og finjustering", eksamen: "Electroacoustic measurements (14.09)",
    kilde: "Generert fra forelesning: Electroacoustic performance and measurements (14.09), feilsøkingstabeller og feedbackårsaker",
    sporsmal: "En bruker med BTE og formstøpt propp kommer tilbake fordi apparatet piper, særlig når hen tygger og når hen tar på seg lue. Beskriv hvordan du feilsøker.",
    steg: [
      "Otoskoper: voks kan skyve proppen ut av øregangen eller lede lyd mot venten",
      "Sjekk at proppen sitter riktig i øret, og at brukeren setter den riktig inn",
      "Hold en finger over mikrofoninngangen: piper det fortsatt, er det intern lekkasje og apparatet sendes inn",
      "Hold en finger over tuppen av proppen eller hooken: piper det fortsatt, er det sprekk i hook eller slange (bytt)",
      "Stopper pipingen når du tetter rundt proppen, passer proppen ikke lenger (tygging beveger øregangen); vurder ny propp",
      "Sjekk venten: for stor, eller ventplugg falt ut",
      "Lue eller hånd nær øret reflekterer lyd tilbake til mikrofonen; vurder feedbackhåndtering i apparatet",
      "Juster eventuelt diskantforsterkningen, og verifiser med REM at målforsterkningen fortsatt er nådd"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor kan tygging gi feedback?", svar: "Kjevebevegelsen endrer formen på øregangen, så det oppstår lekkasje rundt proppen." },
      { sporsmal: "Hvorfor er det ikke bra bare å skru ned diskanten til pipingen stopper?", svar: "Da mister brukeren hørbarhet for konsonantene og ligger under target. Finn og fjern lekkasjen først, og verifiser etterpå." }
    ]
  }
);
