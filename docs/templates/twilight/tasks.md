# Twilight (ColorLib Calendar 07) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Twilight** (NEW name —
> the ColorLib source keeps its name "Calendar 07"). Implementation ships on
> `feat/template-twilight` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Calendar 07" — free "photo-backdrop" Bootstrap
  calendar widget template (source: https://colorlib.com/wp/template/calendar-07/).
  TEMPLATES.md row: line 691 (**Bootstrap Calendars (20)**). The
  `calendar-07` slug appears exactly once (no dup rows to mark). ColorLib
  description: "A catchy free vertical calendar template based on the
  powerful Bootstrap Framework for complete flexibility." Family siblings
  "Calendar 01"–"Calendar 06" were prepped as **Planner**, **Monthly**,
  **Almanac**, **Solstice**, **Triptych**, **Ephemeris** (same category,
  different widget layouts).
- **✅ Live preview REACHABLE (verified 2026-08-15):** the DEFAULT
  `https://preview.colorlib.com/theme/calendar-07/` returns **HTTP 404**, but
  the real preview lives at
  **`https://preview.colorlib.com/theme/bootstrap/calendar-07/`** (same
  family path as Calendar 02; found via the "Live Preview" link on the
  colorlib.com landing page). Captured: rendered DOM, `css/style.css`
  (~223KB Bootstrap bundle; the template's own rules are at the tail), and
  `js/main.js` (interaction logic — same engine as Calendar 02's, plus a
  cookie quirk). **All token hexes below come from the live stylesheet —
  current ground truth.**
- **✅ Screenshot analysis (calendar-07.jpg, 1200×972, browser visual
  inspection):** a Safari window showing ONE centered widget on `#f8f9fd`.
  Title **"Calendar #07"** → two-panel card: LEFT dark moody photo of a
  foggy mountain range (dark blues/greys/blacks) with a subtle black
  overlay, an outlined **"TODAY"** pill top-right, **"DECEMBER - 2020"**
  small white uppercase in the upper part, huge white **"19"** below it;
  RIGHT white panel with small GREY chevrons at the top corners, `Sun Mon
Tue Wed Thu Fri Sat` header, December 2020 grid (starts Tuesday), **19
  circled in magenta `#e13a9d` with white text** (the capture-date
  "today"), all other dates plain dark, NO other highlights. No
  navbar/hero/images/footer (add the Component Dock footer per repo
  convention).
- **✅ Live render confirmation (2026-08-15):** the preview renders the
  widget on the real current date — "TODAY" pill, "AUGUST - 2026" above a
  big white "15", magenta circle on 15. The left photo is a mountain range
  at dusk/dawn (deep purple-blue sky → soft orange near the horizon, dark
  silhouetted peaks) — the recreation uses a picsum placeholder
  (`https://picsum.photos/seed/twilight-1/800/1067`, portrait like the
  original's 800×1067 `images/bg.jpg`); NEVER copy the original photo.
- **✅ Reference "today" decision (like Planner/Monthly):** the widget
  hardcodes a FIXED reference today = **19 December 2020** (the screenshot's
  capture date) so the initial render matches the screenshot 1:1 and tests
  are deterministic (the original initializes on the real `new Date()` — a
  moving target). Reset ("TODAY" pill) returns to this reference today. The
  magenta circle renders on 19 only when December 2020 is the viewed month
  (matches the original's "today only in the current month" rule).
- **✅ December 2020 layout facts:** 1 Dec 2020 = **Tuesday** → two leading
  blank cells (Sun, Mon) then 1–5; **19 Dec 2020 = Saturday** (last column);
  31 Dec 2020 = Thursday → 5 rows used, trailing Fri/Sat blank. Adjacent
  months: Nov 2020 = 30 days, 1 Nov = Sunday (no leading blanks); Jan 2021 =
  31 days, 1 Jan = Friday (five leading blanks Sun–Thu). Use these in tests.
- **Signature:** PHOTO-BACKED TWO-PANEL CALENDAR — a dusk-mountain photo
  with a 50% black overlay (`rgba(0,0,0,0.5)`) beside a white 6×7 grid;
  magenta `#e13a9d` today circle; navy `#2a3246` hover/selected circles;
  GREY `#cccccc` chevrons at the grid panel's top corners; Lato; flat with
  one soft card shadow (`0 19px 27px -20px rgba(0,0,0,0.16)`); radius 5px
  card / 4px reset pill / 50% circles; page `#f8f9fd`. Do NOT reproduce the
  original's `body { min-width: 992px !important }` desktop-only crutch —
  the recreation stacks the panels below `md` (original's `d-md-flex`
  already does this).
- **Exact structure (1:1 from the live reference DOM):**
  1. **Title** — "Calendar #07" (source-exact, keep the `#07`), centered,
     near-black, 28px.
  2. **Left photo panel** (`.wrap-header`, width 35% on md+, stacked
     full-width below md with `padding: 20px 0`):
     - Photo background (`cover`, no-repeat, center) + **50% black
       overlay** (`.wrap-header:after`, `z-index: -1` vs panel `z-index:
0`).
     - **"Today" pill** (`#reset`) — top-right, 11px uppercase,
       `rgba(255,255,255,0.7)` text, 1px `rgba(255,255,255,0.4)` border,
       radius 4px, z-index 999; hover → solid white; active scale(0.8).
       It is a `<p>` in the original — recreate as a `<button>` (a11y).
     - **Month label** (`.head-month`) — 16px uppercase weight 300 white,
       ABOVE the day numeral (the template's order: month on top, day
       below — OPPOSITE of sibling Calendar 02). Initial "DECEMBER -
       2020".
     - **Big day numeral** (`.head-day`) — 9em (~144px) white, line-height
       1, centered. Initial "19".
     - **NO chevrons here** — the `#header` pre/next divs exist only as
       HTML comments in the original; do NOT render them.
  3. **Right white panel** (`.calendar-wrap`, width 65%, padding
     `40px 20px 20px`):
     - **Chevron row** (`.button-wrap`, position relative, padding 10px 0)
       — chevron-left at left:20px / chevron-right at right:20px, 1em
       (~18px) circular hit targets, icons `#cccccc` GREY, `top: 0`.
     - **Weekday header** — `Sun Mon Tue Wed Thu Fri Sat`, bold
       near-black, 7 equal columns.
     - **Grid** (`table#calendar`) — fixed 42-cell 6×7, rows 48px (`3em`),
       dates centered; leading/trailing blanks render empty (NOT
       clickable — the original attaches click listeners to blanks, an
       original bug; the family convention is non-interactive blanks);
       today = `#e13a9d` magenta 44px circle white text; hover/selected =
       `#2a3246` navy circle white text; press scale(0.7); transition all
       0.2s ease-in.
  4. **Footer** — minimal muted "More templates at Component Dock" linking
     https://www.componentdock.com/ (repo convention; original has none).
- **Palette (live CSS ground truth):** page `#f8f9fd` · brand magenta
  `#e13a9d` (today circle; also the stylesheet's `.bg-primary` override) ·
  selected/hover navy `#2a3246` · card white `#ffffff` · ink `#000000` ·
  photo overlay `rgba(0,0,0,0.5)` · chevron grey `#cccccc` · disabled
  hover text `#c9c9c9` · reset text/border `rgba(255,255,255,0.7)` /
  `rgba(255,255,255,0.4)` · card shadow `0 19px 27px -20px rgba(0,0,0,0.16)`.
- **Font:** **Lato** 300/400/700 (the live stylesheet's family, served via
  Cloudflare cf-fonts in the original) → load via Google Fonts `<link>` in
  `index.html`. Sizes: title 28px · month label 16px/300 uppercase · big
  numeral 9em · reset 11px uppercase · header/dates 16px.
- **Reference behavior (from js/main.js) to reproduce:**
  - Chevrons: month ±1 with year rollover; after navigating, the big
    numeral is set to **1** (original calls `drawHeader(1)`), THEN
    `drawDays()` re-checks the selection: if a selected day exists in the
    newly viewed month, the numeral shows that day instead (and the navy
    circle re-renders on it).
  - Click a date: navy circle on it + big numeral updates to that day;
    clicking another moves the circle.
  - "Today" (reset): back to reference today (Dec 2020), big numeral "19",
    magenta circle on 19, selection cleared.
  - Magenta "today" circle shows only when the viewed month IS the
    reference today's month (Dec 2020). Selection and today are
    independent states.
  - **Omit** the original's `selected_day` cookie persistence (1-day
    expiry preview-domain quirk; also `document.cookie` in jsdom needs
    polyfilling) — keep selection session-local in React state. Document
    the deviation in the PR. The `Calendar(selector, options)` preset
    path is dead code in the reference (called with no options) — skip.
- **Implementation pointers (Tailwind v4):**
  - Components: `App.tsx` (page + footer) + one widget component, e.g.
    `src/components/Calendar.tsx` with internal sub-parts (PhotoPanel,
    Grid) or one component with two sections. No Navbar/Hero — none in the
    reference.
  - Palette in `src/index.css` `@theme`: `--color-brand: #e13a9d`,
    `--color-selected: #2a3246`, `--color-page: #f8f9fd`,
    `--color-ink: #000000`, `--color-chevron: #cccccc`.
  - Left panel photo: `<img>` or a div with `background-image` using
    `https://picsum.photos/seed/twilight-1/800/1067`, `object-cover` /
    `bg-cover`, plus an absolutely-positioned `bg-black/50` overlay layer
    (z-order: overlay above photo, content above overlay).
  - State: `viewDate` (year/month) + `selectedDay` (`Date | null`);
    reference today = `new Date(2020, 11, 19)` (fixed). Derived grid:
    leading blanks `new Date(y, m, 1).getDay()`, days-in-month
    `new Date(y, m+1, 0).getDate()`, 42 cells. Chevrons:
    `setViewDate(addMonths(viewDate, ±1))`; big numeral state resets to 1
    on nav unless the selected day is in the viewed month (then it shows
    the selected day). Selection: click cell →
    `setSelectedDay(new Date(y, m, d))`; persist the full date (not the
    day number) so it survives month round-trips.
  - Grid: `grid grid-cols-7` with 48px rows (`h-12`), dates centered;
    circle via `rounded-full` on a 44px `after`-equivalent (or an inner
    absolutely-centered span) — today `bg-brand`, hover/selected
    `bg-selected`, white text.
  - Chevrons: two buttons absolutely positioned in a relative wrapper
    above the grid (`left-5`/`right-5`), `text-chevron` icons from
    `lucide-react` (`ChevronLeft`/`ChevronRight`), `aria-label` "Previous
    month"/"Next month".
  - Reset: `<button aria-label="Reset to today">Today</button>` styled as
    the pill (11px uppercase, translucent-white border, `rounded` 4px),
    absolutely positioned top-right of the photo panel.
  - jsdom note: no localStorage/cookie usage in this app → no MemoryStorage
    polyfill needed (unlike apps that use localStorage).

## Tasks (implementation order)

- [ ] `npm run spec:validate` for `template-twilight` (spec exists on main;
      implementer re-validates after any spec touch)
- [ ] Scaffold `apps/twilight` from the simplest existing app (e.g.
      `apps/aurora`); rename package to `@free-react-templates/twilight`;
      `npm install` at root so `package-lock.json` registers the workspace
      (deploy Action runs `npm ci` — stale lockfile fails the build)
- [ ] `public/CNAME` = `twilight.free.componentdock.com`; `"homepage"` =
      `https://twilight.free.componentdock.com`; `vite.config.ts` with
      `injectUiSource()` (per docs/conventions.md)
- [ ] `src/index.css` `@theme` tokens (see palette above) + Lato Google
      Fonts `<link>` in `index.html`
- [ ] Components: `Navbar`/`Hero` NOT needed — single widget page:
      `App.tsx` renders title + `Calendar` widget + Component Dock footer
- [ ] `Calendar.tsx`: left PhotoPanel (photo + 50% overlay + Today pill +
      month label + big numeral) + right grid (chevron row + Sun–Sat header + 42-cell grid) — reference-today 19 Dec 2020 fixed
- [ ] Interactions: month nav (year rollover, numeral → 1), date selection
      (navy circle + numeral update, survives month round-trip), TODAY
      reset (Dec 2020, magenta circle on 19, selection cleared)
- [ ] Tests (TDD, 100% coverage): render 1:1 screenshot state (Dec 2020,
      magenta 19, "DECEMBER - 2020" above "19", Today pill, grey chevrons
      top-right); nav scenarios (Jan 2021 / Nov 2020 / year rollover);
      selection + round-trip; hover; reset; blanks not clickable; a11y
      labels; responsive stacking
- [ ] Verify: `scripts/verify-app.sh twilight` passes (typecheck + lint +
      vitest 100% coverage + build)
- [ ] Open PR `feat/template-twilight` → merge immediately (squash,
      delete-branch); PR description: source template (ColorLib Calendar
      07), preview URL (`https://preview.colorlib.com/theme/bootstrap/calendar-07/`),
      design tokens used, deviations (picsum photo, session-local
      selection, non-interactive blanks, no `min-width` hack)
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` for "Calendar 07" (line 691) + surge URL + homepage + `npm run readme:status`; commit + push
