# Lunar (ColorLib Calendar 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lunar`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 16" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-16/). Single occurrence
  in TEMPLATES.md (line 700, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Lunar**.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-16/`
  — HTTP 200, tiny 12.9KB DOM (no nav, no footer, no images, no icon fonts)
  - `css/style.css` (886B = Bootstrap-reset boilerplate) + `css/rome.css`
    (1.7KB Rome.js picker skin). **Gotcha:** the standard path
    `https://preview.colorlib.com/theme/calendar-16/` 404s — the Bootstrap
    series is served under the `/theme/bootstrap/` prefix; `products.js` has
    no calendar entries at all.
- **Screenshot:** `calendar-16.jpg` (1200×972 AVIF, converted + viewed in
  browser) — ultra-minimal: very light grey page, centered heading
  "Calendar #6 (Inline)", one white card floating on a soft drop shadow:
  month header "February 2021" with `<`/`>` arrows, weekday row, 7-column
  day grid, selected date (16) as a salmon-pink circle with white text.
  Vision note: the old demo's weekday row shows "Me" for Monday — that is a
  TYPO in the screenshot; the live DOM renders "Mo". Use "Mo".
- **Visual design:** clean, flat, two-tone (salmon pink + white + dark
  grey on light grey). Zero decorative elements — fidelity means restraint:
  no navbar, no hero, no newsletter, no icon chips. The ONLY interactivity
  is the date picker itself (select a day, navigate months).
- **Date logic:** source `js/main.js` (one line) runs
  `rome(inline_cal, { time: false });` — Rome.js v2.1.22 renders an inline
  calendar (no time picker), defaulting to the current month with TODAY
  selected. Recreation: implement a pure-React month grid:
  - State: `viewDate` (year+month shown, default today) and `selectedDate`
    (Date, default today).
  - `vi.setSystemTime(new Date('2026-08-15T12:00:00'))` in tests → "August
    2026" label, 15 selected, deterministic assertions; `vi.useRealTimers()`
    afterwards.
  - Grid math: first day of month's weekday (Sunday-start), days-in-month;
    leading cells = last N days of previous month, trailing cells = first M
    days of next month; 5 or 6 rows, never empty cells.
  - Edge cases to test: Sunday-start month (leading 0), Saturday-start
    month (leading 6 → 6 rows), Dec→Jan and Jan→Dec navigation (year
    rollover), leap February.
- **Footer:** the source has none; the monorepo mandate still requires the
  "Component Dock" footer link → https://www.componentdock.com/. Keep it
  minimal (single centered line, `#6c757d`-ish grey) so it doesn't fight
  the minimal aesthetic.

## Design tokens (from `css/rome.css` + `css/style.css` + live computed styles)

| Token            | Value                                                            |
| ---------------- | ---------------------------------------------------------------- |
| Brand / selected | `#f67280` salmon pink (selected-day circle)                      |
| Page bg          | `#efefef` very light grey                                        |
| Card bg          | `#ffffff`, padding 10px                                          |
| Card shadow      | `0 15px 30px 0 rgba(0,0,0,0.2)`                                  |
| Text             | `#212529` (labels, weekday heads, current-month days)            |
| Adjacent-month   | `#ccc` faint grey                                                |
| Font             | Roboto (Google Fonts: load 300, 400, 500, 700)                   |
| Heading          | 20px · weight 500 · `#212529` · centered · `margin-bottom: 3rem` |
| Month label      | 16px · weight 400 · `#212529` · centered                         |
| Weekday heads    | 16px · weight 700 (default th bold) · `#212529`                  |
| Day cells        | 50×50px · `line-height: 0` · `text-align: center` · pointer      |
| Selected day     | bg `#f67280` · `#fff` · `border-radius: 50%` (circle in cell)    |
| Grid             | `table.rd-days` margin-top 20px · 7 columns · 5–6 rows           |
| Nav arrows       | `←`/`→` 16px black (recreate: lucide ChevronLeft/Right)          |
| Section          | `padding: 7rem 0` (Tailwind `py-28`)                             |
| Card column      | `col-md-10` ≈ 83% centered on md+, content-sized card            |

## Implementation tasks (order)

1. Scaffold `apps/lunar` (copy the simplest existing app, e.g. `apps/appco`
   or another minimal one; rename package to `@free-react-templates/lunar`;
   `npm install` at repo root so package-lock.json registers the workspace).
2. `index.html`: title "Lunar", Google Fonts Roboto 300/400/500/700 link;
   `public/CNAME` = `lunar.free.componentdock.com`; package.json
   `homepage` = `https://lunar.free.componentdock.com`.
3. `src/index.css`: `@theme` token for brand `#f67280` (+ any semantic
   aliases); keep `injectUiSource()` in vite.config.ts (copy from source
   app).
4. `src/calendar.ts` (pure logic, fully unit-testable): month grid builder
   — `daysInMonth(year, month)`, `firstWeekday(year, month)` (Sunday=0),
   `buildMonthGrid(year, month)` → array of 5–6 rows × 7 cells
   `{ day, inMonth, date }`; `formatMonthLabel(year, month)` →
   "August 2026"; `isSameDay(a, b)`. Tests: boundary months, leap years,
   Sunday/Saturday starts, year rollover.
5. Components:
   - `DatePicker.tsx` — the picker card: month header (label +
     ChevronLeft/ChevronRight buttons with aria-labels "Previous month" /
     "Next month"), weekday header row (Su–Sa), day grid (`<table>` or
     CSS grid — semantic `<table>` matches the source and gives free
     a11y; cells as `<button>` for keyboard access), selected-day circle
     styling, adjacent-month cells muted. Props:
     `{ value: Date, onChange: (d: Date) => void }` (controlled) or
     self-contained with internal state.
   - `Footer.tsx` — Component Dock link (monorepo mandate).
   - `App.tsx` composes: section (bg `#efefef`, `py-28`) → centered heading
     "Pick a Date" → `DatePicker` → `Footer`.
6. Tests colocated per component; scenarios mirror the spec's Gherkin
   requirements (page composition, heading, card shell, month header +
   navigation, weekday row, day grid, selected date, responsive, footer).
   a11y: `getByRole('button', { name: 'Previous month' })`, day cells via
   `getByRole('button', { name: /^15/ })` — mind that adjacent-month cells
   share numbers with current-month cells of the same digit (assert within
   the current-month group or use `within(grid)`).
7. Gate: `scripts/verify-app.sh lunar` (typecheck + lint + knip + fallow +
   100% coverage + build). PR: `feat: add Lunar (ColorLib Calendar 16)`,
   merge immediately, then bookkeeping (`[x]` + surge URL + `readme:status`).

## Fidelity notes / pitfalls

- **No serif fonts, no images, no extra icons** — the design is pure CSS +
  two chevron glyphs; adding anything decorative breaks 1:1 fidelity.
- **Square card, not rounded** — the live DOM computes `border-radius: 0`
  on `.rd-container`; the perceived rounding in the screenshot is the
  shadow's soft edge. Keep square.
- **"Mo" not "Me"** — the screenshot's "Me" is a source typo from the old
  demo render; the live DOM says "Mo".
- **Selected day = today on first load** (Rome defaults), NOT the 16th from
  the screenshot — the screenshot was captured on a different day.
- **The selected circle is `border-radius: 50%` INSIDE the 50×50 cell** —
  the cell stays square; only the selected fill is circular.
- **5 vs 6 rows** is month-dependent (Sunday-start → 5 rows; Saturday-start
  → 6 rows) — never pad with empty cells; always fill with adjacent-month
  days, matching the source's `rd-day-prev-month` / `rd-day-next-month`.
- **Month navigation must NOT change the selection** (Rome keeps the picked
  date; the circle only shows when its month is visible).
- Testing Library: the label "August 2026" is unique, but day numbers
  repeat across months in the DOM when adjacent-month days are rendered —
  scope day queries with `within(monthBody)` or match the cell's full text
  (adjacent days render "26" while current-month days render "26" too —
  disambiguate by row position or add `data-in-month` attributes).
- lucide-react icon check: `node -e "console.log(typeof
require('lucide-react').ChevronLeft)"` → must print `function` (brand
  icons were removed, but these plain chevrons exist).
