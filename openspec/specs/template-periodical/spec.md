# Template: Periodical (Magazine/Blog Template)

## Purpose

Periodical is a magazine/news blog website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Magazine" website template design (source:
https://colorlib.com/wp/template/magazine/), built under a DIFFERENT name
(Periodical — a magazine is a periodical publication, matching the source's
news/magazine theme) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Magazine" — classic news/magazine blog template:
  dark top bar + logo/leaderboard header + dark nav, large featured-post
  hero, breaking-news ticker, latest/popular/stories post lists, right
  sidebar (editor's pick, newsletter, most popular, social networks), dark
  footer. TEMPLATES.md has TWO copies of this item (lines 270 and 2197 —
  duplicate rows: line 270 in the alphabetical list, line 2197 in the
  "Magazine (34)" category section); ONE recreation (Periodical) covers both
  — the implementer must mark BOTH rows `[x]`.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/magazine/`
  (HTTP 200, 37,264 bytes; title/page brand "Magazine"). Master stylesheet
  `css/main.css` (50 KB, fully extracted for tokens); libs: bootstrap,
  owl.carousel, jquery-ui, nice-select, magnific-popup, animate,
  font-awesome, linearicons. Cross-checked against the TEMPLATES.md
  screenshot (`magazine-free-template.jpg`, 1200×946, viewed in browser —
  see visual design below). The demo brands itself "Magazine"; the
  recreation uses the NEW name **Periodical**.
- **Visual design (from DOM + CSS tokens + screenshot):** classic
  high-contrast digital-magazine aesthetic. Thin DARK utility bar on top
  (social icons left, phone + email right), then a white header split into
  logo left (red/magenta flower icon + wordmark) and a light-gray 728×90
  leaderboard ad placeholder right, then a DARK navbar with uppercase white
  links (HOME, ARCHIVE, CATEGORY, POST TYPES with dropdown arrow, ABOUT,
  CONTACT) and a search icon far right. Hero is a grid: one large wide
  photo with white headline overlaid bottom-left on a dark gradient
  (rgba(0,0,0,.4)) + two smaller stacked posts on the right. A thin WHITE
  breaking-news strip separates hero from content. Below: two-column
  layout — left column holds "Latest News" post cards (photo, pink category
  tag pill, headline, meta "Mark Waren | 03 April, 2016 | 09 Comments",
  snippet), right column holds sidebar widgets. Accent color is hot
  pink/red **#f6214b** on category tags, buttons, and hover states; page
  background is light gray with white padded content cards; footer is very
  dark navy **#04091e**. Poppins sans-serif throughout; clean bold
  headlines, small light meta text, uppercase nav.
- **Section order (1:1, from live demo DOM):**
  1. `div.header-top` (dark strip) — `div.header-top-left.no-padding`:
     `ul` of social icons (fa-facebook, fa-twitter, fa-dribbble,
     fa-behance) + right side contact info (phone/email per screenshot).
  2. `div.logo-wrap` (white) — `div.row.justify-content-between.align-items-center`:
     `div.col-lg-4.logo-left` = logo image (`img/logo.png`) +
     `div.col-lg-8.logo-right.ads-banner` = 728×90 ad placeholder box.
  3. Navbar (`div.navbar-right` area) — dark bar, uppercase white links:
     Home, Archive, Category, Post Types (dropdown: Standard Post, Image
     Post, Gallery Post, Video Post, Audio Post), About, Contact + search
     icon on the right.
  4. Hero (`section.top-post-area.pt-10`) — featured post area:
     `div.site-main-container` > `div.single-top-post`:
     `div.feature-image-thumb.relative` (large photo) +
     `div.overlay.overlay-bg` (rgba(0,0,0,0.4)) +
     `div.top-post-details` (absolute, bottom 30px left 40px): category
     pill (`h4.cat-title` — bg #04091e, 14px 600, white, padding 10px 25px)
     - `h3`/`h4` white headline. Screenshot shows the hero as a grid: one
       LARGE main feature left + two smaller stacked posts right (secondary
       `single-top-post` cards — implementer to match the 2-col hero layout).
  5. Breaking news (`div.news-tracker-wrap` — white strip, margin-top 10px,
     padding 12px 15px): `h6` (weight 500) "Breaking News: Astronomy
     Binoculars A Great Alternative".
  6. Main content (`section.latest-post-area.pb-120`) — 2-col row:
     - Left column:
       a. `div.latest-post-wrap` (white card, padding 20px) — heading
       "Latest News" + `div.single-latest-post.row.align-items-center`
       list items: `div.col-lg-5.post-left` image +
       `div.col-lg-7.post-right` (`h4` title, hover → #f6214b; meta
       author/date/comments).
       b. `div.ad-widget-wrap` (col-lg-12, mt-30 mb-30) — ad placeholder.
       c. `div.popular-post-wrap` (white card, padding 20px) — heading
       "Popular Posts" + `div.feature-post` (feature-img +
       `div.details` overlay) + two `div.feature-img-wrap` items.
       d. `div.relavent-story-post-wrap` (white card, padding 20px,
       mt-30) — heading "Relavent Stories" (sic — fix spelling to
       "Relevant Stories") + 4× `div.single-relavent-post.row.align-items-center`
       (thumb + `h4` detail).
     - Right column (`div.sidebars-area`):
       e. `div.single-sidebar-widget.editors-pick-widget` — "Editor's Pick"
       - `div.post-lists` of `div.single-post.d-flex.flex-row`
         (thumb + detail).
         f. `div.single-sidebar-widget.ads-widget` — ad placeholder.
         g. `div.single-sidebar-widget.newsletter-widget` — `h6.title`
         "Newsletter" + blurb + email input (`input-group` + `form-control`,
         placeholder "Email Address") + `a.primary-btn` "Subscribe".
         h. `div.single-sidebar-widget.most-popular-widget` — "Most Popular"
         list.
         i. `div.single-sidebar-widget.social-network-widget` — "Social
         Networks": `ul.social-list` of colored pills
         (`li.d-flex.justify-content-between.align-items-center`): fb
         #4c63a2 "983 Likes", tw #69c9ff "847 Followers", rs #f17300,
         yt #c41713 "245 Subscribers" — pill bg + white icon + count.
  7. Footer (`footer.footer-area.section-gap`, bg #04091e) — `div.row`:
     five `div.single-footer-widget` columns — Top Products (col-lg-3,
     links: Managed Website, Manage Reputation, Power Tools, Marketing
     Service), Quick Links (col-lg-2), Features (col-lg-2), Resources
     (col-lg-2), Instagram Feed (col-lg-3; source header typo "Instragram
     Feed" — fix spelling). Then `div.footer-bottom.row.align-items-center`
     (margin-top 90px) — copyright line (paraphrase to "© 2026 Periodical.
     All rights reserved." style).
- **Design tokens extracted from `css/main.css` + DOM:**
  - Font: **"Poppins", sans-serif** (body: 14px, weight 300, color #777777,
    line-height 1.625em) via Google Fonts `<link>` in index.html.
  - Brand accent: **#f6214b** (hot pink/red) — `.primary-btn` background,
    `.single-latest-post .post-right h4:hover` color, category tag
    accents, logo icon.
  - Dark: **#04091e** (near-black navy) — footer bg, navbar, `.cat-title`
    pill bg, top utility bar.
  - Page background: **#ecf0f1** (light gray); content cards **#fff**
    (`.latest-post-wrap` / `.popular-post-wrap` /
    `.relavent-story-post-wrap` all padding 20px on white).
  - Image overlay: **rgba(0,0,0,0.4)** (`.overlay-bg` on hero/feature
    images; hero text bottom-left at bottom:30px left:40px).
  - Buttons (`.primary-btn`): background #f6214b, line-height 42px,
    padding-left/right 30px, border none, color #fff, font-weight 500,
    transition all 0.3s ease (hover: darken toward #c41713-family red).
  - Category pill (`.cat-title`): font-size 14px, font-weight 600,
    background #04091e, color #fff, padding 10px 25px.
  - Breaking news (`.news-tracker-wrap`): background #fff, margin-top 10px,
    padding 12px 15px; `h6` font-weight 500.
  - Social pills: **fb #4c63a2**, **tw #69c9ff**, **rs (RSS) #f17300**,
    **yt #c41713** — white icons, count text right-aligned, border-left
    #eee separators.
  - Section rhythm: `.section-gap` = 120px 0; `top-post-area` pt-10;
    `latest-post-area` pb-120; `.footer-bottom` margin-top 90px.
  - Meta line format: "Mark Waren | 03 April, 2016 | 09 Comments" (author |
    date | comments) — small light gray text.
  - Section headings (Latest News / Popular Posts / etc.): `h4`-level dark
    headings; sidebar widget titles `h6.title` dark.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/periodical-<n>/<w>/<h>` — hero feature + 2 stacked +
  3 latest + 2 popular + 4 relevant + 3 editor's pick + 4 most popular ≈
  18 seeds); icons → lucide-react (search, menu, mail, phone, map-pin,
  chevron-down, rss, users, thumbs-up, play, calendar, message-circle) +
  inline SVG brand icons for social (facebook, twitter, dribbble, behance,
  youtube) — NOT lucide brand icons (removed); Poppins via Google Fonts
  `<link>`; hero/feature images with rgba(0,0,0,0.4) overlay for white text;
  newsletter + subscribe forms with zod validation per repo conventions;
  ad slots are empty placeholder boxes (light gray, dashed or labeled
  "728×90 ad goes here" style); owl.carousel hero can be a static grid
  (1 large + 2 stacked) — acceptable fidelity for the index state; mobile
  nav collapse toggle with aria per Bootstrap behavior.

Periodical lives in `apps/periodical` and uses shared components from
`packages/ui` (Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Top utility bar

The system SHALL render a thin dark utility bar above the header with
social icons on the left and contact info on the right.

#### Scenario: Utility bar content

- **GIVEN** the Periodical page is rendered
- **WHEN** the page loads
- **THEN** a dark utility bar SHALL be visible above the header
- **AND** it SHALL show at least four social icons on the left
- **AND** it SHALL show contact information (phone and/or email) on the
  right

### Requirement: Header with logo and ad slot

The system SHALL render a white header with the site logo on the left and
a leaderboard ad placeholder on the right.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the site name "Periodical" as the logo
- **AND** it SHALL show a 728×90-style ad placeholder box on the right

### Requirement: Navigation bar

The system SHALL render a dark navbar with uppercase links, a Post Types
dropdown, and a search icon.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show links Home, Archive, Category, Post Types, About,
  and Contact in uppercase
- **AND** the Post Types link SHALL reveal a dropdown with Standard Post,
  Image Post, Gallery Post, Video Post, and Audio Post
- **AND** a search icon SHALL be visible on the right

### Requirement: Featured posts hero

The system SHALL render a featured-post hero area with one large main post
and two smaller stacked posts, each with an image, a category pill, and an
overlaid headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the top post area is displayed
- **THEN** it SHALL show a large featured post with a dark image overlay
  and a white headline overlaid at the bottom-left
- **AND** the featured post SHALL include a dark category pill
- **AND** it SHALL show two smaller stacked posts beside the main feature

### Requirement: Breaking news ticker

The system SHALL render a white breaking-news strip between the hero and
the content area.

#### Scenario: Ticker content

- **GIVEN** the page is rendered
- **WHEN** the news tracker is displayed
- **THEN** it SHALL show a "Breaking News:" label followed by a headline
  link

### Requirement: Latest News list

The system SHALL render a white "Latest News" card with a list of post
items, each with an image on the left and a title with meta info on the
right.

#### Scenario: Latest News content

- **GIVEN** the page is rendered
- **WHEN** the latest news section is displayed
- **THEN** it SHALL show the heading "Latest News"
- **AND** it SHALL show at least three post items, each with a thumbnail
  and a title
- **AND** each item SHALL show meta info in the format
  "Author | Date | Comments"
- **AND** post titles SHALL turn the brand pink/red (#f6214b) on hover

### Requirement: Ad slot and Popular Posts

The system SHALL render an ad placeholder band followed by a white
"Popular Posts" card with featured and thumbnail posts.

#### Scenario: Popular Posts content

- **GIVEN** the page is rendered
- **WHEN** the popular posts section is displayed
- **THEN** an ad placeholder band SHALL appear between the latest news and
  popular posts
- **AND** it SHALL show the heading "Popular Posts"
- **AND** it SHALL show one featured post and at least two smaller posts

### Requirement: Relevant Stories

The system SHALL render a white "Relevant Stories" card with a list of
thumbnail post items.

#### Scenario: Relevant Stories content

- **GIVEN** the page is rendered
- **WHEN** the relevant stories section is displayed
- **THEN** it SHALL show the heading "Relevant Stories" (correct spelling)
- **AND** it SHALL show at least three items, each with a thumbnail and a
  title

### Requirement: Sidebar widgets

The system SHALL render a right sidebar with Editor's Pick, an ad
placeholder, a Newsletter signup form, Most Popular, and Social Networks
widgets.

#### Scenario: Sidebar content

- **GIVEN** the page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show an "Editor's Pick" widget with thumbnail post
  items
- **AND** it SHALL show a Newsletter widget with an email input and a
  "Subscribe" button in the brand pink/red
- **AND** submitting an invalid email SHALL show a per-field error and
  block submission
- **AND** it SHALL show a "Most Popular" widget
- **AND** it SHALL show a "Social Networks" widget with at least four
  colored social pills, each with a white icon and a follower count

### Requirement: Footer

The system SHALL render a dark navy footer with five widget columns and a
copyright row.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show columns Top Products, Quick Links, Features,
  Resources, and Instagram Feed
- **AND** it SHALL show a copyright line at the bottom
- **AND** the footer background SHALL be the dark navy #04091e

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Periodical app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the utility bar, header, navbar, hero,
  breaking news, latest news, ad, popular posts, relevant stories,
  sidebar, and footer sections in the expected order
- **AND** the document title SHALL be "Periodical — Magazine Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh periodical` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the demo 1:1 (utility bar, header, navbar,
      hero, ticker, latest news, ad, popular, relevant stories, sidebar,
      footer)
- [ ] Design tokens in `@theme`: brand `#f6214b`, dark `#04091e`, page bg
      `#ecf0f1`, overlay rgba(0,0,0,0.4), social pills `#4c63a2`/`#69c9ff`/
      `#f17300`/`#c41713`
- [ ] Font: Poppins via Google Fonts `<link>`; body 14px/300/#777777
- [ ] Buttons: `.primary-btn` style — #f6214b bg, 42px line-height, 30px
      horizontal padding, white 500, no border
- [ ] Category pills: dark #04091e bg, white 14px 600, padding 10px 25px
- [ ] Hero: 1 large feature + 2 stacked posts, dark overlay, white
      bottom-left headline
- [ ] Ticker: white strip "Breaking News:" + headline
- [ ] Latest News: ≥3 items, image left / title+meta right, hover #f6214b
- [ ] Popular Posts + Relevant Stories white cards (20px padding)
- [ ] Sidebar: Editor's Pick, ad, Newsletter (validated form), Most
      Popular, Social Networks pills with counts
- [ ] Footer: 5 widget columns on #04091e + copyright row
- [ ] Placeholder images seeded (`picsum.photos/seed/periodical-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on BOTH dup
      rows, lines 270 AND 2197, + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
