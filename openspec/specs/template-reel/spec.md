# Template: Reel (Interactive Carousel Showcase)

## Purpose

Recreation of ColorLib **Carousel 11** (`https://colorlib.com/wp/template/carousel-11/`), preview URL: `https://preview.colorlib.com/theme/carousel-11/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.

## Design Tokens

- **Brand Colors**: Primary slate (`#0f172a`), Accent indigo (`#4f46e5`), Background neutral (`#f8fafc`), Card background (`#ffffff`), Text primary (`#1e293b`), Text muted (`#64748b`).
- **Font Family**: "Inter", sans-serif.
- **Button Shapes**: Rounded-lg (`border-radius: 0.5rem`), clean shadow effects, smooth hover transitions.
- **Section Backgrounds**: Alternating clean white and slate-50 sections with rich interactive carousel slides.

## Requirements

### Requirement: Interactive Product & Feature Carousel Showcase

The system SHALL provide an interactive carousel showcase with navigation controls, slide indicators, and feature highlights.

#### Scenario: Navigating through carousel slides

- **GIVEN** the user is on the Reel template home page
- **WHEN** the user clicks the Next or Previous navigation buttons on the carousel
- **THEN** the active carousel slide transitions smoothly to display the corresponding feature content and imagery

#### Scenario: Submitting newsletter subscription

- **GIVEN** the user scrolls to the newsletter subscription section
- **WHEN** the user enters a valid email address and clicks Subscribe
- **THEN** a success confirmation message is displayed

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
