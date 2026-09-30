# Template: Headlock (Table)

## Purpose

Headlock is a white-page data-table showcase whose SIGNATURE is a pure-CSS
FIXED table header: every table block is built from TWO tables — an
absolutely-positioned header table (`position: absolute; top: 0; width: 100%`)
sitting OVER a max-height scrollable body container (`max-height: 585px;
overflow: auto`) — so the header stays locked in view while the body rows
scroll beneath it, with ZERO JavaScript. The page stacks FIVE variant cards
(ver1–ver5) of the SAME fitness-class dataset, each restyled (purple card →
red header → dark card → blue hairlines → gray card-rows). It is an original
React recreation of the ColorLib free "Fixed Header Table" template (source:
https://colorlib.com/wp/template/fixed-header-table/ — a single-page
data-table snippet: WHITE page `#fff`, five stacked fixed-header table
variants, Lato-Regular/Bold, no navbar, no framework, NO JavaScript at all)
built under a DIFFERENT name (Headlock — "head" for the table header row,
"lock" for the fact that the header stays locked/fixed while the body scrolls;
single lowercase word), per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

- **Source slug:** `fixed-header-table`
- **Source:** https://colorlib.com/wp/template/fixed-header-table/ (page
  title: "Fixed Header Table - Free HTML/CSS Table Template 2026 -
  Colorlib"; meta description: "HTML5 & CSS3 based table example that can be
  used as a template for your website. Works with Bootstrap 4, 5 and 6, or
  on its own.")
- **Preview — UNREACHABLE (verified 2026-09-30):** the slug-only URL
  https://preview.colorlib.com/theme/fixed-header-table/ returns **HTTP 404
  "Not Found"** (9-byte body), and the bootstrap-path variant
  https://preview.colorlib.com/theme/bootstrap/fixed-header-table/ ALSO
  returns **HTTP 404** (unlike the css-table-12..20 family, where the
  bootstrap/ path works — do not assume it does). The source page offers a
  ZIP download — https://preview.colorlib.com/downloads/free/fixed-header-table.zip
  (HTTP 200, 73,693 bytes) — which was extracted and analyzed; this is the
  AUTHORITATIVE reference (HTML + CSS + fonts, no JS at all).
- **Source ZIP contents:** `index.html` (38,826 bytes — the full five-variant
  page), `css/style.css` (9,900 bytes — single self-contained sheet, "Every
  style this snippet uses, and nothing else. No framework, no build step."),
  `fonts/Lato-Regular.woff2` (32,652 bytes), `fonts/Lato-Bold.woff2`
  (32,228 bytes), `images/icons/favicon.ico` (32,038 bytes), `README.md`
  (1,261 bytes — title "**Table V04**", a STALE copy-pasted title from a
  sibling snippet; ignore it). **NO `js/` folder ships in the ZIP** even
  though the README template text mentions `js/snippet.js` — the source has
  ZERO interactivity; the fixed-header behavior is 100% CSS.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fixed-header-table-example.jpg
  (HTTP 200, 53,369 bytes, 1200×662 — visually analyzed 2026-09-30). The
  screenshot shows ONLY the **ver1** card: a rounded white card with a
  PERIWINKLE `#6c7ae0` header row (white bold labels: Class name · Type ·
  Hours · Trainer · Spots), 11 visible fitness rows (Class name / Type /
  Hours / Trainer / Spots), faint lavender zebra striping on even rows, gray
  body text, a soft wide shadow under the card, on a WHITE page — and a
  VERTICAL SCROLLBAR visible along the card's right edge (the signature
  scrollable body). The source page also stacks ver2–ver5 below it (see
  Design tokens); replicate all five in DOM order.
- **TEMPLATES.md:** "## Table (25)" section, line 2881
  (`- [ ] **Fixed Header Table**`). Slug `fixed-header-table` appears exactly
  ONCE in TEMPLATES.md (verified 2026-09-30).
- **Naming check:** "headlock" collides with NOTHING in `ls apps/`,
  `openspec/specs/`, `docs/templates/`, or TEMPLATES.md content (verified
  2026-09-30 — zero hits across all pools; fits the sibling naming idiom
  gridline / gridspan / rowcard / rowglow / gridpane / nightgrid /
  cellswitch / cellgrid / cellcrew / cellmate / fixstack).

## Design tokens

(extracted from the source ZIP `css/style.css` — CSS values are canonical;
screenshot pixel-samples corroborate ver1: sampled header `#6d7ae0`≈`#6c7ae0`,
zebra `#f8f7ff`≈`#f8f6ff`)

### Shared (all five variants)

| Token                        | Value                                                                                                                                                                                                                                    | Notes                                                                                                                                                                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family                  | Lato                                                                                                                                                                                                                                     | Source self-hosts `Lato-Regular`/`Lato-Bold` woff2. Monorepo: Google Fonts `<link>` for Lato **400, 700** — NEVER copy the woff2 files. Base `html/body` rule is plain `sans-serif` (reboot), but EVERY table cell uses Lato |
| Page background              | `#fff` WHITE                                                                                                                                                                                                                             | `.container-table100 { background: #fff; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 33px 30px }`                                                                               |
| Layout widths                | limiter `1366px` centered; wrap `1170px`                                                                                                                                                                                                 | `.limiter { width: 1366px; margin: 0 auto }`, `.wrap-table100 { width: 1170px }`                                                                                                                                             |
| Block spacing                | `.table100 { position: relative; padding-top: 60px }`, `.m-b-110 { margin-bottom: 110px }`                                                                                                                                               | 60px top padding reserves space for the absolutely-positioned header; each variant card sits 110px apart, stacked vertically in order ver1 → ver5                                                                            |
| Column widths                | column1 **33%** (`padding-left: 40px`), column2 **13%**, column3 **22%**, column4 **19%**, column5 **13%**                                                                                                                               | applied to both the header table and the body table                                                                                                                                                                          |
| Cell base                    | `th, td { font-weight: unset; padding-right: 10px }`                                                                                                                                                                                     | the font-face carries the weight (Regular/Bold)                                                                                                                                                                              |
| Header cell padding          | `.table100-head th { padding-top: 18px; padding-bottom: 18px }`                                                                                                                                                                          | global; ver5 overrides to 25px                                                                                                                                                                                               |
| Body cell padding            | `.table100-body td { padding-top: 16px; padding-bottom: 16px }`                                                                                                                                                                          | global; ver5 overrides to 10px                                                                                                                                                                                               |
| **SIGNATURE — fixed header** | `.table100-head { position: absolute; width: 100%; top: 0; left: 0 }` (a FULL `<table>` with `<thead>`) over `.table100-body { max-height: 585px; overflow: auto; -webkit-overflow-scrolling: touch }` (a FULL `<table>` with `<tbody>`) | PURE CSS — the header never scrolls because it is absolutely positioned OVER the scroll container; the body scrolls under it. NO JS, NO IntersectionObserver, NO sticky class                                                |
| Card shadow (ver1/2/3)       | `border-radius: 10px; overflow: hidden; box-shadow: 0 0 40px 0 rgba(0,0,0,0.15)`                                                                                                                                                         | the rounded, softly-floated card look from the screenshot                                                                                                                                                                    |
| Data                         | 5 columns × 22 rows per variant                                                                                                                                                                                                          | 11-row fitness schedule listed below, DUPLICATED exactly twice (rows 12–22 = rows 1–11) — as in the source                                                                                                                   |

**Header labels (identical in all five variants):** Class name · Type ·
Hours · Trainer · Spots.

**Body data (11 unique rows; the source renders each variant with this list
TWICE = 22 rows):**

| Class name                 | Type   | Hours              | Trainer       | Spots |
| -------------------------- | ------ | ------------------ | ------------- | ----- |
| Like a butterfly           | Boxing | 9:00 AM - 11:00 AM | Aaron Chapman | 10    |
| Mind & Body                | Yoga   | 8:00 AM - 9:00 AM  | Adam Stewart  | 15    |
| Crit Cardio                | Gym    | 9:00 AM - 10:00 AM | Aaron Chapman | 10    |
| Wheel Pose Full Posture    | Yoga   | 7:00 AM - 8:30 AM  | Donna Wilson  | 15    |
| Playful Dancer's Flow      | Yoga   | 8:00 AM - 9:00 AM  | Donna Wilson  | 10    |
| Zumba Dance                | Dance  | 5:00 PM - 7:00 PM  | Donna Wilson  | 20    |
| Cardio Blast               | Gym    | 5:00 PM - 7:00 PM  | Randy Porter  | 10    |
| Pilates Reformer           | Gym    | 8:00 AM - 9:00 AM  | Randy Porter  | 10    |
| Supple Spine and Shoulders | Yoga   | 6:30 AM - 8:00 AM  | Randy Porter  | 15    |
| Yoga for Divas             | Yoga   | 9:00 AM - 10:00 AM | Donna Wilson  | 20    |
| Virtual Cycle              | Gym    | 8:00 AM - 9:00 AM  | Randy Porter  | 20    |

### Per-variant tokens

| Token                | ver1 (screenshot)                                                  | ver2                                                             | ver3                                             | ver4                                                                                                                                                      | ver5                                                                                                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Header th font       | Lato-Bold 18px                                                     | Lato-Bold 18px                                                   | Lato-Bold **15px**                               | Lato-Bold 18px                                                                                                                                            | Lato-Bold **14px**                                                                                                                                                                                                                                                  |
| Header th color      | **`#fff` white**                                                   | **`#fa4251` red**                                                | **`#00ad5f` green**                              | **`#4272d7` blue**                                                                                                                                        | **`#555555` gray**                                                                                                                                                                                                                                                  |
| Header th background | **`#6c7ae0` periwinkle**                                           | transparent                                                      | **`#393939` dark**                               | transparent                                                                                                                                               | transparent                                                                                                                                                                                                                                                         |
| Header th extras     | —                                                                  | card gets `box-shadow: 0 5px 20px 0 rgba(0,0,0,0.1)` on the head | `text-transform: uppercase`                      | `border-bottom: 2px solid #f2f2f2`                                                                                                                        | `text-transform: uppercase`; th padding 25px top/bottom                                                                                                                                                                                                             |
| Body td font/color   | Lato-Regular 15px `#808080`                                        | Lato-Regular 15px `#808080`                                      | Lato-Regular 15px `#808080`                      | Lato-Regular 15px `#808080`                                                                                                                               | Lato-Regular 15px `#808080`                                                                                                                                                                                                                                         |
| Body td background   | transparent; **even rows `#f8f6ff`** (zebra, `tr:nth-child(even)`) | transparent                                                      | **`#222222`**                                    | transparent                                                                                                                                               | **`#f7f7f7`**                                                                                                                                                                                                                                                       |
| Body row borders     | none (zebra only)                                                  | `border-bottom: 1px solid #f2f2f2`                               | none                                             | `border-bottom: 1px solid #f2f2f2`                                                                                                                        | rows are CARD-like: `border-bottom: 10px solid #fff`, `border-radius: 10px`, `table { border-collapse: separate; border-spacing: 0 10px }`, td `border: solid 1px transparent` (left/right visible only, left/right radii 10px on first/last cell), td padding 10px |
| Card treatment       | radius 10px + shadow `0 0 40px rgba(0,0,0,0.15)`                   | same card + extra head shadow above                              | card bg **`#393939`**, radius 10px + same shadow | NO radius, NO shadow; `margin-right: -20px`, head `padding-right: 20px`, body `padding-right: 20px`, column1 `padding-left: 7px` (scrollbar gutter trick) | `margin-right: -30px`, head `padding-right: 30px`, body `padding-right: 30px`, `overflow: hidden`; **ONLY variant with hover**: `tr:hover td { background-color: #ebebeb; cursor: pointer }`                                                                        |
| column1 indent       | `padding-left: 40px`                                               | 40px                                                             | 40px                                             | **7px**                                                                                                                                                   | 40px                                                                                                                                                                                                                                                                |

## Requirements

### Requirement: Page shell renders

The system SHALL render a WHITE full-viewport page shell, flex-centered on
both axes, holding a centered 1170px content column inside a 1366px limiter,
stacking the five table variants in order with a Component Dock footer.

#### Scenario: Shell renders

- **GIVEN** the user visits the Headlock home page
- **THEN** the page background SHALL be `#fff` (white)
- **AND** the shell SHALL be `min-height: 100vh`, flex, centered
  horizontally and vertically, with `33px` vertical / `30px` horizontal
  padding
- **AND** the content column SHALL be 1170px wide, centered inside a 1366px
  limiter at desktop widths
- **AND** Lato (Google Fonts weights 400 and 700) SHALL be loaded and used
  for all table typography (the source self-hosts Lato-Regular/Lato-Bold
  woff2; the monorepo MUST load Lato via a Google Fonts `<link>` — NEVER
  copy the woff2 files)

#### Scenario: Footer attribution renders

- **GIVEN** the page shell is visible
- **THEN** a footer SHALL link `https://www.componentdock.com/` branded as
  "Component Dock" (the source snippet has NO footer — this is the monorepo
  mandate)
- **AND** the app SHALL contain ZERO references to ColorLib or
  preview.colorlib.com anywhere (comments included)

### Requirement: Shared fixed-header table scaffold renders

The system SHALL render each of the five variant cards as the SAME scaffold:
a relative-positioned block with a 60px top reserve, containing an
absolutely-positioned header TABLE over a 585px-max-height scrollable body
TABLE, five columns at the source widths, and 22 body rows.

#### Scenario: Two-table fixed-header mechanism works (SIGNATURE)

- **GIVEN** any variant card is visible
- **THEN** the header SHALL be a separate table absolutely positioned at
  `top: 0; left: 0; width: 100%` of the card
- **AND** the body SHALL be a separate scrollable container with
  `max-height: 585px; overflow: auto`
- **AND** when the user scrolls the body vertically, the header row SHALL
  stay fixed in place while the body rows scroll beneath it
- **AND** the mechanism SHALL be pure CSS (NO JavaScript, NO sticky-position
  header inside the scrolling table — the header table lives OUTSIDE the
  scroll container)

#### Scenario: Column geometry and spacing

- **GIVEN** any variant card is visible
- **THEN** the five columns SHALL be 33% / 13% / 22% / 19% / 13% wide
- **AND** column 1 cells SHALL have `padding-left: 40px` (except ver4:
  7px)
- **AND** every `th`/`td` SHALL have `font-weight: unset` (the Lato
  Regular/Bold faces carry the weight) and `padding-right: 10px`
- **AND** header cells SHALL have 18px top/bottom padding (ver5: 25px) and
  body cells 16px top/bottom (ver5: 10px)
- **AND** each variant block SHALL have `padding-top: 60px` reserving the
  absolute header height, and `margin-bottom: 110px` between blocks

#### Scenario: Data renders identically in all variants

- **GIVEN** any variant card is visible
- **THEN** the header labels SHALL be Class name · Type · Hours · Trainer ·
  Spots
- **AND** the body SHALL render 22 rows = the 11-row fitness schedule
  (Like a butterfly/Boxing/9:00 AM - 11:00 AM/Aaron Chapman/10 … Virtual
  Cycle/Gym/8:00 AM - 9:00 AM/Randy Porter/20) DUPLICATED exactly twice,
  matching the source
- **AND** all five variants SHALL share this one dataset

### Requirement: Ver1 renders the screenshot variant (periwinkle card)

The system SHALL render the FIRST variant as the rounded white card with a
solid periwinkle header and lavender zebra striping — the variant shown in
the TEMPLATES.md screenshot.

#### Scenario: Ver1 styling

- **GIVEN** the first variant card is visible
- **THEN** the header `th` cells SHALL be Lato-Bold 18px, color `#fff`,
  background `#6c7ae0`, line-height 1.4
- **AND** body `td` cells SHALL be Lato-Regular 15px, color `#808080`
- **AND** even body rows (`tr:nth-child(even)`) SHALL have background
  `#f8f6ff` (faint lavender zebra); odd rows stay transparent on white
- **AND** the card SHALL have `border-radius: 10px`, `overflow: hidden`,
  and `box-shadow: 0 0 40px 0 rgba(0,0,0,0.15)`
- **AND** a vertical scrollbar SHALL be visible along the card's right edge
  when the 22 rows overflow the 585px body (as in the screenshot)

### Requirement: Ver2 renders the red-header variant with header shadow

The system SHALL render the SECOND variant as a transparent-header card with
red header text, a soft shadow under the header, and hairline row borders.

#### Scenario: Ver2 styling

- **GIVEN** the second variant card is visible
- **THEN** the header `th` cells SHALL be Lato-Bold 18px, color `#fa4251`,
  background transparent
- **AND** the header block SHALL carry `box-shadow: 0 5px 20px 0
rgba(0,0,0,0.1)` (the header appears to float over the rows)
- **AND** body rows SHALL have `border-bottom: 1px solid #f2f2f2`
- **AND** the card SHALL have `border-radius: 10px` and shadow
  `0 0 40px rgba(0,0,0,0.15)`

### Requirement: Ver3 renders the dark variant

The system SHALL render the THIRD variant as a dark card: `#393939` header
with green uppercase labels over `#222222` body rows.

#### Scenario: Ver3 styling

- **GIVEN** the third variant card is visible
- **THEN** the card background SHALL be `#393939` with `border-radius: 10px`
  and shadow `0 0 40px rgba(0,0,0,0.15)`
- **AND** the header `th` cells SHALL be Lato-Bold 15px, color `#00ad5f`,
  `text-transform: uppercase`, background `#393939`
- **AND** body `td` cells SHALL be Lato-Regular 15px, color `#808080`,
  background `#222222`

### Requirement: Ver4 renders the blue hairline variant with scrollbar gutter

The system SHALL render the FOURTH variant as a radius-less, shadow-less
card with blue header text, 2px header underline, and the -20px gutter trick
that keeps the scrollbar right of the header.

#### Scenario: Ver4 styling

- **GIVEN** the fourth variant card is visible
- **THEN** the header `th` cells SHALL be Lato-Bold 18px, color `#4272d7`,
  background transparent, with `border-bottom: 2px solid #f2f2f2`
- **AND** the card SHALL have NO border-radius and NO box-shadow
- **AND** column-1 cells SHALL use `padding-left: 7px`
- **AND** the body rows SHALL have `border-bottom: 1px solid #f2f2f2`
- **AND** the card SHALL use `margin-right: -20px` with `padding-right:
20px` on both the header block and the body container, so the body's
  scrollbar sits in the gutter to the RIGHT of the header row

### Requirement: Ver5 renders the gray card-row variant with hover

The system SHALL render the FIFTH variant as detached card-like rows
(gray `#f7f7f7` cells on 10px white gutters, rounded corners) under a gray
uppercase header — the only variant with a hover effect.

#### Scenario: Ver5 styling

- **GIVEN** the fifth variant card is visible
- **THEN** the header `th` cells SHALL be Lato-Bold 14px, color `#555555`,
  `text-transform: uppercase`, background transparent, with 25px top/bottom
  padding
- **AND** body `td` cells SHALL be Lato-Regular 15px, color `#808080`,
  background `#f7f7f7`, 10px top/bottom padding
- **AND** body rows SHALL look like detached cards: `border-radius: 10px`,
  `border-bottom: 10px solid #fff`, table `border-collapse: separate;
border-spacing: 0 10px`, and transparent left/right borders on the
  first/last cells with 10px left/right radii
- **AND** on row hover the cells SHALL turn `#ebebeb` with `cursor: pointer`
  (hover applies to ver5 ONLY — the other four variants have no hover)
- **AND** the card SHALL use `margin-right: -30px` with `padding-right:
30px` on the header block and body container (gutter trick, like ver4)

### Requirement: No interactivity beyond native scrolling

The system SHALL have NO JavaScript-driven behavior — the source ZIP ships
no JS file; the fixed headers are pure CSS.

#### Scenario: Zero handlers invariant

- **GIVEN** any variant is visible
- **THEN** no state, event handlers, or client-side scripts SHALL drive
  table behavior
- **AND** the only interaction SHALL be native vertical scrolling of each
  body container (plus ver5's CSS-only hover)
- **AND** scrolling ANY variant's body SHALL NOT move its header

## Verification checklist

- [ ] `openspec/specs/template-headlock/spec.md` exists on the PR branch and
      validates (`npx openspec validate template-headlock --type spec`)
- [ ] App folder `apps/headlock`, package `@free-react-templates/headlock`,
      `npm install` at root so the lockfile registers the workspace
- [ ] `homepage` = `https://headlock.free.componentdock.com`, `public/CNAME`
      = `headlock.free.componentdock.com`
- [ ] `index.html` loads Lato 400/700 via Google Fonts `<link>`; NO copied
      woff2 files, NO ColorLib strings anywhere in the app
- [ ] Five variant cards render in order ver1→ver5, each with the
      two-table fixed-header mechanism (header table absolute, body
      `max-height: 585px; overflow: auto`) — header stays fixed while body
      scrolls (pure CSS)
- [ ] Column widths 33/13/22/19/13%, column-1 indent 40px (ver4: 7px),
      60px top reserve, 110px block spacing
- [ ] Ver1: `#6c7ae0` header / white bold labels / `#f8f6ff` even-row zebra /
      radius 10px + `0 0 40px rgba(0,0,0,.15)` shadow — matches the
      TEMPLATES.md screenshot
- [ ] Ver2: `#fa4251` transparent header + `0 5px 20px rgba(0,0,0,.1)` head
      shadow + `#f2f2f2` row borders
- [ ] Ver3: `#393939` card, `#00ad5f` uppercase header, `#222222` rows
- [ ] Ver4: `#4272d7` header + 2px `#f2f2f2` underline, no radius/shadow,
      -20px gutter trick
- [ ] Ver5: `#555555` uppercase 14px header, `#f7f7f7` card-rows on 10px
      white gutters, `tr:hover td` → `#ebebeb` + pointer cursor, -30px
      gutter trick
- [ ] 22 body rows per variant (11-row schedule ×2), five header labels
- [ ] Footer links `https://www.componentdock.com/` ("Component Dock")
- [ ] Tests (TDD, 100% coverage on changed code) mirror the Gherkin
      scenarios; `scripts/verify-app.sh headlock` passes
- [ ] PR description records: source slug `fixed-header-table`, preview
      UNREACHABLE (both paths 404; ZIP
      `preview.colorlib.com/downloads/free/fixed-header-table.zip` was the
      reference), design tokens used, and what differs (new name Headlock;
      Lato via Google Fonts instead of self-hosted woff2; picsum placeholders
      not needed — zero images; Component Dock footer added)
