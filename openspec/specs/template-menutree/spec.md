# Template: Menutree (Website Menus)

## Purpose

Menutree is a **multi-level navigation + full-viewport hero band** page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Website Menu 01"** snippet (source slug `website-menu-01` — the Website
Menus family's **slate-canvas mega-menu**: a **transparent header** floating over a
flat, 100vh **`#5d5b6a` slate-mauve band**, carrying a **24 px `h1` wordmark
"Brand."** whose full stop is the brand blue **`#007bff`**, a right-aligned
**13 px uppercase** link row (HOME · ABOUT US ▾ · BLOG · CONTACT) that turns
`#007bff` on hover, a **hover/focus dropdown** hanging under "About us" (white
panel, **`2px solid #007bff` top border**, `min-width:210px`, `box-shadow:0 2px 10px
-2px rgba(0,0,0,.1)`, rows `9px 20px` with an **`#eff1f3`** hover, and a **second
level** flying out at `left:100%; top:0`), **three icon-only social links**
(facebook / twitter / linkedin) at the row's end, a **hamburger toggle that
replaces the whole row below 1200 px** and slides a **300 px white off-canvas
panel** in from the right (`box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`, `.3s
ease-in-out`) over a **`rgba(0,0,0,.5)` page veil**, with per-row **36 px round
arrow toggles** (`border-radius:50%`, `#f8f9fa` hover) expanding the nested
submenus, and a **sticky header** that becomes a **solid white bar**
(`box-shadow:4px 0 20px -5px rgba(0,0,0,.1)`, wordmark `#007bff`, links `#000`) the
moment the page scrolls.

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's section
structure, order and design tokens 1:1 but copies no asset (no images, no font
files, no CSS files, no icon-font glyphs, no text verbatim) and never reuses the
source name.

- **Source:** https://colorlib.com/wp/template/website-menu-01/ (listed in
  TEMPLATES.md `## Website Menus (20)` — the section starts at line 3071 and this
  item is its first entry at **line 3073**; the slug `website-menu-01` appears
  exactly once in TEMPLATES.md and in no spec on main before this one)
- **Preview:** `https://preview.colorlib.com/theme/website-menu-01/` returns
  **HTTP 404** (`Not Found`, 9 B) — the *Website Menus* family does **not** live
  under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-01/`**
  (**HTTP 200**, `text/html`, **6,103 B**, title `Website Menu #1`, verified
  2026-10-11), discovered through the catalog index the preview host itself loads
  (`https://preview.colorlib.com/assets/js/catalog-products-*.js` — its entry for
  this slug is `"url":"https://preview.colorlib.com/theme/bootstrap/website-menu-01/"`,
  `"details":"https://colorlib.com/wp/template/website-menu-01/"`; the sibling
  entries carry the same `theme/bootstrap/` prefix). Its two assets —
  `css/style.css?v=f016aacb` (**18,843 B**, `text/css`) and
  `js/snippet.js?v=d8fd00d5` (**3,537 B**) — are **byte-identical**
  (sha256 `37126f7940aa…` / `fdfdba1a4543…`) to the copies in the snippet's own
  downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-01.zip`
  (**HTTP 200**, `application/zip`, **231,882 B** — ColorLib's page calls the
  download "226 KB", down from 2.3 MB before the September 2026 rewrite), which is
  the un-versioned source copy used here: `website-menu-01/index.html` (5,900 B),
  `website-menu-01/css/style.css`, `website-menu-01/js/snippet.js`,
  `website-menu-01/README.md` (1,264 B) plus six **Open Sans** woff2 subsets
  (300/400/700, latin + latin-ext) and an `icomoon-subset.woff2`. Neither the live
  page nor the archive ships **any image** and the markup contains **no `<img>`** —
  the only reference artwork is the wordmark text and inlined SVG icon paths. No
  screenshot-only fallback was needed: the live preview is the primary reference
  and the archive its readable twin.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-01.jpg
  (HTTP 200, `image/jpeg`, **1200×972**, **30,134 B**, opened and inspected
  visually 2026-10-11 — no conversion needed, it is a real JPEG).
- **New name:** `menutree` (apps/menutree, `@free-react-templates/menutree`) — a
  *menu tree*: the source's own selling point is its multi-level drop-down
  structure, and the name keeps that subject without touching the source's name.
  Single lowercase word, kebab-safe. Verified 2026-10-11: a repo-wide
  `grep -ril menutree` returns **zero** hits (no `apps/` folder, no
  `openspec/specs/` folder, no `docs/templates/` folder, no TEMPLATES.md name),
  and `https://colorlib.com/wp/template/menutree/` and
  `https://preview.colorlib.com/theme/menutree/` both return **HTTP 404**, so it
  is not a ColorLib source name either. The source name "Website Menu 01", its
  "Brand." wordmark, its icon-font glyphs and its copy are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Evidence audit (2026-10-12):** the source `<title>` recorded in this spec is the plain
  raw-HTTP string. A leading horse-emoji prefix that an earlier browser pass recorded
  is added to *every* page title by this container's browser harness (reproduced on
  `example.com`), not by the source. Nothing else in this evidence block changed.

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V01" (source slug `website-menu-01`,
  https://colorlib.com/wp/template/website-menu-01/) — author **Rok Krivec**,
  first published 2021-01-27, rewritten in **September 2026** to plain HTML +
  CSS + "a few lines of vanilla JavaScript: no jQuery, no Bootstrap files, no
  plugins". The page's own description: *"To create simple and practical page
  navigation, this free multi-level drop-down menu template will do the trick.
  You can create a pleasant experience, add a brand logo and even activate
  social media icons."* The snippet is **self-contained and namespaced** (its
  utility classes are `cl-`-prefixed: `cl-container`, `cl-row`, `cl-col-*`,
  `cl-d-*`, `cl-text-primary`, `cl-dropdown`, `cl-nav-link`, `cl-collapse`), and
  the sheet is a hand-rolled Bootstrap-4-grid look-alike, **not** a framework
  skin — the recreation uses Tailwind utilities instead and copies nothing.
- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/website-menu-01/`
  → **HTTP 200**, `text/html`, **6,103 B**, title `Website Menu #1` (the
  slug-only `/theme/website-menu-01/` path is the 404; see Purpose).
  **Reference artifacts (research date 2026-10-11):**
  `/tmp/live.html` (live preview HTML, 6,103 B), `/tmp/live-style.css`
  (18,843 B, `text/css`, sha256 `37126f7940aa87d07558c3a72fb3e320ba86d1db9f0a945649a79d517f7c39de`),
  `/tmp/live-snippet.js` (3,537 B, sha256
  `fdfdba1a45436129b320091550d64e9bc27099b5e4ff090819597b04406de01b`),
  `/tmp/wm01.zip` (the 231,882 B archive, extracted to
  `/tmp/wm01x/website-menu-01/` → `index.html`, `css/style.css`,
  `js/snippet.js` — byte-identical to the live assets), `/tmp/cl-wm01.html` (the
  ColorLib template page, 108,334 B, HTTP 200 — source of the
  description/author/date/download-size facts), `/tmp/catalog.js` (the preview
  host's 633,990 B catalog index that maps the slug to the `theme/bootstrap/`
  preview) and `/tmp/wm01.jpg` (the 1200×972 screenshot).
- **Live render cross-check (2026-10-11, 780×437 viewport):** the live preview was
  opened in a browser and its computed styles read back, confirming the sheet's
  values on real elements — `.hero` measures **765×437 = the full viewport** with
  `background-color: rgb(93, 91, 106)` = **`#5d5b6a`**; `.site-navbar`
  `position:absolute; top:0; width:765px; z-index:1999`, resting
  `border-bottom:1px solid rgba(255,255,255,.1)` (the hairline is on the **navbar**,
  the wrapper itself has no border); `h1.site-logo{font-size:24px;
  font-weight:500}` with `.cl-text-primary` = `rgb(0,123,255)`;
  `.site-menu > li > a{font-size:13px; text-transform:uppercase; padding:20px;
  color:rgba(255,255,255,.7)}`; `li.social > a{padding-left:5px;
  padding-right:5px}`; `.site-menu-toggle` white with a **28 px** glyph
  (`.cl-h3` = `1.75rem`); `.has-children .cl-dropdown{background:#fff;
  border-top:2px solid rgb(0,123,255); margin-top:20px; visibility:hidden;
  opacity:0; transition:.2s; box-shadow:0 2px 10px -2px rgba(0,0,0,.1)}` with
  rows `min-width:210px`, row links `9px 20px` / `#000` / 16 px /
  `text-transform:none`, and the third level at `left:100%; top:0`;
  `.site-mobile-menu{width:300px; position:fixed; padding-top:20px;
  box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transition:.3s ease-in-out;
  transform:translateX(330px)}` (110 % of 300) whose `.site-mobile-menu-body`
  measures **385 px** (= `calc(100vh - 52px)`) with `padding:0 20px 150px`;
  `body` computed family **Open Sans**, 16 px, `color:rgb(33,37,41)`, height
  **874 px** (= `200vh`); veil `rgba(0,0,0,.5)`. The class-driven states are
  present as rules (`body.offcanvas-menu::before{opacity:1; visibility:visible}`,
  `.offcanvas-menu .site-mobile-menu{transform:translateX(0%)}`,
  `.sticky-wrapper.is-sticky .site-navbar{background:#fff; …}`) and dispatching
  `scroll` on the live page proves the sticky path end-to-end: the wrapper gains
  `is-sticky`, the bar receives the inline `position:fixed; top:0; width:765px`,
  and `.site-menu > li > a` computed flips to **`rgb(0,0,0)`**. Harness caveat:
  the tab reports `document.hidden === true`, so real scroll events and some style
  recalcs stall — dispatch the event and re-read instead of concluding the page is
  broken. The live mobile clone also confirms the a11y gaps recorded above: the
  cloned `.social a` icons carry **no `aria-label`**, the hamburger has **no
  accessible name**, and the arrow toggles expose `aria-expanded="false"` +
  `aria-label="Show submenu"` but **no `aria-controls`**, while the clone's own
  level sizes measure **20 / 16 / 16 px** at `padding-left` **20 / 40 / 60 px**
  and the toggles **36 × 36 / `border-radius:50%`**.
- **Screenshot (1200×972 JPEG):** a browser-chrome mock framing a single flat
  **dark slate** surface (the `#5d5b6a` band) that fills the whole frame. Across
  the top sits the header: a marginally darker/lighter slate strip with a
  **1 px translucent white hairline (`rgba(255,255,255,.1)`) along its bottom
  edge**; at the left the wordmark **"Brand."** in white ≈24 px with its full stop
  in **`#007bff`**; at the right a row of **small uppercase near-white links** —
  `HOME`, `ABOUT US` with a **caret glyph**, `BLOG`, `CONTACT`, then
  **three small glyph-only social marks** (facebook, twitter, linkedin) in the
  same near-white. Below the header rule the frame is **empty slate** — no
  headline, no cards, no photo, no footer — which is exactly the source's DOM:
  a header plus an empty full-viewport `.hero` div. That emptiness is the design;
  the deliverable is the navigation, and the band exists as the scrolling canvas
  that makes the sticky/dropdown behaviour visible.
- **Source DOM and measured values (from `index.html` + `css/style.css`, the
  fallback reference):**
  - `<body>` is `height:200vh` so the demo page can scroll; the sheet keeps the
    base rule `font-family:"Open Sans", …; color:#212529; font-size:1rem;
    line-height:1.5` (an earlier `Roboto`-first `body` rule at the top of the
    sheet is **overridden** by the later Open Sans one — Open Sans is what
    renders).
  - `<header class="site-navbar js-sticky-header site-navbar-target" role="banner">`
    — `position:absolute; top:0; width:100%; z-index:1999; margin-bottom:0`, i.e.
    it floats **on top of** the band so the slate shows through. Inside:
    `.cl-container > .cl-row.cl-align-items-center` with three columns —
    `cl-col-6 cl-col-xl-2` (logo), `cl-col-12 cl-col-md-10 cl-d-none cl-d-xl-block`
    (nav, desktop only ≥1200 px) and `cl-col-6 cl-d-inline-block cl-d-xl-none
    cl-ml-md-0 cl-py-3` (the hamburger column, with an inline `top:3px` nudge).
  - The wordmark is an **`h1.site-logo`**: `.site-navbar .site-logo{font-size:24px}`
    (overriding the sheet's global `h1{font-size:2.5rem; font-weight:500;
    line-height:1.2; margin-bottom:.5rem}`) containing
    `<a href="index.html">Brand<span class="cl-text-primary">.</span></a>` where
    `.cl-text-primary{color:#007bff!important}` (`a.cl-text-primary:hover` →
    `#0056b3`).
  - The nav is `.site-navigation.cl-text-right > ul.site-menu.main-menu.js-clone-nav.cl-mr-auto.cl-d-none.cl-d-lg-block`:
    `> li{display:inline-block}`, `> li > a{padding:20px 20px; font-size:13px;
    text-transform:uppercase; display:inline-block; text-decoration:none!important}`,
    `> li > a:hover{color:#007bff}`, `> li.social > a{padding-left:5px;
    padding-right:5px}`. Items: **Home**, **About Us** (`.has-children`, caret
    drawn as an `icomoon` `\e313` `:before` at `right:0`, `padding-right:20px`),
    **Blog**, **Contact**, then the three `.social` items (facebook / twitter /
    linkedin, each an icon link with `aria-label`-less inline SVG in the source —
    the recreation must label them).
  - The dropdown is `ul.cl-dropdown` under `.has-children`:
    `visibility:hidden; opacity:0; position:absolute; top:100%; text-align:left;
    border-top:2px solid #007bff; box-shadow:0 2px 10px -2px rgba(0,0,0,.1);
    padding:0; margin-top:20px; background:#fff; transition:.2s 0s`, its rows
    `> li{list-style:none; padding:0; margin:0; min-width:210px}`,
    `> li > a{padding:9px 20px; display:block; color:#000; text-transform:none;
    letter-spacing:normal}` and `> li > a:hover{background:#eff1f3; color:#000}`.
    It opens on `:hover`, `:focus` and `:active` of the parent by animating
    `margin-top:20px → 0` together with `visibility:visible; opacity:1`. Contents
    (source): **Team · Pricing · FAQ · Gallery · Services · Testimonials** plus a
    **nested** `.has-children` **"More Links"** whose caret is `\e315` and whose
    own `ul.cl-dropdown` is positioned `left:100%; top:0` — i.e. a **third-level
    panel opening to the right**. `.cl-active` items are `#007bff`.
  - The hamburger is `a.site-menu-toggle.js-menu-toggle.cl-float-right` holding
    `<span class="icon-menu cl-h3">` (`.cl-h3{font-size:1.75rem}`, so the glyph
    renders ≈28 px) with an inline three-bar SVG.
  - The band is literally `<div class="hero"></div>` with
    `.hero{height:100vh; width:100%; background:#5d5b6a}` — nothing else.
  - The off-canvas menu is a sibling of the header:
    `.site-mobile-menu.site-navbar-target` (`width:300px; position:fixed;
    right:0; z-index:2000; padding-top:20px; background:#fff;
    height:calc(100vh); transform:translateX(110%);
    box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transition:.3s all
    ease-in-out`), containing a `.site-mobile-menu-header` (`float:right` close
    glyph, `.site-mobile-menu-close span{font-size:30px}`) and an **empty**
    `.site-mobile-menu-body` (`overflow-y:scroll; padding:0 20px 20px;
    height:calc(100vh - 52px); padding-bottom:150px`) that JavaScript fills by
    **cloning the desktop nav** (`nav.cloneNode(true)`, class swapped to
    `.site-nav-wrap`). Rows: `a{padding:10px 20px; color:#212529}` →
    `#007bff` on hover; `> li > a{font-size:20px; padding-left:20px}`,
    second level `> li > ul > li > a{padding-left:40px; font-size:16px}`,
    third level `padding-left:60px; font-size:16px`; `.social` rows become
    `float:none; width:auto`. A generated
    `.arrow-collapse` button sits at `right:0; top:10px; z-index:20;
    width:36px; height:36px; text-align:center; border-radius:50%` with hover
    `#f8f9fa` and an `\f078` chevron that rotates 180° when collapsed (`.cl-collapsed`).
    Its submenu gets `.cl-collapse` (`display:none` unless `.cl-show`) plus an
    `id="collapseItem<k>"`. Colour inventory: the sheet's only `border-radius`
    values are the arrow toggle's `50%` and a normalize `button{border-radius:0}`
    — **the whole design is square** apart from that one circular toggle.
  - The veil is `body:before{content:""; position:absolute; inset:0;
    background:rgba(0,0,0,.5); opacity:0; visibility:hidden; z-index:1;
    transition:.3s all ease}` shown by `body.offcanvas-menu:before{opacity:1;
    visibility:visible}`.
  - The sticky header is JS-driven (`js/snippet.js`): the script wraps
    `header.js-sticky-header` in a `.sticky-wrapper` (`position:absolute;
    z-index:100; width:100%`) and, once `window.scrollY` passes the wrapper's top,
    adds `.is-sticky` and pins the bar with `position:fixed; top:0;
    width:<wrapper width>px`. In the resting (over-band) state the wrapper rules
    are: `border-bottom:1px solid rgba(255,255,255,.1)`, toggle `color:#fff`,
    logo `#fff`, links `rgba(255,255,255,.7)` with `!important`, hovering/current
    `#fff`. In the stuck state: `background:#fff; border-bottom:1px solid
    transparent; box-shadow:4px 0 20px -5px rgba(0,0,0,.1)`, toggle `#000`, logo
    `#007bff`, links `#000`, hover/current `#007bff`.
  - The mobile panel closes on the close glyph, a click outside the panel
    (`document mouseup`), `Escape`, and on any resize wider than **768 px**;
    the desktop row is hidden below **1200 px** (`cl-d-xl-*`) — the two
    breakpoints in the source do **not** match, and the recreation keeps the
    desktop `xl` (1200 px) breakpoint for the row and uses a single, consistent
    "wide" threshold for the panel (see deltas).
- **Section order (source, top → bottom):** 1. `header.site-navbar` (transparent,
  absolutely over the band) · 2. `div.hero` (100vh flat `#5d5b6a` band) — plus the
  fixed off-canvas menu, which is chrome rather than a band. There is **no** other
  section; the page is 2 bands and the band is deliberately empty.
- **Declared-but-missing anchor targets:** the source's own menu links point at
  `#home-section`, `#about-section`, `#team-section`, `#pricing-section`,
  `#faq-section`, `#gallery-section`, `#services-section`,
  `#testimonials-section`, `#blog-section` and `#contact-section` — **none of
  which exist in the page** (a snippet shipped for you to drop into your own
  site). The recreation materialises each of those ten declared targets as a
  labelled landing panel **inside the same slate band** (see the requirement
  below), so no link is dead, while the band count and order stay 1:1.

### Deltas vs the reference (deliberate, documented)

| Area | Source | Recreation | Why |
| --- | --- | --- | --- |
| Name / wordmark | "Website Menu 01", wordmark "Brand." | `menutree`, own wordmark | new-original-name rule |
| Nav labels | Home · About Us · Blog · Contact + 3 socials | same *kind* of row (own labels permitted), same order and count | paraphrase rule — keep the row's shape |
| Dead anchors | ten `#*-section` hrefs with no targets | each target becomes a real labelled panel inside the band | no dead links / a11y |
| Mobile breakpoint | desktop row hidden <1200 px, panel auto-closes at >768 px | one consistent threshold (`xl`/1200 px) for both the row and the panel | the source's two thresholds contradict each other |
| Dropdown trigger | CSS `:hover`/`:focus`/`:active` only; no `aria-expanded`, no keyboard traversal of the caret | real button semantics with `aria-expanded`/`aria-haspopup`, `Escape` closes, `aria-controls` on the mobile arrow, focus-visible rings | a11y gates; source has no JS for the desktop dropdown at all |
| Mobile tree | cloned DOM, arrow `role="button"` + `aria-label="Show submenu"` + `aria-expanded`, no `aria-controls` | same shape, plus `aria-controls`/`hidden` wiring and labelled social links | source's social links have no accessible name |
| Icons | inlined SVG paths + `icomoon` glyph font (caret/chevron) | `lucide-react` + own inline SVG paths; no icon font shipped | never copy assets/fonts |
| Fonts | self-hosted Open Sans woff2 subsets (300/400/700) | one Google Fonts `<link>` for Open Sans 300/400/700 | no font files copied |
| Band content | empty `.hero` div, body forced to `200vh` | band holds the ten labelled landing panels and provides the scroll length naturally | page must be a real, usable page |
| Footer | none | minimal app-shell strip with the Component Dock credit + computed year | monorepo attribution rule |
| Preloader / jQuery / Bootstrap | none in the rewritten snippet | none | (no delta — kept clean) |

## Design tokens

Extracted from the source stylesheet `css/style.css` (18,843 B) of
`website-menu-01` (live preview
`https://preview.colorlib.com/theme/bootstrap/website-menu-01/` → HTTP 200;
byte-identical archive copy) and cross-checked
against the 1200×972 screenshot.

| Token | Value | Used by |
| --- | --- | --- |
| brand / primary blue | `#007bff` | wordmark full stop, nav hover + `.cl-active`, dropdown top border, sticky wordmark, mobile row hover, arrow `.cl-active` |
| primary shade | `#0056b3` | `a.cl-text-primary:hover` / `:focus` |
| band slate | `#5d5b6a` | the 100vh `.hero` background (the page's canvas) |
| body text | `#212529` | `body{color}`, mobile menu rows |
| nav resting text | `#fff` (wordmark / toggle) and `rgba(255,255,255,.7)` (links), hover + current `#fff` | header over the band |
| nav stuck text | `#000` (links / toggle), `#007bff` (wordmark), hover + current `#007bff` | white sticky bar |
| header resting rule | `1px solid rgba(255,255,255,.1)` | bottom edge over the band |
| header stuck surface | `#fff`, `border-bottom:1px solid transparent`, `box-shadow:4px 0 20px -5px rgba(0,0,0,.1)` | sticky bar |
| dropdown surface | `#fff`, top border `2px solid #007bff`, `box-shadow:0 2px 10px -2px rgba(0,0,0,.1)` | About-us panel (+ its third-level flyout) |
| dropdown row | label `#000`, `padding:9px 20px`, hover `background:#eff1f3`, `min-width:210px` | every dropdown row |
| dropdown motion | `transition:.2s 0s`; `margin-top:20px → 0` + `visibility/opacity` | panel open/close |
| mobile panel | `#fff`, `300px` wide, fixed right, `padding-top:20px`, `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`, `transition:.3s all ease-in-out`, `translateX(110% → 0)` | off-canvas menu |
| mobile rows | `padding:10px 20px`, `#212529` → `#007bff`; level 1 `20px/20px`, level 2 `16px/40px`, level 3 `16px/60px` | off-canvas tree |
| mobile arrow toggle | `36×36`, `border-radius:50%`, hover `#f8f9fa`, `12 px` chevron rotating `180°` | submenu expander |
| veil | `rgba(0,0,0,.5)`, `.3s ease` fade | behind the open panel |
| layout | `.cl-container` `15px` gutters, max-widths `540/720/960/1140` at `sm/md/lg/xl`; `cl-col-6 / cl-col-12 / cl-col-md-10 / cl-col-xl-2` | header columns |
| radii | **0 everywhere**; the only `border-radius` is the mobile arrow's `50%` (plus a normalize `button{border-radius:0}`) | square shape language with one circular control |
| motion | `a{transition:.3s all ease}` site-wide; dropdown `.2s`; panel `.3s ease-in-out`; veil `.3s ease` | all interactive transitions |
| type | `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — weights **300 / 400 / 700** (three woff2 subsets per range) | whole page |
| type scale | body `1rem / 1.5`; global `h1{2.5rem}`, `h3, .cl-h3{1.75rem}`, weight `500`, `line-height:1.2`, `margin-bottom:.5rem`; **logo overridden to `24px`**; nav links `13px` uppercase; dropdown rows inherit `1rem`; mobile level-1 `20px` | headings + nav |
| spacing rhythm | nav links `padding:20px 20px`; logo row via `cl-row.cl-align-items-center`; dropdown rows `9px 20px`; mobile rows `10px 20px`; band = `100vh` | header / panel |

**Google Fonts map:** one `<link>` for **Open Sans** 300;400;700
(`https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap`)
— the source's three self-hosted woff2 weights are never copied. Icons from
`lucide-react` (`Menu`, `X`, `ChevronDown`, `ChevronRight`/`ChevronUp`, plus the
app's own inline SVG brand paths for facebook/twitter/linkedin, as in
`gridhost`'s footer).

## Requirements

### Feature: Header floating over the band (transparent → solid white when stuck)

#### Scenario: Wordmark, the link row and the social marks render over the band

- **Given** the page loads
- **When** the header renders at ≥1200 px
- **Then** it is **absolutely positioned at the top of the page** (`top:0;
  width:100%`, above the band, `margin-bottom:0`, `z-index` high enough to sit
  over the panel) with a **transparent** surface so the `#5d5b6a` band shows
  through, and a **1 px `rgba(255,255,255,.1)` bottom rule**
- **And** its left column holds the app's own **wordmark** rendered as the page's
  single `h1` at **24 px** (the sheet's global `h1` size is overridden), white,
  with its accent mark — if it keeps the source's full-stop shape — in
  **`#007bff`**
- **And** its right column holds a `nav` whose row is a `ul` of **four** primary
  items in the source's order (home, about, blog, contact) plus **three
  icon-only social links** — each link **13 px uppercase**, `padding:20px 20px`,
  `rgba(255,255,255,.7)`, turning **`#fff`** on hover/focus and marked current
  with `aria-current="page"`; the social links get `padding-left/right:5px` and
  an accessible name (the source ships them unlabelled — do not repeat that)
- **And** below 1200 px the whole desktop row, the socials included, is hidden and
  the hamburger column (`padding:1rem 0`, inline `top:3px` nudge) shows a
  `lucide-react` `Menu` glyph sized like the source's `.cl-h3` (≈28 px) inside a
  real `button` with `aria-expanded`, `aria-controls` and a visible
  `focus-visible` ring
- **And** no Colorlib or source-brand string appears anywhere in the header

#### Scenario: The dropdown and its nested third level open on hover and focus

- **Given** the header renders at ≥1200 px
- **When** the "about" item is hovered or focused
- **Then** a **white** panel appears beneath it, positioned `top:100%` with
  `min-width:210px`, a **`2px solid #007bff` top border**,
  `box-shadow:0 2px 10px -2px rgba(0,0,0,.1)`, and animates `margin-top` from
  **20 px to 0** while fading in over **`.2s`** (`visibility:hidden → visible`,
  `opacity:0 → 1`)
- **And** the panel follows the source's row list — six rows (team, pricing, faq,
  gallery, services, testimonials) plus a **nested "more" row that owns a
  third-level panel** — each row `padding:9px 20px`, label `#000`, hover
  `background:#eff1f3`, and the nested panel is positioned
  **`left:100%; top:0`** (a flyout to the right)
- **And** the trigger exposes `aria-haspopup` and `aria-expanded`, the panel is
  reachable by keyboard (the source's CSS-only `:hover`/`:focus` has no
  `aria-expanded` at all — add it), `Escape` closes the panel and returns focus
  to the trigger, and the trigger's caret glyph (the source's `\e313`
  `icomoon` character) is a `lucide-react` chevron point-aligned in the row

#### Scenario: Scrolling pins a solid white bar

- **Given** the page has scrolled past the band's top
- **When** the header is measured
- **Then** the bar's surface becomes **`#fff`** with
  `box-shadow:4px 0 20px -5px rgba(0,0,0,.1)` and `border-bottom:1px solid
  transparent`, it stays pinned to the viewport's top at full width, its
  wordmark turns **`#007bff`** and its links **`#000`** (hover/current
  `#007bff`), and the resting translucent hairline is gone
- **And** the freeze/thaw is continuous while scrolling back up (the source
  swaps a `.sticky-wrapper` + `.is-sticky` class; the recreation may use a scroll
  listener, `IntersectionObserver` or `position:sticky`, but the state change and
  the palette swap must match exactly)
- **And** no horizontal jump or layout shift occurs at the transition (the source
  re-measures and fixes the bar's width — reproduce that stability)

### Feature: Off-canvas mobile menu (below 1200 px)

#### Scenario: The toggle slides a 300 px white panel in from the right

- **Given** the page renders below 1200 px
- **When** the hamburger is activated
- **Then** a **300 px** white panel slides in from the right edge
  (`translateX(110%) → 0`, `.3s all ease-in-out`,
  `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`, `padding-top:20px`, full
  viewport height) while the page behind it is covered by a
  **`rgba(0,0,0,.5)`** veil that fades in over `.3s`
- **And** the panel's header carries a **30 px** close glyph
  (`lucide-react` `X`) in a real labelled button, its body scrolls
  (`height:calc(100vh - 52px)`, `padding:0 20px 20px` with extra bottom padding)
  and holds the **same nav tree as the desktop row** — the recreation must render
  one nav and share it (mounting it twice is fine, in the source the DOM is
  cloned) rather than hand-maintaining two copies
- **And** rows are `padding:10px 20px` in **`#212529`** (hover/focus `#007bff`),
  level-1 labels **20 px**, level-2 **`padding-left:40px`, 16 px**, level-3
  **`padding-left:60px`, 16 px**, social rows collapse to inline width, and the
  panel's rows expose `aria-current` for the current page
- **And** the trigger reflects state (`aria-expanded="true"`, `aria-controls`
  pointing at the panel), the panel is a labelled dialog-like region, focus moves
  into it on open and returns to the trigger on close

#### Scenario: Each submenu expands with a 36 px round arrow toggle

- **Given** the panel is open
- **When** a row that owns a submenu is inspected
- **Then** it carries a **generated 36 × 36 round toggle** (`border-radius:50%`,
  `#f8f9fa` hover, a **12 px** chevron that rotates **180°** between collapsed and
  expanded) placed at the row's right edge, with `role="button"`, an accessible
  name ("show submenu" / "hide submenu"), `aria-expanded` and
  **`aria-controls`** pointing at its submenu (the source sets
  `aria-label="Show submenu"` but omits `aria-controls` — add it)
- **And** the submenu is **not rendered visible until expanded** (source:
  `.cl-collapse` = `display:none` unless `.cl-show`) and the toggle is operable
  by both mouse and keyboard with a visible focus ring
- **And** the three levels nest without clipping at 320 px width

#### Scenario: The panel closes four ways

- **Given** the panel is open
- **When** the close glyph, the veil, `Escape`, or a resize to ≥1200 px happens
- **Then** the panel slides closed, the veil is removed and the trigger's
  `aria-expanded` returns to `false` (**each** of the four paths is tested; the
  source's own `mouseup`-outside and `resize > 768 px` handlers are the
  behaviour being reproduced, with the threshold aligned to the row's 1200 px
  breakpoint)
- **And** focus never ends up trapped in the closed panel and the page behind it
  is scrollable again

### Feature: Hero band (flat slate full-viewport canvas with real anchor targets)

#### Scenario: The band renders at full viewport height in the slate token

- **Given** the page loads
- **When** the band below the header is measured
- **Then** it is a full-width **`100vh`** band with a flat **`#5d5b6a`**
  background (no gradient, no image, no overlay) — the source's `div.hero`
  verbatim — and it is the page's **only** content band (structure = header +
  band, 1:1 with the source)
- **And** the page is tall enough to scroll far enough to demonstrate the sticky
  header without artificially padding the body (the source forces
  `body{height:200vh}`; here the band's own content supplies the height)

#### Scenario: Every declared anchor target resolves to a labelled panel

- **Given** the band renders
- **When** any of the app's nav links (primary rows, dropdown rows, third-level
  rows) is activated
- **Then** the page scrolls to a **real, in-band target with a matching `id`**
  (the source declares ten `#*-section` targets that do not exist — the
  recreation materialises each as a labelled panel inside this same band)
- **And** each panel is an own-copy placeholder of the right *kind* (a heading +
  one line, e.g. team → people, pricing → plans, faq → questions, gallery →
  photos, services → offerings, testimonials → quotes, blog → posts, contact →
  a contact block) rendered on the slate surface in white/near-white with an
  accent in **`#007bff`**, with a stable anchor offset so the sticky header
  never covers the panel's heading (`scroll-margin-top` ≥ header height)
- **And** exactly one panel is the `#home` target and it sits at the band's top,
  the panels appear in the same order as the nav's own item order, and no panel
  invents a fake photo of the source (any imagery is a deterministic
  `https://picsum.photos/seed/menutree-<n>/<w>/<h>` placeholder)

### Feature: Page shell and Component Dock attribution

#### Scenario: A minimal footer strip carries the credit

- **Given** the page renders
- **When** the footer is inspected
- **Then** a minimal strip sits below the band (the source has no footer — this is
  an app-shell addition) with a dark surface that continues the slate treatment
  and a **1 px** translucent hairline top edge, holding the app's wordmark and
  exactly **one** link to `https://www.componentdock.com/` branded
  "Component Dock" (new tab, `rel="noreferrer"`) next to a **current year
  computed at render**

#### Scenario: No provenance strings and no copied assets

- **Given** the app source is searched
- **When** it is checked
- **Then** no `colorlib`, "Website Menu 01" or `website-menu-01` string appears
  anywhere in `apps/menutree` (comments included — record the palette as
  design-token notes instead: "brand accent `#007bff` test")
- **And** nothing from the source archive ships: no `css/style.css`, no
  `js/snippet.js`, no `icomoon-subset.woff2`, no `open-sans-*-latin*.woff2`, no
  Open Sans files of any kind, no inlined `icomoon` glyph paths, no `cl-`-prefixed
  utility class names, and no copied copy (the "Brand." wordmark, "About Us",
  "More Links", "Menu One/Two/Three" strings are **not** reproduced verbatim) —
  images, where used, come from picsum and icons from `lucide-react` plus the
  app's own inline SVG brand paths

### Feature: Responsive behaviour

#### Scenario: The header and the band reflow at the two breakpoints

- **Given** the page renders at `xl` (≥1200 px), `lg`/`md` and `sm` widths
- **When** the layout is measured
- **Then** at ≥1200 px the desktop row and socials are visible and the hamburger
  is hidden; below 1200 px the row is gone, the hamburger shows and the
  off-canvas panel is the only navigation
- **And** the band stays `100vh` at every width, its panels stack to a single
  column below `lg`, the dropdown's third-level flyout never opens off-screen
  (the source's `left:100%` flyout is re-anchored or stacked on narrow screens),
  and the page produces **no horizontal overflow at 320 px**
  (`scrollWidth === innerWidth`)

### Feature: Motion, accessibility and reduced motion

#### Scenario: Motion is decorative and fully suppressible

- **Given** the page loads with motion enabled
- **When** the header, dropdown, panel and links are used
- **Then** links transition over **`.3s ease`**, the dropdown opens over
  **`.2s`** (its 20 px slide), and the off-canvas panel and veil run over
  **`.3s`** (`ease-in-out` / `ease`)
- **And** under `prefers-reduced-motion: reduce` those transitions collapse to
  effectively instant, the panel appears without sliding, and all content is
  present immediately (no motion gate on first paint)
- **And** the desktop dropdown, the nested flyout, the panel, every round arrow
  toggle and the hamburger are all keyboard operable with visible
  `focus-visible` rings and state exposed to assistive tech
  (`aria-expanded`, `aria-haspopup`, `aria-controls`, `aria-current`), no
  icon-only control is left unlabelled (the source's social links and its
  dropdown caret are labelled in the recreation), and the type scale never drops
  below 16 px for body copy

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/menutree/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/menutree/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-menutree`
- [ ] `scripts/verify-app.sh menutree` passes: typecheck + lint + knip + fallow +
      vitest at **100 %** coverage + build
- [ ] Screenshot comparison against `website-menu-01.jpg` (1200×972 JPEG): a flat
      **`#5d5b6a`** slate surface filling the frame, a **transparent** header
      strip along its top with a **1 px `rgba(255,255,255,.1)`** bottom rule, a
      white **24 px** "Brand."-shaped wordmark with a **`#007bff`** accent at the
      left, a right-aligned row of **13 px uppercase** near-white links with a
      caret on the "about" item and **three icon-only socials** at the far right,
      and **nothing else in the frame** (the band is deliberately empty)
- [ ] Preview documented correctly in the spec/PR: the slug-only path
      `https://preview.colorlib.com/theme/website-menu-01/` is **HTTP 404** (9 B
      `Not Found`) — the **live preview** is
      `https://preview.colorlib.com/theme/bootstrap/website-menu-01/`
      (**HTTP 200**, 6,103 B, title `Website Menu #1`) with
      `css/style.css?v=f016aacb` (18,843 B) and `js/snippet.js?v=d8fd00d5`
      (3,537 B), both **sha256-identical** to the snippet archive
      `https://preview.colorlib.com/downloads/free/website-menu-01.zip`
      (HTTP 200, 231,882 B → `index.html` 5,900 B), and the 1200×972 screenshot as
      the visual reference (all verified 2026-10-11)
- [ ] Token checks reproduce the source: nav links **13 px uppercase** with
      `padding:20px 20px` and hover **`#007bff`**; wordmark **24 px** with the
      accent in **`#007bff`**; the band **`100vh #5d5b6a`**; the resting header
      rule **`1px solid rgba(255,255,255,.1)`**; the stuck header **white** with
      **`4px 0 20px -5px rgba(0,0,0,.1)`** and links **`#000`**
- [ ] The dropdown matches: white, **`2px solid #007bff`** top border,
      `min-width:210px`, `box-shadow:0 2px 10px -2px rgba(0,0,0,.1)`, rows
      `padding:9px 20px` with **`#eff1f3`** hover, a **third-level panel at
      `left:100%; top:0`**, and the **`.2s` / 20 px → 0** opening motion
- [ ] The off-canvas panel matches: **300 px** wide, white, fixed right,
      `padding-top:20px`, **`-10px 0 20px -10px rgba(0,0,0,.1)`** shadow,
      **`.3s ease-in-out`** slide, body `height:calc(100vh - 52px)` with
      `padding:0 20px 20px`, a **`rgba(0,0,0,.5)`** veil, rows `10px 20px` in
      **`#212529`** (hover `#007bff`), level sizes **20 / 16 / 16 px** at
      `padding-left` **20 / 40 / 60 px**, and **36 × 36 round** arrow toggles with
      a **12 px** chevron rotating **180°** and **`#f8f9fa`** hover
- [ ] The shape language is kept square: **no** rounded corners anywhere except
      the circular arrow toggle (the source's only two `border-radius` values are
      that `50%` and a normalize `button{border-radius:0}`) — do not "modernise"
      the panels or buttons into pills
- [ ] The source's **two contradictory breakpoints** are reconciled openly: the
      desktop row hides below **1200 px** and the panel's auto-close threshold is
      the **same** 1200 px (the source closes at >768 px) — noted in the PR
- [ ] Header state change is continuous and jump-free: pin on scroll, unpin on
      return, no layout shift, no horizontal scrollbar introduced
- [ ] All ten declared anchors (`#home`, `#about`, `#team`, `#pricing`, `#faq`,
      `#gallery`, `#services`, `#testimonials`, `#blog`, `#contact`) resolve to
      real in-band panels with `scroll-margin-top` ≥ the header height; **zero**
      dead `href="#…"` links remain
- [ ] Accessibility: the dropdown issues `aria-haspopup`/`aria-expanded` and
      `Escape` closes it; the mobile arrow toggles carry `aria-controls` +
      `aria-expanded`; the panel is a labelled region with focus moved in and
      returned; the social links have accessible names; every interactive element
      has a visible focus ring; `prefers-reduced-motion: reduce` removes the
      slide/fade motion
- [x] Zero `colorlib` / "Website Menu 01" / `website-menu-01` provenance
      references anywhere in `apps/menutree` (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no woff2 files
      (`open-sans-*.woff2`, `icomoon-subset.woff2`), no `icomoon` glyph
      codepoints (`\e313`, `\e315`, `\f078`), no `cl-`-prefixed utility classes,
      no jQuery/Bootstrap (the rewritten snippet needs neither), no copied strings
- [x] `public/CNAME` = `menutree.free.componentdock.com` and
      `"homepage": "https://menutree.free.componentdock.com"` in
      `apps/menutree/package.json`; `package-lock.json` registers
      `@free-react-templates/menutree`
- [x] Footer links `https://www.componentdock.com/` exactly once ("Component
      Dock") with a computed current year
- [ ] PR description includes: source template (ColorLib Website Menu 01),
      preview URL (`https://preview.colorlib.com/theme/bootstrap/website-menu-01/`
      → **HTTP 200**, 6,103 B, title `Website Menu #1`; the slug-only
      `/theme/website-menu-01/` path 404s; archive
      `https://preview.colorlib.com/downloads/free/website-menu-01.zip` → HTTP 200,
      231,882 B; screenshot 1200×972), the design tokens used (`#007bff` brand,
      `#0056b3` accent hover, `#5d5b6a` band, `#212529` text, `#fff` /
      `#eff1f3` / `#f8f9fa` surfaces, `rgba(255,255,255,.7)` resting links,
      `rgba(0,0,0,.5)` veil, `rgba(0,0,0,.1)` shadows, `2px` accent rule, square
      radii with one `50%` toggle, Open Sans 300/400/700, 13 px uppercase nav,
      24 px wordmark), the structure (transparent header → 100vh slate band, plus
      the fixed off-canvas panel) and what differs (new name + wordmark, own
      labels/copy, lucide + own inline SVG instead of the icon font, Google Fonts
      instead of self-hosted woff2, the ten dead anchors materialised as labelled
      panels, one reconciled breakpoint, added aria/keyboard states, reduced-motion
      handling, footer attribution)
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
