# Capstan — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/capstan`
> (<https://capstan.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Website Menu V13"** (source slug `website-menu-13` — the Website
Menus family's **minimal transparent white bar** variant: a centred heading band (`padding:112px
0`) over the page's `#fff`, then a **transparent, hairline-bounded strip** (`1px solid
rgba(0,0,0,0.05)` top and bottom, `≈63.77 px` tall) carrying a **single-line uppercase `#000`
wordmark** on the left, **six `13 px` grey rows** floating in the middle (`margin:auto`) and a
**white `257 × 46` four-pixel-radius search field on the right**; the accent is a **teal
`#40bfc1`** that shows as a **full-width `1px` underline wiping `scaleX(0)→scaleX(1)` under a
hovered row** (`bottom:-1px`, `0.5s ease-in-out`) — permanently visible under the current row
whose label stays `#000` — and as the **dropdown's hover fill**. A `992 px` breakpoint turns the
strip **`#000`** (`68 px`), shows a `◫ Menu` toggler and stacks the list into a height-animated
panel (current row's label teal, underline off, `Page` sub-list always expanded, `#000`, with a
`1px rgba(255,255,255,0.3)` left rule); a `768 px` breakpoint **removes the search field**. The
source has **no images, no content sections, no footer, no second page and no sticky chrome**:
**10** of its **11** links are `href="#"`.

Type is **Poppins 400** (`body{font-family:"Poppins", Arial, sans-serif; font-size:16px;
line-height:1.8; background:#fff; color:gray}`); the sheet also declares self-hosted **Roboto
400/700** and the archive ships four more **100/300** files it never declares — **none of it
renders**, so 247,856 B of the 259,149 B download is dead font payload. Preview: the slug-only
path `https://preview.colorlib.com/theme/website-menu-13/` returns **HTTP 404** — the **live
preview** is `https://preview.colorlib.com/theme/bootstrap/website-menu-13/` (**HTTP 200**,
4,216 B, `<title>Website menu 03</title>`; its `css/style.css?v=821da340` 21,762 B and
`js/snippet.js?v=0986fb90` 5,798 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-13.zip`, HTTP 200, 259,149 B — the
un-versioned source copy). Screenshot: `website-menu-13.jpg` (HTTP 200, AVIF, 6,057 B, 1200×972)
— a browser-chrome mock: a centred black heading `Website menu #03`, then a white bar bounded by
two hairlines with the black uppercase `MAGZ.` wordmark at its left, the centred grey rows
`Home` (black, teal underline beneath) · `Page ▾` · `Catalog` · `Work` · `Blog` · `Contact`, and
a white `Search` field (black magnifier) at its right; the open dropdown lists `Page 1`…`Page 4`
with the hovered `Page 4` filled teal with white text.

Spec: `openspec/specs/template-capstan/spec.md`. New name: **capstan** (the spoked winch on a
ship's deck that winds in the rope — a small, quiet, striped drum that simply *bounds* the deck,
which is exactly this chrome's role). Never reuse the source slug `website-menu-13`, the name
"Website Menu 13", the `Magz.` wordmark, the **six source labels** (`Home`, `Page`, `Catalog`,
`Work`, `Blog`, `Contact`), the `Page 1`…`Page 4` items, the `Search` placeholder, the heading
string `Website menu #03`, the `cl-`/`ftco-` namespace, the inline SVG bars/search glyphs, the
self-hosted Roboto woff2 files, or any copy verbatim. Design notes:
`docs/templates/capstan/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/capstan`
- [ ] Rename package to `@free-react-templates/capstan`; set
      `"homepage": "https://capstan.free.componentdock.com"`
- [ ] `public/CNAME` = `capstan.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/capstan`
      (`grep -c "free-react-templates/capstan" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app —
      Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap`
      (the source's eight self-hosted Roboto files — including the four 100/300 faces it never
      even declares — are never copied). Icons: `lucide-react` (`Search` magnifier, a three-bar
      menu glyph for the toggler, `ChevronDown` for the dropdown caret)
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #40bfc1`, `--color-bar-dark: #000`,
      `--color-page: #fff`, `--color-ink: #808080`, `--color-row-mobile: rgba(255,255,255,0.7)`,
      `--color-dropdown-item-mobile: rgba(255,255,255,0.8)`,
      `--color-toggler: rgba(255,255,255,0.5)`,
      `--color-field-hairline: rgba(255,255,255,0.1)`,
      `--color-hairline-dark: rgba(0,0,0,0.05)`,
      `--color-search-ink: rgba(0,0,0,0.7)`,
      `--shadow-panel: 0 10px 34px -20px rgba(0,0,0,0.41)`,
      `--radius-field: 4px`, `--radius-panel: 4px`,
      `--font-sans: "Poppins", Arial, sans-serif` (design-token notes only — no provenance
      comments; note the template rounds **only** the search field `4px` and the dropdown panel
      `4px`; the strip has **no** radius and **no** shadow)
- [ ] One `navItems` data structure (6 rows: `current` → `dropdown`(4 items) → three plain) —
      never hand-written duplicates; rendered once per layout (desktop strip / mobile panel)

## Heading band (TDD)

- [ ] Tests first: the band has `padding:112px 0` (`py-28`) over **`#fff`**; its heading is
      **28 px / 400 / `line-height:1.5` (42 px) / `#000`** with an `8px` margin-bottom plus a
      `48px` block margin, centred, in a column that is `50%` at ≥768 px and `100%` below →
      the strip's top edge lands at exactly **210 px** below the page top at every width
      (112 + 42 + 8 + 48)
- [ ] Tests: the heading's text is **own copy** — assert `Website menu #03` (and the word
      `Colorlib`) never appears in the app

## Transparent hairline strip + wordmark (TDD)

- [ ] Tests first: at ≥992 px the bar is **full-bleed** (`w-full`), **transparent** (the page
      `#fff` shows through — assert the computed background is `rgba(0,0,0,0)`), `relative z-[3]
      p-0`, **no** radius/shadow, **`border-y border-[rgba(0,0,0,0.05)]`**, and ≈ **63.77 px**
      tall at `y = 210`
- [ ] Tests: **no sticky/fixed** — scrolling moves the bar out of view (assert a negative `y`)
- [ ] Tests: below `992 px` the bar is **`rgb(0,0,0)`**, `p-[10px_15px]` and **68 px** tall
- [ ] Container: `mx-auto w-full px-[15px]` with the tiers `sm:max-w-[540px] md:max-w-[720px]
      lg:max-w-[960px] xl:max-w-[1140px]`; **gutters removed inside the bar below 992 px**
      (`max-lg:px-0`); row `flex items-center justify-between max-lg:flex-wrap lg:flex-nowrap`
- [ ] Tests: container width **1140 px** at 1280/1200, **960 px** at 1199/992, **720 px** at
      991/768, **345 px** at 375; the bar's background is `rgba(0,0,0,0)` at ≥992 px over `#fff`
      and `rgb(0,0,0)` below
- [ ] Wordmark: own brand text, **single line**, `text-[20px] leading-[36px] font-normal
      uppercase` `#000` (`max-lg:text-white`), `py-[5px] mr-4 inline-block whitespace-nowrap`,
      a link to the top of the page with a visible focus ring and **no hover colour change**
      (`#000` at rest and hover on desktop)
- [ ] Tests: the wordmark box is ≈ **63 × 46 px** inside the 62 px line; the source's `Magz.`
      string is never rendered

## Centred rows + the teal underline wipe (TDD)

- [ ] Tests first: exactly **six** rows in one list, in order (current → dropdown → three
      plain), rendered `display:none` below 992 px and a row layout at ≥992 px while the toggler
      is the exact opposite
- [ ] The list is **`m-auto`** so it is centred in the slack **between the wordmark and the
      search field** (measured **460 × 62 at `x = 321`** at 1280 px, between the wordmark ending
      `x = 148` and the field starting `x = 938`)
- [ ] Rows: `text-[13px] font-normal text-[#808080] px-5 py-[19.2px] leading-[23.4px] relative`
      → **62 px**, stretched to the bar's full height (the source's `padding:1.2rem 20px`)
- [ ] Underline wipe: each row carries a **`#40bfc1` `absolute left-0 bottom-[-1px] h-px w-full
      origin-left scale-x-0 transition-transform duration-500 ease-in-out -z-10`** element that
      wipes to `scale-x-100` **and** turns the label `#40bfc1` on hover, staying **inside the
      row** and **behind** the label
- [ ] Tests: on a hovered non-current row the label is `#40bfc1` and the underline is
      `scaleX(1)`; hovering row N moves it there; at rest non-current rows are `scaleX(0)` /
      hidden; `prefers-reduced-motion: reduce` disables the wipe
- [ ] Current row: the underline is **visible at rest**, the desktop label is **`#000`** (not
      teal), `aria-current="page"` is set, and a real `focus-visible` ring exists on every row
      (delta: the source sets `outline:none !important`)
- [ ] Caret: `ChevronDown` at ~10–12 px on the **dropdown row only**, offset ~3.3 px from the
      label (the source's `0.255em` / 4 × 4 px CSS triangle)
- [ ] Tests: the caret appears on exactly one row; no other row has a trailing glyph

## Dropdown (TDD)

- [ ] Tests first: `mouseenter` opens the panel (`aria-expanded="true"`, panel visible),
      `mouseleave` closes it; a **click** on the trigger toggles it; a click outside closes it
- [ ] Panel: `absolute top-full left-0 z-10 min-w-[160px] py-2 bg-white rounded-[4px] border-0
      shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)]`
- [ ] Items: `block w-full px-6 py-1 text-[12px] text-black` (**29.59 px** rows) with a **visible**
      hover/`:focus-visible` state — `background:#40bfc1; color:#fff` (this variant already has a
      visible teal fill in the source, unlike its `-12` sibling)
- [ ] Keyboard: **`ArrowDown`** on the trigger opens and focuses the first item;
      **`ArrowUp`/`ArrowDown`** inside the panel step focus; **`Escape`** closes and returns
      focus to the trigger; opening a second dropdown closes the first; activating an item
      closes the panel and navigates
- [ ] Viewport guard: reproduce or replace the source's `left:auto; right:0` flip when the panel
      would overflow the viewport (a collision-aware placement that never leaves the viewport at
      320 px or at the right edge)
- [ ] Tests: `aria-haspopup`/`aria-expanded` stay in sync with visibility; the four items are
      real destinations (never `Page 1`…`Page 4`); the panel is not focusable while closed
- [ ] Dead code dropped: the unused `.cl-dropdown-item.cl-active/:active` `#007bff` state, the
      `.disabled` `#6c757d` colour and the unreferenced `cl-dropdown-menu-right` class are not
      reproduced

## Search form (TDD)

- [ ] Tests first: the form is **257 × 46 px**, `border border-[rgba(255,255,255,0.1)]
      border-l-[rgba(0,0,0,0.05)] rounded-[4px] overflow-hidden`, vertically centred in the bar
      (measured `y = 219`), its right edge exactly on the container's inner right edge
      (`x = 938 → 1195` at 1280 px), and it takes `order-13` / `lg:order-last` (last on desktop)
- [ ] **Hidden below 768 px**: the source has `@media (max-width:767.98px){.searchform{display:none}}`
      — tests assert the form is not visible at 375/320 px and reappears at ≥768 px
- [ ] Input: `w-[calc(100%-46px)] h-[46px] border-0 bg-white text-[14px]
      text-[rgba(0,0,0,0.7)] placeholder:text-[rgba(0,0,0,0.7)] rounded-none
      !shadow-none py-[6px] pl-4 pr-3` (the source's `padding:6px 12px 6px 16px`), `aria-label`
      (or a visually-hidden `<label>`) — delta: the source has a bare `placeholder="Search"` and
      **no** label
- [ ] Button: `size-[46px] bg-white text-[rgba(0,0,0,0.7)] cursor-pointer` with a **16 px**
      `Search` icon and an accessible name — a real `<button type="submit">`, never an icon-only
      unlabelled control
- [ ] Submit: `role="search"` form whose handler **calls `preventDefault()`** and surfaces a
      visible status/result (delta — the source's `action="#"` posts nowhere); assert the URL
      hash does not change on submit
- [ ] Tests: a visible `focus-visible` ring on the input (delta — the source's field has
      `outline:none` **and** `box-shadow:none !important`); the field's ink is
      `rgba(0,0,0,0.7)` for both text and placeholder

## Mobile strip + collapse (TDD)

- [ ] Tests first: at <992 px the bar's background is **`rgb(0,0,0)`**, height **68 px**, the
      wordmark is white, and the list is **not** rendered as visible rows until the toggler is
      activated
- [ ] `Toggler`: **third in DOM order** (after the wordmark and the search form), a real
      `<button>` with an accessible name, `aria-expanded`, `aria-controls`; content = a three-bar
      glyph (lucide, **16 px**, `currentColor`) + the uppercase **16 px** label `Menu` with
      `tracking-[0.1em]` in **`rgba(255,255,255,0.5)`**, padding `pt-1 pb-1 pl-3 pr-0`; measured
      **85 × 25 px**, at the container's right
- [ ] Tests: the toggler is `display:none` at ≥992 px and visible below; it keeps a **visible
      `focus-visible` ring** (delta — the source sets `outline:none !important`)
- [ ] Layout below 992 px: container `justify-between`; 720 px at 991/768 and 345 px at 375
      (gutters removed); the panel takes its own full-width line under the toggler/wordmark line
- [ ] Panel: animates `height` over **`0.35s ease`** (removed under
      `prefers-reduced-motion: reduce`); a second activation reverses it and sets
      `aria-expanded="false"` (verify both directions at 375 px and 320 px)
- [ ] Rows: single column, container width, `padding-bottom:10px`, each of the six rows **11.2 px**
      vertical padding (`py-[.7rem]`), horizontal padding `0`, resting
      **`rgba(255,255,255,0.7)`**; hover `#fff`; the current row's **label** `#40bfc1` (teal
      **text** on black) + `aria-current`; the teal underline disabled on mobile
      (`hover:before{display:none}` / `active > a:before{display:none}`)
- [ ] The mobile dropdown: **always expanded** in flow — `static w-full bg-black border-l
      border-[rgba(255,255,255,0.3)] py-2` with four items at **`rgba(255,255,255,0.8)`**,
      12 px, **29.59 px** rows, `px-6` (24 px) indent — matching the source's `display:block
      !important`; **or** provide a real disclosure control (a chevron button toggling the
      sub-list) *and* keep `aria-expanded` truthful — never a closed marker on a visible sub-list
- [ ] Tests: `aria-expanded` on the dropdown trigger is consistent with the sub-list's actual
      visibility; the hidden panel's rows are not focusable; no horizontal overflow at 320 px
      (`scrollWidth === innerWidth`)

## Materialised sections (TDD)

- [ ] Tests first: **ten** destinations (six rows + four dropdown items) each resolve to a real
      `id`/route, and the app contains **zero** `href="#"`
- [ ] Sections of the source's *kinds* with own copy (the source has none; its 10 links all point
      at nothing) — an intro/home block for the wordmark, a current-page block, a pages group for
      the four dropdown items, blocks for the three plain rows — `scroll-margin-top` ≥ **64 px**
      (≥68 px below 992 px) on every target
- [ ] Imagery (optional; the source ships none) from
      `https://picsum.photos/seed/capstan-<n>/<w>/<h>`
- [ ] Tests: the page is taller than the viewport so the non-sticky bar genuinely scrolls away
      (the source's short, non-scrolling page is replaced by real content)

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and a computed current year
- [ ] Minimal strip below the last section — a documented delta, since the source has no footer

## Quality gates

- [ ] Accessibility: real `button`s with `aria-expanded`/`aria-controls` for the toggler and the
      dropdown trigger; `aria-haspopup` on the trigger; `aria-current="page"` on the current row;
      a **labelled** search input inside `role="search"` and a **named** submit button; named
      icon-only toggler glyph; visible `focus-visible` rings everywhere (the source removes all
      outlines with `outline:none !important`); `Escape` closes the dropdown; hidden content is
      not focusable; `prefers-reduced-motion: reduce` disables the `.5s` underline wipe and the
      `.35s` collapse; no horizontal overflow at 320 px
- [ ] Shape language: `rounded-none` on the strip, rows and underline; the only rounding is the
      **`4px`** search field and the **`4px`** dropdown panel; no pills
- [ ] Zero `colorlib` / "Website Menu 13" / `website-menu-13` strings in `apps/capstan`
      (comments included); none of the source's six labels, its `Page n` items, its `Magz.`
      wordmark, its `Search` placeholder or its `Website menu #03` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are dead
      weight in the source — 247,856 B of the 259,149 B download), no inline SVG paths from the
      preview, no `cl-`/`ftco-` utility classes, no jQuery/Bootstrap, no Font Awesome
- [ ] Dead source code dropped: the `#343a40` `cl-bg-dark` surface (beaten by `transparent
      !important`), every `cl-navbar-dark` colour, the Bootstrap `#007bff`/`#0056b3`/`#6c757d`/
      `#212529`/`#495057`/`#ced4da`/`#f8f9fa` defaults, the unused dropdown-item states and
      `cl-dropdown-menu-right`, the `@media print` block (incl. its `@page{size:a3}`), the
      `:where(html) … all: revert` reset, the system `Roboto` body stack, and every Roboto woff2
      file
- [ ] Documented deltas recorded in the PR: new name + own wordmark, own six labels and four
      dropdown items, the ten dead `href="#"` materialised as real content, real `lucide-react`
      icons instead of the inline-SVG glyphs and the CSS caret triangle, a labelled
      `role="search"` form with a real submit handler instead of `action="#"`, restored
      hover/`focus-visible` affordances everywhere the source says `outline:none`, `aria-current`
      on the current row, a truthful mobile `aria-expanded`, focus management on `Escape`,
      reduced-motion handling, the blank filler page replaced with real content, and the added
      footer
- [ ] `scripts/verify-app.sh capstan` green (typecheck + lint + knip + fallow + vitest 100 % +
      build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace; footer
      attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 13` item `[x]` with the
      live `https://capstan.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
