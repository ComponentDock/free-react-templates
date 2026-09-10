# Template: Callcraft (Call Center Landing Page)

## Purpose

Callcraft is a single-page call-center landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Callcenter" free template (source:
https://colorlib.com/wp/template/callcenter/), built under a DIFFERENT
name (**Callcraft**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 single-page site with a Poppins font,
gradient-accent primary button, parallax photo sections, a testimonial
carousel, stat counters, a services grid, and a dark footer with
newsletter signup.

## Source mapping

- **ColorLib item:** "Callcenter" (TEMPLATES.md line 922)
- **Source URL:** https://colorlib.com/wp/template/callcenter/
- **Preview URL:** https://preview.colorlib.com/theme/callcenter/
  (reachable, verified 2026-09-10)
- **Preview CSS:** `css/main.css` (28,930 bytes) + Bootstrap 4
- **Screenshot:** `callcenter-free-call-center-website-template.jpg`

## Design tokens (extracted from preview)

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary gradient start | `#62bdfc` | Button left, header overlay |
| Primary gradient end | `#8490ff` | Button right, header overlay |
| Secondary blue | `#38a4ff` | Accent, hover states |
| Cyan accent | `#4cd3e3` | Icon accents |
| Yellow accent | `#f4e700` | Feature icons |
| Red accent | `#f44a40` | Feature icons |
| Green accent | `#73fbaf` | Feature icons |
| Purple accent | `#a367e7` | Feature icons |
| Orange accent | `#f09359` | Feature icons |
| Page bg | `#f9f9ff` | Very light purple-blue, used on brand section |
| Body text | `#777` | Secondary text |
| Headings | `#222` | Dark text |
| Footer bg | `#222` | Dark footer area |
| Section gap bg | `#f1f1f1` | Alternating section backgrounds |
| Divider / subtle bg | `#eee` | Lines, subtle backgrounds |
| Light bg | `#f5f5f5` | Alternate section bg |
| White | `#fff` | Card backgrounds, button text |

### Typography

- **Font family:** Poppins (Google Fonts), weights 300–700
- **Heading hierarchy:** h1 bold ~36px, h2 bold ~28px, h3 bold ~18px
- **Body text:** 14–15px, weight 400, color `#777`
- **Uppercase labels:** small caps, letter-spacing, used for subheads

### Buttons

- **Primary:** gradient from `#62bdfc` to `#8490ff`, white uppercase text,
  border-radius 25px (pill), padding 10px 28px, text-transform uppercase,
  font-weight 500
- **Hover:** slight opacity shift, no color change (gradient preserved)
- **Play button:** circular, gradient background, centered play icon

### Section backgrounds

- Banner: photo background (`header-bg.jpg`) with overlay
- Feature section: white bg
- Testimonial: photo background (`testimonial-bg.jpg`) with dark overlay
- Offered services: white bg
- Facts: white bg
- Service area: photo background (`service-bg.jpg`) with overlay
- Info area: gradient blue bg (`#62bdfc` → `#8490ff`)
- About area: white bg
- Brand area: `#f9f9ff`
- Contact area: white bg
- Footer: `#222` dark

## Section order (from preview DOM)

1. **Navbar** — fixed, white bg, logo "Call Center", links: Home, Feature, We Offer, About, Contact
2. **Banner/Hero** — photo bg with overlay, subhead "Discover the Colorful World", headline "Efficiency Booster", lorem body, CTA "Discover Now" pill button
3. **Features (3 columns)** — Online Support, 24/7 Round the Clock, Handling All Issues (each with icon + title + description)
4. **Testimonials** — carousel with quote, reviewer name, profile image, star rating
5. **Offered Services** — card grid with icons, titles, and "View Details" link
6. **Facts/Stats** — 5 counters: 2536, 6784, 1059, 2239, 435
7. **Services Grid** — 6 cards: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews (photo bg)
8. **Info/CTA** — "Responsible Customer Support" headline on gradient bg
9. **About** — "We Believe that Interior beautifies the Total Architecture" with play button and description
10. **Brand Logos** — logo bar (client/partner logos)
11. **Contact** — "If you need, Just drop us a line" with contact form
12. **Footer** — 3-column: About Us, Contact Us, Newsletter + copyright

## Gherkin requirements

### Requirement: Navbar

The system SHALL display a sticky navbar with logo and navigation links.

#### Scenario: Navbar renders correctly

- **GIVEN** the Callcraft app is loaded
- **THEN** a sticky navbar SHALL be visible at the top
- **AND** the navbar SHALL contain the logo text "Call Center"
- **AND** navigation links SHALL include Home, Feature, We Offer, About, Contact
- **AND** the active link (Home) SHALL be highlighted in blue

#### Scenario: Navbar stays fixed on scroll

- **GIVEN** the Callcraft app is loaded
- **WHEN** the user scrolls past the hero section
- **THEN** the navbar SHALL remain fixed at the top of the viewport

### Requirement: Hero / Banner section

The system SHALL display a hero section with background image, headline, and CTA.

#### Scenario: Hero content

- **GIVEN** the Callcraft app is loaded
- **THEN** a hero section SHALL be visible with a background image
- **AND** a subhead "Discover the Colorful World" SHALL appear in uppercase
- **AND** a headline "Efficiency Booster" SHALL appear below
- **AND** a paragraph of body text SHALL appear below the headline
- **AND** a "Discover Now" button SHALL be visible
- **AND** the button SHALL have a gradient from `#62bdfc` to `#8490ff`
- **AND** the button SHALL have pill-shaped rounded corners (border-radius 25px)

### Requirement: Features section (3 columns)

The system SHALL display a 3-column features section below the hero.

#### Scenario: Features render

- **GIVEN** the user scrolls past the hero
- **THEN** three feature columns SHALL be visible
- **AND** each column SHALL have an icon, a title, and a description
- **AND** the titles SHALL be "Online Support", "24/7 Round the Clock", "Handling All Issues"
- **AND** each column SHALL be centered with adequate spacing

### Requirement: Testimonials section

The system SHALL display a testimonial carousel.

#### Scenario: Testimonial content

- **GIVEN** the user scrolls to the testimonials section
- **THEN** a testimonial card SHALL be visible
- **AND** it SHALL show a quote, reviewer name, and star rating
- **AND** it SHALL have a background image with overlay
- **AND** the section SHALL allow cycling through testimonials

### Requirement: Offered Services section

The system SHALL display offered services with icons and descriptions.

#### Scenario: Services render

- **GIVEN** the user scrolls to the offered services section
- **THEN** service cards SHALL be displayed
- **AND** each card SHALL have an icon, a title, and a "View Details" link
- **AND** the section heading SHALL read "Our Offered Services"

### Requirement: Facts / Stats section

The system SHALL display 5 animated stat counters.

#### Scenario: Stats render

- **GIVEN** the user scrolls to the facts section
- **THEN** 5 stat counters SHALL be visible
- **AND** the numbers SHALL be: 2536, 6784, 1059, 2239, 435
- **AND** each counter SHALL have a label below the number

### Requirement: Services Grid section

The system SHALL display a 6-card services grid on a photo background.

#### Scenario: Services grid render

- **GIVEN** the user scrolls to the services grid
- **THEN** 6 service cards SHALL be visible in a grid layout
- **AND** the cards SHALL be: Expert Technicians, Professional Service,
  Great Support, Technical Skills, Highly Recommended, Positive Reviews
- **AND** the section SHALL have a photo background with overlay

### Requirement: Info / CTA section

The system SHALL display a call-to-action banner with gradient background.

#### Scenario: CTA content

- **GIVEN** the user scrolls to the info area
- **THEN** a gradient background (from `#62bdfc` to `#8490ff`) SHALL be visible
- **AND** the heading SHALL read "Responsible Customer Support"

### Requirement: About section

The system SHALL display an about section with headline and description.

#### Scenario: About content

- **GIVEN** the user scrolls to the about section
- **THEN** a headline "We Believe that Interior beautifies the Total Architecture" SHALL be visible
- **AND** a play button (circular, gradient) SHALL be present
- **AND** a description paragraph SHALL be shown

### Requirement: Brand logos section

The system SHALL display a brand/client logos bar.

#### Scenario: Brand logos

- **GIVEN** the user scrolls to the brand area
- **THEN** a row of placeholder partner/client logos SHALL be visible
- **AND** the section SHALL have a light `#f9f9ff` background

### Requirement: Contact section

The system SHALL display a contact form section.

#### Scenario: Contact form

- **GIVEN** the user scrolls to the contact section
- **THEN** a heading "If you need, Just drop us a line" SHALL be visible
- **AND** a contact form SHALL be present with input fields
- **AND** a submit button SHALL be available

### Requirement: Footer

The system SHALL include a 3-column dark footer with newsletter signup.

#### Scenario: Footer layout

- **GIVEN** the user scrolls to the footer
- **THEN** the footer SHALL have a `#222` dark background
- **AND** three columns SHALL be present: About Us, Contact Us, Newsletter
- **AND** the Newsletter column SHALL have an email input and submit button
- **AND** a copyright line SHALL be present at the bottom

#### Scenario: Component Dock attribution

- **GIVEN** the Callcraft app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics throughout.

#### Scenario: Semantics

- **GIVEN** the Callcraft app is rendered
- **THEN** all sections SHALL use semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- **AND** interactive elements SHALL have `aria-label` where appropriate
- **AND** images SHALL have `alt` text
- **AND** the contact form SHALL have proper `<label htmlFor>` associations
- **AND** visible focus-visible rings SHALL appear on all interactive elements

## Verification checklist

- [ ] `npm run verify:app -- callcraft` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/callcenter/:
      white bg, Poppins font, blue gradient buttons (pill shape),
      photo hero with brushstroke overlay, 3-column features,
      testimonial carousel, stat counters, services grid,
      gradient CTA, about section, brand logos, dark footer.
- [ ] Section order matches preview DOM 1:1 (12 sections).
- [ ] Design tokens match: Poppins font, gradient `#62bdfc`→`#8490ff`,
      footer `#222`, brand area `#f9f9ff`, button radius 25px.
- [ ] Responsive check at 768px (single column, no horizontal overflow).
- [ ] No ColorLib references in any app file; footer links
      https://www.componentdock.com/.
- [ ] Placeholder images use `https://picsum.photos/seed/callcraft-<n>/<w>/<h>`.
