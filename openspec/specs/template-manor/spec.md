# Template: Manor (Real Estate)

## Purpose

Manor is a real estate website template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "The Estate" website
template (source: https://colorlib.com/wp/template/theestate/), built under
a DIFFERENT name (Manor), per the monorepo naming mandate (never reuse the
ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Requirements

### Requirement: Page renders all sections

Users SHALL see a complete real estate page with navbar, hero, search box,
featured properties, testimonials, workflow steps, cities, CTA, newsletter,
and footer sections.

#### Scenario: All sections are present

- **GIVEN** I visit the Manor template
- **THEN** I see a navbar with logo "Manor"
- **AND** I see a hero section with heading "find your home"
- **AND** I see a search box with dropdown filters
- **AND** I see 3 featured property cards
- **AND** I see a testimonials section
- **AND** I see a workflow section with 3 steps
- **AND** I see a cities section
- **AND** I see a CTA banner
- **AND** I see a newsletter signup form
- **AND** I see a footer with contact form and info

### Requirement: Search form has all filter fields

Users SHALL be able to filter properties by multiple criteria using dropdown
selects and a searchable features list.

#### Scenario: Search filters are displayed

- **GIVEN** I view the search box
- **THEN** I see dropdowns for Keywords, Property ID, Status, Location, Type
- **AND** I see dropdowns for Bedrooms, Bathrooms, Min/Max Price, Min/Max Sq Ft
- **AND** I see a Search button
- **AND** I see a "Specific features" toggle with checkboxes

### Requirement: Featured property cards display correctly

Each featured property card SHALL show an image, title, description, room
details, amenity tags, and price.

#### Scenario: Property cards show all details

- **GIVEN** I view the featured properties
- **THEN** I see 3 cards each with an image, title, description
- **AND** each card shows bedrooms, bathrooms, area, patio, garage counts
- **AND** each card has amenity tags
- **AND** each card shows a price

### Requirement: Footer contains Component Dock link

The footer SHALL link to https://www.componentdock.com/ branded as
"Component Dock".

#### Scenario: Footer brand link

- **GIVEN** I view the footer
- **THEN** I see a link to "https://www.componentdock.com/"
- **AND** the link text mentions "Component Dock"

## Design reference (replication findings)

- **Original:** ColorLib "The Estate" — Bootstrap 4 based, Open Sans +
  Montserrat fonts. Sections: hero slider, sticky header, search box with
  dropdowns, featured properties cards, testimonials carousel, workflow steps,
  cities slider, CTA banner, newsletter, footer with contact form.
- **Brand palette:**
  - Primary accent: #fd784f (coral/orange)
  - Dark navy: #0e1d41 (header bg, dark sections)
  - White: #FFFFFF (cards, backgrounds)
  - Light gray: #f2f2f2 (subtle backgrounds)
  - Text gray: #838383 / #a5a5a5 (body text)
- **Typography:** Open Sans (body), Montserrat (headings/nav)
- **Button style:** Rounded, coral/orange bg, white text, 50% border-radius on
  some elements
- **Card style:** White bg, subtle shadow, "featured" badge, price tag overlay
