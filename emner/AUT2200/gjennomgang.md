# AUT2200 – gjennomgang av generert innhold

Laget automatisk fra `data/aut2200-kort.js`, `data/aut2200-oppgaver.js` og `data/aut2200-muntlig.js`.

---

## Forsterkningsberegning (07.09)

20 flashcards · 14 flervalg · 4 forklar-kort · 2 scenarier

### Forklar-kort og scenarier

#### Forklar (M22-FB01): Forklar hva forsterkningsberegning er, og forskjellen på generiske og proprietære tilpasningsregler.

*Generert fra forelesning: Forsterkningsberegning (07.09), foil 3–5, 10–14 og 34*

**Sjekkliste – en god forklaring tar med:**

- [ ] Man måler pasientens karakteristikker (typisk høreterskler) og beregner forsterkning med en formel (algoritme)
- [ ] Resultatet kalles målforsterkning, beregningsmål eller target
- [ ] Generiske regler (NAL, DSL) er åpne, dokumenterte og forskningsbaserte
- [ ] Proprietære regler er leverandørens egne: lukkede og ikke forskningsbaserte
- [ ] Forelesningen anbefaler klinisk evaluerte (validerte) formler
- [ ] Kort historikk: speiling av audiogrammet, MCL, half-gain og POGO før dagens NAL og DSL
- [ ] Grunnlaget kan være terskler (raskt, alle pasienter) eller lydstyrke (samme audiogram kan gi ulik lydstyrkeoppfattelse)

**Oppfølgingsspørsmål:**

- *Hvorfor holdt det ikke å speile audiogrammet?*  
  → Det ga mye forsterkning, særlig ved høye terskler, og fungerte bare på terskelnivå, ikke for lyder over terskel.
- *Hva gjør du hvis den proprietære regelen og den generiske gir ganske ulik forsterkning?*  
  → Bruk en klinisk evaluert generisk regel som utgangspunkt, og verifiser med REM at du faktisk når den. Studier viser at proprietære regler varierer mye seg imellom.
- *Hva er argumentene for lydstyrkebaserte metoder?*  
  → Personer med samme audiogram kan oppleve lydstyrke ulikt, og lydstyrke er viktig for hørbarhet og komfort, særlig i apparat uten volumkontroll.

#### Forklar (M22-FB02): Forklar NAL-NL2 og DSL v5.0: hva målet med hver regel er, og hvordan de skiller seg fra hverandre.

*Generert fra forelesning: Forsterkningsberegning (07.09), foil 14 og 22–27*

**Sjekkliste – en god forklaring tar med:**

- [ ] NAL-NL2 bygger på NAL-NL1: maksimere taleforståeligheten uten at talen blir sterkere enn for en normalthørende
- [ ] NAL prøver ikke å gjenopprette normal lydstyrke på hver frekvens
- [ ] NAL-NL2 tar hensyn til kjønn, erfaring (vante brukere får mer), alder (barn får mer) og binaural tilpasning (mindre)
- [ ] DSL har som mål et hørbart og komfortabelt signal i hver frekvensregion, og er tradisjonelt brukt for barn
- [ ] DSL v5.0: begrensning på høye nivåer, WDRC på midtnivå, lineær under kompresjonsterskelen, eventuelt ekspansjon helt nederst
- [ ] DSL v5.0 gir mindre forsterkning for svake lyder (støy), til voksne og ved binaural tilpasning
- [ ] De to reglene gir ulik forsterkning for samme hørselstap
- [ ] NAL-NL3 er på vei: KI-drevet og mer persontilpasset

**Oppfølgingsspørsmål:**

- *Hvorfor gir NAL-NL2 mindre forsterkning ved binaural tilpasning?*  
  → Med to apparater summeres lydstyrken fra begge ørene, så hvert apparat trenger mindre forsterkning for samme opplevde lydstyrke. (Begrunnelsen står ikke i foilene. Den bygger på binaural summasjon fra AUT2201.)
- *Hvilken regel ville du valgt til et barn, og hvorfor?*  
  → DSL har tradisjonelt vært brukt for barn og bygger på REAG. NAL-NL2 gir også barn mer forsterkning (5 dB mer på midtnivå). Begge er generiske og validerte.
- *Hva er nytt med NAL-NL3?*  
  → Den er trent med KI på millioner av tilpasninger, er mer persontilpasset, gir mindre forsterkning der støy dominerer og mindre overforsterkning i diskanten ved bratte tap, og er bedre for musikk.

#### Forklar (M22-FB03): Forklar hvorfor målforsterkningen bare er et utgangspunkt, og hva du må vurdere i tillegg.

*Generert fra forelesning: Forsterkningsberegning (07.09), foil 37–40, 42–45 og 48–49*

**Sjekkliste – en god forklaring tar med:**

- [ ] Målforsterkningen bygger på gjennomsnittsdata, ikke på den enkelte pasienten
- [ ] Adapsjon: ønsket forsterkning øker ofte over tid, og mer jo større tapet er
- [ ] Brukere foretrekker i snitt 3–4 dB mindre enn NAL-RP og NAL-NL1, så et tilvenningstrinn kan være lurt
- [ ] Døde regioner: ved terskel over 70 dB HL ved 4 kHz er død region sannsynlig; vurder TEN-test
- [ ] Overdreven forsterkning i diskanten ved store tap kan senke taleforståeligheten
- [ ] MPO (OSPL90) må være passe: ikke ubehagelig, men ikke så lav at tale og lydkvalitet blir dårlig
- [ ] De fleste beregner MPO ut fra gjennomsnitt, ikke pasientens målte ULL
- [ ] Finjustering er ofte nødvendig, og du må verifisere at du faktisk er på målet

**Oppfølgingsspørsmål:**

- *Hvordan kan økningen i forsterkning skje etter hvert?*  
  → Manuelt gjennom tilvenningstrinn ved kontroller, eller automatisk i høreapparatet.
- *Hva gjør du hvis MPO er beregnet ut fra gjennomsnitt og pasienten klager på at sterke lyder er ubehagelige?*  
  → Mål pasientens ubehagsterskler (ULL/UCL) og juster MPO etter dem. Kontroller med REAR85 (MPO-test) at output ligger under UCL.
- *Hvorfor kan det være lite vits i å forsterke fullt ut i en død region?*  
  → Indre hårceller eller nervefibre virker ikke der, så forsterket lyd gir lite ekstra informasjon. Den kan heller gi mer lydstyrke, dårligere lydkvalitet og lavere taleforståelighet.

#### Forklar (M22-FB04): Forklar hvordan forsterkningen beregnes ved et mekanisk eller kombinert hørselstap, og hvorfor.

*Generert fra forelesning: Forsterkningsberegning (07.09), foil 29–32*

**Sjekkliste – en god forklaring tar med:**

- [ ] Skill mellom den sensorinevrale delen (beinledning) og den mekaniske delen (luft-bein-gapet)
- [ ] NAL-NL2 gir forsterkning ut fra beinledningstersklene
- [ ] I tillegg gis 75 % av luft-bein-gapet som ekstra forsterkning på hver frekvens
- [ ] Det brukes mindre kompresjon
- [ ] Gi et regneeksempel: gap 20 dB gir 15 dB ekstra
- [ ] Andre regler bruker samme prinsipp (også NAL-NL3)

**Oppfølgingsspørsmål:**

- *Hvorfor får ikke pasienten hele luft-bein-gapet som ekstra forsterkning?*  
  → Forelesningen oppgir 75 % av gapet. Mer forklaring på hvorfor akkurat 75 % står ikke i foilene. Spør gjerne foreleser, eller sjekk Dillon kap. 10.
- *Hva må du huske i REM-programvaren ved et kombinert tap?*  
  → Å legge inn beinledningstersklene (haken for beinledning), ellers blir målforsterkningen beregnet feil.
- *Hvilken diagnose er et typisk eksempel?*  
  → Otosklerose, som forelesningen viser som eksempel på mekanisk tap.

#### Scenario (M22-FB05): Jonas (52) har et ensidig sensorinevralt hørselstap på høyre øre etter et akustisk traume, med terskel over 70 dB HL ved 4 kHz. Han har aldri brukt høreapparat og er skeptisk. Beskriv hvordan du setter opp forsterkningen i første tilpasning.

*Generert fra forelesning: Forsterkningsberegning (07.09), foil 5, 25, 42–45 og 48; pasient inspirert av «Ukas pasient HA1»*

**Fremgangsmåte (fasit):**

1. Kontroller audiogrammet: luft- og beinledning (er tapet rent sensorinevralt?), og om ubehagsterskler er målt
2. Velg en klinisk evaluert generisk regel, f.eks. NAL-NL2, i stedet for leverandørens proprietære regel
3. Legg inn riktige opplysninger: førstegangsbruker, mann, voksen, monaural tilpasning
4. Terskelen over 70 dB HL ved 4 kHz gjør en død region sannsynlig: vurder TEN-test og hvor mye det er verdt å forsterke i diskanten
5. Start med et tilvenningstrinn litt under målforsterkningen, fordi han er ny bruker og skeptisk
6. Sett MPO ut fra målte ubehagsterskler hvis du har dem, ellers sjekk den spesielt
7. Verifiser med REM at forsterkningen faktisk er der du tror
8. Avtal kontroll for å øke forsterkningen gradvis (adapsjon) og finjustere

**Oppfølgingsspørsmål:**

- *Hvorfor ikke bare bruke «first fit» fra programvaren?*  
  → First fit er ofte proprietær, bygger på gjennomsnitt og underforsterker ofte. En validert regel som verifiseres med REM gir et kjent utgangspunkt.
- *Hva hvis Jonas synes lyden er for skarp etter tilpasningen?*  
  → Sjekk med REM om du ligger over target i diskanten. Vurder et lavere tilvenningstrinn og øk gradvis ved kontrollene, siden brukere ofte foretrekker litt mindre enn målet i starten.

#### Scenario (M22-FB06): En pasient med otosklerose har luftledning 65 dB HL og beinledning 45 dB HL ved 1 kHz. Beskriv hvordan du beregner og setter forsterkningen ved denne frekvensen.

*Generert fra forelesning: Forsterkningsberegning (07.09), foil 29–32 og 37–40*

**Fremgangsmåte (fasit):**

1. Regn ut luft-bein-gapet: 65 − 45 = 20 dB
2. Grunnforsterkningen beregnes ut fra beinledningsterskelen (den sensorinevrale delen)
3. Legg til 75 % av gapet: 0,75 × 20 = 15 dB ekstra
4. Bruk mindre kompresjon enn ved et rent sensorinevralt tap
5. Sørg for at beinledningstersklene er lagt inn i tilpasningsprogrammet (og i REM-programvaren)
6. Vurder MPO: høyere forsterkning gir høyere output, så kontroller at det ikke blir ubehagelig
7. Verifiser med REM og finjuster ut fra pasientens opplevelse

**Oppfølgingsspørsmål:**

- *Hva skjer hvis du glemmer å legge inn beinledningen?*  
  → Programmet tror tapet er rent sensorinevralt. Da blir både forsterkning og kompresjon beregnet feil, og pasienten får for lite forsterkning for den mekaniske delen.
- *Hvorfor trengs mindre kompresjon ved mekanisk tap?*  
  → Et mekanisk tap demper lyden, men dynamikkområdet i cochlea er normalt. Da trengs ikke den kompresjonen som brukes for recruitment ved cochleære tap. (Foilene sier bare at kompresjonen blir mindre. Begrunnelsen bygger på AUT2201.)

### Flervalg

**S22-FB01.** En pasient har høreterskel 60 dB HL ved 500 Hz. Hvor mye innskuddsforsterkning (IG) gir POGO-formelen ved denne frekvensen? (IG = 0,5 × H + k, der k = −5 dB ved 500 Hz)  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 11*

- **✔ 25 dB**
- 30 dB
- 20 dB
- 35 dB

> 0,5 × 60 = 30 dB, og k ved 500 Hz er −5 dB: 30 − 5 = 25 dB.

**S22-FB02.** En pasient har høreterskel 75 dB HL ved 1000 Hz. Hvor mye forsterkning gir POGO II ved denne frekvensen? (k = 0 dB ved 1 kHz, og tillegget 0,5 × (H − 65) gjelder når H er over 65 dB HL)  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 11*

- 37,5 dB
- **✔ 42,5 dB**
- 47,5 dB
- 32,5 dB

> 0,5 × 75 = 37,5 dB. Terskelen er over 65 dB HL, så tillegget blir 0,5 × (75 − 65) = 5 dB. Til sammen 42,5 dB.

**S22-FB03.** Etter half-gain-regelen (Lybarger, 1944): Hvor mye forsterkning skal en pasient med 60 dB HL ved en frekvens ha der?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 4*

- 60 dB
- 45 dB
- **✔ 30 dB**
- 15 dB

> Half-gain-regelen sier at foretrukket forsterkning er omtrent halvparten av høreterskelen: 60 / 2 = 30 dB.

**S22-FB04.** En pasient har luftledningsterskel 65 dB HL og beinledningsterskel 45 dB HL ved 1 kHz. Hvor mye ekstra forsterkning gir NAL-NL2 ved denne frekvensen på grunn av den mekaniske delen av tapet?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 29*

- 20 dB
- 10 dB
- 5 dB
- **✔ 15 dB**

> Luft-bein-gapet er 65 − 45 = 20 dB. NAL-NL2 gir et tillegg på 75 % av gapet: 0,75 × 20 = 15 dB, i tillegg til forsterkningen for den sensorinevrale delen.

**S22-FB05.** Den første NAL-metoden (1976) foreskrev en foretrukket innskuddsforsterkning ved 1 kHz på 0,46 ganger terskelen. Hvor mye blir det ved en terskel på 50 dB HL?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 12*

- **✔ 23 dB**
- 25 dB
- 46 dB
- 18 dB

> 0,46 × 50 = 23 dB.

**S22-FB06.** Hva kjennetegner proprietære (leverandørspesifikke) metoder for forsterkningsberegning?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 5*

- De er åpne og dokumenterte, og bygger på forskning
- **✔ De er lukkede og hemmeligholdte, og ikke forskningsbaserte**
- De er utviklet av National Acoustic Laboratories
- De bygger alltid på individuelt målt lydstyrke

> Proprietære metoder er leverandørens egne, lukkede metoder. Generiske metoder som NAL og DSL er åpne, dokumenterte og forskningsbaserte.

**S22-FB07.** Hva er målet med NAL-NL1?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 24*

- Å gjenopprette normal lydstyrke på hver frekvens
- Å gi et hørbart og komfortabelt signal i hver frekvensregion, særlig for barn
- **✔ Å maksimere taleforståeligheten uten at talen blir sterkere enn for en normalthørende**
- Å speile audiogrammet slik at 1 dB mer tap gir 1 dB mer forsterkning

> NAL-NL1 optimaliserer taleforståelsen i hvert 1/3-oktavbånd og prøver ikke å gjenopprette normal lydstyrke. Et hørbart og komfortabelt signal i hver frekvensregion er målet til DSL.

**S22-FB08.** Hvilket av utsagnene om NAL-NL2 er IKKE riktig?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 25*

- Den gir litt mer forsterkning til menn enn til kvinner
- Den gir mer forsterkning til vante brukere
- Den gir barn 5 dB mer forsterkning enn voksne på midtnivå
- **✔ Den gir mer forsterkning ved binaural tilpasning enn ved monaural**

> NAL-NL2 gir MINDRE forsterkning ved binaural tilpasning. De tre andre utsagnene stemmer.

**S22-FB09.** Hvilken tilpasningsregel har tradisjonelt vært brukt for barn, og baserer seg på REAG?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 14*

- NAL-RP
- **✔ DSL**
- POGO II
- Half-gain

> DSL (Desired Sensation Level) fra Canada skal gi et hørbart og komfortabelt signal i hver frekvensregion. Den baserer seg på REAG og har tradisjonelt vært brukt for barn.

**S22-FB10.** Hva er en fordel med peak clipping sammenlignet med kompresjonsbegrensning?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 38*

- Mindre forvrengning
- **✔ Opptil 9 dB høyere MPO for talesignaler**
- Passer best for de fleste brukere
- Brukes i de fleste høreapparat i dag

> Peak clipping kan gi opptil 9 dB høyere MPO for tale, men gir mer forvrengning. Kompresjon gir mindre forvrengning, passer best for de fleste og brukes i de aller fleste apparat i dag.

**S22-FB11.** Hvor mye forsterkning foretrekker den gjennomsnittlige høreapparatbrukeren, sammenlignet med NAL-RP og NAL-NL1?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 43*

- Omtrent det samme
- 3–4 dB mer
- **✔ 3–4 dB mindre**
- 10–15 dB mindre

> Brukerne foretrekker i snitt 3–4 dB mindre forsterkning enn det NAL-RP og NAL-NL1 foreskriver. Derfor kan et tilvenningstrinn litt under målforsterkningen være lurt.

**S22-FB12.** Ved 4 kHz er en cochleær død region mer sannsynlig enn ikke når høreterskelen er over …  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 44*

- 40 dB HL
- 55 dB HL
- **✔ 70 dB HL**
- 100 dB HL

> Forelesningen oppgir at en død region ved 4 kHz er mer sannsynlig enn ikke når terskelen overstiger 70 dB HL. Det bør undersøkes med TEN-test før man forsterker mye der.

**S22-FB13.** Etter NAL-rasjonalet (NAL-SSPL): Hva er det minste OSPL90 et høreapparat bør ha?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 40*

- Pasientens ubehagsterskel (ULL)
- **✔ Nivået som gir bare minimal begrensning når langtidsnivået for tale er 75 dB SPL**
- Alltid 90 dB SPL, uavhengig av hørselstapet
- Nivået der normal samtaletale (65 dB SPL) akkurat blir hørbar

> Hevet stemme bør ikke få apparatet til å begrense. Minimum OSPL90 er nivået som gir bare minimal begrensning ved tale på 75 dB SPL. Maksimum er ULL.

**S22-FB14.** Hvilken pasient har MINST sannsynlighet for å ha nytte av flere lytteprogram?  
*Generert fra forelesning: Forsterkningsberegning (07.09), foil 36*

- En som bruker høreapparatet i mange ulike lyttemiljøer
- En som er fornøyd med apparatet i noen situasjoner, men ikke i andre
- En med hørselstap over 55 dB HL ved 2–4 kHz
- **✔ En med target nær 0 dB ved 500 Hz og volumkontroll på apparatet**

> Ved target nær 0 ved 500 Hz og volumkontroll klarer pasienten seg ofte bedre uten flere program. De tre andre er typiske kandidater for flere program.

### Flashcards

| Forside | Bakside |
|---|---|
| Hva er forsterkningsberegning (prescribing)? | Man måler noen karakteristikker hos pasienten, typisk høreterskler, og beregner nødvendig forsterkning med en matematisk formel (algoritme). <br>*Resultatet kalles beregningsmål, målforsterkning eller target.* |
| Hva er forskjellen på generiske og proprietære metoder for forsterkningsberegning? | Generiske metoder (f.eks. NAL og DSL) er åpne, dokumenterte og forskningsbaserte. Proprietære metoder er leverandørspesifikke, lukkede og ikke forskningsbaserte. <br>*Forelesningen anbefaler å bruke klinisk evaluerte tilpasningsformler.* |
| Hva er speiling av audiogrammet, MCL-metoden og half-gain-regelen? | Speiling (Knudsen og Jones, 1935): forsterkning = terskel minus en konstant, 1 dB mer tap gir 1 dB mer forsterkning. MCL (Watson og Knudsen, 1940): nok forsterkning til at tale blir hørbar og komfortabel. Half-gain (Lybarger, 1944): forsterkning ≈ halvparten av terskelen. <br>*Speiling fungerte bare på terskelnivå. MCL tok ikke hensyn til at taleenergien varierer med frekvens. Eksempel half-gain: 50 dB HL gir 25 dB forsterkning.* |
| Hva er POGO-formelen? | IG = 0,5 × H + k, der k er −10 dB ved 250 Hz, −5 dB ved 500 Hz og 0 dB ved 1–4 kHz. POGO II legger til 0,5 × (H − 65) når H er over 65 dB HL. <br>*POGO (1983) er en videreføring av half-gain-regelen. Tillegget i POGO II gir mer forsterkning ved store tap, der lyden ellers får lavt sensasjonsnivå.* |
| Hva kjennetegner lineære høreapparat? | De har samme forsterkningskurve for alle inputnivåer, helt til output blir så høyt at det begrenses (metning eller peak clipping). <br>*Vanlige lineære metoder var POGO, NAL og DSL.* |
| Hva var målet og teorien bak den første NAL-metoden (1976)? | Målet var å maksimere taleforståeligheten på lyttenivået brukeren foretrekker. Teorien var at taleforståeligheten blir best når alle båndene i talen oppfattes like sterke. <br>*Foretrukket innskuddsforsterkning ved 1 kHz er 0,46 × terskelen der. Forsterkningen ved de ulike frekvensene følger formen på langtidsspekteret for tale. Etterfulgt av NAL-R og NAL-RP.* |
| Hva er DSL, og hva er målet med metoden? | Desired Sensation Level fra The National Centre for Audiology i Canada. Målet er et hørbart og komfortabelt signal i hver frekvensregion. <br>*DSL baserer seg på REAG og har tradisjonelt vært brukt på barn.* |
| Terskelbasert eller lydstyrkebasert forsterkningsberegning: hva taler for hver? | Terskelbasert: raskt og kan brukes på alle pasienter. Lydstyrkebasert (f.eks. MCL eller lydstyrkeskalering): personer med samme audiogram kan oppleve lydstyrke ulikt. <br>*Lydstyrkebaserte metoder er bl.a. LGOB, IHAFF/Contour og ScalAdapt. FIG6 normaliserer lydstyrken ut fra gjennomsnittsdata, ikke målinger på hver person.* |
| Hva er målet med NAL-NL1? | Å maksimere taleforståeligheten uten at talen blir sterkere enn det en normalthørende ville oppfattet. Den prøver ikke å gjenopprette normal lydstyrke på hver frekvens. <br>*NAL-NL1 (Dillon, 1999) er talespektrumsbasert og optimaliserer taleforståelsen i hvert 1/3-oktavbånd fra 125 til 8000 Hz.* |
| Hvordan skiller NAL-NL2 seg fra NAL-NL1? | Litt mer forsterkning til menn enn kvinner, mer til vante brukere, mindre ved binaural tilpasning, og justert forsterkning på lave og høye inputnivåer for å unngå høy kompresjonsratio. Barn får 5 dB mer enn voksne på midtnivå. <br>*For barn er forskjellen større på lave nivåer og mindre på høye.* |
| Hvordan virker DSL v5.0 (DSLm i/o) på ulike inputnivåer? | Begrensning på høye nivåer, WDRC på midtnivå, lineær forsterkning under kompresjonsterskelen og eventuelt ekspansjon for svært lave nivåer. <br>*DSL v5.0 gir mindre forsterkning for lave nivåer (støy), til voksne og ved binaural tilpasning.* |
| Hva er nytt med NAL-NL3? | Den er mer persontilpasset, modulær og KI-drevet, trent på millioner av reelle tilpasninger og tilbakemeldinger. Den reduserer forsterkningen der støy dominerer, gir mindre overforsterkning i diskanten ved bratte tap og er bedre tilpasset musikk. <br>*NAL-NL2 bygger på gjennomsnittsdata. NL3 er på vei inn i tilpasningsprogramvarene.* |
| Hvordan beregner NAL-NL2 forsterkning ved mekanisk eller kombinert hørselstap? | Forsterkning ut fra den sensorinevrale delen (beinledningstersklene), pluss et tillegg på 75 % av luft-bein-gapet på hver frekvens. Kompresjonen blir også mindre. <br>*Eksempel: et luft-bein-gap på 20 dB gir 15 dB ekstra forsterkning. Andre formler bruker et tilsvarende prinsipp.* |
| Hva er OSPL90 (MPO), og hva skjer om den er for høy eller for lav? | Høreapparatets maksimale utgangsnivå (metningsnivå). For høy: ubehag, fare for skade, og mange slutter å bruke apparatet. For lav: dårligere taleforståelighet og lydkvalitet, og man får ikke utnyttet hele bredden av lyder. <br>*NAL-rasjonalet: OSPL90 trenger ikke være så høyt som ubehagsterskelen (ULL), og hevet stemme bør ikke gjøre at apparatet begrenser. Minimum er nivået som gir minimal begrensning når tale er 75 dB SPL; maksimum er ULL. De fleste beregninger bygger på gjennomsnittsdata, ikke pasientens egen ULL.* |
| Kompresjonsbegrensning eller peak clipping: fordeler og ulemper? | Kompresjon gir mindre forvrengning og passer best for de fleste. Peak clipping gir opptil 9 dB høyere MPO for tale, men mer forvrengning. <br>*Forvrengningen trenger ikke være hørbar ved alvorlige tap (nedsatt frekvensoppløsning). Få høreapparat bruker peak clipping i dag.* |
| Hva er adapsjon (tilvenning) ved forsterkning, og hvor mye foretrekker brukerne i snitt? | Ønsket forsterkning kan øke over tid fordi man har vent seg til svake signaler fra cochlea. Jo større tap, desto større adapsjon. Brukerne foretrekker i snitt 3–4 dB mindre forsterkning enn NAL-RP og NAL-NL1 foreskriver. <br>*Økningen kan gjøres manuelt (tilvenningstrinn) eller automatisk av høreapparatet. Det er ofte lurt å starte litt under målforsterkningen.* |
| Hvorfor kan mye forsterkning i diskanten være uheldig ved store hørselstap? | Jo større tapet er, desto mindre informasjon får man ut av hørbar tale. Overdreven forsterkning i diskanten kan senke taleforståeligheten eller gi mer lydstyrke og dårligere lydkvalitet. <br>*Ved 4 kHz er en død region mer sannsynlig enn ikke når terskelen er over 70 dB HL. Vurder derfor hvilke frekvenser det er verdt å forsterke fullt ut, og bruk TEN-test.* |
| Når brukes REIG-mål og når REAG- eller REAR-mål? | Tradisjonelt REAG-mål for barn og for personer med deformerte eller opererte øreganger (for å se bort fra uvanlig resonans), og REIG-mål for alle andre. I dag bruker mange, særlig i USA, mest REAR-mål. <br>*REAR-målet gir også oversikt over dynamikkområdet.* |
| Hvem har mest nytte av flere lytteprogram i høreapparatet? | De som bruker apparatet i ulike lyttemiljøer og er fornøyd i noen av dem, og de med tap over 55 dB HL (2–4 kHz). Er targetet nær 0 ved 500 Hz og apparatet har volumkontroll, klarer man seg ofte bedre uten. <br>*Eksempler på egne program: støy, fluktuerende hørselstap og musikk (høye toppnivåer og stor båndbredde).* |
| Er målforsterkningen sluttresultatet av en tilpasning? | Nei. Målforsterkningen er startnivået. Ofte trengs finjustering, og det kan være lurt å starte litt lavere (tilvenningstrinn). <br>*Sjekk at du faktisk er på målforsterkningen (verifiser) og om målet er validert.* |

---

## Kvalitetssikring og REM (14.09)

20 flashcards · 14 flervalg · 4 forklar-kort · 2 scenarier

### Forklar-kort og scenarier

#### Forklar (M22-RE01): Forklar forskjellen på verifisering og validering av en høreapparattilpasning, og hvordan du gjør hver av dem.

*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 2–11*

**Sjekkliste – en god forklaring tar med:**

- [ ] Begge er kvalitetssikring, og det mest håndfaste vi har av beste praksis
- [ ] Verifisering er objektivt: fungerer apparatet som tiltenkt, og gir det riktig forsterkning?
- [ ] Verifisering gjøres med REM (helst ISTS på flere nivåer) eller funksjonell forsterkning; koplermåling sjekker apparatet mot databladet
- [ ] Validering er subjektivt: opplevd nytte, tilfredshet og handikapreduksjon
- [ ] Validering gjøres med taleaudiometri i fritt felt med og uten apparat (HINT, HiST m.fl.) eller validerte spørreskjema (COSI, APHAB, GHABP, SSQ12)
- [ ] Spørreskjema brukes etter flere ukers bruk
- [ ] NS-EN ISO 21388:2021 krever både verifisering og validering
- [ ] Kunnskapsbasert praksis: forskning, erfaring og pasientens ønsker

**Oppfølgingsspørsmål:**

- *Hvis REM viser at du treffer target, er tilpasningen da god nok?*  
  → Ikke nødvendigvis. REM sier ikke om pasienten forstår tale bedre eller bruker apparatet. Det må valideres med taletest eller spørreskjema.
- *Hvorfor skal spørreskjemaet fylles ut etter flere uker?*  
  → Pasienten trenger erfaring med apparatet i hverdagen for å kunne vurdere den opplevde nytten.
- *Hva er de tre elementene i kvalitet i audiologi?*  
  → Effektivitet, effekt og resultatmåling (Taylor, 2013).

#### Forklar (M22-RE02): Forklar REUR, REOR, REAR og REIG, og hvordan de henger sammen.

*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 20–30*

**Sjekkliste – en god forklaring tar med:**

- [ ] R er absolutt lydtrykk ved trommehinnen (dB SPL); G er forskjellen der inputnivået er trukket fra
- [ ] REUR/REUG: uten apparat, øregangsresonansen med topp rundt 2–4 kHz (ofte rundt 3 kHz, 10–20 dB)
- [ ] REUR brukes til å kontrollere slangeplasseringen og som referanse for REIG
- [ ] REOR/REOG: apparat eller propp i øret, men avslått; viser ventilasjon og okklusjon
- [ ] REAR/REAG: med påslått apparat; lydtrykket ved trommehinnen
- [ ] REIG = REAR − REUR: den faktiske innskuddsforsterkningen
- [ ] REAR brukes mest i dag, fordi den viser om signalet er innenfor dynamikkområdet

**Oppfølgingsspørsmål:**

- *Hva betyr en negativ REIG?*  
  → At lydtrykket ved trommehinnen er lavere med apparatet enn uten. Apparatet og proppen tar bort mer av den naturlige øregangsresonansen enn de gir tilbake. (Foilene stiller bare spørsmålet om forsterkningen er positiv eller negativ. Forklaringen er min.)
- *Regn ut: REAR = 85 dB SPL og REUR = 70 dB SPL. Hva er REIG?*  
  → 85 − 70 = 15 dB.
- *Hva kan REOR fortelle deg om en åpen dome?*  
  → Om den faktisk er åpen. Ligger REOR nær REUR, er domen åpen. Faller resonansen bort, okkluderer den mer enn ønsket.

#### Forklar (M22-RE03): Forklar hvorfor du bør gjøre REM, og hvorfor de simulerte kurvene i tilpasningsprogrammet ikke er nok.

*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 15–19 og 42–49*

**Sjekkliste – en god forklaring tar med:**

- [ ] Simulerte kurver regnes om fra 2 cm³-koplerverdier med CORFIG, og bygger på gjennomsnittsdata
- [ ] De tar ikke hensyn til den enkeltes øregang, øremusling og mellomøre, og bygger på modellens standardverdier
- [ ] Toleranser i komponentene kan alene gi ±5 dB avvik
- [ ] REM er eneste måte å se hva apparatet faktisk gir den enkelte pasienten
- [ ] REM gir objektiv kunnskap om hvorfor pasienten er fornøyd eller misfornøyd
- [ ] Rosvoldaunet (2012): varierende samsvar mellom simulert og målt REIG, og avhengig av kjønn
- [ ] Svar på motargumentene: tid (færre etterkontroller), stoler på programvaren (first fit underforsterker ofte)
- [ ] Men REM sier ikke noe om taleoppfattelse og bruk; det må valideres

**Oppfølgingsspørsmål:**

- *Hvorfor kan samsvaret mellom simulert og målt forsterkning avhenge av kjønn?*  
  → Forelesningen peker på forskjeller i øregangsvolum og mellomøreimpedans mellom kvinner og menn.
- *Hva svarer du en kollega som sier REM tar for lang tid?*  
  → Det går fort etter litt trening, og det fører sannsynligvis til færre etterkontroller (Kochkin, 2011). Målet er en kvalitetsmessig god hørselsrehabilitering.

#### Forklar (M22-RE04): Forklar hvilke feilkilder som finnes ved REM, og hvordan du unngår dem.

*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 32–41*

**Sjekkliste – en god forklaring tar med:**

- [ ] Otoskopi først: voks kan blokkere sondeslangen, og du ser anatomien
- [ ] Kalibrer sondeslangen hver gang du bytter slange
- [ ] Sondeslangen nær trommehinnen (gj.snitt 28 mm kvinner, 31 mm menn; i praksis litt mindre), ellers stående bølger og dårlig diskant
- [ ] Kontroller plasseringen med REUG: 6 kHz skal ikke være under −5 dB
- [ ] Slangen kan flytte seg eller bli klemt når proppen settes inn
- [ ] Høyttaler 0,5–1 m unna, minst 1 m fra reflekterende flater, 0° eller 45°
- [ ] Pasienten skal sitte i ro, særlig med MPSE (åpen kalibrering)
- [ ] Riktig målesignal: det samme som simuleringen når du sammenligner med programvaren
- [ ] Test-retest: inntil 2 dB umiddelbart, 3–5 dB samme dag, 6–7 dB mellom besøk

**Oppfølgingsspørsmål:**

- *Hvorfor gir 45° mindre variasjon enn 0°?*  
  → Forelesningen sier at små bevegelser hos pasienten gir variasjon ved 0°, og mindre ved 45°. Ulempen er at pasienten må flyttes ved binaural måling.
- *Når må du bruke MPSE i stedet for MPCE?*  
  → Ved åpne tilpasninger, fordi forsterket lyd lekker ut til referansemikrofonen og forstyrrer den løpende justeringen i MPCE.
- *Du måler på nytt etter å ha tatt av apparatet og ser 4 dB forskjell. Er det et problem?*  
  → Nei, kortsiktig test-retest kan gi 3–5 dB forskjell.

#### Scenario (M22-RE05): Du skal verifisere en åpen RITE-tilpasning med dome, programmert etter NAL-NL2, på en voksen kvinne. Beskriv hvordan du gjennomfører REM steg for steg.

*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 32–41, Brukermanual REM og REM-ferdighetsøkt 2026*

**Fremgangsmåte (fasit):**

1. Forbered: romkalibrering ved behov, og kalibrer sondeslangen
2. Otoskoper: trommehinnen skal være intakt og øregangen fri for voks; se på anatomien
3. Plasser pasienten ca. 0,5–1 m foran høyttaleren (0°), og be henne se på høyttaleren og sitte i ro
4. Sett inn sondeslangen ca. 27–28 mm (kvinne), nær trommehinnen
5. Mål REUR/REUG (f.eks. rosa støy 65 dB) og kontroller resonanstopp rundt 2–4 kHz og at 6 kHz ikke er under −5 dB
6. Sett inn apparatet uten å flytte slangen, og mål REOR/REOG for å se om domen er åpen
7. Velg åpen REM-kalibrering (MPSE), fordi tilpasningen er åpen
8. Fyll ut Fitting Details riktig (NAL-NL2, HA-type, ventilering, mono/binaural, alder, erfaring), og sjekk at riktig audiogram er brukt
9. Slå på apparatet i hovedprogrammet og mål REAR med ISTS ved 50, 65 og 80 dB SPL
10. Sammenlign med target, og juster forsterkningen i tilpasningsprogrammet til du er nær målet
11. Mål REAR85 (MPO-test) og sammenlign med UCL
12. Dokumenter resultatet, og planlegg validering etter noen uker (taletest, COSI)

**Oppfølgingsspørsmål:**

- *Hvorfor måler du på 50, 65 og 80 dB SPL?*  
  → For å se hørbarhet for svak, middels og sterk tale og hvordan kompresjonen virker, slik ISO 21388 anbefaler.
- *Hva gjør du hvis REUG har en topp ved 3 kHz, men −8 dB ved 6 kHz?*  
  → Sondeslangen ligger for langt ute. Før den lenger inn og mål REUR på nytt før du går videre.
- *Hvorfor skal apparatet stå i hovedprogrammet med samme regel som REM-programmet?*  
  → Ellers sammenligner du målingen med et annet target enn det apparatet er programmert etter.

#### Scenario (M22-RE06): Ved REM ser du at REAR for 65 dB ISTS ligger ca. 10 dB under NAL-NL2-target fra 2 til 4 kHz, mens programvaren viser at du skal være på target. Beskriv hvordan du feilsøker og hva du gjør.

*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 7, 30 og 34–41*

**Fremgangsmåte (fasit):**

1. Kontroller målingen først: sondeslangens dybde (6 kHz-testen i REUG), om slangen er klemt eller har flyttet seg, og om pasienten har sittet i ro
2. Sjekk at riktig audiogram og samme tilpasningsregel er valgt i REM-programmet og i apparatet
3. Sjekk at du har brukt samme type målesignal som programvaren simulerer, så du ikke sammenligner epler og pærer
4. Sjekk Fitting Details (ventilering, HA-type) og om MPSE er brukt ved åpen tilpasning
5. Er målingen riktig, skyldes avviket trolig at den simulerte kurven bygger på gjennomsnitt (CORFIG, ±5 dB, individuell øregang)
6. Øk forsterkningen i diskanten i tilpasningsprogrammet og mål REAR på nytt til du er nær target
7. Vurder sammen med pasienten om et tilvenningstrinn under target er riktig (kunnskapsbasert praksis: forskning, erfaring, pasientens ønsker)
8. Kontroller at signalet ligger over tersklene og under ubehag, og sjekk MPO på nytt

**Oppfølgingsspørsmål:**

- *Hvorfor kan programvaren vise at du er på target når du ikke er det?*  
  → Den simulerte kurven er regnet ut fra 2 cm³-koplerverdier og gjennomsnittsdata, og tar ikke hensyn til denne pasientens øregang, mellomøre eller toleranser i apparatet.
- *Pasienten synes lyden er bra som den er. Skal du likevel øke til target?*  
  → Vei forskningen (validert target gir best taleoppfattelse) mot erfaring (start gjerne svakere i diskanten) og pasientens ønsker. Gå eventuelt via tilvenningstrinn, og valider med taletest.

### Flervalg

**S22-RE01.** Ved 2 kHz måler du REAR = 85 dB SPL og REUR = 70 dB SPL i samme punkt og samme lydfelt. Hva er REIG?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 28*

- 155 dB
- 70 dB
- **✔ 15 dB**
- −15 dB

> REIG = REAR − REUR = 85 − 70 = 15 dB.

**S22-RE02.** Med et inputsignal på 65 dB SPL måler du REAR = 80 dB SPL ved 1 kHz. Hva er REAG ved 1 kHz?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 20*

- **✔ 15 dB**
- 80 dB
- 145 dB
- 65 dB

> G (gain) er en forskjellsmåling der inputnivået trekkes fra responsen: 80 − 65 = 15 dB.

**S22-RE03.** REUG-målingen viser −9 dB ved 6 kHz. Hva er mest sannsynlig, og hva gjør du?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 41, og Brukermanual REM*

- Pasienten har en død region ved 6 kHz; gå videre til TEN-test
- **✔ Sondeslangen ligger for langt ute; før den lenger inn og mål på nytt**
- Øregangsresonansen er normal; gå videre til REAR
- Høyttaleren står for nær; flytt den til 2 m

> Nivået ved 6 kHz i REUG skal ikke være under −5 dB. Er det lavere, ligger slangen for langt ute og må føres lenger inn.

**S22-RE04.** Hvilken av disse er en VALIDERING av en høreapparattilpasning?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 8–10*

- REAR-måling med ISTS
- Koplermåling i testboks
- **✔ COSI-skjema etter noen ukers bruk**
- REUG-måling

> Validering er et subjektivt mål på opplevd nytte (taletest i fritt felt, spørreskjema eller intervju). REM og koplermåling er verifisering.

**S22-RE05.** Du skal gjøre REM på en åpen RITE-tilpasning med dome. Hvilken metode bør du bruke?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 33*

- MPCE, fordi pasienten da kan bevege seg fritt
- **✔ MPSE (åpen REM-kalibrering), og be pasienten sitte helt i ro**
- Koplermåling i stedet for REM
- REIG uten REUR

> Ved åpne tilpasninger lekker forsterket lyd ut til referansemikrofonen, og da blir MPCE feil. Med MPSE lagres kalibreringen og referansemikrofonen slås av, så pasienten må ikke flytte seg.

**S22-RE06.** Du tar av høreapparatet og sondeslangen, setter dem på igjen og måler på nytt ved samme besøk. Hvor stor test-retest-forskjell kan du forvente?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 38*

- Inntil 2 dB
- **✔ Inntil 3–5 dB**
- Inntil 6–7 dB
- Over 10 dB

> Kortsiktig gjentakelse gir inntil 3–5 dB. Umiddelbar gjentakelse uten å røre utstyret gir inntil 2 dB, og ved ulike besøk inntil 6–7 dB.

**S22-RE07.** Hvorfor har REAR i stor grad tatt over for REIG ved verifisering?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 30*

- REAR krever ikke sondeslange
- **✔ REAR viser om signalet ligger innenfor pasientens dynamikkområde (over terskel, under ubehag)**
- REAR påvirkes ikke av øregangsresonansen
- REAR er det eneste ISO 21388 godtar

> REAR viser i mye større grad om hørbarhet er oppnådd: om signalet ligger over tersklene og under ubehagsnivået, og hvordan topper og bunner i responsen ser ut.

**S22-RE08.** Hvor dypt bør sondeslangen i gjennomsnitt plasseres i øregangen hos en voksen mann, ifølge forelesningen?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 32*

- 18 mm
- 24 mm
- **✔ 31 mm**
- 40 mm

> Gjennomsnittsmålet er 28 mm for kvinner og 31 mm for menn. I praksis kan det være lurt å legge seg litt under (27 og 30 mm).

**S22-RE09.** Simulerte forsterkningskurver bygger på modellens standardiserte 2 cm³-verdier. Hvor store avvik kan toleranser i mikrofon og lydgiver alene gi?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 17*

- ±1 dB
- **✔ ±5 dB**
- ±15 dB
- Ingen, fordi CORFIG korrigerer for dette

> Toleranseforskjeller på komponenter kan gi avvik opp mot ±5 dB. I tillegg kommer individuelle forskjeller i øregang, øremusling og mellomøre.

**S22-RE10.** Hva krever NS-EN ISO 21388:2021 for verifisering av en høreapparattilpasning?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 11*

- At pasienten fyller ut COSI
- **✔ Minst én av: REM etter IEC 61669 eller funksjonell forsterkning etter ISO 8253-2**
- Bare koplermåling i testboks
- Taleaudiometri i fritt felt med og uten høreapparat

> Verifisering skal gjøres med REM (helst med ISTS på flere nivåer) eller funksjonell forsterkning. COSI og taleaudiometri i fritt felt hører til validering.

**S22-RE11.** Hva kan REM IKKE si noe om?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 42*

- Hvor mye forsterkning apparatet faktisk gir i øregangen
- Om målforsterkningen er nådd
- **✔ Om pasienten forstår tale bedre og faktisk bruker apparatet**
- Om signalet ligger over pasientens terskler

> REM viser hva apparatet gir akustisk i det enkelte øret. Om pasienten forstår bedre og bruker apparatet, må måles med validering.

**S22-RE12.** Hva viser REOR (Real Ear Occluded Response) først og fremst?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 25*

- Forsterkningen fra høreapparatet med påslått lyd
- **✔ Effekten av ventileringen og okklusjonen fra proppen eller domen**
- Øregangsresonansen uten noe i øret
- Høreapparatets maksimale utgangsnivå

> REOR måles med apparatet eller proppen i øret, men avslått. Den viser om ventileringen virker som ønsket, og om åpne domer faktisk er åpne.

**S22-RE13.** Programvaren viser en simulert kurve laget med et rentonesignal. Du vil verifisere at REAR stemmer med denne kurven. Hvilket målesignal bør du bruke?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 35*

- **✔ Samme type signal som programvaren har brukt i simuleringen**
- Alltid ISTS, uansett hva programvaren viser
- Live-stemme fra en pårørende
- Rosa støy på 90 dB SPL

> Ved verifisering mot en simulert kurve må du måle med samme type signal som kurven bygger på, ellers sammenligner du epler og pærer. ISTS passer når du vil se hvordan apparatet fungerer med tale.

**S22-RE14.** Hvordan bør høyttaleren plasseres ved REM?  
*Generert fra forelesning: Kvalitetssikring og REM (14.09), foil 40*

- **✔ 0,5–1 m fra pasienten, minst 1 m fra reflekterende flater, helst 0° (eller 45°)**
- Rett ved siden av øret som måles, 90°
- 2–3 m fra pasienten for å unngå nærfelt
- Bak pasienten, 180°

> Høyttaleren skal stå 0,5–1 m unna og minst 1 m fra reflekterende flater, på 0° eller 45° (0° er vanligst klinisk).

### Flashcards

| Forside | Bakside |
|---|---|
| Hva er forskjellen på verifisering og validering av en høreapparattilpasning? | Verifisering er et objektivt mål på om høreapparatet fungerer som tiltenkt og gir riktig forsterkning (REM eller koplermåling). Validering er et subjektivt mål på opplevd nytte, tilfredshet og handikapreduksjon (taletest, spørreskjema, intervju). <br>*Verifisering og validering er det mest håndfaste av beste praksis for å kvalitetssikre en tilpasning.* |
| Hva krever NS-EN ISO 21388:2021 for validering, og hvilke metoder finnes? | Minst én av to: taleaudiometri i fritt felt med og uten høreapparat (eventuelt i støy), eller et validert spørreskjema om opplevd nytte etter flere ukers bruk. Resultatet gjennomgås med pasienten. <br>*Taletester: HINT, HiST, HiST Surround, Iowa/Eikholt. Spørreskjema: COSI, APHAB, GHABP, SSQ12.* |
| Hva krever NS-EN ISO 21388:2021 for verifisering? | Minst én av to: REM etter IEC 61669, helst med ISTS eller annet talelignende signal på flere nivåer (svak, middels og sterk tale), eller funksjonell forsterkning etter ISO 8253-2. <br>*Flere nivåer gjør at man kan vurdere både hørbarhet og kompresjon.* |
| Hva er forskjellen på koplermåling, RECD og REM? | Koplermåling gjøres i en testboks (HIT) og sjekker om apparatet oppfyller databladet. RECD brukes til å simulere REM i testboksen, f.eks. for små barn. REM måles i pasientens egen øregang. <br>*Bare REM viser hva apparatet faktisk gir i den enkeltes øre.* |
| Hva betyr R og G i REM-forkortelsene (f.eks. REAR og REAG)? | R (respons) er det absolutte lydtrykket ved trommehinnen i dB SPL. G (gain) er en forskjellsmåling der inputnivået er trukket fra. <br>*Eksempel: REAR 80 dB SPL med input 65 dB SPL gir REAG 15 dB.* |
| Hva er REUR/REUG, og hva brukes målingen til? | Lydtrykket (REUR) eller forsterkningen (REUG) i øregangen uten høreapparat, altså øregangsresonansen. Den brukes til å kontrollere at sondeslangen ligger riktig, og som referanse for REIG. <br>*Typisk topp mellom 2 og 4 kHz, oftest rundt 3 kHz, på ca. 10–20 dB. Den forklarer også hvorfor en REAR-måling blir som den blir.* |
| Hva viser REOR/REOG? | Responsen i øregangen med høreapparatet eller proppen på plass, men avslått. Den viser effekten av ventileringen: om endringer i ventilasjonen virker, og om åpne domer faktisk er åpne. <br>*Sammenlign med REUR for å se hvor mye proppen okkluderer.* |
| Hva er REAR, og hvordan regner du ut REIG? | REAR er lydtrykket ved trommehinnen med påslått høreapparat. REIG = REAR − REUR (eller REAG − REUG), målt i samme punkt og samme lydfelt. <br>*REIG viser hvor mye forsterkning apparatet egentlig gir sammenlignet med uten, og om den er positiv eller negativ.* |
| Hvorfor har REAR-målinger i stor grad tatt over for REIG? | REAR viser mye bedre om hørbarhet er oppnådd: om signalet ligger over pasientens terskler og under ubehagsnivået, altså innenfor dynamikkområdet. Den viser også topper og bunner i responsen. <br>*Måling med talesignal kalles ofte speech mapping. Egentlig er speech mapping en egen måling, f.eks. med audiografens eller pårørendes stemme.* |
| Hvor dypt skal sondeslangen inn i øregangen? | I gjennomsnitt 28 mm for kvinner og 31 mm for menn, og i praksis gjerne litt mindre (27 og 30 mm). Alternativt minst 5 mm forbi proppens lydutgang og innenfor 5 mm fra trommehinnen. <br>*Nær trommehinnen unngår man stående bølger og får god diskantgjengivelse. Merk: REM-manualen fra ferdighetstreningen oppgir 26–28 mm for kvinner og 28–31 mm for menn, målt fra intertragal notch.* |
| Hvordan bruker du 6 kHz i REUG til å sjekke sondeslangen? | Nivået ved 6 kHz skal ikke falle under −5 dB. Gjør det det, ligger slangen for langt ute og må føres lenger inn. <br>*Dette kalles en akustisk test av slangeplasseringen.* |
| Hva er forskjellen på MPCE og MPSE, og når bruker du MPSE? | MPCE (concurrent): referansemikrofonen justerer signalet løpende under målingen. MPSE (stored): kalibreringen lagres og referansemikrofonen slås av. MPSE (åpen REM-kalibrering) brukes ved åpne tilpasninger. <br>*Ved åpne tilpasninger lekker forsterket lyd ut til referansemikrofonen. Med MPSE må pasienten sitte helt i ro, ellers blir det store målefeil.* |
| Hvilket målesignal bør du bruke ved REM? | Ved verifisering mot en simulert kurve: samme type signal som programvaren bruker, så du ikke sammenligner epler og pærer. For å se hvordan apparatet virker med tale: et talelignende signal som ISTS eller modulert ILTASS-vektet støy, med funksjonene påslått. <br>*Det er f.eks. lite lurt å måle med talestøy hvis den simulerte kurven i programvaren viser et rentonesignal.* |
| Hvor store test-retest-forskjeller kan du forvente ved REM? | Umiddelbar gjentakelse: inntil 2 dB. Kortsiktig (apparat og slange tatt av og satt på igjen samme dag): 3–5 dB. Langsiktig (ved ulike besøk): 6–7 dB, avhengig av frekvens. <br>*Tall fra Tecca (1991, 1995).* |
| Hva gjør du før du starter en REM-måling? | Otoskopi (voks kan blokkere slangen, og du ser øregangens anatomi), kalibrering av sondeslangen (hver gang slangen byttes) og plassering av høyttaleren: 0,5–1 m unna, minst 1 m fra reflekterende flater, 0° eller 45° (0° er vanligst). <br>*Slangekalibreringen gjør slange og mikrofon «akustisk usynlige».* |
| Hvilke feilkilder finnes ved REM? | Pasienten flytter seg (mindre kritisk med MPCE). Sondeslangen ligger for langt ute, flytter seg når proppen settes inn, eller blir klemt. Høyttalerplasseringen: ved 0° gir små bevegelser variasjon; ved 45° blir det mindre variasjon, men pasienten må flyttes ved binaural måling. <br>*Jo nærmere trommehinnen slangen ligger, desto bedre.* |
| Hvordan lages de simulerte forsterkningskurvene i tilpasningsprogrammet, og hvorfor kan de være feil? | Produsenten regner om modellens forsterkning i en 2 cm³-kopler til simulert forsterkning med CORFIG (koplergain − insertion gain). De bygger på gjennomsnittsdata og standardverdier for modellen, ikke på pasientens øre eller det enkelte apparatet. <br>*Toleranser i mikrofon og lydgiver kan alene gi avvik på ±5 dB. Det finnes ingen universelt akseptert CORFIG.* |
| Hva kan REM vise, og hva kan den ikke vise? | REM viser hva høreapparatet faktisk gir den enkelte pasienten akustisk, og om du har nådd målforsterkningen. Den viser ikke om pasienten forstår tale bedre eller bruker apparatet. Det må valideres. <br>*Rosvoldaunet (2012) fant varierende samsvar mellom simulert og målt REIG på åpne RITE-apparater, og samsvaret avhang av kjønn (øregangsvolum og mellomøreimpedans).* |
| Hva er de tre elementene i kvalitet i audiologi, og hva er kunnskapsbasert praksis? | Effektivitet, effekt og resultatmåling (Taylor, 2013). Kunnskapsbasert praksis er faglige avgjørelser basert på forskningsbasert kunnskap, erfaringsbasert kunnskap og pasientens ønsker og behov. <br>*Eksempel ved tilpasning: forskning sier at validerte målregler gir best taleoppfattelse, erfaring at man ofte starter svakere i diskanten, og pasienten kan ha egne lydpreferanser.* |
| Hvilke målinger inngår i en full REM-sekvens, og med hvilke nivåer? | REUR/REUG, REOR/REOG, og REAR ved 50, 65 og 80 dB SPL med ISTS, til slutt REAR85 (MPO-test). Resultatene sammenlignes med målforsterkningen (f.eks. NAL-NL2), og MPO med ubehagsterskelen (UCL). <br>*Fyll ut Fitting Details riktig (målregel, HA-type, ventilering, mono eller binaural, alder). Har pasienten luft-bein-gap, må det hakes av for beinledning.* |

