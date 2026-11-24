// Hvorfor de gale alternativene er feil – AUT2201. Vises i øvingen i flervalgsdelen.
//
// Nøkkel: spørsmålets id. Verdi: én tekst per alternativ, i samme rekkefølge som alternativene
// i spørsmålet (A, B, C, D). Det riktige alternativet har tom tekst "". Står det "" ved et galt
// alternativ, var vi ikke sikre nok på forklaringen, og da vises ingenting for det.
//
// Kildene er spørsmålets egen forklaring og fasit, Majas fasit med forklaringer (2026),
// forelesningsfilene som ligger i fagmappen, og faglitteratur ved tvil.
//
// Ligger i en egen fil, så spørsmålsfilene ikke endres.

var FEILFORKLARINGER = FEILFORKLARINGER || {};
function feilforklaring(id, tekster) { FEILFORKLARINGER[id] = tekster; }

// ---------- Høst 2025 ----------

feilforklaring("H25-001", [
  "For høyt. Den store majoriteten av de over 80 bor hjemme, ikke på institusjon.",
  "For høyt. Andelen på institusjon er rundt halvparten av dette.",
  "",
  "For høyt. Andelen på institusjon er langt lavere, rundt 10 %."
]);
feilforklaring("H25-002", [
  "Lavere terskel betyr ikke raskere hørestyrkevekst. Ved 1000 Hz ligger iso-phonkurvene lenger fra hverandre, så samme dB-økning gir mindre økning i hørestyrke.",
  "Begge tonene øker med 20 dB, men iso-phonkurvene ligger ikke like tett ved de to frekvensene, så de havner ikke på samme kurve etterpå.",
  "",
  "Det kan forutsies: iso-phonkurvene viser hvordan hørestyrken endrer seg med nivå ved hver frekvens."
]);
feilforklaring("H25-003", [
  "",
  "Introduksjonen gir bakgrunn og problemstilling, ikke en beskrivelse av deltakerne.",
  "Diskusjonen tolker funnene. Deltakerne kan nevnes der, men de beskrives i metodedelen.",
  "Resultatdelen kan gi tall om utvalget, men hvem som ble inkludert og hvordan, står i metoden."
]);
feilforklaring("H25-004", [
  "Å finne en effekt som faktisk finnes er en riktig konklusjon, ikke en feil.",
  "",
  "Å ikke finne en effekt som ikke finnes er en riktig konklusjon, ikke en feil.",
  "Å overse en reell effekt er type 2-feil (betafeil)."
]);
feilforklaring("H25-005", [
  "",
  "Vertikal lokalisering bygger på spektrale signaler fra pinna, ikke ITD. ITD brukes dessuten mest ved lave frekvenser.",
  "Elevasjon bestemmes hovedsakelig monauralt, ut fra hvordan pinna farger spekteret.",
  "MSO behandler ITD (tidsforskjeller). Det er LSO som behandler ILD."
]);
feilforklaring("H25-006", [
  "Uparet t-test er for to uavhengige grupper. Her er det de samme personene som måles to ganger.",
  "Fortegnstest er en ikke-parametrisk test. Med normalfordelte data er paret t-test sterkere og bedre egnet.",
  "Kji-kvadrat brukes for kategoriske data (frekvenser), ikke for å sammenligne gjennomsnitt.",
  ""
]);
feilforklaring("H25-007", [
  "Abstrakt tenkning er en kognitiv evne, men ikke det samme som å være bevisst på egen tenkning.",
  "Å se sammenhenger i et bredere perspektiv er helhetstenkning, ikke metakognisjon.",
  "",
  "Bevissthet om egne følelser er emosjonell selvinnsikt. Metakognisjon gjelder tenkningen."
]);
feilforklaring("H25-008", [
  "Et box plot alene viser ikke om dataene er normalfordelte, og streken sier ingenting om fordelingsformen.",
  "Streken i boksen er medianen, ikke gjennomsnittet. Gjennomsnittet vises ikke i et standard box plot.",
  "",
  "Skjevhet ses av boksens og værhårenes form, ikke av streken alene."
]);
feilforklaring("H25-009", [
  "Pasient 1 har 15, −5 og 10 dB HL, altså ingen terskel over 20 dB HL.",
  "Bare pasient 2 har en terskel over 20 dB HL (25 dB HL ved 500 Hz).",
  "",
  "Pasient 2 har 25 dB HL ved 500 Hz (30 − 5), som er over 20 dB HL."
]);
feilforklaring("H25-010", [
  "Dette er ikke tydelig feil: aksonene i auditiv cortex er voksenlike rundt 11–12 år. Myeliniseringen fortsetter riktignok inn i ungdomsårene, men utsagnet sier bare at cortex «kan» være moden.",
  "",
  "Dette stemmer: hørselsnerven er nesten moden ved fødselen.",
  "Dette stemmer: corpus callosum er blant de siste delene som modnes."
]);
feilforklaring("H25-011", [
  "Tidlig er symptomene anfallsvise og fluktuerende, ikke konstante.",
  "Betennelse i vestibularisnerven er vestibularisnevritt, ikke Ménière.",
  "",
  "Ménière har ingen kjent sammenheng med støyeksponering. Det er støyskade som kan komme etter støy."
]);
feilforklaring("H25-012", [
  "",
  "Forekomsten av hørselstap øker med alderen, så 75-åringene har høyere forekomst enn 65-åringene.",
  "Figuren viser motsatt: menn har høyere forekomst enn kvinner.",
  "Menn har høyere forekomst enn kvinner også i de eldste gruppene."
]);
feilforklaring("H25-013", [
  "Eksperiment er et kvantitativt design der man måler effekten av en manipulert variabel.",
  "",
  "Spørreskjema med faste svaralternativer gir tallfestbare data og er typisk kvantitativt.",
  "Tverrsnittstudier måler mange personer på ett tidspunkt og er kvantitative."
]);
feilforklaring("H25-014", [
  "",
  "The Line er et av Ida Institutes motivasjonsverktøy (skala for hvor viktig endring er og hvor trygg man er på å klare det).",
  "The Box er et av Ida Institutes motivasjonsverktøy (fordeler og ulemper ved å endre seg eller ikke).",
  "The Circle er et av Ida Institutes motivasjonsverktøy (hvor i endringsprosessen personen er)."
]);
feilforklaring("H25-015", [
  "",
  "Efferente fibre demper de ytre hårcellenes forsterkning. De forsterker ikke signalet.",
  "Hovedrollen er demping, beskyttelse og bedre signal i støy, ikke bedre tidsoppløsning.",
  "Overføring fra øret til hjernen skjer i de afferente banene. Efferente baner går fra hjernen til øret."
]);
feilforklaring("H25-016", [
  "Motsatt: det er de ytre hårcellene som har elektromotilitet. De indre er sanseceller.",
  "",
  "Efferente fibre kan modulere motiliteten, men den skyldes prestin og reseptorpotensialet, ikke efferent aktivitet.",
  "Spontane OAE tyder på fungerende ytre hårceller, ikke døde regioner."
]);
feilforklaring("H25-017", [
  "Å løse problemet er problemfokusert mestring.",
  "Å oppsøke hjelp for å løse problemet er problemfokusert (eller sosial støttesøkende) mestring.",
  "Å prøve igjen er å angripe selve problemet, altså problemfokusert mestring.",
  ""
]);
feilforklaring("H25-018", [
  "Å høre lyd (deteksjon) er en sensorisk bottom-up-prosess.",
  "",
  "Å skille rentoner er sensorisk diskriminasjon, altså bottom-up.",
  "Å gjengi tale er en motorisk/språklig handling, ikke selve top-down-tolkningen."
]);
feilforklaring("H25-019", [
  "Talekanalens dimensjoner påvirker formantene, men det vi hører og gjenkjenner, er formantmønsteret.",
  "Avstanden mellom deltonene bestemmes av grunntonen og gir tonehøyde, ikke vokalkvalitet.",
  "Grunntonen gir stemmens tonehøyde. Samme vokal kan sies med ulik grunntone.",
  ""
]);
feilforklaring("H25-020", [
  "Dette stemmer: LOC-fibrene ender ved de afferente fibrene under de indre hårcellene.",
  "",
  "Dette stemmer: LOC-fibrene er umyeliniserte.",
  "Dette stemmer: LOC-fibrene går hovedsakelig ipsilateralt."
]);
feilforklaring("H25-021", [
  "",
  "Anterior (foran) og inferior (nedenfor) er retningsbetegnelser fra ulike akser, ikke to halvdeler fra ett plan.",
  "Høyre og venstre deles av sagittalplanet.",
  "Lateral og medial er retningsbetegnelser (ut mot siden / inn mot midten), ikke et snitt."
]);
feilforklaring("H25-022", [
  "Nedsatt motorikk er ikke en kognitiv konsekvens.",
  "",
  "Isolasjon er en sosial konsekvens. Den kan bidra til kognitiv svikt, men er ikke selv kognitiv.",
  "Dette er en perifer, sensorisk endring, ikke en kognitiv konsekvens."
]);
feilforklaring("H25-023", [
  "Å avvente kan være en hensiktsmessig strategi og regnes ikke som umoden.",
  "Humor regnes som en moden mestringsstrategi.",
  "Å refortolke (se situasjonen på en ny måte) regnes som en moden strategi.",
  ""
]);
feilforklaring("H25-024", [
  "Trygghet og tilhørighet er blant Holtes psykiske helserettigheter slik de gjengis i pensum.",
  "",
  "Deltakelse og fellesskap er blant Holtes psykiske helserettigheter slik de gjengis i pensum.",
  "Mening og mestring er blant Holtes psykiske helserettigheter slik de gjengis i pensum."
]);
feilforklaring("H25-025", [
  "Standard NAL-NL2-target tar ikke hensyn til døde regioner, så forsterkningen bør tilpasses.",
  "Høyere MPO gir ikke hørbarhet i en død region. Det kan bare gi mer forvrengning og ubehag.",
  "",
  "Mer forsterkning i en død region gir lite nytte og kan forverre taleforståelse og lydkvalitet."
]);
feilforklaring("H25-026", [
  "Punktene faller fra venstre mot høyre, så korrelasjonen er negativ.",
  "",
  "Punktene faller fra venstre mot høyre, så korrelasjonen er negativ, ikke positiv.",
  "Punktene ligger tett rundt en fallende linje (r ≈ −0,93), så det er en sterk sammenheng."
]);
feilforklaring("H25-027", [
  "",
  "ITD er tidsforskjeller på mikrosekunder og krever svært presis tidsprosessering.",
  "Tale i støy krever god tidsoppløsning, f.eks. for å lytte i hullene i støyen.",
  "Gap detection måler nettopp tidsoppløsning."
]);
feilforklaring("H25-028", [
  "Dette stemmer: god frekvensselektivitet reduserer maskering mellom frekvensbånd.",
  "Dette stemmer: tonotopien på basilarmembranen er grunnlaget for frekvensselektiviteten.",
  "",
  "Dette stemmer: bredere auditive filtre gir mer maskering og dårligere taleforståelse."
]);
feilforklaring("H25-029", [
  "",
  "Cochleariskjernen er der fibrene ender (i hjernestammen), ikke der signalet kommer fra.",
  "Basilarmembranen sender ikke signaler selv. Det er hårcellene som omdanner bevegelsen.",
  "Ytre hårceller innerveres av type II-fibrene, som bare er 5–10 %."
]);
feilforklaring("H25-030", [
  "",
  "Ratioskala krever et absolutt nullpunkt. 0 dB HL er ikke fravær av hørsel, og negative verdier finnes.",
  "Nominalskala er kategorier uten rekkefølge. dB HL er tall med like intervaller.",
  "Ordinalskala har rekkefølge, men ulike avstander. dB HL har like intervaller."
]);
feilforklaring("H25-031", [
  "Spørreskjema er hovedsakelig en kvantitativ metode.",
  "Eksperiment og tverrsnittstudier er kvantitative design.",
  "Intervju er kvalitativt, men spørreskjema er hovedsakelig kvantitativt.",
  ""
]);
feilforklaring("H25-032", [
  "",
  "Nominalskala har ingen rekkefølge, men mildt < moderat < alvorlig har det.",
  "Intervallskala krever like avstander. Avstanden mellom kategoriene er ikke lik.",
  "Ratioskala krever like avstander og et absolutt nullpunkt."
]);
feilforklaring("H25-033", [
  "Et degradert talesignal er motsatt av redundans: det har mindre overflødig informasjon.",
  "Overføring mellom hjernehalvdelene går via corpus callosum. Det er én del av systemet, ikke selve begrepet.",
  "",
  "Overlappende akustiske og språklige signaler er ekstrinsisk redundans (i talesignalet)."
]);
feilforklaring("H25-034", [
  "Lateral lemniscus er en nervebane i hjernestammen, ikke en del av thalamus.",
  "Corpus callosum forbinder hjernehalvdelene og ligger ikke i thalamus.",
  "Inferior colliculus ligger i midthjernen, ikke i thalamus.",
  ""
]);
feilforklaring("H25-035", [
  "Dette beskriver vanlig maskering. Poenget med TEN er at den maskerte terskelen blir lik på alle frekvenser når det ikke er døde regioner, så et avvik blir tydelig.",
  "TEN skiller ikke mekaniske fra nevrale årsaker. Den viser om indre hårceller/nevroner fungerer ved testfrekvensen.",
  "",
  "Hensikten er ikke å sammenligne absolutte terskler med maskerte direkte. Den maskerte terskelen sammenlignes med TEN-nivået."
]);
feilforklaring("H25-036", [
  "Effekter av sosiale og miljømessige faktorer er sekundær aldring.",
  "Effekter av livsstil er sekundær aldring.",
  "Redusert helse som følge av sykdom er sekundær aldring.",
  ""
]);
feilforklaring("H25-037", [
  "Dette stemmer: cVEMP måler sacculus.",
  "Dette stemmer: oVEMP måler utriculus.",
  "",
  "Dette stemmer: VEMP går via vestibulærorganet, så døve kan ha normale VEMP."
]);
feilforklaring("H25-038", [
  "Frigjøringen øker med lydnivået. Under hørselsterskelen gir den ingen meningsfull respons.",
  "Ribbon-synapsene frigjør glutamat, ikke acetylkolin. Acetylkolin brukes av efferente fibre.",
  "",
  "Ribbon-synapsene sitter i de indre hårcellene, ikke de ytre."
]);
feilforklaring("H25-039", [
  "Kompleansmåling (timpanometri) er en mekanisk måling av mellomøret.",
  "Akustisk refleks er en refleks i hjernestammen, ikke en læringsprosess.",
  "",
  "Lydbølgeforplantning er fysikk og skjer uten hjernens medvirkning."
]);
feilforklaring("H25-040", [
  "Dette stemmer: standardavviket viser spredningen rundt gjennomsnittet.",
  "Dette stemmer: standardavvik er et spredningsmål.",
  "Dette stemmer for normalfordelte data: ca. 68 % ligger innenfor ±1 SD.",
  ""
]);
feilforklaring("H25-041", [
  "Forsterkningsmekanismene i cochlea (ytre hårceller) øker ikke støyfølsomheten lokalt.",
  "TEN har ikke høyere spektral tetthet i døde regioner. Støyen er den samme, det er mottakeren som mangler.",
  "Lyden absorberes ikke av hårcellene. Basilarmembranen beveger seg, men det er ingen fungerende indre hårceller der som kan registrere det.",
  ""
]);
feilforklaring("H25-042", [
  "",
  "VOR er en vestibulær refleks som stabiliserer blikket.",
  "VSR er en vestibulær refleks som hjelper oss å holde balansen.",
  "VCR er en vestibulær refleks som stabiliserer hodet, og er grunnlaget for cVEMP."
]);
feilforklaring("H25-043", [
  "",
  "Cochlea er et perifert sanseorgan med liten plastisitet.",
  "Hørselsnerven har begrenset plastisitet sammenlignet med de høyere nivåene.",
  "SOC er et tidlig nivå i hjernestammen med mindre plastisitet enn cortex."
]);
feilforklaring("H25-044", [
  "",
  "Normal BILD er mindre, rundt 3–6 dB. 15 dB er størrelsen på den største MLD for toner.",
  "BILD måles med tale (bredbånd) og avhenger ikke av én testfrekvens. Det er MLD som avhenger av frekvens.",
  "Motsatt: BMLD (opptil ca. 15 dB) er generelt større enn BILD."
]);
feilforklaring("H25-045", [
  "Dette er kjernen i Goffmans stigmabegrep.",
  "",
  "Dette stemmer: stigma skapes i samspillet med omgivelsenes reaksjoner.",
  "Dette stemmer: Goffman beskriver et gap mellom faktisk og tilskrevet identitet."
]);
feilforklaring("H25-046", [
  "Off-frequency listening skjer når tonen faller i en død region, ikke utenfor.",
  "Forsterkning bare i diskanten, der de døde regionene er, gir lite nytte. Forsterkningen der bør begrenses.",
  "TEN-testen sier noe om indre hårceller og nevroner, ikke om de ytre hårcellene.",
  ""
]);
feilforklaring("H25-047", [
  "",
  "Normale vestibulære reflekser gir ikke nystagmus i ro uten stimulering.",
  "Nystagmus etter en bevegelse er provosert, ikke spontan.",
  "Nystagmus etter rotasjon er provosert, ikke spontan."
]);
feilforklaring("H25-048", [
  "Både omgivelsenes stigmatisering og egne holdninger har betydning.",
  "Både egne holdninger og omgivelsenes stigmatisering har betydning.",
  "",
  "Motsatt: mer opplevd stigma gir lavere motivasjon for å bruke høreapparat."
]);
feilforklaring("H25-049", [
  "De med store tap får oftere tilrettelegging og er mer åpne, og rapporterer ikke mest slitasje ifølge forskningen.",
  "Tilrettelegging fra NAV reduserer belastningen, så denne gruppen har ikke mest slitasje.",
  "",
  "Åpenhet gjør det lettere å få tilrettelegging og gir mindre belastning, ikke mer."
]);
feilforklaring("H25-050", [
  "ICF skiller mellom dem, selv om de står i samme komponent.",
  "Motsatt og feil: aktivitet er utførelse av oppgaver, deltakelse er involvering i livssituasjoner.",
  "",
  "ICF måler begge, og ingen av dem er definert som alltid observerbar eller umålbar."
]);
feilforklaring("H25-051", [
  "Målet er ikke færrest mulig deltakere, men nok til å belyse problemstillingen.",
  "Kvalitativ forskning søker dybde og overførbarhet, ikke statistisk generalisering med store utvalg.",
  "Tilfeldig utvalg brukes i kvantitativ forskning. Kvalitative utvalg er strategiske.",
  ""
]);
feilforklaring("H25-052", [
  "Ved otosklerose dempes signalet gjennom mellomøret, så DPOAE blir svake eller borte.",
  "",
  "DPOAE er bedre enn TEOAE for basen (høye frekvenser).",
  "Både TEOAE og DPOAE kan måles hos nyfødte."
]);
feilforklaring("H25-053", [
  "Emosjonsregulering og mestring er måter å håndtere stress på, men ikke de klassiske faktorene som demper opplevelsen av stress.",
  "",
  "Dette kan hjelpe i rehabilitering, men det er ikke de generelle faktorene som demper stressopplevelsen.",
  "Krav om produktivitet og prestasjon kan heller øke stress."
]);
feilforklaring("H25-054", [
  "Hodestørrelsen påvirker både ITD og ILD. Pinna er viktigst for vertikal lokalisering.",
  "",
  "Et mindre hode gir mindre hodeskygge ved lave frekvenser, så ILD blir dårligere, ikke bedre.",
  "Et mindre hode gir kortere ITD, altså mindre tidsforskjeller å bruke."
]);
feilforklaring("H25-055", [
  "Target beregnes for hele talespekteret, ikke bare lavfrekvent taleenergi.",
  "Omvendt: LTASS viser gjennomsnittet. Taletoppene ligger 12–15 dB høyere, og det er nettopp derfor target kan ligge under terskel.",
  "Ikke helt feil: forelesningen nevner døde regioner og lydkvalitet som grunner. D er valgt fordi det er den mest generelle forklaringen.",
  ""
]);
feilforklaring("H25-056", [
  "C står ikke for Communicate. ABC = Act, Belong, Commit.",
  "",
  "C står ikke for Control. ABC = Act, Belong, Commit.",
  "C står ikke for Conform. ABC = Act, Belong, Commit."
]);
feilforklaring("H25-057", [
  "Dette stemmer: MOC-fibrene er myeliniserte.",
  "",
  "Dette stemmer: MOC-fibrene krysser hovedsakelig over.",
  "Dette stemmer: MOC-fibrene synapser på de ytre hårcellene."
]);
feilforklaring("H25-058", [
  "",
  "Reflekser styres i hjernestammen og avhenger ikke av corpus callosum.",
  "Høreterskler bestemmes perifert og påvirkes ikke av corpus callosum.",
  "Språktilegnelse avhenger av mange områder. Corpus callosum er spesifikt knyttet til samarbeid mellom hjernehalvdelene."
]);
feilforklaring("H25-059", [
  "Nervefibrene kan ikke følge fasen til høyfrekvente toner, så de egner seg dårlig til å se tidsmønster.",
  "Elektriske impulser er ikke akustiske stimuli og omgår øret.",
  "Lavfrekvente toner kan vise faselåsing, men klikk er standard for å studere timing og responsmønster.",
  ""
]);
feilforklaring("H25-060", [
  "",
  "Bestått/ikke bestått er kategorier, ikke tall med like avstander.",
  "Bestått/ikke bestått har ingen meningsfull rangering slik ordinalskala krever.",
  "Ratioskala er tall med absolutt nullpunkt. Screeningkonklusjonen er en kategori."
]);
feilforklaring("H25-061", [
  "RCT ligger høyt, men under systematiske oversikter og metaanalyser, som samler flere RCT-er.",
  "Kohortstudier ligger under RCT og metaanalyser.",
  "",
  "Tverrsnittstudier ligger lavere i hierarkiet enn kohortstudier, RCT og metaanalyser."
]);
feilforklaring("H25-062", [
  "Objektivitet og en utskiftbar forsker er naturvitenskapelige idealer.",
  "Krav til validitet og reliabilitet kommer fra den naturvitenskapelige (kvantitative) tradisjonen.",
  "",
  "Dette er et klinisk/praktisk utsagn og hører ikke spesifikt til den humanvitenskapelige tradisjonen."
]);
feilforklaring("H25-063", [
  "Signifikansnivået bestemmes på forhånd og skal ikke endres etter resultatet.",
  "",
  "p < α betyr at nullhypotesen forkastes, ikke aksepteres.",
  "Resultatet er allerede signifikant. Utvalget økes ikke for å oppnå signifikans i ettertid."
]);
feilforklaring("H25-064", [
  "",
  "Forsterkning løfter lyden, men utvider ikke dynamikkområdet. Ubehagsterskelen er den samme.",
  "Lineær forsterkning kompenserer ikke for unormal hørestyrkevekst (rekruttering). Sterke lyder kan bli for sterke.",
  "Forsterkning reduserer ikke evnen til top-down-prosessering. Bedre hørbarhet frigjør heller kognitive ressurser."
]);
feilforklaring("H25-065", [
  "Dette er en selvstereotypi (negativ): å tro at man er for gammel til å forstå.",
  "Dette er en selvstereotypi (negativ): at eldre kvinner ser uverdige ut i korte skjørt.",
  "",
  "Dette er en selvstereotypi (positiv): at eldre har mye visdom."
]);
feilforklaring("H25-066", [
  "Nevropati gjelder perifere nerver generelt og handler ikke om ryggmargsresponser.",
  "Nevropati er en sykdom i nervene, ikke et begrep for hypokondri.",
  "Motsatt: ved auditiv nevropati er taleforståelsen typisk dårligere enn audiogrammet tilsier.",
  ""
]);
feilforklaring("H25-067", [
  "Tabeller er deskriptiv statistikk.",
  "Å visualisere fordelingen er deskriptiv statistikk.",
  "Grafisk presentasjon er deskriptiv statistikk.",
  ""
]);
feilforklaring("H25-068", [
  "",
  "Prosedyrisk hukommelse gjelder ferdigheter (f.eks. sykle) og har liten betydning for å forstå tale.",
  "Langtidsminnet er viktig for ordforråd, men arbeidsminnet er det som begrenser taleforståelse, særlig i støy.",
  "Sensorisk hukommelse er en svært kortvarig buffer og er ikke det som skiller mest mellom personer i taleforståelse."
]);
feilforklaring("H25-069", [
  "Ved mekanisk (konduktivt) tap dempes lyden jevnt, og hørestyrkeveksten er normal.",
  "",
  "Ved normal hørsel er hørestyrkeveksten normal. Recruitment er unormalt rask vekst.",
  "Retrocochleær patologi gir heller decruitment eller unormal adaptasjon, ikke recruitment."
]);
feilforklaring("H25-070", [
  "Venstre øre har normal terskel og normal hørestyrkevekst. Ingenting tyder på hyperakusis.",
  "Venstre øre hører best: terskelen er 0 dB mot 40 dB på høyre.",
  "Det er høyre øre som har unormal (rask) hørestyrkevekst. Venstre er normalt.",
  ""
]);
feilforklaring("H25-071", [
  "Korrelasjon er et statistisk mål, altså et kvantitativt spørsmål.",
  "Sannsynlighet for å utvikle tinnitus i en gruppe måles kvantitativt (risiko, prevalens).",
  "Å sammenligne effekten av to behandlinger er et kvantitativt spørsmål, typisk en RCT.",
  ""
]);
feilforklaring("H25-072", [
  "Metasyntese sammenstiller kvalitative studier, altså sekundærforskning.",
  "Metaanalyse slår sammen resultater fra flere studier, altså sekundærforskning.",
  "En systematisk oversikt bygger på andres studier, altså sekundærforskning.",
  ""
]);
feilforklaring("H25-073", [
  "Høyreørefordel er et begrep fra dikotisk lytting, ikke ABLB.",
  "",
  "ABLB krever et ensidig hørselstap å sammenligne med, og brukes ikke på normalthørende.",
  "ABLB gir informasjon om hørestyrkevekst, ikke et forsterkningstarget."
]);
feilforklaring("H25-074", [
  "",
  "p-verdien ved 750 Hz er under 0,05, så forskjellen er signifikant der også.",
  "Ved 1 %-grensen er flere frekvenser enn 3000 Hz signifikante (f.eks. p = 0,009, 0,008 og 0,006).",
  "Motsatt: standardavviket er større i gruppa med døde regioner."
]);
feilforklaring("H25-075", [
  "Dette stemmer: hørselstap gir økt risiko for psykiske plager.",
  "",
  "Dette stemmer: personer med alvorlig hørselstap eller døvhet er mer utsatt for traumatiske hendelser.",
  "Dette stemmer: tinnitus og angst henger sammen, og behandling av det ene kan lette det andre."
]);
feilforklaring("H25-076", [
  "Det er en gitt sammenheng: den lange halen trekker gjennomsnittet i halens retning.",
  "",
  "Dette gjelder negativ skjevhet (lang hale mot venstre).",
  "Gjennomsnitt og median er like bare når fordelingen er symmetrisk."
]);
feilforklaring("H25-077", [
  "Endringer i blodtilførsel (stria vascularis) kan bidra, men forklarer ikke hvorfor tapet starter i diskanten.",
  "Nevralt tap forekommer, men det diskantpregede tapet skyldes at basis av cochlea rammes først.",
  "",
  "Apex koder de lave frekvensene, så endringer der gir basstap."
]);
feilforklaring("H25-078", [
  "Fortrenging (å skyve noe ut av bevisstheten) er en klassisk forsvarsmekanisme.",
  "Forskyvning (å rette følelser mot noe tryggere) er en klassisk forsvarsmekanisme.",
  "",
  "Intellektualisering (å håndtere følelser med fornuft og fakta) er en klassisk forsvarsmekanisme."
]);
feilforklaring("H25-079", [
  "Tuppen på kurven ligger ved en annen frekvens enn stimulus. Det er ikke normalt.",
  "",
  "Det avgjørende er at tuppen er forskjøvet bort fra stimulusfrekvensen. Det tyder på en død region.",
  "En psykoakustisk tuningkurve sier ingenting om DPOAE-verdier."
]);
feilforklaring("H25-080", [
  "",
  "Dette stemmer: tuningkurven viser hvilke frekvenser og nivåer et enkeltnevron svarer på.",
  "Dette stemmer: hver fiber er mest følsom ved sin plass, som viser stedskodingen.",
  "Dette stemmer: frekvensen der terskelen er lavest kalles den karakteristiske frekvensen (CF)."
]);
feilforklaring("H25-081", [
  "Grå substans finnes også i hjernen, bl.a. i cortex og i kjerner i hjernestammen.",
  "Rask ledning over lange avstander er hvit substans (myeliniserte aksoner).",
  "Myeliniserte aksoner er hvit substans.",
  ""
]);
feilforklaring("H25-082", [
  "Spredningen for innstikkstelefoner ved 500 Hz er større enn for hodetelefoner ved 1000 Hz i figuren.",
  "Spredningen ved 4000 Hz er større enn ved 1000 Hz med hodetelefoner.",
  "Spredningen ved 250 Hz med hodetelefoner er større enn ved 1000 Hz.",
  ""
]);
feilforklaring("H25-083", [
  "En topp og deretter nedgang beskriver ikke-monotone fibre.",
  "",
  "Metning beskriver ikke forskjellen. Det som skiller, er at ikke-monotone fibre fyrer mindre ved høye nivåer.",
  "Monotone fibre finnes i alle frekvensområder. Begrepet handler om respons på intensitet, ikke frekvens."
]);
feilforklaring("H25-084", [
  "Uunngåelige endringer hører til primær aldring.",
  "",
  "Sekundær aldring er bredere: endringer som skyldes sykdom, livsstil og miljø, ikke bare arvelige sykdommer.",
  "Uunngåelige kroppslige endringer er primær aldring."
]);
feilforklaring("H25-085", [
  "",
  "Refraktærperioden er ca. 1 ms, så én fiber kan fyre maks ca. 1000 ganger i sekundet, ikke 6000.",
  "Frekvens kodes både med stedskode og med tidskode (faselåsing) ved lave frekvenser.",
  "Over ca. 4–5 kHz forsvinner faselåsingen, så høye frekvenser kodes med stedskode."
]);
feilforklaring("H25-086", [
  "DPOAE kan måles fra store deler av cochlea, også basis (høye frekvenser).",
  "DPOAE kan måles godt over 4 kHz.",
  "",
  "DPOAE er et objektivt mål. Pasienten trenger ikke å svare."
]);
feilforklaring("H25-087", [
  "Hodebevegelser kan hjelpe lokalisering, men ITD-prosesseringen i hjernestammen bygger ikke på dem.",
  "Ulike aksonlengder (forsinkelseslinjer) er Jeffress-modellen, som passer best for fugler. Hos pattedyr er det lite støtte for et slikt kart.",
  "MSO-cellene fungerer som koinsidensdetektorer, men eksitasjon alene er ikke hele forklaringen. Hos pattedyr former presist tidsstyrt inhibisjon ITD-følsomheten, og det er det svaret vektlegger.",
  ""
]);
feilforklaring("H25-088", [
  "",
  "Ved mekanisk tap er hørestyrkeveksten normal, så SISI-skåren blir lav.",
  "Normalthørende oppfatter få 1 dB-økninger ved 20 dB SL.",
  "Retrocochleær patologi gir lav SISI-skår."
]);
feilforklaring("H25-089", [
  "",
  "Omfang, fordeling og effekt er kvantitative spørsmål.",
  "Statistisk signifikans og generalisering hører til kvantitativ metode.",
  "Store utvalg og gjennomsnitt hører til kvantitativ metode."
]);
feilforklaring("H25-090", [
  "NBSPH er en tjeneste for psykisk helse, ikke for diagnostisering og høreapparattilpasning.",
  "Kommunikasjonen tilpasses den enkelte. Tjenesten er ikke begrenset til syns- og tegnspråktolkning.",
  "",
  "Tjenesten gjelder sansetap generelt (hørsel, syn eller begge), ikke bare kombinert syns- og hørselstap."
]);
feilforklaring("H25-091", [
  "Ved 2000 Hz er taleenergien lavere. LTASS faller av mot de høye frekvensene.",
  "",
  "Dette er omtrent grunntonen til menn og kvinner, men toppen i LTASS ligger rundt 500 Hz. Kjønnene er dessuten byttet om.",
  "Dette er omtrent grunntonen til menn og kvinner, men toppen i LTASS ligger rundt 500 Hz."
]);
feilforklaring("H25-092", [
  "Ved Ménière er VEMP oftest normale eller reduserte, ikke unormalt store.",
  "Ved otosklerose stopper mellomøret lyden, så VEMP blir svake eller borte.",
  "",
  "BPPV skyldes løse krystaller i buegangene og gir ikke unormalt store VEMP."
]);
feilforklaring("H25-093", [
  "",
  "Normalfordelte data er en forutsetning for parametriske tester, ikke en grunn til å la være.",
  "Homogen varians er en forutsetning for parametriske tester.",
  "Ratioskalerte data passer godt til parametriske tester."
]);
feilforklaring("H25-094", [
  "Normalthørende oppfatter de fleste 1 dB-økningene ved høyt nivå.",
  "Ved mekanisk tap oppfattes de fleste økningene ved høyt nivå, siden cochlea er normal.",
  "",
  "Ved cochleært tap oppfattes de fleste økningene, så skåren blir høy, ikke 15 %."
]);
feilforklaring("H25-095", [
  "En RCT tester effekten av et tiltak, ikke hvor vanlig en tilstand er.",
  "",
  "En metaanalyse slår sammen andre studier og er ikke selv en metode for å måle prevalens i en populasjon.",
  "Kohortstudier følger folk over tid og måler insidens (nye tilfeller), ikke prevalens."
]);
feilforklaring("H25-096", [
  "Den maskerte terskelen må også være minst 10 dB over TEN-nivået.",
  "",
  "Det finnes ikke noe slikt krav om 70 dB HL. Kriteriet gjelder den maskerte terskelen.",
  "Den maskerte terskelen må også være minst 10 dB over den absolutte terskelen."
]);
feilforklaring("H25-097", [
  "",
  "Kjønn er en uavhengig variabel som terskelen sees i forhold til.",
  "Alder er en uavhengig variabel som terskelen sees i forhold til.",
  "Frekvens er en uavhengig variabel (x-aksen)."
]);
feilforklaring("H25-098", [
  "S, skj, f og ustemte plosiver har mest energi over 1000 Hz, der lytteren hører dårlig.",
  "F2 og alveolært locus ligger over 1000 Hz.",
  "Artikulasjonssted kodes av høyfrekvente signaler (formantoverganger og støyspekter).",
  ""
]);
feilforklaring("H25-099", [
  "",
  "Ved 58 år bor færre enn halvparten av kvinnene alene.",
  "Ved 92 år er det mer sannsynlig å bo alene, men kurven passerte 50 % tidligere, rundt 80 år.",
  "Ved 23 år bor bare ca. 39 % alene, altså under halvparten."
]);
feilforklaring("H25-100", [
  "",
  "Common cause sier ingenting om at høreapparater reverserer noe.",
  "At hørselstap direkte forverrer kognisjonen er cascade-hypotesen.",
  "Sosial isolasjon som årsak er en del av cascade-hypotesen, ikke common cause."
]);

// ---------- Eksamensøving ----------

feilforklaring("EA-001", [
  "Det er de indre hårcellene som sender hoveddelen av informasjonen. Ca. 90–95 % av nervefibrene går til dem.",
  "",
  "Mellomøret er luftfylt og har ikke væsketrykk som reguleres av hårcellene.",
  "Hårcellene i cochlea er en del av hørselen, ikke det vestibulære systemet."
]);
feilforklaring("EA-002", [
  "Myosin finnes i stereociliene og spiller en rolle i mekanotransduksjonen, men er ikke motorproteinet for elektromotilitet.",
  "Otoferlin hører til ribbon-synapsene i de indre hårcellene.",
  "",
  "Keratin er et strukturprotein i hud, hår og negler."
]);
feilforklaring("EA-006", [
  "Motsatt: uten de ytre hårcellenes aktive forsterkning blir filteret bredere.",
  "",
  "Filteret blir bredere og mindre skarpt, men forsvinner ikke.",
  "De ytre hårcellene skjerper filteret, så skade på dem påvirker det."
]);
feilforklaring("EA-007", [
  "Redusert frekvensselektivitet gjør ikke lave lyder uhørbare. Problemet er at frekvensene blandes.",
  "",
  "Lydens hastighet bestemmes av mediet (luften), ikke av øret.",
  "Grunntonen finnes fortsatt i signalet. Bredere filtre gjør det bare vanskeligere å skille lydene fra hverandre."
]);
feilforklaring("EA-008", [
  "Ytre øre har ingenting med døde regioner å gjøre. Begrepet gjelder cochlea.",
  "",
  "Døde regioner gir manglende følsomhet, ikke økt.",
  "Basilarmembranen kan bevege seg som normalt. Det er registreringen (indre hårceller/nevroner) som svikter."
]);
feilforklaring("EA-009", [
  "Mellomøretrykk måles med timpanometri.",
  "Vestibularisnevritt diagnostiseres med vestibulære tester, f.eks. hodeimpulstest og kalorisk prøve.",
  "",
  "Stapediusrefleksen måles med refleksmåling (akustisk refleks)."
]);
feilforklaring("EA-011", [
  "Off-frequency listening skjer i cochlea, ikke via det vestibulære systemet.",
  "",
  "Det gjelder ikke bare lave frekvenser. Tonen fanges opp av fungerende hårceller med en annen karakteristisk frekvens.",
  "Hørselsnerven sender aksjonspotensialer, men fra et annet sted i cochlea enn tonens frekvens."
]);
feilforklaring("EA-013", [
  "Elektriske signaler fra hørselsnerven måles med f.eks. ABR, ikke som OAE.",
  "",
  "Reflekser fra mellomøremusklene måles med akustisk refleksmåling.",
  "OAE kommer fra de ytre hårcellene i cochlea, ikke fra vestibularisnerven."
]);
feilforklaring("EA-016", [
  "Ribbon-synapsene regulerer ikke væsketrykk. De frigjør nevrotransmitter.",
  "",
  "Det er de ytre hårcellene som forsterker basilarmembranens bevegelser.",
  "Endolymfen produseres av stria vascularis."
]);
feilforklaring("EA-017", [
  "Dopamin finnes i noen efferente fibre (LOC), men er ikke hovedtransmitteren fra indre hårceller.",
  "Serotonin er ikke hovedtransmitteren i synapsen mellom indre hårcelle og hørselsnerve.",
  "",
  "Acetylkolin brukes av de efferente fibrene, ikke av de indre hårcellene."
]);
feilforklaring("EA-018", [
  "Intensitet over tid er en tidskurve, ikke en tuningkurve.",
  "",
  "Mellomøretrykk måles med timpanometri.",
  "Taleforståelse ved ulike nivåer er en taleaudiometrisk kurve (f.eks. PI-kurve)."
]);
feilforklaring("EA-019", [
  "Ulike frekvenser gir maksimalt utslag på ulike steder, så de behandles ikke likt over hele membranen.",
  "",
  "Motsatt: lave frekvenser representeres apikalt.",
  "Frekvensanalysen starter allerede i cochlea."
]);
feilforklaring("EA-020", [
  "Det blir smalere, ikke bredere, fordi terskelen stiger mens ubehagsgrensen står omtrent stille.",
  "Terskelen stiger, så området mellom terskel og ubehagsgrense endres.",
  "",
  "Det blir smalere, men forsvinner ikke helt."
]);
feilforklaring("EA-021", [
  "Motsatt: afferente baner går fra cochlea mot hjernen.",
  "Motsatt: det er de afferente banene som fører lydinformasjonen til cortex.",
  "",
  "Begge går videre opp og ned i systemet, ikke bare mellom cochlea og hjernestammen."
]);
feilforklaring("EA-022", [
  "MGB i thalamus er en senere stasjon, rett før cortex.",
  "",
  "Auditiv cortex er siste stasjon i den afferente banen.",
  "Inferior colliculus i midthjernen kommer etter cochleariskjernene og olivekomplekset."
]);
feilforklaring("EA-024", [
  "",
  "Cochlea er det perifere sanseorganet, ikke en del av midthjernen.",
  "Cortis organ ligger i cochlea.",
  "Utriculus er et vestibulært organ i det indre øret."
]);
feilforklaring("EA-025", [
  "LSO behandler interaurale nivåforskjeller (ILD).",
  "",
  "Stria vascularis produserer endolymfe og det endocochleære potensialet.",
  "Sacculus er et vestibulært organ som registrerer lineær akselerasjon."
]);
feilforklaring("EA-026", [
  "",
  "MSO behandler interaurale tidsforskjeller (ITD).",
  "Corpus callosum forbinder hjernehalvdelene og beregner ikke ILD.",
  "Basilarmembranen gjør frekvensanalyse i hvert øre for seg og sammenligner ikke ørene."
]);
feilforklaring("EA-030", [
  "Hos mennesker dannes det ikke nye hårceller etter fødselen.",
  "",
  "Myelin har ikke noe med væsken i cochlea å gjøre.",
  "Nedbrytning av nevroner er degenerasjon, det motsatte av modning."
]);
feilforklaring("EA-031", [
  "Motsatt: myelin øker ledningshastigheten.",
  "",
  "Myelin isolerer aksonet. Det lager ikke aksjonspotensialer selv.",
  "Lydtrykket i mellomøret påvirkes av mellomøremusklene, ikke av myelin."
]);
feilforklaring("EA-032", [
  "Dette beskriver stedskoding, ikke temporal koding.",
  "",
  "Temporal koding gjelder frekvens, ikke bare amplitude.",
  "Frekvens representeres nevrologisk både med sted og timing."
]);
feilforklaring("EA-033", [
  "Fibrene fyrer på ulike perioder, ikke alle samtidig. Det er poenget med volley-prinsippet.",
  "",
  "Volley-prinsippet handler om de lave og mellomhøye frekvensene, der fibrene kan følge lydbølgen.",
  "Nevroner kan fyre flere hundre ganger i sekundet."
]);
feilforklaring("EA-034", [
  "",
  "Fasekobling betyr at fyringen følger fasen, ikke at nevronene fyrer kontinuerlig.",
  "Motsatt: fasekoblingen er best ved lave frekvenser og forsvinner over noen få kHz.",
  "Fasekoblet informasjon brukes nettopp i hjernestammen, f.eks. i MSO for ITD."
]);
feilforklaring("EA-035", [
  "Temporal koding starter allerede i hørselsnerven.",
  "",
  "Temporal koding fungerer i hvert øre for seg og krever ikke binaural stimulering.",
  "Temporal koding er en del av normal hørsel."
]);
feilforklaring("EA-036", [
  "Lyd fra cochlea til hjernen er den afferente veien, altså bottom-up.",
  "",
  "Top-down-prosessering endrer ikke lydens frekvens.",
  "Høreterskelen er et sensorisk mål og handler ikke om top-down-prosessering."
]);
feilforklaring("EA-037", [
  "",
  "Prosessering som bygger på forventninger er top-down.",
  "Bottom-up beskriver en retning i prosesseringen, ikke en type hukommelse.",
  "Vestibulære reflekser er noe annet enn sensorisk prosessering av lyd."
]);
feilforklaring("EA-041", [
  "Pustefrekvens har ingenting med formanter å gjøre.",
  "",
  "Varighet er en tidsegenskap, ikke en frekvensegenskap.",
  "Antall ord per sekund er taletempo."
]);
feilforklaring("EA-043", [
  "",
  "Grunntonen bestemmes av stemmebåndenes svingninger. Talekanalens lengde påvirker formantene.",
  "Grunntonen har ingenting med støyreduksjon å gjøre.",
  "Formantenes amplitude bestemmes av talekanalen, ikke av grunntonen."
]);
feilforklaring("EA-044", [
  "",
  "Høreterskler ved ulike frekvenser vises i et audiogram.",
  "Mellomørets egenskaper måles med timpanometri.",
  "LTASS beskriver tale, ikke vestibulære responser."
]);
feilforklaring("EA-046", [
  "Vokaler har mest energi i lave og mellomhøye frekvenser.",
  "",
  "Nasaler har mest energi i bassen.",
  "Stemte vokaler med lav F0 har mest energi i bassen."
]);
feilforklaring("EA-047", [
  "Vokalene har mye energi i bassen og er ofte fortsatt hørbare.",
  "",
  "Varighet oppfattes fint med god basshørsel.",
  "Egen stemme har mye bassenergi og høres via beinledning, så den er sjelden et problem."
]);
feilforklaring("EA-048", [
  "Forskjell i lydstyrke er ILD.",
  "",
  "Forskjell i høreterskel er en asymmetri i hørselen, ikke en lokaliseringsledetråd.",
  "Øregangens lengde er anatomi, ikke en egenskap ved lyden."
]);
feilforklaring("EA-049", [
  "",
  "Lyden har samme hastighet til begge ørene.",
  "Frekvensen er den samme ved begge ørene.",
  "Fasekobling skjer i hørselsnerven og hjernestammen. ILD er en nivåforskjell i selve lyden."
]);
feilforklaring("EA-050", [
  "ITD er nesten lik for lyder rett foran, over og bak, så den hjelper lite i vertikalplanet.",
  "ILD varierer lite med høyde og brukes mest i horisontalplanet.",
  "",
  "Corpus callosum forbinder hjernehalvdelene og avgjør ikke vertikal lokalisering."
]);
feilforklaring("EA-051", [
  "",
  "Alle frekvenser har samme lydhastighet.",
  "Hørselsnerven reagerer godt på lave frekvenser.",
  "Trommehinnen slipper gjennom lave frekvenser."
]);
feilforklaring("EA-052", [
  "Forskjellen mellom luft- og beinledning er luft-bein-gapet.",
  "",
  "BMLD sammenligner lyttebetingelser, ikke to høreapparater.",
  "Øreplugger demper lyd. BMLD handler om binaurale forskjeller mellom signal og støy."
]);
feilforklaring("EA-053", [
  "",
  "Mellomøretrykk måles med timpanometri.",
  "Koinsidensdeteksjon handler om tid, ikke lydstyrke. Lydstyrkeforskjeller behandles i LSO.",
  "Den cochleære forsterkningen reguleres av de efferente MOC-fibrene, ikke av MSO."
]);
feilforklaring("EA-054", [
  "Cochlea lagrer ikke lyd. Minnet ligger i hjernen.",
  "",
  "Stapediusrefleksen er en refleks i hjernestammen.",
  "Lydens hastighet bestemmes av mediet, ikke av minnet."
]);
feilforklaring("EA-055", [
  "Høreterskelen er den samme uansett kontekst.",
  "",
  "Hårceller i cochlea regenererer ikke hos mennesker.",
  "Bakgrunnsstøyen er den samme. Det er tolkningen som blir lettere."
]);
feilforklaring("EA-058", [
  "Medfødt hørselstap er kongenitalt, ikke presbyakusis.",
  "",
  "Plutselig tap er ikke det samme som presbyakusis, som kommer gradvis og er sensorinevralt.",
  "Hørselstap fra mellomørebetennelse er konduktivt, ikke aldersrelatert."
]);
feilforklaring("EA-062", [
  "Rask problemløsning i nye oppgaver er flytende intelligens.",
  "",
  "Å oppfatte høyfrekvent lyd er en sensorisk evne, ikke intelligens.",
  "Vestibulære reflekser er automatiske, ikke intelligens."
]);
feilforklaring("EA-063", [
  "Å bruke innlært kunnskap er krystallisert intelligens.",
  "",
  "Barndomsminner er episodisk (langtids)hukommelse.",
  "Å høre lave frekvenser er en sensorisk evne."
]);
feilforklaring("EA-067", [
  "Å redusere og prioritere aktiviteter er seleksjon, og det betyr ikke å kutte alt.",
  "",
  "Optimalisering handler om å satse på målene, ikke å unngå utfordringer.",
  "Å lære og øve er en del av optimaliseringen."
]);
feilforklaring("EA-068", [
  "Kompensasjon forutsetter at man erkjenner tapet og finner nye løsninger.",
  "",
  "Å velge mål er seleksjon, og i alderdommen handler det ofte om å velge færre.",
  "Kompensasjon er å håndtere begrensningene aktivt, ikke å ignorere dem."
]);
feilforklaring("EA-070", [
  "Dette er en positiv holdning til egen læring, ikke en generalisering om aldersgruppen.",
  "",
  "Dette handler om egen erfaring, ikke en generalisering om eldre.",
  "Dette er et ønske, ikke en stereotypi."
]);
feilforklaring("EA-071", [
  "Tilrettelegging er ikke diskriminering.",
  "",
  "Å undersøke aldersrelaterte sykdommer er forskning eller helsearbeid.",
  "Helsetjenester for eldre er ikke diskriminering."
]);
feilforklaring("EA-072", [
  "Sosial deltakelse er bredere enn å bo med familie.",
  "",
  "Arbeid er én av mange arenaer, ikke den eneste.",
  "Fysisk aktivitet uten kontakt med andre er ikke sosial deltakelse."
]);
feilforklaring("EA-073", [
  "Hørselstap øker risikoen for depresjon, men gir det ikke alltid.",
  "",
  "Eldre kan fortsatt lære. Dette er en stereotypi.",
  "De fleste eldre med hørselstap bor hjemme."
]);
feilforklaring("EA-074", [
  "Normal aldring kan gi litt tregere hukommelse, men ikke alvorlig hukommelsestap.",
  "",
  "Demens er en sykdom, ikke en normal del av aldring.",
  "Normal aldring gir ikke tap av alle kognitive ferdigheter."
]);
feilforklaring("EA-075", [
  "Cochleær skade kan ikke repareres. Rehabiliteringen gir hjelp til å fungere best mulig.",
  "",
  "Rehabilitering kan ikke fjerne alle kognitive utfordringer.",
  "Biologisk aldring kan ikke forhindres."
]);
feilforklaring("EA-076", [
  "Å være trist én dag er en normal reaksjon, ikke en lidelse.",
  "",
  "Stress før eksamen er en normal, forbigående plage.",
  "Hørselstap er et sansetap, ikke en psykisk lidelse."
]);
feilforklaring("EA-078", [
  "Stigma er en nedvurdering, ikke en fordel.",
  "",
  "Stigma forutsetter nettopp at noen får lavere sosial status.",
  "Stigma kan også gjelde skjulte egenskaper, f.eks. et hørselstap man skjuler."
]);
feilforklaring("EA-084", [
  "Motsatt: plastisitet gjør læring mulig også hos voksne.",
  "",
  "Plastisitet hjelper tilpasning, men gjenoppretter ikke normal hørsel.",
  "Plastisiteten er størst hos barn, men finnes hele livet."
]);
feilforklaring("EA-085", [
  "ICF beskriver funksjon, ikke diagnoser. Diagnoser klassifiseres i ICD.",
  "",
  "ICF er et rammeverk, ikke en målemetode.",
  "ICF gjelder all helse og funksjon, ikke bare psykiske lidelser."
]);
feilforklaring("EA-087", [
  "Arbeidsminne er en kroppsfunksjon (mental funksjon).",
  "Høreterskel er en kroppsfunksjon.",
  "",
  "Alder er en personlig faktor."
]);
feilforklaring("EA-088", [
  "Motsatt: det er høy lytteanstrengelse som gir fatigue.",
  "",
  "Bedre frekvensselektivitet gjør lyttingen lettere, ikke tyngre.",
  "Økt cochleær forsterkning gir bedre hørsel og ikke fatigue."
]);
feilforklaring("EA-089", [
  "Personsentrert betyr at pasienten er med og bestemmer.",
  "",
  "Personsentrert betyr at tiltakene tilpasses den enkelte.",
  "Pasientens opplevelser er kjernen i personsentrert rehabilitering."
]);
feilforklaring("EA-090", [
  "God informasjon gjør det lettere å søke hjelp.",
  "",
  "Sosial støtte fremmer rehabilitering.",
  "God motivasjon fremmer rehabilitering."
]);
feilforklaring("EA-091", [
  "Utriculus og sacculus registrerer lineær akselerasjon og tyngdekraft.",
  "",
  "Cochlea er hørselsorganet.",
  "Cortis organ er sanseorganet for hørsel i cochlea."
]);
feilforklaring("EA-092", [
  "Buegangene registrerer rotasjon.",
  "",
  "Cochleariskjernene behandler lyd.",
  "Auditiv cortex behandler lyd."
]);
feilforklaring("EA-093", [
  "Utriculus måles med oVEMP.",
  "",
  "Cochlea er ikke et otolittorgan.",
  "Den horisontale buegangen er ikke et otolittorgan, og den testes med f.eks. hodeimpulstest."
]);
feilforklaring("EA-094", [
  "",
  "Sacculus måles med cVEMP.",
  "Cochlea er ikke et otolittorgan.",
  "Trommehinnen er en del av mellomøret, ikke et otolittorgan."
]);
feilforklaring("EA-095", [
  "",
  "Mellomøretrykket reguleres via øretrompeten.",
  "VOR har ingenting med høreterskelen å gjøre.",
  "Taleforståelse er en auditiv funksjon."
]);
feilforklaring("EA-096", [
  "Ménière gir anfall, ikke konstant svimmelhet, og har typisk hørselssymptomer.",
  "",
  "Ménière gir sensorinevralt (cochleært), ikke mekanisk, hørselstap.",
  "Vertigo-anfall er et hovedsymptom."
]);
feilforklaring("EA-097", [
  "Hydrops gjelder det indre øret, ikke trykket i mellomøret.",
  "",
  "Betennelse i trommehinnen er myringitt.",
  "Hydrops gjelder det indre øret, ikke øregangen."
]);
feilforklaring("EA-099", [
  "Nystagmus er en øyebevegelse, ikke noe som skjer i cochlea.",
  "",
  "Tinnitus er en lydopplevelse, ikke en øyebevegelse.",
  "Nystagmus er en øyebevegelse, ikke et hørselstap."
]);
feilforklaring("EA-100", [
  "",
  "GVS stimulerer, den måler ikke lydtrykk.",
  "Galvanisk betyr elektrisk strøm, ikke lufttrykk.",
  "OAE måles med en mikrofon i øregangen, ikke med GVS."
]);
feilforklaring("EA-101", [
  "8 er tallet nest lavest, ikke i midten.",
  "",
  "12 er tallet nest høyest, ikke i midten.",
  "16 er den høyeste verdien."
]);
feilforklaring("EA-102", [
  "Summen er 20, og 20 / 4 = 5, ikke 4.",
  "",
  "Summen er 20, og 20 / 4 = 5, ikke 6.",
  "8 er den høyeste verdien."
]);
feilforklaring("EA-103", [
  "Sammenhengen mellom to variabler er korrelasjon.",
  "",
  "Antall deltakere er n.",
  "Den høyeste verdien er maksimum."
]);
feilforklaring("EA-104", [
  "Normalfordelingen er symmetrisk, ikke skjev.",
  "",
  "Normalfordelingen har én topp.",
  "Medianen er lik gjennomsnittet, og den kan ha hvilken som helst verdi."
]);
feilforklaring("EA-110", [
  "Antall nye tilfeller i en periode er insidens.",
  "",
  "Risikoen for å dø er mortalitet (dødelighet).",
  "Varighet er et annet mål enn prevalens."
]);

// ---------- Høst 2024 ----------

// O24-003: fasiten er usikker (generert), så de gale alternativene er ikke forklart.
feilforklaring("O24-003", [
  "",
  "Svinndal (2018) fant at sammenhengen mellom hørselstap og deltid var sterkest for kvinner, ikke menn.",
  "Risikoen er ikke lik. Sammenhengen var sterkere for kvinner.",
  "Forelesningen viser ikke at kvinner holder seg lenger i arbeidslivet. Hørselshemmede generelt pensjonerer seg tidligere."
]);
feilforklaring("O24-009", [
  "Å koble ut tanker og følelser er unngåelse, ikke problemfokusert mestring.",
  "",
  "Aksept og humor er følelsesfokusert mestring.",
  "Å stenge ute negative tanker og følelser er unngåelse. Problemfokusert mestring er å gjøre noe med selve problemet."
]);
feilforklaring("O24-010", [
  "Gjenhenting er å hente fram det som er lagret.",
  "Retensjon er lagringen av informasjonen over tid.",
  "Profase er et begrep fra celledeling, ikke fra hukommelsesprosessen.",
  ""
]);
feilforklaring("O24-011", [
  "Angst er vanlig, men PTSD er langt sjeldnere enn depresjon.",
  "Bipolar lidelse og PTSD er mindre vanlige enn angst og depresjon.",
  "Depresjon er vanlig, men spiseforstyrrelser er langt sjeldnere enn angst.",
  ""
]);
feilforklaring("O24-014", [
  "Loven gir ingen rett til å beholde jobben uansett. Tilretteleggingsplikten har en grense.",
  "Arbeidsgiver har plikt til tilrettelegging så langt det er mulig (§ 4-6).",
  "",
  "Arbeidsmiljøloven gir ingen rett til medianlønn ved redusert arbeid."
]);
feilforklaring("O24-015", [
  "Dette stemmer: boksen og værhårene viser spredningen.",
  "Dette stemmer: medianens plassering i boksen og lengden på værhårene viser skjevhet.",
  "",
  "Dette stemmer: et box plot gir et bilde av fordelingens form."
]);
feilforklaring("O24-016", [
  "GVS over mastoidene gir en opplevelse av rulling, ikke translasjon.",
  "Motsatt: svak støy-GVS kan bedre balansen (stokastisk resonans).",
  "",
  "GVS påvirker både buegangene og otolittorganene."
]);
feilforklaring("O24-018", [
  "Å erkjenne hørselstapet er et første steg mot rehabilitering, ikke et hinder.",
  "Mestring fremmer rehabilitering.",
  "",
  "Forventninger om bedring kan heller motivere til rehabilitering."
]);
feilforklaring("O24-019", [
  "",
  "Hørselsnerven (del av VIII) går gjennom den indre øregangen.",
  "Ansiktsnerven (VII) går gjennom den indre øregangen.",
  "Balansenerven (del av VIII) går gjennom den indre øregangen."
]);
feilforklaring("O24-020", [
  "",
  "Gjennomsnitt er et mål på sentraltendens, ikke spredning.",
  "Median er et mål på sentraltendens, ikke spredning.",
  "IQR er et spredningsmål, men brukes helst ved skjeve data sammen med medianen."
]);
feilforklaring("O24-021", [
  "",
  "Arbeidsdeltakelsen er lavere blant hørselshemmede, ikke omtrent lik.",
  "Lavere arbeidsdeltakelse gjelder ikke bare dem som ikke bruker hjelpemidler.",
  "NAV har ingen slik generell anbefaling. Målet er tilrettelegging slik at folk kan stå i arbeid."
]);
feilforklaring("O24-024", [
  "",
  "",
  "Dette beskriver kryssmodal reorganisering (plastisitet) etter manglende stimulering, ikke et traume.",
  "Begrepet handler om å mangle informasjon om en hendelse, ikke om manglende auditiv stimulering av hjernen."
]);
feilforklaring("O24-026", [
  "Motsatt: ved tap av ytre hårceller trengs høyere nivå på primærtonene for å få fram DPOAE.",
  "",
  "Hos normalthørende vokser DPOAE med nivået på primærtonene, så kurven er ikke horisontal.",
  "Vekstfunksjoner måles ved å øke nivået på primærtonene, ikke frekvensen."
]);
feilforklaring("O24-030", [
  "Mestringsmekanismer er psykologiske strategier for å håndtere vansker.",
  "Funksjonalitet er et generelt ord for hva noe kan gjøre.",
  "",
  "Lateralisering er at funksjoner er fordelt på hver hjernehalvdel."
]);
// O24-032: fasiten er usikker (generert), så de gale alternativene er ikke forklart.
feilforklaring("O24-032", [
  "",
  "Lederens holdninger betyr noe, men Svinndals modell trekker fram delt ansvar på jobben og lave krav til muntlig kommunikasjon, ikke forutsigbare arbeidstider.",
  "Bedriftens størrelse er ikke blant faktorene Svinndal fant.",
  "Hjelpemidler og tilgang på informasjon hjelper, men tidlig identifisering er ikke blant funnene. Svaret som dekker modellen best, er delt ansvar og lave krav til muntlig kommunikasjon."
]);
feilforklaring("O24-033", [
  "Dette stemmer: forsterkningsreglene fordeler hørestyrken der den gir mest taleforståelse.",
  "Dette stemmer: reglene tar hensyn til at hørbarhet gir mindre nytte ved store diskanttap.",
  "",
  "Dette stemmer: targetet viser LTASS (gjennomsnittet), mens taletoppene ligger høyere."
]);
feilforklaring("O24-034", [
  "Å velge hjelpemidler for å opprettholde ytelsen er kompensasjon.",
  "Å få hjelp fra andre er kompensasjon.",
  "",
  "Å utvikle nye ferdigheter for å veie opp for tap er kompensasjon (eventuelt optimalisering)."
]);
feilforklaring("O24-036", [
  "",
  "ITD krever presis tidskoding, som er svekket ved auditiv nevropati.",
  "Gap detection måler tidsoppløsning, som er svekket ved auditiv nevropati.",
  "Deteksjon i støy er typisk svekket ved auditiv nevropati."
]);
feilforklaring("O24-039", [
  "Uventet atferd alene er ikke nok til å si at noen har en psykisk lidelse.",
  "Å være nedstemt en periode er en vanlig psykisk plage, ikke nødvendigvis en lidelse.",
  "Det finnes ingen generell «diagnoseskala» der 65 er en grense.",
  ""
]);
feilforklaring("O24-040", [
  "",
  "For lavt. Forelesningen oppgir 20 % for dem over 75 år.",
  "HUNT4 70+ fant ca. 35 %, men forelesningen oppgir 20 % for dem over 75 år. Svar etter pensum.",
  "For høyt. Forelesningen oppgir 20 % for dem over 75 år."
]);
feilforklaring("O24-042", [
  "12 er det fjerde tallet av fem i sortert rekkefølge, ikke det midterste.",
  "",
  "10 er det laveste tallet (to ganger), ikke det midterste.",
  "28 er gjennomsnittet, som trekkes opp av ekstremverdien 97."
]);
feilforklaring("O24-043", [
  "",
  "Fast (lineær) forsterkning i diskanten gjør sterke lyder for sterke ved recruitment.",
  "Motsatt: svake lyder trenger mest forsterkning, sterke lyder minst.",
  "Motsatt: det er diskanten som trenger forsterkning når bassen er god."
]);
feilforklaring("O24-044", [
  "Informasjonskontroll handler ikke om høreapparatet, men om å styre hva andre får vite.",
  "Informasjonskontroll handler om å styre informasjonen om egenskapen, ikke om å hente informasjon.",
  "",
  "Å bruke høreapparatet åpent avslører egenskapen. Informasjonskontroll handler ofte om å skjule den."
]);
feilforklaring("O24-045", [
  "",
  "Ordinalskala har rekkefølge. Kjønn har ingen naturlig rekkefølge.",
  "Intervallskala krever tall med like avstander.",
  "Ratioskala krever tall med et absolutt nullpunkt."
]);
feilforklaring("O24-046", [
  "",
  "Det handler ikke om ønsket forsterkning. Lav MPO kapper sterke lyder og gir dårlig bruk av dynamikkområdet.",
  "Svake og middels lyder påvirkes lite av MPO. Det er middels og sterke lyder som høres like ut.",
  "Lav MPO gir mindre dynamikk, ikke mer. Musikk blir heller flatere."
]);
feilforklaring("O24-047", [
  "MSO sender hovedsakelig til samme side (ipsilateralt), ikke motsatt side.",
  "MSO sender hovedsakelig til samme side, og hovedmålet er inferior colliculus.",
  "",
  "MSO sender hovedsakelig til samme side, og hovedmålet er inferior colliculus."
]);
feilforklaring("O24-048", [
  "Habituering er at responsen på en gjentatt, uviktig stimulus avtar. Det er ikke reorganisering etter skade.",
  "Læringsrelatert plastisitet skyldes trening og erfaring, ikke skade.",
  "Utviklingsplastisitet skjer under normal modning hos barn.",
  ""
]);
feilforklaring("O24-050", [
  "",
  "",
  "Dette er en vanlig følge: terskelen stiger, men ubehagsgrensen gjør det ikke.",
  "Dette er en vanlig følge: bredere auditive filtre gir dårligere frekvensoppløsning."
]);
feilforklaring("O24-052", [
  "K er en kort, svak plosiv med lite energi.",
  "S har lite energi og ligger høyt i frekvens.",
  "F er en av de svakeste talelydene.",
  ""
]);
feilforklaring("O24-053", [
  "",
  "Eldre kan fortsatt lære. Det kan gå litt tregere, men evnen er ikke borte.",
  "Krystallisert intelligens holder seg godt eller øker med alderen.",
  "Motivasjon svekkes ikke som en del av kognitiv aldring."
]);
feilforklaring("O24-055", [
  "Kognitive endringer spiller inn, men forklarer mindre enn redusert hørbarhet.",
  "Alder og kjønn er ikke i seg selv forklaringen. Det er hørbarheten som teller mest.",
  "Sentrale endringer spiller inn, men forklarer mindre enn redusert hørbarhet.",
  ""
]);
feilforklaring("O24-057", [
  "N. olfactorius (I) er luktenerven.",
  "N. vagus (X) styrer bl.a. hjerte, lunger og fordøyelse, ikke stapedius.",
  "",
  "N. glossopharyngeus (IX) styrer bl.a. svelg og smak, ikke stapedius."
]);
feilforklaring("O24-058", [
  "Motsatt: ved recruitment vokser hørestyrken raskere enn normalt.",
  "",
  "Intensitetsendringer oppfattes, ofte tydeligere enn normalt.",
  "Ved recruitment er hørestyrkeveksten unormalt rask, ikke normal."
]);
feilforklaring("O24-059", [
  "",
  "Dette stemmer: miljøfaktorer er en egen komponent i ICF.",
  "Dette stemmer: ICF skal gi et felles språk for å beskrive helse.",
  "Dette stemmer: ICF omfatter også helserelaterte forhold som utdanning og arbeid."
]);
feilforklaring("O24-060", [
  "TEN(HL) har ikke 6000 og 8000 Hz, og mangler 750 og 1500 Hz.",
  "TEN(HL) går ikke ned til 125 og 250 Hz, og går opp til 4000 Hz.",
  "TEN(HL) har ikke 6000 Hz, og mangler 750 Hz.",
  ""
]);
feilforklaring("O24-061", [
  "VEMP måles i muskler (myogene potensialer), ikke i vestibularisnerven.",
  "",
  "VEMP sier noe om vestibulærorganet, ikke om sensorinevralt hørselstap.",
  "VEMP er reflekser som utløses av lyd eller vibrasjon, ikke med vilje."
]);
feilforklaring("O24-062", [
  "Dette stemmer: spatial release from masking består av binaural avmaskering og better ear listening.",
  "",
  "Dette stemmer: det bedre øret er det med best signal/støy-forhold.",
  "Dette stemmer: binaural avmaskering krever to fungerende ører."
]);
feilforklaring("O24-064", [
  "Nullhypotesen er det motsatte av forskningshypotesen.",
  "",
  "Sannsynligheten er p-verdien, ikke selve nullhypotesen.",
  "Forventede resultater er forskningshypotesen (den alternative hypotesen)."
]);
feilforklaring("O24-069", [
  "Type I-feil er å finne noe som ikke er der (falsk positiv).",
  "Prøvetakingsfeil gjelder at utvalget ikke er representativt for populasjonen.",
  "Falsk positiv er å finne noe som ikke er der. Her ble et tap oversett, altså falsk negativ.",
  ""
]);
feilforklaring("O24-070", [
  "",
  "Forståelse av årsak og virkning er bare en liten del av tenkningen.",
  "Mangler bruken av kunnskapen (vurdering og problemløsing), som forelesningen tar med.",
  "Dette er eksempler på kognitive funksjoner, ikke en beskrivelse av selve begrepet. Forelesningen beskriver kognisjon som prosessen med å hente inn, forstå, huske og bruke kunnskap."
]);
feilforklaring("O24-072", [
  "MS skader myelinet og gir dårligere tidskoding.",
  "Auditiv nevropati gir svekket faselåsing og dårligere tidskoding.",
  "Skjult hørselstap (tap av synapser) kan svekke tidskodingen.",
  ""
]);
feilforklaring("O24-073", [
  "",
  "Skade i hjernestammen er en sansebanefeil, ikke nedsatt kognisjon.",
  "Arbeidsminnet holder og bearbeider informasjon. Det prioriterer ikke signaler i auditiv cortex.",
  "Hjernestammen er ikke en kognitiv funksjon."
]);
feilforklaring("O24-080", [
  "IQ-score er normalfordelt (symmetrisk), ikke skjev.",
  "Alder på artister er positivt skjev (de fleste er unge), ikke negativt.",
  "Fødselsdager er omtrent jevnt fordelt på ukedagene, så kurven ville vært flat.",
  ""
]);
feilforklaring("O24-081", [
  "Når signal og støy kommer til samme øre, er det ingen binaural forskjell å utnytte.",
  "Uten faseforskyvning (S0N0) er det ingen binaural forskjell, og MLD er null.",
  "",
  "360° faseforskyvning er det samme som ingen forskyvning."
]);
feilforklaring("O24-083", [
  "MSO behandler ITD, ikke ILD.",
  "LSO behandler ILD, ikke ITD.",
  "Vertikal lokalisering bygger på spektrale signaler fra pinna, ikke ITD.",
  ""
]);
feilforklaring("O24-090", [
  "",
  "Mange får psykiske plager, men de fleste får ikke alvorlige psykiske lidelser.",
  "Risikoen er økt, men de fleste hørselshemmede får ikke en psykisk lidelse.",
  "Det er omvendt: plager går ofte over av seg selv, mens lidelser oftere trenger behandling."
]);
feilforklaring("O24-092", [
  "Cochleariskjernene er der fibrene ender, ikke der signalet kommer fra.",
  "",
  "Basilarmembranen sender ikke signaler selv.",
  "Indre hårceller innerveres av type I-fibrene."
]);
feilforklaring("O24-093", [
  "Loven gir også rett til individuell tilrettelegging. Universell utforming er ikke alt.",
  "",
  "Loven nevner arbeidslivet spesifikt, med rett til tilrettelegging (§ 22).",
  "Loven gir ingen rett til redusert stilling eller ekstra ferieuke."
]);
feilforklaring("O24-098", [
  "",
  "Intervallskala mangler absolutt nullpunkt. Volum har et ekte null.",
  "Volum er tall, ikke kategorier.",
  "Volum har like intervaller, ikke bare en rangering."
]);
// O24-099: fasiten er usikker (generert), så de gale alternativene er ikke forklart.
feilforklaring("O24-099", [
  "Munnavlesning og plassering er eksempler på strategier, ikke Dillons tre hovedområder.",
  "",
  "Dette er ikke Dillons inndeling. Hans tre områder er observasjon, den sosiale interaksjonen og det fysiske miljøet.",
  "Tekniske hjelpemidler hører til høreapparatbehandlingen, ikke Dillons inndeling av hørestrategier."
]);

// ---------- Pensumspørsmål ----------

feilforklaring("P26-001", [
  "",
  "Eldre er nettopp ulike, så identisk oppfølging passer dårlig.",
  "Eldre kan beskrive egne mål, og forelesningen vektlegger å spørre dem selv.",
  "Kronologisk alder sier lite om funksjon, ønsker og livssituasjon."
]);
feilforklaring("P26-003", [
  "At TEN ligger over høreterskelen er en forutsetning for testen, ikke noe som utelukker død region. Det avgjørende er den maskerte terskelen.",
  "",
  "TEN-testen sier noe om indre hårceller og nevroner, ikke om ytre hårceller alene.",
  "Luft-bein-gap skiller konduktivt fra sensorinevralt tap og trengs ikke for å tolke TEN-resultatet."
]);
feilforklaring("P26-004", [
  "Å late som man forstår gir ingen bedre taleforståelse.",
  "",
  "Strategien skjuler problemene, så samtalepartnerne blir mindre oppmerksomme, ikke mer.",
  "Den kan dempe opplevd stigma kortsiktig, men fjerner ikke stigma."
]);
feilforklaring("P26-005", [
  "Testen skal kartlegge flere nivåer, ikke avsluttes ved 0 dB HL.",
  "",
  "Frekvensen holdes fast. Det er nivået som endres.",
  "ABLB bruker toner, ikke bare støy."
]);
feilforklaring("P26-007", [
  "En fast modell som ikke kan endres er en deduktiv tilnærming.",
  "",
  "Normalfordeling er et statistisk begrep og gjelder ikke intervjudata.",
  "Gjennomsnitt per ord er en kvantitativ beregning, ikke kvalitativ analyse."
]);
feilforklaring("P26-010", [
  "Blodtrykk reguleres av det autonome nervesystemet, ikke av cochleariskjernen.",
  "OAE lages av de ytre hårcellene i cochlea.",
  "Lineær akselerasjon registreres av otolittorganene i det vestibulære systemet.",
  ""
]);
feilforklaring("P26-011", [
  "Hjerneslag rammer hjernen, ikke ytre hårceller.",
  "Tersklene er knapt endret, så de kan ikke forklare de store vanskene.",
  "",
  "Kognisjon og fatigue er svært relevante etter hjerneslag."
]);
feilforklaring("P26-013", [
  "Støyen har tydelig innvirkning. Det er nettopp maskeringen som måles.",
  "",
  "Hårcellene har ulik karakteristisk frekvens langs cochlea (tonotopi).",
  "Testtonen har en bestemt fysisk frekvens."
]);
feilforklaring("P26-014", [
  "",
  "Å late som man har forstått gir ingen oppklaring.",
  "Å forlate samtalen løser ikke problemet.",
  "Mer bakgrunnsstøy gjør det vanskeligere å høre."
]);
feilforklaring("P26-015", [
  "20 dB er en stor endring som alle vil merke.",
  "",
  "En oktav er en frekvensendring, ikke en nivåendring.",
  "100 dB er et enormt nivåsprang og ikke en liten økning."
]);
feilforklaring("P26-016", [
  "Lave frekvenser bøyer seg rundt hodet og gir lite ILD. Rett forfra gir dessuten ingen forskjell mellom ørene.",
  "Toner under 100 Hz gir svært lite hodeskygge, og fra midtlinjen er det ingen forskjell mellom ørene.",
  "All lyd som når ørene passerer øremuslingen.",
  ""
]);
feilforklaring("P26-017", [
  "Her er eksponeringen allerede skjedd og hentes fra gamle data, så studien er ikke prospektiv.",
  "",
  "Ingen behandling blir randomisert her.",
  "Ingen studier er uten mulige feilkilder. Retrospektive data har bl.a. risiko for mangelfull registrering."
]);
feilforklaring("P26-018", [
  "En t-test sammenligner gjennomsnitt, og måler ikke korrelasjon.",
  "",
  "En type I-feil er en feilkonklusjon, ikke en metode.",
  "Et stolpediagram er en visualisering og gir ikke et korrelasjonsmål."
]);
feilforklaring("P26-019", [
  "",
  "Høyt lydtrykk gir ikke posisjonsutløst svimmelhet.",
  "Otolittmembranen fungerer fortsatt. Problemet er løse krystaller i en buegang.",
  "OAE har ingenting med svimmelhet å gjøre."
]);
feilforklaring("P26-020", [
  "Off-responser finnes, men forelesningen oppgir on-responser som vanligst.",
  "Ventrale MGB er en hovedstasjon i hørselsbanen og svarer på lyd.",
  "MGB er en auditiv struktur og svarer på lyd, ikke lys.",
  ""
]);
feilforklaring("P26-021", [
  "Å unngå nye arenaer gir mindre deltakelse, ikke mer.",
  "Audiogrammet sier ingenting om hva som er meningsfullt for personen.",
  "Oppfølgingen er en viktig del av rehabiliteringen og slutter ikke ved utdeling.",
  ""
]);
feilforklaring("P26-022", [
  "",
  "ERB beskriver filterbredde i Hz, ikke hårceller, og hårceller for hørsel sitter i cochlea, ikke buegangene.",
  "Forskjellen mellom luft- og beinledning er luft-bein-gapet.",
  "VEMP-varighet har ingenting med auditive filtre å gjøre."
]);
feilforklaring("P26-023", [
  "",
  "En bratt helling er et mulig tegn, men ikke bevis. Den sier heller ikke at alle frekvenser er døde.",
  "Et bratt fall er heller grunn til å mistenke cochleær patologi.",
  "Timpanometri måler mellomøret og sier ingenting om indre hårceller."
]);
feilforklaring("P26-024", [
  "Pasienten beholder retten til å ta egne beslutninger.",
  "Pasienten skal fortsatt være sentral i rehabiliteringen.",
  "",
  "Audiogrammet endres ikke av at en nærperson er med."
]);
feilforklaring("P26-025", [
  "",
  "Når energien er samlet i ett kritisk bånd, er det ingen spektral summasjon, så det høres svakere ut.",
  "Lik intensitet gir ikke nødvendigvis lik hørestyrke, nettopp på grunn av spektral summasjon.",
  "Begge signalene er hørbare lyder."
]);
feilforklaring("P26-026", [
  "Motsatt: det er den første lyden som bestemmer opplevd retning.",
  "",
  "Hørselen endrer ikke den fysiske frekvensen til lyden.",
  "Korte forsinkelser smelter sammen med den direkte lyden. Bare lange forsinkelser høres som ekko."
]);
feilforklaring("P26-027", [
  "Dikotisk maskering er et begrep fra hørselstesting.",
  "",
  "dBA er en lydmålingsvekting.",
  "Ratioskala er et målenivå i kvantitative data."
]);
feilforklaring("P26-028", [
  "12 er 25-persentilen (Q1), ikke IQR.",
  "20 er 75-persentilen (Q3), ikke IQR.",
  "32 er summen av Q1 og Q3. IQR er differansen.",
  ""
]);
feilforklaring("P26-030", [
  "Hårcellene sitter i cochlea, ikke i auditiv cortex.",
  "",
  "Buegangene og utriculus hører til det vestibulære systemet.",
  "Hørselsfibrene går til hjernestammen, ikke ryggmargen, og core-belt gjelder cortex."
]);
feilforklaring("P26-031", [
  "",
  "Kognisjon har en tydelig forbindelse til hørsel og taleforståelse.",
  "Rentoneaudiogrammet måler terskler, ikke arbeidsminne.",
  "Taleforståelse avhenger av mye mer enn øremuslingen."
]);
feilforklaring("P26-032", [
  "Tale beholder tidsvariasjonene sine når den når trommehinnen.",
  "Øret registrerer både lydstyrke og frekvens.",
  "Vokalenes varighet endres ikke av dårlig frekvensselektivitet.",
  ""
]);
feilforklaring("P26-033", [
  "fe handler om den døde regionen, ikke OAE.",
  "fe har ingenting med hjertet å gjøre.",
  "Forskjellen mellom høreterskel og ubehagsterskel er dynamikkområdet.",
  ""
]);
feilforklaring("P26-034", [
  "Tiltakene endrer ikke selve hørselstapet.",
  "Hørselen blir ikke normal. Kommunikasjonen blir bare lettere.",
  "Tiltakene hjelper også med høreapparat.",
  ""
]);
feilforklaring("P26-035", [
  "",
  "Forsterkning normaliserer ikke tersklene. Den løfter bare lyden.",
  "Høreapparater kan forsterke lave frekvenser.",
  "Lineær forsterkning bedrer ikke frekvensselektiviteten i cochlea."
]);
feilforklaring("P26-037", [
  "Single-subject-design bygger nettopp på gjentatte målinger.",
  "Designet følger nettopp én persons utvikling.",
  "",
  "Designet har én eller få deltakere, ikke hundrevis."
]);
feilforklaring("P26-039", [
  "Øynene beveger seg motsatt av hodet for å holde blikket stabilt.",
  "VOR lukker ikke øynene. Den beveger dem.",
  "",
  "Ved horisontal rotasjon beveger øynene seg horisontalt, ikke oppover."
]);
feilforklaring("P26-040", [
  "",
  "Corpus callosum forbinder hjernehalvdelene og er ikke en del av cochleariskjernen.",
  "Vestibulærgangliet hører til balansesystemet.",
  "Sacculus er et vestibulært organ."
]);
feilforklaring("P26-041", [
  "",
  "Én test gir ikke sikker diagnose av demens, særlig ikke når hørselen kan påvirke resultatet.",
  "Bakgrunnsstøy gjør det vanskeligere, særlig for dem med hørselstap.",
  "dB SPL er en måleenhet for lydtrykk, ikke for kognisjon."
]);
feilforklaring("P26-042", [
  "",
  "Interaural nivåforskjell gjelder lokalisering, ikke talelyder.",
  "Dette er ikke et etablert talebegrep.",
  "Mellomøretrykk har ingenting med plosiver å gjøre."
]);
feilforklaring("P26-043", [
  "TEOAE måler ikke taleforståelse.",
  "TEOAE kommer fra de ytre hårcellene, så nevrale forstyrrelser (f.eks. auditiv nevropati) kan oversees.",
  "TEOAE gir ikke terskler i dB HL.",
  ""
]);
feilforklaring("P26-044", [
  "Dette handler om høreapparater, ikke om perspektivet som mangler.",
  "",
  "Otoskopi ser på øregang og trommehinne og beskriver ikke hørselstapet.",
  "Kommunikasjon påvirkes nettopp av sosiale arenaer."
]);
feilforklaring("P26-045", [
  "Lave frekvenser er hørbare, men øret er mindre følsomt for dem ved moderate nivåer.",
  "A-veiing gjelder hele frekvensområdet, ikke bare 8000 Hz.",
  "Øret er ikke like følsomt for alle frekvenser. Det er grunnen til at A-veiing finnes.",
  ""
]);
feilforklaring("P26-046", [
  "Den totale energien er den samme. Det som endres, er fordelingen mellom ørene.",
  "Talerens grunntone endres ikke av at støyen flyttes.",
  "Hjernen bruker signalene fra begge ørene, og det er nettopp det som hjelper.",
  ""
]);
feilforklaring("P26-047", [
  "",
  "Toneterskelmåling er en audiometrisk test, ikke en samtale.",
  "ABR er en elektrofysiologisk måling.",
  "Tilfeldig tildeling er et eksperimentelt design, ikke en samtale."
]);
feilforklaring("P26-048", [
  "Programmet er den uavhengige variabelen som forskeren styrer.",
  "Forskerens navn er ingen variabel i studien.",
  "",
  "Navnet på audiometeret er ingen variabel i studien."
]);
feilforklaring("P26-050", [
  "Otokonier i utriculus hører til det vestibulære systemet.",
  "",
  "Sternocleidomastoideus er nakkemuskelen som brukes ved cVEMP.",
  "N. facialis styrer stapediusmuskelen, ikke trommehinnen, og har ingenting med LOC å gjøre."
]);
feilforklaring("P26-051", [
  "Sammenhengen er ikke bevis for at hørselstap er eneste årsak.",
  "",
  "Sammenhengen betyr ikke at alle med hørselstap har demens.",
  "Alder og andre faktorer kan nettopp spille inn og må tas hensyn til."
]);
feilforklaring("P26-052", [
  "Voks gir et konduktivt tap og ville også dempet OAE. Det forklarer ikke en avvikende ABR med god OAE.",
  "Øremuslingens tykkelse har ingenting med nevral timing å gjøre.",
  "Problemet er sviktende, ikke overdreven, fasekoding.",
  ""
]);
feilforklaring("P26-053", [
  "TEOAE kommer fra de ytre hårcellene i cochlea, ikke fra cortex.",
  "TEOAE kan måles i alle aldre, også hos nyfødte.",
  "Lyd ved 6 kHz forplanter seg fint gjennom luft.",
  ""
]);
feilforklaring("P26-054", [
  "",
  "Tidsintegrasjon er et psykoakustisk begrep.",
  "Adaptiv kompresjon er en høreapparatfunksjon.",
  "Hørselssynkronisering er ikke et begrep hos Goffman."
]);
feilforklaring("P26-055", [
  "MPO er høreapparatets maksimale utgangsnivå.",
  "",
  "Interaural demping (IA) er hvor mye lyd som dempes fra ett øre til det andre gjennom skallen.",
  "Dette er ikke et etablert begrep innen hørestyrke."
]);
feilforklaring("P26-056", [
  "BILD måles med begge ørene. Det er en binaural måling.",
  "Tale har mange tidsvariasjoner.",
  "BMLD avhenger av frekvens: den er størst ved lave frekvenser.",
  ""
]);
feilforklaring("P26-057", [
  "",
  "Kalibrering hører til lydmåling, ikke kvalitativ tolkning.",
  "Randomisering brukes i eksperimentelle studier.",
  "OAE-måling har ingenting med intervjuer å gjøre."
]);
feilforklaring("P26-058", [
  "Paret t-test sammenligner to målinger hos de samme personene, ikke tre uavhengige grupper.",
  "Median er et deskriptivt mål og tester ikke forskjeller.",
  "Kji-kvadrat brukes for kategoriske data, ikke for å sammenligne gjennomsnitt.",
  ""
]);
feilforklaring("P26-059", [
  "Endolymfen er væske og omdannes ikke til luft.",
  "Otokonier sitter i otolittorganene og løsner ikke ved vanlig rotasjon.",
  "",
  "Trommehinnen er i mellomøret og har ingen forbindelse med cupula."
]);
feilforklaring("P26-060", [
  "Barn har cochleariskjerner fra fødselen.",
  "Lydens hastighet i luft er den samme for alle.",
  "Hjernen behandler lyd fra før fødselen.",
  ""
]);
feilforklaring("P26-061", [
  "Kroniske sykdommer og mange medisiner er ikke primær aldring.",
  "Binaural summasjon er et hørselsbegrep.",
  "Spontane OAE er lyder fra cochlea.",
  ""
]);
feilforklaring("P26-062", [
  "Dybdeoppfatning gjelder synet.",
  "",
  "Kompleans er mellomørets stivhet, målt med timpanometri.",
  "Langtidshukommelse måles ikke med korte opphold i støy."
]);
feilforklaring("P26-063", [
  "",
  "100 Hz er ikke 2f1−f2. Det er heller ikke f2−f1 (200 Hz).",
  "1400 Hz er 2f2−f1, ikke 2f1−f2.",
  "2200 Hz er f1 + f2."
]);
feilforklaring("P26-064", [
  "",
  "Fargen på høreapparatet har ingenting med fatigue å gjøre.",
  "Å unngå kolleger gir isolasjon og løser ikke problemet.",
  "Én terskel sier lite om belastningen i arbeidshverdagen."
]);
feilforklaring("P26-065", [
  "Otoskopi ser på øregang og trommehinne, ikke hørestyrkeopplevelse.",
  "Øregangsvolum sier ingenting om opplevd hørestyrke.",
  "",
  "Avstanden mellom ørene sier ingenting om opplevd hørestyrke."
]);
feilforklaring("P26-066", [
  "Lyden kommer rett forfra, så ingen av ørene får den først.",
  "",
  "Lyden kommer rett forfra, så ingen av ørene får den først.",
  "Maksimal ITD hos mennesker er rundt 0,6–0,7 ms. Rett forfra er den 0."
]);
feilforklaring("P26-067", [
  "Funn presenteres etter at data er samlet inn.",
  "",
  "Man kan ikke konkludere uten data.",
  "Analyser publiseres etter datainnsamling og analyse."
]);
feilforklaring("P26-068", [
  "Trykkverdiene er tall, ikke kategorier.",
  "Trykkverdiene har like intervaller, ikke bare en rangering.",
  "",
  "0 daPa er et referansenivå (atmosfæretrykket), ikke fravær av trykk. Negative verdier finnes."
]);
feilforklaring("P26-072", [
  "Lengre tone gir lavere terskel, ikke høyere.",
  "Opptil ca. 200–300 ms gir lengre varighet lavere terskel.",
  "",
  "Varigheten endrer ikke tonens frekvens."
]);
feilforklaring("P26-073", [
  "Avflatningen viser nettopp at responsen ikke er lineær.",
  "Høreterskelen endres ikke fra sekund til sekund.",
  "",
  "DPOAE måles over et stort nivåområde, ikke bare ved 0 dB SPL."
]);
feilforklaring("P26-074", [
  "Psykisk helse er relevant uansett hvor godt høreapparatet fungerer.",
  "",
  "Man bør ikke anta en psykisk lidelse. Omgivelsene kan forklare mye.",
  "Behovet for tilrettelegging avhenger av arbeidssituasjonen, ikke bare audiogrammet."
]);
feilforklaring("P26-075", [
  "Spektral oppløsning er evnen til å skille frekvenser.",
  "",
  "Lydlokalisering handler om retning.",
  "Dikotisk fusjon er når to ulike signaler til hvert øre smelter sammen."
]);
feilforklaring("P26-076", [
  "Vokalene forsvinner ikke. De blir utsmurt i tid.",
  "Etterklang påvirker ikke høreterskelen.",
  "",
  "Den direkte lyden har fortsatt sine interaurale forskjeller. Refleksjonene gjør dem bare mindre tydelige."
]);
feilforklaring("P26-077", [
  "Gjentatte målinger over åtte år er ikke én enkelt måling.",
  "En metaanalyse samler publiserte studier og har ingen egne deltakere.",
  "Studien har deltakere og gjentatte målinger.",
  ""
]);
feilforklaring("P26-078", [
  "Konfidensintervallet gjelder gjennomsnittet, ikke enkeltpasientene.",
  "Andre studier vil finne litt ulike verdier. 4 dB er bare midtpunktet.",
  "Standardavvik beskriver spredningen i dataene. Konfidensintervallet beskriver usikkerheten i estimatet.",
  ""
]);
feilforklaring("P26-079", [
  "",
  "Vestibulærsystemet er viktig for balansen. Her kompenserer de andre sansene.",
  "Propriosepsjon kommer fra muskler, sener og ledd, ikke øregangen.",
  "Synet er for tregt til å registrere raske hodebevegelser, og det fungerer ikke i mørket."
]);
feilforklaring("P26-080", [
  "",
  "Auditiv cortex får informasjon fra begge ører.",
  "MGB får informasjon fra begge ører, etter krysning.",
  "Corpus callosum forbinder hjernehalvdelene og er ikke en del av den første hørselsbanen."
]);
feilforklaring("P26-081", [
  "Skalledemping er hvor mye lyd som dempes fra ett øre til det andre.",
  "Høreterskel ved 250 Hz sier ikke noe om å bytte fokus.",
  "",
  "Stapediusmuskelen beskytter øret mot sterk lyd."
]);
feilforklaring("P26-082", [
  "Øremuslingen endrer ikke størrelse etter støy.",
  "Støy kan skade ytre hårceller, men de fungerer ikke bedre enn før.",
  "Lyden går ikke raskere gjennom mellomøret etter støy.",
  ""
]);
feilforklaring("P26-083", [
  "En ren tone inneholder bare én frekvens.",
  "",
  "Basilarmembranen kan svinge med flere frekvenser samtidig.",
  "Mikrofonen registrerer lyden. Den endrer ikke primærtonene."
]);
feilforklaring("P26-084", [
  "Personen nevner også vennskap og å bidra, ikke bare lønn.",
  "Arbeid er vanligvis bra for helsen, også ved hørselstap.",
  "",
  "Arbeid er tvert imot viktig for identitet og tilhørighet."
]);
feilforklaring("P26-085", [
  "",
  "2 soner er ved 50 dB SPL. Ved 60 dB dobles det igjen.",
  "10 soner ville krevd over 30 dB økning.",
  "20 soner ville krevd over 40 dB økning."
]);
feilforklaring("P26-086", [
  "Mennesker har MSO.",
  "ITD brukes i horisontalplanet, ikke vertikalplanet.",
  "Fasekoding skjer i hørselsnerven, ikke i øremuslingen.",
  ""
]);
feilforklaring("P26-087", [
  "Typetall beskriver den vanligste verdien og forklarer ikke variasjon.",
  "",
  "Et kakediagram viser andeler og forklarer ikke variasjon.",
  "En binær konklusjon gir ikke svar på hvor mye variabler forklarer."
]);
feilforklaring("P26-089", [
  "MOC-aktivering endrer ikke frekvensen til OAE.",
  "Luft-bein-gap har ingenting med MOC å gjøre.",
  "",
  "OAE er svært svake og alltid mye svakere enn primærtonene."
]);
feilforklaring("P26-090", [
  "Aktiviteten støtter Act og Belong, ikke bare Commit.",
  "ABC har ingenting med rentoneaudiometri å gjøre.",
  "",
  "ABC handler om psykisk helse, ikke biologisk aldring."
]);
feilforklaring("P26-092", [
  "DPOAE dannes nær f2-stedet, som avhenger av primærtonene.",
  "DPOAE dannes i cochlea, ikke på trommehinnen.",
  "",
  "Utriculus og sacculus er vestibulære organer."
]);
feilforklaring("P26-093", [
  "Arbeidsgiver har en plikt til tilrettelegging (arbeidsmiljøloven og likestillings- og diskrimineringsloven).",
  "Den ansatte har rett til å be om tilrettelegging.",
  "",
  "Arbeidsgiveren har ansvaret for tilrettelegging. NAV kan hjelpe, men har ikke eneansvaret."
]);
feilforklaring("P26-094", [
  "",
  "Ledningstap demper lyden og gjør den ikke ubehagelig.",
  "Normal hørestyrkevekst gir ikke ubehag ved vanlige lyder.",
  "Binaural summasjon er at lyd høres sterkere med to ører, ikke at den blir ubehagelig."
]);
feilforklaring("P26-095", [
  "",
  "Binaural behandling fortsetter. Det er nivåforskjellen som endres.",
  "Ipsilateral input er eksitatorisk, så mer lyd der gir mer eksitasjon, ikke mindre.",
  "LSO registrerer nivåforskjeller (ILD), ikke tidsforskjeller."
]);
feilforklaring("P26-096", [
  "Antall sider sier ingenting om effektens betydning.",
  "Alfabetisk rekkefølge har ingen betydning.",
  "",
  "Antall referanser sier ingenting om effektens betydning."
]);
feilforklaring("P26-097", [
  "",
  "Ved kaldt vann går den raske fasen mot motsatt side (COWS: Cold Opposite, Warm Same).",
  "Kalorisk test av en horisontal buegang gir horisontal nystagmus.",
  "Kalorisk stimulering gir normalt nystagmus med rask fase."
]);
feilforklaring("P26-098", [
  "Oksygen tilføres via blodet, ikke via nevroner.",
  "Øregangens volum er anatomi og bestemmes ikke av nevroner.",
  "",
  "Stigbøylen er festet til det ovale vinduet mekanisk, uten nevroner."
]);
feilforklaring("P26-099", [
  "Gjennomsnittet trekkes kraftig opp av 30 (blir 10,4).",
  "Summen er ikke et sentralmål og øker direkte med 30.",
  "",
  "Variasjonsbredden er et spredningsmål og blir mye større på grunn av 30."
]);
