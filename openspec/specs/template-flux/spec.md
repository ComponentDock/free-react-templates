# Template: Flux (Digital Agency)

## Purpose

Recreation of ColorLib's **Pixel** digital agency website template.

- Source slug: `pixel`
- Source URL: https://colorlib.com/wp/template/pixel/
- Preview URL: https://preview.colorlib.com/theme/pixel/ (200 — live)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/pixel-free-template.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- New name: **flux** (`apps/flux`, `@free-react-templates/flux`)
- Footer link: https://www.componentdock.com/ ("Component Dock")

## Requirements

### Requirement: Navbar with navigation and social links

The template SHALL display a sticky navbar with logo, navigation links (Home, About, Services, Portfolio, Contact), and social icon links (Facebook, Dribbble, Flickr, Instagram, LinkedIn, Pinterest).

#### Scenario: Desktop navbar renders all elements

- **WHEN** the page loads on desktop viewport
- **THEN** the navbar displays the logo, all five navigation links, and all six social icon links

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile menu expands showing navigation links and social icons
- **AND** clicking the close button collapses the menu

### Requirement: Hero section with background image and CTA

The template SHALL display a full-width hero section with a background image, heading text ("Digital Agency of the year 2024"), subtitle with credit and client info, and a "View Project" CTA button.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section displays the heading "Digital Agency", subheading "of the year 2024", credit text, and a "View Project" button

### Requirement: Category tiles section

The template SHALL display two side-by-side category tiles with background images and labels ("Agency" and "What We Do?").

#### Scenario: Category tiles render

- **WHEN** the page loads
- **THEN** two category tiles are displayed with the labels "Agency" and "What We Do?"

### Requirement: Newsletter subscription section

The template SHALL display a newsletter section with blue background, heading "Stay in touch with us", email input field, and a "View Project" button.

#### Scenario: Newsletter form accepts email input

- **WHEN** the user types an email address in the newsletter input
- **THEN** the input displays the typed email
- **AND** submitting the form clears the input

### Requirement: Portfolio gallery with filter

The template SHALL display a portfolio section with filter buttons (All Projects, Visual, Advertising, Web Development) and a gallery grid of project items with hover overlays.

#### Scenario: Default view shows all projects

- **WHEN** the page loads
- **THEN** all three gallery items are visible

#### Scenario: Filtering by category

- **WHEN** the user clicks a filter button (e.g. "Visual")
- **THEN** only items matching that category are shown

### Requirement: Contact form

The template SHALL display a contact form with fields for Name, Email, Subject, Message, and a "Send Message" submit button.

#### Scenario: Contact form accepts input and submits

- **WHEN** the user fills all form fields and clicks "Send Message"
- **THEN** the form clears all fields

### Requirement: Footer with Component Dock branding

The template SHALL display a footer with blue background, logo, address, support phone, social icons, copyright text with a Component Dock link (https://www.componentdock.com/), and footer navigation links.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"
- **AND** the link opens in a new tab

#### Scenario: Footer renders social icons

- **WHEN** the page loads
- **THEN** the footer displays social icon links for Facebook, Dribbble, Flickr, Instagram, LinkedIn, and Pinterest
