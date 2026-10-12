# Mizzen — implementation tasks

Recreation of ColorLib **"Website Menu V17"** (source slug `website-menu-17` — the Website Menus
family's **fluid social-circle row + centred two-line wordmark + red pill search over a dark bar with
a red underline wipe**: a centred heading band (`112px 0`) over the page's **`#fafafa`**, then a
**full-bleed** `div.cl-container-fluid` chrome row (**`48 px`** gutters at ≥768 px, `15 px` below,
**78.4 px** tall) whose `33.33 %` column holds **four `40 × 40` circles** (`1px solid #e6e6e6`,
`border-radius:50%`, `4 px` apart, glyphs **not rendered**) and whose `66.67 %` column (explicitly
**`order:13`**) holds the **centred two-line wordmark** (`20 px`/`700` uppercase `line-height:1.2`
`#000` + a `12 px`/`500` **`rgba(0,0,0,0.3)`** span, `margin-right:16px`, **never-reset
`margin-bottom:30px`** — the margin that makes the row 78.4 px) and a **`300 × 50` red pill search
field** (`border-radius:40px`, `overflow:hidden`, `1px solid rgba(255,255,255,0.1)`, input
`calc(100% - 50px)`, submit **`50 × 50` `#ff0000`** clipped into the pill cap). Below it the
**`#252525`** bar (`padding:0`, `z-index:3`, **no shadow**, **never sticky**, **67.8 px**) holds
**five `11 px` uppercase `letter-spacing:2px` rows** (`padding:24px 20px`, `#fff`) **centred by
`margin:auto`** whose hover treatment is a **`2 px` `#ff0000` bottom underline wiping `width:0 → 100%`
over `0.3s` plus a red label** — the **current row is `#ff0000` and wears no underline**. The second
row is a `Page` dropdown (white, `border:none`, `min-width:160px`, `padding:8px 0`, `border-radius:4px`,
`0 10px 34px -20px rgba(0,0,0,.41)`, four `12 px` `#000` items with a red hover fill, a rendered
**`6 × 3`** currentColor caret). Below **`992 px`** the bar turns **`#000`**, `padding:10px 15px`,
container gutters `0`, **44.7 px** collapsed (**407 px** expanded) with a **first-in-DOM** `☰ MENU`
toggler (`rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`, bars glyph **rendered**)
that expands an **in-flow full-width panel** (`flex-basis:100%`, `0.35s ease`, **362.2 px** at 767 px)
of five **43.2 px** rows (`rgba(255,255,255,0.7)`, `#fff` when current/hovered, bottom rule
`rgba(255,255,255,0.2)` below 768 px) with the submenu **permanently expanded** inside it
(`display:block !important`, `position:static`, **`background:#000`**). The source has **no images,
no content sections, no footer, no second page, no sticky chrome** and is shorter than the viewport:
**13** of its **14** links are `href="#"`.

The sheet is **23,560 B** (1,211 lines, 157 top-level rule blocks, 25 `@media` blocks, 4 `@font-face`
blocks, **zero** `sticky`/`fixed`) — 561 B larger than the `-16` sibling's because this variant adds
`cl-container-fluid` + `cl-col-md-4/8` + the order/fluid utilities and a red pill search, and drops the
dark utility strip; **no webfont is loaded at all**, so `"Poppins", Arial, sans-serif` renders in
**Arial**; the archive's **eight** Roboto woff2 files (247,856 B = **95.5 %** of the 259,630 B
download) never render. Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-17/` returns **HTTP 404** — the **live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-17/` (**HTTP 200**, 5,356 B,
`<title>Website menu 07</title>`; its `css/style.css?v=f98983b3` 23,560 B and
`js/snippet.js?v=23a93116` 5,798 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-17.zip`, HTTP 200, 259,630 B — the
un-versioned source copy; the archive's `snippet.js` is byte-identical to the `-16` sibling's except
its filename comment). Screenshot: `website-menu-17.jpg` (HTTP 200, AVIF, 7,263 B, 1200 × 972) — a
browser-chrome mock: a centred black heading `Website menu #07`, four grey-outline circles at the
left, the `LOGISTICA`/`ARCHITECTURE AGENCY` lockup centred, the pill `Search` field with its red
magnifier button at the right, and the near-black bar with `HOME` **in red** · `PAGE ▾` · `WORK` ·
`BLOG` · `CONTACT`.

Spec: `openspec/specs/template-mizzen/spec.md`. New name: **mizzen** (the aftermost mast — a light
spar carrying the sternmost sail, which suits this variant's light chrome row that trails the
wordmark + search to the right of the family's usual centre; it keeps the family's nautical run:
menutree · slidenav · navpill · menuribbon · starboard · larboard · topdeck · bowsprit · gangway ·
halyard · ensign · gunwale · capstan · windlass · davit · binnacle · **mizzen**). Never reuse the
source slug, the name "Website Menu V17", the `Logistica`/`Architecture Agency` wordmark, the **five
source row labels**, the four dropdown item strings (`Page 1`…`Page 4`), the heading string
`Website menu #07`, the `cl-`/`ftco-` namespace, the inline SVG glyph paths, the Roboto woff2 files,
or any copy verbatim.
Design notes: `docs/templates/mizzen/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/mizzen`
- [ ] Rename package to `@free-react-templates/mizzen`; set
      `"homepage": "https://mizzen.free.componentdock.com"`
- [ ] `public/CNAME` = `mizzen.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/mizzen` (`grep -c "free-react-templates/mizzen" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app — Tailwind
      v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap`
      (a **delta**: the source loads **no** webfont and renders Arial; its eight self-hosted Roboto
      files are dead weight and are never copied). Icons: `lucide-react` (`Search`, `Menu` bars,
      `ChevronDown` for the caret) plus **inline-SVG brand marks** for
      `Facebook`/`Twitter`/`Instagram`/`Dribbble` (lucide-react exports no brand
      icons) in circles —
      substitute generic icons if a brand glyph is unavailable)
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #ff0000`, `--color-page: #fafafa`,
      `--color-bar: #252525`, `--color-bar-mobile: #000`, `--color-row: #fff`,
      `--color-wordmark: #000`, `--color-wordmark-sub: rgba(0,0,0,0.3)`, `--color-ring: #e6e6e6`,
      `--color-circle-glyph: #4d4d4d`, `--radius-pill: 40px`, `--radius-menu: 4px`
- [ ] No `colorlib` / `website-menu-17` / `cl-` / `ftco-` strings anywhere in `apps/mizzen`
      (comments included — provenance lives only in this spec, `TEMPLATES.md` and the PR)

## Page frame + heading band (TDD)

- [ ] `<main>` with `pt-28 pb-28` (`112px`) over `bg-page` (`#fafafa`) and **no** horizontal padding
- [ ] Own `28 px`/`400`/`#000` heading centred in a `50 %` column at ≥768 px with an `8 px` + `48 px`
      bottom margin, so the chrome's top edge lands at **210 px**
- [ ] Test: heading copy is own text (never `Website menu #07`); band tokens; the 210 px landing

## Fluid chrome row — social + wordmark + search (`TopChrome`, TDD)

- [ ] Full-bleed row (`w-full`, **no** max-width) with `px-[48px]` from `768 px` up and `px-[15px]`
      below (the source's `cl-px-md-5`); two columns — circles `33.33 %` **left**, brand/search
      `66.67 %` with an **`order:13`-equivalent** placing it **right** (use `md:order-last`)
- [ ] `SocialRow` — four `40 × 40` circles, `border border-[#e6e6e6]`, `rounded-full`, no background,
      `flex` centred, `mr-[4px]`, **top-aligned** with the row, hover
      `hover:bg-accent hover:border-accent` + white glyph, each with `aria-label` and a real `href`
- [ ] `Wordmark` — two lines (`text-[20px] font-bold uppercase leading-[1.2] text-black` +
      `block text-[12px] font-medium text-black/30`), `py-[5px] mr-4 mb-[30px]`, own strings,
      links to the top of the page, `focus-visible` ring
- [ ] `SearchForm` — `h-[50px] rounded-full overflow-hidden border border-white/10` with
      `lg:w-[300px]` (clamped by its column below), input `w-[calc(100%-50px)] h-[50px] border-none
      bg-white text-[14px] text-black/70`, submit `size-[50px] bg-accent` with a white `Search` icon,
      real `<label>`, non-navigating submit, `focus-visible` rings
- [ ] Tests: the row is full-bleed with 48 px gutters at ≥768 px; the circles render **before** the
      wordmark visually; the form is 300 px at ≥992 px and clamped at its column otherwise; the
      circles are `40 × 40` circles 4 px apart; the submit is square but clipped by the pill

## Dark bar + centred row list (`Navbar`, `NavRow`, TDD)

- [ ] `<header>`/`<nav>` in-flow (**never** `sticky`/`fixed`), full-bleed, `bg-bar` (`#252525`) at
      ≥992 px and `bg-[#000]` below, `p-0` desktop / `py-[10px] px-[15px]` mobile, `z-[3]`,
      **no shadow**, ≈ **67.8 px** tall
- [ ] Five rows, own labels, `text-[11px] font-medium uppercase tracking-[2px] py-6 px-5 text-white`
      (**67.8 px** tall), list **centred** with an auto margin (`mx-auto`), current row
      `text-accent` + `aria-current="page"` and **no** underline
- [ ] The signature hover: `before:absolute before:bottom-0 before:left-0 before:h-[2px]
      before:w-0 before:bg-accent before:transition-[width] before:duration-300
      hover:before:w-full hover:text-accent` (`prefers-reduced-motion` → no transition)
- [ ] Tests: bar surface at both breakpoints; row height 67.8 px; current row is red with no
      underline; hover grows the 2 px underline to 100 % and reddens the label; no
      `sticky`/`fixed` class anywhere; `focus-visible` rings on rows

## Row dropdown (`PageMenu`, TDD)

- [ ] Trigger with a rendered `6 × 3` caret (a `border-top: 3px solid currentColor` triangle or a
      `ChevronDown` sized to match), `aria-haspopup`/`aria-expanded`/`aria-controls`
- [ ] Panel: white, `border-none`, `rounded-[4px]`, `min-w-[160px]`, `py-2`, `mt-[2px]`,
      `shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)]`, anchored at the trigger's left edge
- [ ] Four items `text-[12px] text-black px-6 py-1` (29.6 px rows) with a
      `hover:bg-accent hover:text-white` fill, all real destinations
- [ ] Behaviour: `mouseenter`/`mouseleave`, `click` toggle with the viewport-overflow guard,
      `ArrowDown` on the trigger opens + focuses the first item, `ArrowDown`/`ArrowUp` roving focus,
      `Escape` closes + refocuses the trigger, outside click closes
- [ ] Tests for every behaviour above (one `it` per scenario in the spec)

## Mobile chrome + in-flow panel (TDD)

- [ ] Toggler **first in the bar's DOM**: `border-none text-white/50 uppercase text-[16px]
      tracking-[.1em] pt-1 pb-1 pl-3 pr-0`, real bars glyph (`Menu`/bars icon) + the word `MENU`,
      `aria-expanded` in sync, `focus-visible` ring
- [ ] Panel: `basis-full` in-flow, `ul` with `pb-[10px]`, height-animated `0.35s ease`
      (`prefers-reduced-motion` → off), `display:none` when collapsed
- [ ] Panel rows **43.2 px** (`py-[11.2px]`) in `text-white/70`, `text-white` when current/hovered,
      `border-b border-white/20` **only below 768 px**
- [ ] Submenu **permanently expanded** inside the panel below 992 px
      (`position:static`, `bg-[#000]`, items `text-white/80`, 4 px radius kept)
- [ ] Tests: 44.7 px collapsed / ≈ 407 px expanded bar at 767 px; panel 362.2 px; row inks and the
      sub-768 px bottom rule; `aria-expanded` toggling; reduced-motion path

## Chrome wrap below 768 px (TDD)

- [ ] Chrome row wraps to ≈ **204.4 px**: brand line (48.4 + 30 px margin), full-width search line
      with a `16 px` bottom margin, then the circles **centred** (`mx-auto`) with a `20 px` bottom
      margin
- [ ] At 768–991 px the row stays **78.4 px** with the circles centred in their column and the search
      clamped to its column (204 px at 768, 261 px at 991)
- [ ] Tests: measured heights at 375/767/768/991 px; the circles' centring; no overflow
      (`scrollWidth === innerWidth` at 320–991 px)

## Materialised sections (TDD)

- [ ] Real content below the chrome for every destination: an intro/home block for the wordmark, a
      current-page block, one block per plain row, dropdown destination panels, a social block for
      the circles, and an editorial block for the dropdown menu
- [ ] `scroll-margin-top` ≥ `150px` on every target (chrome 78.4 + bar 67.8 ≈ 147 px)
- [ ] Images from `https://picsum.photos/seed/mizzen-<n>/<w>/<h>` (the source ships **no** images)

## Footer + attribution (TDD)

- [ ] Footer linking `https://www.componentdock.com/` branded **"Component Dock"** (the source has no
      footer); test the link text + href

## Quality gates

- [ ] `scripts/verify-app.sh mizzen` green (typecheck + lint + knip + fallow + vitest **100 %**
      lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green; `npm run readme:status` after the `[x]` mark
- [ ] PR description lists: source template + preview URL, design tokens captured, and every
      documented delta (name, icons, font, restored focus states, materialised links, footer)
- [ ] Squash-merge, then mark `TEMPLATES.md` `Website Menu 17` `[x]` with
      `https://mizzen.free.componentdock.com` + homepage
