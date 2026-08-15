# Bari (ColorLib Carousel 13) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-bari`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 13" — the THIRTEENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-13/).
  Single occurrence in TEMPLATES.md (line 720, "Bootstrap Carousels (20)"
  category — no dup rows; no `[x]` row anywhere for carousel-13).
  Recreation uses the NEW name **Bari** (thirteenth of the carousel-series
  renames; lineage: carousel-01 → wanderlust, carousel-02 → faraway,
  carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri,
  carousel-06 → cannes, carousel-07 → positano, carousel-08 → sorrento,
  carousel-09 → ravello, carousel-10 → amalfi, carousel-11 → santorini,
  carousel-12 → portofino, carousel-13 → bari — theme: travel /
  destinations; the name is thematic, the content is an editorial
  photography slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-13/`
  — HTTP 200, 17,155 bytes DOM (fetched + rendered 2026-08-15). **Gotcha:**
  the standard path `https://preview.colorlib.com/theme/carousel-13/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under `.../theme/bootstrap/carousel-13/css/` (same
  finding as the Bootstrap Calendars and Carousel 01–12 preps).
  **`css/owl.theme.default.min.css` 404s — NOT present**; the demo uses
  `owl.carousel.min.css` + `bootstrap.min.css` (4.3.1) + `style.css`
  (2,722 bytes) + `fonts/icomoon/style.css` + Google Roboto (300/400).
- **What this demo IS:** a WHITE single-section FULL-HEIGHT COVER-IMAGE
  carousel with CENTERED WHITE CAPTIONS, VERTICAL RIGHT-EDGE DOTS and
  AUTOPLAY — ONE `.content` wrapper (`padding: 7rem 0`), no navbar, no hero,
  no footer. Centered near-black heading (`.h2.my-5.text-center`, 20px)
  above `.owl-carousel.owl-1` with THREE `.media-29121.overlay` slide DIVs
  (`images/hero_1..3.jpg` background-image, `height: 100vh`, cover,
  `rgba(0,0,0,0.1)` overlay, centered 38px white `h2` caption in a
  `col-md-7`). NOT the natural-aspect plain-image slider of Carousel 11
  (Santorini — no overlay, no caption, horizontal bottom dots, hover-pause
  autoplay) and NOT the card grid of Carousel 12 (Portofino) — do NOT copy
  those requirements.
- **Carousel config (`js/main.js`):**
  `$('.owl-1').owlCarousel({ loop:true, margin:0, nav:true, items: 1,
smartSpeed: 1000, autoplay: true, pauseOnHover: false, navText:
['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **ONE slide per view at ALL
  breakpoints (1/1/1; NO responsive block)**, **LOOP ON**, **NAV ARROWS ON**,
  **AUTOPLAY ON (~5s Owl default) WITHOUT HOVER-PAUSE** (`pauseOnHover:
false` — differs from Carousel 11's `autoplayHoverPause: true`), **DOTS
  ON** (Owl default `dots: true`), **1,000ms smartSpeed**, NO `animateOut`
  → **HORIZONTAL SLIDE** transition (confirmed live: `.owl-stage` translateX
  matrix). Recreate: 1-per-view, loop, prev/next arrows, dots, autoplay
  without hover-pause, ~1s horizontal slide.
- **Heading copy-paste artifact:** the demo `<title>` AND the visible `h2`
  literally say "Carousel #3" (untouched copy from an earlier demo; this is
  demo #13). Recreation SHALL use "Carousel #13" (corrected) or a same-kind
  paraphrase ("Featured Gallery" / "Editorial Carousel").
- **Dead debug borders — SKIP:** style.css has `border: 1px solid red` on
  both arrow buttons and `border: 4px solid blue` on `.owl-next` — leftover
  debug styles. The live render shows NO borders: owl.carousel.min.css's
  reset `.owl-carousel .owl-nav button.owl-next, ... button.owl-prev,
... button.owl-dot { background: 0 0; color: inherit; border: none;
padding: 0 !important; font: inherit }` wins on specificity (0,3,1 vs
  0,3,0; verified `getComputedStyle` → `border: 0px none`). Do NOT render
  arrow borders.
- **Slides (background DIVs, ×3):** `height: 100vh`, `background-size:
cover`, `background-position: center`, inline `background-image` per
  slide. `::before` overlay `rgba(0,0,0,0.1)` (z-index 1); `.container`
  (z-index 2) + `.row.justify-content-center.align-items-center.text-center`
  (height 100vh) + `.col-md-7` + `h2` (38px, #fff, Roboto). Caption text
  "Impedit Ipsam Quae Natus" repeated on all slides (Lorem-ipsum-style
  placeholder — paraphrase/vary OK). NOTE: use `100svh` in React to avoid
  mobile URL-bar jump hiding the caption.
- **Arrows:** `.owl-nav` `position: absolute; bottom: 60px; width: 100%`
  (height 0) → `.owl-prev` left: 20px / `.owl-next` right: 20px, both
  `position: absolute; top: 50%; z-index: 92`, transparent bg, no border,
  white 40px icons → arrows at the BOTTOM CORNERS (verified live + vision:
  bottom-left / bottom-right), unlike Santorini's vertically-centered edge
  arrows.
- **Dots:** `.owl-dots` `position: absolute; top: 50%; right: 40px;
translateY(-50%)`; dots `display: block` → VERTICAL stack on the right
  edge at mid-height (verified live + vision: three vertical dots, right
  edge); 7px circles, `rgba(255,255,255,0.5)` inactive / `#fff` active,
  margin 4px. Active dot follows autoplay (screenshot caught different
  active dots at different moments).
- **Screenshot (carousel-13.jpg):** minimalist editorial/lifestyle layout —
  white page, centered dark "Carousel #3" heading, one large photo slide
  (hand holding a "GENESIS" paperback with a landscape cover against a warm
  beige wall, blurred plant), white centered caption, three faint vertical
  right-edge dots. Clean, whitespace-driven, photography-first; no colored
  accent.

## Implementation tasks

- [ ] Copy the simplest existing app → `apps/bari`; rename package to
      `@free-react-templates/bari`
- [ ] `public/CNAME` = `bari.free.componentdock.com`; `"homepage"` =
      `https://bari.free.componentdock.com` in package.json
- [ ] index.html: Google Fonts Roboto (300/400), title "Bari"
- [ ] Single-section layout: white page, `py-[7em]` wrapper, centered ~1140px
      container, centered near-black ~20px heading ("Carousel #13" or
      paraphrase — NOT "Carousel #3")
- [ ] Carousel: 3 slides, full-height cover background (picsum
      editorial/lifestyle seeds screened per replication skill), subtle
      `rgba(0,0,0,0.1)` overlay, centered white 38px caption (paraphrase OK)
- [ ] Carousel behavior: 1 per view at all breakpoints, loop, ~1s horizontal
      slide, autoplay ~5s WITHOUT hover-pause
- [ ] Arrows: lucide ChevronLeft/ChevronRight, white ~40px, bottom corners
      (20px inset), real buttons + aria-labels, NO borders
- [ ] Dots: 3 vertical dots right edge mid-height (~40px inset), 7px circles,
      inactive `rgba(255,255,255,0.5)` / active `#fff`, click-to-jump,
      active-dot sync
- [ ] Responsive: `100svh` slide height, no horizontal overflow, ≥44px hit
      areas on mobile
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh bari`
- [ ] PR: branch `feat/template-bari`, PR description with source slug,
      preview URL, tokens, renames; merge immediately
