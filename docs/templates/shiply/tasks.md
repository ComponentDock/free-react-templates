# Shiply (ColorLib Logistics) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shiply`.

## Source mapping

- **ColorLib item:** "Logistics" (TEMPLATES.md — appears 3×: lines 442, 1083,
  2965; all rows point to the same source, one prep covers all; verified with
  `grep -c 'wp/template/logistics/'` = 3).
- **Source URL:** https://colorlib.com/wp/template/logistics/
- **Preview URL:** https://preview.colorlib.com/theme/logistics/ — **HTTP
  200, live** (confirmed 2026-08-11, ~23.3 KB HTML, `<title>Logistics —
Colorlib Website Template</title>`). The TEMPLATES.md slug `logistics`
  MATCHES the live preview slug (no lookup needed this time).
- **Preview CSS:** https://preview.colorlib.com/theme/logistics/css/style.css
  (~23.6 KB) — also imports bootstrap.min, aos, owl.carousel,
  magnific-popup, jquery-ui, bootstrap-datepicker, flaticon, icomoon. Site
  is jQuery + Bootstrap 4 + owl-carousel + AOS + stellar + magnific-popup —
  NOT Tailwind. Hero + video band backgrounds are inline
  `style="background-image: url(images/...)` — recreate as CSS backgrounds.

## Reference research (done — do not redo)

### Screenshot (`logistics-free-template.jpg`, 1200×946)

Matches the live template: cargo ship (MSC containers) hero photo with dark
overlay, "WORLDWIDE FREIGHT SERVICES" + orange "GET STARTED!"; below, the
3-column overlap strip (orange "BEST PRICES" / dark grey "GET FREE QUOTE"
form / orange "24/7 SUPPORT"); white body. The live preview DOM + parsed
stylesheet are the authoritative reference; the screenshot confirms the same
design.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Navbar** `header.site-navbar.py-3` (position absolute, width 100%,
   z-index 1999, transparent over hero): `h1 > a.text-white.h2` brand
   "Logistics" (→ "Shiply"); `ul.site-menu` — Home (`li.active`), About Us,
   Services (`li.has-children` > `ul.dropdown`: Air Freight, Ocean Freight,
   Ground Shipping, Warehousing, Storage — white bg, 2px `#f89d13` top
   border, links `#343a40`, hover bg `#f4f5f9`/`#25262a`, active
   `#f89d13`), Industries, Blog, Contact — `a` 14px uppercase, ls .1em,
   #fff, hover/active `#f89d13`. Mobile: `a.site-menu-toggle` hamburger →
   off-canvas panel `div.site-mobile-menu` (300px right, bg #fff,
   translateX(110%)→0, shadow, z 2000): close icon (→ lucide X, 30px) +
   same links 20px `#212529`, hover/active `#f89d13`.
2. **Hero** `div.site-blocks-cover.overlay` (bg hero_bg_1.jpg inline, cover
   center, `::before` rgba(0,0,0,0.4), min-height 600px/calc(100vh)) >
   centered col-md-8: `h1` "Worldwide Freight Services" (4rem/900 #fff
   uppercase, mb-5; 2rem ≤ 992px) + `a.btn.btn-primary.py-3.px-5` "Get
   Started!" (square, uppercase, ls .2em; hover: transparent + 2px white
   border + white text).
3. **Overlap strip** `div.row.overlap-section` (margin-top -100px — the
   LATER `.overlap-section` rule in style.css wins over -150px; z-index 9;
   no-gutters align-items-stretch; 3 × col-md-4):
   - `div.feature-1.pricing.h-100.text-center` — bg `#f89d13`, padding
     30px 50px, rgba(255,255,255,0.6) 15px text: `div.icon` 80×80 circle
     (2px rgba(255,255,255,0.5) border) > span 35px white (icon-dollar →
     lucide BadgeDollarSign); `h2.heading.my-4` "Best Prices" (22px
     uppercase #fff); p.
   - `div.free-quote.bg-dark.h-100` — **computed bg `#343a40`** (Bootstrap
     `.bg-dark` `!important` beats the template's `.free-quote`
     `background:#eb9007` — VERIFIED in the live browser; use `#343a40`):
     `h2.heading.my-4.text-center` "Get Free Quote"; form: label "Name" +
     `input.form-control` (43px, radius 0, transparent, 2px
     rgba(255,255,255,0.5) border, #fff text, italic 13px white-40%
     placeholder "Enter Name"; focus 2px #fff), label "Email" + input
     "Enter Email"; submit `button.btn.btn-primary.py-2.px-4.btn-block`
     "Get Quote". Submit → success state.
   - `div.feature-3.pricing.h-100.text-center` — bg `#e18a07`, same card:
     span icon-phone → lucide Phone; `h2.heading.my-4` "24/7 Support"; p.
4. **What We Offer** `div.site-section` (padding 5em/80px desktop, white):
   centered `div.col-md-7.text-center.border-primary` (mb-5): `h2.mb-0.text-primary`
   "What We Offer" (uppercase 700 `#f89d13`) + `.border-primary:after`
   80×3px `#f89d13` bar centered below; `p.color-black-opacity-5` sub-line;
   3 × `div.unit-4.d-flex` (col-md-6 col-lg-4): `div.unit-4-icon.mr-4`
   span 3rem `#f89d13` (flaticon-travel/sea-ship/frontal-truck → lucide
   Plane, Ship, Truck) + `h3` 20px (Air Freight / Ocean Freight / Ground
   Shipping) + p + `p.mb-0 > a` "Learn More" (`#f89d13`).
5. **Services carousel** `div.site-section.block-13` (z-index 1) —
   owl-carousel `nonloop-block-13` → client-side state: 5 × `a.unit-1.text-center`:
   img (img_1..5.jpg → picsum seeds; object-fit cover, hover scale 1.05);
   `.unit-1:after` bottom gradient transparent→rgba(0,0,0,0.8) (0–18%
   transparent, 99–100% 0.8); `div.unit-1-text` absolute bottom -90px →
   30px hover: `h3.unit-1-heading` 1.5rem #fff (Storage / Air Transports /
   Cargo Transports / Cargo Ship / Ware Housing) + `p.px-5` (opacity 0→1
   hover, rgba(255,255,255,0.5)). Controls: `.block-13 .owl-nav` centered
   below (bottom -90px), prev/next padding 20px, 30px, #000, disabled
   opacity .2.
6. **More Services** `div.site-section.bg-light` (computed bg `#f8f9fa` —
   Bootstrap bg-light wins over template's `#ccc`, VERIFIED) — same
   centered title block: `h2.font-weight-light.text-primary` "More
   Services" + p "We Offer The Following Services"; 6 × `div.unit-4.d-flex`
   (col-md-6 col-lg-4): icons flaticon-travel (Plane), sea-ship (Ship),
   frontal-truck (Truck), flaticon-barn (Warehouse), flaticon-platform
   (Boxes), flaticon-car (Car); h3 20px — "Air Air Freight" (source typo →
   "Air Freight", flag in PR), Ocean Freight, Ground Shipping, Warehousing,
   Storage, Delivery Van; p + "Learn More".
7. **Video band** `div.site-blocks-cover.overlay.inner-page-cover` (bg
   hero_bg_2.jpg inline, `background-attachment: fixed`, min-height 600px /
   calc(30vh), dark overlay) > centered col-md-7: `a.play-single-big.mb-4`
   (90×90 circle, 2px #fff border, span 50px #fff → lucide Play, hover →
   120×120) + `h2.text-white.font-weight-light.mb-5.h1` "View Our Services
   By Watching This Short Video". Source opens Vimeo
   (vimeo.com/channels/staffpicks/93951774) via magnific-popup → client
   modal or plain link.
8. **Testimonials** `div.site-section.border-bottom` (1px `#edf0f5`):
   centered title "Testimonials" (font-weight-light text-primary + bar);
   `div.slide-one-item.home-slider.owl-carousel` → client state: 4 ×
   `div.testimonial` (max-width 800px, center): `figure.mb-4` — img
   (person_3/2/4/5.jpg → picsum portrait seeds; max-width 100px, radius
   50%, margin auto) + p name (John Smith / Christine Aguilar / Robert
   Spears / Bruce Rogers); `blockquote` italic 1rem quote. Controls:
   `.home-slider .owl-nav` — 50×50 circles at 50% left/right, bg
   rgba(0,0,0,0.2), 25px #fff, hover bg #000.
9. **Blog** `div.site-section`: centered title "Our Blog" +
   "See Our Daily News & Updates"; 2 × `div.h-entry` (col-md-6 col-lg-6):
   img (blog_1/2.jpg → picsum, mb 30px); `h2.font-size-regular` 20px > a
   "Warehousing Your Packages"; `div.meta.mb-4` "by Theresa Winston • Jan
   18, 2019 at 2:00 pm • News" (`#b3b3b3` 14px); p excerpt.
10. **CTA** `div.site-section.border-top` (1px `#edf0f5`): centered
    col-md-12: `h2.mb-5.text-black` "Try Our Services" + `a.btn.btn-primary.py-3.px-5`
    "Get Started".
11. **Footer** `footer.site-footer` (bg `#333333`, padding 4em 0 → 8em
    desktop): `col-md-9` row of 3 × `div.col-md-3` widgets — `h2.footer-heading.mb-4`
    (16px #fff) + `ul.list-unstyled` (li mb 10px): "Quick Links" /
    "Products" / "Features" — each lists About Us, Services, Testimonials,
    Contact Us (SOURCE DUPLICATES all three — keep per source or paraphrase
    distinct sets, note in PR); links `#999999` → white hover; `col-md-3`
    "Follow Us": 4 social a (icon-facebook/twitter/instagram/linkedin →
    inline SVG simple-icons, lucide has NO brand icons); `col-md-3`
    "Subscribe Newsletter": `input.form-control.border-secondary.text-white.bg-transparent`
    (placeholder "Enter Email") + `button.btn.btn-primary` "Send" — submit
    → success state. Copyright row `div.row.pt-5.mt-5.text-center` >
    `div.border-top.pt-5` (border-top rgba(255,255,255,0.1)): p "Copyright
    © 2026 Shiply — All rights reserved" + lucide Heart (`#f89d13`); footer
    p `#737373`, a `#999999`.

## Design tokens (see spec for full table)

- brand-orange `#f89d13` (buttons, section headings + 80×3px bars, unit-4
  icons, nav hover/active, Learn More, dropdown border + active, form focus),
  orange-dark `#e18a07` (24/7 Support card), quote-dark `#343a40` (Get Free
  Quote card — NOT `#eb9007`, see gotcha), ink `#212529` (mobile menu),
  body-grey `#4d4d4d`, muted `#b3b3b3` (blog meta, footer links), footer-grey
  `#999999` (footer links, hover #fff), footer-text `#737373`, footer-bg
  `#333333`, light `#f8f9fa` (More Services bg), border-light `#edf0f5`
  (section dividers), dropdown-hover `#f4f5f9`/`#25262a`, cover overlay
  rgba(0,0,0,0.4), unit gradient transparent→rgba(0,0,0,0.8).
- Font: Poppins only (Google Fonts 200/300/400/700/900) — brand h2, nav
  14px uppercase ls .1em, hero h1 4rem/900 (2rem mobile), section h2
  uppercase 700, card h3 20px, feature headings 22px uppercase, buttons
  uppercase ls .2em, footer-heading 16px.
- Radii: buttons/inputs SQUARE (radius 0). Circles: feature icons 80px
  (2px white-50% border), play button 90px → 120px hover, avatars 100px,
  testimonial arrows 50px.
- Spacing: site-section 5em/80px desktop; overlap -100px z-9; feature cards
  30px 50px padding; hero h1 mb-5; unit-4 icon mr-4 3rem; unit-1-text
  bottom -90px→30px; block-13 nav bottom -90px; h-entry img mb 30px; footer
  8em desktop; widget li mb 10px; copyright row pt-5 mt-5; container 1140px.

## Implementation tasks (todo outline)

1. Scaffold: copy simplest existing app → `apps/shiply`, package
   `@free-react-templates/shiply`; register workspace (npm install at root
   so package-lock.json registers it).
2. index.html: title "Shiply — Logistics & Freight Services", Poppins Google
   Fonts `<link>` (200,300,400,700,900).
3. `@theme`: brand-orange `#f89d13`, orange-dark `#e18a07`, quote-dark
   `#343a40`, ink `#212529`, body-grey `#4d4d4d`, muted `#b3b3b3`,
   footer-grey `#999999`, footer-text `#737373`, footer-bg `#333333`, light
   `#f8f9fa`, border-light `#edf0f5`, fonts.
4. Data module `src/data.ts`: nav links (6 + 5 dropdown), 3 offer rows, 5
   carousel slides, 6 more-services rows, 4 testimonials, 2 blog posts,
   footer widgets + socials.
5. Components (tests first, per section):
   - `Navbar.tsx` — brand + desktop menu + Services dropdown + hamburger +
     off-canvas mobile menu.
   - `Hero.tsx` — cover photo + overlay + headline + Get Started CTA.
   - `OverlapStrip.tsx` — 2 feature cards + free-quote form (submit →
     success state).
   - `WhatWeOffer.tsx` — title block + 3 icon rows.
   - `ServicesCarousel.tsx` — 5 image slides + prev/next (index state).
   - `MoreServices.tsx` — 6 icon rows on `#f8f9fa`.
   - `VideoBand.tsx` — parallax cover + play button (modal or link).
   - `Testimonials.tsx` — 4-slide carousel + edge arrows.
   - `Blog.tsx` — 2 post cards with meta.
   - `CtaStrip.tsx` — "Try Our Services" + Get Started.
   - `Footer.tsx` — 3 link widgets + socials + newsletter (submit →
     success) + copyright.
6. `App.tsx` composition in DOM order; `src/main.tsx` unchanged pattern.
7. Tests: 100% coverage; carousels + dropdown + mobile menu + both forms
   tested with user-event; `getAllByRole` for duplicate footer links.
8. Verify: `npm run verify:app -- @free-react-templates/shiply` (or
   `scripts/verify-app.sh shiply`), then push branch, open PR, squash merge
   immediately, confirm deploy workflow + surge URL 200.

## Fidelity notes / gotchas

- **Quote card color:** the preview CSS says `.free-quote { background:
#eb9007 }` BUT the rendered card is `#343a40` because the HTML also has
  class `bg-dark` and Bootstrap's `.bg-dark` uses `!important`. VERIFIED via
  getComputedStyle in the live browser. Use `#343a40`, not `#eb9007`.
- **bg-light:** template CSS overrides `.bg-light` to `#ccc` but Bootstrap's
  `!important` wins → rendered `#f8f9fa`. Use `#f8f9fa` for More Services.
- **Overlap offset:** two `.overlap-section` rules exist in style.css
  (-150px at line ~539, -100px at line ~617); the later wins → **-100px**.
- owl-carousel (services + testimonials), AOS (hero fade), stellar
  (parallax), magnific-popup (vimeo modal) → all pure client-side state; no
  jQuery dependencies.
- Inline `style="background-image: url(images/hero_bg_*.jpg)"` backgrounds →
  picsum seeds; never copy ColorLib images.
- Source typos to fix in recreation: "Air Air Freight" (More Services →
  "Air Freight"); duplicate footer widgets (Quick Links/Products/Features
  all list the same 4 links — keep per source or paraphrase, flag in PR).
- Buttons are SQUARE — do not round them. Uppercase + letter-spacing .2em
  on all buttons.
- lucide-react has NO brand icons — footer socials (facebook/twitter/
  instagram/linkedin) must use inline SVG simple-icons paths.
- Services dropdown: white bg + 2px `#f89d13` top border; hover row bg
  `#f4f5f9` + text `#25262a`.
- Placeholder images via `https://picsum.photos/seed/shiply-<n>/<w>/<h>`
  (deterministic per template).
- Source "Get Started" hero button links to `#` and the CTA strip button
  links to `booking.html` — recreate both as anchors/`#` (or wire the CTA
  to scroll to the quote form).
