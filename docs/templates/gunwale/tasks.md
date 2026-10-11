# Gunwale — implementation tasks

Recreation of ColorLib **"Website Menu V12"** (source slug `website-menu-12` — the Website
Menus family's **brand-strip-over-a-dark-bar / search-field / hover-slab variant**: a centred
heading band (`padding:112px 0`) over a **72 px white strip** carrying a **two-line uppercase
`#000` wordmark** on the left and **four 40 px circular social buttons** on the right, over a
**full-bleed `#202040` navy bar** (`67.8 px` = `24 + 19.8 + 24`) that puts **five `11 px`
tracked-out white rows on the left** (each one a `#f1bc31` gold slab on hover, the current row
keeping it permanently) and a **white `257 × 46` five-pixel-radius search field on the right**;
a `992 px` breakpoint turns the bar **`#000`** (`66 px`), shows a `☰ Menu` toggler on the left,
collapses the list into a height-animated panel where the dropdown is an **always-expanded
`#000` sub-list** and turns the current row's label gold. The source has **no images, no
content sections, no footer, no second page and no sticky chrome**: **13** of its **14** links
are `href="#"` and its page is 461.8 px tall and does not scroll.

Type is **Poppins 400/500/700** (`body{font-family:"Poppins", Arial, sans-serif; font-size:16px;
line-height:1.8}`); the sheet also declares self-hosted **Roboto 400/700** and the archive ships
four more **100/300** files it never declares — **none of it renders**, so 247,856 B of the
259,459 B download is dead font payload. It also loads **no icon font**, so its four
`span.fa.fa-<network>` glyphs measure `0 × 0` and the live preview shows four **empty hairline
circles** (only ColorLib's own screenshot draws the icons). Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-12/` returns **HTTP 404** — the **live
preview** is `https://preview.colorlib.com/theme/bootstrap/website-menu-12/` (**HTTP 200**,
5,103 B, `<title>Website menu 02</title>`; its `css/style.css?v=c26a47c4` 22,709 B and
`js/snippet.js?v=04dc0e4b` 5,798 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-12.zip`, HTTP 200, 259,459 B — the
un-versioned source copy). Screenshot: `website-menu-12.jpg` (HTTP 200, AVIF, 7,255 B,
1200×972) — a browser-chrome mock of the live preview: a centred black heading
"Website menu #02", a white band with the two-line `PAPERMAG` / `MAGAZINE` wordmark at its left
and four circular social buttons at its right, then a full-bleed very dark navy bar with
`HOME` inside a mustard-gold block, `PAGE` with a caret, `CATALOG`, `BLOG`, `CONTACT` and a
white `Search` field at its right end.

Spec: `openspec/specs/template-gunwale/spec.md`. New name: **gunwale** (a boat's gunwale is the
raised strake capping the top edge of her side — a light strip riding on top of the dark hull,
which is exactly this chrome's shape). Never reuse the source slug `website-menu-12`, the name
"Website Menu 12", the `Papermag`/`Magazine` wordmark, the **five source labels** (`Home`,
`Page`, `Catalog`, `Blog`, `Contact`), the `Page 1`…`Page 4` items, the `Search` placeholder,
the heading string `Website menu #02`, the `cl-`/`ftco-` namespace, the inline SVG bars/search
glyphs, the self-hosted Roboto woff2 files, or any copy verbatim. Design notes:
`docs/templates/gunwale/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/gunwale`
- [ ] Rename package to `@free-react-templates/gunwale`; set
      `"homepage": "https://gunwale.free.componentdock.com"`
- [ ] `public/CNAME` = `gunwale.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/gunwale`
      (`grep -c "free-react-templates/gunwale" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app —
      Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap`
      (the source's eight self-hosted Roboto files — including the four 100/300 faces it
      never even declares — are never copied). Icons: `lucide-react` (`Search` magnifier, a
      three-bar `Menu` glyph for the toggler, `ChevronDown` for the dropdown caret, and four
      network glyphs — `Facebook`, `Twitter`, `Instagram`, `Dribbble` — for the circles).
- [ ] `@theme` tokens in `src/index.css`: `--color-bar: #202040`,
      `--color-gold: #f1bc31`, `--color-bar-dark: #000`, `--color-page: #fafafa`,
      `--color-ink: #808080`, `--color-circle-ring: #e6e6e6`,
      `--color-circle-glyph: #4d4d4d`, `--color-toggler: rgba(255,255,255,0.5)`,
      `--color-mobile-row: rgba(255,255,255,0.7)`,
      `--color-mobile-item: rgba(255,255,255,0.8)`,
      `--color-field-hairline: rgba(255,255,255,0.1)`,
      `--color-search-ink: rgba(0,0,0,0.7)`,
      `--shadow-panel: 0 10px 34px -20px rgba(0,0,0,0.41)`,
      `--radius-field: 5px`, `--radius-panel: 4px`,
      `--font-sans: "Poppins", Arial, sans-serif` (design-token notes only — no provenance
      comments; note the template rounds **only** the search field `5px`, the dropdown panel
      `4px` and the social circles `50%`, and the bar itself has **no** shadow)
- [ ] One `navItems` data structure (5 rows: `current` → `dropdown`(4 items) → three plain) and
      one `socialItems` list (4 networks) — never hand-written duplicates; rendered once per
      layout (desktop bar / mobile panel)

## Heading band + white brand strip (TDD)

- [ ] Tests first: the band has `padding:112px 0` (`py-28`) over `#fafafa`; its heading is
      **28 px / 400 / `line-height:1.5` (42 px) / `#000`** with an `8px` bottom margin,
      centred, in a column that is `50%` at ≥768 px and `100%` below, carrying
      `margin-bottom:48px` → the strip's top edge lands at exactly **210 px** below the page
      top at every width (112 + 42 + 8 + 48)
- [ ] Tests: the heading's text is **own copy** — assert `Website menu #02` (and the word
      `Colorlib`) never appears in the app
- [ ] Strip: `flex flex-wrap justify-between` with two `grow basis-0` columns
      (`px-[15px]`), **72 px** tall, transparent over `#fafafa` (it is the *page*, not a
      filled band — the source has no background on it)
- [ ] Wordmark: own brand text as **two uppercase lines** — line 1
      `text-[20px] font-bold leading-none` (700), line 2 a `block` `text-[12px] font-medium
      leading-none` (500) — both `#000`, `py-[5px] mr-4 mb-[30px] inline-block
      whitespace-nowrap`, being a link to the top of the page with a visible focus ring and
      **no hover colour change** (`#000` at rest and hover)
- [ ] Tests: the wordmark box is ≈ **114 × 42 px at `x = 85, y = 210`** at 1280 px (the
      source's own lockup text is 114.09 px wide) and its 30 px bottom margin is what makes
      the strip 72 px; the source's `Papermag` / `Magazine` strings are never rendered
- [ ] Social row: right-aligned in the second column (`justify-end`), **exactly four** links,
      each `size-10 rounded-full border border-[#e6e6e6] mr-1 flex items-center
      justify-center` (**40 × 40**, `1px solid #e6e6e6`, `border-radius:50%`,
      `margin-right:4px`), glyph `#4d4d4d`, group **top-aligned** in the 72 px strip
      (`items-start`, not centred), row width **176 px** with the fourth circle ending at
      `x = 1191` at 1280 px (i.e. the row's own last 4 px margin keeps it 4 px off the
      container's inner right edge, 1195)
- [ ] Tests: hover/focus-visible → `bg-[#f1bc31] border-[#f1bc31]` with a **`#fff`** glyph;
      each button has an accessible name and renders a real icon (delta: the source's four
      `.fa` spans are `0 × 0` with no icon font loaded); each is a real destination

## Navy bar + rows + the gold slab (TDD)

- [ ] Tests first: at ≥992 px the bar is **full-bleed** (`w-full`), **`bg-[#202040]`**,
      `relative z-[3] p-0`, no border/radius/shadow, and **67.8 px** tall
      (24 + 19.8 + 24) at `y = 282`; below 992 px it is **`rgb(0,0,0)`**, `p-[10px_15px]` and
      **66 px** tall
- [ ] Tests: **no sticky/fixed** — scrolling moves the bar out of view (assert a negative `y`)
- [ ] Container: `mx-auto w-full px-[15px]` with the tiers `sm:max-w-[540px]
      md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]`; **gutters removed inside the bar
      below 992 px** (`max-lg:px-0`); row `flex items-center justify-between
      max-lg:flex-wrap max-lg:justify-between lg:flex-nowrap lg:justify-start`
- [ ] Tests: container width **1140 px** at 1280/1200, **960 px** at 1199/992, **720 px** at
      991/768, **345 px** at 375; the bar's background is `rgb(32,32,64)` at ≥992 px and
      `rgb(0,0,0)` below
- [ ] Desktop composition: the list wrapper is `grow basis-auto flex items-center` and the
      **list itself** carries **`mr-auto`** so the five rows are pinned to the container's
      **inner left edge** and all slack (measured **395.562 px** at 1280) is absorbed
      **between the rows and the search field**; the form takes `order-13` / `lg:order-last`
      (measured wrapper **853 px** at `x = 85`, rows at `x = 85, 166, 252.56, 357.5, 436.08`,
      field at `x = 938 → 1195`)
- [ ] Rows: `text-[11px] font-medium uppercase tracking-[2px] text-white px-5 py-6
      leading-[19.8px] relative` → **67.8 px**, stretched to the bar's full height; the
      source's `padding:24px 20px` preserved (`px-5` = 20 px, `py-6` = 24 px); each row's
      width = 20 + label + 20
- [ ] Tests: exactly **five** rows in one list, in order (current → dropdown → three plain);
      the list is `display:none` below 992 px and a row layout at ≥992 px while the toggler is
      the exact opposite
- [ ] Gold slab: a **`#f1bc31` block** `absolute inset-0 -z-10 origin-left scale-x-0
      transition-transform duration-200 ease-in-out` that wipes to `scale-x-100` on hover of
      its row (or a `::before` equivalent), staying **inside the row** and behind the label;
      the label itself stays `#fff` on hover
- [ ] Tests: the slab is hidden (`scaleX(0)`) at rest on non-current rows and **visible
      (`scaleX(1)`) at rest on the current row** (measured 81 × 67.8 on the first row);
      hovering row N moves the slab to row N only; `prefers-reduced-motion: reduce` disables
      the wipe
- [ ] Current row: `aria-current="page"` (the source's only signal is the gold slab, which is
      colour-only — add the semantic attribute) **plus** a real `focus-visible` ring on every
      row (delta: the source sets `outline:none !important`)
- [ ] Caret: `ChevronDown` at ~10–12 px on the **dropdown row only**, offset ~2.8 px from the
      label (the source's `0.255em` / 6 × 3 px triangle)
- [ ] Tests: the caret appears on exactly one row; no other row has a trailing glyph

## Search form (TDD)

- [ ] Tests first: the form is **257 × 46 px**, `border border-[rgba(255,255,255,0.1)]
      rounded-[5px] overflow-hidden`, vertically centred in the bar (measured
      `y = 292.89`), its right edge exactly on the container's inner right edge
      (`x = 938 → 1195` at 1280 px), and it does **not** shrink at any viewport ≥ 375 px
- [ ] Input: `w-[calc(100%-46px)] h-[46px] border-0 bg-white text-[14px]
      text-[rgba(0,0,0,0.7)] placeholder:text-[rgba(0,0,0,0.7)] rounded-none
      !shadow-none pt-[6px] pb-[6px] pl-4 pr-3` (the source's
      `padding:6px 12px 6px 16px`), `aria-label` (or a visually-hidden `<label>`) — delta: the
      source has a bare `placeholder="Search"` and **no** label
- [ ] Button: `size-[46px] bg-white text-[rgba(0,0,0,0.7)] cursor-pointer` with a **20 px**
      `Search` icon (measured 18.56 × 20) and an accessible name — a real `<button
      type="submit">`, never an icon-only unlabelled control
- [ ] Submit: `role="search"` form whose handler **calls `preventDefault()`** and surfaces a
      visible status/result (delta — the source's `action="#"` posts nowhere); assert the URL
      hash does not change on submit
- [ ] Tests: a visible `focus-visible` ring on the input (delta — the source's field has
      `outline:none` **and** `box-shadow:none !important`, i.e. no focus affordance at all);
      the field's ink is `rgba(0,0,0,0.7)` for both text and placeholder
- [ ] No-wrap guard: below ~375 px the toggler (85.27 px) plus a fixed 257 px field exceed the
      container's 290 px content box — the source **wraps its bar to 90.72 px** at 320 px;
      the recreation must let the field shrink/reflow instead, so **320 px has no horizontal
      overflow** (`scrollWidth === innerWidth`) and the bar keeps one line

## Dropdown (TDD)

- [ ] Tests first: `mouseenter` opens the panel (`aria-expanded="true"`, panel visible),
      `mouseleave` closes it; a **click** on the trigger toggles it; a click outside closes it
- [ ] `Dropdown`: panel `absolute top-full left-0 z-10 min-w-[160px] py-2 mt-0.5 bg-white
      rounded-[4px] border-0 shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)]`
- [ ] Tests: the panel measures **160 × 134.38 px at `x = 166, y = 351.8`** at 1280 px
      (left-aligned with its trigger, 2 px below the bar's 349.8 px bottom edge)
- [ ] Items: `block w-full px-6 py-1 text-[12px] text-black` (**29.59 px** rows) with a
      **visible** hover/`:focus-visible` state (delta — the source's
      `background:none; color:#fff` renders the hovered item **white on white**, i.e.
      invisible; use a light surface or a gold tint instead, and keep the text readable)
- [ ] Keyboard: **`ArrowDown`** on the trigger opens and focuses the first item;
      **`ArrowUp`/`ArrowDown`** inside the panel step focus; **`Escape`** closes and returns
      focus to the trigger; opening a second dropdown closes the first; activating an item
      closes the panel and navigates
- [ ] Viewport guard: reproduce or replace the source's `left:auto; right:0` flip when the
      panel would overflow the viewport (a collision-aware placement that never leaves the
      viewport at 320 px or at the right edge)
- [ ] Tests: `aria-haspopup`/`aria-expanded` stay in sync with visibility; the four items are
      real destinations (never `Page 1`…`Page 4`); the panel is not focusable while closed
- [ ] Dead code dropped: the unused `:active`/`.cl-active` `#007bff` state, the `.disabled`
      `#6c757d` colour and the unreferenced `cl-dropdown-menu-right` class are not reproduced

## Mobile bar + collapse (TDD)

- [ ] Tests first: at <992 px the bar's background is **`rgb(0,0,0)`**, height **66 px**, and
      the list is **not** rendered as visible rows until the toggler is activated
- [ ] `Toggler`: **first in DOM order**, a real `<button>` with an accessible name,
      `aria-expanded`, `aria-controls`; content = a three-bar glyph (lucide, **16 px**,
      `fill:currentColor` equivalent) + the uppercase **16 px** label `Menu` with
      `tracking-[0.1em]` in **`rgba(255,255,255,0.5)`**, sharing one `currentColor`, padding
      `pt-1 pb-1 pl-3 pr-0`; measured **85.27 × 24.72 px**, at the container's **left**,
      vertically centred in the 46 px line
- [ ] Tests: the toggler is `display:none` at ≥992 px and visible below; it keeps a **visible
      `focus-visible` ring** (delta — the source sets `outline:none !important`)
- [ ] Layout below 992 px: container `justify-between` and **wrapping** (`flex-wrap`), gutters
      removed, 720 px at 991/768 and 345 px at 375; the search field stays at the container's
      right on the same line as the toggler while the **panel takes its own full-width line**
      underneath (container measured 3 lines / 459.98 px tall when open at 375 px)
- [ ] Panel: animates `height` over **`0.35s ease`** (removed under
      `prefers-reduced-motion: reduce`); at 375 px the bar grows 66 → **479.98 px** and the
      collapse box measures **330 × 389.27** at `x = 15, y = 402.72`; a second activation
      reverses it back to 66 px and sets `aria-expanded="false"` (verified both directions at
      375 px and 320 px)
- [ ] Rows: single column, container width, `padding-bottom:10px`, each of the five rows
      **48.58 px** (`py-[14.4px]` at 11 px/19.8 px); resting **`rgba(255,255,255,0.7)`**; the
      current row's **label** `#f1bc31` (gold **text** on black) + `aria-current`; the gold
      hover slab disabled on mobile (`hover:before{display:none}` /
      `active > a:before{display:none}`)
- [ ] The mobile dropdown: **always expanded** in flow — `static w-full bg-black py-2` with
      four items at **`rgba(255,255,255,0.8)`**, 12 px, **29.59 px** rows, `px-6` (24 px)
      indent — matching the source's `display:block !important`; **or** provide a real
      disclosure control (a chevron button toggling the sub-list) *and* keep
      `aria-expanded` truthful — never a closed marker on a visible sub-list
- [ ] Tests: `aria-expanded` on the dropdown trigger is consistent with the sub-list's actual
      visibility; the hidden panel's rows are not focusable; no horizontal overflow at 320 px
      (`scrollWidth === innerWidth`)

## Materialised sections (TDD)

- [ ] Tests first: **thirteen** destinations (four social + five rows + four dropdown items)
      each resolve to a real `id`/route, and the app contains **zero** `href="#"`
- [ ] Sections of the source's *kinds* with own copy (the source has none; its 13 links all
      point at nothing) — an intro/home block for the wordmark, a current-page block, a
      pages group for the four dropdown items, blocks for the three plain rows, and a
      social/contact block for the four circles — `scroll-margin-top` ≥ **68 px** (≥66 px
      below 992 px) on every target
- [ ] Imagery (optional; the source ships none) from
      `https://picsum.photos/seed/gunwale-<n>/<w>/<h>`
- [ ] Tests: the page is taller than the viewport so the non-sticky bar genuinely scrolls
      away (the source's 461.8 px page plus 112 px of blank filler is replaced by real
      content)

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and a computed current year
- [ ] Minimal strip below the last section — a documented delta, since the source has no
      footer

## Quality gates

- [ ] Accessibility: real `button`s with `aria-expanded`/`aria-controls` for the toggler and
      the dropdown trigger; `aria-haspopup` on the trigger; `aria-current="page"` on the
      current row; a **labelled** search input inside `role="search"` and a **named** submit
      button; named icon-only social links and the toggler's menu glyph; visible
      `focus-visible` rings everywhere (the source removes all outlines with
      `outline:none !important`); `Escape` closes the dropdown; hidden content is not
      focusable; `prefers-reduced-motion: reduce` disables the `.35s` collapse animation and
      the `.2s` slab wipe; no horizontal overflow at 320 px
- [ ] Shape language: `rounded-none` on the bar, rows, slab, strip and the search input; the
      only rounding is the **`5px`** search field, the **`4px`** dropdown panel and the
      **`50%`** social circles; no pills
- [ ] Zero `colorlib` / "Website Menu 12" / `website-menu-12` strings in `apps/gunwale`
      (comments included); none of the source's five labels, its `Page n` items, its
      `Papermag`/`Magazine` wordmark, its `Search` placeholder or its `Website menu #02`
      heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are
      dead weight in the source — 247,856 B of the 259,459 B download), no inline SVG paths
      from the preview, no `cl-`/`ftco-` utility classes, no jQuery/Bootstrap, no Font Awesome
- [ ] Dead source code dropped: the `#343a40` `cl-bg-dark` surface (beaten by `#202040`), the
      `cl-navbar-dark` 50 %/75 %/25 % label colours, the Bootstrap `#007bff`/`#0056b3`/
      `#6c757d`/`#212529`/`#495057`/`#ced4da` defaults, the unused dropdown-item states and
      `cl-dropdown-menu-right`, the `@media print` block (incl. its `size:a3`), the
      `:where(html) … all: revert` reset, the system `Roboto` body stack, every Roboto woff2
      file, and the dead `.fa` glyph spans with their `cl-sr-only` labels
- [ ] Documented deltas recorded in the PR: new name + own two-line wordmark, own five labels
      and four dropdown items, the thirteen dead `href="#"` materialised as real content, real
      `lucide-react` social/caret/magnifier icons instead of the dead `.fa` spans and the CSS
      caret triangle, a labelled `role="search"` form with a real submit handler instead of
      `action="#"`, a **visible** dropdown-item hover instead of white-on-white, a visible
      current-row signal alongside the gold slab, restored hover/`focus-visible` affordances
      everywhere the source says `outline:none`, a non-wrapping mobile bar below 375 px where
      the source wraps at 320 px, Google Fonts Poppins instead of eight self-hosted Roboto
      files, focus management on `Escape`, reduced-motion handling, the 112 px filler page
      replaced with real content, and the added footer
- [ ] `scripts/verify-app.sh gunwale` green (typecheck + lint + knip + fallow + vitest 100 % +
      build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace; footer
      attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 12` item `[x]` with the
      live `https://gunwale.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
