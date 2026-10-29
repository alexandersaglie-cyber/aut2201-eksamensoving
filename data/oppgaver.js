// Oppgaver fra AUT2201 Audiologisk grunnkurs 2 – eksamen høst 2025 (27.11.2025).
//
// Felter per oppgave:
//   id            unik nøkkel
//   eksamen, nr   kilde, f.eks. "Høst 2025", oppgave 41
//   tema          emneområde (brukes til filtrering og "svake tema")
//   poeng         alle oppgaver teller 1 poeng
//   tekst         oppgaveteksten
//   figur         bildefil i mappen figurer/, eller null
//   alternativer  de fire svaralternativene i samme rekkefølge som i PDF-en
//   riktig        hvilket alternativ som er riktig (0 = første, 3 = siste)
//   forklaring    kort løsningsforslag
//   fasit         "generert" (laget av Claude) eller "offisiell"
//   sikkerhet     hvor sikker den genererte fasiten er: "høy", "middels" eller "lav"
//   kandidatsvar  alternativet som var krysset av i eksamensbesvarelsen (0–3)
//
// Ligger som .js (ikke .json) slik at appen virker når index.html åpnes direkte fra disken.

const OPPGAVER = [
  {
    id: "H25-001", eksamen: "Høst 2025", nr: 1, tema: "Folkehelse og epidemiologi", poeng: 1,
    tekst: "Hvor mange prosent av dem som er 80 år eller eldre og bosatt i Norge, bor ikke hjemme men på institusjoner som sykehjem?",
    figur: null,
    alternativer: ["Ca 40 %", "Ca 20 %", "Ca 10 %", "Ca 30 %"],
    riktig: 2, forklaring: "De aller fleste over 80 bor hjemme. Bare rundt 10 % bor på institusjon som sykehjem.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "H25-002", eksamen: "Høst 2025", nr: 2, tema: "Psykoakustikk", poeng: 1,
    tekst: "Tenk deg to rene toner som presenteres til et menneske med normal hørsel. Den første tonen har en frekvens på 1000 Hz og et lydtrykknivå på 40 dB SPL. Den andre tonen har en frekvens på 100 Hz og et lydtrykknivå på 65 dB SPL. Begge rentonene ligger ved samme iso-phonkurve, nemlig 40 phon-kurva. Hvis nivået til begge rentonene økes med 20 dB, hva kan da forventes angående hørestyrken deres?",
    figur: null,
    alternativer: [
      "1000-Hz-tonen vil ha større hørestyrke, siden denne frekvensen ligger i et mer følsomt hørselsområde hvor de absolutte tersklene er lavere",
      "Begge vil ha samme hørestyrke, ettersom de fortsatt vil være en del av samme iso-phonkurve",
      "100-Hz-tonen vil ha større hørestyrke, fordi iso-phonkurvene er nærmere hverandre ved lave frekvenser",
      "Endringer i tonenes hørestyrke kan ikke forutsies teoretisk"
    ],
    riktig: 2, forklaring: "Iso-phonkurvene ligger tettere ved lave frekvenser. Derfor vokser hørestyrken raskere per dB der, og 100-Hz-tonen havner på en høyere phon-kurve enn 1000-Hz-tonen etter samme økning.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-003", eksamen: "Høst 2025", nr: 3, tema: "Forskningsmetode", poeng: 1,
    tekst: "I hvilket avsnitt av en vitenskapelig artikkel finner du som oftest opplysninger om hvilke deltagere studien har inkludert?",
    figur: null,
    alternativer: ["Metode", "Introduksjon", "Diskusjon", "Resultat"],
    riktig: 0, forklaring: "Utvalg, inklusjonskriterier og rekruttering beskrives i metodedelen (IMRaD).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-004", eksamen: "Høst 2025", nr: 4, tema: "Statistikk", poeng: 1,
    tekst: "En type 1-feil (alfafeil) oppstår når... :",
    figur: null,
    alternativer: [
      "... en forsker konkluderer med at funnene er signifikante når forskjellen eller korrelasjonen faktisk var signifikant",
      "... en forsker konkluderer med at funnene er signifikante når forskjellen eller korrelasjonen faktisk ikke var signifikant",
      "... en forsker konkluderer med at funnene ikke er signifikante når forskjellen eller korrelasjonen faktisk ikke var signifikant",
      "... en forsker konkluderer med at funnene ikke er signifikante når forskjellen eller korrelasjonen faktisk var signifikant"
    ],
    riktig: 1, forklaring: "Type 1-feil = falsk positiv: man forkaster en sann nullhypotese. Det motsatte (overse en reell effekt) er type 2-feil.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-005", eksamen: "Høst 2025", nr: 5, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hvilket av følgende utsagn om lydlokalisering er RIKTIG?",
    figur: null,
    alternativer: [
      "Den laterale delen av superior oliven (lateral superior olive, LSO) behandler interaurale nivåforskjeller (ILDs) for å lokalisere lyd",
      "Vi bruker interaurale tidsforskjeller (ITDs) over hele frekvensområdet for å lokalisere lyd i vertikalplanet",
      "Lokalisering av elevasjon til en lydkilde (dvs. i vertikalplanet) er en binaural oppgave",
      "Den mediale delen av superior oliven (medial superior olive, MSO) behandler interaurale nivåforskjeller (ILDs) for å lokalisere lyd"
    ],
    riktig: 0, forklaring: "LSO behandler ILD, MSO behandler ITD. Elevasjon bestemmes hovedsakelig monauralt, ut fra spektrale signaler fra pinna.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-006", eksamen: "Høst 2025", nr: 6, tema: "Statistikk", poeng: 1,
    tekst: "Du har testet en gruppe høreapparatbrukere for taleoppfattelse i støy, med og uten høreapparater. Etter datainnsamlingen viser det seg at dine data er normalfordelte. Hvilke av disse statistiske testene ville være best egnet til å sammenligne taleoppfattelsen i de to lyttesituasjonene?",
    figur: null,
    alternativer: [
      "Uparet t-test (independent samples t test)",
      "Paret-fortegnstest (paired- sample sign test)",
      "Kji kvadrat (χ², chi square)",
      "Paret t-test (paired sample t test)"
    ],
    riktig: 3, forklaring: "Samme personer måles to ganger (avhengige målinger) og dataene er normalfordelte, altså parametrisk test for parede data: paret t-test.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-007", eksamen: "Høst 2025", nr: 7, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva betyr «metakognitiv»?",
    figur: null,
    alternativer: [
      "Abstrakte tankeprosesser",
      "Evnen til å sette hendelser sammen til et bredere perspektiv",
      "Bevissthet om egen tenkning",
      "Bevissthet om egne følelser"
    ],
    riktig: 2, forklaring: "Metakognisjon = «tenkning om tenkning», altså bevissthet om og regulering av egne tankeprosesser.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-008", eksamen: "Høst 2025", nr: 8, tema: "Statistikk", poeng: 1,
    tekst: "Bildet viser et eksempel på et box plot, og visualiseringen er ikke relatert til noen audiologiske data. Det er markert en vertikal strek ved 20 mpg. Hva forteller denne vertikale streken oss?",
    figur: "figurer/oppg008.png",
    alternativer: ["At dataene er normalfordelte", "Gjennomsnittet", "Medianverdien", "At dataene er negativt skjevfordelte"],
    riktig: 2, forklaring: "Streken inne i boksen i et box plot er medianen. Boksen viser 1. til 3. kvartil.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-009", eksamen: "Høst 2025", nr: 9, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Anta at de normative hørselsterskeldataene for 100, 500 og 2000 Hz er som følger:\n100 Hz: 20 dB SPL\n500 Hz: 5 dB SPL\n2000 Hz: 0 dB SPL\n\nPasient 1 har følgende høreterskler:\n100 Hz: 35 dB SPL\n500 Hz: 0 dB SPL\n2000 Hz: 10 dB SPL\n\nPasient 2 har følgende høreterskler:\n100 Hz: 25 dB SPL\n500 Hz: 30 dB SPL\n2000 Hz: 5 dB SPL\n\nHvilken pasient har et hørselstap med minst en høreterskel større enn 20 dB HL?",
    figur: null,
    alternativer: ["Pasient 1", "Begge pasientene", "Pasient 2", "Ingen av pasientene"],
    riktig: 2, forklaring: "dB HL = målt terskel minus normterskel. Pasient 1: 15, −5 og 10 dB HL. Pasient 2: 5, 25 og 5 dB HL. Bare pasient 2 har en terskel over 20 dB HL (500 Hz).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-010", eksamen: "Høst 2025", nr: 10, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilke av de følgende utsagnene om modning av det auditive systemet er IKKE riktig?",
    figur: null,
    alternativer: [
      "Auditive cortex kan være myelinmoden ved 10-års alder",
      "Hjernestammen er moden ved fødsel",
      "Hørselsnerven er nesten moden ved fødsel",
      "Corpus callosum er en av de seneste delene å modne"
    ],
    riktig: 1, forklaring: "Hørselsnerven er nesten moden ved fødsel, men hjernestammen modnes videre det første leveåret til ca. 18 måneder (ABR blir voksenlik). Auditiv cortex modnes til rundt 10–12 år, og corpus callosum er blant de siste delene som modnes.",
    fasit: "generert", sikkerhet: "lav", kandidatsvar: 0
  },
  {
    id: "H25-011", eksamen: "Høst 2025", nr: 11, tema: "Vestibulært", poeng: 1,
    tekst: "Hvilket av de følgende utsagnene om Ménières sykdom er RIKTIG?",
    figur: null,
    alternativer: [
      "Ménières sykdom er i tidlig fase preget av konstant hørselstap, konstant tinnitus og konstant svimmelhet",
      "Ménières sykdom forårsakes av en betennelse i den vestibulære nerven",
      "Det anatomiske korrelatet til Ménières sykdom er endolymfatisk hydrops",
      "Ménières sykdom begynner vanligvis flere dager etter støyeksponering"
    ],
    riktig: 2, forklaring: "Ménière er knyttet til endolymfatisk hydrops. Tidlig er symptomene anfallsvise (fluktuerende), ikke konstante. Betennelse i vestibularisnerven er nevritt.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-012", eksamen: "Høst 2025", nr: 12, tema: "Folkehelse og epidemiologi", poeng: 1,
    tekst: "Med utgangspunkt i figuren over: Hvilket av utsagnene under er RIKTIG?",
    figur: "figurer/oppg012.jpg",
    alternativer: [
      "I aldersgruppen ≥ 65 år hadde færre personer nedsatt hørsel i 2017-2019 enn i 1996-1998",
      "Det er lavere forekomst av hørselstap for menn i aldersgruppen 75 år enn i aldersgruppen 65 år",
      "Flere kvinner enn menn i aldersgruppen ≥ 65 år har nedsatt hørsel",
      "Forekomst av hørselstap er likt fordelt mellom kvinner og menn i aldersgruppen 85 år"
    ],
    riktig: 0, forklaring: "For alle aldersgrupper fra 65 år er de oransje søylene (HUNT4) lavere enn de lilla (HUNT2) hos begge kjønn. Menn har høyere forekomst enn kvinner.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-013", eksamen: "Høst 2025", nr: 13, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hvilket av disse forskningsdesignene er vanlig å bruke i kvalitativ metode?",
    figur: null,
    alternativer: ["Eksperiment", "Dokumentanalyse", "Spørreskjema", "Tverrsnittstudier"],
    riktig: 1, forklaring: "Dokumentanalyse er en kvalitativ tilnærming. Eksperiment, spørreskjema og tverrsnittstudier er typisk kvantitative.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-014", eksamen: "Høst 2025", nr: 14, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilken av de følgende er IKKE et motivasjonsverktøy innen audiologisk rehabilitering?",
    figur: null,
    alternativer: ["\"The Square\"", "\"The Line\"", "\"The Box\"", "\"The Circle\""],
    riktig: 0, forklaring: "Ida Institute sine motivasjonsverktøy er The Line, The Box og The Circle. «The Square» finnes ikke blant dem.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 0
  },
  {
    id: "H25-015", eksamen: "Høst 2025", nr: 15, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "De efferente hørselsbanene bidrar til...:",
    figur: null,
    alternativer: [
      "Å beskytte øret mot høye lyder",
      "Å forsterke innkommende lydsignaler",
      "Å forbedre oppfatningen av temporale aspekter i lydsignaler",
      "Å overføre hørselssignaler til hjernen"
    ],
    riktig: 0, forklaring: "Det efferente (olivocochleære) systemet demper aktiviteten i de ytre hårcellene. Det gir beskyttelse mot høye lyder og bedre signal i støy. Overføring til hjernen er afferent.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 1
  },
  {
    id: "H25-016", eksamen: "Høst 2025", nr: 16, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hvilket av følgende utsagn om hårcellemotilitet er RIKTIG?",
    figur: null,
    alternativer: [
      "Bare de indre vestibulære hårcellene – og ikke de ytre – viser elektromotilitet",
      "Reseptorpotensialet til de ytre hårcellene forårsaker en lengdeendring i de ytre hårcellene forårsaket av Prestin",
      "Aktiviteten i de efferente fibrene i hørselsnerven som kommer i kontakt med de ytre hårcellene forårsaker hårcellemotilitet",
      "Spontane otoakustiske emisjoner indikerer vanligvis tonotopiske steder hvor vi finner døde regioner i cochlea"
    ],
    riktig: 1, forklaring: "Elektromotilitet i de ytre hårcellene drives av motorproteinet prestin, som reagerer på reseptorpotensialet. Efferente fibre modulerer motiliteten, men forårsaker den ikke.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-017", eksamen: "Høst 2025", nr: 17, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilken av disse ytringene er et eksempel på følelsesfokusert mestring?",
    figur: null,
    alternativer: [
      "\"Hvis jeg løser problemet, vil jeg føle meg bedre.\"",
      "\"Jeg må finne ut hvem som kan hjelpe meg med dette.\"",
      "\"Jeg kan ikke gi meg nå, jeg prøver en gang til.\"",
      "\"Jeg må bare forsøke å se humoren i det hele.\""
    ],
    riktig: 3, forklaring: "Følelsesfokusert mestring endrer hvordan man har det med situasjonen (f.eks. humor), mens problemfokusert mestring prøver å endre selve situasjonen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-018", eksamen: "Høst 2025", nr: 18, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hvilken av de følgende alternativene henger sammen med den eksekutive funksjonen (top-down) angående hørsel?",
    figur: null,
    alternativer: ["Evne til å høre lyd", "Evne til å tolke lyd", "Evne til å skille rentoner", "Evne til å gjengi talesignaler"],
    riktig: 1, forklaring: "Top-down-prosessering handler om å tolke og gi mening til lyd ved hjelp av kognisjon og kontekst. Å høre og skille lyder er bottom-up.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 1
  },
  {
    id: "H25-019", eksamen: "Høst 2025", nr: 19, tema: "Tale og akustikk", poeng: 1,
    tekst: "Hva er det som gjør at vi auditivt gjenkjenner hvilken vokal som blir uttalt?",
    figur: null,
    alternativer: [
      "Talekanalens dimensjoner",
      "Avstanden mellom deltonene i den sammensatte svingningen",
      "Talerens grunntone",
      "Frekvensområdene hvor deltonene har ekstra kraftig amplitude"
    ],
    riktig: 3, forklaring: "Vokaler kjennes igjen på formantene, altså frekvensområder med forsterkede deltoner (særlig F1 og F2).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-020", eksamen: "Høst 2025", nr: 20, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilke av de følgende utsagnene om lateral superior olive (LSO) er IKKE riktig?",
    figur: null,
    alternativer: [
      "Nevroner fra lateral superior olive (LSO) synapser ved indre hårceller i cochlea",
      "Nevroner fra lateral superior olive (LSO) synapser ved ytre hårceller i cochlea",
      "Nevroner fra lateral superior olive (LSO) er umyeliniserte",
      "Nevroner fra lateral superior olive (LSO) går hovedsakelig til samme side, men få nevroner krysser over til motsatt side"
    ],
    riktig: 1, forklaring: "Laterale olivocochleære (LOC) fibre er umyeliniserte, går mest ipsilateralt og ender ved de afferente fibrene under indre hårceller. Det er de mediale (MOC) fibrene fra MSO-området som går til ytre hårceller.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-021", eksamen: "Høst 2025", nr: 21, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Koronalplanet deler kroppen i hvilke to deler?",
    figur: null,
    alternativer: ["Forside og bakside", "Anterior og inferior", "Høyre og venstre", "Lateral og medial"],
    riktig: 0, forklaring: "Koronalplanet (frontalplanet) deler kroppen i en fremre og en bakre del. Sagittalplanet deler i høyre og venstre.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-022", eksamen: "Høst 2025", nr: 22, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Innenfor kognisjon: Hva er en vanlig kognitiv konsekvens av nedsatt hørsel blant eldre mennesker?",
    figur: null,
    alternativer: [
      "Økt risiko for nedsatt motorikk",
      "Økt risiko for demens",
      "Økt risiko for isolasjon",
      "Økt risiko for nedsatt funksjon i det perifere hørselssystem"
    ],
    riktig: 1, forklaring: "Hørselstap er en kjent risikofaktor for demens og kognitiv svikt. Isolasjon er en sosial konsekvens, ikke en kognitiv.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-023", eksamen: "Høst 2025", nr: 23, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilken strategi er et eksempel på en umoden og ugunstig mestringsstrategi?",
    figur: null,
    alternativer: ["Avvente", "Bruk av humor", "Refortolke", "Projeksjon"],
    riktig: 3, forklaring: "Projeksjon, å tillegge andre egne uakseptable følelser, regnes som en umoden forsvarsmekanisme. Humor og refortolkning er modne strategier.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 3
  },
  {
    id: "H25-024", eksamen: "Høst 2025", nr: 24, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilke av alternativene er IKKE en psykisk helserettighet, ifølge psykiateren Arne Holte?",
    figur: null,
    alternativer: ["Trygghet og tilhørighet", "Frihet og verdighet", "Deltakelse og fellesskap", "Mening og mestring"],
    riktig: 1, forklaring: "Holtes psykiske helserettigheter knyttes til trygghet, tilhørighet, deltakelse, fellesskap, mening og mestring. «Frihet og verdighet» er ikke blant dem.",
    fasit: "generert", sikkerhet: "lav", kandidatsvar: 1
  },
  {
    id: "H25-025", eksamen: "Høst 2025", nr: 25, tema: "Høreapparat og forsterkning", poeng: 1,
    tekst: "Du har en pasient med stort hørselstap og bekreftede cochleære døde regioner fra 4 kHz og oppover. Hvordan bør du justere forsterkningen i dette området?",
    figur: null,
    alternativer: [
      "Beholde standard NAL-NL2-target, og ikke benytte proprietære tilpasningsregler",
      "Øke MPO for å kompensere for redusert hørestyrke",
      "Redusere forsterkningen i høyfrekvensområdet",
      "Øke forsterkningen for å kompensere for tapet"
    ],
    riktig: 2, forklaring: "Forsterkning langt inn i en død region gir lite nytte og kan forverre taleforståelse og lydkvalitet. Anbefalingen er å begrense forsterkningen over ca. 1,7 × grensefrekvensen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-026", eksamen: "Høst 2025", nr: 26, tema: "Statistikk", poeng: 1,
    tekst: "Figuren viser spredningsplottet for «Test 1» og «Test 2». Spredningsplottet viser... :",
    figur: "figurer/oppg026.jpg",
    alternativer: ["positiv korrelasjon", "sterk negativ korrelasjon", "sterk positiv korrelasjon", "ingen korrelasjon"],
    riktig: 1, forklaring: "Punktene faller fra venstre mot høyre og r = −0,93. Det er en sterk negativ korrelasjon.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-027", eksamen: "Høst 2025", nr: 27, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hvilken av de følgende psykoakustiske målingene påvirkes vanligvis IKKE hos pasienter med nedsatt tidsprosessering?",
    figur: null,
    alternativer: [
      "Lydlokalisering ved bruk av interaurale nivåforskjeller (ILDs)",
      "Lydlokalisering ved bruk av interaurale tidsforskjeller (ITDs)",
      "Taleoppfattelse i støy",
      "Gap detection (gaps in noise)"
    ],
    riktig: 0, forklaring: "ILD bygger på nivåforskjeller, ikke på presis timing. ITD, gap detection og tale i støy krever god tidsoppløsning.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-028", eksamen: "Høst 2025", nr: 28, tema: "Psykoakustikk", poeng: 1,
    tekst: "Angående frekvensprosessering av lyd i det perifere hørselssystemet. Hvilken påstand er FEIL?",
    figur: null,
    alternativer: [
      "Normal frekvensselektivitet er avgjørende for å kunne avkode komplekse lydsignaler (f.eks. tale i støy), da det reduserer maskering mellom forskjellige frekvensbånd",
      "Frekvensselektivitet oppstår på grunn av den tonotopiske representasjonen av lyd i basilarmembranen, noe som betyr at den vibrerer maksimalt på bestemte steder for forskjellige lydfrekvenser",
      "Frekvensselektiviteten som utføres av øret er like god som en Fourier-analyse av lydsignalet",
      "Taleforståelsen blir dårligere når de auditive filtrene blir bredere enn normalt"
    ],
    riktig: 2, forklaring: "Øret fungerer som en filterbank med begrenset båndbredde (auditive filtre/ERB) og er dermed langt grovere enn en Fourier-analyse.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-029", eksamen: "Høst 2025", nr: 29, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Type 1-fibre utgjør ca 90 – 95 % av hørselsnerven. Hvilket av de følgende alternativene bærer disse fibrene signaler fra?",
    figur: null,
    alternativer: ["Indre hårceller", "Cochleariskjernen", "Basilarmembranen", "Ytre hårceller"],
    riktig: 0, forklaring: "Type I-fibrene er myeliniserte og innerverer de indre hårcellene. Type II-fibrene (5–10 %) går til de ytre hårcellene.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-030", eksamen: "Høst 2025", nr: 30, tema: "Statistikk", poeng: 1,
    tekst: "PTA uttrykt i dB HL vil gi oss dataverdier som er ...",
    figur: null,
    alternativer: ["Intervallskalerte", "Ratioskalerte", "Nominalskalerte", "Ordinalskalerte"],
    riktig: 0, forklaring: "dB HL har like intervaller, men 0 dB HL er ikke et absolutt nullpunkt (det finnes negative verdier). Derfor er skalaen intervallskala.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 0
  },
  {
    id: "H25-031", eksamen: "Høst 2025", nr: 31, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hvilken kombinasjon av datainnsamlingsmetoder under har sin hovedtyngde innenfor kvalitativ forskning?",
    figur: null,
    alternativer: ["Observasjon og spørreskjema", "Eksperiment og tverrsnittstudier", "Spørreskjema og intervju", "Intervju og observasjon"],
    riktig: 3, forklaring: "Intervju og observasjon er de klassiske kvalitative metodene. Spørreskjema er hovedsakelig kvantitativt.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-032", eksamen: "Høst 2025", nr: 32, tema: "Statistikk", poeng: 1,
    tekst: "Inndeling av ulike hørselstaps størrelser (mildt, moderat osv) vil gi oss dataverdier som er ...",
    figur: null,
    alternativer: ["Ordinalskalerte", "Nominalskalerte", "Intervallskalerte", "Ratioskalerte"],
    riktig: 0, forklaring: "Kategoriene har en naturlig rekkefølge (mildt < moderat < alvorlig), men avstandene mellom dem er ikke like. Det gir ordinalskala.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-033", eksamen: "Høst 2025", nr: 33, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Endogen redundans («intrinsic redundancy») refererer til ... :",
    figur: null,
    alternativer: [
      "... degradert talesignal",
      "... overføring av signaler mellom høyre og venstre hjernehalvdel",
      "... den komplekse strukturelle og funksjonelle organiseringen av det sentrale auditive systemet, som fører til seriell og parallell behandling av informasjon",
      "... overlappende akustiske og språklige signaler"
    ],
    riktig: 2, forklaring: "Intrinsisk redundans ligger i nervesystemet selv (mange parallelle baner). Ekstrinsisk redundans ligger i talesignalet (overlappende akustiske og språklige signaler).",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "H25-034", eksamen: "Høst 2025", nr: 34, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilket av de følgende strukturene i thalamus er en obligatorisk koblingsstasjon for den afferente auditive informasjonen til cortex?",
    figur: null,
    alternativer: ["Den laterale lemnisken", "Corpus callosum", "Inferior colliculus", "Medial geniculate body"],
    riktig: 3, forklaring: "Corpus geniculatum mediale (MGB) i thalamus er siste obligatoriske omkobling før auditiv cortex. Inferior colliculus ligger i midthjernen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-035", eksamen: "Høst 2025", nr: 35, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hvilken av følgende beskrivelser forklarer best hvorfor threshold-equalizing noise (TEN) gjør det mulig å identifisere døde regioner i cochlea?",
    figur: null,
    alternativer: [
      "TEN skaper et jevnt maskeringsnivå der et reelt tap i sensitivitet på en bestemt frekvens vil fremstå som et unormalt forhøyet terskelnivå",
      "TEN fungerer som en kontrollstøy for å skille mellom mekaniske og nevrale årsaker til hørseltap",
      "TEN gir like hørselsterskler på tvers av frekvenser hos personer med normalt hørselssystem, noe som gjør avvik tydelige ved døde regioner",
      "TEN reduserer forskjellen i maskeringseffektivitet mellom frekvenser, slik at pasientens absolutte terskler kan sammenlignes direkte med maskerte terskler"
    ],
    riktig: 2, forklaring: "TEN er spektralt formet slik at den maskerte terskelen blir lik på alle frekvenser (≈ TEN-nivået) hos normalthørende og ved hørselstap uten døde regioner. En maskert terskel som avviker klart fra dette, avslører en død region.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 3
  },
  {
    id: "H25-036", eksamen: "Høst 2025", nr: 36, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hvilket av følgende alternativ er en nøkkelegenskap ved primær aldring?",
    figur: null,
    alternativer: [
      "De negative effektene som sosiale og miljømessige faktorer kan ha på eldres helse",
      "De negative helseeffektene som usunne livsstilsvalg kan ha hos de eldre",
      "Den økte sannsynligheten for redusert helse og funksjon som følge av akutte eller kroniske sykdommer",
      "Den gradvise prosessen med kroppslige endringer som skjer med økende alder"
    ],
    riktig: 3, forklaring: "Primær aldring er de normale og uunngåelige kroppslige endringene. Sekundær aldring skyldes sykdom, livsstil og miljø.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-037", eksamen: "Høst 2025", nr: 37, tema: "Vestibulært", poeng: 1,
    tekst: "Hvilket av følgende utsagn er IKKE riktig:",
    figur: null,
    alternativer: [
      "cVEMPs kan brukes til å vurdere funksjonen til sacculus",
      "oVEMPs kan brukes til å vurdere funksjonen til utriculus",
      "cVEMPs kan brukes til å vurdere funksjonen til utriculus",
      "Døve pasienter kan ha intakte cVEMPs og oVEMPs"
    ],
    riktig: 2, forklaring: "cVEMP måler sacculus (og nedre vestibularisnerve), mens oVEMP måler utriculus. VEMP er vestibulære responser, så døve kan ha normale VEMP.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-038", eksamen: "Høst 2025", nr: 38, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "«Ribbon synapse» (bånd synapse) - Hvilket utsagn er RIKTIG?",
    figur: null,
    alternativer: [
      "Ribbon synapser frigjør glutamat ved lave lydtrykknivåer under høreterskelen",
      "Ribbon synapser frigjør acetylcholin ved høye lydtrykknivåer",
      "Visse mutasjoner i Otoferlin kan føre til midlertidig funksjonstap av ribbon synapser ved kroppstemperaturøkning",
      "Ribbon synapser er en spesiell type synapser i ytre hårceller"
    ],
    riktig: 2, forklaring: "Ribbon-synapsene i indre hårceller frigjør glutamat. Enkelte otoferlinmutasjoner gir temperaturavhengig auditiv nevropati, der hørselen svikter ved feber.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-039", eksamen: "Høst 2025", nr: 39, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "I hvilken av følgende prosesser spiller auditiv plastisitet en kritisk rolle?",
    figur: null,
    alternativer: ["Måling av kompleansen i trommehinnen", "Måling av akustisk refleks", "Språktilegnelse", "Lydbølgeforplantning"],
    riktig: 2, forklaring: "Språktilegnelse avhenger av auditiv stimulering i sensitive perioder, mens hjernen er plastisk. De andre er mekaniske eller refleksbaserte prosesser.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-040", eksamen: "Høst 2025", nr: 40, tema: "Statistikk", poeng: 1,
    tekst: "Hvilken påstand er FEIL om standardavvik?",
    figur: null,
    alternativer: [
      "Det viser oss hvor stor spredning det er i fra gjennomsnittet",
      "Det er et mål for spredning av verdier i et datasett",
      "Pluss/minus ett standardavvik tilsvarer 68% av alle forekomster i datasettet",
      "Viser oss om det er korrelasjon mellom to eller flere variabler"
    ],
    riktig: 3, forklaring: "Standardavvik beskriver spredningen i én variabel. Sammenheng mellom variabler måles med korrelasjon.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-041", eksamen: "Høst 2025", nr: 41, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hvorfor vil et tonesignal som faller innenfor en død region i cochlea få en markant forhøyet maskert terskel i TEN-testen?",
    figur: null,
    alternativer: [
      "Fordi frekvensspesifikke forsterkningsmekanismer i cochlea øker støyfølsomheten lokalt",
      "Fordi maskeringsstøyen har høyere spektral tetthet i døde regioner på basilarmembranen enn i regioner med normaltfungerende indre hårceller",
      "Fordi lydens energi blir absorbert av ikke-fungerende indre hårceller og dermed ikke når basilarmembranen",
      "Fordi signalet må oppfattes via overlevende indre hårceller i et annet område, der vibrasjonsnivået fra tonen er svakere og lettere maskeres av støyen"
    ],
    riktig: 3, forklaring: "I en død region oppdages tonen ved «off-frequency listening» via friske hårceller lenger unna. Der er tonen svakere enn støyen, så det kreves mye høyere tonenivå.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-042", eksamen: "Høst 2025", nr: 42, tema: "Vestibulært", poeng: 1,
    tekst: "Hvilken av disse reflekser er IKKE en vestibulær refleks?",
    figur: null,
    alternativer: ["Vestibulo-stapedius refleks", "Vestibulo-okulær refleks", "Vestibulo-spinal refleks", "Vestibulo-kollikal refleks"],
    riktig: 0, forklaring: "VOR (øyne), VSR (kropp/ben) og VCR (nakke, grunnlaget for cVEMP) er vestibulære reflekser. Stapediusrefleksen er en akustisk refleks, og en «vestibulo-stapedius refleks» finnes ikke.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "H25-043", eksamen: "Høst 2025", nr: 43, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "I hvilken del av hørselsbanene er nevroplastisitet mest fremtredende?",
    figur: null,
    alternativer: ["Auditive cortex", "Cochlea", "Hørselsnerven", "Superior olivary complex (SOC)"],
    riktig: 0, forklaring: "Plastisiteten er størst i de høyere nivåene, særlig i auditiv cortex, som reorganiseres etter erfaring og sansetap.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-044", eksamen: "Høst 2025", nr: 44, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "BILD (Binaural Intelligibility Level Difference) er en måling med talestimuli. Den har slektskap med (B)MLD ((Binaural) Masking Level Difference), som bruker rene toner som stimuli. Hvilken av utsagnene er RIKTIG angående disse målingene?",
    figur: null,
    alternativer: [
      "BMLD er større ved SπN0 enn ved S0Nπ",
      "En normal BILD er ca 15 dB",
      "BILD avhenger av testfrekvensen",
      "BMLD er generelt mindre enn BILD"
    ],
    riktig: 0, forklaring: "SπN0 gir størst MLD (ca. 15 dB ved lave frekvenser), litt mer enn S0Nπ. BILD er mindre (ca. 3–6 dB), og siden den måles med tale, avhenger den ikke av én testfrekvens.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 3
  },
  {
    id: "H25-045", eksamen: "Høst 2025", nr: 45, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilket alternativ beskriver IKKE stigmateorien av Erving Goffman?",
    figur: null,
    alternativer: [
      "Stigma oppstår når et individ eller gruppe antas å ha en nedvurdert egenskap",
      "Stigma oppleves av et individ eller gruppe når man får en fordel fremfor andre som føles urettferdig",
      "Den stigmatiserende prosessen oppstår på grunn av bevisste eller ubevisste reaksjoner fra omgivelsene",
      "Den stigmatiserende prosessen kan føre til et misforhold mellom personens identitet og den identiteten andre tillegger vedkommende"
    ],
    riktig: 1, forklaring: "Goffman beskriver stigma som en nedvurdert egenskap som gir et misforhold mellom faktisk og tilskrevet identitet. Å få en urettferdig fordel er ikke stigma.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-046", eksamen: "Høst 2025", nr: 46, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Tenk deg en person med cochleære døde regioner over 2000 Hz. Hvilket av utsagnene er RIKTIG:",
    figur: null,
    alternativer: [
      "Dersom en rentone blir presentert i et frekvensområde uten døde regioner, vil oppfattelsen av stimulus skje som følge av «off-frequency listening»",
      "For å bedre taleoppfattelsen hos denne personen, vil det være hensiktsmessig at høreapparatet kun gir forsterkning ved lyse frekvenser",
      "Vi bruker TEN-testen for å identifisere funksjonen til de ytre og indre hårcellene",
      "En person med store døde regioner vil sannsynligvis klare seg bedre med et cochleaimplantat enn med et høreapparat"
    ],
    riktig: 3, forklaring: "Et CI stimulerer nervefibrene direkte og omgår de manglende indre hårcellene. Off-frequency listening skjer i døde regioner, ikke utenfor dem, og TEN-testen sier noe om indre hårceller/nevroner, ikke ytre.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 3
  },
  {
    id: "H25-047", eksamen: "Høst 2025", nr: 47, tema: "Vestibulært", poeng: 1,
    tekst: "Du observerer en spontan nystagmus hos en av vennene dine. Hva er den mest sannsynlige forklaringen på dette?",
    figur: null,
    alternativer: [
      "Dette indikerer en patologi",
      "Dette indikerer en normal vestibulær refleks",
      "Dette indikerer en øyebevegelse etter en translasjonsbevegelse",
      "Dette indikerer en øyebevegelse etter en rotasjonsbevegelse"
    ],
    riktig: 0, forklaring: "Spontan nystagmus (uten provokasjon) tyder på asymmetri i det vestibulære systemet, altså patologi.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-048", eksamen: "Høst 2025", nr: 48, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilken betydning kan stigma ha for audiologisk rehabilitering?",
    figur: null,
    alternativer: [
      "Opplevd stigmatisering fra omgivelsene har ikke betydning for om man søker audiologisk rehabilitering, men egne stigmatiserende holdninger har stor betydning",
      "Egne stigmatiserende holdninger har ikke betydning for om man søker audiologisk rehabilitering, mens opplevd stigmatisering fra omgivelsene har stor betydning",
      "Opplevelse av stigma har betydning for om man erkjenner og aksepterer hørselstapet, hvilket høreapparat man velger og hvor høreapparatet blir brukt",
      "Opplevelse av stigma har betydning for motivasjonen til å ta i bruk hjelpemidler. Jo mer opplevd stigma, jo mer motivert er den hørselshemmede for å ta i bruk høreapparater"
    ],
    riktig: 2, forklaring: "Stigma påvirker erkjennelse og aksept av hørselstapet, valg av apparat og når det brukes. Både egne holdninger og omgivelsenes reaksjoner spiller inn, og mer stigma gir lavere motivasjon.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-049", eksamen: "Høst 2025", nr: 49, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilken gruppe hørselshemmede opplever i følge forskning mer negative konsekvenser, slitasje og fatigue i arbeidslivet?",
    figur: null,
    alternativer: [
      "Hørselshemmede som har store hørseltap",
      "Hørselshemmede som får tilrettelegging fra NAV",
      "Hørselshemmede som har milde til moderate hørselstap",
      "Hørselshemmede som er åpen om hørselsnedsettelsen til arbeidsgiver og kollega"
    ],
    riktig: 2, forklaring: "De med milde til moderate tap «faller mellom» to grupper. De får sjeldnere tilrettelegging og skjuler oftere tapet, og det gir mer lyttebelastning og slitasje.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "H25-050", eksamen: "Høst 2025", nr: 50, tema: "Folkehelse og epidemiologi", poeng: 1,
    tekst: "Hvordan skiller ICF mellom \"aktiviteter\" og \"deltakelse\"?",
    figur: null,
    alternativer: [
      "Aktiviteter og deltakelse er synonyme begreper i ICF",
      "Aktiviteter refererer til sosiale roller, mens deltakelse handler om fysiske ferdigheter",
      "Aktiviteter beskriver individets utførelse av oppgaver, mens deltakelse handler om involvering i livssituasjoner",
      "Aktiviteter er alltid observerbare, mens deltakelse er subjektivt og ikke målbart"
    ],
    riktig: 2, forklaring: "I ICF er aktivitet individets utførelse av en oppgave eller handling, mens deltakelse er involvering i livssituasjoner.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-051", eksamen: "Høst 2025", nr: 51, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hvilket utsagn angående utvalget av forskningsdeltakere i kvalitative studier er RIKTIG? :",
    figur: null,
    alternativer: [
      "Det er et mål at en får så få personer som mulig i kvalitative utvalg",
      "Det er et mål at en får så store utvalg som mulig for å sikre generaliserbare resultat",
      "Utvalget blir tilfeldig trukket ut basert på randomisering",
      "Utvalget blir oftest strategisk trukket ut, basert på hva problemstillingen søker kunnskap om"
    ],
    riktig: 3, forklaring: "Kvalitative studier bruker strategiske (formålstjenlige) utvalg av personer som kan belyse problemstillingen. Det er ikke tilfeldige eller store utvalg.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-052", eksamen: "Høst 2025", nr: 52, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hvilket av følgende utsagn om otoakustiske emisjoner (OAE) er RIKTIG?",
    figur: null,
    alternativer: [
      "Pasienter med otosklerose har normale distorsjonsprodukt otoakustiske emisjoner (DPOAE)",
      "Støyskader på cochlea kan resultere i lavere DPOAE-amplituder enn det som ansees som normalt",
      "Transiente fremkalte otoakustiske emisjoner (TEOAE) er best egnet til å vurdere hårcellefunksjoner ved basen i cochlea",
      "TEOAE, men ikke DPOAE, kan måles hos nyfødte barn"
    ],
    riktig: 1, forklaring: "Støy skader de ytre hårcellene, og DPOAE-amplituden synker. Ved otosklerose dempes OAE av mellomøret. DPOAE er bedre enn TEOAE for basen (høye frekvenser), og begge kan måles hos nyfødte.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-053", eksamen: "Høst 2025", nr: 53, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Opplevelsen av skadelig stress påvirkes av en rekke faktorer. Hva bidrar til at opplevelsen av stress REDUSERES?",
    figur: null,
    alternativer: [
      "Emosjonsregulering og fokusert mestring",
      "Forutsigbarhet, sosial støtte og opplevd kontroll",
      "Bruk av tekniske hjelpemidler, fravær av stigma og bruk av rådgivning",
      "Grad av produktivitet, prestasjon og evne til konsentrasjon"
    ],
    riktig: 1, forklaring: "Forutsigbarhet, sosial støtte og opplevd kontroll er de klassiske faktorene som demper stressopplevelsen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-054", eksamen: "Høst 2025", nr: 54, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Du er uforsiktig, og hiver litt søppel i Selbusjøen. En nøkk som bor i Selbusjøen kaster en forbannelse på deg på grunn av dette, og hodet ditt krymper med ca. 50%. Hvilken av de følgende påstander er RIKTIG?",
    figur: null,
    alternativer: [
      "Lydlokalisering avhenger av størrelsen og form på pinnae (øremuslingen), ikke størrelsen på hodet",
      "Hvis du ber en (uerfaren) nisse om å fjerne forbannelsen og hodet ditt i stedet blir 50% større enn normalt, opplever du en forbedring i ILD-basert lydlokalisering ved lave frekvenser",
      "Du opplever en forbedring i lydlokalisering basert på ILD ved lave frekvenser",
      "Du opplever en forbedring i lydlokalisering basert på ITD"
    ],
    riktig: 1, forklaring: "Et større hode gir hodeskygge også for lengre bølgelengder, slik at ILD fungerer ned til lavere frekvenser. Et mindre hode gir kortere ITD og dårligere ILD ved lave frekvenser.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-055", eksamen: "Høst 2025", nr: 55, tema: "Høreapparat og forsterkning", poeng: 1,
    tekst: "Hvorfor kan målforsterkning i høyfrekvensområdet ligge under pasientens høreterskler i NAL-NL2 og DSL 5.0?",
    figur: null,
    alternativer: [
      "Fordi NAL-NL2 og DSL 5.0 beregner forsterkning basert på lavfrekvent taleenergi",
      "Fordi LTASS viser hele spekteret av forsterket tale",
      "For å kompensere for cochleære døde regioner og sikre akseptabel lydkvalitet",
      "Fordi redusert forsterkning i høyfrekvensene gir bedre taleforståelse enn full forsterkning"
    ],
    riktig: 3, forklaring: "Ved store høyfrekvente tap gir full hørbarhet lite ekstra taleforståelse (redusert «effektiv hørbarhet»). Mindre forsterkning gir like god eller bedre forståelse med akseptabel hørestyrke. NAL-NL2 tar ikke spesifikt hensyn til døde regioner.",
    fasit: "generert", sikkerhet: "lav", kandidatsvar: 3
  },
  {
    id: "H25-056", eksamen: "Høst 2025", nr: 56, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Et rammeverk innenfor folkehelse er ABC-modellen: \"ABC for bedre mental helse\". Denne også kan brukes for å bevisstgjøre eldre til hvordan de selv kan ta tak for å forebygge psykiske problemer, og for å øke deltakelse og livskvalitet. ABC er et akronym for tre begreper. Hva står C'en i ABC for?",
    figur: null,
    alternativer: [
      "Communicate - Det er viktig at en er åpen med sine nærmeste om hvordan en har det",
      "Commit - Det er viktig at en gjør noe som oppleves meningsfullt, gjerne noe uselvisk",
      "Control - Det er viktig at en har sjølråderett i sitt eget liv, at en kan si fra hva en vil og ikke vil",
      "Conform - Det er viktig at en er tilpasningsdyktig, at en er i stand til å endre adferd, tanker og følelser"
    ],
    riktig: 1, forklaring: "ABC = Act (gjør noe aktivt), Belong (gjør noe sammen med andre), Commit (gjør noe meningsfullt).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-057", eksamen: "Høst 2025", nr: 57, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilke av de følgende utsagnene om medial superior oliven (MSO) er IKKE riktig?",
    figur: null,
    alternativer: [
      "Nevroner fra medial superior oliven (MSO) er myeliniserte",
      "Nevroner fra medial superior oliven (MSO) synapser ved de indre hårceller i cochlea",
      "Nevroner fra medial superior oliven (MSO) krysser hovedsakelig over til kontralateral side, men noen få nevroner går til samme side",
      "Nevroner fra medial superior oliven (MSO) synapser ved de ytre hårceller i cochlea"
    ],
    riktig: 1, forklaring: "Mediale olivocochleære (MOC) fibre er myeliniserte, krysser hovedsakelig over og synapser direkte på de ytre hårcellene, ikke de indre.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-058", eksamen: "Høst 2025", nr: 58, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Modning av corpus callosum er mest knyttet til forbedringer i hvilken funksjon?",
    figur: null,
    alternativer: ["Interhemisfærisk kommunikasjon", "Reflekser", "Høreterskler", "Språktilegnelse"],
    riktig: 0, forklaring: "Corpus callosum forbinder hjernehalvdelene. Modningen bedrer overføringen mellom dem, noe som blant annet ses i dikotisk lytting.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-059", eksamen: "Høst 2025", nr: 59, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hvilke av følgende stimuli er egnet til å studere temporale egenskaper i fyringsmønstre fra nevroner?",
    figur: null,
    alternativer: ["Høyfrekvente rentoner", "Elektriske impulser", "Lavfrekvente rentoner", "Klikk"],
    riktig: 3, forklaring: "Klikk er korte bredbåndsstimuli med skarp start. De egner seg til å studere timing og responsmønster (f.eks. PST-histogram).",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 3
  },
  {
    id: "H25-060", eksamen: "Høst 2025", nr: 60, tema: "Statistikk", poeng: 1,
    tekst: "Konklusjonen fra hørselsscreening med bruk av TEOAE vil gi oss dataverdier som er ...",
    figur: null,
    alternativer: ["Nominalskalerte", "Intervallskalerte", "Ordinalskalerte", "Ratioskalerte"],
    riktig: 0, forklaring: "Screeningkonklusjonen er «bestått/ikke bestått» (pass/refer), altså kategorier uten rekkefølge: nominalskala.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-061", eksamen: "Høst 2025", nr: 61, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hvilket av svaralternativene ville være øverst i forskningsdesign-hierarkiet?",
    figur: null,
    alternativer: ["Randomisert kontrollert studie", "Kohortstudier", "Metaanalyser", "Tversnittstudier"],
    riktig: 2, forklaring: "Systematiske oversikter og metaanalyser ligger øverst i evidenspyramiden, over RCT, kohort- og tverrsnittstudier.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-062", eksamen: "Høst 2025", nr: 62, tema: "Forskningsmetode", poeng: 1,
    tekst: "Gjennom historien har det utviklet seg ulike tradisjoner med ulikt syn på hvordan vi får fram ny kunnskap gjennom forskning. To slike tradisjoner er den naturvitenskapelige tradisjonen og den humanvitenskapelige tradisjonen. Hvilket av utsagnene under hører hjemme i den humanvitenskapelige tradisjonen?",
    figur: null,
    alternativer: [
      "«Forskeren skal være objektiv, og skal kunne byttes ut uten at resultatene påvirkes.»",
      "«Metodene vi bruker må ha krav til validitet og reliabilitet.»",
      "«Meningsfulle fenomener må fortolkes for å kunne forstås.»",
      "«Pasienten trenger en behandling som kan bedre situasjonen.»"
    ],
    riktig: 2, forklaring: "Humanvitenskapen er hermeneutisk: mening må fortolkes og forstås. Objektivitet og utskiftbar forsker hører til naturvitenskapen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-063", eksamen: "Høst 2025", nr: 63, tema: "Statistikk", poeng: 1,
    tekst: "Hva bør gjøres hvis p-verdien er mindre enn signifikansnivået (α)?",
    figur: null,
    alternativer: [
      "Øk signifikansnivået og gjenta den statistiske testen",
      "Forkast nullhypotesen",
      "Aksepter nullhypotesen",
      "Øk utvalgsstørrelsen"
    ],
    riktig: 1, forklaring: "p < α betyr at resultatet er statistisk signifikant, og da forkastes nullhypotesen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-064", eksamen: "Høst 2025", nr: 64, tema: "Høreapparat og forsterkning", poeng: 1,
    tekst: "For lyttere med manglende funksjon i de ytre hårcellene vil et høreapparat med lineær forsterkning øke hørbarheten av lyd. Hvilken annen effekt vil forsterkningen gi lytteren?",
    figur: null,
    alternativer: [
      "Bølgebevegelser i større områder langs basilarmembranen vil gi hjernen mindre definert frekvensinformasjon om lyden",
      "Forsterkningen vil utvide lytterens dynamikkområde",
      "Forsterkningen vil gi lytteren mindre lytteproblemer grunnet unormal hørestyrkevekst",
      "Lytterens mulighet til å benytte «top down-prosessering» vil bli mindre med økende forsterkning"
    ],
    riktig: 0, forklaring: "Uten de ytre hårcellene er tuningen bred. Høyere nivå eksiterer et større område av basilarmembranen og gir dårligere frekvensoppløsning. Forsterkning utvider ikke dynamikkområdet.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-065", eksamen: "Høst 2025", nr: 65, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilken av utsagnene er IKKE et eksempel på en selvstereotypi blant eldre?",
    figur: null,
    alternativer: [
      "Jeg er for gammel til å forstå dette humorprogrammet",
      "Jeg som er en eldre kvinne ser uverdig ut i korte skjørt",
      "Jeg som er en eldre mann må tenke over hva jeg vil ha ut av livet",
      "Jeg som er eldre har mye visdom å bidra med"
    ],
    riktig: 2, forklaring: "Selvstereotypier er generaliseringer om egen aldersgruppe som man tar på seg selv, og de kan være negative eller positive (visdom). Å reflektere over hva man vil med livet er ingen stereotypi.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-066", eksamen: "Høst 2025", nr: 66, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hva er nevropati?",
    figur: null,
    alternativer: [
      "Fraværende eller atypiske auditive ryggmargsresponser",
      "Et begrep som beskriver hypokondriske pasienter som er redde for hjernesvulster",
      "En type hørseltap hvor taleforståelsen er bedre enn forventet ut fra graden av hørselstap i audiogram",
      "En patologi som påvirker struktur og funksjon av perifere nervefibre"
    ],
    riktig: 3, forklaring: "Nevropati er sykdom i perifere nerver. Ved auditiv nevropati er taleforståelsen typisk dårligere enn audiogrammet tilsier, ikke bedre.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-067", eksamen: "Høst 2025", nr: 67, tema: "Statistikk", poeng: 1,
    tekst: "Den generelle hensikten med slutningsstatistikk er å... :",
    figur: null,
    alternativer: [
      "... presentere funnene i form av en tabell",
      "... visualisere distribusjonen av data",
      "... presentere data grafisk",
      "... utforske sammenhengen mellom variabler"
    ],
    riktig: 3, forklaring: "Slutningsstatistikk (inferensstatistikk) tester hypoteser om sammenhenger og forskjeller og generaliserer fra utvalg til populasjon. Tabeller og grafer er deskriptiv statistikk.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-068", eksamen: "Høst 2025", nr: 68, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hvilken type hukommelse påvirker taleforståelse i størst grad?",
    figur: null,
    alternativer: ["Arbeidsminne", "Prosedyrisk hukommelse", "Langtidsminne", "Sensorisk hukommelse"],
    riktig: 0, forklaring: "Arbeidsminnekapasitet er sterkt knyttet til taleforståelse, særlig i støy (jf. ELU-modellen).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-069", eksamen: "Høst 2025", nr: 69, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Recruitment er hovedsakelig et fenomen som forbindes med:",
    figur: null,
    alternativer: ["Mekanisk patologi", "Cochleær patologi", "Normal hørsel", "Retrocochleær patologi"],
    riktig: 1, forklaring: "Recruitment (unormal rask hørestyrkevekst) skyldes tap av de ytre hårcellenes kompresjon, altså cochleær patologi.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-070", eksamen: "Høst 2025", nr: 70, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "ABLB (alternating binaural level balancing) handler om å kartlegge når pasienten opplever lik hørestyrke (loudness) mellom sine to ører på en bestemt testfrekvens. Hvilket utsagn er RIKTIG angående skjermbildet fra ABLB målt ved 1000 Hz?",
    figur: "figurer/oppg070.jpg",
    alternativer: ["Hyperacusis venstre øre", "Hørselen er best på høyre øre", "Unormal hørestyrkevekst venstre øre", "Cochleær patologi høyre øre"],
    riktig: 3, forklaring: "Høyre øre (rød O) har terskel 40 dB mot 0 dB på venstre (blå X), men ved høye nivåer oppleves lik hørestyrke. Høyre øre har altså recruitment, som tyder på cochleær patologi høyre.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-071", eksamen: "Høst 2025", nr: 71, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hvilken av følgende fire problemstillinger åpner mest opp for kvalitativ metode? :",
    figur: null,
    alternativer: [
      "Er det en positiv korrelasjon mellom økt grad av tinnitus og type personlighet?",
      "Har yrkesaktive innen byggebransjen større sannsynlighet for å utvikle tinnitus?",
      "Hva er effekten av TRT-behandling kontra kognitiv atferdsterapi i tilknyttet til tinnitusbehandling?",
      "Hvilke erfaringer har mennesker med tinnitus som følge av yrkesskade med TRT-behandling gjennom et år?"
    ],
    riktig: 3, forklaring: "Spørsmål om «erfaringer» og opplevelser egner seg for kvalitativ metode. Korrelasjon, sannsynlighet og effekt er kvantitative spørsmål.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-072", eksamen: "Høst 2025", nr: 72, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hvilket av følgende alternativ er et eksempel på et primært forskningsdesign?",
    figur: null,
    alternativer: ["Metasyntese", "Metaanalyse", "Systematisk litteraturgjennomgang (Systematic literature review)", "Randomisert kontrollert studie"],
    riktig: 3, forklaring: "En primærstudie samler inn egne data (f.eks. RCT). Metasyntese, metaanalyse og systematiske oversikter er sekundærforskning.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-073", eksamen: "Høst 2025", nr: 73, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "ABLB står for alternating binaural level balancing. Hvilket av de følgende utsagnene er RIKTIG angående ABLB?",
    figur: null,
    alternativer: [
      "ABLB avdekker ofte en høyreørefordel (\"right ear advantage\")",
      "ABLB måles for å skille mellom cochleært og retrocochleært hørselstap",
      "ABLB måles for å avdekke unormal lydprosessering hos tilsynelatende normalthørende",
      "ABLB kan brukes for å sette en individuelt målt forsterkningstarget"
    ],
    riktig: 1, forklaring: "ABLB påviser recruitment (cochleært tap) eller decruitment (retrocochleært tap) ved ensidig hørselstap.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-074", eksamen: "Høst 2025", nr: 74, tema: "Statistikk", poeng: 1,
    tekst: "Tabellen under er hentet fra en vitenskapelig artikkel som heter «Prevalence of Dead Regions in Subjects with Sensorineural Hearing Loss». Artikkelen tar for seg prevalensen av døde regioner i cochlea hos mennesker med sensorineuralt hørselstap. Hvilken av de følgende påstandene er RIKTIG, ut fra det tabellen viser?",
    figur: "figurer/oppg074.jpg",
    alternativer: [
      "Forskjellen mellom hvor bratt audiogrammet faller hos gruppa MED døde regioner og hos gruppa UTEN døde regioner er signifikant ved alle frekvenser, basert på en signifikansgrense på 5%",
      "Ved 750 Hz er det ingen signifikante forskjeller mellom hvor bratt audiogrammet faller hos gruppa MED døde regioner og hos gruppa UTEN døde regioner i cochlea, basert på en signifikansgrense på 5%",
      "3000 Hz er den eneste frekvensen hvor forskjellen mellom hvor bratt audiogrammet faller hos gruppa MED døde regioner og hos gruppa UTEN døde regioner er signifikant, basert på en signifikansgrense på 1%",
      "Variasjonen i hvor bratt audiogrammet faller er generelt mindre hos gruppa MED døde regioner, sammenliknet med gruppa UTEN døde regioner"
    ],
    riktig: 0, forklaring: "Alle p-verdiene (0,02, 0,009, 0,001, 0,008, <0,001, 0,006) er under 0,05. Ved 1 % er flere frekvenser enn 3000 Hz signifikante. SD er større (ikke mindre) i gruppa med døde regioner.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-075", eksamen: "Høst 2025", nr: 75, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilken av de følgende påstandene er IKKE riktig angående Hørsel og psyke?",
    figur: null,
    alternativer: [
      "Personer med hørselstap har større risiko for å oppleve psykiske plager/lidelser sammenlignet med den generelle befolkningen",
      "Mennesker med tinnitus har dobbelt så høy risiko for selvmord sammenlignet med den generelle befolkningen",
      "Mennesker med alvorlig hørselstap eller døvhet har større risiko for å oppleve traumatiske hendelser som ulykker, fysisk og seksuelt misbruk",
      "Behandling av tinnitus kan redusere symptomer på angst, og behandling av angstsymptomer kan redusere byrden av tinnitus"
    ],
    riktig: 1, forklaring: "De tre andre påstandene er godt dokumentert. Påstanden om «dobbelt så høy selvmordsrisiko» ved tinnitus er ikke etablert kunnskap.",
    fasit: "generert", sikkerhet: "lav", kandidatsvar: 1
  },
  {
    id: "H25-076", eksamen: "Høst 2025", nr: 76, tema: "Statistikk", poeng: 1,
    tekst: "Hva er sammenhengen mellom gjennomsnitt og median dersom frekvensfordelinga i et stort datasett er skjevfordelt positivt?",
    figur: null,
    alternativer: [
      "Det er ingen gitt sammenheng mellom gjennomsnitt og median i en skjevfordelt frekvensfordeling",
      "Gjennomsnittsverdien vil være et høyere tall enn medianverdien",
      "Gjennomsnittsverdien vil være et lavere tall enn medianverdien",
      "Gjennomsnitt og median vil bli identisk"
    ],
    riktig: 1, forklaring: "Ved positiv skjevhet (lang hale mot høyre) trekker de høye verdiene gjennomsnittet opp, så gjennomsnitt > median.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-077", eksamen: "Høst 2025", nr: 77, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hva er den vanligste årsaken til hørselstap i diskanten som et resultat av aldringsprosessen?",
    figur: null,
    alternativer: [
      "Degenerering av blodtilførsel og/eller atrofi",
      "Tap av afferente nervefibre og spiral ganglion-celler",
      "Fysiologiske endringer i den basale delen av cochlea",
      "Fysiologiske endringer i den apikale delen av cochlea"
    ],
    riktig: 2, forklaring: "Høye frekvenser kodes i basis av cochlea, der aldersrelatert hårcelletap typisk starter (presbyacusis).",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "H25-078", eksamen: "Høst 2025", nr: 78, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilken av alternativene under er IKKE en forsvarsmekanisme?",
    figur: null,
    alternativer: ["Fortrenging", "Forskyvning", "Selvmedlidenhet", "Intellektualisering"],
    riktig: 2, forklaring: "Fortrenging, forskyvning og intellektualisering er klassiske forsvarsmekanismer. Selvmedlidenhet er en følelse eller holdning.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-079", eksamen: "Høst 2025", nr: 79, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Figuren under viser en psykoakustisk tuningkurve, den svarte rundingen viser frekvens (i kHz) og nivå (i dB SPL) på stimulus. Hvilken av påstandene under er RIKTIG angående denne psykoakustiske tuningkurven?",
    figur: "figurer/oppg079.png",
    alternativer: [
      "De ulike nivåene som er tilstrekkelige for å maskere stimulus tilsier normal hørsel ved målt frekvens",
      "De indre hårcellene fungerer ikke ved stimulusfrekvensen",
      "Maskeringsnivået ved stimulusfrekvensen ligger under nivået på stimulus, så målingen indikerer ikke en død region",
      "Den målte verdien ved 4 kHz vil ligge under det skraverte området for distorsjonsprodukter ut fra Gorgas norm-data, og indikerer derfor nedsatt hørsel ved denne frekvensen"
    ],
    riktig: 1, forklaring: "Stimulus er 2 kHz, men tuppen på tuningkurven ligger ved ca. 4 kHz. Tonen oppfattes altså via hårceller et annet sted (off-frequency listening), som tyder på en død region ved 2 kHz.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-080", eksamen: "Høst 2025", nr: 80, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hvilket av de følgende utsagnene om auditiv tuningkurve er IKKE riktig?",
    figur: null,
    alternativer: [
      "Formen på tuningkurven er uavhengig av den karakteristiske frekvensen",
      "Tuningkurve refererer til responsområdene til enkeltnevroner som en funksjon av frekvens",
      "Tuningkurver demonstrerer viktigheten av stedskoding (place-coding) av frekvensinformasjon",
      "Det laveste punktet på tuningkurven kalles den karakteristiske frekvensen"
    ],
    riktig: 0, forklaring: "Formen avhenger av CF. Høyfrekvente fibre har skarp tupp og lang lavfrekvent «hale», mens lavfrekvente fibre har mer symmetriske kurver.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-081", eksamen: "Høst 2025", nr: 81, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilket av følgende alternativer om grå substans i det sentrale nervesystemet er RIKTIG?",
    figur: null,
    alternativer: [
      "Finnes bare i ryggmargen",
      "Ansvarlig for å overføre signaler raskt over lange avstander",
      "Består hovedsakelig av myeliniserte aksoner",
      "Inneholder nevronceller, dendritter og umyeliniserte aksoner"
    ],
    riktig: 3, forklaring: "Grå substans består av cellekropper, dendritter og umyeliniserte aksoner. Hvit substans består av myeliniserte aksoner som leder raskt over lange avstander.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-082", eksamen: "Høst 2025", nr: 82, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Figuren under viser data fra en undersøkelse av skalledemping (\"interaural attenuation\"), gjengitt i læreboka \"Essentials of audiology\". Hvor fant forskerne den minste variansen?",
    figur: "figurer/oppg082.jpg",
    alternativer: [
      "Ved 500 Hz med bruk av innstikkstelefoner som lydgivere",
      "Ved 4000 Hz samlet sett for de to ulike lydgiverne",
      "Ved 250 Hz med bruk av hodetelefoner som lydgivere",
      "Ved 1000 Hz med bruk av hodetelefoner som lydgivere"
    ],
    riktig: 3, forklaring: "Feilstolpene (spredningen) er kortest for hodetelefoner (TDH-49) ved 1000 Hz.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-083", eksamen: "Høst 2025", nr: 83, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Monotone fibre skiller seg fra ikke-monotone fibre fordi...:",
    figur: null,
    alternativer: [
      "De monotone fibrene viser en topp i avfyringshastigheten og deretter en nedgang",
      "De monotone fibrene opprettholder en lineær eller nesten lineær økning i avfyringshastigheten med intensiteten",
      "De monotone fibrene går i metning ved høye intensiteter",
      "De monotone fibrene er bare følsomme for lave frekvenser"
    ],
    riktig: 1, forklaring: "Monotone fibre øker fyringsraten jevnt med økende intensitet. Ikke-monotone fibre har en topp og fyrer så mindre ved høyere nivåer.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 1
  },
  {
    id: "H25-084", eksamen: "Høst 2025", nr: 84, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hvilket av følgende alternativ beskriver best begrepet «sekundær aldring»?",
    figur: null,
    alternativer: [
      "Reduksjonen i kognitiv kapasitet som er en uunngåelig del av det å bli eldre",
      "De aldersrelaterte endringene som kan kobles til sykdom, livsstilsvalg og miljøfaktorer",
      "Utviklingen av kroniske sykdommer som kan skyldes genetisk arv",
      "Prosessen med uunngåelige kroppslige endringer som skjer med alderen"
    ],
    riktig: 1, forklaring: "Sekundær aldring er endringer som skyldes sykdom, livsstil og miljø. Uunngåelige endringer er primær aldring.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-085", eksamen: "Høst 2025", nr: 85, tema: "Anatomi og hørselsfysiologi", poeng: 1,
    tekst: "Hvilken av følgende påstander angående frekvenskoding er RIKTIG:",
    figur: null,
    alternativer: [
      "Hørselsnerven kan faselåses til lyder med frekvenser opp til ca 3 kHz på grunn av Volley-prinsippet",
      "Den refraktære perioden (\"refractory period\") til hørselsnervefibrene begrenser det maksimale antallet aksjonspotensialer til 6000 per sekund",
      "Lydens frekvens er kun kodet av tonotopien til basilarmembranen (\"place code\")",
      "Lyder med frekvenser høyere enn 6 kHz kan kodes av antall aksjonspotensialer per sekund i de auditive nervecellene (\"temporal code\")"
    ],
    riktig: 0, forklaring: "Hver fiber fyrer maks ca. 1000 ganger/s, men grupper av fibre som fyrer på ulike perioder (volley) gir faselåsing opp til noen få kHz. Over ca. 4–5 kHz kodes frekvens bare med stedskode.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 0
  },
  {
    id: "H25-086", eksamen: "Høst 2025", nr: 86, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hvilken av de følgende påstandene angående distorsjonsprodukt otoakustiske emisjoner (DPOAE) er RIKTIG?",
    figur: null,
    alternativer: [
      "DPOAE målt i øregangen er resultatet av aktivitet fra ytre hårceller lokalisert i apex av cochlea, men ikke i basis",
      "DPOAE kan kun brukes for å vurdere funksjonen til ytre hårcellene under ca. 4 kHz",
      "DPOAE gjenspeiler funksjonen til de ytre hårcellene",
      "DPOAE er et subjektivt mål på funksjonen til de ytre hårcellene"
    ],
    riktig: 2, forklaring: "DPOAE er et objektivt mål på de ytre hårcellenes ikke-lineære funksjon. Det kan måles i store deler av cochlea, også i basis (høye frekvenser).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-087", eksamen: "Høst 2025", nr: 87, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hvilket utsagn om ITD-prosessering i mennesker er RIKTIG?",
    figur: null,
    alternativer: [
      "ITD-prosessering er basert på raske hodebevegelser",
      "ITD-prosessering er basert på ulike aksonlengder av eksitatoriske innganger til MSO-celler",
      "ITD-prosessering er basert på koinsidensdeteksjon av eksitatoriske innganger i MSO-celler",
      "ITD-prosessering er basert på en integrasjon av eksitatoriske og inhibitoriske innganger i MSO-celler"
    ],
    riktig: 3, forklaring: "Hos pattedyr (i motsetning til fugler og Jeffress-modellen med forsinkelseslinjer) styres ITD-følsomheten i MSO av presist tidsstyrt inhibisjon sammen med eksitasjon.",
    fasit: "generert", sikkerhet: "lav", kandidatsvar: 3
  },
  {
    id: "H25-088", eksamen: "Høst 2025", nr: 88, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "En måling som kan undersøke loudness er SISI (Short Increment Sensitivity Index). Pasientens oppgave er å detektere lydstyrkeendringer med en størrelse på 1 dB. Målingen gjøres ofte på to nivåer, 20 dB SL og 75-90 dB HL. Dersom et menneske oppfatter 90 % av økningene målt ved 20 dB SL, indikerer dette... :",
    figur: null,
    alternativer: ["Cochleært hørselstap", "Mekanisk hørselstap", "Normal hørsel", "Retrocochleær patologi"],
    riktig: 0, forklaring: "Ved lavt nivå (20 dB SL) oppfatter normalthørende få 1 dB-økninger. Høy SISI-skår (≥ 70 %) der tyder på cochleært tap (recruitment).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-089", eksamen: "Høst 2025", nr: 89, tema: "Forskningsmetode", poeng: 1,
    tekst: "Kvalitativ metode egner seg best dersom... :",
    figur: null,
    alternativer: [
      "... man ønsker å forstå og fange opp meninger, erfaringer, opplevelser og tanker som ikke lar seg tallfeste eller måle",
      "... man ønsker å kartlegge omfang, fordeling eller effekt av noe",
      "... man ønsker å se på statistisk signifikans og om et fenomen er generaliserbart",
      "... man ønsker store utvalg for å undersøke gjennomsnitt"
    ],
    riktig: 0, forklaring: "Kvalitativ metode brukes for å forstå meninger og erfaringer. Omfang, effekt, signifikans og gjennomsnitt er kvantitative mål.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-090", eksamen: "Høst 2025", nr: 90, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hva er nasjonal behandlingstjeneste for sansetap og psykisk helse (NBSPH)?",
    figur: null,
    alternativer: [
      "Et behandlingstilbud ved St. Olavs Hospital som har særlig tilrettelagt diagnostisering og høreapparattilpasning for hørselshemmede med psykiske lidelser",
      "Et behandlingstilbud for mennesker med psykiske lidelser der all kommunikasjon og informasjon ikke foregår med talespråk, men gjennom syns- og tegnspråktolkning",
      "Et behandlingstilbud for mennesker som både har sansetap og psykiske lidelser og krever henvisning",
      "Et behandlingstilbud for mennesker med psykiske lidelser som har kombinert syns- og hørselstap"
    ],
    riktig: 2, forklaring: "NBSPH er en nasjonal spesialisthelsetjeneste for personer med sansetap (hørsel, syn eller begge) og psykiske lidelser. Det kreves henvisning.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "H25-091", eksamen: "Høst 2025", nr: 91, tema: "Tale og akustikk", poeng: 1,
    tekst: "LTASS (\"Long time average speech spectrum\", langtidsspekter for tale) er en visualisering av talesignalers gjennomsnittlige amplitude (langs y-aksen) ved ulike frekvenser (langs x-aksen). Hvor finner vi typisk de høyeste y-verdiene i en slik visualisering av LTASS?",
    figur: null,
    alternativer: ["Ved 2000 Hz", "Ved 500 Hz", "Ved 100 Hz for kvinner og 200 Hz for menn", "Ved 100 Hz for menn og 200 Hz for kvinner"],
    riktig: 1, forklaring: "Taleenergien er størst rundt 250–500 Hz og faller av mot høye frekvenser.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-092", eksamen: "Høst 2025", nr: 92, tema: "Vestibulært", poeng: 1,
    tekst: "Hvilken av de følgende tilstandene kan resultere i uvanlig store oVEMP-amplituder?",
    figur: null,
    alternativer: ["Morbus Ménière", "Otosklerose", "Superior canal dehiscence (SCD)", "BPPV"],
    riktig: 2, forklaring: "Ved SCD gir «det tredje vinduet» økt følsomhet for lyd i det vestibulære systemet, med store VEMP-amplituder og lave terskler.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-093", eksamen: "Høst 2025", nr: 93, tema: "Statistikk", poeng: 1,
    tekst: "Parametriske tester brukes IKKE dersom... :",
    figur: null,
    alternativer: [
      "... dataverdiene ikke har homogen varians",
      "... dataverdiene er normalfordelte",
      "... dataverdiene har homogen varians",
      "... dataverdiene er ratioskalerte"
    ],
    riktig: 0, forklaring: "Parametriske tester forutsetter blant annet normalfordeling og homogen varians. Brytes dette, velger man ikke-parametriske tester.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-094", eksamen: "Høst 2025", nr: 94, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "En måling som kan undersøke loudness er SISI (Short Increment Sensitivity Index). Pasientens oppgave er å detektere lydstyrkeendringer med en størrelse på 1 dB. Målingen gjøres ofte på to nivåer, 20 dB SL og 75-90 dB HL. Dersom et menneske oppfatter 15 % av økningene målt ved 90 dB HL, indikerer dette... :",
    figur: null,
    alternativer: ["Normal hørsel", "Mekanisk hørselstap", "Retrocochleær patologi", "Cochleært hørselstap"],
    riktig: 2, forklaring: "Ved høyt nivå oppfatter både normalthørende og personer med cochleært tap de fleste økningene. En lav skår der tyder på retrocochleær patologi.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "H25-095", eksamen: "Høst 2025", nr: 95, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hvilket av svaralternativene kan brukes til å studere prevalensen av en tilstand i en populasjon?",
    figur: null,
    alternativer: ["Randomisert kontrollert studie", "Tversnittstudier", "Metaanalyser", "Kohortstudier"],
    riktig: 1, forklaring: "Prevalens er andelen med en tilstand på et gitt tidspunkt, og det måles med tverrsnittstudier. Kohortstudier måler insidens over tid.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-096", eksamen: "Høst 2025", nr: 96, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hvilket kriterium må oppfylles for at et frekvensområde skal defineres som en død region i TEN-testen?",
    figur: null,
    alternativer: [
      "Forskjellen mellom absolutt og maskert terskel må være minst 10 dB, uavhengig av TEN støynivået",
      "Den maskerte terskelen må være minst 10 dB høyere enn både den absolutte terskelen og TEN støynivået",
      "Den absolutte terskelen må overstige 70 dB HL og være uavhengig av TEN støynivået",
      "Den maskerte terskelen må være minst 10 dB høyere enn TEN støynivået, men kan ligge under den absolutte terskelen"
    ],
    riktig: 1, forklaring: "Moores kriterium: den maskerte terskelen skal ligge ≥ 10 dB over TEN-nivået og ≥ 10 dB over den absolutte terskelen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "H25-097", eksamen: "Høst 2025", nr: 97, tema: "Statistikk", poeng: 1,
    tekst: "Figuren viser data hentet fra to store populasjonsundersøkelser («HUNT2» og «HUNT4»). Hvilket parameter fra figuren passer til beskrivelsen «en avhengig variabel»?",
    figur: "figurer/oppg097.jpg",
    alternativer: ["Høreterskler", "Kjønn", "Alder", "Frekvens"],
    riktig: 0, forklaring: "Hørselsterskelen er utfallet som måles (y-aksen). Kjønn, alder og frekvens er uavhengige variabler som den sees i forhold til.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-098", eksamen: "Høst 2025", nr: 98, tema: "Tale og akustikk", poeng: 1,
    tekst: "En hørselshemmet lytter som ikke benytter noen form for forsterkning (som for eksempel høreapparat), vil oppleve at talesignaler er mindre hørbare enn en normalthørende lytter. La oss tenke oss en fiktiv, hørselshemmet lytter. Lytteren har relativt god hørbarhet i bassfrekvensene, men svært dårlig hørbarhet uten forsterkning i frekvensene over 1000 Hz. Hvilke deler fra talesignaler vil lytteren kunne nyttiggjøre seg uten å bruke forsterkning?",
    figur: null,
    alternativer: [
      "S-lyden, skj-lyden og f-lyden, i tillegg til de ustemte plosivene",
      "Alveolært locus og F2 i vokaler",
      "Velare klyper, artikulasjonssted for konsonanter",
      "Å skille mellom stemte og ustemte talelyder"
    ],
    riktig: 3, forklaring: "Stemthet (grunntone og lavfrekvent energi) ligger i bassen. Frikativer, F2 og artikulasjonssted krever hørbarhet over 1000 Hz.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "H25-099", eksamen: "Høst 2025", nr: 99, tema: "Folkehelse og epidemiologi", poeng: 1,
    tekst: "Figuren viser mengden av aleneboende ved ulik alder, uttrykt i prosent, for mennesker bosatt i Norge. (Kilde: SSB) Ut fra figuren: Hva er den laveste alderen hvor det er MER sannsynlig at en kvinne bor alene enn at hun bor sammen med noen?",
    figur: "figurer/oppg099.jpg",
    alternativer: ["80 år", "58 år", "92 år", "23 år"],
    riktig: 0, forklaring: "Det er mer sannsynlig å bo alene når andelen passerer 50 %. Kvinnekurven (mørk) krysser 50 % rundt 80 år. Ved 23 år er den bare ca. 39 %.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "H25-100", eksamen: "Høst 2025", nr: 100, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva innebærer begrepet «common cause» innen hørsel og kognisjon?",
    figur: null,
    alternativer: [
      "At en felles underliggende nevral degenerasjon påvirker både hørsel og kognisjon",
      "At høreapparater reverserer nedsatt hørsel og kognitiv funksjon",
      "At hørselstap direkte forverrer kognitive prosesser",
      "At sosial isolasjon er den ledende årsaken til kognitiv svikt ved hørselstap"
    ],
    riktig: 0, forklaring: "Common cause-hypotesen sier at én felles underliggende prosess (f.eks. aldersrelatert nevral degenerasjon) svekker både hørsel og kognisjon. At hørselstap direkte forverrer kognisjon er derimot «cascade»-hypotesen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  }
];
