# Ensign — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V11"** (source slug `website-menu-11` — the
Website Menus family's **coloured-bar + full-height-CTA + dropdown variant**: one
**full-bleed `#1089ff` bar** in normal flow, a left-pinned **uppercase white wordmark**, a
single **right-aligned seven-row list** whose last row is a **solid `#ff7315` block filling
the bar's height**, a **hover-and-click dropdown** panel (`#fff`, 4 px radius,
`min-width:160px`), and a `992 px` breakpoint where the bar turns **`#000`** and the list
collapses into a black panel whose only rounded element is a **`5px`-radius orange CTA** at
its bottom — all over a centred **heading band** (`padding:112px 0`), with **no images, no
content sections, no footer and no sticky chrome** anywhere).

Type is **Poppins (`body{font-family:"Poppins", Arial, sans-serif; font-size:16px;
line-height:1.8}`)**; the sheet also declares `@font-face` for self-hosted **Roboto 400/700**
and the archive ships four more **100/300** files it never declares — **none of it renders**
(nothing resolves to Roboto), so 247,856 B of the 258,214 B download is dead font payload.
Shape language is **square** except the **`4px`** dropdown panel and the **`5px`** mobile
CTA. Live preview: `https://preview.colorlib.com/theme/bootstrap/website-menu-11/`
(**HTTP 200**, 3,195 B, `<title>Website menu 01</title>`); the slug-only path
`https://preview.colorlib.com/theme/website-menu-11/` returns **HTTP 404**.
Screenshot: `website-menu-11.jpg` (HTTP 200, AVIF, 7,421 B, 1200×972 → PNG 56,753 B).
Archive: `https://preview.colorlib.com/downloads/free/website-menu-11.zip` (HTTP 200,
258,214 B) — `style.css` (17,737 B, sha256 `dd90f213…`) and `snippet.js` (5,798 B, sha256
`7bde7f8e…`) are **byte-identical** to the live files.

Spec: `openspec/specs/template-ensign/spec.md`. New name: **ensign** — a ship's ensign is
the single **solid-coloured banner** flown to identify her, and this is the family's only
bar that *is* one solid colour field (`#1089ff`) with a second solid colour field
(`#ff7315`) butted onto its end; the nautical companion to `starboard` (`website-menu-05`),
`larboard` (`-06`), `topdeck` (`-07`), `bowsprit` (`-08`), `gangway` (`-09`) and `halyard`
(`-10`). Never reuse the source slug `website-menu-11`, the name "Website Menu 11", the
`Resto` wordmark, the seven labels (`Home`, `Page`, `About`, `Menu`, `Blog`, `Contact`,
`Book a table`), the `Page 1`…`Page 4` items, the heading string `Website menu #01`, the
`cl-` utility namespace, the inline SVG bars glyph, the self-hosted Roboto woff2 files, or
any copy verbatim.

## Preview status — where the live preview actually lives (read this first)

- `https://preview.colorlib.com/theme/website-menu-11/` → **HTTP 404** (`Not Found`, 9 B).
  The *Website Menus* family does **not** live under the slug-only theme path (same as
  `-01`…`-10`).
- `https://preview.colorlib.com/theme/bootstrap/website-menu-11/` → **HTTP 200**,
  `text/html; charset=utf-8`, **3,195 B**, `<title>Website menu 01</title>`. This is the
  URL the preview host's own catalog index records:
  `https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`
  (633,990 B) →
  `"website-menu-11":{"name":"Website Menu V11","tag":"Website Menu Templates","img":"…/website-menu-11-768x622.jpg","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-11/","details":"https://colorlib.com/wp/template/website-menu-11/","purchase":"https://colorlib.com/wp/template/website-menu-11/#pricing"}`.
- Assets: `css/style.css?v=cee19396` (**17,737 B**, sha256
  `dd90f2139c9d92a28ca14c637e41677590a2312631d988452565896d63dcb525`),
  `js/snippet.js?v=d328ca19` (**5,798 B**, sha256
  `7bde7f8e394041ca6ccee3040e459ce501050c022bcd4e48f8971d8bc650627a`). There are **no image
  requests at all** (the page references no `images/` path and the archive contains no
  `images/` folder) and no extra stylesheets beyond the one `style.css`.
- Archive twin: `https://preview.colorlib.com/downloads/free/website-menu-11.zip`
  (**HTTP 200**, `application/zip`, **258,214 B**, sha256 `cbe29875…` — the ColorLib page
  rounds it to "252 KB"). Contents: `index.html` (**2,992 B**), `css/style.css`,
  `js/snippet.js`, `README.md` (**1,264 B**), **no images**, and **eight** Roboto woff2
  files — `roboto-100-latin-ext`, `roboto-300-latin-ext`, `roboto-400-latin-ext`,
  `roboto-700-latin-ext` (24,444 B each) and `roboto-100-latin`, `roboto-300-latin`,
  `roboto-400-latin`, `roboto-700-latin` (37,520 B each) = **247,856 B (96 % of the
  archive)**. `diff` live-page vs `index.html` = **head-only** (the host's `noindex` meta
  tags, a `cdnjs.cloudflare.com` `dns-prefetch` and the cache-busting query strings).
  ⚠️ The archive's `README.md` and the preview's `<title>` both say **"Website menu 01"**
  (copied from the `-01` snippet), and the live page's own `<h2>` reads **`Website menu
  #01`** — source artefacts; never reproduce them.
- Source page facts (https://colorlib.com/wp/template/website-menu-11/, HTTP 200,
  108,938 B): title "Website Menu V11 - Free Navbar with Dropdown Template 2026 -
  Colorlib"; posted **March 9, 2021** by **Rok Krivec**, 0 comments; author **Colorlib**;
  Released **September 2026**; License **CC BY 3.0**; description *"A highly adaptive and
  easy-to-use free navbar with a dropdown template that you can tailor to your needs
  quickly. It is a Bootstrap snippet, so you know performance on desktop and mobile
  devices will be top-notch."*; `meta`/`og:description` *"A flexible, fast free navbar
  template with a dropdown. No plugins, and compatible with Bootstrap 4, 5 and 6."*; the
  September 2026 update note (*plain HTML and CSS plus a few lines of vanilla JavaScript …
  the download is 252 KB (it was 261 KB) … the collapsible sections open and close without
  Bootstrap's JavaScript. The drop-down menus work without Bootstrap's JavaScript,
  including keyboard navigation.*); sibling links *previous post: Website Menu V10* /
  *next post: Website Menu V12*; `datePublished` **2021-03-09T14:08:01+00:00**,
  `dateModified` **2026-09-25T10:42:07+00:00**.
- **Destination probes:** none are needed — the source has **no second page**. Every one of
  its **11** links is `href="#"` (the `Page` trigger plus its four items plus the six plain
  rows); the wordmark's `index.html` is the only real href and it is just the snippet's own
  page. So **eleven destinations must be materialised as in-page content** in the
  recreation, and a real `index.html`-equivalent home target for the wordmark.

## Live render cross-check (2026-10-12; 1280×800, 1200, 1199, 992, 991, 768, 375)

| Width | Bar bg | Bar height | Container | Wordmark | Nav list | Toggler | Collapse |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 375 px | **`#000`** | **66 px** | 345 px @ `x = 15` | `x = 15, y = 220` | `display:none` closed / rows **48.58 px** open | visible, **85.27 × 24.72** @ `x = 274.73, y = 230.64` | open **345 × 350** @ `y = 266` (bar → **416 px**) |
| 768 px | `#000` | 66 px | 720 px @ `x = 24` | `x = 24` | `display:none` | visible @ `x = 658.73` | open = 720 wide |
| 991 px | `#000` | 66 px | **720 px** @ `x = 135.5` | `x = 135.5` | `display:none` | visible @ `x = 770.23` | open = 720 wide |
| 992 px | **`#1089ff`** | **67.8 px** | **960 px** @ `x = 16` (cap not binding) | `x = 31, y = 220.89` | **row layout** from `x = 298.34`, ends 920 | hidden | `display:flex` |
| 1199 px | `#1089ff` | 67.8 px | **960 px** @ `x = 119.5` | `x = 134.5` | rows `401.84 … 1064.5` | hidden | visible |
| 1200 px | `#1089ff` | 67.8 px | **1140 px** @ `x = 30` | `x = 45` | rows `492.34 … 1155` | hidden | visible |
| 1280 px | `#1089ff` | 67.8 px | **1140 px** @ `x = 70` | **68.55 × 46** @ `x = 85, y = 220.89` | ul **662.66** @ `x = 532.34` (auto margin **362.797**), rows `532.34 … 1195` | hidden | visible |

Row rects at 1280 px: `Home 532.34–613.34`, `Page 613.34–699.91` (caret included),
`About 699.91–787.81`, `Menu 787.81–868.2`, `Blog 868.2–946.78`, `Contact 946.78–1053.14`,
`Book a table 1053.14–1195` — every row **67.8 px** tall (`padding:24px 20px` on 11 px type
with `line-height:19.8px`).

Other measured details at 1280×800: page background `#fafafa`, body text `gray`
(`rgb(128,128,128)`), `section.ftco-section` **1280 × 389.8** at `y = 0` with
`padding:112px 0`; `h2.heading-section` **540 × 42** at `x = 370, y = 112`
(`28px / 400 / Poppins / #000 / line-height:42px`, `margin-bottom:8px`), its 50 % column
570 px wide with `margin-bottom:48px`; the bar **1280 × 67.8** at `y = 210`; the nav's
container `display:flex`, `justify-content:space-between`, `flex-wrap:nowrap`; the dropdown
panel **160 × 134.38** at `x = 613.34, y = 279.8` (2 px below the bar's 277.8 px bottom);
`html` height **371.33 px** and `scrollHeight` = the 800 px viewport, i.e. **the source page
does not scroll**; `scrollTo(0, 300)` therefore moves nothing and proves the bar is simply
in flow (`position:relative`; the sheet has **zero** `sticky`, checked).

## Live interaction cross-check (CDP, 2026-10-12)

- **Hover:** `mouseenter` on `nav .cl-dropdown` → `li.cl-dropdown.cl-show` +
  `.cl-dropdown-menu.cl-show`, `aria-expanded="true"`, menu `display:block` at
  `x = 613.34, y = 279.8`. **`mouseleave`** → both classes removed, `display:none`.
- **Click:** clicking the trigger (an `<a href="#">` with `data-toggle="dropdown"`) sets the
  same classes + `aria-expanded="true"` and `display:block`; a document click elsewhere or
  a second click closes it; `Escape` closed it and left `document.activeElement` on the
  trigger anchor. The click path also carries the source's overflow guard
  (`m.style.left = 'auto'; m.style.right = '0'` when the panel's right edge would exceed
  `documentElement.clientWidth`).
- **Keyboard:** `ArrowDown` on the trigger clicks it then focuses the first
  `.cl-dropdown-item:not(.disabled)`; inside the panel `ArrowUp`/`ArrowDown` step focus
  through the items; `Escape` closes and refocuses the trigger.
- **Mobile (375 px):** fresh load → collapse `display:none`; activating the toggler →
  `cl-collapsing` (height animated to the scrollHeight over `0.35s ease`) then `cl-show`,
  bar **66 → 416 px**, collapse box **345 × 350** at `x = 15, y = 266`, list
  `flex-direction:column` + `padding-bottom:10px`, rows **48.58 px**; the current row
  (`Home`) computed **`#fff`** while the other six are **`rgba(255,255,255,0.7)`**; the CTA
  row is **`#fff` on `rgb(255,115,21)`** with **`border-radius:5px`** and
  `padding:14.4px 15px`, spanning the panel's full width. Activating the dropdown row made
  its menu **`position:static`**, `background rgb(0,0,0)`,
  `border-left:1px solid rgba(255,255,255,0.3)`, `border-radius:0`, `box-shadow:none`,
  items **`rgba(255,255,255,0.8)`** at 12 px / 29.59 px, full width under the hairline.

## Source facts worth keeping

- **The bar is one solid colour, full-bleed and in flow.** `background:#1089ff !important;
  z-index:3; padding:0` — it touches both viewport edges and the orange CTA stops at the
  container's inner edge (1195 px at 1280), so the blue band visibly continues past it.
  Nothing in the sheet is sticky or fixed; the bar simply scrolls away.
- **The bar's colour has three competing declarations and only one renders.** The markup's
  `cl-bg-dark` asks for **`#343a40`** (`!important`), `.cl-navbar-dark`'s label colours ask
  for `rgba(255,255,255,0.5)` resting / `.75` hover / `.25` disabled, and the sheet ends
  with `.ftco-navbar-light{background:#1089ff !important}` plus
  `.ftco-navbar-light … > .cl-nav-item > .cl-nav-link{color:#fff; opacity:1 !important}` and
  `.ftco-navbar-light … .cl-nav-item.cl-active > a{color:#fff}`. The later `.ftco-navbar-light`
  declarations win (equal specificity → source order; higher specificity for the label
  rule), so the **real** resting surface is blue and **every** label — active or not — is
  plain white. The `#343a40` dark surface, the 50 %-white labels and the `.75` hover **never
  render**. Do not reproduce them.
- **The list is right-aligned by a live `margin-left:auto`.** At ≥992 px the collapse
  wrapper is `flex-basis:auto; flex-grow:1; display:flex !important`, so it grows to the
  container's right content edge and the list's `cl-ml-auto` absorbs the slack — computed
  **362.797 px** at 1280 px. (Contrast the `-10` sibling, where an identical auto margin is
  **inert** because that bar's row is a plain flex row of `width:auto` blocks.)
- **Eleven dead links.** Every nav row, the dropdown trigger and all four dropdown items are
  `href="#"`; only the wordmark points at `index.html`. A recreation that ships `href="#"`
  would be a straight downgrade — materialise the destinations.
- **The dropdown has two independent open paths** — `mouseenter`/`mouseleave` **and** the
  Bootstrap-style `data-toggle="dropdown"` click handler — and both toggle `.cl-show` on the
  `li` *and* on the `.cl-dropdown-menu`, plus `aria-expanded` on the trigger. The click path
  is the one with the overflow guard and the keyboard handlers (`ArrowDown`/`ArrowUp`,
  `Escape`, item-activation close, outside-click close).
- **No hover affordance exists anywhere in this chrome**: the labels' `:hover{color:#fff}`
  equals their resting colour, the CTA has no hover rule at all, and
  `a:hover, a:focus{text-decoration:none !important; outline:none !important}` removes every
  outline. Restoring hover + `focus-visible` is an intended delta.
- **The current row is invisible on desktop** (`Home` computes `#fff`, exactly like the other
  six; only inside the mobile panel does the active row differ, at `#fff` vs
  `rgba(255,255,255,.7)`). Add a real non-colour signal (`aria-current` + a visible mark) as
  a delta.
- **The mobile panel turns black, and the mobile dropdown turns into an inline sub-list**:
  `position:static; float:none; background:#000; border-left:1px solid rgba(255,255,255,.3);
  border-radius:0; box-shadow:none`, items `rgba(255,255,255,.8)`.
- **The CTA changes shape at the breakpoint**: `border-radius:0` and `padding:24px 20px`
  (a bar-height slab) on desktop; `border-radius:5px` and `padding:14.4px 15px` (a rounded
  block) inside the mobile panel.
- **All 247,856 B of webfonts are dead**: `@font-face` declares only Roboto 400/700
  (latin + latin-ext) and nothing resolves to Roboto because the later
  `body{font-family:"Poppins", Arial, sans-serif}` wins; the archive's `roboto-100*` /
  `roboto-300*` files are not even declared. The download is essentially a font payload that
  never renders — use Google Fonts Poppins instead.
- **The page is 371 px tall and does not scroll**, and the heading reads "Website menu #01"
  (a copy-paste artefact from the `-01` snippet, echoed in the preview's `<title>` and the
  archive `README.md`). The recreation ships real content and its own heading.

## What makes this variant different from its siblings (`-01`…`-10`)

1. **A saturated brand-colour bar** (`#1089ff`) — every sibling ships a white or transparent
   bar; this is the family's only bar that is a solid colour field.
2. **A solid colour CTA that fills the bar's height** (141.86 × 67.8 px, `border-radius:0`)
   instead of a pill — and the family's only CTA with **no hover rule at all**.
3. **A dropdown that opens on hover *and* on click**, with both `.cl-show` classes on the row
   and the menu, plus a `left:auto; right:0` overflow guard.
4. **A `992 px` breakpoint that flips the bar's colour to black** (`#000 !important` inside a
   `max-width:991.98px` media block) instead of merely hiding the list.
5. **A mobile dropdown that becomes an inline sub-list** (`position:static`, black,
   `border-left` hairline, `radius:0`, no shadow, `rgba(255,255,255,.8)` items) rather than a
   floating panel.
6. **A rounded CTA only inside the mobile panel** (`5px`) — the family's only two-radius
   variant (0 desktop / 5 px mobile), plus a `4px` desktop dropdown.
7. **No images in the download at all** — the archive is markup + stylesheet + script + a
   README + dead webfonts; the whole 252 KB is chrome.
8. **A heading band above the bar that is part of the same `<section>`** (`padding:112px 0`
   wrapping heading *and* nav), which is why the page's 112 px bottom padding closes it.

## Global tokens

| Token | Value | Notes |
| --- | --- | --- |
| brand blue | `#1089ff` | the bar (desktop), dropdown-item hover, page `a` default |
| CTA orange | `#ff7315` | the CTA row at every width (square desktop / `5px` mobile) |
| bar black | `#000` | the bar below 992 px and the mobile dropdown panel |
| white | `#fff` | wordmark, all desktop labels, current row, caret, CTA label, dropdown surface |
| mobile row | `rgba(255,255,255,0.7)` | non-current rows in the panel |
| mobile item | `rgba(255,255,255,0.8)` | dropdown items in the panel |
| toggler | `rgba(255,255,255,0.5)` | the `☰ Menu` button and its `currentColor` icon |
| hairline | `rgba(255,255,255,0.3)` | mobile dropdown `border-left` |
| dropdown item | `#000` resting → `#fff` on `#1089ff` hover | desktop items |
| page / ink / heading | `#fafafa` / `gray` (`#808080`) / `#000` | body + `h2.heading-section` |
| panel shadow | `0 10px 34px -20px rgba(0,0,0,0.41)` | desktop dropdown only — **the bar has no shadow** |
| radii | `0` everywhere except **`4px`** (desktop dropdown) and **`5px`** (mobile CTA) | `button{border-radius:0}` |
| type | `"Poppins", Arial, sans-serif`; body 16 px / `1.8` / 400 | self-hosted Roboto 400/700 (+ 4 undeclared 100/300) never render |
| type scale | labels **11 px / 500 / uppercase / `2px` tracking** (`padding:24px 20px`, `line-height:19.8px`) → 67.8 px; wordmark **20 px / 400 / uppercase** (`line-height:36px`, `padding:5px 0`); dropdown items **12 px** (29.59 px rows); heading **28 px** (42 px); toggler **16 px / `1.6px` tracking** with a 16 px icon; mobile rows 48.58 px | chrome |
| motion | `a` `.3s all ease`; collapse `height 0.35s ease`; dropdown has **no** transition; reduced-motion disables the collapse transition | |

## Section 0 — `section.ftco-section` (heading band + the bar's wrapper)

Document order: the `<section>` opens first and contains (a) the heading container/row/column
and (b) the `<nav>`, then the `<script>`. Its `padding:112px 0` supplies the space above the
heading **and** the space below the bar; the heading is a centred `cl-col-md-6`
(`flex:0 0 50%` at ≥768 px, `margin-bottom:48px`) holding an `h2.heading-section`
(**28 px / 400 / `line-height:42px` / `#000`**, `margin-bottom:8px`). In the recreation the
band's *top* half is kept (112 px above an own-copy heading) while the *bottom* half becomes
the first real content section — the source's blank 112 px + 371 px page is filler.

## Section 1 — `nav.ftco_navbar` (the bar)

`nav.cl-navbar.cl-navbar-expand-lg.cl-navbar-dark.ftco_navbar.cl-bg-dark.ftco-navbar-light#ftco-navbar`
with `position:relative; z-index:3; padding:0; background:#1089ff !important` — full-bleed,
**1280 × 67.8 px at `y = 210`** at 1280 px, **66 px** and `#000` below 992 px. Inside,
`div.cl-container` (`width:100%; padding:0 15px; margin:0 auto`, max-widths 540/720/960/1140,
gutters zeroed below 992 px) is `display:flex; flex-wrap:nowrap; justify-content:
space-between; align-items:center`, holding three children in order: the wordmark anchor, the
toggler button, the collapsible list wrapper.

## Section 2 — the wordmark (`a.cl-navbar-brand`)

**20 px / 400 / uppercase / `#fff` / `line-height:36px` / `padding:5px 0` /
`margin-right:16px`**, `display:inline-block`, `white-space:nowrap`; measured
**68.55 × 46 px at `x = 85, y = 220.89`** at 1280 px — vertically centred in the 67.8 px bar
(220.89 + 23 = 243.89 vs the bar's centre 243.9) — and `x = 15, y = 220` at 375 px. Its
`:hover`/`:focus` colour is the same `#fff`, so there is **no hover feedback**; it is a link
to the top of the page and must keep a visible focus ring (the source kills all outlines).

## Section 3 — the toggler (`button.cl-navbar-toggler`)

A real `<button type="button" data-toggle="collapse" data-target="#ftco-nav"
aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">` with
`border:none; cursor:pointer; padding:4px 0 4px 12px; font-size:16px;
text-transform:uppercase; letter-spacing:0.1em; color:rgba(255,255,255,.5) !important;
:focus{outline:none !important}`. Its content is `span.fa.fa-bars` › an inline SVG bars
glyph (`.cl-icon{height:1em; width:auto; fill:currentColor; display:inline-block}` → **16 px**
tall, with the inline `vertical-align:-0.1429em` = −2.29 px) followed by the literal text
`Menu`. Measured **85.27 × 24.72 px** at `x = 274.73, y = 230.64` at 375 px (658.73 at 768,
770.23 at 991) — flush with the container's right edge and vertically centred in the 46 px
row. `display:none` at ≥992 px. In the recreation: a `<button>` with an accessible name,
`aria-expanded`, `aria-controls`, a `lucide-react` `Menu` at 16 px and a **visible focus
ring** (delta).

## Section 4 — the nav list and its rows (`ul.cl-navbar-nav.cl-ml-auto`)

One list, seven `li.cl-nav-item`, in source order — current/home (`cl-active`, `#`), the
dropdown row (`cl-dropdown` › `a.cl-nav-link.cl-dropdown-toggle[id=dropdown04]
[data-toggle=dropdown][aria-haspopup=true][aria-expanded=false]` + the four-item
`.cl-dropdown-menu`), four plain rows, then `li.cl-nav-item.cta`. Desktop rows are
**11 px / 500 / uppercase / `letter-spacing:2px` / `#fff` / `opacity:1`** with
**`padding:24px 20px`** and `line-height:19.8px` → **67.8 px**, stretched to the bar's full
height; the list itself is `display:flex; flex-direction:row; padding-left:0` with
**`margin-left:auto`** inside the `flex-grow:1` wrapper (`362.797 px` absorbed at 1280 px),
ending at the container's inner right edge (**1195 px**). Below 992 px the whole wrapper is
`display:none` and the toggler takes over. The caret on the dropdown row is a
`::after` CSS triangle — `border-top:0.3em solid` (**3 px**, `currentColor`),
`margin-left:0.255em` (**2.805 px**), `vertical-align:0.255em` — replace it with
`lucide-react` `ChevronDown`.

## Section 5 — the CTA row (`li.cl-nav-item.cta > a`)

`background:#ff7315; color:#fff; border-radius:0` with the same 11 px/500/uppercase/2 px
type and `padding:24px 20px` → **141.86 × 67.8 px at `x = 1053.14`**, i.e. a full-height
orange slab whose right edge is the container's inner edge (1195 px) while the blue bar
continues to 1280. Inside the mobile panel it becomes `#ff7315` with
**`border-radius:5px`** and `padding:14.4px 15px`, spanning the panel's width as the last
row of the stack. It has **no hover rule** in the source (delta: add one).

## Section 6 — the dropdown panel (`div.cl-dropdown-menu`)

`position:absolute; top:100%; left:0; z-index:1000; min-width:160px; padding:8px 0;
margin:2px 0 0; background:#fff; border:none; border-radius:4px;
box-shadow:0 10px 34px -20px rgba(0,0,0,.41); font-size:16px` — measured
**160 × 134.38 px at `x = 613.34, y = 279.8`** at 1280 px (left-aligned with its trigger,
2 px under the bar). Rows are `display:block; width:100%; padding:4px 24px`, **12 px**,
**`#000`**, **29.59 px** tall, hover/`:focus` → `background:#1089ff; color:#fff`. Opening is
**hover *or* click** (`.cl-show` on the row and the menu, `aria-expanded` on the trigger);
keyboard support is `ArrowDown` (trigger → first item), `ArrowUp`/`ArrowDown` (through
items), `Escape` (close + refocus trigger), outside click / item activation (close), plus
the `left:auto; right:0` overflow guard. The unused `.cl-dropdown-item.cl-active/:active`
(`#007bff`) and `.disabled` (`#6c757d`) rules and the `cl-dropdown-menu-right` class are dead
code here. Below 992 px the panel becomes **`position:static; float:none; background:#000;
border-left:1px solid rgba(255,255,255,.3); border-radius:0; box-shadow:none; margin-top:2px`**
with `rgba(255,255,255,.8)` items.

## Section 7 — below 992 px: the black bar and the collapse

The bar is `background:#000 !important; position:relative; top:0; padding:10px 15px` →
**66 px** (10 + 46 + 10). The list is `display:none` (`cl-collapse:not(.cl-show)`) until the
toggler animates it open (`cl-collapsing` → `height:0 → scrollHeight` over **`0.35s ease`**,
then `.cl-show`): the panel is `flex-direction:column`, full container width, with
`padding-bottom:10px`, and each of the seven rows is **48.58 px** (`padding:14.4px 0` at
11 px/19.8 px). Resting rows are `rgba(255,255,255,.7)` except the current one (`#fff`), and
the CTA is the rounded orange block described above. Measured at 375 px: bar **66 → 416 px**,
panel **345 × 350** at `x = 15, y = 266`. In the recreation the toggler keeps a visible focus
ring (the source's `outline:none !important` is a delta to fix) and the panel is a real
component state, not a class-name hack.

## Screenshot read-through (1200×972, AVIF→PNG; desktop render re-checked at 1280×800)

A browser-chrome mock of the live preview at rest, address bar reading
`preview.colorlib.com`. Under it, on a flat pale grey page, a centred black heading
"Website menu #01" at ~56 px, then a **full-bleed saturated blue bar about 68 px tall with
hard top and bottom edges, no border, no radius and no shadow**: at its left the uppercase
tracked-out white wordmark `RESTO` at ~20 px, and at its right a run of six tracked-out
uppercase white labels — `HOME`, `PAGE` with a small white caret, `ABOUT`, `MENU`, `BLOG`,
`CONTACT` — ending in a **flat orange rectangle reading `BOOK A TABLE`** that fills the
bar's whole height and stops at the container's inner edge, leaving a short stretch of blue
between it and the right viewport edge. Below the bar: pale grey and nothing else — no
sections, no images, no footer. That frame — one solid blue band, a left wordmark, six white
labels + a caret + one solid orange slab — is the design being replicated; the screenshot is
also where the `#1089ff` / `#ff7315` pair is most obvious, and the stylesheet confirms both.

## Fidelity gotchas

1. **The bar is one solid colour and full-bleed** (`#1089ff`, `padding:0`, 67.8 px) — never
   white, never transparent, never a container-width bar; the orange CTA stops at the
   container's inner edge while the blue continues.
2. **The bar turns black below 992 px** (`#000`, `padding:10px 15px`, 66 px) — a colour
   change, not just a layout change.
3. **The list is right-aligned by a live `margin-left:auto`** inside a `flex-grow:1`
   wrapper; do not fake it with `justify-content:flex-end` on the bar row without keeping the
   geometry (list ends exactly at the container's inner right edge).
4. **Every desktop label is `#fff`, including the current one**, and there is **no hover
   state at all** — add hover + `focus-visible` + a real current-page signal and record them
   as deltas.
5. **The dropdown opens on hover *and* click**, with `.cl-show` mirrored on the row and the
   menu and `aria-expanded` on the trigger; the click path owns the keyboard support
   (`ArrowDown`/`ArrowUp`, `Escape`, item activate, outside click) and the overflow guard.
6. **The panel is `left:0` under its trigger, `min-width:160px`, `padding:8px 0`,
   `margin-top:2px`** — 2 px below the bar, flush with the trigger, not centred and not
   right-aligned.
7. **The CTA's radius is width-dependent**: `0` on desktop, `5px` inside the mobile panel; the
   only other rounding in the design is the dropdown's `4px`.
8. **The mobile dropdown is in flow** (`position:static`, black, hairline left border, no
   shadow) — it must not float over the panel.
9. **The mobile rows are 48.58 px** (`.9rem` vertical padding at 11 px) and the CTA is the
   last row, not a separator above the list.
10. **The toggler's label and the icon share `rgba(255,255,255,.5)`** (`fill:currentColor`,
    16 px icon, `letter-spacing:1.6px`), and the source kills its focus outline — restore it.
11. **All eleven destinations are dead in the source** (`href="#"`); materialise them, give
    every target `scroll-margin-top` ≥ the bar height, and ship zero `href="#"`.
12. **Drop the dead code**: the `#343a40` `cl-bg-dark` surface, the `cl-navbar-dark` 50 %/75 %
    /25 % label colours and its `border-color`, the `#007bff`/`#0056b3` page-link defaults, the
    `#6c757d` disabled colour, the unused `:active`/`.disabled`/`cl-dropdown-menu-right` rules,
    the `@media print` block, the `:where(html) … all: revert` reset, the system `Roboto`
    stack and all eight Roboto woff2 files, and the `cl-` namespace itself.
13. **Never copy**: the source's seven labels, its `Page n` items, its `Resto` wordmark, its
    `Website menu #01` heading, the `cl-` classes, the inline SVG path, or any copy verbatim.
14. **No sticky header** — and the source's 371 px non-scrolling page must be replaced with
    real content so the bar genuinely scrolls away.

## Reference artifacts (for the implementer)

- `/tmp/wm11/prev.html` — live preview HTML (**3,195 B**).
- `/tmp/wm11/style.css` — **17,737 B**, sha256 `dd90f213…` (**byte-identical** to the archive
  copy `z/website-menu-11/css/style.css`).
- `/tmp/wm11/snippet.js` — **5,798 B**, sha256 `7bde7f8e…` (byte-identical to the archive
  copy) — the hover/click dropdown, the collapse, and the keyboard handlers.
- `/tmp/wm11/wm11.zip` — the snippet archive (**258,214 B**, sha256 `cbe29875…`), extracted
  to `/tmp/wm11/z/website-menu-11/`: `index.html` (2,992 B, archive twin), `README.md`
  (1,264 B) and the eight (unused) Roboto woff2 files.
- `/tmp/wm11/page.html` — the ColorLib template page (**108,938 B**) — source of the
  description, posted/released/license and download-size facts.
- `/tmp/wm11/cat.js` — the preview catalog index (**633,990 B**) mapping the slug to
  `theme/bootstrap/`.
- `/tmp/wm11/shot.png` — the 1200×972 screenshot (56,753 B, converted from the 7,421 B AVIF
  original) — the source of the visual read-through.
- `/tmp/wm11/measure.json` / the harness workspace dump — the per-width computed-style dump
  (bar, container, brand, seven rows, toggler, collapse).
- `/tmp/wm11/interactions.json` — the hover/click/Escape dropdown dump and the mobile
  collapse + mobile dropdown dump.
- `/tmp/wm11/shots/desktop1280.png`, `phone375.png`, `phone375-menu-open.png` — live captures
  at 1280×800 (blue bar + orange slab + heading band), 375×800 (black bar with `RESTO` and
  `☰ MENU`) and 375×800 with the panel open (black stack, indented dropdown items behind a
  hairline, rounded orange CTA at the bottom).
