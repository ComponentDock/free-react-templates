# Ensign — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/ensign`
> (<https://ensign.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Website Menu V11"** (source slug `website-menu-11` — the
Website Menus family's **coloured-bar / full-height-CTA / hover-and-click-dropdown
variant**: one **full-bleed `#1089ff` bar** in normal flow with a left-pinned **uppercase
white wordmark** and a single **right-aligned seven-row list** whose last row is a **solid
`#ff7315` slab filling the bar's height**, a dropdown panel (`#fff`, `4px`, `min-width:160px`,
`0 10px 34px -20px rgba(0,0,0,.41)`) that opens on **hover and on click**, and a `992 px`
breakpoint where the bar turns **`#000`** and the list collapses into a black panel whose only
rounded element is a **`5px`-radius orange CTA** at its bottom — over a centred heading band
(`padding:112px 0`). The source has **no images, no content sections, no footer, no second
page and no sticky chrome**: all **11** of its links are `href="#"` and its page is 371 px
tall and does not scroll.

Type is **Poppins 400/500** (`body{font-family:"Poppins", Arial, sans-serif; font-size:16px;
line-height:1.8}`); the sheet also declares self-hosted **Roboto 400/700** and the archive
ships four more **100/300** files it never declares — **none of it renders**, so 247,856 B of
the 258,214 B download is dead font payload. Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-11/` returns **HTTP 404** — the **live
preview** is `https://preview.colorlib.com/theme/bootstrap/website-menu-11/` (**HTTP 200**,
3,195 B, `<title>Website menu 01</title>`; its `css/style.css?v=cee19396` 17,737 B and
`js/snippet.js?v=d328ca19` 5,798 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-11.zip`, HTTP 200, 258,214 B — the
un-versioned source copy). Screenshot: `website-menu-11.jpg` (HTTP 200, AVIF, 7,421 B,
1200×972) — a browser-chrome mock of the live preview: a centred black heading
"Website menu #01", then a full-bleed saturated blue bar ~68 px tall with the white
uppercase wordmark `RESTO` at its left, six tracked-out white labels (`HOME`, `PAGE` with a
caret, `ABOUT`, `MENU`, `BLOG`, `CONTACT`) at its right, and a flat orange `BOOK A TABLE`
slab filling the bar's height and stopping at the container's inner edge.

Spec: `openspec/specs/template-ensign/spec.md`. New name: **ensign** (a ship's ensign is the
single solid-coloured banner flown to identify her — for a bar that *is* one solid colour
field with a second solid colour field butted onto its end). Never reuse the source slug
`website-menu-11`, the name "Website Menu 11", the `Resto` wordmark, the **seven source
labels** (`Home`, `Page`, `About`, `Menu`, `Blog`, `Contact`, `Book a table`), the
`Page 1`…`Page 4` items, the heading string `Website menu #01`, the `cl-` utility namespace,
the inline SVG bars glyph, the self-hosted Roboto woff2 files, or any copy verbatim. Design
notes: `docs/templates/ensign/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/ensign`
- [ ] Rename package to `@free-react-templates/ensign`; set
      `"homepage": "https://ensign.free.componentdock.com"`
- [ ] `public/CNAME` = `ensign.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/ensign`
      (`grep -c "free-react-templates/ensign" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app —
      Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`
      (the source's eight self-hosted Roboto files — including the four 100/300 faces it
      never even declares — are never copied). Icons: `lucide-react` (`Menu` for the
      toggler, `ChevronDown` for the dropdown caret).
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #1089ff`,
      `--color-cta: #ff7315`, `--color-bar-dark: #000`, `--color-page: #fafafa`,
      `--color-ink: #808080`, `--color-toggler: rgba(255,255,255,0.5)`,
      `--color-mobile-row: rgba(255,255,255,0.7)`,
      `--color-mobile-item: rgba(255,255,255,0.8)`,
      `--color-hairline: rgba(255,255,255,0.3)`,
      `--shadow-panel: 0 10px 34px -20px rgba(0,0,0,0.41)`,
      `--font-sans: "Poppins", Arial, sans-serif` (design-token notes only — no provenance
      comments; note the template uses **no** radii except the `4px` panel and the `5px`
      mobile CTA, and the bar itself has **no** shadow)

## Heading band + colour bar (TDD)

- [ ] Tests first: the band has `padding:112px 0` (`py-28`) over `#fafafa`; its heading is
      **28 px / 400 / `line-height:1.5` / `#000`** with an `8px` bottom margin, centred, in a
      column that is `50%` at ≥768 px and `100%` below, carrying `margin-bottom:48px`
- [ ] Tests: the heading's text is **own copy** — assert the string `Website menu #01` (and
      the word `Colorlib`) never appears in the app
- [ ] `Header`/`Bar`: **full-bleed** (`w-full`), **`bg-[#1089ff]`**, `relative z-[3] p-0`, no
      border/radius/shadow; height asserted at **67.8 px** at ≥992 px (24 + 19.8 + 24) and
      **66 px** below 992 px (`p-[10px_15px]` + a 46 px row)
- [ ] Tests: **no sticky/fixed** — scrolling moves the bar out of view (assert a negative `y`)
- [ ] Container: `mx-auto w-full px-[15px]` with the tiers `sm:max-w-[540px]
      md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]`; **gutters removed inside the bar
      below 992 px** (`max-lg:px-0`); row `flex flex-nowrap items-center justify-between`
      (below 992 px the list wrapper is `basis-full`)
- [ ] Tests: container width **1140 px** at 1280/1200, **960 px** at 1199/992, **720 px** at
      991/768, **345 px** at 375; the bar's background is `rgb(16,137,255)` at ≥992 px and
      `rgb(0,0,0)` below

## Wordmark + nav list + CTA (TDD)

- [ ] One `navItems` data structure (7 rows: `current` → `dropdown` → four plain → `cta`) —
      never a hand-written list — rendered once per layout (desktop list / mobile panel)
- [ ] Wordmark: own brand text, `text-[20px] uppercase text-white font-normal
      leading-[36px] py-[5px] mr-4`, vertically centred in the bar, a link to the top of the
      page, visible focus ring, no hover colour change
- [ ] Tests: the wordmark box is **68.55 × 46 px at `x = 85, y = 220.89`** at 1280 px and
      `x = 15` at 375 px; the source's `Resto` string is never rendered
- [ ] List: right-aligned by its own **`ml-auto`** inside a `grow` wrapper
      (`flex-1 basis-auto`), so its right edge is the container's inner right edge
      (`x = 1195` at 1280 px) — **not** by `justify-end` alone
- [ ] Rows: `text-[11px] font-medium uppercase tracking-[2px] text-white px-5 py-6
      leading-[19.8px]` → **67.8 px**, stretched to the bar's full height; the source's
      `padding:24px 20px` geometry preserved (`px-5` = 20 px, `py-6` = 24 px)
- [ ] Tests: exactly **seven** rows in one list, in order; the list is `display:none` below
      992 px and a row layout at ≥992 px while the toggler is the exact opposite
- [ ] Current row: `aria-current="page"` **plus** a visible non-colour treatment (delta —
      the source renders all seven labels in the same `#fff`)
- [ ] Caret: `ChevronDown` at ~12–16 px on the **dropdown row only**, offset ~2.8 px from the
      label (the source's `0.255em`)
- [ ] CTA row: `bg-[#ff7315] text-white rounded-none px-5 py-6` → **141.86 × 67.8 px**, flush
      with the container's inner edge, with a hover/`focus-visible` affordance (delta — the
      source has none)
- [ ] Tests: the CTA's right edge equals the container's inner right edge at 1280 px (1195),
      and its background is `rgb(255,115,21)` with `border-radius: 0px`

## Dropdown (TDD)

- [ ] Tests first: `mouseenter` opens the panel (`aria-expanded="true"`, panel visible),
      `mouseleave` closes it; a **click** on the trigger toggles it; a click outside closes it
- [ ] `Dropdown`: panel `absolute top-full left-0 min-w-[160px] py-2 mt-0.5 bg-white
      rounded-[4px] border-0 shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)] z-10`
- [ ] Tests: the panel measures **160 × 134.38 px at `x = 613.34, y = 279.8`** at 1280 px
      (left-aligned with its trigger, 2 px below the bar) with the shadow above
- [ ] Items: `block w-full px-6 py-1 text-[12px] text-black` (**29.59 px** rows) with
      **hover/`:focus` → `bg-[#1089ff] text-white`**
- [ ] Keyboard: **`ArrowDown`** on the trigger opens and focuses the first item;
      **`ArrowUp`/`ArrowDown`** inside the panel step focus; **`Escape`** closes and returns
      focus to the trigger; entering the trigger must not trap focus; activating an item
      closes the panel and navigates
- [ ] Viewport guard: reproduce or replace the source's `left:auto; right:0` flip when the
      panel would overflow the viewport (e.g. a collision-aware placement that never leaves
      the viewport at 320 px or at the right edge)
- [ ] Tests: `aria-haspopup`/`aria-expanded` stay in sync with visibility; the four items are
      real destinations (never `Page 1`…`Page 4`)
- [ ] Dead code dropped: the unused `:active`/`.cl-active` `#007bff` state, the `.disabled`
      `#6c757d` colour and the `cl-dropdown-menu-right` class are not reproduced

## Mobile bar + collapse (TDD)

- [ ] Tests first: at <992 px the bar's background is **`rgb(0,0,0)`**, height **66 px**, and
      the list is **not rendered as visible rows** until the toggler is activated
- [ ] `Toggler`: a real `<button>` with an accessible name, `aria-expanded`, `aria-controls`;
      content `Menu` (lucide, 16 px) + an uppercase **16 px** label with
      `tracking-[1.6px]` in **`rgba(255,255,255,0.5)`** sharing one `currentColor`, padding
      `pt-1 pb-1 pl-3 pr-0`; measured **85.27 × 24.72 px**, flush right, vertically centred
- [ ] Tests: the toggler is `display:none` at ≥992 px and visible below; it keeps a **visible
      `focus-visible` ring** (delta — the source sets `outline:none !important`)
- [ ] Panel: animates `height` over **`0.35s ease`** (removed under
      `prefers-reduced-motion: reduce`); at 375 px the bar grows 66 → **416 px** and the panel
      measures **345 × 350** at `x = 15, y = 266`
- [ ] Rows: single column, container width, `padding-bottom:10px`, each of the seven rows
      **48.58 px** (`py-[14.4px]` at 11 px/19.8 px); resting **`rgba(255,255,255,0.7)`**; the
      current row **`#fff`** + `aria-current`; the **CTA row `#ff7315` with
      `border-radius:5px`** and `px-[15px] py-[14.4px]`, spanning the panel
- [ ] The mobile dropdown: activating the row makes its panel **in flow**
      (`position:static`), **`bg-black`**, **`border-l border-[rgba(255,255,255,0.3)]`**,
      `rounded-none`, **no shadow**, `mt-0.5`, items **`rgba(255,255,255,0.8)`** at 12 px /
      29.59 px rows
- [ ] Tests: `aria-expanded` on the dropdown trigger tracks the sub-list's visibility; the
      hidden panel's rows are not focusable; no horizontal overflow at 320 px
      (`scrollWidth === innerWidth`)

## Materialised sections (TDD)

- [ ] Tests first: **eleven** destinations (seven rows + four dropdown items) each resolve to
      a real `id`/route, and the app contains **zero** `href="#"`
- [ ] Sections of the source's *kinds* with own copy — a home/intro block for the wordmark,
      a current-page block, a pages group for the four dropdown items, plus blocks for the
      four plain rows and the CTA (e.g. a booking/contact call-to-action section) —
      `scroll-margin-top` ≥ **68 px** (≥66 px below 992 px) on every target
- [ ] Imagery (optional; the source ships none) from
      `https://picsum.photos/seed/ensign-<n>/<w>/<h>`
- [ ] Tests: the page is taller than the viewport so the non-sticky bar genuinely scrolls
      away (the source's 371 px page is filler)

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and a computed current year
- [ ] Minimal strip below the last section — a documented delta, since the source has no
      footer

## Quality gates

- [ ] Accessibility: real `button`s with `aria-expanded`/`aria-controls` for the toggler and
      the dropdown trigger; `aria-haspopup` on the trigger; `aria-current="page"` on the
      current row (**never colour alone** — the source's white-on-white active state is
      invisible); visible `focus-visible` rings everywhere (the source removes all outlines);
      `Escape` closes the dropdown; hidden content is not focusable; `prefers-reduced-motion:
      reduce` disables the `0.35s` collapse and the `a` transition
- [ ] Shape language: `rounded-none` on the bar, rows and CTA (desktop) — the only rounding is
      the **`4px`** dropdown panel and the **`5px`** mobile CTA; no pills
- [ ] Zero `colorlib` / "Website Menu 11" / `website-menu-11` strings in `apps/ensign`
      (comments included); none of the source's seven labels, its `Page n` items, its `Resto`
      wordmark or its `Website menu #01` heading reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2` (all eight are
      dead weight in the source), no inline SVG paths from the preview, no `cl-` utility
      classes, no jQuery/Bootstrap
- [ ] Dead source code dropped: the `#343a40` `cl-bg-dark` surface, the `cl-navbar-dark`
      50 %/75 %/25 % label colours and its `border-color`, the `#007bff`/`#0056b3` page-link
      defaults, the `#6c757d` disabled colour, the unused dropdown-item states and the
      `cl-dropdown-menu-right` class, the `@media print` block, the `:where(html) … all:
      revert` reset, the system `Roboto` body stack and every Roboto woff2 file
- [ ] Documented deltas recorded in the PR: new name + own wordmark, own seven labels and four
      dropdown items, the eleven dead `href="#"` materialised as real content, `lucide-react`
      `Menu`/`ChevronDown` instead of the inline SVG bars glyph and the CSS caret triangle,
      Google Fonts Poppins instead of eight self-hosted Roboto files, a real `<button>` toggler
      with `aria-expanded`/`aria-controls` and a focus ring instead of `outline:none`,
      restored hover/`focus-visible` affordances and a visible current-page signal where the
      source is white on white, focus management on `Escape`, the overflow guard normalised,
      reduced-motion handling, the 371 px filler page replaced with real content, and the
      added footer
- [ ] `scripts/verify-app.sh ensign` green (typecheck + lint + knip + fallow + vitest 100 % +
      build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace; footer
      attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 11` item `[x]` with the
      live `https://ensign.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
