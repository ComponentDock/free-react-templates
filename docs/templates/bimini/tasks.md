# Bimini — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/bimini`
> (<https://bimini.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Website Menu V20"** (source slug `website-menu-20` — the Website Menus
family's **full-screen overlay menu over a full-viewport charcoal hero**: a whole-viewport sheet
(`nav#colorlib-main-nav`, `position:absolute; inset:0`, **`width:100%` + `height:100%`**,
**`background:rgba(0,0,0,0.99)`**, **`z-index:1002`**, `text-align:center`, `overflow-y:scroll`) that
is `visibility:hidden; opacity:0; transform:scale(0)` at rest and grows to `visible / 1 / scale(1)`
over **`0.8s cubic-bezier(0.175,0.885,0.32,1.275)`** when `<body>` gains **`menu-show`** (which also
locks the page: `overflow:hidden; position:fixed; height:100%; width:100%`). Inside it a
`display:table` / `display:table-cell; vertical-align:middle` centre column holds a **`40 px`/`700`/
`#fff` uppercase letterspaced logo** over a **four-row** menu of **`14 px`/`600` uppercase** labels
(`letter-spacing:5px`, `line-height:1.8` → **`35.2 px`** rows on a `35.2 px` pitch, `a{padding:5px 0}`,
`span{padding:0 10px}`) whose **current row is gold `#f8b500`**, with a full-bleed photo layer under a
**`rgba(0,0,0,0.3)`** scrim behind them (its `images/bg_3.jpg` **404s** — the archive ships **no
`images/` folder**), and a **`44 × 44` `#fff` X at `top:40px; right:40px`** that only becomes visible
**900 ms** after opening. The page behind is a single **`100vh`/`100dvh` `#202020`** hero with a
centred **`6vw`/`700`/`#fff` uppercase** headline (**`86.4 px`** at 1440, wrapping at 375) over an
**`18 px`** lead in **`rgba(255,255,255,0.8)`**, inside a **tiered** Bootstrap-4-look-alike container
(`540/720/960/1140`) whose gutters are zeroed for the hero; the header (absolute, `32px 0` / `16px 0`
below 767.98 px) carries a **`12 px`/`600`/`#fff` letter-spaced brand** and a **three-bar `#fff`
burger**. The source has **no cards, no buttons, no forms, no footer, no second view**, it is **exactly
viewport height at every width** (`scrollHeight === clientHeight` at 1440/991/767/375) and **all 8** of
its anchors are dead or dead-ending — two `href="#"` plus `index.html` ×3, `about.html`,
`blog.html`, `contact.html` — the three that **404 on the preview host** (`curl -sS`, 9 B
bodies); the three `index.html` links are no-ops to the page itself (**200**, 2,356 B).

The sheet is **16,497 B** (836 lines, 132 `{` blocks, 12 `@media` blocks, **6** `@font-face`, **1**
`@supports (height:100dvh)`, 29 `!important`) — **2,970 B larger** than the `-19` sibling's because it
replaces that sibling's rail/off-canvas machinery with the table-centred overlay sheet, the photo
layer and the hero — and **no webfont is loaded at all**, so `"Poppins", Arial, sans-serif` renders in
**Arial**; the archive's **eight** Roboto woff2 files (247,856 B = **91.98 %** of the 269,474 B
uncompressed download; the `100-*` pair is not even declared) never render. Preview: the slug-only
path `https://preview.colorlib.com/theme/website-menu-20/` returns **HTTP 404** — the **live preview**
is `https://preview.colorlib.com/theme/bootstrap/website-menu-20/` (**HTTP 200**, 2,356 B,
`<title>Website menu 08</title>`; its `css/style.css?v=0b78360a` 16,497 B and
`js/snippet.js?v=ac5d989a` 1,704 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-20.zip`, HTTP 200, 256,660 B — the
un-versioned source copy). Screenshot: `website-menu-20.jpg` (HTTP 200, AVIF, 6,387 B, 1200 × 972) —
a browser-chrome mock of the **open overlay**: black sheet, centred white `COMPANY LOGO`, then
`HOME` (**gold**) · `ABOUT` · `BLOG` · `CONTACT` in white, and the X top-right; the hero headline is
faintly legible **through** the `rgba(0,0,0,0.99)` sheet and the photo is not visible (404).

Spec: `openspec/specs/template-bimini/spec.md`. New name: **bimini** (a *bimini* is the canvas top
stretched over a yacht's cockpit — a cover that closes over the whole open deck from above, which
suits this variant's full-viewport sheet drawn over the entire page; it keeps the family's nautical
run: menutree · slidenav · navpill · menuribbon · starboard · larboard · topdeck · bowsprit · gangway ·
halyard · ensign · gunwale · capstan · windlass · davit · binnacle · mizzen · spinnaker · sponson ·
**bimini**). Never reuse the source slug, the name "Website Menu V20", the source's four row labels
(`Home`, `About`, `Blog`, `Contact`), the strings `Website Menu #10` / `Website menu 08` /
`Company Logo`, the `Lorem ipsum…` lead, the `colorlib-`/`js-colorlib-`/`cl-`/`ftco-` namespace, the
CSS-drawn burger or X, the Roboto woff2 files, or any copy verbatim.
Design notes: `docs/templates/bimini/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/bimini`
- [ ] Rename package to `@free-react-templates/bimini`; set
      `"homepage": "https://bimini.free.componentdock.com"`
- [ ] `public/CNAME` = `bimini.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/bimini` (`grep -c "free-react-templates/bimini" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app — Tailwind
      v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`
      (a **delta**: the source loads **no** webfont and renders Arial; its eight self-hosted Roboto
      files are dead weight and are never copied). Icons: `lucide-react` (`Menu`/`X` for the toggles,
      plus generic glyphs for the added sections)
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #fec771` (generic links + the intended
      hover underline), `--color-current: #f8b500` (current row), `--color-sheet: rgba(0,0,0,0.99)`,
      `--color-scrim: rgba(0,0,0,0.3)`, `--color-hero: #202020`, `--color-page: #fafafa`,
      `--color-ink: #808080`, `--color-heading: #000000`, `--color-on-dark: #ffffff`,
      `--color-on-dark-muted: rgba(255,255,255,0.8)` (**no** radius, **no** shadow tokens — the sheet
      declares none)
- [ ] `src/components/` split: `Navbar.tsx` (absolute header + brand + burger), `OverlayMenu.tsx`
      (the sheet + state), `OverlayBrand.tsx`, `MenuList.tsx`/`MenuRow.tsx` (gold current row +
      `#fec771` wipe-in underline), `OverlayClose.tsx` (the 900 ms-latent X), `Hero.tsx` (full-height
      `#202020` band), `Container.tsx` (the 540/720/960/1140 tiers), plus the added content sections
      and `Footer.tsx`

## Page frame + hero (`Hero`, `Container`) (TDD)

- [ ] Red: hero asserts `height:100vh` (and `100dvh` behind `@supports (height:100dvh)`),
      `background:#202020`; page asserts `#fafafa`; body asserts `16px`/`line-height:1.8`/`gray`
      (**`#808080`**) in a Poppins stack; assert **no** `border-radius` and **no** shadow in the app
- [ ] Green: `<Hero>` band (`min-h-screen` + `min-h-dvh`) + `<Container>` with the four tiers
      (`540/720/960/1140` at `576/768/992/1200`), edge-to-edge for the hero
- [ ] Red: headline asserts **`6vw`**/`700`/`#fff`/uppercase/`line-height:1.5`/`margin-bottom:8px`;
      lead asserts **`18px`** in `rgba(255,255,255,0.8)`; the row asserts the full-height flex centre
- [ ] Green: full-height flex row (`items-center justify-center`) so the copy block sits at
      `y = 363.7` at 1440 px; own headline + own lead copy
- [ ] Guard: assert the measured geometry — hero `1440 × 900` (1440), `375 × 812` (375); headline
      `86.4 px`/`129.6` box at 1440 and `22.5 px`/wrapping at 375; lead `y = 501.3` at 1440 and `54 px`
      tall at 375; container `1140 @ x = 150` (1440), `720 @ x = 135.5` (991), `540 @ x = 113.5` (767),
      `375 @ x = 0` (375)

## Full-screen overlay sheet (`OverlayMenu`, `OverlayBrand`) (TDD)

- [ ] Red: the sheet asserts `position:absolute; inset:0`, `width:100%; height:100%`,
      `background:rgba(0,0,0,0.99)`, `z-index:1002`, `text-align:center`, `overflow-y:scroll`,
      `visibility:hidden` + `opacity:0` + `transform:scale(0)` at rest, and
      `transition:all 0.8s cubic-bezier(0.175,0.885,0.32,1.275)`; opening asserts the state class
      **`menu-show`** on `document.body` and the lock
      (`overflow:hidden`, `position:fixed`, `height:100%`, `width:100%`)
- [ ] Green: `<OverlayMenu>` renders the sheet, `.table`/`.table-cell` centring (or a documented flex
      equivalent that reproduces the measured `y = 337.6` / `421.6`), the photo layer
      (`inset:0`, `bg-cover`, `bg-center`) with its `rgba(0,0,0,0.3)` scrim, and the brand
- [ ] Guard: the photo layer uses `https://picsum.photos/seed/bimini-1/1920/1080` (the source's
      `images/bg_3.jpg` **404s** and the archive ships no `images/` — a delta); assert the
      `prefers-reduced-motion: reduce` path disables the grow; assert the overlay's own
      `overflow-y:scroll` gutter (measured `15 px`) does not shift the centred column

## Overlay menu rows (`MenuList`, `MenuRow`) (TDD)

- [ ] Red: the list asserts `padding:0; margin:0` (**`padding-top:20px` below 767.98 px**); rows assert
      **`14px`/`600`/uppercase/`letter-spacing:5px`/`line-height:1.8`** → **`35.2 px`**, links
      `display:block; padding:5px 0`, inner `span` `padding:0 10px`, ink `white`, and the current row
      **`#f8b500`** with `aria-current="page"`
- [ ] Green: `<MenuList>`/`<MenuRow>` — four rows in the source's kind order (one current + three
      plain) with own labels; the current row gold, others white
- [ ] Red: the hover underline asserts a **`2 px` `#fec771`** bar (`after:absolute after:h-[2px]
      after:bg-accent after:origin-left after:scale-x-0` wiped to `scaleX(1)` on hover) — the source's
      own `span:before` state rules have **no** base geometry (`content:none`) and never render, so
      this is an implemented delta
- [ ] Guard: assert row geometry (`35.2 px` pitch, four rows from `y = 421.6`, `ul` `1425 × 140.8` at
      1440 px) and that every row is a real destination (never `href="#"`)

## Toggles, close paths and accessibility (`Navbar`, `OverlayClose`) (TDD)

- [ ] Red: the header burger asserts `float:right`, `position:relative`, `z-index:1003` inside the
      `z-index:9` header, `right:10px` below 767.98 px, measured **`20 × 28.8 @ x = 1255, y = 32`**,
      and a **`20 × 2` `#fff`** bar with **`30 × 2` `#fff`** `::before`/`::after` bars 7 px apart
      (10 px on hover, `0.2s`); the close X asserts **`44 × 44`** at `top:40px; right:40px`,
      hidden at rest, two **`30 × 2` `#fff`** bars at `±45deg` with the middle bar transparent
- [ ] Green: `<Navbar>` burger (accessible name, `aria-expanded`, `aria-controls`) and
      `<OverlayClose>` X (keyboard-operable, accessible name), both driving the same state
- [ ] Red: close paths assert the X click, `Escape`, and an **added** outside/backdrop close (the
      source's `outside:null`/`onScroll:false` means it has neither), with `aria-expanded` in sync and
      focus moved into the sheet on open and returned on close
- [ ] Guard: assert the source's **900 ms** delay on the X is either reproduced or documented as a
      shortened delta; assert `scrollWidth === innerWidth` while open (no layout shift) and that the
      background is inert while the sheet is open

## Materialised sections (TDD)

- [ ] Red: assert **zero** `href="#"` in the app; assert each target id exists and carries
      `scroll-margin-top` ≥ the header height; assert the app renders **no** `colorlib` /
      `website-menu-20` / "Website Menu V20" / "Website menu 08" / "Company Logo" / "Website Menu #10"
      / `Lorem ipsum dolor sit amet` string anywhere (comments included)
- [ ] Green: an intro/home block for the brand, one block per menu row, a contact block, plus the
      recreation's own sections — all own copy, imagery from
      `https://picsum.photos/seed/bimini-<n>/<w>/<h>` (**the source ships no images at all**)
- [ ] Guard: record as deltas that the source is a **single `100vh` page that never scrolls**
      (`scrollHeight === clientHeight` at 1440/991/767/375) and that all **8** of its anchors are dead
      or 404 (`#` ×2; `index.html` ×3 — no-ops to the page itself; `about.html`, `blog.html`,
      `contact.html` — the 404s)

## Footer + attribution (TDD)

- [ ] Red: footer asserts exactly one `https://www.componentdock.com/` link branded "Component
      Dock" (new tab, `rel="noreferrer"`) + a computed current year
- [ ] Green: `<Footer />` (a delta — the source has no footer)

## Quality gates

- [ ] `scripts/verify-app.sh bimini` green (typecheck + lint + knip + fallow + vitest **100 %**
      lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green
- [ ] Grep the app for `colorlib`, `website-menu-20`, "Website Menu V20", "Website menu 08",
      "Company Logo", "Website Menu #10", the `Lorem ipsum…` lead and the source's four row labels →
      **zero** hits (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2`, no `ftco-animate`,
      no `data-scrollax-parent`, no `cl-`/`colorlib-` class names, no jQuery/Bootstrap
- [ ] PR description lists: source template + slug, preview URL, design tokens used (amber `#fec771`,
      gold `#f8b500`, sheet `rgba(0,0,0,0.99)`, scrim `rgba(0,0,0,0.3)`, hero `#202020`, page
      `#fafafa`, `gray` ink, `#fff` type on dark, no radius, no shadow), the breakpoint table, and
      every delta (own name/brand/headline/labels/font, materialised links, restored hover +
      `focus-visible`, `aria-expanded`/`aria-controls`/`aria-current`, outside-click close,
      reduced-motion path, placeholder photography for the missing overlay photo and the added
      sections, the extra content sections, the footer)
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 20` item `[x]` with the live
      `https://bimini.free.componentdock.com` URL + homepage and run `npm run readme:status`
