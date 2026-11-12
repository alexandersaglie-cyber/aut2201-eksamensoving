use utf8; use open qw(:std :encoding(UTF-8));
# Lager en lesbar gjennomgang (markdown) av AUT2200-innholdet i datafilene, så det kan
# kontrolleres uten å åpne appen. Bruk: perl kilder/aut2200-gjennomgang.pl > emner/AUT2200/gjennomgang.md
sub les { my $f = shift; local $/; open my $h, '<', $f or die "$f: $!"; my $t = <$h>; close $h; $t }
sub str { my $s = shift; $s =~ s/\\"/"/g; $s }
my @linjer = ("# AUT2200 – gjennomgang av generert innhold", "",
  "Laget automatisk fra `data/aut2200-kort.js`, `data/aut2200-oppgaver.js` og `data/aut2200-muntlig.js`.", "");

# Flashcards
my $k = les('data/aut2200-kort.js'); my %kort;
while ($k =~ /\{ id: "([^"]+)".*?tema: "([^"]+)", eksamen: "([^"]+)".*?kilde: "((?:[^"\\]|\\.)*)",\s*forside: "((?:[^"\\]|\\.)*)",\s*bakside: "((?:[^"\\]|\\.)*)",\s*forklaring: "((?:[^"\\]|\\.)*)" \}/sg) {
  push @{$kort{$3}}, [$1, $2, str($4), str($5), str($6), str($7)];
}
# Flervalg
my $o = les('data/aut2200-oppgaver.js'); my %spm;
while ($o =~ /id: "([^"]+)", emne: "AUT2200", eksamen: "([^"]+)", nr: \d+, tema: "([^"]+)".*?kilde: "((?:[^"\\]|\\.)*)",\s*tekst: "((?:[^"\\]|\\.)*)",.*?alternativer: \[(.*?)\],\s*riktig: (\d), forklaring: "((?:[^"\\]|\\.)*)"/sg) {
  my ($id, $eks, $tema, $kilde, $tekst, $alt, $riktig, $forkl) = ($1, $2, $3, $4, $5, $6, $7, $8);
  my @a; push @a, str($1) while $alt =~ /"((?:[^"\\]|\\.)*)"/g;
  push @{$spm{$eks}}, [$id, $tema, str($kilde), str($tekst), \@a, $riktig, str($forkl)];
}
# Muntlig
my $m = les('data/aut2200-muntlig.js'); my %munt;
while ($m =~ /\{\s*id: "([^"]+)", emne: "AUT2200", type: "(\w+)", tema: "([^"]+)", eksamen: "([^"]+)",\s*kilde: "((?:[^"\\]|\\.)*)",\s*sporsmal: "((?:[^"\\]|\\.)*)",\s*(sjekkliste|steg): \[(.*?)\],\s*oppfolging: \[(.*?)\]\s*\}/sg) {
  my ($id, $type, $tema, $eks, $kilde, $sp, $lt, $liste, $opp) = ($1, $2, $3, $4, $5, $6, $7, $8, $9);
  my @l; push @l, str($1) while $liste =~ /"((?:[^"\\]|\\.)*)"/g;
  my @o; push @o, [str($1), str($2)] while $opp =~ /sporsmal: "((?:[^"\\]|\\.)*)", svar: "((?:[^"\\]|\\.)*)"/g;
  push @{$munt{$eks}}, [$id, $type, $tema, str($kilde), str($sp), \@l, \@o];
}

my %sett; my @forelesninger = grep { !$sett{$_}++ } (keys %kort, keys %spm, keys %munt);
for my $f (sort @forelesninger) {
  push @linjer, "---", "", "## $f", "",
    sprintf("%d flashcards · %d flervalg · %d forklar-kort · %d scenarier", scalar(@{$kort{$f} || []}), scalar(@{$spm{$f} || []}),
      scalar(grep { $_->[1] eq 'forklar' } @{$munt{$f} || []}), scalar(grep { $_->[1] eq 'scenario' } @{$munt{$f} || []})), "";
  push @linjer, "### Forklar-kort og scenarier", "";
  for my $x (@{$munt{$f} || []}) {
    my ($id, $type, $tema, $kilde, $sp, $l, $o) = @$x;
    push @linjer, "#### " . ($type eq 'forklar' ? "Forklar" : "Scenario") . " ($id): $sp", "", "*$kilde*", "",
      ($type eq 'forklar' ? "**Sjekkliste – en god forklaring tar med:**" : "**Fremgangsmåte (fasit):**"), "";
    my $i = 0;
    push @linjer, ($type eq 'forklar' ? "- [ ] $_" : (++$i) . ". $_") for @$l;
    push @linjer, "", "**Oppfølgingsspørsmål:**", "";
    push @linjer, "- *$_->[0]*  ", "  → $_->[1]" for @$o;
    push @linjer, "";
  }
  push @linjer, "### Flervalg", "";
  for my $x (@{$spm{$f} || []}) {
    my ($id, $tema, $kilde, $tekst, $a, $riktig, $forkl) = @$x;
    push @linjer, "**$id.** $tekst  ", "*$kilde*", "";
    for my $i (0 .. $#$a) { push @linjer, "- " . ($i == $riktig ? "**✔ $a->[$i]**" : $a->[$i]); }
    push @linjer, "", "> $forkl", "";
  }
  push @linjer, "### Flashcards", "", "| Forside | Bakside |", "|---|---|";
  for my $x (@{$kort{$f} || []}) {
    my ($id, $tema, $kilde, $fs, $bs, $fk) = @$x;
    s/\|/\\|/g for $fs, $bs, $fk;
    push @linjer, "| $fs | $bs" . ($fk ? " <br>*$fk*" : "") . " |";
  }
  push @linjer, "";
}
print join("\n", @linjer), "\n";
