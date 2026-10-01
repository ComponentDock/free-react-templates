# Crossline (ColorLib "Table With Vertical Horizontal Highlight") — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | "Table With Vertical Horizontal Highlight" (kept on ColorLib's side only; the snippet's own `<title>`/README call it "Table V03") |
| Recreation name | **Crossline** (NEW — "crossing lines"; the vertical column highlight crosses the horizontal row highlight at the hovered cell; single lowercase word) |
| Slug | `table-with-vertical-horizontal-highlight` |
| Source page | https://colorlib.com/wp/template/table-with-vertical-horizontal-highlight/ (HTTP 200, 109,258 B, verified 2026-10-01) |
| Live preview | ⚠️ **UNREACHABLE** — https://preview.colorlib.com/theme/table-with-vertical-horizontal-highlight/ AND https://preview.colorlib.com/theme/bootstrap/table-with-vertical-horizontal-highlight/ BOTH return HTTP 404 "Not Found" (verified 2026-10-01). Unlike table-04…10, this snippet is not served on the preview host at either path |
| Canonical reference | **Source ZIP** https://preview.colorlib.com/downloads/free/table-with-vertical-horizontal-highlight.zip — HTTP 200, **172,952 bytes** (verified 2026-10-01). Entries: `index.html` 35,189 B · `css/style.css` 9,952 B (557 lines) · `js/snippet.js` 984 B (22 lines) · `fonts/Montserrat-Regular.woff2` 80,900 B · `fonts/Montserrat-Medium.woff2` 80,880 B · `images/icons/favicon.ico` 32,038 B · `README.md` 1,283 B. README: "Table V03 — A free HTML snippet from Colorlib … No jQuery, no Bootstrap, no build step, no CDN call … Free for personal and commercial use." **All DOM/data/CSS in this document came from the ZIP — implementers do NOT need to re-fetch** (replication.md's screenshot fallback applies to the preview host only; the ZIP is the actual downloadable source) |
| Preview JS | YES — `js/snippet.js`, vanilla IIFE (see "JS behavior" below). The ONLY JS-interactive table family member on main (Tabula's accordion is the nearest neighbor) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/table-with-vertical-horizontal-highlight.jpg — **REAL JPEG 1200×560** progressive JFIF, 37,079 B (despite `.jpg` extension — no AVIF conversion needed), analyzed 2026-10-01. ⚠️ Its sample data DIFFERS from the ZIP's (screenshot: Lawrence Scott Mon = 2:00 PM, hovered Beverly Reid×Tue = "10:10 AM"; ZIP: Lawrence Scott Mon = "--", Beverly Reid Tue = 5:00 PM) — **ZIP data is canonical**; the screenshot captures only the top table (ver1) in hover state |
| TEMPLATES.md | "## Table (25)" line 2868; item at line 2894; slug appears exactly once |
| Name collision check | "crossline" = 0 hits in `ls apps/`, `openspec/specs/`, `docs/templates/`, and TEMPLATES.md (case-insensitive), 2026-10-01. Distinct from Table-family names (gridkit, rowdeck, domkit, gridmark, statusline, rowline, rowspan, tabula, billstack, rowtint, gridline, rowglow, gridspan, rowcard, gridpane, nightgrid, cellswitch, cellgrid, cellcrew, cellmate) — the only name evoking the column×row CROSSING |
| Stack | Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo) |

## DOM skeleton (verbatim structure, from the ZIP's index.html)

Zero headings, zero navbar/header/footer/nav, zero links — the six
tables are the entire page body:

```html
<body>
  <div class="limiter">                       <!-- width: 100%; margin: 0 auto -->
    <div class="container-table100">          <!-- bg #d1d1d1, min-height 100vh, flex center/center, wrap, padding 33px 30px -->
      <div class="wrap-table100">             <!-- width: 1300px (source-fixed; recreation: max-w + w-full) -->
        <div class="table100 ver1 m-b-110">   <!-- m-b-110 = margin-bottom: 110px; ver1..ver6 in order -->
          <table data-vertable="ver1">
            <thead>
              <tr class="row100 head">
                <th class="column100 column1" data-column="column1"></th>  <!-- EMPTY corner (recreation: visually-hidden "Name") -->
                <th class="column100 column2" data-column="column2">Sunday</th>
                <th …>Monday</th><th …>Tuesday</th><th …>Wednesday</th>
                <th …>Thursday</th><th …>Friday</th><th …>Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row100">
                <td class="column100 column1" data-column="column1">Lawrence Scott</td>
                <td class="column100 column2" data-column="column2">8:00 AM</td>
                <td …>--</td><td …>--</td><td …>8:00 AM</td>
                <td …>--</td><td …>5:00 PM</td><td …>8:00 AM</td>
              </tr>
              <!-- 7 more rows: Jane Medina, Billy Mitchell, Beverly Reid,
                   Tiffany Wade, Sean Adams, Rachel Simpson, Mark Salazar -->
            </tbody>
          </table>
        </div>
        <div class="table100 ver2 m-b-110"> … identical markup, data-vertable="ver2" … </div>
        <div class="table100 ver3 m-b-110"> … </div>
        <div class="table100 ver4 m-b-110"> … </div>
        <div class="table100 ver5 m-b-110"> … </div>
        <div class="table100 ver6 m-b-110"> … </div>
      </div>
    </div>
  </div>
  <script src="js/snippet.js"></script>
</body>
```

All six tables carry the IDENTICAL dataset (thead: empty corner +
Sunday…Saturday; tbody 8 rows: name + 7 cells of times or `--`):

| # | Name | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Lawrence Scott | 8:00 AM | -- | -- | 8:00 AM | -- | 5:00 PM | 8:00 AM |
| 2 | Jane Medina | -- | 5:00 PM | 5:00 PM | -- | 9:00 AM | -- | -- |
| 3 | Billy Mitchell | 9:00 AM | -- | -- | -- | -- | 2:00 PM | 8:00 AM |
| 4 | Beverly Reid | -- | 5:00 PM | 5:00 PM | -- | 9:00 AM | -- | -- |
| 5 | Tiffany Wade | 8:00 AM | -- | -- | 8:00 AM | -- | 5:00 PM | 8:00 AM |
| 6 | Sean Adams | -- | 5:00 PM | 5:00 PM | -- | 9:00 AM | -- | -- |
| 7 | Rachel Simpson | 9:00 AM | -- | -- | -- | -- | 2:00 PM | 8:00 AM |
| 8 | Mark Salazar | 8:00 AM | -- | -- | 8:00 AM | -- | 5:00 PM | 8:00 AM |

## CSS token capture (canonical — from the ZIP's style.css)

Sheet anatomy (557 lines): `all: revert` host-page guard →
box-sizing/print shims → reboot element defaults (system body stack,
`table { border-collapse: collapse }`, `th { text-align: left }`) →
`.table` base utilities (padding .75rem, border-top `#e9ecef`) →
`.m-b-110` → Montserrat `@font-face` blocks → `.limiter` /
`.container-table100` / `.wrap-table100` → table/cell geometry →
per-version blocks ver1…ver6.

```css
/* global */
.container-table100 { background: #d1d1d1; min-height: 100vh; display: flex;
  align-items: center; justify-content: center; flex-wrap: wrap; padding: 33px 30px; }
.wrap-table100 { width: 1300px; }
.m-b-110 { margin-bottom: 110px; }
table { width: 100%; background-color: #fff; }
th, td { font-weight: unset; padding-right: 10px; }   /* unset = inherit = normal (th UA default is bold — set font-normal explicitly) */
.column100 { width: 130px; padding-left: 25px; }
.column100.column1 { width: 265px; padding-left: 42px; }
.row100.head th { padding-top: 24px; padding-bottom: 20px; }
.row100 td { padding-top: 18px; padding-bottom: 14px; }
/* per-cell type (verbatim per ver1; ver2–6 repeat the same td/th type rules) */
.table100.verN td { font-family: Montserrat-Regular; font-size: 14px; color: #808080; line-height: 1.4; }
.table100.verN th { font-family: Montserrat-Medium; font-size: 12px; color: #fff; line-height: 1.4;
                    text-transform: uppercase; background-color: <ver header hex>; }
```

```css
/* per-version treatments (verbatim values) */
/* ver1 */ th bg #36304a; .row100:hover bg #f2f2f2; .hov-column-ver1 bg #f2f2f2;
           .hov-column-head-ver1 bg #484848 !important; td:hover bg #6c7ae0, color #fff
/* ver2 */ th bg #333333; tbody tr:nth-child(even) bg #eaf8e6; .row100:hover td bg #83d160, color #fff;
           .hov-column-ver2 bg #83d160, color #fff; .hov-column-head-ver2 bg #484848 !important;
           td:hover bg #57b846, color #fff
/* ver3 */ th bg #6c7ae0; tbody tr border-bottom 1px solid #e5e5e5; .row100:hover td bg #fcebf5;
           .hov-column-ver3 bg #fcebf5; .hov-column-head-ver3 bg #7b88e3 !important; td:hover bg #e03e9c, color #fff
/* ver4 */ th bg #fa4251; .row100:hover td color #fa4251 (NO bg); .hov-column-ver4 bg #ffebed;
           .hov-column-head-ver4 bg #f95462 !important; td:hover bg #ffebed, color #fa4251
/* ver5 */ th bg #002933; tbody tr:nth-child(even) bg #e9faff; td position: relative;
           .row100:hover td color #fe3e64 (NO bg); .hov-column-ver5 color #fe3e64
             + ::before border-left/right 1px solid #f2f2f2;
           .hov-column-head-ver5 bg #1a3f48 !important, color #fe3e64;
           td:hover color #fe3e64 + ::before border 1px solid #fe3e64 (all sides)
/* ver6 */ .table100.ver6 { border-radius: 16px; overflow: hidden;
             background: linear-gradient(-68deg, #ac32e4, #4801ff); }  /* fallback #7918f2 */
           .table100.ver6 table { background-color: transparent; }
           th bg rgba(255,255,255,0.32); td color #fff;
           .row100:hover td bg rgba(255,255,255,0.1);
           .hov-column-ver6 bg rgba(255,255,255,0.1);   /* header cell TOO — joins column highlight */
           /* ⚠️ NO .hov-column-head-ver6 rule exists */
           td:hover bg rgba(255,255,255,0.2)
```

⚠️ Cross-version gotchas: (1) ver4/ver5 row hover changes TEXT COLOR
ONLY — no background (unlike ver1–3/6). (2) ver5's hover highlights
are `::before` border overlays on `position: relative` cells —
Tailwind `border-x`/`ring` utilities produce the same visual. (3)
ver6 is the ONLY card (16px radius + gradient + transparent table +
white text) and the ONLY table whose header cell has NO distinct
head-highlight — the JS still toggles the plain column class onto
it. (4) `font-weight: unset` on th/td inherits normal — Tailwind
preflight does NOT reset th's UA-bold; set weights explicitly.

## JS behavior (verbatim, from the ZIP's js/snippet.js — 22 lines)

```js
(function () {
  'use strict';
  document.querySelectorAll('.column100').forEach(function (cell) {
    function mark(on) {
      var table2 = cell.parentElement && cell.parentElement.parentElement;   // the <table>
      var table1 = table2 && table2.parentElement;                          // the .table100.verN div
      if (!table1) return;
      var ver = table1.getAttribute('data-vertable'), col = cell.getAttribute('data-column');
      if (!col) return;
      table2.querySelectorAll('.' + col).forEach(function (c) {
        c.classList.toggle('hov-column-' + ver, on); });                    // ALL cells of the column (thead th + tbody td)
      table1.querySelectorAll('.row100.head .' + col).forEach(function (c) {
        c.classList.toggle('hov-column-head-' + ver, on); });               // that column's header cell
    }
    cell.addEventListener('mouseover', function () { mark(true); });
    cell.addEventListener('mouseout', function () { mark(false); });
  });
})();
```

Behavior summary: hovering ANY cell (header or body) marks its entire
column (body cells get `hov-column-verN`; the header cell gets BOTH
that class and `hov-column-head-verN`, whose `!important` value wins
in ver1–5; in ver6 only the plain column class exists, so the header
cell shows the translucent column value). Row hover and exact-cell
hover are pure CSS. Leaving a cell unmarks the column; the row/cell
states end with the pointer. Each table is independent (classes are
scoped per `data-vertable`).

**React translation:** per-table `hoveredColumn` state (column key,
e.g. `"column3"` | null). Cell `onMouseEnter` → set; table-wrapper
`onMouseLeave` → clear (moving between cells in the same column
keeps the value — no flicker; matches CSS row/cell `:hover`
continuity). Ver1–5 header cells render the head treatment while
their column is hovered; ver6 header cells render the plain column
class. Pointer-only: no tabindex on cells (source has no keyboard
support; 384 tab stops would harm keyboard users — documented a11y
choice; all data readable statically).

## Screenshot analysis (2026-10-01)

Real JPEG 1200×560 progressive (37,079 B). Shows ONLY the first
table (ver1) in its hover state, on the mid-gray canvas:

- Canvas **`#d1d1d1`** visible around the white table (full page
  stacks six tables — screenshot is cropped to the top one).
- Header band: dark plum **`#36304a`**, white UPPERCASE 12px labels
  (SUNDAY · MONDAY · TUESDAY · WEDNESDAY · THURSDAY · FRIDAY ·
  SATURDAY), empty corner cell.
- Body: white, muted gray **`#808080`** Montserrat names (left,
  wider column) + time cells (8:00 AM / 2:00 PM / 5:00 PM / 9:00 AM
  / "--").
- Hover state captured: hovered COLUMN (Tuesday) all cells shaded
  light gray **`#f2f2f2`**; hovered ROW (Beverly Reid) shaded
  **`#f2f2f2`**; exact hovered cell solid indigo **`#6c7ae0`** with
  white text; Tuesday's header cell darker gray **`#484848`**.
- The screenshot's schedule values differ from the ZIP's (see
  mapping table) — **ZIP data canonical**; screenshot confirms the
  ver1 token set exactly (CSS wins on conflict — no conflicts).

## Fidelity decisions for the implementer

1. **Name:** Crossline (NEW). Mapping recorded in spec + PR:
   `apps/crossline` recreates
   `https://colorlib.com/wp/template/table-with-vertical-horizontal-highlight/`.
2. **Reference:** preview host 404s at BOTH paths — use the ZIP
   values in this document; do not re-derive the preview URL. The
   screenshot is supporting evidence only (its data is stale).
3. **Canvas `#d1d1d1`** — the ONLY mid-gray table-family page
   (⚠️ NOT `#fafafa`/`#f8f9fd`). Montserrat 400 + 500 via Google
   Fonts; never ship the woff2 files.
4. **Six tables, ver1→ver6, identical data, 110px gaps** (source
   applies `m-b-110` after every table INCLUDING the last — keep it).
   Paraphrase the schedule freely if it stays 8 staff × 7 days with
   times/`--`.
5. **Crosshair = three strengths** — exact cell (`:hover`, strongest
   per-version accent), row (`tr:hover`, CSS), column (React state
   mirroring `snippet.js`). Independent per table; cleared on wrapper
   mouseleave. Header-cell hover engages the column too (source
   parity).
6. **Per-version hover quirks** — ver4/ver5 row hover is TEXT-ONLY
   (no bg); ver5 column/cell highlights are border overlays (Tailwind
   `border-x`/`ring` equivalents fine); ver6 header cell has NO head
   treatment (joins the plain column class).
7. **Typography explicit** — th 12px/500/uppercase/white, td
   14px/400/`#808080`; set weights EXPLICITLY (`font-weight: unset`
   inherits normal in the source; UA th default is bold; Tailwind
   preflight doesn't reset it).
8. **A11y upgrades (documented)** — `scope="col"` on labeled headers
   (source omits scope), visually-hidden "Name" on the empty corner
   cell, optional `<th scope="row">` + `font-normal` for name cells
   (identical visuals), pointer-only hover (no tabindex on cells).
   Zero headings (source parity — accessible name = document title).
9. **Responsive** — per-table `overflow-x-auto` wrappers below the
   tables' natural ~1240px width (source has NO wrapper; its fixed
   1300px wrap overflows at page level — documented robustness
   divergence). Recreation wrap: `max-width: 1300px; width: 100%`.
10. **Footer** — minimal Component Dock attribution
    (https://www.componentdock.com/, quiet 14px `#808080` — source
    has none; monorepo rule). Zero ColorLib references in the app.
11. **Tests** — scenario-style `it` blocks mirroring the spec's
    Gherkin scenarios; hover logic via `fireEvent.mouseOver`/
    `mouseLeave`; jsdom cannot compute styles — assert
    classes/structure, not computed colors. 100% coverage gate via
    `scripts/verify-app.sh crossline`.

## Sibling comparison (Table family)

Nearest neighbors: **Rowtint** (table-10) and **Tabula** (table-08).
Crossline is unique in the family on five axes:

| Aspect | Siblings (gridkit…rowtint) | Crossline (this) |
| --- | --- | --- |
| Tables per page | exactly ONE | **SIX** (ver1–ver6 treatments) |
| Interactivity | static, or Tabula's JS accordion | **JS column crosshair** + CSS row/cell hover (3 strengths) |
| Canvas | `#fafafa` / `#f8f9fd` / blue-gray | **`#d1d1d1` mid-gray** |
| Font | Poppins (all) | **Montserrat 400/500** |
| Shape | flat white tables | ver6 is a **16px-radius gradient card** (`#ac32e4`→`#4801ff`) |

Do NOT borrow sibling tokens (`#fafafa`, `#f8f9fd`, Poppins, the
1000px min-width + shadow pattern) — Crossline's tokens above are
canonical per the ZIP sheet. The gray canvas + 1300px wrap + 110px
rhythm + per-version color matrix is the entire visual system.
