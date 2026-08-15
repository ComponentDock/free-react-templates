# Ravello (ColorLib Carousel 09) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-ravello`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 09" — the NINTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-09/).
  Single occurrence in TEMPLATES.md (line 716, "Bootstrap Carousels (20)"
  category — no dup rows; no `[x]` row anywhere for carousel-09).
  Recreation uses the NEW name **Ravello** (ninth of the carousel-series
  renames; lineage: carousel-01 → wanderlust, carousel-02 → faraway,
  carousel-03 → fjord, carousel-04 → lido, carousel-05 → capri,
  carousel-06 → cannes, carousel-07 → positano, carousel-08 → sorrento,
  carousel-09 → ravello — theme: travel / destinations; the name is
  thematic, the content is a full-bleed travel-photo slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-09/`
  — HTTP 200, 8,438 bytes DOM (fetched 2026-08-15). **Gotcha:** the
  standard path `https://preview.colorlib.com/theme/carousel-09/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under `.../theme/bootstrap/carousel-09/css/`
  (same finding as the Bootstrap Calendars and Carousel 01–08 preps).
- **What this demo IS:** a WHITE single-section FULL-BLEED IMAGE carousel —
  ONE `.ftco-section` (padding 7em 0), no navbar, no hero, no footer.
  Centered near-black heading "Carousel #09" (`.heading-section`, 28px,
  mb-5 pb-md-4) above `.hero.featured-carousel.owl-carousel` with THREE
  `.item` slides, each `.work` > `.img` — a full-width 600px-tall
  cover-centered background-image slide (`.work .img`) with a soft shadow
  - subtle bottom-darkening gradient, and **NO inner text** (pure
    photography). NOT the 50/50 testimonial split of Carousel 08 (Sorrento)
    and NOT a blog-card grid (Carousel 07/Positano) — do NOT copy either's
    requirements.
- **Carousel config (`js/main.js`):**
  `$('.featured-carousel').owlCarousel({ loop: true, autoplay: true,
margin: 30, animateOut: 'fadeOut', animateIn: 'fadeIn', smartSpeed:
15000, nav: true, dots: true, autoplayHoverPause: false, items: 1,
navText: ["<span class='ion-ios-arrow-back'></span>","<span
class='ion-ios-arrow-forward'></span>"] })` — **ONE slide per view at
  ALL breakpoints (1/1/1; NO responsive block)**, **LOOP ON**, **AUTOPLAY
  ON** (~5s default, hover-pause OFF), **CROSS-FADE** (fadeOut/fadeIn —
  NOT slide-down/flip-in like Carousel 08), **15-SECOND smartSpeed** (the
  fade is very slow in the source — a demo artifact; recreation uses
  ~1.5–2s and documents the deviation), **ARROWS ON** — bare 30px white
  ion-ios-arrow-back/forward icons, **ALWAYS VISIBLE** (opacity 1, no
  hover-reveal), `left: 20px` / `right: 20px`, mid-height; dots ON —
  **OVERLAID at the bottom of the slides** (absolute, bottom 20px,
  centered), NOT below the card.
- **Slide (`.work .img`, ×3):** `width: 100%; height: 600px; position:
relative; z-index: 0;` cover-centered bg image; `box-shadow: 0px 20px
35px -30px rgba(0,0,0,0.26)`; `::after` gradient (transparent →
  black at bottom, opacity .3 — subtle bottom vignette under the
  dots/arrows). The `.work .text h3`/`.text span` and `.work .img .icon`
  70px hover-circle CSS are UNUSED leftovers (no children in the demo
  DOM) — skip them.
- **Nav (`.owl-nav`):** `position: absolute; top: 50%; width: 100%;`
  `.owl-prev { left: 20px }` / `.owl-next { right: 20px }`,
  `translateY(-50%)`, `margin-top: 0`, `color: white !important`,
  `opacity: 1` — **ALWAYS VISIBLE**; inner `span:before` 30px arrow
  icons (ion-ios-arrow-back/forward → lucide ChevronLeft/ChevronRight).
  Nav strip transition 0.7s (source disables under
  `prefers-reduced-motion`).
- **Dots (`.owl-dots`):** `position: absolute; bottom: 20px; left: 0;
right: 0; text-align: center;` — OVERLAID on the slides; 10×10px
  circles, margin 5px, radius 50%, `background: rgba(255,255,255,0.5)`
  (translucent white); ACTIVE `background: #ff5959` (solid RED). Three
  slides → three dots.
- **Accent color:** `#ff5959` (RED/coral) — active dot + link color
  (`a { color: #ff5959 }`). **DIFFERS from Carousel 08's gold `#dbcc8f`**
  — do not reuse the gold.
- **Fonts:** Poppins body (14px, lh 1.8, weight normal, color #212529)
  - headings (line-height 1.5, weight 400, near-black). Load Poppins
    400 (+500/600 as needed) via Google Fonts. NO serif (unlike Carousel
    08's Playfair Display — this demo has no quote font).
- **Fidelity exception:** source forces `body { min-width: 992px
!important; }` (13 occurrences — desktop-only demo artifact). Recreation
  MUST be responsive (slides ~300–400px tall on mobile, no forced
  min-width) — mobile support is a monorepo hard requirement.
- **Fidelity note (empty slides):** source slides are image-only — keep
  them image-only; add descriptive alt text for a11y.
- **Slide images (reference only — NOT copied):** `images/slider-1.jpg`
  (1920×1148 — Mediterranean coastal town, terracotta roofs, boats, hilltop
  fortress, overcast), `slider-2.jpg` (2000×1660 — woman in white dress +
  wide-brim hat in a hanging swing chair on a tropical beach, turquoise
  sea), `slider-3.jpg` (1920×1280 — woman on a wooden longtail boat bow,
  arms outstretched, limestone karsts, sunny). Recreation: travel-subject
  picsum seeds, screened per the replication skill (verified coastal
  candidate: picsum id 1055; screen landscape ids 1015/1016/1018/1036/
  1039; seed shape `https://picsum.photos/seed/ravello-<n>/1920/1148`).

## Section-by-section fidelity notes (structure order 1:1)

1. **Section `.ftco-section`** — `py-[7em]` on WHITE page bg. Center via a
   `.container`-style max-width wrapper.
2. **Heading** — `h2` "Carousel #09" (or "Featured Destinations"
   paraphrase): 28px, Poppins, near-black, centered, `mb-12` (~3rem) +
   `pb-6` at ≥768px.
3. **Carousel `.featured-carousel`** — 3 slides, 1 per view at every
   breakpoint, LOOP on, cross-fade transition (~1.5–2s), autoplay ~5s
   (pause under reduced motion), always-visible side arrows (bare 30px
   white chevrons), three translucent-white dots overlaid at the bottom
   (active red `#ff5959`).
4. **Slide `.work .img`** — full-width 600px-tall cover image (mobile:
   ~300–400px), soft downward shadow (`0px 20px 35px -30px
rgba(0,0,0,0.26)`), subtle bottom-darkening gradient overlay, NO text;
   travel-subject picsum seeds with descriptive alt text.
5. **Footer** — monorepo mandate: minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer).

## Implementation task outline

- [ ] Scaffold `apps/ravello` (copy simplest existing app; package
      `@free-react-templates/ravello`; `public/CNAME` =
      `ravello.free.componentdock.com`; homepage
      `https://ravello.free.componentdock.com`); root `npm install` +
      lockfile check (`grep -c "free-react-templates/ravello"`
      package-lock.json); `vite.config.ts` keeps `injectUiSource()`
- [ ] index.html: Google Fonts Poppins link; no ColorLib assets/strings
      anywhere in the app
- [ ] `src/index.css` `@theme`: brand token `#ff5959` (active dot, link
      color — NOT the Carousel 08 gold), white page bg; Poppins family
      token
- [ ] Components (mirror existing app patterns, `cn()` from packages/ui):
      `App.tsx` (section + footer), `ImageCarousel.tsx` (loop + autoplay +
      cross-fade + always-visible chevron arrows + overlaid dots,
      1-per-view at all breakpoints), `Slide.tsx` (full-bleed cover image
      with shadow + bottom gradient, alt text)
- [ ] Tests (TDD, 100% coverage): three slides render (full-width, 600px
      desktop / ~300–400px mobile, cover, shadow, bottom gradient,
      image-only, alt text), 1-per-view at all breakpoints, loop
      wrap-around, cross-fade transition, autoplay advance + reduced-motion
      pause, arrow navigation + always-visible white chevrons, overlaid
      dots (translucent white, active red #ff5959) + dot jump, mobile
      reachability, footer link
- [ ] `npm run verify:app -- ravello`; commit `feat: add Ravello
(ColorLib Carousel 09) template`; PR + immediate squash merge; deploy
      check https://ravello.free.componentdock.com
- [ ] Bookkeeping on merge: `[ ]`→`[x]` for Carousel 09 in TEMPLATES.md +
      surge URL, `npm run readme:status`
