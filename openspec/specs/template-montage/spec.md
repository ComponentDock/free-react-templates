# Template: Montage (Video Magazine Template)

## Purpose

Montage is a single-page video & magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Videomag" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Videomag" — HTML template for video & magazine
  (source: https://colorlib.com/wp/template/videomag/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/videomag/
  (HTTP 200, ~78 KB HTML fetched; `style.css` ~37 KB parsed for tokens;
  the page imports `css/bootstrap.min.css`, `css/classy-nav.css`,
  `css/owl.carousel.min.css`, `css/animate.css`, `css/magnific-popup.css`,
  `css/font-awesome.min.css`, `css/nice-select.css`).
- **Screenshot analyzed:** `videomag-free-template.jpg` (1200×946, AVIF)
  viewed in the browser. Bright pink (#ff1662) top header with "Video Mag"
  logo (play icon) on the left and an "ADD BANNER" placeholder on the
  right; below it a dark charcoal navbar strip (Home highlighted pink,
  Videos, Pages ▾, Features ▾, Music, Contact, with a search field on the
  far right). Hero is a masonry-style grid: one large featured video card
  on the left (river-bend photo, centered semi-transparent play button,
  "FEATURED" tag, title "Watch a tiny cat taking a bath", author James
  Smith, date July 21 2018, comment/view icons) and three stacked/split
  cards on the right ("Spain: Take a virtual tour", "5 Tips to create your
  garden", "10 Movies you need to see" — all tagged FEATURED). Below the
  grid a white section with tab navigation (LATEST / TOP VIEWED / SEE ALL
  VIDEOS) and carousel arrows. Content background stark white; pink accent
  on header, active nav, tags and buttons; footer not visible in the shot.
- **Section order (1:1):** Top header (`div.top-header-area`: `.logo-area`
  logo + `.top-add-area` ad banner) → navbar (`nav.classy-navbar
justify-content-between` id `videomagNav`, with `#topSearch` search
  input in `.top-search-area`) → hero grid (`div.hero-area d-flex
flex-wrap`: four `.single-welcome-post.bg-img.item1..item4` featured
  cards, `.welcome-post-content` > `.single-blog-post.white` >
  `.blog-content` > `.post-meta`) → tabs + carousels (`div.video-mag-tabs
-area.mt-50`: `.tab-content` with three `.tab-pane` — Latest /
  Top Viewed / See All Videos — each an `owl-carousel` of
  `.single-blog-post.style2` cards: `.blog-thumb.mb-30` + `.blog-content`
  - `.post-meta`) → travel videos (`section.travel-videos-area`:
    `.travel-videos-content` — `.single-welcome-post.style-2.bg-img.mb-30`
    featured + `.single-blog-post.style3.mb-30` rows with
    `.post-meta.d-flex.justify-content-between`) → small videos
    (`section.small-videos-area`: `.small-videos-content` —
    `.single-blog-post.style2.mb-50` with `.blog-thumb.mb-5` + horizontal
    `.single-blog-post.style4.d-flex.mb-30` rows: `.blog-thumb` left +
    `.blog-content` right) → big ad (`div.big-add-area.mb-100`, `img/bg-img
/add.png` banner) → footer (`footer.footer-area.section-padding-100`:
    widget columns "Usefull Links" / "About Us" / "Video Categories",
    `nav` social links, copywrite bar).
- **Design tokens extracted from the preview CSS (`style.css`):**
  - Brand accent: **#FF1662** (hot pink/magenta) — top-header-area
    background, active nav link, video-catagory/featured tags, footer
    link hovers, button backgrounds (29 occurrences). Use in `@theme` as
    `--color-brand`.
  - Secondary accent: **#E10735** (deeper red-pink, hover states).
  - Dark surfaces: **#282828** (navbar/hero-text dark), **#312E2E**
    (navbar links), **#1F1C1C** (footer-area background),
    **#565151** (`.video-catagory` bar background: height 45px, flex,
    padding 0 30px, white 14px text).
  - Light surface: **#EDF1F4** (hero-area background),
    **#FFFFFF** (content background, card surfaces).
  - Text/muted: **#6A6A6A** (post-meta, footer muted), **#A5A5A5**,
    **#DCDCDC** (borders), **#000000** (headings), **#404040**/#606060.
  - Font: **"Montserrat"** (sans-serif, weights 300/400/500/600/700)
    loaded via Google Fonts `@import` in the preview CSS; body text
    base Montserrat.
  - Hero grid: `.hero-area` flex-wrap; `.single-welcome-post` cards with
    `bg-img` cover backgrounds at heights 700px (featured left) down to
    200px (small right cards), `margin: 5px`, flex-basis calc(50% - 10px)
    for the split right cards — a masonry-style featured grid.
  - Cards: `.single-blog-post.style2` = image thumb (`mb-30`), title,
    `.post-meta` (author / calender / chat / like icons: `img/core-img/
author.png`, `calender.png`, `chat.png`, `like.png`); `.style4.d-flex`
    = horizontal thumb-left + content-right rows; `.style3` rows with
    meta spread `justify-content-between`.
  - Tabs: Bootstrap-style `.tab-pane.fade` panes; carousels via
    `owl-carousel` (recreate as CSS-scrollable/prev-next grid — no owl
    assets).
  - Footer: `section-padding-100`, bg **#1F1C1C**, widget titles
    Montserrat 18px #fff, links 14px #6A6A6A (hover #FF1662), copywrite
    bar 12px #666666 with heart/credit line.
- **Recreation decisions:** the top header ad banner becomes a styled
  placeholder box (same "ADD BANNER" kind of content); nav dropdowns
  (Pages ▾, Features ▾) render as simple dropdown menus or anchor links
  keeping the same labels (Home, Videos, Pages, Features, Music, Contact);
  the search field in the navbar is a non-functional styled input; the
  tabbed carousels are static grids with prev/next arrows (no
  owl-carousel dependency); placeholder images via seeded picsum
  (`picsum.photos/seed/montage-<n>/<w>/<h>`); icons from lucide-react
  (Play, Search, User, Calendar, MessageCircle, ThumbsUp/Heart, social
  brand icons as inline SVG since lucide dropped brands); fonts via
  Google Fonts `<link>` in `index.html`; brand #FF1662 in `@theme`; no
  assets copied. The ColorLib attribution line in the footer becomes the
  monorepo's standard placeholder footer copy (paraphrased).

Montage lives in `apps/montage` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Top header bar

The system SHALL render a pink top header bar with the site logo on the
left and an ad-banner placeholder on the right.

#### Scenario: Header content

- **GIVEN** the Montage page is rendered
- **WHEN** the page loads
- **THEN** the top header SHALL show the site logo (play icon + wordmark
  "Montage") on the left
- **AND** an ad-banner placeholder box SHALL be visible on the right

#### Scenario: Brand treatment

- **GIVEN** the header bar is displayed
- **WHEN** the user views it
- **THEN** the header background SHALL use the brand pink (#FF1662)

### Requirement: Main navigation bar

The system SHALL render a dark navbar below the header with the menu
items Home, Videos, Pages, Features, Music, Contact and a search input.

#### Scenario: Navbar items

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL show links for Home, Videos, Pages, Features,
  Music and Contact
- **AND** the active link (Home) SHALL be highlighted in the brand pink

#### Scenario: Search input

- **GIVEN** the navbar is displayed
- **WHEN** the user inspects the right side of the navbar
- **THEN** a search input with placeholder "Search" SHALL be present

#### Scenario: Accessible controls

- **GIVEN** the navbar is displayed
- **WHEN** the user tabs through the page
- **THEN** all nav links and the search input SHALL be keyboard-focusable
- **AND** icon-only controls SHALL have aria-labels

### Requirement: Hero featured grid

The system SHALL render a masonry-style hero grid of featured video
cards on a light background, with one large primary card and several
smaller cards.

#### Scenario: Hero composition

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a light (#EDF1F4) background with a grid
  of featured video cards
- **AND** the first card SHALL be visually larger than the others
- **AND** the primary card SHALL include a play button overlay

#### Scenario: Card content

- **GIVEN** a hero card is displayed
- **WHEN** its content is inspected
- **THEN** each card SHALL show a cover image, a "FEATURED" tag, a video
  title, and post meta (author, date, comments, likes)

#### Scenario: Post meta

- **GIVEN** a hero card is displayed
- **WHEN** the meta row is inspected
- **THEN** the meta SHALL include an author name, a date, a comment
  count and a like count with icons

### Requirement: Tabbed video carousels

The system SHALL render a tabbed section with three tabs (Latest, Top
Viewed, See All Videos), each showing a row of video cards with
prev/next controls.

#### Scenario: Tabs

- **GIVEN** the tabbed section is displayed
- **WHEN** the page loads
- **THEN** tabs labeled "Latest", "Top Viewed" and "See All Videos"
  SHALL be present
- **AND** the Latest tab SHALL be active by default

#### Scenario: Switching tabs

- **GIVEN** the tabbed section is displayed
- **WHEN** the user activates another tab
- **THEN** the corresponding set of video cards SHALL be displayed
- **AND** the active tab SHALL be visually indicated in the brand pink

#### Scenario: Carousel controls

- **GIVEN** a tab pane is displayed
- **WHEN** the user inspects the pane
- **THEN** prev/next arrow controls SHALL be present for scrolling the
  card row
- **AND** each video card SHALL show a thumbnail image, a title and
  post meta

### Requirement: Travel videos section

The system SHALL render a "Travel Videos" section below the tabs with a
featured card and a list of video posts.

#### Scenario: Section heading and content

- **GIVEN** the page is rendered
- **WHEN** the travel videos section is displayed
- **THEN** the section SHALL have a "Travel Videos" heading
- **AND** SHALL show a featured video card plus additional video post
  rows (thumb, title, meta)

### Requirement: Small videos section

The system SHALL render a "small videos" content area with a mix of
vertical cards and horizontal thumbnail-left rows.

#### Scenario: Mixed card layout

- **GIVEN** the small videos section is displayed
- **WHEN** its cards are inspected
- **THEN** the section SHALL contain vertical video cards and horizontal
  rows with the thumbnail on the left and content on the right
- **AND** every item SHALL show a title and post meta

### Requirement: Ad banner

The system SHALL render a full-width ad-banner placeholder between the
content sections and the footer.

#### Scenario: Banner placeholder

- **GIVEN** the page is rendered
- **WHEN** the ad-banner region is displayed
- **THEN** a full-width banner placeholder box SHALL be visible with
  ad-like styling

### Requirement: Footer

The system SHALL render a dark footer with widget columns (Useful
Links, About Us, Video Categories), social links and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show columns titled "Useful Links",
  "About Us" and "Video Categories"
- **AND** the Useful Links column SHALL contain links such as About us,
  Categories, Testimonials, Contact Us, Jobs, Terms and Conditions
- **AND** the Video Categories column SHALL list categories such as
  Travel and Games

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom of the footer is inspected
- **THEN** a copyright line SHALL be present with the current year and
  an attribution notice

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Montage app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, navbar, hero grid, tabbed
  carousels, travel videos, small videos, ad banner and footer in that
  order
- **AND** the document title SHALL be "Montage — Video Magazine
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-montage`
- [ ] `scripts/verify-app.sh montage` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Section order matches the reference 1:1: top header → navbar →
      hero grid → tabs/carousels → travel videos → small videos → ad
      banner → footer
- [ ] Brand pink `#FF1662` in `@theme`; Montserrat loaded via Google
      Fonts `<link>`
- [ ] Placeholder images seeded `picsum.photos/seed/montage-<n>/...`;
      no ColorLib assets copied
- [ ] PR description records: source template (Videomag), preview URL,
      design tokens, and what differs (new name, placeholder images,
      static tabs/carousels, ad banners as styled placeholders)
