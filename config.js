// Kobling til Supabase (innlogging og lagring i skyen).
//
// Fyll inn de to verdiene fra Supabase → Project Settings → API (eller «API Keys»):
//   SUPABASE_URL    – «Project URL», f.eks. https://abcdefgh.supabase.co
//   SUPABASE_NOKKEL – «anon public»- eller «publishable»-nøkkelen
//
// Disse to verdiene er laget for å ligge i nettleseren og er IKKE hemmelige. Det er
// tilgangsreglene i databasen (supabase/01_innlogging.sql) som beskytter dataene.
//
// Den hemmelige nøkkelen («service_role» / «secret») skal ALDRI inn her. Appen nekter å
// bruke den hvis den limes inn ved et uhell.
//
// Står feltene tomme, virker appen som før, bare uten innlogging.

const SUPABASE_URL = "";
const SUPABASE_NOKKEL = "";
