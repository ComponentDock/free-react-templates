# Slidenav — implementation tasks

> **SHIPPED** — this prep's design shipped as `apps/slidenav`
> (<https://slidenav.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib **"Website Menu 02"** (source slug `website-menu-02` — the
Website Menus family's **coral-band minimal menu**: a **transparent,
non-sticky header** floating over a flat **100vh `#eb4d55`** band, a **16 px
uppercase 700 white** wordmark at the left ("Brand"-shaped: no accent, no full
stop), a right-aligned **six-item row** (home · portfolio · about · services ·
blog · contact) in **15 px** `rgba(255,255,255,.7)` → **`#fff`** on hover/focus,
each item owning a **1 px white underline** that scales in from `scale(0)` to
`scale(1)` over **`.3s transform ease`** and stays scaled up on the current item,
a hamburger that replaces the whole row below **992 px** and slides a **300 px
white off-canvas panel** in from the right (`padding-top:20px`,
`-10px 0 20px -10px rgba(0,0,0,.1)` shadow, `.3s ease-in-out`) over a
**`rgba(0,0,0,.5)`** veil, with **cloned rows** at **20 px `#212529`**
(`10px 20px`, hover `#eb4d55`) and the current row in **`#eb4d55`**, a **30 px**
close glyph (hover `#ced4da`), and **four close paths**.
The page is **2 bands** (header + band), the band is deliberately empty in the
source, the source has **no** sticky bar, **no** dropdown, **no** submenu and
**no** socials, and all **six links are dead `href="#"`** — the recreation
materialises all six as labelled panels inside that same band.
Type is **Open Sans 300/400/700**; the shape language is **square** everywhere.

Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-02/` returns **HTTP 404** — the
**live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-02/`
(**HTTP 200**, 2,774 B, title `Website Menu #2`; its
`css/style.css?v=05c76b1d` 16,309 B and `js/snippet.js?v=863a9219` 2,525 B are
**sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-02.zip`,
HTTP 200, 230,044 B — the un-versioned source copy).
Screenshot: `website-menu-02.jpg` (HTTP 200, JPEG, 1200×972, 31,868 B) — a
browser-chrome mock of a frame-filling flat coral surface with a transparent
header strip, a white uppercase bold wordmark, six near-white links and a thin
white underline under the current one — and nothing else.

Spec: `openspec/specs/template-slidenav/spec.md`. New name: **slidenav** (never
reuse the source slug `website-menu-02`, the name "Website Menu 02", the "Brand"
wordmark string, the `cl-` utility namespace, the `icomoon` glyph codepoints
(`\e313`, `\f078`), the self-hosted Open Sans woff2 files, or any copy verbatim).
Design notes: `docs/templates/slidenav/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/slidenav`
- [ ] Rename package to `@free-react-templates/slidenav`; set
      `"homepage": "https://slidenav.free.componentdock.com"`
- [ ] `public/CNAME` = `slidenav.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/slidenav`
      (`grep -c "free-react-templates/slidenav" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an
      existing app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap`
      (the source's three self-hosted weights, 300/400/700 — never copy its
      woff2 files). Icons: `lucide-react` (`Menu`, `X`).
- [ ] `@theme` tokens in `src/index.css`: `--color-band: #eb4d55`,
      `--color-accent: #007bff`, `--color-accent-shade: #0056b3`,
      `--color-ink: #212529`, `--color-close-hover: #ced4da`,
      `--font-sans: "Open Sans", …` (design-token notes only — no provenance
      comments)

## Band + header shell (TDD)

- [ ] Tests first: the band renders as a `100vh` `#eb4d55` region; the header is
      absolutely positioned over it, transparent, with **no** border-bottom
- [ ] `Hero` band component: `100vh` + `bg-band`
- [ ] `Header`: `absolute inset-x-0 top-0 z-[1999] p-4` (growing to
      `py-12` below `lg`), transparent, **no** scroll listener and **no** sticky
      state — the source has neither
- [ ] Tests: the wordmark is the page's single `h1`, **16 px / uppercase / 700 /
      white**, with no accent glyph and no trailing punctuation
- [ ] Tests: exactly **six** nav links in the source's order, each `15px`,
      `px-0 py-5`, `mx-[15px]`, `rgba(255,255,255,.7)` → `#fff` on hover/focus,
      `aria-current="page"` on the current one; **no** dropdown, caret, submenu,
      social or arrow-toggle markup is rendered anywhere
- [ ] Tests: below `lg` (992 px) the row is hidden and the header's vertical
      padding is 48 px

## Sliding underline (TDD)

- [ ] Tests first: the current item's underline is scaled up at first paint; any
      other item's is scaled down until hover/focus
- [ ] Implementation: a `::before`-equivalent absolutely-positioned 1 px white bar
      spanning the link (`after:w-full after:h-px after:bg-white after:bottom-0`),
      `origin-center`, `scale-x-0` → `scale-x-100` on hover/focus/current over
      `.3s` (`transition-transform`)
- [ ] Tests: geometry — the bar sits at the link's own bottom edge
      (`padding:20px 0` below the text), not at the header's bottom

## Off-canvas mobile menu (TDD)

- [ ] Tests first: the toggle opens the panel; `aria-expanded`/`aria-controls`
      wired; `Escape`, the close glyph, the veil/outside click and a resize to
      ≥992 px all close it; focus moves in and returns
- [ ] Panel: `fixed right-0 z-[2000] w-[300px] h-screen bg-white pt-5`,
      `shadow-[-10px_0_20px_-10px_rgba(0,0,0,.1)]`,
      `translate-x-[110%] → 0` over `.3s ease-in-out`; body
      `h-[calc(100vh-52px)] overflow-y-auto px-5` with `pb-[150px]`
- [ ] Veil: a real element (`fixed inset-0 z-[1] bg-black/50`) fading over `.3s`,
      clickable to close and reachable/operable from the keyboard
- [ ] One nav source of truth: render the same six-item tree in the panel (mount a
      second instance rather than cloning DOM) — never hand-maintain two copies
- [ ] Rows: `py-[10px] px-5` in `#212529` (hover/focus `#eb4d55`), level-1 labels
      **20 px** with `pl-5`, the current row **`#eb4d55`**
- [ ] Toggle: a real `button` with an accessible name, `aria-expanded`,
      `aria-controls` and a `focus-visible` ring, holding a **white 28 px**
      `lucide-react` `Menu` glyph (the source's anchor has no accessible name and
      no `aria-controls` — add both)
- [ ] Close glyph: **30 px** `lucide-react` `X` in a labelled button with a
      `#ced4da` hover
- [ ] Tests: **no** submenu/arrow/`display:none`-until-expanded machinery is
      shipped (the source's markup has no `.has-children` row)

## Anchor panels in the band (TDD)

- [ ] Tests first: each of the six nav labels has a matching `id` in the band and
      the band contains exactly one `#home` target at its top
- [ ] Six labelled panels (own copy, same *kinds* as the labels: home, portfolio,
      about, services, blog, contact) rendered on the coral surface in
      white/near-white with the sheet's own `#007bff` accent; single column below
      `lg`
- [ ] `scroll-margin-top` ≥ the header height on every target; images (if any) from
      `https://picsum.photos/seed/slidenav-<n>/<w>/<h>`
- [ ] Tests: **zero** dead `href="#"` links remain anywhere in the app

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`), plus a computed current year
- [ ] Minimal strip below the band: dark surface with a translucent hairline top
      edge and the app wordmark on the left

## Quality gates

- [ ] Accessibility: toggle and close are labelled `button`s with
      `aria-expanded`/`aria-controls`; the panel is a labelled region with focus
      moved in and returned; the veil closes by keyboard too; every interactive
      element has a `focus-visible` ring; `aria-current` on the current nav item
- [ ] `prefers-reduced-motion: reduce` collapses the `.3s` panel/veil transitions
      and the underline's scale-in
- [ ] No horizontal overflow at 320 px (`scrollWidth === innerWidth`); the band
      stays `100vh` at every width
- [ ] Zero `colorlib` / "Website Menu 02" / `website-menu-02` strings in
      `apps/slidenav`; no copied assets (no `style.css`, no `snippet.js`, no woff2
      files, no `icomoon` codepoints, no `cl-` utility classes, no images)
- [ ] `scripts/verify-app.sh slidenav` green (typecheck + lint + knip + fallow +
      vitest 100 %) and `npm run spec:validate` green
- [ ] Squash-merge the PR, then mark the TEMPLATES.md item `[x]` with the live
      Surge URL + `npm run readme:status`
