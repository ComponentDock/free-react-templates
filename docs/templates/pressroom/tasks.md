# Pressroom (ColorLib News) — Tasks & Design Notes

> Recreation of ColorLib "News" (https://colorlib.com/wp/template/news/)
> under the NEW name **Pressroom** (a press/newsroom term for the
> news-portal design; single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified
> 2026-08-11), per the monorepo naming mandate (never reuse the ColorLib
> source name). TEMPLATES.md category: Bootstrap (216).

## Design notes (replication findings)

- **Original:** ColorLib "News" — free Bootstrap 4 NEWS / MAGAZINE portal
  template (red square "NEWS" logo, red nav bar, featured-article slider,
  "Whats New" tabbed news grid, "Most Recent" row, "Trending News" +
  "Latest Video" + "Old Spondon News" carousels, full-width banners,
  near-black footer with "Popular post" widget). The recreation brands
  itself **Pressroom**.
- **Live preview analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/news/` — HTTP 200, ~77 KB HTML +
  `assets/css/style.css` ~106 KB (curl), assets under `assets/` (Bootstrap
  4 + owl.carousel + ticker-style + slicknav + magnific-popup + fontawesome
  - themify-icons + slick + nice-select). The TEMPLATES.md screenshot
    (`news-free-template.jpg`, 1200×946, viewed in browser) shows the red nav
    bar + hero + "Whats New" area and cuts off mid-page; it matches the live
    render (below-the-fold sections captured from the live DOM + CSS
    instead).
- **Visual design (screenshot):** classic content-heavy magazine layout.
  Thin BLACK top bar; white/gray mid bar with RED square "NEWS" logo +
  purple/pink gradient ad banner ("Unlimited Music No Ads" — an ad
  placeholder, NOT template branding) + social icons; thick BRIGHT RED nav
  bar with white uppercase links + search/social icons. Hero = large
  featured photo with red category tag + bold white headline overlay, next
  to smaller article thumbnails. "Whats New" heading + category tabs
  (Lifestyle/Travel/Fashion/Sports/Technology), featured card left +
  thumbnail list right. Colors: red `#ff2143` primary, black top bar,
  light-gray `#f4f4f4` backgrounds, purple/pink ad imagery. Bold sans
  headlines (Barlow), smaller body text (Roboto).
- **Section order (1:1, verified from live DOM):**
  1. **Header** — `.header-top.black-bg` (trending-title + headline "Class
     property employ ancho red multi level mansion" + phone `+880166 253
232`, text `#cdcfd8`); `.header-mid.gray-bg` `#f4f4f4` (red square
     logo `logo/logo.png` + `.header-banner` ad + `.header-social`);
     `.header-bottom.header-sticky` RED `#ff2143` (box-shadow 0 0 36px
     rgba(0,0,0,.1)) with `ul.main-menu` uppercase white links: Home ·
     about · Category · Latest News · Pages · Blog · Blog Details ·
     Element · Contact (15px/500, padding 27px 25px) + `.header-right`
     search icon + social icons; slicknav mobile hamburger.
  2. **Hero** — `.trending-area.fix.pt-25.gray-bg` > `.trending-main`:
     `col-lg-8` `.slider-active` featured slider, 3 `.single-slider` slides
     (`.trend-top-img` + `.trend-top-cap`: `.bgr` badge `#ed4141`
     "Business" + h2 white 40px/800 "Anna Lora Stuns In White At Her
     Australian Premiere" + byline "by Alice cloe - Jun 19, 2020") +
     `col-lg-4` with 2 mini articles (FASHION `.bgb` `#0077b5`, TECH
     `.bgg` `#13c600`, headline "Secretart for Economic Air plane that
     looks like").
  3. **What's New** — `<section class="whats-news-area pt-50 pb-20
gray-bg">`: `.section-tittle` h3 "Whats New" + `.nav-tabs` tabs
     (Lifestyle · Travel · Fashion · Sports · Technology) + news grid:
     4× `col-xl-6` featured cards + 20× `col-xl-12 col-lg-6 col-md-6
col-sm-10` `.whats-news-single.mb-40` (`.whates-img` radius 6px,
     hover zoom; `.whates-caption` h4 24px/700 hover `#ff2143` + byline
     span). Headline copy kinds: "Secretart for Economic Air plane that
     looks like", "Portrait of group of friends ting eat. market in.".
  4. **Banner one** — `.banner-one.mt-20.mb-30` full-width ad image.
  5. **Most Recent** — `.most-recent-area`: `.small-tittle.mb-20` h4
     "Most Recent" + `.most-recent-single` large cards (`.most-recent-img`
     - `.most-recent-cap` with purple `.bgbeg` badge `#8a3ab9` + h4 title
     - "Jhon | 2 hours ago"): "What to Wear: 9+ Cute Work ..." ·
       "Scarlett's disappointment at latest accolade" · "Most Beautiful
       Things to Do in Sidney with Your BF".
  6. **Weekly Top News** — `.weekly2-news-area.pt-50.pb-30.gray-bg`:
     `.section-tittle` h3 "Trending News" + `.weekly2-news-active` d-flex
     carousel of news cards + "Most Popular" widget (`.small-tittle.mb-30`,
     4 small posts thumb + title + byline).
  7. **Video** — `.youtube-area.video-padding` (d-none d-sm-block): h4
     "Latest Video - 2020" + `.video-items-active` carousel, 5
     `.video-items.text-center` (`.video-info` + `.single-video` image +
     `.popup-video` play button + `.video-intro` h4 caption: "Banglades
     News Video", "Spondon News -2019"...).
  8. **Old Spondon News** — `.weekly3-news-area.pt-80.pb-130`:
     `.section-tittle` h4 "Old Spondon News - 2020" +
     `.weekly3-news-active.dot-style` carousel, 5 cards (image + h4 "What
     to Expect From the 2020 Oscar Nomin ations" + date "19 Jan 2020").
  9. **Banner area** — `.banner-area.gray-bg.pt-90.pb-90` full-width
     `.banner-one` image.
  10. **Footer** — `.footer-main.footer-bg` `#070b11` (`.footer-padding`
      140/80): `col-xl-3` About (`.footer-logo` + `.footer-pera` lorem +
      address "198 West 21th Street, Suite 721 New York,NY 10010" +
      "Phone: +95 (0) 123 456 789 Cell: +95 (0) 123 456 789",
      text `#9fa6bd`); `col-xl-4` "Popular post" (`.footer-tittle` h4, 3
      posts thumb + title + "Jhon | 2 hours ago"); `col-xl-3` `.banner`
      ad image; `.footer-bottom-area` `.footer-copy-right.text-center`
      copyright (rephrase ColorLib line).
  11. **Search modal** — `.search-model-box` hidden overlay: `.search-
close-btn` "+" + input placeholder "Searching key....."; opened by
      nav `.search-switch` icon.

## Key fidelity gotchas

- **BRIGHT RED nav bar** — `.header-bottom { background: #ff2143 }`. The
  nav is the template's signature element; do NOT put the nav on white.
- **SQUARE buttons** — `.btn { border-radius: 0px }` with a red sweep
  hover (`::before` scaleX, `#ca292e`). Not pills.
- **Barlow is the heading font** (h1–h6 `font-family: "Barlow"`, navy
  `#051441`); body = Roboto. Headlines are bold (700/800), nav is
  uppercase.
- **Colored category badges** — four solid colors, all uppercase white
  text: `.bgr` `#ed4141` (Business/hero), `.bgb` `#0077b5` (Fashion),
  `.bgg` `#13c600` (Tech), `.bgbeg` `#8a3ab9` (Most Recent). Map them to
  Tailwind theme tokens.
- **Gray page background** — `gray-bg` = `#f4f4f4` on hero, What's New,
  weekly2, and banner band (NOT white). Cards themselves are white.
- **Hero headline is WHITE over the image** (`#fff`, hover `#f75a5a`),
  with the category badge sitting on the image; byline below in gray.
- **Ad banners are placeholders** — the purple/pink "Unlimited Music No
  Ads" banner and the footer/`banner-one` images are third-party ad
  slots, NOT template branding: use neutral picsum placeholders.
- **Four owl carousels** — hero (3 slides), Trending News (d-flex cards),
  Latest Video (5 items with play overlay), Old Spondon News (dot-style).
  Reuse one Carousel component with configurable slides/dots/arrows.
- **What's New tabs** — one active tab; switching swaps the news-card
  grid. Implement as stateful tab panels (test with user-event).
- **Search overlay** — hidden modal + close button; wire the nav search
  icon with aria-expanded and focus management.
- **Mobile nav** — slicknav duplicates the menu; render a mobile drawer
  (desktop + mobile links both in the DOM — index mobile last in tests).
- **Only the What's New area is a `<section>`** — the rest are div-based;
  use semantic `<header>`, `<main>`, `<footer>` for a11y regardless.

## Implementation task outline

1. Scaffold `apps/pressroom` (copy simplest existing app; rename package to
   `@free-react-templates/pressroom`); `npm install` at root; register
   `injectUiSource()` in vite.config.ts.
2. Spec → tests (red): one `describe` per component mirroring the Gherkin
   scenarios in `openspec/specs/template-pressroom/spec.md`.
3. `src/data.ts` — section copy: nav links, hero slides (3), mini
   articles, What's New tabs + card grid, Most Recent cards, Trending News
   cards, Most Popular posts, video items (5), Old Spondon News cards,
   footer widgets, social links.
4. Components: `Header` (3 bars + mobile drawer + search toggle),
   `HeroSlider`, `MiniArticles`, `WhatsNew` (tabs + grid), `Banner`,
   `MostRecent`, `TrendingCarousel`, `VideoCarousel`, `SpondonCarousel`,
   `Footer` (Popular post), `SearchModal`, shared `Carousel` for the four
   owl carousels.
5. `src/index.css` — `@theme` tokens: `--color-brand: #ff2143`, badge
   colors `#ed4141` `#0077b5` `#13c600` `#8a3ab9`, `--color-ink: #051441`,
   footer `#070b11`, gray-bg `#f4f4f4`; fonts Barlow + Roboto via Google
   Fonts `<link>` in index.html.
6. Images: `https://picsum.photos/seed/pressroom-<n>/<w>/<h>` — hero seeds
   should render news/editorial-worthy scenes (screen seeds before commit);
   ad banners get neutral placeholders.
7. Green: `npm run verify:app pressroom` (typecheck + lint + 100% coverage
   tests + build). Self-review per `docs/self-review.md`. PR to main, merge
   immediately (`gh pr merge --squash`), verify live deploy with curl.
