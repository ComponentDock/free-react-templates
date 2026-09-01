# Template: CarouselRoll (carouselroll)

## Purpose

Recreation of ColorLib **Carousel V13** (`https://colorlib.com/wp/template/carousel-13/`), an easy-to-use, modern, and mobile-friendly free vertical carousel template for creating beautiful slideshows and showcases, built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Brand Colors**:
  - Primary / Accent: `#0284c7` (Sky 600) / `#0ea5e9`
  - Neutral dark: `#0f172a` (Slate 900)
  - Neutral light: `#f8fafc` (Slate 50)
  - Surface background: `#ffffff` with subtle elevation shadows (`shadow-lg`)
- **Typography**:
  - Font Family: Inter, system-ui, sans-serif
  - Heading Weight: Bold (700)
  - Body Weight: Regular (400) / Medium (500)
- **UI Elements**:
  - Border radius: `rounded-xl` for cards, `rounded-full` for badges and navigation buttons
  - Interactive states: Smooth vertical carousel transitions, hover effects on slide items

## Requirements

### Requirement: Header / Navbar

The header shall display a brand logo, navigation links (Home, Products), and a dark-mode toggle.

#### Scenario: User views header

- **GIVEN** the user loads the CarouselRoll template
- **WHEN** the header renders
- **THEN** all navigation links and the dark-mode toggle are visible and interactive

### Requirement: Hero Showcase

The hero section shall present an engaging headline, descriptive subtext, and call-to-action buttons.

#### Scenario: User views hero section

- **GIVEN** the user is on the main page
- **WHEN** the hero section renders
- **THEN** the headline, descriptive subtext, and call-to-action buttons are clearly displayed

### Requirement: Vertical Carousel Showcase Section

The vertical carousel section shall display interactive slides containing feature highlights, imagery, titles, and descriptions, supporting next/prev controls and slide indicators.

#### Scenario: User interacts with the vertical carousel

- **GIVEN** the user scrolls to the vertical carousel section
- **WHEN** the user clicks navigation controls or scroll indicators
- **THEN** the vertical slides transition correctly and update the active slide view

### Requirement: Features & Highlights Grid

The features section shall present core capabilities in a clean multi-column grid with custom icons and descriptive text.

#### Scenario: User reviews features

- **GIVEN** the user views the features section
- **WHEN** the section renders
- **THEN** feature cards display correct icons, titles, and descriptions

### Requirement: Newsletter Signup

The newsletter section shall display an email input with validation and a subscribe button with loading/success states.

#### Scenario: User subscribes to newsletter

- **GIVEN** the user views the newsletter section
- **WHEN** the user enters a valid email and clicks subscribe
- **THEN** the form shows loading state then success confirmation

### Requirement: Footer with Component Dock Attribution

The footer shall contain site links, copyright notice, and a required link to `https://www.componentdock.com/` ("Component Dock").

#### Scenario: User scrolls to footer

- **GIVEN** the user reaches the bottom of the page
- **WHEN** the footer renders
- **THEN** the Component Dock attribution link is visible and correctly formatted

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Unit tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] CNAME points to `carouselroll.free.componentdock.com`
