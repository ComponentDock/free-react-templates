# Topdeck — implementation tasks

Recreation of ColorLib **"Website Menu V07"** (source slug `website-menu-07` —
the Website Menus family's **two-tier transparent header** variant: a **utility
top bar** (envelope + phone left, four socials right, closed by a
`1px rgba(255,255,255,.4)` hairline) above a **nav row** with the wordmark in a
`cl-col-2` at the **left** and **seven** `cl-col-10` right-aligned items — the
fourth of them a **multi-level dropdown** (200 px white `4px`-radius flyout with a
`10px` white triangle, whose fourth row opens a **second flyout to the right**)
— a **sticky header** that turns `#007bff` once scrolled (link padding
`20px 10px` → `10px`), a **300 px white off-canvas panel sliding in from the
RIGHT** (`translateX(110%) → 0`, `rgba(0,0,0,.5)` veil, 30 px close glyph, rows at
20 px with **collapsible 16 px sub-levels** behind a 36 px round expander), and a
**`100vh` full-bleed background image** band. The page has **no content sections
at all** in the source; `body{height:200vh}` exists only so the sticky header can
be seen.

Type is **Quicksand (400/600/700 declared; the sheet asks for 500 on nav labels
and 200 on the wordmark's `h1`)**. Shape language is **mixed**: square
everywhere except **`4px`** flyout surfaces/first-last rows and the **`50%`**
submenu expander. Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-07/` returns **HTTP 404** — the
**live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-07/`
(**HTTP 200**, 11,155 B, title `Website Menu #7`; its
`css/style.css?v=b6896cbd` 20,488 B and `js/snippet.js` 3,537 B are
**sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-07.zip`, HTTP 200,
653,017 B — the un-versioned source copy).
Screenshot: `website-menu-07.jpg` (HTTP 200, AVIF, 1200×972, 127,529 B) — a
browser-chrome mock of the live preview at rest: the utility bar, the hairline,
`BRAND` left, `Home · Classes · Pages ▾ · About · Events · Gallery · Contact`
right, all floating directly on a full-bleed cinderblock-wall photo.

Spec: `openspec/specs/template-topdeck/spec.md`. New name: **topdeck** (never
reuse the source slug `website-menu-07`, the name "Website Menu 07", the "Brand"
wordmark, the seven source labels, `info@domain.com` / `+1 234 4567 8910`, the
`cl-` utility namespace, the icomoon glyphs (`\e313`, `\e315`, `\f078`), the
self-hosted Quicksand woff2 files, the inline SVG paths, or any copy verbatim).
Design notes: `docs/templates/topdeck/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/topdeck`
- [ ] Rename package to `@free-react-templates/topdeck`; set
      `"homepage": "https://topdeck.free.componentdock.com"`
- [ ] `public/CNAME` = `topdeck.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/topdeck`
      (`grep -c "free-react-templates/topdeck" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap`
      (the source's self-hosted 400/600/700 subsets are never copied; the
      variable face covers the 500/200 weights its own CSS asks for). Icons:
      `lucide-react` (`Menu`, `X`, `Mail`, `Phone`, `ChevronDown`,
      `ChevronRight`, `Twitter`, `Facebook`, `Linkedin`, `Instagram`).
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #007bff`,
      `--color-ink: #212529`, `--color-ink-soft: #343a40`,
      `--color-flyout-hover: #ebeef0`, `--color-close-hover: #dee2e6`,
      `--color-arrow-hover: #f8f9fa`, `--color-hairline: rgba(255,255,255,.4)`,
      `--radius-flyout: 4px`, `--font-sans: "Quicksand", …`
      (design-token notes only — no provenance comments)

## Header shell + image band (TDD)

- [ ] Tests first: the band renders as a `100vh` region with a `cover`,
      `center center`, `no-repeat` background; the header is absolutely
      positioned at `top:0` with a transparent surface
- [ ] `Hero` band component: `100vh` full-bleed background image
      (`https://picsum.photos/seed/topdeck-hero/1920/1080`), no scrim, no CTA
      (the source has none)
- [ ] `Header`: absolute `top-0 left-0 w-full` with a **utility bar**
      (`py-4` = 16 px, `text-[0.8rem]`) and a **nav row**
      (`cl-col-2` logo / `cl-col-10` nav = `flex` 16.667 % / 83.333 %)
- [ ] `TopBar`: mail + phone anchors on the left (`gap` = 24 px, glyph + label,
      labels hidden below `md`), **four** social anchors on the right (8 px
      padding), closed by `border-b border-white/40`
- [ ] Wordmark: own brand text, `uppercase font-bold text-[20px] text-white`
      with the `-7px` lift
- [ ] Tests: the top-bar labels disappear below `md` while the four socials and
      both glyphs stay; every top-bar link is a real `mailto:`/`tel:`/social URL
      (no `href="#"`)

## Desktop nav + multi-level dropdown (TDD)

- [ ] Tests first: seven top-level items render in source order; the current one
      is white and marked `aria-current="page"`; the others compute
      `rgba(255,255,255,.6)` and turn white on hover/focus **in both header
      states**
- [ ] `Nav` component driven by **one** data structure (`navItems`), label
      `text-[15px] font-medium`, `li{padding:10px 5px}` + `a{padding:20px 10px}`
      (last item right padding `0`), the dropdown parent reserving
      `padding-right:20px` for a `lucide-react` chevron (16 px)
- [ ] `Dropdown`: `absolute top-full left-0`, white, `rounded-[4px]`,
      `shadow-[0_0_4px_0_rgba(0,0,0,.25)]`, `mt-5 → mt-0` over `.2s`, the
      `arrow-top` triangle as a `10px` CSS border at `left:20%`
      (`border-bottom-color:#fff`)
- [ ] Dropdown rows: three plain links + **one** nested parent, `w-[200px]`,
      `list-style:none`, `px-5 py-[9px]`, `text-sm`, `text-ink-soft`, hover/focus
      `bg-[#ebeef0] text-ink`, first/last rows carrying the `4px` radii
- [ ] Second-level flyout: same surface at `left-100% top-0` (right of its parent
      row), right-pointing chevron at `right:20px`, three rows
- [ ] Disclosure semantics: parent is a real toggle with `aria-haspopup`,
      `aria-expanded`, `aria-controls`; opens on hover **and** focus;
      `Escape` closes; focus leaving the group closes; never traps focus
- [ ] Tests: keyboard-only traversal reaches the second-level flyout; the
      flyouts stay inside the viewport at 1024 px (flip or clamp); every flyout
      row is a real in-page target — **zero** dead `href="#"`

## Sticky header (TDD)

- [ ] Tests first: at scroll 0 the nav row is transparent and in normal flow
      under the utility bar; after scrolling past its offset it is `fixed top-0`
      at container width with `background-color:#007bff`
- [ ] Implement with a scroll listener + a wrapper element carrying an
      `is-sticky`-equivalent class (`useStickyHeader` hook), with the background
      transition `.3s ease` and `prefers-reduced-motion` collapsing the motion
- [ ] Stuck-state link padding tightens to `10px`, inactive labels stay
      `rgba(255,255,255,.6)` (`#fff` on hover), current row stays `#fff`
- [ ] Tests: the toggle flips on scroll down and back on scroll up to the top;
      the listener is cleaned up on unmount; no layout shift when the row is
      pinned (wrapper keeps the height, the way the source's `sticky-wrapper`
      does)

## Off-canvas right panel (TDD)

- [ ] Tests first: the hamburger (a real `button`, `aria-expanded`/`aria-controls`)
      opens the panel; the veil appears; `Escape` and an outside `mouseup` close
      it; focus returns to the toggle
- [ ] Panel: `fixed right-0 top-0 w-[300px] h-screen bg-white pt-5`,
      `shadow-[-10px_0_20px_-10px_rgba(0,0,0,.1)]`, `translate-x-[110%]` →
      `translate-x-0` over `.3s ease-in-out`; body
      `h-[calc(100vh-52px)] overflow-y-auto p-5 pb-[150px]`
- [ ] Veil: `fixed inset-0 bg-black/50` at page level fading over `.3s`
      (`z-index:1` → `1002`, panel `2000`)
- [ ] Close control: 30 px `lucide-react` `X` in a labelled button at the panel's
      top-right (`#212529`, hover `#dee2e6`, `pl-2.5`)
- [ ] DOM order: render the panel **before** the header, matching the source's
      `position:fixed` panel-first markup
- [ ] One nav source of truth: mount the **same** `<Nav>` component (with a
      `variant="panel"` or equivalent) inside the panel — **never**
      `cloneNode(true)` the DOM
- [ ] Panel rows: seven level-1 rows at 20 px / `padding:10px 20px`,
      `#212529` → `#007bff`, current row `#007bff` + `aria-current="page"`
- [ ] Per-submenu **36 × 36 px `rounded-full`** expander at `right-0 top-10px`
      (hover `bg-[#f8f9fa]`, `aria-expanded`, accessible label) toggling
      three 16 px level-2 rows at `pl-10` and three 16 px level-3 rows at `pl-15`;
      caret (12 px) rotated `180deg` while open, `.3s ease`
- [ ] Tests: expander does not navigate; a row link closes the panel; resize
      above 768 px closes it; no dead `href="#"` anywhere in the panel

## Materialised sections (TDD)

- [ ] Tests first: each of the six declared anchors (`#home-section`,
      `#classes-section`, `#about-section`, `#events-section`, `#gallery-section`,
      `#contact-section`) has a matching `id`
- [ ] Six labelled sections (own copy, same *kinds* as the source's declared page
      names — intro, programme cards, story, schedule, image grid, contact) plus
      real targets for the dropdown rows
- [ ] `scroll-margin-top` ≥ header height on every target; imagery from
      `https://picsum.photos/seed/topdeck-<n>/<w>/<h>`
- [ ] Tests: **zero** dead `href="#"` links remain anywhere in the app; the page
      is longer than the viewport so the sticky state is reachable

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and a computed current year
- [ ] Minimal strip below the last section: dark surface with a translucent 1 px
      top hairline — a documented delta, since the source has no footer

## Quality gates

- [ ] Accessibility: toggle + dropdown parent expose
      `aria-expanded`/`aria-controls` (`aria-haspopup` on the dropdown); the
      panel is a labelled region with focus moved in and returned; every
      interactive element has a visible focus ring; state is not colour-only
- [ ] `prefers-reduced-motion: reduce` collapses the `.3s` panel/veil motion, the
      `.2s` flyout offset and the sticky background transition
- [ ] No horizontal overflow at 320 px (`scrollWidth === innerWidth`); the band
      stays `100vh`; flyouts stay inside the viewport at 1024 px and cap/flip when
      a 200 px surface would overflow
- [ ] Zero `colorlib` / "Website Menu 07" / `website-menu-07` strings in
      `apps/topdeck` (comments included); none of the source's strings
      (`Brand`, the seven labels, `info@domain.com`, `+1 234 4567 8910`) reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no
      `quicksand-*.woff2`/`icomoon-subset.woff2`, no `hero_1.jpg`, no `cl-`
      utility classes, no jQuery/Bootstrap, no icomoon codepoints or copied SVG
      paths
- [ ] Rounding only where the source has it: `4px` flyout surfaces/rows and the
      `50%` submenu expander — nothing else
- [ ] `scripts/verify-app.sh topdeck` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the
      workspace; footer attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md item `[x]` with the live
      `https://topdeck.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
