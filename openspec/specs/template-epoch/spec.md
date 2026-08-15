# Template: Epoch (Bootstrap Calendar / Date Picker)

## Purpose

Epoch is a minimal single-page inline date-picker template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 17" website template design
(source: https://colorlib.com/wp/template/calendar-17/), built under a
DIFFERENT name (Epoch — a calendar/date-system term, fitting a date picker,
and the natural successor to the series' prior renames: chronos, metronome,
kalends, span, equinox, interval, lunar) per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **epoch** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`calendar-17`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Epoch lives in `apps/epoch` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 17" — one of the 20 "Bootstrap Calendars"
  demos: a single centered inline date-picker widget (Bootstrap 4.3.1 +
  jQuery + the Rome.js date-picker library; the DOM uses NO images and NO
  icon fonts — the nav arrows are CSS `::before` text characters). The demo
  brands itself "Calendar #7 (Inline + Result)" (the series numbering is
  inconsistent — slug is calendar-17, page title says "Calendar #7"); the
  recreation brands itself **Epoch**.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-17/`
  (reachable; DOM fetched — 13.0KB HTML + `css/style.css` (886B custom,
  mostly Bootstrap-reset boilerplate) + `css/rome.css` (1.7KB Rome picker
  skin) + Bootstrap 4.3.1 + jQuery; rendered live in a browser and the
  interaction verified end-to-end).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/calendar-17/`
  404s — the whole "Bootstrap Calendars" series lives under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  Lunar/calendar-16 and Chronos/calendar-10 preps; `products.js` has no
  calendar entries at all).
- **Screenshot:** `calendar-17.jpg` (1200×972 AVIF, converted + viewed in
  browser) — ultra-minimal: very light grey page, centered heading
  "Calendar #7 (Inline + Result)", below it a grey rounded text input
  showing placeholder "Select date", and one white rounded card floating on
  a soft drop shadow: a centered month header "February 2021" with small
  `<` / `>` arrows at the sides, a weekday row (Su Mo Tu We Th Fr Sa — NO
  "Me" typo in this screenshot, unlike calendar-16.jpg; the live DOM also
  renders "Mo"), a 7-column grid of square day cells (dark grey
  current-month numbers, faint light-grey adjacent-month numbers), and the
  selected date (15) as a solid salmon-pink CIRCLE with white text. The
  input is empty in the screenshot (shows its placeholder) even though a
  day is preselected — the input only fills after the user clicks a day.
  No other page furniture.
- **Stack of the source:** Bootstrap 4.3.1 grid/utilities + jQuery +
  Rome.js v2.1.22 (`rome(inline_cal, {time: false, inputFormat: 'MMMM DD,
YYYY'}).on('data', function (value) { result.value = value; })` in
  `js/main.js` — inline calendar, no time picker, and the picked date is
  echoed into the disabled `#result` input). Recreation must NOT copy any
  of this; use the monorepo stack + lucide-react icons (ChevronLeft /
  ChevronRight for the nav arrows) + no images at all (this design is pure
  CSS).
- **What differs from Lunar (Calendar 16):** this demo adds the "Result"
  element — a disabled Bootstrap `form-control` input below the heading
  that echoes the selected date in `MMMM DD, YYYY` format (e.g. clicking
  15 in August 2026 fills it with "August 15, 2026"; verified live). The
  picker card, CSS, and tokens are otherwise byte-identical to Lunar's.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — there is no navbar, no hero band, no footer
in the source demo:

1. Section (`.content`) — page background `#efefef`, vertical padding
   `7rem 0` (computed 112px), content centered.
   - Container (`.container.text-left`) → centered row
     (`.row.justify-content-center`) → heading column
     (`.col-md-10.text-center`) → `<h2 class="mb-5 text-center">` reading
     "Calendar #7 (Inline + Result)" (20px, weight 500, `#212529`, centered,
     `margin-bottom: 3rem`) — recreation: "Select a Date" (paraphrase of
     the widget label; content-kind preserved).
   - `<input type="text" class="form-control w-25 mx-auto mb-3" id="result"
placeholder="Select date" disabled>` — Bootstrap form-control, 25%
     width, centered, disabled; echoes the selected date as
     "MMMM DD, YYYY" (verified live: clicking day 15 → value
     "August 15, 2026"). Empty (placeholder visible) on first load even
     though today is preselected in the grid.
   - `<form action="#" class="row">` → `.col-md-12` → the widget mount
     `<div id="inline_cal">` where Rome.js renders the picker in place:
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
             `line-height: 0` (the number is vertically centered by the
             fixed height + table-cell layout), clickable. Modifier
             classes: `.rd-day-prev-month` / `.rd-day-next-month`
             (adjacent-month days, `#ccc`), `.rd-day-selected` (today by
             default; salmon-pink filled circle, white text).

The widget is a real interactive date picker: clicking a day selects it
(the pink circle moves) AND writes the date into the result input;
clicking the arrows navigates months while the selection persists.

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
- **Result input (NEW vs Lunar):** Bootstrap `form-control` tokens —
  `display: block; width: 25%` (`w-25`), `margin: 0 auto 1rem` (`mx-auto
mb-3`), `padding: .375rem .75rem`, `font-size: 1rem`, `line-height: 1.5`,
  `color: #495057`, `background-color: #fff`, `border: 1px solid #ced4da`,
  `border-radius: .25rem`; disabled state: `background-color: #e9ecef`,
  `opacity: 1` (grey fill, grey border — the "rounded" grey input in the
  screenshot).
- **Section rhythm:** `padding: 7rem 0` (Tailwind `py-28`); `.container`
  max-width ~1140px; `.col-md-10` = ~83% width on md+, centered via
  `.justify-content-center`.
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
  `.rd-day-disabled` `#fcc` (not used by this demo config).
- **Selected day (`.rd-day-selected`):** background `#f67280`, color `#fff`,
  `border-radius: 50%` (a perfect circle inside the square cell).
- **Grid:** `table.rd-days` with `margin-top: 20px`; 7 fixed columns;
  5–6 rows depending on the month (August 2026 starts on a Saturday → 6
  rows); the first/last rows include adjacent-month days to fill the grid.
- **Icons/images:** NONE in the source DOM except the two text arrows —
  recreation uses lucide ChevronLeft/ChevronRight and no images.

## Requirements

### Requirement: Page composition

The system SHALL render a single centered section on the very light grey
background (`#efefef`) with generous vertical padding, containing a heading,
the result input, and the inline date-picker card.

#### Scenario: Page layout

- **GIVEN** the Epoch page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be `#efefef`
- **AND** the section SHALL have vertical padding of `7em` (Tailwind
  `py-28`)
- **AND** the content SHALL be horizontally centered
- **AND** the body font SHALL be Roboto (via Google Fonts link in
  index.html)

### Requirement: Section heading

The system SHALL render a centered heading above the input, paraphrasing
the source's "Calendar #7 (Inline + Result)" title label.

#### Scenario: Heading text

- **GIVEN** the Epoch page is rendered
- **WHEN** the heading is displayed
- **THEN** an H2 SHALL read "Select a Date"
- **AND** it SHALL be centered, 20px, `#212529`, weight 500, with
  `margin-bottom: 3rem`

### Requirement: Result input

The system SHALL render a disabled text input below the heading styled as a
Bootstrap form-control (25% width, centered, grey disabled fill, rounded),
with placeholder "Select date", that echoes the currently selected date.

#### Scenario: Input on first load

- **GIVEN** the Epoch page is rendered
- **WHEN** the input is inspected
- **THEN** a text input SHALL be present, disabled, with placeholder
  "Select date"
- **AND** it SHALL be empty on first load (no value) even though today is
  preselected in the grid

#### Scenario: Input styling

- **GIVEN** the Epoch page is rendered
- **WHEN** the input is inspected
- **THEN** the input SHALL be 25% of the column width, centered
  (`mx-auto`), with `margin-bottom: 1rem`
- **AND** it SHALL have a grey disabled fill (`#e9ecef`), 1px grey border
  (`#ced4da`), and rounded corners

#### Scenario: Echo the selected date

- **GIVEN** the picker shows a month
- **WHEN** a day is activated (e.g. day 15 of August 2026)
- **THEN** the input value SHALL become the date formatted as
  "MMMM DD, YYYY" (e.g. "August 15, 2026")

### Requirement: Picker card shell

The system SHALL render the date picker inside a white card
(`#fff`, padding 10px, shadow `0 15px 30px 0 rgba(0,0,0,0.2)`) that
shrink-wraps the calendar grid and is centered on the page.

#### Scenario: Card shell

- **GIVEN** the Epoch page is rendered
- **WHEN** the picker card is displayed
- **THEN** the card SHALL have a white background and 10px padding
- **AND** the card SHALL have the soft drop shadow
- **AND** the card SHALL be centered horizontally
- **AND** the card width SHALL fit its content (the 7-column grid), not the
  full container

### Requirement: Month header with navigation

The system SHALL render a centered month/year label (e.g. "August 2026")
with a previous-month button on its left and a next-month button on its
right.

#### Scenario: Month label

- **GIVEN** the picker is rendered for a given month
- **WHEN** the header is inspected
- **THEN** a label SHALL read "<Month> <Year>" (e.g. "August 2026")
- **AND** the label SHALL be centered, 16px, weight 400, `#212529`

#### Scenario: Navigation buttons

- **GIVEN** the picker is rendered
- **WHEN** the header is inspected
- **THEN** a previous-month button SHALL sit left of the label with an
  accessible name "Previous month"
- **AND** a next-month button SHALL sit right of the label with an
  accessible name "Next month"
- **AND** both SHALL be borderless, backgroundless icon buttons with
  `cursor: pointer` and visible focus rings

#### Scenario: Navigate months

- **GIVEN** the picker shows August 2026
- **WHEN** the next-month button is activated
- **THEN** the label SHALL read "September 2026"
- **AND** the grid SHALL show September's days
- **WHEN** the previous-month button is activated twice
- **THEN** the label SHALL read "July 2026"
- **AND** the selected date SHALL remain unchanged by navigation

### Requirement: Weekday header row

The system SHALL render a header row of seven abbreviated weekday names
starting Sunday: Su, Mo, Tu, We, Th, Fr, Sa.

#### Scenario: Weekday headers

- **GIVEN** the picker is rendered
- **WHEN** the header row is inspected
- **THEN** seven column headers SHALL read Su, Mo, Tu, We, Th, Fr, Sa in
  order
- **AND** they SHALL be styled 16px, weight 700, `#212529`
- **AND** "Mo" SHALL be used for Monday (the "Me" seen in the calendar-16
  screenshot is a source typo; this demo's screenshot AND live DOM both
  render "Mo")

### Requirement: Day grid

The system SHALL render the month's days in a 7-column grid of square
50×50px cells, with adjacent-month days filling the first and last rows.

#### Scenario: Current-month cells

- **GIVEN** the picker shows a month
- **WHEN** the grid is inspected
- **THEN** every day of the current month SHALL be a clickable 50×50px
  cell
- **AND** current-month day numbers SHALL be `#212529`
- **AND** cells SHALL have `cursor: pointer` and `text-align: center`

#### Scenario: Adjacent-month cells

- **GIVEN** the picker shows a month whose first day is not a Sunday or
  whose last day is not a Saturday
- **WHEN** the first or last grid row is inspected
- **THEN** leading/trailing cells SHALL show the adjacent month's days in
  the faint colour `#ccc`

#### Scenario: Row count

- **GIVEN** the picker shows a month
- **WHEN** the grid body is inspected
- **THEN** it SHALL contain 5 or 6 rows (exactly enough to cover the
  month's days with a Sunday-start week), with no empty cells

### Requirement: Selected date

The system SHALL preselect today's date on first render and highlight it as
a salmon-pink circle with white text; clicking any day moves the selection
to that day.

#### Scenario: Today preselected

- **GIVEN** the system clock is fixed (tests mock the date)
- **WHEN** the picker first renders
- **THEN** today's day cell SHALL be marked selected
- **AND** the selected cell SHALL have background `#f67280`, white text,
  and `border-radius: 50%`

#### Scenario: Click a day to select

- **GIVEN** the picker is rendered with day 15 selected
- **WHEN** day 20 is activated
- **THEN** day 20 SHALL become the selected day (pink circle, white text)
- **AND** day 15 SHALL revert to the normal cell style
- **AND** the result input SHALL update to "MMMM DD, YYYY" of day 20

### Requirement: Responsive behavior

The system SHALL keep the picker usable from mobile to desktop; the card is
content-sized and centered at every viewport.

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** the page is rendered
- **THEN** the card SHALL be centered in a ~83%-wide column
- **AND** all 7 columns SHALL fit without horizontal scroll

#### Scenario: Mobile

- **GIVEN** a viewport < 768px
- **WHEN** the page is rendered
- **THEN** the card SHALL remain fully visible
- **AND** no horizontal overflow SHALL occur
- **AND** day cells SHALL stay tappable (≥ 44px effective hit area or
  clearly separated)
- **AND** the result input SHALL stay within the viewport width

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Epoch page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/epoch` exists; package `@free-react-templates/epoch`;
      `public/CNAME` = `epoch.free.componentdock.com`; `homepage` =
      `https://epoch.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/epoch` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Page background `#efefef`, section `py-28`, content centered
- [ ] H2 "Select a Date" — centered, 20px, `#212529`, weight 500, mb-12
- [ ] Result input: disabled text input, placeholder "Select date", 25%
      width centered (`mx-auto`, mb-4), grey disabled fill `#e9ecef`,
      border `#ced4da`, rounded; empty on load, echoes selection as
      "MMMM DD, YYYY" on day activation
- [ ] Card: white, padding 10px, shadow
      `0 15px 30px 0 rgba(0,0,0,0.2)`, content-sized, centered
- [ ] Month label "<Month> <Year>" — centered, 16px, weight 400,
      `#212529`; ChevronLeft/ChevronRight nav buttons with aria-labels
      "Previous month" / "Next month"
- [ ] Weekday headers Su Mo Tu We Th Fr Sa — 16px, weight 700, `#212529`
- [ ] Day grid: 50×50px cells, 7 columns, 5–6 rows, no empty cells;
      current-month `#212529`; adjacent-month `#ccc`
- [ ] Today preselected: `#f67280` circle (`border-radius: 50%`), white
      text; clicking a day moves the selection + fills the result input;
      navigation preserves it
- [ ] Month navigation updates the label + grid; no horizontal overflow on
      mobile
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic table/buttons, aria-labels, focus
      rings; tests mock the clock (`vi.setSystemTime`) for deterministic
      "today" assertions and cover month-boundary cases (Sunday-start,
      Saturday-start, 5-row vs 6-row months, Dec→Jan and Jan→Dec
      navigation, day < 10 formatting → zero-padded "DD" in the result
      input, e.g. "August 05, 2026")
- [ ] `npm run verify:app -- epoch` (or `scripts/verify-app.sh epoch`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://epoch.free.componentdock.com (200, correct
      `<title>`, bundle hash matches local build)
