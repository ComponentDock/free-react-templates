# Template: Davit (Website Menus)

## Purpose

Davit is the *Website Menus* family's **white floating card with an amber accent and a circular
cart link**. A centred `28 px` heading sits on a **`#fafafa`** page, and under it a **white card**
(`padding:10px`, **`border-radius:5px`**, shadow `0 5px 20px -17px rgba(0,0,0,0.34)`,
`position:relative` — never sticky) carries three blocks on one line: a **single-line uppercase
`#000` wordmark** at its left, **five `13 px` uppercase `#333333` rows pushed to the right**
(`margin-left:auto`, `margin-right:1rem`, `letter-spacing:1px`) with the **current row's label in
amber `#fec771`**, and — as the list's **sixth item** — a **`40 px` circular cart link**
(`border-radius:50%`, `1px solid #fec771`, amber glyph) whose **hover/click reveals a white,
`4 px`-rounded dropdown** (`box-shadow:0 10px 34px -20px rgba(0,0,0,0.41)`, items `12 px` `#000`
with an amber hover fill and white text, two `1px #e9ecef` dividers). Hovering a row turns its
label `#fec771`. Below **`992 px`** the card turns **`#000`**, the wordmark white, the rows
collapse into a `☰ MENU` toggler (`rgba(255,255,255,0.5)`, uppercase, `16 px`,
`letter-spacing:.1em`) that reveals a **height-animated full-width panel** (`flex-basis:100%`) of
the six items in `rgba(255,255,255,0.7)` (hover and current row `#fff`) at `14.4 px` vertical
padding each, while the cart link **keeps** its `40 px` amber ring. The page holds **nothing else**
— no content sections, no images, no footer, no sticky chrome; the document does not scroll and
**11** of its **12** anchors are dead `href="#"`.

It is an original React recreation of the ColorLib free snippet **"Website Menu V15"** (source
slug `website-menu-15`), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's structure, order and design
tokens 1:1 but copies no asset (no images — the source ships none, no font files, no CSS files, no
icon-font glyphs, no inline SVG `<path>` data, no text verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-15/ — page title *"Website Menu V15 -
  Free Responsive Navbar Template 2026 - Colorlib"*, **HTTP 200**, 108,918 B, sha256
  `3503675c50fad5391437ef689284c1b408aaad5e1f78d0ca9f1f33c120a533ab`, verified 2026-10-12. Page
  meta: posted **March 9, 2021** (structured data `datePublished`
  **2021-03-09T14:19:08+00:00**) by **Rok Krivec**, `dateModified`
  **2026-09-25T10:42:07+00:00** (the September 2026 rebuild); ColorLib's own one-line description:
  *"The best free responsive navbar template to quickly embed a menu section to your website, blog
  or online store."* September 2026 update note (verbatim): *"Updated September 2026: this snippet
  is now plain HTML and CSS plus a few lines of vanilla JavaScript: no jQuery, no Bootstrap files,
  no plugins. The download is 253 KB (it was 261 KB). Use it on its own, or drop it into a
  Bootstrap 4, 5 or 6 project and it looks the same. The collapsible sections open and close
  without Bootstrap's JavaScript. The drop-down menus work without Bootstrap's JavaScript,
  including keyboard navigation."* TEMPLATES.md `## Website Menus (20)` — this item is the
  family's **fifteenth** entry at **line 3087**; the slug `website-menu-15` appears exactly
  **once** in TEMPLATES.md and in **no** spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-15/` returns **HTTP 404**
  (`Not Found`, 9 B) — like its `-01`…`-14` siblings, the *Website Menus* family does **not** live
  under the slug-only theme path. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-15/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **4,713 B**, `<title>Website menu 05</title>`, sha256
  `8b4e1104dcb2d8229c48a1140b183b98c594913f4cf4cdb137d746a55ae1c5c0`, verified 2026-10-12) — the
  URL the preview host's catalog index records for this slug. Its two assets —
  `css/style.css?v=795cf346` (**18,643 B**, `text/css`, sha256
  `7e850dd3f43856826da5aaca33c69833923c54177cc8829578ca9c41aaf3aced`) and
  `js/snippet.js?v=a1b5a81a` (**5,798 B**, `application/javascript`, sha256
  `9b82044ffbb57e31c00b07cff2db232f6c02ee1a5fb4549ae5dca0e05ab13c05`) — are **byte-identical**
  (same sha256, verified) to the copies in the snippet's own downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-15.zip` (**HTTP 200**,
  `application/zip`, **258,679 B**, sha256
  `e5d82446cc0bb263d249c8715af113378eac9a568d23cb6c0eb416896f4151e2`; ColorLib rounds this to
  "253 KB"), which ships `index.html` (**4,510 B**), `css/style.css`, `js/snippet.js`,
  `README.md` (**1,264 B**), **no images at all**, and **eight** Roboto woff2 files (100/300/
  400/700 × latin/latin-ext — **247,856 B = 95.8 %** of the archive). `diff` between the live page
  and the archive `index.html` is **head-only** (the preview host's `noindex` meta tags, a
  `cdnjs.cloudflare.com` `dns-prefetch`, `fetchpriority="high"`, and the cache-busting query
  strings) — the archive is the readable, un-versioned twin of the live preview. Both were read
  for this spec and the live render was cross-checked in a browser at 1440, 1200, 992, 991, 768,
  420, 375 and 320 px (see Design reference).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-15.jpg
  (**HTTP 200**, served as **AVIF**, 5,695 B, 1200×972, converted to PNG and inspected visually
  2026-10-12). No screenshot-only fallback was needed — the live preview is the primary reference
  and the archive its readable twin. The screenshot is a browser-chrome mock of the rendered
  page: the centred heading **`Website menu #05`**, then the **white rounded card** carrying the
  black uppercase wordmark **`LOGO`** at its left, the uppercase rows **`HOME`** (amber — the
  current one) · **`ACCESSORIES`** · **`SHOP`** · **`PRODUCTS`** · **`CONTACT`** to its right, and
  an **amber-ringed `40 px` circular cart button** (amber cart glyph) at the card's right end; the
  rest of the page is empty `#fafafa`.
- **New name:** `davit` (apps/davit, `@free-react-templates/davit`) — a *davit* is the **small
  deck crane that hoists a ship's boat over the side**, a fitting that swings its load outboard
  the way this variant's cart link swings its dropdown open; it keeps the family's nautical run:
  **menutree** (`-01`), **slidenav** (`-02`), **navpill** (`-03`), **menuribbon** (`-04`),
  **starboard** (`-05`), **larboard** (`-06`), **topdeck** (`-07`), **bowsprit** (`-08`),
  **gangway** (`-09`), **halyard** (`-10`), **ensign** (`-11`), **gunwale** (`-12`), **capstan**
  (`-13`), **windlass** (`-14`). Single lowercase word, kebab-safe (no hyphen needed).
  Verified 2026-10-12: `ls apps/`, `openspec/specs/` and `docs/templates/` return **zero** hits
  for `davit`, `TEMPLATES.md` contains no such name, and
  `https://colorlib.com/wp/template/davit/` returns **HTTP 404**, so it is not a ColorLib
  source name either. The source name "Website Menu V15", its `Logo` wordmark, its six labels,
  its five dropdown item strings and its `Website menu #05` heading are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V15" (source slug `website-menu-15`,
  https://colorlib.com/wp/template/website-menu-15/), `datePublished` **2021-03-09**, rewritten in
  the 2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no Bootstrap files, no
  images** in the download. Design-wise this is the family's **"white floating card + right-aligned
  amber rows + circular cart link with a dropdown"** variant: a centred heading, then a **white,
  `5 px`-rounded card with a soft shadow** over a **`#fafafa`** page, holding the wordmark (left),
  **five uppercase rows right-aligned by `margin-left:auto`** (middle-right) and, as the list's
  **sixth item**, a **`40 px` amber-ringed circle** carrying a cart glyph that opens a **white
  dropdown**; the only accent is the **amber `#fec771`** used for the current row's label, the row
  hover, the cart ring and glyph, and the dropdown item hover fill. There is **no search field**
  and **no social row** in this sheet. A `992 px` breakpoint turns the card **`#000`** and stacks
  the six items into a collapsing panel; unlike its `-14` sibling the header **never wraps** (the
  line holds only the wordmark and the toggler). The page contains **only** the heading and the
  card — no content sections, no images, no footer, nothing sticky, and it does not scroll.
- **CSS namespace:** the sheet (18,643 B, **156** rule blocks, **18** `@media` blocks, **zero**
  `sticky`/`fixed` declarations) is self-contained and `cl-`-prefixed for its utilities
  (`cl-container`, `cl-row`, `cl-col-md-6`, `cl-text-center`, `cl-justify-content-center`,
  `cl-mb-5`, `cl-p-0`, `cl-ml-auto`, `cl-mr-md-3`, `cl-d-flex`, `cl-d-md-flex`,
  `cl-align-items-center`, `cl-navbar`, `cl-navbar-expand-lg`, `cl-navbar-brand`,
  `cl-navbar-nav`, `cl-nav-item`, `cl-nav-link`, `cl-navbar-toggler`, `cl-navbar-collapse`,
  `cl-collapse`, `cl-collapsing`, `cl-show`, `cl-dropdown`, `cl-dropdown-toggle`,
  `cl-dropdown-menu`, `cl-dropdown-menu-right`, `cl-dropdown-item`, `cl-dropdown-divider`,
  `cl-icon`, `.fa`, `.caret`) and is a hand-rolled Bootstrap-4-look-alike — **not** a framework
  skin. Its first ~64 lines are a `:where(html) … all: revert` reset so the snippet renders
  identically inside a Bootstrap host page, then a `*{box-sizing:border-box}` normalize, the
  framework base (`.cl-container` tiers, `.cl-navbar*`, `.cl-collapse*`, the whole
  `.cl-dropdown*` family, `@media print` incl. `@page{size:a3}`), eight `@font-face` blocks, and
  then the ~170-line custom block (`body`, `a`, `h2`, `.ftco-section`, `.heading-section`,
  `.ftco-navbar-light`, `.cl-navbar-brand`, `.cl-navbar-nav`, `.cl-nav-link`, `.icon-cart`, the
  `.cl-dropdown-menu` restyle, `.cl-navbar-toggler`). It is **3.7 kB larger** than the `-14`
  sibling's 14,904 B because this variant ships the dropdown family (**25** occurrences of
  `dropdown`, **zero** `form-control`/`searchform`/`social`).
- **HTML structure (live preview, 4,713 B — archive twin 4,510 B):** document order is exactly —
  (1) `section.ftco-section` › `div.cl-container` › `div.cl-row.cl-justify-content-center` ›
  `div.cl-col-md-6.cl-text-center.cl-mb-5` › `h2.heading-section` reading **`Website menu #05`**,
  (2) a second `div.cl-container` › `nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.ftco_navbar.
  ftco-navbar-light` › `div.cl-container` with **three** children in this order — the brand, the
  toggler `button`, the collapsible `div`, (3) `script`. In detail:
  - **`a.cl-navbar-brand[href="index.html"]`** reading **`Logo`** — the **first** child of the
    card's container and the only anchor in the chrome with a real destination;
  - **`button.cl-navbar-toggler[type="button"][data-toggle="collapse"][data-target="#ftco-nav"]
    [aria-controls="ftco-nav"][aria-expanded="false"][aria-label="Toggle navigation"]`** ›
    `span.fa.fa-bars` › an inline **SVG** 3-bar glyph (`viewBox="0 0 1536 1792"`, wrapped in
    `<g transform="translate(0,1536) scale(1,-1)">`, `class="cl-icon"`,
    `style="vertical-align:-0.1429em"`, `aria-hidden="true"`, `focusable="false"`) plus the
    literal text **`Menu`** — the toggler is **second in DOM** (**note:** the `-14` sibling puts a
    social block between the brand and the toggler; this variant has no social block, so the
    toggler follows the brand directly);
  - **`div#ftco-nav.cl-collapse.cl-navbar-collapse`** › `ul.cl-navbar-nav.cl-ml-auto.cl-mr-md-3`
    with **six `li.cl-nav-item`** in source order: **Home** (`cl-active`), **Accessories**,
    **Shop**, **Products**, **Contact**, and a sixth
    `li.cl-dropdown.cl-nav-item.cl-d-md-flex.cl-align-items-center` holding the cart trigger;
  - **the cart item (sixth `li`, source `-05`'s real furniture):**
    `a.cl-dropdown-toggle.cl-nav-link.cl-d-flex.cl-align-items-center.cl-justify-content-center.
    icon-cart.cl-p-0[href="#"][id="dropdown04"][data-toggle="dropdown"][aria-expanded="false"]` ›
    `i.fa.fa-shopping-cart` › an inline **SVG** cart glyph (`viewBox="0 0 1664 1792"`, same
    `<g transform>` wrap) plus an empty `<b class="caret"></b>` (the sheet declares **no** `.caret`
    rule — the class is dead markup, and `.cl-dropdown-toggle::after` is explicitly
    `display:none`), then
    `div.cl-dropdown-menu.cl-dropdown-menu-right[aria-labelledby="dropdown04"]` with **five
    `a.cl-dropdown-item`** — *Action*, *Another action*, *Something else here*, *Separated link*,
    *One more separated link* — separated by **two** `div.cl-dropdown-divider` (after item 3 and
    after item 4). Every one of the five is a dead `href="#"`.
  - **Anchors:** the live page holds **12** anchors — the wordmark's real `index.html` plus **11**
    dead `href="#"` (five rows + the cart trigger + five dropdown items). There is no second page
    to probe; the recreation must materialise all **eleven** as real destinations.
- **Measurements (live preview, Chromium, DPR 1, read 2026-10-12; the sheet was fetched by curl
  **and** by the browser and the two copies are byte-identical, sha256 `7e850dd3…`, so every token
  below is confirmed by the source CSS, and every geometry figure was **cross-checked against the
  rendered pixels** of 1440 px and 420 px screenshots. Note for the next session: a
  `getComputedStyle` read taken immediately after a CDP
  `Emulation.setDeviceMetricsOverride` can return a **stale pre-override value** — the brand's
  `color` read `rgb(255,255,255)` on the first desktop pass and `rgb(0,0,0)` on the freshly
  re-loaded pass, while the screenshot rendered black ink both times. **Re-load the page after the
  override, and treat screenshot pixels as authority.**)**
  - **`h2`:** 28 px / 400 / `line-height:1.5` (42 px) / `#000` / centred (`.cl-text-center`),
    `margin-bottom:0.5rem` (8 px) + `.cl-mb-5` **48 px**; the `cl-col-md-6` column is
    `flex:0 0 50%; max-width:50%` at ≥768 px and `100 %` below.
  - **Heading band:** `section.ftco-section{padding:7em 0}` = **112 px** top/bottom over the
    page's **`#fafafa`** → **112 + 42 + 8 + 48 = 210 px** to the card's top edge at every width
    (measured `h2.y = 112, h = 42`, `nav.y = 210` at 1440 px and at 420 px).
  - **The card (`nav.ftco-navbar-light`):** **`background:#fff !important`**, `z-index:3`,
    **`padding:10px`**, **`border-radius:5px`**,
    `box-shadow:0px 5px 20px -17px rgba(0,0,0,0.34)`, `position:relative` (**not sticky** — the
    sheet contains **zero** `sticky`/`fixed`). Measured **1110 × 81.8 at `x = 165, y = 210`** at
    1440 px and **1110 × 81.8 at `x = 45`** at 1200 px (the width of the outer container's content
    box), **930 × 81.8 at `x = 31`** at 992 px. Below `992 px`:
    `background:#000 !important`, `padding:10px 15px`, `position:relative; top:0`, measured
    **690 × 66 at 991/768 px, 390 × 66 at 420 px, 345 × 66 at 375 px, 290 × 66 at 320 px** — the
    card is **66 px at every sub-992 width and never wraps** (the header line carries only the
    wordmark and the toggler; the `-14` sibling's social row is what made its header wrap to 91 px
    at 375/320 px).
  - **Containers:** outer `div.cl-container` — `max-width` tiers **540/720/960/1140** with
    `padding:0 15px`, `margin:auto`; the card is a **child of it** and is `width:100%` of that
    content box (measured `x = 165 → 1275` at 1440 px, `x = 45 → 1155` at 1200, `x = 31 → 961` at
    992). Inner `div.cl-container` is the card's own flex row: measured **1090 px** at 1440/1200,
    **910 px** at 992 (**`padding:0`** inside the card below 992 px —
    `.cl-navbar-expand-lg > .cl-container{padding-right:0; padding-left:0}`), whose content box is
    **1060 px** at ≥1200 px. Laid out left→right at 1440 px: the wordmark (measured **58.9 × 46 at
    `x = 190`**), the right-aligned list (**578.6 px**, ending 16 px before the container's content
    right edge), whose last item is the cart circle (**40 px** ring at `x = 1194 → 1234`), i.e.
    flush with the list's right edge.
  - **Wordmark (`a.cl-navbar-brand`):** own-brand text, **`font-size:1.25rem` = 20 px**,
    `text-transform:uppercase`, `font-weight:700`, `line-height:36px` (inherits `body` 1.8),
    `color:#000`, `padding-top/bottom:0.3125rem` (5 px), `margin-right:1rem` (16 px),
    `display:inline-block`, `white-space:nowrap`; measured **58.9 × 46** in the **81.8 px** card
    line (46 px because the row list is the taller item). It **never changes colour on hover**
    (`.cl-navbar-brand:hover,:focus{color:#000}` = the resting colour). Below `992 px`: **`#fff`**.
  - **Rows (`ul.cl-navbar-nav.cl-ml-auto.cl-mr-md-3`):** `display:flex; flex-direction:row` at
    ≥992 px, pushed **right** by **`margin-left:auto`** (resolved to 390.5 px at 1440) plus
    **`margin-right:1rem`** (16 px) at ≥768 px; measured **578.6 × 61.8**. Each
    `.cl-nav-item > .cl-nav-link` is **`font-size:13px`**, `font-weight:400`, **`text-transform:
    uppercase`**, **`letter-spacing:1px`**, **`padding:1.2rem 20px`** (**19.2px 20px**),
    `color:#333333`, `position:relative`, `opacity:1 !important`, `line-height:23.4px` →
    **61.8 px** rows (the card's 81.8 px = 10 + 61.8 + 10). Hover → **`#fec771`**; the **current**
    row (`.cl-nav-item.cl-active > a`) → **`#fec771`** at rest on desktop (pixel-verified in the
    1440 px render). Note the **uppercase + `13 px`** type is this variant's signature: the `-14`
    sibling's rows are `14 px` sentence-case.
  - **The accent is text-only on rows:** this sheet defines **no** `.cl-nav-link:before`
    underline and no slab/border on the row links; amber appears as `color` (hover/current row),
    as the cart ring + glyph, and as the dropdown item hover fill.
  - **Cart link (`a.cl-nav-link.icon-cart`):** `border:1px solid #fec771`, **`width:40px;
    height:40px; border-radius:50%`**, `padding:0`, `display:flex` with the glyph centred (its own
    `cl-d-flex cl-align-items-center cl-justify-content-center`) and the glyph
    (`.icon-cart .fa`) **`#fec771`**; the `li` is `cl-d-md-flex cl-align-items-center`
    (measured **40 × 40 at `x = 1194, y = 230.9`** at 1440 px — vertically centred in the 61.8 px
    list). It is the **list's last item**, not a separately ordered block: unlike the `-14`
    sibling's social row there is **no** `order` utility here.
  - **Dropdown (`.cl-navbar-nav > .cl-nav-item .cl-dropdown-menu`):** plain, over a white
    `background:#fff`, `border:none`, `padding:0`, `border-radius:4px`,
    `box-shadow:0px 10px 34px -20px rgba(0,0,0,0.41)`; right-aligned (`.cl-dropdown-menu-right`)
    so it hangs under the circle. Items `.cl-dropdown-item`: **`font-size:12px`**, `color:#000`,
    `padding:0.25rem 1.5rem` (**4px 24px**); `:hover,:focus` → **`background:#fec771; color:#fff`**;
    `cl-dropdown-divider` is `border-top:1px solid #e9ecef`, `margin:.5rem 0`. Measured open at
    1440 px: **179.4 × 182 at `x = 1054.6, y = 283.8`** (i.e. flushing to the list's right edge and
    starting just under the 40 px circle). The framework's own palette
    (`#007bff`/`#0056b3`/`#6c757d`/`#212529`/`#f8f9fa`) is **overridden** by the custom block — no
    Bootstrap blue survives.
  - **Toggler (`button.cl-navbar-toggler`):** `border:none`, **`color:rgba(255,255,255,0.5)
    !important`**, `cursor:pointer`, `padding-right:0`, `text-transform:uppercase`,
    `font-size:16px`, `letter-spacing:.1em` (measured `1.6px`), focus `outline:none !important`;
    content = the inline three-bar SVG (**16 px** via `.cl-icon{height:1em}`) + the word **`Menu`**.
    Measured **85.3 × 24.7** at the container's right at 420 px, `display:none` at ≥992 px.
  - **Mobile panel (`div#ftco-nav.cl-collapse.cl-navbar-collapse`):** the wrapper carries
    `flex-basis:100%; flex-grow:1; align-items:center` **outside** any media query, so when the
    toggler opens it the panel takes a **full-width line of its own below** the wordmark/toggler
    line — measured **360 × 310.9 at 420 px** with the card growing **66 → 376.9 px**; the six
    items stack in a `flex-direction:column` list (`padding-bottom:10px`) with **`padding:.9rem 0`**
    (**14.4 px**, → **52.2 px** per row), resting **`rgba(255,255,255,0.7)`**, hover **`#fff`**,
    current item **`#fff`** (`.cl-nav-item.cl-active > a{color:#fff}` inside the `991.98 px`
    block), horizontal padding `0`. The **cart circle keeps its `40 × 40` and its amber
    `1px solid #fec771` ring** in the panel (measured **40 × 40** as the sixth stacked item).

## Breakpoint behaviour (values measured on the live preview and derived from its sheet)

| Width | Card | Card bg | Card height | Wordmark | Rows | Cart circle |
| --- | --- | --- | --- | --- | --- | --- |
| 320 | 290 @ `x = 15` | **`#000`** | **66** (no wrap) | `#fff` | panel only (toggler) | 40 × 40, `1px #fec771` |
| 375 | 345 @ `x = 15` | **`#000`** | **66** (no wrap) | `#fff` | panel only | 40 × 40, `1px #fec771` |
| 420 | 390 @ `x = 15` | **`#000`** | **66** | `#fff` | panel only | 40 × 40, `1px #fec771` |
| 768 | 690 @ `x = 39` | **`#000`** | **66** | `#fff` | panel only | 40 × 40, `1px #fec771` |
| 991 | 690 @ `x = 150.5` | **`#000`** | **66** | `#fff` | panel only | 40 × 40, `1px #fec771` |
| 992 | 930 @ `x = 31` | `#fff` + shadow | **81.8** | `#000` | `flex` row, right-aligned, 578.6 × 61.8 | 40 × 40, `1px #fec771` |
| 1200 | 1110 @ `x = 45` | `#fff` + shadow | **81.8** | `#000` | right-aligned, 578.6 × 61.8 | 40 × 40, at `x = 474 → 514` |
| 1440 | 1110 @ `x = 165` | `#fff` + shadow | **81.8** | `#000`, 58.9 × 46 at `x = 190` | right-aligned, 578.6 × 61.8 | 40 × 40, ring at `x = 1194 → 1234` |

The card sits at **`y = 210`** at every width; the only layout change at `992 px` is the card's
background, height, wordmark colour, the appearance of the toggler and the disappearance of the
row list (all from the single `@media (max-width:991.98px)` block).

## Type and colour summary

- `body{font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
  font-weight:normal; background:#fafafa; color:gray}` (`gray` = `#808080`) — the page is
  **`#fafafa`**, which is what makes the white card read as a floating card.
- `a{transition:.3s all ease; color:#fec771}` — **inline links are the same amber as the accent**;
  `a:hover,a:focus{text-decoration:none !important; outline:none !important; box-shadow:none}`.
- `h2,.h2{line-height:1.5; font-weight:400; font-family:"Poppins", Arial, sans-serif; color:#000}`
  + `.heading-section{font-size:28px; color:#000}` (28 px wins over the framework's `2rem` = 32 px).
- **No webfont is loaded at all.** The live page's only `<link>` is the sheet itself (plus a
  `cdnjs.cloudflare.com` `dns-prefetch` that is never used): there is **no Google Fonts request**
  and **no `@font-face` for Poppins** anywhere, so `"Poppins", Arial, sans-serif` resolves to
  **Arial** in the source. The eight self-hosted **Roboto** woff2 files (declared for **100/300/
  400/700** this time) are dead because the custom `body` rule's Poppins stack wins:
  **247,856 B of dead font payload, 95.8 % of the 258,679 B download**. The four latin-ext files
  are **byte-identical to each other** (sha256 `cdd53dc5…`) and so are the four latin files
  (sha256 `0a44e0bb…`) — two distinct payloads shipped eight times.
- Token table: accent amber `#fec771` (current/hover row label, cart ring + glyph, dropdown item
  hover fill) · page `#fafafa` · card `#fff` (mobile `#000`) · wordmark `#000` (mobile `#fff`) ·
  rows `#333333` (mobile `rgba(255,255,255,.7)`, hover/current mobile `#fff`) · dropdown surface
  `#fff` · dropdown item ink `#000` (hover ink `#fff`) · dropdown divider `#e9ecef` · heading
  `#000` · body ink `gray`/`#808080` · toggler `rgba(255,255,255,.5)` · card radius **`5px`** ·
  cart + dropdown radius **`50%` / `4px`** · card shadow `0 5px 20px -17px rgba(0,0,0,.34)` ·
  dropdown shadow `0 10px 34px -20px rgba(0,0,0,.41)`.

## Fidelity pitfalls (things that will bite an implementer)

1. **The accent is amber `#fec771`, not the `-14` sibling's pink `#fc7fb2`** and not the `-13`
   sibling's teal. Copying a sibling's palette is the single easiest way to break this template.
2. **Rows are `13 px` and `text-transform:uppercase` with `letter-spacing:1px`** — the only
   sibling in the family so far with uppercase rows. Rows measure **61.8 px** (13 × 1.8 = 23.4 lh +
   19.2 × 2 padding), so the card is **81.8 px**, not the `-14` sibling's 84 px.
3. **The card is WHITE, `5 px`-rounded and casts a soft shadow on a `#fafafa` page** and keeps its
   radius + shadow on mobile too — only the background flips to `#000` below `992 px`.
4. **The header never wraps.** With only the wordmark and the toggler on the line, the card is
   **66 px at 320/375/420 px** — do **not** port the `-14` sibling's two-line 91 px wrap behaviour.
5. **The sixth item is a `40 px` amber-ringed circle, not a social row.** It sits **inside the
   `ul`** as the last `li` (no `order` utility, no separate block), is vertically centred, keeps
   `40 × 40` on mobile, and its glyph is amber at every width.
6. **Everything in the dropdown is dead:** the five item strings (*Action*, *Another action*,
   *Something else here*, *Separated link*, *One more separated link*) are Bootstrap placeholders
   and the two dividers are decorative — the recreation must author its own menu.
7. **`.caret` is dead markup** — the sheet declares **no** `.caret` rule (0 occurrences) and
   `.cl-dropdown-toggle::after` is explicitly `display:none`, so there is **no** caret triangle.
8. **The dropdown opens on hover *and* on click** (the source's JS binds `mouseenter`/`mouseleave`
   plus a click toggle), supports `ArrowDown`/`ArrowUp` roving focus and `Escape` (which closes and
   refocuses the trigger), and closes on outside click or item activation. A React recreation must
   keep hover, click, keyboard and outside-click behaviour.
9. **The panel is a full-width in-flow line** (`flex-basis:100%`), not a dropdown overlay: the card
   grows from **66 px** to **376.9 px** (measured at 420 px) and the items stack in a column with
   `padding-bottom:10px` and `padding:.9rem 0` each.
10. **The current row's label is amber on desktop (`#fec771`) but WHITE on mobile.**
11. **The framework's Bootstrap palette is overridden** (`#007bff`/`#0056b3`/`#6c757d`/`#212529`/
    `#f8f9fa`) — the dropdown never shows Bootstrap blue.
12. **Nothing is sticky** and the page does not scroll in the source (`innerHeight ===
    scrollHeight`, 437 = 437): the recreation adds real content below the card, and the card must
    scroll away with it.
13. **No webfont ships**, so the source renders Arial: add one Google Fonts `<link>` for Poppins
    (delta) rather than copying eight dead Roboto woff2 files.
14. **Dead code to drop:** the `:where(html) … all: revert` reset, the `@media print` block (incl.
    `@page{size:a3}`), the unreferenced `.fade` (3) and `.nav` rules, the empty `<b class="caret">`,
    the `.cl-dropdown-toggle::after` caret border-triangle, the Bootstrap `#007bff`/`#0056b3`/
    `#6c757d`/`#212529`/`#f8f9fa` palette, the `cl-collapsed` class (the sheet styles **no** rule
    for it — 0 occurrences in CSS), the system `Roboto` body stack, and all eight Roboto woff2
    files.
15. **A `getComputedStyle` read right after a CDP viewport override can be stale** (see
    Measurements) — re-load the page and trust the screenshot pixels.

## Requirements

### Feature: Heading band

#### Scenario: Band spacing and the card's landing point

- **Given** a viewport ≥ 768 px
- **When** the heading band is measured
- **Then** the page background is **`#fafafa`** and the band carries `padding:112px 0` (`py-28`)
- **And** the heading is **28 px / 400 / `line-height:1.5` (42 px) / `#000`**, centred, in a column
  that is `50%` at ≥768 px and `100%` below, with an `8px` margin-bottom plus a `48px` block margin
- **And** the card's top edge lands exactly **210 px** below the page top at every width
  (112 + 42 + 8 + 48)

#### Scenario: The heading is own copy

- **Given** the app renders
- **Then** the string `Website menu #05` never renders
- **And** the app contains **zero** `colorlib`/`website-menu-15` strings

### Feature: Floating white card

#### Scenario: Desktop chrome

- **Given** a viewport ≥ 992 px
- **When** the card is measured
- **Then** its background is `rgb(255,255,255)` with **`padding:10px`**, **`border-radius:5px`**
  and **`box-shadow:0 5px 20px -17px rgba(0,0,0,0.34)`**, and it has **no** hairline borders
- **And** it is `position:relative` (**never** `sticky`/`fixed`) and measures ≈ **81.8 px** tall at
  `y = 210` at 1440 px, ≈ 1110 px wide (the outer container's content box)

#### Scenario: The radius and the shadow survive the breakpoint

- **Given** a viewport < 992 px
- **Then** the background is `rgb(0,0,0)` and `padding` is `10px 15px` (**66 px** tall)
- **And** the `5 px` radius and the shadow declaration are **unchanged**

#### Scenario: No sticky behaviour

- **Given** the app rendered with real content below the card
- **When** the page is scrolled
- **Then** the card moves out of the viewport (a negative `y`) and the app carries no
  `sticky`/`fixed` header rule

#### Scenario: Container tiers

- **Given** each measured width
- **Then** the outer container is **1140 px** (≥1200), **960 px** (≥992), **720 px** (≥768) and
  **345 px** at 375 px, with `15 px` gutters **and no card gutters** below `992 px`
- **And** the card's own flex row is **1090 px** at 1440/1200 px and **910 px** at 992 px

### Feature: Single-line wordmark

#### Scenario: Wordmark type, colour and hover

- **Given** any width
- **When** the wordmark is measured
- **Then** it is own copy (never `Logo`), `text-transform:uppercase`, **20 px / 700**, with
  `padding:5px 0`, `margin-right:16px`, one line only, ≈ **58.9 × 46** inside the 81.8 px card line
- **And** it is **`#000`** at ≥992 px and **`#fff`** below, links to the top of the page, keeps a
  visible focus ring and its colour is identical at rest and on hover

### Feature: Right-aligned six-item list with the amber current row

#### Scenario: Rows, order and alignment

- **Given** a viewport ≥ 992 px
- **Then** **five** text rows plus the cart item render in source order — current, then the four
  plain ones, then the cart — inside one list pushed **right** by `margin-left:auto` plus
  `margin-right:1rem`
- **And** the list measures **578.6 × 61.8**, ending **16 px left of the container's content right
  edge**
- **And** below `992 px` the list is not shown as rows until the toggler is activated

#### Scenario: Row tokens and the amber accent

- **Given** a rendered row
- **Then** its link is **13 px / 400 / uppercase / `letter-spacing:1px` / `#333333`** with
  `padding:19.2px 20px` (**61.8 px** tall) and `line-height:23.4px`
- **And** hovering it turns its label **`#fec771`**; the current row's label is **`#fec771`** at
  rest on desktop with `aria-current="page"` and **`#fff`** below `992 px`
- **And** there is **no** underline, slab or background on either state — this sheet accents rows
  with `color` only

#### Scenario: Focus affordance

- **Then** every row shows a visible `focus-visible` ring (a delta: the source sets
  `outline:none !important`)

### Feature: Circular cart link and its dropdown

#### Scenario: Cart ring geometry

- **Given** any width
- **Then** the cart trigger is **40 × 40**, `border-radius:50%`, `1px solid #fec771`, `padding:0`,
  with an amber glyph centred inside, and it is the **last item of the nav list** (no `order`
  utility, no separate block)
- **And** at ≥992 px it is vertically centred in the 61.8 px row and ends flush with the list's
  right edge (ring at `x = 1194 → 1234` at 1440 px)

#### Scenario: Dropdown surface and items

- **Given** the trigger is hovered or activated
- **Then** a white menu with `border:none`, `padding:0`, `border-radius:4px` and
  `box-shadow:0 10px 34px -20px rgba(0,0,0,0.41)` opens right-aligned just under the circle
  (measured ≈ 179.4 × 182)
- **And** it holds **five** own-copy items at `12 px` / `#000` with `padding:4px 24px`, separated by
  **two** `1px #e9ecef` dividers, and a hovered item takes `background:#fec771; color:#fff`
- **And** none of the source's placeholder strings (*Action*, *Another action*, *Something else
  here*, *Separated link*, *One more separated link*) is reused

#### Scenario: Dropdown behaviour and keyboard support

- **Then** the menu opens on **hover and on click**, closes on outside click, on item activation
  and on `Escape`, and `Escape` returns focus to the trigger
- **And** `ArrowDown` on the trigger opens the menu and focuses the first item, and
  `ArrowDown`/`ArrowUp` move focus between items
- **And** the trigger exposes `aria-haspopup="true"`, `aria-expanded` and `aria-controls`, and there
  is **no** caret triangle (the source hides `::after` and declares no `.caret` rule)
- **And** each of the five items is a real destination (never `href="#"`)

### Feature: Mobile card and the full-width collapse panel

#### Scenario: Mobile chrome

- **Given** a viewport < 992 px
- **Then** the card is `rgb(0,0,0)`, **66 px** tall from 320 to 991 px, `padding:10px 15px`
- **And** the wordmark and the glyphs are white, the toggler (**second in DOM**, right after the
  wordmark) is visible, and the six items are hidden until it is activated

#### Scenario: The toggler and the panel

- **Given** the toggler is activated
- **Then** `aria-expanded` becomes `"true"` and the panel animates its height over **`0.35s ease`**
  (removed under `prefers-reduced-motion: reduce`)
- **And** the panel takes a **full width line below** the header row (`flex-basis:100%`, measured
  **360 × 310.9** at 420 px with the card growing **66 → 376.9 px**)
- **And** the six items stack in a column with `padding:.9rem 0` (**14.4 px**, **52.2 px** rows) and
  `padding-bottom:10px` on the list, resting **`rgba(255,255,255,0.7)`**, with hover and the current
  item **`#fff`**, and the cart circle keeps its `40 × 40` amber ring
- **And** a second activation reverses the animation, sets `aria-expanded="false"` and hidden items
  are not focusable

#### Scenario: No wrap at any width

- **Given** a viewport of 375 px or 320 px
- **Then** the card is still **66 px** (the header line holds only the wordmark and the toggler)
- **And** there is **no horizontal overflow** (`scrollWidth === innerWidth`)

### Feature: Materialised destinations

#### Scenario: No dead links

- **Then** the app contains **zero** `href="#"`; each of the five rows resolves to a real
  `id`/route and each of the five dropdown items to a real destination

#### Scenario: Real content replaces the blank page

- **Then** sections of the source's *kinds* carry own copy — an intro/home block for the wordmark, a
  current-page block, blocks for the plain rows and a shop/cart block for the cart link — each
  target with `scroll-margin-top` ≥ 64 px
- **And** the page is taller than the viewport, so the non-sticky card genuinely scrolls away; any
  imagery (the source ships none) comes from
  `https://picsum.photos/seed/davit-<n>/<w>/<h>`

### Feature: Footer and attribution

#### Scenario: Component Dock credit

- **Then** exactly one `https://www.componentdock.com/` link branded "Component Dock" (new tab,
  `rel="noreferrer"`) and a computed current year render in the footer — a documented delta, since
  the source has no footer

## Verification checklist

- [ ] `openspec/specs/template-davit/spec.md` present; `npm run spec:validate` green
- [ ] `apps/davit` scaffolded from the simplest existing app; package
      `@free-react-templates/davit`; `"homepage": "https://davit.free.componentdock.com"`;
      `public/CNAME` = `davit.free.componentdock.com`; `vite.config.ts` keeps `injectUiSource()`
- [ ] `npm install` at repo root registers the workspace
      (`grep -c "free-react-templates/davit" package-lock.json`)
- [ ] Heading band: `padding:112px 0` over **`#fafafa`**; heading **28 px / 400 / lh 1.5 / #000**
      centred with a `48 px` bottom margin → card top at **`y = 210`**
- [ ] Card: **`#fff`**, `padding:10px`, **`border-radius:5px`**,
      shadow `0 5px 20px -17px rgba(0,0,0,0.34)`, `position:relative` (**no** `sticky`/`fixed`),
      ≈ **81.8 px** tall, ≈ 1110 px wide at 1440 px (container content box); **no** hairline borders
- [ ] Wordmark: own copy, single line, `20 px`/`700`/uppercase, `#000` (`#fff` below 992 px),
      `py-[5px] mr-4`, ≈ `59 × 46`, **no hover colour change**
- [ ] **Five** rows in order (`current / four plain`), list **right-aligned** by `margin-left:auto`
      + `margin-right:1rem`, **13 px / 400 / uppercase / `letter-spacing:1px` / `#333333`**,
      `padding:19.2px 20px` (61.8 px tall), **578.6 × 61.8** at 1440 px
- [ ] Accent: hover row `#fec771`, current row `#fec771` at rest (desktop) and `#fff` (mobile);
      **no** underline, slab or background on rows; `aria-current="page"` + visible `focus-visible`
      ring
- [ ] Cart: **40 × 40** circle, `1px solid #fec771`, `border-radius:50%`, amber glyph, last item of
      the list, `40 × 40` on mobile too, flush with the list's right edge (ring at `x = 1194 → 1234`
      at 1440 px)
- [ ] Dropdown: white, `border:none`, `padding:0`, `border-radius:4px`,
      shadow `0 10px 34px -20px rgba(0,0,0,0.41)`, right-aligned under the circle; **five** own-copy
      items `12 px` / `#000` / `padding:4px 24px` with **two** `1px #e9ecef` dividers; hover
      `bg-[#fec771] text-white`; **no** caret triangle
- [ ] Dropdown behaviour: hover + click open, outside click / item activation / `Escape` close,
      `Escape` refocuses the trigger, `ArrowDown`/`ArrowUp` roving focus, `aria-expanded`/
      `aria-controls`/`aria-haspopup` set
- [ ] Mobile: card `rgb(0,0,0)`, **66 px** at every width 320–991 px, `padding:10px 15px`; toggler
      **second in DOM** with `rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`,
      visible focus ring; panel `flex-basis:100%`, height-animated `0.35s` (off under
      `prefers-reduced-motion: reduce`), card **66 → ≈377 px**, items `rgba(255,255,255,0.7)`
      (hover/current `#fff`) at `padding:.9rem 0` with `padding-bottom:10px` on the list; cart stays
      `40 × 40` amber; **no wrap** and `scrollWidth === innerWidth` at 320/375 px
- [ ] Zero `colorlib` / "Website Menu 15" / `website-menu-15` strings in `apps/davit` (comments
      included); none of the source's six labels, its `Logo` wordmark, its five dropdown placeholder
      strings or its `Website menu #05` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead
      weight — 247,856 B of the 258,679 B download), no inline SVG paths from the preview, no
      `cl-`/`ftco-` utility classes, no jQuery/Bootstrap, no Font Awesome
- [ ] Dead source code dropped: the `:where(html) … all: revert` reset, the `@media print` block
      (incl. `@page{size:a3}`), the unused `.fade` (3) and `.nav` rules, the empty
      `<b class="caret">`, the `.cl-dropdown-toggle::after` triangle, the Bootstrap palette, the
      `cl-collapsed` class the sheet never styles, the system `Roboto` body stack, and all Roboto
      woff2 files
- [ ] Documented deltas recorded in the PR: new name + own wordmark, own labels and dropdown menu,
      the eleven dead `href="#"` materialised, real `lucide-react` icons (cart/menu) instead of the
      inline SVG paths, a real Google Fonts Poppins `<link>` instead of eight dead self-hosted
      Roboto files, restored hover/`focus-visible` affordances, `aria-current` on the current row,
      keyboard dropdown support, reduced-motion handling, the blank filler page replaced with real
      content, and the added footer
- [ ] `scripts/verify-app.sh davit` green (typecheck + lint + knip + fallow + vitest 100 % + build);
      `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace; footer
      attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 15` item `[x]` with the live
      `https://davit.free.componentdock.com` URL + homepage and run `npm run readme:status`
