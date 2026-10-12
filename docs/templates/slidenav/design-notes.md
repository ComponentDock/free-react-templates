# Slidenav — design notes (section-by-section fidelity)

Source: ColorLib **"Website Menu 02"** — slug `website-menu-02`,
https://colorlib.com/wp/template/website-menu-02/. New name: **slidenav**
(apps/slidenav, `@free-react-templates/slidenav`).

Research date **2026-10-11**. Reference artifacts:
`/tmp/wm02/live.html` (the **live preview** HTML, 2,774 B), `/tmp/wm02/style.css`
(16,309 B, sha256 `b4086b7b407abd2fc35f6526d1ca36a87fa88c495ee9e22fd02390452958b146`),
`/tmp/wm02/snippet.js` (2,525 B, sha256
`71830be04d9193264d2dbb5facc3994ebd6288ed9078db92328d36de45e2aafc`),
`/tmp/wm02/wm02.zip` (230,044 B snippet archive, extracted to
`/tmp/wm02/x/website-menu-02/` → `index.html` 2,571 B, `css/style.css`,
`js/snippet.js`, `README.md` 1,264 B, `fonts/`), `/tmp/wm02/cl.html` (the ColorLib
template page, 108,855 B — source of the description / author / date /
download-size facts), `/tmp/wm02/catalog.js` (the preview host's 633,990 B catalog
index that maps the slug to its `theme/bootstrap/` preview) and `/tmp/wm02/wm02.jpg`
(the screenshot, 1200×972, 31,868 B).

## Preview status — where the live preview actually lives (read this first)

`https://preview.colorlib.com/theme/website-menu-02/` returns **HTTP 404**
(`Not Found`, 9 B). As with the whole *Website Menus* family, the slug-only theme
path does not resolve. The **working live preview** is

```
https://preview.colorlib.com/theme/bootstrap/website-menu-02/
```

→ **HTTP 200**, `text/html`, **2,774 B**, title `Website Menu #2`, verified
2026-10-11. It was found through the catalog index the preview host loads for its
own home page
(`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
633,990 B), whose entry for this slug is:

```json
{"name":"Website Menu V02","tag":"Website Menu Templates",
 "img":"https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-02-768x622.jpg",
 "url":"https://preview.colorlib.com/theme/bootstrap/website-menu-02/",
 "details":"https://colorlib.com/wp/template/website-menu-02/"}
```

Every sibling entry carries the same `theme/bootstrap/` prefix. The live page
loads exactly two assets — `css/style.css?v=05c76b1d` (**16,309 B**) and
`js/snippet.js?v=863a9219` (**2,525 B**) — and both are **sha256-identical** to the
same files in the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-02.zip` (HTTP 200,
230,044 B; ColorLib's page calls the download "225 KB (it was 2.3 MB)"). The
archive's `index.html` (2,571 B) and the live page are the **same document**: a
normalised diff shows only the preview host's own head injections (two `robots`
meta tags, a `cdnjs` `dns-prefetch`, `fetchpriority` on the stylesheet link, and
`?v=` cache-busters on both assets). So the live preview is the primary reference
and the archive is its un-versioned twin.

Archive contents: `index.html`, `css/style.css`, `js/snippet.js`, `README.md` and
`fonts/` with six **Open Sans** woff2 subsets (300/400/700 × latin/latin-ext) plus
`icomoon-subset.woff2` (408 B). There is **no `images/` directory** — the README's
file list mentions one, the zip has none — the markup contains **zero `<img>`**,
and the only artwork is the wordmark text plus **two inline SVGs** (the three-bar
menu glyph and the close cross). **No screenshot-only fallback was needed.**

## Live render cross-check (2026-10-11, 780×437 and 1280×800 viewports)

Opened in a browser and read back with `getComputedStyle`; everything below is
confirmed on real elements:

- `.hero` → **765 × 437 = the entire viewport**, `background-color:
  rgb(235, 77, 85)` = **`#eb4d55`**.
- `.site-navbar` → `position:absolute; top:0; width:765px; z-index:1999`,
  background `rgba(0,0,0,0)` (**transparent**), **`border-bottom:0px none`** — no
  hairline at all (this is a real difference from sibling menu 01); padding
  computes to **`16px`** at ≥992 px and **`48px 16px`** below 992 px.
- `.site-logo` → **`font-size:16px`** (the sheet's global `h1` rules never apply:
  this markup has **no heading element**); `.site-logo a` → `uppercase`,
  `rgb(255,255,255)`, `font-weight:700`, text `Brand`.
- `.site-menu.main-menu > li > a` → **`font-size:15px; padding:20px 0;
  margin:0 15px; color:rgba(255,255,255,.7)`**; the current item
  (`li.cl-active > a`) computes **`rgb(255,255,255)`**; link boxes are 62.5 px tall
  (= 15 px × 1.5 line-height + 40 px padding) at the top of the header.
- `::before` underline → `width:100%; height:1px; background:rgb(255,255,255);
  bottom:0`; **current item transform `matrix(1, 0, 0, 1, 0, 0)` (scale 1)**,
  every other item `matrix(0, 0, 0, 0, 0, 0)` (scale 0) — the sliding underline,
  verified live on the source.
- `body` → computed family **Open Sans**, 16 px, `color:rgb(33,37,41)`, height
  **874 px** (= `200vh`) with `scrollHeight` 874 px, so the page really scrolls.
- `.site-mobile-menu` → **300 px** wide, `position:fixed; right:0;
  padding-top:20px; background:rgb(255,255,255)`,
  `transform:matrix(1,0,0,1,330,0)` (= `translateX(110%)` of 300 px),
  `box-shadow:rgba(0,0,0,0.1) -10px 0px 20px -10px`,
  `transition:0.3s ease-in-out`, full viewport height; its
  `.site-mobile-menu-body` is **385 px** (= `calc(100vh - 52px)`) with
  `padding:0px 20px 150px`.
- Below 992 px: `.site-navigation` → `display:none`; the hamburger's wrapper
  `span.cl-d-inline-block.cl-d-lg-none` → visible. The cloned `.site-nav-wrap`
  rows measure **20 px / `padding-left:20px`**, the current row
  **`rgb(235,77,85)`** (`#eb4d55`) and the others **`rgb(33,37,41)`** (`#212529`).
- Hamburger glyph `.icon-menu.cl-h3.cl-text-white` → **28 px, white**;
  close glyph `.site-mobile-menu-close span` → **30 px**.
- Behaviour probed live: activating the toggle adds `offcanvas-menu` to `<body>`,
  sets the toggle's `aria-expanded="true"`, copies `cl-active` onto the toggle and
  onto the close glyph; `Escape` clears the body class again, as does a resize past
  the script's **768 px** threshold.

**Harness caveats (each cost a false alarm; neither is a source bug):**

1. The browser tab reports `document.hidden === true`, so real scroll/hover events
   do not fire and class-triggered style recalcs can return **stale** values —
   `getComputedStyle` kept reporting `translateX(330px)` after the panel's class
   was already on, and reported a hover-only `::before` as `transform:none`.
   Dispatch the event and re-read (or read the rule) before concluding the page is
   broken.
2. Raw `Input.dispatchMouseEvent` calls time out against the daemon (5 s), so
   `:hover` colours are verified from the sheet's unambiguous rules rather than by
   synthetic pointer movement.

## Source facts worth keeping

- Author **Rok Krivec** (`datePublished` 2021-01-27T20:21:38+00:00,
  `dateModified` **2026-09-25T10:42:06+00:00**); the template-details block on the
  page credits **Colorlib**, *Released September 2026*, licence *CC BY 3.0*.
- Page title: *"Website Menu V02 - Free Minimal Menu Template 2026 - Colorlib"*.
- ColorLib's own description: *"An easy to use free minimal menu template that you
  can quickly activate and embed into your website for superb navigability."*
- Rewrite note on the page: *"Updated September 2026: this snippet is now plain
  HTML and CSS plus a few lines of vanilla JavaScript: no jQuery, no Bootstrap
  files, no plugins. The download is 225 KB (it was 2.3 MB). Use it on its own, or
  drop it into a Bootstrap 4, 5 or 6 project and it looks the same."*
- The sheet is a **hand-rolled Bootstrap-4 grid look-alike** with a `cl-`
  namespace — **not** a Bootstrap build. The recreation uses Tailwind utilities and
  must not reuse the `cl-` names.

## Global tokens

- **Type:** effective family `"Open Sans", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — weights
  **300 / 400 / 700**. Body `1rem / 1.5`, `#212529`. The wordmark is **not** a
  heading here: `.site-logo{font-size:1rem}` with an uppercase 700 white anchor.
  Nav links **15 px**. Panel rows **20 px**. Close glyph 30 px, hamburger glyph
  28 px (`.cl-h3` = `1.75rem`). The sheet's global `h1{2.5rem}` / `h3{1.75rem}` /
  `font-weight:500` heading rules are **never used** by this markup.
- **Palette (whole sheet):** `#fff` (8×), `#eb4d55` (6×), `#212529` (2×),
  `#007bff` (2× — `a{color}` and `a.cl-text-primary`), `#0056b3` (2× —
  `a{color}` hover/focus and `a.cl-text-primary:hover`), `#6c757d` (1× —
  `.cl-nav-link.disabled`, unused), `#ced4da` (1× — close glyph hover),
  `#f8f9fa` (1× — **unused** arrow-toggle hover). That is the entire colour
  vocabulary: **one coral** does double duty as the band and as the accent, with
  white/near-white on top of it, `#212529` inside the white panel, and the sheet's
  blue reserved for link defaults. The visible header palette is therefore
  **coral + white + 70 %-white**, not blue.
- **Radii:** the sheet's only `border-radius` values are a normalize
  `button{border-radius:0}` and the **unused** `.arrow-collapse{50%}`.
  **Everything is square** — do not introduce pills or rounded cards.
- **Shadows used:** `-10px 0 20px -10px rgba(0,0,0,.1)` (off-canvas panel). Veil
  `rgba(0,0,0,.5)`. There is **no** header shadow and **no** sticky-state shadow.
- **Motion:** site-wide `a{transition:.3s all ease}`; the underline uses
  `transition:.3s transform ease`; the panel `.3s all ease-in-out`; the veil
  `.3s all ease`.

## Section 1 — `header.site-navbar` (transparent, over the band)

- `position:absolute; top:0; width:100%; margin-bottom:0; z-index:1999;
  padding:1rem`, i.e. it floats **on top of** the band so the coral shows through;
  **no** `border-bottom` (unlike menu 01's
  `1px solid rgba(255,255,255,.1)`).
- At `max-width:991.98px` the header's vertical padding grows to `3rem`
  (48 px) — reproduce that growth, it is what gives the mobile bar its airy look.
- Grid: `.cl-container > .cl-row.cl-align-items-center.cl-position-relative` with
  `cl-col-3` (logo) and `cl-col-9.cl-text-right` (toggle + nav).
- **Wordmark:** `div.site-logo > a[href].cl-font-weight-bold` with the text
  `Brand` — **no** `h1`, **no** accent span, **no** full stop, 16 px, uppercase,
  700, `#fff`. The recreation renders it as the page's single `h1` (a11y delta)
  with identical visual properties.
- **Row:** `nav.site-navigation.cl-text-right.cl-ml-auto.cl-d-none.cl-d-lg-block >
  ul.site-menu.main-menu.js-clone-nav.cl-ml-auto` — `.site-menu{margin:0;
  padding:0; margin-bottom:0}`, `> li{display:inline-block}`,
  `> li > a{margin-left:15px; margin-right:15px; padding:20px 0; font-size:15px;
  color:rgba(255,255,255,.7)!important; display:inline-block; position:relative}`,
  `> li > a:hover{color:#fff!important}`, `> li.cl-active > a{color:#fff!important}`.
  The `a.cl-nav-link` class also carries the sheet's `.cl-nav-link{padding:.5rem
  1rem}` but `.site-menu > li > a{padding:20px 0}` wins — the **effective** padding
  is `20px 0` with a 15 px horizontal margin, which is why the items sit ≈30 px
  apart. Items: **Home (current), Portfolio, About, Services, Blog, Contact** —
  six, flat, all `href="#"`.
- **Underline:** `.site-menu > li > a:before{content:""; width:100%;
  position:absolute; bottom:0; left:0; height:1px; transform:scale(0);
  transition:.3s transform ease; background:#fff}`; hover (and the current item)
  animate it to `scale(1)`. Note the link is `padding:20px 0`, so the bar sits at
  the link's own bottom edge, ≈20 px below the text — reproduce the geometry, it is
  what the screenshot shows.
- **Hamburger:** `span.cl-d-inline-block.cl-d-lg-none > a[href="#"].cl-text-primary
  .site-menu-toggle.js-menu-toggle.cl-py-5 > span.icon-menu.cl-h3.cl-text-white`
  with an inline three-bar SVG. The anchor's colour is the sheet's blue but its
  only rendered content is the **white** span, so **the blue never shows**; the
  `.cl-py-5` utility adds `padding:3rem 0` (48 px), making the control a large
  tap target. The markup's `<a>` has **no accessible name** and **no**
  `aria-controls`; the script adds `aria-expanded`. The recreation uses a real
  labelled `button`.

## Section 2 — `div.hero` (the band)

Literally `<div class="hero"></div>`: `.hero{height:100vh; width:100%;
background:#eb4d55}`. No heading, no image, no overlay, no pattern. It exists so
the page can scroll; `body{height:200vh}` forces that scroll length.

**Delta (deliberate):** all six of the source's menu links are `href="#"` — the
page declares **no** anchor target at all. The recreation materialises each of the
six labels (home, portfolio, about, services, blog, contact) as a labelled
own-copy panel **inside this same coral band**, so band count and order stay 1:1,
each panel gets a `scroll-margin-top` ≥ the header height, and the app ships
**zero** dead links. Panels sit on the flat coral in white/near-white with the
sheet's own **`#007bff`** as accent; imagery, if used, comes from
`https://picsum.photos/seed/slidenav-<n>/<w>/<h>`.

## Chrome — the off-canvas mobile menu

`div.site-mobile-menu.site-navbar-target` is a sibling of the header:
`width:300px; position:fixed; right:0; z-index:2000; padding-top:20px;
background:#fff; height:calc(100vh); transform:translateX(110%);
box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transition:.3s all ease-in-out`,
sliding to `translateX(0)` under `body.offcanvas-menu`.

- **Header strip:** `.site-mobile-menu-header{padding-left:20px; padding-right:20px}`
  with a right-floated `.site-mobile-menu-close` (`margin-top:8px`, wrapper
  `.cl-mt-3` = `margin-top:1rem`) whose `span` is a **30 px** inline close SVG
  (hover `#ced4da`).
- **Body:** `.site-mobile-menu-body{overflow-y:scroll;
  -webkit-overflow-scrolling:touch; position:relative; padding:0 20px 20px;
  height:calc(100vh - 52px); padding-bottom:150px}` — the extra bottom padding
  matters on iOS.
- **The tree is cloned, not authored:** `nav.cloneNode(true)` with the class
  swapped to `.site-nav-wrap`, appended to the body. In React, render the same nav
  tree twice (desktop row + panel) instead of cloning DOM.
- **Rows:** `.site-nav-wrap{padding:0; margin:0; list-style:none}`,
  `a{padding:10px 20px; display:block; color:#212529}` (hover `#eb4d55`),
  `> li{display:block; position:relative; float:left; width:100%}`,
  `> li > a{font-size:20px; padding-left:20px}`, and
  `li.cl-active > a / li .cl-nav-link.cl-active{color:#eb4d55}`.
- **Present-but-unused machinery — do not build it:** the sheet still styles
  `.has-children` (caret `content:"\e313"` from the `icomoon` font,
  `padding-right:20px`), the mobile `.arrow-collapse` toggle (`36×36`,
  `border-radius:50%`, `#f8f9fa` hover, a 12 px `\f078` chevron rotating 180°
  when `.cl-collapsed`) and `.cl-collapse:not(.cl-show){display:none}`, and the
  script still wires toggles for any `.has-children` rows. Menu 02's markup has
  **no** `.has-children` row, so none of this renders — the recreation ships a flat
  six-item list with no submenu mechanism.
- **Veil:** `body:before{content:""; position:absolute; top/left/right/bottom:0;
  background:rgba(0,0,0,.5); opacity:0; visibility:hidden; z-index:1;
  transition:.3s all ease}`, shown by `body.offcanvas-menu:before`. The recreation
  uses an explicit veil element (so it can be clicked and labelled) with the same
  colour, stacking and timing.
- **Close paths:** the close glyph, a `document`-level `mouseup` outside the panel
  (ignoring clicks on the toggle), `Escape` (`keydown`), and a resize wider than
  **768 px**. The source's own breakpoints disagree — the row disappears below
  **992 px** (`cl-d-lg-*`) while the panel auto-closes above **768 px**. The
  recreation uses **one** threshold (**992 px**) for both and says so in the PR.

## Screenshot read-through (1200×972 JPEG)

A browser-chrome mock framing a **single flat coral surface** filling the whole
frame (the `#eb4d55` band). Along the top: at the left the wordmark **"BRAND"** —
white, uppercase, bold, ≈16 px; at the right a row of six small near-white links —
`Home` with a **thin white underline** beneath it, then `Portfolio`, `About`,
`Services`, `Blog`, `Contact`. There is **no** header background, **no** hairline
under the header, **no** headline, **no** cards, **no** photo and **no** footer.
Below the header rule-free edge the frame is empty coral: that emptiness is the
design being replicated — the deliverable is the navigation and its underline, and
the band is the scrolling canvas.

## Fidelity gotchas

1. **Coral is both the band and the accent.** There is no separate brand colour
   here: `#eb4d55` paints the band, the active-item rule, the hover rule and the
   mobile current row. Do not invent a second accent for the band's panels beyond
   the sheet's own `#007bff` (used as the accent on the coral panels).
2. **No header hairline, no header background, no sticky bar.** The bar is
   absolutely positioned and scrolls away with the page. Adding a pinned white bar
   (as sibling menu 01 does) would be a fidelity break.
3. **The underline lives on the link, not the header.** `padding:20px 0` on a
   15 px link puts the 1 px bar ≈20 px under the text; it scales in from the
   centre (`transform:scale(0)` → `scale(1)`), it does not fade or slide.
4. **The current item's underline is on by default** (`li.cl-active` → scale 1).
   The current-page marker must be visible with no hover.
5. **The hamburger's blue is a mirage:** `.cl-text-primary` on the anchor is
   overridden visually by the white `.cl-text-white` span. Keep the glyph white;
   put the affordance colour nowhere else.
6. **Square corners everywhere** — the sheet's only radii are a normalize
   `0` and the unused toggle's `50%`.
7. **Two breakpoints, one page** — row at 992 px, panel auto-close at 768 px in the
   source; reconcile to 992 px and document it.
8. **Do not build the family's dropdown/arrow machinery.** It exists in the sheet
   for the sibling variants; menu 02's markup never uses it, and shipping it would
   add dead UI.
9. **The band is empty on purpose.** Do not "improve" it with a hero headline; the
   only content the recreation adds are the six materialised anchor panels.
10. **No assets to copy:** there are literally no images in the source; the only
    artwork is text plus two inline SVG paths, which the recreation replaces with
    `lucide-react` (`Menu`, `X`).
11. **Fonts:** six self-hosted Open Sans woff2 subsets in the source — load Open
    Sans 300/400/700 from Google Fonts instead and ship no font files.
12. **The page has no heading in the source.** The recreation makes the wordmark
    the single `h1` (same 16 px uppercase 700 white look) — a documented a11y
    delta, not a visual change.
