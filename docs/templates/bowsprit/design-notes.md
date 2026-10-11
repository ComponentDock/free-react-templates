# Bowsprit — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V08"** (source slug `website-menu-08` —
the Website Menus family's **CTA variant**: one transparent dark-on-photo nav row
with the wordmark at the left, a five-item list (third item a hover dropdown) and
a **square blue `#007bff` CTA block in a list of its own** at the right, all over a
`100vh` full-bleed image band, with an **inline collapse** — not a panel — below
768 px).

Type is **Quicksand (400/600/700 declared; the sheet itself asks for weight 800 on
the 32 px wordmark and bold on the CTA)**. Shape language is **square except
`4px`**: the flyout surface and the hamburger button are the only rounded things
on the page, the CTA block is a hard-cornered rectangle. Live preview:
`https://preview.colorlib.com/theme/bootstrap/website-menu-08/` (**HTTP 200**,
2,633 B, `<title>Website Menu #8</title>`); the slug-only path
`https://preview.colorlib.com/theme/website-menu-08/` returns **HTTP 404**.
Screenshot: `website-menu-08.jpg` (HTTP 200, AVIF, 1200×972, 126,320 B).
Archive: `https://preview.colorlib.com/downloads/free/website-menu-08.zip`
(HTTP 200, 649,931 B) — `style.css` (16,566 B, sha256 `e07e05ef…`) and
`snippet.js` (6,988 B, sha256 `264a1e5e…`) are **byte-identical** to the live
files.

Spec: `openspec/specs/template-bowsprit/spec.md`. New name: **bowsprit** — the
spar a vessel projects forward from its bow, for the element that juts out past
the rest of the bar (the CTA); the nautical companion to `starboard`
(`website-menu-05`), `larboard` (`-06`) and `topdeck` (`-07`). Never reuse the
source slug `website-menu-08`, the name "Website Menu 08", the "Brand" wordmark,
the six source labels, the three flyout labels, the `cl-` utility namespace, the
inline SVG hamburger data URI, the self-hosted Quicksand woff2 files, or any copy
verbatim.

## Preview status — where the live preview actually lives (read this first)

- `https://preview.colorlib.com/theme/website-menu-08/` → **HTTP 404**
  (`Not Found`, 9 B). The *Website Menus* family does **not** live under the
  slug-only theme path (same as `-01`…`-07`).
- `https://preview.colorlib.com/theme/bootstrap/website-menu-08/` → **HTTP 200**,
  `text/html`, **2,633 B**, `<title>Website Menu #8</title>`. This is the URL the
  preview host's own catalog index records:
  `https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`
  (633,990 B) →
  `"website-menu-08":{"name":"Website Menu V08","tag":"Website Menu Templates","url":"https://preview.colorlib.com/theme/bootstrap/website-menu-08/"}`.
- Assets: `css/style.css?v=ee2330e9` (**16,566 B**, sha256
  `e07e05efac8524999c07d7e9e9d7608f2aa2a13bde66da0e66fd09e5ce31f871`),
  `js/snippet.js?v=fdfd2d20` (**6,988 B**, sha256
  `264a1e5eca9b73c2c1ba49ede2087a2ceedaf84b37d76796ea064eb133fa1191`).
- Archive twin: `https://preview.colorlib.com/downloads/free/website-menu-08.zip`
  (**HTTP 200**, `application/zip`, **649,931 B**, sha256 `fd95309f…` — the
  ColorLib page rounds it to "635 KB"). Contents: `index.html` (2,430 B),
  `css/style.css` (16,566 B), `js/snippet.js` (6,988 B), `README.md` (1,264 B),
  `images/hero_1.jpg` (1900×1267, 475,413 B) and **6** Quicksand woff2 files
  (400/600/700 × latin/latin-ext). **No icon font at all** in this variant.
  `diff` live-page vs `index.html` shows **head-only** differences (the preview
  host's `noindex` meta tags + cache-busting query strings).
- Source page facts (https://colorlib.com/wp/template/website-menu-08/, HTTP 200,
  108,889 B): title "Website Menu V08 - Free Transparent Menu With CTA 2026 -
  Colorlib"; *"To make your call-to-action pop, this free transparent menu with
  CTA template will do you well. It is a clean and nifty solution that will help
  guide your visitors around your website easily and comfortably."*; Author
  **Colorlib**; Released **September 2026**; License **CC BY 3.0**; *"this snippet
  is now plain HTML and CSS plus a few lines of vanilla JavaScript: no jQuery, no
  Bootstrap files, no plugins. The download is 635 KB (it was 2.0 MB)."*;
  `datePublished` **2021-01-28**, `dateModified` **2026-09-25**.

## Live render cross-check (2026-10-11; 1280×800, 375×800, 1200/1199/1100/992/767)

| Width | Header | Navbar | Row height | Nav-label padding | Container |
| --- | --- | --- | --- | --- | --- |
| 375 px | `padding:0`, `74 px` tall | **`#000`**, `8px 16px` | collapse rows `40 px` (expanded `243 px` total) | `8px 0` (column) | full width, gutters `0` |
| 767 px | `padding:0`, `74 px` tall | **`#000`** | — (hamburger only) | collapse | `<768 px` gutters `0` |
| 992 px | `padding:30px 0`, `118 px` tall | transparent | `58 px` | `8px 8px` | max **960 px** |
| 1100 px | `padding:30px 0`, `118 px` tall | transparent | `58 px` | `8px 8px` | max **960 px** |
| 1199 px | `padding:30px 0`, `118 px` tall | transparent | `58 px` | `8px 8px` | max **960 px** |
| 1200 px | `padding:30px 0`, `138 px` tall | transparent | `78 px` | `27.2px 8px` | max **1140 px** |
| 1280 px | `padding:30px 0`, `138 px` tall | transparent | `78 px` | `27.2px 8px` | max **1140 px** |

Measured details at 1280×800: header rect **1265 × 138** at `y = 0`, `z-index:5`;
navbar rect **1265 × 78** at `y = 30` with `background:rgba(0,0,0,0)`;
`div.cl-container` `max-width:1140px`, `15 px` gutters, `display:flex`,
`justify-content:space-between`, `align-items:center`; wordmark rect **142 × 58**
at `x = 78` — **32 px / 800 / letter-spacing 6.4 px / uppercase / `#fff` /
line-height 48 px / `padding:5px 0` / `margin-right:16px`**; the five nav labels
`16px/400`, `Home` **`#fff`**, the other four **`rgba(255,255,255,0.8)`**,
`padding:27.2px 8px` giving a **78 px** row, `Home` at `x = 506` and `News` ending
at `x = 846`; dropdown parent rect **90 × 78** with a `0.3em` (**4.08 px**)
`border-top` caret at `margin-left`/`vertical-align` `0.255em`; CTA rect
**119 × 43** at `x = 1069` / `y = 48` (`padding:15px 20px`, `line-height:1` →
`12.8 + 15 + 15 = 42.8 ≈ 43`); hero rect **1265 × 800** (= `100vh`), background
`cover` / `50% 50%` / `no-repeat`, image inlined in the markup; `body` height
**1600 px** (= `200vh`), `position:relative`.

Open dropdown (after `mouseenter` on the `Services` `li`): the `li` gains
`cl-show`, the toggle's `aria-expanded` becomes `"true"`, the flyout measures
**182 × 121** at `x = 640` / `y = 98` — `display:block`, `position:absolute`,
`top:78.375px`, `left:0`, `z-index:1000`, `min-width:182px` (`13em` × its own
`14px` type), `padding:8px 0`, `margin-top:-10px`, `font-size:14px`,
`border-radius:4px`, `border:none`,
`box-shadow:0 2px 30px 0px rgba(0,0,0,.2)`, background `#fff`, colour `#212529`,
and the `::before` arrow box is **14 × 14** at `left:18.1875px` (= `10%`) /
`bottom:100%` with `border:7px solid transparent; border-bottom-color:#fff`
(hidden below 992 px). Rows are **182 × 35**: `display:block`, `padding:7px 24px`,
`14px/400`, `#212529`, `white-space:nowrap`; hover = **`background:#007bff;
color:#fff`**.

Mobile (375 px): header `74 px` tall with `padding:0`; navbar **`#000`** with
`8px 16px`, `flex-wrap:wrap`, `justify-content:space-between`; container width
`360` with **`0` gutters**; wordmark unchanged (**142 × 58** at `x = 16`);
hamburger button **56 × 40** at `x = 288` (`padding:4px 12px`, `font-size:20px`,
`color:rgba(255,255,255,.5)`, `border:1px solid rgba(255,255,255,.1)`,
`border-radius:4px`) with a **30 × 30** icon; the collapse is `display:none`,
`flex-basis:100%`. On click: `cl-collapsing` with `height:0px` → `243px` and
`transition:height 0.35s ease`, then `cl-collapse cl-show`; expanded it measures
**328 × 243** at `y = 66` with five **328 × 40** rows (`padding:8px 0`, `Home`
`#fff`, others `rgba(255,255,255,0.8)`) and a **328 × 43** blue CTA block
(`padding:15px 20px`, `#007bff`/`#fff`, uppercase, `12.8px`/700) as the last row;
the flyout inside it is `position:static; float:none`.

## Source facts worth keeping

- The markup is `header` › `nav.cl-navbar.cl-navbar-expand-md.cl-navbar-dark.cl-bg-dark` ›
  `div.cl-container` with `a.cl-navbar-brand` (`href="index.html"`), the collapse
  `button` (`data-toggle="collapse"`, `data-target="#navbarsExample05"`,
  `aria-controls`, `aria-expanded="false"`, `aria-label="Toggle navigation"`) and
  its `span.cl-navbar-toggler-icon`, then `div#navbarsExample05.cl-collapse.cl-navbar-collapse`
  with **two** `ul.cl-navbar-nav` (five items; one `li.cta-btn`) — followed by
  `div.hero` and `script`. **No footer, no content sections.**
- The CTA lives in its **own list** with its own `margin-left:auto`; the nav list
  also has `margin-left:auto` (+ `cl-pl-lg-5` = `padding-left:3rem` at ≥992 px).
  Two auto margins ⇒ the leftover space is split ⇒ the wide gap between `News` and
  the button. Do not merge them into one list.
- `cl-bg-dark` (`#343a40`, hover `#1d2124`) is on the navbar element, but
  `@media (min-width:768px){header .cl-navbar{background:none !important}}` zaps
  it — so the dark surface is **only** visible inside the mobile media query, where
  `header .cl-navbar{background:black !important}` takes over anyway. Net visible
  surfaces: **transparent** (≥768 px) and **`#000`** (<768 px).
- `header .cl-navbar .cl-nav-link{color:rgba(255,255,255,0.8) !important}` and
  `… .cl-active{color:#fff !important}` override all four `.cl-navbar-dark` tiers,
  so **no hover colour survives** on inactive labels. The recreation adds a
  hover/focus lift (documented delta) so hover state is not colour-dead.
- The `header .cl-navbar-brand span{color:#fff}` → `#ced4da` (≥768 px) rules have
  **no matching markup** — dead code, never implement a two-tone wordmark.
- `body:before` (the `rgba(0,0,0,.5)` veil with `.3s all ease`) is **dead code**
  inherited from the family's off-canvas variants: no class ever toggles it and
  this snippet has no panel. **Drop it** — do not invent a drawer to justify it.
- `snippet.js` re-implements Bootstrap 4's dropdown **and** collapse without
  Bootstrap: `[data-toggle="dropdown"]` click + `ArrowDown`/`ArrowUp` roving focus
  + `Escape` (returns focus to the toggle) + document-level click close +
  `right:0` overflow flip; `[data-toggle="collapse"]` gets `aria-controls` from
  `data-target`, honours `data-parent`, animates `height` with a
  transition-aware `afterTransition()` helper and dispatches
  `show/shown/hide/hidden.bs.collapse`; hover open/close on `nav .cl-dropdown`
  via `mouseenter`/`mouseleave`. It also carries **dead generic paths** for this
  page: a `panel-collapse` typo guard, empty `BSE`/`BSE_INIT` arrays and a
  `.cl-navbar .cl-dropdown > a` click forwarder.
- The flyout is a plain `div` of anchors (no `ul`/`li`, no `role="menu"`), and
  below 992 px its white `::before` arrow is `display:none`.
- Every link but the wordmark is dead: `index.html` (wordmark + `Home`) and six
  `href="#"` (four nav rows + the dropdown parent + three flyout rows + the CTA).

## What makes this variant different from its siblings (`-01`…`-07`)

- **The CTA block** — the family's first nav-mounted button, in a second list,
  square, `#007bff`, uppercase `0.8rem`/700, inverting to white on hover.
- **Mobile = inline collapse**, not a slide-in off-canvas panel (no `300 px`
  drawer, no veil, no DOM clone of the nav).
- **No utility top bar**, **nothing sticky**, and **no icon font** (the only
  glyphs are the CSS-border caret and the inline SVG hamburger).
- **Hover dropdown with no transition** (`display` swap) — `-07` animated a
  `margin-top` offset; this one does not.
- Flyout hover is **blue on white** (`#007bff`/`#fff`), where the family's other
  variants used a grey `#ebeef0` wash.

## Global tokens

- brand / primary blue **`#007bff`** (CTA background, flyout row hover/active,
  page `a` default); link hover shade `#0056b3`; ink **`#212529`**; mobile navbar
  **`#000`**; nav label inactive **`rgba(255,255,255,0.8)`**, current **`#fff`**;
  caret `rgba(255,255,255,0.8)`; toggler glyph `rgba(255,255,255,0.5)` with
  `1px solid rgba(255,255,255,.1)` border; surfaces `#fff`; flyout shadow
  `0 2px 30px 0 rgba(0,0,0,.2)`; CTA hover shadow `2px 0 30px -5px rgba(0,0,0,.2)`;
  disabled `#6c757d`; overridden-but-noted: `#343a40`/`#1d2124` (`cl-bg-dark`),
  `#f8f9fa`/`#16181b` (Bootstrap flyout hover), `#ced4da` (dead wordmark span).
- Radii: **`4px`** (flyout surface, toggler) — **`0`** everywhere else, including
  the CTA block. `button{border-radius:0}` is the sheet's own normalisation.
- Type: Quicksand 400/600/700 (6 woff2 subsets) with a dead `Roboto` body stack in
  the normalize block; base `1rem/1.5`; wordmark `2rem/800/.2em/uppercase`;
  nav labels `16px/400`; flyout `14px/400`; CTA `0.8rem/700/uppercase/line-height 1`;
  toggler `1.25rem` with a `1.5em` (**30 px**) icon.
- Spacing: header `30px 0` (≥768) / `0` (<768); navbar `8px 16px` (mobile) / `0`
  (≥768); nav labels `27.2px 8px` (≥1200) / `8px 8px` (992–1199.98) / `8px 0`
  (column); nav list `padding-left:48px` (≥992); wordmark `5px 0` + `margin-right:16px`;
  flyout `padding:8px 0`, `margin-top:-10px`, rows `7px 24px`, arrow `7px` at `10%`;
  CTA `15px 20px`; container gutters `15px` (0 below 768), max `540/720/960/1140`;
  band `100vh`; body `200vh`; collapse rows `40px`.
- Motion: `a{transition:.3s all ease}` (the CTA rides on it); flyout **none**;
  collapse **`height .35s ease`**; `.fade` `opacity .15s linear` (unused here).
- Google Fonts: `https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap`
  (the source declares 400/600/700 but its CSS asks for **800** on the wordmark and
  **700** on the CTA — take the variable superset). Icons: `lucide-react`
  (`Menu`, `ChevronDown`).

## Section 0 (chrome) — `header[role=banner]` › `nav.cl-navbar`

Absolute, `top:0; left:0; width:100%; z-index:5`, `padding:30px 0` at ≥768 px and
`0` below, **transparent** at every width ≥768 px. Inside: one `div.cl-container`
(`flex`, `space-between`, `center`, `15 px` gutters zeroed <768 px, max
`540/720/960/1140`). Row 1 = the wordmark; row 1's right = the **five-item nav
list** (`margin-left:auto`, `padding-left:3rem` ≥992 px) and **row 2** (the
`<li class="cta-btn">`'s own `ul`, also `margin-left:auto`) = the CTA block. Below
768 px the same markup reflows: `#000` bar, `flex-wrap:wrap`, wordmark left,
hamburger right, and everything else inside the collapse.

Fidelity notes: keep the wordmark **one 32 px white uppercase link** (never a
two-tone span); keep `z-index:5` so the header stays above the band; never add a
sticky state or a second header tier; the caret must sit `0.255em` after the label
with a `0.3em`-thick glyph and the parent's `white-space:nowrap`.

## Section 1 — the nav list and the dropdown

Five items in source order (`Home`-current, `Recipes`-kind, `Services`-kind parent,
`About`-kind, `News`-kind), `16px/400`, inactive `rgba(255,255,255,0.8)`, current
`#fff` + `aria-current="page"`, `padding:27.2px 8px` (≥1200 px) / `8px 8px`
(992–1199.98) / `8px 0` (column). The parent owns the flyout: white,
`min-width:13em` (182 px), `padding:8px 0`, `margin-top:-10px`, `4px` radius,
`0 2px 30px 0 rgba(0,0,0,.2)` shadow, a `7 px` white triangle at `left:10%`
(hidden <992 px), three rows at `7px 24px` / `14px` / `#212529` whose hover,
focus and active state are **`#007bff` on `#fff` text**, and **no transition**.

Fidelity notes: promote the source's class arithmetic to a real disclosure
(`aria-haspopup`, `aria-expanded`, `aria-controls`), open on **hover and click**,
support `ArrowDown` on the toggle, `ArrowDown`/`ArrowUp` inside, `Escape` (focus
returns to the toggle) and outside-click close, keep one flyout open at a time,
guard `right:0` overflow at 1024 px, and give every row a **real in-page target**
(the source's rows are all `href="#"`). Keep the surface a plain list of links —
no `role="menu"` theatre, no card styling, no `ul`-inside-`div` restructuring that
changes the measured box.

## Section 2 — the CTA block (`li.cta-btn > a`)

Square `#007bff` block, `#fff` uppercase `12.8px`/700 text, `line-height:1`,
`padding:15px 20px` (≈119 × 43 px), a `lucide-react`-free plain anchor (the
arrow-free source has no icon), transitioning `.3s all ease`; hover/focus inverts
to `#fff` surface + `#007bff` text + `2px 0 30px -5px rgba(0,0,0,.2)` shadow.
Below 768 px it is the **full-width last row** of the expanded collapse.

Fidelity notes: **never round it** (the family's other variants round their
controls; this one deliberately does not), never add letter-spacing (the source
sets none), keep the label an **original** contact-kind string, and point it at the
app's own contact section.

## Section 3 — the inline collapse (mobile navigation)

`div#navbarsExample05`: `display:none` + `flex-basis:100%` + `flex-grow:1` at rest;
opening animates `height 0.35s ease` (`0` → content; ≈243 px at 375 px) and settles
with the shown class; five `40 px` rows (`padding:8px 0`, `16px`, current `#fff`,
others `rgba(255,255,255,0.8)`) then the full-width blue CTA. The parent's flyout
becomes a **static** inline list with the arrow hidden.

Fidelity notes: this is **not** an off-canvas drawer — do not add a veil, a
`transform`, or a separate mobile nav component; render the **same** nav data in
the collapse and the desktop row (one source of truth), toggle `aria-expanded` +
`aria-controls` on the real `button`, use a **`lucide-react` `Menu`** icon instead
of the inline SVG data URI, remove any stale inline height on close, and make sure
resizing to ≥768 px leaves no open-state residue.

## Section 4 — `div.hero` (the image band)

`height:100vh; width:100%; background-size:cover; background-position:50% 50%;
background-repeat:no-repeat`, image inline in the markup. Use a placeholder:
`https://picsum.photos/seed/bowsprit-hero/1920/1080`. First (and, in the source,
only) band; the header floats over it with no scrim, so the label colours must stay
readable over a busy photo.

## Screenshot read-through (1200×972, AVIF→PNG)

Browser-chrome mock of the live preview at rest. Under the address bar: `BRAND` in
**white uppercase with wide tracking** at the left; centre-right the labels
`Home` (fully white, current) · `Recipes` · `Services ▾` · `About` · `News` in ~80 %
white; at the far right the **blue `CONTACT US` block** — uppercase, bold, tight
padding, **square corners** — the clear visual anchor of the header, with a visible
gap between `News` and the button. Everything floats on a full-bleed cinderblock
photo of three people in muted blue/grey clothing, no scrim. The screenshot is the
source of the CTA's square shape, of the two-group spacing, and of the fact that
first paint is nothing but chrome + photo.

## Fidelity gotchas

1. **The two-list layout is the design.** One merged right-aligned cluster (nav +
   button) looks close but measures differently: the source splits the leftover
   space between two `auto` margins. Reproduce it or the header reads wrong.
2. **Three nav-label paddings, not one.** Missing the `max-width:1199.98px`
   override produces a `78 px` row where the source has `58 px` between 992 and
   1199 px.
3. **The CTA is square.** `4px` belongs to the flyout surface and the toggler only.
4. **The mobile nav is inline.** A `300 px` right panel here would contradict the
   source (that is `-06`/`-07`).
5. **The veil is dead code.** Do not implement `body:before`.
6. **No hover colour in the source.** The header's `!important` colours beat every
   `.cl-navbar-dark` tier; add and document a hover/focus lift instead of shipping
   a colour-dead nav.
7. **Nothing is sticky and nothing is a utility bar.** Do not "complete" the header
   with patterns from its siblings.
8. **Every link is dead in the source.** Materialise all seven targets with
   `scroll-margin-top` ≥ the header height and keep the app free of `href="#"`.
9. **No icon font, no jQuery/Bootstrap.** The caret is CSS borders and the
   hamburger is an inline SVG data URI in the source — use `lucide-react` and never
   inline the data URI.
10. **Never copy the assets or the strings** — `Brand`, `Home`, `Recipes`,
    `Services`, `About`, `News`, `Contact Us`, `Food Catering`,
    `Drink & Beverages`, `Wedding & Birthday`, the `cl-` classes, the woff2 files,
    `hero_1.jpg`, `style.css`, `snippet.js`.

## Reference artifacts (for the implementer)

`/tmp/wm08/prev.html` (live preview, 2,633 B) · `/tmp/wm08/style.css` (16,566 B,
sha256 `e07e05ef…`) · `/tmp/wm08/snippet.js` (6,988 B, sha256 `264a1e5e…`) ·
`/tmp/wm08/wm08.zip` (649,931 B, sha256 `fd95309f…`) and its extracted twin
`/tmp/wm08/z/website-menu-08/{index.html,README.md,images/hero_1.jpg,fonts/*}` ·
`/tmp/wm08/page.html` (ColorLib page, 108,889 B) · `/tmp/wm08/cat.js` (preview
catalog index, 633,990 B) · `/tmp/wm08/shot.png` (1200×972 screenshot from the
126,320 B AVIF) · live-browser capture
`/root/.config/browser-harness/tmp/shot.png` (375 px, black bar + expanded
collapse + full-width blue CTA).
