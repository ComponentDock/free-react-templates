# Template: Presswell (Laundry / Dry Cleaning Service)

## Purpose

Presswell is a single-page laundry service template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Laundry" design,
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a blue-purple laundry page with a hero ("Quality laundry service
in your city"), process steps, service offerings, a CTA band, testimonials,
stats, an about section, and a branded footer. Presswell recreates that structure
section-for-section with matching layout, colors, typography, and content types
(no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Laundry" — free laundry service website template
  (source: https://colorlib.com/wp/template/laundry/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/laundry/`
  (HTTP 200, 506 lines) + stylesheet `style.css` (minified).
- **Design tokens extracted from style.css:**
  - Brand primary: `#6785FF` (blue-purple — buttons, links, header CTA)
  - Brand secondary: `#5172f5` (gradient endpoint)
  - Heading color: `#072366` (dark navy)
  - Body text: `#10285d` (navy)
  - Button: rounded pill (border-radius: 30px), blue gradient
  - Heading font: Raleway
  - Body font: Muli
- **Section order (1:1):**
  1. Navbar: Logo + nav (Home, About, Services, Blog, Contact) + phone + "Make an Appointment" CTA
  2. Hero: "Quality laundry service in your city" + subtext + "Explore Services" CTA
  3. Process: 3-step process (Collect, Wash, Deliver) with icons
  4. Services: 2×2 grid of service cards with image overlays (Cloth laundry, Cloth ironing)
  5. CTA Band: "Call us for a service" + "Learn More" button
  6. Testimonials: Customer quotes with avatars and 5-star ratings
  7. Stats: 3 achievement counters (4000+, 300+, 95%)
  8. About: Image + text + "About Us" button
  9. Footer: Logo, description, social links, Services list, Contact info
  10. Footer Bottom: Copyright with Component Dock branding

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Presswell", navigation links (Home, About, Services, Blog, Contact), a phone
number, and a "Make an Appointment" CTA button.

#### Scenario: Navbar content

- **GIVEN** the Presswell page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand name "Presswell"
- **AND** it SHALL show navigation links for Home, About, Services, Blog, and Contact
- **AND** it SHALL show a phone number "(08) 728 256 266"
- **AND** it SHALL show a "Make an Appointment" link

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered
- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu SHALL open
- **AND** clicking a nav link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, a level-1
headline "Quality laundry service in your city", subtext, and an "Explore
Services" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline about laundry service
- **AND** it SHALL show subtext about clean clothes
- **AND** it SHALL show an "Explore Services" link

### Requirement: Process section

The system SHALL render a "This is how we work" section with three process
steps: collect, wash, and deliver.

#### Scenario: Process steps

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL show the heading "This is how we work"
- **AND** it SHALL render three steps: "We collect your clothes", "Wash your clothes", "Get delivery"

### Requirement: Services section

The system SHALL render a "Services we offer" section with two service cards
(Cloth laundry, Cloth ironing).

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Services we offer"
- **AND** it SHALL render cards for "Cloth laundry" and "Cloth ironing"

### Requirement: CTA band

The system SHALL render a full-width call-to-action band with "Call us for a
service" heading and a "Learn More" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the heading "Call us for a service"
- **AND** it SHALL show a "Learn More" link

### Requirement: Testimonials section

The system SHALL render a testimonials section with customer quotes, avatar
images, and 5-star ratings.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least three customer testimonials
- **AND** each SHALL have a name and star rating

### Requirement: Stats section

The system SHALL render a "Company achievement" section with three stat
counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show the heading "Company achievement"
- **AND** it SHALL render stats for "4000+", "300+", and "95%"

### Requirement: About section

The system SHALL render an about section with a heading, descriptive text, and
an "About Us" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About company"
- **AND** it SHALL show an "About Us" link

### Requirement: Footer

The system SHALL render a footer with the brand name, service links, contact
information, and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name "Presswell"
- **AND** it SHALL show service links (Dry Cleaning, Wash & Fold, etc.)
- **AND** it SHALL show contact information (phone, email, address)
- **AND** it SHALL link to https://www.componentdock.com/

#### Scenario: Footer copyright

- **GIVEN** the page is rendered
- **WHEN** the footer bottom is displayed
- **THEN** it SHALL show a copyright line mentioning "Component Dock"
