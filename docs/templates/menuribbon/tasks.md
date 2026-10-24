# Menuribbon — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/menuribbon`
> (<https://menuribbon.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Website Menu 04"** (source slug `website-menu-04` — the
Website Menus family's **sticky top-bar menu**: a **`#eee` contact/social utility
bar** (`.top-bar`, `padding:.5rem 0`) carrying `info@yourdomain.com` + phone at the
left and **Twitter / Facebook** right-aligned (`color:#666666`, labels hidden below
768 px), a **white header** (`.site-navbar`, `padding:1rem`, `z-index:1999`) whose
**absolute, uppercase, `2rem`/`font-weight:900` wordmark** ("Brand" →
**`#007bff`**) sits far-left over a **right-aligned seven-item row** (home ·
services · about us · why us · testimonials · blog · contact) of **`#000` label
links** (`margin:0 15px`, `padding:20px 0`) that turn **`#007bff`** on hover, one
`has-children` item carrying a **down chevron** (`padding-right:20px`) and opening a
**white dropdown** (`top:100%`, `border-top:2px solid #007bff`,
`0 2px 10px -2px rgba(0,0,0,.1)` shadow, `margin-top:20px → 0`, `.2s 0s`) with
**`min-width:200px` rows** (`padding:9px 20px`, `#000`, hover
`background:#f8f9fa`+`color:#ced4da`, active `#007bff` on `#f8f9fa`) and **one
nested flyout at `left:100%; top:0`** with a right chevron, where `.arrow-top:before`
pointer is **`display:none`** (no triangle), a **runtime `.sticky-wrapper` fixer**
that pins the header on scroll (`position:fixed`, `background:#fff`,
`box-shadow:4px 0 20px -5px rgba(0,0,0,.2)`, wordmark `#007bff`) — and a
**hamburger below 992 px** that slides a **300 px white off-canvas panel** from the
right (`padding-top:20px`, `100vh`, `translateX(110%) → 0`, `.3s ease-in-out`,
`-10px 0 20px -10px rgba(0,0,0,.1)`) over a **`rgba(0,0,0,.5)` veil**, with a
**runtime clone of the desktop nav** at **20 px `#212529`** (sub-levels 40 px /
60 px at 16 px), round **36 × 36 `arrow-collapse`** togglers, a **30 px close
glyph** (hover `#ced4da`) and **four close paths** (glyph, outside click,
`Escape`, resize > 768 px). The page is **4 regions** (off-canvas panel → top bar
→ header → hero) forced to `height:200vh` so the sticky flip is visible: **no**
content section, **no** footer, and a **100 vh** empty hero band. Type is
**Open Sans 400/700**; the shape language is **squares only** — the sole radius is
the `50%` circle on the mobile sub-row expanders.

Preview: the slug-only path `https://preview.colorlib.com/theme/website-menu-04/`
returns **HTTP 404** — the **live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-04/`
(**HTTP 200**, 8,436 B, title `Website Menu #4`; its `css/style.css?v=a1db509a`
19,345 B and `js/snippet.js?v=0d158312` 3,537 B are **sha256-identical** to the
snippet archive `https://preview.colorlib.com/downloads/free/website-menu-04.zip`,
HTTP 200, 710,718 B — the un-versioned source copy).
Screenshot: `website-menu-04.jpg` (HTTP 200, AVIF, 57,007 B, 1200 × 972) — a
browser-chrome mock: grey utility bar (`info@yourdomain.com`, `1+ (234) 5678 9101`
| `Twitter` `Facebook`) over a white header (`BRAND` in blue, then `Home ·
Services · About Us · Why Us · Testimonials · Blog · Contact` in black) over a
frame-filling desert photo (Monument Valley buttes, pale blue→sand sky).

Spec: `openspec/specs/template-menuribbon/spec.md`. New name: **menuribbon**
(never reuse the source slug `website-menu-04`, the name "Website Menu 04", the
"Brand" wordmark string, the `cl-` utility namespace, the `icomoon` glyph
codepoints (`\e313`, `\e315`, `\f078`), the inline SVG icon paths, the self-hosted
woff2 files, or any copy verbatim).
Design notes: `docs/templates/menuribbon/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/menuribbon`
- [ ] Rename package to `@free-react-templates/menuribbon`; set
      `"homepage": "https://menuribbon.free.componentdock.com"`
- [ ] `public/CNAME` = `menuribbon.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/menuribbon`
      (`grep -c "free-react-templates/menuribbon" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap`
      (only the two weights the source stylesheet declares — never copy its woff2
      files). Icons: `lucide-react` (`Mail`, `Phone`, `Twitter`, `Facebook`,
      `Menu`, `X`, `ChevronDown`, `ChevronRight`).
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #007bff`,
      `--color-accent-shade: #0056b3`, `--color-ink: #212529`,
      `--color-topbar: #eee`, `--color-topbar-link: #666666`,
      `--color-soft: #f8f9fa`, `--color-muted: #ced4da`,
      `--font-sans: "Open Sans", …` (design-token notes only — no provenance
      comments)

## Page shell + utility top bar (TDD)

- [ ] Tests first: four regions render in order (off-canvas panel → top bar →
      header → hero); no content section exists
- [ ] `TopBar`: `w-full bg-[#eee] py-2 text-[#666666]`; left group = email link
      (`Mail` icon) + phone link (`Phone` icon); right group = `Twitter` +
      `Facebook` links, `float-right`/`ml-auto`
- [ ] Labels wrapped in `hidden md:inline-block`; every link has an accessible
      name (icon-only below 768 px → `aria-label` on the `<a>`)
- [ ] Container: `mx-auto w-full px-[15px]` with max-widths 540 / 720 / 960 /
      1140 px at 576 / 768 / 992 / 1200

## Header + wordmark (TDD)

- [ ] Tests first: a blue uppercase 32 px wordmark renders as a link at the far
      left; the row is right-aligned
- [ ] `Header`: `relative z-[1999] w-full p-4` (normal flow at the top)
- [ ] `Wordmark`: `text-[2rem] font-black uppercase leading-none text-accent`
      (new, short, non-ColorLib mark)
- [ ] Logo is absolutely positioned at the left of the header row
      (`absolute left-[15px] top-1/2 -translate-y-1/2`), with the nav row
      `text-right` / `ml-auto`

## Desktop navigation row (TDD)

- [ ] Tests first: seven labelled items render right-aligned; hovering/focusing a
      label turns it `#007bff` over `.3s`
- [ ] `NavRow` / `NavItem`: labels `text-black`, `mx-[15px] py-5`, no underline,
      no background, no border; hover/focus `text-accent`
- [ ] `has-children` trigger: `pr-5` + a `ChevronDown` icon (replaces the icomoon
      `\e313` glyph)
- [ ] Row hidden below 992 px (`hidden lg:block`); caption/emoji-free labels
- [ ] Keyboard: tab order follows document order; visible focus ring (the source
      has none — adding one is a deliberate, documented improvement)

## Dropdown submenu (TDD)

- [ ] Tests first: opening the "about us" item by **hover and by focus** reveals
      the panel; moving away hides it; the nested flyout opens to the right
- [ ] `Dropdown` panel: `absolute top-full left-0 min-w-[200px] bg-white
    border-t-2 border-accent shadow-[0_2px_10px_-2px_rgba(0,0,0,.1)]`
- [ ] **No triangle pointer** (the source's `.arrow-top:before` is
      `display:none` in this variant) — do not add one
- [ ] Rows: `block px-5 py-[9px] text-black hover:bg-[#f8f9fa] hover:text-[#ced4da]`;
      current row `text-accent bg-[#f8f9fa]`
- [ ] `group-hover` / `focus-within` visibility with `duration-200` and
      `margin-top` `20px → 0`
- [ ] Nested `has-children` row: `left-full top-0` flyout + `ChevronRight`
- [ ] Accessibility: `aria-haspopup="menu"` / `aria-expanded` on the trigger,
      `Escape` closes and returns focus to the trigger

## Sticky header (TDD)

- [ ] Tests first: after the scroll offset is passed the header becomes fixed with
      a white background + shadow and the wordmark turns `#007bff`; at the top it
      returns to flow with no shadow
- [ ] `useStickyHeader` hook (or effect) toggling a `stuck` state from a passive
      `scroll` listener; also recompute on `resize`
- [ ] While stuck: `fixed top-0 w-[<wrapperWidth>px] bg-white
    shadow-[4px_0_20px_-5px_rgba(0,0,0,.2)]`; wordmark `text-accent`
- [ ] Transition `.3s all ease` on the header; clean up listeners on unmount

## Mobile toggle + off-canvas panel (TDD)

- [ ] Tests first: below 992 px the row is absent and an icon-only hamburger with
      an accessible name renders at the header's right edge; activating it opens
      the panel, sets `aria-expanded`, and all four close paths reset it
- [ ] `MenuToggle`: `inline-block lg:hidden absolute right-0`, `aria-expanded`,
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
- [ ] Close glyph: `text-[30px]`, hover `text-[#ced4da]`, accessible name, and it
      is a real `<button>`
- [ ] Sub-row expanders: round `h-9 w-9 rounded-full` button per `has-children`
      row with `aria-expanded` and a chevron rotating between collapsed and
      expanded
- [ ] Panel mirrors the desktop nav from a **single source of truth** (one item
      model rendered by both) — do **not** copy the source's runtime DOM cloning
- [ ] Close paths: glyph click, outside click / outside tap, `Escape`, and a
      resize listener above 768 px; each returns focus sensibly
- [ ] Scroll lock the document while the panel is open (deliberate, documented
      improvement over the source)

## Hero band (TDD)

- [ ] Tests first: a `100vh` cover-cropped band with no text renders below the
      header
- [ ] `Hero`: `relative h-screen w-full bg-cover bg-center bg-no-repeat` with a
      `picsum.photos/seed/menuribbon-hero/1900/1710` placeholder

## Shell, docs, ship

- [ ] `App.tsx` composes OffCanvas → TopBar → Header (Wordmark + NavRow +
      MenuToggle) → Hero, exactly the source order
- [ ] Footer/Component Dock link (`https://www.componentdock.com/`)
- [ ] No `colorlib.com` string anywhere under `apps/menuribbon/` (grep before
      commit)
- [ ] `npm run verify:app menuribbon` → typecheck + lint + knip + fallow + 100 %
      coverage vitest + build
- [ ] PR `feat/template-menuribbon` → squash-merge to main, then the `[~]` → `[x]`
      bookkeeping commit (surge URL, homepage, `npm run readme:status`)
