# Template: Rowglow (Table)

## Purpose

Rowglow is a minimal data-table showcase page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Css Table
12" template (source: https://colorlib.com/wp/template/css-table-12/ — a
single-page data-table snippet: light-gray page, one centered heading, one
wide responsive data table with a light-weight borderless look and a
white row-hover glow; no navbar, no checkboxes, no imagery, no framework),
built under a DIFFERENT name (Rowglow — the white hover glow of each data
row; single lowercase word), per the monorepo naming mandate (never reuse
the ColorLib source name), with the monorepo stack:
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
  woff2; body font-weight 300 — the signature light look).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-12.jpg
  (served as AVIF, 1200×972; visually analyzed 2026-09-30; matches the
  live preview).
- **TEMPLATES.md:** "## Table (25)" section (line 2868) — line 2871
  (`- [ ] **Css Table 12**`). Slug `css-table-12` appears exactly ONCE in
  TEMPLATES.md.

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Google Fonts 300/400; **body font-weight 300** (the light signature look — differs from css-table-11 where body is 400) |
| Page background | `#efefef` | **light GRAY** body background — the key difference from css-table-11's white page |
| Heading / ink | `#212529` | h2 20px, line-height 1.2, margin-bottom 0.5rem base + `.cl-mb-5` override 3rem; inherits body weight 300 |
| Table body text | `#777` | `.custom-table tbody th, .custom-table tbody td` — `font-weight: 300` |
| Subtext (`small`) | `#b3b3b3` | `.custom-table tbody ... small` — font-weight 300, font-size 80%, display block (`.cl-d-block`) — the gray one-liner under Occupation |
| Row separators | **NONE** | `.custom-table tbody th, .custom-table tbody td { border: none; }` — body cells have NO borders at all; rows are separated purely by whitespace (20px vertical cell padding) on the gray background. (Differs from css-table-11's `#dee2e6` row lines.) |
| Header row | borderless, ink labels | `.custom-table thead tr, .custom-table thead th` → `border-top: none; border-bottom: none !important`; header labels inherit ink `#212529` (darker than the `#777`/300 body rows) |
| Row hover glow | background `#fff`, transition `.3s all ease` | `.custom-table tbody tr:hover, .custom-table tbody tr:focus` — the SIGNATURE feature: white row lights up on the gray page. Implement with `transition-colors duration-300 ease-out` + `hover:bg-white focus:bg-white` on `<tr>` |
| Accent colors | none | no blue/primary, no buttons, no links in the source |
| Container | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like responsive container) |
| Table | `width: 100%; min-width: 900px` (`.custom-table`); cell horizontal padding `0.75rem`, vertical padding `20px`, `vertical-align: top`; `border-collapse: collapse` | NOTE: `.custom-table` sets `padding-bottom: 20px; padding-top: 20px` AFTER `.cl-table th, td { padding: 0.75rem }` — vertical padding wins at 20px; horizontal stays 0.75rem |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` — horizontal scroll below the 900px min-width |
| Content area | `padding: 7rem 0` | `.content` — generous whitespace above/below the table |
| Heading margin | `margin-bottom: 3rem` (`cl-mb-5`, `!important`) | h2 → table gap |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one table.
Section order (1:1):

1. **Page shell** — light-gray background `#efefef`, Roboto 300 throughout;
   `.content` wraps everything with `7rem` vertical padding;
   `.cl-container` centers the content (1140px max-width desktop, 15px
   gutters, responsive down to 540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #2</h2>` — 20px, ink
   `#212529` at body weight 300, 3rem margin-bottom. (Text may be
   paraphrased, e.g. "Table #2" kept or "People Table" — same kind of
   short label.)
3. **Responsive table wrapper** — `.cl-table-responsive` (overflow-x
   auto) around a `<table class="cl-table custom-table">` with
   `min-width: 900px`.
4. **Data table** —
   - **thead (borderless):** 5 columns — `Order` · `Name` · `Occupation`
     · `Contact` · `Education`; header labels in ink `#212529`
     (default weight), `scope="col"`. NO checkbox column (differs from
     css-table-11).
   - **tbody:** 4 rows; each row = plain `td` cells (the source has a
     stray `scope="row"` attribute on the first `<tr>` but NO `th` row
     headers — every cell is a `td`); cell text `#777` at
     `font-weight: 300`; NO borders on body cells; 20px vertical +
     0.75rem horizontal cell padding.
   - **Occupation cell subtext** — each Occupation cell contains a
     `<small class="cl-d-block">Far far away, behind the word
     mountains</small>` — font-size 80%, color `#b3b3b3`, weight 300,
     `display: block` (a lighter gray one-liner under the occupation
     title). This is a distinctive detail of Table #2.
   - **Demo data (same KIND of content; paraphrase OK):** 4-digit order
     numbers (1392 / 4616 / 9841 / 9548), person names (James Yates /
     Matthew Wasil / Sampson Murphy / Gaspar Semenov), occupations (Web
     Designer / Graphic Designer / Mobile Dev / Illustrator), +CC phone
     numbers (+63 983 0962 971 / +02 020 3994 929 / +01 352 1125 0192 /
     +92 020 3994 929), education (NY University / London College /
     Senior High / College) + the gray subtext line in every Occupation
     cell.
5. **Row-hover glow** — hovering (or keyboard-focusing) any tbody row
   transitions its background to `#fff` over `.3s ease`; the white row
   pops against the `#efefef` page. No JS — pure CSS. (The screenshot
   captures row "9841 / Sampson Murphy" in the hovered white state.)
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
Given the user visits the Rowglow home page
Then the page background is #efefef (light gray)
And the font family is Roboto (Google Fonts weights 300 and 400 loaded)
And the body text renders at font-weight 300
And the content area has about 7rem vertical padding
And a centered container (max-width 1140px at desktop, 15px side padding; 540/720/960px at smaller breakpoints) holds the page content
```

#### Scenario: Heading renders
```
Given the page shell is visible
Then an h2 heading labeled "Table #2" (or a paraphrase of the same short label) is displayed at font-size 20px, color #212529
And it has about 3rem margin-bottom above the table
```

### Requirement: Data table renders with the source column structure

#### Scenario: Table columns and header row
```
Given the table is visible
Then a responsive wrapper (display block, overflow-x auto) holds a table with width 100% and min-width 900px
And the header row lists five columns: "Order", "Name", "Occupation", "Contact", "Education"
And each header cell uses scope="col"
And the header row is borderless (no top border, no bottom border) with labels in #212529
```

#### Scenario: Data rows render
```
Given the table is visible
Then four body rows are displayed
And each row contains five td cells: order number, name, occupation, contact number, education
And body cell text is #777 at font-weight 300
And body cells have NO borders (no row separators) — rows are separated only by whitespace on the gray page
And cell padding is 0.75rem horizontal, 20px vertical, vertical-align top
```

#### Scenario: Occupation subtext renders
```
Given a data row renders
Then the Occupation cell displays its job title followed by a block-level small text line
And the small text uses font-size 80%, color #b3b3b3, font-weight 300
And the same kind of short gray descriptor line appears in every row's Occupation cell
```

#### Scenario: Content fidelity
```
Given the data rows render
Then the rows contain the same KIND of demo data as the source: 4-digit order ids, person names, design/dev occupations, +CC-formatted phone numbers, school names, and a gray descriptor subline under each occupation
And exact strings may be paraphrased while keeping the same structure
```

### Requirement: Row-hover glow

#### Scenario: Hover and focus light the row white
```
Given the table is visible
When the user hovers a body row
Then that row's background transitions to #fff over about 0.3s ease
And the white row stands out against the #efefef page background
When the user keyboard-focuses an interactive element within a row
Then the row also renders the white background
When the pointer leaves the row
Then the background returns to transparent (showing the gray page)
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
Then the table uses thead/tbody with th scope="col" on headers
And the heading hierarchy contains a single h2
And the demo data is rendered as real table content (not presentational divs)
And the table is not dependent on hover alone for meaning (hover is decorative feedback only)
```

## Verification checklist

- [ ] Roboto 300/400 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-ink: #212529`, `--color-muted: #777`,
      `--color-subtext: #b3b3b3`, `--color-surface: #fff`,
      `--color-page: #efefef`
- [ ] Page shell: `#efefef` background, body weight 300, content area
      `7rem` vertical padding, centered container max-width 1140px /
      15px gutters (540/720/960px breakpoints)
- [ ] Heading "Table #2" (or paraphrase) — 20px / `#212529`,
      3rem margin-bottom
- [ ] Table: `min-width: 900px` inside an `overflow-x-auto` wrapper;
      borderless thead (5 columns: Order · Name · Occupation · Contact ·
      Education); 4 body rows; cell text `#777` at weight 300; NO cell
      borders / row separators; 20px vertical + 0.75rem horizontal cell
      padding
- [ ] Occupation subtext: block-level small line per row — 80% size,
      `#b3b3b3`, weight 300
- [ ] Row-hover glow: `hover:bg-white focus:bg-white` on `<tr>` with
      0.3s ease transition (white row on gray page); no JS needed
- [ ] Responsive: horizontal scroll below 900px; layout intact
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh rowglow`; PR
      `feat/template-rowglow` with source slug + preview URL + tokens in
      the description
