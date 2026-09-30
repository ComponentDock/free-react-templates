# Template: Gridline (Table)

## Purpose

Gridline is a minimal data-table showcase page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Css Table
11" template (source: https://colorlib.com/wp/template/css-table-11/ — a
single-page data-table snippet: white page, one centered heading, one wide
responsive data table with custom checkboxes and a select-all control; no
navbar, no imagery, no framework), built under a DIFFERENT name (Gridline —
the lines of a data grid; single lowercase word), per the monorepo naming
mandate (never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `css-table-11`
- **Source:** https://colorlib.com/wp/template/css-table-11/
  (page title: "CSS Table V11 - Free Responsive Table Template 2026 -
  Colorlib")
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-11/ returns **HTTP 404
  "Not Found"**. The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-11/**
  (HTTP 200, 3,525 bytes, `<title>Table #1</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL.
- **Preview CSS:** `css/style.css?v=7705366a` (8,985 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing else.
  No framework, no build step"). It first reverts Bootstrap-reboot base
  styles (`all: revert` on common elements), then styles everything from
  browser defaults: `html`/`body` reboot block, `@font-face` Roboto 300/400
  (self-hosted woff2), `.cl-container` (Bootstrap-like responsive
  container), `.cl-table` (table base + `.cl-table-responsive`
  overflow wrapper), `.content` (7rem vertical padding), `.custom-table`
  (borderless header, light row separators, min-width 900px), and
  `.control` / `.control__indicator` (custom checkbox).
- **Scripts (source):** `js/snippet.js` (select-all checkbox behavior) —
  reimplement in React state; NO jQuery, no framework, no build step in
  the source.
- **Icons:** icomoon glyph font for the checkbox checkmark
  (`.control__indicator:after { content: '\e5ca' }`) — **REPLACE with
  lucide-react `Check`** (or a CSS-drawn check), do not ship icon fonts.
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400)** in
  `index.html` (the preview self-hosts Roboto 300/400 via @font-face
  woff2; weights used: 300 = table body cells, 400 = body/default,
  500 = heading).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-11.jpg
  (served as AVIF, 1200×972; visually analyzed 2026-09-30; matches the
  live preview).
- **TEMPLATES.md:** "## Table (25)" section (line 2868), first item in the
  section — line 2870 (`- [ ] **Css Table 11**`). Slug `css-table-11`
  appears exactly ONCE in TEMPLATES.md.

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Google Fonts 300/400 (500 for heading); body 16px/400/1.5 |
| Page background | `#fff` | `body` background-color |
| Heading / ink | `#212529` | body color; h2 20px, font-weight 500, line-height 1.2 |
| Table body text | `#777` | `.custom-table tbody th, .custom-table tbody td` — `font-weight: 300` (light) — the signature light-gray row look |
| Row separators | `#dee2e6` | `.cl-table th, .cl-table td` → `border-top: 1px solid #dee2e6` (only the row separators; no vertical borders) |
| Header row | borderless | `.custom-table thead tr, .custom-table thead th` → `border-top: none; border-bottom: none !important` — header labels inherit body ink `#212529` at default weight (darker than the `#777`/300 body rows, per screenshot) |
| Accent blue | `#007bff` | Bootstrap primary — the ONLY accent color on the page: checkbox hover/focus border, checked fill |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #ccc`, transparent bg | `.control__indicator` (native `<input type=checkbox>` visually hidden: `position:absolute; z-index:-1; opacity:0`) |
| Checkbox hover/focus | `border: 2px solid #007bff` | `.control:hover input ~ .control__indicator, .control input:focus ~ .control__indicator` |
| Checkbox checked | `border: 2px solid #007bff; background: #007bff` + white checkmark (icomoon `\e5ca` → lucide `Check`) | `.control input:checked ~ .control__indicator` |
| Checkbox disabled | `background: #e6e6e6; opacity: 0.6; border: 2px solid #ccc` (checked+disabled: `#007bff` @ 0.2 opacity) | `.control input:disabled` |
| Container | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like responsive container) |
| Table | `width: 100%; min-width: 900px` (`.custom-table`); cell `padding: 0.75rem; vertical-align: top`; `border-collapse: collapse` | no vertical borders; rows separated by 1px `#dee2e6` |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` — horizontal scroll below the 900px min-width |
| Content area | `padding: 7rem 0` | `.content` — generous whitespace above/below the table |
| Heading margin | `margin-bottom: 3rem` (`cl-mb-5`, `!important`) | h2 → table gap |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one table.
Section order (1:1):

1. **Page shell** — white background, Roboto throughout; `.content` wraps
   everything with `7rem` vertical padding; `.cl-container` centers the
   content (1140px max-width desktop, 15px gutters, responsive down to
   540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #1</h2>` — 20px, weight 500,
   ink `#212529`, 3rem margin-bottom. (Text may be paraphrased, e.g.
   "Table #1" kept or "Data Table" — same kind of short label.)
3. **Responsive table wrapper** — `.cl-table-responsive` (overflow-x
   auto) around a `<table class="cl-table custom-table">` with
   `min-width: 900px`.
4. **Data table** —
   - **thead (borderless):** 6 columns — `[select-all checkbox]` ·
     `Order` · `Name` · `Occupation` · `Contact` · `Education`; header
     labels in ink `#212529` (default weight), `scope="col"`.
   - **tbody:** 4 rows; each row = `th[scope=row]` with a row checkbox +
     5 data `td` cells; cell text `#777` at `font-weight: 300`; 1px
     `#dee2e6` top border per row; `0.75rem` cell padding.
   - **Demo data (same KIND of content; paraphrase OK):** 4-digit order
     numbers (1392 / 4616 / 9841 / 9548), person names (James Yates /
     Matthew Wasil / Sampson Murphy / Gaspar Semenov), occupations (Web
     Designer / Graphic Designer / Mobile Dev / Illustrator), +CC phone
     numbers (+63 983 0962 971 / +02 020 3994 929 / +01 352 1125 0192 /
     +92 020 3994 929), education (NY University / London College /
     Senior High / College).
5. **Custom checkboxes** — hidden native input + `.control__indicator`
   visual (see tokens): 20×20 rounded-square, 2px `#ccc` border → hover/
   focus `#007bff` → checked `#007bff` fill + white check → disabled
   gray states. The header checkbox (`input.js-check-all` in source)
   selects/deselects ALL row checkboxes; rows toggle independently.
6. **Component Dock attribution footer** — the source snippet page has
   NO footer, but the monorepo mandates that every template's footer
   links `https://www.componentdock.com/` (branded "Component Dock").
   Add a MINIMAL attribution line (e.g. "Made with Component Dock" →
   https://www.componentdock.com/) below the table area. Zero ColorLib
   references anywhere in the app.

## Gherkin requirements

### Requirement: Page shell and heading render

#### Scenario: Shell renders
```
Given the user visits the Gridline home page
Then the page background is #fff
And the font family is Roboto (Google Fonts weights 300 and 400 loaded)
And the content area has about 7rem vertical padding
And a centered container (max-width 1140px at desktop, 15px side padding; 540/720/960px at smaller breakpoints) holds the page content
```

#### Scenario: Heading renders
```
Given the page shell is visible
Then an h2 heading labeled "Table #1" (or a paraphrase of the same short label) is displayed at font-size 20px, font-weight 500, color #212529
And it has about 3rem margin-bottom above the table
```

### Requirement: Data table renders with the source column structure

#### Scenario: Table columns and header row
```
Given the table is visible
Then a responsive wrapper (display block, overflow-x auto) holds a table with width 100% and min-width 900px
And the header row lists six columns: a select-all checkbox cell, "Order", "Name", "Occupation", "Contact", "Education"
And each header cell uses scope="col"
And the header row is borderless (no top border, no bottom border) with labels in #212529 at default font-weight
```

#### Scenario: Data rows render
```
Given the table is visible
Then four body rows are displayed
And each row starts with a th (scope="row") containing a row checkbox
And each row continues with five td cells: order number, name, occupation, contact number, education
And body cell text is #777 at font-weight 300
And each row's cells carry a 1px solid #dee2e6 top border (row separator only; no vertical borders)
And cell padding is 0.75rem with vertical-align top
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

#### Scenario: Select-all toggles every row
```
Given the table is visible
When the user toggles the header (select-all) checkbox
Then all four row checkboxes become checked
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

- [ ] Roboto 300/400 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-ink: #212529`, `--color-muted: #777`,
      `--color-line: #dee2e6`, `--color-accent: #007bff`,
      `--color-surface: #fff`
- [ ] Page shell: `#fff` background, content area `7rem` vertical padding,
      centered container max-width 1140px / 15px gutters (540/720/960px
      breakpoints)
- [ ] Heading "Table #1" (or paraphrase) — 20px / weight 500 / `#212529`,
      3rem margin-bottom
- [ ] Table: `min-width: 900px` inside an `overflow-x-auto` wrapper;
      borderless thead (6 columns incl. select-all checkbox cell);
      4 body rows; cell text `#777` at weight 300; 1px `#dee2e6` row
      separators; 0.75rem cell padding; no vertical borders
- [ ] Custom checkboxes: hidden native input + 20×20px indicator (radius
      4px, 2px `#ccc`; hover/focus/checked `#007bff`; white checkmark via
      lucide-react `Check` — no icon fonts); disabled states
- [ ] Select-all: header checkbox toggles all four row checkboxes (React
      state); rows toggle independently
- [ ] Responsive: horizontal scroll below 900px; layout intact
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh gridline`; PR
      `feat/template-gridline` with source slug + preview URL + tokens in
      the description
