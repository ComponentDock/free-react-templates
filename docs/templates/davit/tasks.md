# Davit — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/davit`
> (<https://davit.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Website Menu V15"** (source slug `website-menu-15` — the Website Menus
family's **white floating card with an amber accent and a circular cart link**: a centred heading
band (`padding:112px 0`) over the page's **`#fafafa`**, then a **white card** (`padding:10px`,
**`border-radius:5px`**, shadow `0 5px 20px -17px rgba(0,0,0,0.34)`, ≈**81.8 px** tall) holding a
**single-line uppercase `#000` `20 px` wordmark** on the left, **five `13 px` uppercase
`#333333` rows with `letter-spacing:1px` pushed to the right** (`margin-left:auto` +
`margin-right:1rem`) and, as the list's **sixth item**, a **`40 px` circular cart link**
(`50%`, `1px solid #fec771`, amber glyph) whose hover/click opens a **white `4 px`-rounded
dropdown** (`0 10px 34px -20px rgba(0,0,0,0.41)`, items `12 px` `#000`, `padding:4px 24px`, hover
`bg #fec771 text #fff`, two `1px #e9ecef` dividers); the accent is **amber `#fec771`** — the current
row's label at rest, the hovered row's label, the cart ring + glyph, and the dropdown item hover
fill. A `992 px` breakpoint turns the card **`#000`** (**66 px**, `padding:10px 15px`), the
wordmark/glyph white, and stacks the six items into a **full-width height-animated panel**
(`rgba(255,255,255,.7)`, hover/current `#fff`, `padding:.9rem 0` each) behind a `☰ MENU` toggler;
the cart keeps its `40 px` amber ring inside the panel, and the header **never wraps** (66 px at
320 px too). The source has **no images, no content sections, no footer, no second page, no sticky
chrome, no social row, no search field** and does not scroll: **11** of its **12** links are
`href="#"`.

The sheet is **18,643 B** (156 rule blocks, 18 `@media` blocks, **zero** `sticky`/`fixed`) — 3.7 kB
larger than the `-14` sibling's because this variant ships the whole `.cl-dropdown*` family (25
`dropdown` occurrences, zero `form-control`/`searchform`/`social`), and **no webfont is loaded at
all**, so `"Poppins", Arial, sans-serif` renders in **Arial**; the archive's **eight** Roboto woff2
files (247,856 B = **95.8 %** of the 258,679 B download; the four latin files are byte-identical,
sha256 `0a44e0bb…`, and so are the four latin-ext files, `cdd53dc5…`) never render. Preview: the
slug-only path `https://preview.colorlib.com/theme/website-menu-15/` returns **HTTP 404** — the
**live preview** is `https://preview.colorlib.com/theme/bootstrap/website-menu-15/` (**HTTP 200**,
4,713 B, `<title>Website menu 05</title>`; its `css/style.css?v=795cf346` 18,643 B and
`js/snippet.js?v=a1b5a81a` 5,798 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-15.zip`, HTTP 200, 258,679 B — the
un-versioned source copy). Screenshot: `website-menu-15.jpg` (HTTP 200, AVIF, 5,695 B, 1200×972) —
a browser-chrome mock: a centred black heading `Website menu #05`, then the white rounded card with
the black uppercase `LOGO` wordmark at its left, the right-aligned uppercase rows `HOME` (amber) ·
`ACCESSORIES` · `SHOP` · `PRODUCTS` · `CONTACT`, and an amber-ringed circular cart button with an
amber cart glyph at its right.

Spec: `openspec/specs/template-davit/spec.md`. New name: **davit** (the small deck crane that
hoists a ship's boat over the side — a fitting that swings its load outboard the way this variant's
cart link swings its dropdown open; it keeps the family's nautical run: menutree · slidenav ·
navpill · menuribbon · starboard · larboard · topdeck · bowsprit · gangway · halyard · ensign ·
gunwale · capstan · windlass · **davit**). Never reuse the source slug, the name "Website Menu 15",
the `Logo` wordmark, the **five source labels** (`Home`, `Accessories`, `Shop`, `Products`,
`Contact`), the five dropdown placeholder strings (`Action`, `Another action`, `Something else
here`, `Separated link`, `One more separated link`), the heading string `Website menu #05`, the
`cl-`/`ftco-` namespace, the inline SVG glyph paths, the Roboto woff2 files, or any copy verbatim.
Design notes: `docs/templates/davit/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/davit`
- [ ] Rename package to `@free-react-templates/davit`; set
      `"homepage": "https://davit.free.componentdock.com"`
- [ ] `public/CNAME` = `davit.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/davit` (`grep -c "free-react-templates/davit" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app — Tailwind
      v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap`
      (a **delta**: the source loads **no** webfont and renders Arial; its eight self-hosted Roboto
      files are dead weight and are never copied). Icons: `lucide-react` (`Menu` bars glyph,
      `ShoppingCart`, plus any chevron for the dropdown trigger)
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #fec771`, `--color-page: #fafafa`,
      `--color-card: #fff`, `--color-card-mobile: #000`, `--color-row: #333333`,
      `--color-row-mobile: rgba(255,255,255,0.7)`, `--color-item: #000`, `--color-divider: #e9ecef`,
      `--color-ink: #808080`, `--color-toggler: rgba(255,255,255,0.5)`, `--radius-card: 5px`,
      `--radius-menu: 4px`, `--shadow-card: 0 5px 20px -17px rgba(0,0,0,0.34)`,
      `--shadow-menu: 0 10px 34px -20px rgba(0,0,0,0.41)`,
      `--font-sans: "Poppins", Arial, sans-serif` (design-token notes only — no provenance
      comments; note the template rounds **only** the card `5px`, the cart `50%` and the dropdown
      `4px`)
- [ ] One `navItems` data structure (5 rows, current flagged) + one `cartMenuItems` structure
      (5 items) — never hand-written duplicates; rendered once per layout (desktop row / mobile
      panel)

## Heading band (TDD)

- [ ] Tests first: the band has `padding:112px 0` (`py-28`) over **`#fafafa`**; its heading is
      **28 px / 400 / `line-height:1.5` (42 px) / `#000`** with an `8px` margin-bottom plus a
      `48px` block margin, centred, in a column that is `50%` at ≥768 px and `100%` below → the
      card's top edge lands at exactly **210 px** below the page top at every width
      (112 + 42 + 8 + 48)
- [ ] Tests: the heading's text is **own copy** — assert `Website menu #05` (and the word
      `Colorlib`) never appears in the app

## Floating white card + wordmark (TDD)

- [ ] Tests first: at ≥992 px the card is **`rgb(255,255,255)`**, `p-[10px]`, **`rounded-[5px]`**,
      `shadow-[0_5px_20px_-17px_rgba(0,0,0,0.34)]`, `relative z-[3]`, **no** hairline borders and
      ≈ **81.8 px** tall at `y = 210`, ≈ 1110 px wide at 1440 px
- [ ] Tests: **no sticky/fixed** — scrolling moves the card out of view (assert a negative `y`)
- [ ] Tests: **the radius and shadow survive the breakpoint** — below `992 px` the background is
      `rgb(0,0,0)` and the class list still carries `rounded-[5px]` + the shadow
- [ ] Container: `mx-auto w-full px-[15px]` with the tiers `sm:max-w-[540px] md:max-w-[720px]
      lg:max-w-[960px] xl:max-w-[1140px]`; **gutters removed inside the card below 992 px**
      (`max-lg:px-0`); row `flex items-center justify-between max-lg:flex-wrap lg:flex-nowrap`
- [ ] Tests: container width **1140 px** at 1440/1200, **960 px** at 992, **720 px** at 991/768,
      **345 px** at 375
- [ ] Wordmark: own brand text, **single line**, `text-[20px] leading-[36px] font-bold uppercase`
      `#000` (`max-lg:text-white`), `py-[5px] mr-4 inline-block whitespace-nowrap`, a link to the
      top of the page with a visible focus ring and **no hover colour change**
- [ ] Tests: the wordmark box is ≈ **59 × 46 px** inside the 81.8 px line; the source's `Logo`
      string is never rendered

## Right-aligned rows with the amber current row (TDD)

- [ ] Tests first: exactly **five** text rows in one list, in order (current, then the four plain
      ones) then the cart item, rendered `display:none` below 992 px and a `flex row` at
      ≥992 px while the toggler is the exact opposite
- [ ] The list is **`ml-auto mr-4`** (`margin-left:auto` + `margin-right:1rem` at ≥768 px) so it is
      **right-aligned**: it ends **16 px left of the container's content right edge** (measured
      **578.6 × 61.8**)
- [ ] Rows: `text-[13px] font-normal uppercase tracking-[1px] text-[#333333] px-5 py-[19.2px]
      leading-[23.4px] relative` → **61.8 px** (the source's `padding:1.2rem 20px`; the card's
      81.8 px = 10 + 61.8 + 10). ⚠️ the `13 px` **uppercase** type is this variant's signature — do
      **not** copy the `-14` sibling's `14 px` sentence-case
- [ ] Hover: the label turns **`#fec771`**; the **current** row's label is **`#fec771`** at rest on
      desktop with `aria-current="page"`, and **`#fff`** below 992 px
- [ ] Tests: there is **no** underline/slab/background on either state (rows accent with `color`
      only — do **not** port the `-13` sibling's `:before` wipe or the `-12` sibling's slab)
- [ ] Tests: a visible `focus-visible` ring on every row (delta — the source sets
      `outline:none !important`), and horizontal padding `0` with `py-[.9rem]` rows in the mobile
      panel

## Circular cart link + dropdown (TDD)

- [ ] Tests first: the cart trigger is **`size-10` (40 px)** with `rounded-full`,
      **`border border-[#fec771]`**, `p-0`, amber glyph, and it is the **last item of the nav list**
      (no `order` utility — unlike the `-14` sibling's social row)
- [ ] Tests: at ≥992 px it is vertically centred in the 61.8 px row and flush with the list's right
      edge (ring at `x = 1194 → 1234` at 1440 px)
- [ ] Dropdown panel: `bg-white rounded-[4px] p-0 border-0 shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)]`,
      right-aligned under the circle (measured ≈ 179.4 × 182)
- [ ] Items: **five** own-copy entries, `text-[12px] text-black px-6 py-[4px]`
      (`padding:4px 24px`), separated by **two** `border-t border-[#e9ecef] my-2` dividers; hover
      **`bg-[#fec771] text-white`**
- [ ] Tests: **no** caret triangle — the source sets `.cl-dropdown-toggle::after{display:none}` and
      declares **no** `.caret` rule (the `<b class="caret">` in the source is dead markup)
- [ ] Behaviour: opens on **hover and on click**; closes on outside click, on item activation and on
      `Escape`; `Escape` returns focus to the trigger; `ArrowDown` opens + focuses the first item
      and `ArrowDown`/`ArrowUp` move between items
- [ ] Tests: the trigger carries `aria-haspopup="true"`, `aria-expanded` and `aria-controls`; each
      item is a **real** destination (never `href="#"`)
- [ ] Tests: none of the source's placeholder strings (*Action*, *Another action*, *Something else
      here*, *Separated link*, *One more separated link*) appears in the app

## Mobile card + full-width collapse panel (TDD)

- [ ] Tests first: at <992 px the card's background is **`rgb(0,0,0)`**, height **66 px** at every
      width 320–991 px, `p-[10px_15px]`, the wordmark and glyphs white, and the six items are **not**
      visible until the toggler is activated
- [ ] `Toggler`: **second in DOM order** (right after the wordmark — this variant has no social
      block), a real `<button>` with an accessible name, `aria-expanded`, `aria-controls`; content =
      a `lucide` three-bar glyph (**16 px**, `currentColor`) + the uppercase **16 px** label `Menu`
      with `tracking-[0.1em]` in **`rgba(255,255,255,0.5)`**, `pr-0`; measured ≈ **85.3 × 24.7 px**
      at the container's right, `display:none` at ≥992 px, with a **visible focus ring** (delta)
- [ ] Panel geometry: the wrapper is `basis-full grow` (`flex-basis:100%`) so the opened panel takes
      a **full-width line under the header row** — measured **360 × 310.9 px** at 420 px with the
      card growing **66 → 376.9 px**; the six items stack in a column, the list carries
      `padding-bottom:10px`
- [ ] Panel animation: `height` over **`0.35s ease`**, removed under
      `prefers-reduced-motion: reduce`; a second activation reverses it and sets
      `aria-expanded="false"`; hidden items are not focusable
- [ ] Tests: items resting **`rgba(255,255,255,0.7)`**, hover and current item **`#fff`**,
      `py-[.9rem]` with horizontal padding `0` (**52.2 px** rows), and the **cart circle keeps its
      `40 × 40` amber ring** in the panel
- [ ] Tests: **no wrap** — the card is 66 px at 375 px and 320 px with **no horizontal overflow**
      (`scrollWidth === innerWidth`); do **not** port the `-14` sibling's two-line 91 px wrap

## Materialised sections (TDD)

- [ ] Tests first: **eleven** destinations (five rows + five dropdown items + the cart trigger) are
      real, and the app contains **zero** `href="#"`
- [ ] In-app sections of the source's *kinds* with own copy (the source has none; its links all
      point at nothing) — an intro/home block for the wordmark, a current-page block, blocks for the
      three plain rows, and a shop/cart block for the cart link + menu — with `scroll-margin-top`
      ≥ **64 px** (≥ 66 px below 992 px) on every target
- [ ] Imagery (optional; the source ships none) from
      `https://picsum.photos/seed/davit-<n>/<w>/<h>`
- [ ] Tests: the page is taller than the viewport so the non-sticky card genuinely scrolls away

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and a computed current year
- [ ] Minimal strip below the last section — a documented delta, since the source has no footer

## Quality gates

- [ ] Accessibility: a real `<button>` toggler with `aria-expanded`/`aria-controls` and an
      accessible name; the cart trigger with `aria-haspopup`/`aria-expanded`/`aria-controls`;
      keyboard support for the dropdown (hover + click + arrows + `Escape` + outside click);
      `aria-current="page"` on the current row; named cart/menu icons; visible `focus-visible` rings
      everywhere (the source removes all outlines with `outline:none !important`); hidden panel
      content not focusable; `prefers-reduced-motion: reduce` disables the `.35s` collapse; no
      horizontal overflow at 320 px
- [ ] Shape language: the **only** rounding is the card's **`5px`**, the cart's **`50%`** and the
      dropdown's **`4px`** — no pills, no card hairline borders
- [ ] Zero `colorlib` / "Website Menu 15" / `website-menu-15` strings in `apps/davit` (comments
      included); none of the source's five labels, six-item list, `Logo` wordmark, five dropdown
      placeholder strings or `Website menu #05` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead
      weight — 247,856 B of the 258,679 B download), no inline SVG paths from the preview, no
      `cl-`/`ftco-` utility classes, no jQuery/Bootstrap, no Font Awesome
- [ ] Dead source code dropped: the `:where(html) … all: revert` reset, the `@media print` block
      (incl. `@page{size:a3}`), the unused `.fade` (3) and `.nav` rules, the empty
      `<b class="caret">`, the `.cl-dropdown-toggle::after` caret triangle, the Bootstrap palette
      (`#007bff`/`#0056b3`/`#6c757d`/`#212529`/`#f8f9fa`), the `cl-collapsed` class the sheet never
      styles, the system `Roboto` body stack, and all Roboto woff2 files
- [ ] Documented deltas recorded in the PR: new name + own wordmark, own five labels and five
      dropdown items, the eleven dead `href="#"` materialised, real `lucide-react` icons instead of
      the inline SVG paths, a real Google Fonts Poppins `<link>` instead of eight dead self-hosted
      Roboto files, restored hover/`focus-visible` affordances, `aria-current` on the current row,
      keyboard dropdown support, reduced-motion handling, the blank filler page replaced with real
      content, and the added footer
- [ ] `scripts/verify-app.sh davit` green (typecheck + lint + knip + fallow + vitest 100 % + build);
      `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace; footer
      attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 15` item `[x]` with the live
      `https://davit.free.componentdock.com` URL + homepage and run `npm run readme:status`
