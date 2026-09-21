# Template: Aurae (Yoga & Wellness Landing)

## Purpose

Aurae is a single-page yoga/wellness landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ahana" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a warm-toned yoga page with coral/salmon accents: a hero
slider ("Get slim and toned with yoga", "Reduce your stress"), a welcome
section with 3 feature cards, popular classes with trainer info, trainer
profiles, testimonials, upcoming events, 4-tier pricing, a signup CTA,
and a footer with company links and Component Dock attribution. Aurae
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Ahana" — free yoga website template
  (source: https://colorlib.com/wp/template/ahana/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/ahana/`
  (HTTP 200, 31KB) + stylesheet `css/style.css` (72KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot (`ahana-free-template.jpg`)
  confirms the visual design (warm coral tones, serif headings).
- **Section order (1:1):**
  1. Header: logo + nav (Home, About, Classes, Trainers, Events, Pricing, Contact) + CTA.
  2. Hero: "Get slim and toned with yoga" + "Reduce your stress" slider.
  3. About: "Welcome to Aurae" + 3 feature cards (Full Rejuvenation, Extension of Spring, Against Aging).
  4. Classes: "Popular Classes" + 3 class cards with trainer names.
  5. Trainers: 3 trainer profiles with dark overlay cards.
  6. Testimonials: Review slider with star ratings.
  7. Events: "Upcoming Events" + 3 event cards.
  8. Pricing: 4 tiers (Beginner $59, Intermediate $99, Advanced $159, Professional $199).
  9. Signup: CTA "Sign Up for Our Classes" + email form.
  10. Footer: Company, Quick Links, About Us, Open Time, Component Dock link.
- **Design tokens:**
  - Primary brand: `#f2786f` (coral/salmon)
  - Gradient: `linear-gradient(145deg, #fdb07d 0%, #f65d5d 100%)`
  - Light section bg: `#f9f2f0`
  - Heading font: "Playfair Display" (serif)
  - Body font: "Open Sans" (sans-serif)

## Requirements

### Requirement: Navbar with navigation and mobile menu

The navbar SHALL display the Aurae logo, desktop navigation links (Home, About, Classes, Trainers, Events, Pricing, Contact), a "Join Now" CTA button, and a mobile hamburger menu.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the Aurae logo and all 7 navigation links

#### Scenario: Mobile menu toggles on hamburger click

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation menu opens with all links

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a link is clicked
- **THEN** the mobile menu closes

#### Scenario: Mobile menu closes on resize to desktop

- **WHEN** the mobile menu is open and the window resizes to 1024px or wider
- **THEN** the mobile menu closes

### Requirement: Hero section with yoga headline and CTAs

The hero section SHALL display a yoga headline, descriptive subtext, and CTA buttons with a background image.

#### Scenario: Hero renders headline and CTAs

- **WHEN** the page loads
- **THEN** the hero shows "Get slim and toned with yoga" heading, descriptive text, and "Explore Classes" / "Learn More" buttons

### Requirement: About section with feature cards

The about section SHALL display "Welcome to Aurae" heading and 3 feature cards (Full Rejuvenation, Extension of Spring, Against Aging).

#### Scenario: About section renders all features

- **WHEN** the page loads
- **THEN** the about section shows the welcome heading and all 3 feature cards with explore-more links

### Requirement: Popular classes with trainer info

The classes section SHALL display 3 class cards (Artistic Yoga, Traditional Hatha, Yoga Therapy) with trainer names and book-now links.

#### Scenario: Classes section renders all cards

- **WHEN** the page loads
- **THEN** all 3 class cards are shown with trainer names and book-now links

### Requirement: Trainers section with profiles

The trainers section SHALL display 3 trainer profiles with name, role, certificate, and contact links.

#### Scenario: Trainers section renders all profiles

- **WHEN** the page loads
- **THEN** all 3 trainer profiles are shown with contact links

### Requirement: Testimonials slider

The testimonials section SHALL display a review with quote, author, role, star rating, and navigation buttons.

#### Scenario: Testimonial navigation works

- **WHEN** the user clicks next/prev buttons
- **THEN** the displayed testimonial changes accordingly

### Requirement: Events section

The events section SHALL display 3 upcoming event cards with title, date, and participant count.

#### Scenario: Events section renders all cards

- **WHEN** the page loads
- **THEN** all 3 event cards are shown

### Requirement: Pricing plans

The pricing section SHALL display 4 tiers (Beginner $59, Intermediate $99, Advanced $159, Professional $199) with features and get-started buttons.

#### Scenario: Pricing section renders all tiers

- **WHEN** the page loads
- **THEN** all 4 pricing tiers are shown with prices and feature lists

### Requirement: Signup form with validation

The signup section SHALL display a CTA heading, email input, and submit button with validation.

#### Scenario: Valid email shows success

- **WHEN** a valid email is entered and submitted
- **THEN** a success message is shown

#### Scenario: Invalid email shows error

- **WHEN** an invalid email is entered and submitted
- **THEN** an error message is shown

### Requirement: Footer with Component Dock link

The footer SHALL display company info, quick links, about links, open time, contact info, and a link to Component Dock.

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer shows all sections including a link to https://www.componentdock.com/
