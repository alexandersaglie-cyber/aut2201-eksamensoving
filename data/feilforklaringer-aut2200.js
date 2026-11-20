// Hvorfor de gale alternativene er feil – AUT2200 Klinisk 2. Vises i øvingen i flervalgsdelen.
//
// Nøkkel: spørsmålets id. Verdi: én tekst per alternativ, i samme rekkefølge som alternativene
// i spørsmålet (A, B, C, D). Det riktige alternativet har tom tekst "". Står det "" ved et galt
// alternativ, var vi ikke sikre nok på forklaringen, og da vises ingenting for det.
//
// Kildene er spørsmålets egen forklaring og forelesningene spørsmålet er laget fra
// (teksten fra forelesningsfilene), og faglitteratur ved tvil.
//
// Ligger i en egen fil, så spørsmålsfilene ikke endres.

var FEILFORKLARINGER = FEILFORKLARINGER || {};
function feilforklaring(id, tekster) { FEILFORKLARINGER[id] = tekster; }

// ---------- Forsterkningsberegning ----------

feilforklaring("S22-FB01", [
  "",
  "30 dB er 0,5 × 60 uten korreksjonen k = −5 dB ved 500 Hz.",
  "20 dB får du hvis du trekker fra 10 dB. Korreksjonen ved 500 Hz er −5 dB.",
  "35 dB får du hvis du legger til 5 dB i stedet for å trekke fra."
]);
feilforklaring("S22-FB02", [
  "37,5 dB er bare 0,5 × 75. Tillegget for terskler over 65 dB HL (5 dB) mangler.",
  "",
  "47,5 dB får du hvis tillegget blir 10 dB. Det skal være 0,5 × (75 − 65) = 5 dB.",
  "32,5 dB får du hvis du trekker fra tillegget i stedet for å legge det til."
]);
feilforklaring("S22-FB03", [
  "60 dB er hele terskelen (full-gain). Regelen sier halvparten.",
  "45 dB er tre fjerdedeler av terskelen, ikke halvparten.",
  "",
  "15 dB er en fjerdedel av terskelen, ikke halvparten."
]);
feilforklaring("S22-FB04", [
  "20 dB er hele luft-bein-gapet. NAL-NL2 gir 75 % av gapet.",
  "10 dB er halvparten av gapet. NAL-NL2 gir 75 %.",
  "5 dB er en fjerdedel av gapet. NAL-NL2 gir 75 %.",
  ""
]);
feilforklaring("S22-FB05", [
  "",
  "25 dB er half-gain (0,5 × 50), ikke 0,46 × 50.",
  "46 dB er faktoren ganget med 100, ikke med 50.",
  "18 dB passer ikke: 0,46 × 50 = 23."
]);
feilforklaring("S22-FB06", [
  "Dette beskriver generiske metoder som NAL og DSL.",
  "",
  "NAL-metodene er generiske, ikke proprietære.",
  "Proprietære metoder bygger ikke nødvendigvis på individuelt målt lydstyrke. De er lukkede, så vi vet ikke hva de bygger på."
]);
feilforklaring("S22-FB07", [
  "NAL-NL1 prøver nettopp ikke å gjenopprette normal lydstyrke.",
  "Et hørbart og komfortabelt signal i hver frekvensregion er målet til DSL.",
  "",
  "1 dB forsterkning per dB tap er «speiling» av audiogrammet, som gir altfor mye forsterkning."
]);
feilforklaring("S22-FB08", [
  "Dette stemmer: NAL-NL2 gir litt mer forsterkning til menn.",
  "Dette stemmer: vante brukere får mer forsterkning enn nye.",
  "Dette stemmer: barn får mer forsterkning på midtnivå.",
  ""
]);
feilforklaring("S22-FB09", [
  "NAL-RP er en australsk metode basert på innskuddsforsterkning (REIG), ikke den tradisjonelle barnemetoden.",
  "",
  "POGO II er en enkel lineær regel for voksne.",
  "Half-gain er en enkel historisk regel, ikke en barnemetode."
]);
feilforklaring("S22-FB10", [
  "Motsatt: peak clipping gir mer forvrengning.",
  "",
  "Det er kompresjonsbegrensning som passer best for de fleste.",
  "Det er kompresjonsbegrensning som brukes i de fleste apparater i dag."
]);
feilforklaring("S22-FB11", [
  "Brukerne foretrekker i snitt litt mindre forsterkning enn foreskrevet.",
  "Motsatt: brukerne foretrekker mindre, ikke mer.",
  "",
  "Forskjellen er mye mindre, rundt 3–4 dB."
]);
feilforklaring("S22-FB12", [
  "Ved 40 dB HL er døde regioner lite sannsynlige.",
  "Ved 55 dB HL er en død region fortsatt mindre sannsynlig enn ikke.",
  "",
  "Grensen ligger lavere. Ved 100 dB HL er det enda mer sannsynlig, men grensen er 70 dB HL."
]);
feilforklaring("S22-FB13", [
  "ULL er maksimum for OSPL90, ikke minimum.",
  "",
  "OSPL90 skal tilpasses pasienten, ikke settes fast til 90 dB SPL.",
  "Minimumet skal sørge for at hevet stemme (75 dB SPL) ikke begrenses, ikke bare at samtaletale blir hørbar."
]);
feilforklaring("S22-FB14", [
  "Mange ulike lyttemiljøer er en typisk grunn til å ha flere program.",
  "Å være fornøyd i noen situasjoner, men ikke andre, er en typisk grunn til å ha flere program.",
  "Tap over 55 dB HL ved 2–4 kHz er en typisk kandidat for flere program.",
  ""
]);

// ---------- Verifisering og validering ----------

feilforklaring("S22-RE01", [
  "155 dB er summen. REIG er differansen.",
  "70 dB er REUR alene, ikke forskjellen.",
  "",
  "−15 dB er REUR minus REAR. Det skal være REAR minus REUR."
]);
feilforklaring("S22-RE02", [
  "",
  "80 dB er REAR (responsen), ikke forsterkningen.",
  "145 dB er summen. Gain er differansen.",
  "65 dB er inputnivået, ikke forsterkningen."
]);
feilforklaring("S22-RE03", [
  "REUG måles uten høreapparat og kan ikke vise døde regioner. Et unormalt lavt nivå ved 6 kHz tyder på feil plassering.",
  "",
  "REUG skal ikke være under −5 dB ved 6 kHz. −9 dB er ikke normalt.",
  "Høyttalerens avstand forklarer ikke et lavt nivå ved 6 kHz. Anbefalt avstand er 0,5–1 m, ikke 2 m."
]);
feilforklaring("S22-RE04", [
  "REAR er en objektiv akustisk måling, altså verifisering.",
  "Koplermåling er en teknisk kontroll av apparatet, altså verifisering.",
  "",
  "REUG er en objektiv akustisk måling, altså verifisering."
]);
feilforklaring("S22-RE05", [
  "Ved åpne tilpasninger lekker forsterket lyd ut til referansemikrofonen, så MPCE blir feil.",
  "",
  "Koplermåling tar ikke hensyn til pasientens øre og erstatter ikke REM.",
  "REIG krever REUR, siden REIG = REAR − REUR."
]);
feilforklaring("S22-RE06", [
  "Inntil 2 dB gjelder umiddelbar gjentakelse uten å røre utstyret.",
  "",
  "Inntil 6–7 dB gjelder målinger ved ulike besøk.",
  "Over 10 dB er langt mer enn forventet og tyder på feil."
]);
feilforklaring("S22-RE07", [
  "REAR krever også sondeslange.",
  "",
  "REAR påvirkes av øregangsresonansen. Den måler nettopp det som skjer i øregangen.",
  "ISO 21388 godtar både REM og funksjonell forsterkning, og ikke bare REAR."
]);
feilforklaring("S22-RE08", [
  "18 mm passer for små barn (18–22 mm), ikke voksne menn.",
  "24 mm er for grunt for en voksen mann, og slangen vil ligge for langt ute.",
  "",
  "40 mm er for dypt og øker risikoen for å berøre trommehinnen."
]);
feilforklaring("S22-RE09", [
  "Toleransene kan gi større avvik enn ±1 dB.",
  "",
  "±15 dB er langt mer enn komponenttoleransene alene gir.",
  "CORFIG er en korreksjon fra kopler til ekte øre, men tar ikke hensyn til komponenttoleranser."
]);
feilforklaring("S22-RE10", [
  "COSI er validering, ikke verifisering.",
  "",
  "Koplermåling alene oppfyller ikke kravet, siden den ikke måler i pasientens øre.",
  "Taleaudiometri i fritt felt er validering."
]);
feilforklaring("S22-RE11", [
  "Dette kan REM vise: den måler forsterkningen i øregangen.",
  "Dette kan REM vise: den sammenligner målt respons med målforsterkningen.",
  "",
  "Dette kan REM vise: REAR sammenlignes med tersklene."
]);
feilforklaring("S22-RE12", [
  "REOR måles med apparatet avslått, så den viser ikke forsterkning.",
  "",
  "Øregangsresonansen uten noe i øret er REUR.",
  "Maksimalt utgangsnivå måles med f.eks. RESR eller OSPL90 i kopler."
]);
feilforklaring("S22-RE13", [
  "",
  "ISTS passer for å se hvordan apparatet fungerer med tale, men kurven er laget med rentone. Da sammenligner du ulike ting.",
  "Live-stemme er ikke standardisert og kan ikke sammenlignes med en simulert kurve.",
  "Rosa støy på 90 dB SPL er verken det simuleringen bygger på eller et vanlig nivå for verifisering."
]);
feilforklaring("S22-RE14", [
  "",
  "Forelesningen anbefaler 0° eller 45° på 0,5–1 m avstand, ikke rett ved siden av øret.",
  "2–3 m er for langt unna. Anbefalt avstand er 0,5–1 m.",
  "Bak pasienten gir dårlig og ustabil måling. Anbefalingen er 0° eller 45°."
]);

// ---------- Rehabiliteringsplan og kandidatur ----------

feilforklaring("S22-RP01", [
  "Målene skal settes sammen med pasienten, ikke av audiografen alene.",
  "",
  "Mål kan handle om mye mer enn høreapparatet, f.eks. kommunikasjon og deltakelse.",
  "Pasienten skal være med på å sette mål (brukermedvirkning)."
]);
feilforklaring("S22-RP02", [
  "",
  "Audiografen skal fortsatt gi informasjon. Det er en del av samarbeidet.",
  "Brukermedvirkning er et faglig og etisk prinsipp, ikke et krav fra leverandørene.",
  "Målene skal fortsatt være konkrete og målbare."
]);
feilforklaring("S22-RP03", [
  "Planen kan endres. Rehabilitering er en prosess.",
  "Nytt høreapparat er ikke den eneste løsningen. Ofte holder det med nye råd eller justerte mål.",
  "",
  "Det viktige er hva funnet fører til, ikke å gjenta samme vurdering."
]);
feilforklaring("S22-KA01", [
  "Forsøk på å bruke audiogrammet til å avgjøre kandidatur har mislyktes.",
  "Taletest sier noe om hørselen, men forutsier dårligere enn holdning og motivasjon.",
  "",
  "Alder alene forutsier ikke nytte av høreapparat."
]);
feilforklaring("S22-KA02", [
  "Motsatt: å legge problemet på andre tyder på lite innsikt.",
  "",
  "Utsagnet sier ingenting om typen hørselstap.",
  "Manglende aksept tyder på at pasienten ikke er helt klar ennå."
]);
feilforklaring("S22-KA03", [
  "Høreapparater fjerner ikke støyproblemet. Et slikt løfte gir skuffelse.",
  "Pasienten kan ha nytte av apparat i andre situasjoner. Det viktige er realistiske forventninger.",
  "",
  "Uten informasjon om støy blir pasienten trolig skuffet. Det er audiografens jobb å avstemme forventningene."
]);
feilforklaring("S22-KA04", [
  "Uten pasientens egen motivasjon blir apparatet ofte liggende i skuffen.",
  "",
  "Døren skal være åpen. Pasienten kommer gjerne tilbake når motivasjonen er der.",
  "Det er motivasjonen, ikke hørselen, som må endre seg. Pasienten kan komme tilbake når hen selv er klar."
]);
feilforklaring("S22-KA05", [
  "For lavt. Forelesningen oppgir 20–30 %.",
  "",
  "For høyt. Forelesningen oppgir 20–30 %.",
  "Langt for høyt. Forelesningen oppgir 20–30 %."
]);
feilforklaring("S22-KA06", [
  "Høreapparater gir ikke dårlig lyd for alle. Motstanden handler om identitet og endring.",
  "",
  "Pasientene det gjelder har hørselstap. Motstanden handler om å akseptere det.",
  "Motstanden skyldes ikke manglende informasjon, men at endringen er krevende."
]);

// ---------- Høreapparattyper og komponenter ----------

feilforklaring("S22-HA01", [
  "35 dB SPL er input minus gain. Forsterkning legges til.",
  "60 dB SPL er inputen uten forsterkning.",
  "",
  "150 dB SPL er ikke en sum av input og gain i dB. Output = 60 + 25 = 85 dB SPL."
]);
feilforklaring("S22-HA02", [
  "Problemet er ikke mikrofonen, men det reduserte dynamikkområdet.",
  "",
  "Batterispenningen forklarer ikke at sterke lyder blir for sterke.",
  "Ved sensorinevralt tap er frekvensoppløsningen ofte dårligere, og den forklarer uansett ikke problemet."
]);
feilforklaring("S22-HA03", [
  "20 timer får du med 5 mA forbruk.",
  "",
  "100 timer får du med 1 mA forbruk.",
  "200 timer får du med 0,5 mA forbruk."
]);
feilforklaring("S22-HA04", [
  "M gir bare mikrofonen, så brukeren hører ikke slyngen.",
  "T gir bare slyngen, så brukeren hører ikke personen ved siden av.",
  "",
  "DAI (direkte lydinngang) er en kablet tilkobling, ikke en innstilling for induksjonsslynge."
]);
feilforklaring("S22-HA05", [
  "Motsatt: digitale apparater har lavere egenstøy.",
  "",
  "Digitale apparater kan nettopp justere forsterkningen automatisk.",
  "Digitale apparater kan gjøres mindre, ikke større."
]);

// ---------- Ørepropper og avstøp ----------

feilforklaring("S22-OP01", [
  "Feedback gir piping, ikke hul og buldrende egen stemme. Mindre ventilering ville gjort okklusjonen verre.",
  "",
  "Diskantforsterkning forklarer ikke hul egen stemme. Plagen kommer fra bassen.",
  "MPO forklarer ikke hul egen stemme."
]);
feilforklaring("S22-OP02", [
  "Ventileringen påvirker bassen. Diskantforsterkningen blir ikke større.",
  "Motsatt: stor ventilering gir mer feedback.",
  "",
  "Motsatt: stor ventilering svekker retningsmikrofonene, fordi uprosessert lyd kommer inn gjennom venten."
]);
feilforklaring("S22-OP03", [
  "Ventileringen påvirker bassen.",
  "",
  "Akustiske filtre påvirker mellomfrekvensene (demper resonanstopper).",
  "Materialet påvirker komfort og passform, ikke diskantforsterkningen direkte."
]);
feilforklaring("S22-OP04", [
  "Ved tap over 50 dB i bassen trengs ikke ventilering for okklusjonens skyld.",
  "Minst 2 mm gjelder terskler bedre enn 30 dB.",
  "",
  "En helt åpen løsning gir for lite bassforsterkning ved 55 dB HL i bassen."
]);
feilforklaring("S22-OP05", [
  "En stor pad gjør ikke avstøpet trygt når trommehinnen er perforert.",
  "",
  "Massen gjør det ikke trygt. Perforert trommehinne er en kontraindikasjon.",
  "Åpen munn påvirker øregangens form, men gjør det ikke trygt ved perforasjon."
]);
feilforklaring("S22-OP06", [
  "Bobler har betydning før andre sving. Det er bare etter andre sving at de kan tolereres.",
  "",
  "",
  "Et avtrykk skal aldri forlenges manuelt."
]);
feilforklaring("S22-OP07", [
  "Hornvirkningen kommer av lydkanalens form, ikke av lengden på proppen.",
  "",
  "Lengden på proppen gjør ikke ventileringen større.",
  "Okklusjon påvirker egen stemme, ikke lydnivået fra apparatet. En dyp propp gir heller mindre okklusjon."
]);

// ---------- Kompresjon ----------

feilforklaring("S22-KO01", [
  "Ratioen er input-økning delt på output-økning, ikke omvendt.",
  "",
  "2:1 ville gitt 15 dB output-økning for 30 dB input-økning.",
  "10:1 ville gitt bare 3 dB output-økning."
]);
feilforklaring("S22-KO02", [
  "40 dB får du hvis du ganger med 2. Ved 2:1 deler du på 2.",
  "20 dB er lineær forsterkning (1:1), ikke 2:1.",
  "",
  "2 dB får du med 10:1."
]);
feilforklaring("S22-KO03", [
  "",
  "Høyere ratio påvirker sterke lyder over kompresjonsterskelen, ikke susing i stille rom.",
  "Peak clipping kutter sterke lyder, ikke svake.",
  "Release time bestemmer hvor raskt forsterkningen øker igjen etter en sterk lyd. Den fjerner ikke sus."
]);
feilforklaring("S22-KO04", [
  "Peak clipping virker på sterke lyder, ikke svake.",
  "",
  "Peak clipping virker øyeblikkelig. Attack time er et begrep for kompresjon.",
  "Peak clipping virker på alle frekvenser."
]);
feilforklaring("S22-KO05", [
  "Høy terskel og høy ratio er kompresjonsbegrensning.",
  "",
  "WDRC begynner å komprimere på lave nivåer, under ca. 50 dB SPL.",
  "WDRC har korte tider (attack under 5 ms, release 20–100 ms)."
]);
feilforklaring("S22-KO06", [
  "Mer bass gir mer maskering fra den lavfrekvente støyen.",
  "",
  "Å slå av kompresjonen hjelper ikke mot lavfrekvent støy.",
  "Høyere MPO i bassen gir ikke mindre maskering."
]);

// ---------- Retningsmikrofoner og feilsøking ----------

feilforklaring("S22-RM01", [
  "Dette er den ideelle situasjonen for retningsmikrofon.",
  "",
  "Retningsmikrofonen hjelper her, fordi taleren er foran.",
  "Retningsmikrofonen hjelper når taleren er foran."
]);
feilforklaring("S22-RM02", [
  "Omni tar inn lyd likt fra alle retninger.",
  "Nyremønsteret tar inn lyd fra sidene, men demper lyd bakfra.",
  "Hypernyre tar inn lyd fra sidene, men demper mer fra sidene enn nyre.",
  ""
]);
feilforklaring("S22-RM03", [
  "DI sier noe om retningsvirkning, ikke hvor mye apparatet forsterker.",
  "",
  "DI sier ikke noe om egenstøy.",
  "DI sier ikke noe om vindstøy."
]);
feilforklaring("S22-EA01", [
  "−6 dB får du hvis du trekker øregangen fra kopleren. Det skal være omvendt.",
  "",
  "194 dB er summen, ikke differansen.",
  "0 dB ville betydd at øregangen og kopleren gir likt nivå, men de gir 100 og 94 dB."
]);
feilforklaring("S22-EA02", [
  "Er det proppen, ville pipingen forsvunnet når mikrofoninngangen tettes.",
  "",
  "En feilinnsatt propp ville gitt lekkasje utenfra, og pipingen ville forsvunnet når mikrofonen tettes.",
  "Lekkasje gjennom venten ville forsvunnet når mikrofonen tettes."
]);
feilforklaring("S22-EA03", [
  "Mikrofonen tar opp bass. Problemet er at forsterkningen er størst i diskanten.",
  "",
  "Ventileringen slipper ut alle frekvenser, mest bass.",
  "Batteriet gir ikke ulik strøm til ulike frekvenser."
]);
feilforklaring("S22-EA04", [
  "Apparatet er ikke defekt. Det sto i feil program.",
  "",
  "Batteriet forklarer ikke en summing som forsvinner i vanlig program.",
  "Proppen har ingenting med summingen å gjøre."
]);

// ---------- Tilpasning i praksis ----------

feilforklaring("S22-TP01", [
  "Med 45 dB i bassen og 85 dB i diskanten gir en liten åpen løsning trolig for lite forsterkning.",
  "",
  "Hun er en kandidat. Utfordringen er å velge riktig apparattype.",
  "Ulike typer og koblinger gir ulik mulig forsterkning."
]);
feilforklaring("S22-TP02", [
  "Målet er ±5 dB, ikke 0 dB.",
  "",
  "Målet er ±5 dB, ikke under 1 dB.",
  "REM er viktig for å se om målet er nådd."
]);
feilforklaring("S22-TP03", [
  "Rask kompresjon passer best ved god kognisjon og miljøer der nivået endrer seg raskt.",
  "",
  "Lineær forsterkning tar ikke hensyn til redusert dynamikkområde.",
  "Peak clipping gir forvrengning og passer dårlig."
]);
feilforklaring("S22-TP04", [
  "Batteriet er ikke grunnen. Tilvenningen er det viktige.",
  "",
  "Apparatet virker i støy, men nytten er mindre, så det er lurt å starte i stille omgivelser.",
  "NAV stiller ikke slike krav."
]);
feilforklaring("S22-BB01", [
  "Binaural forstyrrelse er at to apparater gir dårligere resultat enn ett, ikke at det uforsterkede øret blir dårligere.",
  "",
  "Binaural squelch er en fordel ved to ører: hjernen bruker forskjellene til å dempe støy.",
  "Okklusjon gjelder egen stemme med propp i øret, ikke svekket taleforståelse over tid."
]);
feilforklaring("S22-BB02", [
  "Pasienten bestemmer selv. Audiografen kan ikke nekte.",
  "Audiografen må informere om fordelene og dokumentere anbefalingen.",
  "",
  "Valg av øre avhenger av flere forhold og er ikke alltid det dårligste."
]);
feilforklaring("S22-BB03", [
  "At lyd oppleves sterkere med to ører er binaural summasjon.",
  "",
  "At hodet demper lyd til øret på motsatt side er hodeskyggeeffekten.",
  "Dette beskriver ITD for lyd rett forfra, ikke squelch."
]);

// ---------- Problemløsning og finjustering ----------

feilforklaring("S22-FJ01", [
  "Å fjerne all diskant gir dårligere taleforståelse. Løsningen er gradvis tilvenning.",
  "",
  "Et lineært apparat løser ikke tilvenningsproblemet og passer dårlig ved redusert dynamikkområde.",
  "Pasientens opplevelse skal tas på alvor. Et tilvenningstrinn er bedre enn å ikke gjøre noe."
]);
feilforklaring("S22-FJ02", [
  "",
  "For lite forsterkning av svake lyder ville gjort det vanskelig å høre på avstand, ikke nær.",
  "Ventileringen forklarer ikke forskjellen mellom nær og fjern tale.",
  "Ekspansjon påvirker svært svake lyder i stillhet, ikke tale på nært hold."
]);
feilforklaring("S22-FJ03", [
  "Støy fyller ikke venten. Det er forsterkningen som senkes i støy.",
  "",
  "Et svakt batteri forklarer ikke at pipingen forsvinner i støy.",
  "Retningsmikrofonen slås heller på i støy, og den forklarer ikke pipingen."
]);
feilforklaring("S22-FJ04", [
  "Når støyen ligner tale, hjelper det lite å endre frekvensresponsen.",
  "",
  "Høyere MPO bedrer ikke signal/støy-forholdet.",
  "Større ventilering slipper inn mer uprosessert støy og svekker retningsmikrofonen."
]);

// ---------- Validering og utbyttevurdering ----------

feilforklaring("S22-VA01", [
  "21 dB SPL får du hvis du trekker fra alle 24 ord. Formelen er startnivå minus halvparten av ordene.",
  "",
  "45 dB SPL er startnivået, ikke HTT.",
  "57 dB SPL får du hvis du legger til i stedet for å trekke fra."
]);
feilforklaring("S22-VA02", [
  "Lavere terskel er bedre, så en nedgang fra 38 til 31 er en bedring.",
  "",
  "31 dB er terskelen med høreapparat, ikke utbyttet.",
  "69 dB er summen. Utbyttet er differansen."
]);
feilforklaring("S22-VA03", [
  "",
  "3 dB får du hvis du snur fortegnet. 5 − 8 = −3.",
  "5 dB er start-SNR, ikke resultatet.",
  "13 dB får du hvis du legger til i stedet for å trekke fra."
]);
feilforklaring("S22-VA04", [
  "Motsatt: HTT gir en bratt kurve.",
  "",
  "HTT kan også brukes i støy.",
  "Treordsytringer har en del redundans. Det som gjør dem egnet, er den bratte kurven."
]);
feilforklaring("S22-VA05", [
  "COSI måler ikke bare tale i støy. Pasienten velger selv situasjonene.",
  "",
  "COSI brukes både før (mål) og etter (utbytte) tilpasning.",
  "COSI er subjektivt: pasienten vurderer selv."
]);

// ---------- Døde regioner og TEN-test ----------

feilforklaring("S22-TE01", [
  "At den maskerte terskelen er over TEN-nivået er nettopp tegnet på død region når den er minst 10 dB over.",
  "",
  "En terskel over 70 dB HL gjør død region sannsynlig, men det er TEN-kriteriene som avgjør.",
  "Testen kan tolkes: begge kriteriene er oppfylt."
]);
feilforklaring("S22-TE02", [
  "Begge kriteriene må være oppfylt. Den maskerte terskelen er bare 4 dB over TEN-nivået.",
  "",
  "Bare ett kriterium er oppfylt. 74 − 70 = 4 dB, som er under 10 dB.",
  "Konklusjonen er riktig, men begrunnelsen holder ikke. Det avgjørende er TEN-kriteriet."
]);
feilforklaring("S22-TE03", [
  "1050 Hz er 70 % av kantfrekvensen, ikke grensen.",
  "1500 Hz er selve kantfrekvensen. Regelen tillater forsterkning litt inn i den døde regionen.",
  "",
  "3000 Hz er det dobbelte av kantfrekvensen, ikke 1,7 ganger."
]);

// ---------- Tilleggsutstyr og NAV ----------

feilforklaring("S22-SY01", [
  "Lydutjevningsanlegg bruker høyttalere og påvirkes ikke av sollys.",
  "FM bruker radiobølger og påvirkes ikke av sollys.",
  "",
  "Teleslynge bruker magnetfelt og påvirkes ikke av sollys."
]);
feilforklaring("S22-SY02", [
  "Gevinsten kommer av bedre SNR, ikke mer diskant.",
  "",
  "En ekstern mikrofon endrer ikke apparatets kompresjon.",
  "En ekstern mikrofon brukes sammen med høreapparatet, ikke i stedet for det."
]);
feilforklaring("S22-NA01", [
  "Design er ikke et behov. Det høyest rangerte som dekker behovet skal velges.",
  "",
  "Dispensasjon er bare aktuelt når ingen apparater i avtalen dekker behovet.",
  "Rangeringen i rammeavtalen skal følges."
]);
feilforklaring("S22-NA02", [
  "Del A sendes ikke på nytt ved bytte i utprøvingen.",
  "",
  "Hele søknaden trenger ikke starte på nytt. Bare del B fylles ut igjen.",
  "Byttet må dokumenteres ved å fylle ut del B på nytt."
]);
feilforklaring("S22-NA03", [
  "Funksjonsvansken må være varig, dvs. 2 år eller mer, ikke 3 måneder.",
  "",
  "Det er ingen aldersgrense for hjelpemidler fra NAV.",
  "Man trenger ikke være i arbeid. Medlemskap i folketrygden er vilkåret."
]);

// ---------- Rådgivning og motivasjon ----------

feilforklaring("S22-RG01", [
  "Prisen er ikke poenget. Problemet er at apparatet ikke korrigerer fullt ut.",
  "",
  "Audiografer kan tilpasse høreapparater.",
  "Biomedisinske modeller brukes i Norge, men de er ikke nok alene."
]);
feilforklaring("S22-RG02", [
  "Brukermedvirkning er en rett, ikke en plikt.",
  "",
  "Brukermedvirkning gjelder alle pasienter, ikke bare barn.",
  "Brukermedvirkning betyr at pasienten selv kan medvirke, ikke at pårørende bestemmer."
]);
feilforklaring("S22-MI01", [
  "Dette er et lukket spørsmål som kan besvares med ja eller nei.",
  "",
  "Dette er et ledende spørsmål som presser pasienten.",
  "Dette er et lukket spørsmål som kan besvares med ja eller nei."
]);
feilforklaring("S22-MI02", [
  "I prekontemplasjon erkjenner ikke pasienten problemet. Her er det en begynnende erkjennelse.",
  "",
  "I forberedelse er pasienten klar til å gjøre noe, men her er hun fortsatt ambivalent.",
  "Vedlikehold er etter at endringen er gjort."
]);
feilforklaring("S22-MI03", [
  "Pasienten er ikke klar for hjelp. Å bestille apparat nå gir trolig et skuffapparat.",
  "",
  "Å overbevise gir motstand. MI handler om å lytte og la pasienten finne egne grunner.",
  "Døren skal holdes åpen med en ny time."
]);
feilforklaring("S22-MI04", [
  "Å si at svaret er for lavt er konfronterende og gir motstand.",
  "",
  "En lav skår betyr ikke at pasienten ikke trenger apparat. Den skal utforskes.",
  "Å overstyre pasientens svar er det motsatte av MI."
]);
feilforklaring("S22-KS01", [
  "Å be taleren vende seg mot deg er en adaptiv strategi (instruksjon).",
  "Å gjenfortelle er en adaptiv strategi (reparasjon).",
  "",
  "Å sitte med ryggen mot vinduet er en adaptiv strategi (miljø). Da faller lyset på taleren."
]);
feilforklaring("S22-KS02", [
  "Fasilitering og miljø handler om å endre omgivelsene, f.eks. lys og støy.",
  "",
  "Å be om at noe skrives ned er en adaptiv strategi.",
  "Samtaleregler handler om hvordan samtalen foregår, f.eks. at én snakker om gangen."
]);

// ---------- Tinnitus og hyperakusis ----------

feilforklaring("S22-TI01", [
  "Full maskering stresser hørselssystemet og hindrer hjernen i å lære å lytte bort fra tinnitusen.",
  "",
  "Like sterkt som tinnitusen er for sterkt. Lyden skal være svakere.",
  "Så høyt pasienten tåler er for sterkt og kan øke plagene."
]);
feilforklaring("S22-TI02", [
  "Ved hyperakusis avhenger reaksjonen av lydens nivå og frekvens, ikke av hva lyden er.",
  "",
  "Recruitment er unormal hørestyrkevekst ved cochleært tap.",
  "Objektiv tinnitus er en lyd som kan måles fra kroppen, ikke en reaksjon på andres lyder."
]);
feilforklaring("S22-TI03", [
  "Modellen sier at nivået i dB har liten betydning for plagsomheten.",
  "",
  "Graden av hørselstap bestemmer ikke plagsomheten.",
  "Hvilket øre tinnitusen sitter i bestemmer ikke plagsomheten."
]);
feilforklaring("S22-TI04", [
  "Propper hele tiden øker følsomheten.",
  "",
  "Tettere propper gjør følsomheten verre.",
  "Propper om natten gir enda mer stillhet og øker følsomheten."
]);

// ---------- Benforankret høreapparat og CI ----------

feilforklaring("S22-CI01", [
  "Et benforankret apparat stimulerer via skjelettet med vibrasjon, ikke elektrisk. Det er CI som stimulerer elektrisk.",
  "",
  "Det passer nettopp ved konduktive og kombinerte tap, som her.",
  "Fordelen er at øregangen holdes åpen, altså mindre okklusjon."
]);
feilforklaring("S22-CI02", [
  "Alder er ikke en signifikant faktor for resultatet med CI.",
  "",
  "CI gis til både barn og voksne.",
  "Hun bør henvises nå. Det er ingen grunn til å vente."
]);
