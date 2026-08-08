# Template: Lede (News / Magazine Template)

## Purpose

Lede is a single-page news-magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Magazine" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Magazine" — news/magazine blog template
  (source: https://colorlib.com/wp/template/magazine/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/magazine/
  (HTTP 200, 37.3 KB rendered DOM, title "Magazine"). Stylesheets:
  `css/main.css` (main, 50 KB) + Bootstrap 4, font-awesome, linearicons
  (lnr icons), owl.carousel, jquery-ui, nice-select, magnific-popup.
  Fonts via Cloudflare `@font-face` in the HTML: Google Fonts **Poppins**
  (weights 100–700, latin + devanagari).
- **Screenshot:** `magazine-free-template.jpg` (1200×946, viewed in browser)
  — dark navy top utility bar (social icons left, phone/email right), white
  logo strip (red/pink flower logo + "Magazine" wordmark left, 728×90 ad
  placeholder right), dark navy nav bar (HOME / ARCHIVE / CATEGORY / POST
  TYPES dropdown / ABOUT / CONTACT + search icon right), hero masonry grid
  (large feature post ~2/3 width left with warm coffee-cup photo + white
  overlay text, two smaller stacked posts ~1/3 width right), white
  "Breaking News" ticker strip, then a two-column lower area: post list with
  images + pink category tags + titles + meta + excerpts, and a sidebar
  (Editor's Pick, ad, Newsletter, Most Popular, Social Networks). The demo
  brands itself "Magazine"; recreation uses the NEW name **Lede**.
- **Visual design (from DOM + CSS tokens + screenshot):** modern news
  magazine aesthetic — very dark navy `#04091e` header/nav/footer bars,
  vivid pink-red `#f6214b` accent (category tag pills, breaking-news label,
  subscribe button, hover states), white content on a faint `#ecf0f1` page
  background, **Poppins** sans-serif throughout (body 14px/300, headings
  600, `#222222`), section titles as dark navy pills with white 600-weight
  uppercase text, hero images with `rgba(0,0,0,0.4)` overlay and white
  bottom-left headline/meta, square corners everywhere (no border radius).

- **Structure (1:1, section order):**
  1. Header `header`:
     - `.header-top` — dark `#04091e` strip (`padding: 15px 0`): left
       `header-top-left` 4 social icons (facebook, twitter, dribbble,
       behance — font-awesome; 12px white, hover `#f6214b`); right
       `header-top-right` phone `+440 012 3654 896` (lnr-phone-handset)
       - email `support@colorlib.com` (lnr-envelope).
     - `.logo-wrap` — white bg (`padding: 20px 0`): left `col-lg-4` logo
       image (`img/logo.png`); right `col-lg-8 ads-banner` 728×90 ad image
       (`img/banner-ad.jpg`, right-aligned).
     - `.main-menu` — dark `#04091e` bar (`padding: 15px 20px`): `nav-menu`
       links **Home** (active) / Archive / Category / **Post Types**
       (dropdown: Standard Post, Image Post, Gallery Post, Video Post, Audio
       Post; white dropdown bg, box-shadow) / About / Contact — white 12px
       uppercase 400, `padding: 0 8px`; right `.navbar-right` search form
       (`.Search-box` input + lnr-magnifier label, square corners, expands
       on focus).
  2. Top posts `section.top-post-area` (`pt-10`) — `row small-gutters`:
     - `col-lg-8 top-post-left` — large feature image (`feature-image-thumb`
       - `overlay overlay-bg` rgba(0,0,0,0.4) + img `top-post1.jpg`); overlay
         details `.top-post-details` absolute `bottom: 30px; left: 40px`:
         `.tags` pill **"Food Habit"** (`#f6214b`, white, `padding: 4px 30px`),
         `<h3>` "A Discount Toner Cartridge Is Better Than Ever." (white, 20px
         margin), `.meta` row (lnr-user **Mark wiens** / lnr-calendar-full **03
         April, 2018** / lnr-bubble **06 Comments**; white 12px 300).
     - `col-lg-4 top-post-right` — 2 × `.single-top-post` (second `mt-10`):
       same pattern with `<h4>` title (white, `margin-top: 20px`), tags
       pill + meta (white).
     - `col-lg-12` `.news-tracker-wrap` (white bg, `padding: 12px 15px`,
       `margin-top: 10px`) — `<h6><span>Breaking News:</span> <a>Astronomy
Binoculars A Great Alternative</a></h6>`; span `#f6214b`, weight 500.
  3. Latest posts `section.latest-post-area` (`pb-120`) — `container` > row:
     - Main `col-lg-8 post-list`:
       a. `.latest-post-wrap` — `<h4 class="cat-title">Latest News</h4>`
       (dark `#04091e` pill, white 14px 600, `padding: 10px 25px`); **4
       rows** `.single-latest-post row align-items-center`: `col-lg-5
   post-left` (`.feature-img` image + overlay + `.tags` pill:
       Lifestyle / Science / Travel / Fashion) + `col-lg-7 post-right`
       (`<h4>` "A Discount Toner Cartridge Is Better Than Ever." 300px
       max-w, hover `#f6214b`; `.meta` #777 12px 300: Mark wiens / 03
       April, 2018 / 06 Comments; `.excert` lorem paragraph).
       b. `.ad-widget-wrap mt-30 mb-30` — full-width `img/banner-ad.jpg`.
       c. `.popular-post-wrap` — `<h4 class="title">Popular Posts</h4>`
       (dark pill); `.feature-post relative` (full-width image `f1.jpg` +
       overlay + `.details` absolute `bottom: 30px; left: 40px`: tags
       "Food Habit" pill, `<h3>` white, meta white); then `row mt-20
   medium-gutters` with **2** `.single-popular-post col-lg-6`
       (`.feature-img-wrap` image + tags pill Travel, `.details`: `<h4>`
       title, `.meta`, `.excert`).
       d. `.relavent-story-post-wrap mt-30` — `<h4 class="title">Relavent
   Stories</h4>` (dark pill); **3 rows** `.single-relavent-post row
   align-items-center` identical to latest-post rows (tags:
       Lifestyle / Science / Travel; `.excert`).
     - Sidebar `col-lg-4` `.sidebars-area` — widgets
       `.single-sidebar-widget` (`margin-bottom: 30px`), each with
       `<h6 class="title">` dark pill (`padding: 12px 20px`):
       a. `.editors-pick-widget` — title "Editor's Pick": feature image +
       tags pill + `<h4 class="mt-20">` + meta + `.excert`; then
       `.post-lists` with **3** `.single-post d-flex flex-row` (thumb
       img + `.detail` `<h6>` title + meta date/comments).
       b. `.ads-widget` — full-width `img/sidebar-ads.jpg`.
       c. `.newsletter-widget` — title "Newsletter", intro paragraph
       ("Here, I focus on a range of items and features that we use in
       life without giving them a second thought."), email input
       (`form-control`, placeholder "Email Address") + `.bbtns`
       **Subcribe** button (`#f6214b`, white 12px 500, `padding: 8px
   20px`, radius 0), trailing line "You can unsubscribe us at any
       time".
       d. `.most-popular-widget` — title "Most Popular": **4** `.single-list
   flex-row d-flex` (thumb img + `.details` `<h6>` title, hover
       `#f6214b`, + meta).
       e. `.social-network-widget` — title "Social Networks": **4** rows
       `.social-list li` full-width colored bg (`padding: 9px`), icon +
       "983 Likes/Followers/Subscriber/Subscribe" left, link right
       (white 500, `border-left: 1px solid #eee`): `.fb` **#4c63a2**
       (Like our page), `.tw` **#69c9ff** (Follow Us), `.yt` **#c41713**
       (Subscribe), `.rs` **#f17300** (Subscribe).
  4. Footer `footer.footer-area.section-gap` (bg `#04091e`,
     `padding: 120px 0`) — `container` > row of **5** widgets
     `.single-footer-widget` (h4 white, `margin-bottom: 35px`; links
     `#777777` 300, hover white; li `margin-bottom: 15px`):
     - **Top Products** `col-lg-3` — Managed Website, Manage Reputation,
       Power Tools, Marketing Service.
     - **Quick Links** `col-lg-2` — Jobs, Brand Assets, Investor Relations,
       Terms of Service.
     - **Features** `col-lg-2` — Jobs, Brand Assets, Investor Relations,
       Terms of Service.
     - **Resources** `col-lg-2` — Guides, Research, Experts, Agencies.
     - **Instragram Feed** `col-lg-3` — `.instafeed d-flex flex-wrap`:
       **8 square thumbs** (`li` width 25%, `margin: -5px`).
     - `.footer-bottom row align-items-center` (`margin-top: 90px`):
       left copyright "Copyright © <year> All rights reserved | This
       template is made with <heart> by Colorlib" (recreated with the Lede
       name, no Colorlib credit; white), right `.footer-social` 4 icons
       (facebook/twitter/dribbble/behance).

- **Design tokens extracted from `css/main.css`:**
  - Dark navy ink **`#04091e`** — header-top bar, main-menu nav bar,
    section-title pills (`cat-title`/`title` bg), footer bg.
  - Accent **pink-red `#f6214b`** — category tag pills, "Breaking News:"
    label, `.bbtns` subscribe button, all h4/h6 title hover states, header
    social icon hover, `::selection`.
  - Headings color **`#222222`** (Poppins 600, `line-height: 1.2em`);
    body/text **`#777777`** (Poppins 14px 300, `line-height: 1.625em`).
  - Page bg **`#ecf0f1`**; content containers white (`#fff`); logo-wrap and
    news-tracker white.
  - Hero overlay `rgba(0, 0, 0, 0.4)` over feature images.
  - Social brand rows: fb `#4c63a2`, tw `#69c9ff`, yt `#c41713`, rss
    `#f17300`.
  - Font: **Poppins** (Google Fonts, 300/400/500/600; devanagari subset can
    be dropped — latin only).
  - Buttons `.bbtns`: `#f6214b` bg, white, 12px 500, `padding: 8px 20px`,
    **border-radius: 0** (square). Tag pills: `#f6214b` bg, white, 300,
    `padding: 4px 30px`, inline-block.
  - Section-title pills: dark `#04091e` bg, white 14px 600,
    `padding: 10px 25px` (sidebar `12px 20px`).
  - Nav links: white 12px 400 uppercase, `padding: 0 8px`; dropdown: white
    bg, `box-shadow: 0px 0px 30px rgba(127,137,161,0.25)`.
  - Inputs: square corners (radius 0), borderless search; newsletter email
    `form-control`.
  - Section padding rhythm: `section-gap` 120px vertical; latest-post-area
    `pb-120`; rows `align-items-center` with `col-lg-5` image / `col-lg-7`
    text split.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/lede-<n>/<w>/<h>`); icons → lucide-react (search,
  user, calendar, message-circle, phone, mail, heart) with brand/social
  icons as inline SVG (lucide-react removed brand glyphs); Poppins via
  Google Fonts; no assets copied. The hero/feature images become `<img>`
  with `object-cover` and the dark overlay div matching
  `rgba(0,0,0,0.4)`; headline/meta overlay absolute bottom-left
  (`bottom: 30px; left: 40px` desktop, tighter on mobile).

Lede lives in `apps/lede` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Header with top bar, logo strip, and navigation

The system SHALL render a header composed of a dark top utility bar, a white
logo strip, and a dark navigation bar with links and a search control.

#### Scenario: Top utility bar

- **GIVEN** the Lede page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show four social icons on the left
- **AND** a phone number and an email address SHALL be visible on the right

#### Scenario: Logo strip

- **GIVEN** the header is rendered
- **WHEN** the logo strip is displayed
- **THEN** the site name "Lede" SHALL appear on the left
- **AND** an ad banner placeholder SHALL be visible on the right

#### Scenario: Navigation links

- **GIVEN** the header is rendered
- **WHEN** the navigation bar is displayed
- **THEN** it SHALL show links Home, Archive, Category, Post Types, About, and Contact
- **AND** a search control SHALL be present at the right end of the bar

#### Scenario: Post Types dropdown

- **GIVEN** the navigation bar is rendered
- **WHEN** the user opens the Post Types menu
- **THEN** it SHALL show entries Standard Post, Image Post, Gallery Post, Video Post, and Audio Post

### Requirement: Top posts hero

The system SHALL render a hero area with one large feature post on the left
and two smaller stacked posts on the right, each with a category tag, title,
and meta line.

#### Scenario: Hero layout

- **GIVEN** the page is rendered
- **WHEN** the top-post section is displayed
- **THEN** one large feature post SHALL span the left two-thirds on desktop
- **AND** two smaller posts SHALL be stacked vertically on the right third
- **AND** each post SHALL show a category tag, a headline, and a meta line with author, date, and comment count

### Requirement: Breaking news ticker

The system SHALL render a white ticker strip with a "Breaking News" label
and a headline link.

#### Scenario: Ticker content

- **GIVEN** the top-post section is displayed
- **WHEN** the ticker is rendered
- **THEN** it SHALL show the label "Breaking News" in the accent color followed by a headline link

### Requirement: Latest news list

The system SHALL render a "Latest News" section with at least four
image-left/text-right post rows, each with a tag, title, meta, and excerpt.

#### Scenario: Latest news rows

- **GIVEN** the main post column is displayed
- **WHEN** the Latest News section loads
- **THEN** a section title "Latest News" SHALL be shown
- **AND** at least four post rows SHALL appear, each with an image on the left and a tag, title, meta line, and excerpt on the right

### Requirement: Ad widget

The system SHALL render a full-width ad banner between the Latest News list
and the Popular Posts section.

#### Scenario: In-column ad

- **GIVEN** the main post column is displayed
- **WHEN** the ad widget area is rendered
- **THEN** a full-width ad banner placeholder SHALL be visible between the Latest News and Popular Posts sections

### Requirement: Popular posts

The system SHALL render a "Popular Posts" section with one full-width
feature post followed by a two-column grid of two posts.

#### Scenario: Popular posts content

- **GIVEN** the main post column is displayed
- **WHEN** the Popular Posts section loads
- **THEN** a section title "Popular Posts" SHALL be shown
- **AND** one large feature post SHALL span the full width
- **AND** two additional posts SHALL appear side by side below it, each with an image, tag, title, meta, and excerpt

### Requirement: Relevant stories

The system SHALL render a "Relevant Stories" section with at least three
image-left/text-right post rows.

#### Scenario: Relevant stories rows

- **GIVEN** the main post column is displayed
- **WHEN** the Relevant Stories section loads
- **THEN** a section title "Relavent Stories" SHALL be shown
- **AND** at least three post rows SHALL appear, each with an image on the left and a tag, title, meta, and excerpt on the right

### Requirement: Sidebar widgets

The system SHALL render a sidebar with Editor's Pick, ad, Newsletter, Most
Popular, and Social Networks widgets.

#### Scenario: Sidebar content

- **GIVEN** the blog section is displayed
- **WHEN** the sidebar is rendered
- **THEN** it SHALL show an "Editor's Pick" widget with a feature post and at least two mini post rows
- **AND** an ad placeholder widget
- **AND** a Newsletter widget with an email input and a Subscribe button
- **AND** a "Most Popular" widget with at least three thumb rows
- **AND** a "Social Networks" widget with at least four colored rows listing counts and follow links

#### Scenario: Newsletter submit

- **GIVEN** the Newsletter widget is displayed
- **WHEN** the user enters an email and submits
- **THEN** the widget SHALL indicate the subscription was received (success message)

### Requirement: Footer

The system SHALL render a dark footer with five widget columns, a copyright
line, and social icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Top Products, Quick Links, Features, Resources, and Instagram Feed columns
- **AND** an Instagram Feed column SHALL show at least six square image tiles
- **AND** a copyright line for the Lede site and social icons SHALL be visible

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Lede app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, the top-post hero, latest-post area, and sidebar in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Lede — News Magazine Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/lede`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/lede`)
- [ ] Section order matches the reference 1:1 (header top bar → logo strip → nav bar → top-post hero → breaking-news ticker → latest news → ad → popular posts → relevant stories → sidebar → footer)
- [ ] Design tokens from the reference used in `@theme` (navy #04091e, accent #f6214b, heading #222222, text #777777, page bg #ecf0f1, social fb #4c63a2 / tw #69c9ff / yt #c41713 / rss #f17300, Poppins)
- [ ] Square corners throughout (radius 0); `.bbtns` subscribe button #f6214b bg / white / 8px 20px; category tag pills #f6214b / white / 4px 30px; section-title pills dark navy / white uppercase
- [ ] Hero overlays rgba(0,0,0,0.4) with headline + meta absolute bottom-left
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react / inline SVG for brands
- [ ] README Templates status + BOTH TEMPLATES.md Magazine lines (270 and 2197) marked `[x]` after merge
