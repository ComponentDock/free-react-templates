# Template: Statusline (Table)

## Purpose

Statusline is a member-status data-table showcase page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Table 05" template (source:
https://colorlib.com/wp/template/table-05/ — a single-page snippet:
light blue-gray page `#f8f9fd`, one centered h2 heading "Table #05",
one wide 5-column user-status table — white card-style rows on the
blue-gray canvas, each row a checkbox + 50px circular avatar + email
("markotto@email.com" over a small gray "Added: 01/03/2020" line) +
username + a colored status pill (green "Active" / amber "Waiting for
Resassignment") + a small red × remove button; thead labels Email /
Username / Status in gray under a 4px lavender `#eceffa` underline;
teal `#40bfc1` checkbox accent; no navbar, no JS, no framework), built
under a DIFFERENT name (Statusline — the status-pill lines of the
member table; single lowercase word), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `table-05`
- **Source:** https://colorlib.com/wp/template/table-05/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-05/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-05/**
  (HTTP 200, 8,847 bytes, HTML `<title>Table 05</title>`). Implementers
  must use the `bootstrap/` path — do not re-derive the slug-only URL.
  (Same non-standard layout as css-table-11/12/16, table-01, table-02,
  table-03, table-04 — Gridline, Nightgrid, Gridkit, Rowdeck, Domkit,
  Gridmark.)
- **Preview CSS:** the DOM references `css/style.css?v=de8ec152`
  (relative to the `bootstrap/` preview path). ⚠️ The correct full URL
  is
  **https://preview.colorlib.com/theme/bootstrap/table-05/css/style.css?v=de8ec152**
  — note the `table-05/` segment BEFORE `css/` (resolving the bare
  `bootstrap/css/style.css` path 404s). Verified fetchable at prep time
  (2026-09-30): **HTTP 200, 11,913 bytes**, a single self-contained
  sheet ("Every style this snippet uses, and nothing else. No
  framework, no build step."). **All design tokens in this spec were
  captured directly from that stylesheet — CSS values are canonical;
  implementers do NOT need to re-fetch it.** (Sheet anatomy:
  Bootstrap-reboot `all: revert` block → box-sizing/print shims →
  self-hosted Roboto 400/700 @font-face fallbacks the final cascade
  never uses → `.fa`/`.cl-icon` icon rules → HTML element defaults
  (body reboot font stack, h2 500, table border-collapse collapse) →
  `.cl-container` responsive container → `.cl-row`/`.cl-col-md-*` grid →
  `.cl-table` base + `.cl-table-responsive-xl` → `.cl-alert`/`.cl-close`
  card + dismiss rules → utilities (`.cl-border-bottom-0`,
  `.cl-d-flex`, `.cl-justify-content-center`, `.cl-align-items-center`,
  `.cl-mb-5`, `.cl-pl-3`, `.cl-text-center`) → print rules → final
  override block: Poppins `#f8f9fd` body, 400-weight h2, `.ftco-section`
  7em padding, 28px heading, `.table-wrap` scroll, min-width-1000px
  shadowed table, white-header/4px-`#eceffa`-underline thead, white
  30px cells, status pills, avatars, close spans, custom checkbox
  glyphs → FontAwesome subset @font-face.)
- **Scripts (source):** NONE — the preview page loads ZERO `<script>`
  tags (verified 2026-09-30 on the live DOM). The per-row remove
  buttons carry a legacy `data-dismiss="alert"` attribute but nothing
  listens; on the preview they are dead controls. In the React
  recreation these SHALL be real interactive elements: clicking a
  remove button removes that row from React state (documented
  divergence — the source button is inert only because its snippet
  ships no JS; a functional row-removal demo is the monorepo pattern
  for data-table templates, keeps tests meaningful, and preserves the
  source's visual design exactly).
- **Fonts:** **Poppins** — load Google Fonts `<link>` with weights
  **400, 500, 700** in `index.html`. The final `body` rule sets
  `font-family: "Poppins", Arial, sans-serif` (body 16px /
  line-height 1.8 / weight 400). Weight **500** is required: thead
  header cells and the checkbox labels set font-weight 500 explicitly.
  Weight **700** is the `.cl-close` button chrome (font-size 1.5rem,
  weight 700 — though its visible × span overrides size/color). ⚠️ The
  preview's own head has **NO Google Fonts link** — Poppins is
  declared in CSS but never loaded there (falls back to Arial); the
  only @font-face rules are unreachable Roboto 400/700 + a FontAwesome
  subset. The recreation SHALL load Poppins properly.
- **Assets:** the source page references **5 avatar photos**
  `images/person_1.jpg` … `images/person_5.jpg` (business headshots),
  rendered as 50×50px circular crops (`background-size: cover;
  background-position: center`). The recreation SHALL NOT copy them —
  use deterministic placeholders:
  `https://picsum.photos/seed/statusline-<n>/100/100` (n = 1…5;
  100px sources for retina, displayed at 50×50), same circular
  treatment.
- **Icons:** the source uses Font Awesome `fa-close` (the × remove
  glyph, rendered 12px `#dc3545` via the inner span) and Font Awesome
  `fa-square-o`/`fa-check-square` checkbox glyphs (20px,
  `rgba(0,0,0,0.1)` unchecked / `#40bfc1` checked, via `.checkmark:after`
  content codes `\f0c8`/`\f14a`). The recreation uses `lucide-react`
  `X` for remove, and `Square`/`SquareCheck` (or a custom styled
  control) at those tokens for checkboxes.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-05.jpg
  (served as AVIF despite the .jpg extension, 1200×972; visually
  analyzed 2026-09-30 after conversion; matches the live preview:
  light blue-gray page, centered "Table #05" heading, white table card
  with soft shadow, gray Email/Username/Status header labels under a
  faint lavender underline, white rows with subtle gaps, teal checked
  checkbox on row 1, light-gray unchecked squares on rows 2–5, circular
  avatars, green/amber status pills with leading dots, small red × per
  row).
- **TEMPLATES.md:** "## Table (25)" section (line 2868) — line 2888
  (`- [ ] **Table 05**`). Slug `table-05` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "statusline" collides with nothing in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or any bold name in
  TEMPLATES.md (case/space-insensitive check verified 2026-09-30);
  reads naturally for a table of status-pill lines. (The ColorLib
  family contains a template literally named "Pulse" — avoided the
  pulse* namespace for that reason.)

## Design tokens

(Canonical values captured 2026-09-30 directly from the live
stylesheet `https://preview.colorlib.com/theme/bootstrap/table-05/css/style.css?v=de8ec152`
— HTTP 200, 11,913 bytes. CSS values are canonical over the screenshot.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link **400 + 500 + 700**. Roboto @font-face rules exist as unused fallbacks — ignore them |
| Body text | font-size 16px, line-height 1.8, font-weight 400, color `gray` (= #808080), background **`#f8f9fd`** | the **light blue-gray canvas** is back for this entry (Gridmark/table-04 was pure white — sibling values differ) |
| Heading h2/h2.h2 | Poppins, font-weight **400**, line-height 1.5, color `#000` | final rule overrides the reboot's 500 (same gotcha as css-table-12 / table-01…04); computed h2 = 400 |
| Heading `.heading-section` | font-size **28px**, color `#000`, centered | single h2 "Table #05" |
| Heading→table gap | `.cl-mb-5 { margin-bottom: 3rem !important }` on the centered heading wrapper column | `.cl-col-md-6` (50% width at ≥768px, text centered) |
| Section padding | `.ftco-section { padding: 7em 0 }` | generous whitespace above/below content |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Table wrapper | `.table-wrap { overflow-x: scroll }` | horizontal scroll below the min-width |
| Table `.cl-table` (final) | `width: 100%; min-width: 1000px !important`; color `#212529`; **box-shadow `0px 5px 12px -12px rgba(0,0,0,0.29)`**; margin-bottom 1rem | border-collapse **collapse** (reboot default); table background is effectively white via its cells |
| Header cells `thead th` | **border none**, padding **30px**, font-size **13px**, font-weight **500**, color **`gray`** (#808080), vertical-align bottom | ⚠️ **13px** — smaller than body cells (14px); gray labels on white |
| Header row `thead tr` | background **`#fff`**, **border-bottom 4px solid `#eceffa`** (lavender) | the signature header underline; NO colored header bar (unlike Domkit's purple / Rowdeck's charcoal) |
| Body row quirk | `.cl-table tbody tr { margin-bottom: 10px; border-bottom: 4px solid #f8f9fd }` | the 4px separator is the **same color as the page** — reads as a gap between white rows |
| Body row last-child | `border-bottom: 0` | final row has no separator |
| Body `tbody td` | **border none**, padding **30px**, font-size **14px**, background **`#fff`**, vertical-align middle | cells inherit table color `#212529` |
| Row card `tr.cl-alert` | position relative; padding `0.75rem 1.25rem`; margin-bottom 1rem; border `1px solid transparent`; border-radius `0.25rem` | every body row carries the alert-card rule; with collapse + white cells the rounded corners are visually subtle — the screenshot shows white bands + faint gaps; match the screenshot |
| Last-row override | `.cl-border-bottom-0 { border-bottom: 0 !important }` applied to all 5 cells of row 5 | source marks the final row explicitly |
| User cell | `td.cl-d-flex.cl-align-items-center` — flex row, vertically centered | avatar + `.email` block, 1rem gap |
| Avatar `.img` | **50×50px**, border-radius **50%**, `background-size: cover; background-position: center` | source `images/person_1…5.jpg` → `picsum.photos/seed/statusline-<n>/100/100` |
| Email line `.email span:first-child` | display block; color inherits `#212529`; 16px body size; weight 400 | "markotto@email.com" etc. |
| Added-date `.email span:last-child` | display block; font-size **12px**; color **`rgba(0,0,0,0.3)`** | "Added: 01/03/2020" — same date on all 5 rows in the source |
| Username cell (col 3) | plain td text, 14px, color `#212529` | "Markotto89" / "Jacobthornton" / "Larry_bird" / "Johndoe1990" / "Garybird_2020" |
| Status pill base `td.status span` | position relative; **border-radius 30px**; padding **4px 10px 4px 25px** | pill shape; left padding reserves space for the dot |
| Status dot `td.status span:after` | position absolute; top **9px**; left **10px**; **10×10px**; border-radius **50%**; `content: ''` | leading status dot |
| Status `.cl-active` | background **`#cff6dd`** (light green); color **`#1fa750`** (green); dot background **`#23bd5a`** | "Active" — rows 1, 3, 4 |
| Status `.waiting` | background **`#fdf5dd`** (light amber); color **`#cfa00c`** (dark amber); dot background **`#f2be1d`** (amber) | "Waiting for Resassignment" — rows 2, 5 (source typo, double-s; keep or paraphrase, same status semantics) |
| Remove button `.cl-close` | float right; font-size **1.5rem**; font-weight **700**; color `#000`; text-shadow `0 1px 0 #fff`; opacity **.5**; hover/focus opacity **.75** | button resets: padding 0, background transparent, border 0, appearance none |
| Remove × span | font-size **12px**; color **`#dc3545`** (red); `aria-hidden="true"` | the SPAN wins visually — small red ×, not a large black one; lucide `X` at 12px `#dc3545` |
| Remove button semantics | source: `<button type="button" class="cl-close" data-dismiss="alert" aria-label="Close">` | keep `aria-label` (accessible name); `data-dismiss` is inert legacy — React state removal instead |
| Checkbox label `.checkbox-wrap` | display block; position relative; cursor pointer; font-size 16px; font-weight **500**; user-select none | wraps a REAL input |
| Checkbox input | position absolute; **opacity 0**; height 0; width 0 (visually hidden but focusable — NOT display:none) | keyboard-testable; keeps native checked semantics |
| Checkbox glyph `.checkmark:after` | content FontAwesome `\f0c8` (empty square); color **`rgba(0,0,0,0.1)`**; font-size **20px**; margin-top **-14px**; transition **0.3s** (`prefers-reduced-motion: reduce` → none) | unchecked = light-gray square |
| Checkbox checked | content `\f14a` (check-square); color **`#40bfc1`** (`.checkbox-primary`) | teal accent — the page's only interactive accent |
| Default checkbox state | **row 1 `checked`; rows 2–5 unchecked** (verified in live DOM) | replicate exactly |
| Responsive <1200px | `.cl-table-responsive-xl { display: block; width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch }` | table becomes a scroll block below xl |
| Row data (canonical) | 1. markotto@email.com · Added: 01/03/2020 · Markotto89 · **Active** (checked) — 2. jacobthornton@email.com · Added: 01/03/2020 · Jacobthornton · **Waiting for Resassignment** — 3. larrybird@email.com · Added: 01/03/2020 · Larry_bird · **Active** — 4. johndoe@email.com · Added: 01/03/2020 · Johndoe1990 · **Active** — 5. garybird@email.com · Added: 01/03/2020 · Garybird_2020 · **Waiting for Resassignment** | same KIND of content may be paraphrased; keep structure (email + added-date + username + status) |
| Table columns (thead) | 5: `[checkbox]` · `Email` · `Username` · `Status` · `[remove]` — th[0] and th[4] are EMPTY in the source | label only the middle 3 with `scope="col"` |
| Print rules | thead `table-header-group`, tr/img `break-inside: avoid`, body/container `min-width: 992px`, cells forced white, `@page { size: a3 }` | minor; not required for parity |

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a light blue-gray page shell (background
`#f8f9fd`, Poppins everywhere with body text at font-weight 400,
line-height 1.8, color gray, content area with about 7em vertical
padding) centered in a responsive container (max-width 1140px at
desktop with 15px side padding; 540/720/960px at smaller breakpoints),
with a single h2 heading "Table #05" at font-size 28px, font-weight
400, color `#000`, centered, and about 3rem margin-bottom.

#### Scenario: Shell renders

- **GIVEN** the user visits the Statusline home page
- **THEN** the page background is `#f8f9fd` (light blue-gray — NOT
  Gridmark's pure white; siblings differ per entry)
- **AND** the font family is Poppins (Google Fonts weights 400/500/700
  loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has about 7em vertical padding

#### Scenario: Heading renders

- **GIVEN** the page shell is rendered
- **THEN** exactly one h2 heading reads "Table #05"
- **AND** it renders at font-size 28px, font-weight 400 (NOT the
  reboot's 500), color `#000`, horizontally centered
- **AND** its wrapper column carries about 3rem margin-bottom

### Requirement: Table wrapper and table shell render

The template SHALL render the table inside a horizontally scrollable
wrapper; the table SHALL be width 100% with min-width 1000px, color
`#212529`, box-shadow `0px 5px 12px -12px rgba(0,0,0,0.29)`,
border-collapse collapse, and effective white background (via white
cells).

#### Scenario: Table shell renders

- **GIVEN** the heading area is rendered
- **THEN** a wrapper with horizontal overflow exists below the table
- **AND** the table has min-width 1000px and the soft drop shadow
- **AND** the table content color is `#212529`

### Requirement: Header row renders with the source column structure

The table SHALL render a thead row of FIVE th cells: an empty first
column (checkbox), then labeled columns "Email", "Username", "Status",
then an empty fifth column (remove). Header cells SHALL render at
font-size 13px, font-weight 500, color gray, padding 30px, no borders,
vertical-align bottom; the header row SHALL carry a white background
and a 4px solid `#eceffa` bottom border. Labeled headers SHALL use
`scope="col"`.

#### Scenario: Header row renders

- **GIVEN** the table shell is rendered
- **THEN** the thead contains five th cells in order: empty, "Email",
  "Username", "Status", empty
- **AND** header text renders at 13px / weight 500 / gray on white
- **AND** the header row has a 4px `#eceffa` bottom border and no
  other borders
- **AND** "Email", "Username", and "Status" carry scope="col"

### Requirement: Body rows render the canonical member data

The table SHALL render exactly 5 body rows, each with 5 cells in
order: checkbox cell, user cell (avatar + email + added-date), username
cell, status pill cell, remove-button cell. The canonical data is:

1. markotto@email.com · Added: 01/03/2020 · Markotto89 · Active
   (checkbox default-checked)
2. jacobthornton@email.com · Added: 01/03/2020 · Jacobthornton ·
   Waiting for Resassignment
3. larrybird@email.com · Added: 01/03/2020 · Larry_bird · Active
4. johndoe@email.com · Added: 01/03/2020 · Johndoe1990 · Active
5. garybird@email.com · Added: 01/03/2020 · Garybird_2020 · Waiting
   for Resassignment

Copy MAY be paraphrased but SHALL keep the same kind of content (email
address + added-date + username + status label); row 5's cells SHALL
carry no bottom border; body cells SHALL render at 14px on white with
30px padding, vertical middle, no borders.

#### Scenario: Rows render

- **GIVEN** the table is rendered
- **THEN** tbody contains 5 rows with the canonical emails, dates,
  usernames, and statuses above (or same-kind paraphrases)
- **AND** each row has 5 cells in the source order
- **AND** cells render at 14px, background #fff, padding 30px,
  vertical middle, no borders
- **AND** the last row's cells have no bottom border

### Requirement: User cell shows avatar and stacked email/date

Each user cell SHALL be a vertically-centered flex row containing a
50×50px circular avatar (background-image cover, center) and a stacked
text block: the email address at body size in `#212529`, and below it
the "Added: …" date at 12px in `rgba(0,0,0,0.3)`. Avatars SHALL use
deterministic placeholder images (picsum seed statusline-<n>), never
source assets.

#### Scenario: User cell renders

- **GIVEN** a body row is rendered
- **THEN** the user cell shows a 50px circular avatar image
- **AND** the email line renders above the added-date line
- **AND** the added-date renders at 12px in rgba(0,0,0,0.3)
- **AND** avatars come from picsum.photos seeds (statusline-1…5), not
  copied source images

### Requirement: Status pills render with source colors and dot

Each status cell SHALL render a pill: border-radius 30px, padding
4px 10px 4px 25px, with a 10×10px circular dot at top 9px / left 10px.
"Active" pills SHALL use background `#cff6dd`, text `#1fa750`, dot
`#23bd5a`; "Waiting for Resassignment" pills SHALL use background
`#fdf5dd`, text `#cfa00c`, dot `#f2be1d`.

#### Scenario: Status pills render

- **GIVEN** the body rows are rendered
- **THEN** Active pills show green text on light green with a green
  dot (rows 1, 3, 4 — or their paraphrased equivalents)
- **AND** waiting pills show dark amber text on light amber with an
  amber dot (rows 2, 5)
- **AND** every pill is rounded (30px) with the leading dot

### Requirement: Checkboxes are real and toggle the teal glyph

Each row's checkbox SHALL be a real, focusable `<input type="checkbox">`
(visually hidden via opacity 0 — not display:none) inside a clickable
label, with a 20px square glyph: unchecked light gray
`rgba(0,0,0,0.1)`, checked teal `#40bfc1`. Row 1 SHALL default to
checked; rows 2–5 unchecked. Toggling SHALL update the glyph with a
0.3s transition that disables under `prefers-reduced-motion: reduce`.
Each checkbox SHALL have an accessible name identifying its row member
(the source label has no text — the recreation adds one).

#### Scenario: Checkbox default state renders

- **GIVEN** the page loads
- **THEN** row 1's checkbox is checked with the teal glyph
- **AND** rows 2–5 checkboxes are unchecked with light-gray glyphs
- **AND** every checkbox is a real input, keyboard-focusable

#### Scenario: Checkbox toggles

- **GIVEN** a user clicks or keyboard-toggles an unchecked checkbox
- **THEN** its glyph switches to the teal check-square
- **AND** toggling back restores the light-gray empty square
- **AND** the transition is disabled under prefers-reduced-motion

### Requirement: Remove buttons remove rows

Each row SHALL end with a remove button (source: `.cl-close` with
aria-label "Close") rendering a small 12px `#dc3545` × icon
(lucide X), right-aligned, with the button chrome at opacity .5
hovering/focusing to .75. Clicking the button SHALL remove that row
from the table via React state (documented divergence — the source
button is inert only because its snippet ships no JS). The button
SHALL be keyboard-reachable with its accessible name preserved.

#### Scenario: Remove button renders

- **GIVEN** a body row is rendered
- **THEN** its last cell contains a button with an accessible name
- **AND** the × icon renders at 12px in #dc3545
- **AND** the button chrome sits at opacity .5

#### Scenario: Remove button removes the row

- **GIVEN** the table shows 5 rows
- **WHEN** the user activates a row's remove button
- **THEN** that row disappears from the table
- **AND** the remaining rows keep their data, pills, and checkboxes

### Requirement: Row card styling and separators

Body rows SHALL render as white bands on the `#f8f9fd` page: cells
white with 30px padding; a 4px `#f8f9fd` bottom separator between
rows (same color as the page — reads as a gap) plus about 10px row
margin; the last row SHALL have no separator. The source's
`tr.cl-alert` rule (transparent 1px border, 0.25rem radius, 0.75rem
1.25rem padding) SHALL be approximated so the rendered result matches
the screenshot (white rounded-ish bands with faint gaps) — exact
border-collapse rendering of tr radius is browser-dependent; visual
parity with the screenshot is the acceptance bar.

#### Scenario: Row separators render

- **GIVEN** multiple rows are rendered
- **THEN** rows read as separate white bands with faint gaps between
  them
- **AND** the last row has no bottom separator
- **AND** the overall look matches the reference screenshot

### Requirement: Horizontal-scroll behavior below the min-width

The table SHALL remain horizontally scrollable within its wrapper
below the 1000px min-width (and the table itself becomes a scroll
block below the xl breakpoint per the source's responsive rule) while
the rest of the page layout stays intact.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (1000px)
- **THEN** the table scrolls horizontally within its wrapper
- **AND** the page layout (heading, container padding, footer) stays
  intact
- **AND** no horizontal overflow escapes the wrapper

### Requirement: Component Dock attribution footer

The template SHALL render a minimal footer attribution line linking
https://www.componentdock.com/ branded "Component Dock", and NO
ColorLib attribution or links anywhere in the page.

#### Scenario: Attribution present

- **GIVEN** the page footer area is rendered
- **THEN** a minimal attribution line links https://www.componentdock.com/
  branded "Component Dock"
- **AND** NO ColorLib attribution or links appear anywhere in the page

### Requirement: Accessibility (global semantics)

The template SHALL use real table semantics (thead/tbody; th
scope="col" on the three labeled columns) and a correct heading
hierarchy (one h2). Checkboxes SHALL have accessible names identifying
their row member; remove buttons SHALL keep their accessible names;
the status pills render as real text (not images).

#### Scenario: Table and page semantics

- **GIVEN** the page is rendered
- **THEN** the table uses thead/tbody with th scope="col" on Email,
  Username, and Status
- **AND** the heading hierarchy contains one h2
- **AND** the member data renders as real table content (not
  presentational divs)
- **AND** every checkbox and remove button is keyboard-reachable with
  an accessible name
- **AND** gray header labels (#808080 on #fff) and status pill text
  are legible at their sizes

## Verification checklist

- [ ] Poppins 400/500/700 loaded via Google Fonts `<link>` in
      `index.html`
- [ ] `@theme` tokens: `--color-page: #f8f9fd`, `--color-ink: #212529`,
      `--color-heading: #000`, `--color-line: #eceffa`,
      `--color-active-bg: #cff6dd`, `--color-active-text: #1fa750`,
      `--color-active-dot: #23bd5a`, `--color-wait-bg: #fdf5dd`,
      `--color-wait-text: #cfa00c`, `--color-wait-dot: #f2be1d`,
      `--color-danger: #dc3545`, `--color-accent: #40bfc1`,
      `--color-subtext: rgba(0,0,0,0.3)`,
      `--color-uncheck: rgba(0,0,0,0.1)`,
      `--color-shadow: rgba(0,0,0,0.29)`
- [ ] Page shell: `#f8f9fd` background, body weight 400 / line-height
      1.8 / color gray, content area `7em` vertical padding, centered
      container max-width 1140px / 15px gutters (540/720/960px
      breakpoints)
- [ ] Heading "Table #05" — 28px / font-weight 400 / `#000`, centered,
      3rem margin-bottom on the wrapper column
- [ ] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      color #212529, shadow `0 5px 12px -12px rgba(0,0,0,0.29)`,
      border-collapse collapse; thead: 5 th (empty · Email · Username ·
      Status · empty), 13px / weight 500 / gray, 30px padding, no
      borders, white bg, 4px `#eceffa` bottom border, scope="col" on
      labeled columns
- [ ] Body: 5 rows × 5 cells with canonical data (row 1 checked;
      "Waiting for Resassignment" ×2; "Added: 01/03/2020" ×5); cells
      14px / white / 30px padding / vertical middle / no borders;
      4px `#f8f9fd` row separators + ~10px margin; last row no bottom
      border
- [ ] User cells: 50×50 circular picsum avatars (seed
      statusline-1…5), email line above 12px `rgba(0,0,0,0.3)` date
      line, flex vertically centered
- [ ] Status pills: Active `#cff6dd`/`#1fa750`/dot `#23bd5a`; waiting
      `#fdf5dd`/`#cfa00c`/dot `#f2be1d`; radius 30px, padding
      4px 10px 4px 25px, 10px dot at top 9px / left 10px
- [ ] Checkboxes: real focusable inputs (opacity-0, not
      display-none), 20px glyphs (unchecked `rgba(0,0,0,0.1)`, checked
      `#40bfc1`), row 1 default-checked, accessible names per row,
      0.3s transition with reduced-motion off
- [ ] Remove buttons: per-row, accessible name, lucide X 12px
      `#dc3545`, chrome opacity .5 → .75 hover/focus, clicking removes
      the row via React state
- [ ] Responsive: table scrolls in wrapper below 1000px; layout
      intact at narrow viewports
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references
      anywhere in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh statusline`; PR
      `feat/template-statusline` with source slug + preview URL +
      tokens in the description
