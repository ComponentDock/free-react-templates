# Spec: Swiftly

## Purpose

Recreation of ColorLib "Easy" (https://colorlib.com/wp/template/easy/)
as a fintech / SaaS landing page with payment focus, built with React 19,
Tailwind CSS 4, and TypeScript.

### Design tokens

| Token           | Value                                   |
| --------------- | --------------------------------------- |
| Font family     | Montserrat (Google Fonts)               |
| Brand color     | #ff6363 (coral red)                     |
| Brand hover     | #ff7777                                 |
| Body background | #f2f5f9 (light gray)                    |
| Text color      | #000839 (dark navy)                     |
| Button shape    | Pill (border-radius: 30px)              |
| Nav style       | Transparent overlay on hero, white text |

## Requirements

### Requirement: Page renders all sections

The page SHALL display all major sections in order: Navbar, Hero, LogoBar,
Features, Testimonials, FeatureShowcase (x2), Pricing, Blog, Footer.

#### Scenario: All sections visible on load

- **WHEN** I visit the Swiftly page
- **THEN** I see the navbar with logo "Swiftly"
- **AND** I see the hero heading "Get Paid Easily without Hassle"
- **AND** I see an email signup form
- **AND** I see 6 feature cards
- **AND** I see a testimonial section
- **AND** I see 2 feature showcase sections
- **AND** I see 3 pricing cards
- **AND** I see 4 blog post cards
- **AND** I see the footer with Component Dock link

### Requirement: Navbar navigation

The navbar SHALL display navigation links and a CTA button.

#### Scenario: Navigation links present

- **WHEN** I visit the Swiftly page
- **THEN** I see nav links for Home, Features, Pricing, Blog, Contact

### Requirement: Pricing toggle

The pricing section SHALL support monthly/yearly toggle.

#### Scenario: Toggle switches prices

- **WHEN** I click the pricing toggle
- **THEN** the prices update to yearly values
- **AND** a "Save 25%" badge appears

### Requirement: Footer Component Dock link

The footer SHALL link to Component Dock.

#### Scenario: Footer has Component Dock link

- **WHEN** I visit the Swiftly page
- **THEN** the footer contains a link to componentdock.com
