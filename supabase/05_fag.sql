-- Audiologi eksamensøving – del 5: flere fag.
--
-- Hver flervalgsrunde får et fag (emne), så resultatene holdes atskilt per fag.
-- Rundene som finnes fra før, hører til AUT2201.
-- Kjøres etter 01–04: Supabase → SQL Editor → New query → lim inn hele fila → Run.

alter table public.flervalg_resultater
  add column emne text not null default 'AUT2201';
