# Uplink (ColorLib Hosthub) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-uplink`.

## Design notes (replication findings)

- **Original:** ColorLib "Hosthub" — web hosting company website template
  (source: https://colorlib.com/wp/template/hosthub/).
- **Preview analyzed:** https://preview.colorlib.com/theme/hosthub/ (HTTP 200,
  "Hosthub"). Live DOM + unminified `css/style.css` parsed for structure +
  tokens; Google Fonts (Roboto 300/400/500/700 + Open Sans for price list
  links) confirmed in the stylesheet. Screenshot `hosthub-free-template.jpg`
  reviewed visually in a browser.
- **Visual design:** modern hosting site in white + electric purple
  `#6247ea` + warm orange `#ec9d5f`. Thin orange top strip (contact left;
  purple "Purchase Hosting" button right); white header with uppercase nav +
  search icon. Hero: solid purple, split layout — white uppercase headline
  "We're Web Hosting Professionals" + orange CTA left, isometric server
  illustration over dotted world map right. Below: white feature cards →
  pricing table → orange solution band → testimonials → purple services band
  with map pattern → blog cards → client logo row → near-black `#04091e`
  footer.
- **Structure (1:1, section order):**
  1. Header — `.top_menu` bg `#ec9d5f` 40px: left phone
     `+880 1234 654 953` + `support@colorlib.com` (12px uppercase white,
     margin-right 50px, hover `#6247ea`); right `.pur_btn` "Purchase
     Hosting" (bg `#6247ea`, 500 12px, line-height 40px, padding 0 40px).
     `.main_menu` white: logo left; uppercase nav Home, About, Services,
     Pages (dropdown: Blog, Blog Details, Elements), Features, Pricing,
     Blog, Contact; search icon. Sticky on scroll.
  2. Hero `.home_banner_area` — solid bg `#6247ea`, `.banner_inner`
     overflow hidden, padding 225px 0. Left `.banner_content`: h2 36px 500
     uppercase white "We're Web Hosting Professionals" + p 300 white
     opacity .6 max-width 405px + `.banner_btn` "Explore Our Features" (bg
     `#ec9d5f`, white, padding 0 50px, line-height 50px, radius 5px, hover
     text `#6247ea`). Right `.banner_map_img`: dotted world map + isometric
     server illustration (racks, database, green/orange status lights).
  3. Features `.feature_area.p_120` — `.main_title` centered (h2 36px 500
     "Some Features that Made us Unique" + p 14px/24px `#777` max-width
     570px, margin-bottom 75px); 6 `.feature_item` cards (1px `#eee`
     border, radius 10px, padding 60px 20px 60px 30px; hover shadow
     `0 10px 30px rgba(98,71,234,0.1)` + transparent border): lnr icon 24px
     `#6247ea` + h4 20px 500 `#222` + p. Icons: lnr-cloud, lnr-earth,
     lnr-screen, lnr-inbox, lnr-chart-bars, lnr-lighter. (DOM repeats
     "Expert Technicians" ×4 — use six distinct names: Expert Technicians,
     Data Security, 24/7 Support, Fast Servers, Easy Setup, Money Back
     Guarantee.)
  4. Pricing `.price_area.p_120` — bg `#fafcff`; `.main_title` "Choose Your
     Best Pricing Plans"; `.price_inner` white radius 10px shadow
     `0 10px 30px rgba(98,71,234,0.1)`; 4 `.price_item` cols with 1px
     `#eee` vertical divider (`.price_text:before`, height 336px, right
     edge; none on last col): h3 plan (Basic / Starter / Business /
     Enterprise) 20px 500 `#222`; h5 audience (Individuals/Freelancers /
     Small Companies / Medium Companies / Large Companies) 14px 300 `#777`;
     h2 price (£39/mo, £59/mo, £79/mo, £99/mo) 36px `#222` + span 14px 300
     `#777`; `.list` links 14px `#777` Open Sans: RAM 1–8 GB, Core CPU 1–8,
     SSD Storage 20–100 GB, Transfer 1–2 TB, Network In 40–100 Gb;
     `.price_btn` block bg `#6247ea` white line-height 50px bottom radius
     10px "Get Started".
  5. Solution `.solution_area.p_120` — bg `#ec9d5f` centered: h4 36px white
     "Looking for a Custom Solution?" + p 14px white opacity .6 max-width
     770px + `.white_btn` "Request Free Consultation" (white bg, `#222`
     text, radius 5px, hover `#6247ea`).
  6. Testimonials `.client_says_area.p_120` — 3-col row: left `.says_left`
     h3 "What our Client's Say about us" + p; two `.says_item` cards: h4
     author (Nellie Vega, Estelle Andrews) + h5 role ("Head of Marketing,
     Apple Inc.") + p quote.
  7. Services `.service_area.p_120` — bg `#6247ea` + map-pattern overlay
     (`.service_area:before` `img/map-bg.png`); `.main_title.white` "Top
     Services We Provided"; 6 `.service_item` cards (bg
     `rgba(255,255,255,0.1)`, radius 10px, padding 40px 60px 40px 40px,
     border 1px `#9381eb`, margin-bottom 30px; hover: white bg, h4 `#222`,
     p `#777` opacity 1): h4 18px 500 white + lnr icon 24px (padding-right
     15px) + p white opacity .6. Services: Cloud Hosting, Web Hosting,
     Cloud Computing, VPS Hosting, Server Analytics, Data Mining.
  8. Latest blog `.latest_grid_blog_area.p_120` — `.main_title` "Latest
     Posts from Our Blog"; 3 `.l_blog_item` cards (1px `#eee` border,
     radius 10px, padding 60px 30px; hover shadow purple + transparent
     border): h6 date badge (inline-block bg `#ec9d5f` white 300 12px
     line-height 30px padding 0 20px radius 3px) "10 April, 2018"; h4
     title 20px `#222` hover `#6247ea`; p excerpt; `.view_text` meta links
     (`fa-eye`, `fa-commenting`, `fa-share`) 14px `#aaa`. (DOM repeats one
     title ×3 — use three distinct hosting blog titles.)
  9. Client logos `.clients_logo_area.p_120` — bg `#fafcff`; owl-carousel
     row of 5 logo images (grayscale, full color on hover). Use styled text
     placeholders — never copy original logo files.
  10. Footer `.footer-area.p_120` — bg `#04091e`; "Top Products" links
      (Managed Website, Manage Reputation, Power Tools, Marketing Service),
      "Newsletter" (input 13px border `#333` max-width 340px + `.sub-btn`
      bg `#6247ea` 500 12px line-height 38px padding 0 38px, hover
      transparent), "Instagram Feed" 2×4 image grid (picsum placeholders),
      social icons (`fa-facebook`, `fa-twitter`, `fa-dribbble`,
      `fa-behance`); copyright bar (replace ColorLib credit with "© <year>
      Uplink. All rights reserved.").
- **Design tokens (from `style.css`):**
  - Primary: electric purple `#6247ea` (top-bar CTA, hero bg, feature
    icons + hover shadow, price button, services bg + `#9381eb` borders,
    newsletter button, footer hovers).
  - Accent: warm orange `#ec9d5f` (top menu bg, hero CTA, solution band,
    blog date badge).
  - Neutrals: `#fff`, `#fafcff` (price + logos bg), `#f9f9ff` (hero
    paragraph), `#222222` (headings), `#777777` (body), `#aaaaaa` (meta),
    `#eeeeee` (borders/dividers), `#04091e` (footer), `#333333` (footer
    input border).
  - Fonts: Roboto 300/400/500/700 everywhere; Open Sans for price list
    links. Load both via Google Fonts `<link>` in `index.html`.
  - Buttons: hero CTA radius 5px padding 0 50px line-height 50px; price
    btn block purple radius-bottom 10px; newsletter btn 12px 500.
  - Cards: radius 10px; hover `0 10px 30px rgba(98,71,234,0.1)`.
  - Rhythm: `.p_120` = 120px vertical padding; `.main_title` centered h2
    36px 500 + p 14px `#777` max-width 570px margin-bottom 75px; white
    variant for purple sections (p opacity .6).
- **Recreation decisions:** picsum seeded placeholders
  (`picsum.photos/seed/uplink-<n>/<w>/<h>`) for blog thumbs + instagram
  grid; styled text client-logos; lucide-react icons (search, phone, mail,
  cloud, globe, monitor, inbox, bar-chart, server, database, eye,
  message-circle, share-2, socials); `#6247ea` + `#ec9d5f` in `@theme`;
  newsletter presentational with validation + confirmation; no asset
  copying.

## Task outline

1. Spec + research (this prep, on `main`): DONE.
2. Scaffold app: copy simplest existing app → `apps/uplink`, package
   `@free-react-templates/uplink`, register in lockfile (`npm install` at
   root), `injectUiSource()` in vite config.
3. TDD sections (tests first, 100% coverage):
   - Header (top bar + nav + dropdown + sticky + mobile menu)
   - Hero (headline + CTA + illustration area)
   - Features (6 cards, hover shadow)
   - Pricing (4 plans, divider, CTA)
   - Custom Solution (orange band + CTA)
   - Testimonials (heading col + 2 cards)
   - Services (6 cards, white-flip hover, map-pattern bg)
   - Latest Blog (3 cards, date badge, meta links)
   - Client Logos (5 grayscale placeholders, hover color)
   - Footer (columns, newsletter validation, instagram grid, socials,
     copyright)
4. Verify: `bash scripts/verify-app.sh uplink` (typecheck + lint + knip +
   fallow + 100% coverage tests + build).
5. Ship: `feat/template-uplink` → PR → immediate squash merge; TEMPLATES.md
   `[ ]` → `[~]` → `[x]` with surge URL; README status regen; screenshots.
