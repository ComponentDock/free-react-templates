# Tropea (ColorLib Carousel 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-tropea`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 15" — the FIFTEENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-15/).
  Single occurrence in TEMPLATES.md (line 722, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Tropea**
  (fifteenth of the carousel-series renames; lineage: carousel-01 →
  wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 →
  lido, carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
  carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
  carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
  carousel-14 → taormina, carousel-15 → tropea — theme: travel /
  destinations; the name is thematic, the content is a testimonial slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-15/`
  — HTTP 200, 18,493 bytes DOM (fetched + rendered 2026-08-15). **Gotcha:**
  the standard path `https://preview.colorlib.com/theme/carousel-15/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under `.../theme/bootstrap/carousel-15/css/` (same
  finding as the Bootstrap Calendars and Carousel 01–14 preps).
  Stylesheets: `owl.carousel.min.css` (Owl 2.3.4 base) +
  `bootstrap.min.css` (4.3.1) + `style.css` (3,648 bytes) +
  `fonts/icomoon/style.css` (icon font — never actually used; see below) +
  Roboto (300/400).
- **What this demo IS:** a WHITE single-section TESTIMONIAL slider — ONE
  `.content` wrapper (`padding: 7rem 0`), no navbar, no hero, no footer.
  Centered near-black heading (`.h2.my-5.text-center`, 20px, `#212529`)
  above `.owl-carousel.slide-one-item` with THREE `.testimony-29101`
  `d-md-flex align-items-stretch` slide rows: LEFT `.image` div (inline
  `background-image: images/person_1|2.jpg`, `width: 40%`, cover, centered,
  stretches to panel height) + RIGHT `.text` div (`width: 60%`,
  `padding: 7rem 4rem`, **`background: #007bff`**) containing `blockquote`
  (20px `#fff` weight 300 `line-height: 1.8`, `padding-bottom: 50px`) and
  `.author` (16px `rgba(255,255,255,0.7)`, `letter-spacing: .1rem`,
  absolute bottom). **KEY DIFFERENCES vs Carousel 14 (Taormina) — do NOT
  copy Taormina's requirements:** (1) text panel is BLUE `#007bff` with
  WHITE text (Taormina: gray `#f8f9fa` + gray text); (2) THREE slides
  (Taormina: two); (3) **NO arrows, NO dots, NO autoplay** — the ONLY
  navigation is a strip of THREE circular avatar thumbnails straddling the
  card's bottom edge (Taormina: bar dots + mid-height edge arrows +
  autoplay with hover-pause); (4) author is letter-spaced 16px
  semi-transparent white (Taormina: plain 14px `#212529`); (5) the card has
  `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.1)` (Taormina: none).
- **Carousel config (`js/main.js` — 26 lines, fetched live via the page):**
  `$('.slide-one-item').owlCarousel({ center: false, items: 1, loop: true,
stagePadding: 0, margin: 0, smartSpeed: 1500, autoplay: false, dots:
false, nav: false, navText: ['<span class="icon-keyboard_arrow_left">',
'<span class="icon-keyboard_arrow_right">'] })` — **ONE slide per view at
  ALL breakpoints (1/1/1; NO responsive block)**, **LOOP ON**, **AUTOPLAY
  OFF**, **DOTS OFF**, **NAV OFF** (the `navText` icons + `.owl-nav` CSS are
  dead — arrows never render). Navigation = thumbnails only:
  `$('.thumbnail li')` click → `owl.trigger('to.owl.carousel',
[slide_index, 1500])`; on `changed.owl.carousel`:
  `$('.thumbnail li').eq(event.item.index - 2).addClass('active')` (the `-2`
  is Owl's loop-clone offset — in the recreation just always sync the active
  thumbnail to the visible slide). NO `animateOut` → **HORIZONTAL SLIDE** at
  ~1.5s (`smartSpeed`), confirmed live via the `.owl-stage` translateX
  matrix. Recreate: 1-per-view, loop, ~1.5s horizontal slide, NO autoplay,
  NO arrows, NO dots — clickable avatar thumbnails as the only navigation.
- **Heading copy-paste artifact:** the demo `<title>` AND the visible `h2`
  literally say "Carousel #5" (untouched copy from demo #5; this is demo
  #15 — the screenshot's browser chrome even shows "Carousel #6").
  Recreation SHALL use "Carousel #15" (corrected) or a same-kind paraphrase
  ("Testimonials" / "What People Say").
- **Thumbnails (live computed):** `ul.thumbnail` — `position: absolute;
bottom: 0; left: 50%; transform: translateY(50%) translateX(-50%);
z-index: 99` inside `.slider-92911` (`position: relative`), i.e. HALF
  OVERLAPPING the card's bottom edge, centered. Three `li` (first has
  `class="active"` in the HTML), each `a` (`display: block; margin: 4px`)
  → `img` (`width: 50px; border-radius: 50%; transform: scale(0.8);
box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2); transition: .3s all ease`);
  active: `scale(1.2)` + `box-shadow: 0 10px 20px 0 rgba(0,0,0,0.2)`.
  NOTE: the source's 50px images at 0.8× = ~40px visual — wrap the buttons
  with padding to hit the monorepo ≥44px hit-area minimum. Verified live:
  clicking the middle/right thumbnails switches the slide and moves the
  active state.
- **Slide images:** `person_1.jpg` / `person_2.jpg` — PORTRAIT 1000×1200
  (person_1: young woman, long wavy brown hair, dark hooded jacket, leaning
  on a textured light wall). Slide 3 REUSES person_2.jpg (source sloppiness)
  while the thumbs reference `person_1_sm/2_sm/3_sm.jpg` (SQUARE 490×490;
  person_3_sm is a THIRD person — a man — with no full-size counterpart).
  Recreation: THREE DISTINCT people — cover-cropped portrait per slide +
  matching square avatar per thumbnail (screen picsum seeds per the
  replication skill).
- **Screenshot (carousel-15.jpg, 1200×972):** minimal testimonial-slider
  layout — white page, centered dark "Carousel #5" heading (artifact), card
  with a portrait photo left (young woman, brown hair, dark jacket, light
  textured wall) and a solid BLUE panel right (white Lorem-ipsum quote +
  "— Jean Stephen"), three small circular avatar thumbnails bottom center
  overlapping the card edge (left one larger = active), NO arrows/dots.
  Clean, modern, minimalist, HIGH-CONTRAST (white + vivid blue + white type)
  corporate/portfolio showcase.
- **Mobile (<992px):** slides stack — `.image, .text { width: 100%;
display: block !important }`, `.image` gets `height: 300px`; thumbnail
  strip stays bottom center (translateX centering survives the stack). Match
  this; keep ≥44px tap targets; no horizontal overflow.

## Implementation tasks

- [ ] Copy the simplest existing app → `apps/tropea`; rename package to
      `@free-react-templates/tropea`
- [ ] `public/CNAME` = `tropea.free.componentdock.com`; `"homepage"` =
      `https://tropea.free.componentdock.com` in package.json
- [ ] index.html: Google Fonts Roboto (300/400), title "Tropea"
- [ ] Single-section layout: white page, `py-[7em]` wrapper, centered ~1140px
      container, centered near-black ~20px heading ("Carousel #15" or
      paraphrase — NOT "Carousel #5")
- [ ] Carousel: 3 slides, each 40/60 split — LEFT portrait cover-cropped
      picsum image (portrait-orientation seeds screened per replication
      skill; THREE DISTINCT people) with alt text, RIGHT `#007bff` BLUE text
      panel (`7rem 4rem` padding) with 20px WHITE `#fff` weight-300
      `line-height: 1.8` quote + 16px `rgba(255,255,255,0.7)`
      letter-spaced author line at the bottom (paraphrase + vary
      quotes/authors per slide)
- [ ] Carousel behavior: 1 per view at all breakpoints, loop, ~1.5s
      horizontal slide, NO autoplay (static when idle)
- [ ] Thumbnail navigation: 3 circular avatars (border-radius 50%) at the
      bottom center straddling the card's bottom edge, real buttons +
      aria-labels, ≥44px hit areas; inactive 0.8× + small shadow / active
      1.2× + larger shadow; click jumps ~1.5s to its slide; active thumb
      syncs with every slide change incl. loop wrap; first thumb active on
      initial render
- [ ] NO arrows, NO dots anywhere (source has `nav: false`, `dots: false` —
      thumbnails are the only navigation)
- [ ] Card shadow: `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.1)`
- [ ] Responsive: <992px slides stack (image `width: 100%`, `height:
  300px`, blue panel below), thumbnail strip stays bottom center, no
      horizontal overflow, ≥44px hit areas on mobile
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh tropea`
- [ ] PR: branch `feat/template-tropea`, PR description with source slug,
      preview URL, tokens, renames (esp. "no autoplay/arrows/dots — differs
      from Taormina"); merge immediately
