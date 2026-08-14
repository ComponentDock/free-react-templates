# Moment (ColorLib Calendar 09) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Moment** (NEW name —
> the ColorLib source keeps its name "Calendar 09"). Implementation ships on
> `feat/template-moment` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Calendar 09" — free Bootstrap **datetime-picker**
  widget template (source: https://colorlib.com/wp/template/calendar-09/).
  TEMPLATES.md row: line 693 (**Bootstrap Calendars (20)**, header line
  683). The `calendar-09` slug appears exactly once (no dup rows to mark).
  Family siblings "Calendar 01"–"Calendar 08" were prepped as **Planner**,
  **Monthly**, **Almanac**, **Solstice**, **Triptych**, **Ephemeris**,
  **Twilight**, **Sakura** — each is a DIFFERENT widget layout; do not copy
  a sibling's. Calendar 09 is the first DATETIME-PICKER (input + dropdown)
  in the family, NOT an always-visible calendar grid.
- **✅ Live preview REACHABLE (verified 2026-08-15):** the DEFAULT
  `https://preview.colorlib.com/theme/calendar-09/` returns **HTTP 404**, but
  the real preview lives at
  **`https://preview.colorlib.com/theme/bootstrap/calendar-09/`** (the
  family path). Captured: rendered DOM (`/tmp/cal09.html`, ~3.7KB),
  `css/style.css` (~220KB Bootstrap 4.3.1 bundle; template's own rules at
  the tail, lines 8108–8200), `css/bootstrap-datetimepicker.min.css`
  (~9.3KB — monim67 fork of Eonasdan 4.17.47), and `js/main.js` (~0.5KB —
  the datetimepicker init options). **All token hexes below come from the
  live stylesheets + live-render computed styles — current ground truth.**
- **✅ Screenshot analysis (calendar-09.jpg, 1200×972, browser visual
  inspection):** ONE centered widget on pale cool grey `#f8f9fd`. Heading
  **"Calendar #09"** → subheading **"Calendar Datepicker"** → white pill
  input with **"12/19/2020 05:00:00 PM"** → OPEN picker below: header
  "December 2020" with `<` `>` chevrons, `Su Mo Tu We Th Fr Sa` row,
  December grid (starts Tuesday), **19 solid blue `#337ab7` white text**
  (selected), **18 with a light-blue bottom-right corner triangle** (today
  marker; Dec 18 2020 = capture date), footer row of four small PINK icons:
  chevron-up (Today), clock (Time), trash (Clear), X (Close). No
  navbar/hero/images/footer (add the Component Dock footer per repo
  convention).
- **✅ Live render confirmation (2026-08-15, browser + computed styles):**
  body bg `rgb(248,249,253)` = `#f8f9fd`, body color `gray`
  (`rgb(128,128,128)`), font Lato 16px; heading `#000` 28px; subheading
  `#000` 20px; input: white, `#495057` text, radius 40px, height 50px,
  padding 6px 20px, shadow `rgba(0,0,0,.14) 0 5px 13px 0` (focused),
  placeholder `#6c757d`, column ≈350px (`col-md-4`). Picker on click:
  white, `1px solid rgba(0,0,0,.15)`, radius 4px, width 294px (19em),
  Helvetica Neue stack, text `#333`; header "August 2026" (live today) +
  bold `#333` prev/next; `th.dow` bold `#333`; days `#333`, old/new `#777`;
  active cell (= today 15) solid `#337ab7` white radius 4px with WHITE
  corner triangle (`td.active.today:before`); input auto-filled
  "08/15/2026 01:13:39 AM"; footer links computed **pink
  `rgb(252,127,178)` = `#fc7fb2`** (inherited from the template `a` rule),
  titles "Go to today"/"Select Time"/"Clear selection"/"Close the picker";
  header-click view cycling present (month grid + year grid "2000-2107" in
  DOM).
- **✅ Reference "today" decision (family convention):** fixed reference
  today = **18 December 2020, 5:00:00 PM** (the screenshot's capture date /
  today-marker position) so the initial render is deterministic and tests
  are stable. The screenshot shows active=19 (user had selected the 19th) —
  the recreation SHALL start with active = today = **18** ("12/18/2020
  05:00:00 PM" in the input); clicking 19 reproduces the screenshot.
- **✅ December 2020 layout facts:** 1 Dec 2020 = **Tuesday** → two leading
  `.old` cells (29, 30) then 1–5; **18 Dec 2020 = Friday** (today marker +
  active); **19 Dec 2020 = Saturday** (screenshot's active); 31 Dec 2020 =
  Thursday → 5 full rows + a 6th row with two trailing `.new` cells (1, 2) —
  grid = 42 cells, 6 rows. Adjacent months: Nov 2020 = 30 days, 1 Nov =
  Sunday (no leading blanks); Jan 2021 = 31 days, 1 Jan = Friday (five
  leading blanks Sun–Thu). Year view around 2020: 2015–2026 (Eonasdan
  default `yearOffset: 10, yearEnd: 10`).
- **Signature:** PILL INPUT + BOOTSTRAP-STYLE DATETIME PICKER — the white
  40px-radius 50px-tall input with soft shadow; the stock-blue `#337ab7`
  widget palette (active date, today corner triangle, active month/year,
  clock digits) contrasting with the page's pink `#fc7fb2` link/footer-icon
  accent; Lato on `#f8f9fd`; 12-hour "MM/DD/YYYY hh:mm:ss A" format; the
  four-icon footer (Today/Time/Clear/Close); date → month → year view
  cycling + a separate time screen. Flat design, no gradients.
- **Exact structure (1:1 from the live reference DOM):**
  1. **Title** — "Calendar #09" (source-exact, keep the `#09`), centered,
     near-black, 28px Lato.
  2. **Subheading** — "Calendar Datepicker", centered, near-black, 20px
     (h5).
  3. **Pill input** (`.input-group.date#id_0` → `input.form-control`) —
     full column width, 50px tall, radius 40px, white, no border, soft
     shadow, `value=""` on load, placeholder "MM/DD/YYYY hh:mm:ss",
     `required`. Clicking toggles the picker open (`allowInputToggle`).
  4. **Picker dropdown** (`.bootstrap-datetimepicker-widget`, 19em, white,
     radius 4px, `1px solid rgba(0,0,0,.15)`, small top arrow):
     - **Date view** — header: prev chevron + "Month Year" (picker-switch;
       click cycles views) + next chevron; `Su..Sa` weekday header (bold
       `#333`); 6×7 grid; `.old`/`.new` cells `#777`; day hover `#eee`;
       **today** = 7px bottom-right corner triangle `#337ab7` (white when
       active); **active** = solid `#337ab7` white text radius 4px.
     - **Month view** — 12 month cells; viewed month active `#337ab7`
       white; hover `#eee`; click selects and returns to the date grid.
     - **Year view** — decade grid (2015–2026 around 2020); prev/next jump
       a decade; viewed year active; click selects and returns.
     - **Time screen** — hour/minute/second columns (54px wide, bold 1.2em
       digits) each with up/down chevrons; AM/PM toggle; header
       (picker-switch) returns to the date view.
     - **Footer icons** (pink `#fc7fb2` links, lucide-react): chevron-up =
       Today ("Go to today"), clock = Time ("Select Time"), trash = Clear
       ("Clear selection"), X = Close ("Close the picker").
  5. **Footer** — minimal muted "More templates at Component Dock" linking
     https://www.componentdock.com/ (repo convention; original has none).
- **Palette (live CSS ground truth):** brand pink `#fc7fb2` (links +
  footer icons) · page `#f8f9fd` · heading ink `#000000` · body `gray`
  (`#808080`) · input text `#495057` · placeholder `#6c757d` · widget blue
  `#337ab7` (active/today/clock cursor) · widget border
  `rgba(0,0,0,0.15)` · widget text `#333333` · old/new `#777777` · hover
  `#eeeeee` · on-accent `#ffffff` · clock disabled `#cccccc` · input shadow
  `rgba(0,0,0,.09)` / focus `.14` · dropdown arrow `#cccccc`/white. NO
  gradients, NO photography.
- **Font:** **Lato** 300/400/700 (loaded in the reference page head via
  Cloudflare cf-fonts; body rule `"Lato", Arial, sans-serif; font-size:
16px; line-height: 1.8`). Sizes: title 28px · subheading 20px · input
  16px · widget "Helvetica Neue" stack (a single Lato face for the widget
  is an acceptable simplification, note in PR) · clock digits 1.2em bold.
- **Reference behavior (from js/main.js + Eonasdan 4.17.47) to reproduce:**
  - Init: input empty; clicking opens the picker and populates the input
    with the current selection "MM/DD/YYYY hh:mm:ss A".
  - Date click: active moves, input updates, picker stays open.
  - Header (picker-switch) click: date view → month grid → year grid →
    back; month/year click selects and returns to the date grid.
  - Prev/next chevrons: navigate months (date view), years (year view).
  - Clock icon: toggles the time screen; header returns to date view.
  - Today: sets the date to the reference today (18 Dec 2020), keeps time.
  - Clear: empties the input, no active date.
  - Close / click-away: closes the picker, keeps the input value.
  - **Model:** `selectedDate` (a JS `Date`, init `new Date(2020, 11, 18,
17, 0, 0)`), `viewMode` ('date' | 'month' | 'year' | 'time'), `viewDate`
    (year/month shown in the grid). Formatting via a small helper
    (native `Date`, NO moment.js): `MM/DD/YYYY hh:mm:ss A`.
  - **Do NOT reproduce:** moment.js / jQuery / Eonasdan CSS (native Date +
    Tailwind instead); Font Awesome icons (lucide-react); the `fa`
    icon-font webfont; Bootstrap's own grid (Tailwind layout instead).
- **Implementation pointers (Tailwind v4):**
  - Components: `App.tsx` (page + footer) + `src/components/DateTimePicker.tsx`
    (or split: `PickerInput`, `DateView`, `MonthView`, `YearView`,
    `TimeView`, `PickerFooter` — pick what keeps 100% coverage clean). No
    Navbar/Hero — none in the reference.
  - Palette in `src/index.css` `@theme`: `--color-brand: #fc7fb2`,
    `--color-page: #f8f9fd`, `--color-ink: #000000`, `--color-input:
#495057`, `--color-muted: #6c757d`, `--color-widget-blue: #337ab7`,
    `--color-widget-text: #333333`, `--color-old: #777777`,
    `--color-hover: #eeeeee`.
  - State: `selected` (`Date`, init 18 Dec 2020 17:00:00), `viewMode`,
    `viewDate` (`{year, month}`). Derived grid: leading blanks
    `new Date(y, m, 1).getDay()`, days-in-month `new Date(y, m+1,
0).getDate()`, 42 cells (6 rows); `.old`/`.new` via month compare.
  - Input: `rounded-[40px] h-[50px] px-5 shadow-[0_5px_13px_rgba(0,0,0,0.09)]`
    (focus shadow 0.14); `required`; `placeholder="MM/DD/YYYY hh:mm:ss"`;
    onClick toggles the picker.
  - Picker: absolute dropdown below the input, `w-[294px]` (19em),
    `bg-white border border-black/15 rounded` (4px), small top arrow via
    rotated square or border triangle; `z-20`.
  - Date grid: `grid grid-cols-7`; day cells centered; active cell
    `bg-[#337ab7] text-white rounded`; today triangle via a small
    absolutely-positioned `border-l-[7px] border-b-[7px]` element
    (`border-b-[#337ab7]`, white when active); hover `hover:bg-[#eeeeee]`;
    old/new `text-[#777777]`.
  - Time view: three columns (HH : MM : SS) with `ChevronUp`/`ChevronDown`
    buttons + bold digits + AM/PM toggle button.
  - Footer: 4 icon buttons (`ChevronUp`, `Clock`, `Trash2`, `X` from
    lucide-react), `text-brand` (pink), `aria-label`s: "Go to today",
    "Select Time", "Clear selection", "Close the picker".
  - View cycling: header click advances date → month → year → date; month
    grid = 12 buttons; year grid = decade 2015–2026 around the view year,
    prev/next shift ±10.
  - Click-away: close on outside mousedown (effect with document listener)
    or an Escape key handler.
  - jsdom note: no localStorage/sessionStorage in this app → no MemoryStorage
    polyfill needed.

## Tasks (implementation order)

- [ ] `npm run spec:validate` for `template-moment` (spec exists on main;
      implementer re-validates after any spec touch)
- [ ] Scaffold `apps/moment` from the simplest existing app (e.g.
      `apps/aurora`); rename package to `@free-react-templates/moment`;
      `npm install` at root so `package-lock.json` registers the workspace
      (deploy Action runs `npm ci` — stale lockfile fails the build)
- [ ] `public/CNAME` = `moment.free.componentdock.com`; `"homepage"` =
      `https://moment.free.componentdock.com`; `vite.config.ts` with
      `injectUiSource()` (per docs/conventions.md)
- [ ] `src/index.css` `@theme` tokens (see palette above) + Lato Google
      Fonts `<link>` in `index.html`
- [ ] Components: `Navbar`/`Hero` NOT needed — single widget page:
      `App.tsx` renders title + subheading + `DateTimePicker` + Component
      Dock footer
- [ ] `DateTimePicker.tsx`: pill input (empty on load, placeholder,
      `required`, click toggles) + state (`selected` Date 18 Dec 2020
      17:00:00, `viewMode`, `viewDate`) + `MM/DD/YYYY hh:mm:ss A`
      formatter (native Date)
- [ ] Date view: header (prev/next chevrons + picker-switch "December
      2020") + `Su..Sa` header + 42-cell grid (old/new grey, today corner
      triangle on 18, active solid blue) — initial input text
      "12/18/2020 05:00:00 PM"
- [ ] Interactions: date click (active moves + input updates, picker
      stays open), month nav (Nov 2020 / Jan 2021 grids verified), hover
      `#eee`
- [ ] Month view + Year view: header-click cycling, month/year click
      selects and returns to the date grid; year decade 2015–2026, ±10 nav
- [ ] Time screen: clock icon toggle, HH:MM:SS columns with up/down
      chevrons, AM/PM toggle, header returns to date view, input reflects
      changes
- [ ] Footer actions: Today (→ 18 Dec 2020, keeps time), Clear (empties
      input, no active), Close + click-away (closes, keeps value); pink
      `#fc7fb2` lucide icons with aria-labels
- [ ] Tests (TDD, 100% coverage): render 1:1 screenshot state (Dec 2020,
      blue 18 active + today triangle, "12/18/2020 05:00:00 PM", pink
      footer icons); open/close; select 19 (input updates, triangle stays
      on 18); month nav (Nov 2020 no blanks, Jan 2021 five blanks); month
      view (Dec active, pick May → May 2020 grid); year view (2020 active,
      pick 2018 → Dec 2018); time screen (05:00:00 PM, hour up → 06:00:00
      PM, AM/PM flip); Today/Clear/Close/click-away; a11y labels;
      responsive
- [ ] Verify: `scripts/verify-app.sh moment` passes (typecheck + lint +
      vitest 100% coverage + build)
- [ ] Open PR `feat/template-moment` → merge immediately (squash,
      delete-branch); PR description: source template (ColorLib Calendar
      09), preview URL (`https://preview.colorlib.com/theme/bootstrap/calendar-09/`),
      design tokens used, deviations (Lato simplification in widget, native
      Date instead of moment.js, lucide icons, fixed reference today 18 Dec
      2020 5:00 PM instead of live now)
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` for "Calendar 09" (line 693) + surge URL + homepage + `npm run readme:status`; commit + push
