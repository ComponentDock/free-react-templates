# Template: Headline (Blog & Magazine Template)

## Purpose

Headline is a single-page blog/magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "World" website template design
(source: https://colorlib.com/wp/template/world/), built under a DIFFERENT
name (Headline — a newspaper/magazine headline, per the monorepo naming
mandate), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "World" — blog & magazine website template
  (source: https://colorlib.com/wp/template/world/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/world/`
  (HTTP 200, ~214 KB HTML; stylesheet `style.css` ~38.6 KB parsed for
  tokens; it imports css/bootstrap.min.css, animate.css, owl.carousel.css,
  magnific-popup.css, font-awesome.min.css, themify-icons.css). The
  TEMPLATES.md screenshot (`world-free-template-1.jpg`) is the visual
  reference: dark night-city hero photo with numbered featured-post strip,
  white magazine content area, blue accents.
- **Section order (1:1, from live preview DOM):**
  1. Preloader (`#preloader`, dark `#232323`).
  2. Navbar (fixed, transparent over hero; black `#000` when sticky):
     logo image "WORLD", links Home (active), Pages (dropdown), Gadgets,
     Lifestyle, Video, Contact + search toggle (opens `#search-wrapper`
     with `#close-icon`).
  3. Hero: `hero-slides` owl-carousel with 2 full-bleed background-image
     slides (600px tall, `background-overlay` rgba(0,0,0,0.7)); below, a
     `hero-post-slide` numbered strip of 4 featured posts (number circle +
     title, active/center one gets blue-bordered circle + white bold title).
  4. Main content (`.main-content-wrapper.section-padding-100`, 100px
     vertical padding, white bg):
     - **"Don't Miss"** category area (col-lg-8): tabs "All" (active),
       "Style hunter", "Vogue", "Health & Fitness", "Travel", "Gadgets",
       "More" (dropdown: Sports, Politices, Features); 9 tab panes
       (`world-tab-1..9`), each pane = 1 large post card (thumbnail +
       post-cta tag + headline + meta "Katy Liu on Sep 29, 2017 at 9:48
       am") + 4 small horizontal `post-style-2` cards (thumbnail + h5
       headline + meta).
     - **"What's Trending"** category area (mt-50): same 6 tabs, 9 panes
       (`world-tab-10..18`), each pane = `single-cata-slide` carousel slide
       containing 4 `post-style-2` cards.
     - **Sidebar** (col-lg-4): "About World" widget (mango-quote blurb),
       "Top Stories" widget (5 numbered `widget-post` rows), "Stay
       Connected" widget (social icon row: Facebook/Twitter/Google+/
       Instagram/etc.), "Today's Pick" widget (thumbnail + headline card).
     - **Post-style-3 row** (3 columns): 3 cards each with thumbnail,
       `post-tag` link + `post-content` meta.
     - **Latest Articles** (col-lg-8, title + 4 horizontal `post-style-4`
       rows) + **Most Popular Videos** (col-lg-4, title + 2 stacked cards).
     - Load More button (`.load-more-btn .world-btn`, pill outline button).
  5. Footer (`#161616` bg, 70px padding, 3 columns): col 1 = copyright
     line ("Copyright © 2018 All rights reserved | This template is made
     with <3 by Colorlib"), col 2 = link list (Home, Fashion, Lifestyle,
     Contact, Gadgets, Video), col 3 = "Subscribe" widget (email input +
     subscribe `world-btn`).

- **Design tokens extracted from `style.css` + DOM:**
  - Brand color: **#0000ff** (pure blue) — link hover, active tab
    underline, post-cta tag text, active hero-post number border, `world-btn`
    hover fill. Neutrals: #ffffff (bg), #f1f1f1 (widget/section borders),
    #8d8d8d (body copy), #000000 (headings, sticky navbar), #161616 (footer
    bg), #232323 (preloader bg), #d7d7d7/#d8d8d8 (button/input borders),
    #959595 (secondary gray).
  - Fonts: **"Ubuntu"** (300/400/500/700 — headings, links, buttons) +
    **"Work Sans"** (300/400/500/600/700 — body) via Google Fonts
    (`family=Ubuntu:300,400,500,700|Work+Sans:300,400,500,600,700`).
  - Buttons (`.world-btn`): pill (border-radius 50px), height 35px, padding
    0 25px, 1px solid #d7d7d7 border, transparent bg; hover → bg #0000ff +
    border #0000ff + white text.
  - Post-cta tag: absolute at top-left over thumbnail, white bg, uppercase
    10px, blue text, height 20px, padding 0 10px.
  - Hero: 600px slides, dark overlay; numbered post strip with 5px-bordered
    circles (active: blue top/bottom/right, gray left).
  - Section backgrounds: white content; dark #161616 footer; hero = photo
    with dark overlay.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/headline-<n>/<w>/<h>`); icons → lucide-react +
  inline SVG brand icons for socials (lucide removed brand icons); Ubuntu +
  Work Sans via Google Fonts; tab panes → accessible tablist component;
  carousels → simple prev/next + dot controls (no owl-carousel dependency);
  repo-standard Navbar + Footer chrome.

Headline lives in `apps/headline` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the site name
"Headline", anchor links to the page's sections, a "More" dropdown, a
search toggle, and a mobile collapse menu.

#### Scenario: Navbar content

- **GIVEN** the Headline page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Headline" and links Home,
  Pages, Gadgets, Lifestyle, Video, and Contact
- **AND** the navbar SHALL show a search toggle button and a "More"
  dropdown with Sports, Politices, and Features links

#### Scenario: Search toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the search toggle
- **THEN** a search input area SHALL appear with a close button
- **AND** pressing the close button SHALL hide the search area

### Requirement: Hero section

The system SHALL render a full-width photo hero with a rotating slideshow
and a numbered featured-post strip.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a dark-overlay background image slideshow with
  previous/next or dot controls
- **AND** it SHALL show a strip of 4 numbered featured-post titles
- **AND** the active strip item SHALL be visually highlighted (blue circle
  - bold white title)

### Requirement: "Don't Miss" tabbed posts

The system SHALL render a "Don't Miss" category section with tabs and one
featured card plus small cards per category.

#### Scenario: Don't Miss content

- **GIVEN** the page is rendered
- **WHEN** the "Don't Miss" section is displayed
- **THEN** it SHALL contain a heading "Don't Miss" with tabs All, Style
  hunter, Vogue, Health & Fitness, Travel, and Gadgets
- **AND** the active tab SHALL show one large post card (thumbnail, tag,
  headline, author/date meta) and at least two small horizontal post cards
- **AND** selecting a different tab SHALL swap the visible posts

### Requirement: "What's Trending" section

The system SHALL render a "What's Trending" category section with tabs and
a carousel of post cards.

#### Scenario: What's Trending content

- **GIVEN** the page is rendered
- **WHEN** the "What's Trending" section is displayed
- **THEN** it SHALL contain a heading "What's Trending" with category tabs
- **AND** it SHALL show a slide containing at least four horizontal post
  cards with thumbnail, headline, and meta
- **AND** the user SHALL be able to move between slides with prev/next
  controls or dots

### Requirement: Sidebar widgets

The system SHALL render a sidebar with About, Top Stories, Stay Connected,
and Today's Pick widgets.

#### Scenario: Sidebar content

- **GIVEN** the page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show an "About Headline" widget with a short blurb
- **AND** it SHALL show a "Top Stories" widget with at least three numbered
  post rows
- **AND** it SHALL show a "Stay Connected" widget with social icon links
- **AND** it SHALL show a "Today's Pick" widget with a thumbnail and
  headline

### Requirement: Featured card row

The system SHALL render a three-column row of post cards with tags.

#### Scenario: Featured cards

- **GIVEN** the page is rendered
- **WHEN** the featured card row is displayed
- **THEN** it SHALL show exactly three post cards
- **AND** each card SHALL show a thumbnail, a category tag, a headline,
  and author/date meta

### Requirement: Latest Articles and Most Popular Videos

The system SHALL render a "Latest Articles" list and a "Most Popular
Videos" column.

#### Scenario: Latest content

- **GIVEN** the page is rendered
- **WHEN** the latest content section is displayed
- **THEN** it SHALL show a "Latest Articles" heading with at least three
  horizontal article rows
- **AND** it SHALL show a "Most Popular Videos" heading with at least one
  video card

### Requirement: Load More button

The system SHALL render a Load More button below the content.

#### Scenario: Load More

- **GIVEN** the page is rendered
- **WHEN** the Load More button is displayed
- **THEN** it SHALL be a pill-outline button labelled "Load More"

### Requirement: Footer

The system SHALL render a dark footer with a copyright line, a link list,
and a Subscribe widget.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the copyright line "© <year> All rights reserved"
- **AND** it SHALL show links Home, Fashion, Lifestyle, Contact, Gadgets,
  and Video
- **AND** it SHALL show a "Subscribe" widget with an email input and a
  Subscribe button

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Headline app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Headline — Blog & Magazine Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh headline` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (preloader, navbar, hero slides,
      hero-post strip, Don't Miss tabs, What's Trending tabs, sidebar,
      featured card row, latest articles, load more, footer)
- [ ] Design tokens in `@theme`: brand blue `#0000ff`, neutrals #ffffff,
      #f1f1f1, #8d8d8d, #000000, #161616, #232323, #d7d7d7
- [ ] Fonts: Ubuntu (headings/links) + Work Sans (body) via Google Fonts
- [ ] Buttons: pill outline `world-btn` style (50px radius, 1px #d7d7d7
      border) with blue hover fill
- [ ] Hero on dark photo with overlay; footer dark #161616
- [ ] Tabs accessible (tablist/tab/tabpanel semantics), carousels without
      extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/headline-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` + surge URL) —
      NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
