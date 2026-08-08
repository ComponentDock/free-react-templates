# Template: Bulletin (News / Magazine Template)

## Purpose

Bulletin is a single-page news magazine website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "NewsFlex" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "NewsFlex" — news / magazine template
  (source: https://colorlib.com/wp/template/newsflex/).
  TEMPLATES.md has TWO copies of this item (lines 276 and 2207 — mark
  EVERY copy `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/newsbox/
  (HTTP 200, 71.5 KB rendered DOM, title "Newsbox - Modern Magazine &
  Newspaper HTML Template"). NOTE: the live preview slug is **`newsbox`**,
  not `newsflex` — `https://preview.colorlib.com/theme/newsflex/` returns 404. Stylesheet: `style.css` (47 KB, extracted, Raleway Google Fonts via
  `@import`, plus bootstrap/classy-nav/owl.carousel/animate/magnific-popup/
  font-awesome imports). The TEMPLATES.md screenshot
  (`newsbox-free-template.jpg`) was verified live in a browser (vision,
  1200×946) and matches the rendered DOM.
- **Section order (1:1):** Header (logo "News"+accent word, nav:
  International / Local News / Pages / Sport / Lifestyle, header add area
  "YOUR ADD HERE" banner) → Breaking news ticker (pink "Trending" box +
  scrolling headlines) → Hero carousel (2 slides × 3 posts: one large
  col-md-6 post + two stacked col-md-6 posts, all with dark overlay and
  bottom-left date + white title) → "ALL THE NEWS" tabbed section
  (LATEST / POPULAR / INTERNATIONAL / LOCAL tabs; each pane = 2 large
  style-2 cards + 6 small style-4 thumb-left rows; right sidebar:
  newsletter widget "Subscribe to our newsletter" + ad widget) → Video
  section (bg-image fixed, centered circular play button, date + title
  "Traffic Problems in Time Square", then a video slideshow strip of 6
  style-3 cards) → Top News grid (6 style-2 cards, 3 columns) → Big add
  area (ad placeholder) → Footer (centered logo over hairline, nav:
  Contact Us / Closed Captioning / Site Map, social icons, copyright bar).
- **Design tokens extracted from `style.css`:**
  - Primary accent **hot pink/red `#ef1b48`** (33 refs — "Trending" box,
    buttons `.newsbox-btn`, active tab, hover states on titles/authors/
    nav/footer links, video play buttons, video slideshow top border).
  - Section/light background **`#f0f4f8`** (breaking-news area, newsletter
    widget, category featured posts); white `#ffffff` page bg.
  - Text: ink `#232323` (card titles), `#404040` (nav/footer links,
    ticker text), `#636363` (dates, authors), `#8a8a8a` (inactive tabs),
    `#a9a9a9` (copyright), white on overlays.
  - Button variants: `.newsbox-btn` = bg `#ef1b48`, white text, min-width
    170px, height 54px, border-radius **0**, padding 0 30px, font-size
    18px, font-weight 600, text-transform capitalize; `.btn-2` bg
    `#2f2f2f`; `.btn-3` bg `#0b87d6`.
  - Font: **"Raleway", sans-serif** (weights 200–900, Google Fonts).
  - Hero post titles: white, 30px (style-1); card titles 22px/600
    (style-2/3), 16px (style-4); post dates 12px.
  - Video play button: 63×63 circle, bg `#ef1b48`, white icon, hover
    bg `#000`.
  - Newsletter input: full width, 54px, bg `#d4dfe3`, italic 12px,
    centered, no border.
  - Tabs: 12px uppercase, `#8a8a8a`, active `#ef1b48`, no border.
  - Footer logo sits on a 2px `#d6dfe2` hairline; footer nav links
    `#404040` hover `#ef1b48`; social icons `#404040`.
  - Section padding rhythm: `section-padding-100` = 100px top/bottom;
    intro-news uses `section-padding-100-0`; big add area `mb-100`.
  - Image overlays: `.bg-overlay::after` = `rgba(0,0,0,.35)`; hero
    thumbnails dark overlay with z-index layering.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/bulletin-<n>/<w>/<h>`); icons → lucide-react
  (Play, Search, Menu, ChevronDown, social icons as inline SVG BrandIcon —
  lucide removed brand icons); no assets copied. The hero carousel and
  video slideshow auto-advance (owl-carousel in the original) with
  prev/next controls; breaking-news ticker scrolls its headlines. The
  LATEST/POPULAR/INTERNATIONAL/LOCAL tabs filter the same news data
  client-side. The header ad area and big add area render placeholder
  boxes ("YOUR ADD HERE" / "YOUR AD HERE" style).

Bulletin lives in `apps/bulletin` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navbar with the site name "Bulletin", anchor
links to the page's sections, and a header add area.

#### Scenario: Navbar content

- **GIVEN** the Bulletin page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Bulletin" (with the
  accent-colored part matching the original's two-tone logo)
- **AND** it SHALL show links to International, Local News, Pages, Sport,
  and Lifestyle
- **AND** it SHALL show a header add area placeholder ("YOUR ADD HERE")

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user opens the mobile menu
- **THEN** the menu SHALL list every nav link
- **AND** the user SHALL be able to close the menu

### Requirement: Breaking news ticker

The system SHALL render a breaking-news bar below the navbar with a
"Trending" label and a scrolling list of headlines.

#### Scenario: Breaking news content

- **GIVEN** the page is rendered
- **WHEN** the breaking-news bar is displayed
- **THEN** it SHALL show a pink "Trending" label box
- **AND** it SHALL show scrolling headline links (e.g. "Welcome to
  Colorlib Family." and a longer Lorem ipsum teaser)

### Requirement: Hero carousel

The system SHALL render a hero carousel of featured posts that
auto-advances and supports manual navigation.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero carousel displays a slide
- **THEN** the slide SHALL show one large post (date + white title over a
  dark-overlay image, e.g. "Traffic Problems in Time Square") beside two
  stacked posts (e.g. "The best way to spend your holliday" and "Sport
  results for the weekend games")

#### Scenario: Carousel navigation

- **GIVEN** any hero slide is displayed
- **WHEN** the user presses the next or previous control
- **THEN** the carousel SHALL show the corresponding slide

### Requirement: All the news tabs

The system SHALL render a tabbed news section titled "All the news" with
LATEST, POPULAR, INTERNATIONAL, and LOCAL tabs, each pane containing two
large cards and six small thumb-left rows.

#### Scenario: Tab bar content

- **GIVEN** the page is rendered
- **WHEN** the news section is displayed
- **THEN** it SHALL show the heading "All the news"
- **AND** it SHALL show the tabs LATEST (active by default), POPULAR,
  INTERNATIONAL, and LOCAL

#### Scenario: Latest pane content

- **GIVEN** the LATEST tab is active
- **WHEN** the pane is displayed
- **THEN** it SHALL show two large post cards (thumbnail on top, date,
  title, author)
- **AND** it SHALL show six small posts (120px thumbnail left, date +
  title right)

#### Scenario: Tab switching

- **GIVEN** the news section is displayed
- **WHEN** the user presses the POPULAR, INTERNATIONAL, or LOCAL tab
- **THEN** the pane SHALL switch to the corresponding category
- **AND** the active tab SHALL be styled with the accent color

#### Scenario: Sidebar widgets

- **GIVEN** the news section is displayed
- **WHEN** the sidebar is rendered
- **THEN** it SHALL show a newsletter widget titled "Subscribe to our
  newsletter" with an email input and a Subscribe button
- **AND** it SHALL show an ad placeholder widget

### Requirement: Video section

The system SHALL render a full-width video section with a centered play
button, date, title, and a strip of video post cards below.

#### Scenario: Featured video content

- **GIVEN** the page is rendered
- **WHEN** the video section is displayed
- **THEN** it SHALL show a circular play button over a fixed background
  image
- **AND** it SHALL show the date "June 20, 2018" and the title "Traffic
  Problems in Time Square"

#### Scenario: Video slideshow

- **GIVEN** the video section is displayed
- **WHEN** the slideshow strip is rendered
- **THEN** it SHALL show six video post cards, each with a thumbnail, a
  play icon overlay, a date, and a white title
- **AND** the strip SHALL have a 2px accent-colored top border

### Requirement: Top news grid

The system SHALL render a "top news" grid of six post cards in three
columns.

#### Scenario: Top news content

- **GIVEN** the page is rendered
- **WHEN** the top news section is displayed
- **THEN** it SHALL show six post cards (thumbnail on top, date, title,
  author), laid out 3 per row on desktop

### Requirement: Big add area

The system SHALL render a full-width advertisement placeholder below the
top news grid.

#### Scenario: Add placeholder

- **GIVEN** the page is rendered
- **WHEN** the big add area is displayed
- **THEN** it SHALL show a placeholder ad box (e.g. "YOUR AD HERE")
  with 100px bottom margin

### Requirement: Footer

The system SHALL render a footer with a centered logo, footer nav links,
social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site logo centered over a hairline divider
- **AND** it SHALL show the links Contact Us, Closed Captioning, and
  Site Map
- **AND** it SHALL show social media icons (Pinterest, Facebook, Twitter,
  Dribbble, Behance, LinkedIn)
- **AND** it SHALL show the copyright line "All rights reserved | This
  template is made with ♥ by Colorlib" (paraphrased)

## Verification checklist

- [ ] `bash scripts/verify-app.sh bulletin` passes (typecheck + lint +
      100% coverage tests + build, ~2–3 min)
- [ ] `npm run spec:validate` passes
- [ ] All four tabs filter news client-side; hero + video carousels
      auto-advance and respond to manual controls
- [ ] Breaking-news ticker scrolls; mobile menu opens/closes
- [ ] Fidelity: section order 1:1, Raleway font, `#ef1b48` accent,
      `#f0f4f8` light-gray section backgrounds, square buttons,
      picsum placeholders seeded `bulletin-<n>`, no copied assets
- [ ] TEMPLATES.md: mark BOTH Newsflex lines (276 and 2207) `[x]` and
      append the live surge URL
- [ ] `npm install` at root before committing (lockfile registers
      `apps/bulletin`); `grep -c "free-react-templates/bulletin"
    package-lock.json` >= 1
- [ ] `"homepage": "https://free-react-templates-bulletin.surge.sh"`
      in `apps/bulletin/package.json`
- [ ] PR title: `feat: Bulletin — news magazine template (ColorLib
    Newsflex)`; body includes source URL, preview URL
      (`https://preview.colorlib.com/theme/newsbox/`), tokens, and the
      slug note (`newsflex` preview 404s → use `newsbox`)
