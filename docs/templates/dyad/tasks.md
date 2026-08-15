# Dyad (ColorLib Calendar 18) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dyad`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 18" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-18/). Single occurrence
  in TEMPLATES.md (line 702, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Dyad** (series renames so far:
  chronos, metronome, kalends, span, equinox, interval, lunar, epoch).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-18/`
  — HTTP 200, tiny 13.3KB DOM (no nav, no footer, no images, no icon fonts)
  - `css/style.css` (886B = Bootstrap-reset boilerplate, byte-identical to
    calendar-17's) + `css/rome.css` (1.7KB Rome.js picker skin, also
    byte-identical). **Gotcha:** the standard path
    `https://preview.colorlib.com/theme/calendar-18/` 404s — the Bootstrap
    series is served under the `/theme/bootstrap/` prefix; `products.js` has
    no calendar entries at all.
  - Rendered LIVE in a browser and the interaction verified end-to-end:
    - Clicking day 10 in the FROM calendar set the Check in input to
      `August 10, 2026` and disabled 15 days (Jul 26–31 + Aug 1–9) in the
      TO calendar.
    - Clicking day 20 in the TO calendar set the Check out input to
      `August 20, 2026` and disabled 16 days (Aug 21–31 + Sep 1–5) in the
      FROM calendar.
    - Clicking day 5 in the FROM calendar set the Check in input to
      `August 05, 2026` — the `MMMM DD, YYYY` format ZERO-PADS the day
      (`DD`), verified against the live demo.
- **Screenshot:** `calendar-18.jpg` (1200×972 AVIF, converted + viewed in
  browser) — ultra-minimal: very light grey page, centered heading
  "Calendar #7 (Inline + Result + Range)", two grey rounded disabled inputs
  (placeholders "Check in" / "Check out"), TWO white cards floating on soft
  drop shadows, each showing "February 2021" with `<`/`>` arrows, weekday
  row (Su Mo Tu We Th Fr Sa — no "Me" typo), 7-column day grid, day 16
  salmon-pink circle with white text in BOTH cards, pre-16 days greyed in
  both. Inputs are EMPTY in the screenshot (placeholders visible) even
  though a day is preselected — they fill only after a day is clicked.
- **Visual design:** clean, flat, two-tone (salmon pink + white + dark
  grey on light grey). Zero decorative elements — fidelity means restraint:
  no navbar, no hero, no newsletter, no icon chips. The ONLY interactivity
  is the dual date-range picker (select from/to days, navigate months
  independently) + the two result echoes.
- **Difference vs Epoch (calendar-17):** Epoch has ONE calendar + ONE
  result input; this demo is the RANGE variant — TWO calendars side by side
  (`.col-lg-6` each, stacked below 992px), TWO result inputs ("Check in" /
  "Check out"), and mutual validation (`rome.val.beforeEq` / `afterEq`).
  Everything else (CSS, card, tokens) is identical to Epoch's. Implementers:
  copy the Epoch date-picker logic twice and add the range coupling — do NOT
  re-derive the calendar grid math from scratch.
- **Date logic:** source `js/main.js` runs
  `rome(inline_cal_from, {time: false, inputFormat: 'MMMM DD, YYYY',
dateValidator: rome.val.beforeEq(inline_cal_to)}).on('data', function
(value) { result_from.value = value; })` and the mirror
  `rome(inline_cal_to, {... dateValidator: rome.val.afterEq(inline_cal_from)})`.
  Recreation: pure-React, two month-grid components:
  - State per calendar: `viewDate` (year+month shown, default today) and
    `selectedDate` (Date, default today — BOTH calendars preselect today).
  - Coupling state: `fromDate` (default today) and `toDate` (default today).
    From-calendar disables days > `toDate`; to-calendar disables days
    < `fromDate`. (Live behavior check: with both defaulting to today, the
    to-calendar renders pre-today days disabled on first load — matches the
    live DOM.)
  - `vi.setSystemTime(new Date('2026-08-15T12:00:00'))` in tests → "August
    2026" labels, 15 selected in both, deterministic assertions;
    `vi.useRealTimers()` afterwards.
  - Grid math: first day of month's weekday (Sunday-start), days-in-month;
    leading cells = last N days of previous month, trailing cells = first M
    days of next month; 5 or 6 rows, never empty cells.
  - Format helper: `formatResultDate(d)` → "MMMM DD, YYYY" (e.g. "August
    15, 2026"); the `DD` token ZERO-PADS — day 5 renders "August 05, 2026"
    (verified live against the demo).
  - Edge cases to test: Sunday-start month (leading 0), Saturday-start
    month (leading 6 → 6 rows), Dec→Jan and Jan→Dec navigation (year
    rollover), leap February, re-picking the from-date re-locking the
    to-calendar.
- **Footer:** the source has none; the monorepo mandate still requires the
  "Component Dock" footer link → https://www.componentdock.com/. Keep it
  minimal (single centered line, `#6c757d`-ish grey) so it doesn't fight
  the minimal aesthetic.

## Design tokens (from `css/rome.css` + `css/style.css` + live computed styles)

| Token            | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| Brand / selected | `#f67280` salmon pink (selected-day circle)                        |
| Page bg          | `#efefef` very light grey                                          |
| Card bg          | `#ffffff`, padding 10px                                            |
| Card shadow      | `0 15px 30px 0 rgba(0,0,0,0.2)`                                    |
| Text             | `#212529` (labels, weekday heads, current-month days)              |
| Adjacent-month   | `#ccc` faint grey                                                  |
| Disabled day     | `#fcc` pinkish grey, `cursor: default` (out-of-range days)         |
| Result input bg  | `#e9ecef` (disabled fill) · border `#ced4da` · radius `0.25rem`    |
| Result inputs    | flex row, each `margin: .5rem` + `margin-bottom: 1rem`             |
| Font             | Roboto (300/400/500/700 via Google Fonts link)                     |
| Heading h2       | 20px, weight 500, `#212529`, centered, `margin-bottom: 3rem`       |
| Section padding  | `7rem 0` (Tailwind `py-28`)                                        |
| Month label      | 16px, weight 400, `#212529`, centered                              |
| Nav arrows       | lucide ChevronLeft / ChevronRight, aria-labels                     |
| Weekday heads    | 16px, weight 700, `#212529`                                        |
| Day cells        | 50×50px, `line-height: 0`, `text-align: center`, `cursor: pointer` |
| Selected day     | `#f67280` bg, `#fff` text, `border-radius: 50%`                    |

## Implementation tasks (in order)

1. **Scaffold** — `cp -r apps/epoch apps/dyad` (closest sibling: same card,
   tokens, single calendar logic); rename package to
   `@free-react-templates/dyad` in package.json; `public/CNAME` =
   `dyad.free.componentdock.com`; homepage =
   `https://dyad.free.componentdock.com`; register workspace
   (`npm install --package-lock-only`).
2. **Theme** — index.css `@theme`: `--color-brand: #f67280;` keep neutral
   greys; index.html: Google Fonts Roboto 300/400/500/700 link; remove any
   copied assets.
3. **Calendar grid component** — extract the Epoch month-grid into a
   reusable `CalendarGrid` (props: viewDate, selectedDate, minDate,
   maxDate, onSelect, ariaLabel) — 50×50 cells, adjacent-month fill,
   disabled rendering, today circle.
4. **Dyad page** — heading "Select Your Dates", flex row of the two
   disabled inputs ("Check in"/"Check out"), two CalendarGrids side by side
   (`lg:grid-cols-2`, stacked below), range coupling state (from ≤ to),
   format helper with zero-padded `DD`.
5. **Tests** — port Epoch's grid tests (both calendars), then add: dual
   render, independent navigation, range lock scenarios (from locks to,
   to locks from, re-pick re-locks), echo into both inputs, zero-padded
   "August 05, 2026" assertion, responsive stacking, footer link. 100%
   coverage required.
6. **Gate + ship** — `scripts/verify-app.sh dyad`; PR
   `feat/template-dyad` with source slug + preview URL + tokens + what
   differs (renames, placeholders); squash-merge immediately; bookkeeping
   `[x]` on TEMPLATES.md line 702 + surge URL
   `https://dyad.free.componentdock.com` + `npm run readme:status`.

## Verification checklist

- [ ] Live preview reachable at
      `https://preview.colorlib.com/theme/bootstrap/calendar-18/`
      (bootstrap prefix, NOT the standard path)
- [ ] Section order 1:1: h2 → flex inputs → two cards (grids)
- [ ] Tokens: `#f67280`, `#efefef`, `#fff` cards, `#212529`, `#ccc`,
      `#fcc`, Roboto, 50×50 cells, shadow, `py-28`
- [ ] Range coupling behaves exactly as the live demo (verified numbers:
      from=10 → to disabled 15 cells; to=20 → from disabled 16 cells)
- [ ] Format `MMMM DD, YYYY` with zero-padded day ("August 05, 2026")
- [ ] No colorlib strings in app code; footer → componentdock.com
- [ ] `scripts/verify-app.sh dyad` green; 100% coverage
