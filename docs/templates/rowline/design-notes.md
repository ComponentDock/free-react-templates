# Rowline (ColorLib Table 06) — Design Notes

## Source mapping

| Item | Value |
| --- | --- |
| ColorLib name | Table 06 (kept on ColorLib's side only) |
| Recreation name | **Rowline** (NEW — the row-based line items of the cart table) |
| Slug | `table-06` |
| Source page | https://colorlib.com/wp/template/table-06/ |
| Live preview | https://preview.colorlib.com/theme/bootstrap/table-06/ (HTTP 200, 10,103 bytes, `<title>Table 06</title>`; slug-only URL 404s — `bootstrap/` path required, same as table-01…05) |
| Stylesheet | `https://preview.colorlib.com/theme/bootstrap/table-06/css/style.css?v=86fd68ee` — HTTP 200, 13,348 bytes, self-contained ("Every style this snippet uses, and nothing else. No framework, no build step."). ⚠️ The `table-06/` path segment before `css/` is required; bare `bootstrap/css/style.css` 404s. Fetchable at prep time (2026-09-30) |
| Preview JS | NONE — zero `<script>` tags on the live page |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/table-06.jpg — real JPEG, 1200×972, analyzed 2026-09-30 (unlike table-05, which is AVIF despite the .jpg extension) |
| TEMPLATES.md | "## Table (25)" line 2868; item at line 2889; slug appears exactly once |
| Name collision check | "rowline" = 0 hits in `ls apps/`, `openspec/specs/`, `docs/templates/`, and TEMPLATES.md bold names (case/space-insensitive), 2026-09-30. Distinct from existing `gridline` (css-table-12) |
| Stack | Vite + React 19 + Tailwind CSS 4 + TypeScript (monorepo) |

## Live DOM skeleton (verbatim structure)

```html
<body>
  <section class="ftco-section">                 <!-- padding: 7em 0 -->
    <div class="cl-container">                   <!-- max-w 540/720/960/1140 @576/768/992/1200, 15px gutters -->
      <div class="cl-row cl-justify-content-center">
        <div class="cl-col-md-6 cl-text-center cl-mb-4">   <!-- 50% @768+, centered, mb 1.5rem -->
          <h2 class="heading-section">Table #06</h2>        <!-- 28px, weight 400, #000 -->
        </div>
      </div>
      <div class="cl-row">
        <div class="cl-col-md-12">
          <h3 class="cl-h5 cl-mb-4 cl-text-center">Table Accordion</h3>  <!-- 1.25rem, weight 400, mb 1.5rem -->
          <div class="table-wrap">               <!-- overflow-x: scroll -->
            <table class="cl-table">
              <thead>
                <tr class="thead-primary">        <!-- bg #99b19c sage; th: white, 13px, 500, padding 30px, border none -->
                  <th></th>                       <!-- checkbox column, empty -->
                  <th></th>                       <!-- thumbnail column, empty -->
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>total</th>                  <!-- lowercase in source -->
                  <th></th>                       <!-- remove column, empty -->
                </tr>
              </thead>
              <tbody>
                <tr class="cl-alert">             <!-- ×5 rows; row5 cells carry cl-border-bottom-0 -->
                  <td>
                    <label class="checkbox-wrap checkbox-primary">
                      <input type="checkbox" checked>   <!-- row1 only; rows2–5 unchecked -->
                      <span class="checkmark"></span>   <!-- :after FA glyph \f0c8 / \f14a -->
                    </label>
                  </td>
                  <td><div class="img" style="background-image: url(images/product-1.png)"></div></td>
                  <td><div class="email">
                    <span>Sneakers Shoes 2020 For Men</span>
                    <span>Fugiat voluptates quasi nemo, ipsa perferendis</span>
                  </div></td>
                  <td>$44.99</td>
                  <td class="quantity"><div class="cl-input-group">
                    <input type="text" name="quantity" class="quantity cl-form-control input-number" value="2" min="1" max="100">
                  </div></td>
                  <td>$89.98</td>
                  <td>
                    <button type="button" class="cl-close" aria-label="Close"><span aria-hidden="true"><i class="fa fa-close">…</i></span></button>
                  </td>
                </tr>
                <!-- rows 2–5 identical structure; prices 30.99/35.50/76.99/40.00; qty 1; product images product-2/3/4/1 -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
```

Canonical row data (from the live DOM):

| # | Name | Blurb | Unit price | Qty | Line total | Checkbox | Thumbnail |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Sneakers Shoes 2020 For Men | Fugiat voluptates quasi nemo, ipsa perferendis | $44.99 | 2 | $89.98 | checked | product-1.png |
| 2 | Sneakers Shoes 2020 For Men | Fugiat voluptates quasi nemo, ipsa perferendis | $30.99 | 1 | $30.99 | unchecked | product-2.png |
| 3 | Sneakers Shoes 2020 For Men | Fugiat voluptates quasi nemo, ipsa perferendis | $35.50 | 1 | $35.50 | unchecked | product-3.png |
| 4 | Sneakers Shoes 2020 For Men | Fugiat voluptates quasi nemo, ipsa perferendis | $76.99 | 1 | $76.99 | unchecked | product-4.png |
| 5 | Sneakers Shoes 2020 For Men | Fugiat voluptates quasi nemo, ipsa perferendis | $40.00 | 1 | $40.00 | unchecked | product-1.png (reused) |

## Design tokens (canonical — from the stylesheet)

| Token | Value |
| --- | --- |
| Font | `"Poppins", Arial, sans-serif` — load Google Fonts 400/500/700 (preview head loads NO font link; Poppins falls back to Arial there) |
| Body | 16px / line-height 1.8 / weight 400 / color gray / background `#f8f9fd` |
| Headings h2/h3 | Poppins weight 400, color `#000` (final rule overrides reboot's 500) |
| `.heading-section` | 28px, `#000` — "Table #06" |
| `h3.cl-h5` | 1.25rem (20px), weight 400, `#000`, mb `.cl-mb-4` = 1.5rem, centered — "Table Accordion" |
| Heading wrapper | `.cl-col-md-6` (50% @768+, `flex: 0 0 50%; max-width: 50%`), text-center, mb **1.5rem** (⚠️ Statusline/table-05 used 3rem — siblings differ) |
| `.ftco-section` | padding 7em 0 |
| Container | 540 / 720 / 960 / 1140px @576 / 768 / 992 / 1200; 15px gutters |
| `.table-wrap` | overflow-x: scroll |
| `.cl-table` | width 100%, min-width 1000px !important, color `#212529`, box-shadow `0px 5px 12px -12px rgba(0,0,0,0.29)`, border-collapse collapse, mb 1rem |
| `thead.thead-primary` | background **`#99b19c`** (sage/olive) — signature token; the ONLY css-table entry with a fully colored header bar |
| `thead th` | border none, padding 30px, 13px, weight 500, color `#fff`, vertical-align bottom |
| Header contrast | white 13px on `#99b19c` ≈ **2.3:1** (computed from token) — below WCAG AA; fidelity keeps source tokens; labels stay real `scope="col"` text |
| `tbody tr` | margin-bottom 10px |
| `tbody td` | border none, padding 30px, 14px, background `#fff`, border-bottom **4px solid `#f8f9fd`** (same color as page → reads as gap), vertical-align middle |
| Row 5 | all 7 cells carry `.cl-border-bottom-0` (border-bottom: 0 !important) |
| `tr.cl-alert` | position relative; padding .75rem 1.25rem; mb 1rem; border 1px solid transparent; radius .25rem (subtle under border-collapse; match the screenshot's white bands + faint gaps) |
| Product `.email span` | display block; name line 14px `#212529`; blurb `.email span:last-child` 12px `rgba(0,0,0,0.3)` |
| Thumbnail `td .img` | 100×80px, background-size cover, position center → `picsum.photos/seed/rowline-<n>/200/160` |
| Price / total | plain td text 14px `#212529` |
| Quantity cell | `td.quantity { width: 10% }`; single `.cl-form-control` text input (min 1, max 100); focus: border-color `#80bdff`, box-shadow `0 0 0 0.2rem rgba(0,123,255,0.25)` |
| `.cl-close` | font-size 1.5rem, weight 700, color `#000`, text-shadow 0 1px 0 #fff, opacity .5, hover .75; button resets (padding 0, transparent, border 0) |
| Remove × span | 12px, `#dc3545` (wins over the button chrome) |
| Checkbox | `.checkbox-wrap`: block/relative/cursor/16px/weight 500/user-select none; input absolute opacity 0 h0 w0; `.checkmark:after`: unchecked `\f0c8` `rgba(0,0,0,0.1)`, checked `\f14a` → `.checkbox-primary` **`#99b19c`**; 20px, margin-top -14px, transition .3s (reduced-motion → none) |

## Screenshot analysis (1200×972 JPEG, 2026-09-30)

- Page: light blue-gray `#f8f9fd`, browser-chrome mockup frame (ignore).
- Centered h2 "Table #06" in dark near-black, ~28px, generous whitespace above.
- Centered h3 "Table Accordion" ~20px, directly above the table with a modest gap.
- Table reads as one white card with a soft drop shadow; header is a solid **sage-green band** with white 13px labels (Product / Price / Quantity / total; first two and last columns unlabeled).
- 5 white rows with faint light gaps between them (the 4px `#f8f9fd` separators); row 1 checkbox is sage-green checked; rows 2–5 show light-gray unchecked squares.
- Each row: small sneaker thumbnail on white (~100×80), dark product name over a light-gray blurb, plain-text prices, a small bordered quantity box (values 2/1/1/1/1), line totals, and a tiny red × at the far right.
- Last row has no bottom separator; the table's bottom edge is clean white.
- Matches the live preview DOM + stylesheet exactly — no token discrepancies found.

## Sibling comparison (css-table / Table family)

| Entry | Source | Signature |
| --- | --- | --- |
| Gridline | css-table-12 | white header + lavender underline era |
| Nightgrid | css-table-16 | dark treatment |
| Gridkit / Rowdeck / Domkit / Gridmark | table-01…04 | white/charcoal/purple-header variants |
| Statusline | table-05 | white header, lavender `#eceffa` underline, teal `#40bfc1` checkbox, status pills |
| **Rowline** | **table-06** | **sage `#99b19c` header bar + sage checkbox accent, cart line-item rows, quantity inputs, h3 "Table Accordion" subheading** |

Gotchas carried from siblings (all re-verified against table-06's own
sheet at prep time):

1. Preview lives at the `bootstrap/` path — slug-only URL 404s.
2. Stylesheet path includes the `table-06/` segment before `css/`.
3. Poppins is declared but never loaded on the preview — recreation
   loads it properly via Google Fonts.
4. Final heading rule = weight 400 (reboot's 500 is overridden).
5. `th` in Tailwind v4 preflight has NO rules — set the header tokens
   explicitly (13px/500/white on sage).
6. Zero scripts on source — interactive behavior is a documented
   React-state divergence.

## Documented divergences

1. **Name** — "Rowline" replaces "Table 06" everywhere user-facing.
2. **Images** — picsum seeds replace `images/product-*.png`.
3. **Interactivity** — source ships no JS: checkboxes, quantity
   inputs, and remove buttons are inert markup, totals are static.
   Recreation: real checkbox toggling, editable quantity that
   recomputes the line total (unit price × qty, clamped 1–100), and
   remove buttons that delete rows via React state.
4. **Footer** — source has NO footer; monorepo rule adds a minimal
   "Component Dock" attribution link.
5. **Icons** — lucide-react X / Square / SquareCheck replace the
   FontAwesome glyph subset at the same tokens.
