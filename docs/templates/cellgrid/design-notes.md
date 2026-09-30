# Cellgrid (ColorLib Css Table 18) — Design Notes

> Replication research for **Cellgrid** (NEW name) — recreation of ColorLib
> **Css Table 18** (slug `css-table-18`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 18" (TEMPLATES.md line 2877; section
  "## Table (25)"). Slug `css-table-18` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-18/
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-18/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-18/**
  (HTTP 200, 6,005 bytes, `<title>Table #8</title>`). The `bootstrap/`
  path segment matches all sibling css-table previews — always use it.
- **Preview CSS:** `css/style.css?v=264e2b5b` (11,308 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing
  else. No framework, no build step." It reverts Bootstrap-reboot base
  styles (`all: revert` on html/body/div/…/table elements), then styles
  from browser defaults: reboot block, `@font-face` Roboto 300/400
  (self-hosted woff2) + icomoon checkmark glyph font,
  `.cl-container` (Bootstrap-like responsive container 540/720/960/
  1140px), `.cl-table` + `.cl-table-responsive` (**NO
  `.cl-table-striped`** — this table has no zebra tint), `.content`
  (7rem padding), `.custom-table` overrides (charcoal page, dark rows,
  active/hover highlight, gray links), the custom checkbox component
  (`.control` / `.control__indicator`), and an `@media print` block
  (A3 page, print-orientation min-widths — screen layout stays
  responsive).
- **Source scripts:** `js/snippet.js?v=7bf65063` (1,000 bytes; no jQuery,
  no framework) — `CHECK_ALL` (header `input.js-check-all` toggles every
  `th input[type=checkbox]` — the header box + ALL row checkboxes (rows
  use `<th scope="row">` cells) + toggles class `active` on each
  checkbox's closest `<tr>`) and `CHECK_ROWS` (each
  `th[scope="row"] input[type=checkbox]` toggles `active` on its own
  `<tr>`). **CRITICAL — UNLIKE css-table-17:** the `.active` class and
  row hover ARE STYLED in this stylesheet (`color: #fff;
  background: #2e2e36` on cells, white links) — checked rows VISIBLY
  highlight. REIMPLEMENT the highlight in React state.
- **Icons:** icomoon glyph font for the checkbox checkmark
  (`@font-face icomoon` → `../fonts/icomoon-subset.woff2`, glyph
  `\e5ca`, rendered white inside the checked indicator). NEVER copy the
  font — use a lucide `Check` icon or an inline SVG checkmark.
- **Fonts:** Roboto 300/400 (self-hosted woff2 in the preview) — use a
  Google Fonts `<link>` (300, 400; 500 for the h2) in `index.html`.
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.

## DOM skeleton (live preview, trimmed)

```html
<div class="content">
  <div class="cl-container">
    <h2 class="cl-mb-5">Table #8</h2>
    <div class="cl-table-responsive custom-table-responsive">
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
            <th scope="col">Name</th>
            <th scope="col">Occupation</th>
            <th scope="col">Contact</th>
            <th scope="col">Education</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row">                     <!-- NOTE: stray scope on <tr> is
            <th scope="row">                   invalid HTML — browsers ignore
              <label class="control control--checkbox">   it; body cells are
                <input type="checkbox"/>       th scope="row" (col 1) + td's -->
                <div class="control__indicator"></div>
              </label>
            </th>
            <td>1392</td>                       <!-- Order -->
            <td><a href="#">James Yates</a></td>  <!-- GRAY #b3b3b3 link, NO switch -->
            <td>Web Designer
              <small class="cl-d-block">Far far away, behind the word mountains</small>
            </td>
            <td>+63 983 0962 971</td>
            <td>NY University</td>
          </tr>
          <tr class="spacer"><td colspan="100"></td></tr>   <!-- 3px transparent gap -->
          <tr>  <!-- 4616 · Matthew Wasil · Graphic Designer · +02 020 3994 929 · London College -->
            …same structure…
          </tr>
          <tr class="spacer"><td colspan="100"></td></tr>
          <tr>  <!-- 9841 · Sampson Murphy · Mobile Dev · +01 352 1125 0192 · Senior High -->
          <tr class="spacer"><td colspan="100"></td></tr>
          <tr>  <!-- 9548 · Gaspar Semenov · Illustrator · +92 020 3994 929 · College -->
          <tr class="spacer"><td colspan="100"></td></tr>
          <tr>  <!-- 4616 · Matthew Wasil — DUPLICATE of row 2 -->
          <tr class="spacer"><td colspan="100"></td></tr>
          <tr>  <!-- 9841 · Sampson Murphy — DUPLICATE of row 3 -->
          <tr class="spacer"><td colspan="100"></td></tr>
          <tr>  <!-- 9548 · Gaspar Semenov — DUPLICATE of row 4 -->
          <tr class="spacer"><td colspan="100"></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<script src="js/snippet.js?v=7bf65063"></script>   <!-- check-all + row active toggle -->
```

**Initial state in the live DOM:** all 7 row checkboxes + the header
select-all are UNCHECKED; NO row carries the `active` class. The
ColorLib screenshot shows rows 2 & 5 (both 4616 Matthew Wasil)
checked + highlighted — that is the POST-CLICK interaction state (the
`.active` styling working), not the initial load. Start all-unchecked.

## Design tokens (from `css/style.css`, verified vs screenshot)

| Token | Value | Source selector / note |
|-------|-------|------------------------|
| Font | `"Roboto", -apple-system, …, sans-serif`; body 16px/**300**/1.5, `#212529` | `body` (reboot + weight-300 override) |
| Page background | `#19191d` CHARCOAL (darker/bluer than Nightgrid's `#3c373e`) | `body` override at the bottom of the sheet |
| Heading | 20px, weight 500, **WHITE `#fff`**, `margin-bottom: 3rem` | `h2 { font-size: 20px; color: #fff }` + reboot 500 + `.cl-mb-5` |
| Header labels | **`#fff` WHITE**, default bold (≈500), **normal case**, borderless | `.custom-table thead tr, .custom-table thead th` — NO text-transform/letter-spacing |
| Body cells | `#777`, weight **300**, `padding: 20px` v + `0.75rem` h, `vertical-align: top`, `border: none`, `transition: .3s all ease` | `.custom-table tbody th, .custom-table tbody td` |
| Row background (normal) | `#25252b` | `.custom-table tbody tr th, .custom-table tbody tr td { background: #25252b; border: none }` |
| Row background (active/hover — SIGNATURE) | `#2e2e36`, cell text `#fff` | `.custom-table tbody tr.active th/td, .custom-table tbody tr:hover th/td` |
| Row link color (normal) | `#b3b3b3` GRAY (NOT blue) | `.custom-table tbody tr th a, .custom-table tbody tr td a` |
| Row link color (active/hover) | `#fff` | `tr.active a / tr:hover a` |
| Row hover shadow | `box-shadow: 0 2px 10px -5px rgba(0,0,0,0.1)` | `tr:not(.spacer):hover` — faint; per-cell backgrounds may cover it in collapsed tables; bg/text shift is the required effect |
| Row radius | `tr { border-radius: 7px; overflow: hidden }` BUT first/last-child rules zero left/right radii | NET visual = SQUARE rows (confirmed in screenshot); render square directly or reproduce faithfully |
| Spacer rows | 3px height, transparent bg, `padding: 0 !important`, radius 0 | `.custom-table tbody tr.spacer td` — the SIGNATURE row gaps |
| Sub-blurb | `#b3b3b3`, weight 300, 80% size, `display: block` | `.custom-table tbody … small` + `.cl-d-block` |
| Links (global) | `.3s all ease` transition; `a, a:hover { text-decoration: none !important }` — NO underline anywhere | reboot's `a:hover` blue/underline is overridden; no links exist outside rows |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #3f3f47` (DARK gray — NOT `#ccc`), transparent bg; input visually hidden (`position: absolute; z-index: -1; opacity: 0`) | `.control input` + `.control__indicator` |
| Checkbox hover/focus | border → `#007bff` | `.control:hover input ~ .control__indicator`, `:focus` |
| Checkbox checked | `border: 2px solid #007bff; background: #007bff` + WHITE checkmark (icomoon `\e5ca` → replace with lucide Check/inline SVG), centered `translate(-50%, -52%)` | `.control input:checked ~ .control__indicator(:after)` |
| Checkbox disabled | bg `#e6e6e6` opacity .6; disabled+checked `#007bff` opacity .2 | not exercised in live DOM |
| Container | 540/720/960/1140px @576/768/992/1200, 15px gutters | `.cl-container` media queries |
| Table | `width: 100%; min-width: 900px`, `border-collapse: collapse`, NO borders in `.custom-table` | `.custom-table` + reboot collapse override |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` |
| Content | `padding: 7rem 0` | `.content` |
| Print block | `@media print`: `@page { size: a3 }`, thead `table-header-group`, `tr` page-break-inside avoid, body/container `min-width: 992px !important`, td/th `background-color: #fff !important` | PRINT-ONLY — do NOT apply the 992px min-width on screen |

## Screenshot analysis (1200×972, AVIF despite .jpg extension)

- CHARCOAL `#19191d` page; WHITE "Table #8" heading top-left at ~20px;
  large whitespace (7rem) above/below the table.
- Table spans most of the 1140px container; header row: small checkbox
  square, then bold WHITE normal-case labels "Order · Name · Occupation ·
  Contact · Education".
- 7 dark `#25252b` rows separated by thin ~3px gaps (the charcoal page
  shows through the spacer rows) — rows read as stacked dark bands.
- Rows 2 & 5 (4616, Matthew Wasil): CHECKED — checkbox filled blue
  `#007bff` with white check, row highlighted (text white, bg
  `#2e2e36`), name link white. Rows 1/3/4/6/7: unchecked — checkbox
  dark-bordered square, `#777` text, gray `#b3b3b3` name links,
  `#b3b3b3` sub-blurbs under occupations.
- No row hover visible in the static screenshot (hover = same treatment
  as active per the CSS).
- Aesthetic: moody dark admin/list table — charcoal-on-charcoal rows
  with gray text, one blue accent (checked checkboxes), white highlights
  on selected/hovered rows. The second dark variant in the family
  (after Nightgrid's plum), but bluer/darker with spaced rows and a
  REAL active/hover highlight.

## Section-by-section fidelity notes

1. **Page shell** — charcoal `#19191d`, Roboto weight 300, `.content`
   7rem vertical padding, centered `.cl-container` (1140px desktop / 15px
   gutters; responsive 540/720/960). The print-only `min-width: 992px`
   body/container rules are NOT part of the screen layout.
2. **Heading** — h2 "Table #8" (paraphrase OK): 20px / weight 500 /
   WHITE `#fff` / 3rem margin-bottom, above the table on charcoal.
3. **Responsive wrapper** — `overflow-x: auto` around the table only.
4. **Table** — 6 columns; borderless WHITE normal-case header; `#777`/300
   cells with 20px v / 0.75rem h padding; `min-width: 900px`;
   `border-collapse: collapse`; no cell borders; NO stripe class.
5. **Row cards + gaps** — every data row: cells bg `#25252b`, borderless,
   square-cornered; between every pair of rows a 3px transparent spacer
   gap (6 spacers) showing the charcoal page.
6. **Checkbox column** — first body cell is `<th scope="row">`
   containing the checkbox: visually hidden input + 20×20px / radius 4px
   / 2px `#3f3f47` indicator (dark border, NOT `#ccc`); hover/focus blue
   `#007bff`; checked = blue fill + white check (lucide/inline SVG,
   never icomoon); header cell holds the select-all control; all boxes
   start unchecked.
7. **Name cell** — plain `<a href="#">` link, GRAY `#b3b3b3` (not blue),
   no underline, no switches (unlike Cellswitch's iOS toggles).
8. **Occupation cell** — title + `#b3b3b3`/300/80% block blurb
   ("Far far away, behind the word mountains" or equal-length paraphrase,
   same in every row).
9. **Contact / Education cells** — plain `#777`/300 text (+CC phone /
   school name). NO 7th Details column (unlike Cellswitch).
10. **Interactive behavior (React state)** — select-all checks/unchecks
    all row checkboxes AND applies/removes the active highlight on every
    row; row checkbox toggles ONLY its own row's checked state + highlight
    (header box does NOT auto-sync from row state, per the source JS);
    hover applies the active look temporarily (hover must NOT clear a
    checked row's highlight). THE ACTIVE HIGHLIGHT IS REAL STYLING HERE
    (bg `#2e2e36`, white text/links) — unlike css-table-17 where the
    class was never styled.
11. **Footer** — source has none; add the monorepo-mandated minimal
    Component Dock attribution line (https://www.componentdock.com/).
    Zero ColorLib references in the app (comments included).

## Sibling warning (do NOT copy tokens between variants)

Gridline (`css-table-11`) shares the checkbox + select-all machinery but
is a WHITE page with `#dee2e6` separators and NO active/hover styling.
Rowcard (`css-table-14`) shares the row-card + 10px-gap idiom but on a
LIGHT gray page with white cards and NO `.active` styling. Gridpane
(`css-table-15`) shares the gap idiom + panel but is white/uppercase.
Nightgrid (`css-table-16`) is the first dark variant — plum `#3c373e`,
UPPERCASE 11px headers, faint-white links, yellow `#fdd114` hover,
contiguous rows. Cellswitch (`css-table-17`) is white with BLACK headers,
blue links, iOS switches, and NO active/hover styling. Cellgrid's
signatures: the **charcoal `#19191d` page + `#25252b` rows with 3px
gaps**, the **REAL active/highlight row treatment** (`#2e2e36` + white
text), gray `#b3b3b3` name links, dark `#3f3f47` checkbox borders, 6
columns with NO Details column, and `<th scope="row">` checkbox cells.
