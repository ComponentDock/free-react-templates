# Blade (ColorLib Barcut) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-blade` by an implementer stream.

## Design notes

- **Original:** ColorLib "Barcut" — free barber shop website template
  (source: https://colorlib.com/wp/template/barcut/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/barcut/`
  (HTTP 200, 42.3KB) + stylesheet `css/main.css` (76.2KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. Screenshot
  `barcut-free-template.jpg` (1200×946) confirms: dark moody warm hero
  photograph with centered white serif headline + circular gold play button
  ("Watch Intro Video"), white content sections below, muted metallic
  gold/mustard accent (#ba9236/#fdc136) on logo/pill buttons/photo frame,
  charcoal Playfair headings + grey Roboto body, standard nav with left links
  (Home, about, barbers, gallery), centered scissors logo, right links
  (pricing, Pages ▾, Blog ▾, Contact).
- **Structure observed (1:1):** header (`header-area`, white bg) →
  hero (`home-banner-area relative`, `owl-carousel home-banner-owl` of 3
  `banner-img` slides b1–b3.jpg with `overlay-bg`, centered `text-wrapper`
  H1 "For All Occasion HairStyle is a Must Try Fashion" 48px #fff capitalize
  - lorem + circular gold "Watch Intro Video") → about (`section-gap-top
about-area`, `single-about row align-items-center`: left `about-content`
    H1 "We Believe that Interior beauty Lasts Long" + paragraph + "Learn More"
    `primary-btn`; right `about-thumb` with about-img.jpg + about-img2.jpg in
    a gold decorative frame) → services (`service-area section-gap`:
    `section-title` "What We Can Do for You" + intro; 4 `single-service`
    cards: image + `rgba(0,0,0,0.3)` bottom caption + top-left tab icon —
    Stylish Hair Cutting / Quality Gel Shave / Beard Trimming / Executive
    Wash) → catalogue (`section-gap catalogue-area`, bg
    `img/catalogue-bg.jpg` cover; `tab-contact-wraper` "Select Your Style
    Shaveing" + 4 tabs each with copy + `view-btn` "View Gallery..." #000
    uppercase 12px ls 2px, hover #bb9236) → team (`team-area section-gap`:
    "We Have All Famous Barbers" + 3 `single-team-member`: Peter Baker / Head
    hair Cut Specialist, Nancy Holmes / Spa & Makeup Specialist, Gavin Hansen
    / Hair Styling Expert) → testimonials (`testimonials-area section-gap-top`,
    bg `testi-bg.jpg` cover, max-height 535px, owl-carousel of Fanny Spencer
    quote slides: `quote.png` + lorem + avatar t1–t4.png + name) → pricing
    (`price-area section-gap-top`: "Choose Your Package" + 3 `single-price`
    col-lg-4 cards: top-sec h4 name + p "Standard Package", bottom-sec h1
    price with `1px dashed #bb9236` borders + 36px 700, end-sec ul (Basic
    hair Cut / Basic Shave / Basic Head Wash / Basic Body Massage / Basic
    Snacks) + `primary-btn price-btn mt-40` "Order Now"; middle card
    `active`: bg #222 + gold h4/h1; $79.00 / $89.00 / $99.00) → blog
    (`blog-area`: "Latest From Blog" + 3 `single-blog` cards, blog1–3.jpg +
    blog-meta + title h4 "Portable Fashion for women") → footer
    (`footer-area section-gap` bg #000: col-lg-5 "About Me" copy + social,
    col-lg-5 `news-widget` "Newsletter" — "Stay updated with our latest
    trends" + `subscribe_form` email input + gold `sub-btn`, col-lg-2
    `social-widget` "Follow Me" / "Let us be social", col-lg-12 `ab-widget`
    copyright "Copyright © All rights reserved | This template is made with
    Colorlib").
- **Design tokens:** Google Fonts **Playfair Display** (all h1–h6, #000,
  line-height 1.2) + **Roboto** (body 16px/26px weight 500 #777; buttons &
  nav 12–13px). Brand **#ba9236** metallic gold (+ highlight #fdc136, dark
  #bb9236, darkest #92732b). Gradient
  `linear-gradient(to right, #ba9236 0%, #fdc136 51%, #ba9236 100%)` on
  `.primary-btn`, gallery overlay, newsletter `sub-btn` (bg-size 200% auto,
  hover shifts right). `.primary-btn`: pill `border-radius: 50px`, padding
  0 38px, line-height 50px, #fff, 12px 500, uppercase,
  `box-shadow: 0 10px 30px rgba(187,146,54,0.3)`. `.price-btn`:
  bg #222, #fff, uppercase, ls 2px, padding 0 57px. `.view-btn`: #000 12px
  500 ls 2px, hover #bb9236. `.section-title h1`: 36px capitalize Playfair.
  Hero H1 48px #fff capitalize. Price `bottom-sec h1`: 36px 700 Roboto with
  dashed #bb9236 borders; active card bg #222 + gold accents. Backgrounds:
  header #fff, hero dark photo + overlay, catalogue + testimonials photo
  covers, footer #000000. Secondary (not brand): #f9f9ff, #4cd3e3,
  #38a4ff, #f4e700, #f44a40, #6382e6, #e66686.
- **Recreation decisions:** light theme default with gold brand; standard
  repo Navbar (site name "Blade", Home link, dark-mode toggle) + Footer
  chrome; hero carousel of 3 seeded images + centered Playfair headline +
  circular gold video button; about split with gold-framed image; 4 service
  cards (image + bottom caption + icon); catalogue on dark photo bg with
  style tabs + "View Gallery..." links; 3-barber team row; testimonials
  carousel on photo bg; 3 pricing cards with dashed-gold price borders +
  active dark middle card; blog row; black footer with newsletter form
  (success state); picsum seeds `blade-N`; Google Fonts via `<link>`.

## Tasks / todo outline

1. Scaffold `apps/blade` (copy simplest existing app; package
   `@free-react-templates/blade`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts).
2. `src/index.css`: `@theme` tokens — brand gold (#ba9236, #fdc136, #bb9236),
   font families `display: "Playfair Display", serif` / `sans: Roboto`;
   gradient utility for primary buttons.
3. `Navbar.tsx`: repo-standard (site name "Blade", Home link, dark toggle).
4. `Hero.tsx`: full-width dark carousel (2–3 slides, seeded images, overlay),
   centered H1 + copy + circular gold "Watch Intro Video" button.
5. `About.tsx`: split — left heading/copy/"Learn More" gold pill, right
   framed image(s).
6. `Services.tsx`: section title + intro + 4 cards (image, icon, caption).
7. `Catalogue.tsx`: dark photo-bg section, heading + style tabs + "View
   Gallery..." links.
8. `Team.tsx`: section title + 3 barber cards (photo, name, specialty).
9. `Testimonials.tsx`: photo-bg carousel of quote slides (avatar + name).
10. `Pricing.tsx`: 3 cards, middle active (dark #222 + gold), dashed-gold
    price borders, feature lists, "Order Now" buttons.
11. `Blog.tsx`: section title + 3 blog cards (image, meta, title).
12. `Footer.tsx`: black footer — about + socials, newsletter form (validated,
    success state), copyright line.
13. `App.tsx` composition (order 1:1), document title
    "Blade — Barber Shop Template".
14. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- blade`.
15. Commit `feat: blade — barber shop template (ColorLib Barcut)`, push
    `feat/template-blade`, open + immediately squash-merge PR, re-dispatch
    `Deploy to Surge.sh -f app=blade` if needed, mark `[x]` in TEMPLATES.md
    with surge URL, `npm run readme:status`.
