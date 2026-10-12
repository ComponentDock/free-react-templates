# Template: Topdeck (Website Menus)

## Purpose

Topdeck is a **transparent two-tier header over a full-bleed image band** — a
**utility top bar** (envelope + phone on the left, four social glyphs on the
right, `1px` translucent hairline underneath) sitting above a **main nav row**
that carries the wordmark at the **left** and **seven right-aligned nav
items** — one of which is a **multi-level dropdown** ("Pages"-style parent with
a `200 px` white rounded flyout, whose fourth row opens a **second-level flyout
to the right**) — plus a **sticky header** that swaps to a solid brand-blue bar
once the page scrolls, and a **`300 px` white off-canvas panel that slides in
from the RIGHT** for the mobile breakpoint (that panel holds a DOM-cloned copy
of the same nav with **collapsible sub-levels**). Under the whole header sits a
**`100vh` full-bleed background-image band**; the page itself is
`height:200vh` so the sticky behaviour is reachable.

It is an original React recreation of the ColorLib free **"Website Menu V07"**
snippet (source slug `website-menu-07`), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation
matches the source's structure, order and design tokens 1:1 but copies no asset
(no images, no font files, no CSS files, no icon-font glyphs, no inline SVG
paths, no text verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-07/ — page title
  "Website Menu V07 - Free Transparent Menu Template 2026 - Colorlib",
  HTTP 200, 108,855 B, verified 2026-10-11. ColorLib's own description: *"Create
  excellent website navigability with this beautiful, responsive and free
  transparent menu template. It also features a top bar with social media icons
  and multi-level drop-down menu layering."* Author **Rok Krivec**, first
  published **2021-01-28**, released/updated **September 2026** ("this snippet is
  now plain HTML and CSS plus a few lines of vanilla JavaScript: no jQuery, no
  Bootstrap files, no plugins. The download is 638 KB (it was 2.0 MB)"). License
  CC BY 3.0. TEMPLATES.md `## Website Menus (20)` — this item is the family's
  **seventh** entry at **line 3079**; the slug `website-menu-07` appears exactly
  once in TEMPLATES.md and in no spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-07/` returns
  **HTTP 404** (`Not Found`, 9 B) — the *Website Menus* family does **not** live
  under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-07/`**
  (**HTTP 200**, `text/html`, **11,155 B**, title `Website Menu #7`, verified
  2026-10-11), and it is the URL recorded for this slug in the preview host's own
  catalog index
  (`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
  633,990 B → `"website-menu-07": {"name":"Website Menu V07","tag":"Website Menu
  Templates","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-07/"}`).
  Its two assets — `css/style.css?v=b6896cbd` (**20,488 B**, `text/css`,
  sha256 `4d86a808fa78a0caa2665632e81dfeb8fafc81fb35ae2baa566c540ef386e03d`) and
  `js/snippet.js` (**3,537 B**, sha256
  `7b7e458aa84647168e673f8b9c09705b1602474681c828bbf630327d3275e0b1`) — are
  **byte-identical** (same sha256, verified) to the copies in the snippet's own
  downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-07.zip`
  (**HTTP 200**, `application/zip`, **653,017 B**; the ColorLib page rounds this
  to "638 KB"), which ships `index.html` (**10,952 B**), `css/style.css`,
  `js/snippet.js`, `README.md`, `images/hero_1.jpg` (**1900×1267** JPEG,
  475,413 B), the **Quicksand** woff2 subsets (400/600/700, latin + latin-ext =
  6 files) and `icomoon-subset.woff2` (424 B — the caret/arrow glyphs
  `\e313`/`\e315`/`\f078`). The archive is the un-versioned readable twin of the
  live preview — its `index.html` differs from the live one only by the preview
  host's cache-busting query string and its extra `noindex` meta tags. Both were
  read for this spec and the live render was cross-checked in a browser (see
  Design reference).
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-07.jpg
  (HTTP 200, served as **AVIF**, 1200×972, 127,529 B, converted to PNG and opened
  and inspected visually 2026-10-11). No screenshot-only fallback was needed — the
  live preview is the primary reference and the archive its readable twin.
- **New name:** `topdeck` (apps/topdeck, `@free-react-templates/topdeck`) — the
  source's defining chrome is a **bar of links above the nav** over a photo, and
  *topdeck* is the nautical term for a vessel's upper deck: the natural companion
  to **starboard** (`website-menu-05`) and **larboard** (`website-menu-06`), the
  family's two sidebar variants already shipped. Single lowercase word,
  kebab-safe. Verified 2026-10-11: a repo-wide search
  (`grep -ril topdeck apps/ openspec/specs/ docs/ TEMPLATES.md`) returns **zero**
  hits (no `apps/` folder, no `openspec/specs/` folder, no `docs/templates/`
  folder, no TEMPLATES.md name), and `https://colorlib.com/wp/template/topdeck/`
  returns **HTTP 404**, so it is not a ColorLib source name either. The source
  name "Website Menu 07", its "Brand" wordmark, its seven labels and its copy are
  never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Evidence audit (2026-10-12):** the source `<title>` recorded in this spec is the plain
  raw-HTTP string. A leading horse-emoji prefix that an earlier browser pass recorded
  is added to *every* page title by this container's browser harness (reproduced on
  `example.com`), not by the source. Nothing else in this evidence block changed.

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V07" (source slug `website-menu-07`,
  https://colorlib.com/wp/template/website-menu-07/), first published
  **2021-01-28**, rewritten in the 2026 build to plain HTML + CSS + vanilla JS,
  exactly like its `-01`…`-06` siblings. Colour-wise this is the **richest**
  variant of the family so far: it is the first one with a **utility top bar**,
  a **sticky** nav row and a **two-level dropdown**, and the first whose shape
  language is **not** fully square (4 px-radius flyouts, a 36 px round
  submenu toggle).
- **CSS namespace:** the sheet is self-contained and `cl-`-prefixed for its
  utilities (`cl-container`, `cl-row`, `cl-col-2/6/10`, `cl-d-none`,
  `cl-d-inline-block`, `cl-d-flex`, `cl-d-lg-none`, `cl-d-lg-block`,
  `cl-d-md-inline-block`, `cl-collapse`, `cl-show`, `cl-dropdown`, `cl-nav-link`,
  `cl-icon`, `cl-h3`, `cl-my-0`, `cl-mr-2`, `cl-mr-4`, `cl-mt-3`, `cl-ml-md-0`,
  `cl-mr-auto`, `cl-p-2`, `cl-pl-0`, `cl-py-3`, plus `cl-active`/`cl-collapsed`
  state classes) and is a hand-rolled Bootstrap-4-grid look-alike — **not** a
  framework skin. Its first 55 lines are a `:where(html) … all: revert` reset so
  the snippet renders identically inside a Bootstrap host page.
- **HTML structure (live preview, 11,155 B — archive twin 10,952 B):** document
  order is exactly — (1) `div.site-mobile-menu.site-navbar-target` (the fixed
  off-canvas panel, **first** in the DOM), (2) `div.site-navbar-wrap` holding
  `div.site-navbar-top` (utility bar) and `div.site-navbar.site-navbar-target
  .js-sticky-header` (which `snippet.js` immediately wraps in a
  `div.sticky-wrapper`), (3) `div.hero`, (4) `script`. There is **no footer and
  no content section at all** — the entire visible page is header chrome plus one
  `100vh` photo band.
- **Utility top bar (`div.site-navbar-top`):** `cl-container.cl-py-3` (16 px
  vertical) › `cl-row.cl-align-items-center` › **`cl-col-6`** left with two
  `cl-d-flex` anchors — envelope glyph + `info@domain.com`
  (`cl-mr-4` = 24 px between them) and phone glyph + `+1 234 4567 8910` — whose
  literal text spans carry `cl-d-none cl-d-md-inline-block` (so **below 768 px
  only the two icons survive**), and **`cl-col-6.cl-text-right`** right with
  **four** social anchors (twitter, facebook, linkedin, instagram) styled
  `cl-p-2` = 8 px padding. The bar's font-size is **`0.8rem` (12.8 px)** and it is
  closed by `border-bottom:1px solid rgba(255,255,255,0.4)` — the only divider on
  the page. Every link inside `.site-navbar-wrap` is forced **white** by
  `.site-navbar-wrap a{color:#fff}`.
- **Main nav row (`div.site-navbar`):** `cl-container` › `cl-row` ›
  **`cl-col-2`** = `h1.cl-my-0.site-logo > a` (the wordmark) and **`cl-col-10`** =
  `nav.site-navigation.cl-text-right[role=navigation]` › an inner
  `div.cl-container` holding (a) the mobile-only toggle wrapper
  `div.cl-d-inline-block.cl-d-lg-none.cl-ml-md-0.cl-mr-auto.cl-py-3` with
  `a.site-menu-toggle.js-menu-toggle.cl-text-white > span.icon-menu.cl-h3`, and
  (b) `ul.site-menu.main-menu.js-clone-nav.cl-d-none.cl-d-lg-block` — the nav row
  is **only rendered at ≥992 px**.
- **The nav is seven items, in source order:** `Home` (`li.cl-active`,
  `href="#home-section"`), `Classes` (`#classes-section`), **`Pages`
  (`li.has-children`, `href="#"`)** whose `ul.cl-dropdown.arrow-top` holds
  `Team`, `Pricing`, `FAQ` and a nested **`li.has-children` → `More Links`**
  containing `Menu One`, `Menu Two`, `Menu Three`, then `About`
  (`#about-section`), `Events` (`#events-section`), `Gallery`
  (`#gallery-section`) and `Contact` (`#contact-section`). `document.
  querySelectorAll('.site-menu .has-children').length === 2` on the live page.
- **Six of the seven rows point at anchors that do not exist** — `index.html`,
  `#home-section`, `#classes-section`, `#about-section`, `#events-section`,
  `#gallery-section`, `#contact-section` are all dead in the snippet, and the
  dropdown's seven entries are all `href="#"`. The recreation must materialise
  those targets (see Requirements).
- **Active/current colour is a specificity accident worth knowing:** the markup
  puts `cl-active` on the **`li`**, so the sheet's
  `.site-menu > li > a.cl-active{color:#fff}` rule **never matches**; the current
  row is white because `.sticky-wrapper .site-navbar ul li.cl-active a{color:#fff}`
  (specificity `0,0,3,3`) outranks the `rgba(255,255,255,0.6)` of
  `.site-navbar .site-navigation .site-menu > li > a` (`0,0,3,2`) — and that rule
  is *not* scoped to `.is-sticky`, so the current row measures **white in both the
  transparent and the stuck state**, while every other row is
  **`rgba(255,255,255,0.6)`** and turns **`#fff`** on hover/focus.
- **Dropdown (live-measured after focusing the `Pages` anchor, 1280×800):**
  `visibility:hidden; opacity:0; margin-top:20px` at rest → `visibility:visible;
  opacity:1; margin-top:0`, `transition:0.2s 0s`, `background:#fff`,
  `border-radius:4px`, `box-shadow:0 0 4px 0 rgba(0,0,0,.25)`, `position:absolute;
  top:100%; left:0` inside a `position:relative` `li`, rect **200 × 156 px**
  (4 rows), rows `min-width:200px`, `padding:0`, `margin:0`, `list-style:none`,
  links `padding:9px 20px`, `display:block`, **14 px**, `color:#343a40`,
  `text-transform:none`, `letter-spacing:normal`, `transition:0s all`; hover/focus
  swaps to `background:#ebeef0; color:#212529`; the first and last row anchors
  carry the matching `4px` corner radii. A CSS **white triangle** sits above it:
  `.cl-dropdown.arrow-top::before` = `border:10px solid transparent;
  border-bottom-color:#fff; left:20%; margin-left:-10px; bottom:100%`. The parent
  link reserves `padding-right:20px` for an **icomoon caret `\e313`** (16 px,
  `top:50%`, `right:0`, `translateY(-50%)`), and a nested `has-children` row uses
  **`\e315`** at `right:20px`. The nested flyout opens to
  **`left:100%; top:0`** with the same surface (measured 200 × 117 px, 3 rows).
- **Sticky header (live-verified, 1280×800):** `snippet.js` wraps
  `.js-sticky-header` in `div.sticky-wrapper` (`position:absolute; z-index:100;
  width:100%`) *in the document flow*, which lands it at document `y = 52 px` —
  i.e. **below the top bar**, which therefore scrolls away while the nav pins.
  Before scrolling the wrapper measures **1265 × 83 px** and `.site-navbar` is
  `static` with `background:rgba(0,0,0,0)`. After `window.scrollTo(0,400)` the
  wrapper gains **`is-sticky`** and `.site-navbar` becomes
  **`position:fixed; top:0; width:1265px; background-color:rgb(0,123,255)`** with
  its links dropping from `padding:20px 10px` to **`10px`** (and the top-level
  `li` still `10px 5px`), inactive labels staying
  `rgba(255,255,255,0.6)` → `#fff !important` on hover and the current row
  `#fff`. The wordmark stays white, 20 px, uppercase, bold in both states.
- **Off-canvas panel (`div.site-mobile-menu`), live-measured at 780×437:**
  `width:300px; position:fixed; right:0; top:0; z-index:2000; padding-top:20px;
  background:#fff; height:100vh; box-shadow:-10px 0 20px -10px rgba(0,0,0,.1);
  transition:.3s all ease-in-out`, at rest
  `transform:matrix(1,0,0,1,330,0)` = `translateX(110%)` — it **slides in from the
  RIGHT** (`body.offcanvas-menu .site-mobile-menu{transform:translateX(0)}`), the
  mirror image of the `-06` sibling. The veil is the page's own `body::before`:
  `rgba(0,0,0,0.5)`, `transition:.3s all ease`, `opacity:0; visibility:hidden;
  z-index:1` at rest → `body.offcanvas-menu:before{opacity:1; z-index:1002;
  visibility:visible}`. The panel header (`float:left`, `padding:0 20px`) holds a
  right-floated close control whose `span` measures **30 px**, `#212529`, with
  `padding-left:10px` and `transition:.3s all ease` → hover `#dee2e6`; its
  `margin-top:8px` is overridden to the measured **16 px** by the `cl-mt-3`
  (`1rem !important`) utility. The panel body is
  `height:calc(100vh - 52px)` (385 px at a 437 px viewport), `padding:20px` with
  `padding-bottom:150px`, `overflow-y:scroll`.
- **The panel's rows are a DOM clone, not a second nav:** `snippet.js` runs
  `nav.cloneNode(true)` on `.js-clone-nav`, renames the clone's class to
  `site-nav-wrap`, strips its id and appends it to `.site-mobile-menu-body` — the
  live page therefore has a second, JS-created copy of the seven rows
  (`document.querySelectorAll('.site-mobile-menu .site-nav-wrap > li').length ===
  7`). The recreation must **render the same nav component twice** (one source of
  truth), never clone DOM.
- **Mobile rows (live-measured):** level 1 = **20 px**, `padding:10px 20px`,
  `color:#212529`, `display:block`; current/hover = **`#007bff`**; level 2 =
  **16 px**, `padding-left:40px`; level 3 = **16 px**, `padding-left:60px`. The
  script injects a submenu toggle into every cloned `has-children`:
  `span.arrow-collapse.cl-collapsed[role=button][aria-label="Show submenu"]
  [aria-expanded=false]`, absolutely positioned `right:0; top:10px`, **36 × 36 px,
  `border-radius:50%`**, hover `background:#f8f9fa`, caret `\f078` at **12 px**
  rotated `-180deg` while open (`cl-collapsed` removes the rotation), and it
  toggles `cl-show` / `cl-collapse` on the child `ul` while flipping
  `aria-expanded` — the panel therefore has **collapsible sub-levels even though
  the desktop dropdown is hover-only**.
- **Panel dismissal (source behaviour, all in `snippet.js`):** the toggle
  (`a.js-menu-toggle`, `aria-expanded` set to `false` on load) adds/removes
  `offcanvas-menu` on `<body>`; a document-level **`mouseup`** closes it unless
  the click landed inside the panel or on a toggle; **`Escape`** closes it; and a
  **`resize` handler closes it whenever `window.innerWidth > 768`**. The top-bar
  socials, the toggle and the off-canvas close glyph all share the
  `js-menu-toggle` class in the source, so clicking any of them toggles the panel
  — the recreation keeps one explicit control (document the choice in the PR).
- **Band (`div.hero`):** `height:100vh; width:100%; background-size:cover;
  background-position:center center; background-repeat:no-repeat`, with the image
  set inline (`images/hero_1.jpg`); measured **1265 × 800 px** at a 1280×800
  viewport. `body` itself is `font-family:"Quicksand", …; background-color:#fff;
  height:200vh; position:relative` (measured 1600 px tall) — the doubled height is
  what makes the sticky header demonstrable, and it is the only thing below the
  band.
- **Screenshot read-through (1200×972, AVIF→PNG):** a browser-chrome mock of the
  live preview at rest. Under the address bar: the **utility bar** — envelope +
  `info@domain.com`, phone + `+1 234 4567 8910` left, four faint white social
  glyphs right — then a hairline, then the **nav row**: `BRAND` in white
  uppercase bold at the **left**, and at the **right** `Home` (fully white,
  current) · `Classes` · `Pages ▾` · `About` · `Events` · `Gallery` · `Contact`
  (all ~60 % white). Everything sits directly on the photo — a full-bleed
  cinderblock-wall shot of three people in muted blue/grey clothing — with no
  scrim, so the chrome floats over the image. That frame — top bar + nav row over
  a `100vh` photo, no content sections — is the design being replicated.
- **Reference artifacts:** `/tmp/wm07/prev.html` (live preview HTML, 11,155 B),
  `/tmp/wm07/style.css` (20,488 B, sha256 `4d86a808…`) and
  `/tmp/wm07/snippet.js` (3,537 B, sha256 `7b7e458a…`) — both **byte-identical**
  to `/tmp/wm07/z/website-menu-07/css/style.css` and `js/snippet.js` inside
  `/tmp/wm07/wm07.zip` (653,017 B, sha256 `91d73beb…`); `/tmp/wm07/z/
  website-menu-07/index.html` (10,952 B archive twin), `images/hero_1.jpg`
  (1900×1267, 475,413 B) and the 7 woff2 files; `/tmp/wm07/page.html` (the
  108,855 B ColorLib template page — source of the description/dates/download-size
  facts); `/tmp/wm07/cat.js` (the 633,990 B preview catalog index that maps the
  slug to `theme/bootstrap/`); `/tmp/wm07/shot.png` (the 1200×972 screenshot,
  converted from the 127,529 B AVIF original); plus live-browser captures at
  1280×800 and 780×437 (`/root/.config/browser-harness/tmp/shot.png`).

## Design tokens

Extracted from the source stylesheet `css/style.css` (20,488 B) of
`website-menu-07` (live preview
`https://preview.colorlib.com/theme/bootstrap/website-menu-07/` → HTTP 200;
byte-identical archive copy) and cross-checked against the 1200×972 screenshot
and the live render at 1280×800 / 780×437.

| Token | Value | Used by |
| --- | --- | --- |
| brand / primary blue | `#007bff` | default `a{color:#007bff}`, the **stuck** header surface (`.sticky-wrapper.is-sticky .site-navbar{background-color:#007bff}`), off-canvas current/hover rows |
| link hover shade | `#0056b3` | `a:hover` (page-level default — the header's own links stay white) |
| ink | `#212529` | `body{color}`, off-canvas rows, the 30 px close glyph |
| flyout row ink | `#343a40` | dropdown/second-level links |
| page + panel surface | `#fff` | `body`, the off-canvas panel, dropdown surfaces, the `arrow-top` triangle |
| text on photo | `#fff` | wordmark, top-bar links, socials, toggle, the current nav row (`.sticky-wrapper .site-navbar ul li.cl-active a`) |
| inactive nav label | `rgba(255,255,255,0.6)` | every non-current top-level label, both states |
| top-bar hairline | `1px solid rgba(255,255,255,0.4)` | `border-bottom` of `.site-navbar-top` |
| hover row wash (flyout) | `#ebeef0` | dropdown row `:hover`/`:focus` (with ink `#212529`) |
| close-glyph hover | `#dee2e6` | `.site-mobile-menu-close span:hover` |
| submenu-toggle hover | `#f8f9fa` | `.site-nav-wrap .arrow-collapse:hover` |
| veil | `rgba(0, 0, 0, 0.5)`, `transition:.3s all ease`, `opacity:0 / visibility:hidden / z-index:1` → `1 / visible / 1002` | `body::before` while `body.offcanvas-menu` |
| panel shadow | `-10px 0 20px -10px rgba(0,0,0,.1)` | off-canvas panel (right-hand slide) |
| flyout shadow | `0 0 4px 0 rgba(0,0,0,.25)` | dropdown **and** second-level flyout |
| radii | **mixed**: `4px` on flyout surfaces and their first/last rows, `50%` on the 36 px submenu toggle, `0` everywhere else (normalize `button{border-radius:0}`) | flyouts + panel toggle only — do not spread rounding |
| type | `"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — declared weights **400 / 600 / 700** (6 woff2 static subsets); the sheet also carries a dead `Roboto` body stack in its normalize block plus `h1,h3,.cl-h3{font-family:"Quicksand", …}` | whole page |
| type scale | body `1rem / 1.5`; `h1,.h1{2.5rem}`; `h3,.cl-h3{1.75rem}` (the toggle glyph size); **top bar `0.8rem` (12.8 px)**; nav labels **15 px / weight 500**; wordmark **20 px / weight 700 / uppercase**; flyout rows **14 px**; panel level-1 **20 px**, levels 2–3 **16 px** | header + panel |
| spacing rhythm | top bar `cl-py-3` = **16 px** top/bottom; nav row `li{padding:10px 5px}` + `a{padding:20px 10px}` (measured row height **83 px**); stuck nav `a{padding:10px 10px}`; flyout rows `9px 20px`, surface offset `margin-top:20px → 0`; flyout arrow `10px`; panel `padding-top:20px`, body `padding:20px` + `150px` bottom, `height:calc(100vh - 52px)`; band `100vh`; body `200vh`; container gutters `15px`, max-widths `540/720/960/1140` at `sm/md/lg/xl` | header / flyouts / panel |
| grid | top bar `cl-col-6 / cl-col-6`; nav row `cl-col-2` (logo, 16.667 %) + `cl-col-10` (nav, 83.333 %) | header |
| motion | `a{transition:.3s all ease}` site-wide; flyout `transition:.2s 0s` (offset + fade); panel + its close/glyph `.3s all ease-in-out` / `.3s all ease`; veil `.3s all ease`; `arrow-collapse:before` `.3s all ease` | all interactive transitions |

**Google Fonts map:** one `<link>` for **Quicksand** 400;500;600;700
(`https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap`)
— note the source declares **400/600/700** while its own CSS asks for weight
**500** on nav labels and **200** on the wordmark's `h1`, so the Google variable
face is the safest superset; the source's self-hosted woff2 files are never
copied. Icons from `lucide-react` (`Menu`, `X`, `Mail`, `Phone`, `ChevronDown`,
`ChevronRight`, `Twitter`/`Facebook`/`Linkedin`/`Instagram`) instead of the
icomoon subset and the inline SVG paths.

## Requirements

### Feature: Transparent two-tier header over the image band

#### Scenario: The utility top bar renders above the nav row

- **Given** the page loads at any width
- **When** the header renders
- **Then** it is **absolutely positioned at the top of the page**
  (`top:0; left:0; width:100%; z-index` above the band and below the off-canvas
  panel — the source's `99` for `.site-navbar-wrap`) with a **transparent**
  surface so the photo shows through, and it is split into a **utility bar** and
  a **main nav row**
- **And** the utility bar holds, **left**, an mail link and a phone link (glyph +
  label, `cl-mr-4` = **24 px** apart, **12.8 px**/`0.8rem` type, white) and,
  **right**, **four** social icon links (`cl-p-2` = **8 px** padding), with a
  **`1px solid rgba(255,255,255,0.4)`** bottom hairline closing it — the page's
  only divider
- **And** the two label texts are hidden **below 768 px** (the source's
  `cl-d-none cl-d-md-inline-block`), leaving the two glyphs, and the socials stay
  visible at every width
- **And** the mail/phone text is the app's own placeholder (the source's
  `info@domain.com` / `+1 234 4567 8910` strings are **not** reused) and every
  one of those links is a **real** target (`mailto:` / `tel:` / own social URLs) —
  no dead `href="#"`

#### Scenario: The nav row carries the wordmark left and seven items right

- **Given** the header renders at ≥992 px
- **When** the nav row is measured
- **Then** it is a **`cl-col-2` (16.667 %)** column holding the app's own
  **wordmark** — white, **Quicksand 700, uppercase, 20 px**, rendered as a link to
  the top of the page, positioned with the source's `-7 px` optical lift — and a
  **`cl-col-10` (83.333 %)** column holding a **right-aligned** nav
- **And** below 992 px the nav row itself is hidden (the source ships it
  `cl-d-none cl-d-lg-block`) and the **hamburger** — a `span.icon-menu.cl-h3`-sized
  (≈**28 px**) white glyph in a `cl-py-3` wrapper — is the only control, exactly as
  the source does (`cl-d-inline-block cl-d-lg-none`)
- **And** the toggle exposes `aria-expanded`/`aria-controls` and a visible
  `focus-visible` ring, and no Colorlib or source-brand string appears anywhere in
  the header

#### Scenario: Seven items, one dropdown, in the source's order

- **Given** the nav renders at ≥992 px
- **When** its items are inspected
- **Then** there are exactly **seven** top-level items in the source's order —
  a current `Home`-kind row, a `Classes`-kind row, a **`Pages`-kind parent that
  owns the dropdown**, then `About`-, `Events`-, `Gallery`- and `Contact`-kind
  rows (own labels of the same *kinds*; the source's strings are not copied
  verbatim)
- **And** each label is **15 px, weight 500** with `padding:20px 10px` inside a
  `li` of `padding:10px 5px` (the last item's right padding is `0`), the **current**
  row renders **`#fff`** with `aria-current="page"`, every other row renders
  **`rgba(255,255,255,0.6)`** and turns **`#fff`** on hover/focus — in **both** the
  transparent and the stuck state (the source's current-row rule is not scoped to
  `.is-sticky`)
- **And** the dropdown parent reserves `padding-right:20px` for a **caret** glyph
  (**16 px**, vertically centred, at the right edge — a `lucide-react` chevron, not
  the icomoon `\e313` glyph)

### Feature: Multi-level dropdown

#### Scenario: The parent opens a 200 px rounded white flyout

- **Given** the nav renders at ≥992 px
- **When** the dropdown parent is hovered **or focused**
- **Then** a **`200 px`-wide** white surface appears directly below it
  (`position:absolute; top:100%; left:0` inside a `position:relative` parent),
  offset `margin-top:20px → 0` over a **`0.2s`** transition, with
  **`border-radius:4px`**, **`box-shadow:0 0 4px 0 rgba(0,0,0,.25)`** and a
  **`10px` white triangle** pointing up at `left:20%`
  (`border:10px solid transparent; border-bottom-color:#fff; margin-left:-10px`)
- **And** it holds **four** rows — three plain links in the source's kinds and
  **one nested parent** — each `min-width:200px`, `list-style:none`,
  `padding:9px 20px`, **14 px**, `color:#343a40`, `text-transform:none`, turning
  **`background:#ebeef0; color:#212529`** on hover/focus, with the first and last
  row anchors carrying the matching **`4px`** corner radii
- **And** the nested parent renders the same surface, opened to
  **`left:100%; top:0`** (to the **right** of its parent row, vertically aligned
  with it), with a right-pointing caret (`\e315` in the source → a
  `lucide-react` chevron) at `right:20px`, and holds **three** rows
- **And** the flyouts are keyboard reachable and dismissible (`Escape` closes,
  focus leaving the group closes), stay inside the viewport at 1024 px width, and
  the flyout surfaces never render as dead `href="#"` links — each row resolves to
  a real in-page target

### Feature: Sticky header that turns brand blue

#### Scenario: Scrolling pins the nav row to the top and paints it #007bff

- **Given** the page is at the top of the document
- **When** the header is measured
- **Then** the nav row sits **in normal flow directly under the utility bar**
  (the source's `.sticky-wrapper` is `position:absolute` and lands at document
  `y ≈ 52 px`, so the utility bar scrolls away while the nav row pins) with a
  **transparent** background and its `20px 10px` link padding
- **And** once the page scrolls past the nav row's own offset, the row becomes
  **`position:fixed; top:0`** at the container's full width with
  **`background-color:#007bff`**, its links tighten to **`padding:10px`**, its
  inactive labels stay **`rgba(255,255,255,0.6)`** (→ `#fff` on hover) and its
  current row stays **`#fff`**
- **And** the toggle is a real state change (a class on a wrapper element, the
  way the source toggles `is-sticky`) with the transition on the row's background
  being **`.3s all ease`**, and scrolling back to the top restores the
  transparent state

### Feature: Off-canvas right-hand panel (the mobile navigation)

#### Scenario: The hamburger slides a 300 px white panel in from the RIGHT

- **Given** the page renders at a width below 992 px
- **When** the hamburger is activated
- **Then** a **300 px** white panel slides in from the **right** edge
  (`translateX(110%) → 0`, `.3s all ease-in-out`, `padding-top:20px`, full viewport
  height, `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`) while the page behind is
  covered by a **`rgba(0,0,0,.5)`** veil that fades in over `.3s` at `z-index`
  above the page (`1` → `1002`) but below the panel (`2000`)
- **And** the panel's header carries a **30 px** close glyph (`lucide-react` `X`)
  in a real labelled button at the panel's **top-right** (hover `#dee2e6`,
  `padding-left:10px`), and its body scrolls
  (`height:calc(100vh - 52px)`, `padding:20px` with **150 px** extra bottom
  padding, `overflow-y:auto`)
- **And** the body holds the **same nav definition as the header's nav** — the
  recreation **renders the same nav component twice** (React), never
  `cloneNode(true)` the DOM the way the source's `snippet.js` does, and never
  hand-maintains two copies
- **And** the panel's DOM order comes **before** the header's, matching the
  source's `position:fixed` panel-first markup

#### Scenario: Seven rows with collapsible sub-levels

- **Given** the panel is open
- **When** its rows are inspected
- **Then** there are exactly **seven** level-1 rows in the source's order and
  labels, at **20 px** with `padding:10px 20px`, `color:#212529`, turning
  **`#007bff`** on hover/focus, with the current row **`#007bff`** and
  `aria-current="page"`
- **And** the row that owns the submenu renders a **36 × 36 px, `border-radius:
  50%`** expander at the row's **right** (`right:0; top:10px`, hover
  `background:#f8f9fa`) carrying `aria-expanded` and an accessible label, whose
  caret (`\f078` → a `lucide-react` chevron, **12 px**) is **rotated 180°** while
  the submenu is open and **not rotated** while closed
- **And** expanding it reveals **three** level-2 rows at **16 px** with
  `padding-left:40px`, and the nested parent's own expander reveals **three**
  level-3 rows at **16 px** with `padding-left:60px` — i.e. the panel has
  **collapsible sub-levels even though the desktop dropdown is hover-only**, with
  `.3s` caret transitions and no layout jump
- **And** the expander does not navigate (it is a real `button`), while the row's
  own label remains a link that closes the panel

#### Scenario: The panel closes the source's ways

- **Given** the panel is open
- **When** the close glyph, a `mouseup` outside the panel, or `Escape` is used
- **Then** the panel slides closed (`translateX(110%)`), the veil is removed and
  the toggle's `aria-expanded` returns to `false` (**each** of the three paths is
  tested), and a resize wider than **768 px** also closes it (the source's own
  `window.addEventListener('resize', …)` handler — kept here, because the panel is
  only reachable below 992 px; document the choice in the PR)
- **And** focus moves into the panel on open and returns to the toggle on close,
  focus is never trapped in the closed panel, and the page behind is scrollable
  again

### Feature: Full-bleed image band and the materialised targets

#### Scenario: The band renders at full viewport height with a covered image

- **Given** the page loads
- **When** the band below the header is measured
- **Then** it is a full-width **`100vh`** band with a **background image**
  (`background-size:cover`, `background-position:center center`,
  `background-repeat:no-repeat`) supplied by a deterministic placeholder
  `https://picsum.photos/seed/topdeck-hero/1920/1080` (the source uses its own
  `images/hero_1.jpg`, 1900×1267; no asset is copied)
- **And** it is the page's **first** content band — the header floats over it, so
  first paint is photo + utility bar + nav row
- **And** the page's scroll height exceeds the viewport the way the source's
  `body{height:200vh}` does, so the sticky header's stuck state is reachable with
  real content rather than blank filler

#### Scenario: The six declared anchors resolve to real sections

- **Given** the source declares `#home-section`, `#classes-section`,
  `#about-section`, `#events-section`, `#gallery-section` and `#contact-section`
  and **none of them exist**, and the dropdown's rows are all `href="#"`
- **When** the recreation's nav and dropdown rows are inspected
- **Then** every one of them resolves to a real in-page section of the same
  *kind* (home → intro, classes → programme cards, about → story, events →
  schedule, gallery → image grid, contact → contact block; dropdown rows →
  sub-pages of those kinds), each with a `scroll-margin-top` ≥ the header height
- **And** **zero** dead `href="#"` links remain anywhere in the app (the
  dropdown parent excepted only if it is a real disclosure control — a
  `button`-like toggle with `aria-expanded`), and any imagery inside those
  sections comes from `https://picsum.photos/seed/topdeck-<n>/<w>/<h>`

### Feature: Footer and provenance hygiene

#### Scenario: The app ships a Component Dock footer

- **Given** the source snippet has no footer at all (it is chrome + one band)
- **When** the recreation is built
- **Then** it adds a minimal app-shell footer (a deliberate, documented delta
  from the source) with a dark surface and a **1 px** translucent hairline top
  edge, holding the app's wordmark and exactly **one** link to
  `https://www.componentdock.com/` branded "Component Dock" (new tab,
  `rel="noreferrer"`) next to a **current year computed at render**

#### Scenario: No provenance strings and no copied assets

- **Given** the app source is searched
- **When** it is checked
- **Then** no `colorlib`, "Website Menu 07" or `website-menu-07` string appears
  anywhere in `apps/topdeck` (comments included — record the palette as
  design-token notes instead: "brand accent `#007bff`")
- **And** nothing from the source archive ships: no `css/style.css`, no
  `js/snippet.js`, no woff2 files (`quicksand-*.woff2`, `icomoon-subset.woff2`),
  no `hero_1.jpg`, no inlined icomoon glyph codepoints (`\e313`, `\e315`, `\f078`)
  or copied SVG paths, no `cl-`-prefixed utility class names, and no copied copy
  (the "Brand" wordmark, the seven nav labels, `info@domain.com` and
  `+1 234 4567 8910` are **not** reproduced verbatim) — images come from picsum
  and icons from `lucide-react`

### Feature: Responsive behaviour

#### Scenario: The chrome reflows at every width

- **Given** the page renders at `xl` (≥1200 px), `lg` (992–1199 px), `md`
  (768–991 px) and `sm` (<768 px)
- **When** the layout is measured
- **Then** at ≥992 px the seven-item nav row is visible and the hamburger is not
  (`cl-d-lg-none`), and below 992 px the reverse is true with the panel as the
  only navigation (the toggle is the one control that is always present in the
  source's markup — the recreation keeps it visible only where it is useful and
  documents that in the PR)
- **And** the utility bar drops its two text labels below **768 px** while
  keeping both glyphs and all four socials
- **And** the band stays **`100vh`** at every width, the flyouts stay inside the
  viewport (flipping to the left edge or capping at the viewport width when a
  `200 px` surface would overflow), the panel stays **300 px** except where the
  viewport is narrower than the panel (then it caps at the viewport width), and
  the page produces **no horizontal overflow at 320 px**
  (`scrollWidth === innerWidth`)

### Feature: Motion, accessibility and reduced motion

#### Scenario: Motion is decorative and fully suppressible

- **Given** the page loads with motion enabled
- **When** the header, flyouts and panel are used
- **Then** links transition over **`.3s ease`**, the flyouts over **`.2s`**, the
  panel and veil over **`.3s`** (`ease-in-out` / `ease`), the sticky row's
  background over **`.3s ease`**, and the submenu caret over **`.3s ease`**
- **And** under `prefers-reduced-motion: reduce` those transitions collapse to
  effectively instant, the panel appears without sliding, the flyouts open without
  the offset animation, and all content is present immediately (no motion gate on
  first paint)
- **And** the hamburger, the close button, the veil, the six top-bar/social links,
  all seven nav rows, every flyout row and the submenu expanders are keyboard
  operable with visible `focus-visible` rings and state exposed to assistive tech
  (`aria-expanded`, `aria-controls`, `aria-current`), the panel is a labelled
  dialog-like region, the dropdown is a labelled disclosure with its parent
  marked `aria-haspopup="true"`, and `Escape` closes the panel **and** the
  flyouts

## Verification checklist

- [ ] `apps/topdeck` recreates ColorLib **"Website Menu V07"** (source slug
      `website-menu-07`, https://colorlib.com/wp/template/website-menu-07/) under
      the new name `topdeck`; the registry/`package.json` reads
      `@free-react-templates/topdeck`
- [ ] The header is **absolutely positioned, transparent**, `top:0; left:0;
      width:100%`, floating over the band, and is split into a **utility bar** +
      **nav row** (`cl-col-2` wordmark / `cl-col-10` nav) — order and split kept
- [ ] Utility bar: mail + phone links left (`cl-mr-4` = **24 px** apart, glyph +
      label), **four** social links right (`cl-p-2` = **8 px** padding),
      **`0.8rem` / 12.8 px** type, closed by a
      **`1px solid rgba(255,255,255,0.4)`** bottom hairline; the two labels hide
      **below 768 px**, the glyphs and all four socials stay
- [ ] Wordmark: white, **Quicksand 700, uppercase, 20 px**, own brand text (not
      "Brand"), `-7 px` optical lift
- [ ] Nav: exactly **seven** top-level items, **15 px / weight 500**,
      `li{padding:10px 5px}` + `a{padding:20px 10px}` (last item right padding
      `0`), current row **`#fff`** with `aria-current="page"` in **both** states,
      others **`rgba(255,255,255,0.6)`** → **`#fff`** on hover/focus; the
      dropdown parent reserves `padding-right:20px` for a **16 px** caret
- [ ] Dropdown: **200 px** wide, white, **`border-radius:4px`**,
      **`box-shadow:0 0 4px 0 rgba(0,0,0,.25)`**, offset `20px → 0` over
      **`.2s`**, **`10px`** white triangle at `left:20%`, **four** rows
      (`padding:9px 20px`, **14 px**, `#343a40` → `#ebeef0`/`#212529` on
      hover/focus, first/last anchors `4px` radii), nested parent opening a
      **second** flyout at **`left:100%; top:0`** (right-aligned surface, caret
      at `right:20px`, three rows)
- [ ] Sticky: the nav row pins to **`top:0`, `position:fixed`**, at the
      container width with the utility bar left to scroll away, and its surface
      turns **`#007bff`** with link padding tightening to **`10px`**; scrolling
      back restores the transparent state; the toggle is a real class/state
      change, not a scroll hack
- [ ] The band is a **`100vh` full-bleed background image** (`cover`,
      `center center`, `no-repeat`) from
      `https://picsum.photos/seed/topdeck-hero/1920/1080`; the page scrolls like
      the source's `body{height:200vh}`
- [ ] Off-canvas panel matches: **300 px** wide, white, **fixed RIGHT**
      (`right:0`), `padding-top:20px`, full height, **`-10px 0 20px -10px
      rgba(0,0,0,.1)`** shadow, **`.3s ease-in-out`** slide from
      `translateX(110%)`, body `height:calc(100vh - 52px)` with
      `padding:20px` + **150 px** bottom, `overflow-y:auto`, **30 px** close glyph
      at its **top-right** (`#212529`, hover `#dee2e6`), and a
      **`rgba(0,0,0,.5)`** veil (`.3s` fade) at `z-index:1`→`1002` under the
      panel's `2000`
- [ ] Panel rows: **seven** level-1 rows (**20 px**, `padding:10px 20px`,
      `#212529` → `#007bff`, current `#007bff` + `aria-current="page"`), a
      **36 × 36 px `border-radius:50%`** expander per submenu parent (`right:0;
      top:10px`, hover `#f8f9fa`, caret **12 px**, rotated **180°** while open,
      `aria-expanded` toggled), **three** level-2 rows at **16 px** /
      `padding-left:40px` and **three** level-3 rows at **16 px** /
      `padding-left:60px`
- [ ] The panel closes on the close glyph, a `mouseup` outside it, `Escape` and a
      resize wider than **768 px** (each tested); focus moves in on open and
      returns to the toggle on close
- [ ] One nav source of truth: the header nav and the panel render the **same**
      component/data (mounted twice, **never** DOM-cloned) — no duplicated list
- [ ] Shape language kept as the source has it: **`4px`** only on flyout
      surfaces/rows and **`50%`** only on the submenu expander — **nothing else**
      gets rounded, and no pills are introduced
- [ ] The six declared targets resolve to real sections with `scroll-margin-top`
      ≥ the header height; **zero** dead `href="#"` links remain
- [ ] Zero `colorlib` / "Website Menu 07" / `website-menu-07` provenance
      references anywhere in `apps/topdeck` (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no woff2 files
      (`quicksand-*.woff2`, `icomoon-subset.woff2`), no `hero_1.jpg`, no `cl-`
      utility classes, no jQuery/Bootstrap, no copied strings
      (`info@domain.com`, `+1 234 4567 8910`, the seven source labels), no inlined
      icomoon codepoints or SVG paths
- [ ] `public/CNAME` = `topdeck.free.componentdock.com` and
      `"homepage": "https://topdeck.free.componentdock.com"` in
      `apps/topdeck/package.json`; `package-lock.json` registers
      `@free-react-templates/topdeck`
- [ ] Footer links `https://www.componentdock.com/` exactly once ("Component
      Dock") with a computed current year
- [ ] Accessibility: toggle has `aria-expanded`/`aria-controls`; the dropdown
      parent has `aria-haspopup`/`aria-expanded`; the panel is a labelled region
      with focus moved in and returned; every interactive element has a visible
      focus ring; `prefers-reduced-motion: reduce` removes the slide/fade/offset
      motion
- [ ] `scripts/verify-app.sh topdeck` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] PR description includes: source template (ColorLib Website Menu V07),
      preview URL
      (`https://preview.colorlib.com/theme/bootstrap/website-menu-07/` → **HTTP
      200**, 11,155 B, title `Website Menu #7`; the slug-only
      `/theme/website-menu-07/` path 404s; archive
      `https://preview.colorlib.com/downloads/free/website-menu-07.zip` → HTTP
      200, 653,017 B, sha256-identical `style.css`/`snippet.js`; screenshot
      1200×972), the design tokens used (`#007bff` brand + stuck surface,
      `#212529` ink, `#343a40` flyout ink, `rgba(255,255,255,0.6)` inactive nav,
      `rgba(255,255,255,0.4)` hairline, `#ebeef0` flyout hover, `#dee2e6`/`#f8f9fa`
      hover washes, `rgba(0,0,0,.5)` veil, `0 0 4px 0 rgba(0,0,0,.25)` flyout
      shadow, `-10px 0 20px -10px rgba(0,0,0,.1)` panel shadow, `4px` flyout radii
      + `50%` expander, Quicksand 400/600/700, 20 px uppercase wordmark, 15 px nav
      labels, 14 px flyout rows, 30 px close glyph, 300 px right panel, 20 px
      panel rows), the structure (transparent two-tier header over a `100vh` image
      band + fixed right panel + sticky blue nav) and what differs (new name +
      wordmark, own labels/contact details, lucide instead of the icomoon subset
      and inline SVG, Google Fonts instead of self-hosted woff2, the six dead
      anchors materialised as labelled sections + real dropdown targets, one nav
      source of truth instead of a DOM clone, added aria/keyboard states,
      reduced-motion handling, footer attribution)
