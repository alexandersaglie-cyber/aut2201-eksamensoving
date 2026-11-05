-- AUT2201 eksamensøving – del 4: slettinger og nullstillinger som gjelder alle enheter.
--
-- Uten denne kan en annen enhet (f.eks. mobilen) sende opp igjen data som er slettet,
-- fordi den har en gammel kopi og tror dataene bare mangler i skyen.
-- Kjøres etter 01–03: Supabase → SQL Editor → New query → lim inn hele fila → Run.

-- Én rad per bruker:
--   fremgang_nullstilt   – når «Nullstill fremgang» sist ble trykket. Svar på flashcards fra før
--                          dette regnes som slettet på alle enheter.
--   resultater_nullstilt – når «Slett resultathistorikken» sist ble trykket. Runder fra før dette
--                          regnes som slettet på alle enheter.
--   slettede_resultater  – id-er til enkeltrunder som er slettet.
create table public.slettinger (
  bruker_id uuid primary key default auth.uid() references public.profiler (id) on delete cascade,
  fremgang_nullstilt timestamptz,
  resultater_nullstilt timestamptz,
  slettede_resultater text[] not null default '{}',
  oppdatert timestamptz not null default now()
);

alter table public.slettinger enable row level security;

-- Bare egen rad. Blokkerte brukere får ikke skrive.
create policy "Les egne slettinger" on public.slettinger
  for select to authenticated
  using (bruker_id = (select auth.uid()));
create policy "Lagre egne slettinger" on public.slettinger
  for insert to authenticated
  with check (bruker_id = (select auth.uid()) and (select public.er_aktiv()));
create policy "Endre egne slettinger" on public.slettinger
  for update to authenticated
  using (bruker_id = (select auth.uid()) and (select public.er_aktiv()))
  with check (bruker_id = (select auth.uid()));
