# Template: Bimini (Website Menus)

## Purpose

Bimini is the *Website Menus* family's **full-screen overlay** variant — the first sibling whose menu is
a **whole-viewport cover** (`nav#colorlib-main-nav`, `position:absolute; top:0; right:0; bottom:0;
left:0`, **`width:100%` + `height:100%`**, **`background:rgba(0,0,0,0.99)`**, **`z-index:1002`**,
`text-align:center`, `overflow-y:scroll`) that **scales in from `transform: scale(0)`** over
**`0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)`** when `body` gains **`menu-show`** (which is also the
scroll lock: `overflow:hidden; position:fixed; height:100%`). Inside it, a table-cell centre column
(`.colorlib-table` → `display:table; width:100%; height:100%` with a `display:table-cell;
vertical-align:middle` cell) holds a **`40 px`/`700`/`#fff` uppercase `"Poppins"` logo with
`letter-spacing:2px`** over a **four-row** menu of **`14 px`/`600` uppercase** labels at
**`letter-spacing:5px`**, each link `display:block; padding:5px 0` (`35.2 px` rows) with an inner
`span` `padding:0 10px` — and the **current** row painted **`#f8b500`** gold. Behind the centre column
sits a full-bleed photo layer (`div.img`, `background-size:cover`) under a **`rgba(0,0,0,0.3)`** scrim
(`::after`) — but the snippet ships **no `images/` folder**, so `images/bg_3.jpg` **404s** on the live
preview and the overlay renders **pure black**. The overlay's close control is a
**`44 × 44` X at `top:40px; right:40px`** (two `30 × 2` `#fff` bars rotated `±45deg`) that is
`visibility:hidden; opacity:0` at rest and becomes visible **only `900 ms` after opening** (the
script's `BM.later.ms = 900`), while the **header burger underneath is unreachable** (header
`z-index:9` vs overlay `z-index:1002`). The page behind is a single **`100vh`/`100dvh`
`#202020`** hero (`.hero-wrap`) with a centred **`6vw`/`700`/`#fff` uppercase** headline
(`86.4 px` at 1440) over an **`18 px`** lead in **`rgba(255,255,255,0.8)`**, inside a **tiered**
Bootstrap-4-look-alike container (`1140 / 960 / 720 / 540`) whose gutters are zeroed by `cl-px-0`.
The page holds **nothing else**: no cards, no buttons, no forms, no footer, no second view, and it is
**exactly viewport height** at every width (`scrollHeight === clientHeight`). All **8** anchor
elements are dead or dead-ending: **two** `href="#"` plus **three** `index.html`, one `about.html`,
one `blog.html` and one `contact.html` — and `about.html` / `blog.html` / `contact.html` all
**404** on the preview host.

It is an original React recreation of the ColorLib free snippet **"Website Menu V20"** (source slug
`website-menu-20`), built under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The recreation matches the source's structure, order and design tokens 1:1 but
copies no asset (no `style.css`, no `snippet.js`, no `roboto-*.woff2`, no text verbatim) and never
reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-20/ — page title *"Website Menu V20 - Free
  Full-Screen Menu Overlay 2026 - Colorlib"*, on-page `h1` *"Website Menu V20"*, **HTTP 200**,
  **108,820 B**, sha256 `c0d011c5e1c29041b5f6f2b9245848f0250dcff099ea9884d7d1dc027b08811a`, verified
  2026-10-12. Page meta: posted **March 9, 2021** (structured data `datePublished`
  **2021-03-09T14:33:42+00:00**), `dateModified` **2026-09-25T10:42:07+00:00** (the September 2026
  rebuild); ColorLib's own description: *"The best free full-screen menu overlay template with a
  clean and minimal design that operates seamlessly on desktop and mobile."* September 2026 update
  note (verbatim): *"Updated September 2026: this snippet is now plain HTML and CSS plus a few lines
  of vanilla JavaScript: no jQuery, no Bootstrap files, no plugins. The download is 251 KB (it was
  264 KB). Use it on its own, or drop it into a Bootstrap 4, 5 or 6 project and it looks the same.
  The mobile menu and sticky header work without jQuery."* It is the `## Website Menus (20)` section's
  **twentieth** entry, at **line 3092** of `TEMPLATES.md` (section header at line 3071); the slug
  `website-menu-20` appears exactly **once** in `TEMPLATES.md` and in **no** spec on `main` before
  this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-20/` returns **HTTP 404** (`Not
  Found`) — like its `-01`…`-19` siblings, the *Website Menus* family does **not** live under the
  slug-only theme path; do not read that 404 as a dead preview. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-20/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **2,356 B**, `<title>Website menu 08</title>`, sha256
  `a552d431f14a860452c6c8702f4b971510c04a674d0709286e018c7a57476142`, verified 2026-10-12) — the URL
  the preview host's catalog index records for this slug. Its two assets —
  `css/style.css?v=0b78360a` (**16,497 B**, `text/css`, sha256
  `bd6e8d5c39a026ed22bfe109e967911bb4ddabdfb06fbba352f99ad54421523b`) and
  `js/snippet.js?v=ac5d989a` (**1,704 B**, `application/javascript`, sha256
  `36d0a551c31c0dfb0733a92aed15f0b3646bc9909776431cadc18db6b412aec7`) — are **byte-identical** (same
  sha256, verified) to the copies in the snippet's own downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-20.zip` (**HTTP 200**, `application/zip`,
  **256,660 B**, sha256 `1ecf1bcd26d3294a8c21cf82427613a0421516561e13e69e5a3b97b3eb228d61`; ColorLib
  rounds this to "251 KB"), which ships `index.html` (**2,153 B**, sha256
  `7d9ef4b547eb7db974e0ca7cf9cad2872cb51be87874ea271fc79ff2a6605fbd`), `css/style.css`,
  `js/snippet.js`, `README.md` (**1,264 B**, sha256
  `76ce5e2669f3dd0e5ef6898335b1af46d3d9b62d801e130101889daf8e6c5ddc`) and **eight** Roboto woff2 files
  (100/300/400/700 × latin/latin-ext — **247,856 B = 91.98 %** of the 269,474 B uncompressed archive;
  the `100-*` pair is shipped but never declared). The `diff` between the live page and the archive
  `index.html` is **head-only** (the preview host's two `noindex` metas, a `cdnjs.cloudflare.com`
  `dns-prefetch`, `fetchpriority="high"`, and the cache-busting query strings) — the archive is the
  readable, un-versioned twin of the live preview. Both were read for this spec and the live render
  was cross-checked in a browser at 1440, 991, 767 and 375 px plus the open-overlay state (see Design
  reference).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-20.jpg
  (**HTTP 200**, served as **AVIF** despite the `.jpg` name, 6,387 B, 1200 × 972, sha256
  `6524d0ce247a8b86933737493a6735057cbb442ae6ff170649805d1cf3facc52`, converted to PNG and inspected
  visually 2026-10-12). No screenshot-only fallback was needed — the live preview is the primary
  reference and the archive its readable twin. The screenshot is a browser-chrome mock of the
  **open overlay**: a **black** sheet with **`COMPANY LOGO`** centred in white uppercase letterspaced
  type, then **`HOME` in gold** (the current row) followed by **`ABOUT` · `BLOG` · `CONTACT`** in
  white, all uppercase and letterspaced, and an **X** in the top-right corner; the charcoal hero's
  headline (`WEBSITE MENU #10`) is faintly legible **through** the `rgba(0,0,0,0.99)` sheet, and the
  host background photo is **not** visible (its `images/bg_3.jpg` 404s).
- **New name:** `bimini` (apps/bimini, `@free-react-templates/bimini`) — a *bimini* is the **canvas
  top stretched over a yacht's cockpit**: a cover that closes over the whole open deck from above,
  which suits this variant as the family's **first menu that is not a bar, rail or band but a
  full-viewport sheet drawn over the entire page** (and its only overlay that scales in from
  `scale(0)`). It continues the family's nautical run: **menutree** (`-01`), **slidenav** (`-02`),
  **navpill** (`-03`), **menuribbon** (`-04`), **starboard** (`-05`), **larboard** (`-06`),
  **topdeck** (`-07`), **bowsprit** (`-08`), **gangway** (`-09`), **halyard** (`-10`), **ensign**
  (`-11`), **gunwale** (`-12`), **capstan** (`-13`), **windlass** (`-14`), **davit** (`-15`),
  **binnacle** (`-16`), **mizzen** (`-17`), **spinnaker** (`-18`), **sponson** (`-19`). Single
  lowercase word, kebab-safe (no hyphen needed). Alternates considered and also collision-free:
  *dodger* (a canvas weather screen) and *hatch*. Verified 2026-10-12:
  `git grep -il bimini origin/main` returns **zero** hits (no app folder, spec, doc file or
  `TEMPLATES.md` name collides) and `ls apps/` holds **1,665** entries with no `bimini`. The source
  name "Website Menu V20", its four row labels (`Home`, `About`, `Blog`, `Contact`), its
  `Website Menu #10` headline, its `Company Logo` brand string and its `Lorem ipsum…` lead are never
  reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V20" (source slug `website-menu-20`,
  https://colorlib.com/wp/template/website-menu-20/), `datePublished` **2021-03-09**, rewritten in the
  2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no Bootstrap files**. Design-wise this
  is the family's **"full-screen black overlay menu (scale-in) over a full-viewport charcoal hero"**
  variant — the **first** sibling whose chrome is a **whole-viewport sheet** rather than a bar/rail/
  band, the **only** one whose menu is centred in a `display:table-cell` column, and the **only** one
  whose open/close motion is a **`scale(0) → scale(1)`** grow (`sponson`'s rail slides `translateX`,
  the earlier siblings swap a bar). Its accents are the amber pair **`#fec771`** (the sheet's generic
  `a` colour, and the intended hover-underline fill) and **`#f8b500`** (the current row's ink); the
  page surface is `#fafafa` *on paper* but is **never seen** — the hero covers `100vh` in `#202020`.
- **CSS namespace:** the sheet (**16,497 B**, **836** lines, **132** `{` blocks, **12** `@media`
  blocks (4 `min-width` container tiers 576/768/992/1200, 1 `min-width:768px` for the column, 3
  `max-width:767.98px`, 2 `print`, 2 `prefers-reduced-motion: reduce`), **6** `@font-face` blocks,
  **1** `@supports (height: 100dvh)`, **29** `!important`), self-contained and `cl-`-prefixed for its
  utilities (`cl-container`, `cl-row`, `cl-no-gutters`, `cl-col-md-12`, `cl-text-center`, `cl-mb-4`,
  `cl-px-0`, `cl-justify-content-center`, `cl-align-items-center`, `cl-icon`, plus the `.nav` base) and
  is a hand-rolled Bootstrap-4-look-alike — **not** a framework skin. Its first ~54 lines are a
  `:where(html) … all: revert` reset (22 `revert` declarations, so the snippet renders identically
  inside a Bootstrap host page), then the normalize, the framework base (the container's
  540/720/960/1140 tiers, `.cl-row`, `.cl-col-md-12`, the utilities, the Bootstrap palette, the
  `@media print` block incl. `@page{size:a3}`), the `@font-face` block, and then the ~360-line custom
  block (`body`, `body.menu-show`, `a`, `h1,h3`, `.img`, `#colorlib-main-nav` + its
  `.colorlib-table`/`.img`/`.colorlib-table-cell`/`.colorlib-nav-toggle`/`.logo`/`ul`/`li` descendants,
  `header` + `.colorlib-navbar-brand`, `.colorlib-nav-toggle` + its `i`/`::before`/`::after`/hover/
  `cl-active` states, `.hero-wrap`, `.slider-text .desc h1/h3`, `.js-fullheight` + the `@supports`
  upgrade). The word `colorlib` appears **75** times in the sheet (**10** in the markup, **5** in the
  script), all in the `colorlib-`/`js-colorlib-` namespace, which the recreation must not reuse;
  `ftco` appears **once** in the markup (`ftco-animate`, a **stale class from the parent theme with no
  rule in this sheet**) and never in the CSS.
- **Diff against the `-19` sibling's sheet (13,527 B)** — 2,970 B larger, and the differences are
  exactly this variant's identity: the `-19` sibling's rail machinery (`#colorlib-aside`,
  `#colorlib-main-menu`, `#colorlib-main`, `body.offcanvas`, the white `20 %` column, the `270 px`
  push drawer, the `a::after` underline) is **entirely absent**; this sheet adds instead
  `#colorlib-main-nav` + its `display:table`/`display:table-cell` inner structure, the `div.img`
  photo layer with its `rgba(0,0,0,0.3)` `::after` scrim, `body.menu-show`, the `scale(0)` grow, the
  centred overlay `ul/li`, `.hero-wrap` + `.slider-text .desc` and the `.colorlib-navbar-brand`
  header; the accent moves from the sibling's coral **`#ff6768`** to the amber pair **`#fec771`** /
  **`#f8b500`**; the surface moves from `#fff`-on-`#fafafa` to **`rgba(0,0,0,0.99)` over `#202020`**;
  and the container stops being fluid — this sheet ships the **full 540/720/960/1140 tier set**.
- **HTML structure (live preview, 2,356 B — archive twin 2,153 B):** document order is exactly —
  (1) `div.page` wrapping everything, (2) inside it `nav#colorlib-main-nav[role=navigation]` holding
  `a.js-colorlib-nav-toggle.colorlib-nav-toggle.cl-active[href="#"]` › `i` (the **close X**, note the
  hard-coded `cl-active` **and** the absence of the `show` class that the script adds), then
  `div.js-fullheight.colorlib-table` › `div.img[style="background-image: url(images/bg_3.jpg)"]`
  (**the missing photo**) + `div.colorlib-table-cell.js-fullheight` › `div.cl-row.cl-no-gutters` ›
  `div.cl-col-md-12.cl-text-center` › `h1.cl-mb-4` › `a.logo[href="index.html"]` reading
  **`Company Logo`**, then a bare `ul` with **four** `li` in source order — **Home**
  (`li.cl-active`) · **About** · **Blog** · **Contact** — each holding one `a[href]` › `span`
  (`index.html`, `about.html`, `blog.html`, `contact.html` respectively),
  (3) `div#colorlib-page` › `header` › `div.cl-container` › `div.colorlib-navbar-brand` ›
  `a.colorlib-logo[href="index.html"]` reading **`Company Logo`**, plus
  `a.js-colorlib-nav-toggle.colorlib-nav-toggle[href="#"]` › `i` (the **header burger**),
  (4) `section.hero-wrap.js-fullheight` › `div.cl-container.cl-px-0` ›
  `div.cl-row.cl-no-gutters.slider-text.js-fullheight.cl-align-items-center.cl-justify-content-center
  [data-scrollax-parent="true"]` › `div.cl-col-md-12.ftco-animate.cl-text-center` › `div.desc` ›
  `h1` reading **`Website Menu #10`** + `h3` reading **`Lorem ipsum dolor sit amet, consectetur
  adipisicing elit.`**,
  (5) `script`.
  - **A numbering clash in the source:** the page `<title>` says **"Website menu 08"**, the on-page
    overlay heading says **"Company Logo"**, the hero heading says **"Website Menu #10"**, the README
    says **"Website menu 08"** and the ColorLib article says **"Website Menu V20"** — five different
    numbers/names for one snippet. The recreation must not carry **any** of them.
  - **Stale markup to drop:** `data-scrollax-parent="true"` (the scrollax library is not loaded),
    `class="ftco-animate"` (no rule exists for it), the `div.img` `style="background-image:
    url(images/bg_3.jpg)"` (the file is **absent** and **404s**), and the source's `<i>`-only toggles
    (which carry no accessible text).
  - **Anchors:** the page holds **8** anchors — **two** `href="#"` (both toggles) plus **three**
    `index.html` (overlay logo, overlay `Home`, header logo), one `about.html`, one `blog.html`, one
    `contact.html`. On the preview host **`about.html`, `blog.html` and `contact.html` all return
    HTTP 404** (`curl -sS`, 9 B bodies), while the three `index.html` links are **no-ops**: they
    resolve to this very page (`…/bootstrap/website-menu-20/index.html` → **HTTP 200**, 2,356 B,
    byte-identical to the directory URL — not a 404, and not a missing directory index). Every
    destination is therefore dead or dead-ending (nothing navigates); the recreation must
    materialise all eight.
- **Measurements (live preview, Chromium, DPR 1, read 2026-10-12; the sheet was fetched by curl
  **and** by the browser and the two copies are byte-identical, sha256 `bd6e8d5c…`, so every token
  below is confirmed by the source CSS, and the geometry was **cross-checked against the rendered
  pixels** of screenshots at 1440, 991, 767 and 375 px plus the open-overlay state). Standing caveats
  for this family: a `getComputedStyle` read taken right after a CDP
  `Emulation.setDeviceMetricsOverride` can return a **stale pre-override value** (re-read after the
  override settles or reload), and reads taken during the `0.8s` overlay transition return
  mid-animation values — treat screenshot pixels as geometry authority.
  - **`body`:** `font-family:"Poppins", Arial, sans-serif`, `font-size:16px`, `line-height:1.8`
    (`28.8 px`), `font-weight:normal`, **`background:#fafafa`**, **`color:gray`** (= `#808080`),
    `margin:0`, `text-align:left`. With `menu-show` it becomes **`overflow:hidden;
    position:fixed; height:100%; width:100%`**.
  - **`div.page`:** the wrapper; measured **`1440 × 900 @ x = 0, y = 0`** at 1440 px (it is *not*
    `overflow:hidden` in this variant — the `-19` sibling's `#colorlib-page` was).
  - **The hero (`section.hero-wrap.js-fullheight`):** **`background:#202020`**,
    **`height:100vh !important`** (upgraded to **`100dvh`** by `@supports (height:100dvh)`); measured
    **`1440 × 900 @ x = 0, y = 0`** at 1440 px, `991 × 900` at 991, `767 × 900` at 767,
    `375 × 812` at 375 — it is **always exactly viewport height**.
  - **The hero's tiered container (`div.cl-container.cl-px-0`):** `width:100%` with the Bootstrap
    tiers — **`540 / 720 / 960 / 1140`** at `576 / 768 / 992 / 1200 px` — and `cl-px-0` zeroing both
    `15 px` gutters; measured **`1140 @ x = 150`** at 1440 px, **`720 @ x = 135.5`** at 991,
    **`540 @ x = 113.5`** at 767, **`375 @ x = 0`, `padding:0 15px`** at 375.
  - **The hero row (`div.slider-text`, also `.js-fullheight`):** `display:flex; flex-wrap:wrap;
    margin:0 -15px` + `cl-align-items-center` + `cl-justify-content-center`; measured
    **`1140 × 900 @ x = 150, y = 0`** at 1440 px (the full-height flex centre is what pushes the
    headline to `y = 363.7`).
  - **The hero column (`div.cl-col-md-12.ftco-animate.cl-text-center`):** `width:100%`,
    `padding:0 15px`, `position:relative`, `text-align:center`; `flex:0 0 100%; max-width:100%` from
    **768 px** up (it stays `100 %` below too, so there is no stacking change); measured
    **`1140 × 172.6 @ x = 150, y = 363.7`** at 1440 px, `720 × 132.2 @ y = 383.9` at 991,
    `540 × 112 @ y = 394` at 767, `375 × 103.8 @ y = 354.1` at 375.
  - **The hero headline (`h1`):** **`font-size:6vw`**, **`font-weight:700`**, **`color:#fff`**,
    **`text-transform:uppercase`**, `line-height:1.5` (`h1,h3` custom block) and `margin:0 0 8px`;
    measured **`86.4 px`/`129.6 px`** for a box **`1140 × 129.6 @ y = 363.7`** at 1440 px,
    **`59.46 px`/`89.2`** at 991, **`46.02 px`/`69`** at 767, **`22.5 px`/`33.8`** at 375 (it wraps to
    two lines at 375 px and the hero column grows to `103.8 px`).
  - **The hero lead (`h3`):** **`color:rgba(255,255,255,0.8)`**, **`font-size:18px`**, `line-height:1.5`
    (`27 px`), `margin:0 0 8px`; measured **`1140 × 27 @ y = 501.3`** at 1440 px, `720 × 27 @ y = 481.1`
    at 991, `540 × 27 @ y = 471` at 767, **`375 × 54`** (two lines) `@ y = 395.9` at 375.
  - **The header (`header`):** `padding:2em 0` = **`32px 0`**, **`position:absolute; top:0; left:0;
    right:0`, `z-index:9`**, `margin:0 auto`; below **767.98 px** the padding drops to `1em 0`
    (**`16px 0`**). Measured **`1440 × 92.8 @ y = 0`** at 1440 px and **`375 × 60.8`** at 375.
  - **The brand (`a.colorlib-logo`, inside `.colorlib-navbar-brand` `float:left`):** `font-size:12px`,
    **`color:#fff`**, **`letter-spacing:5px`**, `font-weight:600`, `text-transform:uppercase`,
    `line-height:1.5`; measured **`158.9 × 18 @ x = 165, y = 38`** at 1440 px (`x = 150.5` at 991,
    `x = 128.5` at 767, `x = 15` at 375 — it tracks the container). Its unused `span`
    (`11px/300/rgba(255,255,255,0.8)/letter-spacing:7px`) and unused `i` (`color:#fec771;
    position:absolute; top:-18px; left:7px; font-size:48px`) rules exist in the sheet but the markup
    has **no** `span`/`i` inside the brand — do not invent them.
  - **The header burger (`a.colorlib-nav-toggle`):** `float:right`, `position:relative`, `top:0;
    right:0`, **`z-index:1003`** (but inside the `z-index:9` header, so effectively **below** the
    overlay — see pitfalls), `display:block`, `margin:0 auto`, `margin-top:0`, `right:10px` below
    767.98 px; measured **`20 × 28.8 @ x = 1255, y = 32`** at 1440 px (right edge `1275` = the
    container's right edge `165` mirrored) and **`@ x = 330, right:10px`** at 375. Its `i` is a
    **`20 × 2`** bar in **`#fff`** (`font:bold 14px/.4 Helvetica`, `text-indent:-55px`) whose
    `::before` (`top:-7px`) and `::after` (`bottom:-7px`) bars are **`30 × 2`** in **`#fff`** and
    spread to `-10px` on hover (`0.2s`); the `X` transform exists **only** under `cl-active`, which
    the script **never** adds to this element (it uses `show` on the overlay's toggle instead), so the
    header control stays a three-bar burger forever.
  - **The overlay (`nav#colorlib-main-nav`):** **`position:absolute; top:0; right:0; bottom:0;
    padding:0; width:100%; height:100%`**, **`background:rgba(0,0,0,0.99)`**, **`z-index:1002`**,
    `text-align:center`, **`visibility:hidden; opacity:0; transform:scale(0)`** at rest,
    **`overflow-y:scroll`**, `transition:all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)`; measured
    **`1440 × 900 @ x = 0, y = 0`** open with a **`15 px` scrollbar gutter** (its inner content is
    `1425` wide). Under **`body.menu-show`** it becomes `visibility:visible; opacity:1;
    transform:scale(1)`.
  - **The overlay's table (`div.colorlib-table` → `div.colorlib-table-cell`):**
    `display:table; width:100%; height:100%` with the cell `display:table-cell;
    vertical-align:middle`; measured **`1425 × 900`** — the table-cell centring is what puts the
    centred block at `y = 337.6` (logo) and `y = 421.6` (menu) at 1440 px.
  - **The photo layer (`div.img`):** `position:absolute; top:0; left:0; bottom:0; height:100%;
    width:100%; opacity:1; background-size:cover; background-repeat:no-repeat;
    background-position:center center` with a `::after` scrim `position:absolute; inset:0;
    background:rgba(0,0,0,0.3)`; measured **`1425 × 900 @ x = 0, y = 0`**, `background-image:
    url(…/website-menu-20/images/bg_3.jpg)` — which **404s**, so the layer paints **nothing** and the
    scrim is invisible over the near-opaque sheet.
  - **The overlay brand (`h1.cl-mb-4` › `a.logo`):** the `h1` is `margin-bottom:1.5rem !important`
    (**`24 px`**) and inherits the custom `h1,h3{line-height:1.5; font-weight:400; color:#000}`, but
    the `a.logo` inside it sets **`font-size:40px`**, **`color:#fff`**, `text-transform:uppercase`,
    **`letter-spacing:2px`**, **`font-weight:700`**, `display:inline-block`, `line-height:1.5`; the
    script's own family is `"Poppins", Arial, sans-serif`. Measured `h1` **`1425 × 60 @ y = 337.6,
    margin:0 0 24px`**, `a.logo` **`353.7 × 60 @ x = 535.7`** (centred) at 1440 px. Its unused `span`
    rule (`14px/300/rgba(255,255,255,0.8)/letter-spacing:8px`) has **no** counterpart in the markup.
  - **The overlay menu (`ul`, bare — no class, no `role`):** `padding:0; margin:0; display:block`,
    **`padding-top:20px` below 767.98 px**; measured **`1425 × 140.8 @ y = 421.6`** at 1440 px.
  - **The overlay rows (`li`):** `list-style:none`, `padding:0`, `margin:0`, **`font-weight:600`**,
    **`font-size:14px`**, **`letter-spacing:5px`**, `text-transform:uppercase`, `line-height:1.8`
    (inherited → `25.2 px`); each `a` is `display:block; color:white; padding:5px 0` with an inner
    `span{color:white; position:relative; padding:0 10px}`. Measured **`1425 × 35.2`** per row
    (`25.2 + 10`), **four** rows from `y = 421.6` on a **`35.2 px`** pitch, the current `span`
    **`82 × 16 @ x = 671.5, y = 430.6, padding:0 10px`**.
  - **The current row (`li.cl-active a span`):** ink **`#f8b500`** (measured
    `rgb(248,181,0)`) — the only colour change in the list; the sheet also declares
    `#colorlib-main-nav ul li.cl-active a span:before{background:#fec771; visibility:visible;
    transform:scaleX(1)}` plus hover/active/focus variants, but there is **no base rule that gives
    that pseudo-element any geometry or content**: computed `::before` reports
    **`content: "none"`, `width:auto`, `height:auto`, `position:static`**, so the amber underline
    **never renders** on the live page. Treat the amber `#fec771` as the *intended* hover treatment
    (restore it as a working affordance — a documented delta).
  - **The overlay's close toggle (`#colorlib-main-nav > .colorlib-nav-toggle`):** `position:absolute;
    top:40px; right:40px; height:44px; width:44px; padding:0 !important; line-height:0`,
    **`visibility:hidden; opacity:0`** at rest (`transition:0.3s`, disabled under reduced motion),
    becoming `visibility:visible; opacity:1` with **`.show`**; its `i` is forced to `top:18px;
    left:0` and painted as **two `30 × 2` `#fff` bars** at `rotateZ(±45deg)` (the `i` itself is
    `background:transparent` under `cl-active`). Measured **`44 × 44 @ x = 1341, y = 40`**
    (`right:40` of the `1425` content box, i.e. `1440 − 15 − 40`). `.menu-show` alone does **not**
    show it: the script adds `show` **900 ms** after opening.
  - **Behaviour (from `js/snippet.js`, 1,704 B):** the script binds **both**
    `.js-colorlib-nav-toggle` elements, stamps `aria-label="Menu"` + `aria-expanded="false"` on each,
    and toggles **`document.body.classList.toggle('menu-show', open)`** (the only state class);
    all toggles get `aria-expanded` in sync; with `BM.later = {sel:'#colorlib-main-nav >
    .js-colorlib-nav-toggle', cls:'show', ms:900}` the inner X only becomes visible **900 ms** after
    opening and loses `show` on close; the script does **not** add `cl-active` (it is hard-coded in
    the markup) and `BM.outside` is **`null`** and `BM.onScroll` is **`false`**, so there is **no
    outside-click close and no scroll close**; **`Escape`** closes. There is no jQuery, no framework,
    no other behaviour.
  - **Page height / overflow:** at 1440 × 900 `documentElement.scrollHeight === clientHeight`
    (900 = 900) and `scrollWidth === innerWidth` (1440 = 1440); the same holds at 991 (900 = 900),
    767 (900 = 900) and 375 (812 = 812) — the page is **exactly viewport height at every width** and
    **never scrolls**. While the overlay is open the body is `position:fixed`, so the document cannot
    scroll either; the overlay itself is `overflow-y:scroll` (a `15 px` gutter appears).
- **Assets:** the snippet ships **no images at all** — the archive has **no `images/` folder** and the
  sheet references **no** `url(...)` other than the **six** declared `@font-face` sources (the
  archive also ships `roboto-100-*`, never declared). The only other files are the **eight Roboto
  woff2 files** (247,856 B = **91.98 %** of the 269,474 B archive), and **no rule ever asks for
  Roboto** — the live page's only `<link>` is the sheet itself (plus an unused
  `cdnjs.cloudflare.com` `dns-prefetch`), so **no webfont loads at all** and
  `"Poppins", Arial, sans-serif` resolves to **Arial** for the hero, the brand, the overlay logo and
  the menu alike (every `document.fonts` entry reports `unloaded`). The one `images/bg_3.jpg`
  reference (the overlay's photo layer) **404s**.

## Breakpoint behaviour (values measured on the live preview and derived from its sheet)

| Width | Hero | Container | Header | Headline | Overlay (open) | Burger |
| --- | --- | --- | --- | --- | --- | --- |
| 375 | `375 × 812` (`100dvh`), `#202020` | `375 @ x = 0`, `padding:0 15px` | `60.8` tall, `padding:16px 0` | **`22.5 px`**, wraps to 2 lines (`33.8`), lead `375 × 54` | `rgba(0,0,0,0.99)` sheet, `ul` `padding-top:20px`, logo `40 px`, rows `35.2 px` | `20 × 28.8 @ x = 330`, `right:10px`, three `#fff` bars |
| 767 | `767 × 900`, `#202020` | `540 @ x = 113.5` | `60.8` tall, `padding:16px 0` | **`46.02 px`** (`69` box) | as above, `ul` `padding-top:20px` | `right:10px` |
| 991 | `991 × 900`, `#202020` | `720 @ x = 135.5` | `92.8` tall, `padding:32px 0` | **`59.46 px`** (`89.2` box), lead `y = 481.1` | as above, `ul` `padding:0` | `right:0` |
| 1440 | `1440 × 900`, `#202020` | `1140 @ x = 150` | `92.8` tall, `padding:32px 0` | **`86.4 px`** (`129.6` box) `@ y = 363.7`, lead `y = 501.3` | `1440 × 900`, logo `353.7 × 60 @ x = 535.7`, `ul` `1425 × 140.8 @ y = 421.6`, rows `35.2 px`, X `44 × 44 @ x = 1341, y = 40` | `20 × 28.8 @ x = 1255` |

Three things flip at **`767.98 px`**: the header's padding drops `32 px → 16 px`, the burger moves to
`right:10px`, and the overlay `ul` gains `padding-top:20px`. A fourth family of steps happens as the
**container** crosses its Bootstrap tiers (`576/768/992/1200`), which is what moves the brand, the
burger and the headline's `x` and its `6vw` size. The overlay itself is **identical at every width**
apart from those three rules — it is always `width/height:100%`, always `rgba(0,0,0,0.99)`, always
`z-index:1002`. There is no `border-radius` anywhere in the sheet and no shadow other than the
resets.

## Type and colour summary

- `body{font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
  font-weight:normal; background:#fafafa; color:gray}` (`gray` = **`#808080`**). The framework base
  declares a **system** stack and `background-color:#fff` first, but the custom block's `body` rule
  comes later and wins — the page is **`#fafafa`** (invisible behind the full-height hero).
- `a{transition:.3s all ease; color:#fec771}` — generic links are the **amber** accent; the custom
  block also kills `text-decoration` and outlines (`a:hover,a:focus{text-decoration:none !important;
  outline:none !important; box-shadow:none}`) → restore hover/focus affordances (delta).
- `h1,h3{line-height:1.5; font-weight:400; font-family:"Poppins", Arial, sans-serif; color:#000}` —
  the hero overrides to **`6vw`/`700`/`#fff`** inside `.slider-text .desc`, and the overlay logo
  overrides to **`40 px`/`700`/`#fff`**.
- Token table: accent amber **`#fec771`** (generic links + the *intended* hover underline) · current
  row gold **`#f8b500`** · page **`#fafafa`** (invisible) · hero **`#202020`** · overlay sheet
  **`rgba(0,0,0,0.99)`** · photo scrim **`rgba(0,0,0,0.3)`** · body ink **`gray`/`#808080`** ·
  headings **`#000`** (hero/logo **`#fff`**) · menu labels **`white`** (current `#f8b500`) · toggle
  bars **`#fff`** · radii: **none anywhere** (`border-radius` appears **zero** times) · shadows:
  **none** (only the three reset rules) · transitions: overlay **`0.8s
  cubic-bezier(0.175,0.885,0.32,1.275)`**, generic links **`0.3s all ease`**, close X **`0.3s`**,
  burger bars **`0.2s`**, all reduced-motion-guarded except the generic link transition.

## Fidelity pitfalls (things that will bite an implementer)

1. **The chrome is a full-viewport sheet, not a bar, rail or band.** `width:100%; height:100%;
   position:absolute; inset:0` at `z-index:1002`. Copying `-19`'s `20 %` side rail or any earlier
   sibling's horizontal bar is the single easiest way to break this template.
2. **The open motion is `scale(0) → scale(1)` over `0.8s
   cubic-bezier(0.175, 0.885, 0.32, 1.275)`** — a springy grow from the sheet's centre, not a slide,
   fade or push. The sheet starts `visibility:hidden; opacity:0; transform:scale(0)`.
3. **The state class is `menu-show` on `<body>`** — and it is **also the scroll lock**
   (`overflow:hidden; position:fixed; height:100%; width:100%`). Do not use `offcanvas` (that is the
   `-19` sibling).
4. **The close X appears `900 ms` after opening** (the script's `later.ms`), and it is a **separate
   element** from the header burger. Reproduce the delay as a documented behaviour or shorten it —
   but do not show it instantly without saying so (delta).
5. **While the overlay is open the header burger is unreachable**: the header is `z-index:9` and the
   overlay `z-index:1002`, so a hit test at the burger's coordinates returns the overlay's `div.img`.
   The only close paths in the source are the delayed X and `Escape` — there is **no outside-click
   close (`BM.outside:null`) and no scroll close (`BM.onScroll:false`)**. The recreation should add a
   tap-outside/backdrop close and keep the burger focusable (delta).
6. **There is no backdrop element and no `<dialog>`** — the sheet *is* the backdrop; the photo layer
   is the only background element, and it paints nothing (its file is missing).
7. **The photo layer's asset is missing**: `images/bg_3.jpg` **404s** on the live preview and the
   archive ships **no `images/` folder**, so the intended photo + `rgba(0,0,0,0.3)` scrim are
   invisible. The recreation supplies one deterministic placeholder photo
   (`https://picsum.photos/seed/bimini-1/1920/1080`) under a `0.3` black scrim — that is added
   content and must be recorded as a delta.
8. **The "`span:before` amber underline" is dead code**: the sheet styles the hover/current states of
   `#colorlib-main-nav ul li a span:before` but **never gives the pseudo-element content, position or
   size**; computed `::before` is `content:none, width:auto, position:static`. The recreation should
   implement the intended `2 px` `#fec771` underline as a real wipe-in (delta) or drop it explicitly.
9. **The current row is gold `#f8b500`, not the generic link amber `#fec771`, and not the `-19`
   sibling's coral `#ff6768`.** The row markup is `li.cl-active` and there is **no** `aria-current` in
   the source.
10. **Rows are `14 px`/`600`/`letter-spacing:5px`/uppercase at `line-height:1.8` (`25.2 px`) with
    `a{padding:5px 0}` → `35.2 px` per row**, and the `span` adds `padding:0 10px`. Measured four rows
    from `y = 421.6` on a `35.2 px` pitch; the whole `ul` is `140.8 px`. Getting the line-height wrong
    (e.g. a Tailwind `leading-none`) collapses the list's airiness immediately.
11. **The overlay centres its content with a real `display:table`/`display:table-cell;
    vertical-align:middle` pair**, not with flexbox. The measured `y = 337.6` (logo) / `421.6` (menu)
    follow from it; a flex rewrite must reproduce that vertical centre (its tallest content column is
    only `~185 px` in a `900 px` sheet).
12. **The hero is exactly `100vh`/`100dvh` and the page never scrolls** (`scrollHeight ===
    clientHeight` at 1440/991/767/375). Adding a single extra section breaks the source's
    "one full-screen page" shape — any added content must be a deliberate, documented delta.
13. **The headline is `6vw`** (`86.4 px` at 1440, `22.5 px` at 375) with **`line-height:1.5`** and
    `text-transform:uppercase`, and it wraps at 375 px (`103.8 px` column). Do not pin it to a
    `text-7xl`-style fixed size.
14. **The container is tiered here** (`540/720/960/1140` at `576/768/992/1200`) — unlike the `-19`
    sibling's fluid container — and `cl-px-0` zeroes its gutters for the hero, so the hero band is
    edge-to-edge while the header keeps `15 px`. Measured hero container `1140 @ x = 150` and header
    container `1140 @ x = 150, padding:0 15px` at 1440 px.
15. **The `ul` is bare** (no class, no `role`) and the `li` carry no `role`; the `nav` element exists
    but the list has no accessible name. Add `aria-label`/`aria-current` (delta).
16. **Both toggles are text-less `<a href="#">` with a single `<i>`** — no accessible name in the
    markup (the script stamps `aria-label="Menu"` at runtime). Give them real labels and `aria-expanded`
    from the start (delta).
17. **`Escape` is the only close path the source implements properly**, and the header burger keeps a
    three-bar look forever (the X rules only fire under `cl-active`, which the script never adds to
    it). The overlay's X is hard-coded `cl-active` in the markup.
18. **Dead code to drop:** the `:where(html) … all: revert` reset (22 `revert` declarations), the
    `@media print` block (incl. `@page{size:a3}`), the `.nav` base rule, the Bootstrap palette
    (`#007bff` links, `#0056b3` hover, `#212529` ink), the base system body stack, the
    `a:not([href]):not([tabindex])` rules, `::-webkit-file-upload-button`, `.cl-icon`, the
    `text-indent:-55px` / `font:bold 14px/.4 Helvetica` on the burger `i`, `data-scrollax-parent`,
    `ftco-animate`, the missing-image `style="background-image:url(images/bg_3.jpg)"`, the unused
    brand `span`/`i` rules, the unused overlay-logo `span` rule, and all eight Roboto woff2 files.
19. **The five conflicting source names** (`<title>Website menu 08`, README "Website menu 08", hero
    `Website Menu #10`, logo `Company Logo`, article "Website Menu V20") must **none** of them be
    reused; the recreation gets its own brand, its own headline and its own menu labels.
20. **No webfont ships**, so the source renders Arial: add one Google Fonts `<link>` for Poppins
    (delta) rather than copying eight dead Roboto woff2 files (247,856 B = 91.98 % of the archive).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#fec771` | live sheet paints it ×3 — `background` on `#colorlib-main-nav ul li.cl-active a span:before`; style.css?v=0b78360a (16,497 B, sha256 bd6e8d5c39a0) · <https://preview.colorlib.com/theme/bootstrap/website-menu-20/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Feature: Page frame and the full-viewport hero

#### Scenario: Hero geometry and surface

- **Given** a viewport of any width
- **When** the hero is measured
- **Then** it is **exactly viewport height** — **`height:100vh`** with the **`100dvh`** upgrade behind
  `@supports (height:100dvh)` — measured **`1440 × 900 @ x = 0, y = 0`** at 1440 px and `375 × 812` at
  375 px
- **And** its surface is **`#202020`** and the page background is **`#fafafa`** with `body` at
  **`16 px`/`line-height:1.8`/`color:gray` (`#808080`)** in a Poppins-family stack
- **And** the sheet declares **no** `border-radius` anywhere and **no** shadow outside its resets

#### Scenario: The tiered container and the centred row

- **Then** the hero's container is a **tiered** container — `540 / 720 / 960 / 1140` at
  `576 / 768 / 992 / 1200 px` — with its `15 px` gutters zeroed by the `cl-px-0` utility (measured
  **`1140 @ x = 150`** at 1440 px, `720 @ x = 135.5` at 991, `540 @ x = 113.5` at 767,
  `375 @ x = 0, padding:0 15px` at 375)
- **And** the row inside it is `display:flex; flex-wrap:wrap; margin:0 -15px` with
  `align-items:center; justify-content:center` filling the full height (measured
  **`1140 × 900 @ x = 150, y = 0`**), which is what centres the copy at `y = 363.7` at 1440 px
- **And** the column is `width:100%` with `padding:0 15px` and `text-align:center` (measured
  `1140 × 172.6 @ y = 363.7` at 1440 px)

#### Scenario: The headline and lead are own copy

- **Given** the app renders
- **Then** the headline is **`6vw`**, **`font-weight:700`**, **`#fff`**, `text-transform:uppercase`,
  `line-height:1.5` (measured **`86.4 px`/`129.6 px`** at 1440 px and **`22.5 px`** at 375 px, where it
  wraps to two lines) with `margin-bottom:8px`
- **And** the lead is **`18 px`** in **`rgba(255,255,255,0.8)`** on the same `1.5` rhythm
  (`27 px`), `margin-bottom:8px` (measured `@ y = 501.3` at 1440 px, wrapping to `54 px` at 375 px)
- **And** the strings `Website Menu #10`, `Website menu #08`, `Website Menu V20`, `Company Logo` and
  the `Lorem ipsum dolor sit amet…` lead never render
- **And** the app contains **zero** `colorlib`/`website-menu-20` strings and does not reuse the
  `colorlib-`/`cl-`/`ftco-` class names

### Feature: The full-screen overlay menu

#### Scenario: The sheet's geometry, surface and motion

- **Then** the overlay is **`position:absolute; inset:0; width:100%; height:100%`**, painted
  **`rgba(0,0,0,0.99)`**, at **`z-index:1002`**, `text-align:center`, `overflow-y:scroll` (measured
  `1440 × 900` open with a `15 px` scrollbar gutter → inner content `1425` wide)
- **And** at rest it is `visibility:hidden; opacity:0; transform:scale(0)` and it animates to
  `visible / opacity:1 / scale(1)` over **`0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)`** when
  `<body>` gains **`menu-show`** — which itself applies
  **`overflow:hidden; position:fixed; height:100%; width:100%`** (the scroll lock)
- **And** the animation is disabled under `prefers-reduced-motion: reduce`

#### Scenario: The overlay's centred content column

- **Then** the sheet centres its content with `display:table; width:100%; height:100%` wrapping a
  `display:table-cell; vertical-align:middle` cell (a real table layout, not flexbox), which puts the
  logo at `y = 337.6` and the menu at `y = 421.6` at 1440 × 900
- **And** behind them a full-bleed photo layer (`position:absolute; inset:0; background-size:cover;
  background-position:center center`) carries a **`rgba(0,0,0,0.3)`** scrim via a `::after`
- **And** because the source's own photo asset is missing (it **404s** and the archive ships no
  `images/` folder), the recreation uses one deterministic placeholder,
  `https://picsum.photos/seed/bimini-1/1920/1080`, under the same `0.3` black scrim — recorded as a
  delta

#### Scenario: The overlay brand and the four-row menu

- **Then** the overlay brand is **`40 px`/`700`/`#fff`**, uppercase, **`letter-spacing:2px`**,
  `display:inline-block`, `line-height:1.5`, centred (measured **`353.7 × 60 @ x = 535.7`**), above an
  `h1` wrapper with a **`24 px`** bottom margin
- **And** the menu is a **four-row** list (`padding:0; margin:0`; **`padding-top:20px` below
  767.98 px**) of **`14 px`/`600`**, uppercase, **`letter-spacing:5px`** labels at `line-height:1.8`
  (`25.2 px`) with `display:block; padding:5px 0` links (**`35.2 px`** rows, four rows from
  `y = 421.6`, whole `ul` `1425 × 140.8`) whose inner `span` carries `padding:0 10px`
- **And** every label's ink is **`white`**, and the **current** row (marked `li.cl-active` in the
  source) is painted **`#f8b500`** (measured `rgb(248,181,0)`), exposed with
  `aria-current="page"` in the recreation
- **And** the recreation implements the sheet's *intended* amber hover underline as a real wipe-in —
  a **`2 px` `#fec771`** bar revealed on hover with `scaleX` — because the source's own
  `span:before` state rules have no base geometry and therefore never render (delta)

### Feature: Toggle, close paths and accessibility

#### Scenario: The header burger

- **Given** the overlay is closed
- **Then** the header shows a burger at the container's right edge — `float:right`,
  `position:relative`, **`z-index:1003`** inside the `z-index:9` header (`right:10px` below
  767.98 px) — measured **`20 × 28.8 @ x = 1255, y = 32`** at 1440 px
- **And** it is drawn as a **`20 × 2` `#fff`** bar with `::before`/`::after` bars **`30 × 2` `#fff`**
  at `-7px`/`+7px`, spreading to `-10px` on hover over `0.2s`
- **And** the recreation gives it a real accessible name, `aria-expanded` and `aria-controls` (the
  source's `<i>`-only anchors have no accessible text — a documented delta)

#### Scenario: The overlay's close control and the 900 ms delay

- **Then** the overlay carries its own close control at **`top:40px; right:40px`**, **`44 × 44`**,
  `visibility:hidden; opacity:0` at rest (measured **`44 × 44 @ x = 1341, y = 40`**), drawn as two
  **`30 × 2` `#fff`** bars at `rotateZ(±45deg)` with the middle bar transparent
- **And** it becomes visible **`900 ms`** after opening (the source's script timer) — the recreation
  either reproduces that delay or documents the shorter one as a delta
- **And** it is operable with the keyboard and exposes an accessible name

#### Scenario: The close paths

- **Then** the overlay closes on the close control and on **`Escape`** (both present in the source)
- **And** the recreation adds an **outside/backdrop close** (the source has `outside:null` and
  `onScroll:false`, so it offers none) and keeps `aria-expanded` in sync on every toggle (delta)
- **And** while the overlay is open the page must **not** scroll (the source's `body.menu-show
  {position:fixed}` lock) and the focus order stays inside the sheet

### Feature: Materialised destinations

#### Scenario: No dead links

- **Then** the recreation renders **zero** `href="#"` links — the source's **8** anchors (two dead
  `#`, three `index.html` links that resolve to the reference page itself as HTTP 200 no-ops, and
  `about.html` / `blog.html` / `contact.html`, **which 404 on the preview host**) all resolve to
  real targets inside the app
- **And** the brand and the overlay menu rows navigate to their sections, with focus returned to the
  page after the sheet closes

#### Scenario: Real content replaces the one-screen page

- **Then** the app has real content sections below the hero with `scroll-margin-top` ≥ the header
  height, each with its own copy and imagery from
  `https://picsum.photos/seed/bimini-<n>/<w>/<h>` (**the source ships no images at all**)
- **And** the additions are recorded as deltas — the source is a single `100vh` page that never
  scrolls

### Feature: Footer and attribution

#### Scenario: Component Dock credit

- **Then** the app's footer links **`https://www.componentdock.com/`** branded as
  **"Component Dock"** (the source has no footer)

## Verification checklist

- [ ] Spec validated (`npm run spec:validate`) and the app built only after this spec exists
- [ ] Page frame: hero **`100vh`/`100dvh`** in **`#202020`** (measured `1440 × 900` at 1440 px,
      `375 × 812` at 375 px), page `#fafafa`, body `16 px`/`1.8`/`gray` in a Poppins stack; **no**
      `border-radius` and **no** shadow anywhere
- [ ] Container: **tiered** (`540/720/960/1140` at `576/768/992/1200`), hero copy `cl-px-0`-style
      edge-to-edge (measured `1140 @ x = 150` at 1440 px, `375 @ x = 0` at 375 px), header keeps its
      `15 px` gutters
- [ ] Hero copy: headline **`6vw`/`700`/`#fff`/uppercase/1.5** (`86.4 px` at 1440, `22.5 px` at 375,
      wrapping), lead **`18 px`** in `rgba(255,255,255,0.8)`, both `margin-bottom:8px`; centred by a
      full-height flex row
- [ ] Overlay: `inset:0`, `100% × 100%`, **`rgba(0,0,0,0.99)`**, **`z-index:1002`**,
      `overflow-y:scroll`, `visibility:hidden/opacity:0/scale(0)` at rest →
      **`menu-show`** ⇒ `visible/1/scale(1)` over **`0.8s cubic-bezier(0.175,0.885,0.32,1.275)`**,
      with `body.menu-show` doing `overflow:hidden; position:fixed`; reduced-motion honoured
- [ ] Overlay content: `display:table` + `display:table-cell; vertical-align:middle` centring
      (logo `y = 337.6`, menu `y = 421.6` at 1440 px); photo layer `inset:0`, `cover`, `center center`,
      `rgba(0,0,0,0.3)` scrim, with the `picsum.photos/seed/bimini-1/1920/1080` placeholder (the
      source's `images/bg_3.jpg` **404s** and the archive has no `images/`)
- [ ] Overlay brand **`40 px`/`700`/`#fff`/uppercase/`letter-spacing:2px`** (measured
      `353.7 × 60 @ x = 535.7`) over an `h1` with a `24 px` bottom margin
- [ ] Overlay menu: **four rows**, **`14 px`/`600`/uppercase/`letter-spacing:5px`**, `line-height:1.8`
      (`25.2 px`), links `display:block; padding:5px 0` (**`35.2 px`** rows, pitch `35.2`, `ul`
      `1425 × 140.8`, `padding-top:20px` below 767.98 px), `span{padding:0 10px}`, ink `white`,
      current row **`#f8b500`** + `aria-current="page"`
- [ ] Amber hover underline implemented as a real **`2 px` `#fec771`** wipe-in (the source's
      `span:before` rules are inert — `content:none`) and recorded as a delta
- [ ] Close control **`44 × 44 @ top:40px; right:40px`**, two **`30 × 2` `#fff`** bars at
      `rotateZ(±45deg)`, hidden at rest, shown with the source's **900 ms** delay (or a documented
      shorter one), keyboard-operable with an accessible name
- [ ] Close paths: close control, `Escape`, and an **added** outside/backdrop close (the source has
      none); `aria-expanded` in sync; page does not scroll while open; focus managed into and out of
      the sheet
- [x] Zero `colorlib` / `website-menu-20` / "Website Menu V20" / "Website menu 08" / "Company Logo" /
      `Website Menu #10` / `Lorem ipsum dolor sit amet` strings in `apps/bimini` (comments included);
      none of the source's four row labels (`Home`, `About`, `Blog`, `Contact`) or its `ftco-`/`cl-`/
      `colorlib-` class names reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead —
      247,856 B = **91.98 %** of the 269,474 B archive), no inline SVG `<path>` data, no
      `data-scrollax-parent`, no `ftco-animate`, no jQuery/Bootstrap
- [ ] Dead source code dropped: the `:where(html) … all: revert` reset (22 `revert`s), the
      `@media print` block (incl. `@page{size:a3}`), the `.nav` base rule, the Bootstrap palette, the
      base system body stack, the `a:not([href])` rules, `::-webkit-file-upload-button`, `.cl-icon`,
      the burger's `text-indent:-55px`/`font:bold 14px/.4 Helvetica`, the missing-image inline style,
      the unused brand/logo `span`/`i` rules, and all eight Roboto woff2 files
- [ ] Documented deltas recorded in the PR: new name + own brand/headline/menu labels, all **8** dead
      or 404-ing anchors materialised, a real Poppins `<link>` instead of eight dead Roboto files,
      a `lucide-react`/CSS close control with an accessible name, `aria-expanded`/`aria-controls`,
      `aria-current` on the current row, an outside-click close and a reduced-motion path, a working
      `#fec771` hover underline (the source's is inert), placeholder photography for the overlay's
      missing photo and the added sections, the extra content sections (the source is a single
      `100vh` page), and the added footer
- [ ] `scripts/verify-app.sh bimini` green (typecheck + lint + knip + fallow + vitest 100 % + build);
      `npm run spec:validate` green
- [x] `public/CNAME` + `homepage` set to `bimini.free.componentdock.com`; `package-lock.json`
      registers the workspace; footer attribution present
- [ ] Squash-merge the PR, then mark the `TEMPLATES.md` `Website Menu 20` item `[x]` with the live
      `https://bimini.free.componentdock.com` URL + homepage and run `npm run readme:status`
