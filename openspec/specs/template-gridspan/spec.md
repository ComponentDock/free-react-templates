# Template: Gridspan (Table)

## Purpose

Gridspan is a minimal data-table showcase page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Css Table
13" template (source: https://colorlib.com/wp/template/css-table-13/ — a
single-page data-table snippet: white page, one small heading, one wide
responsive data table with custom checkboxes, select-all, row-hover/active
highlighting, and a small sub-blurb under each Occupation cell; no navbar,
no imagery, no framework), built under a DIFFERENT name (Gridspan — a span
across grid rows; single lowercase word), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `css-table-13`
- **Source:** https://colorlib.com/wp/template/css-table-13/
  (page title: "CSS Table V13 - Free Modern CSS Table Template 2026 -
  Colorlib")
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-13/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-13/**
  (HTTP 200, 3,684 bytes, `<title>Table #3</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL. The path
  is discoverable from the ColorLib template page's own links
  (`preview.colorlib.com/theme/bootstrap/css-table-13/` + the download zip
  `preview.colorlib.com/downloads/free/css-table-13.zip`).
- **Preview CSS:** `css/style.css?v=12e290cd` (10,634 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing else.
  No framework, no build step."). It first reverts Bootstrap-reboot base
  styles (`all: revert` on common elements), then styles everything from
  browser defaults: `html`/`body` reboot block, `@font-face` Roboto 300/400
  (self-hosted woff2), `.cl-container` (Bootstrap-like responsive
  container), `.cl-table` (table base + `.cl-table-responsive` overflow
  wrapper), `.content` (7rem vertical padding), `.custom-table`
  (borderless header, light-gray row separators, min-width 900px, blue
  hover/active row highlight), and `.control` / `.control__indicator`
  (custom checkbox). Note: the sheet reverts ALL base styles on common
  elements first (`:where(html) :is(...) { all: revert }`) — in Tailwind
  this is unnecessary (Tailwind's preflight is already the base).
- **Scripts (source):** `js/snippet.js?v=8b6525f2` (1,000 bytes,
  config-driven, no jQuery/no framework): `CHECK_ALL` — the header
  `input.js-check-all` toggles every `th input[type="checkbox"]` and
  toggles class `active` on their closest `tr`; `CHECK_ROWS` — each
  `th[scope="row"] input[type="checkbox"]` toggles class `active` on its
  own row. REIMPLEMENT in React state.
- **Icons:** icomoon glyph font for the checkbox checkmark
  (`.control__indicator:after { content: '\e5ca' }`) — **REPLACE with
  lucide-react `Check`** (or a CSS-drawn check), do not ship icon fonts.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400; 500 for the
  h2)** in `index.html` (the preview self-hosts Roboto 300/400 via
  @font-face woff2; weights used: 300 = table body cells + body default,
  400 = header cells' default weight fallback, 500 = heading).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-13.jpg
  (JPEG, 1200×972; visually analyzed 2026-09-30; matches the live preview —
  the screenshot captures two rows in the CHECKED state).
- **TEMPLATES.md:** "## Table (25)" section, line 2872
  (`- [ ] **Css Table 13**`). Slug `css-table-13` appears exactly ONCE in
  TEMPLATES.md.

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token                       | Value                                                                                                                                                                                                       | Notes                                                                                                                                                                                                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family                 | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`                                                                                         | Google Fonts 300/400 (500 for heading); body 16px/300/1.5                                                                                                                                                                                                                 |
| Page background             | `#fff`                                                                                                                                                                                                      | `body` background-color                                                                                                                                                                                                                                                   |
| Heading / ink               | `#212529`                                                                                                                                                                                                   | body color; h2 20px (overrides Bootstrap's 2rem), font-weight 500, line-height 1.2                                                                                                                                                                                        |
| Table body text             | `#777`                                                                                                                                                                                                      | `.custom-table tbody th, .custom-table tbody td` — `font-weight: 300` (light) — the signature light-gray row look                                                                                                                                                         |
| Occupation sub-blurb        | `#b3b3b3`                                                                                                                                                                                                   | `.custom-table tbody ... small` — `font-weight: 300`, 80% font-size, `display: block` — "Far far away, behind the word mountains" under each occupation                                                                                                                   |
| Row separators              | `#dee2e6`                                                                                                                                                                                                   | `.cl-table th, .cl-table td` → `border-top: 1px solid #dee2e6` (row separators only; no vertical borders)                                                                                                                                                                 |
| Header row                  | borderless                                                                                                                                                                                                  | `.custom-table thead tr, .custom-table thead th` → `border-top: none; border-bottom: none !important` — header labels inherit body ink `#212529` at default weight (browser th default = bold, per screenshot: header labels are noticeably darker/bolder than body rows) |
| Accent blue                 | `#007bff`                                                                                                                                                                                                   | Bootstrap primary — the ONLY accent: checkbox hover/focus border, checked fill, and the 1px row hairlines                                                                                                                                                                 |
| Row hover/active background | `rgba(0, 123, 255, 0.03)`                                                                                                                                                                                   | `.custom-table tbody tr:hover th/td, .custom-table tbody tr.active th/td` — very light blue tint                                                                                                                                                                          |
| Row hover/active hairlines  | `#007bff`, 1px                                                                                                                                                                                              | Each body cell has `:before`/`:after` pseudo-elements (top -1px / bottom -1px) with `background: #007bff; height: 1px; opacity: 0; visibility: hidden` → visible (`opacity: 1`) on row hover AND on `active` (checked) rows; `transition: .3s all ease`                   |
| Checkbox unchecked          | 20×20px, `border-radius: 4px`, `border: 2px solid #ccc`, transparent bg                                                                                                                                     | `.control__indicator` (native `<input type=checkbox>` visually hidden: `position:absolute; z-index:-1; opacity:0`)                                                                                                                                                        |
| Checkbox hover/focus        | `border: 2px solid #007bff`                                                                                                                                                                                 | `.control:hover input ~ .control__indicator, .control input:focus ~ .control__indicator`                                                                                                                                                                                  |
| Checkbox checked            | `border: 2px solid #007bff; background: #007bff` + white checkmark (icomoon `\e5ca` → lucide `Check`)                                                                                                       | `.control input:checked ~ .control__indicator`                                                                                                                                                                                                                            |
| Checkbox disabled           | `background: #e6e6e6; opacity: 0.6; border: 2px solid #ccc` (checked+disabled: `#007bff` @ 0.2 opacity)                                                                                                     | `.control input:disabled`                                                                                                                                                                                                                                                 |
| Container                   | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins                                                                                                      | `.cl-container` (Bootstrap-like responsive container)                                                                                                                                                                                                                     |
| Table                       | `width: 100%; min-width: 900px` (`.custom-table`); cell `padding: 0.75rem` horizontal + `20px` top/bottom (custom-table overrides the 0.75rem vertical); `vertical-align: top`; `border-collapse: collapse` | no vertical borders                                                                                                                                                                                                                                                       |
| Responsive wrapper          | `display: block; width: 100%; overflow-x: auto`                                                                                                                                                             | `.cl-table-responsive` — horizontal scroll below the 900px min-width                                                                                                                                                                                                      |
| Content area                | `padding: 7rem 0`                                                                                                                                                                                           | `.content` — generous whitespace above/below the table                                                                                                                                                                                                                    |
| Heading margin              | `margin-bottom: 3rem` (`cl-mb-5`, `!important`)                                                                                                                                                             | h2 → table gap                                                                                                                                                                                                                                                            |
| Row transition              | `.3s all ease`                                                                                                                                                                                              | cells' `transition` for background + hairline reveal                                                                                                                                                                                                                      |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one table.
Section order (1:1):

1. **Page shell** — white background, Roboto throughout (body weight 300);
   `.content` wraps everything with `7rem` vertical padding;
   `.cl-container` centers the content (1140px max-width desktop, 15px
   gutters, responsive down to 540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #3</h2>` — 20px, weight 500,
   ink `#212529`, 3rem margin-bottom. (Text may be paraphrased, e.g.
   "Table #3" kept or "People Table" — same kind of short label.)
3. **Responsive table wrapper** — `.cl-table-responsive` (overflow-x
   auto) around a `<table class="cl-table custom-table">` with
   `min-width: 900px`.
4. **Data table** —
   - **thead (borderless):** 6 columns — `[select-all checkbox]` ·
     `Order` · `Name` · `Occupation` · `Contact` · `Education`; header
     labels in ink `#212529` (default/bold weight), `scope="col"`.
   - **tbody:** 4 rows; each row = `th[scope=row]` with a row checkbox +
     5 data `td` cells; cell text `#777` at `font-weight: 300`; 20px
     vertical cell padding; 1px `#dee2e6` top border per row; no vertical
     borders.
   - **Occupation cell:** occupation title + a `display: block` small
     blurb underneath: "Far far away, behind the word mountains" —
     `#b3b3b3`, weight 300, 80% size. This sub-blurb is a distinctive
     detail of Table #3 (same blurb text in every row).
   - **Demo data (same KIND of content; paraphrase OK):** 4-digit order
     numbers (1392 / 4616 / 9841 / 9548), person names (James Yates /
     Matthew Wasil / Sampson Murphy / Gaspar Semenov), occupations (Web
     Designer / Graphic Designer / Mobile Dev / Illustrator), +CC phone
     numbers (+63 983 0962 971 / +02 020 3994 929 / +01 352 1125 0192 /
     +92 020 3994 929), education (NY University / London College /
     Senior High / College).
   - **Initial state:** all checkboxes unchecked in the DOM; the
     screenshot shows rows 1 and 3 checked (an interaction state), with
     the light-blue `rgba(0,123,255,0.03)` background and blue 1px
     hairlines top/bottom on those rows.
5. **Custom checkboxes + row highlight** — hidden native input +
   `.control__indicator` visual (see tokens): 20×20 rounded-square, 2px
   `#ccc` border → hover/focus `#007bff` → checked `#007bff` fill + white
   check → disabled gray states. The header checkbox (`js-check-all` in
   source) selects/deselects ALL row checkboxes; every row gets class
   `active` accordingly. Each row checkbox toggles `active` on its own
   row. `active`/hover rows get the tinted background + blue hairlines.
   In React: drive checked state AND an `is-active` boolean from the same
   state (a row is active ⇔ its checkbox is checked); CSS hover should
   also show the highlight without changing the checked state.
6. **Component Dock attribution footer** — the source snippet page has
   NO footer, but the monorepo mandates that every template's footer
   links `https://www.componentdock.com/` (branded "Component Dock").
   Add a MINIMAL attribution line (e.g. "Made with Component Dock" →
   https://www.componentdock.com/) below the table area. Zero ColorLib
   references anywhere in the app.

## Sibling context (for implementers)

This is the third "CSS Table" variant prepped in this monorepo; the three
sources are near-identical snippet pages — do NOT copy tokens across:

- **Gridline** (ColorLib `css-table-11`, "Table #1"): white page,
  borderless header, plain `#dee2e6` row separators, NO hover tint, NO
  hairlines, NO sub-blurb, 0.75rem vertical cell padding.
- **Rowglow** (ColorLib `css-table-12`, "Table #2"): light-GRAY page
  `#efefef`, NO cell borders at all, rows separated by whitespace; the
  signature is the WHITE row-glow on hover (`bg-white` on gray).
- **Gridspan** (this spec, ColorLib `css-table-13`, "Table #3"): white
  page, `#dee2e6` separators, PLUS blue-tinted hover/active rows with
  1px `#007bff` hairlines, PLUS the `#b3b3b3` sub-blurb under
  Occupation, 20px vertical cell padding, body weight 300.

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a white page shell (`#fff`, Roboto everywhere
with body text at font-weight 300, content area with about 7rem vertical
padding) centered in a responsive container (max-width 1140px at desktop
with 15px side padding; 540/720/960px at smaller breakpoints), with a
single h2 heading "Table #3" at font-size 20px, font-weight 500, color
`#212529`, and about 3rem margin-bottom.

#### Scenario: Shell renders

```
Given the user visits the Gridspan home page
Then the page background is #fff
And the font family is Roboto (Google Fonts weights 300, 400, 500 loaded)
And the content area has about 7rem vertical padding
And a centered container (max-width 1140px at desktop, 15px side padding; 540/720/960px at smaller breakpoints) holds the page content
```

#### Scenario: Heading renders

```
Given the page shell is visible
Then an h2 heading labeled "Table #3" (or a paraphrase of the same short label) is displayed at font-size 20px, font-weight 500, color #212529
And it has about 3rem margin-bottom above the table
```

### Requirement: Data table renders with the source column structure

The template SHALL render a responsive data table (width 100%, min-width
900px inside an overflow-x-auto wrapper) whose borderless header row
lists six columns — a select-all checkbox cell, Order, Name, Occupation,
Contact, Education — and whose four body rows each start with a
`th[scope=row]` checkbox cell followed by five `td` cells with light
`#777` text at font-weight 300, 1px `#dee2e6` top separators, 0.75rem
horizontal + 20px vertical padding, no vertical borders, and a
block-level `#b3b3b3` sub-blurb under each Occupation at 80% size and
weight 300, filled with the same KIND of demo data as the source
(4-digit order ids, person names, design/dev occupations, +CC phone
numbers, school names).

#### Scenario: Table columns and header row

```
Given the table is visible
Then a responsive wrapper (display block, overflow-x auto) holds a table with width 100% and min-width 900px
And the header row lists six columns: a select-all checkbox cell, "Order", "Name", "Occupation", "Contact", "Education"
And each header cell uses scope="col"
And the header row is borderless (no top border, no bottom border) with labels in #212529 at default (bold) font-weight
```

#### Scenario: Data rows render

```
Given the table is visible
Then four body rows are displayed
And each row starts with a th (scope="row") containing a row checkbox
And each row continues with five td cells: order number, name, occupation (+ sub-blurb), contact number, education
And body cell text is #777 at font-weight 300
And each row's cells carry a 1px solid #dee2e6 top border (row separator only; no vertical borders)
And cell padding is 0.75rem horizontal, 20px vertical, with vertical-align top
```

#### Scenario: Occupation sub-blurb renders

```
Given the data rows render
Then each Occupation cell contains the occupation title and, beneath it, a block-level small blurb in #b3b3b3 at font-weight 300 and 80% font-size
And the blurb text is the same kind of placeholder sentence in every row (e.g. "Far far away, behind the word mountains" or a paraphrase of equal length)
```

#### Scenario: Content fidelity

```
Given the data rows render
Then the rows contain the same KIND of demo data as the source: 4-digit order ids, person names, design/dev occupations, +CC-formatted phone numbers, and school names
And exact strings may be paraphrased while keeping the same structure
```

### Requirement: Custom checkboxes with select-all behavior and row highlight

The template SHALL render custom checkboxes (hidden native input +
20x20px rounded-square indicator: border-radius 4px, 2px `#ccc` border,
transparent background; hover/focus `#007bff` border; checked `#007bff`
fill with a white lucide-react checkmark; disabled `#e6e6e6` at 0.6
opacity, checked+disabled `#007bff` at 0.2 opacity). A row SHALL be
active ⇔ its checkbox is checked; active and hovered rows SHALL show a
`rgba(0, 123, 255, 0.03)` background with 1px `#007bff` top/bottom
hairlines, transitioning over about 0.3s ease, and hovering SHALL NOT
change any checked state. The header checkbox SHALL toggle all four row
checkboxes and their active state; row checkboxes SHALL toggle
independently.

#### Scenario: Checkbox visual states

```
Given a checkbox is rendered
Then the native input is visually hidden and a 20x20px rounded-square indicator (border-radius 4px, border 2px solid #ccc, transparent background) is shown
When the user hovers or keyboard-focuses the checkbox
Then the indicator border becomes #007bff
When the checkbox is checked
Then the indicator background and border become #007bff and a white checkmark is shown
When the checkbox is disabled
Then the indicator renders #e6e6e6 at 0.6 opacity with a #ccc border (checked+disabled: #007bff at 0.2 opacity)
```

#### Scenario: Checked rows highlight (active state)

```
Given the table is visible
And a row's checkbox is checked
Then that row's cells show a background of rgba(0, 123, 255, 0.03)
And 1px #007bff hairlines appear at the top and bottom of the row's cells
When the row's checkbox becomes unchecked
Then the highlight disappears (background returns to transparent, hairlines hidden)
And the transition runs over about 0.3s with an ease curve
```

#### Scenario: Row hover highlight

```
Given the table is visible
When the user hovers over any body row
Then that row shows the same rgba(0, 123, 255, 0.03) background and #007bff hairlines as an active row
And hovering does not change any checkbox's checked state
```

#### Scenario: Select-all toggles every row

```
Given the table is visible
When the user toggles the header (select-all) checkbox
Then all four row checkboxes become checked and all four rows become active (highlighted)
When the user toggles it again
Then all four row checkboxes become unchecked and no row is active
And each row checkbox can still be toggled independently
```

#### Scenario: Checkbox accessibility

```
Given the checkboxes render
Then every checkbox has an accessible label
And the header checkbox is labeled as select-all
And row checkboxes use th scope="row"
And the indicator is keyboard-focusable with a visible focus state
```

### Requirement: Responsive table behavior

The template SHALL keep the table horizontally scrollable within its
wrapper below the 900px min-width, with the page layout (heading,
container padding, footer) staying intact and no horizontal overflow
escaping the wrapper.

#### Scenario: Narrow viewport scrolls horizontally

```
Given the viewport is narrower than the table min-width (900px)
Then the table scrolls horizontally within its wrapper
And the page layout (heading, container padding, footer) stays intact
And no horizontal overflow escapes the wrapper
```

### Requirement: Component Dock attribution footer

The template SHALL render a minimal footer attribution line linking
`https://www.componentdock.com/` branded "Component Dock", with NO
ColorLib attribution or links anywhere in the page.

#### Scenario: Attribution present

```
Given the page footer area is rendered
Then a minimal attribution line links https://www.componentdock.com/ branded "Component Dock"
And NO ColorLib attribution or links appear anywhere in the page
```

### Requirement: Accessibility (global semantics)

The template SHALL use real table semantics (`thead`/`tbody` with
`th[scope=col]` headers and `th[scope=row]` row headers), a single h2
heading, accessible labels on every checkbox (header = select-all),
keyboard-reachable interactive elements with visible focus states, and
real table content rather than presentational divs.

#### Scenario: Table and page semantics

```
Given the page is rendered
Then the table uses thead/tbody with th scope="col" on headers and scope="row" on row headers
And the heading hierarchy contains a single h2
And all interactive elements (checkboxes) are keyboard reachable with visible focus states
And the demo data is rendered as real table content (not presentational divs)
```

## Verification checklist

- [ ] Roboto 300/400/500 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-ink: #212529`, `--color-muted: #777`,
      `--color-subtle: #b3b3b3`, `--color-line: #dee2e6`,
      `--color-accent: #007bff`, `--color-surface: #fff`
- [ ] Page shell: `#fff` background, content area `7rem` vertical padding,
      centered container max-width 1140px / 15px gutters (540/720/960px
      breakpoints)
- [ ] Heading "Table #3" (or paraphrase) — 20px / weight 500 / `#212529`,
      3rem margin-bottom
- [ ] Table: `min-width: 900px` inside an `overflow-x-auto` wrapper;
      borderless thead (6 columns incl. select-all checkbox cell);
      4 body rows; cell text `#777` at weight 300; 1px `#dee2e6` row
      separators; 0.75rem horizontal + 20px vertical cell padding; no
      vertical borders
- [ ] Occupation cells include the block-level `#b3b3b3`/300 sub-blurb
- [ ] Custom checkboxes: hidden native input + 20×20px indicator (radius
      4px, 2px `#ccc`; hover/focus/checked `#007bff`; white checkmark via
      lucide-react `Check` — no icon fonts); disabled states
- [ ] Checked + hovered rows: `rgba(0,123,255,0.03)` background + 1px
      `#007bff` top/bottom hairlines, ~0.3s ease transition; hover does
      not alter checked state
- [ ] Select-all: header checkbox toggles all four row checkboxes AND row
      active state (React state); rows toggle independently
- [ ] Responsive: horizontal scroll below 900px; layout intact
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh gridspan`; PR
      `feat/template-gridspan` with source slug + preview URL + tokens in
      the description
