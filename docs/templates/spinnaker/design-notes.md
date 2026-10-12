# Spinnaker — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V18"** (source slug `website-menu-18`) — the Website Menus
family's **mega-menu variant**: an **inset navy rounded bar** with left brand + right-aligned
amber-hover rows, whose fourth row opens a **full-bar-width panel of four `25 %` columns** (four plain
links first, then **three image cards**) — and the family's only sibling that ships **its own
photographs**. Its features, in order of visual weight:

- a **centred heading band** (`section.ftco-section{padding:7em 0}` = `112px 0`) over a **`#fafafa`**
  page, carrying one `28 px` black heading whose source text reads `Website menu #08`;
- the **bar, INSET inside the family's `.cl-container` tiers** (`1140/960/720/540/100 %` with `15 px`
  gutters → bar = tier − 30 px: measured **`1110 × 83.6 @ x = 165, y = 210`** at 1440 px,
  **`930 × 83.6`** at 992 px), surface **`#1c2938`** (`padding:10px`), **`border-radius:5px`**,
  `box-shadow:0 5px 20px -17px rgba(0,0,0,.34)`, `z-index:3`, `width:inherit`,
  `position:relative` — **never** sticky (`sticky`/`fixed` appears **zero** times in the sheet);
- a **brand at the bar's left** (`20 px`/`700`/uppercase `#fff`, `padding:5px 0`, `margin-right:16px`,
  inherited `line-height:1.8` → measured **`124.4 × 46 @ x = 190, y = 228.8`**) that is the page's only
  anchor with a real destination;
- **four `14 px`/`400` rows at the bar's right**, `padding:19.2px 20px` (`1.2rem 20px`) → **`63.6 px`**
  tall (they *set* the `83.6 px` bar), ink **`#e6e6e6`**, **sentence case** (no `text-transform`, no
  `letter-spacing`), **right-aligned by `margin-left:auto`** (`cl-ml-auto`, measured **613.3 px** of
  auto margin; the list at `x = 943.8 → 1250.1` at 1440 px), hover ink the accent **`#fec771`**, with
  **no** underline, slab or pseudo-element decoration anywhere in this sheet;
- the fourth row's trigger carrying a **rendered `8 × 4` `currentColor` caret**
  (`border-top:4px solid currentColor`, `margin-left:3.57px`, `vertical-align:3.57px`) — the only row
  with one;
- the **mega panel — this variant's signature**: `display:none` → `block` (`.cl-show`), **`width:100 %`
  of the bar**, `left:0`, `top:100%`, **`margin-top:2px`**, surface `#fff`, `border:none`,
  **`border-radius:4px`**, **`padding:24px`** (`cl-p-4`), `z-index:1000`,
  `box-shadow:0 10px 34px -20px rgba(0,0,0,.41)` — measured **`1110 × 370.8 @ x = 165, y = 295.6`**
  at 1440 px (flush with the bar's left edge, 2 px under its bottom), **`1110 × 370.8`** at 1200 px and
  **`930 × 370.8`** at 992 px. It hangs off the **bar** — not the trigger — because the trigger's `li`
  carries `cl-position-static` (`position:static !important`) and the bar is the nearest
  `position:relative` ancestor;
- inside it an inner `cl-row` (`margin:0 -15px`, `flex-wrap:wrap`) measured **`1092 @ x = 174`** with
  **four `div.cl-col-md-3`** (`flex:0 0 25%; max-width:25%; padding:0 15px`) — **`273 × 322.8`** each at
  `x = 174, 447, 720, 993` (1440 px), **`225.4`** at 1200 px, **`180.4`** at 992 px;
- the **first** column holding **four** `a.cl-dropdown-item` — **`243 × 52.6`** at `x = 189`,
  `y = 319.6 / 372.2 / 424.8 / 477.3` — `font-size:12px`, `color:#000`, **`padding:15px 20px`**,
  **`border-bottom:1px solid rgba(0,0,0,0.1)`**, `white-space:nowrap`, `:hover,:focus` →
  **`background:#fec771; color:#fff`** (own strings);
- the **other three** columns each holding an image card (`cl-d-none cl-d-md-block`): `a.img` =
  `display:block; width:100%;` **`height:250px`**; `background-size:cover` / `no-repeat` /
  `center center`; **square** (no radius); **`margin-bottom:20px`** — measured **`243 × 250 @ y =
  319.6`** — over `div.text` (**`243 × 52.8 @ y = 589.6`**) whose `h3` is **`16 px`/`600`/`#000`
  (`margin-bottom:0`, `line-height:1.5`)** with its link forced to **`#000`** (the variant's
  `.text h3 a{color:#000}` beats the amber `a` colour) and whose `span` is **`14 px`
  `rgba(0,0,0,0.2)`**; image + margin + text = **322.8 px**, and 24 + 322.8 + 24 = the **370.8 px**
  panel;
- below **`992 px`** the bar turns **`#000`** with `padding:10px 15px` (its `5 px` radius and its
  shadow stay) and collapses to **`66 px`** (10 + 46 + 10), showing a **right-aligned** `☰ MENU`
  toggler (`rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`,
  `padding:4px 0 4px 12px`, measured **`85.3 × 24.7`**; the bar's **second** child, after the brand)
  that expands an **in-flow full-width** panel (`flex-basis:100%`, `ul{padding-bottom:10px}`,
  `transition:height .35s ease`, off under `prefers-reduced-motion`) of four **`54 px`** rows
  (`padding:14.4px 0`, ink `rgba(255,255,255,0.7)`, `#fff` on hover, **no** bottom rule) — measured
  panel **438.3 px** and expanded bar **504.3 px** at 375/767 px, panel **574.7 px** and bar
  **640.7 px** at 768–991 px;
- inside that panel the mega panel becomes an **in-flow static block** (`position:static`,
  `width:100%`) over **`#202020`** with **`padding:0 !important`** and its `4 px` radius kept, its
  items `rgba(255,255,255,0.8)` with `rgba(255,255,255,0.1)` rules — but it is **not permanently
  expanded** (the `-16`/`-17` siblings force `display:block !important`; this sheet does not): it still
  opens on hover/click;
- below **`768 px`** the three image columns are `display:none`, so the panel is **210.4 px** of four
  links (measured `300`/`480 px` wide, items `300`/`480 × 52.6`); at **768–991 px** they reappear as four
  **`172.5 px`** columns with **`142.5 × 250`** images and **two-line** captions (`76.8 px`, panel
  **346.8 px**) — and because the captions keep their desktop `#000` / `rgba(0,0,0,0.2)` inks on the
  `#202020` surface, **they are effectively invisible there** (confirmed in the 768 px render).

The source page holds **nothing else** — no content sections, no footer, no second page, no sticky
chrome — and is shorter than the viewport: at 1440 × 900 `documentElement.scrollHeight === clientHeight`
(900 = 900) and `scrollWidth === innerWidth`. **14** of its **15** anchors are dead `href="#"` (the 15th
is the brand's `index.html`).

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/website-menu-18/` | **200**, 108,883 B, sha256 `c0607286…`, title *"Website Menu V18 - Free Mega Menu Template 2026 - Colorlib"*, `datePublished` 2021-03-09T14:27:42+00:00, `dateModified` 2026-09-25T10:42:07+00:00, author Rok Krivec, description *"A free mega menu template with a responsive structure for images and text. Framework-free and Bootstrap-compatible."* |
| Slug-only preview | `https://preview.colorlib.com/theme/website-menu-18/` | **404** (family-wide gap — **not** a dead preview) |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/website-menu-18/` | **200**, 4,190 B, `<title>Website menu 08</title>`, sha256 `bf036207…` |
| Stylesheet | `…/bootstrap/website-menu-18/css/style.css?v=c3576057` | **200**, 17,508 B, 904 lines, 121 top-level rule blocks, 17 `@media`, 4 `@font-face`, **0** `sticky`/`fixed`, sha256 `a443a4ab…` |
| Behaviour JS | `…/bootstrap/website-menu-18/js/snippet.js?v=ff9c894b` | **200**, 5,798 B, sha256 `1f0367fa…` — the family's shared script (hover dropdown + collapse + dropdown data-API) |
| Snippet archive | `https://preview.colorlib.com/downloads/free/website-menu-18.zip` | **200**, 407,923 B ("398 KB"), sha256 `3a4aeb87…`; ships `index.html` 3,987 B, `css/style.css` + `js/snippet.js` **byte-identical** to the live copies, `README.md` 1,264 B, **`images/img-1..3.jpg`** (58,438 / 41,713 / 60,305 B; 1000 × 889, 1000 × 667, 1000 × 1500), 8 Roboto woff2 (247,856 B = 60.8 %) |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-18.jpg` | **200**, served **AVIF** despite the `.jpg` name, 16,481 B, 1200 × 972, sha256 `2d0beb89…` → PNG 122,184 B, inspected visually |
| `diff` live ↔ archive `index.html` | — | **head-only** (two `noindex` metas, `cdnjs` `dns-prefetch`, `fetchpriority`, `?v=` busters) — the archive is the live preview's readable twin |

Everything below was read from the sheet by `curl` **and** re-read in the browser (byte-identical,
sha256 `a443a4ab…`), then cross-checked against the rendered pixels at 1440, 1200, 992, 991, 768, 767
and 375 px.

## DOM skeleton (live preview, 4,190 B — archive twin 3,987 B)

```
section.ftco-section                                  (padding:7em 0, no horizontal padding)
  div.cl-container > div.cl-row.cl-justify-content-center
    div.cl-col-md-6.cl-text-center.cl-mb-5 > h2.heading-section        "Website menu #08"
  div.cl-container                                    (1140/960/720/540 tiers, 15px gutters)
    nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.ftco_navbar.ftco-navbar-light
      div.cl-container                                (3 children, in this order)
        a.cl-navbar-brand[href=index.html]             "Megawidth"
        button.cl-navbar-toggler[data-toggle=collapse][data-target=#ftco-nav][aria-expanded=false]
          span.fa.fa-bars > svg (inline 3-bar path)  +  "Menu"
        div#ftco-nav.cl-collapse.cl-navbar-collapse
          ul.cl-navbar-nav.cl-ml-auto                 (right-aligned by margin-left:auto)
            li.cl-nav-item            > a.cl-nav-link                  "Home"
            li.cl-nav-item            > a.cl-nav-link                  "About"
            li.cl-nav-item            > a.cl-nav-link                  "Blog"
            li.cl-nav-item.cl-dropdown.cl-position-static              (position:static !important)
              a.cl-nav-link.cl-dropdown-toggle#dropdown04[aria-haspopup][aria-expanded]   "Page"
                div.cl-dropdown-menu.cl-p-4[aria-labelledby=dropdown04]
                  div.cl-row
                    div.cl-col-md-3                        four a.cl-dropdown-item "Page 1"…"Page 4"
                    div.cl-col-md-3.cl-d-none.cl-d-md-block
                      a.img[style="background-image:url(images/img-1.jpg)"]
                      div.text > h3 > a  "Amazing Architecture"   +   span  "Architect"
                    div.cl-col-md-3.cl-d-none.cl-d-md-block   (img-2.jpg)
                    div.cl-col-md-3.cl-d-none.cl-d-md-block   (img-3.jpg)
  script src=js/snippet.js
```

Note the two inversions against the `-17` sibling: the **bar is inset inside a `.cl-container`** (not
full-bleed inside a `cl-container-fluid`), and the **toggler is the bar's second child, after the
brand** (below 992 px the `-17` sibling puts it first). `cl-position-static` on the dropdown `li` is
**load-bearing** — it is what makes the full-width panel anchor to the bar.

## CSS token reference (from `css/style.css`, canonical)

| Selector | Declarations that matter |
| --- | --- |
| `body` | `font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8; background:#fafafa; color:gray` (= `#808080`) |
| `a` | `transition:.3s all ease; color:#fec771`; `a:hover,a:focus{text-decoration:none !important; outline:none !important; box-shadow:none}` |
| `h2,h3,.h2,.h3` / `.heading-section` | `line-height:1.5; font-weight:400; font-family:"Poppins", Arial, sans-serif; color:#000` / `font-size:28px; color:#000` |
| `.ftco-section` | `padding:7em 0` |
| `.ftco-navbar-light` | `background:#1c2938 !important; z-index:3; padding:10px 10px; border-radius:5px; box-shadow:0 5px 20px -17px rgba(0,0,0,.34); width:inherit` · `@max991.98{background:#000 !important; position:relative; top:0; padding:10px 15px}` |
| `.ftco-navbar-light .cl-navbar-brand` | `color:#fff; text-transform:uppercase; font-weight:700`; `:hover,:focus{color:#fff}` |
| `.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link` | `font-size:14px; padding:1.2rem 20px; font-weight:400; color:#e6e6e6; position:relative; opacity:1 !important`; `:hover{color:#fec771}` · `@max991.98{padding-left:0; padding-right:0; padding-top:.9rem; padding-bottom:.9rem; color:rgba(255,255,255,0.7)}` + `:hover{color:#fff}` |
| `.ftco-navbar-light .cl-navbar-nav` | `@max991.98{padding-bottom:10px}` |
| `… .cl-dropdown-menu` | `border:none; background:#fff; box-shadow:0 10px 34px -20px rgba(0,0,0,.41); border-radius:4px; width:100%` · `@max991.98{background:#202020; padding:0 !important}` |
| `… .cl-dropdown-menu .cl-dropdown-item` | `font-size:12px; color:#000; padding:15px 20px; border-bottom:1px solid rgba(0,0,0,0.1)`; `:hover,:focus{background:#fec771; color:#fff}` · `@max991.98{color:rgba(255,255,255,0.8); border-color:rgba(255,255,255,0.1)}` |
| `… .cl-dropdown-menu .img` | `width:100%; display:block; height:250px; margin-bottom:20px` (+ `.img{background-size:cover; background-repeat:no-repeat; background-position:center center}`) |
| `… .cl-dropdown-menu .text h3` / `h3 a` / `span` | `font-size:16px; font-weight:600; margin-bottom:0` / `color:#000` / `font-size:14px; color:rgba(0,0,0,0.2)` |
| `.cl-nav-item.active > a` | `color:#fec771` · `@max991.98{color:#fff}` — **dead**: no `li` carries `.active` in this markup |
| `.ftco-navbar-light .cl-navbar-toggler` | `border:none; color:rgba(255,255,255,0.5) !important; cursor:pointer; padding-right:0; text-transform:uppercase; font-size:16px; letter-spacing:.1em`; `:focus{outline:none !important}` |
| `.cl-container` | `width:100%; padding:0 15px; margin:auto` + `max-width:540px` ≥576, `720` ≥768, `960` ≥992, `1140` ≥1200 |
| `.cl-row` | `display:flex; flex-wrap:wrap; margin:0 -15px` |
| `.cl-col-md-3` / `.cl-col-md-6` | base `width:100%; position:relative; padding:0 15px`; `@min768` `flex:0 0 25%; max-width:25%` / `50%` |
| `.cl-navbar` / `> .cl-container` | `position:relative; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; padding:.5rem 1rem` (the variant adds `10px` on top of the base `padding`) |
| `.cl-navbar-brand` (base) | `display:inline-block; padding:.3125rem 0; margin-right:1rem; font-size:1.25rem; line-height:inherit; white-space:nowrap` |
| `.cl-navbar-nav` | `display:flex; flex-direction:column; padding-left:0; margin-bottom:0; list-style:none`; `… .cl-nav-link{padding:0} `; `… .cl-dropdown-menu{position:static; float:none}` |
| `.cl-navbar-collapse` | `flex-basis:100%; flex-grow:1; align-items:center` |
| `@min992 .cl-navbar-expand-lg` | nav `flex-direction:row`; `> .cl-container{flex-wrap:nowrap}`; `.cl-navbar-collapse{display:flex !important; flex-basis:auto}`; `.cl-navbar-toggler{display:none}`; `… .cl-dropdown-menu{position:absolute}`; `… .cl-nav-link{padding:0 .5rem}` |
| `@max991.98 .cl-navbar-expand-lg > .cl-container` | `padding-right:0; padding-left:0` |
| `.cl-nav-link` | `display:block; padding:.5rem 1rem` (`:hover,:focus{text-decoration:none}`) |
| `.cl-dropdown-menu` (base) | `position:absolute; top:100%; left:0; z-index:1000; display:none; float:left; min-width:10rem; padding:.5rem 0; margin:.125rem 0 0; font-size:1rem; color:#212529; text-align:left; background:#fff; border:1px solid rgba(0,0,0,.15); border-radius:.25rem` (surface/border/radius overridden) |
| `.cl-dropdown-menu.cl-show` / `.cl-collapse:not(.cl-show)` | `display:block` / `display:none` |
| `.cl-dropdown-toggle::after` | `display:inline-block; margin-left:.255em; vertical-align:.255em; content:""; border-top:.3em solid; border-right:.3em solid transparent; border-left:.3em solid transparent` → rendered **8 × 4** `currentColor` |
| `.cl-dropdown-item` (base) | `display:block; width:100%; padding:.25rem 1.5rem; clear:both; font-weight:400; color:#212529; white-space:nowrap` | 
| `.cl-collapsing` | `position:relative; height:0; overflow:hidden; transition:height .35s ease` (off under reduced motion) |
| `.cl-position-static` / `.cl-p-4` / `.cl-ml-auto` / `.cl-mb-5` / `.cl-text-center` / `.cl-justify-content-center` / `.cl-d-none` / `.cl-d-md-block` | `position:static !important` / `padding:1.5rem !important` / `margin-left:auto !important` / `margin-bottom:3rem !important` / `text-align:center !important` / `justify-content:center !important` / `display:none !important` / `@min768{display:block !important}` |
| `.cl-icon` / `.fa` | `height:1em; width:auto; fill:currentColor; display:inline-block` / `display:inline-block; line-height:1; font-size:inherit; font-style:normal` |
| **dead** | the `:where(html) … all: revert` reset (lines 8–54), `@media print` (incl. `@page{size:a3}`, `.cl-navbar{display:none}`), the Bootstrap palette (`#007bff`/`#0056b3` links, `#f8f9fa`, `#16181b`, `#6c757d`, `#212529`), the base system body stack, `.fade`, `.cl-dropdown-menu-right`, `.cl-nav-link.disabled`, `.cl-dropdown-item.active`/`:disabled`, `.cl-navbar-toggler:hover/:focus`, `.cl-navbar-brand:hover/:focus` (`#007bff`), `.cl-dropdown-toggle:empty::after` |

## Screenshot analysis (1200 × 972, AVIF → PNG)

The mock shows a browser window over `preview.colorlib.com`:

1. **Heading** — `Website menu #08`, black, light weight, centred in the empty upper band.
2. **The bar** — the rounded **navy** slab, inset (roughly the width of a 1140 px tier, not
   edge-to-edge), with `MEGAWIDTH` at its left in white uppercase and `Home` · `About` · `Blog` ·
   `Page ▾` at its right. `Page` renders in **amber** — the mock was captured with the cursor over the
   trigger, and the sheet has no "open" rule, so that colour is the `:hover{color:#fec771}` state
   (verified: at rest all four rows compute `rgb(230,230,230)`; the sheet's only permanent amber on a
   row is the dead `.cl-nav-item.active > a` rule).
3. **The mega panel** — directly under the bar, spanning its **full width**, white with the
   `0 10px 34px -20px rgba(0,0,0,.41)` shadow and a 4 px radius: `Page 1`…`Page 4` in its first
   quarter, each over a hairline (the `rgba(0,0,0,.1)` bottom rule), then **three image cards** —
   a hanging plant on a wall, a vase of blossom on a wooden board, a pink balloon over a white chair —
   each titled **`Amazing Architecture`** over **`Architect`**.
4. **Below** — nothing at all; the page is empty `#fafafa` down to the fold.

Cross-checked against the live render at 1440 px (panel exactly as wide as the bar, 2 px below it;
three columns of image cards; the caret visible after `Page`) and at 768 px (the black mobile bar with
the panel's image cards over `#202020`, whose near-black captions confirm pitfall #7).

## Section-by-section

### 1 — Page frame and heading band (`section.ftco-section`)

`padding:112px 0`, no horizontal padding, over `#fafafa`. `h2.heading-section` = 28 px/400/42 px
`#000`, `margin-bottom:8px` + `48px` block margin, centred in a `cl-col-md-6` (50 % at ≥768 px),
measured `540 × 42 @ x = 450, y = 112` inside a `570 × 50` column at `x = 435`. The two `.cl-container`
blocks in the section share the same tier; the second one wraps the bar. The bar's top edge is
**210 px** (112 + 42 + 8 + 48) at every width; the page is shorter than the viewport at desktop widths
(content ends ≈ 405.6 px, or 776.4 px with the panel open).

### 2 — The bar (`nav.ftco-navbar-light` inside `div.cl-container`)

Wrapper `1140 @ x = 150` (1440 px) / `960 @ x = 16` (992) / `720 @ x = 24` (768) / `720 @ x = 135.5`
(991) / `540 @ x = 113.5` (767) / `375 @ x = 0` (375), always `padding:0 15px`. The bar itself:
`#1c2938`, `padding:10px`, `border-radius:5px`, `0 5px 20px -17px rgba(0,0,0,.34)`, `z-index:3`,
`width:inherit` → measured **`1110 × 83.6 @ x = 165, y = 210`** (1440 px), **`1110 × 83.6 @ x = 45`**
(1200), **`930 × 83.6 @ x = 31`** (992), and **`#000` / `66 px`** at every width ≤991 px. Its inner
container (`padding:0 15px`, `justify-content:space-between`, `flex-wrap:nowrap` at ≥992 px) measures
`1090 × 63.6 @ x = 175, y = 220` and holds brand → toggler → collapse.

### 3 — Brand (`a.cl-navbar-brand`)

`20 px`/`700`/uppercase `#fff`, `padding:5px 0`, `margin-right:16px`, `line-height:inherit` (1.8 → 36
px) → **`124.4 × 46 @ x = 190, y = 228.8`** at 1440 px, `124.4 × 46` at every mobile width as well
(`x = 30` at 375 px). Its colour is identical at rest and on hover (`.ftco-navbar-light .cl-navbar-brand
:hover,:focus{color:#fff}`) — restore a hover affordance and a focus ring (delta). It is the only anchor
with a real `href`.

### 4 — The rows

Four `li.cl-nav-item > a.cl-nav-link` in source order: Home, About, Blog, Page (the dropdown). Each
`14 px`/`400`/`#e6e6e6`, `padding:19.2px 20px`, `line-height:25.2px` → **`63.6 px`**, `position:relative`,
`opacity:1 !important`; widths at 1440 px: **77.4 / 76.6 / 68 / 84.3** (Page's caret adds ≈ 11.6 px).
The list is `306.3` wide at `x = 943.8` (1440 px) with **`margin-left:auto`** = 613.3 px — right
aligned. At 1200 px the list sits at `x = 823.8 → 1130.1`. There is **no** uppercase transform, no
tracking and **no** decorative pseudo-element: the hover treatment is a plain colour swap to
`#fec771`. Below 992 px the list is a full-width column of `54 px` rows (`padding:14.4px 0`) in
`rgba(255,255,255,0.7)` (`#fff` on hover) with no bottom rule.

### 5 — The caret

`.cl-dropdown-toggle::after`: `content:""`, `display:inline-block`, `border-top:4px solid
currentColor`, `border-right/left:4px solid transparent`, `margin-left:3.57px`, `vertical-align:3.57px`
→ a rendered **8 × 4** ▾ after `Page`, following the label's colour (`#e6e6e6` at rest, `#fec771` on
hover, `rgba(255,255,255,0.7)`/`#fff` on mobile). `getComputedStyle(el,'::after')` can report the
element's own box (`content:"normal"`, `border-top-width:0px`) if the pseudo is not generated at read
time — read it on a settled page, as done here.

### 6 — The mega panel (`div.cl-dropdown-menu.cl-p-4`)

White, `border:none`, `border-radius:4px`, `padding:24px`, `box-shadow:0 10px 34px -20px rgba(0,0,0,.41)`,
`position:absolute; top:100%; left:0; width:100%; z-index:1000; margin-top:2px`, anchored to the bar
via `li.cl-position-static`. Measured open **`1110 × 370.8 @ x = 165, y = 295.6`** (1440 px),
**`1110 × 370.8`** (1200), **`930 × 370.8`** (992). Inside: `div.cl-row` `1092 @ x = 174` (`margin:0
-15px`), four `div.cl-col-md-3` of `25 %` → **`273 × 322.8`** at `x = 174, 447, 720, 993` (1440 px),
`225.4` (1200), `180.4` (992).

### 7 — The link column and the image cards

Column 1: four `a.cl-dropdown-item` **`243 × 52.6`** at `x = 189` and
`y = 319.6 / 372.2 / 424.8 / 477.3` — `12 px`, `#000`, `padding:15px 20px`, `border-bottom:1px solid
`rgba(0,0,0,0.1)`, `white-space:nowrap`, hover `#fec771` + `#fff`. Title corner: the card title
block measures **164.8 × 17** at `x = 462, y = 592.6` (16 px/600, `line-height:24px`) with its meta
span **54.5 × 16** at `y = 619.6`, so it fits on **one line** at every width ≥992 px (constant
370.8 px panel there); at 768–991 px the `172.5 px` columns push it to **two lines** (76.8 px) and the
panel to 346.8 px.

Columns 2–4: `a.img` (`display:block; width:100%; height:250px; margin-bottom:20px;
background-size:cover; background-position:center center`, square corners) measured **`243 × 250 @
y = 319.6`**, then `div.text` **`243 × 52.8 @ y = 589.6`** with `h3` `16 px`/`600`/`margin-bottom:0`
(its link forced to `#000`) and `span` `14 px` `rgba(0,0,0,0.2)`. Card copy: `Amazing Architecture` /
`Architect` — own copy in the recreation.

### 8 — The mobile chrome and the in-flow panel

Below 992 px: bar **`#000`**, `padding:10px 15px`, inner container `padding:0`, **`66 px`** collapsed;
toggler `rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`, `padding:4px 0 4px 12px`,
`85.3 × 24.7`, right-aligned (`x = 244.7` at 375 px, `538.2` at 767, `628.7` at 768, `740.2` at 991).
Panel = `flex-basis:100%`, `ul{padding-bottom:10px}`, height-animated `0.35s ease`; measured expanded
at 375 px: panel **438.3** (rows at `y = 266 / 320 / 373.9 / 427.9`, menu at `483.9`) with the bar at
**504.3 px** and the document at **826 px** (scrollbar appears); at 767 px the same (panel `480` wide);
at 768 px: panel **574.7**, bar **640.7**, menu **346.8** (`660` wide, columns `172.5`, images
`142.5 × 250`, captions `76.8`), document **963 px** (the scrollbar shifts the container by ~7.5 px).

### 9 — The mega panel below 992 px

`position:static`, `width:100%`, surface **`#202020`**, **`padding:0 !important`**, `4 px` radius kept,
the desktop shadow still declared; items `rgba(255,255,255,0.8)` with `rgba(255,255,255,0.1)` rules —
measured **`300 × 210.4`** at 375 px, **`480 × 210.4`** at 767, **`660 × 346.8`** at 768/991. The three
image columns are `display:none` **below 768 px** and `block` from 768 px up. It is **not** expanded by
default (no `display:block !important` rule here — unlike `-16`/`-17`); the script's
`mouseenter`/`click` handlers still add `cl-show` to the `li` and the menu. Its captions keep desktop
`#000`/`rgba(0,0,0,0.2)` inks on the `#202020` surface, i.e. **unreadable** (delta: restore light ink).

### 10 — Materialised sections (delta) + footer (delta)

The source has **nothing below the bar**: the recreation must add real content of the same *kinds* as
the source's own destinations — a home/intro block for the brand, one block per plain row, four item
destination blocks, three project/news blocks behind the mega cards and an editorial block for the
mega panel — plus the mandatory `https://www.componentdock.com/` footer line (which the source does not
have). The bar's bottom edge is ≈ **293.6 px**, so use `scroll-margin-top` ≥ `300px` on every target.
Imagery comes from `https://picsum.photos/seed/spinnaker-<n>/<w>/<h>` (the source's three photographs
are never copied).

## Source → React adaptation

| Source | Recreation |
| --- | --- |
| `div.cl-container` + `nav.ftco-navbar-light` | `<Navbar />` — inset bar inside a centred `max-w-[1140px] px-[15px]` container, `bg-bar` → `bg-[#000]` below 992 px, `p-[10px]`/`py-[10px] px-[15px]`, `rounded-[5px]`, the family's `0 5px 20px -17px rgba(0,0,0,.34)` shadow, `relative` (never sticky) |
| `a.cl-navbar-brand` | `<Brand />` — own wordmark, `text-[20px] font-bold uppercase text-white py-[5px] mr-4`, ≈ 124 × 46, links to the top, hover affordance + `focus-visible` ring |
| `ul.cl-navbar-nav.cl-ml-auto` + `li/a.cl-nav-link` | `<NavRow />` list **right-aligned with `ml-auto`**, rows `text-[14px] px-5 py-[19.2px] text-[#e6e6e6] hover:text-accent`, `aria-current` on the current row |
| `.cl-dropdown-menu.cl-p-4` anchored to the bar | `<MegaPanel />` — `absolute left-0 top-full w-full mt-[2px] bg-white p-6 rounded-[4px] shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)]` inside the bar, with the trigger's `li` `static` |
| `div.cl-row` + four `div.cl-col-md-3` | mega grid — `-mx-[15px]` row + `w-1/4 px-[15px]` columns, **links first** then three cards |
| `a.cl-dropdown-item` ×4 | `<MegaItem />` — own strings, `text-[12px] px-5 py-[15px] border-b border-black/10 hover:bg-accent hover:text-white` |
| `a.img` + `div.text` | `<MegaCard />` — `h-[250px] bg-cover bg-center mb-5` image from picsum, `text-[16px] font-semibold` title link, `text-[14px] text-black/20` meta |
| `button.cl-navbar-toggler` + `div#ftco-nav.cl-collapse` | toggler `<button aria-expanded>` **second in the bar**, bars glyph + `MENU`; panel `basis-full` with height animation, rows `py-[14.4px] text-white/70` |
| `snippet.js` (hover dropdown, collapse, dropdown data-API) | React state + effects: hover/click toggle, `ArrowDown`/`ArrowUp` roving focus, `Escape` (+ refocus), outside click, `aria-*` in sync, reduced-motion honoured |
| inline SVG paths (bars glyph) | `lucide-react` (`Menu` for the toggler, `ChevronDown` for the caret) — never copy the paths |
| `@font-face` Roboto ×8 + `"Poppins"` stack that never loads | one Google Fonts Poppins `<link>` in `index.html` (delta) |
| `images/img-1..3.jpg` referenced from inline `style` attributes | `https://picsum.photos/seed/spinnaker-<n>/<w>/<h>`; no inline `background-image` URLs in markup (use a styled prop/`style` object with the picsum URL only) |
| dead `href="#"` (14 anchors) | real `id`/route targets + `scroll-margin-top` ≥ 300 px |

## Deltas (documented, deliberate)

1. New name **spinnaker** (apps/spinnaker) + own brand, own four row labels, own four panel items, own
   card copy, own heading and own copy — no source string is reused.
2. **14 dead `href="#"`** become real destinations with real content blocks behind them.
3. **Real `lucide-react` icons** for the toggler's bars glyph and the caret (the source's inline SVG
   path is not copied).
4. **A real Google Fonts Poppins `<link>`** instead of eight dead self-hosted Roboto woff2 files
   (247,856 B = 60.8 % of the download).
5. **Restored `focus-visible` rings** on rows, the brand, the toggler, the items and the cards (the
   sheet strips every outline and paints no focus state anywhere).
6. `aria-current="page"` on the current row; `aria-haspopup`/`aria-expanded`/`aria-controls` on the
   mega trigger and toggler; reduced-motion handling for the panel height animation.
7. **Legible mobile card captions**: at 768–991 px the source paints `#000`/`rgba(0,0,0,.2)` titles on a
   `#202020` surface; the recreation restores light inks for the dark mobile surface so the cards read.
8. **The open trigger is highlighted amber** while its mega panel is open — the sheet has no "open"
   rule for a row (its own mock screenshot shows the trigger in amber), so this is a deliberate,
   documented affordance.
9. **Real, non-copied imagery**: three deterministic `picsum.photos` images replace `img-1..3.jpg`
   (the only assets the source ships besides the fonts).
10. **A footer** with the mandatory Component Dock credit — the source has no footer.
11. The source's `.cl-nav-item.active > a{color:#fec771}` rule is **dead in its own markup** (no `li`
    carries `.active`) — the recreation signals the current row with `aria-current` plus a visible
    affordance instead.
12. The source's dropdown overflow guard (`m.getBoundingClientRect().right > clientWidth`) can **never**
    fire for a `width:100%` panel — omitted (or kept inert) in the recreation.

## Sibling comparison (read before prepping 19+)

The *Website Menus* family shares almost nothing but its skeleton — every slug re-declares its own
palette, bar shape, breakpoint and drop-down model. This variant's standouts against the closest
siblings:

| | `-16` sibling (**binnacle**) | `-17` sibling (**mizzen**) | **`-18` → spinnaker** |
| --- | --- | --- | --- |
| container | full-bleed fluid strip + centred bar | full-bleed fluid chrome row (`cl-container-fluid`) | **every block inside a centred `.cl-container` tier — the bar is INSET by 15 px** |
| bar surface | white desktop + mobile | `#252525` desktop / `#000` mobile, `padding:0`, no radius, no shadow | **`#1c2938` desktop / `#000` mobile, `padding:10px`, `border-radius:5px`, the old `0 5px 20px -17px rgba(0,0,0,.34)` shadow** |
| brand | inside the bar | in the chrome row, two lines, `mb-30px` | **inside the bar, single line, `20 px`/`700` uppercase** |
| rows | `32px 20px` → 83.8 px, centred, gold slab | `24px 20px` → 67.8 px, centred, hover `2 px` red underline | **`19.2px 20px` → 63.6 px, RIGHT-aligned (`ml-auto`), sentence-case `14 px` `#e6e6e6`, hover = plain amber colour swap** |
| accent | gold `#f1bc31` | pure red `#ff0000` | **amber `#fec771`** |
| drop-down | four items, permanently expanded below 992 px (white) | four items, permanently expanded below 992 px over `#000` | **a `100 %`-of-bar 4-column MEGA panel with 3 image cards, `padding:24px`, anchored to the bar, NOT permanently expanded below 992 px (`#202020`, `padding:0`)** |
| images | none | none | **three `img-N.jpg` in the cards (the family's only imagery)** |
| search / socials / phone | phone + 4 square tiles; search in the chrome | 4 circles + pill search in the chrome | **none — no strip, no search, no socials** |
| mobile bar | in-flow wrapping line | `44.7 px` collapsed / `407 px` expanded | **`66 px` collapsed / `504.3 px` expanded (438.3 px panel); `640.7 px` bar at 768–991 px because the image columns show** |

The next un-prepped items after this one are the family's **`-19`** and **`-20`**, then the wedding
section that follows them — prep each one at a time off its own live sheet; do not carry this variant's
`#1c2938`/`#fec771`, its inset rounded bar or its mega panel across without re-reading the CSS.
