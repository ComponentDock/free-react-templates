# Halyard — implementation tasks

Recreation of ColorLib **"Website Menu V10"** (source slug `website-menu-10` — the
Website Menus family's **solid-menu / split-nav variant**: one **opaque white** bar in
normal flow, a **three-column grid** whose outer thirds hold six destinations as two
mirrored groups (`Home · Projects · Services` right-aligned in the left third,
`About · Blog · Contact` left-aligned in the right third) around a **lowercase green
wordmark dead-centre on the page**, a `992 px` desktop-nav breakpoint, a **`300 px`
off-canvas drawer** rendered from the same two lists under a `rgba(0,0,0,.5)` veil, and
a `100vh` full-bleed image band that starts at the bar's bottom edge). The source has
**no dropdown, no CTA, no utility bar, no content sections, no footer and no sticky
chrome**; `body{height:200vh}` exists only as scroll room.

Type is **Quicksand (400/700 declared; the archive's `600` files are unreferenced; a
dead `Roboto` stack sits in the normalize)**. Shape language is **square everywhere**
(the sheet's only `50%` is on a drawer disclosure control that never renders). Preview:
the slug-only path `https://preview.colorlib.com/theme/website-menu-10/` returns **HTTP
404** — the **live preview** is
`https://preview.colorlib.com/theme/bootstrap/website-menu-10/` (**HTTP 200**, 3,179 B,
`<title>Website Menu #10</title>`; its `css/style.css?v=79f60514` 15,292 B and
`js/snippet.js?v=89ce878c` 2,525 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-10.zip`, HTTP 200, 649,245 B
— the un-versioned source copy). Screenshot: `website-menu-10.jpg` (HTTP 200, AVIF,
1200×972, 116,662 B) — a browser-chrome mock of the live preview: a solid white bar
with `Home` green plus `Projects`/`Services` black at the left, a lowercase green
`brand` dead-centre, `About`/`Blog`/`Contact` black at the right, and the full-bleed
cinderblock-wall photo of three people immediately below it.

Spec: `openspec/specs/template-halyard/spec.md`. New name: **halyard** (the line a
crew hauls to hoist a pennant to the masthead — for an opaque yard carrying a centred
emblazoned wordmark with the two nav groups hanging off either side). Never reuse the
source slug `website-menu-10`, the name "Website Menu 10", the source's wordmark, the
**six source labels** (`Home`, `Projects`, `Services`, `About`, `Blog`, `Contact`), the
`cl-` utility namespace, the inline SVG paths, the `\e313`/`\f078` icon-font glyphs,
the self-hosted Quicksand woff2 files, or any copy verbatim. Design notes:
`docs/templates/halyard/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/halyard`
- [ ] Rename package to `@free-react-templates/halyard`; set
      `"homepage": "https://halyard.free.componentdock.com"`
- [ ] `public/CNAME` = `halyard.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/halyard`
      (`grep -c "free-react-templates/halyard" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing
      app — Tailwind v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap`
      (the source's self-hosted 400/700 subsets and its unused 408 B icon-font subset
      are never copied; the variable face covers the `500` the sheet asks for on `h3`).
      Icons: `lucide-react` (`Menu`, `X` only — this template has no dropdown and no
      CTA).
- [ ] `@theme` tokens in `src/index.css`: `--color-brand: #89ba16`,
      `--color-ink: #212529`, `--color-label: #000`,
      `--color-close-hover: #ced4da`, `--color-overlay: rgba(0,0,0,.5)`,
      `--shadow-drawer: -10px 0 20px -10px rgba(0,0,0,.1)`,
      `--font-sans: "Quicksand", …` (design-token notes only — no provenance
      comments; note the bar has **no** shadow and the template uses **no** radii)

## Opaque header shell + image band (TDD)

- [ ] Tests first: the header is **in normal flow** (`position:relative`,
      `w-full z-[1999] px-4 py-4`, an `#fff` surface) with **no** sticky/fixed variant
      and no transparency; the band renders below it (assert the band's `y` equals the
      header's height)
- [ ] `Header`: `cl-container` equivalent → `mx-auto w-full px-[15px]` with the
      Bootstrap tiers `sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px]
      xl:max-w-[1140px]`; row `flex flex-wrap -mx-[15px]`; **three** columns
      `relative w-full px-[15px] lg:flex-[0_0_33.33333%] lg:max-w-[33.33333%]`
- [ ] Tests: bar height **96 px** at ≥992 px (16 + **64 px** row + 16) and **72.8 px**
      below (16 + **40.8 px** wordmark + 16); no `position:absolute`, no `top` offset
- [ ] `Hero` band component: `100vh` full-bleed background image
      (`https://picsum.photos/seed/halyard-hero/1920/1080`), `cover` / `center center` /
      `no-repeat`, no scrim, no CTA, starting at the header's bottom edge
- [ ] Tests: nothing in the chrome is sticky — scrolling the window moves the header
      out of view (assert a negative `y` after scrolling past it)

## The split nav and the centred wordmark (TDD)

- [ ] One `navItems` data structure split into **two** groups (three labels each) —
      never two hand-maintained lists — rendered into col 1 (`text-right`) and col 3
      (`text-left`), each list `hidden lg:block`
- [ ] Left group: `Home` (current, `aria-current="page"`), `Projects`, `Services`;
      right group: `About`, `Blog`, `Contact` — the source's *kinds*, never its labels
      verbatim
- [ ] Rows: `inline-block`, `py-5 text-[16px] font-normal leading-6`, `mx-[15px]`,
      **`#000`**, measured **64 px**; the current row **`#89ba16`** + `aria-current`;
      **add** a real `hover`/`focus-visible` affordance for the other five (the
      source's `:hover{color:#89ba16}` is dead code — beaten by the base rule's
      `!important`)
- [ ] Left group's rows end flush with col 1's right padding edge (measured
      `162.28 → 427.49` at 1280 px); right group's rows start at col 3's left edge
      (measured `837.47 → 1072.22`) and never reach the container's right edge
- [ ] Wordmark: own brand text, `text-[1.7rem] lowercase text-brand font-normal
      leading-[1.5]` (**27.2 px / 40.8 px**), centred on the page (no hover colour
      change), `float-left` below 992 px, a link to the top of the page
- [ ] Hamburger: a real `button` with an accessible label +
      `aria-expanded`/`aria-controls`, `absolute right-0` in the row, **28 × 41.59 px**
      visual box with a **28 px** `lucide-react` `Menu`, a generous tap target, visible
      below 992 px and hidden at ≥992 px
- [ ] Tests: exactly **six** rows, three per group; the lists are `display:none` below
      992 px and `display:block` at ≥992 px while the hamburger is the exact opposite;
      the wordmark's centre equals the viewport centre within 1 px at 1280 px

## Off-canvas drawer (TDD)

- [ ] Tests first: activating the hamburger adds the open state, moves focus into the
      panel, and sets `aria-expanded="true"` on the toggle
- [ ] `Drawer`: `fixed right-0 top-0 w-[300px] h-screen pt-5 bg-white z-[2000]
      shadow-[-10px_0_20px_-10px_rgba(0,0,0,.1)]`,
      `translate-x-[110%]` closed → `translate-x-0` open over **`.3s ease-in-out`**
      (note: **not** the family's `-09` `.2s cubic-bezier`), over a **real overlay
      element** `bg-black/50 z-[1002]` fading `.3s` (the source's `body:before` veil is
      live code here); assert the header (`z-[1999]`) stays **above** the veil
- [ ] Strip: `px-5` with a **30 px `X`** (`lucide-react`) at `mt-2`, hover
      `text-[#ced4da]` — a real `button` that closes the drawer; body:
      `px-5 pb-[150px] h-[calc(100vh-52px)] overflow-y-scroll` (measured 748 px at an
      800 px viewport)
- [ ] Drawer list: **the same `navItems` data**, all six rows in document order (left
      group then right group — the split is invisible in the panel), **50 px** rows
      (`py-[10px] px-5 text-[20px] leading-[30px]`), resting `#212529`, current row
      **`#89ba16`**, hover `#89ba16`, no underline; **no disclosure arrows, no
      sub-lists, no third level** (the source's `has-children` CSS/JS never matches
      this markup — do not invent a dropdown)
- [ ] Dismissal paths: the `✕`, the hamburger, an **outside click**, **`Escape`**, a
      **resize above the mobile range** (the source's strict `innerWidth > 768` —
      normalise to a breakpoint and document it) and **choosing a destination**
      (delta); every path resets `aria-expanded` and returns focus to the opener
- [ ] Tests: each dismissal path, no stale transform/state after resize, no focus
      trap, and **no horizontal overflow at 320 px** (`scrollWidth === innerWidth`)

## Materialised sections (TDD)

- [ ] Tests first: each of the **six destinations** has a matching `id` or route
- [ ] Labelled sections of the same *kinds* with own copy — a home/landing intro, a
      projects grid, a services list, an about block, an article/blog list, a contact
      block — `scroll-margin-top` ≥ the header height (96 px) on every target
- [ ] Imagery from `https://picsum.photos/seed/halyard-<n>/<w>/<h>`; the page is longer
      than the viewport so it reads like the source's `body{height:200vh}` **with real
      content instead of blank filler**
- [ ] Tests: **zero** dead `href="#"` links remain anywhere in the app (the source's
      hamburger is the only `#` and it becomes a real button)

## Footer + attribution (TDD)

- [ ] Tests first: exactly one `https://www.componentdock.com/` link branded
      "Component Dock" (new tab, `rel="noreferrer"`) and a computed current year
- [ ] Minimal strip below the last section — a documented delta, since the source has
      no footer

## Quality gates

- [ ] Accessibility: real `button`s with `aria-expanded`/`aria-controls` for the
      hamburger and the drawer's `✕`; `aria-current="page"` on the current row (colour
      is never the only signal); the overlay `aria-hidden`; focus moved into and
      returned from the drawer; visible `focus-visible` rings everywhere (the source's
      labels have **no** hover or focus feedback at all — restoring it is a delta);
      `Escape` closes the drawer
- [ ] `prefers-reduced-motion: reduce` collapses the drawer `.3s`, the veil `.3s` and
      the link `.3s` transitions
- [ ] Shape language: **square everywhere** — `0` radius on the bar, the drawer, the
      rows; no pills, no `4px`, no `50%`
- [ ] Zero `colorlib` / "Website Menu 10" / `website-menu-10` strings in
      `apps/halyard` (comments included); none of the source's six labels or its
      wordmark reused
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `quicksand-*.woff2`, no
      `icomoon-subset.woff2`, no `hero_1.jpg`, no inline SVG paths from the preview,
      no `cl-` utility classes, no jQuery/Bootstrap
- [ ] Dead source code dropped: the `has-children` caret rule, the `cl-collapse` and
      `arrow-collapse` rules, the drawer sub-list / third-level rules, the
      arrow-injection JS, the `site-navbar-target` / `main-menu` classes, the inert
      `cl-ml-auto`/`cl-mr-auto` auto margins, the `Roboto` body stack, the two
      unreferenced `600`-weight Quicksand files and the 408 B `icomoon` subset
- [ ] Documented deltas recorded in the PR: new name + own wordmark and labels, a real
      hover/`focus-visible` affordance on the five inactive labels, a real `button`
      hamburger with `aria-expanded` (the source is an `href="#"` anchor), focus
      management on drawer open/close, the drawer closing on destination choice, the
      `innerWidth > 768` resize rule normalised, `body{height:200vh}` filler replaced
      with real content, reduced-motion handling, and the added footer
- [ ] `scripts/verify-app.sh halyard` green (typecheck + lint + knip + fallow +
      vitest 100 % + build); `npm run spec:validate` green
- [ ] `public/CNAME` + `homepage` set; `package-lock.json` registers the workspace;
      footer attribution present
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 10` item `[x]`
      with the live `https://halyard.free.componentdock.com` URL + homepage and run
      `npm run readme:status`
