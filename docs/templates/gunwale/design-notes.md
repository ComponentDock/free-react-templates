# Gunwale — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V12"** (source slug `website-menu-12` — the Website
Menus family's **brand-strip-over-a-dark-bar** variant: one **72 px white strip** carrying a
**two-line uppercase `#000` wordmark** (a `20 px / 700` line over a `12 px / 500` block line)
on its left and **four 40 px hairline circular social buttons** on its right, sitting directly
on a **full-bleed `#202040` navy bar** (`67.8 px = 24 + 19.8 + 24`, in normal flow) that holds
**five `11 px` tracked-out white nav rows pinned to its left** and a **white `257 × 46` field
with a `5px` radius bolted to its right end**, with a **`#f1bc31` gold slab that wipes across
any row on hover** (`scaleX(0) → scaleX(1)` behind the label) and stays visible
**permanently** on the current row; a `992 px` breakpoint turns the bar **`#000`** (`66 px`),
shows a **`☰ Menu`** toggler at the left, collapses the list into a height-animated panel
(`.35s ease`) whose dropdown is an **always-expanded `#000` sub-list**, and turns the current
row's label gold. All of it sits under a centred heading band (`padding:112px 0`), and the
source has **no images, no content sections, no footer, no second page and no sticky chrome**:
**13** of its 14 links are `href="#"`, its page is 461.8 px tall and it does not scroll.

Type is **Poppins (`body{font-family:"Poppins", Arial, sans-serif; font-size:16px;
line-height:1.8}`)**; the sheet also declares `@font-face` for self-hosted **Roboto 400/700**
and the archive ships four more **100/300** files it never declares — **none of it renders**
(nothing resolves to Roboto), so 247,856 B of the 259,459 B download is dead font payload. It
also loads **no icon font at all** (one stylesheet, no `@font-face` for Font Awesome, no CDN
link), so the four `span.fa.fa-<network>` glyphs measure **`0 × 0`** and the live preview shows
**four empty hairline circles** — ColorLib's own marketing screenshot draws the network icons,
so the live page is the broken one. Shape language is **square** except the **`5px` search
field**, the **`4px`** dropdown panel and the **`50%`** social circles. Live preview:
`https://preview.colorlib.com/theme/bootstrap/website-menu-12/` (**HTTP 200**, 5,103 B,
`<title>Website menu 02</title>`); the slug-only path
`https://preview.colorlib.com/theme/website-menu-12/` returns **HTTP 404**.
Screenshot: `website-menu-12.jpg` (HTTP 200, AVIF, 7,255 B, 1200×972 → PNG 49,747 B).
Archive: `https://preview.colorlib.com/downloads/free/website-menu-12.zip` (HTTP 200,
259,459 B, sha256 `32635318…`) — `style.css` (22,709 B, sha256 `2e78a96d…`) and `snippet.js`
(5,798 B, sha256 `ee4d7f69…`) are **byte-identical** to the live files.

Spec: `openspec/specs/template-gunwale/spec.md`. New name: **gunwale** — a boat's *gunwale* is
the raised strake capping the top edge of her side, i.e. the light strip that rides along the
top of the dark hull; this is the family's only chrome shaped exactly like that (a white brand
strip over a `#202040` bar), with gold brass-like slabs for its hover state. The nautical
companion to `starboard` (`website-menu-05`), `larboard` (`-06`), `topdeck` (`-07`),
`bowsprit` (`-08`), `gangway` (`-09`), `halyard` (`-10`) and `ensign` (`-11`). Never reuse the
source slug `website-menu-12`, the name "Website Menu 12", the `Papermag`/`Magazine` wordmark,
the five labels (`Home`, `Page`, `Catalog`, `Blog`, `Contact`), the `Page 1`…`Page 4` items,
the `Search` placeholder, the heading string `Website menu #02`, the `cl-`/`ftco-` utility
namespace, the inline SVG bars/search glyphs, the self-hosted Roboto woff2 files, or any copy
verbatim.

## Preview status — where the live preview actually lives (read this first)

- `https://preview.colorlib.com/theme/website-menu-12/` → **HTTP 404** (`Not Found`, 9 B).
  The *Website Menus* family does **not** live under the slug-only theme path (same as
  `-01`…`-11`).
- `https://preview.colorlib.com/theme/bootstrap/website-menu-12/` → **HTTP 200**,
  `text/html; charset=utf-8`, **5,103 B**, `<title>Website menu 02</title>`, sha256
  `5a8de116dca3c80597eca3336c2f70e1e6fc73dcec469410233ea23eb14f32fc`. This is the URL the
  preview host's own catalog index records:
  `https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`
  (633,990 B) →
  `"website-menu-12":{"name":"Website Menu V12","tag":"Website Menu Templates","img":"…/website-menu-12-768x622.jpg","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-12/","details":"https://colorlib.com/wp/template/website-menu-12/","purchase":"https://colorlib.com/wp/template/website-menu-12/#pricing"}`.
- Assets: `css/style.css?v=c26a47c4` (**22,709 B**, sha256
  `2e78a96d9c35838942586aaf3471a99f6e20defcd0f27ea186d2c95f2281e066`),
  `js/snippet.js?v=04dc0e4b` (**5,798 B**, sha256
  `ee4d7f69fc400c258a863e9ca4cf115b4a2fdaaf9997d4b2f893ebb28ed116df`). There are **no image
  requests at all** (the page references no `images/` path and the archive contains no
  `images/` folder) and no extra stylesheets beyond the one `style.css`. The page's own
  stylesheet scope uses `.postid-24602` (the same scope id the `-11` sibling page uses).
- Archive twin: `https://preview.colorlib.com/downloads/free/website-menu-12.zip` (**HTTP
  200**, `application/zip`, **259,459 B**, sha256 `32635318…` — the ColorLib page rounds it to
  "253 KB", and says it was 262 KB before the September 2026 rewrite). Contents:
  `index.html` (**4,900 B**), `css/style.css`, `js/snippet.js`, `README.md` (**1,264 B**),
  **no images**, and **eight** Roboto woff2 files — `roboto-100-latin-ext`,
  `roboto-300-latin-ext`, `roboto-400-latin-ext`, `roboto-700-latin-ext` (24,444 B each) and
  `roboto-100-latin`, `roboto-300-latin`, `roboto-400-latin`, `roboto-700-latin` (37,520 B
  each) = **247,856 B of 282,527 B uncompressed (87.7 %)**. `diff` between the live page and
  the archive `index.html` is **head-only** (the preview host's `noindex` metas, the
  `cdnjs.cloudflare.com` `dns-prefetch`, and the `?v=` cache-busting query strings), so the
  archive is the readable twin of the live render.
- HTML shell (live, 5,103 B): `doctype html` → `html[lang=en]` → `head` (the host's
  `noindex` metas + `dns-prefetch`, `<title>Website menu 02</title>`, the viewport meta, the
  one `style.css`, the host's second `noindex`) → `body` → `section.ftco-section` (with the
  heading container, the brand-strip container and the `nav`) → `script[src="js/snippet.js"]`.
- `README.md` in the archive is the trio's shared text ("A free HTML snippet from Colorlib …
  nothing to install … no jQuery, no Bootstrap, no build step, no CDN call … License: free for
  personal and commercial use") with the title `# Website menu 02` and the URL
  `https://colorlib.com/wp/template/website-menu-12/`.
- ColorLib page (108,893 B, HTTP 200): `datePublished` **2021-03-09T14:10:40+00:00**, posted by
  **Rok Krivec**, 0 comments, nested publication links *previous post: Website Menu V11* /
  *next post: Website Menu V13*, `dateModified` **2026-09-25T10:42:07+00:00**; Template Details
  **Author: Colorlib · Released: September 2026 · License: CC BY 3.0**. Description: *"Offer
  great website navigability with this responsive free menu with a search bar and a dropdown
  template. You can also add a logo and activate the available social media icons."* Meta:
  *"Grab this responsive and free menu with a search bar template that also features a
  dropdown and social media icons."* September 2026 note: *"this snippet is now plain HTML and
  CSS plus a few lines of vanilla JavaScript: no jQuery, no Bootstrap files, no plugins. The
  download is 253 KB (it was 262 KB). … The collapsible sections open and close without
  Bootstrap's JavaScript. The drop-down menus work without Bootstrap's JavaScript, including
  keyboard navigation."*

## Section order (1:1 — there is nothing else on the page)

1. **Heading band** — `section.ftco-section{padding:7em 0}` = **112 px** top and bottom, transparent
   over the page's `#fafafa`; inside it, a container › `cl-row cl-justify-content-center` ›
   `cl-col-md-6 cl-text-center cl-mb-5` › `h2.heading-section` reading **`Website menu #02`**
   (a source artefact — never reproduce the string).
2. **Brand strip** — a second container › `cl-row cl-justify-content-between` › **two
   `div.cl-col`**: (a) `a.cl-navbar-brand[href="index.html"]` reading `Papermag <span>Magazine</span>`,
   (b) `div.cl-col.cl-d-flex.cl-justify-content-end` › `div.social-media` › `p.cl-mb-0.cl-d-flex`
   › **four** `a[href="#"]` circles, each with `span.fa.fa-<network>` › `i.cl-sr-only`.
3. **The bar** — `nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.cl-navbar-dark.ftco_navbar.cl-bg-dark.ftco-navbar-light`
   › `div.cl-container` with **three** children in this DOM order: the toggler button, the
   search form, the collapsible div holding `ul.cl-navbar-nav.cl-mr-auto` with **five
   `li.cl-nav-item`** (Home `cl-active` → Page `cl-dropdown` with four `cl-dropdown-item`s →
   Catalog → Blog → Contact).
4. **Nothing** — no content sections, no images, no footer, no utility bar, no sticky chrome,
   no dark mode, no modal. `scrollHeight` = the viewport, i.e. the document does not scroll;
   the `<section>`'s second 112 px of padding is the only thing below the bar.

The recreation keeps 1–3 in that order and proportion 1:1 and replaces the blank 112 px
filler with real content for the source's 13 dead destinations (+ the mandatory Component
Dock footer) — see *Deltas*.

## Vertical rhythm (measured at 1280 px, DPR 1)

| Band | Measured | Composition |
| --- | --- | --- |
| section top padding | `y = 0 → 112` | `padding-top:112px` over `#fafafa` |
| heading | `540 × 42 at x = 370, y = 112` | 28 px / 400 / 42 px line-height / `#000` / centred, `margin-bottom:8px` |
| heading column margin | → `y = 210` | `.cl-mb-5` = `margin-bottom:48px` |
| brand strip | `1140 × 72 at x = 70, y = 210` | two 570 px columns (`flex:1 0 0%`); wordmark lockup 42 px + its 30 px bottom margin = 72 |
| bar | `1280 × 67.8 at y = 282` | full-bleed `#202040`; container 1140 px (`x = 70`), inner edges 85 / 1195 |
| below the bar | 112 px of `#fafafa` | the section's bottom padding (replaced by real content in the recreation) |

Document: `section` = **1280 × 461.8 px**; `html` height = 461.8 px; `scrollHeight` = 800
(the viewport). The heading is the only text above the strip and it is centred at **every**
width (`cl-text-center`), while the strip's two columns swap to 100 % below 768 px.

## The brand strip — section-by-section fidelity

- **Strip (`cl-row.cl-justify-content-between`):** `display:flex; flex-wrap:wrap;
  justify-content:space-between`, `margin:0 -15px`, **1140 × 72** at 1280 px (960 at
  1199/992, 720 at 991/768, 375 → content 345); transparent (the white look comes from the
  page's `#fafafa`), no border, no shadow.
- **Columns:** two `div.cl-col` = `flex:1 0 0%; max-width:100%; padding:0 15px` → **570 px
  each** at 1280 (480 at 1199/992/991, 360 at 768). At **375 px** they resolve to **169 + 206**
  (the social column's `min-content` of 176 + 30 gutter wins the free-space distribution), and
  at **320 px the row wraps to 112 px** (two lines) — a source fragility the recreation should
  avoid (see Deltas).
- **Wordmark (`a.cl-navbar-brand`):** `color:#000; text-transform:uppercase; font-weight:700;
  font-size:20px; line-height:1; margin-bottom:30px; padding:5px 0; margin-right:16px;
  display:inline-block; white-space:nowrap`, with `span{display:block; font-size:12px;
  font-weight:500}` inheriting the uppercase and the `line-height:1`. Measured **114.09 × 42
  at `x = 85, y = 210`** (5 + 20 + 12 + 5), the second line at `y = 235`, and the `#000` is
  identical at rest and on hover. It is the page's **only real link** (`index.html`).
- **Social row (`div.social-media` › `p.cl-mb-0.cl-d-flex`):** measured **176 × 40 at
  `x = 1019, y = 210`**; each anchor is `40 × 40; border-radius:50%; border:1px solid #e6e6e6;
  margin-right:4px` plus the `cl-d-flex cl-align-items-center cl-justify-content-center`
  utilities, so the row is 4×40 + 4×4 = 176 px and the **fourth circle's own 4 px margin keeps
  it at `x = 1191`**, 4 px inside the container's inner right edge (1195). Glyph colour
  `#4d4d4d`; **`:hover` → `background:#f1bc31; border-color:#f1bc31`, glyph `#fff`**. The
  group sits at the **top** of the 72 px column (level with the wordmark's first line), not
  vertically centred.
- **Dead glyphs:** the four `span.fa` elements are `0 × 0` in `font-family: Poppins` because
  the page loads no icon font — the live preview's "icons" are four empty hairline circles.
  The toggler's and the search button's icons *do* render because each holds an **inline SVG**
  next to its `.fa` span. ColorLib's screenshot shows the network glyphs (their capture had
  the font); the recreation draws real `lucide-react` icons — a documented delta.

## The bar — section-by-section fidelity

- **Surface:** `.ftco-navbar-light{background:#202040 !important; z-index:3; padding:0}` +
  `position:relative`; the markup's `cl-bg-dark` (`#343a40 !important`) **never renders**
  (equal specificity, earlier in source order). Full-bleed, flush to both viewport edges, **no
  border, no radius, no shadow**, **not sticky** (zero `sticky` declarations in the sheet).
  Height is exactly the tallest row: **67.8 px** at ≥992 px (`24 + 19.8 + 24`), **66 px**
  below (`10 + 46 + 10`). Measured at `y = 282` at ≥375 px.
- **Container:** `width:100%; padding:0 15px; margin:0 auto` + the 540/720/960/1140 tiers;
  measured 1140@70 (1280), 1140@30 (1200), 960@119.5 (1199), 960@16 (992, cap not binding),
  720@135.5 (991), 720@24 (768), 345@15 (375); `display:flex; justify-content:space-between;
  align-items:center`; `flex-wrap:nowrap` at ≥992 px and **`wrap`** below it; its 15 px
  gutters are **removed below 992 px** (`.cl-navbar-expand-lg > .cl-container{padding:0}` at
  ≤991.98 px).
- **Desktop composition (the signature):** the toggler is `display:none`; the collapse
  wrapper is `flex-grow:1; flex-basis:auto; display:flex !important; align-items:center`
  (measured **853 × 67.8 at `x = 85`**); the **list itself** carries **`cl-mr-auto`**
  (`margin-right:auto`) so it is pinned to the container's **inner left edge** and all slack
  (**395.562 px** at 1280) piles up **between the rows and the search form**; the form is
  second in DOM but takes `order:13` (`cl-order-lg-last`) so it renders **last**. Sheet-measured
  row edges at 1280 px: `85 → 166 → 252.56 → 357.5 → 436.08` (widths 81 / 86.56 / 104.94 /
  78.58 / 106.36 = `20 + label + 20`), list box **457.44 × 67.8**, search field **`x = 938 →
  1195`** (`938 + 257` = the container's inner right edge exactly). Below 992 px the container
  **wraps**, so the open panel becomes its own full-width line under the `toggler + field`
  line.
- **Rows (`ul.cl-navbar-nav > li > a.cl-nav-link`):** `font-size:11px; font-weight:500;
  text-transform:uppercase; letter-spacing:2px; color:#fff; opacity:1 !important;
  padding:24px 20px; line-height:1.8 → 19.8px; position:relative`, stretching the bar's full
  height; `flex-direction:row` at ≥992 px, `column` below. The five labels are a **home /
  dropdown / three plain** pattern; the `cl-active` row carries no `aria-current` in the
  source (the recreation adds it).
- **The gold slab (`::before`):** every row's `a::before` is `content:""; position:absolute;
  width:100%; height:100%; bottom:0; left:0; background-color:#f1bc31; visibility:hidden;
  transform:scaleX(0); transition:all .2s ease-in-out; z-index:-1` and on **`:hover`**
  `visibility:visible; transform:scaleX(1)`. The label's colour is unchanged by hover
  (`:hover{color:#fff}`), so the affordance is **the slab alone** — and because the slab is
  `z-index:-1` inside the bar's `z-index:3` stacking context it paints behind the text but
  still inside the bar. Measured on the **current** row
  (`li.cl-active > a::before`): **81 × 67.8, `visibility:visible`,
  `transform:matrix(1,0,0,1,0,0)`, `rgb(241,188,49)`** — the current row is a gold block at
  rest (this is the family's only "always-on" filled row).
- **Caret:** `a.cl-dropdown-toggle::after` = `display:inline-block; margin-left:.255em`
  (**2.805 px** at 11 px); `vertical-align:.255em`; `border-top:.3em solid` (**3 px**,
  `currentColor` → white) with transparent left/right borders and no bottom border → **6 × 3
  px**, on the `Page` row only.
- **Dropdown panel:** `position:absolute; top:100%; left:0; z-index:1000; min-width:10rem`
  (**160 px**); `padding:8px 0; margin:.125rem 0 0` (**2 px**); `background:#fff; border:none`
  (the framework's `1px solid rgba(0,0,0,.15)` is removed by the `.ftco-navbar-light` rule);
  **`border-radius:4px`**; `box-shadow:0px 10px 34px -20px rgba(0,0,0,0.41)`; `font-size:16px`.
  Measured open **160 × 134.38 at `x = 166, y = 351.8`** — flush with the trigger's left edge,
  2 px under the bar's 349.8 px bottom edge. Items: `display:block; width:100%;
  padding:4px 24px; font-size:12px; color:#000` → **29.59 px** rows; **hover/`:focus` →
  `background:none; color:#fff`** — white text on the white panel, i.e. **the hovered item
  becomes invisible** in the source (the recreation must fix this; see Deltas). The framework's
  `.cl-dropdown-item.cl-active/:active{background:#007bff;color:#fff}` and
  `.disabled{color:#6c757d}` rules exist but match nothing in this markup.
- **Dropdown behaviour (`snippet.js`, verified in the browser):** two independent paths —
  `mouseenter`/`mouseleave` on every `nav .cl-dropdown` toggles `cl-show` on the `li` **and**
  the menu and sets `aria-expanded` on the trigger; `data-toggle="dropdown"` click toggles the
  same classes, closes every other open dropdown first (`ddClose`), fires the
  `show.bs.dropdown`-style CustomEvents, and — if the panel's right edge would exceed
  `documentElement.clientWidth` — sets `left:auto; right:0` inline. Keyboard: `ArrowDown` on
  the trigger opens it and focuses the first `.cl-dropdown-item:not(.disabled)`;
  `ArrowUp`/`ArrowDown` inside the panel step focus; `Escape` (document-level) closes and
  refocuses the trigger; a document-level click closes; clicking an item closes the panel
  (every item is `href="#"`, so nothing navigates). Measured: click → open
  (`aria-expanded="true"`, `cl-show` on `li` + menu, panel `166, 351.8, 160 × 134.38`),
  `Escape` → closed + `activeElement` back on the trigger (`Page`), `ArrowDown` → open with
  focus on `Page 1`, `mouseenter` → open, `mouseleave` → closed.
- **Search form (`form.searchform.cl-order-lg-last[action="#"]`):** `height:46px;
  border:1px solid rgba(255,255,255,0.1); overflow:hidden; border-radius:5px` — measured
  **257 × 46 at `x = 938, y = 292.89`** at 1280 px (vertically centred: `282 + (67.8−46)/2`),
  right edge on the container's inner edge. Inner `div.cl-form-group.cl-d-flex` is **255 × 46**
  (its `margin-bottom:16px` is clipped by the fixed height + `overflow:hidden`). **Input:**
  `width:calc(100% - 46px)` → **209 × 46**, `border:none`, `background:#fff !important`,
  `color:rgba(0,0,0,0.7) !important`, `font-size:14px`, `line-height:21px`, padding
  **`6px 12px 6px 16px`** (`.cl-form-control`'s `.375rem .75rem` + `cl-pl-3`'s `1rem`),
  `border-radius:0` (the custom `.cl-form-control{border-radius:0}` beats the framework's
  `.25rem`), `box-shadow:none !important`, `placeholder="Search"` in `rgba(0,0,0,0.7)`, and
  **no focus affordance whatsoever** (framework `:focus{outline:0}` +
  `box-shadow:none !important`; the sheet's own `:focus,:active{border-color:#000}` never
  fires because `.searchform .cl-form-control{border:none}` outranks it).
  **Button:** `.cl-form-control.search` → **46 × 46**, `background:#fff`, `cursor:pointer`,
  holding the **20 px** inline magnifier SVG (18.56 × 20 box, `fill:currentColor`
  `rgba(0,0,0,0.7)`, `viewBox="0 0 1664 1792"`). `action="#"` → submitting posts nowhere and
  appends `#` to the URL. **The field is 257 px wide at every viewport from 375 px up** (at
  375 px it spans `x = 103 → 360`), so at 320 px the toggler (85.27) + field (257) exceed the
  container's 290 px content box and the bar **wraps to 90.72 px** — a source fragility.

## Breakpoint behaviour (all values measured on the live preview)

| Width | Bar | Container | Brand strip | Wordmark | Social | Toggler | List | Search field |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 320 | `#000`, **90.72** (wrapped) | 290 @ 15 | 112 (wrapped) | `x = 15` | `x = 129` | 85.27 × 24.72 @ 15 | `none` → rows **48.58** | 257 @ 15 (own line) |
| 375 | `#000`, 66 | 345 @ 15 | 72 | 114.09 × 42 @ 15 | 176 @ 184 | @ 15, y = 302.64 | `none` → panel **330 × 389.27** @ 402.72 | 257 @ 103 → 360 |
| 768 | `#000`, 66 | 720 @ 24 | 72 | @ 39 | @ 553 | @ 24 | `none` | 257 @ 487 |
| 991 | `#000`, 66 | 720 @ 135.5 | 72 | @ 150.5 | @ 664.5 | @ 135.5 | `none` | 257 @ 598.5 |
| 992 | `#202040`, **67.8** | 960 @ 16 | 72 | @ 31 | @ 785 | hidden | `flex`, 457.44 @ 31 | 257 @ 704 |
| 1199 | `#202040`, 67.8 | 960 @ 119.5 | 72 | @ 134.5 | @ 888.5 | hidden | 457.44 @ 134.5 | 257 @ 807.5 |
| 1200 | `#202040`, 67.8 | 1140 @ 30 | 72 | @ 45 | @ 979 | hidden | 457.44 @ 45 | 257 @ 898 |
| 1280 | `#202040`, 67.8 | 1140 @ 70 | 72 | @ 85 | 176 @ 1019 (4th circle ends 1191) | hidden | 457.44 @ 85, auto margin 395.56 | 257 @ 938 → 1195 |

Mobile panel at 375 px (open): collapse box **330 × 389.27 at `x = 15, y = 402.72`**, five rows
of **48.58 px** (`padding:14.4px 0`), **`padding-bottom:10px`** on the list, current row's
label **`#f1bc31`**, other rows **`rgba(255,255,255,0.7)`**, gold slabs disabled
(`:hover:before{display:none}`, `.cl-active > a:before{display:none}`); the dropdown is
**always expanded in flow** (`display:block !important; position:static; background:#000`,
measured **330 × 134.38 at `y = 501.88`**) with four items **12 px / `rgba(255,255,255,0.8)` /
`padding:4px 24px` / 29.59 px**, indented 24 px under the `Page` row. Bar height
**66 → 479.98 px** open, back to **66 px** on the second activation (`aria-expanded` `true` →
`false`), verified at both 375 px and 320 px. Because the container wraps below 992 px, the
open panel sits **below** the toggler + search-field line rather than beside it.

## Type and colour summary

- `body{font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
  font-weight:normal; background:#fafafa; color:gray}` (`gray` = `#808080` measured).
- `a{transition:.3s all ease; color:#f1bc31}` — **inline links are the same gold as the hover
  slab**; `a:hover,a:focus{text-decoration:none !important; outline:none !important;
  box-shadow:none}`.
- `h2,.h2{line-height:1.5; font-weight:400; font-family:"Poppins", Arial, sans-serif;
  color:#000}` + `.heading-section{font-size:28px; color:#000}` (28 px wins over the
  framework's `2rem` = 32 px).
- Self-hosted **Roboto 400/700** are declared and never resolve (the `body` stack's `Roboto`
  is overridden by the later Poppins rule); the archive's **100/300** files are not even
  declared → **247,856 B of dead font payload**.
- Token table: bar `#202040` · gold `#f1bc31` · mobile bar + mobile sub-list `#000` · labels
  `#fff` · wordmark `#000` · circle ring `#e6e6e6`, glyph `#4d4d4d` · mobile rows
  `rgba(255,255,255,.7)` · mobile items `rgba(255,255,255,.8)` · toggler
  `rgba(255,255,255,.5)` · field hairline `rgba(255,255,255,.1)` · search ink
  `rgba(0,0,0,.7)` · page `#fafafa` · ink `gray` · panel shadow
  `0 10px 34px -20px rgba(0,0,0,.41)` · radii `5px` field / `4px` panel / `50%` circles / `0`
  everywhere else.

## Fidelity pitfalls (things that will bite an implementer)

1. **Two bands, not one.** The wordmark and the social circles live in a **white row above the
   bar**, not inside it — the bar itself is only the five rows + the search form. Getting this
   wrong collapses the whole design.
2. **`#202040`, not `#1089ff`.** This variant is the family's **dark** one; the sibling
   `website-menu-11` (ensign) uses the blue. Do not carry that colour over.
3. **The list is pinned LEFT by `margin-right:auto`, the form last by `order`.** The `-11`
   sibling does the opposite (its list is `margin-left:auto` + a CTA). Here the rows sit at the
   container's inner left edge and the free space sits **between the rows and the field**.
4. **The current row keeps the gold slab at rest.** A recreation that only shows the slab on
   hover loses the design's most visible element (the source's `HOME` is a gold block in every
   screenshot). Also add `aria-current` — the source's signal is colour-only.
5. **The slab must stay inside its row** and behind the label: `inset-0`, `-z-10` /
   `overflow-hidden` on the row, `origin-left`, `transition-transform .2s ease-in-out`,
   `scale-x-0 → scale-x-100` on hover.
6. **The search field is 257 px at every width and never shrinks in the source** — which is why
   the source's own bar wraps at 320 px. Shrink it (`w-[257px] max-w-full shrink`) so 320 px
   stays on one line.
7. **Item hover is invisible in the source** (white on white); don't copy it. Pick a visible
   surface and keep the text readable.
8. **No icon font is loaded**: don't reproduce empty circles just because the live preview
   shows them; draw real icons (ColorLib's own screenshot does).
9. **The mobile dropdown is always expanded** in the source (`display:block !important`) — an
   in-flow `#000` sub-list, not a disclosure. Keep `aria-expanded` truthful either way.
10. **`action="#"`** — replace it with a real submit handler (and a labelled input; the source
    has a placeholder only) rather than shipping a form that reloads to `#`.
11. **Nothing is sticky** and the page does not scroll in the source: the recreation adds real
    content below the bar, and the bar must scroll away with it.
12. **Dead code to drop:** the `#343a40` `cl-bg-dark` surface, the `cl-navbar-dark`
    50 %/75 %/25 % label colours, the framework's `#007bff`/`#0056b3`/`#6c757d`/`#212529`/
    `#495057`/`#ced4da` control defaults, the unused `.cl-dropdown-item.cl-active/:active/
    .disabled` states, `cl-dropdown-menu-right`, the `@media print` block (incl. `size:a3`),
    the `:where(html) … all: revert` reset, the system `Roboto` body stack, and all eight
    Roboto woff2 files.

## Deltas (deliberate, to record in the PR)

- **New name + own copy:** `gunwale`, own two-line wordmark, own five labels, own four
  dropdown items, own heading — never `Papermag`/`Magazine`, `Home`/`Page`/`Catalog`/`Blog`/
  `Contact`, `Page 1`…`Page 4`, `Website menu #02` or `Search` verbatim.
- **13 dead `href="#"` materialised** as real in-app destinations with `scroll-margin-top`, so
  the header has something to navigate to; the source's 112 px of blank `#fafafa` below the bar
  becomes real content.
- **Real icons:** `lucide-react` social glyphs (the source renders empty circles), `Search`
  magnifier, a three-bar toggler glyph, `ChevronDown` instead of the CSS caret triangle — no
  copied inline `<path>` data.
- **Accessibility restored everywhere the source removes it:** visible `focus-visible` rings on
  the wordmark, every row, the social circles, the toggler, the search input and the dropdown
  items (`outline:none !important` in the source); a labelled `role="search"` form with a named
  submit button; `aria-current="page"` on the current row; `Escape` closes the dropdown and
  returns focus; the collapsed panel is not focusable while hidden.
- **A visible dropdown-item hover** (source: white on white) and **a visible current-row
  signal** beyond the gold slab.
- **A non-wrapping mobile bar below 375 px** (source wraps to 90.72 px at 320 px because its
  field is fixed at 257 px).
- **Google Fonts Poppins 400/500/700** instead of the eight self-hosted Roboto files (all dead
  weight), one `<link>` in `index.html`.
- **Reduced-motion handling** for the `.35s` collapse animation and the `.2s` slab wipe.
- **An added footer** linking `https://www.componentdock.com/` ("Component Dock") with a
  computed year — the source has no footer at all.
