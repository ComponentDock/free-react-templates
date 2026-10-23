# Template: Gunwale (Website Menus)

## Purpose

Gunwale is a **two-band header: a light brand strip riding on top of a dark, full-bleed
bar** — a centred heading band above a **white row** that carries a **two-line uppercase
black wordmark** on the left and **four 40 px circular social buttons** on the right, and,
under it, a **full-bleed `#202040` navy bar** that puts **five tracked-out white nav rows on
the left and a white search field bolted to its right end**. It is the only member of the
*Website Menus* family whose chrome is **two stacked bands** (every sibling ships a single
bar), the only one with a **two-line brand lockup** (a `20 px` line over a `12 px` line,
both uppercase), the only one with **social buttons inside the header**, the only one with a
**search form in the bar**, and the only one whose **hover affordance is a gold slab that
wipes across the whole row** (`#f1bc31`, `scaleX(0) → scaleX(1)` behind the label) — the
current row keeps that gold slab **permanently**. Below `992 px` the header turns odd-numbered
and awkward in exactly the source's way: the bar goes **`#000`**, the search field **keeps its
full `257 px`**, the toggler (`☰ Menu`) takes the left, the whole list collapses into a panel
whose dropdown is **always expanded** as an in-line `#000` sub-list, and the current row turns
**gold text on black**. Nothing else exists on the page: **no content sections, no images, no
footer, no sticky chrome** — 14 anchors, 13 of them dead `href="#"`, on a page that does not
scroll.

It is an original React recreation of the ColorLib free **"Website Menu V12"** snippet
(source slug `website-menu-12`), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation matches the source's
structure, order and design tokens 1:1 but copies no asset (no images — the source ships
none, no font files, no CSS files, no icon-font glyphs, no inline SVG paths, no text
verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-12/ — page title
  "Website Menu V12 - Free Menu with Search Template 2026 - Colorlib", **HTTP 200**,
  108,893 B, verified 2026-10-12. Page meta: posted **March 9, 2021** (structured data
  `datePublished` **2021-03-09T14:10:40+00:00**) by **Rok Krivec**, 0 comments, sibling
  links *previous post: Website Menu V11*, *next post: Website Menu V13*, `dateModified`
  **2026-09-25T10:42:07+00:00**. Template details block: Author **Colorlib**, Released
  **September 2026**, License **CC BY 3.0**. ColorLib's own description: *"Offer great
  website navigability with this responsive free menu with a search bar and a dropdown
  template. You can also add a logo and activate the available social media icons."* (its
  `meta description` / `og:description`: *"Grab this responsive and free menu with a search
  bar template that also features a dropdown and social media icons."*). September 2026
  update note: *"this snippet is now plain HTML and CSS plus a few lines of vanilla
  JavaScript: no jQuery, no Bootstrap files, no plugins. The download is 253 KB (it was
  262 KB). Use it on its own, or drop it into a Bootstrap 4, 5 or 6 project and it looks
  the same. The collapsible sections open and close without Bootstrap's JavaScript. The
  drop-down menus work without Bootstrap's JavaScript, including keyboard navigation."*
  TEMPLATES.md `## Website Menus (20)` (line 3071) — this item is the family's **twelfth**
  entry at **line 3084**; the slug `website-menu-12` appears exactly **once** in
  TEMPLATES.md and in no spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-12/` returns **HTTP 404**
  (`Not Found`, 9 B) — like its `-01`…`-11` siblings, the *Website Menus* family does
  **not** live under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-12/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **5,103 B**, `<title>Website menu 02</title>`, sha256
  `5a8de116dca3c80597eca3336c2f70e1e6fc73dcec469410233ea23eb14f32fc`, verified 2026-10-12) —
  the URL the preview host's own catalog index records for this slug
  (`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
  633,990 B → `"website-menu-12":{"name":"Website Menu V12","tag":"Website Menu
  Templates","img":"…/website-menu-12-768x622.jpg","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-12/","details":"https://colorlib.com/wp/template/website-menu-12/","purchase":"https://colorlib.com/wp/template/website-menu-12/#pricing"}`).
  Its two assets — `css/style.css?v=c26a47c4` (**22,709 B**, `text/css`, sha256
  `2e78a96d9c35838942586aaf3471a99f6e20defcd0f27ea186d2c95f2281e066`) and
  `js/snippet.js?v=04dc0e4b` (**5,798 B**, `application/javascript`, sha256
  `ee4d7f69fc400c258a863e9ca4cf115b4a2fdaaf9997d4b2f893ebb28ed116df`) — are
  **byte-identical** (same sha256, verified) to the copies in the snippet's own
  downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-12.zip` (**HTTP 200**,
  `application/zip`, **259,459 B**, sha256
  `32635318e573cf6dae2c41866b9fa96935cfa2d88bb1e1084a250f30d710121b`; the ColorLib page
  rounds this to "253 KB"), which ships `index.html` (**4,900 B**), `css/style.css`,
  `js/snippet.js`, `README.md` (**1,264 B**), **no images at all**, and **eight** Roboto
  woff2 files (100/300/400/700 × latin/latin-ext — 24,444 B each for the four latin-ext
  faces and 37,520 B each for the four latin faces, **247,856 B = 87.7 % of the 282,527 B
  uncompressed archive**). `diff` between the live page and the archive `index.html` is
  **head-only** (the preview host's `noindex` meta tags, a `cdnjs.cloudflare.com`
  `dns-prefetch`, and the cache-busting query strings) — the archive is the readable,
  un-versioned twin of the live preview. Both were read for this spec and the live render
  was cross-checked in a browser at 1280, 1200, 1199, 992, 991, 768, 375 and 320 px (see
  Design reference).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-12.jpg
  (HTTP 200, served as **AVIF**, 7,255 B, 1200×972, converted to PNG (49,747 B) and
  inspected visually 2026-10-12). No screenshot-only fallback was needed — the live preview
  is the primary reference and the archive its readable twin.
- **New name:** `gunwale` (apps/gunwale, `@free-react-templates/gunwale`) — a boat's
  *gunwale* is the **raised strake that caps the top edge of her side**: the strip that runs
  along the top of the dark hull. This is the family's only chrome that **is** that shape —
  a light brand strip riding on top of a dark bar (`#202040`, literally the hull below the
  gunwale) — with its **gold `#f1bc31` slab** wiping across each row like brass fittings on
  dark timber, and its search field bolted to the bar's right end. It continues the family's
  nautical run — **starboard** (`website-menu-05`), **larboard** (`-06`), **topdeck**
  (`-07`), **bowsprit** (`-08`), **gangway** (`-09`), **halyard** (`-10`), **ensign**
  (`-11`). Single lowercase word, kebab-safe (no hyphen needed). Verified 2026-10-12: a
  repo-wide search returns **zero** hits for `gunwale` in `apps/`, `openspec/specs/`,
  `docs/templates/` and `TEMPLATES.md`, and `https://colorlib.com/wp/template/gunwale/`
  returns **HTTP 404**, so it is not a ColorLib source name either. The source name
  "Website Menu V12", its `Papermag`/`Magazine` wordmark, its five labels, its four
  `Page n` items, its `Search` placeholder and its `Website menu #02` heading are never
  reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V12" (source slug `website-menu-12`,
  https://colorlib.com/wp/template/website-menu-12/), `datePublished` **2021-03-09**,
  rewritten in the 2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no
  Bootstrap files, no images** in the download. Design-wise this is the family's
  **"brand strip over a dark bar, with a search field"** variant: a centred heading, a
  **white row** holding a two-line uppercase wordmark and four circular social buttons, a
  **full-bleed `#202040` bar** holding five uppercase rows (left) and a **white `5 px`-radius
  search field** (right), a gold slab that wipes across a row on hover, and a `992 px`
  breakpoint that turns the bar **`#000`** and stacks the list inside a collapsing panel.
  The page contains **only** those two bands plus the heading above them — no content
  sections, no images, no footer, no utility bar, nothing sticky.
- **CSS namespace:** the sheet is self-contained and `cl-`-prefixed for its utilities
  (`cl-container`, `cl-row`, `cl-justify-content-between`, `cl-justify-content-center`,
  `cl-col`, `cl-col-md-6`, `cl-text-center`, `cl-mb-5`, `cl-mb-0`, `cl-d-flex`,
  `cl-align-items-center`, `cl-justify-content-center`, `cl-justify-content-end`,
  `cl-order-lg-last`, `cl-mr-auto`, `cl-pl-3`, `cl-navbar`, `cl-navbar-expand-lg`,
  `cl-navbar-dark`, `cl-navbar-brand`, `cl-navbar-nav`, `cl-nav-item`, `cl-nav-link`,
  `cl-navbar-toggler`, `cl-navbar-collapse`, `cl-collapse`, `cl-collapsing`, `cl-show`,
  `cl-collapsed`, `cl-dropdown`, `cl-dropdown-toggle`, `cl-dropdown-menu`,
  `cl-dropdown-item`, `cl-bg-dark`, `cl-form-group`, `cl-form-control`, `cl-icon`,
  `cl-sr-only`) and is a hand-rolled Bootstrap-4-look-alike — **not** a framework skin. Its
  first ~55 lines are a `:where(html) … all: revert` reset so the snippet renders
  identically inside a Bootstrap host page, followed by a `*{box-sizing:border-box}`
  normalize, the framework base (`.cl-container` tiers, `.cl-navbar*`, `.cl-dropdown*`,
  `.cl-form-control`, `.cl-collapse`, `@media print`), and then the ~300-line custom block
  (`body`, `a`, `h2`, `.ftco-section`, `.heading-section`, `.ftco-navbar-light`,
  `.cl-navbar-brand`, `.social-media`, `.searchform`, `.cl-form-control`).
- **HTML structure (live preview, 5,103 B — archive twin 4,900 B):** document order is
  exactly — (1) `section.ftco-section` › `div.cl-container` › `div.cl-row
  .cl-justify-content-center` › `div.cl-col-md-6.cl-text-center.cl-mb-5` ›
  `h2.heading-section` reading **`Website menu #02`**, (2) a second `div.cl-container` ›
  `div.cl-row.cl-justify-content-between` with **two `div.cl-col`**: the first holding
  `a.cl-navbar-brand[href="index.html"]` (`Papermag <span>Magazine</span>`), the second
  `div.cl-col.cl-d-flex.cl-justify-content-end` › `div.social-media` › `p.cl-mb-0.cl-d-flex`
  › **four** `a.cl-d-flex.cl-align-items-center.cl-justify-content-center[href="#"]` each
  holding `span.fa.fa-<network>` › `i.cl-sr-only` with the network name (Facebook, Twitter,
  Instagram, Dribbble), (3) `nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.cl-navbar-dark
  .ftco_navbar.cl-bg-dark.ftco-navbar-light` › `div.cl-container` with **three** children —
  the toggler button, the search form, the collapsible div — (4) `script`. In detail:
  - **`button.cl-navbar-toggler[type="button"][data-toggle="collapse"][data-target="#ftco-nav"]
    [aria-controls="ftco-nav"][aria-expanded="false"][aria-label="Toggle navigation"]`** ›
    `span.fa.fa-bars` › an inline SVG 3-bar glyph (Font Awesome `bars`, `viewBox="0 0 1536
    1792"`, wrapped in `<g transform="translate(0,1536) scale(1,-1)">`, `style="vertical-align:-0.1429em"`,
    `aria-hidden="true"`, `focusable="false"`) followed by the literal text **`Menu`** — the
    element is **first in the bar's DOM order** (the `-11` sibling has it second);
  - **`form.searchform.cl-order-lg-last[action="#"]`** › `div.cl-form-group.cl-d-flex` ›
    `input[type="text"].cl-form-control.cl-pl-3[placeholder="Search"]` +
    `button[type="submit"].cl-form-control.search` › `span.fa.fa-search` › inline SVG
    magnifier (`viewBox="0 0 1664 1792"`, same wrapper) — the form is **second in DOM,
    last visually** on desktop (`order:13`);
  - **`div#ftco-nav.cl-collapse.cl-navbar-collapse`** › `ul.cl-navbar-nav.cl-mr-auto` with
    **five `li.cl-nav-item`** in source order: **Home** (`cl-active`), **Page**
    (`cl-dropdown` › `a.cl-nav-link.cl-dropdown-toggle[href="#"][id="dropdown04"]
    [data-toggle="dropdown"][aria-haspopup="true"][aria-expanded="false"]` +
    `div.cl-dropdown-menu[aria-labelledby="dropdown04"]` holding **four**
    `a.cl-dropdown-item[href="#"]` reading `Page 1`…`Page 4`), then **Catalog**,
    **Blog**, **Contact**. The list carries **`cl-mr-auto`** (`margin-right:auto`) — the
    opposite of the `-11` sibling's `cl-ml-auto` — so it is **pinned to the bar's left** and
    all slack is absorbed **before** the search form.
  - **Every destination in the source is a dead `href="#"` except the wordmark**: the live
    page holds **13** `href="#"` (four social buttons + five rows + four dropdown items) and
    exactly one real href — the wordmark's `index.html`. There is no second page to probe;
    the recreation must materialise **thirteen** destinations as real content.
- **Measurements (live preview, Chromium 151, DPR 1, read at 1280/1200/1199/992/991/768/375/320 px):**
  - **`h2`:** 28 px / 400 / `line-height:1.5` (42 px) / `#000` / centred, `margin-bottom:8px`,
    measured **540 × 42 at `x = 370, y = 112`** at 1280 px (450 wide at 1199/992, 345 at 375,
    330 at 320 — the `cl-col-md-6` is `flex:0 0 50%; max-width:50%` at ≥768 px and `100 %`
    below, plus `.cl-text-center`).
  - **Heading container:** `padding:0 15px; margin:0 auto` with the max-width tiers —
    **1140 px** (x = 70) at 1280, **1140 px** (x = 30) at 1200, **960 px** (x = 119.5) at
    1199, **960 px** (x = 16) at 992, **720 px** (x = 135.5) at 991, **720 px** (x = 24) at
    768, **375 px** (x = 0 → inner 15 px) at 375 (cap not binding).
  - **Vertical rhythm:** `section.ftco-section{padding:7em 0}` = **112 px** top/bottom, transparent
    over the page's `#fafafa`; heading row `display:flex; flex-wrap:wrap;
    justify-content:center`; `.cl-mb-5` gives the heading column **`margin-bottom:48px`** →
    **112 + 42 + 8 + 48 = 210 px** to the brand row; the brand row is **72 px**; the bar
    starts at **`y = 282`**. The `<section>` closes the page with another **112 px** of
    `#fafafa` below the bar: the section is **1280 × 461.8 px** and `scrollHeight` = the
    800 px viewport, i.e. **the page does not scroll**.
  - **Brand row (`cl-row.cl-justify-content-between`):** measured **1140 × 72 at
    `x = 70, y = 210`** (`margin:0 -15px`, `display:flex; flex-wrap:wrap;
    justify-content:space-between`), holding two `div.cl-col` (`flex:1 0 0%`, `padding:0
    15px`) of **570 px each** at 1280 (480 at 1199/992, 360 at 768); at 375 px the two
    columns resolve to **169 px + 206 px** (the social column's `min-content` of 176 + 30 px
    gutter wins the flex distribution), and below ~375 px the row **wraps to two lines**
    (measured 112 px tall at 320 px) — a source fragility, not a feature to copy.
  - **Wordmark (`a.cl-navbar-brand`):** own-brand text, **20 px / weight 700 /
    `text-transform:uppercase` / `line-height:1` (20 px) / `#000`**, `padding:5px 0`,
    `margin-right:16px`, `margin-bottom:30px`, `display:inline-block`,
    `white-space:nowrap`; its `<span>` is `display:block`, **12 px / 500**, `line-height:1`
    (12 px) and inherits the uppercase — measured **114.09 × 42 at `x = 85, y = 210`**
    (20 + 5 + 5 + 12 = 42) with the span at `y = 235`, and the 30 px bottom margin is what
    makes the row exactly 72 px tall. It is the only link in the chrome with a real
    destination (`index.html`) and it **never changes colour on hover**
    (`.cl-navbar-brand:hover,:focus{color:#000}` = the resting colour).
  - **Social media (`div.social-media`):** `display:inline-block` inside the right-aligned
    second column; `p.cl-mb-0.cl-d-flex` measured **176 × 40 at `x = 1019, y = 210`**
    (4 × 40 px + 4 × 4 px). Each `a` is **40 × 40**, `border:1px solid #e6e6e6`,
    `border-radius:50%`, `margin-right:4px`, `display:flex; align-items:center;
    justify-content:center` (from the `cl-d-flex cl-align-items-center
    cl-justify-content-center` utilities), so the fourth circle's 4 px margin leaves it
    ending at **`x = 1191`**, 4 px short of the container's inner right edge (1195). Glyph
    colour `#4d4d4d`; **hover → `background:#f1bc31; border-color:#f1bc31`** and the glyph
    **`#fff`**. The circles sit against the **top** of the 72 px column (`y = 210`), level
    with the wordmark's first line.
  - **The Font Awesome spans are dead:** the page loads **one** stylesheet
    (`css/style.css`) and **no icon font** — there is no `@font-face` for Font Awesome and
    no CDN link — so the four `span.fa.fa-*` glyphs measure **0 × 0** and resolve to
    `font-family: Poppins`, and the live preview shows **four empty hairline circles**
    (the family's `scr-only` labels are the only text inside them). The toggler's
    `fa-bars` and the search button's `fa-search` *do* render because each holds an **inline
    SVG** next to the span. ColorLib's own marketing screenshot shows the four network
    glyphs, i.e. the live preview is the broken one; drawing real icons is a **documented
    delta** (see Requirements).
  - **The bar (`nav.ftco_navbar`):** `position:relative; z-index:3; padding:0` with
    **`background:#202040 !important`** (`.ftco-navbar-light`), **full-bleed** (no container
    wrapper), **not sticky**: the sheet contains **zero** occurrences of `sticky` and the nav
    is `position:relative`, so nothing floats over the page. Its markup carries `cl-bg-dark`
    (`background-color:#343a40 !important`), which **never renders** — the later
    `.ftco-navbar-light{background:#202040 !important}` at equal specificity wins by source
    order (this is the differentiating token against the `-11` sibling's `#1089ff`).
    The bar is flush to both viewport edges with **no border, no radius, no shadow**, and its
    height is exactly the height of its tallest line: measured **67.8 px** (24 + 19.8 + 24)
    at ≥992 px and **66 px** (10 + 46 + 10) below 992 px, at `y = 282`.
  - **The bar's container:** `div.cl-container` — measured **1140 px / `x = 70`** at 1280,
    **1140 / `x = 30`** at 1200, **960 / `x = 119.5`** at 1199, **960 / `x = 16`** at 992,
    **720 / `x = 135.5`** at 991, **720 / `x = 24`** at 768, **345 / `x = 15`** at 375;
    `display:flex; justify-content:space-between; align-items:center`, `flex-wrap:nowrap`
    at ≥992 px and **`flex-wrap:wrap`** below 992 px (the `.cl-navbar-expand-lg >
    .cl-container{flex-wrap:nowrap}` rule only applies at ≥992 px); its 15 px gutters are
    **removed below 992 px** (`.cl-navbar-expand-lg > .cl-container{padding-right:0;
    padding-left:0}` at ≤991.98 px).
  - **Desktop bar order (the source's signature):** the three children are toggler
    (`display:none` at ≥992 px), form (`order:13` from `cl-order-lg-last`), collapse. The
    collapse wrapper is `flex-grow:1; flex-basis:auto; display:flex !important;
    align-items:center` — measured **853 × 67.8 at `x = 85`** — and the list inside it is
    pushed to the **left** by its own **`margin-right:auto`** (measured
    `margin:0 395.562px 0 0`, i.e. all 395.56 px of slack sit **between the list and the
    search form**). Net desktop composition: **rows left, search field right.**
  - **Nav rows:** `.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link` —
    **`font-size:11px`**, `font-weight:500`, `text-transform:uppercase`,
    **`letter-spacing:2px`**, `color:#fff`, `opacity:1 !important`, `position:relative`,
    **`padding:24px 20px`** with `line-height:1.8` → `19.8 px`, i.e. **67.8 px tall rows that
    exactly define the bar's height**. The list (`ul.cl-navbar-nav.cl-mr-auto`) measured
    **457.44 × 67.8 at `x = 85`**, rows at `x = 85` (Home, 81 px), `166` (Page, 86.56),
    `252.56` (Catalog, 104.94), `357.5` (Blog, 78.58), `436.08` (Contact, 106.36) — each
    row's width = 20 px + its label + 20 px. The row layout is `display:flex;
    flex-direction:row` at ≥992 px and `column` below; the rows stretch to the bar's full
    height.
  - **The gold slab (the hover affordance):** every row's `a::before` is
    `content:""; position:absolute; width:100%; height:100%; bottom:0; left:0;
    background-color:#f1bc31; visibility:hidden; transform:scaleX(0);
    transition:all .2s ease-in-out; z-index:-1` and on **`:hover`** it becomes
    `visibility:visible; background-color:#f1bc31; transform:scaleX(1)` — a gold block that
    **wipes in from the left behind the label**, with the label itself staying `#fff`
    (`.cl-nav-link:hover{color:#fff}`). The row does **not** change colour, and the
    `z-index:-1` places the slab behind the text but still inside the bar's `z-index:3`
    stacking context. The **current row** (`li.cl-active > a`) keeps the slab visible and
    `scaleX(1)` **permanently** (`color:#fff`), so exactly one row is a gold block at rest;
    measured on the Home row: `::before` **81 × 67.8, `visibility:visible`,
    `transform:matrix(1,0,0,1,0,0)`, `#f1bc31`**.
  - **The caret:** `a.cl-dropdown-toggle::after` — `display:inline-block;
    margin-left:0.255em` (**2.805 px** at 11 px); `vertical-align:0.255em`; a CSS triangle
    built from `border-top:0.3em solid` (**3 px**, `currentColor` → white) with transparent
    left/right borders and no bottom border → a **6 × 3 px** white triangle on the `Page`
    row only.
  - **The dropdown panel:** `div.cl-dropdown-menu` — `position:absolute; top:100%; left:0;
    z-index:1000; min-width:10rem` (**160 px**), `padding:8px 0`, `margin:0.125rem 0 0`
    (**2 px**), `background:#fff`, `border:none` (the framework's
    `1px solid rgba(0,0,0,.15)` removed by the `.ftco-navbar-light` rule),
    **`border-radius:4px`**, **`box-shadow:0px 10px 34px -20px rgba(0,0,0,0.41)`**,
    `font-size:16px`; measured open **160 × 134.38 at `x = 166, y = 351.8`** — flush with
    the `Page` trigger's left edge and **2 px** below the bar's 349.8 px bottom edge. Its
    four items are `display:block; width:100%; padding:4px 24px` (`.25rem 1.5rem`),
    **12 px**, **`#000`**, each **29.59 px** tall; **hover/`:focus`** →
    **`background:none; color:#fff`** — i.e. **white text on the white panel: the source's
    hover state makes the hovered item invisible.** Fixing that is a **documented delta**
    (Requirements). (The framework's generic `.cl-dropdown-item.cl-active/:active{
    background:#007bff;color:#fff}` and `.disabled{color:#6c757d}` rules exist but never
    match this markup.)
  - **Opening and closing the dropdown (behaviour read from the source script and verified
    in the browser):** `snippet.js` binds **both** a hover path — `mouseenter`/`mouseleave`
    on every `nav .cl-dropdown`, toggling `.cl-show` on the `li` **and** its
    `.cl-dropdown-menu` and `aria-expanded` on the trigger — **and** a click path
    (`data-toggle="dropdown"`), which toggles the same two classes, sets `aria-expanded`,
    closes any other open dropdown first, and — if the panel's right edge would overflow
    the viewport — sets `left:auto; right:0` inline. Keyboard: **`ArrowDown` on the
    trigger** opens it and moves focus to the first item; **`ArrowUp`/`ArrowDown` inside
    the panel** step focus through the items; **`Escape`** closes it and returns focus to
    the trigger; a click anywhere outside closes it; **clicking an item closes** the panel
    (and does not navigate — every item is `href="#"`). Measured: click opened the panel at
    `x = 166, y = 351.8, 160 × 134.38` with `aria-expanded="true"` and `cl-show` on both the
    `li` and the menu; `Escape` closed it, restored `aria-expanded="false"` and left
    `document.activeElement` on the trigger; `ArrowDown` on the trigger re-opened it and put
    focus on `Page 1`; `mouseenter`/`mouseleave` opened and closed it.
  - **The search form:** `form.searchform.cl-order-lg-last` — **`height:46px`**,
    `border:1px solid rgba(255,255,255,0.1)`, `overflow:hidden`,
    **`border-radius:5px`** (the only rounding in the chrome); measured **257 × 46 at
    `x = 938, y = 292.89`** at 1280 px, its right edge exactly on the container's inner right
    edge (`938 + 257 = 1195`), vertically centred in the 67.8 px bar
    (`282 + (67.8 − 46)/2 = 292.9`). `div.cl-form-group.cl-d-flex` is **255 × 46** (its
    `margin-bottom:16px` from `.cl-form-group` is clipped by the form's fixed height +
    `overflow:hidden`). The **input** is `width:calc(100% - 46px)` → measured **209 × 46**,
    `border:none`, `background:#fff !important`, `color:rgba(0,0,0,0.7) !important`,
    `font-size:14px`, `line-height:21px`, `padding:6px 12px 6px 16px` (`.cl-form-control`'s
    `0.375rem 0.75rem` plus `cl-pl-3`'s `1rem`), `border-radius:0` (the custom
    `.cl-form-control{border-radius:0px}` kills the framework's `0.25rem`),
    `box-shadow:none !important`, placeholder **`Search`** in `rgba(0,0,0,0.7)`, and **no
    focus affordance at all** (`outline:none` from the framework's `:focus` rule and
    `box-shadow:none !important` — the sheet's `:focus{border-color:#000}` never fires
    because the `.searchform .cl-form-control{border:none}` rule outranks it). The
    **button** is `.cl-form-control.search` → **46 × 46**, `background:#fff`,
    `cursor:pointer`, holding the inline 20 px magnifier SVG (**18.56 × 20**, `fill`
    `rgba(0,0,0,0.7)`). The form's `action="#"`: submitting posts nowhere. The field's
    **257 px never shrinks** — measured 257 px wide at every viewport from 375 px up (at
    375 px it spans `x = 103 → 360`), so at ≤ 320 px the toggler + field overflow the
    container's 290 px content box and the container **wraps** (measured bar **90.72 px**
    with the field on a second line) — a source fragility to avoid (Requirements).
  - **Below 992 px:** the bar turns **`#000 !important`**, becomes `position:relative;
    padding:10px 15px` (measured bar **66 px** tall at 991/768/375), the toggler appears at
    the container's left (`x = 135.5` / `24` / `15`; measured **85.27 × 24.72 at
    `y = 302.64`**, vertically centred in the 46 px line), the search field keeps its 257 px
    and sits at the far right (container `justify-content: space-between`), and the list is
    hidden (`cl-collapse:not(.cl-show){display:none}`):
  - **Toggler:** `border:none; cursor:pointer; padding:4px 0 4px 12px; font-size:16px;
    text-transform:uppercase; letter-spacing:.1em` (**1.6 px**),
    `color:rgba(255,255,255,0.5) !important`, `:focus{outline:none !important}` (a delta to
    fix). Its icon is `span.fa.fa-bars › svg.cl-icon` at `.cl-icon{height:1em; width:auto;
    fill:currentColor; display:inline-block}` = **16 px** with the inline
    `vertical-align:-0.1429em`, followed by the text **`Menu`** — i.e. "☰ Menu", all at 50 %
    white.
  - **The collapse:** `div#ftco-nav` is `display:none` while closed and animated open by the
    script's Bootstrap-style collapse (`cl-collapsing` sets `height:0 → scrollHeight` with
    `transition:height .35s ease`, then `.cl-show`); the trigger gets `cl-collapsed` and
    `aria-expanded`, and `#ftco-nav` gets `aria-controls`/`aria-expanded` from the script.
    Measured at 375 px with the panel open: the collapse box is **330 × 389.27** (the
    container wraps, so it takes a full line under the toggler + field line), the list is
    `flex-direction:column` with `padding-bottom:10px`, each of the **five rows is 48.58 px**
    (`padding:14.4px 0` = `.9rem` at 11 px type), and the **current row is `#f1bc31` text on
    black** while the other four are `rgba(255,255,255,0.7)`; the gold `::before` slabs are
    killed on mobile (`:hover:before{display:none}` and `.cl-active > a:before{display:none}`).
  - **The mobile dropdown is always expanded:** at ≤991.98 px
    `.cl-dropdown-menu{display:block !important; background:#000}` and
    `.cl-dropdown-item{color:rgba(255,255,255,0.8)}` — the panel is `position:static`, full
    width of the panel (measured **330 × 134.38 at `y = 501.88`** at 375 px), its four items
    `12 px` / `padding:4px 24px` / **29.59 px** tall, indented 24 px under the `Page` row, so
    opening the panel reveals an already-open sub-list (no mobile disclosure control).
  - **Type:** `body{font-family:"Poppins", Arial, sans-serif; font-size:16px;
    line-height:1.8; font-weight:normal; background:#fafafa; color:gray}` (measured
    `rgb(128,128,128)`), with the earlier normalize block's
    `-apple-system, …, Roboto, …` stack **dead** (overridden by the later `Poppins` rule).
    `a{transition:.3s all ease; color:#f1bc31}` — **the page's inline-link colour is the same
    gold as the hover slab** — and `a:hover, a:focus{text-decoration:none !important;
    outline:none !important; box-shadow:none}`. `h2,.h2{line-height:1.5; font-weight:400;
    font-family:"Poppins", Arial, sans-serif; color:#000}` with
    `.heading-section{font-size:28px;color:#000}` applied over the framework's `2rem`.
    **The self-hosted webfonts are never rendered**: the sheet declares `@font-face` for
    **Roboto 400** and **Roboto 700** only (latin + latin-ext = 123,928 B), no element ever
    resolves to Roboto, and the archive's `roboto-100*`/`roboto-300*` files (four files,
    123,928 B) are not even declared — **the entire 247,856 B font payload of the archive is
    dead weight**.
- **Screenshot read-through (1200×972, AVIF→PNG, inspected 2026-10-12; live render at
  1280×900 cross-checked):** a browser-chrome mock of the live preview, address bar reading
  `preview.colorlib.com`. Under it, on a flat pale grey page, a centred black
  **"Website menu #02"** (~28 px) with generous space above and below; then a **white band**
  whose left carries a **two-line black wordmark — `PAPERMAG` in ~20 px bold uppercase over
  `MAGAZINE` in ~12 px uppercase** — and whose right carries **four ~40 px hairline circles**
  (the mock has the network glyphs drawn inside them; the live preview renders them empty —
  see the Font Awesome finding) ending just inside the container's right edge; then a
  **full-bleed, very dark navy bar ~68 px tall with hard top and bottom edges and no shadow**
  containing, from the left, **`HOME` sitting inside a mustard-gold block that fills the
  bar's height**, then tracked-out uppercase white labels **`PAGE`** (with a small white
  caret), **`CATALOG`**, **`BLOG`**, **`CONTACT`**, and at the bar's right end a **white
  rounded search field** (~257 × 46, `Search` placeholder in mid grey, a black magnifier at
  its right) that stops at the container's inner edge; below the bar, nothing but pale grey
  to the bottom of the frame. That frame — heading, light brand strip, dark bar with one
  gold slab, five labels, one white search field — is the design being replicated, and the
  screenshot is the source of the `#202040` / `#f1bc31` pair the stylesheet confirms.
- **Breakpoint truth table (all measured on the live preview):**

  | Width | Bar bg | Bar height | Container | Brand strip | Wordmark | Social | Toggler | List | Search field |
  | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
  | 320 px | **`#000`** | **90.72 px** (wraps) | 290 px @ `x = 15` | 112 px tall (wrapped) | `x = 15` | `x = 129` | visible @ `x = 15, y = 332` | `none` closed; rows **48.58 px** open | **257 px** @ `x = 15, y = 356.72` (wrapped to its own line) |
  | 375 px | `#000` | **66 px** | **345 px** @ `x = 15` | 72 px | **114.09 × 42** @ `x = 15` | **176 × 40** @ `x = 184` (ends 1191-relative → 360 with the 4 px margin) | **85.27 × 24.72** @ `x = 15` | `none`; open **330 × 389.27** @ `x = 15, y = 402.72` | **257 px** @ `x = 103` → 360 |
  | 768 px | `#000` | 66 px | **720 px** @ `x = 24` | 72 px | @ `x = 39` | @ `x = 553` | @ `x = 24` | `none`; open 720 wide | **257 px** @ `x = 487` |
  | 991 px | `#000` | 66 px | **720 px** @ `x = 135.5` | 72 px | @ `x = 150.5` | @ `x = 664.5` | @ `x = 135.5` | `none`; open 720 wide | **257 px** @ `x = 598.5` |
  | 992 px | **`#202040`** | **67.8 px** | **960 px** @ `x = 16` (cap not binding) | 72 px | @ `x = 31` | @ `x = 785` | hidden | **`flex`** 457.44 wide @ `x = 31` | **257 px** @ `x = 704` |
  | 1199 px | `#202040` | 67.8 px | **960 px** @ `x = 119.5` | 72 px | @ `x = 134.5` | @ `x = 888.5` | hidden | 457.44 @ `x = 134.5` | **257 px** @ `x = 807.5` |
  | 1200 px | `#202040` | 67.8 px | **1140 px** @ `x = 30` | 72 px | @ `x = 45` | @ `x = 979` | hidden | 457.44 @ `x = 45` | **257 px** @ `x = 898` |
  | 1280 px | `#202040` | 67.8 px | **1140 px** @ `x = 70` | 72 px | **114.09 × 42** @ `x = 85` | **176 × 40** @ `x = 1019` | hidden | **857.44-wide row** (ul 457.44 @ `x = 85`, auto margin **395.56**) | **257 × 46** @ `x = 938, y = 292.89` |

- **Reference artifacts:** `/tmp/wm12/prev.html` (live preview HTML, 5,103 B, sha256
  `5a8de116…`), `/tmp/wm12/style.css` (22,709 B, sha256 `2e78a96d…`) and
  `/tmp/wm12/snippet.js` (5,798 B, sha256 `ee4d7f69…`) — both **byte-identical** to
  `/tmp/wm12/z/website-menu-12/css/style.css` and `js/snippet.js` inside
  `/tmp/wm12/wm12.zip` (259,459 B, sha256 `32635318…`); `/tmp/wm12/z/website-menu-12/
  index.html` (4,900 B archive twin — the live-vs-archive `diff` is head-only),
  `README.md` (1,264 B) and the eight (unused) Roboto woff2 files; `/tmp/wm12/page.html`
  (the 108,893 B ColorLib template page — source of the description, posted/author/
  released/license and download-size facts); `/tmp/wm12/cat.js` (the 633,990 B preview
  catalog index that maps the slug to `theme/bootstrap/`); `/tmp/wm12/shot.png` (the
  1200×972 screenshot, 49,747 B, converted from the 7,255 B AVIF original — the source of
  the visual read-through); `/tmp/wm12/facts.py` (the extractor for the page facts);
  plus the live-render measurements and screenshots taken at 1280/991/375 px (desktop bar
  with the gold slab, the black mobile bar, and the open phone panel with the always-open
  `#000` sub-list).

## Design tokens

Extracted from the source stylesheet `css/style.css` (22,709 B) of `website-menu-12`
(live preview `https://preview.colorlib.com/theme/bootstrap/website-menu-12/` → HTTP 200;
byte-identical archive copy) and cross-checked against the 1200×972 screenshot and the live
render at 1280/1200/1199/992/991/768/375/320 px.

| Token | Value | Used by |
| --- | --- | --- |
| brand navy | **`#202040`** | the full-bleed bar at ≥992 px (`!important`; the sibling `-11` uses `#1089ff`, this variant is the family's dark one) |
| brand gold | **`#f1bc31`** | the row hover slab (`::before`, `scaleX(1)`), the **permanent** slab on the current row, the social-button hover fill + border, the mobile current-row text, and the page's inline-link colour (`a{color:#f1bc31}`) |
| bar black | **`#000`** | the bar's background **below 992 px** (`!important`) and the mobile dropdown panel |
| strip white | `#fff` (page `#fafafa`) | the brand strip's page background, the search field, the desktop dropdown panel |
| label white | **`#fff`** | all five desktop rows (including the current one, whose background is gold), the caret triangle, the search input's focus text |
| mobile row | `rgba(255,255,255,0.7)` | the four non-current rows inside the mobile panel |
| mobile current row | **`#f1bc31`** | the current row's label inside the mobile panel (gold on black) |
| mobile dropdown item | `rgba(255,255,255,0.8)` | the four sub-list items inside the mobile panel |
| toggler | `rgba(255,255,255,0.5)` | the mobile `☰ Menu` button (label **and** the `fill:currentColor` icon) |
| social border | **`#e6e6e6`** | the 1 px ring of every social circle (hover → `#f1bc31`) |
| social glyph | **`#4d4d4d`** | the network glyph inside each circle (hover → `#fff`) |
| wordmark ink | **`#000`** | both lines of the brand lockup (hover keeps `#000`) |
| search ink | `rgba(0,0,0,0.7)` | the search input's text and placeholder (both `!important`), and the magnifier's `fill` |
| search hairline | `rgba(255,255,255,0.1)` | the 1 px border around the white search field |
| field border (dead) | `rgba(0,0,0,0.1)`, focus `#000` | `.cl-form-control`'s own border — **outranked inside `.searchform`** by `border:none`, so the field has no border of its own and its focus rule never fires |
| dead framework surface | `#343a40` (`cl-bg-dark`), `#1d2124`, `#007bff`, `#0056b3`, `#6c757d`, `#212529`, `#495057`, `#ced4da`, `#e9ecef`, `#f8f9fa`, `#16181b` | Bootstrap-4 leftovers — `#343a40` is beaten by `#202040 !important`; the rest match no element in this markup |
| page | `#fafafa` | `body` background (the strip and the 112 px bands above/below the chrome) |
| ink | `gray` (**`#808080`**) | `body` text colour |
| heading | **`#000`** | `h2.heading-section` |
| shadows | **`0 10px 34px -20px rgba(0,0,0,0.41)`** | the desktop dropdown panel — **the bar, the strip and the search field have none** |
| radii | **`5px`** on the search field (the only rounding in the chrome), **`4px`** on the desktop dropdown panel, **`50%`** on the social circles, **`4px`** on the framework toggler (invisible: `border:none`); everything else **`0`** — the bar, the rows, the gold slab, the brand strip, the search input, the mobile panel and its sub-list | do not round anything else |
| type | `"Poppins", Arial, sans-serif` — body **16 px / `line-height:1.8` / 400**; the source's self-hosted Roboto 400/700 faces (and its four undeclared 100/300 files) **never render** | whole page |
| type scale | wordmark **20 px / 700 / uppercase / `line-height:1`** over a **12 px / 500 / uppercase / `line-height:1`** block span → a **42 px** lockup (`padding:5px 0`); bar rows **11 px / 500 / uppercase / `letter-spacing:2px` / `line-height:19.8px` / `padding:24px 20px`** → **67.8 px**; caret **6 × 3 px**; dropdown items **12 px** → 29.59 px rows (`padding:4px 24px`); search input **14 px / `line-height:21px`**; magnifier icon **20 px** (`18.56 × 20`); heading **28 px / 400 / `line-height:42px`**; toggler **16 px / uppercase / `letter-spacing:1.6px`** with a **16 px** icon; mobile rows **11 px** at `padding:14.4px 0` → **48.58 px** | chrome |
| spacing rhythm | section `padding:112px 0` (`7em`); container `padding:0 15px` + tiers 540/720/960/1140 (gutters zeroed in the bar below 992 px); row `margin:0 -15px`; heading column `margin-bottom:48px` (`cl-mb-5`) + `h2` `margin-bottom:8px`; brand row **72 px** (wordmark 42 + its `margin-bottom:30px`); brand `margin-right:16px`; social circle `margin-right:4px`; bar `padding:0` desktop / `10px 15px` mobile; search field `46 px` tall, `5 px` radius; dropdown `min-width:160px`, `padding:8px 0`, `margin-top:2px`; mobile list `padding-bottom:10px`; mobile rows `padding:14.4px 0` | page + chrome |
| layout | heading row `display:flex; flex-wrap:wrap; justify-content:center` with a `flex:0 0 50%` column at ≥768 px; brand strip `display:flex; flex-wrap:wrap; justify-content:space-between` with two `flex:1 0 0%` columns (570 px each at 1280); the social lockup is `display:flex` right-aligned inside its column and its circles sit at the column's **top**; the bar is a `flex` row with `align-items:center` and `justify-content:flex-start` (≥992) / `space-between` (below); on desktop the list is pushed **left** by its own `margin-right:auto` inside a `flex-grow:1` wrapper while the search form takes `order:13`, giving **rows left / field right**; below 992 px the container wraps so the open panel becomes its own full-width line under the toggler + field line | page + chrome |
| motion | `a{transition:.3s all ease}`; the row slab wipes in over **`all .2s ease-in-out`** (`scaleX(0) → scaleX(1)`); the collapse animates `height` over **`.35s ease`** (`cl-collapsing`); the desktop dropdown has **no transition** (class toggle only); `@media (prefers-reduced-motion: reduce)` disables the collapse transition in the source | all transitions |

**Google Fonts map:** one `<link>` for **Poppins** 400;500;700
(`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap`) — the
sheet asks for 400 (body/heading), **500** (the wordmark's second line and every bar row)
and **700** (the wordmark's first line) explicitly; the source's self-hosted Roboto woff2
files, including the four 100/300 faces it never even declares, are never copied. Icons
from `lucide-react`: `Search` (the magnifier), an equivalent three-bar glyph for the
toggler (`Menu`), `ChevronDown` for the caret, and four social glyphs for the circles
(`Facebook`, `Twitter`, `Instagram`, `Dribbble` — the last is the source's own network
choice; any equivalent set is acceptable as long as the count stays four).

## Requirements

### Feature: The heading band above the chrome

#### Scenario: A centred heading sits in a padded band above the brand strip

- **Given** the page loads at any width
- **When** the band above the brand strip is measured
- **Then** it is a section with **`padding:112px 0`** (`7em`) and a transparent background
  over the page's `#fafafa`, holding a classic container (`width:100%; padding:0 15px;
  margin:0 auto` + the 540/720/960/1140 px tiers) with a `justify-content:center` flex row
  and a heading column of `flex:0 0 50%; max-width:50%` at ≥768 px and `100%` below it,
  carrying **`margin-bottom:48px`**
- **And** the heading itself is **28 px / 400 / `line-height:1.5` (42 px) / `#000` /
  centred**, with an `8px` bottom margin, measured `540 × 42` at `x = 370, y = 112` at
  1280 px — so the brand strip's top edge lands at `y = 210` and the bar's at `y = 282`
- **And** the heading's text is **own copy** (its own wording and its own label), never the
  source's `Website menu #02` string; the section carries proper landmark semantics
  (`<section aria-labelledby=…>`)
- **And** the band's `112px` bottom padding is what closes the page below the bar — the
  recreation replaces that blank filler with real content (see the last feature) while
  keeping the `112px` above the heading and the source's **210 px** to the strip

### Feature: The white brand strip

#### Scenario: A two-line uppercase wordmark is pinned to the strip's left edge

- **Given** the brand strip renders
- **When** the wordmark is measured
- **Then** it is own-brand text (never the source's `Papermag` / `Magazine`) rendered as two
  uppercase lines: the first **20 px / weight 700 / `line-height:1` (20 px) / `#000`** and
  the second a **block** line at **12 px / weight 500 / `line-height:1` (12 px)**, the
  anchor `padding:5px 0` / `margin-right:16px` / `margin-bottom:30px` / `display:inline-block`
  — a **42 px** lockup (`±1 px`, measured 114.09 × 42 at `x = 85, y = 210` at 1280 px) whose
  30 px bottom margin makes the strip **72 px** tall
- **And** it is a link to the top of the page with **no colour change on hover**
  (`#000` at rest and on hover)
- **And** it has an accessible name and a visible `focus-visible` ring (a documented delta —
  the source removes all outlines with `a:hover, a:focus{outline:none !important}`)

#### Scenario: Four circular social buttons are right-aligned on the same strip

- **Given** the brand strip renders
- **When** the social row is measured
- **Then** it is exactly **four** links in one row, each **40 × 40**, `border-radius:50%`,
  `border:1px solid #e6e6e6`, `margin-right:4px`, flex-centred content, right-aligned by
  `justify-content:flex-end` on the strip's second half-column — measured **176 × 40 at
  `x = 1019`** at 1280 px, i.e. the row ends on the container's inner right edge (1195) with
  the fourth circle's own 4 px margin leaving it at **`x = 1191`**
- **And** the group sits against the **top** of the 72 px strip (`y = 210`, level with the
  wordmark's first line), not vertically centred
- **And** each button **hover/focus-visible → `background:#f1bc31; border-color:#f1bc31`**
  with its glyph turning **`#fff`** (resting glyph `#4d4d4d`)
- **And** each button renders a **real network icon** (a `lucide-react` glyph) with an
  accessible name — a **documented delta**: the source loads no icon font, so its four
  `span.fa` glyphs measure `0 × 0` and the live preview shows four empty circles (only
  ColorLib's own marketing screenshot draws the icons)
- **And** each is a real link to a real destination (the source's four are dead `href="#"`)

### Feature: The full-bleed navy bar

#### Scenario: The bar is a solid, full-bleed, non-sticky brand-colour band

- **Given** the page loads at ≥992 px
- **When** the bar is measured
- **Then** it is **full-bleed** (`width:100%`, no container wrapper, flush to both viewport
  edges), **`background:#202040`**, `position:relative`, `z-index:3`, `padding:0`, **no
  border, no radius, no shadow**, and its height is exactly the height of its tallest line
  (**67.8 px** = 24 + 19.8 + 24), sitting at `y = 282`
- **And** it is **not sticky and not fixed** — it is in normal flow, scrolls with the page
  and never overlays content (the source sheet contains zero `sticky` declarations)
- **And** the markup's Bootstrap-4 leftovers that never render are not reproduced: the
  `#343a40` `cl-bg-dark` surface, the `#1d2124` hover, the `cl-navbar-dark` 50 %/75 %/25 %
  white label colours and its `border-color`, the framework `#007bff`/`#0056b3`
  `.cl-dropdown-item.cl-active/:active` state, the `#6c757d` disabled colour, the
  `#212529`/`#495057`/`#ced4da` control defaults, the unreferenced
  `cl-dropdown-menu-right` class, and the `:where(html) … all: revert` reset must all be
  dropped

#### Scenario: The bar's container follows the classic max-width tiers

- **Given** the bar renders at each measured width
- **When** the container is measured
- **Then** it is `width:100%; padding:0 15px; margin:0 auto` with max-widths **540 / 720 /
  960 / 1140 px** at 576/768/992/1200 px — measured **1140 px / `x = 70`** at 1280,
  **1140 / `x = 30`** at 1200, **960 / `x = 119.5`** at 1199, **960 / `x = 16`** at 992,
  **720 / `x = 135.5`** at 991, **720 / `x = 24`** at 768, **345 / `x = 15`** at 375 — with
  its 15 px gutters **removed** below 992 px, and the row is `display:flex;
  justify-content:space-between; align-items:center` with `flex-wrap:nowrap` at ≥992 px and
  **`flex-wrap:wrap`** below it

#### Scenario: Desktop composition is rows left, search field right

- **Given** the bar renders at ≥992 px
- **When** its children are measured
- **Then** the toggler is `display:none`, the collapse wrapper is `flex-grow:1;
  flex-basis:auto; display:flex; align-items:center` (measured 853 × 67.8 at `x = 85`), and
  the list inside it is pinned to the container's **inner left edge** (`x = 85`) by its own
  **`margin-right:auto`**, which absorbs every spare pixel (measured **395.562 px** at
  1280) **between the list and the form**
- **And** the search form sits last **visually** although it is second in DOM order (an
  `order:13` / `order-lg-last` equivalent), its right edge exactly on the container's inner
  right edge (`938 + 257 = 1195`)
- **And** the list is exactly as wide as its five rows and the rows are packed left with no
  gap (measured `x = 85, 166, 252.56, 357.5, 436.08`)

### Feature: The nav rows and the gold slab

#### Scenario: Row type and geometry match the source

- **Given** any desktop row
- **When** its computed style is read
- **Then** it is **11 px / weight 500 / uppercase / `letter-spacing:2px` / `#fff` /
  `opacity:1`** with **`padding:24px 20px`** and `line-height:19.8px`, giving **67.8 px**
  rows that set the bar's height, each row's width = 20 px + its label + 20 px, and each row
  stretches to the bar's full height
- **And** the five labels are the source's **kinds**, never its strings (`Home`, `Page`,
  `Catalog`, `Blog`, `Contact` and `Page 1`…`Page 4` are all forbidden verbatim), the first
  row is the current page's row (real `aria-current="page"` semantics), the second carries
  the caret and the dropdown, and the last three are plain destinations

#### Scenario: The hover slab wipes across the row and the current row keeps it

- **Given** the bar renders at ≥992 px
- **When** a row is hovered
- **Then** a **`#f1bc31` block covering the row's full width and full height** becomes
  visible behind the label, wiping in from the left over **`all .2s ease-in-out`**
  (`scaleX(0) → scaleX(1)`), with the label itself staying **`#fff`** and the slab painted
  **behind the text** (the source's `z-index:-1` inside the bar's stacking context) — the
  slab **does not spill outside the row**
- **And** the **current row's slab is visible at rest** (`scaleX(1)`, measured 81 × 67.8 on
  the first row), so exactly one row reads as a solid gold block on load
- **And** every row also carries a real `focus-visible` affordance (a documented delta — the
  source removes all outlines)

#### Scenario: The caret marks the dropdown row only

- **Given** the dropdown row renders
- **When** its caret is inspected
- **Then** it is a small downward triangle **6 × 3 px** in `currentColor` (**white**),
  offset `0.255em` (`2.805 px`) from the label and vertically aligned `0.255em` —
  implemented with `lucide-react` `ChevronDown` (or an equivalent inline element) rather
  than a copied CSS `border` triangle
- **And** no other row carries a caret

### Feature: The dropdown

#### Scenario: The panel's geometry and tokens match the source

- **Given** the dropdown opens at ≥992 px
- **When** the panel is measured
- **Then** it is `position:absolute; top:100%; left:0; z-index:1000; min-width:160px;
  padding:8px 0; margin-top:2px; background:#fff; border:none; border-radius:4px;
  box-shadow:0 10px 34px -20px rgba(0,0,0,0.41)` — measured **160 × 134.38** at
  `x = 166, y = 351.8`, i.e. flush with the trigger's left edge and **2 px** below the bar
- **And** its four items are **12 px / `#000` / `padding:4px 24px` / 29.59 px** tall, full
  width of the panel, and their labels are own copy (never `Page 1`…`Page 4`)
- **And** item hover/`:focus-visible` shows a **visible** state — a **documented delta**: the
  source's rule is `background:none; color:#fff`, i.e. white text on a white panel, which
  renders the hovered item invisible

#### Scenario: It opens on hover and on click, and is fully keyboard operable

- **Given** the bar renders at ≥992 px
- **When** the trigger is hovered, clicked, or focused and given `ArrowDown`
- **Then** the panel opens (`display:block`) with `aria-expanded="true"` on the trigger and
  `cl-show`-equivalent state on both the item and the panel
- **And** it closes on `mouseleave`, on a click outside, on activating an item, and on
  **`Escape`** — which also returns focus to the trigger; opening a second dropdown closes
  the first; `ArrowUp`/`ArrowDown` step focus through the four items
- **And** if the panel's right edge would overflow the viewport it is flipped to the
  trigger's right edge (the source's `left:auto; right:0` guard, or an equivalent)
- **And** the panel is never in the tab order while closed, and no focus is trapped

### Feature: The search form

#### Scenario: A white 257 px search field is bolted to the bar's right end

- **Given** the bar renders at ≥992 px
- **When** the form is measured
- **Then** it is **257 × 46** with `border:1px solid rgba(255,255,255,0.1)`,
  `border-radius:5px`, `overflow:hidden`, vertically centred in the bar (measured
  `x = 938, y = 292.89` with a 46 px height against the bar's 67.8 px), its right edge on
  the container's inner right edge
- **And** the field is a **labelled** text input (the source has a bare `placeholder="Search"`
  and no label — a documented delta) with a **white** background, **14 px** text in
  `rgba(0,0,0,0.7)`, `padding:6px 12px 6px 16px`, `border-radius:0`, no shadow and **no
  border of its own**, occupying `calc(100% - 46px)` of the form
- **And** the submit control is a **46 × 46** button carrying a **20 px magnifier** glyph in
  `rgba(0,0,0,0.7)` with an accessible name (the source's is an unlabelled icon button)
- **And** the field keeps its **257 px** at every viewport ≥ 375 px and does not shrink with
  the bar; on desktop it never collides with the nav list (the list's auto margin absorbs
  the slack)
- **And** the form is a real `<form role="search">` whose submit handler **prevents the
  default navigation** and surfaces a visible result/status (a documented delta — the
  source's `action="#"` posts nowhere), and the input has a visible `focus-visible` ring
  (the source's field has **no** focus affordance at all)
- **And** below 375 px the field, the toggler and the container must **not** overflow: the
  source wraps its bar to **90.72 px** at 320 px because a fixed 257 px field plus an
  85.27 px toggler do not fit 290 px — the recreation must instead let the field shrink
  (or reflow) so that **320 px has no horizontal overflow and no wrap**

### Feature: The mobile bar and its collapse

#### Scenario: Below 992 px the bar turns black and the list collapses

- **Given** the page loads at ≤991 px
- **When** the bar is measured
- **Then** it is **`#000`**, `padding:10px 15px`, **66 px** tall, full-bleed, non-sticky;
  the container is `720 px / x = 135.5` at 991, `720 / x = 24` at 768, `345 / 15` at 375,
  lays out with `justify-content:space-between` and **wraps**, its gutters are removed, and
  the list is `display:none` until the panel opens
- **And** the toggler sits at the container's **left** — `85.27 × 24.72`, vertically centred
  (measured `y = 302.64`), padding `4px 0 4px 12px`, `16 px` uppercase label with
  `letter-spacing:1.6px` in `rgba(255,255,255,0.5)`, preceded by a **16 px** three-bar glyph
  at `fill:currentColor` — and the search field keeps its 257 px at the container's right
- **And** the bar turns black only below 992 px (`#202040` at exactly 992 px) and the
  toggler is `display:none` at ≥992 px

#### Scenario: The toggler opens a height-animated panel

- **Given** the page loads at 375 px
- **When** the toggler is activated
- **Then** it is a real `<button>` with `aria-expanded`, `aria-controls` and an accessible
  name, `aria-expanded` flips to `true`, and the panel animates open from `height:0` to its
  content height over **`.35s ease`** (measured: bar **66 px → 479.98 px** including the
  strip, collapse box **330 × 389.27** at `x = 15, y = 402.72`), then rests at `height:auto`
- **And** activating it again reverses the animation, returns the bar to **66 px** and sets
  `aria-expanded="false"` (verified at 375 px and 320 px, both directions)
- **And** nothing in the panel is focusable while it is closed, and the trigger carries a
  visible `focus-visible` ring (a delta — the source has `outline:none !important`)

#### Scenario: The collapsed list matches the source's mobile tokens

- **Given** the panel is open at ≤991 px
- **When** the list is measured
- **Then** it is a `column` list with **`padding-bottom:10px`**, holding five rows of
  **48.58 px** (`11 px` type at `padding:14.4px 0`) spanning the panel's full width
  (330 px at 375), the current row's label **`#f1bc31`** and the other four
  **`rgba(255,255,255,0.7)`**, with the gold hover slabs **disabled** on mobile
  (`:hover:before{display:none}`, `.cl-active > a:before{display:none}`)
- **And** the current row still exposes `aria-current="page"` and every row has a visible
  `focus-visible` state

#### Scenario: The dropdown becomes an always-open inline sub-list inside the panel

- **Given** the panel is open at ≤991 px
- **When** the dropdown row is inspected
- **Then** its panel is **`position:static`**, **full width** of the list (measured
  **330 × 134.38** at `y = 501.88` at 375 px), `background:#000`, `padding:8px 0` and
  **visible without any further interaction** (the source's `display:block !important`) —
  the recreation keeps that always-expanded behaviour **or** offers a real disclosure
  control, but must never leave a closed-menu marker on a visible sub-list
- **And** its four items are **12 px / `rgba(255,255,255,0.8)` / `padding:4px 24px` /
  29.59 px** tall, indented 24 px under the trigger row, each a real destination

### Feature: Materialised content, footer and quality gates

#### Scenario: The thirteen source destinations become real content

- **Given** the recreation is built
- **When** its links are audited
- **Then** **zero** `href="#"` remain: the four social buttons, the five rows and the four
  dropdown items all point at real in-app destinations (the source's only real href is its
  bit-rotten `index.html`)
- **And** the page carries the real content the source's 13 links promised (a short section
  or anchor per destination, scroll-margin accounting for the bar) so the bar's job —
  navigation — is demonstrable, replacing the source's 112 px of blank `#fafafa` below the bar
- **And** any imagery uses `https://picsum.photos/seed/gunwale-<n>/<w>/<h>` (the source ships
  **no** images at all)
- **And** the page still reads as a **header showcase**: the heading, the brand strip and the
  bar keep the source's order and proportions 1:1 above that content, and the page does not
  scroll horizontally at 320/375/768/992/1280 px

#### Scenario: Footer, provenance and gates

- **Given** the app is complete
- **When** it is verified
- **Then** the footer links **`https://www.componentdock.com/`** exactly once, branded
  "Component Dock", with a computed current year (the source has no footer at all)
- **And** **no** `colorlib` / `preview.colorlib.com` / `website-menu-12` reference exists
  anywhere in `apps/gunwale` (comments included) — provenance lives only in this spec,
  `TEMPLATES.md` and the PR
- **And** no copied asset exists: no `style.css`, no `snippet.js`, no Roboto woff2 files, no
  inline SVG path data from the source, no `cl-`/`ftco-` class names, no jQuery, no Bootstrap
- **And** `scripts/verify-app.sh gunwale` is green (typecheck + lint + knip + fallow + vitest
  at 100 % statements/branches/functions/lines + build) and `npm run spec:validate` passes

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/gunwale/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/gunwale/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

Measured evidence for every claim in this spec — an implementer should be able to tick each
line by reading the code and the tests, and to reproduce every number from
`https://preview.colorlib.com/theme/bootstrap/website-menu-12/` (or
`https://preview.colorlib.com/downloads/free/website-menu-12.zip`).

- [ ] Reference gathered and recorded: live preview **HTTP 200**, 5,103 B, `<title>Website
      menu 02</title>`, sha256 `5a8de116…`; slug-only `/theme/website-menu-12/` **404**;
      archive `…/downloads/free/website-menu-12.zip` **HTTP 200**, 259,459 B, sha256
      `32635318…`, whose `style.css` (22,709 B, sha256 `2e78a96d…`) and `snippet.js`
      (5,798 B, sha256 `ee4d7f69…`) are byte-identical to the live files, whose `index.html`
      (4,900 B) differs only in the head, and which contains **no images** and **eight**
      Roboto woff2 files (247,856 B, 87.7 % of the 282,527 B uncompressed payload);
      ColorLib page **HTTP 200**, 108,893 B (posted 2021-03-09 by Rok Krivec, 0 comments,
      prev `-11` / next `-13`, Author Colorlib, Released September 2026, License CC BY 3.0,
      "253 KB" download, `dateModified` 2026-09-25); screenshot HTTP 200, AVIF 7,255 B,
      1200×972 (PNG twin 49,747 B) read visually
- [ ] Structure 1:1: **header only** — a `padding:112px 0` band with a centred 28 px/400/
      `#000` heading, a **72 px** white brand strip (two-line uppercase `#000` lockup left,
      four 40 px hairline social circles right), a **67.8 px** full-bleed **`#202040`** bar
      (five 11 px tracked rows left, a **257 × 46** white `5px`-radius search field right),
      and **no** content sections/images/footer/sticky chrome in the source itself
- [ ] Vertical rhythm: **112 px** section padding → 42 px heading → 8 px → **48 px** column
      margin → strip at **`y = 210`** (72 px) → bar at **`y = 282`**; source page height
      461.8 px and `scrollHeight` = the viewport (the recreation adds real content below and
      keeps the 112 px above the heading)
- [ ] Bar: **full-bleed**, **`#202040`**, `z-index:3`, `padding:0`, no border/radius/shadow,
      **not sticky**, **67.8 px** at ≥992 px and **66 px** below, `#000` below 992 px only
- [ ] Container: `padding:0 15px` + the 540/720/960/1140 tiers, measured 1140@70 (1280),
      1140@30 (1200), 960@119.5 (1199), 960@16 (992), 720@135.5 (991), 720@24 (768), 345@15
      (375); gutters zeroed inside the bar below 992 px; `space-between`, `align-items:center`
- [ ] Desktop order: list pinned left by its own **`margin-right:auto`** inside a
      `flex-grow:1` wrapper (853 px wide at `x = 85`, auto margin **395.562 px**) and the
      form last via an `order:13` equivalent; measured row edges `85 / 166 / 252.56 / 357.5 /
      436.08` and field `x = 938 → 1195`
- [ ] Wordmark: two uppercase lines — **20 px / 700 / `line-height:1`** over **12 px / 500 /
      `line-height:1`** block — `padding:5px 0`, `margin-right:16px`,
      `margin-bottom:30px`, `#000` at rest and on hover, measured **114.09 × 42** at
      `x = 85, y = 210`; own brand text
- [ ] Social row: exactly **four** circles, 40 × 40, `border-radius:50%`, `1px solid
      #e6e6e6`, `margin-right:4px`, glyph `#4d4d4d`, top-aligned at `y = 210`, right-aligned
      with the row ending at the container's inner edge (fourth circle at 1191); hover/focus
      → `#f1bc31` fill + border and a `#fff` glyph; **real lucide icons with accessible
      names (delta: the source renders empty circles)**
- [ ] Rows: **11 px / 500 / uppercase / `letter-spacing:2px` / `#fff` / `padding:24px 20px`
      / `line-height:19.8px`** → **67.8 px**, five of them, packed left with no gap, the
      current row carrying `aria-current="page"`
- [ ] Gold slab: `#f1bc31`, 100 % × 100 % of the row, painted behind the label, hidden with
      `scaleX(0)` at rest and wiping to `scaleX(1)` on hover over `all .2s ease-in-out`; the
      current row's slab visible at rest (measured 81 × 67.8); no overflow outside the row
- [ ] Caret: **6 × 3 px** `currentColor` triangle, `0.255em` offset/alignment, on the
      dropdown row only (`lucide-react` `ChevronDown` or equivalent — no copied CSS triangle)
- [ ] Dropdown: `absolute; top:100%; left:0; min-width:160px; padding:8px 0; margin-top:2px;
      background:#fff; border:none; border-radius:4px;
      box-shadow:0 10px 34px -20px rgba(0,0,0,.41)` — measured **160 × 134.38** at
      `x = 166, y = 351.8`; items **12 px / `#000` / `padding:4px 24px` / 29.59 px** with a
      **visible** hover/`focus-visible` state (the source's is white-on-white — a documented
      delta)
- [ ] Dropdown behaviour: opens on **hover and on click**, closes on `mouseleave`, outside
      click, item activation and **`Escape`** (returning focus to the trigger); `ArrowDown`
      on the trigger focuses the first item; `ArrowUp`/`ArrowDown` step through items;
      `aria-expanded` always in sync; viewport-overflow guard reproduced or equivalent
- [ ] Search form: **257 × 46**, `border:1px solid rgba(255,255,255,0.1)`,
      `border-radius:5px`, `overflow:hidden`, vertically centred (`y = 292.89`), right edge
      on the container's inner edge; input `calc(100% - 46px)`, white, **14 px**
      `rgba(0,0,0,0.7)` text and placeholder, `padding:6px 12px 6px 16px`, `border-radius:0`,
      `box-shadow:none`, **no border of its own**; button **46 × 46** with a **20 px**
      magnifier; **257 px held at every width ≥ 375 px**
- [x] Search deltas: real `<form role="search">` + labelled input + submit handler that
      prevents the default and shows a status (source: `action="#"`, unlabelled icon button,
      placeholder-only), visible `focus-visible` ring on the input (the source has none),
      and **no horizontal overflow / no bar wrap at 320 px** (the source wraps to 90.72 px
      there because it fixes the field at 257 px)
- [ ] Mobile: toggler first in DOM, at the container's left (`x = 135.5/24/15`), a real
      `<button>` with `aria-expanded`/`aria-controls`, a **16 px** three-bar glyph +
      uppercase **16 px** label in **`rgba(255,255,255,0.5)`**, padding `4px 0 4px 12px`,
      **85.27 × 24.72**, vertically centred, visible `focus-visible` ring (delta)
- [ ] Collapse: panel hidden while closed, animates `height` over **`.35s ease`** to the
      content height, closes on a second activation (bar 66 px ↔ 479.98 px at 375 px,
      collapse **330 × 389.27** at `x = 15, y = 402.72`); five **48.58 px** rows
      (`padding:14.4px 0`), `padding-bottom:10px`, current row **`#f1bc31`**, others
      **`rgba(255,255,255,0.7)`**, hover slabs disabled on mobile
- [ ] Mobile dropdown: **always expanded** inline (`position:static`, `#000`, full width,
      measured **330 × 134.38** at 375 px) with four **12 px** items in
      **`rgba(255,255,255,0.8)`** at **29.59 px** rows, indented 24 px — or a real
      disclosure control; never a closed marker on a visible sub-list
- [ ] Type: Poppins 400/500/700 via one Google Fonts `<link>`; body **16 px /
      `line-height:1.8`**; `a` transitions `.3s`; **no** Roboto woff2 files copied, **no**
      Font Awesome, **no** inline `<path>` data from the source, **no** `cl-`/`ftco-` classes
- [ ] Shape language: **`5px`** on the search field, **`4px`** on the desktop dropdown,
      **`50%`** on the social circles; **`0`** everywhere else (bar, rows, slab, strip,
      input, mobile panel and sub-list)
- [ ] Dead source code dropped: the `#343a40` `cl-bg-dark` surface, the `cl-navbar-dark`
      50 %/75 %/25 % label colours, the Bootstrap `#007bff`/`#0056b3`/`#6c757d`/`#212529`/
      `#495057`/`#ced4da` defaults, `.cl-dropdown-item.cl-active/:active/.disabled`,
      `cl-dropdown-menu-right`, the `@media print` block (and its `size:a3`;
      `min-width:992px`), the `:where(html) … all: revert` reset, the system `Roboto` body
      stack, the four undeclared 100/300 Roboto faces and the four declared-but-unrendered
      400/700 faces, the `cl-sr-only` labels' dead glyph spans, and the `cl-` namespace
- [ ] Materialised content: **thirteen** real destinations (four social, five rows, four
      dropdown items) with `scroll-margin-top` ≥ the bar height; **zero** `href="#"`; images
      (if any) from `https://picsum.photos/seed/gunwale-<n>/<w>/<h>`; the page scrolls so the
      non-sticky bar leaves the viewport
- [x] Footer links `https://www.componentdock.com/` exactly once ("Component Dock") with a
      computed current year
- [x] Zero `colorlib` / "Website Menu 12" / `website-menu-12` / `Gunwale`-as-source
      references anywhere in `apps/gunwale` (comments included); none of the source's
      strings (`Papermag`, `Magazine`, `Home`, `Page`, `Catalog`, `Blog`, `Contact`, `Page
      1`…`Page 4`, `Search`, `Website menu #02`, `Menu`) reused
- [x] `public/CNAME` = `gunwale.free.componentdock.com` and
      `"homepage": "https://gunwale.free.componentdock.com"` in `apps/gunwale/package.json`;
      `package-lock.json` registers `@free-react-templates/gunwale`
- [ ] Accessibility: real `button`s with `aria-expanded`/`aria-controls`; `aria-current` on
      the current row; `aria-haspopup` + `aria-expanded` on the dropdown trigger; a labelled
      search input with `role="search"`; named icon-only controls; visible `focus-visible`
      rings on **every** interactive element (the source removes outlines with
      `outline:none !important` — restoring them is a delta); `Escape` closes the dropdown;
      the collapsed panel is not focusable while hidden; `prefers-reduced-motion: reduce`
      disables the `.35s` collapse animation and the `.2s` slab wipe; no horizontal overflow
      at 320 px
- [ ] `scripts/verify-app.sh gunwale` green (typecheck + lint + knip + fallow + vitest
      100 % + build); `npm run spec:validate` green
- [ ] PR description includes: source template (ColorLib Website Menu V12, posted 2021-03-09
      by Rok Krivec, released September 2026, CC BY 3.0), preview URL
      (`https://preview.colorlib.com/theme/bootstrap/website-menu-12/` → **HTTP 200**,
      5,103 B, `<title>Website menu 02</title>`; the slug-only `/theme/website-menu-12/`
      path 404s; archive `https://preview.colorlib.com/downloads/free/website-menu-12.zip`
      → HTTP 200, 259,459 B, sha256-identical `style.css`/`snippet.js`, and **no images**),
      the design tokens used (**`#202040`** bar, **`#f1bc31`** slab/social hover/mobile
      current row/inline links, **`#000`** mobile bar and mobile sub-list, `#fff` labels,
      `#000` wordmark, `#e6e6e6` circle rings, `#4d4d4d` glyphs, `rgba(255,255,255,.1)`
      field hairline, `rgba(255,255,255,.5)` toggler, `rgba(255,255,255,.7)` mobile rows,
      `rgba(255,255,255,.8)` mobile items, `rgba(0,0,0,.7)` search ink, `#fafafa` page,
      `gray` ink, `0 10px 34px -20px rgba(0,0,0,.41)` panel shadow, **`5px` search field /
      `4px` panel / `50%` circles and `0` elsewhere**, Poppins 400/500/700, 11 px tracked
      labels in 67.8 px rows, a 20 px-over-12 px two-line wordmark, 40 px social circles,
      a 257 px search field, 12 px dropdown items, 28 px heading, 112 px band padding,
      container tiers 540/720/960/1140, bar 67.8 px / 66 px), the structure (a **brand strip
      over a full-bleed `#202040` bar**, five rows left / search field right, a gold
      `#f1bc31` hover slab that the current row keeps, a hover-and-click dropdown, and a
      `992 px` breakpoint that flips the bar to black and collapses the list into a panel
      with an always-open `#000` sub-list, above a centred heading band) and what differs
      (new name + own two-line wordmark, own five labels and four dropdown items, the
      thirteen dead `href="#"` materialised as real content, real `lucide-react` social and
      caret icons instead of the dead `.fa` glyph spans and the CSS triangle, a labelled
      search form with a real submit handler instead of `action="#"`, a visible dropdown-item
      hover instead of white-on-white, a visible current-row `aria-current` signal, restored
      hover/`focus-visible` affordances everywhere the source says `outline:none`, a
      non-wrapping mobile bar below 375 px where the source wraps at 320 px, Google Fonts
      Poppins instead of the eight self-hosted Roboto files, reduced-motion handling, the
      112 px filler page replaced by real content, and the added footer)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
