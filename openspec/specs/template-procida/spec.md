# Template: Procida (Team / Testimonial Carousel — Bootstrap Carousels #16)

## Purpose

Procida is a single-section team/quote carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 16" website template design
(source: https://colorlib.com/wp/template/carousel-16/), built under a
DIFFERENT name (Procida — a small island in the Gulf of Naples, Italy, famed
for the pastel-colored houses of its Marina Corricella fishing harbor,
continuing the travel/destinations naming theme of the "Bootstrap Carousels
(20)" series renames) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **procida** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-16`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main; zero hits, including git history). It is the SIXTEENTH of the
"Bootstrap Carousels (20)" series renames (lineage: carousel-01 → wanderlust,
carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido,
carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
carousel-14 → taormina, carousel-15 → tropea, carousel-16 → procida — theme:
travel / destinations; the name is thematic, the content is a team/quote
carousel).

Procida lives in `apps/procida` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 16" — the SIXTEENTH of the 20 "Bootstrap
  Carousels" demos. A **TEAM/QUOTE carousel**: ONE `.content` wrapper
  (`padding: 7rem 0`) on a WHITE page with a centered near-black 20px heading
  (the demo text is a copy-paste artifact — see note below) above
  `.site-section.bg-left-half.mb-5` → `.container.owl-2-style` →
  `.owl-carousel.owl-2` holding **SIX** `.media-29101` slide DIVs, each a
  centered column: a SQUARE avatar photo (`images/person_N_sm.jpg`,
  `width: 80px`, `border-radius: 50%`, `margin: 0 auto 40px auto`), a name
  (`h3`, 18px, `font-weight: 900`, `margin-bottom: 30px`, link-colored
  `#6c757d`), and a 3-line lorem-ipsum blurb (`p`, `color: #999999`,
  `font-weight: 300`). Names in the demo: Alex Fought, Ben Stafford, Devin
  Bridges, Joshua Jones, Kellie Kenney, Will Reagan. **Differs from
  Carousel 15 (Tropea — split image+quote with a BLUE panel and avatar
  thumbnail-strip navigation): this demo is a multi-column carousel of
  avatar cards (1/2/3 per view), with DOT navigation below and AUTOPLAY ON;
  no blue panel, no thumbnail strip, no arrows rendered.** No navbar, no
  hero band, no footer — the section is the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-16/`
  (HTTP 200, 18,586 bytes DOM; fetched + rendered 2026-08-15). NOTE: the
  standard preview path `https://preview.colorlib.com/theme/carousel-16/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix (same finding as the Bootstrap Calendars and
  Carousel 01–15 preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-16/css/`. Stylesheets: `css/owl.carousel.min.css`
  (Owl Carousel 2.3.4 base), `css/bootstrap.min.css` (Bootstrap 4.3.1,
  separate file), `css/style.css` (1,883 bytes — the template's custom rules,
  see tokens below), `fonts/icomoon/style.css` (icon font — never used in
  this demo). Roboto is the declared font stack (no Google Fonts `<link>` in
  the demo head — ColorLib's demo shell injects it; the recreation loads
  Roboto via Google Fonts in `index.html` per monorepo convention). The
  classes `.site-section` and `.bg-left-half` have **NO CSS rules anywhere**
  (checked style.css + bootstrap.min.css) — dead classes; the section
  background is plain white.
- **Carousel driven by `js/main.js` (fetched live via the page, 718 bytes):**
  `$('.owl-2').owlCarousel({ center: false, items: 1, loop: true,
stagePadding: 0, margin: 20, smartSpeed: 1000, autoplay: true, nav: true,
dots: true, pauseOnHover: false, responsive: { 600: { margin: 20, nav: true,
items: 2 }, 1000: { margin: 20, stagePadding: 0, nav: true, items: 3 } } })` —
  **1 per view <600px, 2 per view 600–999px, 3 per view ≥1000px**,
  **LOOP ON**, **AUTOPLAY ON** (Owl default ~5s interval — the OPPOSITE of
  Tropea, which has `autoplay: false`), **DOTS ON** (round 7px dots, gray
  `#cccccc`, active `#007bff`, `margin: 3px`, positioned `bottom: -30px`
  below the carousel), **NAV ON in JS but the arrows are INVISIBLE** —
  `.owl-2-style .owl-nav { display: none }` in style.css hides them, and the
  live render confirms NO arrow buttons visible. No `animateOut` → the
  transition is Owl's default **HORIZONTAL SLIDE** at ~1s (`smartSpeed:
1000`). Recreate: responsive 1/2/3-per-view carousel, loop, ~1s horizontal
  slide, ~5s autoplay (no hover-pause), round dot indicators below (gray →
  blue active), NO arrows.
- **Verified live in the browser (2026-08-15):** heading "Carousel #6"
  rendered (20px, near-black `#212529`, centered, margin 48px 0 = `.my-5`);
  the carousel showed THREE cards at desktop width (Owl loop clones inflate
  the DOM — the a11y snapshot listed all six people twice); each card:
  circular avatar on top, bold dark-gray name, light-gray 3-line lorem
  blurb; below the cards two visible dots (the vision model read the left
  dot light gray and the right dot bright blue = the active state); NO
  arrow buttons anywhere (`.owl-nav` display:none wins over `nav: true`).
  Avatar subjects on the first view: a woman with long dark hair, a woman
  wearing a hat, and a man with short dark hair.
- **Screenshot:** `carousel-16.jpg` (1200×972, viewed in the browser) —
  the same minimal team-carousel layout on a WHITE page: centered near-black
  sans heading "Carousel #6" (artifact), THREE cards (Alex Fought, Ben
  Stafford, Devin Bridges): circular avatar photos of dark-haired people,
  bold black names, light-gray lorem-ipsum blurbs, and a single BLUE dot
  below the center card (the active carousel indicator). Aesthetic: clean,
  modern, minimalist, whitespace-heavy — neutral palette (white + grays +
  near-black type) with ONE blue accent (`#007bff`) reserved for the active
  dot.
- **Card images (from the preview, NOT copied — picsum placeholders only):**
  `images/person_1_sm.jpg`, `person_2_sm.jpg`, `person_3_sm.jpg` — SQUARE
  avatar crops. The SIX cards REUSE the three photos cyclically (1, 2, 3,
  1, 2, 3 — the source is sloppy; see fidelity note). The recreation SHOULD
  use SIX DISTINCT people (screen picsum seeds for human/portrait subjects
  per the colorlib-template-replication skill's seed-screening method),
  circular-cropped square avatars.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (`css/bootstrap.min.css`) + Owl Carousel 2.3.4 + icomoon icon font
  (unused) + Roboto. The recreation must NOT copy any of this — build a
  pure-React responsive carousel (dot indicators are plain `<button>`s, no
  arrows at all), placeholder picsum photos.
- **Fidelity note (heading copy-paste artifact):** the demo `<title>` and the
  visible `h2` literally read "Carousel #6" — a copy-paste artifact (this is
  demo #16 of the series; the heading was not updated from demo #6 — even
  Carousel 15's screenshot shows "Carousel #6" in its browser chrome). The
  recreation SHALL NOT reproduce the wrong number: use "Carousel #16"
  (corrected) or an equivalent same-kind paraphrase ("Our Team", "Meet the
  Team", "Testimonials", etc.).
- **Fidelity note (copy reuse):** all six cards share the SAME lorem-ipsum
  blurb and only THREE photos serve six people. The recreation MAY
  paraphrase — keep the same kind (a 2–3 sentence team/role blurb + a name
  per card) and SHOULD use six distinct people (photo + name) for realism.
  The source's exact copy is not meaningful.
- **Fidelity note (autoplay ON, no hover-pause):** `autoplay: true` with
  `pauseOnHover: false` — the carousel advances every ~5s regardless of
  hover (deliberately the OPPOSITE of Tropea; do not copy Tropea's no-autoplay
  requirement). A visible auto-advance is correct.
- **Fidelity note (arrows hidden, dots shown):** `nav: true` in JS but
  `.owl-2-style .owl-nav { display: none }` — the recreation SHALL NOT render
  arrow buttons. Dots ARE shown: 7px round indicators, inactive `#cccccc`,
  active `#007bff`, 3px margin, positioned ~30px below the cards.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.content` — the page wrapper, `padding: 7rem 0` (Tailwind `py-[7em]`),
   on the WHITE page background.
   - `.container` — Bootstrap centered container (max-width 1140px ≥1200px;
     the carousel is NOT full-bleed — it is constrained to the container).
     - `.row.mb-5` → `.col-12.text-center` → `h2.my-5` — the heading:
       "Carousel #6" in the demo (copy-paste artifact — see note; use
       "Carousel #16" or paraphrase), 20px, Roboto, near-black `#212529`,
       centered, `margin: 3rem 0` (`.my-5` = 48px computed).
     - `.site-section.bg-left-half.mb-5` — dead classes (no CSS rules);
       plain white section, `margin-bottom: 48px` (`.mb-5`).
       - `.container.owl-2-style` — the carousel wrapper (dots positioning
         context).
         - `.owl-carousel.owl-2` — the carousel: SIX `.media-29101` slide
           DIVs, each `text-align: center`:
           - `img.person_N_sm.jpg` — square avatar, `width: 80px`,
             `border-radius: 50%`, `margin: 0 auto 40px auto`.
           - `h3` — the name, 18px, `font-weight: 900`,
             `margin-bottom: 30px` → `a` (color `#6c757d`).
           - `p` — the blurb, `color: #999999`, `font-weight: 300`
             (3 lines at container width).
   - Carousel furniture: `.owl-dots` (below the carousel, `text-align:
center`, `position: relative; bottom: -30px`) with round 7px dots; the
     `.owl-nav` buttons are NEVER visible (display:none).

## Design tokens (from preview stylesheet `css/style.css` + Bootstrap base)

- **Page background:** WHITE (`#fff` — Bootstrap body default; `.bg-left-half`
  has no rules, so no tinted band).
- **Heading color (page h2):** near-black `#212529` (Bootstrap's default
  body color), weight 500.
- **Card name color:** `#6c757d` (Bootstrap secondary GRAY, on the `h3 a`),
  weight 900, 18px.
- **Card blurb color:** `#999999` (light gray), weight 300, body 16px,
  `line-height: 1.7` (body default).
- **Font family:** Roboto (`"Roboto", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) for body AND
  headings. Load Roboto (300/400/500/900) via Google Fonts `<link>` in
  `index.html`.
- **Font sizes:** page h2 20px; card name 18px; blurb 16px (body default).
- **Brand color:** `#007bff` (Bootstrap primary blue) — used ONLY for the
  ACTIVE carousel dot (the sole accent on the page).
- **Buttons:** NONE as CTAs. The only interactive elements are the carousel
  dot indicators (7px round buttons; inactive `#cccccc`, active `#007bff`,
  `margin: 3px`, `.3s all cubic-bezier(0.32, 0.71, 0.53, 0.53)` transition).
- **Radii:** `border-radius: 50%` on the avatar images AND the dot
  indicators (everything else square-cornered).
- **Carousel behavior:** 1/2/3 items per view at <600 / 600–999 / ≥1000px,
  `margin: 20px` between cards, LOOP on, ~1s HORIZONTAL slide (`smartSpeed:
1000`), AUTOPLAY on (~5s, `pauseOnHover: false`).
- **Spacing rhythm:** `.content` `padding: 7rem 0`; page h2 `.my-5` = 3rem
  top/bottom margins; avatar `margin: 0 auto 40px auto` (40px below the
  image); name `margin-bottom: 30px`; dots `bottom: -30px` (hang ~30px below
  the carousel), dot `margin: 3px`.
- **Container:** Bootstrap `.container` behavior (max-width 1140px ≥1200px,
  fluid below) — the carousel is centered and container-constrained, NOT
  full-bleed.
- **Dark/light treatment:** LIGHT page throughout — white background, gray
  `#6c757d` names, lighter-gray `#999999` blurbs, near-black heading, single
  blue `#007bff` accent on the active dot. No dark sections.

## Requirements

### Requirement: Page composition

The page SHALL render as a single centered section on a white background with
a heading above a team/quote carousel, per the source's one-section layout.

#### Scenario: Single section layout

Given the app is loaded, when the page renders, then exactly one content
section is present with generous vertical padding (`py-[7em]`), a white
`#fff` page background, and no navbar, hero band, or footer.

#### Scenario: Section heading

Given the page is rendered, when the user looks above the carousel, then a
centered heading (~20px, Roboto, near-black `#212529`, ~3rem vertical
margins) reads "Carousel #16" or a same-kind paraphrase (NOT the demo's
"Carousel #6" copy-paste artifact).

### Requirement: Team card composition

The carousel SHALL show six cards, each a centered column: circular avatar,
name, and blurb.

#### Scenario: Six cards with avatar + name + blurb

Given the carousel is rendered, then six cards exist, each `text-align:
center` with a circular (`border-radius: 50%`) square avatar photo (~80px,
picsum seed, a distinct person per card, descriptive alt text) with ~40px
space below it, a bold 18px near-gray (`#6c757d`) name link, and a 3-line
light-gray (`#999999`, weight 300) team blurb (source: identical lorem
ipsum duplicated on all six — paraphrase and vary per card, six distinct
people).

### Requirement: Carousel behavior

The carousel SHALL show 1/2/3 cards per view (by breakpoint), loop, slide
horizontally at ~1s, and AUTOPLAY at ~5s, matching `js/main.js`
(`autoplay: true`, `pauseOnHover: false`).

#### Scenario: Responsive items per view

Given the viewport is <600px, then exactly one card is visible at a time;
600–999px → two; ≥1000px → three.

#### Scenario: Loop

Given the carousel is on the last slide, then it wraps around to the first
slide (and vice versa).

#### Scenario: Slide transition

Given a slide change is triggered, then the transition is a ~1s HORIZONTAL
slide (translateX), not a cross-fade.

#### Scenario: Autoplay

Given the page is idle, then the carousel advances to the next slide on its
own every ~5s, and the active dot updates to match (the OPPOSITE of
Tropea/Carousel 15; do not copy its no-autoplay requirement).

### Requirement: Dot navigation

Round dot indicators SHALL sit below the carousel; the active dot is blue.

#### Scenario: Dots render

Given the carousel is rendered, then a row of round 7px dot buttons is shown
centered ~30px below the cards, each a real `<button>` (≥44px hit area) with
an accessible label; inactive dots are gray `#cccccc`, the active dot is blue
`#007bff`, with 3px gaps between dots.

#### Scenario: Click a dot

Given the user clicks a dot, then the carousel slides (~1s horizontal) to the
corresponding slide and that dot becomes active.

#### Scenario: Active dot sync

Given the carousel changes slide by any means (dot click, autoplay, or loop
wrap-around), then the active dot updates to match the visible slide.

### Requirement: No arrow navigation

The recreation SHALL NOT render prev/next arrow buttons, matching the
source's `.owl-2-style .owl-nav { display: none }`.

#### Scenario: No arrows rendered

Given the carousel is rendered at any viewport, then no prev/next arrow
buttons exist anywhere (the source generates them but the CSS hides them —
they never appear).

### Requirement: Responsive behavior

The template SHALL stay usable and unbroken on mobile and desktop.

#### Scenario: Mobile

Given a viewport <600px, then one card per view is shown, cards stay
centered with no horizontal overflow, dots remain tappable (≥44px hit
areas), and autoplay keeps working.

#### Scenario: Desktop

Given a viewport ≥1000px, then three cards per view are shown, the carousel
is constrained to the centered ~1140px container with 20px gaps between
cards, and the dot row sits ~30px below the cards per the source.

### Requirement: Footer with Component Dock link

Every monorepo template SHALL ship a minimal footer linking Component Dock.

#### Scenario: Footer attribution

Given the page is rendered, then a minimal footer links "Component Dock" →
https://www.componentdock.com/.

## Verification checklist

- [ ] `apps/procida` exists; package `@free-react-templates/procida`;
      `public/CNAME` = `procida.free.componentdock.com`; `homepage` =
      `https://procida.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300/400/500/900); no
      font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/procida` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered
      near-black heading (~20px, Roboto, ~3rem top/bottom margins) —
      "Carousel #16" or same-kind paraphrase (NOT the demo's "Carousel #6"
      copy-paste artifact); carousel constrained to a centered ~1140px
      container; no `.bg-left-half` tint (dead class in the source)
- [ ] SIX cards; each a centered column: circular ~80px picsum avatar
      (screened per the replication skill — SIX DISTINCT people, descriptive
      alt) with ~40px space below, bold 18px `#6c757d` name, and a 3-line
      light-gray `#999999` weight-300 blurb (paraphrased and varied per card)
- [ ] Carousel: 1 card per view <600px, 2 at 600–999px, 3 at ≥1000px;
      20px gaps; LOOP on; ~1s HORIZONTAL slide (NOT cross-fade); AUTOPLAY
      on ~5s with NO hover-pause (idle = advancing, active dot follows)
- [ ] Dots: round 7px buttons, 3px gaps, centered ~30px below the cards,
      ≥44px hit areas, accessible labels; inactive `#cccccc`, active
      `#007bff`; click → slide + active state; active dot syncs on every
      slide change incl. autoplay and loop wrap
- [ ] NO arrow buttons anywhere (source: `.owl-nav` display:none)
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh procida`
- [ ] PR: branch `feat/template-procida`, PR description with source slug,
      preview URL, tokens, renames (esp. "autoplay ON + dots + no arrows —
      differs from Tropea"); merge immediately
