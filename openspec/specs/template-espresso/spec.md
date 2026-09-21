# Template: Espresso (Coffee Shop Landing)

## Purpose

Espresso is a single-page coffee-shop landing template — a faithful React
recreation of the ColorLib free "Coffee" template
(preview: https://preview.colorlib.com/theme/coffee/ — coffee shop landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand gold/brown `#b68834` (primary buttons, accent), dark backgrounds
  `#191919` / `#222` (banner, footer), white content areas
- Typeface: Poppins (Google Fonts via `<link>`)
- Primary button: gold `#b68834` background, white text, pill shape
  (`border-radius: 25px`), asymmetric padding (30px left / 60px right)
- Section backgrounds: banner = dark photo (`header-bg.jpg`), video section
  = white, menu/gallery/review/blog = white (`#fff`), footer = dark photo
  (`footer-bg.jpg`) with white text
- Counter section: dark background, four stat blocks (Happy Client 2536,
  Total Projects 7562, Cups Coffee 2013, Total Submitted 10536)
- Gallery: asymmetric grid (col-4 + col-8 with nested row), lightbox via
  GLightbox
- Reviews: two-column with reviewer avatar, star rating, testimonial text
- Blog: two-column cards with image, tags, title, excerpt, date

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

Espresso lives in `apps/espresso` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navbar with the site name "Espresso", section links
(Home, About, Coffee, Review, Blog), and a hamburger toggle that opens a
mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Espresso" linking to `#home`
- **AND** it SHALL show links to Home, About, Coffee, Review and Blog

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible and the toggle SHALL report
  `aria-expanded="true"`
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero / Banner section

The system SHALL render a full-screen hero with a dark coffee-themed
background image, a tagline "Now you can feel the Energy", a headline
"Start your day with a black Coffee", and a gold pill "Buy Now" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the tagline "Now you can feel the Energy"
- **AND** it SHALL show the headline "Start your day with a black Coffee"
- **AND** it SHALL show a "Buy Now" button linking to `#`

#### Scenario: Hero background

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL have a dark background image covering the full viewport
  height with text aligned left

### Requirement: Video / About section

The system SHALL render a section with a video placeholder (play icon overlay
on an image), a headline "Live Coffee making process.", a sub-headline
"We Telecast our Coffee Making Live", a descriptive paragraph, and a
signature image.

#### Scenario: Video section content

- **GIVEN** the page is rendered
- **WHEN** the video/about section is displayed
- **THEN** it SHALL show a video placeholder with play icon
- **AND** it SHALL show the headline and descriptive paragraph
- **AND** it SHALL show a signature image

### Requirement: Menu section

The system SHALL render a "What kind of Coffee we serve for you" menu
section with a subtitle and 8 coffee items in a 3-column grid. Each item
shows a coffee name, price ($49), and a description.

#### Scenario: Menu items

- **GIVEN** the page is rendered
- **WHEN** the menu section is displayed
- **THEN** it SHALL show the heading "What kind of Coffee we serve for you"
- **AND** it SHALL show 8 items: Cappuccino, Americano, Espresso, Macchiato,
  Mocha, Coffee Latte, Piccolo Latte, Ristretto
- **AND** each item SHALL display a name, price, and description

### Requirement: Gallery section

The system SHALL render a photo gallery with a heading, subtitle, and an
asymmetric image grid (5 images) with lightbox support.

#### Scenario: Gallery images

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "What kind of Coffee we serve for you"
- **AND** it SHALL display 5 gallery images in an asymmetric grid layout
- **AND** clicking an image SHALL open a lightbox viewer

### Requirement: Review section

The system SHALL render a testimonials section with a heading, subtitle, and
2 review cards. Each card shows a reviewer avatar, name, star rating (out of
5), and testimonial text. Below the reviews, a counter row shows 4 stats.

#### Scenario: Review cards

- **GIVEN** the page is rendered
- **WHEN** the review section is displayed
- **THEN** it SHALL show 2 review cards with avatar, name, stars, and text
- **AND** each card SHALL display a star rating

#### Scenario: Counter stats

- **GIVEN** the page is rendered
- **WHEN** the counter row is displayed
- **THEN** it SHALL show 4 stats: Happy Client (2536), Total Projects (7562),
  Cups Coffee (2013), Total Submitted (10536)

### Requirement: Blog section

The system SHALL render a blog section with a heading, subtitle, and 2 blog
post cards. Each card shows an image, tag pills, title, excerpt, and date.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 2 blog cards, each with an image, tags, title,
  excerpt, and publication date
- **AND** each card SHALL have "Travel" and "Life Style" tags

### Requirement: Footer

The system SHALL render a dark footer with a background image, three columns
(About Us with description and copyright, Newsletter with email input and
submit button, Follow Us with social icons), and white text on dark
background.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" section with description
- **AND** it SHALL show a "Newsletter" section with email input and submit
- **AND** it SHALL show social media icons (Facebook, Twitter, Dribbble, Behance)
- **AND** it SHALL include a copyright line and a link to Component Dock

#### Scenario: Footer background

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have a dark background image with white text

## Verification checklist

- [ ] Navbar renders with correct links and hamburger toggle
- [ ] Hero section has dark background, headline, tagline, and gold CTA
- [ ] Video/About section has video placeholder and signature
- [ ] Menu section shows 8 coffee items with prices in 3-column grid
- [ ] Gallery shows 5 images in asymmetric grid with lightbox
- [ ] Review section shows 2 testimonial cards with star ratings
- [ ] Counter row shows 4 stats
- [ ] Blog section shows 2 post cards with tags, title, excerpt, date
- [ ] Footer has 3 columns, newsletter form, social icons, copyright
- [ ] Footer links to Component Dock
- [ ] All sections match the original section order 1:1
- [ ] Design tokens (gold #b68834, Poppins font, pill buttons) match
- [ ] No ColorLib references in app code
- [ ] Responsive on mobile (hamburger menu, stacking columns)
- [ ] Accessibility: semantic HTML, aria-labels, focus-visible rings
