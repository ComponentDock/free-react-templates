# Cellcrew (ColorLib Css Table 19) — Design Notes

> Replication research for **Cellcrew** (NEW name) — recreation of ColorLib
> **Css Table 19** (slug `css-table-19`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 19" (TEMPLATES.md line 2878; section
  "## Table (25)"). Slug `css-table-19` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-19/
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-19/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-19/**
  (HTTP 200, 9,915 bytes, `<title>Table #9</title>`). The `bootstrap/`
  path segment matches all sibling css-table previews — always use it.
- **Preview CSS:** `css/style.css?v=61f5c8ec` (11,771 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing
  else. No framework, no build step." It reverts Bootstrap-reboot base
  styles (`all: revert` on html/body/div/…/table elements), then styles
  from browser defaults: reboot block, `@font-face` Roboto 300/400
  (self-hosted woff2) + icomoon checkmark glyph font,
  `.cl-container` (Bootstrap-like responsive container 540/720/960/
  1140px), `.cl-table` + `.cl-table-responsive` (**NO
  `.cl-table-striped`** — no zebra tint; and the base `.cl-table th/td`
  `border-top: 1px solid #dee2e6` rule is KEPT for tbody cells), `.content`
  (7rem padding), `.custom-table` overrides (borderless thead, `#777`
  weight-300 cells, active/hover tint + `#bfbfbf` hairlines, `.persons`
  avatar cluster), the custom checkbox component (`.control` /
  `.control__indicator`), and an `@media print` block (A3 page,
  print-orientation min-widths — screen layout stays responsive).
- **Source scripts:** `js/snippet.js?v=aba81c02` (1,000 bytes; no jQuery,
  no framework) — `CHECK_ALL` (header `input.js-check-all` toggles every
  `th input[type=checkbox]` — the header box + ALL row checkboxes (rows
  use `<th scope="row">` cells) + toggles class `active` on each
  checkbox's closest `<tr>`) and `CHECK_ROWS` (each
  `th[scope="row"] input[type=checkbox]` toggles `active` on its own
  `<tr>`). **`.active` AND row hover ARE STYLED in this stylesheet**
  (subtly): `background: rgba(0, 0, 0, 0.03)` on cells + 1px `#bfbfbf`
  hairlines top/bottom via `:before/:after` pseudo-elements
  (`opacity: 0; visibility: hidden` → `1; visible` on hover/active) —
  checked/hovered rows VISIBLY read as light-gray bands. REIMPLEMENT the
  highlight in React state.
- **Icons:** icomoon glyph font for the checkbox checkmark
  (`@font-face icomoon` → `../fonts/icomoon-subset.woff2`, glyph
  `\e5ca`, rendered white inside the checked indicator). NEVER copy the
  font — use a lucide `Check` icon or an inline SVG checkmark.
- **Fonts:** Roboto 300/400 (self-hosted woff2 in the preview) — use a
  Google Fonts `<link>` (300, 400; 500 for the h2) in `index.html`.
- **Assets:** FIVE avatar images (`images/person_1.jpg` …
  `person_5.jpg`) — circular crew portraits used in the Support/crew
  column. NEVER copy them — use
  `https://picsum.photos/seed/cellcrew-<n>/72/72` (n = 1..5).

## DOM skeleton (live preview, trimmed)

```html
<div class="content">
  <div class="cl-container">
    <h2 class="cl-mb-5">Table #9</h2>
    <div class="cl-table-responsive">
      <table class="cl-table custom-table">          <!-- min-width: 900px;
                                                         NO cl-table-striped -->
        <thead>
          <tr>
            <th scope="col">
              <label class="control control--checkbox">
                <input type="checkbox" class="js-check-all"/>   <!-- select-all -->
                <div class="control__indicator"></div>
              </label>
            </th>
            <th scope="col">Order</th>
            <th scope="col">Sales</th>
            <th scope="col">Description</th>
            <th scope="col">Support</th>
            <!-- NOTE: 5 header cells vs 6 body cells — the avatar
                 column below has NO header label (source quirk) -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <label class="control control--checkbox">
                <input type="checkbox"/>
                <div class="control__indicator"></div>
              </label>
            </th>
            <td>1392</td>                        <!-- Order -->
            <td>Sales Pitch - 2019</td>          <!-- Sales -->
            <td>Far far away, behind the word mountains
              <small class="cl-d-block">Far far away, behind the word mountains</small>
            </td>                                <!-- Description + blurb -->
            <td>+63 983 0962 971</td>            <!-- Support (phone) -->
            <td>
              <ul class="persons">               <!-- HEADERLESS 6th column -->
                <li><a href="#"><img src="images/person_1.jpg" alt="Person" class="cl-img-fluid"></a></li>
                <li><a href="#"><img src="images/person_2.jpg" …></a></li>
                <li><a href="#"><img src="images/person_3.jpg" …></a></li>
                <li><a href="#"><img src="images/person_4.jpg" …></a></li>
                <li><a href="#"><img src="images/person_5.jpg" …></a></li>
              </ul>                              <!-- 5 avatars -->
            </td>
          </tr>
          <tr>  <!-- 4616 · Social Media Planner · … · +02 020 3994 929 · 3 avatars (person_5, person_4, person_2) -->
          <tr>  <!-- 9841 · Website Agreement · … · +01 352 1125 0192 · 2 avatars (person_3, person_2) -->
          <tr>  <!-- 1392 — DUPLICATE of row 1 (5 avatars) -->
          <tr>  <!-- 4616 — DUPLICATE of row 2 (3 avatars) -->
          <tr>  <!-- 9841 — DUPLICATE of row 3 (2 avatars) -->
        </tbody>
      </table>
    </div>
  </div>
</div>
<script src="js/snippet.js?v=aba81c02"></script>   <!-- check-all + row active toggle -->
```

**Initial state in the live DOM:** all 6 row checkboxes + the header
select-all are UNCHECKED; NO row carries the `active` class. The
ColorLib screenshot shows rows 1/2/3/6 (1392, 4616, 9841, 9841) checked
+ tinted light-gray — that is the POST-CLICK interaction state (the
`.active` styling working), not the initial load. Start all-unchecked.

## Design tokens (from `css/style.css`, verified vs screenshot)

| Token | Value | Source selector / note |
|-------|-------|------------------------|
| Font | `"Roboto", -apple-system, …, sans-serif`; body 16px/**300**/1.5, `#212529` | `body` (reboot + weight-300 override) |
| Page background | `#fff` WHITE | `body` override at the bottom of the sheet — the LIGHT counterpart of Cellgrid's charcoal |
| Heading | 20px, weight 500, **DARK INK `#212529` (NOT white)**, `margin-bottom: 3rem` | `h2 { font-size: 20px }` + reboot 500 + `.cl-mb-5`; color inherits body ink |
| Header labels | **`#212529` dark ink**, default **bold** weight (browser default for `th`), **normal case**, borderless | `.custom-table thead tr, .custom-table thead th` — NO text-transform/letter-spacing; thead border-top none + border-bottom none !important |
| Body cells | `#777`, weight **300**, `padding: 20px` v + `0.75rem` h, `vertical-align: top`, `transition: .3s all ease` | `.custom-table tbody th, .custom-table tbody td` — NOTE: this rule does NOT set `border: none` |
| Row separators | `border-top: 1px solid #dee2e6` KEPT on tbody cells | base `.cl-table th, .cl-table td` rule — rows are contiguous, separated by thin gray hairlines (Cellgrid REMOVED these) |
| Row background (normal) | transparent (white page) — NO override | only hover/active set a background |
| Row background (active/hover — SIGNATURE) | `rgba(0, 0, 0, 0.03)` + 1px `#bfbfbf` hairlines top/bottom | `.custom-table tbody tr.active th/td, ... tr:hover th/td { background: rgba(0,0,0,0.03) }`; hairlines from `tr th/td :before/:after` pseudo-elements (`content: ""; height: 1px; background: #bfbfbf; opacity: 0; visibility: hidden` → `opacity: 1; visibility: visible`; `:before { top: -1px }`, `:after { bottom: -1px }`). Subtle but REAL — checked rows read as light-gray bands in the screenshot |
| Sub-blurb | `#b3b3b3`, weight 300, 80% size, `display: block` | `.custom-table tbody … small` + `.cl-d-block` |
| Avatar cluster `.persons` (SIGNATURE) | `ul { padding: 0; margin: 0 }`; `li { padding: 0; margin: 0 0 0 -15px; list-style: none; display: inline-block }`; `li a { display: inline-block; width: 36px }`; `li a img { border-radius: 50%; max-width: 100% }` | circular ~36px portraits; each `li` has margin-left −15px → avatars overlap (each next steps ~21px: 36 − 15). Counts per row: **5 / 3 / 2** (rows 4–6 repeat 1–3) |
| Links (global) | `a { color: #007bff }`, `a:hover { color: #0056b3 }`, `transition: .3s all ease`; `a, a:hover { text-decoration: none !important }` | the ONLY anchors are the avatar wrappers (images — color invisible); keep no-underline |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #ccc` (LIGHT gray — NOT Cellgrid's `#3f3f47`), transparent bg; input visually hidden (`position: absolute; z-index: -1; opacity: 0`) | `.control input` + `.control__indicator` |
| Checkbox hover/focus | border → `#007bff` | `.control:hover input ~ .control__indicator`, `:focus` |
| Checkbox checked | `border: 2px solid #007bff; background: #007bff` + WHITE checkmark (icomoon `\e5ca` → replace with lucide Check/inline SVG), centered `translate(-50%, -52%)` | `.control input:checked ~ .control__indicator(:after)` |
| Checkbox disabled | bg `#e6e6e6` opacity .6; disabled+checked `#007bff` opacity .2 | not exercised in live DOM |
| Container | 540/720/960/1140px @576/768/992/1200, 15px gutters | `.cl-container` media queries |
| Table | `width: 100%; min-width: 900px`, `border-collapse: collapse`; thead borderless; tbody cells KEEP 1px `#dee2e6` top border | `.custom-table` + base `.cl-table` |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` |
| Content | `padding: 7rem 0` | `.content` |
| Print block | `@media print`: `@page { size: a3 }`, thead `table-header-group`, tr/img page-break-inside avoid, h2 orphans/widows 3 + page-break-after avoid, body/container `min-width: 992px !important`, cl-table `border-collapse: collapse !important`, td/th `background-color: #fff !important` | PRINT-ONLY — do NOT apply the 992px min-width on screen |

## Screenshot analysis (1200×972, AVIF despite .jpg extension)

- WHITE `#fff` page; dark "Table #9" heading top-left at ~20px weight
  ~500; large whitespace (7rem) above/below the table.
- Table spans most of the 1140px container; header row: small
  gray-bordered (unchecked) checkbox square, then bold dark normal-case
  labels "Order · Sales · Description · Support" — 5 labels; the
  avatar column to the right of Support has NO header.
- 6 data rows, CONTIGUOUS, separated by thin 1px `#dee2e6` hairlines
  (no gaps, no spacers).
- Checked rows in the screenshot: 1, 2, 3, 6 (1392/4616/9841/9841) —
  checkbox filled blue `#007bff` with white check, row tinted
  light-gray (`rgba(0,0,0,0.03)`) with slightly darker `#bfbfbf`
  hairlines top/bottom — the rows read as soft gray bands.
- Unchecked rows (4, 5): white/transparent bg, `#777` weight-300 text,
  `#b3b3b3` sub-blurb under the description, gray-bordered checkbox.
- Avatar clusters: circular overlapping portraits in the headerless 6th
  column — 5 avatars (rows 1/4), 3 (rows 2/5), 2 (rows 3/6); each ~36px
  circle, overlapping by about 40% of their width.
- Aesthetic: clean light admin/list table — white-on-white rows
  structured by hairlines, gray text, ONE blue accent (checked
  checkboxes), soft gray active bands. The light counterpart of
  Cellgrid; the avatar crew column is its unmistakable signature.

## Section-by-section fidelity notes

1. **Page shell** — WHITE `#fff`, Roboto weight 300, `.content` 7rem
   vertical padding, centered `.cl-container` (1140px desktop / 15px
   gutters; responsive 540/720/960). The print-only `min-width: 992px`
   body/container rules are NOT part of the screen layout.
2. **Heading** — h2 "Table #9" (paraphrase OK): 20px / weight 500 /
   DARK INK `#212529` / 3rem margin-bottom, above the table on white.
3. **Responsive wrapper** — `overflow-x: auto` around the table only.
4. **Table** — 5 header labels; borderless bold dark-ink normal-case
   header; `#777`/300 cells with 20px v / 0.75rem h padding;
   `min-width: 900px`; `border-collapse: collapse`; tbody cells KEEP
   the 1px `#dee2e6` top border; NO stripe class.
5. **Rows** — 6 contiguous data rows (3 unique ×2), each with SIX body
   cells (checkbox `th scope="row"` · order · sales · description +
   blurb · phone · avatar cluster — headerless 6th column); separated
   by thin `#dee2e6` hairlines; NO spacer rows, NO gaps; normal cells
   transparent (white page shows).
6. **Checkbox column** — first body cell is `<th scope="row">`:
   visually hidden input + 20×20px / radius 4px / 2px `#ccc` indicator
   (LIGHT border — like Cellswitch, NOT Cellgrid's `#3f3f47`);
   hover/focus blue `#007bff`; checked = blue fill + white check
   (lucide/inline SVG, never icomoon); header cell holds the select-all
   control; all boxes start unchecked.
7. **Description cell** — sentence + `#b3b3b3`/300/80% block blurb
   ("Far far away, behind the word mountains" or equal-length
   paraphrase, same in every row).
8. **Support cell** — plain `#777`/300 +CC phone number.
9. **Avatar cluster cell (SIGNATURE)** — `<ul class="persons">`:
   list-none, p-0 m-0; `li` inline-block with margin-left −15px
   (overlap); wrapper `a` width 36px; `img` border-radius 50%
   (circular ~36px). Counts 5 / 3 / 2 per unique row. Images:
   `picsum.photos/seed/cellcrew-<n>/72/72` — NEVER the source's
   person_*.jpg.
10. **Interactive behavior (React state)** — select-all checks/unchecks
    all row checkboxes AND applies/removes the active highlight on every
    row; row checkbox toggles ONLY its own row's checked state +
    highlight (header box does NOT auto-sync from row state, per the
    source JS); hover applies the active look temporarily (hover must
    NOT clear a checked row's highlight). THE ACTIVE HIGHLIGHT IS REAL
    STYLING HERE (bg `rgba(0,0,0,0.03)` + `#bfbfbf` hairlines) — subtle
    but visible, unlike css-table-17 where the class was never styled.
11. **Footer** — source has none; add the monorepo-mandated minimal
    Component Dock attribution line (https://www.componentdock.com/).
    Zero ColorLib references in the app (comments included).

## Sibling warning (do NOT copy tokens between variants)

Gridline (`css-table-11`) shares the checkbox + select-all machinery but
is a WHITE page with `#dee2e6` separators, NO active/hover styling, NO
sub-blurb, and NO avatars. Gridspan (`css-table-13`) shares the
separator + blurb idiom but its hover/active tint is BLUE (`#007bff`
hairlines) with no avatars. Cellswitch (`css-table-17`) shares the
`#ccc` checkbox borders and white page but has BLACK headers, iOS
switches, a Details column, and NO active/hover styling. Cellgrid
(`css-table-18`) is the closest sibling — same checkbox machinery, same
`.active`-is-styled behavior — but it is the DARK variant: charcoal
page, `#25252b` rows, 3px gaps (borders REMOVED), dramatic `#2e2e36` +
white highlight, dark `#3f3f47` checkbox borders, gray name links, and
NO avatars. Cellcrew's signatures: the **headerless 6th column of
overlapping circular avatar crews**, the **subtle REAL active/hover
tint** (`rgba(0,0,0,0.03)` + `#bfbfbf` hairlines) on a WHITE page with
**kept `#dee2e6` row separators**, dark bold normal-case 5-label
header, `#ccc` checkbox borders, `#b3b3b3` sub-blurb, and the
6-body-cells-vs-5-headers quirk.
