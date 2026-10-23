# Template: ChronoGrid (Calendar Widget)

## Purpose

ChronoGrid is a single-page calendar widget template in the free-react-templates
monorepo: an original React 19 + Vite + Tailwind CSS 4 + TypeScript recreation of
the ColorLib "Calendar 02" free template (source
https://colorlib.com/wp/template/calendar-02/, `TEMPLATES.md` row 688), built
under a DIFFERENT name (**ChronoGrid**) with placeholder imagery, Google-hosted
`Lato`, and `lucide-react` icons — no source assets are copied.

The source is a **snippet page, not a landing page**. The DOM holds exactly one
band: `section.ftco-section` → `.cl-container` → a centred `h2.heading-section`
and a single 700 px calendar card (`.elegant-calencar`). The card is split from
768 px up (`cl-d-md-flex`): a 45%-wide green panel (`.wrap-header`) carrying the
reset control, two round prev/next chevrons, an 8 em day number and the
"Month - Year" label, beside a white panel (`.calendar-wrap`) with a 7-column
month table. Under 768 px the two panels stack. There is **no navbar, no hero,
no event sidebar and no "new event" form** — every section an earlier capture of
this item listed was invented.

## Design tokens

<!-- prep-correction:2026-10-23p — the first capture of this item declared the
slug-only preview 404 and worked from the screenshot, then filled the palette
with the SIBLING calendar design's values (#3d88f7 / #1371e6 / #b9cae7, Poppins —
that is the entry shipped as `planner`). Every value below is re-read from the
live demo the preview host's own catalog resolves for this slug. -->

Measured 2026-10-23, CSS values canonical over the screenshot:

- **Preview URL (catalog-resolved):**
  `https://preview.colorlib.com/theme/bootstrap/calendar-02/` — HTTP **200**,
  4,370 B, sha256 `929d60ec0752ebcaafbb…`, `<title>Calendar 02</title>`.
  The slug-only `https://preview.colorlib.com/theme/calendar-02/` answers
  **HTTP 404** (9 B) — that 404 is *not* a dead design; this slug lives in the
  host's `theme/bootstrap/` family. The earlier capture stopped at the 404 and
  reconstructed the page from the screenshot, which is how the wrong palette and
  four invented sections entered this spec.
- **Design sheet:** `css/style.css?v=7d4a7424` — HTTP 200, 10,994 B,
  sha256 `d5d1e3bf00aa2cbba711…`, **107 rules**, 23 hex declarations
  (`#fff` ×12, `#000` ×4, `#dee2e6` ×3, `#212529` ×3, `#39cb75` ×2, `#f8f9fd`,
  `#c9c9c9`, `#adb5bd`, `#2a3246` ×1 each).
- **Behaviour script:** `js/snippet.js?v=15e86eb9` — HTTP 200, 5,604 B,
  sha256 `60889b5b40e24a5590cf…` (the calendar engine: 42 cells, today, select,
  prev/next, reset, one-day `selected_day` cookie).

| Token | Value | Evidence in `style.css` |
| --- | --- | --- |
| Page background | `#f8f9fd` | `body { … background: #f8f9fd }` (the sheet's own late override beats the reboot `#fff`) |
| Body text | `gray` (`#808080`) | `body { … color: gray }`; every heading rule overrides to `#000` |
| Heading | `#000`, **28px** | `.heading-section { font-size: 28px; color: #000 }` (also `h2,.h2 { font-weight: 400; color: #000 }`) |
| Card surface | `#ffffff` | `.calendar-wrap { width: 100%; background: #fff; padding: 40px 20px 20px }` |
| Card frame | `max-width: 700px`, radius **5px**, shadow `0 19px 27px -20px rgba(0, 0, 0, 0.16)` | `.elegant-calencar` |
| **Brand green** | `#39cb75` | `.wrap-header { width: 45%; background: #39cb75 }`; `#today:after { background: #39cb75 }` |
| Selected / hovered day circle | `#2a3246` under **white** text | `tbody td:hover, .cl-selected { color: #fff; border: none }`; `tbody td:hover:after, .cl-selected:after { background: #2a3246 }` |
| Day circle geometry | **44 × 44 px**, `border-radius: 50%`, centred by `margin: 0 auto`, `z-index: -1` | `tbody td:after` |
| Empty (leading/trailing) cells | `#fff` fill, no circle, hover text `#c9c9c9` | `#disabled`, `#disabled:hover`, `#disabled:hover:after { background: transparent }` |
| Day number | **8em**, `#fff`, `line-height: 1` | `.head-day` |
| Month label | **18px**, `#fff`, `text-transform: uppercase`, `line-height: 1` | `.head-month` (declares `2em` then `18px`; the later `18px` wins) |
| Reset control | 11px uppercase, text `rgba(255,255,255,0.7)`, `1px solid rgba(255,255,255,0.4)`, radius **4px**, hover text+border `#fff` | `#reset`, `#reset:hover` — absolutely positioned `top: 0.5em; right: 0.5em` |
| Prev/next chevrons | `1em` box, `border-radius: 50%`, 18px icon, `#fff` glyph, vertically centred | `#header .pre-button, #header .next-button` + `… i { color: #fff }` |
| Weekday header row | `#000`, weight **700**, normal case | `thead tr { color: #000; font-weight: 700 }` |
| Day cells | `width: 14%`, `border-radius: 50%`, `cursor: pointer`, `transition: all 0.2s ease-in` | `tbody td` |
| Table chrome | borders `#dee2e6`; reboot ink `#212529`; pre border `#adb5bd` | `.table`/`tbody` rules in the reboot block |
| Typeface | **Lato** — self-hosted `woff2` 400 + 700 (`../fonts/lato-*-latin*.woff2`); body `16px / 1.8 / 400`; headings Lato `400` | four `@font-face` blocks + `body { font-family: "Lato", Arial, sans-serif }` |
| Radii census | `50%` ×3, `5px` (card), `4px` (reset) | `border-radius` census over the 107 rules |
| Band order (DOM) | `section.ftco-section` → `.cl-container` → `h2.heading-section` (centred, `cl-col-md-6 cl-text-center cl-mb-5`) → `.elegant-calencar` → `.wrap-header` (`#reset`, `.pre-button`, `.head-day`, `.head-month`, `.next-button`) **+** `.calendar-wrap` → `table#calendar` (`thead` Sun…Sat, `tbody` 6 × 7 cells) | the fetched HTML |

- Put the green, the selected-navy, the page tint and the card surface in
  `@theme` (`--color-brand`, `--color-selected`, `--color-page`,
  `--color-surface`) and drive them through utilities / `cn()`.
- Do **not** replace `#39cb75` with a darker green for text: the sheet has a
  single green and paints it as a *fill* (header panel, today circle).
- The card keeps its 5px radius and soft shadow; day circles stay 50%.

## Requirements

### Requirement: Single-band page shell

The app SHALL render one full-viewport band holding a centred heading and the
calendar card, with no navbar, hero, sidebar or secondary form.

#### Scenario: Shell renders on load

- **WHEN** the page loads
- **THEN** a single `<section>` is visible containing a centred heading and one calendar card
- **AND** no navigation bar, hero banner or additional form is rendered

#### Scenario: Card geometry matches the source

- **WHEN** the card is measured at 1280 px wide
- **THEN** it is centred, at most 700 px wide, with a 5px radius and a soft downward shadow
- **AND** the green header panel occupies 45% of the card width and the white calendar panel the remainder

### Requirement: Month table grid

The card SHALL render a `table#calendar` with seven weekday headers (Sun…Sat)
and six rows of seven day cells (42 cells total).

#### Scenario: Grid headers and cell count

- **WHEN** the calendar renders
- **THEN** the header row reads Sun, Mon, Tue, Wed, Thu, Fri, Sat in that order
- **AND** the body holds exactly 42 cells

#### Scenario: Empty cells are inert

- **WHEN** the first day of the month falls on a Wednesday
- **THEN** the first three body cells are empty and non-interactive
- **AND** hovering an empty cell paints no circle and greys the text to `#c9c9c9`

### Requirement: Header day and month label

The green panel SHALL show the active day as a large number and the active month
and year as an uppercase label in the form `Month - Year`.

#### Scenario: Header shows today on load

- **WHEN** the page loads with no stored selection
- **THEN** the large day number equals today's day of month
- **AND** the label reads the current month and year separated by ` - ` (for example `OCTOBER - 2026`), uppercased by CSS

#### Scenario: Header follows the selection

- **WHEN** the user selects day 15
- **THEN** the large day number changes to 15 and the month label is unchanged

### Requirement: Today highlight

Today's cell SHALL carry a green `#39cb75` circle with white text, distinct from
the selected-day treatment.

#### Scenario: Today is marked

- **WHEN** the calendar renders in the current month
- **THEN** today's cell shows a `#39cb75` circular background and white numerals
- **AND** the circle is 44 × 44 px, centred in the cell

### Requirement: Day selection

Selecting a day SHALL mark it with the navy `#2a3246` circle, white text, and
replace any previously marked selection.

#### Scenario: Select a day

- **WHEN** the user clicks day 12
- **THEN** day 12 gains a `#2a3246` circle with white numerals
- **AND** the header day number becomes 12

#### Scenario: Selection is exclusive

- **WHEN** day 12 is selected and the user clicks day 20
- **THEN** day 20 is marked and day 12 returns to its unselected treatment
- **AND** at most one cell carries the selected mark

#### Scenario: Keyboard and hover parity

- **WHEN** a day cell is focused or hovered
- **THEN** it shows the same `#2a3246` circle as a selected cell
- **AND** the cell is reachable by keyboard with an accessible label naming its date

### Requirement: Month navigation

Two round chevron buttons SHALL move the table one month backwards or forwards,
wrapping the year at the boundaries.

#### Scenario: Next month

- **WHEN** the user activates the next-month button in December
- **THEN** the table shows January of the following year
- **AND** the header day number resets to 1

#### Scenario: Previous month

- **WHEN** the user activates the previous-month button in January
- **THEN** the table shows December of the preceding year
- **AND** the grid still holds 42 cells with the correct number of days

### Requirement: Reset control

A `reset` control in the top-right of the green panel SHALL return the calendar
to the current month with today selected-as-today.

#### Scenario: Reset restores the current month

- **WHEN** the user has navigated to another month and activates `reset`
- **THEN** the table returns to the current month
- **AND** the header day number shows today's date again
- **AND** any previous selection is cleared

### Requirement: Selection survives a reload

The last selected day SHALL be restored on the next visit, as the source does
through a one-day `selected_day` cookie.

#### Scenario: Reload restores the selection

- **WHEN** the user selects day 9 and reloads the page in the same month
- **THEN** day 9 is marked again and the header day number reads 9
- **AND** the stored value expires within a day (a `localStorage` key is an acceptable replacement for the cookie)

### Requirement: Component Dock credit

The page SHALL credit Component Dock, because the source design paints no
footer of its own.

#### Scenario: Credit link present

- **WHEN** the user scrolls to the end of the page
- **THEN** a link to `https://www.componentdock.com/` is visible with the text "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/chronogrid/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/chronogrid/` is inspected
- **THEN** none contains the source site's name, domain or a URL pointing at it
- **AND** the page heading names the recreation ("ChronoGrid"), not the source's numbered title

## Prep status

- **Re-verified 2026-10-23p.** The first capture of this item (which shipped
  `apps/chronogrid`) recorded the slug-only preview as 404, worked from the
  screenshot, borrowed the sibling calendar design's palette and invented five
  sections. The shipped app therefore renders a blue/Poppins calendar
  (`--color-accent: #3d88f7`, `--color-month: #1371e6`, Poppins) with a nav-less
  single card, i.e. **the right page shape with the wrong colours and
  typeface**. Correcting the app is implementer work: swap the palette to
  `#39cb75` / `#2a3246` / `#f8f9fd`, load `Lato`, and drop the past/future/
  gridline tokens the source never defines.
- Item state in `TEMPLATES.md` is untouched by this prep (row 688).

## Verification checklist

- [ ] Page renders one band with a centred heading and a single 700 px card — no navbar, hero, sidebar or extra form
- [ ] Calendar table holds seven Sun…Sat headers and exactly 42 body cells, empty cells inert in `#c9c9c9`
- [ ] Green panel is 45% wide, `#39cb75`, carrying the reset control, two round chevrons, the 8 em day number and the uppercase `Month - Year` label
- [ ] Today's cell shows a 44 px `#39cb75` circle with white numerals
- [ ] A selected day shows a 44 px `#2a3246` circle with white numerals, and only one day is selected at a time
- [ ] Next/previous chevrons move one month and wrap the year, resetting the header day to 1
- [ ] `reset` returns to the current month with today's date and clears the selection
- [ ] The selected day survives a reload and the stored value expires within a day
- [ ] Body type is Lato 16px/1.8, page background `#f8f9fd`, card radius 5px with the soft shadow
- [ ] Footer credits Component Dock with a link to `https://www.componentdock.com/`
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
