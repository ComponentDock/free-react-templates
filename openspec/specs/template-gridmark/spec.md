# Template: Gridmark (Table)

## Purpose

Gridmark is a weekly class-schedule data-table showcase page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Table 04" template (source:
https://colorlib.com/wp/template/table-04/ — a single-page snippet: pure
WHITE page, one centered h2 heading "Table #04", one centered h4
subheading "Class Schedule Table", then one wide 7-column class-schedule
table — borderless BLACK day-of-week header (Monday…Sunday, bold 14px),
five body rows whose 35 cells alternate between a faint gray × "no class"
mark and a circular fitness-photo class card ("Yoga training / 7 am-6 am"
link in salmon pink), a bordered month-navigation footer row ("←
September" … "November →"), salmon-pink `#ffafb0` accent links, white
cells with light-gray `#dee2e6` 1px grid borders and whitesmoke hover —
no navbar, no colored header bar, no framework, no JavaScript), built
under a DIFFERENT name (Gridmark — the schedule grid you mark classes on;
single lowercase word), per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `table-04`
- **Source:** https://colorlib.com/wp/template/table-04/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-04/ returns **HTTP 404
  "Not Found"** (9-byte body; also tried without trailing slash and as
  `table04/` — all 404). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-04/**
  (HTTP 200, 18,520 bytes, HTML `<title>Table 04</title>`). Implementers
  must use the `bootstrap/` path — do not re-derive the slug-only URL.
  (Same non-standard layout as css-table-11/12/16, table-01, table-02,
  table-03 — Gridline, Nightgrid, Gridkit, Rowdeck, Domkit.)
- **Preview CSS:** the DOM references `css/style.css?v=19583881`
  (relative to the `bootstrap/` preview path). ⚠️ At prep time
  (2026-09-30) a direct curl fetch of that stylesheet URL returned
  **HTTP 404 "Not Found"** even though the preview page itself returned
  200 — the same CDN blocking observed on the Table 01/02/03 sheets.
  The design tokens in this spec were captured **authoritatively from the
  live rendered page on 2026-09-30**: a full `document.styleSheets`
  cssRules dump (10,157 chars — reboot revert block, Roboto @font-face
  fallbacks, `.cl-*` utilities, bordered-table rules, final override
  block) plus computed styles on every key element. **CSS values in this
  spec are canonical — implementers do NOT need to re-fetch the
  stylesheet.** (Sheet anatomy: Bootstrap-reboot `all: revert` block →
  self-hosted Roboto 100/300/400/700 @font-face fallbacks that the final
  cascade never uses → `.fa`/`.cl-icon` icon rules → HTML element
  defaults → `.cl-container` Bootstrap-like responsive container →
  `.cl-row`/`.cl-col-md-*` grid → `.cl-table` base + `.cl-table-bordered`
  → utilities (`.cl-rounded-circle`, `.cl-justify-content-center`,
  `.cl-mb-2`/`-4`/`-5`, `.cl-text-center`) → print rules → final
  override block: Poppins white-page body, salmon links, 400-weight
  headings, 7em section padding, min-width-1000px centered table with
  shadow, borderless black thead, 30px body cells with whitesmoke hover,
  90px circular `.img` cards, 12px salmon card links, tfoot month-nav
  links. NOTE: there is **no `thead-primary` and no colored header bar
  on this page** — unlike Table 03.)
- **Scripts (source):** NONE — the preview page loads ZERO `<script>`
  tags (verified 2026-09-30 on the live DOM). Every class-card link and
  both month-navigation links are inert `<a href="#">` anchors. In the
  React recreation these SHALL be real interactive elements (monorepo
  pattern: `packages/ui` Button/ButtonLink or styled `<a>` with the
  tokens below; accessible names; no invented navigation — the source
  links to `#`).
- **Fonts:** **Poppins** — load Google Fonts `<link>` with weights
  **400, 600, 700** in `index.html`. The final `body` rule sets
  `font-family: "Poppins", Arial, sans-serif` (body 16px / line-height
  1.8 / weight 400). Weight **700** is required: thead day cells and
  tfoot month cells render bold (UA default — the snippet never sets
  `th` font-weight). Weight **600** is the class-card "Yoga training"
  strong label. (The preview's self-hosted Roboto 100/300/400/700
  @font-face rules are unreachable fallbacks — ignore them.)
- **Assets:** the source page references **7 background images**
  `images/classes-1.jpg` … `images/classes-7.jpg` — fitness/yoga class
  photos (women training in a gym, pink/neutral tones), rendered as 90×90
  circular crops (`background-size: cover`). The recreation SHALL NOT
  copy them — use deterministic placeholders:
  `https://picsum.photos/seed/gridmark-<n>/180/180` (n = 1…7), same
  circular treatment.
- **Icons:** the source uses Font Awesome `fa-close` (the × "no class"
  mark, 12px, `rgba(0,0,0,0.3)`) and `fa-long-arrow-left`/
  `fa-long-arrow-right` (month-nav arrows, 12px, `#000`). The recreation
  uses `lucide-react` `X`, `ArrowLeft`, `ArrowRight` at those tokens.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-04.jpg
  (served as AVIF despite the .jpg extension, 1200×972; visually
  analyzed 2026-09-30 after conversion; matches the live preview: white
  page, centered "Table #04" heading, centered "Class Schedule Table"
  subheading, bordered 7-column grid with bold black day headers, × marks
  and circular "Yoga training" photo cards in alternating cells, salmon
  "7 am-6 am" times, subtle table shadow).
- **TEMPLATES.md:** "## Table (25)" section (line 2868) — line 2887
  (`- [ ] **Table 04**`). Slug `table-04` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "gridmark" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30; repo-wide grep also clean);
  follows the established grid family (gridkit — the Table 01 sibling,
  gridpane, gridline) and reads naturally for a class-schedule grid of
  marks.

## Design tokens

(Canonical values captured 2026-09-30 from the live preview: full
cssRules dump + computed styles, via the rendered page at
https://preview.colorlib.com/theme/bootstrap/table-04/. CSS values are
canonical — see the stylesheet note in Purpose.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link **400 + 600 + 700**. Roboto @font-face rules exist as unused fallbacks — ignore them |
| Body text | font-size 16px, line-height 1.8 (28.8px computed), font-weight 400, color `gray` (rgb 128,128,128), background **`#fff`** | ⚠️ **PURE WHITE page — NOT the `#f8f9fd` blue-gray canvas of Gridkit/Rowdeck/Domkit** |
| Heading h2/h4 | Poppins, font-weight **400**, line-height 1.5, color `#000` | final rule overrides the reboot's 500 (same gotcha as css-table-12 / table-01/02/03); computed h2/h4 = 400 |
| Heading `.heading-section` | font-size **28px**, color `#000`, centered | single h2 "Table #04" |
| Subheading h4 | font-size **24px** (1.5rem), weight 400, color `#000`, centered | "Class Schedule Table"; `.cl-mb-4` = 1.5rem margin-bottom |
| Heading→table gap | `.cl-mb-5 { margin-bottom: 3rem !important }` on the centered heading wrapper column (computed 48px) | `.cl-col-md-6` (50% width at ≥768px, text centered) |
| Section padding | `.ftco-section { padding: 7em 0 }` (computed 112px) | generous whitespace above/below content |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Table wrapper | `overflow-x: scroll` | `.table-wrap` — horizontal scroll below the min-width |
| Table `.cl-table` (final) | `width: 100%; min-width: 1000px !important`; background `#fff`; **`text-align: center`**; color `#212529`; box-shadow `0 5px 12px -12px rgba(0,0,0,0.29)`; margin-bottom 1rem | computed **`border-collapse: collapse`** (unlike Table 03's `separate`); outer border `1px solid #dee2e6` from `.cl-table-bordered` |
| Header day cells `thead th` | border **none** (computed 0px), padding **30px**, font-size **14px**, color **`#000`** (BLACK), vertical-align bottom, text-align center, background transparent/white | ⚠️ **NO colored header bar** — black labels on white, unlike Table 03's violet `thead-primary` |
| Header th font-weight | **700** (UA default — snippet never overrides `th` weight; author `font-bold` for determinism) | day names Monday…Sunday |
| Body row quirk | `.cl-table tbody tr { margin-bottom: 10px }` | vertical gap between rows in the collapse model |
| Body `tbody td` (final) | padding **30px**, font-size **14px**, background **`#fff`**, vertical-align middle, text-align center, transition **0.5s** | borders **`1px solid #dee2e6`** on all sides (from `.cl-table-bordered th/td`; not overridden for tbody) |
| Cell hover | `.cl-table tbody td:hover { background: whitesmoke }` (`#f5f5f5`); `prefers-reduced-motion: reduce` → transition none | interactive feedback on every cell |
| × mark `td i` / `.cl-icon` | font-size **12px**, color/fill **`rgba(0,0,0,0.3)`** | the faint "no class" mark, centered in empty cells |
| Class card `td .img` | **90×90px**, border-radius **50%** (`cl-rounded-circle`), margin `0 auto`, margin-bottom **8px** (`cl-mb-2`), `background-size: cover; background-position: center` | circular fitness photo |
| Class card link `td a` | display **block**, color **`#ffafb0`** (rgb 255,175,176 — SALMON PINK), font-size **12px**, weight 400 | the signature accent; global `a` rule is the same `#ffafb0`, transition 0.3s |
| Class card label `td a strong` | font-size **12px**, font-weight **600**, color **`#666`** (rgb 102,102,102) | "Yoga training" — gray, semibold, overrides the salmon link color |
| Class card time | plain text inside the same link, 12px `#ffafb0` | "7 am-6 am" |
| Footer month cells `tfoot th` | padding **12px** (0.75rem — base `th` padding; NOT 30px), font-size **16px** (inherits body; NOT 14px), font-weight **700** (UA th bold), vertical-align **top**, text-align center, borders **`1px solid #dee2e6`** | ⚠️ tfoot differs from both thead (30px/no borders) and tbody (30px/14px/middle) |
| Footer month links `tfoot th a` | font-size 16px, font-weight **400**, color **`#000`**, display inline; hover color **`#ffafb0`**, transition 0.3s | "September" / "November" |
| Footer arrow icons `tfoot th a i` | font-size **12px**, color `#000` | fa-long-arrow-left/right → lucide ArrowLeft/ArrowRight |
| Link hover (global) | `a:hover/:focus { text-decoration: none; outline: none; box-shadow: none }` | recreation adds the monorepo `focus-visible` ring for keyboard users |
| Table columns | 7: `Monday` · `Tuesday` · `Wednesday` · `Thursday` · `Friday` · `Saturday` · `Sunday` | header of all seven columns is real text |
| Table body rows | 5 rows × 7 cells (35 cells): **16 ×-cells + 19 class-cells** | canonical pattern below |
| Canonical cell pattern | R1: `X C1 X C2 X C3 X` · R2: `C4 X C5 X C6 X C7` · R3: `X C1 X C2 X C3 X` · R4: `C4 X C5 X C6 X C7` · R5: `C1 X C2 C3 X C4 C5` | ⚠️ R5 genuinely has **C2,C3 adjacent** (Wed+Thu both class cards) — replicate exactly; images cycle `classes-1…7` across the 19 cards |
| Class card copy | ALL 19 cards in the source read identically: `<strong>Yoga training</strong>` + `<br>` + `7 am-6 am` | same KIND of content may be paraphrased; keep structure (bold label + time) |
| Footer row content | 7 `th`: first `<a href="#">← September</a>`, middle 5 empty, last `<a href="#">November →</a>` | month-navigation pattern |
| Print rules | thead `display: table-header-group`, tr/img `break-inside: avoid`, body/container `min-width: 992px`, cells forced white, `@page { size: a3 }` | minor; not required for parity |

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a pure white page shell (background `#fff`,
Poppins everywhere with body text at font-weight 400, line-height 1.8,
color gray, content area with about 7em vertical padding) centered in a
responsive container (max-width 1140px at desktop with 15px side
padding; 540/720/960px at smaller breakpoints), with a single h2
heading "Table #04" at font-size 28px, font-weight 400, color `#000`,
centered, and about 3rem margin-bottom.

#### Scenario: Shell renders

- **GIVEN** the user visits the Gridmark home page
- **THEN** the page background is #fff (pure white — NOT the blue-gray
  `#f8f9fd` of sibling table templates)
- **AND** the font family is Poppins (Google Fonts weights 400/600/700
  loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has about 7em vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side
  padding; 540/720/960px at smaller breakpoints) holds the page content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #04" is displayed at font-size
  28px, font-weight 400, color #000, horizontally centered
- **AND** its wrapper column has about 3rem margin-bottom above the
  subheading/table

### Requirement: Subheading renders

The template SHALL render a centered h4 subheading "Class Schedule
Table" at font-size 24px, font-weight 400, color `#000`, with about
1.5rem margin-bottom, directly above the table.

#### Scenario: Subheading renders

- **GIVEN** the h2 heading is visible
- **THEN** an h4 heading labeled "Class Schedule Table" is displayed
- **AND** it renders at 24px, font-weight 400, color #000, horizontally
  centered
- **AND** it has about 1.5rem margin-bottom above the table

### Requirement: Schedule table renders with the source column structure

The template SHALL render a responsive data table (width 100%,
min-width 1000px, inside an overflow-x wrapper, white background,
centered text, subtle `0 5px 12px -12px rgba(0,0,0,0.29)` shadow,
border-collapse collapse, outer border `1px solid #dee2e6`) with a
BORDERLESS BLACK header row of seven day columns ("Monday", "Tuesday",
"Wednesday", "Thursday", "Friday", "Saturday", "Sunday"; header cells
at bold weight 700, black 14px text, 30px padding, NO borders, NO
background color) and five body rows of seven cells each. Each body cell
SHALL be 14px text on a white background with `1px solid #dee2e6`
borders on all sides, 30px padding, vertically middle, text-align
center; body rows SHALL carry about 10px margin-bottom between them.

#### Scenario: Table columns and header row

- **GIVEN** the table is visible
- **THEN** the header row lists seven columns: "Monday", "Tuesday",
  "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
- **AND** each header cell renders black (#000) 14px text at bold weight
  (700) with 30px padding
- **AND** the header cells have NO borders and NO background color
  (white page shows through) — there is NO colored header bar

#### Scenario: Data rows render

- **GIVEN** the table is visible
- **THEN** five body rows are displayed, each with exactly seven cells
- **AND** body cell text renders at 14px on white (#fff) background,
  centered, vertically middle
- **AND** every body cell carries a `1px solid #dee2e6` border on all
  sides
- **AND** body cells have 30px padding and about 10px row spacing
  between them

### Requirement: Cell content fidelity — × marks and class cards

Each of the 35 body cells SHALL contain either (a) a faint "no class"
× mark — a 12px icon (lucide `X`) at `rgba(0,0,0,0.3)`, centered — or
(b) a class card: a 90×90px circular image (border-radius 50%,
cover/center background, 8px margin-bottom, horizontally centered)
above a block-level link containing a bold semibold label "Yoga
training" (12px, weight 600, color `#666`) and a time line "7 am-6 am"
(12px, color `#ffafb0`). The cards SHALL follow the source's canonical
pattern — R1: X C1 X C2 X C3 X · R2: C4 X C5 X C6 X C7 · R3: X C1 X C2 X
C3 X · R4: C4 X C5 X C6 X C7 · R5: C1 X C2 C3 X C4 C5 (16 ×-cells, 19
class-cells; R5's Wednesday and Thursday cells are BOTH class cards) —
using 7 deterministic placeholder images cycled across the cards. Class
card text may be paraphrased while keeping the structure (semibold
label + salmon time line).

#### Scenario: × mark cells render

- **GIVEN** the table body renders
- **THEN** the 16 cells designated as "no class" in the canonical
  pattern each contain exactly one × icon
- **AND** each × renders at 12px with color rgba(0,0,0,0.3), centered
  in its cell
- **AND** the icon is marked decorative (aria-hidden) — the cell itself
  carries no class information text

#### Scenario: Class card cells render

- **GIVEN** the table body renders
- **THEN** the 19 cells designated as class cards in the canonical
  pattern each contain a circular image and a two-line link
- **AND** each image renders at 90×90px with border-radius 50%, cover
  background, horizontally centered, 8px margin-bottom
- **AND** each card's label line renders at 12px / weight 600 / color
  #666
- **AND** each card's time line renders at 12px / color #ffafb0 (salmon
  pink) below the label
- **AND** images use 7 deterministic placeholders (e.g.
  picsum.photos/seed/gridmark-1…7) — never copied source assets

#### Scenario: Pattern fidelity

- **GIVEN** the five body rows render
- **THEN** row 1 is X C X C X C X, rows 2 and 4 are C X C X C X C,
  row 3 matches row 1, and row 5 is C X C C X C C
- **AND** the class images cycle through the same 7 seeds in source
  order across the 19 cards
- **AND** exact copy strings may be paraphrased while keeping the
  two-line bold-label + time structure

### Requirement: Cell hover feedback

Body cells SHALL provide hover feedback: background shifts to whitesmoke
(`#f5f5f5`) over a 0.5s transition, disabled under
`prefers-reduced-motion: reduce`. Class-card links SHALL keep the global
0.3s color transition behavior and receive the monorepo `focus-visible`
ring on keyboard focus.

#### Scenario: Hover feedback renders

- **GIVEN** the table body renders
- **WHEN** the user hovers any body cell
- **THEN** that cell's background shifts to whitesmoke (#f5f5f5)
- **AND** the change animates over 0.5s
- **AND** under `prefers-reduced-motion: reduce` the transition does not
  animate
- **AND** class-card links show a focus-visible ring (monorepo
  convention) on keyboard focus

### Requirement: Month-navigation footer row

The table SHALL end with a `tfoot` row of seven `th` cells: the first
contains a link "September" preceded by a left-arrow icon (lucide
`ArrowLeft`), the last contains a link "November" followed by a
right-arrow icon (lucide `ArrowRight`), and the middle five cells are
empty. Footer cells SHALL render at font-size 16px, font-weight 700
(UA th bold), padding 12px, vertical-align top, with `1px solid
#dee2e6` borders; the links SHALL render at 16px, weight 400, color
`#000`, hovering to `#ffafb0`, with 12px arrow icons. As in the source
the links SHALL be real interactive elements with accessible names and
SHALL NOT navigate to an invented destination (source: `href="#"`).

#### Scenario: Footer row renders

- **GIVEN** the table is visible
- **THEN** a tfoot row with seven th cells is displayed below the body
- **AND** the first cell contains a "September" link with a left-arrow
  icon before the text
- **AND** the last cell contains a "November" link with a right-arrow
  icon after the text
- **AND** the middle five cells are empty
- **AND** footer cells render at 16px / bold / 12px padding /
  vertical-align top with 1px #dee2e6 borders
- **AND** the links render black (#000) at weight 400 with 12px arrow
  icons

#### Scenario: Footer link behavior

- **GIVEN** the footer row renders
- **WHEN** the user hovers a month link
- **THEN** its color shifts to #ffafb0 (salmon pink)
- **AND** each month link is a real interactive element (anchor or
  button) with an accessible name ("September" / "November")
- **AND** no invented navigation target is introduced (source behavior:
  link to "#")

### Requirement: Horizontal-scroll behavior below 1000px

The template SHALL keep the table horizontally scrollable within its
wrapper below the 1000px min-width while the rest of the page layout
stays intact.

#### Scenario: Narrow viewport scrolls horizontally

- **GIVEN** the viewport is narrower than the table min-width (1000px)
- **THEN** the table scrolls horizontally within its wrapper
- **AND** the page layout (heading, subheading, container padding,
  footer) stays intact
- **AND** no horizontal overflow escapes the wrapper

### Requirement: Component Dock attribution footer

The template SHALL render a minimal footer attribution line linking
https://www.componentdock.com/ branded "Component Dock", and NO ColorLib
attribution or links anywhere in the page.

#### Scenario: Attribution present

- **GIVEN** the page footer area is rendered
- **THEN** a minimal attribution line links https://www.componentdock.com/
  branded "Component Dock"
- **AND** NO ColorLib attribution or links appear anywhere in the page

### Requirement: Accessibility (global semantics)

The template SHALL use real table semantics (thead/tbody/tfoot; th
scope="col" on day headers) and a correct heading hierarchy (h2 then
h4); class-card and month links SHALL be real interactive elements with
accessible names; the decorative × marks SHALL be aria-hidden (they
carry no unique meaning beyond the empty cell); the white-on-white table
relies on its `#dee2e6` borders for structure (borders SHALL NOT be the
only carrier of the table's semantics).

#### Scenario: Table and page semantics

- **GIVEN** the page is rendered
- **THEN** the table uses thead/tbody/tfoot with th scope="col" on the
  day header cells
- **AND** the heading hierarchy contains one h2 and one h4
- **AND** the demo schedule is rendered as real table content (not
  presentational divs)
- **AND** every class-card link and month link is keyboard-reachable
  with an accessible name
- **AND** the × icons are aria-hidden="true"
- **AND** black-on-white header labels (#000 on #fff) are legible at
  their size

## Verification checklist

- [ ] Poppins 400/600/700 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-page: #fff`, `--color-ink: #212529`,
      `--color-heading: #000`, `--color-accent: #ffafb0`, `--color-label:
      #666`, `--color-surface: #fff`, `--color-line: #dee2e6`,
      `--color-hover: #f5f5f5`, `--color-mark: rgba(0,0,0,0.3)`
- [ ] Page shell: WHITE background (NOT `#f8f9fd`), body weight 400 /
      line-height 1.8 / color gray, content area `7em` vertical padding,
      centered container max-width 1140px / 15px gutters (540/720/960px
      breakpoints)
- [ ] Heading "Table #04" — 28px / font-weight 400 / `#000`, centered,
      3rem margin-bottom on the wrapper column
- [ ] Subheading "Class Schedule Table" — 24px / font-weight 400 /
      `#000`, centered, 1.5rem margin-bottom
- [ ] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      white background, centered text, shadow
      `0 5px 12px -12px rgba(0,0,0,0.29)`, border-collapse collapse,
      outer border `1px solid #dee2e6`; thead: 7 day columns
      (Monday–Sunday) black bold 14px labels, 30px padding, NO borders,
      NO background; tbody: 5 rows × 7 cells, white 14px cells with
      1px #dee2e6 borders, 30px padding, vertical middle, ~10px row
      spacing
- [ ] Cell pattern: R1 `X C1 X C2 X C3 X` · R2 `C4 X C5 X C6 X C7` ·
      R3 = R1 · R4 = R2 · R5 `C1 X C2 C3 X C4 C5` (16 ×-cells, 19
      class-cells; R5 Wed+Thu both cards)
- [ ] ×-cells: lucide `X` 12px `rgba(0,0,0,0.3)`, centered,
      aria-hidden
- [ ] Class cards: 90×90 circular picsum images (seed gridmark-1…7,
      7 cycled), semibold 12px/600/#666 label + 12px/#ffafb0 time line,
      block-level link, no invented destination
- [ ] Cell hover: whitesmoke `#f5f5f5` over 0.5s; reduced-motion off;
      focus-visible ring on links
- [ ] tfoot: 7 th — "← September" link first, 5 empty, "November →"
      link last; th 16px / bold / 12px padding / vertical top / 1px
      #dee2e6 borders; links #000 weight 400 hover #ffafb0, 12px
      lucide arrows; accessible names; no invented destination
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh gridmark`; PR
      `feat/template-gridmark` with source slug + preview URL + tokens in
      the description
