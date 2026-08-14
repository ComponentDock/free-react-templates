# Monthly (ColorLib Calendar 02) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Monthly** (NEW name —
> the ColorLib source keeps its name "Calendar 02" / "Calendar V02").
> Implementation ships on `feat/template-monthly` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Calendar V02" (listing "Calendar 02") — free
  "vertical" Bootstrap calendar widget template (source:
  https://colorlib.com/wp/template/calendar-02/). TEMPLATES.md row: line 686
  (**Bootstrap Calendars (20)**). The `calendar-02` slug appears exactly once
  (no dup rows to mark). ColorLib description: "A catchy free vertical
  calendar template based on the powerful Bootstrap Framework for complete
  flexibility." Family sibling "Calendar 01" was prepped as **Planner**
  (`openspec/specs/template-planner/`) — same category, different widget
  layout (Planner = single white card + blue weekday bar; Monthly = two-panel
  green/white card).
- **✅ Live preview REACHABLE (verified 2026-08-14):** the DEFAULT
  `https://preview.colorlib.com/theme/calendar-02/` returns **HTTP 404**, but
  the real preview lives at
  **`https://preview.colorlib.com/theme/bootstrap/calendar-02/`** (found via
  the "Live Preview" link on the colorlib.com landing page). Captured:
  rendered DOM, `css/style.css` (~222KB Bootstrap bundle; the template's own
  rules are at the tail), and `js/main.js` (interaction logic). **All token
  hexes below come from the live stylesheet — current ground truth.**
- **✅ Screenshot analysis (calendar-02.jpg, 1200×972, browser visual
  inspection + pixel sampling):** a Safari window showing ONE centered
  widget on `#f8f9fd`. Title **"Calendar #02"** → two-panel card: LEFT
  solid green panel (pixel-sampled ~`#66c87d` in the 2020-era screenshot —
  the live CSS says `#39cb75`; **use `#39cb75`**, note the discrepancy in the
  PR) with a big white **"19"**, **"DECEMBER - 2020"** in white uppercase
  below, a bordered **"RESET"** pill top-right, white chevrons mid-height on
  both edges; RIGHT white panel with `Sun Mon Tue Wed Thu Fri Sat` and the
  December 2020 grid (starts Tuesday), **19 circled in green with white text**
  (the capture-date "today"), all other dates plain dark, NO other
  highlights (a first vision pass claimed a circle on 12 — pixel sampling
  disproves it; there is exactly one circle, on 19). No navbar/hero/images/
  footer (add the Component Dock footer per repo convention).
- **✅ Reference "today" decision (like Planner):** the widget hardcodes a
  FIXED reference today = **19 December 2020** (the screenshot's capture
  date) so the initial render matches the screenshot 1:1 and tests are
  deterministic (the original initializes on the real `new Date()` — a
  moving target). Reset returns to this reference today. The green circle
  renders on 19 only when December 2020 is the viewed month (matches the
  original's "today only in the current month" rule).
- **✅ December 2020 layout facts:** 1 Dec 2020 = **Tuesday** → two leading
  blank cells (Sun, Mon) then 1–5; **19 Dec 2020 = Saturday** (last column);
  31 Dec 2020 = Thursday → 5 rows used, trailing Fri/Sat blank. Adjacent
  months: Nov 2020 = 30 days, 1 Nov = Sunday (no leading blanks); Jan 2021 =
  31 days, 1 Jan = Friday (five leading blanks Sun–Thu). Use these in tests.
- **Signature:** VERTICAL TWO-PANEL CALENDAR — solid green (`#39cb75`) date
  panel beside a white 6×7 grid; second color navy `#2a3246` for
  hover/selected circles; Lato; flat with one soft card shadow
  (`0 19px 27px -20px rgba(0,0,0,0.16)`); radius 5px card / 4px reset pill /
  50% circles; page `#f8f9fd`. Do NOT reproduce the original's
  `body { min-width: 992px !important }` desktop-only crutch — the recreation
  stacks the panels below `md` (original's `d-md-flex` already does this).
- **Exact structure (1:1 from the live reference DOM):**
  1. **Title** — "Calendar #02" (source-exact, keep the `#02`), centered,
     near-black, 28px.
  2. **Left green panel** (`.wrap-header`, `#39cb75`, width 45% on md+,
     stacked full-width below md):
     - **RESET pill** (`#reset`) — top-right, 11px uppercase,
       `rgba(255,255,255,0.7)` text, 1px `rgba(255,255,255,0.4)` border,
       radius 4px; hover → solid white; active scale(0.8).
     - **Big day numeral** (`.head-day`) — 8em (~128px) white, line-height
       1, centered; shows the displayed day (initial "19").
     - **Month label** (`.head-month`) — "DECEMBER - 2020" (uppercase 18px,
       `" - "` separator), white, centered.
     - **Chevrons** (`.pre-button` / `.next-button`) — white 18px
       chevron-left/right in circular (50%) hit targets, absolutely
       positioned at the panel's vertical center, 5px from each edge.
  3. **Right white panel** (`.calendar-wrap`, `#fff`, padding
     `40px 20px 20px`):
     - **Weekday header** — `Sun Mon Tue Wed Thu Fri Sat`, bold
       near-black, 7 equal columns.
     - **Grid** (`table#calendar`) — fixed 42-cell 6×7, rows 48px (`3em`),
       dates centered; leading/trailing blanks render empty (not clickable);
       today = `#39cb75` 44px circle white text; hover/selected =
       `#2a3246` navy circle white text; press scale(0.7).
  4. **Footer** — minimal muted "More templates at Component Dock" linking
     https://www.componentdock.com/ (repo convention; original has none).
- **Palette (live CSS ground truth):** page `#f8f9fd` · brand green
  `#39cb75` (panel + today circle; screenshot-era render ~`#66c87d` —
  use the CSS value) · selected/hover navy `#2a3246` · card white
  `#ffffff` · ink `#000000` · reset text/border
  `rgba(255,255,255,0.7)` / `rgba(255,255,255,0.4)` · card shadow
  `0 19px 27px -20px rgba(0,0,0,0.16)`.
- **Font:** **Lato** 300/400/700 (the live stylesheet's family, served via
  Cloudflare cf-fonts in the original) → load via Google Fonts `<link>` in
  `index.html`. Sizes: title 28px · big numeral 8em/300 · month label 18px
  uppercase · reset 11px uppercase · header/dates 16px.
- **Reference behavior (from js/main.js) to reproduce:**
  - Chevrons: month ±1 with year rollover; after navigating, the big
    numeral is set to **1** (original calls `drawHeader(1)` — keep this
    quirk for fidelity).
  - Click a date: navy circle on it + big numeral updates to that day;
    clicking another moves the circle.
  - RESET: back to reference today (Dec 2020), big numeral "19", green
    circle on 19, selection cleared.
  - Green "today" circle shows only when the viewed month IS the reference
    today's month (Dec 2020). Selection and today are independent states.
- **Implementation pointers (Tailwind v4):**
  - Components: `App.tsx` (page + footer) + one widget component, e.g.
    `src/components/Calendar.tsx` with internal sub-parts (DatePanel,
    Grid) or one component with two sections. No Navbar/Hero — none in the
    reference.
  - Palette in `src/index.css` `@theme`: `--color-brand: #39cb75`,
    `--color-selected: #2a3246`, `--color-page: #f8f9fd`,
    `--color-ink: #000000`.
  - State: `viewDate` (year/month) + `selectedDay` (`Date | null`);
    reference today = `new Date(2020, 11, 19)` (fixed). Derived grid:
    leading blanks `new Date(y, m, 1).getDay()`, days-in-month
    `new Date(y, m+1, 0).getDate()`, 42 cells. Chevrons:
    `setViewDate(addMonths(viewDate, ±1))`; big numeral state resets to 1
    on nav, follows clicks/reset. Selection: click cell →
    `setSelectedDay(new Date(y, m, d))`; persist the full date (not the day
    number) so it survives month round-trips.
  - Grid: `grid grid-cols-7` with 48px rows (`h-12`), dates centered
    (`flex items-center justify-center`); circles: fixed 44px (`size-11`
    or `size-[44px]`) `rounded-full` centered in the cell via a positioned
    pseudo-element equivalent (simplest: an absolutely-centered span behind
    the number, or `relative` cell + `absolute` circle).
  - Chevrons: `lucide-react` `ChevronLeft`/`ChevronRight`, white,
    `aria-label="Previous month"`/`"Next month"`, in circular
    `rounded-full` hit targets positioned at the panel's vertical center.
  - RESET: a `<button>` with uppercase 11px text "RESET", translucent-white
    border, `aria-label="Reset to today"`.
  - Dates: `<button>` per cell with `aria-label` like "19 December 2020"
    and `aria-current="date"` on the today cell; blank cells render as
    non-interactive; `focus-visible` rings per repo a11y convention.
  - Card: `max-w-[700px] mx-auto overflow-hidden rounded-[5px]` with the
    shadow; `flex flex-col md:flex-row`; green panel `md:w-[45%]`, grid
    panel `flex-1 bg-white p-5 md:p-10 md:pt-10` (original: `40px 20px
20px`); page `min-h-screen bg-page py-28 px-4`.
  - Footer: minimal muted "More templates at Component Dock" →
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap, no jquery. No ColorLib strings anywhere in `apps/monthly`
    (provenance lives only in the spec + this doc + the PR).
  - Import `cn()` from `@free-react-templates/ui` (packages/ui — knip
    gate).
  - jsdom note: no `localStorage` in jsdom 30 (memory says) — the original's
    cookie persistence is NOT required; keep selection in React state only
    (no storage), which also avoids the polyfill.

## Tasks (implementer checklist)

1. [ ] `feat/template-monthly` branch from latest main
2. [ ] Scaffold `apps/monthly` (copy the simplest existing app; package
       `@free-react-templates/monthly`; `public/CNAME` =
       `monthly.free.componentdock.com`; `"homepage"` =
       `https://monthly.free.componentdock.com`)
3. [ ] `npm install` at repo root so `package-lock.json` registers the
       workspace; verify `grep -c "free-react-templates/monthly"`
       package-lock.json
4. [ ] `vite.config.ts` with `injectUiSource()` (per conventions)
5. [ ] Spec-first: `openspec/specs/template-monthly/spec.md` is the
       contract — Gherkin scenarios map 1:1 to test cases
6. [ ] TDD: write tests (RED) → implement (GREEN) → 100% coverage
       (lines/functions/branches/statements); calendar logic (leading
       blanks, days-in-month, addMonths rollover, month-label format
       `"<MONTH> - <YEAR>"`) is easy to unit-test as pure functions
7. [ ] Run `scripts/verify-app.sh monthly` until green (typecheck + lint +
       knip + fallow + vitest 100% + build)
8. [ ] Self-review per `docs/self-review.md`
9. [ ] PR to main with description: source template (ColorLib "Calendar
       02" / "Calendar V02"), preview URL
       (**https://preview.colorlib.com/theme/bootstrap/calendar-02/** — the
       default `/theme/calendar-02/` 404s; note the `/bootstrap/` path),
       design tokens used (brand `#39cb75`, selected `#2a3246`, page
       `#f8f9fd`, ink `#000000`; screenshot renders the green lighter
       ~`#66c87d` — used live CSS value), font Lato 300/400/700 via Google
       Fonts, interactions added (month nav + date selection + reset),
       "Calendar #02" title kept source-exact, fixed reference today
       2020-12-19 for screenshot-1:1 initial render
10. [ ] Merge immediately (`gh pr merge --squash --delete-branch`)
11. [ ] After merge: TEMPLATES.md `[~]` → `[x]` + surge URL
        (`monthly.free.componentdock.com`) + `npm run readme:status`; push
        (mark line 686 — Bootstrap Calendars (20) category; single row, no
        dups)
