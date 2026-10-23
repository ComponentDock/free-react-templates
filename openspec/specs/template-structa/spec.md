# Template: Structa (Construction Company)

> Recreation of ColorLib "Consto" — https://colorlib.com/wp/template/consto/
> Preview: https://preview.colorlib.com/theme/consto/

## Purpose

Structa is a construction company template with a navbar, hero, about band, services, projects, testimonials, contact and footer. It recreates the ColorLib **Consto** design (https://colorlib.com/wp/template/consto/, preview: https://preview.colorlib.com/theme/consto/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

Structa is a construction company landing page template with a bold orange
brand palette, dark purple accent sections, and Raleway typography. The design
features a hero slider, about section, services grid, project portfolio,
testimonials, contact form, and a 4-column footer.

## Design Tokens (extracted from preview CSS)

| Token      | Value     | Usage                             |
| ---------- | --------- | --------------------------------- |
| brand      | `#FF5E14` | Primary orange — buttons, accents |
| brand-dark | `#E5520F` | Hover state for brand elements    |
| dark       | `#2D0A31` | Dark purple section backgrounds   |
| dark-light | `#3A1240` | Lighter variant of dark bg        |
| paper      | `#FFFFFF` | White section backgrounds         |
| mist       | `#646D77` | Body text color                   |
| heading    | `#000000` | Heading text color                |
| font-sans  | Raleway   | All text                          |

## Sections (in order)

1. **Navbar** — Sticky header with logo ("Structa" + orange dot), address
   ("78/A, Green Lane, New York"), navigation links (Home, About, Service,
   Project, Blog, Contact), phone number CTA, mobile hamburger menu.

2. **Hero** — Full-width hero with dark overlay on background image. Heading:
   "Experienced Construction Solution". Subtext about the company. CTA button:
   "Our Services". Right sidebar: "Explore Our Latest Projects" with
   "Explore Now" link.

3. **About** — Two-column layout. Left: large image. Right: section title
   "Complete solution of large projects", descriptive paragraph, "Learn More"
   button.

4. **Services** — Dark purple background. Heading: "Services we provide". CTA:
   "Get Free Quote". Three service cards in a row: General Contracting,
   Project Planning, Interior Design — each with an icon and description.

5. **Projects** — White background. Heading: "Projects we have Done". Three
   project cards with images, titles, and "View Project" buttons.

6. **MoreCTA** — Dark purple background. "Want to build something great?"
   heading with "Contact Us" button.

7. **Testimonials** — Carousel of testimonial cards with avatar, name, role,
   and quote text. Previous/Next navigation.

8. **Contact** — Form section with fields: name, email, subject (select
   dropdown), message (textarea), and "Send Message" submit button. Client-side
   validation.

9. **BannerCTA** — "Any help needed?" section with "Contact Us" button on
   dark background.

10. **Footer** — 4-column layout:
    - Column 1: Logo, description, phone, email, social icons
    - Column 2: Navigation links
    - Column 3: Services links
    - Column 4: Newsletter signup with email validation
    - Bottom bar: Copyright + "Made with Component Dock" link

## Requirements

### Feature: Navbar

#### Scenario: The navbar is visible with logo and nav links

- **Given** the page loads,
- **When** the Navbar is inspected
- **Then** the navbar is visible with logo and nav links

#### Scenario: The navbar becomes sticky with white bg

- **Given** the user scrolls down,
- **When** the Navbar is inspected
- **Then** the navbar becomes sticky with white bg

#### Scenario: The mobile nav opens

- **Given** the user clicks the mobile menu button,
- **When** the Navbar is inspected
- **Then** the mobile nav opens

#### Scenario: The nav closes

- **Given** the mobile nav is open and user clicks a link,
- **When** the Navbar is inspected
- **Then** the nav closes

### Feature: Hero

#### Scenario: The hero heading and CTA are visible

- **Given** the page loads,
- **When** the Hero is inspected
- **Then** the hero heading and CTA are visible

#### Scenario: It navigates to #services

- **Given** the user clicks "Our Services",
- **When** the Hero is inspected
- **Then** it navigates to #services

### Feature: About

#### Scenario: The about heading and image are visible

- **Given** the page loads,
- **When** the About is inspected
- **Then** the about heading and image are visible

#### Scenario: The button is clickable

- **Given** the user clicks "Learn More",
- **When** the About is inspected
- **Then** the button is clickable

### Feature: Services

#### Scenario: Three service cards are visible

- **Given** the page loads,
- **When** the Services is inspected
- **Then** three service cards are visible

#### Scenario: Each card has a title and description

- **Given** the section renders,
- **When** the Services is inspected
- **Then** each card has a title and description

### Feature: Projects

#### Scenario: Three project cards are visible

- **Given** the page loads,
- **When** the Projects is inspected
- **Then** three project cards are visible

#### Scenario: The button is clickable

- **Given** the user clicks "View Project",
- **When** the Projects is inspected
- **Then** the button is clickable

### Feature: MoreCTA

#### Scenario: The CTA heading and button are visible

- **Given** the page loads,
- **When** the MoreCTA is inspected
- **Then** the CTA heading and button are visible

### Feature: Testimonials

#### Scenario: At least one testimonial is visible

- **Given** the page loads,
- **When** the Testimonials is inspected
- **Then** at least one testimonial is visible

#### Scenario: The testimonial changes

- **Given** the user clicks next/prev,
- **When** the Testimonials is inspected
- **Then** the testimonial changes

### Feature: Contact

#### Scenario: The form fields are visible

- **Given** the page loads,
- **When** the Contact is inspected
- **Then** the form fields are visible

#### Scenario: Validation errors appear

- **Given** the user submits empty,
- **When** the Contact is inspected
- **Then** validation errors appear

#### Scenario: The form submits

- **Given** the user fills all fields correctly,
- **When** the Contact is inspected
- **Then** the form submits

### Feature: BannerCTA

#### Scenario: "Any help needed?" text and CTA are visible

- **Given** the page loads,
- **When** the BannerCTA is inspected
- **Then** "Any help needed?" text and CTA are visible

### Feature: Footer

#### Scenario: All 4 footer columns are visible

- **Given** the page loads,
- **When** the Footer is inspected
- **Then** all 4 footer columns are visible

#### Scenario: "Made with Component Dock" links to

- **Given** the user views the footer,
- **When** the Footer is inspected
- **Then** "Made with Component Dock" links to

#### Scenario: Error shows

- **Given** the newsletter form,
- **When** user enters invalid email,
- **Then** error shows

#### Scenario: Success message shows

- **Given** the newsletter form,
- **When** user enters valid email,
- **Then** success message shows

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

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/structa/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/structa/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
