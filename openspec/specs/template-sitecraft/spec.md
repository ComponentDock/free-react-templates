---
name: template-sitecraft
description: >
  Recreation of ColorLib "Complex" (https://colorlib.com/wp/template/complex/)
  as a construction company landing page template named "Sitecraft".
  Golden-amber brand accents, Poppins typography, parallax sections,
  services tabs, project gallery, team accordion, testimonials, and newsletter.
design_tokens:
  brand_color: '#F7B633'
  ink: '#111827'
  surface: '#f5f5f5'
  font_family: 'Poppins (Google Fonts)'
  button_radius: '0.375rem'
  dark_mode: 'class-based (dark variant)'
---

# Template: Sitecraft (Construction Company Landing Page)

## Purpose

Sitecraft is a construction company landing page. It recreates the ColorLib **Complex** design (https://colorlib.com/wp/template/complex/, preview: https://preview.colorlib.com/theme/complex/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Overview

A free React template recreating the ColorLib "Complex" construction company
landing page under the name "Sitecraft". The design features a golden-amber
brand accent on clean white/whitesmoke backgrounds with Poppins typography.
Sections include a hero slider, services tabs and grid, animated counters,
a project gallery, team section with accordion, client testimonials,
a newsletter subscription form, and a multi-column footer.

## Source

- ColorLib slug: `complex`
- Preview URL: https://preview.colorlib.com/theme/complex/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/complex-free-template.jpg

## Design Tokens

| Token       | Value     | Usage                              |
| ----------- | --------- | ---------------------------------- |
| brand       | `#F7B633` | Nav active/hover, buttons, accents |
| ink         | `#111827` | Headings, dark text                |
| surface     | `#f5f5f5` | Body background                    |
| font-family | Poppins   | All text (weights 300–700)         |

## Sections (in order)

### 1. Navbar

- Logo: "Sitecraft" (bold, uppercase, brand color)
- Nav links: Home, Projects, Services, About, Contact
- Sticky top, white background, dark text, brand-color hover

### 2. Hero

- Full-width section with parallax-style background image
- Dark overlay for contrast
- Heading: "Our Obsession Is Distinctive Interiors"
- Subheading: "Providing All Kinds of Construction Services"
- White text, centered

### 3. Services Tabs (What We Offer)

- Three tabbed panels: Interior Design, Architecture, Building Modeling
- Each panel: split layout with image (left) + description + bullet list (right)
- Active tab highlighted with brand color

### 4. Services Grid

- 6 service cards in a 3-column grid
- Each: icon (lucide-react), title, short description
- Services: General Constructing, Building Modeling, Design Build,
  Construction Services, Pre-Construction Design, Construction Management

### 5. Counters

- Parallax background with dark overlay
- 4 stat counters: Projects (1,539), Employees (3,653),
  Constructors (5,987), Partners (3,999)
- Icon + number + label per stat

### 6. Projects Gallery

- Heading: "Our Projects"
- 6 project cards in an asymmetric grid (4+8, 6+6, 8+4 layout)
- Each: image with hover overlay + title
- Projects: Apartment Interior, Office Space, Condo Building,
  Kitchen Interior, Commercial Building, Hotel Building

### 7. Team Section

- Parallax background with dark overlay
- Heading: "Our Team"
- Split layout: 4 team member cards (left) + accordion (right)
- Members: Ian Moore (Electrician), Jack Clark (Engineer),
  Kiven Lewis (Architect), Charles Scott (Assistant Engineer)
- Accordion: "Who We Are", "What We Do", "Why Choose Us"

### 8. Testimonials

- Heading: "Client Says"
- 3 testimonial slides with avatar, name, and quote
- Clients: Andrew Field, Mark Bubble, Adam Smith

### 9. Newsletter

- Heading: "Subscribe Newsletter"
- Email input + "Subscribe Now" button (brand color)

### 10. Footer

- Contact info bar (address, email/website, phone)
- 4-column grid: About + social icons, Information links, Instagram grid, Contact Info
- Bottom bar: copyright + "More templates at Component Dock" link

## Requirements

### Feature: Navbar renders all sections

#### Scenario: GIVEN the page loads

- **Given** the page is rendered
- **When** the Navbar renders all sections is inspected
- **Then** GIVEN the page loads

#### Scenario: THEN the navbar displays "Sitecraft" logo

- **Given** the page is rendered
- **When** the Navbar renders all sections is inspected
- **Then** THEN the navbar displays "Sitecraft" logo

#### Scenario: AND nav links: Home, Projects, Services, About, Contact are visible

- **Given** the page is rendered
- **When** the Navbar renders all sections is inspected
- **Then** AND nav links: Home, Projects, Services, About, Contact are visible

### Feature: Hero section displays correctly

#### Scenario: GIVEN the page loads

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GIVEN the page loads

#### Scenario: THEN the hero heading "Our Obsession Is Distinctive Interiors" is…

- **Given** the page is rendered
- **When** the page is inspected
- **Then** THEN the hero heading "Our Obsession Is Distinctive Interiors" is visible

#### Scenario: AND the subheading "Providing All Kinds of Construction Services" is…

- **Given** the page is rendered
- **When** the page is inspected
- **Then** AND the subheading "Providing All Kinds of Construction Services" is visible

### Feature: Services tabs switch content

#### Scenario: GIVEN the services tabs section is visible

- **Given** the page is rendered
- **When** the Services tabs switch content is inspected
- **Then** GIVEN the services tabs section is visible

#### Scenario: WHEN the user clicks the "Architecture" tab

- **Given** the page is rendered
- **When** the Services tabs switch content is inspected
- **Then** WHEN the user clicks the "Architecture" tab

#### Scenario: THEN the Architecture panel content is displayed

- **Given** the page is rendered
- **When** the Services tabs switch content is inspected
- **Then** THEN the Architecture panel content is displayed

#### Scenario: AND the Interior Design panel is hidden

- **Given** the page is rendered
- **When** the Services tabs switch content is inspected
- **Then** AND the Interior Design panel is hidden

### Feature: Services grid shows 6 items

#### Scenario: GIVEN the page loads

- **Given** the page is rendered
- **When** the Services grid shows 6 items is inspected
- **Then** GIVEN the page loads

#### Scenario: THEN 6 service cards are rendered with icons and titles

- **Given** the page is rendered
- **When** the Services grid shows 6 items is inspected
- **Then** THEN 6 service cards are rendered with icons and titles

### Feature: Counter section displays stats

#### Scenario: GIVEN the page loads

- **Given** the page is rendered
- **When** the Counter section displays stats is inspected
- **Then** GIVEN the page loads

#### Scenario: THEN 4 counter items are visible with their labels

- **Given** the page is rendered
- **When** the Counter section displays stats is inspected
- **Then** THEN 4 counter items are visible with their labels

### Feature: Projects gallery shows 6 items

#### Scenario: GIVEN the page loads

- **Given** the page is rendered
- **When** the Projects gallery shows 6 items is inspected
- **Then** GIVEN the page loads

#### Scenario: THEN 6 project cards are rendered with images and titles

- **Given** the page is rendered
- **When** the Projects gallery shows 6 items is inspected
- **Then** THEN 6 project cards are rendered with images and titles

### Feature: Team section shows members and accordion

#### Scenario: GIVEN the page loads

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GIVEN the page loads

#### Scenario: THEN 4 team member cards are visible

- **Given** the page is rendered
- **When** the page is inspected
- **Then** THEN 4 team member cards are visible

#### Scenario: AND the accordion has 3 sections

- **Given** the page is rendered
- **When** the page is inspected
- **Then** AND the accordion has 3 sections

#### Scenario: WHEN the user clicks "What We Do?"

- **Given** the page is rendered
- **When** the page is inspected
- **Then** WHEN the user clicks "What We Do?"

#### Scenario: THEN the "What We Do?" panel content is visible

- **Given** the page is rendered
- **When** the page is inspected
- **Then** THEN the "What We Do?" panel content is visible

### Feature: Testimonials render

#### Scenario: GIVEN the page loads

- **Given** the page is rendered
- **When** the Testimonials render is inspected
- **Then** GIVEN the page loads

#### Scenario: THEN 3 testimonial items are rendered with names and quotes

- **Given** the page is rendered
- **When** the Testimonials render is inspected
- **Then** THEN 3 testimonial items are rendered with names and quotes

### Feature: Newsletter form works

#### Scenario: GIVEN the newsletter section is visible

- **Given** the page is rendered
- **When** the Newsletter form works is inspected
- **Then** GIVEN the newsletter section is visible

#### Scenario: WHEN the user types an email and clicks "Subscribe Now"

- **Given** the page is rendered
- **When** the Newsletter form works is inspected
- **Then** WHEN the user types an email and clicks "Subscribe Now"

#### Scenario: THEN the form resets

- **Given** the page is rendered
- **When** the Newsletter form works is inspected
- **Then** THEN the form resets

### Feature: Footer contains Component Dock link

#### Scenario: GIVEN the page loads

- **Given** the page is rendered
- **When** the page is inspected
- **Then** GIVEN the page loads

#### Scenario: THEN the footer contains a link to https://www.componentdock.com/

- **Given** the page is rendered
- **When** the page is inspected
- **Then** THEN the footer contains a link to https://www.componentdock.com/

#### Scenario: AND the link text mentions "Component Dock"

- **Given** the page is rendered
- **When** the page is inspected
- **Then** AND the link text mentions "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/sitecraft/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/sitecraft/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar renders all sections — Given** the page is rendered
- [ ] Hero section displays correctly — Given** the page is rendered
- [ ] Services tabs switch content — Given** the page is rendered
- [ ] Services grid shows 6 items — Given** the page is rendered
- [ ] Counter section displays stats — Given** the page is rendered
- [ ] Projects gallery shows 6 items — Given** the page is rendered
- [ ] Team section shows members and accordion — Given** the page is rendered
- [ ] Testimonials render — Given** the page is rendered
- [ ] Newsletter form works — Given** the page is rendered
