# Outpost — design notes (ColorLib Taxa)

Source slug: `taxa` · Preview: https://preview.colorlib.com/theme/taxa/
(verified 2026-10-01, HTTP 200, 29,380 bytes, `<title>Taxa Adventure</title>`;
`css/style.css` fetched, 81,138 bytes).
Screenshot reviewed:
https://colorlib.com/wp/wp-content/uploads/sites/2/taxa-free-template.jpg

## Structure order (1:1 with reference)

1. Navbar — transparent over hero, cube wordmark "outpost" left, uppercase
   white links (Pages/Blog dropdowns), outlined "BOOK A TRIP" button +
   search icon; fixed black bar on scroll
2. Hero — fullscreen flat illustration (pink→purple sunset sky, layered
   purple mountains, dark-purple pine forest, sun + birds), white uppercase
   eyebrow "Plan a trip to Santorini Village" + huge white Playfair serif
   "Outpost"
3. Services — gradient eyebrow "We're Offering these Popular Services" +
   h1 "Getting Adventure with Services" + 3 cards (text details on top,
   `#f7f9fd` illustration panel below; purple glow hover)
4. CTA band — h1 "Get Ready for Real time Adventure" + black "Book a
   Trip" button + floating illustration right
5. Packages — h1 "Famous Trips Packages" + 3 cards with gradient date
   badge (yellow→red on hover), location/duration meta, "Read More"
6. Popular Places — h1 "Popular Places Around the World" + 4 full-bleed
   image cards ("Proper Guided Tour" / "Santorini Island Dream Holiday
   and Fun package"), darken + slide-up title on hover
7. Team — h1 "Intelligent Team Members" + 4 cards, white info box slides
   up on hover ("Randy Weaver" / "Senior Barrister at law")
8. Newsletter band — dark purple, illustration left, white h1 "Subscribe
   for our Newsletter" + purple `#c251da` input + overlapping gradient
   "subscribe" button
9. Testimonials — centered slider: quote icon, "Fanny Spencer", 5 stars,
   quote; circular avatar thumbnails with `#ff2f8b` active ring
10. Blog — h1 "Latest Posts from Blog" + 3 cards (Calendar "13th Dec" +
    Heart "15" meta, "Cruise Private Party Booking Available Now")
11. Footer — `#04091e`: About Agency · Navigation Links (2 lists) ·
    Newsletter (input + gradient icon button) · Instagram Feed ×8 (8
    thumbs, 4-per-row); footer-bottom → Component Dock link

## Section-by-section fidelity notes

- **Signature gradient:** `linear-gradient(90deg, #ff2f8b 0%,
  #9035f9 100%)` — pink → purple. It is the design's core motif:
  `.primary-btn` base, `.main_title p` gradient-clipped eyebrows
  (`background-clip: text`, uppercase, letter-spacing 1px),
  `.single-package .date` badge, `.click-btn` newsletter submits. Put
  `brand-gradient` into `@theme`. Second gradient: date-badge hover
  `linear-gradient(90deg, #fff098 0%, #f54e71 100%)` (yellow → red).
- **Headings are SERIF:** the theme rule `h1..h6 { font-family: "Playfair
  Display", serif; font-weight: 700; color: #000000; }` is the template's
  signature. Hero h2 is 120px white (80px ≤1199px, 50px ≤767px);
  section h1 48px; package date day 32px Playfair. Body is Roboto
  14px/300 `#777777`, line-height 24px; nav links + buttons Roboto 600
  12px uppercase.
- **Hero illustration:** the original is a flat illustrated scene
  (`img/banner/home-banner.png` — magenta sky, sun, purple ranges,
  pine silhouettes, birds), NOT a photo. Recreate with the signature
  gradient sky + a purple-tinted silhouette layer (picsum seed under a
  heavy brand-gradient overlay, or layered CSS gradients). Centered white
  uppercase eyebrow + white Playfair h2; min-height 900px/650px.
- **Navbar:** absolute transparent over the hero (nav links line-height
  80px, white, uppercase, hover/active `#ff2f8b`). Dropdowns: white bg,
  items with `#ededed` bottom borders, active/hover item bg `#ff2f8b`
  white text, CSS triangle pointer `#eeeeee`. "BOOK A TRIP" is a
  `.primary-btn` variant: transparent bg, 1px white border, white text,
  padding 7px 28px, hover text+border `#ff2f8b`. Search icon opens an
  overlay form ("Search Here" input + close icon). Scrolled state
  `navbar_fixed`: fixed black bar `#000000`, shadow
  `0px 3px 16px rgba(0,0,0,0.1)`, line-height 70px (mobile collapse
  max-height 340px, scrollable).
- **Services cards:** details ABOVE image (unusual — text block with h5
  21px Playfair + lorem + gradient "Read More", then `.feature-thumb`
  panel bg `#f7f9fd` padding 40px below). Card 1px `#eeeeee` border;
  hover → transparent border + `box-shadow 0px 5px 50px
  rgba(129,74,255,0.2)` (purple glow). Titles: Desert Riding Turning
  So much Flowery / Relaxation in the Local Beach Campfire / Forest
  Exploration with Energy Package.
- **CTA band:** `.cta-area` light illustrated bg, h1 48px black left
  (col-5), black `.primary-btn` "Book a Trip" (bg `#000000`,
  line-height 48px, padding 0 38px, letter-spacing 2px; hover →
  transparent bg / black text); `.cta-img` illustration absolute
  `top: -58%` overlapping the band (hidden on mobile).
- **Package cards:** `.single-package` 1px `#eeeeee` border. `.date`
  badge absolute top-left: signature gradient, white, day Playfair 32px
  + month 13px, padding 12px 11px; hover card → badge swaps to the warm
  yellow→red gradient. `.meta-top`: MapPin icon "Stockholmes" + Calendar
  icon "5 days 6 nights". h4 Playfair title, lorem, gradient "Read More".
- **Popular Places:** `.single-popular-places` full-bleed image cards;
  `.popular-places-text` absolute bottom-center (max-width 330px):
  uppercase eyebrow "Proper Guided Tour" + white h4 21px. Hover → image
  overlay darkens, text slides up (bottom 0→80px). Original is an owl
  carousel of 4 identical Santorini cards — recreate as React-state
  slider or static responsive grid (no carousel library).
- **Team cards:** `.team_item` 1px `#eeeeee` border; `.hover` white box
  width 90%, absolute, bottom -120px → slides in on hover (padding 20px,
  left padding 0→20px on desktop): h4 "Randy Weaver" + p "Senior
  Barrister at law". 4 columns desktop.
- **Newsletter band (cta-area2):** dark illustrated bg
  (`img/cta-bg2.png` cover), white text. Left col-5 illustration
  (`.cta-img2`, hidden on mobile, text-align center ≤767px). Right:
  white Playfair h1 48px "Subscribe for our Newsletter" + lorem. Input:
  bg `#c251da`, white text/placeholder 13px/300, 60px tall, min-width
  390px (280/190px responsive), square. `.click-btn` gradient square
  overlapping right edge (left -45px, top 10px, uppercase 12px white).
  Original posts to MailChimp — recreation validates client-side +
  confirmation state.
- **Testimonials:** centered `.testi-item`: quote icon image, h4 name,
  five stars, wow-fadein quote paragraph ("As conscious traveling …
  Mother Earth…"). Thumbnails: circular (border-radius 50%), 2px border
  transparent → `#ff2f8b` on active/hover. React-state slider, 3 slides.
- **Blog cards:** image thumb; `.blog-meta` (Calendar "13th Dec" +
  Heart "15"); h5 title link "Cruise Private Party Booking Available
  Now"; lorem excerpt.
- **Footer:** bg `#04091e`, `.footer_top` padding-bottom 80px. Widgets:
  About Agency (paragraph); Navigation Links (two col-5 lists — Home/
  Features/Services/Portfolio + Team/Pricing/Blog/contact; links `#999999`
  14px line-height 25px, hover `#ff2f8b`); Newsletter (paragraph + input
  "Enter Email" + gradient `.click-btn` icon submit); "Instragram Feed"
  (fix typo; `.instafeed` flex-wrap, `li` width 25% → 8 thumbs 4-per-row).
  Footer-bottom: original "This template is made with by Colorlib" —
  recreation MUST link Component Dock instead.
- **Section rhythm:** `.section_gap` 120px vertical (80px ≤991px);
  `.section_gap_top` 120px top; `.section_gap_bottom` 120px bottom.
- **Buttons are SQUARE everywhere** (radius 0): gradient primary,
  outlined navbar variant, black CTA variant, gradient newsletter
  submits. Only rounded elements: testimonial thumbnails (50%).
- **Picsum seeds:** `outpost-hero`, `outpost-service-1..3`,
  `outpost-cta`, `outpost-cta-bg`, `outpost-package-1..3`,
  `outpost-place-1..4`, `outpost-team-1..4`, `outpost-newsletter`,
  `outpost-testi-1..3`, `outpost-blog-1..3`, `outpost-insta-1..8`.
- **Fixes over the original:** "Instragram Feed" → "Instagram Feed";
  footer attribution → Component Dock link; lorem copy may be paraphrased
  but keep the same kind of content.
