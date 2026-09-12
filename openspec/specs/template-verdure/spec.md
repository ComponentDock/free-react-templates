# Template: Verdure (Professional Landscaper & Gardener)

## Purpose

Verdure is a single-page professional landscaper & gardener business template.
It is an original React recreation of the ColorLib free "Hardenero" template
(preview: https://preview.colorlib.com/theme/hardenero/ — business/landscaper landing),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original:

- Brand green `#57b846` (accents, badges, CTAs), warm amber `#f6a623` (secondary)
- Typeface: Poppins (300, 400, 600, 700) via Google Fonts `<link>`
- Dark grey backgrounds for navbar/footer (`#1a1a1a`), light `#f8f9fa` for service sections
- Green rounded badge for experience, white content cards with subtle shadows
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Verdure lives in `apps/verdure` and uses shared components from `packages/ui`.

## Requirements

### Requirement: Top bar

The system SHALL render a top bar with email contact info, social media icons,
phone number, location, and a "Request A Quote" CTA button.

#### Scenario: Top bar content

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show the email "youremail@email.com" as a mailto link
- **AND** it SHALL show social media icon links (Facebook, Twitter, Instagram, Pinterest)
- **AND** it SHALL show the phone number "+1 (555) 123-4567"
- **AND** it SHALL show the location "123 Garden Street, Green City"
- **AND** it SHALL show a "Request A Quote" link

### Requirement: Navigation bar

The system SHALL render a dark background navbar with the brand name "Verdure"
and section navigation links.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Verdure" with subtitle "Landscaper & Gardener"
- **AND** it SHALL show links to Home, About, Services, Projects, Pricing, Blog, Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user clicks the menu toggle button
- **THEN** the mobile navigation menu SHALL open
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu SHALL close

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
heading text, and two call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the subheading "Welcome to Verdure"
- **AND** it SHALL show the heading "Professional Gardeners & Landscapers"
- **AND** it SHALL show a "What We Do?" link
- **AND** it SHALL show a "Request A Quote" link

### Requirement: About section

The system SHALL render a two-column about section with overlapping images,
an experience badge, and feature cards.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "We're Leader In Agricultural Market"
- **AND** it SHALL show the experience badge with "25+"
- **AND** it SHALL show feature cards for "Biography Safe" and "Awards Winning"

### Requirement: Stats section

The system SHALL render a stats section with a dark background image and
four stat counters with icons.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show "4,800" Projects Completed
- **AND** it SHALL show "14,000" Total Products
- **AND** it SHALL show "200" Services Provide
- **AND** it SHALL show "71,650" Satisfied Customers

### Requirement: Services section

The system SHALL render a services section with four service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Explore Our Best Offer"
- **AND** it SHALL show cards for Gardening Water System, Preparing Landscape, Garden Fence, Garden Supplies

### Requirement: Projects section

The system SHALL render a projects section with a 3-column grid of project
cards with hover overlay effects.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show six project cards with images
- **AND** hovering a card SHALL reveal the project name and category

### Requirement: Assessment section

The system SHALL render an assessment section with a split layout — background
image on one side, feature items on the other.

#### Scenario: Assessment content

- **GIVEN** the page is rendered
- **WHEN** the assessment section is displayed
- **THEN** it SHALL show the heading "Assessment"
- **AND** it SHALL show feature items: "We Deal With Love", "We Are Professionals", "We Deliver Our Best Services"

### Requirement: Testimonials section

The system SHALL render a testimonials section with three testimonial cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "What Our Clients Say"
- **AND** it SHALL show three testimonial cards with avatar, quote, name "Roger Scott", and position "Marketing Manager"

### Requirement: Quote form section

The system SHALL render a quote request form with labeled input fields.

#### Scenario: Form fields

- **GIVEN** the page is rendered
- **WHEN** the quote form is displayed
- **THEN** it SHALL show the heading "Request An Estimate"
- **AND** it SHALL show labeled inputs for First Name, Last Name, Phone
- **AND** it SHALL show a Service select with options
- **AND** it SHALL show a Message textarea
- **AND** it SHALL show a "Request A Quote" submit button

#### Scenario: Form interaction

- **GIVEN** the quote form is displayed
- **WHEN** the user types into form fields
- **THEN** the field values SHALL update accordingly
- **WHEN** the user submits the form
- **THEN** the form SHALL handle submission without page reload

### Requirement: Blog section

The system SHALL render a blog section with three blog post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Post"
- **AND** it SHALL show three blog cards with image, date, author, comments, title, excerpt, and "Read more" button

### Requirement: Pricing section

The system SHALL render a pricing section with three pricing tier cards.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the heading "Our Plans & Pricing"
- **AND** it SHALL show three tiers: Basic ($29), Standard ($59), Premium ($99)
- **AND** each tier SHALL show a feature list with check/x icons
- **AND** each tier SHALL show a "Get Started" button

### Requirement: Footer

The system SHALL render a dark background footer with brand info, navigation,
and a link to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name "Verdure"
- **AND** it SHALL show quick links, services, and contact info columns
- **AND** it SHALL show a link to https://www.componentdock.com/ branded as "Component Dock"
