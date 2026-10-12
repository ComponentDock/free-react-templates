# Template: Slidenav (Website Menus)

## Purpose

Slidenav is a **single-band navigation + full-viewport hero** page in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Website Menu 02"** snippet (source slug `website-menu-02` — the Website
Menus family's **coral-band minimal menu**: a **transparent header** floating over
a flat, full-viewport **`#eb4d55` coral band**, carrying a **16 px uppercase 700
white wordmark** at the left and a right-aligned **six-item row**
(home · portfolio · about · services · blog · contact) in **15 px**
`rgba(255,255,255,.7)` that turns **`#fff`** on hover/focus, where every item owns
a **1 px white underline** drawn as a `:before` bar (`width:100%; bottom:0`) that
animates **`scale(0) → scale(1)`** over **`.3s transform ease`** and stays
scaled-up on the current item; a **hamburger that replaces the entire row below
992 px** and slides a **300 px white off-canvas panel** in from the right edge
(`padding-top:20px`, `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`,
`.3s all ease-in-out`) over a **`rgba(0,0,0,.5)` page veil**, its body scrolling
at `height:calc(100vh - 52px)` with `padding:0 20px 150px` and **cloned rows** at
**20 px `#212529`** (`padding:10px 20px`, hover `#eb4d55`) with the current row in
**`#eb4d55`**, a **30 px** close glyph (`hover #ced4da`), and **four close paths**
(the glyph, a click outside, `Escape`, a resize past the panel's threshold); and
**no sticky bar whatsoever** — the source's header is `position:absolute` and
scrolls away with the band, the page being forced to `height:200vh` purely so that
scrolling is visible.

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's section
structure, order and design tokens 1:1 but copies no asset (no images, no font
files, no CSS files, no icon-font glyphs, no text verbatim) and never reuses the
source name.

- **Source:** https://colorlib.com/wp/template/website-menu-02/ (listed in
  TEMPLATES.md `## Website Menus (20)` — the section header is at **line 3071**
  and this item is its **second** entry at **line 3074**; the slug
  `website-menu-02` appears **exactly once** in TEMPLATES.md and in **no** spec or
  doc on main before this one — `git grep -il website-menu-02 origin/main` returns
  only `TEMPLATES.md`)
- **Preview:** `https://preview.colorlib.com/theme/website-menu-02/` returns
  **HTTP 404** (`Not Found`, 9 B) — as with the whole *Website Menus* family, the
  slug-only theme path does **not** resolve. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-02/`**
  (**HTTP 200**, `text/html`, **2,774 B**, title `Website Menu #2`, verified
  2026-10-11), confirmed through the catalog index the preview host itself loads
  (`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
  **633,990 B**, whose entry for this slug is
  `{"name":"Website Menu V02","tag":"Website Menu Templates",
  "url":"https://preview.colorlib.com/theme/bootstrap/website-menu-02/",
  "details":"https://colorlib.com/wp/template/website-menu-02/"}`). Its two
  assets — `css/style.css?v=05c76b1d` (**16,309 B**, sha256
  `b4086b7b407abd2fc35f6526d1ca36a87fa88c495ee9e22fd02390452958b146`) and
  `js/snippet.js?v=863a9219` (**2,525 B**, sha256
  `71830be04d9193264d2dbb5facc3994ebd6288ed9078db92328d36de45e2aafc`) — are
  **byte-identical** to the same two files inside the snippet's own archive
  `https://preview.colorlib.com/downloads/free/website-menu-02.zip`
  (**HTTP 200**, `application/zip`, **230,044 B** — ColorLib's page calls the
  download "225 KB (it was 2.3 MB)" after the September 2026 rewrite). Both the
  archive's `index.html` (2,571 B) and the live page render the **same DOM**: a
  normalised diff of the two shows only the preview host's own head injections
  (two `robots` meta tags, a `cdnjs` `dns-prefetch`, `fetchpriority` on the
  stylesheet link and the `?v=` cache-busters), so the archive is the live
  page's un-versioned twin. Neither the live page nor the archive ships **any
  image** — the 15-entry archive has no `images/` directory at all (the README's
  file list mentions one, the zip does not contain it), the markup has **zero
  `<img>`** elements, and the only artwork is the wordmark text plus **two inline
  SVGs** (a three-bar menu glyph and the close cross) — so no screenshot-only
  fallback was needed.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-02.jpg
  (HTTP 200, `image/jpeg`, **1200×972**, **31,868 B**, opened and inspected
  visually 2026-10-11 — a real JPEG, no conversion needed).
- **New name:** `slidenav` (apps/slidenav, `@free-react-templates/slidenav`) —
  "sliding navigation": the source's own second-band behaviour is the 300 px panel
  that slides in from the right, and the name keeps that subject while touching
  nothing of the source (no `menu`, no number, no source word). Single lowercase
  word, kebab-safe. Verified 2026-10-11: `git grep -il slidenav origin/main`
  returns **zero** hits (no `apps/` folder, no `openspec/specs/` folder, no
  `docs/templates/` folder, no TEMPLATES.md name — and, unlike the near-miss
  `navpane`, no substring inside another template's name such as `navpanel`), and
  `https://colorlib.com/wp/template/slidenav/`,
  `https://preview.colorlib.com/theme/slidenav/` and
  `https://preview.colorlib.com/theme/bootstrap/slidenav/` all return **HTTP 404**,
  so it is not a ColorLib source name either. The source name "Website Menu 02",
  its "Brand" wordmark, its `cl-` utility namespace, its `icomoon` glyph
  codepoints and its copy are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Evidence audit (2026-10-12):** the source `<title>` recorded in this spec is the plain
  raw-HTTP string. A leading horse-emoji prefix that an earlier browser pass recorded
  is added to *every* page title by this container's browser harness (reproduced on
  `example.com`), not by the source. Nothing else in this evidence block changed.

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V02" (page title *"Website Menu V02 - Free
  Minimal Menu Template 2026 - Colorlib"*, source slug `website-menu-02`,
  https://colorlib.com/wp/template/website-menu-02/) — by **Rok Krivec**
  (`datePublished` **2021-01-27T20:21:38+00:00**, `dateModified`
  **2026-09-25T10:42:06+00:00**), the template-details block on the page crediting
  **Colorlib**, *Released September 2026*, *CC BY 3.0*. ColorLib's own
  description: *"An easy to use free minimal menu template that you can quickly
  activate and embed into your website for superb navigability."* The September
  2026 rewrite note: *"this snippet is now plain HTML and CSS plus a few lines of
  vanilla JavaScript: no jQuery, no Bootstrap files, no plugins. The download is
  225 KB (it was 2.3 MB). Use it on its own, or drop it into a Bootstrap 4, 5 or 6
  project and it looks the same."* The sheet is a hand-rolled Bootstrap-4-grid
  look-alike with a `cl-` namespace (`cl-container`, `cl-row`, `cl-col-3` /
  `cl-col-9`, `cl-d-*`, `cl-text-primary`, `cl-text-white`, `cl-font-weight-bold`,
  `cl-nav-link`, `cl-collapse`, `cl-mt-3`, `cl-py-5`, `cl-ml-auto`,
  `cl-text-right`, `cl-align-items-center`, `cl-position-relative`) and is **not**
  a framework skin; the recreation uses Tailwind utilities and reuses none of
  those class names.
- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/website-menu-02/`
  → **HTTP 200**, `text/html`, **2,774 B**, title `Website Menu #2` (the
  slug-only `/theme/website-menu-02/` path is the 404; see Purpose).
  **Reference artifacts (research date 2026-10-11):**
  `/tmp/wm02/live.html` (live preview HTML, 2,774 B),
  `/tmp/wm02/style.css` (16,309 B, `text/css`, sha256 `b4086b7b…`),
  `/tmp/wm02/snippet.js` (2,525 B, sha256 `71830be0…`),
  `/tmp/wm02/wm02.zip` (230,044 B) extracted to
  `/tmp/wm02/x/website-menu-02/` → `index.html` (2,571 B), `css/style.css`,
  `js/snippet.js`, `README.md` (1,264 B) and `fonts/` (six **Open Sans** woff2
  subsets — 300/400/700 × latin/latin-ext — plus `icomoon-subset.woff2`, 408 B),
  `/tmp/wm02/cl.html` (the ColorLib template page, 108,855 B, HTTP 200 — source of
  the description / author / date / download-size facts), `/tmp/wm02/catalog.js`
  (the preview host's 633,990 B catalog index that maps the slug to its
  `theme/bootstrap/` preview), `/tmp/wm02/home.html` (the preview host's own
  8,848 B landing page that names the catalog bundle) and `/tmp/wm02/wm02.jpg`
  (the 1200×972 screenshot).
- **Live render cross-check (2026-10-11, 780×437 and 1280×800 viewports):** the
  live preview was opened in a browser and its computed styles read back, so the
  values below are confirmed on real elements, not just parsed out of the sheet —
  `.hero` measures **765 × 437 = the entire viewport** with
  `background-color: rgb(235, 77, 85)` = **`#eb4d55`**; `.site-navbar` is
  `position:absolute; top:0; width:765px; z-index:1999`, **transparent**
  (`rgba(0,0,0,0)`) with **`border-bottom:0px none`** — unlike its sibling menu 01
  there is **no hairline** under the header — and its padding computes to
  **`16px`** at ≥992 px but **`48px 16px`** below 992 px (the sheet's
  `@media (max-width:991.98px){.site-navbar{padding-top:3rem;padding-bottom:3rem}}`);
  `.site-logo` is **16 px** (the sheet's global `h1`/logo sizes never apply — this
  markup has **no heading element at all**) and `.site-logo a` is
  `text-transform:uppercase; color:#fff; font-weight:700`; `.site-menu.main-menu
  > li > a` is **`font-size:15px; padding:20px 0; margin:0 15px;
  color:rgba(255,255,255,.7)`** (the current item `li.cl-active > a` computed
  **`rgb(255,255,255)`**), each item's `::before` bar measuring **`width:100%;
  height:1px; background:rgb(255,255,255); bottom:0`** with the **current** item's
  transform matrix at scale **1** and every other item's at scale **0**
  (`matrix(0, 0, 0, 0, 0, 0)`) — the underline mechanism, verified live;
  `body` computes **Open Sans**, 16 px, `rgb(33,37,41)`, height **874 px**
  (= `200vh`) with `scrollHeight` 874 px, so the page really scrolls; the
  off-canvas `.site-mobile-menu` measures **300 px** wide, `position:fixed;
  right:0; padding-top:20px; background:#fff`, `transform:translateX(330px)`
  (110 % of 300), `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`,
  `transition:0.3s ease-in-out`, full viewport height, with a
  `.site-mobile-menu-body` of **385 px** (= `calc(100vh - 52px)`) and
  `padding:0px 20px 150px`; below 992 px `.site-navigation` computes
  `display:none` while the hamburger's wrapper `span.cl-d-inline-block.cl-d-lg-none`
  shows, and the cloned `.site-nav-wrap` rows measure **20 px / `padding-left:20px`**
  with the current row **`rgb(235, 77, 85)`** (`#eb4d55`) and all others
  **`rgb(33, 37, 41)`**. The hamburger glyph (`.icon-menu.cl-h3.cl-text-white`) is
  **28 px** (`.cl-h3` = `1.75rem`) and the close glyph
  (`.site-mobile-menu-close span`) is **30 px**.
  **Behaviour probed live:** activating the toggle adds `offcanvas-menu` to
  `<body>`, flips the toggle's `aria-expanded` to `"true"` (the script sets it),
  copies `cl-active` onto the toggle **and** onto the close glyph, and adds
  `cl-active` to the arrow class list; dispatching `Escape` clears the body class
  again, as does a resize to ≥768 px (the script's own handler).
  **Harness caveats (both cost a false alarm, neither is a source bug):** the
  browser tab reports `document.hidden === true`, so real scroll/hover events do
  not fire and class-triggered style recalcs can return the **stale** value
  (`getComputedStyle` kept reporting `transform:matrix(1,0,0,1,330,0)` after the
  panel's class was already set, and reported the hover-only `::before` transform
  as `none`) — read the rule, dispatch the event and re-read instead of concluding
  the page is broken; and raw `Input.dispatchMouseEvent` calls time out against
  the daemon, so `:hover` colours are verified from the sheet (whose rule is
  unambiguous) rather than by synthetic pointer moves.
- **Screenshot (1200×972 JPEG):** a browser-chrome mock framing a **single flat
  coral surface** that fills the whole frame — the `#eb4d55` band. Across the top
  sits the header: at the left the wordmark **"BRAND"** in **white, uppercase,
  bold** (≈16 px); at the right a row of six small links in **near-white** —
  `Home` with a **thin white underline** under it, then `Portfolio`, `About`,
  `Services`, `Blog`, `Contact`. There is **no** visible header background, **no**
  hairline under the header, **no** photo, **no** headline, **no** cards and
  **no** footer. Below the header the frame is empty coral — which is exactly the
  source's DOM: a header plus an empty full-viewport `.hero` div. That emptiness
  is the design; the deliverable is the navigation, and the band exists as the
  scrolling canvas that makes the transparent-header and off-canvas behaviours
  visible.
- **Source DOM (from the live page and its byte-identical archive `index.html`):**
  - `div.site-mobile-menu.site-navbar-target` — the off-canvas panel, a sibling of
    the header, containing `.site-mobile-menu-header > .site-mobile-menu-close.cl-mt-3`
    (an inline three-path **close SVG**, `span.icon-close2.js-menu-toggle`) and an
    **empty** `.site-mobile-menu-body` that JavaScript fills by cloning the desktop
    nav.
  - `header.site-navbar.site-navbar-target[role="banner"] > .cl-container >
    .cl-row.cl-align-items-center.cl-position-relative` with two columns:
    - `div.cl-col-3 > div.site-logo > a[href="index.html"].cl-font-weight-bold`
      whose text is **`Brand`** — a plain anchor, **no heading, no accent glyph, no
      full stop** (the sibling menu 01's "Brand." + blue period is **not** present
      here);
    - `div.cl-col-9.cl-text-right` holding
      (a) `span.cl-d-inline-block.cl-d-lg-none > a[href="#"].cl-text-primary
      .site-menu-toggle.js-menu-toggle.cl-py-5 > span.icon-menu.cl-h3.cl-text-white`
      — the hamburger, whose anchor colour is the sheet's `#007bff` but whose only
      visible content is the **white** 28 px inline three-bar SVG, so the blue
      never actually shows on screen; and
      (b) `nav.site-navigation.cl-text-right.cl-ml-auto.cl-d-none.cl-d-lg-block
      [role="navigation"] > ul.site-menu.main-menu.js-clone-nav.cl-ml-auto` with
      six `li`: **Home** (`li.cl-active`), Portfolio, About, Services, Blog,
      Contact — each a single `a.cl-nav-link[href="#"]`, with **no** `.has-children`
      item, **no** dropdown and **no** social link.
  - `div.hero` — literally `<div class="hero"></div>`, styled
    `.hero{height:100vh; width:100%; background:#eb4d55}`.
  - `script src="js/snippet.js"` — the only script; it clones the nav into the
    panel, wires `.arrow-collapse` toggles **if** `.has-children` rows exist,
    toggles `body.offcanvas-menu` from `.js-menu-toggle`, and closes on a
    `document` `mouseup` outside the panel, on `Escape`, and on a resize wider
    than **768 px**.
- **Section order (source, top → bottom):** 1. `header.site-navbar` (transparent,
  absolutely positioned **over** the band) · 2. `div.hero` (100vh flat `#eb4d55`
  band) — plus the fixed off-canvas panel, which is chrome rather than a band.
  There is **no** other section and **no** footer: the page is 2 bands, and the
  band is deliberately empty.
- **Declared-but-missing anchor targets:** every one of the six menu links is
  `href="#"` — the source declares **no** fragment targets at all and every link
  is therefore dead. The recreation materialises each of the six labels (home,
  portfolio, about, services, blog, contact) as a labelled landing panel **inside
  the same coral band** (see the requirement below), so no link is dead while the
  band count and order stay 1:1 with the source and the page still provides the
  scroll length the source fakes with `body{height:200vh}`.
- **No sticky header, no dropdown, no socials — deliberately.** The sheet keeps
  the `has-children` caret rule (`content:"\e313"` from the `icomoon` font) and
  the mobile `.arrow-collapse` rules (36 × 36, `border-radius:50%`, `#f8f9fa`
  hover, a 12 px `\f078` chevron that rotates 180° when collapsed) plus a
  `.cl-collapse:not(.cl-show){display:none}` rule, but **none of that machinery is
  used by this template's markup** — there is not a single `.has-children` row in
  the source HTML — and the sheet contains **no** `.sticky-wrapper` / `.is-sticky`
  rules and the script contains **no** sticky code (contrast the sibling menu 01,
  which has both). The recreation must therefore ship a **flat, single-level menu
  and no pinned bar**: the header is transparent, scrolls away with the page, and
  must not be "improved" into a sticky nav.

### Similarities to and differences from the sibling prep (ColorLib Website Menu 01 → `menutree`)

Both are 2-band header-over-a-flat-band snippets from the same September 2026
rewrite and share the sheet's `cl-` utility layer, the 300 px off-canvas panel,
the `rgba(0,0,0,.5)` veil, the `rgba(0,0,0,.1)` shadows and Open Sans. The
recreation must not blur them together — menu 02 differs in **every** visible
token: band **`#eb4d55` coral** (not `#5d5b6a` slate), **no header hairline**,
wordmark **16 px, no accent glyph, no full stop** (not 24 px + blue period), links
**15 px, sentence case, `padding:20px 0`, `margin:0 15px`** with a **white sliding
underline** (not 13 px uppercase, `padding:20px 20px`, hover-blue), **six** items
with **no dropdown and no socials**, the **992 px** `lg` breakpoint (not 1200 px
`xl`), and **no sticky bar at all**.

### Deltas vs the reference (deliberate, documented)

| Area | Source | Recreation | Why |
| --- | --- | --- | --- |
| Name / wordmark | "Website Menu 02", wordmark "Brand" | `slidenav`, own wordmark | new-original-name rule |
| Nav labels | Home · Portfolio · About · Services · Blog · Contact | same *kind* of row (own labels permitted), same order and count | paraphrase rule — keep the row's shape |
| Dead anchors | six `href="#"` links, no targets anywhere | each label becomes a real labelled panel inside the band | no dead links / a11y |
| Page heading | **none** (the wordmark is a plain `a`) | the wordmark is rendered as the page's single `h1`, visually identical (16 px, uppercase, 700, white) | a page needs one top-level heading |
| Band content | empty `.hero` div, body forced to `200vh` | band holds the six labelled landing panels, which supply the scroll length naturally | page must be a real, usable page |
| Panel breakpoint | row hidden <992 px, panel auto-closes at >768 px | one consistent threshold (`lg`/992 px) for both | the source's two thresholds contradict each other |
| Hamburger semantics | `<a href="#">` with no accessible name, no `aria-controls`; JS adds `aria-expanded` | a real `button` with an accessible name, `aria-expanded`, `aria-controls` and a `focus-visible` ring | a11y gates; the source's control is an unlabelled anchor |
| Panel semantics | plain `div`, focus never moved, no region label | labelled dialog-like region with `aria-controls`-linked toggle, focus moved in and returned | a11y gates |
| Veil click | `document` `mouseup` outside the panel | explicit veil element that closes on click, plus the same outside-click path | the veil is the visible affordance; make it operable |
| Icons | two inline SVG paths + `icomoon` glyph codepoints for the unused dropdown/arrow machinery | `lucide-react` (`Menu`, `X`) and own inline SVG paths; no icon font shipped | never copy assets/fonts |
| Fonts | six self-hosted Open Sans woff2 subsets (300/400/700) | one Google Fonts `<link>` for Open Sans 300/400/700 | no font files copied |
| Sticky header | none (absolute, scrolls away) | none — **kept** | match the source; do not add behaviour it lacks |
| Dropdowns / submenus / socials | `has-children`/arrow/`.cl-dropdown` CSS exists but the markup uses none of it | flat six-item menu, no dropdown machinery, no socials | match the source markup 1:1; dead CSS is not a feature |
| Footer | none | minimal app-shell strip with the Component Dock credit + computed year | monorepo attribution rule |
| Preloader / jQuery / Bootstrap | none in the rewritten snippet | none | (no delta — kept clean) |

## Design tokens

Extracted from the source stylesheet `css/style.css` (16,309 B) of
`website-menu-02` (live preview
`https://preview.colorlib.com/theme/bootstrap/website-menu-02/` → HTTP 200;
byte-identical archive copy) and cross-checked against the live render and the
1200×972 screenshot.

| Token | Value | Used by |
| --- | --- | --- |
| band coral | `#eb4d55` | the 100vh `.hero` background (the page's canvas) |
| current/accent coral | `#eb4d55` | `.site-menu .cl-active` colour rule, `.has-children:hover > a`, mobile row hover, mobile `.cl-nav-link.cl-active` and `li.cl-active > a` — i.e. the same coral is both the band and the accent |
| secondary blue | `#007bff`, hover/`:focus` `#0056b3` | `a` colours, `.cl-text-primary` (the off-canvas toggle anchor only — its visible glyph is the white span) |
| body text | `#212529` | `body{color}`, off-canvas rows |
| header text | `#fff` (wordmark, hamburger glyph), `rgba(255,255,255,.7)` (links), hover + current `#fff` | header over the band |
| underline bar | `#fff`, `width:100%`, `height:1px`, `bottom:0`, `transform:scale(0) → scale(1)`, `transition:.3s transform ease` | every nav item; scaled up on the current one |
| header surface | transparent (`rgba(0,0,0,0)`), `position:absolute; top:0; width:100%; z-index:1999`, **no** border-bottom | header over the band |
| header padding | `1rem` (16 px) at ≥992 px; `3rem 1rem` (48 px 16 px) below 992 px | header |
| off-canvas panel | `#fff`, `300px` wide, fixed right, `padding-top:20px`, `z-index:2000`, `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`, `transition:.3s all ease-in-out`, `translateX(110% → 0)` | mobile menu |
| panel body | `height:calc(100vh - 52px)`, `overflow-y:scroll`, `padding:0 20px 20px` + `padding-bottom:150px` | panel scroll area |
| panel rows | `a{padding:10px 20px; color:#212529}` → `#eb4d55` on hover; level-1 label `20px`, `padding-left:20px` | cloned nav tree |
| panel close glyph | `30px`, hover `#ced4da`, header padding `0 20px`, `margin-top:8px` (`.cl-mt-3` = `1rem` on the wrapper) | panel header |
| veil | `rgba(0,0,0,.5)`, `z-index:1`, `transition:.3s all ease`, `opacity:0`/`visibility:hidden` until `body.offcanvas-menu` | behind the open panel |
| layout | `.cl-container` `15px` gutters, max-widths `540/720/960/1140` at `sm/md/lg/xl`; header columns `cl-col-3` (logo) + `cl-col-9` (row/toggle); `.cl-row.cl-align-items-center` | header |
| redundant machinery (present in the sheet, unused by this markup) | `#f8f9fa` (arrow-toggle hover), `#6c757d` (`.cl-nav-link.disabled`), `border-radius:50%` (mobile arrow toggle), `content:"\e313"` (caret), `\f078` (12 px chevron), `.cl-collapse:not(.cl-show){display:none}` | **do not** build these — they belong to the family's dropdown variants, not to menu 02's flat markup |
| radii | **0 everywhere** (the sheet's only `border-radius` values are a normalize `button{border-radius:0}` and the unused arrow toggle's `50%`) | square shape language |
| motion | `a{transition:.3s all ease}` site-wide; panel `.3s all ease-in-out`; veil `.3s all ease`; no sticky transition exists | all interactive transitions |
| type | `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — weights **300 / 400 / 700** (three woff2 subsets per latin range) | whole page |
| type scale | body `1rem / 1.5`, `#212529`; wordmark `1rem` uppercase 700; nav links `15px`; panel level-1 rows `20px`; close glyph `30px`; hamburger glyph `1.75rem` (28 px); global `h1{2.5rem}`, `h3,.cl-h3{1.75rem}`, headings `font-weight:500; line-height:1.2; margin-bottom:.5rem` (the markup uses **no** heading) | header / panel |
| spacing rhythm | nav links `padding:20px 0` + `margin:0 15px`; header `1rem` (16 px) / `3rem 1rem` below 992; panel rows `10px 20px`; panel `padding-top:20px` + body `0 20px 150px`; band = `100vh` | header / panel |

**Google Fonts map:** one `<link>` for **Open Sans** 300;400;700
(`https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap`)
— the source's six self-hosted woff2 subsets are never copied. Icons from
`lucide-react` (`Menu`, `X`); no `icomoon` codepoints and no icon font.

## Requirements

### Feature: Header floating over the coral band

#### Scenario: The wordmark and the six-item row render over the band

- **Given** the page loads
- **When** the header renders at ≥992 px
- **Then** it is **absolutely positioned at the top of the page** (`top:0;
  width:100%`, above the band, `z-index` 1999, `padding:1rem`) with a **fully
  transparent** surface — no background, no backdrop blur, **no bottom border or
  hairline of any kind** — so the `#eb4d55` band shows through untouched
- **And** its left column (a 3/12 grid column) holds the app's own **wordmark** as
  the page's single `h1`, rendered **16 px, uppercase, `font-weight:700`, white**,
  with **no accent glyph and no trailing punctuation** (the source's wordmark is a
  bare "Brand" anchor; only the *shape* — short uppercase bold wordmark at the
  left edge — is reproduced)
- **And** its right column (a 9/12 column, right-aligned) holds a `nav` whose row
  is a `ul` of **exactly six** items in the source's order (home, portfolio,
  about, services, blog, contact), each link **15 px, sentence case**,
  `padding:20px 0`, `margin:0 15px`, colour **`rgba(255,255,255,.7)`**, turning
  **`#fff`** on hover **and** focus (`!important` in the source, so it must win
  over any inherited colour), with `aria-current="page"` on the current one and
  **no** dropdown, no caret, no submenu and no social link
- **And** nothing in the header references Colorlib or the source name
- **And** below 992 px the entire row is hidden (`display:none`) and the header's
  padding grows to `3rem 1rem` (48 px top/bottom) exactly as the sheet does

#### Scenario: The current item is marked by a 1 px underline that scales in

- **Given** the row renders at ≥992 px
- **When** an item is hovered, focused, or is the current one
- **Then** a **1 px white bar spanning the full width of the link** appears along
  its bottom edge (the source's `:before`: `width:100%; height:1px; bottom:0;
  left:0; background:#fff; transform:scale(0)`), animated to
  **`scale(1)`** over **`.3s transform ease`** — a scale-in, **not** a fade and
  **not** a slide
- **And** the current item ships **already scaled up** (measured live: the current
  item's `::before` transform matrix is scale **1**, every other item's is scale
  **0**), so the current-page marker is visible with no interaction at all
- **And** the bar sits inside the link's own box (which is `padding:20px 0` tall),
  so the underline lands at the row's baseline area rather than at the header's
  bottom edge — the screenshot's short bar under `Home` is this element

### Feature: Off-canvas mobile menu (below 992 px)

#### Scenario: The toggle slides a 300 px white panel in from the right

- **Given** the page renders below 992 px
- **When** the hamburger is activated
- **Then** a **300 px** white panel slides in from the right edge
  (`translateX(110%) → 0`, `.3s all ease-in-out`, `padding-top:20px`,
  `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`, full viewport height,
  `z-index` 2000 — above the header's 1999) while the page behind it is covered by
  a **`rgba(0,0,0,.5)`** veil fading in over **`.3s ease`** at `z-index` 1
- **And** the panel's header strip (`padding:0 20px`) carries a **30 px** close
  glyph (`lucide-react` `X`, hover **`#ced4da`**) inside a real labelled `button`,
  and its body scrolls (`height:calc(100vh - 52px)`, `overflow-y:auto`,
  `padding:0 20px`, extra `padding-bottom:150px`) while holding the **same six-item
  nav tree as the desktop row** — the recreation must render one nav and share it
  (in the source the DOM is cloned; in React, mount the same component twice)
  rather than hand-maintaining two copies
- **And** rows are `padding:10px 20px` in **`#212529`** (hover/focus `#eb4d55`),
  level-1 labels **20 px** with `padding-left:20px`, the current row in
  **`#eb4d55`**, and each row exposes `aria-current` for the current page
- **And** the toggle is a real `button` (the source's is an `<a href="#">` with
  **no accessible name**) carrying an accessible name, `aria-expanded` that tracks
  the panel, and `aria-controls` pointing at the panel; the panel is a labelled
  region, focus moves into it on open and returns to the toggle on close
- **And** the hamburger's visible glyph is the **white** 28 px three-bar icon
  (`.cl-h3` = `1.75rem` at `cl-text-white`), matching the source where the anchor's
  own `#007bff` colour is never visible — put the tone on the glyph, not on the
  control's text colour, and give it a visible `focus-visible` ring

#### Scenario: The panel closes four ways

- **Given** the panel is open
- **When** the close glyph, the veil/outside area, `Escape`, or a resize to ≥992 px
  happens
- **Then** the panel slides closed, the veil disappears and the toggle's
  `aria-expanded` returns to `false` (**each** of the four paths is tested; the
  source's own `document mouseup`-outside, `Escape` and `resize` handlers are the
  behaviour being reproduced, but its resize threshold of **768 px** is aligned to
  the row's own **992 px** breakpoint — the reconciliation is called out in the PR)
- **And** focus never ends up trapped inside the closed panel and the page behind
  it is scrollable again
- **And** with no `.has-children` row present, no submenu, no arrow toggle and no
  `display:none`-until-expanded machinery is shipped (the source's markup has none
  — the sheet's leftover rules for them are not a feature to reproduce)

### Feature: Hero band (flat coral full-viewport canvas with real anchor targets)

#### Scenario: The band renders at full viewport height in the coral token

- **Given** the page loads
- **When** the band below the header is measured
- **Then** it is a full-width **`100vh`** band with a flat **`#eb4d55`**
  background (no gradient, no image, no overlay, no pattern) — the source's
  `div.hero` verbatim — and it is the page's **only** content band (structure =
  header + band, 1:1 with the source)
- **And** the header floats **over** it, so the coral is visible behind the
  wordmark and the link row, and scrolling moves the (non-sticky) header away with
  it — **no** pinned bar, **no** `position:sticky`, **no** scroll-triggered
  surface change may be added

#### Scenario: Every nav link resolves to a labelled panel

- **Given** the band renders
- **When** any of the six nav links is activated (desktop row or panel row)
- **Then** the page scrolls to a **real, in-band target with a matching `id`**
  (home, portfolio, about, services, blog, contact — the source's links are all
  `href="#"` with no target at all; the recreation materialises each label as a
  labelled panel inside this same band)
- **And** each panel is an own-copy placeholder of the right *kind* (home → an
  intro line, portfolio → work samples, about → a short story, services →
  offerings, blog → posts, contact → a contact block) rendered on the coral
  surface in white/near-white with the sheet's own **`#007bff`** as the accent,
  with a stable anchor offset so nothing is hidden under the header
  (`scroll-margin-top` ≥ the header height)
- **And** exactly one panel is the `#home` target at the band's top, the panels
  appear in the same order as the nav's own items, the band itself still fills the
  viewport in its coral token, and no panel invents a fake photo of the source (any
  imagery is a deterministic
  `https://picsum.photos/seed/slidenav-<n>/<w>/<h>` placeholder)

### Feature: Page shell and Component Dock attribution

#### Scenario: A minimal footer strip carries the credit

- **Given** the page renders
- **When** the footer is inspected
- **Then** a minimal strip sits below the band (the source has no footer — this is
  an app-shell addition) on a dark surface that closes the coral treatment, with a
  **1 px** translucent hairline top edge, holding the app's wordmark and exactly
  **one** link to `https://www.componentdock.com/` branded "Component Dock" (new
  tab, `rel="noreferrer"`) next to a **current year computed at render**

#### Scenario: No provenance strings and no copied assets

- **Given** the app source is searched
- **When** it is checked
- **Then** no `colorlib`, "Website Menu 02" or `website-menu-02` string appears
  anywhere in `apps/slidenav` (comments included — record the palette as
  design-token notes instead: "band coral `#eb4d55`", "panel text `#212529`")
- **And** nothing from the source archive ships: no `css/style.css`, no
  `js/snippet.js`, no `open-sans-*-latin*.woff2`, no `icomoon-subset.woff2`, no
  font files of any kind, no `icomoon` glyph codepoints (`\e313`, `\f078`), no
  `cl-`-prefixed utility class names (including the unused `cl-dropdown` /
  `cl-collapse` / `arrow-collapse` machinery), no copied copy (the "Brand"
  wordmark string is not reproduced verbatim) — images, where used, come from
  picsum and icons from `lucide-react`

### Feature: Responsive behaviour

#### Scenario: The header and the band reflow at the breakpoint

- **Given** the page renders at `lg` (≥992 px), `md` and `sm` widths
- **When** the layout is measured
- **Then** at ≥992 px the six-item row is visible and the hamburger is hidden;
  below 992 px the row is gone, the header's vertical padding grows to 48 px and
  the off-canvas panel is the only navigation
- **And** the band stays `100vh` at every width and its panels stack to a single
  column below `lg`
- **And** the page produces **no horizontal overflow at 320 px**
  (`scrollWidth === innerWidth`) and the open panel never exceeds the viewport
  width

### Feature: Motion, accessibility and reduced motion

#### Scenario: Motion is decorative and fully suppressible

- **Given** the page loads with motion enabled
- **When** the header, links and panel are used
- **Then** links transition over **`.3s ease`**, the underline scales in over
  **`.3s transform ease`**, and the panel and veil run over **`.3s`**
  (`ease-in-out` / `ease`)
- **And** under `prefers-reduced-motion: reduce` those transitions collapse to
  effectively instant, the panel appears without sliding, and all content is
  present immediately (no motion gate on first paint)
- **And** the toggle, the close button, the veil and every nav link are keyboard
  operable with visible `focus-visible` rings and state exposed to assistive tech
  (`aria-expanded`, `aria-controls`, `aria-current`), no icon-only control is left
  unlabelled, the veil is not the only way to dismiss the panel, and body copy
  never drops below 16 px

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-slidenav`
- [ ] `scripts/verify-app.sh slidenav` passes: typecheck + lint + knip + fallow +
      vitest at **100 %** coverage + build
- [ ] Screenshot comparison against `website-menu-02.jpg` (1200×972 JPEG): a flat
      **`#eb4d55`** coral surface filling the frame, a **transparent** header strip
      across its top with **no** hairline, a **white uppercase bold ≈16 px**
      wordmark at the left, a right-aligned row of **six near-white 15 px** links
      with a **thin white underline** beneath the current one, and **nothing else
      in the frame** (the band is deliberately empty)
- [ ] Preview documented correctly in the spec/PR: the slug-only path
      `https://preview.colorlib.com/theme/website-menu-02/` is **HTTP 404** (9 B
      `Not Found`) — the **live preview** is
      `https://preview.colorlib.com/theme/bootstrap/website-menu-02/`
      (**HTTP 200**, 2,774 B, title `Website Menu #2`) with
      `css/style.css?v=05c76b1d` (16,309 B, sha256 `b4086b7b…`) and
      `js/snippet.js?v=863a9219` (2,525 B, sha256 `71830be0…`), both
      **sha256-identical** to the snippet archive
      `https://preview.colorlib.com/downloads/free/website-menu-02.zip`
      (HTTP 200, 230,044 B → `index.html` 2,571 B, identical to the live DOM bar
      the host's own head injections), and the 1200×972 screenshot as the visual
      reference (all verified 2026-10-11)
- [ ] Token checks reproduce the source: band **`100vh #eb4d55`**; header
      **transparent, `position:absolute; top:0; z-index:1999`, no border-bottom**,
      `padding:1rem` (16 px) at ≥992 px and `3rem 1rem` (48 px 16 px) below; links
      **15 px** with `padding:20px 0`, `margin:0 15px`,
      `rgba(255,255,255,.7)` → **`#fff`** on hover/focus; current item **`#fff`**;
      wordmark **16 px uppercase 700 white** with no accent glyph
- [ ] The underline matches: a **1 px `#fff`** bar, `width:100%`, `bottom:0`,
      **`scale(0) → scale(1)`** over `.3s transform ease`, **already scaled up on
      the current item** — verified live on the source (current item's `::before`
      matrix at scale 1, others at scale 0)
- [ ] The off-canvas panel matches: **300 px** wide, white, fixed right,
      `padding-top:20px`, **`-10px 0 20px -10px rgba(0,0,0,.1)`** shadow,
      `z-index` 2000, **`.3s ease-in-out`** slide of `translateX(110%) → 0`, body
      `height:calc(100vh - 52px)` with `padding:0 20px` and extra
      `padding-bottom:150px`, a **`rgba(0,0,0,.5)`** veil at `z-index` 1, rows
      `10px 20px` in **`#212529`** (hover `#eb4d55`), level-1 labels **20 px**, the
      current row **`#eb4d55`**, and a **30 px** close glyph with a **`#ced4da`**
      hover
- [ ] The shape language is kept square: **no** rounded corners anywhere (the
      sheet's only `border-radius` values are a normalize `button{border-radius:0}`
      and the **unused** arrow toggle's `50%`) — do not "modernise" the panel,
      buttons or the veil into pills
- [ ] **Nothing the source does not do is added:** no sticky/pinned header, no
      scroll-triggered surface change, no dropdown, no submenu, no caret, no
      `.arrow-collapse` toggle, no social links — the source's markup is a flat
      six-item row and the recreation must stay flat
- [ ] Theme reconciliation is stated in the PR: the row hides below **992 px** and
      the panel's auto-close threshold is the **same** 992 px (the source closes at
      >768 px)
- [ ] All six nav labels resolve to real in-band panels with `scroll-margin-top` ≥
      the header height; **zero** dead `href="#…"` links remain anywhere in the app
- [ ] Accessibility: the toggle is a labelled `button` with `aria-expanded` +
      `aria-controls`; the panel is a labelled region with focus moved in and
      returned; the veil is dismissible by keyboard as well as pointer; every
      interactive element has a visible focus ring; `prefers-reduced-motion:
      reduce` removes the slide and the scale-in
- [ ] Zero `colorlib` / "Website Menu 02" / `website-menu-02` provenance references
      anywhere in `apps/slidenav` (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no woff2 files
      (`open-sans-*.woff2`, `icomoon-subset.woff2`), no `icomoon` codepoints
      (`\e313`, `\f078`), no `cl-`-prefixed utility classes, no jQuery/Bootstrap
      (the rewritten snippet needs neither), no copied strings
- [ ] `public/CNAME` = `slidenav.free.componentdock.com` and
      `"homepage": "https://slidenav.free.componentdock.com"` in
      `apps/slidenav/package.json`; `package-lock.json` registers
      `@free-react-templates/slidenav`
- [ ] Footer links `https://www.componentdock.com/` exactly once ("Component
      Dock") with a computed current year
- [ ] PR description includes: source template (ColorLib Website Menu 02), preview
      URL (`https://preview.colorlib.com/theme/bootstrap/website-menu-02/` →
      **HTTP 200**, 2,774 B, title `Website Menu #2`; the slug-only
      `/theme/website-menu-02/` path 404s; archive
      `https://preview.colorlib.com/downloads/free/website-menu-02.zip` → HTTP 200,
      230,044 B; screenshot 1200×972), the design tokens used (`#eb4d55` band +
      accent, `#007bff`/`#0056b3` secondary, `#212529` panel text, `#fff` /
      `rgba(255,255,255,.7)` header text, `#ced4da` close hover,
      `rgba(0,0,0,.5)` veil, `rgba(0,0,0,.1)` shadow, square radii, Open Sans
      300/400/700, 15 px nav, 16 px wordmark, 20 px panel rows), the structure
      (transparent non-sticky header → 100vh coral band, plus the fixed off-canvas
      panel) and what differs (new name + wordmark, own labels/copy, `lucide-react`
      icons instead of the source's inline SVG/icon-font glyphs, Google Fonts
      instead of self-hosted woff2, the six dead `href="#"` links materialised as
      labelled panels, one reconciled breakpoint, added aria/keyboard states, an
      explicit veil element, reduced-motion handling, footer attribution)
