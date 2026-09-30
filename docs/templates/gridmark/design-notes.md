# Gridmark (ColorLib Table 04) — Design Notes

> Replication research for **Gridmark** (NEW name) — recreation of ColorLib
> **Table 04** (slug `table-04`). Research done 2026-09-30 by the prep
> stream; implementers should not need to re-fetch the preview.

## Source mapping

- **ColorLib item:** "Table 04" (TEMPLATES.md line 2887; section
  "## Table (25)" at line 2868). Slug `table-04` appears exactly ONCE in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/table-04/
- **Preview URL — REACHABLE at a NON-STANDARD path (verified 2026-09-30 by
  direct fetch):** the slug-only URL
  https://preview.colorlib.com/theme/table-04/ returns **HTTP 404
  "Not Found"** (9-byte body; also 404 without the trailing slash and as
  `table04/`). The live preview lives at:
  **https://preview.colorlib.com/theme/bootstrap/table-04/**
  (HTTP 200, 18,520 bytes, `<title>Table 04</title>`). The `bootstrap/`
  path segment is the same quirk as css-table-11/12/16, table-01,
  table-02, table-03 (Gridline/Rowglow/Nightgrid/Gridkit/Rowdeck/Domkit).
- **Preview CSS:** the DOM references `css/style.css?v=19583881`.
  ⚠️ At prep time (2026-09-30) a direct curl fetch of that stylesheet
  URL returned **HTTP 404 "Not Found"** while the page itself returned
  200 — the same CDN blocking observed on the Table 01/02/03 sheets the
  same day. Tokens in this document were captured **authoritatively from
  the live rendered page**: full `document.styleSheets` cssRules dump
  (10,157 chars) + computed styles on key elements, all 2026-09-30.
  **CSS values here are canonical — do NOT spend time re-fetching the
  stylesheet.** Sheet anatomy (from the cssRules dump): Bootstrap-reboot
  `all: revert` block → self-hosted Roboto 100/300/400/700 @font-face
  fallbacks (never used by the final cascade) → `.fa` / `.cl-icon` icon
  rules → HTML element defaults → `.cl-container` Bootstrap-like
  responsive container → `.cl-row` / `.cl-col-md-6` / `.cl-col-md-12`
  grid → `.cl-table` base + `.cl-table-bordered` → utilities
  (`.cl-rounded-circle`, `.cl-justify-content-center`, `.cl-mb-2`/`-4`/
  `-5`, `.cl-text-center`) → print rules → **final override block**
  (Poppins white-page body, salmon `#ffafb0` links, 400-weight
  headings, 7em `.ftco-section`, 28px `.heading-section`, `.img` cover
  backgrounds, `.table-wrap` overflow-x scroll, final `.cl-table`
  min-width 1000px + shadow + centered, borderless 30px/14px black
  thead th, 10px tbody tr margin, 30px/14px white tbody td with
  whitesmoke hover, 12px `rgba(0,0,0,0.3)` close icons, 90px circular
  `.img` cards, 12px salmon card links with 12px/600/#666 strong,
  tfoot month links 400 #000 hover salmon). NOTE: there is **no
  `.thead-primary` rule on this sheet — Table 04 has NO colored header
  bar** (unlike Table 03's violet `#6807f9`).
- **Source scripts:** NONE — the preview page loads ZERO `<script>` tags
  (verified 2026-09-30 on the live DOM). Class-card links and both
  month links are inert `<a href="#">` anchors. The recreation renders
  them as real interactive elements with accessible names and no
  invented destination (source behavior: `href="#"`).
- **Icons:** Font Awesome `fa-close` (× mark, 12px,
  `rgba(0,0,0,0.3)`) and `fa-long-arrow-left` / `fa-long-arrow-right`
  (month arrows, 12px, `#000`). Recreation: lucide-react `X`,
  `ArrowLeft`, `ArrowRight`.
- **Fonts:** **Poppins** — final `body` rule sets `font-family: "Poppins",
  Arial, sans-serif; font-size: 16px; line-height: 1.8; font-weight:
  normal`. Load a Google Fonts `<link>` with weights **400, 600, 700**
  in `index.html` (700 for th cells — UA default bold; 600 for the
  class-card "Yoga training" strong label). (The self-hosted Roboto
  @font-face rules are unreachable fallbacks — ignore them.)
- **Assets:** 7 background images `images/classes-1.jpg` …
  `classes-7.jpg` — fitness/yoga class photos (women training in a gym,
  pink/neutral tones), rendered as 90×90 circular crops
  (`background-size: cover; background-position: center center`).
  Recreation: `https://picsum.photos/seed/gridmark-<n>/180/180`
  (n = 1…7) with the same circular treatment — NEVER copy the source
  photos.
- **Naming check:** "gridmark" collides with nothing in `ls apps/` or
  `openspec/specs/` (verified 2026-09-30; repo-wide grep clean); fits
  the grid family (gridkit — the sibling Table 01 recreation; gridpane,
  gridline) and reads naturally for a class-schedule grid of marks.

## Live DOM skeleton (verbatim structure)

```html
<body>
<section class="ftco-section">                      <!-- 7em 0 padding -->
  <div class="cl-container">                        <!-- Bootstrap-like container -->
    <div class="cl-row cl-justify-content-center">
      <div class="cl-col-md-6 cl-text-center cl-mb-5">
        <h2 class="heading-section">Table #04</h2>  <!-- 28px, #000, weight 400 -->
      </div>                                        <!-- wrapper: 3rem margin-bottom -->
    </div>
    <div class="cl-row">
      <div class="cl-col-md-12">
        <h4 class="cl-text-center cl-mb-4">Class Schedule Table</h4>
                                 <!-- 24px, #000, weight 400, 1.5rem margin -->
        <div class="table-wrap">                    <!-- overflow-x: scroll -->
          <table class="cl-table cl-table-bordered cl-text-center">
                                 <!-- min-width 1000px, bg #fff, text-align center,
                                      shadow 0 5px 12px -12px rgba(0,0,0,.29),
                                      border-collapse collapse, 1px #dee2e6 outer border -->
            <thead>
              <tr>
                <th>Monday</th><th>Tuesday</th><th>Wednesday</th>
                <th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>
                                 <!-- borderless, 30px padding, 14px #000 bold,
                                      vertical-align bottom -->
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><i class="fa fa-close"><svg class="cl-icon">…</svg></i></td>
                                 <!-- × mark: 12px, rgba(0,0,0,0.3) -->
                <td class="cl-text-center">
                  <div class="img cl-rounded-circle cl-mb-2"
                       style="background-image: url(images/classes-1.jpg);"></div>
                                 <!-- 90×90 circle, margin 0 auto, mb 8px -->
                  <a href="#"><strong>Yoga training</strong> <br>
                  7 am-6 am</a>  <!-- block link: strong 12px/600/#666,
                                     time 12px #ffafb0 -->
                </td>
                <!-- … pattern: R1 X C1 X C2 X C3 X · R2 C4 X C5 X C6 X C7 ·
                     R3 = R1 · R4 = R2 · R5 C1 X C2 C3 X C4 C5 … -->
              </tr>
              <!-- 5 rows total, 7 cells each: 16 ×-cells + 19 class-cells -->
            </tbody>
            <tfoot>
              <tr>
                <th><a href="#"><i class="fa fa-long-arrow-left">…</i> September</a></th>
                <th></th><th></th><th></th><th></th><th></th>
                <th><a href="#">November <i class="fa fa-long-arrow-right">…</i></a></th>
                                 <!-- th: 16px bold, 12px padding, vertical top,
                                      1px #dee2e6 borders; link #000 400 hover #ffafb0 -->
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
</body>
```

No navbar, no hero, no cards, no forms, no footer — the ENTIRE source
page is one section: heading + subheading + class-schedule table. The
monorepo-mandated Component Dock attribution footer is the only
addition (same footer rule as Gridline/Nightgrid/Gridkit/Rowdeck/Domkit).

## Design tokens (from live cssRules + computed styles, 2026-09-30 — canonical)

| Token | Value | CSS source |
| --- | --- | --- |
| Body font | `"Poppins", Arial, sans-serif` 16px / 1.8 / 400 | final `body` rule |
| Body color | `gray` (table content overrides to `#212529` via `.cl-table`) | `body`; `.cl-table { color: #212529 }` |
| Page background | **`#fff` — PURE WHITE** (⚠️ NOT `#f8f9fd`) | final `body` rule |
| Global links `a` | **`#ffafb0`** (rgb 255,175,176 — salmon pink), transition 0.3s | final `a` rule; hover/focus: text-decoration none, outline none, box-shadow none |
| h2/h4 | Poppins, **font-weight 400**, line-height 1.5, color `#000` | final rule overrides reboot's 500 (same gotcha as css-table-12 / table-01/02/03); computed = 400 |
| `.heading-section` | font-size **28px**, color `#000` | h2 "Table #04" |
| h4 subheading | font-size **24px** (1.5rem), weight 400, `#000`, centered | computed; `.cl-mb-4` = 1.5rem |
| Heading wrapper | `.cl-col-md-6 .cl-text-center .cl-mb-5` — 50% width @768, centered, **3rem margin-bottom** (computed 48px) | the heading→table gap |
| `.ftco-section` | `padding: 7em 0` (computed 112px) | |
| `.cl-container` | 540px @576 · 720px @768 · 960px @992 · 1140px @1200; 15px side padding | Bootstrap-like |
| `.table-wrap` | `overflow-x: scroll` | |
| `.cl-table` (final) | `min-width: 1000px !important; width: 100%; background: #fff; text-align: center; box-shadow: 0 5px 12px -12px rgba(0,0,0,.29); margin-bottom: 1rem` | base rule sets `color: #212529`; computed **border-collapse: collapse**; `.cl-table-bordered` adds outer `1px solid #dee2e6` |
| thead th (final) | **border none** (computed 0px), padding **30px**, font-size **14px**, color **#000**, vertical-align bottom | ⚠️ NO colored header bar — black on white, unlike Table 03 |
| thead th weight | **700** (UA default — snippet never overrides `th` font-weight; author `font-bold`) | computed confirmed |
| tbody tr | `margin-bottom: 10px` | row spacing quirk |
| tbody td (final) | padding **30px**, font-size **14px**, background **#fff**, vertical-align middle, text-align center, transition **0.5s** | borders **`1px solid #dee2e6`** all sides (`.cl-table-bordered th/td`, not overridden for tbody) |
| tbody td:hover | background **whitesmoke** (`#f5f5f5`); `prefers-reduced-motion: reduce` → transition none | |
| td i / `.cl-icon` | font-size **12px**, color/fill **`rgba(0,0,0,0.3)`** | the × "no class" mark |
| td .img (class card) | **90×90px**, border-radius **50%**, margin `0 auto`, margin-bottom **8px**, `background-size: cover; background-position: center center` | `.cl-rounded-circle` + `.cl-mb-2` + `.img` |
| td a (class link) | display **block**, color **`#ffafb0`**, font-size **12px**, weight 400 | salmon time line inherits this color |
| td a strong | font-size **12px**, weight **600**, color **`#666`** | "Yoga training" label |
| tfoot th | padding **12px** (0.75rem — base `th` padding), font-size **16px** (inherits body), weight **700** (UA th bold), vertical-align **top**, borders **`1px solid #dee2e6`** | ⚠️ differs from both thead (30px/no borders) and tbody (30px/14px/middle) |
| tfoot th a | font-size 16px, weight **400**, color **#000**, display inline; hover **#ffafb0** | month links |
| tfoot th a i | font-size **12px**, color `#000` | month arrows |
| Columns | 7: Monday · Tuesday · Wednesday · Thursday · Friday · Saturday · Sunday | |
| Body rows | 5 × 7 cells = 35: **16 ×-cells + 19 class-cells** | pattern below |
| Cell pattern | R1 `X C1 X C2 X C3 X` · R2 `C4 X C5 X C6 X C7` · R3 `X C1 X C2 X C3 X` · R4 `C4 X C5 X C6 X C7` · R5 `C1 X C2 C3 X C4 C5` | ⚠️ R5 Wed+Thu are BOTH class cards — verified against both the DOM and computed cell counts (16/19); images cycle classes-1…7 |
| Card copy | ALL 19 cards: `<strong>Yoga training</strong>` + `<br>` + `7 am-6 am` | paraphrase allowed; keep two-line structure |
| tfoot content | "← September" (th1) · 5 empty th · "November →" (th7) | |
| Print rules | thead `display: table-header-group`; tr/img `break-inside: avoid`; body/container `min-width: 992px`; cells forced white; `@page { size: a3 }` | minor; not required for parity |

## Screenshot analysis (table-04.jpg, AVIF data 1200×972, analyzed 2026-09-30)

The screenshot (served as AVIF from the ColorLib CDN; converted for
analysis) matches the live preview exactly: a browser-chrome mockup on a
white surround showing a **pure white page**, a centered dark "Table
#04" heading in regular-weight Poppins (28px), a centered "Class
Schedule Table" subheading (24px) below it, then one wide table: a
**borderless header row of bold black day names** (Monday…Sunday) on
white, then a **grid of white cells with light-gray 1px borders**
(`#dee2e6`) — 35 cells in 5 rows — each cell either holding a faint
gray **× mark** (no class) or a **circular fitness photo** (women doing
yoga/pilates in a gym — pink/neutral tones) with bold dark-gray "Yoga
training" and salmon-pink "7 am-6 am" underneath. A subtle shadow lifts
the table off the white canvas. The screenshot is cropped above the
tfoot, so the month-navigation row is not visible there — the live DOM
confirms it ("← September" / "November →"). No nav, no footer, no
buttons visible. The aesthetic: a clean weekly class-schedule grid for
a fitness/yoga studio — airy (30px cell padding), white canvas, black
type, with salmon pink as the single accent color and photos as the
only imagery.

## Section-by-section fidelity notes

1. **Page shell** — **bg WHITE (`#fff`)** — this is the family outlier;
   Gridkit/Rowdeck/Domkit use `#f8f9fd`. Poppins 400, body line-height
   1.8, color gray. Content area padded `7em 0`. Container capped at
   1140px (desktop) with 15px gutters; Tailwind max-width steps mirror
   540/720/960/1140.
2. **Heading block** — centered h2 "Table #04" at 28px / weight 400 /
   `#000`, 3rem margin-bottom on the wrapper column. Tailwind preflight
   resets h2 size/weight — set `text-[28px] font-normal` explicitly.
3. **Subheading** — centered h4 "Class Schedule Table" at 24px /
   weight 400 / `#000`, 1.5rem margin-bottom. Author `text-2xl
   font-normal` explicitly (preflight reset + reboot 500 gotcha).
4. **Responsive table wrapper** — `overflow-x-auto`; table
   `min-w-[1000px] w-full` + white bg + centered text + shadow
   `0 5px 12px -12px rgba(0,0,0,.29)` + `border-collapse collapse` +
   outer `border border-[#dee2e6]`. No row-gap signature (Rowdeck) and
   no shading columns (Domkit) — this table is a plain bordered grid.
5. **Header row** — 7 day columns with real text labels. th cells
   `font-bold text-black text-sm px-[30px] py-[30px] border-none` on a
   transparent/white background — **NO colored thead bar**. Tailwind
   preflight has NO th rules — author `font-bold` and `text-[14px]`
   explicitly.
6. **Body rows** — 5 rows × 7 cells. Cells: `bg-white text-[14px]
   px-[30px] py-[30px] border border-[#dee2e6]` + centered +
   `align-middle`, with `group-hover`/`hover:bg-[#f5f5f5]` and a 0.5s
   transition (disable under reduced motion). Rows carry ~10px spacing
   (`tbody tr` margin-bottom 10px in the source — reproduce via row
   padding or explicit margin). ×-cells: lucide `X` `size={12}`
   `text-[rgba(0,0,0,0.3)]` `aria-hidden`. Class-cells: circular
   `w-[90px] h-[90px] rounded-full bg-cover bg-center mx-auto mb-2`
   picsum image + block link: `strong` `text-xs font-semibold
   text-[#666]` + time `text-xs text-accent (#ffafb0)`.
7. **Cell pattern** — implement the canonical matrix exactly:
   R1 `X C1 X C2 X C3 X` · R2 `C4 X C5 X C6 X C7` · R3 = R1 ·
   R4 = R2 · R5 `C1 X C2 C3 X C4 C5`. R5's Wednesday + Thursday being
   both class cards is intentional (verified in the DOM — do NOT
   "fix" it). Cards cycle 7 image seeds in order.
8. **Month-navigation tfoot** — 7 th cells: th1 = link
   `← September` (lucide ArrowLeft 12px before the text), th2–6 empty,
   th7 = link `November →` (ArrowRight after the text). th cells:
   `text-base font-bold px-3 py-3 align-top border border-[#dee2e6]`
   (16px / 700 / 12px padding / top — NOT the body's 30px/middle).
   Links: `text-base font-normal text-black hover:text-accent
   transition-colors`; real interactive elements, accessible names,
   no invented destination (source `href="#"`).
9. **Responsive behavior** — below 1000px the table scrolls
   horizontally in its wrapper; layout (heading, subheading, padding)
   stays intact.
10. **Footer** — source has NO footer; the recreation adds the minimal
    Component Dock attribution line (monorepo rule). Zero ColorLib
    references anywhere in app files (comments included).

## Gotchas for implementers

- **Preview URL quirk:** slug-only
  `https://preview.colorlib.com/theme/table-04/` is **404** — the live
  page is at `.../theme/bootstrap/table-04/` (same as table-01/02/03
  and the css-table family).
- **Stylesheet 404 via curl (2026-09-30):** direct fetches of
  `css/style.css?v=19583881` returned 404 while the page loaded fine.
  Do NOT burn time re-fetching it — every token is captured in this
  document and in `openspec/specs/template-gridmark/spec.md`, taken
  from the live browser cssRules + computed styles.
- **WHITE page, not blue-gray:** this table-family member uses a pure
  `#fff` canvas — do NOT copy `--color-page: #f8f9fd` from
  gridkit/rowdeck/domkit.
- **No colored header bar:** thead th is borderless black-on-white —
  there is no `.thead-primary`/violet bar here (Table 03's signature
  does not apply).
- **th bold is a UA default:** the snippet never sets `th` font-weight;
  computed thead th AND tfoot th render at **700**. Tailwind v4
  preflight has NO th/td rules — author `font-bold` explicitly.
- **tfoot ≠ thead/tbody styles:** tfoot th uses **12px padding, 16px
  font-size, vertical-align top** (falls back to the base `.cl-table th`
  rule) while thead is 30px/borderless and tbody is 30px/14px/middle.
  Do not copy one region's cell styles onto another.
- **h2/h4 weight 400:** the reboot block sets h2/h4 to 500, but the
  final rule overrides to **400** (computed confirmed). Author
  `font-normal` — do not inherit preflight or reboot values.
- **border-collapse: collapse** (computed) — unlike Table 03's
  `separate`. The 1px `#dee2e6` borders of adjacent cells collapse into
  single lines; the outer table border comes from `.cl-table-bordered`.
- **tbody tr margin-bottom: 10px** — row spacing is author CSS, not
  cell padding. Reproduce (Tailwind: `tr` margin or row-level spacing).
- **Cell hover is whitesmoke + 0.5s:** every tbody cell hovers to
  `#f5f5f5` over 0.5s (disable under `prefers-reduced-motion`).
- **Salmon is the only accent:** global `a` color AND td card links are
  `#ffafb0`; the card STRONG label is `#666` 600 — keep both.
- **Class-card links are `href="#"`:** real interactive elements,
  accessible names, NO invented navigation.
- **Images:** never copy `images/classes-*.jpg` — picsum seeds
  `gridmark-1…7`, circular 90px crops.
- **Icons:** lucide `X` (12px, rgba(0,0,0,0.3), aria-hidden) +
  `ArrowLeft`/`ArrowRight` (12px, #000) for the month nav.
- **Roboto @font-face fallbacks are unreachable** — ignore them; load
  Poppins 400/600/700 via Google Fonts.
