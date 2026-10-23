# Template: Binnacle (Website Menus)

## Purpose

Binnacle is the *Website Menus* family's **dark utility strip over a white in-flow bar with centred
gold-slab rows and a search field**. A centred `28 px` heading sits on a **`#fafafa`** page, and
under it a full-bleed **`#202020` strip** (34 px, no padding of its own) carries a white `12 px`
phone link at the left and **four `34 × 34` square `#4d4d4d` social tiles** at the right
(1 px apart, flush with the container's content right edge). Below it the **white, in-flow bar**
(`padding:0`, shadow `0 5px 20px -17px rgba(0,0,0,0.34)`, `z-index:3` — never sticky) holds a
**two-line wordmark** (`PAPERMAG` `20 px`/`700` uppercase over `MAGAZINE` `12 px`/`500`), **five
`11 px` uppercase `letter-spacing:2px` rows centred inside the bar** (`margin:auto`), and a
**white `257 × 46` search field** pinned last (`order:13`) at the right. Hovering a row wipes a
**full-height gold `#f1bc31` slab** behind it (`:before`, `scaleX(0) → scaleX(1)` over
`.2s ease-in-out`, `z-index:-1`) and turns its label white; the **current row wears that slab
permanently**. The fourth row is a `Page` dropdown (full white surface, `4 px` radius, items
`12 px` `#000` with a gold hover fill) whose trigger keeps a small `6 × 3` caret triangle. Below
**`992 px`** the bar keeps its white surface but turns into a **wrapping, `10px 15px`-padded
chrome** with a `☰ MENU` toggler (`rgba(0,0,0,0.5)`, uppercase, `16 px`, `letter-spacing:.1em`)
that reveals an **in-flow full-width panel** (`flex-basis:100%`, height-animated `0.35s ease`) of
five `49.6 px` rows — and the dropdown **renders permanently expanded** inside it
(`display:block !important`, `position:static`). The page holds **nothing else** — no content
sections, no images, no footer, nothing sticky; the document does not scroll at desktop width and
**14** of its **15** anchors are dead `href="#"`.

It is an original React recreation of the ColorLib free snippet **"Website Menu V16"** (source
slug `website-menu-16`), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's structure, order and design
tokens 1:1 but copies no asset (no images — the source ships none, no font files, no CSS files, no
icon-font glyphs, no inline SVG `<path>` data, no text verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-16/ — page title *"Website Menu V16 -
  Free Menu & Top Bar Template 2026 - Colorlib"*, **HTTP 200**, **109,014 B**, sha256
  `487c65f37679e413c4a0968b7e927f26fcc4f4b41519b7d7ddad01218904b3e8`, verified 2026-10-12. Page
  meta: posted **March 9, 2021** (structured data `datePublished`
  **2021-03-09T14:22:30+00:00**) by **Rok Krivec**, `dateModified`
  **2026-09-25T10:42:07+00:00** (the September 2026 rebuild); ColorLib's own description:
  *"Create a website header with this easy-to-use free menu and top bar template. Works with
  Bootstrap 4, 5 and 6."* September 2026 update note (verbatim): *"Updated September 2026: this
  snippet is now plain HTML and CSS plus a few lines of vanilla JavaScript: no jQuery, no
  Bootstrap files, no plugins. The download is 254 KB (it was 263 KB). Use it on its own, or drop
  it into a Bootstrap 4, 5 or 6 project and it looks the same. The collapsible sections open and
  close without Bootstrap's JavaScript. The drop-down menus work without Bootstrap's JavaScript,
  including keyboard navigation."* It is the
  `## Website Menus (20)` section's **sixteenth** entry, at **line 3088** of `TEMPLATES.md`; the
  slug `website-menu-16` appears exactly **once** in `TEMPLATES.md` and in **no** spec on `main`
  before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-16/` returns **HTTP 404** (`Not
  Found`) — like its `-01`…`-15` siblings, the *Website Menus* family does **not** live under the
  slug-only theme path; do not read that 404 as a dead preview. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-16/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **6,506 B**, `<title>Website menu 06</title>`, sha256
  `8c3d57e5ad5f7ab2f83bb204d352a09b722cfc68864bed74b251173033a6fdc5`, verified 2026-10-12) — the
  URL the preview host's catalog index records for this slug. Its two assets —
  `css/style.css?v=b66eaf1a` (**22,999 B**, `text/css`, sha256
  `b73073512e1077a158b0a3c7e1ff206283b4b9a94183c5d297a12c98be507266`) and
  `js/snippet.js?v=53830328` (**5,798 B**, `application/javascript`, sha256
  `19132f197304258379443b2895b2eba900363996a034858a992870d8da1c7c05`) — are **byte-identical**
  (same sha256, verified) to the copies in the snippet's own downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-16.zip` (**HTTP 200**,
  `application/zip`, **260,102 B**, sha256
  `7ee6418d7a9ad902720270ec875e5cc6d08fcc3b1e98e399331c025c0dbc1790`; ColorLib rounds this to
  "254 KB"), which ships `index.html` (**6,303 B**, sha256
  `f773a5b891e7548f66f6f9d4e33620838de78c72e5fa0867bd167ce263193828`), `css/style.css`,
  `js/snippet.js`, `README.md` (**1,264 B**), **no `images/` directory at all**, and **eight**
  Roboto woff2 files (100/300/400/700 × latin/latin-ext — **247,856 B = 95.3 %** of the archive).
  The `diff` between the live page and the archive `index.html` is **head-only** (the preview
  host's two `noindex` metas, a `cdnjs.cloudflare.com` `dns-prefetch`, `fetchpriority="high"`, and
  the cache-busting query strings) — the archive is the readable, un-versioned twin of the live
  preview. Both were read for this spec and the live render was cross-checked in a browser at
  1440, 1200, 992, 991, 768, 767 and 375 px (see Design reference).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-16.jpg
  (**HTTP 200**, served as **AVIF** despite the `.jpg` name, 7,158 B, 1200 × 972, sha256
  `119210f6549c7e8b41335ebc40200dec9b0a8d31bbb13c0638c216e6cf9ac137`, converted to PNG and
  inspected visually 2026-10-12). No screenshot-only fallback was needed — the live preview is the
  primary reference and the archive its readable twin. The screenshot is a browser-chrome mock of
  the rendered page: the centred heading **`Website menu #06`**, then the **dark full-bleed
  strip** carrying the phone number at the left and four **social tiles** at the right, then the
  **white bar** holding the two-line black wordmark **`PAPERMAG` / `MAGAZINE`**, the centred
  uppercase rows **`HOME`** (gold slab — the current one) · **`PAGE ▾`** · **`CATALOG`** ·
  **`BLOG`** · **`CONTACT`**, and the **white `Search` field with a magnifier** at the right end;
  the rest of the page is empty `#fafafa`. Note: in that mock the social tiles show glyphs because
  ColorLib's own page loads Font Awesome — the **standalone snippet does not**, so its tiles are
  blank squares (confirmed in the live render).
- **New name:** `binnacle` (apps/binnacle, `@free-react-templates/binnacle`) — a *binnacle* is the
  **housed stand that holds a ship's compass and its gimbals**, the fitting a helm is steered by,
  which suits this variant's **enclosed chrome bar that steers the page** and continues the
  family's nautical run: **menutree** (`-01`), **slidenav** (`-02`), **navpill** (`-03`),
  **menuribbon** (`-04`), **starboard** (`-05`), **larboard** (`-06`), **topdeck** (`-07`),
  **bowsprit** (`-08`), **gangway** (`-09`), **halyard** (`-10`), **ensign** (`-11`), **gunwale**
  (`-12`), **capstan** (`-13`), **windlass** (`-14`), **davit** (`-15`). Single lowercase word,
  kebab-safe (no hyphen needed). Verified 2026-10-12: `git grep -il binnacle origin/main` returns
  **zero** hits (so no app folder, spec, doc file or `TEMPLATES.md` name collides), and
  `https://colorlib.com/wp/template/binnacle/`, `https://preview.colorlib.com/theme/binnacle/` and
  `https://preview.colorlib.com/theme/bootstrap/binnacle/` all return **HTTP 404**, so it is not a
  ColorLib source name either. The source name "Website Menu V16", its `Papermag` / `Magazine`
  wordmark, its five row labels, its four dropdown item strings and its `Website menu #06`
  heading are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V16" (source slug `website-menu-16`,
  https://colorlib.com/wp/template/website-menu-16/), `datePublished` **2021-03-09**, rewritten in
  the 2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no Bootstrap files, no
  images** in the download. Design-wise this is the family's **"dark utility strip + white
  in-flow bar + centred gold-slab rows + search field"** variant and the family's **first with a
  dark top bar AND a search field together** (the `-07` sibling has a dark utility bar but no
  search field; the `-13` sibling has a search field but a transparent hairline strip). Its accent
  is the **gold `#f1bc31`** (also the sheet's own `a` colour), applied as a **full-height slab
  behind the hovered/current row**, as the hover fill of the social tiles and of the dropdown
  items. The bar is **in-flow and never sticky** (the sheet contains **zero** `sticky`/`fixed`
  declarations), the rows are **centred** inside it by an `auto` margin on the list, and the search
  field is ordered last. The page contains **only** the heading, the strip and the bar.
- **CSS namespace:** the sheet (**22,999 B**, **164** top-level rule blocks, **20** `@media`
  blocks, **4** `@font-face` blocks) is self-contained and `cl-`-prefixed for its utilities
  (`cl-container`, `cl-row`, `cl-col`, `cl-col-md-6`, `cl-text-center`, `cl-justify-content-between`,
  `cl-justify-content-end`, `cl-justify-content-center`, `cl-mb-0`, `cl-mb-5`, `cl-d-flex`,
  `cl-align-items-center`, `cl-order-lg-last`, `cl-pl-3`, `cl-m-auto`, `cl-sr-only`, `cl-icon`,
  `cl-navbar`, `cl-navbar-expand-lg`, `cl-navbar-brand`, `cl-navbar-nav`, `cl-nav-item`,
  `cl-nav-link`, `cl-navbar-toggler`, `cl-navbar-collapse`, `cl-collapse`, `cl-collapsing`,
  `cl-show`, `cl-dropdown`, `cl-dropdown-toggle`, `cl-dropdown-menu`, `cl-dropdown-item`,
  `cl-form-control`, `.fa`, plus the variant's own `ftco`-prefixed hooks) and is a hand-rolled
  Bootstrap-4-look-alike — **not** a framework skin. Its first ~64 lines are a
  `:where(html) … all: revert` reset so the snippet renders identically inside a Bootstrap host
  page, then a `*{box-sizing:border-box}` normalize, the framework base (`.cl-container` tiers,
  `.cl-navbar*`, `.cl-collapse*`, the `.cl-dropdown*` family, `@media print` incl. `@page{size:a3}`,
  the Bootstrap palette), the `@font-face` block, and then the ~230-line custom block (`body`,
  `a`, `h2`, `.ftco-section`, `.heading-section`, `.wrap`, `.social-media`, `.searchform`,
  `.ftco-navbar-light`, `.cl-navbar-brand`, `.cl-navbar-nav`, `.cl-nav-link`, the
  `.cl-dropdown-menu` restyle, `.cl-navbar-toggler`, and a final `.cl-form-control` override).
  It is **4.4 kB larger** than the `-15` sibling's 18,643 B because this variant ships the search
  field (`searchform` ×8, `form-control` ×10) **and** the dropdown family (**25** `dropdown`
  occurrences) **and** the social row (`social-media`, 5 occurrences).
- **HTML structure (live preview, 6,506 B — archive twin 6,303 B):** document order is exactly —
  (1) `section.ftco-section` (the whole page lives inside it, `padding:7em 0`), carrying
  `div.cl-container` › `div.cl-row.cl-justify-content-center` ›
  `div.cl-col-md-6.cl-text-center.cl-mb-5` › `h2.heading-section` reading **`Website menu #06`**,
  (2) inside the same section a **`div.wrap`** (the dark strip) › `div.cl-container` ›
  `div.cl-row.cl-justify-content-between` with **two** `div.cl-col`s — the phone `p.phone.cl-mb-0`
  and, in a `cl-col.cl-d-flex.cl-justify-content-end`, a `div.social-media` › `p.cl-mb-0.cl-d-flex`
  with four anchors, (3) inside the same section
  `nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.cl-navbar-dark.ftco_navbar.ftco-navbar-light.cl-bg-dark`
  › `div.cl-container` with **four** children in this order — the brand, the `form.searchform`, the
  toggler `button`, the collapsible `div`, (4) `script`. In detail:
  - **`a.cl-navbar-brand[href="index.html"]`** reading **`Papermag <span>Magazine</span>`** — the
    **first** child of the bar's container and the only anchor on the page with a real destination;
  - **`form.searchform.order-sm-start.cl-order-lg-last[action="#"]`** ›
    `div.cl-form-group.cl-d-flex` › `input.cl-form-control.cl-pl-3[type="text"][placeholder="Search"]`
    + `button.cl-form-control.search[type="submit"]` › `span.fa.fa-search` › an inline **SVG**
    magnifier (`viewBox="0 0 1664 1792"`, wrapped in `<g transform="translate(0,1536) scale(1,-1)">`,
    `class="cl-icon"`, `style="vertical-align:-0.1429em"`, `aria-hidden="true"`,
    `focusable="false"`) — **second in DOM, last on screen** at ≥992 px via `order:13`;
  - **`button.cl-navbar-toggler[type="button"][data-toggle="collapse"][data-target="#ftco-nav"]
    [aria-controls="ftco-nav"][aria-expanded="false"][aria-label="Toggle navigation"]`** ›
    `span.fa.fa-bars` › an inline **SVG** 3-bar glyph (`viewBox="0 0 1536 1792"`, same
    `<g transform>` wrap) plus the literal text **`Menu`** — **third in DOM** (after the search
    form, unlike the `-14`/`-15` siblings that put a social/search block between brand and
    toggler);
  - **`div#ftco-nav.cl-collapse.cl-navbar-collapse`** › `ul.cl-navbar-nav.cl-m-auto` with **five
    `li.cl-nav-item`** in source order: **Home** (`cl-active`), **Page**
    (`li.cl-nav-item.cl-dropdown`), **Catalog**, **Blog**, **Contact**;
  - **the dropdown (the fourth row is the third `li`):**
    `a.cl-nav-link.cl-dropdown-toggle[href="#"][id="dropdown04"][data-toggle="dropdown"]
    [aria-haspopup="true"][aria-expanded="false"]` reading **`Page`** ›
    `div.cl-dropdown-menu[aria-labelledby="dropdown04"]` with **four** `a.cl-dropdown-item` —
    *Page 1*, *Page 2*, *Page 3*, *Page 4*. Trigger and all four items are dead `href="#"`.
  - **Anchors:** the live page holds **15** anchors — the wordmark's real `index.html` plus **14**
    dead `href="#"` (the phone link + four social tiles + five rows + four dropdown items). There
    is no second page to probe; the recreation must materialise all **fourteen** as real
    destinations.
- **Measurements (live preview, Chromium, DPR 1, read 2026-10-12; the sheet was fetched by curl
  **and** by the browser and the two copies are byte-identical, sha256 `b7307351…`, so every token
  below is confirmed by the source CSS, and every geometry figure was **cross-checked against the
  rendered pixels** of 1440 px and 375 px screenshots. Note the standing caveats for this family:
  a `getComputedStyle` read taken right after a CDP `Emulation.setDeviceMetricsOverride` can
  return a **stale pre-override value** (re-load the page after the override, and treat screenshot
  pixels as geometry authority), in-page reads of a `::before` need the pseudo-element argument
  (reading the element itself returns its transparent background), and a backgrounded tab
  (`document.hidden === true`) freezes the collapse transition — cite class/`aria` state as the
  evidence there.)**
  - **`h2`:** 28 px / 400 / `line-height:1.5` (42 px) / `#000` / centred (`.cl-text-center`),
    `margin-bottom:0.5rem` (8 px) + `.cl-mb-5` **48 px**; the `cl-col-md-6` column is
    `flex:0 0 50%; max-width:50%` at ≥768 px (measured **570 px** at 1440/1200 px, **480 px** at
    992, 100 % below); measured **540 × 42 at `x = 450, y = 112`** at 1440 px.
  - **Heading band:** `section.ftco-section{padding:7em 0}` = **112 px** top/bottom over the
    page's **`#fafafa`**, and the section has **no horizontal padding**, which is why the strip is
    full-bleed → **112 + 42 + 8 + 48 = 210 px** to the strip's top edge at every width (measured
    `h2.y = 112, h = 42`, `.wrap.y = 210` at 1440 px and at 375 px).
  - **The dark strip (`div.wrap`):** `background:#202020`, **no padding of its own**, `display:
    block`, `position:static`; measured **1440 × 34 at `y = 210`** at 1440 px (full viewport width
    — `x = 0 → 1440`, because the section above it has no gutters). Its **height is set by the
    social tiles** (34 px), not by the phone line (28.8 px = 16 × 1.8). Inside it:
    `div.cl-container` (**1140 px** at 1440, `x = 150`) › `div.cl-row.cl-justify-content-between`
    (`margin:0 -15px`, **34 px** tall) › two `div.cl-col`s (`padding:0 15px`).
  - **Phone block (`p.phone.cl-mb-0`):** `font-size:16px`, `color:gray` (= **`#808080`**, inherited
    from `body`), `margin-bottom:0`; measured **540 × 28.8 at `x = 165`**. Its inline
    `span.fa.fa-phone` › **SVG** glyph is **12.56 × 16**, `fill:currentColor` → inherits the
    paragraph's **`#808080`** (a source quirk: the **icon is grey while the number is white** —
    measured `fill: rgb(128,128,128)`), `vertical-align:-2.2864px`. The number itself,
    `a[href="#"]` inside `p.phone`, is **`#fff` at `12 px`** (`line-height:21.6px`), measured
    **73.8 × 14 at `x = 182`**.
  - **Social tiles (`div.social-media` › `p.cl-mb-0.cl-d-flex` › four `a.cl-d-flex
    .cl-align-items-center.cl-justify-content-center`):** each anchor is **34 × 34**,
    `background:#4d4d4d`, **`border-radius:0`** (squares — the family's other social rows use
    circles), `display:flex` with the glyph centred, **`margin-right:1px`**, `transition:.3s all
    ease`, hover → **`background:#f1bc31`**; measured at **`x = 1135, 1170, 1205, 1240` (34 px +
    1 px gaps)** at 1440 px, the group **140 × 34** ending flush with the container's content right
    edge (**1275**). **The glyphs do not render:** the sheet declares **no** `.fa-*` font rules and
    ships **no** icon font, and the markup puts only an `<i class="cl-sr-only">Facebook</i>`-style
    label inside each `span.fa` — measured **0 × 0**. The source therefore shows **four blank grey
    squares**; the recreation must supply real inline-SVG brand marks (delta).
  - **The bar (`nav.ftco-navbar-light`):** **`background:#fff !important`**, `z-index:3`,
    **`padding:0`**, `box-shadow:0px 5px 20px -17px rgba(0,0,0,0.34)`, `position:relative`
    (**not sticky** — the sheet contains **zero** `sticky`/`fixed`). Measured **1440 × 83.8 at
    `y = 244`**: the bar is **full-bleed** while its `div.cl-container` is the standard tier
    (**1140 / 960 / 720 / 540 px** at 1200 / 992 / 768 / 576, `padding:0 15px`, `flex-wrap:nowrap`
    at ≥992 px). Laid out left→right at 1440 px: the wordmark (**114.1 × 42 at `x = 165`**), the
    collapsible `div#ftco-nav` (**722.9 px at `x = 295.1`**, `flex-basis:auto; flex-grow:1;
    align-items:center`), the search form (**257 × 46 at `x = 1018 → 1275`**, `order:13`). The
    `-07`/`-11` siblings' CTA and the `-14`/`-15` card treatment are **absent here**: the bar is a
    plain white in-flow band and carries **no** `border-radius` and **no** hairline rules.
  - **Wordmark (`a.cl-navbar-brand`, two-line lockup):** own-brand text, **`font-size:20px`**,
    `font-weight:700`, `text-transform:uppercase`, `line-height:20px` (`line-height:1` override),
    `color:#000`, `padding:5px 0`, `margin-right:1rem` (16 px), `display:inline-block`,
    `white-space:nowrap`; its `span` (the second line) is **`display:block`, `12px`, `font-weight:
    500`, `#000`**; measured **114.1 × 42** (20 + 12 + 10 px padding) inside the 83.8 px bar, with
    the second line at **`y = 289.9`**. Its colour is identical at rest and on hover
    (`.cl-navbar-brand:hover,:focus{color:#000}`) → the recreation adds a hover affordance (delta).
    Below `767.98px` the brand takes **`margin-bottom:20px`**.
  - **Rows (`ul.cl-navbar-nav.cl-m-auto`):** `display:flex; flex-direction:row` at ≥992 px,
    **centred by `cl-m-auto` → `margin:auto !important`** (resolved to **132.734 px** left and
    right at 1440 px); measured **457.4 × 83.8 at `x = 427.8 → 885.2`**. Each
    `.cl-nav-item > .cl-nav-link` is **`font-size:11px`**, `font-weight:500`,
    **`text-transform:uppercase`**, **`letter-spacing:2px`**, **`padding:2rem 20px`**
    (**32px 20px**, → **83.8 px** tall — these rows *set* the bar's height), `color:#4d4d4d`,
    `position:relative`, `opacity:1 !important`, `line-height:19.8px`. Item widths measured at
    1440 px: **Home 81** (`cl-active`), **Page 86.6** (the caret adds 8.8 px), **Catalog 104.9**,
    **Blog 78.6**, **Contact 106.4**.
  - **The gold slab (`> .cl-nav-link:before`) — this variant's signature:** a `content:""`
    pseudo-element at `width:100%; height:100%; bottom:0; left:0`, `background-color:#f1bc31`,
    `z-index:-1`, `visibility:hidden`, `transform:scaleX(0)`,
    `transition:all .2s ease-in-out 0s`; on `:hover` it becomes `visibility:visible;
    transform:scaleX(1)` **and the label turns `#fff`**. The **current** row
    (`.cl-nav-item.cl-active > a`) wears the same slab **permanently** (`visibility:visible;
    background-color:#f1bc31; transform:scaleX(1)`) with a **white** label — verified in the live
    render (`::before` computed `rgb(241,188,49)`, `matrix(1,0,0,1,0,0)` on Home vs `matrix(0,…)`
    + `hidden` on the four siblings) and in the 1440 px screenshot (gold block, white `HOME`).
    Note there is **no** underline and **no** border — the slab is the only row treatment.
  - **Dropdown (`li.cl-nav-item.cl-dropdown` → `.cl-dropdown-menu`):** plain white surface,
    `border:none`, `background:#fff`, **`border-radius:4px`**,
    `box-shadow:0px 10px 34px -20px rgba(0,0,0,0.41)`, from the framework base
    `position:absolute; top:100%; left:0; z-index:1000; min-width:10rem (160px); padding:.5rem 0;
    margin:.125rem 0 0; font-size:1rem; color:#212529`. Measured open at 1440 px:
    **160 × 134.4 at `x = 508.8, y = 329.8`** (flush under the trigger's left edge: 244 + 83.8 +
    2). Items `.cl-dropdown-item`: **`font-size:12px`**, `color:#000`, `padding:0.25rem 1.5rem`
    (**4px 24px** → **29.6 px** rows), `line-height:21.6px`; `:hover,:focus` →
    **`background:#f1bc31; color:#fff`**. The Bootstrap `#007bff`/`#0056b3`/`#f8f9fa`/`#16181b`
    palette declared in the framework base (`.cl-dropdown-item.cl-active`, `:active`, `.disabled`)
    never applies to this markup.
  - **Dropdown trigger affordance:** unlike the `-15` sibling, the caret **is** rendered —
    `.cl-dropdown-toggle::after` is the framework's `border-top:.3em solid` triangle: measured
    **6 × 3 px**, `border-top-width:3px`, `border-top-color:rgb(77,77,77)` (currentColor),
    `margin-left:2.805px` (`.255em`), `vertical-align:2.805px`, `display:inline-block` — visible
    as a small dark ▾ after `PAGE` in both the screenshot and the live render. It is coloured
    **currentColor**, so it follows the trigger's label: `#4d4d4d` at rest and **`#fff`** once the
    row is hovered (`:hover{color:#fff}` on the trigger) — the recreation should keep the caret
    tethered to the label colour.
  - **Dropdown behaviour (`js/snippet.js`, 5,798 B):** three independent behaviours —
    (a) **hover**: `mouseenter`/`mouseleave` on every `nav .cl-dropdown` toggles `cl-show` on the
    `li`, on its `.cl-dropdown-menu` **and** sets `aria-expanded` on the trigger;
    (b) **collapse** (Bootstrap-4-alike): the toggler's `click` runs a `cl-collapsing` →
    height-animated → `cl-show` cycle (`transition:height .35s ease`, removed under
    `prefers-reduced-motion: reduce`) and keeps `aria-expanded` in sync;
    (c) **dropdown data-API**: `click` on the trigger opens/closes it (with an
    overflow guard that flips `left:auto; right:0` if the menu would exceed the viewport),
    `ArrowDown` on the trigger opens and focuses the first item, `ArrowDown`/`ArrowUp` rove focus
    inside the menu, `Escape` closes and refocuses the trigger, and an outside click closes it.
    All three must be reproduced (see Requirements).
  - **Search form (`form.searchform.order-sm-start.cl-order-lg-last`):** `height:46px`,
    `border:1px solid rgba(0,0,0,0.05)`, `border-radius:5px`, `overflow:hidden`, `margin:0`,
    `order:13` at ≥992 px (`cl-order-lg-last`; the sibling class `order-sm-start` is **dead markup**
    — the sheet declares **no** `.order-sm-start`, `cl-order-sm-start` or `.cl-order-sm-start`
    rule). Inside it: **`input.cl-form-control.cl-pl-3`** — final computed
    **`width:calc(100% - 46px)` = 209 px**, `height:46px` (**the sheet's last rule forces
    `46px !important`** over the framework's `calc(1.5em + .75rem + 2px)` = 38 px), `border:none`,
    `background:#fff !important`, `color:rgba(0,0,0,0.7) !important`, `font-size:14px`,
    `padding:6px 12px 6px 16px`; and **`button.cl-form-control.search[type=submit]`** —
    **46 × 46**, `background:#fff`, `border:none`, `color:rgba(0,0,0,0.7)` with the inline
    magnifier SVG **16.7 × 18** (`.searchform .search span{font-size:18px}` with
    `.cl-icon{height:1em;width:auto;fill:currentColor}`), positioned at
    **`x = 1228 → 1274, y = 263.9`**. The whole field spans **257 × 46 at `x = 1018`** — i.e. flush
    with the container's content right edge at every tier. There is **no** focus ring in the source
    for the text input beyond `border-color:#000` (`.cl-form-control:focus,:active{border-color:
    #000}` — the input's own border is `none`, so nothing visibly changes) — restore a real focus
    ring (delta). The field is **never hidden** at any width.
  - **Toggler (`button.cl-navbar-toggler`):** `border:none`,
    **`color:rgba(0,0,0,0.5) !important`** (dark-on-white — the `-14`/`-15` siblings are
    white-on-black), `cursor:pointer`, `padding:4px 0 4px 12px` (the variant rule zeroes
    `padding-right`), `text-transform:uppercase`, `font-size:16px`, `letter-spacing:.1em`, focus
    `outline:none !important`; content = the inline three-bar SVG (**13.7 × 16** via
    `.cl-icon{height:1em}`) + the word **`Menu`**. Measured **85.3 × 24.7**, `display:none` at
    ≥992 px.

## Breakpoint behaviour (values measured on the live preview and derived from its sheet)

| Width | Strip (`.wrap`) | Bar (`nav.ftco-navbar-light`) | Bar height | Layout of the chrome line | Rows | Search field |
| --- | --- | --- | --- | --- | --- | --- |
| 375 | 375 × 34 @ `y = 210` | 375, `padding:10px 15px` | **128** (two wrapped lines) | brand (42 + 20 margin) / then **search + toggler** on line 2 (257 + 85.3 = 342.3 in a 345 content box) | hidden; panel rows **49.6** | **257 × 46** at `x = 15`, line 2 |
| 767 | 767 × 34 | `padding:10px 15px` | **82** | one line: brand (42 + 20 margin) + search + toggler | hidden; panel rows 49.6 (`border-bottom`) | 257 × 46 at `x = 277.4` |
| 768 | 768 × 34 | `padding:10px 15px` | **66** | one line: brand + search + toggler (no brand bottom margin) | hidden | 257 × 46 at `x = 277.9` |
| 991 | 991 × 34 | `padding:10px 15px` | **66** | one line inside a 720 px container at `x = 135.5` | hidden | 257 × 46 at `x = 389.4` |
| 992 | 992 × 34 | `padding:0` + shadow | **83.8** | brand + centred list + search (order 13); toggler hidden | `flex` row, centred, 542.9 × 83.8 | 257 × 46 at `x = 704` |
| 1200 | 1200 × 34 | `padding:0` | **83.8** | container 1140 at `x = 30` | centred, `margin:auto` | 257 × 46 at `x = 898` |
| 1440 | 1440 × 34 | `padding:0` | **83.8** | container 1140 at `x = 150`; brand `x = 165`, list `x = 427.8 → 885.2`, search `x = 1018 → 1275` | 457.4 × 83.8, centred | 257 × 46 at `x = 1018` |

The strip sits at **`y = 210`** and the bar at **`y = 244`** at every width; the only change at
`992 px` is the bar's padding/shadow treatment, the appearance of the toggler and the
disappearance of the row list (all from the single `@media (max-width:991.98px)` block) plus the
`.cl-navbar-expand-lg > .cl-container{padding:0}` rule that strips the container's gutters below it.
**Below 992 px the bar stays WHITE** (unlike the `-11`/`-14`/`-15` siblings, whose bars turn
`#000`), and the mobile chrome **does wrap**: at 375 px the brand keeps `margin-bottom:20px` and the
search field + toggler drop to a second line, making the bar **128 px** (the `-14` sibling's 91 px
wrap and the `-15` sibling's 66 px no-wrap are both different shapes).

## Type and colour summary

- `body{font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
  font-weight:normal; background:#fafafa; color:gray}` (`gray` = **`#808080`**). The framework base
  declares a **system** stack and `background-color:#fff` first, but the custom block's `body` rule
  comes later and wins — the page is **`#fafafa`**, and the default ink is **grey `#808080`**,
  which is why the phone glyph renders grey.
- `a{transition:.3s all ease; color:#f1bc31}` — **inline links are the gold accent**; the custom
  block also kills `text-decoration` and outlines (`a:hover,a:focus{text-decoration:none
  !important; outline:none !important; box-shadow:none}`) → restore hover/focus affordances (delta).
- `h2,.h2{line-height:1.5; font-family:"Poppins", Arial, sans-serif; font-weight:400; color:#000}`
  + `.heading-section{font-size:28px; color:#000}` (28 px wins over the framework's `2rem` = 32 px;
  the framework's `font-weight:500`/`line-height:1.2` for `h2` are overridden by the custom block).
- **No webfont is loaded at all.** The live page's only `<link>` is the sheet itself (plus a
  `cdnjs.cloudflare.com` `dns-prefetch` that is never used): there is **no Google Fonts request**
  and **no `@font-face` for Poppins** anywhere, so `"Poppins", Arial, sans-serif` resolves to
  **Arial** in the source. The **eight** self-hosted **Roboto** woff2 files — **247,856 B = 95.3 %
  of the 260,102 B download** — are dead twice over: only **400/700** are even declared
  (`roboto-100-*` / `roboto-300-*` are shipped but never declared) and no rule in the sheet asks
  for Roboto outside the base system stack. The four latin files are **byte-identical to each
  other** (sha256 `0a44e0bb…`) and so are the four latin-ext files (`cdd53dc5…`) — two distinct
  payloads shipped four times each.
- Token table: accent gold **`#f1bc31`** (hover/current row slab, social-tile hover fill, dropdown
  item hover fill, the sheet's own `a` colour) · page **`#fafafa`** · strip **`#202020`** ·
  social tile **`#4d4d4d`** (hover gold) · bar **`#fff`** (desktop **and** mobile) · wordmark
  **`#000`** · rows **`#4d4d4d`** (hover/current **`#fff`** on the slab; mobile current
  **`#000`**) · heading **`#000`** · body ink **`gray`/`#808080`** · phone number **`#fff`** (its
  glyph grey) · search surface **`#fff`** with placeholder/text **`rgba(0,0,0,.7)`** · dropdown
  surface **`#fff`**, item ink **`#000`** (hover ink `#fff`) · toggler **`rgba(0,0,0,.5)`** ·
  radii: search form **`5px`**, dropdown **`4px`**, everything else square (`border-radius:0` on
  the tiles, the rows and the input) · bar shadow **`0 5px 20px -17px rgba(0,0,0,.34)`** ·
  dropdown shadow **`0 10px 34px -20px rgba(0,0,0,.41)`** · row transition **`.2s ease-in-out`** ·
  link transition **`.3s all ease`**.

## Fidelity pitfalls (things that will bite an implementer)

1. **The accent is gold `#f1bc31`** — not the `-15` sibling's amber `#fec771`, not the `-14`
   sibling's pink `#fc7fb2`, not the `-13` sibling's teal. Copying a sibling's palette is the
   single easiest way to break this template.
2. **The row treatment is a full-height `:before` slab, not a colour change.** It is
   `width:100%; height:100%; bottom:0; left:0; z-index:-1` with `visibility:hidden;
   transform:scaleX(0)` and `.2s ease-in-out`, wiped to `scaleX(1)` on hover **with the label
   turning white**; the **current** row wears it permanently. No underline, no border, no
   background on the link itself.
3. **The rows are `11 px` / uppercase / `letter-spacing:2px` at `32px 20px` padding → 83.8 px,
   and they set the bar's height.** Do not import a sibling's `13 px`/`14 px` row type or its
   61.8 px row height.
4. **The list is CENTRED by an `auto` margin** (`cl-m-auto` → `margin:auto !important`, resolved
   to 132.734 px per side at 1440 px), not pushed right and not spaced by `justify-content`. The
   `-10`/`-14`/`-15` siblings' `margin-left:auto` right-alignment is the *opposite* behaviour.
5. **The search field is ordered LAST with `order:13`** while it sits **second in the DOM** — a
   DOM-order-only React port puts it between the wordmark and the rows and breaks the layout.
6. **The bar is in-flow, full-bleed, white and NOT sticky** (zero `sticky`/`fixed` in the sheet),
   and the mobile bar stays **white** — no `#000` mobile state here.
7. **The mobile chrome WRAPS**: at 375 px the brand keeps its `margin-bottom:20px` and the search
   field plus the toggler drop to a second line → the bar is **128 px**; at 768–991 px it is
   **66 px**; at 767 px it is **82 px** (the brand's 20 px bottom margin inside a single line).
   Three different heights for one media query — measure, do not assume.
8. **The dropdown is expanded permanently below 992 px** (`display:block !important`,
   `position:static`, `background:#fff`, `box-shadow:none`, `border-radius:4px` kept) — it is
   **not** a collapsed submenu in the panel, and its four items are part of the panel's height.
9. **The caret DOES render here** (unlike the `-15` sibling, which hides `::after`): a
   `6 × 3 px` currentColor border-triangle at `margin-left:2.805px`. Recreate it or document the
   substitute.
10. **The social glyphs are dead**: no icon font ships, no `.fa-*` rule exists, and each span holds
    only an `sr-only` label → the source renders **four blank grey squares**. Real
    **inline-SVG brand marks** for the socials (lucide-react exports **no** brand icons) are a
    **delta**, and the accessible names must stay (`aria-label` on each tile).
11. **The phone glyph is grey `#808080` while the phone number is white** — a currentColor
    inheritance accident from `body{color:gray}`. Either reproduce it or normalise both to white
    and record the choice.
12. **The search input has no visible focus state** in the source (`border:none` + `:focus
    {border-color:#000}` changes nothing) and every link is stripped of its outline — restore a
    `focus-visible` ring on rows, tiles, the input, the search button and the toggler (delta).
13. **`order-sm-start` is dead markup** (no such rule in the sheet) — do not invent a small-screen
    order for the search form; the source's own wrap behaviour is what produces the 375 px layout.
14. **Nothing is sticky and the source page is shorter than the viewport** — it is **439.8 px**
    tall at desktop widths, so `documentElement.scrollHeight === clientHeight` (900 = 900 at
    1440 × 900) and `scrollWidth === innerWidth`: the recreation adds real content below the bar
    and the bar must scroll away with it.
15. **No webfont ships**, so the source renders Arial: add one Google Fonts `<link>` for Poppins
    (delta) rather than copying eight dead Roboto woff2 files.
16. **Dead code to drop:** the `:where(html) … all: revert` reset, the `@media print` block (incl.
    `@page{size:a3}`), the Bootstrap palette (`#007bff`/`#0056b3`/`#6c757d`/`#212529`/`#f8f9fa`/
    `#16181b`), the base system `Roboto` body stack, the `cl-bg-dark` / `cl-navbar-dark` colour
    layers the custom block's `!important` rules beat, the unused `.fade` and `.cl-navbar-dark
    .cl-navbar-nav .cl-nav-link.disabled` rules, the `order-sm-start` class, and all eight Roboto
    woff2 files.

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the shipped source bundle, not sampled off the screenshot:
https://preview.colorlib.com/downloads/free/website-menu-16.zip (HTTP 200, 260,102 B, sha256 `7ee6418d7a9a…`, fetched 2026-10-23) — the free source bundle, because `/theme/` returns 404 for this template; design stylesheet(s) `css/style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#f1bc31` | 7 declarations — `.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link:before`, `.social-media p a:hover` |
| Other chromatic values | `#80bdff` (1) | secondary hues in the same sheet |
| Surface | `#ffffff` | 21 declarations — `.cl-form-control`, `.cl-form-control:focus` |
| Ink / dark surface | `#000000` | 8 declarations — `.ftco-navbar-light .cl-navbar-brand`, `.heading-section` |
| Typeface | `Poppins` (2 rules — `body`) | `font-family` declarations in the design sheet |
| Radii | `0.25rem`, `4px`, `5px` | `0.25rem` (`.cl-dropdown-menu`); `4px` (`.ftco-navbar-light .cl-navbar-nav > .cl-nav-item .cl-dropdown-menu`); `5px` (`.searchform`) |

Palette in order of use: `#ffffff` ×21, `#000000` ×8, `#f1bc31` ×7, `#6c757d` ×6, `#212529` ×3, `#007bff` ×2, `#495057` ×2, `#4d4d4d` ×2.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Feature: Page frame and heading band

#### Scenario: Band spacing and the strip's landing point

- **Given** a viewport ≥ 768 px
- **When** the page frame is measured
- **Then** the page background is **`#fafafa`**, the whole page lives in one
  `section.ftco-section` with `padding:112px 0` and **no horizontal padding**
- **And** the heading is **28 px / 400 / `line-height:1.5` (42 px) / `#000`**, centred in a column
  that is `50%` at ≥768 px and `100%` below, with an `8px` margin-bottom plus a `48px` block margin
- **And** the dark strip's top edge lands exactly **210 px** below the page top at every width
  (112 + 42 + 8 + 48) and the bar follows it at **244 px**

#### Scenario: The heading is own copy

- **Given** the app renders
- **Then** the string `Website menu #06` never renders
- **And** the app contains **zero** `colorlib`/`website-menu-16` strings

### Feature: Dark utility strip

#### Scenario: Strip geometry and surface

- **Given** a viewport ≥ 992 px
- **When** the strip is measured
- **Then** it is **full-bleed** (viewport width), **34 px** tall at `y = 210`, with
  `background:#202020`, **no padding of its own** and `position:static`
- **And** its height comes from the **`34 px` social tiles**, not from the 28.8 px phone line
- **And** its inner container is the standard tier (**1140 px** at 1440, `padding:0 15px`) with the
  phone at the left and the tiles flush with the content right edge

#### Scenario: Phone link

- **Then** the phone block is own copy at `12 px` / **`#fff`** with a leading glyph, `margin-bottom:0`
- **And** the glyph is an icon from `lucide-react` (the source's inline SVG path must not be
  copied) and it is either grey `#808080` like the source or normalised to `#fff` — the choice is
  recorded as a delta
- **And** the anchor resolves to a real destination (never `href="#"`)

#### Scenario: Social tiles

- **Then** **four** tiles render at **34 × 34**, `background:#4d4d4d`, **`border-radius:0`**
  (squares), `display:flex` with the glyph centred, **`1 px`** apart, hovering →
  `background:#f1bc31`
- **And** each tile shows a real `lucide-react` glyph (the source ships no icon font and renders
  blank squares — a documented delta) with an accessible name (`sr-only` label or `aria-label`)
- **And** each tile is a real destination with a visible `focus-visible` ring

### Feature: White in-flow bar

#### Scenario: Desktop chrome and container tiers

- **Given** a viewport ≥ 992 px
- **When** the bar is measured
- **Then** its background is `rgb(255,255,255)`, it is full-bleed, `padding:0`, `z-index:3`,
  **≈ 83.8 px** tall at `y = 244`, with `box-shadow:0 5px 20px -17px rgba(0,0,0,0.34)`
- **And** it has **no** `border-radius` and **no** hairline borders, and it is `position:relative`
  (**never** `sticky`/`fixed`), so it scrolls away above the app's real content
- **And** its container is **1140 / 960 / 720 / 540 px** at 1200 / 992 / 768 / 576 with `15 px`
  gutters and `flex-wrap:nowrap`, laid out as wordmark → centred list → search field
  (measured: brand `x = 165`, list `x = 427.8 → 885.2`, search `x = 1018 → 1275` at 1440 px)

#### Scenario: No sticky behaviour

- **Given** the app rendered with real content below the bar
- **When** the page is scrolled
- **Then** the strip and the bar leave the viewport (a negative `y`) and the app carries no
  `sticky`/`fixed` header rule

### Feature: Two-line wordmark

#### Scenario: Lockup type and colour

- **Given** any width ≥ 992 px
- **When** the wordmark is measured
- **Then** it is own copy in **two lines** — a first line at **20 px / 700 / uppercase /
  `line-height:1` / `#000`** with `padding:5px 0` and `margin-right:16px`, and a second line at
  **12 px / 500 / `#000`** in a `display:block` span
- **And** it measures ≈ **114 × 42** inside the 83.8 px bar and links to the top of the page with a
  visible focus ring
- **And** it never reuses the source's `Papermag` / `Magazine` strings

#### Scenario: Hover affordance

- **Then** the wordmark gains a visible hover treatment (a delta: the source's `:hover` colour is
  identical to its resting colour)

### Feature: Centred five-row list and the gold slab

#### Scenario: Rows, order and centring

- **Given** a viewport ≥ 992 px
- **Then** **five** rows render in source order — the current one, then the dropdown row, then the
  three plain rows — inside one list **centred by `margin:auto`** (≈ **132.7 px** per side at
  1440 px), measuring ≈ **457.4 × 83.8**
- **And** below `992 px` the list is not shown as rows until the toggler is activated

#### Scenario: Row tokens

- **Given** a rendered row
- **Then** its link is **11 px / 500 / uppercase / `letter-spacing:2px` / `#4d4d4d`** with
  `padding:32px 20px` (**83.8 px** tall, which sets the bar's height) and `line-height:19.8px`
- **And** the current row carries `aria-current="page"`

#### Scenario: The gold hover slab

- **Then** every row carries a full-height `::before` (`width:100%; height:100%; bottom:0; left:0;
  z-index:-1`) filled **`#f1bc31`**, hidden at rest with `transform:scaleX(0)` and a
  **`.2s ease-in-out`** transition
- **And** hovering the row reveals the slab (`scaleX(1)`) **and** turns its label **`#fff`**
- **And** the current row wears the slab **permanently** at rest with a white label on desktop, and
  **no** slab (`display:none`) with a **`#000`** label below `992 px`
- **And** there is **no** underline, border or background on the link itself

#### Scenario: Focus affordance

- **Then** every row shows a visible `focus-visible` ring (a delta: the source sets
  `outline:none !important`)

### Feature: Page dropdown

#### Scenario: Panel surface and geometry

- **Given** the `Page` row is hovered or activated at ≥992 px
- **Then** a white panel opens absolutely under the trigger (`top:100%; left:0`, flush at
  `x = 508.8, y = 329.8`), `min-width:160px`, `padding:8px 0`, `margin:2px 0 0`, **`border:none`**,
  `border-radius:4px`, `box-shadow:0 10px 34px -20px rgba(0,0,0,0.41)`, measured ≈ **160 × 134.4**
- **And** it holds **four** own-copy items at **12 px / `#000`** with `padding:4px 24px`
  (≈ 29.6 px rows), and a hovered/focused item takes `background:#f1bc31; color:#fff`
- **And** none of the source's placeholder strings (*Page 1*…*Page 4*) is reused
- **And** the trigger keeps a small currentColor caret (≈ **6 × 3 px** triangle, `margin-left:
  2.805px`) or a documented `lucide` chevron substitute

#### Scenario: Behaviour and keyboard support

- **Then** the menu opens on **hover and on click** and closes on outside click, on item activation
  and on `Escape`, with `Escape` returning focus to the trigger
- **And** `ArrowDown` on the trigger opens the menu and focuses the first item, and
  `ArrowDown`/`ArrowUp` move focus between items
- **And** the trigger exposes `aria-haspopup="true"`, `aria-expanded` and `aria-controls`
- **And** each of the four items is a real destination (never `href="#"`)

### Feature: Search field

#### Scenario: Field geometry and tokens

- **Given** any width
- **When** the search form is measured
- **Then** it is **46 px** tall, has `1px solid rgba(0,0,0,0.05)` and **`border-radius:5px`** with
  `overflow:hidden`, and measures ≈ **257 px** wide flush with the container's content right edge
- **And** it renders **last on screen** at ≥992 px (`order:13`) although it is **second in the DOM**
- **And** the text input is `calc(100% - 46px)` wide, **`46 px`** tall (the fixed height beats the
  framework's 38 px), `border:none`, `background:#fff`, text/placeholder `rgba(0,0,0,0.7)` at
  `14 px`, and the submit button is **46 × 46** white with a magnifier icon

#### Scenario: Never hidden, and accessible

- **Then** the field is visible at every width, including inside the wrapped mobile line
- **And** the input has a real label or `aria-label`, the submit button an accessible name, and
  both show a visible `focus-visible` ring (a delta: the source's focus rule changes nothing
  visible) while submitting never navigates away

### Feature: Mobile chrome and the in-flow panel

#### Scenario: Mobile bar heights

- **Given** a viewport < 992 px
- **Then** the bar is `rgb(255,255,255)` with `padding:10px 15px`, its container gutters are
  **zeroed** (`.cl-navbar-expand-lg > .cl-container{padding:0}`) and its height is **66 px** at
  768–991 px, **82 px** at 767 px (the brand's `margin-bottom:20px` inside one line) and **128 px**
  at 375 px (two lines: brand, then search + toggler)
- **And** the toggler (`☰ MENU`, `rgba(0,0,0,0.5)`, uppercase `16 px`, `letter-spacing:.1em`,
  measured ≈ **85.3 × 24.7**) is visible and **third in DOM** (after the brand and the search
  form), the rows are hidden until it is activated, and **no** horizontal overflow occurs
  (`scrollWidth === innerWidth`)

#### Scenario: The toggler and the panel

- **Given** the toggler is activated
- **Then** `aria-expanded` becomes `"true"` and the panel animates its height over
  **`0.35s ease`** (removed under `prefers-reduced-motion: reduce`)
- **And** it takes a **full-width in-flow line** below the chrome line (`flex-basis:100%`),
  measured **345 px** wide at 375 px with the list ≈ **394 px** tall
- **And** the five rows stack in a column at **`padding:14.4px 0`** (**49.6 px** each) with a
  `1px solid rgba(0,0,0,0.05)` bottom rule below `767.98px`, resting `#4d4d4d`, the current row
  **`#000`** with **no** slab, and `padding-bottom:10px` on the list

#### Scenario: The dropdown inside the panel

- **Then** the `Page` submenu renders **permanently expanded** in the panel
  (`display:block`), `position:static`, `background:#fff`, **no** shadow, keeping
  `border-radius:4px`, ≈ **345 × 134.4** at 375 px, with its four `12 px` items in flow
- **And** it is reachable and readable without hovering

### Feature: Materialised destinations

#### Scenario: No dead links

- **Then** the app contains **zero** `href="#"`; each of the five rows, the four dropdown items, the
  phone link and the four social tiles resolves to a real `id`/route

#### Scenario: Real content replaces the blank page

- **Then** sections of the source's *kinds* carry own copy — an intro block for the wordmark, a
  current-page block, blocks for the plain rows and the dropdown destinations, a contact block for
  the phone link and a social block for the tiles — each target with `scroll-margin-top` ≥ 88 px
  (the chrome is 34 + 83.8 px tall)
- **And** the page is taller than the viewport, so the non-sticky chrome genuinely scrolls away; any
  imagery (the source ships none) comes from
  `https://picsum.photos/seed/binnacle-<n>/<w>/<h>`
- **And** the search field either filters those sections or is documented as a non-submitting
  decorative field — never a dead form

### Feature: Footer and attribution

#### Scenario: Component Dock credit

- **Then** exactly one `https://www.componentdock.com/` link branded "Component Dock" (new tab,
  `rel="noreferrer"`) and a computed current year render in the footer — a documented delta, since
  the source has no footer

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/binnacle/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/binnacle/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `openspec/specs/template-binnacle/spec.md` present; `npm run spec:validate` green
- [x] `apps/binnacle` scaffolded from the simplest existing app; package
      `@free-react-templates/binnacle`; `"homepage": "https://binnacle.free.componentdock.com"`;
      `public/CNAME` = `binnacle.free.componentdock.com`; `vite.config.ts` keeps
      `injectUiSource()`
- [ ] `npm install` at repo root registers the workspace
      (`grep -c "free-react-templates/binnacle" package-lock.json`)
- [ ] Page frame: **`#fafafa`**, one `section` with `padding:112px 0`; heading
      **28 px / 400 / lh 1.5 / #000** centred with a `48 px` bottom margin → strip at
      **`y = 210`**, bar at **`y = 244`**
- [ ] Strip: full-bleed, **34 px**, `#202020`, `padding:0`, `position:static`; container **1140 px**
      with `15 px` gutters; phone `12 px` `#fff` at the left, tiles flush right at `x = 1275`
- [ ] Social tiles: **four**, **34 × 34**, `#4d4d4d`, **`border-radius:0`**, `1 px` gaps, hover
      `#f1bc31`, real `lucide-react` glyphs + accessible names (delta), real destinations
- [ ] Bar: `#fff`, full-bleed, `padding:0`, `z-index:3`, **83.8 px** at `y = 244`, shadow
      `0 5px 20px -17px rgba(0,0,0,0.34)`, **no** radius, **no** hairline, `position:relative`
      (**no** `sticky`/`fixed`); container tiers 1140/960/720/540
- [ ] Wordmark: own copy, two lines — `20 px`/`700`/uppercase/`#000` + `12 px`/`500`/`#000` span —
      ≈ **114 × 42**, `mr-4`, `py-[5px]`, hover affordance added (delta)
- [ ] Rows: **five** in source order, list **centred by `margin:auto`** (≈ 132.7 px per side at
      1440 px, ≈ 457.4 × 83.8), **11 px / 500 / uppercase / `letter-spacing:2px` / `#4d4d4d`**,
      `padding:32px 20px` (**83.8 px** rows), `aria-current="page"` on the current row
- [ ] Gold slab: `::before` full-height `#f1bc31`, hidden with `scaleX(0)` at rest,
      `.2s ease-in-out`, revealed on hover **with a white label**, worn permanently by the current
      row (white label) on desktop and `display:none` with a `#000` label below 992 px; **no**
      underline/border on rows
- [ ] Dropdown: white, `border:none`, `min-width:160px`, `padding:8px 0`, `margin:2px 0 0`,
      `border-radius:4px`, shadow `0 10px 34px -20px rgba(0,0,0,0.41)`, ≈ 160 × 134.4 flush under
      the trigger; **four** own-copy items `12 px`/`#000`/`padding:4px 24px`, hover
      `bg-[#f1bc31] text-white`; caret present (6 × 3 currentColor triangle) or documented
      substitute
- [ ] Dropdown behaviour: hover + click open, outside click / item activation / `Escape` close,
      `Escape` refocuses the trigger, `ArrowDown`/`ArrowUp` roving focus,
      `aria-haspopup`/`aria-expanded`/`aria-controls` set, all four items real destinations
- [ ] Search field: **46 px** tall, `border:1px solid rgba(0,0,0,0.05)`, **`border-radius:5px`**,
      ≈ **257 px** wide flush right, **last on screen at ≥992 px via `order:13`** (second in DOM),
      input `calc(100% - 46px)` / **46 px** / `border:none` / `#fff` / `rgba(0,0,0,0.7)` / `14 px`,
      submit **46 × 46** white with a magnifier icon, visible at every width, labelled with a
      visible `focus-visible` ring (delta)
- [ ] Mobile: bar **white**, `padding:10px 15px`, container gutters `0`, **66 px** at 768–991 px,
      **82 px** at 767 px, **128 px** at 375 px (search + toggler wrap to line 2); toggler
      **third in DOM**, `rgba(0,0,0,0.5)`, uppercase `16 px`, `letter-spacing:.1em`, visible focus
      ring; panel `flex-basis:100%`, height-animated **0.35s** (off under
      `prefers-reduced-motion: reduce`), rows `padding:14.4px 0` (**49.6 px**) with a
      `1px rgba(0,0,0,0.05)` bottom rule below 768 px, current row `#000` with no slab, list
      `padding-bottom:10px`; **dropdown permanently expanded** in the panel
      (`position:static`, no shadow, `4 px` radius); `scrollWidth === innerWidth` at 320–991 px
- [x] Zero `colorlib` / "Website Menu 16" / `website-menu-16` strings in `apps/binnacle` (comments
      included); none of the source's row labels, its `Papermag`/`Magazine` wordmark, its four
      placeholder item strings or its `Website menu #06` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead —
      247,856 B of the 260,102 B download, and 100/300 are not even declared), no inline SVG paths
      from the preview, no `cl-`/`ftco-` utility classes, no jQuery/Bootstrap, no Font Awesome
- [ ] Dead source code dropped: the `:where(html) … all: revert` reset, the `@media print` block
      (incl. `@page{size:a3}`), the Bootstrap palette, the base system `Roboto` body stack, the
      `cl-bg-dark`/`cl-navbar-dark` colour layers, the unused `.fade` and disabled-link rules, the
      `order-sm-start` class, and all Roboto woff2 files
- [ ] Documented deltas recorded in the PR: new name + own wordmark, own row labels and dropdown
      menu, the fourteen dead `href="#"` materialised, real glyphs (lucide phone/search + inline-SVG socials,
      magnifier, bars) instead of the inline SVG paths and the missing icon font, a real Google
      Fonts Poppins `<link>` instead of eight dead self-hosted Roboto files, restored hover/
      `focus-visible` affordances, `aria-current` on the current row, keyboard dropdown support,
      reduced-motion handling, a working search interaction, the blank filler page replaced with
      real content, and the added footer
- [ ] `scripts/verify-app.sh binnacle` green (typecheck + lint + knip + fallow + vitest 100 % +
      build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace; footer
      attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 16` item `[x]` with the live
      `https://binnacle.free.componentdock.com` URL + homepage and run `npm run readme:status`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
