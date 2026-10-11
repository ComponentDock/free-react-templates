# Bowsprit — implementation tasks

Recreation of ColorLib **"Website Menu V08"** (source slug `website-menu-08` — the
Website Menus family's **CTA variant**: one transparent dark-on-photo nav row with
the wordmark at the left, a **five-item** nav list (third item a **hover + click
dropdown**) and, in a **separate list of its own**, a **square `#007bff` CTA
block** at the right — two `margin-left:auto` groups that split the leftover space,
so the button sits well clear of the last label — plus an **inline collapse**
(`#000` bar, `56 × 40` hamburger, `height 0.35s` animation) below 768 px, over a
**`100vh` full-bleed background image** band. The source has **no content
sections, no footer, no sticky chrome, no utility bar, no panel and no icon font**;
`body{height:200vh}` exists only as scroll room and `body:before` (a `rgba(0,0,0,.5)`
veil) is **dead code** — do not implement it.

Type is **Quicksand (400/600/700 declared; the sheet asks for 800 on the 32 px
wordmark and bold on the CTA)**. Shape language is **square except `4px`**: only
the flyout surface and the hamburger button are rounded; the CTA block is a hard
rectangle. Preview: the slug-only path
`https://preview.colorlib.com/theme/website-menu-08/` returns **HTTP 404** — the
**live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-08/` (**HTTP 200**,
2,633 B, `<title>Website Menu #8</title>`; its `css/style.css?v=ee2330e9`
16,566 B and `js/snippet.js?v=fdfd2d20` 6,988 B are **sha256-identical** to the
snippet archive `https://preview.colorlib.com/downloads/free/website-menu-08.zip`,
HTTP 200, 649,931 B — the un-versioned source copy). Screenshot:
`website-menu-08.jpg` (HTTP 200, AVIF, 1200×972, 126,320 B) — a browser-chrome mock
of the live preview: `BRAND` uppercase and wide-tracked at the left,
`Home · Recipes · Services ▾ · About · News` centre-right, and the square blue
`CONTACT US` block at the far right, all on a full-bleed cinderblock-wall photo.

Spec: `openspec/specs/template-bowsprit/spec.md`. New name: **bowsprit** (the spar
that juts forward from a vessel's bow — for the element that juts out past the rest
of the bar). Never reuse the source slug `website-menu-08`, the name "Website Menu
08", the "Brand" wordmark, the six source labels (`Home`, `Recipes`, `Services`,
`About`, `News`, `Contact Us`), the three flyout labels (`Food Catering`,
`Drink & Beverages`, `Wedding & Birthday`), the `cl-` utility namespace, the inline
SVG hamburger data URI, the self-hosted Quicksand woff2 files, or any copy
verbatim. Design notes: `docs/templates/bowsprit/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/bowsprit`
- [ ] Rename package to `@free-react-templates/bowsprit`; set
      `"homepage": "https://bowsprit.free.componentdock.com"`
- [ ] `public/CNAME` = `bowsprit.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/bowsprit`
      (`grep -c "free-react-templates/bowsprit" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing
      app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap`
      (the source's self-hosted 400/600/700 subsets are never copied; the variable
      face covers the 800 the wordmark asks for). Icons: `lucide-react` (`Menu`,
      `ChevronDown`).
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #007bff`,
      `--color-brand-hover: #0056b3`, `--color-ink: #212529`,
      `--color-navbar-mobile: #000`, `--color-label: rgba(255,255,255,.8)`,
      `--color-label-current: #fff`, `--color-toggler: rgba(255,255,255,.5)`,
      `--color-toggler-border: rgba(255,255,255,.1)`,
      `--shadow-flyout: 0 2px 30px 0 rgba(0,0,0,.2)`,
      `--shadow-cta-hover: 2px 0 30px -5px rgba(0,0,0,.2)`,
      `--radius-flyout: 4px`, `--font-sans: "Quicksand", …`
      (design-token notes only — no provenance comments)

## Header shell + image band (TDD)

- [ ] Tests first: the band renders as a `100vh` region with a `cover`,
      `50% 50%`, `no-repeat` background; the header is absolutely positioned at
      `top:0` with `z-index:5`, `padding:30px 0` at ≥768 px and `padding:0` below,
      and a transparent surface at every width ≥768 px
- [ ] `Hero` band component: `100vh` full-bleed background image
      (`https://picsum.photos/seed/bowsprit-hero/1920/1080`), no scrim, no CTA
      (the source has none)
- [ ] `Header`: `absolute top-0 left-0 w-full z-[5]`, container `flex
      justify-between items-center` with `px-[15px]` (zeroed below `md`) and
      max-widths `sm:540px md:720px lg:960px xl:1140px`; no sticky state, no second
      tier, no panel
- [ ] `Navbar` surface: transparent at ≥768 px, **`#000`** below it with
      `flex-wrap:wrap` and `py-2 px-4` (`8px 16px`)
- [ ] Wordmark: own brand text, `text-[32px] font-extrabold uppercase
      tracking-[.2em] text-white leading-none py-[5px] mr-4`, a link to the top of
      the page (never the source's "Brand", never a two-tone span)
- [ ] Tests: header stays transparent over the band, wordmark is a single white
      link, no `colorlib`/"Brand" string anywhere

## Nav list + CTA list (TDD)

- [ ] Tests first: **five** nav items render in source order plus **exactly one**
      CTA anchor, and the nav group and the CTA group are **two sibling lists**
      (two `ul`s), each with its own auto left margin — assert the split, not a
      single right-aligned cluster
- [ ] `Nav` driven by **one** `navItems` data structure (`text-[16px]`,
      current row `text-white` + `aria-current="page"`,
      the rest `text-[rgba(255,255,255,.8)]`), list `ml-auto pl-12` at `lg`+,
      labels `1.7rem 0.5rem` at `xl`+ and `0.5rem` at `lg` (the source's
      `992–1199.98 px` override) with mobile column rows `py-2`
- [ ] Dropdown parent: `whitespace-nowrap`, reserves the caret (a
      `lucide-react` `ChevronDown`, `0.3em`-thick glyph, `0.255em` gap,
      `rgba(255,255,255,.8)`)
- [ ] `CtaButton`: square (`rounded-none`) `bg-brand text-white uppercase
      text-[0.8rem] font-bold leading-none px-5 py-[15px]`,
      `transition-[background-color,color,box-shadow] duration-300`, hover/focus
      `bg-white text-brand shadow-[2px_0_30px_-5px_rgba(0,0,0,.2)]`; own label of
      the same *kind*, pointing at a real in-page target
- [ ] Tests: hover/focus inverts the CTA (assert the computed background/colour
      change), the CTA has **no** border radius, and no dead `href="#"` exists

## Hover + keyboard dropdown (TDD)

- [ ] Tests first: hovering the parent opens the flyout and sets
      `aria-expanded="true"`; `Escape` closes it and returns focus to the toggle;
      an outside click closes it; `ArrowDown` on the toggle opens it and focuses
      the first row
- [ ] `Flyout`: `absolute top-full left-0 z-[1000] min-w-[13em] py-2 -mt-[10px]
      bg-white rounded-[4px] border-0 shadow-[0_2px_30px_0_rgba(0,0,0,.2)]
      text-[14px] text-ink` with the `10%` / `100%` white arrow as a `7px` CSS
      border (`border-bottom-color:#fff`, hidden below `lg`)
- [ ] Flyout rows: **three** anchors of the source's kinds (own labels),
      `block py-[7px] px-6 text-[14px] text-ink whitespace-nowrap`, hover/focus
      **`bg-brand text-white`** (this snippet's hover is blue, not a grey wash),
      active row the same pair
- [ ] **No transition on open/close** (the source swaps `display`); open state is a
      real disclosure (`aria-haspopup`, `aria-expanded`, `aria-controls`), one
      flyout at a time, open on hover **and** click
- [ ] Tests: keyboard-only traversal (`ArrowDown`/`ArrowUp` inside the flyout),
      `Escape` restores focus, the flyout stays inside the viewport at 1024 px
      (flip to `right:0`), every row is a real in-page target — **zero** dead
      `href="#"`

## Mobile inline collapse (TDD)

- [ ] Tests first: below `md` the hamburger (a real `button` with
      `aria-expanded`/`aria-controls` + accessible label) reveals the nav
      **inline**; there is **no** drawer, no veil, no fixed panel
- [ ] `NavbarToggler`: `56 × 40` (`py-1 px-3`, `text-xl`,
      `text-[rgba(255,255,255,.5)]`, `border border-[rgba(255,255,255,.1)]
      rounded-[4px]`), 30 px `lucide-react` `Menu` (never the source's inline SVG
      data URI), hidden at ≥768 px
- [ ] Collapse region: `hidden` at rest with `flex-basis:100%`/`grow`; opening
      animates **`height 0.35s ease`** (`0` → content; assert the measured height
      ≈ 243 px at 375 px or its content-driven equivalent), then settles open with
      `aria-expanded="true"`; closing removes any stale inline height
- [ ] Expanded rows: **five** rows at `40 px` (`py-2`, `16px`; current `#fff`,
      others `rgba(255,255,255,.8)`) then the **full-width** CTA block
      (`px-5 py-[15px]`, `#007bff`, uppercase, `0.8rem`/700)
- [ ] The parent's flyout inside the collapse is **static/indented** (the source's
      `position:static; float:none`, arrow hidden) and expands in the flow
- [ ] One source of truth: the desktop row and the collapse render the **same**
      nav component/data — never a DOM clone and never a second hand-maintained
      list
- [ ] Tests: resize to ≥768 px closes it with no residue, focus stays on the
      toggle, and there is **no horizontal overflow at 320 px**
      (`scrollWidth === innerWidth`)

## Materialised sections (TDD)

- [ ] Tests first: each nav target has a matching `id` (`#home`-intro,
      recipes/dishes grid, services, about, news, contact)
- [ ] Six labelled sections with own copy, of the same *kinds* as the source's
      labels, plus real targets for the three flyout rows; `scroll-margin-top` ≥
      header height on every target
- [ ] Imagery from `https://picsum.photos/seed/bowsprit-<n>/<w>/<h>`; the page is
      longer than the viewport so it reads like the source's `body{height:200vh}`
      with real content instead of blank filler
- [ ] Tests: **zero** dead `href="#"` links remain anywhere in the app

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and a computed current year
- [ ] Minimal strip below the last section: dark surface with a translucent 1 px
      top hairline — a documented delta, since the source has no footer

## Quality gates

- [ ] Accessibility: toggler exposes `aria-expanded`/`aria-controls` (and labels
      the collapse region), the dropdown parent exposes
      `aria-haspopup`/`aria-expanded`/`aria-controls`, the current row is not
      colour-only (`aria-current`), every interactive element has a visible focus
      ring, and `Escape` closes the flyout and the mobile list
- [ ] `prefers-reduced-motion: reduce` collapses the `0.35s` collapse animation and
      the CTA's `.3s` transition
- [ ] Shape language: `4px` on the flyout surface and the hamburger button only —
      the CTA block stays **square** (`rounded-none`), no pills anywhere
- [ ] Zero `colorlib` / "Website Menu 08" / `website-menu-08` strings in
      `apps/bowsprit` (comments included); none of the source's strings reused
      (`Brand`, the six labels, the three flyout labels)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `quicksand-*.woff2`,
      no `hero_1.jpg`, no inline SVG data URI, no `cl-` utility classes, no
      jQuery/Bootstrap
- [ ] Documented deltas recorded in the PR: an added hover/focus colour for
      inactive labels (the source's `!important` rules leave none), the dead
      `body:before` veil dropped, the source's seven dead links replaced by real
      section targets, added disclosure/keyboard semantics, reduced-motion
      handling, and the added footer
- [ ] `scripts/verify-app.sh bowsprit` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the
      workspace; footer attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 08` item `[x]`
      with the live `https://bowsprit.free.componentdock.com` URL + homepage and
      run `npm run readme:status`
