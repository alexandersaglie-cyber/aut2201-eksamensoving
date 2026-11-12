use utf8; use open qw(:std :encoding(UTF-8));
# Lager data/oppgaver-pensum.js fra kilder/pensum-2026.txt (Majas AI-genererte øvingseksamen
# med fasit, basert på pensum i AUT2201). Spørsmål som allerede fantes i banken, er tatt ut av
# pensumsettet. Spørsmålene i de andre eksamenene er ikke endret.
# Bruk (fra prosjektmappa): perl kilder/bygg-pensum.pl
# Linjeformat i kildefila: nr|riktig(0-3)|tekst|A;;B;;C;;D|forklaring|pensum
my $NAVN = 'Pensumspørsmål';

# Like spørsmål som allerede ligger i banken: nr i pensumsettet => id i banken.
my %finnes = (
  2 => 'EA-033', 6 => 'EA-052', 8 => 'O24-098', 9 => 'O24-061', 12 => 'EA-034', 29 => 'EA-100',
  36 => 'EA-050', 38 => 'EA-103', 49 => 'EA-092', 69 => 'EA-096', 70 => 'O24-047', 71 => 'EA-054',
  88 => 'H25-092', 91 => 'EA-006', 100 => 'O24-069',
);
my %tema;
$tema{$_} = 'Aldring og kognisjon' for 1, 11, 21, 31, 41, 51, 61, 71, 81, 90;
$tema{$_} = 'Psykisk helse, mestring og stigma' for 4, 14, 24, 34, 44, 54, 64, 74, 84, 93;
$tema{$_} = 'Forskningsmetode' for 7, 17, 27, 37, 47, 57, 67, 77;
$tema{$_} = 'Statistikk' for 8, 18, 28, 38, 48, 58, 68, 78, 87, 96, 99, 100;
$tema{$_} = 'Vestibulært' for 9, 19, 29, 39, 49, 59, 69, 79, 88, 97;
$tema{$_} = 'Sentrale hørselsbaner og plastisitet' for 10, 20, 30, 40, 50, 60, 70, 80, 89, 98;
$tema{$_} = 'Binaural hørsel og lokalisering' for 6, 16, 26, 36, 46, 56, 66, 76, 86, 95;
$tema{$_} = 'Diagnostikk og måling' for 3, 13, 23, 33, 43, 53, 63, 73, 83, 92, 5, 15, 65;
$tema{$_} = 'Psykoakustikk' for 22, 32, 52, 62, 72, 82, 91, 25, 55, 75, 85, 94, 45;
$tema{$_} = 'Anatomi og hørselsfysiologi' for 2, 12;
$tema{$_} = 'Tale og akustikk' for 42;
$tema{$_} = 'Høreapparat og forsterkning' for 35;

sub les { my $f = shift; local $/; open my $h, '<', $f or die "$f: $!"; my $t = <$h>; close $h; $t }
sub skriv { my ($f, $t) = @_; open my $h, '>', $f or die; print $h $t; close $h; }
my $q = sub { my $s = shift; $s =~ s/\\/\\\\/g; $s =~ s/"/\\"/g; "\"$s\"" };

my @ut; my %ogsaFor;
open my $h, '<', 'kilder/pensum-2026.txt' or die;
while (<$h>) {
  chomp; s/\r$//; next unless /\S/;
  my ($nr, $riktig, $tekst, $alt, $forkl, $pensum) = split /\|/, $_, 6;
  my @alt = split /;;/, $alt;
  die "Oppg. $nr: ".scalar(@alt)." alternativer\n" unless @alt == 4;
  die "Oppg. $nr mangler tema\n" unless $tema{$nr};
  s/\.$// for @alt; # alternativene i appen slutter ikke med punktum
  if ($finnes{$nr}) { push @{$ogsaFor{$finnes{$nr}}}, $nr; next; }
  $forkl .= " (Pensum: $pensum)" if $pensum;
  push @ut, sprintf "  {\n    id: \"P26-%03d\", eksamen: \"%s\", nr: %d, tema: %s, poeng: 1,\n    tekst: %s,\n    figur: null,\n    alternativer: [\n%s\n    ],\n    riktig: %d, forklaring: %s,\n    fasit: \"oppgitt\", sikkerhet: \"høy\"\n  }",
    $nr, $NAVN, $nr, $q->($tema{$nr}), $q->($tekst), join(",\n", map { "      " . $q->($_) } @alt), $riktig, $q->($forkl);
}
close $h;

my $js = "// Pensumspørsmål for AUT2201: 100 flervalgsspørsmål generert med KI ut fra forelesningene\n"
  . "// (Majas øvingseksamen 2026, med fasit og forklaringer). Ikke en offisiell eksamen.\n"
  . "// Fasiten er oppgitt i fasitarket og kontrollert. Pensumhenvisningen står bak forklaringen.\n"
  . "// " . scalar(keys %finnes) . " spørsmål fantes allerede i banken og er tatt ut av settet (nr og spørsmålet\n"
  . "// som finnes fra før): " . join(', ', map { "$_ ($finnes{$_})" } sort { $a <=> $b } keys %finnes) . ".\n"
  . "// Bygd fra kilder/pensum-2026.txt med kilder/bygg-pensum.pl. Samme felter som i data/oppgaver.js.\n\n"
  . "OPPGAVER.push(\n" . join(",\n", @ut) . "\n);\n";
skriv('data/oppgaver-pensum.js', $js);

# Spørsmålene i de andre eksamenene røres ikke.
print "Nye spørsmål: ", scalar(@ut), ", tatt ut fordi de fantes fra før: ", scalar(keys %ogsaFor), "\n";
