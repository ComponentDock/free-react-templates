# Metronome (ColorLib Calendar 11) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-metronome`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 11" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-11/). Single occurrence
  in TEMPLATES.md (line 695, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Metronome**.
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/bootstrap/calendar-11/` — HTTP 200,
  13KB HTML (dominated by the inline cf-fonts @font-face block; visible body
  is ~10 elements). **Gotcha:** `https://preview.colorlib.com/theme/calendar-11/`
  404s (verified) — the Bootstrap series is served under the `/theme/bootstrap/`
  prefix (same as Calendar 10 / Chronos). Always use the `/bootstrap/` prefix
  for this series.
- **Static DOM (the WHOLE page):** `.content` → `.container.text-left` →
  `.row.justify-content-center` → `.col-lg-3` → `<h2 class="mb-5 text-center">`
  "Calendar #1 (Date Picker)" → `<form>` → `.form-group` →
  `<input type="text" class="form-control" id="pick-date" placeholder="Pick A Date">`.
  No navbar, no footer, no images, no icons.
- **Label quirk:** the h2 says "Calendar **#1** (Date Picker)" although the
  slug is calendar-11 — the label is stale in the source. Paraphrase as
  "Pick a Date" (keep the content-kind: heading + one date input). Do NOT
  reproduce the wrong number.
- **The picker popup is NOT in the static HTML.** pickadate.js
  (`picker.js` + `picker.date.js`; `$('#pick-date').pickadate()`) injects
  the whole popup (header, table, footer) at runtime. Recreation builds it
  as React state — a small date-grid component. NO pickadate/jQuery/Bootstrap
  dependency; use `new Date()` + a tiny helper set (see tasks).
- **Screenshot:** `calendar-11.jpg` (1200×972 AVIF, converted + viewed in
  browser) — flat minimalist: light-neutral page, centered heading
  "Calendar #1 (Date Picker)", one light-grey-bordered input ("Pick A Date"),
  and a floating WHITE rounded popup with subtle shadow: "February 2021"
  header + black `<`/`>` triangles, grey Sun–Sat weekday row, day grid with
  faint grey out-of-month days, selected day 16 on salmon `#f78b65`, footer
  Today/Clear/Close with small red accent icons. Vision note: the selected
  day reads "light pink/salmon" — that IS `#f78b65`, do not lighten it.
- **Visual design:** clean flat UI-widget aesthetic; neutral
  (white/greys/black) with ONE salmon accent `#f78b65` + soft peach hover
  `#f2d1c5`. Fidelity means restraint: no hero, no cards, no newsletter.
- **Date math:** grid = 6 rows × 7 cols starting on the first weekday of
  the month (Sunday-start, like pickadate); leading/trailing days from the
  adjacent months render faint (`#ddd`). Today = `#f78b65` corner triangle
  (top-right of the cell). Selected = `#f78b65` bg + white text. Tests MUST
  mock the clock (`vi.setSystemTime(new Date('2026-02-16T12:00:00'))`) so
  "February 2026" header + grid assertions are deterministic; remember
  `vi.useRealTimers()` after.
- **Input value format:** pickadate's default is "d mmmm, yyyy" (e.g.
  "16 February, 2026") — keep that format for the input after selection.
- **Footer:** the source has none; the monorepo mandate still requires the
  "Component Dock" footer link → https://www.componentdock.com/. Keep it
  minimal (single centered line, muted grey) so it doesn't fight the widget
  aesthetic.

## Design tokens (from `css/style.css` + `css/bootstrap.min.css` + pickadate `css/default.css`/`default.date.css`)

| Token                | Value                                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accent (brand)       | `#f78b65` salmon/orange — selected day bg, today triangle, focus borders                                                                                                                                              |
| Hover fill           | `#f2d1c5` soft peach — nav triangles, day hover, footer-button hover                                                                                                                                                  |
| Input active border  | `#0089ec` blue while picker open (`.picker__input--active`)                                                                                                                                                           |
| Page bg / text       | `#fff` page · `#000` body · `#999` muted (weekdays, year) · `#ddd` outfocus days · `#f5f5f5` disabled bg · `#b3b3b3` placeholder/paragraph                                                                            |
| Font                 | Roboto (Google Fonts: load 300, 400, 500, 700)                                                                                                                                                                        |
| Section              | `padding: 7rem 0` (Tailwind `py-28`); heading `mb-5` (3rem)                                                                                                                                                           |
| Column               | `col-lg-3` ≈ 25% centered on lg+, full width below                                                                                                                                                                    |
| Heading              | 20px · `#000` · weight 400 · centered                                                                                                                                                                                 |
| Input (form-control) | full width · `height: calc(1.5em + .75rem + 2px)` · `padding: .375rem .75rem` · `1rem`/400/1.5 · `#495057` · `border: 1px solid #ced4da` · radius `.25rem` · focus `#80bdff` + ring `0 0 0 .2rem rgba(0,123,255,.25)` |
| Picker box           | white · `border: 1px solid #777` (top `#898989`) · radius `5px 5px 0 0` · shadow `0 12px 36px 16px rgba(0,0,0,.24)` · width 256–666px · backdrop `rgba(0,0,0,.32)`                                                    |
| Header               | month+year weight 500 inline · year `#999` `.8em` italic · nav = black CSS-border triangles, hover `#f2d1c5`                                                                                                          |
| Weekday row          | `.75em` · `#999` · weight 500 · pb `.25em` (`.5em` tall screens)                                                                                                                                                      |
| Day cells            | weight 200 · `padding: .3125em 0` · today corner triangle `#f78b65` · selected `#f78b65` bg + white · hover `#f2d1c5` · outfocus `#ddd`                                                                               |
| Footer buttons       | Today/Clear/Close · `33%` width · white bg · `.8em` · weight 700 · hover `#f2d1c5` · focus outline `#f78b65` · icons: `#f78b65` triangle / `#e20` line / `×` `#777`                                                   |

## Implementation tasks (order)

1. Scaffold `apps/metronome` (copy the simplest existing app, e.g. `apps/appco`
   or another minimal one; rename package to `@free-react-templates/metronome`;
   `npm install` at repo root so package-lock.json registers the workspace).
2. `index.html`: title "Metronome", Google Fonts Roboto 300/400/500/700 link;
   `public/CNAME` = `metronome.free.componentdock.com`; package.json
   `homepage` = `https://metronome.free.componentdock.com`.
3. `src/index.css`: `@theme` token for brand `#f78b65` (+ hover `#f2d1c5`
   alias); keep `injectUiSource()` in vite.config.ts (copy from source app).
4. `src/lib/date.ts` (helpers + tests):
   - `monthLabel(date)` → "February 2026" (month name + year).
   - `weekdayLabels` → Sun..Sat.
   - `buildGrid(year, month)` → 42 cells (6×7, Sunday-start) with
     `{ day, inMonth }`; leading/trailing adjacent-month days flagged
     `inMonth: false`.
   - `formatDate(date)` → "d mmmm, yyyy" (e.g. "16 February, 2026").
   - `isSameDay(a, b)` for selected/today comparisons.
   - Tests: `vi.setSystemTime` fixed date (e.g. 2026-02-16); grid offsets
     (month starting on Sunday vs other weekdays), leap-year February,
     year-boundary navigation (Dec → Jan), 11/12/13 ordinal NOT needed here
     (format is "d mmmm, yyyy" without ordinal).
5. Components:
   - `DateInput.tsx` — the `.form-control` input (placeholder "Pick A Date"),
     `aria-expanded` + `aria-haspopup="dialog"`, opens the picker on focus.
   - `DatePicker.tsx` — the popup: header (month/year + prev/next CSS-triangle
     buttons), weekday row, 6×7 grid, footer (Today/Clear/Close). Backdrop
     `rgba(0,0,0,.32)`; closes on Esc / backdrop click / day select / Close.
     Selected + today logic via helpers.
   - `Footer.tsx` — Component Dock link (monorepo mandate).
   - `App.tsx` composes: section (bg `#fff`, `py-28`) → centered heading
     "Pick a Date" → `DateInput` + `DatePicker` → `Footer`.
6. Tests colocated per component; scenarios mirror the spec's Gherkin
   requirements (page composition, heading, input, open/close, header+nav,
   weekday row, day grid, today/selected, footer buttons, footer link).
7. Gate: `scripts/verify-app.sh metronome` (typecheck + lint + knip + fallow +
   100% coverage + build). PR: `feat: add Metronome (ColorLib Calendar 11)`,
   merge immediately, then bookkeeping (`[x]` + surge URL + `readme:status`).

## Fidelity notes / pitfalls

- **No pickadate/jQuery/Bootstrap** — the popup is React state + CSS. The
  static source HTML has only the input; everything else is injected at
  runtime by the library, so the DOM you saw IS the whole reference.
- **Icons are pure CSS/glyphs** — nav triangles are border tricks, Close is
  a `×` character, Today/Clear are tiny CSS shapes. Don't add lucide icons
  unless it complicates the layout; CSS triangles match 1:1.
- **Don't "fix" the stale label** — paraphrase to "Pick a Date" (content-kind
  preserved) rather than copying "Calendar #1 (Date Picker)" verbatim; and
  never write the wrong number.
- The salmon `#f78b65` looks pinkish in the screenshot — keep the exact hex.
- Input value format is pickadate's "d mmmm, yyyy" — no ordinal suffix
  (unlike Chronos's "15th").
- Sunday-start week (picker's default `firstDay: 0`), not Monday-start.
- Keyboard: Esc closes; arrows optional but nice (grid focus management).
- `getByText` collisions: the header "February 2026" and a selected day "16"
  can both appear in the input value — use exact matchers / role queries
  (`getByRole('button', { name: /next/i })`, `getByLabelText`).
