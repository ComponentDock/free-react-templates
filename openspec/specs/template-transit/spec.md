# Template: Transit (Logistics / Transport)

## Purpose

Recreation of ColorLib **Logistic** (`https://colorlib.com/wp/template/logistic/`), a modern and professional logistics and transport services website template based on Bootstrap 5.

- **New Name:** `transit`
- **Source Slug:** `logistic`
- **Preview URL:** `https://colorlib.com/wp/template/logistic/`
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons.

## Design Tokens (Captured from ColorLib Logistic reference)

- **Primary Color:** `#ff5e14` (Logistic Orange / Amber Accent)
- **Secondary Color:** `#1f2b6c` (Deep Navy Blue / Dark Header & Footer)
- **Neutral Dark:** `#111111` / `#222222` (Text and headings)
- **Neutral Light:** `#f4f5f8` / `#ffffff` (Backgrounds and cards)
- **Font Family:** `Inter`, `sans-serif` (Clean modern sans)
- **Border Radius:** `0.375rem` (rounded-md) / `0.5rem` (rounded-lg)
- **Button Shape:** Rounded rectangle with primary orange background and white text, uppercase lettering for major CTA elements.

## Gherkin Requirements & Scenarios

### Feature 1: Hero Banner & Navigation

- **As a** visitor looking for freight and logistics services,
- **I want** a clear top bar, sticky navigation, and a striking hero banner with CTA buttons,
- **So that** I can immediately understand the company offerings and request a quote.

#### Scenario: Navigation and Hero Display

- **Given** the user visits the Transit home page
- **When** the header and hero section load
- **Then** the top bar displays contact info (phone, email, hours) and social icons
- **And** the sticky navigation displays the brand logo and menu items (Home, About, Services, Tracking, Contact)
- **And** the hero banner shows a prominent headline about global logistics services, subtitle, and action buttons ("Explore Services", "Get a Quote").

### Feature 2: Services Section

- **As a** business client,
- **I want** to see the core transport and logistics services offered (Air Freight, Ocean Freight, Ground Shipping, Warehousing),
- **So that** I can choose the right transport solution for my cargo.

#### Scenario: Viewing Services Grid

- **Given** the user scrolls down to the Services section
- **When** the service cards render
- **Then** at least 4 core logistics services are displayed with icons, titles, short descriptions, and "Read More" links.

### Feature 3: About Us & Statistics Counter

- **As a** prospective customer,
- **I want** to learn about the company experience and key statistics (completed shipments, clients, branches, experts),
- **So that** I can trust their reliability and scale.

#### Scenario: Statistics Counter Display

- **Given** the user views the About section
- **When** the statistics counter row appears
- **Then** key metrics are shown with animated or static counts (e.g., 99% Satisfied Clients, 1200+ Delivered Goods, 50+ Global Branches).

### Feature 4: Tracking / Quote Calculator Section

- **As a** customer with active cargo,
- **I want** a shipment tracking input or instant quote calculator form,
- **So that** I can check my shipment status or estimate shipping costs.

#### Scenario: Submitting Quote Form

- **Given** the user navigates to the Request a Quote or Tracking section
- **When** they fill in cargo details (weight, destination, dimensions) and submit
- **Then** a confirmation message or estimated shipping breakdown is shown.

### Feature 5: Testimonials & Footer

- **As a** visitor,
- **I want** to read client testimonials and access footer links, copyright notice pointing to Component Dock,
- **So that** I have social proof and standard site navigation.

#### Scenario: Footer Attribution

- **Given** the user scrolls to the bottom of the page
- **When** the footer is rendered
- **Then** it displays company links, newsletter subscription, and copyright notice with a link to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] App builds successfully without TypeScript errors.
- [ ] All Vitest tests pass with 100% coverage.
- [ ] Responsive design verified across mobile, tablet, and desktop viewports.
- [ ] Footer contains the mandatory Component Dock attribution link.
