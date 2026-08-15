# Template: Taormina (Split Image + Quote Testimonials Carousel, Bottom-Center Bar Dots)

## Purpose

Taormina is a single-section testimonial-slider template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 14" website template design
(source: https://colorlib.com/wp/template/carousel-14/), built under a
DIFFERENT name (Taormina — a hilltop town on the east coast of Sicily, Italy,
famous for its ancient Greek theatre and views of Mount Etna, continuing the
travel/destinations naming theme of the "Bootstrap Carousels (20)" series
renames) per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

New name **taormina** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-14`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main; zero hits, including git history). It is the FOURTEENTH of the
"Bootstrap Carousels (20)" series renames (lineage: carousel-01 → wanderlust,
carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido,
carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
carousel-14 → taormina — theme: travel / destinations; the name is thematic,
the content is a testimonial slider).

Taormina lives in `apps/taormina` and uses shared components from
`packages/ui` (cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 14" — the FOURTEENTH of the 20 "Bootstrap
  Carousels" demos. A **TESTIMONIAL slider**: ONE `.content` wrapper
  (`padding: 7rem 0`) on a WHITE page with a centered near-black 20px heading
  (the demo text is a copy-paste artifact — see note below) above
  `.owl-carousel.slide-one-item` holding TWO `.testimony-29101` slide DIVs,
  each a `d-md-flex align-items-stretch` row split **40% / 60%**: a `.image`
  DIV with an inline `background-image` (`images/person_1.jpg`,
  `person_2.jpg` — portrait photos, `background-size: cover`, centered) on
  the LEFT, and a `.text` panel (`background: #f8f9fa`, `padding: 7rem 4rem`)
  on the RIGHT containing a `blockquote` (18px, light-gray `#b3b3b3`,
  weight 300, `padding-bottom: 50px`) and an `.author` line (14px,
  near-black, absolutely positioned at the bottom of the quote). **Differs
  from Carousel 13 (Bari — full-height cover hero slides with vertical
  right-edge dots): this demo is a SPLIT image+quote panel at natural
  container width (NOT full-viewport-height), with HORIZONTAL BAR dots at
  BOTTOM CENTER and BLACK mid-height edge arrows (Bari: white bottom-corner
  arrows); autoplay here has hover-pause ON (Bari: OFF).** No navbar, no
  hero band, no footer — the section is the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-14/`
  (HTTP 200, 17,244 bytes DOM; fetched + rendered 2026-08-15). NOTE: the
  standard preview path `https://preview.colorlib.com/theme/carousel-14/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix (same finding as the Bootstrap Calendars and
  Carousel 01–13 preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-14/css/`. Stylesheets: `css/owl.carousel.min.css`
  (Owl Carousel 2.3.4 base), `css/bootstrap.min.css` (Bootstrap 4.3.1,
  separate file), `css/style.css` (2,920 bytes — the template's custom rules,
  see tokens below), `fonts/icomoon/style.css` (icon font for the arrow
  glyphs). **`css/owl.theme.default.min.css` 404s — NOT present** (the demo
  relies on owl.carousel.min.css's own button reset + the custom
  `.slide-one-item` rules in style.css for arrow/dot appearance). Roboto
  300/400 is the declared font stack; the live page's `document.fonts`
  confirms Roboto 300/400 loaded (no Google Fonts `<link>` in the demo head
  — ColorLib's demo shell injects it; the recreation loads Roboto 300/400
  via Google Fonts in `index.html` per monorepo convention).
- **Carousel driven by `js/main.js` (fetched live via the page, 13 lines):**
  `$('.slide-one-item').owlCarousel({ center: false, autoplayHoverPause:
true, items: 1, loop: true, stagePadding: 0, margin: 0, smartSpeed: 1500,
autoplay: true, pauseOnHover: false, dots: true, nav: true, navText:
['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **ONE slide per view at ALL
  breakpoints (1/1/1; NO responsive block → items: 1 everywhere)**, **LOOP
  ON**, **NAV ARROWS ON** (navText are the icomoon keyboard-arrow spans),
  **AUTOPLAY ON (~5s Owl default) WITH hover-pause** — note the source sets
  BOTH `autoplayHoverPause: true` (the Owl 2 option, which takes effect)
  and `pauseOnHover: false` (an Owl 1.x option, ignored by Owl 2), so the
  LIVE behavior is hover-pause ON (differs from Bari's `pauseOnHover:
false` only), **DOTS ON**, **1,500ms `smartSpeed`** and NO `animateOut` →
  the transition is Owl's default **HORIZONTAL SLIDE** (confirmed live:
  `.owl-stage` transform is a translateX matrix). Recreate: 1-per-view,
  loop, prev/next arrows, dots, autoplay ~5s WITH hover-pause, ~1.5s
  horizontal slide.
- **Verified live in the browser (2026-08-15):** heading "Carousel #4"
  rendered (20px, near-black `rgb(33,37,41)` = `#212529`, centered, margin
  48px 0 = `.my-5`); TWO slides; the visible slide was the 40/60 split —
  `.image` 444px wide (40%) at the 1110px container, 414px tall,
  `background-size: cover`, `background-position: 50% 50%`; `.text` 666px
  (60%), `background: #f8f9fa`, `padding: 112px 64px` (7rem 4rem);
  blockquote p 18px `#b3b3b3` weight 300 line-height 27px (NOT italic —
  the source does not italicize); `.author` 14px `#212529` weight 400
  `position: absolute; bottom: 0`; `.owl-prev`/`.owl-next` `<button>`s
  render with NO border and transparent background, `position: absolute;
top: 50%; translateY(-50%)` — `left: 20px` / `right: 20px` respectively
  (MID-HEIGHT at the far left/right edges, NOT bottom corners like Bari),
  computed color `#212529` (declared `#000` in style.css), 30px glyph
  (span font-size 30px), 30×35px buttons; TWO `.owl-dot` buttons, each a
  15×3px HORIZONTAL BAR (`border-radius: 0`), `margin: 3px`, inactive
  `rgba(0,123,255,0.4)` / active `#007bff`, wrapper `position: absolute;
bottom: 20px; width: 100%; text-align: center; z-index: 2` (BOTTOM
  CENTER); autoplay advanced the slide and the active dot followed. The
  `.owl-stage` used a translateX matrix → horizontal sliding. `.owl-nav`
  has `display: none` below 992px (arrows are desktop-only in the source).
- **Screenshot:** `carousel-14.jpg` (AVIF, 1200×972, viewed in browser) —
  minimal testimonial-slider layout on a WHITE page. Top: centered dark
  sans "Carousel #4" heading. Below: the carousel card — LEFT a portrait
  photo of a young woman with long wavy brown hair in a dark winter coat
  with a fur-lined hood against a soft out-of-focus gray/white wall; RIGHT
  a very light gray panel with a Lorem-ipsum quote and "— Craig Stephen";
  faint black chevrons at the far left/right edges (mid-height); TWO small
  dots at the bottom center of the panel (left one blue = active, right one
  gray). Aesthetic: clean, modern, minimalist corporate/portfolio
  testimonial showcase; white page, near-black text, light-gray panel; the
  ONLY color accent is the Bootstrap-primary-blue active dot.
- **Slide images (from the preview, NOT copied — picsum placeholders only):**
  `images/person_1.jpg`, `images/person_2.jpg` — PORTRAIT-Orientation
  headshot/lifestyle photos (a young woman in a dark coat), displayed
  COVER-CROPPED in the 40%-width `.image` panel. The recreation should
  screen picsum seeds for portrait-orientation human/headshot subjects (see
  the colorlib-template-replication skill's seed-screening method) and
  render them as cover backgrounds.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (`css/bootstrap.min.css`) + Owl Carousel 2.3.4 + icomoon icon font
  (keyboard-arrow glyphs) + Roboto. The recreation must NOT copy any of
  this — build a pure-React carousel (arrows/dots from lucide-react
  ChevronLeft/ChevronRight, placeholder picsum photos).
- **Fidelity note (heading copy-paste artifact):** the demo heading and
  `<title>` literally read "Carousel #4" — a copy-paste artifact (this is
  demo #14 of the series; the heading text was not updated from an earlier
  demo). The recreation SHALL NOT reproduce the wrong number: use "Carousel
  #14" (corrected) or an equivalent same-kind paraphrase ("Testimonials",
  "What People Say", etc.).
- **Fidelity note (quote copy):** the blockquote text is generic
  Lorem-ipsum placeholder ("Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Temporibus, at! ...") and the author is "— Craig
  Stephen" (identical on both slides). The recreation MAY paraphrase both —
  keep the same kind (a 2–3 sentence testimonial + an author name per
  slide) and SHOULD vary the author/quotes per slide for realism. The
  source's exact copy is not meaningful.
- **Fidelity note (autoplay hover):** the source sets `autoplayHoverPause:
true` AND `pauseOnHover: false`; Owl 2 honors the former (hover-pause
  ON). Recreate hover-pause ON. (Deliberately the OPPOSITE of Bari, where
  hover-pause is OFF — do not copy Bari's requirement.)
- **Fidelity note (mobile arrows):** the source hides `.owl-nav`
  (`display: none`) below 992px — arrows are DESKTOP-ONLY. The recreation
  should match (hide arrows <992px) while keeping dots + swipe navigation
  functional; dots/arrows that remain must have ≥44px hit areas per
  monorepo convention.
- **Fidelity note (responsive):** below 992px the source stacks the slide:
  `.image, .text { width: 100%; display: block !important }` and `.image`
  gets `height: 300px`. The recreation MUST match (single column, 300px
  image on top, text panel below) and must not overflow horizontally.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.content` — the page wrapper, `padding: 7rem 0` (Tailwind `py-[7em]`),
   on the WHITE page background.
   - `.container` — Bootstrap centered container (max-width 1140px ≥1200px;
     the carousel is NOT full-bleed — it's constrained to the container).
     - `h2.my-5.text-center` — the heading: "Carousel #4" in the demo
       (copy-paste artifact — see note; use "Carousel #14" or paraphrase),
       20px, Roboto, near-black `#212529`, centered, `margin: 3rem 0`
       (`.my-5` = 48px computed).
     - `.owl-carousel.slide-one-item` — the carousel: TWO slides, each a
       `.testimony-29101.d-md-flex.align-items-stretch` row:
       - `.image` — inline `style="background-image: url('images/person_N.jpg')"`,
         `width: 40%; background-size: cover; background-position: center
center` (no explicit height — it stretches to the text panel's
         height via `align-items-stretch`; computed 414px at the 1110px
         container).
       - `.text` — `width: 60%; padding: 7rem 4rem; background: #f8f9fa` →
         `blockquote` (`position: relative; padding-bottom: 50px;
font-size: 18px`) → `p` (the quote, `#b3b3b3`, weight 300) +
         `.author` (`font-size: 14px; position: absolute; bottom: 0`).
   - Carousel furniture (rendered):
     - `.owl-nav` — absolute buttons, `top: 50%; translateY(-50%)` over the
       carousel; `.owl-prev` at `left: 20px`, `.owl-next` at `right: 20px`
       (MID-HEIGHT at the far edges), transparent background, NO border,
       black ~30px chevron glyph inside; `display: none` below 992px.
     - `.owl-dots` — `position: absolute; bottom: 20px; width: 100%;
text-align: center; z-index: 2`; TWO `.owl-dot` buttons side by
       side, each `> span` a 15×3px horizontal bar (`border-radius: 0`),
       `margin: 3px`, inactive `rgba(0,123,255,0.4)`, active `#007bff`.

## Design tokens (from preview stylesheet `css/style.css` + Bootstrap base)

- **Page background:** WHITE (`#fff` — Bootstrap body default; no gray page
  band in this demo).
- **Text panel background:** `#f8f9fa` (Bootstrap gray-100) — the RIGHT 60%
  of each slide.
- **Heading color (page h2):** near-black `#212529` (Bootstrap's default
  body color), weight 500.
- **Quote text color:** `#b3b3b3`, weight 300, 18px, line-height 1.5.
- **Author color:** `#212529`, 14px, weight 400.
- **Font family:** Roboto (`"Roboto", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) for body AND
  headings. Load Roboto 300/400 via Google Fonts `<link>` in `index.html`.
- **Font sizes:** page h2 20px; quote 18px; author 14px; arrow glyphs 30px;
  body default 16px.
- **Brand color:** `#007bff` (Bootstrap primary blue) — used ONLY for the
  ACTIVE dot bar.
- **Buttons:** NONE in the source (no CTAs on this template) — do not add
  any.
- **Arrows:** 30×35px hit area (live computed), transparent background, NO
  border/radius, near-black (`#212529` computed / `#000` declared) 30px
  chevron glyph, positioned `left: 20px` / `right: 20px` at MID-HEIGHT
  (`top: 50%; translateY(-50%)`); hidden below 992px.
- **Dots:** 15×3px horizontal bars (`border-radius: 0` — square pills),
  `margin: 3px`, inactive `rgba(0,123,255,0.4)`, active solid `#007bff`,
  side-by-side at BOTTOM CENTER (`bottom: 20px`, centered wrapper).
- **Spacing rhythm:** `.content` `padding: 7rem 0`; page h2 `.my-5` = 3rem
  top/bottom margins; `.text` panel `padding: 7rem 4rem`; blockquote
  `padding-bottom: 50px` (room for the absolute author line).
- **Radii:** none (no rounded corners anywhere in this demo).
- **Container:** Bootstrap `.container` behavior (max-width 1140px ≥1200px,
  fluid below) — the carousel is centered and container-constrained, NOT
  full-bleed.
- **Dark/light treatment:** LIGHT page; each slide is a dark photo panel
  (40%) beside a LIGHT gray text panel (60%); black arrows, blue-accent
  dots.

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
margins) reads "Carousel #14" or a same-kind paraphrase (NOT the demo's
"Carousel #4" copy-paste artifact).

### Requirement: Testimonial slide composition

The carousel SHALL show two slides, each a 40/60 split: a cover-cropped portrait
image panel on the left and a light-gray quote panel on the right.

#### Scenario: Two slides with image + quote split

Given the carousel is rendered, then exactly two slides exist, each split
40% image / 60% text: the image panel is a `background-size: cover`,
centered portrait photo (picsum seed, portrait orientation) with descriptive
alt text, and the text panel has a `#f8f9fa` background with `7rem 4rem`
padding.

#### Scenario: Quote and author

Given any slide is displayed, then its text panel shows a ~18px
light-gray (`#b3b3b3`, weight 300) 2–3 sentence testimonial quote and a
14px near-black author attribution ("— Name") positioned at the bottom of
the quote block (source: Lorem-ipsum + "Craig Stephen" — paraphrase and
vary per slide).

### Requirement: Carousel behavior

The carousel SHALL show one slide per view, loops, slides horizontally at ~1.5s,
and autoplays with hover-pause, matching `js/main.js`.

#### Scenario: One slide per view

Given the carousel is displayed at any viewport width (<600px, 600–999px, or
≥1000px), then exactly one slide is visible at a time.

#### Scenario: Loop

Given the carousel is on the last slide and "next" is triggered, then the
carousel wraps around to the first slide (and vice versa).

#### Scenario: Slide transition

Given a slide change is triggered, then the transition is a ~1.5s
HORIZONTAL slide (translateX), not a cross-fade.

#### Scenario: Autoplay with hover pause

Given the page is idle, then the carousel advances automatically every ~5s;
and when the pointer hovers the carousel, autoplay PAUSES
(`autoplayHoverPause: true` — the Owl 2 option that takes effect; the
source's `pauseOnHover: false` is Owl 1.x and is ignored).

### Requirement: Arrow navigation

Two black arrow buttons SHALL sit at the mid-height far edges of the carousel and
move the carousel one slide per click; they are desktop-only, matching the
source's `display: none` below 992px.

#### Scenario: Arrows render (desktop)

Given the carousel is rendered at ≥992px, then a prev arrow is visible at
the far left edge (mid-height, ~20px inset) and a next arrow at the far
right edge, each a real `<button>` with an aria-label, transparent
background, NO border, and a near-black ~30px ChevronLeft/ChevronRight
lucide icon.

#### Scenario: Click arrows

Given the user clicks the next arrow, then the carousel advances one slide
and the active dot updates; when the user clicks the prev arrow, the
carousel moves back one slide.

#### Scenario: Arrows hidden on mobile

Given a viewport below 992px, then the arrow buttons are not displayed
(matching the source's `.slide-one-item .owl-nav { display: none }`), and
slide navigation still works via the dots and swipe/touch.

### Requirement: Dot navigation

Two horizontal bar dots at the bottom center SHALL indicate the current slide and
jump to a slide when clicked.

#### Scenario: Dots render

Given the carousel is rendered, then exactly two 15×3px horizontal bars
(no rounded corners) are shown side-by-side at the bottom center (~20px
from the bottom of the carousel), inactive dots `rgba(0,123,255,0.4)` and
the active dot solid `#007bff`; each dot is a real button with an
accessible label.

#### Scenario: Click a dot

Given the user clicks a dot, then the carousel jumps to the corresponding
slide and that dot becomes active.

### Requirement: Active dot sync

The active dot SHALL always match the displayed slide, following arrows,
autoplay, and wrap-around.

#### Scenario: Active dot follows slide changes

Given the carousel changes slide by any means (arrow, dot, autoplay, loop
wrap), then the active dot updates to match the newly displayed slide.

### Requirement: Responsive behavior

The template SHALL stay usable and unbroken on mobile and desktop.

#### Scenario: Mobile

Given a viewport <992px, then each slide stacks vertically (image panel
`width: 100%` with `height: 300px`, text panel `width: 100%` below it),
arrows are hidden, the dots remain tappable with ≥44px hit areas, and there
is no horizontal overflow.

#### Scenario: Desktop

Given a viewport ≥1000px, then the carousel is constrained to the centered
~1140px container, one slide per view with the 40/60 image/quote split,
arrows at the mid-height edges, and dots at the bottom center, positioned
per the source.

### Requirement: Footer with Component Dock link

Every monorepo template SHALL ship a minimal footer linking Component Dock.

#### Scenario: Footer attribution

Given the page is rendered, then a minimal footer links "Component Dock" →
https://www.componentdock.com/.

## Verification checklist

- [ ] `apps/taormina` exists; package `@free-react-templates/taormina`;
      `public/CNAME` = `taormina.free.componentdock.com`; `homepage` =
      `https://taormina.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300/400); no
      font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/taormina` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered
      near-black heading (~20px, Roboto, ~3rem top/bottom margins) —
      "Carousel #14" or same-kind paraphrase (NOT the demo's "Carousel #4"
      copy-paste artifact); carousel constrained to a centered ~1140px
      container; responsive (no overflow on mobile)
- [ ] TWO slides; each a 40/60 split: portrait cover-cropped picsum image
      (screened per the replication skill) with alt text + `#f8f9fa` text
      panel (`7rem 4rem` padding) with an 18px `#b3b3b3` weight-300 quote
      and a 14px `#212529` author line at the bottom of the quote block
      (quotes/authors paraphrased and varied per slide)
- [ ] Carousel: exactly 1 slide per view at <600px / 600–999px / ≥1000px;
      LOOP on; ~1.5s HORIZONTAL slide transition (NOT cross-fade); autoplay
      ~5s WITH hover-pause; wrap-around works
- [ ] Arrows: prev at far-left / next at far-right edge, MID-HEIGHT
      (`top: 50%; translateY(-50%)`, ~20px inset), transparent bg, NO
      border, near-black ~30px chevron icons (lucide), real buttons with
      aria-labels; click moves one slide and syncs the active dot; hidden
      below 992px (dots + swipe still navigate)
- [ ] Dots: exactly two 15×3px HORIZONTAL BARS at BOTTOM CENTER (~20px
      from the bottom), no rounded corners, inactive
      `rgba(0,123,255,0.4)` / active `#007bff`; click jumps to its slide;
      active dot follows arrows/autoplay/wrap-around
- [ ] Mobile (<992px): slides stack vertically (image `width: 100%`,
      `height: 300px`, text panel below), arrows hidden, no horizontal
      overflow, dots tappable (≥44px hit area)
- [ ] Footer: minimal footer linking "Component Dock" →
      https://www.componentdock.com/
