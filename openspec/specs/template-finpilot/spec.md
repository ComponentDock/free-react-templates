# Template: FinPilot (Business Consulting)

## Purpose

Recreation of ColorLib "Busicol" — a business consulting landing page with hero slider, service cards, about section, stats counters, portfolio gallery, feature highlights, financial solution section, testimonials, and CTA band. Preview URL: https://preview.colorlib.com/theme/busicol/. Source slug: `busicol`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Single-page landing template.

## Requirements

### Requirement: Page Load and Layout

The template SHALL display a full-page business consulting landing with a sticky navbar, hero section, and multiple content sections.

#### Scenario: Page renders correctly

- **WHEN** the user loads the FinPilot page
- **THEN** the document title is "FinPilot — Business Consulting Template"
- **AND** a sticky navigation bar is displayed at the top
- **AND** a hero section with headline and CTA buttons is shown
- **AND** the page scrolls through services, about, counters, gallery, features, financial solution, testimonials, and CTA sections
- **AND** a footer with Component Dock branding is displayed

### Requirement: Navbar

The navbar SHALL display a logo, navigation links, search button, and "Get a Quote" CTA.

#### Scenario: Navbar renders correctly

- **WHEN** the page loads
- **THEN** the "FinPilot" logo is visible in the navbar
- **AND** navigation links (Home, About, Services, Blog, Pages, Contact) are shown
- **AND** a "Get a Quote" button is visible
- **AND** a search button with aria-label "Search" is present
- **AND** social icons (LinkedIn, Facebook, Google+) are in the top bar
- **AND** contact info (email, phone) is in the top bar

#### Scenario: Navbar becomes sticky on scroll

- **WHEN** the user scrolls down past 60px
- **THEN** the navbar gains a white background with shadow

### Requirement: Hero Section

The hero SHALL display a full-width banner with headline and two CTA buttons.

#### Scenario: Hero renders correctly

- **WHEN** the hero section loads
- **THEN** the headline "Grow Big with FinPilot Business" is displayed
- **AND** a subtitle paragraph is shown
- **AND** an "Our Services" button is visible
- **AND** a "See How it Works" button is visible

### Requirement: Services Section

The services section SHALL display 3 service cards with icons and descriptions.

#### Scenario: Services render correctly

- **WHEN** the services section loads
- **THEN** the heading "Explore Our Solutions" is displayed
- **AND** three service cards are shown: Invoicing, Business Growth, Problem Solving
- **AND** each card has an icon, title, and description text

### Requirement: About Section

The about section SHALL display a split layout with image and text content.

#### Scenario: About renders correctly

- **WHEN** the about section loads
- **THEN** the heading "The Largest Business Expert" is displayed
- **AND** a description paragraph is shown
- **AND** three bullet points are listed
- **AND** an "About Us" button is visible
- **AND** an image with alt text "About FinPilot" is displayed

### Requirement: Counters Section

The counters section SHALL display 3 statistics with labels.

#### Scenario: Counters render correctly

- **WHEN** the counters section loads
- **THEN** "520+" Total Projects is displayed
- **AND** "244" Ongoing Projects is displayed
- **AND** "95%" Job Success is displayed

### Requirement: Gallery Section

The gallery section SHALL display 5 portfolio items with hover overlays.

#### Scenario: Gallery renders correctly

- **WHEN** the gallery section loads
- **THEN** the heading "Our Recent Works" is displayed
- **AND** 5 gallery items are shown
- **AND** a "More Works" button is visible

### Requirement: Features Section

The features section SHALL display 3 feature highlights on a dark background.

#### Scenario: Features render correctly

- **WHEN** the features section loads
- **THEN** three features are shown: Unlimited Control, Rapid Growth, Problem Solving
- **AND** each feature has an icon, title, and description

### Requirement: Financial Solution Section

The financial solution section SHALL display a split layout with text and image.

#### Scenario: Financial solution renders correctly

- **WHEN** the financial solution section loads
- **THEN** the heading "Gives you the best Financial solution for business" is displayed
- **AND** a description paragraph is shown
- **AND** an image is displayed

### Requirement: Testimonials Section

The testimonials section SHALL display a carousel of client quotes with navigation.

#### Scenario: Testimonials render correctly

- **WHEN** the testimonials section loads
- **THEN** the heading "What Our Clients Say" is displayed
- **AND** a testimonial quote is shown
- **AND** the author name and role are displayed

#### Scenario: Testimonial navigation works

- **WHEN** the user clicks the next button
- **THEN** the next testimonial is displayed
- **WHEN** the user clicks the previous button
- **THEN** the previous testimonial is displayed
- **WHEN** the user is on the last testimonial and clicks next
- **THEN** the carousel wraps to the first testimonial
- **WHEN** the user is on the first testimonial and clicks previous
- **THEN** the carousel wraps to the last testimonial

### Requirement: CTA Section

The CTA section SHALL display a call-to-action band with heading and button.

#### Scenario: CTA renders correctly

- **WHEN** the CTA section loads
- **THEN** the heading "Do you Have any Project?" is displayed
- **AND** a "Contact Us" button is visible

### Requirement: Footer

The footer SHALL display brand info, navigation links, and Component Dock attribution.

#### Scenario: Footer renders correctly

- **WHEN** the footer loads
- **THEN** the "FinPilot" brand name is displayed
- **AND** a "Component Dock" link pointing to https://www.componentdock.com/ is present
- **AND** four columns of content are shown (brand, services, useful links, address)
- **AND** social icons (Facebook, Twitter, Instagram) are displayed
