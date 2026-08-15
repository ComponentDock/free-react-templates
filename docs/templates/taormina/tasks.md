# Taormina (ColorLib Carousel 14) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-taormina`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 14" — the FOURTEENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-14/).
  Single occurrence in TEMPLATES.md (line 721, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Taormina**
  (fourteenth of the carousel-series renames; lineage: carousel-01 →
  wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 →
  lido, carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
  carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
  carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
  carousel-14 → taormina — theme: travel / destinations; the name is
  thematic, the content is a testimonial slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-14/`
  — HTTP 200, 17,244 bytes DOM (fetched + rendered 2026-08-15). **Gotcha:**
  the standard path `https://preview.colorlib.com/theme/carousel-14/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under `.../theme/bootstrap/carousel-14/css/` (same
  finding as the Bootstrap Calendars and Carousel 01–13 preps).
  **`css/owl.theme.default.min.css` 404s — NOT present**; the demo uses
  `owl.carousel.min.css` + `bootstrap.min.css` (4.3.1) + `style.css`
  (2,920 bytes) + `fonts/icomoon/style.css` + Roboto (300/400).
- **What this demo IS:** a WHITE single-section TESTIMONIAL slider — ONE
  `.content` wrapper (`padding: 7rem 0`), no navbar, no hero, no footer.
  Centered near-black heading (`.h2.my-5.text-center`, 20px, `#212529`)
  above `.owl-carousel.slide-one-item` with TWO `.testimony-29101`
  `d-md-flex align-items-stretch` slide rows: LEFT `.image` div (inline
  `background-image: images/person_1|2.jpg`, `width: 40%`, cover, centered,
  stretches to panel height) + RIGHT `.text` div (`width: 60%`,
  `padding: 7rem 4rem`, `background: #f8f9fa`) containing `blockquote`
  (18px `#b3b3b3` weight 300, `padding-bottom: 50px`) and `.author`
  (14px `#212529`, absolute bottom). **NOT the full-height cover-hero
  slider of Carousel 13 (Bari — vertical right-edge dots, white
  bottom-corner arrows, autoplay WITHOUT hover-pause, 1s speed) and NOT
  the natural-aspect image slider of Carousel 11 (Santorini) — do NOT copy
  those requirements.** Here: split image+quote panel at container width,
  HORIZONTAL 15×3px BAR dots at BOTTOM CENTER, BLACK mid-height edge
  arrows (desktop-only), autoplay WITH hover-pause, 1.5s slide.
- **Carousel config (`js/main.js` — 13 lines, fetched live via the page):**
  `$('.slide-one-item').owlCarousel({ center: false, autoplayHoverPause:
true, items: 1, loop: true, stagePadding: 0, margin: 0, smartSpeed:
1500, autoplay: true, pauseOnHover: false, dots: true, nav: true,
navText: ['<span class="icon-keyboard_arrow_left">', '<span
class="icon-keyboard_arrow_right">'] })` — **ONE slide per view at ALL
  breakpoints (1/1/1; NO responsive block)**, **LOOP ON**, **NAV ARROWS
  ON**, **AUTOPLAY ON (~5s Owl default) WITH hover-pause** (the source sets
  both `autoplayHoverPause: true` [Owl 2 option — takes effect] and
  `pauseOnHover: false` [Owl 1.x — ignored], so LIVE behavior is
  hover-pause ON — the OPPOSITE of Bari), **DOTS ON**, **1,500ms
  smartSpeed**, NO `animateOut` → **HORIZONTAL SLIDE** transition
  (confirmed live: `.owl-stage` translateX matrix). Recreate: 1-per-view,
  loop, prev/next arrows, dots, autoplay ~5s with hover-pause, ~1.5s
  horizontal slide.
- **Heading copy-paste artifact:** the demo `<title>` AND the visible `h2`
  literally say "Carousel #4" (untouched copy from an earlier demo; this is
  demo #14). Recreation SHALL use "Carousel #14" (corrected) or a same-kind
  paraphrase ("Testimonials" / "What People Say").
- **Arrows (live computed):** `.owl-prev`/`.owl-next` — `position:
absolute; top: 50%; translateY(-50%)`, `left: 20px` / `right: 20px`
  (MID-HEIGHT at the far edges), transparent bg, NO border, 30×35px
  buttons, near-black glyph (`#212529` computed / `#000` declared, 30px
  icomoon keyboard-arrow). `.owl-nav { display: none }` below 992px →
  arrows are DESKTOP-ONLY in the source; keep dots + swipe for mobile.
- **Dots (live computed):** `.owl-dots` `position: absolute; bottom: 20px;
width: 100%; text-align: center; z-index: 2` → TWO `.owl-dot` buttons,
  each `> span` a 15×3px HORIZONTAL BAR (`border-radius: 0`), `margin:
3px`, inactive `rgba(0,123,255,0.4)` / active `#007bff` (Bootstrap
  primary blue — the ONLY color accent on the page).
- **Screenshot (carousel-14.jpg):** minimal testimonial-slider layout —
  white page, centered dark "Carousel #4" heading, carousel card with a
  portrait photo left (young woman, dark winter coat with fur-lined hood,
  soft gray wall) and a light-gray quote panel right (Lorem-ipsum +
  "— Craig Stephen"), faint black chevrons at the mid-height far edges, two
  small dots bottom center (blue active + gray). Clean, modern, minimalist
  corporate/portfolio showcase.
- **Mobile (<992px):** slides stack — `.image, .text { width: 100%;
display: block !important }`, `.image` gets `height: 300px`; nav hidden;
  dots remain. Match this; keep ≥44px tap targets.

## Implementation tasks

- [ ] Copy the simplest existing app → `apps/taormina`; rename package to
      `@free-react-templates/taormina`
- [ ] `public/CNAME` = `taormina.free.componentdock.com`; `"homepage"` =
      `https://taormina.free.componentdock.com` in package.json
- [ ] index.html: Google Fonts Roboto (300/400), title "Taormina"
- [ ] Single-section layout: white page, `py-[7em]` wrapper, centered ~1140px
      container, centered near-black ~20px heading ("Carousel #14" or
      paraphrase — NOT "Carousel #4")
- [ ] Carousel: 2 slides, each 40/60 split — LEFT portrait cover-cropped
      picsum image (portrait-orientation seeds screened per replication
      skill) with alt text, RIGHT `#f8f9fa` text panel (`7rem 4rem` padding)
      with 18px `#b3b3b3` weight-300 quote + 14px `#212529` author line at
      the bottom (paraphrase + vary quotes/authors per slide)
- [ ] Carousel behavior: 1 per view at all breakpoints, loop, ~1.5s
      horizontal slide, autoplay ~5s WITH hover-pause
- [ ] Arrows: lucide ChevronLeft/ChevronRight, near-black ~30px, MID-HEIGHT
      far edges (20px inset, `top: 50%; translateY(-50%)`), real buttons +
      aria-labels, NO borders; hidden below 992px (dots + swipe navigate)
- [ ] Dots: 2 HORIZONTAL 15×3px bars at BOTTOM CENTER (20px from bottom),
      no rounded corners, inactive `rgba(0,123,255,0.4)` / active
      `#007bff`, click-to-jump, active-dot sync
- [ ] Responsive: <992px slides stack (image `width: 100%`, `height:
    300px`, text below), arrows hidden, no horizontal overflow, ≥44px hit
      areas on mobile
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh taormina`
- [ ] PR: branch `feat/template-taormina`, PR description with source slug,
      preview URL, tokens, renames; merge immediately
