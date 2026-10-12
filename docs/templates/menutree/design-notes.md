# Menutree — design notes (section-by-section fidelity)

Source: ColorLib **"Website Menu 01"** — slug `website-menu-01`,
https://colorlib.com/wp/template/website-menu-01/. New name: **menutree**
(apps/menutree, `@free-react-templates/menutree`).

Research date **2026-10-11**. Reference artifacts:
`/tmp/live.html` (the **live preview** HTML, 6,103 B), `/tmp/live-style.css`
(18,843 B, sha256 `37126f79…`), `/tmp/live-snippet.js` (3,537 B,
sha256 `fdfdba1a…`), `/tmp/wm01.html` (the 404 body from the slug-only theme
path), `/tmp/wm01.zip` (231,882 B snippet archive), extracted to
`/tmp/wm01x/website-menu-01/` → `index.html` (5,900 B), `css/style.css`
(18,843 B), `js/snippet.js` (3,537 B), `/tmp/cl-wm01.html` (the ColorLib template
page, 108,334 B — source of the description / author / date / download-size
facts), `/tmp/catalog.js` (the preview host's 633,990 B catalog index that maps
the slug to its `theme/bootstrap/` preview) and `/tmp/wm01.jpg` (the screenshot,
1200×972, 30,134 B).

## Preview status — where the live preview actually lives (read this first)

`https://preview.colorlib.com/theme/website-menu-01/` returns **HTTP 404**
(`Not Found`, 9 B) — but that is **not** the preview: the *Website Menus* family
does not sit under the slug-only theme path. The **working live preview** is

```
https://preview.colorlib.com/theme/bootstrap/website-menu-01/
```

→ **HTTP 200**, `text/html`, **6,103 B**, title `Website Menu #1`, verified
2026-10-11. It was found through the catalog index the preview host loads for
its own home page:
`https://preview.colorlib.com/assets/js/catalog-products-*.js` (**633,990 B**)
contains, for the key `website-menu-01`:

```json
{"name":"Website Menu V01","tag":"Website Menu Templates",
 "url":"https://preview.colorlib.com/theme/bootstrap/website-menu-01/",
 "details":"https://colorlib.com/wp/template/website-menu-01/"}
```

Every sibling entry carries the same `theme/bootstrap/` prefix. The live page
loads exactly two assets — `css/style.css?v=f016aacb` (**18,843 B**,
`text/css`) and `js/snippet.js?v=d8fd00d5` (**3,537 B**) — and both are
**byte-identical** (sha256
`37126f7940aa87d07558c3a72fb3e320ba86d1db9f0a945649a79d517f7c39de` and
`fdfdba1a45436129b320091550d64e9bc27099b5e4ff090819597b04406de01b`) to the files
in the snippet's own downloadable archive
`https://preview.colorlib.com/downloads/free/website-menu-01.zip` (HTTP 200,
`application/zip`, 231,882 B — ColorLib's page calls the download "226 KB", down
from 2.3 MB before the September 2026 rewrite). So the live preview is the primary
reference and the archive is its un-versioned twin; every value below is read
from those files and confirmed against the live render (see the next section).
No screenshot-only fallback was needed.

Archive contents: `index.html`, `css/style.css`, `js/snippet.js`, `README.md`
(1,264 B) and six Open Sans woff2 subsets (300/400/700 × latin/latin-ext) plus
`icomoon-subset.woff2`. There is **no `images/` folder**, the archive ships **no
raster file at all** and the markup contains **no `<img>`** — the only decoration
is the wordmark text and inlined SVG paths. The README calls the snippet
dependency-free: "No jQuery, no Bootstrap, no build step, no CDN call."

## Live render cross-check (2026-10-11, 780×437 viewport)

The live preview was opened in a browser and its computed styles read back.
Everything in this document is confirmed on real elements:

- `.hero` → `getBoundingClientRect()` **765 × 437 = the entire viewport**,
  `background-color: rgb(93, 91, 106)` = **`#5d5b6a`**.
- `.site-navbar` → `position:absolute; top:0; width:765px; z-index:1999`;
  resting `border-bottom:1px solid rgba(255,255,255,.1)` — note the hairline is on
  the **navbar**, not on the generated `.sticky-wrapper` (which computes to
  `border-bottom:0`).
- `h1.site-logo` → `font-size:24px; font-weight:500`; `.site-logo a` **white**;
  `.site-logo .cl-text-primary` = `rgb(0, 123, 255)` = **`#007bff`**.
- `.site-menu > li > a` → `font-size:13px; text-transform:uppercase; padding:20px;
  color:rgba(255,255,255,.7)`; `li.social > a{padding-left:5px; padding-right:5px}`.
- `.site-menu-toggle` → white, `.cl-h3` glyph **28 px**.
- `.has-children .cl-dropdown` → `background:#fff; border-top:2px solid
  rgb(0,123,255); margin-top:20px; visibility:hidden; opacity:0; transition:.2s;
  box-shadow:0 2px 10px -2px rgba(0,0,0,.1)`, rows `min-width:210px`, row links
  `padding:9px 20px` / `color:rgb(0,0,0)` / 16 px / `text-transform:none`, and the
  third level `left:100%; top:0`.
- `.site-mobile-menu` → `width:300px; position:fixed; padding-top:20px;
  background:#fff; box-shadow:-10px 0 20px -10px rgba(0,0,0,.1);
  transition:.3s ease-in-out; transform:translateX(330px)` (110 % of 300), its
  body **385 px** tall (= `calc(100vh - 52px)`) with `padding:0 20px 150px`.
- `body` → computed family **Open Sans**, 16 px, `color:rgb(33,37,41)`,
  height **874 px** (= `200vh`); the veil's `backgroundColor` is
  `rgba(0,0,0,.5)`.
- The class-driven states exist as rules
  (`body.offcanvas-menu::before{opacity:1; visibility:visible}`,
  `.offcanvas-menu .site-mobile-menu{transform:translateX(0%)}`,
  `.sticky-wrapper.is-sticky .site-navbar{background:#fff; border-bottom:1px solid
  transparent; box-shadow:4px 0 20px -5px rgba(0,0,0,.1)}` with the toggle
  `#000`, the logo `#007bff` and the links `#000`). **Dispatching `scroll`** on
  the live page proves the sticky path end-to-end: the wrapper gains `is-sticky`,
  the bar receives the inline `position:fixed; top:0; width:765px`, and
  `.site-menu > li > a` computed flips to `rgb(0,0,0)`.
- Mobile clone render: level sizes **20 / 16 / 16 px** at `padding-left`
  **20 / 40 / 60 px**, `#212529` rows, arrow toggles **36 × 36** with
  `border-radius:50%`, `aria-expanded="false"` and `aria-label="Show submenu"`.

**Harness caveat (cost a false alarm:)** the browser tab reports
`document.hidden === true`, so real scroll events do not fire and some style
recalcs stall — `getComputedStyle` on a class-toggled element can still return the
old value. Dispatch the event (`window.dispatchEvent(new Event('scroll'))`) and
re-read before concluding the page is broken; the source is not at fault.

## Source facts worth keeping

- Author **Rok Krivec**; first published **2021-01-27**; rewritten
  **September 2026** to "plain HTML and CSS plus a few lines of vanilla
  JavaScript: no jQuery, no Bootstrap files, no plugins".
- ColorLib's own description: *"To create simple and practical page navigation,
  this free multi-level drop-down menu template will do the trick. You can create
  a pleasant experience, add a brand logo and even activate social media icons."*
- The sheet is a **hand-rolled Bootstrap-4 grid look-alike** with a `cl-`
  namespace (`cl-container`, `cl-row`, `cl-col-*`, `cl-d-*`, `cl-text-primary`,
  `cl-dropdown`, `cl-nav-link`, `cl-collapse`, `cl-mt-3`, `cl-py-3`, `cl-mr-auto`,
  `cl-float-right`, `cl-position-relative`) — **not** a Bootstrap build. The
  recreation uses Tailwind utilities and must not reuse the `cl-` names.

## Global tokens

- **Type:** effective family is **`"Open Sans", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`**. The
  sheet contains **two** `body` rules: an early `Roboto`-first one (line 142,
  with `font-size:1rem; line-height:1.5; color:#212529; background:#fff`) and a
  later Open Sans one (line 496) that **overrides** it — Open Sans is what
  renders. Weights shipped: **300, 400, 700** (cross-checked against the six
  woff2 subsets).
- **Scale:** `h1,.h1{font-size:2.5rem}`, `h3,.cl-h3{font-size:1.75rem}`,
  headings `font-weight:500; line-height:1.2; margin-bottom:.5rem`. The wordmark
  is an `h1` **overridden to `font-size:24px`**. Nav links **13 px** uppercase.
  Mobile panel rows **20 / 16 / 16 px** by level. Body copy `1rem / 1.5`.
- **Palette (whole sheet):** `#007bff` (11×), `#fff` (8×), `#000` (4×),
  `#212529` (2×), `#0056b3` (2×), `#6c757d`, `#5d5b6a`, `#eff1f3`, `#f8f9fa`
  (1× each). That is the entire colour vocabulary — the design is a blue accent
  on white/grey/slate.
- **Radii:** the only rounding in the sheet is `border-radius:50%` on the 36 px
  mobile arrow toggle and a normalize `button{border-radius:0}`.
  **Everything else is square** — do not introduce pills or rounded cards.
- **Shadows used:** `0 2px 10px -2px rgba(0,0,0,.1)` (dropdown),
  `-10px 0 20px -10px rgba(0,0,0,.1)` (off-canvas panel),
  `4px 0 20px -5px rgba(0,0,0,.1)` (stuck header). Veil `rgba(0,0,0,.5)`.
- **Motion:** site-wide `a{transition:.3s all ease}`; dropdown `transition:.2s 0s`
  (with `margin-top:20px → 0`); panel `.3s all ease-in-out`; veil `.3s all ease`.

## Section 1 — `header.site-navbar` (transparent, over the band)

- `position:absolute; top:0; width:100%; margin-bottom:0; z-index:1999`, so it
  floats **on top of** the band and the slate shows through.
- Grid: `.cl-container > .cl-row.cl-align-items-center` with
  `cl-col-6 cl-col-xl-2` (logo), `cl-col-12 cl-col-md-10 cl-d-none cl-d-xl-block`
  (nav — desktop only at **≥1200 px**; note the `cl-d-none` + `cl-d-xl-block`
  pair) and `cl-col-6 cl-d-inline-block cl-d-xl-none cl-ml-md-0 cl-py-3`
  (hamburger column, inline `top:3px`).
- **Wordmark:** `h1.site-logo > a > "Brand" + span.cl-text-primary "."`, the
  span being `#007bff !important` (`#0056b3` on hover). 24 px.
- **Row:** `ul.site-menu.main-menu.js-clone-nav.cl-mr-auto.cl-d-none.cl-d-lg-block`
  — `> li{display:inline-block}`, `> li > a{padding:20px 20px; font-size:13px;
  text-transform:uppercase; display:inline-block; text-decoration:none!important}`,
  hover `#007bff`; `.cl-active{color:#007bff; display:inline-block;
  padding:20px 20px}`; `> li.social > a{padding-left:5px; padding-right:5px}`.
  Source items: Home · About Us ▾ · Blog · Contact · facebook · twitter ·
  linkedin. **The social links carry no accessible name in the source** — the
  recreation labels them.
- **Caret:** `.has-children > a{padding-right:20px}` + a `:before` glyph
  `content:"\e313"` from the `icomoon` font, 16 px, vertically centred at
  `right:0`. Use a `lucide-react` chevron instead (same position/size feel).
- **Hamburger:** `a.site-menu-toggle.js-menu-toggle.cl-float-right` with
  `span.icon-menu.cl-h3` (three-bar SVG; `.cl-h3` is `1.75rem`, so ≈28 px).

### Dropdown (second level)

`.has-children .cl-dropdown`: white, `position:absolute; top:100%; text-align:left;
border-top:2px solid #007bff; box-shadow:0 2px 10px -2px rgba(0,0,0,.1);
padding:0; margin-top:20px; transition:.2s 0s`, hidden by
`visibility:hidden; opacity:0`. Rows: `> li{list-style:none; padding:0; margin:0;
min-width:210px}` and `> li > a{padding:9px 20px; display:block; color:#000;
text-transform:none; letter-spacing:normal}` with
`> li > a:hover{background:#eff1f3; color:#000}`. Opens on the parent's
`:hover`, `:focus` **and** `:active` (`margin-top:0; visibility:visible;
opacity:1`, `transition-delay:0s`). Source rows: Team, Pricing, FAQ, Gallery,
Services, Testimonials + the nested "More Links". `.cl-active` rows `#007bff`.

### Third level

`... .cl-dropdown > li.has-children > .cl-dropdown{left:100%; top:0}` with its own
caret `\e315` at `right:20px` — a **flyout to the right** (source rows: Menu One,
Menu Two, Menu Three). On narrow screens this must be re-anchored or stacked so
it never opens off-screen.

### Sticky behaviour (`js/snippet.js`)

The script wraps any `.js-sticky-header` in a `.sticky-wrapper`
(`position:absolute; z-index:100; width:100%`), then on scroll (passive) adds
`.is-sticky` and sets `position:fixed; top:0; width:<wrapper width>px` once
`scrollY` passes the wrapper's top. It re-fixes the width while stuck so nothing
jumps. Resting vs stuck tokens:

| | resting (over the band) | stuck (`is-sticky`) |
| --- | --- | --- |
| bar surface | transparent | `#fff` |
| bottom edge | `1px solid rgba(255,255,255,.1)` | `1px solid transparent` |
| shadow | — | `4px 0 20px -5px rgba(0,0,0,.1)` |
| wordmark | `#fff` | `#007bff` |
| links | `rgba(255,255,255,.7) !important` | `#000 !important` |
| link hover / current | `#fff` | `#007bff` |
| hamburger glyph | `#fff` | `#000` |

## Section 2 — `div.hero` (the band)

Literally `<div class="hero"></div>`:
`.hero{height:100vh; width:100%; background:#5d5b6a}`. Nothing else — no heading,
no image, no overlay. The band exists so the page can scroll and the
transparent-header/sticky behaviour is visible; `body{height:200vh}` forces that
scroll length.

**Delta (deliberate):** the source's own nav declares ten anchor targets that do
**not** exist on the page —
`#home-section`, `#about-section`, `#team-section`, `#pricing-section`,
`#faq-section`, `#gallery-section`, `#services-section`, `#testimonials-section`,
`#blog-section`, `#contact-section`. The recreation materialises each as a
labelled own-copy panel **inside this same band** (band count and order stay
1:1), gives every one a `scroll-margin-top` ≥ header height, and ships **zero**
dead `href="#…"` links. Panels sit on the flat slate in white/near-white with a
`#007bff` accent; imagery, if used, comes from
`https://picsum.photos/seed/menutree-<n>/<w>/<h>`.

## Chrome — the off-canvas mobile menu

`div.site-mobile-menu.site-navbar-target` sits after the header:
`width:300px; position:fixed; right:0; z-index:2000; padding-top:20px;
background:#fff; height:calc(100vh); transform:translateX(110%);
box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transition:.3s all ease-in-out`,
sliding to `translateX(0)` under `body.offcanvas-menu`.

- **Header strip:** `.site-mobile-menu-header` (20 px side padding) with a
  right-floated `.site-mobile-menu-close` (`margin-top:8px`) whose `span` is a
  **30 px** `\e313`-family close glyph (`lucide-react` `X` here).
- **Body:** `.site-mobile-menu-body{overflow-y:scroll;
  -webkit-overflow-scrolling:touch; position:relative; padding:0 20px 20px;
  height:calc(100vh - 52px); padding-bottom:150px}` — the extra bottom padding
  matters on iOS.
- **The tree is cloned**, not authored: `nav.cloneNode(true)` with the class
  swapped to `.site-nav-wrap`, appended to the body. In React, render the same
  nav tree component twice (desktop row + panel) instead of cloning DOM.
- **Rows:** `.site-nav-wrap a{padding:10px 20px; display:block; color:#212529}`
  (hover `#007bff`), `> li > a{font-size:20px; padding-left:20px}`,
  `> li > ul > li > a{padding-left:40px; font-size:16px}`,
  deeper `padding-left:60px; font-size:16px`; `.social` rows become
  `float:none; width:auto` so the icons sit inline.
- **Arrow toggle:** generated `.arrow-collapse` span —
  `position:absolute; right:0; top:10px; z-index:20; width:36px; height:36px;
  text-align:center; cursor:pointer; border-radius:50%`, hover `#f8f9fa`, a
  **12 px** `\f078` chevron that is `rotate(-180deg)` when collapsed and loses the
  rotation when expanded (`.cl-collapsed`). The source sets
  `role="button"`, `aria-label="Show submenu"` and `aria-expanded` but **no
  `aria-controls`** — add it in the recreation.
- **Submenu hiding:** the generated submenu gets `.cl-collapse`
  (`display:none` unless `.cl-show`) and `id="collapseItem<k>"`; the toggle
  flips `.cl-show`/`.cl-active` and the `aria-expanded` string.
- **Veil:** `body:before` — `content:""; position:absolute; inset:0;
  background:rgba(0,0,0,.5); opacity:0; visibility:hidden; z-index:1;
  transition:.3s all ease`, shown by `body.offcanvas-menu:before`.
- **Close paths:** the close glyph, a `document`-level `mouseup` outside the
  panel (ignoring clicks on the toggle), `Escape` (`keydown`), and a resize wider
  than **768 px**. Note the source's own mismatch: the desktop row disappears
  below **1200 px** (`cl-d-xl-*`) while the panel auto-closes above **768 px**.
  The recreation uses **one** threshold (1200 px) for both, and says so in the PR.

## Screenshot read-through (1200×972 JPEG)

A browser-chrome mock framing a **single flat dark slate surface** that fills the
whole frame — the `#5d5b6a` band. Along the top: a transparent header strip with
a **1 px translucent white rule** on its lower edge; at the left the wordmark
**"Brand."** (white, ≈24 px) with its full stop in **`#007bff`**; at the right a
row of small **uppercase near-white** links — `HOME`, `ABOUT US` with a caret,
`BLOG`, `CONTACT`, then **three small glyph-only socials** (facebook,
twitter, linkedin). Below the rule the frame is empty slate: no headline, no
cards, no photo, no footer. That emptiness is the design being replicated — the
deliverable is the navigation, and the band is its scrolling canvas.

## Fidelity gotchas

1. **The band is empty on purpose.** Do not "improve" it with a hero headline; the
   only content the recreation adds is the ten materialised anchor panels.
2. **Square corners.** The single `border-radius:50%` (mobile arrow) is the whole
   shape language; the sheet rounds nothing else.
3. **`min-width:210px` on dropdown rows** — the panel is as wide as its widest row,
   not a fixed 210 px box.
4. **The dropdown's 20 px slide** (`margin-top:20px → 0`) is part of the look;
   don't replace it with a pure fade.
5. **`#eff1f3` row hover vs `#f8f9fa` arrow hover** — two different near-greys, both
   deliberate.
6. **Stuck header must not shift** — the source re-measures and pins the width;
   reproduce the stability with a `position:sticky`/measured-width approach.
7. **Two breakpoints, one page** — row at 1200 px, panel auto-close at 768 px in
   the source; reconcile to 1200 px and document it.
8. **The socials are icons only** — label them (the source doesn't).
9. **No assets to copy**: no images exist in the source at all; the only
   "artwork" is text plus SVG paths, and the icon-font glyphs (`\e313`, `\e315`,
   `\f078`) must be replaced with `lucide-react` icons.
10. **Fonts**: three Open Sans weights, self-hosted as woff2 in the source —
    load them from Google Fonts instead and ship no font files.
