# Rowtint (ColorLib Table 10) — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | Table 10 (kept on ColorLib's side only) |
| Recreation name | **Rowtint** (NEW — "tinted rows"; each data row is a solid Bootstrap status tint; single lowercase word) |
| Slug | `table-10` |
| Source page | https://colorlib.com/wp/template/table-10/ |
| Live preview | https://preview.colorlib.com/theme/bootstrap/table-10/ (HTTP 200, 7,267 bytes, `<title>Table 10</title>`; slug-only URL 404s — `bootstrap/` path required, same as table-01…09) |
| Stylesheet | `https://preview.colorlib.com/theme/bootstrap/table-10/css/style.css?v=c2c0bfef` — HTTP 200, 9,883 bytes, self-contained ("Every style this snippet uses, and nothing else. No framework, no build step."). ⚠️ The `table-10/` path segment before `css/` is required. Fetchable at prep time (2026-10-01). **LINE-IDENTICAL** to `css/style.css` inside the source ZIP — same rules; live sheet has ONE extra trailing blank line at EOF (SHA-256: live `6dc0e91d0edf0a83077b6123935c55c35b8c6290713948599315cfb848100cde` 9,883 B vs ZIP `b67dc830ab1dee87e4d480cb446e9521dd82d895c19a8995b8170e81367d5d59` 9,882 B; unified diff = single blank-line addition) — CSS values canonical |
| Source ZIP | https://preview.colorlib.com/downloads/free/table-10.zip — HTTP 200, 254,886 bytes (`table-10/index.html` 7,075 B + `css/style.css` + Roboto woff2 fonts 100/300/400/700 latin & latin-ext + `README.md` — **NO js/ directory**). ZIP index.html body is whitespace-identical to the live DOM body |
| Preview JS | **NONE** — the live DOM loads zero `<script>` tags AND the ZIP index.html contains none (verified 2026-10-01). **This template is entirely static** (like table-06/07/09 — NOT like table-08's JS accordion) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/table-10.jpg — **REAL JPEG 1200×972** (JFIF, 59,627 bytes — unlike table-05/07/08 which are AVIF despite the `.jpg` extension; no conversion needed), analyzed 2026-10-01 |
| TEMPLATES.md | "## Table (25)" line 2868; item at line 2893; slug appears exactly once |
| Name collision check | "rowtint" = 0 hits in `ls apps/`, `openspec/specs/`, `docs/templates/`, and TEMPLATES.md (case-insensitive), 2026-10-01. Distinct from existing Table-family names (gridkit, rowdeck, domkit, gridmark, statusline, rowline, rowspan, tabula, billstack) |
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
        <div class="cl-col-md-6 cl-text-center cl-mb-5">   <!-- 50% @768+, centered, mb 3rem -->
          <h2 class="heading-section">Table #10</h2>        <!-- 28px, weight 400, #000 — the ONLY heading -->
        </div>
      </div>
      <div class="cl-row">
        <div class="cl-col-md-12">
          <div class="table-wrap">                   <!-- overflow-x: scroll -->
            <table class="cl-table cl-table-dark">   <!-- DARK table: color #fff, bg #343a40 -->
              <thead>
                <tr class="cl-bg-dark">              <!-- charcoal band #343a40 -->
                  <th>Invoce</th>                    <!-- SOURCE TYPO for "Invoice"; scope="col" added in recreation -->
                  <th>Customer</th>
                  <th>Ship</th>
                  <th>Price</th>
                  <th>Pruchased Price</th>           <!-- SOURCE TYPO for "Purchased Price" -->
                  <th>&nbsp;</th>                    <!-- EMPTY 6th header — labels the edit-icon column -->
                </tr>
              </thead>
              <tbody>
                <!-- 5 rows, ALL identical data; tint classes in order -->
                <tr class="cl-bg-primary">           <!-- #1089ff (final override; NOT #007bff) -->
                  <th scope="row">1001</th>          <!-- source already has scope="row"; bold (UA default) -->
                  <td>Mark Otto</td>
                  <td>Japan</td>
                  <td>$3000</td>
                  <td>$1200</td>
                  <td><a href="#"><i class="fa fa-edit"><!-- inline SVG .cl-icon (FontAwesome fa-edit), white --></i></a></td>
                </tr>
                <tr class="cl-bg-success"> … </tr>    <!-- #28a745 -->
                <tr class="cl-bg-warning"> … </tr>    <!-- #ffc107 -->
                <tr class="cl-bg-danger">  … </tr>    <!-- #dc3545 -->
                <tr class="cl-bg-info">    … </tr>    <!-- #17a2b8 -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
```

Zero scripts, zero navbar/header/footer — exactly like the Table 09
snippet's shell; the table markup is the entire page body.

## CSS token capture (canonical — from the live stylesheet)

Captured 2026-10-01 from
`https://preview.colorlib.com/theme/bootstrap/table-10/css/style.css?v=c2c0bfef`
(9,883 bytes; line-identical to the ZIP sheet). Sheet anatomy:
`all: revert` host-page guard → box-sizing/print shims → Roboto
`@font-face` 400/700 → HTML element defaults (reboot body stack,
`table { border-collapse: collapse }`) → `.cl-container` steps →
`.cl-row`/`.cl-col-md-*` grid → `.cl-table` base + `.cl-table-dark`
→ `.cl-bg-primary/success/info/warning/danger/dark` utilities →
centering/mb/text-center utilities → print rules → **final override
block** (Poppins body `#fafafa`/gray, `#1089ff` links, h2 400 `#000`,
`.cl-bg-primary` → `#1089ff`, `.ftco-section` 7em,
`.heading-section` 28px, `.table-wrap` scroll, `.cl-table`
min-width/shadow, thead 13px white uppercase, tbody 14px borderless,
`.fa` white).

```css
/* final override block (the canonical values) */
body { font-family: "Poppins", Arial, sans-serif; font-size: 16px;
       line-height: 1.8; font-weight: normal; background: #fafafa; color: gray; }
a { transition: .3s all ease; color: #1089ff; }
a:hover, a:focus { text-decoration: none !important; outline: none !important;
                   box-shadow: none !important; }
h2, .h2 { line-height: 1.5; font-weight: 400; font-family: "Poppins", Arial, sans-serif; color: #000; }
.cl-bg-primary { background: #1089ff !important; }      /* final override — NOT #007bff */
.ftco-section { padding: 7em 0; }
.heading-section { font-size: 28px; color: #000; }
.table-wrap { overflow-x: scroll; }
.cl-table { min-width: 1000px !important; width: 100%;
            box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29); }
.cl-table thead th { border: none; padding: 20px 30px; font-size: 13px;
                     color: #fff; font-weight: 400; text-transform: uppercase; }
.cl-table tbody th, .cl-table tbody td { border: none; padding: 20px 30px;
                     font-size: 14px; vertical-align: middle; }
.cl-table tbody td .fa { color: #fff; }
```

```css
/* dark-table + tint utilities (mid-sheet — canonical hexes) */
.cl-table-dark { color: #fff; background-color: #343a40; }   /* WINS over reboot .cl-table { color: #212529 } — later, same specificity */
.cl-bg-primary { background-color: #007bff !important; }     /* overridden by final block → #1089ff */
.cl-bg-success { background-color: #28a745 !important; }
.cl-bg-info    { background-color: #17a2b8 !important; }
.cl-bg-warning { background-color: #ffc107 !important; }
.cl-bg-danger  { background-color: #dc3545 !important; }
.cl-bg-dark    { background-color: #343a40 !important; }
/* a.cl-bg-*:hover variants exist (#0062cc/#1e7e34/#d39e00/#bd2130/#117a8b) but rows are <tr> — NO row hover */
.cl-icon { height: 1em; width: auto; fill: currentColor; display: inline-block; }
.cl-container { padding: 0 15px; margin: 0 auto; max-width: 540/720/960/1140px (steps) }
.cl-mb-5 { margin-bottom: 3rem !important; }
```

**Contrast note (source-faithful):** white text on warning amber
`#ffc107` ≈ 1.9:1 (below WCAG AA 4.5:1) — the source renders it
anyway because cell color comes from `.cl-table-dark`, not per-tint
rules. Keep white for parity; note in PR.

## Screenshot analysis (2026-10-01)

Real JPEG 1200×972 (JFIF). The screenshot matches the stylesheet
exactly (CSS wins on conflict — no conflicts found):

- Light warm-gray canvas `#fafafa`, generous whitespace (7em bands).
- Centered black heading "Table #10" (Poppins, regular weight).
- ONE wide table (container-width, min 1000px): soft shadow beneath,
  no borders between rows.
- Header band: solid **charcoal `#343a40`**, white UPPERCASE labels
  (INVOICE · CUSTOMER · SHIP · PRICE · PRUCHASED PRICE · blank) at
  ~13px, generous cell padding.
- Five SOLID colored rows top→bottom: **blue → green → amber →
  red → teal**; all cells white text; row-header "1001" bold white.
- Last column: small white **pencil-in-square edit icon** per row,
  right-aligned in the cell.
- No navbar, no footer, no subheading, no visible interactivity.

## Fidelity decisions for the implementer

1. **Name:** Rowtint (NEW). Mapping recorded in spec + PR:
   `apps/rowtint` recreates `https://colorlib.com/wp/template/table-10/`.
2. **Canvas `#fafafa`** — same as Billstack (table-09) ⚠️ NOT the
   `#f8f9fd` blue-gray of table-05/06/08. Poppins 400 + 700 via
   Google Fonts; **Roboto NOT loaded** (declared-but-unused
   `@font-face` in the source sheet).
3. **White cell text everywhere** — `.cl-table-dark { color: #fff }`
   overrides the reboot's `.cl-table { color: #212529 }` (later rule,
   same specificity). Screenshot confirms white-on-color. Set
   `text-white` on the table explicitly in the recreation (Tailwind
   won't infer it).
4. **Primary tint = `#1089ff`** — the final override, NOT the
   `#007bff` mid-sheet value (same override quirk as the page's link
   color; screenshot's blue matches `#1089ff`).
5. **Header band `#343a40` + white 13px/400 uppercase labels** —
   differs from Billstack (white band, black labels). 6th cell is
   EMPTY in source; MAY add a visually-hidden "Actions" label for
   a11y (document choice).
6. **Source typos** "Invoce" / "Pruchased Price" — keep verbatim
   (pixel parity) or fix (documented micro-divergence); same policy
   as Billstack. Either way keep `scope="col"` on labeled th cells.
7. **5 rows, identical data** — 1001 · Mark Otto · Japan · $3000 ·
   $1200 on every row; tint sequence primary → success → warning →
   danger → info. Paraphrase allowed if same kind of content +
   sequence.
8. **Row-header th bold** — UA default bold leaks (sheet never sets
   tbody-th weight); Tailwind preflight resets th weight — set
   `font-bold` explicitly. Keep `scope="row"`.
9. **Edit icon → lucide `SquarePen`** on `<button type="button">`
   with row-identifying aria-label (e.g. "Edit invoice 1001"); white,
   ≈14px (`size-3.5`); visible focus ring; no navigation. Do NOT
   inline-copy the source's FontAwesome SVG path (asset-copy rule —
   `.cl-icon` is 1em tall, `fill: currentColor`).
10. **No row hover** — the `a.cl-bg-*:hover` rules target links;
    rows are `<tr>`; screenshot shows no hover state. Any hover
    effect added is a documented micro-divergence.
11. **Table min-width 1000px** inside an `overflow-x-auto` wrapper
    (source `overflow-x: scroll`); soft shadow
    `0 5px 12px -12px rgba(0,0,0,0.29)`; border-collapse collapse.
12. **Footer** — minimal Component Dock attribution
    (https://www.componentdock.com/) — source has none (monorepo
    rule). Zero ColorLib references anywhere in the app.
13. **Tests** — scenario-style `it` blocks mirroring the spec's
    Gherkin scenarios; queries via `getByRole`; 100% coverage gate
    via `scripts/verify-app.sh rowtint`.

## Sibling comparison (Table family)

Nearest neighbor: **Billstack** (table-09, prepped on main). The two
share the identical shell (page `#fafafa`, 7em section, container
steps, 3rem heading margin, 28px/400 black h2, no subheading, table
min-width 1000px + same soft shadow, 20px 30px cell padding, 13px/400
uppercase headers, Poppins-only, zero JS). Rowtint differs in exactly
six ways:

| Aspect | Billstack (table-09) | Rowtint (table-10) |
| --- | --- | --- |
| Table theme | plain (white rows) | **`cl-table-dark`** — `#343a40` default bg, **white cell text** |
| Header band | white, black `#000` labels | **charcoal `#343a40`, white labels** |
| Rows | 8 rows, gray striping `rgba(0,0,0,0.05)`/`#fff` | **5 rows, solid tints** `#1089ff`/`#28a745`/`#ffc107`/`#dc3545`/`#17a2b8` |
| Cell text | `#212529` | **`#fff`** |
| 6th column | "Status" label + Bootstrap status buttons (green/amber/red, 0.25rem radius) | **EMPTY label + white edit-icon buttons** (lucide SquarePen) |
| Row count | 8 (status sequence varies) | 5 (tint sequence varies; data identical) |

vs **Tabula** (table-08): Tabula has a JS accordion + pills/avatars +
`#f8f9fd` canvas + h3 subheading + 1.5rem heading margin — Rowtint
is fully static, `#fafafa`, no subheading, 3rem margin. vs
**Statusline** (table-05): pills/avatars, `#f8f9fd` canvas —
different beast. vs **Rowline/Rowspan** (table-06/07): light rows on
`#f8f9fd`, no tints. Rowtint is the FIRST dark-header/solid-tint
table in the family — do NOT borrow `#f8f9fd` or `#212529` cell text
from siblings; the tokens above are canonical per the live sheet.
