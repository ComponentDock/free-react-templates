# Template: WashBox (Car Wash / Automotive Services)

## Purpose

Recreation of [ColorLib Carwash](https://colorlib.com/wp/template/carwash/) for the ComponentDock free React template marketplace.

- **Preview URL:** https://preview.colorlib.com/theme/carwash/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carwash-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **New app folder:** `apps/washbox`
- **Package name:** `@free-react-templates/washbox`
- **Surge target:** `washbox.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

| Token                | Value                                                 | Source                                                 |
| -------------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| Primary (brand)      | `#007AFF`                                             | `.btn` gradient, links, footer headings, scroll-top bg |
| Button gradient      | `linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)` | `.btn`                                                 |
| Accent green         | `#70D76A`                                             | `.section-tittle span`                                 |
| Heading color        | `#010A44`                                             | `h1-h6`                                                |
| Body text            | `#10285d`                                             | `p`                                                    |
| Nav link             | `#072366`                                             | `.main-menu ul li a`                                   |
| Pricing price        | `#4C1E51`                                             | `.card-mid h4`                                         |
| Card border          | `#E7E6EB`                                             | `.single-card`                                         |
| Button border-radius | 30px (pill)                                           | `.btn`                                                 |
| Font — body          | Poppins (300-800)                                     | `body`                                                 |
| Font — headings      | Work Sans (300-800)                                   | `h1-h6`, `.btn`                                        |

## Section Structure (from live preview DOM)

1. **Navbar** — sticky header, logo left, nav links (Home, About, Services, Blog, Contact), phone CTA button right.
2. **Hero** — full-width hero with background image, dark overlay, large "Car Wash" headline, animated "& Detailing" text with stroke effect, description, "Our Services" CTA pill button.
3. **Equipment** — offset layout, background image, heading "We have the latest equipment", paragraph, "About Us" CTA button.
4. **Pricing Cards** — 3-column grid (Car Wash $50, Detailing $100, Wash & Detailing $200), each with icon, title, price, feature list, "Get Started" outlined button.
5. **Testimonials** — dark background with decorative image, slider of quotes with avatar, founder name + role. Dot navigation.
6. **Services** — "Why take our services?" heading, 4-column icon grid, each with icon + heading + description.
7. **Video CTA** — dark background image, centered play button (green gradient), heading "Your car will look as your new one", description text.
8. **Footer** — dark background, 4-column layout: logo + contact info + opening hours + navigation links + social icons. Component Dock attribution. Copyright bar.
9. **Scroll-to-top** — fixed blue circle button, bottom-right.

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky navigation bar with the site name "WashBox", five navigation links, and a phone CTA button.

#### Scenario: Navbar content

- **GIVEN** the page is loaded
- **THEN** the navbar displays links for "Home", "About", "Services", "Blog", "Contact"

#### Scenario: Sticky header on scroll

- **GIVEN** the page is loaded
- **WHEN** the user scrolls past the hero
- **THEN** the navbar becomes sticky with a white background and shadow

#### Scenario: Phone CTA button

- **GIVEN** the page is loaded on desktop viewport
- **THEN** a phone number CTA button "10 (87) 256-2903" is visible in the header

#### Scenario: Mobile menu toggle

- **GIVEN** the page is loaded on mobile viewport
- **WHEN** the user clicks the menu toggle button
- **THEN** the mobile navigation menu opens with all navigation links

### Requirement: Hero section

The system SHALL render a full-width hero section with a large headline, animated text, and a CTA button.

#### Scenario: Headline display

- **GIVEN** the hero section is visible
- **THEN** the headline "Car Wash" is displayed at large size
- **AND** the animated text "& Detailing" is displayed with a stroke effect

#### Scenario: CTA button

- **GIVEN** the hero section is visible
- **THEN** an "Our Services" CTA button is present linking to #services

#### Scenario: Background image

- **GIVEN** the hero section is visible
- **THEN** a full-width background image is displayed with a dark overlay

### Requirement: Equipment section

The system SHALL render an equipment/about section with a heading, description, and CTA button.

#### Scenario: Section content

- **GIVEN** the equipment section is visible
- **THEN** the heading "We have the latest equipment" is displayed
- **AND** an "About Us" CTA button is present

#### Scenario: Layout

- **GIVEN** the equipment section is visible
- **THEN** the text content is displayed alongside a decorative background image

### Requirement: Pricing cards

The system SHALL render three pricing cards in a grid layout.

#### Scenario: Card count

- **GIVEN** the pricing section is visible
- **THEN** three pricing cards are rendered

#### Scenario: Card content

- **GIVEN** the pricing section is visible
- **THEN** each card displays a service name, price, and feature list

#### Scenario: Card prices

- **GIVEN** the pricing section is visible
- **THEN** the "Car Wash" card shows "$50.00"
- **AND** the "Detailing" card shows "$100.00"
- **AND** the "Wash & Detailing" card shows "$200.00"

#### Scenario: Get Started button

- **GIVEN** the pricing section is visible
- **THEN** each card has a "Get Started" button with outlined style

### Requirement: Testimonials

The system SHALL render a testimonials section with quotes and dot navigation.

#### Scenario: Testimonial display

- **GIVEN** the testimonial section is visible
- **THEN** at least one testimonial quote is displayed
- **AND** the founder name and role are shown

#### Scenario: Dot navigation

- **GIVEN** the testimonial section is visible
- **WHEN** the user clicks a dot indicator
- **THEN** the displayed testimonial changes

### Requirement: Services section

The system SHALL render a services section with a heading and four service items.

#### Scenario: Service items

- **GIVEN** the services section is visible
- **THEN** four service items are displayed
- **AND** each service item has an icon, heading, and description

#### Scenario: Section heading

- **GIVEN** the services section is visible
- **THEN** the heading "Why take our services?" is displayed

### Requirement: Video CTA section

The system SHALL render a video call-to-action section with a play button.

#### Scenario: Play button

- **GIVEN** the video CTA section is visible
- **THEN** a circular play button is displayed

#### Scenario: Content

- **GIVEN** the video CTA section is visible
- **THEN** the heading "Your car will look as your new one" is displayed
- **AND** a dark background image is displayed

### Requirement: Footer

The system SHALL render a footer with contact info, hours, navigation, social links, and Component Dock attribution.

#### Scenario: Contact info

- **GIVEN** the footer is visible
- **THEN** contact phone and email are displayed
- **AND** opening hours are listed (Mon-Fri, Sat, Sun)

#### Scenario: Navigation links

- **GIVEN** the footer is visible
- **THEN** navigation links for Home, About, Services, Blog, Contact are present

#### Scenario: Social icons

- **GIVEN** the footer is visible
- **THEN** social media icon links (Twitter, Facebook, Pinterest) are displayed

#### Scenario: Component Dock attribution

- **GIVEN** the footer is visible
- **THEN** a "Component Dock" link pointing to https://www.componentdock.com/ is present

#### Scenario: Copyright bar

- **GIVEN** the footer is visible
- **THEN** a copyright bar with "All rights reserved" is displayed

### Requirement: Scroll-to-top

The system SHALL render a scroll-to-top button that appears after scrolling.

#### Scenario: Visibility

- **GIVEN** the user scrolls past the hero section
- **THEN** a scroll-to-top button is visible at bottom-right

#### Scenario: Click behavior

- **GIVEN** the scroll-to-top button is visible
- **WHEN** the user clicks the button
- **THEN** the page scrolls to the top

### Requirement: App composition

The system SHALL render all sections in the correct order.

#### Scenario: Section order

- **GIVEN** the page is loaded
- **THEN** the following sections are rendered in order: Navbar, Hero, Equipment, Pricing, Testimonials, Services, VideoCta, Footer, ScrollToTop
