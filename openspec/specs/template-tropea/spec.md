# Template: Tropea (Split Image + Quote Testimonials Carousel with Circular Avatar-Thumbnail Navigation)

## Purpose

Tropea is a single-section testimonial-slider template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 15" website template design
(source: https://colorlib.com/wp/template/carousel-15/), built under a
DIFFERENT name (Tropea — a cliffside town in Calabria, southern Italy, on the
Tyrrhenian coast, famous for its dramatic sea cliffs, white-sand beaches, and
the Santa Maria dell'Isola sanctuary on a rock outcrop, continuing the
travel/destinations naming theme of the "Bootstrap Carousels (20)" series
renames) per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

New name **tropea** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-15`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main; zero hits, including git history). It is the FIFTEENTH of the
"Bootstrap Carousels (20)" series renames (lineage: carousel-01 → wanderlust,
carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido,
carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
carousel-14 → taormina, carousel-15 → tropea — theme: travel / destinations;
the name is thematic, the content is a testimonial slider).

Tropea lives in `apps/tropea` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 15" — the FIFTEENTH of the 20 "Bootstrap
  Carousels" demos. A **TESTIMONIAL slider**: ONE `.content` wrapper
  (`padding: 7rem 0`) on a WHITE page with a centered near-black 20px heading
  (the demo text is a copy-paste artifact — see note below) above
  `.owl-carousel.slide-one-item` holding **THREE** `.testimony-29101` slide
  DIVs, each a `d-md-flex align-items-stretch` row split **40% / 60%**: a
  `.image` DIV with an inline `background-image` (`images/person_1.jpg`,
  `person_2.jpg` — portrait photos, `background-size: cover`, centered) on
  the LEFT, and a `.text` panel (**`background: #007bff`** — Bootstrap
  primary BLUE, `padding: 7rem 4rem`) on the RIGHT containing a `blockquote`
  (20px, WHITE `#fff` text, weight 300, `line-height: 1.8`,
  `padding-bottom: 50px`) and an `.author` line (16px, `rgba(255,255,255,0.7)`,
  `letter-spacing: .1rem`, absolutely positioned at the bottom of the quote).
  **Differs from Carousel 14 (Taormina — split image+quote with bottom-center
  BAR dots + black mid-height edge arrows, autoplay WITH hover-pause): this
  demo has NO arrows, NO dots, and NO autoplay — navigation is exclusively a
  strip of THREE circular AVATAR THUMBNAILS (50px, `border-radius: 50%`)
  straddling the card's bottom edge, and the text panel is BLUE with white
  text (Taormina: light-gray `#f8f9fa` panel with gray text).** No navbar, no
  hero band, no footer — the section is the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-15/`
  (HTTP 200, 18,493 bytes DOM; fetched + rendered 2026-08-15). NOTE: the
  standard preview path `https://preview.colorlib.com/theme/carousel-15/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix (same finding as the Bootstrap Calendars and
  Carousel 01–14 preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-15/css/`. Stylesheets: `css/owl.carousel.min.css`
  (Owl Carousel 2.3.4 base), `css/bootstrap.min.css` (Bootstrap 4.3.1,
  separate file), `css/style.css` (3,648 bytes — the template's custom rules,
  see tokens below), `fonts/icomoon/style.css` (icon font — only used for the
  `navText` spans, which never render because `nav: false`). Roboto 300/400
  is the declared font stack; the live page's `document.fonts` confirms
  Roboto 300/400 loaded (no Google Fonts `<link>` in the demo head — ColorLib's
  demo shell injects it; the recreation loads Roboto 300/400 via Google Fonts
  in `index.html` per monorepo convention).
- **Carousel driven by `js/main.js` (fetched live via the page, 26 lines):**
  `$('.slide-one-item').owlCarousel({ center: false, items: 1, loop: true,
stagePadding: 0, margin: 0, smartSpeed: 1500, autoplay: false, dots: false,
nav: false, navText: ['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **ONE slide per view at ALL
  breakpoints (1/1/1; NO responsive block)**, **LOOP ON**, **AUTOPLAY OFF**,
  **DOTS OFF**, **NAV OFF** (the `navText` icons and the `.owl-nav` CSS rules
  exist but the buttons are NEVER generated — there are no arrows in this
  demo). Navigation is the thumbnail strip: `$('.thumbnail li').each(...)`
  binds a click → `owl.trigger('to.owl.carousel', [slide_index, 1500])` (jump
  with a 1,500ms slide animation), and on `changed.owl.carousel` the handler
  does `$('.thumbnail li').removeClass('active')` +
  `$('.thumbnail li').eq(event.item.index - 2).addClass('active')` (the `- 2`
  compensates for Owl's loop-mode clone slides; in the recreation the
  equivalent is: the active thumbnail always matches the visible slide).
  NO `animateOut` → the transition is Owl's default **HORIZONTAL SLIDE**
  (confirmed live: `.owl-stage` transform is a translateX matrix). Recreate:
  1-per-view, loop, horizontal ~1.5s slide, NO autoplay, NO arrows, NO dots —
  clickable avatar thumbnails as the only navigation.
- **Verified live in the browser (2026-08-15):** heading "Carousel #5"
  rendered (20px, near-black `rgb(33,37,41)` = `#212529`, centered, margin
  48px 0 = `.my-5`); THREE slides; the visible slide was the 40/60 split —
  `.image` on the left (portrait photo of a young woman with long wavy brown
  hair in a dark hooded jacket, leaning against a textured light wall,
  `background-size: cover`, centered), `.text` on the right with a SOLID
  VIBRANT BLUE background (`#007bff` declared; the vision model read the
  rendered panel as ≈`#1e88e5` — a color-space approximation of the same
  Bootstrap-primary blue), white quote text and a white
  letter-spaced "— Jean Stephen" author line; NO arrow buttons and NO dots
  anywhere; THREE circular avatar thumbnails at the BOTTOM CENTER of the
  card, straddling the seam between the photo and the blue panel (the first
  one larger = active, showing the same woman as the main photo; the other
  two show different people — a second woman and a man). The thumbnail
  strip is `position: absolute; bottom: 0; left: 50%; transform:
translateY(50%) translateX(-50%)` relative to `.slider-92911`
  (`position: relative`), i.e. HALF-STUCK over the card's bottom edge,
  centered. Clicking the middle/right thumbnails switches the visible slide
  and moves the active state (verified live).
- **Screenshot:** `carousel-15.jpg` (1200×972, viewed in browser) — same
  minimal testimonial-slider layout on a WHITE page: centered dark sans
  heading (the browser-chrome capture in this shot shows "Carousel #6" —
  another copy-paste artifact; the LIVE page reads "Carousel #5"; this is
  demo #15 — see fidelity note), below it the carousel card — LEFT a
  portrait photo of a young woman with long brown hair looking over her
  shoulder, dark jacket, light textured wall; RIGHT a solid BLUE panel with
  white Lorem-ipsum quote text and a white "— Jean Stephen" author line;
  THREE small circular avatar thumbnails at the bottom center, overlapping
  the card's bottom edge, left one larger (active); NO arrows, NO dots.
  Aesthetic: clean, modern, minimalist, HIGH-CONTRAST corporate/portfolio
  testimonial showcase — white page, near-black heading, vivid blue panel
  with white text; the blue IS the dominant color accent (unlike Taormina,
  where the panel is light gray and blue appears only on the active dot).
- **Slide images (from the preview, NOT copied — picsum placeholders only):**
  `images/person_1.jpg`, `images/person_2.jpg` — PORTRAIT-Orientation
  1000×1200 headshot/lifestyle photos (person_1: a young woman, long wavy
  brown hair, dark hooded jacket; person_2: a second person). The THIRD
  slide REUSES `person_2.jpg` (the source is sloppy — see fidelity note).
  Thumbnails: `images/person_1_sm.jpg`, `person_2_sm.jpg`,
  `person_3_sm.jpg` — SQUARE 490×490 avatar crops (person_3_sm is a THIRD
  person, a man, but there is no `person_3.jpg` full image — the third slide
  shows person_2's photo while its thumbnail shows person_3). The recreation
  should use THREE DISTINCT people (screen picsum seeds for portrait
  human/headshot subjects per the colorlib-template-replication skill's
  seed-screening method): cover-cropped portraits in the 40% panels and
  square crops of the SAME three people as the avatars.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (`css/bootstrap.min.css`) + Owl Carousel 2.3.4 + icomoon icon font
  (unused in practice) + Roboto. The recreation must NOT copy any of this —
  build a pure-React carousel (no arrows/dots needed at all; the avatar
  thumbnails are plain `<button>`s with `<img>` avatars), placeholder picsum
  photos.
- **Fidelity note (heading copy-paste artifact):** the demo `<title>` and the
  visible `h2` literally read "Carousel #5" — a copy-paste artifact (this is
  demo #15 of the series; the heading was not updated from demo #5), and the
  screenshot capture shows yet another variant ("Carousel #6"). The
  recreation SHALL NOT reproduce the wrong number: use "Carousel #15"
  (corrected) or an equivalent same-kind paraphrase ("Testimonials",
  "What People Say", etc.).
- **Fidelity note (quote/author copy):** the blockquote text is the SAME
  generic Lorem-ipsum placeholder on all three slides ("Lorem ipsum dolor
  sit amet, consectetur adipisicing elit. Temporibus, at! ..."), the first
  author is "— Jean Stephen" and slides 2–3 both say "— Julia Smith"
  (duplicated). The recreation MAY paraphrase — keep the same kind (a 2–3
  sentence testimonial + an author name per slide) and SHOULD vary the
  quotes/authors per slide for realism (three distinct people). The source's
  exact copy is not meaningful.
- **Fidelity note (thumbnail content):** slide 3's PHOTO reuses person_2.jpg
  while its THUMBNAIL shows a third person (person_3_sm) — a source
  inconsistency. The recreation SHOULD use three distinct people with
  matching photo + avatar per slide (screen picsum seeds accordingly).
- **Fidelity note (no autoplay):** `autoplay: false` — the carousel NEVER
  advances on its own. The recreation SHALL NOT autoplay (deliberately the
  OPPOSITE of Taormina, which autoplays with hover-pause — do not copy
  Taormina's requirement). A static first-slide render is correct.
- **Fidelity note (no arrows / no dots):** `nav: false` and `dots: false` —
  the ONLY navigation affordances are the avatar thumbnails. The recreation
  SHALL NOT render arrow buttons or dot bars (they exist only as dead CSS in
  the source). Thumbnails must be real buttons with ≥44px hit areas (the
  source's 50px images scaled to 0.8 = ~40px visual; wrap with padding to
  reach the monorepo minimum) and accessible labels.
- **Fidelity note (responsive):** below 992px the source stacks the slide:
  `.image, .text { width: 100%; display: block !important }` and `.image`
  gets `height: 300px`. The recreation MUST match (single column, 300px
  image on top, blue text panel below) and must not overflow horizontally;
  the thumbnail strip stays at the bottom center (it is centered via
  translateX, so it survives the stack).

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.content` — the page wrapper, `padding: 7rem 0` (Tailwind `py-[7em]`),
   on the WHITE page background.
   - `.container` — Bootstrap centered container (max-width 1140px ≥1200px;
     the carousel is NOT full-bleed — it's constrained to the container).
     - `h2.my-5.text-center` — the heading: "Carousel #5" in the demo
       (copy-paste artifact — see note; use "Carousel #15" or paraphrase),
       20px, Roboto, near-black `#212529`, centered, `margin: 3rem 0`
       (`.my-5` = 48px computed).
     - `.slider-92911` — `position: relative` wrapper around the carousel
       AND the thumbnail strip (the absolute thumbnails position against it).
       - `.owl-carousel.slide-one-item` — the carousel: THREE slides, each a
         `.testimony-29101.d-md-flex.align-items-stretch` row:
         - `.image` — inline `style="background-image: url('images/person_N.jpg')"`,
           `width: 40%; background-size: cover; background-position: center
center` (no explicit height — it stretches to the text panel's
           height via `align-items-stretch`).
         - `.text` — `width: 60%; padding: 7rem 4rem; background: #007bff` →
           `blockquote` (`position: relative; padding-bottom: 50px;
font-size: 20px`) → `p` (the quote, `#fff`, weight 300,
           `line-height: 1.8`) + `.author` (`font-size: 16px;
letter-spacing: .1rem; position: absolute; bottom: 0;
color: rgba(255,255,255,0.7)`).
       - `.my-5.text-center` (sibling AFTER the carousel) → `ul.thumbnail`:
         `list-style: none; padding: 0; margin: 0; position: absolute;
bottom: 0; left: 50%; transform: translateY(50%) translateX(-50%);
z-index: 99` — THREE `li` (first has `class="active"` in the HTML),
         each `a` (`display: block; margin: 4px`) → `img` (`width: 50px;
border-radius: 50%; transform: scale(0.8); box-shadow:
0 5px 10px 0 rgba(0,0,0,0.2); transition: .3s all ease`);
         `li.active a img` → `transform: scale(1.2); box-shadow:
0 10px 20px 0 rgba(0,0,0,0.2)`.
   - Carousel furniture: NONE rendered — `.owl-nav` (arrows) and `.owl-dots`
     are never generated (`nav: false`, `dots: false`); the `.owl-nav`
     `display: none` under 992px rule is dead CSS. The card itself gets
     `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.1)` from
     `.slide-one-item`.

## Design tokens (from preview stylesheet `css/style.css` + Bootstrap base)

- **Page background:** WHITE (`#fff` — Bootstrap body default; no gray page
  band in this demo).
- **Text panel background:** `#007bff` (Bootstrap primary BLUE) — the RIGHT
  60% of each slide AND the dominant color accent of the whole page.
- **Heading color (page h2):** near-black `#212529` (Bootstrap's default
  body color), weight 500.
- **Quote text color:** `#fff` (white), weight 300, 20px, `line-height: 1.8`
  (inside the blue panel).
- **Author color:** `rgba(255,255,255,0.7)` (semi-transparent white), 16px,
  `letter-spacing: .1rem`.
- **Font family:** Roboto (`"Roboto", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) for body AND
  headings. Load Roboto 300/400 via Google Fonts `<link>` in `index.html`.
- **Font sizes:** page h2 20px; quote 20px; author 16px; body default 16px.
- **Brand color:** `#007bff` (Bootstrap primary blue) — the text panel
  background itself.
- **Buttons:** NONE in the source (no CTAs, no arrows, no dots — the avatar
  thumbnails are the only interactive elements).
- **Thumbnails (navigation):** 50px circular avatars (`border-radius: 50%`),
  `margin: 4px` on the link, inactive `transform: scale(0.8)` with shadow
  `0 5px 10px 0 rgba(0,0,0,0.2)`, ACTIVE `transform: scale(1.2)` with shadow
  `0 10px 20px 0 rgba(0,0,0,0.2)`, `.3s all ease` transition; strip is
  `position: absolute; bottom: 0; left: 50%; translateY(50%) translateX(-50%)`
  (straddles the card's bottom edge, centered), `z-index: 99`.
- **Card shadow:** `.slide-one-item` → `box-shadow: 0 15px 30px 0
rgba(0,0,0,0.1)`.
- **Spacing rhythm:** `.content` `padding: 7rem 0`; page h2 `.my-5` = 3rem
  top/bottom margins; `.text` panel `padding: 7rem 4rem`; blockquote
  `padding-bottom: 50px` (room for the absolute author line); thumbnails
  `margin: 3rem 0` wrapper (`.my-5`) and 4px link margins.
- **Radii:** `border-radius: 50%` ONLY on the thumbnail avatars (everything
  else is square-cornered).
- **Container:** Bootstrap `.container` behavior (max-width 1140px ≥1200px,
  fluid below) — the carousel is centered and container-constrained, NOT
  full-bleed.
- **Dark/light treatment:** LIGHT page; each slide is a dark photo panel
  (40%) beside a vivid BLUE text panel (60%) with white text; the blue panel
  - white type is the high-contrast signature of this demo.

## Requirements

### Requirement: Page composition

The page SHALL render as a single centered section on a white background with a
heading above a testimonial carousel, per the source's one-section layout.

#### Scenario: Single section layout

Given the app is loaded, when the page renders, then exactly one content
section is present with generous vertical padding (`py-[7em]`), a white
`#fff` page background, and no navbar, hero band, or footer.

#### Scenario: Section heading

Given the page is rendered, when the user looks above the carousel, then a
centered heading (~20px, Roboto, near-black `#212529`, ~3rem vertical
margins) reads "Carousel #15" or a same-kind paraphrase (NOT the demo's
"Carousel #5" copy-paste artifact).

### Requirement: Testimonial slide composition

The carousel SHALL show three slides, each a 40/60 split: a cover-cropped
portrait image panel on the left and a BLUE quote panel on the right.

#### Scenario: Three slides with image + blue text split

Given the carousel is rendered, then exactly three slides exist, each split
40% image / 60% text: the image panel is a `background-size: cover`,
centered portrait photo (picsum seed, portrait orientation, a distinct
person per slide) with descriptive alt text, and the text panel has a
`#007bff` background with `7rem 4rem` padding.

#### Scenario: Quote and author on the blue panel

Given any slide is displayed, then its blue text panel shows a ~20px WHITE
(`#fff`, weight 300, `line-height: 1.8`) 2–3 sentence testimonial quote and
a 16px semi-transparent-white (`rgba(255,255,255,0.7)`, `letter-spacing:
.1rem`) author attribution ("— Name") positioned at the bottom of the quote
block (source: identical Lorem-ipsum + "Jean Stephen"/"Julia Smith"
duplicated — paraphrase and vary per slide, three distinct people).

### Requirement: Carousel behavior

The carousel SHALL show one slide per view, loops, slides horizontally at
~1.5s, and SHALL NOT autoplay, matching `js/main.js` (`autoplay: false`).

#### Scenario: One slide per view

Given the carousel is displayed at any viewport width (<600px, 600–999px, or
≥1000px), then exactly one slide is visible at a time.

#### Scenario: Loop

Given the carousel is on the last slide and the first thumbnail is clicked,
then the carousel wraps around to the first slide (and vice versa).

#### Scenario: Slide transition

Given a slide change is triggered, then the transition is a ~1.5s
HORIZONTAL slide (translateX), not a cross-fade.

#### Scenario: No autoplay

Given the page is idle, then the carousel NEVER advances on its own — the
visible slide and active thumbnail stay unchanged until the user
interacts (the OPPOSITE of Taormina/Carousel 14; do not copy its autoplay
requirement).

### Requirement: Thumbnail navigation

Three circular avatar thumbnails SHALL straddle the card's bottom center and
be the ONLY navigation; clicking one jumps to its slide.

#### Scenario: Thumbnails render

Given the carousel is rendered, then exactly three circular (`border-radius:
50%`) avatar thumbnails are shown side-by-side at the bottom center,
straddling the card's bottom edge (absolute, `bottom: 0`, `translateY(50%)
translateX(-50%)`), each a real `<button>` (≥44px hit area) with an
aria-label and the SAME person's square avatar as its slide's portrait.

#### Scenario: Active thumbnail state

Given the carousel is rendered, then exactly one thumbnail is active —
scaled up to 1.2× with the larger shadow (`0 10px 20px 0 rgba(0,0,0,0.2)`),
the others at 0.8× with the smaller shadow — and it matches the visible
slide (the first slide is active on initial render).

#### Scenario: Click a thumbnail

Given the user clicks a thumbnail, then the carousel slides (~1.5s
horizontal) to the corresponding slide and that thumbnail becomes active.

#### Scenario: Active thumbnail sync

Given the carousel changes slide by any means (thumbnail click or loop
wrap-around), then the active thumbnail updates to match the newly visible
slide.

### Requirement: No arrow or dot navigation

The recreation SHALL NOT render arrow buttons or dot indicators, matching the
source's `nav: false` / `dots: false`.

#### Scenario: No arrows or dots rendered

Given the carousel is rendered at any viewport, then no prev/next arrow
buttons and no dot bars exist anywhere (the source's `.owl-nav`/`.owl-dots`
are never generated — only the thumbnails navigate).

### Requirement: Responsive behavior

The template SHALL stay usable and unbroken on mobile and desktop.

#### Scenario: Mobile

Given a viewport <992px, then each slide stacks vertically (image panel
`width: 100%` with `height: 300px`, blue text panel `width: 100%` below it),
the thumbnail strip remains at the bottom center with tappable ≥44px hit
areas, and there is no horizontal overflow.

#### Scenario: Desktop

Given a viewport ≥1000px, then the carousel is constrained to the centered
~1140px container, one slide per view with the 40/60 image/quote split,
the card casts the soft shadow (`0 15px 30px 0 rgba(0,0,0,0.1)`), and the
thumbnail strip straddles the bottom edge, centered, per the source.

### Requirement: Footer with Component Dock link

Every monorepo template SHALL ship a minimal footer linking Component Dock.

#### Scenario: Footer attribution

Given the page is rendered, then a minimal footer links "Component Dock" →
https://www.componentdock.com/.

## Verification checklist

- [ ] `apps/tropea` exists; package `@free-react-templates/tropea`;
      `public/CNAME` = `tropea.free.componentdock.com`; `homepage` =
      `https://tropea.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300/400); no
      font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/tropea` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered
      near-black heading (~20px, Roboto, ~3rem top/bottom margins) —
      "Carousel #15" or same-kind paraphrase (NOT the demo's "Carousel #5"
      copy-paste artifact); carousel constrained to a centered ~1140px
      container; responsive (no overflow on mobile)
- [ ] THREE slides; each a 40/60 split: portrait cover-cropped picsum image
      (screened per the replication skill — THREE DISTINCT people, photo +
      matching avatar per slide) with alt text + `#007bff` BLUE text panel
      (`7rem 4rem` padding) with a 20px WHITE `#fff` weight-300
      `line-height: 1.8` quote and a 16px `rgba(255,255,255,0.7)`
      letter-spaced author line at the bottom of the quote block
      (quotes/authors paraphrased and varied per slide)
- [ ] Carousel: exactly 1 slide per view at <600px / 600–999px / ≥1000px;
      LOOP on; ~1.5s HORIZONTAL slide transition (NOT cross-fade);
      NO autoplay (idle = static, active state unchanged)
- [ ] Thumbnails: exactly three circular avatars (border-radius 50%) at the
      BOTTOM CENTER straddling the card's bottom edge, real buttons with
      aria-labels and ≥44px hit areas; inactive 0.8× scale + small shadow /
      active 1.2× scale + larger shadow; click jumps ~1.5s to its slide;
      active thumbnail follows every slide change incl. loop wrap-around;
      first slide active on initial render
- [ ] NO arrow buttons and NO dot bars rendered at any viewport
      (thumbnails are the only navigation)
- [ ] Mobile (<992px): slides stack vertically (image `width: 100%`,
      `height: 300px`, blue text panel below), thumbnail strip stays bottom
      center, no horizontal overflow, ≥44px tap targets
- [ ] Footer: minimal footer linking "Component Dock" →
      https://www.componentdock.com/
