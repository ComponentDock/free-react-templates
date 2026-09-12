# Template: Silverleaf (Senior Care Landing)

## Purpose

Silverleaf is a single-page senior care and elderly living template. It is an
original React recreation of the ColorLib free "Elderly" template
(preview: https://preview.colorlib.com/theme/elderly/ — elderly care landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand blue `#3c90f7` (buttons, active states, counter bg, CTA sections)
- Typeface: Open Sans (body) + Playfair Display (headings) via Google Fonts
- Pill buttons with 30px border-radius, uppercase text
- Light section bg `#f8f9fa`, hero overlay `rgba(0,0,0,0.2)`
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons
- Social brand icons as inline SVGs (brand icons removed from lucide-react)

Silverleaf lives in `apps/silverleaf` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a navbar with the site name "Silverleaf", section links
(Home, Services, Testimonials, Blog, About, Contact), social icons, and a
hamburger toggle that opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered on a desktop viewport
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Silverleaf" with a blue accent period
- **AND** it SHALL show links to Home, Services, Testimonials, Blog, About, Contact
- **AND** it SHALL show social icon links for Facebook, Twitter, and LinkedIn

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** a mobile navigation menu SHALL appear with all nav links
- **AND** the button label SHALL change to "Close menu"

#### Scenario: Sticky header on scroll

- **GIVEN** the page is scrolled past 60px
- **WHEN** the scroll event fires
- **THEN** the header SHALL have a white background and shadow

### Requirement: Hero section

The system SHALL render a full-viewport hero section with a background image,
dark overlay, heading "Expert Care for the Elderly", descriptive text, and a
primary pill CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display the heading "Expert Care for the Elderly"
- **AND** it SHALL display a descriptive paragraph about care services
- **AND** it SHALL display a "Get In Touch" pill button linking to #contact
- **AND** it SHALL have a minimum height of 760px

### Requirement: Feature strip

The system SHALL render a 3-column feature strip on a light background with
icons, subheadings, headings, and "Learn More" links.

#### Scenario: Three features

- **GIVEN** the page is rendered
- **WHEN** the feature strip section is visible
- **THEN** it SHALL display 3 feature items: Independent Living, Senior Care, Patient Care
- **AND** each item SHALL show "Try Our Services" subheading and a "Learn More" link

### Requirement: Services grid

The system SHALL render a 4-column grid of service cards with square images,
titles, and descriptions.

#### Scenario: Four service cards

- **GIVEN** the page is rendered
- **WHEN** the services grid section is visible
- **THEN** it SHALL display 4 service cards with images and "Special Care" titles
- **AND** each card SHALL have a description paragraph

### Requirement: Statistics counter

The system SHALL render a full-width counter section with a brand blue background
and 4 statistics: Rooms Available, Nurse Staff, Senior Living, Happy People.

#### Scenario: Counter stats

- **GIVEN** the page is rendered
- **WHEN** the counter section is visible
- **THEN** it SHALL display 4 statistics with large numbers and labels

### Requirement: About / Why Us section

The system SHALL render a split about section with heading, description,
checklist with blue checkmarks, and a media card with blue text overlay.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL display the heading "Senior Care Center is for Your Family"
- **AND** it SHALL show a checklist with 3 items and blue checkmarks
- **AND** it SHALL display a media card with "You can live here with love" text

### Requirement: Cover / Goals section

The system SHALL render a full-width background image section with overlay,
heading, and 3 circle-icon feature items.

#### Scenario: Goals display

- **GIVEN** the page is rendered
- **WHEN** the cover section is visible
- **THEN** it SHALL display "Our Goal is to Make Your Life Better" heading
- **AND** it SHALL show 3 feature items: Expert Nursing Staff, Community Living, Medical Support

### Requirement: Testimonials

The system SHALL render 3 testimonial cards on a light background with circular
avatars, italic quotes, and author citations.

#### Scenario: Testimonial cards

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is visible
- **THEN** it SHALL display 3 testimonial cards with quotes and author names

### Requirement: Opportunities section

The system SHALL render 2 media cards with blue text panels and background images.

#### Scenario: Opportunity cards

- **GIVEN** the page is rendered
- **WHEN** the opportunities section is visible
- **THEN** it SHALL display 2 cards: "Join Our Community" and "Volunteer With Us"
- **AND** each card SHALL have a "Learn More" outline-white button

### Requirement: About CTA section

The system SHALL render a brand blue background section with illustration,
heading, blockquote, and white CTA button.

#### Scenario: CTA display

- **GIVEN** the page is rendered
- **WHEN** the about CTA section is visible
- **THEN** it SHALL display "Senior & Elder Home Care Center" heading
- **AND** it SHALL show a blockquote "We care for elderly people"
- **AND** it SHALL have a "Learn More" white button

### Requirement: Blog / News section

The system SHALL render 3 blog cards with cover images, meta bars with blue
icons, titles, and excerpts.

#### Scenario: Blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL display 3 blog cards with meta information (date, author, comments)

### Requirement: Footer

The system SHALL render a light gray footer with 4 columns (About, Quick Links,
Helpful Links, Resources), social icons, and copyright with Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL display 4 columns of links
- **AND** it SHALL show social icons for Facebook, Twitter, Instagram, LinkedIn
- **AND** it SHALL display a "More templates at Component Dock" link to https://www.componentdock.com/

### Requirement: Design tokens fidelity

The system SHALL use design tokens matching the original ColorLib Elderly template.

#### Scenario: Brand colors and fonts

- **GIVEN** the template is built
- **WHEN** design tokens are applied
- **THEN** brand color SHALL be #3c90f7
- **AND** body font SHALL be Open Sans
- **AND** heading font SHALL be Playfair Display
- **AND** buttons SHALL use pill shape (rounded-full)
