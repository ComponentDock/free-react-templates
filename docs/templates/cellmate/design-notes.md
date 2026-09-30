# Cellmate (ColorLib Css Table 20) — Design Notes

> Replication research for **Cellmate** (NEW name) — recreation of ColorLib
> **Css Table 20** (slug `css-table-20`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 20" (TEMPLATES.md line 2879; section
  "## Table (25)" at line 2868). Slug `css-table-20` appears exactly ONCE
  in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-20/
  (HTTP 200).
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-20/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-20/**
  (HTTP 200, 8,943 bytes). ⚠️ **Stale title caveat:** the page
  `<title>` reads "Table #7" (copy-pasted from the css-table-17/Cellswitch
  source — same quirk family as css-table-19's title), but the `<h2>` in
  the live DOM reads **"Table #10"** and the full DOM matches the
  TEMPLATES.md screenshot for slug css-table-20 exactly (same 7 columns,
  same 7 rows, same toggle/strike states) — this IS the correct preview.
  Always use the `bootstrap/` path segment; it matches all sibling
  css-table previews.
- **Preview CSS:** `css/style.css?v=06d35dc4` (12,590 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing
  else. No framework, no build step." It reverts Bootstrap-reboot base
  styles (`all: revert` on html/body/div/…/table elements), then styles
  from browser defaults: reboot block, `@font-face` Roboto 300/400
  (self-hosted woff2) + icomoon checkmark glyph font,
  `.cl-container` (Bootstrap-like responsive container 540/720/960/
  1140px), `.cl-table` + `.cl-table-responsive` (**the table DOES carry
  `.cl-table-striped` — odd rows `rgba(0,0,0,0.05)`; and
  `.custom-table tbody th/td { border: none }` REMOVES the base
  `#dee2e6` cell borders**), `.content` (7rem padding), `.custom-table`
  overrides (borderless BLACK thead, `#777` weight-300 cells,
  `tr.cl-active { opacity: .4 }`, the red `.name:before` strike bar),
  the custom checkbox component (`.control` / `.control__indicator`),
  the iOS toggle switch component (`.cl-custom-control.ios-switch`), and
  an `@media print` block (A3 page, print-orientation min-widths — screen
  layout stays responsive).
- **Source scripts:** `js/snippet.js?v=c35330b0` (1,103 bytes; no jQuery,
  no framework) — THREE behavior groups, verified on the live DOM:
  - `CHECK_ALL[0]`: `{ all: ".js-check-all", boxes: ".control--checkbox
    input[type=\"checkbox\"]", row: null }` — the header CHECKBOX toggles
    every checkbox on the page (header + all rows); **row: null — NO
    switch change, NO row highlight.**
  - `CHECK_ALL[1]`: `{ all: ".js-ios-switch-all", boxes: ".ios-switch
    input[type=\"checkbox\"]", row: "cl-active" }` — the header TOGGLE
    SWITCH sets every switch's checked state AND toggles class
    `cl-active` on each checkbox's closest `<tr>`.
  - `CHECK_ROWS`: `{ boxes: ".ios-switch input[type=\"checkbox\"]", cls:
    "cl-active" }` — each ROW switch toggles `cl-active` on its own
    closest `<tr>` (checked → add, unchecked → remove).
  - **The highlight is SWITCH-driven:** `tr.cl-active { opacity: .4 }`
    (whole-row dim) + `tr.cl-active .name:before { opacity: 1;
    visibility: visible }` (RED strike bar). Row checkboxes have ZERO
    highlight effect. **There is NO `tr:hover` rule anywhere in the
    stylesheet** — unlike css-table-19/Cellcrew where hover shares the
    active treatment.
- **Icons:** icomoon glyph font for the checkbox checkmark
  (`@font-face icomoon` → `../fonts/icomoon-subset.woff2`, glyph
  `\e5ca`, rendered white inside the checked indicator). NEVER copy the
  font — use a lucide `Check` icon or an inline SVG checkmark. The toggle
  switch needs NO icon (pure CSS pill + knob).
- **Fonts:** Roboto 300/400 (self-hosted woff2 in the preview) — use a
  Google Fonts `<link>` (300, 400; 500 for the h2) in `index.html`.
  NOTE: the body rule is weight **400** here (unlike css-table-19 where
  the body override was 300); the table cells override down to 300.
- **Assets:** NONE. This template has zero images (no avatars, no photos)
  — no picsum placeholders required.

## DOM skeleton (live preview, trimmed)

```html
<body>
  <div class="content">
    <div class="cl-container">
      <h2 class="cl-mb-5">Table #10</h2>

      <div class="cl-table-responsive">
        <table class="cl-table cl-table-striped custom-table">
          <thead>
            <tr>
              <th scope="col">
                <label class="control control--checkbox">
                  <input type="checkbox" class="js-check-all" />
                  <div class="control__indicator"></div>
                </label>
              </th>
              <th scope="col">Order</th>
              <th scope="col">Name</th>
              <th scope="col">Occupation</th>
              <th scope="col">Contact</th>
              <th scope="col">Education</th>
              <th scope="col">
                <label class="cl-custom-control ios-switch"
                       style="position: relative; top: 10px;">
                  <input type="checkbox"
                         class="ios-switch-control-input js-ios-switch-all">
                  <span class="ios-switch-control-indicator"></span>
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- rows 1-2: class="cl-active" + switch checked -->
            <tr scope="row" class="cl-active">
              <td>
                <label class="control control--checkbox">
                  <input type="checkbox" />
                  <div class="control__indicator"></div>
                </label>
              </td>
              <td>1392</td>
              <td class="cl-pl-0">
                <div class="cl-d-flex cl-align-items-center">
                  <a href="#" class="name">James Yates</a>
                </div>
              </td>
              <td>
                Web Designer
                <small class="cl-d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+63 983 0962 971</td>
              <td>NY University</td>
              <td>
                <label class="cl-custom-control ios-switch">
                  <input type="checkbox" checked="" class="ios-switch-control-input">
                  <span class="ios-switch-control-indicator"></span>
                </label>
              </td>
            </tr>
            <!-- rows 3-4: plain tr + switch unchecked -->
            <!-- rows 5-6: class="cl-active" + switch checked (repeat of 2-4 data) -->
            <!-- row 7: plain tr + switch unchecked -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <script src="js/snippet.js?v=c35330b0"></script>
</body>
```

Demo data (7 rows = 4 unique, rows 5–7 repeat rows 2–4):

| # | Order | Name | Occupation (+ shared blurb) | Contact | Education | Switch |
|---|-------|------|------------------------------|---------|-----------|--------|
| 1 | 1392 | James Yates | Web Designer | +63 983 0962 971 | NY University | ON (cl-active) |
| 2 | 4616 | Matthew Wasil | Graphic Designer | +02 020 3994 929 | London College | ON (cl-active) |
| 3 | 9841 | Sampson Murphy | Mobile Dev | +01 352 1125 0192 | Senior High | OFF |
| 4 | 9548 | Gaspar Semenov | Illustrator | +92 020 3994 929 | College | OFF |
| 5 | 4616 | Matthew Wasil | Graphic Designer | +02 020 3994 929 | London College | ON (cl-active) |
| 6 | 9841 | Sampson Murphy | Mobile Dev | +01 352 1125 0192 | Senior High | ON (cl-active) |
| 7 | 9548 | Gaspar Semenov | Illustrator | +92 020 3994 929 | College | OFF |

Every Occupation cell carries the same block-level blurb "Far far away,
behind the word mountains". ALL row checkboxes are unchecked; the header
checkbox and header switch are both unchecked.

## Design tokens (canonical — from css/style.css)

| Token | Value | Where |
|-------|-------|-------|
| Font | `"Roboto", -apple-system, …, sans-serif` | body + h1–h6 (reboot); Google Fonts 300/400/500 |
| Body | 16px / **400** / 1.5, color `#212529`, bg `#fff` | `body` rule |
| Heading h2 | 20px / 500 / color `#212529` (inherited), `.cl-mb-5` = `margin-bottom: 3rem` | reboot h2 + `.content` overrides |
| Page bg | `#fff` | body override |
| Header labels | `#000` BLACK, default bold, normal case, borderless (`border-top: none; border-bottom: none !important`) | `.custom-table thead tr, .custom-table thead th` — **SEVEN header cells** |
| Body cells | `#777`, weight **300**, `padding: 20px 0.75rem`, `vertical-align: top`, `transition: .3s all ease`, **`border: none`** | `.custom-table tbody th, .custom-table tbody td` |
| Zebra | odd tbody rows `rgba(0, 0, 0, 0.05)` | `.cl-table-striped tbody tr:nth-of-type(odd)` |
| Name link | `#007bff`, hover `#0056b3`, NO underline (`a, a:hover { text-decoration: none !important }` suppresses the `.name` line-through) | reboot `a` + global no-underline rule |
| Name cell | `cl-pl-0` (no left padding); link in `cl-d-flex cl-align-items-center` wrapper | tbody td |
| Strike (SIGNATURE) | `tr.cl-active { opacity: .4 }` + `.name:before` 2px bar `#dc3545` at name's 50% vertical center (opacity 0/hidden → 1/visible on cl-active) | `.custom-table tbody tr.cl-active` rules |
| Row hover | **NONE** (no `tr:hover` rule) | — |
| Sub-blurb | `#b3b3b3`, weight 300, block-level | `.custom-table ... small` + `.cl-d-block` |
| Checkbox | 20×20px, radius 4px, border 2px `#ccc`, transparent; hover/focus border `#007bff`; checked border+bg `#007bff` + white icomoon check `\e5ca` (translate(-50%,-52%)); disabled bg `#e6e6e6` op .6; disabled+checked bg `#007bff` op .2 | `.control__indicator` — native input hidden (`absolute; z-index: -1; opacity: 0`) |
| Checkbox wrapper | `.control { display: block; position: relative; margin-bottom: 25px; font-size: 18px; cursor: pointer }` | `.control` |
| Switch track | 32×20px, radius 16px, bg `#fff`, border 2px `#ddd`, `margin: 0 10px; top: 4px`, transition .3s | `.ios-switch-control-indicator` |
| Switch knob | 16×16px circle, radius 16px, bg `#fff`, shadow `0 0 2px #aaa, 0 2px 5px #999`, parked LEFT (top 0, left 0) | `::after` |
| Switch checked | track `border: 10px solid #4cd964` (green floods); knob `top: -8px; left: 4px` (RIGHT); `:active` knob `left: 0`; input `display: none`; disabled track op .4 | `.cl-custom-control.ios-switch` rules; `--color: #4cd964` |
| Header switch quirk | label inline `style="position: relative; top: 10px"` (nudge down ~10px) | thead 7th cell |
| Container | 540px @576 · 720px @768 · 960px @992 · 1140px @1200, 15px gutters, auto margins | `.cl-container` |
| Table | width 100%, min-width 900px, border-collapse collapse, in overflow-x auto wrapper | `.custom-table` / `.cl-table-responsive` |
| Content | `padding: 7rem 0` | `.content` |
| Print | `@media print`: @page a3, thead table-header-group, tr page-break-inside avoid, h2 orphans/widows 3 + page-break-after avoid, body/.cl-container min-width 992px, .cl-table border-collapse collapse, td/th bg #fff | print-only — do NOT apply on screen |

## Screenshot analysis (css-table-20.jpg → PNG, 1200×972)

AVIF data despite the .jpg extension; converted and analyzed 2026-09-30.
The screenshot is a browser-chrome-framed shot of preview.colorlib.com:

- **White page**, "Table #10" heading top-left (dark, ~20px), generous
  whitespace (7rem) above/below the table.
- **Table:** 7 columns — empty checkbox square · Order · Name ·
  Occupation (bold-ish title + light gray blurb) · Contact · Education ·
  toggle switch. Header row: BLACK bold labels + empty checkbox + OFF
  toggle at far right.
- **Zebra:** odd rows carry a faint gray tint; even rows white.
- **Struck rows (1, 2, 5, 6):** whole row dimmed (~40%), names shown
  with a muted rose/gray strike bar (the red `#dc3545` bar at row
  opacity .4), switches ON (green pill, knob right), checkboxes still
  empty.
- **Normal rows (3, 4, 7):** full-opacity text, BLUE name links without
  underline, gray/white OFF switches (knob left), faint zebra on odd
  rows (3, 7).
- No footer, no images, no navbar — matches the live DOM exactly.

## Section-by-section fidelity notes

1. **Page shell** — white `#fff`, Roboto (body 400), `.content` 7rem 0,
   centered `.cl-container` (1140px desktop / 15px gutters /
   540/720/960px breakpoints). Tailwind: max-w with responsive widths or
   an equivalent container.
2. **Heading** — h2 "Table #10" (paraphrase OK), 20px / 500 / `#212529`,
   `mb-12` (3rem). Dark ink on white — NOT white text.
3. **Responsive wrapper** — overflow-x-auto around the table only;
   min-width 900px on the table (`min-w-[900px]`); border-collapse
   collapse.
4. **Data table** — thead: 7 `scope="col"` cells, BLACK `#000` bold
   normal-case labels, borderless; 7th cell holds the select-all switch
   (nudge down ~10px). tbody: 7 rows × 7 cells (checkbox cell is a
   `<td>`, NOT `<th scope="row">`); odd rows `rgba(0,0,0,0.05)`; ALL
   cell borders removed; contiguous rows. Name cell: `pl-0`, flex
   centered `#007bff` link, no underline. Occupation cell: title +
   block `#b3b3b3`/300 blurb. 7th cell: toggle switch. Demo data per
   the table above (paraphrase OK; keep the switch/strike arrangement).
5. **Checkbox component** — hidden native input + 20×20/4px/2px `#ccc`
   indicator; hover/focus `#007bff`; checked fill `#007bff` + WHITE
   check icon (lucide `Check` — NEVER the icomoon font). Start all
   unchecked.
6. **Switch component (SIGNATURE)** — hidden native checkbox + 32×20
   white pill (2px `#ddd`, radius 16px) + 16px white knob (soft double
   shadow) parked left; checked → 10px solid `#4cd964` ring + knob
   right; ~.3s transition; `mx-2.5` (10px) horizontal margin.
7. **Strike state (SIGNATURE behavior)** — React state per row:
   switchOn ⇔ struck. Struck row: whole row `opacity-40`; name shows a
   2px `#dc3545` bar at its vertical center (a pseudo-element or an
   absolutely positioned span inside the link). Header switch toggles
   ALL switches + ALL strike states; row switch toggles only its row;
   row checkboxes and the header checkbox are a SEPARATE system (boxes
   only — never touch switches/strike). NO row hover effects.
8. **Footer** — source has none; add the minimal Component Dock
   attribution line (monorepo rule). Zero ColorLib references anywhere.

## Naming rationale

**Cellmate** — "cell" = table cells (sibling idiom: Cellswitch,
Cellgrid, Cellcrew); "mate" = a row is switched on or off the active
roster (the signature toggle-strike interaction). Single lowercase word;
verified zero collisions in `ls apps/`, `openspec/specs/`,
`docs/templates/`, and TEMPLATES.md content on 2026-09-30.

## Sibling warning (do NOT copy tokens across)

This is the 10th css-table variant. The near-misses:

- **Cellswitch** (css-table-17) — the closest sibling: same green iOS
  switches and `#ccc` checkboxes, BUT its switches live IN THE NAME
  COLUMN (Cellmate: dedicated 7th column), its `.active` class is NEVER
  styled (Cellmate: dim + red strike driven BY the switch), and it has a
  Details column (Cellmate: none). Note both pages carry a stale
  `<title>Table #7</title>`.
- **Cellcrew** (css-table-19) — Cellcrew has avatars, KEPT `#dee2e6`
  borders, NO zebra, `#212529` headers, checkbox-driven tint+hairline
  highlight WITH row hover; Cellmate: no images, borders removed, zebra
  ON, `#000` headers, switch-driven dim+red-strike, NO hover.
- **Cellgrid** (css-table-18) — dark variant with dramatic `#2e2e36`
  shift; nothing shared but the checkbox machinery.
