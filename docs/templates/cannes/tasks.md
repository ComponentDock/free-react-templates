# Cannes (ColorLib Carousel 06) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cannes`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 06" — the SIXTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-06/).
  Single occurrence in TEMPLATES.md (line 713, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Cannes** (sixth of
  the carousel-series renames; lineage from the Wanderlust prep:
  carousel-01 → wanderlust, carousel-02 → faraway, carousel-03 → fjord,
  carousel-04 → lido, carousel-05 → capri, carousel-06 → cannes — theme:
  travel / destinations; the name is thematic, the content is an editorial
  fashion-collection slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-06/`
  — HTTP 200, 12,184 bytes DOM (fetched 2026-08-15). **Gotcha:** the standard
  path `https://preview.colorlib.com/theme/carousel-06/` 404s — the Bootstrap
  series is served under the `/theme/bootstrap/` prefix, and its stylesheets
  live under `.../theme/bootstrap/carousel-06/css/` (same finding as the
  Bootstrap Calendars and Carousel 01–05 preps).
- **What this demo IS:** a WHITE single-section EDITORIAL FASHION carousel —
  ONE `.ftco-section` (padding 7em 0), no navbar, no hero, no footer.
  Centered BLACK heading "Carousel #06" (`.heading-section`, 28px, #000,
  mb-5) above `.featured-carousel.owl-carousel` with FOUR `.item` slides,
  each a 50/50 split-screen "work wrap": pale-pink text panel (`#fff3f1`)
  - tall fashion photo. NOT a testimonials slider — do NOT copy Capri's
    (Carousel 05) requirements.
- **Carousel config (`js/main.js`):**
  `$('.featured-carousel').owlCarousel({ loop: true, autoplay: true,
margin: 30, animateOut: 'fadeOut', animateIn: 'fadeIn', nav: true,
dots: true, autoplayHoverPause: false, items: 1,
navText: ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>",
"<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } } })`
  — **ONE slide per view at ALL breakpoints** (differs from Capri's 1/2/3),
  **LOOP ON**, **AUTOPLAY ON** (~5s default, hover-pause OFF), cross-fade,
  **ARROWS ON** (custom Prev/Next with round icons, bottom-center), dots ON
  (vertical on the right edge at ≥992px, centered below otherwise).
- **Slide (`.work-wrap.d-md-flex`, ×4):** flex row at ≥768px, stacked below.
  - `.img.order-md-last` (photo): 50% width, 700px tall, cover bg image
    (`images/work-1.jpg` … `work-4.jpg` — fashion portraits). On the RIGHT
    at ≥768px; on TOP (DOM-first) below 768px.
  - `.text.text-left.text-lg-right.p-4.px-xl-5.d-flex.align-items-center`
    (panel): 50% width (100% < 768px), `background: #fff3f1`, padding
    1.5rem + 3rem horizontal at ≥1200px, vertically centered, text LEFT
    < 992px / RIGHT ≥992px.
    - `.desc.w-100` > `h2.mb-4`: UPPERCASE headline, 60px (40px
      ≤991.98px), weight 800, #000. Source: "Define Your Budget", "Kids
      Collection", "Ladies Collection", "Ladies Collection" — use FOUR
      DISTINCT (e.g. "Men's Collection" for the 4th).
    - `p.h5` "Call: 0123 456 78901" + `p.h5.mb-4` "Email Address:
      email@info.com" (20px, Poppins, #000).
    - `.row.justify-content-end` > `.col-xl-8`: gray blurb paragraph
      (Poppins 14px/1.8, paraphrased per slide) + buttons:
      `btn btn-outline-dark mb-2 py-3 px-4` "Shop the collection" (note:
      the source button literally contains the word "Outline" — drop it)
      and `btn btn-dark mb-2 py-3 px-4` "Learn More".
- **Nav (`.owl-nav`):** absolute bottom strip (bottom 0, left/right 0);
  buttons at left 50% / right 50% (offset ±35px), `margin-top: 60px`
  (below the slide); inner `small` UPPERCASE "Prev"/"Next" (block, #000,
  line-height .8) + round arrow icon (lucide ChevronLeft/Right in the
  recreation).
- **Dots (`.owl-dots`):** base — centered, margin-top 20px; 10×10px
  circles, margin 5px, radius 50%, transparent fill, `border: 1px solid
#000`; active `background: #ffc6be; border-color: #ffc6be`. At ≥992px —
  absolute `top: 0; right: 0; margin-right: -40px`, `display: block`
  (VERTICAL column on the right edge). Four slides → four dots.
- **Buttons:** Bootstrap .btn — radius .25rem, `py-3 px-4` (1rem 1.5rem),
  mb-2. `.btn-dark`: #343a40 bg / #fff text (hover #23272b);
  `.btn-outline-dark`: transparent / 1px #343a40 border (hover fills
  #343a40, white text).
- **Fonts:** Poppins for body (14px, lh 1.8, gray) and headings (h1–h5:
  #000, lh 1.2, weight 400). Load Poppins 300/400/500/700 via Google Fonts.
- **Fidelity exception:** source forces `body { min-width: 992px
!important; }` (14 occurrences — desktop-only demo artifact). Recreation
  MUST be responsive (split stacks below 768px) — do not force a min-width.
- **Placeholder content:** ALL four slides repeat the same sentence, the
  same contact lines, and the 4th repeats the 3rd headline. Recreation:
  paraphrase 4 distinct headlines, blurbs, and keep contact lines same-kind
  (or vary slightly); use screened portrait picsum seeds for the photo
  panel (`https://picsum.photos/seed/cannes-<n>/900/1400`, skill-verified
  person IDs: 1027, 64, 823, 996).

## Section-by-section fidelity notes (structure order 1:1)

1. **Section `.ftco-section`** — `py-[7em]` on WHITE page bg. Center via a
   `.container`-style max-width wrapper.
2. **Heading** — `h2` "Carousel #06" (or "The Collection" paraphrase):
   28px, Poppins, `#000`, centered, `mb-12` (~3rem). Black on white —
   the whole page reads dark-on-white (NOT white-on-green like Capri).
3. **Carousel `.featured-carousel`** — 4 slides, 30px gutter, fade
   transition, ONE per view at all breakpoints, LOOP on, autoplay ~5s
   (pause under reduced motion), Prev/Next arrows bottom-center, four
   dots (vertical right edge at ≥992px, centered below).
4. **Slide `.work-wrap`** — flex row ≥768px: text panel 50% LEFT on
   `#fff3f1` (right-aligned content ≥992px, `px-xl-5` at ≥1200px) + photo
   50% RIGHT (700px tall, cover). Stacked <768px: photo on top (DOM
   order), text below, both 100%.
5. **Text panel content** — uppercase headline 60px/800/#000 (40px
   ≤992px), contact lines (.h5: 20px #000), gray blurb, two buttons
   (outline "Shop the Collection" + dark "Learn More", radius .25rem,
   `py-3 px-4`).
6. **Footer** — monorepo mandate: minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer).

## Implementation task outline

- [ ] Scaffold `apps/cannes` (copy simplest existing app; package
      `@free-react-templates/cannes`; `public/CNAME` =
      `cannes.free.componentdock.com`; homepage
      `https://cannes.free.componentdock.com`); root `npm install` +
      lockfile check (`grep -c "free-react-templates/cannes"
    package-lock.json`); `vite.config.ts` keeps `injectUiSource()`
- [ ] index.html: Google Fonts Poppins 300/400/500/700 link; no ColorLib
      assets/strings anywhere in the app
- [ ] `src/index.css` `@theme`: brand tokens `#fff3f1` (text panel),
      `#ffc6be` (active dot), `#343a40` (dark button); white page bg
- [ ] Components (mirror existing app patterns, `cn()` from packages/ui):
      `App.tsx` (section + footer), `CollectionCarousel.tsx` (loop +
      autoplay + fade + arrows + dots, vertical-dots variant ≥992px),
      `CollectionSlide.tsx` (split layout + text panel content)
- [ ] Tests (TDD, 100% coverage): four slides render, split vs stacked
      layout at breakpoints, alignment shift (right ≥992px / left below),
      one-per-view at all breakpoints, loop wrap-around, dot jump + active
      tracking, autoplay advance + reduced-motion pause, cross-fade, arrow
      navigation, mobile/desktop token differences, footer link
- [ ] `npm run verify:app -- cannes`; commit `feat: add Cannes (ColorLib
  Carousel 06) template`; PR + immediate squash merge; deploy check
      https://cannes.free.componentdock.com
- [ ] Bookkeeping on merge: `[ ]`→`[x]` for Carousel 06 in TEMPLATES.md +
      surge URL, `npm run readme:status`
