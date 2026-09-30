# Template: Rowglow (Table)

## Purpose

Rowglow is a minimal data-table showcase page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Css Table
12" template (source: https://colorlib.com/wp/template/css-table-12/ — a
single-page data-table snippet: light-gray page, one heading, one wide
responsive data table with a light-weight borderless look and a white
row-hover glow; no navbar, no checkboxes, no imagery, no framework), built
under a DIFFERENT name (Rowglow — the white hover glow of each data row;
single lowercase word), per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `css-table-12`
- **Source:** https://colorlib.com/wp/template/css-table-12/
  (page title: "CSS Table V12 - Free Responsive Table Template 2026 -
  Colorlib")
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-12/ returns **HTTP 404
  "Not Found"**. The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-12/**
  (HTTP 200, 2,610 bytes, `<title>Table #2</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL. (Same
  non-standard layout as css-table-11 / Gridline.)
- **Preview CSS:** `css/style.css?v=66bf8830` (7,712 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing else.
  No framework, no build step"). It first reverts Bootstrap-reboot base
  styles (`all: revert` on common elements), then styles everything from
  browser defaults: reboot block, `@font-face` Roboto 300/400 (self-hosted
  woff2), `.cl-container` (Bootstrap-like responsive container), `.cl-table`
  (table base + `.cl-table-responsive` overflow wrapper), `.content`
  (7rem vertical padding), `.custom-table` (borderless header AND borderless
  body cells, `min-width: 900px`, gray page background, white row-hover
  glow), plus print rules. NO checkbox styles — this snippet has no
  interactive controls.
- **Scripts (source):** none — the page has NO JavaScript at all.
- **Icons:** none — no icon font, no icon usage in the source.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400)** in
  `index.html` (the preview self-hosts Roboto 300/400 via @font-face
  woff2; the final `body` rule sets `font-weight: 300` — the signature
  light look).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-12.jpg
  (served as AVIF, 1200×972; visually analyzed 2026-09-30; matches the
  live preview).
- **TEMPLATES.md:** "## Table (25)" section (line 2868) — line 2871
  (`- [ ] **Css Table 12**`). Slug `css-table-12` appears exactly ONCE in
  TEMPLATES.md.

## Design tokens

(Canonical CSS values from the live preview stylesheet
`css/style.css?v=66bf8830`, verified 2026-09-30; CSS values are canonical.)

| Token               | Value                                                                                                                                                                                                                                                                                                                                                                      | Notes                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family         | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`                                                                                                                                                                                                                                                        | Google Fonts 300/400; **body font-weight 300** (the light signature look — differs from css-table-11 where body is 400)                                                                                                                                                                                                                                                                       |
| Page background     | `#efefef`                                                                                                                                                                                                                                                                                                                                                                  | **light GRAY** body background — the key difference from css-table-11's white page                                                                                                                                                                                                                                                                                                            |
| Heading / ink       | `#212529`                                                                                                                                                                                                                                                                                                                                                                  | h2 20px, line-height 1.2, **font-weight 500** (explicit reboot rule `h2, .h2 { font-weight: 500 }`, never overridden later — corrected 2026-09-30 against the stylesheet), margin-bottom 0.5rem base + `.cl-mb-5` override 3rem                                                                                                                                                               |
| Table header labels | `#212529`                                                                                                                                                                                                                                                                                                                                                                  | thead th inherit ink; the snippet never sets a th font-weight and never reverts the UA default → **bold** (author `font-bold` in the recreation for deterministic rendering)                                                                                                                                                                                                                  |
| Table body text     | `#777`                                                                                                                                                                                                                                                                                                                                                                     | `.custom-table tbody th, .custom-table tbody td` — `font-weight: 300`                                                                                                                                                                                                                                                                                                                         |
| Subtext (`small`)   | `#b3b3b3`                                                                                                                                                                                                                                                                                                                                                                  | `.custom-table tbody ... small` — font-weight 300, font-size 80%, display block (`.cl-d-block`) — the gray one-liner under the occupation                                                                                                                                                                                                                                                     |
| Row separators      | **NONE**                                                                                                                                                                                                                                                                                                                                                                   | `.custom-table tbody th, .custom-table tbody td { border: none; }` — body cells have NO borders at all; rows are separated purely by whitespace (20px vertical cell padding) on the gray background. (Differs from css-table-11's `#dee2e6` row lines.)                                                                                                                                       |
| Header row          | borderless, ink labels                                                                                                                                                                                                                                                                                                                                                     | `.custom-table thead tr, .custom-table thead th` → `border-top: none; border-bottom: none !important`; header labels in ink `#212529`, `scope="col"`, UA-default bold weight, `vertical-align: bottom`, 0.75rem padding                                                                                                                                                                       |
| Row hover glow      | background `#fff`, transition `.3s all ease`                                                                                                                                                                                                                                                                                                                               | `.custom-table tbody tr:hover, .custom-table tbody tr:focus` — the SIGNATURE feature: white row lights up on the gray page. Implement with `transition-colors duration-300 ease-out` + `hover:bg-white focus:bg-white` on `<tr>`; rows get `tabIndex={0}` so the `:focus` glow is keyboard-reachable (the source's `tr:focus` rule is otherwise dead CSS — plain `<tr>` cannot receive focus) |
| Accent colors       | none                                                                                                                                                                                                                                                                                                                                                                       | no blue/primary, no buttons, no links in the source                                                                                                                                                                                                                                                                                                                                           |
| Container           | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins                                                                                                                                                                                                                                                                     | `.cl-container` (Bootstrap-like responsive container)                                                                                                                                                                                                                                                                                                                                         |
| Table               | `width: 100%; min-width: 900px` (`.custom-table`); `margin-bottom: 1rem` (`.cl-table`); cell horizontal padding `0.75rem`, vertical padding `20px` on tbody cells (`.custom-table` sets top/bottom 20px after the `0.75rem` shorthand — vertical wins; horizontal stays 0.75rem), `vertical-align: top` on tbody cells / `bottom` on thead th; `border-collapse: collapse` |
| Responsive wrapper  | `display: block; width: 100%; overflow-x: auto`                                                                                                                                                                                                                                                                                                                            | `.cl-table-responsive` — horizontal scroll below the 900px min-width                                                                                                                                                                                                                                                                                                                          |
| Content area        | `padding: 7rem 0`                                                                                                                                                                                                                                                                                                                                                          | `.content` — generous whitespace above/below the table                                                                                                                                                                                                                                                                                                                                        |
| Heading margin      | `margin-bottom: 3rem` (`cl-mb-5`, `!important`)                                                                                                                                                                                                                                                                                                                            | h2 → table gap                                                                                                                                                                                                                                                                                                                                                                                |

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a light-gray page shell (background `#efefef`,
Roboto everywhere with body text at font-weight 300, content area with
about 7rem vertical padding) centered in a responsive container
(max-width 1140px at desktop with 15px side padding; 540/720/960px at
smaller breakpoints), with a single h2 heading "Table #2" at font-size
20px, font-weight 500, color `#212529`, and about 3rem margin-bottom.

#### Scenario: Shell renders

- **GIVEN** the user visits the Rowglow home page
- **THEN** the page background is #efefef (light gray)
- **AND** the font family is Roboto (Google Fonts weights 300 and 400 loaded)
- **AND** the body text renders at font-weight 300
- **AND** the content area has about 7rem vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side padding; 540/720/960px at smaller breakpoints) holds the page content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #2" is displayed at font-size 20px, font-weight 500, color #212529
- **AND** it has about 3rem margin-bottom above the table

### Requirement: Data table renders with the source column structure

The template SHALL render a responsive data table (width 100%,
min-width 900px inside an overflow-x auto wrapper) with a borderless
header row of five columns ("Order", "Name", "Occupation", "Contact",
"Education"; `scope="col"`; labels in `#212529` at the bold header
default) and four body rows of plain `td` cells (order number, name,
occupation, contact number, education) — body cell text `#777` at
font-weight 300, NO cell borders or row separators, cell padding 0.75rem
horizontal and 20px vertical, vertical-align top. Each Occupation cell
SHALL carry a block-level `small` line (font-size 80%, color `#b3b3b3`,
font-weight 300).

#### Scenario: Table columns and header row

- **GIVEN** the table is visible
- **THEN** a responsive wrapper (display block, overflow-x auto) holds a table with width 100% and min-width 900px
- **AND** the header row lists five columns: "Order", "Name", "Occupation", "Contact", "Education"
- **AND** each header cell uses scope="col"
- **AND** the header row is borderless (no top border, no bottom border) with labels in #212529 at the bold header weight

#### Scenario: Data rows render

- **GIVEN** the table is visible
- **THEN** four body rows are displayed
- **AND** each row contains five td cells: order number, name, occupation, contact number, education
- **AND** body cell text is #777 at font-weight 300
- **AND** body cells have NO borders (no row separators) — rows are separated only by whitespace on the gray page
- **AND** cell padding is 0.75rem horizontal, 20px vertical, vertical-align top

#### Scenario: Occupation subtext renders

- **GIVEN** a data row renders
- **THEN** the Occupation cell displays its job title followed by a block-level small text line
- **AND** the small text uses font-size 80%, color #b3b3b3, font-weight 300
- **AND** the same kind of short gray descriptor line appears in every row's Occupation cell

#### Scenario: Content fidelity

- **GIVEN** the data rows render
- **THEN** the rows contain the same KIND of demo data as the source: 4-digit order ids, person names, design/dev occupations, +CC-formatted phone numbers, school names, and a gray descriptor subline under each occupation
- **AND** exact strings may be paraphrased while keeping the same structure

### Requirement: Row-hover glow

The template SHALL light a tbody row's background to white (`#fff`) on
hover or keyboard focus, transitioning over about 0.3s ease. Rows SHALL
be keyboard-focusable so the focus glow is reachable without a pointer.
Hover is decorative feedback only — no data meaning depends on it.

#### Scenario: Hover and focus light the row white

- **GIVEN** the table is visible
- **WHEN** the user hovers a body row
- **THEN** that row's background transitions to #fff over about 0.3s ease
- **AND** the white row stands out against the #efefef page background
- **WHEN** the user keyboard-focuses a body row
- **THEN** the row also renders the white background
- **WHEN** the pointer leaves the row
- **THEN** the background returns to transparent (showing the gray page)

### Requirement: Responsive table behavior

The template SHALL keep the table horizontally scrollable within its
wrapper below the 900px min-width while the rest of the page layout stays
intact.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (900px)
- **THEN** the table scrolls horizontally within its wrapper
- **AND** the page layout (heading, container padding, footer) stays intact
- **AND** no horizontal overflow escapes the wrapper

### Requirement: Component Dock attribution footer

The template SHALL render a minimal footer attribution line linking
https://www.componentdock.com/ branded "Component Dock", and NO ColorLib
attribution or links anywhere in the page.

#### Scenario: Attribution present

- **GIVEN** the page footer area is rendered
- **THEN** a minimal attribution line links https://www.componentdock.com/ branded "Component Dock"
- **AND** NO ColorLib attribution or links appear anywhere in the page

### Requirement: Accessibility (global semantics)

The template SHALL use real table semantics and a correct heading
hierarchy; the hover glow SHALL NOT be the only carrier of meaning.

#### Scenario: Table and page semantics

- **GIVEN** the page is rendered
- **THEN** the table uses thead/tbody with th scope="col" on headers
- **AND** the heading hierarchy contains a single h2
- **AND** the demo data is rendered as real table content (not presentational divs)
- **AND** the table is not dependent on hover alone for meaning (hover is decorative feedback only)

## Verification checklist

- [x] Roboto 300/400 loaded via Google Fonts `<link>` in `index.html`
- [x] `@theme` tokens: `--color-ink: #212529`, `--color-muted: #777`,
      `--color-subtext: #b3b3b3`, `--color-surface: #fff`,
      `--color-page: #efefef`
- [x] Page shell: `#efefef` background, body weight 300, content area
      `7rem` vertical padding, centered container max-width 1140px /
      15px gutters (540/720/960px breakpoints)
- [x] Heading "Table #2" — 20px / font-weight 500 / `#212529`,
      3rem margin-bottom
- [x] Table: `min-width: 900px` inside an `overflow-x-auto` wrapper;
      borderless thead (5 columns: Order · Name · Occupation · Contact ·
      Education); 4 body rows; cell text `#777` at weight 300; NO cell
      borders / row separators; 20px vertical + 0.75rem horizontal cell
      padding
- [x] Occupation subtext: block-level small line per row — 80% size,
      `#b3b3b3`, weight 300
- [x] Row-hover glow: `hover:bg-white focus:bg-white` on `<tr>` with
      0.3s ease transition (white row on gray page); rows focusable
      (`tabIndex={0}`) so the focus glow is reachable
- [x] Responsive: horizontal scroll below 900px; layout intact
- [x] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [x] 100% test coverage via `scripts/verify-app.sh rowglow`; PR
      `feat/template-rowglow` with source slug + preview URL + tokens in
      the description
