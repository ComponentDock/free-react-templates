# Template: Lexguard (Portfolio / Personal)

## Purpose

Recreation of ColorLib "Schmidt" template (preview URL: https://preview.colorlib.com/theme/schmidt/), built as a Vite + React 19 + Tailwind CSS 4 strictly typed single-page portfolio application.

## Design tokens

- **Brand primary / accent**: `#d5c455` (warm gold / yellow accent used for badges, active states, buttons, and hero split background overlay)
- **Neutral dark**: `#222222` (headings, dark text)
- **Neutral light / body**: `rgba(0, 0, 0, 0.7)` on body text, white background `#ffffff`
- **Typography**: Poppins sans-serif (`font-family: 'Poppins', sans-serif`)
- **Buttons / Radii**: rounded buttons (`rounded` / border-radius 2px or small standard radius)

## Section structure (1:1 with reference)

1. **Navbar**: Logo ("Lexguard."), links (Home, About, Services, Experiences, Works, Blog, Contact), and sticky/absolute light style.
2. **Hero Section**: Split layout with gold accent overlay on right/background, subheading ("UI/UX Designer & Developer"), headline ("I'm John Lexguard"), primary CTA buttons ("More About Me", "Hire Me"), and professional portrait showcase.
3. **Services Section**: Overview of professional services offered with icons, titles, and descriptions.
4. **Experience Section**: Timeline / career history and professional experience cards.
5. **Works / Portfolio Section**: Showcase of recent design and development projects with filtering or grid display.
6. **Testimonials / Blog Section**: Featured articles and client feedback.
7. **Contact Section**: Contact form with inputs and submit button, plus footer with copyright and mandatory Component Dock attribution (`https://www.componentdock.com/`).

## Requirements

### Feature: Navbar navigation

#### Scenario: User views top navigation bar

- **GIVEN** the user loads the Lexguard portfolio
- **WHEN** the user inspects the navbar
- **THEN** they see the brand logo and navigation links (Home, About, Services, Experiences, Works, Blog, Contact)

### Feature: Hero showcase

#### Scenario: User views the hero section

- **GIVEN** the user is on the home page
- **WHEN** the hero section renders
- **THEN** it displays the subheading, headline, CTA buttons, and profile showcase

### Feature: Services display

#### Scenario: User explores services

- **GIVEN** the user scrolls to the services section
- **THEN** service cards are displayed with icons and descriptions

### Feature: Portfolio works

#### Scenario: User views featured works

- **GIVEN** the user scrolls to the works section
- **THEN** project cards are shown with preview images and titles

### Feature: Contact form interaction

#### Scenario: User submits contact form

- **GIVEN** the user fills out the contact form inputs
- **WHEN** the user clicks submit
- **THEN** validation passes and a success confirmation appears

## Verification checklist

- [ ] TypeScript typecheck passes (`npm run typecheck`)
- [ ] Linter passes (`npm run lint`)
- [ ] Vitest coverage is 100% lines/functions/branches/statements
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Navbar navigation — they see the brand logo and navigation links (Home, About, Services, Experiences, Works, Blog, Contact)
- [ ] Hero showcase — it displays the subheading, headline, CTA buttons, and profile showcase
- [ ] Services display — service cards are displayed with icons and descriptions
- [ ] Portfolio works — project cards are shown with preview images and titles
- [ ] Contact form interaction — validation passes and a success confirmation appears
