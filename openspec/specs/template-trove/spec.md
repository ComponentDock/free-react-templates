# Template: Trove (Blog Template)

## Purpose

Trove is a single-page blog/magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Bounty" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Bounty" — blog/magazine template
  (source: https://colorlib.com/wp/template/bounty/).
- **Preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/bounty/
  (live preview DOM fetched and parsed; stylesheet `css/main.css` extracted
  for tokens). NOTE: the preview's internal `<title>` reads "Ruft Blog" and
  the root stylesheet is shared with the Ruft template — this is ColorLib
  leftover naming; the rendered content matches the Bounty screenshot 1:1
  (same post titles "2nd Gen Smoke Alarm get up from sleep", author
  "Marvel Maison", date "13th Oct, 2018", excerpt "There is a moment in the
  life of any aspiring astronomer..."), so the preview IS the Bounty design.
  TEMPLATES.md screenshot `bounty-free-template.jpg` used as visual
  cross-check: white header with purple script logo "Bounty" and centered
  search bar, uppercase nav row, 4-up stories strip, 3 large image columns
  with bottom-left white overlay text (title + avatar + author + date +
  excerpt), 2-column post grid, dark charcoal sidebar widgets, black
  footer.
- **Section order (1:1):** Header-top (logo left + search trigger icon
  right) → Nav menu (HOME, CATEGORY, ARCHIVE, PAGES ▾, BLOG ▾, CONTACT) →
  Search overlay (hidden until the search trigger is clicked: full-width
  purple-gradient bar with white placeholder "Search or enter website
  name." and close icon) → Top stories strip (full-width carousel, 12
  items: thumbnail + h6 title + uppercase date) → Featured post slider
  (carousel, 6 slides: full-width image + bottom-left white overlay panel
  with h2 title, author avatar + name + uppercase date, excerpt) → Post
  grid (2-col, 8 cards: image + white panel overlapping the image bottom
  with h4 title, excerpt, meta row: date + comments count) → Pagination
  (Previous · 01 02 03 04 09 · Next) → Sidebar (4 dark widgets: About
  "Peter Anderson" with avatar + bio + social icons, Popular posts tabbed
  list of 8, "Post Categories" list with counts, "Post Tags" pill list) →
  Footer (black, 4 columns: About Us + Newsletter form | Instagram Feed
  8-image grid | Follow Us social links; footer-bottom row: copyright +
  "Made with Colorlib" credit).
- **Design tokens extracted from `css/main.css` + preview DOM:**
  - Fonts: body **"Roboto", sans-serif** (14px, weight 400, line-height
    24px, color **#828bb2**); headings h1–h6 **"Rubik", sans-serif**
    (weight 500, line-height 1.2em, color #000; h2 30px, h4 18px).
  - Primary brand gradient: `linear-gradient(90deg, #7c32ff 0%, #c738d8
100%)` (purple → magenta) — search overlay background, newsletter
    subscribe button, pagination active/hover page link, tag hover,
    social-link hover.
  - Secondary: **#415094** (dark indigo) — post card h4 titles, nav link
    hover color, header-top search-trigger link color, shadow tint
    `rgba(65, 80, 148, …)`.
  - Body/meta text: **#828bb2** (slate) — card excerpts, meta rows,
    category widget links; uppercase meta labels 12px.
  - Sidebar widgets: background **#1e1c27** (dark charcoal), border 1px
    solid #eee, padding 30px; widget h4 headings white with 1px
    `rgba(130, 139, 178, 0.4)` bottom border; popular post titles white
    14px; tags: `rgba(130, 139, 178, 0.3)` background, 5px 10px padding,
    links #828bb2 weight 300.
  - Footer: background **#000**; footer titles 16px #fff weight 600
    (margin-bottom 28px); social links #fff, hover #7c32ff.
  - Featured slider overlay: h2 30px white; meta block separated by 1px
    `rgba(255, 255, 255, 0.25)`; avatar circle with `margin-top: -25px`
    overlap; details text #fff; uppercase date 12px.
  - Post cards: white details panel absolutely positioned `left: 30px;
bottom: -30px`, padding 30px, box-shadow `0 10px 30px
rgba(65, 80, 148, 0.1)`; h4 20px #415094; meta `#828bb2`, uppercase
    spans with icon + text, `padding-right: 20px` gaps.
  - Top stories items: `padding: 0 20px`, separated by 1px
    `rgba(65, 80, 148, 0.15)` border-right.
  - Hover interactions: images `scale(1.1)` (transition .3s); post titles
    (h2/h4/h6) and stories titles get the purple→magenta gradient text on
    hover; tag pills hover to gradient background.
  - Subscribe button (.sub-btn): gradient background, #fff, weight 300,
    border-radius 0, absolutely positioned right/top inside the input.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/trove-<n>/<w>/<h>`: stories thumbs 120×90, slider
  1600×700, post cards 800×500, avatars 120×120, instafeed 90×90); icons →
  lucide-react (Search, X, Calendar, MessageCircle, User; socials — the
  original uses FontAwesome Facebook/Twitter/Dribbble/Instagram/other;
  use the closest available lucide social icons); Roboto + Rubik via
  Google Fonts `<link>` in `index.html`; brand colors in `@theme`; logo
  rendered as styled script text "Trove" (the original logo is a
  text-style image `img/logo.png`); carousels may be rendered as static
  grids (structure faithful, no JS carousel dependency) or a simple
  auto-rotating carousel; search overlay toggles open/close on the header
  search icon; no assets copied.
- **Copy notes:** the original repeats the same post titles ("2nd Gen
  Smoke Alarm get up from sleep", "An Stormy Evening"), author "Marvel
  Maison", and the same astronomer excerpt on every card. Keep the same
  kind of content; titles/excerpts may be paraphrased or varied per card.
  The tag typo "Techlology" SHALL be corrected to "Technology"
  (documented deviation). "PAGES" and "BLOG" nav items have dropdowns in
  the original (Pages → Elements / Blog / Blog Details); render as links
  with a simple dropdown or as plain links (documented choice).

Trove lives in `apps/trove` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top header with the site name "Trove", a search
trigger icon, and a navigation menu.

#### Scenario: Header content

- **GIVEN** the Trove page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Trove" on the left and a
  search trigger icon on the right
- **AND** the navigation SHALL show uppercase links Home, Category,
  Archive, Pages, Blog, and Contact

#### Scenario: Search overlay

- **GIVEN** the header is rendered
- **WHEN** the user clicks the search trigger icon
- **THEN** a full-width search bar SHALL appear with the placeholder
  "Search or enter website name." on a purple-gradient background
- **AND** clicking the close icon SHALL hide it again

### Requirement: Top stories strip

The system SHALL render a full-width strip of story cards above the
featured slider, each with a thumbnail, title, and date.

#### Scenario: Stories display

- **GIVEN** the page is rendered
- **WHEN** the stories strip is displayed
- **THEN** it SHALL show at least four story cards, each with a small
  thumbnail image, a story title, and an uppercase date
- **AND** cards SHALL be separated by thin vertical dividers

### Requirement: Featured post slider

The system SHALL render a featured area of large image slides with
bottom-left overlay text.

#### Scenario: Featured slide content

- **GIVEN** the featured area is rendered
- **WHEN** a slide is displayed
- **THEN** it SHALL show a full-width background image with a white title
  overlaid at the bottom-left
- **AND** the overlay SHALL include an author row (circular avatar, author
  name, uppercase date) and an excerpt paragraph
- **AND** hovering the slide SHALL zoom the image slightly

### Requirement: Post grid and pagination

The system SHALL render a two-column grid of post cards plus a pagination
row.

#### Scenario: Post card

- **GIVEN** the post grid is rendered
- **WHEN** a post card is displayed
- **THEN** it SHALL show a post image with a white details panel
  overlapping its bottom edge
- **AND** the panel SHALL show a dark-indigo title, an excerpt, and a meta
  row with an uppercase date and a comments count (e.g. "05")

#### Scenario: Pagination

- **GIVEN** the post grid is rendered
- **WHEN** the pagination row is displayed
- **THEN** it SHALL show Previous / Next links and page links 01, 02, 03,
  04, 09
- **AND** the active page link SHALL have a purple-gradient background

### Requirement: Sidebar widgets

The system SHALL render a right-side sidebar with four dark widgets:
about, popular posts, categories, and tags.

#### Scenario: Sidebar content

- **GIVEN** the sidebar is rendered
- **WHEN** the page loads
- **THEN** the About widget SHALL show an avatar, the name "Peter
  Anderson", a short bio, and social icon links
- **AND** the Popular Posts widget SHALL list eight posts with thumbnails,
  titles, and uppercase dates
- **AND** the Post Categories widget SHALL list categories with counts
  (e.g. International (56), Tours and Travels (45))
- **AND** the Post Tags widget SHALL list tag pills (e.g. Lifestyle, Art,
  Adventure, Food, Technology, Fashion)

### Requirement: Footer

The system SHALL render a black footer with an About Us column, a
Newsletter subscribe form, an Instagram feed, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the About Us column SHALL show a description paragraph
- **AND** the Newsletter column SHALL show an email input with a
  subscribe button
- **AND** an Instagram Feed column SHALL show an 8-image grid
- **AND** a Follow Us column SHALL show social icon links

#### Scenario: Newsletter validation

- **GIVEN** the footer is rendered
- **WHEN** the user submits the newsletter form with a valid email
- **THEN** the form SHALL show a success message
- **AND** an invalid email SHALL show a per-field error

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Trove app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document SHALL have the title "Trove"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-trove`.
- [ ] `scripts/verify-app.sh trove` (typecheck + lint + 100% coverage
      tests + build) passes before push; full `npm run gate` runs in CI.
- [ ] Section order matches the reference 1:1: header-top (logo + search
      trigger) → nav → search overlay → stories strip → featured slider →
      post grid (8 cards) → pagination → sidebar (about/popular/
      categories/tags) → footer (about/newsletter/instafeed/socials).
- [ ] Brand tokens (gradient `#7c32ff → #c738d8`, `#415094`, `#828bb2`,
      `#1e1c27` widget bg, `#000` footer) are in `@theme` and used via
      Tailwind classes.
- [ ] Fonts Roboto + Rubik loaded via Google Fonts `<link>`; no font or
      image assets copied from the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/trove-<n>/<w>/<h>`).
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] PR description includes: source template (ColorLib Bounty), preview
      URL, design tokens used, and what differs (name, placeholder
      images, tag typo correction).
