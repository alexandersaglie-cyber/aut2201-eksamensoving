-- AUT2201 eksamensøving – del 3: påbegynte flervalgsrunder i skyen.
--
-- Gjør at en runde startet på én enhet (f.eks. PC) kan fortsettes på en annen (f.eks. mobil).
-- Kjøres etter 01 og 02: Supabase → SQL Editor → New query → lim inn hele fila → Run.

-- Én rad per bruker: runden man er midt i. data = null betyr at det ikke er noen påbegynt
-- runde (den ble fullført eller forkastet), så den forsvinner også fra de andre enhetene.
create table public.pagaende_runder (
  bruker_id uuid primary key default auth.uid() references public.profiler (id) on delete cascade,
  data jsonb,
  oppdatert timestamptz not null
);

alter table public.pagaende_runder enable row level security;

-- Bare egen rad. Blokkerte brukere får ikke skrive.
create policy "Les egen påbegynte runde" on public.pagaende_runder
  for select to authenticated
  using (bruker_id = (select auth.uid()));
create policy "Lagre egen påbegynte runde" on public.pagaende_runder
  for insert to authenticated
  with check (bruker_id = (select auth.uid()) and (select public.er_aktiv()));
create policy "Endre egen påbegynte runde" on public.pagaende_runder
  for update to authenticated
  using (bruker_id = (select auth.uid()) and (select public.er_aktiv()))
  with check (bruker_id = (select auth.uid()));
