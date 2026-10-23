# Template: Larboard (Website Menus)

## Purpose

Larboard is a **full-bleed image band + always-available LEFT off-canvas sidebar
menu** page in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free **"Website Menu V06"** snippet (source slug
`website-menu-06` — the Website Menus family's **left-hand sidebar** variant: a
**transparent header** floating over a **`100vh` full-bleed background image**
band, a **white ≈28 px hamburger glyph** at the **left** that is the *only* nav
control at every width (the source's desktop nav row ships permanently
`display:none`), a white uppercase **"BRAND"**-style wordmark at the **right**,
and a **300 px white off-canvas panel** sliding in from the **left** over a
`rgba(0,0,0,.5)` veil, holding a **flat five-row menu** — **Home** (current,
`#007bff`), **About**, **Services**, **Blog**, **Contact** — in `#212529` at
**20 px** with `padding:10px 20px`, turning `#007bff` on hover) — plus a **30 px
dark close glyph** at the panel's top-right and a body that scrolls
(`calc(100vh - 52px)` with **150 px** bottom padding).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's section
structure, order and design tokens 1:1 but copies no asset (no images, no font
files, no CSS files, no icon-font glyphs, no text verbatim) and never reuses the
source name.

- **Source:** https://colorlib.com/wp/template/website-menu-06/ — page title
  "Website Menu V06 - Free Left Sidebar Menu Template 2026 - Colorlib",
  HTTP 200, 108,931 B, verified 2026-10-11. ColorLib's own description: *"The
  best free left sidebar menu template that works in complete harmony with both
  mobile and desktop devices."* First published **2021-01-28**; the ColorLib page
  reports an update on **2026-09-25** (the plain HTML + CSS + vanilla JS
  rewrite — "no jQuery, no framework" — shared with its `-01`…`-05` siblings).
  TEMPLATES.md `## Website Menus (20)` — this item is the family's **sixth**
  entry at **line 3078**; the slug `website-menu-06` appears exactly once in
  TEMPLATES.md and in no spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-06/` returns
  **HTTP 404** (`Not Found`, 9 B) — the *Website Menus* family does **not** live
  under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-06/`**
  (**HTTP 200**, `text/html`, **2,878 B**, title `Website Menu #6`, verified
  2026-10-11), discovered through the same catalog index the preview host loads
  for its own home page
  (`https://preview.colorlib.com/assets/js/catalog-products-*.js`), whose entry
  for this slug is `"url":"…/theme/bootstrap/website-menu-06/"`. Its two assets —
  `css/style.css?v=bdd8b5c0` (**15,914 B**, `text/css`,
  sha256 `db7091c84b127cb79a77552e4466b3987c43ab651429e2c418f88621a59f9305`) and
  `js/snippet.js?v=0fd41ac8` (**2,525 B**,
  sha256 `52e12ae27ecd855e8512e228f1f797cdcdcdabb18067ae3188b08ed66d537b97`) — are
  **byte-identical** (same sha256) to the copies in the snippet's own
  downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-06.zip`
  (**HTTP 200**, `application/zip`, **705,375 B**; the ColorLib page rounds this
  to "689 KB"), which ships `index.html`, `css/style.css`, `js/snippet.js`,
  `README.md`, `images/hero_1.jpg` (**1900×1267** JPEG) and the **Open Sans**
  woff2 subsets (300/400/700, latin + latin-ext) plus `icomoon-subset.woff2`.
  The archive is the un-versioned readable twin of the live preview — its
  `index.html` differs from the live one only by the preview host's cache-busting
  query strings and its `noindex` meta tags. Both were read for this spec and the
  live render was cross-checked in a browser (see Design reference).
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-06.jpg
  (HTTP 200, served as **AVIF**, 1200×972, 58,713 B, converted to PNG and opened
  and inspected visually 2026-10-11). No screenshot-only fallback was needed — the
  live preview is the primary reference and the archive its readable twin.
- **New name:** `larboard` (apps/larboard, `@free-react-templates/larboard`) —
  the source is the Website Menus family's **left-hand** sidebar variant, and
  *larboard* is the nautical term for the left-hand side of a vessel — the exact
  complement of **starboard**, the name already used for the right-hand mirror
  sibling `website-menu-05`. Single lowercase word, kebab-safe. Verified
  2026-10-11: a repo-wide search (`grep -ril larboard apps/ openspec/specs/ docs/
  TEMPLATES.md`) returns **zero** hits (no `apps/` folder, no `openspec/specs/`
  folder, no `docs/templates/` folder, no TEMPLATES.md name), and
  `https://colorlib.com/wp/template/larboard/` returns **HTTP 404**, so it is not
  a ColorLib source name either. The source name "Website Menu 06", its "Brand"
  wordmark and its copy are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Evidence audit (2026-10-12):** the source `<title>` recorded in this spec is the plain
  raw-HTTP string. A leading horse-emoji prefix that an earlier browser pass recorded
  is added to *every* page title by this container's browser harness (reproduced on
  `example.com`), not by the source. Nothing else in this evidence block changed.

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V06" (source slug `website-menu-06`,
  https://colorlib.com/wp/template/website-menu-06/) — first published
  **2021-01-28**, rewritten in the 2026 build to plain HTML + CSS + vanilla JS,
  exactly like its `-01`…`-05` siblings. The sheet is **self-contained and
  namespaced** (its utilities are `cl-`-prefixed: `cl-container`, `cl-row`,
  `cl-col-3/9`, `cl-order-1/2`, `cl-d-inline-block`, `cl-d-lg-block`, `cl-d-none`,
  `cl-d-lg-none`, `cl-text-left/right/white/black`, `cl-font-weight-bold`,
  `cl-py-4/5`, `cl-align-items-center`, `cl-position-relative`,
  `cl-ml-auto`/`cl-mr-auto`, `cl-mt-3`, `cl-nav-link`, `cl-collapse`,
  `cl-active`, `cl-show`, `cl-collapsed`, `cl-icon`, `cl-h3`) and is a hand-rolled
  Bootstrap-4-grid look-alike — **not** a framework skin.
- **HTML structure (live preview, 2,878 B):** the off-canvas panel
  (`div.site-mobile-menu.site-navbar-target`) comes **first** in the document
  (it is `position:fixed`), then `header.site-navbar.site-navbar-target.cl-py-4`
  with `div.cl-container > div.cl-row.cl-align-items-center.cl-position-relative`
  holding **two** columns, then the band `div.hero`, then `js/snippet.js`.
- **Header columns are mirrored versus the `-05` sibling:** the **hamburger lives
  in a `cl-col-9 cl-order-1 cl-text-left`** column on the **left** and the
  **wordmark in a `cl-col-3 cl-ml-auto cl-text-right cl-order-2`** column on the
  **right**. The hamburger is
  `<a href="#" class="cl-text-black site-menu-toggle js-menu-toggle cl-py-5">`
  wrapping `<span class="icon-menu cl-h3 cl-text-white">` around an **inline SVG
  three-bar glyph** (path `M128 683H896V597H128ZM128 385V469H896V385ZM128
  171V257H896V171Z`, `viewBox="0 0 1024 1024"`) — this variant does **not** use an
  icon font for the menu or the close control. The wordmark is
  `<div class="site-logo"><a href="index.html" class="cl-font-weight-bold
  cl-text-white">Brand</a></div>`.
- **The desktop nav row is dead code.** `nav.site-navigation` carries **both**
  `cl-d-none` and `cl-d-lg-none` and measures `display:none` at every width — the
  hamburger is the only navigation control. Inside it sits a flat
  `ul.site-menu.main-menu.js-clone-nav.cl-ml-auto` of five `li` (Home
  `class="cl-active"`, About, Services, Blog, Contact) with `href`s pointing at
  `index.html` / `about.html` / `services.html` / `blog.html` / `contact.html` —
  **none of which exist in the snippet**.
- **There are no dropdowns.** `document.querySelectorAll('.site-menu
  .has-children').length === 0` on the live page, so the sheet's
  `.has-children` rules (including the 36 px round `arrow-collapse` toggle) and
  the whole `has-children` branch of `snippet.js` never render here. The panel is
  a flat five-row list.
- **The panel is built by DOM cloning:** `snippet.js` does
  `nav.cloneNode(true)` on `.js-clone-nav`, renames the clone's class to
  `site-nav-wrap` and appends it to `.site-mobile-menu-body`. The recreation must
  instead **render the same nav component twice** (one source of truth), never
  clone DOM.
- **Panel geometry (live-measured, 780×437 viewport):** `width:300px;
  position:fixed; left:0; z-index:2000; padding-top:20px; background:#fff;
  height:437px` (= `100vh`), `transform:matrix(1,0,0,1,-300,0)` (=
  `translateX(-100%)`), `transition:0.3s ease-in-out`,
  `box-shadow:rgba(0,0,0,.1) -10px 0px 20px -10px`. Its body measures
  **385 px** = `calc(100vh - 52px)` with `padding-bottom:150px` and
  `overflow-y:scroll`. The close glyph measures **30 px** in `rgb(33,37,41)`
  (hover `#ced4da`).
- **Panel rows (live-measured, first row):** `rgb(0,123,255)` (the current
  "Home" row, `.site-nav-wrap li.cl-active > a`), **20 px**,
  `padding:10px 20px`; the other rows compute `rgb(33,37,41)` and turn
  `#007bff` on hover. Exactly **five** `> li` children.
- **Toggle geometry (live-measured):** `.site-menu-toggle` (`display:inline`,
  i.e. no `cl-d-lg-block` effect at this width) measures **28 × 118 px** — the
  `cl-py-5` utility gives the anchor `3rem` top and bottom padding — with its
  `span` measuring **28 px** tall (`.cl-h3` = `1.75rem`) in **`rgb(255,255,255)`**
  at x ≈ 38 px (left edge of the container gutter).
- **Wordmark (live-measured):** `rgb(255,255,255)`, **Open Sans, 16 px, weight
  700, `text-transform:uppercase`**, at x ≈ 578 px (right column).
- **Header (live-measured):** `.site-navbar` → `position:absolute; top:0;
  width:765px; z-index:1999; padding:24px 0; background-color:rgba(0,0,0,0)`,
  rect **765 × 90**. The `24 px` vertical padding is the `cl-py-4` utility's
  `1.5rem !important`, which outranks the sheet's own
  `@media (max-width:991.98px){.site-navbar{padding-top:3rem;padding-bottom:3rem}}`
  — both declarations are recorded, the measured value wins.
- **Band (live-measured):** `.hero` → rect **765 × 437** (the entire viewport),
  `background-image:url(…/images/hero_1.jpg)`, `background-size:cover`,
  `background-position:50% 50%` (= `center center`), `background-repeat:
  no-repeat`. `body` measures **874 px** = `height:200vh`, computed family
  **Open Sans**, 16 px, `color:rgb(33,37,41)`, `background:#fff`.
- **Veil (live-measured on `body::before`):** `rgba(0, 0, 0, 0.5)` at rest with
  `opacity=0` and `z-index:1`; `.offcanvas-menu` reveals it at `opacity:1;
  z-index:1002` (observed as `body.offcanvas-menu:before{opacity:1; z-index:1002;
  visibility:visible}` in the sheet).
- **Screenshot read-through (1200×972, AVIF→PNG):** a browser-chrome mock of the
  live preview with the **off-canvas panel open on the left**. A single
  **full-bleed photo** fills the frame (three people smiling against a grey
  cinderblock wall, low-key daylight). Over the photo, top-**right**, the wordmark
  **`BRAND`** in **white uppercase bold**; the panel occupies the **left** quarter
  of the width, white, separated from the photo by a soft right-edge shadow, with
  a small **dark `×`** at its top-right and a stacked list: **`Home`** in brand
  **blue `#007bff`** (current), then **`About`**, **`Services`**, **`Blog`**,
  **`Contact`** in near-black. The photo behind is dimmed by the `rgba(0,0,0,.5)`
  veil. That frame — image band + transparent header + open left sidebar — is the
  design being replicated.
- **Reference artifacts:** `/tmp/wm06.html` (live preview HTML, 2,878 B),
  `/tmp/wm06.css` (15,914 B), `/tmp/wm06.js` (2,525 B), `/tmp/wm06.zip`
  (705,375 B) extracted to `/tmp/wm06z/website-menu-06/` (`index.html`,
  `css/style.css` and `js/snippet.js` byte-identical to the live copies),
  `/tmp/cl-wm06.html` (the 108,931 B ColorLib template page) and `/tmp/wm06.png`
  (the screenshot, 1200×972, converted from the AVIF original).

## Design tokens

Extracted from the source stylesheet `css/style.css` (15,914 B) of
`website-menu-06` (live preview
`https://preview.colorlib.com/theme/bootstrap/website-menu-06/` → HTTP 200;
byte-identical archive copy) and cross-checked against the 1200×972 screenshot
and the live render.

| Token | Value | Used by |
| --- | --- | --- |
| brand / primary blue | `#007bff` | `a{color}`, the current menu row (`.cl-active` / `.site-nav-wrap li.cl-active > a`), row hover |
| primary shade | `#0056b3` | `a:hover` |
| body text | `#212529` | `body{color}`, off-canvas menu rows, the 30 px close glyph |
| body surface | `#fff` | `body{background}`, the off-canvas panel |
| wordmark / toggle (over the photo) | `#fff` | `.site-logo a.cl-text-white`, `.site-menu-toggle … cl-text-white`, the 28 px glyph |
| header surface | transparent (`rgba(0,0,0,0)`) | absolute bar over the image band |
| off-canvas rows | `#212529` → `#007bff` (hover) ; current row `#007bff` | `.site-nav-wrap a` / `li.cl-active > a` |
| off-canvas close glyph hover | `#ced4da` | `.site-mobile-menu-close span:hover` |
| hover wash (unused here) | `#f8f9fa` | `.site-nav-wrap .arrow-collapse:hover` — **not present in this variant** (no `.has-children`) |
| veil | `rgba(0,0,0,.5)`, `.3s ease` fade, `z-index:1` → `1002` | behind the open panel |
| panel shadow | `-10px 0 20px -10px rgba(0,0,0,.1)` | off-canvas panel |
| layout | `.cl-container` `15px` gutters, max-widths `540/720/960/1140` at `sm/md/lg/xl`; header columns **`cl-col-9` (75 %) left = hamburger** + **`cl-col-3` (25 %) right = wordmark** (mirrored versus the `-05` sibling) | header |
| radii | **0 everywhere**; the only `border-radius` in the sheet is a normalize `button{border-radius:0}` — **no circular controls in this variant** (the `50 %` `arrow-collapse` belongs to `.has-children`, which does not exist here) | square shape language, no pills |
| motion | `a{transition:.3s all ease}` site-wide; panel `.3s all ease-in-out`; veil `.3s all ease`; close glyph `.3s all ease` | all interactive transitions |
| type | `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — weights **300 / 400 / 700** (six woff2 subsets) | whole page |
| type scale | body `1rem / 1.5`; `h3, .cl-h3{1.75rem; font-weight:500; line-height:1.2; margin-bottom:.5rem}`; wordmark `.site-logo{font-size:1rem}` + `uppercase` (measured 16 px / 700); desktop menu links **16 px** (measured; `.cl-nav-link{padding:.5rem 1rem}`) with `text-transform:none`; off-canvas level-1 rows **20 px** | wordmark + menu |
| spacing rhythm | header `padding:1rem` raised to **24 px** top/bottom by `cl-py-4` (`1.5rem !important`; the sheet also declares `3rem` below 992 px — `cl-py-4` wins, measured 24 px); toggle anchor `cl-py-5` = `3rem`; off-canvas rows `padding:10px 20px`; panel body `padding:0 20px 20px` (150 px bottom); band = `100vh` | header / panel |
| band | `100vh` full-bleed background image, `cover` / `center center` / `no-repeat` | the page's canvas |

**Google Fonts map:** one `<link>` for **Open Sans** 300;400;700
(`https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap`)
— the source's three self-hosted woff2 weights are never copied. Icons from
`lucide-react` (`Menu`, `X`) instead of the inline SVG paths.

## Requirements

### Feature: Header floating over the image band, with the wordmark on the right

#### Scenario: The hamburger and the wordmark render over the photo, mirrored

- **Given** the page loads
- **When** the header renders at any width
- **Then** it is **absolutely positioned at the top of the page** (`top:0;
  width:100%`, above the band, `margin-bottom:0`, `z-index` high enough to sit
  over the panel) with a **transparent** surface so the image band shows through,
  and **24 px** vertical padding (the measured `cl-py-4` value, which outranks the
  sheet's own `3rem`-below-992 px media query — the recreation ships one value and
  it is 24 px)
- **And** its **left** column holds the single **hamburger control** — a real
  `button` holding a `lucide-react` `Menu` glyph sized like the source's `.cl-h3`
  (≈**28 px**), coloured **white** over the photo — with the ≈3 rem (`cl-py-5`)
  click target of the source, visible at **every** width
- **And** its **right** column holds the app's own **wordmark** — white,
  **Open Sans weight 700, uppercase, 1rem (16 px)** — rendered as a link to the
  top of the page (the source puts the wordmark on the **right** and the
  hamburger on the **left**; the order must be kept, not normalised to the
  sibling's left-logo layout)
- **And** the source's dead desktop nav row is **not** reproduced as inert markup
  (the source ships it `display:none` via both `cl-d-none` and `cl-d-lg-none`); the
  recreation has exactly one nav source of truth, opened by the hamburger
- **And** the toggle exposes `aria-expanded`, `aria-controls` and a visible
  `focus-visible` ring, and no Colorlib or source-brand string appears anywhere
  in the header

### Feature: Off-canvas sidebar menu (the only navigation)

#### Scenario: The hamburger slides a 300 px white panel in from the LEFT

- **Given** the page renders at any width
- **When** the hamburger is activated
- **Then** a **300 px** white panel slides in from the **left** edge
  (`translateX(-100%) → 0`, `.3s all ease-in-out`, `padding-top:20px`, full
  viewport height, `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`) while the page
  behind it is covered by a **`rgba(0,0,0,.5)`** veil that fades in over `.3s`
  at `z-index` above the page (`1` → `1002`) but below the panel (`2000`)
- **And** the panel's header carries a **30 px** close glyph (`lucide-react` `X`)
  in a real labelled button at the panel's **top-right** (hover `#ced4da`), and
  its body scrolls (`height:calc(100vh - 52px)`, `padding:0 20px 20px` with
  **150 px** extra bottom padding, `overflow-y:auto`)
- **And** the body holds the **same nav tree as the header's nav** — the
  recreation must render **one** nav definition used by both (React: mount a
  second instance rather than cloning DOM, which is what the source's
  `nav.cloneNode(true)` does) rather than hand-maintaining two copies
- **And** the panel's DOM order comes **before** the header's, matching the
  source's `position:fixed` panel-first markup, so no stacking context surprises
  appear

#### Scenario: Five flat rows render in the source's order with a blue current row

- **Given** the panel is open
- **When** its rows are inspected
- **Then** there are exactly **five** rows in the source's order — home, about,
  services, blog, contact (own labels of the same kinds permitted) — with **no
  dropdowns, no sub-levels and no social links** (this variant has **zero**
  `.has-children`, so the sibling's round arrow toggle must not be introduced)
- **And** each row is `padding:10px 20px`, label **20 px**, colour **`#212529`**
  turning **`#007bff`** on hover/focus, and the **current** row (home) renders in
  **`#007bff`** with `aria-current="page"` (the source's `.cl-active`)
- **And** the rows close the panel when activated

#### Scenario: The panel closes the source's ways

- **Given** the panel is open
- **When** the close glyph, a `mouseup` outside the panel, or `Escape` is used
- **Then** the panel slides closed (`translateX(-100%)`), the veil is removed and
  the toggle's `aria-expanded` returns to `false` (**each** of the three paths is
  tested), and a resize wider than **768 px** also closes it (the source's own
  `window.addEventListener('resize', …)` handler — kept here, because the
  recreation's single nav is the only navigation at every width and the source's
  behaviour is the reference; document the choice in the PR)
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
  `https://picsum.photos/seed/larboard-hero/1920/1080` (the source uses its own
  `images/hero_1.jpg`; no asset is copied)
- **And** it is the page's **only** content band (structure = fixed panel +
  header + image band, 1:1 with the source) and the header sits over it so the
  first paint is image + wordmark + hamburger
- **And** the page's scroll height exceeds the viewport the way the source's
  `body{height:200vh}` does, so the band is a scrollable page rather than a
  cropped frame

#### Scenario: The five declared targets resolve inside the band

- **Given** the source's five menu `href`s point at `index.html`, `about.html`,
  `services.html`, `blog.html` and `contact.html`, **none of which exist**
- **When** the recreation's menu rows are inspected
- **Then** each of the five rows resolves to a real in-band section (own copy of
  the same *kind*: home → intro, about → story, services → offerings, blog →
  posts, contact → a contact block), each with a `scroll-margin-top` ≥ the header
  height, and **zero** dead `href="#"` links remain anywhere in the app
- **And** any imagery used inside those sections comes from
  `https://picsum.photos/seed/larboard-<n>/<w>/<h>`

### Feature: Footer and provenance hygiene

#### Scenario: The app ships a Component Dock footer

- **Given** the source snippet has no footer at all (it is a single section)
- **When** the recreation is built
- **Then** it adds a minimal app-shell footer (a deliberate, documented delta
  from the source) with a dark surface and a **1 px** translucent hairline top
  edge, holding the app's wordmark and exactly **one** link to
  `https://www.componentdock.com/` branded "Component Dock" (new tab,
  `rel="noreferrer"`) next to a **current year computed at render**

#### Scenario: No provenance strings and no copied assets

- **Given** the app source is searched
- **When** it is checked
- **Then** no `colorlib`, "Website Menu 06" or `website-menu-06` string appears
  anywhere in `apps/larboard` (comments included — record the palette as
  design-token notes instead: "brand accent `#007bff`")
- **And** nothing from the source archive ships: no `css/style.css`, no
  `js/snippet.js`, no woff2 files (`open-sans-*.woff2`, `icomoon-subset.woff2`),
  no `hero_1.jpg`, no inlined three-bar or close SVG path copied verbatim, no
  `cl-`-prefixed utility class names, and no copied copy (the "Brand" wordmark and
  the row labels are **not** reproduced verbatim) — images come from picsum and
  icons from `lucide-react`

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
  **`.3s`** (`ease-in-out` / `ease`), and the close glyph over `.3s ease`
- **And** under `prefers-reduced-motion: reduce` those transitions collapse to
  effectively instant, the panel appears without sliding, and all content is
  present immediately (no motion gate on first paint)
- **And** the hamburger, the close button, the veil and every menu row are
  keyboard operable with visible `focus-visible` rings and state exposed to
  assistive tech (`aria-expanded`, `aria-controls`, `aria-current`), the panel is
  a labelled dialog-like region, and `Escape` closes it

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/larboard/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/larboard/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `apps/larboard` recreates ColorLib **"Website Menu V06"** (source slug
      `website-menu-06`, https://colorlib.com/wp/template/website-menu-06/) under
      the new name `larboard`; the registry/`package.json` reads
      `@free-react-templates/larboard`
- [ ] The header is **absolutely positioned, transparent**, `top:0; width:100%`,
      with **24 px** vertical padding (measured `cl-py-4`; the sheet's own
      `3rem`-below-992 px rule is outranked by it — state the single chosen value
      in the PR), floating over the band
- [ ] The **hamburger is in the LEFT column** (the source's `cl-col-9 cl-order-1`)
      and the **wordmark in the RIGHT column** (the source's
      `cl-col-3 cl-order-2 cl-text-right`) — the layout is mirrored versus the
      `-05` sibling and must not be normalised
- [ ] The wordmark is **white, Open Sans 700, uppercase, 16 px**; the hamburger is
      a real button with a ≈**28 px** white `lucide-react` `Menu` glyph and a
      ≈`3rem` vertical click target (`cl-py-5`), visible at **every** width
- [ ] The band is a **`100vh` full-bleed background image** (`cover`,
      `center center`, `no-repeat`) from
      `https://picsum.photos/seed/larboard-hero/1920/1080`; the header sits over
      it so first paint = image + wordmark + hamburger; the page scrolls like the
      source's `body{height:200vh}`
- [ ] The off-canvas panel matches: **300 px** wide, white, **fixed LEFT**
      (`left:0`), `padding-top:20px`, full height, **`-10px 0 20px -10px
      rgba(0,0,0,.1)`** shadow, **`.3s ease-in-out`** slide from
      `translateX(-100%)`, body `height:calc(100vh - 52px)` with
      `padding:0 20px 20px` and **150 px** bottom padding, `overflow-y:auto`, a
      **30 px** close glyph at its **top-right** (`#212529`, hover `#ced4da`) and
      a **`rgba(0,0,0,.5)`** veil (`.3s` fade) that sits at `z-index:1` at rest
      and `1002` when open, under the panel's `z-index:2000`
- [ ] The menu is **five flat rows** in source order (home, about, services, blog,
      contact), `padding:10px 20px`, **20 px**, `#212529` → `#007bff` on hover,
      the current row (**home**) in **`#007bff`** with `aria-current="page"`; **no
      dropdowns, no sub-levels, no socials, no round arrow toggle**
- [ ] The panel closes on the close glyph, a click/`mouseup` outside it, `Escape`
      and a resize wider than **768 px** (each tested); focus moves in on open and
      returns to the toggle on close
- [ ] The shape language is kept square: **no** rounded corners or pills anywhere
      (this variant has no circular controls at all — its only `border-radius` is
      a normalize `button{border-radius:0}` and the `50 %` `arrow-collapse` rule
      never renders) — do not "modernise" the panel or rows into pills
- [ ] One nav source of truth: the same nav definition drives the panel rows
      (mounted, not DOM-cloned) — no hand-maintained duplicate list
- [ ] The five declared targets resolve to real in-band sections with
      `scroll-margin-top` ≥ the header height; **zero** dead `href="#"` links
      remain
- [ ] Zero `colorlib` / "Website Menu 06" / `website-menu-06` provenance
      references anywhere in `apps/larboard` (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no woff2 files
      (`open-sans-*.woff2`, `icomoon-subset.woff2`), no `hero_1.jpg`, no `cl-`
      utility classes, no jQuery/Bootstrap, no copied strings, no copied inline
      SVG paths
- [ ] `public/CNAME` = `larboard.free.componentdock.com` and
      `"homepage": "https://larboard.free.componentdock.com"` in
      `apps/larboard/package.json`; `package-lock.json` registers
      `@free-react-templates/larboard`
- [ ] Footer links `https://www.componentdock.com/` exactly once ("Component
      Dock") with a computed current year
- [ ] Accessibility: toggle has `aria-expanded`/`aria-controls`; the panel is a
      labelled region with focus moved in and returned; every interactive element
      has a visible focus ring; `prefers-reduced-motion: reduce` removes the
      slide/fade motion
- [ ] `scripts/verify-app.sh larboard` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] PR description includes: source template (ColorLib Website Menu V06),
      preview URL
      (`https://preview.colorlib.com/theme/bootstrap/website-menu-06/` → **HTTP
      200**, 2,878 B, title `Website Menu #6`; the slug-only
      `/theme/website-menu-06/` path 404s; archive
      `https://preview.colorlib.com/downloads/free/website-menu-06.zip` → HTTP
      200, 705,375 B, sha256-identical `style.css`/`snippet.js`; screenshot
      1200×972), the design tokens used (`#007bff` brand, `#0056b3` accent hover,
      `#212529` text, `#fff` panel, transparent header, `rgba(0,0,0,.5)` veil,
      `-10px 0 20px -10px rgba(0,0,0,.1)` shadow, square radii with no circular
      controls, Open Sans 300/400/700, 16 px uppercase wordmark, 28 px hamburger,
      300 px left panel, 20 px rows), the structure (fixed left panel + transparent
      header over a `100vh` image band) and what differs (new name + wordmark, own
      labels/copy, mirrored-to-larboard naming, lucide instead of the inline
      SVG/glyph, Google Fonts instead of self-hosted woff2, the five dead page
      links materialised as labelled sections, one nav source of truth instead of
      a DOM clone, added aria/keyboard states, reduced-motion handling, footer
      attribution)
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
