# Gangway — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V09"** (source slug `website-menu-09` — the
Website Menus family's **job-board / dashboard variant**: one transparent
dark-on-photo bar with the wordmark at **`left:5%`**, a **centred** `xl`-only nav
list (`left:50%` + `translateX(-50%)`) holding **two dropdowns**, and a **CTA pair**
at **`right:5%`** — an outline-white secondary and a filled green `#89ba16` primary —
all over a `100vh` full-bleed image band, plus a **`300 px` off-canvas drawer** cloned
from the same list with per-row disclosure arrows and a `rgba(0,0,0,.5)` veil).

Type is **Quicksand (400/700 declared; the archive's two `600` files are never
referenced; a dead `Roboto` stack sits in the normalize)**. Shape language is
**square except `4px`** on the CTA pair and **`50%`** on the drawer's 36 px arrows.
Live preview: `https://preview.colorlib.com/theme/bootstrap/website-menu-09/`
(**HTTP 200**, 5,100 B, `<title>Website Menu #9</title>`); the slug-only path
`https://preview.colorlib.com/theme/website-menu-09/` returns **HTTP 404**.
Screenshot: `website-menu-09.jpg` (HTTP 200, AVIF, 1200×972, 126,459 B). Archive:
`https://preview.colorlib.com/downloads/free/website-menu-09.zip` (HTTP 200,
650,682 B) — `style.css` (21,239 B, sha256 `479573fc…`) and `snippet.js` (2,525 B,
sha256 `c60db6e1…`) are **byte-identical** to the live files.

Spec: `openspec/specs/template-gangway/spec.md`. New name: **gangway** — the plank
and opening in a vessel's side you step aboard through, for a bar whose whole point is
its two boarding calls-to-action plus the drawer of remaining routes; the nautical
companion to `starboard` (`website-menu-05`), `larboard` (`-06`), `topdeck` (`-07`)
and `bowsprit` (`-08`). Never reuse the source slug `website-menu-09`, the name
"Website Menu 09", the "Brand" wordmark, the 17 source labels, the `cl-` utility
namespace, the `\e313`/`\f078` icon-font glyphs, the inline SVG data URIs, the
self-hosted Quicksand woff2 files, or any copy verbatim.

## Preview status — where the live preview actually lives (read this first)

- `https://preview.colorlib.com/theme/website-menu-09/` → **HTTP 404**
  (`Not Found`, 9 B). The *Website Menus* family does **not** live under the
  slug-only theme path (same as `-01`…`-08`).
- `https://preview.colorlib.com/theme/bootstrap/website-menu-09/` → **HTTP 200**,
  `text/html`, **5,100 B**, `<title>Website Menu #9</title>`. This is the URL the
  preview host's own catalog index records:
  `https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`
  (633,990 B) →
  `"website-menu-09":{"name":"Website Menu V09","tag":"Website Menu Templates","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-09/"}`.
- Assets: `css/style.css?v=53272927` (**21,239 B**, sha256
  `479573fc6066bd401469d2eb55f2d855c4807fa9160ead3ff4a417e8c9e6dfc5`),
  `js/snippet.js?v=ff3415b3` (**2,525 B**, sha256
  `c60db6e100eee7176d2b6274ac73f5e5053f33172d0eee7683d0bce7a2a2c874`). The host
  also serves the sibling assets this sheet references:
  `fonts/quicksand-400-latin.woff2` (28,336 B), `fonts/icomoon-subset.woff2`
  (**424 B**), `images/hero_1.jpg` (475,413 B) — all HTTP 200.
- Archive twin: `https://preview.colorlib.com/downloads/free/website-menu-09.zip`
  (**HTTP 200**, `application/zip`, **650,682 B**, sha256 `ed488bac…` — the ColorLib
  page rounds it to "635 KB"). Contents: `index.html` (**4,897 B**, sha256
  `58562d41…`), `css/style.css` (21,239 B), `js/snippet.js` (2,525 B), `README.md`
  (1,264 B), `images/hero_1.jpg` (1900×1267), **6** Quicksand woff2 files
  (400/600/700 × latin/latin-ext) and `fonts/icomoon-subset.woff2` (424 B).
  `diff` live-page vs `index.html` = **16 lines**, head-only (the preview host's
  `noindex` meta tags + cache-busting query strings).
- Source page facts (https://colorlib.com/wp/template/website-menu-09/, HTTP 200,
  108,851 B): title "Website Menu V09 - Free Bootstrap Navbar Template 2026 -
  Colorlib"; *"A highly practical and easy to work with free Bootstrap navbar
  template with dropdowns that calls for flawless integration. The free tool also
  comes with a logo on the left and two additional call-to-action buttons on the
  right."*; `og:description` *"The best free Bootstrap navbar template with
  dropdowns, logo and two extra CTA buttons for your convenience."*; Author
  **Colorlib**; Released **September 2026**; License **CC BY 3.0**; *"this snippet is
  now plain HTML and CSS plus a few lines of vanilla JavaScript: no jQuery, no
  Bootstrap files, no plugins. The download is 635 KB (it was 2.0 MB). Use it on its
  own, or drop it into a Bootstrap 4, 5 or 6 project and it looks the same. The
  mobile menu and sticky header work without jQuery."*; `datePublished`
  **2021-01-28**, `dateModified` **2026-09-25**. ⚠️ The "sticky header" in that
  sentence is **marketing only** — the sheet contains no sticky rule whatsoever
  (`grep` for `sticky` → nothing; the only `position:fixed` is the drawer), so the
  header is `absolute` and scrolls away. Do **not** implement a sticky bar.
- Destination probes: `index.html` → HTTP 200; `about.html` → **HTTP 404** (the
  preview host only serves the snippet's own index page), so every non-index
  destination must be materialised as real in-page content in the recreation.

## Live render cross-check (2026-10-12; 1280×800, 1200/1199/1100/992/768/767/375)

| Width | Container padding | Nav list | Hamburger | CTA pair | Logo/CTA columns | Header |
| --- | --- | --- | --- | --- | --- | --- |
| 375 px | `15 px` | `display:none` | `28 × 42` at `x = 317`, `y = 56` | `display:none` | `position:relative` → row **50 px** | `y = 48`, 50 px tall |
| 767 px | `15 px` | `display:none` | visible at `x = 709` | `display:none` | `relative` → row **50 px** | `y = 48`, 50 px tall |
| 768 px | `15 px` | `display:none` | visible at `x = 672` | `display:none` | `absolute` → row **0** | `y = 48`, 0 px tall |
| 992 px | `15 px` | `display:none` | visible at `x = 885` | `131 × 40` at `x = 638` + `96 × 38` at `773` | `absolute` | `y = 48` |
| 1100 px | `15 px` | `display:none` | visible at `x = 988` | at `741` / `876` | `absolute` | `y = 48` |
| 1199 px | `15 px` | `display:none` | visible at `x = 1082` | at `835` / `970` | `absolute` | `y = 48` |
| 1200 px | **`112 px`** | **`block`**, rect `576 × 64` at `x = 305` | **hidden** | at `880` / `1015` | `absolute` | `y = 48` |
| 1280 px | `112 px` | `block`, `576 × 64` at `x = 345`, `y = 16` | hidden | at `956` / `1091` | `absolute` | `y = 48` |

Measured details at 1280×800: header rect **1265 × 0** at `y = 48`, `position:
absolute`, `top:32px`, `margin:16px 0 0`, `z-index:1999`; container padding
**`0 112px`**, no max-width; row rect `1071 × 0` at `x = 97` with `margin:0 -15px`;
wordmark column `absolute; left:63.25px` (**5 %**), `width:632.5px` (**50 %**),
`padding:0 15px`, anchor **98 × 30** at `x = 78` in `24px/400/uppercase/3.2px/#fff`
with `line-height:36px`; nav `absolute; left:632.5px; transform:translateX(-287.914px)`,
`z-index:5`; nav rows **64 px** tall (`padding:20px`), current row `#fff`, others
`rgba(255,255,255,0.5)`; CTA column `absolute; left:569.25px; right:63.25px`
(`width:632.5px`), `display:flex`, `text-align:right`; `body{height:200vh}` =
**1600 px**; `.hero` **1265 × 800** (**`100vh`**) with the image applied **inline**.

## Source facts worth keeping

- **Two class names in the markup are dead** and must not be reproduced:
  `site-navbar-target` on the drawer (a leftover hook for the family's old JS) and
  `aligin-items-center` on the CTA column (**typo** — the flex alignment comes from
  `cl-row`). `border-width-2` on both CTA anchors is **undefined** in the sheet;
  `.cl-btn.btn-outline-white` carries its own `border-width:2px`.
- **The row collapses to zero height at ≥768 px.** Both `cl-col-6` children are
  absolutely positioned (their `position:relative` is overridden by
  `.site-navbar .site-logo` / `.site-navbar .right-cta-menu`), so nothing is in flow.
  Everything visible is positioned against the **header** — which is why `left:5%`
  measures `63.25 px` (5 % of 1265) and the column's `max-width:50%` measures
  `632.5 px`: the containing block is the header, not the column. Below 768 px both
  columns go back to `position:relative` and the row measures **50 px**.
- **The current row's `padding:5px 20px` is dead code.** `.site-menu .cl-active`
  (0,4,0) would beat `.site-navbar .site-navigation .site-menu > li > a` (0,3,2), but
  the latter declares `padding:20px 20px !important` — so the measured current row is
  `64 px` tall with `20 px` padding, identical to its neighbours. Only `color:#fff`
  from that rule survives.
- **The hamburger's `margin-left:5px` override is dead too**: the
  `@media (max-width:767.98px){.site-menu-toggle{margin-left:5px}}` block loses to
  the markup's `cl-ml-3` (`margin-left:1rem !important`), so the measured margin is
  `8px 0 0 16px` at 375 px as well.
- **The `Roboto` body stack is dead** — the later `body{font-family:"Quicksand"…}`
  rule wins. **The two Quicksand `600` woff2 files are dead** — the sheet declares
  only 400 and 700.
- **Nested-submenu CSS exists but never matches**: `.cl-dropdown > li.has-children`
  rules (a `\e315` caret at `right:20px`, `left:100%; top:0`) assume a third level
  that this page does not have. Do not build one.
- **The button focus ring is explicitly cancelled**:
  `.cl-btn:hover, .cl-btn:focus, .cl-btn:active{outline:none; box-shadow:none
  !important}` kills the earlier `.cl-btn:focus{box-shadow:0 0 0 .2rem
  rgba(0,123,255,.25)}`. Restore a visible ring (delta).
- **The drawer's disclosure arrows are not focusable** in the source
  (`span[role=button]` with only a click listener, no `tabindex`, no key handler) and
  **the drawer does not close when a destination is chosen** — both are deltas.
- The `-08` sibling's `body:before` veil was **dead code**; **here it is live**
  (`body.offcanvas-menu:before{opacity:1; z-index:1002; visibility:visible}`) and must
  be implemented. Note the stacking: veil `1002` < header `1999` < drawer `2000`, so
  the wordmark stays legible above the veil while the page behind is dimmed (visible
  in the captured 375 px frame).

## What makes this variant different from its siblings (`-01`…`-08`)

1. **Two CTAs** (outline-white + filled green) instead of none (`-01`…`-07`) or one
   blue block (`-08`), and they disappear **below 992 px** — the only member of the
   family with a *tablet tier* (buttons + hamburger, no nav).
2. A **centred** desktop nav (`left:50%` + `translateX(-50%)`) — every sibling aligns
   its list left or right.
3. **Two dropdowns** at once, both square, both with the `2px #89ba16` top hairline
   and a grey `#ebeef0` row wash — the family's first *green* accent (the others are
   blue or neutral).
4. A **job-board information architecture**: job listings, a single job, a post-a-job
   action, pages/portfolio/testimonials/FAQ/gallery children, a blog, a contact page
   and a **login** page — the family's only nav with an account entry point, which is
   why the "gangway" metaphor fits.
5. An **off-canvas drawer** (300 px, `translateX(110%) → 0`, `.2s
   cubic-bezier(.66,.2,.48,.9)`) with a **`rgba(0,0,0,.5)` veil** and **per-row
   disclosure arrows** expanding `cl-collapse` sub-lists — the richest sub-`xl`
   navigation in the family.
6. Two **list-only action rows** (`li.cl-d-lg-none`) that exist purely so the drawer's
   copy carries them.

## Global tokens

| Token | Value | Notes |
| --- | --- | --- |
| brand green | `#89ba16` | primary CTA bg/border, flyout `2px` top hairline, active flyout row text, drawer row hover text |
| brand green hover | `#90c317` | primary CTA hover bg/border |
| ink | `#212529` | body, drawer rows, hovered flyout row text |
| flyout row text | `#343a40` | resting flyout rows |
| flyout hover wash | `#ebeef0` | flyout row hover/active **background** (grey, not blue) |
| label (inactive) | `rgba(255,255,255,0.5)` | nav rows |
| label (current) | `#fff` | the `cl-active` row |
| overlay | `rgba(0,0,0,0.5)` | `body:before` veil (`opacity 0→1`, `z-index 1→1002`, `.3s`) |
| surfaces | `#fff` | page, flyout, drawer |
| close hover | `#dee2e6` | drawer `✕` |
| arrow hover | `#f8f9fa` | 36 px round drawer disclosure |
| disabled | `#6c757d` | `.cl-nav-link.disabled` |
| shadows | `0 2px 20px -2px rgba(0,0,0,.2)` (flyout), `-10px 0 20px -10px rgba(0,0,0,.1)` (drawer) | |
| radii | `4px` (`.cl-btn`), `50%` (drawer arrow); **everything else square** (`button{border-radius:0}`, flyout, drawer) | |
| type | Quicksand 400/700 (self-hosted subsets in the source), + a 424 B `icomoon` subset for `\e313` / `\f078` | |
| motion | `a` `.3s all ease`; `.cl-btn` `color/background/border/box-shadow .15s ease-in-out` (`prefers-reduced-motion` → none); flyout `.2s 0s`; drawer `transform .2s cubic-bezier(.66,.2,.48,.9)`; veil `.3s all ease`; arrow glyph `.3s all ease` | |

## Section 0 (chrome) — `div.site-mobile-menu` + `header.site-navbar`

Document order: the **drawer comes first** in the DOM (before the header), then the
header, then the band. The header is `position:absolute; width:100%; top:2rem;
z-index:1999` **plus** the markup's `cl-mt-3` (`margin-top:1rem`) → **48 px** offset
at every width. Inside: `div.cl-container-fluid` (`padding:0 7rem` at ≥1200 px,
`0 15px` below, **no max-width**) › `div.cl-row.cl-align-items-center`
(`display:flex; flex-wrap:wrap; margin:0 -15px`) › three children —
`div.site-logo.cl-col-6` (absolute, `left:5%`), `nav.cl-mx-auto.site-navigation`
(absolute, `left:50%`, `translateX(-50%)`, `z-index:5`) and
`div.right-cta-menu…cl-col-6` (absolute, `right:5%`, `display:flex`,
`text-align:right`) which holds `div.cl-ml-auto` (the CTA pair) and
`a.site-menu-toggle` (the hamburger). The row's zero height at ≥768 px is the
signature quirk (see above).

## Section 1 — the nav list, its caret and the two flyouts

`ul.site-menu.js-clone-nav.cl-d-none.cl-d-xl-block.cl-ml-0.cl-pl-0` — hidden below
1200 px. Eight `li`: six nav rows in source order (current/home, about,
**job-listings parent** with 2 rows, **pages parent** with 8 rows, blog, contact) and
two `cl-d-lg-none` action rows. Rows: `inline-block`, `a{padding:20px;
color:rgba(255,255,255,0.5)}`, hover `#fff`, current `#fff` (its `padding:5px 20px`
is defeated by the sibling's `!important`). Parents add `padding-right:20px` and a
`16 px` `\e313` glyph at `top:50%; right:0` (`translateY(-50%)`) → use a
`lucide-react` `ChevronDown` at the same box.

Flyout: `ul.cl-dropdown{visibility:hidden; opacity:0; top:100%; position:absolute;
text-align:left; padding:0; margin-top:20px; background:#fff;
border-top:2px solid #89ba16; box-shadow:0 2px 20px -2px rgba(0,0,0,.2);
transition:0.2s 0s}`, open on `:hover`/`:focus`/`:active` of the parent with
`transition-delay:0s; margin-top:0; visibility:visible; opacity:1` — measured
**200 px** wide (from `li{min-width:200px}`), closed at `y = 100` (row bottom 80 +
20 px), open flush under the row. Rows: `display:block; padding:9px 20px;
font-size:16px; line-height:1.4; color:#343a40` → measured **200 × 40.39 px**,
hover/focus `background:#ebeef0; color:#212529` (cascade-verified in Chrome with the
pseudo-state forced). Flyout heights, measured: job-listings **82.78 px** (2 rows +
2 px hairline), pages **347.52 px** = 7 rows × 40.39 + the 8th row **wrapped to two
lines** (62.8 px) + 2 px — a long label does not fit the 200 px minimum width.

Behaviour in the source is **CSS-only** (`snippet.js` binds nothing here): no click
toggle, no `aria-expanded`, no `Escape`, no outside-click close, no arrow keys — the
parent's `href` is a real page and `:focus` is the keyboard path. Promote it to a
real disclosure while keeping the surfaces/timings.

## Section 2 — the CTA pair (`div.right-cta-menu` › `div.cl-ml-auto`)

Two anchors, both `cl-d-none cl-d-lg-inline-block` (**hidden below 992 px**):
`a.cl-btn.btn-outline-white.border-width-2` (`background:transparent;
border:2px solid #fff; color:#fff`, measured **131 × 40 px**, hover
`background:#fff; color:#000`) and `a.cl-btn.cl-btn-primary.border-width-2`
(`background:#89ba16; border-color:#89ba16; color:#fff` with a **`1px`** border,
measured **96 × 38 px**, hover `background:#90c317; border-color:#90c317`). Both:
`padding:6px 12px`, `font-size:1rem`, `line-height:1.5`, `border-radius:4px`,
`transition:… .15s ease-in-out`, with a leading icon inside `span.cl-mr-2`
(`margin-right:8px`) — the preview renders those as inline SVGs (a `+` and a lock);
use `lucide-react` `Plus` / `Lock`. The **2 px height difference** between the two
boxes comes from the `1px` vs `2px` border and is a source artefact worth keeping.
The column's `right:5%` resolves against the **header** (measured `right:63.25px`),
pushing the pair to `x = 956…1187` at 1280 px, i.e. flush with the container's
`7rem` padding edge region while the nav stays centred independently.

## Section 3 — the off-canvas drawer (sub-`xl` navigation)

`div.site-mobile-menu{width:300px; position:fixed; right:0; padding-top:20px;
background:#fff; height:calc(100vh) (measured 800 px);
z-index:2000; transform:translateX(110%) (330 px);
box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transition:.2s all
cubic-bezier(.66,.2,.48,.9)}` → `body.offcanvas-menu .site-mobile-menu
{transform:translateX(0%)}`, with `body:before` as the `rgba(0,0,0,.5)` veil
(`opacity 1`, `z-index 1002`, `visibility visible` when open, `.3s all ease`).

- Strip: `div.site-mobile-menu-header{padding:0 20px; float:left}` (measured 50 px)
  with `div.site-mobile-menu-close{float:right; margin-top:8px}` ›
  `span.icon-close2.js-menu-toggle{font-size:30px; padding-left:10px; cursor:pointer;
  hover{color:#dee2e6}}` — an inline SVG `✕` in the preview (`lucide-react` `X`);
  **this span is a second `.js-menu-toggle`**, sharing the hamburger's handler.
- Body: `div.site-mobile-menu-body{overflow-y:scroll; position:relative;
  padding:0 20px 20px; padding-bottom:150px; height:calc(100vh - 52px)}` — measured
  **748 px** at an 800 px viewport.
- `snippet.js` clones the desktop list into it:
  `copy = nav.cloneNode(true); copy.className = 'site-nav-wrap';
  copy.removeAttribute('id')` — one `ul` at **every** width (measured **245 px** wide
  inside the 300 px panel). Rows: eight top-level `a{display:block; padding:10px 20px;
  font-size:20px; color:#212529}` → **50 px** each; current row **`#000`**
  (`.site-nav-wrap li .cl-active{color:#000}`); hover **`#89ba16`**, no underline;
  sub-rows `padding-left:40px; font-size:16px` → **44 px**, same colours; a third
  level (`padding-left:60px`) exists in CSS but is unused.
- Arrows: for each `.site-mobile-menu .has-children` the JS inserts
  `span.arrow-collapse.cl-collapsed[role=button][aria-label="Show submenu"]
  [aria-expanded=false]` as the first child and rewrites the sub-`ul` to
  `class="cl-collapse" id="collapseItem<k>"`. The arrow is `absolute; right:0;
  top:10px; width:36px; height:36px; border-radius:50%; text-align:center;
  cursor:pointer; hover{background:#f8f9fa}` with a `::before` glyph `\f078` at
  `12px` / `font-family:icomoon`, `translate(-50%,-50%) rotate(-180deg)` when open,
  `rotate(0)` with `.cl-collapsed` (visually: **down chevron closed, up chevron
  open**), `transition:.3s all ease`. Click toggles `cl-show` on the sub-list,
  `cl-active`/`cl-collapsed` on the arrow and `aria-expanded`.
- Dismissal: every `.js-menu-toggle` click toggles `body.offcanvas-menu`
  (adding `cl-active` + `aria-expanded="true"` to all toggles while open);
  `document` **`mouseup`** outside the panel (and not on a `.js-menu-toggle`) closes;
  **`Escape`** closes; **`resize` with `innerWidth > 768`** closes (strict `>` — a
  page at exactly 768 px keeps the state; normalise to a breakpoint and document it).
  A click on an in-panel link does **not** close it (delta: make it close).

## Section 4 — `div.hero` (the image band)

Measured **1265 × 800 px** at 1280×800: `height:100vh; width:100%;
background-size:cover; background-position:center center;
background-repeat:no-repeat`, image applied **inline**
(`images/hero_1.jpg`, 1900×1267, 475,413 B — the same three-people-against-a-wall
photo as the `-08` sibling per the screenshot; **never copied** — use
`https://picsum.photos/seed/gangway-hero/1920/1080`). `body{height:200vh
(measured 1600 px)}` is the only thing below it.

## Screenshot read-through (1200×972, AVIF→PNG)

A browser-chrome mock of the live preview at rest. Under the address bar: `BRAND` in
**white uppercase with wide letter-spacing** at the left; the six nav labels
**centred** — the current row solid white, the rest ~50 % white — with small **down
chevrons** on the two dropdown parents; at the right the pair: an
**outline-white `+ Post a Job`** (square-ish 4 px radius, thin white border) beside a
**solid yellow-green `Log In` with a lock icon**. Everything sits directly on the
full-bleed photo (two men and a woman in muted blue/grey and black against a grey
cinderblock wall) with **no scrim**, and the band fills the rest of the frame — no
content sections, no footer. The screenshot is also the source of the pair's relative
look (thin outline vs filled accent, both with leading icons and a small radius) and
of the **sage/yellow-green** accent the stylesheet confirms as `#89ba16`.

Harness captures taken for this spec (`/root/.config/browser-harness/tmp/shot.png`,
overwritten per call — re-take if needed): **1280×800** with the first flyout forced
open (wordmark left, centred list with `▾`, `+ Post a Job` + green `Log In` right,
two white flyout rows with the first one washed `#ebeef0`); **1100×800** (the tablet
tier: `+ Post a Job` + green `Log In` + a 3-bar hamburger at the right, **no nav
list**); **375×800** (drawer open on the right with all eight rows, the job-listings
sub-list expanded to `Job Single` / `Post a Job` at 44 px, the up chevron on the open
parent, the down chevron on the closed one, the `✕` top-right, the photo dimmed by
the veil while `BRAND` stays legible above it).

## Fidelity gotchas

1. **The row is zero-height at ≥768 px** — do not "fix" it into a normal flex row;
   position the three anchors against the header (`left:5%`, `left:50%+translate`,
   `right:5%`) and let the flow row measure 0.
2. **`left:5%` / `max-width:50%` resolve against the header**, not the column, so a
   naive `w-1/2` on a flex child gives the wrong x. Measured anchor x = 78 px at
   1280 px.
3. **The current nav row has no extra padding** (the `5px 20px` rule is dead) — keep
   all rows at `20px`.
4. **The flyout is square, padding-less, and 200 px wide with a green top hairline**
   — not the family's rounded white card with a footer arrow, and its row hover is a
   **grey** `#ebeef0` wash, not a blue fill. Only the CTA primary is green-filled.
5. **The CTA pair is 2 px out of vertical alignment** (1 px vs 2 px borders) — keep
   it; forcing equal heights changes the measured boxes 131 × 40 vs 96 × 38.
6. **Third breakpoint tier matters**: below 992 px the CTAs vanish entirely and two
   extra action rows appear inside the drawer; `992–1199.98 px` shows buttons **and**
   the hamburger; the nav list never appears below 1200 px.
7. **The drawer is not mobile-only** — it is the navigation for everything under
   1200 px, and it exists in the DOM at every width (translateX, not `display:none`).
8. **Render the drawer from the same data, not by cloning DOM** — the source's
   `cloneNode` is a jQuery-era shortcut; a React component rendered twice is the
   correct equivalent and keeps a single source of truth.
9. **The veil is live here** (unlike `-08`), and the stacking is veil `1002` <
   header `1999` < drawer `2000`.
10. **The drawer's arrows are `span[role=button]` and unfocusable** in the source —
    use real `button`s with `aria-expanded`.
11. **The button focus ring is cancelled** in the source — restore a visible
    `focus-visible` ring.
12. **Drop the dead code**: `site-navbar-target`, `aligin-items-center`,
    `border-width-2`, the nested-submenu CSS, the `Roboto` body stack, the two
    unreferenced `600` Quicksand files, the `cl-active` `5px 20px` padding and the
    `margin-left:5px` toggle override.
13. **No sticky header**, despite the marketing line on the ColorLib page.
14. **Never copy**: the 17 source labels, the "Brand" wordmark, the `cl-` namespace,
    the `\e313`/`\f078` glyphs, the inline SVG data URIs, the woff2 files or
    `hero_1.jpg`.

## Reference artifacts (for the implementer)

- `/tmp/wm09/prev.html` — live preview HTML (**5,100 B**).
- `/tmp/wm09/style.css` — **21,239 B**, sha256 `479573fc…` (**byte-identical** to
  the archive copy `z/website-menu-09/css/style.css`).
- `/tmp/wm09/snippet.js` — **2,525 B**, sha256 `c60db6e1…` (byte-identical to the
  archive copy).
- `/tmp/wm09/wm09.zip` — the snippet archive (**650,682 B**, sha256 `ed488bac…`),
  extracted to `/tmp/wm09/z/website-menu-09/`: `index.html` (4,897 B, archive twin —
  the live-vs-archive diff is 16 head-only lines), `images/hero_1.jpg` (1900×1267,
  475,413 B), `fonts/` (6 Quicksand woff2 + `icomoon-subset.woff2` 424 B),
  `README.md`.
- `/tmp/wm09/page.html` — the ColorLib template page (**108,851 B**) — source of the
  description, dates and download-size facts.
- `/tmp/wm09/cat.js` — the preview catalog index (**633,990 B**) mapping the slug to
  `theme/bootstrap/`.
- `/tmp/wm09/shot.png` — the 1200×972 screenshot (converted from the 126,459 B AVIF
  original) — the source of the visual read-through.
- `/tmp/wm09/measure.json` — the per-width computed-style dump (header, container,
  row, columns, wordmark, nav, items, CTAs, toggle, hero, drawer, veil, clone,
  arrows, flyouts).
