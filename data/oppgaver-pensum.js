// Pensumspørsmål for AUT2201: 100 flervalgsspørsmål generert med KI ut fra forelesningene
// (Majas øvingseksamen 2026, med fasit og forklaringer). Ikke en offisiell eksamen.
// Fasiten er oppgitt i fasitarket og kontrollert. Pensumhenvisningen står bak forklaringen.
// 15 spørsmål fantes allerede i banken og er tatt ut av settet (nr og spørsmålet
// som finnes fra før): 2 (EA-033), 6 (EA-052), 8 (O24-098), 9 (O24-061), 12 (EA-034), 29 (EA-100), 36 (EA-050), 38 (EA-103), 49 (EA-092), 69 (EA-096), 70 (O24-047), 71 (EA-054), 88 (H25-092), 91 (EA-006), 100 (O24-069).
// Bygd fra kilder/pensum-2026.txt med kilder/bygg-pensum.pl. Samme felter som i data/oppgaver.js.

OPPGAVER.push(
  {
    id: "P26-001", eksamen: "Pensumspørsmål", nr: 1, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Hva følger av at eldre er en heterogen gruppe når man planlegger en audiologisk rehabilitering?",
    figur: null,
    alternativer: [
      "Mål og tiltak bør tilpasses personens funksjon, ønsker og livssituasjon",
      "Alle over samme alder bør få identisk oppfølging",
      "Eldre kan ikke selv beskrive sine mål",
      "Bare kronologisk alder avgjør hvilket tiltak som passer"
    ],
    riktig: 0, forklaring: "Forelesningen vektlegger individuelle forskjeller og å spørre den eldre selv. (Pensum: Presentasjon om aldring_deltakelse og livskvalitet.pptx, s. 50)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-003", eksamen: "Pensumspørsmål", nr: 3, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Ved 2000 Hz er høreterskelen 55 dB HL, TEN-nivået 70 dB HL og maskert terskel 88 dB HL. Hvilken tolkning følger TEN-kriteriene i forelesningen?",
    figur: null,
    alternativer: [
      "Resultatet utelukker død region fordi TEN ligger over høreterskelen",
      "Resultatet er forenlig med en død region ved 2000 Hz",
      "Resultatet beviser at bare ytre hårceller er skadet",
      "Resultatet kan bare tolkes ved å måle luft-bein-gap"
    ],
    riktig: 1, forklaring: "Maskert terskel er 18 dB over TEN og 33 dB over umaskert terskel, altså over begge kriteriene. (Pensum: NTNU - Lecture - CDR -2026.pdf, s. 30-35)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-004", eksamen: "Pensumspørsmål", nr: 4, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "En person later gjentatte ganger som hen har forstått alt, selv om viktige beskjeder går tapt. Hvorfor kan dette bli en uhensiktsmessig strategi over tid?",
    figur: null,
    alternativer: [
      "Den forbedrer alltid taleforståelsen i støy",
      "Den kan gi misforståelser og økt sosial belastning selv om den virker lettvint der og da",
      "Den gjør alle samtalepartnere mer oppmerksomme på kommunikasjonshindringer",
      "Den må nødvendigvis redusere alle former for stigma"
    ],
    riktig: 1, forklaring: "Ugunstige strategier kan fungere kortsiktig, men skape problemer ved gjentatte misforståelser. (Pensum: Hørselstap og psykisk helse_mestringsstrategier.pptx, s. 40)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-005", eksamen: "Pensumspørsmål", nr: 5, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Under en ABLB-test har pasienten ensidig sensorinevralt hørselstap. Hva gjør testeren når en lik hørestyrke er funnet ved et lavt nivå?",
    figur: null,
    alternativer: [
      "Setter automatisk begge ører til 0 dB HL og avslutter",
      "Øker nivået i det dårligere øret og finner på nytt nivået i det gode øret som høres like sterkt",
      "Bytter testfrekvens for hvert enkelt tonesignal",
      "Presentere bare støysignaler til begge ørene"
    ],
    riktig: 1, forklaring: "ABLB gjentar hørestyrkebalansering ved flere nivåer for å kartlegge hørestyrkevekst. (Pensum: 2026_Noen slides om Loudness-skalering SISI og ABLB 2.pptx, s. 13)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-007", eksamen: "Pensumspørsmål", nr: 7, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hva er mest i tråd med en induktiv tilnærming i kvalitativ forskning?",
    figur: null,
    alternativer: [
      "Å starte med en fast statistisk modell som ikke kan endres av funnene",
      "Å utvikle begreper og mønstre med utgangspunkt i deltakernes beskrivelser",
      "Å kreve normalfordelte data fra alle intervjuer",
      "Å beregne et presist gjennomsnitt for hvert ord i intervjuet"
    ],
    riktig: 1, forklaring: "Kvalitativ forskning beskrives som induktiv og utforskende med vekt på mening og erfaring. (Pensum: 2026 22.08 forelesning Kvalitativ forskning og artikler(1).pdf, s. 7-9)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-010", eksamen: "Pensumspørsmål", nr: 10, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilken funksjon er særlig knyttet til den anteriore ventrale cochleariskjernen (AVCN)?",
    figur: null,
    alternativer: [
      "Å regulere blodtrykk under trening",
      "Å produsere otoakustiske emisjoner i øregangen",
      "Å registrere lineær akselerasjon med otokonier",
      "Å bevare og forbedre presis temporal informasjon i nerveaktiviteten"
    ],
    riktig: 3, forklaring: "AVCN bidrar til nøyaktig temporal koding og kan faselåse til relativt høye toner. (Pensum: Det sentrale hørselssystemet_2.pdf, s. 10)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-011", eksamen: "Pensumspørsmål", nr: 11, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "En pasient er nylig utskrevet etter hjerneslag og har store samtalevansker i støy, selv om høretersklene knapt er endret. Hvilket forhold bør audiografen særlig vurdere?",
    figur: null,
    alternativer: [
      "At hjerneslag alltid fører til isolert skade på ytre hårceller",
      "At svake høreterskler alene forklarer alle symptomene",
      "Mulige sentrale auditive prosesseringsvansker og redusert overskudd",
      "At kognisjon og fatigue er irrelevant ved audiologisk oppfølging"
    ],
    riktig: 2, forklaring: "Etter hjerneslag kan auditiv prosessering og fatigue påvirkes uten et stort perifert terskeltap. (Pensum: Biologiske endringer_2026 i forkant.pptx, s. 22-24)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-013", eksamen: "Pensumspørsmål", nr: 13, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "I en psykoakustisk tuningkurve ligger det laveste maskeringsnivået tydelig på en annen frekvens enn testtonen. Hva gir dette mistanke om?",
    figur: null,
    alternativer: [
      "At maskeringsstøy ikke har noen innvirkning på høreterskelen",
      "Off-frequency listening fordi regionen ved testfrekvensen kan være død",
      "At alle hårceller har identisk respons på alle frekvenser",
      "At testtonen ikke hadde noen fysisk frekvens"
    ],
    riktig: 1, forklaring: "En forskjøvet tuningkurve kan vise at testtonen registreres i et annet, fungerende cochleært område. (Pensum: NTNU - Lecture - CDR -2026.pdf, s. 24-27)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-014", eksamen: "Pensumspørsmål", nr: 14, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Under en samtale oppfatter høreapparatbrukeren «Vi møtes på tirsdag», men er usikker på klokkeslettet. Hvilken reparasjonsstrategi er mest presis?",
    figur: null,
    alternativer: [
      "Å spørre «Var det klokken to eller tre vi skulle møtes?»",
      "Å nikke og late som alt er forstått",
      "Å forlate samtalen uten å si noe",
      "Å øke bakgrunnsstøyen for å høre bedre"
    ],
    riktig: 0, forklaring: "Et spesifikt oppklaringsspørsmål kan reparere akkurat den informasjonen som mangler. (Pensum: Hørselstap og psykisk helse_mestringsstrategier.pptx, s. 28)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-015", eksamen: "Pensumspørsmål", nr: 15, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Under SISI-testing skal pasienten kjenne igjen små nivåøkninger. Hvilken størrelse brukes typisk på nivåøkningen i selve testen etter øving?",
    figur: null,
    alternativer: [
      "20 dB",
      "1 dB",
      "En hel oktav",
      "100 dB"
    ],
    riktig: 1, forklaring: "SISI undersøker deteksjon av små nivåøkninger på 1 dB i en vedvarende tone. (Pensum: 2026_Noen slides om Loudness-skalering SISI og ABLB 2.pptx, s. 18)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-016", eksamen: "Pensumspørsmål", nr: 16, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hvilket par av lydsignaler gir mest grunn til å forvente at nivåforskjeller mellom ørene, heller enn faseforskjeller, er en viktig retningsindikator?",
    figur: null,
    alternativer: [
      "To lavfrekvente lyder som kommer rett forfra",
      "To toner under 100 Hz fra midtlinjen",
      "Bare lyder som ikke når øremuslingen",
      "To høyfrekvente lyder som kommer fra siden"
    ],
    riktig: 3, forklaring: "Hodeskyggen gir særlig interaurale nivåforskjeller ved høyere frekvenser. (Pensum: binaural hearing.pdf, s. 5, 7)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-017", eksamen: "Pensumspørsmål", nr: 17, tema: "Forskningsmetode", poeng: 1,
    tekst: "En forsker henter fram gamle journaldata for å undersøke tidligere støypåvirkning hos personer med og uten hørselstap. Hva er særlig dekkende for tidsretningen?",
    figur: null,
    alternativer: [
      "Prospektiv undersøkelse der eksponering først skal skje i framtiden",
      "Retrospektiv undersøkelse",
      "Randomisert behandlingsforsøk",
      "En studie som automatisk er uten mulige feilkilder"
    ],
    riktig: 1, forklaring: "Retrospektive design bruker allerede inntrufne hendelser eller tidligere registrerte data. (Pensum: FoU_Forskningstyper og forkningsdesign.pdf, s. 3, 7)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-018", eksamen: "Pensumspørsmål", nr: 18, tema: "Statistikk", poeng: 1,
    tekst: "To variabler er tydelig skjevfordelte og rangeres fra lav til høy. Hvilken korrelasjonsmetode passer ofte bedre enn Pearsons r?",
    figur: null,
    alternativer: [
      "En uparet t-test",
      "Spearmans rangkorrelasjon",
      "En type I-feil",
      "Et stolpediagram uten statistisk beregning"
    ],
    riktig: 1, forklaring: "Spearmans metode bruker ranger og er egnet når forutsetningene for Pearsons korrelasjon ikke er oppfylt. (Pensum: Forelesning 11.09.26_FoU_slutningsstatistikk.pdf, s. 30, 32)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-019", eksamen: "Pensumspørsmål", nr: 19, tema: "Vestibulært", poeng: 1,
    tekst: "En pasient får kortvarig, posisjonsutløst rotatorisk svimmelhet ved å legge seg bakover. Hvilken mekanisme er typisk ved kanalolithiasis?",
    figur: null,
    alternativer: [
      "Løse otokonier beveger seg i en buegang og påvirker endolymfen",
      "Økt lydtrykk fører til skade på trommehinnen",
      "Otolittmembranen slutter å registrere gravitasjon hos alle pasienter",
      "Cochlea lager flere otoakustiske emisjoner"
    ],
    riktig: 0, forklaring: "Ved krystallsyke kan otokonier havne i en buegang og gi unormal stimulering ved stillingsendring. (Pensum: vestibulær_del_I.pdf, s. 27-29)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-020", eksamen: "Pensumspørsmål", nr: 20, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilket responsmønster beskrives som det vanligste for nevroner i den ventrale delen av MGB?",
    figur: null,
    alternativer: [
      "Bare en «off»-respons når lyden slutter",
      "Fullstendig fravær av respons på auditiv stimulering",
      "En respons som bare utløses ved lys",
      "En «on»-respons ved stimulusstart"
    ],
    riktig: 3, forklaring: "Forelesningen oppgir «on»-responser som vanlige i ventrale MGB. (Pensum: Det sentrale hørselssystemet_3.pdf, s. 14)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-021", eksamen: "Pensumspørsmål", nr: 21, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "En audiograf skal støtte en eldre bruker i å opprettholde deltakelse. Hva er mest i tråd med forelesningens råd?",
    figur: null,
    alternativer: [
      "Anbefale at vedkommende unngår nye sosiale arenaer",
      "Bestemme alle livsmål ut fra audiogrammet alene",
      "Avslutte oppfølgingen når høreapparatet er utdelt",
      "Spørre hva som er meningsfullt for brukeren og hvilke relasjoner og aktiviteter vedkommende ønsker å bevare"
    ],
    riktig: 3, forklaring: "Målene for aktiv deltakelse bør ta utgangspunkt i den enkeltes egne interesser og prioriteringer. (Pensum: Presentasjon om aldring_deltakelse og livskvalitet.pptx, s. 49-50)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-022", eksamen: "Pensumspørsmål", nr: 22, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hva beskriver ekvivalent rektangulær båndbredde (ERB) for et auditivt filter?",
    figur: null,
    alternativer: [
      "Et mål på hvor bredt frekvensområde filteret i praksis slipper gjennom",
      "Antall hårceller i hver buegang",
      "Forskjellen mellom luft- og beinledningsterskler",
      "Hvor lenge et VEMP-signal varer"
    ],
    riktig: 0, forklaring: "ERB brukes til å beskrive den effektive båndbredden til auditive filtre. (Pensum: Impaired spectral processing-2.pdf, s. 3-4)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-023", eksamen: "Pensumspørsmål", nr: 23, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Et audiogram faller svært bratt, mer enn omtrent 50 dB per oktav i diskanten. Hva er den mest faglig begrunnede neste vurderingen?",
    figur: null,
    alternativer: [
      "Undersøke om det finnes en cochleær død region med en egnet test",
      "Konkludere med at alle frekvenser i cochlea er døde uten flere tester",
      "Utelukke cochleær patologi uten videre undersøkelser",
      "Bruke bare tympanometri til å lokalisere døde indre hårceller"
    ],
    riktig: 0, forklaring: "En svært bratt audiogramhelling er et mulig tegn, men er ikke i seg selv en bekreftelse på død region. (Pensum: NTNU - Lecture - CDR -2026.pdf, s. 21)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-024", eksamen: "Pensumspørsmål", nr: 24, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvorfor kan det være nyttig å involvere en nærperson i hørselsrehabiliteringen når pasienten ønsker det?",
    figur: null,
    alternativer: [
      "Fordi nærpersonen da kan overta alle medisinske beslutninger",
      "Fordi pasienten ikke lenger trenger å involveres",
      "Nærpersonen kan få bedre forståelse av hørselstapets konsekvenser og støtte kommunikasjon og tiltak",
      "Fordi det automatisk normaliserer pasientens audiogram"
    ],
    riktig: 2, forklaring: "Involvering av familie kan gi felles informasjon, forståelse og bedre oppfølging. (Pensum: Hørselstap og psykisk helse_mestringsstrategier.pptx, s. 30)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-025", eksamen: "Pensumspørsmål", nr: 25, tema: "Psykoakustikk", poeng: 1,
    tekst: "To lydsignaler har lik samlet intensitet. Det ene ligger innenfor ett kritisk bånd, det andre dekker mange kritiske bånd. Hvilket signal vil typisk oppfattes som sterkere?",
    figur: null,
    alternativer: [
      "Signalet som dekker mange kritiske bånd",
      "Signalet som ligger innenfor ett kritisk bånd, uansett sammensetning",
      "Begge må nødvendigvis ha lik hørestyrke",
      "Ingen av signalene kan oppfattes som lyd"
    ],
    riktig: 0, forklaring: "Spektral summasjon kan øke hørestyrken når energien fordeles over flere auditive filtre. (Pensum: Loudness and abnormal loudness.pdf, s. 16)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-026", eksamen: "Pensumspørsmål", nr: 26, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "En lytter hører en direkte lyd og en svakere, kort forsinket refleksjon. Hva beskriver «precedence effect» best?",
    figur: null,
    alternativer: [
      "Den siste refleksjonen bestemmer alltid hvor lyden oppleves å komme fra",
      "Den første lyden får stor betydning for opplevd retning, slik at tidlige refleksjoner undertrykkes som separate lydkilder",
      "Hørselen øker fysisk frekvensen til den direkte lyden",
      "Alle refleksjoner blir hørbare som separate ekko uansett tidsforsinkelse"
    ],
    riktig: 1, forklaring: "Precedence-effekten bidrar til stabil lydlokalisering i rom med refleksjoner. (Pensum: binaural hearing.pdf, s. 23)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-027", eksamen: "Pensumspørsmål", nr: 27, tema: "Forskningsmetode", poeng: 1,
    tekst: "I en kvalitativ studie kombinerer forskeren intervju, observasjon og feltnotater for å belyse samme fenomen. Hva kalles denne strategien?",
    figur: null,
    alternativer: [
      "Dikotisk maskering",
      "Triangulering",
      "Vekting med dBA",
      "Et enkelt målenivå på ratioskala"
    ],
    riktig: 1, forklaring: "Triangulering er bruk av flere datakilder eller metoder for å styrke forståelse og troverdighet. (Pensum: 2026 22.08 forelesning Kvalitativ forskning og artikler(1).pdf, s. 18, 20)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-028", eksamen: "Pensumspørsmål", nr: 28, tema: "Statistikk", poeng: 1,
    tekst: "En boks i et boxplot går fra 25-persentilen på 12 til 75-persentilen på 20. Hva er interkvartilbredden (IQR)?",
    figur: null,
    alternativer: [
      "12 enheter",
      "20 enheter",
      "32 enheter",
      "8 enheter"
    ],
    riktig: 3, forklaring: "IQR = Q3 − Q1 = 20 − 12 = 8. (Pensum: Deskriptiv statistikk og visualiseringer 26.pptx, s. 21-23)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-030", eksamen: "Pensumspørsmål", nr: 30, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hva inngår i «core-belt»-organiseringen av auditiv cortex?",
    figur: null,
    alternativer: [
      "Bare indre og ytre hårceller i cochlea",
      "Primære auditive områder omgitt av sekundære prosesseringsområder",
      "Tre bueganger rundt utriculus",
      "Bare nervefibre som går fra øret til ryggmargen"
    ],
    riktig: 1, forklaring: "Auditiv cortex er organisert med primære kjerneområder og omkringliggende belt-/parabelt-områder. (Pensum: Det sentrale hørselssystemet_3.pdf, s. 19)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-031", eksamen: "Pensumspørsmål", nr: 31, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "En eldre person hører en setning tydelig nok, men får vansker med å forstå den i et travelt miljø. Hvorfor bør utredningen omfatte mer enn rentoneaudiogrammet?",
    figur: null,
    alternativer: [
      "Fordi både sensorisk tilgang og kognitive tolkningsprosesser påvirker kommunikasjonen",
      "Fordi kognisjon ikke har noen forbindelse til hørsel",
      "Fordi rentoneaudiogrammet alltid måler arbeidsminnet direkte",
      "Fordi taleforståelse kun bestemmes av øremuslingens størrelse"
    ],
    riktig: 0, forklaring: "Hørsel involverer både bottom-up-informasjon og top-down-bearbeiding. (Pensum: Hørsel og kognisjon FERDIG 2026.pdf, s. 8-9)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-032", eksamen: "Pensumspørsmål", nr: 32, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hvorfor kan dårlig frekvensselektivitet gjøre det vanskeligere å skille enkelte vokaler i støy?",
    figur: null,
    alternativer: [
      "Tale mister alle temporale variasjoner før den når trommehinnen",
      "Øret registrerer bare lydstyrke og aldri frekvens",
      "Vokalenes varighet reduseres automatisk til null",
      "Spektrale kontraster i talesignalet blir mindre tydelige"
    ],
    riktig: 3, forklaring: "Brede auditive filtre «smører ut» spekteret og reduserer kontrast mellom formanter. (Pensum: Impaired spectral processing-2.pdf, s. 11-12)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-033", eksamen: "Pensumspørsmål", nr: 33, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "I en rapport om en høyfrekvent cochleær død region angis grensefrekvensen fe. Hva betegner denne?",
    figur: null,
    alternativer: [
      "Frekvensen til den sterkeste otoakustiske emisjonen",
      "Frekvensen til hjertets elektriske aktivitet",
      "Forskjellen mellom høreterskel og ubehagsterskel",
      "Frekvensgrensen der den døde regionen begynner"
    ],
    riktig: 3, forklaring: "«Edge frequency», fe, markerer grensen til den døde regionen. (Pensum: NTNU - Lecture - CDR -2026.pdf, s. 9)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-034", eksamen: "Pensumspørsmål", nr: 34, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "En person med hørselstap flytter seg nærmere taleren og ber om mindre bakgrunnsstøy. Hvordan kan tiltakene best beskrives?",
    figur: null,
    alternativer: [
      "En behandling som fjerner det sensorinevrale hørselstapet",
      "Et uttrykk for at hørselen har blitt objektivt normal",
      "En strategi som bare virker dersom pasienten ikke bruker høreapparat",
      "Tilpasning av kommunikasjonsmiljøet for å forbedre signaltilgangen"
    ],
    riktig: 3, forklaring: "Miljøtilpasning og god høretaktikk kan lette kommunikasjonen uten å endre selve høreterskelen. (Pensum: Hørselstap og psykisk helse_mestringsstrategier.pptx, s. 22, 26)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-035", eksamen: "Pensumspørsmål", nr: 35, tema: "Høreapparat og forsterkning", poeng: 1,
    tekst: "Hvorfor kan en fast, lineær høreapparatforsterkning gi problemer ved cochleært hørselstap med recruitment?",
    figur: null,
    alternativer: [
      "Moderat og sterk lyd kan bli for kraftig når pasientens dynamikkområde er redusert",
      "Alle høreterskler normaliseres automatisk ved enhver forsterkning",
      "Høreapparatet kan ikke forsterke lavfrekvente lyder",
      "Lineær forsterkning forbedrer alltid frekvensselektiviteten i cochlea"
    ],
    riktig: 0, forklaring: "Ved recruitment øker opplevd hørestyrke raskt, og nivåavhengig kompresjon kan være nødvendig. (Pensum: Loudness and abnormal loudness.pdf, s. 38-39)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-037", eksamen: "Pensumspørsmål", nr: 37, tema: "Forskningsmetode", poeng: 1,
    tekst: "En forsker undersøker endringer hos én bestemt deltaker gjennom flere tiltaksfaser. Hva er en typisk begrensning ved et single-subject-design?",
    figur: null,
    alternativer: [
      "Det er umulig å gjøre gjentatte målinger",
      "Det er aldri mulig å følge en persons utvikling",
      "Resultatene kan være vanskelige å generalisere til en større populasjon",
      "Designet krever alltid flere hundre deltakere"
    ],
    riktig: 2, forklaring: "Single-subject-studier gir detaljert forløpsinformasjon, men begrenset generaliserbarhet. (Pensum: FoU_Forskningstyper og forkningsdesign.pdf, s. 11-12)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-039", eksamen: "Pensumspørsmål", nr: 39, tema: "Vestibulært", poeng: 1,
    tekst: "Du roterer hodet raskt mot høyre mens du holder blikket på et punkt rett foran deg. Hva gjør VOR i den første kompensatoriske fasen?",
    figur: null,
    alternativer: [
      "Driver øynene langsomt mot høyre i samme retning som hodet",
      "Lukker øyelokkene umiddelbart",
      "Driver øynene langsomt mot venstre",
      "Flytter blikket oppover uavhengig av rotasjonen"
    ],
    riktig: 2, forklaring: "VOR stabiliserer bildet på netthinnen med øyebevegelse motsatt hodebevegelsen. (Pensum: vestibulær_del_I.pdf, s. 23-24)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-040", eksamen: "Pensumspørsmål", nr: 40, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "En foreleser beskriver en del av cochleariskjernen som viktig for å hente ut spektral informasjon fra komplekse lyder. Hvilken avdeling passer best?",
    figur: null,
    alternativer: [
      "Dorsal cochleariskjerne (DCN)",
      "Corpus callosum",
      "Vestibulærgangliet",
      "Sacculus"
    ],
    riktig: 0, forklaring: "DCN knyttes til analyse og ekstraksjon av lydens spektrale kjennetegn. (Pensum: Det sentrale hørselssystemet_2.pdf, s. 8, 10)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-041", eksamen: "Pensumspørsmål", nr: 41, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "En pasient virker forvirret under en muntlig kognitiv test i et rom med bakgrunnsstøy. Hva bør man være spesielt oppmerksom på?",
    figur: null,
    alternativer: [
      "At nedsatt hørsel kan gi kunstig svake resultater på kognitive tester",
      "At testresultatet alene gir sikker diagnose av demens",
      "At bakgrunnsstøy forbedrer kognitiv testing for alle",
      "At kognitiv testing måles i dB SPL"
    ],
    riktig: 0, forklaring: "Ubehandlet hørselstap kan bidra til feilfortolkning av kognitive testresultater. (Pensum: Hørsel og kognisjon FERDIG 2026.pdf, s. 21, 23)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-042", eksamen: "Pensumspørsmål", nr: 42, tema: "Tale og akustikk", poeng: 1,
    tekst: "To plosiver skiller seg særlig i tidsintervallet mellom utløsningen av plosiven og stemmebåndsvibrasjon. Hvilken akustisk egenskap er dette?",
    figur: null,
    alternativer: [
      "Voice onset time (VOT)",
      "Interaural nivåforskjell",
      "Cochleært ekvivalent lydnivå",
      "Dynamisk mellomøretrykk"
    ],
    riktig: 0, forklaring: "VOT er tidsintervallet som kan skille for eksempel /b/ fra /p/. (Pensum: temporal_processing.pdf, s. 4)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-043", eksamen: "Pensumspørsmål", nr: 43, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hva kan man først og fremst konkludere med når en nyfødt får «pass» på en TEOAE-screening?",
    figur: null,
    alternativer: [
      "At barnet har normal taleforståelse i støy",
      "At det ikke kan finnes noen nevral hørselsforstyrrelse",
      "At alle audiometriske terskler er bestemt nøyaktig i dB HL",
      "At testen viser tilfredsstillende respons fra cochleas ytre hårcellemekanisme under måleforholdene"
    ],
    riktig: 3, forklaring: "TEOAE gir informasjon om ytre hårcellefunksjon, men ikke full kartlegging av hørselsbanene. (Pensum: DPOAE_GK2.pdf, s. 7-8)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-044", eksamen: "Pensumspørsmål", nr: 44, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "Hvilket perspektiv mangler dersom man forklarer alle mestringsvansker hos en person med hørselstap utelukkende med personens individuelle innsats?",
    figur: null,
    alternativer: [
      "At alle mennesker må få samme type høreapparat",
      "Betydningen av omgivelser, tilrettelegging og samfunnsmessige forhold",
      "At hørselstap bare kan beskrives med otoskopi",
      "At kommunikasjon ikke påvirkes av sosiale arenaer"
    ],
    riktig: 1, forklaring: "Mestring må også forstås i sosial og samfunnsmessig kontekst. (Pensum: Hørselstap og psykisk helse_mestringsstrategier.pptx, s. 14)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-045", eksamen: "Pensumspørsmål", nr: 45, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hvorfor nedvekter A-veid lydmåling særlig de laveste frekvensene?",
    figur: null,
    alternativer: [
      "Fordi lave frekvenser ikke kan være hørbare",
      "Fordi A-veiing utelukkende er laget for å måle tale ved 8000 Hz",
      "Fordi øret alltid reagerer likt på alle frekvenser",
      "Fordi normalhørende er relativt mindre følsomme for lave frekvenser ved moderate nivåer"
    ],
    riktig: 3, forklaring: "A-veiing bygger på de frekvensavhengige lik-hørestyrkekurvene. (Pensum: Loudness and abnormal loudness.pdf, s. 6-7)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-046", eksamen: "Pensumspørsmål", nr: 46, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "En lytter forstår tale bedre når en støykilde flyttes fra rett foran til høyre side, mens taleren fortsatt står foran. Hva er den beste forklaringen?",
    figur: null,
    alternativer: [
      "Den totale lydenergien i rommet blir nødvendigvis lavere når støyen flyttes",
      "Talens grunntone øker når støykilden flyttes",
      "Hjernen slutter å analysere signaler fra venstre øre",
      "Økt romlig separasjon gjør det mulig å utnytte både binaural avmaskering og et gunstigere signal/støy-forhold ved ett øre"
    ],
    riktig: 3, forklaring: "Spatial release from masking (SRM) kan skyldes både binaural avmaskering og «better ear listening». (Pensum: binaural hearing.pdf, s. 21)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-047", eksamen: "Pensumspørsmål", nr: 47, tema: "Forskningsmetode", poeng: 1,
    tekst: "En forsker samler seks høreapparatbrukere til en ledet samtale om erfaringene med utstyret. Hvilken datainnsamlingsmetode er brukt?",
    figur: null,
    alternativer: [
      "Fokusgruppeintervju",
      "Toneterskelmåling",
      "Elektrofysiologisk ABR",
      "Tilfeldig tildeling til behandlingsgrupper"
    ],
    riktig: 0, forklaring: "Et fokusgruppeintervju samler flere deltakere til felles samtale om et tema. (Pensum: 2026 22.08 forelesning Kvalitativ forskning og artikler(1).pdf, s. 11-12)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-048", eksamen: "Pensumspørsmål", nr: 48, tema: "Statistikk", poeng: 1,
    tekst: "En studie tester om type høreapparatprogram påvirker setningsforståelse i støy. Hvilken variabel er avhengig variabel?",
    figur: null,
    alternativer: [
      "Hvilket program forskeren velger å aktivere",
      "Forskerens navn",
      "Resultatet på setningsforståelse i støy",
      "Navnet på audiometeret"
    ],
    riktig: 2, forklaring: "Den avhengige variabelen er utfallet som registreres som følge av den uavhengige variabelen. (Pensum: Kvantitative data og variabler 26.pptx, s. 6)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-050", eksamen: "Pensumspørsmål", nr: 50, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "De laterale olivocochleære (LOC) fibrene påvirker primært hvilken målstruktur?",
    figur: null,
    alternativer: [
      "Otokonier i utriculus",
      "Type I-afferente fibre nær indre hårceller",
      "Muskelen sternocleidomastoideus",
      "Trommehinnen via nervus facialis"
    ],
    riktig: 1, forklaring: "LOC har forbindelse til type I-fibre ved indre hårceller, mens MOC går mot ytre hårceller. (Pensum: Det sentrale hørselssystemet_4.pdf, s. 7)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-051", eksamen: "Pensumspørsmål", nr: 51, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "Flere studier finner at eldre med hørselstap også oftere har kognitive utfordringer. Hvilken konklusjon er metodisk mest forsvarlig?",
    figur: null,
    alternativer: [
      "Hørselstap er alltid den eneste årsaken til kognitive endringer",
      "Det er en observert sammenheng, men studiene beviser ikke nødvendigvis årsak og virkning",
      "Sammenhengen betyr at alle med hørselstap har demens",
      "Funnene utelukker at alder og andre faktorer spiller en rolle"
    ],
    riktig: 1, forklaring: "Forelesningen presiserer at korrelasjon ikke er det samme som kausalitet. (Pensum: Biologiske endringer_2026 i forkant.pptx, s. 16, 20)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-052", eksamen: "Pensumspørsmål", nr: 52, tema: "Psykoakustikk", poeng: 1,
    tekst: "En pasient har svært avvikende ABR-responser og store vansker med timing av talesignaler, men forholdsvis god registrerbar otoakustisk aktivitet. Hvilken type forstyrrelse er særlig aktuell?",
    figur: null,
    alternativer: [
      "Ukomplisert voks i ytre øregang som eneste årsak",
      "Økt tykkelse på øremuslingen",
      "Overdreven normal fasekoding i nervebanene",
      "Auditiv nevropati med sviktende nevral synkronisering"
    ],
    riktig: 3, forklaring: "Auditiv nevropati kan påvirke nevral synkronisering og temporale ferdigheter selv ved relativt bevart OHC-funksjon. (Pensum: temporal_processing.pdf, s. 17-19)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-053", eksamen: "Pensumspørsmål", nr: 53, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hvorfor kan en «pass»-respons på TEOAE ikke brukes til å beregne en presis audiometrisk terskel ved 6 kHz?",
    figur: null,
    alternativer: [
      "TEOAE er en direkte måling av auditiv cortex",
      "TEOAE kan bare utføres på personer over 18 år",
      "Lyd med 6 kHz kan ikke forplante seg gjennom luft",
      "TEOAE gir ikke slik kvantitativ terskelinformasjon og er lite egnet i det aller høyeste frekvensområdet"
    ],
    riktig: 3, forklaring: "TEOAE måler i hovedsak ytre hårcellefunksjon og gir ikke presise dB-HL-terskler. (Pensum: DPOAE_GK2.pdf, s. 8, 21)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-054", eksamen: "Pensumspørsmål", nr: 54, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "En person velger å skjule hørselstapet i nye sosiale situasjoner for å bli oppfattet som normalthørende. Hva kaller Goffman en slik strategi?",
    figur: null,
    alternativer: [
      "«Passing»",
      "Tidsintegrasjon",
      "Adaptiv kompresjon",
      "Hørselssynkronisering"
    ],
    riktig: 0, forklaring: "«Passing» beskriver forsøk på å skjule en stigmatisert egenskap. (Pensum: Hørselstap og psykisk helse_mestringsstrategier.pptx, s. 34)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-055", eksamen: "Pensumspørsmål", nr: 55, tema: "Psykoakustikk", poeng: 1,
    tekst: "Ved «loudness matching» justeres en sammenligningstone til den oppfattes like sterk som en referansetone. Hva betegner dette punktet?",
    figur: null,
    alternativer: [
      "Maksimalt utgangsnivå (MPO)",
      "Punktet for subjektiv likhet (PSE)",
      "Interaural demping (IA)",
      "Minimum synlig frekvens (MVF)"
    ],
    riktig: 1, forklaring: "PSE er lydnivået der de to stimuliene oppleves å ha lik hørestyrke. (Pensum: Loudness and abnormal loudness.pdf, s. 4)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-056", eksamen: "Pensumspørsmål", nr: 56, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hvorfor er forbedringen ved BILD-måling med tale gjerne mindre enn ved BMLD med lavfrekvente rentoner?",
    figur: null,
    alternativer: [
      "BILD måles alltid med bare ett øre",
      "Talesignal har ingen temporale komponenter",
      "BMLD avhenger ikke av frekvens",
      "Tale inneholder også viktige frekvenskomponenter der binaural avmaskering er mindre effektiv"
    ],
    riktig: 3, forklaring: "Binaural avmaskering er særlig effektiv ved lave frekvenser, mens tale inneholder et bredere spekter. (Pensum: binaural hearing.pdf, s. 19)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-057", eksamen: "Pensumspørsmål", nr: 57, tema: "Forskningsmetode", poeng: 1,
    tekst: "En intervjustudie lar informanter lese og kommentere forskerens tolkning av deres utsagn. Hvilket kvalitetssikringstiltak brukes?",
    figur: null,
    alternativer: [
      "Member checking (deltakervalidering)",
      "Kalibrering av lydtrykknivå",
      "Randomisering av utvalget",
      "Blindmåling av otoakustiske emisjoner"
    ],
    riktig: 0, forklaring: "Member checking innebærer at deltakere kan kommentere forskerens fortolkninger. (Pensum: 2026 22.08 forelesning Kvalitativ forskning og artikler(1).pdf, s. 20)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-058", eksamen: "Pensumspørsmål", nr: 58, tema: "Statistikk", poeng: 1,
    tekst: "En forsker sammenligner gjennomsnittlig taleforståelse mellom tre uavhengige grupper med tilnærmet normalfordelte data. Hvilken testtype er best egnet?",
    figur: null,
    alternativer: [
      "Én paret t-test som sammenligner alle tre grupper samtidig",
      "Kun utregning av median",
      "Kji-kvadrat-test for kategoriske observasjoner som eneste mulighet",
      "Enveis ANOVA"
    ],
    riktig: 3, forklaring: "ANOVA er en vanlig test ved sammenligning av middelverdier i tre eller flere grupper. (Pensum: Forelesning 11.09.26_FoU_slutningsstatistikk.pdf, s. 22-24)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-059", eksamen: "Pensumspørsmål", nr: 59, tema: "Vestibulært", poeng: 1,
    tekst: "Når hodet begynner å rotere, bøyes cupula i en buegang. Hva er den direkte mekaniske årsaken?",
    figur: null,
    alternativer: [
      "Endolymfen omdannes til luft",
      "Otokonier løsner alltid fra sacculus ved enhver rotasjon",
      "Endolymfens treghet skaper relativ bevegelse i forhold til buegangens vegger",
      "Trommehinnen skyver mekanisk på cupula"
    ],
    riktig: 2, forklaring: "Buegangenes registrering av rotasjon er knyttet til endolymfens treghet. (Pensum: vestibulær_del_I.pdf, s. 14-15)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-060", eksamen: "Pensumspørsmål", nr: 60, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvorfor kan auditivt fremkalte responser hos små barn ha lengre latenstid enn hos voksne?",
    figur: null,
    alternativer: [
      "Barn har ikke cochleariskjerner før skolealder",
      "Lyden går langsommere i luften rundt barn",
      "Hjernen begynner først å behandle lyd etter puberteten",
      "Auditive nervebaner og myelinisering er fortsatt under modning"
    ],
    riktig: 3, forklaring: "Hjernestammens auditive baner modnes etter fødselen, blant annet gjennom myelinisering. (Pensum: Det sentrale hørselssystemet_4.pdf, s. 12, 16)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-061", eksamen: "Pensumspørsmål", nr: 61, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "En eldre pasient har flere kroniske sykdommer og bruker mange medisiner. Hva er den mest relevante betegnelsen for denne kombinasjonen?",
    figur: null,
    alternativer: [
      "Kun normal primær aldring uten andre forhold",
      "Binaural summasjon",
      "Spontan otoakustisk emisjon",
      "Komorbiditet med mulig polyfarmasi"
    ],
    riktig: 3, forklaring: "Komorbiditet betyr samtidige sykdommer, mens polyfarmasi innebærer bruk av mange legemidler. (Pensum: Biologiske endringer_2026 i forkant.pptx, s. 12-16)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-062", eksamen: "Pensumspørsmål", nr: 62, tema: "Psykoakustikk", poeng: 1,
    tekst: "En lytter klarer å oppdage et svært kort opphold midt i kontinuerlig støy. Hvilken evne undersøkes først og fremst?",
    figur: null,
    alternativer: [
      "Monokulær dybdeoppfatning",
      "Temporal oppløsning («gap detection»)",
      "Statisk mellomørekompleans",
      "Langtidshukommelsens kapasitet"
    ],
    riktig: 1, forklaring: "Gap-deteksjon undersøker evnen til å oppfatte raske endringer over tid. (Pensum: temporal_processing.pdf, s. 5)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-063", eksamen: "Pensumspørsmål", nr: 63, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Ved DPOAE-stimulering brukes f1 = 1000 Hz og f2 = 1200 Hz. Ved hvilken frekvens forventes det vanlige distorsjonsproduktet 2f1−f2?",
    figur: null,
    alternativer: [
      "800 Hz",
      "100 Hz",
      "1400 Hz",
      "2200 Hz"
    ],
    riktig: 0, forklaring: "2 × 1000 − 1200 = 800 Hz. (Pensum: DPOAE_GK2.pdf, s. 16)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-064", eksamen: "Pensumspørsmål", nr: 64, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "En lærer bruker høreapparater, men er svært sliten etter mange timer med prat og bakgrunnsstøy. Hva bør en audiograf utforske i tillegg til selve høreapparatinnstillingen?",
    figur: null,
    alternativer: [
      "Lyttebelastning, arbeidssituasjon, pauser og mulighet for tilrettelegging",
      "Kun hvilken farge høreapparatet har",
      "Om læreren kan lære å unngå all kontakt med kollegaer",
      "Kun terskelen ved én tilfeldig frekvens"
    ],
    riktig: 0, forklaring: "Fatigue i arbeidslivet kan kreve kartlegging av kommunikasjon, belastning og miljø. (Pensum: Hørselstap og psyke_arbeidsliv .pdf, s. 5, 18)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-065", eksamen: "Pensumspørsmål", nr: 65, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "To pasienter har samme audiogram, men rapporterer svært ulikt lydnivå som «behagelig». Hvilken undersøkelse kan gi mer individuell informasjon om dette?",
    figur: null,
    alternativer: [
      "Bare otoskopi av begge øremuslinger",
      "Måling av øregangsvolum alene",
      "Hørestyrkeskalering ved flere lydnivåer",
      "En rent geometrisk måling av avstanden mellom ørene"
    ],
    riktig: 2, forklaring: "Loudness-skalering registrerer pasientens subjektive vurdering ved ulike nivåer og frekvenser. (Pensum: 2026_Noen slides om Loudness-skalering SISI og ABLB 2.pptx, s. 7, 10)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-066", eksamen: "Pensumspørsmål", nr: 66, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "En rentone kommer rett forfra, og ørene ligger symmetrisk i forhold til lydkilden. Hvilket resultat forventes for interaural tidsforskjell (ITD)?",
    figur: null,
    alternativer: [
      "Omtrent 650 mikrosekunder til fordel for venstre øre",
      "Omtrent 0 mikrosekunder",
      "Omtrent 650 mikrosekunder til fordel for høyre øre",
      "En tidsforskjell som alltid er større enn ett millisekund"
    ],
    riktig: 1, forklaring: "Ved 0 graders azimut er veien til de to ørene omtrent like lang. (Pensum: binaural hearing.pdf, s. 6)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-067", eksamen: "Pensumspørsmål", nr: 67, tema: "Forskningsmetode", poeng: 1,
    tekst: "Før en planlagt studie har forskerne formulert problemstillingen og valgt design, men ennå ikke rekruttert noen. Hvilken aktivitet hører fortsatt til planleggingsfasen?",
    figur: null,
    alternativer: [
      "Å presentere endelige funn fra datamaterialet",
      "Å utarbeide protokoll og innhente nødvendig etisk godkjenning",
      "Å konkludere om hypotesen er bevist uten observasjoner",
      "Å publisere ferdige statistiske analyser"
    ],
    riktig: 1, forklaring: "Protokoll og etiske avklaringer inngår før datainnsamling i forskningsprosessen. (Pensum: FoU_Forskningstyper og forkningsdesign.pdf, s. 4)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-068", eksamen: "Pensumspørsmål", nr: 68, tema: "Statistikk", poeng: 1,
    tekst: "Mellomøretrykk registreres i daPa og kan ha både negative og positive verdier. Hvilket målenivå beskriver dette best i emnets NOIR-inndeling?",
    figur: null,
    alternativer: [
      "Nominalskala",
      "Ordinalskala",
      "Intervallskala",
      "Ratioskala med absolutt nullpunkt for alle målinger"
    ],
    riktig: 2, forklaring: "Trykkverdiene har meningsfulle avstander, men 0 daPa er et referansenivå og ikke fravær av trykk. (Pensum: Kvantitative data og variabler 26.pptx, s. 9, 16)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-072", eksamen: "Pensumspørsmål", nr: 72, tema: "Psykoakustikk", poeng: 1,
    tekst: "En tone gjøres dobbelt så lang, fra 50 ms til 100 ms. Hva er en forventet endring i deteksjonsterskelen ved normal tidsintegrasjon?",
    figur: null,
    alternativer: [
      "Terskelen blir omtrent 20 dB høyere",
      "Terskelen blir alltid identisk uansett varighet",
      "Terskelen blir omtrent 3 dB lavere",
      "Frekvensen dobles automatisk"
    ],
    riktig: 2, forklaring: "Forelesningen beskriver omtrent 3 dB lavere terskel ved dobling av stimulusvarighet opp til ca. 200–300 ms. (Pensum: temporal_processing.pdf, s. 5)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-073", eksamen: "Pensumspørsmål", nr: 73, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "I en normal DPOAE-vekstfunksjon avtar stigningen når primærtonenivået økes. Hvilken mekanisme gjenspeiler dette?",
    figur: null,
    alternativer: [
      "Lineær forsterkning uten metning",
      "At høreterskelen endres fra sekund til sekund",
      "Den kompressive, ikke-lineære responsen i cochlea",
      "At DPOAE bare kan måles ved 0 dB SPL"
    ],
    riktig: 2, forklaring: "Avflatning av vekstfunksjonen gjenspeiler cochleær kompresjon. (Pensum: DPOAE_GK2.pdf, s. 20)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-074", eksamen: "Pensumspørsmål", nr: 74, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "En pasient beskriver lite sosial inkludering og gjentatte kommunikasjonsbarrierer på jobben. Hva er en hensiktsmessig faglig tilnærming?",
    figur: null,
    alternativer: [
      "Fastslå at psykisk helse er irrelevant så lenge høreapparatet fungerer",
      "Undersøke hvordan tilgjengelighet, kommunikasjon og arbeidsmiljø påvirker trivsel og psykisk helse",
      "Anta at alle problemer må være forårsaket av en bestemt psykisk lidelse",
      "Utelukke behovet for tilrettelegging fordi audiogrammet er stabilt"
    ],
    riktig: 1, forklaring: "Forelesningen beskriver kommunikasjon og sosial inkludering som forhold med betydning for psykisk helse. (Pensum: Konsekvenser av hørselstap_psykiske plager og lidelser.pptx, s. 21, 24)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-075", eksamen: "Pensumspørsmål", nr: 75, tema: "Psykoakustikk", poeng: 1,
    tekst: "En vedvarende, jevn tone oppleves gradvis svakere selv om lydtrykknivået ikke endres. Hva kalles fenomenet?",
    figur: null,
    alternativer: [
      "Spektral oppløsning",
      "Hørestyrkeadaptasjon",
      "Lydlokalisering",
      "Dikotisk fusjon"
    ],
    riktig: 1, forklaring: "Loudness adaptation er fall i opplevd hørestyrke ved vedvarende stimulus. (Pensum: Loudness and abnormal loudness.pdf, s. 36)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-076", eksamen: "Pensumspørsmål", nr: 76, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hvorfor er lang etterklangstid vanligvis ugunstig for taleforståelse i en samtalesituasjon?",
    figur: null,
    alternativer: [
      "Etterklang gjør at alle talevokaler forsvinner helt",
      "Etterklang senker alltid høreterskelen i stille rom",
      "Forsinkede kopier av talen kan tilsløre tidsvariasjonene i talesignalet",
      "Etterklang fjerner alle interaurale tidsforskjeller fra direkte lyd"
    ],
    riktig: 2, forklaring: "Refleksjoner overlapper talen i tid og kan maskere amplitudemodulasjoner. (Pensum: binaural hearing.pdf, s. 23)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-077", eksamen: "Pensumspørsmål", nr: 77, tema: "Forskningsmetode", poeng: 1,
    tekst: "En forsker kartlegger hørsel og livskvalitet hos samme gruppe personer hvert andre år gjennom åtte år. Hva kjennetegner dette designet?",
    figur: null,
    alternativer: [
      "Én tverrsnittsmåling på ett tidspunkt",
      "En metaanalyse av publiserte artikler",
      "Kun en kvalitativ dokumentanalyse uten deltakere",
      "Longitudinell oppfølging av en kohort"
    ],
    riktig: 3, forklaring: "Gjentatte målinger hos samme deltakere over tid er et longitudinelt kohortopplegg. (Pensum: FoU_Forskningstyper og forkningsdesign.pdf, s. 3, 7)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-078", eksamen: "Pensumspørsmål", nr: 78, tema: "Statistikk", poeng: 1,
    tekst: "Et 95 % konfidensintervall for en gjennomsnittlig forskjell er 2 til 6 dB. Hva er den mest forsvarlige tolkningen?",
    figur: null,
    alternativer: [
      "Nøyaktig 95 % av enkeltpasientene må ha resultater mellom 2 og 6 dB",
      "Alle fremtidige studier må finne nøyaktig 4 dB",
      "Konfidensintervall er det samme som standardavvik",
      "Intervallet angir usikkerheten rundt estimatet av den gjennomsnittlige forskjellen"
    ],
    riktig: 3, forklaring: "Konfidensintervall viser presisjonen til et parameterestimat; det er ikke et intervall for individenes målinger. (Pensum: Forelesning 11.09.26_FoU_slutningsstatistikk.pdf, s. 15)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-079", eksamen: "Pensumspørsmål", nr: 79, tema: "Vestibulært", poeng: 1,
    tekst: "En pasient har redusert vestibulærfunksjon, men syn og propriosepsjon er intakt. Hvilken forklaring beskriver best hvorfor pasienten likevel kan klare å stå oppreist?",
    figur: null,
    alternativer: [
      "Balanse reguleres ved samspill mellom flere sansesystemer",
      "Vestibulærsystemet er helt uten betydning for balanse",
      "Propriosepsjon finnes bare i øregangen",
      "Synet kan registrere alle hodeakselerasjoner uten begrensninger"
    ],
    riktig: 0, forklaring: "Balanse bygger på integrasjon av vestibulære, visuelle og proprioseptive signaler. (Pensum: vestibulær_del_I.pdf, s. 3, 6)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-080", eksamen: "Pensumspørsmål", nr: 80, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hvilken struktur mottar i utgangspunktet bare informasjon fra det ipsilaterale øret før det skjer omfattende krysning av auditive baner?",
    figur: null,
    alternativer: [
      "Cochleariskjernen",
      "Auditive cortex på motsatt side",
      "Medial geniculate body fra begge ører",
      "Corpus callosum"
    ],
    riktig: 0, forklaring: "Cochleariskjernen er første sentrale stasjon og mottar ipsilateral hørselsnerveinformasjon. (Pensum: Det sentrale hørselssystemet_1.pdf, s. 7)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-081", eksamen: "Pensumspørsmål", nr: 81, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "En pasient har problemer med å skifte mellom å følge en samtale og å lytte etter et nytt spørsmål. Hva er dette særlig knyttet til?",
    figur: null,
    alternativer: [
      "Skalledemping",
      "Hørselsterskel ved 250 Hz",
      "Kognitiv fleksibilitet",
      "Aktivering av stapediusmuskelen"
    ],
    riktig: 2, forklaring: "Kognitiv fleksibilitet innebærer å kunne bytte mellom oppgaver eller tanker. (Pensum: Hørsel og kognisjon FERDIG 2026.pdf, s. 11)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-082", eksamen: "Pensumspørsmål", nr: 82, tema: "Psykoakustikk", poeng: 1,
    tekst: "En person får normale rentoneterskler etter en støyhendelse, men plages fortsatt med tale i støy. Hvilken mekanisme omtales som en mulig forklaring på «skjult hørselstap»?",
    figur: null,
    alternativer: [
      "At øremuslingen plutselig er blitt større",
      "At alle ytre hårceller er fullstendig intakte og fungerer bedre enn før",
      "At lyden går raskere gjennom mellomørebeina",
      "Skade på synapser mellom indre hårceller og afferente hørselsnervefibre"
    ],
    riktig: 3, forklaring: "Synaptopati kan forekomme selv om konvensjonell rentoneaudiometri ikke viser tydelig terskeltap. (Pensum: temporal_processing.pdf, s. 23)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-083", eksamen: "Pensumspørsmål", nr: 83, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Hvorfor kan en ikke-lineær cochlea lage et distorsjonsprodukt som ikke finnes i de to primærtonene?",
    figur: null,
    alternativer: [
      "Rentoner inneholder alltid alle mulige frekvenser",
      "En ikke-lineær overføringsfunksjon kan skape nye frekvenskomponenter",
      "Basilarmembranen kan ikke vibrere ved to frekvenser samtidig",
      "Mikrofonen må forandre primærtonenes frekvens for å få et signal"
    ],
    riktig: 1, forklaring: "Ikke-lineær behandling kan generere nye frekvenskomponenter fra kombinerte input. (Pensum: DPOAE_GK2.pdf, s. 11-12)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-084", eksamen: "Pensumspørsmål", nr: 84, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "En person med hørselstap forteller at jobben er viktig både for økonomi, vennskap og opplevelsen av å bidra. Hva illustrerer dette?",
    figur: null,
    alternativer: [
      "Arbeid har bare betydning for månedslønn",
      "Arbeid er alltid helseskadelig for personer med nedsatt hørsel",
      "Arbeidsdeltakelse har både sosiale, psykiske og økonomiske sider",
      "Arbeid har ingen sammenheng med identitet eller tilhørighet"
    ],
    riktig: 2, forklaring: "Forelesningen fremhever arbeid som kilde til identitet, trygghet, struktur, relasjoner og selvverd. (Pensum: Hørselstap og psyke_arbeidsliv .pdf, s. 15)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-085", eksamen: "Pensumspørsmål", nr: 85, tema: "Psykoakustikk", poeng: 1,
    tekst: "En 1000-Hz-tone oppfattes som 1 sone ved 40 dB SPL. Omtrent hvor mange soner forventes ved 60 dB SPL etter den forenklede vekstregelen i forelesningen?",
    figur: null,
    alternativer: [
      "4 soner",
      "2 soner",
      "10 soner",
      "20 soner"
    ],
    riktig: 0, forklaring: "Hørestyrken dobles omtrent for hver 10 dB over 40 dB SPL: 1 → 2 → 4 soner. (Pensum: Loudness and abnormal loudness.pdf, s. 9-10)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-086", eksamen: "Pensumspørsmål", nr: 86, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hva er en viktig innvending mot å bruke Jeffress-modellens forsinkelseslinjer som en bokstavelig forklaring på menneskers ITD-koding?",
    figur: null,
    alternativer: [
      "Mennesker har ingen nevroner i MSO",
      "ITD kan bare brukes til å lokalisere lyd i vertikalplanet",
      "Fasekoding forekommer bare i øremuslingen",
      "Det mangler anatomiske holdepunkter for slike forsinkelseslinjer hos pattedyr"
    ],
    riktig: 3, forklaring: "Forelesningen peker på populasjonskoding som et mer sannsynlig alternativ hos pattedyr. (Pensum: binaural hearing.pdf, s. 13)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-087", eksamen: "Pensumspørsmål", nr: 87, tema: "Statistikk", poeng: 1,
    tekst: "En studie vil undersøke hvor mye alder og støyerfaring samlet kan forklare variasjonen i høreterskler. Hvilken analysetilnærming er særlig relevant?",
    figur: null,
    alternativer: [
      "Bare beregning av typetall",
      "Multippel regresjon",
      "Et enkelt kakediagram",
      "En binær screeningkonklusjon uten tallanalyse"
    ],
    riktig: 1, forklaring: "Regresjon undersøker sammenhengen mellom én avhengig variabel og én eller flere forklaringsvariabler. (Pensum: Forelesning 11.09.26_FoU_slutningsstatistikk.pdf, s. 33)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-089", eksamen: "Pensumspørsmål", nr: 89, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hva vil man ofte se ved OAE-måling når det mediale olivocochleære systemet aktiveres med støy i motsatt øre?",
    figur: null,
    alternativer: [
      "OAE-frekvensene dobles automatisk",
      "Det oppstår en obligatorisk luft-bein-gap",
      "OAE-amplituden undertrykkes",
      "OAE blir alltid større enn primærtonene"
    ],
    riktig: 2, forklaring: "Kontralateral støy kan aktivere MOC og føre til suppresjon av otoakustiske emisjoner. (Pensum: Det sentrale hørselssystemet_4.pdf, s. 8-10)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-090", eksamen: "Pensumspørsmål", nr: 90, tema: "Aldring og kognisjon", poeng: 1,
    tekst: "En eldre person velger å delta i et ukentlig turfellesskap. Hvilke to deler av ABC-rammeverket kan aktiviteten særlig støtte?",
    figur: null,
    alternativer: [
      "Bare Commit, og aldri de andre",
      "To dimensjoner i rentoneaudiometri",
      "Act og Belong",
      "Bare biologisk aldring"
    ],
    riktig: 2, forklaring: "Aktiviteten innebærer å gjøre noe («Act») og gjøre det sammen med andre («Belong»). (Pensum: Presentasjon om aldring_deltakelse og livskvalitet.pptx, s. 8-11)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-092", eksamen: "Pensumspørsmål", nr: 92, tema: "Diagnostikk og måling", poeng: 1,
    tekst: "Når en DPOAE registreres ved to primærtoner, hvilken cochleær region er særlig viktig for selve genereringen?",
    figur: null,
    alternativer: [
      "Kun området helt i apex uavhengig av primærtonene",
      "Bare trommehinnens overflate",
      "Området nær den tonotopiske plasseringen av f2",
      "Utriculus og sacculus i fellesskap"
    ],
    riktig: 2, forklaring: "DPOAE oppstår der primærtonenes vandrebølger overlapper, nær f2-stedet. (Pensum: DPOAE_GK2.pdf, s. 18)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-093", eksamen: "Pensumspørsmål", nr: 93, tema: "Psykisk helse, mestring og stigma", poeng: 1,
    tekst: "En arbeidstaker med hørselstap ber om at møter organiseres slik at talerne er synlige og støyen reduseres. Hvilket syn på tilrettelegging passer best med forelesningen?",
    figur: null,
    alternativer: [
      "Tilrettelegging er alltid frivillig for arbeidsgiver",
      "Den ansatte har aldri rett til å be om endringer",
      "Arbeidsgiver har en plikt til å vurdere egnet tilrettelegging innenfor lovens rammer",
      "Bare NAV kan gjøre endringer i arbeidsplassens møteform"
    ],
    riktig: 2, forklaring: "Arbeidsmiljø- og likestillingsregelverket gir føringer for individuell og generell tilrettelegging. (Pensum: Hørselstap og psyke_arbeidsliv .pdf, s. 39, 45-48)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-094", eksamen: "Pensumspørsmål", nr: 94, tema: "Psykoakustikk", poeng: 1,
    tekst: "En person med tilnærmet normale høreterskler beskriver vanlige hverdagslyder som uforholdsmessig ubehagelige. Hvilket begrep beskriver dette best?",
    figur: null,
    alternativer: [
      "Hyperakusis",
      "Ren ledningshørselssvikt",
      "Normativ hørestyrkevekst",
      "Binaural summasjon"
    ],
    riktig: 0, forklaring: "Hyperakusis innebærer overdreven eller upassende reaksjon på lyder som vanligvis ikke er ubehagelige. (Pensum: Loudness and abnormal loudness.pdf, s. 34)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-095", eksamen: "Pensumspørsmål", nr: 95, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "I en modell av LSO økes lydstyrken ved det ipsilaterale øret mens nivået ved det kontralaterale øret holdes likt. Hvilken endring er mest forventet?",
    figur: null,
    alternativer: [
      "Økt respons fra LSO-nevronene på den ipsilaterale siden",
      "Fullstendig opphør av all binaural behandling",
      "Redusert eksitatorisk påvirkning fra ipsilaterale nervebaner",
      "Ingen endring fordi LSO bare registrerer tidsforskjeller"
    ],
    riktig: 0, forklaring: "LSO mottar eksitatorisk ipsilateral og inhibitorisk kontralateral informasjon. (Pensum: binaural hearing.pdf, s. 10)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-096", eksamen: "Pensumspørsmål", nr: 96, tema: "Statistikk", poeng: 1,
    tekst: "En stor studie finner en statistisk signifikant forbedring på 0,1 dB i en test. Hvilket begrep er spesielt nyttig for å vurdere hvor stor betydning forskjellen har?",
    figur: null,
    alternativer: [
      "Bare antall sider i artikkelen",
      "Alfabetsortering av deltakerne",
      "Effektstørrelse",
      "Antall referanser i introduksjonen"
    ],
    riktig: 2, forklaring: "Statistisk signifikans sier ikke alene hvor stor eller praktisk viktig effekten er. (Pensum: Forelesning 11.09.26_FoU_slutningsstatistikk.pdf, s. 14)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-097", eksamen: "Pensumspørsmål", nr: 97, tema: "Vestibulært", poeng: 1,
    tekst: "Ved kalorisk testing blir den høyre øregangen stimulert med kaldt vann hos en person med normal vestibulærfunksjon. Hvilken retning forventes for nystagmusens raske fase?",
    figur: null,
    alternativer: [
      "Mot venstre",
      "Mot høyre",
      "Alltid vertikalt oppover",
      "Ingen rask fase kan forekomme ved kalorisk stimulering"
    ],
    riktig: 0, forklaring: "Ved kald kalorisk stimulering går den raske fasen normalt mot motsatt side (COWS-regelen). (Pensum: vestibular_II.pdf, s. 13-14)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-098", eksamen: "Pensumspørsmål", nr: 98, tema: "Sentrale hørselsbaner og plastisitet", poeng: 1,
    tekst: "Hva er en sentral oppgave til nevroner i inferior colliculus som reagerer på varigheten av lyd?",
    figur: null,
    alternativer: [
      "Å overføre oksygen til indre øre",
      "Å bestemme øregangens fysiske volum",
      "Å analysere temporale endringer, blant annet avbrudd i lyd",
      "Å feste stigbøylen til det ovale vinduet"
    ],
    riktig: 2, forklaring: "Nevroner i inferior colliculus kan være følsomme for lydvarighet og bidra til gap-deteksjon. (Pensum: Det sentrale hørselssystemet_3.pdf, s. 8)",
    fasit: "oppgitt", sikkerhet: "høy"
  },
  {
    id: "P26-099", eksamen: "Pensumspørsmål", nr: 99, tema: "Statistikk", poeng: 1,
    tekst: "Fem verdier er 4, 5, 6, 7 og 30. Hvilket sentralmål påvirkes minst av den høye ytterverdien 30?",
    figur: null,
    alternativer: [
      "Det aritmetiske gjennomsnittet",
      "Summen av verdiene",
      "Medianen",
      "Variasjonsbredden"
    ],
    riktig: 2, forklaring: "Medianen er 6 og påvirkes langt mindre av ekstreme observasjoner enn gjennomsnittet. (Pensum: Deskriptiv statistikk og visualiseringer 26.pptx, s. 20-23)",
    fasit: "oppgitt", sikkerhet: "høy"
  }
);
