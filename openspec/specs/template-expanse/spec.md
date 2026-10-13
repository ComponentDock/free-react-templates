# Template: Expanse (Design Agency Portfolio)

## Purpose

Recreation of ColorLib **Unfold** — a creative design agency / portfolio template
with dark theme, parallax hero, and split navigation.

- **Source slug**: `unfold`
- **Preview URL**: https://preview.colorlib.com/theme/unfold/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/unfold-free-template.jpeg
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#D63447` | Vibrant red — accents, portfolio hover overlays |
| Secondary accent | `#f64b3c` | Orange-red (used in gradient overlays) |
| Text primary | `#212529` | Dark body text |
| Text secondary | `#6c757d` | Gray subtext |
| Background | `#fff` | White page base |
| Background dark | `#191919` | Footer background, dark sections |
| Green accent | `#8cba51` | Minor accent (skills counters) |
| Font body | Arimo, sans-serif | Body text |
| Font display | Raleway, sans-serif | Headings and hero text |
| Font serif | Georgia, serif | Accent/editorial text |
| Hero heading | 5rem, weight 900, white | Full-width bold display heading |
| Hero subheading | 33px, white | Subtitle text |
| Button style | `.btn-outline-pill` | Pill-shaped outline buttons, white border on dark, dark border on light |
| Footer | `#191919` dark bg, white text | Fixed-position footer (relative on mobile) |
| Nav layout | Split (left links | logo center | right links) | Desktop: logo centered, links split both sides |
| Dark mode | `[data-bs-theme="dark"]` / `[data-bs-theme="light"]` | Theme toggle supported via icon-moon-o |

## Requirements

### Navigation

#### Scenario: Split centered navigation

- **GIVEN** the user loads the page
- **THEN** a centered logo "Expanse." is displayed
- **AND** the left side nav contains: Home, Portfolio, About
- **AND** the right side nav contains: Services, Skills, Testimonial, Journal, Contact
- **AND** a dark/light theme toggle icon is visible on desktop
- **AND** a hamburger menu toggle is visible on mobile

#### Scenario: Mobile menu opens

- **GIVEN** the user is on mobile viewport
- **WHEN** the user clicks the hamburger toggle
- **THEN** the mobile menu slides in from the right
- **AND** all nav links are listed vertically
- **AND** a close button (×) is visible

### Hero / Cover

#### Scenario: Fullscreen parallax hero

- **GIVEN** the user loads the page
- **THEN** a full-viewport hero section is displayed
- **AND** the background is a dark parallax image
- **AND** the heading reads "Expanse" in large bold white text
- **AND** a subheading is displayed below the heading
- **AND** a scroll-down mouse indicator is visible at the bottom center

#### Scenario: Hero scroll indicator

- **GIVEN** the hero section is visible
- **WHEN** the user clicks the scroll indicator
- **THEN** the page smoothly scrolls to the portfolio section

### Portfolio

#### Scenario: Portfolio grid

- **GIVEN** the user scrolls to the portfolio section
- **THEN** the heading reads "Portfolio"
- **AND** a grid of portfolio items is displayed
- **AND** each item shows an image with a title overlay
- **AND** items have a hover effect (red overlay with details)

#### Scenario: Portfolio filtering

- **GIVEN** the portfolio section is visible
- **THEN** filter tabs are displayed (e.g. All, Branding, Web, etc.)
- **WHEN** the user clicks a filter tab
- **THEN** only items matching that category are shown

### Client Logos

#### Scenario: Client logo carousel

- **GIVEN** the user scrolls past the portfolio
- **THEN** a row of client/partner logos is displayed
- **AND** logos scroll or are statically arranged in a row

### About

#### Scenario: About section

- **GIVEN** the user scrolls to the about section
- **THEN** the heading reads "About"
- **AND** a personal description paragraph is displayed
- **AND** an image or visual element accompanies the text

### Services

#### Scenario: Services section

- **GIVEN** the user scrolls to the services section
- **THEN** the heading reads "Services"
- **AND** a list of services is displayed
- **AND** each service has an icon, title, and description

### Skills / Counters

#### Scenario: Skills with animated counters

- **GIVEN** the user scrolls to the skills section
- **THEN** the heading reads "Skills"
- **AND** animated number counters are displayed (e.g. projects completed, happy clients)
- **AND** the counters animate on scroll into view

### Testimonials

#### Scenario: Testimonial carousel

- **GIVEN** the user scrolls to the testimonial section
- **THEN** the heading reads "Testimonial"
- **AND** a carousel of testimonials is displayed
- **AND** each testimonial shows a quote, name, and role
- **AND** navigation dots/arrows allow cycling through testimonials

### Journal / Blog

#### Scenario: Journal section

- **GIVEN** the user scrolls to the journal section
- **THEN** the heading reads "Journal"
- **AND** 3 blog post cards are displayed in a row
- **AND** each card shows an image, date, title, and excerpt

### Contact

#### Scenario: Contact form

- **GIVEN** the user scrolls to the contact section
- **THEN** the heading reads "Contact"
- **AND** a contact form is displayed with fields: Name, Email, Subject, Message
- **AND** a "Send" submit button is visible

### Footer

#### Scenario: Dark footer

- **GIVEN** the user scrolls to the footer
- **THEN** a dark (#191919) footer is displayed
- **AND** it contains the text "Made with Component Dock" linking to https://www.componentdock.com/
- **AND** social media icon links are present

### Theme Toggle

#### Scenario: Dark/light mode toggle

- **GIVEN** the user clicks the moon/sun icon in the nav
- **THEN** the page switches between dark and light themes
- **AND** all text and background colors adjust accordingly
- **AND** the toggle icon changes (moon ↔ sun)

## Verification checklist

- [ ] Spec matches section order: Nav → Hero → Portfolio → Client Logos → About → Services → Skills → Testimonials → Journal → Contact → Footer
- [ ] Brand color #D63447 used consistently (portfolio overlays, accents)
- [ ] Split nav layout: logo centered, links on both sides
- [ ] Dark theme default with light mode toggle
- [ ] Parallax hero with large bold heading
- [ ] Portfolio grid with hover overlay effects
- [ ] Animated skill counters
- [ ] Testimonial carousel
- [ ] Placeholder images via picsum.photos
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
