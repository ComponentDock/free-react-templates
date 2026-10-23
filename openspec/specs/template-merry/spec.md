# Template: Merry (Carousel 07)

## Purpose

A modern interactive multi-item carousel and card showcase template with hero, carousel, features, newsletter, and footer sections. Recreate the ColorLib Carousel 07 template (`https://colorlib.com/wp/template/carousel-07/`) as `merry`.

## Requirements

### Requirement 1: Navigation Bar

The template SHALL display a navigation bar with brand logo/title ("Merry") and navigation links (Home, Features, Showcase, Contact) plus a "Get Started" CTA button and dark mode toggle.

#### Scenario: Navigation bar renders correctly

- **WHEN** the user views the page
- **THEN** the navigation bar displays "Merry" brand text, Home/Features/Showcase/Contact links, and a "Get Started" button

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the "Dark mode" button
- **THEN** the document root receives the "dark" class and the button text changes to "Light mode"

### Requirement 2: Hero Section

The template SHALL display a hero section with an engaging heading, subtitle, and primary CTA button.

#### Scenario: Hero section renders content

- **WHEN** the user views the page
- **THEN** a heading, description text, and "Explore Showcase" CTA link are visible

### Requirement 3: Interactive Carousel Section

The template SHALL display a multi-item card carousel with left/right arrow navigation and pagination dots.

#### Scenario: Carousel displays initial slide

- **WHEN** the page loads
- **THEN** the first carousel item "Modern Architecture Showcase" is displayed

#### Scenario: Forward navigation

- **WHEN** the user clicks the "Next slide" button
- **THEN** the carousel advances to the next item

#### Scenario: Backward navigation wraps around

- **WHEN** the user is on the first slide and clicks "Previous slide"
- **THEN** the carousel wraps to the last item

#### Scenario: Dot navigation

- **WHEN** the user clicks a pagination dot
- **THEN** the carousel displays the corresponding item

### Requirement 4: Features Grid

The template SHALL display a grid of feature cards with icons, titles, and descriptions.

#### Scenario: Features section renders all cards

- **WHEN** the user scrolls to the features section
- **THEN** four feature cards are displayed with titles "Multi-Item Display", "Smooth Transitions", "Accessible by Default", and "Community Driven"

### Requirement 5: Newsletter Subscription

The template SHALL display an email subscription form with validation and success state.

#### Scenario: Newsletter form renders

- **WHEN** the user views the newsletter section
- **THEN** an email input and "Subscribe" button are visible

#### Scenario: Empty email shows error

- **WHEN** the user clicks "Subscribe" without entering an email
- **THEN** an error message "Please enter your email address" is displayed

#### Scenario: Invalid email shows error

- **WHEN** the user enters an invalid email and clicks "Subscribe"
- **THEN** an error message "Please enter a valid email address" is displayed

#### Scenario: Valid email shows success

- **WHEN** the user enters a valid email and clicks "Subscribe"
- **THEN** a success confirmation message is displayed

### Requirement 6: Footer

The template SHALL display a footer with links, copyright notice, and a link to Component Dock.

#### Scenario: Footer renders copyright and Component Dock link

- **WHEN** the user views the footer
- **THEN** a copyright notice with the current year and a "Component Dock" link to https://www.componentdock.com/ are displayed

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/merry/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/merry/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navigation Bar — the navigation bar displays "Merry" brand text, Home/Features/Showcase/Contact links, and a "Get Started" button
- [ ] Hero Section — a heading, description text, and "Explore Showcase" CTA link are visible
- [ ] Interactive Carousel Section — the first carousel item "Modern Architecture Showcase" is displayed
- [ ] Features Grid — four feature cards are displayed with titles "Multi-Item Display", "Smooth Transitions", "Accessible by Default", and "Community Driven"
- [ ] Newsletter Subscription — an email input and "Subscribe" button are visible
