# Template: FreightFlow (Logistics & Freight Agency)

## Purpose

Recreation of ColorLib **Thelogistico** (`https://colorlib.com/wp/template/thelogistico/`), renamed to **FreightFlow** (`apps/freightflow`), serving as a modern logistics, cargo transport, and freight forwarding agency template built with React 19, Vite, Tailwind CSS 4, and TypeScript.

## Design Tokens & Styling

- **Primary Brand Color**: Vibrant Orange (`#FF6600`) for buttons, active states, badges, and accent headers.
- **Dark Neutral**: Deep Charcoal / Black (`#111111`, `#1E2125`) for footers and primary text.
- **Light Neutral**: Clean Light Gray (`#F8F8F8`, `#F6F6F6`) for section backgrounds.
- **Typography**: Roboto / sans-serif for clean readability and bold headings.
- **Radii**: Subtle or rounded buttons (`rounded-full`, `rounded-lg`).

## Gherkin Requirements & Scenarios

### Feature: Navbar & Navigation

- Scenario: User views header navigation
  - Given the FreightFlow app is loaded
  - When the user inspects the header
  - Then they should see the FreightFlow logo, navigation links (Home, About, Service, Blog, Contact), phone number (`+1 (800) 555-0199`), and social icons.

### Feature: Hero Section & Quick Quote

- Scenario: User views the hero banner and quick quote form
  - Given the user lands on the home page
  - When the hero section renders
  - Then it displays the heading "A TRULY GLOBAL SERVICE PROVIDER", subtitle "We make your cargo transport simple", an "Explore Us" CTA button, and a quick quote / distance calculator form.

### Feature: Core Services / Solutions Grid

- Scenario: User explores core transport services
  - Given the user scrolls to the services section
  - When the services cards render
  - Then they see 3-4 key freight services (Road Transport, Air Freight, Sea Cargo, Global Logistics Solutions) with interactive hover states and detail links.

### Feature: About & Interactive Tabs

- Scenario: User interacts with transport solution tabs
  - Given the user views the About / Solution section
  - When they click between Road Transport, Air Freight, and Sea Cargo tabs/accordions
  - Then the corresponding logistics capability details are displayed.

### Feature: Control & Milestone Features

- Scenario: User views shipment control metrics
  - Given the user inspects the shipment control banner
  - When the section renders
  - Then it showcases step-by-step logistics solutions ("01 Logistic Solution", "02 Supply Chain Control") with clear CTAs.

### Feature: Client Testimonials

- Scenario: User reads client feedback
  - Given the user views the Testimonials section
  - When the carousel or feedback cards render
  - Then client quotes and founder names are displayed clearly.

### Feature: Latest News & Blog

- Scenario: User browses recent freight insights
  - Given the user scrolls to the Latest News section
  - When the blog cards render
  - Then articles such as "Freight Transport in Alaska" and "Perishable Logistics: Cold Chain" are displayed with dates and read-more links.

### Feature: Footer & Branding

- Scenario: User inspects the footer
  - Given the user scrolls to the bottom of the page
  - When the footer renders
  - Then it displays Quick Links, Solution links, Support items, a Newsletter subscription form, social links, and a mandatory "Component Dock" footer link (`https://www.componentdock.com/`).

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest test coverage is 100% lines/functions/branches/statements
- [ ] App builds successfully (`npm run build`)
- [ ] Component Dock footer link present
- [ ] No mention of ColorLib in app code
