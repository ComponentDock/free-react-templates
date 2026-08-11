# Quay (ColorLib Harbor) — Tasks & Design Notes

> Recreation of ColorLib "Harbor"
> (https://colorlib.com/wp/template/harbor/) under the NEW name **Quay**
> (a stone landing place on a harbor — nautical echo of "Harbor" without
> reusing the source name), per the monorepo naming mandate.

## Design notes (replication findings)

- **Original:** ColorLib "Harbor" — interior design website template
  (source: https://colorlib.com/wp/template/harbor/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/harbor/`
  (HTTP 200, ~23 KB HTML + `css/style.css` ~21.5 KB + `css/bootstrap.min.css`
  ~28 KB parsed for tokens). The live preview is the authoritative reference.
- **Screenshot:** `harbor-free-template.jpg` in TEMPLATES.md matches the
  live design (white navbar + lowercase logo, full-width hero photo of a
  bright living space with white content box, "OUR WORK" photo grid, blue
  CTAs). One discrepancy: the screenshot shows the hero content box on the
  LEFT, the live CSS centers it (`left:50%; translate(-50%,-50%)`) — follow
  the live preview (centered).
- **Visual design (from live preview + screenshot):** minimalist, high-end
  interior-design studio aesthetic — lots of white space, serif
  (Playfair Display) display headlines, sans (Roboto) body, one vivid blue
  accent (#3E64FF) for CTAs, the services section background, and hover
  states; warm real-estate photography (placeholders: picsum).
- **Structure (1:1, section order):**
  1. Navbar (`site-navbar bg-white`, padding 1rem): 3 columns — left links
     About · Gallery · Contact | center logo "Harbor" (`site-logo`, 1.7rem)
     | right links Home · Work · What We Do. Mobile hamburger
     (`site-menu-toggle`) opens a slide-in `site-mobile-menu` panel.
  2. Hero (`owl-carousel-wrapper`, height 100vh, min-height 600px): Owl
     slideshow of 3 background-image slides (`ftco-cover-1`,
     cover/center) + ONE static white overlay card (`box-92819`: bg #fff,
     padding 4rem, max-width 500px, shadow-lg, absolute centered, z-index
     2): h1 "Interior Design" (black), short lorem paragraph, `btn
btn-primary` "Get In Touch".
  3. Work (`site-section`): header row — `heading-39291` h2 "Our Work"
     (uppercase 20px bold #000) left, `more-39291` "View All Works"
     (uppercase 12px bold, pr 20px arrow) right; then 2×2 grid (col-lg-6)
     of 4 `media-02819` cards: image + h3 "Creative Modern House" +
     location "New York City, USA" + read link. Flat images, no borders.
  4. Services (`site-section bg-primary` #3E64FF): h2 "What We Do"
     (text-white) + intro para; 3-col grid (col-md-6 col-lg-4) of 6
     `service-29193` cards (bg #fff, padding 50px 30px, text-center):
     icon + uppercase bold h3 (16px) + blurb.
  5. Testimonials (`site-section section-4`): centered `slide-one-item`
     carousel, 3 slides: quote + "Name — Role" attribution (Mike Dorney /
     James Smith, "CEO and Co-Founder").
  6. Footer (`site-footer bg-light` → custom bg #C9CCD4, padding 4em 0 /
     8em 0 desktop): col 1 (col-md-6) "About Us" + paragraph; col 2
     (col-md-4 ml-auto) "Features" links (About Us, Features, Testimonials,
     Terms of Service, Privacy); col 3 (col-md-4 ml-auto) "Subscribe" +
     email input (`form-control rounded-0 border-secondary bg-transparent`)
     - "Subscribe" `btn btn-primary text-white`. Bottom row: social icons,
       footer nav links, copyright "Copyright © All rights reserved | This
       template is made with ♥ by Colorlib".

## Design tokens (from `css/style.css` + `css/bootstrap.min.css`)

| Token         | Value(s)                                                                                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Primary       | #3E64FF (btn-primary bg/border, services section bg, footer link hover); hover #1845FF bg / #0B3BFF border                |
| Headings      | #000 (heading-39291, footer headings, hero card h1 via text-black); h1 base 3rem                                          |
| Body text     | #212529 / #364d59 dark gray; footer p `gray`; footer links rgba(0,0,0,0.5) → #3E64FF hover                                |
| Section bg    | #fff (work, testimonials), #3E64FF (services), #C9CCD4 (footer, overrides bg-light), #F6F5F5 / #F8F9FA light grays        |
| Muted/border  | #C9CCD4, #CED4DA, #CCC (input borders: `border-secondary`)                                                                |
| Font          | "Playfair Display", serif (display headings) + "Roboto", sans-serif (body) — load both via Google Fonts `<link>`          |
| Buttons       | Bootstrap .btn: padding 0.575rem 0.85rem, 1rem/1.5, radius 0.25rem, border 1px; .btn-primary #3E64FF/white                |
| Section title | heading-39291: uppercase, 20px, bold, #000, mb 30px (white variant in blue services section)                              |
| More link     | more-39291: uppercase, 12px, bold, #000, padding-right 20px (arrow space)                                                 |
| Hero card     | box-92819: bg #fff, padding 4rem, max-width 500px, shadow-lg, absolute centered (top/left 50%, translate -50%), z-index 2 |
| Service card  | service-29193: bg #fff, padding 50px 30px, text-center; h3 uppercase 16px bold                                            |
| Footer        | site-footer: bg #C9CCD4, padding 4em 0 (8em 0 desktop), links rgba(0,0,0,0.5) → #3E64FF hover, footer-heading 16px #000   |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-brand` = #3E64FF, `--color-ink` = #000,
  `--color-fog` = #C9CCD4, `--color-mist` = #F6F5F5, `--color-muted` =
  #CED4DA. Use via Tailwind classes per conventions.
- Google Fonts `<link>` in `index.html`: Playfair Display (500, 700) +
  Roboto (400, 500, 700).
- The only dynamic pieces are the hero slideshow (≥3 slides, auto-rotate
  - accessible controls) and the testimonials carousel (next/prev or
    dots). Implement both with React state (or a tiny carousel hook) — no
    new dependencies. `setInterval` must be cleaned up; remember the
    RTL fake-timer `act()` pitfall in tests.
- Navbar: 3-column grid (left links / center logo / right links), mobile
  hamburger toggling a slide-in panel with aria-expanded + aria-label.
- Services icons: lucide-react equivalents of the flaticon set
  (kitchen/lamp/stairs/blueprint/pantone/dining table) — e.g. CookingPot,
  Lamp, Footprints/Stairs?, DraftingCompass, Palette, Armchair — pick the
  closest lucide icons.
- Hero card is static (one card over the rotating backgrounds), NOT
  per-slide. Reuse a `box-shadow`-heavy white card, centered over the
  image (absolute inset-0 flex center, or fixed-position card).
- Footer subscribe form: zod email validation, per-field error, success
  state, block submit until valid (repo conventions).
- Placeholders: `picsum.photos/seed/quay-<n>/<w>/<h>` — hero 1920×1080ish
  (or 1600×900), work cards ~600×400.
- Do NOT copy the demo's images, fonts files, or CSS — recreate tokens in
  Tailwind. No icon fonts (icomoon/flaticon) — lucide only.
- Original nav link order is asymmetric (left: About/Gallery/Contact,
  right: Home/Work/What We Do) — keep it as-is for fidelity.

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/quay`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh quay` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
