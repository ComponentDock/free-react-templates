# Sorrento (ColorLib Carousel 08) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-sorrento`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 08" — the EIGHTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-08/).
  Single occurrence in TEMPLATES.md (line 715, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Sorrento**
  (eighth of the carousel-series renames; lineage: carousel-01 → wanderlust,
  carousel-02 → faraway, carousel-03 → fjord, carousel-04 → lido,
  carousel-05 → capri, carousel-06 → cannes, carousel-07 → positano,
  carousel-08 → sorrento — theme: travel / destinations; the name is
  thematic, the content is a testimonials slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-08/`
  — HTTP 200, 14,997 bytes DOM (fetched 2026-08-15). **Gotcha:** the
  standard path `https://preview.colorlib.com/theme/carousel-08/` 404s —
  the Bootstrap series is served under the `/theme/bootstrap/` prefix, and
  its stylesheets live under
  `.../theme/bootstrap/carousel-08/css/` (same finding as the Bootstrap
  Calendars and Carousel 01–07 preps).
- **What this demo IS:** a LIGHT-GRAY single-section TESTIMONIALS carousel —
  ONE `.ftco-section` (padding 7em 0), no navbar, no hero, no footer.
  Centered BLACK heading "Carousel #08" (`.heading-section`, 28px, #000,
  mb-5) above `.featured-carousel.owl-carousel` with THREE `.item` slides,
  each a WHITE split card (`.testimony-wrap`): a 50%-width portrait photo
  (`.img`, 600px tall) beside a 50%-width white quote panel (`.text`,
  text-center, flex-vertically-centered) holding a large Playfair Display
  serif QUOTE, the author's GOLD `#dbcc8f` name ("— Name"), and a gray
  job-position line. NOT a blog-card grid (Positano) and NOT an editorial
  split-screen (Cannes) — do NOT copy either's requirements.
- **Carousel config (`js/main.js`):**
  `$('.featured-carousel').owlCarousel({ loop: true, autoplay: true,
autoHeight: false, margin: 30, animateOut: 'slideOutDown', animateIn:
'flipInX', nav: true, dots: true, autoplayHoverPause: false, items: 1,
navText: ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>","<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } })`
  — **ONE slide per view at ALL breakpoints (1/1/1 — NOT Positano's
  1/2/3)**, **LOOP ON**, **AUTOPLAY ON** (~5s default, hover-pause OFF),
  **slide-down exit + flip-in enter** (animate.css — NOT cross-fade, NOT
  horizontal slide), **ARROWS ON** with **"Prev"/"Next" text labels** +
  40px round icons, **ALWAYS VISIBLE** (opacity 1 — NOT hover-revealed
  like Positano), dots ON (centered row below, one per item → three dots,
  OUTLINED circles, active gold `#dbcc8f`).
- **Card (`.testimony-wrap`, ×3):** `box-shadow: 0px 10px 40px -30px
rgba(0,0,0,0.42)` (soft floating shadow), flex row at ≥768px
  (`d-md-flex`), wrapped in a centered `.col-md-11` column (≈91.7% width).
  - `div.img` (photo): `width: 50%; height: 600px;` cover bg image
    (`images/person-1.jpg` … `person-3.jpg` — portrait stock). Below
    768px: `width: 100%; height: 450px` (photo ABOVE quote panel).
  - `div.text.text-center.p-4.py-xl-5.px-xl-5.d-flex.align-items-center`
    (quote panel): `width: 50%; background: white;` text-center; padding
    1.5rem → 3rem at ≥1200px; flex + align-items-center (quote block
    vertically centered). Below 768px: `width: 100%`.
    - `div.desc.w-100` > `p.h3.mb-5` (QUOTE): Playfair Display serif,
      39px, weight 700, `#000`, mb 3rem. Source repeats "Incredible
      services and amazing customer support" in ALL THREE — use THREE
      DISTINCT professional praise quotes. Source has a bare leading `"`
      and no closing quote — use proper quotation marks.
    - `div.pt-4` (author block, padding-top 1.5rem): `p.name.mb-0`
      ("— Joy Smith", `#dbcc8f`, 20px, weight 500 — GOLD, em-dash
      prefix) + `span.position` ("Project Manager" — inherits body:
      Poppins 14px gray). Vary names AND positions per slide.
- **Nav (`.owl-nav`):** `position: absolute; top: 50%; left: 0; right: 0;`
  `.owl-prev { left: 0 }` / `.owl-next { right: 0 }`, `translateY(-50%)`,
  `margin-top: 0`, `opacity: 1` — **ALWAYS VISIBLE** (differs from
  Positano's hover-reveal). Each control: stacked `small` label
  ("Prev"/"Next", uppercase, 0.8 line-height) ABOVE a 40px round arrow
  icon (`span:before`); both `color: #000` (container
  `rgba(0,0,0,0.2)`), hover → **`#dbcc8f`** (gold). Nav strip transition
  0.7s, label/icon 0.3s (source disables both under
  `prefers-reduced-motion`).
- **Dots (`.owl-dots`):** centered row, `margin-top: 20px`; 10×10px
  circles, margin 5px, radius 50%, `background: transparent`,
  **`border: 1px solid #000`** (OUTLINED); active `background: #dbcc8f;
border: 1px solid #dbcc8f` (GOLD-FILLED — differs from Positano's
  gray/pink dots). Three slides → three dots.
- **Fonts:** Poppins body (14px, lh 1.8, gray) + headings (#000, weight 400) + **Playfair Display serif for quotes** (39px/700). Load Poppins
  300/400/500/700 + Playfair Display 400/700 via Google Fonts.
- **Fidelity exception:** source forces `body { min-width: 992px
!important; }` (13 occurrences — desktop-only demo artifact). Recreation
  MUST be responsive (50/50 split stacks to photo-over-quote below 768px)
  — do not force a min-width.
- **Placeholder content:** ALL three slides repeat the same quote and the
  same position; only names differ (Joy Smith / Rony Smith / John Doe).
  Recreation: 3 distinct quotes + names + positions; use person-appropriate
  picsum seeds for the portraits
  (`https://picsum.photos/seed/sorrento-<n>/600/600`, skill-verified
  person IDs: 1027, 64, 823, 996).

## Section-by-section fidelity notes (structure order 1:1)

1. **Section `.ftco-section`** — `py-[7em]` on LIGHT-GRAY page bg
   (`rgba(0,0,0,0.05)` / Tailwind `bg-[#f2f2f2]`-ish). Center via a
   `.container`-style max-width wrapper.
2. **Heading** — `h2` "Carousel #08" (or "Client Testimonials"
   paraphrase): 28px, Poppins, `#000`, centered, `mb-12` (~3rem).
3. **Carousel `.featured-carousel`** — 3 slides, 1 per view at every
   breakpoint, centered column (~91.7% width), 30px margin, slide-down
   exit + flip-in enter transition, LOOP on, autoplay ~5s (pause under
   reduced motion), always-visible side arrows (label + 40px round icon,
   gold hover), three outlined dots (active gold `#dbcc8f`).
4. **Card `.testimony-wrap`** — white card, soft shadow
   (`0px 10px 40px -30px rgba(0,0,0,0.42)`); ≥768px: 50/50 flex split,
   photo (50%/600px, cover) left + quote panel (50%/white/centered,
   flex-vertically-centered, padding 1.5rem → 3rem ≥1200px) right;
   <768px: stacked (photo 100%/450px above quote panel 100%).
5. **Quote block `.desc`** — Playfair Display serif 39px/700/#000 quote
   (~3rem bottom margin, proper quotes) + author block (padding-top
   1.5rem): gold `#dbcc8f` 20px/500 "— Name" + gray Poppins 14px position.
   Three distinct quotes/names/positions.
6. **Footer** — monorepo mandate: minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer).

## Implementation task outline

- [ ] Scaffold `apps/sorrento` (copy simplest existing app; package
      `@free-react-templates/sorrento`; `public/CNAME` =
      `sorrento.free.componentdock.com`; homepage
      `https://sorrento.free.componentdock.com`); root `npm install` +
      lockfile check (`grep -c "free-react-templates/sorrento"`
      package-lock.json); `vite.config.ts` keeps `injectUiSource()`
- [ ] index.html: Google Fonts Poppins 300/400/500/700 + Playfair Display
      400/700 links; no ColorLib assets/strings anywhere in the app
- [ ] `src/index.css` `@theme`: brand tokens `#dbcc8f` (author name,
      active dot, arrow hover), `#000` (dots border, arrows/labels,
      heading), light-gray page bg; Playfair Display as the quote font
      family token
- [ ] Components (mirror existing app patterns, `cn()` from packages/ui):
      `App.tsx` (section + footer), `TestimonialsCarousel.tsx` (loop +
      autoplay + slide-down/flip-in transition + always-visible arrows +
      outlined dots, 1-per-view at all breakpoints), `TestimonialCard.tsx`
      (photo panel + quote panel: quote + name + position, responsive
      split/stack)
- [ ] Tests (TDD, 100% coverage): three slides render, card split at
      ≥768px (50/50) and stacked below 768px (photo 100%/450px above),
      photo height 600px, quote tokens (Playfair 39px/700/#000), name
      tokens (gold #dbcc8f 20px/500 em-dash prefix), position body style,
      distinct quotes/names/positions, 1-per-view at all breakpoints,
      loop wrap-around, slide-down/flip-in transition, autoplay advance +
      reduced-motion pause, arrow navigation + always-visible + gold
      hover, dot jump + active tracking + outlined styling, mobile
      reachability, footer link
- [ ] `npm run verify:app -- sorrento`; commit `feat: add Sorrento
(ColorLib Carousel 08) template`; PR + immediate squash merge; deploy
      check https://sorrento.free.componentdock.com
- [ ] Bookkeeping on merge: `[ ]`→`[x]` for Carousel 08 in TEMPLATES.md +
      surge URL, `npm run readme:status`
