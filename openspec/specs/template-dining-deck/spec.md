# DiningDeck — Restaurant Landing Template

Recreation of ColorLib "Wordpress Restaurant Themes" (Jevelin restaurant demo):
https://colorlib.com/wp/template/wordpress-restaurant-themes/

Preview screenshot:
https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-restaurant-website-template.jpg

## Purpose

A premium restaurant landing page with a dark hero overlay, teal accents, cursive branding, and warm culinary aesthetic. Sections include navbar, hero, about, stats, features, reservation/contact, and footer.

## Requirements

### Requirement: Navbar with cursive branding

The page SHALL display a fixed navigation bar with the "DiningDeck" logo in cursive font and links to Home, About Us, Menu, Reservation, and Contacts.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the "DiningDeck" logo and links for Home, About Us, Menu, Reservation, and Contacts

#### Scenario: Mobile navigation toggles

- **WHEN** the user taps the hamburger menu button on mobile
- **THEN** the mobile navigation panel expands showing the same links
- **WHEN** the user taps a link or the close button
- **THEN** the mobile navigation panel collapses

### Requirement: Hero section with food imagery

The page SHALL display a full-width hero section with a food background image, "Premium Quality" script text, and a "Restaurant & Dishes" heading.

#### Scenario: Hero renders heading and background

- **WHEN** the page loads
- **THEN** the hero section shows "Premium", "Quality", and "Restaurant & Dishes" text
- **AND** a food background image is displayed

#### Scenario: Scroll indicator links to about

- **WHEN** the user views the hero section
- **THEN** a scroll-down indicator links to the about section

### Requirement: About section with image and text

The page SHALL display a two-column about section with an image on the left and descriptive text with a "Learn More" link on the right.

#### Scenario: About section renders content

- **WHEN** the user scrolls to the about section
- **THEN** a restaurant image and descriptive paragraph are shown
- **AND** a "Learn More" link points to the reservation section

### Requirement: Stats counters

The page SHALL display a row of 4 statistics with numbers and labels (Years of Experience, Branches Worldwide, Menu Items, Expert Staff).

#### Scenario: All 4 stats render

- **WHEN** the user views the stats section
- **THEN** 4 stat items with values (15+, 50+, 100+, 30+) and labels are visible

### Requirement: Features section

The page SHALL display 3 feature cards with icons (UtensilsCrossed, Leaf, CalendarDays), titles, and descriptions.

#### Scenario: Feature cards render

- **WHEN** the user views the features section
- **THEN** "Best Quality", "Seasonal Ingredients", and "Online Reservation" cards are shown

### Requirement: Reservation / Contact section

The page SHALL display a dark-background section with "Make a Reservation" heading and contact information (phone, address, email).

#### Scenario: Reservation section renders contacts

- **WHEN** the user views the reservation section
- **THEN** phone, address, and email contact details are shown

### Requirement: Footer with Component Dock link

The page SHALL display a footer with the DiningDeck logo, social links, and a link to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** the user scrolls to the footer
- **THEN** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: Design tokens match original

The template SHALL use teal (#47c9e5) brand accent, Raleway and Kalam fonts, and white/dark section backgrounds matching the original Jevelin restaurant design.

#### Scenario: Brand colors and fonts are applied

- **WHEN** the page renders
- **THEN** teal accent color is used for interactive elements and headings
- **AND** Kalam cursive font is used for the logo and "Premium" script text
- **AND** Raleway font is used for body text
