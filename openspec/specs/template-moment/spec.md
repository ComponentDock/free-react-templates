# Template: Moment (Calendar / Datetime Picker Widget — Pink-Accent Pill-Input Date & Time Picker)

## Purpose

Moment is a single-page interactive datetime-picker widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 09" design (see TEMPLATES.md, **Bootstrap Calendars
(20)** category, line 693 — the `calendar-09` slug appears exactly once, no
duplicate rows), built under a DIFFERENT name (**Moment** — a moment in time,
and a nod to the moment.js engine the original uses; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

The original is a **single-widget page**: no navbar, no hero — one centered
heading, a subheading, and a single pill-shaped text input that opens a
Bootstrap-style date-time picker dropdown (the "Calendar Datepicker").
ColorLib's own category copy describes these as free Bootstrap calendar
widgets; this one is a **date + time picker** built on
`bootstrap-datetimepicker` (monim67 fork of Eonasdan 4.17.47) + moment.js.
The page renders ONE interactive widget (from the live reference DOM +
render):

1. **Heading** — **"Calendar #09"**, 28px near-black Lato, centered above the
   widget column.
2. **Subheading** — **"Calendar Datepicker"** (h5, 20px, near-black),
   centered.
3. **Pill input** (`.input-group.date#id_0` → `input.form-control`) — a
   white 50px-tall pill (`border-radius: 40px`, soft drop shadow), centered
   in a ~350px column; **empty on load** with placeholder
   **"MM/DD/YYYY hh:mm:ss"** (`required`). Clicking the input (or the
   calendar icon) opens the picker dropdown (`allowInputToggle: true`).
4. **Picker dropdown** (`.bootstrap-datetimepicker-widget`, 19em ≈ 294px
   wide, white, `border-radius: 4px`, small top arrow) with:
   - **Date view** — header row: prev chevron + **"<Month> <Year>"**
     (clickable "picker-switch" — cycles the view) + next chevron; weekday
     header `Su Mo Tu We Th Fr Sa`; a 6-row day grid (leading/trailing
     adjacent-month days render grey `.old`/`.new`); the **today** cell has
     a small bottom-right corner triangle (`#337ab7`); the **active** date
     is a solid `#337ab7` rounded cell with white text.
   - **Month view** — 12 month cells; the viewed month is active
     (`#337ab7` white). Click a month to select it.
   - **Year view** — a decade grid of years (e.g. 2000–2107); prev/next
     chevrons jump a decade; the viewed year is active. Click to select.
   - **Time screen** — hour / minute / second columns, each with up/down
     chevron increment buttons and a clock digit; an **AM/PM** toggle; the
     picker-switch header toggles back to the date screen.
   - **Footer icon row** (pink `#fc7fb2` links): **Today** (chevron-up,
     "Go to today"), **Time** (clock, "Select Time" — toggles the time
     screen), **Clear** (trash, "Clear selection" — empties the input),
     **Close** (X, "Close the picker").
   - Selecting a date writes the value into the input as
     **"MM/DD/YYYY hh:mm:ss A"** (e.g. `12/18/2020 05:00:00 PM`).
5. **No footer** in the reference — the recreation appends the minimal
   "Component Dock" footer per repo convention.

The defining signature of this template is the **pill input + Bootstrap-style
datetime picker**: the white 40px-radius input with its soft shadow, the
stock-blue `#337ab7` widget palette (active date, today corner triangle,
active month/year, clock digits) contrasting with the page's pink `#fc7fb2`
link/accent color, Lato typography on the `#f8f9fd` page, and the four-icon
picker footer (Today / Time / Clear / Close). Recreate the widget 1:1 with
matching tokens, typography, and interaction (open/close, day/month/year
navigation, time screen, Today/Clear/Close — all functional in the original
jQuery build; the recreation SHALL make them functional in React, using
native `Date` instead of moment.js).

> NAMING NOTE: the ColorLib source name "Calendar 09" is FORBIDDEN as the
> app name. **Moment** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or the
> shipped-app names embedded in TEMPLATES.md (verified 2026-08-15: no
> `apps/moment` on origin/main, no `template-moment` spec folder on
> origin/main, no `moment` in `docs/templates/`, no `[moment](...)` shipped
> link in TEMPLATES.md, and no ColorLib source slug `moment`; the existing
> `template-momentum`/`momentum` are a different word and do not collide).
> Source slug + preview URL are recorded below.

> PREVIEW NOTE (REACHABLE — different path than the default): the default
> preview URL `https://preview.colorlib.com/theme/calendar-09/` returns
> **HTTP 404** (verified 2026-08-15 via curl). The REAL live preview lives
> at **`https://preview.colorlib.com/theme/bootstrap/calendar-09/`** — the
> family path used by the sibling "Bootstrap Calendars" preps (Calendar 02 →
> `template-monthly`, 05–08 → Triptych/Ephemeris/Twilight/Sakura). Full
> reference material was captured from the live preview 2026-08-15: the
> rendered DOM (`/tmp/cal09.html`, ~3.7KB), the template stylesheet
> `css/style.css` (~220KB Bootstrap 4.3.1 bundle; the template's own rules
> are at the tail, lines 8108–8200), the widget stylesheet
> `css/bootstrap-datetimepicker.min.css` (~9.3KB, monim67 fork of Eonasdan
> 4.17.47), the interaction script `js/main.js` (~0.5KB — the
> `#datetimepicker()` init options), plus a live browser render of the page
> (computed styles + the open picker's DOM) and the TEMPLATES.md screenshot
> (`calendar-09.jpg`, 1200×972, analyzed in the browser). Design tokens
> below are extracted from the live stylesheets + live render — the current
> ground truth.

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 09" — free Bootstrap datetime-picker
  widget template (author Colorlib; source:
  https://colorlib.com/wp/template/calendar-09/). TEMPLATES.md line 693,
  **Bootstrap Calendars (20)** category (header at line 683). The
  `calendar-09` slug appears exactly once in TEMPLATES.md. The 20-item
  category is a family: siblings prepped as **Planner** (Calendar 01),
  **Monthly** (02), **Almanac** (03), **Solstice** (04), **Triptych** (05),
  **Ephemeris** (06), **Twilight** (07), **Sakura** (08) — this prep is the
  ninth; each sibling is a DIFFERENT widget layout (do not copy a
  sibling's). Calendar 09 is the first in the family that is a **datetime
  picker** (input + dropdown) rather than an always-visible calendar grid.
- **Live preview DOM — REACHABLE at `.../theme/bootstrap/calendar-09/`**
  (captured 2026-08-15, ~3.7KB HTML): `section.ftco-section` (padding 7em 0)
  → `.container` → `.row.justify-content-center` → `div.col-md-6.text-center.mb-5`
  → centered `h2.heading-section` **"Calendar #09"** → second
  `.row.justify-content-center` → `div.col-md-4.text-center` → `h3.h5`
  **"Calendar Datepicker"** → `div.w-100` → `form.datepickers` →
  `div.form-group` → `div.input-group.date#id_0` → `input.form-control`
  (type text, `value=""`, placeholder **"MM/DD/YYYY hh:mm:ss"**, `required`).
  Scripts: jquery + popper + bootstrap + `js/moment-with-locales.min.js` +
  `js/bootstrap-datetimepicker.min.js` + `js/main.js`. NO navbar, NO hero,
  NO images, NO footer, NO other sections — a single centered widget column.
- **Template stylesheet (css/style.css, ~220KB Bootstrap 4.3.1 bundle;
  custom rules at the tail, lines 8108–8200) — tokens below extracted from
  the custom rules** (the ONLY authoritative token source for the page; the
  widget itself is styled by the separate `bootstrap-datetimepicker.min.css`,
  see below):
  - `body { font-family: "Lato", Arial, sans-serif; font-size: 16px;
line-height: 1.8; font-weight: normal; background: #f8f9fd; color:
gray; }`
  - `a { transition: .3s all ease; color: #fc7fb2; }` · `a:hover, a:focus {
text-decoration: none !important; outline: none !important;
box-shadow: none; }` — **links are PINK `#fc7fb2`** (this is what colors
    the picker's footer icon links, which inherit `a` color)
  - `h1, h2, h3, h4, h5, .h1, .h2, .h3, .h4, .h5 { line-height: 1.5;
font-weight: 400; font-family: "Lato", Arial, sans-serif; color: #000;
}`
  - `.bg-primary { background: #fc7fb2 !important; }` (the template
    re-themes Bootstrap's primary to pink)
  - `.ftco-section { padding: 7em 0; }` · `.heading-section { font-size:
28px; color: #000; }`
  - `.datepickers { width: 100%; }` · `.datepickers .label-control {
font-size: 14px; }` (unused in the DOM — the label is commented out)
  - `.datepickers .form-control { padding-left: 20px; padding-right: 20px;
height: 50px !important; border-radius: 40px; border: none !important;
box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, 0.09) !important; }` ·
    `.datepickers .form-control:focus { border-radius: 40px; box-shadow:
0px 5px 13px 0px rgba(0, 0, 0, 0.14) !important; }` — **the pill input**
- **Widget stylesheet (css/bootstrap-datetimepicker.min.css, ~9.3KB —
  monim67 fork of Eonasdan bootstrap-datetimepicker 4.17.47; stock palette,
  NOT re-themed by the template) — widget tokens:**
  - `.bootstrap-datetimepicker-widget.dropdown-menu { display: block;
margin: 2px 0; padding: 4px; width: 19em; }` (≈294px computed) ·
    dropdown arrow: `:before` 7px border, `#ccc`/`rgba(0,0,0,.2)`; `:after`
    6px, white
  - `table td.day { height: 20px; line-height: 20px; width: 20px; }` ·
    `td.day:hover, td.hour:hover, td.minute:hover, td.second:hover {
background: #eee; cursor: pointer; }` · `thead tr:first-child th:hover {
background: #eee; }`
  - `table td.active, table td.active:hover { background-color: #337ab7;
color: #fff; text-shadow: 0 -1px 0 rgba(0,0,0,.25); }` — **the blue
    active cell** · `table td span.active { background-color: #337ab7;
color: #fff; }` (month/year cells)
  - `table td.today { position: relative; }` · `table td.today:before {
content: ''; display: inline-block; border: solid transparent;
border-width: 0 0 7px 7px; border-bottom-color: #337ab7;
border-top-color: rgba(0,0,0,.2); position: absolute; bottom: 4px;
right: 4px; }` — **the today corner triangle** · `td.active.today:before
{ border-bottom-color: #fff; }` (white triangle when today IS active)
  - `table td.old, table td.new { color: #777; }` · `table th.disabled {
color: #777; }`
  - `table th { text-align: center; border-radius: 4px; height: 20px;
line-height: 20px; width: 20px; }` · `th.picker-switch { width: 145px;
}` · `table td { height: 54px; line-height: 54px; width: 54px; }`
  - `.timepicker-hour, .timepicker-minute, .timepicker-second { width:
54px; font-weight: 700; font-size: 1.2em; margin: 0; }` ·
    `.bdpw-clock-digit.center { color: #333; }` · `.bdpw-clock-digit.cursor
{ color: #337ab7; }` · `.bdpw-clock-digit.disabled { color: #ccc; }`
  - `a[data-action] { padding: 6px 0; }` (footer icons; color inherits the
    page's pink `a` rule) · `.btn[data-action] { padding: 6px; }`
- **Interaction script (js/main.js, captured 2026-08-15) — behavior to
  reproduce:** one `#id_0` datetimepicker instance with:
  - `allowInputToggle: true` — clicking the input opens the picker
  - `showClose: true` (X footer button), `showClear: true` (trash footer
    button), `showTodayButton: true` (chevron-up footer button)
  - `format: "MM/DD/YYYY hh:mm:ss A"` — 12-hour clock with AM/PM
  - `icons:` — time `fa-clock-o`, date `fa-calendar-o`, up/down
    `fa-chevron-up/down`, previous/next `fa-chevron-left/right`, today
    `fa-chevron-up`, clear `fa-trash`, close `fa-close` (recreation: map to
    `lucide-react`: `Clock`, `Calendar`, `ChevronUp/Down/Left/Right`,
    `Trash2`, `X`)
- **Visual design (screenshot calendar-09.jpg, 1200×972, verified 2026-08-15
  via browser visual inspection):** a browser window (URL bar
  `preview.colorlib.com`) showing the single centered widget on the pale
  cool-grey `#f8f9fd` page. Top to bottom: centered dark heading
  **"Calendar #09"**; centered grey subheading **"Calendar Datepicker"**; a
  white pill input filled with **"12/19/2020 05:00:00 PM"** (soft shadow);
  directly below it the **open picker**: header row with a left `<` chevron,
  centered dark **"December 2020"**, and a right `>` chevron; a `Su Mo Tu We
Th Fr Sa` small-caps grey weekday row; the December 2020 grid (starts
  Tuesday), **19 rendered as a solid blue `#337ab7` cell with white text**
  (the selected date), **18 marked with a light-blue bottom-right corner
  triangle** (the today marker — Dec 18 2020 was the capture date), all
  other dates plain dark; at the picker's bottom a centered row of four
  small pink icons: chevron-up (Today), clock (Time), trash (Clear), X
  (Close). No navbar, no hero, no footer (add the Component Dock footer per
  repo convention).
- **Live preview confirmation (2026-08-15, browser render + computed styles
  of `.../theme/bootstrap/calendar-09/`):** body bg computed
  `rgb(248, 249, 253)` = `#f8f9fd`, body color `rgb(128, 128, 128)` (CSS
  `gray`), font `Lato` 16px; heading `#000` 28px; subheading `#000` 20px;
  input: white bg, color `#495057`, `border: 0`, radius 40px, height 50px,
  padding 6px 20px, shadow `rgba(0,0,0,.14) 0 5px 13px 0` (focused state
  computed), placeholder `#6c757d`; input column ≈350px wide (`col-md-4`).
  The picker opened on click: widget white, `1px solid rgba(0,0,0,.15)`
  border, radius 4px, width 294px, font `"Helvetica Neue", Helvetica,
Arial, sans-serif`, text `#333`; header showed "August 2026" (real
  today), prev/next `th` bold `#333` with 4px radius; weekday header `th.dow`
  bold `#333`; day cells `#333`, `.old`/`.new` cells `#777`; the active cell
  (= today 15) solid `#337ab7` white text radius 4px with the white corner
  triangle (`td.active.today:before`); the input auto-filled
  **"08/15/2026 01:13:39 AM"** (live now) on open; footer links computed
  color `rgb(252, 127, 178)` = `#fc7fb2` (pink, inherited from the template
  `a` rule) with titles "Go to today" / "Select Time" / "Clear selection" /
  "Close the picker". Header-click view cycling present: month grid (12
  spans) and year grid ("2021-2032" / "2000-2107" ranges) in the DOM.
- **Section order (1:1 from the reference render):** single widget —
  heading ("Calendar #09") → subheading ("Calendar Datepicker") → pill input
  → picker dropdown (date view / month view / year view / time screen +
  footer icons) → (Component Dock footer appended per repo convention).
- **December 2020 layout facts (for the initial render):** 1 December 2020
  was a **Tuesday** → the grid's first row has two leading `.old` cells
  (Sun 29, Mon 30 of November) followed by 1–5; **18 December 2020 was a
  Friday** (the screenshot's today marker); **19 December 2020 was a
  Saturday** (the screenshot's active date); 31 December 2020 was a
  Thursday → the month occupies 5 full rows plus a 6th row with two
  trailing `.new` cells (Fri 1, Sat 2 of January). Adjacent months for nav
  scenarios: November 2020 — 30 days, 1 Nov was a Sunday (no leading
  blanks); January 2021 — 31 days, 1 Jan was a Friday (five leading blanks
  Sun–Thu). Year-view range around 2020: 2015–2026 (the decade containing
  2020, rendered as "2015"–"2026"; Eonasdan's default year range is
  `yearOffset: 10, yearEnd: 10` around the current year).
- **Reference "today" decision (family convention, like
  Planner/Monthly/Twilight/Sakura):** the widget hardcodes a FIXED reference
  today = **18 December 2020** (the screenshot's capture date, where the
  today marker sits) so the initial render is deterministic and tests are
  stable (the original initializes on the real `new Date()` — a moving
  target). The screenshot shows active = 19 with the today marker on 18
  (the capture's user had selected the 19th); the recreation SHALL start
  with **active = today = 18 December 2020, 5:00:00 PM** (input text
  "12/18/2020 05:00:00 PM") so the today marker and active cell coincide —
  clicking 19 reproduces the screenshot's exact state.
- **Copy is fixed and minimal:** "Calendar #09" (title — keep the `#09`
  suffix source-exact), "Calendar Datepicker" (subheading), the input
  placeholder "MM/DD/YYYY hh:mm:ss", weekday/day numerals, "Su".."Sa"
  headers, month names, the AM/PM toggle ("AM"/"PM"), and the picker
  footer's icon tooltips (Go to today / Select Time / Clear selection /
  Close the picker — used as `aria-label`s in the recreation). No lorem, no
  other body text.

## Design tokens

### Colors

Palette (extracted from the live preview stylesheets — `css/style.css`
custom rules for the page, `css/bootstrap-datetimepicker.min.css` for the
widget — plus the live render computed styles; the current ground truth; the
2020-era screenshot and the live render agree on all values):

| Token             | Hex / value                     | Usage                                                                                                                  |
| ----------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| brand pink        | `#fc7fb2`                       | page `a` link color; picker footer icon links (inherit `a`); `.bg-primary` re-theme (unused on the page)               |
| page background   | `#f8f9fd`                       | very light grey-blue page bg (body)                                                                                    |
| heading ink       | `#000000`                       | "Calendar #09" title, "Calendar Datepicker" subheading, all h1–h5                                                      |
| body text         | `gray` (`#808080` comp.)        | default body text color                                                                                                |
| input text        | `#495057`                       | typed/selected value in the pill input (Bootstrap `.form-control`)                                                     |
| input placeholder | `#6c757d`                       | "MM/DD/YYYY hh:mm:ss" placeholder                                                                                      |
| input background  | `#ffffff`                       | pill input                                                                                                             |
| input shadow      | `rgba(0,0,0,.09)` (focus `.14`) | `0px 5px 13px 0px` soft drop shadow under the pill                                                                     |
| widget blue       | `#337ab7`                       | ACTIVE date cell bg, today corner triangle, active month/year cell bg, clock-digit cursor color (stock widget palette) |
| widget border     | `rgba(0,0,0,.15)`               | picker dropdown `1px solid` border                                                                                     |
| widget bg         | `#ffffff`                       | picker dropdown                                                                                                        |
| widget text       | `#333333`                       | day numbers, weekday header, month/year names, clock digits (`.center`)                                                |
| old/new day       | `#777777`                       | adjacent-month cells (`.old`/`.new`), disabled cells                                                                   |
| hover fill        | `#eeeeee`                       | day/month/year cell hover, header chevron hover                                                                        |
| on-accent text    | `#ffffff`                       | active date number, active month/year name (with `text-shadow: 0 -1px 0 rgba(0,0,0,.25)`)                              |
| clock disabled    | `#cccccc`                       | disabled `.bdpw-clock-digit.disabled`                                                                                  |
| dropdown arrow    | `#cccccc` / white               | picker's small top arrow (7px grey `rgba(0,0,0,.2)` outer, 6px white inner)                                            |

No gradients, no photography — flat white-plus-blue on the pale grey page,
with ONE pink accent (the links / footer icons).

### Fonts

- **Lato** (weights 300/400/700) — the reference page's inline head loads
  Lato via Cloudflare cf-fonts (same as the sibling Calendar preps); body
  rule: `font-family: "Lato", Arial, sans-serif; font-size: 16px;
line-height: 1.8`. Load Lato via Google Fonts `<link>` in `index.html`.
- Title "Calendar #09": 28px, weight 400, `#000`, centered.
- Subheading "Calendar Datepicker": 20px (h5), weight 400, `#000`, centered.
- Input: 16px Lato, `#495057`, placeholder `#6c757d` (15px-ish in the
  reference, `#6c757d` per Bootstrap `.form-control::placeholder`).
- Widget: `"Helvetica Neue", Helvetica, Arial, sans-serif` (the widget's own
  stack — a single Lato face for the widget is an acceptable simplification,
  note in PR). Header "Month Year" ~16px; weekday headers small-caps grey
  (Bootstrap renders `th.dow` ~13px); day numbers 16px; clock digits
  `font-size: 1.2em; font-weight: 700`.

### Radii / shapes

- **Pill input**: `border-radius: 40px`, height **50px**, padding
  `6px 20px`, no border, soft `0 5px 13px` shadow (0.09 → 0.14 on focus).
- **Picker dropdown**: `border-radius: 4px` (cells too), width `19em`
  (≈294px), `1px solid rgba(0,0,0,.15)` border, small grey/white top arrow.
- **Active date cell**: solid `#337ab7` fill, radius 4px, white text.
- **Today marker**: 7px triangle at the cell's bottom-right corner
  (`border-width: 0 0 7px 7px`, `#337ab7`; white when the cell is also
  active).
- Clock digits: plain text (54px-wide columns), no circles.

### Layout

- Page: `#f8f9fd` background; the widget column is centered horizontally
  with `padding: 7em 0` (~`py-28`).
- Heading column: `col-md-6` centered, `mb-5` (~2rem bottom margin); widget
  column: `col-md-4` centered (~350px wide at md+). Both stack full-width
  below `md` (Bootstrap grid) — recreation uses a centered max-w container.
- Input: full width of the widget column, 50px tall pill, centered text
  left-aligned with 20px side padding.
- Picker: dropdown anchored below the input (left edge aligned), 294px
  wide; date grid 6 rows × 7 columns; day cells 20px (small) with generous
  row height (~54px cell height in the source table; the recreation SHALL
  keep the grid compact and centered).
- Footer icon row: centered, four icon-only links (`a[data-action]`,
  `padding: 6px 0`), pink `#fc7fb2`.
- Reference is a desktop widget; the recreation SHALL be responsive: the
  widget column shrinks on mobile, the picker stays within the viewport
  (no horizontal overflow), grid columns preserved at all widths.

## Requirements

### Requirement: Page structure

The system SHALL render the Moment page as a single centered
datetime-picker widget on the `#f8f9fd` background, with a minimal footer
appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Moment page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be `#f8f9fd`
- **AND** the page SHALL contain, in order: the title **"Calendar #09"**,
  the subheading **"Calendar Datepicker"**, the pill input, and the footer
- **AND** the widget column SHALL be centered horizontally with generous
  vertical padding (`py-28` equivalent) and a max-width of ~350px
- **AND** there SHALL be no navbar, no hero, and no other sections
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Title and subheading

The system SHALL render the widget title **"Calendar #09"** (28px, `#000`)
and the subheading **"Calendar Datepicker"** (20px, `#000`) centered above
the input.

#### Scenario: Title render

- **GIVEN** the Moment page is rendered
- **WHEN** the user views the top of the page
- **THEN** the title SHALL read **"Calendar #09"** (source-exact, including
  the `#09` suffix — do NOT "fix" it to another number)
- **AND** the subheading SHALL read **"Calendar Datepicker"**
- **AND** both SHALL be centered, near-black, Lato, weight 400

### Requirement: Pill input

The system SHALL render a single text input styled as a white 50px pill
(`border-radius: 40px`, soft drop shadow, no border), empty on load with
placeholder **"MM/DD/YYYY hh:mm:ss"** and `required`.

#### Scenario: Input render

- **GIVEN** the Moment page is rendered
- **WHEN** the user views the widget column
- **THEN** a text input SHALL render full-width in the column, 50px tall,
  with `border-radius: 40px`, white background, no border, and the soft
  `rgba(0,0,0,.09)` shadow
- **AND** the input SHALL be empty with placeholder **"MM/DD/YYYY hh:mm:ss"**
- **AND** the input SHALL be `required` (native HTML validation on form
  submit)

#### Scenario: Open the picker

- **GIVEN** the pill input is rendered
- **WHEN** the user clicks the input
- **THEN** the picker dropdown SHALL open below the input
- **AND** the input SHALL be populated with the current selection formatted
  as **"MM/DD/YYYY hh:mm:ss A"** (initial: "12/18/2020 05:00:00 PM")

### Requirement: Date view

The system SHALL render the picker's date view: a header row (prev chevron +
"Month Year" picker-switch + next chevron), a `Su Mo Tu We Th Fr Sa`
weekday header, and a 6×7 day grid with old/new adjacent-month cells, a
today corner triangle, and a solid-blue active cell.

#### Scenario: Date view render (initial)

- **GIVEN** the picker is open with the reference view (December 2020)
- **WHEN** the user views the date grid
- **THEN** the header SHALL read **"December 2020"** with prev/next chevrons
  on the sides (bold `#333`, 4px radius, `#eee` hover)
- **AND** a weekday header row SHALL read `Su Mo Tu We Th Fr Sa`
- **AND** the grid SHALL show December 2020 with two leading `.old` cells
  (29, 30) before the 1st (1 Dec 2020 = Tuesday) and two trailing `.new`
  cells (1, 2) after the 31st (31 Dec 2020 = Thursday) — 6 rows total
- **AND** adjacent-month cells SHALL render `#777`; in-month days SHALL
  render `#333`
- **AND** the cell for **18** SHALL show the today corner triangle
  (`#337ab7`), and SHALL also be the active cell: solid `#337ab7` fill,
  white text, radius 4px (white triangle per `td.active.today:before`)
- **AND** the input SHALL read **"12/18/2020 05:00:00 PM"**

#### Scenario: Select a date

- **GIVEN** the picker is open
- **WHEN** the user clicks the **19** cell
- **THEN** the active cell SHALL move to 19 (solid `#337ab7`, white text)
- **AND** the input SHALL update to **"12/19/2020 05:00:00 PM"** (time
  preserved)
- **AND** the today triangle SHALL remain on 18
- **AND** the picker SHALL stay open

#### Scenario: Navigate months

- **GIVEN** the picker is open on December 2020
- **WHEN** the user clicks the prev chevron
- **THEN** the grid SHALL re-render November 2020 (30 days, 1 Nov = Sunday,
  no leading blanks)
- **WHEN** the user clicks the next chevron twice
- **THEN** the grid SHALL re-render January 2021 (31 days, 1 Jan = Friday,
  five leading blanks)

#### Scenario: Hover feedback

- **GIVEN** the picker is open
- **WHEN** the user hovers a day, header chevron, or month/year cell
- **THEN** the cell SHALL fill `#eeeeee`

### Requirement: Month view

The system SHALL render a month picker when the header (picker-switch) is
clicked once: a 12-cell grid of month names with the viewed month active.

#### Scenario: Month view

- **GIVEN** the picker is open on the date view (December 2020)
- **WHEN** the user clicks the "December 2020" header
- **THEN** the view SHALL switch to a grid of 12 months
- **AND** "Dec" SHALL be active (solid `#337ab7`, white text); hover fills
  `#eee`
- **WHEN** the user clicks "May"
- **THEN** the view SHALL return to the date grid for May 2020
- **AND** the header SHALL read "May 2020"

### Requirement: Year view

The system SHALL render a year picker when the header is clicked twice: a
decade grid with the viewed year active, prev/next chevrons jumping a
decade.

#### Scenario: Year view

- **GIVEN** the picker is open on the date view (December 2020)
- **WHEN** the user clicks the header twice
- **THEN** the view SHALL switch to a decade grid of years around 2020
  (2015–2026, the Eonasdan default `yearOffset: 10, yearEnd: 10`)
- **AND** "2020" SHALL be active (solid `#337ab7`, white text)
- **WHEN** the user clicks "2018"
- **THEN** the view SHALL return to the date grid for December 2018

### Requirement: Time screen

The system SHALL render a time screen (toggleable from the date view) with
hour / minute / second columns, each with up/down increment chevrons, an
AM/PM toggle, and a header that returns to the date view.

#### Scenario: Open the time screen

- **GIVEN** the picker is open on the date view
- **WHEN** the user clicks the clock footer icon ("Select Time")
- **THEN** the time screen SHALL render: hour, minute, and second columns
  with up/down chevron buttons and clock digits (bold, 1.2em)
- **AND** the current time SHALL read 05 : 00 : 00 (from the reference
  selection) with **PM**
- **WHEN** the user clicks the header (picker-switch)
- **THEN** the view SHALL return to the date view

#### Scenario: Adjust time

- **GIVEN** the time screen is open showing 05:00:00 PM
- **WHEN** the user clicks the hour-up chevron
- **THEN** the hour SHALL become 06 (wrapping at 12-hour boundaries per the
  AM/PM mode)
- **WHEN** the user clicks the AM/PM toggle
- **THEN** the period SHALL flip to AM
- **AND** the input SHALL reflect the new time as **"MM/DD/YYYY hh:mm:ss A"**
  (e.g. "12/18/2020 06:00:00 AM")

### Requirement: Picker footer actions

The system SHALL render four pink footer icons below the grid: Today
(chevron-up), Time (clock), Clear (trash), Close (X) — each with an
`aria-label` (Go to today / Select Time / Clear selection / Close the
picker).

#### Scenario: Today

- **GIVEN** the picker is open with a selection other than the reference
  today (e.g. the 19th)
- **WHEN** the user clicks the Today icon
- **THEN** the active date SHALL become the reference today (18 December 2020) and the input SHALL update accordingly
- **AND** the time SHALL be preserved

#### Scenario: Clear

- **GIVEN** the picker is open with a value in the input
- **WHEN** the user clicks the Clear icon
- **THEN** the input SHALL be emptied
- **AND** no date SHALL be active in the grid

#### Scenario: Close

- **GIVEN** the picker is open
- **WHEN** the user clicks the Close icon
- **THEN** the picker SHALL close
- **AND** the input SHALL keep its current value

#### Scenario: Click-away

- **GIVEN** the picker is open
- **WHEN** the user clicks anywhere outside the input and the picker
- **THEN** the picker SHALL close

### Requirement: Footer

The system SHALL render a minimal footer per repo convention.

#### Scenario: Footer render

- **GIVEN** the page is scrolled to the bottom
- **THEN** a footer SHALL show a muted line linking
  https://www.componentdock.com/ ("Component Dock")

## Verification checklist

- [ ] Single page, all parts in source order: "Calendar #09" title →
      "Calendar Datepicker" subheading → pill input → picker dropdown →
      Component Dock footer
- [ ] Page bg `#f8f9fd`; Lato via Google Fonts; links pink `#fc7fb2`
- [ ] Pill input: 50px tall, radius 40px, no border, soft shadow
      (0.09 → 0.14 focus), placeholder "MM/DD/YYYY hh:mm:ss", `required`,
      empty on load
- [ ] Click input → picker opens and input fills "12/18/2020 05:00:00 PM"
      (fixed reference today = 18 Dec 2020, 5:00:00 PM)
- [ ] Date view: header "December 2020" + prev/next chevrons, `Su..Sa`
      header, 6×7 grid with `.old`/`.new` grey cells (#777), in-month days
      `#333`, hover `#eee`
- [ ] Today marker: bottom-right corner triangle `#337ab7` on 18 (white when
      active); active cell solid `#337ab7` white text radius 4px
- [ ] Date click moves active + updates input "MM/DD/YYYY hh:mm:ss A", picker
      stays open
- [ ] Month navigation: Nov 2020 (no leading blanks) / Jan 2021 (five
      leading blanks) grids verified
- [ ] Header click cycles views: date → month grid → year grid (2015–2026
      around 2020) → back; month/year selection returns to the date grid
- [ ] Time screen: clock icon toggles; hour/minute/second columns with
      up/down chevrons; AM/PM toggle; header returns to date view; input
      reflects time changes
- [ ] Footer icons (pink `#fc7fb2`, lucide-react): Today (chevron-up),
      Time (clock), Clear (trash), Close (X) with aria-labels; Today keeps
      time; Clear empties input; Close + click-away close the picker
- [ ] No ColorLib assets copied: native `Date` (no moment.js), lucide-react
      icons, Google Fonts Lato, no external widget CSS
- [ ] Footer links https://www.componentdock.com/ (required, no ColorLib in
      app code)
- [ ] `apps/moment` package `@free-react-templates/moment`; CNAME
      `moment.free.componentdock.com`; homepage set accordingly
- [ ] Responsive: widget column shrinks on mobile, picker fits viewport, no
      horizontal overflow
- [ ] 100% coverage tests, per-app gate green (`scripts/verify-app.sh moment`)
