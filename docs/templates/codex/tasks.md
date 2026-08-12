# Codex (ColorLib Abcbook) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-codex`.

## Design notes (replication findings)

- **Original:** ColorLib "Abcbook" — classic Colorlib Bootstrap 5 bookshop /
  ecommerce single-pager (source: https://colorlib.com/wp/template/abcbook/).
  TEMPLATES.md has TWO copies (lines 547 in `## Bootstrap 5 (89)`, 1560 in
  `## Ecommerce (56)` — duplicate rows; one recreation covers both;
  implementer marks BOTH `[x]`). WARNING: other bookshop-family templates
  (Booker, Booksaw, Bookson, Book Store…) are DIFFERENT templates — don't
  conflate.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/abcbook/ (HTTP
  200, 88,736 bytes). `<title>` = "Book Shop". Master stylesheet
  `assets/css/style.css` (~91 KB) fully extracted; libs: bootstrap 5,
  owl.carousel, slick, slicknav, wow/animate, magnific-popup, nice-select,
  price_rangs, fontawesome, themify. Google Fonts import in style.css:
  Playfair Display (400–900) + Roboto (300–900) — load via `<link>` in
  index.html.
- **Screenshot:** `abcbook-free-template.jpg` (1200×946, viewed in browser)
  — white top bar: "ABC Book" logo (red open-book icon), search input
  ("Search book by author or publisher name."), FAQ / Track Order links, red
  "Sign In" pill; nav row Home Categories About Pages Blog Contact; hero =
  dark atmospheric photo (person holding a glowing golden orb), white serif
  headline "The History of Phipino", tag "Independent Fiction", red pill
  "Browse Books", carousel dots; below, "Best Selling Books Ever" serif
  title over pale-pink band with a row of book cards (cover, title, author,
  yellow stars, "(120 Reviews)", red "$50") + carousel arrows. Warm,
  minimalist, curated-bookstore aesthetic; serif elegance + clean sans.
  Footer not visible in shot (from DOM: light `#FEF4F4`). Demo copy is
  placeholder — paraphrase into varied bookstore copy.
- **Visual design (from DOM + CSS tokens + screenshot):** brand red
  `#FF1616` (buttons, prices, active tab, cart bubble, subscribe button,
  hover accents; hover darkens to `#cf0f0f`); headings Playfair Display
  `#1a1a1a` (tittle h2 30px/700); body Roboto `#301A22` 16px/300; muted
  author text `#9498A7` 14px; section subtitle `#6A6063` 18px; stars
  `#FF5700`; light band `#FEF4F4` (`.section-bg`: best-selling, footer,
  slider-area, subscribe bottom band); card borders `#EEE1E0`; tab idle text
  `#454E6D`. Pills everywhere: `.btn` radius 35px (padding 22px 32px,
  `.hero-btn` 29px 45px), tabs radius 20px (active = red bg + white text),
  hero label pill radius 17px (white bg, `#1a1a1a` 14px), subscribe
  input/button radius 25px. Hero `.slider-height` 580px, bg image cover,
  centered caption, h1 white 60px/400, white dot indicators (active gets a
  23px white ring). CTA `.wantToWork-area` 188px bg-image cards, h2 white
  32px/400. Book card: white bg, cover 100% width, title 20px/700, footer
  flex (stars + "(120 Review)" left, price `#FF1616` 22px/500 right); grid
  `col-xl-2 col-lg-3 col-md-4 col-sm-6`.
- **Structure (1:1, section order):**
  1. `.header-top` — white bar: logo + search `.form-box` ("Search book by
     author or publisher" + ti-search icon, 530px); right: FAQ, Track
     Order, cart icon with red count bubble, red "Sign in" pill.
  2. `.header-bottom.header-sticky` — white sticky row: logo2 + centered
     nav Home, Categories, About, Pages (submenu: login, Cart, Checkout,
     book Details, Blog Details, Element), Blog, Contect [sic → "Contact"];
     slicknav mobile menu <lg.
  3. `.slider-area` — `.slider-active.dot-style` hero carousel, THREE
     slides `.single-slider.slider-height.slider-bg1/2/3` (580px, bg cover):
     centered `.hero-caption`: pill label "Science Fiction", h1 "The
     History<br> of Phipino", `.btn.hero-btn` "Browse Store"; white dots.
  4. `.best-selling.section-bg` (`#FEF4F4`) — "Best Selling Books Ever"
     (text-center tittle) + tabs (All / Horror / Thriller / Science Fiction
     / History) + SEVEN `.properties.pb-20` book cards (cover, title,
     author, 5 stars + "(120 Review)", red price, View Details link).
  5. `.services-area2.top-padding` — "Featured This Week" + right "View
     All" `.browse-btn` (underline, hover → red + letter-spacing) + TWO
     featured `.properties-card` `.properties-caption2` (bordered variant):
     big cover left, right details "The Rage of Dragons", "By Evan
     Winter", `$50.00`, stars + "(120 Review)", "View Details" pill.
  6. `section.our-client.section-padding.best-selling` — "Latest Published
     items" + tabs + grid of THIRTY `.properties.pb-30` cards
     (`properties-caption2` bordered) + centered "Browse More" link. (5
     tabs × 6 cards; render ~6-8 per tab, switch on tab click.)
  7. `section` (container) — TWO `.wantToWork-area.w-padding2.mb-30` photo
     CTA cards side by side (data-background wants-bg1.jpg /
     wants-bg2.jpg): white h2 + right "View Details" pill.
  8. `section.subscribe-area` — `.subscribe-caption` on bg image
     (section-bg1.jpg), text-center: "Join Newsletter" white h3 40px + p +
     form: email input (pill, radius 25px) + red "Subscribe" pill.
  9. `footer .footer-wrappper.section-bg` — 4 columns: (a) footer-logo +
     about blurb + 4 social icons; (b)+(c) "Book Category" split over two
     columns (History, Horror - Thriller, Love Stories, Science Fiction,
     Business / Biography, Astrology, Digital Marketing, Software
     Development, Ecommerce); (d) "Site Map" (Home, About Us, FAQs, Blog,
     Contact). Bottom bar: copyright → "© 2026 Codex. All rights
     reserved." + "More templates at Component Dock"
     (https://www.componentdock.com/).

## Implementation tasks

1. Scaffold `apps/codex` from the simplest existing app; rename package to
   `@free-react-templates/codex`; `npm install` at root for the lockfile;
   `public/CNAME` = `codex.free.componentdock.com`; homepage in package.json.
2. `src/index.css` — `@theme` tokens: `--color-brand: #FF1616`,
   `--color-brand-hover: #cf0f0f`, `--color-ink: #1a1a1a`, `--color-body:
#301A22`, `--color-muted: #9498A7`, `--color-stars: #FF5700`,
   `--color-mist: #FEF4F4` (light band), tab border `--color-line: #EEE1E0`;
   Playfair Display + Roboto Google Fonts `<link>` in index.html.
3. Components (one per section, matching conventions): `TopBar` (logo,
   search box with icon, FAQ/Track Order, cart bubble, Sign in pill),
   `Navbar` (sticky, logo + nav with Pages dropdown, mobile menu with
   aria-expanded), `HeroSlider` (3 slides, dots, prev/next), `BestSelling`
   (tabs + card grid on `#FEF4F4`), `FeaturedBooks` (2 detail cards +
   View All link), `LatestBooks` (tabs + grid + Browse More),
   `CtaCards` (2 photo cards), `Subscribe` (email form), `BookCard` (shared
   card used by grids), `Footer` (about/social + Book Category 2-col +
   Site Map + copyright + Component Dock link).
4. TDD: spec scenarios → tests → implementation; 100% coverage.
5. Placeholder images: `https://picsum.photos/seed/codex-<n>/<w>/<h>` (hero
   bg ×3, book covers ×~10, featured ×2, CTA ×2, subscribe band). Verify
   hero/CTA seed subjects visually (bookish/atmospheric vibe) before
   pinning — see seed-screening notes in the replication skill.
6. Gate: `scripts/verify-app.sh codex` (typecheck + lint + 100% coverage
   tests + build).
7. PR + immediate squash merge; then bookkeeping: BOTH "Abcbook" rows
   (lines 547, 1560) `[x]` + surge URL, `npm run readme:status`.
