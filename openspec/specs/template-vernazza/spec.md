# Template: Vernazza (Full-Width Hero Image Carousel — Bootstrap Carousels #17)

## Purpose

Vernazza is a single-section full-width hero image carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 17" website template design
(source: https://colorlib.com/wp/template/carousel-17/), built under a
DIFFERENT name (Vernazza — a cliffside fishing village on the Italian
Riviera, one of the five villages of the Cinque Terre, continuing the
travel/destinations naming theme of the "Bootstrap Carousels (20)" series
renames) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **vernazza** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-17`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main; zero hits, including git history). It is the SEVENTEENTH of the
"Bootstrap Carousels (20)" series renames (lineage: carousel-01 → wanderlust,
carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido,
carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
carousel-14 → taormina, carousel-15 → tropea, carousel-16 → procida,
carousel-17 → vernazza — theme: travel / destinations; the name is thematic,
the content is a hero image carousel).

Vernazza lives in `apps/vernazza` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 17" — the SEVENTEENTH of the 20 "Bootstrap
  Carousels" demos. A **FULL-WIDTH HERO IMAGE CAROUSEL**: ONE `.content`
  wrapper (`padding: 7rem 0`) on a WHITE page with a centered near-black 20px
  heading (the demo text is a copy-paste artifact — see note below) above a
  `.container` → `.owl-carousel.owl-1` holding **THREE** full-width image
  slides (`hero_1.jpg`, `hero_2.jpg`, `hero_3.jpg`, each 1900×1150,
  `class="img-fluid"`), with WHITE chevron ARROWS overlaid on the left/right
  edges and round white DOT indicators overlaid bottom-center ON the image.
  **Differs from Carousel 16 (Procida — a team/quote avatar-card carousel
  with autoplay and hidden arrows): this demo is a pure image carousel — 1
  slide per view at all breakpoints, LOOP on, AUTOPLAY OFF, arrows VISIBLE,
  ~450ms VERTICAL slide animation (`slideOutDown`/`slideInUp`), dots overlaid
  on the image.** No navbar, no hero band, no footer — the section is the
  whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-17/`
  (HTTP 200, 16,390 bytes DOM; fetched + rendered 2026-08-15). NOTE: the
  standard preview path `https://preview.colorlib.com/theme/carousel-17/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix (same finding as the Bootstrap Calendars and
  Carousel 01–16 preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-17/css/`. Stylesheets: `css/owl.carousel.min.css`
  (Owl Carousel 2.3.4 base), `css/bootstrap.min.css` (Bootstrap 4.3.1,
  separate file), `css/style.css` (2,099 bytes — the template's custom rules,
  see tokens below), `fonts/icomoon/style.css` (icon font used ONLY for the
  two arrow glyphs `icon-keyboard_arrow_left`/`_right`), `css/animate.css`
  (Animate.css — used by the slide in/out animations). Roboto is the declared
  font stack (no Google Fonts `<link>` in the demo head — ColorLib's demo
  shell injects it; the recreation loads Roboto via Google Fonts in
  `index.html` per monorepo convention).
- **Carousel driven by `js/main.js` (fetched live via the page, 141 bytes):**
  `$('.owl-1').owlCarousel({ animateOut: 'slideOutDown', animateIn:
'slideInUp', items: 1, loop: true, nav: true, margin: 0, stagePadding: 0,
smartSpeed: 450, navText: ['<span class="icon-keyboard_arrow_left">',
'<span class="icon-keyboard_arrow_right">'] })` — **1 slide per view at ALL
  breakpoints** (no `responsive` block), **LOOP ON**, **AUTOPLAY OFF** (no
  `autoplay` option — the OPPOSITE of Procida, which autoplays), **NAV ON with
  VISIBLE arrows** (white icon-font chevrons — the OPPOSITE of Procida, whose
  `.owl-nav` is display:none), **DOTS ON** (Owl default), **~450ms VERTICAL
  slide animation** (`slideOutDown` for the outgoing slide, `slideInUp` for the
  incoming — the OPPOSITE of Procida's ~1s horizontal slide). Recreate:
  1-per-view carousel, loop, ~450ms vertical slide (out-down / in-up), NO
  autoplay, white chevron arrows left/right, round white dots overlaid
  bottom-center on the slide.
- **Verified live in the browser (2026-08-15):** heading "Carousel #7"
  rendered (20px, near-black, centered, margin 48px 0 = `.my-5`); the
  carousel showed the FIRST slide (a hand holding a "GENESIS" paperback book
  against a soft beige wall — warm, editorial, bookshop aesthetic) at
  full container width; white chevron arrows overlaid on the left and right
  edges; white pagination dots bottom-center (the first dot filled = active,
  the rest translucent). The screenshot (`carousel-17.jpg`, 1200×972) shows
  the same: browser chrome, white page, centered small dark sans heading
  "Carousel #7", a large rectangular slider, subtle white chevrons, white
  dots bottom-center.
- **Slide images (from the preview, NOT copied — picsum placeholders only):**
  `images/hero_1.jpg` (hand holding a "GENESIS" paperback — beige wall
  background, warm earthy tones, pastel gradient cover), `hero_2.jpg`
  (hand in a white knit sleeve holding a magazine/book, eucalyptus sprig,
  matte teal + dusty-blue boxes — beige background), `hero_3.jpg` (a
  "BOOK OF PROVERBS" hardcover standing against deep crimson/red fabric).
  All three are 1900×1150 editorial lifestyle/product photos with a warm,
  muted, sophisticated palette (cream/beige, muted teal, dusty blue, deep
  crimson) and a bookshop/lifestyle-subscription theme. The recreation
  SHOULD use three wide picsum placeholders (screen seeds per the
  colorlib-template-replication skill's seed-screening method) with the same
  kind of editorial/warm-tone subject.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (`css/bootstrap.min.css`) + Owl Carousel 2.3.4 + Animate.css + icomoon icon
  font + Roboto. The recreation must NOT copy any of this — build a pure-React
  carousel (arrow buttons + dot buttons, ~450ms vertical slide animation via
  CSS transforms/transitions), placeholder picsum photos.
- **Fidelity note (heading copy-paste artifact):** the demo `<title>` and the
  visible `h2` literally read "Carousel #7" — a copy-paste artifact (this is
  demo #17 of the series; the heading was not updated from demo #7 — the same
  artifact pattern as Carousel 16's "Carousel #6"). The recreation SHALL NOT
  reproduce the wrong number: use "Carousel #17" (corrected) or an equivalent
  same-kind paraphrase (e.g. "Featured", "Our Work", "Gallery").
- **Fidelity note (arrow border scaffolding):** `css/style.css` styles the
  nav buttons with leftover demo scaffolding — `.owl-1 .owl-nav .owl-next,
.owl-prev { border: 1px solid red }` and `.owl-next { border: 4px solid
blue }`. These red/blue borders are DEBUG ARTIFACTS and NEVER render as red/
  blue boxes in the live page (the `border` is overridden by the Owl-generated
  button's default styles and the spans are white `#fff`); the screenshot shows
  plain white chevrons. The recreation SHALL render plain white chevron arrows
  and MUST NOT reproduce red/blue borders.
- **Fidelity note (arrows visible, dots overlaid):** unlike Procida (arrows
  hidden by CSS), this demo's arrows ARE visible: white 40px chevron glyphs
  (`font-size: 40px` on the `span:before`), absolutely positioned at `left:
20px` / `right: 20px`, vertically centered (`top: 50%`), overlaid ON the
  image, `z-index: 92`. Dots: 7px round, `rgba(255,255,255,0.5)` inactive →
  solid white active, `margin: 4px`, positioned `bottom: 40px` + centered via
  `left: 50%; transform: translateX(-50%)` — OVERLAID on the image, NOT below
  it.
- **Fidelity note (no autoplay, vertical slide):** no `autoplay` in the Owl
  config → the carousel does NOT advance on its own (deliberately the OPPOSITE
  of Procida's `autoplay: true`). The transition is a ~450ms VERTICAL slide:
  outgoing slide exits down (`slideOutDown`), incoming slide enters up
  (`slideInUp`).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.content` — the page wrapper, `padding: 7rem 0` (Tailwind `py-[7em]`),
   on the WHITE page background.
   - `.container` — Bootstrap centered container (max-width 1140px ≥1200px;
     the carousel is NOT full-bleed — it is constrained to the container).
     - `h2.my-5.text-center` — the heading: "Carousel #7" in the demo
       (copy-paste artifact — see note; use "Carousel #17" or paraphrase),
       20px, Roboto, near-black `#212529`, centered, `margin: 3rem 0`
       (`.my-5` = 48px computed).
     - `.owl-carousel.owl-1` — the carousel: THREE slide DIVs, each
       containing a single `img.img-fluid` (full-width responsive image,
       1900×1150):
       - Slide 1 → `hero_1.jpg` (hand holding "GENESIS" paperback, beige
         wall).
       - Slide 2 → `hero_2.jpg` (magazine/book + eucalyptus + teal boxes,
         beige wall).
       - Slide 3 → `hero_3.jpg` ("BOOK OF PROVERBS" hardcover vs deep
         crimson fabric).
   - Carousel furniture: `.owl-nav` — absolute, `width: 100%`, `top: 50%`,
     with `.owl-prev` (white chevron, `left: 20px`) and `.owl-next` (white
     chevron, `right: 20px`) overlaid on the image; `.owl-dots` — absolute,
     `bottom: 40px`, `left: 50%`, `translateX(-50%)`, round 7px dots.

## Design tokens (from preview stylesheet `css/style.css` + Bootstrap base)

- **Page background:** WHITE (`#fff` — Bootstrap body default).
- **Heading color (page h2):** near-black `#212529` (Bootstrap's default
  body color), weight 500, 20px.
- **Paragraph color:** `#b3b3b3` (light gray), weight 300 — no paragraphs in
  the demo DOM, but keep the token for any supporting copy added.
- **Font family:** Roboto (`"Roboto", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) for body AND
  headings. Load Roboto (300/400/500) via Google Fonts `<link>` in
  `index.html`.
- **Brand color:** none in the source (the page is monochrome white/near-
  black; the only "color" is inside the photographic slides). The active dot
  is WHITE (not blue like Procida).
- **Buttons:** the only interactive elements are the carousel arrows and dot
  indicators: white 40px chevron icons overlaid left/right (vertically
  centered) and 7px round dots (inactive `rgba(255,255,255,0.5)`, active
  solid white, `margin: 4px`). NO red/blue borders (debug scaffolding in the
  demo CSS — do not reproduce).
- **Radii:** `border-radius: 50%` on the dot indicators only (images and
  arrows are square-cornered).
- **Carousel behavior:** 1 slide per view at ALL breakpoints, `margin: 0`,
  LOOP on, ~450ms VERTICAL slide (`slideOutDown` out / `slideInUp` in), NO
  autoplay, arrows visible, dots overlaid bottom-center on the image.
- **Spacing rhythm:** `.content` `padding: 7rem 0`; page h2 `.my-5` = 3rem
  top/bottom margins; dots `bottom: 40px` (overlaid on the image), dot
  `margin: 4px`; arrows `left/right: 20px`.
- **Container:** Bootstrap `.container` behavior (max-width 1140px ≥1200px,
  fluid below) — the carousel is centered and container-constrained, NOT
  full-bleed.
- **Dark/light treatment:** LIGHT page throughout — white background,
  near-black heading, light-gray paragraph token; the photographic slides
  themselves are warm/editorial (beige, muted teal, dusty blue, deep
  crimson) but no dark sections.
- **Slide images:** 1900×1150 editorial lifestyle/product photos — replace
  with three wide picsum placeholders (screen seeds for warm/editorial
  subjects per the replication skill).

## Requirements

### Requirement: Page composition

The page SHALL render as a single centered section on a white background with
a heading above a full-width hero image carousel, per the source's one-section
layout.

#### Scenario: Single section layout

Given the app is loaded, when the page renders, then exactly one content
section is present with generous vertical padding (`py-[7em]`), a white
`#fff` page background, and no navbar, hero band, or footer.

#### Scenario: Section heading

Given the page is rendered, when the user looks above the carousel, then a
centered heading (~20px, Roboto, near-black `#212529`, ~3rem vertical
margins) reads "Carousel #17" or a same-kind paraphrase (NOT the demo's
"Carousel #7" copy-paste artifact).

### Requirement: Hero image slides

The carousel SHALL show three full-width image slides, one per view.

#### Scenario: Three full-width slides

Given the carousel is rendered, then three slides exist, each a full-width
responsive image (`img-fluid` behavior) with descriptive alt text, using
picsum placeholders (NOT the source's hero_1/2/3.jpg assets).

#### Scenario: One slide per view at every breakpoint

Given any viewport width (<600px, 600–999px, or ≥1000px), then exactly one
slide is visible at a time (the source has NO responsive block — `items: 1`
always).

### Requirement: Carousel behavior

The carousel SHALL loop, slide vertically at ~450ms, and NOT autoplay,
matching `js/main.js` (`animateOut: 'slideOutDown'`, `animateIn: 'slideInUp'`,
`loop: true`, `smartSpeed: 450`, no `autoplay`).

#### Scenario: Loop

Given the carousel is on the last slide, then it wraps around to the first
slide (and vice versa).

#### Scenario: Vertical slide transition

Given a slide change is triggered, then the outgoing slide exits DOWN and the
incoming slide enters UP (~450ms) — a VERTICAL motion, not a horizontal
slide or cross-fade.

#### Scenario: No autoplay

Given the page is idle, then the carousel does NOT advance on its own (the
OPPOSITE of Procida/Carousel 16; do not copy its autoplay requirement).

### Requirement: Arrow navigation

White chevron arrows SHALL be overlaid on the left/right edges of the
carousel, vertically centered, and advance/go back one slide per click.

#### Scenario: Arrows render

Given the carousel is rendered, then two arrow buttons exist overlaid on the
image at `left: 20px` and `right: 20px`, vertically centered, styled as
plain white chevrons (~40px) with accessible labels (prev/next), and NO
red/blue borders (debug scaffolding in the demo CSS — never reproduced).

#### Scenario: Click prev / next

Given the user clicks the next arrow, then the carousel slides (~450ms,
vertical) to the following slide; clicking the previous arrow slides to the
preceding slide; loop wrap-around applies at both ends.

### Requirement: Dot navigation

Round white dot indicators SHALL be overlaid bottom-center ON the image; the
active dot is solid white.

#### Scenario: Dots render

Given the carousel is rendered, then a row of round 7px dot buttons is shown
overlaid on the image, centered at `bottom: 40px`, each a real `<button>`
(≥44px hit area) with an accessible label; inactive dots are translucent
white `rgba(255,255,255,0.5)`, the active dot is solid white, with 4px gaps.

#### Scenario: Click a dot

Given the user clicks a dot, then the carousel slides (~450ms, vertical) to
the corresponding slide and that dot becomes active.

#### Scenario: Active dot sync

Given the carousel changes slide by any means (dot click or loop
wrap-around), then the active dot updates to match the visible slide; the
first dot is active on initial render.

### Requirement: Responsive behavior

The template SHALL stay usable and unbroken on mobile and desktop.

#### Scenario: Mobile

Given a viewport <600px, then one slide per view is shown, the slide images
stay within the viewport (no horizontal overflow), dots remain tappable
(≥44px hit areas), and arrows remain clickable.

#### Scenario: Desktop

Given a viewport ≥1000px, then the carousel is constrained to the centered
~1140px container, the slide image fills the container width, and arrows +
dots stay overlaid on the image per the source.

### Requirement: Footer with Component Dock link

Every monorepo template SHALL ship a minimal footer linking Component Dock.

#### Scenario: Footer attribution

Given the page is rendered, then a minimal footer links "Component Dock" →
https://www.componentdock.com/.

## Verification checklist

- [ ] `apps/vernazza` exists; package `@free-react-templates/vernazza`;
      `public/CNAME` = `vernazza.free.componentdock.com`; `homepage` =
      `https://vernazza.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300/400/500); no
      font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/vernazza` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered
      near-black heading (~20px, Roboto, ~3rem top/bottom margins) —
      "Carousel #17" or same-kind paraphrase (NOT the demo's "Carousel #7"
      copy-paste artifact); carousel constrained to a centered ~1140px
      container
- [ ] THREE full-width slides (picsum placeholders, screened per the
      replication skill, wide ~1900×1150 editorial/warm-tone subjects,
      descriptive alt); ONE slide per view at every breakpoint
- [ ] Carousel: LOOP on; ~450ms VERTICAL slide (out-going exits down,
      in-coming enters up — NOT horizontal, NOT cross-fade); NO autoplay
      (idle = stays put; the OPPOSITE of Procida)
- [ ] Arrows: white ~40px chevron buttons overlaid left 20px / right 20px,
      vertically centered, accessible labels, click → slide + loop wrap;
      NO red/blue borders (demo debug scaffolding — never reproduced)
- [ ] Dots: round 7px buttons, 4px gaps, overlaid bottom-center of the image
      (bottom 40px), ≥44px hit areas, accessible labels; inactive
      `rgba(255,255,255,0.5)`, active solid white; click → slide; active dot
      syncs on every slide change incl. loop wrap; first dot active initially
- [ ] Responsive: no horizontal overflow on mobile; arrows/dots usable at
      every breakpoint
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh vernazza`
- [ ] PR: branch `feat/template-vernazza`, PR description with source slug,
      preview URL, tokens, renames (esp. "vertical slide + no autoplay +
      visible arrows + overlaid white dots — differs from Procida"); merge
      immediately
