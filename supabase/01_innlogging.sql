-- AUT2201 eksamensøving – del 1: brukere, fremgang og tilgangsregler.
--
-- Slik bruker du fila: Supabase → SQL Editor → New query → lim inn hele fila → Run.
-- Fila skal bare kjøres én gang.
--
-- Tilgangsreglene (row level security, RLS) håndheves av databasen selv. Selv om noen
-- endrer koden i nettleseren sin, får de bare lest og skrevet det reglene tillater.

-- =====================================================================
-- Profiler: én rad per bruker
-- =====================================================================

create table public.profiler (
  id uuid primary key references auth.users (id) on delete cascade,
  epost text not null,
  rolle text not null default 'bruker' check (rolle in ('bruker', 'admin')),
  blokkert boolean not null default false,
  opprettet timestamptz not null default now(),
  sist_aktiv timestamptz,
  godtatt_personvern timestamptz
);

-- Lager profilen automatisk når noen registrerer seg. Kontoen til eieren blir admin.
create function public.ny_bruker() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiler (id, epost, rolle, godtatt_personvern)
  values (
    new.id,
    new.email,
    case when lower(new.email) = 'alexandersaglie@gmail.com' then 'admin' else 'bruker' end,
    case when new.raw_user_meta_data ->> 'godtatt_personvern' = 'true' then now() end
  );
  return new;
end $$;

create trigger ved_ny_bruker
  after insert on auth.users
  for each row execute function public.ny_bruker();

-- =====================================================================
-- Hjelpefunksjoner for tilgangsreglene
-- =====================================================================
-- «security definer» betyr at funksjonen kjører med databaseeierens rettigheter,
-- så den kan slå opp i profiler uten å bli stoppet av reglene på profiler.

-- Er den innloggede brukeren admin (og ikke blokkert)?
create function public.er_admin() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.profiler
    where id = auth.uid() and rolle = 'admin' and not blokkert
  );
$$;

-- Er den innloggede brukeren en vanlig, ikke-blokkert bruker?
create function public.er_aktiv() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.profiler
    where id = auth.uid() and not blokkert
  );
$$;

-- Oppdaterer «sist aktiv» for den innloggede brukeren. Appen kaller denne ved oppstart.
-- Brukere har ikke lov til å endre profilen sin direkte (da kunne de gjort seg selv til admin).
create function public.registrer_aktivitet() returns void
language sql security definer set search_path = '' as $$
  update public.profiler set sist_aktiv = now() where id = auth.uid();
$$;

-- =====================================================================
-- Fremgang og resultater
-- =====================================================================

-- Hvilken boks (1–5) hvert flashcard ligger i, per bruker.
create table public.kort_fremgang (
  bruker_id uuid not null default auth.uid() references public.profiler (id) on delete cascade,
  kort_id text not null,
  boks smallint not null check (boks between 1 and 5),
  oppdatert timestamptz not null,
  primary key (bruker_id, kort_id)
);

-- Fullførte flervalgsrunder. id lages i appen, så samme runde ikke lagres to ganger.
create table public.flervalg_resultater (
  id uuid primary key,
  bruker_id uuid not null default auth.uid() references public.profiler (id) on delete cascade,
  dato timestamptz not null,
  beskrivelse text not null,
  antall integer not null,
  riktige integer not null,
  prosent integer not null,
  karakter text not null check (karakter in ('A', 'B', 'C', 'D', 'E', 'F')),
  per_tema jsonb not null default '{}',
  feil text[] not null default '{}'
);
create index on public.flervalg_resultater (bruker_id);

-- Kort og spørsmål brukeren har valgt å skjule for seg selv.
create table public.skjulte (
  bruker_id uuid not null default auth.uid() references public.profiler (id) on delete cascade,
  element_id text not null,
  skjult boolean not null,
  oppdatert timestamptz not null,
  primary key (bruker_id, element_id)
);

-- Feil brukerne melder fra om i kort og spørsmål. Admin ser alle.
create table public.feilmeldinger (
  id bigint generated always as identity primary key,
  bruker_id uuid not null default auth.uid() references public.profiler (id) on delete cascade,
  element_id text not null,
  melding text not null check (char_length(melding) between 1 and 2000),
  opprettet timestamptz not null default now(),
  lost boolean not null default false
);

-- =====================================================================
-- Tilgangsregler (RLS)
-- =====================================================================

alter table public.profiler enable row level security;
alter table public.kort_fremgang enable row level security;
alter table public.flervalg_resultater enable row level security;
alter table public.skjulte enable row level security;
alter table public.feilmeldinger enable row level security;

-- Profiler: man ser sin egen, admin ser alle. Ingen regler for å endre profiler,
-- så det kan bare gjøres av serverfunksjonen (som bruker service role-nøkkelen).
create policy "Se egen profil, admin ser alle" on public.profiler
  for select to authenticated
  using (id = (select auth.uid()) or (select public.er_admin()));

-- Fremgang, resultater og skjulte: egne rader. Blokkerte brukere får ikke skrive.
-- Admin kan lese alle (brukes til statistikk i adminpanelet).
create policy "Les egen fremgang" on public.kort_fremgang
  for select to authenticated
  using (bruker_id = (select auth.uid()) or (select public.er_admin()));
create policy "Lagre egen fremgang" on public.kort_fremgang
  for insert to authenticated
  with check (bruker_id = (select auth.uid()) and (select public.er_aktiv()));
create policy "Endre egen fremgang" on public.kort_fremgang
  for update to authenticated
  using (bruker_id = (select auth.uid()) and (select public.er_aktiv()))
  with check (bruker_id = (select auth.uid()));
create policy "Slette egen fremgang" on public.kort_fremgang
  for delete to authenticated
  using (bruker_id = (select auth.uid()) and (select public.er_aktiv()));

create policy "Les egne resultater" on public.flervalg_resultater
  for select to authenticated
  using (bruker_id = (select auth.uid()) or (select public.er_admin()));
create policy "Lagre egne resultater" on public.flervalg_resultater
  for insert to authenticated
  with check (bruker_id = (select auth.uid()) and (select public.er_aktiv()));
create policy "Slette egne resultater" on public.flervalg_resultater
  for delete to authenticated
  using (bruker_id = (select auth.uid()) and (select public.er_aktiv()));

create policy "Les egne skjulte" on public.skjulte
  for select to authenticated
  using (bruker_id = (select auth.uid()));
create policy "Lagre egne skjulte" on public.skjulte
  for insert to authenticated
  with check (bruker_id = (select auth.uid()) and (select public.er_aktiv()));
create policy "Endre egne skjulte" on public.skjulte
  for update to authenticated
  using (bruker_id = (select auth.uid()) and (select public.er_aktiv()))
  with check (bruker_id = (select auth.uid()));

-- Feilmeldinger: alle innloggede kan melde, man ser sine egne, admin ser og behandler alle.
create policy "Melde feil" on public.feilmeldinger
  for insert to authenticated
  with check (bruker_id = (select auth.uid()) and (select public.er_aktiv()));
create policy "Se egne feilmeldinger, admin ser alle" on public.feilmeldinger
  for select to authenticated
  using (bruker_id = (select auth.uid()) or (select public.er_admin()));
create policy "Admin behandler feilmeldinger" on public.feilmeldinger
  for update to authenticated
  using ((select public.er_admin()))
  with check ((select public.er_admin()));
create policy "Admin sletter feilmeldinger" on public.feilmeldinger
  for delete to authenticated
  using ((select public.er_admin()));

-- Hjelpefunksjonene skal bare kunne kalles av innloggede brukere.
-- (PostgreSQL lar i utgangspunktet alle kalle funksjoner, så det må fjernes først.)
revoke execute on function public.er_admin() from public, anon;
revoke execute on function public.er_aktiv() from public, anon;
revoke execute on function public.registrer_aktivitet() from public, anon;
grant execute on function public.er_admin() to authenticated;
grant execute on function public.er_aktiv() to authenticated;
grant execute on function public.registrer_aktivitet() to authenticated;
revoke execute on function public.ny_bruker() from public, anon, authenticated;
