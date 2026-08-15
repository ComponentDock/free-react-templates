# Amalfi (ColorLib Carousel 10) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-amalfi`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 10" — the TENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-10/).
  Single occurrence in TEMPLATES.md (line 717, "Bootstrap Carousels (20)"
  category — no dup rows; no `[x]` row anywhere for carousel-10).
  Recreation uses the NEW name **Amalfi** (tenth of the carousel-series
  renames; lineage: carousel-01 → wanderlust, carousel-02 → faraway,
  carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri,
  carousel-06 → cannes, carousel-07 → positano, carousel-08 → sorrento,
  carousel-09 → ravello, carousel-10 → amalfi — theme: travel /
  destinations; the name is thematic, the content is a full-bleed
  travel-photo slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-10/`
  — HTTP 200, 10,294 bytes DOM (fetched 2026-08-15). **Gotcha:** the
  standard path `https://preview.colorlib.com/theme/carousel-10/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under `.../theme/bootstrap/carousel-10/css/`
  (same finding as the Bootstrap Calendars and Carousel 01–09 preps).
- **What this demo IS:** a WHITE single-section FULL-BLEED IMAGE carousel
  WITH CAPTIONS — ONE `.ftco-section` (padding 7em 0), no navbar, no hero,
  no footer. Centered near-black heading "Carousel #10" (`.heading-section`,
  28px, mb-5 pb-md-4) above `.slider-hero > .featured-carousel.owl-carousel`
  with THREE `.item` slides, each `.work` > `.img` — a full-width 600px-tall
  cover-centered background-image slide (RADIUS 10px, overflow hidden, soft
  shadow, plain 30% BLACK overlay) with a centered `.text > h2` CAPTION.
  Below: `ul.thumbnail` — THREE CIRCULAR thumbnails straddling the hero's
  bottom edge, the ONLY navigation. NOT the image-only slider of Carousel
  09 (Ravello — no captions, gradient vignette, arrows+dots+autoplay) and
  NOT a card grid — do NOT copy those requirements.
- **Carousel config (`js/main.js`):**
  `$('.featured-carousel').owlCarousel({ animateOut: 'fadeOut', center:
false, items: 1, loop: true, stagePadding: 0, margin: 0, smartSpeed:
1500, autoplay: false, dots: false, nav: false, navText: ['<span
class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'] })`
  — **ONE slide per view at ALL breakpoints (1/1/1; NO responsive
  block)**, **LOOP ON**, **NO AUTOPLAY**, **NO DOTS, NO NAV ARROWS** (the
  navText spans are dead config — `nav: false`), **CROSS-FADE OUT** at
  **1,500ms smartSpeed** (recreate as-is — NOT the 15s of Carousel 09).
  **Thumbnail nav:** `$('.thumbnail li').click(...)` →
  `owl.trigger('to.owl.carousel', [slide_index, 1500])`; `changed` event →
  remove all `active`, add to `eq(event.item.index - 2)` — **the `-2` is
  Owl's loop-clone offset; in React track the active index directly (no
  offset).** First `<li>` hardcoded `active` in the HTML.
- **Slide (`.work .img`, ×3):** `width: 100%; height: 600px; position:
relative; z-index: 0; border-radius: 10px; overflow: hidden;`
  cover-centered bg image (inline `style="background-image:
url(images/slider-N.jpg)"`); `box-shadow: 0px 20px 35px -30px
rgba(0,0,0,0.26)`; `::after` — `position: absolute; inset: 0; content:
''; z-index: -1; background: #000; opacity: .3` — a PLAIN 30% BLACK
  overlay (NOT the bottom gradient of Carousel 09).
- **Caption (`.work .text h2`, ×3):** centered flex-over the photo
  (`.img` is d-flex align-items-center justify-content-center):
  "Discover New Places" / "Dream Destination" / "Travel Exploration" —
  `font-size: 60px` (40px ≤991.98px), `font-weight: 200` (LIGHT Poppins —
  load weight 200!), `color: #fff`, `text-transform: uppercase`. The
  `.work .text span` CSS (12px uppercase grey kicker) is an UNUSED
  leftover — no span in the DOM, skip it.
- **Thumbnails (`ul.thumbnail`):** `list-style: none; padding: 0; margin:
0; position: absolute; bottom: 0; left: 50%; transform: translateY(50%)
translateX(-50%); z-index: 99; width: 100%;` — positioned against
  `.slider-hero` (`position: relative`): the strip STRADDLES the hero's
  bottom edge (top half over the photo, bottom half below). `li` inline-
  block; `a` display block, margin 4px; `img` — `width: 80px` (50px
  ≤767.98px), `border-radius: 50%` (CIRCULAR), `transform: scale(0.8)`,
  `transition: .3s all ease`, `box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2)`.
  **Active:** `border: 4px solid #fff; transform: scale(1.1); box-shadow:
0 10px 20px 0 rgba(0,0,0,0.2)`. First li has classes `active img` (the
  `img` class is harmless leftover).
- **Accent color:** `#ff5959` (RED/coral) — `a { color: #ff5959 }` (family
  tail), visible only on the footer link in this demo; the visible page is
  otherwise monochrome (white page, near-black heading, white captions over
  photos). The owl-dots/nav CSS (white arrows, `#ff5959` active dot) is
  family leftover — NOT rendered (`nav: false`, `dots: false`). Do NOT
  render arrows or dots.
- **Fonts:** Poppins body (14px, lh 1.8, weight normal, color #212529) +
  headings (line-height 1.5, weight 400, near-black) — weights 200–900
  inlined via cf-fonts in the source head. Load Poppins 200 + 400 (+500/600
  as needed) via Google Fonts. NO serif.
- **Fidelity exception:** source forces `body { min-width: 992px
!important; }` (13 occurrences — desktop-only demo artifact). Recreation
  MUST be responsive (slides ~300–400px tall on mobile, caption ~40px,
  thumbnails ~50px, no forced min-width) — mobile support is a monorepo
  hard requirement.
- **Slide images (reference only — NOT copied):** `slider-1.jpg`
  (2000×1334 — luxury resort: curved infinity pool, palm trees, loungers,
  ocean, cloudy sky; "Discover New Places"), `slider-2.jpg` (2000×1335 —
  resort pool deck: turquoise pool, white modern building, loungers +
  beige umbrellas, palms; "Dream Destination"), `slider-3.jpg` (2000×1216 —
  beach: white high-rise hotels, sandy beach with umbrellas, turquoise
  water; "Travel Exploration"). Thumbnails `thumb-1..3.jpg` (400×400
  SQUARES — circular crops of the same scenes). Recreation: travel/resort
  picsum seeds, screened per the replication skill (verified coastal
  candidate: picsum id 1055; screen landscape ids 1015/1016/1018/1036/
  1039; slide seed shape `https://picsum.photos/seed/amalfi-<n>/2000/1334`,
  thumb seed the SAME seed at `/400/400` square).

## Section-by-section fidelity notes (structure order 1:1)

1. **Section `.ftco-section`** — `py-[7em]` on WHITE page bg. Center via a
   `.container`-style max-width wrapper.
2. **Heading** — `h2` "Carousel #10" (or "Featured Destinations"
   paraphrase): 28px, Poppins, near-black, centered, `mb-12` (~3rem) +
   `pb-6` at ≥768px.
3. **Carousel hero `.slider-hero`** — `position: relative` wrapper around
   the carousel; it is the positioning context for the thumbnail strip.
4. **Slides `.work .img` (×3)** — full-width 600px-tall cover images
   (mobile: ~300–400px) with `border-radius: 10px` + overflow hidden, soft
   downward shadow (`0px 20px 35px -30px rgba(0,0,0,0.26)`), plain 30%
   BLACK overlay, and centered caption h2 (Poppins 200, white, uppercase,
   60px → 40px mobile); travel/resort picsum seeds with descriptive alt
   text.
5. **Caption text** — "Discover New Places" / "Dream Destination" /
   "Travel Exploration" (or same-kind travel phrases).
6. **Thumbnail strip `ul.thumbnail`** — the ONLY navigation: three
   circular 80px thumbs (50px mobile) absolutely positioned at
   `bottom: 0; translateY(50%)` of the hero — half over the photo, half
   below; scale 0.8 idle; active = 4px white border + scale 1.1; click →
   cross-fade to that slide (~1.5s); active thumb syncs with the slide
   (loop-safe index mapping).
7. **Footer** — monorepo mandate: minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer).

## Implementation task outline

- [ ] Scaffold `apps/amalfi` (copy simplest existing app; package
      `@free-react-templates/amalfi`; `public/CNAME` =
      `amalfi.free.componentdock.com`; homepage
      `https://amalfi.free.componentdock.com`); root `npm install` +
      lockfile check (`grep -c "free-react-templates/amalfi"`
      package-lock.json); `vite.config.ts` keeps `injectUiSource()`
- [ ] index.html: Google Fonts Poppins link — MUST include weight 200 (the
      caption weight); no ColorLib assets/strings anywhere in the app
- [ ] `src/index.css` `@theme`: white page bg, Poppins family token,
      brand token `#ff5959` (footer link only — visible page is otherwise
      monochrome)
- [ ] Components (mirror existing app patterns, `cn()` from packages/ui):
      `App.tsx` (section + footer), `ImageCarousel.tsx` (1-per-view at all
      breakpoints, loop, cross-fade ~1.5s, NO autoplay/arrows/dots),
      `Slide.tsx` (full-bleed cover image, radius 10px, shadow, 30% black
      overlay, centered uppercase weight-200 caption, alt text),
      `ThumbnailStrip.tsx` (three circular thumbs straddling the hero's
      bottom edge, active = white border + scale 1.1, click → jump, active
      sync)
- [ ] Tests (TDD, 100% coverage): three slides render (full-width, 600px
      desktop / ~300–400px mobile, cover, radius 10px, shadow, black
      overlay, alt text), captions (centered, weight 200, white,
      uppercase, 60px/40px), 1-per-view at all breakpoints, loop
      wrap-around, cross-fade transition, NO autoplay/arrows/dots,
      thumbnail strip (straddle position, circular, 80px/50px, scale 0.8,
      active styling), thumbnail click → slide jump + active sync
      (loop-safe), mobile reachability, footer link
- [ ] `npm run verify:app -- amalfi`; commit `feat: add Amalfi
    (ColorLib Carousel 10) template`; PR + immediate squash merge; deploy
      check https://amalfi.free.componentdock.com
- [ ] Bookkeeping on merge: `[ ]`→`[x]` for Carousel 10 in TEMPLATES.md +
      surge URL, `npm run readme:status`
