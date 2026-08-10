# Haulage (ColorLib Cargo) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-haulage`.

## Design notes (replication findings)

- **Original:** ColorLib "Cargo" —
  `https://colorlib.com/wp/template/cargo/` (Bootstrap category). TEMPLATES.md
  lines **357**, **925**, **2296**, **2953** — FOUR duplicate rows, all
  `- [ ]`; mark ALL `[x]` when done. Recreation uses the NEW name **Haulage**
  (single word, no collision with `ls apps/` or spec folders).
- **Preview URL:** `https://preview.colorlib.com/theme/cargo/` — **HTTP 200**
  (47.7 KB, 0.21 s), analyzed live. Stylesheets: `css/style.css` (28.8 KB,
  all custom tokens) + `css/bootstrap.min.css` (holds the `.btn-primary`
  orange override). Full ftco/Bootstrap stack: owl.carousel, aos, fancybox,
  flaticon, icomoon.
- **Screenshot** (`cargo-free-template.jpg`, 1200×946, verified via browser
  vision): top bar (email/phone/Twitter/Facebook) → navbar with bold ORANGE
  uppercase "CARGO" logo → hero: shipping-port photo (cranes + ships) under
  a bright blue→cyan gradient, white uppercase headline "CHOOSE YOUR QUALITY
  DELIVERY OF YOUR CARGO", white tracking input + orange "Track Now" button
  → three image cards (Sea Freight ship / Air Freight plane / Package
  Forwarding box) with orange titles on grey text. Modern, tech-forward.
- **Visual design (DOM + CSS tokens + screenshot):**
  - Accent: **#ff8b00** (orange — logo, nav active/hover, section h2s,
    btn-primary, prices, counters, carousel dots, checkmarks, link hovers).
  - Hero overlay: **linear-gradient(45deg, #377aff 0%, #00d9ff 100%)**,
    opacity .95, over a bg image; white text on top.
  - Fonts: headings **Oswald** (uppercase, incl. all section h2s at 3rem /
    2rem mobile), body **Rubik** 1rem/1.7 `#939393`; kicker span 12px
    uppercase letter-spacing .1em bold `#b8b8b8`; logo 2rem uppercase 900.
  - Buttons: `.btn-primary` orange bg/border (bootstrap override), hover =
    outline variant (transparent + orange border/text,
    `.primary-primary-outline--hover`); hero form controls + buttons 55px
    tall, radius 4px, transparent border; `.btn-md` 8px 20px padding.
  - Sections: white (`site-section`) / **#f6f5f5** (`bg-light` — template
    overrides Bootstrap's #f8f9fa); footer **#333333** with white headings
    and `rgba(255,255,255,0.5)` links.
  - Pricing: white cards padding 30px, plan names Oswald uppercase, price
    number **3rem #ff8b00** ($47/$200/$750) + `#cccccc` suffix, 4 feature
    rows w/ orange checks, "Buy Now" btn.
  - Counters: number **4rem #ff8b00** + caption, both block/line-height 1,
    text-center; animate (data-number count-up).
  - Carousel dots: 7px circles `#ccc`, active `#ff8b00`; `owl-all` grids
    render as static multi-column on desktop (≥992px), slide on mobile.
  - Blog entry: thumbnail `flex: 0 0 150px`, img radius 4px; title link
    `#000` → `#ff8b00` hover; meta line e.g. "Apr 19, 2019".
  - Top bar: `border-bottom: 1px solid #e9ecef`.
- **Section order (1:1, index page):**
  1. `div.top-bar` — email `info@yourdomain.com`, phone `1+ (234) 5678 9101`,
     Twitter/Facebook icons.
  2. `header.site-navbar.js-sticky-header` — logo "CARGO" (2rem uppercase
     900 orange) + menu: Home, Services, About Us, Team, Pricing, FAQ, Why
     Us, Testimonials, Blog, Contact; off-canvas `site-mobile-menu` on
     mobile.
  3. Hero `ftco-cover-1.overlay` — 100vh/min-600px, bg image + blue→cyan
     overlay, h1 "Choose Your Quality Delivery of Your Cargo", white
     subtext, tracking form (input "Enter your tracking number" + orange
     "Track Now").
  4. `ftco-service-image-1` (margin-top **-70px**, overlaps hero bottom) —
     3 photo cards: Sea Freight, Air Freight, Package Forwarding (h3 1.4rem
     Oswald orange, p `#999`); hover lifts img 5px + `0 10px 50px -10px
rgba(0,0,0,.3)` shadow (≥768px only).
  5. What We Offer (`site-section.bg-light`) — block-heading-1 (h2 orange
     - blurb) + 6 icon cards: Sea Freight, Air Freight, Package Forwarding,
       Trucking, Warehouse, Delivery.
  6. About Us (`site-section` white) — h2 "About Us" + lorem paragraph.
  7. Video + counters (`site-section.bg-light#about-section`) —
     `block-img-video-1` full-width image w/ play button (fancybox video
     modal) + 4 counters: 50+ Years of Experience, 300+ Companies, 108+
     Covered Countries, 1500+ Couriers.
  8. Our Staff (`site-section`) — carousel of 6 `block-team-member-1`
     cards (photo, Oswald name, role in 12px uppercase `#b8b8b8`, bio,
     social icons): Max Carlson (Co-Founder), Charlotte Pilat (Co-Founder),
     Nicole Lewis (Co-Founder), Jean Smith (Financial Manager), Bob Carry
     (Loader Manager), Anne Fisher (Package Manager).
  9. Pricing (`site-section.bg-light`) — Basic $47, Premium $200,
     Professional $750; 4 orange-check features each; "Buy Now" buttons.
  10. FAQ (`site-section`) — centered h2 "Frequently Ask Questions" + 2-col
      Q&A grid (NOT an accordion): question icon + h4 black Oswald question
      - answer p. Questions: "Can I accept both Paypal and Stripe?", "What
        available is refund period?", "Where are you from?", "What is your
        opening time?" (repeated to fill grid).
  11. Why Us (`block__73694 site-section border-top`) — h2 "Why Us" +
      orange checklist: Cargo express, Secure Services, Secure
      Warehouseing, Cost savings, Proven by great companies + cover image
      block.
  12. Happy Clients (`site-section.bg-light.block-13`) — testimonial
      carousel ×4 (text-center quote + name): Ricky Fisher, Ken Davis,
      Mellisa Griffin, Robert Steward.
  13. Articles (`site-section.py-5`) — blog carousel ×2: 150px thumb,
      "Apr 19, 2019", "Knowing the Difference Is Key to Effective
      Logistics", excerpt, Read More.
  14. Contact Us (`site-section.bg-light`) — Contact Info column (Address:
      34 Street Name, City Name Here, United States · Phone: +1 242 4942
      290 · Email: info@yourdomain.com) + "Get In Touch" form (First name,
      Last name, Email address, textarea "Write your message.", orange
      "Send Message" btn).
  15. `footer.site-footer` (#333) — About Us (blurb + links), Features
      (links), Subscribe to Newsletter (footer-suscribe-form: email input +
      white btn), Follow Us (socials); copyright bottom bar.
- **Behavior:** navbar sticky; hero full-viewport; mobile off-canvas menu
  w/ close button; counters count up on scroll; video play → modal; desktop
  carousels are static grids (owl-all), mobile slides. One-page demo — nav
  links are in-page anchors.

## Tasks (implementation order)

- [ ] `apps/haulage` scaffold (copy simplest existing app; package
      `@free-react-templates/haulage`; `injectUiSource()` in vite.config;
      register workspace + `npm install` at root so package-lock.json
      updates)
- [ ] `src/index.css` theme tokens: `--color-accent: #ff8b00`, hero
      gradient `#377aff → #00d9ff`, body Rubik 1rem/1.7 `#939393`, headings
      Oswald uppercase (Google Fonts `<link>` in index.html: Oswald +
      Rubik), `bg-light #f6f5f5`, footer `#333333`, section h2 3rem orange,
      kicker 12px uppercase `#b8b8b8`
- [ ] `TopBar` — email, phone, Twitter/Facebook inline-SVG icons; bottom
      border `#e9ecef`
- [ ] `Navbar` — sticky, orange uppercase 900 logo, 10 links, active/hover
      orange; off-canvas mobile menu (aria-expanded, Escape/backdrop close)
- [ ] `Hero` — 100vh min-600px, bg image + blue→cyan 45° gradient overlay
      (opacity .95), white uppercase h1 "Choose Your Quality Delivery of
      Your Cargo", subtext, tracking form (55px input + orange "Track Now"
      btn, radius 4px, validation/success state showing the entered number)
- [ ] `ServiceCards` — 3 photo cards (Sea/Air/Package Forwarding), orange
      Oswald 1.4rem titles, grey text, hover lift + shadow; section
      overlaps hero by ~70px (negative margin)
- [ ] `WhatWeOffer` — bg-light section, block-heading (kicker + orange h2 +
      blurb), 6 icon cards (lucide: ship, plane, package, truck, warehouse,
      truck/delivery)
- [ ] `AboutSection` — white section, "About Us" heading + lorem
- [ ] `VideoCounters` — full-width image w/ play button (modal) + 4
      animated counters (50+/300+/108+/1500+, 4rem orange numbers + grey
      captions)
- [ ] `TeamSection` — 6 cards: picsum photo, name, uppercase role
      (12px `#b8b8b8`), bio, social icons
- [ ] `PricingSection` — 3 white cards: Basic $47 / Premium $200 /
      Professional $750 (3rem orange numbers, `#cccccc` suffix), 4
      orange-check features, "Buy Now" buttons
- [ ] `FaqSection` — centered "Frequently Ask Questions" heading + 2-col
      Q&A grid (icon + question + answer; 6+ items)
- [ ] `WhyUs` — border-top section: heading, orange checklist (Cargo
      express, Secure Services, Secure Warehouseing, Cost savings, Proven
      by great companies), cover image block
- [ ] `TestimonialsSection` — bg-light, carousel of 4 quote cards w/ names
- [ ] `ArticlesSection` — 2 blog entries: 150px thumb (radius 4), meta,
      title link (black → orange hover), excerpt, Read More
- [ ] `ContactSection` — Contact Info column + Get In Touch form (First,
      Last, Email, textarea, orange "Send Message"; zod validation,
      error + success states)
- [ ] `Footer` — 4 dark columns (About Us links, Features, Newsletter form
      w/ validation, Follow Us socials) + copyright bottom bar
- [ ] `App.tsx` composition (15 sections in original order, main landmark) + document title "Haulage — Logistics & Cargo"
- [ ] Tests (red→green) for every section; 100% coverage via
      `npm run verify:app -- haulage`
- [ ] PR: source (ColorLib Cargo), preview URL (HTTP 200), tokens,
      renames; after merge mark TEMPLATES.md lines 357, 925, 2296 AND 2953
      `[x]` + surge URL
