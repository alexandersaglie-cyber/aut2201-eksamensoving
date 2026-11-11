use utf8; use open qw(:std :encoding(UTF-8));
# Lager data/oppgaver-host2024-offisiell.js fra kilder/host2024-offisiell.txt.
# Bruk: perl kilder/bygg-host2024.pl kilder/host2024-offisiell.txt <nr som er slått sammen> > data/oppgaver-host2024-offisiell.js
# Kjør deretter kilder/slasammen-2024.pl (bare ogsa-delen) for «ogsa» på nytt, eller legg «ogsa» inn for hånd.
my ($inn, $utenfor) = @ARGV;
my %hopp = map { $_ => 1 } split /,/, ($utenfor // "");
open my $h, '<', $inn or die "$inn: $!";
my @ut; my %sett;
while (<$h>) {
  chomp; s/\r$//; next if /^#/ || !/\S/;
  my ($nr, $tema, $riktig, $sikkerhet, $kand, $figur, $tekst, $alt, $forkl) = split /\|/, $_, 9;
  my @alt = split /;;/, $alt;
  die "Oppg. $nr: ".scalar(@alt)." alternativer\n" unless @alt == 4;
  die "Oppg. $nr: riktig=$riktig\n" unless $riktig =~ /^[0-3]$/;
  die "Oppg. $nr: dobbel\n" if $sett{$nr}++;
  next if $hopp{$nr};
  my $q = sub { my $s = shift; $s =~ s/\\(?!n)/\\\\/g; $s =~ s/"/\\"/g; return "\"$s\""; };
  my $e = sprintf "  {\n    id: \"O24-%03d\", eksamen: \"Høst 2024\", nr: %d, tema: %s, poeng: 1,\n    tekst: %s,\n    figur: %s,\n    alternativer: [\n%s\n    ],\n    riktig: %d, forklaring: %s,\n    fasit: \"generert\", sikkerhet: %s%s\n  }",
    $nr, $nr, $q->($tema), $q->($tekst), ($figur eq '-' ? 'null' : $q->($figur)),
    join(",\n", map { "      " . $q->($_) } @alt), $riktig, $q->($forkl), $q->($sikkerhet),
    ($kand eq '-' ? '' : ", kandidatsvar: $kand");
  push @ut, $e;
}
die "Fant ".scalar(@ut)." oppgaver\n" unless @ut == 100 - keys %hopp;
print "// Eksamen AUT2201 høst 2024 (02.12.2024), hentet fra den offisielle PDF-en.\n";
print "// Fasiten er generert. De blå markeringene i PDF-en er en kandidats svar (kandidatsvar), ikke en fasit.\n";
if (%hopp) {
  print "// Oppgavene som var like en oppgave fra høst 2025, ligger ikke her. De står i data/oppgaver.js\n";
  print "// med kilden «Høst 2024, oppg. N» i feltet ogsa: ", join(", ", sort { $a <=> $b } keys %hopp), ".\n";
}
print "// Kilde: kilder/host2024-offisiell.txt, bygd med kilder/bygg-host2024.pl. Samme felter som i data/oppgaver.js.\n\n";
print "OPPGAVER.push(\n", join(",\n", @ut), "\n);\n";
