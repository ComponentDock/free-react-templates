# Windlass — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V14"** (source slug `website-menu-14`) — the Website Menus
family's **white floating card + right-aligned rows + pink accent + social row** variant. Its
features, in order of visual weight:

- a **centred heading band** (`padding:112px 0`) over a **`#fafafa`** page, carrying one `28 px`
  black heading;
- a **white, `5 px`-rounded card with a soft shadow** (`padding:10px`,
  `0 5px 20px -17px rgba(0,0,0,.34)`, `position:relative`, ≈**84 px** tall) that floats on the
  `#fafafa` page — the family's only *card* treatment so far;
- a **single-line uppercase `#000` wordmark** at the card's left (source text `Digital`,
  `20 px` / `700`, `padding:5px 0`, `margin-right:16px`, ≈ `78.5 × 46`);
- **five `14 px` `#333333` rows pushed to the right** (`margin-left:auto` + `margin-right:1rem`),
  each `19.2px 20px` padded → **63.6 px** tall: `Home` (current, **pink**) · `About` · `Work` ·
  `Blog` · `Contact`;
- a **plain pink `#fc7fb2` text accent** — hover turns a row's label pink and the current row is
  pink at rest; this sheet has **no** underline, slab, fill, dropdown or search field anywhere;
- **four `40 px` circular buttons** (`border-radius:50%`, `1px solid #e6e6e6`, glyph `#4d4d4d`,
  `margin-right:4px`) at the card's **far right** (`order:13`), hovering to a **pink fill with a
  white glyph**;
- below **`992 px`**: the card turns **`#000`** (`padding:10px 15px`, **66 px**), the wordmark and
  glyphs white, the circles shrink to **`30 px`** with white rings, and a `☰ MENU` toggler
  (`rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`) reveals a **full-width,
  height-animated** panel of the five rows (`rgba(255,255,255,.7)`, hover/current `#fff`);
- below **~`420 px`**: no media query, but the header **wraps to two lines** (**91 px** card).

The source page holds **nothing else** — no content sections, no images, no footer, no second page,
no sticky chrome, and it does not scroll (`innerHeight === scrollHeight`). **9** of its **10**
anchors are dead `href="#"` (the 10th is the wordmark's `index.html`).

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/website-menu-14/` | **200**, 108,857 B, sha256 `1e3dcb72…`, title *"Website Menu V14 - Free Right Align Navbar Menu 2026 - Colorlib"* |
| Slug-only preview | `https://preview.colorlib.com/theme/website-menu-14/` | **404**, 9 B (family-wide gap) |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/website-menu-14/` | **200**, 3,336 B, `<title>Website menu 04</title>`, sha256 `94c17914…` |
| Stylesheet | `…/bootstrap/website-menu-14/css/style.css?v=b776cb12` | **200**, 14,904 B, sha256 `78cdb908…` |
| Behaviour JS | `…/bootstrap/website-menu-14/js/snippet.js?v=39f937fc` | **200**, 2,671 B, sha256 `e48262d1…` |
| Snippet archive | `https://preview.colorlib.com/downloads/free/website-menu-14.zip` | **200**, 257,214 B, sha256 `b9aec2d0…` |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-14.jpg` | **200**, AVIF, 5,514 B, 1200×972 |

The archive's `css/style.css` and `js/snippet.js` are **byte-identical** (same sha256) to the live
preview's; its `index.html` (3,133 B) differs from the live page (3,336 B) **head-only** (noindex
meta tags, a cdnjs `dns-prefetch`, `fetchpriority="high"`, and the cache-busting query strings).
The archive is otherwise **no images at all** + **eight** Roboto woff2 files
(100/300/400/700 × latin/latin-ext) totalling **247,856 B = 96.4 %** of the 257,214 B download —
**all dead** (only 400/700 are even declared, and `body` resolves to Poppins → Arial; the four
latin-ext files are byte-identical to each other, sha256 `cdd53dc5…`, and so are the four latin
files, sha256 `0a44e0bb…`).

Live render cross-checked in a browser at **1440 px** (desktop), **991/768/420 px** (mobile) and
**375/320 px** (wrapped). ⚠️ Verify geometry from **screenshot pixels**, not from CDP
`getComputedStyle`/`DOM.getBoxModel`: in this session both kept returning the `991.98 px` branch
(30 px circles, white wordmark) while the render at 1440 px was plainly the desktop one — the
wordmark's ink sampled `rgb(0,0,0)` at `x = 185` and the four rings measured exactly **40 × 40** at
`x = 1067–1106, 1111–1150, 1155–1194, 1199–1238` with 4 px gaps.

## DOM skeleton (live preview, 3,336 B)

```
section.ftco-section                       padding:7em 0 (112px) over #fafafa
└─ div.cl-container                        max-width 1140 / padding 0 15px
   ├─ div.cl-row.cl-justify-content-center
   │  └─ div.cl-col-md-6.cl-text-center.cl-mb-5
   │     └─ h2.heading-section              "Website menu #04" — 28px/400/#000, 48px below
   └─ div.cl-container
      └─ nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.ftco_navbar.ftco-navbar-light
         └─ div.cl-container                display:flex; justify-content:space-between
            ├─ a.cl-navbar-brand[href=index.html]            "Digital"  (20px/700/uppercase)
            ├─ div.social-media.cl-order-lg-last             order:13 → LAST on desktop
            │  └─ p.cl-mb-0.cl-d-flex
            │     └─ a[href="#"].cl-d-flex.cl-align-items-center.cl-justify-content-center  ×4
            │        └─ span.fa.fa-facebook|twitter|instagram|dribbble
            │           └─ i.cl-sr-only                     the platform name (only a11y name)
            ├─ button.cl-navbar-toggler[type=button][data-toggle=collapse][data-target=#ftco-nav]
            │  │   [aria-controls=ftco-nav][aria-expanded=false][aria-label="Toggle navigation"]
            │  └─ span.fa.fa-bars  →  inline SVG 3-bar glyph + text "Menu"
            └─ div#ftco-nav.cl-collapse.cl-navbar-collapse   flex-basis:100%
               └─ ul.cl-navbar-nav.cl-ml-auto.cl-mr-md-3
                  └─ li.cl-nav-item ×5      Home(.cl-active) · About · Work · Blog · Contact → all href="#"
```

10 anchors total: **1** real (`index.html`) + **9** dead `href="#"` (5 rows + 4 social).

## CSS token reference (from `css/style.css`, canonical)

```
/* page + type */
body   { font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
         font-weight:normal; background:#fafafa; color:gray; }          /* gray = #808080 */
a      { transition:.3s all ease; color:#fc7fb2 }
a:hover,a:focus { text-decoration:none !important; outline:none !important; box-shadow:none }
h2,.h2 { line-height:1.5; font-weight:400; font-family:"Poppins", Arial, sans-serif; color:#000 }
.ftco-section    { padding:7em 0 }                       /* 112px */
.heading-section { font-size:28px; color:#000 }

/* the card */
.ftco-navbar-light { background:#fff !important; z-index:3; padding:10px 10px;
                     border-radius:5px; box-shadow:0px 5px 20px -17px rgba(0,0,0,0.34) }
@media (max-width:991.98px) { .ftco-navbar-light { background:#000 !important;
                     position:relative; top:0; padding:10px 15px } }

/* wordmark */
.ftco-navbar-light .cl-navbar-brand { color:#000; text-transform:uppercase; font-weight:700 }
@media (max-width:991.98px) { .ftco-navbar-light .cl-navbar-brand { color:#fff } }

/* rows */
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link {
  font-size:14px; padding:1.2rem 20px; font-weight:400; color:#333333;
  position:relative; opacity:1 !important }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link:hover { color:#fc7fb2 }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item.cl-active > a { color:#fc7fb2 }
@media (max-width:991.98px) {
  .ftco-navbar-light .cl-navbar-nav { padding-bottom:10px }
  .ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link {
    padding-left:0; padding-right:0; padding-top:.5rem; padding-bottom:.5rem;
    color:rgba(255,255,255,0.7); }
  .ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link:hover { color:#fff }
  .ftco-navbar-light .cl-navbar-nav > .cl-nav-item.cl-active > a { color:#fff } }

/* toggler */
.ftco-navbar-light .cl-navbar-toggler { border:none; color:rgba(255,255,255,0.5) !important;
  cursor:pointer; padding-right:0; text-transform:uppercase; font-size:16px; letter-spacing:.1em }
.ftco-navbar-light .cl-navbar-toggler:focus { outline:none !important }

/* social circles */
.social-media p a       { border:1px solid #e6e6e6; width:40px; height:40px;
                          border-radius:50%; margin-right:4px }
.social-media p a span  { color:#4d4d4d }
.social-media p a:hover { background:#fc7fb2; border-color:#fc7fb2 }
.social-media p a:hover span { color:#fff }
@media (max-width:991.98px) { .social-media p a { border-color:#fff; width:30px; height:30px }
                              .social-media p a span { color:#fff } }

/* layout utils actually used */
.cl-order-lg-last {@media ≥992px { order:13 }}   .cl-ml-auto { margin-left:auto !important }
.cl-mr-md-3 {@media ≥768px { margin-right:1rem !important }}
.cl-navbar-collapse { flex-basis:100%; flex-grow:1; align-items:center }   /* ← the mobile wrap */
.cl-collapse:not(.cl-show) { display:none }      .cl-collapsing { height:0; transition:height .35s ease }
.cl-icon { height:1em; width:auto; fill:currentColor }   .fa { display:inline-block; line-height:1 }
.cl-container { width:100%; padding:0 15px; margin:auto }   /* 540 / 720 / 960 / 1140 tiers */
```

Sheet census: **14,904 B**, 140 rule blocks, 19 `@media` blocks, **zero** `sticky`/`fixed`,
**zero** `dropdown`/`form-control`/`searchform` occurrences (that is the `-13` sibling's furniture,
which this variant does not ship — 6.8 kB smaller sheet), and **no** `.cl-nav-link:before` rule.

## Screenshot analysis (1200 × 972, AVIF → PNG)

A browser-chrome mock of the page: the centred heading **`Website menu #04`**; below it the white
rounded card holding the black uppercase **`DIGITAL`** wordmark at its left, the grey rows
**`Home`** (pink — the current one) · **`About`** · **`Work`** · **`Blog`** · **`Contact`** grouped
to the right of centre, and **four circular outline buttons** at the card's right end carrying the
**Facebook / Twitter / Instagram / Dribbble** marks; the rest of the page is empty `#fafafa`.

⚠️ The four marks come from the *pre-rebuild* build: the current live preview ships **no icon
font**, so its `span.fa` glyphs render **0 × 0 px** (measured with the same Poppins/ Arial stack —
no `@font-face` for Font Awesome exists in the sheet, and no `fonts/icomoon*` file is in the
archive). The recreation must draw its own `lucide-react` icons inside the same circles.

## Section-by-section

### 1 — Heading band (`.ftco-section`)

- `padding:7em 0` = **112 px**; page background **`#fafafa`** (the `-13` sibling's is pure `#fff` —
  this is what makes the card read as a floating card here).
- `div.cl-container` → `div.cl-row.cl-justify-content-center` → `div.cl-col-md-6.cl-text-center
  .cl-mb-5` → `h2.heading-section` = **`Website menu #04`**.
- `h2`: `font-size:28px` (beats the framework's `2rem`), `font-weight:400`, `line-height:1.5`
  (`42 px`), `color:#000`, `margin-bottom:8px` + `.cl-mb-5` **48 px** → the card's top edge is at
  `112 + 42 + 8 + 48 = ` **210 px** (verified `nav.y = 210`).
- Recreation: own heading copy, `py-28`, `#fafafa` page, centred `28px`/`400`/`lh-42px` heading,
  `48px` bottom margin.

### 2 — The card (`nav.ftco-navbar-light`)

- Desktop: **`background:#fff !important`**, `z-index:3`, **`padding:10px`**,
  **`border-radius:5px`**, `box-shadow:0px 5px 20px -17px rgba(0,0,0,0.34)`, `position:relative`
  (**not** sticky). Measured **1110 × 84 at `x = 165, y = 210`** at 1440 px — i.e. the card is
  `width:100%` of the outer container's content box (1140 container − 2 × 15 px gutters).
- `@media (max-width:991.98px)`: **`background:#000 !important`**, `padding:10px 15px`,
  `position:relative; top:0`, measured **390 × 66** at 420 px; **the `5 px` radius and the shadow
  declaration are unchanged** (they are outside the media block).
- Inner `div.cl-container`: `display:flex; justify-content:space-between; align-items:center`,
  `max-width` tiers **540/720/960/1140**, `padding:0 15px` — measured **1090 px** at 1440/1200 and
  **910 px** at 1100/992; inside the card the gutters are **removed below 992 px**
  (`.cl-navbar-expand-lg > .cl-container{padding-right:0; padding-left:0}`). `flex-wrap:nowrap`
  at ≥992 px.
- Recreation: `w-full bg-white rounded-[5px] p-[10px] shadow-[0_5px_20px_-17px_rgba(0,0,0,0.34)]
  relative z-[3]`, `max-lg:bg-black max-lg:p-[10px_15px]`, container tiers as above,
  `max-lg:px-0`.

### 3 — Wordmark (`a.cl-navbar-brand`)

- Source text `Digital`, `text-transform:uppercase`, `font-size:1.25rem` = **20 px**,
  `font-weight:700`, `line-height:36px` (inherits `body` 1.8), `color:#000`, `padding:5px 0`,
  `margin-right:16px`, `display:inline-block`, `white-space:nowrap`; measured **78.5 × 46** in the
  84 px card line, ink sampled `rgb(0,0,0)` in the 1440 px render.
- Mobile: `color:#fff`.
- Hover/`:focus` keeps `#000` → **no hover colour change**; it is the chrome's only real href
  (`index.html`).
- Recreation: own single-line uppercase wordmark, `#000` desktop / white mobile, `py-[5px] mr-4`,
  links to the page top, visible focus ring, no hover colour shift.

### 4 — The rows (`ul.cl-navbar-nav.cl-ml-auto.cl-mr-md-3`)

- **Right-aligned** by a live `margin-left:auto` plus `margin-right:1rem` at ≥768 px: the list ends
  16 px before the social block, which is pushed to the card's right end by its own `order:13`.
  Measured **383 × 63.6**.
- **Five rows**, source order: **Home** (`cl-active`) · **About** · **Work** · **Blog** ·
  **Contact**.
- `.cl-nav-link`: `font-size:14px`, `font-weight:400`, `padding:1.2rem 20px`
  (**19.2px 20px**), `color:#333333`, `position:relative`, `opacity:1 !important`,
  `line-height:25.2px` → **63.6 px** (the card's 84 px = 10 + 63.6 + 10).
- Hover → `#fc7fb2`; **current** row (`.cl-nav-item.cl-active > a`) → `#fc7fb2` at rest on
  desktop, sampled `rgb(252,135,187)` in the render.
- No `:before`, no border, no fill anywhere — the family's first **text-only** accent.
- Mobile: `padding:.5rem 0` (8 px), `rgba(255,255,255,.7)`, hover `#fff`, current `#fff`.

### 5 — Social circles (`.social-media p a`)

- Desktop: `width:40px; height:40px; border:1px solid #e6e6e6; border-radius:50%;
  margin-right:4px`, glyph `#4d4d4d`; the anchors are `cl-d-flex cl-align-items-center
  cl-justify-content-center` (icon centred); hover → `background:#fc7fb2; border-color:#fc7fb2`
  with a `#fff` glyph.
- Pixel-verified at 1440 px: four **40 × 40** rings at `x = 1067–1106, 1111–1150, 1155–1194,
  1199–1238` (4 px gaps → a 176 px block ending flush with the card's inner right edge).
- Mobile: **`30 × 30`**, `border-color:#fff`, glyph `#fff` — and the block **stays inline in the
  header row** (it is `order:13` only ≥992 px; below that it is the card's second child).
- The glyph spans render 0 × 0 px in the live preview (no icon font) → use `lucide-react`
  `Facebook` / `Twitter` / `Instagram` / `Dribbble`, each link carrying the platform name (the
  source's names live in `<i class="cl-sr-only">`).

### 6 — Toggler (`button.cl-navbar-toggler`)

- `border:none`, `color:rgba(255,255,255,0.5) !important`, `cursor:pointer`, `padding-right:0`,
  `text-transform:uppercase`, `font-size:16px`, `letter-spacing:.1em`, focus
  `outline:none !important`.
- Content: an inline SVG three-bar glyph (`span.fa.fa-bars`, `viewBox="0 0 1536 1792"`, wrapped in
  `<g transform="translate(0,1536) scale(1,-1)">`, `class="cl-icon"`, `.cl-icon{height:1em;
  width:auto; fill:currentColor}` → 16 px) + the literal word **`Menu`**. Measured ≈ **93 × 25**
  at the container's right at 420 px (centre `x = 347`); `display:none` at ≥992 px.
- **DOM order:** brand → social block → **toggler** → collapse wrapper. Recreation: `lucide` `Menu`
  glyph + uppercase label, a real `<button>` with `aria-expanded`/`aria-controls` and a visible
  focus ring (delta).

### 7 — Mobile panel (`div#ftco-nav.cl-collapse.cl-navbar-collapse`)

- The wrapper carries `flex-basis:100%; flex-grow:1; align-items:center` **outside** any media
  query, so the opened panel takes a **full-width line below** the header row (not a dropdown
  overlay): measured **360 × 216** at 420 px with the card growing **66 → 282 px**.
- Rows stack (`flex-direction:column`), list `padding-bottom:10px`, each row `padding:.5rem 0`,
  resting `rgba(255,255,255,.7)`, hover `#fff`, current `#fff`.
- Height animation: `.cl-collapsing{height:0; overflow:hidden; transition:height .35s ease}` (the
  source's `snippet.js` reproduces Bootstrap 4's collapse and toggles `cl-show` + `cl-collapsed` —
  ⚠️ the sheet styles **no** `cl-collapsed` rule; **zero** occurrences).
- Recreation: a React disclosure with `aria-expanded`/`aria-controls`, `0.35s` height transition
  removed under `prefers-reduced-motion: reduce`, hidden rows not focusable.

### 8 — Wrap point (no media query)

At **375** and **320 px** the card measures **91 px**: wordmark `78.5` + `16` margin + social
(4 × 30 + 4 × 4 = **136**) + toggler (≈ `93`) does not fit on the 315 / 260 px line, so the flex row
wraps to two lines. Keep the wrap — do not force one line.

### 9 — Materialised sections (delta) + footer (delta)

The source's page is short, does not scroll, and **nine** of its ten links point at nothing. The
recreation materialises all nine as real destinations (five in-app with `scroll-margin-top`, four
external platform profiles), adds sections of the source's *kinds* (intro/home, current-page,
blocks for the plain rows, a contact/about block for the social links) so the non-sticky card
genuinely scrolls away, and adds a minimal footer linking `https://www.componentdock.com/`
("Component Dock") with a computed year.

## Source → React adaptation

| Source (ColorLib `website-menu-14`) | Recreation (`apps/windlass`) |
| --- | --- |
| `section.ftco-section` — `padding:7em 0`, `#fafafa` page | `<section className="py-28 bg-[#fafafa]">` |
| `h2.heading-section` — `Website menu #04`, `28px/400/lh1.5/#000` | own heading, `text-[28px] font-normal leading-[1.5] text-black` |
| `nav.ftco-navbar-light` — white, `padding:10px`, `5px` radius, shadow | `bg-white p-[10px] rounded-[5px] shadow-[0_5px_20px_-17px_rgba(0,0,0,0.34)] relative z-[3] max-lg:bg-black max-lg:p-[10px_15px]` |
| `a.cl-navbar-brand` — `Digital`, 20px/700/uppercase, `#000` | own brand, `text-[20px] font-bold uppercase text-black max-lg:text-white py-[5px] mr-4` |
| 5 × `.cl-nav-item > .cl-nav-link` — 14px `#333`, `19.2px 20px`, hover/current `#fc7fb2` | one `navItems` data array → `ul.ml-auto mr-4` with `text-[14px] text-[#333333] px-5 py-[19.2px] hover:text-[#fc7fb2]`, current row `#fc7fb2` + `aria-current="page"` (mobile `#fff`) |
| `div.social-media` + 4 × `a > span.fa` (0 × 0 px glyphs) | `ul.flex order-last` with `lucide-react` `Facebook`/`Twitter`/`Instagram`/`Dribbble` in `size-10 max-lg:size-[30px] rounded-full border border-[#e6e6e6] max-lg:border-white text-[#4d4d4d] max-lg:text-white hover:bg-[#fc7fb2] hover:border-[#fc7fb2] hover:text-white` |
| `button.cl-navbar-toggler` — inline SVG bars + `Menu`, `rgba(255,255,255,.5)` | real `<button>` + `lucide` `Menu` 16 px + uppercase 16 px label `tracking-[0.1em]`, `aria-expanded`/`aria-controls`, `0.35s` height panel, rows `rgba(255,255,255,.7)` |
| 9 × dead `href="#"` | 5 in-app destinations + 4 external profiles (`target="_blank" rel="noreferrer"`) |
| 8 × Roboto woff2 (247,856 B, never render) + no Poppins webfont | one Google Fonts `<link>` for Poppins 400/500/700 |
| no footer | footer linking `https://www.componentdock.com/` + computed year |

## Sibling comparison (read before prepping 15+)

| | `-12` → **gunwale** | `-13` → **capstan** | `-14` → **windlass** (this one) |
| --- | --- | --- | --- |
| card/bar surface | solid `#202040` dark bar | **transparent** strip with `1px rgba(0,0,0,.05)` hairlines | **white card**, `5 px` radius, soft shadow over `#fafafa` |
| page bg | `#fafafa` | `#fff` | `#fafafa` |
| rows | 5, left-pinned (`mr-auto`) | **6**, **centred** (`m-auto`) | **5**, **right-aligned** (`ml-auto` + `mr-md-3`) |
| accent | gold **slab** hover fill | teal **underline wipe** (`scaleX` 0→1, `0.5s`) | **pink `#fc7fb2` text only** (current + hover) |
| dropdown / search | none | `Page` dropdown (4 items) + a `257 × 46` search field hidden <768 px | **neither** — sheet has zero `dropdown`/`searchform` |
| social row | dead `span.fa` glyphs | none | **4 × 40 px circles** (30 px mobile), `order:last` |
| mobile | `#000` bar, toggler | `#000` strip, toggler **third in DOM**, `68 px` | `#000` card **66 px** (91 px ≤~420 px), toggler third, circles stay in the header row |
| sheet size | — | 21,762 B | **14,904 B** (leanest of the three: no dropdown/form CSS) |
| links | — | 10 dead `href="#"` | **9** dead `href="#"` |

Naming run: menutree · slidenav · navpill · menuribbon · starboard · larboard · topdeck ·
bowsprit · gangway · halyard · ensign · gunwale · capstan · **windlass** — keep it nautical and
single-word for `-15` … `-20`.
