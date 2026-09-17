# Template: Vivid (Creative Agency)

## Purpose

Vivid is a creative-agency landing page in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Creative
Agency" free template (source: https://colorlib.com/wp/template/creative-agency/),
built under a DIFFERENT name (Vivid — evoking the vibrant, creative energy
of the original's design), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Creative Agency" — single-page creative agency
  with full-screen hero overlay, 3-column feature cards, 6-item portfolio
  grid, 6-item services grid, split "Why Choose Us", parallax stats,
  3-column pricing, testimonial carousel, team cards, blog cards, dark footer.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/creative-agency/`
- **Section order (1:1):** navbar → hero → about → portfolio → services →
  why choose us → stats → pricing → testimonials → team → blog → contact → footer.
- **Design tokens:**
  - Body font: Varela Round (Google Fonts), color #868F9B
  - Heading font: Montserrat (Google Fonts), weight 700, color #10161A
  - Primary color: #6195FF (blue)
  - Grey section bg: #FAFAFA, border #EEE
  - Dark section bg: #1C1D21
  - Buttons: primary bg #6195FF white text, white bg, outline with border
  - Border radius: 3px for buttons
  - Section padding: 120px top/bottom

## Requirements

### Requirement: Navbar

The system SHALL render a fixed navbar with the site logo on the left and
navigation links on the right. The navbar SHALL be transparent over the hero
and switch to dark background on scroll.

#### Scenario: Navbar content

- **GIVEN** the Vivid page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Vivid" on the left
- **AND** it SHALL show links Home, About, Portfolio, Services, Prices, Team, Blog, Contact
- **AND** the navbar SHALL start transparent and switch to dark on scroll

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the menu toggle button
- **THEN** the mobile navigation menu SHALL expand showing all nav links
- **AND** the toggle button SHALL have aria-expanded attribute

### Requirement: Hero section

The system SHALL render a full-screen hero with a dark background image
overlay, a heading, description, and two CTA buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the heading "We Are Creative Agency"
- **AND** it SHALL show a description paragraph
- **AND** it SHALL show a "Get Started!" button linking to #contact
- **AND** it SHALL show a "Learn more" button linking to #about

### Requirement: About section

The system SHALL render a 3-column feature cards section with icons,
titles, and descriptions.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Welcome to Website"
- **AND** it SHALL show three feature cards: Fully Customizable, Awesome Features, Fully Responsive
- **AND** each card SHALL have an icon, title, description, and Read more link

### Requirement: Portfolio section

The system SHALL render a 6-item portfolio grid on a grey background.

#### Scenario: Portfolio content

- **GIVEN** the page is rendered
- **WHEN** the portfolio section is displayed
- **THEN** it SHALL show the heading "Featured Works"
- **AND** it SHALL show 6 portfolio items with images, categories, and titles

### Requirement: Services section

The system SHALL render a 6-item services grid with icons and descriptions.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "What we offer"
- **AND** it SHALL show 6 services: App Development, Graphic Design, Creative Idea, Marketing, Awesome Support, Brand Design

### Requirement: Why Choose Us section

The system SHALL render a split layout with feature checklist on the left
and an image on the right.

#### Scenario: Why Choose Us content

- **GIVEN** the page is rendered
- **WHEN** the Why Choose Us section is displayed
- **THEN** it SHALL show the heading "Why Choose Us"
- **AND** it SHALL show 4 feature check items
- **AND** it SHALL show an image on the right side

### Requirement: Stats section

The system SHALL render a parallax dark background section with 4 stat counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show Happy clients (451), Awards won (12), Cups of Coffee (154K), Projects completed (45)

### Requirement: Pricing section

The system SHALL render 3 pricing cards with plan names, prices, feature lists, and purchase buttons.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Pricing Table"
- **AND** it SHALL show 3 plans: Basic ($9/mo), Silver ($19/mo), Gold ($39/mo)
- **AND** each plan SHALL have a feature list and "Purchase now" button

### Requirement: Testimonials section

The system SHALL render a dark background section with a testimonial carousel.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a testimonial with avatar, name, role, and quote
- **AND** it SHALL have prev/next navigation buttons
- **WHEN** the user clicks next
- **THEN** the next testimonial SHALL be displayed
- **WHEN** the user clicks previous from the first testimonial
- **THEN** it SHALL wrap to the last testimonial

### Requirement: Team section

The system SHALL render 3 team member cards with photos, names, roles, and social links.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Our Team"
- **AND** it SHALL show 3 team members with names, roles, and social link aria-labels

### Requirement: Blog section

The system SHALL render 3 blog cards on a grey background.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent News"
- **AND** it SHALL show 3 blog posts with images, meta info, titles, and Read more links

### Requirement: Contact section

The system SHALL render contact info and a contact form.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show the heading "Get in touch"
- **AND** it SHALL show Phone, Email, Address contact info
- **AND** it SHALL show a form with Name, Email, Subject, Message fields and Send message button

### Requirement: Footer

The system SHALL render a dark footer with logo, social links, and copyright.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the "Vivid" logo
- **AND** it SHALL show social media links
- **AND** it SHALL show copyright text with a Component Dock link to https://www.componentdock.com/
