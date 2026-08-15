# Template: Cadence (Calendar / Full-Screen Multi-View Event Calendar)

## Purpose

Cadence is a single-page FULL-SCREEN calendar template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Calendar 20" website template design
(source: https://colorlib.com/wp/template/calendar-20/), built under a
DIFFERENT name (Cadence — "a rhythmic flow of days and events", fitting a
calendar that keeps every view of the month at your fingertips) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

New name **cadence** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`calendar-20`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15). It continues
the calendar-series rename lineage (chronos, metronome, kalends, span,
equinox, interval, lunar, epoch, dyad, timescape) as the successor to
Timescape (Calendar 19).

Cadence lives in `apps/cadence` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 20" — the LAST of the 20 "Bootstrap
  Calendars" demos (page title "Calendar #10"; the series numbering is
  inconsistent — slug is calendar-20, page title says "Calendar #10"). A
  FULL-SCREEN FullCalendar v4 event calendar: `#calendar-container` is
  `position: fixed; top: 0; left: 20px; right: 20px; bottom: 20px` — the
  calendar fills the viewport with a 20px gutter (NOT the centered 900px
  card of calendar-19/timescape). It loads ALL four view plugins
  (dayGrid + timeGrid + list) and the toolbar carries a full view switcher:
  `left: 'prev,next today', center: 'title', right:
'dayGridMonth,timeGridWeek,timeGridDay,listWeek'` with
  `defaultView: 'dayGridMonth'`. This is the flagship "everything"
  calendar of the series, distinct from the month-grid-only
  (calendar-19/timescape) and date-picker (calendar-10/chronos …
  calendar-18/dyad) variants.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/calendar-20/`
  (reachable; DOM fetched — 14.9KB HTML + `css/style.css` (1.7KB custom:
  body bg `#efefef`, Roboto font stack, `#calendar-container` fixed inset
  layout, `.fc-view-container` white card + shadow, mobile toolbar stack
  <768px) + `css/bootstrap.min.css` + `fonts/icomoon/style.css` (icon font,
  NOT used by the calendar itself — FullCalendar's prev/next arrows come
  from its own embedded `fcicons` font) + FullCalendar v4 packages `core` +
  `interaction` + `daygrid` + `timegrid` + `list` (CSS injected from per-
  package `main.css` files served at
  `fullcalendar/packages/<pkg>/main.css`); the FullCalendar instance was
  analyzed from the inline init script).
  NOTE: the standard preview path `https://preview.colorlib.com/theme/calendar-20/`
  404s — the whole "Bootstrap Calendars" series lives under the
  `/theme/bootstrap/` prefix on the preview portal (same finding as prior
  calendar preps; `products.js` has no calendar entries at all).
- **Screenshot:** `calendar-20.jpg` (1024×829 JPEG, viewed in browser) —
  full-viewport calendar on a light grey page (`#efefef`); toolbar with
  prev/next arrows + salmon-pink "today" button top-LEFT, centered title
  "February 2020", and top-RIGHT view buttons "month / week / day / list"
  with the ACTIVE "month" button filled salmon-pink; a 7-column month grid
  with faint light-grey borders; salmon-pink event bars with white text
  (Feb 1 "All Day Event", Feb 6–8 "Long Event", Feb 9/16 "4p Repeating
  Event", Feb 11–13 "Conference", Feb 12 stacked timed events with a
  "+3 more" link, Feb 13 "7a Birthday Party", Feb 27 "Click for Google").
  No navbar, no hero, no footer — pure calendar, no other page furniture.
- **Stack of the source:** FullCalendar v4 (core + interaction + dayGrid +
  timeGrid + list plugins) + jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  grid/utilities + Roboto font. `js/main.js` is an EMPTY jQuery
  `$(function(){})` stub; the real init is an inline script:
  `new FullCalendar.Calendar(el, {plugins:['interaction','dayGrid',
'timeGrid','list'], height:'parent', header:{left:'prev,next today',
center:'title', right:'dayGridMonth,timeGridWeek,timeGridDay,listWeek'},
defaultView:'dayGridMonth', defaultDate:'2020-02-12', navLinks:true,
editable:true, eventLimit:true, events:[...]})`.
  The recreation must NOT copy any of this — build a pure-React calendar
  with lucide-react icons (ChevronLeft / ChevronRight / X) and no images
  (this design is pure CSS).
- **Event data (paraphrase freely, keep the same kinds):** the same 12
  events as the timescape demo, on defaultDate February 2020 —
  1. "All Day Event" — Feb 1 (all-day, spans full cell width).
  2. "Long Event" — Feb 7 → Feb 10 (multi-day, all-day; renders a bar on
     every spanned day).
  3. "Repeating Event" — Feb 9 16:00 and Feb 16 16:00 (same `groupId` 999;
     renders "4p Repeating Event").
  4. "Conference" — Feb 11 → Feb 13 (multi-day all-day).
  5. "Meeting" — Feb 12 10:30–12:30 ("10:30a Meeting").
  6. "Lunch" — Feb 12 12:00 ("12p Lunch").
  7. "Meeting" — Feb 12 14:30–16:30 ("2:30p Meeting").
  8. "Happy Hour" — Feb 12 17:30 ("5:30p Happy Hour").
  9. "Dinner" — Feb 12 20:00 ("8p Dinner").
  10. "Birthday Party" — Feb 13 07:00 ("7a Birthday Party").
  11. "Click for Google" — Feb 28 (links to http://google.com/).
  12. Feb 12 has SIX events total (Conference + 5 timed) — the month grid
      shows as many as fit (3 visible + "+3 more" at 1024px screenshot
      width, "+5 more" at taller cells) and the popover lists the rest.
      Timed events render with the lowercase `h:mma` time prefix ("10:30a",
      "12p", "2:30p", "5:30p", "8p", "7a"); all-day events have no prefix.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `#calendar-container` — `position: fixed; top: 0; left: 20px;
right: 20px; bottom: 20px` on the `#efefef` body (the calendar fills
   the viewport with a 20px gutter all around; Tailwind:
   `fixed inset-x-5 top-0 bottom-5`).
   - `.fc-view-container` — white background + `box-shadow: 0 15px 30px 0
rgba(0,0,0,0.2)` (the floating white sheet).
     - `.fc-toolbar.fc-header-toolbar` — flex row, space-between:
       - `.fc-left` — `prev` (icon `<`), `next` (icon `>`), `today`
         (text button) — three `#f67280` Bootstrap-style buttons.
       - `.fc-center` — `<h2 class="fc-title">` "February 2020" (28px,
         weight 500, `#212529`), centered. NOTE: centered, unlike
         timescape's left-aligned title.
       - `.fc-right` — view switcher: four buttons "month", "week",
         "day", "list"; the ACTIVE view button renders
         `.fc-button-active` = `#f67280` bg + white text; inactive
         buttons are transparent with `#212529` text.
     - `.fc-view` — the active view:
       - `dayGridMonth` (default) — `.fc-head` with 7× `<th
class="fc-day-header">` Sun Mon Tue Wed Thu Fri Sat (16px,
         weight 700, `#212529`, `#f9f9f9` borders); `.fc-body` = 6
         `.fc-row` blocks (Feb 2020 starts Saturday → leading Jan 26–31,
         trailing Mar 1–7; leap year → 29 days); day numbers floated
         right (`.fc-day-number`, `#212529`, adjacent-month
         `.fc-other-month` at `opacity: .3`); event bars
         `.fc-day-grid-event` (`#f67280` bg + border, white text,
         radius 3px, font-size .85em); `.fc-today` cell
         `background: #40e0d0`; `.fc-more` "+N more" link (`#007bff`
         blue) opening a `.fc-more-popover` (white,
         `box-shadow: 0 2px 6px rgba(0,0,0,.15)`) listing the day's
         remaining events.
       - `timeGridWeek` — 7 day columns × a 24h time axis; timed events
         positioned by start/end time; all-day events in a top lane.
       - `timeGridDay` — single day × 24h time axis, same event
         positioning.
       - `listWeek` — a flat chronological list of the current week's
         events (date headings + rows with time + title).
   - `navLinks: true` — clicking a day number in month view navigates to
     the day view; clicking a weekday header navigates to the week view.
   - `editable: true` — event bars draggable between days; resizable.
   - `eventLimit: true` — "+N more" overflow with click popover.

The widget is a real interactive multi-view event calendar: month/week/day/
list views, prev/next/today navigation, view switcher, draggable + resizable
events, "+N more" overflow popovers, nav links, and event click-through
(the Google event opens a URL).

## Design tokens (from preview stylesheets `css/style.css` + FullCalendar `main.css`)

- **Brand / event color:** `#f67280` (salmon pink) — event bar background
  AND border (`.fc-event`), toolbar "today"/prev/next buttons AND the ACTIVE
  view button (`.fc-button-primary` / `.fc-button-active`). Put in `@theme`
  and use via Tailwind classes.
- **Today highlight:** `#40e0d0` (turquoise) — `td.fc-today` background.
- **Page background:** `#efefef` (very light grey); body text `#212529`
  (Bootstrap default dark grey).
- **Calendar sheet (`.fc-view-container`):** `#fff` background,
  `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)` (Tailwind:
  `shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]`); the sheet fills the
  `#calendar-container` frame (no fixed max-width — full-viewport sheet).
- **Fonts:** `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` for the whole
  page (Google Fonts Roboto; the source loads Roboto 300 + Poppins
  300/400/500 via cf-fonts but the body CSS uses Roboto). Load Roboto 300,
  400, 500, 700 via Google Fonts `<link>` in index.html (no font files
  copied).
- **Toolbar title:** `<h2>` 28px computed, weight 500, `#212529`,
  CENTERED (timescape's was left-aligned — this demo centers it).
- **Toolbar buttons:** Bootstrap `btn` tokens — `border-radius: .25em`
  (4px), `padding: .4em .65em`, `font-size: 1em`, `line-height: 1.5`;
  primary variant `#f67280` bg + border, `#fff` text; disabled
  `opacity: .65`; focus ring `0 0 0 .2rem rgba(76,91,106,.5)`. The
  prev/next are icon-only, the "today" button is text.
- **View switcher (`.fc-button` / `.fc-button-active`):** same button
  tokens; ACTIVE view = `#f67280` bg + border + `#fff` text; INACTIVE
  views = transparent bg, `#212529` text, 1px transparent border.
- **Grid borders:** `#f9f9f9` (very faint light grey) — every `th`/`td`
  border is `1px solid #f9f9f9` (also the list-view border color).
- **Weekday headers (`th.fc-day-header`):** 16px, weight 700, `#212529`.
- **Day numbers:** `.fc-day-number` — 16px, `#212529` current month;
  adjacent-month `.fc-other-month` at `opacity: .3`; number floated right
  in the cell top.
- **Event bars (`.fc-event`):** `#f67280` bg + 1px `#f67280` border,
  `#fff` text, `border-radius: 3px`, `font-size: .85em` (13.6px),
  `line-height: 1.4`, `padding: 4px` (`.fc-content`); timed events
  prefixed with lowercase `h:mma` ("10:30a", "12p", "2:30p", "5:30p",
  "8p", "7a").
- **"+N more" link (`.fc-more`):** `#007bff` (Bootstrap primary blue),
  `font-size: .85em`, `cursor: pointer`, no underline (underline on
  hover), margin `1px 3px`.
- **More popover (`.fc-more-popover`):** `#fff` bg,
  `box-shadow: 0 2px 6px rgba(0,0,0,.15)`, width 220px, header bar with a
  close glyph, lists the day's remaining event bars (same `.fc-event`
  styling).
- **Full-screen frame:** `#calendar-container` fixed at
  `top: 0; left: 20px; right: 20px; bottom: 20px` — the sheet always
  fills the viewport (Tailwind `fixed inset-x-5 top-0 bottom-5`).
- **Mobile (`@media (max-width: 767.98px)`):** `.fc-toolbar` becomes
  `display: block`, centered; `.fc-center` gets `margin: 20px 0` — the
  toolbar stacks (nav row, then title, then view switcher).
- **Icons/images:** the source DOM uses NO `<img>`; the only icons are
  the FullCalendar `fcicons` font glyphs (`<`/`>` prev/next; `x` close on
  the popover). Recreation uses lucide ChevronLeft/ChevronRight + X and
  no images.

## Requirements

### Requirement: Page composition

The system SHALL render a single full-screen calendar sheet on the very
light grey background (`#efefef`); the sheet SHALL fill the viewport with a
20px gutter on all sides.

#### Scenario: Full-screen layout

- **GIVEN** the Cadence page is rendered
- **WHEN** the page loads
- **THEN** the page background SHALL be `#efefef`
- **AND** the body font SHALL be Roboto (via Google Fonts link in
  index.html)
- **AND** the calendar sheet SHALL be positioned fixed, 20px from the top,
  20px from the left, 20px from the right, and 20px from the bottom
- **AND** the sheet SHALL have a white background and the soft drop shadow
  `0 15px 30px 0 rgba(0,0,0,0.2)`

### Requirement: Toolbar

The system SHALL render a calendar toolbar with prev/next/today buttons on
the left, the current month/year title centered, and a month/week/day/list
view switcher on the right.

#### Scenario: Toolbar layout

- **GIVEN** the Cadence page is rendered
- **WHEN** the toolbar is inspected
- **THEN** a heading SHALL read "<Month> <Year>" (e.g. "February 2020"),
  centered, 28px, weight 500, `#212529`
- **AND** a previous-month button, a next-month button, and a "Today"
  button SHALL sit on the left
- **AND** four view buttons labeled "month", "week", "day", and "list"
  SHALL sit on the right
- **AND** all buttons SHALL have `border-radius: 4px`; the nav/today
  buttons SHALL be `#f67280` with white text
- **AND** the ACTIVE view button SHALL be `#f67280` with white text and
  the INACTIVE view buttons SHALL be transparent with `#212529` text

#### Scenario: Navigate time

- **GIVEN** the calendar shows February 2020
- **WHEN** the next-month button is activated
- **THEN** the title SHALL read "March 2020" and the calendar SHALL show
  March's days
- **WHEN** the previous-month button is activated twice
- **THEN** the title SHALL read "January 2020" and the calendar SHALL
  show January's days
- **AND** navigation SHALL roll over year boundaries (Dec 2020 → Jan 2021)

#### Scenario: Today button

- **GIVEN** the system clock is fixed (tests mock the date)
- **WHEN** the "Today" button is activated from any other month
- **THEN** the calendar SHALL navigate to the current month
- **AND** the current month's today cell SHALL be highlighted turquoise
  (`#40e0d0`)

### Requirement: View switcher

The system SHALL offer month, week, day, and list views; the active view
SHALL be visually highlighted and SHALL replace the grid content.

#### Scenario: Switch views

- **GIVEN** the calendar is in month view
- **WHEN** the "week" view button is activated
- **THEN** a week view SHALL render with seven day columns and a time
  axis, and the "week" button SHALL become active (`#f67280`)
- **WHEN** the "day" view button is activated
- **THEN** a single-day view SHALL render with a 24h time axis, and the
  "day" button SHALL become active
- **WHEN** the "list" view button is activated
- **THEN** a chronological list of the current week's events SHALL
  render, and the "list" button SHALL become active

#### Scenario: Nav links (day/week names)

- **GIVEN** the calendar is in month view (source `navLinks: true`)
- **WHEN** a day number is activated
- **THEN** the calendar SHALL navigate to the day view for that date
- **WHEN** a weekday header name is activated
- **THEN** the calendar SHALL navigate to the week view containing that
  day

### Requirement: Month grid

The system SHALL render the month's days in a 7-column grid with the
first/last rows filled by adjacent-month days.

#### Scenario: Day cells

- **GIVEN** the calendar shows February 2020
- **WHEN** its grid is inspected
- **THEN** the grid SHALL have 7 columns and exactly enough rows to cover
  the month (Feb 2020: 6 rows, leading Jan 26–31 and trailing Mar 1–7)
- **AND** current-month day numbers SHALL be `#212529`, floated right in
  their cell top
- **AND** adjacent-month day numbers SHALL be faint (30% opacity)
- **AND** every cell border SHALL be `1px solid #f9f9f9`

#### Scenario: Leap year

- **GIVEN** the calendar shows February 2020 (a leap year)
- **WHEN** the grid is inspected
- **THEN** February SHALL have 29 days
- **AND** the trailing cells SHALL start on March 1

### Requirement: Weekday header row

The system SHALL render a header row of seven abbreviated weekday names
starting Sunday: Sun, Mon, Tue, Wed, Thu, Fri, Sat.

#### Scenario: Weekday headers

- **GIVEN** the calendar is rendered
- **WHEN** its header row is inspected
- **THEN** seven column headers SHALL read Sun, Mon, Tue, Wed, Thu, Fri,
  Sat in order
- **AND** they SHALL be styled 16px, weight 700, `#212529`, with faint
  `#f9f9f9` borders

### Requirement: Event rendering

The system SHALL render the event data on their dates as salmon-pink bars
with white text; timed events SHALL carry a lowercase `h:mma` time prefix,
multi-day events SHALL span every day in their range.

#### Scenario: All-day event bar

- **GIVEN** an all-day event exists on Feb 1
- **WHEN** the Feb 1 cell is inspected
- **THEN** a bar SHALL render spanning the full cell width with the event
  title "All Day Event" (or an equivalent paraphrase)
- **AND** the bar SHALL have background `#f67280`, white text,
  `border-radius: 3px`, and `font-size: .85em`

#### Scenario: Timed event prefix

- **GIVEN** timed events exist on Feb 12
- **WHEN** their bars are inspected
- **THEN** each bar SHALL begin with the lowercase time (e.g. "10:30a
  Meeting", "12p Lunch", "2:30p Meeting", "5:30p Happy Hour", "8p Dinner")

#### Scenario: Multi-day event

- **GIVEN** a multi-day all-day event exists (Feb 7 → Feb 10)
- **WHEN** the grid is inspected
- **THEN** the event SHALL render a bar on EACH spanned day (Feb 7, 8, 9, 10)
- **AND** a two-day conference (Feb 11 → Feb 13) SHALL render on Feb 11,
  12, and 13

### Requirement: Today highlight

The system SHALL highlight the current day's cell with a turquoise
background (`#40e0d0`).

#### Scenario: Today cell

- **GIVEN** the system clock is fixed to a date within the shown month
- **WHEN** the grid is rendered
- **THEN** the today cell SHALL have background `#40e0d0`
- **AND** all other cells SHALL have no background

### Requirement: Event overflow ("+N more")

When a day holds more events than fit in its cell, the system SHALL render
a blue "+N more" link; activating it SHALL open a small popover listing the
day's remaining events.

#### Scenario: Overflow link

- **GIVEN** Feb 12 holds six events (some shown + the rest hidden)
- **WHEN** the Feb 12 cell is inspected
- **THEN** a link SHALL read "+N more" (N = hidden count) in blue
  `#007bff` at `.85em`
- **AND** activating it SHALL open a popover (white, shadow
  `0 2px 6px rgba(0,0,0,.15)`, width 220px) listing the hidden events with
  their time prefixes
- **AND** the popover SHALL be dismissible (close button or outside click)

### Requirement: Event interactions

The system SHALL make event bars clickable and draggable to other days
(paraphrase of the source's `editable: true`); events with a URL SHALL open
it when clicked.

#### Scenario: Click a linked event

- **GIVEN** an event with a URL exists (e.g. Feb 28 "Click for Google")
- **WHEN** its bar is activated
- **THEN** the URL SHALL open in a new tab

#### Scenario: Drag an event

- **GIVEN** an all-day event bar on Feb 1
- **WHEN** it is dragged to Feb 14
- **THEN** the event SHALL move to Feb 14 (its bar disappears from Feb 1
  and renders on Feb 14)

### Requirement: Responsive behavior

The system SHALL keep the calendar usable from mobile to desktop: the sheet
fills the viewport and the grid never overflows horizontally.

#### Scenario: Desktop

- **GIVEN** a viewport ≥ 768px
- **WHEN** the page is rendered
- **THEN** the sheet SHALL fill the viewport (20px gutter) with the
  toolbar title centered and nav buttons left / view switcher right
- **AND** all 7 columns SHALL fit without horizontal scroll

#### Scenario: Mobile

- **GIVEN** a viewport < 768px
- **WHEN** the page is rendered
- **THEN** the toolbar SHALL stack vertically (nav row, then centered
  title with 20px vertical margin, then view switcher)
- **AND** the grid SHALL remain 7 columns with no horizontal overflow
- **AND** day cells SHALL stay tappable (≥ 44px effective hit area or
  clearly separated)

### Requirement: Footer with Component Dock link

The source demo has no footer, but the monorepo mandate requires every
template's footer to link https://www.componentdock.com/ ("Component Dock").
The system SHALL render a minimal footer with that link.

#### Scenario: Footer attribution

- **GIVEN** the Cadence page is rendered
- **WHEN** the footer is inspected
- **THEN** a footer SHALL be present at the bottom of the page
- **AND** it SHALL contain a link labeled "Component Dock" pointing to
  https://www.componentdock.com/

## Verification checklist

- [ ] `apps/cadence` exists; package `@free-react-templates/cadence`;
      `public/CNAME` = `cadence.free.componentdock.com`; `homepage` =
      `https://cadence.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300, 400, 500, 700);
      no font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/cadence` (provenance lives only in this spec, TEMPLATES.md,
      PR)
- [ ] Page background `#efefef`; calendar sheet fixed at
      `top: 0; left: 20px; right: 20px; bottom: 20px`, white, shadow
      `0 15px 30px 0 rgba(0,0,0,0.2)`
- [ ] Toolbar: centered title "<Month> <Year>" (28px, weight 500,
      `#212529`); prev/next/today left; view switcher month/week/day/list
      right; nav + today buttons `#f67280`; ACTIVE view button `#f67280`,
      inactive views transparent `#212529`; navigation rolls over year
      boundaries; "Today" jumps to the current month
- [ ] View switcher works: month (default) / week (7 columns + time
      axis) / day (24h axis) / list (chronological rows); nav links
      (day number → day view, weekday name → week view)
- [ ] Weekday headers Sun Mon Tue Wed Thu Fri Sat — 16px, weight 700,
      `#212529`, `#f9f9f9` borders
- [ ] Month grid: 7 columns, 5–6 rows, adjacent-month fill (Feb 2020: 6
      rows, Jan 26–31 leading, Mar 1–7 trailing), current-month numbers
      `#212529` floated right, adjacent-month at 30% opacity, borders
      `1px solid #f9f9f9`; leap February (2020 → 29 days)
- [ ] Events (paraphrased titles OK): Feb 1 all-day bar; Feb 7–10 long
      event on every spanned day; Feb 9 + 16 "4p Repeating Event"; Feb
      11–13 conference on every spanned day; Feb 12 timed events with
      lowercase `h:mma` prefixes ("10:30a", "12p", "2:30p", "5:30p", "8p");
      Feb 13 "7a Birthday Party"; Feb 28 linked event opening in a new tab
- [ ] Event bar style: `#f67280` bg + border, `#fff` text, radius 3px,
      `font-size: .85em`
- [ ] Today cell highlighted `#40e0d0` (fixed-clock tests)
- [ ] "+N more" overflow on Feb 12 (blue `#007bff`, `.85em`); popover
      lists the hidden events, dismissible
- [ ] Events draggable to another day (interaction paraphrase)
- [ ] Footer links "Component Dock" → https://www.componentdock.com/
- [ ] 100% coverage (lines/functions/branches/statements) via Vitest +
      Testing Library; a11y: semantic table/buttons, aria-labels, focus
      rings; tests mock the clock (`vi.setSystemTime`) for deterministic
      "today" assertions and cover month-boundary cases (Sunday-start,
      Saturday-start, 5-row vs 6-row months, leap February, Dec→Jan and
      Jan→Dec navigation) plus all four views and the view switcher
- [ ] `npm run verify:app -- cadence` (or `scripts/verify-app.sh
  cadence`) passes: typecheck + lint + knip + fallow + 100% coverage + build
- [ ] Deployed to https://cadence.free.componentdock.com (200, correct
      content)
