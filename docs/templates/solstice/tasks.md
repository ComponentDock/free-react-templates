# Solstice (ColorLib Calendar 04) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Solstice** (NEW name —
> the ColorLib source keeps its name "Calendar 04"). Implementation ships on
> `feat/template-solstice` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Calendar 04" — free Bootstrap calendar widget
  template (source: https://colorlib.com/wp/template/calendar-04/).
  TEMPLATES.md row: line 688 (**Bootstrap Calendars (20)**). The
  `calendar-04` slug appears exactly once (no dup rows to mark). Family
  siblings: "Calendar 01" = **Planner**, "Calendar 02" = **Monthly**,
  "Calendar 03" = **Almanac** — this prep is the FOURTH of the family; same
  category, different widget (Planner = single card + blue weekday bar;
  Monthly = two-panel green/white vertical card; Almanac = dual-calendar
  date-range picker; **Solstice = single-calendar event planner with an
  events list + add-event dialog**).
- **✅ Live preview REACHABLE (verified 2026-08-14):** the DEFAULT
  `https://preview.colorlib.com/theme/calendar-04/` returns **HTTP 404**,
  but the real preview lives at
  **`https://preview.colorlib.com/theme/bootstrap/calendar-04/`** (the
  `/theme/bootstrap/` path pattern established by the Monthly/Almanac preps
  — the whole Calendar family previews under it). Captured: rendered DOM
  (`/tmp/cal04/preview-bootstrap.html`, ~5.7KB), `css/style.css` (~225KB
  Bootstrap bundle; the template's own rules are at the tail, lines
  ~8135–8486), and `js/main.js` (~9.9KB, vanilla jQuery). **All token hexes
  below come from the live stylesheet — current ground truth.**
- **✅ Screenshot analysis (calendar-04.jpg, 1200×972, browser visual
  inspection incl. a magnified grid crop):** a browser window showing the
  widget on `#f8f9fd`. Title **"Calendar #04"** centered near-black. LEFT
  white calendar card, RIGHT solid violet panel (the `#7e0cf5` `.content`
  frame showing through the transparent events container). Card shows year
  **"2020"** (chevrons flanking), faint Jan–Dec strip, Sun–Sat labels, and
  the December 2020 grid — **row 1 = blank, blank, 1, 2, 3, 4, 5** (1 Dec
  2020 = Tuesday → 2 leading blanks; verified against real calendar math),
  with **19 = solid magenta-purple circle, white text**, in row 3 under SAT
  (19 Dec 2020 = Saturday ✓). Bottom-right of the card: violet **pill "Add
  Event"** button. In the violet panel: one white card at the top reading
  **"There are no events planned for December 19."**; rest empty. No
  navbar/hero/images/footer (add the Component Dock footer per repo
  convention).
- **✅ Reference view decision (like Planner/Monthly/Almanac):** pin a FIXED
  reference "today" = **19 December 2020** (the screenshot's capture date)
  so the initial render matches the screenshot 1:1 and tests are
  deterministic. Initial view: **December 2020**, active date **19**.
- **✅ Calendar facts (verified 2026-08-14 via `new Date`):** Dec 2020 = 31
  days, 1 Dec = **Tuesday** → 2 leading blanks, 19 Dec = Saturday; grid
  cells = `35 + firstDay` = **37** → 6 rows (last row: 4 trailing blanks).
  Jan 2020 = 31 days, 1 Jan = **Wednesday** → 3 leading blanks (38 cells).
  May 2020 = 31 days, 1 May = **Friday** → 5 leading blanks (40 cells; last
  row = 31 + 4 blanks); **10 May 2020 = Sunday, 11 May = Monday**.
  Dec 2021 = 31 days, 1 Dec = Wednesday → 3 blanks. Use these in tests.
- **Signature:** SINGLE-CALENDAR EVENT PLANNER — a white calendar card
  (left half) + transparent events panel (right half) inside ONE fixed
  `500px`-tall violet `#7e0cf5` frame (max-width 790px); TWO accents: deep
  violet `#7e0cf5` (frame, buttons, event-date circles, event counts,
  chevron hover) + magenta `#cd4dcc` (active date, month hover, Cancel,
  "Cancelled" text); **circular date cells** (radius 50%), **pill buttons**
  (radius 25px), a black right-half dialog for adding events, green `#28a745`
  dots on event dates, `#FF1744` red left borders on empty/cancelled event
  cards.
- **Exact structure (1:1 from the live reference DOM):**
  1. **Title** — "Calendar #04" (source-exact, keep the `#04`), centered,
     near-black, 28px.
  2. **Widget frame** (`div.content`, `max-width: 790px`, `height: 500px`,
     `margin: 20px auto`, `position: relative`, violet `#7e0cf5`):
     - **Calendar card** (`div.calendar-container`, white, 50% width,
       `padding: 20px`, `float: left`):
       - **Year header** (`div.year-header`, 40px tall, `border-top-left-
radius: 3px`, `margin-top: 20px`) — year label centered (20px
         black), chevron spans absolutely positioned left: 0 / right: 0
         (28px wide, `#cccccc` icons, hover `#7e0cf5`).
       - **Month strip** (`table.months-table`) — 12 `td.month` Jan…Dec,
         uppercase 11px `#cccccc`; active = bold `#000`; hover `#cd4dcc`;
         responsive font: 8px ≤992px, 10.5px ≤768px.
       - **Weekday row** (`table.days-table`) — 7 `td.day` Sun…Sat,
         uppercase 10px `#000`.
       - **Date grid** (`table.dates-table` → `tbody`) — `35 + firstDay`
         cells; rows start on Sunday (`i % 7 === 0`); `.nil` blanks before
         the 1st / after the last day; each date a 26px circle (radius
         50%, 15px `#2b2b2b`, 2px transparent border → `#cd4dcc` on hover).
       - **Add Event** (`button#add-button`, pill, violet, absolute
         `right: 20px; bottom: 20px`).
     - **Events panel** (`div.events-container`, 50% width, `float: right`,
       transparent bg, `overflow-y: scroll`, right-corner radius 3px) —
       JS-filled white event cards.
     - **Dialog** (`div.dialog#dialog`, hidden by default: black, absolute
       `top: 0; right: 0`, 50% × 500px, z-index 5; 100% width ≤768px) —
       `h2.dialog-header` "Add New Event" (28px white) + form: "Event name"
       input (text, maxlength 36) + "Number of people to invite" input
       (number, 0–1,000,000) + Cancel (`#cd4dcc`) / OK (white bg, black
       text) pill buttons.
  3. **Footer** — minimal muted "More templates at Component Dock" linking
     https://www.componentdock.com/ (repo convention; original has none).
- **Palette (live CSS ground truth):** page `#f8f9fd` · brand violet
  `#7e0cf5` (frame, buttons, event-dates, event counts, chevron hover) ·
  accent magenta `#cd4dcc` (active date, month hover, Cancel, Cancelled,
  error-input, date hover ring) · card white `#ffffff` · ink `#000000`
  (title, year, active month, day labels) · date ink `#2b2b2b` · idle
  `#cccccc` (chevrons, months) · event dot `#28a745` · alert `#FF1744`
  (event-card left border) · dialog black `#000000` · dialog label
  `rgba(255,255,255,0.9)` · input line `rgba(255,255,255,0.2)` · mobile
  event-card `#e6e6e6`.
- **Fonts:** page chrome (title, event cards, dialog) = **Lato**
  300/400/700 via Google Fonts `<link>` in `index.html`; the calendar
  widget itself (year, months, days, dates, Add Event) = **Helvetica/Arial
  system stack** (`font: 13px Helvetica, Arial, san-serif` on the
  `.calendar-container` in the original — no webfont). Sizes: title 28px ·
  year 20px · months 11px uppercase · days 10px uppercase · dates 15px ·
  event text 16px (1rem) · dialog header 28px · dialog labels 13px
  uppercase letter-spacing 1px.
- **Reference behavior (from js/main.js) to reproduce:**
  - Grid build: `35 + firstDay` cells (`firstDay = new Date(y, m,
1).getDay()`, Sunday=0), new row every 7th cell, `.nil` blanks for
    leading/trailing; year label = view year.
  - **Active date:** the date matching the persisted day-of-month (19) gets
    the magenta circle on every render; clicking a date moves the active
    state and shows that date's events; **re-render quirk** — month/year
    navigation re-activates the 19th (clicked day is not persisted).
  - **Event dates:** dates present in the event store render violet with a
    10px green dot; clicking shows their cards. Seed data: 10 May 2020 =
    10 "Repeated Test Event"/120 events (6 cancelled, 4 active), 11 May
    2020 = 1 active "Test Event"/120.
  - **Events panel:** empty → red-bordered card "There are no events
    planned for <Month> <day>."; else `<occasion>:` + `<N> Invited`
    (violet), cancelled → "Cancelled" (magenta) + red left border.
  - **Month strip:** click = `setMonth(index)` (same year) + re-render.
  - **Year chevrons:** ±1 year (month/day preserved) + re-render.
  - **Add Event:** no-op without an active date; dialog opens (inputs
    cleared); Cancel closes; OK validates (empty name → error border on
    name; non-numeric count → error border on count) then adds the event
    and re-renders (the date becomes an event-date, stays active).
- **Implementation pointers (Tailwind v4):**
  - Components: `App.tsx` (page + footer) + one widget component tree, e.g.
    `src/components/CalendarWidget.tsx` (frame + calendar card + events
    panel + dialog) or split: `YearHeader.tsx`, `MonthStrip.tsx`,
    `DateGrid.tsx`, `EventsPanel.tsx`, `AddEventDialog.tsx`. No
    Navbar/Hero — none in the reference.
  - Palette in `src/index.css` `@theme`: `--color-brand: #7e0cf5`,
    `--color-accent: #cd4dcc`, `--color-page: #f8f9fd`, `--color-date:
#2b2b2b`, `--color-idle: #cccccc`, `--color-dot: #28a745`, `--color-alert:
#FF1744`, `--color-dialog: #000000`; radii `--radius-pill: 25px` (buttons)
    and cell radius 50% inline (`rounded-full`).
  - State: `viewDate` (year + month, day pinned to 19) + `activeDay` (the
    selected day-of-month) + `events` (array of
    `{occasion, invitedCount, year, month, day, cancelled}` seeded with the
    reference May 2020 data). Reference today = `new Date(2020, 11, 19)`.
    Derived grid: `firstDay = new Date(y, m, 1).getDay()`,
    `daysInMonth = new Date(y, m + 1, 0).getDate()`, cells =
    `35 + firstDay`, `day = i - firstDay + 1` (blank when out of range),
    row break at `i % 7 === 0` (matches main.js exactly, including the
    always-appended final row).
  - Re-render semantics: on month/year change, the active date resets to
    the pinned day (19) — implement it exactly (tests pin the quirk).
  - Grid: `grid grid-cols-7` (or table), cells `size-[26px] rounded-full
text-[15px]`, blanks as empty non-interactive cells; date buttons with
    `aria-label` "19 December 2020"; active `bg-accent text-white`;
    event-date `bg-brand text-white relative` + a 10px `bg-dot` dot
    absolutely at top-left; event+active → `bg-brand` (violet wins).
  - Frame: `max-w-[790px] h-[500px] mx-auto my-5 bg-brand relative flex`;
    calendar `w-1/2 bg-white p-5` (full-width + `p-0` below `md`); events
    `w-1/2 overflow-y-auto` (full-width below `md`); dialog
    `absolute right-0 top-0 h-full w-1/2 bg-dialog z-5` (full-width below
    `md`), hidden unless open.
  - Add Event button: absolute `right-5 bottom-5`, pill
    (`rounded-[25px] px-[1.9rem] py-[0.65rem]`), hover `scale-105`, active
    `translate-y-[3px] scale-95`.
  - Dialog inputs: centered 300px wide, borderless with
    `border-b border-white/20`, focus `border-white`, error state
    `border-accent`; validation per main.js (name non-empty, count numeric).
  - Footer: minimal muted "More templates at Component Dock" →
    https://www.componentdock.com/.
  - Do NOT copy the CSS/HTML — re-implement with Tailwind tokens. No
    Bootstrap, no jquery, no Font Awesome (lucide-react `ChevronLeft` /
    `ChevronRight` chevrons). No ColorLib strings anywhere in
    `apps/solstice` (provenance lives only in the spec + this doc + the
    PR).
  - Import `cn()` from `@free-react-templates/ui` (packages/ui — knip
    gate).
  - jsdom note: no `localStorage` in jsdom 30 — the original persists
    nothing to storage (events live only in the in-memory `event_data`
    object); keep all state in React (no storage, no polyfill needed).

## Tasks (implementer checklist)

1. [ ] `feat/template-solstice` branch from latest main
2. [ ] Scaffold `apps/solstice` (copy the simplest existing app; package
       `@free-react-templates/solstice`; `public/CNAME` =
       `solstice.free.componentdock.com`; `"homepage"` =
       `https://solstice.free.componentdock.com`)
3. [ ] `npm install` at repo root so `package-lock.json` registers the
       workspace; verify `grep -c "free-react-templates/solstice"`
       package-lock.json
4. [ ] `vite.config.ts` with `injectUiSource()` (per conventions)
5. [ ] Spec-first: `openspec/specs/template-solstice/spec.md` is the
       contract — Gherkin scenarios map 1:1 to test cases
6. [ ] TDD: write tests (RED) → implement (GREEN) → 100% coverage
       (lines/functions/branches/statements); grid math (leading blanks,
       `35 + firstDay`, days-in-month, row breaks), re-render
       re-activation of day 19, event filtering, and dialog validation are
       easy to unit-test as pure functions
7. [ ] Run `scripts/verify-app.sh solstice` until green (typecheck + lint +
       knip + fallow + vitest 100% + build)
8. [ ] Self-review per `docs/self-review.md`
9. [ ] PR to main with description: source template (ColorLib "Calendar
       04"), preview URL
       (**https://preview.colorlib.com/theme/bootstrap/calendar-04/** — the
       default `/theme/calendar-04/` 404s; note the `/theme/bootstrap/`
       path), design tokens used (violet `#7e0cf5`, magenta `#cd4dcc`,
       page `#f8f9fd`, dots `#28a745`, alert `#FF1744`), and what differs
       (React re-implementation, lucide chevrons, Component Dock footer,
       Lato + Helvetica stacks, no asset copying)
10. [ ] Merge immediately (`gh pr merge --squash --delete-branch`), then
        pull --rebase and run the bookkeeping commit for TEMPLATES.md
        (`[ ]` → `[x]` + surge URL + homepage + `npm run readme:status`)
