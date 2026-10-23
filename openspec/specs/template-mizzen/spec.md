# Template: Mizzen (Website Menus)

## Purpose

Mizzen is the *Website Menus* family's **fluid chrome row — four social circles at the left, a centred
two-line wordmark and a red pill search field at the right — over a dark `#252525` bar whose rows
carry a `2 px` red underline that wipes in from the left.** A centred `28 px` heading sits on a
**`#fafafa`** page, and under it the chrome column is **full-bleed** (`div.cl-container-fluid`, no
`max-width`) with `48 px` side gutters from `768 px` up (`cl-px-md-5` = `3rem`). Its first child is a
`33.33 %` column holding the **social row**: four **`40 × 40` circles** (`1 px solid #e6e6e6`,
`border-radius:50%`, `4 px` apart, `display:flex` with the glyph centred) whose **glyphs do not
render** (no icon font ships — measure `0 × 0`). Its second child is a `66.67 %` column that is
**ordered last** (`cl-order-md-last` → `order:13`) and holds an inner row with the **centred two-line
wordmark** (`20 px`/`700` uppercase `#000` with `line-height:1.2` over a `12 px`/`500`
**`rgba(0,0,0,0.3)`** `display:block` span, measured **`147.4 × 48.4`**) and, at the right, the **red
pill search field** (**`300 × 50`** capped at ≥992 px, `border-radius:40px`, `overflow:hidden`,
`border:1px solid rgba(255,255,255,0.1)`, input `calc(100% - 50px)` with the fill-in
**`#ff0000`** `50 × 50` submit button whose square corners are clipped by the pill). The chrome row is
**`78.4 px`** tall — it is the wordmark's `48.4 px` box plus its **never-reset `margin-bottom:30px`** —
so the bar starts at **`y = 288.4`** and the whole chrome lands at **`y = 210`** (`112 + 42 + 8 + 48`).
The bar itself (`nav.ftco-navbar-light`) is **in-flow and never sticky** (the sheet has **zero**
`sticky`/`fixed` declarations), full-bleed, `padding:0`, `background:#252525 !important`, `z-index:3`,
**`67.8 px`** tall, and holds **five `11 px` uppercase `letter-spacing:2px` rows with `padding:24px 20px`**
(`#fff`) **centred inside it by `margin:auto`**; the **current row is pure red `#ff0000` and gets no
underline**, while hovering wipes in a **`2 px` `#ff0000` `::before` bar** (`width:0 → 100%`,
`bottom:0; left:0`, `transition:0.3s`) *and turns the label red*. The second row is a `Page` dropdown
(white, `border:none`, `border-radius:4px`, `min-width:160px`, `padding:8px 0`,
`0 10px 34px -20px rgba(0,0,0,.41)`, four `12 px` `#000` items with a **`#ff0000` hover fill + white
ink**, a rendered **`6 × 3` currentColor caret**) that **renders permanently expanded below `992 px`**
inside the panel (`display:block !important`, `position:static`, **`background:#000`**). Below
**`992 px`** the bar turns **`#000`**, loses its gutters (`padding:10px 15px` on the bar,
`padding:0` on the container) and collapses to **`44.7 px`** with a **`☰ MENU` toggler**
(`rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`, with a **rendered** `13.7 × 16`
bars glyph) that expands an **in-flow full-width panel** (`flex-basis:100%`, height-animated
`0.35s ease`, **`362.2 px`** tall at 767 px) of five **`43.2 px`** rows — `rgba(255,255,255,0.7)`,
`#fff` when current/hovered, with a `1 px rgba(255,255,255,0.2)` bottom rule below `768 px`. The page
holds **nothing else** — no content sections, no images, no footer, no second page — and at desktop
widths it is **`468.2 px` tall** (`documentElement.scrollHeight === clientHeight`), with **13** of its
**14** anchors dead `href="#"` (the 14th is the wordmark's `index.html`).

It is an original React recreation of the ColorLib free snippet **"Website Menu V17"** (source slug
`website-menu-17`), built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's structure, order and design tokens
1:1 but copies no asset (no images — the source ships none, no font files, no CSS files, no icon-font
glyphs, no inline SVG `<path>` data, no text verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-17/ — page title *"Website Menu V17 -
  Free Menu With Social Icons Template 2026 - Colorlib"*, **HTTP 200**, **108,939 B**, sha256
  `dcfb4bf74fb4127c6a03570685191ee9db8cfc8a147f8c868df870b58a3986e6`, verified 2026-10-12. Page meta:
  posted **March 9, 2021** (structured data `datePublished` **2021-03-09T14:25:10+00:00**) by
  **Rok Krivec**, `dateModified` **2026-09-25T10:42:07+00:00** (the September 2026 rebuild);
  ColorLib's own description: *"A responsive free menu template with social icons, a dropdown and a
  search bar. Works with or without Bootstrap."* September 2026 update note (verbatim): *"Updated
  September 2026: this snippet is now plain HTML and CSS plus a few lines of vanilla JavaScript: no
  jQuery, no Bootstrap files, no plugins. The download is 254 KB (it was 262 KB). Use it on its own,
  or drop it into a Bootstrap 4, 5 or 6 project and it looks the same. The collapsible sections open
  and close without Bootstrap's JavaScript. The drop-down menus work without Bootstrap's JavaScript,
  including keyboard navigation."* It is the `## Website Menus (20)` section's **seventeenth** entry,
  at **line 3089** of `TEMPLATES.md`; the slug `website-menu-17` appears exactly **once** in
  `TEMPLATES.md` and in **no** spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-17/` returns **HTTP 404** (`Not
  Found`) — like its `-01`…`-16` siblings, the *Website Menus* family does **not** live under the
  slug-only theme path; do not read that 404 as a dead preview. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-17/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **5,356 B**, `<title>Website menu 07</title>`, sha256
  `fb6a9b68893535504ca5164c0e6739423491be95db11dcc6ebe16b6cd78b9b95`, verified 2026-10-12) — the URL
  the preview host's catalog index records for this slug. Its two assets — `css/style.css?v=f98983b3`
  (**23,560 B**, `text/css`, sha256
  `431f55e587a0768a66a865c08f7529893ef490c973a56ce035f87a63d7dfb665`) and
  `js/snippet.js?v=23a93116` (**5,798 B**, `application/javascript`, sha256
  `9d56402f4ed372ce14145d19a2e569ffc5ab169de46dcbdd143614068806f80e`) — are **byte-identical** (same
  sha256, verified) to the copies in the snippet's own downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-17.zip` (**HTTP 200**, `application/zip`,
  **259,630 B**, sha256 `c7cd55996593585bb9707ceea5c6eceba0f706eb2126e2433e5126a1157ab8e6`; ColorLib
  rounds this to "254 KB"), which ships `index.html` (**5,153 B**, sha256
  `935d5aada84da631327c07430ba0836eb9bd71a8c397f5686ea09a57391fba23`), `css/style.css`,
  `js/snippet.js`, `README.md` (**1,264 B**), **no `images/` directory at all**, and **eight** Roboto
  woff2 files (100/300/400/700 × latin/latin-ext — **247,856 B = 95.5 %** of the archive). The `diff`
  between the live page and the archive `index.html` is **head-only** (the preview host's two
  `noindex` metas, a `cdnjs.cloudflare.com` `dns-prefetch`, `fetchpriority="high"`, and the
  cache-busting query strings) — the archive is the readable, un-versioned twin of the live preview.
  Both were read for this spec and the live render was cross-checked in a browser at 1440, 1200, 992,
  991, 768, 767 and 375 px (see Design reference).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-17.jpg
  (**HTTP 200**, served as **AVIF** despite the `.jpg` name, 7,263 B, 1200 × 972, sha256
  `8957d541b9300cc58a5658ca51b115bcf61ed115fbad0a917eb16e3cce86b02c`, converted to PNG and inspected
  visually 2026-10-12). No screenshot-only fallback was needed — the live preview is the primary
  reference and the archive its readable twin. The screenshot is a browser-chrome mock of the
  rendered page: the centred heading **`Website menu #07`**, then a light row with **four grey-outline
  circles** at the left, the **`LOGISTICA` / `ARCHITECTURE AGENCY`** lockup centred, and the **pill
  `Search` field with a red magnifier button** at the right, then the **near-black bar** with the
  uppercase rows **`HOME`** (red) · **`PAGE ▾`** · **`WORK`** · **`BLOG`** · **`CONTACT`**; the rest of
  the page is empty `#fafafa`. Note: in that mock the circles show brand glyphs because ColorLib's own
  page loads Font Awesome — the **standalone snippet does not**, so its circles are **blank**
  (confirmed in the live render at 1440 px).
- **New name:** `mizzen` (apps/mizzen, `@free-react-templates/mizzen`) — the *mizzen* is the
  **aftermost mast of a sailing ship** (and *mizzenmast* its rigging), a **light spar that carries the
  sternmost sail aft of every other fitting**, which suits this variant's **light chrome row that
  trails the wordmark and search right of the family's usual centre** and continues the family's
  nautical run: **menutree** (`-01`), **slidenav** (`-02`), **navpill** (`-03`), **menuribbon**
  (`-04`), **starboard** (`-05`), **larboard** (`-06`), **topdeck** (`-07`), **bowsprit** (`-08`),
  **gangway** (`-09`), **halyard** (`-10`), **ensign** (`-11`), **gunwale** (`-12`), **capstan**
  (`-13`), **windlass** (`-14`), **davit** (`-15`), **binnacle** (`-16`). Single lowercase word,
  kebab-safe (no hyphen needed). Verified 2026-10-12: `git grep -il mizzen origin/main` returns
  **zero** hits (so no app folder, spec, doc file or `TEMPLATES.md` name collides), and
  `https://colorlib.com/wp/template/mizzen/`, `https://preview.colorlib.com/theme/mizzen/` and
  `https://preview.colorlib.com/theme/bootstrap/mizzen/` all return **HTTP 404**, so it is not a
  ColorLib source name either. The source name "Website Menu V17", its `Logistica` /
  `Architecture Agency` wordmark, its five row labels, its four dropdown item strings and its
  `Website menu #07` heading are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V17" (source slug `website-menu-17`,
  https://colorlib.com/wp/template/website-menu-17/), `datePublished` **2021-03-09**, rewritten in
  the 2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no Bootstrap files, no images**
  in the download. Design-wise this is the family's **"fluid social-circle row + centred two-line
  wordmark + red pill search + dark bar with a red underline wipe"** variant — and the family's
  **first with a `container-fluid` chrome row** (every earlier sibling centres a `.cl-container`) and
  the family's **first that pairs a social row with a search field**. Its accent is **pure
  `#ff0000`** — also the sheet's own `a` colour and the search button's fill — applied to the current
  row's label, the hovered row's `2 px` underline and label, the social circles' hover fill, and the
  dropdown items' hover fill. Its nav chrome is **dark `#252525` on desktop and `#000` on mobile**
  (the family's `-16` sibling is white at both widths). The bar is **in-flow and never sticky** (the
  sheet contains **zero** `sticky`/`fixed` declarations), the rows are **centred** in it by an `auto`
  margin, and the page contains **only** the heading and the chrome.
- **CSS namespace:** the sheet (**23,560 B**, **1,211** lines, **157** top-level selector blocks,
  **25** `@media` blocks, **4** `@font-face` blocks) is self-contained and `cl-`-prefixed for its
  utilities (`cl-container-fluid`, `cl-row`, `cl-col-md-4`, `cl-col-md-6`, `cl-col-md-8`,
  `cl-order-md-last`, `cl-order-lg-last`, `cl-text-center`, `cl-justify-content-between`,
  `cl-justify-content-end`, `cl-justify-content-center`, `cl-d-flex`, `cl-d-md-flex`,
  `cl-align-items-center`, `cl-m-auto`, `cl-mb-0`, `cl-mb-3`, `cl-mb-5`, `cl-mb-md-0`, `cl-pl-3`,
  `cl-px-md-5`, `cl-sr-only`, `cl-icon`, `cl-navbar`, `cl-navbar-expand-lg`, `cl-navbar-dark`,
  `cl-navbar-brand`, `cl-navbar-nav`, `cl-nav-item`, `cl-nav-link`, `cl-navbar-toggler`,
  `cl-navbar-collapse`, `cl-collapse`, `cl-collapsing`, `cl-show`, `cl-dropdown`,
  `cl-dropdown-toggle`, `cl-dropdown-menu`, `cl-dropdown-item`, `cl-form-control`, `cl-bg-dark`,
  `.fa`, plus the variant's own `ftco`-prefixed hooks) and is a hand-rolled Bootstrap-4-look-alike —
  **not** a framework skin. Its first ~100 lines are a `:where(html) … all: revert` reset (so the
  snippet renders identically inside a Bootstrap host page), then a `*{box-sizing:border-box}`
  normalize, the framework base (`.cl-container`/`.cl-container-fluid` tiers, `.cl-row`,
  `.cl-col-md-*`, the order/utility classes, `.cl-form-control`, `.cl-collapse*`, the
  `.cl-dropdown*` family, `.cl-navbar*`, the dark/`cl-bg-dark` colour layers, `@media print` incl.
  `@page{size:a3}`, the Bootstrap palette), the `@font-face` block, and then the ~290-line custom
  block (`body`, `a`, `h2`, `.ftco-section`, `.heading-section`, `.ftco-navbar-light` + its six
  descendant rules and four `@media` blocks, `.cl-navbar-brand` + its span/hover rules,
  `.social-media` + its four rules, `.searchform` + its six rules, and the final `.cl-form-control`
  override). It contains **no `colorlib`** string (only the leading comment) and **no
  `sticky`/`fixed`** at all.
- **Diff against the `-16` sibling's sheet (22,999 B)** — 561 B larger, and the differences are
  exactly this variant's identity: `+` `.cl-container-fluid` (no `max-width` tiers), `+`
  `.cl-col-md-4`/`.cl-col-md-8`, `+` `.cl-order-md-last`, `+` `.cl-d-md-flex`, `+` `.cl-mb-3`,
  `+` `.cl-mb-md-0`, `+` `.cl-px-md-5`; the accent swaps **`#f1bc31` gold → `#ff0000` red**; the bar
  swaps **`background:#fff` → `#252525`** (and mobile `#fff` → `#000`) and **loses the
  `0 5px 20px -17px rgba(0,0,0,.34)` shadow**; the row padding goes **`2rem` → `1.5rem`** (83.8 →
  67.8 px) and the row ink **`#4d4d4d` → `#fff`**; the full-height gold slab is replaced by a
  **`2 px` bottom `#ff0000` underline wipe**; the four **`34 × 34` square `#4d4d4d` tiles** become
  four **`40 × 40` circles** with a `1px solid #e6e6e6` ring and **no background**; the **phone link
  and the dark `div.wrap` strip are gone entirely**; the search field goes from **`257 × 46`,
  `border-radius:5px`, `order:13`, `border:1px solid rgba(0,0,0,.05)`** to **`300 × 50`,
  `border-radius:40px`, `order:0`, `border:1px solid rgba(255,255,255,.1)` with a red submit**; and
  the brand moves out of the bar into the chrome column.
- **HTML structure (live preview, 5,356 B — archive twin 5,153 B):** document order is exactly —
  (1) `section.ftco-section` (the whole page lives inside it, `padding:7em 0`), carrying
  `div.cl-container` › `div.cl-row.cl-justify-content-center` ›
  `div.cl-col-md-6.cl-text-center.cl-mb-5` › `h2.heading-section` reading **`Website menu #07`**,
  (2) inside the same section the **chrome row**:
  `div.cl-container-fluid.cl-px-md-5` › `div.cl-row.cl-justify-content-between` with **two**
  `div.cl-col` children — a `div.cl-col-md-8.cl-order-md-last` holding an inner `div.cl-row` with
  `div.cl-col-md-6.cl-text-center` (the brand) and
  `div.cl-col-md-6.cl-d-md-flex.cl-justify-content-end.cl-mb-md-0.cl-mb-3` (the search form), then a
  `div.cl-col-md-4.cl-d-flex` holding `div.social-media` › `p.cl-mb-0.cl-d-flex` with four anchors,
  (3) `nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.cl-navbar-dark.ftco_navbar.cl-bg-dark.ftco-navbar-light`
  › `div.cl-container-fluid` with **three** children in this order — the toggler `button`, the
  collapsible `div#ftco-nav`, and nothing else (there is **no** brand and **no** search inside the
  bar, unlike the `-16` sibling), (4) `script`. In detail:
  - **`button.cl-navbar-toggler[type="button"][data-toggle="collapse"][data-target="#ftco-nav"]
    [aria-controls="ftco-nav"][aria-expanded="false"][aria-label="Toggle navigation"]`** ›
    `span.fa.fa-bars` › an inline **SVG** 3-bar glyph (`viewBox="0 0 1536 1792"`, wrapped in
    `<g transform="translate(0,1536) scale(1,-1)">`, `class="cl-icon"`,
    `style="vertical-align:-0.1429em"`, `aria-hidden="true"`, `focusable="false"`) plus the literal
    text **`Menu`** — the bar's **first** child in the DOM (the family's earlier siblings put a
    brand or search block in front of it);
  - **`div#ftco-nav.cl-collapse.cl-navbar-collapse`** › `ul.cl-navbar-nav.cl-m-auto` with **five
    `li.cl-nav-item`** in source order: **Home** (`cl-active`), **Page**
    (`li.cl-nav-item.cl-dropdown`), **Work**, **Blog**, **Contact**;
  - **`a.cl-navbar-brand[href="index.html"]`** reading **`Logistica <span>Architecture Agency</span>`**
    — the **only** anchor on the page with a real destination;
  - **`form.searchform.cl-order-lg-last[action="#"]`** › `div.cl-form-group.cl-d-flex` ›
    `input.cl-form-control.cl-pl-3[type="text"][placeholder="Search"]` +
    `button.cl-form-control.search[type="submit"]` › `span.fa.fa-search` › an inline **SVG**
    magnifier (`viewBox="0 0 1664 1792"`, same `<g transform>` wrap);
  - **the dropdown (the second row):**
    `a.cl-nav-link.cl-dropdown-toggle[href="#"][id="dropdown04"][data-toggle="dropdown"]
    [aria-haspopup="true"][aria-expanded="false"]` reading **`Page`** ›
    `div.cl-dropdown-menu[aria-labelledby="dropdown04"]` with **four** `a.cl-dropdown-item` —
    *Page 1*, *Page 2*, *Page 3*, *Page 4*. Trigger and all four items are dead `href="#"`.
  - **Anchors:** the live page holds **14** anchors — the wordmark's real `index.html` plus **13**
    dead `href="#"` (four social circles + five rows + four dropdown items). There is no second page
    to probe; the recreation must materialise all **thirteen** as real destinations.
- **Measurements (live preview, Chromium, DPR 1, read 2026-10-12; the sheet was fetched by curl
  **and** by the browser and the two copies are byte-identical, sha256 `431f55e5…`, so every token
  below is confirmed by the source CSS, and every geometry figure was **cross-checked against the
  rendered pixels** of 1440 px and 375 px screenshots. Note the standing caveats for this family:
  a `getComputedStyle` read taken right after a CDP `Emulation.setDeviceMetricsOverride` can return a
  **stale pre-override value** (re-load the page after the override, and treat screenshot pixels as
  geometry authority); `CSS.forcePseudoState` does **not** apply this sheet's `:hover` rules (both
  `:hover:before{width:100%}` and `:hover{color:#ff0000}` stayed inert under a forced hover), so
  hover values here come from the **sheet** and were additionally confirmed by the mock screenshot's
  red `HOME`; and a backgrounded tab (`document.hidden === true`) freezes the collapse transition.)
  - **`h2`:** 28 px / 400 / `line-height:1.5` (42 px) / `#000` / centred (`.cl-text-center`),
    `margin-bottom:0.5rem` (8 px) + `.cl-mb-5` **48 px**; the `cl-col-md-6` column is
    `flex:0 0 50%; max-width:50%` at ≥768 px (measured **540 px** at 1440/1200 px, **450 px** at 992,
    **330 px** at 991/768 with the `.cl-container`'s 720/960 px tiers, 345 px at 375); measured
    **540 × 42 at `x = 450, y = 112`** at 1440 px.
  - **Heading band:** `section.ftco-section{padding:7em 0}` = **112 px** top/bottom over the page's
    **`#fafafa`**, and the section has **no horizontal padding**, which is why the chrome row is
    full-bleed → **112 + 42 + 8 + 48 = 210 px** to the chrome's top edge at every width (measured
    `h2.y = 112, h = 42`, chrome `y = 210` at 1440 px and at 375 px).
  - **The chrome row (`div.cl-container-fluid.cl-px-md-5`):** `width:100%`
    (measured **1440 / 1200 / 992 × 78.4 at `y = 210`** — full-bleed, `max-width:none`), gutters
    **`0 48px`** at ≥768 px (`cl-px-md-5` = `3rem` both sides; measured `padding:0px 48px`) falling to
    the base **`0 15px`** below 768 px. Its `div.cl-row` (`margin:0 -15px`, `flex-wrap:wrap`,
    `justify-content:space-between`) measures **1374 px at `x = 33`** (1440 px) and holds the two
    columns: the **social column** `div.cl-col-md-4.cl-d-flex` (`flex:0 0 33.33333%`,
    `padding:0 15px`, `display:flex`, `order:0`) — measured **458 × 78.4 at `x = 33`** — and the
    **brand + search column** `div.cl-col-md-8.cl-order-md-last` (`flex:0 0 66.66667%`,
    `order:13`) — measured **916 × 78.4 at `x = 491`**, i.e. the `order:13` column renders
    **second** (right).
  - **Social row (`div.social-media` › `p.cl-mb-0.cl-d-flex` › four `a.cl-d-flex
    .cl-align-items-center.cl-justify-content-center`):** the wrapper is `display:inline-block`
    (blockified to `block` as a flex child; measured **176 × 78.4 at `x = 48`, `y = 210`**). Each
    anchor is **`40 × 40`**, `border:1px solid #e6e6e6`, **`border-radius:50%`**,
    **no background**, `display:flex` with the glyph centred, **`margin-right:4px`**, `transition:.3s`;
    hover → **`background:#ff0000; border-color:#ff0000`** with the glyph span turning **`#fff`**
    (its resting ink is **`#4d4d4d`**). Measured at **`x = 48, 92, 136, 180` (40 px + 4 px gaps)** at
    1440 px, the group **176 × 40** ending at **224** — i.e. flush with the container's content left
    edge (**48**) at the very top of the chrome row, **not** vertically centred (the column stretches
    to 78.4 px). **The glyphs do not render:** the sheet declares **no** `.fa-*` font rules and ships
    **no** icon font, and the markup puts only an `<i class="cl-sr-only">Facebook</i>`-style label
    inside each `span.fa` — measured **0 × 0** (each span's box sits at the circle's centre, e.g.
    `68, 230` for the first). The source therefore shows **four blank grey-outlined circles**; the
    recreation must supply real inline-SVG brand marks (delta).
  - **Brand column (inner `div.cl-col-md-6.cl-text-center`):** `flex:0 0 50%; max-width:50%`,
    `text-align:center`; measured **458 px at `x = 491`** (1440 px) / **378** (1200) / **308.7**
    (992/991) / **234** (768) / full width below 768.
  - **Wordmark (`a.cl-navbar-brand`, two-line lockup, in the CHROME not the bar):** own-brand text,
    **`font-size:20px`**, `font-weight:700`, `text-transform:uppercase`, **`line-height:1.2`**
    (24 px), `color:#000`, `padding:5px 0` (`0.3125rem`), **`margin-right:1rem`** (16 px),
    `display:inline-block`, `white-space:nowrap`, and a **never-reset `margin-bottom:30px`**;
    its `span` (second line) is **`display:block`, `12px`, `font-weight:500`,
    `color:rgba(0,0,0,0.3)`** (`line-height` 14.4 px). Measured **147.4 × 48.4** (5 + 24 + 14.4 + 5)
    at every width — its `margin-bottom:30px` is what makes the chrome row **78.4 px** tall. Because
    of the `margin-right:16px`, `text-align:center` centres the *box + margin*, so the lockup sits
    **8 px left of the column's true centre** (measured `x = 638.3` in a column spanning
    `491 → 949`, centre 720 vs lockup centre 712). Its colour is identical at rest and on hover
    (`.cl-navbar-brand:hover,:focus{color:#000}`) → the recreation adds a hover affordance (delta).
  - **Search column (inner `div.cl-col-md-6.cl-d-md-flex.cl-justify-content-end.cl-mb-md-0.cl-mb-3`):**
    `display:flex` only from `768 px` up (`cl-d-md-flex`), `justify-content:flex-end`,
    `margin-bottom:0` at ≥768 px and **`margin-bottom:1rem`** (16 px) below; measured **458 px at
    `x = 949`** (1440 px).
  - **Search form (`form.searchform.cl-order-lg-last`):** `height:50px`,
    **`border:1px solid rgba(255,255,255,0.1)`** (on the light page this hairline is effectively
    invisible — a sibling artefact), **`border-radius:40px`**, **`overflow:hidden`**,
    `margin:0`, and **`width:300px` from `992 px` up** (below that it is unconstrained and fills its
    column). Measured: **`300 × 50 at `x = 1092 → 1392`** at 1440 px (flush with the container's
    content right edge, `1440 - 48 = 1392`), **300** at 1200, **278.7** at 992 (clamped by the
    column's 278.7 px content box), **261** at 991, **204** at 768, **737** at 767 and **345** at
    375 (full column content width once the row wraps). Inside it: **`input.cl-form-control.cl-pl-3`**
    — `width:calc(100% - 50px)` (measured **248 px** at 300 px form width, 152 at 204, 293 at 345),
    `height:50px` (the sheet's final rule forces `50px !important` over the framework's
    `calc(1.5em + .75rem + 2px)` = 38 px), **`border:none`**, `background:#fff !important`,
    `color:rgba(0,0,0,0.7) !important`, `font-size:14px`, `padding:6px 12px 6px 16px`; and
    **`button.cl-form-control.search[type=submit]`** — **`50 × 50`**, **`background:#ff0000
    !important`**, `border:none`, its own ink `rgba(0,0,0,0.7)` while the inline magnifier SVG is
    **`14.8 × 16`** and **`fill:#fff`** (`.searchform .search span{font-size:16px; color:#fff}` +
    `.cl-icon{height:1em;width:auto;fill:currentColor}`). The button is **square** (`border-radius:0`)
    but is **clipped into the pill's right cap** by the form's `overflow:hidden` + `40px` radius —
    which is why the mock screenshot's red button looks round on its right side. There is **no**
    visible focus state in the source beyond `border-color:#000` on a borderless input — restore a
    real focus ring (delta). The field is **never hidden** at any width.
  - **The bar (`nav.ftco-navbar-light`):** **`background:#252525 !important`**, `z-index:3`,
    **`padding:0`**, **no shadow**, `position:relative` (**not sticky** — the sheet contains **zero**
    `sticky`/`fixed`), full-bleed with a `div.cl-container-fluid` child (`padding:0 15px`,
    `flex-wrap:nowrap`, `justify-content:space-between` at ≥992 px). Measured **1440 × 67.8 at
    `y = 288.4`** (the chrome's 78.4 px end); the rows *set* that height
    (24 + 24 padding + 19.8 line-height). Laid out left→right at 1440 px: the toggler
    (`display:none`), then the collapsible `div#ftco-nav` (**1410 px at `x = 15`**,
    `flex-basis:auto; flex-grow:1; align-items:center`), then the `ul` centred inside it.
  - **Rows (`ul.cl-navbar-nav.cl-m-auto`):** `display:flex; flex-direction:row` at ≥992 px,
    **centred by `cl-m-auto` → `margin:auto !important`** (resolved to **487.6 px** left and right at
    1440 px); measured **434.7 × 67.8 at `x = 502.6 → 937.3`**. Each
    `.cl-nav-item > .cl-nav-link` is **`font-size:11px`**, `font-weight:500`,
    **`text-transform:uppercase`**, **`letter-spacing:2px`**, **`padding:1.5rem 20px`**
    (**24px 20px**, → **67.8 px** tall), **`color:#fff`**, `position:relative`, `opacity:1
    !important`, `line-height:19.8px`. Item widths measured at 1440 px: **Home 81**
    (`cl-active`), **Page 86.6** (the caret adds 8.8 px), **Work 82.2**, **Blog 78.6**,
    **Contact 106.4**.
  - **The red underline (`> .cl-nav-link:before`) — this variant's signature:** a `content:''`
    pseudo-element at `width:0; height:2px; bottom:0; left:0`, `display:block`,
    `background:#ff0000`, `transition:0.3s`; on `:hover` it becomes **`width:100%`** and the label
    turns **`#ff0000`**. Verified in the live render: **all five rows** (including the current
    `Home`) read `::before` `width:0px`, `height:2px`, `background:rgb(255,0,0)`,
    `transition:all 0.3s` at rest — i.e. **the underline is hover-only and the current row never wears
    it** (unlike the `-16` sibling's permanent gold slab); the current row is signalled purely by
    **`color:#ff0000`** (measured `rgb(255,0,0)` on `Home`, `rgb(255,255,255)` on the four siblings).
    Note the underline is a **hairline bar pinned to the bar's bottom edge** (2 px at the very bottom
    of a 67.8 px row), **not** a full-height slab and **not** an `inset`-style wipe.
  - **Dropdown (`li.cl-nav-item.cl-dropdown` → `.cl-dropdown-menu`):** plain white surface,
    `border:none`, `background:#fff`, **`border-radius:4px`**,
    `box-shadow:0px 10px 34px -20px rgba(0,0,0,0.41)`, from the framework base
    `position:absolute; top:100%; left:0; z-index:1000; min-width:10rem (160px); padding:.5rem 0;
    margin:.125rem 0 0` (**2 px**). Measured **open** at 1440 px (after a JS `mouseenter`):
    **160 × 134.4 at `x = 583.6, y = 358.2`** — flush under the trigger's left edge (288.4 + 67.8 +
    2). Items `.cl-dropdown-item`: **`font-size:12px`**, `color:#000`,
    `padding:0.25rem 1.5rem` (**4px 24px** → **29.6 px** rows, measured `y = 366.2, 395.8, 425.4,
    455`), `line-height:21.6px`; `:hover,:focus` → **`background:#ff0000; color:#fff`**. The Bootstrap
    `#007bff`/`#0056b3`/`#f8f9fa`/`#16181b` palette declared in the framework base
    (`.cl-dropdown-item.cl-active`, `:active`, `.disabled`) never applies to this markup.
  - **Dropdown trigger affordance:** the caret **is** rendered —
    `.cl-dropdown-toggle::after` is the framework's `border-top:.3em solid` triangle: measured
    **6 × 3 px**, `border-top-width:3px`, `display:inline-block`, `margin-left:2.805px`
    (`.255em`) — visible as a small ▾ after `PAGE` in both the screenshot and the live render. It is
    coloured **currentColor** (`#fff` on desktop; `rgba(255,255,255,0.7)` below 992 px), so it follows
    the trigger's label colour — and the label turns **`#ff0000`** on hover while the caret stays
    white, i.e. **the caret does not inherit the hover colour**.
  - **Dropdown behaviour (`js/snippet.js`, 5,798 B — byte-identical to the `-16` sibling's file except
    line 2's filename comment):** three independent behaviours — (a) **hover**:
    `mouseenter`/`mouseleave` on every `nav .cl-dropdown` toggles `cl-show` on the `li`, on its
    `.cl-dropdown-menu` **and** sets `aria-expanded` on the trigger (verified: after a synthetic
    `mouseenter` the menu reads `cl-dropdown-menu cl-show` with `aria-expanded="true"` and
    `display:block`); (b) **collapse** (Bootstrap-4-alike): the toggler's `click` runs a
    `cl-collapsing` → height-animated → `cl-show` cycle (`transition:height .35s ease`, removed under
    `prefers-reduced-motion: reduce`) and keeps `aria-expanded` in sync (the script also queries a
    `[data-toggle="panel-collapse"]` selector but returns early for any value other than `collapse` —
    a typo'd toggle in the original author's markup that Bootstrap never bound); (c) **dropdown
    data-API**: `click` on the trigger opens/closes it (with an overflow guard that flips
    `left:auto; right:0` if the menu would exceed the viewport), `ArrowDown` on the trigger opens and
    focuses the first item, `ArrowDown`/`ArrowUp` rove focus inside the menu, `Escape` closes and
    refocuses the trigger, and an outside click closes it. All three must be reproduced (see
    Requirements).
  - **Toggler (`button.cl-navbar-toggler`):** `border:none`,
    **`color:rgba(255,255,255,0.5) !important`**, `cursor:pointer`, `padding:4px 0 4px 12px` (the
    variant rule zeroes `padding-right`), `text-transform:uppercase`, `font-size:16px`,
    `letter-spacing:.1em`, focus `outline:none !important`; content = the inline three-bar SVG
    (**13.7 × 16**, `span.fa` measured 13.7 × 16.7) + the word **`Menu`**. Measured **85.3 × 24.7**,
    `display:none` at ≥992 px and the bar's **first** child below it (at `x = 15`, the container's
    content left edge).

## Breakpoint behaviour (values measured on the live preview and derived from its sheet)

| Width | Chrome row (`cl-container-fluid`) | Brand (col 50 %) | Search form | Social row | Bar (`nav`) | Bar height |
| --- | --- | --- | --- | --- | --- | --- |
| 375 | 375 × **204.4** @ `y = 210`, gutters `0 15px`, **wrapped** | `147.4 × 48.4` @ `x = 105.8` (+30 margin) | **345 × 50** @ `x = 15`, line 2 | centred (margin auto, `margin-bottom:20px`) @ `x = 99.5` | `#000`, `padding:10px 15px`, `y = 414.4` | **44.7** (collapsed) / **407** expanded |
| 767 | 767 × **204.4**, gutters `0 15px`, wrapped | `147.4 × 48.4` @ `x = 301.8` | **737 × 50** @ `x = 15`, line 2 | centred, `margin-bottom:20px` @ `x = 295.5` | `#000`, `y = 414.4` | **44.7** / **407**; panel **362.2** |
| 768 | 768 × **78.4**, gutters `0 48px` | `147.4 × 48.4` @ `x = 302.3` in a 234 px column | **204 × 50** @ `x = 516 → 720` | centred in the 234 px col @ `x = 62` | `#000`, `padding:10px 15px`, `y = 288.4` | **44.7** |
| 991 | 991 × **78.4**, gutters `0 48px` | @ `x = 413.8` in a 308.3 px column | **261 × 50** @ `x = 682 → 943` | centred in the 308.3 px col @ `x = 99.2` | `#000`, `y = 288.4` | **44.7** |
| 992 | 992 × **78.4**, `max-width:none` | @ `x = 414.3` in a 308.7 px column | **278.7 × 50** @ `x = 665.3` (clamped by the column) | `x = 48` | **`#252525`**, `padding:0`, `y = 288.4` | **67.8** |
| 1200 | 1200 × 78.4 | @ `x = 518.3` in a 378 px column | **300 × 50** @ `x = 852 → 1152` | @ `x = 48` | `#252525` | **67.8** |
| 1440 | 1440 × 78.4 | @ `x = 638.3` in a 458 px column | **300 × 50** @ `x = 1092 → 1392` | @ `x = 48` (circles `48/92/136/180`) | `#252525`, rows `x = 502.6 → 937.3` | **67.8** |

The chrome top edge is **`y = 210`** and its height is **78.4 px** wherever the row does **not**
wrap; the bar follows at **`y = 288.4`**. Two things flip at `992 px`: the bar's surface
(`#000 → #252525`), its padding (`10px 15px → 0`) and its height (44.7 → 67.8, as the rows appear and
the toggler hides), and the search form gains its **`width:300px`** cap. The chrome row itself only
changes at **`768 px`** (gutters **15 → 48 px**, `cl-px-md-5`) and **below 768 px** (the row
**wraps**: brand line, search line, social line). Page height at desktop widths: **468.2 px**
(112 + 42 + 8 + 48 + 78.4 + 67.8 + 112), i.e. **shorter than the viewport** — the source does not
scroll. With the mobile panel expanded at 767 px the document grows to **933 px** and the bar
(position:relative) scrolls away normally.

## Type and colour summary

- `body{font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
  font-weight:normal; background:#fafafa; color:gray}` (`gray` = **`#808080`**). The framework base
  declares a **system** stack and `background-color:#fff` first, but the custom block's `body` rule
  comes later and wins — the page is **`#fafafa`**.
- `a{transition:.3s all ease; color:#ff0000}` — **inline links are the red accent**; the custom
  block also kills `text-decoration` and outlines (`a:hover,a:focus{text-decoration:none !important;
  outline:none !important; box-shadow:none}`) → restore hover/focus affordances (delta).
- `h2,.h2{line-height:1.5; font-family:"Poppins", Arial, sans-serif; font-weight:400; color:#000}`
  + `.heading-section{font-size:28px; color:#000}` (28 px wins over the framework's `2rem` = 32 px).
- **No webfont is loaded at all.** The live page's only `<link>` is the sheet itself (plus a
  `cdnjs.cloudflare.com` `dns-prefetch` that is never used): there is **no Google Fonts request**
  and **no `@font-face` for Poppins** anywhere, so `"Poppins", Arial, sans-serif` resolves to
  **Arial** in the source. The **eight** self-hosted **Roboto** woff2 files — **247,856 B = 95.5 %
  of the 259,630 B download**, the same payload as the `-16` sibling's archive — are dead twice over:
  only **400/700** are even declared (`roboto-100-*` / `roboto-300-*` are shipped but never
  declared) and no rule in the sheet asks for Roboto outside the base system stack.
- Token table: accent red **`#ff0000`** (current row label, hover label, `2 px` hover underline,
  social hover fill/border, search submit fill, dropdown item hover fill, the sheet's own `a`
  colour) · page **`#fafafa`** · bar desktop **`#252525`** · bar mobile **`#000`** · rows
  **`#fff`** desktop (mobile `rgba(255,255,255,0.7)`, current/hover `#fff`) · wordmark **`#000`**
  with the second line **`rgba(0,0,0,0.3)`** · circle ring **`#e6e6e6`**, circle glyph
  **`#4d4d4d`** (hover `#fff`) · heading **`#000`** · body ink **`gray`/`#808080`** · search form
  ring **`rgba(255,255,255,0.1)`**, input surface **`#fff`**, input ink **`rgba(0,0,0,.7)`**,
  submit glyph **`#fff`** · dropdown surface **`#fff`** (mobile panel `#000`), item ink **`#000`**
  (mobile `rgba(255,255,255,0.8)`, hover `#fff`) · toggler **`rgba(255,255,255,0.5)`** · mobile row
  rule **`rgba(255,255,255,0.2)`** · radii: search form **`40px`**, dropdown **`4px`**, circles
  **`50%`**, everything else square (`border-radius:0` on the rows, the input and the submit) ·
  dropdown shadow **`0 10px 34px -20px rgba(0,0,0,.41)`** (kept even in the mobile panel) · row
  transition **`0.3s`** · link transition **`.3s all ease`** · panel transition **`height .35s ease`**.

## Fidelity pitfalls (things that will bite an implementer)

1. **The accent is pure red `#ff0000`** — not the `-16` sibling's gold `#f1bc31`, not the `-15`
   sibling's amber `#fec771`, not the `-14` sibling's pink `#fc7fb2`. Copying a sibling's palette is
   the single easiest way to break this template.
2. **The row treatment is a `2 px` bottom underline wipe, not a slab and not a colour swap.** It is
   `width:0 → 100%`, `height:2px`, `bottom:0; left:0`, `#ff0000`, `transition:0.3s`, and it wipes in
   **together with a red label** (`:hover{color:#ff0000}`). The current row gets **no** underline at
   all — verified: all five rows read `::before width:0px` at rest, including `Home`.
3. **The chrome row is `container-FLUID`** (`width:100%`, **no `max-width`**) with **`48 px` gutters
   at ≥768 px** (`cl-px-md-5` = `3rem`) and `15 px` below — the family's `-01`…`-16` siblings all use
   the centred `.cl-container` tiers (540/720/960/1140). Do not import a container tier here.
4. **The social column comes FIRST visually but the brand/search column is `order:13`** — the brand
   and search sit **right**, the circles **left**. A DOM-order-only React port puts the brand block
   left and the circles right and inverts the whole chrome.
5. **The wordmark lives in the CHROME, not in the bar** (the `-16` sibling's bar carries it), and its
   **`margin-bottom:30px` is never reset** at any width — that margin is what makes the chrome row
   **78.4 px** tall (48.4 + 30) instead of 48.4. Remove it and the bar moves up by 30 px.
6. **`margin-right:1rem` on the wordmark shifts the centring** by 8 px (the `text-align:center`
   column centres box+margin), so the lockup is not exactly centred. Match it or record the choice.
7. **The rows are `11 px` / uppercase / `letter-spacing:2px` at `24px 20px` padding → 67.8 px**, and
   they *set* the bar height. Do not import the `-16` sibling's `32px 20px` padding or its 83.8 px bar.
8. **The list is CENTRED by an `auto` margin** (`cl-m-auto` → `margin:auto !important`, 487.6 px per
   side at 1440 px), and the bar's container is `flex-wrap:nowrap` at ≥992 px with the collapse
   `flex-grow:1`. Not right-aligned, not `space-between`.
9. **The search field is a `40 px`-radius PILL with `overflow:hidden`** and a **square red `50 × 50`
   submit** whose right corners are clipped by the pill — and its ring is
   `1px solid rgba(255,255,255,0.1)` (**nearly invisible on the light page**, copied from a dark
   sibling), not `rgba(0,0,0,.05)`. Width is **300 px capped only at ≥992 px**, so at 992 px the form
   measurably shrinks to **278.7 px** and at 768 px to **204 px**.
10. **The circles do not render glyphs**: no icon font ships, no `.fa-*` rule exists, and each span
    holds only an `sr-only` label → the source shows **four blank outlined circles** (measured
    `0 × 0` glyphs). Real glyphs — **inline-SVG brand marks** for the socials (lucide-react exports
none) or
    generic icons) are a **delta**, and the accessible names must stay (`aria-label` on each circle).
    The **toggler's** bars glyph *does* render (inline SVG, 13.7 × 16) — handle the two differently.
11. **The social row is top-aligned, not vertically centred**: the `33.33 %` column is a flex
    container 78.4 px tall and the circles sit at its **top** (`y = 210` at 1440 px). Centring them
    would be wrong; so would aligning the search form's vertical position with them.
12. **The bar is `#252525` on desktop and `#000` on mobile** (with `padding:10px 15px` and container
    gutters `0`) — and the mobile bar is only **44.7 px** tall while collapsed, **407 px** expanded.
13. **The dropdown renders permanently expanded below 992 px** (`display:block !important`,
    `position:static`, **`background:#000`**, items `rgba(255,255,255,0.8)`, `4 px` radius and the
    desktop shadow still declared) — it is **not** a collapsed submenu in the panel, and its
    `134.4 px` are part of the panel's height (measured: rows `Home` 449.1, `Page` 492.3, menu
    537.5 → 671.9, `Work` 671.8).
14. **The mobile panel WRAPS the rows full width**: 722 px wide at 767 px with `padding-bottom:10px`
    on the `ul` and a `1px solid rgba(255,255,255,0.2)` bottom rule **below 768 px only** — rows are
    43.2 px at 767/375 and have **no** rule at 768–991 px.
15. **The caret does render** (`6 × 3`, `border-top:3px solid currentColor`, `margin-left:2.805px`)
    and follows the label colour — but because the hover rule only re-colours the *label*, a hovered
    white row shows a **white caret on a red label** (only `Page` has a caret, and its row turns red
    on hover). Recreate it or document the substitute.
16. **Nothing is sticky and the source page is shorter than the viewport** — it is **468.2 px** tall
    at desktop widths, so `documentElement.scrollHeight === clientHeight` (900 = 900 at 1440 × 900)
    and `scrollWidth === innerWidth`: the recreation adds real content below the chrome and the
    chrome must scroll away with it.
17. **No webfont ships**, so the source renders Arial: add one Google Fonts `<link>` for Poppins
    (delta) rather than copying eight dead Roboto woff2 files.
18. **Dead code to drop:** the `:where(html) … all: revert` reset, the `@media print` block (incl.
    `@page{size:a3}`), the Bootstrap palette (`#007bff`/`#0056b3`/`#6c757d`/`#212529`/`#f8f9fa`/
    `#16181b`/`#ced4da`/`#495057`), the base system `Roboto` body stack, the `cl-bg-dark` /
    `cl-navbar-dark` colour layers the custom block's `!important` rules beat, the unused `.fade`,
    `.cl-dropdown-menu-right` and `.cl-nav-link.disabled` rules, the `[data-toggle="panel-collapse"]`
    typo branch in the script, the `cl-order-lg-last` class on the search form (dead at every width —
    the variant never sets `order` on it), and all eight Roboto woff2 files.

## Requirements

### Feature: Page frame and heading band

#### Scenario: Band spacing and the chrome's landing point

- **Given** a viewport ≥ 768 px
- **When** the page frame is measured
- **Then** the page background is **`#fafafa`**, the whole page lives in one
  `section.ftco-section` with `padding:112px 0` and **no horizontal padding**
- **And** the heading is **28 px / 400 / `line-height:1.5` (42 px) / `#000`**, centred in a column
  that is `50%` at ≥768 px and `100%` below, with an `8px` margin-bottom plus a `48px` block margin
- **And** the chrome row's top edge lands exactly **210 px** below the page top at every width
  (112 + 42 + 8 + 48) and the bar follows it at **288.4 px**

#### Scenario: The heading is own copy

- **Given** the app renders
- **Then** the string `Website menu #07` never renders
- **And** the app contains **zero** `colorlib`/`website-menu-17` strings

### Feature: Fluid chrome row (social + wordmark + search)

#### Scenario: Fluid geometry and the two columns

- **Given** a viewport ≥ 992 px
- **When** the chrome row is measured
- **Then** it is **full-bleed** (`width:100%`, **no `max-width`**) with **`48 px`** side gutters from
  `768 px` up (`15 px` below), is **≈ 78.4 px** tall at `y = 210`, and lays out as a
  `33.33 %` social column at the **left** and a `66.67 %` brand/search column that is
  **`order:13`** at the **right** (measured 458 px + 916 px at 1440 px)
- **And** it contains **no** centred container tier (`540/720/960/1140`) — the source declares
  `.cl-container-fluid`, not `.cl-container`

#### Scenario: Wordmark lockup

- **Then** the wordmark is own copy in **two lines** — a first line at **20 px / 700 / uppercase /
  `line-height:1.2` (24 px) / `#000`** with `padding:5px 0` and `margin-right:16px`, and a second
  line at **12 px / 500 / `rgba(0,0,0,0.3)`** in a `display:block` span
- **And** it measures ≈ **147 × 48**, is centred in its `50 %` column at ≥768 px (with the source's
  8 px `margin-right`-induced offset either reproduced or recorded as a delta), carries the source's
  never-reset **`margin-bottom:30px`** (which makes the chrome 78.4 px), and never reuses the
  source's `Logistica` / `Architecture Agency` strings
- **And** it links to the top of the page with a visible `focus-visible` ring (the source paints no
  hover state beyond `color:#000` — a documented delta)

#### Scenario: Social circles

- **Then** **four** circles render at **40 × 40**, `border:1px solid #e6e6e6`, **`border-radius:50%`**,
  **no background**, `display:flex` with the glyph centred, **`4 px`** apart, and are **top-aligned**
  with the chrome row (not vertically centred)
- **And** the first circle sits flush with the container's content left edge (**48 px** at ≥768 px)
- **And** hovering a circle fills it **`#ff0000`** (border too) with a **white** glyph
- **And** each circle shows a real inline-SVG brand mark (the source ships no icon font and renders
  **blank** `0 × 0` glyphs — a documented delta) with an accessible name (`aria-label`/`sr-only`),
  and each is a real destination with a `focus-visible` ring

#### Scenario: Pill search field

- **Then** the field is **`300 × 50`** at ≥992 px (clamped to its column below that: 278.7 px at
  992, 261 px at 991, 204 px at 768, full column width at 767/375), `height:50px`,
  **`border:1px solid rgba(255,255,255,0.1)`**, **`border-radius:40px`**, **`overflow:hidden`**, and
  flush with the container's content right edge (measured `x = 1092 → 1392` at 1440 px)
- **And** the text input is `calc(100% - 50px)` wide, **`50 px`** tall, **`border:none`**, `#fff`,
  **`rgba(0,0,0,.7)`** ink at **14 px** with a visible placeholder
- **And** the submit button is **`50 × 50`**, **`#ff0000`**, `border:none` with a **white** magnifier
  glyph (≈ 14.8 × 16), its square corners clipped into the pill's right cap, and it exposes an
  accessible name plus a real `focus-visible` ring (delta — the source paints none)
- **And** the field is **never hidden** at any width and submits without navigating away

### Feature: Dark bar and the centred row list

#### Scenario: Bar surface, height and tiers

- **Given** a viewport ≥ 992 px
- **When** the bar is measured
- **Then** its background is the **dark `#252525`**, it is full-bleed, `padding:0`, `z-index:3`,
  **no shadow**, **≈ 67.8 px** tall at `y = 288.4`, and `position:relative` (**never**
  `sticky`/`fixed`), so it scrolls away above the app's real content
- **And** its container has `15 px` gutters, `flex-wrap:nowrap` and `justify-content:space-between`,
  and the list is **centred by `margin:auto`** (measured `x = 502.6 → 937.3` at 1440 px)
- **And** the bar carries **no brand and no search field** (unlike the `-16` sibling)

#### Scenario: Row tokens

- **Then** the five rows are **11 px / 500 / uppercase / `letter-spacing:2px` / `#fff`** with
  **`padding:24px 20px`** → **67.8 px** tall, in source order: current · dropdown · three plain rows
  (own labels, at least one of which is the current page and one of which opens a dropdown)
- **And** the **current row is `#ff0000`** and does **not** wear any underline or slab
- **And** every row carries `aria-current` on the current one and a visible `focus-visible` ring

#### Scenario: The red hover underline — this variant's signature

- **Given** any non-current row
- **When** it is hovered
- **Then** a **`2 px` `#ff0000`** bar pinned to the row's bottom edge
  (`bottom:0; left:0; height:2px`) wipes in from `width:0` to `width:100%` over **`0.3s`**
- **And** the label simultaneously turns **`#ff0000`**
- **And** the underline is **not** full-height and **not** present on the current row

#### Scenario: No sticky behaviour

- **Given** the app rendered with real content below the chrome
- **When** the page is scrolled
- **Then** the chrome row and the bar leave the viewport (a negative `y`) and the app carries no
  `sticky`/`fixed` header rule

### Feature: Row dropdown

#### Scenario: Panel surface and geometry

- **Given** a viewport ≥ 992 px and the dropdown row hovered or activated
- **When** the panel is measured
- **Then** it is a **`160 px`**-wide white surface with `border:none`, **`border-radius:4px`**,
  `padding:8px 0`, `margin-top:2px`, `box-shadow:0 10px 34px -20px rgba(0,0,0,.41)`, anchored at the
  trigger's left edge (**measured 160 × 134.4 at `x = 583.6, y = 358.2`**)
- **And** its **four** items are **12 px / `#000` / `padding:4px 24px`** (29.6 px rows) with a
  **`#ff0000` hover fill and white ink**
- **And** the trigger keeps a rendered **`6 × 3` currentColor caret** after its label

#### Scenario: Behaviour and keyboard support

- **Then** `mouseenter`/`mouseleave` open and close the panel, `click` toggles it (with the
  viewport-overflow guard), `ArrowDown` on the trigger opens it and focuses the first item,
  `ArrowDown`/`ArrowUp` rove focus inside, `Escape` closes it and refocuses the trigger, and an
  outside click closes it
- **And** `aria-haspopup`/`aria-expanded`/`aria-controls` stay in sync throughout

### Feature: Mobile chrome and the in-flow panel

#### Scenario: Mobile bar surface and heights

- **Given** a viewport ≤ 991 px
- **When** the bar is measured
- **Then** its background is **`#000`**, its `padding` is **`10px 15px`**, its container gutters are
  **`0`**, it is **44.7 px** tall while collapsed (toggler + 10 px padding), and the list is hidden
- **And** the chrome row above it keeps its `78.4 px` height at 768–991 px with the circles **centred**
  in their column (`margin:0 auto`) and the search form clamped to its column
- **And** below **768 px** the chrome row **wraps** to **204.4 px** (brand line, then a full-width
  search line with a `16 px` bottom margin, then the centred circles with a `20 px` bottom margin)

#### Scenario: The toggler and the panel

- **Then** the toggler is the bar's **first** child, `border:none`, **`rgba(255,255,255,0.5)`**,
  uppercase **16 px**, `letter-spacing:.1em`, `padding:4px 0 4px 12px`, showing a real bars glyph
  (≈ 13.7 × 16) plus the word `MENU`, with `aria-expanded` in sync and a visible focus ring
- **And** activating it expands an **in-flow full-width** panel (`flex-basis:100%`, `ul` with
  `padding-bottom:10px`) whose height animates over **`0.35s ease`** (animation off under
  `prefers-reduced-motion: reduce`); collapsed it is `display:none`
- **And** the panel's five rows are **43.2 px** (`padding:11.2px 0`), ink
  **`rgba(255,255,255,0.7)`**, **`#fff`** on hover and on the current row, with a
  **`1px solid rgba(255,255,255,0.2)`** bottom rule **below 768 px only** (none at 768–991 px)
- **And** the panel measures **≈ 722 × 362.2** at 767 px and the expanded bar **≈ 407 px**

#### Scenario: The dropdown inside the panel

- **Then** below 992 px the dropdown renders **permanently expanded** in the panel
  (`display:block`, `position:static`, **`background:#000`**, `border-radius:4px` kept, items
  `rgba(255,255,255,0.8)`) — it is **not** a collapsed submenu
- **And** its `≈ 134.4 px` are part of the panel's height and its items remain real destinations

### Feature: Materialised destinations

#### Scenario: No dead links

- **Then** the recreation renders **zero** `href="#"` links — the source's **13** dead anchors (four
  circles, five rows, four dropdown items) all resolve to real targets in the app
- **And** the wordmark resolves to the top of the page

#### Scenario: Real content replaces the blank page

- **Then** the app has real content sections below the chrome with `scroll-margin-top` ≥ the chrome
  height (78.4 + 67.8 ≈ **147 px**) and imagery from
  `https://picsum.photos/seed/mizzen-<n>/<w>/<h>` (the source ships **no** images)

### Feature: Footer and attribution

#### Scenario: Component Dock credit

- **Then** the app's footer links **`https://www.componentdock.com/`** branded as
  **"Component Dock"** (the source has no footer)

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/mizzen/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/mizzen/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Spec validated (`npm run spec:validate`) and the app built only after this spec exists
- [ ] Page frame: `#fafafa` page, one band section with `padding:112px 0`, `28 px`/`400`/`#000`
  heading in a `50 %` column, chrome top edge at **210 px** at every width
- [ ] Chrome row is **`cl-container-fluid`-style**: `width:100%`, **no `max-width`**, gutters
  **`0 48px`** at ≥768 px (`0 15px` below), **78.4 px** tall (wordmark 48.4 + its `30 px` bottom
  margin) at `y = 210`, with the **circles column left** (`33.33 %`) and the **brand/search column
  right** (`66.67 %`, `order:13`)
- [ ] Wordmark: **two lines** (`20 px`/`700`/uppercase/`#000`/`line-height:1.2` + `12 px`/`500`/
  `rgba(0,0,0,0.3)` span), `padding:5px 0`, `margin-right:16px`, `margin-bottom:30px`,
  ≈ **147 × 48**, own strings
- [ ] Social row: **four `40 × 40` circles**, `1px solid #e6e6e6`, `border-radius:50%`, no
  background, `4 px` apart, **top-aligned** at the container's content left edge (`x = 48` at
  1440 px), hover fill `#ff0000` + white glyph; real glyphs (lucide + inline-SVG brand marks) with accessible names
  (the source's are **blank** — delta)
- [ ] Search field: **`300 × 50`** at ≥992 px (clamped below), `border-radius:40px`,
  `overflow:hidden`, `1px solid rgba(255,255,255,0.1)` ring, input `calc(100% - 50px)`/`50 px`/
  `border:none`/`#fff`/`rgba(0,0,0,.7)`/`14 px`, submit **`50 × 50` `#ff0000`** with a white
  magnifier clipped into the pill cap, real label + `focus-visible` ring, never hidden
- [ ] Bar: **`#252525`** at ≥992 px (**`#000`** below), `padding:0`, `z-index:3`, **no shadow**,
  **67.8 px** at `y = 288.4`, `position:relative` (**zero** `sticky`/`fixed`), container gutters
  `15 px`, `flex-wrap:nowrap`, no brand and no search inside the bar
- [ ] Rows: **five**, `11 px`/`500`/uppercase/`letter-spacing:2px`/`#fff`, `padding:24px 20px` →
  **67.8 px**, **centred by `margin:auto`** (≈ 487.6 px per side at 1440 px), current row
  **`#ff0000`** with **no** underline, hover → **`2 px` `#ff0000` bottom underline wiping 0 → 100 %
  over `0.3s` + red label**, `aria-current` on the current row, `focus-visible` rings
- [ ] Dropdown: white, `border:none`, **`border-radius:4px`**, `min-width:160px`, `padding:8px 0`,
  `margin-top:2px`, `0 10px 34px -20px rgba(0,0,0,.41)`, **four** `12 px` `#000` items
  (`padding:4px 24px` → 29.6 px) with a `#ff0000` hover fill + white ink, rendered **`6 × 3`**
  currentColor caret on the trigger, all four items real destinations,
  hover + click + `ArrowDown`/`ArrowUp` + `Escape` (refocuses the trigger) + outside click, with
  `aria-haspopup`/`aria-expanded`/`aria-controls` in sync
- [ ] Mobile (≤991 px): bar **`#000`**, `padding:10px 15px`, container gutters **0**, **44.7 px**
  collapsed and **≈ 407 px** expanded; toggler **first in the bar DOM**, `rgba(255,255,255,0.5)`,
  uppercase `16 px`, `letter-spacing:.1em`, `padding:4px 0 4px 12px`, real bars glyph,
  `aria-expanded` in sync, visible focus ring; panel `flex-basis:100%`, height-animated `0.35s`
  (off under reduced motion), rows **43.2 px** (`padding:11.2px 0`) in
  `rgba(255,255,255,0.7)` / `#fff` when current or hovered, bottom rule
  `1px solid rgba(255,255,255,0.2)` **below 768 px only**, `ul` `padding-bottom:10px`;
  **dropdown permanently expanded** (`position:static`, `background:#000`, items
  `rgba(255,255,255,0.8)`, 4 px radius kept)
- [ ] Chrome row below 768 px **wraps** to **204.4 px** (brand line → full-width search with a
  `16 px` bottom margin → centred circles with a `20 px` bottom margin); at 768–991 px it stays
  **78.4 px** with the circles centred (`margin:0 auto`) and the search clamped to its column
  (204 px at 768, 261 px at 991)
- [x] Zero `colorlib` / "Website Menu V17" / `website-menu-17` strings in `apps/mizzen` (comments
  included); none of the source's row labels, its `Logistica`/`Architecture Agency` wordmark, its
  four placeholder item strings or its `Website menu #07` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead —
  247,856 B = 95.5 % of the 259,630 B download), no inline SVG paths from the preview, no
  `cl-`/`ftco-` utility classes, no jQuery/Bootstrap, no Font Awesome
- [ ] Dead source code dropped: the `:where(html) … all: revert` reset, the `@media print` block
  (incl. `@page{size:a3}`), the Bootstrap palette, the base system `Roboto` body stack, the
  `cl-bg-dark`/`cl-navbar-dark` colour layers, the unused `.fade` /
  `.cl-dropdown-menu-right` / `.cl-nav-link.disabled` rules, the `cl-order-lg-last` class on the
  search form, the `[data-toggle="panel-collapse"]` script branch, and all Roboto woff2 files
- [ ] Documented deltas recorded in the PR: new name + own wordmark, own row labels and dropdown
  menu, the thirteen dead `href="#"` materialised, real glyphs (inline-SVG socials, lucide magnifier,
  bars, caret) instead of the inline SVG paths and the missing icon font, a real Google Fonts
  Poppins `<link>` instead of eight dead self-hosted Roboto files, restored hover/`focus-visible`
  affordances, `aria-current` on the current row, keyboard dropdown support, reduced-motion
  handling, a working search interaction, the blank filler page replaced with real content, and the
  added footer
- [ ] `scripts/verify-app.sh mizzen` green (typecheck + lint + knip + fallow + vitest 100 % +
  build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace; footer
  attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 17` item `[x]` with the live
  `https://mizzen.free.componentdock.com` URL + homepage and run `npm run readme:status`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
