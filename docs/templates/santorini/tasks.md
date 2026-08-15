# Santorini (ColorLib Carousel 11) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-santorini`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 11" — the ELEVENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-11/).
  Single occurrence in TEMPLATES.md (line 718, "Bootstrap Carousels (20)"
  category — no dup rows; no `[x]` row anywhere for carousel-11).
  Recreation uses the NEW name **Santorini** (eleventh of the carousel-series
  renames; lineage: carousel-01 → wanderlust, carousel-02 → faraway,
  carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri,
  carousel-06 → cannes, carousel-07 → positano, carousel-08 → sorrento,
  carousel-09 → ravello, carousel-10 → amalfi, carousel-11 → santorini —
  theme: travel / destinations; the name is thematic, the content is an
  editorial photography slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-11/`
  — HTTP 200, 16,338 bytes DOM (fetched + rendered 2026-08-15). **Gotcha:**
  the standard path `https://preview.colorlib.com/theme/carousel-11/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under `.../theme/bootstrap/carousel-11/css/` (same
  finding as the Bootstrap Calendars and Carousel 01–10 preps).
  **`css/owl.theme.default.min.css` 404s — NOT present**; the demo uses
  `owl.carousel.min.css` (3,351 bytes) + `bootstrap.min.css` (4.3.1) +
  `style.css` (2,101 bytes) + `fonts/icomoon/style.css` + Google Roboto.
- **What this demo IS:** a WHITE single-section FULL-WIDTH IMAGE carousel
  with ARROWS + DOTS + AUTOPLAY — ONE `.content` wrapper (`padding: 7rem 0`),
  no navbar, no hero, no footer. Centered near-black heading
  (`.h2.my-5.text-center`, 20px) above `.owl-carousel.owl-1` with THREE plain
  `<div><img class="img-fluid">` slides (`images/hero_1..3.jpg`, 1900×1150
  each). NOT the caption-overlay slider of Carousel 10 (Amalfi — captions,
  30% black overlay, 600px cover slides, circular-thumbnail-only nav, no
  autoplay) and NOT a card grid — do NOT copy those requirements.
- **Carousel config (`js/main.js`):**
  `$('.owl-1').owlCarousel({ loop:true, margin:0, nav:true, items: 1,
smartSpeed: 1000, autoplay: true, autoplayHoverPause: true, navText:
['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **ONE slide per view at ALL
  breakpoints (1/1/1; NO responsive block)**, **LOOP ON**, **NAV ARROWS ON**,
  **AUTOPLAY ON (~5s Owl default) with HOVER-PAUSE**, **DOTS ON** (Owl
  default `dots: true` — not disabled, unlike Carousel 10), **1,000ms
  smartSpeed**, NO `animateOut` → **HORIZONTAL SLIDE** transition (confirmed
  live: `.owl-stage` translateX matrix). Recreate: 1-per-view, loop,
  prev/next arrows, dots, autoplay-with-hover-pause, ~1s horizontal slide.
- **Heading copy-paste artifact:** the demo `<title>` AND the visible `h2`
  literally say "Carousel #1" (untouched copy from demo 01; this is demo
  #11). Recreation SHALL use "Carousel #11" (corrected) or a same-kind
  paraphrase ("Featured Gallery" / "Editorial Carousel").
- **Dead debug borders — SKIP:** style.css has `border: 1px solid red` on
  both arrow buttons and `border: 4px solid blue` on `.owl-next` — leftover
  debug styles. The live render shows NO borders: owl.carousel.min.css's
  reset `.owl-carousel .owl-nav button.owl-next, ... button.owl-prev,
... button.owl-dot { background: 0 0; color: inherit; border: none;
padding: 0 !important; font: inherit }` wins on specificity (0,3,1 vs
  0,3,0; verified `getComputedStyle` → `border: 0px none`). Do NOT render
  arrow borders.
- **Slides (`<div><img>`, ×3):** plain `img-fluid` images — `max-width:
100%; height: auto`, natural aspect ratio (1900×1150, ~1.65:1). NO fixed
  height, NO overlay, NO caption, NO rounded corners. Alt text "Image" in
  the source — recreation SHALL use descriptive alt per a11y conventions.
- **Arrows (`.owl-1 .owl-nav`):** wrapper `width: 100%; position: absolute;
top: 50%`. Buttons `position: absolute; top: 50%; z-index: 92`,
  `left/right: 20px`, transparent bg, NO border; icon span `color: #fff`,
  `font-size: 40px !important` (icomoon `icon-keyboard_arrow_left/right`).
  Recreation: lucide ChevronLeft/ChevronRight ~40px white, real `<button>`
  with aria-labels, left/right 20px, vertically centered.
- **Dots (`.owl-1 .owl-dots`):** `position: absolute; bottom: 40px; left:
50%; transform: translateX(-50%)`; `.owl-dot` `background: none; display:
inline-block`; `> span` — 10px circle `rgba(255,255,255,0.5)`, margin 4px;
  **active `> span` `background: white`**. Recreation: three `<button>` dots,
  ~10px circles, active solid white, click → jump to slide, aria-labels.
- **Accent color:** NONE in use — no brand-colored element renders (this
  small stylesheet has no `#ff5959` link rule, unlike the wider family).
  Visible page is monochrome: white page, near-black heading, white
  arrows/dots over photos.
- **Fonts:** **Roboto** (NOT Poppins — this demo's body + heading rule both
  use the Roboto stack): body 16px/lh 1.5/w400 `#212529` (Bootstrap
  defaults), heading h2 20px w500, paragraphs `#b3b3b3` w300 (none in this
  demo). Load Roboto 300/400/500 via Google Fonts. NO serif.
- **Fidelity note (responsive):** this demo has NO `min-width: 992px` force
  (unlike Carousel 08/09/10) — but the recreation MUST still be responsive
  (images scale with the container, arrows/dots tappable ≥44px) — mobile
  support is a monorepo hard requirement.
- **Slide images (reference only — NOT copied):** `hero_1.jpg`, `hero_2.jpg`,
  `hero_3.jpg` (all 1900×1150) — editorial/lifestyle photography (hero_2 is
  the hand holding a "GENESIS" book, the slide the screenshot shows).
  Recreation: picsum placeholder editorial photos, seeds screened per the
  replication skill (screen landscape ids 1015/1016/1018/1036/1039; seed
  shape `https://picsum.photos/seed/santorini-<n>/1900/1150`), rendered at
  natural aspect ratio (NOT cover-cropped).

## Section-by-section fidelity notes (structure order 1:1)

1. **Section `.content`** — `py-[7em]` on WHITE page bg. Center via a
   `.container`-style max-width wrapper (~1140px).
2. **Heading** — `h2` "Carousel #11" (corrected — NOT the demo's "Carousel
   #1" copy-paste artifact; or paraphrase "Featured Gallery"): 20px, Roboto,
   near-black, centered, `my-12` (~3rem top/bottom).
3. **Carousel `.owl-carousel.owl-1`** — `position: relative` wrapper (the
   positioning context for the arrows/dots overlays). One slide per view at
   all breakpoints.
4. **Slides (×3)** — plain full-width `img` at natural aspect ratio (NO
   fixed height, NO overlay, NO caption, NO rounded corners); descriptive
   alt text; editorial/lifestyle picsum seeds.
5. **Arrows** — prev at left 20px / next at right 20px, vertically centered,
   transparent bg, NO border, white ~40px lucide chevrons, z-index above
   slides; click → one slide (loop).
6. **Dots** — three, centered `bottom: 40px`, 10px circles,
   `rgba(255,255,255,0.5)` inactive / white active; click → jump; active dot
   follows all slide changes (arrows, dots, autoplay, wrap-around).
7. **Autoplay** — ~5s interval, hover-pause; ~1s horizontal slide
   transition (translateX, NOT cross-fade).
8. **Footer** — monorepo mandate: minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer).

## Implementation task outline

- [ ] Scaffold `apps/santorini` (copy simplest existing app; package
      `@free-react-templates/santorini`; `public/CNAME` =
      `santorini.free.componentdock.com`; homepage
      `https://santorini.free.componentdock.com`); root `npm install` +
      lockfile check (`grep -c "free-react-templates/santorini"`
      package-lock.json); `vite.config.ts` keeps `injectUiSource()`
- [ ] index.html: Google Fonts Roboto link (weights 300/400/500); no
      ColorLib assets/strings anywhere in the app
- [ ] `src/index.css` `@theme`: white page bg, Roboto family token; NO brand
      accent color (the visible page is monochrome — white/near-black/photos)
- [ ] Components (mirror existing app patterns, `cn()` from packages/ui):
      `App.tsx` (section + footer), `ImageCarousel.tsx` (1-per-view at all
      breakpoints, loop, ~1s horizontal slide, autoplay ~5s with
      hover-pause), `Slide.tsx` (plain full-width img at natural aspect
      ratio, descriptive alt, no overlay/caption), `CarouselArrows.tsx`
      (prev/next at left/right 20px, vertically centered, transparent, no
      border, white lucide chevrons ~40px, aria-labels), `CarouselDots.tsx`
      (three 10px circle buttons, inactive `rgba(255,255,255,0.5)` / active
      white, click → jump, aria-labels, active sync)
- [ ] Tests (TDD, 100% coverage): three slides render (full container width,
      natural aspect ratio, no overlay/caption/radius, alt text), heading
      (20px, centered, ~3rem margins, "Carousel #11" or paraphrase),
      1-per-view at all breakpoints, loop wrap-around, ~1s horizontal slide
      (translateX flavor), autoplay advances ~5s + hover pauses/resumes,
      arrows (positions, transparent, NO border, chevron icons, aria-labels,
      click moves one slide + dot sync), dots (three, centered bottom 40px,
      sizes/colors, active styling, click jump, sync with arrows/autoplay/
      wrap-around), mobile (no overflow, tappable ≥44px), footer link
- [ ] `npm run verify:app -- santorini`; commit `feat: add Santorini
  (ColorLib Carousel 11) template`; PR + immediate squash merge; deploy
      check https://santorini.free.componentdock.com
- [ ] Bookkeeping on merge: `[ ]`→`[x]` for Carousel 11 in TEMPLATES.md +
      surge URL, `npm run readme:status`
