# Template: Greenfield (Farm & Agriculture Landing)

## Purpose

Greenfield is a single-page farm and agriculture website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Farmland" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Requirements

### Requirement: TopBar displays contact info and social links

The template SHALL display a top bar with an email address on the left and social media icon links (Facebook, Twitter, Instagram, Dribbble) on the right.

#### Scenario: TopBar renders email and social icons

- **WHEN** the page loads
- **THEN** I should see the email address "info@greenfield.com" in the top bar
- **AND** I should see social media icon links

### Requirement: BrandBar shows logo and contact details

The template SHALL display a brand bar with a Sprout icon logo, the brand name "Greenfield", the tagline "Agriculture Farming", a phone number, and an address.

#### Scenario: BrandBar renders brand identity

- **WHEN** the page loads
- **THEN** I should see the brand name "Greenfield"
- **AND** I should see the tagline "Agriculture Farming"
- **AND** I should see a phone number
- **AND** I should see an address

### Requirement: Navbar provides navigation and mobile menu

The template SHALL display a dark navigation bar with links for Home, About, Services, Projects, Blog, and Contact, plus a "Get A Quote" CTA button. The navbar SHALL be responsive with a hamburger menu on mobile.

#### Scenario: Navbar renders all links

- **WHEN** the page loads
- **THEN** I should see navigation links for Home, About, Services, Projects, Blog, and Contact
- **AND** I should see a "Get A Quote" button

#### Scenario: Mobile menu toggles

- **WHEN** I click the mobile menu toggle button
- **THEN** the mobile menu should become visible
- **AND** the toggle button should show "Close menu"

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and I click a navigation link
- **THEN** the mobile menu should close

### Requirement: Hero section displays welcome content

The template SHALL display a full-height hero section with a background image, overlay, welcome subheading, main heading, description paragraph, and two CTA buttons.

#### Scenario: Hero renders welcome content

- **WHEN** the page loads
- **THEN** I should see "Welcome to Greenfield" subheading
- **AND** I should see the heading "Agriculture is the Most Healthful"
- **AND** I should see "Our Services" and "Request A Quote" buttons

### Requirement: Services section shows four service cards

The template SHALL display a services section with 4 cards, each containing an icon, title, description, and arrow button.

#### Scenario: Services renders four cards

- **WHEN** the page loads
- **THEN** I should see 4 service cards
- **AND** each card should have a title, description, and arrow button

### Requirement: About section displays company info

The template SHALL display an about section with a split layout: left side has a background image with an experience badge, right side has a heading, description, feature items, and a "Learn More" button.

#### Scenario: About renders company information

- **WHEN** the page loads
- **THEN** I should see "We're Leader In Agricultural Market" heading
- **AND** I should see an experience badge showing "42"
- **AND** I should see feature items
- **AND** I should see a "Learn More" button

### Requirement: Counter section shows statistics

The template SHALL display a counter section with 4 statistics over a background image.

#### Scenario: Counter renders statistics

- **WHEN** the page loads
- **THEN** I should see 4 counter items
- **AND** I should see "4,800" for Project Completed
- **AND** I should see "14,000" for Total Products
- **AND** I should see "200" for Services Provided
- **AND** I should see "71,650" for Satisfied Customers

### Requirement: Projects section shows portfolio

The template SHALL display a projects section with "Explore Projects" heading and 4 project cards.

#### Scenario: Projects renders portfolio cards

- **WHEN** the page loads
- **THEN** I should see "Explore Projects" heading
- **AND** I should see 4 project cards

### Requirement: Video section

The template SHALL display a video section with a background image, play button, and heading.

#### Scenario: Video section renders

- **WHEN** the page loads
- **THEN** I should see a play button
- **AND** I should see "Watch Modern Agricultural Farming" heading

### Requirement: Testimonials section

The template SHALL display a testimonials section with a heading, description, stat, and testimonial cards with quotes, author images, names, and positions.

#### Scenario: Testimonials renders

- **WHEN** the page loads
- **THEN** I should see "Testimonials" heading
- **AND** I should see at least 1 testimonial with a quote, author name, and position

### Requirement: Request Quote form and FAQ

The template SHALL display a request quote section with a form (First Name, Last Name, Phone, Service dropdown, Message, Submit button) and a FAQ accordion.

#### Scenario: Request Quote form renders

- **WHEN** the page loads
- **THEN** I should see form fields for First Name, Last Name, Phone, Service, and Message
- **AND** I should see a "Request A Quote" submit button
- **AND** I should see a FAQ accordion with 3 questions

### Requirement: Blog section

The template SHALL display a blog section with "Recent Post" heading and 3 blog cards.

#### Scenario: Blog renders posts

- **WHEN** the page loads
- **THEN** I should see "Recent Post" heading
- **AND** I should see 3 blog cards

### Requirement: Newsletter subscription

The template SHALL display a newsletter section with a heading, description, email input, and Subscribe button.

#### Scenario: Newsletter renders

- **WHEN** the page loads
- **THEN** I should see "Subscribe to our Newsletter" heading
- **AND** I should see an email input and a Subscribe button

### Requirement: Footer with Component Dock link

The template SHALL display a footer with 4 columns (About, Recent Posts, Explore links, Contact info) and a bottom bar with copyright and a link to Component Dock.

#### Scenario: Footer renders with Component Dock link

- **WHEN** the page loads
- **THEN** I should see the brand name "Greenfield" in the footer
- **AND** I should see social media links
- **AND** I should see navigation links
- **AND** I should see contact information
- **AND** I should see a link to "https://www.componentdock.com/" branded as "Component Dock"

#### Scenario: Footer has no Colorlib references

- **WHEN** I inspect the footer HTML
- **THEN** I should NOT see any reference to Colorlib or colorlib.com
