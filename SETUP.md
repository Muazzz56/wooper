# Turning on email sign-in (5 minutes, free)

The game is a static HTML file, so it has no server of its own. Email sign-in and
cross-device streak sync therefore run on **Supabase** (free tier is plenty — this
game makes one tiny request per finished puzzle).

Without this setup the game still works perfectly: streaks are saved on the device
that played them, and the Settings panel says so.

---

## 1. Create the project

1. Go to <https://supabase.com> → **New project** (free).
2. Wait for it to finish provisioning.

## 2. Create the table

Open **SQL Editor → New query**, paste this, run it:

```sql
create table if not exists public.wooper_progress (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);

alter table public.wooper_progress enable row level security;

-- a player can only read and write their own row
create policy "own row read"   on public.wooper_progress
  for select using (auth.uid() = user_id);

create policy "own row write"  on public.wooper_progress
  for insert with check (auth.uid() = user_id);

create policy "own row update" on public.wooper_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

## 3. Make the email contain a code (not a link)

By default Supabase emails a magic *link*. This game asks for a **code**, which is
friendlier in a single-file app.

**Authentication → Emails → Magic Link**, and make sure the body includes the token:

```html
<h2>Your Wooper code</h2>
<p>Type this in the game: <strong>{{ .Token }}</strong></p>
```

(`{{ .Token }}` is the 6-digit code. Keep `{{ .ConfirmationURL }}` in there too if you
want the link to keep working.)

Under **Authentication → URL configuration** you can leave the site URL as-is; the
code flow doesn't need a redirect.

## 4. Paste your keys

In `wooper/script.js`, near the top:

```js
const AUTH_CONFIG = {
  supabaseUrl: "https://YOUR-PROJECT.supabase.co",
  anonKey: "YOUR-ANON-PUBLIC-KEY",   // Settings → API → Project API keys → anon public
  table: "wooper_progress",
};
```

Then rebuild the single file:

```bash
python3 tools/make-standalone.py
```

## 5. Try it

Gear icon → **Send code** → check the inbox → type the code → **Verify**.

While signed in:

* finishing a ladder pushes your streak to `wooper_progress`
* opening the game on another device pulls it back if the server copy is newer
* **Sign out** returns to device-only storage

---

## How sync decides who wins

On sign-in the game compares `streaks.lastPlayed` locally and on the server and keeps
the **more recent** one, then pushes the merged snapshot. It is deliberately simple:
one row per account, last write wins. Good enough for a daily puzzle, no conflicts to
reason about.

## Notes

* The anon key is public by design — row-level security is what protects the data.
* Never put the **service_role** key in a web page.
* If you'd rather use Firebase Auth, only `sendCode`, `verifyCode`, `pullProgress`
  and `pushProgress` in `script.js` need rewriting; the UI stays the same.

## Where the sign-in shows up

Sign-in lives on the **gate before the front page**, not in Settings. Two things follow from that:

* With keys in `AUTH_CONFIG`, the gate shows the email field and an enabled **Send code** button. With no keys it shows the email field dimmed and the line *"Accounts aren't connected yet"* — pick **Play without an account** and you are on the front page in one tap.
* Skipping records `wooper.v4.guest:<date>` so the gate doesn't ask again the same day. **Clear saved progress on this device** (Settings) and signing out both drop that flag, so the gate returns.
* Settings keeps a second copy of the same form for anyone who skips first and changes their mind; it calls the same functions.

Nothing breaks without Supabase — the game is fully playable on the device alone.
