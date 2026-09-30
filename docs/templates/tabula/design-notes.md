# Tabula (ColorLib Table 08) — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | Table 08 (kept on ColorLib's side only) |
| Recreation name | **Tabula** (NEW — Latin for "table"; single lowercase word) |
| Slug | `table-08` |
| Source page | https://colorlib.com/wp/template/table-08/ |
| Live preview | https://preview.colorlib.com/theme/bootstrap/table-08/ (HTTP 200, 4,462 bytes, `<title>Table 08</title>`; slug-only URL 404s — `bootstrap/` path required, same as table-01…07) |
| Stylesheet | `https://preview.colorlib.com/theme/bootstrap/table-08/css/style.css?v=ad6b6e2c` — HTTP 200, 11,049 bytes, self-contained ("Every style this snippet uses, and nothing else. No framework, no build step."). ⚠️ The `table-08/` path segment before `css/` is required. Fetchable at prep time (2026-10-01). Byte-identical (same SHA-256 `0486be162e260c7400d6262c1da91095290cef71c7e9aa1bc5e6212345af8e5a`) to `css/style.css` inside the source ZIP — CSS values canonical |
| Source ZIP | https://preview.colorlib.com/downloads/free/table-08.zip — HTTP 200, 256,848 bytes (index.html + css/style.css + **js/snippet.js 2,664 bytes** + Roboto woff2 fonts 100/300/400/700 latin & latin-ext + FontAwesome subset woff2 + README.md) |
| Preview JS | **ONE script:** `js/snippet.js?v=7636a493` (verified 2026-10-01 on the live DOM) — the vanilla-JS collapse engine from the ZIP. **This template is interactive** (unlike table-07 — zero scripts) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/table-08.jpg — **AVIF 1200×972 despite the .jpg extension** (same quirk as table-05/table-07; convert before analyzing), analyzed 2026-10-01 |
| TEMPLATES.md | "## Table (25)" line 2868; item at line 2891; slug appears exactly once |
| Name collision check | "tabula" = 0 hits in `ls apps/`, `openspec/specs/`, `docs/templates/`, and TEMPLATES.md (case-insensitive), 2026-10-01. Distinct from existing tabular-adjacent names (tablecraft, gridkit, rowdeck, domkit, gridmark, statusline, rowline, rowspan) |
| Stack | Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo) |

## Live DOM skeleton (verbatim structure, from the live preview)

The live DOM is structurally identical to the ZIP's `index.html`
(only ColorLib preview-injection boilerplate differs: robots metas,
dns-prefetch, `fetchpriority` on the stylesheet, `?v=` cache
busters):

```html
<body>
  <section class="ftco-section">                     <!-- padding: 7em 0 -->
    <div class="cl-container">                       <!-- max-w 540/720/960/1140 @576/768/992/1200, 15px gutters -->
      <div class="cl-row cl-justify-content-center">
        <div class="cl-col-md-6 cl-text-center cl-mb-4">   <!-- 50% @768+, centered, mb 1.5rem -->
          <h2 class="heading-section">Table #08</h2>        <!-- 28px, weight 400, #000 -->
        </div>
      </div>
      <div class="cl-row">
        <div class="cl-col-md-12">
          <h3 class="cl-h5 cl-mb-4 cl-text-center">Collapsible Table</h3>  <!-- 1.25rem, 400, #000, mb 1.5rem -->
          <div class="table-wrap">                   <!-- overflow-x: scroll -->
            <table class="cl-table myaccordion cl-table-hover" id="accordion">
              <thead>
                <tr>
                  <th>#</th>                         <!-- scope="col" added in recreation (source omits) -->
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>&nbsp;</th>                    <!-- empty icon column -->
                </tr>
              </thead>
              <tbody>
                <!-- ROW 1 — OPEN initially (no cl-collapsed; aria-expanded=true) -->
                <tr data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <th scope="row">1</th>             <!-- bold; scope="row" present in source -->
                  <td>Laptop Technology AS2020</td>
                  <td>$200.00</td>
                  <td>2</td>
                  <td>$400.00</td>
                  <td><i class="fa" aria-hidden="true"></i></td>   <!-- green arrow-up -->
                </tr>
                <tr>
                  <td colspan="6" id="collapseOne" class="cl-collapse cl-show acc" data-parent="#accordion">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, facere sunt sequi nostrum ipsa, amet doloremque magnam reiciendis tempore sapiente. Necessitatibus recusandae harum nam sit perferendis quia inventore natus.</p>
                  </td>
                </tr>
                <!-- ROWS 2–4 — CLOSED (class="cl-collapsed"; aria-expanded=false; green arrow-down) -->
                <tr data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" class="cl-collapsed">
                  <th scope="row">2</th>
                  <td>Laptop Technology AS2020</td>
                  <td>$200.00</td>
                  <td>2</td>
                  <td>$400.00</td>
                  <td><i class="fa" aria-hidden="false"></i></td>
                </tr>
                <tr>
                  <td colspan="6" id="collapseTwo" class="cl-collapse acc" data-parent="#accordion">
                    <p>Lorem ipsum … inventore natus.</p>
                  </td>
                </tr>
                <!-- rows 3–4 identical pattern (collapseThree / collapseFour) -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <script src="js/snippet.js?v=7636a493"></script>   <!-- the ONLY script; live URL verified -->
</body>
```

## CSS token capture (canonical — from the live stylesheet)

Final override block at the end of `css/style.css` (values after the
Bootstrap-reboot base and the `.cl-table` base rules — the LATER rule
wins):

```css
body {
  font-family: "Poppins", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  font-weight: normal;
  background: #f8f9fd;          /* light blue-gray page — same as table-05/06 */
  color: gray;                  /* #808080 */
}
h2, h3, h5, .h2, .h3, .cl-h5 { line-height: 1.5; font-weight: 400; font-family: "Poppins", Arial, sans-serif; color: #000; }
.ftco-section { padding: 7em 0; }
.heading-section { font-size: 28px; color: #000; }   /* h2 stays BLACK */
.table-wrap { overflow-x: scroll; }
.cl-table { min-width: 1000px !important; width: 100%; box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29); }
.cl-table thead th { border: none; padding: 30px; font-size: 14px; color: #000;
                     border-bottom: 2px solid #ececec; background: #fff; }
.cl-table tbody tr { margin-bottom: 10px; cursor: pointer; background: #fff;
                     border-bottom: 2px solid #ececec; transition: 0.3s; }
.cl-table tbody th, .cl-table tbody td { border: none; padding: 30px; font-size: 14px; }
.cl-table tbody td.acc { background: #f3f3f3; border: none; }        /* accordion panel */
.cl-table tbody td .fa { font-size: 12px; color: #28a745; }          /* green arrows */

/* accordion-specific rules */
[data-toggle="collapse"] .fa:before { content: "\f062"; font-family: "FontAwesome"; transition: 0.3s; }   /* arrow-up when open */
[data-toggle="collapse"].cl-collapsed .fa:before { content: "\f063"; font-family: "FontAwesome"; transition: 0.3s; }  /* arrow-down */
[data-toggle="collapse"] { background: #ececec !important; }         /* OPEN trigger band */
[data-toggle="collapse"].cl-collapsed { background: #fff !important; }  /* CLOSED trigger rows */
[data-toggle="collapse"].cl-collapsed:hover { background: #ececec !important; border-bottom: 2px solid #ececec; }

/* collapse engine styling (Bootstrap-4 collapse pattern, no Bootstrap) */
.cl-collapse:not(.cl-show) { display: none; }                        /* closed panels hidden */
.cl-collapsing { height: 0; overflow: hidden; transition: height 0.35s ease; }
.fade { transition: opacity 0.15s linear; }
@media (prefers-reduced-motion: reduce) { .cl-collapsing, .fade, .fa:before { transition: none; } }

@font-face { font-family: 'FontAwesome'; src: url('../fonts/fontawesome-webfont-subset.woff2') format('woff2'); font-display: block; }
```

Earlier (OVERRIDDEN) base rules worth knowing: `.cl-table th, td {
padding: 0.75rem; border-top: 1px solid #dee2e6 }`, `thead th {
border-bottom: 2px solid #dee2e6 }`, `.cl-table-hover tbody tr:hover {
background-color: rgba(0, 0, 0, 0.075) }` — the final block's 30px
padding / `#ececec` / explicit row backgrounds win where they
overlap; the base hover `rgba(0,0,0,0.075)` still applies to the
panel rows but is invisible (opaque `td.acc` background covers it).

Font gotchas: the sheet declares `@font-face` for Roboto 400 + 700
but **no rule references Roboto** — the final body rule uses Poppins.
th font-weight is never reverted (the reboot revert block only touches
`th { text-align: revert }`), so header labels and row numbers render
at the UA default **bold** — screenshot confirms. Tailwind v4
preflight resets h1–h6 sizing/weight and has NO th/td rules — set
heading utilities and `font-bold` on th explicitly in the recreation.

## The accordion engine (js/snippet.js — behavior to reproduce)

The 2,664-byte vanilla-JS file is a faithful Bootstrap-4 collapse
implementation without Bootstrap/jQuery:

- Delegates click on every `[data-toggle="collapse"]` row;
  `setCollapse(el, open)` animates the panel's height
  (0 → scrollHeight → auto over 0.35s ease; reverse on close).
- **Single-open accordion:** `data-parent="#accordion"` — before
  opening, any other `.cl-show` panel inside the parent is closed.
- Toggles `.cl-collapsed` on the trigger row + sets
  `aria-expanded`; dispatches Bootstrap-compatible events
  (`show.bs.collapse` / `shown.bs.collapse` / `hide` / `hidden`).
- `prefers-reduced-motion` → transitions disabled (instant).
- React recreation does NOT need these event names or classes — a
  `openRowId` state (single-open, initial = row 1) + Tailwind/CSS
  visual states + a height animation reproduces the behavior 1:1.

## Screenshot analysis (2026-10-01)

The TEMPLATES.md screenshot (AVIF 1200×972) shows: a light
blue-gray full-page canvas (`#f8f9fd`), a centered black "Table #08"
heading in a light-weight Poppins face, a centered black "Collapsible
Table" subheading below it, then ONE white table card with a soft
shadow: a white header band with bold black labels "#", "Product
Name", "Price", "Quantity", "Total" + an empty sixth column, a thin
`#ececec` rule under the header. **Row 1 is expanded** — its trigger
band is shaded light gray `#ececec` with a green up-arrow in the last
column, and directly below it a full-width `#f3f3f3` panel (spans
all columns) with two lines of gray descriptive text. Rows 2–4 are
collapsed: white bands, bold row numbers, green down-arrows,
separated by thin `#ececec` rules. The table spans the container
width (≈1140px minus gutters); generous whitespace (7em) above and
below. Matches the stylesheet tokens 1:1 (CSS is canonical on any
conflict).

## Fidelity decisions for the implementer

1. **Light canvas is the identity** — `#f8f9fd` page + white table
   card; same canvas as table-05 (Statusline) and table-06 (Rowline).
   Do not "darken" it to match table-07 (Rowspan).
2. **This is the accordion entry** — the ONE table-family template
   with real interactive behavior. The single-open state machine
   (initial row 1 open; click toggles; opening closes the previous;
   clicking the open row closes it) is mandatory for parity — it is
   what the screenshot shows and what the source JS does.
3. **Toggle-row color rule** — open band `#ececec`; closed rows
   `#fff`; closed hover `#ececec`. Net effect: trigger rows read
   gray when open OR hovered, white only when closed+unhovered.
4. **Panel = `#f3f3f3` full-width band** (colspan=6, 30px padding),
   attached directly under its open trigger row; only the open
   panel renders.
5. **Green chevrons, not FontAwesome** — 12px `#28a745`
   lucide-react `ChevronUp` (open) / `ChevronDown` (closed),
   aria-hidden; the source's FontAwesome + bundled font subset is
   NOT reproduced (monorepo icon rule).
6. **Heading weight 400, color #000, both wrappers 1.5rem mb** —
   ⚠️ table-07 used white `#fff` headings + 3rem wrappers; this
   entry uses black headings + 1.5rem (`.cl-mb-4`). Set utilities
   explicitly (Tailwind preflight resets h1–h6).
7. **Poppins 400/700 only** — no Roboto (declared-but-unused).
8. **scope attributes** — thead th `scope="col"` (source omits; a11y
   improvement) and row-number th `scope="row"` (present in source —
   keep); triggers keyboard-operable with aria-expanded +
   aria-controls.
9. **Horizontal scroll** — `min-width: 1000px` table in an
   `overflow-x-auto` wrapper; the page layout must not break below
   1000px.
10. **Static data** — 4 canonical product rows (Laptop Technology
    AS2020 / $200.00 / 2 / $400.00) + one descriptive paragraph per
    panel; paraphrase allowed if same kind.
11. **Footer** — minimal Component Dock attribution (source has none —
    monorepo rule). Zero ColorLib strings in the app.

## Sibling comparison (Table family)

| Entry | New name | Page | Table | Signature |
| --- | --- | --- | --- | --- |
| table-01 | Gridkit | white | bordered light | light bordered table |
| table-02 | Rowdeck | light | charcoal header | dark header bar |
| table-03 | Domkit | light | purple header | purple accents |
| table-04 | Gridmark | white | light | minimal light |
| table-05 | Statusline | `#f8f9fd` | light + lavender underline | lavender underline |
| table-06 | Rowline | `#f8f9fd` | sage `#99b19c` header bar + white row cards | cart table, sage header |
| table-07 | Rowspan | `#2b3035` dark | `#343a40` borderless dark panel | full dark theme, page-color row gaps |
| **table-08** | **Tabula** | **`#f8f9fd` light** | **white card table w/ soft shadow, `#ececec` rules, `#f3f3f3` accordion panels, green chevrons** | **collapsible single-open accordion table (JS state) — the family's interactive entry** |
