# Magnet (ColorLib Calvino) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-magnet`.

## Design notes (replication findings)

- **Original:** ColorLib "Calvino" — a free SEO / digital-marketing agency
  landing page (source: https://colorlib.com/wp/template/calvino/). TEMPLATES.md
  has ONE copy (line 556, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Calvino → **Magnet** ("we bring you new customers" = a
  customer _magnet_; no collision with `apps/`, `openspec/specs/`,
  `docs/templates/`, `origin/main` — verified 2026-08-16).
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/calvino/` (HTTP 200, 40,816 bytes,
  `<title>SEO | Template</title>`). Stylesheets: bootstrap 4, owl.carousel,
  slicknav, animate, magnific-popup, fontawesome + themify (icons), slick,
  nice-select, and `assets/css/style.css` — a 76,943-byte SHARED sheet with
  rules for many themes: the pink `#ff4495` gradient rules and the
  Calvino-specific classes (`.slider-bg1`, `.hero-btn`, `.single-cat`,
  `.section-tittle`, `.stups-area`, `.about-low-area`, `.footer-area`…) apply;
  IGNORE the orange `#E67118` `.btn` rules (other themes' leftovers, overridden
  here). Google Fonts @import: **Jost 300–800** (body/nav) + **Nunito 300–900**
  (headings). JS: jquery + bootstrap tabs + owl/slick carousels + slicknav
  mobile nav + magnific-popup video — re-implement tabs + carousel in React,
  no third-party libs.
- **Screenshot:** `calvino-free-template.jpg` (1200×946, viewed in browser) —
  **matches the live DOM, no variance.** White modern agency page: pink swirl
  logo + "Calvino", centered menu (Home, About, Services, Case Study, Blog,
  Contact), phone + pink "Let's Talk" top-right; hero split — left pink pill
  badge "Digital Marketing Expert", dark heading "We bring you new customers",
  gray paragraph, bright pink pill "Explore Services"; right office photo with
  pink semi-circle gradient shape + white circular play button; pastel blob
  bottom-left; services: pink uppercase "OUR SERVICES" + "Provide Awesome
  Service With Our Tools" + 4 white cards (light pink circle icons) over a
  dotted grid; about: "We Create a Steps to Build a Successful Digital
  Product" + white "Explore More" pill. **Footer is below the screenshot
  fold** — tokens from CSS (see below).
- **Brand system:** primary = vivid pink `#ff4495`; CTA treatment = vertical
  gradient `#ff4495 → #ff6d6d → #7db9e8` (buttons, hero accent shape); dark
  navy `#192839` headings/nav/hover fills; body `#545454` Jost; pastels
  `#FFE1EE` (icon circles), `#f9f9ff`/`#f0e9ff` tints; `#131933` counter
  captions; `#656565` section sub-copy; `#1A1A1A`/`#5E5E5E` footer text.
- **Buttons:** primary `.btn_0`/`.hero-btn` — pink gradient, white Nunito
  18px/500, `padding:15px 36px`, `border-radius:30px` pill, ArrowRight icon
  slides right on hover; secondary `.boxed-btn` — white bg + pink text +
  `padding:18px 44px` ("Explore More"); pricing `.get-btn` — pink gradient,
  `border-radius:40px`, `padding:11px 23px`, capitalize; video `.btn-icon` —
  white circle, pink on hover. Header "Let's Talk" `.header-btn2` — pink
  underline-dotted style (Jost 18px, `border-bottom:1px dotted #fff`).
- **Section eyebrow:** `.section-tittle > span` — `#FF4495`, 13px, uppercase,
  `letter-spacing:0.1em`, `margin-bottom:18px`. Section h2: Nunito 36→40px/700,
  lh 1.4, `#192839`, `margin-bottom:12px`; `.section-tittle` `margin-bottom:50px`.
- **Hero:** `.slider-bg1` = `background-image:url(../img/hero/h1_hero1.png)`
  cover; `.hero-caption` z-index 2. Badge Jost 14px `#FF4495`; h1 Nunito
  58px/700/`#192839` lh 1.2 (responsive 47/34/51/33px); p `#545454` 16px/30px.
  Accent shape: 300×405px gradient semi-circle on the image side.
- **Services:** `.single-cat` white, `border-radius:5px`, `padding:40px 21px`,
  soft shadow; `::before` `#192839` bottom-up fill (height 0→100%, .6s,
  z-index -1); `.cat-icon` 78×78 circle `#FFE1EE` bg / `#FF4495` glyph /
  `border-radius:50px` / `margin-bottom:50px`, icon bg turns white on hover.
  Dotted grid behind (screenshot) — CSS radial-gradient dot grid or inline SVG
  data-URI.
- **Pricing:** `nav-tabs` Yearly/Monthly (`#nav-one` / `#nav-two` panes, THREE
  `.single-card` per pane = six in markup, same three plans repeated). Card:
  `padding:35px 40px`; `.card-top .cat-icon` 78×78 WHITE circle, shadow
  `0 15px 25px rgba(0,4,74,.04)`, pink glyph; `.card-top span` "Basic" pink
  16px `border-radius:20px` mb 19px; `.card-mid h4` "$ 05.00" `#192839`
  30px/700; features: "Increase traffic 50%", "Social Media Marketing",
  "10 Free Optimization", "24/7 support"; `.get-btn` "Get Started".
- **Why Choose Us:** eyebrow "Why Choose US"; h2 "We are an SEO company that
  specializes in developing"; counters `.counter` Nunito 36px/700 `#FF4495`:
  "450 +" / "Successfully completed projects", "860" / "Highly specialised
  employees" (caption h5 Jost `#131933` 24px + p `#545454`).
- **Case Study:** `.stups-area .single-sutps` — 4 image cards, "Marketing"
  tag + title "Discover, Explore the Product"; hover `::before`
  `linear-gradient(rgba(41,38,33,0) 0%, #292621 100%)`.
- **Testimonials:** owl carousel — quote (Pointing/blind texts), avatar, name
  "Robert", role "Creative Director at Colorlib" → recreation role must NOT
  reference ColorLib ("Creative Director" + optional Component Dock).
- **Footer:** `.footer-wrapper.section-img-bg2` `data-background="assets/img/
gallery/footer-bg.jpg"` — background IMAGE (approximate with dark gradient
  band or picsum bg; NEVER copy). Columns: blurb ("Duis aute irure dolor
  inasfa reprehenderit in voluptate velit esse cillum"), "Navigation" (Home,
  About, Services, Blog, Contact), "Services" (Drone Mapping, Real State,
  Commercial Construction — source leftover, keep same KIND), "Support"
  (same), "Contact Us" (address, `contact@carwash.com` source artifact →
  generic email, phone "10 (87) 738-3940"). `.footer-tittle h4` `#1A1A1A`
  20px/600 mb 40px; `.footer-pera p` `#5E5E5E` 16px lh 1.8. `.footer-bottom-area`
  white bg: "Copyright © All rights reserved | made with ♥ by Colorlib" →
  **"© <year> Magnet. All rights reserved. Made with ♥ by Component Dock"**
  with the `https://www.componentdock.com/` link — NO ColorLib in `apps/magnet`.
- **Icons (lucide-react):** Play (video), ArrowRight (CTAs), Smile,
  CalendarDays, LayoutGrid (service glyphs), MapPin, Phone, Mail (contact),
  Check (features), **Magnet** (brand logo mark — perfect fit). Probe imports
  with `typeof`.
- **Grid:** services `col-lg-3 col-md-6` (4-across lg / 2-across md); pricing
  3-across lg; case-study 4-across lg; header nav → slicknav hamburger below
  lg; hero stacks below lg. No horizontal scroll.
- **Images (picsum seeds):** magnet-1 hero photo (1600/800), magnet-2 about
  (600/500), magnet-3 why-choose (600/500), magnet-4..7 case study (400/300),
  magnet-8..10 testimonial avatars (100/100), magnet-11 footer bg; brand logos
  = muted text wordmarks.
- **A11y:** main/header/footer landmarks; tabs `role=tablist/tab/tabpanel` +
  aria-selected + arrow keys; carousel controls aria-labels; icon-only
  elements aria-hidden or named; focus-visible rings everywhere.

## Structure order (1:1)

1. `header.header-area.header-transparent` (sticky → white on scroll): brand
   (pink Magnet icon + "Magnet"), menu (Home, About, Services, Case Study,
   Blog, Contact), phone "Call Us: +12 345 678 910", "Let's Talk" pink pill;
   hamburger below lg
2. `div.slider-area` → `div.single-sliders.slider-height.slider-bg1` (photo
   bg) → `div.hero-caption`: badge "Digital Marketing Expert" · h1 "We bring
   you new customers" · p "We build effective strategies…" · `a.hero-btn`
   "Explore Services" · right: photo + pink gradient semi-circle shape +
   white circular play button (video popup affordance)
3. `section.categories-area` (Services): `.section-tittle` eyebrow "Our
   Services" + h2 "Provide Awesome Service With Our Tools" + 4× `.single-cat`
   cards (pink icon circle, title, blurb, navy hover fill) over dotted grid
4. `section.about-area1.about-area2` (About): eyebrow "About Us" + h2 "We
   Create a Steps to Build a Successful Digital Product" + paragraphs +
   `.boxed-btn` "Explore More" + image
5. `section.pricing-card-area` (Pricing): eyebrow "Pricing Plan" + h2 "Choose
   Your Best Pricing Plan" + tabs Yearly/Monthly → 2 panes × 3 `.single-card`
   (icon, "Basic", "$ 05.00", features, "Get Started")
6. `section.about-low-area` (Why Choose Us): eyebrow "Why Choose US" + h2 "We
   are an SEO company that specializes in developing" + p + "Explore More" +
   counters "450 +" / "860" + image
7. `div.brand-area`: client logo row (text wordmarks)
8. `div.stups-area` (Case Study): eyebrow "Case Study" + h2 "Some Of Our
   Awesome Stuffs" + 4 image cards ("Marketing" tag + title, dark gradient
   hover overlay)
9. `div.testimonial-area`: carousel — quote + avatar + "Robert" / "Creative
   Director"
10. `footer` → `.footer-wrapper.section-img-bg2` (bg band) → `.footer-area`:
    blurb + "Navigation" + "Services" + "Support" + "Contact Us" →
    `.footer-bottom-area` (white): "© <year> Magnet. All rights reserved.
    Made with ♥ by Component Dock"

## Implementation tasks

- [ ] Scaffold `apps/magnet` (copy simplest existing app; package
      `@free-react-templates/magnet`; `public/CNAME` =
      `magnet.free.componentdock.com`; homepage =
      `https://magnet.free.componentdock.com`); register the workspace in
      `package-lock.json` (root `npm install` before commit)
- [ ] `index.html`: title "Magnet — Digital Marketing", Google Fonts `<link>`
      for Nunito (400+700) + Jost (400+500)
- [ ] `src/index.css`: `@theme` tokens — `--color-brand: #ff4495`;
      `--gradient-brand: linear-gradient(to bottom, #ff4495, #ff6d6d,
    #7db9e8)`; navy `#192839`; body text `#545454`; eyebrow pink; icon
      circle `#FFE1EE`; dotted-grid utility
- [ ] Components: `Navbar.tsx` (transparent → sticky white, hamburger below
      lg), `Hero.tsx` (photo bg, badge, h1, subtext, CTA pill, accent shape,
      play button), `Services.tsx` (eyebrow + 4 cards w/ navy hover fill +
      dotted grid), `About.tsx`, `Pricing.tsx` (Yearly/Monthly tabs +
      3 cards/pane), `WhyChooseUs.tsx` (counters), `BrandStrip.tsx`,
      `CaseStudy.tsx` (4 image cards + hover overlay), `Testimonials.tsx`
      (carousel), `Footer.tsx` (bg band, 4 columns, Component Dock copyright)
- [ ] Tests (TDD, 100% coverage): title/landmarks; nav (links, phone, CTA,
      hamburger aria-expanded, sticky class); hero (badge, h1, CTA pill,
      play-button aria-label, accent shape); services (4 cards, icon circles,
      hover fill, dotted grid); about; pricing (tabs a11y + pane switching, 3
      cards/pane, get-btn); counters values; brand strip; case-study (4 cards,
      hover overlay); testimonials (carousel controls + keyboard); footer
      (columns, copyright, Component Dock link, NO ColorLib string);
      responsive stacking; a11y focus-visible
- [ ] `npm run verify:app magnet` → full per-app gate green
- [ ] Open PR `feat/template-magnet` → merge immediately
      (`gh pr merge --squash --delete-branch`)
- [ ] Bookkeep TEMPLATES.md line 556 `[x]` + surge URL
      `https://magnet.free.componentdock.com` (implementer's job — prep
      stream never touches markers)
