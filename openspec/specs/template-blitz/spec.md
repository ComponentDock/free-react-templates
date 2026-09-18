# Spec: Blitz

Recreation of ColorLib Rango (https://colorlib.com/wp/template/rango/).

## Purpose

Blitz is a creative agency landing page template featuring a fixed navbar, hero slider section, icon boxes, about/features section with vertical content blocks, services carousel, features grid, call-to-action banner, text line section, newsletter form, and multi-column footer.

## Requirements

### Requirement: Navigation bar

Blitz SHALL display a fixed navigation bar with the logo "Blitz" (stressed "z" in accent color), desktop navigation links (Home, About Us, Services, Portfolio, Blog, Contact), a search toggle, and a hamburger menu for mobile viewports.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** all navigation links are visible in the header
- **AND** the logo links to #home

#### Scenario: Search toggle

- **WHEN** the user clicks the search toggle button
- **THEN** a search input field appears in the navigation

#### Scenario: Mobile menu

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** a dropdown menu with all navigation links appears
- **AND** clicking a link closes the menu

### Requirement: Hero section

Blitz SHALL display a full-width hero section with a background image, overlay, headline "Modern design easy to use", subtitle text, and a "Discover More" CTA button.

#### Scenario: Hero content

- **WHEN** the hero section is rendered
- **THEN** the headline "Modern design easy to use" is displayed
- **AND** a CTA button links to the services section

#### Scenario: Navigation arrows

- **WHEN** the hero section is rendered
- **THEN** previous/next slide buttons are displayed
- **AND** a scroll-down indicator links to the icon boxes section

### Requirement: Icon boxes section

Blitz SHALL display a three-column icon boxes section with a heading, CTA, and four feature cards (Great team, Modern Design, Online Marketing, Easy to use).

#### Scenario: Feature cards

- **WHEN** the icon boxes section is rendered
- **THEN** all four feature items with icons, titles, and descriptions are visible

### Requirement: About section

Blitz SHALL display an about section on a dark purple background with an image on the left and three feature blocks on the right, each containing a heading, description, and person card.

#### Scenario: About content

- **WHEN** the about section is rendered
- **THEN** three feature blocks with headings and person info (Michael Smith, Manager) are visible

### Requirement: Services section

Blitz SHALL display a services section with a grid of service cards, each containing an icon, title, description, and "Discover More" link.

#### Scenario: Service cards

- **WHEN** the services section is rendered
- **THEN** at least 7 service cards are displayed with unique icons and titles

### Requirement: Features section

Blitz SHALL display a features section with a three-column layout: left features, center image with CTA, and right features.

#### Scenario: Feature items

- **WHEN** the features section is rendered
- **THEN** four feature items (Responsive, Clean code, Retina ready, Great team) are visible

### Requirement: Call to action section

Blitz SHALL display a CTA section with a background image, overlay, headline "We love our customers", description text, and a person image.

#### Scenario: CTA content

- **WHEN** the CTA section is rendered
- **THEN** the headline and description are displayed

### Requirement: Text line section

Blitz SHALL display a text line section with an image and "We integrate the future" headline with description and CTA button.

#### Scenario: Text line content

- **WHEN** the text line section is rendered
- **THEN** the headline and CTA button are visible

### Requirement: Newsletter section

Blitz SHALL display a newsletter section with a dark background, heading "Subscribe to our newsletter", email input, and subscribe button.

#### Scenario: Newsletter form

- **WHEN** the newsletter section is rendered
- **THEN** an email input and subscribe button are present
- **AND** the form handles submission

### Requirement: Footer

Blitz SHALL display a footer with the brand logo, social icons (Pinterest, Facebook, Twitter, Dribbble, LinkedIn), link columns (Services, Menu, About), and a copyright bar linking to Component Dock.

#### Scenario: Footer links

- **WHEN** the footer is rendered
- **THEN** a link to https://www.componentdock.com/ is present with target="_blank"

#### Scenario: Social icons

- **WHEN** the footer is rendered
- **THEN** social media icons for Pinterest, Facebook, Twitter, Dribbble, and LinkedIn are visible

#### Scenario: Copyright

- **WHEN** the footer is rendered
- **THEN** the copyright notice includes the current year
