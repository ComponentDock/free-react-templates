# Credix — Loan & Credit Company Template

## Purpose

Recreation of ColorLib "Credit" (https://colorlib.com/wp/template/credit/) — a loan and credit company landing page with navy blue and golden accent design tokens, featuring a hero section, feature highlights, skill indicators, services grid, contact/news section, newsletter signup, and a 4-column footer.

## Requirements

### Requirement: Full page render with all sections

The Credix app SHALL render a complete landing page with header, hero, features, stats, CTA banner, services, contact/news, newsletter, and footer sections.

#### Scenario: Document title and landmarks

- **WHEN** the Credix app loads
- **THEN** the document title is "Credix — Loan & Credit Company Template"
- **AND** the page contains a banner landmark (header)
- **AND** the page contains a main landmark
- **AND** the page contains a contentinfo landmark (footer)

#### Scenario: Hero section content

- **WHEN** the Credix app loads
- **THEN** the hero section displays the heading "get your loan now"
- **AND** the hero section displays a "Discover" call-to-action button

### Requirement: Features section with loan information

The features section SHALL display a heading card with "Our Loans" title and three image cards highlighting loan benefits.

#### Scenario: Feature cards

- **WHEN** the Credix app loads
- **THEN** the features section displays "Our Loans" heading
- **AND** the features section displays "We take care of you"
- **AND** the features section displays "No documents needed"
- **AND** the features section displays "Fast & easy loans"

### Requirement: Stats section with skill indicators

The stats section SHALL display three circular progress indicators showing Energy (90%), Power (75%), and Resource (97%).

#### Scenario: Skill indicators

- **WHEN** the Credix app loads
- **THEN** the stats section displays "Energy" with value "90%"
- **AND** the stats section displays "Power" with value "75%"
- **AND** the stats section displays "Resource" with value "97%"

### Requirement: Services section with 6 service cards

The services section SHALL display 6 service cards in a 3-column grid, each with an icon, title, and description.

#### Scenario: Service cards

- **WHEN** the Credix app loads
- **THEN** the services section displays 6 service card titles
- **AND** each card has a description paragraph

### Requirement: Newsletter section with email signup

The newsletter section SHALL display an email input field and a subscribe button.

#### Scenario: Newsletter form

- **WHEN** the Credix app loads
- **THEN** the newsletter section has an email input field
- **AND** the newsletter section has a "Subscribe" button

#### Scenario: Newsletter form submission

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the email input is cleared

### Requirement: Footer with Component Dock attribution

The footer SHALL display 4 widget columns and a copyright bar linking to Component Dock.

#### Scenario: Footer columns

- **WHEN** the Credix app loads
- **THEN** the footer contains "About Us" heading
- **AND** the footer contains "Solutions" heading
- **AND** the footer contains "Our Loans" heading
- **AND** the footer contains "Latest News" heading

#### Scenario: Component Dock link

- **WHEN** the Credix app loads
- **THEN** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

### Requirement: Navbar with mobile toggle

The navbar SHALL display navigation links and support a mobile toggle.

#### Scenario: Navigation links

- **WHEN** the Credix app loads
- **THEN** the navbar displays "Home", "About", "Services", "Blog", "Contact" links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle
- **THEN** the mobile menu opens with navigation links visible
- **AND** aria-expanded is "true"

#### Scenario: Mobile menu close on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes
