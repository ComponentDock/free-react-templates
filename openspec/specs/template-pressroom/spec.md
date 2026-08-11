# Template: Pressroom (News Portal / Magazine)

## Purpose

Pressroom is a single-page news/magazine portal template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "News" design (see TEMPLATES.md, Bootstrap (216) category),
built under a DIFFERENT name — **Pressroom** (a press/newsroom term for the
news-portal design; single lowercase word, no collision with `apps/`,
`openspec/specs/`, `docs/templates/` or TEMPLATES.md — verified 2026-08-11)
per the monorepo naming mandate (never reuse the ColorLib source name), with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a classic content-heavy news portal: a 3-row header (black
trending bar, gray mid bar with a red square "NEWS" logo + ad banner, and a
BRIGHT RED sticky nav bar with white uppercase links); a hero row with a
large featured-article slider (red category badge over a photo, big white
headline, byline) beside a mini-article column; a "Whats New" section with
category tabs and a 2-column news-card grid; a full-width banner ad; a "Most
Recent" row; a "Trending News" carousel; a "Latest Video" carousel with play
buttons; an "Old Spondon News" dot-style carousel; a second full-width
banner; and a near-black 3-widget footer with a "Popular post" list and
copyright bar. Pressroom recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

> NOTE (prep-stream 2026-08-11): the official preview
> `https://preview.colorlib.com/theme/news/` is LIVE — fetched HTTP 200
> (~77 KB HTML + `assets/css/style.css` ~106 KB + Bootstrap 4 + owl.carousel
>
> - ticker-style + slicknav + magnific-popup + fontawesome + themify-icons +
>   slick + nice-select, curl-verified) and analyzed for this prep. The
>   TEMPLATES.md screenshot (`news-free-template.jpg`, 1200×946) was also
>   viewed in a browser; it shows the red nav bar + hero + "Whats New" section
>   and cuts off mid-page, matching the live render (below-the-fold sections
>   captured from the live DOM + CSS instead).

## Design reference (replication findings)

- **Original:** ColorLib "News" — free Bootstrap 4 news / magazine portal
  template (source: https://colorlib.com/wp/template/news/). The recreation
  brands itself **Pressroom** but keeps the same section structure, heading
  copy kinds, and card set.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/news/` (HTTP 200, ~77 KB HTML +
  `assets/css/style.css` ~106 KB; assets under `assets/`). Page sections are
  mostly `div`-based areas (only `whats-news-area` uses a `<section>` tag);
  section order (1:1):
  1. **Header** — 3 stacked bars:
     - `.header-top.black-bg` — black bar: `.trending-title` label +
       headline text **"Class property employ ancho red multi level
       mansion"** + phone number `+880166 253 232` (`.header-info-left` /
       `.header-info-right`; text `#cdcfd8`, 14px).
     - `.header-mid.gray-bg` — gray `#f4f4f4` bar: red square **logo**
       (`logo/logo.png`, red bg + white "NEWS" wordmark) left, `.header-
banner.f-right` ad image right, social icons (`.header-social`;
       instagram/youtube/etc.).
     - `.header-bottom.header-sticky` — RED sticky nav bar (`background:
#ff2143`, box-shadow 0 0 36px rgba(0,0,0,.1)): `ul.main-menu`
       (uppercase white links, 15px, weight 500, padding 27px 25px):
       **Home · about · Category · Latest News · Pages · Blog · Blog
       Details · Element · Contact**; right side `.header-right`: search
       icon (`.nav-search.search-switch` opens the search modal) + social
       icons. Mobile: slicknav hamburger menu (hidden on desktop).
  2. **Hero** — `.trending-area.fix.pt-25.gray-bg` > `.trending-main`:
     - LEFT `.col-lg-8`: `.slider-active` featured slider, 3 `.single-
slider` slides — `.trending-top` image, `.trend-top-cap` overlay:
       red category badge `.bgr` (background `#ed4141`) **"Business"** +
       h2 (white, 40px, weight 800) **"Anna Lora Stuns In White At Her
       Australian Premiere"** + byline **"by Alice cloe - Jun 19, 2020"**.
     - RIGHT `.col-lg-4`: 2 stacked mini articles `.trending-top.mb-30`
       (image + caption): **FASHION** badge `.bgb` (`#0077b5`) →
       "Secretart for Economic Air plane that looks like"; **TECH** badge
       `.bgg` (`#13c600`) → same headline; both with byline.
  3. **What's New** — `<section class="whats-news-area pt-50 pb-20
gray-bg">`:
     - `.section-tittle` h3 **"Whats New"** + `.nav-tabs` category tabs:
       **Lifestyle · Travel · Fashion · Sports · Technology** (tab-pane
       grid, one active).
     - News grid: featured `.col-xl-6` cards + 20× `.col-xl-12 col-lg-6
col-md-6 col-sm-10` `.whats-news-single.mb-40` cards — `.whates-
img` (rounded 6px, hover zoom scale 1.1) + `.whates-caption` h4
       (24px/700, hover `#ff2143`) + byline span **"by Alice cloe - Jun
       19, 2020"**. Headline copy kinds: "Secretart for Economic Air
       plane that looks like", "Portrait of group of friends ting eat.
       market in.", etc.
  4. **Banner one** — `.banner-one.mt-20.mb-30` full-width ad image.
  5. **Most Recent** — `.most-recent-area`: `.small-tittle.mb-20` h4
     **"Most Recent"** + large cards `.most-recent-single` (`.most-
recent-img` + `.most-recent-cap` with purple `.bgbeg` badge
     (`#8a3ab9`) + h4 title + byline **"Jhon | 2 hours ago"**): "What to
     Wear: 9+ Cute Work ...", "Scarlett's disappointment at latest
     accolade", "Most Beautiful Things to Do in Sidney with Your BF".
  6. **Weekly Top News** — `.weekly2-news-area.pt-50.pb-30.gray-bg`:
     `.section-tittle` h3 **"Trending News"** + `.weekly2-news-active`
     carousel (d-flex) of news cards; plus a **"Most Popular"** widget
     (`.small-tittle.mb-30`) with 4 small posts (thumb + title + "Jhon |
     2 hours ago").
  7. **Video** — `.youtube-area.video-padding.d-none.d-sm-block`: h4
     **"Latest Video - 2020"** + `.video-items-active` carousel of 5
     `.video-items.text-center` cards: `.video-info` + `.single-video`
     image with `.popup-video` play button + `.video-intro` h4 caption
     (e.g. "Banglades News Video", "Spondon News -2019").
  8. **Old Spondon News** — `.weekly3-news-area.pt-80.pb-130`:
     `.section-tittle` h4 **"Old Spondon News - 2020"** +
     `.weekly3-news-active.dot-style` carousel of 5 cards (image + h4
     title "What to Expect From the 2020 Oscar Nomin ations" + date "19
     Jan 2020").
  9. **Banner area** — `.banner-area.gray-bg.pt-90.pb-90`: `.banner-one`
     full-width image.
  10. **Footer** — `<footer class="footer-main footer-bg">` (`background:
#070b11`, `.footer-padding` 140px/80px):
      - `col-xl-3`: **About** — `.footer-logo` (`logo2_footer.png`) +
        `.footer-pera` lorem paragraph + address **"198 West 21th
        Street, Suite 721 New York,NY 10010"** + **"Phone: +95 (0) 123
        456 789 Cell: +95 (0) 123 456 789"**.
      - `col-xl-4`: **"Popular post"** widget (`.footer-tittle` h4) — 3
        small posts (thumb + h4 title + "Jhon | 2 hours ago"):
        "Scarlett's disappointment at latest accolade" ×3.
      - `col-xl-3`: `.banner` ad image (`body_card4.png`).
      - `.footer-bottom-area.footer-bg` > `.footer-border` >
        `.footer-copy-right.text-center`: copyright line **"Copyright ©
        <year> All rights reserved | made with ♥ by ColorLib"** (rephrase
        to Pressroom).
  11. **Search modal** — `.search-model-box` overlay (hidden): `.search-
close-btn` "+" close + `form.search-model-form` input placeholder
      **"Searching key....."**; opened by the nav `.search-switch` icon.
- **Visual design (TEMPLATES.md screenshot `news-free-template.jpg`,
  1200×946, viewed in browser 2026-08-11):** classic content-heavy magazine
  layout. Thin BLACK top bar (trending title + text + phone); white/gray mid
  bar with a RED square "NEWS" logo (white text) + a purple/pink gradient ad
  banner ("Unlimited Music No Ads" — an ad placeholder, NOT template
  branding) + social icons; thick BRIGHT RED nav bar with white uppercase
  links (HOME, ABOUT, CATEGORY, LATEST NEWS, PAGES, CONTACT) + search/social
  icons. Hero = large featured photo card with red "MOVIE"-style category
  tag + bold white headline over the image, beside a column of smaller
  article thumbnails. "Whats New" heading in bold black with category tabs
  (Lifestyle, Travel, Fashion, Sports, Technology), a large featured card
  left + thumbnail list right. Dominant colors: RED `#ff2143` (logo, nav
  bar, category tags, buttons), black top bar, white/light-gray content
  backgrounds (`#f4f4f4`), purple/pink ad imagery. Bold sans-serif
  headlines (Barlow), smaller body text. Screenshot cuts off at the "Whats
  New" area; below-the-fold sections captured from the live DOM + CSS.

## Design tokens

From `assets/css/style.css` (verified 2026-08-11):

- **Brand colors:**
  - `#ff2143` (bright red) — PRIMARY: `.theme-bg`, `.theme-color`, `.btn`
    background, `.header-bottom` nav bar background, `.boxed-btn` text +
    border, card-title hover color, nav link hover underline.
  - `#ed4141` — category badge `.bgr` (red, e.g. hero "Business").
  - `#0077b5` — category badge `.bgb` (blue, "FASHION").
  - `#13c600` — category badge `.bgg` (green, "TECH").
  - `#8a3ab9` — category badge `.bgbeg` (purple, "Most Recent" cards).
  - `#051441` — dark navy: all headings (`h1–h6 { color:#051441 }`),
    `.section-tittle h3`, `h2`.
  - `#070b11` — near-black footer background (`.footer-area`); footer text
    `#9fa6bd` (`.footer-pera .info1`).
  - `#000` — header-top bar (`.black-bg`), `.btn.post-btn` background.
  - Neutrals: `#f4f4f4` — page/`gray-bg` + header-mid background; `#fff` —
    cards, nav text, hero headline; `#cdcfd8` — header-top text/borders;
    `#707b8e` / `#888888` — meta/byline grays; `#ca292e` — `.btn::before`
    hover fill (darker red); `#f75a5a` — hero headline hover.
- **Fonts:** headings = `"Barlow", sans-serif` (h1–h6, section titles,
  card titles, nav links); body = `"Roboto", sans-serif`; buttons =
  Barlow. Load both via Google Fonts `<link>` in `index.html`.
- **Type scale:** hero headline `.trend-top-cap h2` 40px/weight 800/white
  (30px ≤991px); `.section-tittle h3` 28–40px/700 navy; `.whates-caption
h4 a` 24px/700 (21px ≤575px), hover `#ff2143`; `.most-recent-cap` h4
  similar; small-tittle h4 18px; nav links 15px/500 uppercase; byline
  spans 14px gray.
- **Buttons:** SQUARE — `.btn { border-radius: 0px }` (sharp corners).
  `.btn`: bg `#ff2143`, white uppercase text, 14px/500, padding 27px 44px,
  letter-spacing 1px, hover sweep `::before` scaleX with `#ca292e`.
  `.boxed-btn`: white bg, `#ff2143` text + 1px `#ff2143` border, uppercase,
  letter-spacing 3px, padding 18px 44px; hover inverts (red bg + white
  text). `.btn.post-btn`: black bg + `#ff2143` text.
- **Section backgrounds:** page = `#f4f4f4` (gray-bg); header-top = black;
  header-mid = `#f4f4f4`; header-bottom nav = `#ff2143`; hero/trending =
  `#f4f4f4`; whats-news = `#f4f4f4`; weekly2 = `#f4f4f4`; banner area =
  `#f4f4f4`; footer = `#070b11`.
- **Radius family:** FLAT except `.whates-img` images `border-radius: 6px`
  (rounded thumbnails); category badges are square colored pills (no
  radius); buttons radius 0; no circular avatars in this template.
- **Badges:** category tags = small uppercase white text on solid color
  blocks (`.bgr`/`.bgb`/`.bgg`/`.bgbeg`), positioned over/next to images.
- **Spacing rhythm:** `.whats-news-area` pt-50 pb-20; `.weekly2-news-area`
  pt-50 pb-30; `.weekly3-news-area` pt-80 pb-130; `.banner-area` pt-90
  pb-90; footer padding 140/80 (100/40 ≤767px); cards `.mb-40`; hero
  `.trending-top.mb-30`.
- **Carousels (owl):** hero featured slider 3 slides (`.slider-active`);
  weekly2 cards (`.weekly2-news-active`, d-flex); video items 5
  (`.video-items-active`); weekly3 cards (`.weekly3-news-active.dot-style`)
  with dots; plus `.testmonial-nav` arrows in the video area.
- **Icons:** fontawesome/themify glyphs in the source — recreate with
  lucide-react: search → `Search`, play → `PlayCircle`/`Play`, social
  brand icons (Facebook/Twitter/Instagram/YouTube) are NOT in lucide-react
  — use inline SVG brand paths per the colorlib-template-replication skill.

## Requirements

### Requirement: 3-row header (black top bar, gray mid bar, red nav)

The system SHALL render a header of three stacked bars: a black top bar
with a "trending" label, a short headline, and a phone number; a gray mid
bar with the red square "Pressroom" logo (red background, white wordmark),
a banner-ad image on the right, and social icons; and a bright red
(`#ff2143`) sticky navigation bar with uppercase white links Home, About,
Category, Latest News, Pages, Blog, Blog Details, Element, and Contact,
plus a search icon and social icons on the right.

#### Scenario: Top bar

- **GIVEN** the Pressroom page is rendered
- **WHEN** the header is displayed
- **THEN** a black top bar SHALL show a trending label, a short headline
  text, and a phone number in light gray text

#### Scenario: Mid bar

- **GIVEN** the header is displayed
- **WHEN** the middle bar is inspected
- **THEN** the mid bar SHALL have a gray background
- **AND** a square logo SHALL be shown on the left with a red background
  and the white wordmark "Pressroom"
- **AND** a banner-ad image SHALL be shown on the right
- **AND** social media icon links SHALL be present

#### Scenario: Red nav bar

- **GIVEN** the header is displayed
- **WHEN** the bottom navigation bar is inspected
- **THEN** the nav bar SHALL have the brand red `#ff2143` background
- **AND** it SHALL contain uppercase white links Home, About, Category,
  Latest News, Pages, Blog, Blog Details, Element, and Contact
- **AND** a search icon SHALL be shown on the right that opens a search
  overlay

### Requirement: Hero featured slider with mini-article column

The system SHALL render a hero row on a gray background: on the left, a
featured slider with three slides, each showing a large news photo, a red
category badge (e.g. "Business"), a big white headline, and a byline; on
the right, a column with two stacked mini articles, each with a small photo
and a colored category badge (blue "Fashion", green "Tech").

#### Scenario: Featured slides

- **GIVEN** the hero is rendered
- **WHEN** the featured slider is displayed
- **THEN** three slides SHALL be available in the slider
- **AND** each slide SHALL show a news image with a red category badge, a
  large white headline, and a byline
- **AND** the slider SHALL have prev/next controls

#### Scenario: Mini-article column

- **GIVEN** the hero is rendered
- **WHEN** the right column is inspected
- **THEN** two mini articles SHALL be shown, each with a small image, a
  colored category badge (blue for Fashion, green for Tech), a headline,
  and a byline

### Requirement: What's New section with category tabs and news grid

The system SHALL render a "What's New" section with the heading "Whats
New", category tabs (Lifestyle, Travel, Fashion, Sports, Technology), and a
news grid of cards. Each card SHALL show a rounded image, a title, and a
byline; hovering a card title SHALL color it red.

#### Scenario: Tabs and grid

- **GIVEN** the What's New section is rendered
- **WHEN** the section is displayed
- **THEN** the heading SHALL read "Whats New"
- **AND** tabs SHALL read Lifestyle, Travel, Fashion, Sports, and
  Technology with one active tab
- **AND** a grid of news cards SHALL be shown (2-up on large screens)
- **AND** each card SHALL show a rounded image, a title, and a byline

#### Scenario: Card hover

- **GIVEN** a What's New news card is rendered
- **WHEN** the card title is hovered
- **THEN** the title color SHALL change to the brand red `#ff2143`

### Requirement: Full-width banner ad

The system SHALL render a full-width banner ad image between the What's
New section and the Most Recent section, and a second full-width banner
image inside a gray band (`banner-area`) after the Old Spondon News
carousel.

#### Scenario: Banner placement

- **GIVEN** the page is rendered
- **WHEN** the banners are inspected
- **THEN** a full-width banner image SHALL appear after the What's New
  section
- **AND** a second full-width banner image SHALL appear in a gray band
  after the Old Spondon News carousel

### Requirement: Most Recent row

The system SHALL render a "Most Recent" row with the heading "Most Recent"
and large news cards, each showing an image with a purple category badge,
a title, and a byline.

#### Scenario: Most Recent cards

- **GIVEN** the Most Recent row is rendered
- **WHEN** the row is displayed
- **THEN** the heading SHALL read "Most Recent"
- **AND** large news cards SHALL be shown
- **AND** each card SHALL display an image with a purple badge, a title,
  and a byline

### Requirement: Trending News carousel with Most Popular widget

The system SHALL render a "Trending News" section (gray background) with
the heading "Trending News" and a carousel of news cards, plus a "Most
Popular" widget listing small posts with a thumbnail, title, and byline.

#### Scenario: Trending News carousel

- **GIVEN** the Trending News section is rendered
- **WHEN** the section is displayed
- **THEN** the heading SHALL read "Trending News"
- **AND** a carousel of news cards SHALL be shown with prev/next controls

#### Scenario: Most Popular widget

- **GIVEN** the Trending News section is rendered
- **WHEN** the Most Popular widget is inspected
- **THEN** a "Most Popular" heading SHALL be shown
- **AND** at least three small posts SHALL be listed, each with a
  thumbnail, a title, and a byline

### Requirement: Latest Video carousel

The system SHALL render a video section with the heading "Latest Video -
2020" and a carousel of video cards, each showing a video thumbnail with a
play button and a caption below.

#### Scenario: Video cards

- **GIVEN** the video section is rendered
- **WHEN** the carousel is displayed
- **THEN** the heading SHALL read "Latest Video - 2020"
- **AND** a carousel of video cards SHALL be shown
- **AND** each card SHALL display a thumbnail with a play button and a
  caption

### Requirement: Old Spondon News dot carousel

The system SHALL render an "Old Spondon News - 2020" section with a
dot-style carousel of news cards, each showing an image, a title, and a
date.

#### Scenario: Dot carousel cards

- **GIVEN** the Old Spondon News section is rendered
- **WHEN** the carousel is displayed
- **THEN** the heading SHALL read "Old Spondon News - 2020"
- **AND** carousel cards SHALL be shown with dot indicators
- **AND** each card SHALL display an image, a title, and a date

### Requirement: Near-black footer with Popular post widget

The system SHALL render a footer with a near-black background (`#070b11`)
and three columns: an "About" column (logo, paragraph, address, phone
numbers), a "Popular post" widget listing three small posts, and a banner
ad image. A centered copyright line SHALL appear at the bottom.

#### Scenario: Footer columns

- **GIVEN** the Pressroom page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a near-black background
- **AND** the About column SHALL show a logo, a paragraph, an address, and
  phone numbers
- **AND** a "Popular post" widget SHALL list three small posts (thumbnail,
  title, byline)
- **AND** a banner ad image SHALL be shown in the third column
- **AND** a centered copyright line SHALL appear at the bottom

### Requirement: Search overlay modal

The system SHALL render a hidden search overlay containing an input with
placeholder "Searching key....." and a close button; clicking the nav
search icon SHALL open it and the close button SHALL close it.

#### Scenario: Open and close search

- **GIVEN** the Pressroom page is rendered
- **WHEN** the user clicks the nav search icon
- **THEN** a search overlay SHALL open with an input and a close button
- **AND** clicking the close button SHALL close the overlay

### Requirement: Design tokens and fidelity

The system SHALL implement the design tokens from the Design tokens
section: brand red `#ff2143` in `@theme`, Barlow (headings) + Roboto
(body) via Google Fonts `<link>` in `index.html`, square buttons (radius 0) with red hover sweep, colored category badges (`#ed4141`, `#0077b5`,
`#13c600`, `#8a3ab9`), gray `#f4f4f4` section backgrounds, near-black
`#070b11` footer, and the exact section order (header → hero → What's New
→ banner → Most Recent → Trending News → Video → Old Spondon News → banner
band → footer).

#### Scenario: Token application

- **GIVEN** the Pressroom app is implemented
- **WHEN** the stylesheet is inspected
- **THEN** the brand color `#ff2143` SHALL be defined as a theme token and
  used by the nav bar, buttons, category badges, and title hovers
- **AND** the Barlow and Roboto fonts SHALL be loaded via Google Fonts
  links in `index.html`
- **AND** primary buttons SHALL use square corners (radius 0)

## Verification checklist

- [ ] `openspec/specs/template-pressroom/spec.md` — Gherkin scenarios above
      map 1:1 to vitest scenarios (one `describe` per component).
- [ ] `npm run spec:validate` passes for the new spec.
- [ ] Replication fidelity: section order 1:1 (header 3-bar → hero slider +
      mini column → What's New tabs + grid → banner → Most Recent →
      Trending News carousel + Most Popular → Latest Video carousel → Old
      Spondon News dot carousel → banner band → 3-column footer + copyright + search modal); tokens `#ff2143` / `#070b11` / `#f4f4f4` / badge
      colors `#ed4141` `#0077b5` `#13c600` `#8a3ab9`; Barlow + Roboto;
      SQUARE buttons (radius 0, red sweep hover — NOT pills).
- [ ] Placeholder images: `https://picsum.photos/seed/pressroom-<n>/<w>/<h>`
      (deterministic per template; screen seeds before commit — news/
      editorial scenes preferred for the hero).
- [ ] Icons from lucide-react (Search, Play/PlayCircle, calendar/clock for
      meta); brand icons (Facebook/Twitter/Instagram/YouTube) as inline SVG
      paths (lucide removed brand icons).
- [ ] Four owl-equivalent carousels: hero slider (3 slides), Trending News,
      Latest Video (5 items), Old Spondon News (dot-style) — reuse one
      Carousel component with configurable slides/dots/arrows; autoplay
      optional but must be testable (fake timers).
- [ ] Category tabs in What's New: one active tab, switching tabs swaps the
      card grid content (test tab switching with user-event).
- [ ] Search overlay: opens on nav search icon click, closes via close
      button (aria-expanded on the toggle, focus moves into the input).
- [ ] Navbar links render in desktop AND mobile menus — use `getAllByRole`
      and index the mobile one last in tests.
- [ ] 100% coverage lines/functions/branches/statements; `scripts/
    verify-app.sh pressroom` green; full gate via CI on merge.
- [ ] PR description: source template (ColorLib News), preview URL
      (`https://preview.colorlib.com/theme/news/`), design tokens used,
      what differs (renames, placeholder images, ad banners as neutral
      placeholders).
