# Barbell (ColorLib Crossfit 2) — Tasks & Design Notes

> Recreation of ColorLib "Crossfit 2"
> (https://colorlib.com/wp/template/crossfit-2/) under the NEW name
> **Barbell** (a weightlifting bar; single lowercase word, no collision with
> `apps/` or `openspec/specs/` — verified 2026-08-10), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Crossfit 2" — free gym/CrossFit website template
  (Health Fitness category, 72 templates in the family; TEMPLATES.md dup
  row also under Bootstrap (216)). Page title "CrossFit | Template"; meta
  description says "Yoga Studio Template" (ColorLib copy/paste — the design
  is CrossFit/gym). The recreation brands itself **Barbell**.
- **Preview URL quirk (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/crossfit-2/` (the TEMPLATES.md slug
  with the hyphen) returns HTTP 404, but `products.js` maps the demo as
  `crossfit2` (no hyphen) and
  `https://preview.colorlib.com/theme/crossfit2/` returns HTTP 200 (25 KB
  HTML + `css/style.css` 33 KB) — that is the live demo analyzed here. The
  TEMPLATES.md screenshot (`crossfit2-free-template.jpg`, 1200×946, viewed
  in a browser) matches the live render 1:1.
- **Visual design (screenshot + live render):** dark navy `#081624` + lime
  green `#82D026` palette on white/`#F3F4FF`. Square (0-radius) buttons,
  uppercase Oswald nav/headings, PT Sans body. Hero: kettlebell lifter over
  snowy mountains, 90px white headline. Then booking strip (lime photo /
  light-grey form), 4 lime service tiles, photo quote band, Lifestyle &
  Diet split, 3 giant-label photo boxes, lime CTA band, Google Map with
  dark address card, dark footer. Sporty, high-contrast, flat Bootstrap-era
  aesthetic.
- **Structure (1:1, verified live):**
  1. Transparent `header.header-section` — logo left; nav Home (active,
     lime bg) / About us / Classes / Blog / Contact (uppercase Oswald
     `#081624`, hover underline bar); phone pill (`#F3F4FF`, lime circle
     icon, "+546 990221 123"); lime search square (opens search overlay
     with "Search here....." input + rotated-+ close switch).
  2. `hero-slider` — 3-slide owl carousel, each `.single-hero-item` 703px
     tall, photo bg, "What is Crossfit?" 90px white h1 + lorem p +
     lime "Read More" primary-btn; 84×84 `#081624` square arrows
     (hover lime); slide content animates up from below.
  3. `booking-classes` — left (col-lg-6) lime photo panel 280px,
     "Book Your First Class" 48px white h2 + p; right (col-lg-6)
     `#F3F4FF` form panel 265px: col 1 = "Your Name", "Your Phone";
     col 2 = "E-mail Address", lime "Submit". Inputs 48px borderless
     Oswald 16px, placeholder `#858585`, 30px apart.
  4. `services-section.spad` — centered title "Join Our Gym Today" 48px
     `#081624` + 52×7 lime bar above + lorem p; 4 lime tiles (icon +
     white h4): Crossfit, Fitness, Climbing, Cardio + Streching.
  5. `client-says.set-bg` — photo band (padding 200/195px), 48px/60px
     white quote + "Annie Thorisdottir," + span "Crossfit athlete".
  6. `lifestyle-section.spad` — text left (title "Lifestyle & Diet" + 2
     paragraphs + Read More), photo right.
  7. `boxes-section` — 3 full-bleed photo columns with 110px white
     bottom-centered labels: Crossfit, WOD, Kids & Teens.
  8. `callto-section` — lime band, 48px white "Come & Train With Us" + p +
     dark `#081624` "Join Now" btn (padding 18px 45px).
  9. `.map` 585px — Google Maps iframe + dark translucent address card
     (364×385, opacity .75, left-arrow notch): "Main Str, no 23, NY, New
     York PK 23589" / "+546 990221 123 contact@industryalinc.com".
  10. `footer-section` `#081624` — copyright left (Oswald 14px 500 white
      opacity .37), 5 social icons right (pinterest, facebook, twitter,
      dribbble, behance) with 48px lime hover disc.
  11. Hidden `.search-model` overlay (search triggered from header).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-10):**
  - Brand lime **#82D026**; dark navy **#081624**; light **#F3F4FF**;
    muted **#858585**; white #fff.
  - Fonts: **Oswald** (nav/buttons/headings/inputs/footer, 400/500/700,
    uppercase) + **PT Sans** (body 400/700). Google Fonts link:
    `family=Oswald:wght@400;500;700&family=PT+Sans:wght@400;700`.
  - `.primary-btn`: 14px 500 Oswald uppercase, padding 22px 55px, white
    on `#82D026`, letter-spacing .5px, radius 0. `.callto-btn`: `#081624`
    bg, padding 18px 45px.
  - Section title h2: 48px/50px 500 `#081624` + centered 52×7 lime bar
    30px above (`:after`). Hero h1: 90px 700 white. Client quote h2:
    48px/60px white. Callto h2 48px/50px white. Booking h2 48px white.
    Boxes h1: 110px white, line-height 90%.
  - `.single-services`: `#82D026`, center, padding 22px/30px, white icon
    - h4, margin-bottom 30px.
  - `.booking-form`: `#F3F4FF`, 265px; inputs 48px, border none, Oswald
    16px 400, margin-bottom 30px, padding-left 25px, placeholder
    `#858585`.
  - Hero slide: height 703px, padding-top 220px, content fade/slide-up.
  - Owl nav: 84×84 `#081624` white 30px, hover `#82D026`.
  - `.map-address-text`: `#081624`, 364×385, opacity .75, padding-left
    83px, 30px left-arrow notch.
  - Footer: `#081624`, padding 35px/30px 40px; reserved Oswald 14px 500
    white .37; social `:after` 48px lime circle.
- **Recreation approach:** Tailwind grid (NO Bootstrap); hero carousel =
  small stateful slider (useState index + prev/next square buttons, no
  owl.carousel dependency; auto-advance optional); flaticon → lucide
  (Dumbbell, Flame, Mountain, HeartPulse); photos → seeded picsum
  (`picsum.photos/seed/barbell-<n>/<w>/<h>`); Oswald + PT Sans via Google
  Fonts; Google Maps lazy embed iframe kept; search overlay = toggle;
  brand "CrossFit"/"Crossfit" → "Barbell" (text logo — source logo.png is
  an asset, do not copy); document title "Barbell — Gym & CrossFit
  Template"; nav links can be `#` anchors (single-page recreation of the
  demo).
- Accessibility: labels/placeholders on all inputs, `aria-label` on icon
  buttons (search toggle, carousel arrows, social links), semantic
  `<main>` landmark, `alt` text on photos.

## Tasks

- [ ] Implementer: copy the simplest existing app → `apps/barbell`
      (package `@free-react-templates/barbell`), wire the Tailwind v4
      theme tokens per the spec.
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage (vitest + Testing Library).
- [ ] Section order: header → hero carousel (3 slides) → booking strip →
      services (4 tiles) → client quote → lifestyle split → photo boxes
      (3) → CTA band → map + address card → footer.
- [ ] Tokens in `@theme`: `--color-brand #82D026`, `--color-ink #081624`,
      `--color-mist #F3F4FF`, `--color-muted #858585`; fonts
      `--font-display Oswald`, `--font-body "PT Sans"`.
- [ ] Header: transparent; logo left ("Barbell" text/icon); nav
      Home(active, lime bg)/About us/Classes/Blog/Contact; phone pill
      `#F3F4FF` + lime circle icon + "+546 990221 123"; lime search square
      toggling the search overlay ("Search here....." + close switch).
- [ ] Hero: 3 slides, 703px tall, photo bg, 90px white h1 "What is
      Crossfit?" + paragraph + lime "Read More"; 84×84 `#081624` square
      prev/next arrows (hover lime); slide content animates up.
- [ ] Booking: left lime photo panel 280px + 48px white h2 "Book Your
      First Class" + p; right `#F3F4FF` panel with Name/Phone/E-mail
      inputs (48px, borderless, Oswald 16px, placeholder `#858585`) +
      lime Submit; validation (name/phone required, email format) +
      confirmation on success.
- [ ] Services: centered 48px title + 52×7 lime bar + 4 lime tiles
      (lucide icon + white label) — Crossfit, Fitness, Climbing,
      Cardio + Streching; 4-up desktop, 2-up tablet, stacked mobile.
- [ ] Client quote: photo band + 48px white quote + "Annie Thorisdottir," + span "Crossfit athlete".
- [ ] Lifestyle: text left (title + 2 paragraphs + Read More) / photo
      right.
- [ ] Boxes: 3 full-bleed photo columns + 110px white bottom-centered
      labels (Crossfit, WOD, Kids & Teens).
- [ ] CTA band: lime bg, 48px white "Come & Train With Us" + p + dark
      "Join Now" btn (padding 18px 45px).
- [ ] Map: lazy Google Maps iframe (585px) + dark 364×385 address card
      (opacity .75, left notch) with street + contact rows.
- [ ] Footer `#081624`: copyright left (Oswald 14px white/37%) + 5 social
      icons right (Pinterest/Facebook/Twitter/Dribbble/Behance via inline
      SVG brand icons — lucide-react has no brand icons) with lime hover
      disc.
- [ ] Search overlay: hidden by default; toggled by header search button;
      close switch (rotated +); input "Search here.....".
- [ ] Poppins-free: Oswald + PT Sans via Google Fonts link in index.html;
      document title "Barbell — Gym & CrossFit Template"; `<main>`
      landmark.
- [ ] Photos: seeded picsum `barbell-<n>/<w>/<h>` (hero slide-1..3,
      booking, client-bg, lifestyle, box-1..3); no copied assets.
- [ ] `scripts/verify-app.sh barbell` until green (typecheck + lint +
      vitest 100% + build).
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge.
