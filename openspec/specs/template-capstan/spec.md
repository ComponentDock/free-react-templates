# Template: Capstan (Website Menus)

## Purpose

Capstan is the *Website Menus* family's **quiet white bar** — the one that is **not**
dark. On desktop the chrome is a **transparent, hairline-bounded strip** painted over the
page's own `#fff`, closed top and bottom by **`1px solid rgba(0,0,0,0.05)`** rules, holding a
**single-line uppercase `#000` wordmark** at its left, **six `13px` grey rows** floating in the
middle (`cl-m-auto`, i.e. margin-auto on both sides) and a **white five-pixel-radius search
field bolted to its right end**. Its accent is a **teal `#40bfc1`** that appears only as
(a) a **full-width `1px` underline** that wipes left-to-right (`scaleX(0) → scaleX(1)`,
`0.5s ease-in-out`, sat at `bottom:-1px`) under a row on hover — permanently visible under the
**current** row, whose label stays plain `#000`; and (b) the **dropdown row's hover fill**
(teal surface, white text). Below `992px` the whole thing flips: the strip turns **`#000`**, the
wordmark goes white, the rows collapse into a toggled panel (`☰ Menu`, `rgba(255,255,255,0.5)`),
each row becomes `rgba(255,255,255,0.7)`, the **current row turns teal text** and its underline
is disabled, and the dropdown becomes an **always-expanded `#000` sub-list** with a
`1px rgba(255,255,255,0.3)` left rule. Below `768px` the search field disappears entirely.
The page holds **nothing else**: no content sections, no images, no footer, no sticky chrome —
**10** of its **11** anchors are dead `href="#"` and the document does not scroll.

It is an original React recreation of the ColorLib free **"Website Menu V13"** snippet
(source slug `website-menu-13`), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript. The recreation matches the source's structure,
order and design tokens 1:1 but copies no asset (no images — the source ships none, no font
files, no CSS files, no icon-font glyphs, no inline SVG `<path>` data, no text verbatim) and
never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-13/ — page title *"Website Menu V13
  - Free Minimal Navigation Bar Template 2026 - Colorlib"*, **HTTP 200**, 108,957 B, verified
  2026-10-12. Page meta: posted **March 9, 2021** (structured data `datePublished`
  **2021-03-09T14:13:23+00:00**) by **Rok Krivec**, 0 comments, sibling links *previous post:
  Website Menu V12*, *next post: Website Menu V14*, `dateModified`
  **2026-09-25T10:42:07+00:00** (the September 2026 rebuild). ColorLib's own description:
  *"A flexible free minimal navigation bar template with a dropdown and a search bar. Works
  with or without Bootstrap."* September 2026 update note (verbatim): *"Updated September 2026:
  this snippet is now plain HTML and CSS plus a few lines of vanilla JavaScript: no jQuery, no
  Bootstrap files, no plugins. The download is 253 KB (it was 262 KB). Use it on its own, or
  drop it into a Bootstrap 4, 5 or 6 project and it looks the same. The collapsible sections
  open and close without Bootstrap's JavaScript. The drop-down menus work without Bootstrap's
  JavaScript, including keyboard navigation."* TEMPLATES.md `## Website Menus (20)` — this item
  is the family's **thirteenth** entry at **line 3085**; the slug `website-menu-13` appears
  exactly **once** in TEMPLATES.md and in no spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-13/` returns **HTTP 404**
  (`Not Found`, 9 B) — like its `-01`…`-12` siblings, the *Website Menus* family does **not**
  live under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-13/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **4,216 B**, `<title>Website menu 03</title>`, sha256
  `265c97bbcc1ee51e71d96d157b54f2b6a6ca5995f9bd79b8cfce899137007b47`, verified 2026-10-12) —
  the URL the preview host's catalog index records for this slug. Its two assets —
  `css/style.css?v=821da340` (**21,762 B**, `text/css`, sha256
  `20b277156bf8f736d59d0f33d02e1e0b082cd117d987f1d3043abae7dcdbf427`) and
  `js/snippet.js?v=0986fb90` (**5,798 B**, `application/javascript`, sha256
  `ef1358309c2e7d0d48756fec6962f139e009aff21a42ec1537f7ea9259022f3e`) — are **byte-identical**
  (same sha256, verified) to the copies in the snippet's own downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-13.zip` (**HTTP 200**,
  `application/zip`, **259,149 B**, sha256
  `429d2c19ad0d1a28e5ce1c6443ff583c3936c690832bb2d26da8c3ddaace7121`; ColorLib rounds this to
  "253 KB"), which ships `index.html` (**4,013 B**), `css/style.css`, `js/snippet.js`,
  `README.md` (**1,264 B**), **no images at all**, and **eight** Roboto woff2 files (100/300/
  400/700 × latin/latin-ext — 24,444 B each for the four latin-ext faces and 37,520 B each for
  the four latin faces, **247,856 B = 95.6 % of the 259,149 B archive**). `diff` between the
  live page and the archive `index.html` is **head-only** (the preview host's `noindex` meta
  tags, a `cdnjs.cloudflare.com` `dns-prefetch`, and the cache-busting query strings) — the
  archive is the readable, un-versioned twin of the live preview. Both were read for this spec
  and the live render was cross-checked in a browser at 1280 and 780 px (see Design reference).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-13.jpg
  (HTTP 200, served as **AVIF**, 6,057 B, 1200×972, converted to PNG (41,249 B) and inspected
  visually 2026-10-12). No screenshot-only fallback was needed — the live preview is the primary
  reference and the archive its readable twin. The screenshot is a browser-chrome mock of the
  rendered page: the centred heading **`Website menu #03`**, then a white bar bounded by two
  hairlines carrying the black uppercase wordmark **`MAGZ.`** at its left, the centred grey rows
  **`Home`** (black, with a teal underline beneath it) · **`Page ▾`** · **`Catalog`** · **`Work`**
  · **`Blog`** · **`Contact`**, and the white **`Search`** field (black magnifier) at its right;
  the open dropdown lists **`Page 1`…`Page 4`** with the hovered **`Page 4`** filled teal with
  white text.
- **New name:** `capstan` (apps/capstan, `@free-react-templates/capstan`) — a *capstan* is the
  upright, spoked **winch on a ship's deck** that winds in the rope: a small, quiet, striped
  drum around which everything else is tensioned, exactly this chrome's role (a plain white
  strip that simply *bounds* the page). It continues the family's nautical run — **menutree**
  (`-01`), **slidenav** (`-02`), **navpill** (`-03`), **menuribbon** (`-04`), **starboard**
  (`-05`), **larboard** (`-06`), **topdeck** (`-07`), **bowsprit** (`-08`), **gangway** (`-09`),
  **halyard** (`-10`), **ensign** (`-11`), **gunwale** (`-12`). Single lowercase word,
  kebab-safe (no hyphen needed). Verified 2026-10-12: a repo-wide search returns **zero** hits
  for `capstan` in `apps/`, `openspec/specs/`, `docs/templates/` and `TEMPLATES.md`, and
  `https://colorlib.com/wp/template/capstan/` returns **HTTP 404**, so it is not a ColorLib
  source name either. The source name "Website Menu V13", its `Magz.` wordmark, its six labels,
  its four `Page n` items, its `Search` placeholder and its `Website menu #03` heading are never
  reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V13" (source slug `website-menu-13`,
  https://colorlib.com/wp/template/website-menu-13/), `datePublished` **2021-03-09**, rewritten
  in the 2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no Bootstrap files, no
  images** in the download. Design-wise this is the family's **"minimal / transparent white bar
  with a teal underline"** variant: a centred heading, then a **transparent hairline-bounded
  strip** over the page's `#fff` carrying a single-line black wordmark (left), six grey rows
  (middle, `margin:auto`), a white search field (right) and six bars' worth of teal hover
  affording; a `992px` breakpoint turns the strip **`#000`** and stacks the list inside a
  collapsing panel; a `768px` breakpoint **removes the search field**. The page contains **only**
  the heading and the strip — no content sections, no images, no footer, nothing sticky.
- **CSS namespace:** the sheet is self-contained and `cl-`-prefixed for its utilities
  (`cl-container`, `cl-row`, `cl-col-md-6`, `cl-text-center`, `cl-justify-content-center`,
  `cl-order-lg-last`, `cl-d-flex`, `cl-mb-5`, `cl-m-auto`, `cl-pl-3`, `cl-navbar`,
  `cl-navbar-expand-lg`, `cl-navbar-dark`, `cl-navbar-brand`, `cl-navbar-nav`, `cl-nav-item`,
  `cl-nav-link`, `cl-navbar-toggler`, `cl-navbar-collapse`, `cl-collapse`, `cl-collapsing`,
  `cl-show`, `cl-collapsed`, `cl-dropdown`, `cl-dropdown-toggle`, `cl-dropdown-menu`,
  `cl-dropdown-menu-right`, `cl-dropdown-item`, `cl-bg-dark`, `cl-form-group`,
  `cl-form-control`, `cl-icon`, `.fa`) and is a hand-rolled Bootstrap-4-look-alike — **not** a
  framework skin. Its first ~115 lines are a `:where(html) … all: revert` reset so the snippet
  renders identically inside a Bootstrap host page, followed by a `*{box-sizing:border-box}`
  normalize, the framework base (`.cl-container` tiers, `.cl-navbar*`, `.cl-dropdown*`,
  `.cl-form-control`, `.cl-collapse`, `@media print` incl. `@page{size:a3}`), and then the
  ~230-line custom block (`body`, `a`, `h2`, `.ftco-section`, `.heading-section`,
  `.ftco-navbar-light`, `.cl-navbar-brand`, `.cl-navbar-nav`, `.cl-nav-link`,
  `.searchform`, `.cl-form-control`).
- **HTML structure (live preview, 4,216 B — archive twin 4,013 B):** document order is exactly
  — (1) `section.ftco-section` › `div.cl-container` › `div.cl-row.cl-justify-content-center` ›
  `div.cl-col-md-6.cl-text-center.cl-mb-5` › `h2.heading-section` reading **`Website menu #03`**,
  (2) `nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.cl-navbar-dark.ftco_navbar.cl-bg-dark
  .ftco-navbar-light` › `div.cl-container` with **four** children in this order — the brand
  `a`, the search `form`, the toggler `button`, the collapsible `div` — (3) `script`. In detail:
  - **`a.cl-navbar-brand[href="index.html"]`** reading **`Magz.`** — the **first** child of the
    bar's container and the only link in the chrome with a real destination;
  - **`form.searchform.order-sm-start.cl-order-lg-last[action="#"]`** ›
    `div.cl-form-group.cl-d-flex` › `input[type="text"].cl-form-control.cl-pl-3
    [placeholder="Search"]` + `button[type="submit"].cl-form-control.search` ›
    `span.fa.fa-search` › an inline **SVG** magnifier (`viewBox="0 0 1664 1792"`, wrapped in
    `<g transform="translate(0,1536) scale(1,-1)">`, `class="cl-icon"`,
    `style="vertical-align:-0.1429em"`, `aria-hidden="true"`, `focusable="false"`) — the form is
    **second in DOM, last visually** on desktop (`order:13` from `cl-order-lg-last`);
  - **`button.cl-navbar-toggler[type="button"][data-toggle="collapse"][data-target="#ftco-nav"]
    [aria-controls="ftco-nav"][aria-expanded="false"][aria-label="Toggle navigation"]`** ›
    `span.fa.fa-bars` › an inline **SVG** 3-bar glyph (`viewBox="0 0 1536 1792"`, same wrapper)
    followed by the literal text **`Menu`** — the toggler is **third in DOM**;
  - **`div#ftco-nav.cl-collapse.cl-navbar-collapse`** › `ul.cl-navbar-nav.cl-m-auto` with
    **six `li.cl-nav-item`** in source order: **Home** (`cl-active`), **Page**
    (`cl-dropdown` › `a.cl-nav-link.cl-dropdown-toggle[href="#"][id="dropdown04"]
    [data-toggle="dropdown"][aria-haspopup="true"][aria-expanded="false"]` +
    `div.cl-dropdown-menu[aria-labelledby="dropdown04"]` holding **four**
    `a.cl-dropdown-item[href="#"]` reading `Page 1`…`Page 4`), then **Catalog**, **Work**,
    **Blog**, **Contact**. The list carries **`cl-m-auto`** (`margin:auto`) so it floats **in
    the middle** of the bar's free space, taking `margin-left:auto` from the brand and
    `margin-right:auto` from the search form.
  - **Every destination in the source is a dead `href="#"` except the wordmark**: the live page
    holds **10** `href="#"` (six rows + four dropdown items) and exactly one real href — the
    wordmark's `index.html`. There is no second page to probe; the recreation must materialise
    **ten** destinations as real content.
- **Measurements (live preview, Chromium, DPR 1, read at 1280 and 780 px 2026-10-12):**
  - **`h2`:** 28 px / 400 / `line-height:1.5` (42 px) / `#000` / centred, `margin-bottom:8px`
    (default) + `.cl-mb-5` **48 px**, measured **330 × 42 at `x = 225, y = 112`** at a 780 px
    viewport; the `cl-col-md-6` column is `flex:0 0 50%; max-width:50%` at ≥768 px and `100 %`
    below, with `.cl-text-center`.
  - **Heading band:** `section.ftco-section{padding:7em 0}` = **112 px** top/bottom over the
    page's **`#fff`** (this variant's page is pure white; the `-12` sibling's is `#fafafa`):
    **112 + 42 + 8 + 48 = 210 px** to the strip's top edge at every width.
  - **The strip (`nav.ftco-navbar-light`):** desktop `background:transparent !important`,
    `z-index:3`, `padding:0`, **`border-top:1px solid rgba(0,0,0,0.05)`** +
    **`border-bottom:1px solid rgba(0,0,0,0.05)`**, `position:relative` (**not sticky** — the
    sheet contains **zero** `sticky`/`fixed` for the nav). Measured **1280 × 63.77 at `y = 210`**
    at 1280 px; the two hairlines are the only thing that makes the strip visible over the white
    page. Below `992 px` (measured at 780 px): `background:#000 !important`,
    `padding:10px 15px`, height **68 px**, brand forced `#fff`.
  - **Container:** `div.cl-container` — measured **1140 × 62 at `x = 70, y = 211`** at 1280 px
    (`padding:0 15px`), `display:flex; justify-content:space-between; align-items:center`;
    `flex-wrap:nowrap` at ≥992 px, gutters removed below 992 px
    (`.cl-navbar-expand-lg > .cl-container{padding:0}`).
  - **Wordmark (`a.cl-navbar-brand`):** own-brand text, **20 px**, `text-transform:uppercase`,
    `line-height:36px` (inherits `body` 1.8), `#000` on desktop / **`#fff`** below 992 px,
    `padding:5px 0`, `margin-right:16px`, `display:inline-block`, `white-space:nowrap`;
    measured **63 × 46** in a **62 px** container line, single line only (the `-12` sibling's
    two-line lockup is not this variant). It **never changes colour on hover**
    (`.cl-navbar-brand:hover,:focus{color:#000}` = the resting colour).
  - **Rows (`ul.cl-navbar-nav.cl-m-auto`):** the list is `display:flex; flex-direction:row` at
    ≥992 px and **`margin:auto`** — measured **460 × 62 at `x = 321`** at 1280 px, i.e. the list
    floats in the slack between the wordmark (ending `x = 148`) and the search form (starting
    `x = 938`). Each `.cl-nav-link` is **`font-size:13px`**, `font-weight:400`,
    **`padding:1.2rem 20px`** (`19.2px 20px`), `color:gray` (**`#808080`**), `position:relative`,
    `opacity:1 !important`, `line-height:23.4px` → **62 px** rows; measured
    `Home 75 @ x=321`, `Page 80 @396`, `Catalog 85 @475`, `Work 70 @560`, `Blog 66 @630`,
    `Contact 85 @696`.
  - **Hover affording (the family's differentiator here):** `.cl-nav-link:before` is a
    **`content:""` bar — `position:absolute; width:100%; height:1px; bottom:-1px; left:0;
    background-color:#40bfc1; visibility:hidden; transform:scaleX(0); transition:all .5s
    ease-in-out 0s; z-index:-1`** — and on `:hover` it becomes `visibility:visible;
    transform:scaleX(1)` while the label turns **`#40bfc1`**. On the **current** row the
    underline is permanently visible (`transform:scaleX(1)`) and, *only on desktop*, the label
    is forced **`#000`** (not teal). This is an **underline wipe**, not the `-12` sibling's gold
    **slab**.
  - **Dropdown (`div.cl-dropdown-menu`):** desktop panel is `position:absolute; top:100%;
    left:0; z-index:1000`, `border:none` (the custom rule overrides the framework's
    `1px rgba(0,0,0,0.15)`), **`background:#fff`**, **`border-radius:4px`**, `padding:0`,
    `box-shadow:0 10px 34px -20px rgba(0,0,0,0.41)`; items **`font-size:12px`**, `color:#000`,
    `padding:0.25rem 1.5rem` (**4px 24px**) → **29.59 px** rows, and **hover/`:focus` →
    `background:#40bfc1; color:#fff`** (a *visible* fill — unlike the `-12` sibling's
    white-on-white). Below `992 px` the panel is **`display:block !important; background:#000;
    border-left:1px solid rgba(255,255,255,0.3); border-radius:0`** with items
    **`rgba(255,255,255,0.8)`** — an **always-expanded** in-flow sub-list.
  - **Toggler (`button.cl-navbar-toggler`):** `border:none`, **`color:rgba(255,255,255,0.5)
    !important`**, `cursor:pointer`, `padding-right:0`, `text-transform:uppercase`,
    `font-size:16px`, `letter-spacing:.1em`, focus `outline:none !important`; content = the
    inline three-bar SVG + the word **`Menu`**. Measured **85 × 25** at the container's right in
    a 780 px viewport (`padding:4px 0 4px 12px`), `display:none` at ≥992 px.
  - **Search form (`.searchform`):** **`height:46px`**, `border:1px solid rgba(255,255,255,0.1)`,
    **`border-left:1px solid rgba(0,0,0,0.05)`** (the left edge is the dark hairline),
    `overflow:hidden`, **`border-radius:4px`**; measured **257 × 46 at `x = 938, y = 219`** at
    1280 px and its right edge lands exactly on the container's inner right edge (**1195**).
    **Hidden entirely below `767.98px`** (`@media (max-width:767.98px){.searchform{display:none}}`).
  - **Input (`input.cl-form-control.cl-pl-3`):** `width:calc(100% - 46px)` → measured **209 × 46**,
    `border:none`, `background:#fff !important`, `color:rgba(0,0,0,0.7) !important`,
    **`font-size:14px`**, `padding` **6px 12px 6px 16px** (`cl-pl-3` = `padding-left:1rem`),
    placeholder **`rgba(0,0,0,0.7)`** — there is **no** `<label>` and no `aria-label`.
  - **Search button (`button.cl-form-control.search`):** **`46 × 46`**, `background:#fff`,
    `color:rgba(0,0,0,0.7)`, `cursor:pointer`, holding the **16 px** inline magnifier SVG
    (`span.fa.fa-search{font-size:16px}`; `.cl-icon{height:1em;width:auto;fill:currentColor}`)
    with **no accessible name**. `action="#"` → submitting posts nowhere and appends `#` to the URL.

## Breakpoint behaviour (values measured / derived from the live preview and its sheet)

| Width | Strip | Container | Brand | List | Search field |
| --- | --- | --- | --- | --- | --- |
| 320 | `#000`, `padding:10px 15px`, toggler + collapsed list only | 290 @ 15 (gutters removed) | `#fff` | `none` → toggler panel | **`display:none`** |
| 375 | `#000`, 68 | 345 @ 15 | `#fff` | `none` → panel | **`display:none`** |
| 768 | `#000`, 68 | 720 @ 24 | `#fff` | `none` → panel | `display:none` (< 767.98? no — 768 keeps it) |
| 991 | `#000`, 68 | 720 @ 135.5 | `#fff` | `none` → panel | 257 @ right |
| 992 | `transparent` + hairlines, 63.77 | 960 @ 16 | `#000` | `flex`, middle | 257 @ right |
| 1200 | `transparent`, 63.77 | 1140 @ 30 | `#000` | 460, middle | 257 @ 898 → 1195 |
| 1280 | `transparent`, 63.77 | 1140 @ 70 | `#000` | 460 @ 321 | 257 @ 938 → 1195 |

Below `992 px` (measured at 780 px): strip `#000`, `68 px`, brand `#fff`, toggler visible
**third in DOM / right of the search form**, list rendered as a collapsing panel; the search
form still shows at 780 px (it only vanishes below `768 px`).

## Type and colour summary

- `body{font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
  font-weight:normal; background:#fff; color:gray}` (`gray` = `#808080`).
- `a{transition:.3s all ease; color:#40bfc1}` — **inline links are the same teal as the hover
  underline**; `a:hover,a:focus{text-decoration:none !important; outline:none !important;
  box-shadow:none}`.
- `h2,.h2{line-height:1.5; font-weight:400; font-family:"Poppins", Arial, sans-serif;
  color:#000}` + `.heading-section{font-size:28px; color:#000}` (28 px wins over the framework's
  `2rem` = 32 px).
- Self-hosted **Roboto 400/700** are declared and never resolve (the `body` stack's `Roboto` is
  overridden by the later Poppins rule); the archive's **100/300** files are not even declared →
  **247,856 B of dead font payload** (95.6 % of the 259,149 B download).
- Token table: accent teal `#40bfc1` · strip desktop **transparent** + hairlines
  `rgba(0,0,0,.05)` · strip mobile + mobile sub-list `#000` · wordmark `#000` (mobile `#fff`) ·
  rows `gray`/`#808080` (mobile `rgba(255,255,255,.7)`, hover mobile `#fff`, active mobile
  `#40bfc1`) · current-row label desktop `#000` · dropdown panel `#fff` (mobile `#000` with
  `rgba(255,255,255,.3)` left rule) · dropdown items `#000` (mobile `rgba(255,255,255,.8)`) ·
  toggler `rgba(255,255,255,.5)` · field hairline `rgba(255,255,255,.1)` / left
  `rgba(0,0,0,.05)` · search ink `rgba(0,0,0,.7)` · page `#fff` · ink `gray` · dropdown shadow
  `0 10px 34px -20px rgba(0,0,0,.41)` · radii `4px` search field / `4px` dropdown panel / `0`
  everywhere else.

## Fidelity pitfalls (things that will bite an implementer)

1. **The strip is TRANSPARENT on desktop, not dark.** Over the `#fff` page its only edges are
   those two **`1px rgba(0,0,0,0.05)`** hairlines. Painting it a solid colour (as the `-12`
   sibling does with `#202040`) destroys the design. It turns **`#000` only below `992 px`**.
2. **Teal is an underline, not a slab.** `#40bfc1` shows as a **`1px` full-width bar at
   `bottom:-1px`** that wipes `scaleX(0) → scaleX(1)` over **`0.5s ease-in-out`**; it must stay
   inside/below the row and **behind** the label (`z-index:-1`). Do **not** reuse the sibling's
   gold slab.
3. **The list is CENTRED by `margin:auto`** (`cl-m-auto`), not pinned left (`-12`) nor right.
4. **Six rows** — this variant adds **`Work`** between `Catalog` and `Blog`.
5. **The wordmark is a single line** (`Magz.`, uppercase → `MAGZ.`), **not** a two-line lockup.
6. **The current row's label is `#000` on desktop**, not teal — teal only appears on the
   **underline** (and on **mobile**, where `cl-active > a` is `#40bfc1` and the underline is
   disabled).
7. **The search field is hidden below `768 px`** — a recreation that keeps it is wrong.
8. **Two different hairlines on the field:** `border:1px solid rgba(255,255,255,0.1)` but
   `border-left:1px solid rgba(0,0,0,0.05)` — the left edge reads as the dark rule.
9. **The dropdown IS key/focus navigable** in the source's own `snippet.js` (ArrowDown opens +
   focuses the first item, ArrowUp/Down step, `Escape` closes and refocuses the trigger, click
   outside closes, and it flips `left:auto; right:0` when it would overflow the viewport) — plus
   it opens on `mouseenter`.
10. **No icon font is loaded**, but both glyphs are **inline SVG** inside `.fa` spans, so the
    toggler's bars and the search magnifier **do** render (unlike the `-12` sibling's dead social
    spans). No `.fa`/Font Awesome is shipped.
11. **Nothing is sticky** and the page does not scroll in the source: the recreation adds real
    content below the strip, and the strip must scroll away with it.
12. **Dead code to drop:** the `#343a40` `cl-bg-dark` surface (beaten by `transparent
    !important`), every `cl-navbar-dark` colour (overridden by the custom rules), the Bootstrap
    `#007bff`/`#0056b3`/`#6c757d`/`#212529`/`#495057`/`#ced4da`/`#f8f9fa` control and
    dropdown-item defaults, the unused `.cl-dropdown-item.cl-active/:active/.disabled` states,
    `cl-dropdown-menu-right`, the `@media print` block (incl. `@page{size:a3}`), the
    `:where(html) … all: revert` reset, the system `Roboto` body stack, and all eight Roboto
    woff2 files.

## Requirements (Gherkin)

### Requirement: Heading band

The template SHALL open with the source's heading band — a `section` with `112 px` vertical
padding over a `#fff` page, holding a centred `28 px` heading in a `50 %`-wide (≥768 px) column
with a `48 px` bottom margin, so the bar's top edge lands exactly `210 px` below the page top.

- **Scenario: band spacing** — Given a viewport ≥ 768 px, Then the heading is **28 px / 400 /
  line-height 42 px / #000**, centred, and the strip's top edge is at **y = 210** (112 + 42 + 8
  + 48); the page background is **`#fff`**.
- **Scenario: heading is own copy** — Then the string `Website menu #03` never renders, and the
  app contains **zero** `colorlib`/`website-menu-13` strings.

### Requirement: Transparent hairline strip

The header SHALL be a **non-sticky**, **full-bleed** bar whose desktop background is
**transparent** over the `#fff` page, bounded by **`1px solid rgba(0,0,0,0.05)`** top and bottom
rules, `z-index:3`, containing one `cl-container` (1140 px at ≥1200 px) with the brand, the list
and the search form.

- **Scenario: desktop chrome** — Given ≥ 992 px, Then the bar's background is transparent (the
  page `#fff` shows through), it has the two hairline borders and **no** radius/shadow, and it
  measures ≈ **63.77 px** tall at `y = 210`.
- **Scenario: no sticky** — Then scrolling moves the bar out of the viewport (assert a negative
  `y` after scroll); the sheet contains no `sticky`/`fixed` navigation rule.
- **Scenario: container tiers** — Then the container is **1140 px** at ≥1200 px, **960 px** at
  ≥992 px, **720 px** at ≥768 px, with `15 px` gutters removed below `992 px`.

### Requirement: Single-line wordmark

The bar SHALL carry a **single-line**, `text-transform:uppercase`, `20 px` wordmark link at its
left, `#000` on desktop and **`#fff`** below `992 px`, with `padding:5px 0`, `margin-right:16px`,
pointing at the top of the page, with **no hover colour change**.

- **Scenario: wordmark** — Then the link is own copy (never `Magz.`), uppercase, ≈ `63 × 46` in
  the 62 px line, `#000` at ≥992 px and `#fff` below, and its colour is identical at rest and on
  hover.

### Requirement: Centred six-row list with the teal underline wipe

The bar SHALL render **six** rows in source order — `Home` (current, dropdown-less), `Page`
(dropdown of four items), `Catalog`, `Work`, `Blog`, `Contact` — inside a list centred by
`margin:auto`, each row `13 px / 400 / #808080` with `padding:19.2px 20px` (62 px tall), whose
label turns `#40bfc1` on hover while a **`1px` full-width `#40bfc1` underline** at `bottom:-1px`
wipes `scaleX(0) → scaleX(1)` over `0.5s`; the current row keeps the underline permanently and
its label is **`#000`** on desktop.

- **Scenario: rows** — Then exactly six rows render in the given order; the list is `display:none`
  below `992 px` and `margin:auto` in the middle of the bar at ≥992 px.
- **Scenario: hover wipe** — Given a hovered non-current row, Then its label is `#40bfc1`, its
  underline is at `scaleX(1)`, and hovering another row moves it there; at rest it is
  `scaleX(0)` / hidden.
- **Scenario: current row** — Then its underline is visible at rest, its desktop label is
  `#000`, `aria-current="page"` is set, and a visible `focus-visible` ring exists (the source
  sets `outline:none !important`).
- **Scenario: reduced motion** — Given `prefers-reduced-motion: reduce`, Then the `0.5s` wipe is
  disabled.

### Requirement: Dropdown (hover + keyboard)

The `Page` row SHALL open a white `4 px`-radius panel (shadow `0 10px 34px -20px rgba(0,0,0,.41)`)
with four items (`12 px`, `#000`, `padding:4px 24px`) that fill **`#40bfc1` with white text** on
hover/focus, opened on `mouseenter` and on click, navigable by keyboard, and closed on
`mouseleave`, outside click or `Escape`.

- **Scenario: open/close** — Then `mouseenter` opens (`aria-expanded="true"`), `mouseleave`
  closes, a click toggles, and an outside click closes it.
- **Scenario: items** — Then exactly four items render, each own copy (never `Page 1`…`Page 4`),
  each a real destination, with a **visible** teal hover/focus fill.
- **Scenario: keyboard** — Then `ArrowDown` on the trigger opens and focuses the first item;
  ArrowUp/ArrowDown step focus inside the panel; `Escape` closes and returns focus to the
  trigger; opening a second dropdown closes the first.
- **Scenario: viewport guard** — Then the panel flips to the left edge (`left:auto; right:0`)
  rather than overflowing the viewport on the right, and never leaves the viewport at 320 px.

### Requirement: Search form

The bar SHALL carry a `257 × 46` search field with a `4 px` radius at its right end on desktop
(≥768 px), holding a `209 px` white `14 px` input (`padding:6px 12px 6px 16px`, ink
`rgba(0,0,0,.7)`) and a `46 × 46` white submit button with a `16 px` magnifier, **hidden entirely
below `768 px`**.

- **Scenario: field geometry** — Given ≥ 992 px, Then the field is ≈ `257 × 46`, radius `4 px`,
  hairline `rgba(255,255,255,.1)` (left edge `rgba(0,0,0,.05)`), and its right edge sits on the
  container's inner right edge.
- **Scenario: hidden on small screens** — Given < 768 px, Then the form is not rendered/visible.
- **Scenario: accessible + real submit** — Then the input is **labelled** (the source has a bare
  placeholder only), the button has an accessible name, the form has `role="search"` and
  `preventDefault()`s a real submit handler instead of `action="#"`, and a visible `focus-visible`
  ring exists (the source removes all outlines).

### Requirement: Mobile strip + collapse

Below `992 px` the bar SHALL turn **`#000`** (`padding:10px 15px`, `68 px`), the wordmark `#fff`,
show a toggler (**third in DOM**, `◫ Menu`, `rgba(255,255,255,0.5)`, uppercase `16 px`,
`letter-spacing:.1em`) that reveals a collapsing height-animated panel of the six rows
(`rgba(255,255,255,.7)`, hover `#fff`, **current row `#40bfc1`**, underline disabled), whose
`Page` sub-list is **always expanded** in flow (`#000`, `1px rgba(255,255,255,.3)` left rule,
items `rgba(255,255,255,.8)`).

- **Scenario: mobile chrome** — Given < 992 px, Then the bar is `rgb(0,0,0)`, `68 px` tall, the
  wordmark is white, the toggler is visible and the list is not shown as rows until activated.
- **Scenario: collapse** — Then activating the toggler reveals the panel with a `0.35s ease`
  height animation and `aria-expanded="true"`; a second activation hides it (`aria-expanded`
  `false`); hidden rows are not focusable.
- **Scenario: mobile dropdown** — Then the sub-list is expanded in flow (`display:block`),
  `#000`, with a left rule, and the trigger's `aria-expanded` is **consistent** with that
  visible state (or a real disclosure control is provided instead — never a closed marker over a
  visible list).
- **Scenario: mobile current row** — Then the current row's label is `#40bfc1` and its underline
  is disabled.

### Requirement: Materialised destinations

The recreation SHALL turn the source's **ten dead `href="#"`** anchors (six rows + four dropdown
items) into **ten real in-app destinations** with `scroll-margin-top`, and SHALL contain **zero**
`href="#"`.

- **Scenario: no dead links** — Then the app contains no `href="#"`, and each of the ten
  destinations resolves to a real `id`/route.
- **Scenario: real content** — Then the source's blank `112 px` of `#fff` below the strip is
  replaced by real sections of the source's *kinds* (home/intro for the wordmark, a current-page
  block, a pages group for the four dropdown items, blocks for the three plain rows), so the page
  is taller than the viewport and the non-sticky bar genuinely scrolls away. Imagery (optional;
  the source ships none) uses `https://picsum.photos/seed/capstan-<n>/<w>/<h>`.

### Requirement: Footer + attribution

Every template SHALL end with a footer linking **`https://www.componentdock.com/`** ("Component
Dock") with a computed current year — a documented delta, since the source has no footer.

- **Scenario: attribution** — Then exactly one `https://www.componentdock.com/` link branded
  "Component Dock" (new tab, `rel="noreferrer"`) and a computed year render in the footer.

## Verification checklist

- [ ] `openspec/specs/template-capstan/spec.md` present; `npm run spec:validate` green
- [ ] `apps/capstan` scaffolded from the simplest existing app; package
      `@free-react-templates/capstan`; `"homepage": "https://capstan.free.componentdock.com"`;
      `public/CNAME` = `capstan.free.componentdock.com`; `vite.config.ts` keeps `injectUiSource()`
- [ ] `npm install` at repo root registers the workspace
      (`grep -c "free-react-templates/capstan" package-lock.json`)
- [ ] **Desktop strip transparent** over `#fff` with the two `1px rgba(0,0,0,0.05)` hairlines;
      **no** `sticky`/`fixed`; ≈ `63.77 px` at `y = 210`
- [ ] Heading **28 px / 400 / lh 1.5 / #000**, `48 px` bottom margin → strip top at `210 px`
- [ ] **Six** rows in order (`current → dropdown → Catalog / Work / Blog / Contact`), list
      **centred** by `margin:auto` at ≥992 px
- [ ] Row tokens: `13 px / 400 / #808080`, `padding:19.2px 20px`, `62 px` tall
- [ ] Hover: label `#40bfc1` + a **`1px` full-width `#40bfc1` underline at `bottom:-1px`** wiping
      `scaleX(0)→scaleX(1)` over `0.5s`; **current row keeps the underline** with a **`#000`**
      desktop label + `aria-current`; disabled under `prefers-reduced-motion: reduce`
- [ ] Dropdown: white `4 px` panel, shadow `0 10px 34px -20px rgba(0,0,0,.41)`, items `12 px / #000`
      with a **visible `#40bfc1` hover fill**; hover + click + `ArrowDown`/`ArrowUp`/`Escape`/outside
      click; viewport-flip guard
- [ ] Search form **257 × 46**, radius `4 px`, ink `rgba(0,0,0,.7)`; **hidden below `768 px`**;
      labelled input + named submit inside `role="search"`; real `preventDefault()` handler; the
      URL hash does not change on submit
- [ ] Mobile < 992 px: bar **`#000`**, `68 px`, wordmark `#fff`, toggler **third in DOM**
      (`rgba(255,255,255,.5)`, `16 px`, `letter-spacing:.1em`), collapsing panel `0.35s ease`,
      rows `rgba(255,255,255,.7)` (hover `#fff`, current `#40bfc1`), `Page` sub-list **always
      expanded** (`#000`, `1px rgba(255,255,255,.3)` rule, items `rgba(255,255,255,.8)`),
      `aria-expanded` truthful
- [ ] Ten dead `href="#"` materialised as real destinations; **zero** `href="#"`; real sections so
      the bar scrolls away; imagery via `picsum.photos/seed/capstan-<n>/...`
- [ ] Accessibility: `aria-expanded`/`aria-controls` on the toggler and dropdown trigger,
      `aria-haspopup` on the trigger, `aria-current="page"` on the current row, labelled search
      input + named submit, named toggler glyph, visible `focus-visible` rings everywhere (the
      source sets `outline:none !important`), `Escape` closes the dropdown and returns focus,
      hidden content not focusable, reduced-motion handled, no horizontal overflow at 320 px
- [ ] Shape language: `rounded-none` on the strip, rows and slab; only rounding is the **`4 px`**
      search field and the **`4 px`** dropdown panel; no pills
- [ ] Zero `colorlib` / "Website Menu 13" / `website-menu-13` strings in `apps/capstan` (comments
      included); none of the source's six labels, its `Page n` items, its `Magz.` wordmark, its
      `Search` placeholder or its `Website menu #03` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead
      weight), no inline SVG `<path>` data from the preview, no `cl-`/`ftco-` utility classes, no
      jQuery/Bootstrap, no Font Awesome
- [ ] Dead source code dropped: `cl-bg-dark` `#343a40`, every `cl-navbar-dark` colour, the
      Bootstrap palette, the unused dropdown-item states and `cl-dropdown-menu-right`, the
      `@media print` block (incl. `@page{size:a3}`), the `:where(html) … all: revert` reset, the
      system `Roboto` body stack, all Roboto woff2 files
- [ ] Google Fonts Poppins `<link>` in `index.html`; icons from `lucide-react`
- [ ] Deliberate deltas recorded in the PR: new name + own wordmark/labels/dropdown items, ten dead
      links materialised, real `lucide-react` icons instead of the inline-SVG glyphs and the CSS
      caret triangle, a labelled `role="search"` form with a real submit handler instead of
      `action="#"`, restored hover/`focus-visible` affordances, `aria-current` on the current row,
      a truthful mobile `aria-expanded`, focus management on `Escape`, reduced-motion handling, the
      blank filler page replaced with real content, and the added footer
- [ ] `scripts/verify-app.sh capstan` green (typecheck + lint + knip + fallow + vitest 100 % +
      build)
- [ ] Footer attribution present; squash-merge the PR; mark the TEMPLATES.md `Website Menu 13`
      item `[x]` with the live `https://capstan.free.componentdock.com` URL + homepage and run
      `npm run readme:status`

## Deltas (deliberate, to record in the PR)

- **New name + own copy:** `capstan`, own wordmark, own six labels, own four dropdown items, own
  heading — never `Magz.`, `Home`/`Page`/`Catalog`/`Work`/`Blog`/`Contact`, `Page 1`…`Page 4`,
  `Website menu #03` or `Search` verbatim.
- **Ten dead `href="#"` materialised** as real in-app destinations with `scroll-margin-top`, so
  the header has something to navigate to; the source's `112 px` of blank `#fff` below the strip
  becomes real content.
- **Real icons:** `lucide-react` magnifier / three-bar toggler / `ChevronDown` caret — no copied
  inline SVG `<path>` data.
- **Accessibility restored** wherever the source removes it: visible `focus-visible` rings on the
  wordmark, every row, the toggler, the search input and the dropdown items (`outline:none
  !important` in the source); a labelled `role="search"` form with a named submit button;
  `aria-current="page"` on the current row; `Escape` closes the dropdown and returns focus; the
  collapsed panel is not focusable while hidden.
- **A real submit handler** instead of `action="#"`, and a **visible dropdown-item hover** kept
  (the source already has one here — teal fill, white text).
- **A truthful mobile `aria-expanded`** despite the source's always-expanded `display:block
  !important` sub-list.
- **Google Fonts Poppins 400/500/700** instead of the eight self-hosted Roboto files (all dead
  weight), one `<link>` in `index.html`.
- **Reduced-motion handling** for the `.5s` underline wipe and the `.35s` collapse.
- **An added footer** linking `https://www.componentdock.com/` ("Component Dock") with a computed
  year — the source has no footer at all.
