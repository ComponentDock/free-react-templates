# Template: Rowcard (Table)

## Purpose

Rowcard is a minimal data-table showcase page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Css Table
14" template (source: https://colorlib.com/wp/template/css-table-14/ — a
single-page data-table snippet: light-GRAY page (`#efefef`) with white
rounded row-CARDS (radius 7px) separated by 10px transparent gaps, custom
checkboxes with select-all, a borderless header, an Occupation sub-blurb,
a subtle hover shadow-lift on each card, blue name links; no navbar, no
imagery, no framework), built under a DIFFERENT name (Rowcard — rows styled
as cards; single lowercase word), per the monorepo naming mandate (never
reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `css-table-14`
- **Source:** https://colorlib.com/wp/template/css-table-14/
  (page title: "CSS Table V14 - Free Minimal Table Design Template 2026 -
  Colorlib")
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-14/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-14/**
  (HTTP 200, 4,028 bytes, `<title>Table #4</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL. The path
  is discoverable from the ColorLib template page's own links
  (`preview.colorlib.com/theme/bootstrap/css-table-14/` + the download zip
  `preview.colorlib.com/downloads/free/css-table-14.zip`).
- **Preview CSS:** `css/style.css?v=4361de53` (10,761 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing else.
  No framework, no build step."). It first reverts Bootstrap-reboot base
  styles (`all: revert` on common elements), then styles everything from
  browser defaults: `html`/`body` reboot block, `@font-face` Roboto 300/400
  (self-hosted woff2), `.cl-container` (Bootstrap-like responsive
  container), `.cl-table` (table base + `.cl-table-responsive` overflow
  wrapper), `.content` (7rem vertical padding), `.custom-table`
  (borderless header, WHITE row-cards on gray with radius 7px + transparent
  10px spacer rows + hover box-shadow, min-width 900px), and `.control` /
  `.control__indicator` (custom checkbox). Note: the sheet reverts ALL
  base styles on common elements first — in Tailwind this is unnecessary
  (Tailwind's preflight is already the base).
- **Scripts (source):** `js/snippet.js?v=dce5f118` (1,000 bytes,
  config-driven, no jQuery/no framework): `CHECK_ALL` — the header
  `input.js-check-all` toggles every `th input[type="checkbox"]` and
  toggles class `active` on their closest `tr`; `CHECK_ROWS` — each
  `th[scope="row"] input[type="checkbox"]` toggles class `active` on its
  own row. REIMPLEMENT the checkbox state in React state.
  **⚠ Fidelity caveat:** unlike its sibling css-table-13, THIS
  stylesheet contains **NO `.active` rule** — the class is toggled by the
  JS but has **zero visual effect**. A checked row looks identical to an
  unchecked one except for the checkbox itself (blue fill + white check).
  Only `:hover` shows a visual change (card shadow lift). Do NOT invent
  checked-row background/highlight styling that the source lacks.
- **Icons:** icomoon glyph font for the checkbox checkmark
  (`.control__indicator:after { content: '\e5ca' }`) — **REPLACE with
  lucide-react `Check`** (or a CSS-drawn check), do not ship icon fonts.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400; 500 for the
  h2)** in `index.html` (the preview self-hosts Roboto 300/400 via
  @font-face woff2; weights used: 300 = body + table cells, 400 = base
  reboot fallback, 500 = h2 per the reboot block).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-14.jpg
  (AVIF data despite the .jpg extension, 1200×972; visually analyzed
  2026-09-30; matches the live preview — the screenshot captures row 2
  (Matthew Wasil) in the CHECKED state, blue checkbox fill visible).
- **TEMPLATES.md:** "## Table (25)" section, line 2873
  (`- [ ] **Css Table 14**`). Slug `css-table-14` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "rowcard" collides with nothing in `ls apps/`,
  `openspec/specs/`, or `docs/templates/` (verified 2026-09-30;
  `git grep -i rowcard origin/main -- apps openspec docs TEMPLATES.md`
  returned zero hits).

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Google Fonts 300/400 (500 for heading); body 16px/300/1.5 |
| Page background | `#efefef` | `body` background-color (template override) — the signature light-gray page behind white cards |
| Heading / ink | `#212529` | body color; h2 20px (overrides Bootstrap's 2rem), font-weight 500 (reboot h2 weight), line-height 1.2 |
| Table body text | `#777` | `.custom-table tbody th, .custom-table tbody td` — `font-weight: 300` (light) |
| Occupation sub-blurb | `#b3b3b3` | `.custom-table tbody ... small` — `font-weight: 300`, 80% font-size, `display: block` — "Far far away, behind the word mountains" under each occupation |
| Header row | borderless | `.custom-table thead tr, .custom-table thead th` → `border-top: none; border-bottom: none !important` — header labels inherit ink `#212529` at default (bold) th weight |
| Row cards (surface) | `#fff`, `border: none` | `.custom-table tbody tr th, .custom-table tbody tr td` — white cards on the gray page |
| Card corner radius | `7px` | `.custom-table tbody tr:not(.spacer)` → `border-radius: 7px; overflow: hidden`; first/last cell of each row repeat the 7px corners |
| Card gaps | 10px transparent spacer rows | `.custom-table tbody tr.spacer td` → `padding: 0; height: 10px; border-radius: 0; background: transparent` — the gray `#efefef` shows through between white cards |
| Card hover lift | `box-shadow: 0 2px 10px -5px rgba(0,0,0,0.1)` | `.custom-table tbody tr:not(.spacer):hover` — subtle shadow; `transition: .3s all ease` |
| `active` (checked rows) | NO styling rule | snippet.js toggles class `active` on checked rows but the stylesheet NEVER styles it — checked state is visible ONLY on the checkbox indicator; do NOT add row highlight |
| Name links | `#007bff`, hover `#0056b3` | Bootstrap defaults; template override: `transition: .3s all ease`, `text-decoration: none !important` (no underline anywhere) |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #ccc`, transparent bg | `.control__indicator` (native `<input type=checkbox>` visually hidden: `position:absolute; z-index:-1; opacity:0`) |
| Checkbox hover/focus | `border: 2px solid #007bff` | `.control:hover input ~ .control__indicator, .control input:focus ~ .control__indicator` |
| Checkbox checked | `border: 2px solid #007bff; background: #007bff` + white checkmark (icomoon `\e5ca` → lucide `Check`) | `.control input:checked ~ .control__indicator` |
| Checkbox disabled | `background: #e6e6e6; opacity: 0.6; border: 2px solid #ccc` (checked+disabled: `#007bff` @ 0.2 opacity) | `.control input:disabled` |
| Container | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like responsive container) |
| Table | `width: 100%; min-width: 900px` (`.custom-table`); cell `padding: 0.75rem` horizontal + `20px` top/bottom (custom-table overrides the 0.75rem vertical); `vertical-align: top`; `border-collapse: collapse`; color `#212529` | NO vertical borders; thead borders overridden away |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` — horizontal scroll below the 900px min-width |
| Content area | `padding: 7rem 0` | `.content` — generous whitespace above/below the table |
| Heading margin | `margin-bottom: 3rem` (`cl-mb-5`, `!important`) | h2 → table gap |
| Row transition | `.3s all ease` | card shadow reveal + link color |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one table.
Section order (1:1):

1. **Page shell** — light-gray background `#efefef`, Roboto throughout
   (body weight 300); `.content` wraps everything with `7rem` vertical
   padding; `.cl-container` centers the content (1140px max-width desktop,
   15px gutters, responsive down to 540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #4</h2>` — 20px, weight 500,
   ink `#212529`, 3rem margin-bottom. (Text may be paraphrased, e.g.
   "Table #4" kept or "People Table" — same kind of short label.)
3. **Responsive table wrapper** — `.cl-table-responsive` (overflow-x
   auto) around a `<table class="cl-table custom-table">` with
   `min-width: 900px`.
4. **Data table (white row-cards on gray)** —
   - **thead (borderless):** 6 columns — `[select-all checkbox]` ·
     `Order` · `Name` · `Occupation` · `Contact` · `Education`; header
     labels in ink `#212529` (default/bold weight), `scope="col"`.
   - **tbody:** 4 data rows + 4 spacer rows (one after each data row);
     each data row = `th[scope=row]` with a row checkbox + 5 data `td`
     cells; each `tr` cell: `background: #fff; border: none`, cell text
     `#777` at `font-weight: 300`, 20px vertical cell padding;
     `tr:not(.spacer)` carries `border-radius: 7px; overflow: hidden` so
     the row renders as a white rounded CARD; `tr.spacer td` is a 10px
     transparent gap (gray page shows through). NO cell borders at all
     (the white card + gap IS the row separation).
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
   - **Initial state:** all checkboxes unchecked in the DOM; the
     screenshot shows row 2 (Matthew Wasil) checked — visible ONLY as
     the blue-filled checkbox; the row itself keeps the same white card
     + no shadow (checked rows have NO highlight in this variant).
5. **Custom checkboxes + select-all** — hidden native input +
   `.control__indicator` visual (see tokens): 20×20 rounded-square, 2px
   `#ccc` border → hover/focus `#007bff` → checked `#007bff` fill + white
   check → disabled gray states. The header checkbox (`js-check-all` in
   source) selects/deselects ALL row checkboxes; each row checkbox is
   independent. The source JS also toggles an `active` class on rows for
   checked state, but **this stylesheet never styles `.active`** — do not
   render row highlight; the checkbox fill is the only checked-state cue.
6. **Component Dock attribution footer** — the source snippet page has
   NO footer, but the monorepo mandates that every template's footer
   links `https://www.componentdock.com/` (branded "Component Dock").
   Add a MINIMAL attribution line (e.g. "Made with Component Dock" →
   https://www.componentdock.com/) below the table area. Zero ColorLib
   references anywhere in the app.

## Sibling context (for implementers)

This is the fourth "CSS Table" variant prepped in this monorepo; the
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
- **Rowcard** (this spec, ColorLib `css-table-14`, "Table #4"): gray
  page `#efefef`, WHITE row-cards with radius 7px separated by 10px
  transparent spacer gaps (cards are white at ALL times — not only on
  hover), hover shows a subtle `0 2px 10px -5px rgba(0,0,0,0.1)` shadow
  lift, borderless header, sub-blurb, blue Name links, and **checked
  state visible ONLY on the checkbox** (the source's `active` class has
  no CSS rule — unlike Gridspan's active-row tint). Distinguish from
  Rowglow by the rounded corners + gaps + shadow (Rowglow rows are
  borderless flat rows that turn fully white on hover).

## Gherkin requirements

### Requirement: Page shell and heading render

#### Scenario: Shell renders
```
Given the user visits the Rowcard home page
Then the page background is #efefef (light gray)
And the font family is Roboto (Google Fonts weights 300, 400, 500 loaded)
And the content area has about 7rem vertical padding
And a centered container (max-width 1140px at desktop, 15px side padding; 540/720/960px at smaller breakpoints) holds the page content
```

#### Scenario: Heading renders
```
Given the page shell is visible
Then an h2 heading labeled "Table #4" (or a paraphrase of the same short label) is displayed at font-size 20px, font-weight 500, color #212529
And it has about 3rem margin-bottom above the table
```

### Requirement: Data table renders with white row-cards on gray

#### Scenario: Table columns and header row
```
Given the table is visible
Then a responsive wrapper (display block, overflow-x auto) holds a table with width 100% and min-width 900px
And the header row lists six columns: a select-all checkbox cell, "Order", "Name", "Occupation", "Contact", "Education"
And each header cell uses scope="col"
And the header row is borderless (no top border, no bottom border) with labels in #212529 at default (bold) font-weight
```

#### Scenario: Data rows render as white rounded cards
```
Given the table is visible
Then four body data rows are displayed
And each row starts with a th (scope="row") containing a row checkbox
And each row continues with five td cells: order number, name, occupation (+ sub-blurb), contact number, education
And each data row's cells have background #fff and NO cell borders
And each data row renders as a rounded card: border-radius 7px with overflow hidden (corners repeated on first/last cell)
And between every two data rows there is a 10px transparent spacer row (gray page shows through)
And body cell text is #777 at font-weight 300
And cell padding is 0.75rem horizontal, 20px vertical, with vertical-align top
```

#### Scenario: Occupation sub-blurb renders
```
Given the data rows render
Then each Occupation cell contains the occupation title and, beneath it, a block-level small blurb in #b3b3b3 at font-weight 300 and 80% font-size
And the blurb text is the same kind of placeholder sentence in every row (e.g. "Far far away, behind the word mountains" or a paraphrase of equal length)
```

#### Scenario: Name links render
```
Given the data rows render
Then each Name cell is an anchor link colored #007bff with no underline
When the user hovers the link
Then it turns #0056b3 (still no underline) with about a 0.3s ease transition
```

#### Scenario: Content fidelity
```
Given the data rows render
Then the rows contain the same KIND of demo data as the source: 4-digit order ids, person names, design/dev occupations, +CC-formatted phone numbers, and school names
And exact strings may be paraphrased while keeping the same structure
```

### Requirement: Custom checkboxes with select-all behavior

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

#### Scenario: Checked state does NOT restyle the row
```
Given the table is visible
And a row's checkbox is checked
Then that row's card keeps the same white background and shows NO shadow or tint (the source stylesheet contains no rule for the checked "active" row class)
And the ONLY visible change is the checkbox itself (blue fill + white check)
When the row's checkbox becomes unchecked
Then the checkbox returns to the transparent/gray-border state and the card is unchanged
```

#### Scenario: Row hover shows the card shadow lift
```
Given the table is visible
When the user hovers over any data row
Then that row's card shows a box-shadow of 0 2px 10px -5px rgba(0,0,0,0.1) (subtle lift)
And the transition runs over about 0.3s with an ease curve
And hovering does not change any checkbox's checked state
```

#### Scenario: Select-all toggles every row
```
Given the table is visible
When the user toggles the header (select-all) checkbox
Then all four row checkboxes become checked (each showing the blue fill + white check)
When the user toggles it again
Then all four row checkboxes become unchecked
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

#### Scenario: Narrow viewport scrolls horizontally
```
Given the viewport is narrower than the table min-width (900px)
Then the table scrolls horizontally within its wrapper
And the page layout (heading, container padding, footer) stays intact
And no horizontal overflow escapes the wrapper
```

### Requirement: Component Dock attribution footer

#### Scenario: Attribution present
```
Given the page footer area is rendered
Then a minimal attribution line links https://www.componentdock.com/ branded "Component Dock"
And NO ColorLib attribution or links appear anywhere in the page
```

### Requirement: Accessibility (global semantics)

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
      `--color-subtle: #b3b3b3`, `--color-surface: #fff`,
      `--color-accent: #007bff`, `--color-accent-dark: #0056b3`,
      `--color-page: #efefef`
- [ ] Page shell: `#efefef` background, content area `7rem` vertical
      padding, centered container max-width 1140px / 15px gutters
      (540/720/960px breakpoints)
- [ ] Heading "Table #4" (or paraphrase) — 20px / weight 500 / `#212529`,
      3rem margin-bottom
- [ ] Table: `min-width: 900px` inside an `overflow-x-auto` wrapper;
      borderless thead (6 columns incl. select-all checkbox cell);
      4 body data rows; cell text `#777` at weight 300; NO cell borders;
      0.75rem horizontal + 20px vertical cell padding
- [ ] Rows render as white cards: `background: #fff`, `border-radius:
      7px` + overflow hidden per row (corners on first/last cell), 10px
      transparent spacer gaps between rows (gray shows through)
- [ ] Row hover: subtle `box-shadow: 0 2px 10px -5px rgba(0,0,0,0.1)`,
      ~0.3s ease; hover does not alter checked state
- [ ] Checked rows show NO extra row styling (source `.active` class is
      unstyled) — only the checkbox fill changes
- [ ] Name cells: blue `#007bff` links, hover `#0056b3`, no underline,
      0.3s ease transition
- [ ] Occupation cells include the block-level `#b3b3b3`/300 sub-blurb
- [ ] Custom checkboxes: hidden native input + 20×20px indicator (radius
      4px, 2px `#ccc`; hover/focus/checked `#007bff`; white checkmark via
      lucide-react `Check` — no icon fonts); disabled states
- [ ] Select-all: header checkbox toggles all four row checkboxes (React
      state); rows toggle independently
- [ ] Responsive: horizontal scroll below 900px; layout intact
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh rowcard`; PR
      `feat/template-rowcard` with source slug + preview URL + tokens in
      the description
