# Template: Almanac (Calendar / Utility Widget — Dual-Calendar Date-Range Picker)

## Purpose

Almanac is a single-page interactive calendar widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Calendar 03" free template (source:
https://colorlib.com/wp/template/calendar-03/), built under a DIFFERENT name
(**Almanac** — an almanac is a date-keeping reference of days, weeks and
months, a semantic echo of the widget's function; per the monorepo naming
mandate — never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a **minimalist, single-widget page**: no navbar, no hero, no
images, no other sections — one centered two-calendar card row on a very
light grey-blue background. The page renders ONE interactive widget (from
the live reference DOM):

1. **Title** — **"Calendar #03"**, 28px near-black sans-serif, centered
   above the widget.
2. **Two side-by-side calendar cards** (`.calendar.calendar-first` /
   `.calendar.calendar-second` inside a `.calendar-section` row) — the
   signature of this template: a **dual-calendar date-range picker**. The
   left calendar shows the current month, the right the FOLLOWING month
   (e.g. DECEMBER 2020 | JANUARY 2021 in the reference render). Each card:
   - **Month header** (`.calendar_header`) — 55px-tall centered strip with
     the month name + year in uppercase black 18px bold (e.g.
     **"DECEMBER 2020"**), flanked by **chevron buttons**
     (`button.switch-month.switch-left` / `switch-right`, 40×40px,
     light-gray `#cccccc` Font Awesome chevron icons, hover → brand
     purple `#bd83ce`). The chevrons on EITHER card shift BOTH calendars
     together by one month.
   - **Weekday header row** (`.calendar_weekdays`) — 3-letter day
     abbreviations **Sun Mon Tue Wed Thu Fri Sat**, one per 7th of the
     width, black bold.
   - **Date grid** (`.calendar_content`) — a fixed 42-cell (6 rows × 7
     columns) grid; leading blank cells for the month's start offset,
     trailing blank cells to fill the 42; each cell 68px tall with the day
     number centered.
   - **Date states** — dates before the reference "today" render as
     **past-date** (light gray `#d5d5d5`, not clickable); the reference
     "today" (19 December 2020) renders as a solid brand-purple `#bd83ce`
     square with white bold 18px text; a **selected** date (or selected
     range) renders with `rgba(153,153,161,0.2)` fill and a 1px white
     border; hover shows a faint `#ededed` 1px border.
3. **No footer** in the reference — the recreation appends the minimal
   "Component Dock" footer per repo convention.

The defining signature of this template is the **dual-calendar date-range
picker**: two identical flat white cards side by side, ONE accent color
(lavender-purple `#bd83ce`) used for the today highlight, link color, and
chevron hover — and nothing else; flat design, subtle card shadow, no
gradients, no photography. The interaction (from `js/main.js`) is a
two-click date-range selection spanning BOTH calendars, with past dates
disabled and month navigation moving both calendars in lockstep. Recreate
the widget 1:1 with matching tokens, typography, and interactions.

> NAMING NOTE: the ColorLib source name "Calendar 03" is FORBIDDEN as the
> app name. **Almanac** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or the
> shipped-app names embedded in TEMPLATES.md (verified 2026-08-14: no
> `apps/almanac` on origin/main, no `template-almanac` spec, no `almanac`
> in `docs/templates/`, no `almanac` string in TEMPLATES.md, and no
> ColorLib source slug `almanac`). Source slug + preview URL are recorded
> below.

> PREVIEW NOTE (REACHABLE — different path than the default): the default
> preview URL `https://preview.colorlib.com/theme/calendar-03/` returns
> **HTTP 404** (verified 2026-08-14 via curl; slug variants `calendar03`,
> `calendar-3`, `calendar3` also 404). The REAL live preview lives at
> **`https://preview.colorlib.com/theme/bootstrap/calendar-03/`** — found
> via the same `/theme/bootstrap/` path pattern the sibling "Calendar 02"
> prep (Monthly) established (the Calendar family previews live under
> `/theme/bootstrap/`). Full reference material was captured from the live
> preview 2026-08-14: the rendered DOM (`/tmp/cal03/preview.html`, ~4.5KB),
> the template stylesheet `css/style.css` (`/tmp/cal03/style.css`, ~222KB
> Bootstrap bundle; the template's own rules at the tail), and the
> interaction script `js/main.js` (`/tmp/cal03/main.js`, ~12.4KB). Design
> tokens below are extracted from the live stylesheet — the current ground
> truth. The TEMPLATES.md screenshot (`calendar-03.jpg`, 1200×972) was
> additionally analyzed (browser visual inspection) for the visual design
> and to pin the screenshot-date render (see Design reference).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar 03". Listed in TEMPLATES.md under
  **Bootstrap Calendars (20)** (line 687). Free Bootstrap calendar widget
  template (author Colorlib; the screenshot renders December 2020 /
  January 2021 — the 2020-era capture). The `calendar-03` slug appears
  exactly once in TEMPLATES.md (no duplicate rows to mark). The 20-item
  Bootstrap Calendars category is a family: "Calendar 01" was prepped as
  **Planner** (`openspec/specs/template-planner/`) and "Calendar 02" as
  **Monthly** (`openspec/specs/template-monthly/`) — this prep is the third
  of the family; each sibling gets its own prep.
- **Live preview DOM — REACHABLE at `.../theme/bootstrap/calendar-03/`**
  (captured 2026-08-14, ~4.5KB HTML): `section.ftco-section` (padding 7em 0) → `.container` → centered `h2.heading-section` **"Calendar #03"** →
  `div.calendar-section` (margin-bottom 20px) → `.row.no-gutters` with two
  `.col-md-6` columns, each containing one `.calendar` card:
  `div.calendar_header` (`button.switch-month.switch-left` · `h2` (month
  name + year, JS-filled) · `button.switch-month.switch-right`) +
  `div.calendar_weekdays` (JS-filled) + `div.calendar_content`
  (JS-filled). Scripts: jquery + popper + bootstrap + `js/main.js`.
- **Template stylesheet (css/style.css, ~222KB Bootstrap bundle; custom
  rules at the tail, lines ~8135–8300) — tokens below extracted from the
  custom rules** (the ONLY authoritative token source; the screenshot
  renders the weekday labels lighter gray than the live CSS — see the note
  in Design tokens):
  - `body { font-family: "Lato", Arial, sans-serif; font-size: 16px;
line-height: 1.8; font-weight: normal; background: #f8f9fd; color:
gray; }` (NOTE: the sibling Monthly prep found a `min-width: 992px`
    desktop-only hack in its copy's body rule — this copy has NO
    `min-width` crutch; the recreation must be responsive regardless).
  - `a { transition: .3s all ease; color: #bd83ce; }`
  - `h1..h6 { line-height: 1.5; font-weight: 400; font-family: "Lato",
Arial, sans-serif; color: #000; }` · `.bg-primary { background:
#bd83ce !important; }`
  - `.ftco-section { padding: 7em 0; }` · `.heading-section { font-size:
28px; color: #000; }` · `.calendar-section { margin-bottom: 20px; }`
  - `.calendar, .calendar_weekdays, .calendar_content { max-width: 585px;
}` · `.calendar { margin: auto; min-width: 320px; font-weight: 400;
background: #fff; padding: 10px; box-shadow: 0px 4px 26px -22px
rgba(0,0,0,0.14); }`
  - `.calendar_weekdays { color: #aaa; font-weight: 300; }` ·
    `.calendar_weekdays div { color: #000; font-weight: 700; }`
  - `.calendar_weekdays div, .calendar_content div { width: 14.28571%;
height: 68px; line-height: 69px; overflow: hidden; text-align:
center; background-color: transparent; }`
  - `.calendar_content div { float: left; margin-left: -1px; margin-top:
-1px; border: 1px solid transparent; border-radius: 5px; }` ·
    `.calendar_content div:hover { border: 1px solid #ededed; cursor:
pointer; }` · `.calendar_content div.blank:hover { cursor: default;
border: none; }`
  - `.calendar_content div.past-date { cursor: initial; color: #d5d5d5;
}` · `.calendar_content div.today { font-weight: 700; font-size: 18px;
color: #fff; background-color: #bd83ce; }` ·
    `.calendar_content div.selected { background-color:
rgba(153,153,161,0.2); border: 1px solid white; }`
  - `.calendar_header { width: 100%; text-align: center; position:
relative; height: 55px; display: table; vertical-align: middle; }` ·
    `.calendar_header h2 { margin-top: 15px; padding: 0; font-weight: 700;
font-size: 18px; color: #000 !important; text-transform: uppercase; }`
  - `button.switch-month { background-color: transparent; padding: 0;
outline: none; border: none; height: 40px; width: 40px; position:
absolute; top: 50%; transform: translateY(-50%); color: #cccccc;
transition: color .2s; }` · `.switch-left { left: 0; }` ·
    `.switch-right { right: 0; }` · `button.switch-month:hover { color:
#bd83ce; }` · `button.switch-month:active { background-color:
transparent; }`
- **Interaction script (js/main.js, ~12.4KB, vanilla jQuery) — behavior
  to reproduce:**
  - `b()` initializes `today = new Date`, `year/month` = real current
    month; `c(month, year, 0)` renders calendar 1 = current month,
    `c(nextMonth, nextYear, 1)` renders calendar 2 = FOLLOWING month
    (lockstep pair). For a deterministic recreation (like the family
    siblings), pin the reference view to the screenshot's capture:
    **December 2020 (left) + January 2021 (right)**, reference "today" =
    **19 December 2020**.
  - `makeWeek(week)` fills the weekday row with the first 3 letters of
    each day: `Sun Mon Tue Wed Thu Fri Sat` (daysArray = Sunday..Saturday,
    `.substring(0,3)`).
  - Grid: `makeMonthArray` builds day cells 1..days-in-month; leading
    `blank` divs are appended until the first day's weekday matches
    (`new Date(y, m, 1).getDay()`), then day cells; the loop runs
    `for(cell=0; cell<42-r; cell++)` — always 42 cells total, trailing
    cells blank.
  - `past-date` class: any rendered date strictly before `today` (dates
    before the reference today within the viewed months; clicking a
    past-date returns early — not selectable).
  - `today` class: `checkToday` — the date equal to the reference today;
    renders only in the month that CONTAINS it (December 2020).
  - Header text: `i[passed_month] + " " + passed_year` = full month name +
    year (e.g. "December 2020"), rendered uppercase via CSS
    `text-transform: uppercase`.
  - **Range selection (the core interaction):** clicking a date (first
    click) selects it; clicking a second date selects the whole RANGE
    between them (both calendars' grids are searched; dates between are
    added to `selected` and get the `.selected` class). Clicking the same
    date twice deselects it. A third click, when the new date is INSIDE
    the existing range (after the first, before the second), replaces the
    second endpoint; otherwise the selection resets and starts over. Past
    dates are excluded.
  - **Month navigation:** the switch buttons on EITHER calendar call
    `generateCalendars(direction)` which shifts BOTH months together:
    left chevron → previous month pair (e.g. Dec+Jan → Nov+Dec), right
    chevron → next month pair (Dec+Jan → Jan+Feb). Year rollover handled
    via `getAdjacentMonth` (`% 12` on month, ±1 on year at the December/
    January boundary).
- **Screenshot analysis (calendar-03.jpg, 1200×972, browser visual
  inspection):** a browser window showing the single widget on a very
  light cool-gray background (`#f8f9fd`). Title **"Calendar #03"**
  centered in dark near-black. Below, the two month grids side by side:
  **"DECEMBER 2020"** (left) and **"JANUARY 2021"** (right), uppercase
  month headers with faint chevron arrows flanking. Weekday labels Sun–
  Sat (3-letter, medium gray in the 2020-era screenshot — the live CSS
  says black bold; use the live CSS value). In the December grid, dates
  1–18 render lighter/fainter gray (the past-date state), **19 renders as
  a solid purple/lavender square with white text** (the capture-date
  "today"), and the January grid shows all dates dark/selectable. The two
  cards visually read as one unified white area with a soft diffuse
  shadow (each `.calendar` card carries its own `0px 4px 26px -22px
rgba(0,0,0,0.14)` shadow; at 1200px they sit flush and merge). No
  navbar/hero/images/footer (add the Component Dock footer per repo
  convention).

## Design tokens

### Colors

Palette (extracted from the live preview stylesheet `css/style.css` — the
current ground truth; the 2020-era screenshot renders the weekday labels
medium-gray and past dates a lighter gray — **use the live CSS values**
and note discrepancies in the PR):

| Token           | Hex / value                          | Usage                                                          |
| --------------- | ------------------------------------ | -------------------------------------------------------------- |
| page background | `#f8f9fd`                            | very light grey-blue page bg around the widget                 |
| brand purple    | `#bd83ce`                            | today-date square + link color + chevron hover (`.bg-primary`) |
| card background | `#ffffff`                            | both calendar cards' background                                |
| ink             | `#000000`                            | title, month header (h2), weekday labels, active date numbers  |
| past-date       | `#d5d5d5`                            | date cells before the reference today (not clickable)          |
| selected fill   | `rgba(153,153,161,0.2)`              | selected date / range cell background (1px white border)       |
| weekday dim     | `#aaa` (container) / `#000` (labels) | weekday row (labels override to black bold per the live CSS)   |
| chevron idle    | `#cccccc`                            | switch-month chevron icons (hover → brand purple)              |
| hover border    | `#ededed`                            | 1px date-cell border on hover                                  |
| card shadow     | `0 4px 26px -22px rgba(0,0,0,0.14)`  | soft drop shadow under each calendar card                      |

No gradients, no photography — the design is flat, white-plus-one-lavender-
purple-accent, with subtle card shadows.

### Fonts

- **Lato** (weights 300/400/700) — the live stylesheet's
  `font-family: "Lato", Arial, sans-serif` (served via Cloudflare cf-fonts
  in the original). Load via Google Fonts `<link>` in `index.html`.
- Title "Calendar #03": 28px, weight 400, near-black, centered.
- Month header (`.calendar_header h2`): 18px, weight 700, near-black,
  **uppercase** (`text-transform: uppercase`).
- Weekday labels: 16px (inherited), weight 700, near-black.
- Date numbers: 16px, weight 400, near-black; today = 18px weight 700
  white.
- Body copy (none present): 16px / 1.8, gray.

### Radii / shapes

- **Date cells**: `border-radius: 5px` (each day cell is a rounded
  square; today's filled square inherits the same radius).
- Chevron buttons: 40×40px square hit targets, no radius, no border,
  transparent background.
- Cards: NO radius (the `.calendar` card is a plain white rectangle —
  note this differs from Monthly's 5px card; the shadow alone separates
  it from the page).

### Layout

- Page: `#f8f9fd` background; the widget is centered horizontally with
  `padding: 7em 0` (~`py-28`).
- Title: centered, `margin-bottom` 5 (`mb-5` Bootstrap unit ≈ 3rem).
- Widget row: two `.col-md-6` columns (each 50% from `md` up; they
  STACK full-width below `md`); `.row.no-gutters` (no column gutters).
- Each card: `max-width: 585px`, `min-width: 320px`, `margin: auto`,
  white, `padding: 10px`, the soft shadow; on `md+` the two cards sit
  flush side by side (each up to 585px wide).
- Header: 55px tall, centered; h2 centered with chevrons absolutely
  positioned at vertical center, left: 0 / right: 0.
- Grid: 7 equal columns (`14.28571%` each); each cell 68px tall
  (`height: 68px`, `line-height: 69px`), numbers centered.
- Reference is a desktop widget; the recreation SHALL be responsive:
  cards stack below `md`, 7 grid columns preserved at all widths (cells
  shrink), no horizontal overflow.

## Requirements

### Requirement: Page structure

The system SHALL render the Almanac page as a single centered dual-calendar
widget on the `#f8f9fd` background, with a minimal footer appended (repo
convention).

#### Scenario: Default render

- **GIVEN** the Almanac page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be `#f8f9fd`
- **AND** a row of two white calendar cards SHALL be centered horizontally
  with generous vertical padding (`py-28` equivalent)
- **AND** the page SHALL contain, in order: the title **"Calendar #03"**,
  the two calendar cards, and the footer
- **AND** there SHALL be no navbar, no hero, and no images
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Title

The system SHALL render the widget title **"Calendar #03"** centered above
the calendar cards.

#### Scenario: Title render

- **GIVEN** the Almanac page is rendered
- **WHEN** the user views the top of the page
- **THEN** the title SHALL read **"Calendar #03"** (source-exact, including
  the `#03` suffix — do NOT "fix" it to another number)
- **AND** the title SHALL be centered, near-black, sans-serif, 28px

### Requirement: Calendar cards

The system SHALL render two identical calendar cards side by side (stacking
below `md`), the left showing the reference current month and the right
showing the FOLLOWING month.

#### Scenario: Initial render — two cards, December + January

- **GIVEN** the Almanac page is rendered with the reference view
  (December 2020 | January 2021)
- **WHEN** the user views the widget row
- **THEN** exactly two calendar cards SHALL render side by side on desktop
  (stacked full-width below `md`)
- **AND** each card SHALL have a white background, `padding: 10px`, no
  border radius, and the shadow `0 4px 26px -22px rgba(0,0,0,0.14)`
- **AND** the left card header SHALL read **"DECEMBER 2020"** and the right
  **"JANUARY 2021"** — uppercase, 18px, bold, near-black
- **AND** each header SHALL have a chevron-left button at its left edge and
  a chevron-right button at its right edge, vertically centered

#### Scenario: Card layout details

- **GIVEN** the Almanac page is rendered with the reference view
- **WHEN** the user inspects a calendar card
- **THEN** the weekday row SHALL list `Sun Mon Tue Wed Thu Fri Sat`
  (3-letter abbreviations), 7 equal columns, bold near-black
- **AND** the date grid SHALL have 42 cells (6 rows × 7 columns), each
  cell 68px tall with the day number centered
- **AND** the December grid SHALL have two leading blank cells (Sun, Mon —
  1 December 2020 was a Tuesday) followed by 1–5
- **AND** the January grid SHALL have five leading blank cells (Sun–Thu —
  1 January 2021 was a Friday)
- **AND** trailing cells beyond the last day of each month SHALL render
  blank (December 2020 = 31 days; January 2021 = 31 days)
- **AND** blank cells SHALL NOT be clickable

### Requirement: Date states

The system SHALL render past dates, the reference today, and selected dates
with the reference's distinct states.

#### Scenario: Past dates

- **GIVEN** the Almanac page is rendered with the reference view
  (December 2020 | January 2021, reference today = 19 December 2020)
- **WHEN** the user views the December grid
- **THEN** dates 1–18 SHALL render in light gray `#d5d5d5`
- **AND** clicking a past date SHALL have no effect (not selectable)
- **AND** all January 2021 dates SHALL render in the normal near-black ink
  (every date is after the reference today)

#### Scenario: Today highlight

- **GIVEN** the Almanac page is rendered with the reference view
- **WHEN** the user views the December grid
- **THEN** the date **19** SHALL render as white bold 18px text on a solid
  `#bd83ce` purple rounded square (radius 5px)
- **AND** no January date SHALL carry the today highlight (the reference
  today's month is December 2020 only)

#### Scenario: Select a single date

- **GIVEN** the Almanac page is rendered with the reference view
- **WHEN** the user clicks the date 5 in the January grid
- **THEN** the cell SHALL render with the `rgba(153,153,161,0.2)` fill and
  a 1px white border
- **AND** clicking the same date again SHALL clear the selection

#### Scenario: Select a range across both calendars

- **GIVEN** the Almanac page is rendered with the reference view
- **WHEN** the user clicks 20 in the December grid, then 5 in the January
  grid
- **THEN** dates 20–31 in December and 1–5 in January SHALL all render
  with the `rgba(153,153,161,0.2)` fill and 1px white border (the range
  spans both calendars)
- **AND** clicking a date inside the existing range SHALL extend/adjust
  the range to that date (third-click rule per the reference)
- **AND** clicking a date outside the existing range SHALL clear the
  selection and start a new one

#### Scenario: Hover state

- **GIVEN** the Almanac page is rendered
- **WHEN** the user hovers a selectable date cell
- **THEN** a faint 1px `#ededed` border SHALL appear around the cell and
  the cursor SHALL be a pointer
- **AND** blank and past-date cells SHALL NOT show the hover border or
  pointer cursor

### Requirement: Month navigation

The system SHALL navigate months via the chevrons on EITHER card, shifting
BOTH calendars together (lockstep pair), per the reference behavior.

#### Scenario: Next month pair

- **GIVEN** the Almanac page is rendered showing December 2020 | January
  2021
- **WHEN** the user clicks any right (next) chevron
- **THEN** the left card SHALL re-render **JANUARY 2021** and the right
  card **FEBRUARY 2021** (31 days; 1 February 2021 was a Monday, so one
  leading blank cell)
- **AND** the January grid SHALL now show its today-state only if it
  contains the reference today (it does not — no purple square)

#### Scenario: Previous month pair

- **GIVEN** the Almanac page is rendered showing December 2020 | January
  2021
- **WHEN** the user clicks any left (previous) chevron
- **THEN** the left card SHALL re-render **NOVEMBER 2020** (30 days; 1
  November 2020 was a Sunday, so no leading blank cells) and the right card
  **DECEMBER 2020** (with the purple today square on 19)

#### Scenario: Year rollover

- **GIVEN** the Almanac page is rendered showing December 2020 | January
  2021
- **WHEN** the user clicks next once and previous twice
- **THEN** the pair SHALL read **NOVEMBER 2020 | DECEMBER 2020** (year
  rollover handled correctly across the December→January boundary)

- **AND** all four chevrons SHALL be keyboard-focusable buttons with
  `aria-label` "Previous month" / "Next month" and a visible `focus-visible`
  ring

### Requirement: Responsive behavior

The system SHALL keep the calendar usable at all viewport widths (the
reference is a desktop widget; the recreation must not overflow on phones).

#### Scenario: Mobile layout

- **GIVEN** the Almanac page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the two cards SHALL stack vertically (December card on top,
  January card below, each full-width)
- **AND** each grid SHALL keep 7 columns with shrinking cells and no
  horizontal overflow
- **AND** the cards SHALL remain centered with reduced page padding

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Almanac page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimalist widget reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-almanac`
- [ ] `scripts/verify-app.sh almanac` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Single widget page (1:1 with reference): "Calendar #03" title → two
      calendar cards → minimal Component Dock footer; `#f8f9fd` page bg,
      NO navbar/hero/images
- [ ] Two cards: white bg, `padding: 10px`, NO border radius, shadow
      `0 4px 26px -22px rgba(0,0,0,0.14)`, `max-width: 585px`, centered;
      side-by-side from `md` (stacked below)
- [ ] Headers: "DECEMBER 2020" (left) + "JANUARY 2021" (right) — uppercase
      18px bold near-black; chevron buttons (40×40px, `#cccccc` icons,
      hover `#bd83ce`) at each card's left/right edge, vertically centered;
      chevrons on either card shift BOTH months (lockstep)
- [ ] Weekday row: `Sun Mon Tue Wed Thu Fri Sat` 3-letter, bold near-black,
      7 equal columns
- [ ] Grids: 42 cells (6×7), 68px-tall cells, numbers centered; December =
      2 leading blanks (Tue start), 31 days; January = 5 leading blanks
      (Fri start), 31 days; trailing blanks; blank cells not clickable
- [ ] Date states: past dates (1–18 Dec) `#d5d5d5` not clickable; today
      (19 Dec) solid `#bd83ce` rounded square, white bold 18px; hover =
      1px `#ededed` border + pointer; selected = `rgba(153,153,161,0.2)`
      fill + 1px white border
- [ ] Range selection per main.js: first click selects a date; second click
      selects the range between (spanning both calendars); same-date
      re-click deselects; third click inside the range adjusts the end,
      outside resets
- [ ] Brand tokens in `@theme`, used via Tailwind classes: brand `#bd83ce`,
      page `#f8f9fd`, ink `#000000`, past `#d5d5d5`, selected
      `rgba(153,153,161,0.2)`; cell radius 5px; card shadow
      `0 4px 26px -22px rgba(0,0,0,0.14)`
- [ ] Font: Lato 300/400/700 via Google Fonts `<link>` in `index.html`
- [ ] Interactions functional: chevrons switch month pairs (Dec+Jan →
      Nov+Dec / Jan+Feb, year rollover correct); date click selects;
      two-click range selection across both calendars; past dates inert
- [ ] A11y: chevron buttons `aria-label` "Previous month"/"Next month";
      date cells are buttons with accessible labels ("19 December 2020")
      and `aria-current="date"` on the today cell; `focus-visible` rings
      everywhere
- [ ] Responsive: cards stack below `md`, no horizontal overflow at
      ≤480px, 7 columns preserved, cards centered
- [ ] `cn()` imported from `@free-react-templates/ui` (packages/ui — knip
      gate); packages/ui `Button`/`ButtonLink` reused where they fit
- [ ] No Bootstrap, no jquery, no copied CSS/HTML — re-implement with
      Tailwind tokens; no ColorLib strings anywhere in `apps/almanac`
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Calendar 03" row, line
      687 — Bootstrap Calendars (20) category; single row, no dups)
