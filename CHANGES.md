# WOOPER — Daily Word Ladder

Start word → goal word, one letter per move. Wordle's bones, NYT's daily-game shape, its own colours.

## Files

| File | What it is |
|---|---|
| `wooper/index.html` | Main page (drop-in replacement for your original) |
| `wooper/style.css` | Theme, layout and animations |
| `wooper/script.js` | Game engine (dictionary embedded — no internet needed) |
| `wooper-standalone.html` | **Single-file build.** Double-click to play, good for sharing |
| `tools/make-standalone.py` | Rebuilds the single file after editing the three sources |
| `tools/validate-daily.py` | Checks the curated `DAILY` list; `--pair A B` tests a candidate, `--table` prints the calendar |
| `tools/gen-daily.js` | Drafts a run of daily pairs with a par mix you choose (`--days`, `--mix`, `--from`) |
| `SETUP.md` | Optional: 5-minute Supabase setup to switch on email sign-in + streak sync |

---

## 1. The colours

| Colour | Hex | Means |
|---|---|---|
| **Deep Pink** | `#C2185B` | the letter is in the goal, **in that exact spot** |
| **Signal Orange** | `#FF5A0A` | the letter is in the goal, somewhere else |
| **Deep Eggplant Violet** | `#400849` | that letter is **not** in the goal — and it's the ink for text, buttons and headings |

* The **page itself is a light orchid wash** (`#fbeef8`), tiles sit on it as white boxes with 2 px outlines, so the pink tiles read as "placed" rather than blending into the background.
* This is Wordle's hierarchy (dark = ruled out, orange = misplaced, loud colour = placed) with a red-ish pink in the "placed" slot.
* **One theme, no switch.** The pink build is the only build: the moon button, the `data-theme` block and the stored preference are all gone. A first-time visitor is never asked to choose.
* Small orange text on the pink page uses a slightly deeper `#cf460a` so it stays legible at 10–11 px. Swap the three hexes in `:root` to re-skin instantly.

## 2. The pre-game screen

Opening the site now lands on a **front page**, not the board — like the daily word games you're used to:

* Grid mark, big serif **Wooper**, and a serif sentence that changes with your situation:
  * *"Go ahead, add another day to your **6-day streak**."* when you have a live streak
  * *"You're on move 3 of today's ladder. **2 moves to go.**"* if you left one unfinished
  * *"You solved today's ladder in 4 moves. A new one drops at midnight."* once it's done
* Directly under the wordmark, **today's pair**: `GRADE → BLAME` with a small `PAR 3` pill. The pair and the par are the whole preview — the shortest ladder is **never** shown here.
* **Play** / **Continue** / **See result** pill, a **How to play** pill under it, then the date, **No. 1** and the caption.
* Play drops you into the board; See result jumps straight to the result card. The clock does **not** run while you're on this screen.

## 3. A new word at midnight — your midnight

* The day key is now your **local calendar date**, so the ladder turns over at **00:00 your time** (before, it was UTC — 05:30 for you in India).
* The footer counts down to your next midnight (`NEXT LADDER IN 22:57:28`), and the page refreshes itself the moment it ticks over.
* Every timezone gets its own puzzle for its own day: Asia/Kolkata → Oct 31 / No. 669, America/Los_Angeles → Oct 30 / No. 668.
* **Puzzle number** counts days from **launch day (31 Oct 2026 = No. 1)**, so it climbs by exactly one each midnight and means the same thing to everyone. It never shows 0, even on a device with an earlier date.
* Progress, streaks and the finished state are all keyed to that local date, so a completed day stays completed until *your* midnight.

## 4. The clock — 2 minutes, unlimited guesses

* **2:00 per ladder**, starting on your **first letter** (not on page load, not on the splash screen).
* The timer sits in the status row: `MOVE 4 · PAR 5 · 2 TO GO · 1:12`, turns **orange under 30 s**, pulses under 10.
* **Guesses are unlimited** — detour as much as you like; only the clock can end a run.
* The deadline is saved, so a reload resumes the same countdown; if it ran out while you were away, the day scores as a loss.
* Zero → **"Time's up"** card, goal revealed, shortest ladder available, **streak resets**.
* `secondsPerLadder` in `CONFIG` changes the length.

## 5. Words that can actually reach the goal

* Wordle's official **14,855** five-letter words, embedded in `script.js` — instant and offline.
* Every word you can type sits in the large connected component of the word graph, so **you can never walk into a dead end**.
* After each move the game shows the **exact minimum moves left**, computed by BFS.
* Daily puzzles are identical for everyone in a given day and pick a goal whose shortest ladder runs through ordinary words, **par 3–5**.

## 6. Hints and the answer

* **2 hints per ladder**, no time cost: `Hint 2 → Hint 1 → No hints`, showing which letter to change and to what.
* The result card reveals the **full shortest ladder** as mini tiles, with the changed letter highlighted at each step.

## 7. Daily streaks

* Streak count in the header; tap it for stats — played, win %, current streak, best, last 7 days.
* A streak grows on consecutive solves and **resets when you fail or skip a day**.

## 8. Finished — today, or whenever you come back

* **Solved:** card-style banner **"Solved today · 4 moves · par 3"** with a **Result** button, status `SOLVED IN 4 · PAR BEATEN`, keyboard locked, clock reading `DONE`.
* **Failed:** orange-tinted **"Time's up today · the goal was ISLET"**.
* **Result** re-opens the full card. Share sends `🩷🟧🟪` grid rows, with `X` instead of a move count on a loss.

## 9. The header — an icon bar

* **Left:** back chevron → returns to today's front page.
* **Centre:** `Wooper` with the issue line under it (`NO. 1 · OCT 31`).
* **Right:** four line icons — **hint** (bulb, with the number of hints left as a badge), **statistics** (bar chart, with your streak as a badge), **how to play** (?), **settings** (gear).
* The old chip row under the board is gone: hint and help now live in the bar, so the grid and keyboard get the space.
* **The route is a card**, not a strip: `START` and `GOAL` in small caps above their tiles, a hairline arrow between them, on a white surface with a 12 px radius. The goal tiles are the only pink in the chrome.
* **The status line is one row**: `SOLVED IN 3 · PAR BEATEN · DONE`, where `PAR BEATEN` is a small pink badge only when you beat par, and the clock is the only bordered chip.

## 10. The board screen is pink

* The puzzle screen sits on **`#FFB7D6`** — the candy pink from your swatch — in the light theme, with white tiles, white route card and violet ink for text. Dark theme keeps a near-black plum version of the same screen.
* Correct tiles keep their pastel orchid fill but gained a violet-tinted border so they read against the pink page.

## 11. Accounts (optional)

* **Settings** (gear) → **Account**: enter an email, get a code, type it in. No passwords.
* Signed in, your streak follows the account: finishing a ladder pushes it up, opening the game elsewhere pulls the newer copy down. Signing out returns to device-only storage.
* This needs a free Supabase project — `SETUP.md` has the SQL, the email template tweak and the two values to paste into `AUTH_CONFIG`. Until then the panel says so plainly and everything keeps working locally.
* Settings also holds the **dark theme** switch and **Clear saved progress on this device** (the theme button left the header).

## 12. Type and detail

* **Two typefaces, used strictly**: a serif (`Iowan Old Style / Palatino / Georgia`) for the wordmark, headings and the sentence on the front page; a grotesque (`Helvetica Neue / Arial`) for the UI, buttons and tiles.
* Buttons are pill-shaped and **sentence case** (`Play`, `How to play`, `Share result`, `Hint 2`) — no wide-tracked all-caps micro-labels.
* Tiles are square 2 px boxes with 4 px corners; the keyboard is a flat QWERTY with wide ENTER/DEL.
* `prefers-reduced-motion` respected; nothing overflows at 320 px; the keyboard shrinks before the grid does.

## 13. Sign-in first, one pink theme, hand-picked dailies

* **The gate comes before the front page.** Opening the game now shows a sign-in screen (mark, **Wooper**, one line of copy, email field, `Send code`, `or`, `Play without an account`). It is the same shell as the front page, so the two screens feel like one flow. Signing in drops you on the front page with your streak pulled from the account; skipping drops you there too, and it won't ask again today.
* The email code form moved with it. Settings still carries a copy for anyone who skipped the gate — same function, two sets of ids (`AUTH_FORM_GATE` / `AUTH_FORM_SETTINGS`).
* With no Supabase keys in `AUTH_CONFIG` the field is inert, the button is dimmed and the screen says so plainly: *"Accounts aren't connected yet — play as a guest and your streak stays on this device."*
* **Dark mode is gone**, not hidden: no `html[data-theme="dark"]` block, no `.toggle`, no `wooper.v4.theme` key, no moon icon. `applyTheme()` only ever stamps `light`, so a returning visitor with a stored dark preference lands on pink.
* **Deep pink for placed letters**: `--correct` moved from `#E7B0DE` to `#C2185B` (white text on it passes contrast), and the `.tile.correct` border no longer uses a violet tint — the tile is one solid block of colour. Orange stays "right letter, wrong spot", eggplant stays "not in the goal". The help legend, the share grid, the route card and the result mini-grid all follow the same token.
* **Hand-picked dailies.** `DAILY` in `script.js` is a curated table of start/goal pairs, one per issue, starting `grade → blame` as No. 1. `pickDailyPuzzle()` uses the table when there's an entry and falls back to the generator (date-seeded, same rules) once the list runs out. `tools/validate-daily.py` checks every pair: real words, connected, par inside `minPar..maxPar`, no repeats, no obscure intermediate words — run it before shipping a new batch.
* **The flip no longer eats your keystrokes.** Letters typed while the previous row is still turning land in the next row, a word finished during that moment is held and sent the instant the row lands, and a full row you keep typing past is submitted for you. The flip itself is quicker too (`REVEAL_STAGGER` 150→70 ms, `REVEAL_LEN` 520→300 ms), so a two-minute round feels brisk rather than watched.
* Toast moved out of the middle of the board: it now sits at the bottom of the board area, just above the keyboard, so "2 moves from the goal" no longer covers the row you just played. Front-page and gate screens centre without clipping on a 320×568 viewport.

## 14. Choosing the daily word

Everything lives in one array near the top of `wooper/script.js`:

```js
const DAILY = [
  ["grade", "blame"],        // No. 1 · 2026-10-31 · par 3
  ["stilt", "slick"],        // No. 2 · 2026-11-01 · par 4
  ...
];
```

* **Order is the calendar.** Line N is issue No. N, and No. 1 is whatever `EPOCH_KEY` says (31 Oct 2026). Edit a line and that day changes for everyone.
* **You cannot break the game from here.** `par` is computed at runtime from the dictionary, and the comment is only for humans. A pair whose start can't reach its goal, or that isn't in the dictionary, is skipped and the generator takes the day.
* **Forgetting is fine.** Three ways to hand a day back to the automatic picker:
  * write `null` in that slot — that one day is generated,
  * leave the list short — everything past the end is generated,
  * delete nothing and just ship — the generator seeds from the date, so it is the same puzzle for everyone.
* **Before you commit:**
  ```
  python3 tools/validate-daily.py --pair STONE SLATE   # try a pair: par + shortest route + complaints
  python3 tools/validate-daily.py --table              # No. / date / pair / par for the whole list
  python3 tools/validate-daily.py                      # the gate: words, connectivity, par 3–5, no repeats, no obscure steps
  node tools/gen-daily.js --days 30 --mix 20,50,30     # draft the next 30 days, paste the block in
  ```
* **`--mix` is the difficulty dial.** It is the share of par 3 / 4 / 5 days. The shipped list is 41 / 28 / 21 — 46 % of days are the shortest possible ladder, which is the real reason the game feels gentle. `--mix 15,55,30` gives a season that leans on four- and five-move ladders.

## 15. Hints cost time — and short ladders get fewer

A hint used to be free and every ladder gave two. Now the count follows the par and each hint costs **15 seconds of the clock**, so the trade is real, so being stuck is a decision rather than a free peek. The price is announced four ways, none of which need a manual:

* **Short ladders hand out fewer hints**: `hintsByPar: { 3: 1, 4: 2, 5: 2 }` — a par-3 day gives you one, a par-4 or par-5 day gives you two. The badge in the header, the tooltip, the hint line and the rules all read from that one table, so a par-3 Monday really does show **1**.
* **First time anyone taps the hint icon**, a small card appears before anything is spent: *"Hints cost time — each hint takes 15 seconds off the clock. You have 1 hint left on this ladder."* with **Use a hint · −15s** and **Not now**. Dismiss it and nothing is charged; it asks again next time until the first hint is actually taken, then it never appears again (`wooper.v4.hintnoted`).
* **The icon itself** carries the price in its label and tooltip: `Hint (2 left) · costs 15 seconds`.
* **The clock flashes pink** for a moment as the seconds come off, so the loss is felt, not just read.
* **The persistent hint line** under the board reads `HINT · CHANGE LETTER 4 TO "M" · 1 LEFT · −15S`.
* **How to play** says it too, and that sentence is generated from the table: *"Par 3 gives you 1 hint, par 4 and 5 give you 2 hints"* — it can never drift from the config.

The floor is five seconds: a hint can't kill you outright, it can only leave you with very little time. Take a hint before you've typed anything and the seconds come off the moment the clock starts (2:00 becomes 1:45). Set `hintTimeCost: 0` to make hints free again. To change the allowance, edit `hintsByPar` — it's a plain table, so `{ 3: 1, 4: 1, 5: 2 }` gives one hint to everything short of a five-mover, and `{ 3: 1, 4: 2, 5: 3 }` rewards the long ladders. A par missing from the table falls back to `hintsPerGame` — that guard exists so an unlisted par can't produce a `NaN` badge or endless hints. The How-to-play sentence is built from the table plus every par in `minPar..maxPar`, so a par 6 day still gets a rule that covers it (`maxPar: 6` was tested and reads "par 4, 5 and 6 give you 2 hints"). The two knobs are independent.

## Tuning knobs

```js
const CONFIG = {
  minPar: 3,             // easiest daily ladder
  maxPar: 5,             // hardest daily ladder
  hintsPerGame: 2,       // hints per ladder · 1 = hard mode
  secondsPerLadder: 120, // the clock, in seconds
  hintTimeCost: 15,      // seconds off the clock per hint · 0 = free hints
};
const EPOCH_KEY = "2026-10-31";   // day No. 1 — change to your launch date
```

## Extra bits

* Undo and Restart are gone — the board is a record of your run.
* Progress and streaks live in `localStorage` (plus `wooper.v4.guest:<date>` once you skip the gate that day); nothing leaves your device unless you sign in.
* Accessibility: live-region toast, labelled buttons and keys, keyboard-only play.

---

## Recent changes

* **Pink means placed**: `#E7B0DE` now fills the correct tiles, orange stays "wrong spot", and the ruled-out tile is deep eggplant violet. The page itself is a light orchid wash, tiles are white boxes on it.
* **New front page** (mark · Wooper · streak sentence · Play · date · No.) before the board, in the style of the daily word games.
* **Issue number anchored to launch**: 31 Oct 2026 is **No. 1**, so nobody sees an arbitrary "669" on day one.
* **Midnight is now local**, not UTC — the ladder rolls over at 00:00 in your timezone, with a puzzle number on the splash and in the footer countdown.
* **Typography reworked**: serif only for display text, a plain grotesque everywhere else, sentence-case pill buttons, tighter tracking.
* Share emoji updated to `🩷🟧🟪`.
* **Icon-bar header** (back · logo · hint/stats/help/settings), **candy-pink board screen** at `#FFB7D6`, and an optional **email account** for streak sync (Supabase, see `SETUP.md`).
* **Hints now cost 15 seconds and vary by par** (§15): `hintsByPar: { 3: 1, 4: 2, 5: 2 }`, a first-use notice, the price on the button, a flashing clock, and the price printed in the hint line and the rules.
* **Developer tooling for the word list**: `DAILY` documented in §14, `tools/validate-daily.py` gained `--pair` and `--table`, `tools/gen-daily.js` drafts a run with a `--mix` par split, and `hintTimeCost` was added as an optional price on hints.
* **Sign-in gate before the front page**, **one pink theme** (dark mode removed), **deep pink `#C2185B` for placed letters**, **today's pair + par on the front page**, and a **curated 90-day `DAILY` table** with `tools/validate-daily.py` guarding it.
* **Header rebuilt**: logo + issue line, streak pill, route card with START/GOAL labels, single-line status row with a `PAR BEATEN` badge instead of three competing labels.
