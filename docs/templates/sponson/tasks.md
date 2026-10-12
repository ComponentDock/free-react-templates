# Sponson — implementation tasks

Recreation of ColorLib **"Website Menu V19"** (source slug `website-menu-19` — the Website Menus
family's **fixed left side rail + floated 80 % content column + push-style off-canvas drawer**: a
**`20 %`-wide white rail** pinned to the left edge at **`100vh`/`100dvh`**
(`padding:48px 48px 40px`, `z-index:1001`, `transition:0.5s`, **no radius, no shadow**) carrying a
six-row vertical menu of **`22 px`/`500` `black`** labels (`line-height:1.5` → **`33 px`** rows on a
**`43 px`** pitch, `padding:10px 0`, `position:relative`) whose current row is painted **`#ff6768`**
and wears a **`2 px` `#ff6768` underline** (`bottom:7px`, `left:0; right:0`) that wipes in from
`scaleX(0)` over **`0.3s cubic-bezier(0.175,0.885,0.32,1.275)`** on hover/current; then
**`div#colorlib-main`** (`float:right`, **`80 %`**, `padding:40px`) holding a
`section.ftco-section.cl-pt-4.cl-mb-5` (**`padding:24px 0 112px`**, `margin-bottom:48px`) inside a
**fluid** container that is **edge-to-edge from 768 px up** (`cl-px-md-0`) and `16 px`-padded below,
with a **`32 px`/`400`/`#000`** heading over a grey lead `p`, then a **two-column row** of
**`24 px`/`400`/`#000`** sub-headings over grey paragraphs (**stacking to 100 % below 768 px**).
Below **`991.98 px`** the rail leaves its `20 %` slot for a **`270 px`** drawer translated
**`-270 px`** (`background:rgba(0,0,0,0.04)`, `padding-top:2em`) and the sheet's
**`a.colorlib-nav-toggle`** appears — **fixed at `left:-12px; top:0`, `z-index:9999`,
`padding:20px`**, drawn as three **`30 × 2` `#000`** bars (7 px apart, 10 px on hover → an **X** under
`cl-active`) — and opening it adds **`body.offcanvas`**, which slides the rail to
`translateX(0)` (**`#fff`**, `z-index:999`) and **pushes `#colorlib-main` and the toggle by
`270 px`** over **`0.5s`**. The source has **no images, no cards, no buttons, no footer, no second
page, no sticky chrome**; it is shorter than the viewport at desktop widths and **all 7** of its
anchors are `href="#"`.

The sheet is **13,527 B** (111 `{` blocks, 13 `@media` blocks, **4** `@font-face`, **three** `fixed`
and **zero** `sticky` declarations) — 3,981 B smaller than the `-18` sibling's because the whole
mega-menu/`navbar` block is gone — and **no webfont is loaded at all**, so `"Poppins", Arial,
sans-serif` renders in **Arial**; the archive's **eight** Roboto woff2 files (247,856 B = **93.0 %**
of the 266,468 B uncompressed download; 100/300 are not even declared) never render. Preview: the
slug-only path `https://preview.colorlib.com/theme/website-menu-19/` returns **HTTP 404** — the
**live preview** is `https://preview.colorlib.com/theme/bootstrap/website-menu-19/` (**HTTP 200**,
2,355 B, `<title>Website menu 09</title>`; its `css/style.css?v=f7ba3f1d` 13,527 B and
`js/snippet.js?v=a424998b` 1,669 B are **sha256-identical** to the snippet archive
`https://preview.colorlib.com/downloads/free/website-menu-19.zip`, HTTP 200, 256,269 B — the
un-versioned source copy). Screenshot: `website-menu-19.jpg` (HTTP 200, AVIF, 26,121 B, 1200 × 972) —
a browser-chrome mock: the white left rail with `Home` (**coral, underlined**) · `Project` · `About` ·
`Services` · `Blog` · `Contact`, then the heading `Website menu #09` over a lead paragraph and two
side-by-side `Heading Two` blocks on an empty `#fafafa` page (no burger — it is hidden above
`991.98 px`).

Spec: `openspec/specs/template-sponson/spec.md`. New name: **sponson** (a projection built out from
the side of a hull — a side platform or wing — which suits this variant's side rail that slides out
over the flank on narrow screens; it keeps the family's nautical run: menutree · slidenav · navpill ·
menuribbon · starboard · larboard · topdeck · bowsprit · gangway · halyard · ensign · gunwale ·
capstan · windlass · davit · binnacle · mizzen · spinnaker · **sponson**). Never reuse the source
slug, the name "Website Menu V19", the **six source row labels** (`Home`, `Project`, `About`,
`Services`, `Blog`, `Contact`), the heading string `Website menu #09`, the `Heading Two`
sub-headings, the `colorlib-`/`ftco-`/`cl-` namespace, the CSS-drawn burger, the Roboto woff2 files,
or any copy verbatim.
Design notes: `docs/templates/sponson/design-notes.md`.

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/sponson`
- [ ] Rename package to `@free-react-templates/sponson`; set
      `"homepage": "https://sponson.free.componentdock.com"`
- [ ] `public/CNAME` = `sponson.free.componentdock.com`
- [ ] `npm install` at repo root; verify the lockfile registers
      `@free-react-templates/sponson` (`grep -c "free-react-templates/sponson" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy the pattern from an existing app — Tailwind
      v4.3 drops relative `@source` paths)
- [ ] Google Fonts `<link>` in `index.html`:
      `https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap`
      (a **delta**: the source loads **no** webfont and renders Arial; its eight self-hosted Roboto
      files are dead weight and are never copied). Icons: `lucide-react` (`Menu`/`X` for the toggle,
      plus generic glyphs for any added section)
- [ ] `@theme` tokens in `src/index.css`: `--color-accent: #ff6768`, `--color-page: #fafafa`,
      `--color-rail: #ffffff`, `--color-rail-drawer: rgba(0,0,0,0.04)`, `--color-ink: #808080`,
      `--color-heading: #000000`, `--color-label: #000000`, `--color-toggle: #000000`
      (**no** radius, **no** shadow tokens — the sheet declares none)
- [ ] `src/components/` split: `SideRail.tsx` (fixed rail shell + brand/header), `MenuList.tsx`,
      `MenuRow.tsx` (label + coral underline + current state), `NavToggle.tsx` (three-bar burger /
      X), `ContentBand.tsx`, `LeadBlock.tsx`, `TwoColumn.tsx`, `ColBlock.tsx`, plus the added content
      sections and `Footer.tsx`

## Page frame + fixed side rail (`SideRail`) (TDD)

- [ ] Red: rail asserts **`position:fixed`**, `top/bottom/left:0`, **`width:20%`**,
      `height:100vh`/`100dvh`, `overflow-y:hidden`, `z-index:1001`, `background:#fff`,
      `padding:48px 48px 40px`, `transition:.5s`; page asserts `#fafafa`, body `16px`/`1.8`/`gray`
      (**`#808080`**); assert **no** `border-radius` and **no** `box-shadow` in the app
- [ ] Green: `aside` + rail wrapper (`fixed inset-y-0 left-0 w-[20%]`) with `h-screen`/`h-dvh`,
      transaction-guarded for reduced motion
- [ ] Verify the rail measures **`288 × 900 @ x = 0`** at 1440 px and the toggle is
      `visibility:hidden` there

## Vertical menu + coral underline (`MenuList`, `MenuRow`) (TDD)

- [ ] Red: list asserts `margin:0; padding:0`; six rows assert **`22 px`/`500`/`line-height:1.5` →
      `33 px`**, `margin:0 0 10px 0` (**43 px** pitch, tops at **48 / 91 / 134 / 177 / 220 / 263**),
      labels `padding:10px 0`, rest ink **`black`**; the current row asserts
      `aria-current="page"` + **`#ff6768`**
- [ ] Green: `<MenuList>` / `<MenuRow>` — each label a real link with an `::after` bar
      (`after:absolute after:inset-x-0 after:bottom-[7px] after:h-[2px] after:bg-accent
      after:origin-left after:scale-x-0 after:transition-transform
      after:duration-300 after:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]`), revealed on hover and
      persistent for the current row
- [ ] Guard: every label is a real destination (never `href="#"`) and carries a visible
      `focus-visible` ring (the source strips outlines — a delta); assert the springy transform is a
      `scaleX` wipe, **not** a colour fade

## Content band (`ContentBand`, `TwoColumn`) (TDD)

- [ ] Red: main column asserts **`float:right`**, **`width:80%`**, `padding:40px`; the section
      asserts `padding:24px 0 112px` (**top `24 px` = `cl-pt-4` beating `7em`**) + `margin-bottom:48px`;
      the container asserts `width:100%` with gutters **0** at ≥768 px and **`16 px`** below; the
      heading asserts **`32 px`/`400`/`line-height:1.5`/`#000`** (`margin-bottom:8px`); the two
      sub-blocks assert **`50 %`** (`padding:0 15px`, **`100 %` below 768 px**) with **`24 px`/`400`/
      `#000`** sub-headings
- [ ] Green: `<ContentBand>` (a flex/float layout at `80 %`) + `<LeadBlock>` + `<TwoColumn>` /
      `<ColBlock>`; own copy for heading, lead paragraph and both sub-blocks
- [ ] Guard: assert the measured geometry — heading `1072 × 48 @ x = 328, y = 64`, lead `p`
      `y = 120`, the two columns `551 × 175.2` at `y = 217.6` (1440 px), `685` stacked at 767 px,
      `278` at 375 px; assert the band is **edge-to-edge** at ≥768 px (no `max-width` tier)

## Mobile chrome + off-canvas drawer (`NavToggle`) (TDD)

- [ ] Red: toggle asserts `position:fixed`, `left:-12px; top:0`, `z-index:9999`, `padding:20px`,
      ≈ **`70 × 68.8`**, **`visibility:hidden` at ≥992 px**, three **`30 × 2` `#000`** bars 7 px/10 px
      apart, `0.2s` transitions, and an **X** state (`rotateZ(±45deg)` + transparent middle bar);
      drawer asserts **`270 px`** wide, `translateX(-270px)`, **`rgba(0,0,0,0.04)`** closed, and
      **`#fff` + `z-index:999` + `translateX(0)`** open with the main column and toggle pushed
      **`translateX(270px)`** over **`0.5s`**
- [ ] Green: `<NavToggle>` (`aria-expanded`, `aria-controls`, accessible name) toggling a
      `body`-level `offcanvas` state via a small controller (or context); drawer + push transforms on
      the rail, main column and toggle; `prefers-reduced-motion` disables the transitions
- [ ] Guard: **push, not overlay** — assert there is **no** backdrop element and that
      `#colorlib-main`'s computed `transform` is `translateX(270px)` (not a fixed overlay); assert
      close on outside click, `scroll`, `Escape` and a second press; assert the document height is
      **900 px** at 1440/991/767 and **1190 px** at 375 px

## Materialised sections (TDD)

- [ ] Red: assert **zero** `href="#"` in the app; assert each target id exists and carries
      `scroll-margin-top` ≥ the toggle height; assert the app renders **no** `colorlib` /
      `website-menu-19` / "Website Menu V19" string anywhere (comments included)
- [ ] Green: an intro/home block for the rail header, one block per plain row, a contact block, plus
      the recreation's own sections — all own copy, imagery from
      `https://picsum.photos/seed/sponson-<n>/<w>/<h>` (**the source ships no images at all**)
- [ ] Guard: the desktop page is **shorter than the viewport** (900 = 900 at 1440 px) while the
      narrow layout scrolls to **1190 px**; assert `scrollWidth === innerWidth` at 375/767/991/1440 px

## Footer + attribution (TDD)

- [ ] Red: footer asserts exactly one `https://www.componentdock.com/` link branded "Component
      Dock" (new tab, `rel="noreferrer"`) + a computed current year
- [ ] Green: `<Footer />` (a delta — the source has no footer)

## Quality gates

- [ ] `scripts/verify-app.sh sponson` green (typecheck + lint + knip + fallow + vitest **100 %**
      lines/functions/branches/statements + build)
- [ ] `npm run spec:validate` green
- [ ] Grep the app for `colorlib`, `website-menu-19`, "Website Menu 19", the source's six row labels,
      its `Website menu #09` heading and its `Heading Two` sub-headings → **zero** hits (comments
      included)
- [ ] No copied assets: no `style.css`, no `snippet.js`, no `roboto-*.woff2`, no CSS-drawn burger
      markup copied verbatim, no `cl-`/`ftco-`/`colorlib-` class names, no jQuery/Bootstrap
- [ ] PR description lists: source template + slug, preview URL, design tokens used (coral `#ff6768`,
      `#fafafa` page, `#fff` rail, `rgba(0,0,0,0.04)` drawer, `gray` ink, no radius, no shadow), the
      breakpoint table, and every delta (own name/copy/labels/icons/font, materialised links, focus
      rings, accessible toggle, push-drawer accessibility, footer)
- [ ] Squash-merge the PR, then mark the TEMPLATES.md `Website Menu 19` item `[x]` with the live
      `https://sponson.free.componentdock.com` URL + homepage and run `npm run readme:status`
