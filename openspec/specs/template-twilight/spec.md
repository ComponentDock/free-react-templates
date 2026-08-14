# Template: Twilight (Calendar / Utility Widget — Photo-Backdrop Two-Panel Monthly Calendar)

## Purpose

Twilight is a single-page interactive calendar widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Calendar 07" free template (source:
https://colorlib.com/wp/template/calendar-07/), built under a DIFFERENT name
(**Twilight** — evoking the template's signature photo panel: a dusk/dawn
mountain range under a deep purple-blue sky; per the monorepo naming mandate
— never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a **minimalist, single-widget page**: no navbar, no hero, no
other sections — one centered two-panel calendar card on a very light
grey-blue background. ColorLib's own description (family): a catchy free
calendar template "based on the powerful Bootstrap Framework for complete
flexibility." The page renders ONE interactive widget (from the live
reference DOM):

1. **Title** — **"Calendar #07"**, 28px near-black sans-serif, centered
   above the widget.
2. **Left photo panel** (`wrap-header`, width 35% on desktop) — the
   signature of this template: a **dusk/dawn mountain photograph**
   (`images/bg.jpg` in the original; the recreation uses a picsum
   placeholder) rendered `background-size: cover` with a **50% black
   overlay** (`.wrap-header:after`) so the white text reads:
   - **"Today" pill** (`#reset`) — the text **"Today"** (renders "TODAY"
     via CSS text-transform) in the top-right corner, uppercase 11px,
     translucent white on a 1px translucent-white border, rounded 4px.
   - **Month label** (`head-month`) — **"DECEMBER - 2020"**, uppercase
     16px white, weight 300, centered in the UPPER part of the panel
     (note: the month is ABOVE the day in this template — the opposite of
     sibling "Calendar 02").
   - **Big day number** (`head-day`) — the displayed date's day as a huge
     white numeral, `font-size: 9em` (~144px), line-height 1, centered
     BELOW the month label.
   - **No chevrons** — the original HTML has the `#header` pre/next
     buttons commented out; this template's chevrons live in the right
     panel (see below).
3. **Right white panel** (`calendar-wrap`, width 65% on desktop) — the
   month grid on white, padding 40px 20px 20px:
   - **Chevron row** (`button-wrap`, padding 10px 0) — chevron-left /
     chevron-right icons, **grey `#cccccc`**, 18px, in circular (50%) hit
     targets absolutely positioned at the TOP corners of the panel
     (left: 20px / right: 20px). This placement (top of the grid panel,
     grey) differs from sibling Calendar 02 (white chevrons floating on
     the left panel's vertical center).
   - **Weekday header row** — `Sun Mon Tue Wed Thu Fri Sat`, bold
     near-black, 7 equal columns.
   - **Date grid** — a fixed 42-cell table (6 rows × 7 columns, each row
     48px tall); leading blank cells for the month's start offset, the
     month's days 1–31 centered per cell, trailing blank cells. Empty
     (disabled) cells render blank and are not clickable.
   - **Today circle** — the reference "today" (19 December 2020 in the
     screenshot) renders as a solid **magenta `#e13a9d`** 44px circle with
     white text. Magenta is this template's brand accent (the stylesheet
     also overrides Bootstrap's `.bg-primary` to `#e13a9d`).
   - **Selected circle** — clicking a date fills its 44px circle with dark
     navy `#2a3246` and white text; hover shows the same navy circle.
4. **No footer** in the reference — the recreation appends the minimal
   "Component Dock" footer per repo convention.

The defining signature of this template is the **photo-backed two-panel
calendar**: a dusk-mountain photograph (dark overlay) beside a white grid,
ONE magenta accent for the today circle, a SECOND (navy) for
selection/hover, grey chevrons at the grid panel's top corners, flat
design, subtle card shadow, no gradients elsewhere. The magenta `#e13a9d`
is used in exactly one place in the widget (the today circle — plus the
stylesheet's `.bg-primary` token, which nothing else on the page uses).
Recreate the widget 1:1 with matching tokens, typography, and interaction
(month navigation + date selection + reset — all functional in the
original Bootstrap build; the recreation SHALL make them functional).

> NAMING NOTE: the ColorLib source name "Calendar 07" is FORBIDDEN as the
> app name. **Twilight** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or the
> shipped-app names embedded in TEMPLATES.md (verified 2026-08-15: no
> `apps/twilight` on origin/main, no `template-twilight` spec, no
> `twilight` in `docs/templates/`, no `[twilight](...)` shipped link in
> TEMPLATES.md, and no ColorLib source slug `twilight`). Source slug +
> preview URL are recorded below.

> PREVIEW NOTE (REACHABLE — different path than the default): the default
> preview URL `https://preview.colorlib.com/theme/calendar-07/` returns
> **HTTP 404** (verified 2026-08-15 via curl). The REAL live preview lives
> at **`https://preview.colorlib.com/theme/bootstrap/calendar-07/`** — found
> via the "Live Preview" link on the colorlib.com template landing page
> (same family path as Calendar 02, prepped as `template-monthly`). Full
> reference material was captured from the live preview 2026-08-15: the
> rendered DOM (`/tmp/cal07.html`, ~5.9KB), the template stylesheet
> `css/style.css` (~223KB Bootstrap bundle; the template's own rules are at
> the tail), the interaction script `js/main.js` (~5.6KB), and the left
> panel photo `images/bg.jpg` (800×1067 JPEG). Design tokens below are
> extracted from the live stylesheet — the current ground truth. The
> TEMPLATES.md screenshot (`calendar-07.jpg`, 1200×972) was additionally
> analyzed for the visual design and to pin the screenshot-date render (see
> Design reference).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 07". Listed in TEMPLATES.md under
  **Bootstrap Calendars (20)** (line 691). Free Bootstrap calendar widget
  template (author Colorlib; post dated December 2020; license CC BY 3.0).
  The `calendar-07` slug appears exactly once in TEMPLATES.md (no duplicate
  rows to mark). The 20-item Bootstrap Calendars category is a family:
  siblings "Calendar 01"–"Calendar 06" were prepped as **Planner**,
  **Monthly**, **Almanac**, **Solstice**, **Triptych**, and **Ephemeris**
  (see their `openspec/specs/template-*/` folders) — this prep is the
  seventh of the family; each sibling gets its own prep.
- **Live preview DOM — REACHABLE at `.../theme/bootstrap/calendar-07/`**
  (captured 2026-08-15, ~5.9KB HTML): `section.ftco-section` (padding 7em 0) → `.container` → centered `h2.heading-section` **"Calendar #07"** →
  `div.elegant-calencar` (max-width 700px, mx-auto, border-radius 5px,
  box-shadow `0px 19px 27px -20px rgba(0,0,0,0.16)`, `d-md-flex`)
  containing exactly two children:
  - `div.wrap-header.d-flex.align-items-center.img` (width 35%, inline
    `style="background-image: url(images/bg.jpg)"`, `.img` = cover /
    no-repeat / center-center) with `p#reset` **"Today"**, `div#header.p-0`
    → `div.head-info` → `div.head-month` (EMPTY — filled by JS) THEN
    `div.head-day` (EMPTY — filled by JS). The `#header` pre/next chevron
    divs are present only as HTML **comments** — NOT rendered.
  - `div.calendar-wrap` (width 65%, white, padding 40px 20px 20px) with
    `div.w-100.button-wrap` containing `div.pre-button` (chevron-left) and
    `div.next-button` (chevron-right), then `table#calendar` (thead
    `Sun..Sat`, tbody 6 rows × 7 empty `<td>`s filled by JS). Scripts:
    jquery + popper + bootstrap + `js/main.js`.
- **Template stylesheet (css/style.css, ~223KB Bootstrap bundle; custom
  rules at the tail) — tokens below extracted from the custom rules** (the
  ONLY authoritative token source; the screenshot and the live render agree
  on the magenta today circle):
  - `body { font-family: "Lato", Arial, sans-serif; font-size: 16px;
line-height: 1.8; font-weight: normal; background: #f8f9fd; color: gray;
} ` (plus a separate `body { min-width: 992px !important; }` desktop-only
    hack SHALL NOT be reproduced — the recreation must be responsive
    instead).
  - `.ftco-section { padding: 7em 0; }` · `.heading-section { font-size:
28px; color: #000; }` · `h1..h5 { font-family: "Lato", Arial, sans-serif;
line-height: 1.5; font-weight: 400; color: #000; }`
  - `.elegant-calencar { max-width: 700px; text-align: center; position:
relative; margin: 0 auto; overflow: hidden; border-radius: 5px;
box-shadow: 0px 19px 27px -20px rgba(0,0,0,0.16); }`
  - `.img { background-size: cover; background-repeat: no-repeat;
background-position: center center; }`
  - `.wrap-header { position: relative; width: 35%; z-index: 0; }` +
    `.wrap-header:after { position: absolute; inset: 0; content: '';
background: #000; opacity: .5; z-index: -1; }` (the 50% black overlay) +
    `@media (max-width: 767.98px) { .wrap-header { width: 100%; padding:
20px 0; } }`
  - `#header { width: 100%; position: relative; }` (its `.pre-button /
.next-button` white-chevron rules are dead code — those nodes are
    commented out in the HTML)
  - `.button-wrap { position: relative; padding: 10px 0; }` +
    `.button-wrap .pre-button, .button-wrap .next-button { cursor:
pointer; width: 1em; height: 1em; line-height: 1em; border-radius: 50%;
position: absolute; top: 0; font-size: 18px; }` + `.button-wrap .pre-button
i, .button-wrap .next-button i { color: #cccccc; }` +
    `.button-wrap .pre-button { left: 20px; }` + `.button-wrap .next-button
{ right: 20px; }`
  - `.head-month { font-size: 2em; line-height: 1; color: #fff;
font-size: 16px; text-transform: uppercase; font-weight: 300; }` (the
    later `font-size: 16px` wins — 16px, uppercase, weight 300) ·
    `.head-day { font-size: 9em; line-height: 1; color: #fff; }`
  - `.calendar-wrap { width: 65%; background: #fff; padding: 40px 20px
20px 20px; }` + `@media (max-width: 767.98px) { .calendar-wrap { width:
100%; } }`
  - `#calendar { width: 100%; }` · `#calendar tr { height: 3em; }` ·
    `thead tr { color: #000; font-weight: 700; }` · `tbody tr { color:
#000; }`
  - `tbody td { width: 14%; border-radius: 50%; cursor: pointer;
transition: all 0.2s ease-in; position: relative; z-index: 0; }` ·
    `tbody td:after { position: absolute; top: 50%; left: 0; right: 0;
bottom: 0; content: ''; width: 44px; height: 44px; margin: 0 auto;
transform: translateY(-50%); border-radius: 50%; transition: 0.3s;
z-index: -1; }`
  - `tbody td:hover, .selected { color: #fff; }` · `tbody td:hover:after,
.selected:after { background: #2a3246; }` · `tbody td:active { transform:
scale(0.7); }` · `#today { color: #fff; }` · `#today:after { background:
#e13a9d; }` · `#disabled { cursor: default; background: #fff; }` ·
    `#disabled:hover { background: #fff; color: #c9c9c9; }` ·
    `#disabled:hover:after { background: transparent; }`
  - `#reset { display: block; position: absolute; right: 0.5em; top:
0.5em; z-index: 999; color: rgba(255,255,255,0.7); cursor: pointer;
padding: 0 0.5em; border: 1px solid rgba(255,255,255,0.4); border-radius:
4px; transition: all 0.3s ease; text-transform: uppercase; font-size:
11px; }` · `#reset:hover { color: #fff; border-color: #fff; }` ·
    `#reset:active { transform: scale(0.8); }`
  - `.bg-primary { background: #e13a9d` (Bootstrap token override — the
    same magenta as the today circle; nothing else on the page uses it).
- **Interaction script (js/main.js, captured 2026-08-15) — behavior to
  reproduce:** identical engine to sibling Calendar 02 (prepped as
  `template-monthly`). The widget initializes on the REAL current date
  (`new Date()`): `head-day` = today's day number, `head-month` =
  `"<MONTH> - <YEAR>"` (uppercase month name + " - " + year). The grid
  draws 42 cells: `startDay = new Date(y, m, 1).getDay()` leading blanks,
  then days 1..daysInMonth; empty cells get `id="disabled"`. The cell
  whose index equals today's (`day + startDay - 1`) gets `id="today"` (the
  magenta circle) — ONLY when the viewed month/year is the current one.
  Clicking a date: clears any `.selected`, marks the cell `.selected`
  (navy circle), sets `head-day` to the clicked day, and persists the
  selection in a `selected_day` cookie (see the cookie note below). Prev /
  next chevrons: month ±1 with year rollover (December→January, wrap at
  11/0), then `head-day` is set to **1** (the original resets the big
  number to 1 on navigation) — then `drawDays()` re-checks the selection:
  if a selected day exists IN the newly viewed month, the big numeral is
  set to that selected day instead (and the navy circle re-renders on it).
  "Today" (the `#reset` pill): returns to today's month/year/day, clears
  the selection, redraws.
  - **Cookie note:** `main.js` persists the selection via
    `document.cookie` (`selected_day`, 1-day expiry) and restores it on
    load. This is a preview-domain quirk (and a 1-day expiry makes it
    effectively pointless in the original). The recreation SHALL keep the
    selection session-local in React state — NO cookie/localStorage
    persistence (deterministic for tests; note the deviation in the PR).
  - **Options note:** the `Calendar(selector, options)` constructor
    accepts an options string (`'yyyy-mm-dd'` preset) but the page calls
    `new Calendar()` with no options — the preset path is dead code in the
    reference render and SHALL NOT be recreated.
  - **Dead-listener note:** the original attaches click listeners to ALL
    42 cells including disabled blanks (clicking a blank corrupts its
    state — an original bug). The recreation SHALL make blank cells
    non-interactive (per the family convention).
- **Visual design (screenshot calendar-07.jpg, 1200×972, verified
  2026-08-15 via browser visual inspection):** a Safari window (URL bar
  `ui-preview.colorlib.com`) showing a single centered widget on the light
  grey-blue `#f8f9fd` page. Top to bottom: centered dark title
  **"Calendar #07"**; the two-panel card — LEFT: a dark, moody portrait
  photograph of a mountain range shrouded in fog/low light (dark blues,
  greys, blacks) with a subtle black overlay, a small outlined **"TODAY"**
  pill in the top-right corner, **"DECEMBER - 2020"** in small white
  uppercase centered in the upper part, and a huge white **"19"** below it;
  RIGHT: white panel with small **grey** chevron arrows at the top corners,
  a `Sun Mon Tue Wed Thu Fri Sat` header, and the December 2020 grid
  (starts Tuesday), **19 circled in magenta (`#e13a9d`) with white text**
  (the screenshot's capture date / "today" indicator), all other dates
  plain dark. No other highlights, no navbar, no hero, no footer (add the
  Component Dock footer per repo convention).
- **Live preview confirmation (2026-08-15, headless browser render of
  `.../theme/bootstrap/calendar-07/`):** renders the widget with the real
  current date — "TODAY" pill, "AUGUST - 2026" above a big white "15", the
  August 2026 grid (1 Aug 2026 = Saturday → single leading blank), and a
  solid magenta circle on 15. The left-panel photo renders as a mountain
  range at dusk/dawn: deep purple-blue sky at top transitioning to a soft
  orange near the horizon, dark silhouetted peaks (matches the foggy
  mountains in the 2020 screenshot — same photo, different crop
  perception). The chevron icons render grey at the grid panel's top
  corners; the page background is the light grey `#f8f9fd`.
- **Section order (1:1 from the reference render):** single widget —
  title → two-panel card (left: Today pill + month label + big day number
  over photo; right: chevron row + weekday header + date grid) →
  (Component Dock footer appended per repo convention).
- **December 2020 layout facts (for the initial render):** 1 December 2020
  was a **Tuesday**, so the first grid row has two leading blank cells (Sun,
  Mon) followed by 1–5; **19 December 2020 was a Saturday** (last column —
  the screenshot's circled date); 31 December 2020 was a Thursday; the
  month occupies 5 rows of the 42-cell table (trailing Fri/Sat blank).
  Adjacent months for nav scenarios: November 2020 — 30 days, 1 Nov was a
  Sunday (no leading blanks); January 2021 — 31 days, 1 Jan was a Friday
  (five leading blanks: Sun–Thu).
- **Copy is fixed and minimal:** "Calendar #07" (title — keep the `#07`
  suffix source-exact), "Today" (renders "TODAY" via uppercase), the big
  day numeral, "DECEMBER - 2020" (month label — `"<MONTH> - <YEAR>"`,
  uppercase, note the space-dash-space separator), "Sun Mon Tue Wed Thu Fri
  Sat" (day header). No lorem, no other body text.

## Design tokens

### Colors

Palette (extracted from the live preview stylesheet `css/style.css` — the
current ground truth; the 2020-era screenshot and the live render agree on
all values):

| Token           | Hex                                  | Usage                                                         |
| --------------- | ------------------------------------ | ------------------------------------------------------------- |
| page background | `#f8f9fd`                            | very light grey-blue page bg around the widget                |
| brand magenta   | `#e13a9d`                            | today-date circle (also the stylesheet's `.bg-primary` token) |
| selected navy   | `#2a3246`                            | hover + selected-date circle (white text inside)              |
| card background | `#ffffff`                            | right panel (grid) background                                 |
| ink             | `#000000`                            | title, weekday header row, date numbers                       |
| photo overlay   | `rgba(0,0,0,0.5)`                    | 50% black overlay over the left-panel photograph              |
| chevron grey    | `#cccccc`                            | month-nav chevron icons (top corners of the right panel)      |
| disabled hover  | `#c9c9c9`                            | blank-cell hover text (cells are empty — mostly theoretical)  |
| reset text      | `rgba(255,255,255,0.7)`              | "Today" pill label (solid white on hover)                     |
| reset border    | `rgba(255,255,255,0.4)`              | "Today" pill outline (solid white on hover)                   |
| on-accent text  | `#ffffff`                            | month label, big day number, today/selected numbers           |
| card shadow     | `0 19px 27px -20px rgba(0,0,0,0.16)` | soft drop shadow under the card                               |

No gradients (except the photo itself), no extra photography — the design
is flat white-plus-photo-plus-magenta-plus-navy, with one subtle card
shadow.

### Fonts

- **Lato** (weights 300/400/700) — the live stylesheet's
  `font-family: "Lato", Arial, sans-serif` (served via Cloudflare cf-fonts
  in the original). Load via Google Fonts `<link>` in `index.html`.
- Title "Calendar #07": 28px, weight 400, near-black, centered.
- Month label (`head-month`): 16px, weight 300, uppercase, white, letter-
  spacing default (rendered ABOVE the big day number).
- Big day number (`head-day`): 9em (~144px), white, line-height 1
  (weight 300 reads closest to the reference visual).
- "Today" pill: 11px, uppercase, weight 400.
- Weekday header: 16px, weight 700, near-black.
- Date numbers: 16px, weight 400, near-black.

### Radii / shapes

- **Day circles** = full circle (`border-radius: 50%`), fixed 44px,
  vertically centered in each cell; today = magenta `#e13a9d`, hover /
  selected = navy `#2a3246`, white number inside; cell press shrinks to
  scale(0.7).
- Card: `border-radius: 5px` (with `overflow: hidden` so the photo
  panel's square corners clip to the card).
- "Today" pill: `border-radius: 4px`.
- Chevron hit targets: `border-radius: 50%` 1em (~18px) circles.

### Layout

- Page: `#f8f9fd` background; the widget is centered horizontally with
  `padding: 7em 0` (~`py-28`); no `min-width` hack (original's
  `body { min-width: 992px !important; }` is a desktop-only crutch — do
  NOT copy).
- Card: `max-width: 700px`, `mx-auto`, `overflow: hidden`,
  `border-radius: 5px`, shadow above; two panels side by side from `md`
  up (`d-md-flex` in the original — below `md` the panels STACK
  vertically, photo panel on top at full width with `padding: 20px 0`).
- Left panel: width 35% on desktop, photo background (`cover`, no-repeat,
  center) + 50% black overlay; content column centered: (top-right → upper
  center → lower center) the "Today" pill, the month label, the big day
  number.
- Right panel: width 65%, white, padding `40px 20px 20px`; chevron row
  (padding 10px 0, grey icons at left/right 20px) above the table; 7 equal
  columns; each row 48px (`3em`); dates centered; circles 44px centered
  per cell.
- Reference is a desktop widget; the recreation SHALL be responsive:
  panels stack below `md`, 7 grid columns preserved at all widths (cells
  shrink), no horizontal overflow.

## Requirements

### Requirement: Page structure

The system SHALL render the Twilight page as a single centered two-panel
calendar widget on the `#f8f9fd` background, with a minimal footer
appended (repo convention).

#### Scenario: Default render

- **GIVEN** the Twilight page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be `#f8f9fd`
- **AND** a white/photo two-panel calendar card SHALL be centered
  horizontally with generous vertical padding (`py-28` equivalent)
- **AND** the page SHALL contain, in order: the title **"Calendar #07"**,
  the left photo date panel, the right white grid panel, and the footer
- **AND** there SHALL be no navbar, no hero, and no other sections
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Title

The system SHALL render the widget title **"Calendar #07"** centered above
the calendar card.

#### Scenario: Title render

- **GIVEN** the Twilight page is rendered
- **WHEN** the user views the top of the page
- **THEN** the title SHALL read **"Calendar #07"** (source-exact, including
  the `#07` suffix — do NOT "fix" it to another number)
- **AND** the title SHALL be centered, near-black, sans-serif, 28px

### Requirement: Left photo panel

The system SHALL render a photo-backed panel (the "vertical" header of the
widget) showing the displayed date's month and day over a dusk-mountain
photograph with a dark overlay, plus a reset pill. It SHALL NOT render
chevrons (the original's header chevrons are commented out in the HTML).

#### Scenario: Initial panel render

- **GIVEN** the Twilight page is rendered with the reference view
  (December 2020)
- **WHEN** the user views the left panel
- **THEN** the panel SHALL be ~35% of the card width on desktop and SHALL
  show a photograph (picsum placeholder per repo convention, e.g.
  `https://picsum.photos/seed/twilight-1/800/1067`) rendered `cover`
  with no repeat and centered
- **AND** a 50% black overlay (`rgba(0,0,0,0.5)`) SHALL darken the photo
  so white text is readable
- **AND** a **"TODAY"** pill SHALL render in the top-right corner:
  uppercase 11px text in `rgba(255,255,255,0.7)` on a 1px
  `rgba(255,255,255,0.4)` border, radius 4px (the label text is "Today",
  rendered uppercase via CSS)
- **AND** the label **"DECEMBER - 2020"** SHALL render in the UPPER part
  of the panel, white, uppercase, 16px, weight 300 (note the `" - "`
  separator — and that the month is ABOVE the day in this template)
- **AND** a huge white numeral **"19"** (~144px, line-height 1) SHALL
  render centered BELOW the month label
- **AND** no chevron controls SHALL render in the left panel

#### Scenario: Today pill hover

- **GIVEN** the Twilight page is rendered
- **WHEN** the user hovers the "TODAY" pill
- **THEN** the label and border SHALL transition to solid white

### Requirement: Calendar grid

The system SHALL render the viewed month as a fixed 42-cell (6×7) grid
with a weekday header, blank leading/trailing cells, and date-circle
states for today and selection.

#### Scenario: December 2020 initial grid

- **GIVEN** the Twilight page is rendered with the reference view
  (December 2020)
- **WHEN** the user views the right panel
- **THEN** grey chevron-left and chevron-right icons (`#cccccc`, 18px, in
  circular hit targets) SHALL render at the TOP corners of the panel,
  above the grid
- **AND** the header row SHALL list `Sun Mon Tue Wed Thu Fri Sat` in bold
  near-black, 7 equal columns
- **AND** the grid SHALL have 6 rows of 7 cells (each row 48px)
- **AND** the first row SHALL have two blank cells (Sun, Mon — 1 December
  2020 was a Tuesday) followed by 1–5
- **AND** days 1–31 SHALL render centered, near-black, on white
- **AND** the cells after 31 (Fri, Sat of the last row) SHALL render blank
- **AND** the date **19** SHALL render as white text inside a solid
  `#e13a9d` magenta 44px circle (the reference "today" — the screenshot's
  capture date; recreated as a FIXED reference today so the initial render
  matches the screenshot 1:1)
- **AND** blank cells SHALL NOT be clickable

#### Scenario: Click to select

- **GIVEN** the Twilight page is rendered with the reference view
  (December 2020)
- **WHEN** the user clicks the date 5
- **THEN** a solid `#2a3246` navy 44px circle SHALL appear behind 5 with
  white text
- **AND** the big numeral in the left panel SHALL update to **"5"**
- **AND** the magenta today circle on 19 SHALL remain unchanged (today is
  independent of the selection)

#### Scenario: Hover state

- **GIVEN** the Twilight page is rendered with the reference view
  (December 2020)
- **WHEN** the user hovers an unselected date
- **THEN** a solid `#2a3246` navy 44px circle SHALL appear behind the
  hovered date with white text

### Requirement: Month navigation

The system SHALL navigate months via the grey chevrons at the top of the
right panel, updating the grid, the month label, and the big day numeral
per the reference behavior.

#### Scenario: Next month

- **GIVEN** the Twilight page is rendered showing December 2020
- **WHEN** the user clicks the right (next) chevron
- **THEN** the grid SHALL re-render January 2021's dates (31 days; 1
  January 2021 was a Friday, so five leading blank cells — Sun through
  Thu)
- **AND** the month label SHALL read **"JANUARY - 2021"**
- **AND** the big numeral SHALL read **"1"** (the reference resets it to 1
  on navigation when no selection exists in the viewed month)
- **AND** no date SHALL carry the magenta today circle (the viewed month
  is not the reference today's month)

#### Scenario: Previous month

- **GIVEN** the Twilight page is rendered showing December 2020
- **WHEN** the user clicks the left (previous) chevron
- **THEN** the grid SHALL re-render November 2020's dates (30 days; 1
  November 2020 was a Sunday, so no leading blank cells)
- **AND** the month label SHALL read **"NOVEMBER - 2020"**
- **AND** the big numeral SHALL read **"1"**

#### Scenario: Year rollover

- **GIVEN** the Twilight page is rendered showing December 2020
- **WHEN** the user clicks next once and previous twice
- **THEN** the label SHALL read **"NOVEMBER - 2020"** (year rollover
  handled correctly across the December→January boundary)

#### Scenario: Selection survives month round-trip

- **GIVEN** the Twilight page is rendered showing December 2020 with a
  selection on 5
- **WHEN** the user navigates to January 2021 and back to December 2020
- **THEN** the navy selection circle SHALL re-render on 5
- **AND** the big numeral SHALL read **"5"** (the reference's drawDays
  re-applies the selected day's numeral when the viewed month matches the
  selection's month)

- **AND** both chevrons SHALL be keyboard-focusable buttons with
  `aria-label` "Previous month" / "Next month" and a visible
  `focus-visible` ring

### Requirement: Reset

The system SHALL provide a reset control that returns the widget to the
reference today.

#### Scenario: Reset to today

- **GIVEN** the Twilight page is rendered showing January 2021 with a
  selection on 5
- **WHEN** the user clicks "TODAY"
- **THEN** the widget SHALL return to the reference view (December 2020)
- **AND** the big numeral SHALL read **"19"** and the label **"DECEMBER -
  2020"**
- **AND** the magenta today circle SHALL render on 19
- **AND** the navy selection circle SHALL be cleared

- **AND** the reset control SHALL be a button with `aria-label`
  "Reset to today" and a `focus-visible` ring

### Requirement: Responsive behavior

The system SHALL keep the calendar usable at all viewport widths (the
reference is a desktop widget; the recreation must not overflow on
phones).

#### Scenario: Mobile layout

- **GIVEN** the Twilight page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the two panels SHALL stack vertically (photo panel on top at
  full width with `padding: 20px 0`, grid panel below at full width)
- **AND** the grid SHALL keep 7 columns with shrinking cells and no
  horizontal overflow
- **AND** the card SHALL remain centered with reduced page padding

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Twilight page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so
  it does not disturb the minimalist widget reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-twilight`
- [ ] `scripts/verify-app.sh twilight` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Single widget page (1:1 with reference): "Calendar #07" title →
      two-panel card → minimal Component Dock footer; `#f8f9fd` page bg,
      NO navbar/hero/other sections
- [ ] Left panel: photo (picsum placeholder `seed/twilight-1/800/1067`,
      `cover` no-repeat centered) + 50% black overlay; "TODAY" pill
      top-right (11px uppercase, translucent-white border, hover → solid
      white); "DECEMBER - 2020" label ABOVE a huge white "19" (9em ~144px);
      NO chevrons in the panel (original's are commented out)
- [ ] Right panel: grey `#cccccc` chevrons at the top corners (18px,
      circular hit targets, `aria-label` "Previous month"/"Next month");
      Sun–Sat bold header; 42-cell 6×7 grid (48px rows), leading blank
      cells per `new Date(y, m, 1).getDay()`, days 1–31 centered
      near-black, trailing blanks, blank cells not clickable
- [ ] Date-circle states: today = solid `#e13a9d` magenta 44px circle
      white text (reference today **19** in the initial December 2020 view
      — screenshot 1:1); hover + selected = `#2a3246` navy circle white
      text; press shrinks to 0.7
- [ ] Brand tokens in `@theme`, used via Tailwind classes: brand `#e13a9d`,
      selected `#2a3246`, page `#f8f9fd`, ink `#000000`, chevron
      `#cccccc`, overlay `rgba(0,0,0,0.5)`; card radius 5px, reset radius
      4px, circles `rounded-full` 44px; card shadow
      `0 19px 27px -20px rgba(0,0,0,0.16)`
- [ ] Font: Lato 300/400/700 via Google Fonts `<link>` in `index.html`
- [ ] Interactions functional (per the reference main.js): chevrons switch
      months (grid + label + big numeral → "1", year rollover correct,
      selection re-renders in its month); clicking a date moves the navy
      circle and updates the big numeral; TODAY returns to reference today
      (Dec 2020, 19 magenta circle, selection cleared)
- [ ] Selection is session-local React state (no cookie/localStorage —
      the original's `selected_day` cookie is a preview-domain quirk,
      documented deviation)
- [ ] A11y: chevron buttons `aria-label` "Previous month"/"Next month";
      TODAY button `aria-label` "Reset to today"; date cells are buttons
      with accessible labels ("19 December 2020") and `aria-current="date"`
      on the today cell; `focus-visible` rings everywhere
- [ ] Responsive: panels stack below `md` (photo on top), no horizontal
      overflow at ≤480px, 7 columns preserved, card centered
- [ ] `cn()` imported from `@free-react-templates/ui` (packages/ui — knip
      gate); packages/ui `Button`/`ButtonLink` reused where they fit
- [ ] No Bootstrap, no jquery, no copied CSS/HTML/photo — re-implement
      with Tailwind tokens + picsum placeholder; no ColorLib strings
      anywhere in `apps/twilight`
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Calendar 07" row, line
      691 — Bootstrap Calendars (20) category; single row, no dups)
