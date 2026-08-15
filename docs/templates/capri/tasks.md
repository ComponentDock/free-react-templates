# Capri (ColorLib Carousel 05) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-capri`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 05" — the FIFTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-05/).
  Single occurrence in TEMPLATES.md (line 712, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Capri** (fifth of
  the carousel-series renames; lineage from the Wanderlust prep:
  carousel-01 → wanderlust, carousel-02 → faraway, carousel-03 → fjord,
  carousel-04 → lido, carousel-05 → capri — theme: travel / destinations;
  the name is thematic, the content is a testimonials slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-05/`
  — HTTP 200, 9,879 bytes DOM (fetched 2026-08-15). **Gotcha:** the standard
  path `https://preview.colorlib.com/theme/carousel-05/` 404s — the Bootstrap
  series is served under the `/theme/bootstrap/` prefix (same finding as the
  Bootstrap Calendars and Carousel 01/02/03/04 preps).
- **What this demo IS:** a SAGE-GREEN single-section TESTIMONIALS carousel —
  ONE `.ftco-section` (padding 7em 0) on `body { background: #83b582 }`, no
  navbar, no hero, no footer. Centered heading "Carousel #05"
  (`.heading-section`, 28px, **#fff**, mb-5) above
  `.featured-carousel.owl-carousel`.
- **Carousel config (`js/main.js`):**
  `$('.featured-carousel').owlCarousel({ loop: false, autoplay: true,
margin: 30, animateOut: 'fadeOut', animateIn: 'fadeIn', nav: false,
dots: true, autoplayHoverPause: false, items: 1,
responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } } })`
  — 1/2/3 cards per view at 0/600/1000px, cross-fade, **AUTOPLAY ON**
  (~5s default, hover-pause OFF), NO loop, NO arrows (nav: false), dots
  only, NO `center: true` → exactly TWO pages (cards 1–3, then 3–5).
  DIFFERENT from Carousel 04 (Lido: no autoplay, center: true, gold accent,
  white page) and from Carousel 02/03 (Faraway/Fjord: autoplay + loop +
  arrows) — do not copy their requirements.
- **Cards (5, in order):** `images/person_1.jpg` … `person_3.jpg` then
  `person_1.jpg`, `person_2.jpg` (cycles 1,2,3,1,2). Each
  `.testimony-wrap.py-4`: `display: block`, white bg, `padding: 0 30px` +
  1.5rem vertical, `border-radius: 5px`, shadow 0px 5px 21px -14px
  rgba(0,0,0,0.14). Inside: `.text` > `p.mb-4` (testimonial, inherits body
  #999999) + `.d-flex.align-items-center` row: `.user-img` (80×80 circle,
  NO border — differs from Lido's 90px/4px-white-border) + `.pl-3` (1rem) >
  `p.name` (20px/500/#000/mb-0) + `span.position` (16px, #83b582). NO quote
  glyph (Lido had one floating above the card — Carousel 05 has none).
- **Dots:** `.owl-dots` centered below, `margin-top: 10px`; 20×3px PILLS,
  margin 5px, radius 1px, `background: rgba(255,255,255,0.2)`; active
  `background: #fff`. Two dots (two pages).
- **Fonts:** Poppins for everything (Google, cf-fonts). Playfair Display is
  loaded in the head but has ZERO selectors in style.css — skip it.
- **Fidelity exception:** source forces `body { min-width: 992px !important; }`
  (desktop-only demo artifact). Recreation MUST be responsive (carousel
  itself is 1/2/3 per view) — do not force a min-width.
- **Placeholder content:** ALL five cards repeat the same sentence, name
  ("Roger Scott") and role ("Marketing Manager"). Recreation: paraphrase 5
  distinct sentences, names, and roles (same kind), and use screened
  portrait picsum seeds for avatars (skill-verified person IDs: 1027, 64,
  823, 996).

## Section-by-section fidelity notes (structure order 1:1)

1. **Section `.ftco-section`** — `py-[7em]` on `#83b582` page bg. Center
   everything via a `.container`-style max-width wrapper.
2. **Heading** — `h2` "Carousel #05" (or "Testimonials" paraphrase): 28px,
   Poppins, `#fff`, centered, `mb-12` (~3rem). White on green — the whole
   page reads light-on-green, NOT light-on-white like Lido.
3. **Carousel `.featured-carousel`** — 5 cards, 30px gutter, fade
   transition, 1/2/3 per view, two pages, autoplay ~5s (pause under reduced
   motion), no arrows, two pill dots.
4. **Card** — white, radius 5px, `px-[30px] py-6`, soft shadow; body text
   `#999999`; bottom identity row: 80px avatar + 1rem-left text block
   (name `#000` 20px/500, role `#83b582` 16px).
5. **Footer** — monorepo mandate: minimal footer linking "Component Dock" →
   https://www.componentdock.com/ (source has no footer).

## Implementation task outline

- [ ] Scaffold `apps/capri` (copy simplest existing app; package
      `@free-react-templates/capri`; `public/CNAME` =
      `capri.free.componentdock.com`; homepage `https://capri.free.componentdock.com`);
      root `npm install` + lockfile check (`grep -c
  "free-react-templates/capri" package-lock.json`); `vite.config.ts`
      keeps `injectUiSource()`
- [ ] index.html: Google Fonts Poppins 300/400/500/700 link; no ColorLib
      assets/strings anywhere in the app
- [ ] `src/index.css` `@theme`: brand `#83b582` (page bg + role text);
      white heading/card tokens
- [ ] Components (mirror existing app patterns, `cn()` from packages/ui):
      `App.tsx` (section + footer), `TestimonialsCarousel.tsx` (paged
      carousel + dots + autoplay), card content inline or `TestimonialCard`
      (avatar row + name/role)
- [ ] Tests (TDD, 100% coverage): five cards, breakpoint per-view counts,
      two-page dot jump + active tracking, autoplay advance + reduced-motion
      pause, no-loop, cross-fade, no arrows, mobile/desktop tokens, footer
      link
- [ ] `npm run verify:app -- capri`; commit `feat: add Capri (ColorLib
  Carousel 05) template`; PR + immediate squash merge; deploy check
      https://capri.free.componentdock.com
- [ ] Bookkeeping on merge: `[ ]`→`[x]` for Carousel 05 in TEMPLATES.md +
      surge URL, `npm run readme:status`
