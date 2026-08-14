# Template: Ephemeris (Calendar — Bootstrap)

## Purpose

Ephemeris is a single-page interactive calendar widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 06" design (see TEMPLATES.md, Bootstrap Calendars
category, line 690 — no duplicate row), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No
ColorLib references in app code — provenance lives in this spec, TEMPLATES.md,
and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 06" — free HTML calendar widget page (one
  of a 20-item "Bootstrap Calendars" series; page `<title>` "Calendar 06";
  source: https://colorlib.com/wp/template/calendar-06/). Single page: one
  section with a centered heading and an interactive month calendar widget
  (prev/next month navigation, weekday header, day grid, today highlight,
  month-themed colors).
- **Live preview:** direct `/theme/calendar-06/` URL returns HTTP 404 — the
  REAL preview is a sub-page of the bootstrap theme preview:
  `https://preview.colorlib.com/theme/bootstrap/calendar-06/` (HTTP 200;
  fetched `/tmp/cal06.html`, 3,580 bytes) plus stylesheet `css/style.css`
  (`/tmp/cal06.css`, 226,755 bytes — Bootstrap 4.3.1 + widget styles starting
  at line 8164), behavior script `js/main.js` (`/tmp/cal06-main.js`, 5,118
  bytes), and the TEMPLATES.md screenshot (`calendar-06.jpg`, 1200×972,
  viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** minimal, clean,
  productivity-tool aesthetic with a dynamic month-based color scheme. The
  screenshot (captured on a December day) shows: light blue-grey page
  background (December theme `#B0BEC5`), a centered dark sans-serif heading
  "Calendar #06", and a floating white card (rounded, soft drop shadow)
  containing a dark slate-blue header bar with white uppercase "DECEMBER
  2020" and `<`/`>` chevrons, a white day grid with small grey uppercase
  weekday labels (SUN..SAT), and today (16) highlighted as a dark slate-blue
  square with white text. The whole page background and the widget accent
  color change with the current month (12 Material-palette themes keyed off
  `body[data-theme="<month>"]`).
- **Behavior:** `js/main.js` (a `Calendar` class, no jQuery dependency for
  the logic itself) renders the grid for the current month/year on load:
  weekday header, 6 rows × 7 cells with leading/trailing overflow days from
  the adjacent months marked `disable` (grey), and today's cell marked
  `active` (white on the month accent, 4px radius). Clicking the header
  chevrons (`data-action="prev-month"` / `"next-month"`) moves the month
  ±1 with December→January year rollover, re-renders the grid, updates the
  "MONTH YEAR" label, flips the two stacked month panels in 3D
  (`data-flow="left|right"`, rotateY ±180° vs 0° on the `data-active`
  panel), slides the header label in with a 200 ms-delayed rotateX flip
  (`header.active`), and sets `body[data-theme]` to the new month. A
  `data-loading` guard ignores clicks mid-transition (400 ms). The widget is
  fully interactive — recreation MUST implement navigation, not a static
  grid.
- **Footer:** source has NO footer. Add the mandatory repo-convention footer
  (Component Dock link) — it is an addition, note in PR.

## Design tokens (from `css/style.css` of the live preview)

- **Font:** `"Lato", Arial, sans-serif` (Google Fonts, weights 300/400/700
  loaded in the source). Body 16px, `line-height: 1.8`, color `gray`.
  Headings Lato `font-weight: 400`, `line-height: 1.5`, color `#000`.
- **Page background:** NOT a fixed color — the `body` element carries
  `data-theme="<month>"` and the matching `[data-theme]` rule paints it with
  that month's light Material 200-shade (the `body { background: #f8f9fd }`
  default is overridden). Each month has a light page shade + a 600-shade
  accent used for the header label background, weekday-label color, and the
  today-cell highlight:
  - January: page `#90CAF9` · accent `#1E88E5`
  - February: page `#81D4FA` · accent `#039BE5`
  - March: page `#80CBC4` · accent `#00897B`
  - April: page `#C5E1A5` · accent `#7CB342`
  - May: page `#FFE082` · accent `#FFB300`
  - June: page `#FFAB91` · accent `#F4511E`
  - July: page `#CE93D8` · accent `#8E24AA`
  - August: page `#B39DDB` · accent `#5E35B1`
  - September: page `#EF9A9A` · accent `#E53935`
  - October: page `#CE93D8` · accent `#8E24AA` (source duplicates July)
  - November: page `#BCAAA4` · accent `#6D4C41`
  - December: page `#B0BEC5` · accent `#546E7A`
    (Implement as a `Record<MonthName, {page, accent}>` lookup; the CSS custom
    properties can hold all 24 values in `@theme`.)
- **Heading (`.heading-section`):** `font-size: 28px`, `color: #000`, Lato
  weight 400, centered above the widget (source text "Calendar #06" —
  paraphrase to "Calendar"; the "#06" suffix is the series index, not
  content).
- **Section (`.ftco-section`):** `padding: 7em 0` (≈112px top/bottom).
- **Widget (`.calendar`):** `width: 400px`, `margin: 0 auto` (centered),
  `perspective: 1000px`, `cursor: default`; `width: 100%` below 768px. It
  stacks a `.header` (height 100px) over a `.months` stage (height 280px).
- **Header (`.calendar .header`):** `height: 100px`, white text, relative.
  - Label (`.header .text`): absolutely fills the header,
    `background-color: <accent>`, `padding: 15px`, shadow
    `0 6px 20px rgba(0,0,0,0.01), 0 8px 17px rgba(0,0,0,0.2)`, hidden by
    default (`rotateX(90deg)`, `opacity: 0`, `transform-origin: bottom`,
    0.4s transition); with `header.active` it flips to `rotateX(0)`,
    `opacity: 1`. Its `<span>` is block, centered, `text-transform:
uppercase`, weight 400 ("DECEMBER 2020" style, e.g. `January 2026`).
  - Chevrons (`.header [data-action]`): 40×40 hit areas, absolutely
    positioned left/right 15px, vertically centered, `opacity: 0` until
    `header.active`; the `<i>` (20×20) draws a chevron from two 2px borders
    rotated ±45°. Prev on the left, next on the right, `title="Previous
Month"` / `title="Next Month"`.
- **Months stage (`.months`):** `width: 100%`, `height: 280px`, relative.
  Two absolutely stacked `.month` panels (`.month-a`/`.month-b`), each:
  `padding: 15px`, `background: #fff`, the same soft shadow, `transition:
all .4s ease-in-out`. With `data-flow="left"` panels rotate `rotateY(-180deg)`,
  `data-flow="right"` → `rotateY(180deg)`; the panel with
  `data-active="true"` is `rotateY(0)` — a 3D flip swap between the two
  panels.
- **Day grid (`.table`, rendered by JS):** `font-size: 10px`, weight 400,
  `display: table`; rows `display: table-row`.
  - Weekday header row (`.row.head`): `color: <accent>`, uppercase,
    seven `.cell` (SUN MON TUE WED THU FRI SAT).
  - Day cells: `width: 14.28%`, `padding: 5px`, `text-align: center`,
    `display: table-cell`; inner `<span>` 28×28px, `line-height: 28px`,
    `transition: color, background .4s ease-in-out`.
  - `.cell.disable` (adjacent-month overflow days): `color: #ccc`.
  - `.cell.active span` (today): `color: #fff`,
    `background-color: <accent>`, `border-radius: 4px`.
- **Links (not used on this page):** `a { color: #7e0cf5 }`.
- **Icons:** chevrons are CSS-drawn in the source (no font-awesome icon is
  actually used on this page despite the FA stylesheet link). In the
  recreation use `lucide-react` (ChevronLeft/ChevronRight) or CSS chevrons —
  never copy the source's icon markup.

## Requirements

### Requirement: Page shell and heading

The system SHALL render a single section (vertical padding ≈7em) containing a
centered h2 heading "Calendar" (28px Lato, near-black `#000`; source heading
is "Calendar #06" — the "#06" series suffix is dropped) followed by the
calendar widget below it.

#### Scenario: Section and heading render

- **GIVEN** the page is rendered
- **WHEN** the main section is inspected
- **THEN** it shows the month-themed page background and a centered 28px
  heading "Calendar" above the widget

### Requirement: Month-themed page and accent colors

The system SHALL derive the current month's theme (light page background
shade + 600-shade accent) from the 12-month palette and apply it to the page
background, the header label background, the weekday-label color, and the
today-cell highlight, exactly like the source's `body[data-theme]` rules.

#### Scenario: Current month theme applies

- **GIVEN** the widget is rendered on a known date (e.g. via a mocked clock,
  2020-12-19)
- **THEN** the page background is the December shade `#B0BEC5`, the header
  label and today-cell use the December accent `#546E7A`, and the weekday
  labels use `#546E7A`

#### Scenario: Theme changes with navigation

- **GIVEN** the widget is rendered in December (2020-12-19)
- **WHEN** the next-month button is activated
- **THEN** the theme switches to the January palette (page `#90CAF9`, accent
  `#1E88E5`)

### Requirement: Calendar widget layout

The system SHALL render a centered widget (400px wide, full width below 768px)
consisting of a 100px-tall header bar above a 280px-tall months stage, with
the header bar showing the current month-year label (uppercase, white, e.g.
"DECEMBER 2020") flanked by previous/next chevron buttons, and the months
stage showing the day grid on a white panel with a soft drop shadow.

#### Scenario: Widget structure renders

- **GIVEN** the widget is rendered
- **WHEN** it is inspected
- **THEN** it shows the header bar with the uppercase month-year label, the
  prev/next chevron buttons, and the white day-grid panel below

#### Scenario: Widget narrows on mobile

- **GIVEN** a viewport below 768px
- **WHEN** the widget is inspected
- **THEN** the widget spans the full container width (source-faithful
  responsive behavior)

### Requirement: Calendar grid rendering

The system SHALL render a 7-column day grid for the current month: a
weekday-header row (SUN..SAT, uppercase, accent-colored) followed by day rows
where the 1st is placed at its weekday offset (`new Date(y, m, 1).getDay()`),
each day shown in a 28×28px centered cell, adjacent-month overflow days
(leading and trailing) rendered in grey `#ccc` and marked disabled, and
today's cell highlighted white-on-accent with a 4px radius.

#### Scenario: Grid for a known month

- **GIVEN** a mocked clock of 2020-12-19
- **WHEN** the grid is rendered
- **THEN** December 2020 starts on Tuesday (offset 2), shows 31 days, the
  leading 1–2 days and trailing days from January are grey/disabled, and day
  19 is the highlighted today cell

#### Scenario: Today cell is highlighted

- **GIVEN** the widget is rendered on a known date
- **WHEN** the grid is inspected
- **THEN** the cell matching today's day carries the active state: white
  text on the month accent with a 4px radius

### Requirement: Month navigation

The system SHALL navigate months when the prev/next chevrons are activated:
the displayed month changes by ±1 with correct December→January and
January→December year rollover, the month-year label and grid re-render, and
the navigation animates via the two-panel 3D flip (direction
left/right) with the header label flip-in. Clicks during the 400ms
transition SHALL be ignored (no double navigation).

#### Scenario: Next month advances

- **GIVEN** the widget is rendered in December 2020
- **WHEN** the next-month button is activated
- **THEN** the grid and label show January 2021

#### Scenario: Previous month goes back with year rollover

- **GIVEN** the widget is rendered in January 2021
- **WHEN** the previous-month button is activated
- **THEN** the grid and label show December 2020

#### Scenario: Rapid clicks do not skip months

- **GIVEN** the widget is rendered
- **WHEN** the next-month button is activated twice within the transition
  window
- **THEN** the calendar advances by exactly one month (the in-flight guard
  ignores the second click)

### Requirement: Initial state and load animation

The system SHALL render the current month/year on mount, set the active
month panel (panel A), apply the current month theme, and reveal the header
label + chevrons shortly after load (the source adds `header.active` 200ms
after init).

#### Scenario: Current month on load

- **GIVEN** a mocked clock of 2020-12-19
- **WHEN** the widget mounts
- **THEN** the label reads "DECEMBER 2020", the grid shows December 2020,
  and the theme is December's

#### Scenario: Header reveals after load

- **GIVEN** the widget mounts
- **WHEN** 200ms have elapsed (fake timers)
- **THEN** the header label and chevrons are visible (active state)

### Requirement: Accessibility of the calendar

The system SHALL expose the calendar accessibly: the prev/next buttons
SHALL have accessible names ("Previous Month" / "Next Month", mirroring the
source `title` attributes), the month-year label SHALL be readable text (e.g.
an `aria-live` polite region announcing month changes), the weekday header
SHALL be marked as a header row, disabled overflow-day cells SHALL be hidden
from assistive technology (e.g. `aria-hidden`), and the today cell SHALL be
identifiable (e.g. `aria-current="date"` or an equivalent).

#### Scenario: Navigation buttons announce their action

- **GIVEN** the widget is rendered
- **WHEN** the header buttons are inspected by an accessibility query
- **THEN** the previous button exposes "Previous Month" and the next button
  exposes "Next Month"

#### Scenario: Month changes are announced

- **GIVEN** the widget is rendered
- **WHEN** the month changes
- **THEN** the month-year label region announces the new month and year

### Requirement: Footer with Component Dock link

The system SHALL render a minimal footer at the bottom of the page (the
source has no footer — this is a monorepo-convention addition) with a
centered line such as "Made with Component Dock", where "Component Dock"
links https://www.componentdock.com/.

#### Scenario: Footer link

- **GIVEN** the page is rendered
- **WHEN** the footer is inspected
- **THEN** it shows a line containing a link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `openspec/specs/template-ephemeris/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/ephemeris`, package `@free-react-templates/ephemeris`,
      no ColorLib references in app code (grep for colorlib/Calendar in
      apps/ephemeris)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL, fake timers / mocked system
      date) — `bash scripts/verify-app.sh ephemeris`
- [ ] Section order matches the source: section (heading) → widget → footer
- [ ] Tokens in `src/index.css` `@theme`: 12-month palette (page shade +
      accent per month, 24 color values) + `--color-ink: #000`; Lato
      (300/400/700) Google Fonts link in `index.html`
- [ ] Widget: 400px centered (100% below 768px), 100px header + 280px
      months stage, white panel with soft shadow; header label uppercase
      month-year on the accent color; CSS/lucide chevrons with 40×40 hit
      areas
- [ ] Grid: weekday header SUN..SAT (accent, uppercase), correct day
      placement from `new Date(y, m, 1).getDay()`, adjacent-month overflow
      days grey/disabled, today highlighted white-on-accent with 4px radius
- [ ] Navigation: prev/next ±1 month with year rollover; two-panel flip
      animation (direction left/right, active panel toggle); header
      label flip-in 200ms after load; in-flight click guard (400ms)
- [ ] Theme: page background + header label + weekday labels + today
      highlight all follow the current month's palette, and change on
      navigation
- [ ] A11y: prev/next buttons named "Previous Month"/"Next Month",
      month-year region announces changes, disabled overflow cells
      `aria-hidden`, today cell `aria-current="date"`
- [ ] Placeholder images: none needed (no imagery in the source — do NOT
      add decorative images); icons from `lucide-react`
- [ ] PR description: source template, preview URL (note the
      `/theme/bootstrap/calendar-06/` path — the direct URL 404s), design
      tokens, diffs (name, heading paraphrase "Calendar", added footer with
      Component Dock link, interactive navigation recreated in React)
