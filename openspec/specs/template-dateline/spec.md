# Template: Dateline (News & Magazine Template)

## Purpose

Dateline is a single-page news / magazine template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Newsflex"
design (see TEMPLATES.md — Blog category, line 276; the slug also repeats at
line 2207 — one recreation covers both checklist rows), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a bright, modern newspaper/magazine site: a **light header**
with the logo (dark wordmark + pink accent), a country/edition menu
(International, Local News, Pages, Sport, Lifestyle) and a banner-ad slot
top-right; a **breaking-news bar** (light gray-blue strip with a solid pink
"Trending" label block + a scrolling ticker of headlines); a **hero area**
(carousel of featured-post slides — one large + two stacked photo cards);
an **"All the news" section** with uppercase filter tabs (Latest / Popular /
International / Local) switching a 2-big-cards + 4-list-rows grid, plus a
right **sidebar** (newsletter widget with a pink "Subscribe" button, then a
square ad placeholder); a full-width **video area** (fixed parallax photo +
dark overlay, centered circular pink play button, date + white title, then a
slideshow of video cards); a **top-news section** (3-column grid of post
cards + a "Load More" button); a full-width **big ad area**; and a dark
**footer** (centered wordmark on a divider line, centered links, circular
social icons, copyright bar). Signature look: white content on light
gray-blue `#f0f4f8` panels, rectangular (radius 0) pink `#ef1b48` buttons
that turn black on hover, and Raleway everywhere.

## Design reference (replication findings)

- **Original:** ColorLib "Newsflex" — free responsive news website template
  (source: https://colorlib.com/wp/template/newsflex/; title on the ColorLib
  page: "NewsFlex - Free Responsive News Website Template 2026"). New name:
  **dateline** (the line in a news article stating the date/place of origin —
  fits the brand; single word, no collision with `ls apps/`,
  `openspec/specs/`, or `docs/templates/`).
- **Live preview REACHABLE — NOTE THE DIFFERENT SLUG:** the TEMPLATES.md
  preview URL pattern `https://preview.colorlib.com/theme/newsflex/` returns
  **404 "Not Found"**; the real live preview lives at
  **`https://preview.colorlib.com/theme/newsbox/`** (HTTP 200, ~71KB HTML;
  title "Newsbox - Modern Magazine & Newspaper HTML Template" — the preview
  host serves it under the `newsbox` slug, which also explains the
  `newsbox-free-template.jpg` screenshot filename in TEMPLATES.md).
  Stylesheet: `style.css` (~47KB custom theme, CRLF) which `@import`s
  bootstrap.min.css, classy-nav.css, owl.carousel.min.css, animate.css,
  magnific-popup.css and font-awesome.min.css, plus the Raleway Google Font.
  The custom theme rules are the `.breaking-news-*`, `.intro-news-*`,
  `.single-blog-post.*`, `.newsbox-btn`, `.featured-video-area`,
  `.footer-*` selectors listed below.
- **Screenshot viewed** (`newsbox-free-template.jpg`, in browser): desktop
  view — white page, top header with dark "News" + pink "Flex" logo and menu;
  light gray breaking strip with a pink "Trending" label and ticker text;
  large featured photo cards with dates/authors; right sidebar with the
  newsletter box (pink Subscribe button) and a square ad placeholder; a
  dark-gray full-width video band with a big circular pink play button; a
  3-column grid of smaller news cards; dark charcoal footer with centered
  logo, links and social icons.
- **Live render verified** (browser, desktop width): header nav renders
  International / Local News / Pages / Sport / Lifestyle; breaking ticker
  shows rotating headlines ("Lorem ipsum…", "Welcome to Colorlib Family.");
  "ALL THE NEWS" heading with tabs LATEST (active) / POPULAR / INTERNATIONAL
  / LOCAL; news cards with date + title + "By Michael Smith"; sidebar shows
  "Subscribe to our newsletter" (Your E-mail input + Subscribe button);
  video area centers a circular pink play button with "June 20, 2018" and
  "Traffic Problems in Time Square" below it; "Load More" pink button;
  footer links Contact Us / Closed Captioning / Site Map; copyright line
  "Copyright ©2026 All rights reserved | This template is made with ♥ by
  Colorlib" (paraphrase, drop the Colorlib credit).
- **Placeholder-copy caveats:** dates repeat "June 20, 2018" everywhere; the
  author repeats "By Michael Smith"; several card titles repeat verbatim in
  the grid ("Nearly a quarter have no emergency savings", "Top bitcoin
  exchange says over $30 million stolen", "Dow falls 287 points as trade war
  fears escalate" each appear twice; "Traffic Problems in Time Square" is
  reused for the video title and a sidebar post). The recreation keeps the
  same content KINDS but writes distinct titles/dates/authors. All
  `href="#"` links become meaningful-looking placeholder hrefs. Ad slots
  ("YOUR ADD HERE" in the header, 360×370 sidebar widget, full-width big
  add area) become bordered placeholder panels with the same label.
- **Section order (1:1) from the rendered DOM:**
  1. Header (`header.header-area`, z-index 1000): `div.newsbox-main-menu`
     (height 125px → 90px responsive, `padding: 0 5%`, white bg) — logo
     wordmark left ("News" dark + accent-colored suffix, Raleway bold),
     `ul` menu (International, Local News, Pages, Sport, Lifestyle —
     uppercase-ish text links), top-right banner-ad placeholder slot
     ("YOUR ADD HERE").
  2. Breaking news (`section.breaking-news-area`, `background-color:
#f0f4f8`, `padding: 35px 4%` → 20px 1%, `margin: 0 20px 20px`):
     `div.breaking-news-ticker` (d-flex flex-wrap align-items-center) —
     `div.title` ("Trending", solid pink block: `flex: 0 0 180px` →
     150px responsive, height 55px, `background-color: #ef1b48`, white
     label) + `div.ticker` (owl ticker) with rotating headline links.
  3. Hero featured posts (`div.hero-area` > `div.hero-post-slides` owl
     carousel, ~2 slides): each `div.single-slide` = container-fluid row —
     left `col-12 col-md-6` `div.single-blog-post.style-1` (large featured
     card: `div.blog-thumbnail.bg-overlay` photo with hover zoom 800ms +
     `div.blog-content` date → title → "By <author>") + right
     `col-12 col-md-6` with TWO stacked `style-1` posts (second has
     `mb-30`). So each slide = 1 big + 2 stacked cards.
  4. Intro news (`section.intro-news-area.section-padding-100-0.mb-70`):
     container > row.justify-content-center — main `col-12 col-lg-8`:
     `h6` "ALL THE NEWS" + `div.intro-news-filter` (`height: 32px` → 64px,
     `background-color: #f0f4f8`, `margin-bottom: 30px`) with
     `nav-tabs` LATEST (active) / POPULAR / INTERNATIONAL / LOCAL +
     `div.tab-content` with 4 tab-panes, each a row of: 2 ×
     `div.single-blog-post.style-2.mb-5` (col-12 col-sm-6 — big
     thumb-on-top cards) + 4 × `div.single-blog-post.d-flex.style-4.mb-30`
     (thumb-left list rows). Right `col-12 col-sm-9 col-md-6 col-lg-4`
     `div.sidebar-area`: `div.single-widget-area.newsletter-widget.mb-30`
     (bg `#f0f4f8`, `padding: 50px 20px`, text-center; `h4` "Subscribe to
     our newsletter" + form: full-width email input `background-color:
#d4dfe3`, height 54px, italic 12px, `#4c4c4c`, border none, mb-15 +
     Subscribe `newsbox-btn`) + `div.single-widget-area.add-widget.mb-30`
     (square 360×370 ad placeholder).
  5. Video area (`section.video-area.bg-img.bg-overlay.bg-fixed`,
     `background-image: url(img/bg-img/10.jpg)` — fixed parallax photo +
     dark overlay): `div.featured-video-area` (d-flex centered, width 100%,
     height 430px) > `div.video-content.text-center` — `a.video-btn`
     (63×63 circle, `border-radius: 50%`, bg `#ef1b48`, white 24px play
     icon, hover bg `#000`, `margin: 0 auto 20px`) + `span.published-date`
     ("June 20, 2018") + `h3` white title ("Traffic Problems in Time
     Square"). Below: `div.video-slideshow.py-5` > `div.video-slides` owl
     carousel of 6 × `div.single-blog-post.style-3` video cards.
  6. Top news (`section.top-news-area.section-padding-100`): container row
     of 6 × `col-12 col-sm-6 col-lg-4` `div.single-blog-post.style-2.mb-5`
     cards (thumb + date + title + author) + `div.load-more-button.text-
center` with a "Load More" `newsbox-btn`.
  7. Big ad (`div.big-add-area.mb-100`): full-width bordered ad placeholder.
  8. Footer (`footer.footer-area`, dark charcoal/black bg): `div.container-
fluid` > `div.footer-logo.mb-100` (centered wordmark on a divider —
     `.footer-logo::after` 2px `#d6dfe2` line, logo sits on a white
     inline-block `padding: 0 10px`); `div.container` > row > col-12 >
     `div.footer-content.text-center`: `div.footer-nav` (links Contact Us /
     Closed Captioning / Site Map) + `div.footer-social-info` (row of
     circular social icon links, `padding: 0 15px`, 14px) + copyright
     paragraph ("Copyright © <year> All rights reserved | …" — paraphrase,
     no Colorlib attribution/link).

## Design tokens (extracted from `style.css` + DOM)

- Fonts (Google Fonts, via `<link>` in `index.html`): **Raleway**
  (200–900 — the source `@import`s weights 200,300,400,500,600,700,800,900)
  — everything: nav, headings, cards, buttons, ticker, footer. No
  serif/secondary font in the source.
- Brand color: **`#ef1b48`** (vivid magenta-red) — THE accent: "Trending"
  ticker label block (55px tall, `flex: 0 0 180px` → 150px), `.newsbox-btn`
  fill, `.video-btn` fill (63×63 circle), logo suffix, Subscribe button,
  Load More button. Hover state for all of these → **`#000000`** black
  (`.newsbox-btn:hover`, `.video-btn:hover` swap to black bg).
- Light panel color: **`#f0f4f8`** (pale gray-blue) — breaking-news-area,
  intro-news-filter, newsletter-widget backgrounds.
- Dark surfaces: footer charcoal/black; video section = photo
  (`img/bg-img/10.jpg` → picsum) under a dark `bg-overlay`, `bg-fixed`
  parallax. Button variant `.newsbox-btn.btn-2` bg `#2f2f2f`.
- Neutrals: white page/card surfaces; newsletter input bg **`#d4dfe3`**
  (italic 12px, text `#4c4c4c`, no border, height 54px); footer logo
  divider `#d6dfe2` (2px line); footer social icon text `#404040`; meta
  (dates/authors) light gray.
- Buttons (`.newsbox-btn`): **rectangular — `border-radius: 0`**,
  `min-width: 170px`, height 54px, `line-height: 54px`, `padding: 0 30px`,
  font-size 18px, weight 600, `text-transform: capitalize`, white text on
  `#ef1b48`; hover → `#000000` bg. Subscribe + Load More use this button.
- Shapes: video play button 63×63 **circle** (`border-radius: 50%`); all
  cards rectangular with overflow hidden; newsbox-btn radius 0; hero
  thumbnails use `bg-overlay` (photo + dark gradient overlay for text
  legibility).
- Header: `.header-area` z-index 1000; `.newsbox-main-menu` height 125px →
  90px responsive, `padding: 0 5%`.
- Spacing: breaking-news padding `35px 4%` → `20px 1%`, `margin: 0 20px
20px`; intro-news `section-padding-100-0` + `mb-70`; filter `margin-bottom:
30px`, height 32px → 64px; newsletter widget `padding: 50px 20px`;
  post rows `mb-30`; grid cards `mb-5`; video area height 430px; top-news
  `section-padding-100`; footer-logo `mb-100`; big-add `mb-100`.
- Card variants: `style-1` (hero — big photo `bg-overlay` + content,
  800ms hover zoom), `style-2` (thumb-on-top card), `style-3` (video
  slideshow card), `style-4` (`d-flex` thumb-left list row). Meta pattern:
  date → title → "By <author>".
- Icons (source: Font Awesome — recreation: lucide-react): Play (video
  button), social icons (Pinterest, Facebook, Twitter, Dribbble, Behance,
  LinkedIn per the footer row), Menu (mobile), plus whatever the ticker/
  card metas use (the source is mostly text; keep icons minimal).

## Requirements

### Requirement: Header

The system SHALL render a light header with the logo, edition menu and an ad
slot.

#### Scenario: Desktop header

- **GIVEN** the Dateline page is rendered on a desktop viewport
- **WHEN** the header is displayed
- **THEN** it SHALL be a white bar (~125px, ~90px on smaller screens) with
  the "Dateline" wordmark on the left (Raleway bold; dark main word with the
  brand pink `#ef1b48` suffix, e.g. "Date" dark + "line" pink — the source
  splits "News"+"Flex")
- **AND** an uppercase menu of text links: International, Local News, Pages,
  Sport, Lifestyle (Links is a dropdown in the source — render as a link or
  simple dropdown)
- **AND** a banner-ad placeholder slot on the right labelled "YOUR ADD
  HERE" (bordered panel)

#### Scenario: Mobile header

- **GIVEN** a narrow viewport (≤768px)
- **WHEN** the page is rendered
- **THEN** the header SHALL collapse the menu behind a hamburger toggler
  that opens/closes the navigation with an aria-expanded state
- **AND** the ad slot SHALL be hidden or reflowed (source hides the ad on
  mobile)

### Requirement: Breaking news ticker

The system SHALL render a breaking-news bar with a pink label and a rotating
headline ticker.

#### Scenario: Ticker bar

- **GIVEN** the page is rendered
- **WHEN** the breaking-news area is inspected
- **THEN** it SHALL sit below the header on a `#f0f4f8` background with
  `margin: 0 20px 20px`
- **AND** it SHALL show a solid pink `#ef1b48` "Trending" label block
  (55px tall, 180px → 150px wide) on the left
- **AND** a ticker to the right that cycles through the headline links
  (auto-advancing, pause on hover)

### Requirement: Hero featured posts

The system SHALL render a hero carousel of featured post slides.

#### Scenario: Hero slide

- **GIVEN** the hero area is displayed
- **WHEN** a slide is inspected
- **THEN** it SHALL show one large featured card (photo with dark overlay +
  date + title + "By <author>" on the image) and two stacked cards beside
  it (same style)
- **AND** the hero SHALL advance between slides (prev/next arrows and/or
  autoplay + dots)

### Requirement: All the News tabs

The system SHALL render an "All the News" filter tab area with a news grid.

#### Scenario: Tabs and grid

- **GIVEN** the intro-news section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show the heading "All the News" and a `#f0f4f8` filter
  bar with four uppercase tabs: Latest (active), Popular, International,
  Local
- **AND** the active tab pane SHALL show TWO large photo cards (style-2,
  half-width) and FOUR thumb-left list rows (style-4, date + title +
  author)
- **AND** clicking another tab SHALL switch the visible grid to its own
  set of cards

#### Scenario: Distinct content

- **GIVEN** the news grid is rendered
- **WHEN** card titles/dates/authors are compared
- **THEN** all titles SHALL be distinct (the source repeats several titles
  verbatim), dates SHALL vary (the source repeats "June 20, 2018"), and
  authors SHALL vary (the source repeats "By Michael Smith")

### Requirement: Sidebar

The system SHALL render a sidebar with a newsletter widget and an ad
placeholder.

#### Scenario: Newsletter widget

- **GIVEN** the sidebar is displayed
- **WHEN** the newsletter widget is inspected
- **THEN** it SHALL be a `#f0f4f8` box (padding ~50px 20px, centered) with
  the heading "Subscribe to our newsletter"
- **AND** a full-width email input (bg `#d4dfe3`, italic placeholder "Your
  E-mail") and a rectangular pink "Subscribe" button (newsbox-btn style,
  hover → black)
- **AND** submitting an invalid email SHALL show a validation error and
  block submission; a valid email SHALL show a success state (no backend)

#### Scenario: Ad placeholder

- **GIVEN** the sidebar is displayed
- **WHEN** the widget below the newsletter is inspected
- **THEN** it SHALL be a square (~360×370) bordered placeholder panel
  labelled "YOUR ADD HERE"

### Requirement: Video area

The system SHALL render a full-width parallax video section with a play
button and a video slideshow.

#### Scenario: Featured video

- **GIVEN** the video area is displayed
- **WHEN** it is inspected
- **THEN** it SHALL be a full-width section with a fixed-attachment photo
  background under a dark overlay
- **AND** it SHALL center a 63×63 circular play button (bg `#ef1b48`, white
  play icon, hover → black) above a date line ("June 20, 2018") and a large
  white title ("Traffic Problems in Time Square")

#### Scenario: Video slideshow

- **GIVEN** the video slideshow below the featured video is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a horizontal carousel of video cards (thumb with a
  small play affordance + date + title) that advances with prev/next
  controls

### Requirement: Top news and Load More

The system SHALL render a top-news grid with a Load More button.

#### Scenario: Grid and button

- **GIVEN** the top-news section is displayed
- **WHEN** it is inspected
- **THEN** it SHALL show a responsive THREE-column grid of SIX news cards
  (thumb-on-top style-2: date + title + author)
- **AND** a centered rectangular pink "Load More" button below the grid
  (newsbox-btn style, hover → black) that adds more cards when clicked
  (front-end only, e.g. reveals a second batch)

### Requirement: Big ad area

The system SHALL render a full-width ad placeholder between the news and the
footer.

#### Scenario: Big ad

- **GIVEN** the page is scrolled to the bottom
- **WHEN** the area above the footer is inspected
- **THEN** it SHALL show a full-width bordered placeholder panel labelled
  "YOUR ADD HERE"

### Requirement: Footer

The system SHALL render a dark footer with logo, links, socials and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is displayed
- **WHEN** it is inspected
- **THEN** it SHALL be on a dark charcoal/black background with a centered
  "Dateline" wordmark sitting on a 2px `#d6dfe2` divider line
- **AND** three centered links: Contact Us, Closed Captioning, Site Map
- **AND** a centered row of circular social icon links (Pinterest,
  Facebook, Twitter, Dribbble, Behance, LinkedIn)
- **AND** a copyright line paraphrased for the recreation (e.g. "Copyright
  © <year> All rights reserved | made with ♥ by Free React Templates") —
  no ColorLib attribution or link

## Verification checklist

- [ ] `apps/dateline` scaffolded from the simplest existing app; package
      renamed `@free-react-templates/dateline`; workspace registered in
      `package-lock.json` (repo is bun-managed — `bun install` at root,
      never `npm add`)
- [ ] `index.html` loads Raleway (200–900) via Google Fonts `<link>`;
      title "Dateline — News & Magazine"
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #ef1b48`,
      `--color-ink: #000000`, `--color-panel: #f0f4f8`,
      `--color-input: #d4dfe3`, `--color-line: #d6dfe2`,
      `--color-muted: #404040`, `--color-btn-alt: #2f2f2f`;
      `--font-sans: Raleway`; a `bg-overlay` pattern for photo overlays
      (hero cards, video area)
- [ ] Components (one per section, colocated Vitest tests, 100% coverage):
      Header (logo, menu, ad slot, mobile hamburger), BreakingTicker
      (Trending label + rotating headlines), HeroPosts (carousel: 1 large +
      2 stacked slides), NewsTabs (Latest/Popular/International/Local ×
      2 big cards + 4 list rows), Sidebar (newsletter form with validation + ad panel), VideoArea (parallax bg, circular play button, date +
      title, video-card slideshow), TopNews (6-card 3-col grid + Load
      More), BigAd, Footer (wordmark on divider, links, socials,
      copyright)
- [ ] `App.tsx` composes sections in the DOM order above (Header →
      BreakingTicker → HeroPosts → NewsTabs+Sidebar → VideoArea →
      TopNews → BigAd → Footer)
- [ ] All images `https://picsum.photos/seed/dateline-<n>/<w>/<h>` (hero
      big 800×600, hero small 400×300, grid cards 600×400, list thumbs
      120×90, video 400×300, sidebar ad none — bordered placeholder panel,
      big ad none — bordered placeholder panel); no ColorLib assets copied
- [ ] `npm run verify:app dateline` passes (typecheck + lint + vitest 100% +
      build); full gate runs in CI on merge
- [ ] PR description includes: source template (Newsflex), preview URL
      (`https://preview.colorlib.com/theme/newsbox/` — note the slug
      mismatch), design tokens, renames, placeholder images, and the dup
      row (line 2207) covered by the same recreation
