# Template: Halyard (Website Menus)

## Purpose

Halyard is a **solid, opaque white header — one tier, always in normal flow — whose
three-column grid splits the navigation into two mirrored groups around a centred
lowercase wordmark**: `Home · Projects · Services` in the left third (right-aligned
against the middle), the **green lowercase wordmark dead-centre on the page**, and
`About · Blog · Contact` in the right third (left-aligned away from the middle) — the
**only member of the *Website Menus* family that splits its nav and centres its
logo**, and the only one with **no dropdown at all** (the family's entire
`has-children` / caret / disclosure machinery is present in the sheet but never
matches here). It is also the family's **first classic Bootstrap container**: a
centred `cl-container` with responsive `max-width` tiers (`540 / 720 / 960 / 1140 px`)
instead of the fluid `cl-container-fluid` its `-08`/`-09` siblings use, and a header
that **pushes the content down** (the band starts below the bar at `y = 96 px` on
desktop, `72.8 px` below `992 px`) rather than floating over it.

It is an original React recreation of the ColorLib free **"Website Menu V10"**
snippet (source slug `website-menu-10`), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation matches
the source's structure, order and design tokens 1:1 but copies no asset (no images,
no font files, no CSS files, no icon-font glyphs, no inline SVG paths, no text
verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-10/ — page title
  "Website Menu V10 - Free Solid Menu Template 2026 - Colorlib", **HTTP 200**,
  108,761 B, verified 2026-10-12. Page meta: posted **January 28, 2021** by
  **Rok Krivec**, category *HTML & CSS Website Templates*, 0 comments; sibling links
  *previous post: Website Menu V09*, *next post: Website Menu V11*. ColorLib's own
  description: *"If you would like your navigation bar to pop, this free solid menu
  template is the right option for you. It comes with a completely responsive
  structure and no framework to load."* (its `meta description` /
  `og:description`: *"The best free solid menu template that makes your navigation
  bar more visible and quick to access on any device."*). Template details block:
  Author **Colorlib**, Released **September 2026**, License **CC BY 3.0**, and
  *"Updated September 2026: this snippet is now plain HTML and CSS plus a few lines of
  vanilla JavaScript: no jQuery, no Bootstrap files, no plugins. The download is
  634 KB (it was 2.0 MB). Use it on its own, or drop it into a Bootstrap 4, 5 or 6
  project and it looks the same. The mobile menu and sticky header work without
  jQuery."* — note that the marketing line again promises a *sticky header* this
  variant does **not** implement: `style.css` contains **zero** occurrences of
  `sticky` (only the drawer is `position:fixed`), the header is
  `position:relative`, and the live render confirms it scrolls away (measured
  `header y = -800` after `scrollTo(0, 800)`). Structured data on the page:
  `datePublished` **2021-01-28T20:15:56+00:00**, `dateModified`
  **2026-09-25T10:42:07+00:00**. TEMPLATES.md `## Website Menus (20)` (line 3071)
  — this item is the family's **tenth** entry at **line 3082**; the slug
  `website-menu-10` appears exactly **once** in TEMPLATES.md and in no spec on
  `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-10/` returns
  **HTTP 404** (`Not Found`, 9 B) — like its `-01`…`-09` siblings, the *Website
  Menus* family does **not** live under the slug-only theme path. The working live
  preview is **`https://preview.colorlib.com/theme/bootstrap/website-menu-10/`**
  (**HTTP 200**, `text/html; charset=utf-8`, **3,179 B**, `<title>Website Menu
  #10</title>`, verified 2026-10-12) — the URL the preview host's own catalog index
  records for this slug
  (`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
  633,990 B → `"website-menu-10":{"name":"Website Menu V10","tag":"Website Menu
  Templates","img":"…/website-menu-10-768x622.jpg","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-10/","details":"https://colorlib.com/wp/template/website-menu-10/"}`).
  Its two assets — `css/style.css?v=79f60514` (**15,292 B**, `text/css`, sha256
  `3cd379a82b46961b16d291f2b3eb1226c8f2dcde07d0732a0f29bd4de3bb07ff`) and
  `js/snippet.js?v=89ce878c` (**2,525 B**, `application/javascript`, sha256
  `290c706ca94407557b6808437c5ae5a7edd79cfff3d572b03ff2471e0d1ed63c`) — are
  **byte-identical** (same sha256, verified) to the copies in the snippet's own
  downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-10.zip`
  (**HTTP 200**, `application/zip`, **649,245 B**, sha256
  `244ef40134c39a19222da0b40427c8c940262cdbaa48366f5e4a57922e6f6db8`; the ColorLib
  page rounds this to "634 KB"), which ships `index.html` (**2,976 B**),
  `css/style.css`, `js/snippet.js`, `README.md` (**1,265 B**),
  `images/hero_1.jpg` (**1900×1267**, 475,413 B), the **Quicksand** woff2 files
  (400/600/700 × latin/latin-ext = **6 files**: 28,336 / 26,568 / 28,336 / 26,568 /
  28,336 / 26,568 B — only **400** and **700** are declared by the sheet, so the two
  `600` files are dead weight) and an **`icomoon-subset.woff2` of only 408 B** whose
  two glyphs (`\e313` caret, `\f078` chevron) are **never rendered on this page at
  all**. `diff` between the live page and the archive `index.html` is **9 lines**,
  i.e. head-only (the preview host's `noindex` meta tags and the cache-busting query
  strings) — the archive is the readable, un-versioned twin of the live preview. Both
  were read for this spec and the live render was cross-checked in a browser at
  1280×800, 1200, 1199, 992, 991, 768, 767, 576 and 375 px (see Design reference).
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-10.jpg
  (HTTP 200, served as **AVIF**, 1200×972, 116,662 B, converted to PNG and inspected
  visually 2026-10-12). No screenshot-only fallback was needed — the live preview is
  the primary reference and the archive its readable twin.
- **New name:** `halyard` (apps/halyard, `@free-react-templates/halyard`) — a
  *halyard* is the line a crew hauls to **hoist** a sail, flag or pennant to the
  masthead: here the wordmark is the pennant rigged dead-centre of the yard, with the
  two nav groups hanging off either side of it, and the whole point of the variant is
  that the bar is **hoisted solid** (opaque, in flow) rather than floating over the
  page. It continues the family's nautical run — **starboard** (`website-menu-05`),
  **larboard** (`-06`), **topdeck** (`-07`), **bowsprit** (`-08`), **gangway**
  (`-09`). Single lowercase word, kebab-safe (no hyphen needed). Verified 2026-10-12:
  a repo-wide search returns **zero** hits for `halyard` in `apps/`,
  `openspec/specs/`, `docs/templates/` and `TEMPLATES.md`, and
  `https://colorlib.com/wp/template/halyard/` returns **HTTP 404**, so it is not a
  ColorLib source name either. The source name "Website Menu 10", its "Brand"
  wordmark, its six labels and its copy are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V10" (source slug `website-menu-10`,
  https://colorlib.com/wp/template/website-menu-10/), `datePublished`
  **2021-01-28**, rewritten in the 2026 build to plain HTML + CSS + vanilla JS. Design
  wise this is the family's **"solid menu" / split-nav variant**: the bar is
  **opaque white** (`cl-bg-white`), sits **in flow** (so the band below starts at its
  bottom edge), and its nav is **two separate `<ul>` lists in the outer thirds of a
  three-column Bootstrap grid** with the wordmark centred in the middle third. There
  is **no dropdown, no CTA button, no utility bar, no footer and no content section**
  — the entire page is chrome + one `100vh` photo band, with `body{height:200vh}` as
  scroll room. Nothing about it is sticky.
- **CSS namespace:** the sheet is self-contained and `cl-`-prefixed for its
  utilities (`cl-container`, `cl-row`, `cl-col-lg-4`, `cl-nav-link`, `cl-collapse`,
  `cl-show`, `cl-bg-white`, `cl-d-none`, `cl-d-inline-block`, `cl-d-lg-none`,
  `cl-d-lg-block`, `cl-align-items-center`, `cl-position-relative`, `cl-mt-3`,
  `cl-py-5`, `cl-mr-auto`, `cl-ml-auto`, `cl-text-left`, `cl-text-right`,
  `cl-text-center`, `cl-text-black`, `cl-h3`, `cl-icon`, `cl-active`, `cl-collapsed`)
  and is a hand-rolled Bootstrap-4-look-alike — **not** a framework skin. Its first
  ~55 lines are a `:where(html) … all: revert` reset so the snippet renders
  identically inside a Bootstrap host page, followed by a `*{box-sizing:border-box}`
  normalize, a `Roboto` `body` stack that is overridden later by a `Quicksand` rule,
  an `a{color:#007bff}` page default and `button{border-radius:0}`.
- **HTML structure (live preview, 3,179 B — archive twin 2,976 B):** document order
  is exactly — (1) `div.site-mobile-menu.site-navbar-target` ›
  `div.site-mobile-menu-header` › `div.site-mobile-menu-close.cl-mt-3` ›
  `span.icon-close2.js-menu-toggle` (inline SVG `✕`) plus `div.site-mobile-menu-body`
  (empty at load — the JS fills it), (2)
  `header.site-navbar.site-navbar-target.cl-bg-white[role="banner"]` ›
  `div.cl-container` › `div.cl-row.cl-align-items-center.cl-position-relative` with
  **three `div.cl-col-lg-4`** children, (3) `div.hero` with an **inline**
  `background-image`, (4) `script`. The three columns are, in order:
  - **col 1** — `nav.site-navigation.cl-text-right.cl-ml-auto[role="navigation"]` ›
    `ul.site-menu.main-menu.js-clone-nav.cl-ml-auto.cl-d-none.cl-d-lg-block` with
    **3 `li`**: a home-style row (`cl-active`, `index.html`), a
    projects-style row (`project.html`) and a services-style row
    (`services.html`);
  - **col 2** — `div.cl-text-center` › `div.site-logo` › `a[href="index.html"]`
    (the wordmark) **plus** `div.cl-ml-auto.toggle-button.cl-d-inline-block
    .cl-d-lg-none` › `a.site-menu-toggle.cl-py-5.js-menu-toggle.cl-text-black
    [href="#"]` › `span.icon-menu.cl-h3.cl-text-black` › an inline SVG 3-bar
    hamburger;
  - **col 3** — `nav.site-navigation.cl-text-left.cl-mr-auto[role="navigation"]` ›
    `ul.site-menu.main-menu.js-clone-nav.cl-ml-auto.cl-d-none.cl-d-lg-block` with
    **3 `li`**: an about-style row (`about.html`), a blog-style row (`blog.html`)
    and a contact-style row (`contact.html`).

  Both lists carry the **same two classes** (`site-menu main-menu js-clone-nav`) and
  the **same id-less markup**, which is why the source's clone step appends **two**
  `ul.site-nav-wrap` copies into the drawer (one per group) — see the drawer section.
  `site-navbar-target` appears on **both** the drawer and the header and is
  referenced **nowhere** in the sheet or the JS (a dead hook inherited from the
  family's jQuery-era markup), as are `main-menu` and `js-clone-nav` semantically
  (the latter is a real hook for the clone step). `cl-ml-auto` on both `nav`s and on
  both `ul`s and `cl-mr-auto` on the third `nav` are **inert** (the boxes are
  `display:block` with `width:auto`, so `margin:auto` resolves to `0`): the groups are
  aligned by the **`cl-text-right` / `cl-text-left` text-align** on their `nav`
  wrappers, not by auto margins.
- **Header:** `position:relative; top:0; width:100%; z-index:1999;
  padding:1rem; margin-bottom:0` — **in flow**, opaque white via the markup's
  `cl-bg-white` (`background-color:#fff !important`), so the band below starts at its
  bottom edge. Measured **1265 × 96 px at `y = 0`** at 1280 px (16 px padding + a
  64 px row + 16 px padding) and **72.8 px tall** at 991/768/767/576/375 px
  (16 + 40.8 + 16). The 96 px height is the whole visible bar; there is **no second
  row, no overlay and no transparency** — the family's only "solid" bar.
- **Container (`div.cl-container`):** `width:100%; padding:0 15px; margin:0 auto`
  with **classic Bootstrap max-width tiers** — `@media (min-width:576px){540px}`,
  `768px → 720px`, `992px → 960px`, `1200px → 1140px` (no `min-width` above 1200).
  Measured: **1140 px at 1280 px** (x = 62.5), **1140 px at 1200**, **960 px at
  1199 px** (x = 112), **945 px at 992 px** (the 960 cap is not binding, so the
  container fills its 977 − 32 px content box), **720 px at 991 px** (x = 128) and at
  768, **540 px at 767 px** (x = 106), **529 px at 576 px**, and at 375 px the
  container is the header's full content box (**328 px**, x = 16).
- **Row and columns:** `div.cl-row{display:flex; flex-wrap:wrap; margin:0 -15px}`
  with three `div.cl-col-lg-4` = `position:relative; width:100%; padding:0 15px`, and
  `@media (min-width:992px){flex:0 0 33.33333%; max-width:33.33333%}`. Measured at
  1280 px: three **379.98 px** columns; at 1199 px three **319.98 px** columns; at
  992 px three **314.98 px** columns. **Below 992 px all three are `width:100%` and
  stack**, and because the two nav lists are `display:none` there, columns 1 and 3
  measure **height 0** — col 3 even wraps onto a *second* flow line at `y = 56.8`
  (measured at 991/768/767/576/375 px: col1 `0`, col2 `40.8`, col3 `0` at
  `y = 16 + 40.8`), which is what produces the measured **72.8 px** header height.
- **The 64 px row (≥992 px):** the middle column's `div.site-logo` measures
  **40.8 px** (`1.7rem` × `line-height:1.5`) and is vertically centred by the row's
  `cl-align-items-center`, while the two `nav`s measure **64 px** — the tall item is
  the **nav row itself**: each `li` is `display:inline-block` and each `li > a` is
  `display:inline-block; padding:20px 0; margin:0 15px; color:#000 !important`, i.e.
  `20 + 24 + 20 = 64 px`. So the bar's height is set by the nav rows, not by the
  wordmark.
- **Wordmark (`div.site-logo` › `a`):** `font-size:1.7rem` (**27.2 px**),
  `text-transform:lowercase`, `color:#89ba16`, weight **400** (the sheet never sets a
  weight), `line-height:1.5` (**40.8 px**), `margin:0; padding:0`, no hover
  underline (`a, a:hover{text-decoration:none !important}`) and **no hover colour
  change** (`.site-logo a{color:#89ba16}` sits *later* in the sheet than the generic
  `a:hover{color:#0056b3}` at equal specificity, so green wins in both states — the
  logo anchor measures `rgb(137,186,22)` with and without `:hover`). The anchor is
  `display:inline` inside the full-width middle column with `cl-text-center`, so it is
  **exactly centred on the page**: measured anchor rect `x = 594.83, width 75.3` at
  1280 px → centre **632.48 px** against a 1265 px viewport centre of **632.5 px**.
  Below 992 px the sheet flips to `.site-logo{float:left; position:relative}`, so the
  wordmark becomes a **left-aligned floated** box (measured `x = 31`, `y = 16` at
  375 px) instead of a centred one.
- **Nav labels (live-measured at 1280 px):** `Home` **`#89ba16`** (the `cl-active`
  row: `.site-menu > li.cl-active > a{color:#89ba16 !important}`), the other five
  **`#000`** (`.site-menu > li > a{color:#000 !important}`), all **16 px / 400 /
  `line-height:24px`**, `padding:20px 0`, `margin:0 15px`, no underline in any state.
  **The sheet's hover rule is dead code**: `.site-navigation .site-menu > li > a:hover
  {color:#89ba16}` (0,3,1) loses to the `!important` on the base rule — verified by
  forcing `:hover` on the `Projects` row with CDP `CSS.forcePseudoState`, which still
  computes `rgb(0, 0, 0)`. Likewise every `.has-children:hover/:focus/:active` rule is
  dead because **no `has-children` exists in this markup** (0 matches, live-verified).
  The recreation keeps the source's resting look but must add a real
  hover/`focus-visible` affordance (a documented delta), since a nav whose only
  feedback is "the current page is green" is not usable.
- **Left group alignment:** col 1's `nav` is `text-align:right`
  (`cl-text-right`), so the three rows hug the **middle column's edge**: measured
  rows at `x = 162.28` (`Home`, 74.83 wide), `241.48` (`Projects`), `335.77`
  (`Services`), ending at **427.49 px** — i.e. flush with col 1's right padding edge
  (62.5 + 379.98 − 15 = 427.48). The **last row's 15 px right margin** is what keeps
  the visual gutter to the wordmark.
- **Right group alignment:** col 3's `nav` is `text-align:left` (`cl-text-left`), so
  its rows start at the column's left padding edge — measured `About` at `x = 837.47`
  (= 822.47 + 15), `Blog` at `916.09`, `Contact` ending at **1072.22 px** — and the
  group never reaches the container's right edge (left-aligned, not
  `justify-content:flex-end`).
- **The two lists are separate `<ul>`s**: each is `display:none` below 992 px
  (`cl-d-none`) and `display:block` at **≥992 px** (`cl-d-lg-block`) — note this is
  the family's **earliest** desktop-nav breakpoint (`-08`/`-09` need 1200 px). The
  lists are `display:block` blocks **filled** into their half of the column, with the
  `li`s inline-block inside them.
- **The hamburger (`a.site-menu-toggle.cl-py-5`):** an **anchor with `href="#"`**
  carrying `cl-d-inline-block cl-d-lg-none` (**visible below 992 px, hidden at
  ≥992 px**), wrapped in `div.cl-ml-auto.toggle-button.cl-d-inline-block.cl-d-lg-none`
  whose own `.toggle-button{position:absolute; right:0}` pins it to the **row's** right
  padding edge (the row is `cl-position-relative`) — measured `x = 708.5` of a
  720 px row at 768 px, `x = 316` at 375 px, `y = 16` at every width. The div measures
  **28 × 41.59 px**, its inline SVG (`span.icon-menu.cl-h3` at `1.75rem` = **28 px**
  with `.cl-icon{height:1em; width:auto; fill:currentColor}`) measures **28 × 28 px**
  at `0.75 px` from the div's top, and the anchor itself is `display:inline` with
  `cl-text-black` (`color:#000 !important`) and **`cl-py-5` = `padding:48px 0`**, so
  its measured hit box is **28 × 116 px** running from `y = −21` (i.e. overflowing
  the 16 px header padding above and below the icon) — a source artefact worth keeping
  as a *larger-than-icon* tap target, with `padding` on a real `<button>` instead of
  an inline anchor. `.cl-ml-auto` on the toggle div is inert for the same
  `position:absolute` reason.
- **`has-children` machinery is entirely absent from this variant:** the sheet still
  carries the caret rule (`> a:before{content:"\e313"; font-size:16px; top:50%;
  right:0; translateY(-50%); font-family:'icomoon'}`), the `:hover/:focus/:active`
  colour rules, the `cl-collapse:not(.cl-show){display:none}` rule, the drawer arrow
  rules (`36 × 36`, `right:0; top:10px`, `border-radius:50%`, hover `#f8f9fa`,
  `::before` glyph `\f078` at `12px`, `rotate(-180deg)` when open / `rotate(0)` with
  `.cl-collapsed`, `.3s all ease`), the drawer sub-list rules
  (`padding-left:40px` at 16 px, a third level at `padding-left:60px`) and the JS that
  inserts disclosure arrows into `.site-mobile-menu .has-children` — but **the markup
  contains zero `.has-children`**, so **no arrow is ever created, no sub-list ever
  exists and the 408 B `icomoon-subset.woff2` is never used by any rendered
  glyph**. The recreation must **not** invent a dropdown: the *dead* CSS is dropped
  and the six destinations are plain links.
- **The off-canvas drawer (`div.site-mobile-menu`):** always in the DOM at every
  width (it is **not** `display:none` — measured at 1280 px sitting off-screen at
  `x = 1315`): `width:300px; position:fixed; right:0; z-index:2000;
  padding-top:20px; background:#fff; height:calc(100vh)`,
  `box-shadow:-10px 0 20px -10px rgba(0,0,0,0.1)`, `transform:translateX(110%)`
  (**330 px**) and `transition:.3s all ease-in-out` (note: **`.3s ease-in-out`**, not
  its `-09` sibling's `.2s cubic-bezier(.66,.2,.48,.9)`); opening is
  `body.offcanvas-menu → .offcanvas-menu .site-mobile-menu{transform:translateX(0%)}`
  (a **descendant** selector, so the class must live on an ancestor — `body` in the
  source).
  - **Header strip:** `div.site-mobile-menu-header{width:100%; float:left;
    padding:0 20px}` (measured **300 × 50.125 px** at `y = 20` on an 800 px viewport)
    with `div.site-mobile-menu-close{float:right; margin-top:8px}` ›
    `span.icon-close2.js-menu-toggle{font-size:30px; display:inline-block;
    padding-left:10px; line-height:1; cursor:pointer; transition:.3s all ease}` with
    `:hover{color:#ced4da}` (measured **40 × 32.125 px** at `x = 300`) — the preview
    renders an **inline SVG ✕** here (`lucide-react` `X` at `30 px` in the
    recreation), and **this span is a second `.js-menu-toggle`**, i.e. the same
    handler as the hamburger.
  - **Body:** `div.site-mobile-menu-body{overflow-y:scroll;
    -webkit-overflow-scrolling:touch; position:relative; padding:0 20px 20px;
    padding-bottom:150px; height:calc(100vh - 52px)}` (measured **300 × 748 px** at
    `y = 70.125` on an 800 px viewport, `scrollHeight` 748) — the JS clones the
    desktop lists into it.
  - **Cloned lists:** `snippet.js` does
    `document.querySelectorAll('.js-clone-nav').forEach(nav => { copy =
    nav.cloneNode(true); copy.className = 'site-nav-wrap';
    copy.removeAttribute('id'); mobileBody.appendChild(copy) })` — because the page
    has **two** `js-clone-nav` lists, the drawer receives **two**
    `ul.site-nav-wrap` blocks at **every** width (measured rows 245 px wide inside the
    300 px panel, i.e. 300 − 2×20 padding − the scrollbar), in document order:
    `Home`, `Projects`, `Services`, then `About`, `Blog`, `Contact` — so the
    **left-group-then-right-group order is preserved and the split is invisible in the
    drawer** (verified live: 6 rows at 50 px each, first row `cl-active`).
    The clone drops `cl-d-none cl-d-lg-block`, so the drawer list is visible
    regardless of viewport. Its rows, measured: **6 top rows at 50 px**
    (`a{display:block; padding:10px 20px; position:relative; color:#212529;
    font-size:20px}` — `10 + 30 + 10`); the `cl-active` row is **`#89ba16`**
    (`.site-nav-wrap li.cl-active > a{color:#89ba16}` — **green here**, unlike the
    `-09` sibling's black); hover is **`#89ba16`** with no underline. Sub-row rules
    (16 px / `padding-left:40px`) and a third level (`padding-left:60px`) exist in the
    sheet but **never match** (no sub-lists exist).
  - **Opening it in the harness (375×800, verified):** after activating the
    hamburger, `body.offcanvas-menu` is set, the panel's transform settles at
    `matrix(1,0,0,1,0,0)` (measured `x = 60` at a 375 px viewport → the 300 px panel
    flush to the right edge), the veil (`body::before`) reaches `opacity:1;
    visibility:visible; z-index:1002` over `.3s`, the drawer shows the six 50 px rows
    with `Home` green and the `✕` at the top right, and the captured frame shows the
    photo dimmed behind the panel **while the header's green `brand` stays legible
    above the veil** (the header's `z-index:1999` sits above the veil's `1002`; only
    the panel's `2000` is above the header).
  - **Close paths (all verified in the snippet source and in the live page):** every
    `.js-menu-toggle` click toggles `body.offcanvas-menu` (both the hamburger and the
    `✕` get `cl-active` + `aria-expanded="true"` when open, and both are reset on
    close); a document **`mouseup`** outside the panel (and not on a
    `.js-menu-toggle`) closes it; **`Escape`** closes it; **`resize` with
    `innerWidth > 768` closes it** — note the **strict `>`**, so a page *at* exactly
    768 px keeps the drawer state; and an in-panel link click does **not** close it
    (in the source only the `✕` and the outside/`Escape`/resize paths close). All four
    paths were exercised in the harness (outside `mouseup` on `.hero`, `Escape`,
    resize to 900).
- **`body`:** `font-family:"Quicksand", …; background-color:#fff;
  height:200vh (measured exactly 1600 px at an 800 px viewport at EVERY width
  tested); position:relative` — the doubled height is the only thing below the band
  and is there for scroll room; nothing in this variant is sticky, so the recreation
  needs real content rather than blank filler to make the page scrollable.
- **The veil (`body:before`):** `content:""; position:absolute; top/left/right/
  bottom:0; background:rgba(0,0,0,0.5); transition:.3s all ease; opacity:0;
  visibility:hidden; z-index:1`, flipped by `body.offcanvas-menu:before{opacity:1;
  z-index:1002; visibility:visible}` (measured mid-transition `z-index` values 985 →
  1002, i.e. the `all` transition animates even the stacking step). It is **live code
  in this variant** and must be implemented (as a real overlay element with
  `black/50` + the `.3s` fade, `aria-hidden`, and the same stacking relationship:
  veil `1002` < header `1999` < drawer `2000`).
- **Band (`div.hero`):** measured **1265 × 800 px at `y = 96`** at 1280×800 (i.e. it
  starts *below* the 96 px header) and **753 × 800 px at `y = 72.8`** below 992 px:
  `height:100vh; width:100%; background-size:cover; background-position:center
  center; background-repeat:no-repeat`, with the image set **inline**
  (`images/hero_1.jpg`, 1900×1267, 475,413 B — the same group-of-three photo as the
  `-08`/`-09` siblings per the screenshot).
- **Type:** `"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, "Noto Sans", sans-serif, …emoji…` — the sheet declares the
  self-hosted faces **400** and **700 only** (four `@font-face` rules, latin +
  latin-ext; the archive's two `600` files are never referenced), and the font is
  applied to `body` *after* the `Roboto` default in the normalize block, so the
  Roboto stack is dead code. Icon font: a single one-line `@font-face` at the very end
  of the sheet declaring a **408 B `icomoon-subset.woff2`**; `[class^="icon-"]`
  keeps those spans on the text baseline (`display:inline-block; line-height:1;
  font-size:inherit; font-style:normal`). **Neither of its two glyphs is used on this
  page** (no dropdown caret, no drawer disclosure arrow) — the preview renders glyphs
  only as inline `<svg class="cl-icon">` for the `✕` and the hamburger.
- **Screenshot read-through (1200×972, AVIF→PNG):** a browser-chrome mock of the
  live preview at rest (address bar reading `preview.colorlib.com`). Under the
  address bar a **solid white bar ~96 px tall, full width, with a hairline shadow-free
  edge**: at its left `Home` in **green** followed by `Projects` and `Services` in
  black (right-aligned *towards* the middle); dead-centre the lowercase
  **`brand`** in the same green at ~27 px; at the right `About`, `Blog`, `Contact` in
  black (left-aligned *away* from the middle) — a perfectly symmetric split around a
  centred wordmark. Directly beneath, with no gap, the full-bleed photo (three people,
  two men and a woman, against a grey cinderblock wall) fills the rest of the frame —
  no content sections, no CTA, no footer, no visible chrome beyond the bar. That frame
  — one **opaque** bar, a split six-item nav, a green centred wordmark, and a `100vh`
  photo band starting at the bar's bottom edge — is the design being replicated. The
  screenshot is also the source of the accent colour the stylesheet confirms as
  `#89ba16`.
- **Breakpoint truth table (all measured on the live preview):**

  | Width | Container | Columns | Nav lists | Hamburger | Wordmark | Header box |
  | --- | --- | --- | --- | --- | --- | --- |
  | 375 px | 328 px (header content box) | 3 × 100 % stacked, col1/col3 **0 px** tall | `display:none` | visible, `28 × 41.59`, div at `x = 316`, `y = 16` | floated left, `x = 31`, `y = 16` | 72.8 px |
  | 576 px | 529 px | stacked, 0 / 40.8 / 0 | `display:none` | visible at `x = 517` | floated left, `x = 31` | 72.8 px |
  | 767 px | **540 px** at `x = 106` | stacked, col3 wraps to `y = 56.8` | `display:none` | visible at `x = 708.5` | floated left, `x = 121` | 72.8 px |
  | 768 px | 720 px at `x = 16.5` | stacked | `display:none` | visible | floated left | 72.8 px |
  | 991 px | 720 px at `x = 128` | stacked | `display:none` | visible at `x = 820` | floated left, `x = 143` | 72.8 px |
  | 992 px | 945 px (960 cap not binding) | 3 × 314.98 | **`block`** | **hidden** | centred in col 2 | 96 px |
  | 1199 px | **960 px** at `x = 112` | 3 × 319.98 | `block` | hidden | centred | 96 px |
  | 1200 px | **1140 px** at `x = 22.5` | 3 × 379.98 | `block` | hidden | centred, anchor `x = 554.83` (page centre 592.5) | 96 px |
  | 1280 px | **1140 px** at `x = 62.5` | 3 × 379.98 | `block`, rows `x = 162.28 … 1072.22` | hidden | centred, anchor `594.83 × 75.3` | 96 px |

- **Reference artifacts:** `/tmp/wm10/prev.html` (live preview HTML, 3,179 B),
  `/tmp/wm10/style.css` (15,292 B, sha256 `3cd379a8…`) and `/tmp/wm10/snippet.js`
  (2,525 B, sha256 `290c706c…`) — both **byte-identical** to
  `/tmp/wm10/z/website-menu-10/css/style.css` and `js/snippet.js` inside
  `/tmp/wm10/wm10.zip` (649,245 B, sha256 `244ef401…`); `/tmp/wm10/z/
  website-menu-10/index.html` (2,976 B archive twin — the live-vs-archive `diff` is
  **9** head-only lines), `images/hero_1.jpg` (1900×1267, 475,413 B), the 6 Quicksand
  woff2 files, `fonts/icomoon-subset.woff2` (408 B) and `README.md` (1,265 B);
  `/tmp/wm10/page.html` (the 108,761 B ColorLib template page — source of the
  description/released-2026/license and download-size facts); `/tmp/wm10/cat.js` (the
  633,990 B preview catalog index that maps the slug to `theme/bootstrap/`);
  `/tmp/wm10/shot.png` (the 1200×972 screenshot, converted from the 116,662 B AVIF
  original — the source of the visual read-through); `/tmp/wm10/measure.json` (the
  per-width computed-style dump); plus live-browser captures at 1280×800 (the solid
  split bar over the photo), 768×800 (logo + hamburger only) and 375×800 (drawer
  open).

## Design tokens

Extracted from the source stylesheet `css/style.css` (15,292 B) of
`website-menu-10` (live preview
`https://preview.colorlib.com/theme/bootstrap/website-menu-10/` → HTTP 200;
byte-identical archive copy) and cross-checked against the 1200×972 screenshot and
the live render at 1280×800, 1200, 1199, 992, 991, 768, 767, 576 and 375 px.

| Token | Value | Used by |
| --- | --- | --- |
| brand green | **`#89ba16`** | the **wordmark anchor**, the **`cl-active` nav row**, and the drawer's current row (`.site-nav-wrap li.cl-active > a`) |
| ink | `#212529` | `body{color}`, drawer rows' resting colour |
| nav label | **`#000`** | `.site-navigation .site-menu > li > a` (`!important`) and the hamburger anchor (via `cl-text-black`) |
| close hover | `#ced4da` | `.site-mobile-menu-close span:hover` |
| arrow hover | `#f8f9fa` | `.arrow-collapse:hover` (dead — no arrows exist) |
| disabled row | `#6c757d` | `.cl-nav-link.disabled` |
| surfaces | `#fff` | page background (`body`), the **solid header** (`cl-bg-white`, `!important`), the drawer |
| overlay | **`rgba(0,0,0,0.5)`** | `body:before` veil (live code — `opacity 0→1`, `z-index 1→1002`, `.3s all ease`) |
| drawer shadow | `-10px 0 20px -10px rgba(0,0,0,0.1)` | `.site-mobile-menu` |
| bootstrap leftovers (unused/overridden) | link `#007bff` / hover `#0056b3` (both beaten by `!important` rules or later equal-specificity rules), `cl-text-black` `#000` | page `a` defaults — never reach a rendered label |
| radii | **`0`** everywhere (`button{border-radius:0}`, square drawer, square bar) except **`50%`** on the secret `36 × 36` drawer disclosure that **never renders** here | do not add rounding anywhere |
| type | `"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — declared weights **400 / 700** (four self-hosted woff2 subsets; the archive's two `600` files are unreferenced); a dead `Roboto` `body` stack sits in the normalize block | whole page |
| icon font | `icomoon` — a **408 B subset**; its glyphs `\e313` and `\f078` are **never rendered** on this page | nothing (drop it; use `lucide-react`) |
| type scale | body `1rem / 1.5`; wordmark **`1.7rem` (27.2 px) / lowercase / green / `line-height:1.5` (40.8 px) / weight 400**; nav labels **16 px / 400 / `line-height:24px`** (20 px vertical padding → **64 px** rows); drawer top rows **20 px** (`line-height:30px` → **50 px**); dead sub-rows **16 px**; hamburger **`cl-h3` = `1.75rem` (28 px)** with a **28 px** icon; drawer close **30 px**; dead caret **16 px**; dead arrow glyph **12 px** | chrome + drawer |
| spacing rhythm | header `padding:1rem` (16 px); container `padding:0 15px` + max-widths 540/720/960/1140; row `margin:0 -15px`; columns `padding:0 15px` at 33.33 % (≥992 px); nav rows `padding:20px 0` + `margin:0 15px`; logo `margin:0; padding:0`; the **hamburger's `cl-py-5` = `padding:48px 0`**, pinned `right:0` in the row; drawer `width:300px`, `padding-top:20px`, strip `padding:0 20px` + close `margin-top:8px`, body `padding:0 20px 20px` + `padding-bottom:150px`; band `100vh`; body `200vh` | chrome + drawer + band |
| grid | classic Bootstrap container (`margin:0 auto`, 15 px gutters, responsive max-widths); `cl-row{display:flex; flex-wrap:wrap; margin:0 -15px}`; `cl-col-lg-4{position:relative; width:100%; padding:0 15px}` → `flex:0 0 33.33333%; max-width:33.33333%` at ≥992 px; group alignment comes from **`text-align`** on the two `nav` wrappers (`cl-text-right` / `cl-text-left`), **not** from auto margins or flex ordering | header |
| motion | `a{transition:.3s all ease}` (nav rows, drawer rows, close button); drawer `transform .3s all ease-in-out`; veil `.3s all ease`; **no** button/CTA transition exists (there are no buttons in this template) | all interactive transitions |

**Google Fonts map:** one `<link>` for **Quicksand** 400;500;600;700
(`https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap`)
— the source declares **400/700** and the sheet also asks for weight **500** on
`h3`/`.cl-h3` (which is what sizes the hamburger's `span`), so the Google variable
face is the safest superset; the source's self-hosted woff2 files and its unused
408 B icon subset are never copied. Icons from `lucide-react`: `Menu` (the
hamburger) and `X` (the drawer close).

## Requirements

### Feature: The solid white header bar, in normal flow

#### Scenario: The bar is opaque, single-tier and pushes the band down

- **Given** the page loads at any width
- **When** the header renders
- **Then** it is `position:relative` in **normal flow**, `width:100%`,
  `z-index:1999`, `padding:1rem`, with an **opaque white surface** (`#fff`) — never
  transparent, never overlaid on the band, **no sticky/fixed behaviour**, no utility
  bar and no second row
- **And** its height is **96 px** at ≥992 px (16 px padding + the **64 px** nav row +
  16 px padding) and **72.8 px** below 992 px (16 + the **40.8 px** wordmark + 16),
  so the band below starts exactly at its bottom edge (measured band `y = 96` at
  1280 px, `y = 72.8` at 375 px)
- **And** the header carries an accessible banner landmark (`<header role="banner">`
  semantics) and the bar's height is driven by the **nav rows**, not by the wordmark

#### Scenario: The container follows the classic max-width tiers

- **Given** the header renders at each measured width
- **When** the container is measured
- **Then** it is `width:100%; padding:0 15px; margin:0 auto` with max-widths
  **540 px** (≥576), **720 px** (≥768), **960 px** (≥992) and **1140 px** (≥1200) —
  measured **1140 px / x = 62.5** at 1280 px, **960 px / x = 112** at 1199 px,
  **945 px** at 992 px (the cap is not binding there), **720 px / x = 128** at
  991 px, **540 px / x = 106** at 767 px and the full content box (328 px / x = 16)
  at 375 px
- **And** the row keeps `display:flex; flex-wrap:wrap; margin:0 -15px` with **three**
  `33.33 %` columns (`padding:0 15px`) at ≥992 px and **three stacked 100 % columns**
  below it

### Feature: The split navigation and the centred wordmark

#### Scenario: Three columns — left group, centred wordmark, right group

- **Given** the header renders at ≥992 px
- **When** the row is measured
- **Then** col 1 holds the first **three** rows, **right-aligned against the middle**
  (its `nav` is `text-align:right`) — measured `Home` at `x = 162.28`, `Projects` at
  `241.48`, `Services` ending at **427.49 px** (col 1's right padding edge)
- **And** col 2 holds the wordmark, **exactly centred on the page** (a full-width
  `text-align:center` column with an inline anchor — measured anchor
  `x = 594.83, width 75.3` at 1280 px, centre **632.48 px** against a viewport centre
  of **632.5 px**)
- **And** col 3 holds the second **three** rows, **left-aligned away from the middle**
  (its `nav` is `text-align:left`) — measured `About` at `x = 837.47`, `Blog` at
  `916.09`, `Contact` ending at **1072.22 px** (never flush with the container's right
  edge)
- **And** the two groups are **separate lists** (two `<ul>`s in two columns, not one
  list split by styling), each `display:none` below 992 px and `display:block` at
  ≥992 px

#### Scenario: Wordmark and nav labels match the source's type and colour

- **Given** any label in the bar
- **When** its computed style is read
- **Then** the wordmark is own-brand lowercase text (never the string used by the
  source) in **`#89ba16`**, **27.2 px**, weight **400**, `line-height:1.5`
  (**40.8 px**), no underline and **no hover colour change** (the source's
  equal-specificity `a:hover{#0056b3}` loses to `.site-logo a` by source order)
- **And** every nav label is **16 px / 400 / `line-height:24px`** with `padding:20px 0`
  and `margin:0 15px` → **64 px** rows; the **current** row is **`#89ba16`** and
  carries `aria-current="page"`; the other five are **`#000`**
- **And** the source's dead `:hover{color:#89ba16}` rule (beaten by the base rule's
  `!important`) is replaced by a **real, visible hover + `focus-visible` affordance**
  (documented delta), so keyboard and pointer users get feedback on the five inactive
  rows

### Feature: Everything below 992 px — floated wordmark and absolute hamburger

#### Scenario: The nav collapses to the family's earliest breakpoint

- **Given** the page renders at 991, 768, 767, 576 or 375 px
- **When** the header is measured
- **Then** both nav lists are `display:none`, cols 1 and 3 collapse to **0 px** (col 3
  even wrapping onto a second flow line at `y = 56.8`), the wordmark becomes
  **floated left** (`float:left`, measured `x = 31`, `y = 16` at 375 px) and the bar
  measures **72.8 px**
- **And** the hamburger appears as an **absolutely positioned control pinned to the
  row's right edge** (`right:0`, measured `x = 708.5` of a 720 px row at 768 px and
  `x = 316` at 375 px), with a **28 px** three-bar icon in a **28 × 41.59 px** box and
  a **`48 px`-tall vertical padding** tap target (`cl-py-5`), hidden again at ≥992 px
- **And** the control is a real `<button>` with an accessible name,
  `aria-expanded` and `aria-controls` (the source's is an `href="#"` anchor)

### Feature: The off-canvas drawer and its veil

#### Scenario: The drawer holds both groups and opens over a dimmed page

- **Given** the page renders at any width
- **When** the hamburger is activated
- **Then** the drawer — `position:fixed; right:0; width:300px;
  height:100vh; padding-top:20px; background:#fff; z-index:2000;
  box-shadow:-10px 0 20px -10px rgba(0,0,0,0.1)` — slides from `translateX(110%)`
  (**330 px**) to `translateX(0)` over **`.3s all ease-in-out`** (measured flush at
  `x = 60` on a 375 px viewport) over a **`rgba(0,0,0,0.5)`** veil that fades in over
  `.3s`, with the header (`z-index:1999`) staying **above** the veil (`z-index:1002`)
  so the green wordmark remains legible while the page behind is dimmed
- **And** the panel lists **all six destinations in document order** — left group
  first, right group second (`Home`, `Projects`, `Services`, `About`, `Blog`,
  `Contact`) — as **six 50 px rows** (`padding:10px 20px`, **20 px**,
  `line-height:30px`, `#212529`) with the **current row green `#89ba16`** and a
  hover colour of `#89ba16`, in a body that is `padding:0 20px 20px` +
  `padding-bottom:150px` and `height:calc(100vh - 52px)` (measured 748 px at an 800 px
  viewport)
- **And** the strip above it is `padding:0 20px` with a **30 px `✕`** button
  (`margin-top:8px`, hover `#ced4da`) that closes the drawer, and **no disclosure
  arrows or sub-lists exist at all** (the source's `has-children` machinery never
  matches this markup — do not invent a dropdown)
- **And** the drawer is rendered from the **same navigation data** as the desktop
  groups (one component, two render targets — never a DOM clone, never two
  hand-maintained lists)
- **And** dismissal works from the `✕`, the hamburger, an **outside click**, a
  click on a destination (delta), and a **resize above the mobile range**, every path
  resetting `aria-expanded` and returning focus to its opener; the source's strict
  `innerWidth > 768` rule is normalised to a breakpoint and documented

### Feature: The image band and the scroll room

#### Scenario: A `100vh` band below the bar over a doubled-height page

- **Given** the page loads at any width
- **When** the band and the document are measured
- **Then** the band starts at the header's bottom edge (`y = 96` at 1280×800,
  `y = 72.8` below 992 px) and measures `100vh` × `100%` with `background-size:cover;
  background-position:center center; background-repeat:no-repeat`, using a
  placeholder image (`https://picsum.photos/seed/halyard-hero/1920/1080`) — never the
  source's `hero_1.jpg`
- **And** the document is scrollable past the band because the recreation provides
  **real content** (the source's `body{height:200vh}` = 1600 px at an 800 px
  viewport is blank filler and must not be copied literally), and **nothing in the
  chrome is sticky** — the header scrolls away (measured `header y = -800` after
  `scrollTo(0, 800)`), despite the source page's marketing line about a sticky header

### Feature: Responsive behaviour across the measured widths

#### Scenario: The chrome reflows at every measured breakpoint

- **Given** the page renders at 375, 576, 767, 768, 991, 992, 1199, 1200 and 1280 px
- **When** the layout is measured
- **Then** the source's tiers are reproduced — **below 992 px**: floated wordmark +
  absolute hamburger, nav lists `display:none`, **72.8 px** bar; **≥992 px**: the two
  33.33 % nav groups and the centred wordmark, hamburger hidden, **96 px** bar — with
  the container max-widths flipping `540 → 720 → 960 → 1140 px` at 576/768/992/1200 px
- **And** the band stays `100vh`, the drawer stays **300 px**, the drawer rows stay
  **50 px** and **245 px** wide inside the panel, and the page produces **no
  horizontal overflow at 320 px** (`scrollWidth === innerWidth`)

### Feature: Fidelity, accessibility and reduced motion

#### Scenario: Dead source code is dropped, not reproduced

- **Given** the recreation is compared with the stylesheet
- **When** the dead rules are enumerated
- **Then** the following are **not** implemented: the `has-children` caret rule
  (`\e313`), the `has-children` hover/focus/active colours, `cl-collapse`, the
  `arrow-collapse` rules (`\f078`, `36 × 36`, `border-radius:50%`), the drawer
  sub-list and third-level rules, the JS that injects disclosure arrows, the
  `site-navbar-target` / `main-menu` classes, the inert `cl-ml-auto` / `cl-mr-auto`
  auto margins, the `Roboto` `body` stack, the two unreferenced `600`-weight Quicksand
  files and the whole 408 B `icomoon` subset (no rendered glyph uses it)
- **And** `cl-` utility class names, the inline SVG paths, the CSS file, the JS file,
  the woff2 files, the hero image and the source's six labels and wordmark are never
  copied; icons come from `lucide-react` and images from picsum

#### Scenario: Interaction is accessible and motion is suppressible

- **Given** a keyboard-only or reduced-motion user
- **When** they use the chrome
- **Then** the hamburger and the drawer's `✕` are real `button`s with
  `aria-expanded`/`aria-controls`, the current row exposes `aria-current="page"`
  (colour is never the only signal), the veil and the drawer are labelled/`aria-hidden`
  appropriately, focus moves into the drawer on open and returns to its opener on
  close, and every interactive element has a visible `focus-visible` ring
- **And** under `prefers-reduced-motion: reduce` the drawer `.3s`, the veil `.3s` and
  the link `.3s` transitions collapse to effectively instant, with all content present
  on first paint

## Verification checklist

- [ ] `apps/halyard` recreates ColorLib **"Website Menu V10"** (source slug
      `website-menu-10`, https://colorlib.com/wp/template/website-menu-10/) under the
      new name `halyard`; the registry/`package.json` reads
      `@free-react-templates/halyard`
- [ ] The header is an **opaque white, single-tier bar in normal flow**:
      `position:relative; width:100%; padding:1rem; z-index:1999`, **no sticky/fixed**
      behaviour, no transparency, no second row, and the band below starts at its
      bottom edge (`y = 96` at ≥992 px, `y = 72.8` below)
- [ ] Container: `width:100%; margin:0 auto; padding:0 15px` with max-widths
      **540 / 720 / 960 / 1140 px** at 576/768/992/1200 px (measured 1140 at 1280,
      960 at 1199, 945 at 992, 720 at 991, 540 at 767); row `display:flex;
      flex-wrap:wrap; margin:0 -15px`; three `cl-col-lg-4` at
      `flex:0 0 33.33333%; max-width:33.33333%; padding:0 15px` ≥992 px, stacked 100 %
      below
- [ ] Left group: **three** rows, `text-align:right`, ending flush with col 1's right
      padding edge (measured `x 162.28 → 427.49` at 1280 px)
- [ ] Wordmark: **own brand text, lowercase, `#89ba16`, 27.2 px, weight 400,
      `line-height:1.5` (40.8 px)**, centred on the page (measured anchor centre
      632.48 px vs viewport centre 632.5 px at 1280 px), floated left below 992 px,
      a link to the top of the page — never the source's wordmark string
- [ ] Right group: **three** rows, `text-align:left`, starting at col 3's left padding
      edge (measured `x 837.47 → 1072.22`)
- [ ] Nav labels: **16 px / 400 / `line-height:24px` / `padding:20px 0` /
      `margin:0 15px`** → **64 px** rows; current row **`#89ba16`** +
      `aria-current="page"`; the other five **`#000`**; lists `display:none` below
      992 px and `display:block` at ≥992 px; a **real hover + `focus-visible`
      affordance** added for the inactive rows (the source's hover rule is dead code)
- [ ] Hamburger: a real `button`, **28 × 41.59 px** box with a **28 px**
      `lucide-react` `Menu`, **48 px** vertical padding tap target, pinned `right:0`
      of the row, visible **below 992 px** and hidden at ≥992 px, with an accessible
      label + `aria-expanded`/`aria-controls`
- [ ] Drawer: `fixed; right:0; width:300px; height:100vh; padding-top:20px;
      background:#fff; z-index:2000; box-shadow:-10px 0 20px -10px rgba(0,0,0,0.1)`,
      sliding `translateX(110%)` → `translateX(0)` over **`.3s all ease-in-out`**,
      over a **`rgba(0,0,0,0.5)` veil** (`opacity 0→1`, `z-index 1→1002`, `.3s`), with
      the header (`z-index:1999`) staying **above** the veil
- [ ] Drawer contents: the **same navigation data** as the desktop groups (one
      component, rendered twice — never a DOM clone), **six 50 px rows in document
      order** (`py-[10px] px-5 text-[20px] leading-[30px]`, `#212529`, current row
      **`#89ba16`**, hover `#89ba16`), strip `px-5` with a **30 px `X`**
      (`margin-top:8px`, hover `#ced4da`), body `padding:0 20px 20px` +
      `padding-bottom:150px` / `height:calc(100vh - 52px)`, and **no arrows, no
      sub-lists, no third level**
- [ ] Drawer dismissal: the `✕`, the hamburger, an outside click, a destination click
      (delta), `Escape` and a resize above the mobile range (the source's strict
      `innerWidth > 768` — normalised and documented) all close it, resetting
      `aria-expanded` on every toggle and returning focus to the opener
- [ ] The band is a **`100vh` full-bleed background image** (`cover`,
      `center center`, `no-repeat`) from
      `https://picsum.photos/seed/halyard-hero/1920/1080`, starting at the header's
      bottom edge; the page scrolls with **real content** past it (the source's
      `body{height:200vh}` is filler and is not copied); nothing is sticky
- [ ] Shape language: **square everywhere** (`0` radius — the bar, the drawer, the
      rows); no pills, no `4px`, no `50%` (the source's only rounding is on a
      disclosure control that never renders here)
- [ ] Dead source code dropped: no `has-children` caret, no disclosure arrows, no
      `cl-collapse`, no drawer sub-lists, no `site-navbar-target` / `main-menu`
      classes, no inert auto margins, no `Roboto` stack, no unreferenced `600`-weight
      font, no `icomoon` subset
- [ ] Zero `colorlib` / "Website Menu 10" / `website-menu-10` provenance references
      anywhere in `apps/halyard` (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `quicksand-*.woff2`, no
      `icomoon-subset.woff2`, no `hero_1.jpg`, no inline SVG paths from the preview,
      no `cl-` utility classes, no jQuery/Bootstrap, no copied strings (the six source
      labels and the source's wordmark)
- [ ] `public/CNAME` = `halyard.free.componentdock.com` and
      `"homepage": "https://halyard.free.componentdock.com"` in
      `apps/halyard/package.json`; `package-lock.json` registers
      `@free-react-templates/halyard`
- [ ] Footer links `https://www.componentdock.com/` exactly once ("Component Dock")
      with a computed current year (a documented delta — the source has no footer)
- [ ] Accessibility: real `button`s with `aria-expanded`/`aria-controls` for the
      hamburger and the drawer's `✕`; `aria-current="page"` on the current row;
      visible `focus-visible` rings on every interactive element (the source's labels
      have **no** hover or focus feedback at all — restoring it is a delta); focus
      moved into / returned from the drawer; `prefers-reduced-motion: reduce` removes
      the drawer, veil and link transitions
- [ ] `scripts/verify-app.sh halyard` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] PR description includes: source template (ColorLib Website Menu V10, posted
      2021-01-28 by Rok Krivec, released September 2026, CC BY 3.0), preview URL
      (`https://preview.colorlib.com/theme/bootstrap/website-menu-10/` → **HTTP 200**,
      3,179 B, `<title>Website Menu #10</title>`; the slug-only
      `/theme/website-menu-10/` path 404s; archive
      `https://preview.colorlib.com/downloads/free/website-menu-10.zip` → HTTP 200,
      649,245 B, sha256-identical `style.css`/`snippet.js`; screenshot 1200×972,
      116,662 B), the design tokens used (`#89ba16` wordmark/current row/drawer
      current row, `#000` nav labels and hamburger, `#212529` ink and drawer rows,
      `#ced4da` close hover, `#fff` surfaces and the opaque bar, `rgba(0,0,0,0.5)`
      veil, `-10px 0 20px -10px rgba(0,0,0,.1)` drawer shadow, **0 radius
      everywhere**, Quicksand 400/700 with the `500` the sheet asks for on `h3`,
      27.2 px lowercase wordmark, 16 px nav labels in 64 px rows, 20 px drawer rows at
      50 px, 28 px hamburger, 30 px drawer close, container max-widths
      540/720/960/1140, header 96 px / 72.8 px), the structure (one **opaque white**
      bar with a split six-item nav around a green centred wordmark — three rows
      right-aligned in the left third, three left-aligned in the right third — a
      992 px desktop-nav breakpoint, a `300 px` off-canvas drawer rendered from the
      same data with a `rgba(0,0,0,.5)` veil, over a `100vh` image band) and what
      differs (new name + own wordmark, own labels, the six source labels replaced,
      `lucide` icons instead of the inline SVG paths, Google Fonts instead of
      self-hosted woff2, the source's six page links materialised as labelled
      sections, a real `button` hamburger with `aria-expanded`, a restored
      hover/`focus-visible` affordance on inactive labels, focus management on drawer
      open/close, the drawer closing when a destination is chosen, the
      `innerWidth > 768` resize rule normalised, the dead `has-children`/dropdown/
      arrow CSS and JS dropped, the dead `Roboto` stack / `site-navbar-target` /
      `main-menu` classes dropped, the unreferenced `600`-weight font and the 408 B
      `icomoon` subset dropped, reduced-motion handling, `body{height:200vh}` filler
      replaced with real content, and the added footer)
