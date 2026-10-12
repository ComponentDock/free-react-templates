# Bimini — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V20"** (source slug `website-menu-20`) — the Website Menus
family's **full-screen overlay menu over a full-viewport charcoal hero** variant. Its features, in
order of visual weight:

- a **whole-viewport overlay sheet** (`nav#colorlib-main-nav`, `position:absolute; top:0; right:0;
  bottom:0; padding:0`, **`width:100%` + `height:100%`**, **`background:rgba(0,0,0,0.99)`**,
  **`z-index:1002`**, `text-align:center`, **`overflow-y:scroll`**, `visibility:hidden; opacity:0;
  transform:scale(0)` at rest, `transition:all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)`) — a
  **square, shadowless black cover** that grows in from its own centre; it is the family's first
  chrome that is a sheet rather than a bar, rail or band, and its only `scale()`-based entry;
- the **`body.menu-show` state**, which is simultaneously the visibility switch
  (`visibility:visible; opacity:1; transform:scale(1)`) and the **scroll lock**
  (`overflow:hidden; position:fixed; height:100%; width:100%`);
- a **table-centred content column** (`div.colorlib-table` → `display:table; width:100%;
  height:100%` with a `div.colorlib-table-cell.js-fullheight` → `display:table-cell;
  vertical-align:middle`), which is what puts the centred block at `y = 337.6` (brand) and
  `y = 421.6` (menu) in a 900 px sheet;
- a **full-bleed photo layer** (`div.img`, `position:absolute; inset:0; height:100%; width:100%;
  opacity:1; background-size:cover; background-repeat:no-repeat; background-position:center center`)
  carrying a **`rgba(0,0,0,0.3)`** scrim via `::after` — **but the source's own photo is missing**
  (`images/bg_3.jpg` **404s** and the archive ships **no `images/` folder**), so the layer paints
  nothing and the sheet reads as pure black;
- a **`40 px`-tall overlay brand** (`h1.cl-mb-4` › `a.logo`): **`font-size:40px`**, **`color:#fff`**,
  `text-transform:uppercase`, **`letter-spacing:2px`**, **`font-weight:700`**, `display:inline-block`,
  `line-height:1.5` in `"Poppins", Arial, sans-serif`, inside an `h1` with `margin-bottom:1.5rem`
  (**`24 px`**) — measured **`353.7 × 60 @ x = 535.7`** at 1440 px;
- a **four-row centred menu** (bare `ul`, `padding:0; margin:0`, `padding-top:20px` below
  767.98 px) of **`font-size:14px`/`font-weight:600`**, uppercase, **`letter-spacing:5px`** labels at
  `line-height:1.8` (inherited → **`25.2 px`**), each row `li{padding:0; margin:0; list-style:none}`
  holding `a{display:block; color:white; padding:5px 0}` › `span{color:white; position:relative;
  padding:0 10px}` — **`35.2 px`** per row on a `35.2 px` pitch, four rows from `y = 421.6`, whole
  `ul` **`1425 × 140.8`** at 1440 px;
- the **gold current row** (`li.cl-active a span{color:#f8b500}`, measured `rgb(248,181,0)`) — the
  only colour change in the list — plus the sheet's **intended** amber hover underline
  (`span:before{background:#fec771}` with `visibility:visible` + `scaleX(1)` on hover/current) which
  is **inert on the live page**: there is no base rule giving that pseudo-element `content`,
  `position` or size (computed `::before` = `content:none`, `width:auto`, `position:static`);
- the **close control** (`#colorlib-main-nav > .colorlib-nav-toggle`): `position:absolute;
  top:40px; right:40px; height:44px; width:44px; padding:0 !important; line-height:0`, painted as a
  `30 × 2` `#fff` `i` bar (`background:transparent` under `cl-active`) with `::before`/`::after` bars
  rotated `rotateZ(45deg)` / `rotateZ(-45deg)`, `visibility:hidden; opacity:0` at rest and shown only
  with the **`.show`** class that the script adds **900 ms** after opening (measured
  **`44 × 44 @ x = 1341, y = 40`**, i.e. `right:40` of the `1425` content box);
- the **header** (`header`, `padding:2em 0` = **`32px 0`**, `position:absolute; top:0; left:0;
  right:0`, **`z-index:9`**, `margin:0 auto`; **`16px 0`** below 767.98 px) with a tiered inner
  container (`div.cl-container`, `padding:0 15px`) carrying an `a.colorlib-logo` brand
  (**`12px`/`600`/`#fff`**/uppercase/**`letter-spacing:5px`**) and the **three-bar burger**
  (`a.colorlib-nav-toggle`: `float:right; position:relative; z-index:1003` inside the `z-index:9`
  header, `right:10px` below 767.98 px; its `i` is a **`20 × 2` `#fff`** bar with **`30 × 2` `#fff`**
  `::before` at `top:-7px` / `::after` at `bottom:-7px`, spreading to `-10px` on hover over `0.2s`);
- the **full-viewport hero** (`section.hero-wrap.js-fullheight`, **`background:#202020`**,
  **`height:100vh !important`** with a **`@supports (height:100dvh)`** upgrade) — always exactly
  viewport height (measured `1440 × 900`, `991 × 900`, `767 × 900`, `375 × 812`) — holding a
  full-height flex row (`.slider-text`: `display:flex; flex-wrap:wrap; margin:0 -15px` +
  `align-items:center` + `justify-content:center`) whose `100 %` column
  (`div.cl-col-md-12.cl-text-center`) holds a **`6vw`/`700`/`#fff` uppercase** headline
  (`.desc h1`, `line-height:1.5`, measured **`86.4 px`/`129.6 px`** at 1440 px and wrapping to two
  lines at `22.5 px` on 375 px) over a **`18 px`** lead (`h3`, `color:rgba(255,255,255,0.8)`,
  `27 px` line box).

The source page holds **nothing else** — no cards, no buttons, no forms, no footer, no second view,
no sticky chrome — and it is **exactly viewport height at every width**: `documentElement.scrollHeight
=== clientHeight` at 1440 × 900, 991 × 900, 767 × 900 and 375 × 812, with `scrollWidth === innerWidth`
throughout. **All 8** anchors are dead or dead-ending: **two** `href="#"` (both toggles) plus
`index.html` (×3 — overlay brand, overlay `Home`, header brand), `about.html`, `blog.html`,
`contact.html`; and on the preview host **`about.html`, `blog.html`, `contact.html` and `index.html`
all return HTTP 404**, so no destination in the source is reachable.

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/website-menu-20/` | **200**, 108,820 B, sha256 `c0d011c5…`, title *"Website Menu V20 - Free Full-Screen Menu Overlay 2026 - Colorlib"*, `h1` *"Website Menu V20"*, `datePublished` 2021-03-09T14:33:42+00:00, `dateModified` 2026-09-25T10:42:07+00:00, update note *"…The download is 251 KB (it was 264 KB)…"* |
| Slug-only preview | `https://preview.colorlib.com/theme/website-menu-20/` | **404** (family-wide gap — **not** a dead preview) |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/website-menu-20/` | **200**, 2,356 B, `<title>Website menu 08</title>`, sha256 `a552d431…` |
| Stylesheet | `…/bootstrap/website-menu-20/css/style.css?v=0b78360a` | **200**, 16,497 B, 836 lines, 132 `{` blocks, 12 `@media`, 6 `@font-face`, 1 `@supports`, sha256 `bd6e8d5c…` |
| Behaviour JS | `…/bootstrap/website-menu-20/js/snippet.js?v=ac5d989a` | **200**, 1,704 B, sha256 `36d0a551…` |
| Snippet archive | `https://preview.colorlib.com/downloads/free/website-menu-20.zip` | **200**, 256,660 B ("251 KB"), sha256 `1ecf1bcd…`; ships `index.html` 2,153 B, `css/style.css` + `js/snippet.js` **byte-identical** to the live copies, `README.md` 1,264 B, 8 Roboto woff2 (247,856 B = 91.98 %), **no `images/`** |
| Overlay photo | `…/bootstrap/website-menu-20/images/bg_3.jpg` | **404** (the sheet's only image reference; the archive ships no `images/`) |
| Second page | `…/bootstrap/website-menu-20/about.html` | **404** (so `blog.html`, `contact.html`, `index.html` are also dead destinations) |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-20.jpg` | **200**, served **AVIF** despite the `.jpg` name, 6,387 B, 1200 × 972, sha256 `6524d0ce…` → PNG 43,095 B, inspected visually |
| `diff` live ↔ archive `index.html` | — | **head-only** (two `noindex` metas, `cdnjs` `dns-prefetch`, `fetchpriority`, `?v=` busters) — the archive is the live preview's readable twin |

Everything below was read from the sheet by `curl` **and** re-read in the browser (byte-identical,
sha256 `bd6e8d5c…`), then cross-checked against rendered screenshots at **1440**, **991**, **767**,
**375 px** and the **open-overlay** state.

## Sheet anatomy

- **`:where(html) … all: revert` reset** (lines 8–54, **22** `revert` declarations): neutralises a
  Bootstrap host page's base styles so the snippet renders identically inside one. Dead code for the
  recreation — drop it.
- **normalize + framework base** (lines 56–330): `box-sizing`, `html{font-family:sans-serif;
  line-height:1.15}`, the `body` system stack + **`#fff`** background + `#212529` ink (all
  **overridden** by the custom block's `body`), `h1,h3` + `ul` margins, the Bootstrap palette
  (`a{color:#007bff}` / `a:hover{color:#0056b3; text-decoration:underline}`),
  **`.cl-container` with the full tier set** (`540/720/960/1140` at `576/768/992/1200`),
  `.cl-row` (`flex; flex-wrap:wrap; margin:0 -15px`), `.cl-no-gutters`, `.cl-col-md-12`
  (+ its `@media (min-width:768px)` `flex:0 0 100%` rule), the `.nav` base, and the utilities
  `cl-justify-content-center`, `cl-align-items-center`, `cl-mb-4` (`1.5rem`), `cl-px-0`,
  `cl-text-center` — all `!important`.
- **`@media print`** (×2): shadow resets, `a:not(.btn){text-decoration:underline}`, `h3`
  widows/orphans, **`@page{size:a3}`** and **`body{min-width:992px}`**. Dead code — drop it.
- **`@font-face`** (lines 69–107 in the `-19` sibling's layout; here **six** blocks): Roboto
  **300/400/700** × latin/latin-ext. The archive also ships `roboto-100-*` (never declared), and **no
  rule ever asks for Roboto** — so no webfont loads and `"Poppins", Arial, sans-serif` renders
  **Arial** everywhere (every `document.fonts` entry reports `unloaded`).
- **`.cl-icon`** (109–114 in the sibling; present here too): `height:1em; width:auto;
  fill:currentColor` — the snippet's only icon hook, and **nothing uses it** (the markup has no inline
  SVG).
- **custom block** (~360 lines): `body` · `body.menu-show` · `a` · `a:hover,a:focus` · `h1,h3` ·
  `.img` · `#colorlib-main-nav` (+ `.colorlib-table`, `.colorlib-table .img`, its `::after` scrim,
  `.colorlib-table-cell`, `.colorlib-nav-toggle` + `i`/hover/`.show` and a reduced-motion block,
  `.menu-show #colorlib-main-nav`, `.logo` + its unused `span`, `ul` (+ the mobile padding block),
  `li`, `li a`, `li a span`, the hover/active/focus rules for `span:before`, `li.cl-active a span`
  and `li.cl-active a span:before`) · `header` (+ the mobile block) · `header .colorlib-navbar-brand`
  + `.colorlib-logo` (+ its unused `span`/`i`/`:hover`/`:active`/`:focus`) · `.colorlib-nav-toggle` +
  `i`/`::before`/`::after`/hover/`cl-active`/`float+z-index` + a mobile block and a reduced-motion
  block · `.hero-wrap` · `.slider-text .desc h1` · `.slider-text .desc h3` · `.js-fullheight` +
  `@supports (height:100dvh)`.
- **Namespace:** `cl-`-prefixed utilities (`cl-container`, `cl-row`, `cl-no-gutters`, `cl-col-md-12`,
  `cl-text-center`, `cl-mb-4`, `cl-px-0`, `cl-justify-content-center`, `cl-align-items-center`,
  `cl-icon`, `.nav`) plus the variant's own `colorlib-`/`js-colorlib-`/`ftco-` hooks
  (`colorlib-main-nav`, `colorlib-nav-toggle`, `colorlib-table`, `colorlib-table-cell`, `logo`,
  `js-colorlib-nav-toggle`, `js-fullheight`, `colorlib-navbar-brand`, `colorlib-logo`,
  `hero-wrap`, `slider-text`, `ftco-animate`). The word `colorlib` appears **75** times in the sheet
  and **10** times in the markup — none of it may be reused. `ftco` appears **once**, as the markup's
  class `ftco-animate`, and **never** in the sheet: it is a stale class from the parent theme with no
  rule at all (drop it).

## Structure (source document order)

```
div.page
  nav#colorlib-main-nav[role=navigation]
    a.js-colorlib-nav-toggle.colorlib-nav-toggle.cl-active[href="#"]   (close X; href="#" DEAD)
      i
    div.js-fullheight.colorlib-table
      div.img[style="background-image: url(images/bg_3.jpg)"]          ← asset MISSING (404)
      div.colorlib-table-cell.js-fullheight
        div.cl-row.cl-no-gutters
          div.cl-col-md-12.cl-text-center
            h1.cl-mb-4
              a.logo[href="index.html"]  "Company Logo"
            ul
              li.cl-active › a[href="index.html"] › span  "Home"      ← current, gold #f8b500
              li           › a[href="about.html"] › span  "About"     ← 404 on the preview host
              li           › a[href="blog.html"]  › span  "Blog"      ← 404
              li           › a[href="contact.html"] › span "Contact"  ← 404
  div#colorlib-page
    header
      div.cl-container
        div.colorlib-navbar-brand
          a.colorlib-logo[href="index.html"]  "Company Logo"
        a.js-colorlib-nav-toggle.colorlib-nav-toggle[href="#"]          (header burger; href="#" DEAD)
          i
    section.hero-wrap.js-fullheight
      div.cl-container.cl-px-0
        div.cl-row.cl-no-gutters.slider-text.js-fullheight.cl-align-items-center.cl-justify-content-center[data-scrollax-parent="true"]
          div.cl-col-md-12.ftco-animate.cl-text-center
            div.desc
              h1  "Website Menu #10"
              h3  "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
script[src="js/snippet.js"]
```

Stale markup to drop: `data-scrollax-parent="true"` (the scrollax library is never loaded),
`class="ftco-animate"` (no rule exists), the `div.img` inline `background-image` (the file 404s), and
the `<i>`-only toggles (no accessible text). Note the source's **five conflicting names**:
`<title>Website menu 08`, README "Website menu 08", hero `Website Menu #10`, overlay brand
`Company Logo`, ColorLib article "Website Menu V20".

## Measured geometry (live preview, Chromium, DPR 1, 2026-10-12)

Desktop, **1440 × 900** (`scrollHeight === clientHeight === 900`; `scrollWidth === innerWidth === 1440`):

| Element | Box | Tokens |
| --- | --- | --- |
| `body` | `1440 × 900` | `#fafafa` (unseen), `gray` ink, Poppins→Arial, `16 px`/`28.8 px` |
| `div.page` | `1440 × 900 @ x = 0, y = 0` | wrapper (not `overflow:hidden` here) |
| `header` | `1440 × 92.8 @ y = 0` | `absolute`, `z:9`, `padding:32px 0` |
| `header .cl-container` | `1140 @ x = 150`, `padding:0 15px` | tiered container (1140 ≥ 1200 px) |
| `a.colorlib-logo` | `158.9 × 18 @ x = 165, y = 38` | `12 px`/`600`/`#fff`, `letter-spacing:5px` |
| header burger | `20 × 28.8 @ x = 1255, y = 32` | `float:right`, `z:1003` (in a `z:9` header) |
| burger `i` | `20 × 2 @ y = 49` | `#fff`; `::before`/`::after` `30 × 2` `#fff` at ±7 px |
| `section.hero-wrap` | `1440 × 900 @ x = 0, y = 0` | `#202020`, `100vh`/`100dvh` |
| `.hero-wrap .cl-container` | `1140 @ x = 150`, `padding:0` | `cl-px-0` (edge-to-edge hero) |
| `div.slider-text` | `1140 × 900 @ x = 150, y = 0` | full-height flex centre |
| `.cl-col-md-12` | `1140 × 172.6 @ x = 150, y = 363.7` | `100 %`, `padding:0 15px` |
| `.desc h1` | `1140 × 129.6 @ y = 363.7` | **`86.4 px`**/`700`/`#fff`/uppercase, `margin-bottom:8px` |
| `.desc h3` | `1140 × 27 @ y = 501.3` | `18 px`/`27 px`, `rgba(255,255,255,0.8)` |
| `#colorlib-main-nav` (open) | `1440 × 900 @ 0, 0`, 15 px scrollbar ⇒ inner `1425` | `rgba(0,0,0,0.99)`, `z:1002`, `scale(1)` |
| `.colorlib-table` / `.img` (open) | `1425 × 900 @ 0, 0` | `display:table` / absolute photo layer (`bg_3.jpg` → **404**) |
| overlay `h1.cl-mb-4` | `1425 × 60 @ y = 337.6`, `margin:0 0 24px` | wrapper |
| `a.logo` | `353.7 × 60 @ x = 535.7` | `40 px`/`700`/`#fff`, `letter-spacing:2px` |
| overlay `ul` | `1425 × 140.8 @ y = 421.6` | `padding:0; margin:0` |
| `li` rows ×4 | `1425 × 35.2`, tops `421.6 / 456.8 / 492 / 527.2` | `14 px`/`600`, `25.2 px` lh, `a{padding:5px 0}` |
| active `span` | `82 × 16 @ x = 671.5, y = 430.6` | `#f8b500`, `padding:0 10px` |
| overlay close X (open) | `44 × 44 @ x = 1341, y = 40` | `visibility:hidden` until `.show` (+900 ms) |

Breakpoints:

| Width | Hero | Container | Header | Headline | Overlay `ul` | Burger |
| --- | --- | --- | --- | --- | --- | --- |
| 1440 | `1440 × 900` | `1140 @ x = 150` | `92.8`, `padding:32px 0` | `86.4 px`, box `129.6`, lead `y = 501.3` | `padding:0` | `x = 1255`, `right:0` |
| 991 | `991 × 900` | `720 @ x = 135.5` | `92.8`, `padding:32px 0` | `59.46 px`, box `89.2`, lead `y = 481.1` | `padding:0` | `x = 820.5`, `right:0` |
| 767 | `767 × 900` | `540 @ x = 113.5` | `60.8`, `padding:16px 0` | `46.02 px`, box `69`, lead `y = 471` | `padding-top:20px` | `right:10px` |
| 375 | `375 × 812` | `375 @ x = 0`, `padding:0 15px` | `60.8`, `padding:16px 0` | `22.5 px`, wraps (col `103.8`), lead `54` tall | `padding-top:20px` | `x = 330`, `right:10px` |

Three things flip at **`767.98 px`**: header padding `32 px → 16 px`, the burger's `right:0 → 10px`,
and the overlay `ul`'s `padding-top:0 → 20px`. Everything else moves because the **container** crosses
its Bootstrap tiers (`576/768/992/1200`); the overlay sheet itself is `100 % × 100 %`,
`rgba(0,0,0,0.99)`, `z-index:1002` at **every** width.

## Type and colour tokens

| Token | Value | Where |
| --- | --- | --- |
| Accent (amber) | **`#fec771`** | generic `a` colour, the *intended* (inert) hover underline |
| Current row | **`#f8b500`** | `li.cl-active a span` |
| Overlay sheet | **`rgba(0,0,0,0.99)`** | `#colorlib-main-nav` background |
| Photo scrim | **`rgba(0,0,0,0.3)`** | `.colorlib-table .img::after` (invisible — photo 404s) |
| Hero surface | **`#202020`** | `.hero-wrap` |
| Page | **`#fafafa`** | `body` background (never seen) |
| Body ink | **`gray`** (`#808080`) | body copy |
| Headings | **`#000`** base; hero + overlay brand **`#fff`** | `h1,h3` custom block vs the local overrides |
| Hero lead | **`rgba(255,255,255,0.8)`** | `.slider-text .desc h3` |
| Menu labels | **`white`** (current **`#f8b500`**) | `li a` / `li a span` |
| Toggle bars | **`#fff`** | burger `i` + `::before`/`::after`, and the X |
| Radii | **none** | `border-radius` appears **zero** times |
| Shadows | **none** | 6 mentions, all in the `print`/`a:hover` resets |
| Fonts | `"Poppins", Arial, sans-serif` → **Arial** | no webfont loads (Roboto ships but is never requested) |
| Easing / transitions | sheet **`0.8s cubic-bezier(0.175,0.885,0.32,1.275)`**, links **`0.3s all ease`**, X **`0.3s`**, burger bars **`0.2s`** | the `0.8s`/`0.3s`/`0.2s` groups are reduced-motion-guarded; the generic `a` transition is not |

## Section-by-section fidelity notes

1. **Page frame.** `div.page` wraps everything; `#colorlib-main-nav` comes **first** in document order
   (before the header and the hero) even though it paints on top — reproduce that order or make the
   overlay a sibling with `z-index` ≥ 1002. Page surface **`#fafafa`**, body `16 px`/`1.8`/`gray` in a
   Poppins stack.
2. **The sheet.** `position:absolute; inset:0`, `100 % × 100 %`, `rgba(0,0,0,0.99)`, `z-index:1002`,
   `text-align:center`, **`overflow-y:scroll`** (it always reserves a `15 px` scrollbar gutter), hidden
   at rest via `visibility/opacity/scale(0)`. `body.menu-show` reveals it to `visible / 1 / scale(1)`
   **and** applies the lock (`overflow:hidden; position:fixed; height:100%; width:100%`) — the lock is
   the `body` rule, not a separate class.
3. **Motion.** The open/close motion is a **`scale()` grow** over **`0.8s
   cubic-bezier(0.175,0.885,0.32,1.275)`** — the same springy curve the `-19` sibling uses for its
   underline wipe. Do not substitute a fade or slide.
4. **Table centring.** The content column is centred by a real `display:table` + `display:table-cell;
   vertical-align:middle` pair; that is what produces the measured `y = 337.6` / `421.6` in a 900 px
   sheet. A flex equivalent is acceptable **only** if it reproduces those positions.
5. **Photo layer.** `div.img` is `position:absolute; inset:0` with `background-size:cover;
   background-position:center center` and a `rgba(0,0,0,0.3)` `::after` scrim. Its only referenced
   file — `images/bg_3.jpg` — **404s**, and the archive ships **no `images/` folder**: the intended
   treatment is "photo behind a 30 % black scrim", and the recreation supplies one deterministic
   placeholder (`https://picsum.photos/seed/bimini-1/1920/1080`) under the same scrim (delta).
6. **Overlay brand.** `40 px`/`700`/`#fff`, uppercase, `letter-spacing:2px`, `display:inline-block`,
   `line-height:1.5`, inside an `h1` with a `24 px` bottom margin (`cl-mb-4`); measured
   `353.7 × 60 @ x = 535.7` (centred). The sheet's `span` rule for the brand (`14px/300/0.8 white/`
   `letter-spacing:8px`) has **no** markup counterpart — do not invent one.
7. **Menu list.** Bare `ul` (`padding:0; margin:0`), four `li` at `14 px`/`600`/uppercase/
   `letter-spacing:5px` with the inherited `1.8` line-height (`25.2 px`) and `a{padding:5px 0}` →
   **`35.2 px`** rows on a `35.2 px` pitch (measured tops `421.6 / 456.8 / 492 / 527.2`), whole `ul`
   `140.8 px`. The `span` inside each link adds `padding:0 10px`.
8. **Current row + "underline".** The current row is **`#f8b500`** gold and nothing else in the list
   changes colour. The sheet's `span:before` state rules (hover/active/focus/current →
   `visibility:visible; transform:scaleX(1)`; current → `background:#fec771`) have **no base rule**, so
   the computed pseudo-element is `content:none; width:auto; position:static` and the amber underline
   **never renders** on the live page. The recreation implements it as a real `2 px` `#fec771` wipe-in
   (delta) — that is the decorative intent the dead CSS implies.
9. **Close control.** `44 × 44` at `top:40px; right:40px` (measured `x = 1341` once the `15 px`
   scrollbar is accounted for), `visibility:hidden; opacity:0` at rest, drawn as two `30 × 2` `#fff`
   bars at `±45deg` with the middle `i` transparent. It is shown by the script's `show` class
   **900 ms after opening** (`BM.later.ms = 900`), so for the first `0.9 s` of the grow there is **no
   visible close control**.
10. **Header + burger.** Absolute header (`32px 0`; `16px 0` below 767.98 px) at `z-index:9` with the
    brand floated left and the three-bar burger floated right at `z-index:1003` — but inside the
    header's own stacking context, so while the sheet is open a hit test at the burger's coordinates
    returns the sheet's photo layer: **the burger is unreachable when the sheet is open**. The X rules
    (`rotateZ(±45deg)`, transparent middle bar) exist only under `cl-active`, which the script never
    adds to the header control, so it stays a three-bar burger forever (the overlay's X has
    `cl-active` hard-coded in the markup).
11. **Hero.** `#202020`, exactly `100vh` (`100dvh` behind `@supports`), one full-height flex row with
    `align-items:center; justify-content:center` and a `100 %` centred column; the headline is
    **`6vw`** (so it scales with the viewport: `86.4 px` at 1440, wrapping to two lines at 375) with
    `line-height:1.5` and `text-transform:uppercase`, over an `18 px` lead in
    `rgba(255,255,255,0.8)`. Both carry the framework's `margin-bottom:8px`.
12. **Container.** This variant ships the **full Bootstrap tier set** (`540/720/960/1140` at
    `576/768/992/1200`) — unlike the `-19` sibling's fluid container — and the hero uses `cl-px-0` to
    zero its gutters while the header keeps its `15 px`.
13. **Behaviour.** The shipped script binds **both** toggles, stamps `aria-label="Menu"` +
    `aria-expanded` on each, toggles **`document.body.menu-show`**, schedules the `.show` class on the
    overlay's close control after **900 ms**, and closes on **`Escape`**. It does **not** implement an
    outside-click close (`outside:null`) or a scroll close (`onScroll:false`). Reproduce the
    behaviours, add an outside/backdrop close plus an accessible name and focus management (deltas).
14. **Assets.** **None usable** — no `images/` folder, no `url()` other than the six declared
    `@font-face` sources, no inline SVG. Any imagery in the recreation is added content and must come
    from `https://picsum.photos/seed/bimini-<n>/<w>/<h>`. The eight Roboto woff2 files are the only
    other files and are **never loaded** (247,856 B = 91.98 % of the 269,474 B archive); ship one
    Google Fonts Poppins `<link>` instead (delta).
15. **Page height.** The source is a **single `100vh` page that never scrolls**
    (`scrollHeight === clientHeight` at 1440/991/767/375). Any content section added below the hero is
    a deliberate, documented delta.

## Deltas to record in the PR

- New name **bimini** and own brand, headline, lead and menu labels (none of `Company Logo`,
  `Website Menu #10`, `Website menu 08`, "Website Menu V20", `Lorem ipsum dolor sit amet…`, `Home`/
  `About`/`Blog`/`Contact` reused).
- All **8** dead or 404-ing anchors (`#` ×2; `index.html` ×3, `about.html`, `blog.html`,
  `contact.html` — every one 404 on the preview host) materialised as real destinations.
- A real Google Fonts Poppins `<link>` instead of eight dead self-hosted Roboto woff2 files
  (247,856 B = 91.98 % of the archive).
- The **900 ms** delay on the close control reproduced or explicitly shortened, plus an accessible
  name, `aria-expanded`, `aria-controls`, `aria-current="page"` on the current row, an
  outside/backdrop close and focus management (the source has no accessible names and no outside
  close).
- Restored hover/`focus-visible` affordances (the source strips outlines/box-shadow on `a:focus`) and
  the sheet's **intended** amber `#fec771` hover underline implemented for real (the source's
  `span:before` rules are inert — `content:none`).
- Placeholder photography for the overlay's missing photo (`picsum.photos/seed/bimini-1/1920/1080`
  under the `0.3` black scrim) and for the added sections (the source ships **no** usable images).
- Added content sections below the hero (the source is a single `100vh` page that never scrolls) and
  an added footer linking **`https://www.componentdock.com/`** ("Component Dock").
- Dropped dead code: the `:where(html) … all: revert` reset (22 `revert`s), the two `@media print`
  blocks (incl. `@page{size:a3}` / `body{min-width:992px}`), the `.nav` base rule, the Bootstrap
  palette, the base system body stack, the `a:not([href])` rules, `::-webkit-file-upload-button`,
  `.cl-icon`, the burger's `text-indent:-55px` / `font:bold 14px/.4 Helvetica`, the missing-image
  inline style, `data-scrollax-parent`, `ftco-animate`, the unused brand/overlay-logo `span`/`i`
  rules, and all eight Roboto files.
