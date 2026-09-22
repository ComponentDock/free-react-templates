# Template: Gymcore (Fitness / Gym)

## Purpose

Recreation of ColorLib **Gutim** — a fitness/gym HTML template.

- **Source:** https://colorlib.com/wp/template/gutim/
- **Preview:** https://preview.colorlib.com/theme/gutim/
- **New name:** `gymcore`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/gymcore`

## Requirements

### Requirement: Navbar displays navigation and CTA

The navbar SHALL display a logo, navigation links, and a "Sign Up Today" CTA button.

#### Scenario: Desktop navigation

- **GIVEN** the page is loaded on a desktop viewport
- **THEN** I see a "Gymcore" logo link
- **AND** I see navigation links for "Home", "About", "Classes", "Blog", "Gallery", "Contacts"
- **AND** I see a "Sign Up Today" button

#### Scenario: Mobile menu toggle

- **GIVEN** the page is loaded on a mobile viewport
- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** I see all navigation links

### Requirement: Hero section shows fitness headline

The hero section SHALL display a background image, tagline, heading, description, and CTA button.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **THEN** I see "Fitness Elements" tag text
- **AND** I see "BMI Calculator" heading
- **AND** I see a "Read More" button

### Requirement: About section describes the gym

The about section SHALL display an image with play button and descriptive text.

#### Scenario: About content

- **GIVEN** the page is loaded
- **THEN** I see "Story About Us" heading
- **AND** I see a play video button
- **AND** I see a "Read More" button

### Requirement: Services section lists offerings

The services section SHALL display a 2x2 grid of service cards.

#### Scenario: Service items

- **GIVEN** the page is loaded
- **THEN** I see service items for "Strategies", "Yoga", "Workout", "Weight Loss"

### Requirement: Classes section shows available classes

The classes section SHALL display a grid of class cards with background images.

#### Scenario: Class cards

- **GIVEN** the page is loaded
- **THEN** I see "Unlimited Classes" heading
- **AND** I see class cards for "Yoga", "Running", "Personal Training", "Karate", "Dance", "Boxing"

### Requirement: Team section shows trainers

The team section SHALL display trainer cards with photos and names.

#### Scenario: Trainer cards

- **GIVEN** the page is loaded
- **THEN** I see "Expert Trainers" heading
- **AND** I see trainer names

### Requirement: Testimonials section shows member reviews

The testimonials section SHALL display testimonial cards with quotes and star ratings.

#### Scenario: Testimonial content

- **GIVEN** the page is loaded
- **THEN** I see "What Our Members Say" heading
- **AND** I see testimonial cards with names and quotes

### Requirement: Banner section displays contact CTA

The banner section SHALL display a contact phone number and CTA button.

#### Scenario: Banner content

- **GIVEN** the page is loaded
- **THEN** I see "Contact Us" text
- **AND** I see the phone number "09 746 204"

### Requirement: Membership section shows pricing plans

The membership section SHALL display three pricing tier cards.

#### Scenario: Pricing cards

- **GIVEN** the page is loaded
- **THEN** I see "Membership Plans" heading
- **AND** I see pricing cards for "Basic" at $17, "Standard" at $57, "Premium" at $98
- **AND** each card has a "Start Now" button

### Requirement: Register form collects user info

The register section SHALL display a form with input fields and submit button.

#### Scenario: Form fields

- **GIVEN** the page is loaded
- **THEN** I see "Register Now" heading
- **AND** I see input fields for "First Name", "Email Address", "Last Name", "Mobile No*"
- **AND** I see a "Get Started" submit button

### Requirement: Blog section shows latest posts

The blog section SHALL display three blog post cards.

#### Scenario: Blog cards

- **GIVEN** the page is loaded
- **THEN** I see "Latest Blog" heading
- **AND** I see 3 blog cards with dates and titles

### Requirement: Footer has contact info and Component Dock branding

The footer SHALL display contact information, newsletter form, and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is loaded
- **THEN** I see phone, address, and email contact info
- **AND** I see a newsletter subscribe form
- **AND** I see a link to "Component Dock" pointing to https://www.componentdock.com/
