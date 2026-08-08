# Template: Newsline (Blog & Magazine Template)

## Purpose

Newsline is a single-page news & magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Vizew" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Vizew" — HTML template for blog & magazine
  (source: https://colorlib.com/wp/template/vizew/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/vizew/
  (HTTP 200, ~94 KB HTML fetched; `style.css` ~63 KB parsed for tokens;
  the page imports `css/bootstrap.min.css`, `css/classy-nav.css`,
  `css/owl.carousel.min.css`, `css/animate.css`, `css/magnific-popup.css`,
  `css/font-awesome.min.css`, `css/nice-select.css`).
- **Screenshot analyzed:** `vizew-free-template.jpg` (1200×946) viewed in
  the browser. Dark news-portal design: a black top utility bar with
  "Breaking News:" + scrolling ticker on the left and social icons, search
  and a Login link on the right; below it a bright red (#db4437) main
  navbar with the "Vizew" logo (play-triangle integrated into the V,
  white) on the left and uppercase white menu links (Home active with a
  white underline, Archives, Pages ▾, Features ▾, Contact) on the right.
  The whole page background is dark charcoal (#222627). Hero is a split
  layout: left ~2/3 a large featured video card (photo cover, red SPORTS
  category tag, big white headline, meta icons for comments/views/likes,
  centered red circular play button, red duration badge "05.03" bottom
  right); right ~1/3 a dark panel listing 7 recent-video rows (small
  thumbnail left + title + meta right) which act as tabs swapping the
  featured video. Below the hero a centered "Trending Videos" section
  heading (red underline) over a 3-column grid of video cards (thumbnail +
  duration badge + title + meta). The screenshot crops before the footer.
- **Section order (1:1):** top header (`div.top-header-area`, height 50px:
  `.breaking-news-area` — `.news-title` "Breaking News:" red + `#breaking
NewsTicker` ul of rotating links; `.top-social-info` social links, search
  icon, Login link) → navbar (`div.vizew-main-menu#sticker` >
  `nav.classy-navbar.justify-content-between` id `vizewNav`: `a.nav-brand`
  logo img + `div.classynav` ul — Home (`.active`), Archives, Pages ▾
  (`.dropdown` ul with 8 sub-links), Features ▾ (`.megamenu` 4 columns of
  sub-links), Contact) → hero (`div.hero-area` row: left `col-lg-8` with
  `.tab-content` of seven `.tab-pane.fade#post-N` each holding
  `.single-feature-post.video-post.bg-img` — play button `a.btn.play-btn`,
  `.post-content` (`.post-cata` Sports tag, `.post-title` headline,
  `.post-meta.d-flex` comments/eye/thumbs-up counts), `.video-duration`
  badge; right `col-md-5.col-lg-4` with `ul.nav.vizew-nav-tab` — seven
  `li.nav-item` > `a.nav-link` (first `.active`, `border-left: 4px solid
transparent`, active `border-left-color: #db4437`, bg #4d5051) each
  wrapping `.single-blog-post.style-2.d-flex.align-items-center` with
  `.post-thumbnail` 100px img + `.post-content` (h6 `.post-title`,
  `.post-meta.d-flex.justify-content-between` spans)) → trending
  (`section.trending-posts-area`: `.section-heading` h4 "Trending Videos"
  centered + `.line` with red ::after; `.vizew-post-area` grid of three
  `.single-blog-post.style-2` columns, each `.post-thumbnail` img +
  `.video-duration` badge + `.post-content` (h6 title, meta)) → main
  content grid (`div.vizew-post-area`: left `col-lg-8` with section blocks
  — "Featured Videos" (`.featured-post-slides` owl carousel of
  `.single-feature-post.video-post` slides), "Sport Videos" /
  "Business Videos" (`.sports-videos-slide`/`.business-videos-slide` owl
  carousels of `.single-blog-post` cards), "Latest News" (list of
  `.single-post-area` rows), plus a `.video-post-area` sidebar column
  right `col-lg-4` with widgets: "Latest Video" (`.single-post-area`),
  "Hot Channels" (`***** Single Widget *****` `.single-youtube-channel`
  rows with channel avatar + name + subscribe button), "Newsletter"
  (`.newsletter-widget` form input placeholder "Enter your email" +
  `a.vizew-btn.w-100` Subscribe), "Most Viewed Playlist" (`.single-blog-
post` rows)) → footer (`footer.footer-area`, bg #191c1d: `.footer-widget`
  columns — "Latest Twister" (`.twitter-slides` of `.single-twit` tweets
  with red icon + white span), "Sport Videos" (`.single-blog-post` rows),
  "Our Address" (`.contact-address` p: "101 E 129th St, East Chicago, IN
  46312, US / Phone: 001-1234-88888 / Email: info.colorlib@gmail.com" +
  `.footer-nl-area` newsletter form input + red 40px submit button),
  `.footer-social-area` round social buttons (facebook #597dca, twitter
  #1da1f2, google-plus #db4437, instagram #a67c52, linkedin #3b5998);
  copywrite bar `div.copywrite-area` — `.copywrite-text` "Copyright ©
  <year> All rights reserved | This template is made with <heart> by
  Colorlib").
- **Design tokens extracted from the preview CSS (`style.css`):**
  - Brand accent: **#DB4437** (vivid red) — `.classy-nav-container`
    (navbar) background, `.vizew-btn` background, `.news-title` color,
    `.section-heading .line::after`, `.video-duration`-adjacent play
    accents, `.vizew-nav-tab .nav-link.active` left border, footer
    newsletter submit button, `.footer-social-area a` default bg (45
    occurrences). Use in `@theme` as `--color-brand`.
  - Near-black ink: **#0F1112** (`.vizew-btn:hover` bg, `.video-duration`
    badge bg, link hovers), **#181B1B**, **#222627** (body background),
    **#393C3D** (`.vizew-nav-tab` background, ticker borders),
    **#4D5051** (active tab item bg), **#303334** (footer newsletter
    input bg).
  - Dark surfaces: **#191C1D** (footer-area background), **#222627**
    (page body background), **#393C3D** (hero right panel / tab list bg).
  - Light surface: **#FFFFFF** (content backgrounds, card text).
  - Text/muted: **#FFFFFF** (titles, nav links), **#A6A6A6** (ticker
    links, style-2/3 meta spans), **#595959** (post-meta links on dark),
    **#4E5152** (section-heading line base), **#F2F4F5**,
    **#181B1B**.
  - Social brand colors: facebook **#597DCA**, twitter **#1DA1F2**,
    google-plus **#DB4437**, instagram **#A67C52**, linkedin **#3B5998**
    (round 40px circle buttons, border-radius 50%).
  - Font: **"Roboto"** (sans-serif, weights 400/500/700) — body base;
    nav links 700 uppercase 16px white (height 90px, line-height 90px,
    border-bottom 3px transparent, active border-bottom-color #fff);
    post titles 700 #fff; meta 12px muted.
  - Buttons: `.vizew-btn` — bg #DB4437, min-width 160px, height 50px,
    line-height 50px, padding 0 30px, font-size 16px weight 500,
    text-transform capitalize, **border-radius 0**; hover bg #0F1112,
    500ms transition. `.play-btn` — red circular play overlay on video
    cards.
  - Video duration badge: absolute bottom-right, bg **#0F1112**, padding
    6px 12px, border-radius 2px, font-size 14px, text like "05.03".
  - Section heading: centered h4 700, margin-bottom 10px, `.line` 150px
    × 1px #4E5152 with 60px × 2px #DB4437 ::after centered (style-2:
    left-aligned, line width 100%).
  - Cards: `.single-blog-post.style-2` — horizontal d-flex rows, thumb
    flex 0 0 100px (80px ≤1199px), title 16px 700 #fff (hover #DB4437),
    meta 12px #A6A6A6; `.single-feature-post.video-post` — full-bleed
    cover bg-img card, title 24px 700 #fff, meta #fff (hover #DB4437);
    `.single-post-area` — title 20px #fff, thumb mb-30.
  - Top header: height 50px (auto on mobile), breaking-news ticker on
    dark; nav items uppercase.
  - Hero tabs: `.vizew-nav-tab` bg #393C3D, height ~450px desktop;
    `.nav-link` padding 15px 20px, border-left 4px transparent; `.active`
    bg #4D5051 + border-left-color #DB4437.
- **Recreation decisions:** the hero right-panel tab list becomes a
  clickable playlist that swaps the featured video on the left (state-driven
  tabs, no Bootstrap JS); nav dropdowns/megamenu render as simple dropdown
  menus keeping the same labels (Home, Archives, Pages ▾, Features ▾,
  Contact); the breaking-news ticker is a rotating list (CSS/JS interval,
  no ticker plugin); owl-carousel slides become static rows with prev/next
  arrows; the newsletter forms are non-functional styled inputs; the
  ColorLib attribution line becomes the monorepo's standard placeholder
  footer copy (paraphrased, no ColorLib link); placeholder images via
  seeded picsum (`picsum.photos/seed/newsline-<n>/<w>/<h>`); icons from
  lucide-react (Play, Search, User, MessageCircle, Eye, ThumbsUp, social
  brand icons as inline SVG since lucide dropped brands); fonts via Google
  Fonts `<link>` in `index.html`; brand #DB4437 in `@theme`; no assets
  copied.

Newsline lives in `apps/newsline` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Top header bar

The system SHALL render a dark top utility bar with a breaking-news
ticker on the left and social/search/login controls on the right.

#### Scenario: Breaking news ticker

- **GIVEN** the Newsline page is rendered
- **WHEN** the top header is displayed
- **THEN** a "Breaking News:" label SHALL appear on the left in the brand
  red
- **AND** a scrolling list of breaking-news headlines SHALL follow it

#### Scenario: Utility controls

- **GIVEN** the top header is displayed
- **WHEN** the right side of the bar is inspected
- **THEN** social icon links, a search icon and a Login link SHALL be
  present

### Requirement: Main navigation bar

The system SHALL render a red navbar below the top header with the logo
on the left and the menu items Home, Archives, Pages, Features, Contact.

#### Scenario: Navbar items

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL have the brand red (#DB4437) background
- **AND** SHALL show a logo/wordmark on the left
- **AND** SHALL show links for Home, Archives, Pages, Features and Contact
  in uppercase white
- **AND** the Home link SHALL be marked active with a white underline

#### Scenario: Dropdown menus

- **GIVEN** the navbar is displayed
- **WHEN** the user opens the Pages or Features menu
- **THEN** a dropdown with sub-links (Home, Archive List, Archive Grid,
  Single Post, Single Video Post, Contact, Typography, Login) SHALL be
  shown

#### Scenario: Accessible controls

- **GIVEN** the navbar is displayed
- **WHEN** the user tabs through the page
- **THEN** all nav links SHALL be keyboard-focusable
- **AND** icon-only controls SHALL have aria-labels

### Requirement: Hero featured video with playlist

The system SHALL render a split hero: a large featured video card on the
left and a vertical playlist on the right whose items swap the featured
video.

#### Scenario: Hero composition

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL show a large featured video card on the left
  (cover image, category tag, headline, meta and a centered play button)
- **AND** a dark playlist panel with at least 5 video rows SHALL be shown
  on the right

#### Scenario: Playlist row content

- **GIVEN** the playlist panel is displayed
- **WHEN** its rows are inspected
- **THEN** each row SHALL show a small thumbnail, a post title and meta
  counts (comments, views, likes)

#### Scenario: Swapping the featured video

- **GIVEN** the playlist panel is displayed
- **WHEN** the user activates a playlist row
- **THEN** the featured video card SHALL update to show that row's video
  (image, title, meta)
- **AND** the activated row SHALL be highlighted with the brand red left
  border

#### Scenario: Video metadata

- **GIVEN** the featured video card is displayed
- **WHEN** its content is inspected
- **THEN** it SHALL show a category tag, a headline, a play-button
  overlay and a duration badge (e.g. "05.03")

### Requirement: Trending videos section

The system SHALL render a "Trending Videos" section with a centered
heading and a three-column grid of video cards.

#### Scenario: Section heading

- **GIVEN** the page is rendered
- **WHEN** the trending section is displayed
- **THEN** a centered heading "Trending Videos" SHALL be present with a
  divider line accented in the brand red

#### Scenario: Trending grid

- **GIVEN** the trending section is displayed
- **WHEN** the grid is inspected
- **THEN** a three-column grid of video cards SHALL be shown
- **AND** each card SHALL include a thumbnail with a duration badge, a
  post title and post meta

### Requirement: Featured and category video blocks

The system SHALL render content blocks titled "Featured Videos", "Sport
Videos", "Business Videos" and "Latest News" in the main content column.

#### Scenario: Featured videos carousel

- **GIVEN** the main content column is displayed
- **WHEN** the first block is inspected
- **THEN** a "Featured Videos" heading SHALL be shown above a row of
  large featured video cards with prev/next controls

#### Scenario: Category blocks

- **GIVEN** the main content column is displayed
- **WHEN** the Sport and Business blocks are inspected
- **THEN** blocks titled "Sport Videos" and "Business Videos" SHALL each
  show a row of video cards with prev/next controls

#### Scenario: Latest news list

- **GIVEN** the main content column is displayed
- **WHEN** the Latest News block is inspected
- **THEN** a "Latest News" heading SHALL be shown above a list of post
  rows (thumbnail, title, meta)

### Requirement: Sidebar widgets

The system SHALL render a right sidebar with "Latest Video", "Hot
Channels", "Newsletter" and "Most Viewed Playlist" widgets.

#### Scenario: Latest video widget

- **GIVEN** the sidebar is displayed
- **WHEN** the first widget is inspected
- **THEN** a "Latest Video" widget SHALL show a video post card

#### Scenario: Hot channels widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Hot Channels widget is inspected
- **THEN** it SHALL list at least 3 channels, each with an avatar, a
  channel name and a subscribe button

#### Scenario: Newsletter widget

- **GIVEN** the sidebar is displayed
- **WHEN** the Newsletter widget is inspected
- **THEN** a "Newsletter" heading SHALL be shown above an email input and
  a full-width red Subscribe button

#### Scenario: Most viewed playlist

- **GIVEN** the sidebar is displayed
- **WHEN** the bottom widget is inspected
- **THEN** a "Most Viewed Playlist" heading SHALL be shown above a list
  of video post rows

### Requirement: Footer

The system SHALL render a dark footer with widget columns (Latest
Twister, Sport Videos, Our Address), social buttons and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show columns titled "Latest Twister",
  "Sport Videos" and "Our Address"
- **AND** the Our Address column SHALL contain a street address, a phone
  number and an email
- **AND** a newsletter form SHALL be present in the footer with an input
  and a red submit button

#### Scenario: Social buttons

- **GIVEN** the footer is displayed
- **WHEN** the social area is inspected
- **THEN** round social buttons (Facebook, Twitter, Google Plus,
  Instagram, LinkedIn) SHALL be present with their brand colors

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom of the footer is inspected
- **THEN** a copyright line SHALL be present with the current year and an
  attribution notice

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Newsline app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top header, navbar, hero, trending
  grid, featured/category blocks, sidebar, and footer in that order
- **AND** the document title SHALL be "Newsline — Blog & Magazine
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-newsline`
- [ ] `scripts/verify-app.sh newsline` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Section order matches the reference 1:1: top header → navbar →
      hero (featured + playlist) → trending grid → featured/category
      blocks + sidebar → footer
- [ ] Brand red `#DB4437` in `@theme`; Roboto loaded via Google Fonts
      `<link>`
- [ ] Playlist swaps the featured video on activation; active row shows
      brand red left border
- [ ] Placeholder images seeded `picsum.photos/seed/newsline-<n>/...`;
      no ColorLib assets copied
- [ ] PR description records: source template (Vizew), preview URL,
      design tokens, and what differs (new name, placeholder images,
      state-driven playlist, static carousels, styled non-functional
      forms)
