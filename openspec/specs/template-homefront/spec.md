# Spec — Homefront

> Recreation of ColorLib [Royalestate](https://colorlib.com/wp/template/royalestate/)
> Preview: https://preview.colorlib.com/theme/royalestate/

## Purpose

Homefront is a directory and listings landing page with a navbar, hero, search, services, recent properties, testimonials, stat counters and footer. It recreates the ColorLib **Royalestate** design (https://colorlib.com/wp/template/royalestate/, preview: https://preview.colorlib.com/theme/royalestate/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Design tokens

- Primary: `#1e3a5f` (deep navy blue)
- Accent: `#c8a951` (warm gold)
- Dark bg: `#1a1a2e` (near-black navy)
- Light bg: `#f8f9fa`
- Font: Poppins (Google Fonts)
- Buttons: rounded, bg-primary with white text, hover darkens
- Card style: white bg, subtle shadow, rounded corners

## Sections (in order)

1. **Navbar** — Logo "Homefront", nav links (Home, Property, Agents, About, Blog, Contact), Sign-In / Sign-Up buttons
2. **Hero** — Property card carousel with images, address, price, description, "View Details" CTA
3. **Search** — Advanced property search form with filters: keyword, location, property type, status, agents, beds, bathrooms, price range
4. **Services** — 4-column feature grid with icons: Find Places, Agents With Experience, Buy & Rent, Making Money
5. **Recent Properties** — Property listing cards with sale/rent badge, address, type, price
6. **Testimonials** — Client quotes with avatars, names, titles, carousel
7. **Stats** — Counter section (properties, clients, awards, agents) with parallax background
8. **CTA** — Parallax newsletter signup with email input
9. **Footer** — Logo, description, nav links (Buy, Sell), contact info, copyright with Component Dock link

## Requirements

### Feature: Spec

#### Scenario: GHERKIN: Navbar renders with all links

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Navbar renders with all links

#### Scenario: GHERKIN: Hero shows property cards with prices

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Hero shows property cards with prices

#### Scenario: GHERKIN: Search form has all filter fields

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Search form has all filter fields

#### Scenario: GHERKIN: Services section displays 4 features

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Services section displays 4 features

#### Scenario: GHERKIN: Properties section shows property cards

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Properties section shows property cards

#### Scenario: GHERKIN: Testimonials section renders quotes

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Testimonials section renders quotes

#### Scenario: GHERKIN: Stats section shows counters

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Stats section shows counters

#### Scenario: GHERKIN: Footer links to componentdock.com

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GHERKIN: Footer links to componentdock.com
