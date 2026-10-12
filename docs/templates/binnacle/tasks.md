# Binnacle — implementation tasks

Recreation of ColorLib **"Website Menu V16"** (source slug `website-menu-16` — the Website Menus
family's **dark utility strip + white in-flow bar + centred gold-slab rows + search field**: a
centred heading band (`112px 0`) over the page's **`#fafafa`**, then a full-bleed
**`#202020` strip** (34 px, no padding) with a white `12 px` phone link at the left and **four
`34 × 34` square `#4d4d4d` social tiles** at the right (hover `#f1bc31`, glyphs not rendered), then
a **white in-flow bar** (`padding:0`, shadow `0 5px 20px -17px rgba(0,0,0,.34)`, **never sticky**,
≈**83.8 px**) holding a **two-line wordmark** (`20 px`/`700` uppercase `#000` + `12 px`/`500` span),
**five `11 px` uppercase `letter-spacing:2px` rows centred by `margin:auto`**
(`padding:32px 20px`, `#4d4d4d`) whose hover/current treatment is a **full-height `#f1bc31`
`::before` slab** (`.2s ease-in-out`, white label), and a **white `257 × 46` search field**
(`border-radius:5px`, `order:13` — second in DOM, last on screen) flush with the container's content
right edge. The fourth row is a `Page` dropdown (white, `border:none`, `min-width:160px`,
`padding:8px 0`, `border-radius:4px`, `0 10px 34px -20px rgba(0,0,0,.41)`, four `12 px` `#000` items
with a gold hover fill and a rendered `6 × 3` currentColor caret). Below **`992 px`** the bar stays
**white** but becomes a wrapping `10px 15px` chrome (**66 px** at 768–991, **82 px** at 767,
**128 px** at 375) with a `☰ MENU` toggler (**third in DOM**, `rgba(0,0,0,.5)`, uppercase `16 px`,
`letter-spacing:.1em`) that reveals an **in-flow full-width panel** (`flex-basis:100%`,
`0.35s ease`) of five **49.6 px** rows, with the submenu **permanently expanded** inside it
(`display:block !important`, `position:static`, no shadow). The source has **no images, no content
sections, no footer, no second page, no sticky chrome** and is shorter than the viewport: **14** of
its **15** links are `href="#"`.

The sheet is **22,999 B** (164 rule blocks, 20 `@media` blocks, **zero** `sticky`/`fixed`) — 4.4 kB
larger than the `-15` sibling's because this variant ships the search field (`searchform` ×8,
`form-control` ×10) **and** the dropdown family (25 `dropdown` occurrences) **and** the social row —
and **no webfont is loaded at all**, so `"Poppins", Arial, sans-serif` renders in **Arial**; the
archive's **eight** Roboto woff2 files (247,856 B = **95.3 %** of the 260,102 B download; the four
latin files are byte-identical, sha256 `0a44e0bb…`, and so are the four latin-ext files,
`cdd53dc5…`; 100/300 are not even declared) never render. Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-16/` returns **HTTP 404** — the **live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-16/` (**HTTP 200**, 6,506 B,
`<title>Website menu 06</title>`; its `css/style.css?v=b66eaf1a` 22,999 B and
`js/snippet.js?v=53830328` 5,798 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-16.zip`, HTTP 200, 260,102 B — the
un-versioned source copy). Screenshot: `website-menu-16.jpg` (HTTP 200, AVIF, 7,158 B, 1200 × 972) —
a browser-chrome mock: a centred black heading `Website menu #06`, the dark strip with the phone
number and four tiles, and the white bar carrying the two-line `PAPERMAG`/`MAGAZINE` lockup, the
rows `HOME` (**white on a gold block**) · `PAGE ▾` · `CATALOG` · `BLOG` · `CONTACT` and the white
`Search` field with a magnifier.

Spec: `openspec/specs/template-binnacle/spec.md`. New name: **binnacle** (the housed stand that
holds a ship's compass and its gimbals — the fitting a helm is steered by, which suits this
variant's enclosed chrome bar; it keeps the family's nautical run: menutree · slidenav · navpill ·
menuribbon · starboard · larboard · topdeck · bowsprit · gangway · halyard · ensign · gunwale ·
capstan · windlass · davit · **binnacle**). Never reuse the source slug, the name "Website Menu
V16", the `Papermag`/`Magazine` wordmark, the **five source row labels**, the four dropdown item
strings (`Page 1`…`Page 4`), the heading string `Website menu #06`, the `cl-`/`ftco-` namespace, the
inline SVG glyph paths, the Roboto woff2 files, or any copy verbatim.
Design notes: `docs/templates/binnacle/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/binnacle`
- [ ] Rename package to `@free-react-templates/binnacle`; set
      `"homepage": "https://binnacle.free.componentdock.com"`
- [ ] `public/CNAME` = `binnacle.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/binnacle` (`grep -c "free-react-templates/binnacle" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app — Tailwind
      v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap`
      (a **delta**: the source loads **no** webfont and renders Arial; its eight self-hosted Roboto
      files are dead weight and are never copied). Icons: `lucide-react` (`Phone`, `Search`, `Menu`
      bars, `ChevronDown` for the caret) plus **inline-SVG brand marks** for
      `Facebook`/`Twitter`/`Instagram`/`Dribbble` (lucide-react exports no brand
      icons, so it cannot supply these) in the
      tiles — substitute generic icons if a brand glyph is unavailable)
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #f1bc31`, `--color-page: #fafafa`,
      `--color-strip: #202020`, `--color-tile: #4d4d4d`, `--color-bar: #fff`, `--color-row: #4d4d4d`,
      `--color-row-active: #fff`, `--color-row-mobile: #4d4d4d`, `--color-row-mobile-active: #000`,
      `--color-item: #000`, `--color-ink: #808080`, `--color-toggler: rgba(0,0,0,0.5)`,
      `--color-hairline: rgba(0,0,0,0.05)`, `--radius-field: 5px`, `--radius-menu: 4px`,
      `--shadow-bar: 0 5px 20px -17px rgba(0,0,0,0.34)`,
      `--shadow-menu: 0 10px 34px -20px rgba(0,0,0,0.41)`
- [ ] `src/components/` split: `TopBar.tsx` (strip + phone + social tiles), `Navbar.tsx` (bar shell
      + container + toggler), `Wordmark.tsx`, `NavList.tsx`, `NavRow.tsx` (slab + current state),
      `PageDropdown.tsx`, `SearchForm.tsx`, `MobilePanel.tsx`, plus the content sections and
      `Footer.tsx`

## Heading band + page frame (TDD)

- [ ] Red: `App.test.tsx` asserts the page background token, one `112px`-padded band, and the
      heading's `28 px` / `#000` treatment; assert the string `Website menu #06` never renders and
      no `colorlib`/`website-menu-16` text appears in the bundle
- [ ] Green: `section` + centred column (`50%` at ≥768 px, `100%` below) + `h2`; own copy
- [ ] Verify the strip lands at **`y = 210`** (112 + 42 + 8 + 48) and the bar at **`y = 244`**

## Dark utility strip (`TopBar`) (TDD)

- [ ] Red: strip asserts `background:#202020`, height **34 px**, **no padding**, full-bleed;
      phone link asserts `12 px` / `#fff` + a leading icon; tiles assert **4 × `34 × 34`**,
      `#4d4d4d`, **`border-radius:0`**, `margin-right:1px`, hover → `#f1bc31`
- [ ] Green: `div` strip › container › flex row (phone left, tiles right, `space-between`);
      `Phone` icon (grey `#808080` to match the source's currentColor accident, or white — record
      the choice), tiles with `lucide-react` glyphs and `sr-only` names
- [ ] Guard: the tiles' heights (34 px) set the strip's height, not the 28.8 px phone line;
      every tile and the phone link resolve to real destinations with `focus-visible` rings

## White in-flow bar + two-line wordmark (TDD)

- [ ] Red: bar asserts `background:#fff`, `padding:0`, `z-index:3`, shadow token, **no radius**, no
      `sticky`/`fixed`; wordmark asserts two lines (**20 px/700/uppercase/#000** + **12 px/500/#000**
      block span), `padding:5px 0`, `margin-right:16px`
- [ ] Green: `<header>` + container (`max-w-[1140px] mx-auto px-[15px]`, `flex-nowrap` at ≥992 px)
      with the DOM order **brand → search form → toggler → collapse** and the visual order
      **brand → list → search** (the search wrapper carries `order-last` at ≥992 px)
- [ ] Guard: a DOM-order-only port puts the search field between brand and rows — assert the
      rendered left→right sequence at 1440 px instead
- [ ] Guard: wordmark colour is the same at rest and on hover in the source — add a hover affordance
      (delta) and assert it

## Centred row list + gold slab (`NavList`, `NavRow`) (TDD)

- [ ] Red: list asserts `margin:auto` centring; rows assert **11 px / 500 / uppercase /
      `letter-spacing:2px`**, `padding:32px 20px` (**83.8 px** tall), `#4d4d4d`, five rows in source
      order with `aria-current="page"` on the current one
- [ ] Green: centred flex list; each row a link with a `::before` slab
      (`before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0
      before:bg-accent before:transition-transform before:duration-200`), revealed on hover **with
      `hover:text-white`**, and a persistent slab + white label for the current row
- [ ] Red/Green: below `992 px` the slab is `display:none`, the current row's label is `#000`, rows
      are `padding:14.4px 0` (**49.6 px**) with a `1px rgba(0,0,0,0.05)` bottom rule below `768 px`
- [ ] Guard: `focus-visible` rings on every row (the source strips outlines); assert **no** underline
      and **no** border on rows at any state; assert the current row wears the slab **at rest**

## `Page` dropdown (`PageDropdown`) (TDD)

- [ ] Red: panel asserts white surface, `border:none`, `min-width:160px`, `padding:8px 0`,
      `margin-top:2px`, **`border-radius:4px`**, menu shadow, four `12 px`/`#000` items at
      `padding:4px 24px` with hover `bg-accent text-white`; trigger asserts `aria-haspopup`,
      `aria-expanded`, `aria-controls` and a caret
- [ ] Green: `<PageDropdown />` with a caret glyph (a `lucide` chevron or the 6 × 3 CSS triangle),
      `Escape` → close + refocus, `ArrowDown` on the trigger → open + focus first item,
      `ArrowDown`/`ArrowUp` roving focus, outside-click close, hover + click open
- [ ] Guard: below `992 px` the panel renders **permanently expanded** (`position:static`, no
      shadow, radius kept) and its items are part of the panel's height; assert each item is a real
      destination (never `href="#"`) and that no source item string is reused

## Search field (`SearchForm`) (TDD)

- [ ] Red: field asserts **46 px** height, `1px solid rgba(0,0,0,0.05)`, **`border-radius:5px`**,
      ≈ **257 px** wide flush right; input asserts `border:none`, white surface,
      `rgba(0,0,0,0.7)` ink at `14 px`; button asserts **46 × 46** white with a `Search` icon
- [ ] Green: labelled `<form role="search">` (never submits/navigates), `onSubmit` filters the
      recreation's own sections or is explicitly a no-op field with a `sr-only` label
- [ ] Guard: the field is visible at **every** width and sits **last on screen** at ≥992 px; assert
      real `focus-visible` rings on the input and the button (delta)

## Mobile chrome + in-flow panel (`MobilePanel`) (TDD)

- [ ] Red: bar asserts white surface, `padding:10px 15px`, container gutters `0`, and the three
      measured heights — **66 px** at 768–991, **82 px** at 767, **128 px** at 375; toggler asserts
      `rgba(0,0,0,.5)`, uppercase `16 px`, `letter-spacing:.1em`, ≈ **85.3 × 24.7**, **third in DOM**
- [ ] Green: toggler `<button aria-expanded aria-controls>` + panel with `flex-basis:100%` and a
      height animation (respect `prefers-reduced-motion: reduce`), toggling reverse-safe
- [ ] Guard: at 375 px the panel sits below the chrome line and the search + toggler occupy the
      second line (**no** invented `order-sm-start` behaviour); assert `scrollWidth === innerWidth`
      at 320/375/768/991 px

## Materialised sections (TDD)

- [ ] Red: assert **zero** `href="#"` in the app; assert each target id exists and carries
      `scroll-margin-top` ≥ `120px` (chrome = 34 + 83.8 px)
- [ ] Green: intro/home block for the wordmark, a current-page block, one block per plain row,
      panels for the dropdown destinations, a contact block for the phone link, a social block for
      the tiles, and an editorial block for the dropdown — all own copy, with
      `https://picsum.photos/seed/binnacle-<n>/<w>/<h>` imagery
- [ ] Guard: the page is taller than the viewport and the chrome scrolls away (assert a negative
      `y` after scrolling); the app contains no `sticky`/`fixed` header rule

## Footer + attribution (TDD)

- [ ] Red: footer asserts exactly one `https://www.componentdock.com/` link branded "Component
      Dock" (new tab, `rel="noreferrer"`) + a computed current year
- [ ] Green: `<Footer />` (a delta — the source has no footer)

## Quality gates

- [ ] `scripts/verify-app.sh binnacle` green (typecheck + lint + knip + fallow + vitest **100 %**
      lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green
- [ ] Grep the app for `colorlib`, `website-menu-16`, "Website Menu 16", the source's five row
      labels, its `Papermag`/`Magazine` wordmark, its four placeholder item strings and its
      `Website menu #06` heading → **zero** hits (comments included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2`, no inline SVG paths
      from the preview, no `cl-`/`ftco-` utility classes, no jQuery/Bootstrap, no Font Awesome
- [ ] PR description lists: source template + slug, preview URL, design tokens used (gold `#f1bc31`,
      `#202020` strip, `#4d4d4d` tiles, `#4d4d4d` rows, radius 5 px / 4 px, both shadows), the
      breakpoint table, and every delta (own name/copy/icons/font, materialised links, focus rings,
      working search, footer)
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 16` item `[x]` with the live
      `https://binnacle.free.componentdock.com` URL + homepage and run `npm run readme:status`
