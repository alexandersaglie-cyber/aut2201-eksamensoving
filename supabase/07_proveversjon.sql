-- Audiologi eksamensøving – del 7: fag som prøveversjon.
--
-- Ny status «prove» (prøveversjon): faget vises for alle brukere, med merket «Prøveversjon»
-- og et skjema der brukerne kan vurdere hvordan faget fungerer. Vurderingene lagres i
-- tabellen feilmeldinger (element_id «vurdering:<fagkode>»), så admin ser dem under Meldinger.
--
-- Fila setter også AUT2200 til prøveversjon, som altså publiserer faget.
--
-- Kjøres etter 01–06: Supabase → SQL Editor → New query → lim inn hele fila → Run.
-- Fila skal bare kjøres én gang.

alter table public.fag drop constraint fag_status_check;
alter table public.fag add constraint fag_status_check
  check (status in ('utkast', 'prove', 'publisert', 'skjult'));

drop policy "Brukere ser publiserte fag" on public.fag;
create policy "Brukere ser publiserte fag og prøveversjoner" on public.fag
  for select to authenticated
  using (status in ('publisert', 'prove') or (select public.er_admin()));

update public.fag set status = 'prove', oppdatert = now() where kode = 'AUT2200';
