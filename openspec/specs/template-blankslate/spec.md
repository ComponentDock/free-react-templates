# Template: BlankSlate (Business / Creative Agency)

## Purpose

Recreation of the ColorLib **Whitespace** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source template:** [Whitespace](https://colorlib.com/wp/template/whitespace/)
- **Live preview:** https://preview.colorlib.com/theme/whitespace/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/whitespace-free-template.jpg
- **New name:** `blankslate`
- **Package:** `@free-react-templates/blankslate`
- **Deploy target:** `https://blankslate.free.componentdock.com`
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design reference (replication findings)

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/whitespace/:

- **Brand Yellow:** `#fcd307` — CTA buttons, service icon backgrounds, testimonials section bg
- **Brand Blue:** `#4ac7ea` / `#78d5ef` — secondary accent
- **Dark BG:** `#141313` / `#000000` — navbar, hero, projects, footer
- **Light BG:** `#f8f9fa` / `#fafafa` — pricing section
- **Fonts:** Poppins (headings, 600/700), Work Sans (body, 400/500) via Google Fonts
- **Buttons:** pill-shaped (border-radius: 30px), yellow bg

**Section order (1:1 from live DOM):**

1. Navbar — dark bg, logo 'BlankSlate', links: Home, About, Work, Pricing, Blog, Contact
2. Hero — dark bg, 'We Help to Build You the Product' (h1), 'Business Solution' (h2), 'Get in touch' yellow pill CTA
3. About — two-col (text left, image right), 'What We Can Do for You', 7 service items
4. Services — 4 icon cards with yellow icon bg
5. Counter — bg image, 'Interesting Facts', 4 stat counters
6. Projects — 'Recent Projects', 6 project cards
7. Testimonials — yellow (#fcd307) bg, 'My satisfied customer says', 3 testimonials
8. Case Study — 'Case Study', 3 cards
9. Pricing — light bg, 'Our Best Pricing', 4 tiers: Free/$0, Startup, Premium, Pro
10. Partner — logo area
11. Footer — dark bg, 4-col: logo, Useful Links, Quick Links, Contact, Component Dock link

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "BlankSlate", anchor links to page sections, and a dark background.

#### Scenario: Navbar content

- **GIVEN** the BlankSlate page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "BlankSlate" and links to Home, About, Work, Pricing, Blog, Contact
- **AND** the navbar SHALL have a dark background

### Requirement: Hero section

The system SHALL render a full-width dark hero with a headline, subheading, and a "Get in touch" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the user views the hero section
- **THEN** the heading "We Help to Build You the Product" SHALL be displayed
- **AND** the subheading "Business Solution" SHALL be displayed
- **AND** a "Get in touch" button SHALL be visible and styled as a yellow pill button

### Requirement: About section

The system SHALL render a two-column about section with service list items.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the about section
- **THEN** the heading "What We Can Do for You" SHALL be displayed
- **AND** 7 service items SHALL be listed: Market Research, Financial Services, Online Marketing, 24/7 Support, Business Strategy, Data Analysis, Graphic Design

### Requirement: Services grid

The system SHALL render a 4-column responsive grid of service icon cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the user views the services section
- **THEN** 4 service cards SHALL be displayed in a grid
- **AND** each card SHALL have an icon with yellow background and a description

### Requirement: Counter section

The system SHALL render a counter/facts section with animated count-up numbers.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the counter section
- **THEN** the heading "Interesting Facts" SHALL be displayed
- **AND** at least 4 numeric counters SHALL be shown

### Requirement: Projects gallery

The system SHALL render a projects section with a grid of project cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the user views the projects section
- **THEN** the heading "Recent Projects" SHALL be displayed
- **AND** 6 project cards SHALL be displayed in a grid

### Requirement: Testimonials section

The system SHALL render a testimonials section with a yellow background and customer quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the user views the testimonials section
- **THEN** the heading "My satisfied customer says" SHALL be displayed
- **AND** the section SHALL have a yellow (#fcd307) background
- **AND** at least 3 testimonial items SHALL be shown with name and role

### Requirement: Case study section

The system SHALL render a case study section with cards.

#### Scenario: Case study content

- **GIVEN** the page is rendered
- **WHEN** the user views the case study section
- **THEN** the heading "Case Study" SHALL be displayed
- **AND** 3 case study cards SHALL be shown

### Requirement: Pricing section

The system SHALL render a pricing section on a light background with 4 tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the user views the pricing section
- **THEN** the heading "Our Best Pricing" SHALL be displayed
- **AND** 4 pricing tiers SHALL be shown: Free, Startup, Premium, Pro
- **AND** each tier SHALL have a "Get Started" button
- **AND** the Free tier SHALL be highlighted as "$0"

### Requirement: Partner section

The system SHALL render a partner section with client logos.

#### Scenario: Partner content

- **GIVEN** the page is rendered
- **WHEN** the user views the partner section
- **THEN** a display of partner/client logos SHALL be shown

### Requirement: Footer

The system SHALL render a dark footer with 4 columns and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the footer
- **THEN** columns for logo, Useful Links, Quick Links, and Contact SHALL be shown
- **AND** a "Component Dock" link to https://www.componentdock.com/ SHALL be present

### Requirement: Responsive layout

The system SHALL be responsive with proper breakpoints for mobile and desktop.

#### Scenario: Responsive behavior

- **GIVEN** the viewport width is 768px
- **WHEN** the page is rendered
- **THEN** the navbar SHALL collapse to a hamburger menu
- **AND** service items SHALL stack vertically
- **AND** project cards SHALL display in 2 columns

### Requirement: Dark mode

The system SHALL support dark mode via a class-based toggle.

#### Scenario: Dark mode support

- **GIVEN** the user toggles dark mode
- **WHEN** the dark mode is activated
- **THEN** the background colors SHALL invert appropriately
- **AND** text contrast SHALL remain readable

## Verification Checklist

- [ ] All sections render in correct order: Navbar → Hero → About → Services → Counter → Projects → Testimonials → Case Study → Pricing → Partner → Footer
- [ ] Brand yellow `#fcd307` used for CTA buttons, icon backgrounds, and testimonials section
- [ ] Dark backgrounds (#141313 / #000) for navbar, hero, projects, footer
- [ ] Fonts: Poppins for headings, Work Sans for body (via Google Fonts link in index.html)
- [ ] Button style: pill-shaped (border-radius: 30px), yellow background
- [ ] Images use picsum.photos placeholder URLs
- [ ] No ColorLib references in app source code (provenance only in spec and TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] Responsive layout: mobile-first with proper breakpoints
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] TypeCheck passes (`npx tsc --noEmit`)
- [ ] Lint passes
- [ ] Build succeeds
