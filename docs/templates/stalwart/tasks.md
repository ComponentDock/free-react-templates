# Stalwart (ColorLib Congoro) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-stalwart` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Congoro" — free construction / architecture website
  template. Source: https://colorlib.com/wp/template/congoro/ (two `- [ ]`
  entries in TEMPLATES.md — lines 564 and 1340; mark both `[x]` when done).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/congoro/`
  (HTTP 200, ~29.4KB, `<title>` "Construction") + `assets/css/style.css`
  (~72KB, SCSS-compiled, minified). Rendered in a browser and inspected
  visually via screenshots; computed styles verified for hero overlay,
  slider-footer, info-man box, buttons, footer. The TEMPLATES.md screenshot
  (`congoro-colorlib-template.jpg`, 1200×946) confirms the design (older
  snapshot: nav "SERVICES", phone 1-800-569-369). Aesthetic: bold,
  industrial, high-contrast — red #FF1A35 + near-black #1E1E1E + white,
  Oswald display + Barlow body, square buttons, red overlay hero.
- **Structure observed (1:1):**
  1. `header.header-area.header-transparent` (absolute over hero) →
     `.main-header.header-sticky`: `.logo` in a WHITE box (bg #fff, padding
     32px 35px; img 146×38) left; `.main-menu` — uppercase Barlow 14px/600
     white links (Home, Service, Project, About, Blog with `.submenu`
     dropdown bg #1E1E1E — Blog / Blog Details / Elements, Contact; hover
     ::after 3px white underline); `.header-righ` — `.search-form` (icon +
     input expanding to 140px on focus) + `.header-right-btn` →
     `a.header-btn` "Free Quote" (bg #1E1E1E, white Oswald uppercase
     16px/600, padding 39px 60px, radius 0; icon #FF5E14). Sticky scroll:
     `.header-sticky.sticky-bar` → fixed, bg **#FF1A35**, height 102px,
     shadow 0 10px 15px rgba(25,25,25,0.1). Mobile: slicknav hamburger →
     repo-standard mobile menu.
  2. `div.slider-area` → `.single-slider.slider-bg2.slider-height.hero-overly`
     (single slide; bg `img/hero/hero2.jpg` cover, 900px; ::before overlay
     **rgba(255,26,53,0.82)**): `.stock-text` — 2× `h2` "Construction"
     (Oswald 160px/600 white uppercase, absolute top -73px, watermark);
     `h1` "Innovation starts with a dream and a plan" (95px/600 white lh
     1.1, mb 50px); `span` (uppercase 18px white ls 0.03em, ml 33px,
     ::before 25px×2px white line) > `a` "Discover Work" — a TEXT LINK,
     not a button.
  3. `div.slider-footer.section-bg.d-none.d-sm-block` (bg **#FF1A35**,
     ml 14%, **mt -150px** overlapping hero, z 2): flex row — (a)
     `.heading-cap` white box (padding 29px 34px 24px 35px): `h2` "We are
     here to help you" (Oswald 40px/600 uppercase #0A0A0A, `<br>` split);
     (b-d) `.single-caption` ×3 (width 20.33%, 3rd d-none <lg, 4th
     d-none <xl): `.caption` flex (icon img circle, mr 15px) +
     `.contact-cap`: `h4` white 20px/600 mb 16px + `p` (source repeats
     "1-800-506-266 / contact@congoro.com" in all three — paraphrase to
     real phone/email/hours): "Call Us" (phone icon), "Location" (map-pin
     icon), "Opening Hour" (clock icon).
  4. `div.tittle.top-padding` (pt 120px): centered `.section-tittle
.text-center.mb-65` — `h2` `<span>/ </span>OUR PROMISE AND VALUES`
     (Oswald 40px/600; span color #FF1A35).
  5. `div.visit-tailor-area.fix`: `.tailor-offers` left (49% × 700px, bg
     `img/gallery/visit_bg.jpg` cover) + `.info-man` (bg **#1E1E1E**,
     padding 35px 37px, absolute bottom 68px right 70px, text-center):
     `.head-cap` (mb 9px) `h3` "50" (**#FF1A35** 120px/800 lh 1) + `p`
     "Years of Experience" (white 18px); `.tailor-details` right (36%,
     padding 20px 20px 20px 80px): 2× `.details-sinlge` (2nd mb-30) — `h2`
     "Our Promise" + 2 lorem paragraphs → paraphrase; `a.btn_01.visit-btn`
     "Learn More" (outline red: 1px #FF1A35, red uppercase 14px/500,
     padding 14px 43px, radius 0; hover solid red white).
  6. `section.home-blog.section-bg1` (bg **#F2F4F8**): `.section-tittle
.section-tittle2.mb-60` — `h2` "/ Services We Offer" (38px);
     `.items-active.owl-carousel` — 8 `.single-blogs.single-blogs2` cards
     (margin 0 12px, 3 per view; owl nav: 47px circles radius 25px 1px
     #C1C1C1, top -81px right): `.blog-img` (mb 25px, relative; hover
     ::before rgba(84,84,84,0.6)) + `a.blog-btn` "View Details" (red
     #FF1A35, white, padding 25px 17px, width 123px, absolute top 50%
     centered; opacity 0 → 1 on hover); `.blogs-cap`: `h5 > a` (28px/500
     #0A0A0A mb 12px; source titles Architecture/Construction/Renovation
     mixed across slides → 4 distinct: Architecture, Construction,
     Renovation, Energy) + `p` blurb → paraphrase.
  7. `div.gallery-area` (container-fluid p-0): 3 `.single-gallery` tiles
     (col-xl-4 p-0 mb-30): `.gallery-img` (height **580px** cover,
     gallery1..3.jpg); ::before = dark bottom gradient (transparent →
     #0a0a0a, opacity 0 → 1 hover); `.thumb-content-box` (absolute
     centered) → `.thumb-content` (absolute bottom -58px, slides up on
     hover; flex space-between; padding-left 40px): `.capt` — `h3` white
     30px/600 mb 25px + `p` + arrow link. Source titles "Energy Station"
     ×3 → paraphrase 3 distinct projects (Energy Station, Skyline Bridge,
     Metro Tunnel).
  8. `section.about-area.section-padding`: `.container.wrapper-border`
     (**border 2px solid #FF1A35; padding 20px**): `.about-img` left
     (col-6) + `.about-caption` right (col-5): `.section-tittle
.section-tittle2.mb-25` — `h2` "Unique Apartment Formats" (Oswald
     30px/600) + `p` (pt-20 pb-20) + `a.btn` "Learn More" (SOLID red
     #FF1A35, Oswald uppercase 14px/400, padding 30px 52px, radius 0;
     hover ::before #cc031b slide-in).
  9. `div.team-area.section-padding`: centered `.section-tittle
.text-center.mb-60` — `h2` "/ Services We Offer" (**SOURCE BUG** —
     team heading duplicates the services heading; use "/ Our Team" or
     "/ Expert Builders"); `.team-active` carousel — 5 `.single-team
.text-center` (margin 0 12px): `.team-img` (overflow hidden, mb 19px,
     hover scale(1.1)) + `.team-social` (absolute bottom 22px center; 3
     icon links slide up/fade in on hover) + `.team-caption`: `h3 > a`
     (#33384e 22px/500, hover #FF1A35; source "Buster Hyman" ×5 →
     paraphrase 5 distinct names) + `p` role ("Real Estate Agent" →
     construction roles: Architect, Site Manager, Civil Engineer, Interior
     Designer, Project Lead). Owl nav arrows like services.
  10. `div.footer-area.footer-padding` (bg **#1E1E1E**, pt 99px): col-3
      brand — `.footer-logo` (mb 25px) + `.footer-pera` (16px/300 lh 1.8 →
      real blurb) + `ul.footer-social` (4 × white 40px circle icons, 18px,
      hover rotateY(180deg); facebook/instagram/twitter/youtube → inline
      SVG brand icons); offset-xl-1 col-2 "Navigation" (`h4.footer-tittle`
      Barlow white 20px/400 mb 29px; links #C1C1C1/300 mb 13px: Home,
      About, Services, Blog, Contact); col-2 "Contact" (address "87/A,
      Green lane, CA 6732", "Real State", "info@josanclick.com", "+10 236
      327 3782" → paraphrase; NO `tel:+` literals in source — plain text
      or runtime-computed hrefs); col-3 "Subscribe Newsletter"
      (`h4.footer-tittle` + `.footer-form`): email input (height 47px, bg
      rgba(255,255,255,0.1), white text, radius 0, placeholder " Enter
      your email") + "Subscribe" button (red pill: bg #FF1A35, radius
      35px, Oswald 16px/500, padding 25px 43px; hover dark slide;
      vision-verified red); `.footer-bottom-area` → `.footer-border`
      (border-top 1px rgba(255,255,255,0.2), pt 23 pb 10, mt 50) →
      `.footer-copy-right.text-center` (source "made with ♥ by Colorlib" →
      Component Dock credit; text #C1C1C1 18px/300, i/a #FF1A35).
  11. `#back-top` (40px red #FF1A35 circle, fixed right 31px bottom 18px,
      white arrow, shadow 0 0 10px 3px rgba(108,98,98,0.2)) + animated
      double-arrow wrapper.
- **Design tokens:** Brand red **#FF1A35** (hero overlay rgba(255,26,53,0.82),
  "/ " span prefixes, solid Learn More `.btn`, outline `.btn_01`, sticky
  header bar, slider-footer strip, "50" number, View Details `.blog-btn`,
  team hover, footer links/heart, back-top, hover slide #cc031b).
  Near-black **#1E1E1E** (Free Quote button, submenu, info-man box, footer).
  Headings **#0A0A0A**, body **#656565**, muted **#C1C1C1**/**#999999**,
  team name **#33384e**, kicker **#74706B**. Section bg: hero photo + red
  0.82 overlay; strip red; promise white; services **#F2F4F8**; gallery
  white; about white + 2px red border; team white; footer #1E1E1E. Font:
  **Oswald** (headings + buttons) + **Barlow** (body + nav + footer
  tittles); Google Fonts `Barlow:wght@300..800` + `Oswald:wght@300..700`.
  Buttons mostly SQUARE (radius 0): `.btn` solid red 30px 52px; `.btn_01`
  outline red 14px 43px; `.header-btn` black 39px 60px; `.blog-btn` red
  25px 17px w-123 centered; `.submit-btn` red pill radius 35px 25px 43px.
  Hero CTA = text link with 25px white line. Headings: h1 95px, stock-text
  160px, section h2 40px (38px tittle2, 30px about), heading-cap 40px,
  "50" 120px, blogs h5 28px, team h3 22px, footer h4 20px/400. Layout:
  hero 900px; strip mt -150px; tailor 49%×700px + info-man bottom-right;
  details 36% + pl 80px; gallery 580px ×3; about border 2px red; team
  margin 0 12px + hover zoom/social; section-padding 100px; footer pt 99px.
- **Recreation decisions:** single-page landing with anchor nav (Home,
  Service, Project, About, Blog, Contact) + black square "Free Quote";
  transparent header → sticky RED bar; hero = picsum photo under
  rgba(255,26,53,0.82) overlay, "STALWART" watermark, white h1, "— Discover
  Work" text link; red contact strip (white "We are here to help you" box +
  3 icon columns with real contact copy); "/ OUR PROMISE AND VALUES" + photo
  block (dark box, red "50" + "Years of Experience") + 2× "Our Promise"
  blocks + outline "Learn More"; services on #f2f4f8 (4 cards +
  arrows + hover View Details); 3 gallery tiles 580px (hover gradient +
  slide-up captions); about in 2px red border box ("Unique Apartment
  Formats" + solid red "Learn More"); team "/ Our Team" (fix duplicate
  heading) + 5 cards (distinct names/roles, hover social); footer #1e1e1e
  (logo + blurb + 4 social circles, Navigation/Contact, Subscribe
  Newsletter form with red pill, Component Dock credit); red back-to-top.
  Images: `picsum.photos/seed/stalwart-N/w/h` (construction subjects —
  screen seeds by subject per the seed-screening method). Fonts: Oswald +
  Barlow via `<link>`. Icons: lucide-react (probe exports: Search, Phone,
  MapPin, Clock, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight,
  ArrowUp, Mail — brand icons NOT in lucide-react, use inline SVG). Copy
  paraphrased into real construction copy (no lorem). `tel:` literals
  banned in source — contact lines as plain text or runtime-computed.

## Tasks / todo outline

1. Scaffold `apps/stalwart` (copy simplest existing app; package
   `@free-react-templates/stalwart`; `npm install` at root to register the
   workspace in package-lock.json; `injectUiSource()` in vite.config.ts;
   MemoryStorage polyfill in src/test/setup.ts if jsdom 30 lacks
   localStorage).
2. `src/index.css`: `@theme` tokens — brand red #ff1a35 (+ hover #cc031b),
   ink #0a0a0a, near-black #1e1e1e, grey-bg #f2f4f8, muted #c1c1c1/#999999,
   body #656565, team #33384e, kicker #74706b; fonts Oswald + Barlow; square
   button radius 0 (Tailwind default) + red pill for Subscribe (radius
   35px).
3. `Header.tsx` (transparent over hero, sticky → red #ff1a35 bar): "Stalwart"
   logo in white box, nav (Home, Service, Project, About, Blog, Contact),
   search icon (expanding input on focus — optional), black square "Free
   Quote" button, mobile hamburger menu.
4. `Hero.tsx` (900px, picsum photo + red overlay rgba(255,26,53,0.82)):
   "STALWART" watermark (large white uppercase, behind), white h1
   "Innovation starts with a dream and a plan", "— Discover Work" text link
   (line + uppercase white text).
5. `ContactStrip.tsx` (red #ff1a35, negative top margin overlapping hero):
   white box "We are here to help you" + 3 columns (Call Us / Location /
   Opening Hour) with icons and real phone/email/hours copy.
6. `Promise.tsx`: centered "/ OUR PROMISE AND VALUES" heading (red "/ "),
   left picsum photo + dark #1e1e1e box bottom-right ("50" red + "Years of
   Experience"), right 2× "Our Promise" blocks + outline-red "Learn More".
7. `Services.tsx` (bg #f2f4f8): "/ Services We Offer" + 4 cards
   (Architecture, Construction, Renovation, Energy; photo, title, blurb;
   hover dark overlay + centered red "View Details" box) + prev/next arrow
   buttons (or static responsive grid — note owl shows ~3 per view).
8. `Gallery.tsx`: 3 tiles (580px picsum photos) with hover dark gradient +
   slide-up white caption (title + blurb + arrow link).
9. `About.tsx`: 2px red border box — photo left, "Unique Apartment Formats"
   heading + paragraph + solid red "Learn More" right.
10. `Team.tsx`: "/ Our Team" (fix source's duplicated services heading) + 5
    member cards (distinct names + construction roles, hover zoom + 3
    social icons) + prev/next arrows.
11. `Footer.tsx` (#1e1e1e): logo + blurb + 4 social circles (inline SVG
    brand icons), Navigation / Contact columns, Subscribe Newsletter form
    (email input + red "Subscribe" pill), copyright bar with Component
    Dock link.
12. `BackToTop.tsx`: fixed red circular button bottom-right (scroll-to-top).
13. `App.tsx` composition (order 1:1), document title "Stalwart —
    Construction Company".
14. Tests per component (scenario-style), 100% coverage; run
    `npm run verify:app -- stalwart`.
15. Commit `feat: stalwart — construction template (ColorLib Congoro)`,
    push `feat/template-stalwart`, open + immediately squash-merge PR,
    re-dispatch `Deploy to Surge.sh -f app=stalwart` if needed, mark `[x]`
    (both lines 564 and 1340) in TEMPLATES.md with surge URL,
    `npm run readme:status`.
