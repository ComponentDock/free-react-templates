# Template: Starboard (Website Menus)

## Purpose

Starboard is a **full-bleed image hero + always-available right sidebar menu**
page in the free-react-templates monorepo. It is an original React recreation of
the ColorLib free **"Website Menu V05"** snippet (source slug `website-menu-05` —
the Website Menus family's **sidebar vertical menu**: a **transparent header**
floating over a **100vh full-bleed background image** band, a white uppercase
**"BRAND"** wordmark at the left, a **white hamburger glyph (≈28 px)** at the
right that is the *only* nav control at every width — the source's own desktop
nav row ships permanently `display:none`, so the menu is always the **300 px white
off-canvas panel** sliding in from the right over a `rgba(0,0,0,.5)` veil, holding
five vertical rows — **Home** (active, `#007bff`), **About**, **Services**,
**Blog**, **Contact** — in `#212529` at `20 px / padding 10px 20px`, turning
`#007bff` on hover) — plus a **30 px close glyph** and a body that scrolls
(`calc(100vh - 52px)` with 150 px bottom padding).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's section
structure, order and design tokens 1:1 but copies no asset (no images, no font
files, no CSS files, no icon-font glyphs, no text verbatim) and never reuses the
source name.

- **Source:** https://colorlib.com/wp/template/website-menu-05/ — page title
  "Website Menu V05 - Free Sidebar Vertical Menu Template 2026 - Colorlib",
  HTTP 200, 108,818 B, verified 2026-10-11. ColorLib's own description: *"A modern,
  responsive and quick to integrate free sidebar vertical menu that keeps your
  website clean and minimal."* First published 2021-01-27; rewritten in the
  October 2026 build to plain HTML + CSS + vanilla JS (see Design reference).
  TEMPLATES.md `## Website Menus (20)` — this item is the family's **fifth** entry
  at **line 3077**; the slug `website-menu-05` appears exactly once in
  TEMPLATES.md and in no spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-05/` returns
  **HTTP 404** (`Not Found`, 9 B) — the *Website Menus* family does **not** live
  under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-05/`**
  (**HTTP 200**, `text/html`, **2,822 B**, title `🐴 Website Menu #5`, verified
  2026-10-11), discovered through the same catalog index the preview host loads
  (`https://preview.colorlib.com/assets/js/catalog-products-*.js`) whose entry for
  this slug is `"url":"…/theme/bootstrap/website-menu-05/"`. Its two assets —
  `css/style.css?v=22dd860e` (**15,648 B**, `text/css`) and
  `js/snippet.js?v=7d62fffa` (**2,525 B**) — are **byte-identical**
  (sha256 `ce2dfcce…` / `8704ac98…`) to the copies in the snippet's own
  downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-05.zip`
  (**HTTP 200**, `application/zip`, **705,301 B**), which ships
  `index.html`, `css/style.css`, `js/snippet.js`, `README.md`, `images/hero_1.jpg`
  and the **Open Sans** woff2 subsets (300/400/700, latin + latin-ext) plus
  `icomoon-subset.woff2`. The archive is the un-versioned readable twin of the
  live preview; both were read for this spec and the live render was
  cross-checked in a browser (see Design reference).
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-05.jpg
  (HTTP 200, served as **AVIF**, 1200×972, 44,041 B, converted to PNG and opened
  and inspected visually 2026-10-11). No screenshot-only fallback was needed — the
  live preview is the primary reference and the archive its readable twin.
- **New name:** `starboard` (apps/starboard, `@free-react-templates/starboard`) —
  the source's own selling point is its right-hand off-canvas sidebar, and
  *starboard* is the nautical term for the right-hand side of a vessel, so the
  name keeps the subject without touching the source's name. Single lowercase
  word, kebab-safe. Verified 2026-10-11: a repo-wide search
  (`grep -ril starboard apps/ openspec/specs/ docs/ TEMPLATES.md`) returns
  **zero** hits (no `apps/` folder, no `openspec/specs/` folder, no
  `docs/templates/` folder, no TEMPLATES.md name), and
  `https://colorlib.com/wp/template/starboard/` returns **HTTP 404**, so it is
  not a ColorLib source name either. The source name "Website Menu 05", its
  "Brand" wordmark and its copy are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V05" (source slug `website-menu-05`,
  https://colorlib.com/wp/template/website-menu-05/) — first published
  **2021-01-27**, rewritten in the **October 2026** build to plain HTML + CSS +
  "no jQuery, no framework" vanilla JS, exactly like its `-01` sibling. The
  sheet is **self-contained and namespaced** (its utilities are `cl-`-prefixed:
  `cl-container`, `cl-row`, `cl-col-*`, `cl-d-*`, `cl-text-*`, `cl-py-*`,
  `cl-align-items-center`, `cl-position-relative`, `cl-nav-link`, `cl-collapse`),
  and it is a hand-rolled Bootstrap-4-grid look-alike — **not** a framework skin.
  The recreation uses Tailwind utilities and copies nothing.
- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/website-menu-05/`
  → **HTTP 200**, `text/html`, **2,822 B**, title `🐴 Website Menu #5` (the
  slug-only `/theme/website-menu-05/` path is the 404; see Purpose).
  **Reference artifacts (research date 2026-10-11):** `/tmp/wm05b.html` (live
  preview HTML, 2,822 B), `/tmp/wm05-style.css` (15,648 B, `text/css`, sha256
  `ce2dfccefdf42d529197a13de6118b3f7bc99bd58c66d9b1e8c5a9462d2bc954`),
  `/tmp/wm05-snippet.js` (2,525 B, sha256
  `8704ac9816c7551e12d9e33ffae4b81551562617930af850c024b96a983993be`),
  `/tmp/wm05.zip` (the **705,301 B** archive, extracted to
  `/tmp/wm05x/website-menu-05/` → `index.html`, `css/style.css`,
  `js/snippet.js`, `images/hero_1.jpg` — the CSS + JS **byte-identical** to the
  live assets), `/tmp/cl-wm05.html` (the ColorLib template page, 108,818 B,
  HTTP 200 — source of the description / date / download-size facts) and
  `/tmp/wm05.png` (the 1200×972 screenshot, converted from the AVIF original).
- **Live render cross-check (2026-10-11, 765×437 viewport):** the live preview was
  opened in a browser and its computed styles read back, confirming the sheet's
  values on real elements — `body` height **874 px** (= `200vh`), computed family
  **Open Sans**, `color:rgb(33,37,41)`, `background:#fff`; `.hero` measures
  **765×437 = the full viewport** with
  `background-image:url(…/images/hero_1.jpg)`, `background-size:cover`,
  `background-position:50% 50%` (the image band is the page's canvas);
  `.site-navbar` `position:absolute; top:0; width:765px; z-index:1999`,
  `padding:24px 0`, transparent (`rgba(0,0,0,0)`), rect **765×90**;
  `.site-logo a` computed **`rgb(255,255,255)`**, **Open Sans 16 px / weight
  700 / uppercase**; the `.site-menu-toggle span` glyph computed
  **`rgb(255,255,255)` at 28 px**; the desktop `.site-navigation` computed
  **`display:none`** while the toggle computed **`display:inline`** — i.e. the
  source's own desktop nav row is **dead code** and the hamburger is the only
  control at *every* width; `.site-mobile-menu` computed `width:300px;
  position:fixed; right:0; z-index:2000; padding-top:20px; background:#fff`,
  `transform:translateX(330px)`, `transition:.3s ease-in-out`,
  `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`. The five desktop rows read
  `Home rgb(0,0,0)` (current) and the rest `rgba(0,0,0,.7)`, all **16 px,
  `text-transform:none`** (this variant does **not** uppercase its links, unlike
  `-01`); `li.cl-active` computes `color:#007bff` while its `a` computes `#000`.
  After clicking the toggle, `document.body` gained **`offcanvas-menu`** and the
  cloned `.site-nav-wrap` in the panel read **Home `rgb(0,123,255)`** (active) and
  About/Services/Blog/Contact **`rgb(33,37,41)`**, all **20 px, `padding:10px
  20px`** — the mobile clone confirms the blue current row. **Harness caveat:**
  the tab reports `document.hidden === true`, so some class-toggled style recalcs
  stall (`getComputedStyle` on the panel/veil can return the pre-open value even
  after the class flips) — the rules exist in the sheet; re-read or dispatch the
  event before concluding the page is broken.
- **Screenshot (1200×972, AVIF→PNG):** a browser-chrome mock of the live preview
  with the **off-canvas panel already open**. A single **full-bleed photo** fills
  the frame — three people smiling against a grey cinderblock wall, shot in
  low-key daylight (the `images/hero_1.jpg` band). Over the photo, at the top
  left, the wordmark **`BRAND`** in **white uppercase, bold**; at the top right a
  **white hamburger glyph**. Down the right side a **white vertical panel**
  occupies roughly a quarter of the width, bordered from the photo by a soft
  left-edge shadow, carrying a small **dark close `×`** at its top-right and a
  stacked menu list: **`Home`** in the brand **blue `#007bff`** (the current row),
  then **`About`**, **`Services`**, **`Blog`**, **`Contact`** in near-black. That
  single frame — image hero + transparent header + open right sidebar — is the
  whole design being replicated.
- **Source DOM and measured values (from `index.html` + `css/style.css`, the
  archive twin):**
  - `<body>` is `height:200vh` so the demo can scroll, with `position:relative`
    and the base rule `font-family:"Open Sans", …; font-size:1rem; line-height:1.5;
    color:#212529; background:#fff` (an earlier `Roboto`-first `body` rule at the
    top of the sheet is **overridden** by the later Open Sans one — Open Sans is
    what renders).
  - The veil is `body:before{content:""; position:absolute; inset:0;
    background:rgba(0,0,0,.5); opacity:0; visibility:hidden; z-index:1;
    transition:.3s all ease}`, shown by `body.offcanvas-menu:before{opacity:1;
    visibility:visible; z-index:1002}`.
  - The off-canvas panel `div.site-mobile-menu.site-navbar-target` sits **before**
    the header: `width:300px; position:fixed; right:0; z-index:2000;
    padding-top:20px; background:#fff; height:calc(100vh);
    transform:translateX(110%);
    box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transition:.3s all
    ease-in-out`, sliding to `translateX(0)` under `body.offcanvas-menu`; its
    `.site-mobile-menu-header` (20 px side padding) carries a right-floated
    `.site-mobile-menu-close` (`margin-top:8px`) whose `span` is a **30 px**
    glyph (hover `#ced4da`), and its `.site-mobile-menu-body` is
    `overflow-y:scroll; position:relative; padding:0 20px 20px;
    height:calc(100vh - 52px); padding-bottom:150px`.
  - `<header class="site-navbar site-navbar-target cl-py-4" role="banner">` —
    `position:absolute; top:0; width:100%; z-index:1999; margin-bottom:0;
    padding:1rem` (the `cl-py-4` utility raises it to `24px` top/bottom, measured
    above), with `@media(max-width:991.98px){padding-top:3rem; padding-bottom:3rem}`.
    Inside: `.cl-container > .cl-row.cl-align-items-center.cl-position-relative`
    with a **left `cl-col-3`** and a **right `cl-col-9 cl-text-right`**.
  - The wordmark is `.site-logo > a.cl-font-weight-bold.cl-text-white` reading
    **"Brand"**, where `.site-logo{font-size:1rem}` and
    `.site-logo a{text-transform:uppercase; color:#000; font-family:"Open Sans"…}`
    — the `cl-text-white` utility (`color:#fff !important`) is what actually
    paints it **white over the photo**.
  - The right column holds **two** things: a toggle wrapper
    `span.cl-d-inline-block.cl-d-lg-block > a.site-menu-toggle.js-menu-toggle.cl-text-black.cl-py-5`
    whose inner `span.icon-menu.cl-h3.cl-text-white` is a three-bar SVG (`.cl-h3`
    = `1.75rem`, so the glyph renders ≈28 px, white); **and** the nav
    `nav.site-navigation.cl-text-right.cl-ml-auto.cl-d-none.cl-d-lg-none` — note
    both `cl-d-none` **and** `cl-d-lg-none`, so this desktop row is **never**
    visible (confirmed `display:none` live). It contains
    `ul.site-menu.main-menu.js-clone-nav.cl-ml-auto` with **five** `li`:
    `<li class="cl-active"><a class="cl-nav-link">Home</a></li>`, About, Services,
    Blog, Contact — each `<a>` `padding:20px 0; margin:0 15px;
    color:rgba(0,0,0,.7)!important`, hover `#000!important`, `.cl-active > a`
    `#000!important`, and `.cl-active` itself `color:#007bff!important`. **There
    are no dropdowns, no socials and no nested levels in this variant** — the
    menu is a flat five-row list.
  - `js/snippet.js` (**2,525 B**) is the whole behaviour: it clones every
    `.js-clone-nav` (`nav.cloneNode(true)`, class swapped to `.site-nav-wrap`,
    `id` removed) into `.site-mobile-menu-body`; creates an `.arrow-collapse`
    round toggle for any `.has-children` (none here, so no toggles render); wires
    `.js-menu-toggle` to toggle `body.offcanvas-menu` and each toggle's
    `aria-expanded`; and closes the panel on a `document`-level `mouseup` outside
    the panel (ignoring clicks on the toggle), on `Escape` (`keydown`) and on a
    `resize` wider than **768 px**. There is **no sticky header and no scroll
    handler** in this variant (unlike `-01`).
  - The band is literally `<div class="hero" style="background-image:
    url('images/hero_1.jpg');"></div>` with `.hero{height:100vh; width:100%;
    background-size:cover; background-position:center center;
    background-repeat:no-repeat}` — nothing else, and no `<img>` element.
- **Section order (source, top → bottom):** 1. `div.site-mobile-menu` (the fixed
  off-canvas panel — chrome, not a band) · 2. `header.site-navbar` (transparent,
  absolutely over the band) · 3. `div.hero` (100vh full-bleed image band). There
  is **no** other section; the page is **2 bands** (header + image band) plus the
  fixed panel.
- **Declared-but-missing targets:** the source's five menu links point at
  `index.html`, `about.html`, `services.html`, `blog.html` and `contact.html` —
  **none of which exist in the snippet** (it ships a single `index.html`). The
  recreation materialises each as a labelled landing panel (see the requirement
  below) so no link is dead, while the band count and order stay 1:1.

### Deltas vs the reference (deliberate, documented)

| Area | Source | Recreation | Why |
| --- | --- | --- | --- |
| Name / wordmark | "Website Menu V05", wordmark "Brand" | `starboard`, own wordmark | new-original-name rule |
| Nav labels | Home · About · Services · Blog · Contact | same *kind* of five-row flat list, same order and count, one current row | paraphrase rule — keep the list's shape |
| Dead page links | five `*.html` hrefs with no targets | each target becomes a real labelled panel with a matching `id` | no dead links / a11y |
| Nav structure | desktop row ships `display:none` forever; only the off-canvas panel is usable | a single nav source of truth: the hamburger opens the sidebar at every width, and the row is **not** rendered as dead markup | reproduce the real UX, not the dead code |
| Panel auto-close | closes on resize > 768 px (a mobile-only leftover, though the panel is the only nav at desktop too) | panel closes via the close glyph, the veil and `Escape`; the 768 px resize-close is dropped | the source's own threshold contradicts its always-available panel |
| Clone DOM | `nav.cloneNode(true)` into the panel | render one nav tree component twice (trigger → panel) instead of cloning DOM | idiomatic React, single source of truth |
| A11y | toggle has no `aria-expanded`/`aria-controls`; panel is an unlabelled `div`; no focus management; no veil button | real button semantics, labelled dialog-like region, focus moved in and returned, `Escape`, veil click target, `aria-current` on the current row | a11y gates; the source has none |
| Icons | inlined three-bar SVG + a `\…`-family close glyph | `lucide-react` (`Menu`, `X`) + own inline SVG | never copy assets/fonts |
| Fonts | self-hosted Open Sans woff2 subsets (300/400/700) | one Google Fonts `<link>` for Open Sans 300/400/700 | no font files copied |
| Hero image | `images/hero_1.jpg` (people photo) | `https://picsum.photos/seed/starboard-hero/1920/1080` placeholder | never copy assets |
| Footer | none | minimal app-shell strip with the Component Dock credit + computed year | monorepo attribution rule |
| Preloader / jQuery / Bootstrap | none in the rewritten snippet | none | (no delta — kept clean) |

## Design tokens

Extracted from the source stylesheet `css/style.css` (15,648 B) of
`website-menu-05` (live preview
`https://preview.colorlib.com/theme/bootstrap/website-menu-05/` → HTTP 200;
byte-identical archive copy) and cross-checked against the 1200×972 screenshot
and the live render.

| Token | Value | Used by |
| --- | --- | --- |
| brand / primary blue | `#007bff` | `a{color}`, the current menu row (`.cl-active` / `.site-nav-wrap li.cl-active > a`), row hover |
| primary shade | `#0056b3` | `a:hover` |
| body text | `#212529` | `body{color}`, off-canvas menu rows |
| body surface | `#fff` | `body{background}`, the off-canvas panel |
| wordmark / toggle (over the photo) | `#fff` | `.site-logo a.cl-text-white`, `.site-menu-toggle … cl-text-white`, the 28 px glyph |
| header surface | transparent (`rgba(0,0,0,0)`) | absolute bar over the image band |
| off-canvas rows | `#212529` → `#007bff` (hover) ; current row `#007bff` | `.site-nav-wrap a` / `li.cl-active > a` |
| off-canvas close glyph hover | `#ced4da` | `.site-mobile-menu-close span:hover` |
| veil | `rgba(0,0,0,.5)`, `.3s ease` fade, `z-index:1` → `1002` | behind the open panel |
| panel shadow | `-10px 0 20px -10px rgba(0,0,0,.1)` | off-canvas panel |
| dropdown row hover (unused here) | `#eff1f3` — **not present in this variant** (no dropdowns) | — |
| layout | `.cl-container` `15px` gutters, max-widths `540/720/960/1140` at `sm/md/lg/xl`; header `cl-col-3` (25 %) + `cl-col-9` (75 %) | header columns |
| radii | **0 everywhere**; the only `border-radius` in the sheet is a normalize `button{border-radius:0}` — **no circular controls remain** (this variant has no `.has-children`, so no arrow toggle) | square shape language, no pills |
| motion | `a{transition:.3s all ease}` site-wide; panel `.3s ease-in-out`; veil `.3s ease` | all interactive transitions |
| type | `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — weights **300 / 400 / 700** (six woff2 subsets) | whole page |
| type scale | body `1rem / 1.5`; `h3, .cl-h3{1.75rem; font-weight:500; line-height:1.2; margin-bottom:.5rem}`; wordmark `.site-logo{font-size:1rem}` + `uppercase` (measured 16 px / 700); desktop menu links **16 px** (measured; `.cl-nav-link{padding:.5rem 1rem}`) with `text-transform:none`; off-canvas level-1 rows **20 px** | wordmark + menu |
| spacing rhythm | header `padding:1rem` raised to **24 px** by `cl-py-4` (mobile `3rem` top/bottom); toggle `cl-py-5` = `3rem`; off-canvas rows `padding:10px 20px`; panel body `padding:0 20px 20px` (150 px bottom); band = `100vh` | header / panel |
| band | `100vh` full-bleed background image, `cover` / `center center` / `no-repeat` | the page's canvas |

**Google Fonts map:** one `<link>` for **Open Sans** 300;400;700
(`https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap`)
— the source's three self-hosted woff2 weights are never copied. Icons from
`lucide-react` (`Menu`, `X`).

## Requirements

### Feature: Header floating over the image band

#### Scenario: Wordmark and the hamburger render over the photo

- **Given** the page loads
- **When** the header renders at any width
- **Then** it is **absolutely positioned at the top of the page** (`top:0;
  width:100%`, above the band, `margin-bottom:0`, `z-index` high enough to sit
  over the panel) with a **transparent** surface so the image band shows through,
  and **24 px** vertical padding (`3rem` top/bottom below 992 px)
- **And** its left column holds the app's own **wordmark** — white, **Open Sans
  weight 700, uppercase, 1rem (16 px)** — rendered as a link to the top of the
  page
- **And** its right column holds a single **hamburger control** — a real
  `button` holding a `lucide-react` `Menu` glyph sized like the source's
  `.cl-h3` (≈**28 px**), coloured **white** over the photo — which is the page's
  **only** navigation trigger and is visible at **every** width
- **And** the source's dead desktop nav row is **not** reproduced as inert
  markup (the source ships it `display:none` forever); the recreation has exactly
  one nav source of truth, opened by the hamburger
- **And** the toggle exposes `aria-expanded`, `aria-controls` and a visible
  `focus-visible` ring, and no Colorlib or source-brand string appears anywhere
  in the header

### Feature: Off-canvas sidebar menu (the only navigation)

#### Scenario: The hamburger slides a 300 px white panel in from the right

- **Given** the page renders at any width
- **When** the hamburger is activated
- **Then** a **300 px** white panel slides in from the right edge
  (`translateX(110%) → 0`, `.3s all ease-in-out`, `padding-top:20px`, full
  viewport height, `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`) while the page
  behind it is covered by a **`rgba(0,0,0,.5)`** veil that fades in over `.3s`
  at `z-index` above the page but below the panel
- **And** the panel's header carries a **30 px** close glyph (`lucide-react` `X`,
  hover `#ced4da`) in a real labelled button, and its body scrolls
  (`height:calc(100vh - 52px)`, `padding:0 20px 20px` with **150 px** extra bottom
  padding)
- **And** the body holds the **same nav tree as the header's nav** — the
  recreation must render **one** nav definition used by both (React: mount a
  second instance rather than cloning DOM, which is what the source's
  `nav.cloneNode(true)` does) rather than hand-maintaining two copies

#### Scenario: Five flat rows render in the source's order with a blue current row

- **Given** the panel is open
- **When** its rows are inspected
- **Then** there are exactly **five** rows in the source's order — home, about,
  services, blog, contact (own labels of the same kinds permitted) — with **no
  dropdowns, no sub-levels and no social links** (this variant is a flat list,
  unlike its `-01` sibling)
- **And** each row is `padding:10px 20px`, label **20 px**, colour **`#212529`**
  turning **`#007bff`** on hover/focus, and the **current** row (home) renders in
  **`#007bff`** with `aria-current="page"` (the source's `.cl-active`)
- **And** the rows close the panel when activated

#### Scenario: The panel closes three ways

- **Given** the panel is open
- **When** the close glyph, the veil, or `Escape` is used
- **Then** the panel slides closed (`translateX(110%)`), the veil is removed and
  the toggle's `aria-expanded` returns to `false` (**each** of the three paths is
  tested; the source's own `mouseup`-outside, `Escape` and `resize > 768 px`
  handlers are the behaviour being reproduced, with the resize-close **dropped**
  because the panel is the only nav at every width and the source's 768 px
  threshold contradicts that)
- **And** focus moves into the panel on open and returns to the toggle on close,
  focus is never trapped in the closed panel, and the page behind is scrollable
  again

### Feature: Full-bleed image hero band

#### Scenario: The band renders at full viewport height with a covered image

- **Given** the page loads
- **When** the band below the header is measured
- **Then** it is a full-width **`100vh`** band with a **background image**
  (`background-size:cover`, `background-position:center center`,
  `background-repeat:no-repeat`) supplied by a deterministic placeholder
  `https://picsum.photos/seed/starboard-hero/1920/1080` (the source uses its own
  `images/hero_1.jpg`; no asset is copied)
- **And** it is the page's **only** content band (structure = header + image band,
  1:1 with the source) and the header sits over it so the first paint is
  image + wordmark + hamburger
- **And** the page is tall enough to scroll far enough to show the materialised
  panels below the fold without artificially padding the body (the source forces
  `body{height:200vh}`)

#### Scenario: Every menu target resolves to a labelled panel

- **Given** the band renders
- **When** any of the app's five menu rows is activated
- **Then** the page scrolls to a **real, in-band target with a matching `id`**
  (the source declares five `*.html` pages that do not exist — the recreation
  materialises each as a labelled panel inside this band, exactly as the family's
  `-01` recreation does for its ten anchors)
- **And** each panel is an own-copy placeholder of the right *kind* (a heading +
  one line, e.g. home → intro, about → story, services → offerings, blog → posts,
  contact → a contact block) rendered over the image surface in white/near-white
  with an accent in **`#007bff`** and a stable anchor offset so the header never
  covers the panel's heading (`scroll-margin-top` ≥ header height)
- **And** exactly one panel is the `#home` target and it sits at the band's top,
  and the panels appear in the same order as the menu's own row order

### Feature: Page shell and Component Dock attribution

#### Scenario: A minimal footer strip carries the credit

- **Given** the page renders
- **When** the footer is inspected
- **Then** a minimal strip sits below the band (the source has no footer — this is
  an app-shell addition) with a dark surface and a **1 px** translucent hairline
  top edge, holding the app's wordmark and exactly **one** link to
  `https://www.componentdock.com/` branded "Component Dock" (new tab,
  `rel="noreferrer"`) next to a **current year computed at render**

#### Scenario: No provenance strings and no copied assets

- **Given** the app source is searched
- **When** it is checked
- **Then** no `colorlib`, "Website Menu 05" or `website-menu-05` string appears
  anywhere in `apps/starboard` (comments included — record the palette as
  design-token notes instead: "brand accent `#007bff` test")
- **And** nothing from the source archive ships: no `css/style.css`, no
  `js/snippet.js`, no `icomoon-subset.woff2`, no `open-sans-*-latin*.woff2`, no
  Open Sans files of any kind, no `hero_1.jpg`, no inlined three-bar SVG path
  copied verbatim, no `cl-`-prefixed utility class names, and no copied copy (the
  "Brand" wordmark and the row labels are **not** reproduced verbatim) — images
  come from picsum and icons from `lucide-react`

### Feature: Responsive behaviour

#### Scenario: The band and the panel reflow at every width

- **Given** the page renders at `xl` (≥1200 px), `lg`/`md` and `sm` widths
- **When** the layout is measured
- **Then** the hamburger is visible and functional at **every** width (the source
  behaves the same way — its desktop row is always hidden), the panel is the only
  navigation, and the panel stays **300 px** wide except where the viewport is
  narrower than the panel (then it caps at the viewport width)
- **And** the band stays **`100vh`** at every width, its materialised panels stack
  to a single column below `lg`, and the page produces **no horizontal overflow at
  320 px** (`scrollWidth === innerWidth`)

### Feature: Motion, accessibility and reduced motion

#### Scenario: Motion is decorative and fully suppressible

- **Given** the page loads with motion enabled
- **When** the panel and links are used
- **Then** links transition over **`.3s ease`** and the panel and veil run over
  **`.3s`** (`ease-in-out` / `ease`)
- **And** under `prefers-reduced-motion: reduce` those transitions collapse to
  effectively instant, the panel appears without sliding, and all content is
  present immediately (no motion gate on first paint)
- **And** the hamburger, the close button, the veil and every menu row are
  keyboard operable with visible `focus-visible` rings and state exposed to
  assistive tech (`aria-expanded`, `aria-controls`, `aria-current`), the panel is
  a labelled dialog-like region, and `Escape` closes it

## Verification checklist

- [ ] `apps/starboard` recreates ColorLib **"Website Menu V05"** (source slug
      `website-menu-05`, https://colorlib.com/wp/template/website-menu-05/) under
      the new name `starboard`; the registry/`package.json` reads
      `@free-react-templates/starboard`
- [ ] The header is **absolutely positioned, transparent**, `top:0; width:100%`,
      with **24 px** vertical padding (`3rem` top/bottom below 992 px), floating
      over the band
- [ ] The wordmark is **white, Open Sans 700, uppercase, 16 px**; the hamburger is
      a real button with a ≈**28 px** white `lucide-react` `Menu` glyph, visible
      at **every** width
- [ ] The band is a **`100vh` full-bleed background image** (`cover`,
      `center center`, `no-repeat`) from
      `https://picsum.photos/seed/starboard-hero/1920/1080`; the header sits over
      it so first paint = image + wordmark + hamburger
- [ ] The off-canvas panel matches: **300 px** wide, white, fixed right,
      `padding-top:20px`, full height, **`-10px 0 20px -10px rgba(0,0,0,.1)`**
      shadow, **`.3s ease-in-out`** slide, body `height:calc(100vh - 52px)` with
      `padding:0 20px 20px` and **150 px** bottom padding, a **30 px** close glyph
      (hover `#ced4da`) and a **`rgba(0,0,0,.5)`** veil (`.3s` fade)
- [ ] The menu is **five flat rows** in source order (home, about, services, blog,
      contact), `padding:10px 20px`, **20 px**, `#212529` → `#007bff` on hover,
      the current row (**home**) in **`#007bff`** with `aria-current="page"`; **no
      dropdowns, no sub-levels, no socials**
- [ ] The panel closes on the close glyph, the veil and `Escape` (each tested);
      focus moves in on open and returns to the toggle on close; the 768 px
      resize-close from the source is dropped and that decision is noted in the PR
- [ ] The shape language is kept square: **no** rounded corners or pills anywhere
      (this variant has no circular controls at all — the source's only
      `border-radius` is a normalize `button{border-radius:0}`) — do not
      "modernise" the panel or rows into pills
- [ ] One nav source of truth: the same nav definition drives the panel rows
      (mounted, not DOM-cloned) — no hand-maintained duplicate list
- [ ] The five declared targets resolve to real in-band panels with
      `scroll-margin-top` ≥ the header height; **zero** dead `href="#"` links
      remain
- [ ] Zero `colorlib` / "Website Menu 05" / `website-menu-05` provenance
      references anywhere in `apps/starboard` (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no woff2 files
      (`open-sans-*.woff2`, `icomoon-subset.woff2`), no `hero_1.jpg`, no `cl-`
      utility classes, no jQuery/Bootstrap, no copied strings
- [ ] `public/CNAME` = `starboard.free.componentdock.com` and
      `"homepage": "https://starboard.free.componentdock.com"` in
      `apps/starboard/package.json`; `package-lock.json` registers
      `@free-react-templates/starboard`
- [ ] Footer links `https://www.componentdock.com/` exactly once ("Component
      Dock") with a computed current year
- [ ] Accessibility: toggle has `aria-expanded`/`aria-controls`; the panel is a
      labelled region with focus moved in and returned; every interactive element
      has a visible focus ring; `prefers-reduced-motion: reduce` removes the
      slide/fade motion
- [ ] `scripts/verify-app.sh starboard` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] PR description includes: source template (ColorLib Website Menu V05),
      preview URL
      (`https://preview.colorlib.com/theme/bootstrap/website-menu-05/` → **HTTP
      200**, 2,822 B, title `🐴 Website Menu #5`; the slug-only
      `/theme/website-menu-05/` path 404s; archive
      `https://preview.colorlib.com/downloads/free/website-menu-05.zip` → HTTP 200,
      705,301 B; screenshot 1200×972), the design tokens used (`#007bff` brand,
      `#0056b3` accent hover, `#212529` text, `#fff` panel, transparent header,
      `rgba(0,0,0,.5)` veil, `-10px 0 20px -10px rgba(0,0,0,.1)` shadow, square
      radii with no circular controls, Open Sans 300/400/700, 16 px uppercase
      wordmark, 28 px hamburger, 300 px panel, 20 px rows), the structure
      (transparent header → 100vh image band, plus the fixed off-canvas panel) and
      what differs (new name + wordmark, own labels/copy, lucide instead of the
      inline SVG/glyph, Google Fonts instead of self-hosted woff2, the five dead
      page links materialised as labelled panels, one nav source of truth instead
      of a DOM clone, added aria/keyboard states, reduced-motion handling, footer
      attribution)
