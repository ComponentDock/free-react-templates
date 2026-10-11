# Menutree — implementation tasks

Recreation of ColorLib **"Website Menu 01"** (source slug `website-menu-01` — the
Website Menus family's **slate-canvas mega-menu**: a **transparent header**
floating over a flat **100vh `#5d5b6a`** band, a **24 px "Brand."** wordmark whose
full stop is the brand **`#007bff`**, a **13 px uppercase** link row
(home · about ▾ · blog · contact) with a **white dropdown** under "about"
(`2px solid #007bff` top border, `min-width:210px`, rows `9px 20px` with an
`#eff1f3` hover) carrying a **third-level flyout at `left:100%; top:0`**, three
icon-only social links, a hamburger that replaces the row below **1200 px** and
slides a **300 px white off-canvas panel** in from the right over a
`rgba(0,0,0,.5)` veil with **36 px round arrow toggles** for the nested rows, and a
header that becomes a **solid white sticky bar**
(`box-shadow:4px 0 20px -5px rgba(0,0,0,.1)`) on scroll. The page is **2 bands**
(header + band), the band is deliberately empty in the source, and the source
declares **ten `#*-section` anchors that do not exist** — the recreation
materialises all ten as labelled panels inside that same band.
Type is **Open Sans 300/400/700**; the shape language is **square** everywhere
(the sheet's only `border-radius` is the mobile arrow's `50%`).

Preview: `https://preview.colorlib.com/theme/website-menu-01/` → **HTTP 404**
(9 B `Not Found`; siblings `-02`/`-20` 404 as well — the whole family has no live
theme page). **Fallback reference:** the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-01.zip`
(HTTP 200, 231,882 B → `index.html` 5,900 B, `css/style.css` 18,843 B,
`js/snippet.js` 3,537 B) plus the TEMPLATES.md screenshot
`website-menu-01.jpg` (HTTP 200, JPEG, 1200×972, 30,134 B).
Screenshot: a browser-chrome mock of a frame-filling flat slate surface with a
transparent header strip, a white wordmark with a blue accent, four uppercase
links (one with a caret) and three icon-only socials — and nothing else.

Spec: `openspec/specs/template-menutree/spec.md`. New name: **menutree** (never
reuse the source slug `website-menu-01`, the name "Website Menu 01", the "Brand."
wordmark, the `cl-` utility namespace, the `icomoon` glyph codepoints
(`\e313`, `\e315`, `\f078`), the self-hosted Open Sans woff2 files, or any copy
verbatim). Design notes: `docs/templates/menutree/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/menutree`
- [ ] Rename package to `@free-react-templates/menutree`; set
      `"homepage": "https://menutree.free.componentdock.com"`
- [ ] `public/CNAME` = `menutree.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/menutree`
      (`grep -c "free-react-templates/menutree" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap`
      (the source's three self-hosted weights, 300/400/700 — never copy its
      woff2 files). Icons: `lucide-react` + the app's own inline SVG brand paths.
- [ ] `@theme` tokens in `src/index.css`: `--color-band: #5d5b6a`,
      `--color-brand: #007bff`, `--color-brand-shade: #0056b3`,
      `--color-ink: #212529`, `--color-row-hover: #eff1f3`,
      `--color-toggle-hover: #f8f9fa`, `--font-sans: "Open Sans", …`
      (design-token notes only — no provenance comments)

## Band + header shell (TDD)

- [ ] Tests first: the band renders as a `100vh` `#5d5b6a` region; the header is
      absolutely positioned over it and transparent at rest
- [ ] `Hero` band component: `min-h-screen`-equivalent (`100vh`) + `bg-band`
- [ ] `Header` (transparent absolutely-positioned → white fixed bar when scrolled):
      naive scroll listener or `IntersectionObserver` sentinel, `is-stuck` state
- [ ] Tests: wordmark is the page's single `h1` at **24 px** with the accent in
      `#007bff`; four primary rows + three socials; each social has an accessible
      name; the hamburger is hidden ≥1200 px
- [ ] Nav row styling: `text-[13px] uppercase px-5 py-5` in
      `rgba(255,255,255,.7)` → `#fff` on hover/focus, `aria-current="page"` on
      the current item, socials `px-[5px]`
- [ ] Resting rules: header `border-b border-white/10`; stuck rules: `bg-white`
      `shadow-[4px_0_20px_-5px_rgba(0,0,0,.1)]`, ink links, brand wordmark
- [ ] Tests: the state toggle is jump-free (no width/layout shift when it pins)

## Dropdown + third level (TDD)

- [ ] Tests first: hovering/focusing "about" reveals the panel; `aria-expanded`
      tracks it; `Escape` closes and restores focus
- [ ] Panel: white, `border-t-2 border-brand`, `min-w-[210px]`,
      `shadow-[0_2px_10px_-2px_rgba(0,0,0,.1)]`, rows `py-[9px] px-5` with
      `hover:bg-row-hover`, opening motion `mt-5 → mt-0` over `.2s`
- [ ] Six rows (team, pricing, faq, gallery, services, testimonials — own labels
      of the same kinds) + one nested row owning a **flyout at
      `left:100%; top:0`**
- [ ] Tests: keyboard traversal reaches every row and the flyout; the flyout is
      re-anchored (or stacked) so it never opens off-screen below `lg`

## Off-canvas mobile menu (TDD)

- [ ] Tests first: the hamburger opens the panel; `aria-expanded`/`aria-controls`
      wired; `Escape`, the close glyph, the veil and a resize to ≥1200 px all
      close it; focus moves in and returns
- [ ] Panel: `fixed right-0 w-[300px] h-screen bg-white pt-5`,
      `shadow-[-10px_0_20px_-10px_rgba(0,0,0,.1)]`,
      `translate-x-[110%] → 0` over `.3s ease-in-out`; body
      `h-[calc(100vh-52px)] overflow-y-auto px-5 pb-5` with extra bottom padding
- [ ] Veil: `fixed inset-0 bg-black/50` fading over `.3s`
- [ ] One nav source of truth: render the same tree in the panel (mount a second
      instance rather than cloning DOM) — never hand-maintain two copies
- [ ] Rows: `py-[10px] px-5` in `#212529` (hover/focus `#007bff`), level sizes
      **20 / 16 / 16 px** at `pl-5 / pl-10 / pl-[60px]`, socials inline width
- [ ] Round arrow toggle: `36×36 rounded-full` at the row's right edge with a
      **12 px** chevron rotating **180°**, `f8f9fa` hover, `aria-controls` +
      `aria-expanded` (the source omits `aria-controls` — add it)
- [ ] Tests: nested submenus are `display:none` until expanded (`.cl-show`
      equivalent), all three levels nest without clipping at 320 px

## Anchor panels in the band (TDD)

- [ ] Tests first: each of the ten nav targets has a matching `id` in the band and
      the band contains exactly one `#home` target
- [ ] Ten labelled panels (own copy, same *kinds* as the source's declared
      targets: home, about, team, pricing, faq, gallery, services, testimonials,
      blog, contact) rendered on the slate surface in white/near-white with a
      `#007bff` accent; single column below `lg`
- [ ] `scroll-margin-top` ≥ header height on every target; images (if any) from
      `https://picsum.photos/seed/menutree-<n>/<w>/<h>`
- [ ] Tests: **zero** dead `href="#…"` links remain anywhere in the app

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`), plus a computed current year
- [ ] Minimal strip below the band: slate-continuing dark surface with a
      translucent hairline top edge, the app wordmark on the left

## Quality gates

- [ ] Accessibility: dropdown `aria-haspopup`/`aria-expanded` + `Escape`, arrow
      toggles `aria-controls`/`aria-expanded`, panel is a labelled region, every
      icon-only control labelled, `focus-visible` rings everywhere,
      `aria-current` on the current nav item
- [ ] `prefers-reduced-motion: reduce` collapses the `.2s` dropdown and `.3s`
      panel/veil transitions and removes the slide
- [ ] No horizontal overflow at 320 px (`scrollWidth === innerWidth`); band stays
      `100vh` at every width
- [ ] Zero `colorlib` / "Website Menu 01" / `website-menu-01` strings in
      `apps/menutree`; no copied assets (no `style.css`, no `snippet.js`, no
      woff2 files, no `icomoon` codepoints, no `cl-` utility classes)
- [ ] `scripts/verify-app.sh menutree` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] Squash-merge the PR, then mark the TEMPLATES.md item `[x]` with the live
      Surge URL + `npm run readme:status`
