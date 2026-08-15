# Lido (ColorLib Carousel 04) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lido`.

## Design notes (replication findings)

- **Original:** ColorLib "Carousel 04" — the FOURTH of the 20 "Bootstrap
  Carousels" demos (source: https://colorlib.com/wp/template/carousel-04/).
  Single occurrence in TEMPLATES.md (line 711, "Bootstrap Carousels (20)"
  category — no dup rows). Recreation uses the NEW name **Lido** (fourth of
  the carousel-series renames; lineage from the Wanderlust/Faraway/Fjord
  preps: carousel-01 → wanderlust, carousel-02 → faraway, carousel-03 →
  fjord, carousel-04 → lido — theme: travel / destinations; the name is
  thematic, the content is a testimonials slider).
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/bootstrap/carousel-04/`
  — HTTP 200, 9,959 bytes DOM (fetched 2026-08-15). **Gotcha:** the standard
  path `https://preview.colorlib.com/theme/carousel-04/` 404s — the Bootstrap
  series is served under the `/theme/bootstrap/` prefix (same finding as the
  Bootstrap Calendars and Carousel 01/02/03 preps).
- **What this demo IS:** a white single-section TESTIMONIALS carousel — ONE
  `.ftco-section` (padding 7em 0), no navbar, no hero, no footer. Centered
  heading "Carousel #04" (`.heading-section`, 28px, #000, mb-5) above
  `.featured-carousel.owl-carousel`.
- **Carousel config (`js/main.js`):**
  `$('.featured-carousel').owlCarousel({ center: true, loop: false,
autoplay: false, margin: 30, animateOut: 'fadeOut', animateIn: 'fadeIn',
nav: false, dots: true, autoplayHoverPause: false, items: 1,
responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } } })`
  — 1/2/3 cards per view at 0/600/1000px, cross-fade, **NO autoplay, NO
  loop, NO arrows** (nav: false), dots only. DIFFERENT from Carousel 02/03
  (Faraway/Fjord both autoplay + loop + arrows) — do not copy their
  requirements.
- **Cards (5, in order):** `images/person_1.jpg` … `person_5.jpg`, each
  `.testimony-wrap.d-flex`: flex row of a 90px circular avatar (border
  4px #fff) + `.text.pl-4` (calc(100% - 90px), padding-left 1.5rem).
  Card: padding 30px 20px, border 1px rgba(0,0,0,0.03), radius 10px,
  shadow 0px 5px 21px -14px rgba(0,0,0,0.14). The `.quote` glyph is
  ABSOLUTE `top: -65px; left: 25px` — it floats ABOVE the card's top edge;
  the `.owl-stage-outer` has `padding-top: 1.5em` so it isn't clipped.
  Content per card: `p` testimonial (IDENTICAL placeholder in all five —
  paraphrase per person), `p.name` (16px/500/#000) + `span.position`
  (13px/#afa939). Source names: Racky Henderson, Henry Dee, Mark Huff,
  Rodel Golez, Ken Bosh; source roles are junk ("Father" + 4×
  "Businesswoman") — use sensible roles.
- **Design tokens (style.css, 222,435 bytes — Bootstrap 4.3.1 bundled + ftco
  styles at the tail):**
  - Brand accent `#afa939` (muted gold/mustard): quote glyph (40px,
    ion-ios-quote), role text, ACTIVE dot.
  - Dots: centered, `margin-top: 10px`, 10px circles, 5px gaps,
    `rgba(0,0,0,0.1)`; active `#afa939`.
  - Fonts: Poppins (heading + cards). Playfair Display is loaded via
    cf-fonts in the page head but has ZERO selectors in style.css — skip it.
- **Screenshot (`carousel-04.jpg`, 1200×972):** white page, dark centered
  "Carousel #04" heading, three cards side by side (avatar + gold quote +
  placeholder text + bold name + gold role), three dots centered below
  (middle active). Clean, minimalist, professional.

## Implementation tasks (for the implementer stream)

- [ ] Scaffold `apps/lido` (copy the simplest existing app, rename package
      to `@free-react-templates/lido`); `public/CNAME` =
      `lido.free.componentdock.com`; `homepage` =
      `https://lido.free.componentdock.com`; register the workspace
      (`npm install --package-lock-only` if needed).
- [ ] index.html: Google Fonts Poppins 300/400/500/700 `<link>`; title
      "Lido"; no ColorLib references anywhere in the app.
- [ ] `@theme` token: brand `#afa939` (Tailwind v4, e.g.
      `--color-brand: #afa939`).
- [ ] Component: single section, centered heading, paged testimonials
      carousel (1/2/3 per view, 30px gutter, centered page, cross-fade,
      NO autoplay/loop/arrows, dot pagination, active dot gold).
- [ ] TestimonialCard: avatar (picsum `seed/lido-<n>/180/180`, SCREEN the
      seeds for portrait subjects — see skill: verified person IDs 1027,
      64, 823, 996), lucide `Quote` glyph 40px `#afa939` absolutely at
      top -65px/left 25px, sentence + name + role; stage `pt-[1.5em]`.
- [ ] Footer: minimal, links "Component Dock" →
      https://www.componentdock.com/.
- [ ] Tests (Vitest + Testing Library, 100% coverage): five cards, per-view
      counts per breakpoint, dot jump + active tracking, no-autoplay
      (fake timers), no-loop, cross-fade, no arrows, tokens, footer link.
- [ ] `scripts/verify-app.sh lido` green; PR `feat/template-lido` → merge
      immediately; deploy to https://lido.free.componentdock.com;
      bookkeeping `[x]` + URL (use the componentdock domain, NOT the legacy
      surge form).
