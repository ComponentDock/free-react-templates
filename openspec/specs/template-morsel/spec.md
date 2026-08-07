# Template: Morsel (Blog Template)

## Purpose

Morsel is a single-page blog/magazine landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Bona" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Bona" — food blog/magazine template
  (source: https://colorlib.com/wp/template/bona/).
- **Preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/bona/
  (live preview DOM fetched and parsed; stylesheets
  `layout-1/css/styles.css` + `layout-1/css/responsive.css` extracted for
  tokens; TEMPLATES.md screenshot
  `bona-food-blog-website-template.jpg` used as visual cross-check:
  white header with logo + nav + search, blue-marble banner strip, white
  post cards on light `#EDF3F3` background, periwinkle LOAD MORE button,
  white 3-column footer with blue circular social icons).
- **Section order (1:1):** Header (logo + Home/Categories/Features nav +
  search) → Slider banner (300px full-width background image, no text) →
  Blog area (masonry-ish post grid: 5 normal cards, 2 extra-big split
  cards, 1 extra-medium card, 2 extra-small cards + LOAD MORE button) →
  Footer (logo + copyright + social icons | CATEGORIES links | SUBSCRIBE
  email form).
- **Design tokens extracted from `layout-1/css/styles.css` + preview DOM:**
  - Fonts: body **"Roboto", sans-serif** (weight 300, 15px); paragraphs
    **"Maven Pro", sans-serif** (weight 400, `#444`, line-height 1.6);
    headings weight 300, line-height 1.5 (h1 4em, h2 2.8em, h3 2em,
    h4 1.2em, h5 1.1em, h6 .9em with letter-spacing 1px).
  - Primary: **#498BF9** (link/button hover color, footer social icon
    circles).
  - Accent: **#C3D8F5** (LOAD MORE button background — light periwinkle).
  - Page/section background: **#EDF3F3** (body, `.blog-area`, post meta
    bar); input background **#F5F7F6** (header search, footer subscribe).
  - Cards: `#fff` background, 1px solid `#ddd` border, box-shadow
    `0 0 5px rgba(0,0,0,.1)`.
  - Header: `#fff` background, box-shadow `0 2px 10px rgba(0,0,0,.3)`;
    nav links 60px tall, separated by 1px `#eee` borders, hover
    background `#eee` + blue text.
  - Avatar: 70px circle, `border: 7px solid #fff`, box-shadow
    `0 0 10px rgba(0,0,0,.2)`, pulled up -40px over the card image.
  - Meta bar (post footer): 3 equal columns (likes/comments/views),
    `#EDF3F3` background, 45px line-height, icon + number.
  - LOAD MORE: padding 15px 40px, `#C3D8F5` background, shadow
    `0 0 2px rgba(0,0,0,.4)`; hover `translateY(-2px)` + shadow
    `5px 10px 20px rgba(0,0,0,.3)`.
  - Social icons: 40px circles (border-radius 40px), `#498BF9` background,
    white icons, hover lifts with the same big shadow.
  - Subscribe input: 50px tall, `#F5F7F6` background, shadow
    `0 0 1px #bbb`, "Enter your email" placeholder, envelope submit.
  - Slider: 300px tall full-width background image (`slider-1.jpg`,
    abstract blue ink-marble art), no overlay text.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/morsel-<n>/<w>/<h>`); icons → lucide-react
  (Search, Heart, MessageCircle, Eye, Mail, socials — the original uses
  Facebook/Twitter/Instagram/Vimeo/Pinterest; use the 5 closest available
  lucide social icons); Roboto + Maven Pro via Google Fonts `<link>`;
  brand colors in `@theme`; logo rendered as styled text "Morsel" (the
  original logo is a text-style image `logo.png`, alt "Logo Image"); no
  assets copied.
- **Copy notes:** the original repeats the same long post title ("How Did
  Van Gogh's Turbulent Mind Depict One of the Most Complex Concepts in
  Physics?") on every card, author "Lora Plamer" and date
  "Sep 29, 2017 at 9:48am" (sic), category tag "HEALTH", and the same
  lorem excerpt. Keep the same kind of content; titles/excerpts may be
  paraphrased or varied per card, but the footer heading typo
  "CATAGORIES" SHALL be corrected to "CATEGORIES" and the author name
  typo "Plamer" SHALL be corrected to "Palmer" (documented deviation).

Morsel lives in `apps/morsel` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Morsel",
anchor links, and a search input.

#### Scenario: Navbar content

- **GIVEN** the Morsel page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Morsel" and links Home,
  Categories, and Features
- **AND** the navbar SHALL show a search input with a magnifier icon
  button and placeholder "Type of search"

#### Scenario: Navbar styling

- **GIVEN** the navbar is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL have a white background with a soft shadow
- **AND** nav links SHALL be separated by thin vertical dividers and turn
  blue on hover

### Requirement: Slider banner

The system SHALL render a full-width banner strip below the navbar with a
background image and no text content.

#### Scenario: Banner display

- **GIVEN** the page is rendered
- **WHEN** the banner area is displayed
- **THEN** it SHALL be a full-width strip approximately 300px tall with a
  background image
- **AND** it SHALL contain no heading or text

### Requirement: Blog post grid

The system SHALL render a blog area on a `#EDF3F3` background containing a
grid of post cards in four variants: normal, extra-big, extra-medium, and
extra-small, plus a LOAD MORE button.

#### Scenario: Normal post card

- **GIVEN** the blog area is rendered
- **WHEN** a normal post card is displayed
- **THEN** it SHALL show a post image (max-height 200px), a circular
  avatar overlapping the image bottom, a centered post title, and a
  bottom meta bar
- **AND** the meta bar SHALL show three stats: likes, comments, and views
  (e.g. 57 / 6 / 138) with icons, on an `#EDF3F3` background

#### Scenario: Extra-big post card

- **GIVEN** the blog area is rendered
- **WHEN** an extra-big post card is displayed
- **THEN** it SHALL split horizontally into an image half and an info half
- **AND** the info half SHALL show an uppercase category tag, a title, an
  excerpt paragraph, an author row (circular avatar, author name,
  publication date), and the stats meta bar

#### Scenario: Extra-medium and extra-small cards

- **GIVEN** the blog area is rendered
- **WHEN** the extra-medium card is displayed
- **THEN** it SHALL show the same content as the extra-big card with a
  full-width info area
- **AND** extra-small cards SHALL show a compact image, title, and stats
  meta bar

#### Scenario: Load more button

- **GIVEN** the blog area is rendered
- **WHEN** the LOAD MORE button is displayed
- **THEN** it SHALL be a centered button with a `#C3D8F5` background and
  uppercase "LOAD MORE" text
- **AND** hovering it SHALL lift the button slightly with a larger shadow

### Requirement: Footer

The system SHALL render a white footer with three columns: brand +
copyright + social icons, a categories link list, and a subscribe email
form.

#### Scenario: Footer brand column

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the left column SHALL show the site name "Morsel", a copyright
  line, a "Designed by Colorlib" credit, and five circular blue social
  icon buttons

#### Scenario: Categories column

- **GIVEN** the footer is displayed
- **WHEN** the categories column is rendered
- **THEN** it SHALL show the heading "CATEGORIES"
- **AND** it SHALL list the links Beauty, Health, Music, Sport, Design,
  and Travel in uppercase

#### Scenario: Subscribe form

- **GIVEN** the footer is displayed
- **WHEN** the user submits the subscribe form with a valid email
- **THEN** the form SHALL show a success message
- **AND** an invalid email SHALL show a per-field error
- **AND** the input SHALL have an envelope icon submit button

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Morsel app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document SHALL have the title "Morsel"

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-morsel`.
- [ ] `scripts/verify-app.sh morsel` (typecheck + lint + 100% coverage
      tests + build) passes before push; full `npm run gate` runs in CI.
- [ ] Section order matches the reference 1:1: header → banner → blog
      grid (normal/extra-big/extra-medium/extra-small cards) → LOAD MORE
      → footer (brand/categories/subscribe).
- [ ] Brand tokens (`#498BF9`, `#C3D8F5`, `#EDF3F3`, `#F5F7F6`) are in
      `@theme` and used via Tailwind classes.
- [ ] Fonts Roboto + Maven Pro loaded via Google Fonts `<link>`; no font
      or image assets copied from the original.
- [ ] All images are seeded picsum placeholders
      (`picsum.photos/seed/morsel-<n>/<w>/<h>`).
- [ ] `vite.config.ts` registers `injectUiSource()` (see conventions).
- [ ] PR description includes: source template (ColorLib Bona), preview
      URL, design tokens used, and what differs (name, placeholder
      images, typo corrections).
