# Template: FreightFlow (Logistics & Freight Agency)
<!-- prep-status: shipped-as=logistix -->
> **SHIPPED-UNDER** — the ColorLib `thelogistico` design this prep describes already
> ships as `apps/logistix` (<https://logistix.free.componentdock.com>).
> Do not scaffold `apps/freightflow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-logistix/spec.md`.

## Purpose

Recreation of ColorLib "Thelogistico" (`https://colorlib.com/wp/template/thelogistico/`), renamed to **FreightFlow** (`apps/freightflow`), serving as a modern logistics, cargo transport, and freight forwarding agency template built with React 19, Vite, Tailwind CSS 4, and TypeScript.

## Design Tokens & Styling

- **Primary Brand Color**: Vibrant Orange (`#FF6600`) for buttons, active states, badges, and accent headers.
- **Dark Neutral**: Deep Charcoal / Black (`#111111`, `#1E2125`) for footers and primary text.
- **Light Neutral**: Clean Light Gray (`#F8F8F8`, `#F6F6F6`) for section backgrounds.
- **Typography**: Roboto / sans-serif for clean readability and bold headings.
- **Radii**: Subtle or rounded buttons (`rounded-full`, `rounded-lg`).

## Requirements

### Feature: Navbar & Navigation

#### Scenario: Navbar & Navigation

- Scenario: User views header navigation
- **GIVEN** the FreightFlow app is loaded
- **WHEN** the user inspects the header
- **THEN** they should see the FreightFlow logo, navigation links (Home, About, Service, Blog, Contact), phone number (`+1 (800) 555-0199`), and social icons

### Feature: Hero Section & Quick Quote

#### Scenario: Hero Section & Quick Quote

- Scenario: User views the hero banner and quick quote form
- **GIVEN** the user lands on the home page
- **WHEN** the hero section renders
- **THEN** it displays the heading "A TRULY GLOBAL SERVICE PROVIDER", subtitle "We make your cargo transport simple", an "Explore Us" CTA button, and a quick quote / distance calculator form

### Feature: Core Services / Solutions Grid

#### Scenario: Core Services / Solutions Grid

- Scenario: User explores core transport services
- **GIVEN** the user scrolls to the services section
- **WHEN** the services cards render
- **THEN** they see 3-4 key freight services (Road Transport, Air Freight, Sea Cargo, Global Logistics Solutions) with interactive hover states and detail links

### Feature: About & Interactive Tabs

#### Scenario: About & Interactive Tabs

- Scenario: User interacts with transport solution tabs
- **GIVEN** the user views the About / Solution section
- **WHEN** they click between Road Transport, Air Freight, and Sea Cargo tabs/accordions
- **THEN** the corresponding logistics capability details are displayed

### Feature: Control & Milestone Features

#### Scenario: Control & Milestone Features

- Scenario: User views shipment control metrics
- **GIVEN** the user inspects the shipment control banner
- **WHEN** the section renders
- **THEN** it showcases step-by-step logistics solutions ("01 Logistic Solution", "02 Supply Chain Control") with clear CTAs

### Feature: Client Testimonials

#### Scenario: Client Testimonials

- Scenario: User reads client feedback
- **GIVEN** the user views the Testimonials section
- **WHEN** the carousel or feedback cards render
- **THEN** client quotes and founder names are displayed clearly

### Feature: Latest News & Blog

#### Scenario: Latest News & Blog

- Scenario: User browses recent freight insights
- **GIVEN** the user scrolls to the Latest News section
- **WHEN** the blog cards render
- **THEN** articles such as "Freight Transport in Alaska" and "Perishable Logistics: Cold Chain" are displayed with dates and read-more links

### Feature: Footer & Branding

#### Scenario: Footer & Branding

- Scenario: User inspects the footer
- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer renders
- **THEN** it displays Quick Links, Solution links, Support items, a Newsletter subscription form, social links, and a mandatory "Component Dock" footer link (`https://www.componentdock.com/`)

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest test coverage is 100% lines/functions/branches/statements
- [ ] App builds successfully (`npm run build`)
- [ ] Component Dock footer link present
- [ ] No mention of ColorLib in app code
- [ ] Navbar & Navigation — they should see the FreightFlow logo, navigation links (Home, About, Service, Blog, Contact), phone number (`+1 (800) 555-0199`), and social icons
- [ ] Hero Section & Quick Quote — it displays the heading "A TRULY GLOBAL SERVICE PROVIDER", subtitle "We make your cargo transport simple", an "Explore Us" CTA button, and a quick quote / distance…
- [ ] Core Services / Solutions Grid — they see 3-4 key freight services (Road Transport, Air Freight, Sea Cargo, Global Logistics Solutions) with interactive hover states and detail links
- [ ] About & Interactive Tabs — the corresponding logistics capability details are displayed
- [ ] Control & Milestone Features — it showcases step-by-step logistics solutions ("01 Logistic Solution", "02 Supply Chain Control") with clear CTAs
- [ ] Client Testimonials — client quotes and founder names are displayed clearly
- [ ] Latest News & Blog — articles such as "Freight Transport in Alaska" and "Perishable Logistics: Cold Chain" are displayed with dates and read-more links
