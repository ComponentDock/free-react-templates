# Prime (ColorLib Ultim8) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-prime`.

## Design notes (replication findings)

- **Original:** ColorLib "Ultim8" — "Ultim8 - Free Bootstrap 4 Template by
  Colorlib" (source: https://colorlib.com/wp/template/ultim8/). Appears in
  TEMPLATES.md THREE times — dup rows at lines **522, 1211, 2369**; mark ALL
  THREE `[x]` with the surge URL when done.
- **Preview URL:** `https://preview.colorlib.com/theme/ultim8/` (HTTP 200,
  ~59 KB HTML, fetched 2026-08-15). Stylesheet:
  `https://preview.colorlib.com/theme/ultim8/css/style.css` (~75.8 KB, fully
  extracted for tokens). libs: bootstrap 4.3.1, jquery, owl.carousel, aos,
  magnific-popup, datepicker, flaticon + icomoon icon fonts. Google Font
  **Open Sans** (the ftco `body` override at the END of style.css wins the
  cascade over Bootstrap's Work Sans). Screenshot
  (`ultim8-free-template.jpg` 1200×946, browser-viewed) matches the DOM.
  Demo brands itself "ULTIM8"; recreation uses the NEW name **Prime**.
- **Visual design (DOM + CSS tokens + screenshot):** clean corporate
  digital-agency one-pager on white/light-gray. Screenshot: white fixed
  navbar ("ULTIM8" bold logo, uppercase links, thin-bordered "GET A QUOTE"
  pill); split hero (blue headline "Template for Digital Agency" + two CTAs
  left; laptop + phone dashboard mockups right); blue→mint gradient band
  "We Provide High Quality Services"; blue circular service icons.
- **Structure (1:1, section order from live DOM):**
  1. **Navbar** (`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark
ftco-navbar-light`, id ftco-navbar): brand "Prime." + links **Home,
     About, Services, Work, Team, Pricing, Blog, Contact** + CTA "Get a
     Quote". Dark at top, light on scroll.
  2. **Hero** (`.hero-wrap`, 630px / 750px mobile; overlay
     `linear-gradient(45deg,#f0f0f0,#fff 55%,#fff)`): left col — `h1`
     "Template for " + typewriter words **[Digital Agency, Portfolio, SEO
     Agency, Business]** (blue `#2f89fc`, 32px, weight 400, strong 500,
     blinking caret), paragraph, buttons "Get a Quote" (solid) + "Our
     Portfolio" (outline); right col — owl-carousel with 3 dashboard images
     (`dashboard_full_1|2|3.png`).
  3. **Gradient strip** (`ftco-section-2`, padding 3em 0, overlay
     `linear-gradient(-45deg,#2f89fc,#55fbc2)`): white h3 "We Provide High
     Quality Services".
  4. **Services** (`ftco-services`): h2 "Our Service Keeps you Happy" +
     subheading "Search Engine & Social Media Optimization Experts"; row 1 =
     Market Research, Business Strategy, Audience Analytics (icon + blurb);
     row 2 (`container-wrap mt-5` services-wrap) = Logo Branding,
     Development, Online Marketing (80px blue circle icons + longer blurbs).
  5. **Counters** (`ftco-counter img`, bg `images/bg_1.jpg`, padding 5em 0):
     6780 Happy Clients, 4500 Running Projects, Project Completed, Cups of
     Coffee — white 34px numbers, rgba(255,255,255,0.7) labels.
  6. **Portfolio** (`ftco-work`): h2 "Our Portfolio" + subheading "We're
     Happy to share our complete Projects"; carousel of 6 works (category
     "Branding", titles "Work 01/02/03", loops 3-visible).
  7. **Pricing** (`bg-light`): h2 "Our Best Pricing" + subheading "Pricing
     Plans"; 4 `.block-7` cards (white, padding 30px, shadow
     `0 2px 5px rgba(0,0,0,0.03)`): Free $0 ("100% free. Forever"), Startup
     $19, Premium $49, Pro $99 ("All features are included"); feature rows
     (150/450/250/450 GB Bandwidth, 100/400/200/400 GB Storage,
     $1.00/$2.00/$5.00/$20.00 /GB Overages, All features); "Get Started"
     button + "Enjoy All The Features" link (3 outline + 1 solid).
  8. **Reasons + Quote form** (`ftco-quote`): LEFT col (`aside-stretch`
     solid `#2f89fc` + `:after` 360% bleed) = heading-section-white "Reasons
     for Choosing Us" + paragraph + 3-item checklist with check icons; RIGHT
     col (white) = "Get a Free Quote" + form: Full Name, Email, Phone,
     Website (2-col), Message textarea, submit "Get a Quote"
     (`btn-primary py-3 px-5`). Controls 52px, white bg, black text, 16px,
     radius 0 (underline style).
  9. **Testimonials** (`testimony-section bg-light`): h2 "Testimony" +
     subheading "Our Happy Customer Says"; 5 slides (quote + "Dennis Green" +
     role: Marketing Manager / Interface Designer / UI Designer / Web
     Developer / System Analytics). Source repeats one name — distinct names
     allowed (content-kind latitude).
  10. **Newsletter** (`ftco-section-parallax`): gradient band, heading
      "Subcribe to our Newsletter" (**fix typo** → "Subscribe"), blurb,
      input "Enter email address" + submit "Subscribe".
  11. **Blog** (`ftco-section`): h2 "Latest Blog" + subheading "Read our
      blog"; 3 cards — `.block-20` 300px image, meta "August 12, 2018 ·
      Admin · 3", title link.
  12. **Footer** (`ftco-footer`, bg `#233142`, padding 6em 0, 16px): brand
      "Prime." + blurb; Quick Links (About, Features, Projects, Blog,
      Contact); Recent Blog (2 entries + "Sept 15, 2018 · Admin · 19");
      Contact Info (203 Fake St. Mountain View, San Francisco, California,
      USA / +2 392 3929 210 / info@yourdomain.com). Copyright bar
      (`#3c312e`): © Copyright + "Made with Component Dock" link
      (https://www.componentdock.com/) — replaces the Colorlib credit.
- **Design tokens (from `css/style.css`):**
  - Brand blue **#2f89fc** (typewriter h1 strong, caret, aside-stretch bg,
    gradient start, 80px service icon circles); brand mint **#55fbc2**
    (gradient end).
  - btn-primary **#78d5ef** (bg/border, text #212529; hover #56caeb /
    #4ac7ea); outline = transparent + border/text #78d5ef.
  - Hero h1 32px (40px ≥992px) #2f89fc weight 400 lh 1.2; overlay
    #f0f0f0→#fff 45deg; hero 630px (750px mobile).
  - heading-section h2 30px (28px mobile) weight 400; subheading 14px block
    mb 20px.
  - Counter number 34px #fff w400; label 16px rgba(255,255,255,0.7).
  - Pricing card: #fff, padding 30px, shadow 0 2px 5px rgba(0,0,0,0.03);
    feature rows #b3b3b3 with strong #000.
  - Quote col: bg #2f89fc, text rgba(255,255,255,0.8), icons #fff.
  - Footer #233142; copyright bar #3c312e; parallax padding 4em 0.
  - Body: "Open Sans", Arial, sans-serif, 16px, w400, lh 1.5, #212529,
    bg #fff; headings inherit (weight 500).
- **Recreation decisions:** flaticon/icomoon glyphs → **lucide-react**
  (Search, Target, BarChart3, PenTool, Code, Megaphone, Check, Mail, MapPin,
  Phone — probe exports with `typeof` first); dashboard mockups → picsum
  placeholders (`https://picsum.photos/seed/prime-<n>/<w>/<h>`) — noted
  deviation (device art can't be copied); owl-carousel → lightweight React
  carousel (aria-hidden on inactive slides; count hidden slides with
  `{ hidden: true }`); typewriter → small React typewriter w/ caret +
  aria-live; counters → count-up on scroll (or static); Open Sans via Google
  Fonts `<link>`; fix "Subcribe" typo; navbar Get-a-Quote modal → scroll to
  quote section; footer credit → Component Dock link. NO ColorLib references
  in app code.

## Implementation task outline

1. Copy the simplest existing app → `apps/prime`; rename package to
   `@free-react-templates/prime`; run `npm install` at repo root (lockfile
   registration); register `injectUiSource()` in `vite.config.ts`;
   `public/CNAME` = `prime.free.componentdock.com`, `"homepage"` =
   `https://prime.free.componentdock.com`. Copy the MemoryStorage polyfill
   from an existing app's `src/test/setup.ts` (jsdom 30 has no localStorage)
   if you need persistence.
2. `@theme` tokens in `src/index.css`: brand blue `#2f89fc`, brand mint
   `#55fbc2`, button primary `#78d5ef`, hero overlay `#f0f0f0→#fff`,
   footer `#233142`, copyright `#3c312e`; Open Sans via Google Fonts `<link>`
   in `index.html`.
3. Components (`src/components/`): `Navbar` (dark top → light on scroll,
   mobile toggle, Get a Quote → scroll link), `Hero` (typewriter + two CTAs +
   dashboard carousel), `GradientStrip`, `Services` (2×3 grid, row-2 80px
   circle icons), `Counters` (bg image + white numbers), `Portfolio`
   (carousel of 6), `Pricing` (4 block-7 cards), `QuoteSection` (blue reasons
   col + validated form), `Testimonials` (carousel of 5), `Newsletter`
   (gradient + email form), `Blog` (3 cards), `Footer` (4 cols + Component
   Dock credit). Reuse `packages/ui` Button/ButtonLink/cn.
4. `src/App.tsx` composes the 12 sections in order; document title "Prime —
   Digital Agency Template".
5. Tests FIRST (red) per spec scenarios (navbar links + mobile toggle; hero
   headline + rotating word + 2 CTAs + 3-image carousel; strip heading;
   services 2×3; counters; portfolio works; 4 pricing plans + features;
   quote form validation + success; 5 testimonial slides; newsletter
   validation; 3 blog cards; footer links incl. Component Dock; section
   order); then implementation; 100% coverage.
6. Verify: `scripts/verify-app.sh prime`; `npm run spec:validate`.
7. PR: `feat/template-prime` → squash-merge to main; PR description includes
   source template, preview URL, design tokens, what differs (lucide icons,
   picsum dashboard placeholders, typewriter implemented in React, carousels
   hand-rolled, typo fix, Component Dock footer credit, navbar CTA scrolls
   instead of opening a modal).
8. Bookkeeping (implementer): mark TEMPLATES.md lines **522, 1211, 2369**
   `[x]` + `https://prime.free.componentdock.com`; `npm run readme:status`;
   deploy via the Deploy to Surge.sh workflow (`-f app=prime` if needed).
