# Template: Gangway (Website Menus)

## Purpose

Gangway is a **single-tier transparent header whose composition is a three-column
triptych: a wordmark pinned to the left edge, a nav list centred on the page, and a
pair of CTA buttons pinned to the right edge — with an off-canvas drawer, not an
inline collapse, as everything below `1200 px`**. It is the first member of the
*Website Menus* family that carries **two** CTAs (an **outline-white** secondary and
a **filled green `#89ba16` primary**), the first whose nav is **centred** rather than
left- or right-aligned, and the first whose desktop list holds **two** dropdowns
(`min-width:200px`, white, **`2px` solid `#89ba16` top hairline**,
`box-shadow:0 2px 20px -2px rgba(0,0,0,.2)`, a `20px → 0` margin-top slide, rows
`9px 20px` in `#343a40` washing to **`#ebeef0`** on hover) — over a **`100vh`
full-bleed background-image band**, with `body{height:200vh}` as scroll room.

Its chrome is **three-tier by width**: below `992 px` the CTAs disappear and two
*lists-only* action rows appear inside the drawer; `992–1199.98 px` shows the
wordmark, **both CTAs and the hamburger** with the nav list hidden; from `1200 px`
up the nav list replaces the hamburger and the row reads as the triptych. The
drawer itself (`300 px`, `right:0`, `fixed`, `translateX(110%)` → `translateX(0)`,
`.2s cubic-bezier(.66,.2,.48,.9)`, `z-index:2000`) is a **JS clone of the desktop
list** (`ul.site-nav-wrap`), its `has-children` rows gaining a `36 × 36` round
`span.arrow-collapse` disclosure that expands a `cl-collapse`/`cl-show` sub-list
(`padding-left:40px`, `16 px` rows) — all under a **`rgba(0,0,0,.5)` veil**
(`body:before`, `z-index:1002`).

It is an original React recreation of the ColorLib free **"Website Menu V09"**
snippet (source slug `website-menu-09`), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation
matches the source's structure, order and design tokens 1:1 but copies no asset (no
images, no font files, no CSS files, no icon-font glyphs, no inline SVG paths, no
text verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-09/ — page title
  "Website Menu V09 - Free Bootstrap Navbar Template 2026 - Colorlib", **HTTP 200**,
  108,851 B, verified 2026-10-12. ColorLib's own description: *"A highly practical
  and easy to work with free Bootstrap navbar template with dropdowns that calls for
  flawless integration. The free tool also comes with a logo on the left and two
  additional call-to-action buttons on the right."* (its `og:description`: *"The
  best free Bootstrap navbar template with dropdowns, logo and two extra CTA buttons
  for your convenience."*). Template details block: Author **Colorlib**, Released
  **September 2026**, License **CC BY 3.0**, and *"Updated September 2026: this
  snippet is now plain HTML and CSS plus a few lines of vanilla JavaScript: no
  jQuery, no Bootstrap files, no plugins. The download is 635 KB (it was 2.0 MB).
  Use it on its own, or drop it into a Bootstrap 4, 5 or 6 project and it looks the
  same. The mobile menu and sticky header work without jQuery."* — note that the
  marketing line promises a *sticky header* this variant does **not** implement: the
  sheet contains no `position:sticky`/sticky rule at all (only the drawer is
  `position:fixed`), so the header is `position:absolute` and scrolls away.
  Structured data on the page: `datePublished` **2021-01-28T20:11:38+00:00**,
  `dateModified` **2026-09-25T10:42:07+00:00**. TEMPLATES.md `## Website Menus (20)`
  — this item is the family's **ninth** entry at **line 3081**; the slug
  `website-menu-09` appears exactly **once** in TEMPLATES.md and in no spec on
  `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-09/` returns
  **HTTP 404** (`Not Found`, 9 B) — like its `-01`…`-08` siblings, the *Website
  Menus* family does **not** live under the slug-only theme path. The working live
  preview is **`https://preview.colorlib.com/theme/bootstrap/website-menu-09/`**
  (**HTTP 200**, `text/html`, **5,100 B**, `<title>Website Menu #9</title>`,
  verified 2026-10-12) — the URL the preview host's own catalog index records for
  this slug
  (`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
  633,990 B → `"website-menu-09":{"name":"Website Menu V09","tag":"Website Menu
  Templates","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-09/"}`).
  Its two assets — `css/style.css?v=53272927` (**21,239 B**, `text/css`, sha256
  `479573fc6066bd401469d2eb55f2d855c4807fa9160ead3ff4a417e8c9e6dfc5`) and
  `js/snippet.js?v=ff3415b3` (**2,525 B**, `application/javascript`, sha256
  `c60db6e100eee7176d2b6274ac73f5e5053f33172d0eee7683d0bce7a2a2c874`) — are
  **byte-identical** (same sha256, verified) to the copies in the snippet's own
  downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-09.zip`
  (**HTTP 200**, `application/zip`, **650,682 B**, sha256
  `ed488bacb5edd7f7a2fae00866d91a4602fcfa4773d7d878388c76e5aece632a`; the ColorLib
  page rounds this to "635 KB"), which ships `index.html` (**4,897 B**, sha256
  `58562d417112841f8d62e7483d8c2f17e07c233a510a368d6c353153cb0e37b4`),
  `css/style.css`, `js/snippet.js`, `README.md` (**1,264 B**),
  `images/hero_1.jpg` (**1900×1267** MJPEG, 475,413 B), the **Quicksand** woff2
  files (400/600/700 × latin/latin-ext = **6 files** — only **400** and **700** are
  declared by the sheet, so the two `600` files are dead weight) and an
  **`icomoon-subset.woff2` of only 424 B** (the two glyphs the sheet uses).
  `diff` between the live page and the archive `index.html` is **16 lines**, i.e.
  head-only (the preview host's `noindex` meta tags and the cache-busting query
  strings) — the archive is the readable, un-versioned twin of the live preview.
  Both were read for this spec and the live render was cross-checked in a browser at
  1280×800, 1200, 1199, 1100, 992, 768, 767 and 375 px (see Design reference).
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-09.jpg
  (HTTP 200, served as **AVIF**, 1200×972, 126,459 B, converted to PNG and opened
  and inspected visually 2026-10-12). No screenshot-only fallback was needed — the
  live preview is the primary reference and the archive its readable twin.
- **New name:** `gangway` (apps/gangway, `@free-react-templates/gangway`) — the
  source's whole point is **boarding**: two call-to-action entry points
  (account-style + post-a-job-style) plus a drawer of the remaining routes, i.e. the
  gangway through which a visitor steps aboard; a *gangway* is the plank/opening in
  a vessel's side used for exactly that. It continues the family's nautical run —
  **starboard** (`website-menu-05`), **larboard** (`-06`), **topdeck** (`-07`),
  **bowsprit** (`-08`). Single lowercase word, kebab-safe. Verified 2026-10-12: a
  repo-wide search returns **zero** hits for `gangway` in `apps/`,
  `openspec/specs/`, `docs/templates/` and `TEMPLATES.md`, and
  `https://colorlib.com/wp/template/gangway/` returns **HTTP 404**, so it is not a
  ColorLib source name either. The source name "Website Menu 09", its "Brand"
  wordmark, its 17 labels and its copy are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V09" (source slug `website-menu-09`,
  https://colorlib.com/wp/template/website-menu-09/), `datePublished`
  **2021-01-28**, rewritten in the 2026 build to plain HTML + CSS + vanilla JS like
  its `-01`…`-08` siblings. Design-wise this is the family's **job-board / dashboard
  variant**: it is the only one with **two CTAs**, the only one with a **centred**
  desktop nav, the only one with **two** dropdowns in the same list, and the only
  one whose sub-`xl` navigation is a **cloned off-canvas drawer with per-row
  disclosure arrows** instead of a single tier. Its chrome is **one tier** (no
  utility bar) and **nothing about it is sticky**.
- **CSS namespace:** the sheet is self-contained and `cl-`-prefixed for its
  utilities (`cl-container-fluid`, `cl-row`, `cl-col-6`, `cl-btn`, `cl-btn-primary`,
  `cl-collapse`, `cl-show`, `cl-dropdown`, `cl-nav-link`, `cl-icon`, `cl-h3`,
  `cl-d-none`, `cl-d-inline-block`, `cl-d-flex`, `cl-d-lg-none`,
  `cl-d-lg-inline-block`, `cl-d-xl-none`, `cl-d-xl-block`, `cl-align-items-center`,
  `cl-m-0`, `cl-ml-0`, `cl-mt-2`, `cl-mr-2`, `cl-mt-3`, `cl-ml-3`, `cl-p-0`,
  `cl-pl-0`, `cl-mx-auto`, `cl-ml-auto`, `cl-mt-lg-2`, `cl-text-right`,
  `cl-collapsed`, `cl-active`) and is a hand-rolled Bootstrap-4-look-alike — **not**
  a framework skin. Its first ~55 lines are a `:where(html) … all: revert` reset so
  the snippet renders identically inside a Bootstrap host page, followed by a
  `*{box-sizing:border-box}` normalize, a **`Roboto` `body` stack that is
  overridden later by a `Quicksand` rule**, an `a{color:#007bff}` page default and
  `button{border-radius:0}`.
- **HTML structure (live preview, 5,100 B — archive twin 4,897 B):** document order
  is exactly — (1) `div.site-mobile-menu.site-navbar-target` ›
  `div.site-mobile-menu-header` › `div.site-mobile-menu-close.cl-mt-3` ›
  `span.icon-close2.js-menu-toggle` (inline SVG `✕`) plus `div.site-mobile-menu-body`
  (empty at load — the JS fills it), (2) `header.site-navbar.cl-mt-3` ›
  `div.cl-container-fluid` › `div.cl-row.cl-align-items-center` holding
  `div.site-logo.cl-col-6` › `a[href=index.html]` (the wordmark),
  `nav.cl-mx-auto.site-navigation` › `ul.site-menu.js-clone-nav.cl-d-none
  .cl-d-xl-block.cl-ml-0.cl-pl-0` (**8 `li`**: six nav rows — the third and fourth
  `li.has-children` — then two `li.cl-d-lg-none` action rows), and
  `div.right-cta-menu.cl-text-right.cl-d-flex.aligin-items-center.cl-col-6` holding
  `div.cl-ml-auto` › **two `a.cl-btn`** plus
  `a.site-menu-toggle.js-menu-toggle.cl-d-inline-block.cl-d-xl-none.cl-mt-lg-2
  .cl-ml-3[href="#"]` › `span.icon-menu.cl-h3.cl-m-0.cl-p-0.cl-mt-2` › inline SVG
  hamburger, (3) `div.hero` with an **inline** `background-image`, (4) `script`.
  There is **no footer and no content section at all**: the entire visible page is
  chrome plus one `100vh` photo band. Two class names in the markup are **dead**:
  `site-navbar-target` (a leftover hook for the family's old JS) and
  `aligin-items-center` (a typo — the flex alignment comes from `cl-row`), as is the
  `border-width-2` class on both CTA anchors (it is not defined anywhere in the
  sheet; `.cl-btn.btn-outline-white` carries its own `border-width:2px`).
- **Header:** `position:absolute; width:100%; top:2rem; z-index:1999;
  margin-bottom:0` **plus** the markup's `cl-mt-3` (`margin-top:1rem !important`) →
  measured `top:32px` with `margin-top:16px`, i.e. the whole bar sits **48 px** below
  the top of the page at every width ≥768 px (measured header rect **1265 × 0** at
  `y = 48` on a 1280×800 viewport — see the collapse note below), and 50 px below it
  the bar becomes a normal flow row (**measured header height 50 px at 767 px and
  375 px**).
- **The row collapses to zero height at ≥768 px — a real, measured quirk:** the
  logo column and the CTA column are **both `position:absolute`** (their
  `.cl-col-6` `position:relative` is overridden by `.site-navbar .site-logo` /
  `.site-navbar .right-cta-menu`), so the `div.cl-row` has no in-flow child and
  measures **`1071 × 0` at x = 97** at 1280 px. Everything visible in the bar is
  therefore out-of-flow, positioned against the **header** (width 1265 px), and
  vertically centred by the flex `align-items:center` + each element's own padding.
  The recreation must reproduce this "zero-height floating row" (equal automation of
  the same three anchors), not invent a normal grid.
- **Container:** `div.cl-container-fluid` is `width:100%`, `margin:0 auto`,
  `padding-left/right:7rem` (**112 px**) at **≥1200 px** and `15 px` under
  `@media (max-width:1199.98px)`; there is **no max-width** at any tier (measured
  content box `1265 − 224 = 1041 px` at 1280 px, `1184 − 30 = 1154 px` at 1199 px).
- **Wordmark (`div.site-logo.cl-col-6` › `a`):** the column is `absolute;
  left:5%; width:50%; max-width:50%; padding:0 15px` (measured left **63.25 px** and
  width **632.5 px** = 5 %/50 % of the 1265 px header), so the anchor itself lands at
  **x = 78** and measures **98 × 30 px**: `font-size:1.5rem` (**24 px**),
  `letter-spacing:.2rem` (**3.2 px**), `text-transform:uppercase`, `color:#fff`,
  `line-height:36px`, weight inherited (**400** — the sheet never sets a wordmark
  weight), `white-space` unset but never wrapping in practice. Its own brand text, no
  hover underline (`a, a:hover{text-decoration:none !important}`).
- **Centred nav (`nav.cl-mx-auto.site-navigation`):** `position:absolute;
  left:50%; transform:translateX(-50%); z-index:5` (measured `left:632.5px`,
  `translateX(-287.914px)`, rect **576 × 64** at `x = 345`, `y = 16` at 1280 px) —
  the only centring in the family, and it is **not** a flex `justify-content` but a
  50 %-plus-translate pin, so the list stays centred on the *header*, not on the
  space left of the CTAs. The `cl-mx-auto` class is inert here (an absolutely
  positioned box ignores `margin:auto`).
- **The desktop list is `xl`-only (`ul.site-menu.js-clone-nav.cl-d-none
  .cl-d-xl-block`):** `display:none` below 1200 px, `display:block` at **≥1200 px**
  (`cl-d-xl-block`), `margin:0` + `padding-left:0`. Measured `display:none` at 1199,
  1100, 992, 768, 767 and 375 px and `block` at 1280 and 1200 px. **Eight `li`**:
  six nav rows + two `li.cl-d-lg-none` action rows that are `display:none` at ≥992 px
  and exist so the *cloned* drawer copy carries them (see the drawer section).
- **Nav rows (live-measured):** each `li` is `display:inline-block` and each
  `> a` is `display:inline-block; position:relative; padding:20px 20px !important;
  color:rgba(255,255,255,0.5)` (measured row box **64 px** tall: 20 + 24 + 20), with
  `:hover{color:#fff}`. The current row (`a.cl-active`) is **`#fff`** — from
  `.site-menu .cl-active{color:#fff; display:inline-block; padding:5px 20px}`, whose
  padding is **dead**: the sibling `> li > a` rule's `!important` beats it (measured
  active padding **20 px**, height 64 px, identical to its neighbours). Source order
  and kinds: a home-style row (`cl-active`, `index.html`), an about-style row
  (`about.html`), a **job-listings-style parent** (`has-children`,
  `job-listings.html`, 2 rows), a **pages-style parent** (`has-children`,
  `services.html`, **8** rows), a blog-style row (`blog.html`) and a contact-style
  row (`contact.html`), then the two drawer-only action rows (a post-a-job-style
  `+`-prefixed row and an account/login-style row, `post-job.html` / `login.html`).
- **Dropdown parents add a caret:** `li.has-children` is `position:relative;
  cursor:pointer` and its `> a` gets `padding-right:20px` plus a `::before` with
  `content:"\e313"; font-family:'icomoon'; font-size:16px; position:absolute;
  top:50%; right:0; transform:translateY(-50%)` — i.e. a **private-use glyph from the
  424 B icon-font subset**, not a CSS triangle (the recreation uses a
  `lucide-react` chevron of the same size/position).
- **Dropdown flyout (live-measured, closed at 1280 px):** `visibility:hidden;
  opacity:0; top:100%; position:absolute; text-align:left; padding:0;
  margin-top:20px; background:#fff; transition:0.2s 0s` with
  **`border-top:2px solid #89ba16`** and
  **`box-shadow:0 2px 20px -2px rgba(0,0,0,0.2)`** — a raw `ul.cl-dropdown` (no
  `cl-dropdown` wrapper div, no padding, no radius: **square corners**). Its width
  comes from the rows (`min-width:200px`), measured **200 px** wide for both
  flyouts; the job-listings flyout measures **200 × 82.78 px** and the pages flyout
  **200 × 347.52 px** at closed offset `y = 100` (row bottom 80 + `margin-top:20px`).
- **Dropdown open state (CSS-cascade verified with the pseudo-state forced in
  Chrome, 1280 px):** `.has-children:hover > .cl-dropdown`,
  `:focus > .cl-dropdown` and `:active > .cl-dropdown` all apply
  **`transition-delay:0s; margin-top:0px; visibility:visible; opacity:1`** — the
  flyout is flush under its parent row (`top:100%`, `margin-top:0`) and animates the
  `20 px` gap away over `0.2s`. The open state is **pure CSS `:hover`/`:focus`**:
  `snippet.js` binds **nothing** to the desktop dropdowns, so there is no click
  toggle, no `aria-expanded`, no `Escape` handling, no outside-click close and no
  keyboard path in the source — the parent's `href` is a real page link
  (`job-listings.html`, `services.html`), and `:focus` on that anchor is what opens
  the flyout for a keyboard user. The recreation must promote this to a real
  disclosure (hover **and** click, `aria-expanded`/`aria-controls`/`aria-haspopup`,
  `Escape`, arrows, outside click) while keeping the same surfaces, timings and
  direction of travel.
- **Dropdown rows (live-measured):** each `li` is `list-style:none; padding:0;
  margin:0; min-width:200px`, `line-height:1.4`, and its `a` is
  `display:block; padding:9px 20px; font-size:16px; line-height:22.4px;
  color:#343a40; text-transform:none; letter-spacing:normal;
  transition:0s all` — measured row box **200 × 40.39 px**. Hover/focus is
  **`background:#ebeef0; color:#212529`** (verified) — a **grey wash**, *not* the
  family's blue; an active row uses `background:#ebeef0; color:#89ba16`. The second
  flyout's 8th row (**"Frequently Ask Questions"-kind, i.e. a long label**) **wraps
  to two lines** inside the 200 px box (`347.52 = 7 × 40.39 + 62.8` + the `2 px`
  border) — the flyout is genuinely narrow, so the recreation either keeps the same
  `min-width:200px` and lets long labels wrap or documents a wider minimum.
- **Nested-dropdown rules exist but are dead here:** the sheet carries a full set for
  `.cl-dropdown > li.has-children` (a `\e315` right-pointing caret at `right:20px`,
  `left:100%; top:0` sub-submenus, `#ebeef0`/`#212529` hover) — **no `has-children`
  exists inside either flyout** on this page, so those rules never match. The
  recreation drops them rather than inventing a third level.
- **The CTA pair (live-measured at 1280 px):** the CTA column is
  `div.right-cta-menu…cl-col-6{position:absolute; right:5%; width:50%; max-width:50%;
  padding:0 15px; display:flex; text-align:right; align-items:center via cl-row}`
  (measured `left:569.25px` / `right:63.25px` — again **5 % of the 1265 px header**),
  holding an inner `div.cl-ml-auto` (`margin-left:auto !important`) that pushes the
  two buttons to the right edge of the column, then the hamburger.
  - **Secondary — `a.cl-btn.btn-outline-white.border-width-2.cl-d-none
    .cl-d-lg-inline-block`** (`+`-prefixed label): `background:transparent;
    border:2px solid #fff; color:#fff; border-width:2px`, measured **131 × 40 px** at
    `x = 956`, hover **`background:#fff; color:#000`**.
  - **Primary — `a.cl-btn.cl-btn-primary.border-width-2.cl-d-none
    .cl-d-lg-inline-block`** (lock-prefixed label): `color:#fff;
    background:#89ba16; border-color:#89ba16` with `border:1px solid` (measured
    **96 × 38 px** at `x = 1091`), hover **`background:#90c317;
    border-color:#90c317`**. The green is the sheet's own override of Bootstrap's
    blue `.cl-btn-primary` (`#007bff` → `#0069d9`/`#0062cc`), which survives only as
    an unused declaration earlier in the file.
  - Both are `display:inline-block; padding:0.375rem 0.75rem` (`6px 12px`);
    `font-size:1rem; line-height:1.5` (`24 px` row → **38 px** box for the 1 px-border
    primary, **40 px** for the 2 px-border secondary: the pair is **2 px out of
    alignment**, a measured source artefact); `border-radius:0.25rem` (**4 px**);
    `transition:color/background-color/border-color/box-shadow .15s ease-in-out`.
    Their icons are `span.cl-mr-2.icon-add` / `span.icon-lock_outline` wrappers
    (`margin-right:8px`) around the preview's **inline SVGs** — the recreation uses
    `lucide-react` (`Plus`, `Lock`) at the same `1em` size and 8 px gap.
  - **No visible focus ring in the source:** `.cl-btn:focus{box-shadow:0 0 0
    0.2rem rgba(0,123,255,.25)}` is **cancelled** by the later
    `.cl-btn:hover, .cl-btn:focus, .cl-btn:active{outline:none; box-shadow:none
    !important}`. The recreation keeps the look but adds a visible `focus-visible`
    ring (a documented delta).
- **The hamburger (`a.site-menu-toggle`):** an **anchor with `href="#"`**, not a
  button, carrying `cl-d-inline-block cl-d-xl-none` (**visible below 1200 px, hidden
  at ≥1200 px**) plus `cl-mt-lg-2`/`cl-ml-3`; `color:#fff; line-height:0;
  font-size:2.5rem` (**40 px**) measured **28 × 42 px** with `margin:8px 0 0 16px`
  (the `cl-` utilities' `!important` beat the `max-width:767.98px` block's
  `margin-left:5px` — another dead declaration). Its `span.icon-menu.cl-h3`
  (`font-size:1.75rem` = **28 px**, `margin-top:8px` from `cl-mt-2`) wraps an inline
  SVG whose `.cl-icon{height:1em; width:auto; fill:currentColor}` measures **28 ×
  28 px** — three `stroke`-free bars, so the recreation uses `lucide-react` `Menu` at
  `28 px`. Measured at 1199/1100/992/768/767/375 px: `display:block`; at 1280 and
  1200 px: `display:none`.
- **The off-canvas drawer (`div.site-mobile-menu`):** always in the DOM at every
  width (it is **not** `display:none` — measured at 1280 px sitting off-screen at
  `x = 1295`): `width:300px; position:fixed; right:0; top:0; z-index:2000;
  padding-top:20px; background:#fff; height:calc(100vh)` (measured **800 px** at a
  375×800 viewport), `box-shadow:-10px 0 20px -10px rgba(0,0,0,0.1)`,
  `transform:translateX(110%)` (**330 px** — measured rect `x = 390` at a 375 px
  viewport) and `transition:.2s all cubic-bezier(0.66,0.2,0.48,0.9)`; opening is
  `body.offcanvas-menu → .site-mobile-menu{transform:translateX(0%)}`.
  - **Header strip:** `div.site-mobile-menu-header` (`padding-left/right:20px;
    float:left`, measured height **50 px**) holds
    `div.site-mobile-menu-close` (`float:right; margin-top:8px`) ›
    `span.icon-close2.js-menu-toggle{font-size:30px; padding-left:10px;
    line-height:1; cursor:pointer; transition:.3s all ease}` with
    `:hover{color:#dee2e6}` — the preview renders an **inline SVG ✕** here
    (`lucide-react` `X` at `30 px` in the recreation), and **this span is a second
    `.js-menu-toggle`**, i.e. the same handler as the hamburger.
  - **Body:** `div.site-mobile-menu-body{overflow-y:scroll;
    -webkit-overflow-scrolling:touch; position:relative; padding:0 20px 20px;
    padding-bottom:150px; height:calc(100vh - 52px)}` (measured **748 px** at
    800 px vh) — the JS clones the desktop list into it.
  - **Cloned list:** `snippet.js` does
    `document.querySelectorAll('.js-clone-nav').forEach(nav => { copy = nav.cloneNode(true);
    copy.className = 'site-nav-wrap'; copy.removeAttribute('id'); mobileBody.appendChild(copy) })`
    — one `ul.site-nav-wrap` (measured **245 px** wide inside the 300 px panel, i.e.
    300 − 2×20 padding − the scrollbar) at **every** width; the clone drops the
    `cl-d-none cl-d-xl-block` classes, so the drawer list is visible regardless of
    viewport. Its rows, measured: **8 top rows at 50 px** (`a{display:block;
    padding:10px 20px; position:relative; color:#212529; font-size:20px}` —
    `10 + 30 + 10`); the `cl-active` row is **`#000`**
    (`.site-nav-wrap li .cl-active{color:#000}`); hover is **`hover{color:#89ba16;
    text-decoration:none}`** (verified). Second level: `> li > a{padding-left:40px;
    font-size:16px}` measured **44 px** rows (`10 + 24 + 10`), same `#212529` →
    `#89ba16` hover; a third level exists in CSS (`padding-left:60px; font-size:16px`)
    but this page has only two levels.
  - **Per-row disclosure arrows:** for every `.site-mobile-menu .has-children` the JS
    **inserts** `span.arrow-collapse.cl-collapsed[role=button][aria-label="Show
    submenu"][aria-expanded=false]` as the `li`'s first child and rewrites the `ul`
    to `class="cl-collapse" id="collapseItem<k>"` (`collapseItem0` for the
    job-listings row, `collapseItem1` for the pages row). The arrow is
    `position:absolute; right:0; top:10px; z-index:20; width:36px; height:36px;
    text-align:center; cursor:pointer; border-radius:50%` (measured **36 × 36** at
    `x = 619` i.e. flush with the panel's inner edge, `y = 180.125` on the
    job-listings row) with `:hover{background:#f8f9fa}` and a `::before` that is the
    **icon-font glyph `\f078`** at `font-size:12px`, `font-family:'icomoon'`,
    `translate(-50%,-50%) rotate(-180deg)` when open / `rotate(0)` with
    `.cl-collapsed`, `transition:.3s all ease` (visually: **down chevron closed, up
    chevron open**). Clicking it toggles `cl-show` on the sub-list, `cl-active` +
    `cl-collapsed` on the arrow and `aria-expanded`.
  - **Opening it in the harness (375×800, verified):** after activating the
    hamburger, `body.offcanvas-menu` is set, the panel's `translateX` goes to `0`,
    the veil (`body::before`) becomes `opacity:1; visibility:visible; z-index:1002`,
    the drawer shows the eight 50 px rows and, with the job-listings arrow expanded,
    its two sub-rows at 44 px (`padding-left:40px`, 16 px), the arrow flipping to the
    up chevron with `aria-expanded="true"` — the captured frame also shows the photo
    dimmed behind the panel and the header's **`BRAND` visible above the veil**
    (the header's `z-index:1999` sits above the veil's `1002`; only the panel's
    `2000` is above the header).
  - **Close paths (all verified in the snippet source and in the live page):** every
    `.js-menu-toggle` click toggles `body.offcanvas-menu` (both the hamburger and the
    ✕ get `cl-active` + `aria-expanded="true"` when open, and both are reset on
    close); a document **`mouseup`** outside the panel (and not on a
    `.js-menu-toggle`) closes it; **`Escape`** closes it; **`resize` with
    `innerWidth > 768` closes it** — note the **strict `>`**, so a page *at* exactly
    768 px keeps the drawer state; and an in-panel link click does **not** close it
    (in the source only the ✕ and the outside/`Escape`/resize paths close).
- **`body`:** `font-family:"Quicksand", …; background-color:#fff; height:200vh;
  position:relative` (measured **1600 px** tall at an 800 px viewport) — the doubled
  height is the only thing below the band and is there for scroll room; nothing in
  this variant is sticky, so the recreation needs real content rather than blank
  filler to make the page scrollable.
- **The veil (`body:before`):** `content:""; position:absolute; top/left/right/
  bottom:0; background:rgba(0,0,0,0.5); transition:.3s all ease; opacity:0;
  visibility:hidden; z-index:1`, flipped by `body.offcanvas-menu:before{opacity:1;
  z-index:1002; visibility:visible}`. Unlike its `-08` sibling this veil is **live
  code** and must be implemented (as a real overlay element with
  `black/50` + the `.3s` fade, `aria-hidden`, and the same stacking relationship).
- **Band (`div.hero`):** measured **1265 × 800 px** at 1280×800 = `height:100vh;
  width:100%; background-size:cover; background-position:center center;
  background-repeat:no-repeat`, with the image set **inline**
  (`images/hero_1.jpg`, 1900×1267, 475,413 B — the same group-of-three photo as the
  `-08` sibling, per the screenshot).
- **Type:** `"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, "Noto Sans", sans-serif, …emoji…` — the sheet declares the
  self-hosted faces **400** and **700 only** (four `@font-face` rules, latin +
  latin-ext; the archive's two `600` files are never referenced), and the font is
  applied to `body` *after* the `Roboto` default in the normalize block, so the
  Roboto stack is dead code. Icon font: a **424 B `icomoon-subset.woff2`** providing
  exactly two glyphs — `\e313` (the nav caret) and `\f078` (the drawer chevron) —
  declared in a single one-line `@font-face` at the very end of the sheet;
  `[class^="icon-"]` keeps those spans on the text baseline
  (`display:inline-block; line-height:1; font-size:inherit`).
- **Screenshot read-through (1200×972, AVIF→PNG):** a browser-chrome mock of the
  live preview. Under the address bar: `BRAND` in **white uppercase with wide
  letter-spacing** at the **left**; the six nav labels **centred** with the current
  row solid white and the rest ~50 % white, the two dropdown parents carrying a small
  down chevron; and at the right the pair — an **outline-white `+ Post a Job`** with a
  square-ish 4 px radius beside a **solid yellow-green `Log In` with a lock icon**.
  Everything sits directly on the full-bleed photo (three people, two men and a
  woman, in muted blue/grey and black garments against a grey cinderblock wall) with
  **no scrim**, and the band fills the rest of the frame — no content sections, no
  footer. That frame — one transparent dark-on-photo row holding a wordmark at 5 %,
  a centred six-item list with two dropdowns, and an outline+filled CTA pair at the
  right edge, over a `100vh` photo — is the design being replicated. The screenshot
  is also the source of the pair's *relative* look (thin white outline vs filled
  green, both with icons and a small radius) and of the sage/yellow-green accent that
  the stylesheet confirms as `#89ba16`.
- **Breakpoint truth table (all measured on the live preview):**

  | Width | Container padding | Nav list | Hamburger | CTA pair | Logo / CTA column | Header box |
  | --- | --- | --- | --- | --- | --- | --- |
  | 375 px | `15 px` | `display:none` | visible, `28 × 42`, `margin 8px 0 0 16px` | `display:none` | `position:relative` (in-flow) → row 50 px | `48 + 50 px` tall |
  | 767 px | `15 px` | `display:none` | visible | `display:none` | `position:relative` → row 50 px | row 50 px |
  | 768 px | `15 px` | `display:none` | visible | `display:none` | absolute (row collapses to 0) | `top:32px` + `margin-top:16px` |
  | 992 px | `15 px` | `display:none` | visible (`x = 885`) | **visible** (`131 × 40` + `96 × 38`) | absolute | `y = 48` |
  | 1100 px | `15 px` | `display:none` | visible (`x = 988`) | visible (`x = 741` / `876`) | absolute | `y = 48` |
  | 1199 px | `15 px` | `display:none` | visible (`x = 1082`) | visible (`x = 835` / `970`) | absolute | `y = 48` |
  | 1200 px | **`112 px`** | **`block`**, 576 px wide, centred | **hidden** | visible (`x = 880` / `1015`) | absolute | `y = 48` |
  | 1280 px | `112 px` | `block`, `576 × 64` at `x = 345` | hidden | visible (`x = 956` / `1091`) | absolute | `y = 48` |

- **Reference artifacts:** `/tmp/wm09/prev.html` (live preview HTML, 5,100 B),
  `/tmp/wm09/style.css` (21,239 B, sha256 `479573fc…`) and `/tmp/wm09/snippet.js`
  (2,525 B, sha256 `c60db6e1…`) — both **byte-identical** to
  `/tmp/wm09/z/website-menu-09/css/style.css` and `js/snippet.js` inside
  `/tmp/wm09/wm09.zip` (650,682 B, sha256 `ed488bac…`); `/tmp/wm09/z/
  website-menu-09/index.html` (4,897 B archive twin — the live-vs-archive `diff` is
  16 head-only lines), `images/hero_1.jpg` (1900×1267, 475,413 B), the 6 Quicksand
  woff2 files, `fonts/icomoon-subset.woff2` (424 B) and `README.md`; `/tmp/wm09/
  page.html` (the 108,851 B ColorLib template page — source of the
  description/dates/download-size facts); `/tmp/wm09/cat.js` (the 633,990 B preview
  catalog index that maps the slug to `theme/bootstrap/`); `/tmp/wm09/shot.png` (the
  1200×972 screenshot, converted from the 126,459 B AVIF original — the source of the
  visual read-through); `/tmp/wm09/measure.json` (the per-width computed-style dump);
  plus live-browser captures at 1280×800 (desktop triptych with the first dropdown
  forced open), 1100×800 (tablet tier: both CTAs + hamburger, no nav) and 375×800
  (drawer open, job-listings submenu expanded, `X` visible).

## Design tokens

Extracted from the source stylesheet `css/style.css` (21,239 B) of
`website-menu-09` (live preview
`https://preview.colorlib.com/theme/bootstrap/website-menu-09/` → HTTP 200;
byte-identical archive copy) and cross-checked against the 1200×972 screenshot and
the live render at 1280×800, 1200, 1199, 1100, 992, 768, 767 and 375 px.

| Token | Value | Used by |
| --- | --- | --- |
| brand green | **`#89ba16`** | the **primary CTA** (`background` + `border-color`), the **`2px` flyout top hairline**, an active flyout row's text, and the drawer rows' hover text (`.site-nav-wrap a:hover`) |
| brand green hover | **`#90c317`** | `.cl-btn.cl-btn-primary:hover` (`background` + `border-color`) |
| ink | `#212529` | `body{color}`, drawer top/sub rows, a hovered flyout row's **text** |
| flyout row text | `#343a40` | `.cl-dropdown a{color}` (the resting state of every flyout row) |
| flyout row hover wash | **`#ebeef0`** | flyout row `:hover`/`:active` `background` (a **grey** wash, not the family's blue) |
| disabled row | `#6c757d` | `.cl-nav-link.disabled`, Bootstrap's disabled flyout row |
| drawer close hover | `#dee2e6` | `.site-mobile-menu-close span:hover` |
| arrow hover wash | `#f8f9fa` | `.arrow-collapse:hover` (the 36 px round disclosure) |
| surfaces | `#fff` | page background, flyout background, drawer background |
| overlay | **`rgba(0,0,0,0.5)`** | `body:before` veil (live code in this variant — `opacity 0→1`, `z-index 1→1002`, `.3s all ease`) |
| flyout shadow | `0 2px 20px -2px rgba(0,0,0,0.2)` | `.cl-dropdown` |
| drawer shadow | `-10px 0 20px -10px rgba(0,0,0,0.1)` | `.site-mobile-menu` |
| button focus ring (killed) | `0 0 0 0.2rem rgba(38,143,255,0.5)` / `rgba(0,123,255,0.25)` | `.cl-btn-primary:focus` / `.cl-btn:focus` — **cancelled** by the later `.cl-btn:hover,:focus,:active{outline:none; box-shadow:none !important}`; the recreation restores a visible `focus-visible` ring |
| bootstrap leftovers (unused/overridden) | link `#007bff`, hover `#0056b3`, primary hover `#0069d9`/`#0062cc` active `#0062cc`/`#005cbf`, `cl-bg-dark` `#343a40` | page `a` defaults and the pre-override `.cl-btn-primary` block — none of them reach the rendered chrome except the (unused) `a` defaults |
| radii | **`4px`** on `.cl-btn` (`0.25rem`) and **`50%`** on the 36 px drawer arrow; **`0`** everywhere else (`button{border-radius:0}`, square flyout, square drawer, square CTA-on-photo look) | buttons + drawer disclosure — do not spread rounding |
| type | `"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — declared weights **400 / 700** (four self-hosted woff2 subsets; the archive's two `600` files are unreferenced); a dead `Roboto` `body` stack sits in the normalize block | whole page |
| icon font | `icomoon` — a **424 B subset** with exactly `\e313` (nav caret) and `\f078` (drawer chevron) | dropdown parents + the drawer's disclosure arrows (replaced by `lucide-react` `ChevronDown`/`ChevronUp`) |
| type scale | body `1rem / 1.5`; wordmark **`1.5rem` (24 px) / uppercase / `letter-spacing:.2rem` (3.2 px) / line-height 36 px / weight 400**; nav labels **16 px / 400** (padding `20 px`); flyout rows **16 px / `line-height:1.4` (22.4 px)**; drawer top rows **20 px**; drawer sub-rows **16 px**; buttons **1rem / `line-height:1.5` (24 px)**; hamburger **40 px** (`line-height:0`) with a **28 px** (`cl-h3`) icon; drawer close **30 px**; caret **16 px**; drawer arrow glyph **12 px** | chrome + drawer |
| spacing rhythm | header `top:2rem` **+** `margin-top:1rem` → **48 px** offset; container `padding:0 7rem` (112 px) ≥1200 px / `0 15px` below; logo & CTA columns at **5 %** left/right, `width:50%`, `padding:0 15px`; nav rows `padding:20px` (+ `padding-right:20px` and the caret at `right:0` on a parent); flyout `min-width:200px`, rows `padding:9px 20px`, `margin-top:20px → 0` on open, `border-top:2px`; CTAs `padding:6px 12px` + `span` `margin-right:8px`; hamburger `margin:8px 0 0 16px`; drawer `width:300px`, `padding-top:20px`, strip `padding:0 20px` + close `margin-top:8px`, body `padding:0 20px 20px` + `padding-bottom:150px`, top rows `padding:10px 20px`, sub rows `padding-left:40px` (third level `60px`), arrow `top:10px` / `right:0` / `36 px`; band `100vh`; body `200vh` | chrome + drawer + band |
| grid | `cl-container-fluid` full width, no max-width; `cl-row{display:flex; flex-wrap:wrap; margin:0 -15px}`; `cl-col-6{width:100%; flex:0 0 50%; max-width:50%; padding:0 15px}` — but the logo and CTA columns are **absolutely positioned** (row height 0 at ≥768 px); the nav is pinned **`left:50%` + `translateX(-50%)`**; the CTA group is a flex row pushed right by an inner `margin-left:auto` | header |
| motion | `a{transition:.3s all ease}` (nav rows, drawer rows, close button, arrow glyph); `.cl-btn` `color/background-color/border-color/box-shadow .15s ease-in-out` (with a `prefers-reduced-motion: reduce` guard that zeroes it); flyout `transition:.2s 0s` (opacity + visibility + the `20 px` margin-top slide, `transition-delay:0s` when open); drawer `transform .2s cubic-bezier(0.66,0.2,0.48,0.9)`; veil `.3s all ease` | all interactive transitions |

**Google Fonts map:** one `<link>` for **Quicksand** 400;500;600;700
(`https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap`)
— the source declares **400/700** and the sheet also asks for weight **500** on
`h3`/`.cl-h3` (which is what sizes the hamburger's `span`), so the Google variable
face is the safest superset; the source's self-hosted woff2 files and its 424 B icon
subset are never copied. Icons from `lucide-react`: `Menu` (the hamburger), `X` (the
drawer close), `Plus` (the secondary CTA), `Lock` (the primary CTA), `ChevronDown`
(desktop carets and the drawer's closed arrows), `ChevronUp` (an expanded drawer
arrow).

## Requirements

### Feature: The transparent single-tier header and its zero-height row

#### Scenario: The bar floats 48 px below the top over the photo

- **Given** the page loads at any width
- **When** the header renders
- **Then** it is **absolutely positioned**, `width:100%`, `z-index:1999`, sitting
  **48 px** below the top of the document (the source's `top:2rem` **plus** its
  `cl-mt-3` `margin-top:1rem`), with a **transparent** surface so the photo shows
  through, and the bar is **one tier** — no utility bar, **no sticky/fixed header**
  (the source's marketing copy mentions a sticky header this variant never
  implements) and no second row
- **And** from **768 px** up the row **collapses to zero height** exactly as the
  source does — the wordmark column and the CTA column are **absolutely positioned**
  against the header and overflow the zero-height `div.cl-row` (measured `1071 × 0`
  at 1280 px) — while **below 768 px** both columns return to normal flow and the row
  measures **50 px** tall
- **And** the container is a full-width `cl-container-fluid`
  (`margin:0 auto`, **no max-width**) whose padding is **`7rem` (112 px)** at
  **≥1200 px** and **`15 px`** below `1200 px` (the source's
  `@media (max-width:1199.98px)` override), and the row keeps the source's
  `display:flex; flex-wrap:wrap; margin:0 -15px` with two `50 %` `cl-col-6` children

#### Scenario: Three anchors — wordmark left, nav centred, CTAs right

- **Given** the header renders at ≥1200 px
- **When** the bar is measured
- **Then** the wordmark column is pinned at **`left:5%`** (`width:50%`,
  `max-width:50%`, `padding:0 15px`) with its anchor own-brand text at
  **24 px / uppercase / `letter-spacing:3.2px` / `#fff` / `line-height:36px` / weight
  400** (never the string "Brand"), a link to the top of the page
- **And** the nav list is pinned **`left:50%` + `translateX(-50%)`** at `z-index:5`
  (a 50 %-plus-translate pin, **not** a flex `justify-content` — measured
  `172.71 → 576 px` wide at `x = 345`), so it is centred on the **header**, not on
  the space left of the CTAs
- **And** the CTA column is pinned at **`right:5%`** (`width:50%`,
  `max-width:50%`, `padding:0 15px`, `display:flex`, `text-align:right`) and its
  inner `margin-left:auto` group pushes the two CTA anchors to the right edge

### Feature: The centred nav list, its two dropdowns and the CTA pair

#### Scenario: Six nav rows plus two drawer-only action rows

- **Given** the header renders at ≥1200 px
- **When** the list is inspected
- **Then** it holds **eight `<li>` in source order** — **six** nav rows
  (a current/home-kind row, an about-kind row, **two dropdown parents** in
  positions 3 and 4, a blog-kind row, a contact-kind row) and then **two
  action-only rows** (an `+`-prefixed post-kind row and an account-kind row) that are
  `display:none` at **≥992 px** and exist only so the drawer's copy carries them
  (**own labels** — the source's strings are never reproduced)
- **And** every row is `display:inline-block` with `> a{display:inline-block;
  position:relative; padding:20px}` (**measured 64 px row height**: 20 + 24 + 20),
  inactive labels **`rgba(255,255,255,0.5)`**, `:hover`/`:focus` **`#fff`**, and the
  current row **`#fff`** with `aria-current="page"` — reproducing the source's
  measured result, in which the `.cl-active{padding:5px 20px}` declaration is
  **dead** (its sibling rule's `!important` wins) so the current row keeps the same
  20 px padding as its neighbours
- **And** the two dropdown parents reserve the caret via **`padding-right:20px`** and
  a **16 px** chevron pinned `top:50%; right:0; translateY(-50%)`
  (`lucide-react` `ChevronDown` in place of the `\e313` icon-font glyph)
- **And** the CTA pair is **exactly two anchors** — an **outline-white secondary**
  (`background:transparent; border:2px solid #fff; color:#fff`) and a **filled green
  primary** (`background:#89ba16; border-color:#89ba16; color:#fff`, `1px` border),
  each `padding:6px 12px`, `font-size:1rem`, `line-height:1.5`,
  **`border-radius:4px`**, with a leading icon (`lucide-react` `Plus` / `Lock`) inside
  an `8 px`-gap wrapper, measured **131 × 40 px** and **96 × 38 px** at 1280 px (the
  source's own **2 px** height mismatch between the pair is reproduced, since the
  border widths differ), and **both hidden below 992 px**
- **And** the pair inverts on hover/focus — the secondary to **`background:#fff;
  color:#000`** and the primary to **`background:#90c317; border-color:#90c317`** —
  over `color/background-color/border-color/box-shadow .15s ease-in-out`, and **no
  `.cl-btn:focus` box-shadow ring of the Bootstrap colour survives**
  (`.cl-btn:hover,:focus,:active{outline:none; box-shadow:none !important}`); the
  recreation instead ships a visible `focus-visible` ring (documented delta)

#### Scenario: Both dropdowns open flush under their parent

- **Given** the header renders at ≥1200 px
- **When** a dropdown parent is hovered, focused or clicked
- **Then** a **square-cornered white** `ul` appears flush under the row
  (`top:100%`, `position:absolute`, `text-align:left`, `padding:0`,
  `margin-top:20px → 0`), **`border-top:2px solid #89ba16`**,
  **`box-shadow:0 2px 20px -2px rgba(0,0,0,0.2)`**, **`min-width:200px`** on its rows
  (measured **200 px** wide for both flyouts), animating open in **`0.2s`**
  (`transition:0.2s 0s`, `transition-delay:0s` when open) and closing back to the
  `20 px` offset — **no radius anywhere**
- **And** the first flyout holds **two** rows and the second **eight**, each row
  `display:block; padding:9px 20px; font-size:16px; line-height:1.4` in
  **`#343a40`**, hover/focus **`background:#ebeef0; color:#212529`** (the source's
  grey wash — **not** a blue fill), with an active row using
  **`background:#ebeef0; color:#89ba16`**, and a long label in the second flyout
  **wrapping inside the 200 px box** exactly as the source does
- **And** the flyout is a **real disclosure**: it opens on **hover and click**, the
  parent exposes `aria-expanded`/`aria-controls`/`aria-haspopup`, `ArrowDown` on the
  parent opens it and focuses the first row, `ArrowDown`/`ArrowUp` move between rows,
  **`Escape`** closes it and returns focus to the parent, an outside click closes it,
  one flyout is open at a time, and the surface never escapes the viewport (it flips
  to `right:0` when a 200 px box would overflow) — while the parent remains a **real
  link** to its own section
- **And** the source's nested-submenu rules (a `\e315` right caret, `left:100%;
  top:0` third level) are **deliberately not implemented**: no `has-children` exists
  inside either flyout, so there is no third level to build

### Feature: The off-canvas drawer (everything below 1200 px)

#### Scenario: The hamburger reveals a 300 px drawer from the right

- **Given** the page renders **below 1200 px** (`cl-d-xl-none`)
- **When** the hamburger is activated
- **Then** `body` gains `offcanvas-menu`, the drawer — `position:fixed; right:0;
  top:0; width:300px; height:100vh; padding-top:20px; background:#fff;
  z-index:2000; box-shadow:-10px 0 20px -10px rgba(0,0,0,0.1)` — slides from
  `translateX(110%)` (measured **330 px**, off-screen) to `translateX(0)` over
  **`.2s cubic-bezier(0.66,0.2,0.48,0.9)`**, and the **`rgba(0,0,0,0.5)` veil**
  (`body::before`: `opacity:0 → 1`, `visibility:hidden → visible`, `z-index:1 →
  1002`, `.3s all ease`) dims the page behind it
- **And** the opener is a **real `button`** (not the source's `href="#"` anchor) with
  `aria-expanded`/`aria-controls` and an accessible label, **28 × 42 px** at
  `margin:8px 0 0 16px` with a **28 px `lucide-react` `Menu`** (the source's `40 px`
  font-size / `line-height:0` / `cl-h3` span arithmetic is reproduced by the box),
  visible **below 1200 px and hidden at ≥1200 px**
- **And** the drawer's own `✕` (`font-size:30px; padding-left:10px;
  cursor:pointer; hover #dee2e6`, rendered as a **30 px `lucide-react` `X`**) closes
  it and the same surface/stacking is kept — the **header (`z-index:1999`) stays
  above the veil** while only the panel (`2000`) is above the header

#### Scenario: The drawer lists the same navigation with two nested sub-lists

- **Given** the drawer is open at any width below 1200 px
- **When** its contents are measured
- **Then** it renders the **same navigation data** as the desktop row — never a
  DOM clone and never a second hand-maintained list (the source literally clones
  `ul.js-clone-nav` into the panel and renames it `site-nav-wrap`; the recreation
  renders one data-driven component twice) — with the strip
  (`padding:0 20px`, `✕` at `margin-top:8px`) and the scroll body
  (`padding:0 20px 20px`, `padding-bottom:150px`, `height:calc(100vh - 52px)`,
  measured **748 px** at an 800 px viewport, `overflow-y:scroll`)
- **And** the list holds **eight top rows at 50 px** (`display:block;
  padding:10px 20px; color:#212529; font-size:20px`), the current row **`#000`**,
  hover **`#89ba16`** with no underline, and the two nested parents have
  **`16 px` sub-rows at 44 px** (`padding-left:40px`, hover `#89ba16`); a third level
  (`padding-left:60px`) exists in the source CSS but is not built
- **And** each nested parent carries a **36 × 36, `border-radius:50%`** disclosure
  control pinned `right:0; top:10px`, `cursor:pointer`, hover background `#f8f9fa`,
  whose **`12 px` chevron** rotates (`0°` closed → `-180°` open, `.3s all ease`) —
  implemented as a real **`button`** with `aria-expanded` and an accessible label
  (the source's `span[role=button]` is **not focusable** and has no keyboard path),
  toggling a sub-list that is `display:none` until it gains `cl-show`, and the arrow
  flips to the up chevron while open
- **And** closing is possible through **every source path**: the `✕`, the hamburger
  again, a **click outside the panel**, **`Escape`**, and a **resize above 768 px**
  (the source uses `innerWidth > 768` **strictly** — the recreation may normalise to
  `≥768`/`≥1200` but must document it) — each path also resetting `aria-expanded` on
  every toggle, and the drawer must close when a **destination is chosen** (the
  source only closes on its three dismissal paths, a documented delta)

### Feature: Full-bleed image band and the materialised targets

#### Scenario: The band renders at full viewport height with a covered image

- **Given** the page loads
- **When** the band below the header is measured
- **Then** it is a full-width **`100vh`** band (`background-size:cover;
  background-position:center center; background-repeat:no-repeat`) supplied by a
  deterministic placeholder
  `https://picsum.photos/seed/gangway-hero/1920/1080` (the source uses its own
  `images/hero_1.jpg`, 1900×1267; no asset is copied)
- **And** it is the page's **first** content band — the header floats over it, so
  first paint is photo + one nav row with the wordmark, the centred list and the CTA
  pair

#### Scenario: Every declared destination resolves to real content

- **Given** the source declares **13 distinct destinations** — the wordmark and the
  current row (`index.html`), an about page, a job-listings parent, two job pages,
  a post-a-job action (twice: the CTA and a drawer row), a pages parent, eight
  child pages (services, service single, blog single, portfolio, portfolio single,
  testimonials, FAQ, gallery), a blog page, a contact page and a login page — plus
  **one** dead `href="#"` (the hamburger)
- **When** the recreation's header, flyouts and drawer are inspected
- **Then** every one of them resolves to a real in-page section or route of the same
  *kind* (home → intro, job listings → openings grid, job single → role detail,
  post a job → submit form block, pages children → service/blog/portfolio/
  testimonials/FAQ/gallery sections, blog → article list, contact → contact block,
  login → account panel), each with `scroll-margin-top` ≥ the header height
- **And** **zero** dead `href="#"` links remain anywhere in the app (the dropdown
  parents and the drawer's disclosure are `button`-like controls with
  `aria-expanded`, never `href="#"`), any imagery inside those sections comes from
  `https://picsum.photos/seed/gangway-<n>/<w>/<h>`, and the page is longer than the
  viewport so the composition reads like the source's `body{height:200vh}` with real
  content instead of blank filler

### Feature: Footer and provenance hygiene

#### Scenario: The app ships a Component Dock footer

- **Given** the source snippet has no footer at all (it is chrome + one band)
- **When** the recreation is built
- **Then** it adds a minimal app-shell footer (a deliberate, documented delta from
  the source) with a dark surface and a **1 px** translucent hairline top edge,
  holding the app's wordmark, exactly **one** link to
  `https://www.componentdock.com/` branded "Component Dock" (new tab,
  `rel="noreferrer"`) and a **current year computed at render**

#### Scenario: No provenance strings and no copied assets

- **Given** the app source is searched
- **When** it is checked
- **Then** no `colorlib`, "Website Menu 09" or `website-menu-09` string appears
  anywhere in `apps/gangway` (comments included — record the palette as design-token
  notes instead: "brand green `#89ba16`")
- **And** nothing from the source archive ships: no `css/style.css`, no
  `js/snippet.js`, no `quicksand-*.woff2`, no `icomoon-subset.woff2`, no
  `hero_1.jpg`, no inlined SVG data URI or icon-font glyph (`\e313`/`\f078`), no
  `cl-`-prefixed utility class names, no jQuery or Bootstrap, and no copied copy —
  the "Brand" wordmark and the source's 17 labels (`Home`, `About`, `Job Listings`,
  `Job Single`, `Post a Job`, `Pages`, `Services`, `Service Single`, `Blog Single`,
  `Portfolio`, `Portfolio Single`, `Testimonials`, `Frequently Ask Questions`,
  `Gallery`, `Blog`, `Contact`, `Log In`) are **not** reproduced verbatim; images
  come from picsum and icons from `lucide-react`

### Feature: Responsive behaviour across the three tiers

#### Scenario: The chrome reflows at every measured breakpoint

- **Given** the page renders at the source's breakpoints (375, 767, 768, 992, 1100,
  1199, 1200, 1280 px)
- **When** the layout is measured
- **Then** the source's three tiers are reproduced — **below 992 px**: wordmark
  (`position:relative`, in-flow) + hamburger only, the **CTA pair hidden**, the row
  **50 px** tall, the two drawer-only action rows present in the drawer;
  **992–1199.98 px**: wordmark + **both CTAs** + hamburger, the **nav list
  `display:none`** (`cl-d-xl-block` needs ≥1200 px);
  **≥1200 px**: the **centred nav list replaces the hamburger**
  (`cl-d-xl-none`) — with the container padding flipping `15 px ↔ 112 px` at
  1199.98/1200 px and the row collapsing from 50 px to **0** at 768 px
- **And** the band stays **`100vh`** at every width, the drawer is `300 px` wide at
  every width, its list is **245 px** inside it, the flyouts stay inside the viewport
  (flipping to `right:0` when a 200 px surface would overflow at ≥1200 px), and the
  page produces **no horizontal overflow at 320 px**
  (`scrollWidth === innerWidth`)

### Feature: Motion, accessibility and reduced motion

#### Scenario: Motion is decorative and fully suppressible

- **Given** the page loads with motion enabled
- **When** the header, flyouts and drawer are used
- **Then** nav rows, drawer rows, the close control and the arrow chevron transition
  over **`.3s all ease`**, the buttons over **`.15s ease-in-out`** on four
  properties, the flyouts over **`.2s`** (opacity/visibility + the `20 px` gap), the
  drawer over **`.2s cubic-bezier(0.66,0.2,0.48,0.9)`** and the veil over **`.3s all
  ease`**
- **And** under `prefers-reduced-motion: reduce` all of those collapse to effectively
  instant (the source already zeroes the button transition under that query; extend
  it to the flyout, drawer, arrow and veil), and all content is present immediately
  (no motion gate on first paint)
- **And** the hamburger and the drawer's `✕` are real `button`s with
  `aria-expanded`/`aria-controls`, the drawer's disclosure arrows are real `button`s
  with `aria-expanded`, the dropdown parents expose
  `aria-haspopup`/`aria-expanded`/`aria-controls` and stay real links, the current
  row is not distinguished by colour alone (`aria-current="page"`), the veil and the
  drawer expose `aria-hidden`/labels appropriately, focus moves into the drawer on
  open and returns to its opener on close, every interactive element has a visible
  `focus-visible` ring (a restored delta — the source cancels its own), and `Escape`
  closes the flyout **and** the drawer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/gangway/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/gangway/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `apps/gangway` recreates ColorLib **"Website Menu V09"** (source slug
      `website-menu-09`, https://colorlib.com/wp/template/website-menu-09/) under the
      new name `gangway`; the registry/`package.json` reads
      `@free-react-templates/gangway`
- [ ] The header is **absolutely positioned, transparent**, `width:100%`,
      `z-index:1999`, sitting **48 px** below the top (`top:2rem` **+**
      `margin-top:1rem`), **single tier**, with **no sticky/fixed behaviour** and no
      second row
- [ ] The row **collapses to zero height at ≥768 px** (both the wordmark and CTA
      columns are absolutely positioned against the header, `width:50%`,
      `max-width:50%`, `padding:0 15px`, at `left:5%` / `right:5%`), and measures
      **50 px** below 768 px where both columns return to normal flow
- [ ] Container: full-width `cl-container-fluid`, **no max-width**, padding
      **`112 px`** at ≥1200 px and **`15 px`** below (the source's
      `max-width:1199.98px` override); row `display:flex; flex-wrap:wrap;
      margin:0 -15px`
- [ ] Wordmark: own brand text, **24 px / uppercase / `letter-spacing:3.2px` /
      `#fff` / `line-height:36px` / weight 400**, pinned `left:5%`, a link to the top
      of the page (never the string "Brand")
- [ ] Nav list: **`display:none` below 1200 px and `block` at ≥1200 px**, pinned
      `left:50%` + `translateX(-50%)` at `z-index:5`, **eight `<li>`** — six nav rows
      (two of them dropdown parents in positions 3 and 4) + two `display:none`
      action rows — labels **16 px / 400**, `padding:20px` (measured 64 px rows),
      inactive **`rgba(255,255,255,0.5)`**, `:hover`/`:focus` **`#fff`**, current row
      **`#fff`** + `aria-current="page"` **with the same 20 px padding** (the
      source's `.cl-active{padding:5px 20px}` is dead code)
- [ ] Dropdown parents: `padding-right:20px` + a **16 px** chevron pinned
      `top:50%; right:0; translateY(-50%)` (`lucide-react`, not the `\e313` glyph),
      `cursor:pointer`
- [ ] CTA pair: **exactly two** anchors — outline-white secondary
      (`border:2px solid #fff`, transparent, `#fff`, **131 × 40 px**) and filled
      green primary (`#89ba16`, `1px` border, **96 × 38 px**) — `padding:6px 12px`,
      `1rem`, `line-height:1.5`, **`border-radius:4px`**, leading `8 px`-gap icons
      (`Plus`/`Lock`), **hidden below 992 px**, hover/focus inverting to
      `#fff`/`#000` and `#90c317` over `.15s ease-in-out`, both pointing at real
      targets
- [ ] Flyouts: white, **square**, `absolute; top:100%; left:0`, `padding:0`,
      `margin-top:20px → 0`, **`min-width:200px`**, **`border-top:2px solid
      #89ba16`**, **`box-shadow:0 2px 20px -2px rgba(0,0,0,0.2)`**, `0.2s` open/close
      with `transition-delay:0s` when open; **2** and **8** rows at
      `padding:9px 20px` / **16 px** / `line-height:1.4` in **`#343a40`** →
      **`background:#ebeef0; color:#212529`** on hover/focus (active row
      `#ebeef0`/`#89ba16`), a long label wrapping inside the 200 px box, and the
      source's dead third level **not** implemented
- [ ] Dropdown behaviour: opens on **hover and click**, `aria-haspopup`/
      `aria-expanded`/`aria-controls` on the parent (which stays a real link),
      `ArrowDown`/`ArrowUp` traverse rows, `Escape` closes and returns focus, outside
      click closes, one flyout at a time, flip to `right:0` instead of overflowing
- [ ] Hamburger: a real `button` (**28 × 42 px**, `margin:8px 0 0 16px`, 28 px
      `lucide-react` `Menu`, accessible label + `aria-expanded`/`aria-controls`),
      visible **below 1200 px** and **hidden at ≥1200 px**
- [ ] Drawer: `fixed; right:0; width:300px; height:100vh; padding-top:20px;
      background:#fff; z-index:2000; box-shadow:-10px 0 20px -10px rgba(0,0,0,0.1)`,
      sliding `translateX(110%)` → `translateX(0)` over **`.2s
      cubic-bezier(0.66,0.2,0.48,0.9)`**, over a **`rgba(0,0,0,0.5)` veil**
      (`opacity 0→1`, `z-index 1→1002`, `.3s`), with the header (`z-index:1999`)
      staying **above** the veil
- [ ] Drawer contents: the **same navigation data** as the desktop row (one
      component, rendered twice — never a DOM clone), strip `padding:0 20px` with a
      **30 px `X`** (`margin-top:8px`, hover `#dee2e6`), body `padding:0 20px 20px` +
      `padding-bottom:150px` / `height:calc(100vh - 52px)`, **eight 50 px top rows**
      (`padding:10px 20px`, 20 px, `#212529`, current `#000`, hover `#89ba16`),
      **44 px sub-rows** (`padding-left:40px`, 16 px, hover `#89ba16`), and **two**
      `36 × 36` round disclosure `button`s (`right:0; top:10px`, hover `#f8f9fa`,
      12 px chevron, `0° → -180°`, `.3s`) toggling `display:none ↔ block` sub-lists
      with `aria-expanded`
- [ ] Drawer dismissal: the `✕`, the hamburger, an outside click, `Escape`, a resize
      above the mobile range (the source's strict `innerWidth > 768` — normalised and
      documented) and choosing a destination (delta) all close it, resetting
      `aria-expanded` on every toggle and returning focus to the opener
- [ ] The band is a **`100vh` full-bleed background image** (`cover`,
      `center center`, `no-repeat`) from
      `https://picsum.photos/seed/gangway-hero/1920/1080`; the page scrolls with
      **real content** past the viewport (the source's `body{height:200vh}`)
- [ ] All 13 declared destinations plus the two drawer-only action rows resolve to
      real sections/routes with `scroll-margin-top` ≥ the header height; **zero** dead
      `href="#"` links remain
- [ ] Shape language kept as the source has it: **`4px`** on the CTA pair and
      **`50%`** on the drawer disclosure only — square flyouts, square drawer, no
      pills anywhere
- [ ] Zero `colorlib` / "Website Menu 09" / `website-menu-09` provenance references
      anywhere in `apps/gangway` (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `quicksand-*.woff2`, no
      `icomoon-subset.woff2`, no `hero_1.jpg`, no inline SVG data URI, no `cl-`
      utility classes, no jQuery/Bootstrap, no copied strings (the 17 source labels
      and the "Brand" wordmark)
- [ ] `public/CNAME` = `gangway.free.componentdock.com` and
      `"homepage": "https://gangway.free.componentdock.com"` in
      `apps/gangway/package.json`; `package-lock.json` registers
      `@free-react-templates/gangway`
- [ ] Footer links `https://www.componentdock.com/` exactly once ("Component Dock")
      with a computed current year
- [ ] Accessibility: real `button`s with `aria-expanded`/`aria-controls` for the
      hamburger, the drawer's `✕` and every drawer disclosure arrow; disclosure
      semantics on the dropdown parents; `aria-current="page"` on the current row;
      visible `focus-visible` rings on every interactive element (restored — the
      source cancels its own); focus moved into / returned from the drawer;
      `prefers-reduced-motion: reduce` removes the drawer, flyout, arrow and veil
      transitions
- [ ] `scripts/verify-app.sh gangway` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] PR description includes: source template (ColorLib Website Menu V09), preview
      URL (`https://preview.colorlib.com/theme/bootstrap/website-menu-09/` → **HTTP
      200**, 5,100 B, `<title>Website Menu #9</title>`; the slug-only
      `/theme/website-menu-09/` path 404s; archive
      `https://preview.colorlib.com/downloads/free/website-menu-09.zip` → HTTP 200,
      650,682 B, sha256-identical `style.css`/`snippet.js`; screenshot 1200×972,
      126,459 B), the design tokens used (`#89ba16` brand/primary/flyout hairline/
      drawer hover, `#90c317` primary hover, `#212529` ink, `#343a40` flyout rows,
      `#ebeef0` flyout hover wash, `#6c757d` disabled, `#dee2e6` close hover,
      `#f8f9fa` arrow hover, `#fff` surfaces, `rgba(0,0,0,0.5)` veil,
      `0 2px 20px -2px rgba(0,0,0,.2)` flyout shadow, `-10px 0 20px -10px
      rgba(0,0,0,.1)` drawer shadow, `4px` + `50%` radii only, Quicksand 400/700,
      24 px uppercase `0.2rem` wordmark, 16 px nav labels, 200 px flyouts with 16 px
      rows, 20 px/16 px drawer rows, 4 px CTA pair with `6px 12px` padding,
      28 px hamburger, 30 px drawer close, 36 px round 12 px-glyph arrows), the
      structure (one transparent dark-on-photo bar holding a wordmark at 5 %, a
      centred six-item list with two dropdowns, an outline+filled CTA pair at the
      right edge, a `300 px` off-canvas drawer cloned from the same list with
      per-row disclosure arrows and a `rgba(0,0,0,.5)` veil, over a `100vh` image
      band, with `body{height:200vh}`) and what differs (new name + wordmark, own
      labels, the 17 source labels and the two dropdown strings replaced, `lucide`
      icons instead of the inline SVG data URIs and the `\e313`/`\f078` icon-font
      glyphs, Google Fonts instead of self-hosted woff2, the source's single dead
      `href="#"` hamburger and its 13 page links materialised as labelled sections,
      the dropdowns promoted to real hover+click keyboard disclosures, a real
      `button` hamburger and focusable drawer disclosures with `aria-expanded`, a
      restored visible focus ring, focus management on drawer open/close, the drawer
      closing when a destination is chosen, the `innerWidth > 768` resize rule
      normalised, the dead `Roboto` stack / `site-navbar-target` /
      `aligin-items-center` / `border-width-2` / nested-submenu / `600`-weight-font
      leftovers dropped, reduced-motion handling, footer attribution)
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
