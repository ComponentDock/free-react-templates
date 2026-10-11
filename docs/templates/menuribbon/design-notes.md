# Menuribbon — design notes (section-by-section fidelity)

Source: ColorLib **"Website Menu 04"** — slug `website-menu-04`,
https://colorlib.com/wp/template/website-menu-04/. New name: **menuribbon**
(apps/menuribbon, `@free-react-templates/menuribbon`).

Research date **2026-10-11**. Reference artifacts:
`/tmp/wm04/page.html` (the **live preview** HTML, 8,436 B),
`/tmp/wm04/zip/website-menu-04/index.html` (the archive's un-versioned copy,
8,233 B), `/tmp/wm04/zip/website-menu-04/css/style.css` (19,345 B, sha256
`4d71179419d8846f68da7136adb271246f04f681b27058a4920759ab878c6a87`),
`/tmp/wm04/zip/website-menu-04/js/snippet.js` (3,537 B, sha256
`957ef9cb7fad36f4709efbb8ea99c0b0415560161d79ba978cb906a2e3e56cff`),
`/tmp/wm04/wm04.zip` (710,718 B snippet archive, sha256
`a8759335a2c8d48f0de128f3a41fd7f239ef5e6fcfe8b93e6f2feec6bfe0c815`),
`/tmp/wm04/cat.js` (the preview host's 633,990 B catalog index that maps the slug
to its `theme/bootstrap/` preview), `/tmp/wm04/shot.jpg` (the screenshot, AVIF,
57,007 B, 1200 × 972), `/tmp/wm04/shot.png` (its PNG decode) and
`/tmp/wm04/zip/website-menu-04/images/hero_1.jpg` (the 481,836 B / 1900 × 1710
hero photo the live page serves).

## Preview status — where the live preview actually lives (read this first)

`https://preview.colorlib.com/theme/website-menu-04/` returns **HTTP 404**
(`Not Found`, 9 B). As with the whole _Website Menus_ family, the slug-only theme
path does not resolve. The **working live preview** is

```
https://preview.colorlib.com/theme/bootstrap/website-menu-04/
```

→ **HTTP 200**, `text/html`, **8,436 B**, title `Website Menu #4`, verified
2026-10-11. It was found through the catalog index the preview host loads for its
own home page
(`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
633,990 B), whose entry for this slug is:

```json
{
  "name": "Website Menu V04",
  "tag": "Website Menu Templates",
  "img": "https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-04-768x622.jpg",
  "url": "https://preview.colorlib.com/theme/bootstrap/website-menu-04/",
  "details": "https://colorlib.com/wp/template/website-menu-04/"
}
```

Every sibling entry carries the same `theme/bootstrap/` prefix. The live page
loads exactly two assets — `css/style.css?v=a1db509a` (**19,345 B**) and
`js/snippet.js?v=0d158312` (**3,537 B**) — and both are **sha256-identical** to the
same files in the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-04.zip` (HTTP 200,
710,718 B). The archive's `index.html` (8,233 B) and the live page are the **same
document**: a normalised diff shows only the preview host's own head injections
(a `cdnjs` `dns-prefetch`, `fetchpriority` on the stylesheet link, and `?v=`
cache-busters on both assets). So the live preview is the primary reference and
the archive is its un-versioned twin.

Archive contents: `index.html`, `css/style.css`, `js/snippet.js`, `README.md`
(1,264 B), `images/hero_1.jpg` (**481,836 B**, **1900 × 1710**, sha256
`b6c49e856da5ff1422bc5ba461a632ab136181318c5b7ade8fd2b8d36bf7768d` — **byte-identical
to the `website-menu-03` snippet's hero**) and `fonts/` with six **Open Sans**
woff2 subsets (300/400/700 × latin/latin-ext, 30,624/42,964 B each) plus
`icomoon-subset.woff2` (424 B). **No screenshot-only fallback was needed.**

## Document structure as rendered (live preview, in order)

```
body (height:200vh)
├── body:before            → rgba(0,0,0,.5) veil, opacity 0 / visibility hidden
├── div.site-mobile-menu   → 300px off-canvas panel (translateX(110%), off-screen)
│   ├── .site-mobile-menu-header  → .site-mobile-menu-close > span.icon-close2
│   │                               (inline SVG cross, 30px)
│   └── .site-mobile-menu-body    → EMPTY in the markup; snippet.js clones
│                                   ul.site-menu in here as .site-nav-wrap
├── div.top-bar            → #eee utility bar, padding:.5rem 0
│   └── .cl-container > .cl-row > .cl-col-12
│       ├── a  → span.icon-envelope-open-o + span "info@yourdomain.com"
│       ├── span.cl-mx-md-2 (inline-block spacer)
│       ├── a  → span.icon-phone + span "1+ (234) 5678 9101"
│       └── .cl-float-right
│           ├── a → span.icon-twitter    + span "Twitter"
│           └── a → span.icon-facebook   + span "Facebook"
├── header.site-navbar.js-sticky-header
│   (snippet.js wraps it in div.sticky-wrapper)
│   └── .cl-container > .cl-row.cl-align-items-center.cl-position-relative
│       ├── .site-logo  → a.cl-text-black > span.cl-text-primary "Brand"
│       │                  (absolute, 2rem/900/uppercase, #007bff)
│       ├── .cl-col-12
│       │   └── nav.site-navigation.cl-text-right.cl-ml-auto
│       │       └── ul.site-menu.main-menu.js-clone-nav.cl-ml-auto
│       │           .cl-d-none.cl-d-lg-block   (7 items — see below)
│       └── .toggle-button.cl-d-inline-block.cl-d-lg-none
│           → a.site-menu-toggle.cl-py-5.js-menu-toggle
│             > span.icon-menu.cl-h3 (inline SVG three-bar glyph)
└── div.hero               → style="background-image:url('images/hero_1.jpg')"
                             (100vh cover band, NO text of any kind)
```

The page has **nothing else** — no footer, no content section, no forms. Every
anchor except the wordmark is a dead/in-page link (`#…`, or `index.html`).

> Markup quirk to reproduce equivalently, not literally: the logo
> `a.cl-text-black > span.cl-text-primary "Brand"` is **unclosed** in the source
> and the top-bar/logo markup sits **inside** `header` in the live page, but the
> browser's parse and the `top-bar` being a sibling `div` mean the rendered order
> is as drawn above (top bar, then header). The recreation simply renders a `TopBar`
> then a `Header`.

### The `ul.site-menu` item list (verbatim shape)

```
li > a[href=#home-section]        "Home"
li > a[href=#services-section]    "Services"
li.has-children > a[href=#about-section] "About Us"
   └── ul.cl-dropdown.arrow-top
        ├── li > a[#team-section]        "Team"
        ├── li > a[#pricing-section]     "Pricing"
        ├── li > a[#faq-section]         "FAQ"
        └── li.has-children > a["#"]     "More Links"
             └── ul.cl-dropdown  (flyout, left:100%)
                  ├── li > a["#"] "Menu One"
                  ├── li > a["#"] "Menu Two"
                  └── li > a["#"] "Menu Three"
li > a[href=#why-us-section]      "Why Us"
li > a[href=#testimonials-section]"Testimonials"
li > a[href=#blog-section]        "Blog"
li > a[href=#contact-section]     "Contact"
```

That is the **only** `has-children` in the bar, and it carries a **two-level**
tree (a dropdown containing another dropdown). The recreation may rename the
labels/rows freely (paraphrase is fine; keep the _kind_ of content: seven top
items, one two-level menu, six plain items) but must keep the **same depth and
the same row count**.

## Section 1 — off-canvas panel (`.site-mobile-menu`)

- 300 px wide, `position:fixed; right:0`, `z-index:2000`, `background:#fff`,
  `height:100vh`, `padding-top:20px` (a **top-right** panel sliding in from the
  right edge).
- Closed state is `transform:translateX(110%)`; open state `translateX(0)` is
  driven by `body.offcanvas-menu`. Transition `.3s all ease-in-out`. Shadow
  `-10px 0 20px -10px rgba(0,0,0,.1)`.
- Header strip: `padding-left/right:20px`, close control floated right with
  `margin-top:8px`; the glyph is `30px` with `padding-left:10px` and
  `transition:.3s all ease`, hover `color:#ced4da`.
- Body: `overflow-y:scroll`, `padding:0 20px 20px`, `height:calc(100vh - 52px)`,
  `padding-bottom:150px`. The **markup body is empty** — `snippet.js` clones
  `ul.js-clone-nav` into it at runtime and re-classes it `site-nav-wrap`.
  → In React, render the panel from the **same item model** as the desktop row;
  do not imitate the DOM cloning.
- Rows: `a { padding:10px 20px; display:block; color:#212529 }`,
  hover `#007bff`, `li .cl-nav-link.cl-active` → `#007bff`. Level-1 anchors get
  `padding-left:20px; font-size:20px`; level-2 `padding-left:40px; font-size:16px`;
  level-3 `padding-left:60px; font-size:16px`.
- Expanders: `snippet.js` inserts a `span.arrow-collapse.cl-collapsed` (36 × 36,
  `border-radius:50%`, absolutely positioned `right:0; top:10px`, `cursor:pointer`,
  hover `background:#f8f9fa`, `aria-label="Show submenu"`) before every
  `has-children` row's first child, gives the sub-`ul` a `cl-collapse` class, and
  toggles `cl-show` + `cl-active` + `aria-expanded` on click. The chevron is
  `12px` `content:"\f078"` rotated `-180deg` normally and `0deg` when collapsed
  (points **up** when collapsed).
- The veil is **`body:before`** — `rgba(0,0,0,.5)`, `z-index:1`, `opacity:0;
visibility:hidden` → visible under `body.offcanvas-menu`, `.3s all ease`. The
  panel at `z-index:2000` and the header at `1999` both sit above it.
- Close paths in `snippet.js`, all four of which the recreation must keep:
  1. any `.js-menu-toggle` click toggles (and the close glyph is one of them),
  2. `document mouseup` outside the panel **and** not on a toggle → close,
  3. `keydown Escape` → close,
  4. `resize` when `window.innerWidth > 768` → close.
     `mobileClose()` also strips `cl-active` from every toggle and resets
     `aria-expanded="false"`. Note the asymmetry: the desktop row disappears at
     **992 px** but the resize-close threshold is **768 px**.

## Section 2 — utility top bar (`.top-bar`)

- `padding:.5rem 0; background:#eee`; links `color:#666666` (no underline since
  `a, a:hover { text-decoration:none !important }`).
- Left group: an envelope-glyph link `info@yourdomain.com` and a phone-glyph link
  `1+ (234) 5678 9101` (single spaces between the icon and the text). Right group:
  `.cl-float-right` holding a Twitter link and a Facebook link.
- Each icon is an inline `span` with an inline SVG (`icon-envelope-open-o`,
  `icon-phone`, `icon-twitter`, `icon-facebook`) plus `cl-mr-2` (8 px) and its label
  `span.cl-d-none cl-d-md-inline-block` → **labels appear only at ≥ 768 px**; below
  that only the icons show (so the links need `aria-label`s in the recreation).
- There is a plain `span.cl-mx-md-2` spacer (`margin:0 .5rem` at ≥768 px) between
  the email and phone links and between the two social links.

## Section 3 — header + navigation row (`.site-navbar`)

- `.site-navbar`: `position:relative; width:100%; padding:1rem; margin-bottom:0;
z-index:1999`. Below 992 px it gets `padding-top/bottom:3rem`. **Sticky is added
  by JS**, not by the sheet's base rule (see Section 5).
- Container is a Bootstrap-shaped grid: `.cl-container` `15px` gutters with
  max-widths **540 / 720 / 960 / 1140** at **576 / 768 / 992 / 1200**; `.cl-row` is
  a `-15px` flex row with `align-items:center; position:relative`.
- Wordmark: `.site-logo` is `position:absolute; font-size:2rem;
text-transform:uppercase; font-weight:900; line-height:0; z-index:3`, link
  `a.cl-text-black` (`#000`) with an inner `span.cl-text-primary` → the visible
  text is **`#007bff`**. Text **"Brand"**. (Below 992 px it becomes
  `position:relative; float:left`.) Reproduce as a 32 px blue uppercase link; use a
  new, non-ColorLib mark.
- `nav.site-navigation` is `text-align:right` with `cl-ml-auto`, and
  `ul.site-menu.cl-ml-auto.cl-d-none.cl-d-lg-block` → the desktop row exists **only
  at ≥ 992 px**. The hamburger column carries `cl-d-inline-block cl-d-lg-none`
  (absolute `right:0` via `.site-navbar .toggle-button`) → **only below 992 px**.
  **The breakpoint is 992 px here** (unlike the sibling 03's 1200 px).
- Labels: `> li { display:inline-block }`, `> li > a { margin-left:15px;
margin-right:15px; padding:20px 0; color:#000 !important; display:inline-block;
text-decoration:none !important }`, `> li > a:hover { color:#007bff }`. `.cl-active`
  → `color:#007bff !important`. No pill, no background, no border — just black text
  that turns accent.
- `has-children > a { position:relative; padding-right:20px }` plus an absolutely
  positioned `:before` chevron (`16px`, `right:0`, `top:50%; translateY(-50%)`,
  `font-family:'icomoon'`, `content:"\e313"` = chevron-down). Use a `lucide-react`
  `ChevronDown` instead of the glyph.
- The toggle `a.site-menu-toggle` is `cl-py-5` (3 rem top/bottom padding) and
  `cl-text-black`, with `span.icon-menu.cl-h3` (a `1.75rem` inline SVG three-bar
  glyph).

## Section 4 — dropdown panel

- `.has-children .cl-dropdown`: `visibility:hidden; opacity:0; position:absolute;
top:100%; text-align:left; border-top:2px solid #007bff;
box-shadow:0 2px 10px -2px rgba(0,0,0,.1); padding:0; margin-top:20px;
background:#fff; transition:.2s 0s`.
- Open state (on `li:hover`, `:focus`, `:active`):
  `transition-delay:0s; margin-top:0; visibility:visible; opacity:1`. The `20px →
0` margin animates a short downward glide. `has-children:hover/:focus/:active > a`
  → `color:#007bff` and `cursor:pointer`.
- **`.arrow-top:before` is `display:none`** here — unlike the sibling 03, the panel
  has **no upward triangle**; its only chrome is the `2px #007bff` top border, the
  shadow and the flush white body. (The sheet still carries the border-colour
  rules for a triangle, but the `display:none` rule wins — reproduce the **no
  triangle** result.)
- Rows: `> li { list-style:none; padding:0; margin:0; min-width:200px }` and
  `> li > a { padding:9px 20px; display:block; text-transform:none;
letter-spacing:normal; color:#000 !important }`; hover →
  `background:#f8f9fa; color:#ced4da`; `a.cl-active` → `color:#007bff !important;
background:#f8f9fa`.
- Nested flyout: the inner `has-children > .cl-dropdown / > ul` is
  `left:100%; top:0` (opens to the right, top-aligned); its parent row gets an
  `:before` chevron (`right:20px`, icomoon `"\e315"` = chevron-right) and the same
  `#f8f9fa`/`#ced4da` hover.

## Section 5 — sticky header behaviour (`.sticky-wrapper` / `.is-sticky`)

- `js/snippet.js` wraps every `.js-sticky-header` in a `div.sticky-wrapper`
  (`position:relative; z-index:100; width:100%`), measures the wrapper height, and
  on `scroll`/`resize` sets `.is-sticky` once `window.scrollY` passes the wrapper's
  offset. When stuck it sets the header to `position:fixed; top:0`, pins its width
  to the wrapper width and adds `.is-sticky`; when unstuck it clears those inline
  styles.
- `is-sticky` styling: `.sticky-wrapper.is-sticky .site-navbar { background:#fff;
box-shadow:4px 0 20px -5px rgba(0,0,0,.2) }`, the wordmark link → `#007bff`, and
  the row links → `#000` with the active one `#007bff`.
- Note the sheet also carries an odd non-stuck rule (`.sticky-wrapper .site-navbar
{ background:#fff }` + `.sticky-wrapper .site-navbar .site-logo a { color:#fff }`
  → a *white* logo on the *white* bar until stuck). That is a source defect; the
  recreation keeps the wordmark **`#007bff`** at all times (the header is white
  either way), which matches what the screenshot actually shows.

## Section 6 — hero band

- `div.hero { height:100vh; width:100%; background-size:cover;
background-position:center center; background-repeat:no-repeat }` with an inline
  `background-image:url('images/hero_1.jpg')`.
- The band is **completely empty** — no headline, no subtext, no CTA, no overlay
  scrim. The source photo is a **1900 × 1710** Monument Valley landscape. Use a
  placeholder instead: `https://picsum.photos/seed/menuribbon-hero/1900/1710`
  (deterministic per template). (Its bytes are identical to the sibling 03 hero.)

## Visual design (from the TEMPLATES.md screenshot)

`website-menu-04.jpg` (1200 × 972, AVIF; decoded to `/tmp/wm04/shot.png`) is a
browser-chrome mock with **three visible bands**: (1) a **light-grey utility bar**
(`#eee`) reading `info@yourdomain.com` and `1+ (234) 5678 9101` at the left, and
`Twitter` / `Facebook` at the right — **no icons visible in the mock, labels shown**
(so the mock is at ≥768 px), (2) a **white header** with a **blue uppercase
`BRAND`** wordmark at the left and `Home · Services · About Us · Why Us ·
Testimonials · Blog · Contact` in **black** at the right (no pills, no active
highlight visible), and (3) a frame-filling **desert** photograph — three red rock
buttes against a pale blue→sand gradient sky with red-tinted ground. Nothing else
is visible: no hero copy, no footer, no dropdown, no off-canvas panel, no sticky
shadow. This confirms (a) the grey top bar above a white header, (b) the blue
uppercase wordmark, (c) the bare black right-aligned row, and (d) the "photo band
under a white header" composition. Open dropdown, off-canvas panel, sticky and
hover states were reconstructed from `css/style.css` + `js/snippet.js`.

## Fidelity deltas the implementer must keep (and the ones that are improvements)

**Keep 1:1** — section order (panel → top bar → header → hero); the `#eee` utility
bar with left contacts and right socials and labels hidden below 768 px; the blue
uppercase `2rem`/`900` wordmark; the bare `#000` right-aligned row that turns
`#007bff`; the **992 px** desktop breakpoint (vs 1200 px in the sibling); the
dropdown's `2px #007bff` top border + shadow + `20px → 0` glide and **no triangle**;
`min-width:200px` rows with `#f8f9fa`/`#ced4da` hover; the nested right-hand
flyout; the sticky flip to `fixed`/white/`4px 0 20px -5px rgba(0,0,0,.2)` with the
wordmark turning `#007bff`; the 300 px right-hand off-canvas panel with the
`rgba(0,0,0,.5)` veil; the panel row scale (20 / 16 / 16 px with 20 / 40 / 60 px
indents); round 36 × 36 sub-row expanders; the four close paths;
`body{height:200vh}` scroll-away behaviour; the empty `100vh` hero.

**Deliberate improvements (document them in the PR)** — real `<button>`s for the
toggle, close glyph, expanders and dropdown triggers; `aria-expanded` /
`aria-controls` / `aria-haspopup`; `aria-label`s on the icon-only top-bar links and
the hamburger; a visible focus ring (the source has none); `Escape` closing the
dropdown and returning focus; a document scroll lock while the panel is open; an
`aria-hidden` veil that is not tabbable; rendering the off-canvas rows from the
same item model instead of cloning the DOM; a React `scroll`/`resize` sticky hook
instead of jQuery-style wrapping; keeping the wordmark `#007bff` rather than the
source's white-on-white non-stuck defect; a short footer line linking Component
Dock at the very bottom of the 200vh page so the scroll target is not empty.

**Never copy** — the `cl-` class namespace, the `icomoon` codepoints (`\e313`,
`\e315`, `\f078`), the six inline SVG icon paths, the self-hosted Open Sans /
icomoon woff2 files, `hero_1.jpg`, the "Brand" wordmark string, the ColorLib
`README.md` text, or any `colorlib.com` URL inside `apps/menuribbon/`.
