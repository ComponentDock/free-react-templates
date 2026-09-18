# Spec: Exposely — Photography Portfolio Template

> Recreation of ColorLib "Sonar" (https://colorlib.com/wp/template/sonar/)
> Preview: https://preview.colorlib.com/theme/sonar/

## Purpose

A dark, elegant photography portfolio template with a full-screen hero,
asymmetric gallery grid, and call-to-action section. Designed for
photographers and visual artists.

## Requirements

### Requirement: Navbar renders fixed header with logo and social links

The navbar SHALL render as a fixed-position header with the logo "Exposely" on the left, five social icon links (Pinterest, LinkedIn, Instagram, Facebook, Twitter) on the right, and a hamburger menu button.

#### Scenario: Logo renders as "Exposely"

- **WHEN** the Navbar is rendered
- **THEN** a link with text "Exposely" is visible

#### Scenario: Social icon links are present

- **WHEN** the Navbar is rendered
- **THEN** the social navigation contains exactly 5 links

#### Scenario: Hamburger button toggles side menu open/closed

- **WHEN** the user clicks the hamburger button
- **THEN** the side menu navigation appears
- **WHEN** the user clicks the close button in the side menu
- **THEN** the side menu navigation disappears

#### Scenario: Side menu shows navigation links

- **WHEN** the side menu is open
- **THEN** links for Home, About, Services, Portfolio, Blog, and Contact are visible

#### Scenario: Side menu closes when overlay is clicked

- **WHEN** the side menu is open and the user clicks the overlay
- **THEN** the side menu navigation disappears

#### Scenario: Side menu closes when a nav link is clicked

- **WHEN** the side menu is open and the user clicks a navigation link
- **THEN** the side menu navigation disappears

### Requirement: Hero section renders full-screen with background image

The hero section SHALL render as a full-viewport-height section with a background image, dark gradient overlay, decorative divider line, title "Golden Hour", and a description paragraph.

#### Scenario: Hero section renders with full-screen height

- **WHEN** the Hero is rendered
- **THEN** the section has min-h-screen class

#### Scenario: Hero displays title "Golden Hour"

- **WHEN** the Hero is rendered
- **THEN** an h2 heading with text "Golden Hour" is visible

#### Scenario: Hero displays description paragraph

- **WHEN** the Hero is rendered
- **THEN** a paragraph containing "Capturing the warmth" is visible

#### Scenario: Background image is applied

- **WHEN** the Hero is rendered
- **THEN** a background image container with picsum.photos URL exists

### Requirement: Gallery renders portfolio grid with 7 items

The gallery section SHALL render a photography quote at the top, followed by an asymmetric grid of 7 portfolio items, each with a thumbnail image, date, and title. Some items have decorative large background text.

#### Scenario: Gallery renders 7 portfolio items

- **WHEN** the Gallery is rendered
- **THEN** the portfolio list contains exactly 7 list items

#### Scenario: Each item displays a date and title

- **WHEN** the Gallery is rendered
- **THEN** headings for "Reality", "Light & Shadow", "Urban Stories", and "Horizons" are visible

#### Scenario: Quote text is displayed at top

- **WHEN** the Gallery is rendered
- **THEN** a paragraph containing "In photography there is a reality" is visible

#### Scenario: Images use picsum.photos placeholders

- **WHEN** the Gallery is rendered
- **THEN** all images have src attributes containing "picsum.photos"

### Requirement: CTA section renders call to action with decorative text

The CTA section SHALL render a large decorative background text "Dream", a heading "I am an experienced photographer", a subheading "Let's talk", and a contact button.

#### Scenario: CTA renders with heading

- **WHEN** the CTA is rendered
- **THEN** an h2 heading with text "I am an experienced photographer" is visible

#### Scenario: CTA displays subheading

- **WHEN** the CTA is rendered
- **THEN** an h5 heading with text "Let's talk" is visible

#### Scenario: Contact button is present and links correctly

- **WHEN** the CTA is rendered
- **THEN** a link with text "Contact me" pointing to "#contact" is visible

### Requirement: Footer displays copyright with Component Dock branding

The footer SHALL display a copyright notice with the current year, "All rights reserved", and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer displays copyright with current year

- **WHEN** the Footer is rendered
- **THEN** text containing the current year is visible

#### Scenario: Footer contains Component Dock link

- **WHEN** the Footer is rendered
- **THEN** a link to https://www.componentdock.com/ with text "Component Dock" is visible

### Requirement: App composes all sections in correct order

The App component SHALL compose Navbar, Hero, Gallery, CTA, and Footer in that order and set the page title.

#### Scenario: All sections render in correct order

- **WHEN** the App is rendered
- **THEN** the banner, hero region, and contentinfo footer are all present

#### Scenario: Page title is set

- **WHEN** the App is rendered
- **THEN** the document title is "Exposely — Photography Portfolio Template"
