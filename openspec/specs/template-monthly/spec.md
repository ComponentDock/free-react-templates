# Template: Monthly (Calendar / Utility Widget — Vertical Two-Panel Monthly Calendar)

## Purpose

Monthly is a single-page interactive calendar widget template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Calendar V02" free template (source:
https://colorlib.com/wp/template/calendar-02/), built under a DIFFERENT name
(**Monthly** — evoking the template's single function: a month-at-a-glance
calendar; per the monorepo naming mandate — never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a **minimalist, single-widget page**: no navbar, no hero, no
images, no other sections — one centered two-panel calendar card on a very
light grey-blue background. ColorLib's own description: "A catchy free
vertical calendar template based on the powerful Bootstrap Framework for
complete flexibility." The page renders ONE interactive widget (from the live
reference DOM):

1. **Title** — **"Calendar #02"**, 28px near-black sans-serif, centered
   above the widget.
2. **Left green panel** (`wrap-header`, solid `#39cb75`, ~45% width on
   desktop) — the "vertical" signature of this template:
   - **Reset pill** — the text **"reset"** in the top-right corner,
     uppercase 11px, translucent white on a 1px translucent-white border,
     rounded 4px (renders as "RESET" via CSS text-transform).
   - **Big day number** (`head-day`) — the displayed date's day as a huge
     white numeral, `font-size: 8em` (~128px), line-height 1, centered.
   - **Month label** (`head-month`) — **"DECEMBER - 2020"**, uppercase
     18px white, centered below the big number (note the `" - "`
     separator and the uppercase rendering).
   - **Month chevrons** — circular (50%) white chevron-left / chevron-right
     icons, 18px, absolutely positioned at the vertical center of the
     panel's left and right edges.
3. **Right white panel** (`calendar-wrap`) — the month grid on white,
   padding 40px 20px 20px:
   - **Weekday header row** — `Sun Mon Tue Wed Thu Fri Sat`, bold
     near-black, 7 equal columns.
   - **Date grid** — a fixed 42-cell table (6 rows × 7 columns, each row
     48px tall); leading blank cells for the month's start offset, the
     month's days 1–31 centered per cell, trailing blank cells. Empty
     (disabled) cells render blank and are not clickable.
   - **Today circle** — the reference "today" (19 December 2020 in the
     screenshot) renders as a solid `#39cb75` 44px circle with white text.
   - **Selected circle** — clicking a date fills its 44px circle with dark
     navy `#2a3246` and white text; hover shows the same navy circle.
4. **No footer** in the reference — the recreation appends the minimal
   "Component Dock" footer per repo convention.

The defining signature of this template is the **two-panel vertical
calendar**: a solid green date-display panel beside the grid, ONE accent
color for the panel + today circle, a SECOND (navy) for selection/hover,
flat design, subtle card shadow, no gradients, no photography. The green
(`#39cb75`) is used in exactly three places (the left panel background, the
today circle, and — via the same token — nothing else). Recreate the widget
1:1 with matching tokens, typography, and interaction (month navigation +
date selection + reset — all functional in the original Bootstrap build; the
recreation SHALL make them functional).

> NAMING NOTE: the ColorLib source name "Calendar 02" / "Calendar V02" is
> FORBIDDEN as the app name. **Monthly** is the new, original name — single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or the shipped-app names embedded in TEMPLATES.md
> (verified 2026-08-14: no `apps/monthly` on origin/main, no
> `template-monthly` spec, no `monthly` in `docs/templates/`, no
> `[monthly](...)` shipped link in TEMPLATES.md, and no ColorLib source slug
> `monthly`). Source slug + preview URL are recorded below.

> PREVIEW NOTE (REACHABLE — different path than the default): the default
> preview URL `https://preview.colorlib.com/theme/calendar-02/` returns
> **HTTP 404** (verified 2026-08-14 via curl; slug variants `calendar02`,
> `calendar-2`, `calendar2` also 404). The REAL live preview lives at
> **`https://preview.colorlib.com/theme/bootstrap/calendar-02/`** — found
> via the "Live Preview" link on the colorlib.com template landing page
> (https://colorlib.com/wp/template/calendar-02/). Full reference material
> was captured from the live preview 2026-08-14: the rendered DOM
> (`/tmp/cal02.html`), the template stylesheet `css/style.css`
> (`/tmp/cal02.css`), and the interaction script `js/main.js`
> (`/tmp/cal02.js`). Design tokens below are extracted from the live
> stylesheet — the current ground truth. The TEMPLATES.md screenshot
> (`calendar-02.jpg`, 1200×972) was additionally analyzed for the visual
> design and to pin the screenshot-date render (see Design reference).

## Design reference (replication findings)

- **Original:** ColorLib "Calendar V02" (listing title "Calendar 02"). Listed
  in TEMPLATES.md under **Bootstrap Calendars (20)** (line 686). Free
  Bootstrap calendar widget template (author Colorlib; post dated December
  2020; license CC BY 3.0). The `calendar-02` slug appears exactly once in
  TEMPLATES.md (no duplicate rows to mark). The 20-item Bootstrap Calendars
  category is a family: sibling "Calendar 01" was prepped as **Planner**
  (see `openspec/specs/template-planner/`) — this prep is the second of the
  family; each sibling gets its own prep.
- **Live preview DOM — REACHABLE at `.../theme/bootstrap/calendar-02/`**
  (captured 2026-08-14, ~5.6KB HTML): `section.ftco-section` (padding 7em 0)
  → `.container` → centered `h2.heading-section` **"Calendar #02"** →
  `div.elegant-calencar` (max-width 700px, mx-auto, border-radius 5px,
  box-shadow `0px 19px 27px -20px rgba(0,0,0,0.16)`, `d-md-flex`) containing
  exactly two children: `div.wrap-header` (width 45%, `#39cb75`) with
  `p#reset`, `div#header` (`.pre-button` chevron · `.head-info`
  (`.head-day` + `.head-month`) · `.next-button` chevron), and
  `div.calendar-wrap` (white, padding 40px 20px 20px) with `table#calendar`
  (thead `Sun..Sat`, tbody 6 rows × 7 empty `<td>`s filled by JS). Scripts:
  jquery + popper + bootstrap + `js/main.js`.
- **Template stylesheet (css/style.css, ~222KB Bootstrap bundle; custom
  rules at the tail) — tokens below extracted from the custom rules**
  (the ONLY authoritative token source; the screenshot renders an OLDER,
  lighter green — see the note in Design tokens):
  - `body { font-family: "Lato", Arial, sans-serif; font-size: 16px;
line-height: 1.8; background: #f8f9fd; color: gray; min-width: 992px; }`
    (the `min-width: 992px` desktop-only hack SHALL NOT be reproduced — the
    recreation must be responsive instead).
  - `.ftco-section { padding: 7em 0; }` · `.heading-section { font-size:
28px; color: #000; }`
  - `.elegant-calencar { max-width: 700px; text-align: center; margin: 0
auto; overflow: hidden; border-radius: 5px; box-shadow: 0px 19px 27px
-20px rgba(0,0,0,0.16); }`
  - `.wrap-header { position: relative; width: 45%; background: #39cb75; }`
  - `#header .pre-button, #header .next-button { width/height/line-height:
1em; border-radius: 50%; position: absolute; top: 50%; transform:
translateY(-50%); font-size: 18px; }` + `.pre-button i, .next-button i
{ color: #fff; }` · `.pre-button { left: 5px; }` · `.next-button { right:
5px; }`
  - `.head-day { font-size: 8em; line-height: 1; color: #fff; }` ·
    `.head-month { font-size: 18px; line-height: 1; color: #fff;
text-transform: uppercase; }`
  - `.calendar-wrap { background: #fff; padding: 40px 20px 20px; }` ·
    `#calendar { width: 100%; }` · `#calendar tr { height: 3em; }`
  - `thead tr { color: #000; font-weight: 700; }` · `tbody tr { color:
#000; }` · `tbody td { width: 14%; border-radius: 50%; cursor: pointer;
position: relative; z-index: 0; }` · `tbody td:after { width: 44px;
height: 44px; margin: 0 auto; border-radius: 50%; z-index: -1; }`
  - `tbody td:hover, .selected { color: #fff; }` · `tbody td:hover:after,
.selected:after { background: #2a3246; }` · `tbody td:active { transform:
scale(0.7); }` · `#today { color: #fff; }` · `#today:after { background:
#39cb75; }` · `#disabled { cursor: default; }` · `#disabled:hover:after
{ background: transparent; }`
  - `#reset { position: absolute; right: 0.5em; top: 0.5em; color:
rgba(255,255,255,0.7); cursor: pointer; padding: 0 0.5em; border: 1px
solid rgba(255,255,255,0.4); border-radius: 4px; text-transform:
uppercase; font-size: 11px; transition: all 0.3s ease; }` · `#reset:hover
{ color: #fff; border-color: #fff; }` · `#reset:active { transform:
scale(0.8); }`
- **Interaction script (js/main.js, captured 2026-08-14) — behavior to
  reproduce:** the widget initializes on the REAL current date
  (`new Date()`): `head-day` = today's day number, `head-month` =
  `"<MONTH> - <YEAR>"` (uppercase month name + " - " + year). The grid
  draws 42 cells: `startDay = new Date(y, m, 1).getDay()` leading blanks,
  then days 1..daysInMonth; empty cells get `id="disabled"`. The cell whose
  index equals today's (`day + startDay - 1`) gets `id="today"` (the green
  circle) — ONLY when the viewed month/year is the current one. Clicking a
  date: clears any `.selected`, marks the cell `.selected` (navy circle),
  sets `head-day` to the clicked day. Prev/next chevrons: month ±1 with
  year rollover (December→January, wrap at 11/0), then `head-day` is set to
  **1** (the original resets the big number to 1 on navigation) and the grid
  redraws. "reset": returns to today's month/year/day, clears the selection,
  redraws.
- **Visual design (screenshot, verified 2026-08-14 via browser visual
  inspection + pixel sampling of the 1200×972 image):** a Safari window
  showing a single centered widget on the light grey-blue `#f8f9fd` page.
  Top to bottom: centered dark title **"Calendar #02"**; the two-panel card
  — LEFT: solid green panel with the big white **"19"**, **"DECEMBER -
  2020"** in white uppercase beneath it, a bordered "RESET" pill in the
  top-right corner, and white chevrons at the panel's vertical center on the
  left/right edges; RIGHT: white panel with `Sun Mon Tue Wed Thu Fri Sat`
  header and the December 2020 grid (starts Tuesday), **19 circled in the
  panel green with white text** (the screenshot's capture date / "today"
  indicator), all other dates plain dark. No other highlights (a first-pass
  vision read claimed a second circle on 12 — pixel sampling disproves it:
  the grid contains exactly one circle, on 19). Page ends after the widget —
  no navbar, no hero, no images, no footer (add the Component Dock footer
  per repo convention).
- **Section order (1:1 from the reference render):** single widget —
  title → two-panel card (left: reset + big day + month label + chevrons;
  right: weekday header + date grid) → (Component Dock footer appended per
  repo convention).
- **December 2020 layout facts (for the initial render):** 1 December 2020
  was a **Tuesday**, so the first grid row has two leading blank cells (Sun,
  Mon) followed by 1–5; **19 December 2020 was a Saturday** (last column —
  the screenshot's circled date); 31 December 2020 was a Thursday; the month
  occupies 5 rows of the 42-cell table (trailing Fri/Sat blank). Adjacent
  months for nav scenarios: November 2020 — 30 days, 1 Nov was a Sunday (no
  leading blanks); January 2021 — 31 days, 1 Jan was a Friday (five leading
  blanks: Sun–Thu).
- **Copy is fixed and minimal:** "Calendar #02" (title — keep the `#02`
  suffix source-exact), "reset" (renders "RESET" via uppercase), the big day
  numeral, "DECEMBER - 2020" (month label — `"<MONTH> - <YEAR>"`, uppercase,
  note the space-dash-space separator), "Sun Mon Tue Wed Thu Fri Sat" (day
  header). No lorem, no other body text.

## Design tokens

### Colors

Palette (extracted from the live preview stylesheet `css/style.css` — the
current ground truth; the 2020-era screenshot renders the panel green
lighter at ~`#66c87d` (pixel-sampled `#66c87d`/`(102,200,125)`), so the
screenshot and live CSS disagree — **use the live CSS value `#39cb75`** and
note the discrepancy in the PR):

| Token           | Hex                                  | Usage                                                         |
| --------------- | ------------------------------------ | ------------------------------------------------------------- |
| page background | `#f8f9fd`                            | very light grey-blue page bg around the widget                |
| brand green     | `#39cb75`                            | left panel background + today-date circle                     |
| selected navy   | `#2a3246`                            | hover + selected-date circle (white text inside)              |
| card background | `#ffffff`                            | right panel (grid) background                                 |
| ink             | `#000000`                            | title, weekday header row, date numbers                       |
| reset text      | `rgba(255,255,255,0.7)`              | "reset" pill label (solid white on hover)                     |
| reset border    | `rgba(255,255,255,0.4)`              | "reset" pill outline (solid white on hover)                   |
| on-accent text  | `#ffffff`                            | big day number, month label, chevrons, today/selected numbers |
| card shadow     | `0 19px 27px -20px rgba(0,0,0,0.16)` | soft drop shadow under the card                               |

No gradients, no photography — the design is flat, white-plus-green-plus-a-
navy-selection-state, with one subtle card shadow.

### Fonts

- **Lato** (weights 300/400/700) — the live stylesheet's
  `font-family: "Lato", Arial, sans-serif` (served via Cloudflare cf-fonts
  in the original). Load via Google Fonts `<link>` in `index.html`.
- Title "Calendar #02": 28px, weight 400 (Bootstrap default), near-black,
  centered.
- Big day number (`head-day`): 8em (~128px), weight 300 (Lato light reads
  closest to the reference), white, line-height 1.
- Month label (`head-month`): 18px, uppercase, white, letter-spacing
  default.
- "reset" pill: 11px, uppercase, weight 400.
- Weekday header: 16px, weight 700, near-black.
- Date numbers: 16px, weight 400, near-black.

### Radii / shapes

- **Day circles** = full circle (`border-radius: 50%`), fixed 44px, centered
  in each cell; today = green `#39cb75`, hover/selected = navy `#2a3246`,
  white number inside; cell press shrinks to scale(0.7).
- Card: `border-radius: 5px` (with `overflow: hidden` so the green panel's
  square corners clip to the card).
- "reset" pill: `border-radius: 4px`.
- Chevron hit targets: `border-radius: 50%` 1em (~18px) circles.

### Layout

- Page: `#f8f9fd` background; the widget is centered horizontally with
  `padding: 7em 0` (~`py-28`); no `min-width` hack (original's
  `min-width: 992px !important` is a desktop-only crutch — do NOT copy).
- Card: `max-width: 700px`, `mx-auto`, `overflow: hidden`,
  `border-radius: 5px`, shadow above; two panels side by side from `md`
  up (`d-md-flex` in the original — below `md` the panels STACK vertically,
  green panel on top at full width).
- Left panel: width 45% on desktop, solid green; contains (top-right →
  center → bottom-center) the reset pill, the big day number, the month
  label; chevrons absolutely positioned left/right at vertical center.
- Right panel: flex-1 white, padding `40px 20px 20px`; 7 equal columns;
  each row 48px (`3em`); dates centered; circles 44px centered per cell.
- Reference is a desktop widget; the recreation SHALL be responsive: panels
  stack below `md`, 7 grid columns preserved at all widths (cells shrink),
  no horizontal overflow.

## Requirements

### Requirement: Page structure

The system SHALL render the Monthly page as a single centered two-panel
calendar widget on the `#f8f9fd` background, with a minimal footer appended
(repo convention).

#### Scenario: Default render

- **GIVEN** the Monthly page is rendered
- **WHEN** the user views the page
- **THEN** the page background SHALL be `#f8f9fd`
- **AND** a white/green two-panel calendar card SHALL be centered
  horizontally with generous vertical padding (`py-28` equivalent)
- **AND** the page SHALL contain, in order: the title **"Calendar #02"**,
  the left green date panel, the right white grid panel, and the footer
- **AND** there SHALL be no navbar, no hero, and no images
- **AND** a footer SHALL render at the bottom (see "Footer" requirement)

### Requirement: Title

The system SHALL render the widget title **"Calendar #02"** centered above
the calendar card.

#### Scenario: Title render

- **GIVEN** the Monthly page is rendered
- **WHEN** the user views the top of the page
- **THEN** the title SHALL read **"Calendar #02"** (source-exact, including
  the `#02` suffix — do NOT "fix" it to another number)
- **AND** the title SHALL be centered, near-black, sans-serif, 28px

### Requirement: Left date panel

The system SHALL render a solid green panel (the "vertical" header of the
widget) showing the displayed date's day and month, a reset pill, and month
chevrons.

#### Scenario: Initial panel render

- **GIVEN** the Monthly page is rendered with the reference view
  (December 2020)
- **WHEN** the user views the left panel
- **THEN** the panel SHALL have a solid `#39cb75` background and SHALL be
  ~45% of the card width on desktop
- **AND** a huge white numeral **"19"** (~128px) SHALL be centered in the
  panel
- **AND** the label **"DECEMBER - 2020"** SHALL render below it in white,
  uppercase, 18px (note the `" - "` separator)
- **AND** a **"RESET"** pill SHALL render in the top-right corner: uppercase
  11px text in `rgba(255,255,255,0.7)` on a 1px `rgba(255,255,255,0.4)`
  border, radius 4px
- **AND** white chevron-left and chevron-right icons SHALL render at the
  vertical center of the panel's left and right edges, in circular hit
  targets

#### Scenario: Reset pill hover

- **GIVEN** the Monthly page is rendered
- **WHEN** the user hovers the "RESET" pill
- **THEN** the label and border SHALL transition to solid white

### Requirement: Calendar grid

The system SHALL render the viewed month as a fixed 42-cell (6×7) grid with
a weekday header, blank leading/trailing cells, and date-circle states for
today and selection.

#### Scenario: December 2020 initial grid

- **GIVEN** the Monthly page is rendered with the reference view
  (December 2020)
- **WHEN** the user views the right panel
- **THEN** the header row SHALL list `Sun Mon Tue Wed Thu Fri Sat` in bold
  near-black, 7 equal columns
- **AND** the grid SHALL have 6 rows of 7 cells (each row 48px)
- **AND** the first row SHALL have two blank cells (Sun, Mon — 1 December
  2020 was a Tuesday) followed by 1–5
- **AND** days 1–31 SHALL render centered, near-black, on white
- **AND** the cells after 31 (Fri, Sat of the last row) SHALL render blank
- **AND** the date **19** SHALL render as white text inside a solid
  `#39cb75` 44px circle (the reference "today" — the screenshot's capture
  date; recreated as a FIXED reference today so the initial render matches
  the screenshot 1:1)
- **AND** blank cells SHALL NOT be clickable

#### Scenario: Click to select

- **GIVEN** the Monthly page is rendered with the reference view
  (December 2020)
- **WHEN** the user clicks the date 5
- **THEN** a solid `#2a3246` navy 44px circle SHALL appear behind 5 with
  white text
- **AND** the big numeral in the left panel SHALL update to **"5"**
- **AND** the green today circle on 19 SHALL remain unchanged (today is
  independent of the selection)

### Requirement: Month navigation

The system SHALL navigate months via the chevrons, updating the grid, the
month label, and the big day numeral per the reference behavior.

#### Scenario: Next month

- **GIVEN** the Monthly page is rendered showing December 2020
- **WHEN** the user clicks the right (next) chevron
- **THEN** the grid SHALL re-render January 2021's dates (31 days; 1 January
  2021 was a Friday, so five leading blank cells — Sun through Thu)
- **AND** the month label SHALL read **"JANUARY - 2021"**
- **AND** the big numeral SHALL read **"1"** (the reference resets it to 1
  on navigation)
- **AND** no date SHALL carry the green today circle (the viewed month is
  not the reference today's month)

#### Scenario: Previous month

- **GIVEN** the Monthly page is rendered showing December 2020
- **WHEN** the user clicks the left (previous) chevron
- **THEN** the grid SHALL re-render November 2020's dates (30 days; 1
  November 2020 was a Sunday, so no leading blank cells)
- **AND** the month label SHALL read **"NOVEMBER - 2020"**
- **AND** the big numeral SHALL read **"1"**

#### Scenario: Year rollover

- **GIVEN** the Monthly page is rendered showing December 2020
- **WHEN** the user clicks next once and previous twice
- **THEN** the label SHALL read **"NOVEMBER - 2020"** (year rollover handled
  correctly across the December→January boundary)

- **AND** both chevrons SHALL be keyboard-focusable buttons with
  `aria-label` "Previous month" / "Next month" and a visible `focus-visible`
  ring

### Requirement: Reset

The system SHALL provide a reset control that returns the widget to the
reference today.

#### Scenario: Reset to today

- **GIVEN** the Monthly page is rendered showing January 2021 with a
  selection on 5
- **WHEN** the user clicks "RESET"
- **THEN** the widget SHALL return to the reference view (December 2020)
- **AND** the big numeral SHALL read **"19"** and the label **"DECEMBER -
  2020"**
- **AND** the green today circle SHALL render on 19
- **AND** the navy selection circle SHALL be cleared

- **AND** the reset control SHALL be a button with `aria-label`
  "Reset to today" and a `focus-visible` ring

### Requirement: Responsive behavior

The system SHALL keep the calendar usable at all viewport widths (the
reference is a desktop widget; the recreation must not overflow on phones).

#### Scenario: Mobile layout

- **GIVEN** the Monthly page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the two panels SHALL stack vertically (green panel on top at
  full width, grid panel below)
- **AND** the grid SHALL keep 7 columns with shrinking cells and no
  horizontal overflow
- **AND** the card SHALL remain centered with reduced page padding

### Requirement: Footer

The system SHALL render a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") — required by repo
convention on every template (the original has no footer).

#### Scenario: Component Dock attribution

- **GIVEN** the Monthly page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")
- **AND** the footer SHALL be visually unobtrusive (small muted text) so it
  does not disturb the minimalist widget reference design

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-monthly`
- [ ] `scripts/verify-app.sh monthly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Single widget page (1:1 with reference): "Calendar #02" title →
      two-panel card → minimal Component Dock footer; `#f8f9fd` page bg, NO
      navbar/hero/images
- [ ] Left panel: solid `#39cb75`, ~45% width (md+); big white day numeral
      (8em), "DECEMBER - 2020" label (`" - "` separator, uppercase 18px),
      "RESET" pill top-right (11px uppercase, translucent-white border,
      hover → solid white), white circular chevrons at vertical-center
      left/right edges
- [ ] Grid: Sun–Sat bold header, 42-cell 6×7 table (48px rows), leading
      blank cells per `new Date(y, m, 1).getDay()`, days 1–31 centered
      near-black, trailing blanks, blank cells not clickable
- [ ] Date-circle states: today = solid `#39cb75` 44px circle white text
      (reference today **19** in the initial December 2020 view — screenshot
      1:1); hover + selected = `#2a3246` navy circle white text; press
      shrinks to 0.7
- [ ] Brand tokens in `@theme`, used via Tailwind classes: brand `#39cb75`,
      selected `#2a3246`, page `#f8f9fd`, ink `#000000`; card radius 5px,
      reset radius 4px, circles `rounded-full` 44px; card shadow
      `0 19px 27px -20px rgba(0,0,0,0.16)`
- [ ] Font: Lato 300/400/700 via Google Fonts `<link>` in `index.html`
- [ ] Interactions functional (per the reference main.js): chevrons switch
      months (grid + label + big numeral → "1", year rollover correct);
      clicking a date moves the navy circle and updates the big numeral;
      RESET returns to reference today (Dec 2020, 19 green circle, selection
      cleared)
- [ ] A11y: chevron buttons `aria-label` "Previous month"/"Next month";
      RESET button `aria-label` "Reset to today"; date cells are buttons
      with accessible labels ("19 December 2020") and `aria-current="date"`
      on the today cell; `focus-visible` rings everywhere
- [ ] Responsive: panels stack below `md` (green on top), no horizontal
      overflow at ≤480px, 7 columns preserved, card centered
- [ ] `cn()` imported from `@free-react-templates/ui` (packages/ui — knip
      gate); packages/ui `Button`/`ButtonLink` reused where they fit
- [ ] No Bootstrap, no jquery, no copied CSS/HTML — re-implement with
      Tailwind tokens; no ColorLib strings anywhere in `apps/monthly`
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (mark the "Calendar 02" row, line
      686 — Bootstrap Calendars (20) category; single row, no dups)
