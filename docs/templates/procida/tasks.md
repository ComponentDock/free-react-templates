# Procida (ColorLib Carousel 16) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-procida`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 16" — the SIXTEENTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-16/).
  Single occurrence in TEMPLATES.md (line 723, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Procida**
  (sixteenth of the carousel-series renames; lineage: carousel-01 →
  wanderlust, carousel-02 → faraway, carousel-03 → fjord, carousel-04 →
  lido, carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
  carousel-08 → sorrento, carousel-09 → ravello, carousel-10 → amalfi,
  carousel-11 → santorini, carousel-12 → portofino, carousel-13 → bari,
  carousel-14 → taormina, carousel-15 → tropea, carousel-16 → procida —
  theme: travel / destinations; the name is thematic, the content is a
  team/quote carousel).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-16/`
  — HTTP 200, 18,586 bytes DOM (fetched + rendered 2026-08-15). **Gotcha:**
  the standard path `https://preview.colorlib.com/theme/carousel-16/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under `.../theme/bootstrap/carousel-16/css/` (same
  finding as the Bootstrap Calendars and Carousel 01–15 preps).
  Stylesheets: `owl.carousel.min.css` (Owl 2.3.4 base) +
  `bootstrap.min.css` (4.3.1) + `style.css` (1,883 bytes) +
  `fonts/icomoon/style.css` (icon font — never used) + Roboto.
- **What this demo IS:** a WHITE single-section TEAM/QUOTE carousel — ONE
  `.content` wrapper (`padding: 7rem 0`), no navbar, no hero, no footer.
  Centered near-black heading (`.h2.my-5.text-center`, 20px, `#212529`)
  above `.site-section.bg-left-half.mb-5` → `.container.owl-2-style` →
  `.owl-carousel.owl-2` with SIX `.media-29101` cards (avatar → name →
  blurb). **KEY DIFFERENCES vs Carousel 15 (Tropea) — do NOT copy Tropea's
  requirements:** (1) cards are centered avatar columns, NOT a 40/60
  image/blue-panel split; (2) **AUTOPLAY ON** (~5s, `pauseOnHover: false`)
  — Tropea never autoplays; (3) navigation is DOT indicators below the
  cards (Tropea: avatar thumbnail strip straddling the card edge); (4) NO
  blue panel anywhere — the ONLY `#007bff` accent is the active dot;
  (5) responsive 1/2/3 cards per view (Tropea: 1 at all breakpoints).
- **Carousel config (`js/main.js` — 718 bytes, fetched live via the page):**
  `$('.owl-2').owlCarousel({ center: false, items: 1, loop: true,
stagePadding: 0, margin: 20, smartSpeed: 1000, autoplay: true, nav: true,
dots: true, pauseOnHover: false, responsive: { 600: { margin: 20, nav:
true, items: 2 }, 1000: { margin: 20, stagePadding: 0, nav: true, items:
3 } } })` — **1/2/3 per view at <600 / 600–999 / ≥1000px**, LOOP ON,
  AUTOPLAY ON (~5s, NO hover-pause), DOTS ON, NAV ON in JS but the arrows
  are HIDDEN by `.owl-2-style .owl-nav { display: none }` — the live render
  shows NO arrows (verified in the browser). No `animateOut` → HORIZONTAL
  SLIDE at ~1s (`smartSpeed`). Recreate: responsive 1/2/3-per-view, loop,
  ~1s horizontal slide, ~5s autoplay, dots below (gray → blue active),
  NO arrows.
- **Heading copy-paste artifact:** the demo `<title>` AND the visible `h2`
  literally say "Carousel #6" (untouched copy from demo #6; this is demo
  #16 — Carousel 15's screenshot even shows "Carousel #6" in its browser
  chrome). Recreation SHALL use "Carousel #16" (corrected) or a same-kind
  paraphrase ("Our Team" / "Meet the Team" / "Testimonials").
- **Dots (live computed):** `.owl-2-style .owl-dots` — `text-align: center;
position: relative; bottom: -30px` (hangs ~30px below the carousel). Each
  `.owl-dot span`: `width: 7px; height: 7px; border-radius: 50%; background:
#cccccc; margin: 3px; transition: .3s all cubic-bezier(0.32, 0.71, 0.53,
0.53)`; `.active span`: `background: #007bff`. (The rule first declares
  `border-radius: 0px` then overrides to 50% — final is round.) The
  recreation's dots must be real buttons with ≥44px hit areas (7px visual +
  padding).
- **Card images:** `person_1_sm.jpg` / `person_2_sm.jpg` / `person_3_sm.jpg`
  — SQUARE avatar crops, reused cyclically across the SIX cards (1, 2, 3,
  1, 2, 3 — source sloppiness). Names: Alex Fought, Ben Stafford, Devin
  Bridges, Joshua Jones, Kellie Kenney, Will Reagan. Recreation: SIX
  DISTINCT people — square picsum avatar per card (screen seeds per the
  replication skill), circular-cropped.
- **Screenshot (carousel-16.jpg, 1200×972):** minimal team-carousel layout —
  white page, centered near-black "Carousel #6" heading (artifact), THREE
  cards (Alex Fought, Ben Stafford, Devin Bridges) with circular avatar
  photos of dark-haired people, bold black names, light-gray lorem blurbs,
  and a single BLUE dot below the center card. Clean, modern, minimalist,
  whitespace-heavy: neutral palette with ONE blue accent (the active dot).
- **Dead classes:** `.site-section` and `.bg-left-half` have NO rules in
  style.css OR bootstrap.min.css — do NOT add a tinted/left-half background;
  the section is plain white.
- **Mobile (<600px):** 1 card per view, cards stay centered, dots below
  (≥44px tap targets), autoplay keeps working; no horizontal overflow.

## Implementation tasks

- [ ] Copy the simplest existing app → `apps/procida`; rename package to
      `@free-react-templates/procida`
- [ ] `public/CNAME` = `procida.free.componentdock.com`; `"homepage"` =
      `https://procida.free.componentdock.com` in package.json
- [ ] index.html: Google Fonts Roboto (300/400/500/900), title "Procida"
- [ ] Single-section layout: white page, `py-[7em]` wrapper, centered ~1140px
      container, centered near-black ~20px heading ("Carousel #16" or
      paraphrase — NOT "Carousel #6")
- [ ] Carousel: SIX cards, each a centered column — circular ~80px picsum
      avatar (square seed, SIX DISTINCT people, screened per replication
      skill) with alt text, ~40px below the image; bold 18px `#6c757d` name
      (weight 900, ~30px below the name's block); 3-line light-gray
      `#999999` weight-300 blurb (paraphrase + vary per card)
- [ ] Carousel behavior: 1/2/3 cards per view at <600 / 600–999 / ≥1000px,
      20px gaps, loop, ~1s horizontal slide, AUTOPLAY ~5s with NO hover-pause
- [ ] Dot navigation: round 7px buttons, 3px gaps, centered ~30px below the
      cards; inactive `#cccccc`, active `#007bff`; ≥44px hit areas +
      aria-labels; click → slide; active dot syncs on every change (click,
      autoplay, loop wrap); first dot active on initial render
- [ ] NO arrows anywhere (source: `.owl-nav` display:none)
- [ ] Responsive: no horizontal overflow on mobile, dots tappable, autoplay
      works at every breakpoint
- [ ] Footer: minimal "Component Dock" → https://www.componentdock.com/
- [ ] TDD: 100% coverage; verify via `scripts/verify-app.sh procida`
- [ ] PR: branch `feat/template-procida`, PR description with source slug,
      preview URL, tokens, renames (esp. "autoplay ON + dots + no arrows —
      differs from Tropea"); merge immediately
