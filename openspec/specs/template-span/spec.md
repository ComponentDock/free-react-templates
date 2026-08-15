# Template: Span (Date Range Picker Widget)

## Purpose

Span is a minimal single-page date-RANGE picker widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 13" website template design
(source: https://colorlib.com/wp/template/calendar-13/), built under a
DIFFERENT name (Span — a span of dates, fitting a from/to date-range widget)
per the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

New name **span** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`calendar-13`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Span lives in `apps/span` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 13" — one of the 20 "Bootstrap Calendars"
  demos: a date-RANGE picker demo. Bootstrap 4.3.1 + jQuery 3.3.1 +
  pickadate.js (`picker.js` + `picker.date.js`) + icomoon CSS (linked but NO
  icon classes used in the DOM). The demo brands itself
  "Calendar #3 (Date Range)" (the label is stale — it says #3 while the slug
  is calendar-13, same stale-label quirk as Calendar 11/12); the recreation
  brands itself **Span**.
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/bootstrap/calendar-13/` (reachable;
  HTTP 200 — 13,425 bytes; `<title>Calendar #3</title>`; the visible body is
  a handful of elements). The page has NO navbar, NO footer, NO images, NO
  icons.
  NOTE: the standard preview path
  `https://preview.colorlib.com/theme/calendar-13/` 404s (verified for the
  whole series) — the "Bootstrap Calendars" demos live under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  Kalends/Metronome/Chronos preps).
- **DIRECT SIBLING of Kalends (Calendar 12):** Calendar 13 uses the same
  pickadate **classic** theme (`css/classic.css` + `css/classic.date.css`)
  and the SAME accent palette (`#f78b65`/`#f2d1c5`), the SAME popup shell
  (classic: `1px solid #aaa` border, `border-radius: 0 0 5px 5px`,
  `min-width: 176px; max-width: 466px`, open shadow
  `0 6px 18px 1px rgba(0,0,0,.12)`, NO dimmed backdrop). Do not copy
  Metronome's default-theme shell values (shadow
  `0 12px 36px 16px rgba(0,0,0,.24)`, max-width 666px, backdrop
  `rgba(0,0,0,.32)`). WHAT DIFFERS from Kalends: TWO inputs (From/To) with
  real `<label>`s instead of one placeholder-only input, a wider column
  (`col-lg-7` ≈ 58% vs Kalends' `col-lg-3` ≈ 25%), the two inputs sit in a
  `.row` of two `col-md-6` groups (side-by-side on md+, stacked below), and
  `main.js` wires the pickers together as a date RANGE (From sets To's min,
  To sets From's max, clearing resets the limit).
- **Screenshot:** `calendar-13.jpg` (1200×972, viewed in browser) — flat,
  minimalist, light-neutral page: heading "Calendar #3 (Date Range)"
  centered above a row of two light-grey-bordered inputs, the LEFT labeled
  "From" (placeholder "Start Date", inactive) and the RIGHT labeled "To"
  (placeholder "End Date", focused with a BLUE outline), with a floating
  WHITE rounded calendar popup anchored below the "To" input: header
  "February 2021" with black `<`/`>` triangles, a grey small-caps weekday
  row (Sun–Sat), a day grid with faint grey out-of-month days, the selected
  day (16) on a salmon/orange (`#f78b65`) background, and a footer row of
  three text buttons — Today, Clear, Close. Neutral palette
  (white/greys/black) with ONE salmon accent. Visually identical to the
  Calendar 12 screenshot except the second input and the stale "#3" label.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — there is no navbar, no hero band, no footer
in the source demo:

1. Section (`.content`) — page background `#fff`, vertical padding `7rem 0`,
   content centered.
   - Container (`.container.text-left`) → centered row
     (`.row.justify-content-center`) → column (`.col-lg-7` ≈ 58% on lg+,
     full width below) →
     - `<h2 class="mb-5 text-center">` reading "Calendar #3 (Date Range)"
       (20px, centered) — recreation: "Pick a Date Range" (paraphrase of
       the title label; content-kind preserved: a heading above the form).
     - `<form action="#" class="row">` → two `.col-md-6` groups (stack on
       <768px, side-by-side on md+):
       - `.form-group` #1 → `<label for="input_from">From</label>` → text
         `<input class="form-control" id="input_from" placeholder="Start Date">`
       - `.form-group` #2 → `<label for="input_to">To</label>` → text
         `<input class="form-control" id="input_to" placeholder="End Date">`
2. Picker popup (`.picker`, injected by pickadate on input focus; NOT in
   static HTML) — white rounded box (classic theme, NO backdrop), identical
   shell to Kalends:
   - `.picker__frame` (padding 1px) → `.picker__wrap` (margin -1px) →
     `.picker__box` (padding 0 1em):
     - `.picker__header` — month + year, prev/next CSS-triangle nav.
     - `.picker__table` — weekday row (Sun–Sat) + 6×7 day grid (out-of-month
       days shown faint).
     - `.picker__footer` — Today / Clear / Close buttons.

## Design tokens (from `css/style.css`, `css/bootstrap.min.css`, `css/classic.css`, `css/classic.date.css`)

- **Accent (brand) color:** `#f78b65` (salmon/orange) — selected day
  background, today corner-triangle, focused-select/highlight borders,
  focus outline on footer buttons. Put in `@theme` and use via Tailwind
  classes.
- **Hover fill:** `#f2d1c5` (soft peach) — nav triangles, highlighted/
  hovered days, footer-button hover.
- **Input active border:** `#0089ec` (blue) while its picker is open
  (`.picker__input--active`).
- **Page background:** `#fff`; body text `#000`; muted text `#999`
  (weekday labels, year); out-of-focus days `#ddd`; disabled cells
  `#f5f5f5` bg; placeholder/paragraph grey `#b3b3b3` (weight 300).
- **Fonts:** `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
"Helvetica Neue", Arial, sans-serif` for the whole page (Google Fonts
  Roboto 300/400/500/700 via `<link>` in index.html — no font files copied).
- **Section rhythm:** `.content { padding: 7rem 0 }` (Tailwind `py-28`);
  Bootstrap `.container` max-width ~1140px; `.col-lg-7` ≈ 58% on lg+,
  full width below; heading `mb-5` (3rem) below it.
- **Heading:** `h2` 20px, `#000`, weight 400, centered.
- **Labels:** Bootstrap 4 `.form-group label` — 12px, `#000`, weight 400,
  `margin-bottom: .5rem`, `display: inline-block`.
- **Inputs (.form-control, Bootstrap 4):** block, `width: 100%`,
  `height: calc(1.5em + .75rem + 2px)`, `padding: .375rem .75rem`,
  `font-size: 1rem`, `font-weight: 400`, `line-height: 1.5`,
  `color: #495057`, `background: #fff`, `border: 1px solid #ced4da`,
  `border-radius: .25rem`; focus → `border-color: #80bdff`,
  `box-shadow: 0 0 0 .2rem rgba(0,123,255,.25)`. Placeholder grey.
- **Form row:** Bootstrap `.row` (flex, negative margins) with two
  `.col-md-6` groups — `width: 50%` on md+, stacked `width: 100%` below
  768px; `gap` between groups comes from Bootstrap's `padding: 0 15px`
  column gutters.
- **Picker shell (CLASSIC theme — same as Kalends, differs from
  Metronome):** `.picker__holder` = the popup box: `background: #fff`,
  `border: 1px solid #aaa` (border-top/bottom-width 0 until opened, then
  1px), `border-radius: 0 0 5px 5px`, `min-width: 176px`, `max-width: 466px`;
  when open: `box-shadow: 0 6px 18px 1px rgba(0,0,0,.12)`. NO dimmed
  backdrop (unlike the default theme). `.picker__frame` padding 1px,
  `.picker__wrap` margin -1px, `.picker__box` padding `0 1em` with
  header/footer/table `text-align: center`. Width effectively 100% of the
  ~58% column on lg+.
- **Picker header:** month+year `font-weight: 500`, inline, `margin:
0 .25em`; year `#999`, `.8em`, italic; nav triangles are pure CSS borders
  (black), hover `background: #f2d1c5`; nav `position: absolute`,
  `padding: .5em 1.25em`, `width: 1em; height: 1em`, `top: -.25em`.
- **Weekday row:** `width: 14.285714286%` (1/7), `.75em`, `#999`,
  `font-weight: 500`, `padding-bottom: .25em` (`.5em` on tall screens).
- **Table:** `border-collapse: collapse`, `table-layout: fixed`,
  `width: 100%`, `margin-top: .75em`, `margin-bottom: .5em`.
- **Day cells:** `font-weight: 200`, `padding: .3125em 0`, `border: 1px
solid transparent`; today = small `#f78b65` corner triangle (`.5em`
  border, top-right); selected = `background: #f78b65; color: #fff`;
  highlighted/hover = `background: #f2d1c5`, `color: #000`; highlighted
  border `#f78b65`; outfocus `color: #ddd`; disabled `background: #f5f5f5`,
  `border-color: #f5f5f5`, `color: #ddd`.
- **Footer buttons (Today/Clear/Close):** `border: 1px solid #fff`,
  `background: #fff`, `.8em`, `padding: .66em 0`, `font-weight: 700`,
  `width: 33%`, inline-block; hover `background: #f2d1c5`,
  `border-bottom-color: #f2d1c5`; focus `background: #f2d1c5`,
  `border-color: #f78b65`. Icons: Today = `#f78b65` triangle (`.66em`
  border), Clear = `#e20` 3px line, Close = `×` glyph `#777` (1.1em).
- **Icons/images:** NONE beyond the CSS-triangle/glyph accents above — no
  image assets, no icon font. Use lucide-react ONLY if needed for the nav
  triangles/× (preferred: CSS borders + `×` text to match 1:1).

## Requirements

### Requirement: Page composition

The system SHALL render a single centered section on the white background
(`#fff`) with generous vertical padding, containing a heading and a two-input
date-range form; the column SHALL be wide (≈58% on lg+, full width below).

#### Scenario: Page layout

- **GIVEN** the Span page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be `#fff`
- **AND** the section SHALL have vertical padding of `7rem` (Tailwind
  `py-28`)
- **AND** the content SHALL be horizontally centered
- **AND** the body font SHALL be Roboto (via Google Fonts link in
  index.html)

#### Scenario: Column width

- **GIVEN** a viewport ≥ 992px
- **WHEN** the page is rendered
- **THEN** the content column SHALL occupy about 58% of the container
  width, centered

#### Scenario: Mobile column

- **GIVEN** a viewport < 992px
- **WHEN** the page is rendered
- **THEN** the content SHALL span the full width
- **AND** no horizontal overflow SHALL occur

### Requirement: Section heading

The system SHALL render a centered heading above the form, paraphrasing the
source's "Calendar #3 (Date Range)" title label.

#### Scenario: Heading text

- **GIVEN** the Span page is rendered
- **WHEN** the heading is displayed
- **THEN** an H2 SHALL read "Pick a Date Range"
- **AND** it SHALL be centered, 20px, `#000`, weight 400, with ~3rem
  spacing below (source `mb-5`)

### Requirement: From/To date inputs

The system SHALL render two labeled text inputs side by side (stacked below
768px), "From" with placeholder "Start Date" and "To" with placeholder
"End Date", each styled like the Bootstrap 4 `.form-control` (grey border,
rounded, full width of its column half).

#### Scenario: Input shell

- **GIVEN** the Span page is rendered
- **WHEN** the form is displayed
- **THEN** a text input labeled "From" SHALL be present with
  `placeholder="Start Date"`
- **AND** a text input labeled "To" SHALL be present with
  `placeholder="End Date"`
- **AND** each label SHALL be a real `<label>` (clicking it focuses its
  input), 12px, `#000`, `margin-bottom: .5rem`
- **AND** on viewports ≥ 768px the two inputs SHALL sit side by side
  (each ~50% of the column); below 768px they SHALL stack full width
- **AND** each input SHALL have `border: 1px solid #ced4da`,
  `border-radius: .25rem`, `padding: .375rem .75rem`,
  `height: calc(1.5em + .75rem + 2px)`, `color: #495057`

#### Scenario: Input focus

- **GIVEN** the Span page is rendered
- **WHEN** an input receives focus
- **THEN** its border SHALL turn `#80bdff` with the soft blue focus ring
  `0 0 0 .2rem rgba(0,123,255,.25)`
- **AND** that input's date picker SHALL open (see Picker requirements)

### Requirement: Date-range constraint (From ≤ To)

The system SHALL link the two pickers as a range: selecting a From date
SHALL make earlier dates unselectable in the To picker (To's minimum = From),
and selecting a To date SHALL make later dates unselectable in the From
picker (From's maximum = To). Clearing either input SHALL remove that
picker's limit.

#### Scenario: From sets To minimum

- **GIVEN** the From input contains a selected date (e.g. 10 February, 2026)
- **WHEN** the To picker is opened
- **THEN** dates before the From date SHALL be disabled in the To grid
  (`#f5f5f5` background, `#ddd` text)
- **AND** selecting a valid To date SHALL fill the To input

#### Scenario: To sets From maximum

- **GIVEN** the To input contains a selected date (e.g. 20 February, 2026)
- **WHEN** the From picker is opened
- **THEN** dates after the To date SHALL be disabled in the From grid
- **AND** selecting a valid From date SHALL fill the From input

#### Scenario: Clearing removes the limit

- **GIVEN** the From input contains a selected date that constrains the To
  picker
- **WHEN** the From input's value is cleared (Clear button or manual
  delete)
- **THEN** the To picker SHALL allow all dates again
- **AND** the same SHALL hold symmetrically when the To value is cleared

### Requirement: Picker open/close behavior

Each input SHALL open its own date picker when focused, close it when a day
is selected, when Close is pressed, when Esc is pressed, or when clicking
outside the picker. While open, that input's border SHALL be `#0089ec`
(source `.picker__input--active`).

#### Scenario: Opens on focus

- **GIVEN** the Span page is rendered and the pickers are closed
- **WHEN** an input is focused
- **THEN** that input's picker SHALL be visible
- **AND** the focused input's border SHALL be `#0089ec`

#### Scenario: Closes on day select

- **GIVEN** a picker is open
- **WHEN** a day cell is clicked
- **THEN** that picker SHALL close
- **AND** its input SHALL contain the selected date in the source's
  pickadate default format ("d mmmm, yyyy", e.g. "16 February, 2026")

#### Scenario: Closes on Close / Esc / outside click

- **GIVEN** a picker is open
- **WHEN** the Close footer button is clicked, OR the Esc key is pressed,
  OR a click lands outside the picker
- **THEN** that picker SHALL close
- **AND** its input SHALL keep its current value

#### Scenario: Only one picker open at a time

- **GIVEN** the From picker is open
- **WHEN** the To input is focused
- **THEN** the From picker SHALL close and the To picker SHALL open

### Requirement: Picker shell and header

Each picker SHALL render as a white rounded box (CLASSIC theme:
`border: 1px solid #aaa`, `border-radius: 0 0 5px 5px`, `max-width: 466px`,
open `box-shadow: 0 6px 18px 1px rgba(0,0,0,.12)`, NO dimmed backdrop),
with a header showing the current month and year plus prev/next navigation.

#### Scenario: Header content

- **GIVEN** a picker is open
- **WHEN** the header is inspected
- **THEN** it SHALL show the current month name and year (e.g. "February
  2026")
- **AND** the year SHALL be styled `#999`, italic, `.8em`
- **AND** prev/next controls SHALL be present on the left/right (black
  triangles, hover `background: #f2d1c5`)

#### Scenario: Month navigation

- **GIVEN** a picker is open in a given month
- **WHEN** the next control is activated
- **THEN** the header SHALL show the following month and the day grid
  SHALL update accordingly
- **AND** when the prev control is activated the header SHALL show the
  previous month and the grid SHALL update accordingly

### Requirement: Weekday row and day grid

Each picker SHALL render a weekday row (Sun–Sat) and a 6×7 day grid for the
displayed month, with out-of-month days from the adjacent months shown
faintly.

#### Scenario: Weekday labels

- **GIVEN** a picker is open
- **WHEN** the table header row is inspected
- **THEN** it SHALL contain the seven weekday abbreviations Sun through
  Sat in order
- **AND** each label SHALL be `#999`, `.75em`, weight 500, `width:
14.285714286%` (1/7 of the table)

#### Scenario: Current-month days

- **GIVEN** a picker is open in a given month
- **WHEN** the day grid is inspected
- **THEN** each day of the current month SHALL be rendered as a cell with
  `font-weight: 200`, `padding: .3125em 0`
- **AND** the grid SHALL be 6 rows × 7 columns, with days from adjacent
  months filling the leading/trailing cells in `#ddd`

#### Scenario: Today marker

- **GIVEN** a picker is open and today falls within the displayed month
- **WHEN** the today cell is inspected
- **THEN** a small `#f78b65` triangle SHALL be shown at the cell's
  top-right corner

#### Scenario: Day selection

- **GIVEN** a picker is open
- **WHEN** a current-month, enabled day cell is clicked
- **THEN** the cell SHALL be styled `background: #f78b65; color: #fff`
- **AND** the picker SHALL close with the input value set to "d mmmm,
  yyyy" (e.g. "16 February, 2026")
- **AND** the range constraint SHALL be applied to the sibling picker

#### Scenario: Day hover

- **GIVEN** a picker is open
- **WHEN** an enabled day cell is hovered (or focused via keyboard)
- **THEN** the cell SHALL show `background: #f2d1c5; color: #000`

#### Scenario: Range-disabled cells

- **GIVEN** a picker is open and a range limit is active (From set for the
  To picker, or To set for the From picker)
- **WHEN** a day cell outside the allowed range is inspected
- **THEN** the cell SHALL be disabled (`background: #f5f5f5`,
  `border-color: #f5f5f5`, `color: #ddd`) and SHALL NOT be selectable

### Requirement: Picker footer actions

Each picker SHALL render a footer with three buttons — Today, Clear, Close —
each `width: 33%`, white background, `.8em`, weight 700, hover
`#f2d1c5`.

#### Scenario: Today

- **GIVEN** a picker is open and today is outside the displayed month
- **WHEN** the Today button is activated
- **THEN** the header SHALL jump to the current month/year and today SHALL
  be selected
- **AND** the input SHALL contain today's date in "d mmmm, yyyy" format
  (unless a range limit disables today, in which case it SHALL be rejected)

#### Scenario: Clear

- **GIVEN** a picker is open and its input contains a date
- **WHEN** the Clear button is activated
- **THEN** the input SHALL be emptied
- **AND** no day SHALL be shown as selected
- **AND** the range limit this input imposed on the sibling picker SHALL
  be removed

#### Scenario: Close

- **GIVEN** a picker is open
- **WHEN** the Close button is activated
- **THEN** the picker SHALL close
- **AND** its input SHALL keep its current value

### Requirement: Component Dock footer link

The system SHALL render a small footer line linking to Component Dock, per
monorepo convention (replaces the source demo's absence of any footer).

#### Scenario: Footer link

- **GIVEN** the Span page is rendered
- **WHEN** the page bottom is inspected
- **THEN** a footer link reading "Component Dock" SHALL link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/span` exists; package `@free-react-templates/span`;
      `public/CNAME` = `span.free.componentdock.com`; `homepage` =
      `https://span.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (300, 400, 500, 700); no
      font/image/icon assets copied from ColorLib; no pickadate/jQuery/
      Bootstrap dependency added (React date-grid helper instead)
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/span` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Page background `#fff`, section `py-28`, content centered; column
      ≈58% on lg+, full width below; Roboto body font
- [ ] H2 "Pick a Date Range" — centered, 20px, `#000`, `mb-5` (3rem below)
- [ ] Two real `<label>`s: "From" (placeholder "Start Date") and "To"
      (placeholder "End Date"); inputs styled `#ced4da` border, `.25rem`
      radius, `#495057` text; side-by-side (50/50) on ≥768px, stacked
      below; focus ring `0 0 0 .2rem rgba(0,123,255,.25)` + `#80bdff`
      border
- [ ] Each picker opens on its input's focus (input border → `#0089ec`);
      closes on day select / Close / Esc / outside click; value persists;
      only one picker open at a time
- [ ] Date-range constraint: From → To minimum, To → From maximum;
      clearing removes the limit; out-of-range cells disabled
      (`#f5f5f5`/`#ddd`) and not selectable
- [ ] Picker shell is the CLASSIC theme: `1px solid #aaa` border,
      `border-radius: 0 0 5px 5px`, max-width 466px, shadow
      `0 6px 18px 1px rgba(0,0,0,.12)`, NO backdrop (do NOT use
      Metronome's default-theme shadow/backdrop values)
- [ ] Header: current month+year, year italic `#999` `.8em`, prev/next
      black triangles (CSS borders) with `#f2d1c5` hover; navigation
      updates grid + header
- [ ] Weekday row Sun–Sat: `#999`, `.75em`, weight 500, width 1/7
- [ ] Day grid 6×7: current-month days `#000` weight 200, out-of-month
      `#ddd`; today corner triangle `#f78b65`; selected `#f78b65` bg +
      white text; hover `#f2d1c5`
- [ ] Footer buttons Today/Clear/Close: 33% width, white bg, `#f2d1c5`
      hover; Today jumps to current month + fills input, Clear empties
      input (and lifts the range limit), Close closes picker; input value
      format "d mmmm, yyyy" (e.g. "16 February, 2026")
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; tests mock the clock (`vi.setSystemTime`) for
      deterministic month-grid assertions, then `vi.useRealTimers()`;
      a11y: semantic elements, aria-expanded on inputs when their picker
      is open, Esc handling, focus-visible rings
- [ ] `npm run verify:app -- span` (or `scripts/verify-app.sh span`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://span.free.componentdock.com (200, correct
      `<title>`, bundle hash matches local build)
