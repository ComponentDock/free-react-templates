# Template: Airy (Business Agency)

Recreation of ColorLib "Whitespace" (https://colorlib.com/wp/template/whitespace/).

## Purpose

Airy is a multi-section business/agency landing page template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Whitespace" design
(see TEMPLATES.md), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design is a professional business/agency site with a dark hero,
services section, animated counters, project gallery, testimonials carousel,
pricing plans, and a dark footer. Airy follows the same structure and uses
Google Fonts (Poppins), picsum.photos placeholders, and lucide-react icons.

Airy lives in `apps/airy` and uses shared components from `packages/ui`
(Button, cn).

## Design reference (replication findings)

- **Source:** ColorLib "Whitespace" — https://colorlib.com/wp/template/whitespace/
- **Source slug:** `whitespace`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/whitespace/ — **HTTP 200**, 39,862 B, fetched 2026-10-23 (page `<title>`: "Whitespace | Business Strategy, Data and Design Studio"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/whitespace/css/style.min.css?v=3.0.0`, fetched 2026-10-23): brand `#fcd307`, `#78d5ef`, `#dc3545`, `#28a745`; dominant neutrals `#6c757d`, `#343a40`, `#f8f9fa`; type Poppins. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/airy` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed top navigation bar with the brand name "Airy",
links to all sections (Home, About, Work, Pricing, Blog, Contact), and a
mobile hamburger menu toggle.

#### Scenario: Desktop navbar

- **GIVEN** the Airy page is rendered on a desktop viewport
- **WHEN** the page loads
- **THEN** the navbar SHALL display the brand "Airy" and all six navigation links
- **AND** the hamburger menu button SHALL be hidden

#### Scenario: Mobile navbar toggle

- **GIVEN** the Airy page is rendered on a mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu SHALL become visible
- **AND** clicking a nav link SHALL close the mobile menu

### Requirement: Hero section

The system SHALL render a full-width hero section with a split layout: text
on the left (subheading, headline, description, CTA button) and an image
on the right.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL display the subheading "Welcome"
- **AND** the hero SHALL display the headline "We Help to Build You the Product"
- **AND** the hero SHALL display a "Get in touch" CTA button linking to #contact

### Requirement: About section

The system SHALL render an about section with a split layout: a services list
on the left and an image on the right.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the about section SHALL display the heading "What We Can Do for You"
- **AND** it SHALL list three services: Market Research, Financial Services, Online Marketing

### Requirement: Services grid

The system SHALL render a 4-column services grid with icons, titles, and
descriptions.

#### Scenario: Services display

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** the services grid SHALL display four items: Business Strategy, Data Analysis, Graphic Design, Creative
- **AND** each item SHALL have an icon, a title, and a description

### Requirement: Counter section

The system SHALL render a dark-background counter section with animated
stat counters.

#### Scenario: Counter stats

- **GIVEN** the counter section is rendered
- **WHEN** the page loads
- **THEN** the counter section SHALL display the heading "Interesting Facts"
- **AND** it SHALL show four stats: 2000 Done Works, 300 Happy Customers, 100 Coffee, 1000 Work Hours

### Requirement: Projects gallery

The system SHALL render a project gallery with image cards in a masonry-style
grid, each with hover overlay showing title and category.

#### Scenario: Projects display

- **GIVEN** the projects section is rendered
- **WHEN** the page loads
- **THEN** the projects section SHALL display the heading "Recent Projects"
- **AND** it SHALL render nine project cards

### Requirement: Testimonials carousel

The system SHALL render an auto-rotating testimonials carousel with avatar,
quote, name, and role.

#### Scenario: Testimonials content

- **GIVEN** the testimony section is rendered
- **WHEN** the page loads
- **THEN** the testimony section SHALL display the heading "What Our Clients Say"
- **AND** it SHALL show the first testimonial with name, role, and quote
- **AND** navigation buttons SHALL allow cycling through testimonials

### Requirement: Pricing section

The system SHALL render a 4-column pricing grid with plan names, prices,
feature lists, and CTA buttons.

#### Scenario: Pricing display

- **GIVEN** the pricing section is rendered
- **WHEN** the page loads
- **THEN** the pricing section SHALL display four plans: Free ($0), Startup ($19), Premium ($49), Pro ($99)
- **AND** each plan SHALL have a feature list and a "Get Started" button

### Requirement: Footer

The system SHALL render a dark-background footer with brand description,
useful links, quick links, contact information, and a Component Dock
attribution link.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL display the brand name "Airy"
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"
- **AND** it SHALL show social media icons, navigation links, and contact info

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/airy/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/airy/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — the navbar SHALL display the brand "Airy" and all six navigation links
- [x] Hero section — the hero SHALL display the subheading "Welcome"
- [x] About section — the about section SHALL display the heading "What We Can Do for You"
- [ ] Services grid — the services grid SHALL display four items: Business Strategy, Data Analysis, Graphic Design, Creative
- [x] Counter section — the counter section SHALL display the heading "Interesting Facts"
- [x] Projects gallery — the projects section SHALL display the heading "Recent Projects"
- [x] Testimonials carousel — the testimony section SHALL display the heading "What Our Clients Say"
- [ ] Pricing section — the pricing section SHALL display four plans: Free ($0), Startup ($19), Premium ($49), Pro ($99)
