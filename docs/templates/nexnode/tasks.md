# Nexnode (ColorLib Hosthub) — Tasks & Design Notes

> Recreation of ColorLib "Hosthub" (https://colorlib.com/wp/template/hosthub/)
> under the NEW original name **Nexnode**. Spec lives at
> `openspec/specs/template-nexnode/spec.md`; app folder `apps/nexnode`,
> package `@free-react-templates/nexnode`, homepage
> `https://nexnode.free.componentdock.com` (CNAME `nexnode.free.componentdock.com`).

## Design notes

- **Original:** ColorLib "Hosthub" — free hosting/domain website Bootstrap 4
  template (listed in TEMPLATES.md "Bootstrap (216)").
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hosthub/`
  (HTTP 200, ~24KB) + `css/style.css` (~71KB unminified) + `css/bootstrap.css`.
  Structure below is from the DOM + CSS tokens.
- **Screenshot** (`hosthub-free-template.jpg`, 1200×946): shows the DESIGN
  above the fold — thin ORANGE top utility bar (phone +880 1234 656 933,
  email SUPPORT@CODELESS.COM, dark-purple "Purchase Hosting" button), WHITE
  header (dark-purple hexagon "H" logo + "HOSTHUB" bold wordmark, uppercase
  links HOME ABOUT SERVICES PAGES BLOG CONTACT, magnifier search icon),
  purple hero with dotted world map + ISOMETRIC SERVER-RACK illustration on
  the right (3 stacked units, white outlines, green/orange/red status
  lights) + white headline + orange "Explore Our Features" button. The live
  DOM omits the top bar and the hero illustration (text-only hero) — build
  the screenshot design for those two elements.
- **Structure observed (1:1):**
  - Top bar (screenshot only): orange #ec9d5f strip, left phone+email small
    white text, right "Purchase Hosting" button (dark purple, white text).
    Paraphrase contacts (e.g. +1 800 555 0142 / support@nexnode.dev).
  - Header `header_area` (absolute, transparent in DOM; white in screenshot):
    logo (hexagon mark + "Nexnode"), uppercase links Home / About /
    Services / Pages ▾ (Features, Pricing, Elements) / Blog ▾ / Contact +
    search icon; hamburger on mobile.
  - Hero `home_banner_area` > `banner_inner` (bg #6247ea, dotted world-map
    overlay `banner-map.png`, min-height 780px): H1 "We're Web Hosting
    Professionals" (bold white), white paragraph, orange `banner_btn`
    "Explore Our Features" (bg #ec9d5f, white, radius 5px, padding 0 50px,
    line-height 50px, 12px). Add right-side inline-SVG server illustration
    (3 stacked racks with status lights) per screenshot.
  - Features `feature_area p_120`: centered H2 "Some Features that Made us
    Unique" + muted subtitle; 4 `feature_item` (icon + H4 + p). DOM repeats
    placeholder "Expert Technicians" 4× with NO icons → write 4 distinct
    hosting features with lucide icons (Headset 24/7 Expert Support,
    ShieldCheck 99.9% Uptime Guarantee, Zap SSD-Powered Speed, Lock Free
    SSL Certificates).
  - Pricing `price_area p_120` (bg #fafcff): H2 "Choose Your Best Pricing
    Plans" + subtitle; 4 `price_item` white cards (radius 10px, shadow
    0 10px 30px rgba(98,71,234,0.1)): H3 name, H5 audience, H2 price
    `£39<span>/mo</span>`, ul rows (RAM / Core CPU / SSD Storage / Transfer
    / Network In), full-width purple `price_btn` "Get Started" (bottom
    radius 10px). Plans: Basic £39 (Individuals/Freelancers; 1 GB / 1 /
    20 GB / 1 TB / 40 Gb), Starter £59 (Small Companies; 2 / 2 / 50 / 1 /
    40), Business £79 (Medium Companies; 4 / 4 / 75 / 2 / 80) — FEATURED,
    Enterprise £99 (Large Companies; 8 / 8 / 100 / 2 / 100). Use lucide
    Check icons for the spec rows; convert £ → $ or keep £ (either fine).
  - Solution `solution_area p_120` (bg #ec9d5f, centered): H2 "Looking for
    a Custom Solution?" + white paragraph + white "Request Free
    Consultation" `white_btn`.
  - Testimonials `client_says_area p_120`: 3-col row — left col H3 "What our
    Client's Say about us" + intro paragraph; 2 `says_item` cards (H4 name,
    H5 role, quote): Nellie Vega / Estelle Andrews, both "Head of Marketing,
    Apple Inc." → vary roles (CTO / Founder). STATIC layout, no carousel.
  - Services `service_area p_120` (bg #6247ea): white H2 "Top Services We
    Provided" + subtitle; `service_item` cards (bg rgba(255,255,255,0.1),
    radius 10px, padding 40px 60px 40px 40px, 1px border #9381eb): line icon
    (lnr earth / lighter / cloud / inbox / screen / chart-bars) + title +
    copy — Cloud Hosting, Web Hosting, Cloud Computing, VPS Hosting, Server
    Analytics (5 in DOM → add 6th e.g. Domain Management for a clean grid).
    lucide mapping: Globe / Flame / Cloud / Inbox / Monitor / LineChart.
  - Blog `latest_grid_blog_area p_120`: H2 "Latest Posts from Our Blog" +
    subtitle; 3 `l_blog_item` cards (NO images in DOM): H6 date "10 April,
    2018", H4 title (placeholder repeated 3× → paraphrase: e.g. "How to
    Choose the Right Hosting Plan", "5 Signs You Need to Upgrade Your
    Server", "A Beginner's Guide to Domain Management"), p excerpt,
    `view_text` meta row (eye 4.5k Views, comment 07, share 362).
  - Clients logo `clients_logo_area` (bg #fafcff): centered row of 5 muted
    logo placeholders (c-logo-1..5.png) — recreate as greyed text wordmarks
    or picsum grayscale images.
  - Footer `footer-area p_120` (bg #04091e): 4 columns — "Top Products"
    links (Managed Website, Manage Reputation, Power Tools, Marketing
    Service); "Newsletter" (`mc_embed_signup`): "You can trust us. we only
    send promo offers, not a single spam." + email input + Subscribe button;
    "Instagram Feed": 2×4 grid of 8 square thumbs (Image-01..08.jpg → picsum
    seeds); copyright bar → Component Dock link.
- **Design tokens:** primary purple #6247EA; accent orange #EC9D5F; dark
  navy #04091E; text #222222 / muted #777777; light bgs #FAFCFF, #F9F9FF,
  #FAFAFF; service border #9381EB; price shadow rgba(98,71,234,0.1); icon
  variety colors #F8B600 / #4CD3E3 / #38A4FF / #F44A40 (sparing);
  fonts Open Sans (body) + Roboto (buttons); radii 5px (banner_btn) /
  10px (price + service cards); section padding ~120px (`p_120`).

## Task outline

- [ ] Scaffold: copy simplest app → `apps/nexnode`, package
      `@free-react-templates/nexnode`, homepage + public/CNAME
      (`nexnode.free.componentdock.com`), index.html (title "Nexnode —
      Hosting Template", Google Fonts Open Sans + Roboto, theme-color
      #6247ea).
- [ ] Tailwind `@theme` tokens: `--color-brand: #6247ea`,
      `--color-accent: #ec9d5f`, `--color-ink: #04091e`, light bgs, border
      `#9381eb`.
- [ ] Components (TDD, 100% coverage): TopBar, Header (dropdown + mobile
      hamburger + search icon), Hero (dotted-map SVG bg + inline-SVG server
      illustration), Features, Pricing (4 cards, Business featured),
      SolutionBand, Testimonials, Services, Blog, ClientsLogo, Footer
      (subscribe form), then App composition + App.test.tsx.
- [ ] All images picsum-seeded `picsum.photos/seed/nexnode-N/w/h`; hero
      illustration + map pattern are inline SVG.
- [ ] Footer copyright bar links `https://www.componentdock.com/`; NO
      ColorLib references in app code.
- [ ] Gate: `scripts/verify-app.sh nexnode` (typecheck + lint + 100%
      coverage tests + build) + `npm run spec:validate`; PR description
      cites source/preview/tokens + the screenshot-vs-DOM deviations
      (top bar, hero illustration).
