-- Audiologi eksamensøving – del 8: betaling for tilgang (Vipps).
--
-- Når admin slår på «Krev betaling», kommer vanlige brukere bare til en side som forklarer
-- hvordan de betaler med Vipps. Admin ser i Vipps hvem som har betalt (e-posten står i
-- meldingen), og gir tilgang i adminpanelet. Tilgangen varer for alltid.
--
-- Så lenge «Krev betaling» er av (standard), virker appen akkurat som før for alle.
--
-- Kjøres etter 01–07: Supabase → SQL Editor → New query → lim inn hele fila → Run.
-- Fila skal bare kjøres én gang.

-- =====================================================================
-- Hvem har betalt
-- =====================================================================
-- null = ikke betalt. Ellers tidspunktet admin ga tilgang.
alter table public.profiler add column betalt timestamptz;

-- =====================================================================
-- Innstillinger: én rad, styres av admin
-- =====================================================================
create table public.innstillinger (
  id smallint primary key default 1 check (id = 1),
  betaling_pakrevd boolean not null default false,
  pris integer not null default 75,
  vipps_nummer text,
  oppdatert timestamptz not null default now()
);

insert into public.innstillinger (id) values (1);

alter table public.innstillinger enable row level security;

-- Alle innloggede må kunne lese innstillingene, så appen vet om den skal vise betalingssiden.
create policy "Alle innloggede leser innstillingene" on public.innstillinger
  for select to authenticated
  using (true);

create policy "Admin endrer innstillingene" on public.innstillinger
  for update to authenticated
  using ((select public.er_admin()))
  with check ((select public.er_admin()));

-- =====================================================================
-- Tilgangsreglene: «aktiv» krever nå også betaling når den er påkrevd
-- =====================================================================
-- er_aktiv() brukes i reglene for å lagre fremgang, resultater og feilmeldinger. En bruker som
-- ikke har betalt mens betaling er påkrevd, får dermed ikke lagret noe, selv om noen skulle
-- omgå betalingssiden i nettleseren.
create or replace function public.er_aktiv() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (
    select 1 from public.profiler p
    where p.id = auth.uid()
      and not p.blokkert
      and (
        p.rolle = 'admin'
        or p.betalt is not null
        or not coalesce((select i.betaling_pakrevd from public.innstillinger i where i.id = 1), false)
      )
  );
$$;

-- =====================================================================
-- Admin gir eller fjerner tilgang
-- =====================================================================
-- Brukere kan ikke endre sin egen profil, så dette gjøres i en funksjon som sjekker at
-- den som spør er admin.
create function public.admin_sett_betalt(bruker uuid, har_betalt boolean) returns void
language plpgsql security definer set search_path = '' as $$
begin
  if not public.er_admin() then
    raise exception 'Bare admin har tilgang' using errcode = '42501';
  end if;
  update public.profiler
    set betalt = case when har_betalt then coalesce(betalt, now()) else null end
    where id = bruker;
end $$;

revoke execute on function public.admin_sett_betalt(uuid, boolean) from public, anon;
grant execute on function public.admin_sett_betalt(uuid, boolean) to authenticated;

-- =====================================================================
-- Brukeroversikten får med hvem som har betalt
-- =====================================================================
-- Returtypen endres, så funksjonen må slettes og lages på nytt.
drop function public.admin_brukeroversikt();

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
  antall_feilmeldinger bigint,
  betalt timestamptz
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
      (select count(*) from public.feilmeldinger f where f.bruker_id = p.id),
      p.betalt
    from public.profiler p
    left join auth.users u on u.id = p.id
    order by p.opprettet;
end $$;

revoke execute on function public.admin_brukeroversikt() from public, anon;
grant execute on function public.admin_brukeroversikt() to authenticated;
