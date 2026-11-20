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
  "",
  "",
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
