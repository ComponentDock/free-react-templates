# Pliancy — Design Notes & Replication Research

## Source identification

- **ColorLib item:** "Responsive Table V1"
- **Source URL:** https://colorlib.com/wp/template/responsive-table-v1/
- **Page title:** "Responsive Table V1 - Free HTML/CSS Table Template 2026 -
  Colorlib"
- **Meta description:** "HTML5 & CSS3 based table example that can be used
  as a template for your website. Works with Bootstrap 4, 5 and 6, or on
  its own."
- **TEMPLATES.md screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/Table_Responsive_v1.jpg
  (HTTP 200, 115,908 bytes, 1366×939)

## Preview reachability

Both preview paths return **HTTP 404** (verified 2026-09-30):

- `https://preview.colorlib.com/theme/responsive-table-v1/` → 404 (9 bytes)
- `https://preview.colorlib.com/theme/bootstrap/responsive-table-v1/` → 404

NOTE: the `bootstrap/` path works for the css-table-12..20 family but NOT
for this slug — do not re-derive it (same situation as Headlock /
fixed-header-table). The source page offers a ZIP download which IS
reachable:

- `https://preview.colorlib.com/downloads/free/responsive-table-v1.zip` →
  HTTP 200, 67,253 bytes

The ZIP was extracted and is the authoritative reference for this prep
(same precedent as Headlock / fixed-header-table and Fixstack /
fixed-column-table).

## Source ZIP contents

| File                         | Size         | Notes                                                                                                         |
| ---------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| `index.html`                 | 5,095 bytes  | Full markup: ONE `.limiter > .container-table100 > .wrap-table100 > .table100 > table` block (thead + 14 rows) |
| `css/style.css`              | 6,723 bytes  | Single self-contained sheet ("Every style this snippet uses, and nothing else. No framework, no build step.")  |
| `fonts/OpenSans-Regular.woff2` | 60,412 bytes | Body + header font (`font-family: OpenSans-Regular`, weight 400 ONLY)                                         |
| `images/icons/favicon.ico`   | 32,038 bytes | Favicon (generic ColorLib favicon)                                                                             |
| `README.md`                  | 1,262 bytes  | Title "**Table V01**" — STALE copy-pasted title from a sibling snippet; ignore it                             |

**NO JavaScript file ships in the ZIP** (no `js/` folder at all) — the
responsive reflow is 100% CSS (`@media (max-width: 992px)` + `td:before`
pseudo-element labels). The README template text mentions `js/snippet.js`,
but the ZIP does not contain one.

## Screenshot analysis (1366×939, visually analyzed 2026-09-30)

The TEMPLATES.md screenshot shows the DESKTOP mode of the template:

- **Page:** the full-viewport 45deg diagonal gradient — blue-violet
  (bottom-left) rising to magenta (top-right). CSS canonical:
  `linear-gradient(45deg, #4158d0, #c850c0)`.
- **Card:** ONE wide white rounded card (radius ~10px) centered on the
  gradient, ~1170px wide. No visible shadow in the stylesheet — the faint
  bottom-edge shading in the screenshot is a JPEG/contrast artifact
  against the magenta, NOT a declared `box-shadow` (CSS is canonical: none).
- **Header row:** solid dark plum-charcoal band (CSS canonical `#36304a`)
  with WHITE regular-weight labels: Date · Order ID · Name · Price ·
  Quantity · Total (18px Open Sans 400 — the sheet explicitly reverts the
  UA bold via `font-weight: unset`).
- **Body rows:** an electronics ORDER LOG (iPhone X 64Gb Grey $999.00 /
  Samsung S8 Black $756.00 / Game Console Controller $22.00 …), medium
  gray text (CSS canonical `#808080`), Open Sans 400 15px, ~50px rows.
- **Zebra striping:** even rows carry a light-gray tint (CSS canonical
  `#f5f5f5`); odd rows are white.
- **Alignment:** Date / Order ID / Name left-aligned; Price / Quantity /
  Total values right-aligned (CSS: `.column4/5/6 { text-align: right }` —
  applies to th AND td).
- **Hover affordance:** a pointer hand cursor is visible over one row in
  the screenshot — the CSS `tbody tr:hover` affordance (color `#555555`,
  bg `#f5f5f5`, cursor pointer).
- **Data caveat:** the screenshot's dataset is a DIFFERENT snapshot from
  the ZIP markup (screenshot has iPhone X 256Gb Black $1199.00, Macbook
  Pro Retina 2017 at $2999.00, Smartwatch 2.0, unique order IDs
  200398→200381). The ZIP `index.html` markup is canonical — replicate the
  ZIP's verbatim 14 rows (including its rows 11–14 = rows 7–10 duplicate
  quirk).
- **No navbar, no heading, no footer** in the source snippet — just the
  table card on the gradient.

## Structure (section by section, DOM order)

```
body
└─ .limiter                      width 100%, margin 0 auto
   └─ .container-table100        gradient #4158d0→#c850c0 (45deg), min-height 100vh,
   │                             flex, align-items center, justify-content center,
   │                             flex-wrap wrap, padding 33px 30px (≤576px: 15px sides)
   │  └─ .wrap-table100          width 1170px
   │     └─ .table100            (plain wrapper div)
   │        └─ table             white, radius 10px, overflow hidden, w-100%,
   │                             border-collapse, border-spacing 1
   │           ├─ thead > tr.table100-head   height 60px, bg #36304a → 6 th
   │           └─ tbody                    14 tr (50px each, zebra even rows)
   └─ footer (Component Dock attribution — SOURCE HAS NONE; monorepo mandate)
```

### The responsive reflow mechanism (SIGNATURE — document carefully)

At `@media screen and (max-width: 992px)` the sheet transforms the table
into stacked label:value cards — PURE CSS, no JS:

1. `table { display: block }` — the table leaves table layout entirely.
2. `table > *, table tr, table td, table th { display: block }` — every
   descendant becomes a block.
3. `table thead { display: none }` — the header row VANISHES at mobile
   widths (the labels are re-injected per-cell below).
4. `table tbody tr { height: auto; padding: 37px 0 }` — each row becomes a
   separated card block (37px vertical padding).
5. `table tbody tr td { padding-left: 40% !important; margin-bottom: 24px }
   ` — values indent past the label column; `tr td:last-child {
   margin-bottom: 0 }` closes each card.
6. `table tbody tr td:before` — the pseudo-element label injection:
   - shared style: `font-family: OpenSans-Regular; font-size: 14px; color:
     #999999; line-height: 1.2; font-weight: unset; position: absolute;
     width: 40%; left: 30px; top: 0`
   - `content` per column position (`nth-child`):
     1 "Date" · 2 "Order ID" · 3 "Name" · 4 "Price" · 5 "Quantity" ·
     6 "Total"
7. `.column4, .column5, .column6 { text-align: left }` — the numeric
   columns switch from right to left alignment (labels now live on the
   left).
8. All `.column1..6 { width: 100% }` — full-bleed stacked cells.
9. `tbody tr { font-size: 14px }` — body text shrinks 15px → 14px.

The hover rules (`tbody tr:hover { color: #555; background: #f5f5f5;
cursor: pointer }`) and zebra (`nth-child(even) #f5f5f5`) are NOT
breakpoint-scoped — they apply in BOTH modes.

### Desktop column geometry

| Column | Width  | Alignment     | Extra padding              |
| ------ | ------ | ------------- | -------------------------- |
| column1 (Date)     | 260px  | left   | `padding-left: 40px` (first-column indent) |
| column2 (Order ID) | 160px  | left   | —                          |
| column3 (Name)     | 245px  | left   | —                          |
| column4 (Price)    | 110px  | right  | —                          |
| column5 (Quantity) | 170px  | right  | —                          |
| column6 (Total)    | 222px  | right  | `padding-right: 62px`      |

Base cell rule: `table td, table th { padding-left: 8px; text-align: left
}` — column4/5/6 override alignment to right.

## Data (verbatim from the source ZIP — canonical, 14 rows)

Headers: Date · Order ID · Name · Price · Quantity · Total.

| #   | Date             | Order ID | Name                    | Price    | Quantity | Total    |
| --- | ---------------- | -------- | ----------------------- | -------- | -------- | -------- |
| 1   | 2017-09-29 01:22 | 200398   | iPhone X 64Gb Grey      | $999.00  | 1        | $999.00  |
| 2   | 2017-09-28 05:57 | 200397   | Samsung S8 Black        | $756.00  | 1        | $756.00  |
| 3   | 2017-09-26 05:57 | 200396   | Game Console Controller | $22.00   | 2        | $44.00   |
| 4   | 2017-09-25 23:06 | 200392   | USB 3.0 Cable           | $10.00   | 3        | $30.00   |
| 5   | 2017-09-24 05:57 | 200391   | Smartwatch 4.0 LTE Wifi | $199.00  | 6        | $1494.00 |
| 6   | 2017-09-23 05:57 | 200390   | Camera C430W 4k         | $699.00  | 1        | $699.00  |
| 7   | 2017-09-22 05:57 | 200389   | Macbook Pro Retina 2017 | $2199.00 | 1        | $2199.00 |
| 8   | 2017-09-21 05:57 | 200388   | Game Console Controller | $999.00  | 1        | $999.00  |
| 9   | 2017-09-19 05:57 | 200387   | iPhone X 64Gb Grey      | $999.00  | 1        | $999.00  |
| 10  | 2017-09-18 05:57 | 200386   | iPhone X 64Gb Grey      | $999.00  | 1        | $999.00  |
| 11  | 2017-09-22 05:57 | 200389   | Macbook Pro Retina 2017 | $2199.00 | 1        | $2199.00 |
| 12  | 2017-09-21 05:57 | 200388   | Game Console Controller | $999.00  | 1        | $999.00  |
| 13  | 2017-09-19 05:57 | 200387   | iPhone X 64Gb Grey      | $999.00  | 1        | $999.00  |
| 14  | 2017-09-18 05:57 | 200386   | iPhone X 64Gb Grey      | $999.00  | 1        | $999.00  |

(Rows 11–14 = rows 7–10 repeated — source quirk with duplicate order IDs
200389/200388/200387/200386. REPLICATE as-is; do not "fix" it.)

## Tailwind implementation notes (for the implementer)

- **992px is NOT a default Tailwind breakpoint** (640/768/1024/1280). Use
  arbitrary max-width variants (`max-[992px]:…`) or register a custom
  breakpoint in `@theme`. Same for the 576px padding tweak
  (`max-[576px]:px-[15px]`).
- The `:before` label trick maps to `before:content-[attr(data-label)]
  before:absolute before:left-[30px] before:top-0 before:w-[40%]
  before:text-sm before:text-[#999]` with a `data-label` attribute per
  `<td>` ("Date", "Order ID", "Name", "Price", "Quantity", "Total").
- `font-weight: unset` on th = **regular 400**. Tailwind preflight does
  NOT reset `th` weight in v4 — set `font-normal` explicitly on header
  cells, or they render bold (UA default).
- Zebra = `even:bg-[#f5f5f5]`; hover = `hover:bg-[#f5f5f5]
  hover:text-[#555] cursor-pointer` on `<tr>`.
- Gradient page = arbitrary bg utility or an `@theme` token, e.g.
  `bg-[linear-gradient(45deg,#4158d0,#c850c0)]`, `min-h-screen`,
  `flex items-center justify-center`, `px-[30px] py-[33px]`.
- Column widths via `<colgroup>` or per-column classes; keep
  `text-right` only above the 992px boundary (cols 4–6 become
  `text-left` in stacked mode — express as
  `max-[992px]:text-left text-right`).
- NO `box-shadow` on the table card (screenshot shading is an artifact).
- Icons: none needed. Images: none — no picsum placeholders required.

## What the implementer must NOT copy / must change

- **Never copy assets:** no woff2 fonts (load Open Sans 400 via Google
  Fonts `<link>`), no favicon, no CSS files.
- **Zero images:** this template has no photos — no picsum placeholders
  required.
- **Zero ColorLib references** anywhere in the app (comments included) —
  provenance lives only in this spec, TEMPLATES.md, and the PR.
- **New name only:** app folder `apps/pliancy`, package
  `@free-react-templates/pliancy`. The source keeps its name "Responsive
  Table V1".
- **Add the Component Dock footer** (`https://www.componentdock.com/`,
  "Component Dock") — the source snippet has no footer.
- **Stale source artifacts to ignore:** README title "Table V01"; the
  README's mention of `js/snippet.js` (no JS ships). The responsive
  behavior is purely CSS.
- **Do not "fix" the data quirk:** rows 11–14 duplicating rows 7–10 is in
  the source — replicate it.
