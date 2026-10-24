# Windlass — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/windlass`
> (<https://windlass.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Website Menu V14"** (source slug `website-menu-14` — the Website Menus
family's **white floating card with a pink accent and a social row**: a centred heading band
(`padding:112px 0`) over the page's **`#fafafa`**, then a **white card** (`padding:10px`,
**`border-radius:5px`**, shadow `0 5px 20px -17px rgba(0,0,0,0.34)`, ≈**84 px** tall) holding a
**single-line uppercase `#000` `20 px` wordmark** on the left, **five `14 px` `#333333` rows
pushed to the right** (`margin-left:auto` + `margin-right:1rem`) and **four `40 px` circular
buttons** (`50%`, `1px solid #e6e6e6`, glyph `#4d4d4d`) at its far right (`order:13`); the accent
is **pink `#fc7fb2` applied to text only** — the current row's label at rest and the hovered row's
label — plus the circles' **pink hover fill** with a white glyph. A `992 px` breakpoint turns the
card **`#000`** (**66 px**, `padding:10px 15px`), the wordmark/glyphs white, the circles **`30 px`**
with white rings, and stacks the five rows into a **full-width height-animated panel**
(`rgba(255,255,255,.7)`, hover/current `#fff`) behind a `☰ MENU` toggler; below ~`420 px` the header
**wraps to two lines** (**91 px**). The source has **no images, no content sections, no footer, no
second page, no sticky chrome** and does not scroll: **9** of its **10** links are `href="#"`.

There is **no dropdown and no search field** in this sheet (14,904 B — the family's leanest: zero
`dropdown`/`form-control`/`searchform` occurrences), and **no webfont is loaded at all**, so
`"Poppins", Arial, sans-serif` renders in **Arial**; the archive's **eight** Roboto woff2 files
(247,856 B = **96.4 %** of the 257,214 B download) never render. Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-14/` returns **HTTP 404** — the **live preview**
is `https://preview.colorlib.com/theme/bootstrap/website-menu-14/` (**HTTP 200**, 3,336 B,
`<title>Website menu 04</title>`; its `css/style.css?v=b776cb12` 14,904 B and
`js/snippet.js?v=39f937fc` 2,671 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-14.zip`, HTTP 200, 257,214 B — the
un-versioned source copy). Screenshot: `website-menu-14.jpg` (HTTP 200, AVIF, 5,514 B, 1200×972) —
a browser-chrome mock: a centred black heading `Website menu #04`, then the white rounded card with
the black uppercase `DIGITAL` wordmark at its left, the grey rows `Home` (pink) · `About` · `Work` ·
`Blog` · `Contact`, and four circular outline buttons carrying the Facebook / Twitter / Instagram /
Dribbble marks at its right.

Spec: `openspec/specs/template-windlass/spec.md`. New name: **windlass** (the horizontal drum winch
that hauls the anchor chain — the deck counterpart of the `capstan`, keeping the family's nautical
run: menutree · slidenav · navpill · menuribbon · starboard · larboard · topdeck · bowsprit ·
gangway · halyard · ensign · gunwale · capstan · **windlass**). Never reuse the source slug, the
name "Website Menu 14", the `Digital` wordmark, the **five source labels** (`Home`, `About`,
`Work`, `Blog`, `Contact`), the four platform names as copy, the heading string
`Website menu #04`, the `cl-`/`ftco-` namespace, the inline SVG bars glyph, the Roboto woff2 files,
or any copy verbatim. Design notes: `docs/templates/windlass/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/windlass`
- [ ] Rename package to `@free-react-templates/windlass`; set
      `"homepage": "https://windlass.free.componentdock.com"`
- [ ] `public/CNAME` = `windlass.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/windlass`
      (`grep -c "free-react-templates/windlass" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app — Tailwind
      v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap`
      (a **delta**: the source loads **no** webfont and renders Arial; its eight self-hosted Roboto
      files are dead weight and are never copied). Icons: `lucide-react` (`Menu` bars glyph) plus **inline-SVG brand marks**
      for `Facebook`, `Twitter`, `Instagram`, `Dribbble` (lucide-react exports no
      brand icons)
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #fc7fb2`, `--color-page: #fafafa`,
      `--color-card: #fff`, `--color-card-mobile: #000`, `--color-row: #333333`,
      `--color-row-mobile: rgba(255,255,255,0.7)`, `--color-ring: #e6e6e6`,
      `--color-ring-mobile: #fff`, `--color-glyph: #4d4d4d`, `--color-ink: #808080`,
      `--color-toggler: rgba(255,255,255,0.5)`, `--radius-card: 5px`,
      `--shadow-card: 0 5px 20px -17px rgba(0,0,0,0.34)`,
      `--font-sans: "Poppins", Arial, sans-serif` (design-token notes only — no provenance
      comments; note the template rounds **only** the card `5px` and the circles `50%`)
- [ ] One `navItems` data structure (5 rows, `Home` flagged current) + one `socialItems` structure
      (4 platforms) — never hand-written duplicates; rendered once per layout (desktop row / mobile
      panel)

## Heading band (TDD)

- [ ] Tests first: the band has `padding:112px 0` (`py-28`) over **`#fafafa`**; its heading is
      **28 px / 400 / `line-height:1.5` (42 px) / `#000`** with an `8px` margin-bottom plus a
      `48px` block margin, centred, in a column that is `50%` at ≥768 px and `100%` below → the
      card's top edge lands at exactly **210 px** below the page top at every width
      (112 + 42 + 8 + 48)
- [ ] Tests: the heading's text is **own copy** — assert `Website menu #04` (and the word
      `Colorlib`) never appears in the app

## Floating white card + wordmark (TDD)

- [ ] Tests first: at ≥992 px the card is **`rgb(255,255,255)`**, `p-[10px]`, **`rounded-[5px]`**,
      `shadow-[0_5px_20px_-17px_rgba(0,0,0,0.34)]`, `relative z-[3]`, **no** hairline borders and
      ≈ **84 px** tall at `y = 210`, ≈ 1110 px wide at 1440 px
- [ ] Tests: **no sticky/fixed** — scrolling moves the card out of view (assert a negative `y`)
- [ ] Tests: **the radius and shadow survive the breakpoint** — below `992 px` the background is
      `rgb(0,0,0)` and the class list still carries `rounded-[5px]` + the shadow
- [ ] Container: `mx-auto w-full px-[15px]` with the tiers `sm:max-w-[540px] md:max-w-[720px]
      lg:max-w-[960px] xl:max-w-[1140px]`; **gutters removed inside the card below 992 px**
      (`max-lg:px-0`); row `flex items-center justify-between max-lg:flex-wrap lg:flex-nowrap`
- [ ] Tests: container width **1140 px** at 1440/1200, **960 px** at 1100/992, **720 px** at 991/768,
      **345 px** at 375
- [ ] Wordmark: own brand text, **single line**, `text-[20px] leading-[36px] font-bold uppercase`
      `#000` (`max-lg:text-white`), `py-[5px] mr-4 inline-block whitespace-nowrap`, a link to the
      top of the page with a visible focus ring and **no hover colour change**
- [ ] Tests: the wordmark box is ≈ **78.5 × 46 px** inside the 84 px line; the source's `Digital`
      string is never rendered

## Right-aligned rows with the pink current row (TDD)

- [ ] Tests first: exactly **five** rows in one list, in order (`Home` current, then `About`,
      `Work`, `Blog`, `Contact`), rendered `display:none` below 992 px and a `flex row` at ≥992 px
      while the toggler is the exact opposite
- [ ] The list is **`ml-auto mr-4`** (`margin-left:auto` + `margin-right:1rem` at ≥768 px) so it is
      **right-aligned**: it ends **16 px left of the social block**, which sits flush with the
      card's inner right edge (measured **383 × 63.6**)
- [ ] Rows: `text-[14px] font-normal text-[#333333] px-5 py-[19.2px] leading-[25.2px] relative`
      → **63.6 px** (the source's `padding:1.2rem 20px`; the card's 84 px = 10 + 63.6 + 10)
- [ ] Hover: the label turns **`#fc7fb2`**; the **current** row's label is **`#fc7fb2`** at rest on
      desktop with `aria-current="page"`, and **`#fff`** below 992 px
- [ ] Tests: there is **no** underline/slab/background on either state (the accent is `color`
      only — do **not** port the `-13` sibling's `:before` wipe or the `-12` sibling's slab)
- [ ] Tests: a visible `focus-visible` ring on every row (delta — the source sets
      `outline:none !important`), and horizontal padding `0` with `py-[.5rem]` rows in the mobile
      panel

## Social circles (TDD)

- [ ] Tests first: **four** circular links in order (Facebook, Twitter, Instagram, Dribbble) at
      **`size-10` (40 px)** with `rounded-full`, `border border-[#e6e6e6]`, glyph `#4d4d4d`,
      `mr-1` (4 px), placed **last** in the desktop row (`order-last` / `order-13`)
- [ ] Hover: **`hover:bg-[#fc7fb2] hover:border-[#fc7fb2] hover:text-white`** (transparent at rest)
- [ ] Tests: below 992 px the circles are **`size-[30px]`**, `border-white`, glyph white, and stay
      **inline in the header row** (they are `order-last` only at ≥992 px)
- [ ] Tests: each link is a **real external destination** (`target="_blank" rel="noreferrer"`) and
      carries the platform name as its accessible name — the source buries the name in
      `<i class="cl-sr-only">` inside a **0 × 0 px** Font-Awesome span (the preview ships no icon
      font), so the recreation draws real **inline-SVG brand marks** in the same circles

## Mobile card + full-width collapse panel (TDD)

- [ ] Tests first: at <992 px the card's background is **`rgb(0,0,0)`**, height **66 px**,
      `p-[10px_15px]`, the wordmark and glyphs white, and the rows are **not** visible until the
      toggler is activated
- [ ] `Toggler`: **third in DOM order** (after the wordmark and the social block), a real
      `<button>` with an accessible name, `aria-expanded`, `aria-controls`; content = a `lucide`
      three-bar glyph (**16 px**, `currentColor`) + the uppercase **16 px** label `Menu` with
      `tracking-[0.1em]` in **`rgba(255,255,255,0.5)`**, `pr-0`; measured ≈ **93 × 25 px** at the
      container's right, `display:none` at ≥992 px, with a **visible focus ring** (delta)
- [ ] Panel geometry: the wrapper is `basis-full grow` (`flex-basis:100%`) so the opened panel takes
      a **full-width line under the header row** — measured **360 × 216 px** at 420 px with the card
      growing **66 → 282 px**; the five rows stack in a column, the list carries
      `padding-bottom:10px`
- [ ] Panel animation: `height` over **`0.35s ease`**, removed under
      `prefers-reduced-motion: reduce`; a second activation reverses it and sets
      `aria-expanded="false"`; hidden rows are not focusable
- [ ] Tests: rows resting **`rgba(255,255,255,0.7)`**, hover and current row **`#fff`**, `py-[.5rem]`
      with horizontal padding `0`
- [ ] Tests: **wrap point** — at 375 px and 320 px the header wraps to two lines (card **91 px**)
      with **no horizontal overflow** (`scrollWidth === innerWidth`)

## Materialised sections (TDD)

- [ ] Tests first: **nine** destinations (five rows + four social) are real, and the app contains
      **zero** `href="#"`
- [ ] Five in-app sections of the source's *kinds* with own copy (the source has none; its links all
      point at nothing) — an intro/home block for the wordmark, a current-page block, blocks for the
      three plain rows, and a contact/about block for the social links — with `scroll-margin-top`
      ≥ **64 px** (≥ 66 px below 992 px) on every target
- [ ] Imagery (optional; the source ships none) from
      `https://picsum.photos/seed/windlass-<n>/<w>/<h>`
- [ ] Tests: the page is taller than the viewport so the non-sticky card genuinely scrolls away

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and a computed current year
- [ ] Minimal strip below the last section — a documented delta, since the source has no footer

## Quality gates

- [ ] Accessibility: a real `<button>` toggler with `aria-expanded`/`aria-controls` and an
      accessible name; `aria-current="page"` on the current row; named, real external social links;
      visible `focus-visible` rings everywhere (the source removes all outlines with
      `outline:none !important`); hidden panel content not focusable;
      `prefers-reduced-motion: reduce` disables the `.35s` collapse; no horizontal overflow at
      320 px
- [ ] Shape language: the **only** rounding is the card's **`5px`** and the circles' **`50%`** — no
      pills, no card hairline borders, no `4px` panels (this variant ships none)
- [ ] Zero `colorlib` / "Website Menu 14" / `website-menu-14` strings in `apps/windlass` (comments
      included); none of the source's five labels, its `Digital` wordmark, its four platform names
      or its `Website menu #04` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead
      weight — 247,856 B of the 257,214 B download), no inline SVG paths from the preview, no
      `cl-`/`ftco-` utility classes, no jQuery/Bootstrap, no Font Awesome
- [ ] Dead source code dropped: the `:where(html) … all: revert` reset, the `@media print` block
      (incl. `@page{size:a3}`), the unused `.fade` (3) and `.nav` rules, the Bootstrap palette
      (`#007bff`/`#0056b3`/`#6c757d`/`#212529`/`#f8f9fa`), the `cl-collapsed` class the sheet never
      styles, the system `Roboto` body stack, and all Roboto woff2 files
- [ ] Documented deltas recorded in the PR: new name + own wordmark, own five labels and four icon
      links, the nine dead `href="#"` materialised, real inline-SVG platform marks instead of the
      0 × 0 px Font-Awesome spans, a real Google Fonts Poppins `<link>` instead of eight dead
      self-hosted Roboto files, restored hover/`focus-visible` affordances, `aria-current` on the
      current row, reduced-motion handling, the blank filler page replaced with real content, and
      the added footer
- [ ] `scripts/verify-app.sh windlass` green (typecheck + lint + knip + fallow + vitest 100 % +
      build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace; footer
      attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 14` item `[x]` with the live
      `https://windlass.free.componentdock.com` URL + homepage and run `npm run readme:status`
