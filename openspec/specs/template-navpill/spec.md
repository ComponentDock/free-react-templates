# Template: Navpill (Website Menus)

## Purpose

Navpill is a **transparent header + dropdown navigation over a full-viewport
hero band** page in the free-react-templates monorepo. It is an original React
recreation of the ColorLib "Website Menu 03" snippet (source slug
`website-menu-03` — the Website Menus family's **blue-pill dropdown menu**): an
**absolutely positioned, non-sticky, transparent header** (`top:2rem`,
`z-index:1999`) floating over a **frame-filling photographic hero** (`100vh`,
`background-size:cover`, `center center`), carrying a **24 px white wordmark**
("Brand") at the left and a right-aligned **six-item row**
(home · dropdown · listings · about · blog · contact) in **16 px `#fff`** whose
every label is an inline `span` at **`padding:5px 20px` with `border-radius:30px`**
that turns into a **solid `#007bff` pill with white text** on hover/focus and is
**permanently a `#007bff` pill on the current item** (`.cl-active > a span`); a
`has-children` item opens a **white dropdown panel** (`visibility:hidden`
`opacity:0` → visible, `border-top:2px solid #007bff`, `box-shadow:0 2px 10px -2px
rgba(0,0,0,.1)`, `margin-top:20px → 0`, `transition:.2s 0s`, a **white
`border-width:10px` triangle** at `left:20%` under `bottom:100%`) holding
**`min-width:200px` rows** (`padding:9px 20px`, `color:#343a40`, hover
`background:#fafafb`) and one **nested flyout at `left:100%; top:0`** with a
right chevron; a **hamburger that replaces the entire desktop row below 1200 px**
and slides a **300 px white off-canvas panel** in from the right edge
(`padding-top:20px`, `height:100vh`, `box-shadow:-10px 0 20px -10px
rgba(0,0,0,.1)`, `transform:translateX(110%) → 0`, `.3s all ease-in-out`) over a
**`rgba(0,0,0,.5)` page veil** on `body:before`, its body scrolling at
`height:calc(100vh - 52px)` with `padding:0 20px 20px` and `padding-bottom:150px`
and containing a **runtime clone of the desktop nav** (`site-nav-wrap`) rendered
at **20 px `#212529`** (`padding:10px 20px`, hover `#007bff`) with indented
sub-levels (**40 px / 60 px** padding-left, 16 px), a **36 × 36 round
`arrow-collapse`** per `has-children` row (`hover:#f8f9fa`, chevron rotating
between `-180deg` and `0`), a **30 px close glyph** (`hover:#f8f9fa`), and **four
close paths** (the glyph, a click outside, `Escape`, a resize past 768 px); and
**no sticky bar whatsoever** — the page is forced to `height:200vh` purely so that
scrolling is visible.

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's section
structure, order and design tokens 1:1 but copies no asset (no images, no font
files, no CSS files, no icon-font glyphs, no text verbatim) and never reuses the
source name.

- **Source:** https://colorlib.com/wp/template/website-menu-03/ (listed in
  TEMPLATES.md `## Website Menus (20)` — the section header is at **line 3071**
  and this item is its **third** entry at **line 3075**; the slug
  `website-menu-03` appears **exactly once** in TEMPLATES.md and in **no** spec or
  doc on main before this one — `git grep -il website-menu-03 origin/main` returns
  only `TEMPLATES.md`)
- **Preview:** `https://preview.colorlib.com/theme/website-menu-03/` returns
  **HTTP 404** (`Not Found`, 9 B) — as with the whole _Website Menus_ family, the
  slug-only theme path does **not** resolve. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-03/`**
  (**HTTP 200**, `text/html`, **3,539 B**, title `Website Menu #3`, verified
  2026-10-11), confirmed through the catalog index the preview host itself loads
  (`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
  **633,990 B**, whose entry for this slug is
  `{"name":"Website Menu V03","tag":"Website Menu Templates",
"url":"https://preview.colorlib.com/theme/bootstrap/website-menu-03/",
"details":"https://colorlib.com/wp/template/website-menu-03/"}`). Its two
  assets — `css/style.css?v=0e95d7fb` (**18,746 B**, sha256
  `7aaad0dc4ce3b8411236b053436519c1f48dd7d9316d82b76d29ddded3caa75c`) and
  `js/snippet.js?v=b390e403` (**2,525 B**, sha256
  `d4a75686662dae0521594784211cbc9cd0c1c75a43b6cc2c1b893810c9790217`) — are
  **byte-identical** to the same two files inside the snippet's own archive
  `https://preview.colorlib.com/downloads/free/website-menu-03.zip`
  (**HTTP 200**, `application/zip`, **708,400 B**). The archive's `index.html`
  (3,336 B) and the live page render the **same DOM** apart from the preview
  host's own head injections (two `robots` meta tags, a `cdnjs` `dns-prefetch`,
  `fetchpriority` on the stylesheet link, `?v=` cache-busters). **No
  screenshot-only fallback was needed.** — **re-probed 2026-10-23: the demo serves** (measured record below)
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-03.jpg`
  (HTTP 200, **AVIF**, 71,239 B, decodes **1200 × 972**) — a browser-chrome mock
  of a frame-filling **desert** photograph (Monument Valley buttes against a pale
  blue→sand gradient sky) with a transparent header strip: the white wordmark
  "Brand" at the left and, at the right, **Home as a filled blue pill**, then
  `Dropdown ⌄ · Listings · About · Blog · Contact` in plain white.
- **Archive contents:** `index.html`, `css/style.css`, `js/snippet.js`,
  `README.md` (1,264 B), `images/hero_1.jpg` (**481,836 B**, **1900 × 1710**,
  sha256 `b6c49e856da5ff1422bc5ba461a632ab136181318c5b7ade8fd2b8d36bf7768d`, the
  same bytes the live page serves at
  `.../website-menu-03/images/hero_1.jpg`), and `fonts/` with six **Open Sans**
  woff2 subsets (300/400/700 × latin/latin-ext — the stylesheet itself only
  declares **400 and 700**) plus `icomoon-subset.woff2` (424 B).

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://preview.colorlib.com/theme/bootstrap/website-menu-03/` — HTTP 200, 3,539 B, title `Website Menu #3`.
>
> Sheet: `https://preview.colorlib.com/theme/bootstrap/website-menu-03/css/style.css?v=0e95d7fb` (18,746 B).
> Faces it actually declares: `Open Sans`, `Roboto`, `Segoe UI`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->

## Design tokens (measured from the live preview's `css/style.css`)

| Token                     | Value                                                                                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Brand / accent            | `#007bff` (active + hover pill, dropdown `border-top`, mobile active row)                                                                 |
| Accent shade (link hover) | `#0056b3`                                                                                                                                 |
| Ink (body / mobile rows)  | `#212529`                                                                                                                                 |
| Dropdown row text         | `#343a40`                                                                                                                                 |
| Dropdown row hover bg     | `#fafafb`                                                                                                                                 |
| Close / arrow hover bg    | `#f8f9fa`                                                                                                                                 |
| Surface                   | `#fff` (page, panel, dropdown)                                                                                                            |
| Veil                      | `rgba(0,0,0,.5)` on `body:before`, `.3s all ease`, `z-index:1`                                                                            |
| Panel shadow              | `-10px 0 20px -10px rgba(0,0,0,.1)`                                                                                                       |
| Dropdown shadow           | `0 2px 10px -2px rgba(0,0,0,.1)`                                                                                                          |
| Font                      | `"Open Sans", -apple-system, …` (400 / 700), base `1rem / 1.5`, `#212529` on `#fff`                                                       |
| Type scale                | `h1` `2.5rem` · `.cl-h3` `1.75rem` · both `font-weight:500`, `line-height:1.2`                                                            |
| Wordmark                  | `font-size:24px`, white                                                                                                                   |
| Nav label                 | `16px`, `#fff`, `span` `padding:5px 20px`, `border-radius:30px`                                                                           |
| Dropdown panel            | `border-top:2px solid #007bff`; rows `min-width:200px`, `padding:9px 20px`; arrow `border-width:10px` white at `left:20%`                 |
| Container                 | `15px` gutters; max-width `540 / 720 / 960 / 1140` at `576 / 768 / 992 / 1200`                                                            |
| Header                    | `position:absolute`, `top:2rem` (32 px), `width:100%`, `z-index:1999`, transparent                                                        |
| Hero band                 | `height:100vh`, `width:100%`, `background-size:cover`, `center center`, `no-repeat`                                                       |
| Page                      | `height:200vh` (scroll is visible because the header scrolls away)                                                                        |
| Off-canvas panel          | `300px` wide, `fixed right:0`, `z-index:2000`, `padding-top:20px`, `bg:#fff`, `height:100vh`, `translateX(110%)→0`, `.3s all ease-in-out` |
| Panel body                | `height:calc(100vh - 52px)`, `padding:0 20px 20px`, `padding-bottom:150px`, scrollable                                                    |
| Panel rows                | level 1 `20px` / `padding-left:20px`; level 2 `16px` / `40px`; level 3 `16px` / `60px`; `color:#212529`, hover & active `#007bff`         |
| `arrow-collapse`          | `36 × 36`, `border-radius:50%`, `right:0`, `top:10px`, chevron `12px` `rotate(-180deg)`→`0`                                               |
| Close glyph               | `30px`, `padding-left:10px`, hover `#f8f9fa`                                                                                              |
| Media breakpoints         | desktop row visible **≥ 1200 px** (`cl-d-xl-block`); hamburger **< 1200 px**; resize close **> 768 px**                                   |
| Radii / shape language    | **Pills only** (`30px`) — every other surface is square (no card radii, no rounded buttons)                                               |
| Motion                    | links `.3s all ease`; dropdown `.2s 0s`; panel/veil `.3s all ease` / `.3s all ease-in-out`                                                |

The source's `cl-` utility namespace, the `icomoon` glyph codepoints
(`\e313` chevron-down, `\e315` chevron-right, `\f078` collapse chevron), the two
inline SVG paths (hamburger `M128 683 H896 …`, close cross `M810 665 …`) and the
self-hosted woff2 files must **not** be copied — use `lucide-react` icons and
Google Fonts instead. No `colorlib.com` string may appear in `apps/navpill/`.

## Requirements

### Requirement: Page shell and hero band

The page SHALL render its three top-level regions in a fixed document order —
off-canvas panel, header, hero band — over a document tall enough to scroll. The
header SHALL float over a frame-filling hero image band rather than occupy its own
row of flow.

#### Scenario: Renders the three top-level regions

- **Given** the page is loaded
- **Then** the off-canvas panel, the header and the hero band render in that order
- **And** the hero band is at least as tall as the viewport (`100vh`) and shows a
  cover-cropped image behind the header

#### Scenario: The header is transparent and not sticky

- **Given** the page has been scrolled
- **Then** the header has no background, no border and no shadow
- **And** the header is absolutely positioned near the top of the document and
  scrolls away with the hero (it never pins to the viewport edge, and there is no
  scroll listener)

### Requirement: Wordmark

The header SHALL render a single white 24 px wordmark at the far left of its
container, and it SHALL be a link with an accessible name.

#### Scenario: Logo links home

- **Given** the header is rendered
- **Then** a white 24 px wordmark renders at the far left of the container
- **And** it is a link with an accessible name

### Requirement: Desktop navigation row

At 1200 px and wider the header SHALL render its items right-aligned in a single
row of pill-shaped labels, and the item that is current MUST be a filled accent
pill.

#### Scenario: Six items render right-aligned

- **Given** the viewport is at least 1200 px wide
- **Then** six labelled items render right-aligned in a single row
  (home · dropdown · listings · about · blog · contact)
- **And** each label is a pill-shaped span with white text on the hero

#### Scenario: Current item is a filled pill

- **Given** the navigation is rendered
- **Then** the item marked current renders as a solid `#007bff` pill with white
  text and a `30px` radius

#### Scenario: Hover and focus turn any item into a pill

- **When** the pointer hovers a non-current item, or the item receives keyboard
  focus
- **Then** its label becomes a solid `#007bff` pill with white text
- **And** the transition takes `.3s` with an `ease` curve

#### Scenario: Keyboard traversal

- **Given** the viewport is at least 1200 px wide
- **When** the user tabs through the header
- **Then** every nav item and the wordmark are reachable in document order with a
  visible focus indicator

### Requirement: Dropdown submenu

A nav item that has children SHALL open a white dropdown panel on hover or focus,
and that panel SHALL support one nested level opening to the right.

#### Scenario: Opening and closing on hover and focus

- **Given** the "dropdown" item has children
- **When** the pointer hovers it, or it receives focus
- **Then** a white panel becomes visible and opaque below it, with a `2px
#007bff` top border, a soft drop shadow and a small white triangle pointing up
  at the bar
- **And** the panel is vertically flush with the item (`margin-top` animates
  `20px → 0`)
- **When** the pointer leaves and focus moves away
- **Then** the panel returns to hidden and transparent

#### Scenario: Rows are listed and highlight on hover

- **Given** the dropdown panel is open
- **Then** its rows each span at least 200 px, use `#343a40` text on white and
  take a light `#fafafb` background on hover
- **And** the row that is current renders in `#007bff`

#### Scenario: Nested flyout opens to the right

- **Given** one dropdown row has its own children
- **When** that row is hovered or focused
- **Then** a second panel opens beside it (to the right, top-aligned) with a
  right chevron on the parent row

### Requirement: Mobile toggle and off-canvas panel

Below 1200 px the header SHALL replace the desktop row with an icon-only toggle,
and activating that toggle MUST slide a 300 px off-canvas panel in from the right
over a page veil.

#### Scenario: Hamburger replaces the row below 1200 px

- **Given** the viewport is narrower than 1200 px
- **Then** the entire desktop row is not rendered and an icon-only hamburger
  toggle with an accessible name is shown instead
- **And** at 1200 px and wider the hamburger is not rendered

#### Scenario: Toggle slides the panel in

- **When** the toggle is activated
- **Then** a 300 px white panel slides in from the right edge (`translateX(110%)
→ 0`, `.3s ease-in-out`) over a `rgba(0,0,0,.5)` veil covering the page
- **And** the toggle reports itself expanded

#### Scenario: Panel mirrors the desktop navigation

- **Given** the panel is open
- **Then** it lists the same items as the desktop row, with the current row in
  `#007bff` and the rest `#212529`, rows `padding:10px 20px`, top level `20px`
- **And** nested levels are indented (40 px, then 60 px) at 16 px

#### Scenario: Sub-rows expand and collapse in the panel

- **Given** a panel row has children
- **Then** it carries a round 36 × 36 toggle button with an accessible name and
  an expanded state
- **When** the toggle is activated
- **Then** that row's children are shown (or hidden) and the chevron rotates
  between collapsed and expanded, toggling `aria-expanded`

#### Scenario: Four ways to close the panel

- **Given** the panel is open
- **When** the close glyph is clicked, or a click lands outside the panel and the
  toggle, or `Escape` is pressed, or the viewport is resized wider than 768 px
- **Then** the panel slides out and the veil fades, and the toggle reports
  itself collapsed

### Requirement: Fidelity and hygiene

The recreation SHALL match the source's section structure, order and design tokens
1:1 while copying no asset, and it MUST NOT reuse the source name or leak its
provenance into app code.

#### Scenario: No source assets or provenance leak

- **Given** the app is built
- **Then** no `img`/font/svg file is copied from the source, placeholder images
  come from `picsum.photos` with a per-template seed, icons come from
  `lucide-react` and the typeface from Google Fonts
- **And** no `colorlib.com` string and no source class namespace appears anywhere
  under `apps/navpill/`
- **And** the footer links `https://www.componentdock.com/`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/navpill/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/navpill/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `openspec/specs/template-navpill/spec.md` validated with `npm run spec:validate`
- [x] `apps/navpill` scaffolded from the simplest existing app, package renamed to
      `@free-react-templates/navpill`, `homepage` +
      `public/CNAME` = `navpill.free.componentdock.com`
- [ ] `npm install` at the repo root; `grep -c "free-react-templates/navpill"
  package-lock.json` ≥ 1
- [ ] `vite.config.ts` keeps `injectUiSource()`
- [ ] `@theme` tokens carry the accent `#007bff`, shade `#0056b3`, ink `#212529`,
      dropdown text `#fafafb`/`#343a40`, veil `rgba(0,0,0,.5)` and the Open Sans
      stack (design-token comments only — no provenance)
- [ ] Section order matches the source exactly: off-canvas panel → header → hero
- [ ] Header is transparent, absolutely positioned near the top, non-sticky, with
      no scroll listener
- [ ] Six-item row right-aligned at ≥1200 px; hamburger only below 1200 px
- [ ] Current item is a filled `#007bff` pill (radius 30 px); hover/focus turns
      any label into the same pill over `.3s`
- [ ] Dropdown opens on hover **and** focus, with the white triangle, `2px
  #007bff` top border, ≥200 px rows, `#fafafb` hover and a nested right-hand
      flyout
- [ ] Off-canvas panel: 300 px, slides from the right over a 50 % veil, lists the
      same rows as the desktop nav with correct indentation, round 36 × 36
      expanders toggling `aria-expanded`
- [ ] All four close paths work (glyph, outside click, `Escape`, resize > 768 px)
- [ ] 100 % coverage on `npm run verify:app navpill`; no `--no-verify` bypass
- [x] No ColorLib reference in `apps/navpill/`; footer links Component Dock
- [ ] Shipped via PR on `feat/template-navpill`, squash-merged immediately
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Implementation notes (measured against the live preview)

The live preview (`theme/bootstrap/website-menu-03/`, 3,539 B) and my build were
both driven in a real browser and the same probes run at 375 / 576 / 992 / 1200 /
1210 / 1440 px. Where the notes below say "measured", the number came from that
comparison, not from the stylesheet alone.

| Probe                                         | Reference                                                           | Navpill                              |
| --------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------ |
| Header box at 1440                            | `0,32,1425×54`, absolute, z 1999                                    | identical                            |
| Header background / shadow / border           | transparent, `none`, `0px`                                          | identical                            |
| Wordmark                                      | 24 px `#fff`, weight 500, x 158                                     | identical                            |
| Container                                     | 1140 px, 15 px gutters, x 143                                       | identical                            |
| Row                                           | `348,32,920×54`, right-aligned, 6 rows                              | identical                            |
| Current label pill                            | `5px 20px`, radius 30, `#007bff`, 16px                              | identical                            |
| Chevron label                                 | `padding-right:30px`                                                | identical                            |
| Hero band                                     | `0,0,1425×900`, cover, `50% 50%`                                    | identical (`100vh`)                  |
| Page height                                   | 1800 px (`200vh`)                                                   | 1800 px (`min-h-[200vh]`)            |
| Off-canvas panel                              | 300 px, `100vh`, pt 20, z 2000, `-10px 0 20px -10px rgba(0,0,0,.1)` | identical                            |
| Panel body                                    | `calc(100vh - 52px)`, `0 20px 150px`                                | identical                            |
| Panel row scale                               | 20 / 40 / 60 px indent at 20 / 16 / 16 px                           | identical                            |
| Panel expander                                | 36 × 36, radius 50 %, top 10, right 0                               | identical                            |
| Close glyph                                   | 30 px, `#212529`, hover `#f8f9fa`                                   | identical                            |
| Veil while open                               | `rgba(0,0,0,.5)`, full page                                         | identical (`opacity: 1`, 1440 × 900) |
| Dropdown open                                 | `margin-top: 0`, `opacity: 1`, 2px `#007bff` top border             | identical                            |
| Dropdown shadow                               | `0 2px 10px -2px rgba(0,0,0,.1)`                                    | identical                            |
| Dropdown geometry                             | flush at `y = 86` (32 + 54), rows ≥ 200 px                          | identical                            |
| Dropdown triangle                             | white, `border-width: 10px`, `left: 20%`, `margin-left: -10px`      | identical                            |
| Dropdown rows                                 | `9px 20px`, `#343a40`, hover `#fafafb`, current `#007bff`           | identical                            |
| Toggle at 375                                 | `display:block` at `x=330`, 28 px, `top:3px`, `py:1rem`, `mr:2px`   | identical                            |
| Row column at 375 / 1200                      | `none` / `block` (1200 inclusive)                                   | identical                            |
| Container max-width at 375 / 576 / 992 / 1200 | `none` / 540 / 960 / 1140                                           | identical                            |

### Refinements and deliberate deviations

1. **Breakpoints are re-pointed in `@theme`** (`sm/md/lg/xl` → 576/768/992/1200)
   so the container steps and the 1200 px hand-over are inclusive exactly like the
   reference's grid; with Tailwind's defaults the row would appear 80 px too late.
2. **The toggle column carries no 15 px gutter.** The reference's toggle wrapper
   (`cl-d-inline-block cl-d-xl-none cl-py-3`, no column class) measures 28 px wide
   at `x=330` on the logo's line at 375 px; adding a column gutter wraps the
   hamburger onto a second line.
3. **The panel and the veil stay mounted and are `aria-hidden="true"` + `invisible`
   while shut** (the reference keeps the panel reachable and only translates it
   `110%`), so nothing off-canvas is tabbable. The veil is a real element rather
   than `body:before`, so it can carry `aria-hidden` itself.
4. **The document is scroll-locked while the panel is open** — the reference lets
   the page scroll behind the drawer (measured `body` overflow `visible`).
5. **The panel's current row tone is chosen, not appended.** With `text-ink` and
   `text-accent` both present the stylesheet order decides and the row renders ink
   (caught in the browser pass) — `panelRowClass` emits exactly one of them.
6. **The dropdown's trigger opens on hover, on focus and on click** (the click is
   idempotent so hovering first cannot cancel it) and `Escape` closes it and
   returns focus to the trigger; a one-shot guard keeps that hand-back focus from
   reopening the panel immediately.
7. **One dropdown row (`Overview`) is current**, which is what exercises the
   reference's own `.cl-active > a { color: #007bff }` panel rule.
8. The hero band is empty and `aria-hidden`-free (it carries an `aria-label`), the
   footer strip is the documented Component Dock improvement, and the placeholder
   seed `navpill-hero` (a landscape vista at dusk) was checked visually so the top
   third stays legible for white labels.
9. The mobile visual pass is reported as measured DOM/computed-style evidence: the
   headless harness's screenshot channel wedges on the photo-heavy 375 px view.
