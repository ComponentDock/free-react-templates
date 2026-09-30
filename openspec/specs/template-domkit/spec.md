# Template: Domkit (Table)

## Purpose

Domkit is a domain-pricing data-table showcase page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Table 03" template (source:
https://colorlib.com/wp/template/table-03/ — a single-page snippet: light
blue-gray page, one centered h2 heading "Table #03", one centered h4
subheading "Create Your Domain Name", then one wide domain-pricing table
with a VIVID PURPLE (`#6807f9`) header bar (`thead-primary`), a shaded
lavender TLD column (`th.scope`, `#e8ebf8`), alternating lighter-lavender
odd-position cells (`#f4f6fc`), white remaining cells, and one small
purple "Sign Up" button per row — no navbar, no imagery, no framework, no
JavaScript), built under a DIFFERENT name (Domkit — the domain-pricing
kit; single lowercase word), per the monorepo naming mandate (never reuse
the ColorLib source name), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

- **Source slug:** `table-03`
- **Source:** https://colorlib.com/wp/template/table-03/
- **Preview — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-03/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-03/**
  (HTTP 200, 3,074 bytes, `<title>Table 03</title>`). Implementers must
  use the `bootstrap/` path — do not re-derive the slug-only URL. (Same
  non-standard layout as css-table-11/12/16, table-01, table-02,
  Gridline, Rowglow, Nightgrid, Gridkit, Rowdeck.)
- **Preview CSS:** the DOM references `css/style.css?v=75abd250`
  (relative to the `bootstrap/` preview path). ⚠️ At prep time
  (2026-09-30) direct curl fetches of that stylesheet URL returned
  **HTTP 404 "Not Found"** even though the preview page itself returned
  200 — and a re-fetch of the Table 02 sheet (which fetched fine earlier
  the same day) also 404'd, so the CDN appears to have started blocking
  direct stylesheet requests mid-session. The design tokens in this spec
  were captured **authoritatively from the live rendered page on
  2026-09-30**: a full `document.styleSheets` cssRules dump (9,956
  chars — reboot block, `.cl-*` utilities, table rules, button rules,
  final overrides) plus computed styles on every key element. **CSS
  values in this spec are canonical — implementers do NOT need to
  re-fetch the stylesheet.** (The sheet itself is a single
  self-contained file: Bootstrap-reboot revert block, self-hosted
  Roboto @font-face fallbacks that the final cascade never uses,
  `.cl-container` Bootstrap-like responsive container, `.cl-table` base
  + final override, `.thead-primary` purple header, `.cl-btn-primary`
  purple buttons, `.ftco-section` 7em padding, `.heading-section` 28px
  h2, `.table-wrap` overflow-x scroll, `.cl-border-bottom-0`,
  `.cl-mb-4`/`.cl-mb-5`/`.cl-text-center`/`.cl-justify-content-center`,
  plus print rules.)
- **Scripts (source):** NONE — the preview page loads ZERO `<script>`
  tags (verified 2026-09-30 on the live DOM). The "Sign Up" cells are
  `<a href="#" class="cl-btn cl-btn-primary">Sign Up</a>` — inert
  anchors in the preview. In the React recreation the Sign Up control
  SHALL be a real interactive element (monorepo pattern: `packages/ui`
  Button/ButtonLink with the tokens below; accessible name "Sign Up";
  no invented navigation — the source links to `#`).
- **Fonts:** **Poppins** — load Google Fonts `<link>` with weights
  **400, 500, 700** in `index.html`. The final `body` rule sets
  `font-family: "Poppins", Arial, sans-serif` (body 16px / line-height
  1.8 / weight 400). Weight **700** is required: thead header cells and
  the TLD `th.scope` cells render bold (UA default — the snippet never
  sets `th` font-weight). Weight **500** is the Sign Up button font.
  (The preview's self-hosted Roboto 400/700 @font-face rules are
  unreachable fallbacks — ignore them.)
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.
- **Icons:** none in the source. No lucide imports required.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/table-03.jpg
  (served as AVIF despite the .jpg extension, 1200×972; visually
  analyzed 2026-09-30 after conversion; matches the live preview: light
  blue-gray page, centered "Table #03" heading, centered "Create Your
  Domain Name" subheading, vivid purple header bar, lavender-shaded TLD
  column with bold domain labels, alternating lavender/white columns,
  small purple "Sign Up" buttons per row, subtle shadow under the
  table).
- **TEMPLATES.md:** "## Table (25)" section (line 2868) — line 2886
  (`- [ ] **Table 03**`). Slug `table-03` appears exactly ONCE in
  TEMPLATES.md.
- **Naming check:** "domkit" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30; repo-wide grep also clean);
  follows the established `-kit` family (gridkit — the sibling Table 01
  recreation, ui-kit items like buildex-ui-kit/next-ui-kit) and reads
  naturally for a domain-pricing table.

## Design tokens

(Canonical values captured 2026-09-30 from the live preview: full
cssRules dump + computed styles, via the rendered page at
https://preview.colorlib.com/theme/bootstrap/table-03/. CSS values are
canonical — see the stylesheet note in Purpose.)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | final `body` rule; Google Fonts link 400 + 500 + 700. Roboto @font-face rules exist as unused fallbacks — ignore them |
| Body text | font-size 16px, line-height 1.8, font-weight 400, color `gray`, background `#f8f9fd` | the **light blue-gray page** is the signature canvas (same as Gridkit/Rowdeck) |
| Heading h2/h4 | Poppins, font-weight **400**, line-height 1.5, color `#000` | final rule overrides the reboot's 500 (same gotcha as css-table-12 / table-01 / table-02); computed h2/h4 = 400 |
| Heading `.heading-section` | font-size **28px**, color `#000`, centered | single h2 "Table #03" |
| Subheading h4 | font-size **24px** (1.5rem), weight 400, color `#000`, centered | "Create Your Domain Name"; `.cl-mb-4` = 1.5rem margin-bottom |
| Section padding | `.ftco-section { padding: 7em 0 }` | generous whitespace above/below content |
| Heading→content gap | `.cl-mb-5 { margin-bottom: 3rem !important }` on the centered heading column | `.cl-col-md-6` (half-width column, text centered) |
| Container | `540px` @576 · `720px` @768 · `960px` @992 · `1140px` @1200; 15px side padding, auto margins | `.cl-container` (Bootstrap-like) |
| Table wrapper | `overflow-x: scroll` | `.table-wrap` — horizontal scroll below the min-width |
| Table `.cl-table` (final) | `width: 100%; min-width: 1000px !important`; background `#fff`; **`text-align: center`**; color `#212529`; box-shadow `0 5px 12px -12px rgba(0, 0, 0, 0.29)` | base rule also sets `margin-bottom: 1rem`; the subtle shadow lifts the table off the canvas. NOTE: table uses `border-collapse: separate` (computed) with 2px cell bottom borders — NOT the Table 02 row-gap signature |
| Header bar `thead.thead-primary` | background **`#6807f9`** (rgb(104,7,249)) | THE signature — vivid violet header bar spanning the table |
| Header th | border none, padding `30px`, font-size 14px, color `#fff`, **bold (computed 700 — UA default, snippet never overrides th font-weight; author `font-bold` for determinism)** | white labels on violet |
| Body th/td | padding `30px`, font-size 14px, color `#212529`, background **`#fff`**, vertical-align middle, text-align center; border-bottom `2px solid #f8f9fd` (page color — effectively invisible separators) | white cells on the `#f8f9fd` page |
| TLD column `tbody th.scope` | background **`#e8ebf8`** (rgb(232,235,248)), border-bottom `2px solid #e0e5f6` (rgb(224,229,246)), font-weight **700** (UA default th bold) | first column cells: `<th scope="row" class="scope">.com</th>` … `.me` — the shaded lavender TLD column |
| Odd-position cell shading | `@media (min-width: 768px)`: `.cl-table tbody td:nth-child(2n+1)` → background **`#f4f6fc`** (rgb(244,246,252)), border-bottom `2px solid #ecEFFa` (rgb(236,239,250)) | in-row positions: 1=TLD(shaded via scope), 2=Duration(white), 3=Registration(#f4f6fc), 4=Renewal(white), 5=Transfer(#f4f6fc), 6=Register(white) — the alternating-column look. **Below 768px this rule does NOT apply** (only the TLD scope column stays shaded) |
| Last-row border | `.cl-border-bottom-0 { border-bottom: 0 !important }` on EVERY cell of the `.me` row | final row has no bottom separator |
| Buttons `.cl-btn` + `.cl-btn-primary` (final) | background/border **`#6807f9`**, color `#fff`, font-size **13px**, font-weight **500**, border-width **2px**, border-radius **2px**, padding `0.375rem 0.75rem` (6px 12px), cursor pointer, box-shadow none at rest | Sign Up CTA per row; computed button width ~74px |
| Button hover/active/focus | background/border **`#5305c8`** (rgb(83,5,200)), box-shadow `0 12px 20px -6px rgba(0,0,0,0.21)`; transition color/background-color/border-color/box-shadow 0.15s ease-in-out; `prefers-reduced-motion: reduce` → no transition | focus ring in source is the Bootstrap default `rgba(0,123,255,0.25) 0 0 0 0.2rem` (invisible on violet) — recreation uses the monorepo `focus-visible` ring |
| Base `.cl-btn-primary` earlier rule | `#007bff` (Bootstrap blue) — **fully overridden** by the final `.cl-btn.cl-btn-primary` violet rule | do NOT reproduce the blue |
| Link color (global) | `#6807f9` (rgb(104,7,249)), transition 0.3s | the only visible "links" are the Sign Up buttons (button styling wins) |
| Table columns | 6: `TLD` · `Duration` · `Registration` · `Renewal` · `Transfer` · `Register` | header of all six columns is real text |
| Table rows | 6: `.com` · `.net` · `.org` · `.biz` · `.info` · `.me` — Duration "1 Year" each; Registration `$70.00 / $75.00 / $65.00 / $60.00 / $50.00 / $45.00`; Renewal `$5.00` each; Transfer `$5.00` each; Register = Sign Up button | TLD cells are `<th scope="row" class="scope">` |
| Print rules | thead `display: table-header-group`, tr `page-break-inside: avoid`, body/container `min-width: 992px`, cells forced white | minor; not required for parity |

## Requirements

### Requirement: Page shell and heading render

The template SHALL render a light blue-gray page shell (background
`#f8f9fd`, Poppins everywhere with body text at font-weight 400,
line-height 1.8, content area with about 7em vertical padding) centered
in a responsive container (max-width 1140px at desktop with 15px side
padding; 540/720/960px at smaller breakpoints), with a single h2 heading
"Table #03" at font-size 28px, font-weight 400, color `#000`, centered,
and about 3rem margin-bottom.

#### Scenario: Shell renders

- **GIVEN** the user visits the Domkit home page
- **THEN** the page background is #f8f9fd (light blue-gray)
- **AND** the font family is Poppins (Google Fonts weights 400/500/700
  loaded)
- **AND** the body text renders at font-size 16px, line-height 1.8,
  font-weight 400, color gray
- **AND** the content area has about 7em vertical padding
- **AND** a centered container (max-width 1140px at desktop, 15px side
  padding; 540/720/960px at smaller breakpoints) holds the page content

#### Scenario: Heading renders

- **GIVEN** the page shell is visible
- **THEN** an h2 heading labeled "Table #03" is displayed at font-size
  28px, font-weight 400, color #000, horizontally centered
- **AND** it has about 3rem margin-bottom above the subheading/table

### Requirement: Subheading renders

The template SHALL render a centered h4 subheading "Create Your Domain
Name" at font-size 24px, font-weight 400, color `#000`, with about 1.5rem
margin-bottom, directly above the table.

#### Scenario: Subheading renders

- **GIVEN** the h2 heading is visible
- **THEN** an h4 heading labeled "Create Your Domain Name" is displayed
- **AND** it renders at 24px, font-weight 400, color #000, horizontally
  centered
- **AND** it has about 1.5rem margin-bottom above the table

### Requirement: Data table renders with the source column structure

The template SHALL render a responsive data table (width 100%,
min-width 1000px, inside an overflow-x wrapper, white background,
centered text, subtle `0 5px 12px -12px rgba(0,0,0,0.29)` shadow) with a
VIVID PURPLE header bar (`#6807f9`) of six columns ("TLD", "Duration",
"Registration", "Renewal", "Transfer", "Register"; header cells at bold
weight, white 14px text, 30px padding, no borders) and six body rows.
Each body row SHALL start with a `<th scope="row" class="scope">` TLD
cell (.com, .net, .org, .biz, .info, .me — bold at the UA default,
shaded lavender `#e8ebf8`) followed by four `td` price cells (Duration,
Registration, Renewal, Transfer) and a final `td` holding the Sign Up
button — body cell text `#212529` at 14px with 30px padding on a white
background, text-align center, bottom border `2px solid` in the palette
below.

#### Scenario: Table columns and header bar

- **GIVEN** the table is visible
- **THEN** the header row is a solid #6807f9 violet bar spanning the
  table
- **AND** the header lists six columns: "TLD", "Duration",
  "Registration", "Renewal", "Transfer", "Register"
- **AND** each header cell renders white 14px text at bold weight with
  30px padding and no borders
- **AND** the header text color is #fff on the #6807f9 background

#### Scenario: Data rows render

- **GIVEN** the table is visible
- **THEN** six body rows are displayed in source order (.com, .net,
  .org, .biz, .info, .me)
- **AND** each row starts with a bold `<th scope="row">` TLD cell
- **AND** each row shows Duration "1 Year", a Registration price, a
  Renewal price, a Transfer price, and a Sign Up button cell
- **AND** body cell text is #212529 at 14px on white (#fff) background,
  centered
- **AND** cell padding is 30px on all sides

#### Scenario: Content fidelity

- **GIVEN** the data rows render
- **THEN** the rows contain the same KIND of demo data as the source:
  popular domain TLDs (.com/.net/.org/.biz/.info/.me), a 1-year
  duration, distinct registration prices, and equal low renewal/transfer
  fees
- **AND** exact price strings may be paraphrased while keeping the
  structure (TLD + duration + registration + renewal + transfer + CTA
  per row)

### Requirement: Purple header + lavender column-shading signature

The template SHALL reproduce the table's signature shading: the violet
`#6807f9` header bar; the TLD column shaded `#e8ebf8` with a `2px solid
#e0e5f6` bottom border on its cells; and — at viewports ≥768px — the
odd-position data cells (Registration = 3rd cell, Transfer = 5th cell of
each row) shaded `#f4f6fc` with a `2px solid #ecEFFa` bottom border,
while even-position data cells (Duration, Renewal, Register) stay white
with a `2px solid #f8f9fd` bottom border. The LAST row (.me) SHALL have
no bottom border on any cell (`cl-border-bottom-0` in the source).

#### Scenario: Signature shading renders at desktop widths

- **GIVEN** the viewport is at least 768px wide
- **THEN** the thead is a solid #6807f9 bar
- **AND** every TLD cell renders with background #e8ebf8 and bottom
  border #e0e5f6 (bold text)
- **AND** in each body row the Registration and Transfer cells render
  with background #f4f6fc and bottom border #ecEFFa
- **AND** the Duration, Renewal, and Register cells render white with
  bottom border #f8f9fd
- **AND** the .me row has no bottom borders on any of its cells

#### Scenario: Shading below 768px

- **GIVEN** the viewport is narrower than 768px
- **THEN** the TLD column remains shaded #e8ebf8 (scope rule applies at
  all widths)
- **AND** the odd-position `td:nth-child(2n+1)` shading does NOT apply
  (media query is min-width 768px) — the data cells render white
- **AND** the table still scrolls horizontally within its wrapper

### Requirement: Functional Sign Up button per row

Each body row SHALL end with a "Sign Up" primary control styled to the
tokens (background/border `#6807f9`, white 13px/500 text, 2px border, 2px
radius, 6px/12px padding; hover background/border `#5305c8` with the
`0 12px 20px -6px rgba(0,0,0,0.21)` shadow; monorepo `focus-visible` ring
instead of the source's invisible Bootstrap ring). It SHALL be a real
interactive element with the accessible name "Sign Up"; as in the source
it SHALL NOT navigate to an invented destination (the source links to
`#`).

#### Scenario: Sign Up controls render

- **GIVEN** the table is visible
- **THEN** each of the six rows contains exactly one "Sign Up" control
- **AND** each control renders with background #6807f9, white 13px text
  at font-weight 500, 2px border, 2px border-radius, 6px 12px padding
- **AND** each control is a real interactive element (button or anchor)
  with the accessible name "Sign Up"
- **AND** no invented navigation target is introduced (source behavior:
  link to "#")

#### Scenario: Hover feedback

- **GIVEN** the table is visible
- **WHEN** the user hovers a Sign Up control
- **THEN** its background and border shift to #5305c8
- **AND** the hover drop shadow `0 12px 20px -6px rgba(0,0,0,0.21)`
  appears
- **AND** a focus-visible ring (monorepo convention) appears on
  keyboard focus

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

The template SHALL use real table semantics and a correct heading
hierarchy (h2 then h4); Sign Up controls SHALL be real interactive
elements with accessible names; decorative shading SHALL NOT be the only
carrier of meaning (the TLD `<th scope="row">` cells carry the row
meaning in the source markup).

#### Scenario: Table and page semantics

- **GIVEN** the page is rendered
- **THEN** the table uses thead/tbody with th scope="col" on header
  cells and th scope="row" on the TLD cells
- **AND** the heading hierarchy contains one h2 and one h4
- **AND** the demo data is rendered as real table content (not
  presentational divs)
- **AND** every Sign Up control is keyboard-reachable with an
  accessible name
- **AND** the white-on-violet header contrast (#fff on #6807f9) is
  sufficient for its size

## Verification checklist

- [ ] Poppins 400/500/700 loaded via Google Fonts `<link>` in `index.html`
- [ ] `@theme` tokens: `--color-page: #f8f9fd`, `--color-primary:
      #6807f9`, `--color-primary-hover: #5305c8`, `--color-ink: #212529`,
      `--color-heading: #000`, `--color-surface: #fff`, `--color-scope:
      #e8ebf8`, `--color-scope-border: #e0e5f6`, `--color-shade:
      #f4f6fc`, `--color-shade-border: #ecEFFa`
- [ ] Page shell: `#f8f9fd` background, body weight 400 / line-height
      1.8, content area `7em` vertical padding, centered container
      max-width 1140px / 15px gutters (540/720/960px breakpoints)
- [ ] Heading "Table #03" — 28px / font-weight 400 / `#000`, centered,
      3rem margin-bottom
- [ ] Subheading "Create Your Domain Name" — 24px / font-weight 400 /
      `#000`, centered, 1.5rem margin-bottom
- [ ] Table: `min-width: 1000px` inside an `overflow-x-auto` wrapper;
      white background, centered text, shadow
      `0 5px 12px -12px rgba(0,0,0,0.29)`; violet `#6807f9` thead
      (6 columns: TLD · Duration · Registration · Renewal · Transfer ·
      Register; white bold 14px labels, 30px padding, no borders);
      6 rows with bold `<th scope="row">` TLDs .com/.net/.org/.biz/
      .info/.me; body text `#212529` 14px on `#fff`, 30px padding,
      centered; TLD cells `#e8ebf8` + `#e0e5f6` bottom border;
      ≥768px: Registration + Transfer cells `#f4f6fc` + `#ecEFFa`
      bottom border, Duration/Renewal/Register white + `#f8f9fd` bottom
      border; .me row border-b-0 on all cells
- [ ] Sign Up button per row: `#6807f9` bg/border, white 13px/500 text,
      2px border, 2px radius, 6px 12px padding; hover `#5305c8` +
      `0 12px 20px -6px rgba(0,0,0,0.21)` shadow; focus-visible ring;
      accessible name "Sign Up"; no invented destination
- [ ] Below 768px: odd-position shading off (scope column only), table
      scrolls horizontally, layout intact
- [ ] Footer: minimal Component Dock attribution link
      (https://www.componentdock.com/); zero ColorLib references anywhere
      in the app (comments included)
- [ ] 100% test coverage via `scripts/verify-app.sh domkit`; PR
      `feat/template-domkit` with source slug + preview URL + tokens in
      the description
