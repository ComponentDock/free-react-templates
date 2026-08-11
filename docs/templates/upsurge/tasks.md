# Upsurge (ColorLib Ithost) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-upsurge`.

## Design notes (replication findings)

- **Original:** ColorLib "Ithost" — web-hosting company template
  (source: https://colorlib.com/wp/template/ithost/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/ithost/
  (HTTP 200; ~27 KB HTML + `css/style.css` ~28 KB parsed for tokens).
  Title tag: "IT Host - Hosting Template". Bootstrap 4 + owl-carousel +
  flaticon icons.
- **Visual design (from screenshot `ithost-free-template.jpg`):** dark
  indigo/purple "deep space" gradient hero with stars and pink/purple
  clouds at the horizon; vector rocket (pink body, orange fins, cyan nose)
  flying up on the right; huge white bold "Unbeatable Offers" headline +
  white paragraph + magenta pill "Get your plan". Header transparent over
  the hero: rocket-icon logo "IT Host" left, white links (Home, About us,
  Services, News, Contact), magenta "Login / Register" pill right. Below:
  stark white features section with centered title (small rocket icon,
  uppercase grey eyebrow "THE BEST OUT THERE", bold "See our features").
  Rest of the page taken from preview DOM + CSS (not in screenshot).
- **Structure (1:1, section order):**
  1. Page loader `#preloder` (black overlay + spinner, fades out) —
     optional; skip if it complicates tests.
  2. Header `.header-section` (absolute, transparent over hero, z-index
     99, padding-top 25px): `.site-logo` (rocket img + "IT Host") left;
     `.nav-warp` right — `.user-panel` (Login / Register: bg #eb2b63,
     radius 14px, padding 12px 19px, 14px white, margin 15px 70px 0 30px)
     then `.main-menu` ul (Home, About us, Services, News, Contact; 16px
     white, margin-left 50px, hover #eb2b63); `.nav-switch` (bars icon,
     32px, mobile only).
  3. Hero `.hero-section` (height 835px; bg image `img/bg.jpg` — dark
     space): `.hero-content` flex-centered, text-white, col-lg-6: h2
     "Unbeatable Offers" (90px/600/1, white), p (white lorem), `.site-btn`
     "Get your plan"; `.hero-rocket` (rocket img) on the right.
  4. Features `.features-section.spad` (white; `.section-title`
     margin-bottom 130px): title = small rocket icon img + p "The best out
     there" (12px uppercase, #8e8e8e, letter-spacing 2px) + h2 "See our
     features" (48px/700 #1c1c1c). Grid of 6 `.feature-item` (3 cols):
     `.ft-icon` (87px circle, bg #eb2b63, white 43px icon, radius 50%,
     margin-bottom 40px) + h4 + p. Items: Buy your Domain (flaticon
     domain-registration), Cloud Database (server), SSD-Only (devices),
     Smart Contacts (smartphone), Free Support (folder), Viral Marketing
     (viral-marketing).
  5. Domain search `.domain-search-section.spad.set-bg` (dark bg image
     `img/domain-bg.jpg`): `.section-title.st-white` (white h2, same
     eyebrow) + `.domain-form-warp`: form `.domain-search-form` — input
     (white, radius 14px, height 59px, padding 0 31px, width calc(100% -
     239px), placeholder "Enter your website's name") + `.site-btn`
     "Search" (height 59px); then a small paragraph.
  6. Skills & testimonials `.skills-and-testimonials-section.spad`:
     - Left col-lg-6: 5 `.single-progress-item` (p label 16px #000, then
       `.progress-bar-style` — 8px track, bg #eef6f9, radius 15px; fill
       width = data-progress, bgcolor = data-bgcolor): Illustrator 80
       #eb2b63, Photoshop 90 #eb2bae, SEO 80 #d22beb, E-commerce 60
       #972beb, HTML 70 #732beb.
     - Right col-lg-6: `.testimonials-slider` (owl-carousel) with 3
       `.testimonial-item`: `.ti-content` quote bubble (bg #eef6f9, radius
       15px, padding 48px 35px 45px 38px, margin-bottom 42px) + round
       `.ti-author-pic` (set-bg photo) + `.ti-author` h6 name (700) +
       span "Client" (#eb2b63, 700). Slider dots bottom-left.
  7. Pricing `.pricing-section.spad.pt-0` (white): section-title; 3
     `.pricing-plan` (col-lg-4): `.pricing-title` (radius 14px, padding
     16px, gradient #7246b3 → #431483, h4 white uppercase) + `.pricing-body`
     (h2 "$9" 60px/400 #585858 + span "/Month"; ul of 5 li, #585858,
     margin-bottom 36px; `.site-btn` "Get Plan" width 100%, padding 22px).
     Middle `.gold-plan`: title bg flat #eb2b63; body inset ring
     `inset 0 0 0 2px #eb2b63` + shadow `0 32px 43px rgba(0,0,0,0.35)`.
  8. Banner `.banner-section.set-bg` (dark bg image `img/banner-bg.jpg`,
     padding 113px 0 96px): col-lg-9 `.banner-text` text-white — h3
     "Dedicated hosting solutions only $129.99/month" (400) + p (opacity
     0.40); col-lg-3 `.site-btn` "Get Started" right-aligned.
  9. Footer top `.footer-top-section.text-white.spad` (bg **#200545**):
     col-lg-4 `.about-widget` (logo img + p opacity 0.25 + `.fw-social` 5
     icons: pinterest, facebook, twitter, dribbble, behance); col-lg-4
     `.footer-widget` "Usefull Links" (.fw-title 18px/400, margin-bottom
     45px; 2 col ul of hosting links — Web Hosting, WordPress Hosting,
     VPS Hosting, Cloud Server, Reseller Package, Dedicated Hosting);
     col-lg-4 "Latest Posts" `.fw-latest-post-widget` with 3 `.lp-item`
     (`.lp-thumb` set-bg photo + `.lp-content` h6 title + span date,
     white opacity 0.25).
  10. Footer `.footer-section` (bg **#1b043b**, padding 20px 0): ul
      `.footer-menu` (5 links, white opacity 0.26, margin-left 40px) +
      `.copyright` (white opacity 0.25, 14px — "All rights reserved | made
      with ♥ by Colorlib" → replace with original attribution).
- **Design tokens extracted from the preview CSS:**
  - Font: **Montserrat** (400/500/600/700), Google Fonts.
  - Brand magenta: **#eb2b63** (buttons, icon medallions, user-panel,
    gold-plan title, hover, author span, bar fills).
  - Indigo/near-black: **#2e1779**, **#0a0228** (button gradient +
    dark section backgrounds); **#7246b3 → #431483** (pricing title
    gradient).
  - Headings **#1c1c1c**; grays **#585858**, **#8e8e8e**, #acacac, #000.
  - Light accent **#eef6f9** (progress tracks, quote bubbles).
  - Footers **#200545** / **#1b043b**, white text opacity 0.25–0.40.
  - Buttons: min-width 186px, padding 17px 25px, radius 14px, bg #eb2b63,
    14px white; full-width in pricing; 59px tall in domain search.
  - Radii: 14px (buttons/inputs/titles/user-panel), 50% (icon circles,
    author pics), 15px (tracks, quote bubbles). `.spad` = 105px padding.
- **Recreation decisions:** dark photo backgrounds → CSS gradient
  `linear-gradient(135deg, #2e1779, #0a0228)` (optionally with a seeded
  picsum overlay at low opacity); rocket art → large lucide `Rocket` icon;
  feature icons → lucide (Globe, Server, Smartphone, Folder, LifeBuoy,
  Megaphone); brand social icons → inline SVG (lucide removed brand icons);
  author photos + post thumbs → `picsum.photos/seed/upsurge-<n>/<w>/<h>`;
  Montserrat via Google Fonts `<link>` in `index.html`; no assets copied.

## Implementation tasks

1. Scaffold `apps/upsurge` (copy the simplest existing app, rename package
   to `@free-react-templates/upsurge`), register workspace + `npm install`
   at root (lockfile!), `injectUiSource()` in vite.config.ts.
2. `src/index.css`: `@theme` tokens — `--color-brand: #eb2b63`,
   `--color-indigo: #2e1779`, `--color-night: #0a0228`, `--color-plum:
#7246b3`, `--color-plum-deep: #431483`, `--color-mist: #eef6f9`,
   `--color-footer-top: #200545`, `--color-footer: #1b043b`; font
   `--font-sans: "Montserrat", sans-serif`.
3. `src/components/Header.tsx` — transparent header over hero: rocket icon
   - "Upsurge" logo left; Login / Register magenta pill + nav links (Home,
     About us, Services, News, Contact, hover → magenta) right; hamburger
     switch + mobile menu.
4. `src/components/Hero.tsx` — dark gradient (indigo → night) full-height
   hero: white "Unbeatable Offers" h2 (large, 600), supporting paragraph,
   magenta pill "Get your plan" button, large Rocket icon right.
5. `src/components/SectionTitle.tsx` — shared centered title: small Rocket
   icon + uppercase grey eyebrow + headline (white variant for dark
   sections).
6. `src/components/Features.tsx` — 6 feature cards in a 3-col grid
   (stacking on mobile): circular magenta medallion (lucide icon) + h4 + p.
7. `src/components/DomainSearch.tsx` — dark gradient band: white section
   title, white rounded input (placeholder "Enter your website's name") +
   magenta "Search" button (same height), supporting paragraph; form
   prevents default submit.
8. `src/components/SkillsTestimonials.tsx` — left: 5 progress bars (label +
   track #eef6f9, fill to % in per-bar color, animated on mount); right:
   testimonial slider (3 slides, quote bubble #eef6f9, round picsum photo,
   name + magenta "Client" role, prev/next or dots controls).
9. `src/components/Pricing.tsx` — 3 plan cards (Basic, STAR, VIP): gradient
   title bar (flat magenta for STAR), $9/Month price, 5-feature list,
   full-width "Get Plan" button; STAR body inset ring + shadow.
10. `src/components/Banner.tsx` — dark gradient band: "Dedicated hosting
    solutions only $129.99/month" + paragraph left, "Get Started" magenta
    pill right.
11. `src/components/FooterWidgets.tsx` — bg #200545: about + 5 social
    icons (inline SVG: Pinterest, Facebook, Twitter, Dribbble, Behance),
    Useful Links two-column list, Latest Posts (3 thumb + title + date).
12. `src/components/Footer.tsx` — bg #1b043b: 5 link menu + original
    copyright line.
13. `src/App.tsx` — compose Header (banner) + main(Hero, Features,
    DomainSearch, SkillsTestimonials, Pricing, Banner, FooterWidgets) +
    Footer (contentinfo); document title "Upsurge — Hosting Template".
14. Tests (TDD, 100% coverage): Header (logo, links, pill, mobile menu),
    Hero (headline, CTA), Features (6 cards, medallions), DomainSearch
    (form, submit prevention), SkillsTestimonials (5 bars + fill widths,
    slider cycling), Pricing (3 plans, gold highlight), Banner (headline +
    CTA), FooterWidgets (widgets, social icons), Footer (menu, copyright),
    App composition + landmark roles.
15. Gate: `npm run verify:app -- upsurge`; PR to main, merge immediately,
    TEMPLATES.md `[~]`→`[x]` + surge URL + `npm run readme:status`.

## Verification checklist (spec)

- `npm run spec:validate` passes
- 100% coverage on `apps/upsurge`
- `npm run verify:app -- upsurge` green
- Full gate green in CI on merge
- Section order 1:1 vs preview; tokens #eb2b63/#2e1779/#0a0228/#7246b3/
  #431483/#eef6f9/#200545/#1b043b, Montserrat via `@theme`
- No ColorLib assets copied (picsum + Google Fonts + lucide + inline SVG
  brand icons only)
