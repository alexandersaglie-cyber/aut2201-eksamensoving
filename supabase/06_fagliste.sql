-- Audiologi eksamensøving – del 6: fagliste som admin styrer.
--
-- Hvert fag har en status:
--   utkast    – under arbeid, vises bare for admin
--   publisert – vises for alle brukere
--   skjult    – tatt ned igjen, vises bare for admin
-- Spørsmål og flashcards ligger fortsatt i appens datafiler (data/*.js), knyttet til faget med emne.
--
-- Kjøres etter 01–05: Supabase → SQL Editor → New query → lim inn hele fila → Run.
-- Fila skal bare kjøres én gang.

create table public.fag (
  kode text primary key,
  navn text not null,
  status text not null default 'utkast' check (status in ('utkast', 'publisert', 'skjult')),
  rekkefolge integer not null default 0,
  oppdatert timestamptz not null default now()
);

alter table public.fag enable row level security;

-- Innloggede brukere ser publiserte fag. Admin ser alle, og er den eneste som kan endre.
create policy "Brukere ser publiserte fag" on public.fag
  for select to authenticated
  using (status = 'publisert' or (select public.er_admin()));
create policy "Admin legger til fag" on public.fag
  for insert to authenticated
  with check ((select public.er_admin()));
create policy "Admin endrer fag" on public.fag
  for update to authenticated
  using ((select public.er_admin()))
  with check ((select public.er_admin()));
create policy "Admin sletter fag" on public.fag
  for delete to authenticated
  using ((select public.er_admin()));

-- Fagene som finnes i dag er publisert. AUT2200 starter som utkast (bare admin ser det).
insert into public.fag (kode, navn, status, rekkefolge) values
  ('AUT1000', 'Audiologisk grunnkurs 1', 'publisert', 1),
  ('AUT2201', 'Audiologisk grunnkurs 2', 'publisert', 2),
  ('AUT2200', 'Klinisk audiologi 2', 'utkast', 3);
