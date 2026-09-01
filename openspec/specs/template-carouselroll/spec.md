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

## Sections & Gherkin Requirements

### 1. Header / Navbar

- **Requirement**: The header shall display a brand logo, navigation links (Home, Slideshow, Features, Gallery, Contact), and a CTA button ("Get Started").
- **Scenario**: User views header
  - Given the user loads the CarouselRoll template
  - When the header renders
  - Then all navigation links and the CTA button are visible and interactive.

### 2. Hero Showcase

- **Requirement**: The hero section shall present an engaging headline, descriptive subtext, and call-to-action buttons alongside an interactive vertical carousel preview.
- **Scenario**: User views hero section
  - Given the user is on the main page
  - When the hero section renders
  - Then the headline, descriptive subtext, and call-to-action buttons are clearly displayed.

### 3. Vertical Carousel Showcase Section

- **Requirement**: The vertical carousel section shall display interactive vertical slides containing feature highlights, imagery, titles, and descriptions, supporting next/prev controls and slide indicators.
- **Scenario**: User interacts with the vertical carousel
  - Given the user scrolls to the vertical carousel section
  - When the user clicks navigation controls or scroll indicators
  - Then the vertical slides transition correctly and update the active slide view.

### 4. Features & Highlights Grid

- **Requirement**: The features section shall present core capabilities in a clean multi-column grid with custom icons and descriptive text.
- **Scenario**: User reviews features
  - Given the user views the features section
  - When the section renders
  - Then feature cards display correct icons, titles, and descriptions.

### 5. Call to Action & Footer

- **Requirement**: The footer shall contain site links, newsletter signup, copyright notice, and a required link to `https://www.componentdock.com/` ("Component Dock").
- **Scenario**: User scrolls to footer
  - Given the user reaches the bottom of the page
  - When the footer renders
  - Then the Component Dock attribution link is visible and correctly formatted.

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Unit tests pass with 100% coverage (`npm run test:coverage`)
- [ ] Build succeeds (`npm run build`)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] CNAME points to `carouselroll.free.componentdock.com`
