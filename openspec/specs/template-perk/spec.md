# Template: Perk (Coffee Shop Landing)

## Purpose

Perk is a single-page coffee shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Coffee" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a warm coffee page with gold/amber accents: a hero
banner ("Start your day with a black Coffee"), a video section ("We
Telecast our Coffee Making Live"), a coffee menu grid (9 items), a photo
gallery, customer reviews with stats, blog cards, and a dark footer with
newsletter and social links. Perk recreates that structure section-for-
section with matching layout, colors, typography, and content types (no
ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Coffee" — free coffee shop website template
  (source: https://colorlib.com/wp/template/coffee/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/coffee/`
  (HTTP 200, 24.8KB — the rendered page) + stylesheet `css/main.css` (50.4KB).
  The rendered DOM is the reference below; the TEMPLATES.md screenshot
  (`coffee-free-template.jpg`) confirms the visual design (dark hero, gold
  accents, warm tones).
- **Section order (1:1):**
  1. Header: top bar (Mon-Fri 8am-2pm, Sat-Sun 11am-4pm, phone number) +
     navbar (logo "Perk", nav links: Home, About, Coffee, Review, Blog).
  2. Hero/Banner (`banner-area`): full-width dark background image, white
     text "Start your day with a black Coffee", subtitle "Now you can feel
     the Energy", gold "Buy Now" pill button.
  3. About/Video (`video-sec-area`): two-column — left = video thumbnail
     with play overlay, right = "Live Coffee making process" subtitle,
     "We Telecast our Coffee Making Live" heading, description text.
  4. Menu (`menu-area`): centered title "What kind of Coffee we serve for
     you", 3-column grid of 9 items (Cappuccino, Americano, Espresso,
     Macchiato, Mocha, Coffee Latte, Piccolo Latte, Ristretto, Affogato)
     each with name, price ($49), and description.
  5. Gallery (`gallery-area`): same title, asymmetric image grid (2 small
     left, 1 large + 2 medium right) with 5 images.
  6. Reviews (`review-area`): same title, 2 reviewer cards (avatar, name,
     star rating, review text) + 4 stat counters (Happy Client 2536,
     Total Projects 7562, Cups Coffee 2013, Total Submitted 10536).
  7. Blog (`blog-area`): same title, 2 blog cards (image, tag links,
     title, excerpt, date).
  8. Footer (`footer-area`): 3-column — About Us + Newsletter form (email
     input + submit) + Social links (Facebook, Twitter); Component Dock
     attribution at bottom.
- **Design tokens extracted from `css/main.css`:**
  - Brand color: **#b68834** (warm gold/amber) — buttons, accents, footer links.
  - Brand dark: **#9a7230** (hover state).
  - Backgrounds: **#ffffff** (white), **#f9f9ff** (light section bg).
  - Text: **#222222** (dark headings), **#777777** (muted body).
  - Font: **Poppins** (300-700 weights) via Google Fonts.
  - Buttons: pill shape (border-radius: 25px), gold background, white text.
  - Footer: dark background image, white text, gold accents.
- **Recreation decisions:** Header with hours bar + navbar + mobile toggle;
  hero with seeded picsum background and gold CTA; about/video section with
  play button overlay; menu grid with 9 coffee items; gallery with 5 seeded
  images in asymmetric grid; reviews with star ratings and stat counters;
  blog cards with tags; footer with newsletter form, social links (inline
  SVGs for brand icons), and Component Dock attribution; all images
  picsum-seeded (`picsum.photos/seed/perk-N/w/h`); Google Fonts via
  `<link>`.

Perk lives in `apps/perk` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Header

The system SHALL render a header with a top bar showing business hours
and a phone number, plus a navbar with the site name "Perk" and
navigation links.

#### Scenario: Top bar content

- **GIVEN** the Perk page is rendered
- **WHEN** the header is displayed
- **THEN** the top bar SHALL show "Mon-Fri: 8am to 2pm" and "Sat-Sun: 11am to 4pm"
- **AND** it SHALL show a phone number "(012) 6985 236 7512"

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Perk"
- **AND** it SHALL show navigation links for Home, About, Coffee, Review, and Blog

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the menu toggle button
- **THEN** the mobile navigation menu SHALL open
- **AND** tapping the toggle again SHALL close the menu

### Requirement: Hero

The system SHALL render a full-width hero banner with a background
image, a level-1 headline, and a "Buy Now" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline "Start your day with a black Coffee"
- **AND** it SHALL show the subtitle "Now you can feel the Energy"
- **AND** it SHALL show a "Buy Now" link pointing to "#coffee"

### Requirement: About/Video section

The system SHALL render a two-column about section with a video
thumbnail and text content.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the subtitle "Live Coffee making process"
- **AND** it SHALL show the heading "We Telecast our Coffee Making Live"
- **AND** it SHALL show a play button for the video

### Requirement: Menu

The system SHALL render a coffee menu section with a centered title
and a grid of at least nine menu items.

#### Scenario: Menu items

- **GIVEN** the page is rendered
- **WHEN** the menu section is displayed
- **THEN** it SHALL show the title "What kind of Coffee we serve for you"
- **AND** it SHALL render 9 menu items: Cappuccino, Americano, Espresso,
  Macchiato, Mocha, Coffee Latte, Piccolo Latte, Ristretto, Affogato
- **AND** each item SHALL show a name, price, and description

### Requirement: Gallery

The system SHALL render a photo gallery section with at least five
images in an asymmetric grid.

#### Scenario: Gallery images

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL render 5 gallery images with alt text "Coffee gallery"

### Requirement: Reviews

The system SHALL render a reviews section with reviewer cards and
stat counters.

#### Scenario: Review cards

- **GIVEN** the page is rendered
- **WHEN** the reviews section is displayed
- **THEN** it SHALL show 2 reviewer cards with names and star ratings
- **AND** it SHALL show 4 stat counters (Happy Client, Total Projects,
  Cups Coffee, Total Submitted)

### Requirement: Blog

The system SHALL render a blog section with at least two blog cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 2 blog cards with titles, excerpts, dates, and tags

### Requirement: Footer

The system SHALL render a dark footer with About Us, Newsletter, and
Follow Us sections, plus a Component Dock attribution.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" section
- **AND** it SHALL show a Newsletter form with email input
- **AND** it SHALL show social links (Facebook, Twitter)
- **AND** it SHALL show "Made with Component Dock" linking to
  https://www.componentdock.com/

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Perk app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark,
  all sections in the main landmark, and the Footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Perk — Coffee Shop Template"
