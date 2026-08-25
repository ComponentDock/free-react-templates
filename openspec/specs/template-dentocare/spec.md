# Template: Dentocare (Medical & Health)

## Purpose

Recreation of ColorLib **Toothcare** template (`https://colorlib.com/wp/template/toothcare/`), previewed at `https://preview.colorlib.com/theme/toothcare/`.
Built as a responsive React 19 single-page application using Vite, Tailwind CSS v4, TypeScript, and Lucide icons.

## Design Tokens (Extracted from Reference)

- **Primary Brand Color**: Cyan / Teal (`#00bcd4` / `#65c4cf` / `#0d6efd`)
- **Neutral Dark**: Dark Charcoal (`#212529`, `#111111`)
- **Neutral Light**: Light Gray / Off-White (`#f8f9fa`, `#e9ecef`)
- **Font Family**: "Roboto", sans-serif
- **Button Shapes**: Rounded buttons with cyan background, white text, hover transitions
- **Section Backgrounds**: Alternating pure white (`#fff`) and light gray (`#f8f9fa`) with hero image background overlay

## Requirements & Gherkin Scenarios

### Feature: Navbar & Hero Section

- **Scenario**: User views top navigation and hero section
  - **Given** the user opens Dentocare
  - **Then** they see the navigation bar with logo "Dentocare", links (Home, Dentist, About, Services, Pricing, Blog, Contact), and an "Make An Appointment" button
  - **And** they see the hero banner with heading "A Brighter Dental Experienced", supporting text, and CTAs

### Feature: Appointment Booking Form

- **Scenario**: User submits an appointment request
  - **Given** the user fills in full name, email, phone number, appointment date, time, and selects a doctor
  - **When** they click "Send message"
  - **Then** a confirmation message is displayed

### Feature: Services Showcase

- **Scenario**: User browses dental services
  - **Given** the user scrolls to the services section
  - **Then** they see service cards (Tooth Protection, Dental Implants, Dental Care, Teeth Whitening, etc.) with icons and descriptions

### Feature: Counters & Statistics

- **Scenario**: User views clinic statistics
  - **Given** the user scrolls to the stats section
  - **Then** they see key metrics (3000+ Happy Patients, 2200+ Successful Operations, 24/7 Support)

### Feature: Dentists Team

- **Scenario**: User views dental specialists
  - **Given** the user reaches the Team Dentist section
  - **Then** they see profile cards for Dr. Lloyd Wilson, Dr. Rachel Parker, Dr. Ian Smith, and Dr. Alicia Henderson with their roles and social links

### Feature: Pricing & Packages

- **Scenario**: User reviews pricing plans
  - **Given** the user checks the Pricing & Packages section
  - **Then** they see tiered pricing packages with "Get Started" buttons

### Feature: Blog & Footer

- **Scenario**: User reads recent blog posts and footer
  - **Given** the user reaches the bottom of the page
  - **Then** they see recent dental tips and articles, contact info, and the required footer linking to Component Dock (`https://www.componentdock.com/`)

## Verification Checklist

- [ ] TypeScript compilation (`npm run typecheck`) passes without errors.
- [ ] ESLint linting passes clean.
- [ ] Vitest coverage report hits 100% lines/functions/branches/statements.
- [ ] Production build (`npm run build`) completes successfully.
- [ ] App CNAME is `dentocare.free.componentdock.com` and footer links Component Dock.
