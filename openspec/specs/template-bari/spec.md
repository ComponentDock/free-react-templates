# Template: Bari (Full-Height Cover Carousel with Caption, Vertical Dots + Autoplay)

## Purpose

Bari is a single-section full-height cover-image carousel template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Carousel 13" website template design
(source: https://colorlib.com/wp/template/carousel-13/), built under a
DIFFERENT name (Bari — the capital of Puglia, an Adriatic port city in
southern Italy, continuing the travel/destinations naming theme of the
"Bootstrap Carousels (20)" series renames) per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **bari** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`carousel-13`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15 against
origin/main, including git history; zero exact hits — the only "bari"
substring in the repo is inside the unrelated `sidebarImg` identifier in
`apps/volt`, not a name). It is the THIRTEENTH of the "Bootstrap Carousels
(20)" series renames (lineage: carousel-01 → wanderlust, carousel-02 →
faraway, carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri,
carousel-06 → cannes, carousel-07 → positano, carousel-08 → sorrento,
carousel-09 → ravello, carousel-10 → amalfi, carousel-11 → santorini,
carousel-12 → portofino, carousel-13 → bari — theme: travel / destinations;
the name is thematic, the content is an editorial photography slider).

Bari lives in `apps/bari` and uses shared components from `packages/ui`
(cn at minimum).

## Design reference (replication findings)

- **Original:** ColorLib "Carousel 13" — the THIRTEENTH of the 20 "Bootstrap
  Carousels" demos. A **FULL-HEIGHT COVER-IMAGE carousel with a CENTERED WHITE
  CAPTION on each slide, VERTICAL DOTS on the right edge and AUTOPLAY** — an
  Owl Carousel "full-screen hero slider" pattern. The page is ONE `.content`
  wrapper (`padding: 7rem 0`) on a WHITE page with a centered near-black
  heading (the demo text is a copy-paste artifact — see note below) above
  `.owl-carousel.owl-1` holding THREE `.media-29121.overlay` slide DIVs, each
  with an inline `background-image` (`images/hero_1.jpg`, `hero_2.jpg`,
  `hero_3.jpg`), `height: 100vh`, `background-size: cover`,
  `background-position: center`, a full-cover `rgba(0,0,0,0.1)` `::before`
  overlay, and a centered white 38px `h2` caption ("Impedit Ipsam Quae
  Natus" — Lorem-ipsum-style placeholder, same on every slide) inside a
  `col-md-7`. **Differs from Carousel 11 (Santorini): the slides are
  COVER-CROPPED background DIVs at 100vh with a subtle dark overlay + centered
  caption (Santorini: plain natural-aspect `img-fluid` images, no overlay, no
  caption); the DOTS are VERTICAL on the right edge at mid-height (Santorini:
  horizontal bottom-center); the ARROWS sit at the BOTTOM CORNERS (Santorini:
  vertically centered at the edges); and AUTOPLAY has NO hover-pause
  (`pauseOnHover: false` — Santorini: hover-pause on).** No navbar, no hero
  band, no footer — the section is the whole page.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-13/`
  (HTTP 200, 17,155 bytes DOM; fetched + rendered 2026-08-15). NOTE: the
  standard preview path `https://preview.colorlib.com/theme/carousel-13/`
  404s — the whole "Bootstrap Carousels" series lives under the
  `/theme/bootstrap/` prefix (same finding as the Bootstrap Calendars and
  Carousel 01–12 preps); stylesheets are likewise under
  `.../theme/bootstrap/carousel-13/css/`. Stylesheets: `css/owl.carousel.min.css`
  (Owl Carousel 2.3.4 base), `css/bootstrap.min.css` (Bootstrap 4.3.1,
  separate file), `css/style.css` (2,722 bytes — the template's custom rules,
  see tokens below), `fonts/icomoon/style.css` (the icon font for the arrow
  glyphs) + Google Roboto (300/400 loaded; Poppins 300/400/500 and Source
  Serif Pro 400/600 @font-face blocks are ALSO loaded in the head but are NOT
  used by style.css — computed styles confirm Roboto everywhere).
  **`css/owl.theme.default.min.css` 404s — NOT present** (the demo relies on
  owl.carousel.min.css's own button reset + the custom `.owl-1` rules in
  style.css for arrow/dot appearance).
- **Carousel driven by `js/main.js` (10 lines):**
  `$('.owl-1').owlCarousel({ loop:true, margin:0, nav:true, items: 1,
smartSpeed: 1000, autoplay: true, pauseOnHover: false, navText:
['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **ONE slide per view at ALL
  breakpoints (1/1/1; NO responsive block → items: 1 everywhere)**, **LOOP
  ON**, **NAV ARROWS ON** (navText are the icomoon keyboard-arrow spans),
  **AUTOPLAY ON** (Owl default ~5s timeout) **with hover-pause OFF**
  (`pauseOnHover: false` — differs from Carousel 11), **DOTS ON** (Owl
  default `dots: true` — not disabled here), **1,000ms `smartSpeed`** and NO
  `animateOut` → the transition is Owl's default **HORIZONTAL SLIDE**
  (confirmed live: `.owl-stage` transform is a translateX matrix). Recreate:
  1-per-view, loop, prev/next arrows, dots, autoplay WITHOUT hover-pause,
  ~1s horizontal slide.
- **Verified live in the browser (2026-08-15):** heading "Carousel #3"
  rendered (20px, near-black `rgb(33,37,41)`, centered); THREE slides; the
  visible slide was a full-height cover photo (577px at the test viewport =
  100vh) with `rgba(0,0,0,0.1)` overlay; caption 38px white Roboto centered;
  `.owl-prev`/`.owl-next` `<button>` elements render with **NO border and
  transparent background** (see fidelity note on the dead debug borders),
  white ~40px icons, positioned `left/right: 20px` at the BOTTOM of the
  carousel (nav wrapper `position: absolute; bottom: 60px; height: 0` →
  arrows sit at the bottom corners; `z-index: 92`); THREE `.owl-dot` buttons,
  each a 7px circle `rgba(255,255,255,0.5)`, active `#fff`, stacked
  VERTICALLY (`display: block`), wrapper `position: absolute; top: 50%;
right: 40px; translateY(-50%)` (mid-height right edge); autoplay advanced
  the slide within ~6s and the active dot followed (a screenshot captured
  with the top dot active, another with the third dot active — autoplay is
  running). The `.owl-stage` used `matrix(1,0,0,1,-4440,0)` → horizontal
  translateX sliding.
- **Screenshot:** `carousel-13.jpg` (AVIF, 1200×972, viewed in browser) —
  minimalist editorial/lifestyle layout on a WHITE page. Top: centered dark
  sans "Carousel #3" heading. Below: ONE large photo slide (the single-slide
  desktop view): a hand in a white sweater holding a paperback book titled
  "GENESIS" with a landscape cover (pink/orange-to-blue gradient sky,
  mountains) against a warm textured beige/tan wall, a blurry dried-plant
  arrangement on the left edge of the frame. Over the image: white caption
  text "Impedit Ipsam Quae Natus" centered, and THREE faint vertical dots on
  the right edge at mid-height (top dot more prominent in the still). No
  arrows visible in the still (autoplay mid-transition), though the live
  render shows them at the bottom corners. Aesthetic: clean, modern,
  whitespace-driven, photography-first editorial style; white page,
  near-black heading, no colored accent in use.
- **Slide images (from the preview, NOT copied — picsum placeholders only):**
  `images/hero_1.jpg`, `images/hero_2.jpg`, `images/hero_3.jpg` —
  editorial/lifestyle photography (the GENESIS-book hand shot is one of
  them), displayed COVER-CROPPED at 100vh (`background-size: cover`), so the
  source images' natural dimensions don't constrain the layout (unlike
  Carousel 11's natural-aspect imgs). The recreation should screen picsum
  seeds for editorial/lifestyle/object-photography subjects (see the
  colorlib-template-replication skill's seed-screening method) and render
  them as full-height cover backgrounds. NOTE: `height: 100vh` on mobile can
  jump with the browser URL bar — prefer `100svh` (or `min-h-[100svh]` with a
  centered caption) in the recreation so the caption stays visible.
- **Stack of the source:** jQuery 3.3.1 + Popper + Bootstrap 4.3.1
  (`css/bootstrap.min.css`) + Owl Carousel 2.3.4 + icomoon icon font
  (keyboard-arrow glyphs) + Google Roboto. The recreation must NOT copy any
  of this — build a pure-React carousel (arrows/dots from lucide-react
  ChevronLeft/ChevronRight, placeholder picsum photos).
- **Fidelity note (heading copy-paste artifact):** the demo heading and
  `<title>` literally read "Carousel #3" — a copy-paste artifact (this is
  demo #13 of the series; the heading text was not updated from an earlier
  demo). The recreation SHALL NOT reproduce the wrong number: use "Carousel
  #13" (corrected) or an equivalent same-kind paraphrase ("Featured Gallery",
  "Editorial Carousel", etc.).
- **Fidelity note (dead debug borders — SKIP):** style.css declares
  `border: 1px solid red` on `.owl-1 .owl-nav .owl-next/.owl-prev` and
  `border: 4px solid blue` on `.owl-next` — obvious leftover debug styles.
  In the live render they do NOT appear: owl.carousel.min.css's reset
  `.owl-carousel .owl-nav button.owl-prev, .owl-carousel .owl-nav
button.owl-next, .owl-carousel button.owl-dot { background: 0 0; color:
inherit; border: none; padding: 0 !important; font: inherit }` has higher
  specificity (0,3,1 vs 0,3,0) and wins (verified via getComputedStyle:
  `border: 0px none`). Do NOT render any borders on the arrows.
- **Fidelity note (icons):** the arrow glyphs are icomoon-font
  `icon-keyboard_arrow_left/right` spans (color #fff, font-size 40px). In
  React use lucide-react `ChevronLeft`/`ChevronRight` (size ~40) colored
  white.
- **Fidelity note (caption):** "Impedit Ipsam Quae Natus" is a
  Lorem-ipsum-style placeholder repeated identically on all three slides. The
  recreation MAY paraphrase it (keep the same kind: a short, centered
  headline per slide) and may vary it per slide for realism — the source's
  exact copy is not meaningful.
- **Fidelity note (responsive):** this demo's small style.css has NO
  `min-width: 992px` force (unlike Carousel 08/09/10) — but the recreation
  MUST still be responsive (single column, slides scale with the viewport,
  arrows/dots stay tappable ≥ 44px hit area on mobile) as a monorepo hard
  requirement.

### Section order (1:1, confirmed from preview DOM)

The whole page is ONE section — no navbar, no hero band, no footer in the
source demo:

1. `.content` — the page wrapper, `padding: 7rem 0` (Tailwind `py-[7em]`),
   on the WHITE page background.
   - `.container` — Bootstrap centered container (max-width 1140px ≥1200px;
     the carousel is NOT full-bleed — it's constrained to the container).
     - `h2.my-5.text-center` — the heading: "Carousel #3" in the demo
       (copy-paste artifact — see note; use "Carousel #13" or paraphrase),
       20px, Roboto, near-black `#212529`, centered, `margin: 3rem 0`
       (`.my-5`).
     - `.owl-carousel.owl-1` — the carousel: THREE slides, each a
       `.media-29121.overlay` DIV:
       - Inline `style="background-image: url('images/hero_N.jpg')"` —
         `height: 100vh; background-size: cover; background-position:
center; background-repeat: no-repeat`.
       - `::before` — full-cover `rgba(0,0,0,0.1)` overlay, `z-index: 1`
         (the darkening that keeps the white caption readable).
       - `.container` (relative, `z-index: 2`, height 100vh) →
         `.row.justify-content-center.align-items-center.text-center`
         (height 100vh) → `.col-md-7` → `h2` caption: 38px, `#fff`, Roboto,
         centered ("Impedit Ipsam Quae Natus").
   - Carousel furniture (rendered):
     - `.owl-nav` — `position: absolute; bottom: 60px; width: 100%` over the
       carousel (height 0); `.owl-prev` at `left: 20px`, `.owl-next` at
       `right: 20px`, both `position: absolute; top: 50%; z-index: 92`,
       transparent background, NO border, white 40px chevron icon inside →
       arrows sit at the BOTTOM CORNERS of the carousel.
     - `.owl-dots` — `position: absolute; top: 50%; right: 40px;
translateY(-50%)`; three `.owl-dot` buttons stacked VERTICALLY
       (`display: block`), each `> span` a 7px circle
       `rgba(255,255,255,0.5)`, margin 4px; the active dot's span is `#fff`.

## Design tokens (from preview stylesheet `css/style.css` + Bootstrap base)

- **Page background:** WHITE (`#fff` — Bootstrap body default; no gray page
  band in this demo).
- **Heading color (page h2):** near-black `#212529` (Bootstrap's default
  body color).
- **Caption color (slide h2):** pure white `#fff`.
- **Slide overlay:** `rgba(0, 0, 0, 0.1)` — very subtle darkening, full-cover,
  `::before` on the slide.
- **Font family:** Roboto (`"Roboto", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) for body AND
  headings — computed styles show Roboto on both the 20px page h2 and the
  38px caption. Load Roboto 300/400 (weights used by the source) via Google
  Fonts `<link>` in `index.html`. (Poppins + Source Serif Pro are loaded by
  the demo head but unused — do NOT load them.)
- **Font sizes:** page h2 20px; slide caption 38px; arrow icons 40px
  (glyph size); body default 16px (Bootstrap).
- **Paragraph color (defined, unused in this demo's DOM):** `#b3b3b3`,
  weight 300 — only needed if the recreation adds descriptive copy.
- **Buttons:** NONE in the source (no CTAs on this template) — do not add
  any.
- **Arrows:** 40×44px hit area (live `getComputedStyle`: width 40px, height
  44px), transparent background, NO border/radius, white glyph, positioned
  20px from the bottom corners.
- **Dots:** 7×7px circles (`border-radius: 50%`), `margin: 4px`, inactive
  `rgba(255,255,255,0.5)`, active solid `#fff`, stacked vertically,
  wrapper at `right: 40px`, mid-height.
- **Spacing rhythm:** `.content` `padding: 7rem 0`; page h2 `.my-5` =
  3rem top/bottom margins; carousel full-height 100vh slides.
- **Radii:** none (no rounded corners anywhere in this demo).
- **Container:** Bootstrap `.container` behavior (max-width 1140px ≥1200px,
  fluid below) — the carousel is centered and container-constrained, NOT
  full-bleed.
- **Dark/light treatment:** LIGHT page with DARK photo slides (cover images
  with a 10% dark overlay); white-on-image caption and controls.

## Requirements

### Requirement: Page composition

The page renders as a single centered section on a white background with a
heading above a full-height carousel, per the source's one-section layout.

#### Scenario: Single section layout

Given the app is loaded, when the page renders, then exactly one content
section is present with generous vertical padding (`py-[7em]`), a white
`#fff` page background, and no navbar, hero band, or footer.

#### Scenario: Section heading

Given the page is rendered, when the user looks above the carousel, then a
centered heading (~20px, Roboto, near-black `#212529`) reads "Carousel #13"
or a same-kind paraphrase (NOT the demo's "Carousel #3" copy-paste
artifact), with ~3rem vertical margins.

### Requirement: Full-height cover slides

The carousel shows three full-viewport-height slides, each a cover-cropped
background image with a subtle dark overlay and a centered white caption.

#### Scenario: Three slides

Given the carousel is rendered, then exactly three slides exist, each
rendered as a full-height (`100svh`/`100vh` — see fidelity note) cover
background image with `background-size: cover` behavior and distinct
descriptive alt text.

#### Scenario: Caption overlay on each slide

Given any slide is displayed, then a subtle `rgba(0,0,0,0.1)` overlay covers
the full slide, and a centered white 38px headline (Roboto) is shown in the
middle of the slide (source: "Impedit Ipsam Quae Natus" placeholder — may be
paraphrased and varied per slide).

### Requirement: Carousel behavior

The carousel shows one slide per view, loops, slides horizontally at ~1s,
and autoplays without hover-pause, matching `js/main.js`.

#### Scenario: One slide per view

Given the carousel is displayed at any viewport width (<600px, 600–999px, or
≥1000px), then exactly one slide is visible at a time.

#### Scenario: Loop

Given the carousel is on the last slide and "next" is triggered, then the
carousel wraps around to the first slide (and vice versa).

#### Scenario: Slide transition

Given a slide change is triggered, then the transition is a ~1s HORIZONTAL
slide (translateX), not a cross-fade.

#### Scenario: Autoplay without hover pause

Given the page is idle, then the carousel advances automatically every ~5s;
and when the pointer hovers the carousel, autoplay does NOT pause
(`pauseOnHover: false` in the source).

### Requirement: Arrow navigation

Two arrow buttons sit at the bottom corners of the carousel and move the
carousel one slide per click.

#### Scenario: Arrows render

Given the carousel is rendered, then a prev arrow is visible at the
bottom-left (~20px from the corner) and a next arrow at the bottom-right,
each a real `<button>` with an aria-label, transparent background, NO
border, and a white ~40px ChevronLeft/ChevronRight lucide icon.

#### Scenario: Click arrows

Given the user clicks the next arrow, then the carousel advances one slide
and the active dot updates; when the user clicks the prev arrow, the
carousel moves back one slide.

### Requirement: Dot navigation

Three dots stacked vertically on the right edge (mid-height) indicate the
current slide and jump to a slide when clicked.

#### Scenario: Dots render

Given the carousel is rendered, then exactly three 7px circular dots are
stacked VERTICALLY at the right edge (~40px from the edge, vertically
centered), inactive dots `rgba(255,255,255,0.5)` and the active dot solid
white; each dot is a real button with an accessible label.

#### Scenario: Click a dot

Given the user clicks a dot, then the carousel jumps to the corresponding
slide and that dot becomes active.

### Requirement: Active dot sync

The active dot always matches the displayed slide, following arrows,
autoplay, and wrap-around.

#### Scenario: Active dot follows slide changes

Given the carousel changes slide by any means (arrow, dot, autoplay, loop
wrap), then the active dot updates to match the newly displayed slide.

### Requirement: Responsive behavior

The template stays usable and unbroken on mobile and desktop.

#### Scenario: Mobile

Given a viewport <600px, then the carousel shows one full-height slide with
no horizontal overflow, the caption stays visible (use `100svh` to avoid
URL-bar jump), and the arrows/dots remain tappable with ≥44px hit areas.

#### Scenario: Desktop

Given a viewport ≥1000px, then the carousel is constrained to the centered
~1140px container, one slide per view, with the caption, arrows, and dots
positioned per the source.

### Requirement: Footer with Component Dock link

Every monorepo template ships a minimal footer linking Component Dock.

#### Scenario: Footer attribution

Given the page is rendered, then a minimal footer links "Component Dock" →
https://www.componentdock.com/.

## Verification checklist

- [ ] `apps/bari` exists; package `@free-react-templates/bari`;
      `public/CNAME` = `bari.free.componentdock.com`; `homepage` =
      `https://bari.free.componentdock.com`
- [ ] index.html loads Google Fonts Roboto (weights 300/400); no
      font/image/icon assets copied from ColorLib
- [ ] No `colorlib.com` / `preview.colorlib.com` strings anywhere in
      `apps/bari` (provenance lives only in this spec, TEMPLATES.md, PR)
- [ ] Single section (`py-[7em]`) on WHITE page background; centered
      near-black heading (~20px, Roboto, ~3rem top/bottom margins) —
      "Carousel #13" or same-kind paraphrase (NOT the demo's "Carousel #3"
      copy-paste artifact); carousel constrained to a centered ~1140px
      container; responsive (no overflow on mobile)
- [ ] Three distinct slides; each a FULL-HEIGHT cover background image
      (`100svh` preferred), subtle `rgba(0,0,0,0.1)` overlay, centered white
      38px caption; descriptive alt text; editorial/lifestyle-subject picsum
      seeds (screened per the replication skill)
- [ ] Carousel: exactly 1 slide per view at <600px / 600–999px / ≥1000px;
      LOOP on; ~1s HORIZONTAL slide transition (NOT cross-fade); autoplay
      ~5s WITHOUT hover-pause; wrap-around works
- [ ] Arrows: prev at bottom-left / next at bottom-right (~20px from the
      corners), transparent bg, NO border, white ~40px chevron icons
      (lucide), real buttons with aria-labels; click moves one slide and
      syncs the active dot
- [ ] Dots: exactly three, stacked VERTICALLY at the right edge mid-height
      (~40px from the right), 7px circles, inactive `rgba(255,255,255,0.5)`
      / active solid white; click jumps to its slide; active dot follows
      arrows/autoplay/wrap-around
- [ ] Mobile: one full-height slide, no horizontal overflow, caption visible
      (svh handling), arrows/dots tappable (≥44px hit area)
- [ ] Footer: minimal footer linking "Component Dock" →
      https://www.componentdock.com/
