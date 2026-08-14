# Sakura (ColorLib Calendar 08) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Sakura** (NEW name —
> the ColorLib source keeps its name "Calendar 08"). Implementation ships on
> `feat/template-sakura` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Calendar 08" — free pink-branded
  calendar-with-events Bootstrap widget template (source:
  https://colorlib.com/wp/template/calendar-08/). ColorLib description: "A
  trendy free calendar with events Bootstrap template that offers a user to
  add an event to their desired date." TEMPLATES.md row: line 692
  (**Bootstrap Calendars (20)**, header line 683). The `calendar-08` slug
  appears exactly once (no dup rows to mark). Family siblings "Calendar
  01"–"Calendar 07" were prepped as **Planner**, **Monthly**, **Almanac**,
  **Solstice**, **Triptych**, **Ephemeris**, **Twilight** — each is a
  DIFFERENT widget layout; do not copy a sibling's.
- **✅ Live preview REACHABLE (verified 2026-08-15):** the DEFAULT
  `https://preview.colorlib.com/theme/calendar-08/` returns **HTTP 404**, but
  the real preview lives at
  **`https://preview.colorlib.com/theme/bootstrap/calendar-08/`** (the
  family path — same as Calendar 02/05/06/07). Captured: rendered DOM
  (`/tmp/cal08.html`, ~5.7KB), `css/style.css` (~225KB Bootstrap 4.3.1
  bundle; the template's own rules are at the tail, lines 8164+), and
  `js/main.js` (the jQuery interaction engine, ~9.9KB). **All token hexes
  below come from the live stylesheet + live-render computed styles —
  current ground truth.**
- **✅ Screenshot analysis (calendar-08.jpg, 1200×972, browser visual
  inspection):** a Safari window showing ONE centered widget on pale cool
  grey `#f8f9fd`. Title **"Calendar #08"** → white card: year **"2020"**
  centered dark with small GREY chevrons at the top corners; month strip
  with **"DEC" bold PINK**; `SUN MON TUE WED THU FRI SAT` light-grey
  uppercase header; December 2020 grid (starts Tuesday), **18 circled in
  solid pink `#fc7fb2` white text** (capture date), other dates plain dark,
  NO amber dots; a right-aligned pink pill **"Add Event"** below the grid;
  below the card a solid pink bar reading **"There are no events planned
  for December 19."** (the bar says 19 while the circle is on 18 — a
  capture artifact; the live render's bar always matches the active date —
  recreation keeps them in sync, initial text "December 18"). No
  navbar/hero/images/footer (add the Component Dock footer per repo
  convention).
- **✅ Live render confirmation (2026-08-15, headless browser + computed
  styles):** page bg `rgb(248,249,253)` = `#f8f9fd`; `.content` pink
  `#fc7fb2` 500×500 centered; `.calendar-container` WHITE 500×500 exactly
  overlapping the pink box (no pink frame visible around the card); the
  `.events-container` transparent, directly BELOW the card; the
  empty-state `.event-card` pink `#fc7fb2` width 500 radius 4px white text
  with **NO red left stripe** (computed `0px none` — the stylesheet's
  `.event-card { border: none !important }` beats the JS's inline
  `border-left: 10px solid #FF1744`); `#add-button` pink radius 25px
  absolute right/bottom 20px; `.active-month` pink; bar text
  "There are no events planned for August 15." (active = the 15th).
- **✅ Reference "today" decision (family convention, like
  Planner/Monthly/Twilight):** the widget hardcodes a FIXED reference today
  = **18 December 2020** (the screenshot's capture date) so the initial
  render matches the screenshot 1:1 and tests are deterministic (the
  original initializes on the real `new Date()` — a moving target).
- **✅ December 2020 layout facts:** 1 Dec 2020 = **Tuesday** → two leading
  blank cells (Sun, Mon) then 1–5; **18 Dec 2020 = Friday** (circle); 31 Dec
  2020 = Thursday → 5 full rows + a 6th row with two trailing blanks
  (Fri/Sat); grid = `35 + firstDay` = **37 cells, 6 rows**. Adjacent
  months: Nov 2020 = 30 days, 1 Nov = Sunday (no leading blanks); Jan 2021 =
  31 days, 1 Jan = Friday (five leading blanks Sun–Thu). Year-nav months:
  Dec 2021 = 1 Dec Wednesday (three leading blanks); Dec 2019 = 1 Dec Sunday
  (no leading blanks). Use these in tests.
- **Signature:** PINK-BRANDED CALENDAR WITH EVENTS — ONE brand pink
  `#fc7fb2` everywhere (active month, active-date 40px circle, event-date
  fill, Add Event pill, dialog, event cards, chevron/month hover), amber
  `#ffc107` 10px dot on event dates, YEAR-navigation chevrons (NOT month —
  unlike Calendar 07), month selection via a 12-cell strip, events panel
  below the card with flush pink cards, FLAT design with **NO card shadow**
  and **NO hover circle on plain dates** (both differ from Calendar 07);
  page `#f8f9fd`; widget 13px Helvetica/Arial (Lato loaded page-wide in the
  reference — use Lato, note the simplification).
- **Exact structure (1:1 from the live reference DOM):**
  1. **Title** — "Calendar #08" (source-exact, keep the `#08`), centered,
     near-black, 28px.
  2. **White card** (`.calendar-container`, max-width 500px, white, padding
     20px — padding 0 below `lg`):
     - **Year header** (`.year-header`, 40px tall, margin-top 20px) —
       centered year (20px, `#000`) with **chevron-left at left:0** and
       **chevron-right at right:0** (`#cccccc` 14px icons, 28px hit
       targets; hover → `#fc7fb2`). **Chevrons change the YEAR** (±1).
     - **Month strip** (`.months-table`) — 12 cells `Jan..Dec`, 11px
       uppercase, `#cccccc`, `padding-top: 10px`; viewed month
       `.active-month` = bold 700 pink; hover pink; click = switch month.
     - **Weekday header** (`.days-table`) — `Sun Mon Tue Wed Thu Fri Sat`,
       10px uppercase, `#000`.
     - **Date grid** (`.frame` → `.dates-table` tbody) — `35 + firstDay`
       cells, new row every 7; leading/trailing overflow cells blank
       (`.nil`, NOT clickable — no handlers in the original); dates 15px
       `#2b2b2b`; **active date** = white text + 40px pink circle
       (`.table-date:before`); **event dates** = solid pink fill + 10px
       amber `#ffc107` dot (1px white border) at top-left; an event date
       that is also active shows ONLY the circle (fill transparent).
     - **Add Event button** (`#add-button`) — pill (`border-radius: 25px`,
       padding 0.65rem 1.9rem), pink bg, white 1rem text, absolute
       `right: 20px; bottom: 20px` of the card; hover scale(1.03), press
       `translateY(3px) scale(0.97)`.
  3. **Events panel** (`.events-container`) — directly below the card, full
     width; flush pink cards (`margin: 0`, radius 4px, padding 20px 0,
     white 1rem text): empty state = one card **"There are no events
     planned for <Month> <day>."**; with events = one card per event
     **"<name>: <n> Invited"**. NO red stripe, count/cancelled labels in
     WHITE (source renders them pink-on-pink — invisible; deviation).
  4. **Add Event dialog** (`.dialog`, absolute `inset: 0` over the whole
     widget, pink bg, z-5, hidden) — header **"Add New Event"** 28px white;
     label **"Event name"** + text input (maxlength 36); label **"Number of
     people to invite"** + number input (min 0 max 1000000); inputs 300×40,
     centered, radius 40px, `rgba(255,255,255,0.2)` border → white on
     focus; **Cancel** black pill + **OK** white pill. Validation: empty
     name → error on name; non-numeric count → error on count; error clears
     on input. OK adds the event to the active date and re-renders.
  5. **Footer** — minimal muted "More templates at Component Dock" linking
     https://www.componentdock.com/ (repo convention; original has none).
- **Palette (live CSS ground truth):** brand pink `#fc7fb2` · page
  `#f8f9fd` · card white `#ffffff` · ink `#000000` · date text `#2b2b2b` ·
  muted grey `#cccccc` · event dot amber `#ffc107` · dialog label
  `rgba(255,255,255,0.9)` · dialog border `rgba(255,255,255,0.2)` ·
  on-accent text `#ffffff` · error indication `#ff1744` (recommended —
  source's `#fc7fb2` error border is invisible on pink; documented
  deviation). NO card shadow, NO gradients.
- **Font:** **Lato** 300/400/700 (loaded in the reference page head via
  Cloudflare cf-fonts; the widget's own rule is 13px Helvetica/Arial —
  either is acceptable, Lato recommended + note the simplification). Sizes:
  title 28px · year 20px · months 11px (8px ≤991px, 10.5px ≤767px) ·
  weekdays 10px · dates 15px · buttons/events 1rem · dialog header 28px ·
  dialog labels 13px uppercase letter-spacing 1px.
- **Reference behavior (from js/main.js) to reproduce:**
  - Init: active month = viewed month; grid = `35 + firstDay` cells; the
    cell matching the active day renders the pink circle + white text; the
    year label = viewed year; the events panel shows the active date's
    events (or the empty-state card).
  - **Day-of-month persistence:** the engine keeps `date.getDate()` through
    `setMonth`/`setFullYear` — the active circle follows the **18th** (the
    reference today's day) through every month/year view, unless the user
    clicked another date (then THAT day persists). Model: `activeDay`
    (number) + `viewDate` (year/month); active date = `(viewDate, activeDay)`;
    circle renders on `activeDay` in every month (18 ≤ 28, always valid).
  - Click a date: circle moves, events panel updates to that date.
  - Click a month cell: view month = clicked; `.active-month` moves.
  - Click a chevron: view year ±1. (The source's `$("year").html(...)` is a
    broken selector — dead code; the label still updates via
    `init_calendar`.)
  - Add Event: opens the dialog (a date is always active in this model, so
    it is always functional); Cancel closes; OK validates (empty name /
    non-numeric count → errors), adds `{name, count, year, month, day}` to
    the event list, re-renders the grid (date now event-styled) + panel.
  - **Seed data:** the source seeds 11 demo events in **May 2020** ("Repeated
    Test Event" ×10 on May 10, mostly cancelled, + "Test Event" May 11, 120
    invited) — invisible in the default December view. The recreation SHALL
    seed a small paraphrased sample dataset (e.g. 1–2 events on May 2020
    dates, or a similar alternate month) so the initial December render
    matches the screenshot (NO amber dots) while the event-date/event-card
    states are reachable by navigating; note the paraphrase in the PR.
  - **Do NOT reproduce:** the red `#FF1744` stripe (killed by
    `border: none !important`), pink-on-pink count text, invisible
    `#fc7fb2` error border, duplicate label ids, the fixed 500px heights +
    invalid `overflow: none` (use natural height), the 500px scrollable
    events container (natural-height list), jQuery show/hide animations
    (a subtle fade is fine).
- **Implementation pointers (Tailwind v4):**
  - Components: `App.tsx` (page + footer) + one widget component, e.g.
    `src/components/Calendar.tsx` (or split: `YearHeader`, `MonthStrip`,
    `DateGrid`, `EventsPanel`, `AddEventDialog` — pick what keeps 100%
    coverage clean). No Navbar/Hero — none in the reference.
  - Palette in `src/index.css` `@theme`: `--color-brand: #fc7fb2`,
    `--color-page: #f8f9fd`, `--color-ink: #000000`,
    `--color-date: #2b2b2b`, `--color-muted: #cccccc`,
    `--color-dot: #ffc107`.
  - State: `viewDate` (`{year, month}`, init `{2020, 11}`) + `activeDay`
    (init 18). Derived grid: leading blanks `new Date(y, m, 1).getDay()`,
    days-in-month `new Date(y, m+1, 0).getDate()`, `35 + firstDay` cells.
    Events: `{ name, count, year, month, day }[]` seeded in state.
  - Grid: `grid grid-cols-7`, cells ~46px tall (`h-11`/`py-2.5`), dates
    centered; active circle via `rounded-full` on a 40px inner span
    (absolute-centered) — `bg-brand` + white text; event dates `bg-brand`
    fill + a 10px `bg-dot` dot (absolute top-left, `border border-white`);
    blanks render empty `<span>`s with no onClick.
  - Add Event: `absolute bottom-5 right-5` pill in the card (position
    relative container); dialog as a fixed/absolute inset-0 pink overlay
    with `role="dialog"`/`aria-modal`, labeled by the header; validate name
    trimmed non-empty + count `Number.isFinite` — visible error (red
    border/text) clearing on input.
  - Chevrons: `lucide-react` `ChevronLeft`/`ChevronRight` (NOT Font
    Awesome), `text-muted` hover `text-brand`, `aria-label` "Previous
    year"/"Next year".
  - jsdom note: no localStorage/sessionStorage in this app → no MemoryStorage
    polyfill needed.

## Tasks (implementation order)

- [ ] `npm run spec:validate` for `template-sakura` (spec exists on main;
      implementer re-validates after any spec touch)
- [ ] Scaffold `apps/sakura` from the simplest existing app (e.g.
      `apps/aurora`); rename package to `@free-react-templates/sakura`;
      `npm install` at root so `package-lock.json` registers the workspace
      (deploy Action runs `npm ci` — stale lockfile fails the build)
- [ ] `public/CNAME` = `sakura.free.componentdock.com`; `"homepage"` =
      `https://sakura.free.componentdock.com`; `vite.config.ts` with
      `injectUiSource()` (per docs/conventions.md)
- [ ] `src/index.css` `@theme` tokens (see palette above) + Lato Google
      Fonts `<link>` in `index.html`
- [ ] Components: `Navbar`/`Hero` NOT needed — single widget page:
      `App.tsx` renders title + `Calendar` widget + Component Dock footer
- [ ] `Calendar.tsx`: year header (chevrons + year) + month strip +
      weekday header + `35+firstDay` grid + Add Event button — reference
      today 18 Dec 2020 fixed, activeDay 18
- [ ] Events panel: empty-state card ("There are no events planned for
      December 18." — text syncs with the active date) + event cards
      ("<name>: <n> Invited"), flush pink cards, no red stripe
- [ ] Add Event dialog: pink overlay, labeled fields (Event name maxlength
      36 / Number of people min 0 max 1000000), Cancel/OK pills,
      validation errors visible + cleared on input, OK adds + re-renders
- [ ] Seed sample events in an alternate month (e.g. May 2020, per the
      source's own seed placement) so event-date/event-card states are
      reachable while the December view stays screenshot-clean
- [ ] Interactions: year chevrons (±1, grids verified: Dec 2021 / Dec
      2019), month strip (Nov 2020, active month moves), date click
      (circle + panel), day-of-month persistence (18 follows navigation;
      clicked date survives round-trips)
- [ ] Tests (TDD, 100% coverage): render 1:1 screenshot state (Dec 2020,
      pink 18, "There are no events planned for December 18.", Dec bold
      pink, grey chevrons); nav scenarios (Nov 2020, Jan 2021, Dec 2021,
      Dec 2019); selection + persistence + round-trip; events panel states
      (empty + list); Add Event flow (open/cancel/validation/add/error
      clear); blanks not clickable; a11y labels; responsive
- [ ] Verify: `scripts/verify-app.sh sakura` passes (typecheck + lint +
      vitest 100% coverage + build)
- [ ] Open PR `feat/template-sakura` → merge immediately (squash,
      delete-branch); PR description: source template (ColorLib Calendar
      08), preview URL (`https://preview.colorlib.com/theme/bootstrap/calendar-08/`),
      design tokens used, deviations (Lato simplification, white count
      text, visible error color, no red stripe, natural-height events
      list, paraphrased seed data)
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` for "Calendar 08" (line 692) + surge URL + homepage + `npm run readme:status`; commit + push
