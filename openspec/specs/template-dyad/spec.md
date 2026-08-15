# Template: Dyad (Calendar / Utility Widget — Dual-Calendar Date-Range Picker)

## Purpose

Dyad is a minimal single-page date-range-picker template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 18" website template design
(source: https://colorlib.com/wp/template/calendar-18/), built under a
DIFFERENT name (Dyad — "a pair", fitting a widget made of TWO linked
calendars selecting a start+end date, and the natural successor to the
series' prior renames: chronos, metronome, kalends, span, equinox, interval,
lunar, epoch) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **dyad** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`calendar-18`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Dyad lives in `apps/dyad` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 18" — one of the 20 "Bootstrap Calendars"
  demos: a single centered page holding a dual-calendar INLINE date-RANGE
  picker (Bootstrap 4.3.1 + jQuery + the Rome.js date-picker library; the
  DOM uses NO images and NO icon fonts — the nav arrows are CSS `::before`
  text characters). The demo brands itself "Calendar #7 (Inline + Result +
  Range)" (the series numbering is inconsistent — slug is calendar-18, page
  title says "Calendar #7"; the "Range" suffix is what distinguishes it from
  calendar-17/epoch); the recreation brands itself **Dyad**.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-18/`
  (reachable; DOM fetched — 13.3KB HTML + `css/style.css` (886B custom,
  mostly Bootstrap-reset boilerplate, byte-identical to calendar-17's) +
  `css/rome.css` (1.7KB Rome picker skin, byte-identical to calendar-17's) +
  Bootstrap 4.3.1 + jQuery; rendered live in a browser and the interaction
  verified end-to-end).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/calendar-18/`
  404s — the whole "Bootstrap Calendars" series lives under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  Lunar/calendar-16, Chronos/calendar-10, and Epoch/calendar-17 preps;
  `products.js` has no calendar entries at all).
- **Screenshot:** `calendar-18.jpg` (1200×972 AVIF, converted + viewed in
  browser) — ultra-minimal: very light grey page, centered heading
  "Calendar #7 (Inline + Result + Range)", below it two side-by-side grey
  rounded disabled inputs (placeholders "Check in" and "Check out"), and TWO
  white rounded cards floating on soft drop shadows: each shows a centered
  month header "February 2021" with `<` / `>` arrows, a weekday row
  (Su Mo Tu We Th Fr Sa — no "Me" typo), a 7-column grid of square day
  cells, and day 16 highlighted as a solid salmon-pink CIRCLE with white
  text in BOTH calendars. Days before the 16th render greyed/disabled in
  both cards (the range lock). No other page furniture.
- **Stack of the source:** Bootstrap 4.3.1 grid/utilities + jQuery +
  Rome.js v2.1.22. `js/main.js` runs
  `rome(inline_cal_from, {time: false, inputFormat: 'MMMM DD, YYYY',
dateValidator: rome.val.beforeEq(inline_cal_to)}).on('data', function
(value) { result_from.value = value; })` and the mirror
  `rome(inline_cal_to, {... dateValidator: rome.val.afterEq(inline_cal_from)})`
  echoing into `result_to` — two inline calendars, no time picker, whose
  picked dates are echoed into the two disabled `#result_from` /
  `#result_to` inputs as "MMMM DD, YYYY" and whose valid ranges are
  mutually constrained (check-in ≤ check-out). Recreation must NOT copy any
  of this; use the monorepo stack + lucide-react icons (ChevronLeft /
  ChevronRight for the nav arrows) + no images at all (this design is pure
  CSS).
- **What differs from Epoch (Calendar 17):** Epoch has ONE calendar + ONE
  result input ("Select date"); this demo adds the RANGE dimension — TWO
  calendars side by side (`.col-lg-6` each, stacking below on small
  screens), TWO result inputs ("Check in" / "Check out"), and mutual
  date-validation (the to-calendar disables days before the picked
  from-date; the from-calendar disables days after the picked to-date).
  Everything else (card CSS, tokens, grid) is byte-identical to Epoch's.
  Implementers: copy the Epoch date-picker logic twice and add the range
  coupling.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — there is no navbar, no hero band, no footer
in the source demo:

1. Section (`.content`) — page background `#efefef`, vertical padding
   `7rem 0` (computed 112px), content centered.
   - Container (`.container.text-left`) → centered row
     (`.row.justify-content-center`) → heading column
     (`.col-md-10.text-center`) → `<h2 class="mb-5 text-center">` reading
     "Calendar #7 (Inline + Result + Range)" (20px, weight 500, `#212529`,
     centered, `margin-bottom: 3rem`) — recreation: "Select Your Dates"
     (paraphrase of the widget label; content-kind preserved).
   - `<div class="d-flex">` — horizontal flex row, centered column parent:
     - `<input type="text" class="form-control m-2 mb-3" id="result_from"
placeholder="Check in" disabled>` — echoes the FROM pick.
     - `<input type="text" class="form-control m-2 mb-3" id="result_to"
placeholder="Check out" disabled>` — echoes the TO pick.
       Both empty (placeholders visible) on first load even though today is
       preselected in both grids; each fills with "MMMM DD, YYYY" the moment
       its calendar's day is activated (verified live: day 10 → "August 10,
       2026"; day 5 → "August 05, 2026" — the `DD` token zero-pads).
   - `<form action="#" class="row">` → two `.col-lg-6.mb-4` columns, each
     mounting one Rome inline calendar (`#inline_cal_from` /
     `#inline_cal_to`) — side by side on `lg+` (≥992px), stacked on smaller
     viewports:
     - `.rd-container` (inline-block, white, padding 10px, shadow
       `0 15px 30px 0 rgba(0,0,0,.2)`, text-align center) →
       - `.rd-date` → `.rd-month` →
         - `<button class="rd-back">` — `::before` content `←` (16px,
           black), floated left. Recreation: lucide ChevronLeft, aria-label
           "Previous month".
         - `<button class="rd-next">` — `::before` content `→`, floated
           right. Recreation: lucide ChevronRight, aria-label "Next month".
         - `.rd-month-label` — e.g. "August 2026" (16px, weight 400,
           `#212529`).
         - `table.rd-days` (margin-top 20px):
           - `thead.rd-days-head` → one `tr` → 7× `<th class="rd-day-head">`
             Su Mo Tu We Th Fr Sa (16px, weight 700 — default th bold —
             `#212529`).
           - `tbody.rd-days-body` → 5–6 `tr.rd-days-row` (month-dependent)
             → 7× `<td class="rd-day-body">` per row — 50×50px square
             cells, `cursor: pointer`, `text-align: center`,
             `line-height: 0`, clickable. Modifier classes:
             `.rd-day-prev-month` / `.rd-day-next-month` (adjacent-month
             days, `#ccc`), `.rd-day-selected` (salmon-pink filled circle,
             white text), `.rd-day-disabled` (out-of-range days, `#fcc`,
             `cursor: default`).

The widget is a real interactive dual date-range picker: each calendar
preselects today; activating a day in the FROM calendar selects it AND
writes "MMMM DD, YYYY" into the Check in input AND disables every day
before it in the TO calendar; activating a day in the TO calendar does the
mirror (writes Check out, disables days after it in the FROM calendar).
Navigation arrows move each calendar independently while the selections
persist.

## Design tokens (from preview stylesheets `css/rome.css` + `css/style.css` + live computed styles)

- **Brand / selection color:** `#f67280` (salmon pink) — the selected day
  circle background (`.rd-day-selected`, also `.rd-time-selected`).
  Put in `@theme` and use via Tailwind classes.
- **Page background:** `#efefef` (very light grey); body text `#212529`
  (Bootstrap default dark grey).
- **Card (`.rd-container`):** `#fff` background, `padding: 10px`,
  `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)` (Tailwind:
  `shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]`), `text-align: center`,
  inline-block (shrink-wraps the grid). The screenshot shows slightly
  rounded corners on the card — the live demo renders square
  (`border-radius: 0`); the visible rounding is the shadow's soft edge.
  Keep square like the live DOM (1:1 to the current original).
- **Fonts:** `"Roboto", -apple-system, ...` for the whole page (Google
  Fonts Roboto; the source @font-face loaded Roboto 300/400 — the demo also
  prefetches Poppins 300/400/500 but the body CSS uses Roboto). Load Roboto
  300, 400, 500, 700 via Google Fonts `<link>` in index.html (no font files
  copied).
- **Heading:** `<h2>` 20px, weight 500, `#212529`, centered,
  `margin-bottom: 3rem` (Bootstrap `mb-5`).
- **Result inputs (Check in / Check out):** Bootstrap `form-control`
  tokens — `display: block`, `padding: .375rem .75rem`, `font-size: 1rem`,
  `line-height: 1.5`, `color: #495057`, `background-color: #fff`,
  `border: 1px solid #ced4da`, `border-radius: .25rem`; disabled state:
  `background-color: #e9ecef`, `opacity: 1` (grey fill, grey border — the
  "rounded grey inputs" in the screenshot). Laid out in a `.d-flex` row
  with `margin: .5rem` (`m-2`) all around + `margin-bottom: 1rem` (`mb-3`)
  on each; the two inputs sit side by side with a small gap.
- **Section rhythm:** `padding: 7rem 0` (Tailwind `py-28`); `.container`
  max-width ~1140px; `.col-md-10` = ~83% width on md+, centered via
  `.justify-content-center`; the two calendars each take `.col-lg-6`
  (50% width on ≥992px, full width stacked below).
- **Month label:** 16px, weight 400, `#212529`, centered, between the two
  nav buttons.
- **Nav arrows:** `::before` text `←` / `→` at 16px, black; buttons are
  borderless, backgroundless, `float: left/right`, `cursor: pointer`.
  Recreation: lucide ChevronLeft/ChevronRight (same size class), buttons
  with aria-labels.
- **Weekday header cells (`th.rd-day-head`):** 16px, weight 700 (browser
  default th), `#212529`.
- **Day cells (`.rd-day-body`):** `width: 50px!important; height:
50px!important`, `line-height: 0`, `text-align: center`, `cursor:
pointer`. Current-month text `#212529`; adjacent-month days
  (`.rd-day-prev-month` / `.rd-day-next-month`) `#ccc`; disabled days
  `.rd-day-disabled` `#fcc` (pinkish grey — the "greyed/pinkish disabled"
  days seen in the screenshot), `cursor: default`.
- **Selected day (`.rd-day-selected`):** background `#f67280`, color `#fff`,
  `border-radius: 50%` (a perfect circle inside the square cell).
- **Grid:** `table.rd-days` with `margin-top: 20px`; 7 fixed columns;
  5–6 rows depending on the month (August 2026 starts on a Saturday → 6
  rows); the first/last rows include adjacent-month days to fill the grid.
- **Icons/images:** NONE in the source DOM except the two text arrows per
  calendar — recreation uses lucide ChevronLeft/ChevronRight and no images.

## Requirements

### Requirement: Page composition

The system SHALL render a single centered section on the very light grey
background (`#efefef`) with generous vertical padding, containing a heading,
the two range result inputs, and the pair of inline date-picker cards.

#### Scenario: Page layout

- **GIVEN** the Dyad page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be `#efefef`
- **AND** the section SHALL have vertical padding of `7em` (Tailwind
  `py-28`)
- **AND** the content SHALL be horizontally centered
- **AND** the body font SHALL be Roboto (via Google Fonts link in
  index.html)

### Requirement: Section heading

The system SHALL render a centered heading above the inputs, paraphrasing
the source's "Calendar #7 (Inline + Result + Range)" title label.

#### Scenario: Heading text

- **GIVEN** the Dyad page is rendered
- **WHEN** the heading is displayed
- **THEN** an H2 SHALL read "Select Your Dates"
- **AND** it SHALL be centered, 20px, `#212529`, weight 500, with
  `margin-bottom: 3rem`

### Requirement: Range result inputs

The system SHALL render two disabled text inputs side by side below the
heading, styled as Bootstrap form-controls (grey disabled fill, rounded,
small gap between them), with placeholders "Check in" and "Check out", that
echo the currently selected from/to dates.

#### Scenario: Inputs on first load

- **GIVEN** the Dyad page is rendered
- **WHEN** the inputs are inspected
- **THEN** two text inputs SHALL be present, both disabled, with
  placeholders "Check in" and "Check out" in that order
- **AND** both SHALL be empty on first load (no value) even though today is
  preselected in both grids

#### Scenario: Input styling

- **GIVEN** the Dyad page is rendered
- **WHEN** an input is inspected
- **THEN** the input SHALL have a grey disabled fill (`#e9ecef`), a 1px
  grey border (`#ced4da`), and rounded corners
- **AND** the two inputs SHALL sit side by side in a flex row with a small
  margin gap and `margin-bottom: 1rem`

#### Scenario: Echo the from-date

- **GIVEN** the from-calendar shows a month
- **WHEN** a day is activated (e.g. day 10 of August 2026)
- **THEN** the Check in input value SHALL become the date formatted as
  "MMMM DD, YYYY" (e.g. "August 10, 2026")
- **AND** the day SHALL be formatted with a zero-padded day token (day 5 →
  "August 05, 2026")

#### Scenario: Echo the to-date

- **GIVEN** the to-calendar shows a month
- **WHEN** a day is activated (e.g. day 20 of August 2026)
- **THEN** the Check out input value SHALL become the date formatted as
  "MMMM DD, YYYY" (e.g. "August 20, 2026")

### Requirement: Picker card pair

The system SHALL render the two date pickers inside white cards
(`#fff`, padding 10px, shadow `0 15px 30px 0 rgba(0,0,0,0.2)`) that
shrink-wrap their calendar grids, side by side on desktop (two equal
columns) and stacked on smaller viewports, centered on the page.

#### Scenario: Card pair layout

- **GIVEN** the Dyad page is rendered
- **WHEN** the picker cards are displayed
- **THEN** two cards SHALL be present, each with a white background and
  10px padding
- **AND** each card SHALL have the soft drop shadow
- **AND** on a viewport ≥ 992px the two cards SHALL sit side by side in two
  equal columns
- **AND** on a viewport < 992px the two cards SHALL stack vertically
- **AND** the pair SHALL be centered horizontally
- **AND** each card width SHALL fit its content (the 7-column grid)

### Requirement: Month header with navigation (per calendar)

Each calendar SHALL render a centered month/year label (e.g. "August 2026")
with a previous-month button on its left and a next-month button on its
right; the two calendars navigate independently.

#### Scenario: Month label

- **GIVEN** a picker is rendered for a given month
- **WHEN** its header is inspected
- **THEN** a label SHALL read "<Month> <Year>" (e.g. "August 2026")
- **AND** the label SHALL be centered, 16px, weight 400, `#212529`

#### Scenario: Navigation buttons

- **GIVEN** a picker is rendered
- **WHEN** its header is inspected
- **THEN** a previous-month button SHALL sit left of the label with an
  accessible name "Previous month"
- **AND** a next-month button SHALL sit right of the label with an
  accessible name "Next month"
- **AND** both SHALL be borderless, backgroundless icon buttons with
  `cursor: pointer` and visible focus rings

#### Scenario: Navigate months independently

- **GIVEN** both pickers show August 2026
- **WHEN** the next-month button of the from-calendar is activated
- **THEN** the from-calendar label SHALL read "September 2026" and its grid
  SHALL show September's days
- **AND** the to-calendar SHALL still show "August 2026"
- **AND** the selected dates SHALL remain unchanged by navigation

### Requirement: Weekday header row (per calendar)

Each calendar SHALL render a header row of seven abbreviated weekday names
starting Sunday: Su, Mo, Tu, We, Th, Fr, Sa.

#### Scenario: Weekday headers

- **GIVEN** a picker is rendered
- **WHEN** its header row is inspected
- **THEN** seven column headers SHALL read Su, Mo, Tu, We, Th, Fr, Sa in
  order
- **AND** they SHALL be styled 16px, weight 700, `#212529`
- **AND** "Mo" SHALL be used for Monday (the "Me" seen in the calendar-16
  screenshot is a source typo; this demo's screenshot AND live DOM both
  render "Mo")

### Requirement: Day grid (per calendar)

Each calendar SHALL render the month's days in a 7-column grid of square
50×50px cells, with adjacent-month days filling the first and last rows.

#### Scenario: Current-month cells

- **GIVEN** a picker shows a month
- **WHEN** its grid is inspected
- **THEN** every day of the current month SHALL be a clickable 50×50px
  cell
- **AND** current-month day numbers SHALL be `#212529`
- **AND** cells SHALL have `cursor: pointer` and `text-align: center`

#### Scenario: Adjacent-month cells

- **GIVEN** a picker shows a month whose first day is not a Sunday or
  whose last day is not a Saturday
- **WHEN** the first or last grid row is inspected
- **THEN** leading/trailing cells SHALL show the adjacent month's days in
  the faint colour `#ccc`

#### Scenario: Row count

- **GIVEN** a picker shows a month
- **WHEN** its grid body is inspected
- **THEN** it SHALL contain 5 or 6 rows (exactly enough to cover the
  month's days with a Sunday-start week), with no empty cells

### Requirement: Selected date (per calendar)

Each calendar SHALL preselect today's date on first render and highlight it
as a salmon-pink circle with white text; clicking any day moves the
selection to that day.

#### Scenario: Today preselected in both calendars

- **GIVEN** the system clock is fixed (tests mock the date)
- **WHEN** the pickers first render
- **THEN** today's day cell SHALL be marked selected in BOTH calendars
- **AND** each selected cell SHALL have background `#f67280`, white text,
  and `border-radius: 50%`

#### Scenario: Click a day to select

- **GIVEN** a picker is rendered with day 15 selected
- **WHEN** day 20 in that picker is activated
- **THEN** day 20 SHALL become the selected day (pink circle, white text)
- **AND** day 15 SHALL revert to the normal cell style
- **AND** the matching result input (Check in for the from-calendar, Check
  out for the to-calendar) SHALL update to "MMMM DD, YYYY" of day 20

### Requirement: Range validation

The two calendars SHALL be coupled into a valid range: the from-date must
be before or equal to the to-date. Once a from-date is picked, the
to-calendar SHALL disable every day before it; once a to-date is picked,
the from-calendar SHALL disable every day after it.

#### Scenario: From-date locks the to-calendar

- **GIVEN** both pickers show August 2026 and no dates are picked
- **WHEN** day 10 in the from-calendar is activated
- **THEN** the Check in input SHALL read "August 10, 2026"
- **AND** every day before August 10 (July trailing cells + August 1–9)
  SHALL be disabled in the to-calendar (`#fcc`, `cursor: default`,
  non-activatable)
- **AND** August 10 and later days SHALL remain activatable in the
  to-calendar

#### Scenario: To-date locks the from-calendar

- **GIVEN** a from-date of August 10 has been picked in the from-calendar
- **WHEN** day 20 in the to-calendar is activated
- **THEN** the Check out input SHALL read "August 20, 2026"
- **AND** every day after August 20 (August 21–31 + September leading
  cells) SHALL be disabled in the from-calendar
- **AND** August 20 and earlier days SHALL remain activatable in the
  from-calendar

#### Scenario: Picking a new from-date re-locks the to-calendar

- **GIVEN** the range is 10 → 20 August 2026
- **WHEN** day 5 in the from-calendar is activated
- **THEN** the Check in input SHALL read "August 05, 2026"
- **AND** the to-calendar SHALL now disable only days before August 5
- **AND** the previously selected to-date (20) SHALL remain selected

### Requirement: Responsive behavior

The system SHALL keep the picker pair usable from mobile to desktop; the
cards are content-sized and centered at every viewport, stacking below
992px.

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 992px
- **WHEN** the page is rendered
- **THEN** both cards SHALL be centered in a ~83%-wide column, side by
  side in two equal columns
- **AND** all 7 columns of each calendar SHALL fit without horizontal
  scroll

#### Scenario: Mobile

- **GIVEN** a viewport < 992px
- **WHEN** the page is rendered
- **THEN** the cards SHALL stack vertically and remain fully visible
- **AND** no horizontal overflow SHALL occur
- **AND** day cells SHALL stay tappable (≥ 44px effective hit area or
  clearly separated)
- **AND** the two result inputs SHALL stay within the viewport width
  (flex row wraps or shrinks as needed)

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Dyad page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/dyad` exists; package `@free-react-templates/dyad`;
      `public/CNAME` = `dyad.free.componentdock.com`; `homepage` =
      `https://dyad.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/dyad` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Page background `#efefef`, section `py-28`, content centered
- [ ] H2 "Select Your Dates" — centered, 20px, `#212529`, weight 500, mb-12
- [ ] Two disabled text inputs in a flex row: placeholders "Check in" /
      "Check out", grey disabled fill `#e9ecef`, border `#ced4da`, rounded;
      both empty on load; echo selections as "MMMM DD, YYYY" (zero-padded
      day, e.g. "August 05, 2026")
- [ ] Two cards: white, padding 10px, shadow
      `0 15px 30px 0 rgba(0,0,0,0.2)`, content-sized; side by side in two
      equal columns ≥ 992px, stacked below
- [ ] Each card: month label "<Month> <Year>" — centered, 16px, weight 400,
      `#212529`; ChevronLeft/ChevronRight nav buttons with aria-labels
      "Previous month" / "Next month"; navigation is independent per card
- [ ] Weekday headers Su Mo Tu We Th Fr Sa — 16px, weight 700, `#212529`
      (per card)
- [ ] Day grid (per card): 50×50px cells, 7 columns, 5–6 rows, no empty
      cells; current-month `#212529`; adjacent-month `#ccc`
- [ ] Today preselected in BOTH calendars: `#f67280` circle
      (`border-radius: 50%`), white text; clicking a day moves the
      selection + fills the matching input; navigation preserves it
- [ ] Range coupling: picking a from-date disables earlier days in the
      to-calendar (`#fcc`, cursor default); picking a to-date disables
      later days in the from-calendar; re-picking the from-date re-locks
      the to-calendar
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic table/buttons, aria-labels, focus
      rings; tests mock the clock (`vi.setSystemTime`) for deterministic
      "today" assertions and cover month-boundary cases (Sunday-start,
      Saturday-start, 5-row vs 6-row months, Dec→Jan and Jan→Dec
      navigation, day < 10 formatting → zero-padded "DD" in the result
      inputs, e.g. "August 05, 2026")
- [ ] `npm run verify:app -- dyad` (or `scripts/verify-app.sh dyad`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://dyad.free.componentdock.com (200, correct
      `<title>`, bundle hash matches local build)
