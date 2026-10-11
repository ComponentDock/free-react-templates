# Topdeck — design notes (section-by-section fidelity)

Source: ColorLib **"Website Menu V07"** — slug `website-menu-07`,
https://colorlib.com/wp/template/website-menu-07/. New name: **topdeck**
(apps/topdeck, `@free-react-templates/topdeck`).

Research date **2026-10-11**. Reference artifacts:
`/tmp/wm07/prev.html` (the **live preview** HTML, 11,155 B), `/tmp/wm07/style.css`
(20,488 B, sha256 `4d86a808fa78a0caa2665632e81dfeb8fafc81fb35ae2baa566c540ef386e03d`),
`/tmp/wm07/snippet.js` (3,537 B, sha256
`7b7e458aa84647168e673f8b9c09705b1602474681c828bbf630327d3275e0b1`),
`/tmp/wm07/wm07.zip` (the **653,017 B** snippet archive, sha256 `91d73beb…`),
extracted to `/tmp/wm07/z/website-menu-07/` → `index.html` (10,952 B),
`css/style.css` and `js/snippet.js` (**byte-identical to the live copies**),
`images/hero_1.jpg` (1900×1267, 475,413 B), `README.md`, `fonts/`
(Quicksand 400/600/700 latin + latin-ext = 6 woff2 plus `icomoon-subset.woff2`
424 B), `/tmp/wm07/page.html` (the ColorLib template page, 108,855 B — source of
the description / dates / download-size facts), `/tmp/wm07/cat.js` (the
633,990 B preview catalog index), `/tmp/wm07/shot.png` (the screenshot,
1200×972, converted from the 127,529 B AVIF original) and live-browser captures
at 1280×800 / 780×437.

## Preview status — where the live preview actually lives (read this first)

`https://preview.colorlib.com/theme/website-menu-07/` returns **HTTP 404**
(`Not Found`, 9 B) — but that is **not** the preview: the *Website Menus* family
does not sit under the slug-only theme path. The **working live preview** is

```
https://preview.colorlib.com/theme/bootstrap/website-menu-07/
```

→ **HTTP 200**, `text/html`, **11,155 B**, title `🐴 Website Menu #7`, verified
2026-10-11. It is the URL the preview host itself records for this slug in

```
https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js
```

(**HTTP 200**, 633,990 B) whose entry reads
`"website-menu-07": {"name":"Website Menu V07","tag":"Website Menu Templates",
"img":"…/website-menu-07-768x622.jpg",
"url":"https://preview.colorlib.com/theme/bootstrap/website-menu-07/", …}`. The
live page loads exactly two assets — `css/style.css?v=b6896cbd` (**20,488 B**,
`text/css`) and `js/snippet.js` (**3,537 B**) — and both are **byte-identical**
(same sha256) to the files in the snippet's own archive
`https://preview.colorlib.com/downloads/free/website-menu-07.zip` (HTTP 200,
`application/zip`, 653,017 B). So the live preview is the primary reference and
the archive is its un-versioned twin; every value below is read from those files
and confirmed against the live render (next section). No screenshot-only
fallback was needed.

The archive's `index.html` differs from the live one only by the preview host's
cache-busting query string and an extra `noindex` meta tag (10,952 B vs 11,155 B;
the live copy also inlines the preview host's `dns-prefetch` hint).

## Live render cross-check (2026-10-11, 1280×800 and 780×437 viewports)

Read with `getComputedStyle` + `getBoundingClientRect` on the live page:

| Element | Measured |
| --- | --- |
| `body` | `font-family: Quicksand, …`, 16 px / 400 / `line-height:24px`, `color:rgb(33,37,41)`, `background:#fff`, `position:relative`, **height 874 px at a 437 px viewport (= `200vh`; 1600 px at 800)** |
| `.site-navbar-wrap` | `position:absolute; z-index:99; left:0; width:100%`, `background:rgba(0,0,0,0)`, rect **765 × 52** at 780 / **1265 × 52** at 1280 (document `y = 0`) |
| `.site-navbar-top` | `font-size:12.8px`, `background:rgba(0,0,0,0)`, `border-bottom:1px solid rgba(255,255,255,0.4)`, rect **765 × 52**; its `cl-container` measures `padding:16px 15px` |
| top-bar contact link | `color:rgb(255,255,255)`, `display:flex`, `align-items:center`, `margin-right:24px`, rect **129 × 19**; envelope glyph **13 × 14** (`cl-icon` = `1em`, `fill:currentColor`) |
| top-bar social link | `padding:8px`, `color:rgb(255,255,255)`, rect **28 × 32** (four of them, right-aligned) |
| `.site-navbar` | `static`, `background:rgba(0,0,0,0)`, `margin-bottom:0`, rect **765 × 74** at 780 / **1265 × 83** at 1280 (document `y = 52`) |
| `.site-logo` (`h1`) | `font-weight:200`, `line-height:0`, `position:relative`, `top:-7px`, `font-size:40px` (h1 scale, nulled by `line-height:0`), rect **90 × 8** |
| `.site-logo a` | `color:rgb(255,255,255)`, **20 px**, `font-weight:700`, `text-transform:uppercase`, Quicksand, rect **69 × 25** at x ≈ 38 / 78 |
| `ul.site-menu.main-menu` | `display:none` at 780; `display:block`, `margin-bottom:0`, rect **890 × 83** at 1280 (right-aligned, last item flush with the container's right gutter) |
| top-level `li` | `display:inline-block`, `padding:10px 5px`, `height:83px` at 1280 |
| current nav link | `padding:20px 10px`, **15 px / weight 500**, `color:rgb(255,255,255)` |
| other nav links | same box, `color:rgba(255,255,255,0.6)` |
| dropdown parent link | `padding:20px 20px 20px 10px`, `color:rgba(255,255,255,0.6)`, `::before` = `content:"\e313"`, `font-family:icomoon`, 16 px, `right:0`, vertically centred |
| toggle wrapper | `display:none` at 1280 (`cl-d-lg-none`); `display:inline-block`, rect **28 × 74** at 780 |
| toggle glyph | `span.icon-menu.cl-h3` → **28 px** tall in `rgb(255,255,255)`, rect **28 × 34** |
| `.hero` | `100vh` (**437 / 800**), `width:100%`, `background-size:cover`, `background-position:50% 50%`, `no-repeat`, image URL from the preview host; rect starts at document `y = 0` |
| `.sticky-wrapper` (created by JS) | before scroll: `position:absolute; z-index:100`, rect **765 × 74** at 780 / **1265 × 83** at 1280 at document `y = 52` |
| **sticky state** | after `scrollTo(0,400)` + a scroll event: wrapper class **`sticky-wrapper is-sticky`**, `.site-navbar` → `position:fixed`, `top:0px`, `width:1265px`, **`background-color:rgb(0,123,255)`**, link `padding:10px`, inactive `rgba(255,255,255,0.6)`, current/hover `#fff` |
| dropdown (focused) | `visibility:visible; opacity:1; margin-top:0` (rest: `hidden / 0 / 20px`), `transition:0.2s`, `background:#fff`, `border-radius:4px`, `box-shadow:rgba(0,0,0,0.25) 0 0 4px 0`, rect **200 × 156** (`y = 135` when open), 4 rows |
| dropdown row | `min-width:200px`, `padding:0`, `margin:0`, `list-style:none`; link `padding:9px 20px`, `display:block`, **14 px**, `color:rgb(52,58,64)`, `text-transform:none`, `transition:0s all`; first/last link `border-radius:4px` |
| second-level flyout | `position:absolute; left:200px; top:0`, white, `border-radius:4px`, `box-shadow:rgba(0,0,0,0.25) 0 0 4px 0`, rect **200 × 117** (3 rows) |
| `.site-mobile-menu` | `width:300px; position:fixed; right:0; z-index:2000; padding-top:20px; background:#fff; height:100vh; transition:0.3s ease-in-out; box-shadow:rgba(0,0,0,0.1) -10px 0 20px -10px`, at rest `transform:matrix(1,0,0,1,330,0)` = `translateX(110%)` |
| panel header / close | header `float:left`, `padding:0 20px`, rect **300 × 50**; close `float:right`, measured `margin-top:16px` (the sheet says `8px`, `cl-mt-3`'s `1rem !important` wins); glyph **30 px**, `color:rgb(33,37,41)` (hover `#dee2e6`), `padding-left:10px` |
| panel body | `overflow-y:scroll`, `padding:20px 20px 150px`, `height:calc(100vh - 52px)` → **385 px** at a 437 px viewport |
| panel rows (cloned) | **7** level-1 rows; row 1 `font-size:20px`, `padding:10px 20px`, `display:block`, current `rgb(0,123,255)`; level 2 **16 px** `padding-left:40px`; level 3 **16 px** `padding-left:60px` |
| submenu expander (JS-injected) | `role="button"`, `aria-label="Show submenu"`, `aria-expanded="false"`, class `arrow-collapse cl-collapsed`, absolute `right:0; top:10px`, **36 × 36 px, `border-radius:50%`**, hover `background:#f8f9fa`, caret `\f078` at 12 px rotated `-180deg` when open |
| veils / states | toggle click sets `body.offcanvas-menu` and `aria-expanded="true"`; `body::before` is `rgba(0,0,0,0.5)` at `opacity:0; z-index:1; visibility:hidden` and the sheet's `body.offcanvas-menu:before` lifts it to `1 / 1002 / visible` |
| structure counts | `.site-menu .has-children` = **2** (the `Pages` row and its `More Links` child); `.site-mobile-menu .site-nav-wrap > li` = **7**; `ul.site-menu.main-menu > li` = **7** |

The panel transform still read `translateX(110%)` immediately after the click in
the headless browser while `body` already carried `offcanvas-menu` — a
transition-throttling artifact of the harness, not a source behaviour; the
`translateX(0)` end state is declared in the sheet
(`.offcanvas-menu .site-mobile-menu{transform:translateX(0%)}`) and the sticky
`is-sticky` / `#007bff` state *was* observed after a real scroll + scroll event.

## Source facts worth keeping

- **Live page title:** `Website Menu #7` (the ColorLib marketing page adds
  "Website Menu V07 - Free Transparent Menu Template 2026 - Colorlib").
- ColorLib's description: *"Create excellent website navigability with this
  beautiful, responsive and free transparent menu template. It also features a
  top bar with social media icons and multi-level drop-down menu layering."*
- Author **Rok Krivec** (Colorlib), first published **2021-01-28**, "Released:
  September 2026" — the 2026 rewrite note: *"this snippet is now plain HTML and
  CSS plus a few lines of vanilla JavaScript: no jQuery, no Bootstrap files, no
  plugins. The download is 638 KB (it was 2.0 MB). Use it on its own, or drop it
  into a Bootstrap 4, 5 or 6 project and it looks the same. The mobile menu and
  sticky header work without jQuery."* License CC BY 3.0. The archive measures
  **653,017 B** (638 KB rounded).
- **The snippet has no content:** `index.html` is panel + header + hero + script.
  The only "content" is the photo. Its seven nav anchors
  (`#home-section`, `#classes-section`, `#about-section`, `#events-section`,
  `#gallery-section`, `#contact-section`, plus the dead `Pages` parent) point at
  nothing, and every dropdown entry is `href="#"`. The recreation materialises
  them (a documented delta).
- **Dependencies: none** — the archive ships its own CSS, JS and woff2 files and
  says so in `README.md`. The sheet opens with a `:where(html) … {all: revert}`
  reset so a Bootstrap host page cannot restyle the snippet, and its utilities
  are `cl-`-prefixed for the same reason.
- The archive's `fonts/` are the three **static** Quicksand subsets (400/600/700,
  latin + latin-ext) plus a 424 B `icomoon-subset.woff2` carrying exactly three
  glyphs: `\e313` (down caret), `\e315` (right caret) and `\f078` (the panel
  arrow, rotated by CSS). None of these files ship in the recreation.

## What makes this variant different from its siblings (`-01`…`-06`)

1. **It is the only one with a utility top bar.** A `0.8rem` strip of contact +
   social links sits above the nav row, closed by the page's single divider
   (`1px solid rgba(255,255,255,0.4)`). Its text labels vanish below 768 px.
2. **It is the only one with a sticky header.** `snippet.js` port of jQuery
   Sticky pins the nav row (not the top bar) and repaints it `#007bff`.
3. **It is the only one with a real dropdown tree.** Two `.has-children` levels
   (a `Pages` parent and a nested `More Links`) with a `4px`-radius white flyout,
   a `10px` triangle and a `0.2s` offset/fade transition.
4. **Its off-canvas panel slides in from the RIGHT** (`right:0`,
   `translateX(110%)`) — `-06` (larboard) slides from the left; the mobile
   sublevels here are **collapsible** behind a 36 px round expander, whereas
   `-06` has no sub-levels at all.
5. **The shape language is mixed.** `4px` flyout radii and one `50%` control
   appear here; `-05`/`-06` are square throughout. Do not "normalise" either way.
6. **Font: Quicksand** (with `h1,h3,.cl-h3` re-declaring it) instead of Open Sans;
   the sheet's normalize block still names a dead `Roboto` body stack before the
   later `body{font-family:"Quicksand"…}` override wins.
7. **The header is a two-column grid in the nav row** (`cl-col-2` logo /
   `cl-col-10` nav) rather than the `-05`/`-06` mirrored `cl-col-9`/`cl-col-3`
   split, and the mobile toggle sits inline **inside** the `cl-col-10`, before
   the `ul`.

## Global tokens

- **Brand blue `#007bff`** — page link default, the **stuck** header surface, the
  off-canvas current/hover rows.
- **`#0056b3`** — `a:hover` default shade (the header's own links stay white
  because `.site-navbar-wrap a{color:#fff}` comes later in the sheet).
- **`#212529`** ink (body, panel rows, close glyph) · **`#343a40`** flyout row
  ink · **`#ebeef0`** flyout hover wash · **`#dee2e6`** close-glyph hover ·
  **`#f8f9fa`** expander hover · **`#fff`** page/panel/flyout surfaces.
- **Chrome colours over the photo:** every `.site-navbar-wrap a` is white; top-level
  labels are `rgba(255,255,255,0.6)` with the **current** one `#fff`; the hairline
  is `rgba(255,255,255,0.4)`; the veil is `rgba(0,0,0,0.5)`.
- **Radii:** `4px` (flyout surface + first/last row) and `50%` (36 px expander) —
  nothing else; `button{border-radius:0}` in the normalize block.
- **Motion:** `a{transition:.3s all ease}`; flyout `transition:.2s 0s`; panel
  `.3s ease-in-out`; veil `.3s ease`; expander caret `.3s ease`.
- **Type:** Quicksand 400/600/700 declared (the sheet asks for 500 on nav labels
  and 200 on the logo `h1`); body 16 px/1.5; `h1` 2.5rem; `.cl-h3` 1.75rem; nav
  labels 15 px; wordmark 20 px uppercase bold; flyout rows 14 px; panel rows 20 px
  (level 1) / 16 px (levels 2–3).
- **Container:** `15px` gutters, max-width `540/720/960/1140` at
  `sm/md/lg/xl`; the nav row splits `16.667 % / 83.333 %`.
- **Band:** `100vh`, `cover`, `center center`, `no-repeat`; body `200vh`.

## Section 0 (chrome) — `div.site-mobile-menu` (rendered FIRST in the DOM)

- Source markup: `div.site-mobile-menu.site-navbar-target` ›
  `div.site-mobile-menu-header` (› `div.site-mobile-menu-close.cl-mt-3` ›
  `span.icon-close2.js-menu-toggle` with an inline SVG `×`) +
  `div.site-mobile-menu-body` (empty — `snippet.js` fills it with the clone).
- Geometry: `300 px` wide, `position:fixed; right:0; z-index:2000;
  padding-top:20px; background:#fff; height:100vh;
  box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transition:.3s all ease-in-out`,
  sliding `translateX(110%) → 0` when `body` carries `offcanvas-menu`.
- Body: `height:calc(100vh - 52px)`, `padding:20px` + `padding-bottom:150px`,
  `overflow-y:scroll`, `-webkit-overflow-scrolling:touch`.
- Clone target: `.js-clone-nav` (the desktop `ul`) is cloned, its class renamed
  `site-nav-wrap`, its id stripped, appended into `.site-mobile-menu-body`;
  each cloned `has-children` then gets an injected
  `span.arrow-collapse.cl-collapsed[role=button][aria-label="Show submenu"]
  [aria-expanded=false]` and its child `ul` gets `cl-collapse` + `id="collapseItem<k>"`.
- The recreation must render the same nav component in the panel (one source of
  truth) and model the expander as a real `button` — never DOM-clone.

## Section 1 — `div.site-navbar-wrap` (transparent, over the band)

- `position:absolute; z-index:99; width:100%; left:0` — the entire chrome floats
  on the photo; `.site-navbar-wrap a{color:#fff}`.
- **Utility bar** (`div.site-navbar-top`): `border-bottom:1px solid
  rgba(255,255,255,0.4)`, `font-size:0.8rem`, container `cl-py-3` = 16 px;
  `cl-col-6` left = two `cl-d-flex` anchors (envelope + label with
  `cl-d-none cl-d-md-inline-block`, `cl-mr-2` between glyph and text,
  `cl-mr-4` = 24 px between the two anchors); `cl-col-6.cl-text-right` right =
  four `cl-p-2` (8 px) social anchors with `cl-icon` glyphs (`1em`,
  `fill:currentColor`).
- **Nav row** (`div.site-navbar.site-navbar-target.js-sticky-header`, wrapped at
  load by `snippet.js` in `div.sticky-wrapper`): `cl-container` › `cl-row` ›
  `cl-col-2` = `h1.cl-my-0.site-logo > a`; `cl-col-10` =
  `nav.site-navigation.cl-text-right[role=navigation]` › inner `cl-container` ›
  the toggle wrapper (`cl-d-inline-block cl-d-lg-none cl-ml-md-0 cl-mr-auto
  cl-py-3`) and `ul.site-menu.main-menu.js-clone-nav.cl-d-none.cl-d-lg-block`.
- Logo specifics: `h1{font-weight:200; line-height:0; position:relative;
  top:-7px}` with the anchor re-declaring `font-size:20px; font-weight:bold;
  text-transform:uppercase; color:#fff` — i.e. the `h1`'s 2.5rem is neutralised
  by `line-height:0`, and the *optical* lift is the `-7px`.
- Nav metrics: `> li{display:inline-block; padding:10px 5px}` (last child
  `padding-right:0`), `> li > a{padding:20px 10px; font-size:15px; font-weight:500}`
  (last child `padding-right:0`), inactive `rgba(255,255,255,0.6)` → `#fff` on
  hover/focus; the current row is `#fff` (see gotcha #1); dropdown parents add
  `position:relative; padding-right:20px` for the caret.
- **Sticky mechanics (`snippet.js` faithfully ported from jquery.sticky):** the
  wrapper is inserted *in place* (`position:absolute; z-index:100; width:100%`)
  so it sits at document `y = 52 px` under the top bar; `update()` sets the
  wrapper's height to the row's offsetHeight, computes
  `should = scrollY > wrapTop + scrollY - 0`, toggles `is-sticky`, and pins the
  row with inline `position:fixed; top:0; width:<wrapper width>px`. The stuck
  row is `background-color:#007bff` with `a{padding:10px 10px}` and
  `#fff !important` on hover/current.
- **Dropdown** (`.has-children` → `ul.cl-dropdown.arrow-top`): rest
  `visibility:hidden; opacity:0; margin-top:20px; transition:.2s 0s` → open
  `visible; opacity:1; margin-top:0` (`:hover`, `:focus`, `:active` are all
  wired); surface `background:#fff; border-radius:4px;
  box-shadow:0 0 4px 0 rgba(0,0,0,.25); padding:0; text-align:left;
  top:100%; position:absolute`; rows `min-width:200px`, `list-style:none`,
  link `padding:9px 20px; display:block; font-size:14px; color:#343a40`; hover
  `background:#ebeef0; color:#212529`; the `arrow-top::before` triangle is
  `border:10px solid transparent; border-bottom-color:#fff; left:20%;
  margin-left:-10px; bottom:100%`; nested parent gets caret `\e315` at
  `right:20px` and its flyout opens at `left:100%; top:0`.
- The source's `padding:0 20px` panel header, `float` usage and inline styles are
  layout artefacts of the 2026 rewrite — the recreation uses flex/grid but keeps
  every measured dimension.

## Section 2 — `div.hero` (the image band)

- `height:100vh; width:100%; background-size:cover;
  background-position:center center; background-repeat:no-repeat` with the image
  applied inline; the source's `images/hero_1.jpg` is **1900×1267** (475,413 B).
- The band is the **only** content; `body{height:200vh}` exists purely so the
  sticky header has room to engage. The recreation replaces blank filler with the
  six materialised sections (a documented delta) and keeps the band at
  `100vh` first paint with the header floating over it.

## Screenshot read-through (1200×972, AVIF→PNG)

A browser-chrome mock of the live preview at rest. Top band: the **utility bar**
— envelope glyph + `info@domain.com`, then phone glyph + `+1 234 4567 8910`, on
the left; four faint white social glyphs (twitter, facebook, linkedin, instagram)
on the right — closed by the hairline. Below it the **nav row**: **`BRAND`** in
white uppercase bold at the far left, and at the right **`Home`** (fully white —
the current row) · **`Classes`** · **`Pages ▾`** · **`About`** · **`Events`** ·
**`Gallery`** · **`Contact`**, each around 60 % white. Everything is drawn
directly on the photo — a full-bleed cinderblock-wall shot of three people in
muted blue/grey clothing — with **no scrim, no overlay, no buttons and no
content sections**. That frame (top bar + nav row over a `100vh` photo) is the
design being replicated.

## Fidelity gotchas

1. **The current-row colour is a specificity accident.** `cl-active` sits on the
   `li`, so `.site-menu > li > a.cl-active{color:#fff}` **never matches**; the
   current row is white because `.sticky-wrapper .site-navbar ul li.cl-active a`
   (`0,0,3,3`) beats the `rgba(255,255,255,0.6)` of
   `.site-navbar .site-navigation .site-menu > li > a` (`0,0,3,2`) — and that rule
   is **not** scoped to `.is-sticky`, so the row is white in both states. The
   recreation should make this explicit (`aria-current` + a single "current"
   style), not reproduce the accident.
2. **The sticky bar is the nav row only.** The utility bar scrolls away; the
   wrapper's `position:absolute` places the sticky zone at `y = 52 px`. Do not
   pin the whole two-tier header.
3. **`cl-py-3` vs the sheet's own paddings.** The toggle wrapper's `cl-py-3`
   (`1rem !important`) and the close control's `cl-mt-3` (`1rem !important`, so
   `margin-top:16px` measured, not the sheet's `8px`) are utility-vs-component
   conflicts where the utility wins — ship the measured value once.
4. **The dropdown is hover-only on desktop but collapsible in the panel.**
   `snippet.js` wires `click` only for the panel's injected arrows; the desktop
   flyout opens on `:hover`/`:focus`. The recreation needs both behaviours from
   one data structure, with keyboard support added (a documented improvement).
5. **`has-children > a` is `href="#"` in the source.** In the recreation it must
   be a real disclosure toggle (button semantics + `aria-expanded`), not a dead
   link; the same applies to all seven dropdown rows.
6. **Utility-bar labels vanish below 768 px** (`cl-d-none cl-d-md-inline-block`)
   while the nav itself only appears at ≥992 px — two different breakpoints in
   the same header. Keep both (`md` for labels, `lg` for the nav row + toggle
   swap).
7. **Two font-family declarations in one sheet:** the normalize block sets
   `body{font-family:"Roboto",…}` and the snippet block overrides it with
   Quicksand; `h1,h3,.cl-h3` re-declare Quicksand explicitly. Only Quicksand
   matters — and its declared weights are 400/600/700 even though the CSS asks
   for 500 (nav) and 200 (logo `h1`), which is why the Google Fonts link should
   request the variable face.
8. **The `icomoon` subset is only three glyphs** (`\e313`, `\e315`, `\f078`), and
   the archive's other inline SVGs (menu bars, close, envelope, phone, four
   socials) are hand-authored paths. Neither ships: use `lucide-react` icons of
   the same meaning and size.
9. **`body{height:200vh}` is load-bearing** for the sticky demo. The recreation
   keeps the page taller than the viewport — but with the real six sections, not
   empty space, and no horizontal overflow at 320 px.
10. **No footer exists in the source.** The Component Dock footer is an explicit,
    documented addition (one `https://www.componentdock.com/` link + computed
    year), as in every other template in this family.
