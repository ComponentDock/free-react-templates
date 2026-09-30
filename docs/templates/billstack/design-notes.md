# Billstack (ColorLib Table 09) — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | Table 09 (kept on ColorLib's side only) |
| Recreation name | **Billstack** (NEW — stacked bill/invoice rows; single lowercase word) |
| Slug | `table-09` |
| Source page | https://colorlib.com/wp/template/table-09/ |
| Live preview | https://preview.colorlib.com/theme/bootstrap/table-09/ (HTTP 200, 3,206 bytes, `<title>Table 09</title>`; slug-only URL 404s — `bootstrap/` path required, same as table-01…08) |
| Stylesheet | `https://preview.colorlib.com/theme/bootstrap/table-09/css/style.css?v=6a783924` — HTTP 200, 12,619 bytes, self-contained ("Every style this snippet uses, and nothing else. No framework, no build step."). ⚠️ The `table-09/` path segment before `css/` is required. Fetchable at prep time (2026-10-01). Byte-identical (same SHA-256 `3235ade3c556323801330732a9783657ff837d70f5ba4b4276052d23c0201cf9`) to `css/style.css` inside the source ZIP — CSS values canonical |
| Source ZIP | https://preview.colorlib.com/downloads/free/table-09.zip — HTTP 200, 254,645 bytes (index.html + css/style.css + Roboto woff2 fonts 100/300/400/700 latin & latin-ext + README.md — **NO js/ directory**) |
| Preview JS | **NONE** — the live DOM loads zero `<script>` tags (verified 2026-10-01). **This template is entirely static** (like table-06/07 — NOT like table-08's JS accordion) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/table-09.jpg — **REAL JPEG 1200×972** (JFIF progressive — unlike table-05/07/08 which are AVIF despite the `.jpg` extension; no conversion needed), analyzed 2026-10-01 |
| TEMPLATES.md | "## Table (25)" line 2868; item at line 2892; slug appears exactly once |
| Name collision check | "billstack" = 0 hits in `ls apps/`, `openspec/specs/`, `docs/templates/`, and TEMPLATES.md (case-insensitive), 2026-10-01. Distinct from existing tabular-adjacent names (gridkit, rowdeck, domkit, gridmark, statusline, rowline, rowspan, tabula, fixstack) |
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
          <h2 class="heading-section">Table #09</h2>        <!-- 28px, weight 400, #000 — the ONLY heading -->
        </div>
      </div>
      <div class="cl-row">
        <div class="cl-col-md-12">
          <div class="table-wrap">                   <!-- overflow-x: scroll -->
            <table class="cl-table cl-table-striped">
              <thead>
                <tr>
                  <th>Invoce</th>                    <!-- SOURCE TYPO for "Invoice" — scope="col" added in recreation -->
                  <th>Customer</th>
                  <th>Ship</th>
                  <th>Price</th>
                  <th>Pruchased Price</th>           <!-- SOURCE TYPO for "Purchased Price" -->
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <!-- 8 rows, ALL identical data except the status button -->
                <tr>
                  <th scope="row">1001</th>          <!-- source already has scope="row"; bold (UA default) -->
                  <td>Mark Otto</td>
                  <td>Japan</td>
                  <td>$3000</td>
                  <td>$1200</td>
                  <td><a href="#" class="cl-btn cl-btn-success">Progress</a></td>
                </tr>
                <tr>
                  <th scope="row">1001</th>
                  <td>Mark Otto</td><td>Japan</td><td>$3000</td><td>$1200</td>
                  <td><a href="#" class="cl-btn cl-btn-warning">Open</a></td>      <!-- dark text on amber -->
                </tr>
                <tr>
                  <th scope="row">1001</th>
                  <td>Mark Otto</td><td>Japan</td><td>$3000</td><td>$1200</td>
                  <td><a href="#" class="cl-btn cl-btn-danger">On hold</a></td>
                </tr>
                <!-- row 4: Progress (success) · row 5: On hold (danger) · row 6: Open (warning) -->
                <!-- ⚠️ SOURCE DOM QUIRK: row 6's <tr> is NEVER CLOSED — row 7's <tr> opens
                     inside it; the browser auto-closes and both render as normal siblings.
                     Row 7: Open (warning) · row 8: Progress (success). Render 8 WELL-FORMED
                     rows — do not reproduce the malformed markup. -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- NO scripts, NO navbar, NO footer -->
</body>
```

Canonical status sequence (top→bottom): **Progress · Open · On hold ·
Progress · On hold · Open · Open · Progress** — confirmed on both the
live DOM and the screenshot.

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
  background: #fafafa;            /* light WARM-gray page — ⚠️ NOT #f8f9fd! */
  color: gray;                    /* #808080 */
}
a { transition: .3s all ease; color: #1089ff; }
h2, .h2 { line-height: 1.5; font-weight: 400; font-family: "Poppins", Arial, sans-serif; color: #000; }
.ftco-section { padding: 7em 0; }
.heading-section { font-size: 28px; color: #000; }   /* h2 stays BLACK */
.table-wrap { overflow-x: scroll; }
.cl-table { min-width: 1000px !important; width: 100%;
            box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29); }
.cl-table thead th { border: none; padding: 30px; font-size: 13px; color: #000;
                     font-weight: 400; text-transform: uppercase; }   /* ⚠️ 13px/400 — not bold! */
.cl-table thead tr { background: #fff; }
.cl-table tbody tr { background: #fff; }
.cl-table tbody th, .cl-table tbody td { border: none; padding: 20px 30px; font-size: 14px;
                     vertical-align: middle; }
```

Striping + buttons come from the BASE block (which the final block
does NOT override):

```css
.cl-table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);   /* odd rows shaded — WINS on specificity */
}
.cl-btn { display: inline-block; font-weight: 400; color: #212529; text-align: center;
          background-color: transparent; border: 1px solid transparent;
          padding: 0.375rem 0.75rem; font-size: 1rem; line-height: 1.5;
          border-radius: 0.25rem;   /* rounded rect — NOT a pill */
          transition: color .15s ease-in-out, background-color .15s ease-in-out,
                      border-color .15s ease-in-out, box-shadow .15s ease-in-out; }
@media (prefers-reduced-motion: reduce) { .cl-btn { transition: none; } }
.cl-btn-success { color: #fff; background-color: #28a745; border-color: #28a745; }
.cl-btn-success:hover { color: #fff; background-color: #218838; border-color: #1e7e34; }
.cl-btn-warning { color: #212529; background-color: #ffc107; border-color: #ffc107; }  /* dark text! */
.cl-btn-warning:hover { color: #212529; background-color: #e0a800; border-color: #d39e00; }
.cl-btn-danger { color: #fff; background-color: #dc3545; border-color: #dc3545; }
.cl-btn-danger:hover { color: #fff; background-color: #c82333; border-color: #bd2130; }
```

Earlier (OVERRIDDEN) base rules worth knowing: `.cl-table th, td {
padding: 0.75rem; border-top: 1px solid #dee2e6 }`, `thead th {
border-bottom: 2px solid #dee2e6 }`, `.cl-table { color: #212529 }`
(the table text color — page-level `gray` never reaches cells), reboot
`table { border-collapse: collapse }`, `th { text-align: inherit }`.
The final block's 30px/20px-30px paddings, explicit backgrounds, and
border-none win where they overlap.

**Striping specificity trap:** `.cl-table-striped tbody
tr:nth-of-type(odd)` = `(0,2,2)` beats `.cl-table tbody tr {
background: #fff }` = `(0,1,2)` — odd rows KEEP the
`rgba(0,0,0,0.05)` shade (screenshot confirms rows 1/3/5/7 shaded,
2/4/6/8 white). No `.cl-table-hover` class on this table — there is
NO row-hover treatment (the base sheet has no hover rule for rows
anyway).

**Font gotchas:** the sheet declares `@font-face` for Roboto 400 + 700
but **no rule references Roboto** — the final body rule uses Poppins.
thead th font-weight is EXPLICITLY 400 in the final block (differs
from the reboot's UA default and from siblings' bold headers). tbody
th ("1001" row headers) is NEVER set — renders at UA default **bold**
(screenshot confirms). Tailwind v4 preflight resets h1–h6
sizing/weight and th weight — set heading utilities, `font-normal`
on thead labels, and `font-bold` on row-header cells explicitly.

**Buttons are dead links:** the source renders status controls as
`<a href="#">` styled by `.cl-btn` — they navigate nowhere and have
no JS behavior. The recreation SHALL use `<button type="button">`
(monorepo semantics; visually identical). Focus rings come from
`.cl-btn:focus { box-shadow: 0 0 0 0.2rem rgba(0,123,255,0.25) }`
plus per-variant focus colors (success `rgba(72,180,97,0.5)`, warning
`rgba(222,170,12,0.5)`, danger `rgba(225,83,97,0.5)`) — a standard
Tailwind `focus-visible:ring` per variant reproduces this.

## Screenshot analysis (2026-10-01)

The TEMPLATES.md screenshot (REAL JPEG 1200×972) shows: a light
warm-gray full-page canvas (`#fafafa`), a centered black "Table #09"
heading in a light-weight Poppins face (no subheading), then ONE
white table card with a soft shadow: a white header band with small
uppercase black labels "INVOCE · CUSTOMER · SHIP · PRICE ·
PRUCHASED PRICE · STATUS" (the typos visible in caps), then 8 data
rows — **odd rows shaded light gray, even rows white** — each with a
bold "1001" row-header, gray-dark 14px cells (Mark Otto · Japan ·
$3000 · $1200), and in the Status column a rounded-rect button:
green "Progress" (white text), amber "Open" (dark text), red "On
hold" (white text). No row borders, no rules — separation comes
purely from the stripes. The table spans the container width
(≈1140px minus gutters); generous whitespace (7em) above and below.
Matches the stylesheet tokens 1:1 (CSS is canonical on any conflict).

## Fidelity decisions for the implementer

1. **Warm-gray canvas is the identity** — `#fafafa` page + white
   table card. ⚠️ NOT the `#f8f9fd` blue-gray of table-05/06/08 —
   do not copy the sibling value.
2. **This is the STATIC status-button entry** — zero JS, zero
   interactivity beyond button hover/focus. Unlike Tabula (table-08),
   there is no accordion, no state machine, no row-click behavior,
   no row-hover shading. Do not add hover treatments the source lacks.
3. **Striping, not rules** — odd rows `rgba(0,0,0,0.05)`, even rows
   `#fff`; NO borders between rows, NO bottom rule under the header
   (⚠️ Tabula has a 2px `#ececec` header underline — this entry does
   NOT).
4. **Header labels: 13px / weight 400 / uppercase** — the final rule
   explicitly sets 400 (NOT bold like Tabula's 14px headers); the
   uppercase transform is CSS-driven, source text is mixed-case.
   30px padding, no borders, white band.
5. **Body cells: 14px / `20px 30px` padding** — ⚠️ 20px VERTICAL vs
   thead's 30px (Tabula uses 30px everywhere). Row-header "1001" th
   bold with `scope="row"` (present in source — keep).
6. **Status buttons = Bootstrap variants, 0.25rem radius** —
   Progress white-on-`#28a745`, Open DARK-text-on-`#ffc107` (⚠️ dark
   label, not white), On hold white-on-`#dc3545`; hovers
   `#218838`/`#e0a800`/`#c82333`; 0.15s transitions disabled under
   `prefers-reduced-motion`; render as `<button type="button">`.
7. **Heading: black 28px/400, wrapper 3rem mb, NO h3** — ⚠️
   `.cl-mb-5` = 3rem here vs Tabula's `.cl-mb-4` = 1.5rem; siblings
   differ. Exactly one h2 on the page.
8. **Source typos** — "Invoce" and "Pruchased Price" in the headers.
   Keep verbatim (pixel parity) or fix as a documented
   micro-divergence; same KIND of content either way. Note the choice
   in the PR.
9. **DOM quirk** — source row 6's `<tr>` is unclosed (browser
   auto-closes); render 8 well-formed rows.
10. **Poppins 400/700 only** — no Roboto (declared-but-unused).
    Tailwind preflight resets h1–h6 AND th weight — set utilities
    explicitly (font-normal thead labels, font-bold row headers).
11. **scope attributes** — thead th `scope="col"` (source omits; a11y
    improvement) and row-header th `scope="row"` (present in source —
    keep); status controls are real buttons with accessible names.
12. **Horizontal scroll** — `min-width: 1000px` table in an
    `overflow-x-auto` wrapper; the page layout must not break below
    1000px.
13. **Static data** — 8 canonical invoice rows (1001 / Mark Otto /
    Japan / $3000 / $1200) with the status sequence Progress · Open ·
    On hold · Progress · On hold · Open · Open · Progress; paraphrase
    allowed if same kind + sequence.
14. **Footer** — minimal Component Dock attribution (source has none —
    monorepo rule). Zero ColorLib strings in the app.

## Sibling comparison (Table family)

| Entry | New name | Page | Table | Signature |
| --- | --- | --- | --- | --- |
| table-01 | Gridkit | white | bordered light | light bordered table |
| table-02 | Rowdeck | light | charcoal header | dark header bar |
| table-03 | Domkit | light | purple header | purple accents |
| table-04 | Gridmark | white | light | minimal light |
| table-05 | Statusline | `#f8f9fd` | light + lavender underline | status pills + avatars + checkboxes, lavender underline |
| table-06 | Rowline | `#f8f9fd` | sage `#99b19c` header bar + white row cards | cart table, sage header |
| table-07 | Rowspan | `#2b3035` dark | `#343a40` borderless dark panel | full dark theme, page-color row gaps |
| table-08 | Tabula | `#f8f9fd` light | white card table w/ soft shadow, `#ececec` rules, `#f3f3f3` accordion panels, green chevrons | collapsible single-open accordion table (JS state) — the family's interactive entry |
| **table-09** | **Billstack** | **`#fafafa` warm-gray** | **white card table w/ soft shadow, odd-row `rgba(0,0,0,0.05)` stripes, no borders/rules, uppercase 13px/400 headers** | **invoice table with Bootstrap status buttons (green/amber/red, 0.25rem radius) — the family's static status-button entry** |
