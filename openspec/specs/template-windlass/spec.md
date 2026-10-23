# Template: Windlass (Website Menus)

## Purpose

Windlass is the *Website Menus* family's **floating white card with a pink accent and a social
row**. A centred `28 px` heading sits on a **`#fafafa`** page, and under it a **white card**
(`padding:10px`, **`border-radius:5px`**, shadow `0 5px 20px -17px rgba(0,0,0,0.34)`,
`position:relative` — never sticky) carries three blocks on one line: a **single-line uppercase
`#000` wordmark** at its left, **five `14 px` `#333333` rows pushed to the right**
(`margin-left:auto`, `margin-right:1rem`) with the **current row's label in pink
`#fc7fb2`** (plain text colour — this sheet has **no** underline, slab, dropdown or search
field anywhere), and a row of **four `40 px` circular buttons** (`border-radius:50%`,
`1px solid #e6e6e6`, glyph `#4d4d4d`, `margin-right:4px`) at the card's far right, moved there by
`order:13` (`cl-order-lg-last`). Hovering a row turns its label `#fc7fb2`; hovering a circle fills
it `#fc7fb2`, recolours its border and turns the glyph white. Below **`992 px`** the card turns
**`#000`**, the wordmark white, and the rows collapse into a `☰ MENU` toggler
(`rgba(255,255,255,0.5)`, uppercase, `16 px`, `letter-spacing:.1em`) that reveals a
**height-animated full-width panel** (`flex-basis:100%`) of the five rows in
`rgba(255,255,255,0.7)` (hover and current row `#fff`) while the circles shrink to **`30 px`
with white 1px rings**; a third breakpoint is not declared, but the header **wraps to two lines
below ~420 px** (card grows `66 px → 91 px`). The page holds **nothing else** — no content
sections, no images, no footer, no sticky chrome; the document does not scroll and **9** of its
**10** anchors are dead `href="#"`.

It is an original React recreation of the ColorLib free snippet **"Website Menu V14"** (source
slug `website-menu-14`), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's structure, order and design
tokens 1:1 but copies no asset (no images — the source ships none, no font files, no CSS files, no
icon-font glyphs, no inline SVG `<path>` data, no text verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-14/ — page title *"Website Menu V14 -
  Free Right Align Navbar Menu 2026 - Colorlib"*, **HTTP 200**, 108,857 B, sha256
  `1e3dcb72751ccead3f5a1dd4bffe6ed4e7d63c0777141db9f70a13f2fd34b242`, verified 2026-10-12. Page
  meta: posted **March 9, 2021** (structured data `datePublished`
  **2021-03-09T14:16:31+00:00**) by **Rok Krivec**, `dateModified`
  **2026-09-25T10:42:07+00:00** (the September 2026 rebuild); ColorLib's own one-line description:
  *"Clean and minimal free right align navbar menu template with social buttons and a 100%
  mobile-friendly layout."* September 2026 update note (verbatim): *"Updated September 2026: this
  snippet is now plain HTML and CSS plus a few lines of vanilla JavaScript: no jQuery, no
  Bootstrap files, no plugins. The download is 251 KB (it was 261 KB). Use it on its own, or drop
  it into a Bootstrap 4, 5 or 6 project and it looks the same. The collapsible sections open and
  close without Bootstrap's JavaScript."* TEMPLATES.md `## Website Menus (20)` — this item is the
  family's **fourteenth** entry at **line 3086**; the slug `website-menu-14` appears exactly
  **once** in TEMPLATES.md and in **no** spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-14/` returns **HTTP 404**
  (`Not Found`, 9 B) — like its `-01`…`-13` siblings, the *Website Menus* family does **not** live
  under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-14/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **3,336 B**, `<title>Website menu 04</title>`, sha256
  `94c17914017e8556723d91c8024b2b9b1953864f2f508ebaacb1cb779e29b3be`, verified 2026-10-12) — the
  URL the preview host's catalog index records for this slug. Its two assets —
  `css/style.css?v=b776cb12` (**14,904 B**, `text/css`, sha256
  `78cdb908528b17491cc1f1f982f16b4e0c1b582d951822f8e33b404d0542f958`) and
  `js/snippet.js?v=39f937fc` (**2,671 B**, `application/javascript`, sha256
  `e48262d1b6eea27636db9209ca3599869c67ed6331a1fbad941118f172c201b5`) — are **byte-identical**
  (same sha256, verified) to the copies in the snippet's own downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-14.zip` (**HTTP 200**,
  `application/zip`, **257,214 B**, sha256
  `b9aec2d0d6d74e0755fd632f174b37257470ceab60ec63fdea4a5eaf2cd705cc`; ColorLib rounds this to
  "251 KB"), which ships `index.html` (**3,133 B**), `css/style.css`, `js/snippet.js`,
  `README.md` (**1,264 B**), **no images at all**, and **eight** Roboto woff2 files (100/300/
  400/700 × latin/latin-ext — **247,856 B = 96.4 %** of the archive). `diff` between the live page
  and the archive `index.html` is **head-only** (the preview host's `noindex` meta tags, a
  `cdnjs.cloudflare.com` `dns-prefetch`, `fetchpriority="high"`, and the cache-busting query
  strings) — the archive is the readable, un-versioned twin of the live preview. Both were read
  for this spec and the live render was cross-checked in a browser at 1440, 1200, 992, 991, 768,
  420, 375 and 320 px (see Design reference).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-14.jpg
  (**HTTP 200**, served as **AVIF**, 5,514 B, 1200×972, converted to PNG and inspected visually
  2026-10-12). No screenshot-only fallback was needed — the live preview is the primary reference
  and the archive its readable twin. The screenshot is a browser-chrome mock of the rendered
  page: the centred heading **`Website menu #04`**, then the **white rounded card** carrying the
  black uppercase wordmark **`DIGITAL`** at its left, the grey rows **`Home`** (pink — the current
  one) · **`About`** · **`Work`** · **`Blog`** · **`Contact`** to its right, and **four circular
  outline icon buttons** (facebook / twitter / instagram / dribbble glyphs) at the card's right
  end; the rest of the page is empty `#fafafa`.
- **New name:** `windlass` (apps/windlass, `@free-react-templates/windlass`) — a *windlass* is the
  **horizontal drum winch that hauls the anchor chain**, the deck counterpart of the `capstan`;
  it keeps the family's nautical run: **menutree** (`-01`), **slidenav** (`-02`), **navpill**
  (`-03`), **menuribbon** (`-04`), **starboard** (`-05`), **larboard** (`-06`), **topdeck**
  (`-07`), **bowsprit** (`-08`), **gangway** (`-09`), **halyard** (`-10`), **ensign** (`-11`),
  **gunwale** (`-12`), **capstan** (`-13`). Single lowercase word, kebab-safe (no hyphen needed).
  Verified 2026-10-12: `ls apps/`, `openspec/specs/` and `docs/templates/` return **zero** hits
  for `windlass`, `TEMPLATES.md` contains no such name, and
  `https://colorlib.com/wp/template/windlass/` returns **HTTP 404**, so it is not a ColorLib
  source name either. The source name "Website Menu V14", its `Digital` wordmark, its five labels,
  its four platforms and its `Website menu #04` heading are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V14" (source slug `website-menu-14`,
  https://colorlib.com/wp/template/website-menu-14/), `datePublished` **2021-03-09**, rewritten in
  the 2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no Bootstrap files, no
  images** in the download. Design-wise this is the family's **"white floating card + right-aligned
  rows + pink accent + social row"** variant: a centred heading, then a **white, `5 px`-rounded
  card with a soft shadow** over a **`#fafafa`** page, holding the wordmark (left), **five rows
  right-aligned by `margin-left:auto`** (middle-right) and **four circular icon buttons**
  (`order:13`, far right); the only accent is the **pink `#fc7fb2`** used for the current row's
  label, the row hover and the circle hover fill. There is **no dropdown, no search field, no
  underline/slab affordance** in this sheet. A `992 px` breakpoint turns the card **`#000`** and
  stacks the five rows into a collapsing panel; below ~`420 px` the one-line header wraps to two
  lines. The page contains **only** the heading and the card — no content sections, no images, no
  footer, nothing sticky, and it does not scroll.
- **CSS namespace:** the sheet (14,904 B, **140** rule blocks, **19** `@media` blocks, **zero**
  `sticky`/`fixed` declarations) is self-contained and `cl-`-prefixed for its utilities
  (`cl-container`, `cl-row`, `cl-col-md-6`, `cl-text-center`, `cl-justify-content-center`,
  `cl-order-lg-last`, `cl-mr-md-3`, `cl-ml-auto`, `cl-mb-0`, `cl-mb-5`, `cl-d-flex`,
  `cl-align-items-center`, `cl-sr-only`, `cl-navbar`, `cl-navbar-expand-lg`, `cl-navbar-brand`,
  `cl-navbar-nav`, `cl-nav-item`, `cl-nav-link`, `cl-navbar-toggler`, `cl-navbar-collapse`,
  `cl-collapse`, `cl-collapsing`, `cl-show`, `cl-icon`, `.fa`) and is a hand-rolled
  Bootstrap-4-look-alike — **not** a framework skin. Its first ~115 lines are a
  `:where(html) … all: revert` reset so the snippet renders identically inside a Bootstrap host
  page, then a `*{box-sizing:border-box}` normalize, the framework base (`.cl-container`
  tiers, `.cl-navbar*`, `.cl-collapse*`, `@media print` incl. `@page{size:a3}`), and then the
  ~145-line custom block (`body`, `a`, `h2`, `.ftco-section`, `.heading-section`,
  `.ftco-navbar-light`, `.cl-navbar-brand`, `.cl-navbar-nav`, `.cl-nav-link`,
  `.cl-navbar-toggler`, `.social-media`) — it is the **leanest** sheet of the family so far
  (14,904 B vs the `-13` sibling's 21,762 B: **no** `.searchform`/`.cl-form-control`,
  **no** `.cl-dropdown*`, **no** `cl-navbar-dark`/`cl-bg-dark`, **zero** occurrences of
  `dropdown`, `form-control` or `searchform`).
- **HTML structure (live preview, 3,336 B — archive twin 3,133 B):** document order is exactly —
  (1) `section.ftco-section` › `div.cl-container` › `div.cl-row.cl-justify-content-center` ›
  `div.cl-col-md-6.cl-text-center.cl-mb-5` › `h2.heading-section` reading **`Website menu #04`**,
  (2) a second `div.cl-container` › `nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.ftco_navbar.
  ftco-navbar-light` › `div.cl-container` with **four** children in this order — the brand, the
  social block, the toggler `button`, the collapsible `div`, (3) `script`. In detail:
  - **`a.cl-navbar-brand[href="index.html"]`** reading **`Digital`** — the **first** child of the
    card's container and the only anchor in the chrome with a real destination;
  - **`div.social-media.cl-order-lg-last`** › `p.cl-mb-0.cl-d-flex` › **four**
    `a[href="#"]` in this order — `.cl-d-flex.cl-align-items-center.cl-justify-content-center`
    each wrapping `span.fa.fa-facebook` / `fa-twitter` / `fa-instagram` / `fa-dribbble`, each
    holding an `<i class="cl-sr-only">` with the platform name (Facebook, Twitter, Instagram,
    Dribbble) as its **only** accessible name. The block is **second in DOM, last visually** on
    desktop (`order:13` from `cl-order-lg-last`);
  - **`button.cl-navbar-toggler[type="button"][data-toggle="collapse"][data-target="#ftco-nav"]
    [aria-controls="ftco-nav"][aria-expanded="false"][aria-label="Toggle navigation"]`** ›
    `span.fa.fa-bars` › an inline **SVG** 3-bar glyph (`viewBox="0 0 1536 1792"`, wrapped in
    `<g transform="translate(0,1536) scale(1,-1)">`, `class="cl-icon"`,
    `style="vertical-align:-0.1429em"`, `aria-hidden="true"`, `focusable="false"`) plus the
    literal text **`Menu`** — the toggler is **third in DOM**;
  - **`div#ftco-nav.cl-collapse.cl-navbar-collapse`** › `ul.cl-navbar-nav.cl-ml-auto.cl-mr-md-3`
    with **five `li.cl-nav-item`** in source order: **Home** (`cl-active`), **About**, **Work**,
    **Blog**, **Contact** — every row a dead `href="#"`.
  - **Anchors:** the live page holds **10** anchors — the wordmark's real `index.html` plus **9**
    dead `href="#"` (five rows, four social). There is no second page to probe; the recreation
    must materialise all **nine** as real destinations.
- **Measurements (live preview, Chromium, DPR 1, read 2026-10-12; the sheet was fetched by curl
  **and** by the browser and the two copies are byte-identical, sha256 `78cdb908…`, so every token
  below is confirmed by the source CSS, and every geometry figure was **cross-checked against the
  rendered pixels** of a 1440 px screenshot. Note for the next session: reading
  media-query-dependent computed styles through CDP `Emulation.setDeviceMetricsOverride` was
  **unreliable** here — the style/box reads kept returning the `991.98 px` branch while the render
  was clearly the desktop one (**40 px** circles, black wordmark). Screenshot pixels are the
  authority; the sheet is the token authority.)**
  - **`h2`:** 28 px / 400 / `line-height:1.5` (42 px) / `#000` / centred (`.cl-text-center`),
    `margin-bottom:8px` (default) + `.cl-mb-5` **48 px**; the `cl-col-md-6` column is
    `flex:0 0 50%; max-width:50%` at ≥768 px and `100 %` below.
  - **Heading band:** `section.ftco-section{padding:7em 0}` = **112 px** top/bottom over the
    page's **`#fafafa`** → **112 + 42 + 8 + 48 = 210 px** to the card's top edge at every width
    (measured `nav.y = 210` at 1440 px).
  - **The card (`nav.ftco-navbar-light`):** **`background:#fff !important`**, `z-index:3`,
    **`padding:10px`**, **`border-radius:5px`**,
    `box-shadow:0px 5px 20px -17px rgba(0,0,0,0.34)`, `position:relative` (**not sticky** — the
    sheet contains **zero** `sticky`/`fixed`). Measured **1110 × 84 at `x = 165, y = 210`** at
    1440 px (the width of the outer container's content box). Below `992 px`:
    `background:#000 !important`, `padding:10px 15px`, `position:relative; top:0`, measured
    **1110→100 %** wide and **66 px** tall at 991/768/420 px.
  - **Containers:** outer `div.cl-container` — `max-width` tiers **540/720/960/1140** with
    `padding:0 15px`, `margin:auto`; the card is a **child of it** and is `width:100%` of that
    content box (measured `x = 165 → 1275` at 1440 px). Inner `div.cl-container` is the card's own
    flex row: measured **1090 px** at 1440/1200, **910 px** at 1100/992 (**`padding:0`** inside the
    card below 992 px — `.cl-navbar-expand-lg > .cl-container{padding-right:0; padding-left:0}`),
    whose content box is **1060 px** at ≥1200 px. Laid out left→right at 1440 px: the wordmark
    (measured **78.5 × 46 at `x = 190`**), the right-aligned row list (**383 px**, ending 16 px
    before the circles), then the four circles (**40 px** boxes with **4 px** gaps, pixel-measured
    ring boxes at `x = 1067–1106, 1111–1150, 1155–1194, 1199–1238`, i.e. a 176 px block with the
    trailing 4 px margin ending flush with the card's inner right edge).
  - **Wordmark (`a.cl-navbar-brand`):** own-brand text, **`font-size:1.25rem` = 20 px**,
    `text-transform:uppercase`, `font-weight:700`, `line-height:36px` (inherits `body` 1.8),
    `color:#000`, `padding:5px 0`, `margin-right:16px`, `display:inline-block`,
    `white-space:nowrap`; measured **79 × 46** in the **84 px** card line. It **never changes
    colour on hover** (`.cl-navbar-brand:hover,:focus{color:#000}` = the resting colour). Below
    `992 px`: **`#fff`**.
  - **Rows (`ul.cl-navbar-nav.cl-ml-auto.cl-mr-md-3`):** `display:flex; flex-direction:row` at
    ≥992 px, pushed **right** by **`margin-left:auto`** plus **`margin-right:1rem`** (16 px) at
    ≥768 px; measured **383 × 63.6** — i.e. the list ends **16 px left of the social block**, which
    itself sits flush with the card's inner right edge. Each
    `.cl-nav-item > .cl-nav-link` is **`font-size:14px`**, `font-weight:400`,
    **`padding:1.2rem 20px`** (**19.2px 20px**), `color:#333333`, `position:relative`,
    `opacity:1 !important`, `line-height:25.2px` → **63.6 px** rows (the card's 84 px = 10 + 64 +
    10). Hover → **`#fc7fb2`**; the **current** row (`.cl-nav-item.cl-active > a`) → **`#fc7fb2`**
    at rest on desktop (the `Home` label's ink was sampled at `rgb(252,135,187)` in the 1440 px
    render).
  - **The accent is text-only:** this sheet defines **no** `.cl-nav-link:before` underline, no
    slab, no `border-bottom` — pink appears only as `color` on hover/active rows and as the social
    circle's hover **background/border** fill. Do **not** reuse the `-13` sibling's teal underline
    wipe or the `-12` sibling's gold slab.
  - **Social circles (`.social-media p a`):** desktop **`width:40px; height:40px;
    border:1px solid #e6e6e6; border-radius:50%; margin-right:4px`**, `display:flex` with the
    icon centred (`.cl-d-flex.cl-align-items-center.cl-justify-content-center`), glyph colour
    **`#4d4d4d`**, block `order:13` (`cl-order-lg-last`) → a **176 px** block (four 40 px rings with
    4 px gaps, pixel-measured at `x = 1067 → 1242` at 1440 px) sitting at the card's right end;
    hover → **`background:#fc7fb2; border-color:#fc7fb2`** and the glyph **`#fff`**. Because the
    preview ships **no icon font** (`.fa` is only `display:inline-block; line-height:1; font-size:inherit`),
    the four `span.fa` glyphs render **0 × 0 px** in the live preview — the pre-rebuild look, with
    real Facebook/Twitter/Instagram/Dribbble marks, survives **only** in ColorLib's marketing
    screenshot. The recreation must draw its own **inline-SVG brand marks** inside the same 40 px
    circles and keep the platform names as accessible labels.
  - **Toggler (`button.cl-navbar-toggler`):** `border:none`, **`color:rgba(255,255,255,0.5)
    !important`**, `cursor:pointer`, `padding-right:0`, `text-transform:uppercase`,
    `font-size:16px`, `letter-spacing:.1em`, focus `outline:none !important`; content = the inline
    three-bar SVG + the word **`Menu`**. Measured **~93 × 25** at the container's right at 420 px
    (centre `x = 347`), `display:none` at ≥992 px.
  - **Mobile panel (`div#ftco-nav.cl-collapse.cl-navbar-collapse`):** the wrapper carries
    `flex-basis:100%; flex-grow:1; align-items:center` **outside** any media query, so when the
    toggler opens it the panel takes a **full-width line of its own below** the wordmark/social/
    toggler line — measured **360 × 216 at 420 px** with the card growing **66 → 282 px**; the
    five rows stack in a `flex-direction:column` list (`padding-bottom:10px`) with
    **`padding:.5rem 0`** (8 px) per row, resting **`rgba(255,255,255,0.7)`**, hover **`#fff`**,
    current row **`#fff`** (`.cl-nav-item.cl-active > a{color:#fff}` inside the `991.98 px`
    block), horizontal padding `0`.
  - **Wrap point:** at **375** and **320 px** the card is **91 px** tall — the wordmark + social
    block + toggler no longer fit on one 315/260 px line, so the header wraps to two rows. There is
    no media query for this; it is plain flex wrapping.

## Breakpoint behaviour (values measured on the live preview and derived from its sheet)

| Width | Card | Card bg | Card height | Wordmark | Rows | Social circles |
| --- | --- | --- | --- | --- | --- | --- |
| 320 | 100 % of container (260 content) | **`#000`** | **91** (wrapped to two lines) | `#fff` | panel only (toggler) | 30 × 30, `1px #fff` |
| 375 | 345 @ `x = 15` | **`#000`** | **91** (wrapped) | `#fff` | panel only | 30 × 30, `1px #fff` |
| 420 | 390 @ `x = 15` | **`#000`** | **66** | `#fff` | panel only | 30 × 30, `1px #fff` |
| 768 | 720 @ `x = 24` | **`#000`** | **66** | `#fff` | panel only | 30 × 30, `1px #fff` |
| 991 | 720 @ `x = 135.5` | **`#000`** | **66** | `#fff` | panel only | 30 × 30, `1px #fff` |
| 992 | 910 inner @ `x = 41` | `#fff` + shadow | **84** | `#000`, 79 × 46 | `flex` row, right-aligned, 383 × 64 (ends 16 px left of the circles) | 40 × 40, `1px #e6e6e6` |
| 1200 | 1090 inner | `#fff` + shadow | **84** | `#000` | right-aligned, 383 × 64 | 40 × 40 |
| 1440 | 1090 inner | `#fff` + shadow | **84** | `#000`, ink at `x = 190` | right-aligned, 383 × 64 | 40 × 40, rings at `x = 1067 → 1238` (pixel-verified) |

The card sits at **`y = 210`** at every width; the only layout change at `992 px` is the card's
background, height, wordmark colour, the appearance of the toggler and the disappearance of the
row list (all from the single `@media (max-width:991.98px)` block).

## Type and colour summary

- `body{font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
  font-weight:normal; background:#fafafa; color:gray}` (`gray` = `#808080`) — this variant's page
  is **`#fafafa`** (the `-13` sibling's is pure `#fff`), which is what makes the white card read
  as a floating card.
- `a{transition:.3s all ease; color:#fc7fb2}` — **inline links are the same pink as the accent**;
  `a:hover,a:focus{text-decoration:none !important; outline:none !important; box-shadow:none}`.
- `h2,.h2{line-height:1.5; font-weight:400; font-family:"Poppins", Arial, sans-serif; color:#000}`
  + `.heading-section{font-size:28px; color:#000}` (28 px wins over the framework's `2rem` = 32 px).
- **No webfont is loaded at all.** The live page's only `<link>` is the sheet itself (plus a
  `cdnjs.cloudflare.com` `dns-prefetch` that is never used): there is **no Google Fonts request**
  and **no `@font-face` for Poppins** anywhere, so `"Poppins", Arial, sans-serif` resolves to
  **Arial** in the source. The eight self-hosted **Roboto** woff2 files (which *do* resolve,
  `fonts/roboto-400-latin.woff2` → HTTP 200, 37,520 B) are declared only for **400/700** — the
  **100/300** files are never even declared — and the declared ones are still dead because the
  custom `body` rule's Poppins stack wins: **247,856 B of dead font payload, 96.4 % of the
  257,214 B download**. The four latin-ext files are **byte-identical to each other**
  (sha256 `cdd53dc5…`) and so are the four latin files (sha256 `0a44e0bb…`) — two distinct
  payloads shipped eight times.
- Token table: accent pink `#fc7fb2` (current/hover row label, circle hover fill + border) · page
  `#fafafa` · card `#fff` (mobile `#000`) · wordmark `#000` (mobile `#fff`) · rows `#333333`
  (mobile `rgba(255,255,255,.7)`, hover mobile `#fff`, current mobile `#fff`) · circle ring
  `#e6e6e6` (mobile `#fff`) · circle glyph `#4d4d4d` (mobile `#fff`) · heading `#000` · body ink
  `gray`/`#808080` · toggler `rgba(255,255,255,.5)` · card radius **`5px`** · circle radius
  **`50%`** (40 px desktop / 30 px mobile) · card shadow
  `0 5px 20px -17px rgba(0,0,0,.34)`.

## Fidelity pitfalls (things that will bite an implementer)

1. **The card is WHITE, `5 px`-rounded and casts a soft shadow on a `#fafafa` page** — *not* the `-13`
   sibling's transparent, hairline-bounded strip, and *not* the `-12` sibling's solid dark bar.
   Painting it flat white over `#fff`, or dropping the radius/shadow, destroys the design. It turns
   **`#000` only below `992 px`**.
2. **The card keeps its 5 px radius and its shadow on mobile too** — only the background flips to
   `#000` (the box-shadow is invisible against black but the radius is not).
3. **Rows are RIGHT-aligned** by **`margin-left:auto`** (+ `margin-right:1rem`), because the social
   block is `order:13`. They are not centred (that is `-13`'s `cl-m-auto`) and not left-pinned
   next to the wordmark (that is `-12`'s `margin-right:auto`).
4. **Pink is text-only: there is no underline, no slab, no fill and no dropdown here.** Copying the
   `-13` sibling's `:before` underline wipe is wrong; the sheet contains **no** `.cl-nav-link:before`
   rule at all.
5. **Five rows** — `Home` (current) · `About` · `Work` · `Blog` · `Contact`. Do not import the
   six-row or seven-row lists of the CSS-only siblings.
6. **There is no dropdown and no search field** — the sheet has **zero** occurrences of
   `dropdown`, `form-control` or `searchform` (that is the `-13` sibling's furniture, 6.8 kB of
   CSS that this variant does not ship).
7. **The social circles are the only place a real icon is needed, and the source's preview renders
   them 0 × 0 px** (`.fa` spans with no Font Awesome `/` not even a webfont — only ColorLib's
   screenshot shows the marks). Recreation: **inline-SVG brand marks** (`Facebook`,
   `Twitter`, `Instagram`, `Dribbble` — lucide-react ships **no** brand icons) inside the same
   40 px / 30 px circles, each link carrying the platform name as its accessible
   name (the source's names live in `<i class="cl-sr-only">` inside the glyph span).
8. **Circle geometry changes at the breakpoint:** `40 px` boxes with a **`1px #e6e6e6`** ring and
   `#4d4d4d` glyphs ≥992 px; **`30 px`** boxes with a **`1px #fff`** ring and **white** glyphs
   below. `margin-right:4px` between them in both.
9. **The mobile panel is a full-width in-flow line** (`flex-basis:100%`), not a dropdown overlay:
   the card grows from **66 px** to **282 px** (measured at 420 px) and the rows stack in a column
   with `padding-bottom:10px`.
10. **Below ~`420 px` the header wraps to two lines** (`91 px` at 375/320 px) — no media query
    declares this; it is flex wrapping of wordmark + social + toggler. A recreation that forces one
    line overflows horizontally.
11. **The current row's label is pink on desktop (`#fc7fb2`) but WHITE on mobile** — the `991.98 px`
    block overrides `.cl-nav-item.cl-active > a` to `#fff`.
12. **Nothing is sticky** and the page does not scroll in the source (`innerHeight ===
    scrollHeight`): the recreation adds real content below the card, and the card must scroll away
    with it.
13. **No webfont ships**, so the source renders Arial: add one Google Fonts `<link>` for Poppins
    (delta) rather than copying eight dead Roboto woff2 files.
14. **Dead code to drop:** the `:where(html) … all: revert` reset, the `@media print` block (incl.
    `@page{size:a3}`), the unreferenced `.fade` rules (3), the unreferenced `.nav` rule, the
    Bootstrap `#007bff`/`#0056b3`/`#6c757d`/`#212529`/`#f8f9fa` palette, the framework
    `.cl-navbar-toggler` radius, the `.disabled` `#6c757d` state, the JS's `cl-collapsed` class
    (the sheet styles **no** rule for it — **zero** occurrences), the system `Roboto` font stack,
    and all eight Roboto woff2 files.

## Requirements

### Feature: Heading band

#### Scenario: Band spacing and the card's landing point

- **Given** a viewport ≥ 768 px
- **When** the heading band is measured
- **Then** the page background is **`#fafafa`** and the band carries `padding:112px 0` (`py-28`)
- **And** the heading is **28 px / 400 / `line-height:1.5` (42 px) / `#000`**, centred, in a column
  that is `50%` at ≥768 px and `100%` below, with an `8px` margin-bottom plus a `48px` block margin
- **And** the card's top edge lands exactly **210 px** below the page top at every width
  (112 + 42 + 8 + 48)

#### Scenario: The heading is own copy

- **Given** the app renders
- **Then** the string `Website menu #04` never renders
- **And** the app contains **zero** `colorlib`/`website-menu-14` strings

### Feature: Floating white card

#### Scenario: Desktop chrome

- **Given** a viewport ≥ 992 px
- **When** the card is measured
- **Then** its background is `rgb(255,255,255)` with **`padding:10px`**, **`border-radius:5px`**
  and **`box-shadow:0 5px 20px -17px rgba(0,0,0,0.34)`**, and it has **no** hairline borders
- **And** it is `position:relative` (**never** `sticky`/`fixed`) and measures ≈ **84 px** tall at
  `y = 210` at 1440 px, ≈ 1110 px wide (the outer container's content box)

#### Scenario: The radius and the shadow survive the breakpoint

- **Given** a viewport < 992 px
- **Then** the background is `rgb(0,0,0)` and `padding` is `10px 15px` (**66 px** tall)
- **And** the `5 px` radius and the shadow declaration are **unchanged**

#### Scenario: No sticky behaviour

- **Given** the app rendered with real content below the card
- **When** the page is scrolled
- **Then** the card moves out of the viewport (a negative `y`) and the app carries no
  `sticky`/`fixed` header rule

#### Scenario: Container tiers

- **Given** each measured width
- **Then** the outer container is **1140 px** (≥1200), **960 px** (≥992), **720 px** (≥768) and
  **345 px** at 375 px, with `15 px` gutters **and no card gutters** below `992 px`
- **And** the card's own flex row is **1090 px** at 1440/1200 px and **910 px** at 992 px

### Feature: Single-line wordmark

#### Scenario: Wordmark type, colour and hover

- **Given** any width
- **When** the wordmark is measured
- **Then** it is own copy (never `Digital`), `text-transform:uppercase`, **20 px / 700**, with
  `padding:5px 0`, `margin-right:16px`, one line only, ≈ **78.5 × 46** inside the 84 px card line
- **And** it is **`#000`** at ≥992 px and **`#fff`** below, links to the top of the page, keeps a
  visible focus ring and its colour is identical at rest and on hover

### Feature: Right-aligned five-row list with the pink current row

#### Scenario: Rows, order and alignment

- **Given** a viewport ≥ 992 px
- **Then** exactly **five** rows render in source order — current, then the four plain ones —
  inside a list pushed **right** by `margin-left:auto` plus `margin-right:1rem`
- **And** the list measures **383 × 63.6**, ending **16 px left of the social block**
- **And** below `992 px` the list is not shown as rows until the toggler is activated

#### Scenario: Row tokens and the pink accent

- **Given** a rendered row
- **Then** its link is **14 px / 400 / `#333333`** with `padding:19.2px 20px` (**63.6 px** tall)
- **And** hovering it turns its label **`#fc7fb2`**; the current row's label is **`#fc7fb2`** at
  rest on desktop with `aria-current="page"` and **`#fff`** below `992 px`
- **And** there is **no** underline, slab or background on either state — this sheet accents with
  `color` only

#### Scenario: Focus affordance

- **Then** every row shows a visible `focus-visible` ring (a delta: the source sets
  `outline:none !important`)

### Feature: Social circle buttons

#### Scenario: Circle geometry

- **Given** a viewport ≥ 992 px
- **Then** **four** circle links render, **40 × 40**, `border-radius:50%`, `1px solid #e6e6e6`,
  glyph `#4d4d4d`, `margin-right:4px` apart
- **And** the block is moved to the card's far right (`order:13`) and measures **176 px**, its
  trailing margin flush with the card's inner right edge
- **And** below `992 px` the circles are **30 × 30** with a `1px #fff` ring and a white glyph, and
  they stay inline in the header row

#### Scenario: Hover fill

- **Given** a hovered circle
- **Then** its background **and** border become `#fc7fb2` and its glyph becomes `#fff`; at rest the
  background is transparent

#### Scenario: Real icons, real destinations

- **Then** each link carries a real **inline-SVG brand mark** (the source's `span.fa` glyphs
  render **0 × 0 px** because the preview ships no icon font)
- **And** each link carries its platform as an accessible name and points at a real external
  profile, opening in a new tab with `rel="noreferrer"`

### Feature: Mobile card and the full-width collapse panel

#### Scenario: Mobile chrome

- **Given** a viewport < 992 px
- **Then** the card is `rgb(0,0,0)`, **66 px** tall at 420–991 px, `padding:10px 15px`
- **And** the wordmark and the circle glyphs are white, the toggler (**third in DOM**) is visible,
  and the five rows are hidden until it is activated

#### Scenario: The toggler and the panel

- **Given** the toggler is activated
- **Then** `aria-expanded` becomes `"true"` and the panel animates its height over **`0.35s ease`**
  (removed under `prefers-reduced-motion: reduce`)
- **And** the panel takes a **full width line below** the header row (`flex-basis:100%`, measured
  **360 × 216** at 420 px with the card growing **66 → 282 px**)
- **And** the five rows stack in a column with `padding:.5rem 0` each and `padding-bottom:10px` on
  the list, resting **`rgba(255,255,255,0.7)`**, with hover and the current row **`#fff`**
- **And** a second activation reverses the animation, sets `aria-expanded="false"` and hidden rows
  are not focusable

#### Scenario: The wrap point

- **Given** a viewport of 375 px or 320 px
- **Then** the header wraps to two lines (the card measures **91 px**) with **no horizontal
  overflow** (`scrollWidth === innerWidth`)

### Feature: Materialised destinations

#### Scenario: No dead links

- **Then** the app contains **zero** `href="#"`; each of the five rows resolves to a real
  `id`/route and each of the four circle links to an external profile URL

#### Scenario: Real content replaces the blank page

- **Then** sections of the source's *kinds* carry own copy — an intro/home block for the wordmark, a
  current-page block, blocks for the plain rows and a contact/about block for the social links —
  each target with `scroll-margin-top` ≥ 64 px
- **And** the page is taller than the viewport, so the non-sticky card genuinely scrolls away; any
  imagery (the source ships none) comes from `https://picsum.photos/seed/windlass-<n>/<w>/<h>`

### Feature: Footer and attribution

#### Scenario: Component Dock credit

- **Then** exactly one `https://www.componentdock.com/` link branded "Component Dock" (new tab,
  `rel="noreferrer"`) and a computed current year render in the footer — a documented delta, since
  the source has no footer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/windlass/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/windlass/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `openspec/specs/template-windlass/spec.md` present; `npm run spec:validate` green
- [x] `apps/windlass` scaffolded from the simplest existing app; package
      `@free-react-templates/windlass`; `"homepage": "https://windlass.free.componentdock.com"`;
      `public/CNAME` = `windlass.free.componentdock.com`; `vite.config.ts` keeps `injectUiSource()`
- [ ] `npm install` at repo root registers the workspace
      (`grep -c "free-react-templates/windlass" package-lock.json`)
- [ ] Heading band: `padding:112px 0` over **`#fafafa`**; heading **28 px / 400 / lh 1.5 / #000**
      centred with a `48 px` bottom margin → card top at **`y = 210`**
- [ ] Card: **`#fff`**, `padding:10px`, **`border-radius:5px`**,
      shadow `0 5px 20px -17px rgba(0,0,0,0.34)`, `position:relative` (**no** `sticky`/`fixed`),
      ≈ **84 px** tall, ≈ 1110 px wide at 1440 px (container content box); **no** hairline borders
- [ ] Wordmark: own copy, single line, `20 px`/`700`/uppercase, `#000` (`#fff` below 992 px),
      `py-[5px] mr-4`, ≈ `79 × 46`, **no hover colour change**
- [ ] **Five** rows in order (`current / About / Work / Blog / Contact`), list **right-aligned** by
      `margin-left:auto` + `margin-right:1rem`, `14 px / 400 / #333333`, `padding:19.2px 20px`
      (63.6 px tall), **383 × 64** at 1440 px
- [ ] Accent: hover row `#fc7fb2`, current row `#fc7fb2` at rest (desktop) and `#fff` (mobile);
      **no** underline, slab or background; `aria-current="page"` + visible `focus-visible` ring
- [ ] Social: **four** circles in order, `40 px` / `1px #e6e6e6` / `#4d4d4d` at ≥992 px and
      `30 px` / `1px #fff` / `#fff` below, `margin-right:4px`, `border-radius:50%`, block last on
      desktop; hover fills `#fc7fb2` border **and** background with a white glyph; real
      **inline-SVG brand marks** with platform accessible names and real external hrefs
      (`target="_blank" rel="noreferrer"`)
- [ ] Mobile <992 px: card `rgb(0,0,0)`, **66 px** (91 px at ≤~420 px), wordmark + glyphs white,
      toggler **third in DOM** (`rgba(255,255,255,.5)`, `16 px`, `letter-spacing:.1em`, `border:none`),
      `aria-expanded`/`aria-controls` truthful, panel **full width below the header row**
      (`flex-basis:100%`), `0.35s ease` height animation, rows `rgba(255,255,255,.7)` (hover/current
      `#fff`), `padding:.5rem 0`, `padding-bottom:10px` on the list
- [ ] Nine dead `href="#"` materialised (five in-app destinations + four external profiles);
      **zero** `href="#"`; real sections so the card scrolls away; imagery via
      `picsum.photos/seed/windlass-<n>/...` if used
- [ ] Accessibility: named toggler (`aria-label`) + bars glyph, labelled/named social links,
      `aria-current="page"` on the current row, visible `focus-visible` rings everywhere (the
      source sets `outline:none !important`), hidden panel not focusable, reduced-motion handling,
      no horizontal overflow at 320 px
- [ ] Shape language: the **only** rounding is the card's **`5 px`** and the circles' **`50%`**;
      no pills, no card hairline borders, no `4 px` panels (this variant has none)
- [x] Zero `colorlib` / "Website Menu 14" / `website-menu-14` strings in `apps/windlass` (comments
      included); none of the source's five labels, its `Digital` wordmark, its four platform names
      or its `Website menu #04` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead
      weight — 247,856 B of the 257,214 B download), no inline SVG `<path>` data from the preview,
      no `cl-`/`ftco-` utility classes, no jQuery/Bootstrap, no Font Awesome
- [ ] Dead source code dropped: the `:where(html) … all: revert` reset, the `@media print` block
      (incl. `@page{size:a3}`), the unused `.fade` (3) and `.nav` rules, the Bootstrap palette
      (`#007bff`/`#0056b3`/`#6c757d`/`#212529`/`#f8f9fa`), the `cl-collapsed` class the sheet never
      styles, the system `Roboto` font stack, all Roboto woff2 files
- [ ] Google Fonts Poppins `<link>` in `index.html` (**delta** — the source loads no webfont at all
      and renders Arial); icons from `lucide-react`
- [ ] `scripts/verify-app.sh windlass` green (typecheck + lint + knip + fallow + vitest 100 % +
      build)
- [ ] Footer attribution present; squash-merge the PR; mark the TEMPLATES.md `Website Menu 14` item
      `[x]` with the live `https://windlass.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Deltas (deliberate, to record in the PR)

- **New name + own copy:** `windlass`, own wordmark, own five labels, own social platforms, own
  heading — never `Digital`, `Home`/`About`/`Work`/`Blog`/`Contact`, `Website menu #04` or
  "Website Menu V14" verbatim.
- **Nine dead `href="#"` materialised** as five real in-app destinations with `scroll-margin-top`
  plus four real external platform profiles; the source's blank `#fafafa` below the card becomes
  real content.
- **Real icons:** inline-SVG platform marks inside the same 40 px / 30 px circles — the source's
  `span.fa` glyphs render 0 × 0 px in the live preview (no icon font, no `@font-face` for
  Font Awesome) and only its marketing screenshot shows the marks.
- **A real webfont:** one Google Fonts `<link>` for **Poppins 400/500/700** — the source declares
  `"Poppins", Arial, sans-serif` but loads **no** webfont at all (it renders Arial) and ships
  **247,856 B** of Roboto woff2 files that never render.
- **Accessibility restored** wherever the source removes it: visible `focus-visible` rings on the
  wordmark, every row, the circles and the toggler (`outline:none !important` in the source);
  `aria-expanded`/`aria-controls` on the toggler and a truthful collapsed state; the social links
  keep their accessible platform names (the source buries them in `<i class="cl-sr-only">` inside an
  unrendered glyph); `aria-current="page"` on the current row.
- **Reduced-motion handling** for the `.35s` collapse animation.
- **An added footer** linking `https://www.componentdock.com/` ("Component Dock") with a computed
  year — the source has no footer at all.
