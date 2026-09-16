# Template: Elevate (Coaching / Consulting)

## Purpose

Recreation of the ColorLib **Life Coaching** template for a coaching/consulting landing page.

- **Source template:** [Life Coaching](https://colorlib.com/wp/template/life-coaching/)
- **Preview URL:** https://preview.colorlib.com/theme/life-coaching/ (404 — unreachable; fallback to screenshot analysis)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lifecoaching-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Coaching / Consulting landing page

## Requirements

### Requirement: Navbar navigation

The app SHALL display a sticky navbar with logo, navigation links, dark mode toggle, mobile menu, and a CTA button.

#### Scenario: Desktop navbar

- **WHEN** the user loads the page on a desktop viewport
- **THEN** the navbar shows the Elevate logo, navigation links (Home, About, Services, Pricing, Blog, Contact), a dark mode toggle, and a "Get Started" CTA button

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu icon on mobile
- **THEN** a mobile navigation menu opens with all navigation links

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle button
- **THEN** the page switches to dark mode and the toggle icon changes to sun

### Requirement: Hero slider

The app SHALL display a full-width hero carousel with auto-advancing slides, navigation controls, and dot indicators.

#### Scenario: Slide display

- **WHEN** the hero section loads
- **THEN** a heading, subheading, and CTA button are visible with a background image

#### Scenario: Slide navigation

- **WHEN** the user clicks the next/previous arrow buttons
- **THEN** the carousel advances to the next/previous slide

#### Scenario: Auto-advance

- **WHEN** 5 seconds elapse without user interaction
- **THEN** the carousel automatically advances to the next slide

### Requirement: About section

The app SHALL display an about section with an image and descriptive text.

#### Scenario: About content

- **WHEN** the user scrolls to the about section
- **THEN** an image and text describing the coaching service are visible with a "Learn More" button

### Requirement: Services section

The app SHALL display a services grid with 4 service cards.

#### Scenario: Service cards

- **WHEN** the user scrolls to the services section
- **THEN** 4 service cards are displayed, each with an icon, title, and description

### Requirement: Statistics counters

The app SHALL display animated number counters that animate when entering the viewport.

#### Scenario: Counter animation

- **WHEN** the statistics section enters the viewport
- **THEN** the counters animate from 0 to their target values (150+, 10+, 200+, 95%)

### Requirement: Pricing plans

The app SHALL display 3 pricing tier cards with features and CTA buttons.

#### Scenario: Pricing display

- **WHEN** the user scrolls to the pricing section
- **THEN** 3 pricing cards (Basic $29, Standard $59, Premium $99) are shown with feature lists and "Get Started" buttons, with the Standard plan highlighted as "Most Popular"

### Requirement: Testimonials carousel

The app SHALL display a testimonials carousel with client quotes and navigation.

#### Scenario: Testimonial display

- **WHEN** the user scrolls to the testimonials section
- **THEN** a client quote, name, role, and avatar are displayed with navigation arrows

#### Scenario: Testimonial navigation

- **WHEN** the user clicks the next/previous testimonial arrows
- **THEN** the carousel advances to the next/previous testimonial

### Requirement: CTA banner

The app SHALL display a call-to-action banner section.

#### Scenario: CTA display

- **WHEN** the user scrolls to the CTA section
- **THEN** a heading, description, and "Book a Free Consultation" button are visible

### Requirement: Blog section

The app SHALL display a blog grid with 3 post cards.

#### Scenario: Blog posts

- **WHEN** the user scrolls to the blog section
- **THEN** 3 blog post cards are displayed, each with an image, date, title, excerpt, and "Read More" link

### Requirement: Contact form

The app SHALL display a contact form with validation.

#### Scenario: Form fields

- **WHEN** the user scrolls to the contact section
- **THEN** a form with Name, Email, Subject, and Message fields plus a "Send Message" button is visible

#### Scenario: Validation errors

- **WHEN** the user submits the form with empty required fields
- **THEN** validation error messages are displayed for Name, Email, and Message

#### Scenario: Successful submission

- **WHEN** the user fills all fields with valid data and submits
- **THEN** a thank-you message is displayed

### Requirement: Footer

The app SHALL display a footer with quick links, contact info, newsletter form, and Component Dock attribution.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** quick links, contact information, social links, and a newsletter subscription form are visible

#### Scenario: Newsletter validation

- **WHEN** the user submits the newsletter form with an invalid email
- **THEN** a validation error is displayed

#### Scenario: Newsletter success

- **WHEN** the user submits a valid email
- **THEN** a "Thanks for subscribing!" message is shown

#### Scenario: Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ is present with "Component Dock" branding

### Requirement: Design tokens

The app SHALL use the specified design tokens for brand colors, typography, and spacing.

#### Scenario: Brand colors

- **WHEN** the app renders
- **THEN** the brand primary color `#81d742` is used for buttons and accents
- **AND** the brand dark color `#6bc034` is used for hover states

#### Scenario: Typography

- **WHEN** the app renders
- **THEN** the Inter font from Google Fonts is loaded and applied
- **AND** headings use the ink color `#333333`

### Requirement: Accessibility

The app SHALL use semantic HTML, aria attributes, and focus-visible styles for accessibility.

#### Scenario: Semantic elements

- **WHEN** the app renders
- **THEN** semantic elements like `<header>`, `<main>`, `<nav>`, `<section>`, and `<footer>` are used

#### Scenario: Aria attributes

- **WHEN** interactive controls render
- **THEN** `aria-label` is present on icon-only buttons and `aria-expanded` is present on toggle buttons

### Requirement: Placeholder content

The app SHALL use placeholder images and third-party icons instead of copied assets.

#### Scenario: Placeholder images

- **WHEN** images are needed in the app
- **THEN** `https://picsum.photos/seed/elevate-<n>/<w>/<h>` URLs are used as deterministic placeholders

#### Scenario: Icons

- **WHEN** icons are needed in the app
- **THEN** icons are sourced from `lucide-react`

#### Scenario: No copied assets

- **WHEN** the app source code is inspected
- **THEN** no references to ColorLib, preview.colorlib.com, or copied CSS/images exist in `apps/elevate/`

### Requirement: Footer branding

The app footer SHALL include a Component Dock attribution link.

#### Scenario: Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to `https://www.componentdock.com/` is present
- **AND** the link text includes "Component Dock" branding
