# Statusline (ColorLib Table 05) — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | Table 05 (kept on ColorLib's side only) |
| Recreation name | **Statusline** (NEW — status-pill lines of the member table) |
| Slug | `table-05` |
| Source page | https://colorlib.com/wp/template/table-05/ |
| Live preview | https://preview.colorlib.com/theme/bootstrap/table-05/ (HTTP 200, 8,847 bytes, `<title>Table 05</title>`; slug-only URL 404s — `bootstrap/` path required, same as table-01…04) |
| Stylesheet | `https://preview.colorlib.com/theme/bootstrap/table-05/css/style.css?v=de8ec152` — HTTP 200, 11,913 bytes, self-contained ("Every style this snippet uses, and nothing else"). ⚠️ The `table-05/` path segment before `css/` is required; bare `bootstrap/css/style.css` 404s. Fetchable at prep time (2026-09-30) — unlike table-01…04 whose sheets 404'd on curl |
| Preview JS | NONE — zero `<script>` tags on the live page |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/table-05.jpg — AVIF data despite .jpg extension, 1200×972, analyzed 2026-09-30 after PIL conversion |
| TEMPLATES.md | "## Table (25)" line 2868; item at line 2888; slug appears exactly once |
| Name collision check | "statusline" = 0 hits in `ls apps/`, `openspec/specs/`, `docs/templates/`, and TEMPLATES.md bold names (case/space-insensitive), 2026-09-30 |
| Stack | Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo) |

## Live DOM skeleton (verbatim structure)

```html
<body>
  <section class="ftco-section">                 <!-- padding: 7em 0 -->
    <div class="cl-container">                   <!-- max-w 540/720/960/1140 @576/768/992/1200, 15px gutters -->
      <div class="cl-row cl-justify-content-center">
        <div class="cl-col-md-6 cl-text-center cl-mb-5">   <!-- 50% @768+, centered, mb 3rem -->
          <h2 class="heading-section">Table #05</h2>        <!-- 28px, weight 400, #000 -->
        </div>
      </div>
      <div class="cl-row">
        <div class="cl-col-md-12">
          <div class="table-wrap">               <!-- overflow-x: scroll -->
            <table class="cl-table cl-table-responsive-xl">
              <thead>
                <tr>                             <!-- bg #fff; border-bottom 4px solid #eceffa -->
                  <th></th>                      <!-- checkbox column, empty -->
                  <th>Email</th>
                  <th>Username</th>
                  <th>Status</th>
                  <th></th>                      <!-- remove column, empty -->
                </tr>
              </thead>
              <tbody>
                <tr class="cl-alert">            <!-- ×5 rows; row5 cells carry cl-border-bottom-0 -->
                  <td>
                    <label class="checkbox-wrap checkbox-primary">
                      <input type="checkbox" checked>   <!-- row1 only; rows2–5 unchecked -->
                      <span class="checkmark"></span>   <!-- :after FA glyph \f0c8 / \f14a -->
                    </label>
                  </td>
                  <td class="cl-d-flex cl-align-items-center">
                    <div class="img" style="background-image: url(images/person_1.jpg)"></div>
                    <div class="cl-pl-3 email">
                      <span>markotto@email.com</span>
                      <span>Added: 01/03/2020</span>
                    </div>
                  </td>
                  <td>Markotto89</td>
                  <td class="status"><span class="cl-active">Active</span></td>
                  <td>
                    <button type="button" class="cl-close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true"><i class="fa fa-close"><svg class="cl-icon">…</svg></i></span>
                    </button>
                  </td>
                </tr>
                <!-- rows 2–5 same skeleton; status waiting/cl-active per data; last row borderless -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- no footer in source — monorepo mandates Component Dock attribution -->
</body>
```

Canonical row data (status · checkbox default):

| # | Avatar | Email | Added | Username | Status | Checkbox |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | person_1.jpg | markotto@email.com | 01/03/2020 | Markotto89 | cl-active "Active" | **checked** |
| 2 | person_2.jpg | jacobthornton@email.com | 01/03/2020 | Jacobthornton | waiting "Waiting for Resassignment" | unchecked |
| 3 | person_3.jpg | larrybird@email.com | 01/03/2020 | Larry_bird | cl-active "Active" | unchecked |
| 4 | person_4.jpg | johndoe@email.com | 01/03/2020 | Johndoe1990 | cl-active "Active" | unchecked |
| 5 | person_5.jpg | garybird@email.com | 01/03/2020 | Garybird_2020 | waiting "Waiting for Resassignment" | unchecked |

## Design tokens (from the live stylesheet, 2026-09-30 — canonical)

```css
/* page + type */
body { font-family: "Poppins", Arial, sans-serif; font-size: 16px;
       line-height: 1.8; font-weight: normal; background: #f8f9fd; color: gray; }
h2, .h2 { line-height: 1.5; font-weight: 400;  /* overrides reboot's 500 */
          font-family: "Poppins", Arial, sans-serif; color: #000; }
.heading-section { font-size: 28px; color: #000; }
.ftco-section { padding: 7em 0; }

/* layout */
.cl-container { padding-inline: 15px; margin-inline: auto;
  max-width: 540px @576 · 720px @768 · 960px @992 · 1140px @1200; }
.cl-col-md-6  { flex: 0 0 50%;  max-width: 50%;  }  /* @768+ */
.cl-col-md-12 { flex: 0 0 100%; max-width: 100%; }  /* @768+ */
.cl-mb-5  { margin-bottom: 3rem !important; }
.cl-pl-3  { padding-left: 1rem !important; }
.table-wrap { overflow-x: scroll; }

/* table shell */
.cl-table { min-width: 1000px !important; width: 100%; color: #212529;
            margin-bottom: 1rem;
            box-shadow: 0px 5px 12px -12px rgba(0, 0, 0, 0.29); }
table { border-collapse: collapse; }                 /* reboot default */

/* header */
.cl-table thead th  { border: none; padding: 30px; font-size: 13px;
                      font-weight: 500; color: gray; vertical-align: bottom; }
.cl-table thead tr  { background: #fff; border-bottom: 4px solid #eceffa; }

/* body rows */
.cl-table tbody tr  { margin-bottom: 10px; border-bottom: 4px solid #f8f9fd; }
.cl-table tbody tr:last-child { border-bottom: 0; }
.cl-table tbody td  { border: none; padding: 30px; font-size: 14px;
                      background: #fff; vertical-align: middle; }
.cl-alert           { position: relative; padding: 0.75rem 1.25rem;
                      margin-bottom: 1rem; border: 1px solid transparent;
                      border-radius: 0.25rem; }      /* alert-card row rule */
.cl-border-bottom-0 { border-bottom: 0 !important; } /* row 5 */

/* user cell */
.cl-d-flex { display: flex !important; }
.cl-align-items-center { align-items: center !important; }
.cl-table tbody td .img  { width: 50px; height: 50px; border-radius: 50%;
  background-size: cover; background-position: center; }
.cl-table tbody td .email span           { display: block; }
.cl-table tbody td .email span:last-child { font-size: 12px;
                                            color: rgba(0, 0, 0, 0.3); }

/* status pills */
.cl-table tbody td.status span { position: relative; border-radius: 30px;
                                 padding: 4px 10px 4px 25px; }
.cl-table tbody td.status span:after { position: absolute; top: 9px;
  left: 10px; width: 10px; height: 10px; content: ''; border-radius: 50%; }
.cl-table tbody td.status .cl-active { background: #cff6dd; color: #1fa750; }
.cl-table tbody td.status .cl-active:after { background: #23bd5a; }
.cl-table tbody td.status .waiting   { background: #fdf5dd; color: #cfa00c; }
.cl-table tbody td.status .waiting:after   { background: #f2be1d; }

/* remove button */
.cl-close { float: right; font-size: 1.5rem; font-weight: 700; color: #000;
            text-shadow: 0 1px 0 #fff; opacity: .5; }
.cl-close:hover { color: #000; text-decoration: none; }
.cl-close:not(:disabled):not(.disabled):hover,
.cl-close:not(:disabled):not(.disabled):focus { opacity: .75; }
button.cl-close { padding: 0; background-color: transparent; border: 0;
                  appearance: none; }
.cl-table tbody td .cl-close span { font-size: 12px; color: #dc3545; }

/* custom checkbox */
.checkbox-wrap { display: block; position: relative; cursor: pointer;
                  font-size: 16px; font-weight: 500; user-select: none; }
.checkbox-wrap input { position: absolute; opacity: 0; cursor: pointer;
                       height: 0; width: 0; }        /* hidden but focusable */
.checkmark      { position: absolute; top: 0; left: 0; }
.checkmark:after { content: "\f0c8";  /* FA square-o */
  font-family: "FontAwesome"; position: absolute; color: rgba(0, 0, 0, 0.1);
  font-size: 20px; margin-top: -14px; transition: 0.3s; }
@media (prefers-reduced-motion: reduce) { .checkmark:after { transition: none; } }
.checkbox-wrap input:checked ~ .checkmark:after {
  content: "\f14a";  /* FA check-square */ color: #40bfc1; }
.checkbox-primary { color: #40bfc1; }
.checkbox-primary input:checked ~ .checkmark:after { color: #40bfc1; }

/* responsive */
@media (max-width: 1199.98px) {
  .cl-table-responsive-xl { display: block; width: 100%; overflow-x: auto;
                            -webkit-overflow-scrolling: touch; }
}
```

Sheet anatomy (fetch order): reboot `all: revert` block → box-sizing /
print shims → Roboto 400/700 @font-face (unused fallbacks) → `.fa` /
`.cl-icon` icon rules → HTML defaults (body reboot stack, h2 500,
`table { border-collapse: collapse }`) → `.cl-container` → grid →
`.cl-table` base + responsive-xl → `.cl-alert` / `.cl-close` →
utilities → print rules → **final override block** (everything above
marked "final") → FontAwesome subset @font-face.

## Screenshot analysis (table-05.jpg, AVIF 1200×972, analyzed 2026-09-30)

The screenshot shows a macOS browser window on
preview.colorlib.com rendering: a **light blue-gray page** (`#f8f9fd`);
a centered dark **"Table #05"** heading in regular-weight Poppins
(28px); below it a **white table card** spanning the container with a
very soft drop shadow; a header row of gray labels **Email · Username ·
Status** (checkbox and remove columns unlabeled) sitting above a faint
**lavender underline**; **five white rows** separated by barely visible
gaps (the page-colored 4px separators); row 1's checkbox renders as a
**teal filled square with white check** (`#40bfc1`); rows 2–5 show
**light-gray empty squares**; each row shows a **circular photo
avatar** (business headshots), the email in dark text over a small gray
**"Added: 01/03/2020"**, the username in plain dark text, a status
**pill** — soft green with green dot for "Active", soft amber with
amber dot for "Waiting for Resassignment" — and a small **red ×** at
the far right; the bottom of the table ends cleanly with no separator
under the last row; overall airy, dashboard-like, minimal. This
matches the live preview DOM and stylesheet tokens exactly (CSS is
canonical; screenshot confirms rendering).

## Section-by-section fidelity notes

1. **Page shell** — `#f8f9fd` background (NOT Gridmark's white — this
   family's entries alternate canvases; verify each), Poppins
   400/500/700 loaded properly (the preview head loads NO Google
   Fonts — Poppins falls back to Arial there; load it for real),
   body 16px/1.8/normal, color gray, `.ftco-section` 7em vertical
   padding, container 540/720/960/1140 @576/768/992/1200 + 15px
   gutters.
2. **Heading** — one h2 "Table #05" (keep the "#" — it's the source's
   label style), 28px, **weight 400** (final rule overrides the
   reboot's 500 — same gotcha as every sibling), `#000`, centered in a
   50%-width column with 3rem margin-bottom.
3. **Table wrapper + shell** — `.table-wrap` horizontal scroll; table
   min-width **1000px** !important, color `#212529`, shadow
   `0 5px 12px -12px rgba(0,0,0,0.29)`, border-collapse collapse,
   effective white via cells. Below xl (1200px) the table itself
   becomes a scroll block (`.cl-table-responsive-xl`).
4. **Header row** — 5 th cells: empty (checkbox) · Email · Username ·
   Status · empty (remove). 13px / weight 500 / gray, 30px padding, NO
   borders, white bg, **4px `#eceffa` bottom border** (the lavender
   underline — signature of this entry). Use `scope="col"` on the
   three labeled columns.
5. **Body rows** — `tr.cl-alert` alert-card rule on every row
   (transparent 1px border, 0.25rem radius, 0.75rem 1.25rem padding);
   with collapse + white td backgrounds the radius is visually subtle —
   **match the screenshot** (white bands + faint page-colored gaps),
   don't chase pixel radius. Separators: 4px `#f8f9fd` bottom border +
   ~10px row margin; last row borderless (both via CSS `:last-child`
   AND the source's explicit `cl-border-bottom-0` classes on row 5).
   Cells: 14px / white / 30px padding / vertical middle / no borders.
6. **Checkbox cell** — REAL `<input type="checkbox">` inside a label,
   visually hidden via opacity 0 + 0×0 (NOT display:none — keep it
   focusable); 20px square glyph (lucide Square/SquareCheck or custom):
   unchecked `rgba(0,0,0,0.1)`, checked `#40bfc1`; 0.3s transition with
   `prefers-reduced-motion: reduce` off; **row 1 default-checked**;
   the source label has no text — add an accessible name per row
   ("Select Markotto89").
7. **User cell** — flex vertically centered: 50×50 circular avatar
   (picsum `seed/statusline-<n>/100/100`, cover/center) + 1rem left
   gap + stacked block: email (inherits `#212529`, 16px, weight 400)
   over "Added: 01/03/2020" (12px, `rgba(0,0,0,0.3)`). Same added-date
   on all 5 rows in the source.
8. **Username cell** — plain 14px text, `#212529` (inherits table
   color; body gray does NOT win inside the table).
9. **Status pill cell** — pill span: radius 30px, padding
   4px 10px 4px 25px (left padding reserves the dot lane), with a
   10×10px dot at top 9px / left 10px:
   - Active: bg `#cff6dd`, text `#1fa750`, dot `#23bd5a`
   - Waiting: bg `#fdf5dd`, text `#cfa00c`, dot `#f2be1d`
   Source label "Waiting for Resassignment" (double-s typo) —
   paraphrase allowed, keep status semantics.
10. **Remove cell** — button per row: chrome 1.5rem/700/`#000`/
    text-shadow/opacity .5 → hover/focus .75, but the inner span
    renders **12px `#dc3545`** — the visible result is a small red ×
    (lucide X at those span tokens). `aria-label="Close"` in source —
    keep an accessible name. `data-dismiss="alert"` is inert legacy:
    the recreation removes the row via React state (documented
    divergence).
11. **Footer** — source has none; monorepo rule mandates a minimal
    Component Dock attribution line linking
    https://www.componentdock.com/ branded "Component Dock"; zero
    ColorLib references anywhere in the app.

## Sibling comparison (Table family — never copy sibling values blindly)

| Slug | Name | Page | Header treatment | Signature |
| --- | --- | --- | --- | --- |
| table-01 | Gridkit | `#f8f9fd` | colored thead-primary | plain bordered table |
| table-02 | Rowdeck | `#f8f9fd` | dark charcoal thead-dark | row cards via `border-spacing: 0 10px` (SEPARATE model) |
| table-03 | Domkit | `#f8f9fd` | vivid purple `#6807f9` thead bar | colored header bar |
| table-04 | Gridmark | **pure `#fff`** | borderless BLACK day headers | class-schedule grid, `#ffafb0` salmon links |
| **table-05** | **Statusline** | **`#f8f9fd`** (returns to blue-gray) | **white thead + 4px `#eceffa` lavender underline, gray 13px labels — NO colored bar** | **alert-card member rows: checkboxes (teal `#40bfc1`), 50px avatars, status pills (green/amber), red × removal, 4px page-colored row gaps (collapse model — NOT Rowdeck's separate+border-spacing)** |

Gridmark's white canvas is the outlier; Statusline returns to the
family's `#f8f9fd` blue-gray. Statusline is the only entry with
per-row interactive controls (checkbox + remove) and status pills.

## Gotchas for implementers

1. **Preview path:** slug-only preview URL 404s — use
   `https://preview.colorlib.com/theme/bootstrap/table-05/`.
2. **Stylesheet URL:** requires the `table-05/` segment:
   `.../theme/bootstrap/table-05/css/style.css?v=de8ec152`. The bare
   `bootstrap/css/style.css` path 404s. (Fetchable for THIS entry —
   table-01…04 sheets 404'd on curl; tokens here came straight from
   the sheet.)
3. **h2 weight:** reboot sets 500; the final override sets **400** —
   canonical 400 (same gotcha as css-table-12 and table-01…04).
4. **Poppins is declared but NOT loaded** by the preview (no Google
   Fonts link; only Roboto/FontAwesome @font-face) — load Poppins
   400/500/700 properly; weights 500 (thead + checkbox labels) and
   700 (close-chrome) are used.
5. **"gray" = `#808080`** for body text and header labels; table
   content is `#212529` (table rule wins inside the table).
6. **Row separators are `#f8f9fd` = the page color** — they read as
   gaps, not lines; last row borderless (CSS + explicit classes).
7. **`tr.cl-alert` radius is subtle** under border-collapse + white
   cells — the screenshot is the acceptance bar for row look, not the
   raw radius value.
8. **Checkbox glyphs are FA `\f0c8`/`\f14a` at 20px with
   margin-top -14px** — recreate with lucide Square/SquareCheck (or
   custom) at 20px; checked `#40bfc1`; input opacity-0 (focusable!).
9. **Row 1 checkbox is default-checked** in the live DOM — replicate.
10. **thead has 5 columns but 3 labels** — th[0]/th[4] empty; only
    Email/Username/Status get `scope="col"`.
11. **Remove buttons are dead in the source** (no JS) — make them
    functional via React state; keep the 12px `#dc3545` × visual and
    the accessible name.
12. **"Waiting for Resassignment"** — source typo; paraphrase allowed,
    keep status semantics.
13. **Avatars:** `picsum.photos/seed/statusline-<n>/100/100` (display
    50×50 circular); never copy `images/person_*.jpg`.
14. **Tailwind v4 preflight has no th/td rules** — cell padding,
    borders, backgrounds must be explicit utilities/theme values
    (memory pitfall from css-table-12: UA/default th bold does not
    survive preflight assumptions — here thead weight 500 is set
    explicitly anyway).
15. **min-width 1000px + wrapper overflow** — keep both; layout must
    stay intact at narrow viewports (no page-level horizontal
    overflow).
16. **Provenance ban:** no `colorlib.com` strings anywhere in
    `apps/statusline` (comments included) — design-token notes only.
