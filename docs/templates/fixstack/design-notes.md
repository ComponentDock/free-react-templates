# Fixstack — Design Notes & Replication Research

## Source identification

- **ColorLib item:** "Fixed Column Table"
- **Source URL:** https://colorlib.com/wp/template/fixed-column-table/
- **Page title:** "Fixed Column Table - Free HTML/CSS Table Template
  2026 - Colorlib"
- **Meta description:** "HTML5 & CSS3 based table example that can be
  used as a template for your website. Works with Bootstrap 4, 5 and
  6, or on its own."
- **TEMPLATES.md screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fixed-column-table.jpg

## Preview reachability

Both preview paths return **HTTP 404** (verified 2026-09-30):

- `https://preview.colorlib.com/theme/fixed-column-table/` → 404
- `https://preview.colorlib.com/theme/bootstrap/fixed-column-table/` → 404
- `https://preview.colorlib.com/theme/table/fixed-column-table/` → 404
- `https://preview.colorlib.com/theme/css-table/fixed-column-table/` → 404

The source page offers a ZIP download which IS reachable:

- `https://preview.colorlib.com/downloads/free/fixed-column-table.zip`
  → HTTP 200, 139,594 bytes

The ZIP was extracted and is the authoritative reference for this prep.

## Source ZIP contents

| File | Size | Notes |
|------|------|-------|
| `index.html` | 5,315 bytes | Full markup, two-table layout |
| `css/style.css` | 5,895 bytes | Single self-contained sheet, no framework |
| `fonts/Roboto-Medium.woff2` | 65,692 bytes | Body cell font |
| `fonts/Roboto-Bold.woff2` | 64,816 bytes | Header label font |
| `images/icons/favicon.ico` | 32,038 bytes | Favicon |
| `README.md` | 1,261 bytes | "Table V05" — Colorlib free snippet |

**NO JavaScript file** — the source has zero interactivity.

## Screenshot analysis

The TEMPLATES.md screenshot shows:

- **Page background:** vivid purple-to-pink vertical gradient. The
  top of the viewport is purple (`#c471f5`), transitioning to pink
  (`#fa71cd`) at the bottom. The gradient fills the entire viewport.
- **Table card:** white card centered in the viewport, sitting on
  the gradient. The card is wide (spans most of the viewport width)
  and contains the table.
- **Table structure:** two-table layout. The first column
  ("EMPLOYEES") is fixed/visible on the left. The remaining columns
  (POSITION, START DATE, LAST ACTIVITY, CONTACTS, and more beyond
  the fold) are in a horizontally scrollable area.
- **Header row:** bold uppercase dark text. "EMPLOYEES" is the
  first-column header; the scrollable headers are POSITION, START
  DATE, LAST ACTIVITY, CONTACTS (and Age, Address, Card No beyond
  the visible area).
- **Body rows:** 7 rows of employee data. First-column names appear
  in a slightly darker gray than the other columns.
- **Row separators:** thin light-gray horizontal lines between rows.
- **Scrollbar:** a horizontal scrollbar is visible at the bottom of
  the table's scrollable area, confirming the fixed-column effect.
- **No checkboxes, no buttons, no links, no interactivity** visible
  in the screenshot.

## CSS token extraction (from source style.css)

### Page shell

```css
.limiter {
  width: 100%;
  margin: 0 auto;
  background: #fa71cd;
  background: linear-gradient(bottom, #c471f5, #fa71cd);
}
```

**Gradient:** vertical, bottom→top: `#fa71cd` (pink, bottom) →
`#c471f5` (purple, top). In Tailwind: `bg-gradient-to-t
from-[#fa71cd] to-[#c471f5]`.

```css
.container-table100 {
  max-width: 1366px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 33px 100px;
}
```

**Container:** max-width 1366px, min-height 100vh, flex center both
axes, padding 33px 100px.

```css
.table100 {
  background-color: #fff;
}
```

**Table card:** white background.

### Fonts

```css
@font-face {
  font-family: Roboto-Medium;
  src: url('../fonts/Roboto-Medium.woff2') format('woff2');
}
@font-face {
  font-family: Roboto-Bold;
  src: url('../fonts/Roboto-Bold.woff2') format('woff2');
}
```

**Fonts:** self-hosted Roboto-Medium (body) and Roboto-Bold
(headers). In the monorepo: Google Fonts `<link>` for Roboto 500/700.

### Fixed first column

```css
.table100-firstcol {
  background-color: #fff;
  position: absolute;
  z-index: 1000;
  width: 310px;
  top: 0;
  left: 0;
}
.table100-firstcol table {
  background-color: #fff;
}
```

**Fixed column:** absolute positioning, 310px wide, z-index 1000,
white background, anchored top-left. This is the SIGNATURE effect —
the first column stays visible while the second table scrolls.

### Scrollable area

```css
.wrap-table100-nextcols {
  width: 100%;
  overflow: auto;
  padding-left: 310px;
  padding-bottom: 28px;
}
.table100-nextcols table {
  table-layout: fixed;
}
```

**Scrollable area:** overflow auto, padding-left 310px (offset for
the fixed column), padding-bottom 28px. The second table uses
`table-layout: fixed` for predictable column widths.

### Column widths

```css
.column1 { width: 100%; padding-left: 40px; }
.column2 { width: 225px; padding-left: 55px; }
.column3 { width: 205px; }
.column4 { width: 195px; }
.column5 { width: 235px; }
.column6 { width: 170px; }
.column7 { width: 330px; }
.column8 { width: 305px; }
```

**Column widths:** column1 fills the 310px fixed area (100% + 40px
left padding). Scrollable columns: 225/205/195/235/170/330/305px.
Total scrollable width ≈ 1,665px + 310px fixed = ~1,975px.

### Header styling

```css
.table100.ver1 th {
  font-family: Roboto-Bold;
  font-size: 14px;
  color: #333333;
  line-height: 1.4;
  text-transform: uppercase;
}
```

**Headers:** Roboto-Bold, 14px, `#333333`, uppercase, line-height
1.4. The `th,td { font-weight: unset }` rule means the font-face
itself carries the weight (Bold = 700).

### Body cell styling

```css
.table100.ver1 td {
  font-family: Roboto-Medium;
  font-size: 15px;
  line-height: 1.4;
}
.table100.ver1 .table100-firstcol td {
  color: #666666;
}
.table100.ver1 .table100-nextcols td {
  color: #999999;
}
```

**Body cells:** Roboto-Medium, 15px, line-height 1.4. First-column
cells: `#666666` (darker gray). Other-column cells: `#999999`
(lighter gray).

### Row separators

```css
.table100.ver1 tr {
  border-bottom: 1px solid #f2f2f2;
}
```

**Row separators:** 1px solid `#f2f2f2` bottom border on every row.
No top border, no vertical borders.

### Cell padding

```css
.table100 th {
  padding-top: 21px;
  padding-bottom: 21px;
}
.table100 td {
  padding-top: 16px;
  padding-bottom: 16px;
}
th, td {
  padding-right: 10px;
}
```

**Cell padding:** th = 21px top/bottom, td = 16px top/bottom,
padding-right 10px on all cells.

## HTML structure (from source index.html)

```
div.limiter                          ← gradient background
  div.container-table100             ← flex center, max-width 1366px
    div.wrap-table100                ← width 100%
      div.table100.ver1              ← white bg, position relative
        div.table100-firstcol        ← absolute, 310px, z-index 1000
          table                      ← single-column table
            thead > tr.row100.head > th.cell100.column1 "Employees"
            tbody > tr.row100.body × 7 > td.cell100.column1
              (Brandon Green, Kathy Daniels, Elizabeth Alvarado,
               Michael Coleman, Jason Cox, Christian Perkins,
               Emily Wheeler)
        div.wrap-table100-nextcols.js-pscroll   ← overflow auto, pl 310px
          div.table100-nextcols      ← table-layout fixed
            table
              thead > tr.row100.head > th.cell100.column2-8
                (Position, Start date, Last Activity, Contacts,
                 Age, Address, Card No)
              tbody > tr.row100.body × 7 > td.cell100.column2-8
                (7 rows of employee data)
```

## Data rows (from source HTML)

| # | Employee | Position | Start date | Last Activity | Contacts | Age | Address | Card No |
|---|----------|----------|------------|---------------|----------|-----|---------|---------|
| 1 | Brandon Green | CMO | 16 Nov 2012 | 16 Nov 2017 | brandon94@example.com | 30 | New York City, NY | 424242xxxxxx6262 |
| 2 | Kathy Daniels | Marketing | 16 Nov 2015 | 30 Nov 2017 | kathy_82@example.com | 26 | New York City, NY | 424242xxxxxx1616 |
| 3 | Elizabeth Alvarado | CFO | 16 Nov 2013 | 30 Nov 2017 | elizabeth82@example.com | 32 | New York City, NY | 424242xxxxxx5326 |
| 4 | Michael Coleman | Designer | 16 Nov 2013 | 30 Nov 2017 | michael94@example.com | 22 | New York City, NY | 424242xxxxxx6328 |
| 5 | Jason Cox | Developer | 16 Nov 2017 | 30 Nov 2017 | jasoncox@example.com | 25 | New York City, NY | 424242xxxxxx7648 |
| 6 | Christian Perkins | Sale | 16 Nov 2016 | 30 Nov 2017 | christian_83@example.com | 28 | New York City, NY | 424242xxxxxx4152 |
| 7 | Emily Wheeler | Support | 16 Nov 2013 | 30 Nov 2017 | emily90@example.com | 24 | New York City, NY | 424242xxxxxx6668 |

## Section-by-section fidelity notes

### 1. Page shell (limiter + container)

- Gradient: `#c471f5` (top) → `#fa71cd` (bottom), vertical, full
  viewport. In Tailwind: `bg-gradient-to-t from-[#fa71cd]
  to-[#c471f5]` on a min-h-screen wrapper.
- Container: max-width 1366px, min-height 100vh, flex center both
  axes, padding 33px 100px. On mobile, reduce horizontal padding.

### 2. Table card (wrap-table100 + table100.ver1)

- White `#fff` background, width 100%, position relative (to anchor
  the absolute first column).
- No border, no shadow, no border-radius — the card is a plain white
  rectangle on the gradient.

### 3. Fixed first column (table100-firstcol)

- `position: absolute; z-index: 1000; width: 310px; top: 0; left: 0;`
  white background.
- Single-column table: header "Employees" (Roboto-Bold 14px `#333333`
  uppercase), 7 body cells (Roboto-Medium 15px `#666666`).
- `.column1 { width: 100%; padding-left: 40px; }` — the cell fills
  the 310px container with 40px left padding.
- **SIGNATURE:** this column stays visible when the second table
  scrolls horizontally.

### 4. Scrollable columns (wrap-table100-nextcols)

- `overflow: auto; padding-left: 310px; padding-bottom: 28px;` —
  the padding-left offsets the fixed column so the scrollable table
  starts to its right.
- Second table: `table-layout: fixed` with explicit column widths
  (225/205/195/235/170/330/305px).
- Headers: Roboto-Bold 14px `#333333` uppercase. Body: Roboto-Medium
  15px `#999999`.
- Row separators: 1px `#f2f2f2` bottom border.
- On narrow viewports, the table overflows horizontally and the user
  scrolls to reveal hidden columns — the first column stays fixed.

### 5. Footer

- Source has NO footer. Monorepo rule mandates a "Component Dock"
  attribution link (https://www.componentdock.com/). Add a minimal
  footer below the table card, still on the gradient background.

## What differs from the source (for the PR description)

- **Name:** "Fixstack" (new) vs "Fixed Column Table" (ColorLib source).
- **Fonts:** Google Fonts Roboto 500/700 via `<link>` instead of
  self-hosted woff2 files (never copy font files).
- **Footer:** Component Dock attribution link added (source has none).
- **No ColorLib references** anywhere in the app code.
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (source is
  plain HTML/CSS, no framework).
- **Interactivity:** none in either — the source has no JavaScript,
  and the React recreation is purely presentational.
