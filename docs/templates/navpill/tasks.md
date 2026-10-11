# Navpill — implementation tasks

Recreation of ColorLib **"Website Menu 03"** (source slug `website-menu-03` — the
Website Menus family's **blue-pill dropdown menu**: a **transparent, non-sticky
header** `position:absolute; top:2rem; z-index:1999` floating over a
**full-viewport photographic hero** (`100vh`, `background-size:cover`,
`center center`), a **24 px white** wordmark ("Brand") at the left, a right-aligned
**six-item row** (home · dropdown · listings · about · blog · contact) in
**16 px `#fff`** where every label is an inline `span` at **`padding:5px 20px` /
`border-radius:30px`** that becomes a **solid `#007bff` pill with white text** on
hover/focus and is **permanently a `#007bff` pill on the current item**, a
`has-children` item opening a **white dropdown** (`border-top:2px solid #007bff`,
`0 2px 10px -2px rgba(0,0,0,.1)` shadow, `margin-top:20px → 0`, `.2s 0s`, white
`10px` triangle at `left:20%`) with **`min-width:200px` rows** (`padding:9px 20px`,
`#343a40`, hover `#fafafb`) and **one nested flyout at `left:100%; top:0`**, and a
**hamburger that replaces the whole row below 1200 px** and slides a **300 px
white off-canvas panel** from the right (`padding-top:20px`, `100vh`,
`translateX(110%) → 0`, `.3s ease-in-out`, `-10px 0 20px -10px rgba(0,0,0,.1)`)
over a **`rgba(0,0,0,.5)` veil**, with a **runtime clone of the desktop nav** at
**20 px `#212529`** (sub-levels indented 40 px / 60 px at 16 px), round
**36 × 36 `arrow-collapse`** togglers, a **30 px close glyph** (hover `#f8f9fa`)
and **four close paths** (glyph, outside click, `Escape`, resize > 768 px).
The page is **3 regions** (off-canvas panel → header → hero) and is forced to
`height:200vh` purely so that scroll-away is visible; there is **no** sticky bar,
**no** footer, **no** content section, **no** socials, and all links other than
the current one are dead (`#`). Type is **Open Sans 400/700** (the source ships a
300 subset too but never declares it); the shape language is **pills and squares
only** — no card radii anywhere.

Preview: the slug-only path `https://preview.colorlib.com/theme/website-menu-03/`
returns **HTTP 404** — the **live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-03/`
(**HTTP 200**, 3,539 B, title `Website Menu #3`; its `css/style.css?v=0e95d7fb`
18,746 B and `js/snippet.js?v=b390e403` 2,525 B are **sha256-identical** to the
snippet archive `https://preview.colorlib.com/downloads/free/website-menu-03.zip`,
HTTP 200, 708,400 B — the un-versioned source copy).
Screenshot: `website-menu-03.jpg` (HTTP 200, AVIF, 71,239 B, 1200 × 972) — a
browser-chrome mock of a frame-filling desert photograph (Monument Valley buttes,
pale blue→sand sky) under a transparent header: white "Brand" at the left, and at
the right **Home as a filled blue pill**, then `Dropdown ⌄ · Listings · About ·
Blog · Contact` in plain white.

Spec: `openspec/specs/template-navpill/spec.md`. New name: **navpill** (never
reuse the source slug `website-menu-03`, the name "Website Menu 03", the "Brand"
wordmark string, the `cl-` utility namespace, the `icomoon` glyph codepoints
(`\e313`, `\e315`, `\f078`), the inline SVG icon paths, the self-hosted woff2
files, or any copy verbatim).
Design notes: `docs/templates/navpill/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/navpill`
- [ ] Rename package to `@free-react-templates/navpill`; set
      `"homepage": "https://navpill.free.componentdock.com"`
- [ ] `public/CNAME` = `navpill.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/navpill`
      (`grep -c "free-react-templates/navpill" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap`
      (only the two weights the source stylesheet declares — never copy its woff2
      files). Icons: `lucide-react` (`Menu`, `X`, `ChevronDown`,
      `ChevronRight`, `Plus`/`Minus` or a rotated `ChevronDown`).
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #007bff`,
      `--color-accent-shade: #0056b3`, `--color-ink: #212529`,
      `--color-row: #343a40`, `--color-row-hover: #fafafb`,
      `--color-soft: #f8f9fa`, `--font-sans: "Open Sans", …` (design-token notes
      only — no provenance comments)

## Hero band + header shell (TDD)

- [ ] Tests first: the hero band is a `100vh` cover-cropped image region; the
      header is absolutely positioned over it, transparent, with **no** border,
      **no** shadow and **no** scroll listener
- [ ] `Hero` band component: `relative h-screen w-full bg-cover bg-center` with a
      `picsum.photos/seed/navpill-hero/1900/1710` placeholder behind the header
- [ ] `Header`: `absolute inset-x-0 top-8 z-[1999]`, transparent, non-sticky
- [ ] Content container: `mx-auto w-full px-[15px]` with the source's
      max-widths (540 / 720 / 960 / 1140 px)

## Wordmark (TDD)

- [ ] Tests first: a white 24 px wordmark renders as a link with an accessible
      name at the left of the header
- [ ] `Wordmark` component (new, short, non-ColorLib mark)

## Desktop navigation row (TDD)

- [ ] Tests first: six labelled items render right-aligned; the current one is a
      filled accent pill; hovering/focusing any label yields the same pill over
      `.3s`
- [ ] `NavRow` / `NavItem`: `text-[16px]`, label span
      `inline-block rounded-full px-5 py-[5px] transition-all duration-300`
- [ ] Active/hover/focus label: `bg-accent text-white`
- [ ] Row hidden below 1200 px (`hidden xl:block`); caption/emoji-free labels
- [ ] Keyboard: tab order follows document order; visible focus ring (the source
      has none — adding one is a deliberate, documented improvement)

## Dropdown submenu (TDD)

- [ ] Tests first: opening the "dropdown" item by **hover and by focus** reveals
      the panel; moving away hides it; the nested flyout opens to the right
- [ ] `Dropdown` panel: `absolute top-full left-0 min-w-[200px] bg-white
    border-t-2 border-accent shadow-[0_2px_10px_-2px_rgba(0,0,0,.1)]`
- [ ] Upward white triangle (`border-width:10px` at `left:20%`) reproduced with a
      rotated square or CSS border triangle
- [ ] Rows: `block px-5 py-[9px] text-[#343a40] hover:bg-[#fafafb]`; current row
      `text-accent`
- [ ] `group-hover`/`focus-within` visibility with `duration-200` and
      `margin-top` `20px → 0`
- [ ] Nested `has-children` row: `left-full top-0` flyout + right chevron
- [ ] Accessibility: `aria-haspopup="menu"` / `aria-expanded` on the trigger,
      `Escape` closes and returns focus to the trigger

## Mobile toggle + off-canvas panel (TDD)

- [ ] Tests first: below 1200 px the row is absent and an icon-only hamburger with
      an accessible name renders; activating it opens the panel, sets
      `aria-expanded`, and all four close paths reset it
- [ ] `MenuToggle`: `inline-block xl:hidden text-white`, `aria-expanded`,
      `aria-controls`
- [ ] `OffCanvas` panel: `fixed right-0 top-0 z-[2000] h-screen w-[300px]
    bg-white pt-5 transition-transform duration-300 ease-in-out
    translate-x-[110%]` → `translate-x-0` when open
- [ ] Panel shadow: `shadow-[-10px_0_20px_-10px_rgba(0,0,0,.1)]`
- [ ] Veil: a `fixed inset-0 z-[1999] bg-black/50` overlay (or an app-level
      `body` class), `transition-opacity duration-300`, hidden when closed and
      `aria-hidden` so it is not tabbable
- [ ] Panel body: `h-[calc(100vh-52px)] overflow-y-auto px-5 pb-[150px]`
- [ ] Rows: level 1 `pl-5 text-[20px]`, level 2 `pl-10 text-[16px]`, level 3
      `pl-[60px] text-[16px]`; colour `#212529`, hover and current `#007bff`
- [ ] Close glyph: `text-[30px]`, hover `text-[#f8f9fa]`, accessible name, and it
      is a real `<button>`
- [ ] Sub-row expanders: round `h-9 w-9` button per `has-children` row with
      `aria-expanded` and a chevron rotating between collapsed and expanded
- [ ] Panel mirrors the desktop nav from a **single source of truth** (one item
      model rendered by both) — do **not** copy the source's runtime DOM cloning
- [ ] Close paths: glyph click, outside click / outside tap, `Escape`, and a
      resize listener above 768 px; each returns focus sensibly
- [ ] Scroll lock the document while the panel is open (deliberate, documented
      improvement over the source)

## Shell, docs, ship

- [ ] `App.tsx` composes OffCanvas → Header (Wordmark + NavRow + MenuToggle) →
      Hero, exactly the source order
- [ ] Footer/Component Dock link (`https://www.componentdock.com/`)
- [ ] No `colorlib.com` string anywhere under `apps/navpill/` (grep before commit)
- [ ] `npm run verify:app navpill` → typecheck + lint + knip + fallow + 100 %
      coverage vitest + build
- [ ] PR `feat/template-navpill` → squash-merge to main, then the `[~]` → `[x]`
      bookkeeping commit (surge URL, homepage, `npm run readme:status`)
