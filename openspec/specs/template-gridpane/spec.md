# Template: Gridpane (Table)

## Purpose

Gridpane is a minimal data-table showcase page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Css Table
15" template (source: https://colorlib.com/wp/template/css-table-15/ — a
single-page data-table snippet: WHITE page with the whole table wrapped in a
rounded light-GRAY panel (`#efefef`, 20px padding, 4px radius), UPPERCASE
letter-spaced header labels, white rounded row-cards (radius 7px) separated
by 10px transparent gaps inside the panel, CHECKED ROWS DIMMED to
`opacity: .4`, custom checkboxes with select-all, an Occupation sub-blurb,
blue name links; no navbar, no imagery, no framework), built under a
DIFFERENT name (Gridpane — the grid rendered inside a rounded pane; single
lowercase word), per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `css-table-15`
- **Source:** https://colorlib.com/wp/template/css-table-15/
  (page title: "CSS Table V15 - Free Minimal Table Design Template 2026 -
  Colorlib"; links `preview.colorlib.com/theme/bootstrap/css-table-15/` +
  download zip `preview.colorlib.com/downloads/free/css-table-15.zip`)
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-15/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-15/**
  (HTTP 200, 4,058 bytes, `<title>Table #5</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL.
- **Preview CSS:** `css/style.css?v=cfec863e` (10,982 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing else.
  No framework, no build step."). It first reverts Bootstrap-reboot base
  styles (`all: revert` on common elements), then styles everything from
  browser defaults: `html`/`body` reboot block, `@font-face` Roboto
  300/400 (self-hosted woff2), `.cl-container` (Bootstrap-like responsive
  container), `.cl-table` (table base + `.cl-table-responsive` overflow
  wrapper), `.content` (7rem vertical padding), `.custom-table`
  (uppercase borderless header, white row-cards + spacer gaps + hover
  shadow, `min-width: 900px`), `.custom-table-responsive` (the signature
  gray PANEL wrapper), `.control` / `.control__indicator` (custom
  checkbox). Note: the sheet reverts ALL base styles on common elements
  first — in Tailwind this is unnecessary (Tailwind's preflight is already
  the base).
- **Scripts (source):** `js/snippet.js?v=4363416b` (1,006 bytes,
  config-driven, no jQuery/no framework): `CHECK_ALL` — the header
  `input.js-check-all` toggles every `th input[type="checkbox"]` and
  `classList.toggle("cl-active", all.checked)` on their closest `tr`;
  `CHECK_ROWS` — each `th[scope="row"] input[type="checkbox"]` toggles
  class `cl-active` on its own row. REIMPLEMENT the checkbox state in
  React state. **✓ Unlike sibling css-table-14 (Rowcard), THIS stylesheet
  DOES style the checked class:** `.custom-table tbody tr.cl-active {
  opacity: .4 }` — a checked row renders at 40% opacity (card, text, and
  checkbox all fade). The static DOM already has row 2 (Matthew Wasil)
  checked + `cl-active`.
- **Icons:** icomoon glyph font for the checkbox checkmark
  (`.control__indicator:after { content: '\e5ca' }`, white, centered) —
  **REPLACE with lucide-react `Check`** (or a CSS-drawn check), do not
  ship icon fonts.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400; 500 for the
  h2)** in `index.html` (the preview self-hosts Roboto 300/400 via
  @font-face woff2; weights used: 300 = body + table cells + sub-blurb,
  400 = base reboot fallback, 500 = h2 per the reboot block).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-15.jpg
  (AVIF data despite the .jpg extension; visually analyzed 2026-09-30;
  matches the live preview — white page, gray rounded panel around the
  table, uppercase header labels, row 2 dimmed/faded with its blue
  checkbox checked).
- **TEMPLATES.md:** "## Table (25)" section, line 2874
  (`- [ ] **Css Table 15**`). Slug `css-table-15` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "gridpane" collides with nothing in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content (verified
  2026-09-30 — zero hits across all pools; fits the sibling naming idiom
  gridline / gridspan / rowcard / rowglow).

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Google Fonts 300/400 (500 for heading); body 16px/300/1.5 |
| Page background | `#fff` | `body` background-color — **WHITE page** (unlike Rowcard/Rowglow's gray page; the gray lives ONLY in the panel wrapper) |
| Heading / ink | `#212529` | body color; h2 20px (overrides Bootstrap's 2rem), font-weight 500 (reboot h2 weight), line-height 1.2, margin-bottom 0.5rem + `.cl-mb-5` → 3rem |
| Panel (signature) | `#efefef`, padding 20px, border-radius 4px | `.custom-table-responsive` — the rounded light-GRAY panel that wraps the ENTIRE table (thead + tbody); sits on the white page inside the container |
| Table header labels | 12px, `text-transform: uppercase`, `letter-spacing: .1rem`, `#212529` | `.custom-table thead tr, .custom-table thead th` → `border-top: none; border-bottom: none !important` — header sits DIRECTLY on the gray panel (thead cells get NO white background — only tbody cells are white) |
| Table body text | `#777`, `font-weight: 300` | `.custom-table tbody th, .custom-table tbody td` |
| Occupation sub-blurb | `#b3b3b3`, `font-weight: 300`, 80% font-size | `.custom-table tbody ... small` — `display: block` ("Far far away, behind the word mountains" under each occupation) |
| Row cards (surface) | `#fff`, `border: none` | `.custom-table tbody tr th, .custom-table tbody tr td` — white cards on the gray panel |
| Card corner radius | 7px | `.custom-table tbody tr:not(.spacer)` → `border-radius: 7px; overflow: hidden`; first/last cell of each row repeat the 7px corners |
| Card gaps | 10px transparent spacer rows | `.custom-table tbody tr.spacer td` → `padding: 0; height: 10px; border-radius: 0; background: transparent` — the gray `#efefef` panel shows through between white cards |
| Card hover lift | `box-shadow: 0 2px 10px -5px rgba(0,0,0,0.1)` | `.custom-table tbody tr:not(.spacer):hover` — subtle shadow; `transition: .3s all ease` on the row |
| Checked rows (signature) | `opacity: .4` | `.custom-table tbody tr.cl-active` — **THE checked-state styling**: the whole row (white card + text + blue checkbox) renders at 40% opacity, fading into the gray panel. Toggle class `cl-active` on the row `<tr>` when its checkbox is checked (select-all sets it on every row) |
| Name links | `#007bff`, hover `#0056b3` | Bootstrap defaults; template override: `transition: .3s all ease`, `text-decoration: none !important` (no underline on link OR hover) |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #ccc`, transparent bg | `.control__indicator` (native `<input type=checkbox>` visually hidden: `position:absolute; z-index:-1; opacity:0`; `.control` wrapper: block, relative, cursor pointer, font-size 18px, margin-bottom 25px) |
| Checkbox hover/focus | `border: 2px solid #007bff` | `.control:hover input ~ .control__indicator, .control input:focus ~ .control__indicator` |
| Checkbox checked | `border: 2px solid #007bff; background: #007bff` + white checkmark (icomoon `\e5ca` → lucide `Check`) | `.control input:checked ~ .control__indicator` |
| Checkbox disabled | `background: #e6e6e6; opacity: 0.6; border: 2px solid #ccc` (checked+disabled: `#007bff` @ 0.2 opacity) | `.control input:disabled` |
| Container | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like responsive container) |
| Table | `width: 100%; min-width: 900px` (`.custom-table`); cell `padding: 0.75rem` horizontal + 20px top/bottom; `vertical-align: top`; `border-collapse: collapse`; color `#212529` | NO vertical borders; thead borders overridden away |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` — horizontal scroll below the 900px min-width (the gray panel scrolls with it) |
| Content area | `padding: 7rem 0` | `.content` — generous whitespace above/below the panel |
| Heading margin | `margin-bottom: 3rem` (`cl-mb-5`, `!important`) | h2 → panel gap |
| Row transition | `.3s all ease` | card shadow reveal + link color + checked-dim fade |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one
paneled table. Section order (1:1):

1. **Page shell** — WHITE background `#fff`, Roboto throughout (body
   weight 300); `.content` wraps everything with `7rem` vertical padding;
   `.cl-container` centers the content (1140px max-width desktop, 15px
   gutters, responsive down to 540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #5</h2>` — 20px, weight 500,
   ink `#212529`, 3rem margin-bottom, rendered on the WHITE page ABOVE
   the panel. (Text may be paraphrased, e.g. "Table #5" kept or "People
   Table" — same kind of short label.)
3. **Gray panel wrapper** — `.cl-table-responsive.custom-table-responsive`
   — the signature: `background-color: #efefef; padding: 20px;
   border-radius: 4px`. It wraps BOTH thead and tbody; the header labels
   sit directly on the gray (no white behind thead). Contains a
   `<table class="cl-table custom-table">` with `min-width: 900px` inside
   the `overflow-x: auto` wrapper.
4. **Data table (white row-cards on the gray panel)** —
   - **thead (borderless, UPPERCASE):** 6 columns — `[select-all
     checkbox]` · `Order` · `Name` · `Occupation` · `Contact` ·
     `Education`; header labels at 12px / uppercase / letter-spacing
     .1rem / ink `#212529` (default bold th weight), `scope="col"`.
   - **tbody:** 4 data rows + 4 spacer rows (one after each data row);
     each data row = `th[scope=row]` with a row checkbox + 5 data `td`
     cells; each cell: `background: #fff; border: none`, cell text
     `#777` at `font-weight: 300`, 20px vertical cell padding,
     0.75rem horizontal; `tr:not(.spacer)` carries `border-radius: 7px;
     overflow: hidden` so the row renders as a white rounded CARD;
     `tr.spacer td` is a 10px transparent gap (gray panel shows
     through). NO cell borders at all (the white card + gap IS the row
     separation).
   - **Occupation cell:** occupation title + a `display: block` small
     blurb underneath: "Far far away, behind the word mountains" —
     `#b3b3b3`, weight 300, 80% size. Same blurb text in every row.
   - **Demo data (same KIND of content; paraphrase OK):** 4-digit order
     numbers (1392 / 4616 / 9841 / 9548), person names (James Yates /
     Matthew Wasil / Sampson Murphy / Gaspar Semenov — rendered as blue
     `#007bff` links, no underline), occupations (Web Designer / Graphic
     Designer / Mobile Dev / Illustrator), +CC phone numbers (+63 983
     0962 971 / +02 020 3994 929 / +01 352 1125 0192 / +92 020 3994 929),
     education (NY University / London College / Senior High / College).
   - **Initial state:** row 2 (Matthew Wasil) ships CHECKED in the static
     DOM (`checked=""` + `class="cl-active"` on the `<tr>`) — the
     screenshot shows it dimmed to 40% opacity: faded card, faded text,
     faded-but-blue checkbox. Rows 1/3/4 are unchecked and crisp white.
5. **Custom checkboxes + select-all** — hidden native input +
   `.control__indicator` visual (see tokens): 20×20 rounded-square, 2px
   `#ccc` border → hover/focus `#007bff` → checked `#007bff` fill + white
   check → disabled gray states. The header checkbox (`js-check-all` in
   source) selects/deselects ALL row checkboxes AND sets `cl-active` on
   every row; each row checkbox is independent (toggles its own row's
   `cl-active`). REIMPLEMENT in React state (e.g. `boolean[]` per row);
   header checked ⇔ all rows checked (the source does NOT use
   indeterminate — keep it simple).
6. **Component Dock attribution footer** — the source snippet page has
   NO footer, but the monorepo mandates that every template's footer
   links `https://www.componentdock.com/` (branded "Component Dock").
   Add a MINIMAL attribution line (e.g. "Made with Component Dock" →
   https://www.componentdock.com/) below the panel area. Zero ColorLib
   references anywhere in the app.

## Sibling context (for implementers)

This is the fifth "CSS Table" variant prepped in this monorepo; the
sources are near-identical snippet pages — do NOT copy tokens across:

- **Gridline** (ColorLib `css-table-11`, "Table #1"): white page,
  borderless header, plain `#dee2e6` row separators, NO hover tint, NO
  hairlines, NO sub-blurb, 0.75rem vertical cell padding.
- **Rowglow** (ColorLib `css-table-12`, "Table #2"): light-GRAY page
  `#efefef`, NO cell borders at all, rows separated by whitespace; the
  signature is the WHITE row-glow on hover (`bg-white` on gray) — full-row
  white on hover, no radius, no shadow.
- **Gridspan** (ColorLib `css-table-13`, "Table #3"): white page,
  `#dee2e6` separators, PLUS blue-tinted hover/active rows with
  1px `#007bff` hairlines, PLUS the `#b3b3b3` sub-blurb under
  Occupation, 20px vertical cell padding, body weight 300.
- **Rowcard** (ColorLib `css-table-14`, "Table #4"): gray page `#efefef`,
  WHITE row-cards with radius 7px separated by 10px transparent spacer
  gaps (cards are white at ALL times — not only on hover), hover shows a
  subtle `0 2px 10px -5px rgba(0,0,0,0.1)` shadow lift, borderless
  header, sub-blurb, blue Name links, and **checked state visible ONLY
  on the checkbox** (its stylesheet never styles `.active`).
- **Gridpane** (this spec, ColorLib `css-table-15`, "Table #5"): WHITE
  page `#fff` + the whole table wrapped in a rounded GRAY panel
  (`#efefef` / 20px padding / 4px radius) — the row-cards sit on gray
  INSIDE the panel, and the UPPERCASE 12px letter-spaced header labels
  sit directly on the gray (no white behind thead). The two signatures:
  (1) the gray panel wrapper, (2) **checked rows DIM to `opacity: .4`**
  (`tr.cl-active`) — the only variant where the checkbox state restyles
  the whole row. Distinguish from Rowcard by the panel + uppercase
  header + dim-on-check (Rowcard: gray PAGE, no panel, no header casing,
  checked rows unchanged).

## Requirements

### Requirement: Page shell and heading render

The system SHALL render a white page shell with Roboto typography and a
short h2 heading above the gray panel.

#### Scenario: Shell renders

- **GIVEN** the user visits the Gridpane home page
- **THEN** the page background SHALL be `#fff` (WHITE)
- **AND** the font family SHALL be Roboto (Google Fonts weights 300, 400,
  500 loaded)
- **AND** the content area SHALL have about 7rem vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side
  padding; 540/720/960px at smaller breakpoints) SHALL hold the page
  content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #5" (or a paraphrase of the same
  short label) SHALL display at font-size 20px, font-weight 500,
  color `#212529`
- **AND** it SHALL have about 3rem margin-bottom above the gray panel
- **AND** it SHALL render on the WHITE page background (not inside the
  panel)

### Requirement: Gray panel wraps the table

The system SHALL wrap the entire table in a rounded light-gray panel —
the signature treatment of this template.

#### Scenario: Panel renders

- **GIVEN** the page shell is visible
- **THEN** a wrapper with background `#efefef`, padding 20px, and
  border-radius 4px SHALL surround the entire table (header + body)
- **AND** the panel SHALL be centered inside the page container
- **AND** the panel's gray SHALL show through between the white
  row-cards

#### Scenario: Header labels sit directly on the panel

- **GIVEN** the panel renders
- **THEN** the thead cells SHALL have NO white background (they show the
  panel's `#efefef`)
- **AND** the header labels SHALL render at font-size 12px, text-transform
  uppercase, letter-spacing .1rem, color `#212529`
- **AND** the header row SHALL be borderless (no top border, no bottom
  border)

### Requirement: Data table renders with white row-cards on the gray panel

The system SHALL render a six-column data table whose body rows appear as
white rounded cards separated by transparent gaps on the gray panel.

#### Scenario: Table columns and header row

- **GIVEN** the table is visible
- **THEN** a responsive wrapper (display block, overflow-x auto) SHALL
  hold a table with width 100% and min-width 900px inside the gray panel
- **AND** the header row SHALL list six columns: a select-all checkbox
  cell, "Order", "Name", "Occupation", "Contact", "Education"
- **AND** each header cell SHALL use `scope="col"`

#### Scenario: Data rows render as white rounded cards

- **GIVEN** the table is visible
- **THEN** four body data rows SHALL display
- **AND** each row SHALL start with a th (`scope="row"`) containing a row
  checkbox
- **AND** each row SHALL continue with five td cells: order number, name,
  occupation (+ sub-blurb), contact number, education
- **AND** each data row's cells SHALL have background `#fff` and NO cell
  borders
- **AND** each data row SHALL render as a rounded card: border-radius 7px
  with overflow hidden (corners repeated on first/last cell)
- **AND** between every two data rows THERE SHALL BE a 10px transparent
  spacer row (the gray panel shows through)
- **AND** body cell text SHALL be `#777` at font-weight 300
- **AND** cell padding SHALL be 0.75rem horizontal, 20px vertical, with
  vertical-align top

#### Scenario: Occupation sub-blurb renders

- **GIVEN** the data rows render
- **THEN** each Occupation cell SHALL contain the occupation title and,
  beneath it, a block-level small blurb in `#b3b3b3` at font-weight 300
  and 80% font-size
- **AND** the blurb text SHALL be the same kind of placeholder sentence in
  every row (e.g. "Far far away, behind the word mountains" or a
  paraphrase of equal length)

#### Scenario: Name links render

- **GIVEN** the data rows render
- **THEN** each Name cell SHALL be an anchor link colored `#007bff` with
  no underline
- **WHEN** the user hovers the link
- **THEN** it SHALL turn `#0056b3` (still no underline) with about a 0.3s
  ease transition

#### Scenario: Content fidelity

- **GIVEN** the data rows render
- **THEN** the rows SHALL contain the same KIND of demo data as the source:
  4-digit order ids, person names, design/dev occupations,
  +CC-formatted phone numbers, and school names
- **AND** exact strings MAY be paraphrased while keeping the same
  structure

### Requirement: Checked rows dim to 40% opacity

The system SHALL restyle a row to `opacity: .4` whenever its checkbox is
checked — the second signature treatment of this template.

#### Scenario: Checked row dims

- **GIVEN** the table is visible
- **WHEN** a row's checkbox becomes checked
- **THEN** that row's `<tr>` SHALL get the active class (e.g.
  `cl-active`)
- **AND** the whole row SHALL render at opacity .4 (white card, text, and
  checkbox all fade into the gray panel)
- **WHEN** the row's checkbox becomes unchecked
- **THEN** the active class SHALL be removed and the row SHALL return to
  full opacity (crisp white card)

#### Scenario: Initial checked state matches the source

- **GIVEN** the page loads
- **THEN** the second data row (order 4616, "Matthew Wasil") SHALL be
  checked by default
- **AND** that row SHALL be dimmed to opacity .4
- **AND** the other three rows SHALL be unchecked at full opacity

#### Scenario: Select-all dims/undims every row

- **GIVEN** the table is visible
- **WHEN** the user toggles the header (select-all) checkbox on
- **THEN** all four row checkboxes SHALL become checked
- **AND** all four rows SHALL dim to opacity .4
- **WHEN** the user toggles it off
- **THEN** all four row checkboxes SHALL become unchecked
- **AND** all four rows SHALL return to full opacity
- **AND** each row checkbox SHALL still be toggleable independently (its
  own row dims/undims alone)

### Requirement: Custom checkboxes render

The system SHALL render custom checkboxes with hidden native inputs and a
styled indicator covering hover, focus, checked, and disabled states.

#### Scenario: Checkbox visual states

- **GIVEN** a checkbox is rendered
- **THEN** the native input SHALL be visually hidden and a 20x20px
  rounded-square indicator (border-radius 4px, border 2px solid `#ccc`,
  transparent background) SHALL be shown
- **WHEN** the user hovers or keyboard-focuses the checkbox
- **THEN** the indicator border SHALL become `#007bff`
- **WHEN** the checkbox is checked
- **THEN** the indicator background and border SHALL become `#007bff` and
  a white checkmark SHALL be shown
- **WHEN** the checkbox is disabled
- **THEN** the indicator SHALL render `#e6e6e6` at 0.6 opacity with a
  `#ccc` border (checked+disabled: `#007bff` at 0.2 opacity)

#### Scenario: Row hover shows the card shadow lift

- **GIVEN** the table is visible
- **WHEN** the user hovers over any data row
- **THEN** that row's card SHALL show a box-shadow of
  `0 2px 10px -5px rgba(0,0,0,0.1)` (subtle lift)
- **AND** the transition SHALL run over about 0.3s with an ease curve
- **AND** hovering SHALL NOT change any checkbox's checked state or the
  row's dim level

#### Scenario: Checkbox accessibility

- **GIVEN** the checkboxes render
- **THEN** every checkbox SHALL have an accessible label
- **AND** the header checkbox SHALL be labeled as select-all
- **AND** row checkboxes SHALL use th `scope="row"`
- **AND** the indicator SHALL be keyboard-focusable with a visible focus
  state

### Requirement: Responsive table behavior

The system SHALL keep the paneled table usable on narrow viewports via
horizontal scrolling inside the wrapper.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (900px)
- **THEN** the table SHALL scroll horizontally within its wrapper
- **AND** the gray panel (padding + radius) SHALL stay intact around the
  scroll area
- **AND** the page layout (heading, container padding, footer) SHALL stay
  intact
- **AND** no horizontal overflow SHALL escape the wrapper

### Requirement: Component Dock attribution footer

The system SHALL include the monorepo-mandated Component Dock attribution
link and SHALL NOT reference ColorLib anywhere in the app.

#### Scenario: Attribution present

- **GIVEN** the page footer area is rendered
- **THEN** a minimal attribution line SHALL link
  https://www.componentdock.com/ branded "Component Dock"
- **AND** NO ColorLib attribution or links SHALL appear anywhere in the
  page

### Requirement: Accessibility (global semantics)

The system SHALL render real table semantics and reachable interactive
elements.

#### Scenario: Table and page semantics

- **GIVEN** the page is rendered
- **THEN** the table SHALL use thead/tbody with th `scope="col"` on
  headers and `scope="row"` on row headers
- **AND** the heading hierarchy SHALL contain a single h2
- **AND** all interactive elements (checkboxes) SHALL be keyboard
  reachable with visible focus states
- **AND** the demo data SHALL render as real table content (not
  presentational divs)

## Verification checklist

- [ ] Roboto 300/400/500 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-ink: #212529`, `--color-muted: #777`,
      `--color-subtle: #b3b3b3`, `--color-surface: #fff`,
      `--color-accent: #007bff`, `--color-accent-dark: #0056b3`,
      `--color-page: #fff`, `--color-panel: #efefef`
- [ ] Page shell: `#fff` background, content area `7rem` vertical
      padding, centered container max-width 1140px / 15px gutters
      (540/720/960px breakpoints)
- [ ] Heading "Table #5" (or paraphrase) — 20px / weight 500 / `#212529`,
      3rem margin-bottom, on the WHITE page above the panel
- [ ] Gray panel: `#efefef` background, 20px padding, 4px radius,
      wrapping the whole table (thead + tbody); header labels sit
      directly on the gray (no white behind thead)
- [ ] Header labels: 12px / uppercase / letter-spacing .1rem / `#212529`,
      borderless thead (6 columns incl. select-all checkbox cell)
- [ ] Table: `min-width: 900px` inside an `overflow-x-auto` wrapper
      within the panel; 4 body data rows; cell text `#777` at weight 300;
      NO cell borders; 0.75rem horizontal + 20px vertical cell padding
- [ ] Rows render as white cards: `background: #fff`, `border-radius:
      7px` + overflow hidden per row (corners on first/last cell), 10px
      transparent spacer gaps between rows (gray panel shows through)
- [ ] Row hover: subtle `box-shadow: 0 2px 10px -5px rgba(0,0,0,0.1)`,
      ~0.3s ease; hover does not alter checked state or dim level
- [ ] Checked rows DIM: `tr` active class → `opacity: .4` on the whole
      row (React state toggles the class); initial state = row 2
      (4616) checked + dimmed; select-all dims/undims every row
- [ ] Name cells: blue `#007bff` links, hover `#0056b3`, no underline,
      0.3s ease transition
- [ ] Occupation cells include the block-level `#b3b3b3`/300 sub-blurb
- [ ] Custom checkboxes: hidden native input + 20×20px indicator (radius
      4px, 2px `#ccc`; hover/focus/checked `#007bff`; white checkmark via
      lucide-react `Check` — no icon fonts); disabled states
- [ ] Select-all: header checkbox toggles all four row checkboxes AND
      their dim state (React state); rows toggle independently
- [ ] Responsive: horizontal scroll below 900px; gray panel padding +
      radius intact; layout intact
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh gridpane`; PR
      `feat/template-gridpane` with source slug + preview URL + tokens in
      the description
