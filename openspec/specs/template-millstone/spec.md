# Spec: Millstone — Industrial Company Landing Template

## Purpose

Recreate the ColorLib "Inds" industrial company landing page as a modern
React 19 + Tailwind CSS 4 + TypeScript single-page template named "Millstone".
The template provides a full-featured industrial company website with top bar,
navbar, hero, services, about, mission, team, CTA, and footer sections.

**Source:** https://colorlib.com/wp/template/inds/
**Preview:** https://preview.colorlib.com/theme/inds/

## Design Tokens (extracted from preview CSS)

- **Font heading:** Barlow (Google Fonts, weights 300–900)
- **Font body:** Roboto (Google Fonts, weights 300–700)
- **Brand color (primary):** #f27420 (orange) — buttons, icons, accents
- **Dark navy:** #00163e — top bar, headings, hero overlay
- **Deep navy:** #010b1d — footer background
- **Body text:** #666666
- **Muted text:** #777777
- **Light section bg:** #f7f7f7
- **White:** #ffffff
- **Button style:** rounded, 5px radius, orange bg, white text
- **Hero overlay:** navy at 70% opacity with diagonal stripe accent

## Sections (in order)

1. **TopBar** — Phone, email, business hours on dark navy background
2. **Navbar** — Logo "Millstone", 6 nav links (Home, About, Industries, Works, Blog, Contact), orange "Get A Quote" CTA, mobile hamburger toggle
3. **Hero** — Full-width industrial image, dark overlay, "Industry Solutions!" heading, subtitle, "Our Services" button, diagonal stripe accent
4. **Services** — 3-column grid: Automotive Manufacturing, Heavy Industry Market, Industry Analysis; each with icon, heading, description, arrow link
5. **About** — Split layout: image left, "Safe Industry Solutions" heading + description right, experience badge, Read More button
6. **Mission** — "Our Mission" heading, 4 value cards: Quality Control, Safety First, Innovation, Sustainability
7. **Team** — "Our Team Best Members" heading, 5 member cards with photos, names, roles, social overlay on hover
8. **CTA** — "Want To Work With Us?" dark section with Contact Us button
9. **Footer** — Dark background, 4 columns (logo+desc, quick links, services, newsletter), social icons, copyright with Component Dock link

## Requirements

### Requirement: TopBar displays contact information

The template SHALL display a top bar with phone number, email address, and business hours.

#### Scenario: TopBar renders all contact details

- **WHEN** the page loads
- **THEN** the top bar shows the phone number "+880166 253 232"
- **AND** the top bar shows the email "info@domain.com"
- **AND** the top bar shows the business hours "Mon - Fri: 9:00 - 19:00"

#### Scenario: TopBar has dark background

- **WHEN** the top bar renders
- **THEN** it has a dark navy background

### Requirement: Navbar provides navigation and CTA

The template SHALL have a sticky navigation bar with logo, 6 links, and a Get A Quote button.

#### Scenario: Navbar renders logo and links

- **WHEN** the page loads
- **THEN** the navbar displays the "Millstone" logo
- **AND** 6 navigation links are present (Home, About, Industries, Works, Blog, Contact)
- **AND** a "Get A Quote" CTA button is visible

#### Scenario: Navbar toggles mobile menu

- **WHEN** the user clicks the mobile hamburger button
- **THEN** the mobile menu opens with all navigation links
- **AND** the toggle button shows aria-expanded="true"
- **WHEN** the user clicks the toggle again
- **THEN** the mobile menu closes

### Requirement: Hero section displays industrial solutions heading

The template SHALL have a full-width hero with a heading, subtitle, and CTA button.

#### Scenario: Hero renders heading and button

- **WHEN** the page loads
- **THEN** the hero displays "Industry Solutions!" as the main heading
- **AND** an "Our Services" button is present

### Requirement: Services section shows 3 service cards

The template SHALL display 3 service cards with icons, headings, descriptions, and arrow links.

#### Scenario: Services renders 3 cards

- **WHEN** the services section loads
- **THEN** 3 service cards are displayed
- **AND** each card has a heading ("Automotive Manufacturing", "Heavy Industry Market", "Industry Analysis")
- **AND** each card has a description and an arrow link

### Requirement: About section displays company information

The template SHALL have an about section with a heading, image, and description.

#### Scenario: About renders heading and image

- **WHEN** the about section loads
- **THEN** the heading "Safe Industry Solutions" is visible
- **AND** a descriptive paragraph is present
- **AND** an image is displayed

### Requirement: Mission section shows 4 value cards

The template SHALL display 4 mission/value proposition cards.

#### Scenario: Mission renders 4 cards

- **WHEN** the mission section loads
- **THEN** 4 mission cards are displayed
- **AND** each card has a title (Quality Control, Safety First, Innovation, Sustainability)

### Requirement: Team section shows 5 team members

The template SHALL display 5 team member cards with photos, names, and roles.

#### Scenario: Team renders 5 members

- **WHEN** the team section loads
- **THEN** 5 team member cards are displayed
- **AND** each card shows a name, role, and social links

### Requirement: CTA section drives contact

The template SHALL have a call-to-action section encouraging users to get in touch.

#### Scenario: CTA renders heading and button

- **WHEN** the CTA section loads
- **THEN** the heading "Want To Work With Us?" is visible
- **AND** a "Contact Us" button is present

### Requirement: Footer links to Component Dock

The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders with Component Dock link

- **WHEN** the footer loads
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text reads "Component Dock"
- **AND** 4 column sections are displayed (logo, quick links, services, newsletter)
- **AND** a copyright line is present
