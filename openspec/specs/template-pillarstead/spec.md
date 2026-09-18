# Template: Pillarstead (Construction Company Landing)

## Purpose

Pillarstead is a single-page construction company template. It is an original
React recreation of the ColorLib free "Wilcon" template
(preview: https://preview.colorlib.com/theme/wilcon/ — construction company
landing), built under a different name with the monorepo stack: Vite + React 19
+ Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (verified 2026-09-16 via direct fetch):

- Brand orange `#fc5e28` (primary CTA buttons, highlights, accents)
- Dark navy `#040e26` (navbar, dark backgrounds, footer)
- White `#fff` (text on dark, content areas)
- Light gray `#f8f9fa` / `bg-light` (alternating section backgrounds)
- Font: Roboto (Google Fonts via `<link>`)
- Buttons: `btn-primary` — orange `#fc5e28` background, white text, uppercase
  13px bold; `btn-white` — white background, dark text; `btn-custom` — outlined
  with orange border, transparent background, orange text
- Border radius: CSS variables, 50% for circles, 5px for cards
- Dark overlay sections: background images with `rgba(0,0,0,0.5)` overlay
- Parallax: `data-stellar-background-ratio` on hero and counter sections
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Pillarstead lives in `apps/pillarstead` and uses shared components from
`packages/ui`.

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navbar (bg-dark) with collapsed mobile toggle
and links: Home, About, Services, Projects, Blog, Contact, plus an outlined
"Inquire Now" CTA button.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show links to Home, About, Services, Projects, Blog, and Contact
- **AND** it SHALL show an "Inquire Now" outlined CTA button

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu SHALL expand
- **AND** clicking a link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, dark
overlay, heading "We Build Great Projects", descriptive paragraph, and two
CTA buttons: "Our Services" (primary orange) and "Request A Quote" (white).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the heading "We Build Great Projects"
- **AND** it SHALL show a descriptive paragraph
- **AND** it SHALL show an "Our Services" orange button
- **AND** it SHALL show a "Request A Quote" white button

### Requirement: Services feature bar

The system SHALL render a 3-column services bar with icon, title, and
description for each: Quality Construction, Professional Liability,
Dedicated To Our Clients.

#### Scenario: Services rendering

- **GIVEN** the page is rendered
- **WHEN** the services bar is displayed
- **THEN** it SHALL show 3 service items each with an icon, title, and
  description

### Requirement: Intro CTA section

The system SHALL render a full-width intro CTA section with a background
image, dark overlay, heading "Providing Personalized and High Quality
Services", descriptive paragraph, and an orange "Request A Quote" button.

#### Scenario: Intro CTA content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** it SHALL show the heading about personalized services
- **AND** it SHALL show a "Request A Quote" orange button

### Requirement: About / Counter section

The system SHALL render a split section: left side has dark background with
heading "Best Provider for Industrial Services" and description; right side
has a background image with 4 counter stats (Project Completed 48000, Happy
Customers 54900, Equipment 230, Awards 125).

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Best Provider for Industrial Services"
- **AND** it SHALL show 4 counter stat items with icons and numbers

#### Scenario: Counter animation

- **GIVEN** the about section is visible
- **WHEN** the counters scroll into view
- **THEN** the numbers SHALL animate from 0 to their target values

### Requirement: Our Services grid

The system SHALL render a "We Offer Services" section with a 3-column grid
of service cards (Architecture, Renovation, + third), each with a background
image, icon, title, description, and "Read more" outlined link.

#### Scenario: Services grid

- **GIVEN** the page is rendered
- **WHEN** the services grid is displayed
- **THEN** it SHALL show 3 service cards with images, icons, titles, and
  descriptions

### Requirement: Testimonials section

The system SHALL render a split testimonials section: left side has heading
"Read Testimonials" and quote; right side has a carousel of testimonials
with circular avatar photo, quote icon, testimonial text, name, and role.

#### Scenario: Testimonial rendering

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show testimonial cards with avatar, name, role, and
  quote text

### Requirement: Blog section

The system SHALL render a "Latest Blog Updates" section with a light gray
background and a 3-column grid of blog cards, each with background image,
date/author/comments metadata, title, and "Read more" button.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 3 blog cards with image, metadata, title, and
  "Read more" link

### Requirement: Footer

The system SHALL render a dark 4-column footer with: About (social icons),
Links (two-column list), Services (list), and Have a Questions? (address,
phone, email). A copyright bar at the bottom links to Component Dock.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show 4 columns of footer content
- **AND** the copyright bar SHALL link to Component Dock

### Requirement: Accessibility

The system SHALL use semantic HTML, aria labels on icon-only controls,
and focus-visible rings on interactive elements.

#### Scenario: Keyboard navigation

- **GIVEN** the page is rendered
- **WHEN** the user navigates with keyboard
- **THEN** all interactive elements SHALL receive visible focus indicators

## Verification checklist

- [ ] Spec matches section order from live preview: Navbar → Hero → Services
  Bar → Intro CTA → About/Counters → Services Grid → Testimonials →
  Blog → Footer
- [ ] Design tokens match: brand orange #fc5e28, dark navy #040e26, Roboto
  font, 50% avatar radius, 5px card radius
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to Component Dock
- [ ] All images use picsum.photos seeded placeholders
- [ ] Icons from lucide-react (not Font Awesome)
- [ ] Mobile responsive with hamburger menu
- [ ] Accessibility: semantic HTML, aria labels, focus-visible
