# Domkit (ColorLib Table 03) — Design Notes

> Replication research for **Domkit** (NEW name) — recreation of ColorLib
> **Table 03** (slug `table-03`). Research done 2026-09-30 by the prep
> stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Table 03" (TEMPLATES.md line 2886; section
  "## Table (25)" at line 2868). Slug `table-03` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/table-03/
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-03/ returns **HTTP 404
  "Not Found"** (9-byte body). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-03/**
  (HTTP 200, 3,074 bytes, `<title>Table 03</title>`). The `bootstrap/`
  path segment is the same quirk as css-table-11/12/16, table-01,
  table-02 (Gridline/Rowglow/Nightgrid/Gridkit/Rowdeck).
- **Preview CSS:** the DOM references `css/style.css?v=75abd250`.
  ⚠️ At prep time (2026-09-30) direct curl fetches of that stylesheet
  URL returned **HTTP 404 "Not Found"** while the page itself returned
  200 — and re-fetching the Table 02 sheet (which fetched fine earlier
  the same day) also 404'd, so the CDN began blocking direct stylesheet
  requests mid-session. Tokens in this document were captured
  **authoritatively from the live rendered page**: full
  `document.styleSheets` cssRules dump (9,956 chars) + computed styles
  on key elements, all 2026-09-30. **CSS values here are canonical — do
  NOT spend time re-fetching the stylesheet.** Sheet anatomy (from the
  cssRules dump): Bootstrap-reboot `all: revert` block → self-hosted
  Roboto 400/700 @font-face fallbacks (never used by the final cascade)
  → `.cl-container` Bootstrap-like responsive container → `.cl-table`
  base + final override → `.cl-btn`/`.cl-btn-primary` base Bootstrap
  buttons → final override block (Poppins body, violet `#6807f9`
  thead/buttons, lavender shading, 2px-radius 13px buttons) →
  `.cl-border-bottom-0`, `.cl-mb-4`/`.cl-mb-5`/`.cl-text-center`/
  `.cl-justify-content-center` → print rules.
- **Source scripts:** NONE — the preview page loads ZERO `<script>` tags
  (verified 2026-09-30 on the live DOM). The "Sign Up" cells are
  `<a href="#" class="cl-btn cl-btn-primary">` — inert anchors. The
  recreation renders them as real interactive controls (`packages/ui`
  Button/ButtonLink) with accessible name "Sign Up" and no invented
  destination (source behavior: `href="#"`).
- **Icons:** none in the source — no lucide imports required.
- **Fonts:** **Poppins** — final `body` rule sets `font-family: "Poppins",
  Arial, sans-serif; font-size: 16px; line-height: 1.8; font-weight:
  normal`. Load a Google Fonts `<link>` with weights **400, 500, 700**
  in `index.html` (700 for bold th cells, 500 for buttons). (The
  self-hosted Roboto @font-face rules are unreachable fallbacks —
  ignore them.)
- **Assets:** none — the source page has NO images, logos, or
  illustrations. No picsum placeholders needed.
- **Naming check:** "domkit" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30; repo-wide grep clean); fits
  the `-kit` family (gridkit — the sibling Table 01 recreation;
  buildex-ui-kit/next-ui-kit/regen-ui-kit/structure-ui-kit).

## Live DOM skeleton (verbatim structure)

```html
<body>
<section class="ftco-section">                      <!-- 7em 0 padding -->
  <div class="cl-container">                        <!-- Bootstrap-like container -->
    <div class="cl-row cl-justify-content-center">
      <div class="cl-col-md-6 cl-text-center cl-mb-5">
        <h2 class="heading-section">Table #03</h2>  <!-- 28px, #000, weight 400 -->
      </div>
    </div>
    <div class="cl-row">
      <div class="cl-col-md-12">
        <h4 class="cl-text-center cl-mb-4">Create Your Domain Name</h4>
                                 <!-- 24px, #000, weight 400, 1.5rem margin -->
        <div class="table-wrap">                    <!-- overflow-x: scroll -->
          <table class="cl-table">                  <!-- min-width 1000px,
                                                       bg #fff, text-align center,
                                                       shadow 0 5px 12px -12px
                                                       rgba(0,0,0,.29) -->
            <thead class="thead-primary">           <!-- bg #6807f9 (violet) -->
              <tr>
                <th>TLD</th><th>Duration</th><th>Registration</th>
                <th>Renewal</th><th>Transfer</th><th>Register</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="scope">.com</th>  <!-- bg #e8ebf8, bold -->
                <td>1 Year</td>                     <!-- white -->
                <td>$70.00</td>                     <!-- #f4f6fc (odd position) -->
                <td>$5.00</td>                      <!-- white -->
                <td>$5.00</td>                      <!-- #f4f6fc (odd position) -->
                <td><a href="#" class="cl-btn cl-btn-primary">Sign Up</a></td>
                                                     <!-- white cell, violet button -->
              </tr>
              <!-- rows 2–5: .net $75 / .org $65 / .biz $60 / .info $50 -->
              <tr>                                   <!-- last row: .me $45 -->
                <th scope="row" class="scope cl-border-bottom-0">.me</th>
                <!-- every cell of this row carries cl-border-bottom-0 -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
```

No navbar, no hero, no cards, no forms, no footer — the ENTIRE source
page is one section: heading + subheading + domain-pricing table. The
monorepo-mandated Component Dock attribution footer is the only
addition (same footer rule as Gridline/Rowglow/Nightgrid/Gridkit/
Rowdeck).

## Design tokens (from live cssRules + computed styles, 2026-09-30 — canonical)

| Token | Value | CSS source |
| --- | --- | --- |
| Body font | `"Poppins", Arial, sans-serif` 16px / 1.8 / 400 | final `body` rule |
| Body color | `gray` (table content overrides to `#212529` via `.cl-table`) | `body`; `.cl-table { color: #212529 }` |
| Page background | `#f8f9fd` — light blue-gray | final `body` rule |
| h2/h4 | Poppins, **font-weight 400**, line-height 1.5, color `#000` | final rule overrides reboot's 500 (same gotcha as css-table-12 / table-01 / table-02); computed = 400 |
| `.heading-section` | font-size **28px**, color `#000` | h2 "Table #03" |
| h4 subheading | font-size **24px** (1.5rem), weight 400, `#000`, centered | computed; `.cl-mb-4` = 1.5rem |
| `.ftco-section` | `padding: 7em 0` | |
| `.cl-mb-5` | `margin-bottom: 3rem !important` | heading column → table gap |
| `.cl-container` | 540px @576 · 720px @768 · 960px @992 · 1140px @1200; 15px side padding | Bootstrap-like |
| `.cl-col-md-6` | flex 0 0 50% / max-width 50% @768 | half-width heading column, centered |
| `.table-wrap` | `overflow-x: scroll` | |
| `.cl-table` (final) | `min-width: 1000px !important; width: 100%; background: #fff; text-align: center; box-shadow: 0 5px 12px -12px rgba(0,0,0,.29)` | base rule also sets `color: #212529`, `margin-bottom: 1rem`; computed border-collapse: separate |
| `thead.thead-primary` | background **`#6807f9`** (rgb(104,7,249)) | THE signature violet header bar |
| thead th (final) | `border: none; padding: 30px; font-size: 14px; color: #fff`; **bold (computed 700 — UA default, snippet never overrides th font-weight; author `font-bold`)** | white labels on violet |
| tbody th/td (final) | `padding: 30px; font-size: 14px; background: #fff; vertical-align: middle; border-bottom: 2px solid #f8f9fd` (page color — invisible separators) | text `#212529`, centered |
| `tbody th.scope` (TLD) | background **`#e8ebf8`** (rgb(232,235,248)), border-bottom `2px solid #e0e5f6` (rgb(224,229,246)), font-weight **700** (UA default) | shaded lavender TLD column |
| Odd-position shading | `@media (min-width: 768px)`: `.cl-table tbody td:nth-child(2n+1)` → background **`#f4f6fc`** (rgb(244,246,252)), border-bottom `2px solid #ecEFFa` (rgb(236,239,250)) | positions: 1=TLD(shade via scope) · 2=Duration(white) · 3=Registration(#f4f6fc) · 4=Renewal(white) · 5=Transfer(#f4f6fc) · 6=Register(white). **Media-gated: off below 768px** |
| Last row | `.cl-border-bottom-0 { border-bottom: 0 !important }` on every cell of the `.me` row | no bottom separator on the final row |
| `.cl-btn` (final) | `cursor: pointer; border-width: 2px; border-radius: 2px; font-size: 13px; font-weight: 500; box-shadow: none !important`; padding `0.375rem 0.75rem` (6px 12px) | computed button: bg `#6807f9`, color `#fff` |
| `.cl-btn.cl-btn-primary` (final) | background/border **`#6807f9`**, color `#fff`; hover/focus background/border **`#5305c8`** (rgb(83,5,200)) | overrides the earlier Bootstrap `#007bff` rule — do NOT reproduce the blue |
| Button hover shadow | `.cl-btn:hover/:active/:focus { box-shadow: 0 12px 20px -6px rgba(0,0,0,.21) }`; transition 0.15s ease-in-out; `prefers-reduced-motion: reduce` → none | focus ring in source = Bootstrap default `rgba(0,123,255,.25)` (invisible on violet) — use monorepo `focus-visible` ring |
| Link color (global) | `#6807f9`, transition 0.3s | only visible "links" are the Sign Up buttons |
| Columns | 6: `TLD` · `Duration` · `Registration` · `Renewal` · `Transfer` · `Register` | |
| Rows | 6 TLDs: `.com $70` · `.net $75` · `.org $65` · `.biz $60` · `.info $50` · `.me $45` — Duration "1 Year" each; Renewal `$5.00` each; Transfer `$5.00` each | TLD cells are `<th scope="row" class="scope">` |
| Print rules | thead `display: table-header-group`; tr `page-break-inside: avoid`; body/container `min-width: 992px`; cells forced white | minor; not required for parity |

## Screenshot analysis (table-03.jpg, AVIF data 1200×972, analyzed 2026-09-30)

The screenshot (served as AVIF from the ColorLib CDN; converted for
analysis) matches the live preview exactly: a browser-chrome mockup on a
white surround showing a light blue-gray page (`#f8f9fd`), a centered
dark "Table #03" heading in regular-weight Poppins (28px), a centered
"Create Your Domain Name" subheading (24px) below it, then one wide
table: a **solid vivid-purple header bar** (`#6807f9`) with white bold
column labels (TLD, Duration, Registration, Renewal, Transfer,
Register), then **six pricing rows** — the TLD column shaded lavender
(`#e8ebf8`) with bold domain labels (.com through .me), then an
alternating pattern of light-lavender (`#f4f6fc`) Registration and
Transfer columns against white Duration/Renewal/Register columns, each
row ending in a small **violet "Sign Up" button** (2px radius, white
13px label). A subtle shadow lifts the table off the canvas; the last
row (.me) ends without a bottom separator. No nav, no footer, no
imagery, no other buttons visible. The aesthetic: a clean domain-
registrar pricing table on a cool light canvas with a vivid violet
signature — single-purpose, airy (30px cell padding), with the CTA
buttons as the only interaction.

## Section-by-section fidelity notes

1. **Page shell** — `bg #f8f9fd`, Poppins 400, body line-height 1.8,
   color gray. Content area padded `7em 0`. Container capped at 1140px
   (desktop) with 15px gutters; Tailwind max-width steps should mirror
   540/720/960/1140.
2. **Heading block** — centered h2 "Table #03" at 28px / weight 400 /
   `#000`, 3rem margin-bottom. Tailwind preflight resets h2 size/weight
   — set `text-[28px] font-normal` explicitly.
3. **Subheading** — centered h4 "Create Your Domain Name" at 24px /
   weight 400 / `#000`, 1.5rem margin-bottom. Author `text-2xl
   font-normal` explicitly (preflight reset + reboot 500 gotcha).
4. **Responsive table wrapper** — `overflow-x-auto`; table
   `min-w-[1000px] w-full` + white bg + centered text + shadow
   `0 5px 12px -12px rgba(0,0,0,.29)`. Unlike Table 02 (Rowdeck), this
   table has NO border-spacing row-gap signature — rows are separated
   only by their 2px bottom borders.
5. **Purple header** — thead `bg-[#6807f9]`; th cells `font-bold
   text-white text-sm px-[30px] py-[30px] border-none`; 6 columns with
   real text labels (no empty column, unlike Table 02).
6. **Body rows** — 6 rows; first cell `<th scope="row"
   className="font-bold bg-[#e8ebf8] border-b-2 border-[#e0e5f6]">` TLD;
   data cells `text-sm text-ink bg-white px-[30px] py-[30px]` +
   centered; bottom borders per the palette (white cells `#f8f9fd`,
   odd-position cells `#ecEFFa`). Apply odd-position shading with
   `odd:[&>td:nth-child(2n+1)]:...` or a scoped selector matching the
   ≥768px media gate (`md:` variants). Last row: `border-b-0` on every
   cell.
7. **Sign Up buttons** — per-row CTA in the Register column: violet
   `#6807f9` bg/border, white 13px/500 text, 2px border, 2px radius,
   6px 12px padding; hover `#5305c8` + drop shadow `0 12px 20px -6px
   rgba(0,0,0,.21)`; monorepo `focus-visible` ring. Real interactive
   element, accessible name "Sign Up", no invented destination.
8. **Responsive behavior** — below 768px the odd-position shading rule
   drops out (media query) but the scope column stays shaded; below
   1000px the table scrolls horizontally in its wrapper; layout
   (heading, subheading, padding) stays intact.
9. **Footer** — source has NO footer; the recreation adds the minimal
   Component Dock attribution line (monorepo rule). Zero ColorLib
   references anywhere in app files (comments included).

## Gotchas for implementers

- **Preview URL quirk:** slug-only
  `https://preview.colorlib.com/theme/table-03/` is **404** — the live
  page is at `.../theme/bootstrap/table-03/` (same as table-01/02 and
  the css-table family).
- **Stylesheet 404 via curl (2026-09-30):** direct fetches of
  `css/style.css?v=75abd250` returned 404 while the page loaded fine.
  Do NOT burn time re-fetching it — every token is captured in this
  document and in `openspec/specs/template-domkit/spec.md`, taken from
  the live browser cssRules + computed styles.
- **th bold is a UA default:** the snippet never sets `th` font-weight;
  computed thead th and `th.scope` cells render at **700**. Tailwind
  v4 preflight has NO th/td rules — author `font-bold` explicitly on
  header cells and TLD cells.
- **h2/h4 weight 400:** the reboot block sets h2/h4 to 500, but the
  final rule overrides to **400** (computed confirmed). Author
  `font-normal` — do not inherit preflight or reboot values.
- **The blue Bootstrap button is dead CSS:** `.cl-btn-primary` base
  rule is `#007bff`; the final `.cl-btn.cl-btn-primary` override is
  `#6807f9`. Only violet ships.
- **Odd-position shading is media-gated:** `td:nth-child(2n+1)` applies
  only at `min-width: 768px`. Below that, data cells are white and only
  the TLD scope column is shaded. Reproduce the gate (`md:` variants).
- **Last-row border removal:** every cell of the `.me` row carries
  `cl-border-bottom-0` (`border-bottom: 0 !important`). Author
  `border-b-0` on the last row's cells (or a `last:` variant).
- **Cell separators are palette-colored, not gray:** white cells use
  `border-b-2 border-[#f8f9fd]` (page color — nearly invisible);
  shaded cells use `#ecEFFa`; scope cells use `#e0e5f6`. Do not
  substitute a generic gray.
- **Table is `text-align: center`:** the final `.cl-table` rule centers
  ALL cell content (computed confirmed). Do not left-align.
- **No scripts, no images, no icons** in the source — keep the app
  dependency-light (no picsum, no lucide needed).
- **Roboto @font-face fallbacks are unreachable** — ignore them; load
  Poppins 400/500/700 via Google Fonts.
- **Poppins weights:** body/headings 400, buttons 500, bold th cells
  700 — request all three in the fonts `<link>`.
