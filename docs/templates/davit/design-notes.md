# Davit — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V15"** (source slug `website-menu-15`) — the Website Menus
family's **white floating card + right-aligned amber rows + circular cart link with a dropdown**
variant. Its features, in order of visual weight:

- a **centred heading band** (`padding:112px 0`) over a **`#fafafa`** page, carrying one `28 px`
  black heading;
- a **white, `5 px`-rounded card with a soft shadow** (`padding:10px`,
  `0 5px 20px -17px rgba(0,0,0,.34)`, `position:relative`, ≈**81.8 px** tall) that floats on the
  `#fafafa` page;
- a **single-line uppercase `#000` wordmark** at the card's left (source text `Logo`,
  `20 px` / `700`, `padding:5px 0`, `margin-right:16px`, ≈ `59 × 46`);
- **five `13 px` UPPERCASE `#333333` rows pushed to the right** (`margin-left:auto` +
  `margin-right:1rem`, `letter-spacing:1px`), each `19.2px 20px` padded → **61.8 px** tall:
  `Home` (current, **amber**) · `Accessories` · `Shop` · `Products` · `Contact`;
- a **plain amber `#fec771` text accent** on rows — hover turns a row's label amber and the current
  row is amber at rest; there is **no** underline, slab or fill on rows;
- a **`40 px` circular cart link** (`border-radius:50%`, `1px solid #fec771`, amber glyph) as the
  list's **sixth item**, vertically centred, whose **hover/click opens a white `4 px`-rounded
  dropdown** (`0 10px 34px -20px rgba(0,0,0,.41)`) of **five `12 px` `#000` items**
  (`padding:4px 24px`) with an amber hover fill + white ink and **two** `1px #e9ecef` dividers;
- below **`992 px`**: the card turns **`#000`** (`padding:10px 15px`, **66 px**), the wordmark and
  glyphs white, and a `☰ MENU` toggler (`rgba(255,255,255,0.5)`, uppercase `16 px`,
  `letter-spacing:.1em`) reveals a **full-width, height-animated** panel of the six items
  (`rgba(255,255,255,.7)`, hover/current `#fff`, `padding:.9rem 0` each) — the cart keeps its
  `40 × 40` amber ring;
- the header **never wraps**: the card is **66 px at 320 px** too (the line carries only the
  wordmark and the toggler).

The source page holds **nothing else** — no content sections, no images, no footer, no second page,
no sticky chrome, **no social row, no search field**, and it does not scroll
(`innerHeight === scrollHeight`, 437 = 437). **11** of its **12** anchors are dead `href="#"` (the
12th is the wordmark's `index.html`).

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/website-menu-15/` | **200**, 108,918 B, sha256 `3503675c…`, title *"Website Menu V15 - Free Responsive Navbar Template 2026 - Colorlib"* |
| Slug-only preview | `https://preview.colorlib.com/theme/website-menu-15/` | **404**, 9 B (family-wide gap) |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/website-menu-15/` | **200**, 4,713 B, `<title>Website menu 05</title>`, sha256 `8b4e1104…` |
| Stylesheet | `…/bootstrap/website-menu-15/css/style.css?v=795cf346` | **200**, 18,643 B, sha256 `7e850dd3…` |
| Behaviour JS | `…/bootstrap/website-menu-15/js/snippet.js?v=a1b5a81a` | **200**, 5,798 B, sha256 `9b82044f…` |
| Snippet archive | `https://preview.colorlib.com/downloads/free/website-menu-15.zip` | **200**, 258,679 B, sha256 `e5d82446…` |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-15.jpg` | **200**, AVIF, 5,695 B, 1200×972 |

The archive's `css/style.css` and `js/snippet.js` are **byte-identical** (same sha256) to the live
preview's; its `index.html` (4,510 B) differs from the live page (4,713 B) **head-only** (noindex
meta tags, a cdnjs `dns-prefetch`, `fetchpriority="high"`, and the cache-busting query strings).
The archive is otherwise **no images at all** + **eight** Roboto woff2 files (100/300/400/700 ×
latin/latin-ext) totalling **247,856 B = 95.8 %** of the 258,679 B download — **all dead**
(`body` resolves to Poppins → Arial; the four latin-ext files are byte-identical to each other,
sha256 `cdd53dc5…`, and so are the four latin files, sha256 `0a44e0bb…`). Its `README.md` (1,264 B)
lists an `images/` folder that the archive does not contain.

Live render cross-checked in a browser at **1440 / 1200 / 992 px** (desktop), **991 / 768 / 420 px**
(mobile, panel closed and open) and **375 / 320 px** (narrow). ⚠️ A `getComputedStyle` read taken
immediately after a CDP `Emulation.setDeviceMetricsOverride` returned a **stale pre-override
value** for the brand colour (`rgb(255,255,255)` on the first desktop pass, `rgb(0,0,0)` after a
fresh re-load — the 1440 px screenshot showed black ink both times). **Re-load the page after the
override and trust the screenshot pixels.**

## DOM skeleton (live preview, 4,713 B)

```
section.ftco-section                       padding:7em 0 (112px) over #fafafa
└─ div.cl-container                        max-width 1140 / padding 0 15px
   ├─ div.cl-row.cl-justify-content-center
   │  └─ div.cl-col-md-6.cl-text-center.cl-mb-5
   │     └─ h2.heading-section              "Website menu #05" — 28px/400/#000, 48px below
   └─ div.cl-container
      └─ nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.ftco_navbar.ftco-navbar-light
         └─ div.cl-container                display:flex; justify-content:space-between
            ├─ a.cl-navbar-brand[href=index.html]            "Logo"  (20px/700/uppercase)
            ├─ button.cl-navbar-toggler[type=button][data-toggle=collapse][data-target=#ftco-nav]
            │  │   [aria-controls=ftco-nav][aria-expanded=false][aria-label="Toggle navigation"]
            │  └─ span.fa.fa-bars  →  inline SVG 3-bar glyph + text "Menu"
            └─ div#ftco-nav.cl-collapse.cl-navbar-collapse   flex-basis:100%
               └─ ul.cl-navbar-nav.cl-ml-auto.cl-mr-md-3
                  ├─ li.cl-nav-item ×5      Home(.cl-active) · Accessories · Shop · Products · Contact → href="#"
                  └─ li.cl-dropdown.cl-nav-item.cl-d-md-flex.cl-align-items-center   ← the cart (6th item)
                     ├─ a.cl-dropdown-toggle.cl-nav-link.icon-cart.cl-p-0[data-toggle=dropdown]
                     │  │  [id=dropdown04][aria-expanded=false][href="#"]
                     │  ├─ i.fa.fa-shopping-cart → inline SVG cart glyph
                     │  └─ b.caret              ← dead markup, no .caret rule in the sheet
                     └─ div.cl-dropdown-menu.cl-dropdown-menu-right[aria-labelledby=dropdown04]
                        ├─ a.cl-dropdown-item "Action"
                        ├─ a.cl-dropdown-item "Another action"
                        ├─ a.cl-dropdown-item "Something else here"
                        ├─ div.cl-dropdown-divider
                        ├─ a.cl-dropdown-item "Separated link"
                        ├─ div.cl-dropdown-divider
                        └─ a.cl-dropdown-item "One more separated link"
```

12 anchors total: **1** real (`index.html`) + **11** dead `href="#"` (5 rows + the cart trigger +
5 dropdown items). 6 `li` elements.

## CSS token reference (from `css/style.css`, canonical)

```
/* page + type */
body   { font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
         font-weight:normal; background:#fafafa; color:gray; }          /* gray = #808080 */
a      { transition:.3s all ease; color:#fec771 }
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

/* rows — 13px UPPERCASE + tracking is this variant's signature */
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link {
  font-size:13px; padding:1.2rem 20px; font-weight:400; color:#333333; position:relative;
  text-transform:uppercase; letter-spacing:1px; opacity:1 !important }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link:hover { color:#fec771 }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item.cl-active > a { color:#fec771 }
@media (max-width:991.98px) {
  .ftco-navbar-light .cl-navbar-nav { padding-bottom:10px }
  .ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link {
    padding-left:0; padding-right:0; padding-top:.9rem; padding-bottom:.9rem;
    color:rgba(255,255,255,0.7); }
  .ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link:hover { color:#fff }
  .ftco-navbar-light .cl-navbar-nav > .cl-nav-item.cl-active > a { color:#fff } }

/* cart link — 40px amber ring, glyph amber */
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link.icon-cart {
  border:1px solid #fec771; width:40px; height:40px; border-radius:50% }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link.icon-cart .fa { color:#fec771 }

/* dropdown (the custom restyle over the framework defaults) */
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item .cl-dropdown-menu {
  border:none; background:#fff; box-shadow:0px 10px 34px -20px rgba(0,0,0,0.41);
  border-radius:4px; padding:0 }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item .cl-dropdown-menu .cl-dropdown-item {
  font-size:12px; color:#000 }
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item .cl-dropdown-menu .cl-dropdown-item:hover,
.ftco-navbar-light .cl-navbar-nav > .cl-nav-item .cl-dropdown-menu .cl-dropdown-item:focus {
  background:#fec771; color:#fff }

/* toggler */
.ftco-navbar-light .cl-navbar-toggler { border:none; color:rgba(255,255,255,0.5) !important;
  cursor:pointer; padding-right:0; text-transform:uppercase; font-size:16px; letter-spacing:.1em }
.ftco-navbar-light .cl-navbar-toggler:focus { outline:none !important }
.cl-dropdown-toggle::after { display:none }             /* no caret triangle */

/* layout utils actually used */
.cl-dropdown        { position:relative }
.cl-dropdown-menu   { position:absolute; top:100%; left:0; z-index:1000; display:none;
                      min-width:10rem; padding:.5rem 0; margin:.125rem 0 0;
                      background:#fff; border:1px solid rgba(0,0,0,.15); border-radius:.25rem }
.cl-dropdown-menu-right { right:0; left:auto }
.cl-dropdown-divider{ height:0; margin:.5rem 0; overflow:hidden; border-top:1px solid #e9ecef }
.cl-dropdown-item   { display:block; width:100%; padding:.25rem 1.5rem; clear:both; font-weight:400;
                      color:#212529; text-align:inherit; white-space:nowrap; background:transparent; border:0 }
.cl-dropdown-menu.cl-show { display:block }
.cl-ml-auto { margin-left:auto !important }   .cl-mr-md-3 {@media ≥768px { margin-right:1rem !important }}
.cl-navbar-collapse { flex-basis:100%; flex-grow:1; align-items:center }   /* ← the mobile wrap */
.cl-collapse:not(.cl-show) { display:none }   .cl-collapsing { position:relative; height:0;
                                              overflow:hidden; transition:height .35s ease }
.cl-icon { height:1em; width:auto; fill:currentColor }   .fa { display:inline-block; line-height:1 }
.cl-container { width:100%; padding:0 15px; margin:auto }   /* 540 / 720 / 960 / 1140 tiers */
@media (max-width:991.98px) { .cl-navbar-expand-lg > .cl-container { padding-right:0; padding-left:0 } }
```

Sheet census: **18,643 B**, 156 rule blocks, 18 `@media` blocks, **zero** `sticky`/`fixed`,
**25** `dropdown` occurrences, **zero** `form-control`/`searchform`/`social`, and **no** `.caret`
rule.

## Screenshot analysis (1200 × 972, AVIF → PNG)

A browser-chrome mock of `preview.colorlib.com`: the centred heading **`Website menu #05`**; below
it the white rounded card holding the black uppercase **`LOGO`** wordmark at its left, the
**uppercase** rows **`HOME`** (amber — the current one) · **`ACCESSORIES`** · **`SHOP`** ·
**`PRODUCTS`** · **`CONTACT`** grouped to the right of centre, and an **amber-ringed circular
cart button** (amber cart glyph) at the card's right end; the rest of the page is empty `#fafafa`.
Unlike the `-14` sibling's screenshot there is **no social row of four circles** — the single
circle is the cart.

## Section-by-section

### 1 — Heading band (`.ftco-section`)

- `padding:7em 0` = **112 px**; page background **`#fafafa`** (what makes the card read as a
  floating card).
- `div.cl-container` → `div.cl-row.cl-justify-content-center` → `div.cl-col-md-6.cl-text-center
  .cl-mb-5` → `h2.heading-section` = **`Website menu #05`**.
- `h2`: `font-size:28px` (beats the framework's `2rem`), `font-weight:400`, `line-height:1.5`
  (`42 px`), `color:#000`, `margin-bottom:0.5rem` (8 px) + `.cl-mb-5` **48 px** → the card's top
  edge is at `112 + 42 + 8 + 48 = ` **210 px** (measured `h2.y = 112, h = 42`, `nav.y = 210`).
- Recreation: own heading copy, `py-28`, `#fafafa` page, centred `28px`/`400`/`lh-42px` heading,
  `48px` bottom margin.

### 2 — The card (`nav.ftco-navbar-light`)

- Desktop: **`background:#fff !important`**, `z-index:3`, **`padding:10px`**,
  **`border-radius:5px`**, `box-shadow:0px 5px 20px -17px rgba(0,0,0,0.34)`, `position:relative`
  (**not** sticky). Measured **1110 × 81.8 at `x = 165, y = 210`** at 1440 px and `x = 45` at
  1200 px — i.e. the card is `width:100%` of the outer container's content box (1140 container −
  2 × 15 px gutters); **930 × 81.8 at `x = 31`** at 992 px.
- `@media (max-width:991.98px)`: **`background:#000 !important`**, `padding:10px 15px`,
  `position:relative; top:0`, measured **690 × 66** at 991/768 px, **390 × 66** at 420 px,
  **345 × 66** at 375 px, **290 × 66** at 320 px; **the `5 px` radius and the shadow declaration are
  unchanged** (they are outside the media block).
- Inner `div.cl-container`: `display:flex; justify-content:space-between; align-items:center`,
  `max-width` tiers **540/720/960/1140**, `padding:0 15px` — measured **1090 px** at 1440/1200 and
  **910 px** at 992; inside the card the gutters are **removed below 992 px**
  (`.cl-navbar-expand-lg > .cl-container{padding-right:0; padding-left:0}`).
- Recreation: `w-full bg-white rounded-[5px] p-[10px] shadow-[0_5px_20px_-17px_rgba(0,0,0,0.34)]
  relative z-[3]`, `max-lg:bg-black max-lg:p-[10px_15px]`, container tiers as above, `max-lg:px-0`.

### 3 — Wordmark (`a.cl-navbar-brand`)

- Source text `Logo`, `text-transform:uppercase`, `font-size:1.25rem` = **20 px**,
  `font-weight:700`, `line-height:36px` (inherits `body` 1.8), `color:#000`,
  `padding-top/bottom:0.3125rem` (5 px), `margin-right:1rem` (16 px), `display:inline-block`,
  `white-space:nowrap`; measured **58.9 × 46** (46 px because the row list is the taller item).
- Mobile: `color:#fff`.
- Hover/`:focus` keeps `#000` → **no hover colour change**; it is the chrome's only real href
  (`index.html`).
- Recreation: own single-line uppercase wordmark, `#000` desktop / white mobile, `py-[5px] mr-4`,
  links to the page top, visible focus ring, no hover colour shift.

### 4 — The rows (`ul.cl-navbar-nav.cl-ml-auto.cl-mr-md-3`)

- **Right-aligned** by a live `margin-left:auto` (390.5 px at 1440) plus `margin-right:1rem` at
  ≥768 px; measured **578.6 × 61.8**, ending 16 px before the container's content right edge.
- **Five text rows**, source order: **Home** (`cl-active`) · **Accessories** · **Shop** ·
  **Products** · **Contact** — then the cart as the **sixth** `li`.
- `.cl-nav-link`: `font-size:13px`, `font-weight:400`, **`text-transform:uppercase`**,
  **`letter-spacing:1px`**, `padding:1.2rem 20px` (**19.2px 20px**), `color:#333333`,
  `position:relative`, `opacity:1 !important`, `line-height:23.4px` → **61.8 px** (the card's
  81.8 px = 10 + 61.8 + 10).
- Hover → `#fec771`; **current** row (`.cl-nav-item.cl-active > a`) → `#fec771` at rest.
- No `:before`, no border, no fill anywhere on rows.
- Mobile: `padding:.9rem 0` (14.4 px → **52.2 px** rows), `rgba(255,255,255,.7)`, hover `#fff`,
  current `#fff`.

### 5 — Cart link (`a.cl-nav-link.icon-cart`)

- `border:1px solid #fec771`, **`width:40px; height:40px; border-radius:50%`**, `padding:0`,
  glyph `.icon-cart .fa` **`#fec771`**; the anchors are `cl-d-flex cl-align-items-center
  cl-justify-content-center` (glyph centred) and the `li` is `cl-d-md-flex cl-align-items-center`.
- Measured at 1440 px: **40 × 40 at `x = 1194, y = 230.9`** — vertically centred in the 61.8 px row,
  ring flushing to the list's right edge.
- It is the **list's last item**, not a separately ordered block — **no** `order` utility (that is
  the `-14` sibling's social row, which this variant does not ship).
- Mobile: **keeps `40 × 40` and its amber ring** inside the opened panel (6th stacked item).
- Recreation: `size-10 rounded-full border border-[#fec771] text-[#fec771]` with a `lucide-react`
  `ShoppingCart`, as the final list item.

### 6 — Dropdown (`.cl-dropdown-menu`)

- The custom restyle: `border:none`, `background:#fff`, `padding:0`, `border-radius:4px`,
  `box-shadow:0px 10px 34px -20px rgba(0,0,0,0.41)`; right-aligned via `cl-dropdown-menu-right`.
- Items: **five**, `font-size:12px`, `color:#000`, `padding:0.25rem 1.5rem` (**4px 24px**);
  `:hover,:focus` → `background:#fec771; color:#fff`. Dividers: `border-top:1px solid #e9ecef`,
  `margin:.5rem 0` — the source has **two**.
- Measured open at 1440 px: **179.4 × 182 at `x = 1054.6, y = 283.8`** — right-aligned with the
  circle, starting just under it.
- `.cl-dropdown-toggle::after{display:none}` and **no** `.caret` rule → **no caret triangle**.
- Behaviour (from `js/snippet.js`): opens on **hover** (`mouseenter`/`mouseleave` on the
  `.cl-dropdown`) **and** on click (`data-toggle="dropdown"`); `ArrowDown` on the trigger opens and
  focuses the first item; `ArrowDown`/`ArrowUp` move between items; `Escape` closes and refocuses
  the trigger; outside click and item activation close. `aria-expanded` is kept in sync.
- Recreation: own five menu entries, `lucide`-free copy, hover open + click open + full keyboard
  support + outside-click close, `aria-haspopup`/`aria-expanded`/`aria-controls` on the trigger.

### 7 — Toggler (`button.cl-navbar-toggler`)

- `border:none`, `color:rgba(255,255,255,0.5) !important`, `cursor:pointer`, `padding-right:0`,
  `text-transform:uppercase`, `font-size:16px`, `letter-spacing:.1em` (measured `1.6px`), focus
  `outline:none !important`.
- Content: an inline SVG three-bar glyph (`span.fa.fa-bars`, `viewBox="0 0 1536 1792"`, wrapped in
  `<g transform="translate(0,1536) scale(1,-1)">`, `class="cl-icon"` → 16 px) + the literal word
  **`Menu`**. Measured ≈ **85.3 × 24.7** at the container's right at 420 px; `display:none` at
  ≥992 px.
- **DOM order:** brand → **toggler** → collapse wrapper (this variant has **no** social block, so
  the toggler is the second child — the `-14` sibling's toggler is third).
- Recreation: a real `<button>` with a `lucide` `Menu` glyph + uppercase label,
  `aria-expanded`/`aria-controls`, and a visible focus ring (delta).

### 8 — Mobile panel (`div#ftco-nav.cl-collapse.cl-navbar-collapse`)

- The wrapper carries `flex-basis:100%; flex-grow:1; align-items:center` **outside** any media
  query, so the opened panel takes a **full-width line below** the header row (not a dropdown
  overlay): measured **360 × 310.9** at 420 px with the card growing **66 → 376.9 px**.
- Items stack (`flex-direction:column`), list `padding-bottom:10px`, each row `padding:.9rem 0`
  (**52.2 px**), resting `rgba(255,255,255,.7)`, hover `#fff`, current `#fff`; the cart keeps its
  40 px amber ring.
- Height animation: `.cl-collapsing{height:0; overflow:hidden; transition:height .35s ease}` (the
  source's `snippet.js` reproduces Bootstrap 4's collapse and toggles `cl-show` + `cl-collapsed` —
  ⚠️ the sheet styles **no** `cl-collapsed` rule; **zero** occurrences).
- Recreation: a React disclosure with `aria-expanded`/`aria-controls`, `0.35s` height transition
  removed under `prefers-reduced-motion: reduce`, hidden items not focusable.

### 9 — No wrap at any width

At **375** and **320 px** the card is **66 px**, exactly as at 991 px: the header line carries only
the wordmark (58.9) and the toggler (85.3), so it never wraps. Do **not** port the `-14` sibling's
two-line 91 px wrap at ≤~420 px — its social row is what caused that.

### 10 — Materialised sections (delta) + footer (delta)

The source's page is short, does not scroll, and **eleven** of its twelve links point at nothing.
The recreation materialises all eleven as real destinations (five in-app with `scroll-margin-top`,
five dropdown items and the cart trigger resolving to real routes/anchors), adds sections of the
source's *kinds* (intro/home, current-page, blocks for the plain rows, a shop/cart block) so the
non-sticky card genuinely scrolls away, and adds a minimal footer linking
`https://www.componentdock.com/` ("Component Dock") with a computed year.

## Source → React adaptation

| Source (ColorLib `website-menu-15`) | Recreation (`apps/davit`) |
| --- | --- |
| `section.ftco-section` — `padding:7em 0`, `#fafafa` page | `<section className="py-28 bg-[#fafafa]">` |
| `h2.heading-section` — `Website menu #05`, `28px/400/lh1.5/#000` | own heading, `text-[28px] font-normal leading-[1.5] text-black` |
| `nav.ftco-navbar-light` — white, `padding:10px`, `5px` radius, shadow | `bg-white p-[10px] rounded-[5px] shadow-[0_5px_20px_-17px_rgba(0,0,0,0.34)] relative z-[3] max-lg:bg-black max-lg:p-[10px_15px]` |
| `a.cl-navbar-brand` — `Logo`, 20px/700/uppercase, `#000` | own brand, `text-[20px] font-bold uppercase text-black max-lg:text-white py-[5px] mr-4` |
| 5 × `.cl-nav-item > .cl-nav-link` — 13px uppercase `#333`, `19.2px 20px`, hover/current `#fec771` | one `navItems` data array → `ul.ml-auto mr-4` with `text-[13px] uppercase tracking-[1px] text-[#333333] px-5 py-[19.2px] hover:text-[#fec771]`, current row `#fec771` + `aria-current="page"` (mobile `#fff`) |
| `a.icon-cart` — 40 × 40, `1px solid #fec771`, `50%`, amber glyph | last list item with `lucide` `ShoppingCart` in `size-10 rounded-full border border-[#fec771] text-[#fec771]` |
| `.cl-dropdown-menu` + 5 × `.cl-dropdown-item` (`Action`…) + 2 dividers | own `cartMenuItems` → white `rounded-[4px] p-0 shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)]` panel, `text-[12px] text-black px-6 py-[4px] hover:bg-[#fec771] hover:text-white`, two `border-t border-[#e9ecef]` dividers, hover/click/arrow/Escape behaviour |
| `button.cl-navbar-toggler` — inline SVG bars + `Menu`, `rgba(255,255,255,.5)` | real `<button>` + `lucide` `Menu` 16 px + uppercase 16 px label `tracking-[0.1em]`, `aria-expanded`/`aria-controls`, `0.35s` height panel, items `rgba(255,255,255,.7)` |
| 11 × dead `href="#"` | 5 in-app destinations + 5 dropdown destinations + the cart trigger target |
| 8 × Roboto woff2 (247,856 B, never render) + no Poppins webfont | one Google Fonts `<link>` for Poppins 400/500/700 |
| no footer | footer linking `https://www.componentdock.com/` + computed year |

## Sibling comparison (read before prepping 16+)

| | `-13` → **capstan** | `-14` → **windlass** | `-15` → **davit** (this one) |
| --- | --- | --- | --- |
| card/bar surface | **transparent** strip with `1px rgba(0,0,0,.05)` hairlines | **white card**, `5 px` radius, soft shadow over `#fafafa` | **white card**, `5 px` radius, soft shadow over `#fafafa` |
| page bg | `#fff` | `#fafafa` | `#fafafa` |
| rows | **6**, **centred** (`m-auto`) | 5, right-aligned, `14 px` sentence case | **5**, right-aligned, **`13 px` UPPERCASE + `letter-spacing:1px`** |
| row height | — | 63.6 px (card 84 px) | **61.8 px** (card **81.8 px**) |
| accent | teal **underline wipe** (`scaleX` 0→1, `0.5s`) | pink **`#fc7fb2` text only** + pink circle hover fill | **amber `#fec771` text only** + amber ring/glyph + amber dropdown hover fill |
| trailing block | none | **4 × 40 px social circles** (`order:13`, 30 px mobile) | **1 × 40 px cart circle** — the list's 6th item, **no `order`** |
| dropdown / search | `Page` dropdown (4 items) + a `257 × 46` search field hidden <768 px | **neither** | **cart dropdown** (5 items + 2 dividers, hover + click + keyboard), **no search field** |
| sheet size | 21,762 B | 14,904 B | **18,643 B** (adds the `.cl-dropdown*` family) |
| mobile card | `#000` strip, toggler **third in DOM**, `68 px` | `#000` card 66 px (**91 px** wrapped ≤~420 px) | `#000` card **66 px at every width — never wraps** |
| mobile rows | — | `padding:.5rem 0`, list `padding-bottom:10px` | **`padding:.9rem 0`**, list `padding-bottom:10px` |
| links | 10 dead `href="#"` | 9 dead `href="#"` | **11** dead `href="#"` (12 total) |

Naming run: menutree · slidenav · navpill · menuribbon · starboard · larboard · topdeck ·
bowsprit · gangway · halyard · ensign · gunwale · capstan · windlass · **davit** — keep it
nautical and single-word for `-16` … `-20`.
