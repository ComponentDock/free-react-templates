# Sponson — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V19"** (source slug `website-menu-19`) — the Website Menus
family's **fixed left side rail + floated 80 % content column + push-style off-canvas drawer**
variant. Its features, in order of visual weight:

- a **fixed left side rail** (`aside#colorlib-aside`, `position:fixed`, `top/bottom/left:0`,
  **`width:20%`**, **`height:100vh`/`100dvh`** behind `@supports (height:100dvh)`,
  `overflow-y:hidden`, **`z-index:1001`**, **`background:#fff`**, `padding:3em 3em 40px` =
  **`48px 48px 40px`**, `transition:0.5s`) — a **square, shadowless, full-height white column**; it is
  the family's only variant with a **vertical** chrome and the only one whose chrome is
  `position:fixed` at desktop widths;
- a **six-row vertical menu** (`nav#colorlib-main-menu > ul`, `margin:0; padding:0`) of
  **`22 px`/`500`/`line-height:1.5` → `33 px`** labels at **`margin:0 0 10px 0`** (a **`43 px`**
  pitch; row tops measured **48 / 91 / 134 / 177 / 220 / 263**, list **`192 × 248 @ x = 48, y = 48`**
  at 1440 px), each label **`padding:10px 0`** (a **`45 px`** link box that overhangs its `li`) and
  `position:relative`, resting in **`black`**;
- the **coral underline treatment** (`li > a::after`): **`height:2px`**, **`bottom:7px`**,
  `left:0; right:0`, **`background-color:#ff6768`**, hidden at rest (`visibility:hidden`,
  `transform:scaleX(0)`), wiped to `scaleX(1)` on hover over **`0.3s
  cubic-bezier(0.175, 0.885, 0.32, 1.275)`** — and worn **permanently**, with the coral ink, by the
  **current** row (`li.colorlib-active`);
- **`div#colorlib-main`** — the content column: `width:100%`, **`float:right`**,
  **`width:80%`** at ≥992 px, **`padding:40px`**, `transition:0.5s` (measured
  **`1152 × 592.8 @ x = 288`** at 1440 px);
- the **content band** (`section.ftco-section.cl-pt-4.cl-mb-5.ftco-intro`) — `.ftco-section`'s
  `padding:7em 0` **overridden on top by `cl-pt-4`** (`padding-top:1.5rem !important` = **`24 px`**),
  bottom **`112 px`** kept, plus **`margin-bottom:48px`** (`cl-mb-5`); measured
  `padding:24px 0px 112px`, **`1072 × 464.8 @ x = 328, y = 40`** at 1440 px;
- a **fluid container** (`div.cl-container-fluid.cl-px-3.cl-px-md-0`) that is **`width:100%` with no
  max-width tier** — `15 px` gutters, **zeroed at ≥768 px** by `cl-px-md-0` and `16 px` below — so
  the band runs **edge-to-edge** on desktop (measured `1072 @ x = 328`, `padding:0`);
- a **flex row** (`div.cl-row`, `margin:0 -15px`) whose first child is a **`100 %`** column
  (`cl-mb-4` = **`24 px`**) holding a **`32 px`/`400`/`line-height:1.5`/`#000`** heading (`.cl-h2`,
  `margin-bottom:8px`; measured `1072 × 48 @ x = 328, y = 64`) over a **`16 px`/`28.8 px`/gray** lead
  paragraph (two lines, `1072 × 57.6 @ y = 120`);
- **two `50 %` sub-columns** (`div.cl-col-md-6`, `padding:0 15px`, **`100 %` below 768 px**) each
  with a **`24 px`/`400`/`line-height:36px`/`#000`** sub-heading (`.cl-h4`) over a grey paragraph —
  measured **`551 × 175.2 @ x = 313` / `x = 864`, `y = 217.6`** at 1440 px, **`685`** stacked at
  767 px, **`278`** at 375 px;
- the **burger toggle** (`a.colorlib-nav-toggle`) — the sheet's mobile chrome:
  **`position:fixed; left:-12px; top:0; z-index:9999; padding:20px`**, `opacity:1`,
  **`visibility:hidden`** at rest and **visible only below `991.98 px`** (measured **`70 × 68.8`**),
  drawn as a **`30 × 2` `#000`** bar (`i`, `font:bold 14px/.4 Helvetica`, `text-indent:-55px`) whose
  `::before` (`top:-7px`) and `::after` (`bottom:-7px`) bars spread to `-10px`/`-10px` on hover
  (`0.2s`), and which becomes an **X** under `cl-active` (middle bar `background:transparent`, outer
  bars `rotateZ(45deg)`/`rotateZ(-45deg)`);
- the **push-style off-canvas drawer** below `991.98 px`: the rail becomes **`270 px`**,
  `translateX(-270px)`, **`background:rgba(0,0,0,0.04)`**, `padding-top:2em`; opening adds
  **`body.offcanvas`** → rail `translateX(0)` with **`background:#fff; z-index:999`**, and
  **`#colorlib-main`** and the toggle both move **`translateX(270px)`** — all over **`0.5s`**, with a
  `body{overflow-x:hidden}` guard. It closes on outside click, `scroll`, `Escape` and a second press
  (the shipped script's `onScroll`/`outside`/`Escape` behaviours). **There is no backdrop** — it is a
  push, not an overlay.

The source page holds **nothing else** — no content sections, no images, no footer, no second page,
no sticky chrome — and it is shorter than the viewport at desktop widths
(`documentElement.scrollHeight === clientHeight`, 900 = 900 at 1440 × 900; `scrollWidth ===
innerWidth`). At 375 px the stacked band grows the document to **`1190 px`**. **All 7** anchors (the
toggle + the six labels) are dead `href="#"`, and the markup carries an **orphan `</section>`** after
`#colorlib-page` (a leftover tag that closes nothing — do not reproduce it).

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/website-menu-19/` | **200**, 108,966 B, sha256 `0fe954c5…`, title *"Website Menu V19 - Free Left Sidebar Menu Template 2026 - Colorlib"*, `datePublished` 2021-03-09T14:30:29+00:00, `dateModified` 2026-09-25T10:42:07+00:00 |
| Slug-only preview | `https://preview.colorlib.com/theme/website-menu-19/` | **404** (family-wide gap — **not** a dead preview) |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/website-menu-19/` | **200**, 2,355 B, `<title>Website menu 09</title>`, sha256 `74786d30…` |
| Stylesheet | `…/bootstrap/website-menu-19/css/style.css?v=f7ba3f1d` | **200**, 13,527 B, 690 lines, 111 `{` blocks, 13 `@media`, 4 `@font-face`, sha256 `97cbf12e…` |
| Behaviour JS | `…/bootstrap/website-menu-19/js/snippet.js?v=a424998b` | **200**, 1,669 B, sha256 `d8d1aec7…` |
| Snippet archive | `https://preview.colorlib.com/downloads/free/website-menu-19.zip` | **200**, 256,269 B ("250 KB"), sha256 `fba1429c…`; ships `index.html` 2,152 B, `css/style.css` + `js/snippet.js` **byte-identical** to the live copies, `README.md` 1,264 B, 8 Roboto woff2 (247,856 B), **no `images/`** |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-19.jpg` | **200**, served **AVIF** despite the `.jpg` name, 26,121 B, 1200 × 972, sha256 `ae8241ee…` → PNG 126,376 B, inspected visually |
| `diff` live ↔ archive `index.html` | — | **head-only** (two `noindex` metas, `cdnjs` `dns-prefetch`, `fetchpriority`, `?v=` busters) — the archive is the live preview's readable twin |

Everything below was read from the sheet by `curl` **and** re-read in the browser (byte-identical,
sha256 `97cbf12e…`), then cross-checked against rendered screenshots at **1440**, **991**, **767**,
**375 px** and the **open off-canvas** state.

## Sheet anatomy

- **`:where(html) … all: revert` reset** (lines 8–54): neutralises a Bootstrap host page's base styles
  so the snippet renders identically inside one. Dead code for the recreation — drop it.
- **normalize + framework base** (lines 116–305): `box-sizing`, `html{font-family:sans-serif;
  line-height:1.15}`, the `body` system stack + **`#fff`** background + `#212529` ink (all
  **overridden** by the custom block's `body`), `p`/`ul`/`h1,h2,h4` margins, the Bootstrap palette
  (`a{color:#007bff}` / `a:hover{color:#0056b3; text-decoration:underline}`), `.cl-container-fluid`
  (`width:100%; padding:0 15px; margin:auto`), `.cl-row` (`flex; flex-wrap:wrap; margin:0 -15px`),
  `.cl-col-md-6` / `.cl-col-md-12` (+ their `@media (min-width:768px)` 50 % / 100 % rules), the `.nav`
  base, and the utilities `cl-mb-4` (`1.5rem`), `cl-mb-5` (`3rem`), `cl-px-3` (`1rem`),
  `cl-pt-4` (`1.5rem`), `cl-px-md-0` (`0` at ≥768 px) — all `!important`.
- **`@media print`** (lines 307–336): shadow resets, `a:not(.btn){text-decoration:underline}`,
  widows/orphans, **`@page{size:a3}`** and **`body{min-width:992px}`**. Dead code — drop it.
- **`@font-face`** (lines 69–107): **four** blocks, Roboto **400/700** × latin/latin-ext. The archive
  also ships `roboto-100-*` and `roboto-300-*` (never declared), and **no rule ever asks for
  Roboto** — so no webfont loads and `"Poppins", Arial, sans-serif` renders **Arial**.
- **`.cl-icon`** (109–114): `height:1em; width:auto; fill:currentColor` — the snippet's only icon
  hook, and **nothing uses it** in this variant (no inline SVG in the markup).
- **custom block** (338–689, ~350 lines): `body` + `body.offcanvas` (four rules) ·
  `a` · `a:hover,a:focus` · `h1,h2,h4` · `.ftco-section` · `#colorlib-page` · `#colorlib-aside`
  (+ `@media (prefers-reduced-motion)` and `@media (min-width:992px)` / `(max-width:991.98px)`) ·
  `#colorlib-aside #colorlib-main-menu ul` · `… ul li` · `… li a` (+ reduced-motion) · `… li a:after`
  · `… li a:hover` · `… li a:hover:after` · `… li.colorlib-active a` · `… li.colorlib-active a:after`
  · `#colorlib-main` (+ reduced-motion and `(min-width:992px)`) · `.colorlib-nav-toggle` (+ its `i`,
  `::before`/`::after`, hover, `cl-active`, `fixed`/mobile blocks and reduced-motion) ·
  `.js-fullheight` + `@supports (height:100dvh)`.
- **Namespace:** `cl-`-prefixed utilities (`cl-container-fluid`, `cl-row`, `cl-col-md-6`,
  `cl-col-md-12`, `cl-mb-4`, `cl-mb-5`, `cl-px-3`, `cl-px-md-0`, `cl-pt-4`, `cl-h2`, `cl-h4`,
  `cl-icon`) plus the variant's own `colorlib-`/`ftco-` hooks (`colorlib-page`, `colorlib-aside`,
  `colorlib-main`, `colorlib-main-menu`, `colorlib-nav-toggle`, `colorlib-active`, `js-fullheight`,
  `ftco-section`, `ftco-intro`). The word `colorlib` appears **53** times in the sheet — none of it
  may be reused. The recreation has **no dropdown, no collapse, no navbar, no search** and therefore
  none of the `-18` sibling's `cl-dropdown*`/`cl-navbar*`/`cl-collapse*` machinery.

## Structure (source document order)

```
div#colorlib-page                                   (width:100%; overflow:hidden; position:relative)
  a.js-colorlib-nav-toggle.colorlib-nav-toggle      (fixed burger; href="#"; › i)
  aside#colorlib-aside.js-fullheight[role=complementary]
    nav#colorlib-main-menu[role=navigation]
      ul
        li.colorlib-active › a[href="#"]  "Home"      ← current
        li                › a[href="#"]  "Project"
        li                › a[href="#"]  "About"
        li                › a[href="#"]  "Services"
        li                › a[href="#"]  "Blog"
        li                › a[href="#"]  "Contact"
  div#colorlib-main                                 (float:right; width:80%; padding:40px)
    section.ftco-section.cl-pt-4.cl-mb-5.ftco-intro
      div.cl-container-fluid.cl-px-3.cl-px-md-0
        div.cl-row
          div.cl-col-md-12.cl-mb-4
            h1.cl-h2  "Website menu #09"
            p         (lead)
          div.cl-col-md-6
            h2.cl-h4  "Heading Two"
            p
          div.cl-col-md-6
            h2.cl-h4  "Heading Two"
            p
</section>   ← ORPHAN close tag in the source; drop it
script[src="js/snippet.js"]
```

## Measured geometry (live preview, Chromium, DPR 1, 2026-10-12)

Desktop, **1440 × 900** (scrollHeight === clientHeight === 900; scrollWidth === innerWidth === 1440):

| Element | Box | Tokens |
| --- | --- | --- |
| `body` | `1440 × 592.8` | `#fafafa`, `gray` ink, Poppins→Arial, `16 px`/`28.8 px` |
| `#colorlib-page` | `1440 × 592.8` | `position:relative`, `overflow:hidden` |
| `#colorlib-aside` | `288 × 900 @ x = 0, y = 0` | `#fff`, `fixed`, `z:1001`, `padding:48px 48px 40px`, `transition:.5s` |
| `nav#colorlib-main-menu` | `192 × 248 @ x = 48, y = 48` | — |
| `li` rows | `192 × 33`, tops `48 / 91 / 134 / 177 / 220 / 263` | `22 px`/`500`, `33 px` lh, `margin-bottom:10px` |
| active `li > a` | `58.7 × 45 @ x = 48, y = 42` | `#ff6768`, `padding:10px 0`, `position:relative` |
| `a::after` (current) | `2 px` tall, `bottom:7px` | `#ff6768`, `visible`, `scaleX(1)` |
| `#colorlib-main` | `1152 × 592.8 @ x = 288, y = 0` | `float:right`, `80 %`, `padding:40px` |
| `section.ftco-section` | `1072 × 464.8 @ x = 328, y = 40` | `padding:24px 0 112px`, `margin-bottom:48px` |
| `div.cl-container-fluid` | `1072 × 328.8 @ x = 328, y = 64` | `width:100%`, `padding:0` (≥768 px) |
| `div.cl-row` | `1102 @ x = 313` | `margin:0 -15px` |
| `h1.cl-h2` | `1072 × 48 @ x = 328, y = 64` | `32 px`/`400`/`48 px`/`#000`, `margin-bottom:8px` |
| lead `p` | `1072 × 57.6 @ x = 328, y = 120` | `16 px`/`28.8 px`/`gray` |
| `div.cl-col-md-6` ×2 | `551 × 175.2 @ x = 313 / x = 864, y = 217.6` | `50 %`, `padding:0 15px` |
| `h2.cl-h4` | `521 × 36 @ x = 328, y = 217.6` | `24 px`/`400`/`36 px`/`#000` |
| `a.colorlib-nav-toggle` | `70 × 68.8 @ x = -12, y = 0` | `fixed`, `z:9999`, `padding:20px`, `visibility:hidden` |

Breakpoints:

| Width | Rail | Main | Container | Two columns | Toggle | Drawer (open) |
| --- | --- | --- | --- | --- | --- | --- |
| 1440 | `288 × 900` (20 %), `#fff` | `1152 @ x = 288` | `1072 @ x = 328`, `padding:0` | `551` each @ `y = 217.6` | hidden | n/a |
| 992 | `198.4 × 900` (20 %), `#fff` | `793.6 @ x = 198.4` | `713.6 @ x = 238.4` | 50 % each | hidden | n/a |
| 991 | `270 × 900`, `translateX(-270px)`, `rgba(0,0,0,0.04)`, `padding:32px 48px 40px` | `991 @ x = 0` | `911 @ x = 40` | `470.5` each | **visible** | rail `translateX(0)` `#fff` `z:999`; main + toggle `+270px` |
| 767 | as 991 | `767 @ x = 0` | `687 @ x = 40`, `padding:0 16px` | **stacked** `685` each | visible | +270 px, `0.5s` |
| 375 | as 991 (`270 × 800`) | `360 @ x = 0` | `280 @ x = 40`, `padding:0 16px` | `278` each | visible | doc grows to **1190 px** |

## Type and colour tokens

| Token | Value | Where |
| --- | --- | --- |
| Accent | **`#ff6768`** | generic `a` colour, current-row ink, the `2 px` underline |
| Page | **`#fafafa`** | `body` background |
| Body ink | **`gray`** (`#808080`) | body copy, paragraphs |
| Rail (desktop) | **`#fff`** | `#colorlib-aside` |
| Rail (mobile closed) | **`rgba(0,0,0,0.04)`** | `@media (max-width:991.98px)` |
| Rail (mobile open) | **`#fff`** | `body.offcanvas #colorlib-aside` |
| Headings | **`#000`** | `h1,h2,h4` |
| Menu labels | **`black`** rest / **`#ff6768`** current | `li > a` |
| Toggle bars | **`#000`** | `.colorlib-nav-toggle i` + `::before`/`::after` |
| Radii | **none** | `border-radius` appears **zero** times |
| Shadows | **none** | only in the `a:hover` reset and the `@media print` reset |
| Fonts | `"Poppins", Arial, sans-serif` → **Arial** | no webfont loads |
| Transitions | rail/main **`0.5s`**, menu link **`0.3s`**, underline **`0.3s cubic-bezier(0.175,0.885,0.32,1.275)`**, toggle bars **`0.2s`** | all disabled under `prefers-reduced-motion: reduce` |

## Section-by-section fidelity notes

1. **Page frame.** Wrapper `div#colorlib-page` (`width:100%; overflow:hidden; position:relative`) is
   the positioning context for the rail, the toggle and the drawer — reproduce it (or an equivalent
   `relative` root) so the `left:0`/`top:0` of the fixed elements resolve identically. Page surface
   **`#fafafa`**, body `16 px`/`1.8`/`gray` in a Poppins stack.
2. **Rail.** Fixed, `20 %` wide, full viewport height (`100vh` with a `100dvh` upgrade behind
   `@supports`), `overflow-y:hidden`, `z-index:1001`, **`#fff`**, `padding:48px 48px 40px`. It never
   scrolls with the page and never moves at desktop widths.
3. **Menu list.** `ul` reset to `margin:0; padding:0`; six `li` at `22 px`/`500`/`1.5` (`33 px`) with
   `margin-bottom:10px`; the labels are links with `padding:10px 0`, `position:relative` and rest ink
   `black`. The `li` pitch (**43 px**) is what produces the measured tops
   `48 / 91 / 134 / 177 / 220 / 263`.
4. **Underline + current row.** The `::after` is a `2 px` **`#ff6768`** bar at `bottom:7px` spanning
   the label (`left:0; right:0`), hidden + `scaleX(0)` at rest, wiped to `scaleX(1)` on hover with a
   **springy** `cubic-bezier(0.175, 0.885, 0.32, 1.275)`; the **current** row additionally turns its
   ink **`#ff6768`** and keeps the underline visible. Only **one** row is current in the source.
5. **Content column.** `float:right`, `width:100%` base / **`80 %`** from 992 px, `padding:40px`,
   `transition:0.5s` (used by the drawer push). At desktop widths it measures
   **`1152 × 592.8 @ x = 288`**.
6. **Band.** `padding:24px 0 112px` — the top is `cl-pt-4`'s `24 px !important` **beating**
   `.ftco-section`'s `7em` — plus `margin-bottom:48px`. Get this wrong and every element below shifts
   by 88 px.
7. **Container.** `cl-container-fluid` is `width:100%` with **no max-width tier** in this sheet;
   `cl-px-md-0` zeroes the `15 px` gutters at ≥768 px (edge-to-edge), while `cl-px-3` gives `16 px`
   below. Do **not** import the family's `1140/960/720/540` tiers.
8. **Lead block.** `cl-col-md-12` (`100 %`, `padding:0 15px`, `cl-mb-4` = `24 px`) over a
   **`32 px`/`400`/`1.5`/`#000`** heading (`margin-bottom:8px`) and a grey paragraph (two lines,
   `margin-bottom:16px`).
9. **Two-column row.** Two `cl-col-md-6` (`50 %`, `padding:0 15px`) each with a
   **`24 px`/`400`/`36 px`/`#000`** sub-heading over a grey paragraph; they **stack to 100 % below
   768 px**. Measured `551 × 175.2` each at 1440 px, `685` each (stacked) at 767 px, `278` at 375 px.
10. **Toggle.** Fixed at `left:-12px; top:0`, `z-index:9999`, `padding:20px`, hidden at ≥992 px.
    Three `30 × 2` `#000` bars (the `i` is the middle one; `::before`/`::after` sit at `-7px`), 10 px
    apart on hover, and an **X** under `cl-active`. The source's `text-indent:-55px` and
    `font:bold 14px/.4 Helvetica` on the `i` are dead styling for a text-less element — drop them and
    use `lucide-react` bars (or a faithful CSS burger) plus an accessible name.
11. **Drawer.** Below `991.98 px` the rail is a **`270 px`** drawer at `translateX(-270px)` with a
    **`rgba(0,0,0,0.04)`** surface and `padding-top:2em`; `body.offcanvas` sets the rail to
    `translateX(0)` with **`#fff`** + `z-index:999` and **pushes** `#colorlib-main` **and** the toggle
    by `translateX(270px)`, all over `0.5s` (disabled under reduced motion), guarded by
    `body{overflow-x:hidden}`. It is a **push, not an overlay** — no backdrop, no scroll lock.
12. **Behaviour.** The shipped script toggles `document.body.offcanvas`, keeps `aria-expanded` on the
    toggle, and closes on an **outside click** (any click not inside `#colorlib-aside` or the toggle),
    on **scroll** (`{passive:true}`), and on **`Escape`**. Reproduce all four close paths and add an
    accessible name on the toggle (the source only sets it at runtime — a documentable delta).
13. **Assets.** **None** — no `images/`, no `url()` other than the four `@font-face` sources, no
    inline SVG. Any imagery in the recreation is added content and must come from
    `https://picsum.photos/seed/sponson-<n>/<w>/<h>`. The eight Roboto woff2 files are the only other
    files and are **never loaded**; ship one Google Fonts Poppins `<link>` instead (delta).

## Deltas to record in the PR

- New name **sponson** and own rail labels + content copy (none of `Home`/`Project`/`About`/
  `Services`/`Blog`/`Contact`, `Website menu #09`, `Heading Two` reused).
- The **7** dead `href="#"` anchors all materialised as real destinations.
- `lucide-react` icons (or a faithful CSS burger) + an accessible name on the toggle, `aria-expanded`,
  and an accessible close path for the drawer (the source only sets `aria-expanded` at runtime and
  has no accessible name).
- A real Google Fonts Poppins `<link>` instead of eight dead self-hosted Roboto woff2 files
  (247,856 B = 93.0 % of the archive).
- Restored hover/`focus-visible` affordances (the source strips outlines/box-shadow on `a:focus`).
- `aria-current="page"` on the current row; `prefers-reduced-motion` handling preserved.
- Placeholder photography for the added sections (the source ships **no** images at all).
- An added footer linking **`https://www.componentdock.com/`** ("Component Dock") — the source has
  none.
- Dropped dead code: the `:where(html) … all: revert` reset, the `@media print` block (incl.
  `@page{size:a3}` / `body{min-width:992px}`), the `.nav` base rule, the Bootstrap palette, the base
  system body stack, the `a:not([href])` rules, `::-webkit-file-upload-button`, the toggle's
  `text-indent:-55px` / `font:bold 14px/.4 Helvetica`, the orphan `</section>`, and all eight Roboto
  files.
