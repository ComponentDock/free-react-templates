# Almanac (ColorLib Calendar 03) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Almanac** (NEW name —
> the ColorLib source keeps its name "Calendar 03"). Implementation ships on
> `feat/template-almanac` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Calendar 03" — free Bootstrap calendar widget
  template (source: https://colorlib.com/wp/template/calendar-03/).
  TEMPLATES.md row: line 687 (**Bootstrap Calendars (20)**). The
  `calendar-03` slug appears exactly once (no dup rows to mark). Family
  siblings: "Calendar 01" was prepped as **Planner**
  (`openspec/specs/template-planner/`), "Calendar 02" as **Monthly**
  (`openspec/specs/template-monthly/`) — this prep is the third of the
  family; same category, different widget (Planner = single card + blue
  weekday bar; Monthly = two-panel green/white vertical card; Almanac =
  TWO side-by-side white calendar cards with range selection).
- **✅ Live preview REACHABLE (verified 2026-08-14):** the DEFAULT
  `https://preview.colorlib.com/theme/calendar-03/` returns **HTTP 404**,
  but the real preview lives at
  **`https://preview.colorlib.com/theme/bootstrap/calendar-03/`** (the
  `/theme/bootstrap/` path pattern established by the Monthly prep — the
  whole Calendar family previews under it). Captured: rendered DOM
  (`/tmp/cal03/preview.html`, ~4.5KB), `css/style.css` (~222KB Bootstrap
  bundle; the template's own rules are at the tail, lines ~8135–8300), and
  `js/main.js` (~12.4KB, vanilla jQuery). **All token hexes below come from
  the live stylesheet — current ground truth.**
- **✅ Screenshot analysis (calendar-03.jpg, 1200×972, browser visual
  inspection):** a browser window showing the single widget on `#f8f9fd`.
  Title **"Calendar #03"** centered near-black. Two month grids side by
  side: **"DECEMBER 2020"** | **"JANUARY 2021"** (uppercase headers, faint
  chevrons flanking). Weekday labels Sun–Sat 3-letter (medium gray in the
  2020-era render — the live CSS says black bold; **use the live CSS
  value**). December grid: dates 1–18 lighter/fainter gray (past-date
  state), **19 = solid purple/lavender square with white text** (the
  capture-date "today"), January all dark/selectable. The two cards read
  visually as one unified white area with a soft diffuse shadow (each
  `.calendar` card carries its own `0 4px 26px -22px rgba(0,0,0,0.14)`
  shadow; at 1200px they sit flush and merge). No navbar/hero/images/
  footer (add the Component Dock footer per repo convention).
- **✅ Reference view decision (like Planner/Monthly):** pin a FIXED
  reference "today" = **19 December 2020** (the screenshot's capture
  date) so the initial render matches the screenshot 1:1 and tests are
  deterministic. The lockstep pair starts at **December 2020 (left) +
  January 2021 (right)**. The purple today square renders on 19 only when
  December 2020 is one of the viewed months.
- **✅ Calendar facts (verified 2026-08-14 via `new Date`):** 1 Dec 2020 =
  **Tuesday** → 2 leading blanks (Sun, Mon); **19 Dec 2020 = Saturday**;
  31 Dec 2020 = Thursday; December = 31 days. 1 Jan 2021 = **Friday** → 5
  leading blanks (Sun–Thu); 31 Jan 2021 = Sunday; January = 31 days.
  Adjacent months: Nov 2020 = 30 days, 1 Nov = Sunday (no leading blanks);
  Feb 2021 = 28 days, 1 Feb = Monday (1 leading blank). Use these in tests.
- **Signature:** DUAL-CALENDAR DATE-RANGE PICKER — two identical flat
  white cards side by side (each max-width 585px, padding 10px, NO border
  radius, soft shadow), ONE accent color lavender-purple `#bd83ce` (today
  square, link color, chevron hover — nothing else), Lato, page `#f8f9fd`.
  Range selection spans BOTH calendars; past dates disabled; chevrons on
  either card shift both months in lockstep.
- **Exact structure (1:1 from the live reference DOM):**
  1. **Title** — "Calendar #03" (source-exact, keep the `#03`), centered,
     near-black, 28px.
  2. **Two calendar cards** (`.calendar.calendar-first` /
     `.calendar.calendar-second`, each in a `.col-md-6` inside
     `.calendar-section` → `.row.no-gutters`):
     - **Month header** (`.calendar_header`, height 55px, centered) —
       **"DECEMBER 2020"** / **"JANUARY 2021"** uppercase 18px bold
       near-black; **chevron buttons** (`button.switch-month`, 40×40px,
       transparent, no border, absolutely positioned at vertical center,
       left 0 / right 0) with Font Awesome `fa-chevron-left` /
       `fa-chevron-right` icons in `#cccccc`, hover → `#bd83ce`.
     - **Weekday row** (`.calendar_weekdays`) — `Sun Mon Tue Wed Thu Fri
Sat` (3-letter, `.substring(0,3)` of the full names), 7 equal
       columns (14.28571% each), black bold.
     - **Date grid** (`.calendar_content`) — exactly **42 cells** (6×7),
       each 68px tall / line-height 69px, numbers centered; leading blank
       cells align the 1st (`new Date(y, m, 1).getDay()`); trailing
       blanks fill 42; cells have `border-radius: 5px` and a transparent
       1px border (hover → `#ededed`).
  3. **Footer** — minimal muted "More templates at Component Dock" linking
     https://www.componentdock.com/ (repo convention; original has none).
- **Palette (live CSS ground truth):** page `#f8f9fd` · brand purple
  `#bd83ce` (today square + link + chevron hover) · card white `#ffffff` ·
  ink `#000000` (title, headers, weekday labels, active dates) · past-date
  `#d5d5d5` · selected fill `rgba(153,153,161,0.2)` + 1px white border ·
  chevron idle `#cccccc` · hover border `#ededed` · card shadow
  `0 4px 26px -22px rgba(0,0,0,0.14)`.
- **Font:** **Lato** 300/400/700 (the live stylesheet's family, served via
  Cloudflare cf-fonts in the original) → load via Google Fonts `<link>` in
  `index.html`. Sizes: title 28px · month header 18px bold uppercase ·
  weekday labels 16px bold · dates 16px (today 18px bold white) · body
  16px/1.8 gray.
- **Reference behavior (from js/main.js) to reproduce:**
  - Initial pair: calendar 1 = current month, calendar 2 = FOLLOWING
    month (lockstep). Reference view = Dec 2020 | Jan 2021.
  - **Range selection:** 1st click selects a date; 2nd click selects the
    RANGE between (both grids searched, all between get `.selected`);
    re-click the same date deselects; 3rd click inside the range replaces
    the second endpoint, outside resets and starts over. Past dates are
    excluded.
  - **Month nav:** chevrons on EITHER card shift BOTH months: left →
    previous pair, right → next pair; year rollover via `% 12` at the
    December/January boundary.
  - **Today:** purple square renders only in the month containing the
    reference today (Dec 2020).
  - Past dates (`< today`): `#d5d5d5`, cursor default, click ignored.
- **Implementation pointers (Tailwind v4):**
  - Components: `App.tsx` (page + footer) + one widget component, e.g.
    `src/components/Calendar.tsx` (renders one card, takes `viewDate`
    prop + callbacks) used twice, or a `DualCalendar.tsx` wrapper holding
    the month-pair state. No Navbar/Hero — none in the reference.
  - Palette in `src/index.css` `@theme`: `--color-brand: #bd83ce`,
    `--color-page: #f8f9fd`, `--color-ink: #000000`, `--color-past:
#d5d5d5`, `--color-selected: rgba(153,153,161,0.2)` (or use
    `bg-black/10`-style utility equivalents — but a token keeps tests
    simple).
  - State: `viewMonth` (left card's year/month) + `selected`
    (`Date | null` pair / range endpoints). Left = `viewMonth`, right =
    `addMonths(viewMonth, 1)`. Reference today = `new Date(2020, 11, 19)`
    (fixed). Derived grid: leading blanks `new Date(y, m, 1).getDay()`,
    days-in-month `new Date(y, m+1, 0).getDate()`, pad to 42 cells.
    Chevrons: `setViewMonth(addMonths(viewMonth, ∓1))` — one handler
    pair shared by both cards (lockstep for free).
  - Grid: `grid grid-cols-7`, cells `h-[68px]` centered
    (`flex items-center justify-center`); leading/trailing blanks render
    as empty non-interactive cells; dates as `<button>` per cell.
  - Date states: past (`< referenceToday`) → `text-past` + disabled;
    today → `bg-brand text-white font-bold text-lg rounded-[5px]`;
    selected/range → `bg-[rgba(153,153,161,0.2)] border border-white`;
    hover → `border-[#ededed]` + pointer.
  - Header: `relative h-[55px] flex items-center justify-center`;
    h2 uppercase 18px bold; chevrons: `lucide-react`
    `ChevronLeft`/`ChevronRight`, 40×40px hit targets, absolute
    left-0/right-0, `text-[#cccccc] hover:text-brand`,
    `aria-label="Previous month"`/`"Next month"`.
  - Range logic (pure functions = easy 100% coverage): `isPast(d)` vs
    reference today; `inRange(d, start, end)`; click handler: no
    selection → start; one endpoint → set end (normalize order) +
    compute range; same-date re-click → clear; third click → in-range
    adjusts end / out-of-range resets.
  - Card: `max-w-[585px] min-w-[320px] mx-auto bg-white p-2.5 shadow-
[0_4px_26px_-22px_rgba(0,0,0,0.14)]` (no radius); row:
    `grid gap-0 md:grid-cols-2` or `flex flex-col md:flex-row`; page
    `min-h-screen bg-page py-28 px-4`.
  - Footer: minimal muted "More templates at Component Dock" →
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap, no jquery, no Font Awesome (lucide-react chevrons). No
    ColorLib strings anywhere in `apps/almanac` (provenance lives only in
    the spec + this doc + the PR).
  - Import `cn()` from `@free-react-templates/ui` (packages/ui — knip
    gate).
  - jsdom note: no `localStorage` in jsdom 30 — the original persists
    nothing to storage anyway; keep all state in React (no storage, no
    polyfill needed).

## Tasks (implementer checklist)

1. [ ] `feat/template-almanac` branch from latest main
2. [ ] Scaffold `apps/almanac` (copy the simplest existing app; package
       `@free-react-templates/almanac`; `public/CNAME` =
       `almanac.free.componentdock.com`; `"homepage"` =
       `https://almanac.free.componentdock.com`)
3. [ ] `npm install` at repo root so `package-lock.json` registers the
       workspace; verify `grep -c "free-react-templates/almanac"`
       package-lock.json
4. [ ] `vite.config.ts` with `injectUiSource()` (per conventions)
5. [ ] Spec-first: `openspec/specs/template-almanac/spec.md` is the
       contract — Gherkin scenarios map 1:1 to test cases
6. [ ] TDD: write tests (RED) → implement (GREEN) → 100% coverage
       (lines/functions/branches/statements); calendar logic (leading
       blanks, days-in-month, addMonths rollover, lockstep pair,
       range-inclusion) is easy to unit-test as pure functions
7. [ ] Run `scripts/verify-app.sh almanac` until green (typecheck + lint +
       knip + fallow + vitest 100% + build)
8. [ ] Self-review per `docs/self-review.md`
9. [ ] PR to main with description: source template (ColorLib "Calendar
       03"), preview URL
       (**https://preview.colorlib.com/theme/bootstrap/calendar-03/** — the
       default `/theme/calendar-03/` 404s; note the `/bootstrap/` path),
       design tokens used (brand `#bd83ce`, page `#f8f9fd`, ink
       `#000000`, past `#d5d5d5`, selected `rgba(153,153,161,0.2)`; live
       CSS values preferred over the 2020 screenshot's lighter weekday
       gray), font Lato 300/400/700 via Google Fonts, interactions added
       (lockstep month nav + two-click range selection across both
       calendars), "Calendar #03" title kept source-exact, fixed reference
       today 2020-12-19 for screenshot-1:1 initial render
10. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
11. [ ] After merge: TEMPLATES.md `[~]` → `[x]` + surge URL
        (`almanac.free.componentdock.com`) + `npm run readme:status`; push
        (mark line 687 — Bootstrap Calendars (20) category; single row, no
        dups)
