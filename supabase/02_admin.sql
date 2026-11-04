-- AUT2201 eksamensøving – del 2: innhold som admin redigerer, og brukeroversikt.
--
-- Kjøres etter 01_innlogging.sql: Supabase → SQL Editor → New query → lim inn hele fila → Run.
-- Fila skal bare kjøres én gang.

-- =====================================================================
-- Innhold: admins endringer i flashcards og flervalgsspørsmål
-- =====================================================================
-- Grunninnholdet ligger i appens datafiler (data/*.js). Denne tabellen inneholder bare det
-- admin har endret, lagt til eller slettet. Appen legger endringene oppå grunninnholdet.

create table public.innhold (
  id text primary key,
  type text not null check (type in ('kort', 'sporsmal')),
  data jsonb not null,
  slettet boolean not null default false,
  oppdatert timestamptz not null default now(),
  oppdatert_av uuid references public.profiler (id) on delete set null default auth.uid()
);

alter table public.innhold enable row level security;

-- Alle (også de som ikke er innlogget) kan lese innholdet. Bare admin kan endre det.
-- Rollen sjekkes her i databasen, så det hjelper ikke å vise frem skjulte knapper i appen.
create policy "Alle kan lese innhold" on public.innhold
  for select to anon, authenticated
  using (true);
create policy "Admin legger til innhold" on public.innhold
  for insert to authenticated
  with check ((select public.er_admin()));
create policy "Admin endrer innhold" on public.innhold
  for update to authenticated
  using ((select public.er_admin()))
  with check ((select public.er_admin()));
create policy "Admin fjerner innhold" on public.innhold
  for delete to authenticated
  using ((select public.er_admin()));

-- =====================================================================
-- Brukeroversikt til adminpanelet
-- =====================================================================
-- Henter alle brukere med enkel statistikk. Sjekker selv at den som spør er admin, og gir
-- feil ellers. «Sist innlogget» ligger i Supabases egen brukertabell, som appen ikke kan lese
-- direkte; derfor gjøres dette i en funksjon på serveren.

create function public.admin_brukeroversikt()
returns table (
  id uuid,
  epost text,
  rolle text,
  blokkert boolean,
  opprettet timestamptz,
  sist_aktiv timestamptz,
  sist_innlogget timestamptz,
  antall_runder bigint,
  snitt_prosent numeric,
  kort_ovd bigint,
  antall_feilmeldinger bigint
)
language plpgsql stable security definer set search_path = '' as $$
begin
  if not public.er_admin() then
    raise exception 'Bare admin har tilgang' using errcode = '42501';
  end if;

  return query
    select
      p.id, p.epost, p.rolle, p.blokkert, p.opprettet, p.sist_aktiv,
      u.last_sign_in_at,
      (select count(*) from public.flervalg_resultater r where r.bruker_id = p.id),
      (select round(avg(r.prosent)) from public.flervalg_resultater r where r.bruker_id = p.id),
      (select count(*) from public.kort_fremgang k where k.bruker_id = p.id),
      (select count(*) from public.feilmeldinger f where f.bruker_id = p.id)
    from public.profiler p
    left join auth.users u on u.id = p.id
    order by p.opprettet;
end $$;

revoke execute on function public.admin_brukeroversikt() from public, anon;
grant execute on function public.admin_brukeroversikt() to authenticated;
