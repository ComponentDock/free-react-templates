# Halyard — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V10"** (source slug `website-menu-10` — the
Website Menus family's **solid-menu / split-nav variant**: one **opaque white** bar in
normal flow with a **three-column grid** whose outer thirds hold the two halves of a
six-item nav (`Home · Projects · Services` right-aligned in the left third,
`About · Blog · Contact` left-aligned in the right third) around a **lowercase green
wordmark dead-centre on the page** — over a `100vh` full-bleed image band, plus a
**`300 px` off-canvas drawer** rendered from the same two lists under a
`rgba(0,0,0,.5)` veil).

Type is **Quicksand (400/700 declared; the archive's two `600` files are never
referenced; a dead `Roboto` stack sits in the normalize)**. Shape language is
**square everywhere** (`button{border-radius:0}`, square bar, square drawer — the only
`50%` in the sheet belongs to a drawer disclosure control that **never renders** here).
Live preview: `https://preview.colorlib.com/theme/bootstrap/website-menu-10/`
(**HTTP 200**, 3,179 B, `<title>Website Menu #10</title>`); the slug-only path
`https://preview.colorlib.com/theme/website-menu-10/` returns **HTTP 404**.
Screenshot: `website-menu-10.jpg` (HTTP 200, AVIF, 1200×972, 116,662 B). Archive:
`https://preview.colorlib.com/downloads/free/website-menu-10.zip` (HTTP 200,
649,245 B) — `style.css` (15,292 B, sha256 `3cd379a8…`) and `snippet.js` (2,525 B,
sha256 `290c706c…`) are **byte-identical** to the live files.

Spec: `openspec/specs/template-halyard/spec.md`. New name: **halyard** — the line a
crew hauls to hoist a pennant to the masthead, for a bar where an opaque yard carries
a centred emblazoned wordmark with the two nav groups hanging off either side; the
nautical companion to `starboard` (`website-menu-05`), `larboard` (`-06`), `topdeck`
(`-07`), `bowsprit` (`-08`) and `gangway` (`-09`). Never reuse the source slug
`website-menu-10`, the name "Website Menu 10", the source's wordmark, the six source
labels, the `cl-` utility namespace, the inline SVG paths, the `\e313`/`\f078`
icon-font glyphs, the self-hosted Quicksand woff2 files, or any copy verbatim.

## Preview status — where the live preview actually lives (read this first)

- `https://preview.colorlib.com/theme/website-menu-10/` → **HTTP 404**
  (`Not Found`, 9 B). The *Website Menus* family does **not** live under the
  slug-only theme path (same as `-01`…`-09`).
- `https://preview.colorlib.com/theme/bootstrap/website-menu-10/` → **HTTP 200**,
  `text/html; charset=utf-8`, **3,179 B**, `<title>Website Menu #10</title>`. This is
  the URL the preview host's own catalog index records:
  `https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`
  (633,990 B) →
  `"website-menu-10":{"name":"Website Menu V10","tag":"Website Menu Templates","img":"…/website-menu-10-768x622.jpg","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-10/","details":"https://colorlib.com/wp/template/website-menu-10/"}`.
- Assets: `css/style.css?v=79f60514` (**15,292 B**, sha256
  `3cd379a82b46961b16d291f2b3eb1226c8f2dcde07d0732a0f29bd4de3bb07ff`),
  `js/snippet.js?v=89ce878c` (**2,525 B**, sha256
  `290c706ca94407557b6808437c5ae5a7edd79cfff3d572b03ff2471e0d1ed63c`). The host also
  serves the sibling assets the sheet references: `fonts/quicksand-400-latin.woff2`
  (28,336 B), `fonts/icomoon-subset.woff2` (**408 B**), `images/hero_1.jpg`
  (475,413 B) — all HTTP 200.
- Archive twin: `https://preview.colorlib.com/downloads/free/website-menu-10.zip`
  (**HTTP 200**, `application/zip`, **649,245 B**, sha256 `244ef401…` — the ColorLib
  page rounds it to "634 KB"). Contents: `index.html` (**2,976 B**), `css/style.css`,
  `js/snippet.js`, `README.md` (**1,265 B**), `images/hero_1.jpg` (1900×1267),
  **6** Quicksand woff2 files (400/600/700 × latin/latin-ext) and
  `fonts/icomoon-subset.woff2` (408 B). `diff` live-page vs `index.html` = **9 lines**,
  head-only (the preview host's `noindex` meta tags + cache-busting query strings).
- Source page facts (https://colorlib.com/wp/template/website-menu-10/, HTTP 200,
  108,761 B): title "Website Menu V10 - Free Solid Menu Template 2026 - Colorlib";
  posted **January 28, 2021** by **Rok Krivec**; author **Colorlib**; Released
  **September 2026**; License **CC BY 3.0**; description *"If you would like your
  navigation bar to pop, this free solid menu template is the right option for you. It
  comes with a completely responsive structure and no framework to load."*;
  `meta`/`og:description` *"The best free solid menu template that makes your
  navigation bar more visible and quick to access on any device."*; the September 2026
  update note (*plain HTML and CSS plus a few lines of vanilla JavaScript … the
  download is 634 KB (it was 2.0 MB) … the mobile menu and sticky header work without
  jQuery*); sibling links *previous post: Website Menu V09* / *next post: Website Menu
  V11*; `datePublished` **2021-01-28**, `dateModified` **2026-09-25**. ⚠️ The "sticky
  header" in that sentence is **marketing only** — the sheet contains **zero**
  occurrences of `sticky` (the only `position:fixed` is the drawer), the header is
  `position:relative`, and the live render confirms it scrolls away (measured
  `header y = -800` after `scrollTo(0, 800)`). Do **not** implement a sticky bar.
- Destination probes: `index.html` → HTTP 200; `project.html`, `services.html`,
  `about.html`, `blog.html`, `contact.html` → **HTTP 404** (the preview host only
  serves the snippet's own index page), so every non-index destination must be
  materialised as real in-page content in the recreation.

## Live render cross-check (2026-10-12; 1280×800, 1200/1199/992/991/768/767/576/375)

| Width | Container | Columns | Nav lists | Hamburger | Wordmark | Header |
| --- | --- | --- | --- | --- | --- | --- |
| 375 px | 328 px @ x = 16 | stacked 100 %, col1/col3 **0 px** | `display:none` | visible @ `x = 316`, `y = 16` | floated left @ `x = 31` | **72.8 px** |
| 576 px | 529 px @ x = 16 | stacked 0 / 40.8 / 0 | `display:none` | visible @ `x = 517` | floated left @ `x = 31` | 72.8 px |
| 767 px | **540 px** @ x = 106 | stacked; col3 wraps to `y = 56.8` | `display:none` | visible @ `x = 708.5` | floated left @ `x = 121` | 72.8 px |
| 768 px | 720 px @ x = 16.5 | stacked | `display:none` | visible | floated left @ `x = 31.5` | 72.8 px |
| 991 px | 720 px @ x = 128 | stacked | `display:none` | visible @ `x = 820` | floated left @ `x = 143` | 72.8 px |
| 992 px | 945 px @ x = 16 (960 cap not binding) | 3 × 314.98 | **`block`** | **hidden** | centred in col 2 | **96 px** |
| 1199 px | **960 px** @ x = 112 | 3 × 319.98 | `block` | hidden | centred (anchor `x = 554.33`; centre 591.98 vs page centre 592) | 96 px |
| 1200 px | **1140 px** @ x = 22.5 | 3 × 379.98 | `block` | hidden | centred (anchor `x = 554.83`) | 96 px |
| 1280 px | **1140 px** @ x = 62.5 | 3 × 379.98 | `block` | hidden | anchor `594.83 × 75.3` (**centre 632.48** vs page centre **632.5**) | 96 px |

Nav row rects when visible: 1280 px → `Home 162.28–237.11`, `Projects 241.48–331.39`,
`Services 335.77–427.49`, `About 837.47–911.72`, `Blog 916.09–979.64`,
`Contact 984.02–1072.22`; 1200 px → `122.28 … 1032.22`; 1199 px → `151.78 … 1001.72`;
992 px → `50.78 … 895.72`. Every row is **64 px** tall (`padding:20px 0`,
`margin:0 15px`, 16 px / `line-height:24px`).

Other measured details at 1280×800: header **1265 × 96** at `y = 0`,
`position:relative`, `padding:16px`, `background #fff`, `z-index:1999`; row
`display:flex`, `margin:0 -15px`, height 64 px; each column 379.98 px with
`padding:0 15px`; the middle column's `div.site-logo` **40.8 px** tall at `y = 27.59`
with its anchor **75.3 × 34** at `y = 30.59`; the hamburger hidden (`display:none`);
`body` **1600 px** tall (`height:200vh`) at every width; `.hero` **1265 × 800** at
`y = 96` with the image applied **inline**; the drawer parked off-screen at
`x = 1315` with six 50 px rows **245 px** wide.

## Source facts worth keeping

- **The bar is opaque and in flow** — the family's only "solid" header. It is not
  absolute, not transparent and not overlapping: the band starts at the bar's bottom
  edge (`y = 96` on desktop, `y = 72.8` below 992 px). Do not give it a
  `position:absolute` + `top` offset like its `-08`/`-09` siblings.
- **The nav is two separate `<ul>`s in two columns**, both with the classes
  `site-menu main-menu js-clone-nav`, and the group alignment comes from the
  **`text-align`** on their `nav` wrappers (`cl-text-right` / `cl-text-left`) — the
  `cl-ml-auto` on both `nav`s and on both `ul`s and the `cl-mr-auto` on the third
  `nav` are **inert** (`display:block` boxes with auto width ignore auto margins).
- **The wordmark is centred by construction, not by flex**: the middle column is
  `cl-text-center` and full width, and the anchor is `display:inline`, so its centre
  lands at the page centre (measured 632.48 vs 632.5 px at 1280 px).
- **The nav's hover rule is dead code.**
  `.site-navigation .site-menu > li > a:hover{color:#89ba16}` (0,3,1) loses to the base
  `> li > a{color:#000 !important}`, so forcing `:hover` on `Projects` with CDP
  `CSS.forcePseudoState` still computes `rgb(0,0,0)`. The **only** visual state in the
  source bar is "the current page is green". Likewise the wordmark never changes
  colour on hover: `.site-logo a{color:#89ba16}` sits **later** in the sheet than the
  generic `a:hover{color:#0056b3}` at equal specificity, so green wins in both states.
  Restoring a real hover/`focus-visible` affordance is an intended delta.
- **The entire dropdown machinery is dead here.** The sheet carries the caret rule
  (`> a:before{content:"\e313"; font-size:16px; top:50%; right:0;
  translateY(-50%); font-family:'icomoon'}`), the `has-children:hover/:focus/:active`
  colours, `cl-collapse:not(.cl-show){display:none}`, the drawer arrow rules
  (`36 × 36`, `right:0; top:10px`, `border-radius:50%`, hover `#f8f9fa`, `::before`
  glyph `\f078` at `12px`, `rotate(-180deg)` open / `rotate(0)` collapsed, `.3s all
  ease`), the sub-list rules (`padding-left:40px`, 16 px) and a third level
  (`padding-left:60px`), and `snippet.js` still inserts
  `span.arrow-collapse.cl-collapsed[role=button]` into every
  `.site-mobile-menu .has-children` — but **the markup contains zero `has-children`**
  (verified live: `hasChildren: 0`, `arrows: 0`), so no arrow is ever created, no
  sub-list ever exists and the **408 B `icomoon-subset.woff2` is never used by any
  rendered glyph**. Drop all of it; do not invent a dropdown.
- **The hamburger is an `href="#"` anchor with a 48 px-in-each-direction hit box**
  (`cl-py-5`), inside a `position:absolute; right:0` wrapper pinned to the row
  (`cl-position-relative`): the div measures **28 × 41.59 px** while the anchor's
  inline box measures **28 × 116 px** and starts at `y = −21`, i.e. it overflows the
  header's 16 px padding on both sides. Keep the generous tap target, but on a real
  `<button>`.
- **Both dead classes are still on the markup**: `site-navbar-target` (on the drawer
  **and** the header) and `main-menu` are referenced **nowhere** in the sheet or the
  JS — leftovers of the family's jQuery-era markup. `js-clone-nav` is a real hook (the
  clone step), and it is why the drawer receives **two** cloned `ul`s.
- **The `Roboto` body stack is dead** — the later `body{font-family:"Quicksand"…}`
  rule wins. **The two Quicksand `600` woff2 files are dead** — the sheet declares
  only 400 and 700.
- **The drawer transition differs from its siblings**: `.3s all ease-in-out`
  (`-09` uses `.2s cubic-bezier(.66,.2,.48,.9)`), and its opening selector is the
  **descendant** form `.offcanvas-menu .site-mobile-menu`, so the state class must sit
  on an ancestor (the source puts it on `body`).
- **The drawer's current row is green here** (`.site-nav-wrap li.cl-active > a
  {color:#89ba16}`), not black as in `-09`; the close hover is `#ced4da`
  (`-09`: `#dee2e6`).
- **The drawers' disclosure arrows do not exist** and **the drawer does not close when
  a destination is chosen** — the latter is an intended delta (the source only closes
  on the `✕`, an outside `mouseup`, `Escape` or a resize with `innerWidth > 768`).
- **No sticky header**, despite the marketing line on the ColorLib page.

## What makes this variant different from its siblings (`-01`…`-09`)

1. **A solid, opaque, in-flow bar** — every other member of the family floats a
   transparent (or partially filled) bar over the page; here the header is white and
   the band starts beneath it.
2. **A split nav — two lists in two columns** — the family's only variant that divides
   six destinations into mirrored groups (three per side) instead of one centred or
   one left-aligned list.
3. **A centred wordmark** between the two groups (`text-align:center` in the middle
   third), the family's only logo that is not pinned to an edge.
4. **The earliest desktop-nav breakpoint in the family**: the lists appear at
   **992 px** (`cl-d-lg-block`), not at the 1200 px `xl` tier its `-08`/`-09` siblings
   require — and with it a **tablet-free** tier structure: below 992 px there are only
   two visible items (the floated wordmark and the absolute hamburger), no CTA pair.
5. **A classic Bootstrap container** (`max-width` tiers 540/720/960/1140 with 15 px
   gutters) instead of the fluid full-width container of `-08`/`-09`.
6. **No dropdowns, no CTAs, no action rows** — the nav is six plain links; the
   family's dropdown/disclosure CSS and its 408 B icon subset are shipped but never
   used.
7. **A `300 px` drawer fed by two cloned lists** (`js-clone-nav` twice), so its six
   rows read as one continuous list in document order.

## Global tokens

| Token | Value | Notes |
| --- | --- | --- |
| brand green | `#89ba16` | wordmark anchor, the `cl-active` nav row, the drawer's current row |
| ink | `#212529` | body colour, drawer rows |
| nav label | `#000` | `.site-navigation .site-menu > li > a` (`!important`) and the hamburger (via `cl-text-black`) |
| surfaces | `#fff` | page, the **opaque bar** (`cl-bg-white`, `!important`), the drawer |
| overlay | `rgba(0,0,0,0.5)` | `body:before` veil (`opacity 0→1`, `z-index 1→1002`, `.3s`) |
| close hover | `#ced4da` | drawer `✕` |
| arrow hover | `#f8f9fa` | dead (no arrows render) |
| disabled | `#6c757d` | `.cl-nav-link.disabled` |
| shadows | `-10px 0 20px -10px rgba(0,0,0,.1)` (drawer) — **the bar itself has none** | |
| radii | **`0` everywhere** (`button{border-radius:0}`, square bar, square drawer); the sheet's only `50%` is on the never-rendered disclosure arrow | do not add rounding |
| type | Quicksand 400/700 (self-hosted subsets in the source) + a **408 B `icomoon` subset whose glyphs never render** | `lucide-react` instead |
| motion | `a` `.3s all ease`; drawer `transform .3s all ease-in-out`; veil `.3s all ease`; **no button/CTA transition exists** | |

## Section 0 (chrome) — `div.site-mobile-menu` + `header.site-navbar`

Document order: the **drawer comes first** in the DOM (before the header), then the
header, then the band. The header is `position:relative; top:0; width:100%;
padding:1rem; z-index:1999` with the markup's `cl-bg-white` supplying the **opaque
`#fff`** surface — measured **1265 × 96 px** at 1280 px and **72.8 px** below 992 px.
Inside: `div.cl-container` (`margin:0 auto; padding:0 15px` + the 540/720/960/1140
max-width tiers) › `div.cl-row.cl-align-items-center.cl-position-relative`
(`display:flex; flex-wrap:wrap; margin:0 -15px`) › **three** `div.cl-col-lg-4`
(`position:relative; width:100%; padding:0 15px` → `flex:0 0 33.33333%;
max-width:33.33333%` at ≥992 px) holding, in order: the left `nav`
(`cl-text-right`), the middle `div.cl-text-center` (wordmark + hamburger wrapper) and
the right `nav` (`cl-text-left`). Below 992 px the three columns stack and the outer
two collapse to zero height (col 3 wrapping onto a second line at `y = 56.8`), which
is exactly why the bar is 72.8 px tall on mobile: 16 + 40.8 + 16.

## Section 1 — the two nav lists (one per outer column)

Each is `ul.site-menu.main-menu.js-clone-nav.cl-ml-auto.cl-d-none.cl-d-lg-block`:
`display:none` below **992 px**, `display:block` at ≥992 px. Three `li` each, in source
order — left: current/home (`cl-active`, `index.html`), projects (`project.html`),
services (`services.html`); right: about (`about.html`), blog (`blog.html`), contact
(`contact.html`). Rows: `li{display:inline-block}`, `li > a{display:inline-block;
padding:20px 0; margin:0 15px; color:#000 !important; font-size:16px;
line-height:24px}` → measured **64 px** rows; the current row is
**`#89ba16 !important`**; hover is **dead code** (see Source facts). The left list is
right-aligned by its wrapper's `cl-text-right` (measured `162.28 … 427.49` at
1280 px, i.e. flush with col 1's right padding edge) and the right list left-aligned by
`cl-text-left` (measured `837.47 … 1072.22`, never reaching the container's right
edge). In the recreation the two groups are **one data structure rendered into two
`<nav>` columns** — never two hand-maintained label lists.

## Section 2 — the centred wordmark and the absolute hamburger (col 2)

- Wordmark: `div.site-logo{margin:0; padding:0; font-size:1.7rem}` › `a{color:#89ba16;
  text-transform:lowercase}` — measured **27.2 px**, weight **400**,
  `line-height:1.5` (**40.8 px**), `display:inline`, centred on the page by its
  column's `cl-text-center` (anchor centre 632.48 px vs page centre 632.5 px at
  1280 px). Below 992 px the sheet flips it to `float:left; position:relative`, so it
  becomes a left-aligned floated box (measured `x = 31` at 375 px, `x = 121` at
  767 px, `x = 143` at 991 px). Use own brand text (never the source's wordmark).
- Hamburger: `div.cl-ml-auto.toggle-button.cl-d-inline-block.cl-d-lg-none` with
  `.toggle-button{position:absolute; right:0}` (containing block = the
  `cl-position-relative` row) › `a.site-menu-toggle.cl-py-5.js-menu-toggle
  .cl-text-black[href="#"]` › `span.icon-menu.cl-h3.cl-text-black` › an inline SVG
  three-bar icon (`.cl-icon{height:1em; width:auto; fill:currentColor}`). Measured
  **28 × 41.59 px** for the div, **28 × 28 px** for the SVG at `0.75 px` from its top,
  `x = 316` at 375 px / `708.5` at 768 px / `820` at 991 px, `y = 16` always,
  `display:none` at ≥992 px. The anchor's `cl-py-5` (`padding:48px 0`) makes its hit
  box **28 × 116 px** starting at `y = −21`. In the recreation this is a real
  `<button>` with the same geometry and a generous (not overflowing) tap target.

## Section 3 — the off-canvas drawer

`div.site-mobile-menu{width:300px; position:fixed; right:0; z-index:2000;
padding-top:20px; background:#fff; height:calc(100vh);
box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transform:translateX(110%) (330 px);
transition:.3s all ease-in-out}` → `.offcanvas-menu .site-mobile-menu
{transform:translateX(0%)}` (a **descendant** selector — the state class lives on
`body` in the source; a React implementation can key off its own root state), with
`body:before` as the **live** `rgba(0,0,0,.5)` veil (`opacity 1`, `z-index 1002`,
`visibility visible`, `.3s all ease`; measured mid-transition `z-index` 985 → 1002).

- Strip: `div.site-mobile-menu-header{width:100%; float:left; padding:0 20px}`
  (measured **300 × 50.125 px** at `y = 20`) with
  `div.site-mobile-menu-close{float:right; margin-top:8px}` ›
  `span.icon-close2.js-menu-toggle{font-size:30px; display:inline-block;
  padding-left:10px; line-height:1; cursor:pointer; transition:.3s all ease;
  hover{color:#ced4da}}` (measured **40 × 32.125 px** at `x = 300`) — an inline SVG
  `✕` in the preview (`lucide-react` `X`); **this span is a second `.js-menu-toggle`**,
  sharing the hamburger's handler.
- Body: `div.site-mobile-menu-body{overflow-y:scroll; position:relative;
  padding:0 20px 20px; padding-bottom:150px; height:calc(100vh - 52px)}` (measured
  **300 × 748 px** at `y = 70.125` on an 800 px viewport, `scrollHeight` 748).
- `snippet.js` clones **every** `.js-clone-nav` into it
  (`copy.className = 'site-nav-wrap'; copy.removeAttribute('id')`) — and this page has
  **two**, so the drawer gets **two** `ul.site-nav-wrap` blocks: `Home`, `Projects`,
  `Services`, then `About`, `Blog`, `Contact`. Rows measured **245 px** wide inside the
  300 px panel, **50 px** tall (`a{display:block; padding:10px 20px; position:relative;
  color:#212529; font-size:20px; line-height:30px}`), the current row
  **`#89ba16`**, hover **`#89ba16`**, no underline. Sub-row and third-level rules
  (16 px at `padding-left:40px`/`60px`) exist in the sheet but never match. In the
  recreation the panel is rendered from the **same nav data** (one component, two
  render targets) — never a DOM clone.
- Dismissal: every `.js-menu-toggle` click toggles `body.offcanvas-menu` (adding
  `cl-active` + `aria-expanded="true"` to all toggles while open);
  `document` **`mouseup`** outside the panel (and not on a `.js-menu-toggle`) closes;
  **`Escape`** closes; **`resize` with `innerWidth > 768`** closes (strict `>` — a
  page at exactly 768 px keeps the state; normalise to a breakpoint and document it).
  A click on an in-panel link does **not** close it in the source (delta: make it
  close). All four source paths were exercised live in the harness (outside `mouseup`
  on `.hero`, `Escape`, resize to 900 px).

## Section 4 — `div.hero` (the image band)

Measured **1265 × 800 px** at `y = 96` at 1280×800 and **753 × 800 px** at
`y = 72.8` below 992 px: `height:100vh; width:100%; background-size:cover;
background-position:center center; background-repeat:no-repeat`, with the image set
**inline** (`images/hero_1.jpg`, 1900×1267, 475,413 B — the same
three-people-against-a-wall photo as the `-08`/`-09` siblings per the screenshot;
**never copied** — use `https://picsum.photos/seed/halyard-hero/1920/1080`).
`body{height:200vh}` (measured 1600 px at an 800 px viewport at every width) is the
only thing below it and is blank filler: the recreation must ship **real content**
instead, and the bar must stay non-sticky so it scrolls away.

## Screenshot read-through (1200×972, AVIF→PNG; header band inspected at full res)

A browser-chrome mock of the live preview at rest, address bar reading
`preview.colorlib.com`. Under it, a **solid white bar ~96 px tall, full width, flat
(no border, no shadow, no translucency)**: at its left `Home` in **green** followed by
`Projects` and `Services` in black, right-aligned *towards* the middle; **dead-centre
the lowercase `brand`** in the same green at ~27 px; at the right `About`, `Blog`,
`Contact` in black, left-aligned *away* from the middle — a symmetric split around a
centred wordmark. Directly beneath, with **no gap**, the full-bleed photo (two men and
a woman against a grey cinderblock wall) fills the rest of the frame: no content
sections, no CTA, no footer. That frame — one **opaque** bar, a split six-item nav, a
green centred wordmark, and a `100vh` photo band starting at the bar's bottom edge —
is the design being replicated. The screenshot is also the source of the accent colour
the stylesheet confirms as `#89ba16`.

Harness captures taken for this spec (files under `/tmp/wm10/`, plus the harness's own
`shot.png`, overwritten per call — re-take if needed): **1280×800** (`desktop1280.png`
— white bar with `Home`/`Projects`/`Services`, centred green `brand`, `About`/`Blog`/
`Contact`, photo below), **768×800** (`tablet768.png` — floated wordmark + hamburger,
no nav) and **375×800** (`phone375.png` closed; `phone375-drawer.png` /
`phone375-drawer3.png` with the drawer open: six 50 px rows, green current row, `✕` at
the top right, photo dimmed by the veil while the green wordmark stays legible above
it).

## Fidelity gotchas

1. **The bar is opaque and in flow** — never absolute, never transparent, no `top`
   offset. The band starts at its bottom edge (`y = 96` / `y = 72.8`).
2. **Two `<ul>`s, two columns** — the split is structural. Do not merge the six rows
   into one list and fake the split with margins.
3. **The wordmark is centred by `text-align:center` in a full-width middle column**,
   so it is centred on the **page**, not on the remaining space between the groups.
4. **The nav's hover rule is dead in the source** — only the current row is green.
   Restore a real hover/`focus-visible` affordance and record it as a delta.
5. **The group alignment comes from `text-align`**, not from auto margins or
   `justify-content`; `cl-ml-auto`/`cl-mr-auto` in this markup do nothing.
6. **Below 992 px there are exactly two visible items**: the floated wordmark and the
   absolute hamburger. No CTA, no action rows, no partial nav.
7. **The container has max-width tiers** (540/720/960/1140) with 15 px gutters — this
   is not the family's fluid container; `992 px` measures 945 px because the cap is not
   binding there.
8. **The drawer is not mobile-only** — it is the navigation below 992 px and exists in
   the DOM at every width (translateX, not `display:none`), fed by **two** cloned lists
   in document order.
9. **No dropdowns, no arrows, no sub-lists** — the sheet's `has-children` machinery and
   the 408 B icon subset are dead code; do not invent a menu.
10. **The drawer's transition is `.3s ease-in-out`** (not `-09`'s `.2s
    cubic-bezier`), the close hover is `#ced4da`, and the drawer's current row is
    **green** (not black).
11. **The veil is live** and the stacking is veil `1002` < header `1999` <
    drawer `2000`.
12. **The hamburger is a real `<button>`** with `aria-expanded`/`aria-controls` (the
    source's `href="#"` anchor has neither) and keeps a generous tap target.
13. **The source's labels have no hover or focus feedback at all** — add
    `focus-visible` rings and hover colour (deltas).
14. **Drop the dead code**: `site-navbar-target`, `main-menu`, the inert auto margins,
    the `has-children`/caret/arrow/`cl-collapse` rules, the drawer sub-list and
    third-level rules, the arrow-injection JS, the `Roboto` body stack, the two
    unreferenced `600`-weight Quicksand files and the unused 408 B `icomoon` subset.
15. **No sticky header**, and `body{height:200vh}` is not copied — ship real content.
16. **Never copy**: the source's six labels, its wordmark, the `cl-` namespace, the
    inline SVG paths, the `\e313`/`\f078` glyphs, the woff2 files or `hero_1.jpg`.

## Reference artifacts (for the implementer)

- `/tmp/wm10/prev.html` — live preview HTML (**3,179 B**).
- `/tmp/wm10/style.css` — **15,292 B**, sha256 `3cd379a8…` (**byte-identical** to the
  archive copy `z/website-menu-10/css/style.css`).
- `/tmp/wm10/snippet.js` — **2,525 B**, sha256 `290c706c…` (byte-identical to the
  archive copy).
- `/tmp/wm10/wm10.zip` — the snippet archive (**649,245 B**, sha256 `244ef401…`),
  extracted to `/tmp/wm10/z/website-menu-10/`: `index.html` (2,976 B, archive twin —
  the live-vs-archive diff is **9** head-only lines), `images/hero_1.jpg`
  (1900×1267, 475,413 B), `fonts/` (6 Quicksand woff2 + `icomoon-subset.woff2` 408 B),
  `README.md` (1,265 B).
- `/tmp/wm10/page.html` — the ColorLib template page (**108,761 B**) — source of the
  description, posted/released/license and download-size facts.
- `/tmp/wm10/cat.js` — the preview catalog index (**633,990 B**) mapping the slug to
  `theme/bootstrap/`.
- `/tmp/wm10/shot.png` — the 1200×972 screenshot (converted from the 116,662 B AVIF
  original) — the source of the visual read-through.
- `/tmp/wm10/measure.json` — the per-width computed-style dump (header, container,
  row, columns, navs, lists, rows, wordmark, hamburger, hero, drawer, drawer rows).
- `/tmp/wm10/desktop1280.png`, `tablet768.png`, `phone375.png`,
  `phone375-drawer.png`, `phone375-drawer3.png`, `desktop1280-scrolled.png` — live
  captures at 1280×800 (bar + photo), 768×800, 375×800 (closed, drawer open) and after
  `scrollTo(0, 800)` (proving the bar scrolls away).
