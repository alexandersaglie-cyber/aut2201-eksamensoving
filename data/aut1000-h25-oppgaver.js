// AUT1000 Audiologisk grunnkurs 1 – eksamen Høst 2025: 100 flervalgsspørsmål.
// Samme felter som data/oppgaver.js, pluss emne. Fasiten er generert; kandidatsvar er det som
// var krysset av i en eksamensbesvarelse og er ikke nødvendigvis riktig.
// Fila legger spørsmålene til i lista OPPGAVER, så den må lastes etter data/oppgaver.js.

OPPGAVER.push(
  {
    id: "A1-H25-001", emne: "AUT1000", eksamen: "Høst 2025", nr: 1, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hvilken av de følgende rommene vil i prinsippet ha lengst etterklangstid?",
    figur: null,
    alternativer: [
      "Et stort rom med lite absorbenter",
      "Et lite rom med masse absorbenter",
      "Et stort rom med masse absorbenter",
      "Et lite rom med lite absorbenter"
    ],
    riktig: 0, forklaring: "Lang etterklangstid får man i store rom (lang vei mellom refleksjonene) med lite absorbenter (lite lydenergi tas opp ved hver refleksjon).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-002", emne: "AUT1000", eksamen: "Høst 2025", nr: 2, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Hvilket ord viser spektrogrammet?",
    figur: "figurer/aut1000-h25-oppg002.jpg",
    alternativer: [
      "Biff",
      "Lær",
      "Buss",
      "Skuff"
    ],
    riktig: 2, forklaring: "Spektrogrammet starter med stemt lukkelyd (lavfrekvent stemmelyd før utløsningen: /b/), så en kort vokal og til slutt en lang, kraftig frikativ med energi høyt oppe (3–5 kHz), typisk for /s/. Det passer med «Buss».",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 3
  },
  {
    id: "A1-H25-003", emne: "AUT1000", eksamen: "Høst 2025", nr: 3, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Under en måling av frekvensinnholdet i de seks lydene vi kaller «Lings lyder», ble de to lydene «s» og «skj» uttalt både av en mann og en kvinne, og deretter analysert akustisk. Hvilket av utsagnene under er RIKTIG angående hva analysen viste?",
    figur: null,
    alternativer: [
      "Skj-lyden hadde lavere F0 i mannens uttale enn F0 i skj-lyden hos kvinnen.",
      "F2 lå ved lysere frekvens hos kvinnens uttale av begge de to lydene, sammenliknet med mannens uttale.",
      "Det var lite amplitudeutslag under 1000 Hz i det akustiske signalet fra begge talernes uttale.",
      "S-lyden hadde større amplitudeutslag ved lavere frekvenser hos begge talerne enn hva skj-lyden hadde."
    ],
    riktig: 2, forklaring: "S og skj er ustemte frikativer med energien høyt i frekvens, så det er lite energi under 1000 Hz. Ustemte lyder har ingen F0, og skj har mer energi ved lavere frekvenser enn s, ikke omvendt.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-004", emne: "AUT1000", eksamen: "Høst 2025", nr: 4, tema: "Signalbehandling og lydmåling", poeng: 1,
    tekst: "Hva er minst mulige prosjektrate (sample rate) på et digitalt lydspor som har frekvensinnhold mellom 20 – 10 000 Hz, uten at lydsporet mister informasjon?",
    figur: null,
    alternativer: [
      "20 001 Hz",
      "20 000 Hz",
      "44 100 Hz",
      "10 000 Hz"
    ],
    riktig: 0, forklaring: "Samplingsteoremet (Nyquist) krever at samplingsfrekvensen er HØYERE enn to ganger høyeste frekvens (2 × 10 000 = 20 000 Hz). Minste hele verdi er da 20 001 Hz. Noen lærebøker sier «minst det dobbelte» (20 000 Hz), så sjekk hvordan det ble formulert i undervisningen.",
    fasit: "generert", sikkerhet: "lav", kandidatsvar: 2
  },
  {
    id: "A1-H25-005", emne: "AUT1000", eksamen: "Høst 2025", nr: 5, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "For den gitte listen over hendelser, hvilken av følgende sekvenser (fra først til sist) beskriver best den eksitatoriske transduksjonsfasen i de indre hårcellene?",
    figur: "figurer/aut1000-h25-oppg005.png",
    alternativer: [
      "B, E, C, A, D",
      "A, B, C, D, E",
      "B, C, E, A, D",
      "E, D, C, B, A"
    ],
    riktig: 0, forklaring: "Rekkefølgen er: stereocilia bøyes mot det høyeste stereociliet (B) → tip-links åpner ionekanaler (E) → kalium strømmer inn (C) → hårcellen depolariseres (A) → transmitter frigjøres (D).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-006", emne: "AUT1000", eksamen: "Høst 2025", nr: 6, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hvor mange monaurale svevninger (monaural beats) kan man høre per sekund når to lydsignaler på henholdsvis 500 Hz og 505 Hz spilles av samtidig?",
    figur: null,
    alternativer: [
      "Man hører ikke svevninger",
      "500 per sekund",
      "505 per sekund",
      "5 per sekund"
    ],
    riktig: 3, forklaring: "Svevningsfrekvensen er differansen mellom frekvensene: 505 − 500 = 5 svevninger per sekund.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-007", emne: "AUT1000", eksamen: "Høst 2025", nr: 7, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hvilken av de følgende tallene er IKKE en del av oktavrekken til 1000Hz?",
    figur: null,
    alternativer: [
      "4000Hz",
      "2000Hz",
      "1500Hz",
      "500Hz"
    ],
    riktig: 2, forklaring: "Oktavrekken dobler eller halverer frekvensen: …500, 1000, 2000, 4000 Hz. 1500 Hz er ikke med.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-008", emne: "AUT1000", eksamen: "Høst 2025", nr: 8, tema: "Vestibulærsystemet", poeng: 1,
    tekst: "Buegangene (Canales semicirculares, semi-circular canals) sin funksjon er…",
    figur: null,
    alternativer: [
      "å bestemme frekvensnivå",
      "å registrere rotatorisk bevegelse",
      "å stabilisere trykket i indre øret",
      "å registrere lydstimuli"
    ],
    riktig: 1, forklaring: "Buegangene registrerer rotasjon (vinkelakselerasjon) av hodet.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-009", emne: "AUT1000", eksamen: "Høst 2025", nr: 9, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hva sier Stevens' potens-lov?",
    figur: null,
    alternativer: [
      "Styrken på en sanseopplevelse øker med stimulus opphøyd i tredje potens.",
      "Styrken på en sanseopplevelse øker med stimulus opphøyd i en eksponent som varierer med hvilken sansemodalitet vi tester.",
      "Styrken på sanseopplevelsen stiger med logaritmen til stimulus.",
      "Styrken på en sanseopplevelse øker med stimulus opphøyd i andre potens."
    ],
    riktig: 1, forklaring: "Stevens' potenslov: opplevd styrke = k · stimulus^n, der eksponenten n varierer med sansemodaliteten. Logaritmen hører til Fechners lov.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-010", emne: "AUT1000", eksamen: "Høst 2025", nr: 10, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Hvilke celler i cochlea innerveres av Type I afferente fibre?",
    figur: null,
    alternativer: [
      "søyleceller (pillar cells)",
      "ytre hårceller",
      "støtteceller (supporting cells)",
      "indre hårceller"
    ],
    riktig: 3, forklaring: "Type I-fibrene (ca. 90–95 % av hørselsnerven) innerverer de indre hårcellene. Type II går til de ytre.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-011", emne: "AUT1000", eksamen: "Høst 2025", nr: 11, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "En trøndersk universitetslektor uttalte ordet «salt». I uttalen hadde t-lyden påvirket l-lyden, slik at begge disse to lydene ble produsert ustemte. Hvordan kan vi beskrive denne påvirkningen på en presis måte?",
    figur: null,
    alternativer: [
      "Regressiv total fjernassimilasjon med allofonisk resultat",
      "Progressiv total nærassimilasjon med fonologisk resultat",
      "Regressiv partiell fjernassimilasjon med fonologisk resultat",
      "Regressiv partiell nærassimilasjon med allofonisk resultat"
    ],
    riktig: 3, forklaring: "T-en (som kommer etter) påvirker l-en (som kommer før): regressiv. Lydene står ved siden av hverandre: nærassimilasjon. Bare stemtheten endres: partiell. Ustemt l er ikke et eget fonem på norsk: allofonisk resultat.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "A1-H25-012", emne: "AUT1000", eksamen: "Høst 2025", nr: 12, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hvilken påstand er FEIL i forhold til romakustikk?",
    figur: null,
    alternativer: [
      "Hva som er bra romakustikk, er helt avhengig av bruksområde",
      "Mennesker med mildt hørselstap er like mye påvirket av lang etterklangstid som mennesker med normal hørsel",
      "Man kan sette opp myke overflater for å redusere etterklangstid",
      "Man kan sette opp harde overflater for å øke etterklangstid"
    ],
    riktig: 1, forklaring: "Påstanden om at mennesker med hørselstap er like mye påvirket som normalthørende er feil. Lang etterklangstid går mer ut over dem med hørselstap.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-013", emne: "AUT1000", eksamen: "Høst 2025", nr: 13, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "En mann med en typisk lengde på sin talekanal har en uvanlig lys grunntone i sin taleproduksjon av en vokal. Hvordan vil denne uvanlige grunntonen påvirke formantene i hans uttale?",
    figur: null,
    alternativer: [
      "Formantene blir godt definerte med mange deltoner som gir karakteristisk spekter og identitet til vokalen.",
      "Formantene blir mindre hørbare på grunn av redusert amplitude.",
      "Formantene vil ligge i lysere frekvensområder enn hos en typisk vokaluttale av en mann.",
      "Formantene påvirkes lite av den uvanlige grunntonen."
    ],
    riktig: 3, forklaring: "Formantene bestemmes av talekanalens form og lengde, ikke av grunntonen. En lys grunntone gir færre deltoner, så formantene blir dårligere definert, men de flytter seg lite.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "A1-H25-014", emne: "AUT1000", eksamen: "Høst 2025", nr: 14, tema: "Vestibulærsystemet", poeng: 1,
    tekst: "Otolittorganene sacculus og utriculus oppdager…",
    figur: null,
    alternativer: [
      "otolitter (otoconia) som beveger seg fritt i buegangene",
      "vinkelakselerasjon (rotasjon)",
      "lineær akselerasjon og tyngdekraft",
      "ultralyd (lydfrekvenser høyere enn 20 kHz)"
    ],
    riktig: 2, forklaring: "Otolittorganene (sacculus og utriculus) registrerer lineær akselerasjon og tyngdekraften.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-015", emne: "AUT1000", eksamen: "Høst 2025", nr: 15, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hva bestemmer lydhastigheten i et medium?",
    figur: null,
    alternativer: [
      "Både lydkildens egenskaper og mediets egenskaper",
      "Mediets egenskaper",
      "Lydens type, dvs. om det er en ren tone eller et støysignal",
      "Lydens frekvens og amplitude"
    ],
    riktig: 1, forklaring: "Lydhastigheten bestemmes av mediet (elastisitet og tetthet), ikke av lydkilden, frekvensen eller amplituden.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-016", emne: "AUT1000", eksamen: "Høst 2025", nr: 16, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Med hensyn til Dopplereffekten kan vi tenke oss en lydkilde i bevegelse som avgir en rentone. Hvilket utsagn er RIKTIG?",
    figur: null,
    alternativer: [
      "Når lydkilden beveger seg mot lytteren, vil en høyere frekvens høres, og lydtrykknivået vil øke.",
      "Når lydkilden beveger seg mot lytteren, vil en høyere frekvens høres, og lydtrykknivået vil synke.",
      "Når lydkilden beveger seg mot lytteren, vil en lavere frekvens høres, og lydtrykknivået vil øke.",
      "Når lydkilden beveger seg mot lytteren, blir bølgelengden større, og en høyere frekvens vil høres."
    ],
    riktig: 0, forklaring: "Når lydkilden nærmer seg, presses bølgene sammen: kortere bølgelengde og høyere frekvens. Avstanden blir mindre, så lydtrykknivået øker.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 0
  },
  {
    id: "A1-H25-017", emne: "AUT1000", eksamen: "Høst 2025", nr: 17, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Hva er HRTF en forkortelse for og hvilken beskrivelse passer best?",
    figur: null,
    alternativer: [
      "Head Relative to Frequency: Beskriver hvordan vi må bevege hodet for å oppfatte spesifikke lyder best mulig",
      "Head Related Transfer Functions: Beskriver hvordan vi må bevege hodet for å oppfatte spesifikke lyder best mulig",
      "Head Relative to Frequency: Beskriver hvordan formen på overkropp, hode og øre kan påvirke lyder på vei inn til trommehinna",
      "Head Related Transfer Functions: Beskriver hvordan formen på overkropp, hode og øre kan påvirke lyder på vei inn til trommehinna"
    ],
    riktig: 3, forklaring: "HRTF = Head Related Transfer Function: hvordan overkropp, hode og ytre øre endrer lyden på vei inn til trommehinnen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-018", emne: "AUT1000", eksamen: "Høst 2025", nr: 18, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hvis en rentone på 1000 Hz har en periodetid på 0,001 sekunder, hva blir periodetiden hvis vi dobler frekvensen til 2000 Hz?",
    figur: null,
    alternativer: [
      "0,0005 sekund",
      "0,001 sekund",
      "0,002 sekund",
      "0,005 sekund"
    ],
    riktig: 0, forklaring: "Periodetid = 1 / frekvens. Dobles frekvensen, halveres periodetiden: 1/2000 = 0,0005 s.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-019", emne: "AUT1000", eksamen: "Høst 2025", nr: 19, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Hvilken artikulatorisk innstilling påvirker F2 i vokaler?",
    figur: null,
    alternativer: [
      "Amplituden på det akustiske signalet",
      "Om leppene er runda eller urunda",
      "Tungens posisjon horisontalt (vannrett dimensjon)",
      "Tungens posisjon vertikalt (loddrett dimensjon)"
    ],
    riktig: 2, forklaring: "F2 henger først og fremst sammen med tungens horisontale posisjon (fremre/bakre vokal). Leppeinnstillingen påvirker også F2, men tungeposisjonen er hovedsvaret.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "A1-H25-020", emne: "AUT1000", eksamen: "Høst 2025", nr: 20, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hva bestemmer en lyds bølgelengde?",
    figur: null,
    alternativer: [
      "Lydtrykknivået og frekvens",
      "Hvilket medium lyden reiser gjennom og lydtrykknivået",
      "Hvilket medium lyden reiser gjennom og lydens frekvens",
      "Lydens frekvens og fase"
    ],
    riktig: 2, forklaring: "Bølgelengde = lydhastighet / frekvens. Lydhastigheten er bestemt av mediet, så bølgelengden avhenger av mediet og frekvensen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-021", emne: "AUT1000", eksamen: "Høst 2025", nr: 21, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Hvilket utsagn om reseptorpotensialet til indre hårceller er sant?",
    figur: null,
    alternativer: [
      "Det er ingen korrelasjon mellom lydnivå og reseptorpotensialamplitude, reseptorpotensialet er et alt-eller-intet-signal (all-or-none signal).",
      "Reseptorpotensialet er symmetrisk når det plottes som en funksjon av stereocilia-forskyvning.",
      "Reseptorpotensialet vil forårsake en transmitterfrigjøring.",
      "Reseptorpotensialet vil forårsake lengdeendringer av cellekroppen."
    ],
    riktig: 2, forklaring: "Reseptorpotensialet (depolariseringen) i indre hårceller fører til frigjøring av transmitter (glutamat) til hørselsnerven. Det er gradert, ikke alt-eller-intet, og lengdeendring hører til de ytre hårcellene.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-022", emne: "AUT1000", eksamen: "Høst 2025", nr: 22, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Hvordan kan man måle grunntonen i ustemte språklyder?",
    figur: null,
    alternativer: [
      "Ved å undersøke avstanden i Hz mellom hver deltone i spekteret",
      "Ved å analysere formantfrekvensene",
      "Ved å undersøke avstanden i tid mellom hvert luftpuff fra glottis",
      "Det er ingen grunntone i ustemte lyder"
    ],
    riktig: 3, forklaring: "Grunntonen kommer fra stemmebåndsvibrasjoner. Ustemte lyder har derfor ingen grunntone.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-023", emne: "AUT1000", eksamen: "Høst 2025", nr: 23, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Hvis du ikke fjerner ørevoks fra øregangen, hva vil skje?",
    figur: null,
    alternativer: [
      "Ørevoksen forblir der den er og samler seg.",
      "Hudcellene i øregangen vokser inn i øretrompeten og transporterer ørevoksen dit.",
      "Hudcellene i øregangen vokser mot trommehinnen og transporterer ørevoksen dit.",
      "Hudcellene i øregangen vokser mot øregangens åpning og transporterer ørevoksen dit."
    ],
    riktig: 3, forklaring: "Huden i øregangen vandrer utover mot åpningen og tar med seg ørevoksen (øregangens selvrensing).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-024", emne: "AUT1000", eksamen: "Høst 2025", nr: 24, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hva heter senteret i hjernen som er sterkt forbundet med hukommelse?",
    figur: null,
    alternativer: [
      "Medulla",
      "Hippocampus",
      "Gyrus",
      "Sulcus"
    ],
    riktig: 1, forklaring: "Hippocampus er sentral for hukommelse, særlig for å lagre nye minner.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-025", emne: "AUT1000", eksamen: "Høst 2025", nr: 25, tema: "Kognisjon og persepsjon", poeng: 1,
    tekst: "Hvilken av disse er IKKE en kognitiv prosess?",
    figur: null,
    alternativer: [
      "Persepsjon",
      "Språk",
      "Hukommelse",
      "Hjerterytme"
    ],
    riktig: 3, forklaring: "Persepsjon, språk og hukommelse er kognitive prosesser. Hjerterytmen styres automatisk av det autonome nervesystemet.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-026", emne: "AUT1000", eksamen: "Høst 2025", nr: 26, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hvilken av disse bevegelsene beskriver å skyve underkjeven fremover?",
    figur: null,
    alternativer: [
      "Abduksjon",
      "Elevasjon",
      "Protraksjon",
      "Fleksjon"
    ],
    riktig: 2, forklaring: "Å skyve en kroppsdel fremover kalles protraksjon. Abduksjon er bevegelse ut fra midtlinjen, elevasjon er heving og fleksjon er bøying.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-027", emne: "AUT1000", eksamen: "Høst 2025", nr: 27, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hvilket av disse strukturene er IKKE en type gliacelle?",
    figur: null,
    alternativer: [
      "Astrocytter",
      "Mikroglia",
      "Schwann-celler",
      "Deiters-celler"
    ],
    riktig: 3, forklaring: "Astrocytter, mikroglia og Schwann-celler er gliaceller. Deiters-celler er støtteceller i Cortis organ.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-028", emne: "AUT1000", eksamen: "Høst 2025", nr: 28, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hva er et dermatom?",
    figur: null,
    alternativer: [
      "Et område av huden som innerveres av en spinalnerve",
      "En muskelgruppe som innerveres av en egen spinalnerve",
      "En del av nervecellens cellekropp",
      "En type hudkreft på pinna"
    ],
    riktig: 0, forklaring: "Et dermatom er et hudområde som innerveres av én spinalnerve.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-029", emne: "AUT1000", eksamen: "Høst 2025", nr: 29, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hvilken av disse funksjonene reguleres IKKE av hjernestammen?",
    figur: null,
    alternativer: [
      "Hosterefleks",
      "Finmotorikk",
      "Respirasjon",
      "Våkenhet"
    ],
    riktig: 1, forklaring: "Hjernestammen styrer livsviktige funksjoner som respirasjon, hosterefleks og våkenhet. Finmotorikk styres av motorisk hjernebark og lillehjernen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-030", emne: "AUT1000", eksamen: "Høst 2025", nr: 30, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Figuren viser to ulike power spektrum. Hvilket power spektrum viser lyseste grunntone (F0), og hvordan ser du det?",
    figur: "figurer/aut1000-h25-oppg030.jpg",
    alternativer: [
      "B, fordi avstanden mellom formantene er mye større enn i A",
      "A, fordi avstanden mellom deltonene er mye mindre enn i B",
      "A, fordi avstanden mellom formantene er mye mindre enn i B",
      "B, fordi avstanden mellom deltonene er mye større enn i A"
    ],
    riktig: 3, forklaring: "Avstanden mellom deltonene er lik grunntonen. I B ligger deltonene ca. 200 Hz fra hverandre, i A ca. 100 Hz. B har altså lysest grunntone.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-031", emne: "AUT1000", eksamen: "Høst 2025", nr: 31, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hvilken sans sender informasjoner direkte til hjernebarken og går utenom thalamus?",
    figur: null,
    alternativer: [
      "Synssansen",
      "Luktesansen",
      "Temperatursansen",
      "Hørselssansen"
    ],
    riktig: 1, forklaring: "Luktesansen er den eneste sansen som går direkte til hjernebarken uten omkobling i thalamus.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-032", emne: "AUT1000", eksamen: "Høst 2025", nr: 32, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hvilken av disse funksjonene har det autonome nervesystemet ansvar for?",
    figur: null,
    alternativer: [
      "Hørsel",
      "Respirasjon",
      "Smak",
      "Syn"
    ],
    riktig: 1, forklaring: "Det autonome nervesystemet styrer ufrivillige funksjoner som respirasjon, hjerterytme og fordøyelse. Hørsel, smak og syn er sanser.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-033", emne: "AUT1000", eksamen: "Høst 2025", nr: 33, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Hvilke tre tallord viser spektrogrammet?",
    figur: "figurer/aut1000-h25-oppg033.jpg",
    alternativer: [
      "Fem­-tre­-null",
      "Seks­-null-­sju",
      "Sju­-tre-­to",
      "Seks­-to-­sju"
    ],
    riktig: 2, forklaring: "Første ord starter med en sterk, høyfrekvent frikativ (sj-lyd) etterfulgt av en vokal, andre ord har lukkelyd og vokal, og tredje ord har lukkelyd og en vokal med lav F2 (/u/). Det passer med «sju-tre-to».",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "A1-H25-034", emne: "AUT1000", eksamen: "Høst 2025", nr: 34, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hvor finner du den motoriske hjernebarken (motor cortex)?",
    figur: null,
    alternativer: [
      "Ryggmargen",
      "Hypothalamus",
      "Lillehjernen",
      "Storhjernen"
    ],
    riktig: 3, forklaring: "Motorisk hjernebark ligger i storhjernen, i pannelappen foran sentralfuren (gyrus precentralis).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-035", emne: "AUT1000", eksamen: "Høst 2025", nr: 35, tema: "Kognisjon og persepsjon", poeng: 1,
    tekst: "Hva er persepsjon?",
    figur: null,
    alternativer: [
      "Omdannelsen av en stimulus til et reseptorpotensial",
      "Fortolkningen av sansestimulering i hjernen slik at den gir mening",
      "Prosessen hvor stimuli oppdages, responderes på av sanseorganene og ”oversettes” til elektriske nerveimpulser",
      "Omdannelsen av et reseptorpotensial til et aksjonspotensial"
    ],
    riktig: 1, forklaring: "Persepsjon er hjernens tolkning av sanseinntrykk slik at de gir mening. Omdanning av stimulus til nervesignaler er transduksjon.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-036", emne: "AUT1000", eksamen: "Høst 2025", nr: 36, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hvilken påstand om Dopplereffekten er FEIL?",
    figur: null,
    alternativer: [
      "Når lytteren beveger seg i forhold til lydkilden, oppstår det en Dopplereffekt.",
      "Når lydkilden beveger seg i forhold til lytteren, oppstår det en Dopplereffekt.",
      "Bare når lydkilden beveger seg i forhold til lytteren, vil det oppstå en Dopplereffekt.",
      "Når lytteren og lydkilden er stasjonære, er det ingen Dopplereffekt."
    ],
    riktig: 2, forklaring: "Dopplereffekt oppstår både når lydkilden og når lytteren beveger seg i forhold til hverandre. Påstanden om at det BARE skjer når lydkilden beveger seg, er feil.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-037", emne: "AUT1000", eksamen: "Høst 2025", nr: 37, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "For en lydbølge i luft tilsvarer lydhastigheten (343 m/s)...",
    figur: null,
    alternativer: [
      "den minste hastigheten som kreves for at en bevegelig lydkilde skal skape en Dopplereffekt.",
      "hastigheten til partiklene i mediet, som beveger seg frem og tilbake fra sin utgangsposisjon.",
      "bølgefrontens hastighet, dvs. hastigheten som trykkendringer beveger seg gjennom mediet med.",
      "hastigheten med hvilken partiklene i mediet forskyves frem og tilbake fra sin utgangssposisjon."
    ],
    riktig: 2, forklaring: "Lydhastigheten er hastigheten bølgefronten (trykkendringene) beveger seg gjennom mediet med. Partiklene selv svinger bare frem og tilbake.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-038", emne: "AUT1000", eksamen: "Høst 2025", nr: 38, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hvilket medium beveger lyden seg i når du målte frekvensen til 1500 Hz, og bølgelengden er 1 meter?",
    figur: null,
    alternativer: [
      "Luft",
      "Vann",
      "Stål",
      "Betong"
    ],
    riktig: 1, forklaring: "Lydhastighet = frekvens × bølgelengde = 1500 × 1 = 1500 m/s, som er lydhastigheten i vann.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-039", emne: "AUT1000", eksamen: "Høst 2025", nr: 39, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Under følger noen påstander om førsteformanten (F1). Hvilken av påstandene er riktig?",
    figur: null,
    alternativer: [
      "Jo mindre kjeveåpning vokalen produseres med, jo høyere Hz-verdi får F1",
      "I et spektrogram med bredbåndsframstilling av vokalen /u/ (\"o\" med ortografiske tegn), kan det være vanskelig å skille F1 fra grunntonen",
      "Jo lenger fram i munnhula vokalen produseres, jo høyere blir F1",
      "I mange vokaler ligger F1-verdien mellom 1000 til 2000 Hz, dersom vokalen blir produsert av en mann"
    ],
    riktig: 1, forklaring: "/u/ har svært lav F1, nær grunntonen, så i et bredbåndsspektrogram kan de være vanskelige å skille. Mindre kjeveåpning gir lavere F1, fremre/bakre artikulasjon påvirker F2, og F1 hos menn ligger stort sett under 1000 Hz.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-040", emne: "AUT1000", eksamen: "Høst 2025", nr: 40, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Binaural hørsel har flere fordeler. Hvilket av følgende utsagn er IKKE en fordel med binaural hørsel?",
    figur: null,
    alternativer: [
      "Økt frekvensdiskriminering (frequency discrimination)",
      "Økt hørbart frekvensområde",
      "Økt hørestyrke",
      "Økt nivådiskriminering (level discrimination)"
    ],
    riktig: 1, forklaring: "Binaural hørsel gir økt hørestyrke (binaural summasjon) og bedre nivå- og frekvensdiskriminering, men det hørbare frekvensområdet blir ikke større.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 1
  },
  {
    id: "A1-H25-041", emne: "AUT1000", eksamen: "Høst 2025", nr: 41, tema: "Signalbehandling og lydmåling", poeng: 1,
    tekst: "Et høypassfilter har en knekkfrekvens (cut-off frequency) på 2000 Hz og en flankesteilhet på 12 dB/oktav. Hvor stor er dempingen ved 4000 Hz?",
    figur: null,
    alternativer: [
      "6 dB",
      "12 dB",
      "0 dB",
      "18 dB"
    ],
    riktig: 2, forklaring: "Et høypassfilter slipper gjennom frekvenser over knekkfrekvensen. 4000 Hz ligger over 2000 Hz, så det er ingen demping (0 dB).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-042", emne: "AUT1000", eksamen: "Høst 2025", nr: 42, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Lyder fremkaller en vandrende bølge som når sin maksimale amplitude på et frekvensavhengig sted på basilarmembranen. Når lyden har en frekvens på 184 Hz, vil den vandrende bølgen ha maksimal amplitude...",
    figur: null,
    alternativer: [
      "nær det runde vinduet",
      "nær det ovale vinduet",
      "nær basen",
      "nær apex"
    ],
    riktig: 3, forklaring: "Lave frekvenser gir maksimalt utslag nær apex, høye frekvenser nær basis (der vinduene ligger).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-043", emne: "AUT1000", eksamen: "Høst 2025", nr: 43, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hvor mange grader tilsvarer en faseforskyvning på 1/8 periode?",
    figur: null,
    alternativer: [
      "30 grader",
      "45 grader",
      "12 grader",
      "90 grader"
    ],
    riktig: 1, forklaring: "En hel periode er 360 grader: 360 / 8 = 45 grader.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-044", emne: "AUT1000", eksamen: "Høst 2025", nr: 44, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hva er referanseverdien for lydtrykk (Pref) som brukes til å beregne dB SPL?",
    figur: null,
    alternativer: [
      "0,2 Pa",
      "0,00002 Pa",
      "0,02 Pa",
      "0,0002 Pa"
    ],
    riktig: 1, forklaring: "Referansetrykket for dB SPL er 20 µPa = 0,00002 Pa.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-045", emne: "AUT1000", eksamen: "Høst 2025", nr: 45, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Vokalkartet kan leses som en skjematisk framstilling av munnhulen og hvilket område i munnhulen som har den største innsnevringen ved ulike vokalproduksjoner. Hvilket alternativ er RIKTIG?",
    figur: null,
    alternativer: [
      "X-­aksen viser artikulasjonssted, Y-­aksen viser kjeveåpning. Jo lenger opp i vokalkartet, jo mindre kjeveåpning.",
      "X-­aksen viser lepperunding, Y-­aksen viser artikulasjonssted. Jo lenger opp i vokalkartet, jo mer fremre er innsnevringen.",
      "X-­aksen viser kjeveåpning, Y-­aksen viser artikulasjonssted. Jo lenger opp i vokalkartet, jo mer bakre er innsnevringen.",
      "X-­aksen viser stemthet, Y-­aksen viser kjeveåpning. Jo lenger opp i vokalkartet, jo større kjeveåpning."
    ],
    riktig: 0, forklaring: "I vokalkartet viser x-aksen artikulasjonssted (fremre–bakre) og y-aksen kjeveåpning. Øverst i kartet er kjeveåpningen minst (lukkede vokaler).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-046", emne: "AUT1000", eksamen: "Høst 2025", nr: 46, tema: "Signalbehandling og lydmåling", poeng: 1,
    tekst: "Et høypassfilter med knekkfrekvens (cut-off frequency) 1000 Hz har en flankesteilhet på 12 dB/oktav. Hvor mye demper filteret ved 125 Hz?",
    figur: null,
    alternativer: [
      "12 dB",
      "24 dB",
      "36 dB",
      "48 dB"
    ],
    riktig: 2, forklaring: "125 Hz ligger tre oktaver under 1000 Hz (1000 → 500 → 250 → 125). 3 × 12 dB = 36 dB demping.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-047", emne: "AUT1000", eksamen: "Høst 2025", nr: 47, tema: "Kognisjon og persepsjon", poeng: 1,
    tekst: "Figuren viser en P/I-kurve: Dersom omtrent 50 % av talesignalet er hørbart, vil en normalthørende morsmåls-lytter typisk oppfatte 80 % riktige ord. Hvorfor oppfatter denne lytteren 30 % bedre enn tilgangen til det akustiske signalet skulle tilsi?",
    figur: "figurer/aut1000-h25-oppg047.jpg",
    alternativer: [
      "Lytteren bruker mer av «top down»-prosessering for tolking av talesignaler på sitt eget morsmål",
      "Korte CVC-ord er lette å oppfatte, derfor trengs ikke hørbarhet i like stor grad som ved andre talesignal",
      "P/I-kurver er beregnet ut fra hørselshemmede, slik at en normalthørende typisk vil score uvanlig bra",
      "Lytteren bruker mer av «bottom up»-prosessering slik at det akustiske signalet likevel blir tilgjengelig"
    ],
    riktig: 0, forklaring: "En normalthørende lytter på eget morsmål bruker språkkunnskap og kontekst (top-down) til å fylle inn det som ikke er hørbart.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-048", emne: "AUT1000", eksamen: "Høst 2025", nr: 48, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hvilken sykdom har anfall på 20 minutter eller mer med svimmelhet, hørselstap og tinnitus?",
    figur: null,
    alternativer: [
      "Vestibularisnevritt («virus på balansenerven»)",
      "Otosklerose",
      "Morbus Ménière",
      "Krystallsyken (BPPV)"
    ],
    riktig: 2, forklaring: "Morbus Ménière gir anfall (20 minutter til timer) med svimmelhet, svingende hørselstap og tinnitus.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-049", emne: "AUT1000", eksamen: "Høst 2025", nr: 49, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hvilken sykdom i vestibularisapparatet (likevektsorganet) i det indre øret skyldes at krystaller flytter seg til feil plass i likevektsorganet?",
    figur: null,
    alternativer: [
      "Vestibularisschwannom (godartet svulst på hørsels- og likevektsnerven)",
      "Vestibularisnevritt («virus på balansenerven»)",
      "Morbus Ménière",
      "BPPV (krystallsyken)"
    ],
    riktig: 3, forklaring: "Ved BPPV (krystallsyken) har otolitter løsnet og havnet i en buegang, slik at visse hodebevegelser gir kortvarig svimmelhet.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-050", emne: "AUT1000", eksamen: "Høst 2025", nr: 50, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hvilke likhetstrekk mellom ANSD (Auditory Nevropathy Spectrum Disorder = Auditiv nevropati) og APD (Auditory Processing Disorder) er KORREKTE?",
    figur: null,
    alternativer: [
      "Ved begge tilstandene er rentoneaudiogrammet alltid normalt.",
      "Ved begge tilstandene er CI (cochleaimplantat) en aktuell behandling.",
      "Ved begge tilstandene er det typisk å høre spesielt dårlig i støy.",
      "Ved begge tilstandene er stapediusrefleksen alltid normal."
    ],
    riktig: 2, forklaring: "Både ANSD og APD gir typisk store vansker med å høre i støy. Audiogrammet er normalt ved APD, men ikke alltid ved ANSD, og CI er bare aktuelt ved ANSD.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-051", emne: "AUT1000", eksamen: "Høst 2025", nr: 51, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hvilken av følgende tilstander oppstår hyppigst ved akutt suppurativ/sekretorisk media otitt (mellomørebetennelse)?",
    figur: null,
    alternativer: [
      "Otosklerose",
      "Cholesteatom",
      "Sensorinevrogent hørselstap",
      "Mekanisk/konduktivt hørselstap"
    ],
    riktig: 3, forklaring: "Ved mellomørebetennelse fylles mellomøret med væske eller puss, så trommehinnen og mellomørebeina beveger seg dårligere. Det gir et mekanisk (konduktivt) hørselstap.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-052", emne: "AUT1000", eksamen: "Høst 2025", nr: 52, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hva er cholesteatom?",
    figur: null,
    alternativer: [
      "Hull (perforasjon) i trommehinnen",
      "Brudd i mellomørebeina (ossiklene)",
      "Betennelse i øregangen",
      "Hud (epitel) fra øregangen vokser inn gjennom defekt i trommehinnen"
    ],
    riktig: 3, forklaring: "Ved kolesteatom vokser hud (plateepitel) fra øregangen inn i mellomøret gjennom en defekt i trommehinnen. Den kan bryte ned beinstrukturer.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-053", emne: "AUT1000", eksamen: "Høst 2025", nr: 53, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hvorfor bør man ofte unngå bruk av høreapparat/ørepropp ved pågående ekstern otitt (øregangsbetennelse)?",
    figur: null,
    alternativer: [
      "Fordi bakteriene kan skade høreapparatet.",
      "Fordi hørselen alltid er normal ved øregangsbetennelse.",
      "Fordi øreproppen til høreapparatet hindrer ventilering (lufting) av øregangen og derfor forsinker tilhelingen.",
      "Fordi man ikke bør bruke høreapparat samtidig med antibiotika."
    ],
    riktig: 2, forklaring: "Øreproppen tetter øregangen, så den ikke luftes. Fuktig og varmt miljø forsinker tilhelingen ved øregangsbetennelse.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-054", emne: "AUT1000", eksamen: "Høst 2025", nr: 54, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hvilken ondartet (malign) hudtumor på aurikkelen (øremuslingen) har dårligst prognose (= er farligst)?",
    figur: null,
    alternativer: [
      "Basalcellecarcinom",
      "Chondrodermatitt",
      "Malignt melanom",
      "Plateepitelcarcinom"
    ],
    riktig: 2, forklaring: "Malignt melanom er den farligste hudkreften fordi den sprer seg (metastaserer) tidlig. Basalcellekarsinom sprer seg nesten aldri.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-055", emne: "AUT1000", eksamen: "Høst 2025", nr: 55, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hvilken av følgende strukturer påvirkes vanligvis av otosklerose?",
    figur: null,
    alternativer: [
      "Stigbøylen (stapes)",
      "Hammeren (malleus)",
      "Ambolten (incus)",
      "Øretrompeten (tuba auditiva, Eustachian tube)"
    ],
    riktig: 0, forklaring: "Ved otosklerose dannes nytt bein rundt det ovale vinduet, slik at stigbøylen (stapes) blir stiv. Det gir et konduktivt hørselstap.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-056", emne: "AUT1000", eksamen: "Høst 2025", nr: 56, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hva er typisk ved lengdebrudd i tinningbeinet (brudd inn i mellomøret)?",
    figur: null,
    alternativer: [
      "Blødning i mellomøret",
      "Blødning i det indre øret",
      "Lekkasje av cerebrospinalvæske",
      "Sensorinevralt hørselstap"
    ],
    riktig: 0, forklaring: "Lengdebrudd i tinningbeinet går gjennom mellomøret og gir typisk blødning der (hemotympanon) og konduktivt tap. Tverrbrudd går gjennom det indre øret og gir sensorinevralt tap og ofte facialisparese.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-057", emne: "AUT1000", eksamen: "Høst 2025", nr: 57, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hvilken type hørselshjelpemiddel er best egnet ved øregangsatresi?",
    figur: null,
    alternativer: [
      "Alt-i-øret høreapparat",
      "Høreapparat med ørehenger",
      "Beinforankret høreapparat",
      "Cochleaimplantat (CI)"
    ],
    riktig: 2, forklaring: "Ved atresi mangler øregangen, så lyd må overføres via beinet. Da er et beinforankret høreapparat best egnet.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-058", emne: "AUT1000", eksamen: "Høst 2025", nr: 58, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Ved akutt labyrintitt er følgende symptom(er) typisk:",
    figur: null,
    alternativer: [
      "Sensorinevralt hørselstap, ikke vertigo",
      "Vertigo og sensorinevralt hørselstap",
      "Vertigo, ikke hørselstap",
      "Mekanisk/konduktivt hørselstap, ikke vertigo"
    ],
    riktig: 1, forklaring: "Labyrintitt er betennelse i hele det indre øret (både cochlea og likevektsorganet) og gir både vertigo og sensorinevralt hørselstap.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-059", emne: "AUT1000", eksamen: "Høst 2025", nr: 59, tema: "Øresykdommer og behandling", poeng: 1,
    tekst: "Hvilket av følgende medikamenter er mest ototoksisk og gir hyppigst hørselstap?",
    figur: null,
    alternativer: [
      "Penicillin (antibiotikum)",
      "Paracet (smertestillende)",
      "Afipran (kvalmestillende)",
      "Cisplatin (en type cellegift)"
    ],
    riktig: 3, forklaring: "Cisplatin (cellegift) er sterkt ototoksisk og gir ofte varig hørselstap i diskanten. Penicillin, paracetamol og Afipran er ikke kjent for å skade hørselen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-060", emne: "AUT1000", eksamen: "Høst 2025", nr: 60, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hva er det typiske hørselsfrekvensområdet for en 18 år gammel, normalhørende person?",
    figur: null,
    alternativer: [
      "20 Hz - 20 kHz",
      "240 Hz - 16 kHz",
      "125 Hz - 8 kHz",
      "1000 Hz - 4000 Hz"
    ],
    riktig: 0, forklaring: "Et ungt, normalthørende menneske hører typisk fra ca. 20 Hz til 20 kHz.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-061", emne: "AUT1000", eksamen: "Høst 2025", nr: 61, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Fremkalte otoakustiske emisjoner (evoked otoacoustic emissions) er et viktig verktøy for vurdering av hørselstap. De kan brukes til å teste funksjonaliteten til...",
    figur: null,
    alternativer: [
      "mellomøremuskler",
      "de ytre hårcellene",
      "de indre hårcellene",
      "hørselsnerven"
    ],
    riktig: 1, forklaring: "Otoakustiske emisjoner skapes av de ytre hårcellenes aktive bevegelser, så de tester de ytre hårcellenes funksjon.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-062", emne: "AUT1000", eksamen: "Høst 2025", nr: 62, tema: "Vestibulærsystemet", poeng: 1,
    tekst: "Sansecellene i det vestibulære systemet er...",
    figur: null,
    alternativer: [
      "buegangene",
      "otolitter",
      "hårcellene",
      "cupulaen"
    ],
    riktig: 2, forklaring: "Sansecellene i likevektsorganet er hårcellene. Buegangene, otolittene og cupulaen er strukturer rundt dem.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-063", emne: "AUT1000", eksamen: "Høst 2025", nr: 63, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Blokkering av pumpeaktivitetene i stria vascularis vil resultere i...",
    figur: null,
    alternativer: [
      "stort hørselstap",
      "økt antall spontane otoakustiske emisjoner",
      "lukking av mekano-elektriske transduksjonskanaler i hårcellene",
      "økt avfyringshastighet (antall aksjonspotensialer per sekund) i de afferente fibrene i hørselsnerven"
    ],
    riktig: 0, forklaring: "Stria vascularis pumper kalium inn i endolymfen og lager det endocochleære potensialet, som er cochleas «batteri». Uten det svikter transduksjonen, og man får et stort hørselstap.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-064", emne: "AUT1000", eksamen: "Høst 2025", nr: 64, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Stimulering med sterke lyder i venstre øre får mellomøremusklene til å trekke seg sammen i...",
    figur: null,
    alternativer: [
      "venstre øre",
      "høyre øre",
      "begge ørene, men sterkere i høyre øre",
      "begge ørene"
    ],
    riktig: 3, forklaring: "Stapediusrefleksen er bilateral: sterk lyd i ett øre gir sammentrekning i begge ører. Responsen er om noe litt sterkere på samme side (ipsilateralt), ikke på motsatt side.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "A1-H25-065", emne: "AUT1000", eksamen: "Høst 2025", nr: 65, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Elektromotilitet er lengdeendringen av ytre hårceller. Dette forårsakes av…",
    figur: null,
    alternativer: [
      "deres egne aksjonspotensial",
      "innstrømning (influx) av natrium",
      "deres egne reseptorpotensial",
      "aktiviteten til de efferente fibrene"
    ],
    riktig: 2, forklaring: "Lengdeendringen (elektromotiliteten) i ytre hårceller drives av deres eget reseptorpotensial, via motorproteinet prestin.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-066", emne: "AUT1000", eksamen: "Høst 2025", nr: 66, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Gentamicin er et antibiotikum som ødelegger ytre hårceller. Hvilket maksimalt hørselstap forventer du hvis alle ytre hårceller er ødelagt?",
    figur: null,
    alternativer: [
      "6 dB hørselstap, da ytre hårceller utgjør 50 % av hele hårcellepopulasjonen",
      "ca. 30 dB hørselstap, ettersom ytre hårceller utfører tilpasningen av impedans (impedance matching)",
      "ca. 60 dB hørselstap, da ytre hårceller er ansvarlige for cochlea-forsterkning",
      "Ingen, kun indre hårceller mottar innervering fra Type I afferente fibre"
    ],
    riktig: 2, forklaring: "De ytre hårcellene står for cochleaforsterkeren, som gir ca. 40–60 dB forsterkning av svake lyder. Uten dem blir tapet derfor rundt 60 dB.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-067", emne: "AUT1000", eksamen: "Høst 2025", nr: 67, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Tap av ytre hårceller har implikasjoner for den vandrende bølgen (travelling wave) på basilarmembranen. I området med de tapte eller dysfunksjonelle ytre hårcellene vil den vandrende bølgen...",
    figur: null,
    alternativer: [
      "bli stoppet på stedet for hårcelletap og dermed ikke nå sitt tonotopiske sted",
      "bli mindre i amplitude og bredere",
      "reflekteres til helicotrema",
      "bli større i amplitude"
    ],
    riktig: 1, forklaring: "Uten den aktive forsterkningen fra ytre hårceller blir den vandrende bølgen lavere i amplitude og bredere, altså dårligere frekvensselektivitet.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-068", emne: "AUT1000", eksamen: "Høst 2025", nr: 68, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "Vertikal lydlokalisering avhenger av...",
    figur: null,
    alternativer: [
      "interaural intensitetsforskjell",
      "interaural tidsforskjell",
      "tykkelsen på tinningbeinet",
      "formen på pinna"
    ],
    riktig: 3, forklaring: "Vertikal lokalisering avhenger av spektrale endringer som pinnaens form gir. ITD og ILD gir først og fremst informasjon i horisontalplanet.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-069", emne: "AUT1000", eksamen: "Høst 2025", nr: 69, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "De minste interaurale tidsforskjellene (interaural time differences, ITDs) som normalthørende, unge mennesker vanligvis kan detektere er ca. …",
    figur: null,
    alternativer: [
      "0,5 s",
      "2 ms",
      "10 µs",
      "10 ms"
    ],
    riktig: 2, forklaring: "Normalthørende kan oppdage interaurale tidsforskjeller helt ned mot ca. 10 mikrosekunder.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-070", emne: "AUT1000", eksamen: "Høst 2025", nr: 70, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Hva kjennetegner artikulasjonen til plosiver?",
    figur: null,
    alternativer: [
      "Man lager fullstendig lukke i munnen, senker velum og sender luftstrømmen ut gjennom nesen",
      "Man har kontakt mellom tungespiss og gane og lar luftstrømmen gå langs sidene av tungen",
      "Man lager fullstendig lukke i munnen, bygger opp et lufttrykk bak lukket, og slipper så opp lukket for å slippe ut overtrykket",
      "Man lager en svært trang åpning i munnen som luftstrømmen presses ut gjennom, slik at det oppstår turbulens i luften"
    ],
    riktig: 2, forklaring: "Ved plosiver lukkes munnen helt, lufttrykket bygges opp bak lukket, og lukket åpnes brått. Nesen (velum senket) hører til nasaler, og turbulens til frikativer.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-071", emne: "AUT1000", eksamen: "Høst 2025", nr: 71, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hvilken lydegenskap dominerer oppfatningen av tonehøyde (pitch)?",
    figur: null,
    alternativer: [
      "Intensitet",
      "Periodisitet",
      "Antall overtoner",
      "Fase"
    ],
    riktig: 1, forklaring: "Opplevd tonehøyde bestemmes først og fremst av lydens periodisitet (grunntonen), ikke av intensitet eller antall overtoner.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-072", emne: "AUT1000", eksamen: "Høst 2025", nr: 72, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Hvilken av følgende strukturer er IKKE en del av øremuslingen?",
    figur: null,
    alternativer: [
      "Antihelix",
      "Tragus",
      "Concha",
      "Helicotrema"
    ],
    riktig: 3, forklaring: "Antihelix, tragus og concha er deler av øremuslingen. Helicotrema er åpningen mellom scala vestibuli og scala tympani i toppen av cochlea.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-073", emne: "AUT1000", eksamen: "Høst 2025", nr: 73, tema: "Signalbehandling og lydmåling", poeng: 1,
    tekst: "Hvilken påstand om systemer er RIKTIG?",
    figur: null,
    alternativer: [
      "Ikke-lineære systemer bevarer bølgeformen.",
      "Lineære systemer bevarer ikke bølgeformen.",
      "Hårceller kan betraktes som lineære systemer.",
      "Når input (inngang) til et lineært system dobles, dobles også output (utgang)."
    ],
    riktig: 3, forklaring: "Et lineært system gir proporsjonal output: dobles input, dobles output, og bølgeformen bevares. Hårceller (og cochlea) er ikke-lineære.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-074", emne: "AUT1000", eksamen: "Høst 2025", nr: 74, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Hva er RIKTIG?",
    figur: null,
    alternativer: [
      "Scala tympani inneholder endolymfe, en væske med høy K+ (Kaliumioner) - konsentrasjon.",
      "Alle scalae i cochlea inneholder perilympfe, en væske med høy K+ (Kaliumioner) - konsentrasjon.",
      "Scala vestibuli og scala tympani inneholder perilymfe, en væske med lav K+ (Kaliumioner) - konsentrasjon.",
      "Scala media inneholder endolymfe, en væske med lav K+ (Kaliumioner) - konsentrasjon."
    ],
    riktig: 2, forklaring: "Scala vestibuli og scala tympani inneholder perilymfe med lite kalium. Scala media inneholder endolymfe med mye kalium.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-075", emne: "AUT1000", eksamen: "Høst 2025", nr: 75, tema: "Vestibulærsystemet", poeng: 1,
    tekst: "Vestibulære hårceller skiller seg fra cochleære hårceller, fordi...",
    figur: null,
    alternativer: [
      "vestibulære hårceller har bare afferent innervasjon, mens cochleære hårceller har både afferent og efferent innervasjon.",
      "det finnes én type vestibulære hårceller, og to typer cochleære hårceller.",
      "vestibulære hårceller har ett kinocilium og stereocilia, mens cochleære hårceller kun har stereocilia.",
      "vestibulære hårceller har prestin i cellemembranen, mens cochleære hårceller har fosfolipider i cellemebranen."
    ],
    riktig: 2, forklaring: "Vestibulære hårceller har både stereocilia og ett kinocilium. Modne cochleære hårceller har bare stereocilia.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-076", emne: "AUT1000", eksamen: "Høst 2025", nr: 76, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Menneskets trommehinne består av...",
    figur: null,
    alternativer: [
      "pars tensa og modiolus.",
      "pars petrosa og pars flaccida.",
      "pars flaccida og pars tensa.",
      "pars flaccida og processus mastoideus."
    ],
    riktig: 2, forklaring: "Trommehinnen består av pars tensa (den store, stramme delen) og pars flaccida (den lille, slappe delen øverst).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-077", emne: "AUT1000", eksamen: "Høst 2025", nr: 77, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hvilken påstand om synapser er RIKTIG?",
    figur: null,
    alternativer: [
      "De fleste synapser mellom muskelcellene i hjertet er kjemiske synapser.",
      "Glutamat er en typisk nevrotransmitter i en elektrisk synapse.",
      "Synapsen mellom en indre hårcelle og en type I afferent fiber i hørselsnerven er kjemisk.",
      "Kjemiske synapser overfører informasjon raskere enn elektriske synapser."
    ],
    riktig: 2, forklaring: "Synapsen mellom indre hårcelle og type I-fiber er kjemisk (glutamat). Hjertemuskelceller er koblet med elektriske synapser, og elektriske synapser er raskest.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-078", emne: "AUT1000", eksamen: "Høst 2025", nr: 78, tema: "Anatomi og nervesystemet", poeng: 1,
    tekst: "Hvis vi skulle øke de ekstracellulære Kalium-konsentrasjonene til en hvilende, ikke-spesialisert nervecelle fra den normale, fysiologiske konsentrasjonen, ville hvilemembranspotensialet (resting membrane potential)...",
    figur: null,
    alternativer: [
      "forbli konstant.",
      "hyperpolariseres.",
      "depolariseres.",
      "repolariseres."
    ],
    riktig: 2, forklaring: "Hvilepotensialet bestemmes mest av kalium. Mer kalium utenfor cellen gir mindre utstrømning, og cellen depolariseres.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-079", emne: "AUT1000", eksamen: "Høst 2025", nr: 79, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hvilken av de følgende psykoakustiske målemetodene er en adaptiv metode?",
    figur: null,
    alternativer: [
      "Grenseverdimetode (method of limits)",
      "Justeringsmetode (method of adjustment)",
      "Trappetrinnsmetode (staircase method)",
      "Metode med konstante stimuli (method of constant stimuli)"
    ],
    riktig: 2, forklaring: "Trappetrinnsmetoden er adaptiv: neste stimulus avhenger av forrige svar. De andre metodene bruker forhåndsbestemte stimuli.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-080", emne: "AUT1000", eksamen: "Høst 2025", nr: 80, tema: "Vestibulærsystemet", poeng: 1,
    tekst: "Hvilken påstand om nystagmus er RIKTIG?",
    figur: null,
    alternativer: [
      "Spontan nystagmus er alltid patologisk.",
      "Spontan nystagmus oppstår mens du opplever rotasjon.",
      "Spontan nystagmus er en normal fysiologisk respons når vi befinner oss i et mørkt rom.",
      "Spontan nystagmus oppstår etter 5 minutters rotasjon."
    ],
    riktig: 0, forklaring: "Spontan nystagmus (uten provokasjon) regnes som patologisk. Nystagmus under eller etter rotasjon er normal, men da er den ikke spontan.",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 1
  },
  {
    id: "A1-H25-081", emne: "AUT1000", eksamen: "Høst 2025", nr: 81, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Bildet viser en visualisering av et talesignal, uttalt av en «A4-mann». Hva er det som blir sagt?",
    figur: "figurer/aut1000-h25-oppg081.jpg",
    alternativer: [
      "Fram",
      "Sang",
      "Skum",
      "Flagg"
    ],
    riktig: 3, forklaring: "Ordet starter med en svak frikativ med spredt støy (/f/), deretter l og vokal. Til slutt kommer et lukke (stillhet) med en tydelig utløsning: plosiven /g/. Det passer med «Flagg».",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 1
  },
  {
    id: "A1-H25-082", emne: "AUT1000", eksamen: "Høst 2025", nr: 82, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Figuren under viser et power spectrum (et klangspektrum) av en uttale av den nøytrale vokalen schwa. Hvilken grunntone har taleren?",
    figur: "figurer/aut1000-h25-oppg082.jpg",
    alternativer: [
      "130 Hz",
      "200 Hz",
      "120 Hz",
      "100 Hz"
    ],
    riktig: 0, forklaring: "Deltonene ligger ca. 130 Hz fra hverandre (130, 260, 390, 520 …). Avstanden mellom deltonene er lik grunntonen, altså 130 Hz.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-083", emne: "AUT1000", eksamen: "Høst 2025", nr: 83, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Bildet under viser en visualisering av et talesignal, uttalt av en «A4-mann». Hva er det som blir sagt?",
    figur: "figurer/aut1000-h25-oppg083.jpg",
    alternativer: [
      "Sus",
      "Mus",
      "Hus",
      "Fus"
    ],
    riktig: 1, forklaring: "Ordet starter med en stemt lyd med mest energi lavt i frekvens (nasalen /m/), så vokalen /u/ og til slutt en kraftig, høyfrekvent frikativ (/s/). Det passer med «Mus».",
    fasit: "generert", sikkerhet: "middels", kandidatsvar: 2
  },
  {
    id: "A1-H25-084", emne: "AUT1000", eksamen: "Høst 2025", nr: 84, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Mellomøremusklene...",
    figur: null,
    alternativer: [
      "er begge innervert av nervus facialis (ansiktsnerven)",
      "er de minste tverrstripete (striated) musklene i menneskekroppen",
      "trekker seg sammen unilateralt til det stimulerte øret",
      "vil øke mobiliteten til mellomørebeina når mellomøremusklene er aktivert"
    ],
    riktig: 1, forklaring: "Stapedius er kroppens minste tverrstripete muskel. Tensor tympani innerveres av n. trigeminus og stapedius av n. facialis, og musklene stivner mellomørebeina.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-085", emne: "AUT1000", eksamen: "Høst 2025", nr: 85, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "«The cone of confusion» er et område med tvetydige interaurale signaler for lydlokalisering. Hvilken av de følgende strategiene kan forbedre lydlokaliseringen?",
    figur: null,
    alternativer: [
      "Aktivere det olivocochleære (efferente) systemet med ekstra lyder",
      "Nynning",
      "Hodebevegelser",
      "Bevisst trekke sammen mellomøremusklene"
    ],
    riktig: 2, forklaring: "Ved å bevege hodet endres ITD og ILD, og tvetydigheten i «the cone of confusion» kan løses.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-086", emne: "AUT1000", eksamen: "Høst 2025", nr: 86, tema: "Binaural hørsel og lokalisering", poeng: 1,
    tekst: "En lydkilde med en asimut på 60 grader leverer en ren tone med en frekvens på 500 Hz. Når tonen oppfattes binauralt resulterer dette i…",
    figur: null,
    alternativer: [
      "store interaurale tidsforskjeller (ITDs).",
      "store interaurale nivåforskjeller (ILDs).",
      "binaurale svevninger (beats).",
      "ingen pekepinn (cue) som kan brukes til lydlokalisering."
    ],
    riktig: 0, forklaring: "Ved 500 Hz er bølgelengden lang og hodeskyggen liten, så ILD blir små. En kilde 60 grader til siden gir derimot en stor tidsforskjell (ITD).",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-087", emne: "AUT1000", eksamen: "Høst 2025", nr: 87, tema: "Psykoakustikk", poeng: 1,
    tekst: "Hva er hørestyrkenivå (loudness level i Phon(s)) til en rentone med en frekvens på 1 kHz og 70 dB SPL?",
    figur: null,
    alternativer: [
      "7 Phons",
      "35 Phons",
      "10 Phons",
      "70 Phons"
    ],
    riktig: 3, forklaring: "Phon er definert ut fra 1 kHz: en 1 kHz-tone på 70 dB SPL har hørestyrkenivået 70 phon.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-088", emne: "AUT1000", eksamen: "Høst 2025", nr: 88, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Hårceller er sanseceller i hørselssystemet. Menneskets cochlea inneholder omtrent...",
    figur: null,
    alternativer: [
      "12 000 indre og 3000 ytre hårceller",
      "12 000 ytre hårceller og 3000 indre hårceller",
      "30 000 hårceller i sacculus og 55 000 hårceller i utriculus",
      "7000 hårceller i hver ampulle i buegangene"
    ],
    riktig: 1, forklaring: "Menneskets cochlea har omtrent 12 000 ytre og 3000–3500 indre hårceller.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-089", emne: "AUT1000", eksamen: "Høst 2025", nr: 89, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Ionekanaler i hårcellers hårbunter (stereocilia) er...",
    figur: null,
    alternativer: [
      "temperaturstyrt.",
      "ligandstyrt.",
      "spenningsstyrt.",
      "mekanisk styrt."
    ],
    riktig: 3, forklaring: "Transduksjonskanalene i stereocilia åpnes mekanisk, når tip-links strammes ved bøyning av hårbunten.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-090", emne: "AUT1000", eksamen: "Høst 2025", nr: 90, tema: "Akustikk og lydfysikk", poeng: 1,
    tekst: "Hvis du summerer og spiller to akustiske bølgeformer med identisk frekvens og amplitude, men med en faseforskjell på 180° (pi) får du…",
    figur: null,
    alternativer: [
      "en lyd med dobbelt så høy amplitude, men samme frekvens.",
      "en lyd med dobbelt så høy amplitude og dobbelt så høy frekvens.",
      "ingen lyd.",
      "en lyd med dobbelt så høy frekvens, men samme amplitude."
    ],
    riktig: 2, forklaring: "Med 180 graders faseforskjell er den ene bølgen alltid motsatt av den andre, så de opphever hverandre helt (destruktiv interferens): ingen lyd.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-091", emne: "AUT1000", eksamen: "Høst 2025", nr: 91, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Forsterkningen i cochlea…",
    figur: null,
    alternativer: [
      "er et konsept som beskriver den sammensatte aktiviteten til de indre hårcellene.",
      "gjør den vandrende bølgen (travelling wave) bredere.",
      "forsterker alle lydintensiteter med samme forsterkning.",
      "er et konsept som beskriver den sammensatte aktiviteten til de ytre hårcellene."
    ],
    riktig: 3, forklaring: "Cochleaforsterkningen er de ytre hårcellenes samlede aktive bidrag. Den forsterker svake lyder mest (ikke-lineært) og gjør bølgen smalere og skarpere.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-092", emne: "AUT1000", eksamen: "Høst 2025", nr: 92, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Hva er det som gjør at vi oppfatter /i/ og /e/ som ulike vokaler?",
    figur: null,
    alternativer: [
      "Forskjeller i formantene",
      "Forskjeller i rundingen av leppene",
      "Forskjeller i talekanal­lengden",
      "Forskjeller i grunntonen"
    ],
    riktig: 0, forklaring: "Vokaler skilles på formantene. /i/ og /e/ har ulik F1 og F2.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-093", emne: "AUT1000", eksamen: "Høst 2025", nr: 93, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Kilden (dvs. cochleas biologiske batteri) som opprettholder de høye kaliumnivåene (K+) i endolymfen er...",
    figur: null,
    alternativer: [
      "intracellulært potensial (intracellular potential).",
      "cochleær mikrofoni (cochlear microphonics).",
      "aksjonspotensial.",
      "stria vascularis."
    ],
    riktig: 3, forklaring: "Stria vascularis pumper kalium inn i endolymfen og opprettholder det endocochleære potensialet.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-094", emne: "AUT1000", eksamen: "Høst 2025", nr: 94, tema: "Forskningsmetode", poeng: 1,
    tekst: "Hvilket av følgende begrep er IKKE en del av en vitenskapelig artikkel?",
    figur: null,
    alternativer: [
      "Disputas",
      "Diskusjon",
      "Sammendrag",
      "Resultater"
    ],
    riktig: 0, forklaring: "En vitenskapelig artikkel har bl.a. sammendrag, metode, resultater og diskusjon. Disputas er det muntlige forsvaret av en doktorgrad.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 0
  },
  {
    id: "A1-H25-095", emne: "AUT1000", eksamen: "Høst 2025", nr: 95, tema: "Psykoakustikk", poeng: 1,
    tekst: "Auditive filtre (auditory filters) kan hovedsakelig beskrives som...",
    figur: null,
    alternativer: [
      "høypassfiltre",
      "båndstoppfiltre",
      "lavpassfiltre",
      "båndpassfiltre"
    ],
    riktig: 3, forklaring: "De auditive filtrene er båndpassfiltre: hvert slipper gjennom et frekvensbånd rundt sin senterfrekvens.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 3
  },
  {
    id: "A1-H25-096", emne: "AUT1000", eksamen: "Høst 2025", nr: 96, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Lydnivå er «kodet» i hørselsnerven slik at…",
    figur: null,
    alternativer: [
      "sterke lyder forårsaker høy konduksjonshastighet (conduction velocity) for hørselsnerven",
      "sterke lyder forårsaker aksjonspotensialer med stor amplitude",
      "sterke lyder forårsaker et høyt antall aksjonspotensialer per sekund",
      "svake lyder forårsaker små reseptorpotensialer"
    ],
    riktig: 2, forklaring: "Sterkere lyd kodes som flere aksjonspotensialer per sekund (og rekruttering av flere fibre). Aksjonspotensialene har alltid samme amplitude.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-097", emne: "AUT1000", eksamen: "Høst 2025", nr: 97, tema: "Fonetikk og talelyder", poeng: 1,
    tekst: "Å erstatte luft i talekanalen midlertidlig med helium øker lydhastigheten gjennom talekanalen. Dette resulterer hovedsakelig i…",
    figur: null,
    alternativer: [
      "sterkere tale.",
      "raskere tale.",
      "en lysere grunntone.",
      "endringer i resonanser."
    ],
    riktig: 3, forklaring: "Helium øker lydhastigheten i talekanalen, så resonansene (formantene) flyttes opp. Grunntonen fra stemmebåndene endres lite, selv om stemmen høres lysere ut.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  },
  {
    id: "A1-H25-098", emne: "AUT1000", eksamen: "Høst 2025", nr: 98, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Tonotopien til det perifere auditive systemet er hovedsakelig forårsaket av...",
    figur: null,
    alternativer: [
      "at de indre hårcellene sender afferent informasjon til sentralnervesystemet.",
      "en gradvis økning av masse og bredde, og avtagende stivhet av basilarmembranen fra basis til apex.",
      "at de ytre hårcellene mottar efferent informasjon fra sentralnervesystemet.",
      "tektorialmembranen, som beveger stereociliaene til de ytre hårcellene."
    ],
    riktig: 1, forklaring: "Basilarmembranen blir bredere og mindre stiv fra basis til apex. Derfor gir høye frekvenser størst utslag ved basis og lave ved apex.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-099", emne: "AUT1000", eksamen: "Høst 2025", nr: 99, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "Hvilken påstand er RIKTIG?",
    figur: null,
    alternativer: [
      "Menneskets cochlea er kveilet og har ca. 5 omdreininger.",
      "Hvis menneskets cochlea kunne rulles ut, ville det måles til omtrent 35 mm lengde.",
      "Sammenrullingen av cochlea forbedrer deteksjonen av høyfrekvent lyd.",
      "Menneskets cochlea har ved fødselen omtrent 25 % av størrelsen av et voksent cochlea."
    ],
    riktig: 1, forklaring: "Utrullet er menneskets cochlea omtrent 32–35 mm lang. Den har ca. 2,5–2,75 vindinger og har voksen størrelse allerede ved fødselen.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 1
  },
  {
    id: "A1-H25-100", emne: "AUT1000", eksamen: "Høst 2025", nr: 100, tema: "Øret: anatomi og fysiologi", poeng: 1,
    tekst: "De bitte små filamentene som forbinder rader av stereocilia kalles...",
    figur: null,
    alternativer: [
      "tip-links.",
      "tympani-filament.",
      "cupula.",
      "retikulær lamina."
    ],
    riktig: 0, forklaring: "Tip-links er de tynne filamentene som forbinder toppen av et stereocilium med nabociliet. De åpner transduksjonskanalene.",
    fasit: "generert", sikkerhet: "høy", kandidatsvar: 2
  }
);
