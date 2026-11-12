// Øvingsspørsmål til høst 2024 (eksamensark.docx): korte flervalgsspørsmål i sju temadeler.
// De hører til «Høst 2024» sammen med den offisielle eksamenen, men har nr 101–220
// (opprinnelig nr + 100), så numrene ikke kolliderer med eksamensoppgavene 1–100.
// 48 spørsmål som lå dobbelt, er slått sammen inn i eksamensoppgavene (se «ogsa» der) og slettet her.
// Samme felter som i data/oppgaver.js. Fasiten er generert, siden arket ikke hadde fasit.
// Fila legger spørsmålene til i lista OPPGAVER, så den må lastes etter data/oppgaver.js.

OPPGAVER.push(
  {
    id: "EA-001", eksamen: "Høst 2024", nr: 101, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hva er hovedfunksjonen til de ytre hårcellene i cochlea?",
    figur: null,
    alternativer: [
      "Å overføre hoveddelen av lydinformasjonen direkte til hørselsnerven",
      "Å forsterke og skjerpe basilarmembranens mekaniske respons",
      "Å regulere væsketrykket i mellomøret",
      "Å omdanne lyd til vestibulære signaler"
    ],
    riktig: 1, forklaring: "De ytre hårcellene er den cochleære forsterkeren: de forsterker svake lyder og skjerper basilarmembranens frekvensselektivitet. Det er de indre hårcellene som sender hoveddelen av informasjonen til hørselsnerven.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-002", eksamen: "Høst 2024", nr: 102, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hvilket protein er spesielt viktig for elektromotiliteten i ytre hårceller?",
    figur: null,
    alternativer: [
      "Myosin",
      "Otoferlin",
      "Prestin",
      "Keratin"
    ],
    riktig: 2, forklaring: "Prestin er motorproteinet som gir de ytre hårcellene elektromotilitet. Otoferlin hører til ribbon-synapsene i de indre hårcellene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-006", eksamen: "Høst 2024", nr: 106, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hva skjer vanligvis med det auditive filteret ved skade på ytre hårceller?",
    figur: null,
    alternativer: [
      "Det blir smalere",
      "Det blir bredere",
      "Det forsvinner alltid fullstendig",
      "Det påvirkes ikke"
    ],
    riktig: 1, forklaring: "Uten de ytre hårcellenes aktive forsterkning blir tuningen bredere, altså bredere auditive filtre.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-007", eksamen: "Høst 2024", nr: 107, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hvorfor kan taleoppfattelse i støy bli dårligere ved redusert frekvensselektivitet?",
    figur: null,
    alternativer: [
      "Fordi lavfrekvente lyder ikke kan oppfattes",
      "Fordi maskering mellom frekvensområder øker",
      "Fordi lydens hastighet reduseres",
      "Fordi talerens grunntone forsvinner"
    ],
    riktig: 1, forklaring: "Bredere filtre slipper inn mer støy fra nabofrekvenser, så maskeringen mellom frekvensområder øker.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-008", eksamen: "Høst 2024", nr: 108, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hva menes med en cochleær død region?",
    figur: null,
    alternativer: [
      "Et område uten fungerende ytre øre",
      "Et område hvor indre hårceller og/eller tilhørende nevroner ikke fungerer tilstrekkelig",
      "Et område med økt følsomhet for lyd",
      "Et område hvor basilarmembranen ikke beveger seg"
    ],
    riktig: 1, forklaring: "En død region er et område i cochlea der indre hårceller og/eller nevronene ikke fungerer, slik at vibrasjon der ikke blir oppdaget.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-009", eksamen: "Høst 2024", nr: 109, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hva brukes TEN-testen hovedsakelig til?",
    figur: null,
    alternativer: [
      "Å undersøke mellomøretrykk",
      "Å diagnostisere vestibulær nevritt",
      "Å identifisere cochleære døde regioner",
      "Å undersøke stapediusrefleksen"
    ],
    riktig: 2, forklaring: "TEN-testen (threshold-equalizing noise) brukes til å påvise cochleære døde regioner.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-011", eksamen: "Høst 2024", nr: 111, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hva innebærer «off-frequency listening»?",
    figur: null,
    alternativer: [
      "At lyd oppfattes gjennom vestibulærsystemet",
      "At en tone oppfattes gjennom fungerende cochleære områder med en annen karakteristisk frekvens",
      "At lyd bare oppfattes ved svært lave frekvenser",
      "At hørselsnerven ikke sender aksjonspotensialer"
    ],
    riktig: 1, forklaring: "Ved off-frequency listening oppdages tonen av friske hårceller et annet sted på basilarmembranen, med en annen karakteristisk frekvens.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-013", eksamen: "Høst 2024", nr: 113, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hva er otoakustiske emisjoner (OAE)?",
    figur: null,
    alternativer: [
      "Elektriske signaler fra hørselsnerven",
      "Svake lyder som genereres i cochlea og kan registreres i øregangen",
      "Reflekser fra mellomøremusklene",
      "Signaler fra vestibulærnerven"
    ],
    riktig: 1, forklaring: "OAE er svake lyder som dannes av de ytre hårcellene i cochlea og kan måles med en mikrofon i øregangen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-016", eksamen: "Høst 2024", nr: 116, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hva er en viktig funksjon til ribbon-synapser i indre hårceller?",
    figur: null,
    alternativer: [
      "Å regulere væsketrykk",
      "Å muliggjøre rask og vedvarende frigjøring av nevrotransmitter",
      "Å forsterke basilarmembranens bevegelser",
      "Å produsere endolymfe"
    ],
    riktig: 1, forklaring: "Ribbon-synapsene gjør at de indre hårcellene kan frigjøre nevrotransmitter raskt og vedvarende, noe som gir presis timing.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-017", eksamen: "Høst 2024", nr: 117, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hvilken nevrotransmitter frigjøres hovedsakelig fra indre hårceller til afferente hørselsnervefibre?",
    figur: null,
    alternativer: [
      "Dopamin",
      "Serotonin",
      "Glutamat",
      "Acetylkolin"
    ],
    riktig: 2, forklaring: "Indre hårceller frigjør glutamat til de afferente fibrene. Acetylkolin brukes av de efferente fibrene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-018", eksamen: "Høst 2024", nr: 118, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hva kjennetegner en psykoakustisk tuningkurve?",
    figur: null,
    alternativer: [
      "Den viser bare lydens intensitet over tid",
      "Den viser maskeringsnivå som funksjon av frekvens",
      "Den viser mellomøretrykk",
      "Den viser taleforståelse ved ulike lydnivåer"
    ],
    riktig: 1, forklaring: "En psykoakustisk tuningkurve viser hvilket maskeringsnivå som trengs for å maskere et fast signal, som funksjon av maskererens frekvens.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-019", eksamen: "Høst 2024", nr: 119, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hva innebærer det at cochlea er tonotopisk organisert?",
    figur: null,
    alternativer: [
      "Alle frekvenser behandles likt over hele basilarmembranen",
      "Høye frekvenser representeres hovedsakelig basalt og lave frekvenser apikalt",
      "Lave frekvenser representeres basalt",
      "Frekvensinformasjon behandles bare i cortex"
    ],
    riktig: 1, forklaring: "Tonotopi: høye frekvenser gir størst utslag i basis og lave frekvenser i apex av cochlea.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-020", eksamen: "Høst 2024", nr: 120, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hva skjer typisk med det dynamiske hørselsområdet ved cochleært hørselstap med recruitment?",
    figur: null,
    alternativer: [
      "Det utvides",
      "Det blir uendret",
      "Det blir redusert",
      "Det forsvinner alltid fullstendig"
    ],
    riktig: 2, forklaring: "Terskelen stiger, men ubehagsgrensen gjør det ikke. Dynamikkområdet mellom dem blir derfor smalere.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-021", eksamen: "Høst 2024", nr: 121, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hva er hovedforskjellen mellom afferente og efferente hørselsbaner?",
    figur: null,
    alternativer: [
      "Afferente baner går fra hjernen til cochlea",
      "Efferente baner fører all lydinformasjon til cortex",
      "Afferente baner fører sensorisk informasjon mot sentralnervesystemet, mens efferente baner sender signaler i motsatt retning",
      "Begge går utelukkende mellom cochlea og hjernestammen"
    ],
    riktig: 2, forklaring: "Afferente baner går fra sanseorganet mot hjernen. Efferente baner går fra hjernen ut mot cochlea.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-022", eksamen: "Høst 2024", nr: 122, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilken struktur er første sentrale koblingsstasjon for hørselsnerven?",
    figur: null,
    alternativer: [
      "Medial geniculate body",
      "Cochleariskjernene",
      "Auditive cortex",
      "Inferior colliculus"
    ],
    riktig: 1, forklaring: "Hørselsnerven ender først i cochleariskjernene i hjernestammen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-024", eksamen: "Høst 2024", nr: 124, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilken struktur ligger i midthjernen og er en sentral del av de auditive banene?",
    figur: null,
    alternativer: [
      "Inferior colliculus",
      "Cochlea",
      "Organum Corti",
      "Utriculus"
    ],
    riktig: 0, forklaring: "Inferior colliculus ligger i midthjernen og er en obligatorisk stasjon i den afferente hørselsbanen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-025", eksamen: "Høst 2024", nr: 125, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hvilken struktur er spesielt knyttet til prosessering av interaurale tidsforskjeller (ITD)?",
    figur: null,
    alternativer: [
      "LSO",
      "MSO",
      "Stria vascularis",
      "Sacculus"
    ],
    riktig: 1, forklaring: "MSO behandler interaurale tidsforskjeller (ITD).",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-026", eksamen: "Høst 2024", nr: 126, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hvilken struktur er spesielt knyttet til prosessering av interaurale nivåforskjeller (ILD)?",
    figur: null,
    alternativer: [
      "LSO",
      "MSO",
      "Corpus callosum",
      "Basilarmembranen"
    ],
    riktig: 0, forklaring: "LSO behandler interaurale nivåforskjeller (ILD).",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-030", eksamen: "Høst 2024", nr: 130, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hva menes med myelinisering?",
    figur: null,
    alternativer: [
      "Dannelse av nye hårceller",
      "Utvikling av myelinskjeder rundt nerveaksoner",
      "Økning av væske i cochlea",
      "Nedbrytning av nevroner"
    ],
    riktig: 1, forklaring: "Myelinisering er dannelsen av myelinskjeder rundt aksonene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-031", eksamen: "Høst 2024", nr: 131, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hva er en viktig funksjon av myelin?",
    figur: null,
    alternativer: [
      "Å redusere hastigheten på nerveimpulser",
      "Å øke ledningshastigheten i nervefibrene",
      "Å produsere aksjonspotensialer uten stimulering",
      "Å regulere lydtrykket i mellomøret"
    ],
    riktig: 1, forklaring: "Myelin isolerer aksonene og øker ledningshastigheten (saltatorisk ledning).",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-032", eksamen: "Høst 2024", nr: 132, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hva innebærer temporal koding av lydfrekvens?",
    figur: null,
    alternativer: [
      "At frekvens bare representeres gjennom plassering på basilarmembranen",
      "At tidspunktet for nerveimpulser inneholder informasjon om lydens frekvens",
      "At hjernen bare registrerer lydens amplitude",
      "At frekvens ikke kan representeres nevrologisk"
    ],
    riktig: 1, forklaring: "Ved temporal koding ligger frekvensinformasjonen i når nervefibrene fyrer, altså i takt med lydbølgen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-033", eksamen: "Høst 2024", nr: 133, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hva beskriver volley-prinsippet?",
    figur: null,
    alternativer: [
      "At alle hørselsnervefibre fyrer samtidig ved alle frekvenser",
      "At flere nervefibre samlet kan representere periodisiteten til en lyd",
      "At hørselsnerven bare reagerer på høye frekvenser",
      "At nevroner bare sender ett signal per sekund"
    ],
    riktig: 1, forklaring: "Volley-prinsippet: flere fibre fyrer på hver sin periode, slik at gruppen samlet følger lydens periodisitet.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-034", eksamen: "Høst 2024", nr: 134, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hva innebærer fasekobling (phase locking)?",
    figur: null,
    alternativer: [
      "At nevroner fyrer på bestemte faser av en periodisk lydbølge",
      "At alle nevroner fyrer kontinuerlig",
      "At nevroner bare reagerer på lyd over 10 kHz",
      "At lyd ikke kan behandles i hjernestammen"
    ],
    riktig: 0, forklaring: "Fasekobling betyr at nevronene fyrer på en bestemt fase av lydbølgen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-035", eksamen: "Høst 2024", nr: 135, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hva er en viktig begrensning ved temporal frekvenskoding?",
    figur: null,
    alternativer: [
      "Den fungerer bare i auditive cortex",
      "Fasekobling blir mindre presis ved høye frekvenser",
      "Den krever alltid binaural stimulering",
      "Den fungerer bare ved hørselstap"
    ],
    riktig: 1, forklaring: "Fasekoblingen blir mindre presis ved høye frekvenser (over noen få kHz). Der kodes frekvens med stedskode.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-036", eksamen: "Høst 2024", nr: 136, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva menes med top-down-prosessering?",
    figur: null,
    alternativer: [
      "At lyd går fra cochlea til hjernen",
      "At tidligere erfaring, forventninger og kunnskap påvirker tolkningen av sensorisk informasjon",
      "At lydens frekvens reduseres",
      "At hørselsterskelen øker"
    ],
    riktig: 1, forklaring: "Top-down-prosessering betyr at erfaring, forventninger og kunnskap brukes til å tolke det vi hører.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-037", eksamen: "Høst 2024", nr: 137, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva er bottom-up-prosessering?",
    figur: null,
    alternativer: [
      "Prosessering som tar utgangspunkt i sensorisk informasjon",
      "Prosessering som utelukkende bygger på forventninger",
      "En form for hukommelse",
      "En vestibulær refleks"
    ],
    riktig: 0, forklaring: "Bottom-up-prosessering tar utgangspunkt i selve sanseinformasjonen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-041", eksamen: "Høst 2024", nr: 141, tema: "Tale og akustikk", poeng: 1,
    tekst: "Hva er formanter?",
    figur: null,
    alternativer: [
      "Talerens pustefrekvens",
      "Resonansfrekvenser i talekanalen",
      "Lydens totale varighet",
      "Antall ord per sekund"
    ],
    riktig: 1, forklaring: "Formanter er resonansfrekvenser i talekanalen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-043", eksamen: "Høst 2024", nr: 143, tema: "Tale og akustikk", poeng: 1,
    tekst: "Hva er grunntonen (F0) hovedsakelig knyttet til?",
    figur: null,
    alternativer: [
      "Stemmens tonehøyde",
      "Talekanalens lengde alene",
      "Støyreduksjon",
      "Formantenes amplitude"
    ],
    riktig: 0, forklaring: "Grunntonen (F0) bestemmer stemmens tonehøyde.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-044", eksamen: "Høst 2024", nr: 144, tema: "Tale og akustikk", poeng: 1,
    tekst: "Hva beskriver LTASS?",
    figur: null,
    alternativer: [
      "Talens gjennomsnittlige frekvensspekter over tid",
      "Høreterskler ved ulike frekvenser",
      "Mellomørets mekaniske egenskaper",
      "Den vestibulære responsen på lyd"
    ],
    riktig: 0, forklaring: "LTASS er talens gjennomsnittlige frekvensspekter målt over tid.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-046", eksamen: "Høst 2024", nr: 146, tema: "Tale og akustikk", poeng: 1,
    tekst: "Hvilke talelyder inneholder typisk mye høyfrekvent energi?",
    figur: null,
    alternativer: [
      "Vokaler",
      "/s/ og /f/",
      "Nasaler",
      "Stemte vokaler med lav F0"
    ],
    riktig: 1, forklaring: "Frikativer som /s/ og /f/ har mye høyfrekvent energi.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-047", eksamen: "Høst 2024", nr: 147, tema: "Tale og akustikk", poeng: 1,
    tekst: "Hva vil en person med godt bevart basshørsel, men stort diskanttap, typisk ha størst problemer med?",
    figur: null,
    alternativer: [
      "Å oppfatte alle vokaler",
      "Å oppfatte høyfrekvente konsonanter",
      "Å oppfatte lydens varighet",
      "Å høre sin egen stemme"
    ],
    riktig: 1, forklaring: "Høyfrekvente konsonanter (s, f, t, k) blir vanskelige å høre, mens vokalene ofte fortsatt er hørbare.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-048", eksamen: "Høst 2024", nr: 148, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hva er interaural tidsforskjell (ITD)?",
    figur: null,
    alternativer: [
      "Forskjell i lydstyrke mellom ørene",
      "Forskjell i ankomsttid for lyd mellom ørene",
      "Forskjell i høreterskel mellom ørene",
      "Forskjell i øregangens lengde"
    ],
    riktig: 1, forklaring: "ITD er forskjellen i når lyden kommer frem til de to ørene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-049", eksamen: "Høst 2024", nr: 149, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hva er interaural nivåforskjell (ILD)?",
    figur: null,
    alternativer: [
      "Forskjell i lydtrykk mellom ørene",
      "Forskjell i lydens hastighet",
      "Forskjell i frekvens mellom ørene",
      "Forskjell i fasekobling i cortex"
    ],
    riktig: 0, forklaring: "ILD er forskjellen i lydtrykk (nivå) mellom ørene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-050", eksamen: "Høst 2024", nr: 150, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hva er viktigst for lydlokalisering i vertikalplanet?",
    figur: null,
    alternativer: [
      "Bare ITD",
      "Bare ILD",
      "Spektrale endringer som skyldes øremuslingens form",
      "Corpus callosum alene"
    ],
    riktig: 2, forklaring: "Lokalisering i vertikalplanet bygger på spektrale endringer fra øremuslingen (pinna).",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-051", eksamen: "Høst 2024", nr: 151, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hva er en viktig årsak til at ILD vanligvis er tydeligere ved høye frekvenser?",
    figur: null,
    alternativer: [
      "Hodet skaper en mer effektiv lydskygge",
      "Høye frekvenser beveger seg langsommere",
      "Hørselsnerven reagerer ikke på lave frekvenser",
      "Trommehinnen stopper lave frekvenser"
    ],
    riktig: 0, forklaring: "Korte bølgelengder (høye frekvenser) blir skygget av hodet, så nivåforskjellen blir størst der.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-052", eksamen: "Høst 2024", nr: 152, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hva beskriver binaural masking level difference (BMLD)?",
    figur: null,
    alternativer: [
      "Forskjellen mellom luftledning og beinledning",
      "Forbedret deteksjon av signal i maskeringsstøy ved gunstige binaurale forskjeller",
      "Forskjellen mellom to høreapparater",
      "Redusert høreterskel ved bruk av ørepropper"
    ],
    riktig: 1, forklaring: "BMLD er hvor mye bedre et signal oppdages i støy når signal og støy har ulike binaurale forskjeller, f.eks. SπN0 sammenlignet med S0N0.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-053", eksamen: "Høst 2024", nr: 153, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hva er koinsidensdeteksjon i MSO?",
    figur: null,
    alternativer: [
      "Registrering av samtidige innganger fra de to ørene",
      "Måling av mellomøretrykk",
      "Registrering av lydstyrke alene",
      "Regulering av cochleær forsterkning"
    ],
    riktig: 0, forklaring: "MSO-celler fyrer når inngangene fra de to ørene kommer samtidig (koinsidensdeteksjon). Slik kodes ITD.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-054", eksamen: "Høst 2024", nr: 154, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva er en viktig funksjon av arbeidsminnet ved taleoppfattelse?",
    figur: null,
    alternativer: [
      "Å lagre lyd permanent i cochlea",
      "Å holde og bearbeide informasjon mens man tolker tale",
      "Å regulere stapediusrefleksen",
      "Å bestemme lydens hastighet"
    ],
    riktig: 1, forklaring: "Arbeidsminnet holder og bearbeider informasjon mens vi tolker tale, særlig når signalet er dårlig.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-055", eksamen: "Høst 2024", nr: 155, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hvorfor kan en person med hørselstap forstå tale bedre i en kjent samtalekontekst?",
    figur: null,
    alternativer: [
      "Fordi høreterskelen automatisk forbedres",
      "Fordi top-down-prosessering bidrar til å fylle inn manglende informasjon",
      "Fordi cochlea regenererer hårceller",
      "Fordi bakgrunnsstøy forsvinner"
    ],
    riktig: 1, forklaring: "Kjent kontekst lar top-down-prosessering fylle inn det som ikke blir hørt.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-058", eksamen: "Høst 2024", nr: 158, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva er presbyakusis?",
    figur: null,
    alternativer: [
      "Medfødt hørselstap",
      "Aldersrelatert hørselstap",
      "Plutselig mekanisk hørselstap",
      "Hørselstap som skyldes mellomørebetennelse"
    ],
    riktig: 1, forklaring: "Presbyakusis er aldersrelatert hørselstap.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-062", eksamen: "Høst 2024", nr: 162, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva menes med krystallisert intelligens?",
    figur: null,
    alternativer: [
      "Evnen til å reagere raskt på ukjente oppgaver",
      "Kunnskap og ferdigheter utviklet gjennom erfaring",
      "Evnen til å oppfatte høyfrekvent lyd",
      "Evnen til å utføre vestibulære reflekser"
    ],
    riktig: 1, forklaring: "Krystallisert intelligens er kunnskap og ferdigheter man har bygget opp gjennom erfaring.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-063", eksamen: "Høst 2024", nr: 163, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva menes med flytende intelligens?",
    figur: null,
    alternativer: [
      "Evnen til å bruke innlært kunnskap",
      "Evnen til å løse nye problemer og bearbeide ny informasjon",
      "Evnen til å huske barndomsminner",
      "Evnen til å høre lave frekvenser"
    ],
    riktig: 1, forklaring: "Flytende intelligens er evnen til å løse nye problemer og bearbeide ny informasjon.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-067", eksamen: "Høst 2024", nr: 167, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva innebærer optimalisering i SOC-modellen?",
    figur: null,
    alternativer: [
      "Å redusere alle aktiviteter",
      "Å utvikle og bruke ressurser for å nå prioriterte mål",
      "Å unngå utfordringer",
      "Å slutte å lære nye ferdigheter"
    ],
    riktig: 1, forklaring: "Optimalisering i SOC-modellen: å utvikle og bruke ressurser for å nå de prioriterte målene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-068", eksamen: "Høst 2024", nr: 168, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva innebærer kompensasjon i SOC-modellen?",
    figur: null,
    alternativer: [
      "Å benekte funksjonstap",
      "Å benytte alternative strategier eller hjelpemidler for å opprettholde funksjon",
      "Å velge flere mål",
      "Å ignorere begrensninger"
    ],
    riktig: 1, forklaring: "Kompensasjon i SOC-modellen: å bruke alternative strategier eller hjelpemidler, f.eks. høreapparat, for å opprettholde funksjon.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-070", eksamen: "Høst 2024", nr: 170, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hva er et eksempel på selvstereotypisering blant eldre?",
    figur: null,
    alternativer: [
      "«Jeg liker å lære nye ting.»",
      "«Jeg er for gammel til å forstå ny teknologi.»",
      "«Jeg har erfaring som kan være nyttig.»",
      "«Jeg ønsker å delta i aktiviteter.»"
    ],
    riktig: 1, forklaring: "En selvstereotypi er en negativ (eller positiv) forestilling om egen aldersgruppe som man bruker på seg selv, som «for gammel til ny teknologi».",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-071", eksamen: "Høst 2024", nr: 171, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hva er aldersdiskriminering?",
    figur: null,
    alternativer: [
      "Å tilrettelegge for eldre",
      "Forskjellsbehandling på grunnlag av alder",
      "Å undersøke aldersrelaterte sykdommer",
      "Å tilby eldre helsetjenester"
    ],
    riktig: 1, forklaring: "Aldersdiskriminering er forskjellsbehandling på grunnlag av alder.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-072", eksamen: "Høst 2024", nr: 172, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva innebærer sosial deltakelse i alderdommen?",
    figur: null,
    alternativer: [
      "Bare å bo sammen med familie",
      "Å være involvert i sosiale aktiviteter og livssituasjoner",
      "Bare å være yrkesaktiv",
      "Å være fysisk aktiv uten kontakt med andre"
    ],
    riktig: 1, forklaring: "Sosial deltakelse er å være involvert i sosiale aktiviteter og livssituasjoner.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-073", eksamen: "Høst 2024", nr: 173, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hvorfor kan hørselstap påvirke livskvaliteten hos eldre?",
    figur: null,
    alternativer: [
      "Fordi hørselstap alltid gir depresjon",
      "Fordi kommunikasjon, sosial deltakelse og selvstendighet kan påvirkes",
      "Fordi alle eldre mister evnen til å lære",
      "Fordi hørselstap alltid fører til institusjonsopphold"
    ],
    riktig: 1, forklaring: "Hørselstap kan svekke kommunikasjon, sosial deltakelse og selvstendighet og dermed livskvaliteten.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-074", eksamen: "Høst 2024", nr: 174, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva er en viktig forskjell mellom normal aldring og demens?",
    figur: null,
    alternativer: [
      "Normal aldring innebærer alltid alvorlig hukommelsestap",
      "Demens innebærer kognitiv svikt som påvirker daglig funksjon",
      "Demens er en uunngåelig del av aldring",
      "Normal aldring innebærer tap av alle kognitive ferdigheter"
    ],
    riktig: 1, forklaring: "Ved demens påvirker den kognitive svikten den daglige funksjonen. Demens er ikke en normal del av aldring.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-075", eksamen: "Høst 2024", nr: 175, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva er et viktig mål med audiologisk rehabilitering hos eldre?",
    figur: null,
    alternativer: [
      "Å gjenopprette normal cochleær funksjon hos alle",
      "Å støtte kommunikasjon, deltakelse og livskvalitet",
      "Å eliminere alle kognitive utfordringer",
      "Å forhindre all biologisk aldring"
    ],
    riktig: 1, forklaring: "Målet er å støtte kommunikasjon, deltakelse og livskvalitet, ikke å gjenopprette normal hørsel.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-076", eksamen: "Høst 2024", nr: 176, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hva kjennetegner en psykisk lidelse sammenlignet med forbigående psykiske plager?",
    figur: null,
    alternativer: [
      "At personen føler seg trist én dag",
      "At symptomer oppfyller diagnostiske kriterier og ofte gir betydelig funksjonspåvirkning",
      "At personen opplever stress før eksamen",
      "At personen har redusert hørsel"
    ],
    riktig: 1, forklaring: "En psykisk lidelse oppfyller diagnostiske kriterier og gir ofte betydelig funksjonsnedsettelse. Psykiske plager er mildere og ofte forbigående.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-078", eksamen: "Høst 2024", nr: 178, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hva innebærer stigma ifølge Erving Goffman?",
    figur: null,
    alternativer: [
      "At et individ får en urettferdig fordel",
      "At en egenskap blir sosialt nedvurdert og påvirker hvordan personen oppfattes",
      "At alle mennesker har samme sosiale status",
      "At funksjonsnedsettelse alltid er synlig"
    ],
    riktig: 1, forklaring: "Goffman: stigma er en egenskap som blir sosialt nedvurdert og endrer hvordan personen blir oppfattet.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-084", eksamen: "Høst 2024", nr: 184, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hva er nevroplastisitetens betydning for rehabilitering?",
    figur: null,
    alternativer: [
      "Den gjør læring umulig i voksen alder",
      "Den muliggjør tilpasning og læring gjennom erfaring og trening",
      "Den gjenoppretter alltid normal hørsel",
      "Den påvirker bare barn"
    ],
    riktig: 1, forklaring: "Nevroplastisitet gjør det mulig å lære og tilpasse seg gjennom erfaring og trening, også i voksen alder.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-085", eksamen: "Høst 2024", nr: 185, tema: "Folkehelse og epidemiologi", poeng: 1,
    tekst: "Hva innebærer ICF-modellen?",
    figur: null,
    alternativer: [
      "En klassifisering som bare beskriver sykdomsdiagnoser",
      "Et rammeverk for funksjon, funksjonshemming og helse i samspill med omgivelsene",
      "En metode for å måle høreterskler",
      "En modell som bare beskriver psykiske lidelser"
    ],
    riktig: 1, forklaring: "ICF er WHOs rammeverk for funksjon, funksjonshemming og helse i samspill med omgivelsene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-087", eksamen: "Høst 2024", nr: 187, tema: "Folkehelse og epidemiologi", poeng: 1,
    tekst: "Hva er et eksempel på en miljøfaktor i ICF?",
    figur: null,
    alternativer: [
      "Arbeidsminne",
      "Høreterskel",
      "Tilgang til tekniske hjelpemidler",
      "Alder"
    ],
    riktig: 2, forklaring: "Miljøfaktorer er forhold utenfor personen, f.eks. tekniske hjelpemidler. Høreterskel og arbeidsminne er kroppsfunksjoner, og alder er en personlig faktor.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-088", eksamen: "Høst 2024", nr: 188, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hva kan bidra til hørselsrelatert fatigue i arbeidslivet?",
    figur: null,
    alternativer: [
      "Redusert lytteanstrengelse",
      "Vedvarende høy lytteanstrengelse og krevende kommunikasjonssituasjoner",
      "Forbedret frekvensselektivitet",
      "Økt cochleær forsterkning"
    ],
    riktig: 1, forklaring: "Vedvarende høy lytteanstrengelse i krevende kommunikasjonssituasjoner gir hørselsrelatert fatigue.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-089", eksamen: "Høst 2024", nr: 189, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hva er et viktig prinsipp ved personsentrert audiologisk rehabilitering?",
    figur: null,
    alternativer: [
      "Audiografen bestemmer alle mål alene",
      "Tiltak og mål utvikles i samarbeid med pasienten",
      "Alle pasienter får identisk behandling",
      "Pasientens egne opplevelser er irrelevante"
    ],
    riktig: 1, forklaring: "Personsentrert rehabilitering betyr at mål og tiltak utvikles sammen med pasienten.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-090", eksamen: "Høst 2024", nr: 190, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hva kan bidra til at en person med hørselstap utsetter rehabilitering?",
    figur: null,
    alternativer: [
      "God informasjon",
      "Opplevd stigma og manglende aksept av hørselstapet",
      "Sosial støtte",
      "God motivasjon"
    ],
    riktig: 1, forklaring: "Opplevd stigma og manglende aksept av hørselstapet er vanlige grunner til å utsette rehabilitering.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-091", eksamen: "Høst 2024", nr: 191, tema: "Vestibulært", poeng: 1,
    tekst: "Hvilke strukturer registrerer hovedsakelig rotasjonsbevegelser av hodet?",
    figur: null,
    alternativer: [
      "Utriculus og sacculus",
      "Buegangene",
      "Cochlea",
      "Organum Corti"
    ],
    riktig: 1, forklaring: "Buegangene registrerer rotasjonsbevegelser (vinkelakselerasjon).",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-092", eksamen: "Høst 2024", nr: 192, tema: "Vestibulært", poeng: 1,
    tekst: "Hvilke strukturer registrerer hovedsakelig lineær akselerasjon og hodets orientering i forhold til tyngdekraften?",
    figur: null,
    alternativer: [
      "Buegangene",
      "Otolittorganene",
      "Cochleariskjernene",
      "Auditive cortex"
    ],
    riktig: 1, forklaring: "Otolittorganene (utriculus og sacculus) registrerer lineær akselerasjon og hodets stilling i forhold til tyngdekraften.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-093", eksamen: "Høst 2024", nr: 193, tema: "Vestibulært", poeng: 1,
    tekst: "Hvilket otolittorgan er cVEMP hovedsakelig knyttet til?",
    figur: null,
    alternativer: [
      "Utriculus",
      "Sacculus",
      "Cochlea",
      "Horisontale buegang"
    ],
    riktig: 1, forklaring: "cVEMP er hovedsakelig knyttet til sacculus.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-094", eksamen: "Høst 2024", nr: 194, tema: "Vestibulært", poeng: 1,
    tekst: "Hvilket otolittorgan er oVEMP hovedsakelig knyttet til?",
    figur: null,
    alternativer: [
      "Utriculus",
      "Sacculus",
      "Cochlea",
      "Trommehinnen"
    ],
    riktig: 0, forklaring: "oVEMP er hovedsakelig knyttet til utriculus.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-095", eksamen: "Høst 2024", nr: 195, tema: "Vestibulært", poeng: 1,
    tekst: "Hva er hovedfunksjonen til vestibulo-okulær refleks (VOR)?",
    figur: null,
    alternativer: [
      "Å stabilisere blikket under hodebevegelser",
      "Å regulere mellomøretrykket",
      "Å øke høreterskelen",
      "Å kontrollere taleforståelse"
    ],
    riktig: 0, forklaring: "VOR holder blikket stabilt når hodet beveger seg.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-096", eksamen: "Høst 2024", nr: 196, tema: "Vestibulært", poeng: 1,
    tekst: "Hva kjennetegner Ménières sykdom?",
    figur: null,
    alternativer: [
      "Bare konstant svimmelhet uten hørselssymptomer",
      "Episoder med vertigo og ofte fluktuerende hørselstap, tinnitus og trykkfølelse",
      "Bare mekanisk hørselstap",
      "Fullstendig fravær av vestibulære symptomer"
    ],
    riktig: 1, forklaring: "Ménières sykdom gir anfall med vertigo og ofte fluktuerende hørselstap, tinnitus og trykkfølelse.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-097", eksamen: "Høst 2024", nr: 197, tema: "Vestibulært", poeng: 1,
    tekst: "Hva er endolymfatisk hydrops?",
    figur: null,
    alternativer: [
      "Redusert trykk i mellomøret",
      "Unormal opphopning/utvidelse av endolymferommet i det indre øret",
      "Betennelse i trommehinnen",
      "Skade på øregangen"
    ],
    riktig: 1, forklaring: "Endolymfatisk hydrops er unormal opphopning av endolymfe, slik at endolymferommet utvides.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-099", eksamen: "Høst 2024", nr: 199, tema: "Vestibulært", poeng: 1,
    tekst: "Hva er nystagmus?",
    figur: null,
    alternativer: [
      "En type cochleær forsterkning",
      "Rytmiske, ufrivillige øyebevegelser",
      "En form for tinnitus",
      "En type hørselstap"
    ],
    riktig: 1, forklaring: "Nystagmus er rytmiske, ufrivillige øyebevegelser.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-100", eksamen: "Høst 2024", nr: 200, tema: "Vestibulært", poeng: 1,
    tekst: "Hva innebærer galvanisk vestibulær stimulering (GVS)?",
    figur: null,
    alternativer: [
      "Stimulering av vestibulærsystemet ved hjelp av elektrisk strøm",
      "Måling av lydtrykk i cochlea",
      "Stimulering av trommehinnen med lufttrykk",
      "Måling av otoakustiske emisjoner"
    ],
    riktig: 0, forklaring: "GVS stimulerer vestibulærsystemet med svak elektrisk strøm over mastoidene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-101", eksamen: "Høst 2024", nr: 201, tema: "Statistikk", poeng: 1,
    tekst: "Hva er medianen i datasettet 4, 8, 10, 12, 16?",
    figur: null,
    alternativer: [
      "8",
      "10",
      "12",
      "16"
    ],
    riktig: 1, forklaring: "Sortert: 4, 8, 10, 12, 16. Medianen er tallet i midten, altså 10.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-102", eksamen: "Høst 2024", nr: 202, tema: "Statistikk", poeng: 1,
    tekst: "Hva er gjennomsnittet av tallene 2, 4, 6 og 8?",
    figur: null,
    alternativer: [
      "4",
      "5",
      "6",
      "8"
    ],
    riktig: 1, forklaring: "(2 + 4 + 6 + 8) / 4 = 20 / 4 = 5.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-103", eksamen: "Høst 2024", nr: 203, tema: "Statistikk", poeng: 1,
    tekst: "Hva beskriver standardavvik?",
    figur: null,
    alternativer: [
      "Sammenhengen mellom to variabler",
      "Spredningen rundt gjennomsnittet",
      "Antall deltakere",
      "Den høyeste verdien"
    ],
    riktig: 1, forklaring: "Standardavviket viser spredningen rundt gjennomsnittet.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-104", eksamen: "Høst 2024", nr: 204, tema: "Statistikk", poeng: 1,
    tekst: "Hva kjennetegner en normalfordeling?",
    figur: null,
    alternativer: [
      "Den er alltid høyreskjev",
      "Den er symmetrisk rundt gjennomsnittet",
      "Den har alltid to topper",
      "Medianen er alltid null"
    ],
    riktig: 1, forklaring: "Normalfordelingen er symmetrisk rundt gjennomsnittet, og gjennomsnitt, median og typetall er like.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "EA-110", eksamen: "Høst 2024", nr: 210, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hva betyr prevalens?",
    figur: null,
    alternativer: [
      "Antall nye tilfeller i en periode",
      "Andelen som har en bestemt tilstand i en populasjon på et gitt tidspunkt eller i en periode",
      "Risikoen for å dø",
      "Gjennomsnittlig sykdomsvarighet"
    ],
    riktig: 1, forklaring: "Prevalens er andelen som har tilstanden på et gitt tidspunkt eller i en periode. Nye tilfeller er insidens.",
    fasit: "generert", sikkerhet: "høy"
  }
);
