# Template: Sponson (Website Menus)

## Purpose

Sponson is the *Website Menus* family's **left side-rail variant** — the first sibling whose menu is a
**fixed vertical sidebar pinned to the left edge at `width:20%` / `height:100dvh`** rather than a
horizontal bar, and the family's first **off-canvas drawer**: below **`992 px`** the rail slides out
of the viewport (`translateX(-270px)`) and a fixed hamburger toggle pulls it back in over or beside
the content. The page is the family's usual **`#fafafa`** surface with the usual **`"Poppins", Arial`
stack on a `16 px`/`1.8` body in `gray`**, but the layout inside is entirely its own: the rail is
**`#fff`** with `padding:3em 3em 40px`, it holds a six-row list of **`22 px`/`500` `black`** labels
at `line-height:1.5` (`33 px` rows, `margin:0 0 10px 0`), each label **`padding:10px 0`** and
`position:relative`, and the variant's accent **`#ff6768`** appears exactly twice — as the **generic
link colour** and as the **current row's ink**, which also wears a **`2 px` `#ff6768` underline**
(`a::after`, `bottom:7px`, `left:0; right:0`) that is `visibility:hidden` + `scaleX(0)` at rest and
wipes in over **`0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)`** on hover/current. To the rail's
right, **`div#colorlib-main`** (`float:right`, `width:80%`, `padding:40px`) carries the family's
content band: one **`32 px`/`400`/`#000`** heading, a grey lead paragraph, then a **two-column row**
of `24 px`/`400`/`#000` sub-headings over grey paragraphs, all inside a
`section.ftco-section.cl-pt-4.cl-mb-5` (`padding:24px 0 112px`, `margin-bottom:48px`) whose fluid
container is **edge-to-edge at ≥768 px** (`cl-px-md-0`) and `16 px`-padded below it. The mobile
chrome is the sheet's `colorlib-nav-toggle`: a **fixed burger at `left:-12px; top:0`**,
`z-index:9999`, `padding:20px`, `visibility:hidden` at rest and **visible only below `991.98 px`**,
drawn as a **`30 × 2` `#000` bar with `::before`/`::after` bars 7 px above/below** that spread to
10 px on hover and rotate to an **X** (`cl-active`). Opening it adds **`body.offcanvas`**, which
slides the rail to `translateX(0)` and both `#colorlib-main` and the toggle to
**`translateX(270px)`** over **`0.5s`** — a push, not an overlay. The source page holds **nothing
else**: no images at all (the archive ships **no `images/` folder**), no cards, no buttons, no
footer, no second page, and it is **shorter than the viewport** at desktop widths. All **7** of its
anchors are dead `href="#"`.

It is an original React recreation of the ColorLib free snippet **"Website Menu V19"** (source slug
`website-menu-19`), built under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript. The recreation matches the source's structure, order and design tokens 1:1 but
copies no asset (no `style.css`, no `snippet.js`, no `roboto-*.woff2`, no inline SVG `<path>` data,
no text verbatim) and never reuses the source name.

- **Source:** https://colorlib.com/wp/template/website-menu-19/ — page title *"Website Menu V19 -
  Free Left Sidebar Menu Template 2026 - Colorlib"*, **HTTP 200**, **108,966 B**, sha256
  `0fe954c5fba0103ee3d77e108f8f8fb6ac29d6f7be8980af4238c33346ecd73d`, verified 2026-10-12. Page meta:
  posted **March 9, 2021** (structured data `datePublished` **2021-03-09T14:30:29+00:00**),
  `dateModified` **2026-09-25T10:42:07+00:00** (the September 2026 rebuild); ColorLib's own
  description: *"The best free left sidebar menu template that offers off-canvas navigation on
  mobile-devices for a consistent user experience."* September 2026 update note (verbatim):
  *"Updated September 2026: this snippet is now plain HTML and CSS plus a few lines of vanilla
  JavaScript: no jQuery, no Bootstrap files, no plugins. The download is 250 KB (it was 266 KB).
  Use it on its own, or drop it into a Bootstrap 4, 5 or 6 project and it looks the same. The mobile
  menu and sticky header work without jQuery."* It is the `## Website Menus (20)` section's
  **nineteenth** entry, at **line 3091** of `TEMPLATES.md`; the slug `website-menu-19` appears
  exactly **once** in `TEMPLATES.md` and in **no** spec on `main` before this one.
- **Preview:** `https://preview.colorlib.com/theme/website-menu-19/` returns **HTTP 404** (`Not
  Found`) — like its `-01`…`-18` siblings, the *Website Menus* family does **not** live under the
  slug-only theme path; do not read that 404 as a dead preview. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-19/`** (**HTTP 200**,
  `text/html; charset=utf-8`, **2,355 B**, `<title>Website menu 09</title>`, sha256
  `74786d30eec3d1d446bc92a48f6a4842a9e84911fc420e93e8f4e2e86f431e15`, verified 2026-10-12) — the URL
  the preview host's catalog index records for this slug. Its two assets —
  `css/style.css?v=f7ba3f1d` (**13,527 B**, `text/css`, sha256
  `97cbf12e70fd537827cb0b7a0dcf31f58e9f03eaba15ae81637d7241319f2007`) and
  `js/snippet.js?v=a424998b` (**1,669 B**, `application/javascript`, sha256
  `d8d1aec7a71647612df9f0d8afd1b58589965e669adaa659e07ee63be7d7d838`) — are **byte-identical** (same
  sha256, verified) to the copies in the snippet's own downloadable archive
  `https://preview.colorlib.com/downloads/free/website-menu-19.zip` (**HTTP 200**, `application/zip`,
  **256,269 B**, sha256 `fba1429c0de8d0b1a256888b9ba553cf08a774c89b8b5a99f31ccd4fc3ca56a8`; ColorLib
  rounds this to "250 KB"), which ships `index.html` (**2,152 B**), `css/style.css`,
  `js/snippet.js`, `README.md` (**1,264 B**) and **eight** Roboto woff2 files (100/300/400/700 ×
  latin/latin-ext — **247,856 B = 93.0 %** of the 266,468 B uncompressed archive). The `diff` between
  the live page and the archive `index.html` is **head-only** (the preview host's two `noindex`
  metas, a `cdnjs.cloudflare.com` `dns-prefetch`, `fetchpriority="high"`, and the cache-busting query
  strings) — the archive is the readable, un-versioned twin of the live preview. Both were read for
  this spec and the live render was cross-checked in a browser at 1440, 991, 767 and 375 px plus the
  open off-canvas state (see Design reference).
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-19.jpg
  (**HTTP 200**, served as **AVIF** despite the `.jpg` name, 26,121 B, 1200 × 972, sha256
  `ae8241ee7fe693ab5bf280767c9d286020ecb20c4653fb67cdedf61a3e2230be`, converted to PNG and inspected
  visually 2026-10-12). No screenshot-only fallback was needed — the live preview is the primary
  reference and the archive its readable twin. The screenshot is a browser-chrome mock of the
  rendered page: a **white left sidebar** carrying the six-row menu (**`Home` in coral with a coral
  underline underneath** — the current row — then `Project` · `About` · `Services` · `Blog` ·
  `Contact` in black), and to its right the content column: the black heading **`Website menu
  #09`**, a grey lead paragraph, then **two side-by-side `Heading Two` blocks** each over a grey
  paragraph. The rest of the page is empty `#fafafa`. The burger is **not** visible in the mock
  (it is `visibility:hidden` above `991.98 px`).
- **New name:** `sponson` (apps/sponson, `@free-react-templates/sponson`) — a *sponson* is a
  **projection built out from the side of a hull**: a side platform or wing that hangs off the
  vessel's flank, which suits this variant as the family's **first menu that is a side rail fixed to
  the page's left edge and slides out over the side (off-canvas) on narrow screens**. It continues
  the family's nautical run: **menutree** (`-01`), **slidenav** (`-02`), **navpill** (`-03`),
  **menuribbon** (`-04`), **starboard** (`-05`), **larboard** (`-06`), **topdeck** (`-07`),
  **bowsprit** (`-08`), **gangway** (`-09`), **halyard** (`-10`), **ensign** (`-11`), **gunwale**
  (`-12`), **capstan** (`-13`), **windlass** (`-14`), **davit** (`-15`), **binnacle** (`-16`),
  **mizzen** (`-17`), **spinnaker** (`-18`). Single lowercase word, kebab-safe (no hyphen needed).
  Verified 2026-10-12: `git grep -il sponson origin/main` returns **zero** hits (no app folder,
  spec, doc file or `TEMPLATES.md` name collides) and no `apps/`, `openspec/specs/` or
  `docs/templates/` entry uses the word. The source name "Website Menu V19", its six row labels
  (`Home`, `Project`, `About`, `Services`, `Blog`, `Contact`), its `Website menu #09` heading and its
  `Heading Two` sub-headings are never reused.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Website Menu V19" (source slug `website-menu-19`,
  https://colorlib.com/wp/template/website-menu-19/), `datePublished` **2021-03-09**, rewritten in the
  2026 build to plain HTML + CSS + vanilla JS with **no jQuery, no Bootstrap files**. Design-wise
  this is the family's **"fixed left side rail (20 %) + floated 80 % content column + push-style
  off-canvas drawer below 992 px"** variant. Its accent is **`#ff6768` coral** — the sheet's own `a`
  colour and the current row's ink and underline — and it is the family's **only variant with a
  vertical, full-height, position-`fixed` menu**: the sheet contains **three** `fixed` declarations
  (the rail, the toggle) and **zero** `sticky` ones. The page contains **only** the rail and the
  content band.
- **CSS namespace:** the sheet (**13,527 B**, **690** lines, **111** `{` blocks, **13** `@media`
  blocks (6 width queries + 2 `print` + 5 `prefers-reduced-motion` + 1 `@supports`), **4**
  `@font-face` blocks), self-contained and `cl-`-prefixed for its utilities (`cl-container-fluid`,
  `cl-row`, `cl-col-md-6`, `cl-col-md-12`, `cl-icon`, `cl-mb-4`, `cl-mb-5`, `cl-px-3`, `cl-px-md-0`,
  `cl-pt-4`, `cl-h2`, `cl-h4`, plus the `.nav` base) and is a hand-rolled Bootstrap-4-look-alike —
  **not** a framework skin. Its first ~55 lines are a `:where(html) … all: revert` reset (so the
  snippet renders identically inside a Bootstrap host page), then the normalize, the framework base
  (utility container/row/col classes, the utilities, the Bootstrap palette, `@media print` incl.
  `@page{size:a3}`), the `@font-face` block, and then the ~350-line custom block (`body`, `body`
  `.offcanvas` rules, `a`, `h1/h2/h4`, `.ftco-section`, `#colorlib-page`, `#colorlib-aside` + its
  three `@media`/reduced-motion blocks and the `#colorlib-main-menu` descendant rules,
  `#colorlib-main` + its width/reduced-motion blocks, `.colorlib-nav-toggle` + its `i`/`::before`/
  `::after`/hover/`cl-active` rules and its `fixed`/mobile blocks, `.js-fullheight` +
  `@supports (height:100dvh)`). The word `colorlib` appears **53** times (all in the `colorlib-`
  class/id namespace, which the recreation must not reuse).
- **Diff against the `-18` sibling's sheet (17,508 B)** — 3,981 B smaller, and the differences are
  exactly this variant's identity: the `-18` sibling's mega-menu/mega-card block (`.img`,
  `.cl-dropdown*`, `.cl-navbar*`, `.cl-collapse*`, `.cl-position-static`, `.cl-p-4`,
  `.cl-d-none`/`.cl-d-md-block`, `.cl-col-md-3`, `.cl-ml-auto`) is **entirely absent**; this sheet
  adds instead `#colorlib-aside` / `#colorlib-main` / `#colorlib-page` / `#colorlib-main-menu` /
  `.colorlib-nav-toggle` / `.js-fullheight` / `body.offcanvas`, the `@supports (height:100dvh)`
  rule, the `a::after` underline animation and **five** `prefers-reduced-motion` blocks; the accent
  swaps **`#fec771` amber → `#ff6768` coral**; the chrome moves from an **inset rounded navy bar**
  (`#1c2938`, `padding:10px`, `border-radius:5px`, a box-shadow) to a **square, shadowless,
  full-height white rail** (`border-radius` and `box-shadow` appear **nowhere** in this sheet); the
  heading band's `112 px` top padding is **overridden by `cl-pt-4` to `24 px`** while the `48 px`
  block margin (`cl-mb-5`) stays; and the whole dropdown machinery is replaced by the
  `offcanvas`-class push drawer.
- **HTML structure (live preview, 2,355 B — archive twin 2,152 B):** document order is exactly —
  (1) `div#colorlib-page` (`width:100%`, `overflow:hidden`, `position:relative`) wrapping everything,
  (2) inside it `a.js-colorlib-nav-toggle.colorlib-nav-toggle[href="#"]` › `i` (the burger),
  (3) `aside#colorlib-aside.js-fullheight[role="complementary"]` ›
  `nav#colorlib-main-menu[role="navigation"]` › `ul` with **six** `li` in source order — **Home**
  (`li.colorlib-active`) · **Project** · **About** · **Services** · **Blog** · **Contact** — each
  holding one `a[href="#"]`,
  (4) `div#colorlib-main` › `section.ftco-section.cl-pt-4.cl-mb-5.ftco-intro` ›
  `div.cl-container-fluid.cl-px-3.cl-px-md-0` › `div.cl-row` with **three** children —
  `div.cl-col-md-12.cl-mb-4` (the `h1.cl-h2` reading **`Website menu #09`** + one `p`), then **two**
  `div.cl-col-md-6`, each holding an `h2.cl-h4` reading **`Heading Two`** + one `p`,
  (5) `script`.
  - **A stray tag to drop:** the source markup closes with an **orphan `</section>`** between
    `</div><!-- END COLORLIB-PAGE -->` and the `script` (left over from the template it was cut
    from). It is invalid and must **not** be reproduced.
  - **Anchors:** the page holds **7** anchors — the toggle plus the six menu labels — and **all 7**
    are dead `href="#"`. There is no second page to probe; the recreation must materialise all of
    them.
- **Measurements (live preview, Chromium, DPR 1, read 2026-10-12; the sheet was fetched by curl
  **and** by the browser and the two copies are byte-identical, sha256 `97cbf12e…`, so every token
  below is confirmed by the source CSS, and the geometry figures were **cross-checked against the
  rendered pixels** of screenshots at 1440 and 375 px. Standing caveats for this family: a
  `getComputedStyle` read taken right after a CDP `Emulation.setDeviceMetricsOverride` can return a
  **stale pre-override value** — re-load the page after the override, and treat screenshot pixels as
  geometry authority; and a synthetic click on the toggle right after the override leaves the rail
  mid-transition, so re-read after the `0.5s` transition settles.)
  - **`body`:** `font-family:"Poppins", Arial, sans-serif`, `font-size:16px`, `line-height:1.8`
    (`28.8 px`), `font-weight:normal`, **`background:#fafafa`**, **`color:gray`** (= `#808080`),
    `margin:0`, `text-align:left`. Its measured `height` is `592.8 px` at 1440 px — the page is
    **shorter than the 900 px viewport**.
  - **`#colorlib-page`:** `width:100%`, `overflow:hidden`, `position:relative` — the positioning
    context for the whole snippet.
  - **The rail (`aside#colorlib-aside`):** `position:fixed`, `bottom:0; top:0; left:0; right:0`,
    **`width:20%`** (`288 px` at 1440), **`height:100vh`/`100dvh`** (`.js-fullheight !important`,
    with the `@supports (height:100dvh)` override), `overflow-y:hidden`, **`z-index:1001`**,
    **`background:#fff`**, `padding:3em 3em 40px` = **`48px 48px 40px`**,
    `transition:0.5s` (disabled under `prefers-reduced-motion: reduce`). Measured
    **`288 × 900 @ x = 0, y = 0`** at 1440 px.
  - **The menu (`nav#colorlib-main-menu > ul`):** `ul{margin:0; padding:0}`; the nav sits at the
    rail's content origin — measured **`192 × 248 @ x = 48, y = 48`**. Six `li`
    (`margin:0 0 10px 0`, `padding:0`, `list-style:none`, **`font-size:22px`**,
    **`font-weight:500`**, `line-height:1.5` → **`33 px`** rows): row tops measured
    **48 / 91 / 134 / 177 / 220 / 263** — i.e. `33 + 10` per row, and the list is **`248 px`** tall.
  - **Menu links (`li > a`):** `color:black`, `text-decoration:none`, `position:relative`,
    **`padding:10px 0`**, `font-family:"Poppins", Arial, sans-serif`, `transition:0.3s` (off under
    reduced motion) → measured link box **`58.7 × 45`** for `Home` at `y = 42` (the `10 px` padding
    extends above the `33 px` row). The **current** row's link is **`#ff6768`** (`li.colorlib-active
    > a`); the others are `black`.
  - **The underline (`li > a::after`):** `content:""`, `position:absolute`, **`height:2px`**,
    **`bottom:7px`**, `left:0; right:0`, **`background-color:#ff6768`**, `visibility:hidden`,
    `transform:scaleX(0)`, `transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)` — measured
    on the current row as `visibility:visible`, `scaleX(1)`, `2 px`, `bottom:7px`,
    `rgb(255,103,104)`. `:hover` sets `visibility:visible` + `scaleX(1)` and keeps `color:black`;
    `li.colorlib-active > a` sets the coral ink **and** the permanently visible underline.
  - **The content column (`#colorlib-main`):** `width:100%`, `float:right`, `transition:0.5s`
    (off under reduced motion), **`padding:40px`**, **`width:80%`** at ≥992 px. Measured
    **`1152 × 592.8 @ x = 288, y = 0`** at 1440 px.
  - **The content band (`section.ftco-section.cl-pt-4.cl-mb-5.ftco-intro`):**
    `section.ftco-section{padding:7em 0}` = `112px 0`, **overridden on the top by `cl-pt-4`**
    (`padding-top:1.5rem !important` = **`24 px`**) and given `cl-mb-5`
    (`margin-bottom:3rem !important` = **`48 px`**); measured `padding:24px 0px 112px` and
    **`1072 × 464.8 @ x = 328, y = 40`** at 1440 px.
  - **The container (`div.cl-container-fluid.cl-px-3.cl-px-md-0`):** `width:100%;
    padding-right:15px; padding-left:15px; margin:auto` with `cl-px-md-0` zeroing both sides at
    ≥768 px and `cl-px-3` (`1rem`) as the sub-768 value. Measured **`1072 × 328.8 @ x = 328,
    y = 64`, `padding:0`** at 1440 px; **`padding:0 16px`** at 767 px and **`padding:0 16px`** at
    375 px (so the band is **edge-to-edge at ≥768 px** — there is no container tier in this sheet,
    only the fluid container).
  - **The row (`div.cl-row`):** `display:flex; flex-wrap:wrap; margin:0 -15px` — measured
    **`1102 @ x = 313`** (328 − 15) at 1440 px.
  - **The heading (`h1.cl-h2`):** the custom block's `h1,h2,h4{line-height:1.5; font-weight:400;
    font-family:"Poppins", Arial, sans-serif; color:#000}` beats the framework's `h1{font-size:2.5rem}`
    for weight/colour, and `.cl-h2{font-size:2rem}` sets **`32 px`**. Measured **`32 px`/`400`/
    `line-height:48px`/`#000`**, box **`1072 × 48 @ x = 328, y = 64`** at 1440 px (`h1` wraps to
    **`96 px`** / two lines at 375 px). `margin-bottom:0.5rem` (8 px) survives.
  - **The lead paragraph (`p`):** framework `p{margin-top:0; margin-bottom:1rem}`; measured
    **`16 px`/`28.8 px`/gray**, box **`1072 × 57.6 @ x = 328, y = 120`** (two lines) at 1440 px.
  - **The `cl-col-md-12` wrapper:** `flex:0 0 100%; max-width:100%` at ≥768 px (100 % below),
    `padding:0 15px`, plus `cl-mb-4` (`margin-bottom:1.5rem !important` = **`24 px`**) — which is
    what puts the two-column row's top at **`y = 217.6`** at 1440 px (64 + 48 + 8 + 57.6 + 24 + 16
    margin-collapse accounting: measured `col6.y = 217.6`).
  - **The two sub-blocks (`div.cl-col-md-6`):** `flex:0 0 50%; max-width:50%` at ≥768 px,
    `padding:0 15px`, `position:relative`; **100 %** (stacked) below 768 px. Measured
    **`551 × 175.2 @ x = 313, y = 217.6`** and `x = 864` at 1440 px (content width **`521 px`**);
    **`685 × 146.4 @ x = 41`** (stacked) at 767 px; **`278 × 290.4 @ x = 41`** at 375 px.
  - **The sub-heading (`h2.cl-h4`):** **`24 px`** (`.cl-h4{font-size:1.5rem}`) / `400` /
    `line-height:36px` / `#000`; measured **`521 × 36 @ x = 328, y = 217.6`** at 1440 px.
  - **The burger toggle (`a.colorlib-nav-toggle`):** `position:fixed`, **`left:-12px`**,
    **`top:0`**, **`z-index:9999`**, `cursor:pointer`, `opacity:1`, **`visibility:hidden`**,
    **`padding:20px`**, `transition:0.5s` (off under reduced motion) — measured
    **`70 × 68.8 @ x = -12, y = 0`** at every width; becomes visible below **`991.98 px`**. Its
    `i` is a **`30 × 2`** inline-block bar in **`#000`** (`font:bold 14px/.4 Helvetica`,
    `text-transform:uppercase`, `text-indent:-55px`) with `::before` (`top:-7px`) and `::after`
    (`bottom:-7px`) bars of the same `30 × 2` `#000`; `:hover` spreads them to `-10px`/`-10px`; with
    `cl-active` the middle bar goes **`background:transparent`** and the two outer bars rotate
    **`rotateZ(45deg)`** / **`rotateZ(-45deg)`** into an X in **`#000`**; all bar transitions are
    `0.2s` (off under reduced motion).
  - **Page height / overflow:** at 1440 × 900 `documentElement.scrollHeight === clientHeight`
    (900 = 900) and `scrollWidth === innerWidth` (1440 = 1440); at 375 × 800 the document grows to
    **`1190 px`** (the stacked content band). **All 7** anchors are dead `href="#"`.
- **Assets:** the snippet ships **no images at all** — the archive has **no `images/` folder** and
  the sheet references **no** `url(...)` other than the four `@font-face` sources. The only files
  besides the markup/CSS/JS are the **eight Roboto woff2 files** (247,856 B = **93.0 %** of the
  266,468 B archive). The sheet declares `@font-face` for **400/700 only** (`roboto-100-*` and
  `roboto-300-*` are shipped but never declared) and **never asks for Roboto anywhere**; the live
  page's only `<link>` is the sheet itself (plus a `cdnjs.cloudflare.com` `dns-prefetch` that is
  never used), so **no webfont is loaded at all** and `"Poppins", Arial, sans-serif` resolves to
  **Arial**. The page background is still `#fafafa` from the sheet's own `body` rule (which beats
  the framework base's `#fff`).

## Breakpoint behaviour (values measured on the live preview and derived from its sheet)

| Width | Rail | Main column | Container | Menu | Toggle | Off-canvas (open) |
| --- | --- | --- | --- | --- | --- | --- |
| 375 | `270 × 800`, `#fff`→ off-canvas, `padding:32px 48px 40px` | `360 @ x = 0`, `padding:40px` | `280 @ x = 40`, `padding:0 16px` | column, **33 px** rows stacked | `70 × 68.8 @ x = -12` visible | `body.offcanvas`: rail `translateX(0)` `#fff` `z:999`; main+toggle `translateX(270px)` |
| 767 | `270 × 900`, off-canvas (`translateX(-270px)`), `rgba(0,0,0,0.04)`, `padding:32px 48px 40px` | `767 @ x = 0`, `padding:40px` | `687 @ x = 40`, `padding:0 16px` | column, 33 px rows; two sub-blocks **stack** (`685` each) | visible | push **270 px** / `0.5s` |
| 991 | `270 × 900`, off-canvas, `rgba(0,0,0,0.04)` | `991 @ x = 0` | `911 @ x = 40` | column, 33 px rows; sub-blocks **side by side** (`470.5` each) | visible | push 270 px |
| 992 | **`198.4 × 900`** (20 %), **`#fff`**, `padding:48px 48px 40px`, in place | `793.6 @ x = 198.4` (80 %) | `713.6 @ x = 238.4` | column, 33 px rows centred in the rail | **`visibility:hidden`** | n/a (rail never moves) |
| 1440 | `288 × 900` (20 %), `#fff`, `padding:48px 48px 40px` | `1152 @ x = 288` (80 %), `padding:40px` | `1072 @ x = 328`, `padding:0` | `192 × 248 @ x = 48, y = 48`; rows at 48/91/134/177/220/263 | hidden | n/a |

Three things flip at **`991.98 px`**: the rail leaves its `20 %` in-flow position for a **`270 px`
fixed drawer translated `-270 px`** whose surface turns **`rgba(0,0,0,0.04)`** with `padding-top:2em`,
the **toggle becomes visible**, and the drawer's `#fff` + `z-index:999` + `translateX(0)` treatment
only applies while **`body.offcanvas`** is set (which also pushes `#colorlib-main` and the toggle by
**`270 px`**, all over `0.5s`). A fourth flips at **`768 px`**: the container's `cl-px-md-0` zeroes
its `15 px` gutters (so the band runs edge-to-edge) and `cl-col-md-6` goes **50 % → 100 %**, stacking
the two sub-blocks. There is **no** container tier (this sheet only ships `cl-container-fluid`), no
`border-radius` and no `box-shadow` anywhere.

## Type and colour summary

- `body{font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8;
  font-weight:normal; background:#fafafa; color:gray}` (`gray` = **`#808080`**). The framework base
  declares a **system** stack and `background-color:#fff` first, but the custom block's `body` rule
  comes later and wins — the page is **`#fafafa`**.
- `a{transition:.3s all ease; color:#ff6768}` — **generic links are the coral accent**; the custom
  block also kills `text-decoration` and outlines (`a:hover,a:focus{text-decoration:none !important;
  outline:none !important; box-shadow:none}`) → restore hover/focus affordances (delta). Menu links
  override to `black` (rest) / `#ff6768` (current).
- `h1,h2,h4,.h1,.cl-h2,.cl-h4{line-height:1.5; font-weight:400; font-family:"Poppins", Arial,
  sans-serif; color:#000}` + `.cl-h2{font-size:2rem}` (**32 px**) + `.cl-h4{font-size:1.5rem}`
  (**24 px**) — the custom weight/colour beat the framework's `font-weight:500; color:#212529`.
- `#colorlib-aside #colorlib-main-menu ul li{font-size:22px; font-weight:500; line-height:1.5}` and
  `… li a{color:black; padding:10px 0}`.
- Token table: accent coral **`#ff6768`** (generic links, current menu ink, the `2 px` underline) ·
  page **`#fafafa`** · body ink **`gray`/`#808080`** · rail desktop **`#fff`** / mobile-closed
  **`rgba(0,0,0,0.04)`** / mobile-open **`#fff`** · headings **`#000`** · menu labels **`black`**
  (current `#ff6768`) · toggle bars **`#000`** · radii: **none anywhere** (`border-radius` appears
  **zero** times) · shadows: **none anywhere** (`box-shadow` only in the `a:hover` reset and the
  `@media print` reset) · transitions: rail/main **`0.5s`**, menu link **`0.3s`**, underline
  **`0.3s cubic-bezier(0.175,0.885,0.32,1.275)`**, toggle bars **`0.2s ease-out`**/`0.2s`, all
  honoured under `prefers-reduced-motion: reduce` (animation off).

## Fidelity pitfalls (things that will bite an implementer)

1. **The rail is a fixed, full-height, `20 %`-wide white column — not a bar.** `position:fixed;
   top:0; bottom:0; left:0; right:0; width:20%` plus `height:100vh`/`100dvh` and
   `overflow-y:hidden`. Copying the `-17`/`-18` siblings' horizontal chrome is the single easiest way
   to break this template.
2. **`#colorlib-main` is `float:right` at `80 %` and is pushed by the drawer, not covered by it.**
   The source is a **push** off-canvas (`transform:translateX(270px)` on `#colorlib-main` and the
   toggle), **not** an overlay with a backdrop. There is **no** backdrop, **no** `overflow:hidden` on
   `body` when open (only sidebar.offcanvas sets `overflow-x`), and opening is a **`body.offcanvas`**
   class toggle.
3. **The accent is `#ff6768` coral** — not the `-18` sibling's `#fec771` amber, not the `-17`
   sibling's `#ff0000` red and not the `-16` sibling's gold `#f1bc31`.
4. **The current row is marked `li.colorlib-active`** and is the *only* row with coral ink **and** a
   permanently visible `2 px` underline; every other row is `black` and only shows the underline on
   hover. The underline is `bottom:7px`, `height:2px`, full row width (`left:0; right:0`) and wipes
   in from `scaleX(0)` on a **springy** `cubic-bezier(0.175, 0.885, 0.32, 1.275)`.
5. **Rows are `22 px`/`500`/`line-height:1.5` → `33 px`, with `margin:0 0 10px 0`** so the list's
   pitch is **43 px** and the whole `ul` is **`248 px`**. The link itself is `padding:10px 0` →
   **`45 px`** tall (it overhangs its `li` by 10 px top and bottom).
6. **The heading band's top padding is `24 px`, NOT `112 px`** — `cl-pt-4`
   (`padding-top:1.5rem !important`) beats `.ftco-section{padding:7em 0}`. The bottom stays
   **`112 px`** and `cl-mb-5` adds a **`48 px`** block margin. Getting this wrong moves every element
   below it.
7. **The container has NO tier** — `cl-container-fluid` is `width:100%` with `15 px` gutters, and
   `cl-px-md-0` zeroes them at ≥768 px, so the band is **edge-to-edge** at desktop. There is no
   `1140/960/720/540` max-width in this sheet; do not import one.
8. **The toggle is `left:-12px; top:0` at `z-index:9999` and `visibility:hidden` at rest** — it is
   **not** inside a bar and at desktop widths it must not occupy the layout or be focusable. It is
   drawn as three `30 × 2` `#000` bars (the middle one is the `i` element itself; `::before`/`::after`
   are the outer two, 7 px out, 10 px on hover) and becomes an **X** via
   `rotateZ(±45deg)` + `background:transparent` on the middle bar under `cl-active`.
9. **The drawer pushes `270 px`, but the rail is `270 px` wide only below `991.98 px`** — the `20 %`
   width and the `270 px` width are different rules for different breakpoints; mixing them breaks
   either the desktop rail or the mobile push distance.
10. **The mobile-closed rail surface is `rgba(0,0,0,0.04)`, not `#fff`** (`@media (max-width:991.98px)
    #colorlib-aside{background:rgba(0,0,0,0.04)}`), and it becomes `#fff` only while
    `body.offcanvas`. Do not paint the closed drawer white.
11. **`prefers-reduced-motion: reduce` is honoured in five separate blocks, covering four rule
    groups** (rail `0.5s`, main `0.5s`, menu link `0.3s`, and the toggle — whose bars `0.2s` and
    whose own `0.5s` are two of the five blocks) — the recreation must disable these animations
    too (delta: an implemented concern the source already gets right).
12. **The sub-blocks stack at `768 px`** (`cl-col-md-6` 50 % → 100 %) while the container's gutters
    vanish at the same breakpoint — both come from `@media (min-width:768px)`, but the stacking is
    the *default* (sub-768) state.
13. **All `7` anchors are `href="#"`** and the page has no second view — every one must be
    materialised in the recreation.
14. **The stray `</section>`** after `#colorlib-page` closes an element that was never opened — drop
    it.
15. **No webfont ships**, so the source renders Arial: add one Google Fonts `<link>` for Poppins
    (delta) rather than copying eight dead Roboto woff2 files (247,856 B = 93.0 % of the archive).
16. **There are no images in this snippet at all** — no `images/` folder, no `background-image`. Any
    imagery in the recreation is added content and must come from
    `https://picsum.photos/seed/sponson-<n>/<w>/<h>`.
17. **Dead code to drop:** the `:where(html) … all: revert` reset, the `@media print` block (incl.
    `@page{size:a3}` and `body{min-width:992px}`), the `.nav` base rule, the Bootstrap palette
    (`#007bff` links, `#0056b3` hover, `#212529` ink), the base system body stack, the
    `a:not([href]):not([tabindex])` rules, the `::-webkit-file-upload-button` rule, the
    `text-indent:-55px` / `font:bold 14px/.4 Helvetica` on the toggle's `i`, the orphan `</section>`,
    and all eight Roboto files.

## Requirements

### Feature: Page frame and the fixed side rail

#### Scenario: Rail geometry and surface

- **Given** a viewport ≥ 992 px
- **When** the rail is measured
- **Then** it is a **`position:fixed` full-height column at `width:20%`** (measured
  **`288 × 900 @ x = 0, y = 0`** at 1440 px), pinned `top:0; bottom:0; left:0`, with
  **`height:100vh`** (and `100dvh` behind `@supports`), `overflow-y:hidden`, **`z-index:1001`**,
  **`background:#fff`**, `padding:48px 48px 40px` and `transition:0.5s`
- **And** the page background is **`#fafafa`** with `body` at `16 px`/`line-height:1.8`/`color:gray`
  (**`#808080`**) in a Poppins-family stack
- **And** the sheet declares **no** `border-radius` and **no** `box-shadow` — the rail is **square
  and shadowless**

#### Scenario: The heading is own copy

- **Given** the app renders
- **Then** the strings `Website menu #09` and `Heading Two` never render
- **And** the app contains **zero** `colorlib`/`website-menu-19` strings and does not reuse the
  `colorlib-`/`ftco-`/`cl-` class names

### Feature: The vertical menu and its animated underline

#### Scenario: Six rows, stacked and evenly pitched

- **Then** the rail carries **six** rows in the same order as the source's kinds (current · five
  plain, own labels), each **`22 px` / `500` / `line-height:1.5`** → **`33 px`** tall with
  **`margin:0 0 10px 0`** (a **43 px** pitch) inside a `ul` with `margin:0; padding:0` — measured
  rows at **`y = 48 / 91 / 134 / 177 / 220 / 263`** and the `ul` **`192 × 248 @ x = 48, y = 48`** at
  1440 px
- **And** each label is a link with **`padding:10px 0`** and `position:relative` (measured
  **`58.7 × 45`** for the first row) whose rest ink is **`black`**

#### Scenario: The coral underline and the current row

- **Then** every label carries a **`2 px` `#ff6768`** bottom rule via a pseudo-element at
  **`bottom:7px`**, `left:0; right:0`, hidden at rest (`visibility:hidden`, `transform:scaleX(0)`)
  and wiped to `scaleX(1)` on hover over **`0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)`**
- **And** the **current** row is marked with `aria-current="page"`, painted **`#ff6768`**, and wears
  the underline **permanently**; hovering a non-current row reveals the underline but keeps its
  label `black`
- **And** focus affordances are restored (the source kills `outline`/`box-shadow` on
  `a:hover, a:focus` — a documented delta) with a visible `focus-visible` ring

### Feature: The content band

#### Scenario: Band geometry and the two-column row

- **Then** `#colorlib-main` is **`float:right`, `width:80%`, `padding:40px`** (measured
  **`1152 × 592.8 @ x = 288`** at 1440 px) and holds one `section` with **`padding:24px 0 112px`** and
  **`margin-bottom:48px`** (the `24 px` top is `cl-pt-4` overriding `.ftco-section{padding:7em 0}`)
- **And** the section's fluid container is `width:100%` with **`15 px`** gutters zeroed at ≥768 px
  (`cl-px-md-0`), so the band is **edge-to-edge** on desktop (measured `1072 @ x = 328`,
  `padding:0`), and `16 px`-padded below 768 px
- **And** the row is a flex row with **`margin:0 -15px`**, its first child a `100 %` column
  (`cl-mb-4` = `24 px`) holding one **`32 px`/`400`/`line-height:1.5`/`#000`** heading
  (`margin-bottom:8px`; measured `1072 × 48 @ y = 64`) over a **`16 px`/`28.8 px`/gray** lead
  paragraph (`margin-bottom:16px`)
- **And** below it **two `50 %` columns** (`padding:0 15px`, **`100 %` below 768 px**), each holding
  a **`24 px`/`400`/`#000`** sub-heading over a grey paragraph — measured **`551 × 175.2`** each at
  `y = 217.6` at 1440 px, **`685`** stacked at 767 px, **`278`** at 375 px

### Feature: Mobile chrome and the off-canvas drawer

#### Scenario: The burger toggle

- **Given** a viewport ≤ 991 px
- **Then** a toggle is rendered **`position:fixed`, `left:-12px`, `top:0`, `z-index:9999`,
  `padding:20px`** (measured **`70 × 68.8`**), and at ≥992 px it is **`visibility:hidden`** and
  cannot receive focus
- **And** it shows three **`30 × 2`** `#000` bars (7 px apart, 10 px on hover, `0.2s` transitions)
  and turns into an **X** (outer bars `rotateZ(±45deg)`, middle bar transparent) while open, with a
  visible focus ring and `aria-expanded` in sync
- **And** its animation is disabled under `prefers-reduced-motion: reduce` and it exposes an
  accessible name (the source only labels it via the local script — a documented delta)

#### Scenario: The drawer pushes the content

- **Then** below `991.98 px` the rail becomes a **`270 px`** fixed drawer translated
  **`translateX(-270px)`** with **`background:rgba(0,0,0,0.04)`** and `padding-top:2em`; opening adds
  **`body.offcanvas`**, which moves the rail to **`translateX(0)`** with **`background:#fff`** and
  **`z-index:999`** and pushes **`#colorlib-main` and the toggle by `translateX(270px)`** — all over
  **`0.5s`** (disabled under reduced motion), with a `body{overflow-x:hidden}` guard
- **And** the drawer closes on an outside click, on `scroll` (the source's `onScroll` behaviour), on
  `Escape`, and on a second toggle press, and there is **no** backdrop overlay
- **And** at `1440 / 991 / 767 / 375 px` the document is **900 / 900 / 900 / 1190 px** tall, so the
  desktop page is **shorter than the viewport** and only the narrow layout scrolls

### Feature: Materialised destinations

#### Scenario: No dead links

- **Then** the recreation renders **zero** `href="#"` links — the source's **7** dead anchors (the
  toggle plus the six labels) all resolve to real targets
- **And** the brand/rail header resolves to the top of the page

#### Scenario: Real content replaces the blank page

- **Then** the app has real content sections below the band with `scroll-margin-top` ≥ the toggle's
  height and imagery from `https://picsum.photos/seed/sponson-<n>/<w>/<h>` (the source ships **no**
  images at all)

### Feature: Footer and attribution

#### Scenario: Component Dock credit

- **Then** the app's footer links **`https://www.componentdock.com/`** branded as
  **"Component Dock"** (the source has no footer)

## Verification checklist

- [ ] Spec validated (`npm run spec:validate`) and the app built only after this spec exists
- [ ] Page frame: `#fafafa` page, `16 px`/`1.8`/`gray` body in a Poppins stack, `#000` headings; the
  rail is a **`20 %` fixed white column at `100vh`/`100dvh`**, `padding:48px 48px 40px`,
  `z-index:1001`, `transition:0.5s` (off under reduced motion)
- [ ] Rail + content: `#colorlib-main` is **`float:right`, `80 %`, `padding:40px`** (measured
  `1152 @ x = 288` at 1440 px); the section is `padding:24px 0 112px` + `margin-bottom:48px` (top
  `24 px` comes from `cl-pt-4` beating `.ftco-section{padding:7em 0}`); the container is fluid
  (`width:100%`) with gutters **zero** from 768 px up and `16 px` below
- [ ] Menu: **six rows**, **`22 px`/`500`/`line-height:1.5` → `33 px`**, `margin:0 0 10px 0`
  (**43 px** pitch), `ul` `margin:0; padding:0`, labels `padding:10px 0` and `black` at rest; current
  row `aria-current="page"` + **`#ff6768`**
- [ ] Underline: **`2 px` `#ff6768`**, `bottom:7px`, `left:0; right:0`, hidden + `scaleX(0)` at rest,
  `scaleX(1)` on hover over **`0.3s cubic-bezier(0.175,0.885,0.32,1.275)`**, worn permanently by the
  current row; reduced-motion honoured
- [ ] Content band: `32 px`/`400`/`#000` heading (`margin-bottom:8px`) over a grey lead `p`, then
  **two `50 %` columns** (`padding:0 15px`, **stacking to `100 %` below 768 px**) each with a
  **`24 px`/`400`/`#000`** sub-heading over a grey paragraph; measured `551 × 175.2` each at 1440 px
- [ ] Toggle: `position:fixed; left:-12px; top:0; z-index:9999; padding:20px` (≈ `70 × 68.8`),
  **`visibility:hidden` at ≥992 px**, three `30 × 2` `#000` bars (7 px / 10 px on hover, `0.2s`),
  an **X** under `cl-active`, `aria-expanded` in sync, focus ring, `prefers-reduced-motion` honoured
- [ ] Drawer (≤991.98 px): rail **`270 px`**, `translateX(-270px)`, **`rgba(0,0,0,0.04)`** closed /
  **`#fff` + `z-index:999` + `translateX(0)`** open via **`body.offcanvas`**, which also pushes
  **`#colorlib-main`** and the toggle by **`270 px`**; `0.5s` (off under reduced motion); closes on
  outside click, scroll, `Escape` and a second press; **no** backdrop
- [x] Zero `colorlib` / "Website Menu V19" / `website-menu-19` strings in `apps/sponson` (comments
  included); none of the source's six row labels (`Home`, `Project`, `About`, `Services`, `Blog`,
  `Contact`), its `Website menu #09` heading or its `Heading Two` sub-headings reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead —
  247,856 B = **93.0 %** of the 266,468 B archive), no inline SVG `<path>` data, no
  `cl-`/`ftco-`/`colorlib-` class names, no jQuery/Bootstrap
- [ ] Dead source code dropped: the `:where(html) … all: revert` reset, the `@media print` block
  (incl. `@page{size:a3}` and `body{min-width:992px}`), the `.nav` base rule, the Bootstrap palette,
  the base system body stack, the `a:not([href])` rules, the `::-webkit-file-upload-button` rule, the
  toggle's `text-indent:-55px`/`font:bold 14px/.4 Helvetica`, the orphan `</section>`, and all eight
  Roboto woff2 files
- [ ] Documented deltas recorded in the PR: new name + own rail labels and content copy, the seven
  dead `href="#"` materialised, `lucide-react` icons instead of the CSS-drawn burger (or a faithful
  CSS burger), a real Google Fonts Poppins `<link>` instead of eight dead self-hosted Roboto files,
  restored hover/`focus-visible` affordances, `aria-current` on the current row, an accessible name
  on the toggle, an accessible close path for the drawer, reduced-motion handling, placeholder
  photography (the source ships none), and the added footer
- [ ] `scripts/verify-app.sh sponson` green (typecheck + lint + knip + fallow + vitest 100 % + build);
  `npm run spec:validate` green
- [x] `public/CNAME` + `homepage` set to `sponson.free.componentdock.com`; `package-lock.json`
  registers the workspace; footer attribution present
- [ ] Squash-merge the PR, then mark the `TEMPLATES.md` `Website Menu 19` item `[x]` with the live
  `https://sponson.free.componentdock.com` URL + homepage and run `npm run readme:status`
