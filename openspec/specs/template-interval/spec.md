# Template: Interval (Date Range Picker Widget)

## Purpose

Interval is a minimal single-page date-RANGE picker widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 15" website template design
(source: https://colorlib.com/wp/template/calendar-15/), built under a
DIFFERENT name (Interval — the span of dates between the From/To endpoints,
fitting a date-range widget) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **interval** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`calendar-15`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Interval lives in `apps/interval` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 15" — one of the 20 "Bootstrap Calendars"
  demos: a date-RANGE picker demo. Bootstrap 4.3.1 + jQuery 3.3.1 +
  **rome.js v2.1.22** (`js/rome.js` + `css/rome.css` — the bevacqua/rome
  picker, "no jQuery!"; the SAME library as Calendar 14/Equinox, NOT the
  pickadate library Calendar 12/13 use) + icomoon CSS (linked but NO icon
  classes used in the DOM). The demo brands itself
  "Calendar #5 (Calendar Range)" (the label is stale — it says #5 while the
  slug is calendar-15, same stale-label quirk as Calendar 11–14); the
  recreation brands itself **Interval**.
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/bootstrap/calendar-15/` (reachable;
  HTTP 200 — 13,307 bytes; `<title>Calendar #5</title>`; the visible body is
  a handful of elements). The page has NO navbar, NO footer, NO images, NO
  icons.
  NOTE: the standard preview path
  `https://preview.colorlib.com/theme/calendar-15/` 404s (verified for the
  whole series) — the "Bootstrap Calendars" demos live under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as the
  Kalends/Metronome/Chronos/Equinox preps).
- **DIRECT SIBLING of Equinox (Calendar 14):** Calendar 15 uses the SAME
  rome library, SAME popup shell, SAME `#f67280` salmon accent and CIRCLE
  selection, SAME `←`/`→` nav, SAME `YYYY-MM-DD` value format, SAME
  `MMMM YYYY` month label, NO footer buttons, NO backdrop. WHAT DIFFERS
  from Equinox: TWO inputs (From/To) wired as a date RANGE (Equinox has one
  input), a WIDER column (`col-lg-10` ≈ 83% vs Equinox's `col-lg-3` ≈ 25%),
  the two inputs sit in a `.row` of two `col-md-6` groups (side-by-side on
  md+, stacked below), the page background is LIGHT GREY `#efefef` (Equinox
  is `#fff` — verified by fetching BOTH demos' `css/style.css`), and this
  demo's rome.css ships out-of-month days as `#ccc` (Equinox's rome.css
  ships `#999` — do NOT copy Equinox's value).
- **Range wiring (from `js/main.js`, verbatim):**
  ```js
  $(function () {
    rome(input_from, {
      dateValidator: rome.val.beforeEq(input_to),
      time: false,
    })
    rome(input_to, {
      dateValidator: rome.val.afterEq(input_from),
      time: false,
    })
  })
  ```
  From's picker validates dates before-or-equal to the To input's value;
  To's picker validates dates after-or-equal to the From input's value.
  `time: false` → date-only. rome defaults apply: `autoClose: true` (picker
  closes when a day is picked), `autoHideOnClick: true` (closes on outside
  click), `monthsInCalendar: 1`, week starts Sunday, input value format
  `YYYY-MM-DD` (e.g. `2026-08-16`), month label format `MMMM YYYY` (e.g.
  "August 2026").
- **Live behavior VERIFIED in the browser (trusted clicks, 2026-08-15):**
  - Picking day 16 in the From picker sets `input_from = "2026-08-16"`
    (`YYYY-MM-DD`) and the picker auto-closes (both `.rd-container`s end up
    `display: none` after the pick — rome keeps one hidden container per
    input in the DOM, 42 day cells each).
  - Opening the To picker afterwards: exactly 21 day cells carry
    `.rd-day-disabled` — July 26–31 (prev-month) + Aug 1–15, i.e. EVERY day
    strictly before From. Computed color `rgb(255, 204, 204)` = `#fcc`,
    `cursor: default`; clicking a disabled day does NOT change the input
    value (inert).
  - Picking day 20 in the To picker sets `input_to = "2026-08-20"`.
  - Reopening the From picker: 16 disabled cells — Aug 21–31 + Sept 1–5
    (trailing next-month), i.e. every day strictly after To.
  - The From value (16) keeps `.rd-day-selected` in the From picker when
    reopened; the To picker also marks the From value (16) as selected
    before To is picked (rome marks the range endpoint).
- **Screenshot:** `calendar-15.jpg` (1200×972, viewed in browser) — flat,
  minimalist, LIGHT-GREY page: heading "Calendar #5 (Calendar Range)"
  centered above TWO side-by-side inputs — "From" labeled (placeholder
  "Start Date", inactive) and "To" labeled (placeholder "Start Date" — the
  source ships the SAME placeholder on both inputs) — with a floating WHITE
  calendar popup anchored below the "From" input: "February 2021" header
  with black `<`/`>` triangles, grey "Su Mo Tu We Th Fr Sa" weekday row, a
  day grid (faint grey out-of-month days, dark current-month days), the
  selected day (16) on a salmon-PINK (`#f67280`) **CIRCLE** with white text
  (day 17 shows a lighter pink circle — the hover/adjacent state), and NO
  footer buttons. Neutral palette (light grey/white/black) with ONE salmon
  accent.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — there is no navbar, no hero band, no footer
in the source demo:

1. Section (`.content`) — page background `#efefef`, vertical padding
   `7rem 0`, content centered.
   - Container (`.container.text-left`) → centered row
     (`.row.justify-content-center`) → column (`.col-lg-10` ≈ 83% on lg+,
     full width below) →
     - `<h2 class="mb-5 text-center">` reading "Calendar #5 (Calendar
       Range)" (20px, centered) — recreation: "Pick a Date Range"
       (paraphrase of the title label; content-kind preserved: a heading
       above the form). Do NOT reproduce the stale "#5".
     - `<form action="#" class="row">` → two `.col-md-6` groups (stack on
       <768px, side-by-side on md+):
       - `.form-group` #1 → `<label for="input_from">From</label>` → text
         `<input type="text" class="form-control" id="input_from"
placeholder="Start Date">`.
       - `.form-group` #2 → `<label for="input_from">To</label>` → text
         `<input type="text" class="form-control" id="input_to"
placeholder="Start Date">`.
         NOTE source quirks (BOTH verified in the live DOM and the
         screenshot):
         1. The "To" label's `for="input_from"` points at the FROM input —
            both labels bind to `input_from`. The a11y tree confirms the
            breakage: the From textbox's accessible name is "From To" while
            the To textbox falls back to its placeholder. The recreation
            SHALL use a matching `for`/`id` pair ("To" → `input_to`, real
            label → input association, a11y fix — same fix as Equinox).
         2. BOTH inputs ship placeholder "Start Date" (copy-paste bug; the
            sibling Calendar 13/Span demo ships "End Date" on To). The
            recreation SHALL use "Start Date" on From and "End Date" on To
            (deliberate fix of the obvious copy-paste bug — document it in
            the PR; a strict 1:1 copy would reproduce a user-visible bug).
2. Picker popup (`.rd-container`, injected by rome on input focus/click; NOT
   in static HTML) — one per input (two instances in the DOM), white
   floating box, NO border, NO backdrop:
   - `.rd-container-attachment` (position absolute, anchored below the
     ACTIVE input) → `.rd-container` (background `#fff`, `padding: 10px`,
     `text-align: center`, `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)`;
     `display: none` until opened):
     - `.rd-date` → `.rd-month` (one, `monthsInCalendar: 1`):
       - `.rd-back` `<button type="button">` (float left; `:before` content
         `\2190` "←") and `.rd-next` `<button type="button">` (float right;
         `:before` content `\2192` "→").
       - `.rd-month-label` — current month + year, e.g. "August 2026"
         (`MMMM YYYY`).
       - `table.rd-days` (margin-top 20px) → `thead.rd-days-head` →
         `tr.rd-days-row` → seven `th.rd-day-head` (Su Mo Tu We Th Fr Sa —
         `weekdaysMin`, Sunday first).
       - `tbody.rd-days-body` → day cells `td.rd-day-body` (50×50px,
         clickable): current-month days, `.rd-day-prev-month` /
         `.rd-day-next-month` (adjacent-month days, faint `#ccc`), selected
         day `.rd-day-selected`, disabled days `.rd-day-disabled` (the
         range-validator rejections, `#fcc`, `cursor: default`).

## Design tokens (from `css/style.css`, `css/bootstrap.min.css`, `css/rome.css`)

- **Accent (brand) color:** `#f67280` (salmon-pink) — selected-day circle
  background, white text inside. Put in `@theme` and use via Tailwind
  classes.
- **Disabled-day text:** `#fcc` (light pink) — `.rd-day-disabled`
  (range-validator rejections; verified live as `rgb(255, 204, 204)`),
  `cursor: default`.
- **Out-of-month days:** `#ccc` (grey) — `.rd-day-prev-month` /
  `.rd-day-next-month`. NOTE: THIS demo's rome.css ships `#ccc`; Calendar
  14/Equinox's rome.css ships `#999`. Use `#ccc` for Interval — do NOT copy
  Equinox's `#999` (the two rome.css files differ only in this line;
  verified by diffing both).
- **Page background:** `#efefef` (LIGHT GREY — differs from Equinox's
  `#fff`; verified by fetching both `css/style.css`); body/heading text
  `#212529` (Bootstrap 4 body color; measured `rgb(33, 37, 41)` on day
  cells); muted paragraph text `#b3b3b3` (weight 300, per `p` rule).
- **Fonts:** `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
"Helvetica Neue", Arial, "Noto Sans", sans-serif` for the whole page
  (Google Fonts Roboto via `<link>` in index.html — no font files copied).
- **Section rhythm:** `.content { padding: 7rem 0 }` (Tailwind `py-28`);
  Bootstrap `.container` max-width ~1140px; `.col-lg-10` ≈ 83% on lg+, full
  width below; heading `mb-5` (3rem) below it.
- **Heading:** `h2` 20px, `#212529`, weight 400, centered.
- **Labels:** Bootstrap 4 `.form-group label` — 12px, `#212529`, weight 400,
  `margin-bottom: .5rem`, `display: inline-block`.
- **Inputs (.form-control, Bootstrap 4):** block, `width: 100%`,
  `height: calc(1.5em + .75rem + 2px)`, `padding: .375rem .75rem`,
  `font-size: 1rem`, `font-weight: 400`, `line-height: 1.5`,
  `color: #495057`, `background: #fff`, `border: 1px solid #ced4da`,
  `border-radius: .25rem`. Placeholders: "Start Date" (From) / "End Date"
  (To — deliberate fix of the source's duplicated placeholder).
- **Input focus (same as Equinox):** this demo's `style.css` strips the
  Bootstrap focus ring — `.form-control:active, .form-control:focus
{ outline: none; box-shadow: none; }`. NO `#80bdff` border, NO blue focus
  ring, NO active-input border color change (rome adds no input class,
  unlike pickadate's `.picker__input--active`). Keep the focus treatment
  minimal (only a subtle accessible outline is acceptable; do NOT add the
  Bootstrap blue ring).
- **Picker shell (ROME — same as Equinox):** `.rd-container`:
  `background: #fff`, `padding: 10px`, `text-align: center`,
  `box-shadow: 0 15px 30px 0 rgba(0,0,0,.2)` (soft drop shadow), **NO
  border** (the `border: 1px solid #333` is commented out in rome.css), **NO
  dimmed backdrop**, `display: none` until open, `position: absolute`
  (`.rd-container-attachment`) anchored below the ACTIVE input.
- **Picker header:** `.rd-month-label` — month name + year, `MMMM YYYY`
  format (e.g. "August 2026"), inline with nav buttons on both sides.
  `.rd-back` / `.rd-next`: `cursor: pointer`, `border: none`, `background:
none`, `padding: 0`, `margin: 0`, float left/right; their glyphs are
  `:before` content — `\2190` ("←") and `\2192` ("→") — no icons/images.
  `[disabled]` state exists (`cursor: default`) but never triggers here (the
  validators disable DAYS, not month nav).
- **Weekday row:** `th.rd-day-head` ×7 — Su, Mo, Tu, We, Th, Fr, Sa
  (`weekdaysMin`; Sunday first). No explicit styling in rome.css (inherits
  page font; default color).
- **Day grid:** `td.rd-day-body` — `cursor: pointer`, `text-align: center`,
  `width: 50px; height: 50px` (square cells); `.rd-days { margin-top: 20px }`
  above the grid.
- **Selected day:** `.rd-day-selected` — `background-color: #f67280; color:
#fff; border-radius: 50%` (**CIRCLE**). The picked endpoint keeps the
  circle; the counterpart endpoint of the range is also marked selected in
  the other picker (verified live: the To picker marked From's 16 as
  `.rd-day-selected`).
- **Month nav behavior:** clicking `.rd-next`/`.rd-back` changes the
  displayed month (`.rd-month-label` + grid update). Always enabled (no
  min/max on the month navigation itself).
- **Icons/images:** NONE — nav glyphs are CSS `:before` content (←/→). No
  image assets, no icon font. Use plain text glyphs or lucide-react
  ChevronLeft/ChevronRight only if needed (preferred: `←`/`→` characters to
  match 1:1).
- **Value format:** inputs receive `YYYY-MM-DD` (rome's date-only default,
  e.g. `2026-08-16`).

## Requirements

### Requirement: Page composition

The system SHALL render a single centered section on the light-grey
background (`#efefef`) with generous vertical padding, containing a heading
and a two-input date-range form; the column SHALL be wide (≈83% on lg+,
full width below).

#### Scenario: Page layout

- **GIVEN** the Interval page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be `#efefef` (light grey — NOT the
  white of Equinox)
- **AND** the section SHALL have vertical padding of `7rem` (Tailwind
  `py-28`)
- **AND** the content SHALL be horizontally centered
- **AND** the body font SHALL be Roboto (via Google Fonts link in
  index.html)

#### Scenario: Column width

- **GIVEN** a viewport ≥ 992px
- **WHEN** the page is rendered
- **THEN** the content column SHALL occupy about 83% of the container
  width, centered

#### Scenario: Mobile column

- **GIVEN** a viewport < 992px
- **WHEN** the page is rendered
- **THEN** the content SHALL span the full width
- **AND** no horizontal overflow SHALL occur

### Requirement: Section heading

The system SHALL render a centered heading above the form, paraphrasing the
source's "Calendar #5 (Calendar Range)" title label (the source number is
stale — do NOT reproduce it).

#### Scenario: Heading text

- **GIVEN** the Interval page is rendered
- **WHEN** the heading is displayed
- **THEN** an H2 SHALL read "Pick a Date Range"
- **AND** it SHALL be centered, 20px, `#212529`, weight 400, with ~3rem
  spacing below (source `mb-5`)

### Requirement: From/To inputs

The system SHALL render two labeled text inputs side by side (stacking on
small screens), "From" and "To", styled like the Bootstrap 4 `.form-control`
(grey border, rounded, full width of their columns), with the demo's
stripped focus treatment (no Bootstrap blue focus ring).

#### Scenario: Input pair layout

- **GIVEN** a viewport ≥ 768px
- **WHEN** the form is displayed
- **THEN** the "From" and "To" inputs SHALL sit side by side in two equal
  columns
- **AND** the "From" input SHALL come first (left)

#### Scenario: Input pair stacking

- **GIVEN** a viewport < 768px
- **WHEN** the form is displayed
- **THEN** the two inputs SHALL stack vertically, From above To

#### Scenario: Input labels and placeholders

- **GIVEN** the Interval page is rendered
- **WHEN** the form is displayed
- **THEN** the first input SHALL have a real `<label>` "From" linked via a
  matching `for`/`id` pair and placeholder "Start Date"
- **AND** the second input SHALL have a real `<label>` "To" linked to ITS
  OWN input via a matching `for`/`id` pair — the source's broken
  `for="input_from"` on the To label SHALL NOT be reproduced (a11y fix;
  clicking the "To" label SHALL focus the To input)
- **AND** the To input SHALL show placeholder "End Date" (deliberate fix of
  the source's copy-paste bug where BOTH inputs say "Start Date")
- **AND** both labels SHALL be 12px, `#212529`, `margin-bottom: .5rem`

#### Scenario: Input shell

- **GIVEN** the Interval page is rendered
- **WHEN** an input is inspected
- **THEN** it SHALL have `border: 1px solid #ced4da`,
  `border-radius: .25rem`, `padding: .375rem .75rem`,
  `height: calc(1.5em + .75rem + 2px)`, `color: #495057`

#### Scenario: Input focus

- **GIVEN** the Interval page is rendered
- **WHEN** an input receives focus
- **THEN** the Bootstrap blue focus ring SHALL NOT appear (source
  `style.css` sets `outline: none; box-shadow: none` on
  `.form-control:focus`)
- **AND** that input's date picker SHALL open (see Picker open/close
  behavior)

### Requirement: Picker open/close behavior

Each input SHALL open its own date picker when focused or clicked, and close
it when a day is picked (rome `autoClose: true`) or when clicking outside
the picker (rome `autoHideOnClick: true`). Each input's value SHALL persist
when its picker closes without a selection.

#### Scenario: Opens on focus/click

- **GIVEN** the Interval page is rendered and both pickers are closed
- **WHEN** the From input is focused or clicked
- **THEN** a picker SHALL be visible, anchored below the From input
- **AND** when the To input is focused or clicked, its own picker SHALL be
  visible, anchored below the To input

#### Scenario: Closes on day select

- **GIVEN** a picker is open
- **WHEN** a current-month day cell is clicked
- **THEN** the picker SHALL close
- **AND** the owning input SHALL contain the selected date in `YYYY-MM-DD`
  format (e.g. "2026-08-16")

#### Scenario: Closes on outside click

- **GIVEN** a picker is open
- **WHEN** a click lands outside the picker (and outside the owning input)
- **THEN** the picker SHALL close
- **AND** the owning input SHALL keep its current value

### Requirement: Range constraints

The two pickers SHALL be wired as a date range: the From picker SHALL reject
dates after the To value, and the To picker SHALL reject dates before the
From value (source: `rome.val.beforeEq(input_to)` / `rome.val.afterEq(input_from)`).
Rejected days SHALL be visibly disabled and inert.

#### Scenario: To picker disables days before From

- **GIVEN** the From input has a value (e.g. `2026-08-16`)
- **WHEN** the To picker is opened
- **THEN** every day strictly before the From date SHALL be rendered
  disabled (`#fcc` text, `cursor: default`)
- **AND** clicking a disabled day SHALL NOT change the To value

#### Scenario: From picker disables days after To

- **GIVEN** the To input has a value (e.g. `2026-08-20`)
- **WHEN** the From picker is opened
- **THEN** every day strictly after the To date SHALL be rendered disabled
  (`#fcc` text, `cursor: default`)
- **AND** clicking a disabled day SHALL NOT change the From value

#### Scenario: Equal endpoints are allowed

- **GIVEN** the From input has a value (e.g. `2026-08-16`)
- **WHEN** the To picker is opened
- **THEN** the day equal to the From date SHALL remain enabled
  (beforeEq/afterEq include equality — a From/To pair on the same day is a
  valid range)

#### Scenario: No constraints before any value is set

- **GIVEN** neither input has a value
- **WHEN** either picker is opened
- **THEN** no day SHALL be disabled (empty counterpart = no limit)

### Requirement: Picker shell

Each picker SHALL render as a floating white box (ROME shell: `background:
#fff`, `padding: 10px`, `text-align: center`, `box-shadow: 0 15px 30px 0
rgba(0,0,0,.2)`, NO border, NO dimmed backdrop) anchored below its owning
input.

#### Scenario: Shell appearance

- **GIVEN** a picker is open
- **WHEN** the popup is inspected
- **THEN** it SHALL have a white background and `10px` padding
- **AND** it SHALL have the soft drop shadow `0 15px 30px 0 rgba(0,0,0,.2)`
- **AND** it SHALL have NO border
- **AND** it SHALL NOT dim or cover the page behind it (no backdrop)

### Requirement: Picker header and month navigation

Each picker SHALL render a header with the current month name and year
(`MMMM YYYY`, e.g. "August 2026") and prev/next navigation buttons on the
left/right whose glyphs are `←` / `→`.

#### Scenario: Header content

- **GIVEN** a picker is open
- **WHEN** the header is inspected
- **THEN** it SHALL show the current month name and year (e.g. "August
  2026")
- **AND** a prev control SHALL sit on the left and a next control on the
  right, each a borderless button with `cursor: pointer` showing `←` / `→`

#### Scenario: Month navigation

- **GIVEN** a picker is open in a given month
- **WHEN** the next control is activated
- **THEN** the header SHALL show the following month and the day grid SHALL
  update accordingly
- **AND** when the prev control is activated the header SHALL show the
  previous month and the grid SHALL update accordingly
- **AND** month navigation SHALL always be enabled (the range validators
  disable DAYS, never the nav buttons)

### Requirement: Weekday row and day grid

Each picker SHALL render a weekday row (Su Mo Tu We Th Fr Sa — Sunday first)
and a single-month day grid of square 50×50px cells, with adjacent-month
days shown faintly (`#ccc`).

#### Scenario: Weekday labels

- **GIVEN** a picker is open
- **WHEN** the weekday row is inspected
- **THEN** it SHALL contain the seven weekday abbreviations Su, Mo, Tu, We,
  Th, Fr, Sa in order, starting with Sunday

#### Scenario: Current-month days

- **GIVEN** a picker is open in a given month
- **WHEN** the day grid is inspected
- **THEN** each day of the current month SHALL be rendered as a clickable
  cell of 50×50px, centered
- **AND** days from the previous/next month SHALL fill the leading/trailing
  cells and SHALL be styled `#ccc` (faint — this demo's rome.css value; do
  NOT copy Equinox's `#999`)

#### Scenario: Day selection

- **GIVEN** a picker is open
- **WHEN** an enabled current-month day cell is clicked
- **THEN** the cell SHALL be styled with `background: #f67280; color: #fff;
border-radius: 50%` (a CIRCLE, not a square)
- **AND** the owning input SHALL receive the date in `YYYY-MM-DD` format
  (e.g. "2026-08-16")
- **AND** the range endpoint SHALL remain marked with the selected circle
  when its picker is reopened (verified live: From's picked day stays
  `.rd-day-selected`; the To picker also marks the From value)

### Requirement: Component Dock footer link

The system SHALL render a small footer line linking to Component Dock, per
monorepo convention (replaces the source demo's absence of any footer).

#### Scenario: Footer link

- **GIVEN** the Interval page is rendered
- **WHEN** the page bottom is inspected
- **THEN** a footer link reading "Component Dock" SHALL link to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/interval` exists; package `@free-react-templates/interval`;
      `public/CNAME` = `interval.free.componentdock.com`; `homepage` =
      `https://interval.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto; no font/image/icon assets
      copied from ColorLib; no rome/jQuery/Bootstrap dependency added
      (React date-grid components instead)
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/interval` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Page background `#efefef` (LIGHT GREY — not Equinox's `#fff`),
      section `py-28`, content centered; column ≈83% on lg+ (`col-lg-10`),
      full width below; Roboto body font
- [ ] H2 "Pick a Date Range" — centered, 20px, `#212529`, `mb-5` (3rem
      below); do NOT reproduce the stale "Calendar #5" label
- [ ] Two inputs in two equal columns on md+, stacked below: real `<label>`s
      "From"/"To" with MATCHING `for`/`id` pairs (fix the source's
      `for="input_from"` on the To label — a11y), placeholders "Start Date"
      (From) and "End Date" (To — deliberate fix of the source's duplicated
      "Start Date" placeholder), Bootstrap 4 `.form-control` shell
      (`#ced4da` border, `.25rem` radius, `#495057` text); focus shows NO
      Bootstrap blue ring (source strips it)
- [ ] Each input opens its own picker anchored below it; picker closes on
      day pick (`autoClose`) and on outside click (`autoHideOnClick`);
      value persists when closed without selection
- [ ] Range wiring: From picker disables days strictly AFTER To; To picker
      disables days strictly BEFORE From; disabled days `#fcc` +
      `cursor: default` and clicks on them are inert; equality allowed;
      nothing disabled when the counterpart is empty
- [ ] Picker shell is the ROME shell: white bg, 10px padding, shadow
      `0 15px 30px 0 rgba(0,0,0,.2)`, NO border, NO backdrop (do NOT copy
      the pickadate classic/default shell values from Kalends/Span)
- [ ] Header: month+year `MMMM YYYY` (e.g. "August 2026"), `←`/`→`
      borderless nav buttons (left/right); navigation always enabled and
      updates header + grid
- [ ] Weekday row: Su Mo Tu We Th Fr Sa (Sunday first)
- [ ] Day grid: single month, 50×50px centered cells; out-of-month days
      `#ccc` (this demo's value — NOT Equinox's `#999`); selected day is a
      CIRCLE `#f67280` bg + white text (`border-radius: 50%`); picked
      endpoint stays marked when reopened
- [ ] Input values `YYYY-MM-DD` (e.g. "2026-08-16")
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; tests mock the clock (`vi.setSystemTime`) for
      deterministic month-grid and range assertions, then
      `vi.useRealTimers()`; a11y: semantic elements, real label
      associations, focus-visible rings
- [ ] `npm run verify:app -- interval` (or `scripts/verify-app.sh interval`)
      passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://interval.free.componentdock.com (200, correct
      `<title>`, bundle hash matches local build)
