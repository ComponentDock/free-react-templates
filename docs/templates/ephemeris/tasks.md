# Ephemeris (ColorLib "Calendar 06") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-ephemeris` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Calendar 06" — free HTML calendar widget page
  (page `<title>` "Calendar 06"; source:
  https://colorlib.com/wp/template/calendar-06/). Listed in TEMPLATES.md
  under **Bootstrap Calendars (20)** (line 690; no duplicate row). Part of a
  20-item Calendar N series (01–20) — the others are separate templates and
  must NOT be mixed in. Series names already used: 01→planner, 02→monthly,
  03→almanac, 04→solstice, 05→triptych. **06 → ephemeris** (this one).
- **Preview gotcha:** `https://preview.colorlib.com/theme/calendar-06/`
  returns **HTTP 404**. The real live preview is a sub-page of the bootstrap
  theme preview:
  `https://preview.colorlib.com/theme/bootstrap/calendar-06/` (HTTP 200).
  DOM fetched (`/tmp/cal06.html`, 3,580 bytes) + stylesheet `css/style.css`
  (`/tmp/cal06.css`, 226,755 bytes — Bootstrap 4.3.1, widget styles at lines
  8164–8478) + `js/main.js` (`/tmp/cal06-main.js`, 5,118 bytes) + TEMPLATES.md
  screenshot (`calendar-06.jpg`, 1200×972, viewed in browser). Screenshot
  cross-checks the DOM: December theme — light blue-grey page, centered dark
  heading "Calendar #06", white card with soft shadow, slate header with
  white uppercase "DECEMBER 2020", chevrons, grey uppercase weekday labels,
  today (16) highlighted slate with white text.
- **Aesthetic:** minimal productivity-tool page. No imagery, no links, no
  forms — heading + interactive calendar widget only. Do NOT invent extra
  sections.
- **Behavior (js/main.js, `Calendar` class):** renders the current
  month/year grid on load; prev/next chevrons move month ±1 (year rollover),
  re-render grid + "MONTH YEAR" label, 3D-flip the two stacked month panels
  (`data-flow="left|right"` rotateY ±180° vs 0° on `data-active` panel,
  400ms), flip the header label in (`header.active`, 200ms delay), and set
  `body[data-theme="<month>"]` → whole page re-themes per month. A
  `data-loading` guard blocks clicks during the transition. **The widget is
  interactive — recreate navigation, NOT a static grid** (unlike 05/triptych).
- **Footer:** source has NO footer. Add the mandatory repo-convention footer
  (Component Dock link) — it is an addition, note in PR.

## Structure (top → bottom, single page)

1. **Section** (`.ftco-section`, `padding: 7em 0`; page bg = current month
   theme shade, e.g. December `#B0BEC5`) — centered h2 `.heading-section`
   "Calendar #06" (28px Lato, `#000`; recreate as "Calendar" — drop the
   series-index suffix) then the widget.
2. **Widget** (`.calendar`, `width: 400px`, `margin: 0 auto`,
   `perspective: 1000px`; `width: 100%` <768px):
   - **Header** (`.header`, height 100px, white text, relative):
     - Prev chevron `a[data-action="prev-month"]` (left 15px, 40×40,
       `title="Previous Month"`, opacity 0 until `header.active`).
     - Label `.text[data-render="month-year"]` — absolute fill, bg =
       month accent, padding 15px, hidden via `rotateX(90deg)` +
       `opacity: 0`, `transform-origin: bottom`, 0.4s; `.header.active`
       → `rotateX(0)` + `opacity: 1`. Inner span: uppercase, weight 400,
       e.g. "DECEMBER 2020".
     - Next chevron (right 15px, `title="Next Month"`).
   - **Months stage** (`.months`, height 280px, relative) — two stacked
     panels `.month-a` / `.month-b` (padding 15px, `bg #fff`, soft shadow,
     0.4s transition, `backface-visibility: hidden`): inactive panels
     `rotateY(±180deg)` per `data-flow`, active one `rotateY(0)`. The
     active panel holds the rendered grid.
   - **Day grid** (`.table`, font-size 10px): `.row.head` = 7 weekday cells
     SUN..SAT (accent color, uppercase); then ≤6 rows of 7 `.cell`
     (14.28% width, 5px padding, centered, inner span 28×28 /
     line-height 28px). Leading/trailing adjacent-month days = `.cell.disable`
     (grey `#ccc`); today = `.cell.active span` (white on accent,
     `border-radius: 4px`).
3. **Footer** (repo-convention addition, source has none) — minimal centered
   line "Made with Component Dock" with https://www.componentdock.com/ link.

## Month theme palette (page shade / accent, from `[data-theme]` rules)

| Month     | Page shade | Accent  |
| --------- | ---------- | ------- |
| january   | #90CAF9    | #1E88E5 |
| february  | #81D4FA    | #039BE5 |
| march     | #80CBC4    | #00897B |
| april     | #C5E1A5    | #7CB342 |
| may       | #FFE082    | #FFB300 |
| june      | #FFAB91    | #F4511E |
| july      | #CE93D8    | #8E24AA |
| august    | #B39DDB    | #5E35B1 |
| september | #EF9A9A    | #E53935 |
| october   | #CE93D8    | #8E24AA |
| november  | #BCAAA4    | #6D4C41 |
| december  | #B0BEC5    | #546E7A |

Note: source duplicates July for October — keep the duplicate (faithful).

## Implementation tasks (TDD, in order)

- [ ] `apps/ephemeris` scaffold: copy the simplest existing app, rename
      package to `@free-react-templates/ephemeris`, `public/CNAME` =
      `ephemeris.free.componentdock.com`, `homepage` =
      `https://ephemeris.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: 12-month palette as
      `--color-<month>-page` / `--color-<month>-accent` (24 values) +
      `--color-ink: #000`; Google Fonts `<link>` Lato (300/400/700) in
      `index.html`
- [ ] Section + heading: month-themed page bg, ~7em vertical padding,
      centered 28px "Calendar" h2 — content tests
- [ ] Grid math (pure util, heavily tested): given (year, month) return
      weekday offset (`new Date(y, m, 1).getDay()`), days in month
      (`new Date(y, m + 1, 0).getDate()`), leading/trailing overflow days —
      fake-timer tests across month/year boundaries (incl. leap Feb)
- [ ] Grid render: weekday header SUN..SAT (accent, uppercase), 28×28px
      cells, overflow days grey/disabled, today `aria-current="date"` +
      active styling — content/style tests
- [ ] Theme: `Record<MonthName, {page, accent}>` lookup applied to page bg,
      header label bg, weekday color, today highlight; changes on month
      change — style/class assertions
- [ ] Navigation: prev/next buttons (named "Previous Month"/"Next Month"),
      month ±1 with December→January / January→December year rollover;
      label + grid re-render; two-panel flip (direction left/right, active
      panel toggle); header active class after 200ms (fake timers);
      in-flight guard ignores clicks during 400ms transition — interaction
      tests
- [ ] Initial state: current month/year on mount, panel A active, theme
      applied, label revealed after 200ms — fake-timer tests
- [ ] A11y: month-year label in an `aria-live="polite"` region announcing
      changes; disabled overflow cells `aria-hidden`; semantic table/roles
      for the grid — accessibility tests
- [ ] Footer: "Made with Component Dock" line with
      https://www.componentdock.com/ link
- [ ] `bash scripts/verify-app.sh ephemeris` (typecheck + lint + 100%
      coverage + build) — FAST_MODE gate
- [ ] PR: source template, preview URL (note `/theme/bootstrap/calendar-06/`
      — direct URL 404s), tokens, deviations (name, heading paraphrase,
      added footer, React recreation of the interactive widget)
