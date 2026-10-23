# Template: Homefront (Directory)

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

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/homefront/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/homefront/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] GHERKIN: Navbar renders with all links — Given** the page is rendered
- [ ] GHERKIN: Hero shows property cards with prices — Given** the page is rendered
- [ ] GHERKIN: Search form has all filter fields — Given** the page is rendered
- [ ] GHERKIN: Services section displays 4 features — Given** the page is rendered
- [ ] GHERKIN: Properties section shows property cards — Given** the page is rendered
- [ ] GHERKIN: Testimonials section renders quotes — Given** the page is rendered
- [ ] GHERKIN: Stats section shows counters — Given** the page is rendered
