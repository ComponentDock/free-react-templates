# Flexure — Design Notes & Replication Research

## Source identification

- **ColorLib item:** "Responsive Table V2"
- **Source URL:** https://colorlib.com/wp/template/responsive-table-v2/
- **Page title:** "Responsive Table V2 - Free HTML/CSS Table Template 2026 -
  Colorlib"
- **Meta description:** "HTML5 & CSS3 based table example that can be used
  as a template for your website. Works with Bootstrap 4, 5 and 6, or on
  its own."
- **TEMPLATES.md screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/Table_Responsive_v2.jpg
  (HTTP 200, 66,205 bytes, 1366×939)

## Preview reachability

Both preview paths return **HTTP 404** (verified 2026-09-30):

- `https://preview.colorlib.com/theme/responsive-table-v2/` → 404 (9 bytes)
- `https://preview.colorlib.com/theme/bootstrap/responsive-table-v2/` → 404

NOTE: the `bootstrap/` path works for the css-table-12..20 family but NOT
for this slug — same situation as its V1 sibling Pliancy /
responsive-table-v1 and Headlock / fixed-header-table. The source page
offers a ZIP download which IS reachable:

- `https://preview.colorlib.com/downloads/free/responsive-table-v2.zip` →
  HTTP 200, 105,542 bytes

The ZIP was extracted and is the authoritative reference for this prep
(same precedent as Pliancy / responsive-table-v1, Headlock /
fixed-header-table, and Fixstack / fixed-column-table).

## Source ZIP contents

| File                          | Size         | Notes                                                                                                         |
| ----------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `index.html`                  | 3,807 bytes  | Full markup: `.limiter > .container-table100 > .wrap-table100 > .cl-table` with `.cl-row.header` + 8 `.cl-row` body rows, each cell carrying `data-title`          |
| `css/style.css`               | 6,050 bytes  | Single self-contained sheet ("Every style this snippet uses, and nothing else. No framework, no build step.")  |
| `fonts/Poppins-Regular.woff2` | —            | Body + header face (`font-family: Poppins-Regular`)                                                            |
| `fonts/Poppins-Bold.woff2`    | —            | SECOND face — used ONLY for stacked-mode `:before` labels (`font-family: Poppins-Bold`)                        |
| `images/icons/favicon.ico`    | —            | Favicon (generic ColorLib favicon)                                                                             |
| `README.md`                   | 1,262 bytes  | Title "**Table V02**" (correct — unlike V1's stale "Table V01"), but "What's inside" still lists `js/snippet.js` — STALE template text |

**NO JavaScript file ships in the ZIP** (no `js/` folder at all) — the
responsive reflow is 100% CSS (`@media (max-width: 768px)` + `:before` +
`content: attr(data-title)`). The README's mention of `js/snippet.js` is
boilerplate; ignore it (same stale-text situation as V1).

## Screenshot analysis (1366×939, visually analyzed 2026-09-30)

The TEMPLATES.md screenshot shows the DESKTOP mode of the template:

- **Page:** a SOLID pale-periwinkle / light blue-lavender fill across the
  full viewport (CSS canonical `#c4d3f6`). NOT a gradient — this is the
  clearest visual difference from its V1 sibling Pliancy.
- **Card:** ONE wide white rounded card (radius ~10px, CSS canonical —
  rounding lives on the 960px `.wrap-table100`) centered on the periwinkle.
  No shadow in the stylesheet — none visible.
- **Header band:** solid periwinkle-indigo band (CSS canonical `#6c7ae0`)
  with WHITE regular-weight labels: Full Name · Age · Job Title · Location
  (18px Poppins-Regular — the sheet sets `font-weight: unset !important`
  so they render regular, NOT bold).
- **Body rows:** an employee DIRECTORY (Vincent Williamson 31 iOS
  Developer Washington / Joseph Smith 27 Project Manager Somerville, MA /
  Justin Black …), medium gray text (CSS canonical `#666666`), Poppins
  15px. NO zebra striping — rows are white, separated by thin
  light-gray bottom borders (CSS canonical `#f2f2f2`).
- **Alignment:** ALL four columns left-aligned (unlike V1, which
  right-aligned its numeric columns).
- **Hover affordance:** one body row in the screenshot shows a pale
  lavender tint (CSS canonical `#ececff`) with a pointer-hand cursor —
  the `.cl-row:hover` affordance. NOTE: the hover rule is not scoped to
  body rows — hovering the header band ALSO tints it `#ececff` (equal
  specificity, hover rule comes later in the sheet — CSS canonical quirk,
  replicate).
- **Data caveat:** the screenshot's dataset is a DIFFERENT snapshot from
  the ZIP markup — screenshot row 2 is "Tyler Reyes, 22, UI/UX Designer,
  New York", row 7 "Adam Henderson, 35, UI/UX Designer, Washington",
  row 8 "Louis Smith, 27, Photographer, San Francisco"; the ZIP instead
  REPEATS rows 1–2 (Vincent Williamson, Joseph Smith) at rows 7–8. The
  ZIP `index.html` markup is canonical — replicate the ZIP's verbatim 8
  rows (including its rows 7–8 = rows 1–2 duplicate quirk).
- **No navbar, no heading, no footer** in the source snippet — just the
  grid card on the periwinkle page.

## Structure (section by section, DOM order)

```
body
└─ .limiter                      width 100%, margin 0 auto
   └─ .container-table100        SOLID #c4d3f6, min-height 100vh,
   │                             flex, align-items center, justify-content center,
   │                             flex-wrap wrap, padding 33px 30px (NO small-viewport override)
   │  └─ .wrap-table100          width 960px, border-radius 10px, overflow hidden
   │     └─ .cl-table            display: table, width 100% (DIV-based — NO real <table>)
   │        ├─ .cl-row.header    display: table-row, bg #6c7ae0 → 4 .cell (white 18px labels)
   │        └─ 8 × .cl-row       display: table-row, bg #fff → 4 .cell each
   │                             (data-title="Full Name|Age|Job Title|Location", 15px #666,
   │                              py 20px, border-bottom 1px #f2f2f2)
   └─ footer (Component Dock attribution — SOURCE HAS NONE; monorepo mandate)
```

Note the source's div table emulation: `.cl-table { display: table }`,
`.cl-row { display: table-row }`, `.cell { display: table-cell }`, with
`.cl-table, .cl-row { width: 100% !important }` and per-column widths on
`.cell:nth-child(n)`. A dead nested rule `.cl-table .cl-table {
background-color: #fff }` exists in the sheet (no nested table in the
markup) — ignore it. The spec PERMITS an equivalent DOM (e.g. semantic
`<table>`) provided every visual token matches; the div structure is the
1:1-fidelity choice.

### The responsive reflow mechanism (SIGNATURE — document carefully)

At `@media screen and (max-width: 768px)` — **768px, NOT V1's 992px** —
the sheet transforms the div-table into stacked label:value blocks —
PURE CSS, no JS:

1. `.cl-table { display: block }` — the grid leaves table layout entirely.
2. `.cl-row { display: block }` — every row becomes a block, gaining
   `border-bottom: 1px solid #f2f2f2` and `padding: 30px 15px 18px 0`
   (top/right/bottom/left).
3. `.cl-row.header { padding: 0; height: 0px }` AND
   `.cl-row.header .cell { display: none }` — the header band COLLAPSES
   (its labels vanish; they are re-injected per-cell below).
4. `.cell { display: block }` — every body cell becomes a block with
   `border: none`, `padding-left: 30px`, `padding-top/bottom: 16px`, and
   font **Poppins-Regular 18px `#555555`** (body text GROWS 15→18px —
   the opposite of V1, which shrank 15→14px).
5. `.cl-row .cell:before` — the pseudo-element label injection:
   - shared style: `font-family: Poppins-Bold` (the BOLD FACE — the
     `font-weight: unset !important` does NOT stop a distinct
     bold-face @font-family from rendering), `font-size: 12px`, `color:
     #808080`, `line-height: 1.2`, `text-transform: uppercase`,
     `margin-bottom: 13px`, `min-width: 98px`, `display: block`
   - `content: attr(data-title)` — **reads each cell's `data-title`
     ATTRIBUTE** (e.g. `data-title="Job Title"` renders "JOB TITLE").
     THIS IS THE KEY DIFFERENCE FROM V1: V1 injects labels by
     `nth-child` position with hardcoded strings; V2 reads a per-cell
     data attribute. Labels stack ABOVE each value (block flow), not
     absolutely positioned like V1's side labels.
6. `.cl-table, .cl-row, .cell { width: 100% !important }` — full-bleed
   stacked blocks.

The hover rule (`.cl-row:hover { background-color: #ececff; cursor:
pointer }`) is NOT breakpoint-scoped — it applies in BOTH modes, and it
applies to ALL rows including the header band (in stacked mode the header
has no visible cells anyway).

### Desktop column geometry

| Column                    | Width  | Alignment | Extra padding         |
| ------------------------- | ------ | --------- | --------------------- |
| cell 1 (Full Name)        | 360px  | left      | `padding-left: 40px` (first-column indent) |
| cell 2 (Age)              | 160px  | left      | —                     |
| cell 3 (Job Title)        | 250px  | left      | —                     |
| cell 4 (Location)         | 190px  | left      | —                     |

Base cell rule: `.cl-row .cell { font-family: Poppins-Regular; font-size:
15px; color: #666666; line-height: 1.2; font-weight: unset !important;
padding-top: 20px; padding-bottom: 20px; border-bottom: 1px solid
#f2f2f2 }`. Header cells: Poppins-Regular 18px `#fff`, `padding-top/
bottom: 19px` (no border). There is NO `text-align: right` anywhere in
the sheet — every cell is left-aligned.

## Data (verbatim from the source ZIP — canonical, 8 rows)

Headers: Full Name · Age · Job Title · Location.

| #   | Full Name          | Age | Job Title           | Location       |
| --- | ------------------ | --- | ------------------- | -------------- |
| 1   | Vincent Williamson | 31  | iOS Developer       | Washington     |
| 2   | Joseph Smith       | 27  | Project Manager     | Somerville, MA |
| 3   | Justin Black       | 26  | Front-End Developer | Los Angeles    |
| 4   | Sean Guzman        | 25  | Web Designer        | San Francisco  |
| 5   | Keith Carter       | 20  | Graphic Designer    | New York, NY   |
| 6   | Austin Medina      | 32  | Photographer        | New York       |
| 7   | Vincent Williamson | 31  | iOS Developer       | Washington     |
| 8   | Joseph Smith       | 27  | Project Manager     | Somerville, MA |

(Rows 7–8 = rows 1–2 repeated — source quirk. REPLICATE as-is; do not
"fix" it. The TEMPLATES.md screenshot shows a different 3-row snapshot —
ZIP markup is canonical.)

## Tailwind implementation notes (for the implementer)

- **768px is a default Tailwind breakpoint (`md:` = min-width 768px), but
  `max-md:` = max-width 767.996px does NOT cover exactly 768px where the
  source switches to stacked mode** (source `@media (max-width: 768px)`
  is inclusive). Use arbitrary `max-[768px]:` variants for exact
  fidelity; accept the 0.004px difference only if you consciously choose
  `max-md:`.
- The `:before` label trick maps to `before:content-[attr(data-title)]
  before:block before:font-bold before:text-xs before:text-[#808080]
  before:uppercase before:mb-[13px] before:min-w-[98px]` with a
  `data-title` attribute per cell ("Full Name", "Age", "Job Title",
  "Location"). `before:font-bold` (Poppins 700) = the source's separate
  Poppins-Bold FACE.
- Header label weight: source is Poppins-Regular + `font-weight: unset`
  → **regular 400**. If you use div cells there is no UA bold default;
  if you use a real `<table>`, `th` renders bold — set `font-normal`
  explicitly (Tailwind v4 preflight does NOT reset th weight).
- NO zebra classes — rows are white with `border-b border-[#f2f2f2]`
  on cells (desktop). Hover = `hover:bg-[#ececff] cursor-pointer` on
  EVERY row including the header band (CSS-canonical quirk —
  `.cl-row:hover` is not scoped).
- Card rounding on the WRAP: `w-[960px] rounded-[10px] overflow-hidden`;
  the periwinkle page = `bg-[#c4d3f6] min-h-screen flex items-center
  justify-center flex-wrap px-[30px] py-[33px]` (no ≤576px override — V2
  has none).
- Column widths via per-column classes or `<colgroup>`:
  `w-[360px] pl-10` / `w-[160px]` / `w-[250px]` / `w-[190px]`; table +
  rows `w-full`.
- NO `box-shadow` on the card (there is no artifact to explain — the
  source simply declares none).
- Icons: none needed. Images: none — no picsum placeholders required.

## What the implementer must NOT copy / must change

- **Never copy assets:** no woff2 fonts (load Poppins 400 + 700 via
  Google Fonts `<link>`), no favicon, no CSS files.
- **Zero images:** this template has no photos — no picsum placeholders
  required.
- **Zero ColorLib references** anywhere in the app (comments included) —
  provenance lives only in this spec, TEMPLATES.md, and the PR.
- **New name only:** app folder `apps/flexure`, package
  `@free-react-templates/flexure`. The source keeps its name "Responsive
  Table V2".
- **Add the Component Dock footer** (`https://www.componentdock.com/`,
  "Component Dock") — the source snippet has no footer.
- **Stale source artifacts to ignore:** the README's "What's inside"
  mention of `js/snippet.js` (no JS ships); the dead `.cl-table
  .cl-table` nested background rule.
- **Do not "fix" the data quirk:** rows 7–8 duplicating rows 1–2 is in
  the source — replicate it.
- **Do not borrow Pliancy's tokens:** the V1 sibling is a gradient-page
  Open-Sans REAL-table template with a 992px breakpoint, nth-child
  absolute labels, zebra striping, and right-aligned numeric columns —
  NONE of that applies here.
