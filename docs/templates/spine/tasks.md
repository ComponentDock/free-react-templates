# Spine (ColorLib Abcbook) — Tasks & Design Notes

> Prep artifacts for the FIRST unprepped item in TEMPLATES.md (Bootstrap 5
> series, line 547). Spec folder `openspec/specs/template-spine/` is the
> claim marker on main — implementers pick it up when this prep lands.

## Design notes (replication findings)

- **Original:** ColorLib "Abcbook" — Bootstrap 5 book-shop template
  (source: https://colorlib.com/wp/template/abcbook/). Live page title:
  "Book Shop". TEMPLATES.md: ONE copy, `- [ ]` (line 547), screenshot
  `abcbook-free-template.jpg`.
- **Preview DOM analyzed (LIVE):** https://preview.colorlib.com/theme/abcbook/
  (HTTP 200, 88,736 bytes) + `assets/css/style.css` (91,551 bytes) +
  rendered in a browser (visual confirmed) + TEMPLATES.md screenshot
  (1200×946, viewed in browser).
- **Visual design:** bookstore landing — vivid red **`#FF1616`** on pale
  pink **`#FEF4F4`** / white; Playfair Display serif headings + Roboto
  body; EVERY button is a pill (radius 35px for `.btn`, 30px for outline
  variants, 25px for subscribe). Dark atmospheric hero photos under a
  narrow centered caption; white book cards with gold star ratings and
  red prices; a solid-red "Featured This Week" split-card carousel; a
  pink footer. Literary, warm, minimalist.
- **Structure (1:1, section order):**
  1. Header — top row: logo + search pill (placeholder "Search book by
     author or publisher", red Search icon, 530px wide) + FAQ / Track
     Order / cart with red "0" badge / red pill "Sign in". Bottom sticky
     row: logo2 + centered nav Home, Categories, About, Pages (dropdown:
     Login, Cart, Checkout, Book Details, Blog Details, Element), Blog,
     **Contect** (source typo → render "Contact", screenshot agrees).
  2. Hero slider — THREE identical slides (quirk), 580px, bg images
     h1_hero1/2/3.jpg: white pill tag "Science Fiction" + white Playfair
     H1 "The History<br> of Phipino" (60px xl / 50 / 35) + red pill
     "Browse Store" (29px 45px). Slick dots bottom 28px, active = 23px
     white ring.
  3. Best Selling Books Ever — `section-bg` `#FEF4F4`, padding 95/100px,
     centered H2 "Best Selling Books Ever" (Playfair 30px 700), slick
     carousel of EIGHT white book cards: cover + "Moon Dance" (20px 700,
     hover red) + "J. R Rain" (#9498A7) + 4½ gold stars (#FF5700) +
     "(120 Review)" + "$50" red 22px 500. All cards repeat the same demo
     content (quirk). Arrows (ChevronLeft/Right).
  4. Featured This Week — `top-padding` 120px, title row: H2 "Featured
     This Week" + "View All" browse-btn (#1a1a1a, 2px #EEE1E0 underline
     at -11px, hover red). TWO identical split cards (quirk): cover left,
     solid `#FF1616` right panel (padding 29px 20px 29px 80px) with
     publisher mark + H3 "The Rage of Dragons" (white 40px 400) + "By
     Evan Winter" + "$50.00" (white 32px 500) + WHITE stars + "(120
     Review)" + white-outline pill "View Details" (radius 30px, hover
     text red).
  5. Latest Published items — white bg 120px padding; H2 left; right:
     pill tabs All / Horror / Thriller / Science Fiction / History
     (#454E6D 16px, 1px #EEE1E0, radius 20px; active = red #FF1616 +
     white). Five tab panels × FIVE cards each (all "Moon Dance", quirk;
     caption2 = 1px #EEE1E0 border no top), grid col-xl-2 (6 across).
     Centered red-outline pill "Browse More" (border-btn2).
  6. CTA banners — two wantToWork-area cards (bg images wants-bg1/2.jpg,
     height 188px, data-background): H2 "The History of Phipino" (br
     kept) / "Wilma Mumduya" (white 32px 400) + red pill "View Details",
     flex space-between, mb-30.
  7. Subscribe — caption on bg image section-bg1.jpg (padding 75px 0) +
     `#FEF4F4` band behind bottom 45%; H3 "Join Newsletter" (white 40px 400) + grey p + form: white pill input (radius 25, height 50, width
     39%, text #232F55, placeholder "Enter your email") + red pill
     "Subscribe" (radius 25, height 50, width 21%). Mobile: both 90%
     stacked.
  8. Footer — `section-bg` #FEF4F4, footer-padding 100/60px, four
     columns: logo + blurb + 4 social circles (40px, grey, hover red);
     "Book Category" h4 (#232F55 17px 700) + 5 links; empty h4 + 5
     links; "Site Map" + 5 links. Bottom bar (padding-top 45px, centered)
     — REPLACE Colorlib credit with Component Dock link (mandatory).
- **Design tokens (from style.css):** primary `#FF1616` (`.btn` global bg,
  prices, active tab, search icon, cart badge, social hover); section-bg
  `#FEF4F4`; headings Playfair Display `#1a1a1a` (section-tittle 30px
  700); body Roboto 16px; muted `#9498A7`; secondary `#454E6D`; dark blue
  `#232F55`; border `#EEE1E0`; rating gold `#FF5700`; `.btn` radius 35px
  padding 22px 32px; `.border-btn` radius 30px padding 17px 39px;
  subscribe radius 25px height 50px; hero H1 60px white 400; featured H3
  40px white 400; CTA H2 32px white 400; hero tag pill radius 17px.
- **Fonts:** Google Fonts `@import` in style.css: Playfair Display +
  Roboto. Load via `<link>` in index.html (conventions).
- **Icons (font → lucide):** `ti-search` → Search (red 22px); `fa-star`/
  `fa-star-half-alt` → Star/StarHalf (gold #FF5700; WHITE inside red
  featured panel); cart.svg → ShoppingCart; fab socials → Facebook,
  Instagram, Linkedin, Youtube; slick arrows → ChevronLeft/ChevronRight;
  back-to-top → ArrowUp (optional fixed bottom-right button).
- **Carousels:** source uses slick (3 carousels: hero slider w/ dots,
  best-selling w/ arrows, featured w/ arrows). No slick dependency in the
  monorepo — implement windowed rows with arrow buttons (and dots on the
  hero); keep the visual contract. owl.carousel/nice-select/magnific are
  loaded but UNUSED on this page — do NOT reproduce.
- **Images:** 46 `<img>` in source — replace ALL with seeded picsum:
  `https://picsum.photos/seed/spine-<n>/<w>/<h>` (portrait book covers
  ~1:1.5, e.g. 300×450; hero bgs ~1600×900; banners ~600×188; logo can
  be a plain text wordmark "Spine").
- **Source quirks (document in PR, handle deliberately):** three
  identical hero slides; eight identical "Moon Dance" cards; two
  identical featured cards; five tabs × five identical cards; nav typo
  "Contect" → render "Contact" (screenshot spells it correctly);
  lowercase submenu labels → sentence case; `data-background`/
  `data-animation` are JS-driven → inline style/state in React.
- **Recreation approach:** repo-standard Header (dark-mode toggle) +
  Footer chrome per conventions; reuse `packages/ui` (Button, ButtonLink,
  Card, Badge, cn); red primary in `@theme`; seeded picsum covers;
  lucide icons; tabs via accessible React state; forms preventDefault.
  App folder `apps/spine`, package `@free-react-templates/spine`,
  CNAME `spine.free.componentdock.com`, homepage
  `https://spine.free.componentdock.com`.

## Tasks

- [x] Write `openspec/specs/template-spine/spec.md` (Gherkin requirements + scenarios for every section above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/spine` (copy the simplest existing app — e.g. an
      e-commerce/landing app; rename package to
      `@free-react-templates/spine`).
- [ ] TDD: tests first for each section component (Header, HeroSlider,
      BestSelling, FeaturedWeek, LatestPublished tabs, CtaBanners,
      Subscribe, Footer); run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh spine` +
      `npm run spec:validate`.
- [ ] Push `feat/template-spine`, open PR (source template, preview URL,
      design tokens, source quirks, what differs — renames, lucide
      icons, picsum seeds, accessible tabs/buttons, Component Dock
      footer).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
