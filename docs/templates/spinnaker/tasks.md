# Spinnaker — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/spinnaker`
> (<https://spinnaker.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Website Menu V18"** (source slug `website-menu-18` — the Website Menus
family's **mega-menu variant**: an **inset navy rounded bar** with right-aligned amber-hover rows and a
**full-bar-width panel of four `25 %` columns** — four plain links first, then **three image cards** —
and the only sibling that ships its own photographs). A centred heading band (`padding:112px 0`) sits
over the page's **`#fafafa`** carrying a `28 px` black heading; below it the **`#1c2938` bar**
(`padding:10px`, **`border-radius:5px`**, `box-shadow:0 5px 20px -17px rgba(0,0,0,.34)`, `z-index:3`,
**never sticky**) lives **inside the family's `.cl-container` tiers** (1140/960/720/540/100 % with
`15 px` gutters → bar = tier − 30: **1110 × 83.6 @ x = 165, y = 210** at 1440 px), holding the
**`MEGAWIDTH`-style brand** (`20 px`/`700` uppercase `#fff`, `padding:5px 0`, `margin-right:16px`,
≈ **124.4 × 46**) at its left and **four `14 px`/`400` `#e6e6e6` rows** (`padding:19.2px 20px` →
**63.6 px**, hover **`#fec771`**) **right-aligned by `margin-left:auto`**. The fourth row opens the
**mega panel**: `width:100 %` of the bar, `left:0`, `top:100%`, `margin-top:2px`, white, `border:none`,
**`border-radius:4px`**, **`padding:24px`**, `0 10px 34px -20px rgba(0,0,0,.41)` → **`1110 × 370.8`**,
anchored to the bar because the trigger's `li` is **`position:static`**. Inside: a `-15px`-gutters row
of four `25 %` columns (**273 px** at 1440 px) — **four** `12 px` `#000` items (`padding:15px 20px` →
**52.6 px**, `1px solid rgba(0,0,0,0.1)` rules, **`#fec771` hover fill + white ink**) and **three
cards** (`100 % × 250 px` cover image + `20 px` margin over a `16 px`/`600` `#000` title and a `14 px`
`rgba(0,0,0,0.2)` meta line → **243 × 52.8**). Below **`992 px`** the bar turns **`#000`**
(`padding:10px 15px`, radius + shadow kept), collapses to **66 px**, shows a right-aligned `☰ MENU`
toggler (`rgba(255,255,255,0.5)`, uppercase `16 px`, `letter-spacing:.1em`, `padding:4px 0 4px 12px`,
measured **85.3 × 24.7**) and expands an in-flow panel (`flex-basis:100%`,
`transition:height .35s ease`, `ul{padding-bottom:10px}`, **438.3 px** at 375/767 px, **574.7 px** at
768–991 px with a **640.7 px** bar); the mega panel becomes **`position:static`** over **`#202020`**
with **`padding:0`**, items `rgba(255,255,255,0.8)` / `rgba(255,255,255,0.1)` rules, the three image
columns **hidden below 768 px** (`cl-d-none cl-d-md-block`) and **not** permanently expanded (unlike
the `-16`/`-17` siblings). The source page holds **nothing else** — no content sections, no footer, no
second page, no sticky chrome — and **14** of its **15** anchors are dead `href="#"`.

The sheet is **17,508 B** (904 lines, 121 top-level rule blocks, 17 `@media`, 4 `@font-face`, **zero**
`sticky`/`fixed`) — **6,052 B smaller than the `-17` sibling's**, because it drops the fluid chrome, the
pill search, the `::before` underline and the dark utility strip and adds the mega-panel/`.img`/column
block instead; **no webfont is loaded at all**, so `"Poppins", Arial, sans-serif` renders in **Arial**,
and the archive's **eight** Roboto woff2 files (247,856 B = **60.8 %** of the 407,923 B download) never
render. Preview: the slug-only path `https://preview.colorlib.com/theme/website-menu-18/` returns
**HTTP 404** — the **live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-18/` (**HTTP 200**, 4,190 B,
`<title>Website menu 08</title>`; its `css/style.css?v=c3576057` 17,508 B and
`js/snippet.js?v=ff9c894b` 5,798 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-18.zip`, HTTP 200, 407,923 B — the
un-versioned source copy, whose `index.html` 3,987 B differs from the live page head-only; the archive
also ships `images/img-1..3.jpg` (58,438 / 41,713 / 60,305 B) and eight Roboto woff2).
Screenshot: `website-menu-18.jpg` (HTTP 200, AVIF, 16,481 B, 1200 × 972) — a browser-chrome mock of
the page **with the mega menu open**: a centred black heading `Website menu #08`, the rounded navy bar
(`MEGAWIDTH` left; `Home` · `About` · `Blog` · `Page ▾` right, `Page` in amber because the mock was
captured with the cursor over it), and the white mega panel spanning the bar's full width with
`Page 1`…`Page 4` over hairlines in its first quarter and three image cards (`Amazing Architecture` /
`Architect`) after them.

Spec: `openspec/specs/template-spinnaker/spec.md`. New name: **spinnaker** (the largest, lightest,
most forward-flying sail — a wide full-bellied canvas set ahead of the mast, which suits this variant's
full-bar-width mega panel with imagery; it keeps the family's nautical run: menutree · slidenav ·
navpill · menuribbon · starboard · larboard · topdeck · bowsprit · gangway · halyard · ensign · gunwale
· capstan · windlass · davit · binnacle · mizzen · **spinnaker**). Never reuse the source slug, the name
"Website Menu V18", the `Megawidth` brand, the four source row labels, the item strings
(`Page 1`…`Page 4`), the card copy (`Amazing Architecture` / `Architect`), the heading string
`Website menu #08`, the `cl-`/`ftco-` namespace, the inline SVG glyph path, the Roboto woff2 files, the
three photographs, or any copy verbatim.
Design notes: `docs/templates/spinnaker/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/spinnaker`
- [ ] Rename package to `@free-react-templates/spinnaker`; set
      `"homepage": "https://spinnaker.free.componentdock.com"`
- [ ] `public/CNAME` = `spinnaker.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/spinnaker` (`grep -c "free-react-templates/spinnaker" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app — Tailwind
      v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap`
      (a **delta**: the source loads **no** webfont and renders Arial; its eight self-hosted Roboto
      files are dead weight and are never copied). Icons: `lucide-react` (`Menu` bars, `ChevronDown`
      for the caret)
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #fec771`, `--color-page: #fafafa`,
      `--color-bar: #1c2938`, `--color-bar-mobile: #000`, `--color-row: #e6e6e6`,
      `--color-mega: #fff`, `--color-mega-mobile: #202020`, `--color-rule: rgba(0,0,0,0.1)`,
      `--radius-bar: 5px`, `--radius-mega: 4px`, `--shadow-bar: 0 5px 20px -17px rgba(0,0,0,0.34)`,
      `--shadow-mega: 0 10px 34px -20px rgba(0,0,0,0.41)`
- [ ] No `colorlib` / `website-menu-18` / `cl-` / `ftco-` strings anywhere in `apps/spinnaker`
      (comments included — provenance lives only in this spec, `TEMPLATES.md` and the PR)

## Page frame + heading band (TDD)

- [ ] `<main>` with `pt-28 pb-28` (`112px`) over `bg-page` (`#fafafa`) and **no** horizontal padding
- [ ] Own `28 px`/`400`/`#000` heading centred in a `50 %` column at ≥768 px with an `8 px` + `48 px`
      bottom margin, so the bar's top edge lands at **210 px**
- [ ] Test: heading copy is own text (never `Website menu #08`); band tokens; the 210 px landing

## Inset bar + right-aligned rows (`Navbar`, `NavRow`, TDD)

- [ ] Bar **inside a centred container** with the `1140/960/720/540/100 %` tiers and `15 px` gutters
      (`mx-auto max-w-[1140px] px-[15px]` etc.), so the bar is **container − 30 px** — **not**
      full-bleed (measured `1110 × 83.6 @ x = 165, y = 210` at 1440 px)
- [ ] Surface **`#1c2938`** at ≥992 px and **`#000`** below; `p-[10px]` desktop / `py-[10px] px-[15px]`
      mobile; **`rounded-[5px]`** and the `0 5px 20px -17px rgba(0,0,0,0.34)` shadow at **every**
      width; `z-[3]`; `relative` (**never** `sticky`/`fixed`)
- [ ] Inner flex row: `px-[15px]` + `justify-between` + `flex-nowrap` desktop, `px-0` below 992 px;
      DOM order **brand → toggler → list**
- [ ] Brand: own copy, `text-[20px] font-bold uppercase text-white py-[5px] mr-4 leading-[1.8]`,
      ≈ **124 × 46**, at the bar's content left edge, links to the top, `focus-visible` ring, hover
      affordance (delta — the source paints none)
- [ ] Rows: `text-[14px] font-normal text-[#e6e6e6] px-5 py-[19.2px]` → **63.6 px**,
      **sentence case**, no tracking, no underline/slab/pseudo-decoration, list pushed right with
      `ml-auto`; hover `hover:text-accent`; `aria-current` on the current row, `focus-visible` rings
- [ ] Tests: bar surface at both breakpoints; the inset width inside the tiers; row height 63.6 px;
      `ml-auto` right alignment; hover amber; no `uppercase`/tracking/`before:` decoration; no
      `sticky`/`fixed` class anywhere

## Mega panel (`MegaPanel`, `MegaCard`, TDD)

- [ ] Trigger row keeps a rendered **`8 × 4`** `currentColor` caret (a `border-top:4px solid
      currentColor` triangle or a `ChevronDown` sized to match), `aria-haspopup`/`aria-expanded`/
      `aria-controls`
- [ ] Panel anchored to the **bar** (`absolute left-0 top-full w-full mt-[2px]` inside the bar, with
      the trigger's list item `static`) — **never** a `width:auto` dropdown at the trigger's edge
- [ ] Surface `bg-white border-none rounded-[4px] p-6
      shadow-[0_10px_34px_-20px_rgba(0,0,0,0.41)]`
- [ ] Grid: row with `-mx-[15px]` + `15 px` gutters and four `w-1/4` columns (**273 px** at 1440 px /
      **225.4** at 1200 / **180.4** at 992) — **link column FIRST**, then three card columns
- [ ] Item column: four own-string items `text-[12px] text-black px-5 py-[15px]` → **52.6 px**,
      `border-b border-black/10`, `hover:bg-accent hover:text-white`, real destinations
- [ ] Cards: `h-[250px] w-full bg-cover bg-center mb-5 rounded-none` from
      `https://picsum.photos/seed/spinnaker-<n>/250/250` (or the card's own ratio), title
      `text-[16px] font-semibold text-black mb-0 leading-[1.5]` as a real link, meta
      `text-[14px] text-black/20`
- [ ] Behaviour: `mouseenter`/`mouseleave`, `click` toggle, `ArrowDown` opens + focuses the first item,
      `ArrowDown`/`ArrowUp` roving focus, `Escape` closes + refocuses the trigger, outside click
      closes; highlight the trigger while open (delta)
- [ ] Tests for every behaviour above (one `it` per scenario in the spec) + the panel's measured size
      at 1440/1200/992 px and the link-column-first order

## Mobile chrome + in-flow mega panel (TDD)

- [ ] Toggler **second in the bar DOM**, right-aligned: `border-none text-white/50 uppercase
      text-[16px] tracking-[.1em] pt-1 pb-1 pl-3 pr-0`, a real bars glyph + the word `MENU`,
      `aria-expanded` in sync, `focus-visible` ring
- [ ] Panel: `basis-full` in-flow, `ul` with `pb-[10px]`, height-animated `0.35s ease`
      (`prefers-reduced-motion` → off), `display:none` when collapsed
- [ ] Panel rows **54 px** (`py-[14.4px]`) in `text-white/70` (`text-white` on hover) with **no**
      bottom rule
- [ ] Mega panel below 992 px: `static`, `w-full`, **`bg-[#202020]`**, **`p-0`**, radius kept, items
      `text-white/80` with `border-white/10` rules — and **still collapsed** until the row is
      hovered/clicked (do **not** copy the `-16`/`-17` siblings' permanent expansion)
- [ ] Below 768 px the three card columns are `hidden`; at 768–991 px they render as four `172.5 px`
      columns with `142.5 × 250` images and two-line captions (**346.8 px** panel); make the captions
      legible on `#202020` (delta)
- [ ] Tests: 66 px collapsed / 504.3 px expanded (438.3 px panel) at 375/767 px; 640.7 px bar /
      574.7 px panel at 768–991 px; row inks; hidden card columns below 768 px; `aria-expanded`
      toggling; reduced-motion path

## Materialised sections (TDD)

- [ ] Real content below the chrome for every destination: a home/intro block for the brand, one block
      per plain row, four item destination blocks, three project/news blocks behind the mega cards, and
      an editorial block for the mega panel
- [ ] `scroll-margin-top` ≥ the bar's bottom (≈ **294 px**)
- [ ] Images from `https://picsum.photos/seed/spinnaker-<n>/<w>/<h>` (the source's three photographs
      are never copied)

## Footer + attribution (TDD)

- [ ] Footer linking `https://www.componentdock.com/` branded **"Component Dock"** (the source has no
      footer); test the link text + href

## Quality gates

- [ ] `scripts/verify-app.sh spinnaker` green (typecheck + lint + knip + fallow + vitest **100 %**
      lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green; `npm run readme:status` after the `[x]` mark
- [ ] PR description lists: source template + preview URL, design tokens captured, and every
      documented delta (name, icons, font, restored focus states, legible mobile captions, open-trigger
      highlight, placeholder photography, materialised links, footer)
- [ ] Squash-merge, then mark `TEMPLATES.md` `Website Menu 18` `[x]` with
      `https://spinnaker.free.componentdock.com` + homepage
