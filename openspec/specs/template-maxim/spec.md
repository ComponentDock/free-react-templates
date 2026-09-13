# template-maxim

## Purpose

Recreate the ColorLib Neutral law firm template as "Maxim" — a single-page
React website with hero, counter stats, about section, testimonials carousel,
vertical-tabbed practice areas, attorney grid, blog cards, contact form, and
footer. Built with React 19, Tailwind CSS 4, and TypeScript.

Source: https://colorlib.com/wp/template/neutral/

## Requirements

### Requirement: Navigation

The template SHALL display a dark navbar with the brand "Maxim" and navigation links.

#### Scenario: Navbar renders all links

- **GIVEN** the page loads
- **WHEN** the user views the navbar
- **THEN** it shows "Maxim" brand with links: Home, About, Practice Areas, Attorneys, Blog, Contact, and a "Request a Quote" CTA button

#### Scenario: Mobile menu opens and closes

- **GIVEN** the navbar is rendered on mobile
- **WHEN** the user taps the hamburger button
- **THEN** the mobile navigation drawer opens
- **WHEN** the user taps a link or Escape
- **THEN** the mobile menu closes

### Requirement: Hero Section

The template SHALL display a full-height hero with background image, dark overlay, headline, subtitle, and CTA button.

#### Scenario: Hero renders headline and CTA

- **GIVEN** the hero section loads
- **WHEN** viewed
- **THEN** it displays "Reputation, Respect, Result" heading with a "Request a Quote" button

### Requirement: Counter Stats

The template SHALL display 4 animated stat cards showing firm metrics.

#### Scenario: Counter stats render correctly

- **GIVEN** the counter section loads
- **WHEN** viewed
- **THEN** it shows 4 cards: 50 Years Experience, 10000 Trusted Clients, 564 Qualified Lawyers, 300 Honors & Awards

### Requirement: About Section

The template SHALL display a two-column about layout with image and welcome text.

#### Scenario: About section renders

- **GIVEN** the about section loads
- **WHEN** viewed
- **THEN** it shows a two-column layout with image and "Welcome to Maxim A Law Firm" heading

### Requirement: Testimonials

The template SHALL display a carousel of client testimonials with prev/next navigation and dot indicators.

#### Scenario: Testimonials carousel navigation

- **GIVEN** the testimonials section loads
- **WHEN** the user clicks next/prev or a dot indicator
- **THEN** the displayed testimonial changes

### Requirement: Practice Areas

The template SHALL display 10 law practice areas in a vertical tabbed layout.

#### Scenario: Tab switching

- **GIVEN** the practice areas section loads
- **WHEN** the user clicks a different tab
- **THEN** the corresponding content panel is shown
- **AND** "Family Law" tab is active by default

### Requirement: Attorneys

The template SHALL display 4 attorney cards in a grid with photo, name, role, and social links.

#### Scenario: Attorneys render

- **GIVEN** the attorneys section loads
- **WHEN** viewed
- **THEN** it shows 4 attorney cards with social media icons

### Requirement: Blog

The template SHALL display 3 blog post cards with image, date, title, and excerpt.

#### Scenario: Blog posts render

- **GIVEN** the blog section loads
- **WHEN** viewed
- **THEN** it shows 3 blog post cards

### Requirement: Contact Form

The template SHALL display a contact form with name, email, subject, message fields and office info sidebar.

#### Scenario: Form validation

- **GIVEN** the contact form loads
- **WHEN** the user submits without filling fields
- **THEN** validation errors appear for all required fields

#### Scenario: Successful submission

- **GIVEN** valid data is entered
- **WHEN** the form is submitted
- **THEN** a success message appears

### Requirement: Footer

The template SHALL display a footer with about text, navigation links, social icons, and a copyright bar linking to Component Dock.

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer loads
- **WHEN** viewed
- **THEN** it contains a link to https://www.componentdock.com/
