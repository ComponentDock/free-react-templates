# Larboard — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/larboard`
> (<https://larboard.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Website Menu V06"** (source slug `website-menu-06` —
the Website Menus family's **left-hand sidebar** variant: a **transparent
header** over a **100vh full-bleed background image**, a **white ≈28 px
hamburger** at the **left** that is the *only* nav control at every width (the
source's desktop row ships permanently `display:none`), a white uppercase
**"BRAND"** wordmark at the **right**, and a **300 px white off-canvas panel**
sliding in from the **left** over a `rgba(0,0,0,.5)` veil, holding a **flat
five-row menu** — Home (current, `#007bff`), About, Services, Blog, Contact — in
`#212529` at `20 px / padding 10px 20px`, with a **30 px dark close glyph** at the
panel's top-right and a scrolling body (`calc(100vh - 52px)`, 150 px bottom
padding).

Type is **Open Sans 300/400/700**; the shape language is **square everywhere** —
this variant has **no circular controls at all** (zero `.has-children`, so the
sibling's round arrow toggle never renders). Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-06/` returns **HTTP 404** — the
**live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-06/`
(**HTTP 200**, 2,878 B, title `Website Menu #6`; its
`css/style.css?v=bdd8b5c0` 15,914 B and `js/snippet.js?v=0fd41ac8` 2,525 B are
**sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-06.zip`, HTTP 200,
705,375 B — the un-versioned source copy).
Screenshot: `website-menu-06.jpg` (HTTP 200, AVIF, 1200×972, 58,713 B) — a
browser-chrome mock of the live preview with the **left sidebar open**: a
full-bleed photo of three people against a cinderblock wall, a white `BRAND`
wordmark at the top-right over it, and a white panel on the **left** listing Home
(blue) · About · Services · Blog · Contact.

Spec: `openspec/specs/template-larboard/spec.md`. New name: **larboard** (never
reuse the source slug `website-menu-06`, the name "Website Menu 06", the "Brand"
wordmark, the `cl-` utility namespace, the `icomoon` glyph, the self-hosted Open
Sans woff2 files, the three-bar / close SVG paths, or any copy verbatim). Design
notes: `docs/templates/larboard/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/larboard`
- [ ] Rename package to `@free-react-templates/larboard`; set
      `"homepage": "https://larboard.free.componentdock.com"`
- [ ] `public/CNAME` = `larboard.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/larboard`
      (`grep -c "free-react-templates/larboard" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap`
      (the source's three self-hosted weights, 300/400/700 — never copy its
      woff2 files). Icons: `lucide-react` (`Menu`, `X`).
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #007bff`,
      `--color-brand-shade: #0056b3`, `--color-ink: #212529`,
      `--color-close-hover: #ced4da`, `--font-sans: "Open Sans", …`
      (design-token notes only — no provenance comments)

## Header + image band shell (TDD)

- [ ] Tests first: the band renders as a `100vh` region with a cover background
      image; the header is absolutely positioned over it and transparent
- [ ] `Hero` band component: `100vh` full-bleed background image
      (`bg-cover bg-center bg-no-repeat`) from
      `https://picsum.photos/seed/larboard-hero/1920/1080`
- [ ] `Header` (transparent, `absolute top-0 w-full z-[1999]`, `py-6` = 24 px):
      **hamburger on the LEFT**, **wordmark on the RIGHT** — the source's
      `cl-col-9 cl-order-1` (left) + `cl-col-3 cl-order-2 cl-text-right` (right)
      are **mirrored versus the `-05` sibling**; do not normalise them
- [ ] Wordmark: own brand text, `uppercase font-bold text-base text-white`
      (Open Sans 700, 16 px); links to the top of the page
- [ ] Tests: the hamburger is a real `button` with a `lucide-react` `Menu` glyph
      at ≈**28 px**, white, with a ≈`3rem` vertical click target (the source's
      `cl-py-5`), visible at **every** breakpoint; **no** visible desktop nav row
      is rendered

## Off-canvas sidebar (TDD)

- [ ] Tests first: the hamburger opens the panel; `aria-expanded`/`aria-controls`
      wired; the close glyph, an outside click, `Escape` and a >768 px resize all
      close it; focus moves in and returns; body scroll is locked while open
- [ ] Panel: `fixed left-0 top-0 w-[300px] h-screen bg-white pt-5`,
      `shadow-[-10px_0_20px_-10px_rgba(0,0,0,.1)]`,
      `-translate-x-full → 0` over `.3s ease-in-out`; close glyph `text-[30px]`
      (`lucide-react` `X`) in a labelled button at the panel's **top-right**,
      hover `#ced4da`; body `h-[calc(100vh-52px)] overflow-y-auto px-5 pb-5` with
      **150 px** extra bottom padding
- [ ] Veil: `fixed inset-0 bg-black/50` fading over `.3s` at `z-index:1` (page)
      below the panel (`z-index:2000`); the veil is a real button labelled "close
      menu"
- [ ] DOM order: render the panel **before** the header, matching the source's
      fixed-panel-first markup
- [ ] One nav source of truth: mount the **same** `<Nav>` component in the panel
      (do not DOM-clone) — never hand-maintain two copies
- [ ] Rows: exactly **five**, source order (home, about, services, blog, contact),
      `py-[10px] px-5`, label **20 px**, `#212529` (hover/focus `#007bff`), the
      current row (home) in **`#007bff`** with `aria-current="page"`
- [ ] Tests: activating a row closes the panel; **no** dropdowns/sub-levels/
      socials exist; the four close paths each pass

## Anchor sections in the band (TDD)

- [ ] Tests first: each of the five menu targets has a matching `id` in the band
      and the band contains exactly one `#home` target
- [ ] Five labelled sections (own copy, same *kinds* as the source's declared page
      links: home → intro, about → story, services → offerings, blog → posts,
      contact → a contact block) over the image surface in white/near-white with a
      `#007bff` accent; single column below `lg`
- [ ] `scroll-margin-top` ≥ header height on every target; any imagery from
      `https://picsum.photos/seed/larboard-<n>/<w>/<h>`
- [ ] Tests: **zero** dead `href="#"` links remain anywhere in the app

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`), plus a computed current year
- [ ] Minimal strip below the band: dark surface with a translucent hairline top
      edge, the app wordmark on the left (documented delta — the source is a
      single-section snippet with no footer)

## Quality gates

- [ ] Accessibility: toggle has `aria-expanded`/`aria-controls`; the panel is a
      labelled dialog-like region; focus moves in and returns; the veil and close
      button are labelled; every interactive element has a `focus-visible` ring;
      `aria-current` on the current row
- [ ] `prefers-reduced-motion: reduce` collapses the `.3s` panel/veil transitions
      and removes the slide
- [ ] No horizontal overflow at 320 px (`scrollWidth === innerWidth`); band stays
      `100vh` at every width; the panel caps at viewport width below 300 px
- [ ] Zero `colorlib` / "Website Menu 06" / `website-menu-06` strings in
      `apps/larboard`; no copied assets (no `style.css`, no `snippet.js`, no
      woff2 files, no `icomoon` glyph, no `hero_1.jpg`, no three-bar / close SVG
      paths, no `cl-` utility classes)
- [ ] Square corners throughout — **no** rounded or pill controls
- [ ] `scripts/verify-app.sh larboard` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] Squash-merge the PR, then mark the TEMPLATES.md item `[x]` with the live
      Surge URL + `npm run readme:status`
