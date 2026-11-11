use utf8; use open qw(:std :encoding(UTF-8));
# Steg 4 i duplikat-rapporten: legger til kilder (ogsa), sletter sammenslåtte EA-spørsmål og
# flashcards, og gir det gamle «Høst 2024»-settet navnet «Øvingssett».
# Er allerede kjørt (11.11.2026). Ligger her som dokumentasjon på hva som ble slått sammen.
my $H24 = 'Høst 2024'; my $OV = 'Øvingssett'; my $H25 = 'Høst 2025';
my %ogsa = (
  'H25-073'=>[[$H24,1]], 'H25-016'=>[[$H24,2]], 'H25-070'=>[[$H24,4]], 'H25-090'=>[[$H24,5]],
  'H25-040'=>[[$H24,6]], 'H25-046'=>[[$H24,7]], 'H25-002'=>[[$H24,8]], 'H25-024'=>[[$H24,12]],
  'H25-053'=>[[$H24,13],[$OV,83]], 'H25-065'=>[[$H24,17]], 'H25-085'=>[[$H24,22]],
  'H25-060'=>[[$H24,23],[$OV,116]], 'H25-093'=>[[$H24,25]], 'H25-037'=>[[$H24,27]], 'H25-099'=>[[$H24,28]],
  'H25-048'=>[[$H24,29],[$OV,79]], 'H25-008'=>[[$H24,31]], 'H25-075'=>[[$H24,35]], 'H25-021'=>[[$H24,37]],
  'H25-056'=>[[$H24,38],[$OV,69]], 'H25-095'=>[[$H24,41],[$OV,111]], 'H25-034'=>[[$H24,49],[$OV,23]],
  'H25-052'=>[[$H24,51],[$OV,15]], 'H25-098'=>[[$H24,54]], 'H25-045'=>[[$H24,56]], 'H25-023'=>[[$H24,63]],
  'H25-079'=>[[$H24,65]], 'H25-011'=>[[$H24,66]], 'H25-009'=>[[$H24,67]], 'H25-069'=>[[$H24,68]],
  'H25-097'=>[[$H24,71],[$OV,119]], 'H25-061'=>[[$H24,74]], 'H25-044'=>[[$H24,75]],
  'H25-084'=>[[$H24,76],[$OV,57]], 'H25-004'=>[[$H24,77],[$OV,107]], 'H25-049'=>[[$H24,78]],
  'H25-094'=>[[$H24,79]], 'H25-078'=>[[$H24,82]], 'H25-019'=>[[$H24,84],[$OV,42]],
  'H25-030'=>[[$H24,85],[$OV,117]], 'H25-036'=>[[$H24,86],[$OV,56]], 'H25-064'=>[[$H24,87]],
  'H25-001'=>[[$H24,88]], 'H25-032'=>[[$H24,89],[$OV,115]], 'H25-057'=>[[$H24,91]],
  'H25-091'=>[[$H24,94],[$OV,45]], 'H25-092'=>[[$H24,95],[$OV,98]], 'H25-047'=>[[$H24,96]],
  'H25-086'=>[[$H24,97],[$OV,14]], 'H25-062'=>[[$H24,100]],
  # B1: øvingsspørsmål slått sammen inn i H25
  'H25-003'=>[[$OV,120]], 'H25-063'=>[[$OV,109]], 'H25-076'=>[[$OV,105]], 'H25-100'=>[[$OV,64]],
  'H25-050'=>[[$OV,86]], 'H25-043'=>[[$OV,28]], 'H25-039'=>[[$OV,40]], 'H25-081'=>[[$OV,39]],
  'H25-033'=>[[$OV,38]], 'H25-096'=>[[$OV,10]], 'H25-029'=>[[$OV,3]], 'H25-077'=>[[$OV,59]],
  'H25-089'=>[[$OV,112]], 'H25-051'=>[[$OV,114]], 'H25-006'=>[[$OV,118]], 'H25-058'=>[[$OV,29]],
  'H25-022'=>[[$OV,65]], 'H25-025'=>[[$OV,12]], 'H25-031'=>[[$OV,113]], 'H25-017'=>[[$OV,82]],
  # A2/A3: øvingsspørsmål slått sammen inn i nye 2024-oppgaver
  'O24-011'=>[[$OV,77]], 'O24-030'=>[[$OV,27]], 'O24-034'=>[[$OV,66]], 'O24-044'=>[[$OV,80]],
  'O24-053'=>[[$OV,61]], 'O24-058'=>[[$OV,5]], 'O24-064'=>[[$OV,106]], 'O24-092'=>[[$OV,4]],
  'O24-009'=>[[$OV,81]], 'O24-069'=>[[$OV,108]], 'O24-070'=>[[$OV,60]],
  # Flashcards slått sammen
  'KE037'=>[[$H25,4]], 'KE003'=>[[$H25,85]], 'KE014'=>[[$H25,18]], 'KE033'=>[[$H25,11]],
);
my @slettEA = map { sprintf 'EA-%03d', $_ } (83,116,79,69,111,23,15,119,57,107,42,117,56,115,45,98,14,
  77,27,66,80,61,5,106,4, 81,108,60,
  120,109,105,64,86,28,40,39,38,10,3,59,112,114,118,29,65,12,113,82);
my @slettK = qw(K001 K029 K085 K061);

sub les { my $f = shift; local $/; open my $h, '<', $f or die "$f: $!"; my $t = <$h>; close $h; $t }
sub skriv { my ($f, $t) = @_; open my $h, '>', $f or die; print $h $t; close $h; }
sub ogsaTekst { my $l = shift; 'ogsa: [' . join(', ', map { "{ eksamen: \"$_->[0]\", nr: $_->[1] }" } @$l) . ']' }

my %brukt;
sub leggTilOgsa {
  my $t = shift;
  for my $id (keys %ogsa) {
    my $o = ogsaTekst($ogsa{$id});
    # Spørsmål: etter sikkerhet-feltet (og ev. kandidatsvar). Kort: etter sikkerhet: "…" på id-linja.
    if ($t =~ s/(id: "$id"[^\n]*?sikkerhet: "[^"]*"),/$1, $o,/) { $brukt{$id}++; next; }
    if ($t =~ s/(id: "$id".*?fasit: "[^"]*", sikkerhet: "[^"]*"(?:, kandidatsvar: \d)?)(\n)/$1, $o$2/s) { $brukt{$id}++; }
  }
  return $t;
}
sub slettElementer {
  my ($t, @ider) = @_;
  for my $id (@ider) {
    # Spørsmål: «  {\n    id: … \n  },?\n». Kort: «  { id: "…" … },?\n» over flere linjer til neste «  {» eller kommentar.
    my $for = length $t;
    $t =~ s/  \{\n    id: "$id".*?\n  \},?\n//s
      or $t =~ s/  \{ id: "$id".*?(?=\n  \{ id: |\n\n|\n  \/\/|\n\);)\n?//s
      or die "Fant ikke $id\n";
    $brukt{"slettet $id"}++;
  }
  $t =~ s/\},(\n+\);)/}$1/;   # ingen komma etter siste element
  $t =~ s/\},(\n\n  \/\/[^\n]*\n\);)/}$1/;
  return $t;
}

# --- Høst 2025 ---
my $f = 'data/oppgaver.js'; my $t = les($f);
$t = leggTilOgsa($t);
$t =~ s/"Bare de indre vestibulære hårcellene – og ikke de ytre – viser elektromotilitet"/"Bare de indre hårcellene – og ikke de ytre – viser elektromotilitet"/ or die "H25-016 a";
$t =~ s/"Spontane otoakustiske emisjoner indikerer vanligvis tonotopiske steder hvor vi finner døde regioner i cochlea"/"Spontane otoakustiske emisjoner indikerer vanligvis døde regioner i cochlea"/ or die "H25-016 b";
$t =~ s/(id: "H25-011".*?forklaring: "(?:[^"\\]|\\.)*?)(")/$1 På eksamen høst 2024 var et av de gale alternativene at Ménière vanligvis begynner i begge ørene samtidig. Det er feil: sykdommen starter oftest på ett øre.$2/s or die "H25-011";
$t =~ s/(id: "H25-055".*?forklaring: "(?:[^"\\]|\\.)*?)(".*?sikkerhet: ")[^"]+/$1 NB: På eksamen høst 2024 (oppg. 33) regnes døde regioner og at targetet viser LTASS, som riktige forklaringer på det samme fenomenet. Fasiten her er derfor usikker.$2middels/s or die "H25-055";
skriv($f, $t);

# --- Øvingssettet (tidligere «Høst 2024») ---
$f = 'data/oppgaver-host2024.js'; $t = les($f);
$t = slettElementer($t, @slettEA);
$t =~ s/eksamen: "Høst 2024"/eksamen: "Øvingssett"/g;
$t =~ s{^// Oppgaver fra eksamen høst 2024 \(eksamensark\.docx\): 120 flervalgsspørsmål i sju temadeler\.}{// Øvingssett (eksamensark.docx): korte flervalgsspørsmål i sju temadeler. Het tidligere «Høst 2024»,\n// men er ikke den offisielle eksamenen. 48 spørsmål som lå dobbelt, er slått sammen inn i\n// eksamensoppgavene (se «ogsa» der) og slettet her. Numrene (nr) er beholdt.}m or die "header";
skriv($f, $t);

# --- Flashcards ---
$f = 'data/kort.js'; $t = les($f);
$t = slettElementer($t, @slettK);
skriv($f, $t);
$f = 'data/kort-host2024.js'; $t = les($f);
$t = leggTilOgsa($t);
$t =~ s/eksamen: "Høst 2024"/eksamen: "Øvingssett"/g;
$t =~ s/(id: "KE003".*?bakside: "(?:[^"\\]|\\.)*?)(")/$1 Volley-prinsippet: grupper av fibre fyrer på ulike perioder og koder til sammen frekvensen opp til ca. 3 kHz.$2/s or die "KE003";
$t =~ s{^// Flashcards fra eksamen høst 2024 \(data/oppgaver-host2024\.js\)\.}{// Flashcards fra øvingssettet (data/oppgaver-host2024.js).}m;
skriv($f, $t);

# --- Nye 2024-oppgaver ---
$f = 'data/oppgaver-host2024-offisiell.js'; $t = les($f);
$t = leggTilOgsa($t);
skriv($f, $t);

my @mangler = grep { !$brukt{$_} } keys %ogsa;
print "Kilder lagt til: ", scalar(grep { !/^slettet/ } keys %brukt), " av ", scalar(keys %ogsa), "\n";
print "Mangler: @mangler\n" if @mangler;
print "Slettet: ", scalar(grep { /^slettet/ } keys %brukt), "\n";
