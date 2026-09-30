# Rowspan (ColorLib Table 07) — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | Table 07 (kept on ColorLib's side only) |
| Recreation name | **Rowspan** (NEW — the row-span pun of the row-number column; single lowercase word) |
| Slug | `table-07` |
| Source page | https://colorlib.com/wp/template/table-07/ |
| Live preview | https://preview.colorlib.com/theme/bootstrap/table-07/ (HTTP 200, 1,941 bytes, `<title>Table 07</title>`; slug-only URL 404s — `bootstrap/` path required, same as table-01…06) |
| Stylesheet | `https://preview.colorlib.com/theme/bootstrap/table-07/css/style.css?v=f1f9ad16` — HTTP 200, 8,744 bytes, self-contained ("Every style this snippet uses, and nothing else. No framework, no build step."). ⚠️ The `table-07/` path segment before `css/` is required; bare `bootstrap/css/style.css` 404s. Fetchable at prep time (2026-10-01). Byte-identical (same SHA-256) to `css/style.css` inside the source ZIP — CSS values canonical |
| Source ZIP | https://preview.colorlib.com/downloads/free/table-07.zip — HTTP 200, 254,051 bytes (index.html + css/style.css + Roboto woff2 fonts; README mentions `js/snippet.js` but NO `js/` folder ships) |
| Preview JS | NONE — zero `<script>` tags on the live page (verified 2026-10-01) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/table-07.jpg — **AVIF 1200×972 despite the .jpg extension** (same quirk as table-05; convert before analyzing), analyzed 2026-10-01 |
| TEMPLATES.md | "## Table (25)" line 2868; item at line 2890; slug appears exactly once |
| Name collision check | "rowspan" = 0 hits in `ls apps/`, `openspec/specs/`, `docs/templates/`, and TEMPLATES.md bold names (case-insensitive), 2026-10-01. Distinct from existing rowline (table-06), rowcard (css-table-14), rowdeck (table-02), rowglow (css-table-12) |
| Stack | Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo) |

## Live DOM skeleton (verbatim structure)

```html
<body>
  <section class="ftco-section">                 <!-- padding: 7em 0 -->
    <div class="cl-container">                   <!-- max-w 540/720/960/1140 @576/768/992/1200, 15px gutters -->
      <div class="cl-row cl-justify-content-center">
        <div class="cl-col-md-6 cl-text-center cl-mb-5">   <!-- 50% @768+, centered, mb 3rem -->
          <h2 class="heading-section">Table #07</h2>        <!-- 28px, weight 400, #fff -->
        </div>
      </div>
      <div class="cl-row">
        <div class="cl-col-md-12">
          <div class="table-wrap">               <!-- overflow-x: scroll -->
            <table class="cl-table cl-table-bordered cl-table-dark cl-table-hover">
              <thead>
                <tr>
                  <th>#</th>                     <!-- scope="col" added in recreation (source omits) -->
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>                             <!-- ×5 rows; hover → rgba(255,255,255,0.075) -->
                  <th scope="row">1</th>         <!-- bold; scope="row" present in source -->
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>markotto@email.com</td>
                </tr>
                <!-- rows 2–5: Jacob Thornton jacobthornton@email.com ·
                     Larry the Bird larrybird@email.com ·
                     John Doe johndoe@email.com · Gary Bird garybird@email.com -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
```

## CSS token capture (canonical — from the live stylesheet)

Final override block at the end of `css/style.css` (values after the
Bootstrap-reboot base and the `.cl-table` dark-variant rules — the
LATER rule wins):

```css
body {
  font-family: "Poppins", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  font-weight: normal;
  background: #2b3035;          /* dark charcoal page — signature */
  color: gray;                  /* #808080 */
}
h2, .h2 { line-height: 1.5; font-weight: 400; font-family: "Poppins", Arial, sans-serif; color: #000; }
.ftco-section { padding: 7em 0; }
.heading-section { font-size: 28px; color: #fff; }   /* h2 renders WHITE */
.table-wrap { overflow-x: scroll; }
.cl-table { min-width: 1000px !important; width: 100%; }
.cl-table thead th { border: none; padding: 20px 30px; font-size: 14px; color: #fff;
                     border-bottom: 4px solid #2b3035; }   /* page-color gap */
.cl-table tbody tr { margin-bottom: 10px; }
.cl-table tbody th, .cl-table tbody td { border: none; padding: 20px 30px;
                     border-bottom: 3px solid #2b3035; font-size: 14px; }
```

Dark-variant rules (the sheet contains BOTH an early block and a final
block — the final block wins):

```css
/* early block — OVERRIDDEN, do not use */
.cl-table-dark, .cl-table-dark > th, .cl-table-dark > td { background-color: #c6c8ca; }
.cl-table-dark th, ... { border-color: #95999c; }

/* final block — CANONICAL */
.cl-table-dark { color: #fff; background-color: #343a40; }
.cl-table-dark th, .cl-table-dark td, .cl-table-dark thead th { border-color: #454d55; }
.cl-table-dark.cl-table-bordered { border: 0; }     /* no visible borders anywhere */
.cl-table-dark.cl-table-hover tbody tr:hover { color: #fff; background-color: rgba(255, 255, 255, 0.075); }
```

Font gotcha: the sheet declares `@font-face` for Roboto 400 + 700 but
**no rule references Roboto** — the final body rule uses Poppins.
th font-weight is never reverted (the reboot revert block only touches
`th { text-align: revert }`), so header labels and row numbers render
at the UA default **bold** — screenshot confirms.

## Screenshot analysis (2026-10-01)

The TEMPLATES.md screenshot (AVIF 1200×972) shows: a dark charcoal
full-page canvas (`#2b3035`), a centered white "Table #07" heading in
a light-weight Poppins face, and ONE dark panel table slightly lighter
than the page (`#343a40`) with a solid header band carrying white bold
labels "#", "First Name", "Last Name", "Email"; five data rows of
white text with bold row numbers in column 1; rows visually separated
by darker charcoal gap lines (the 3px/4px `#2b3035` bottom gaps);
the table spans the container width (≈1140px minus gutters); generous
whitespace (7em) above and below. No borders, no shadows, no
decoration — a minimal one-table dark snippet. Matches the stylesheet
tokens 1:1 (CSS is canonical on any conflict).

## Fidelity decisions for the implementer

1. **Dark canvas is the identity** — `#2b3035` page + `#343a40`
   panel; do not "brighten" it to match the light siblings
   (table-01…06). This entry is the dark one.
2. **Borderless by design** — separation = page-color gaps (4px under
   the header, 3px under each row, ~10px row spacing), NOT borders.
   `border-collapse: collapse` with zero borders.
3. **Heading weight 400, color #fff** — the reboot's 500/`#000` are
   overridden by the final rules; `#fff` via `.heading-section`.
4. **Poppins 400/700 only** — no Roboto (declared-but-unused).
5. **scope attributes** — thead th `scope="col"` (source omits; a11y
   improvement) and row-number th `scope="row"` (present in source —
   keep).
6. **Hover only** — `rgba(255,255,255,0.075)` via Tailwind
   `group-hover`; no JS state anywhere in the table.
7. **Horizontal scroll** — `min-width: 1000px` table in an
   `overflow-x-auto` wrapper; the page layout must not break below
   1000px.
8. **Static data** — 5 canonical people rows; paraphrase allowed if
   same kind (first name + last name + email).
9. **Footer** — minimal Component Dock attribution (source has none —
   monorepo rule). Zero ColorLib strings in the app.

## Sibling comparison (css-table / Table family)

| Entry | New name | Page | Table | Signature |
| --- | --- | --- | --- | --- |
| table-01 | Gridkit | white | bordered light | light bordered table |
| table-02 | Rowdeck | light | charcoal header | dark header bar |
| table-03 | Domkit | light | purple header | purple accents |
| table-04 | Gridmark | white | light | minimal light |
| table-05 | Statusline | `#f8f9fd` | light + lavender underline | lavender underline |
| table-06 | Rowline | `#f8f9fd` | sage `#99b19c` header bar + white row cards | cart table, sage header |
| **table-07** | **Rowspan** | **`#2b3035` dark** | **`#343a40` borderless dark panel** | **full dark theme, page-color row gaps** |
