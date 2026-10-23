# Template: Spinnaker (Website Menus)

## Purpose

Spinnaker is the *Website Menus* family's **mega-menu variant** — the first sibling whose dropdown is a
**full-bar-width panel of four `25 %` columns** (four plain links in the first column, three
**image cards** — a `250 px`-tall cover image, an `16 px`/`600` title and an `14 px`
`rgba(0,0,0,0.2)` meta line — in the other three), and the first that ships **its own images**. The
chrome is the family's normal one: a centred heading band (`padding:112px 0`) over a **`#fafafa`**
page, then the **dark rounded bar itself inside a `.cl-container` tier** — **`#1c2938` navy**,
`padding:10px`, **`border-radius:5px`**, `box-shadow:0 5px 20px -17px rgba(0,0,0,.34)` — which is the
family's first **inset** (not full-bleed) bar with the brand at its left and the list pushed right by
`margin-left:auto`. The bar's four rows are **`14 px`/`400` `#e6e6e6` at `padding:19.2px 20px`** →
**`63.6 px`** tall (the bar is **`83.6 px`** at `y = 210`), their hover ink is the variant's accent
**`#fec771` amber** — the sheet's own `a` colour — and the amber also fills hovered mega-menu items.
The fourth row opens the **mega panel**: **`100 %` of the bar's width** (measured **`1110 × 370.8`** at
1440 px), `left:0`, `top:100%`, `margin-top:2px`, white, `border:none`, `border-radius:4px`,
`padding:24px`, `box-shadow:0 10px 34px -20px rgba(0,0,0,.41)`, anchored to the **bar** (because the
trigger's `li` carries `cl-position-static`), so it hangs flush with the bar's left and right edges.
Its four columns sit in an inner `cl-row` (`margin:0 -15px`, `15 px` gutters); the first column's four
`12 px` `#000` items are **`243 × 52.6`** with `padding:15px 20px` and a
`1px solid rgba(0,0,0,0.1)` bottom rule, and the three card columns hold a **`243 × 250`** cover image
(`margin-bottom:20px`) over the title/meta lockup (**measured `243 × 52.8`**). Below **`992 px`** the
bar turns **`#000`** with `padding:10px 15px`, collapses to **`66 px`**, and shows a `☰ MENU` toggler
(`rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`, an inline bars glyph plus the word
`Menu`); the panel becomes an **in-flow full-width block** that is **`#202020`**, `padding:0`, and
renders the mega menu **`position:static`** inside it (its rows `rgba(255,255,255,0.8)` over
`rgba(255,255,255,0.1)` rules) — but, unlike the `-16`/`-17` siblings, the submenu is **not**
permanently expanded: it still needs the hover/click toggle. Below **`768 px`** the three image
columns are hidden (`cl-d-none`), leaving only the four links.

It is an original React recreation of the ColorLib free snippet **"Website Menu V18"** (source slug
`website-menu-18`), built under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The recreation matches the source's structure, order and design tokens 1:1 but
copies no asset (no `img-1..3.jpg`, no font files, no CSS files, no inline SVG `<path>` data, no text
verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-18/ — page title *"Website Menu V18 - Free
  Mega Menu Template 2026 - Colorlib"*, **HTTP 200**, **108,883 B**, sha256
  `c0607286f96b68c3d33db4fbab2e70e875f8c39e3f45ece8fb21a5214c2a54bc`, verified 2026-10-12. Page meta:
  posted **March 9, 2021** (structured data `datePublished` **2021-03-09T14:27:42+00:00**) by
  **Rok Krivec**, `dateModified` **2026-09-25T10:42:07+00:00** (the September 2026 rebuild);
  ColorLib's own description: *"A free mega menu template with a responsive structure for images and
  text. Framework-free and Bootstrap-compatible."* September 2026 update note (verbatim): *"Updated
  September 2026: this snippet is now plain HTML and CSS plus a few lines of vanilla JavaScript: no
  jQuery, no Bootstrap files, no plugins. The download is 398 KB (it was 408 KB). Use it on its own,
  or drop it into a Bootstrap 4, 5 or 6 project and it looks the same. The collapsible sections open
  and close without Bootstrap's JavaScript. The drop-down menus work without Bootstrap's JavaScript,
  including keyboard navigation."* It is the `## Website Menus (20)` section's **eighteenth** entry,
  at **line 3090** of `TEMPLATES.md`; the slug `website-menu-18` appears exactly **once** in
  `TEMPLATES.md` and in **no** spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-18/` returns **HTTP 404** (`Not
  Found`) — like its `-01`…`-17` siblings, the *Website Menus* family does **not** live under the
  slug-only theme path; do not read that 404 as a dead preview. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-18/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **4,190 B**, `<title>Website menu 08</title>`, sha256
  `bf036207d1d69319c8d2a0a606bc22d45de3013336eca20eb69c9e5e6ecbba18`, verified 2026-10-12) — the URL
  the preview host's catalog index records for this slug. Its two assets —
  `css/style.css?v=c3576057` (**17,508 B**, `text/css`, sha256
  `a443a4abc579eccf0a68f70b4550f6820dba3588fb85a5f7d587e9fd76afadf5`) and
  `js/snippet.js?v=ff9c894b` (**5,798 B**, `application/javascript`, sha256
  `1f0367faf0df7c49abcb4d3a989daf490aa8181d31a1f55ccea0995ae5560966`) — are **byte-identical** (same
  sha256, verified) to the copies in the snippet's own downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-18.zip` (**HTTP 200**, `application/zip`,
  **407,923 B**, sha256 `3a4aeb8718841ea10339983de42bcaeca0e602e734f81907b5a3ca165e4a0c95`; ColorLib
  rounds this to "398 KB"), which ships `index.html` (**3,987 B**), `css/style.css`,
  `js/snippet.js`, `README.md` (**1,264 B**), `images/img-1.jpg` (58,438 B, 1000 × 889),
  `images/img-2.jpg` (41,713 B, 1000 × 667), `images/img-3.jpg` (60,305 B, 1000 × 1500) and **eight**
  Roboto woff2 files (100/300/400/700 × latin/latin-ext — **247,856 B = 60.8 %** of the archive). The
  `diff` between the live page and the archive `index.html` is **head-only** (the preview host's two
  `noindex` metas, a `cdnjs.cloudflare.com` `dns-prefetch`, `fetchpriority="high"`, and the
  cache-busting query strings) — the archive is the readable, un-versioned twin of the live preview.
  Both were read for this spec and the live render was cross-checked in a browser at 1440, 1200, 992,
  991, 768, 767 and 375 px (see Design reference).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-18.jpg
  (**HTTP 200**, served as **AVIF** despite the `.jpg` name, 16,481 B, 1200 × 972, sha256
  `2d0beb892bf56d98a372f0e094e2e0e956feb2cd9c1e61afa667e31b1e3cd43c`, converted to PNG and inspected
  visually 2026-10-12). No screenshot-only fallback was needed — the live preview is the primary
  reference and the archive its readable twin. The screenshot is a browser-chrome mock of the
  rendered page **with the mega menu open**: the centred heading **`Website menu #08`**, then the
  **rounded navy bar** (`MEGAWIDTH` at its left; `Home` · `About` · `Blog` · `Page ▾` at its right,
  with **`Page` in amber** — the mock was captured with the cursor over the trigger, see Design
  reference), and directly under the bar the **white mega panel** spanning the bar's full width:
  `Page 1`…`Page 4` separated by hairlines in its first quarter, then **three image cards** (a plant
  on a wall, a vase with blossom, a pink balloon over a chair) each titled **`Amazing Architecture`**
  over **`Architect`**. The rest of the page is empty `#fafafa`.
- **New name:** `spinnaker` (apps/spinnaker, `@free-react-templates/spinnaker`) — a *spinnaker* is the
  **largest, lightest, most forward-flying sail in a ship's rig**: a wide, full-bellied canvas set
  ahead of the mast, which suits this variant as the family's **widest dropdown — one panel stretched
  across the whole bar — and its only one that carries imagery**. It continues the family's nautical
  run: **menutree** (`-01`), **slidenav** (`-02`), **navpill** (`-03`), **menuribbon** (`-04`),
  **starboard** (`-05`), **larboard** (`-06`), **topdeck** (`-07`), **bowsprit** (`-08`), **gangway**
  (`-09`), **halyard** (`-10`), **ensign** (`-11`), **gunwale** (`-12`), **capstan** (`-13`),
  **windlass** (`-14`), **davit** (`-15`), **binnacle** (`-16`), **mizzen** (`-17`). Single lowercase
  word, kebab-safe (no hyphen needed). Verified 2026-10-12: `git grep -il spinnaker origin/main`
  returns **zero** hits (so no app folder, spec, doc file or `TEMPLATES.md` name collides), and
  `https://colorlib.com/wp/template/spinnaker/`, `https://preview.colorlib.com/theme/spinnaker/` and
  `https://preview.colorlib.com/theme/bootstrap/spinnaker/` all return **HTTP 404**, so it is not a
  ColorLib source name either. The source name "Website Menu V18", its `Megawidth` brand, its four row
  labels, its four item strings (`Page 1`…`Page 4`), its `Amazing Architecture` / `Architect` card
  copy and its `Website menu #08` heading are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V18" (source slug `website-menu-18`,
  https://colorlib.com/wp/template/website-menu-18/), `datePublished` **2021-03-09**, rewritten in the
  2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no Bootstrap files**. Design-wise this
  is the family's **"inset navy rounded bar + right-aligned amber-hover rows + a full-bar-width mega
  panel with image cards"** variant. Its accent is **`#fec771` amber** — the sheet's own `a` colour
  and the mega items' hover fill — its bar is the family's first with **`border-radius:5px`**,
  **`padding:10px`** and a **`0 5px 20px -17px rgba(0,0,0,.34)`** shadow, and its dropdown is the
  family's largest: **`width:100 %` of the bar**. The bar is **in-flow and never sticky** (the sheet
  contains **zero** `sticky`/`fixed` declarations) and the page contains **only** the heading and the
  chrome.
- **CSS namespace:** the sheet (**17,508 B**, **904** lines, **121** top-level rule blocks,
  **17** `@media` blocks (13 queries + 2 `print` + 2 `prefers-reduced-motion`), **4** `@font-face`
  blocks), self-contained and `cl-`-prefixed for its
  utilities (`cl-container`, `cl-row`, `cl-col-md-3`, `cl-col-md-6`, `cl-d-none`, `cl-d-md-block`,
  `cl-position-static`, `cl-justify-content-center`, `cl-text-center`, `cl-mb-5`, `cl-p-4`,
  `cl-ml-auto`, `cl-collapse`, `cl-collapsing`, `cl-show`, `cl-dropdown*`, `cl-navbar*`, `cl-icon`,
  `.fa`, plus the variant's own `ftco`-prefixed hooks) and is a hand-rolled Bootstrap-4-look-alike —
  **not** a framework skin. Its first ~55 lines are a `:where(html) … all: revert` reset (so the
  snippet renders identically inside a Bootstrap host page), then the normalize, the framework base
  (container tiers, `cl-row`, `cl-col-md-3/6`, the utilities, `.cl-dropdown*`, `.cl-navbar*`,
  `.cl-collapse*`, `@media print` incl. `@page{size:a3}`, the Bootstrap palette), the `@font-face`
  block, and then the ~200-line custom block (`body`, `a`, `h2/h3`, `.ftco-section`,
  `.heading-section`, `.img`, `.ftco-navbar-light` + its nine descendant rules and four `@media`
  blocks, `.cl-navbar-toggler`). It contains **no `colorlib`** string except the leading comment and
  **no `sticky`/`fixed`** at all. Note it does **not** declare `.social-media`, `.searchform`, any
  `::before` row underline, `cl-container-fluid`, `cl-order-md-last` or `cl-px-md-5` — the `-16`/`-17`
  siblings' features this variant has no trace of.
- **Diff against the `-17` sibling's sheet (23,560 B)** — 6,052 B smaller, and the differences are
  exactly this variant's identity: `+` `.img` and the mega-panel/mega-card block; `+`
  `.cl-position-static`, `.cl-p-4`, `.cl-d-none`/`.cl-d-md-block`, `.cl-col-md-3`, `.cl-ml-auto`,
  `.cl-navbar-expand-lg > .cl-container{padding:0}` below `992 px`; the accent swaps
  **`#ff0000` red → `#fec771` amber**; the bar swaps **full-bleed `#252525` with `padding:0` and no
  radius → an inset `#1c2938` bar inside a `.cl-container` with `padding:10px` and
  `border-radius:5px`** and **gains** the family's old `0 5px 20px -17px rgba(0,0,0,.34)` shadow; the
  rows go **`11 px` uppercase `letter-spacing:2px` `padding:24px 20px` `#fff` → `14 px` sentence-case
  `padding:19.2px 20px` `#e6e6e6`** and the list moves from a centred `auto` margin to
  **`margin-left:auto`** (right-aligned); the `2 px` hover underline and the red pill search are
  **gone**; the brand moves **into the bar's left**; and the dropdown becomes a
  **`width:100%` four-column mega panel with `.img` cards** instead of a `160 px` item list.
- **HTML structure (live preview, 4,190 B — archive twin 3,987 B):** document order is exactly —
  (1) `section.ftco-section` (the whole page lives inside it, `padding:7em 0`), carrying
  `div.cl-container` › `div.cl-row.cl-justify-content-center` ›
  `div.cl-col-md-6.cl-text-center.cl-mb-5` › `h2.heading-section` reading **`Website menu #08`**,
  (2) inside the same section a **second** `div.cl-container` ›
  `nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.ftco_navbar.ftco-navbar-light` › `div.cl-container`
  with **three** children in this order — `a.cl-navbar-brand[href="index.html"]` reading
  **`Megawidth`**, the toggler `button`, and the collapsible `div#ftco-nav`, (3) `script`. In detail:
  - **`button.cl-navbar-toggler[type="button"][data-toggle="collapse"][data-target="#ftco-nav"]
    [aria-controls="ftco-nav"][aria-expanded="false"][aria-label="Toggle navigation"]`** ›
    `span.fa.fa-bars` › an inline **SVG** 3-bar glyph (`viewBox="0 0 1536 1792"`, wrapped in
    `<g transform="translate(0,1536) scale(1,-1)">`, `class="cl-icon"`,
    `style="vertical-align:-0.1429em"`, `aria-hidden="true"`, `focusable="false"`) plus the literal
    text **`Menu`**;
  - **`div#ftco-nav.cl-collapse.cl-navbar-collapse`** › `ul.cl-navbar-nav.cl-ml-auto` with **four
    `li.cl-nav-item`** in source order: **Home**, **About**, **Blog**, **Page**
    (`li.cl-nav-item.cl-dropdown.cl-position-static`);
  - **the mega panel (the fourth row):** `a.cl-nav-link.cl-dropdown-toggle[href="#"]
    [id="dropdown04"][data-toggle="dropdown"][aria-haspopup="true"][aria-expanded="false"]` reading
    **`Page`** › `div.cl-dropdown-menu.cl-p-4[aria-labelledby="dropdown04"]` › `div.cl-row` with
    **four `div.cl-col-md-3`** — the **first** holding four `a.cl-dropdown-item` (*Page 1*, *Page 2*,
    *Page 3*, *Page 4*), the **other three** carrying `cl-d-none cl-d-md-block` and each holding
    `a.img[style="background-image:url(images/img-N.jpg)"]` › `div.text` ›
    `h3 > a` reading **`Amazing Architecture`** + `span` reading **`Architect`**.
  - **Anchors:** the live page holds **15** anchors — the wordmark's real `index.html` plus **14** dead
    `href="#"` (four rows + four items + three `.img` anchors + three `h3` title anchors). There is no
    second page to probe; the recreation must materialise all **fourteen** as real destinations.
- **Measurements (live preview, Chromium, DPR 1, read 2026-10-12; the sheet was fetched by curl **and**
  by the browser and the two copies are byte-identical, sha256 `a443a4ab…`, so every token below is
  confirmed by the source CSS, and every geometry figure was **cross-checked against the rendered
  pixels** of screenshots at 1440, 768 and 375 px. Standing caveats for this family: a
  `getComputedStyle` read taken right after a CDP `Emulation.setDeviceMetricsOverride` can return a
  **stale pre-override value** (re-load the page after the override, and treat screenshot pixels as
  geometry authority); clicking the toggler at `≥992 px` (where it is `display:none` and the collapse
  is force-shown) wedges the panel into the `cl-collapsing` state and corrupts every height read —
  measure the desktop bar **without** touching the toggler; and an expanded mobile panel adds a
  vertical scrollbar that shifts the `cl-container` by ~7.5 px.)
  - **`h2`:** 28 px / 400 / `line-height:1.5` (42 px) / `#000` / centred (`.cl-text-center`),
    `margin-bottom:0.5rem` (8 px) + `.cl-mb-5` **48 px**; the `cl-col-md-6` column is
    `flex:0 0 50%; max-width:50%` at ≥768 px (measured **570 × 50 at `x = 435, y = 112`** at 1440 px,
    the heading itself **540 × 42 @ `x = 450`**).
  - **Heading band:** `section.ftco-section{padding:7em 0}` = **112 px** top/bottom over the page's
    **`#fafafa`**, and the section has **no horizontal padding** → **112 + 42 + 8 + 48 = 210 px** to
    the bar's top edge at every width (measured `h2.y = 112`, bar `y = 210` at 1440/1200/992/768/767/
    375 px).
  - **The bar's wrapper (`div.cl-container`):** the **second** container in the section,
    `width:100%; padding:0 15px; margin:auto` with the framework tiers — **1140 px** at ≥1200 px
    (measured `1140 @ x = 150` at 1440 px), **960** at ≥992 (measured `960 @ x = 16` at 992),
    **720** at ≥768 (measured `720 @ x = 24` at 768; `720 @ x = 135.5` at 991), **540** at ≥576
    (measured `540 @ x = 113.5` at 767), and **no `max-width`** below 576 px (measured `375 @ x = 0` at
    375 px). The bar is therefore **inset by 15 px** inside the tier — **not** full-bleed.
  - **The bar (`nav.ftco-navbar-light`):** **`background:#1c2938 !important`** (= `rgb(28,41,56)`),
    `z-index:3`, **`padding:10px`**, **`border-radius:5px`**,
    `box-shadow:0 5px 20px -17px rgba(0,0,0,0.34)`, `width:inherit`, `position:relative` (**not
    sticky** — the sheet contains **zero** `sticky`/`fixed`). Measured **`1440 px` viewport →
    `1110 × 83.6 @ x = 165, y = 210`**; **1200 → `1110 × 83.6 @ x = 45`**; **992 →
    `930 × 83.6 @ x = 31`**. Its height **83.6 px** = `10 + 63.6 + 10`, and the **`63.6 px` rows set
    it** (19.2 + 19.2 padding + 25.2 line-height).
  - **The bar's own container (`div.cl-container` inside the nav):** `padding:0 15px`,
    `display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between` (base) →
    **`flex-wrap:nowrap`** at ≥992 px (`cl-navbar-expand-lg > .cl-container`), and
    **`padding:0`** below 992 px (`@media (max-width:991.98px)`). Measured **1090 × 63.6 @ x = 175,
    y = 220** at 1440 px. It holds the brand, the toggler and the collapse.
  - **Brand (`a.cl-navbar-brand`):** **`font-size:20px`**, `font-weight:700`,
    `text-transform:uppercase`, **`color:#fff`** (both at rest and on hover/focus),
    `padding:5px 0` (`0.3125rem`), `margin-right:1rem` (16 px), `display:inline-block`,
    `white-space:nowrap`, `line-height:inherit` (**1.8** from `body` → 36 px). Measured
    **`124.4 × 46 @ x = 190, y = 228.8`** at 1440 px (5 + 36 + 5), i.e. flush with the inner
    container's content left edge.
  - **Toggler (`button.cl-navbar-toggler`):** `border:none`,
    **`color:rgba(255,255,255,0.5) !important`**, `cursor:pointer`, **`padding:4px 0 4px 12px`** (the
    variant zeroes `padding-right`), `text-transform:uppercase`, `font-size:16px`,
    `letter-spacing:.1em`, focus `outline:none !important`; content = the inline three-bar SVG
    (**13.7 × 16**) + the word **`Menu`**. Measured **`85.3 × 24.7`**, right-aligned inside the
    container (`x = 244.7` at 375 px in a 300 px content box; `x = 538.2` at 767 px), `display:none`
    at ≥992 px.
  - **List (`ul.cl-navbar-nav.cl-ml-auto`):** `display:flex; flex-direction:column` (base) →
    **`flex-direction:row`** at ≥992 px, **pushed right by `margin-left:auto`** (measured
    **613.3 px** at 1440 px); measured **`306.3 × 63.6 @ x = 943.8, y = 220`** at 1440 px (so its
    right edge, **1250.1**, is flush with the inner container's content right edge: `1275 - 15 - 10
    = 1250`). Below 992 px it is a **full-width column** with `padding-bottom:10px`.
  - **Rows (`li.cl-nav-item > a.cl-nav-link`):** **`font-size:14px`**, `font-weight:400`,
    **`padding:19.2px 20px`** (`1.2rem 20px`), **`color:#e6e6e6`**, `position:relative`,
    `opacity:1 !important`, `line-height:25.2px` → **`63.6 px`** tall. Widths measured at 1440 px:
    **Home 77.4**, **About 76.6**, **Blog 68**, **Page 84.3** (the caret adds ≈ 11.6 px). **No**
    `text-transform` (the labels render in sentence case and the sheet never sets uppercase on them —
    unlike the `-16`/`-17` siblings), **no** `::before`/`::after` decoration, **no** full-height slab,
    **no** underline. Hover → **`color:#fec771`**.
  - **Caret (`a.cl-dropdown-toggle::after`):** the framework triangle — `content:""`,
    `display:inline-block`, `border-top:.3em solid`, `border-right/left:.3em solid transparent`,
    `border-bottom:0`, `margin-left:.255em`, `vertical-align:.255em` — **is rendered**: measured
    **`8 × 4`**, `border-top-width:4px`, `border-top-color:rgb(230,230,230)` (= `currentColor`),
    `margin-left:3.57px`, `vertical-align:3.57px`, i.e. a small ▾ after `PAGE` that follows the
    label's colour. Only the `Page` row has one.
  - **The mega panel (`div.cl-dropdown-menu.cl-p-4`) — this variant's signature:** open, it measured
    **`1110 × 370.8 @ x = 165, y = 295.6`** at 1440 px — i.e. **the bar's exact width and left edge**
    (`width:100%`, `left:0`, `top:100%`) with a **2 px** gap (`margin:.125rem 0 0`; 210 + 83.6 + 2 =
    295.6). Surface **`#fff`**, **`border:none`**, **`border-radius:4px`**,
    `box-shadow:0 10px 34px -20px rgba(0,0,0,0.41)`, **`padding:24px`** (`cl-p-4` = `1.5rem`),
    `min-width:160px`/`font-size:1rem`/`z-index:1000` inherited from the framework base but never
    binding. At **1200 px** it is `1110 × 370.8 @ y = 295.6`; at **992 px** `930 × 370.8` — the height
    is constant from 992 px up because all three card titles stay on **one line**. It is anchored to
    the **bar**, not the trigger, because `li.cl-position-static` sets `position:static !important`
    and the bar is the nearest `position:relative` ancestor; the two `left:0`/`top:100%` declarations
    therefore resolve against the bar.
  - **Mega panel row and columns:** `div.cl-row` (`margin:0 -15px`, `flex-wrap:wrap`) measured
    **`1092 @ x = 174`** (165 + 24 − 15) and the four `div.cl-col-md-3` (`flex:0 0 25%`,
    `max-width:25%`, `padding:0 15px`) each **`273 × 322.8`** at `x = 174, 447, 720, 993` (1440 px);
    at 1200 px **`225.4`** each; at 992 px **`180.4`** each.
  - **Mega panel items (`a.cl-dropdown-item`, first column):** **`243 × 52.6`** at `x = 189` (1440 px),
    `y = 319.6 / 372.2 / 424.8 / 477.3` — **`font-size:12px`**, **`color:#000`**,
    **`padding:15px 20px`**, **`border-bottom:1px solid rgba(0,0,0,0.1)`**, `white-space:nowrap`
    (inherited) → 15 + 21.6 + 15 + 1 = **52.6 px**; `:hover,:focus` →
    **`background:#fec771; color:#fff`**. The framework's `#212529`/`#f8f9fa`/`#007bff`/`#16181b`
    palette never applies.
  - **Image cards (columns 2–4):** `a.img` = `display:block`, `width:100%`, **`height:250px`**,
    `margin-bottom:20px`, `background-size:cover; background-repeat:no-repeat;
    background-position:center center`, **no border-radius** — measured **`243 × 250 @ y = 319.6`**
    at 1440 px. Then `div.text` (`243 × 52.8 @ y = 589.6`): `h3` = **`16 px`**, **`font-weight:600`**,
    `margin-bottom:0`, `line-height:1.5` (24 px) with its `a` forced to **`#000`** (the variant
    rule beats the amber `a` colour); `span` = **`14 px`**, **`rgba(0,0,0,0.2)`**, `line-height:25.2px`
    → 24 + 25.2 = **49.2 px** box, measured 52.8 with its line boxes. The 20 px image margin + 250 px
    image + 52.8 px text = **322.8 px** column height, and 24 + 322.8 + 24 = **370.8 px** panel.
    Card copy: title **`Amazing Architecture`**, meta **`Architect`**.
  - **Page height / overflow:** the page is **shorter than the viewport** — at 1440 × 900
    `documentElement.scrollHeight === clientHeight` (900 = 900) and `scrollWidth === innerWidth`
    (1440 = 1440); the panel's bottom edge reaches **666.4 px** and, being absolutely positioned, adds
    nothing to the document height. **14** of its **15** anchors are dead `href="#"`.
- **Assets:** the snippet ships **three real photographs** (`images/img-1..3.jpg`, 1000 px wide, 160 KB
  together) referenced from **inline `style` attributes** (`background-image`), and **eight Roboto
  woff2 files** (247,856 B, 60.8 % of the download). The sheet declares `@font-face` for
  **400/700 only** (`roboto-100-*` and `roboto-300-*` are shipped but never declared) and **never
  asks for Roboto anywhere**; the live page's only `<link>` is the sheet itself (plus a
  `cdnjs.cloudflare.com` `dns-prefetch` that is never used), so **no webfont is loaded at all** and
  `"Poppins", Arial, sans-serif` resolves to **Arial**. The page background is still `#fafafa` from
  the sheet's own `body` rule (which beats the framework base's `#fff`).

## Breakpoint behaviour (values measured on the live preview and derived from its sheet)

| Width | Container tier | Bar | Brand | Rows | Toggler | Mega panel |
| --- | --- | --- | --- | --- | --- | --- |
| 375 | 375 @ `x = 0` (no `max-width`) | 345 × **66** (`#000`, `padding:10px 15px`, radius 5 px) | `124.4 × 46` | column, **54 px** rows, `rgba(255,255,255,0.7)` | **85.3 × 24.7** @ `x = 244.7` | in-flow **static** `300 × 210.4` over `#202020`, **four links only** (image columns `display:none`) |
| 767 | 540 @ `x = 113.5` | 510 × **66** (`#000`) | `124.4 × 46` | column, **54 px** rows | 85.3 × 24.7 @ `x = 538.2` | static `480 × 210.4` over `#202020` |
| 768 | 720 @ `x = 24` | 690 × **66**→**640.7** expanded | `124.4 × 46` | column, **54 px** rows | 85.3 × 24.7 @ `x = 628.7` | static `660 × 346.8` over `#202020`, **four columns** `172.5 px`, images `142.5 × 250`, captions wrap to 2 lines (`76.8 px`) |
| 991 | 720 @ `x = 135.5` | 690 × **66**→**640.7** expanded | `124.4 × 46` | column, **54 px** rows | 85.3 × 24.7 @ `x = 740.2` | static `660 × 346.8` over `#202020` |
| 992 | 960 @ `x = 16` | 930 × **83.6** (`#1c2938`, `padding:10px`, radius 5 px) | `124.4 × 46` | row, **63.6 px** | `display:none` | absolute `930 × 370.8` @ `y = 295.6`, white |
| 1200 | 1140 @ `x = 30` | 1110 × 83.6 | `124.4 × 46` @ `x = 70` | row, 63.6 px, `x = 823.8 → 1130.1` | hidden | `1110 × 370.8` @ `y = 295.6`, columns `225.4` |
| 1440 | 1140 @ `x = 150` | 1110 × 83.6 @ `x = 165` | `124.4 × 46` @ `x = 190` | row, 63.6 px, `x = 943.8 → 1250.1` | hidden | `1110 × 370.8` @ `x = 165, y = 295.6`, columns `273`, items `243 × 52.6`, images `243 × 250` |

Two things flip at **`992 px`**: the bar's surface (`#000 → #1c2938`), its padding (`10px 15px →
10px`) and its height (**66 → 83.6 px**, as the rows appear and the toggler hides), and the drop-down
goes from an in-flow static block inside the panel to an absolutely positioned
**full-bar-width** panel. A third flips at **`768 px`**: the three image columns leave
`display:none` (`cl-d-none cl-d-md-block`), which grows the in-flow panel from **210.4 px** to
**346.8 px** (menu) and the expanded bar to **640.7 px**. The container tiers change at
**576/768/992/1200 px**, and the bar is always **inset 15 px** inside the active tier, so its width is
container − 30. Expanded-panel heights: **504.3 px** total bar at 375/767 (20 + 46 + 438.3), the
panel **438.3 px**; the document grows to **826 px** at 375 and **963 px** at 768 (which adds a
vertical scrollbar and shifts the centred container by ~7.5 px).

## Type and colour summary

- `body{font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
  font-weight:normal; background:#fafafa; color:gray}` (`gray` = **`#808080`**). The framework base
  declares a **system** stack and `background-color:#fff` first, but the custom block's `body` rule
  comes later and wins — the page is **`#fafafa`**.
- `a{transition:.3s all ease; color:#fec771}` — **inline links are the amber accent**; the custom
  block also kills `text-decoration` and outlines (`a:hover,a:focus{text-decoration:none !important;
  outline:none !important; box-shadow:none}`) → restore hover/focus affordances (delta).
- `h2,h3,.h2,.h3{line-height:1.5; font-weight:400; font-family:"Poppins", Arial, sans-serif;
  color:#000}` + `.heading-section{font-size:28px; color:#000}` (28 px wins over the framework's
  `2rem` = 32 px) + the variant's `.text h3{font-size:16px; font-weight:600; margin-bottom:0}` and
  `.text h3 a{color:#000}`.
- Token table: accent amber **`#fec771`** (inline links, row hover, mega item hover fill, the dead
  `.active` row rule) · page **`#fafafa`** · body ink **`gray`/`#808080`** · bar **`#1c2938`**
  desktop / **`#000`** mobile · rows **`#e6e6e6`** desktop (mobile `rgba(255,255,255,0.7)`, hover and
  current `#fff`) · brand **`#fff`** · toggler **`rgba(255,255,255,0.5)`** · mega surface **`#fff`**
  desktop / **`#202020`** mobile · mega items **`#000`** with a `1px solid rgba(0,0,0,0.1)` rule
  desktop / **`rgba(255,255,255,0.8)`** with `rgba(255,255,255,0.1)` mobile · card title **`#000`**,
  card meta **`rgba(0,0,0,0.2)`** · radii: bar **`5px`**, mega panel **`4px`**, toggler base
  `0.25rem` (inert — `border:none`, `padding-right:0`), images **square** (`border-radius:0`) ·
  bar shadow **`0 5px 20px -17px rgba(0,0,0,.34)`**, panel shadow
  **`0 10px 34px -20px rgba(0,0,0,.41)`** · link transition **`.3s all ease`** · panel transition
  **`height .35s ease`**.

## Fidelity pitfalls (things that will bite an implementer)

1. **The bar is INSET, not full-bleed** — it lives inside the family's standard `.cl-container`
   (1140/960/720/540/100 %) with `15 px` gutters, so it is **15 px narrower than the tier on each
   side** and carries **`border-radius:5px`** + a `0 5px 20px -17px rgba(0,0,0,.34)` shadow. The
   `-17` sibling's full-bleed, square, shadowless bar is the opposite; do not import it.
2. **The accent is `#fec771` amber, not the `-17` sibling's `#ff0000`** and not the `-16` sibling's
   gold `#f1bc31`. Copying a sibling's palette is the single easiest way to break this template.
3. **The rows are `14 px`, sentence-case, `#e6e6e6` and `padding:19.2px 20px` → `63.6 px`**, and they
   *set* the `83.6 px` bar. There is **no** `text-transform:uppercase`, **no** `letter-spacing`, **no**
   `::before` underline and **no** slab anywhere in this sheet — the row treatment is a **plain colour
   swap to `#fec771`**.
4. **The list is right-aligned by `margin-left:auto`** (`cl-ml-auto`) — not centred (`cl-m-auto`, the
   `-17` sibling) and not `space-between`.
5. **The mega panel is `width:100%` OF THE BAR and `left:0`** — and it only resolves against the bar
   because the trigger's `li` carries **`cl-position-static`** (`position:static !important`). Drop
   that class and the panel snaps to the trigger's width/left edge and the whole mega layout
   collapses. It is **not** a `160 px` dropdown and it has **no** viewport-overflow flip (the script's
   guard compares the panel's right edge with the client width — with `width:100%` it can never fire).
6. **The panel is 3 + 1, not 1 + 3**: the four plain links are the FIRST `25 %` column, the three
   image cards the rest. Reversing them is the obvious mistake.
7. **`padding:1.5rem` (`cl-p-4`) on the panel on desktop, `padding:0 !important` below 992 px** — and
   below 992 px the surface is **`#202020`** while the card captions stay **`#000` /
   `rgba(0,0,0,0.2)`**, so at **768–991 px the image-card titles are black on near-black and are
   effectively invisible** (verified in the live render at 768 px). Reproduce the layout but restore
   readable ink there (delta).
8. **The image columns appear at `768 px`, inside the collapsed mobile panel** (`cl-d-none
   cl-d-md-block`) — so from 768–991 px the panel is **`346.8 px`** tall with four `172.5 px` columns
   and `142.5 × 250` images whose titles wrap to two lines. Below 768 px they vanish and the panel is
   **`210.4 px`** of four links.
9. **The mega submenu is NOT permanently expanded below 992 px** (unlike the `-16`/`-17` siblings,
   which force `display:block !important`): it is `position:static` but still `display:none` until
   `cl-show` is added by hover/click. Its surface and row inks do change (`#202020`,
   `rgba(255,255,255,0.8)`, `rgba(255,255,255,0.1)` rules).
10. **The toggler is the bar's SECOND child, after the brand** (the `-17` sibling puts it first) and it
    is right-aligned. Below 992 px the inner container gets `padding:0` and the bar `padding:10px 15px`
    — do not stack both.
11. **The bar keeps its `5 px` radius and its shadow at every width** (the mobile override only swaps
    the surface and padding).
12. **Mobile rows are `54 px`** (`padding:14.4px 0` = `.9rem`), ink `rgba(255,255,255,0.7)`
    (`#fff` on hover), and carry **no** bottom rule at any mobile width — and `ul` has
    `padding-bottom:10px` (which is part of the panel's measured height).
13. **The panel's 2 px gap** (`margin:.125rem 0 0`) puts its top at the bar's bottom **+ 2 px**.
14. **Measure the desktop bar without clicking the toggler**: at ≥992 px it is `display:none` and the
    collapse is force-`display:flex`, so a synthetic click wedges `cl-collapsing` onto it, zeros the
    panel height and corrupts every subsequent read. An expanded mobile panel also adds a scrollbar
    that shifts the centred container ~7.5 px.
15. **No webfont ships**, so the source renders Arial: add one Google Fonts `<link>` for Poppins
    (delta) rather than copying eight dead Roboto woff2 files (247,856 B = 60.8 % of the archive).
16. **The three photographs are the only images** and are never copied — use
    `https://picsum.photos/seed/spinnaker-<n>/<w>/<h>` (`cover`, centred, `250 px` tall on desktop).
17. **Dead code to drop:** the `:where(html) … all: revert` reset, the `@media print` block (incl.
    `@page{size:a3}` and `.cl-navbar{display:none}`), the Bootstrap palette (`#007bff` links,
    `#f8f9fa` hover, `#16181b`, `#6c757d` disabled, `#212529` ink), the base system body stack, the
    unused `.fade`, `.cl-dropdown-menu-right`, `.cl-nav-link.disabled`,
    `.cl-dropdown-item.active`/`:disabled`, `.cl-navbar-toggler:hover/:focus`,
    `.cl-navbar-brand:hover/:focus`, the `cl-position-static`-only `.cl-navbar-nav .cl-dropdown-menu`
    base rule shadowed at ≥992 px, the `[data-toggle="panel-collapse"]` typo branch in the script,
    the never-firing dropdown overflow guard, `width:inherit` on the bar, and all eight Roboto files.

## Requirements

### Feature: Page frame and heading band

#### Scenario: Band spacing and the bar's landing point

- **Given** a viewport ≥ 768 px
- **When** the page frame is measured
- **Then** the page background is **`#fafafa`**, the whole page lives in one band section with
  `padding:112px 0` and **no horizontal padding**, and the heading is **28 px / 400 /
  `line-height:1.5` (42 px) / `#000`**, centred in a column that is `50%` at ≥768 px and `100%` below,
  with an `8px` margin-bottom plus a `48px` block margin
- **And** the bar's top edge lands exactly **210 px** below the page top at every width
  (112 + 42 + 8 + 48)

#### Scenario: The heading is own copy

- **Given** the app renders
- **Then** the string `Website menu #08` never renders
- **And** the app contains **zero** `colorlib`/`website-menu-18` strings

### Feature: The inset rounded bar and its right-aligned rows

#### Scenario: Bar geometry inside a container tier

- **Given** a viewport ≥ 992 px
- **When** the bar is measured
- **Then** it is **inset inside a centred container** — the container is `1140 px` at ≥1200 px,
  `960 px` at ≥992 px, `720 px` at ≥768 px, `540 px` at ≥576 px and `100 %` below, always with `15 px`
  side gutters, so the bar is **container − 30 px wide** (measured **1110 × 83.6 @ x = 165, y = 210**
  at 1440 px and **930 × 83.6** at 992 px) and is **not** full-bleed
- **And** the bar's surface is **`#1c2938`**, its `padding` is **`10px`**, its
  **`border-radius:5px`**, its shadow is **`0 5px 20px -17px rgba(0,0,0,0.34)`**, its `z-index` is `3`
  and it is `position:relative` (**never** sticky — the app declares **zero** `sticky`/`fixed`
  header rules)
- **And** the bar's inner container is a flex row with `15 px` gutters,
  `justify-content:space-between` and `flex-wrap:nowrap`, and it carries the **brand**, the
  **toggler** and the **list** in that DOM order

#### Scenario: Brand

- **Then** the brand is own copy at **20 px / 700 / uppercase / `#fff`** with `padding:5px 0`,
  `margin-right:16px` and inherited `line-height:1.8` → measured **`124.4 × 46`**, flush with the inner
  container's content left edge, and it is the only anchor with a real in-app destination
- **And** it exposes a hover affordance the source lacks (the source keeps `color:#fff` at rest and on
  hover — a documented delta) and a visible `focus-visible` ring

#### Scenario: Right-aligned rows

- **Then** there are **four** rows in the same order as the source's *kinds* (plain · plain · plain ·
  dropdown, own labels), **right-aligned** by `margin-left:auto` (measured `613.3 px` of auto margin
  and the list at `x = 943.8 → 1250.1` at 1440 px)
- **And** each row is **`14 px` / `400` / `#e6e6e6`** with **`padding:19.2px 20px`** → **`63.6 px`**
  tall, **sentence case**, with **no** `letter-spacing`, **no** uppercase transform, **no**
  underline/slab/pseudo-element decoration
- **And** hovering a row turns its label **`#fec771`**, and the current row is marked with
  `aria-current` and a visible `focus-visible` ring (the source paints no current-row state at all —
  a documented delta)

### Feature: The full-width mega panel

#### Scenario: Panel surface and geometry

- **Given** a viewport ≥ 992 px and the dropdown row hovered or activated
- **When** the panel is measured
- **Then** it is **as wide as the bar and anchored to the bar's left edge**
  (measured **`1110 × 370.8 @ x = 165, y = 295.6`** at 1440 px, **`930 × 370.8`** at 992 px), because
  the trigger's list item is `position:static` and the panel is `position:absolute; top:100%;
  left:0; width:100%` with a **`2 px`** top margin (`margin:.125rem 0 0`)
- **And** its surface is **`#fff`**, `border:none`, **`border-radius:4px`**,
  `box-shadow:0 10px 34px -20px rgba(0,0,0,0.41)`, with **`padding:24px`**
- **And** it is a `25 %`-column grid inside a row with `margin:0 -15px` and `15 px` gutters
  (measured `1092` wide with four `273 px` columns at 1440 px), and it is **left-aligned**

#### Scenario: The link column comes first

- **Then** the **first** column holds **four** plain items — own strings, **`12 px`**,
  **`#000`**, **`padding:15px 20px`** → **`52.6 px`** rows, each with a
  **`1px solid rgba(0,0,0,0.1)`** bottom rule and a **`#fec771` hover fill with white ink**
- **And** the remaining **three** columns each hold an **image card**: a cover image
  **`100 % × 250 px`** (`background-size:cover`, centred, square corners, **`margin-bottom:20px`**)
  over a title **`16 px` / `600` / `#000`** (`margin-bottom:0`) and a meta line **`14 px` /
  `rgba(0,0,0,0.2)`** → measured **`243 × 52.8`** (columns `273 px`, images/ cards `243 px` at 1440 px)
- **And** the card imagery comes from `https://picsum.photos/seed/spinnaker-<n>/<w>/<h>` — the source's
  three photographs are never copied

#### Scenario: Behaviour and keyboard support

- **Then** `mouseenter`/`mouseleave` on the row open and close the panel, `click` toggles it,
  `ArrowDown` on the trigger opens it and focuses the first item, `ArrowDown`/`ArrowUp` rove focus
  across the four items, `Escape` closes it and refocuses the trigger, and an outside click closes it
  (the source's right-edge overflow guard can never fire with `width:100%` — omit or keep it inert)
- **And** `aria-haspopup`/`aria-expanded`/`aria-controls` stay in sync throughout
- **And** the trigger keeps a rendered **`8 × 4`** `currentColor` caret after its label
  (`border-top:4px solid currentColor`, `margin-left:3.57px`), and the trigger is highlighted while
  the panel is open (a documented delta — the source paints no open state, though its own mock
  screenshot shows the trigger in amber)

### Feature: Mobile chrome and the in-flow mega panel

#### Scenario: Mobile bar surface and heights

- **Given** a viewport ≤ 991 px
- **When** the bar is measured
- **Then** its surface is **`#000`**, its `padding` is **`10px 15px`**, its inner container gutters
  are **`0`**, it keeps its **`5 px`** radius and its shadow, and it is **66 px** tall while collapsed
- **And** its container is the active tier (measured `540 px @ x = 113.5` at 767 px, `720 px` at
  768/991 px, `100 %` at 375 px), so the bar stays **inset 15 px** inside the tier
- **And** the toggler renders **`rgba(255,255,255,0.5)`**, uppercase **16 px**,
  `letter-spacing:.1em`, `padding:4px 0 4px 12px`, measured **`85.3 × 24.7`** right-aligned in the bar,
  showing a three-bar glyph plus the word `MENU`, with `aria-expanded` in sync and a visible focus
  ring

#### Scenario: The in-flow panel

- **Then** activating the toggler expands an **in-flow full-width** panel (`flex-basis:100%`, `ul`
  with `padding-bottom:10px`) whose height animates over **`0.35s ease`** (animation off under
  `prefers-reduced-motion: reduce`); collapsed it is `display:none`
- **And** its rows are **`54 px`** (`padding:14.4px 0`) with ink **`rgba(255,255,255,0.7)`**
  (**`#fff`** on hover) and **no** bottom rule, and the measured panel is **438.3 px** with the
  expanded bar at **504.3 px** (375/767 px) and **574.7 px** panel with a **640.7 px** bar at
  768–991 px

#### Scenario: The mega panel inside the mobile panel

- **Then** below 992 px the mega panel is an **in-flow static block** (`position:static`,
  `width:100%`) over **`#202020`** with **`padding:0`** and its `4 px` radius kept, items
  **`rgba(255,255,255,0.8)`** with `rgba(255,255,255,0.1)` bottom rules, and it is **not** open until
  the row is hovered/clicked (unlike the `-16`/`-17` siblings, which force it permanently expanded)
- **And** below **768 px** the three image columns are `display:none`, leaving four **`52.6 px`**
  items (**`210.4 px`** panel); at **768–991 px** they render as four `172.5 px` columns with
  `142.5 × 250` images and two-line captions (**`346.8 px`** panel)
- **And** the card captions are legible on the dark surface (the source renders black-on-near-black
  there — a documented delta), and every card is a real destination

### Feature: Materialised destinations

#### Scenario: No dead links

- **Then** the recreation renders **zero** `href="#"` links — the source's **14** dead anchors (four
  rows, four items, three image anchors and three title anchors) all resolve to real targets
- **And** the brand resolves to the top of the page

#### Scenario: Real content replaces the blank page

- **Then** the app has real content sections below the chrome with `scroll-margin-top` ≥ the chrome
  height (bar bottom ≈ **293.6 px**) and imagery from
  `https://picsum.photos/seed/spinnaker-<n>/<w>/<h>`

### Feature: Footer and attribution

#### Scenario: Component Dock credit

- **Then** the app's footer links **`https://www.componentdock.com/`** branded as
  **"Component Dock"** (the source has no footer)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/spinnaker/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/spinnaker/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Spec validated (`npm run spec:validate`) and the app built only after this spec exists
- [ ] Page frame: `#fafafa` page, one band section with `padding:112px 0`, `28 px`/`400`/`#000`
  heading in a `50 %` column, bar top edge at **210 px** at every width
- [ ] Bar is **inset**: inside the `1140/960/720/540/100 %` container tiers with `15 px` gutters — bar
  width = tier − 30 (measured **1110 × 83.6 @ x = 165, y = 210** at 1440 px, **930 × 83.6** at 992 px)
- [ ] Bar tokens: **`#1c2938`** at ≥992 px / **`#000`** below, **`padding:10px`** desktop
  (`10px 15px` mobile), **`border-radius:5px`** at both widths,
  `box-shadow:0 5px 20px -17px rgba(0,0,0,0.34)`, `z-index:3`, `position:relative`,
  **zero** `sticky`/`fixed`, inner container `15 px` gutters + `flex-wrap:nowrap` desktop and
  `padding:0` mobile
- [ ] Brand: own copy, **20 px / 700 / uppercase / `#fff`**, `padding:5px 0`, `margin-right:16px`,
  ≈ **124 × 46**, left edge of the bar; hover affordance + `focus-visible` ring (delta)
- [ ] Rows: **four**, **right-aligned by `margin-left:auto`** (≈ 613 px of auto margin at 1440 px),
  **14 px / 400 / `#e6e6e6` / sentence case / `padding:19.2px 20px`** → **63.6 px**, hover
  **`#fec771`**, `aria-current` on the current row, **no** underline/slab/uppercase/letter-spacing,
  `focus-visible` rings
- [ ] Mega panel (**the signature**): **`width:100 %` of the bar, `left:0`, `top:100 %`, `2 px` top
  margin**, white, `border:none`, **`border-radius:4px`**,
  `0 10px 34px -20px rgba(0,0,0,.41)`, **`padding:24px`**, anchored to the bar via a
  `position:static` list item; measured **`1110 × 370.8`** at 1440 px, **`930 × 370.8`** at 992 px,
  **`1110 × 370.8`** at 1200 px
- [ ] Panel columns: `cl-row`-equivalent (`margin:0 -15px`, `15 px` gutters) with **four `25 %`
  columns** (**273 px** at 1440 px / **225.4** at 1200 / **180.4** at 992) — **links first**, then
  **three image cards** (`100 % × 250 px` cover, square, `margin-bottom:20px`, over a `16 px`/`600`
  `#000` title with `margin-bottom:0` and a `14 px` `rgba(0,0,0,0.2)` meta line → **243 × 52.8**)
- [ ] Panel items: four, **12 px / `#000` / `padding:15px 20px`** → **52.6 px**, bottom rule
  `1px solid rgba(0,0,0,0.1)`, **`#fec771` hover fill + white ink**; trigger caret rendered
  **8 × 4** `currentColor`; hover + click + `ArrowDown`/`ArrowUp` + `Escape` (refocuses the trigger) +
  outside click; `aria-haspopup`/`aria-expanded`/`aria-controls` in sync; reduced-motion honoured
- [ ] Bar shadow is `0 5px 20px -17px rgba(0,0,0,.34)` — the family's **old** shadow (the `-17`
  sibling has none) — and the `-17` sibling's red `#ff0000`, its red pill search, its `2 px` underline
  and its 67.8 px uppercase rows are **absent**
- [ ] Mobile (≤991 px): bar **`#000`**, `padding:10px 15px`, gutters `0`, **66 px** collapsed
  (**504.3 px** expanded with the **438.3 px** panel; **640.7 px** bar / **574.7 px** panel at
  768–991 px), toggler **second in the bar DOM** (`rgba(255,255,255,0.5)`, uppercase `16 px`,
  `letter-spacing:.1em`, `padding:4px 0 4px 12px`, three-bar glyph, `aria-expanded` in sync, visible
  focus ring), rows **54 px** (`padding:14.4px 0`) in `rgba(255,255,255,0.7)` (`#fff` on hover) with
  **no** bottom rule, `ul` `padding-bottom:10px`, `0.35s ease` panel animation (off under reduced
  motion)
- [ ] Mobile mega panel: **static in-flow** over **`#202020`**, **`padding:0`**, `4 px` radius kept,
  items `rgba(255,255,255,0.8)` with `rgba(255,255,255,0.1)` rules; **only the four links below
  768 px** (image columns `display:none`) and four `172.5 px` columns with `142.5 × 250` images at
  768–991 px; **not** permanently expanded (no `display:block !important`); captions legible (delta)
- [ ] Zero `colorlib` / "Website Menu V18" / `website-menu-18` strings in `apps/spinnaker` (comments
  included); none of the source's `Megawidth` brand, its four row labels, its `Page 1`…`Page 4` items,
  its `Amazing Architecture` / `Architect` card copy or its `Website menu #08` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `img-1..3.jpg`, no `roboto-*.woff2` (all
  eight are dead — 247,856 B = 60.8 % of the 407,923 B download), no inline SVG `<path>` data, no
  `cl-`/`ftco-` utility classes, no inline `style="background-image"`, no jQuery/Bootstrap
- [ ] Dead source code dropped: the `:where(html) … all: revert` reset, the `@media print` block
  (incl. `@page{size:a3}`), the Bootstrap palette and base system stack, the unused `.fade` /
  `.cl-dropdown-menu-right` / `.cl-nav-link.disabled` / `.cl-dropdown-item.active` /
  `.cl-navbar-toggler:hover` rules, the `[data-toggle="panel-collapse"]` script branch, the
  never-firing overflow guard, `width:inherit`, and all Roboto woff2 files
- [ ] Documented deltas recorded in the PR: new name + own brand, own row labels and panel items, own
  card copy, the fourteen dead `href="#"` materialised, `lucide-react` icons instead of the inline SVG
  bars glyph, a real Google Fonts Poppins `<link>` instead of eight dead self-hosted Roboto files,
  restored hover/`focus-visible` affordances, `aria-current` on the current row, keyboard support for
  the mega panel, reduced-motion handling, a legible mobile card caption, an amber highlight on the
  open trigger, placeholder photography instead of the three photographs, and the added footer
- [ ] `scripts/verify-app.sh spinnaker` green (typecheck + lint + knip + fallow + vitest 100 % +
  build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set to `spinnaker.free.componentdock.com`; `package-lock.json`
  registers the workspace; footer attribution present
- [ ] Squash-merge the PR, then mark the `TEMPLATES.md` `Website Menu 18` item `[x]` with the live
  `https://spinnaker.free.componentdock.com` URL + homepage and run `npm run readme:status`
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
