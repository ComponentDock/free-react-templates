# Template: SlideCraft (Carousel / Showcase)

## Purpose

Recreation of ColorLib Carousel V02 (`https://colorlib.com/wp/template/carousel-02/`), preview URL: `https://preview.colorlib.com/theme/carousel-02/`.
Built with Vite, React 19, Tailwind CSS 4, TypeScript, and Lucide React icons.

## Design Tokens (extracted from reference screenshot & standard ColorLib carousel archetype)

- **Brand Colors:** Primary dark `#111827` (slate-900), Accent vibrant orange/coral `#f97316` (orange-500), Background light `#f8fafc` (slate-50), Card background `#ffffff`, Text primary `#1e293b` (slate-800), Text muted `#64748b` (slate-500).
- **Typography:** Sans-serif font family (`Inter`, system-ui, sans-serif), bold header styling, clean readable body text.
- **Radii:** Rounded-xl (`0.75rem`) for cards, rounded-full for carousel pagination dots and buttons.
- **Shadows:** Soft drop shadows (`shadow-lg`, `shadow-xl`) on carousel items and feature cards.

## Gherkin Requirements & Scenarios

### Feature: Interactive Portfolio Carousel Showcase

As a visitor, I want to browse featured creative projects and portfolio items via an interactive carousel with navigation controls.

#### Scenario: Viewing the Hero Section and Carousel

- **Given** the user visits the SlideCraft homepage
- **When** the page loads
- **Then** the header displays the brand title, navigation links, and a CTA button
- **And** the hero section features a prominent interactive carousel displaying project items with title, category, and background imagery

#### Scenario: Interacting with Carousel Navigation

- **Given** the user is viewing the portfolio carousel
- **When** the user clicks the "Next" or "Previous" arrow buttons (or pagination dots)
- **Then** the carousel smoothly transitions to the next/previous portfolio item
- **And** the active slide indicator updates accordingly

#### Scenario: Exploring Project Details and Call to Action

- **Given** a portfolio slide is displayed
- **When** the user clicks "View Project" or inspects the project details
- **Then** a detailed description or modal/preview appears
- **And** the footer displays copyright and links to Component Dock (`https://www.componentdock.com/`)

## Verification Checklist

- [ ] Spec valid (`npm run spec:validate`)
- [ ] 100% test coverage on all components (`npm run test:coverage`)
- [ ] Typecheck, lint, build successful
- [ ] Footer links Component Dock (`https://www.componentdock.com/`)
- [ ] No mention of ColorLib in app code
- [ ] CNAME and homepage configured correctly
