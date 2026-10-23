# Template: Menuribbon (Website Menus)

## Purpose

Menuribbon is a **grey utility top bar + blue-wordmark navigation header over a
full-viewport hero band** page in the free-react-templates monorepo. It is an
original React recreation of the ColorLib free **"Website Menu 04"** snippet
(source slug `website-menu-04` — the Website Menus family's **sticky top-bar
menu**): a **`#eee` contact/social utility bar** (`.top-bar`, `padding:.5rem 0`)
carrying an **envelope icon + `info@yourdomain.com`** and a **phone icon +
`1+ (234) 5678 9101`** at the left and, floated right, **Twitter** and
**Facebook** links (`color:#666666`) whose text labels are hidden below 768 px
(`cl-d-none cl-d-md-inline-block`); below it a **white, full-width header**
(`.site-navbar`, `padding:1rem`, `z-index:1999`) whose **absolute-positioned,
uppercase, `2rem`/`font-weight:900` wordmark** ("Brand", `cl-text-primary` →
**`#007bff` blue**, `line-height:0`) sits at the far left and whose
**right-aligned single-row menu** (`nav.site-navigation.cl-text-right`, `7`
items: home · services · about us · why us · testimonials · blog · contact)
renders **`#000` label links** with `margin:0 15px` / `padding:20px 0` that turn
**`#007bff`** on hover, one `has-children` item ("About Us") carrying a
**down-chevron** (`:before`, `padding-right:20px`) and opening a **white
dropdown** (`top:100%`, `border-top:2px solid #007bff`,
`box-shadow:0 2px 10px -2px rgba(0,0,0,.1)`, `margin-top:20px → 0`, `.2s 0s`)
with **`min-width:200px` rows** (`padding:9px 20px`, `#000`, hover
`background:#f8f9fa` + `color:#ced4da`, active `#007bff` on `#f8f9fa`) and **one
nested flyout at `left:100%; top:0`** with a right chevron (`\e315`), where the
dropdown's `.arrow-top:before` pointer is **`display:none`** (no triangle in this
variant); the header is wrapped at runtime by `js/snippet.js` in a
**`.sticky-wrapper`** so scrolling past its offset flips it to
**`position:fixed`, `background:#fff`, `box-shadow:4px 0 20px -5px rgba(0,0,0,.2)`**
(`.is-sticky`) and the wordmark turns `#007bff`; a **hamburger that replaces the
entire row below 992 px** (`cl-d-lg-none` / `cl-d-lg-block`) slides a **300 px
white off-canvas panel** in from the right edge (`padding-top:20px`,
`height:100vh`, `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`,
`transform:translateX(110%) → 0`, `.3s all ease-in-out`) over a **`rgba(0,0,0,.5)`
page veil** on `body:before`, its body scrolling at `height:calc(100vh - 52px)`
with `padding:0 20px 20px` plus `padding-bottom:150px` and containing a **runtime
clone of the desktop nav** (`site-nav-wrap`) rendered at **20 px `#212529`**
(`padding:10px 20px`, hover `#007bff`) with indented sub-levels (**40 px / 60 px**
padding-left, 16 px), a **36 × 36 round `arrow-collapse`** per `has-children` row
(`hover:#f8f9fa`, chevron rotating between `-180deg` and `0`), a **30 px close
glyph** (`hover:#ced4da`), and **four close paths** (the glyph, a click outside,
`Escape`, a resize past 768 px); and **no content section whatsoever** — the page
is just the bar, the header and a **100 vh cover-cropped hero band**
(`div.hero`), the document forced to `height:200vh` purely so that the sticky
transition and scrolling are visible.

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches the source's section
structure, order and design tokens 1:1 but copies no asset (no images, no font
files, no CSS files, no icon-font glyphs, no text verbatim) and never reuses the
source name.

- **Source:** https://colorlib.com/wp/template/website-menu-04/ (listed in
  TEMPLATES.md `## Website Menus (20)` — the section header is at **line 3071**
  and this item is its **fourth** entry at **line 3076**; the slug
  `website-menu-04` appears **once** in TEMPLATES.md (line 3076, the row this
  prep owns — an earlier reading counted an extra row that the checklist no
  longer has) and in **no** spec or doc
  on main before this one — `grep -rl website-menu-04 openspec docs` returns
  nothing)
- **Preview:** `https://preview.colorlib.com/theme/website-menu-04/` returns
  **HTTP 404** (`Not Found`, 9 B) — as with the whole _Website Menus_ family, the
  slug-only theme path does **not** resolve. The working live preview is
  **`https://preview.colorlib.com/theme/bootstrap/website-menu-04/`**
  (**HTTP 200**, `text/html`, **8,436 B**, title `Website Menu #4`, verified
  2026-10-11), confirmed through the catalog index the preview host itself loads
  (`https://preview.colorlib.com/assets/js/catalog-products-20261009-trace-developer.js`,
  **633,990 B**, whose entry for this slug is
  `{"name":"Website Menu V04","tag":"Website Menu Templates",
"img":"https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-04-768x622.jpg",
"url":"https://preview.colorlib.com/theme/bootstrap/website-menu-04/",
"details":"https://colorlib.com/wp/template/website-menu-04/"}`). Its two
  assets — `css/style.css?v=a1db509a` (**19,345 B**, sha256
  `4d71179419d8846f68da7136adb271246f04f681b27058a4920759ab878c6a87`) and
  `js/snippet.js?v=0d158312` (**3,537 B**, sha256
  `957ef9cb7fad36f4709efbb8ea99c0b0415560161d79ba978cb906a2e3e56cff`) — are
  **byte-identical** to the same two files inside the snippet's own archive
  `https://preview.colorlib.com/downloads/free/website-menu-04.zip`
  (**HTTP 200**, `application/zip`, **710,718 B**, sha256
  `a8759335a2c8d48f0de128f3a41fd7f239ef5e6fcfe8b93e6f2feec6bfe0c815`). The
  archive's `index.html` (8,233 B) and the live page render the **same DOM** apart
  from the preview host's own head injections (a `cdnjs` `dns-prefetch`,
  `fetchpriority` on the stylesheet link, `?v=` cache-busters). **No
  screenshot-only fallback was needed.**
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/website-menu-04.jpg`
  (HTTP 200, **AVIF**, 57,007 B, decodes **1200 × 972**) — a browser-chrome mock:
  a **light-grey utility bar** with `info@yourdomain.com` and `1+ (234) 5678 9101`
  at the left and `Twitter` / `Facebook` at the right, a **white header** with a
  blue **`BRAND`** wordmark at the left and `Home · Services · About Us · Why Us ·
  Testimonials · Blog · Contact` in black at the right, over a frame-filling
  **desert** photograph (Monument Valley buttes, pale blue→sand sky).
- **Archive contents:** `index.html`, `css/style.css`, `js/snippet.js`,
  `README.md` (1,264 B), `images/hero_1.jpg` (**481,836 B**, **1900 × 1710**,
  sha256 `b6c49e856da5ff1422bc5ba461a632ab136181318c5b7ade8fd2b8d36bf7768d` — the
  **same bytes** the sibling `website-menu-03` snippet ships), and `fonts/` with
  six **Open Sans** woff2 subsets (300/400/700 × latin/latin-ext — the stylesheet
  itself only declares **400 and 700**) plus `icomoon-subset.woff2` (424 B, sha256
  `5dd63fd374884df19c9efc23f78cacdf2bc75ff36a7f8452db09ccbefa594e70`).

## Design tokens (measured from the live preview's `css/style.css`)

| Token                        | Value                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| Brand / accent               | `#007bff` (wordmark, link base, nav hover, dropdown top border, `.is-sticky` wordmark, mobile hover/active) |
| Accent shade (link hover)    | `#0056b3`                                                                                    |
| Ink (body / mobile rows)     | `#212529`                                                                                    |
| Nav label (desktop top row)  | `#000` (hover `#007bff`)                                                                     |
| Dropdown row text            | `#000` (hover `#ced4da`, active `#007bff`)                                                   |
| Dropdown / soft hover bg     | `#f8f9fa`                                                                                    |
| Muted (disabled / hover text)| `#6c757d` (disabled nav link) · `#ced4da` (dropdown hover text, close-glyph hover)          |
| Top-bar bg                   | `#eee`                                                                                       |
| Top-bar link                 | `#666666`                                                                                    |
| Surface                      | `#fff` (page, header, dropdown, panel)                                                       |
| Veil                         | `rgba(0,0,0,.5)` on `body:before`, `.3s all ease`, `z-index:1`                               |
| Panel shadow                 | `-10px 0 20px -10px rgba(0,0,0,.1)`                                                          |
| Dropdown shadow              | `0 2px 10px -2px rgba(0,0,0,.1)`                                                             |
| Sticky header shadow         | `4px 0 20px -5px rgba(0,0,0,.2)`                                                             |
| Font                         | `"Open Sans", -apple-system, …` (400 / 700), base `1rem / 1.5`, `#212529` on `#fff`          |
| Type scale                   | `h3` / `.cl-h3` `1.75rem`, `font-weight:500`, `line-height:1.2`                              |
| Wordmark                     | `2rem` (32 px), `text-transform:uppercase`, `font-weight:900`, `line-height:0`, `#007bff`    |
| Nav label                    | top row `#000`, `margin:0 15px`, `padding:20px 0`; `has-children > a` `padding-right:20px`   |
| Top bar                      | `padding:.5rem 0`, `bg:#eee`, links `#666666`; labels hidden below 768 px                    |
| Dropdown panel               | `position:absolute; top:100%`, `border-top:2px solid #007bff`, rows `min-width:200px`, `padding:9px 20px`; `.arrow-top:before` `display:none` |
| Header                       | `position:relative`, `width:100%`, `padding:1rem`, `z-index:1999`; `fixed` + white + shadow while `.is-sticky` |
| Container                    | `15px` gutters; max-width `540 / 720 / 960 / 1140` at `576 / 768 / 992 / 1200`               |
| Hero band                    | `height:100vh`, `width:100%`, `background-size:cover`, `center center`, `no-repeat`         |
| Page                         | `height:200vh` (so scroll + the sticky flip are visible)                                     |
| Off-canvas panel             | `300px` wide, `fixed right:0`, `z-index:2000`, `padding-top:20px`, `bg:#fff`, `height:100vh`, `translateX(110%)→0`, `.3s all ease-in-out` |
| Panel body                   | `height:calc(100vh - 52px)`, `padding:0 20px 20px`, `padding-bottom:150px`, scrollable       |
| Panel rows                   | level 1 `20px` / `padding-left:20px`; level 2 `16px` / `40px`; level 3 `16px` / `60px`; `color:#212529`, hover & active `#007bff` |
| `arrow-collapse`             | `36 × 36`, `border-radius:50%`, `right:0`, `top:10px`, chevron `12px` `rotate(-180deg)`→`0`  |
| Close glyph                  | `30px`, `padding-left:10px`, hover `#ced4da`                                                 |
| Media breakpoints            | desktop row visible **≥ 992 px** (`cl-d-lg-block`); hamburger **< 992 px**; top-bar labels **≥ 768 px**; resize close **> 768 px** |
| Radii / shape language       | **Circles only** (`50%` on the 36 × 36 expanders) — every other surface is square (no card radii, no pill buttons, no rounded inputs) |
| Motion                       | links `.3s all ease`; dropdown `.2s 0s`; panel/veil `.3s all ease` / `.3s all ease-in-out`; sticky header `.3s all ease` |

The source's `cl-` utility namespace, the `icomoon` glyph codepoints
(`\e313` chevron-down, `\e315` chevron-right, `\f078` collapse chevron), the
inline SVG icon paths (envelope/phone/twitter/facebook/hamburger/close), and the
self-hosted woff2 files must **not** be copied — use `lucide-react` icons and
Google Fonts instead. No `colorlib.com` string may appear in `apps/menuribbon/`.

## Requirements

### Requirement: Page shell and hero band

The page SHALL render its four top-level regions in a fixed document order — the
off-canvas panel, the utility top bar, the header, and the hero band — over a
document tall enough to scroll. The header SHALL float over / sit above a
frame-filling hero image band, and there SHALL be no content section beneath it.

#### Scenario: Renders the four top-level regions

- **Given** the page is loaded
- **Then** the off-canvas panel, the utility top bar, the header and the hero band
  render in that order
- **And** the hero band is at least as tall as the viewport (`100vh`) and shows a
  cover-cropped image

#### Scenario: There is no content section

- **Given** the page is loaded
- **Then** no section other than the top bar, header and hero band renders, and
  every anchor other than the wordmark points at an in-page target

### Requirement: Utility top bar

A full-width utility bar SHALL sit above the header with a light grey background,
contact links at the left and social links at the right, and the link labels SHALL
collapse to icons on narrow viewports.

#### Scenario: Contact links render at the left

- **Given** the page is loaded
- **Then** the top bar shows an envelope + email link and a phone + phone-number
  link at its left, each with an accessible name
- **And** both sit on a `#eee` background with `#666666` text and `.5rem` vertical
  padding

#### Scenario: Social links render at the right

- **Given** the page is loaded
- **Then** a Twitter and a Facebook link render right-aligned in the top bar, each
  with an accessible name

#### Scenario: Labels collapse below 768 px

- **Given** the viewport is narrower than 768 px
- **Then** the visible text of every top-bar link is hidden while the icons stay
  visible and every link keeps an accessible name
- **And** at 768 px and wider the text labels are shown

### Requirement: Wordmark

The header SHALL render a single blue, uppercase, 32 px wordmark at the far left,
and it SHALL be a link with an accessible name.

#### Scenario: Logo links home

- **Given** the header is rendered
- **Then** a `#007bff`, `2rem`, `font-weight:900`, `text-transform:uppercase`
  wordmark renders at the far left
- **And** it is a link with an accessible name

### Requirement: Desktop navigation row

At 992 px and wider the header SHALL render its seven items right-aligned in a
single row of bare black links, and hovering or focusing an item MUST turn it
`#007bff`.

#### Scenario: Seven items render right-aligned

- **Given** the viewport is at least 992 px wide
- **Then** seven labelled items render right-aligned in a single row
  (home · services · about us · why us · testimonials · blog · contact)
- **And** each label is `#000` text with `margin:0 15px` and `padding:20px 0`, no
  underline, no background and no border

#### Scenario: Hover and focus turn the label accent

- **When** the pointer hovers a non-current item, or the item receives keyboard
  focus
- **Then** its label turns `#007bff`
- **And** the transition takes `.3s` with an `ease` curve

#### Scenario: Keyboard traversal

- **Given** the viewport is at least 992 px wide
- **When** the user tabs through the header
- **Then** every nav item and the wordmark are reachable in document order with a
  visible focus indicator

### Requirement: Dropdown submenu

A nav item that has children SHALL open a white dropdown panel on hover or focus,
and that panel SHALL support one nested level opening to the right. The panel MUST
NOT render an upward pointer triangle in this variant.

#### Scenario: Opening and closing on hover and focus

- **Given** the "about us" item has children
- **When** the pointer hovers it, or it receives focus
- **Then** a white panel becomes visible and opaque below it, with a `2px
  #007bff` top border and a soft drop shadow
- **And** the panel is vertically flush with the item (`margin-top` animates
  `20px → 0`) and shows no triangle pointer

- **When** the pointer leaves and focus moves away
- **Then** the panel returns to hidden and transparent

#### Scenario: Rows are listed and highlight on hover

- **Given** the dropdown panel is open
- **Then** its rows each span at least 200 px and take `padding:9px 20px` with
  `#000` text on white
- **And** a hovered row renders `#ced4da` text on `#f8f9fa`
- **And** the row that is current renders `#007bff` on `#f8f9fa`

#### Scenario: Nested flyout opens to the right

- **Given** one dropdown row has its own children
- **When** that row is hovered or focused
- **Then** a second panel opens beside it (to the right, top-aligned) with a
  right chevron on the parent row and the same `#f8f9fa` hover treatment

#### Scenario: Trigger carries a down chevron

- **Given** a nav item with children renders in the row
- **Then** its label carries a chevron icon and `padding-right:20px`

### Requirement: Sticky header

The header SHALL become fixed and gain a white surface plus a shadow once the page
is scrolled past its original offset, and it MUST NOT be fixed before that.

#### Scenario: Header pins on scroll

- **Given** the page is at the top
- **Then** the header is laid out in normal flow with a transparent-to-white
  surface and no shadow
- **When** the page is scrolled past the header's offset
- **Then** the header becomes fixed to the top of the viewport with a white
  background, a `4px 0 20px -5px rgba(0,0,0,.2)` shadow, its original width
  preserved, and the wordmark renders `#007bff`
- **When** the page is scrolled back to the top
- **Then** the header returns to normal flow and the shadow is removed

### Requirement: Mobile toggle and off-canvas panel

Below 992 px the header SHALL replace the desktop row with an icon-only toggle,
and activating that toggle MUST slide a 300 px off-canvas panel in from the right
over a page veil.

#### Scenario: Hamburger replaces the row below 992 px

- **Given** the viewport is narrower than 992 px
- **Then** the entire desktop row is not rendered and an icon-only hamburger
  toggle with an accessible name is shown instead
- **And** the toggle is positioned at the right edge of the header
- **And** at 992 px and wider the hamburger is not rendered

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
  under `apps/menuribbon/`
- **And** the footer links `https://www.componentdock.com/`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/menuribbon/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/menuribbon/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `openspec/specs/template-menuribbon/spec.md` validated with `npm run spec:validate`
- [ ] `apps/menuribbon` scaffolded from the simplest existing app, package renamed
      to `@free-react-templates/menuribbon`, `homepage` +
      `public/CNAME` = `menuribbon.free.componentdock.com`
- [ ] `npm install` at the repo root; `grep -c "free-react-templates/menuribbon"
    package-lock.json` ≥ 1
- [ ] `vite.config.ts` keeps `injectUiSource()`
- [ ] `@theme` tokens carry the accent `#007bff`, shade `#0056b3`, ink `#212529`,
      top-bar `#eee`/`#666666`, dropdown `#f8f9fa`/`#ced4da`, veil
      `rgba(0,0,0,.5)` and the Open Sans stack (design-token comments only — no
      provenance)
- [ ] Section order matches the source exactly: off-canvas panel → top bar →
      header → hero
- [ ] Top bar is `#eee` with contact links at the left and social links at the
      right; labels hidden below 768 px, icons always visible
- [ ] Wordmark is blue (`#007bff`), uppercase, 32 px, `font-weight:900`, at the
      far left of the header, and is a link
- [ ] Seven-item row right-aligned at ≥992 px (`#000` labels, `margin:0 15px`,
      hover/focus `#007bff` over `.3s`); hamburger only below 992 px, at the
      right edge
- [ ] Dropdown opens on hover **and** focus, `2px #007bff` top border,
      `0 2px 10px -2px rgba(0,0,0,.1)` shadow, **no** triangle pointer, ≥200 px
      rows with `#f8f9fa` hover (`#ced4da` text), active `#007bff`, and a nested
      right-hand flyout with a right chevron
- [ ] Sticky: header pins to the top with white background + shadow after the
      scroll offset is passed, wordmark → `#007bff`, and returns to flow at the
      top; width preserved while fixed
- [ ] Off-canvas panel: 300 px, slides from the right over a 50 % veil, lists the
      same rows as the desktop nav with correct indentation, round 36 × 36
      expanders toggling `aria-expanded`
- [ ] All four close paths work (glyph, outside click, `Escape`, resize > 768 px)
- [ ] Hero band is `100vh`, cover-cropped, `center center`, no text
- [ ] 100 % coverage on `npm run verify:app menuribbon`; no `--no-verify` bypass
- [ ] No ColorLib reference in `apps/menuribbon/`; footer links Component Dock
- [ ] Shipped via PR on `feat/template-menuribbon`, squash-merged immediately
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
