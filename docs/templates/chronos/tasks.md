# Chronos (ColorLib Calendar 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-chronos`.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 10" — a "Bootstrap Calendars" demo
  (source: https://colorlib.com/wp/template/calendar-10/). Single occurrence
  in TEMPLATES.md (line 694, "Bootstrap Calendars (20)" category — no dup
  rows). Recreation uses the NEW name **Chronos**.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-10/`
  — HTTP 200, tiny 3.2KB DOM (no nav, no footer, no images, no icons) +
  `css/style.css` (220KB = Bootstrap 4.3.1 + ~90 lines of custom ftco styles
  from line ~8135). **Gotcha:** `https://preview.colorlib.com/theme/calendar-10/`
  404s — the Bootstrap series is served under the `/theme/bootstrap/`
  prefix; `products.js` has no calendar entries at all. (If a future
  Bootstrap-series prep 404s on the standard path, try the `/bootstrap/`
  prefix first.)
- **Screenshot:** `calendar-10.jpg` (1200×972 AVIF, converted + viewed in
  browser) — ultra-minimal: pale grey-blue page, centered heading "Calendar
  #10", one stacked card: mint-green band "SATURDAY" (white uppercase
  letterspaced) / white "December" (thin) + "19th" (huge thin) / mint-green
  band "2020". Soft drop shadow. Vision note: the big numeral reads
  "serif-like" — it is Lato weight-100/300 at 3em; do NOT add an actual serif
  font.
- **Visual design:** clean, flat, high-contrast two-tone (mint green +
  white + black on pale grey). Zero decorative elements — fidelity means
  restraint: no navbar, no hero, no newsletter, no icon chips.
- **Date logic:** source `js/main.js` (3178B, SpYk3HH date helper) fills
  `.day` (full weekday name), `.date` (day + ordinal suffix "st/nd/rd/th"),
  `.month` (full month name), `.year` (4-digit) from `new Date()` at load.
  Recreation: compute in a `useMemo`/helper on mount; tests MUST mock the
  clock (`vi.setSystemTime(new Date('2026-08-15T12:00:00'))`) so "Saturday
  / August / 15th / 2026" assertions are deterministic; remember to
  `vi.useRealTimers()` after.
- **Footer:** the source has none; the monorepo mandate still requires the
  "Component Dock" footer link → https://www.componentdock.com/. Keep it
  minimal (single centered line, `#6c757d`-ish gray or brand green text) so
  it doesn't fight the minimal aesthetic.

## Design tokens (from `css/style.css` tail, the custom ftco section)

| Token       | Value                                                                           |
| ----------- | ------------------------------------------------------------------------------- |
| Brand       | `#52de97` mint green (day/year bands, links, `.bg-primary`)                     |
| Page bg     | `#f8f9fd` pale blue-grey                                                        |
| Card bg     | `#ffffff`                                                                       |
| Text        | `#000` (headings, date) · `gray` (body)                                         |
| Font        | Lato (Google Fonts: load 100, 300, 400, 700, 900)                               |
| Card shadow | `0 15px 30px -16px rgba(0,0,0,0.3)`                                             |
| Radius      | `0.25rem` (outer corners only; middle pieces square)                            |
| Day/year    | 0.65em · weight 500 · `letter-spacing: 0.35em` · uppercase · white on `#52de97` |
| Month       | 1.5em · weight 200 · pt 1.75rem, pb 0                                           |
| Date        | 3em · weight 100 · pb 1.75rem, pt 0 · `#000`                                    |
| Heading     | 28px · `#000` · weight 400 · centered                                           |
| Section     | `padding: 7em 0` (Tailwind `py-28`)                                             |
| Card column | `col-md-4` ≈ 33% centered on md+, full width below                              |

## Implementation tasks (order)

1. Scaffold `apps/chronos` (copy the simplest existing app, e.g. `apps/appco`
   or another minimal one; rename package to `@free-react-templates/chronos`;
   `npm install` at repo root so package-lock.json registers the workspace).
2. `index.html`: title "Chronos", Google Fonts Lato 100/300/400/700/900 link;
   `public/CNAME` = `chronos.free.componentdock.com`; package.json
   `homepage` = `https://chronos.free.componentdock.com`.
3. `src/index.css`: `@theme` token for brand `#52de97` (+ any semantic
   aliases); keep `injectUiSource()` in vite.config.ts (copy from source app).
4. `src/data.ts` (or inline): date helper — `weekdayName`, `monthName`,
   `dayWithOrdinalSuffix` (handle 11/12/13 → "th"), `year` from `new Date()`.
   Tests: `vi.setSystemTime` fixed date; suffix edge cases (1st, 2nd, 3rd,
   11th, 12th, 13th, 21st, 22nd, 23rd, 31st).
5. Components (small — this is a one-section template):
   - `DateCard.tsx` — the `.today` card: 4 pieces (DayBand / MonthPiece /
     DatePiece / YearBand) OR one `DateCard` + `DatePiece` subcomponents;
     flush stack, radius, shadow.
   - `Footer.tsx` — Component Dock link (monorepo mandate).
   - `App.tsx` composes: section (bg `#f8f9fd`, `py-28`) → centered heading
     "Today" → `DateCard` → `Footer`.
6. Tests colocated per component; scenarios mirror the spec's Gherkin
   requirements (page composition, heading, card shell, day band, month,
   date, year band, date logic, responsive, footer).
7. Gate: `scripts/verify-app.sh chronos` (typecheck + lint + knip + fallow +
   100% coverage + build). PR: `feat: add Chronos (ColorLib Calendar 10)`,
   merge immediately, then bookkeeping (`[x]` + surge URL + `readme:status`).

## Fidelity notes / pitfalls

- **No serif font** — the thin large numeral is Lato at weight 100/300.
- **No icons/images at all** — adding any decorative element breaks 1:1
  fidelity; the source is pure CSS.
- Letter-spacing `0.35em` on the day/year bands is the signature detail —
  don't shrink it (`tracking-[0.35em]`).
- The card is NOT a bordered box — the green bands touch the card edges
  (top band: rounded top corners only; bottom band: rounded bottom corners
  only; month/date pieces: square).
- Keep the heading as the ONLY text above the card (no blurb/subtitle).
- `getByText` collisions: "Saturday" appears once; but if the year/month
  text could match the footer, anchor queries with exact matchers.
