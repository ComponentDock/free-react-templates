# Navpill — design notes (section-by-section fidelity)

Source: ColorLib **"Website Menu 03"** — slug `website-menu-03`,
https://colorlib.com/wp/template/website-menu-03/. New name: **navpill**
(apps/navpill, `@free-react-templates/navpill`).

Research date **2026-10-11**. Reference artifacts:
`/tmp/wm03/live.html` (the **live preview** HTML, 3,539 B), `/tmp/wm03/style.css`
(18,746 B, sha256 `7aaad0dc4ce3b8411236b053436519c1f48dd7d9316d82b76d29ddded3caa75c`),
`/tmp/wm03/snippet.js` (2,525 B, sha256
`d4a75686662dae0521594784211cbc9cd0c1c75a43b6cc2c1b893810c9790217`),
`/tmp/wm03/wm03.zip` (708,400 B snippet archive, sha256
`f4209bffc732e475235fb50846bed7cfc85ec1c153b575f8ba3fbfb2abf7d5f8`),
`/tmp/wm03/catalog.js` (the preview host's 633,990 B catalog index that maps the
slug to its `theme/bootstrap/` preview), `/tmp/wm03/wm03.jpg` (the screenshot,
AVIF, 71,239 B, 1200 × 972), `/tmp/wm03/screenshot.png` (its PNG decode) and
`/tmp/wm03/hero_1.jpg` (the 481,836 B / 1900 × 1710 hero photo the live page
serves).

## Preview status — where the live preview actually lives (read this first)

`https://preview.colorlib.com/theme/website-menu-03/` returns **HTTP 404**
(`Not Found`, 9 B). As with the whole _Website Menus_ family, the slug-only theme
path does not resolve. The **working live preview** is

```
https://preview.colorlib.com/theme/bootstrap/website-menu-03/
```

→ **HTTP 200**, `text/html`, **3,539 B**, title `Website Menu #3`, verified
2026-10-11. It was found through the catalog index the preview host loads for its
own home page
(`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
633,990 B), whose entry for this slug is:

```json
{
  "name": "Website Menu V03",
  "tag": "Website Menu Templates",
  "img": "https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-03-768x622.jpg",
  "url": "https://preview.colorlib.com/theme/bootstrap/website-menu-03/",
  "details": "https://colorlib.com/wp/template/website-menu-03/"
}
```

Every sibling entry carries the same `theme/bootstrap/` prefix. The live page
loads exactly two assets — `css/style.css?v=0e95d7fb` (**18,746 B**) and
`js/snippet.js?v=b390e403` (**2,525 B**) — and both are **sha256-identical** to the
same files in the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-03.zip` (HTTP 200,
708,400 B). The archive's `index.html` (3,336 B) and the live page are the **same
document**: a normalised diff shows only the preview host's own head injections
(two `robots` meta tags, a `cdnjs` `dns-prefetch`, `fetchpriority` on the
stylesheet link, and `?v=` cache-busters on both assets). So the live preview is
the primary reference and the archive is its un-versioned twin.

Archive contents: `index.html`, `css/style.css`, `js/snippet.js`, `README.md`
(1,264 B), `images/hero_1.jpg` (**481,836 B**, **1900 × 1710**, sha256
`b6c49e856da5ff1422bc5ba461a632ab136181318c5b7ade8fd2b8d36bf7768d` — byte-identical
to the live `.../website-menu-03/images/hero_1.jpg`) and `fonts/` with six
**Open Sans** woff2 subsets (300/400/700 × latin/latin-ext, 30,624/42,964 B each)
plus `icomoon-subset.woff2` (424 B). **No screenshot-only fallback was needed.**

## Document structure as rendered (live preview, in order)

```
body (height:200vh)
├── body:before            → rgba(0,0,0,.5) veil, opacity 0 / visibility hidden
├── div.site-mobile-menu   → 300px off-canvas panel (translateX(110%), off-screen)
│   ├── .site-mobile-menu-header  → .site-mobile-menu-close > span.icon-close2
│   │                               (inline SVG cross, 30px)
│   └── .site-mobile-menu-body    → EMPTY in the markup; snippet.js clones
│                                   ul.site-menu in here as .site-nav-wrap
├── header.site-navbar     → absolute; top:2rem; z-index:1999; transparent
│   └── .cl-container > .cl-row.cl-align-items-center
│       ├── .cl-col-11.cl-col-xl-2   → h1.site-logo > a.cl-text-white "Brand"
│       ├── .cl-col-12.cl-col-md-10.cl-d-none.cl-d-xl-block
│       │   └── nav.site-navigation.cl-text-right
│       │       └── ul.site-menu.js-clone-nav  (6 items — see below)
│       └── .cl-d-inline-block.cl-d-xl-none      → a.site-menu-toggle
│                                                  (inline SVG three-bar glyph)
└── div.hero               → style="background-image:url('images/hero_1.jpg')"
                             (100vh cover band, NO text of any kind)
```

The page has **nothing else** — no footer, no content section, no socials, no
forms. Every anchor except the current one is a dead link (`#`, or a sibling
`.html` file that does not exist in the snippet).

### The `ul.site-menu` item list (verbatim shape)

```
li.cl-active > a[href=index.html] > span "Home"
li.has-children > a[href=about.html] > span "Dropdown"
   └── ul.cl-dropdown.arrow-top
        ├── li > a "#" "Menu One"
        ├── li > a "#" "Menu Two"
        ├── li > a "#" "Menu Three"
        └── li.has-children > a "#" "Dropdown"
             └── ul.cl-dropdown  (flyout, left:100%)
                  ├── li > a "#" "Menu One"
                  ├── li > a "#" "Menu Two"
                  ├── li > a "#" "Menu Three"
                  └── li > a "#" "Menu Four"
li > a[href=listings.html] > span "Listings"
li > a[href=about.html]    > span "About"
li > a[href=blog.html]     > span "Blog"
li > a[href=contact.html]  > span "Contact"
```

That is the **only** `has-children` in the bar, and it carries a **two-level**
tree (a dropdown containing another dropdown). The recreation may rename the
labels/rows freely (paraphrase is fine; keep the _kind_ of content: a current
item, one two-level menu, four plain items) but must keep the **same depth and
the same row count**.

## Section 1 — off-canvas panel (`.site-mobile-menu`)

- 300 px wide, `position:fixed; right:0`, `z-index:2000`, `background:#fff`,
  `height:100vh`, `padding-top:20px` (note: **top-right** panel, sliding in from
  the right edge — not bottom/side-drawer).
- Closed state is `transform:translateX(110%)` (fully off-screen plus margin);
  open state `translateX(0)` is driven by `body.offcanvas-menu`. Transition
  `.3s all ease-in-out`. Shadow `-10px 0 20px -10px rgba(0,0,0,.1)`.
- Header strip: `padding-left/right:20px`, close control floated right with
  `margin-top:8px`; the glyph is `30px` with `padding-left:10px` and
  `transition:.3s all ease`, hover `color:#f8f9fa` (i.e. it nearly vanishes —
  reproduce the hover state, but keep a visible focus ring).
- Body: `overflow-y:scroll`, `padding:0 20px 20px`, `height:calc(100vh - 52px)`,
  `padding-bottom:150px` (a deliberate bottom spacer so the last row can clear
  the viewport edge). The **markup body is empty** — `snippet.js` clones
  `ul.js-clone-nav` into it at runtime and re-classes it `site-nav-wrap`.
  → In React, render the panel from the **same item model** as the desktop row;
  do not imitate the DOM cloning.
- Rows: `a { padding:10px 20px; display:block; color:#212529 }`,
  hover `#007bff`, `li.cl-active > a` → `#007bff`. Level-1 anchors get
  `padding-left:20px; font-size:20px`; level-2 `padding-left:40px; font-size:16px`;
  level-3 `padding-left:60px; font-size:16px`.
- Expanders: `snippet.js` inserts a `span.arrow-collapse.cl-collapsed` (36 × 36,
  `border-radius:50%`, absolutely positioned `right:0; top:10px`, `cursor:pointer`,
  hover `background:#f8f9fa`) before every `has-children` row's first child, gives
  the sub-`ul` a `cl-collapse` class, and toggles `cl-show` + `aria-expanded` on
  click. The chevron is `12px` `content:"\f078"` rotated `-180deg` normally and
  `0deg` when collapsed (i.e. it points **up** when collapsed).
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
     **1200 px** but the resize-close threshold is **768 px**.

## Section 2 — header + navigation row

- `.site-navbar`: `position:absolute; top:2rem; width:100%; z-index:1999;
margin-bottom:0`. **No `position:fixed`, no sticky variant, no scroll handler** —
  it scrolls away with the hero. `body{height:200vh}` exists only so that there is
  something to scroll.
- Container is a Bootstrap-shaped grid: `.cl-container` `15px` gutters with
  max-widths **540 / 720 / 960 / 1140** at **576 / 768 / 992 / 1200**; `.cl-row`
  is a `-15px` flex row; the logo column is `cl-col-11` (91.67 %, dropping to
  `cl-col-xl-2` = 16.67 % at ≥1200 px) and the nav column is
  `cl-col-12.cl-col-md-10` (100 %, 83.33 % at ≥768 px).
- Wordmark: `h1.site-logo` at `font-size:24px`, link `a.cl-text-white`
  (`color:#fff !important`), text **"Brand"** (24 px; the base `h1` would be
  2.5 rem / 500). Reproduce as a 24 px white link; use a new, non-ColorLib mark.
- Visibility: the nav column carries `cl-d-none cl-d-xl-block` → the desktop row
  exists **only at ≥ 1200 px**. The hamburger column carries
  `cl-d-inline-block cl-d-xl-none` and an inline
  `style="position:relative; top:3px"` (`padding:1rem 0` via `cl-py-3`) → the
  hamburger exists **only below 1200 px**. (The `ul` also carries
  `cl-d-lg-block`, which is redundant because its column is already hidden.)
  **The real breakpoint is 1200 px, not 992 px.**
- `nav.site-navigation` is `position:relative; text-align:right` — the row is
  **right-aligned**, `ul.site-menu{margin-bottom:0}`, `> li{display:inline-block}`.
- Labels: `> li > a { padding:10px 0; color:#fff; font-size:16px }` and
  `> li > a > span { padding:5px 20px; display:inline-block; border-radius:30px;
transition:.3s all ease }`. Hover/focus/active (`:hover`, `:focus`, `:active`
  on the `li`) sets the **span** to `background:#007bff; color:#fff`. The current
  item (`.cl-active > a span`) is **statically** that pill. So the shape language
  is a **30 px pill**, and the un-hovered state is bare white text with no
  underline, no border, no background.
- `has-children > a span` gets `padding-right:30px` plus an absolutely positioned
  `:before` chevron (`16px`, `right:10px`, `top:50%; translateY(-50%)`,
  `font-family:'icomoon'`, `content:"\e313"` = chevron-down). Use a
  `lucide-react` `ChevronDown` instead of the glyph.
- The row has **no separators, no borders, no background tint and no shadow** —
  it reads purely as white text/pills on the photo. Contrast comes from the
  photograph, so the placeholder image must stay dark enough at the top edge.

## Section 3 — dropdown panel

- `.has-children .cl-dropdown`: `visibility:hidden; opacity:0;
position:absolute; top:100%; left:0 (default); text-align:left;
border-top:2px solid #007bff; box-shadow:0 2px 10px -2px rgba(0,0,0,.1);
padding:0; margin-top:20px; background:#fff; transition:.2s 0s`.
- Open state (on `li:hover`, `:focus`, `:active`):
  `transition-delay:0s; margin-top:0; visibility:visible; opacity:1`. The `20px →
0` margin animates a short downward glide; the delay is popped to `0s` so
  opening is instant.
- `.arrow-top` adds the upward pointer: a `:before` at `bottom:100%; left:20%`,
  `border:solid transparent`, `border-bottom-color:#fff`, `border-width:10px`,
  `margin-left:-10px`, `pointer-events:none` → a **white triangle** sitting on the
  `2px #007bff` top border, above the panel.
- Rows: `> li { list-style:none; padding:0; margin:0; min-width:200px }` and
  `> li > a { padding:9px 20px; display:block; color:#343a40 }`; hover →
  `background:#fafafb` (no shadow, no colour change); `li.cl-active > a` →
  `color:#007bff !important`.
- Nested flyout: the inner `has-children > .cl-dropdown / > ul` is
  `left:100%; top:0` (opens to the right, top-aligned) and its parent row gets an
  `:after` chevron (`right:20px`, icomoon `"\e315"` = chevron-right) plus the same
  `#fafafb` hover.
- Note the source's dropdown has `padding:0` and **no row padding on the panel
  itself** — the `2px` accent border and the triangle are the only chrome, and the
  panel is flush white. There is **no** gap between the header row and the panel
  once open (`margin-top:0`).

## Section 4 — hero band

- `div.hero { height:100vh; width:100%; background-size:cover;
background-position:center center; background-repeat:no-repeat }` with an inline
  `background-image:url('images/hero_1.jpg')`.
- The band is **completely empty** — no headline, no subtext, no CTA, no overlay
  scrim. It is a pure photographic surface for the header to sit on.
- The source photo is a **1900 × 1710** Monument Valley landscape (red buttes,
  pale blue/sand gradient sky, a dirt road). Use a placeholder instead:
  `https://picsum.photos/seed/navpill-hero/1900/1710` (deterministic per
  template), and verify the top third stays dark enough for white text.

## Visual design (from the TEMPLATES.md screenshot)

`website-menu-03.jpg` (1200 × 972, AVIF; decoded to `/tmp/wm03/screenshot.png`) is
a browser-chrome mock: a frame-filling **desert** photograph — three red rock
buttes against a pale blue-to-sand gradient sky, red-tinted ground, a winding dirt
road with two tiny vehicles — with a **transparent header strip** across the top:
the white wordmark **"Brand"** at the left and, at the right, **`Home` as a solid
blue pill**, followed by `Dropdown ⌄`, `Listings`, `About`, `Blog`, `Contact` in
plain white. Nothing else is visible: no hero copy, no footer, no second section,
no sticky bar. This confirms (a) the pill treatment for the current item,
(b) the right-aligned single-row bar, (c) the chevron on the dropdown trigger and
(d) the "transparent over a photo" composition. The screenshot shows no open
dropdown, no off-canvas panel and no hover state, so those were reconstructed from
`css/style.css` + `js/snippet.js`.

## Fidelity deltas the implementer must keep (and the ones that are improvements)

**Keep 1:1** — section order (panel → header → hero); the transparent absolute
header at `top:2rem`; the frame-filling cover hero; the `30px` pill labels; the
`#007bff` pill on the current item and on hover/focus; the white-text/white-pill
palette on a photo; the right-aligned row; the **1200 px** desktop breakpoint;
the dropdown's `2px #007bff` top border + white `10px` triangle at `left:20%`;
`min-width:200px` rows with `#fafafb` hover; the nested right-hand flyout; the
300 px right-hand off-canvas panel with the `rgba(0,0,0,.5)` veil; the panel row
scale (20 / 16 / 16 px with 20 / 40 / 60 px indents); round 36 × 36 sub-row
expanders; the four close paths; `body{height:200vh}` scroll-away behaviour.

**Deliberate improvements (document them in the PR)** — real `<button>`s for the
toggle, close glyph, expanders and dropdown triggers; `aria-expanded` /
`aria-controls` / `aria-haspopup`; a visible focus ring (the source has none);
`Escape` closing the dropdown and returning focus; a document scroll lock while
the panel is open; an `aria-hidden` veil that is not tabbable; rendering the
off-canvas rows from the same item model instead of cloning the DOM; a short
footer line linking Component Dock at the very bottom of the 200vh page so the
scroll target is not empty.

**Never copy** — the `cl-` class namespace, the `icomoon` codepoints (`\e313`,
`\e315`, `\f078`), the two inline SVG icon paths, the self-hosted Open Sans /
icomoon woff2 files, `hero_1.jpg`, the "Brand" wordmark string, the ColorLib
`README.md` text, or any `colorlib.com` URL inside `apps/navpill/`.
