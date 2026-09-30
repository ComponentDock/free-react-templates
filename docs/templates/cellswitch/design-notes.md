# Cellswitch (ColorLib Css Table 17) — Design Notes

> Replication research for **Cellswitch** (NEW name) — recreation of ColorLib
> **Css Table 17** (slug `css-table-17`). Research done 2026-09-30 by the
> prep stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Css Table 17" (TEMPLATES.md line 2876; section
  "## Table (25)"). Slug `css-table-17` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/css-table-17/
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/css-table-17/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/css-table-17/**
  (HTTP 200, 8,633 bytes, `<title>Table #7</title>`). The `bootstrap/`
  path segment matches all sibling css-table previews — always use it.
- **Preview CSS:** `css/style.css?v=f68519b2` (12,148 bytes) — a single
  self-contained sheet: "Every style this snippet uses, and nothing
  else. No framework, no build step." It reverts Bootstrap-reboot base
  styles (`all: revert` on html/body/div/…/table elements), then styles
  from browser defaults: reboot block, `@font-face` Roboto 300/400
  (self-hosted woff2) + icomoon checkmark glyph font,
  `.cl-container` (Bootstrap-like responsive container 540/720/960/
  1140px), `.cl-table` + `.cl-table-responsive` + `.cl-table-striped`
  (odd-row tint `rgba(0,0,0,0.05)`), `.content` (7rem padding),
  `.custom-table` overrides, the **iOS-switch component**
  (`.cl-custom-control.ios-switch`), the **custom checkbox component**
  (`.control` / `.control__indicator`), and an `@media print` block
  (A3 page, print-orientation min-widths — screen layout stays
  responsive).
- **Source scripts:** `js/snippet.js?v=6c1448f7` (1,017 bytes; no jQuery,
  no framework) — `CHECK_ALL` (header `input.js-check-all` toggles every
  `.control--checkbox input[type=checkbox]` + toggles class `active` on
  each checkbox's closest `<tr>`) and `CHECK_ROWS` (each row checkbox
  toggles `active` on its own `<tr>`). **The stylesheet has NO `.active`
  rule and NO `tbody tr:hover` rule** — the class is toggled but never
  styled; checked rows differ ONLY by checkbox/switch state. REIMPLEMENT
  the checkbox state in React state; do NOT invent row-highlight styling.
  The iOS switches are pure CSS (`input` hidden via `display: none`,
  styled through `:checked ~ .ios-switch-control-indicator`) — the
  snippet.js never touches them.
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
    <h2 class="cl-mb-5">Table #7</h2>
    <div class="cl-table-responsive">          <!-- overflow-x: auto -->
      <table class="cl-table cl-table-striped custom-table">   <!-- min-width: 900px -->
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
            <th scope="col"></th>               <!-- EMPTY header (Details column) -->
          </tr>
        </thead>
        <tbody>
          <tr scope="row">                     <!-- NOTE: stray scope on <tr> is
            <td>                                invalid HTML; browsers ignore it —
              <label class="control control--checkbox">   body cells are plain td's -->
                <input type="checkbox"/>        <!-- row checkbox: UNCHECKED -->
                <div class="control__indicator"></div>
              </label>
            </td>
            <td>1392</td>                       <!-- Order -->
            <td class="cl-pl-0">
              <div class="cl-d-flex cl-align-items-center">
                <label class="cl-custom-control ios-switch">
                  <input type="checkbox" class="ios-switch-control-input" checked="">  <!-- ON -->
                  <span class="ios-switch-control-indicator"></span>
                </label>
                <a href="#">James Yates</a>     <!-- blue link -->
              </div>
            </td>
            <td>Web Designer
              <small class="cl-d-block">Far far away, behind the word mountains</small>
            </td>
            <td>+63 983 0962 971</td>
            <td>NY University</td>
            <td><a href="#" class="more">Details</a></td>  <!-- plain blue link -->
          </tr>
          <tr>  <!-- 4616 · Matthew Wasil · Graphic Designer · +02 020 3994 929 · London College · switch ON -->
            …same structure…
          </tr>
          <tr>  <!-- 9841 · Sampson Murphy · Mobile Dev · +01 352 1125 0192 · Senior High · switch OFF -->
          <tr>  <!-- 9548 · Gaspar Semenov · Illustrator · +92 020 3994 929 · College · switch OFF -->
          <tr>  <!-- 4616 · Matthew Wasil — DUPLICATE of row 2 · switch ON -->
          <tr>  <!-- 9841 · Sampson Murphy — DUPLICATE of row 3 · switch ON -->
          <tr>  <!-- 9548 · Gaspar Semenov — DUPLICATE of row 4 · switch OFF -->
        </tbody>
      </table>
    </div>
  </div>
</div>
<script src="js/snippet.js?v=6c1448f7"></script>   <!-- check-all + row active toggle -->
```

**Switch states in the live DOM:** rows 1 (James Yates), 2 (Matthew
Wasil), 5 (Matthew Wasil dup), 6 (Sampson Murphy dup) = `checked` (green
ON); rows 3 (Sampson Murphy), 4 (Gaspar Semenov), 7 (Gaspar Semenov dup)
= unchecked (white OFF). **All 7 row checkboxes + the header select-all
are UNCHECKED.**

## Design tokens (from `css/style.css`, verified vs screenshot)

| Token | Value | Source selector / note |
|-------|-------|------------------------|
| Font | `"Roboto", -apple-system, …, sans-serif`; body 16px/**300**/1.5, `#212529` | `body` (reboot + weight-300 override) |
| Page background | `#fff` WHITE | `body` — not dark (unlike css-table-16) |
| Heading | 20px, weight 500, `#212529` ink, `margin-bottom: 3rem` | `h2 { font-size: 20px }` + reboot 500 + `.cl-mb-5` |
| Header labels | `#000`, default bold (≈500), **normal case**, `padding-bottom: 30px`, borderless | `.custom-table thead tr, .custom-table thead th` — NO text-transform/letter-spacing |
| Body cells | `#777`, weight **300**, `padding: 20px` v + `0.75rem` h, `vertical-align: top`, `border: none`, `transition: .3s all ease` | `.custom-table tbody th, .custom-table tbody td` |
| Sub-blurb | `#b3b3b3`, weight 300, 80% size, `display: block` | `.custom-table tbody … small` + `.cl-d-block` |
| Name/Details links | `#007bff` (reboot link blue), hover `#0056b3`, **no underline** (`a, a:hover { text-decoration: none !important }`), `.3s all ease` transition | `.more` has NO dedicated rule — Details is a plain blue link (unlike css-table-16) |
| Checkbox unchecked | 20×20px, `border-radius: 4px`, `border: 2px solid #ccc`, transparent bg; input visually hidden (`position: absolute; z-index: -1; opacity: 0`) | `.control input` + `.control__indicator` |
| Checkbox hover/focus | border → `#007bff` | `.control:hover input ~ .control__indicator`, `:focus` |
| Checkbox checked | `border: 2px solid #007bff; background: #007bff` + WHITE checkmark (icomoon `\e5ca` → replace with lucide Check/inline SVG), centered `translate(-50%, -52%)` | `.control input:checked ~ .control__indicator(:after)` |
| Checkbox disabled | bg `#e6e6e6` opacity .6; disabled+checked `#007bff` opacity .2 | not exercised in live DOM |
| Switch track (OFF) | 32×20px, `border-radius: 16px`, `background: #fff`, `border: 2px solid #ddd`, `margin: 0 10px`, `top: 4px`, `transition: .3s` | `.ios-switch-control-indicator` |
| Switch knob | 16×16px white circle, `border-radius: 16px`, `box-shadow: 0 0 2px #aaa, 0 2px 5px #999` | `::after` pseudo-element |
| Switch ON (signature) | track `border: 10px solid #4cd964` (thick green border IS the green track), knob right (`top: -8px; left: 4px`); `--color: #4cd964` on `.ios-switch`; input `display: none` — pure CSS `:checked` | `.cl-custom-control.ios-switch …` |
| Switch active-press | knob `width: 20px` | `:active ~ … ::after` |
| Switch disabled | indicator `opacity: .4` | not exercised |
| Stripe tint | `rgba(0,0,0,0.05)` on odd `tbody` rows | `.cl-table-striped tbody tr:nth-of-type(odd)` |
| Container | 540/720/960/1140px @576/768/992/1200, 15px gutters | `.cl-container` media queries |
| Table | `width: 100%; min-width: 900px`, `border-collapse: collapse`, NO borders in `.custom-table` | `.custom-table` + reboot collapse override |
| Responsive wrapper | `display: block; width: 100%; overflow-x: auto` | `.cl-table-responsive` |
| Content | `padding: 7rem 0` | `.content` |
| Row hover | **NONE** — no `tbody tr:hover`, no `.active` rule in the sheet | the `.3s` transitions exist but nothing changes on row hover; only checkbox `:hover` (blue border) + switch `:active` interact |
| Print block | `@media print`: `@page { size: a3 }`, thead `table-header-group`, `tr` page-break-inside avoid, body/container `min-width: 992px !important`, td/th `background-color: #fff !important` | PRINT-ONLY — do NOT apply the 992px min-width on screen |

## Screenshot analysis (1200×972, AVIF despite .jpg extension)

- WHITE page; dark "Table #7" heading top-left at ~20px; large whitespace
  (7rem) above/below the table.
- Table spans most of the 1140px container; header row: small checkbox
  square, then bold BLACK normal-case labels "Order · Name · Occupation ·
  Contact · Education" (no label above Details).
- Row 1 (1392, James Yates): GREEN iOS switch ON + blue name link;
  "Web Designer" with faint gray blurb; +CC phone; "NY University";
  blue "Details" at far right. Row background light gray (odd-row stripe).
- Rows 2/5 (4616, Matthew Wasil): GREEN switch ON; rows 3/6 (9841,
  Sampson Murphy): row 3 OFF (white switch), row 6 ON (green); rows 4/7
  (9548, Gaspar Semenov): both OFF (white switches).
- Even rows (2, 4, 6) sit on white; odd rows (1, 3, 5, 7) show the
  `rgba(0,0,0,0.05)` gray band — matches the CSS stripe rule.
- All row checkboxes + header select-all: UNCHECKED (white squares, gray
  borders). No row hover treatment visible (none exists in the CSS).
- Aesthetic: clean Bootstrap-style admin/list table — white, faint gray
  text, blue links, one vivid green accent (the switches). The green
  ON switches are the only saturated color on the page.

## Section-by-section fidelity notes

1. **Page shell** — white `#fff`, Roboto weight 300, `.content` 7rem
   vertical padding, centered `.cl-container` (1140px desktop / 15px
   gutters; responsive 540/720/960). The print-only `min-width: 992px`
   body/container rules are NOT part of the screen layout.
2. **Heading** — h2 "Table #7" (paraphrase OK): 20px / weight 500 /
   dark ink `#212529` / 3rem margin-bottom, above the table on white.
3. **Responsive wrapper** — `overflow-x: auto` around the table only.
4. **Table** — 7 columns; borderless black normal-case header
   (`padding-bottom: 30px`); `#777`/300 cells with 20px v / 0.75rem h
   padding; odd-row `rgba(0,0,0,0.05)` stripe; `min-width: 900px`;
   `border-collapse: collapse`; no cell borders anywhere.
5. **Checkbox column** — visually hidden input + 20×20px / radius 4px /
   2px `#ccc` indicator; hover/focus blue `#007bff`; checked = blue fill
   + white check (lucide/inline SVG, never icomoon); header cell holds
   the select-all control; all row boxes start unchecked.
6. **Name cell** — `cl-pl-0` + flex row: iOS switch LEFT (margin 0 10px)
   then blue name link, vertically centered. OFF = white pill + 2px
   `#ddd` + knob left; ON = green `#4cd964` track + knob right. Initial:
   rows 1/2/5/6 ON, 3/4/7 OFF. Toggle via React state (pure CSS
   `:checked` styling in the source).
7. **Occupation cell** — title + `#b3b3b3`/300/80% block blurb
   ("Far far away, behind the word mountains" or equal-length paraphrase,
   same in every row).
8. **Contact / Education cells** — plain `#777`/300 text (+CC phone /
   school name).
9. **Details cell** — plain blue `#007bff` no-underline link; the source
   `.more` class has NO styling rule (NOT uppercase/faint/yellow like
   css-table-16).
10. **Interactive behavior (React state)** — select-all checks/unchecks
    all row checkboxes; row checkbox toggles independently (header box
    does NOT auto-sync from row state, per the source JS); switches
    toggle per row, independent of everything else. The source JS also
    toggles an `active` class on rows that is NEVER styled — do NOT add
    row-highlight styling.
11. **Footer** — source has none; add the monorepo-mandated minimal
    Component Dock attribution line (https://www.componentdock.com/).
    Zero ColorLib references in the app (comments included).

## Sibling warning (do NOT copy tokens between variants)

Gridline (`css-table-11`) shares the checkbox + select-all machinery and
the white page, but has NO iOS switches, `#212529` default-weight header
labels, and `#dee2e6` row separators. Rowcard (`css-table-14`) /
Gridpane (`css-table-15`) share the checkbox machinery + the unstyled
`.active` trap; Gridpane dims checked rows via opacity. Nightgrid
(`css-table-16`) is the dark variant with uppercase header labels,
faint-white links, and yellow hover. Cellswitch's signatures: the **iOS
green `#4cd964` toggle switches** in the Name column, BLACK normal-case
header labels on WHITE, plain blue Details links, and NO row hover /
NO active styling.
