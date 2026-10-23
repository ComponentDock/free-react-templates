# Template: Logistico (Logistics & Cargo Transport)

## Purpose

A Logistics & Cargo Transport template with navigation & header, hero section & quick, services grid and about / transport solution sections. Recreation of ColorLib "Thelogistico" (`https://colorlib.com/wp/template/thelogistico/`, preview: `https://preview.colorlib.com/theme/thelogistico/`), built as a modern, responsive React application with Vite, Tailwind CSS v4, and Lucide React icons.

## Design Tokens

- **Brand Primary**: `#f60` (Vibrant orange for buttons, badges, and primary accents)
- **Brand Dark**: `#071112` / `#000000` (Dark backgrounds, header text)
- **Secondary / Accent**: `#2845BA` (Blue accents)
- **Backgrounds**: `#fff` (cards/sections), `#fbf9ff` / `#f9f9ff` (gray/light sections)
- **Typography**: Font family `Roboto`, sans-serif
- **Button / Shape**: Sharp rectangular corners (`border-radius: 0px`), large padded CTA buttons (`padding: 32px 58px` or similar prominent padding)

## Requirements

### Feature 1: Navigation & Header

#### Scenario: User views sticky header with logo, navigation links (Home, About, Service, Blog, Contact), social icons, and phone contact number (`10 (87) 237 3784`).

- **GIVEN** the recreation is rendered
- **THEN** the User views sticky header with logo, navigation links (Home, About, Service, Blog, Contact), social icons, and phone contact number (`10 (87) 237 3784`). behaves as described by the fidelity notes

### Feature 2: Hero Section & Quick Offer Calculator

#### Scenario: User sees banner with background image, title "A TRULY GLOBAL SERVICE PROVIDER", subtitle "We make your cargo transport simple", and a "Explore Us" button.

- **GIVEN** the recreation is rendered
- **THEN** the User sees banner with background image, title "A TRULY GLOBAL SERVICE PROVIDER", subtitle "We make your cargo transport simple", and a "Explore Us" button. behaves as described by the fidelity notes

#### Scenario: User interacts with the "Get a quick offer" calculator form (truckload dropdown, commodity dropdown, distance input, and estimated cost display `$10,400.00`).

- **GIVEN** the recreation is rendered
- **THEN** the User interacts with the "Get a quick offer" calculator form (truckload dropdown, commodity dropdown, distance input, and estimated cost display `$10,400.00`). behaves as described by the fidelity notes

### Feature 3: Services Grid

#### Scenario: User views 4-column commercial cleaning / logistics service cards with icon, title, description, and arrow link buttons.

- **GIVEN** the recreation is rendered
- **THEN** the User views 4-column commercial cleaning / logistics service cards with icon, title, description, and arrow link buttons. behaves as described by the fidelity notes

### Feature 4: About / Transport Solution Sections (Visit One, Two, Three)

#### Scenario: User views professional transportation business details, interactive accordion for Road Transport / Sea Cargo, mission quote callout, and 3-step shipment control gallery cards.

- **GIVEN** the recreation is rendered
- **THEN** the User views professional transportation business details, interactive accordion for Road Transport / Sea Cargo, mission quote callout, and 3-step shipment control gallery cards. behaves as described by the fidelity notes

### Feature 5: Want To Work / CTA & Client Testimonial

#### Scenario: User views "Need Help? Get Free quote!" CTA banner and client testimonial carousel with video modal trigger.

- **GIVEN** the recreation is rendered
- **THEN** the User views "Need Help? Get Free quote!" CTA banner and client testimonial carousel with video modal trigger. behaves as described by the fidelity notes

### Feature 6: Latest News & Brand Logos

#### Scenario: User views latest blog posts / freight articles and partner brand logo carousel.

- **GIVEN** the recreation is rendered
- **THEN** the User views latest blog posts / freight articles and partner brand logo carousel. behaves as described by the fidelity notes

### Feature 7: Footer

#### Scenario: User views footer with quick links, solution links, support links, newsletter subscription form, social icons, and the mandatory Component Dock footer link.

- **GIVEN** the recreation is rendered
- **THEN** the User views footer with quick links, solution links, support links, newsletter subscription form, social icons, and the mandatory Component Dock footer link. behaves as described by the fidelity notes

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

## Verification checklist

- [ ] `npm run test:coverage` achieves 100% lines/functions/branches/statements
- [ ] All sections match 1:1 with ColorLib Thelogistico preview
- [ ] Footer links Component Dock (`https://www.componentdock.com/`)
- [ ] No reference to ColorLib in app code
- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] Navigation & Header — the User views sticky header with logo, navigation links (Home, About, Service, Blog, Contact), social icons, and phone contact number (`10 (87) 237 3784`). behaves as described…
- [ ] Hero Section & Quick Offer Calculator — the User sees banner with background image, title "A TRULY GLOBAL SERVICE PROVIDER", subtitle "We make your cargo transport simple", and a "Explore Us" button.…
- [ ] Services Grid — the User views 4-column commercial cleaning / logistics service cards with icon, title, description, and arrow link buttons. behaves as described by the fidelity notes
- [ ] About / Transport Solution Sections (Visit One, Two, Three) — the User views professional transportation business details, interactive accordion for Road Transport / Sea Cargo, mission quote callout…
- [ ] Want To Work / CTA & Client Testimonial — the User views "Need Help? Get Free quote!" CTA banner and client testimonial carousel with video modal trigger. behaves as described by the fidelity notes
- [ ] Latest News & Brand Logos — the User views latest blog posts / freight articles and partner brand logo carousel. behaves as described by the fidelity notes
