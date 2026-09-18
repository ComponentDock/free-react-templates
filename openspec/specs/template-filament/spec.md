# Template: Filament (Feminine Landing Page)

## Purpose

Filament is a single-page feminine landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Simples" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a feminine aesthetic page with soft pink/lavender palette:
a full-screen gradient hero ("Brand new Simples"), feature icons, core
feature sections with carousel and image, process steps on gradient,
service carousel on dark overlay, newsletter subscription, contact form
with map, and a black footer with navigation columns and social icons.
Filament recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

- **Source:** ColorLib "Simples" — https://colorlib.com/wp/template/simples/
- **Preview:** https://preview.colorlib.com/theme/simples/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/simples-free-fullscreen-feminine-website-template.jpg
- **New name:** `filament` (apps/filament, package `@free-react-templates/filament`)
- **Deploy URL:** https://filament.free.componentdock.com

## Design reference (replication findings)

- **Original:** ColorLib "Simples" — free feminine landing page website template.
- **Section order (1:1):**
  1. Header: Logo "Filament" + nav links (Home, Generic, Elements). Absolutely positioned over hero.
  2. Hero Banner: Full-screen gradient overlay (#f6d0c5 → #fbd2f6). Large white h1 "Brand new Filament" with text-shadow. Subtitle. "Explore Now" pill button.
  3. Features: 4-column grid — Easy Installation, Multiple Layouts, Free Updates, Fully Responsive. Lavender-pink icons.
  4. Core Feature Carousel: Light bg (#f9f9ff). Left text + right image carousel with prev/next.
  5. Core Feature Image: Left tall image + right text with "Learn More" CTA.
  6. Process Steps: Gradient background. 6 steps — Brainstorm, Discuss Ideas, Projections, Strategies, Seo Target, Awards.
  7. Service Carousel: Dark overlay background. Image + text slides with prev/next.
  8. Newsletter: Light bg. Email input + "Get Started" pill button.
  9. Contact: Map placeholder + form (name, email, textarea, send button).
  10. Footer: Black bg. 5 columns (Top Products, Company, Support, Projects, Quick Contact). Social icons. "Made with Component Dock" link.
- **Design tokens:**
  - Brand: `#fcd2ff` (lavender-pink), gradient `#f6d0c5` → `#fbd2f6`
  - Text: `#222` headings, `#777` body
  - Bg: `#f9f9ff` light, `#000` footer, `#1e1e1e` social icons
  - Font: Poppins (weights 200–600)
  - Buttons: pill shape (border-radius 20px), uppercase, weight 500

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Filament"
and navigation links for "Home", "Generic", and "Elements". The navbar
SHALL be positioned absolutely over the hero banner.

#### Scenario: Navbar content

- **GIVEN** the Filament page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Filament"
- **AND** navigation links for "Home", "Generic", and "Elements" SHALL be present
- **AND** the navbar SHALL be a banner landmark

### Requirement: Hero banner

The system SHALL render a full-screen hero banner with a gradient overlay
(salmon-peach to soft-pink), a heading, subtitle, and CTA button.

#### Scenario: Hero content

- **GIVEN** the Filament page is rendered
- **WHEN** the hero banner is displayed
- **THEN** the heading "Brand new Filament" SHALL be visible
- **AND** a subtitle paragraph SHALL be present
- **AND** an "Explore Now" pill-shaped button SHALL be rendered

#### Scenario: Hero gradient

- **GIVEN** the Filament page is rendered
- **WHEN** the hero banner is displayed
- **THEN** the banner SHALL have a gradient overlay from #f6d0c5 to #fbd2f6

### Requirement: Features section

The system SHALL render four feature cards in a responsive grid with
lavender-pink icons and uppercase labels.

#### Scenario: Feature cards

- **GIVEN** the Filament page is rendered
- **WHEN** the features section is displayed
- **THEN** four feature cards SHALL be visible
- **AND** the features SHALL be: "Easy Installation", "Multiple Layouts", "Free Updates", "Fully Responsive"

### Requirement: Core Feature Carousel

The system SHALL render a core feature section with text on the left and
an image carousel on the right, with prev/next navigation.

#### Scenario: Carousel navigation

- **GIVEN** the Filament page is rendered
- **WHEN** the user clicks the next button
- **THEN** the carousel SHALL advance to the next slide
- **AND** the previous button SHALL navigate back

#### Scenario: Carousel wrap-around

- **GIVEN** the carousel is on the last slide
- **WHEN** the user clicks next
- **THEN** the carousel SHALL wrap to the first slide

### Requirement: Core Feature Image section

The system SHALL render a section with a large image on the left and
descriptive text with a "Learn More" CTA on the right.

#### Scenario: Image section content

- **GIVEN** the Filament page is rendered
- **WHEN** the core feature image section is displayed
- **THEN** a feature image SHALL be visible
- **AND** a "Learn More" link SHALL be present

### Requirement: Process Steps

The system SHALL render six process steps on a gradient background with
white icons and uppercase labels.

#### Scenario: Process steps content

- **GIVEN** the Filament page is rendered
- **WHEN** the process steps section is displayed
- **THEN** six steps SHALL be visible: "Brainstorm", "Discuss Ideas", "Projections", "Strategies", "Seo Target", "Awards"

### Requirement: Service Carousel

The system SHALL render a service carousel with dark overlay background,
displaying service items with image, title, description, and navigation.

#### Scenario: Service carousel navigation

- **GIVEN** the Filament page is rendered
- **WHEN** the user clicks the next button
- **THEN** the service carousel SHALL advance to the next service

#### Scenario: Service carousel wrap-around

- **GIVEN** the service carousel is on the last item
- **WHEN** the user clicks next
- **THEN** the carousel SHALL wrap to the first service

### Requirement: Newsletter section

The system SHALL render a newsletter subscription section with email input
and "Get Started" button.

#### Scenario: Newsletter form

- **GIVEN** the Filament page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** an email input field SHALL be present
- **AND** a "Get Started" button SHALL be rendered

### Requirement: Contact section

The system SHALL render a contact section with a map placeholder and
a contact form with name, email, and message fields.

#### Scenario: Contact form

- **GIVEN** the Filament page is rendered
- **WHEN** the contact section is displayed
- **THEN** a name input, email input, and message textarea SHALL be present
- **AND** a "Send Message" button SHALL be rendered
- **AND** a map placeholder area SHALL be visible

### Requirement: Footer

The system SHALL render a black footer with navigation columns, Quick
Contact info, social media icons, and a "Made with Component Dock" link.

#### Scenario: Footer content

- **GIVEN** the Filament page is rendered
- **WHEN** the footer is displayed
- **THEN** four navigation columns SHALL render: "Top Products", "Company", "Support", "Projects"
- **AND** a "Quick Contact" column SHALL show phone and email
- **AND** social media icons for Facebook, Twitter, Dribbble, Behance SHALL be present
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/ SHALL be present

#### Scenario: Footer landmark

- **GIVEN** the Filament page is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL be a contentinfo landmark

### Requirement: App composition

The system SHALL compose all sections within a main landmark, set the
document title, and support dark mode.

#### Scenario: App structure

- **GIVEN** the Filament page is rendered
- **WHEN** the page loads
- **THEN** the document title SHALL be "Filament — Feminine Landing Page"
- **AND** a banner landmark SHALL be present (navbar)
- **AND** a main landmark SHALL contain all content sections
- **AND** a contentinfo landmark SHALL be present (footer)
