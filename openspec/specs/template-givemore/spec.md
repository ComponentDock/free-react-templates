# GiveMore — Charity & Donation Landing

## Purpose

Recreation of ColorLib [Bcharity](https://colorlib.com/wp/template/bcharity/) as a free React template. GiveMore is a charity and donation landing page with hero banner, feature highlights, cause cards with progress bars, volunteer profiles, blog, partner logos, and newsletter signup.

## Requirements

### Requirement: Navbar with navigation and CTA

The page SHALL display a sticky navbar with brand name, navigation links (Home, About, Causes, Volunteers, Blog, Contact), and a "Learn More" CTA button.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on desktop viewport
- **THEN** the navbar shows the brand "GiveMore", all navigation links, and the "Learn More" button

#### Scenario: Mobile navbar toggle

- **WHEN** the user is on mobile viewport
- **THEN** a hamburger button is visible that toggles the mobile menu
- **WHEN** the user taps the hamburger button
- **THEN** the mobile menu opens with all navigation links and the "Learn More" link
- **WHEN** the user taps a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero banner section

The page SHALL display a full-width hero banner with background image, headline "Bless others with your gift", description text, and a "Start Donation" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows the heading "Bless others with your gift"
- **AND** a "Start Donation" button links to the causes section

### Requirement: Features section

The page SHALL display a features section with 4 feature cards: Give Donation, Become A Volunteer, Child Education, and Quick Fundraise.

#### Scenario: All feature cards render

- **WHEN** the features section is visible
- **THEN** 4 feature cards are displayed with icons, titles, and descriptions

### Requirement: Be Part section

The page SHALL display a "Be Part" split section with heading, description, image, and "Learn More" CTA.

#### Scenario: Be Part renders content

- **WHEN** the be-part section is visible
- **THEN** the heading "Be a part of the breakthrough" is displayed
- **AND** a "Learn More" button links to causes

### Requirement: Counter stats section

The page SHALL display 4 statistic items: Total Collection, Helped People, Total Volunteers, and Successful Missions.

#### Scenario: Stats render with values

- **WHEN** the counter section is visible
- **THEN** all 4 stat labels and values are displayed

### Requirement: Featured Causes section

The page SHALL display 3 cause cards, each with an image, title, progress bar, goal/raised amounts, and a "Read More" link.

#### Scenario: Cause cards render

- **WHEN** the causes section is visible
- **THEN** 3 cause cards are displayed
- **AND** each card shows goal and raised amounts
- **AND** each card has a "Read More" link

### Requirement: CTA Banner section

The page SHALL display a dark CTA banner with the quote "Forget what you can get and see what you can give" and a "Become a Volunteer" button.

#### Scenario: CTA banner renders

- **WHEN** the CTA section is visible
- **THEN** the motivational quote is displayed
- **AND** a "Become a Volunteer" button links to volunteers section

### Requirement: Volunteers section

The page SHALL display 4 volunteer profile cards, each with a photo, name, role, and social icon links.

#### Scenario: Volunteer cards render

- **WHEN** the volunteers section is visible
- **THEN** 4 volunteer cards are displayed
- **AND** each card shows name, role, and social icons

### Requirement: Blog section

The page SHALL display a blog section with 1 featured post and 3 smaller posts.

#### Scenario: Blog posts render

- **WHEN** the blog section is visible
- **THEN** 1 featured post and 3 smaller posts are displayed

### Requirement: Partners section

The page SHALL display 5 partner logos in a row.

#### Scenario: Partner logos render

- **WHEN** the partners section is visible
- **THEN** 5 partner logos are displayed

### Requirement: Footer with Component Dock link

The page SHALL display a footer with brand name, newsletter signup form, contact information, quick links, and copyright with a "Component Dock" link.

#### Scenario: Footer renders all sections

- **WHEN** the footer is visible
- **THEN** the newsletter form, contact info, quick links, and copyright are displayed
- **AND** the copyright includes a link to https://www.componentdock.com/

#### Scenario: Newsletter form handles submission

- **WHEN** the user enters an email and clicks subscribe
- **THEN** the form prevents default submission (no navigation)

### Requirement: Accessibility

The page SHALL be accessible with semantic HTML, aria labels, and keyboard navigation.

#### Scenario: Interactive elements are accessible

- **WHEN** the page loads
- **THEN** all images have alt text
- **AND** the mobile menu toggle has an aria-label
- **AND** form inputs have aria-labels
