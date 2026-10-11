# Template: Bowsprit (Website Menus)

## Purpose

Bowsprit is a **single-tier transparent header over a full-bleed image band whose
whole point is the CTA that pops out at its right end**. One dark-on-photo nav row
carries the wordmark at the **left** and **two right-aligned groups**: a `ul` of
**five nav items** (the third one a **hover-only dropdown** — `Services`-kind parent
with a `14 px`, `4 px`-radius white flyout, `min-width 13em` = **182 px**, a
`-10 px` upward offset and a **`7 px` white triangle** at `10 %`) and, in a
**second `ul` of its own**, an **uppercase blue `#007bff` CTA block**
(`padding:15px 20px`, `0.8rem`/700, **no radius**) that inverts to white with blue
text plus `2px 0 30px -5px rgba(0,0,0,.2)` on hover. Below `768 px` the row turns
into a **`#000` bar** holding the wordmark plus a `56 × 40 px` hamburger, and the
nav becomes an **inline Bootstrap-style collapse** — animated `height 0.35s ease`,
`aria-expanded` toggled, five `8px 0` rows and a **full-width blue CTA block** as
its last row — **not** the family's usual off-canvas panel. Under the whole header
sits a **`100vh` full-bleed background-image band**; the page is `height:200vh` so
the composition has scroll room.

It is an original React recreation of the ColorLib free **"Website Menu V08"**
snippet (source slug `website-menu-08`), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation
matches the source's structure, order and design tokens 1:1 but copies no asset
(no images, no font files, no CSS files, no icon-font glyphs, no inline SVG
paths, no text verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-08/ — page title
  "Website Menu V08 - Free Transparent Menu With CTA 2026 - Colorlib",
  **HTTP 200**, 108,889 B, verified 2026-10-11. ColorLib's own description: *"To
  make your call-to-action pop, this free transparent menu with CTA template will
  do you well. It is a clean and nifty solution that will help guide your
  visitors around your website easily and comfortably."* Template details block:
  Author **Colorlib**, Released **September 2026**, License **CC BY 3.0**, and
  *"Updated September 2026: this snippet is now plain HTML and CSS plus a few
  lines of vanilla JavaScript: no jQuery, no Bootstrap files, no plugins. The
  download is 635 KB (it was 2.0 MB). Use it on its own, or drop it into a
  Bootstrap 4, 5 or 6 project and it looks the same. The collapsible sections open
  and close without Bootstrap's JavaScript. The drop-down menus work without
  Bootstrap's JavaScript, including keyboard navigation."* Structured data on the
  page: `datePublished` **2021-01-28T20:08:54+00:00**, `dateModified`
  **2026-09-25T10:42:06+00:00**. TEMPLATES.md `## Website Menus (20)` — this item
  is the family's **eighth** entry at **line 3080**; the slug `website-menu-08`
  appears exactly once in TEMPLATES.md and in no spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-08/` returns
  **HTTP 404** (`Not Found`, 9 B) — the *Website Menus* family does **not** live
  under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-08/`**
  (**HTTP 200**, `text/html`, **2,633 B**, `<title>Website Menu #8</title>`,
  verified 2026-10-11) — the URL the preview host's own catalog index records for
  this slug
  (`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
  633,990 B → `"website-menu-08":{"name":"Website Menu V08","tag":"Website Menu
  Templates","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-08/"}`).
  Its two assets — `css/style.css?v=ee2330e9` (**16,566 B**, `text/css`, sha256
  `e07e05efac8524999c07d7e9e9d7608f2aa2a13bde66da0e66fd09e5ce31f871`) and
  `js/snippet.js?v=fdfd2d20` (**6,988 B**, `application/javascript`, sha256
  `264a1e5eca9b73c2c1ba49ede2087a2ceedaf84b37d76796ea064eb133fa1191`) — are
  **byte-identical** (same sha256, verified) to the copies in the snippet's own
  downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-08.zip`
  (**HTTP 200**, `application/zip`, **649,931 B**, sha256
  `fd95309f9074b6c281d2f4670bfb43b459e4b216a5ba130e0e3969d44ac5ad69`; the ColorLib
  page rounds this to "635 KB"), which ships `index.html` (**2,430 B**),
  `css/style.css`, `js/snippet.js`, `README.md` (**1,264 B**), `images/hero_1.jpg`
  (**1900×1267** MJPEG, 475,413 B), and the **Quicksand** woff2 files
  (400/600/700 × latin/latin-ext = **6 files**, 26,568 B or 28,336 B each — this
  variant ships **no icon font** at all). The archive is the un-versioned readable
  twin of the live preview: its `index.html` differs from the live one only by the
  preview host's cache-busting query strings and its extra `noindex` meta/link
  tags (`diff` = the head only; 2,633 B vs 2,430 B = 203 B). Both were read for
  this spec and the live render was cross-checked in a browser at 1280×800,
  1200, 1199, 1100, 992, 767 and 375 px (see Design reference).
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-08.jpg
  (HTTP 200, served as **AVIF**, 1200×972, 126,320 B, converted to PNG and opened
  and inspected visually 2026-10-11). No screenshot-only fallback was needed — the
  live preview is the primary reference and the archive its readable twin.
- **New name:** `bowsprit` (apps/bowsprit, `@free-react-templates/bowsprit`) — the
  source's defining gesture is an element that **juts forward** past the rest of
  the bar (the CTA block), and a *bowsprit* is the spar a vessel projects forward
  from its bow: the natural companion to **starboard** (`website-menu-05`),
  **larboard** (`website-menu-06`) and **topdeck** (`website-menu-07`), the
  family's three already-prepped nautical names. Single lowercase word,
  kebab-safe. Verified 2026-10-11: a repo-wide search
  (`grep -ril bowsprit apps/ openspec/specs/ docs/ TEMPLATES.md`) returns **zero**
  hits (no `apps/` folder, no `openspec/specs/` folder, no `docs/templates/`
  folder, no TEMPLATES.md name), and `https://colorlib.com/wp/template/bowsprit/`
  returns **HTTP 404**, so it is not a ColorLib source name either. The source
  name "Website Menu 08", its "Brand" wordmark, its six labels and its copy are
  never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V08" (source slug `website-menu-08`,
  https://colorlib.com/wp/template/website-menu-08/), `datePublished`
  **2021-01-28**, rewritten in the 2026 build to plain HTML + CSS + vanilla JS
  like its `-01`…`-07` siblings. Design-wise this is the **CTA variant** of the
  family: it is the first one whose nav carries **a button** (a square blue block
  appended as a second `ul`), and the first whose mobile navigation is an
  **inline collapse** rather than a slide-in panel. Its chrome is
  **one tier** (no utility bar) and **nothing about it is sticky**.
- **CSS namespace:** the sheet is self-contained and `cl-`-prefixed for its
  utilities (`cl-container`, `cl-navbar`, `cl-navbar-expand-md`, `cl-navbar-dark`,
  `cl-navbar-brand`, `cl-navbar-toggler`, `cl-navbar-toggler-icon`,
  `cl-navbar-collapse`, `cl-navbar-nav`, `cl-nav-item`, `cl-nav-link`,
  `cl-dropdown`, `cl-dropdown-toggle`, `cl-dropdown-menu`, `cl-dropdown-item`,
  `cl-dropdown-menu-right`, `cl-collapse`, `cl-show`, `cl-collapsing`,
  `cl-collapsed`, `cl-active`, `cl-bg-dark`, `cl-ml-auto`, `cl-pl-0`,
  `cl-pl-lg-5`, `fade`) and is a hand-rolled Bootstrap-4-grid look-alike — **not**
  a framework skin. Its first ~55 lines are a `:where(html) … all: revert` reset
  so the snippet renders identically inside a Bootstrap host page, followed by a
  `*{box-sizing:border-box}` normalize, a **dead `Roboto` `body` stack**, an
  `a{color:#007bff}` page default and `button{border-radius:0}`.
- **HTML structure (live preview, 2,633 B — archive twin 2,430 B):** document
  order is exactly — (1) `header[role=banner]` ›
  `nav.cl-navbar.cl-navbar-expand-md.cl-navbar-dark.cl-bg-dark` ›
  `div.cl-container` holding **`a.cl-navbar-brand`** (the wordmark, `href`
  `index.html`), **`button.cl-navbar-toggler[data-toggle=collapse]
  [data-target="#navbarsExample05"][aria-controls="navbarsExample05"]
  [aria-expanded=false][aria-label="Toggle navigation"]`** ›
  `span.cl-navbar-toggler-icon`, then `div#navbarsExample05.cl-collapse
  .cl-navbar-collapse` holding **two** `ul.cl-navbar-nav` — the first with the
  five items and the second holding only `li.cta-btn` — (2) `div.hero` with an
  **inline** `background-image`, (3) `script`. There is **no footer and no content
  section at all**: the entire visible page is header chrome plus one `100vh`
  photo band.
- **The CTA is a second nav list:** `ul.cl-navbar-nav.cl-ml-auto.cl-pl-lg-5.cl-pl-0`
  (the five items, `padding-left:3rem !important` = **48 px** at ≥992 px,
  `margin-left:auto !important`) is followed by
  `ul.cl-navbar-nav.cl-ml-auto` containing a single `li.cl-nav-item.cta-btn`
  whose anchor is `Contact Us`. **Each `ul` owns its own `auto` left margin**, so
  the two auto margins split the container's leftover space: measured at 1280 px
  the nav group starts at `x = 506` and ends at `846`, while the CTA block sits at
  `x = 1069…1188` — a wide, deliberate gap between the last nav item and the
  button. The recreation must reproduce that two-group layout (nav list + CTA
  list), not merge the button into the item list.
- **Header:** `position:absolute; top:0; left:0; width:100%; z-index:5;
  padding:0` (measured `1265 × 138 px` at a 1280×800 viewport, i.e. `30px 0` of
  vertical padding + a `78 px` nav row); at `≥768 px` the padding becomes
  **`30px 0`**, below it stays **`0`** (measured header height **74 px** at
  375 px). The header is transparent at every width **≥768 px**, floating on the
  photo.
- **Nav row (`nav.cl-navbar`):** `display:flex; flex-wrap:wrap;
  align-items:center; justify-content:space-between; padding:0.5rem 1rem`
  (measured **8px 16px** at 375 px), overridden at **≥768 px** to
  `flex-flow:row nowrap; justify-content:flex-start; padding-top:0;
  padding-bottom:0; background:none !important; position:relative` (measured bg
  `rgba(0,0,0,0)`, height **78 px** at 1280 / **58 px** at 992–1199). The inner
  `div.cl-container` is `display:flex; flex-wrap:nowrap; align-items:center;
  justify-content:space-between` with `15 px` gutters and the Bootstrap
  max-widths **540 / 720 / 960 / 1140 px** at `sm/md/lg/xl` (measured **960 px**
  at 992–1199 and **1140 px** at ≥1200); **below 768 px its own padding is zeroed**
  (`@media (max-width:767.98px){.cl-navbar-expand-md > .cl-container{padding-right:0;
  padding-left:0}}`) so the wordmark sits flush with the `8px 16px` navbar padding.
- **Wordmark (`a.cl-navbar-brand`):** measured **32 px / weight 800 / letter-spacing
  6.4 px (`.2em`) / uppercase / `#fff` / line-height 48 px / `padding:5px 0` /
  `margin-right:16px`**, `white-space:nowrap`, rect **142 × 58 px** at `x = 78`
  (i.e. container edge `62.5 px` + the `15 px` gutter). The sheet also carries
  `header .cl-navbar-brand span{color:#fff}` with a `≥768 px` variant
  `{color:#ced4da}` — **the markup contains no `span`**, so that tier is dead code
  and the wordmark measures plain `#fff` at every width.
- **The nav is five items plus the CTA, in source order:** `Home`
  (`a.cl-nav-link.cl-active`, `href="index.html"`), `Recipes` (`#`), **`Services`
  (`a.cl-nav-link.cl-dropdown-toggle[data-toggle=dropdown][aria-haspopup=true]
  [aria-expanded=false][id=dropdown04]`)** whose
  `div.cl-dropdown-menu[aria-labelledby=dropdown04]` holds three
  `a.cl-dropdown-item` (`Food Catering`, `Drink & Beverages`, `Wedding &
  Birthday`, all `href="#"`), then `About` (`#`) and `News` (`#`), then
  `Contact Us` in the CTA list. `document.querySelectorAll('.cl-dropdown').length
  === 1` on the live page.
- **Every link except the wordmark is dead** — `index.html` (the wordmark and
  `Home`) plus six `href="#"` (four nav rows, the dropdown parent, the three
  dropdown rows, the CTA) — the recreation must materialise all of them (see
  Requirements).
- **Nav label type and colour (live-measured):** `font-size:16px;
  font-weight:400`, inactive **`rgba(255,255,255,0.8) !important`**, current row
  (`cl-active`) **`#fff !important`**; the `.cl-navbar-dark` tiers underneath
  (`rgba(255,255,255,0.5)` → `0.75` on hover/focus, `0.25` disabled, `#fff` for
  `cl-show`/`cl-active`) are all **overridden by the header rules**, so the only
  two labels states on screen are 80 % white and white. Hover on an inactive row
  changes nothing (no hover colour survives `!important`), which is worth
  normalising in the recreation.
- **Nav label padding is three-tier (live-measured, and the family's easiest
  trap):** the base rule is `padding:1.7rem 1rem` (**27.2px 16px**), the
  `≥768 px` expand rule then sets `padding-right/left:0.5rem` (**8 px**), and a
  **`@media (max-width:1199.98px)`** block *after* it sets `padding:.5rem 0rem`.
  Net effect measured: **≥1200 px** → `27.2px 8px` with a **78 px** row;
  **992–1199.98 px** → `8px 8px` with a **58 px** row (the wider `nowrap` row
  looks visibly tighter); mobile column → `8px 0` with **40 px** rows.
- **Hover dropdown (live-measured after dispatching `mouseenter` on the
  `Services` `li`, 1280×800):** the parent gains **`cl-show`**, the toggle's
  `aria-expanded` flips to **`"true"`**, and the flyout measures **182 × 121 px**
  at `x = 640` / `y = 98` (`top:78.375px; left:0`) with
  **`display:block; position:absolute; z-index:1000; min-width:182px` (13em × the
  surface's own `14px` font-size) `; padding:8px 0 (0.5rem); margin-top:-10px;
  font-size:14px; border-radius:4px; border:none;`
  `box-shadow:0 2px 30px 0px rgba(0,0,0,.2)`; background `#fff`; colour
  `#212529`**. Its `::before` is a **white triangle**: `content:" "; width:14px;
  height:14px; position:absolute; bottom:100%; left:18.1875px` (= `left:10%`)
  `; border:7px solid transparent; border-bottom-color:#fff`, removed below
  992 px (`display:none` under `@media (max-width:991.98px)`). There is **no
  transition** — `cl-show` swaps `display:none` → `block` instantly.
- **Flyout rows (live-measured):** `display:block; width:182px; padding:7px 24px`
  (`0.25rem 1.5rem`, with the header rule overriding top/bottom to **7 px**),
  `font-size:14px; font-weight:400; color:#212529; white-space:nowrap; height:35px`,
  `text-align:left`. Hover/focus is **`background:#007bff; color:#fff`** — the
  header rule **wins over** Bootstrap's own `#f8f9fa`/`#16181b` wash, and the same
  pair is used by the `.cl-active` row and by `:active`; `disabled` stays
  `#6c757d`. The flyout is a plain `div` of anchors (no `ul`/`li`, no
  `role=menu`).
- **Dropdown behaviour (`js/snippet.js`, 6,988 B):** hover open/close via
  `mouseenter`/`mouseleave` on `nav .cl-dropdown` (a `set(open)` helper that
  toggles `cl-show` on the `li`, on `.cl-dropdown-menu` and sets
  `aria-expanded`), **plus** a full Bootstrap-4 dropdown re-implementation bound
  to `[data-toggle="dropdown"]`: click toggles (`e.preventDefault()`,
  `stopPropagation`), opening also adds `cl-show` to the parent and flips
  `aria-expanded`; a **document-level click closes all open dropdowns**; a menu
  click on a `.cl-dropdown-item` closes; **`Escape`** closes the open one and
  returns focus to its toggle; **`ArrowDown`** on the toggle opens it and focuses
  the first non-disabled item; **`ArrowDown`/`ArrowUp`** inside the menu move
  focus between items; and the menu is flipped to `right:0` if it would overflow
  the viewport's right edge. Custom events `show/hide/shown/hidden.bs.dropdown`
  are dispatched. The recreation keeps this behaviour (hover **and** click, arrows,
  Escape, outside click, overflow guard) as a real disclosure pattern instead of
  the source's class arithmetic.
- **Mobile navigation is an inline collapse, not a panel (live-measured at
  375 × 800):** below **768 px** the header drops to `padding:0`, the navbar turns
  **`background:black !important`** with `padding:8px 16px`, and the
  `div#navbarsExample05.cl-collapse.cl-navbar-collapse`
  (`display:none; flex-basis:100%; flex-grow:1; align-items:center`) is hidden
  while `button.cl-navbar-toggler` (**56 × 40 px**, `padding:4px 12px`,
  `font-size:20px`, `color:rgba(255,255,255,.5)`, `border:1px solid
  rgba(255,255,255,.1)`, `border-radius:4px`) is shown at the right. The icon is
  `span.cl-navbar-toggler-icon` = **30 × 30 px** (`1.5em`) whose
  `background-image` is an **inline SVG data URI** hamburger
  (`stroke='rgba(255,255,255,0.5)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'`).
  Activating the toggle walks the Bootstrap collapse: the element swaps
  `cl-collapse` → **`cl-collapsing`** with an inline `height:0px` → `scrollHeight`
  and **`transition:height 0.35s ease`** (measured `243 px` expanded at 375 px,
  row height **40 px**), then settles with `cl-collapse.cl-show` and
  `aria-expanded="true"`; the toggler also flips `cl-collapsed` and the
  `aria-expanded` it owns. Expanded, the nav measures **328 × 243 px** at
  `y = 66` with five `328 × 40 px` rows (`padding:8px 0`, `Home` **`#fff`**,
  others `rgba(255,255,255,0.8)` and a `Services` row still carrying its caret)
  and a **full-width `328 × 43 px` blue CTA block** as the last row
  (`padding:15px 20px`, `#007bff`, `#fff`, uppercase, `12.8px`/700). The
  dropdown flyout in this state is `position:static; float:none` (the
  `.cl-navbar-nav .cl-dropdown-menu` rule) — a **collapsed inline list**, and its
  white `::before` triangle is hidden below 992 px.
- **The toggle is Bootstrap-4's collapse API, re-implemented:** `snippet.js`
  binds `[data-toggle="collapse"]`, sets `aria-controls` from `data-target`,
  honours `data-parent`, animates height with a transition-aware `afterTransition`
  helper, and dispatches `show/shown/hide/hidden.bs.collapse`. It also carries
  **dead generic code paths** for this page (a `panel-collapse` typo guard, empty
  `BSE`/`BSE_INIT` handler arrays, and a `.cl-navbar .cl-dropdown > a` click
  forwarder) — nothing else is bound.
- **`body:before` is dead code worth knowing:** the sheet defines a full-viewport
  `rgba(0,0,0,0.5)` veil with `transition:.3s all ease; opacity:0;
  visibility:hidden; z-index:1` (a leftover from the family's off-canvas
  variants) — **this snippet has no panel and nothing ever toggles it**. The
  recreation must not invent a panel to justify it; the veil is dropped.
- **Band (`div.hero`):** measured **1265 × 800 px** at 1280×800 =
  `height:100vh; width:100%; background-size:cover; background-position:50% 50%;
  background-repeat:no-repeat`, with the image set **inline**
  (`images/hero_1.jpg`, 1900×1267, 475,413 B).
- **`body`:** `font-family:"Quicksand", …; background-color:#fff; height:200vh;
  position:relative` (measured **1600 px** tall) — the doubled height is the only
  thing below the band, there for scroll room; nothing in this variant is sticky,
  so the recreation needs real content rather than blank filler to make the page
  scrollable.
- **Screenshot read-through (1200×972, AVIF→PNG):** a browser-chrome mock of the
  live preview at rest. Under the address bar: `BRAND` in **white uppercase with
  wide letter-spacing** at the **left**, then at the centre-right
  `Home` (fully white, current) · `Recipes` · `Services ▾` · `About` · `News` (all
  ~80 % white), and at the far right the **blue `CONTACT US` block** — uppercase,
  bold, tight padding, **square corners**, clearly the visual anchor of the whole
  header. Everything sits directly on the full-bleed photo (three people in muted
  blue/grey clothing against a cinderblock wall) with **no scrim**, so the chrome
  floats over the image and the band fills the frame. That frame — one transparent
  dark-on-photo row with a wordmark, five labels, one caret and one blue CTA over
  a `100vh` photo, no content sections — is the design being replicated. The
  screenshot is also the source of the CTA's **square** shape and of the gap
  between `News` and the button.
- **Breakpoint truth table (all measured on the live preview):**

  | Width | Header padding | Navbar surface | Row height | Nav-link padding | Container |
  | --- | --- | --- | --- | --- | --- |
  | 375 px | `0` | `#000`, `8px 16px` | row `40 px` in the collapse (`243 px` total) | `8px 0` (column) | full width, gutters `0` |
  | 767 px | `0` | `#000` | `74 px` bar | collapse (`8px 0`) | `<768 px` gutters `0` |
  | 992 px | `30px 0` | transparent | `58 px` | `8px 8px` | max **960 px** |
  | 1199 px | `30px 0` | transparent | `58 px` | `8px 8px` | max **960 px** |
  | 1200 px | `30px 0` | transparent | `78 px` | `27.2px 8px` | max **1140 px** |
  | 1280 px | `30px 0` | transparent | `78 px` (header `138 px`) | `27.2px 8px` | max **1140 px** |

- **Reference artifacts:** `/tmp/wm08/prev.html` (live preview HTML, 2,633 B),
  `/tmp/wm08/style.css` (16,566 B, sha256 `e07e05ef…`) and `/tmp/wm08/snippet.js`
  (6,988 B, sha256 `264a1e5e…`) — both **byte-identical** to
  `/tmp/wm08/z/website-menu-08/css/style.css` and `js/snippet.js` inside
  `/tmp/wm08/wm08.zip` (649,931 B, sha256 `fd95309f…`); `/tmp/wm08/z/
  website-menu-08/index.html` (2,430 B archive twin — `diff` against the live page
  shows head-only differences), `images/hero_1.jpg` (1900×1267, 475,413 B), the 6
  Quicksand woff2 files and `README.md`; `/tmp/wm08/page.html` (the 108,889 B
  ColorLib template page — source of the description/dates/download-size facts);
  `/tmp/wm08/cat.js` (the 633,990 B preview catalog index that maps the slug to
  `theme/bootstrap/`); `/tmp/wm08/shot.png` (the 1200×972 screenshot, converted
  from the 126,320 B AVIF original — the source of the visual read-through and the
  CTA's square shape); plus live-browser captures at 1280×800 and 375×800
  (`/root/.config/browser-harness/tmp/shot.png`, the 375 px one showing the black
  bar with the expanded collapse and the full-width blue CTA).

## Design tokens

Extracted from the source stylesheet `css/style.css` (16,566 B) of
`website-menu-08` (live preview
`https://preview.colorlib.com/theme/bootstrap/website-menu-08/` → HTTP 200;
byte-identical archive copy) and cross-checked against the 1200×972 screenshot and
the live render at 1280×800, 1200, 1199, 1100, 992, 767 and 375 px.

| Token | Value | Used by |
| --- | --- | --- |
| brand / primary blue | `#007bff` | `a{color:#007bff}` page default, the **CTA block** (`background`), flyout row hover/**active** (`background`), `cl-dropdown-item.cl-active` |
| link hover shade | `#0056b3` | `a:hover` (page-level default; nothing in the header uses it) |
| CTA hover surface | `#fff` + text `#007bff` | `.cta-btn a:hover` (with `box-shadow:2px 0 30px -5px rgba(0,0,0,.2)`) |
| ink | `#212529` | `body{color}`, flyout text, `.cl-dropdown-menu{color}` |
| dark navbar surface | `#343a40` (`cl-bg-dark`; hover `#1d2124`) | the navbar at **≥768 px the header rule zaps it to none** — only visible if the header rule were absent; keep the token for parity |
| mobile navbar surface | **`#000`** | `header .cl-navbar{background:black !important}` below 768 px |
| nav label inactive | `rgba(255,255,255,0.8)` (`!important`) | every non-current top-level label at every width |
| nav label current | `#fff` (`!important`) | the `cl-active` row (`Home`) |
| caret | `rgba(255,255,255,0.8)` | `.cl-dropdown-toggle::after` (`border-top:0.3em solid`) |
| dark-navbar tiers (overridden here) | `rgba(255,255,255,0.5)` → `rgba(255,255,255,0.75)` hover/focus → `rgba(255,255,255,0.25)` disabled | `.cl-navbar-dark` rules the header's `!important` colours supersede |
| toggler | `rgba(255,255,255,0.5)` glyph, `border:1px solid rgba(255,255,255,0.1)` | mobile hamburger button + its 30 px SVG-data-URI icon (strokes `rgba(255,255,255,0.5)`, `stroke-width:2`) |
| surfaces | `#fff` | flyout background, `body` background, the flyout's `::before` triangle |
| flyout shadow | `0 2px 30px 0px rgba(0,0,0,.2)` | `.cl-navbar .cl-dropdown-menu` (replaces Bootstrap's border — the sheet sets `border:none`) |
| bootstrap flyout border (unused) | `1px solid rgba(0,0,0,0.15)` | the Bootstrap rule that `border:none` overrides |
| flyout row hover wash (overridden) | `#f8f9fa` / text `#16181b` | Bootstrap's rule — the header's `#007bff`/`#fff` wins on this snippet |
| disabled row | `#6c757d` | `.cl-dropdown-item.disabled` |
| wordmark span tier (dead) | `#fff` → `#ced4da` at ≥768 px | `header .cl-navbar-brand span` — no `span` exists in the markup |
| veil (dead) | `rgba(0,0,0,0.5)`, `transition:.3s all ease`, `opacity:0; visibility:hidden; z-index:1` | `body:before` — nothing ever toggles it in this variant; **do not implement** |
| radii | **`4px`** only: flyout surface (`border-radius:4px`) and the toggler (`border-radius:0.25rem`); `0` everywhere else (`button{border-radius:0}`, and the **CTA block is square**) | flyout + toggler — do not spread rounding |
| type | `"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — declared weights **400 / 600 / 700** (6 woff2 static subsets, latin + latin-ext); the sheet also carries a dead `Roboto` body stack in its normalize block | whole page |
| type scale | body `1rem / 1.5`; wordmark **`2rem` (32 px) / 800 / `letter-spacing:.2em` / uppercase / line-height 48 px**; nav labels **16 px / 400**; flyout **14 px / 400**; CTA **`0.8rem` (12.8 px) / 700 / uppercase / line-height 1**; toggler **1.25rem (20 px)** with a **30 px** icon | header + flyout + collapse |
| spacing rhythm | header `padding:30px 0` (≥768 px) / `0` (**<768 px**); navbar `padding:.5rem 1rem` (8/16, mobile) / `0` (≥768 px); nav label padding **three-tier** `27.2px 8px` (≥1200) / `8px 8px` (992–1199.98) / `8px 0` (mobile column); nav list `padding-left:3rem` (48 px, ≥992); wordmark `padding:5px 0` + `margin-right:16px`; flyout `padding:8px 0` + `margin-top:-10px`, rows **`7px 24px`**; flyout arrow `7px` at `left:10%`; CTA `padding:15px 20px`; toggler `padding:4px 12px`; container gutters `15px` (zeroed <768 px), max-widths `540/720/960/1140`; band `100vh`; body `200vh`; collapse row height `40 px` | header / flyout / collapse |
| grid | navbar `flex` `nowrap` `space-between` (`wrap` below 768 px); container `flex` `space-between` `align-items:center`; **two** `ul.cl-navbar-nav`, each `margin-left:auto`, the first with the five items (48 px left padding at ≥992) and the second with the single CTA `li` | header |
| motion | `a{transition:.3s all ease}` site-wide (the CTA inherits it); **flyout has no transition** (display swap); collapse **`height 0.35s ease`**; `.fade` `opacity 0.15s linear`; dead veil `.3s all ease` | all interactive transitions |

**Google Fonts map:** one `<link>` for **Quicksand** 400;500;600;700
(`https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap`)
— the source declares **400/600/700** and its own CSS asks for weight **800** on
the wordmark (`font-weight:800`) and **bold (700)** on the CTA, so the Google
variable face is the safest superset; the source's self-hosted woff2 files are
never copied. Icons from `lucide-react` (`Menu` for the hamburger, `ChevronDown`
for the caret) instead of the inline SVG data URI and the CSS-border caret.

## Requirements

### Feature: Transparent single-tier header over the image band

#### Scenario: The header floats on the photo at every width

- **Given** the page loads at any width
- **When** the header renders
- **Then** it is **absolutely positioned at the top of the page**
  (`top:0; left:0; width:100%; z-index:5`), floating over the band with a
  **transparent** surface so the photo shows through, with `padding:30px 0` at
  **≥768 px** and `padding:0` **below 768 px**
- **And** the row is a **single tier** — there is **no utility bar**, **no sticky
  behaviour** and **no off-canvas panel** in this variant (the source's
  `body:before` veil is dead code and is **not** implemented)
- **And** the row's grids are the source's: navbar `display:flex` with
  `align-items:center; justify-content:space-between`, `flex-wrap:wrap` below
  768 px and `flex-flow:row nowrap; justify-content:flex-start` at ≥768 px, with an
  inner container `flex` `space-between` `center` of `15 px` gutters and
  max-widths **540 / 720 / 960 / 1140 px** (`sm/md/lg/xl`) whose own padding is
  **zeroed below 768 px**

#### Scenario: Two navigation groups — five items and a CTA block

- **Given** the header renders at ≥768 px
- **When** the row is measured
- **Then** the wordmark sits at the **left** (a link to the top of the page, own
  brand text, **32 px / weight 800 / `letter-spacing:.2em` / uppercase / `#fff` /
  `padding:5px 0` / `margin-right:16px`**, `white-space:nowrap`)
- **And** the remaining space holds **two separate lists**, **exactly one CTA
  anchor**, and **≥4 nav items rendered as `<li>` with `text-index`
  `<a>` children** — the source has **five** items plus one CTA (the source's own
  strings are not copied verbatim; `Home`-kind, `Recipes`-kind, `Services`-kind
  parent, `About`-kind, `News`-kind and a contact CTA, in that order)
- **And** the two lists are **not merged**: the nav list (`margin-left:auto`,
  `padding-left:3rem` = 48 px at ≥992 px) and the CTA list
  (`margin-left:auto`, one `li`) each own an `auto` left margin, so the container's
  leftover space is **split between them** — measured **two-group** layout at
  1280 px (nav `x = 506…846`, CTA `x = 1069…1188`), i.e. a deliberate wide gap
  before the button, never a single right-aligned cluster
- **And** each nav label is **16 px / weight 400**, inactive
  **`rgba(255,255,255,0.8)`**, the current row **`#fff`** with
  `aria-current="page"`, the dropdown parent reserving a caret
  (`border-top:0.3em` = **4.08 px**, `margin-left`/`vertical-align` `0.255em`,
  `rgba(255,255,255,0.8)` — a `lucide-react` chevron, not the CSS border trick)

### Feature: The CTA block (the point of this variant)

#### Scenario: The blue CTA block renders square, uppercase and tight

- **Given** the header renders
- **When** the CTA anchor is measured
- **Then** it is a **square** `#007bff` block — **`border-radius:0`** (never a
  pill, never rounded), text **`#fff`**, **uppercase**, **`0.8rem` (12.8 px)**,
  **weight 700**, `line-height:1`, `padding:15px 20px` (measured **119 × 43 px**),
  its text is an **original label of the same kind** as the source's
  (a contact/CTA label, not the source's string)
- **And** it is a **real target** — an in-page section (`#contact`-kind anchor or
  equivalent) or an internal route — **never** `href="#"`, with a visible
  `focus-visible` ring
- **And** on hover/focus its surface inverts to **`#fff`** with **`#007bff`**
  text and gains **`box-shadow:2px 0 30px -5px rgba(0,0,0,.2)`**, transitioning
  over **`.3s ease`** (the site-wide `a` transition), and it stays legible against
  the photo in both states
- **And** below 768 px the same block renders as the **last row of the expanded
  collapse**, **full width** (measured `328 × 43 px` at a 375 px viewport) with the
  same padding/colour/type — it is not hidden on mobile

### Feature: Hover + keyboard dropdown

#### Scenario: The parent opens a 182 px rounded white flyout on hover

- **Given** the header renders at ≥768 px (and ≥992 px for the arrow)
- **When** the dropdown parent is hovered **or** activated by click/keyboard
- **Then** a white surface appears directly below it — `position:absolute; top:100%;
  left:0; z-index:1000`, **`min-width:13em`** (measured **182 px** with its own
  `14 px` type), **`padding:8px 0`**, **`margin-top:-10px`** (measured flyout
  rect **182 × 121 px** at `y = 98` under a `78.375 px` row),
  **`border-radius:4px`**, **`border:none`**,
  **`box-shadow:0 2px 30px 0 rgba(0,0,0,.2)`**, background `#fff`, and a
  **`7 px` white triangle** whose `::before` box is `14 × 14 px` at
  **`left:10%`** / `bottom:100%` (`border:7px solid transparent;
  border-bottom-color:#fff`) — hidden below 992 px
- **And** the surface holds **three** rows in the source's kinds (one of them
  food-/service-style, one beverages-style, one events-style — **own labels**),
  each `display:block`, `padding:7px 24px`, **14 px / weight 400**, `color:#212529`,
  `white-space:nowrap`, hover/focus **`background:#007bff; color:#fff`** (the
  header's rule supersedes Bootstrap's `#f8f9fa` wash), and an active row uses the
  same pair
- **And** the flyout has **no fade/slide transition** (the source swaps
  `display:none` → `block`), while the open state is a **real disclosure** —
  `aria-expanded` on the toggle flips to `"true"` and `aria-haspopup="true"` and
  `aria-controls` are present

#### Scenario: The dropdown is fully keyboard operable and viewport-safe

- **Given** the header renders at ≥768 px
- **When** the dropdown is driven by keyboard and by mouse
- **Then** the toggle **opens on click** as well as hover, **`ArrowDown`** on the
  toggle opens it and moves focus to the first row, **`ArrowDown`/`ArrowUp`**
  inside the flyout move focus between rows, **`Escape`** closes it **and returns
  focus to the toggle**, and an **outside click** or a click on a row closes it
  (each path tested)
- **And** clicking the parent a second time closes it, no more than one flyout is
  open at a time, and the focus order is continuous (no focus trap)
- **And** every row is a **real in-page target** with `scroll-margin-top` ≥ the
  header height, so **zero** dead `href="#"` links remain anywhere in the app, and
  the surface flips/caps at `right:0` (the source's overflow guard) instead of
  escaping the viewport at 1024 px

### Feature: Inline collapse navigation below 768 px

#### Scenario: The bar turns black and the hamburger reveals the list inline

- **Given** the page renders below 768 px
- **When** the header is measured
- **Then** the navbar surface is **`#000`** with `padding:8px 16px` and the header
  padding is `0`, the wordmark keeps its **32 px / 800 / wide-tracked uppercase
  white** treatment, and a **real `button`** hamburger (**56 × 40 px**,
  `padding:4px 12px`, `font-size:20px`, `color:rgba(255,255,255,.5)`,
  `border:1px solid rgba(255,255,255,.1)`, `border-radius:4px`) sits at the right
  with a **30 × 30 px** icon (**`lucide-react` `Menu`**, standing in for the
  source's inline SVG data URI) and an accessible label
- **And** the nav list is **hidden** at rest (`display:none`, `flex-basis:100%`,
  `flex-grow:1`) and **not** an off-canvas panel — no slide-in drawer, no veil, no
  fixed positioning (a deliberate, documented reading of the source)
- **And** activating the toggle **expands the list inline** with an animated
  **`height 0.35s ease`** (`0` → content height; measured `243 px` at 375 px),
  flipping `aria-expanded` on the toggle and pointing `aria-controls` at the
  region, per the source's re-implemented Bootstrap collapse
- **And** the expanded list holds **five rows at 40 px** (`padding:8px 0`,
  `font-size:16px`; current row `#fff`, others `rgba(255,255,255,0.8)`) stacked in
  a column and then the **full-width CTA block**, and the dropdown parent's flyout
  becomes a **static, indented inline list** (the source's `position:static;
  float:none`, `::before` hidden) that expands without leaving the flow
- **And** closing the toggle (or resizing to ≥768 px) leaves no stale inline
  height or `cl-show`-equivalent class behind, focus stays on the toggle, and the
  page never gains horizontal overflow at **320 px**
  (`scrollWidth === innerWidth`)

### Feature: Full-bleed image band and the materialised targets

#### Scenario: The band renders at full viewport height with a covered image

- **Given** the page loads
- **When** the band below the header is measured
- **Then** it is a full-width **`100vh`** band with a **background image**
  (`background-size:cover`, `background-position:50% 50%`,
  `background-repeat:no-repeat`) supplied by a deterministic placeholder
  `https://picsum.photos/seed/bowsprit-hero/1920/1080` (the source uses its own
  `images/hero_1.jpg`, 1900×1267; no asset is copied)
- **And** it is the page's **first** content band — the header floats over it, so
  first paint is photo + one nav row with the blue CTA

#### Scenario: The seven declared targets resolve to real sections

- **Given** the source declares `index.html` (wordmark + `Home`) and six dead
  `href="#"` links (four nav rows, the dropdown parent, three flyout rows, the CTA)
- **When** the recreation's header and flyout rows are inspected
- **Then** every one of them resolves to a real in-page section of the same
  *kind* (home → intro, recipes/dishes → card grid, `Services`-kind → service
  cards, about → story, news → article list, CTA → contact block; flyout rows →
  sub-pages of those kinds), each with `scroll-margin-top` ≥ the header height
- **And** **zero** dead `href="#"` links remain anywhere in the app (the dropdown
  parent excepted only as a real disclosure control — a `button`-like toggle with
  `aria-expanded`), any imagery inside those sections comes from
  `https://picsum.photos/seed/bowsprit-<n>/<w>/<h>`, and the page is longer than the
  viewport so the composition reads like the source's `body{height:200vh}` with
  real content instead of blank filler

### Feature: Footer and provenance hygiene

#### Scenario: The app ships a Component Dock footer

- **Given** the source snippet has no footer at all (it is chrome + one band)
- **When** the recreation is built
- **Then** it adds a minimal app-shell footer (a deliberate, documented delta
  from the source) with a dark surface and a **1 px** translucent hairline top
  edge, holding the app's wordmark, exactly **one** link to
  `https://www.componentdock.com/` branded "Component Dock" (new tab,
  `rel="noreferrer"`) and a **current year computed at render**

#### Scenario: No provenance strings and no copied assets

- **Given** the app source is searched
- **When** it is checked
- **Then** no `colorlib`, "Website Menu 08" or `website-menu-08` string appears
  anywhere in `apps/bowsprit` (comments included — record the palette as
  design-token notes instead: "brand accent `#007bff`")
- **And** nothing from the source archive ships: no `css/style.css`, no
  `js/snippet.js`, no `quicksand-*.woff2` files, no `hero_1.jpg`, no inlined SVG
  data URI (the hamburger), no `cl-`-prefixed utility class names, no jQuery or
  Bootstrap, and no copied copy (the "Brand" wordmark, the six source labels
  `Home` / `Recipes` / `Services` / `About` / `News` / `Contact Us`, and the
  flyout's `Food Catering` / `Drink & Beverages` / `Wedding & Birthday` are
  **not** reproduced verbatim) — images come from picsum and icons from
  `lucide-react`

### Feature: Responsive behaviour

#### Scenario: The chrome reflows at every measured breakpoint

- **Given** the page renders at the source's breakpoints (375, 767, 768, 992,
  1199, 1200, 1280 px)
- **When** the layout is measured
- **Then** the source's three nav-label paddings are reproduced —
  **`27.2px 8px`** with a **78 px** row at **≥1200 px**,
  **`8px 8px`** with a **58 px** row at **992–1199.98 px**, and **`8px 0`** with
  **40 px** column rows below 768 px — with container max-widths **960 px** at
  992–1199.98 and **1140 px** at ≥1200 px
- **And** the hamburger is hidden at **≥768 px** and shown below it (the opposite
  of the family's panel variants), the navbar surface flips `#000` (mobile) ↔
  transparent (≥768 px), and the label colours stay `rgba(255,255,255,0.8)` /
  `#fff` at every width (a normalisation of the source, whose `!important` rules
  leave no hover colour — the recreation may add a hover/focus lift to
  `rgba(255,255,255,0.75)`-equivalent and must document it in the PR)
- **And** the band stays **`100vh`** at every width, the flyout stays inside the
  viewport (flipping to `right:0` when a 182 px surface would overflow), and the
  page produces **no horizontal overflow at 320 px**
  (`scrollWidth === innerWidth`)

### Feature: Motion, accessibility and reduced motion

#### Scenario: Motion is decorative and fully suppressible

- **Given** the page loads with motion enabled
- **When** the header, flyout and collapse are used
- **Then** links (including the CTA) transition over **`.3s ease`**, the collapse
  over **`height 0.35s ease`**, and the flyout opens **instantly** (the source's
  display swap)
- **And** under `prefers-reduced-motion: reduce` those transitions collapse to
  effectively instant, the collapse appears without the height animation, and all
  content is present immediately (no motion gate on first paint)
- **And** the hamburger, every nav row, the dropdown toggle and its rows, the CTA
  and the footer link are keyboard operable with visible `focus-visible` rings and
  state exposed to assistive tech (`aria-expanded`, `aria-controls`,
  `aria-haspopup`, `aria-current`), the collapse region is labelled by its toggle,
  the current row is not distinguished by colour alone, and `Escape` closes the
  flyout and the mobile list

## Verification checklist

- [ ] `apps/bowsprit` recreates ColorLib **"Website Menu V08"** (source slug
      `website-menu-08`, https://colorlib.com/wp/template/website-menu-08/) under
      the new name `bowsprit`; the registry/`package.json` reads
      `@free-react-templates/bowsprit`
- [ ] The header is **absolutely positioned, transparent**, `top:0; left:0;
      width:100%; z-index:5` with `padding:30px 0` at ≥768 px and `padding:0`
      below — floating over the band, **single tier**, **no sticky row**, **no
      off-canvas panel** and **no veil** (the source's `body:before` is dead code
      and is deliberately not implemented)
- [ ] Container: `flex` `space-between` `center`, `15 px` gutters (zeroed below
      768 px), max-widths **540 / 720 / 960 / 1140 px**; navbar
      `flex-wrap:wrap; space-between` below 768 px and `nowrap` at ≥768 px
- [ ] Wordmark: own brand text, **32 px / weight 800 / `letter-spacing:.2em` /
      uppercase / `#fff` / `padding:5px 0` / `margin-right:16px`** at the left, a
      link to the top of the page (never the string "Brand")
- [ ] Nav: **five** top-level items plus **exactly one** CTA anchor, in the
      source's order/kinds, **16 px / weight 400**, inactive
      **`rgba(255,255,255,0.8)`**, current row **`#fff`** + `aria-current="page"`,
      caret on the dropdown parent (`0.3em` border-equivalent → a chevron,
      `0.255em` offset, `rgba(255,255,255,0.8)`)
- [ ] **Two groups, not one cluster**: the nav list (`margin-left:auto`,
      `padding-left:3rem` = 48 px at ≥992 px) and a **second list holding only the
      CTA `li`** (`margin-left:auto`) each own an auto margin, reproducing the
      measured split (at 1280 px: nav `x = 506…846`, CTA `x = 1069…1188`)
- [ ] CTA block: **square** (`border-radius:0`), `#007bff`, `#fff`, uppercase,
      **12.8 px / 700**, `line-height:1`, `padding:15px 20px` (≈119 × 43 px),
      hover/focus inverts to `#fff` on `#007bff` with
      `box-shadow:2px 0 30px -5px rgba(0,0,0,.2)` over `.3s ease`, and it is a
      **real** target (no `href="#"`)
- [ ] Dropdown flyout: white, `absolute; top:100%; left:0; z-index:1000`,
      **`min-width:13em` (182 px)**, `padding:8px 0`, **`margin-top:-10px`**,
      **`border-radius:4px`**, **`border:none`**,
      **`box-shadow:0 2px 30px 0 rgba(0,0,0,.2)`**, **`7 px` white triangle** at
      `left:10%` (hidden below 992 px), **three** rows at `padding:7px 24px` /
      **14 px** / `#212529` → **`background:#007bff; color:#fff`** on hover/focus,
      and **no** open/close transition
- [ ] Dropdown behaviour: opens on **hover and click**, `ArrowDown` on the toggle
      opens + focuses the first row, `ArrowDown`/`ArrowUp` move focus, `Escape`
      closes and returns focus, outside click closes, one flyout at a time, and
      the surface flips to `right:0` rather than overflowing at 1024 px
- [ ] Mobile (<768 px): navbar **`#000`** with `8px 16px` padding, header padding
      `0`, wordmark unchanged, real `button` hamburger (**56 × 40 px**,
      `padding:4px 12px`, `20 px` glyph, `rgba(255,255,255,.5)`, `1px solid
      rgba(255,255,255,.1)`, `border-radius:4px`, **30 × 30 px** `lucide-react`
      `Menu`, accessible label) at the right
- [ ] The mobile nav is an **inline collapse**, never a drawer: `display:none` at
      rest (`flex-basis:100%`), opening animates **`height 0.35s ease`**
      (`0` → content; ≈243 px at 375 px) with `aria-expanded` + `aria-controls`,
      settles at five **40 px** rows (`padding:8px 0`, 16 px, current `#fff`,
      others `rgba(255,255,255,0.8)`) and a **full-width blue CTA** as the last
      row (≈328 × 43 px); the parent's flyout becomes a **static inline list**
      with the arrow hidden; closing/resizing leaves no stale height or class
- [ ] Three-tier nav-label padding reproduced: **`27.2px 8px`** / 78 px row
      (≥1200 px), **`8px 8px`** / 58 px row (992–1199.98 px), **`8px 0`** /
      40 px column rows (<768 px)
- [ ] The band is a **`100vh` full-bleed background image** (`cover`,
      `50% 50%`, `no-repeat`) from
      `https://picsum.photos/seed/bowsprit-hero/1920/1080`; the page scrolls with
      **real content** past the viewport (the source's `body{height:200vh}`)
- [ ] All seven declared targets resolve to real sections with `scroll-margin-top`
      ≥ the header height; **zero** dead `href="#"` links remain
- [ ] Shape language kept as the source has it: **`4px`** only on the flyout
      surface and the toggler, **`0`** on the CTA block — no pills, no extra
      rounding
- [ ] Zero `colorlib` / "Website Menu 08" / `website-menu-08` provenance
      references anywhere in `apps/bowsprit` (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no
      `quicksand-*.woff2`, no `hero_1.jpg`, no inline SVG data URI, no `cl-`
      utility classes, no jQuery/Bootstrap, no copied strings (`Brand`,
      `Home`, `Recipes`, `Services`, `About`, `News`, `Contact Us`,
      `Food Catering`, `Drink & Beverages`, `Wedding & Birthday`)
- [ ] `public/CNAME` = `bowsprit.free.componentdock.com` and
      `"homepage": "https://bowsprit.free.componentdock.com"` in
      `apps/bowsprit/package.json`; `package-lock.json` registers
      `@free-react-templates/bowsprit`
- [ ] Footer links `https://www.componentdock.com/` exactly once ("Component
      Dock") with a computed current year
- [ ] Accessibility: the toggle exposes `aria-expanded`/`aria-controls` (+
      `aria-haspopup` on the dropdown parent), the collapse region is labelled by
      it, the current row is not colour-only (`aria-current`), every interactive
      element has a visible focus ring, and `prefers-reduced-motion: reduce`
      removes the collapse animation
- [ ] `scripts/verify-app.sh bowsprit` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] PR description includes: source template (ColorLib Website Menu V08),
      preview URL
      (`https://preview.colorlib.com/theme/bootstrap/website-menu-08/` → **HTTP
      200**, 2,633 B, `<title>Website Menu #8</title>`; the slug-only
      `/theme/website-menu-08/` path 404s; archive
      `https://preview.colorlib.com/downloads/free/website-menu-08.zip` → HTTP
      200, 649,931 B, sha256-identical `style.css`/`snippet.js`; screenshot
      1200×972, 126,320 B), the design tokens used (`#007bff` brand + CTA +
      flyout hover, `#0056b3` link hover, `#212529` ink, `#000` mobile navbar,
      `rgba(255,255,255,0.8)` inactive nav + caret, `#fff` current label,
      `rgba(255,255,255,0.5)`/`rgba(255,255,255,0.1)` toggler, white flyout with
      `0 2px 30px 0 rgba(0,0,0,.2)` and a `7 px` arrow, `4 px` radii only,
      Quicksand 400/600/700, 32 px uppercase `0.2em` wordmark, 16 px nav labels,
      14 px flyout rows, 12.8 px uppercase square CTA, 30 px hamburger icon), the
      structure (one transparent dark-on-photo nav row with two right groups — a
      five-item list with a hover dropdown and a CTA-only list — over a `100vh`
      image band, plus an inline collapse below 768 px) and what differs (new name
      + wordmark, own labels/targets, lucide instead of the inline SVG data URI
      and the CSS-border caret, Google Fonts instead of self-hosted woff2, the
      seven dead links materialised as labelled sections, the dropdown promoted to
      a real hover+click keyboard disclosure, a hover/focus colour added for
      inactive labels since the source's `!important` rules leave none, the dead
      `body:before` veil dropped, reduced-motion handling, footer attribution)
