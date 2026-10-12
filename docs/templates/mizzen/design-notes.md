# Mizzen — design notes (section-by-section fidelity)

Recreation of ColorLib **"Website Menu V17"** (source slug `website-menu-17`) — the Website Menus
family's **fluid social-circle row + centred two-line wordmark + red pill search over a dark bar with
a red underline wipe** variant. Its features, in order of visual weight:

- a **centred heading band** (`section.ftco-section{padding:7em 0}` = `112px 0`) over a **`#fafafa`**
  page, carrying one `28 px` black heading whose source text reads `Website menu #07`;
- a **full-bleed chrome row** (`div.cl-container-fluid.cl-px-md-5`, `width:100%`, **no `max-width`**,
  gutters **`0 48px`** at ≥768 px and **`0 15px`** below, **78.4 px** tall at `y = 210`) laid out
  circles → wordmark → search on one line at ≥768 px;
- a **social row of four `40 × 40` circles** at its left (`1px solid #e6e6e6`, `border-radius:50%`,
  **no background**, `4 px` apart, `margin:0 auto` centring them at 768–991 px, **glyphs not
  rendered** — no icon font ships), flush with the container's content left edge (`x = 48` at
  1440 px) and **top-aligned** with the row;
- a **two-line wordmark** in the *chrome*, not the bar (`20 px`/`700`/uppercase `#000` with
  `line-height:1.2` over a `12 px`/`500` **`rgba(0,0,0,0.3)`** `display:block` span, `padding:5px 0`,
  `margin-right:16px`, ≈ **147.4 × 48.4**), centred in a `50 %` column of the `66.67 %` column that is
  **ordered last** (`cl-order-md-last` → `order:13`), and carrying a **never-reset `margin-bottom:30px`
  that makes the chrome row 78.4 px**;
- a **red pill search field** at its right: **`300 × 50`** capped at ≥992 px (clamped by its column
  below: 278.7 at 992, 261 at 991, 204 at 768), `border-radius:40px`, `overflow:hidden`,
  `border:1px solid rgba(255,255,255,0.1)` (**nearly invisible on the light page**), input
  `calc(100% - 50px)` / `50 px` / `border:none` / `#fff` / `rgba(0,0,0,.7)` / `14 px`, and a
  **`50 × 50` `#ff0000`** submit whose square corners are clipped into the pill's right cap, with a
  **white** magnifier (`14.8 × 16`);
- a **dark in-flow bar** (`nav.ftco-navbar-light`, `background:#252525 !important`, `padding:0`,
  `z-index:3`, **no shadow**, **never sticky**, **`67.8 px`** tall at `y = 288.4`) with a
  `div.cl-container-fluid` (`15 px` gutters, `flex-wrap:nowrap`, `justify-content:space-between`) —
  **no brand and no search inside the bar**;
- **five `11 px` UPPERCASE rows with `letter-spacing:2px`** (`#fff`, `padding:24px 20px` →
  **67.8 px** tall — they *set* the bar's height), **centred inside the bar by `margin:auto`**
  (`cl-m-auto`, ≈ 487.6 px per side at 1440 px): own labels mirroring the source's
  `Home` (current) · `Page` (dropdown) · `Work` · `Blog` · `Contact`;
- the **red underline** row treatment: a `2 px` `#ff0000` `::before` pinned to the row's **bottom**
  (`bottom:0; left:0; height:2px`), `width:0` at rest, wiped to **`width:100%`** on hover over
  **`0.3s`** **together with a `#ff0000` label** — and **not worn by the current row** (which is
  red-labelled only);
- the second row is a **`Page` dropdown**: white surface, `border:none`, `min-width:160px`,
  `padding:8px 0`, `margin:2px 0 0`, **`border-radius:4px`**,
  `box-shadow:0 10px 34px -20px rgba(0,0,0,.41)`, **four** items `12 px`/`#000`/`padding:4px 24px`
  (29.6 px) with a **`#ff0000` hover fill + white ink**, and a **rendered `6 × 3` currentColor caret**
  on the trigger;
- below **`992 px`** the bar turns **`#000`** with `padding:10px 15px` and container gutters `0`,
  collapses to **`44.7 px`**, and shows a **first-in-DOM** `☰ MENU` toggler
  (`rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`, `padding:4px 0 4px 12px`,
  **rendered** `13.7 × 16` bars glyph) that expands an **in-flow full-width panel**
  (`flex-basis:100%`, height-animated `0.35s ease`, `ul` `padding-bottom:10px`, **362.2 px** at
  767 px, expanded bar **407 px**) of five **43.2 px** rows (`padding:11.2px 0`) in
  `rgba(255,255,255,0.7)` (`#fff` when current/hovered) with a
  `1px solid rgba(255,255,255,0.2)` bottom rule **below 768 px only**, with the submenu
  **permanently expanded** inside it (`display:block !important`, `position:static`,
  **`background:#000`**);
- below **768 px** the chrome row **wraps** to **204.4 px**: brand line, then a full-width search
  (`mx-[16px]` bottom margin), then the centred circles with a `20 px` bottom margin — while at
  768–991 px the row stays **78.4 px** with the circles centred and the search clamped to its column.

The source page holds **nothing else** — no content sections, no images, no footer, no second page,
no sticky chrome — and it is shorter than the viewport (`468.2 px` tall at desktop widths;
`documentElement.scrollHeight === clientHeight`, `scrollWidth === innerWidth`). **13** of its
**14** anchors are dead `href="#"` (the 14th is the wordmark's `index.html`).

## Reference files read (2026-10-12)

| Thing | URL | Result |
| --- | --- | --- |
| ColorLib page | `https://colorlib.com/wp/template/website-menu-17/` | **200**, 108,939 B, sha256 `dcfb4bf7…`, title *"Website Menu V17 - Free Menu With Social Icons Template 2026 - Colorlib"*, `datePublished` 2021-03-09T14:25:10+00:00, `dateModified` 2026-09-25T10:42:07+00:00, author Rok Krivec |
| Slug-only preview | `https://preview.colorlib.com/theme/website-menu-17/` | **404** (family-wide gap — **not** a dead preview) |
| Live preview | `https://preview.colorlib.com/theme/bootstrap/website-menu-17/` | **200**, 5,356 B, `<title>Website menu 07</title>`, sha256 `fb6a9b68…` |
| Stylesheet | `…/bootstrap/website-menu-17/css/style.css?v=f98983b3` | **200**, 23,560 B, 1,211 lines, 157 top-level rule blocks, 25 `@media`, 4 `@font-face`, sha256 `431f55e5…` |
| Behaviour JS | `…/bootstrap/website-menu-17/js/snippet.js?v=23a93116` | **200**, 5,798 B, sha256 `9d56402f…` — byte-identical to the `-16` sibling's file **except line 2's filename comment** |
| Snippet archive | `https://preview.colorlib.com/downloads/free/website-menu-17.zip` | **200**, 259,630 B ("254 KB"), sha256 `c7cd5599…`; ships `index.html` 5,153 B (`935d5aad…`), `css/style.css` + `js/snippet.js` **byte-identical** to the live copies, `README.md` 1,264 B, 8 Roboto woff2 (247,856 B = 95.5 %), **no `images/`** |
| Screenshot | `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-17.jpg` | **200**, served **AVIF** despite the `.jpg` name, 7,263 B, 1200 × 972, sha256 `8957d541…` → PNG 49,124 B, inspected visually |
| `diff` live ↔ archive `index.html` | — | **head-only** (two `noindex` metas, `cdnjs` `dns-prefetch`, `fetchpriority`, `?v=` busters) — the archive is the live preview's readable twin |

Everything below was read from the sheet by `curl` **and** re-read in the browser (byte-identical,
sha256 `431f55e5…`), then cross-checked against the rendered pixels at 1440, 1200, 992, 991, 768, 767
and 375 px.

## DOM skeleton (live preview, 5,356 B — archive twin 5,153 B)

```
section.ftco-section                                  (padding:7em 0, no horizontal padding)
  div.cl-container > div.cl-row.cl-justify-content-center
    div.cl-col-md-6.cl-text-center.cl-mb-5 > h2.heading-section        "Website menu #07"
  div.cl-container-fluid.cl-px-md-5                   (full-bleed, gutters 0 48px at ≥768px)
    div.cl-row.cl-justify-content-between             (margin:0 -15px, wrap)
      div.cl-col-md-8.cl-order-md-last                (66.667%, order:13 → renders RIGHT)
        div.cl-row
          div.cl-col-md-6.cl-text-center
            a.cl-navbar-brand[href=index.html]        "Logistica <span>Architecture Agency</span>"
          div.cl-col-md-6.cl-d-md-flex.cl-justify-content-end.cl-mb-md-0.cl-mb-3
            form.searchform.cl-order-lg-last[action=#]
              div.cl-form-group.cl-d-flex
                input.cl-form-control.cl-pl-3[placeholder=Search]
                button.cl-form-control.search[type=submit] > span.fa.fa-search > svg (inline path)
      div.cl-col-md-4.cl-d-flex                       (33.333% → renders LEFT)
        div.social-media > p.cl-mb-0.cl-d-flex
          a.cl-d-flex.cl-align-items-center.cl-justify-content-center[href=#] ×4
            span.fa.fa-facebook|twitter|instagram|dribbble > i.cl-sr-only  (label only — no glyph)
  nav#ftco-navbar.cl-navbar.cl-navbar-expand-lg.cl-navbar-dark.ftco_navbar.cl-bg-dark.ftco-navbar-light
    div.cl-container-fluid                            (3 children, in this order)
      button.cl-navbar-toggler[data-toggle=collapse][data-target=#ftco-nav][aria-expanded=false]
        span.fa.fa-bars > svg (inline 3-bar path)  +  "Menu"
      div#ftco-nav.cl-collapse.cl-navbar-collapse
        ul.cl-navbar-nav.cl-m-auto
          li.cl-nav-item.cl-active       > a.cl-nav-link            "Home"
          li.cl-nav-item.cl-dropdown     > a.cl-nav-link.cl-dropdown-toggle#dropdown04[aria-haspopup]
                                           + div.cl-dropdown-menu > a.cl-dropdown-item ×4
          li.cl-nav-item                 > a.cl-nav-link            "Work" / "Blog" / "Contact"
  script src=js/snippet.js
```

Note the two inversions against the `-16` sibling: the **brand leaves the bar** for the chrome row,
and the **toggler becomes the bar's first child**. Also note the markup carries `cl-order-lg-last` on
the search form, but the variant never sets `order` on it — **dead markup**.

## CSS token reference (from `css/style.css`, canonical)

| Selector | Declarations that matter |
| --- | --- |
| `body` | `font-family:"Poppins", Arial, sans-serif; font-size:16px; line-height:1.8; background:#fafafa; color:gray` (= `#808080`) |
| `a` | `transition:.3s all ease; color:#ff0000`; `a:hover,a:focus{text-decoration:none !important; outline:none !important; box-shadow:none}` |
| `h2,.h2` / `.heading-section` | `line-height:1.5; font-weight:400; color:#000` / `font-size:28px; color:#000` |
| `.ftco-section` | `padding:7em 0` |
| `.ftco-navbar-light` | `background:#252525 !important; z-index:3; padding:0` · `@max991.98{background:#000 !important; position:relative; top:0; padding:10px 15px}` |
| `.ftco-navbar-light .cl-navbar-nav` | `@max991.98{padding-bottom:10px}` |
| `.ftco-navbar-light .cl-navbar-nav > .cl-nav-item > .cl-nav-link` | `font-size:11px; padding:1.5rem 20px; font-weight:500; color:#fff; text-transform:uppercase; letter-spacing:2px; position:relative; opacity:1 !important` · `@max991.98{padding:.7rem 0; color:rgba(255,255,255,0.7)}` + `:hover{color:#fff}` · `@max767.98{border-bottom:1px solid rgba(255,255,255,0.2)}` |
| `… > .cl-nav-link:before` | `position:absolute; bottom:0; left:0; content:''; display:block; width:0; height:2px; background:#ff0000; transition:0.3s` (off under `prefers-reduced-motion: reduce`) |
| `… > .cl-nav-link:hover` / `:hover:before` | `color:#ff0000` / `width:100%` |
| `.cl-nav-item.cl-active > a` | `color:#ff0000` · `@max991.98{color:#fff}` |
| `… .cl-dropdown-menu` | `border:none; background:#fff; box-shadow:0 10px 34px -20px rgba(0,0,0,.41); border-radius:4px` · `@max991.98{display:block !important; background:#000}` |
| `… .cl-dropdown-menu .cl-dropdown-item` | `font-size:12px; color:#000`; `:hover,:focus{background:#ff0000; color:#fff}` · `@max991.98{color:rgba(255,255,255,0.8)}` |
| `.ftco-navbar-light .cl-navbar-toggler` | `border:none; color:rgba(255,255,255,0.5) !important; cursor:pointer; padding-right:0; text-transform:uppercase; font-size:16px; letter-spacing:.1em`; `:focus{outline:none !important}` |
| `.cl-navbar-brand` (**not** scoped to the bar) | `color:#000; text-transform:uppercase; font-weight:700; font-size:20px; line-height:1.2; margin-bottom:30px`; `span{display:block; font-size:12px; font-weight:500; color:rgba(0,0,0,0.3)}`; `:hover,:focus{color:#000}`; framework base adds `display:inline-block; padding:.3125rem 0; margin-right:1rem; white-space:nowrap` |
| `.social-media` | `display:inline-block` · `@max991.98{margin:0 auto}` · `@max767.98{margin-bottom:20px}` |
| `.social-media p a` | `border:1px solid #e6e6e6; width:40px; height:40px; border-radius:50%; margin-right:4px`; `span{color:#4d4d4d}`; `:hover{background:#ff0000; border-color:#ff0000}`; `:hover span{color:#fff}` |
| `.searchform` | `height:50px; border:1px solid rgba(255,255,255,0.1); overflow:hidden; border-radius:40px` · `@min992{width:300px}` |
| `.searchform .cl-form-control` | `width:calc(100% - 50px); border:none; background:#fff !important; color:rgba(0,0,0,0.7) !important; font-size:14px` (+ all four placeholder-prefix rules) |
| `.searchform .search` / `.search span` | `width:50px; height:50px; background:#ff0000 !important` / `font-size:16px; color:#fff` |
| `.cl-form-control` (final override) | `height:50px !important; background:#fff !important; color:#000 !important; font-size:14px; border-radius:0; box-shadow:none !important; border:1px solid rgba(0,0,0,0.1)`; `:focus,:active{border-color:#000}` |
| `.cl-container-fluid` | `width:100%; padding-right:15px; padding-left:15px; margin-right:auto; margin-left:auto` (**no `max-width`**) |
| `.cl-row` | `display:flex; flex-wrap:wrap; margin:0 -15px` |
| `.cl-col-md-4 / -6 / -8` | base `width:100%; padding:0 15px`; `@min768` `33.33333% / 50% / 66.66667%` |
| `.cl-order-md-last` / `.cl-order-lg-last` | `order:13` at ≥768 px / ≥992 px |
| `.cl-px-md-5` / `.cl-mb-3` / `.cl-mb-md-0` / `.cl-d-md-flex` | `@min768{padding-left/right:3rem}` / `margin-bottom:1rem` / `@min768{margin-bottom:0}` / `@min768{display:flex !important}` |
| `.cl-m-auto` / `.cl-mb-5` / `.cl-pl-3` | `margin:auto !important` / `margin-bottom:3rem` / `padding-left:1rem` |
| `.cl-navbar` / `> .cl-container-fluid` | `position:relative; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; padding:.5rem 1rem` (overridden by the variant's `padding:0`) / same flex config |
| `.cl-navbar-collapse` | `flex-basis:100%; flex-grow:1; align-items:center` |
| `@min992 .cl-navbar-expand-lg` | `flex-flow:row nowrap; justify-content:flex-start`; nav `flex-direction:row`; dropdown `position:absolute`; collapse `display:flex !important; flex-basis:auto`; toggler `display:none`; `> .cl-container-fluid{flex-wrap:nowrap}` |
| `@max991.98 .cl-navbar-expand-lg > .cl-container-fluid` | `padding-right:0; padding-left:0` |
| `.cl-dropdown-menu` (base) | `position:absolute; top:100%; left:0; z-index:1000; display:none; min-width:10rem; padding:.5rem 0; margin:.125rem 0 0; font-size:1rem; background:#fff; border:1px solid rgba(0,0,0,.15); border-radius:.25rem` (border/radius overridden by the variant) |
| `.cl-dropdown-item` (base) | `display:block; width:100%; padding:.25rem 1.5rem; font-weight:400; color:#212529; white-space:nowrap` (colour overridden to `12px`/`#000`) |
| `.cl-dropdown-toggle::after` | `display:inline-block; margin-left:.255em; vertical-align:.255em; content:""; border-top:.3em solid; border-right:.3em solid transparent; border-left:.3em solid transparent` |
| `.cl-collapsing` | `position:relative; height:0; overflow:hidden; transition:height .35s ease` (off under reduced motion); `.cl-collapse:not(.cl-show){display:none}` |
| `.cl-navbar-dark .cl-navbar-nav .cl-nav-link` | `color:rgba(255,255,255,0.5)` / `:hover,:focus rgba(255,255,255,0.75)` / `.disabled rgba(255,255,255,0.25)` — **all beaten** by the variant's `color:#fff` + `opacity:1 !important` |
| `.cl-bg-dark` | `background-color:#343a40 !important` — beaten by `#252525 !important` |

## Screenshot analysis (1200 × 972, AVIF → PNG)

The mock shows a browser window over `preview.colorlib.com`:

1. **Heading** — `Website menu #07`, black, light weight, centred in the empty upper band.
2. **Chrome row** — from the left: **four grey-outline circles** (brand glyphs visible *only* because
   ColorLib's own page loads Font Awesome — the standalone snippet renders them **blank**); the
   **`LOGISTICA` / `ARCHITECTURE AGENCY`** lockup centred (second line visibly lighter — the
   `rgba(0,0,0,0.3)` span); the **`Search`** pill with a **red** magnifier button at its right end.
3. **The bar** — near-black, full-bleed, carrying the uppercase rows **`HOME`** (**red** — the current
   row), **`PAGE ▾`** (rendered caret), **`WORK`**, **`BLOG`**, **`CONTACT`** in white, centred.
4. **Below** — nothing at all; the page is empty `#fafafa` down to the fold.

Cross-checked against the live render at 1440 px (blank circles confirm the missing icon font; the
red submit's right corners are visibly clipped into the pill).

## Section-by-section

### 1 — Page frame and heading band (`section.ftco-section`)

`padding:112px 0`, no horizontal padding, over `#fafafa`. `h2.heading-section` = 28 px/400/42 px
`#000`, `margin-bottom:8px` + `48px` block margin, centred in a `cl-col-md-6` (50 % at ≥768 px).
Measured `540 × 42 @ x = 450, y = 112` at 1440 px; the chrome's top edge is **210 px**
(112 + 42 + 8 + 48) at every width. Page height at desktop widths: **468.2 px**.

### 2 — The chrome row (`div.cl-container-fluid.cl-px-md-5`)

Full-bleed (`width:100%`, `max-width:none`), gutters `0 48px` at ≥768 px (`cl-px-md-5` = `3rem`) and
`0 15px` below; measured `1440 × 78.4 @ y = 210`. Its `cl-row` (`margin:0 -15px`, `wrap`,
`space-between`) is `1374 px` at `x = 33` (1440 px) and holds a `33.333 %` `cl-col-md-4.cl-d-flex`
(`x = 33`, 458 px) and a `66.667 %` `cl-col-md-8.cl-order-md-last` (`x = 491`, 916 px → renders
**right**).

### 3 — Social circles (`div.social-media`)

Wrapper `display:inline-block` (blockified by the flex parent; `margin:0 auto` at ≤991 px,
`margin-bottom:20px` at ≤767 px). Each anchor **`40 × 40`**, `1px solid #e6e6e6`,
`border-radius:50%`, no background, `display:flex` centred, `margin-right:4px`. Measured
`x = 48, 92, 136, 180` at 1440 px (group 176 px), at the **top** of the 78.4 px row. Hover →
`background/border-color #ff0000` + white glyph. **Glyphs 0 × 0** (no icon font; only `sr-only`
labels) → the source shows four blank circles; the recreation must use real `lucide-react` glyphs
with accessible names (delta).

### 4 — Wordmark (`a.cl-navbar-brand`)

Two lines: `20 px`/`700`/uppercase/`line-height:1.2` (`#000`) over `12 px`/`500`
`rgba(0,0,0,0.3)` in a `display:block` span; `padding:5px 0` (`0.3125rem`), `margin-right:16px`,
`white-space:nowrap`, `display:inline-block`, and a **never-reset `margin-bottom:30px`**. Measured
**147.4 × 48.4**; because `text-align:center` centres *box + margin-right*, the lockup sits **8 px
left of the column centre** (measured `x = 638.3` in a column `491 → 949`). Its `margin-bottom`
is what makes the chrome row **78.4 px** — removing it moves the bar 30 px up.

### 5 — Search field (`form.searchform.cl-order-lg-last`)

`height:50px`, `border:1px solid rgba(255,255,255,0.1)`, `border-radius:40px`,
`overflow:hidden`, `margin:0`, and `width:300px` only from 992 px up. Measured widths: **300** at
1440/1200 (`x = 1092 → 1392`, flush right), **278.7** at 992 (clamped by the column), **261** at 991,
**204** at 768, **737**/**345** at 767/375 (full column content width after the row wraps). Input
`calc(100% - 50px)` (248/226.7/209→293 measured), `height:50px !important`, `border:none`, `#fff`,
`rgba(0,0,0,.7)`, `14 px`, `padding:6px 12px 6px 16px`. Submit **`50 × 50`**, `background:#ff0000
!important`, `border:none`, own ink `rgba(0,0,0,.7)` but the inline magnifier is `fill:#fff`
(14.8 × 16). The square button's right corners are **clipped by the form's `40 px` radius +
`overflow:hidden`**. `cl-order-lg-last` on the form is **dead markup** (no `order` is ever set on it).

### 6 — The bar (`nav.ftco-navbar-light`)

`background:#252525 !important`, `padding:0`, `z-index:3`, no shadow, `position:relative` (**never**
sticky — the sheet has **zero** `sticky`/`fixed`), full-bleed; measured **`1440 × 67.8 @ y = 288.4`**.
Container: `padding:0 15px`, `flex-wrap:nowrap`, `justify-content:space-between` at ≥992 px. The
collapse `div#ftco-nav` is `flex-grow:1` (measured `1410 px @ x = 15`) so the `ul.cl-navbar-nav.cl-m-auto`
is **centred by `margin:auto`** (`487.6 px` per side at 1440 px; list `434.7 px @ x = 502.6`).

### 7 — The five rows and the red underline

Rows `11 px`/`500`/uppercase/`letter-spacing:2px`/`#fff`, `padding:24px 20px` → **67.8 px** each
(widths measured **Home 81, Page 86.6, Work 82.2, Blog 78.6, Contact 106.4**). Current row =
**`#ff0000`** and **no underline** (verified: all five rows read `::before width:0px` at rest). Hover
wipes the **`2 px #ff0000` bottom bar** to `width:100%` over `0.3s` and reddens the label. The
underline is a hairline at the bar's bottom edge — **not** a full-height slab, **not** an inset wipe.

### 8 — Dropdown (`.cl-dropdown-menu`)

White, `border:none`, `border-radius:4px`, `min-width:160px`, `padding:8px 0`, `margin-top:2px`,
`0 10px 34px -20px rgba(0,0,0,.41)`, absolutely positioned at the trigger's left edge; measured open
**`160 × 134.4 @ x = 583.6, y = 358.2`**, items **`160 × 29.6`** at `y = 366.2, 395.8, 425.4, 455`
(`12 px`, `#000`, `padding:4px 24px`), hover → `#ff0000` + `#fff`. The trigger keeps a rendered
**`6 × 3`** `currentColor` caret (`margin-left:2.805px`) — white on desktop, `rgba(255,255,255,0.7)`
below 992 px, and **not** recoloured on hover (only the label turns red). Behaviour comes from
`snippet.js`: hover open/close, click toggle with an overflow guard, `ArrowDown`/`ArrowUp` roving
focus, `Escape` close + refocus, outside-click close — the script's
`[data-toggle="panel-collapse"]` branch is an unreachable typo guard.

### 9 — Mobile chrome, toggler and the in-flow panel

Below 992 px: bar **`#000`**, `padding:10px 15px`, container gutters **0**, **44.7 px** collapsed
(toggler 85.3 × 24.7 at `x = 15` + 10 px padding); toggler is the bar's **first** child with a
rendered `13.7 × 16` bars glyph + the word `MENU`. Panel = `flex-basis:100%`, `ul` `padding-bottom:10px`,
height-animated `0.35s ease`; measured expanded at 767 px: collapse **722 × 362.2 @ y = 449.1**,
expanded bar **407 px**, rows **43.2 px** (`padding:11.2px 0`) at
`y = 449.1 / 492.3 / 671.8 / 715 / 758.2`, Home `#fff` (current), the rest
`rgba(255,255,255,0.7)`, bottom rule `1px solid rgba(255,255,255,0.2)` (present at ≤767 px, absent at
768–991 px). The submenu is **permanently expanded** inside the panel: **722 × 134.4 @ y = 537.5**,
`position:static`, `display:block`, **`background:#000`**, items `rgba(255,255,255,0.8)`, 4 px radius
kept, the desktop shadow still declared. The document grows to **933 px** and the `position:relative`
bar scrolls away normally.

### 10 — Chrome wrap below 768 px

At 767/375 px the `cl-row` wraps: `cl-col-md-8` (full width) carries the brand line (48.4 px + its
30 px margin) and then the **full-width** search line (`737`/`345 px`, `margin-bottom:16px` from
`cl-mb-3`), and `cl-col-md-4` carries the circles **centred** with `margin-bottom:20px`. Total chrome
height **204.4 px** (144.4 + 60) at both widths; the bar follows at `y = 414.4`.

### 11 — Materialised sections (delta) + footer (delta)

The source has **nothing below the bar**: the recreation must add real content of the same *kinds* as
the source's own destinations — an intro/home block for the wordmark, a current-page block, one block
per plain row, dropdown destination panels, a social block for the circles, and an editorial block for
the dropdown — plus the mandatory `https://www.componentdock.com/` footer line (which the source does
not have). Chrome height is **78.4 + 67.8 ≈ 147 px**, so use `scroll-margin-top` ≥ `150px` on every
target. Imagery comes from `https://picsum.photos/seed/mizzen-<n>/<w>/<h>` (the source ships **no**
images).

## Source → React adaptation

| Source | Recreation |
| --- | --- |
| `section.ftco-section` wrapper with `padding:7em 0` | `<main className="pt-28 pb-28 bg-page">` (band) + real content sections below |
| `div.cl-container-fluid.cl-px-md-5` + two `cl-col-md-*` | `<TopChrome />` — `w-full px-[15px] md:px-[48px]` row with a `md:w-1/3` social column first and a `md:w-2/3 md:order-last` brand/search column |
| `div.social-media` + four `span.fa` | `<SocialRow />` — four `40 × 40` ring circles with real `lucide-react` glyphs, `aria-label`s, hover fill `#ff0000` |
| `a.cl-navbar-brand` (global rule, `mb-[30px]`) | `<Wordmark />` — two-line lockup in the **chrome**, `py-[5px] mr-4 mb-[30px]`, own strings |
| `form.searchform` (`width:300px` at ≥992 px, pill, red submit) | `<SearchForm />` — `h-[50px] rounded-full overflow-hidden border border-white/10 lg:w-[300px]`, input `calc(100%-50px)`, `size-[50px]` accent submit, real label, non-navigating |
| `nav.ftco-navbar-light` + `ul.cl-navbar-nav.cl-m-auto` | `<Navbar />` — in-flow `<header>`/`<nav>` (never sticky), `bg-bar` → `bg-[#000]` below 992 px, centred `<ul>` |
| `.cl-nav-item > .cl-nav-link:before` (2 px underline) | row link with `before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-accent before:transition-[width] before:duration-300 hover:before:w-full hover:text-accent`, `aria-current` on the current row |
| `.cl-dropdown-menu` + `snippet.js` data-API | `<PageMenu />` — hover + click + `ArrowDown`/`ArrowUp` + `Escape` + outside click, `aria-expanded`/`aria-haspopup`/`aria-controls`, caret chevron |
| `button.cl-navbar-toggler` + `div#ftco-nav.cl-collapse` | toggler `<button aria-expanded>` first in the bar + panel with `basis-full`, height animation, submenu always expanded below 992 px over `#000` |
| inline SVG paths (magnifier, bars) | `lucide-react` (`Search`, `Menu`) — never copy the paths |
| `@font-face` Roboto ×8 + `"Poppins"` stack that never loads | one Google Fonts Poppins `<link>` in `index.html` (delta) |
| blank `href="#"` (13 anchors) | real `id`/route targets + `scroll-margin-top` |

## Deltas (documented, deliberate)

1. New name **mizzen** (apps/mizzen) + own wordmark, own five row labels, own dropdown menu, own
   heading and own copy — no source string is reused.
2. **13 dead `href="#"`** become real destinations with real content blocks behind them.
3. **Real `lucide-react` icons** for the four social circles, the search magnifier, the toggler bars
   and the dropdown caret (the source's circles render **blank** and its inline SVG paths are not
   copied).
4. **A real Google Fonts Poppins `<link>`** instead of eight dead self-hosted Roboto woff2 files
   (247,856 B = 95.5 % of the download).
5. **Restored `focus-visible` rings** on rows, circles, the wordmark, the input, the submit, the
   toggler and the dropdown items (the source strips every outline and paints no focus state on the
   input).
6. `aria-current="page"` on the current row; `aria-label`s on the circles; `aria-expanded` on the
   toggler and the dropdown trigger; reduced-motion handling for the panel animation and the
   underline wipe.
7. The **search field actually works** (filters the recreation's own sections or is explicitly a
   labelled, non-submitting field) — the source's form posts to `#` and never changes anything.
8. A **footer** with the mandatory Component Dock credit — the source has no footer.
9. The wordmark's **8 px centring offset** (a `margin-right:16px` side effect) and its **30 px bottom
   margin** are either reproduced faithfully (preferred — the margin is load-bearing for the 78.4 px
   row) or normalised with the choice recorded in the PR.

## Sibling comparison (read before prepping 18+)

The *Website Menus* family shares almost nothing but its skeleton — every slug re-declares its own
palette, bar shape and breakpoint. This variant's standouts against the closest siblings:

| | `-16` sibling (**binnacle**) | `-07` sibling (dark utility bar) | `-11`/`-15` siblings (mobile `#000`) | **`-17` → mizzen** |
| --- | --- | --- | --- | --- |
| top strip | full-bleed **`#202020` 34 px** with a phone link + four `34 × 34` SQUARE tiles | `0.8rem` links, phone + four socials, labels hidden below 768 px | none | **full-bleed fluid chrome (no container), 48 px gutters, 78.4 px**: four `40 × 40` CIRCLE rings + wordmark + pill search |
| bar surface | white desktop **and** mobile | white, sticky on scroll | mobile `#000` | **`#252525` desktop / `#000` mobile**, never sticky, no shadow |
| row treatment | full-height `#f1bc31` slab, also on the current row | white current label | text colour per slug | **hover-only `2 px #ff0000` bottom underline + red label; current row red with NO underline** |
| accent | gold `#f1bc31` | — | amber/pink per slug | **pure red `#ff0000`** |
| row metrics | `32px 20px` → 83.8 px, centred | split columns | right-aligned | **`24px 20px` → 67.8 px, centred (`margin:auto`)** |
| search field | `257 × 46`, radius 5 px, `order:13` | none | none (`-15`) / hidden below 768 px (`-13`) | **`300 × 50` pill radius 40 px with a RED submit, clamped by its column below 992 px** |
| brand | inside the bar | — | — | **in the chrome row**, `mb-30px` inflating the row |
| dropdown | four items, gold hover, permanently expanded below 992 px (white) | flyout with nested submenu | cart / plain menu | **four items, red hover, permanently expanded below 992 px over `#000`** |
| mobile chrome | in-flow wrapping line (66 / 82 / 128 px) | panel slides in from the right | drawer or full-width panel | **44.7 px collapsed / 407 px expanded, panel 362.2 px, chrome wraps to 204.4 px below 768 px** |

The next un-prepped items after this one are the family's **`-18`…`-20`**, then the entries in the
celebration section that comes after them — prep each one at a time off its own live sheet; do not
carry this variant's red `#ff0000`, its 67.8 px rows or its pill search across without re-reading the
CSS.
