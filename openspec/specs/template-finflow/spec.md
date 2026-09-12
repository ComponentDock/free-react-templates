# Spec: Finflow

## Purpose

Recreation of ColorLib "Finances" (https://colorlib.com/wp/template/finances/) as "Finflow" — a finance and banking template with hero carousel, about section, features, team, gallery, how-it-works, services, testimonials, pricing, FAQ, bank loan, blog, contact form, and footer.

## Requirements

### R1: Navbar

The template MUST have a sticky navigation bar with the site logo "Finflow.", navigation links (Home, About, Services, Team, Pricing, Blog, Contact), social media icons, a dark mode toggle, and a mobile menu.

#### Scenario: Navbar displays site branding and links

- **GIVEN** the page loads
- **WHEN** I look at the header
- **THEN** I see "Finflow." logo and all navigation links

#### Scenario: Mobile menu opens and closes

- **GIVEN** the mobile menu is closed
- **WHEN** I click the hamburger icon
- **THEN** the mobile navigation menu appears
- **AND** clicking a link closes the menu

#### Scenario: Dark mode toggle

- **GIVEN** dark mode is off
- **WHEN** I click the dark mode toggle
- **THEN** the document root gets the "dark" class

### R2: Hero Section

The template MUST have a full-width hero section with a background image, heading "Banking Solutions", descriptive text, and a "Get In Touch" CTA button.

#### Scenario: Hero renders correctly

- **GIVEN** the hero section is visible
- **WHEN** I look at it
- **THEN** I see the "Banking Solutions" heading and "Get In Touch" button

### R3: About Section

The template MUST have an "About Us" section with a heading "We Solve Your Financial Problem" and descriptive text.

#### Scenario: About section renders

- **GIVEN** the About section is visible
- **WHEN** I look at it
- **THEN** I see the "We Solve Your Financial Problem" heading

### R4: Features Section

The template MUST display three feature cards: Money Savings, Online Shoppings, and Credit/Debit Cards.

#### Scenario: Features render all three cards

- **GIVEN** the Features section is visible
- **WHEN** I look at it
- **THEN** I see three feature cards with titles

### R5: Banking Solutions Section

The template MUST show "Banking Solutions Is Our Priority" with a check-list of three items.

#### Scenario: Banking solutions section renders

- **GIVEN** the Banking Solutions section is visible
- **WHEN** I look at it
- **THEN** I see the heading and three check-list items

### R6: Team Section

The template MUST display three team members with names, positions, and social links.

#### Scenario: Team members render

- **GIVEN** the Team section is visible
- **WHEN** I look at it
- **THEN** I see three team members with names and positions

### R7: Gallery Section

The template MUST display a 4-column grid of 12 images with hover effect.

#### Scenario: Gallery renders images

- **GIVEN** the Gallery section is visible
- **WHEN** I look at it
- **THEN** I see a grid of images

### R8: How It Works Section

The template MUST show three numbered steps with "Learn More" buttons.

#### Scenario: Steps render

- **GIVEN** the How It Works section is visible
- **WHEN** I look at it
- **THEN** I see three numbered steps

### R9: Services Section

The template MUST display six service cards on a light background.

#### Scenario: Services render

- **GIVEN** the Services section is visible
- **WHEN** I look at it
- **THEN** I see six service cards

### R10: Testimonials Section

The template MUST show customer testimonials with quotes, photos, and names.

#### Scenario: Testimonials render

- **GIVEN** the Testimonials section is visible
- **WHEN** I look at it
- **THEN** I see customer quotes and names

### R11: Pricing Section

The template MUST display three pricing tiers: Basic, Premium (highlighted), and Professional.

#### Scenario: Pricing tiers render

- **GIVEN** the Pricing section is visible
- **WHEN** I look at it
- **THEN** I see three pricing tiers with "Buy Now" buttons

### R12: FAQ Section

The template MUST display eight FAQ items in a 2-column layout with expand/collapse functionality.

#### Scenario: FAQ items render and expand

- **GIVEN** the FAQ section is visible
- **WHEN** I click a question
- **THEN** the answer expands and shows content

### R13: Bank Loan Section

The template MUST show Bank Loan and Banking Consultation items with icons.

#### Scenario: Bank loan items render

- **GIVEN** the Bank Loan section is visible
- **WHEN** I look at it
- **THEN** I see Bank Loan and Banking Consultation headings

### R14: Blog Section

The template MUST display three blog cards with images, titles, and excerpts.

#### Scenario: Blog cards render

- **GIVEN** the Blog section is visible
- **WHEN** I look at it
- **THEN** I see three blog cards

### R15: Contact Section

The template MUST have a contact form with First Name, Last Name, Email, Subject, Message fields and a Send Message button.

#### Scenario: Contact form submits

- **GIVEN** the Contact form is filled out
- **WHEN** I click Send Message
- **THEN** a thank-you message appears

### R16: Footer

The template MUST have a dark footer with About Us text, Quick Links, Follow Us social links, Newsletter subscription, and a "Component Dock" attribution link.

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer is visible
- **WHEN** I look at it
- **THEN** I see a link to https://www.componentdock.com/
