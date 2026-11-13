// AUT2200: høreapparattyper og komponenter, ørepropper, proppeakustikk og avstøp.
// Generert fra forelesningene «Introductory concepts» (Nagaraj, 17.08, Dillon kap. 1),
// «Hearing aid components» (Nagaraj, 19.08, Dillon kap. 2) og «Ørepropper, skall, koblinger og
// avstøp» (Rosvoldaunet, 24.08, Dillon kap. 5 og BSA).

var MUNTLIG = window.MUNTLIG || [];
window.MUNTLIG = MUNTLIG;

KORT.push(
  { id: "K22-HA01", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Introductory concepts (17.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Introductory concepts (17.08)",
    forside: "Hvilke konsekvenser har et sensorinevralt hørselstap, og hvilke kan høreapparatet hjelpe på?",
    bakside: "Redusert hørbarhet, redusert dynamikkområde, redusert frekvensoppløsning, redusert tidsoppløsning og redusert sentral prosesseringsevne. Apparatet kan kompensere for hørbarhet og dynamikkområde, og delvis for frekvensoppløsningen med støyreduksjon, retningsmikrofoner og frekvensspesifikk forsterkning.",
    forklaring: "Resultatet er særlig problemer med å skille tale fra støy." },
  { id: "K22-HA02", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Introductory concepts (17.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Introductory concepts (17.08), Dillon fig. 1.2",
    forside: "Hvorfor holder ikke lik forsterkning for alle inputnivåer ved sensorinevralt tap?",
    bakside: "Dynamikkområdet (mellom terskel og ubehag) er redusert. Lineær forsterkning som gjør svake lyder hørbare, gjør sterke lyder for sterke. Derfor bør svake lyder forsterkes mer enn sterke.",
    forklaring: "Lineært apparat: samme forsterkning på alle inputnivåer. Ulineært apparat: forsterkningen varierer med inputnivået." },
  { id: "K22-HA03", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Introductory concepts (17.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Introductory concepts (17.08), Dillon fig. 1.1",
    forside: "Hvorfor kan vokalene «o» og «i» høres like ut ved et diskanttap?",
    bakside: "De har lik første formant, men ulik andre formant. Er andre formant uhørbar på grunn av tapet, mister lytteren det som skiller dem.",
    forklaring: "Formanter er resonansfrekvensene i talekanalen." },
  { id: "K22-HA04", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Introductory concepts (17.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Introductory concepts (17.08)",
    forside: "Hvordan regner du forsterkning (gain), og hva er SSPL90/OSPL90?",
    bakside: "Gain = output − input (input + gain = output). SSPL90 er lydtrykket apparatet gir ved et inputsignal på 90 dB, altså maksimal output uten betydelig forvrengning.",
    forklaring: "Metningsnivået varierer med frekvens. Det skal hindre at sterke lyder blir ubehagelige eller forvrengte." },
  { id: "K22-HA05", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Introductory concepts (17.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Introductory concepts (17.08)",
    forside: "Hva er hovedkomponentene i et høreapparat, og hva gjør de?",
    bakside: "Mikrofon (lyd til elektrisk signal), forsterker (øker signalet, ulikt per frekvens), lydgiver/receiver (elektrisk signal til lyd), ørepropp eller tilsvarende (fører lyden inn i øregangen) og batteri (strøm).",
    forklaring: "I et digitalt apparat: mikrofon → forforsterker → A/D-omformer → signalbehandling → D/A-omformer → sluttforsterker → lydgiver." },
  { id: "K22-HA06", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Introductory concepts (17.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Introductory concepts (17.08)",
    forside: "Hva er forskjellen på RITA, RITE, ITE og ITC?",
    bakside: "RITA: bak-øret-apparat med lydgiveren i apparatet. RITE: bak-øret-apparat med lydgiveren i øregangen. ITE: i øret. ITC: i øregangen.",
    forklaring: "Andre typer er kroppsbårne apparat og hørebriller (for personer med både syns- og hørselsutfordringer)." },
  { id: "K22-HA07", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Hearing aid components (19.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Hearing aid components (19.08)",
    forside: "Hvordan virker en elektretmikrofon?",
    bakside: "Lydbølgene treffer en tynn membran som beveger seg. Bak et lite luftrom sitter en bakplate med elektret. Bevegelsen gir en spenning som blir det elektriske signalet.",
    forklaring: "Mikrofonen er lineær: dobles lydtrykket, dobles spenningen. Frekvensresponsen er relativt flat, ofte med basskutt under 500 Hz." },
  { id: "K22-HA08", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Hearing aid components (19.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Hearing aid components (19.08)",
    forside: "Hva gjør en kompressor i høreapparatet, og hva skal den IKKE gjøre?",
    bakside: "Den demper forsterkningen når inputsignalet blir sterkere, slik at et redusert dynamikkområde utnyttes. Den skal ikke endre formen (spekteret) på bølgeformen.",
    forklaring: "Svake lyder forsterkes mer enn sterke." },
  { id: "K22-HA09", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Hearing aid components (19.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Hearing aid components (19.08)",
    forside: "Hva skjer i A/D-omformeren, og hvorfor betyr samplingsfrekvensen noe?",
    bakside: "Spenningen fra mikrofonen måles med jevne mellomrom (sampling), og hver måling får en tallverdi (kvantisering). Jo flere målinger per sekund, desto mer nøyaktig gjengis den analoge bølgeformen.",
    forklaring: "Fordeler med digital signalbehandling: lavere egenstøy, automatisk justering etter lydmiljøet, mindre størrelse og fleksibilitet. Ulemper: tidsforsinkelse og strømforbruk, som begge er redusert over tid." },
  { id: "K22-HA10", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Hearing aid components (19.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Hearing aid components (19.08)",
    forside: "Hva er telespole, DAI og akustiske dempere?",
    bakside: "Telespole: liten kobberspole som fanger opp magnetiske signaler fra en induksjonsslynge (innstillinger T, M og MT). DAI: direkte kabeltilkobling fra eksternt utstyr. Akustiske dempere: jevner ut topper og bunner i frekvensresponsen.",
    forklaring: "Ikke alle apparat har telespole." },
  { id: "K22-HA11", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Hearing aid components (19.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Hearing aid components (19.08)",
    forside: "Hva betyr mAh på et høreapparatbatteri?",
    bakside: "Kapasiteten i milliampere-timer. Et batteri på 100 mAh kan gi 0,5 mA i 200 timer, 1 mA i 100 timer eller 2 mA i 50 timer.",
    forklaring: "Sink-luft er vanligst og gir ca. 1,4 V uansett størrelse. Større batterier varer lenger." },
  { id: "K22-HA12", emne: "AUT2200", tema: "Høreapparattyper og komponenter", eksamen: "Hearing aid components (19.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Hearing aid components (19.08)",
    forside: "Hva er egenstøy i et høreapparat?",
    bakside: "Den svake «suselyden» apparatet lager selv, fra de elektriske komponentene, selv uten noen ytre lyd.",
    forklaring: "Målet er at talen forsterkes tydelig uten at brukeren plages av egenstøyen. Den er særlig hørbar ved normal hørsel i bassen." },
  { id: "K22-OP01", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    forside: "Hvilke tre hovedoppgaver har en ørepropp eller et HA-skall?",
    bakside: "1. Koble lyden fra lydgiveren til øregangen. 2. Bestemme hvor åpen øregangen er mot luften utenfor (ventilering). 3. Holde apparatet komfortabelt på plass.",
    forklaring: "Proppen påvirker frekvensresponsen i øret, opplevelsen av egen stemme og risikoen for feedback." },
  { id: "K22-OP02", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08), Dillon fig. 5.7",
    forside: "Hvilken del av koblingssystemet påvirker hvilke frekvenser?",
    bakside: "Ventileringen påvirker de lave frekvensene (0–1000 Hz). Akustiske filtre påvirker mellomfrekvensene (ca. 800–2500 Hz for BTE). Lydkanalen påvirker de høye frekvensene (over ca. 2 kHz for BTE).",
    forklaring: "For ITE/ITC/CIC: filtre ca. 1500–3500 Hz og lydkanal over ca. 5 kHz." },
  { id: "K22-OP03", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    forside: "Hva er akustisk masse, og hvorfor slipper en ventilering lave frekvenser gjennom?",
    bakside: "Akustisk masse er luftens motstand mot bevegelse i et rør eller en ventil. Motstanden er større jo høyere frekvensen er, og jo lengre og smalere ventileringen er. Derfor slipper lave frekvenser lettere gjennom.",
    forklaring: "Det er grunnen til at ventileringen først og fremst påvirker bassen." },
  { id: "K22-OP04", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    forside: "Hva skjer når ventileringen gjøres større?",
    bakside: "Mindre okklusjonseffekt og mindre hørbar egenstøy (ved normal basshørsel). Men større risiko for feedback, mindre lavfrekvent forsterkning, og dårligere effekt av støydemping og retningsmikrofoner.",
    forklaring: "Ventileringen må være stor nok til å unngå uakseptabel okklusjon, men ikke så stor at den gir feedback eller hindrer at man når målforsterkningen og MPO i bassen." },
  { id: "K22-OP05", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    forside: "Hva er okklusjonseffekten, og hvem plages av den?",
    bakside: "Egen stemme blir forsterket av beinledet lyd som fanges i den tette øregangen. Den plager særlig dem med terskler på 50 dB HL eller bedre i bassen.",
    forklaring: "Større ventilering gir mindre okklusjon. 2 mm er en god start, men man må ofte opp i 3 mm eller mer. En propp som går helt inn i den beinete delen av øregangen gir også mye mindre okklusjon. Noen ganger er det i stedet «ampclusion» (forsterket egen stemme fra apparatet)." },
  { id: "K22-OP06", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    forside: "Hvordan påvirker lydkanalen og kanallengden forsterkningen?",
    bakside: "Et horn (kanal som utvider seg mot øregangen) øker output i diskanten, mens en innsnevret kanal gir mindre. En lang propp gir mindre restvolum og høyere lydnivå; en kort gir større restvolum og lavere lydnivå.",
    forklaring: "Standard lydkanal er 2 mm. 1 mm gir mindre diskantforsterkning." },
  { id: "K22-OP07", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    forside: "Hvordan velger du minste ventilering ut fra lavfrekvenstersklene?",
    bakside: "Lavfrekvent tap over 50 dB: ventilering er ikke nødvendig. Terskler bedre enn 30 dB: minst 2 mm. 1 mm er for lite til å påvirke okklusjonen, men gir et utgangspunkt å bore opp fra.",
    forklaring: "Fremgangsmåte: finn maksimal ventilering ut fra ønsket forsterkning, finn minste ventilering ut fra tersklene ved 250 og 500 Hz, velg ventilering, og deretter lydkanal og eventuelt filter (BTE)." },
  { id: "K22-OP08", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    forside: "Hvem har rett til ørepropper fra spesialsortimentet i rammeavtalen?",
    bakside: "Barn under 18 år, personer med minst 60 dB PTA (luftledning 500, 1000, 2000 Hz), personer med mekanisk tap med minst 50 dB luft-bein-gap ved de samme frekvensene, og radikalopererte/mastoidektomerte.",
    forklaring: "Ellers brukes standardsortimentet av generiske propper. Generisk betyr at proppen passer til alle apparater." },
  { id: "K22-OP09", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    forside: "Når skal du IKKE ta avstøp uten videre?",
    bakside: "Ved mye cerumen, synlige tegn på ytre- eller mellomørebetennelse, utspent eller perforert trommehinne (trenger klarering fra lege) og ved mastoidektomi/radikaløre (lege må legge inn ekstra pads eller bomull). Ørehår må klippes først.",
    forklaring: "En «timeglass»-formet øregang kan også gi problemer." },
  { id: "K22-OP10", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08), avtrykksguiden",
    forside: "Hva kjennetegner et perfekt avtrykk?",
    bakside: "Lang kanal som viser andre sving i øregangen, ingen luftbobler, hele concha er med, pad sitter korrekt på, og avtrykksmassen har stoppet ved paden.",
    forklaring: "Luftbobler kan tolereres etter andre sving, men ikke ellers. Avtrykket skal aldri forlenges manuelt." },
  { id: "K22-OP11", emne: "AUT2200", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)", oppgaver: [], sikkerhet: "høy",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    forside: "Når passer en åpen RITE med dome, og når passer ITE/CIC?",
    bakside: "Åpen RITE/dome: lett til moderat tap med brukbar basshørsel; behagelig, naturlig egen stemme, god ventilering, lite synlig. ITE/CIC: lett til moderat/alvorlig tap uten sykdomsforandringer i øregangen og med god motorikk; kosmetisk, men lite plass til ventilering (okklusjon) og, for CIC, lav maks forsterkning og MPO.",
    forklaring: "Tradisjonell BTE med propp passer fra lett til alvorlig tap og gir mulighet for tilkobling av annet utstyr. Domer byttes gjerne hver 2.–3. måned." }
);

OPPGAVER.push(
  {
    id: "S22-HA01", emne: "AUT2200", eksamen: "Introductory concepts (17.08)", nr: 1, tema: "Høreapparattyper og komponenter", poeng: 1,
    kilde: "Generert fra forelesning: Introductory concepts (17.08)",
    tekst: "Et høreapparat gir 25 dB forsterkning. Inputsignalet er 60 dB SPL. Hvor høyt blir outputsignalet?",
    figur: null,
    alternativer: ["35 dB SPL", "60 dB SPL", "85 dB SPL", "150 dB SPL"],
    riktig: 2, forklaring: "Input + gain = output: 60 + 25 = 85 dB SPL (så lenge apparatet ikke er i metning).",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-HA02", emne: "AUT2200", eksamen: "Introductory concepts (17.08)", nr: 2, tema: "Høreapparattyper og komponenter", poeng: 1,
    kilde: "Generert fra forelesning: Introductory concepts (17.08), Dillon fig. 1.2",
    tekst: "Hvorfor blir sterke lyder ofte for sterke når en person med sensorinevralt tap bruker et lineært høreapparat?",
    figur: null,
    alternativer: [
      "Fordi mikrofonen forvrenger sterke lyder",
      "Fordi dynamikkområdet er redusert, og lik forsterkning på alle nivåer løfter sterke lyder over ubehagsnivået",
      "Fordi batteriet gir for høy spenning",
      "Fordi frekvensoppløsningen er normal"
    ],
    riktig: 1, forklaring: "Ved sensorinevralt tap stiger terskelen mer enn ubehagsnivået, så dynamikkområdet blir smalere. Forsterkning som gjør svake lyder hørbare, gjør da sterke lyder for sterke. Det er derfor man bruker ulineær forsterkning.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-HA03", emne: "AUT2200", eksamen: "Hearing aid components (19.08)", nr: 3, tema: "Høreapparattyper og komponenter", poeng: 1,
    kilde: "Generert fra forelesning: Hearing aid components (19.08)",
    tekst: "Et batteri har kapasitet 100 mAh, og apparatet bruker 2 mA. Hvor lenge varer batteriet?",
    figur: null,
    alternativer: ["20 timer", "50 timer", "100 timer", "200 timer"],
    riktig: 1, forklaring: "Timer = kapasitet / strømforbruk = 100 mAh / 2 mA = 50 timer.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-HA04", emne: "AUT2200", eksamen: "Hearing aid components (19.08)", nr: 4, tema: "Høreapparattyper og komponenter", poeng: 1,
    kilde: "Generert fra forelesning: Hearing aid components (19.08)",
    tekst: "En bruker skal høre lyden fra en induksjonsslynge i en kirke og samtidig høre personen ved siden av. Hvilken innstilling passer?",
    figur: null,
    alternativer: ["M (mikrofon)", "T (telespole)", "MT (mikrofon og telespole)", "DAI"],
    riktig: 2, forklaring: "T gir bare signalet fra slyngen, M bare mikrofonen. MT gir begge, så brukeren hører både slyngen og personen ved siden av.",
    fasit: "generert", sikkerhet: "middels"
  },
  {
    id: "S22-HA05", emne: "AUT2200", eksamen: "Hearing aid components (19.08)", nr: 5, tema: "Høreapparattyper og komponenter", poeng: 1,
    kilde: "Generert fra forelesning: Hearing aid components (19.08)",
    tekst: "Hva er en ulempe med digital signalbehandling i høreapparat, ifølge forelesningen?",
    figur: null,
    alternativer: [
      "Høyere egenstøy enn analoge apparat",
      "Tidsforsinkelse og høyere strømforbruk, selv om begge er redusert over tid",
      "Kan ikke justere forsterkningen automatisk",
      "Gir større fysisk størrelse"
    ],
    riktig: 1, forklaring: "Digital behandling gir lavere egenstøy, automatisk justering, mindre størrelse og fleksibilitet. Ulempene er tidsforsinkelse og strømforbruk.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-OP01", emne: "AUT2200", eksamen: "Ørepropper og avstøp (24.08)", nr: 1, tema: "Ørepropper, proppeakustikk og avstøp", poeng: 1,
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    tekst: "En ny bruker med terskler på 25 dB HL ved 250 og 500 Hz klager over at egen stemme høres hul og buldrende ut. Hva er mest sannsynlig årsak, og hva gjør du?",
    figur: null,
    alternativer: [
      "Feedback; gjør ventileringen mindre",
      "Okklusjonseffekt; gjør ventileringen større (eventuelt dypere propp)",
      "For lite diskantforsterkning; bytt til hornkanal",
      "For lav MPO; øk MPO"
    ],
    riktig: 1, forklaring: "Med god basshørsel gir en tett propp okklusjon: egen stemme forsterkes av beinledet lyd. Større ventilering (eller en propp som går inn i den beinete delen) reduserer okklusjonen. Det kan også være ampclusion, så sjekk forsterkningen i bassen.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-OP02", emne: "AUT2200", eksamen: "Ørepropper og avstøp (24.08)", nr: 2, tema: "Ørepropper, proppeakustikk og avstøp", poeng: 1,
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    tekst: "Du gjør ventileringen mye større for å fjerne okklusjon. Hvilken bivirkning må du være forberedt på?",
    figur: null,
    alternativer: [
      "Mer diskantforsterkning",
      "Mindre feedback",
      "Mer feedback og mindre lavfrekvent forsterkning",
      "Bedre effekt av retningsmikrofonene"
    ],
    riktig: 2, forklaring: "Stor ventilering øker sjansen for feedback og gir mindre forsterkning i bassen. Den svekker også støydemping og retningsmikrofoner, fordi uprosessert lyd kommer inn gjennom venten.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-OP03", emne: "AUT2200", eksamen: "Ørepropper og avstøp (24.08)", nr: 3, tema: "Ørepropper, proppeakustikk og avstøp", poeng: 1,
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08), Dillon fig. 5.7",
    tekst: "Du vil ha mer diskantforsterkning fra en BTE med propp. Hvilken del av koblingssystemet endrer du?",
    figur: null,
    alternativer: [
      "Ventileringen",
      "Lydkanalen, f.eks. til en hornkanal",
      "Akustisk filter",
      "Proppmaterialet (hard eller myk)"
    ],
    riktig: 1, forklaring: "Lydkanalen påvirker de høye frekvensene (over ca. 2 kHz for BTE). En hornkanal som utvider seg mot øregangen øker diskantoutput. Ventileringen påvirker bassen og filteret mellomfrekvensene.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-OP04", emne: "AUT2200", eksamen: "Ørepropper og avstøp (24.08)", nr: 4, tema: "Ørepropper, proppeakustikk og avstøp", poeng: 1,
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    tekst: "En pasient har lavfrekvent tap på 55 dB HL ved 250 og 500 Hz. Hva sier forelesningens tommelfingerregel om minste ventilering?",
    figur: null,
    alternativer: [
      "Minst 3 mm",
      "Minst 2 mm",
      "Ventilering er ikke nødvendig for å unngå okklusjon",
      "Proppen må være helt åpen (dome)"
    ],
    riktig: 2, forklaring: "Ved lavfrekvent tap over 50 dB er ventilering ikke nødvendig for okklusjonens skyld. Ved terskler bedre enn 30 dB trengs minst 2 mm.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-OP05", emne: "AUT2200", eksamen: "Ørepropper og avstøp (24.08)", nr: 5, tema: "Ørepropper, proppeakustikk og avstøp", poeng: 1,
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    tekst: "Ved otoskopi før avstøp ser du at trommehinnen er perforert. Hva gjør du?",
    figur: null,
    alternativer: [
      "Tar avstøpet som vanlig, men med ekstra stor pad",
      "Tar ikke avstøp før det er klarert av lege",
      "Bruker tyntflytende masse",
      "Tar avstøpet med åpen munn"
    ],
    riktig: 1, forklaring: "Utspent eller perforert trommehinne er en kontraindikasjon. Det trengs klarering fra lege før avstøp.",
    fasit: "generert", sikkerhet: "høy"
  },
  {
    id: "S22-OP06", emne: "AUT2200", eksamen: "Ørepropper og avstøp (24.08)", nr: 6, tema: "Ørepropper, proppeakustikk og avstøp", poeng: 1,
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    tekst: "Avtrykket har en liten luftboble innenfor andre sving, men ellers er det fint. Hva gjør du?",
    figur: null,
    alternativer: [
      "Godtar det, fordi bobler alltid er uten betydning",
      "Fyller boblen med voks og sender avtrykket",
      "Godtar det, siden bobler kan tolereres etter andre sving",
      "Forlenger avtrykket manuelt"
    ],
    riktig: 2, forklaring: "Luftbobler, hull og manglende deler kan tolereres etter andre sving, men ikke ellers. Et avtrykk skal aldri forlenges manuelt.",
    fasit: "generert", sikkerhet: "middels"
  },
  {
    id: "S22-OP07", emne: "AUT2200", eksamen: "Ørepropper og avstøp (24.08)", nr: 7, tema: "Ørepropper, proppeakustikk og avstøp", poeng: 1,
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    tekst: "Hvorfor gir en lengre propp (kanal) høyere lydnivå i øregangen?",
    figur: null,
    alternativer: [
      "Fordi lydkanalen blir et horn",
      "Fordi restvolumet mellom propp og trommehinne blir mindre",
      "Fordi ventileringen blir større",
      "Fordi okklusjonen øker"
    ],
    riktig: 1, forklaring: "En lang kanal gir mindre restvolum, og samme lyd i et mindre volum gir høyere lydtrykk. En kort kanal gir større restvolum og lavere nivå.",
    fasit: "generert", sikkerhet: "høy"
  }
);

MUNTLIG.push(
  {
    id: "M22-HA01", emne: "AUT2200", type: "forklar", tema: "Høreapparattyper og komponenter", eksamen: "Hearing aid components (19.08)",
    kilde: "Generert fra forelesningene Introductory concepts (17.08) og Hearing aid components (19.08)",
    sporsmal: "Forklar hvordan et digitalt høreapparat er bygget opp, fra lyden treffer mikrofonen til den kommer inn i øregangen.",
    sjekkliste: [
      "Mikrofonen (elektret) gjør lyd om til et elektrisk signal, lineært",
      "Forforsterker og A/D-omformer: sampling og kvantisering",
      "Digital signalbehandling: frekvensspesifikk forsterkning, kompresjon, støyreduksjon, retning, tilpasning til lydmiljøet",
      "D/A-omformer og sluttforsterker",
      "Lydgiveren (receiver) gjør signalet om til lyd",
      "Ørepropp, dome eller skall fører lyden inn og påvirker akustikken",
      "Batteri gir strøm; telespole og DAI er alternative innganger",
      "Fordeler og ulemper med digital behandling (egenstøy, størrelse, fleksibilitet mot forsinkelse og strøm)"
    ],
    oppfolging: [
      { sporsmal: "Hvorfor er kompressoren viktig for en person med sensorinevralt tap?", svar: "Dynamikkområdet er redusert. Kompressoren gir mindre forsterkning til sterke lyder enn til svake, så lydene får plass mellom terskel og ubehag." },
      { sporsmal: "Hvor sitter lydgiveren i en RITE sammenlignet med en RITA?", svar: "I RITE sitter den i øregangen, i RITA i selve apparatet bak øret (lyden går gjennom en slange)." },
      { sporsmal: "Hva er egenstøy, og når merkes den?", svar: "Svak susing apparatet lager selv. Den merkes særlig i stille omgivelser og av dem med normal basshørsel." }
    ]
  },
  {
    id: "M22-OP01", emne: "AUT2200", type: "forklar", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08)",
    sporsmal: "Forklar hvordan ventilering, lydkanal og akustiske filtre påvirker lyden fra høreapparatet, og hvordan du velger ventilering.",
    sjekkliste: [
      "Ventileringen påvirker bassen, filtrene mellomfrekvensene og lydkanalen diskanten",
      "Akustisk masse: lave frekvenser slipper lettere gjennom en ventil; lengre og smalere ventil gir mer motstand",
      "Større ventil: mindre okklusjon, men mer feedback, mindre bassforsterkning og svakere støydemping og retning",
      "Okklusjonseffekten plager dem med bassterskler på 50 dB HL eller bedre",
      "Tommelfingerregel: tap over 50 dB i bassen trenger ikke vent; bedre enn 30 dB trenger minst 2 mm",
      "Velg ventilering mellom maks (ut fra ønsket forsterkning) og minimum (ut fra okklusjon)",
      "Lydkanal: horn gir mer diskant; lengre propp gir mindre restvolum og høyere nivå",
      "Filtre jevner ut topper i responsen"
    ],
    oppfolging: [
      { sporsmal: "Hva gjør du ved et bratt fallende tap der minimum og maksimum ventilering ikke passer sammen?", svar: "Forelesningen foreslår å prøve f.eks. variovent eller stepvent, og ta hensyn til feedbackkanselleringen i apparatet." },
      { sporsmal: "Hvordan skiller du okklusjon fra ampclusion?", svar: "Ved okklusjon kommer forsterkningen av egen stemme fra beinledning i den tette øregangen; ved ampclusion er det apparatets forsterkning i bassen. Det kan være vanskelig å skille, men REOR og justering av bassforsterkningen kan hjelpe." },
      { sporsmal: "Hvorfor kan en propp som går inn i den beinete delen av øregangen gi mindre okklusjon?", svar: "Forelesningen viser at okklusjonen minker betydelig når proppen går helt inn til den beinete delen. Ulempen kan være ubehag." }
    ]
  },
  {
    id: "M22-OP02", emne: "AUT2200", type: "scenario", tema: "Ørepropper, proppeakustikk og avstøp", eksamen: "Ørepropper og avstøp (24.08)",
    kilde: "Generert fra forelesning: Ørepropper og avstøp (24.08) og avtrykksguiden (BSA); eksamenstema «Avstøp av øre og bestilling av ørepropp»",
    sporsmal: "Du skal ta avstøp av øregangen til en voksen pasient og bestille en ørepropp til en BTE. Beskriv hvordan du gjør det steg for steg.",
    steg: [
      "Hygiene: vask eller sprit hendene og sjekk at utstyret er rengjort",
      "Otoskoper sittende med støtte mot pasientens hode; se etter kontraindikasjoner (mye cerumen, betennelse, perforert eller utspent trommehinne, radikaløre, timeglassform, ørehår)",
      "Velg riktig størrelse på pad eller bomull, og før den inn med lyspenn til eller forbi andre sving, med lillefingeren støttet mot hodet",
      "Kontroller med otoskop at paden dekker øregangen",
      "Bland to-komponentmassen raskt og jevnt (ca. 30 sekunder)",
      "Dra øremuslingen opp og bak, sprøyt inn masse med tuppen dekket av masse, trekk sprøyten ut jevnt og fyll hele concha",
      "Vent ca. 5 minutter; sjekk med neglen at massen er stivnet",
      "Ta ut: løsne vakuum ved å dra i øremuslingen, løsne helixlåsen og vri avtrykket fram mot ansiktet mens du følger med på pasienten",
      "Otoskoper igjen (rester, blødning) og kontroller avtrykket (lang kanal, ingen bobler før andre sving, hele concha)",
      "Fyll ut propperekvisisjonen: audiogram, proppetype og materiale, ventilering, lydkanal og eventuelle filtre",
      "Rengjør utstyr og hender"
    ],
    oppfolging: [
      { sporsmal: "Hvordan bestemmer du ventileringen på rekvisisjonen?", svar: "Ut fra tersklene ved 250 og 500 Hz (minimum for å unngå okklusjon) og ønsket forsterkning (maksimum før feedback og tap av bassforsterkning). Audiogrammet på rekvisisjonen hjelper også den som lager proppen." },
      { sporsmal: "Hva gjør du annerledes hos et barn under 5 år?", svar: "Erfaren audiograf, god informasjon til foreldrene, utstyr i riktig størrelse, nøye vurdering av hvor langt paden settes inn, barnet i fanget med kontroll på hendene, ofte to audiografer, og ett øre om gangen." },
      { sporsmal: "Hvordan kan du få en propp som sitter bedre?", svar: "Ta avstøpet med åpen munn, be om oppbygging (f.eks. flere lag lakk), bruk mer tyktflytende masse, eller trykk massen lett ned før den stivner." }
    ]
  }
);
