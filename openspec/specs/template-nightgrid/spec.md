# Template: Nightgrid (Table)

## Purpose

Nightgrid is a dark-mode data-table showcase page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Css Table 16" template (source:
https://colorlib.com/wp/template/css-table-16/ — a single-page data-table
snippet: DARK PLUM-CHARCOAL page (`#3c373e`) with a borderless table,
UPPERCASE white 11px letter-spaced header labels, faint-white cell text
and faint-white links on the dark ground, subtle dark stripe bands on odd
rows, and a HOVER signature that turns cell text WHITE and links YELLOW
(`#fdd114`) — no navbar, no imagery, no framework, no JavaScript), built
under a DIFFERENT name (Nightgrid — the night-dark grid table; single
lowercase word), per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source slug:** `css-table-16`
- **Source:** https://colorlib.com/wp/template/css-table-16/
  (links `preview.colorlib.com/theme/bootstrap/css-table-16/`)
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-16/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-16/**
  (HTTP 200, 4,251 bytes, `<title>Table #6</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL.
- **Preview CSS:** `css/style.css?v=32f306b0` (9,122 bytes) — a single
  self-contained sheet ("Every style this snippet uses, and nothing else.
  No framework, no build step."). It first reverts Bootstrap-reboot base
  styles (`all: revert` on common elements), then styles everything from
  browser defaults: `html`/`body` reboot block, `@font-face` Roboto
  300/400 (self-hosted woff2), `.cl-container` (Bootstrap-like responsive
  container), `.cl-table` (table base + `.cl-table-responsive` overflow
  wrapper + `.cl-table-striped` odd-row tint), `.content` (7rem vertical
  padding), `.custom-table` (the dark-theme overrides: WHITE uppercase
  11px/.2rem header labels with 30px padding-bottom, `#777` weight-300
  borderless cells, `rgba(255,255,255,0.3)` blurb + links, 11px/900
  uppercase `.more` links, row hover → `#fff` text + `#fdd114` links,
  `min-width: 900px`). Note: the sheet reverts ALL base styles on common
  elements first — in Tailwind this is unnecessary (Tailwind's preflight
  is already the base).
- **Scripts (source):** **NONE** — the preview page loads zero
  `<script>` tags (verified 2026-09-30 on the live DOM). No snippet.js,
  no checkboxes, no select-all, no framework — the entire template is
  pure static HTML + CSS. The hover behavior is CSS-only (`:hover` /
  `:focus` rules on `tbody tr`). NOTHING to reimplement in React state
  beyond rendering the rows and default link behavior — do NOT add
  checkboxes (that's the sibling css-table-14/15 machinery).
- **Icons:** none — the source uses no icon font (no icomoon, no glyph
  `.more` icon — the Details cell is a plain text link).
- **Fonts:** Roboto — load **Google Fonts `<link>` (300, 400; 500 for the
  h2)** in `index.html` (the preview self-hosts Roboto 300/400 via
  @font-face woff2; weights used: 300 = body + table cells + sub-blurb,
  400 = base reboot fallback, 500 = h2 per the reboot block).
- **Assets:** none — the source page has no images. No picsum needed.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/css-table-16.jpg
  (AVIF data despite the .jpg extension — HTTP 200, 24,517 bytes;
  visually analyzed 2026-09-30 after AVIF→PNG conversion; matches the
  live preview — dark charcoal-purple page, white "Table #6" heading,
  uppercase white header labels, faint gray rows, one row shown hovered
  with white text + yellow name/DETAILS links).
- **TEMPLATES.md:** "## Table (25)" section, line 2875
  (`- [ ] **Css Table 16**`). Slug `css-table-16` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "nightgrid" collides with nothing in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content (verified
  2026-09-30 — zero hits across all pools; fits the sibling naming idiom
  gridline / gridspan / rowcard / rowglow / gridpane).

## Design tokens

(extracted from the live preview stylesheet `css/style.css` and verified
against the screenshot; CSS values are canonical)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Google Fonts 300/400 (500 for heading); body 16px/**300**/1.5 |
| Page background | `#3c373e` | `body` background-color — **DARK PLUM-CHARCOAL page** (THE signature; every sibling is white or light gray — never copy a light background here) |
| Heading | `#fff`, 20px, weight 500 | h2 overrides: `font-size: 20px; color: #fff` (white heading on the dark page); reboot supplies weight 500, line-height 1.2 |
| Heading margin | `margin-bottom: 3rem` (`.cl-mb-5`) | h2 → table gap |
| Table header labels | 11px, `text-transform: uppercase`, `letter-spacing: .2rem`, **color `#fff`**, `padding-bottom: 30px` | `.custom-table thead tr, .custom-table thead th` → `border-top: none; border-bottom: none !important` — header sits DIRECTLY on the dark page (white labels, borderless) |
| Table body text | `#777`, `font-weight: 300` | `.custom-table tbody th, .custom-table tbody td` — faint gray on the dark ground |
| Body cell padding | 20px top/bottom + 0.75rem horizontal, `vertical-align: top`, `border: none` | same rule block; cells carry `transition: .3s all ease` |
| Occupation sub-blurb | `rgba(255,255,255,0.3)`, `font-weight: 300`, 80% font-size | `.custom-table tbody ... small` — `cl-d-block` (`display: block !important`); "Far far away, behind the word mountains" under each occupation |
| Name links (default) | `rgba(255,255,255,0.3)` — **faint WHITE, NOT blue** | `.custom-table tbody td a` — the reboot's `#007bff` is overridden on the dark theme |
| Details links (`.more`) | `rgba(255,255,255,0.3)`, 11px, `font-weight: 900`, `text-transform: uppercase`, `letter-spacing: .2rem` | `.custom-table tbody td .more` — faint uppercase letter-spaced "Details" in the last column |
| Link base | `text-decoration: none !important` (link AND hover), `transition: .3s all ease` | template override on `a, a:hover` — no underlines anywhere |
| Row hover/focus (signature) | `tbody td` color → **`#fff`**; `td a` + `td .more` color → **`#fdd114`** (YELLOW) | `.custom-table tbody tr:hover td, .custom-table tbody tr:focus td` — hovering (or keyboard-focusing) a row turns ALL cell text white and ALL links yellow; the transition is .3s ease |
| Striped odd rows | `rgba(0,0,0,0.05)` background on odd `tbody` rows | `.cl-table-striped tbody tr:nth-of-type(odd)` — subtle darker bands on rows 1/3/5/7; the live DOM table carries the `cl-table-striped` class |
| Container | max-width `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like responsive container) |
| Table | `width: 100%; min-width: 900px` (`.custom-table`); cell `padding: 0.75rem` horizontal + 20px top/bottom; `vertical-align: top`; `border-collapse: collapse`; color `#212529` (overridden per-cell) | NO borders anywhere in the custom table (thead borderless, tbody `border: none`) |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` — horizontal scroll below the 900px min-width |
| Content area | `padding: 7rem 0` | `.content` — generous whitespace above/below the table |
| Row transition | `.3s all ease` | cell color fade on hover + link color fade |

## Section structure (from the live DOM)

The source preview is a SINGLE-VIEW snippet page — one heading + one dark
table. Section order (1:1):

1. **Page shell** — DARK background `#3c373e`, Roboto throughout (body
   weight 300); `.content` wraps everything with `7rem` vertical padding;
   `.cl-container` centers the content (1140px max-width desktop, 15px
   gutters, responsive down to 540px).
2. **Heading** — `<h2 class="cl-mb-5">Table #6</h2>` — 20px, weight 500,
   color `#fff`, 3rem margin-bottom, rendered on the DARK page ABOVE the
   table. (Text may be paraphrased, e.g. "Table #6" kept or "People
   Table" — same kind of short label.)
3. **Responsive wrapper** — `.cl-table-responsive` — `display: block;
   width: 100%; overflow-x: auto` around the table only (NO panel
   wrapper, unlike css-table-15's Gridpane).
4. **Data table (faint rows on the dark page)** —
   - `<table class="cl-table cl-table-striped custom-table">` —
     `min-width: 900px`, `width: 100%`, `border-collapse: collapse`;
     the `cl-table-striped` class applies the odd-row tint.
   - **thead (borderless, WHITE uppercase):** 6 columns — `Order` ·
     `Name` · `Occupation` · `Contact` · `Education` ·
     `` (EMPTY 6th header cell for the Details column); header labels
     at 11px / uppercase / letter-spacing .2rem / color `#fff` /
     `padding-bottom: 30px` (default bold th weight), `scope="col"`;
     `border-top: none`, `border-bottom: none !important`.
   - **tbody:** **7 data rows** (NO spacer rows, NO row-cards, NO
     radius — rows sit directly on the dark page with 20px vertical cell
     padding as the separation); each data row = `td` cells only (the
     source puts a stray `scope="row"` attribute on the first `<tr>` —
     invalid HTML, browsers ignore it; use proper `td`s, no `th[scope=row]`
     needed since there is no row header); cell text `#777` at
     `font-weight: 300`; odd rows (1/3/5/7) get the subtle
     `rgba(0,0,0,0.05)` stripe tint; NO cell borders at all.
   - **Occupation cell:** occupation title + a block-level small blurb
     underneath: "Far far away, behind the word mountains" —
     `rgba(255,255,255,0.3)`, weight 300, 80% size. Same blurb text in
     every row.
   - **Name cell:** anchor link colored `rgba(255,255,255,0.3)` (faint
     white), no underline.
   - **Details cell (6th column):** `<a class="more">Details</a>` —
     11px / weight 900 / uppercase / letter-spacing .2rem /
     `rgba(255,255,255,0.3)`.
   - **Demo data (same KIND of content; paraphrase OK):** 4 unique rows
     DUPLICATED to make 7 (rows 5–7 repeat rows 2–4 in the live DOM):
     4-digit order numbers (1392 / 4616 / 9841 / 9548), person names
     (James Yates / Matthew Wasil / Sampson Murphy / Gaspar Semenov),
     occupations (Web Designer / Graphic Designer / Mobile Dev /
     Illustrator), +CC phone numbers (+63 983 0962 971 / +02 020 3994 929
     / +01 352 1125 0192 / +92 020 3994 929), education (NY University /
     London College / Senior High / College).
5. **Hover/focus row treatment (signature, CSS-only)** — on
   `tbody tr:hover` (and `:focus`), every cell's text color transitions
   to `#fff` and every link (name + Details) transitions to `#fdd114`
   over `.3s all ease`. No React state required — pure CSS hover. The
   screenshot shows row 3 (9841, Sampson Murphy) in this hovered state:
   white text + yellow links.
6. **Component Dock attribution footer** — the source snippet page has
   NO footer, but the monorepo mandates that every template's footer
   links `https://www.componentdock.com/` (branded "Component Dock").
   Add a MINIMAL attribution line (e.g. "Made with Component Dock" →
   https://www.componentdock.com/) below the table area. Zero ColorLib
   references anywhere in the app.

## Sibling context (for implementers)

This is the sixth "CSS Table" variant prepped in this monorepo; the
sources are near-identical snippet pages — do NOT copy tokens across:

- **Gridline** (ColorLib `css-table-11`, "Table #1"): WHITE page,
  borderless header, plain `#dee2e6` row separators, NO hover tint, NO
  sub-blurb.
- **Rowglow** (ColorLib `css-table-12`, "Table #2"): light-GRAY page
  `#efefef`, rows separated by whitespace; signature = rows turn fully
  WHITE on hover (no radius, no shadow).
- **Gridspan** (ColorLib `css-table-13`, "Table #3"): white page,
  `#dee2e6` separators, blue-tinted hover/active rows with 1px
  `#007bff` hairlines, `#b3b3b3` sub-blurb.
- **Rowcard** (ColorLib `css-table-14`, "Table #4"): gray page
  `#efefef`, WHITE rounded row-cards (radius 7px) separated by 10px
  transparent gaps, hover shadow lift, blue name links; checked state
  visible ONLY on the checkbox (no `.active` rule).
- **Gridpane** (ColorLib `css-table-15`, "Table #5"): WHITE page +
  rounded GRAY panel `#efefef` wrapping the table, uppercase 12px
  letter-spaced header labels on the gray, white row-cards with gaps,
  checked rows dim to `opacity: .4`.
- **Nightgrid** (this spec, ColorLib `css-table-16`, "Table #6"): the
  ONLY DARK variant — plum-charcoal page `#3c373e` with white uppercase
  11px/.2rem header labels sitting directly on the dark ground, faint
  `#777` cells, faint-white links (NOT blue), `rgba(0,0,0,0.05)` stripe
  tint on odd rows, and the **hover signature: cell text → `#fff`, links
  → `#fdd114` yellow**. No checkboxes, no panel, no row-cards, no
  borders, no JS. Distinguish from Rowglow by the DARK page + yellow
  hover links (Rowglow: light gray page, white row fill on hover).

## Requirements

### Requirement: Page shell and heading render

The system SHALL render a dark plum-charcoal page shell with Roboto
typography and a short white h2 heading above the table.

#### Scenario: Shell renders

- **GIVEN** the user visits the Nightgrid home page
- **THEN** the page background SHALL be `#3c373e` (dark plum-charcoal)
- **AND** the font family SHALL be Roboto (Google Fonts weights 300, 400,
  500 loaded)
- **AND** the body font-weight SHALL be 300
- **AND** the content area SHALL have about 7rem vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side
  padding; 540/720/960px at smaller breakpoints) SHALL hold the page
  content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #6" (or a paraphrase of the same
  short label) SHALL display at font-size 20px, font-weight 500,
  color `#fff`
- **AND** it SHALL have about 3rem margin-bottom above the table
- **AND** it SHALL render on the dark page background (white text on
  `#3c373e`)

### Requirement: Data table renders with faint rows on the dark page

The system SHALL render a six-column borderless data table whose body
cells read as faint gray text on the dark page, with white uppercase
header labels.

#### Scenario: Table wrapper and base

- **GIVEN** the page shell is visible
- **THEN** a responsive wrapper (display block, overflow-x auto) SHALL
  hold a table with width 100% and min-width 900px
- **AND** the table SHALL use `border-collapse: collapse`
- **AND** NO cell borders SHALL be rendered anywhere in the table
  (thead borderless, tbody cells `border: none`)

#### Scenario: Header labels render

- **GIVEN** the table is visible
- **THEN** the header row SHALL list six columns: "Order", "Name",
  "Occupation", "Contact", "Education", and an EMPTY sixth header cell
  (the Details column has no label)
- **AND** each header cell SHALL use `scope="col"`
- **AND** the header labels SHALL render at font-size 11px, text-transform
  uppercase, letter-spacing .2rem, color `#fff`
- **AND** the header cells SHALL have `padding-bottom: 30px` and NO top
  or bottom border

#### Scenario: Body rows render faint on the dark page

- **GIVEN** the table is visible
- **THEN** seven body data rows SHALL display (the source duplicates its
  4 unique rows to fill 7 — rows 5–7 repeat rows 2–4; same KIND of
  demo data)
- **AND** each row SHALL contain six `td` cells: order number, name
  (link), occupation (+ sub-blurb), contact number, education, details
  (link)
- **AND** body cell text SHALL be `#777` at font-weight 300
- **AND** cell padding SHALL be 20px vertical + 0.75rem horizontal with
  vertical-align top
- **AND** rows SHALL sit directly on the dark page with NO row-cards,
  NO border-radius, NO spacer rows, and NO hover shadow

#### Scenario: Odd rows carry the subtle stripe tint

- **GIVEN** the table is visible
- **THEN** odd-numbered body rows (1st, 3rd, 5th, 7th) SHALL have a
  background tint of `rgba(0,0,0,0.05)` (subtle darker bands)
- **AND** even-numbered rows SHALL have NO background tint (page color
  shows through)

#### Scenario: Occupation sub-blurb renders

- **GIVEN** the body rows render
- **THEN** each Occupation cell SHALL contain the occupation title and,
  beneath it, a block-level small blurb in `rgba(255,255,255,0.3)` at
  font-weight 300 and 80% font-size
- **AND** the blurb text SHALL be the same kind of placeholder sentence in
  every row (e.g. "Far far away, behind the word mountains" or a
  paraphrase of equal length)

#### Scenario: Default links render faint white

- **GIVEN** the body rows render
- **THEN** each Name cell SHALL be an anchor link colored
  `rgba(255,255,255,0.3)` (faint white — NOT blue) with no underline
- **AND** each Details cell (sixth column) SHALL be an anchor link with
  the `.more` treatment: text "Details" (or a same-kind label), 11px,
  font-weight 900, uppercase, letter-spacing .2rem, color
  `rgba(255,255,255,0.3)`, no underline
- **AND** all links SHALL have a 0.3s ease color transition and never
  show an underline (default OR hover)

#### Scenario: Content fidelity

- **GIVEN** the body rows render
- **THEN** the rows SHALL contain the same KIND of demo data as the
  source: 4-digit order ids, person names, design/dev occupations,
  +CC-formatted phone numbers, school names, and a Details link per row
- **AND** exact strings MAY be paraphrased while keeping the same
  structure
- **AND** the duplicate-row pattern (rows 5–7 repeating 2–4) MAY be
  kept or reduced — same KIND either way

### Requirement: Row hover/focus turns text white and links yellow

The system SHALL restyle a hovered (or keyboard-focused) row so all cell
text turns white and all links turn yellow — the signature treatment of
this template.

#### Scenario: Hovered row turns white + yellow

- **GIVEN** the table is visible
- **WHEN** the user hovers over a body row
- **THEN** that row's cell text color SHALL transition to `#fff`
- **AND** that row's links (Name + Details) SHALL transition to `#fdd114`
  (yellow)
- **AND** the transition SHALL run over about 0.3s with an ease curve
- **WHEN** the pointer leaves the row
- **THEN** the row SHALL return to its default colors (`#777` text,
  `rgba(255,255,255,0.3)` links)
- **AND** hovering SHALL NOT change any row's stripe tint or layout

#### Scenario: Keyboard focus matches hover

- **GIVEN** the table is visible
- **WHEN** a link inside a row receives keyboard focus
- **THEN** that row SHALL render in the same hover treatment (white
  cell text, yellow links)
- **AND** the focused link SHALL remain reachable by Tab in document
  order

### Requirement: Responsive table behavior

The system SHALL keep the dark table usable on narrow viewports via
horizontal scrolling inside the wrapper.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (900px)
- **THEN** the table SHALL scroll horizontally within its wrapper
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
  headers (the source's stray `scope="row"` on `<tr>` is invalid HTML —
  omit it; body cells are plain `td`s)
- **AND** the heading hierarchy SHALL contain a single h2
- **AND** all interactive elements (links) SHALL be keyboard reachable
  with visible focus states (the row hover/focus treatment applies)
- **AND** the demo data SHALL render as real table content (not
  presentational divs)

## Verification checklist

- [ ] Roboto 300/400/500 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-page: #3c373e`, `--color-heading: #fff`,
      `--color-muted: #777`, `--color-faint: rgba(255,255,255,0.3)`,
      `--color-highlight: #fdd114`
- [ ] Page shell: `#3c373e` background, Roboto weight 300, content area
      `7rem` vertical padding, centered container max-width 1140px /
      15px gutters (540/720/960px breakpoints)
- [ ] Heading "Table #6" (or paraphrase) — 20px / weight 500 / `#fff`,
      3rem margin-bottom, on the dark page above the table
- [ ] Responsive wrapper (`overflow-x-auto`) around the table;
      `min-width: 900px`; `border-collapse: collapse`; NO cell borders
- [ ] Header labels: 11px / uppercase / letter-spacing .2rem / `#fff`,
      `padding-bottom: 30px`, borderless thead, 6 columns (Order, Name,
      Occupation, Contact, Education, EMPTY 6th cell), `scope="col"`
- [ ] Seven body rows; cell text `#777` at weight 300; 20px vertical +
      0.75rem horizontal cell padding; NO row-cards, radius, gaps, or
      hover shadows
- [ ] Odd rows tinted `rgba(0,0,0,0.05)` (stripe class on the table);
      even rows untinted
- [ ] Occupation cells include the block-level `rgba(255,255,255,0.3)` /
      300 / 80% sub-blurb
- [ ] Name links: `rgba(255,255,255,0.3)`, no underline; Details links
      (`.more`): 11px / 900 / uppercase / letter-spacing .2rem /
      `rgba(255,255,255,0.3)`, no underline; 0.3s ease transitions
- [ ] Row hover/focus: cell text → `#fff`, links → `#fdd114` (yellow),
      ~0.3s ease; leaves revert cleanly; hover does not alter stripe
      tint or layout
- [ ] Responsive: horizontal scroll below 900px; layout intact
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] NO checkboxes / NO snippet JS reimplementation (source loads zero
      scripts — hover is pure CSS)
- [ ] 100% test coverage via `scripts/verify-app.sh nightgrid`; PR
      `feat/template-nightgrid` with source slug + preview URL (the
      `bootstrap/` path) + tokens in the description
