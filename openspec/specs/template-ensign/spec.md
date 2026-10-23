# Template: Ensign (Website Menus)

## Purpose

Ensign is a **full-bleed, opaque brand-blue bar (`#1089ff`, 67.8 px tall at ≥992 px) that
carries a left-pinned uppercase white wordmark and one right-aligned seven-item nav list
whose last row is a full-bar-height orange (`#ff7315`) CTA block flush with the
container's inner right edge** — the only member of the *Website Menus* family that fills
its bar with a **saturated brand colour** (every sibling ships a white or transparent
bar), the only one whose CTA is a **solid colour field filling the entire bar height
rather than a pill**, and the only one whose **dropdown is opened both by hover and by
click** (`mouseenter`/`mouseleave` *and* `data-toggle="dropdown"`). On desktop the bar is
full-bleed while the orange block stops at the container's inner edge, so the CTA reads as
a painted panel hanging off the end of the blue band; below 992 px the bar turns **black**
(`#000`) and the whole list collapses into a **black dropdown panel** whose only rounded
element is the orange CTA (radius `5px`) sitting at the very bottom of the stack.

It is an original React recreation of the ColorLib free **"Website Menu V11"** snippet
(source slug `website-menu-11`), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation matches the source's
structure, order and design tokens 1:1 but copies no asset (no images — the source ships
none, no font files, no CSS files, no icon-font glyphs, no inline SVG paths, no text
verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-11/ — page title
  "Website Menu V11 - Free Navbar with Dropdown Template 2026 - Colorlib", **HTTP 200**,
  108,938 B, verified 2026-10-12. Page meta: posted **March 9, 2021** by **Rok Krivec**,
  0 comments; sibling links *previous post: Website Menu V10*, *next post: Website Menu
  V12*; structured data `datePublished` **2021-03-09T14:08:01+00:00**, `dateModified`
  **2026-09-25T10:42:07+00:00**. Template details block: Author **Colorlib**, Released
  **September 2026**, License **CC BY 3.0**. ColorLib's own description: *"A highly
  adaptive and easy-to-use free navbar with a dropdown template that you can tailor to
  your needs quickly. It is a Bootstrap snippet, so you know performance on desktop and
  mobile devices will be top-notch."* (its `meta description` / `og:description`: *"A
  flexible, fast free navbar template with a dropdown. No plugins, and compatible with
  Bootstrap 4, 5 and 6."*). September 2026 update note: *"this snippet is now plain HTML
  and CSS plus a few lines of vanilla JavaScript: no jQuery, no Bootstrap files, no
  plugins. The download is 252 KB (it was 261 KB). Use it on its own, or drop it into a
  Bootstrap 4, 5 or 6 project and it looks the same. The collapsible sections open and
  close without Bootstrap's JavaScript. The drop-down menus work without Bootstrap's
  JavaScript, including keyboard navigation."* TEMPLATES.md `## Website Menus (20)`
  (line 3071) — this item is the family's **eleventh** entry at **line 3083**; the slug
  `website-menu-11` appears exactly **once** in TEMPLATES.md and in no spec on `main`
  before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-11/` returns **HTTP 404**
  (`Not Found`, 9 B) — like its `-01`…`-10` siblings, the *Website Menus* family does
  **not** live under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-11/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **3,195 B**, `<title>Website menu 01</title>`, verified
  2026-10-12) — the URL the preview host's own catalog index records for this slug
  (`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
  633,990 B → `"website-menu-11":{"name":"Website Menu V11","tag":"Website Menu
  Templates","img":"…/website-menu-11-768x622.jpg","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-11/","details":"https://colorlib.com/wp/template/website-menu-11/","purchase":"https://colorlib.com/wp/template/website-menu-11/#pricing"}`).
  Its two assets — `css/style.css?v=cee19396` (**17,737 B**, `text/css`, sha256
  `dd90f2139c9d92a28ca14c637e41677590a2312631d988452565896d63dcb525`) and
  `js/snippet.js?v=d328ca19` (**5,798 B**, `application/javascript`, sha256
  `7bde7f8e394041ca6ccee3040e459ce501050c022bcd4e48f8971d8bc650627a`) — are
  **byte-identical** (same sha256, verified) to the copies in the snippet's own
  downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-11.zip` (**HTTP 200**,
  `application/zip`, **258,214 B**, sha256
  `cbe29875f56085cecef78b5abb23bc6ea4839e912e0b6c7fc208470168547223`; the ColorLib page
  rounds this to "252 KB"), which ships `index.html` (**2,992 B**), `css/style.css`,
  `js/snippet.js`, `README.md` (**1,264 B**), **no images at all**, and **eight** Roboto
  woff2 files (100/300/400/700 × latin/latin-ext — 24,444 B each for the four latin-ext
  faces and 37,520 B each for the four latin faces, **247,856 B = 96 % of the archive**).
  `diff` between the live page and the archive `index.html` is **head-only** (the preview
  host's `noindex` meta tags, a `cdnjs.cloudflare.com` `dns-prefetch`, and the
  cache-busting query strings) — the archive is the readable, un-versioned twin of the
  live preview. Both were read for this spec and the live render was cross-checked in a
  browser at 1280×800, 1200, 1199, 992, 991, 768 and 375 px (see Design reference).
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-11.jpg
  (HTTP 200, served as **AVIF**, 7,421 B, 1200×972, converted to PNG (56,753 B) and
  inspected visually 2026-10-12). No screenshot-only fallback was needed — the live
  preview is the primary reference and the archive its readable twin.
- **New name:** `ensign` (apps/ensign, `@free-react-templates/ensign`) — a ship's
  *ensign* is the **single solid-coloured banner** flown to identify her, and this variant
  is the family's only bar that **is** one solid colour field (`#1089ff`) carrying a second
  solid colour field (`#ff7315`) at its end: two flat banners butted together, no gradient,
  no transparency, no outline, nothing floating over the page. It continues the family's
  nautical run — **starboard** (`website-menu-05`), **larboard** (`-06`), **topdeck**
  (`-07`), **bowsprit** (`-08`), **gangway** (`-09`), **halyard** (`-10`). Single lowercase
  word, kebab-safe (no hyphen needed). Verified 2026-10-12: a repo-wide search returns
  **zero** hits for `ensign` in `apps/`, `openspec/specs/`, `docs/templates/` and
  `TEMPLATES.md`, and `https://colorlib.com/wp/template/ensign/` returns **HTTP 404**, so
  it is not a ColorLib source name either. The source name "Website Menu V11", its "Resto"
  wordmark, its seven labels, its four `Page n` items and its `Book a table` copy are never
  reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V11" (source slug `website-menu-11`,
  https://colorlib.com/wp/template/website-menu-11/), `datePublished` **2021-03-09**,
  rewritten in the 2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no
  Bootstrap files, no images** in the download. Design-wise this is the family's
  **"coloured bar with a dropdown + a full-height CTA"** variant: one **full-bleed
  `#1089ff` bar**, a left wordmark, one right-aligned seven-item list, an appended
  **`#ff7315` CTA block filling the bar's height**, a hover-and-click dropdown panel, and
  a mobile state that turns the bar **black** and stacks the list inside a collapsing
  panel. The page contains **only that bar plus a centred "Website menu #01" heading
  band** — no content sections, no footer, no images, no utility bar, nothing sticky.
- **CSS namespace:** the sheet is self-contained and `cl-`-prefixed for its utilities
  (`cl-container`, `cl-row`, `cl-col-md-6`, `cl-navbar`, `cl-navbar-expand-lg`,
  `cl-navbar-dark`, `cl-navbar-brand`, `cl-navbar-nav`, `cl-nav-item`, `cl-nav-link`,
  `cl-navbar-toggler`, `cl-navbar-collapse`, `cl-collapse`, `cl-collapsing`, `cl-show`,
  `cl-dropdown`, `cl-dropdown-toggle`, `cl-dropdown-menu`, `cl-dropdown-item`,
  `cl-bg-dark`, `cl-justify-content-center`, `cl-text-center`, `cl-mb-5`, `cl-ml-auto`,
  `cl-icon`) and is a hand-rolled Bootstrap-4-look-alike — **not** a framework skin. Its
  first ~55 lines are a `:where(html) … all: revert` reset so the snippet renders
  identically inside a Bootstrap host page, followed by a `*{box-sizing:border-box}`
  normalize, a system `Roboto`-inclusive `body` stack that is **overridden later by a
  `Poppins` rule**, an `a{color:#1089ff}` page default, `h2{font-size:2rem}` and
  `button{border-radius:0}`.
- **HTML structure (live preview, 3,195 B — archive twin 2,992 B):** document order is
  exactly — (1) `section.ftco-section` › `div.cl-container` › `div.cl-row
  .cl-justify-content-center` › `div.cl-col-md-6.cl-text-center.cl-mb-5` ›
  `h2.heading-section` reading **`Website menu #01`**, (2)
  `nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.cl-navbar-dark.ftco_navbar.cl-bg-dark
  .ftco-navbar-light[itemprop="…"]` › `div.cl-container` with three children — the
  wordmark anchor, the toggler button, and the collapsible div, (3) `script`. In detail:
  - **`a.cl-navbar-brand[href="index.html"]`** — the wordmark (`Resto` in the source);
  - **`button.cl-navbar-toggler[type="button"][data-toggle="collapse"][data-target="#ftco-nav"]
    [aria-controls="ftco-nav"][aria-expanded="false"][aria-label="Toggle navigation"]`** ›
    `span.fa.fa-bars` › an inline SVG 3-bar glyph (Font Awesome `bars`, `viewBox="0 0 1536
    1792"`, wrapped in `<g transform="translate(0,1536) scale(1,-1)">`, `style="vertical-align:-0.1429em"`,
    `aria-hidden="true"`, `focusable="false"`) followed by the literal text **`Menu`**;
  - **`div#ftco-nav.cl-collapse.cl-navbar-collapse`** › `ul.cl-navbar-nav.cl-ml-auto`
    with **seven `li.cl-nav-item`** in source order: **Home** (`cl-active`), **Page**
    (`cl-dropdown` › `a.cl-nav-link.cl-dropdown-toggle[id="dropdown04"]
    [data-toggle="dropdown"][aria-haspopup="true"][aria-expanded="false"]` +
    `div.cl-dropdown-menu[aria-labelledby="dropdown04"]` holding **four**
    `a.cl-dropdown-item` reading `Page 1`…`Page 4`), then **About**, **Menu**, **Blog**,
    **Contact** as plain rows, and finally **`li.cl-nav-item.cta`** ›
    `a.cl-nav-link` reading **`Book a table`**.
  - **Every destination in the source is a dead `href="#"`**: the live page holds **11**
    `href="#"` (the `Page` toggle + its four items + the six plain rows) and exactly one
    real href — the wordmark's `index.html`. There is no second page to probe; the
    recreation must materialise **eleven** destinations as real content.
- **Page (the `section.ftco-section` band):** the `<section>` wraps **both** the heading
  and the nav — `padding:112px 0` (`7em`), transparent background over the page's
  `#fafafa`. Inside it a classic Bootstrap container (`width:100%; padding:0 15px;
  margin:0 auto` + max-width tiers), a `cl-row` (`display:flex; flex-wrap:wrap;
  margin:0 -15px`) with `cl-justify-content-center`, and a centred `cl-col-md-6` (`width:
  100%; padding:0 15px`, `flex:0 0 50%; max-width:50%` at ≥768 px, `margin-bottom:48px`
  from `cl-mb-5`). The `h2` is **28 px / `Poppins` 400 / `line-height:1.5` (42 px) /
  `#000` / centred** with the reset's `margin-bottom:0.5rem` (8 px). Measured at 1280 px:
  section `0,0 1280×389.8` at `y = 0`; `h2` rect `x = 370, y = 112, 540×42`; nav at
  `y = 210`. So the vertical rhythm is **112 px above the heading → 42 px heading → 8 px
  `h2` margin → 48 px column margin → the bar**, and **112 px of `#fafafa` below the bar**
  closes the page: `html` height is **371.33 px** at 1280 px and the document does not
  scroll (`scrollHeight` = the 800 px viewport). The heading copy **`Website menu #01` is a
  source artefact** (the `-11` page carries a `#01` heading and its `<title>` is
  "Website menu 01" and the archive `README.md` says `# Website menu 01`) — note it and
  never reproduce it.
- **The bar (`nav.ftco_navbar`):** `position:relative; z-index:3; padding:0` with
  **`background:#1089ff !important`** (`.ftco-navbar-light`), **full-bleed** (no container
  wrapper — the bar spans the whole viewport, measured **1280 × 67.8 px at `y = 210`**) and
  **not sticky**: the sheet contains **zero** occurrences of `sticky` (checked), the nav is
  `position:relative`, and nothing in the page floats over it. The `cl-bg-dark`
  `background-color:#343a40 !important` in the markup **never renders** — the later
  `.ftco-navbar-light{background:#1089ff !important}` at equal specificity wins by source
  order. The bar is flush to both viewport edges and has **no border, no radius, no
  shadow**.
- **The bar's container:** `div.cl-container` inside the nav is **`display:flex; flex-wrap:
  nowrap; justify-content:space-between; align-items:center`** at ≥992 px with the classic
  max-width tiers — measured **1140 px** (x = 70) at 1280, **1140 px** (x = 30) at 1200,
  **960 px** (x = 119.5) at 1199, **960 px** (x = 16, the cap not binding) at 992. Below
  992 px the tier still applies but its 15 px gutters are removed
  (`.cl-navbar-expand-lg > .cl-container{padding-right:0;padding-left:0}` at
  ≤991.98 px), so the container is just the nav's content box: **720 px at `x = 135.5`**
  at 991, **720 px at `x = 24`** at 768, **345 px at `x = 15`** at 375.
- **Wordmark:** `a.cl-navbar-brand` — **20 px (`1.25rem`)**, `color:#fff`,
  `text-transform:uppercase`, weight **400** (`line-height:inherit` → body's `1.8` →
  **36 px**), `padding:5px 0` (`.3125rem`), `margin-right:16px`, `display:inline-block`,
  `white-space:nowrap`; measured **68.55 × 46 px at `x = 85, y = 220.89`** at 1280 px
  (i.e. vertically centred in the 67.8 px bar: 220.89 + 46/2 = 243.89 against the bar's
  centre 210 + 33.9 = 243.9) and `x = 15, y = 220` at 375 px. It is the only link in the
  chrome with a real destination (`index.html`), and it **never changes colour on hover**
  (`.ftco-navbar-light .cl-navbar-brand:hover{color:#fff}` = the resting colour).
- **The nav list and its right alignment:** one `ul.cl-navbar-nav.cl-ml-auto` holding all
  seven rows. At ≥992 px the sheet gives `.cl-navbar-nav{display:flex; flex-direction:row;
  padding-left:0; margin-bottom:0; list-style:none}` and the collapse wrapper
  `.cl-navbar-collapse{flex-grow:1; flex-basis:auto; display:flex !important}`, so the
  wrapper **grows to fill the space between the wordmark and the container's right
  content edge** and the list's own **`cl-ml-auto` (`margin-left:auto !important`) pushes
  the list to that edge** — live code here, unlike the `-10` sibling where an identical
  auto margin was inert. Measured at 1280 px: wrapper free space → list
  `margin-left = 362.797 px`, list box **662.66 px** at `x = 532.34`, i.e. it ends exactly
  at the container's inner right edge (`70 + 1140 − 15 = 1195`). The list is **hidden
  below 992 px** (`cl-collapse:not(.cl-show){display:none}`) and visible above;
  its rows are `li.cl-nav-item` flex items that **stretch to the bar's full height**.
- **Nav rows:** `.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link` —
  **`font-size:11px`**, `font-weight:500`, `text-transform:uppercase`,
  **`letter-spacing:2px`**, `color:#fff`, `opacity:1 !important`,
  **`padding:24px 20px`** (`1.5rem` vertical, 20 px horizontal) with the body's
  `line-height:1.8` → `19.8 px`, i.e. **67.8 px tall rows that exactly define the bar's
  height**. Measured rects at 1280 px: `Home 532.34–613.34` (`cl-active`), `Page
  613.34–699.91` (caret included), `About 699.91–787.81`, `Menu 787.81–868.2`,
  `Blog 868.2–946.78`, `Contact 946.78–1053.14`, `Book a table 1053.14–1195`, every one
  `67.8 px` tall. **All seven labels are the same `#fff`** — the `cl-active` row is *not*
  visually distinguished on desktop (`.cl-navbar-dark .cl-navbar-nav .cl-link`'s 50 %-white
  resting colour and its `.75` hover are both beaten by the higher-specificity
  `.ftco-navbar-light` rule, and the `.ftco-navbar-light … .cl-nav-item.cl-active > a
  {color:#fff}` rule resolves to the same white as the base rule), and the sheet's only
  hover affordance is `:hover{color:#fff}` → **no visible hover state at all**. Restoring
  a real hover/`focus-visible` affordance and a visible current-page signal is a
  **documented delta**.
- **The dropdown caret:** `a.cl-dropdown-toggle::after` — `display:inline-block;
  margin-left:0.255em` (**2.805 px** at 11 px); `vertical-align:0.255em`; a CSS triangle
  built from `border-top:0.3em solid` (**3 px**, `currentColor` → white) with transparent
  left/right borders and no bottom border.
- **The dropdown panel:** `div.cl-dropdown-menu` — `position:absolute; top:100%; left:0;
  z-index:1000; min-width:10rem` (**160 px**), measured **160 × 134.38 px at `x = 613.34,
  y = 279.8`** at 1280 px (i.e. flush with the `Page` trigger's left edge and starting
  **2 px** below the bar's 277.8 px bottom edge, from `margin:0.125rem 0 0`), `padding:8px
  0`, `background:#fff`, `border:none` (the base Bootstrap `1px solid rgba(0,0,0,.15)` is
  removed by the `.ftco-navbar-light` rule), **`border-radius:4px`**, **`box-shadow:0 10px
  34px -20px rgba(0,0,0,0.41)`**, `font-size:16px`. Its four rows
  `a.cl-dropdown-item` are `display:block; width:100%; padding:4px 24px` (`.25rem 1.5rem`),
  **12 px**, **`#000`**, each **29.59 px** tall; **hover/`:focus`** → `background:#1089ff;
  color:#fff`. (The sheet's generic `.cl-dropdown-item.cl-active/:active{background:
  #007bff;color:#fff}` and `.disabled{color:#6c757d}` rules exist but never match this
  markup.)
- **Opening and closing the dropdown (live behaviour, verified in the browser):**
  `snippet.js` binds **both** a hover path — `mouseenter`/`mouseleave` on every
  `nav .cl-dropdown`, toggling `.cl-show` on the `li` **and** its `.cl-dropdown-menu` and
  `aria-expanded` on the trigger — **and** a click path (`data-toggle="dropdown"`), which
  toggles the same two classes, sets `aria-expanded`, closes any other open dropdown
  first, and — if the panel's right edge would overflow the viewport — sets
  `left:auto; right:0` inline. Keyboard: **`ArrowDown` on the trigger** opens it and moves
  focus to the first item; **`ArrowUp`/`ArrowDown` inside the panel** step focus through
  the items; **`Escape`** closes and returns focus to the trigger; a click anywhere
  outside closes; **clicking an item closes** the panel (and does not navigate — every
  item is `href="#"`). Measured: hover opened `li.cl-show` → menu `display:block` at
  `x = 613.34, y = 279.8`; `mouseleave` closed it (`display:none`); click opened it with
  `aria-expanded="true"`; `Escape` closed it and left `document.activeElement` on the
  trigger anchor.
- **The CTA row:** `li.cl-nav-item.cta > a` — `background:#ff7315; color:#fff;
  border-radius:0` (**square on desktop**), same 11 px / 500 / uppercase / 2 px-tracking
  type as the other labels, `padding:24px 20px` → measured **141.86 × 67.8 px at
  `x = 1053.14`**, i.e. a **solid orange block filling the full bar height**, flush with
  the container's inner right edge and level with the dropdown rows. It has **no hover
  rule** (nothing changes on hover).
- **Below 992 px:** the bar turns **`#000 !important`**, becomes `position:relative;
  padding:10px 15px` (measured **66 px** tall at 991/768/375 — 10 + a 46 px row + 10), the
  nav list is **hidden**, and the toggler takes over:
  - **Toggler:** `button.cl-navbar-toggler` — `border:none; cursor:pointer;
    padding:4px 0 4px 12px; font-size:16px; text-transform:uppercase;
    letter-spacing:0.1em` (**1.6 px**), `color:rgba(255,255,255,.5) !important`, and
    `:focus{outline:none !important}`. Its icon is `span.fa.fa-bars › svg.cl-icon` at
    `.cl-icon{height:1em; width:auto; fill:currentColor; display:inline-block}` = **16 px**
    with the inline `vertical-align:-0.1429em` (**−2.29 px**), followed by the text
    `Menu`. Measured box **85.27 × 24.72 px** at `x = 274.73, y = 230.64` at 375 px
    (respectively `x = 658.73` at 768, `x = 770.23` at 991) — pinned to the container's
    right edge and vertically centred in the 46 px row.
  - **The collapse:** `div#ftco-nav` is `display:none` while closed
    (`cl-collapse:not(.cl-show)`) and animated open by the script's Bootstrap-style
    collapse (`cl-collapsing` sets `height:0 → scrollHeight` with
    `transition:height 0.35s ease`, then `.cl-show`). Measured at 375 px with it open: the
    bar grows from 66 px to **416 px**, the collapse box is **345 × 350 px at `x = 15,
    y = 266`**, the list is `flex-direction:column` with `padding-bottom:10px`, and each of
    the **seven rows is 48.58 px** tall (`padding:14.4px 0` = `.9rem` at 11 px type).
  - **Resting colours in the panel:** every row **except the current one** is
    `rgba(255,255,255,0.7)`, the `cl-active` row (`Home`) is **`#fff`** (the
    `.ftco-navbar-light … .cl-nav-item.cl-active > a{color:#fff}` rule outranks the media
    block), and the **CTA row keeps its orange**: `#fff` on **`#ff7315`** with
    **`border-radius:5px`** and `padding:14.4px 15px`, i.e. a rounded orange block spanning
    the panel's full width at the bottom of the stack.
  - **The dropdown inside the panel:** opened by click (the hover listeners fire too), the
    menu becomes **`position:static; float:none`** — full width, **`background:#000`**,
    **`border-left:1px solid rgba(255,255,255,0.3)`**, **`border-radius:0`**,
    **`box-shadow:none`**, `margin-top:2px` — and its four items turn
    **`rgba(255,255,255,0.8)`** at 12 px, each 29.59 px tall, indented by their 24 px
    left padding under a 1 px hairline. `aria-expanded` is toggled on the trigger by both
    paths.
- **Type:** `body{font-family:"Poppins", Arial, sans-serif; font-size:16px;
  line-height:1.8; font-weight:normal; background:#fafafa; color:gray}` (measured
  `rgb(128,128,128)`), with the earlier normalize block's
  `-apple-system, …, Roboto, …` stack **dead** (overridden by the later `Poppins` rule).
  `a{transition:.3s all ease; color:#1089ff}`, `a:hover, a:focus{text-decoration:none
  !important; outline:none !important}`. `h2` is `1.5` line-height, weight **400**,
  `Poppins`, `#000` with `.heading-section{font-size:28px; color:#000}` applied over the
  reset's `2rem`. **The self-hosted webfonts are never rendered**: the sheet declares
  `@font-face` for **Roboto 400** and **Roboto 700** only (latin + latin-ext), no element
  ever resolves to Roboto, and the archive's `roboto-100*`/`roboto-300*` files (four
  files, 123,928 B) are not even declared — **the entire 247,856 B font payload of the
  archive is dead weight**. There is no icon font: the only graphics are the two inline
  SVGs mentioned above.
- **Screenshot read-through (1200×972, AVIF→PNG; live render at 1280×800 cross-checked):**
  a browser-chrome mock of the live preview at rest, address bar reading
  `preview.colorlib.com`. Under it, on a flat pale-grey page, a centred black
  "Website menu #01" at ~56 px, then a **full-bleed, saturated blue bar ~68 px tall with
  hard top and bottom edges and no shadow**: at its left the uppercase white wordmark
  `RESTO` (~20 px, tracked out), and at its right a run of six tracked-out uppercase white
  labels — `HOME`, `PAGE` with a small white caret, `ABOUT`, `MENU`, `BLOG`, `CONTACT` —
  ending in a **flat orange rectangle reading `BOOK A TABLE`** that fills the bar's height
  and stops at the container's inner edge (it does **not** reach the viewport's right
  edge, so the blue band appears to continue past it). Below the bar, pale grey again:
  nothing else on the page. That frame — one solid colour band, a left wordmark, six white
  labels + a caret + one solid orange block — is the design being replicated, and the
  screenshot is the source of the `#1089ff` / `#ff7315` pair the stylesheet confirms.
- **Breakpoint truth table (all measured on the live preview):**

  | Width | Bar bg | Bar height | Container | Wordmark | Nav list | Toggler | Collapse |
  | --- | --- | --- | --- | --- | --- | --- | --- |
  | 375 px | **`#000`** | **66 px** | 345 px @ `x = 15` | `x = 15, y = 220` | `display:none` closed; rows **48.58 px** open | visible, **85.27 × 24.72** @ `x = 274.73, y = 230.64` | closed `none` → open **345 × 350** @ `y = 266` |
  | 768 px | `#000` | 66 px | 720 px @ `x = 24` | `x = 24` | `none` | visible @ `x = 658.73` | open = 720 wide |
  | 991 px | `#000` | 66 px | **720 px** @ `x = 135.5` | `x = 135.5` | `none` | visible @ `x = 770.23` | open = 720 wide |
  | 992 px | **`#1089ff`** | **67.8 px** | **960 px** @ `x = 16` (cap not binding) | `x = 31, y = 220.89` | **`flex`** from `x = 298.34`, ends 920 | hidden | `display:flex` |
  | 1199 px | `#1089ff` | 67.8 px | **960 px** @ `x = 119.5` | `x = 134.5` | rows `401.84 … 1064.5` | hidden | visible |
  | 1200 px | `#1089ff` | 67.8 px | **1140 px** @ `x = 30` | `x = 45` | rows `492.34 … 1155` | hidden | visible |
  | 1280 px | `#1089ff` | 67.8 px | **1140 px** @ `x = 70` | **68.55 × 46** @ `x = 85` | ul **662.66** @ `x = 532.34` (auto margin **362.797**), rows `532.34 … 1195` | hidden | visible |

- **Reference artifacts:** `/tmp/wm11/prev.html` (live preview HTML, 3,195 B),
  `/tmp/wm11/style.css` (17,737 B, sha256 `dd90f213…`) and `/tmp/wm11/snippet.js`
  (5,798 B, sha256 `7bde7f8e…`) — both **byte-identical** to
  `/tmp/wm11/z/website-menu-11/css/style.css` and `js/snippet.js` inside
  `/tmp/wm11/wm11.zip` (258,214 B, sha256 `cbe29875…`); `/tmp/wm11/z/website-menu-11/
  index.html` (2,992 B archive twin — the live-vs-archive `diff` is head-only),
  `README.md` (1,264 B) and the eight (unused) Roboto woff2 files; `/tmp/wm11/page.html`
  (the 108,938 B ColorLib template page — source of the description, posted/author/
  released/license and download-size facts); `/tmp/wm11/cat.js` (the 633,990 B preview
  catalog index that maps the slug to `theme/bootstrap/`); `/tmp/wm11/shot.png` (the
  1200×972 screenshot, 56,753 B, converted from the 7,421 B AVIF original — the source of
  the visual read-through); `/tmp/wm11/interactions.json` (the dropdown/collapse
  behaviour dump); `/tmp/wm11/shots/desktop1280.png`, `phone375.png` and
  `phone375-menu-open.png` (live captures of the resting desktop bar, the closed mobile
  bar and the open black panel with the orange CTA and the indented dropdown).

## Design tokens

Extracted from the source stylesheet `css/style.css` (17,737 B) of `website-menu-11`
(live preview `https://preview.colorlib.com/theme/bootstrap/website-menu-11/` → HTTP 200;
byte-identical archive copy) and cross-checked against the 1200×972 screenshot and the
live render at 1280×800, 1200, 1199, 992, 991, 768 and 375 px.

| Token | Value | Used by |
| --- | --- | --- |
| brand blue | **`#1089ff`** | the **bar** (desktop, `!important`), dropdown-item **hover** background, and the page's default `a` colour |
| CTA orange | **`#ff7315`** | the `li.cta` row's background at every width (square on desktop, `5px` radius inside the mobile panel) |
| bar black | **`#000`** | the bar's background **below 992 px** (`!important`) and the mobile dropdown panel |
| label white | **`#fff`** | the wordmark, all seven desktop labels, the `cl-active` row, the caret triangle, the CTA label |
| panel label | `rgba(255,255,255,0.7)` | mobile rows other than the current one |
| panel item | `rgba(255,255,255,0.8)` | the mobile dropdown items |
| toggler | `rgba(255,255,255,0.5)` | the mobile `☰ Menu` button (label **and** the `fill:currentColor` icon) |
| hairline | `rgba(255,255,255,0.3)` | the mobile dropdown panel's `border-left` |
| dropdown panel | `#fff` | the desktop dropdown surface |
| dropdown item | **`#000`** | desktop dropdown item resting colour (hover → `#fff` on `#1089ff`) |
| page | `#fafafa` | `body` background |
| ink | `gray` (**`#808080`**) | `body` text colour |
| heading | **`#000`** | `h2.heading-section` |
| surfaces | `#fff` | the wordmark/CTA labels, the desktop dropdown |
| shadows | **`0 10px 34px -20px rgba(0,0,0,0.41)`** | the desktop dropdown panel — **the bar itself has none** |
| radii | **`0`** on the bar, the CTA block (desktop), the dropdown trigger and the collapse — the sheet's only rounding is the **`4px`** desktop dropdown panel and the **`5px`** mobile CTA; `button{border-radius:0}` and 0 on the toggler | do not add rounding anywhere else |
| type | `"Poppins", Arial, sans-serif` — body **16 px / `line-height:1.8` / 400**; the source's self-hosted Roboto 400/700 faces (and its four undeclared 100/300 files) **never render** | whole page |
| type scale | bar labels **11 px / 500 / uppercase / `letter-spacing:2px` / `line-height:19.8px` / `padding:24px 20px`** → **67.8 px** rows; wordmark **20 px / 400 / uppercase / `line-height:36px` / `padding:5px 0`** → 46 px; dropdown items **12 px**, rows 29.59 px (`padding:4px 24px`); heading **28 px / 400 / `line-height:42px`**; toggler **16 px / uppercase / `letter-spacing:1.6px`** with a **16 px** icon; mobile rows **11 px** at `padding:14.4px 0` → **48.58 px** | chrome |
| spacing rhythm | section `padding:112px 0` (`7em`); container `padding:0 15px` + tiers 540/720/960/1140 (gutters zeroed in the bar below 992 px); row `margin:0 -15px`; heading column `margin-bottom:48px` (`cl-mb-5`); `h2` `margin-bottom:8px`; bar `padding:0` desktop / `10px 15px` mobile; dropdown `min-width:160px`, `padding:8px 0`, `margin-top:2px`; mobile list `padding-bottom:10px` | page + chrome |
| grid | classic Bootstrap container (`margin:0 auto`, 15 px gutters, responsive max-widths); heading row `display:flex; flex-wrap:wrap; justify-content:center`; `cl-col-md-6` = 100 % below 768 px, `flex:0 0 50%` at ≥768 px; the bar's row is `display:flex; flex-wrap:nowrap; justify-content:space-between; align-items:center` and the list's right alignment comes from the **`margin-left:auto` on the `ul`** inside the `flex-grow:1` collapse wrapper | page + bar |
| motion | `a{transition:.3s all ease}`; the collapse animates `height` over **`0.35s ease`** (`cl-collapsing`); the dropdown has **no transition** (class toggle only); `@media (prefers-reduced-motion: reduce)` disables the collapse transition in the source | all transitions |

**Google Fonts map:** one `<link>` for **Poppins** 400;500;600;700
(`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`) —
the sheet asks for 400 (body/heading/wordmark) and **500** (bar labels) explicitly; the
source's self-hosted Roboto woff2 files, including the four 100/300 faces it never even
declares, are never copied. Icons from `lucide-react`: `Menu` (the toggler's 3-bar glyph)
and `ChevronDown` (the dropdown caret, replacing the CSS `::after` triangle).

## Requirements

### Feature: The heading band above the bar

#### Scenario: A centred heading sits in a padded band above the bar

- **Given** the page loads at any width
- **When** the band above the bar is measured
- **Then** it is a section with **`padding:112px 0`** (`7em`) and a transparent
  background over the page's `#fafafa`, holding a classic Bootstrap container
  (`width:100%; padding:0 15px; margin:0 auto` + the max-width tiers) with a
  `justify-content:center` flex row and a heading column of `flex:0 0 50%;
  max-width:50%` at ≥768 px and `100%` below it, carrying **`margin-bottom:48px`**
- **And** the heading itself is **28 px / 400 / `line-height:1.5` (42 px) / `#000` /
  centred**, with an `8px` bottom margin, measured `540 × 42` at `x = 370, y = 112` at
  1280 px — so the bar's top edge lands at `y = 210`
- **And** the heading's text is **own copy** (its own wording and its own label), never the
  source's `Website menu #01` string; the section carries a proper landmark
  (`<section aria-labelledby=…>` semantics)
- **And** the band's `112px` bottom padding is what closes the page below the bar — the
  recreation replaces that blank filler with real content (see the last feature) while
  keeping the `112px` above the heading

### Feature: The full-bleed colour bar

#### Scenario: The bar is a solid, full-bleed, non-sticky brand-colour band

- **Given** the page loads at ≥992 px
- **When** the bar is measured
- **Then** it is **full-bleed** (`width:100%`, no container wrapper, flush to both
  viewport edges), **`background:#1089ff`**, `position:relative`, `z-index:3`,
  `padding:0`, **no border, no radius, no shadow**, and its height is exactly the height of
  its tallest row (**67.8 px** = 24 + 19.8 + 24)
- **And** it is **not sticky and not fixed** — it is in normal flow, scrolls with the page
  and never overlays content
- **And** the markup's Bootstrap-4 leftovers that never render are not reproduced: the
  `#343a40` dark surface, the 50 %-white dark-nav label colours and their `.75` hover, the
  `#007bff`/`#0056b3` page-link defaults and the `#6c757d` disabled colour are all beaten
  by later equal- or higher-specificity rules in the source and must not reappear

#### Scenario: The bar's container follows the classic max-width tiers

- **Given** the bar renders at each measured width
- **When** the container is measured
- **Then** it is `width:100%; padding:0 15px; margin:0 auto` with max-widths **540 / 720 /
  960 / 1140 px** at 576/768/992/1200 px — measured **1140 px / `x = 70`** at 1280,
  **1140 px / `x = 30`** at 1200, **960 px / `x = 119.5`** at 1199, **960 px / `x = 16`**
  at 992 (cap not binding), and below 992 px its 15 px gutters are **removed**, leaving the
  nav's content box: **720 px / `x = 135.5`** at 991, **720 px / `x = 24`** at 768,
  **345 px / `x = 15`** at 375
- **And** the row is `display:flex; flex-wrap:nowrap; justify-content:space-between;
  align-items:center` with the wordmark first, the toggler second and the collapsible list
  last

### Feature: The wordmark

#### Scenario: An uppercase white wordmark is pinned to the bar's left edge

- **Given** the bar renders
- **When** the wordmark is measured
- **Then** it is own-brand text (never the source's `Resto` string) at **20 px**, weight
  **400**, **`text-transform:uppercase`**, **`#fff`**, `line-height:36px`, `padding:5px 0`,
  `margin-right:16px`, `white-space:nowrap` — measured **68.55 × 46 px at `x = 85,
  y = 220.89`** at 1280 px (vertically centred in the 67.8 px bar) and `x = 15, y = 220` at
  375 px
- **And** it is a link to the top of the page with **no colour change on hover** (the
  source's `:hover{color:#fff}` is identical to its resting state)
- **And** it is a `<a>`/link with an accessible name and a visible `focus-visible` ring (a
  documented delta — the source removes all outlines with
  `a:hover, a:focus{outline:none !important}`)

### Feature: The single right-aligned nav list and its CTA block

#### Scenario: Seven rows in one list, right-aligned by an auto margin

- **Given** the bar renders at ≥992 px
- **When** the list is measured
- **Then** all seven rows live in **one** list whose wrapper (`.cl-navbar-collapse`
  equivalent) is `flex-grow:1; flex-basis:auto` and whose own **`margin-left:auto`** pushes
  it to the container's inner right edge — measured list width **662.66 px** ending at
  **`x = 1195`** (`70 + 1140 − 15`) at 1280 px, with **362.797 px** of absorbed free space
  (this auto margin is **live code** here, unlike the `-10` sibling where an identical
  class is inert)
- **And** the seven rows are, in source order, a **current/home** row (current-page
  semantics, `aria-current="page"`), a **dropdown** row with a caret, four plain rows, and
  the **CTA** row last — measured `x = 532.34, 613.34, 699.91, 787.81, 868.2, 946.78,
  1053.14`
- **And** the list is `display:none` below 992 px and in the row layout at ≥992 px, while
  the toggler is exactly the opposite
- **And** the seven labels are the source's **kinds**, never its strings (`Home`, `Page`,
  `About`, `Menu`, `Blog`, `Contact`, `Book a table` are all forbidden verbatim) and the
  four dropdown items are not `Page 1`…`Page 4`

#### Scenario: Row type and geometry match the source

- **Given** any desktop row
- **When** its computed style is read
- **Then** it is **11 px / weight 500 / uppercase / `letter-spacing:2px` / `#fff` /
  `opacity:1`** with **`padding:24px 20px`** and `line-height:19.8px`, giving **67.8 px**
  rows that set the bar's height, and it stretches to the bar's full height
- **And** the **current** row is visually distinguished from the other six (a delta: the
  source renders all seven in the same `#fff`)
- **And** every row has a **real hover and `focus-visible` affordance** (a delta: the
  source's only hover rule resolves to the same `#fff` as its resting colour, so it has
  none) and the removed outline is replaced by a visible focus ring

#### Scenario: The caret marks the dropdown row only

- **Given** the dropdown row renders
- **When** its caret is inspected
- **Then** it is a small downward triangle **3 px** (`.3em`) wide in `currentColor`
  (**white**), offset `0.255em` (`2.805 px`) from the label, vertically aligned
  `0.255em` — implemented with `lucide-react` `ChevronDown` (or an equivalent inline
  element) rather than a copied CSS `border` triangle
- **And** no other row carries a caret

#### Scenario: The CTA is a solid block filling the bar's height

- **Given** the bar renders at ≥992 px
- **When** the CTA row is measured
- **Then** it is a **solid `#ff7315` block with `border-radius:0`**, `#fff` text, the same
  11 px / 500 / uppercase / 2 px-tracking type as its neighbours, and **`padding:24px 20px`
  giving 141.86 × 67.8 px** at 1280 px — flush with the container's inner right edge
  (`x = 1053.14 → 1195`), i.e. the orange panel stops where the container stops while the
  blue band continues to the viewport edge
- **And** it gains a hover/`focus-visible` affordance (a delta — the source has no hover
  rule for it at all)

### Feature: The dropdown

#### Scenario: It opens on hover and on click

- **Given** the page renders at ≥992 px
- **When** the pointer enters the dropdown row, or its trigger is activated
- **Then** the panel opens with **both** paths: `mouseenter` shows it and `mouseleave`
  hides it, and a click on the trigger toggles it, in each case setting an
  `aria-expanded="true"` state on the trigger and a shared open state on the row
- **And** activating the trigger closes any other open dropdown first, and the source's
  overflow guard (switch to right-alignment when the panel would leave the viewport) is
  reproduced or replaced by an equivalent viewport-aware placement
- **And** the trigger's `aria-expanded` is always in sync with the panel's visibility and
  the closed state is `aria-expanded="false"`

#### Scenario: The panel's geometry and tokens match the source

- **Given** the dropdown is open at ≥992 px
- **When** the panel is measured
- **Then** it is **`position:absolute; top:100%; left:0`** relative to its row, with
  **`min-width:160px`**, `padding:8px 0`, `margin-top:2px`, **`background:#fff`**,
  **`border-radius:4px`**, **`box-shadow:0 10px 34px -20px rgba(0,0,0,0.41)`**, **no
  border**, `z-index` above the page content — measured **160 × 134.38 px at
  `x = 613.34, y = 279.8`** at 1280 px, i.e. left-aligned with its trigger and starting
  2 px below the bar's bottom edge
- **And** its rows are `display:block`, **12 px**, **`#000`**, `padding:4px 24px`
  (**29.59 px** tall), and **hover/`:focus` → `background:#1089ff; color:#fff`**
- **And** the source's unused item states (`:active`/`.cl-active` `#007bff`, `.disabled`
  `#6c757d`) are not reproduced

#### Scenario: The panel is fully keyboard operable

- **Given** the page renders at ≥992 px
- **When** a keyboard user interacts with the dropdown
- **Then** **`ArrowDown`** on the trigger opens the panel and moves focus to the first
  item; **`ArrowUp`/`ArrowDown`** inside the panel step focus through its items;
  **`Escape`** closes it and returns focus to the trigger; a click or focus outside closes
  it; activating an item closes it
- **And** the panel's rows are a proper menu/list structure (`aria-haspopup` on the
  trigger, `aria-expanded` kept in sync, no focus trap) and every item is a real
  destination (the source's eleven `href="#"` are not reproduced)

### Feature: The mobile bar and its collapse

#### Scenario: Below 992 px the bar turns black and the list collapses

- **Given** the page loads at <992 px
- **When** the bar is measured
- **Then** its background is **`#000`**, it is `position:relative` with
  **`padding:10px 15px`**, and its height is **66 px** (10 + a 46 px row + 10), measured at
  991/768/375 px
- **And** the nav list is **hidden** (`display:none`, not merely off-screen) and the bar
  shows only the wordmark and the toggler
- **And** the source's no-JS `cl-collapse` state class is not reproduced as a
  `display:none`-by-class hack: the collapsed state is a real component state

#### Scenario: The toggler opens the panel

- **Given** the page renders at <992 px
- **When** the toggler is activated
- **Then** it is a real `<button>` with an accessible name, `aria-expanded` and
  `aria-controls`, showing a **16 px** `lucide-react` `Menu` glyph followed by an
  uppercase **16 px** label with `letter-spacing:1.6px` in
  **`rgba(255,255,255,0.5)`** (icon and label share the colour via `currentColor`) and
  `padding:4px 0 4px 12px` — measured **85.27 × 24.72 px** pinned to the container's right
  edge (`x = 274.73` at 375 px, `658.73` at 768, `770.23` at 991) and vertically centred
- **And** the source's `:focus{outline:none}` is **not** reproduced — the toggler keeps a
  visible `focus-visible` ring (a documented delta)
- **And** activating it expands the panel with the **`0.35s ease` height** animation
  (removed under `prefers-reduced-motion: reduce`), growing the bar from 66 px to the
  panel's full height — measured **416 px** at 375 px, the panel being **345 × 350 px** at
  `x = 15, y = 266`

#### Scenario: The collapsed list matches the source's mobile tokens

- **Given** the panel is open at <992 px
- **When** its rows are measured
- **Then** the list is a single column spanning the container's width with
  `padding-bottom:10px`, and each of the **seven rows is 48.58 px** tall
  (`padding:14.4px 0` at 11 px / `line-height:19.8px`)
- **And** every row except the current one is **`rgba(255,255,255,0.7)`**, the current row
  is **`#fff`** (plus `aria-current` and a non-colour signal), and the **CTA row is
  `#fff` on `#ff7315` with `border-radius:5px`** and `padding:14.4px 15px`, i.e. a rounded
  orange block filling the panel's width at the bottom of the stack
- **And** the rows have real hover/`focus-visible` feedback (a delta), and no row is left
  with the source's missing outlines

#### Scenario: The dropdown becomes an inline sub-list inside the panel

- **Given** the panel is open at <992 px
- **When** the dropdown row is activated
- **Then** its panel becomes **`position:static`** (in flow, full width, no float,
  `margin-top:2px`) with **`background:#000`**,
  **`border-left:1px solid rgba(255,255,255,0.3)`**, **`border-radius:0`** and
  **`box-shadow:none`**
- **And** its four items are **`rgba(255,255,255,0.8)`** at the same 12 px / 29.59 px row
  metrics, indented behind the hairline, and each is a real destination
- **And** the trigger's `aria-expanded` still tracks the sub-list's visibility

### Feature: Materialised content, footer and quality gates

#### Scenario: The eleven source destinations become real content

- **Given** the source's nav links are **all dead** (11 × `href="#"`) and its only real
  link is the wordmark's `index.html`
- **When** the recreation is built
- **Then** every one of the seven rows and the four dropdown items resolves to a real
  in-page destination with a matching `id`/route, `scroll-margin-top` ≥ the bar's height
  (68 px, 66 px below 992 px) on every target, and **zero** `href="#"` links remain
- **And** imagery, where used, comes from
  `https://picsum.photos/seed/ensign-<n>/<w>/<h>` (the source ships **no images at all**)
- **And** the page is taller than the viewport so the bar genuinely scrolls away (the
  source's 371 px page does not scroll)

#### Scenario: Footer, provenance and gates

- **Given** the app is complete
- **When** it is reviewed
- **Then** its footer links `https://www.componentdock.com/` exactly once, branded
  "Component Dock", with a computed current year (a documented delta — the source has no
  footer)
- **And** `apps/ensign` contains **zero** `colorlib` / "Website Menu 11" /
  `website-menu-11` references (comments included) and reuses none of the source's
  strings, its `cl-` utility namespace, its inline SVG paths or its CSS
- **And** `scripts/verify-app.sh ensign` is green (typecheck + lint + knip + fallow +
  vitest 100 % + build) and `npm run spec:validate` is green

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/ensign/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/ensign/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Bar: **full-bleed, `#1089ff`, `padding:0`**, `position:relative`, `z-index:3`, no
      border/radius/shadow, **67.8 px** tall at ≥992 px (24 + 19.8 + 24) and **black
      `#000` with `padding:10px 15px`, 66 px** below 992 px; **never sticky/fixed**
- [ ] Container: `width:100%; margin:0 auto; padding:0 15px` with max-widths
      **540 / 720 / 960 / 1140 px** at 576/768/992/1200 px (measured 1140 at 1280 and
      1200, 960 at 1199 and 992, 720 at 991 and 768, 345 at 375); gutters **zeroed in the
      bar below 992 px**; row `display:flex; flex-wrap:nowrap; justify-content:
      space-between; align-items:center` (row layout: 100 % / `flex-basis:100%` below
      992 px)
- [ ] Heading band: `padding:112px 0` (`7em`) over `#fafafa`, centred `50 %` column
      (`100 %` below 768 px) with `margin-bottom:48px`, heading **28 px / 400 /
      `line-height:1.5` / `#000`** with an 8 px bottom margin — own copy, never
      "Website menu #01"
- [ ] Wordmark: own brand text, **20 px / 400 / uppercase / `#fff` / `line-height:36px` /
      `padding:5px 0` / `margin-right:16px`** → 46 px box, vertically centred (measured
      `68.55 × 46` at `x = 85, y = 220.89`), a link to the top of the page, no hover colour
      change, visible focus ring
- [ ] List: **one** list, all seven rows, right-aligned by the list's own
      **`margin-left:auto`** inside a `flex-grow:1` wrapper (measured 662.66 px ending at
      `x = 1195`); hidden below 992 px and in the row layout at ≥992 px (the toggler is the
      exact opposite)
- [ ] Rows: **11 px / 500 / uppercase / `letter-spacing:2px` / `#fff` / `padding:24px
      20px` / `line-height:19.8px`** → **67.8 px**, stretching to the bar's full height;
      source order **current → dropdown → four plain → CTA**; the current row carries
      `aria-current="page"` **and** a visible non-colour treatment (delta); real
      hover + `focus-visible` on every row (delta)
- [ ] Caret: 3 px `currentColor` triangle, `0.255em` offset/alignment, on the **dropdown
      row only** (`lucide-react` `ChevronDown` or equivalent — no copied CSS triangle)
- [ ] CTA: solid **`#ff7315`**, `#fff` label, **`border-radius:0`**, `padding:24px 20px`,
      **141.86 × 67.8** flush with the container's inner right edge (`x = 1053.14 → 1195`),
      with a hover/`focus-visible` affordance (delta)
- [ ] Dropdown panel: **`absolute; top:100%; left:0; min-width:160px; padding:8px 0;
      margin-top:2px; background:#fff; border-radius:4px; border:none;
      box-shadow:0 10px 34px -20px rgba(0,0,0,.41)`** (measured 160 × 134.38 at
      `x = 613.34, y = 279.8`); items **12 px / `#000` / `padding:4px 24px` / 29.59 px**
      with **hover → `#1089ff` background + `#fff`**
- [ ] Dropdown behaviour: opens on **hover and on click**, closes on `mouseleave`, outside
      click, item activation and **`Escape`** (returning focus to the trigger);
      **`ArrowDown`** on the trigger focuses the first item; **`ArrowUp`/`ArrowDown`**
      step through items; `aria-expanded` always in sync; no viewport overflow (the
      source's `left:auto; right:0` guard reproduced or an equivalent)
- [ ] Mobile: toggler is a real `<button>` with `aria-expanded`/`aria-controls`, a **16 px
      `Menu` glyph** + uppercase **16 px** label in **`rgba(255,255,255,0.5)`**, padding
      `4px 0 4px 12px`, **85.27 × 24.72**, flush right and vertically centred; the panel
      animates open over **`0.35s ease`** to **345 × 350 at 375 px** (bar 66 → **416 px**),
      with seven **48.58 px** rows (`padding:14.4px 0`), `padding-bottom:10px`,
      **`rgba(255,255,255,0.7)`** rows, the current row **`#fff`**, and the CTA as a
      **`5px`-radius `#ff7315`** block spanning the panel; the mobile dropdown is
      **`position:static`**, **`#000`**, `border-left:1px rgba(255,255,255,.3)`, radius
      `0`, no shadow, items **`rgba(255,255,255,0.8)`** at 29.59 px rows
- [ ] Materialised content: **eleven** real destinations (seven rows + four dropdown
      items) with `scroll-margin-top` ≥ the bar height; **zero** `href="#"`; images (if
      any) from `https://picsum.photos/seed/ensign-<n>/<w>/<h>`; the page scrolls so the
      non-sticky bar leaves the viewport
- [ ] Footer links `https://www.componentdock.com/` exactly once ("Component Dock") with a
      computed current year
- [ ] Shape language: **`0` radius** on the bar, the CTA (desktop), the trigger and the
      panel; the only rounding is the **`4px`** desktop dropdown and the **`5px`** mobile
      CTA
- [ ] Dead source code dropped: the `#343a40` `cl-bg-dark` surface, the `cl-navbar-dark`
      50 %/75 %/25 % label colours and its `border-color`, the `#007bff`/`#0056b3`
      page-link defaults, the `#6c757d` disabled colour, the unused
      `.cl-dropdown-item.cl-active/:active/.disabled` states, the unreferenced
      `cl-dropdown-menu-right` class, the `@media print` block, the `:where(html) … all:
      revert` reset, the `site-navbar-target`-style dead hooks (there are none here — the
      markup's `ftco_navbar`/`ftco-navbar-light`/`cl-bg-dark` are the dead ones), the
      system `Roboto` body stack, the four undeclared 100/300 Roboto faces and the four
      declared-but-unrendered 400/700 faces, and the `cl-` namespace itself
- [ ] No copied assets: no `style.css`, no `snippet.js`, no Roboto woff2 files, no inline
      SVG paths from the preview, no `cl-` utility classes, no jQuery/Bootstrap
- [ ] Zero `colorlib` / "Website Menu 11" / `website-menu-11` provenance references
      anywhere in `apps/ensign` (comments included); none of the source's labels
      (`Home`, `Page`, `About`, `Menu`, `Blog`, `Contact`, `Book a table`, `Page 1`…`Page
      4`), its `Resto` wordmark or its `Website menu #01` heading reused
- [ ] `public/CNAME` = `ensign.free.componentdock.com` and
      `"homepage": "https://ensign.free.componentdock.com"` in `apps/ensign/package.json`;
      `package-lock.json` registers `@free-react-templates/ensign`
- [ ] Accessibility: real `button`s with `aria-expanded`/`aria-controls`; `aria-current`
      on the current row; `aria-haspopup` + `aria-expanded` on the dropdown trigger;
      visible `focus-visible` rings on every interactive element (the source removes
      outlines with `outline:none !important` — restoring them is a delta); `Escape`
      closes the dropdown; the collapsed panel is not focusable while hidden;
      `prefers-reduced-motion: reduce` disables the `0.35s` collapse transition and the
      `a` transition; no horizontal overflow at 320 px
- [ ] `scripts/verify-app.sh ensign` green (typecheck + lint + knip + fallow + vitest
      100 % + build); `npm run spec:validate` green
- [ ] PR description includes: source template (ColorLib Website Menu V11, posted
      2021-03-09 by Rok Krivec, released September 2026, CC BY 3.0), preview URL
      (`https://preview.colorlib.com/theme/bootstrap/website-menu-11/` → **HTTP 200**,
      3,195 B, `<title>Website menu 01</title>`; the slug-only `/theme/website-menu-11/`
      path 404s; archive `https://preview.colorlib.com/downloads/free/website-menu-11.zip`
      → HTTP 200, 258,214 B, sha256-identical `style.css`/`snippet.js`, and **no images**),
      the design tokens used (**`#1089ff`** bar/dropdown-item hover, **`#ff7315`** CTA,
      **`#000`** mobile bar and mobile dropdown, `#fff` labels/dropdown surface,
      `rgba(255,255,255,.7)` mobile rows, `rgba(255,255,255,.8)` mobile items,
      `rgba(255,255,255,.5)` toggler, `rgba(255,255,255,.3)` mobile hairline, `#fafafa`
      page, `gray` ink, `#000` heading, `0 10px 34px -20px rgba(0,0,0,.41)` panel shadow,
      **`0` radius except a `4px` dropdown and a `5px` mobile CTA**, Poppins 400/500,
      11 px tracked labels in 67.8 px rows, 20 px wordmark, 12 px dropdown items, 28 px
      heading, 112 px band padding, container tiers 540/720/960/1140, bar 67.8 px / 66 px),
      the structure (one **solid brand-colour** full-bleed bar with a left wordmark and a
      single seven-row list whose last row is a **full-height orange block**, a
      hover-and-click dropdown, a `992 px` breakpoint that flips the bar to black and
      collapses the list, over a centred heading band) and what
      differs (new name + own wordmark, own seven labels and four dropdown items, the
      eleven dead `href="#"` materialised as real content, `lucide-react` icons instead of
      the inline SVG/`.fa` glyph and the CSS caret triangle, Google Fonts Poppins instead
      of the eight self-hosted Roboto files, a real `button` toggler with
      `aria-expanded`/`aria-controls` and a visible focus ring instead of `outline:none`,
      restored hover/`focus-visible` affordances and a visible current-page signal where
      the source has `#fff` on `#fff`, focus management on `Escape`, the dead
      `cl-bg-dark`/`cl-navbar-dark`/Bootstrap-default rules dropped, reduced-motion
      handling, the 371 px filler page replaced by real content, and the added footer)
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Implementation notes (built, measured over CDP)

Refinements made while implementing, and the numbers measured on the built app
(`apps/ensign/dist`, served over plain HTTP and probed at 1440/1280/1200/1199/992/991/768/
576/375/320 px with transitions disabled so the end state reads honestly):

- **The band's own heading is kept to ONE line** — `One bar, seven ways in`. The design's
  rhythm depends on it: a longer first draft wrapped to two 42 px lines in the 540 px column
  and pushed the bar from `y = 210` down to `252`. Measured after the fix: heading
  `540 × 42` at `y = 112`, bar at `y = 210`, exactly the source's numbers, at every width
  from 375 px up (at 320 px the 275 px column wraps it to two lines, as the design's own
  heading would).
- **Every row id carries a per-presentation suffix** (`-wide` / `-folded`). The wide list is
  in the DOM at every width, so once the folded panel is mounted the same row would exist
  twice and two elements would share one `id`, which breaks `aria-controls` for assistive
  tech. Each presentation now owns its ids and each trigger controls its own panel; the app
  carries **zero** duplicate ids with both presentations mounted.
- **A row is the positioning context of its own panel** (`position: relative`). Without it
  the wide panel hangs from the bar's own left edge — measured `x = 77.5` instead of its
  trigger's `585.3` at 1280 px — while everything else about it was already exact.
- **The folded sub-list takes a flex line of its own** (`flex-wrap` on the row plus
  `basis-full` on the panel): as a flex sibling of its trigger it was squeezed to `165 px`
  instead of the panel's full width. It now measures the list's own `330 px` — the 15 px
  difference from the design's 345 px is the probe harness's scrollbar, not the layout.
- **The toggler's word is own copy** (`Browse`, on `line-height: 1`) — the design's own
  label is one of the seven strings this app may not reuse, and `leading-none` brings the
  control to `24 px` tall against the design's `24.72 px`.
- **The resting-pointer path drives the wide bar only.** Inside the folded panel a resting
  pointer is rare and a stray one fights the tap, so the folded disclosure is click- and
  keyboard-driven; both paths remain in the wide presentation, exactly as the design binds
  them.

Measured on the build — bar `1265 × 67.8` at `y = 210`, `rgb(16,137,255)`, `position:
relative`, `z-index: 3`, `padding: 0`, no border, no radius, no shadow; container `1140`;
wordmark `70.61 × 46`; list `693.33` ending flush with the container's inner right edge,
rows `67.8` tall at `11px / 500 / 2px` tracking, the open one carrying the inset underline;
the orange block `162.47 × 67.8`, `border-radius: 0`, ending on that same edge; wide panel
`160 × 134.38` at its trigger's own `x`, 2 px under the bar, `4px` radius, shadow
`0 10px 34px -20px rgba(0,0,0,.41)`, rows `29.59px` at `12px`; below 992 px the bar turns
`rgb(0,0,0)`, `66px` tall with the design's `10px 15px`; at 375 px the folded panel is
`330 × 350.05` at `x = 15, y = 266` (bar `210 → 416.05`), rows `48.58px`, the open block
`#ff7315` at a `5px` radius, and the opened sub-list sits in the flow `330` wide on black
behind the 1 px hairline, 2 px under its trigger; `grid-template-rows` transitions over
`0.35s ease` and collapses to `0.01ms` under `prefers-reduced-motion`; `scroll-margin-top:
80px` on all eleven destinations; no horizontal overflow at 320 px; **zero** `href="#"`.
