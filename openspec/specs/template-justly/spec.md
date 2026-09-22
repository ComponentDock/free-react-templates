# Template: Justly (Fitness Trainer Landing)

## Purpose

Justly is a single-page fitness trainer landing template — a React recreation of
the ColorLib free "Zacson" template
(preview: https://preview.colorlib.com/theme/zacson/ — gym trainer personal site),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand red `#FF0000` (primary accent — buttons, highlights)
- Dark background `#000` (hero, footer, training categories)
- Heading font: Oswald (Google Fonts)
- Body font: Roboto Condensed (Google Fonts)
- Outline/border buttons with uppercase text and wide letter-spacing
- White text on dark backgrounds
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Justly lives in `apps/justly` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navbar with the site name "Justly", section links
(Home, About, Courses, Pricing, Gallery, Contact), and a "Contact" CTA button.
A hamburger toggle opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Justly" linking to `#home`
- **AND** it SHALL show links to Home, About, Courses, Pricing, Gallery, Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the hamburger icon is clicked
- **THEN** a dropdown menu SHALL appear with the same navigation links

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
greeting text ("Hi, I'm Justly"), heading ("Fitness Coach"), and a "My Courses"
outline button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display "Hi, I'm Justly" as a subtitle
- **AND** "Fitness Coach" as the main heading
- **AND** a "My Courses" outline button linking to #courses

### Requirement: Training categories

The system SHALL display two training category cards in a two-column grid
(Personal Training, Group Training), each with an image, title, description,
and a CTA button.

#### Scenario: Two categories

- **GIVEN** the page is rendered
- **WHEN** the training categories section is visible
- **THEN** it SHALL show exactly two category cards
- **AND** each card SHALL have an image, title, description, and button

### Requirement: Services (What I Offer)

The system SHALL display three service cards in a row (Body Building, Muscle Gain,
Weight Loss), each with an image, title, and short description.

#### Scenario: Three services

- **GIVEN** the page is rendered
- **WHEN** the services section is visible
- **THEN** it SHALL show exactly three service cards
- **AND** each card SHALL have an image, title, and description

### Requirement: Gallery

The system SHALL display a grid of 6 gallery images with hover overlays showing
a title and an icon.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is visible
- **THEN** it SHALL show exactly 6 gallery items
- **AND** each item SHALL display an overlay with title on hover

### Requirement: Pricing

The system SHALL display three pricing cards, each with a plan duration, price,
a list of features with checkmarks, and a "Join Now" button.

#### Scenario: Three pricing tiers

- **GIVEN** the page is rendered
- **WHEN** the pricing section is visible
- **THEN** it SHALL show exactly three pricing cards
- **AND** each card SHALL list 5 features with check icons
- **AND** each card SHALL have a "Join Now" button

### Requirement: About section

The system SHALL render a split-layout About section with text on one side
and an image on the other, including a "My Courses" CTA button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL show "About Me" heading
- **AND** descriptive text
- **AND** a "My Courses" button

### Requirement: Blog section

The system SHALL display two blog post cards, each with an image, category
tag, and title.

#### Scenario: Two blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL show exactly two blog post cards
- **AND** each card SHALL have an image, category, and title

### Requirement: Video section

The system SHALL render a full-width video teaser section with a background
image and a play button overlay.

#### Scenario: Video play button

- **GIVEN** the page is rendered
- **WHEN** the video section is visible
- **THEN** it SHALL show a play button icon centered on a background image

### Requirement: Contact info

The system SHALL display three contact info cards in a row (Location, Phone,
Email), each with an icon, title, and details.

#### Scenario: Three contact cards

- **GIVEN** the page is rendered
- **WHEN** the contact info section is visible
- **THEN** it SHALL show exactly three contact cards
- **AND** each card SHALL have an icon, title, and detail text

### Requirement: Footer

The system SHALL render a dark footer with the site logo, navigation links,
social media icons (Twitter, Facebook, Instagram), and a Component Dock
attribution link.

#### Scenario: Footer links

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL show navigation links matching the navbar
- **AND** social media icon links
- **AND** a "More templates at Component Dock" link to
  `https://www.componentdock.com/`
