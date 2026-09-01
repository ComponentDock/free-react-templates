# Template: Carousel Orbit (E-commerce / Product Showcase)

## Purpose

Recreation of ColorLib Carousel V12 (`https://colorlib.com/wp/template/carousel-12/`), preview URL: `https://preview.colorlib.com/theme/carousel-12/`. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Colors**:
  - Primary: `#007bff` (Bootstrap Blue for interactive links/buttons)
  - Text: `#212529` (Dark charcoal for crisp body copy)
  - Background: `#ffffff` (Clean white main background)
  - Accent / Card backgrounds: `#f8f9fa` (Light neutral gray)
- **Typography**:
  - Font Family: `Roboto, sans-serif`
  - Headings: `font-weight: 500`, dark charcoal `#212529`
- **Component Shapes**:
  - Buttons / Cards: Crisp modern layout with clean subtle shadows (`rounded-md`, clean borders)
  - Interactive Carousel: Horizontal product card slider with navigation controls (prev/next buttons)

## Requirements & Gherkin Scenarios

### Requirement 1: Header / Navigation Section

- The app must display a clean sticky navigation bar with brand title ("Carousel Orbit") and navigation links (Home, Products, Features, Contact).
- Every template footer must link `https://www.componentdock.com/` ("Component Dock").

#### Scenario: User views the navigation bar

- **Given** the user visits the Carousel Orbit template home page
- **Then** they see the navigation bar with brand title and links
- **And** they can click links to jump to page sections

### Requirement 2: Hero & Showcase Intro Section

- The app must display a prominent hero section introducing the product showcase with heading "Carousel #2" and subheading "Our Products".

#### Scenario: User views the hero section

- **Given** the user lands on the homepage
- **Then** they see the "Carousel #2" header and "Our Products" section intro

### Requirement 3: Product Carousel / Grid Showcase Section

- The app must display a responsive product carousel / grid featuring cards with product images (via picsum seeds), product titles ("Consectetur Adipisicing Elit", "Beatae Doloribu", "Accusantium Eius Soluta"), and action buttons.
- The carousel must support interactive scrolling / navigation via previous and next buttons.

#### Scenario: User navigates the product carousel

- **Given** the product showcase is displayed with multiple product cards
- **When** the user clicks the Next or Prev carousel buttons or scrolls
- **Then** the carousel items shift accordingly and remain responsive

### Requirement 4: Footer Section

- The footer must contain copyright notice and a required link to `https://www.componentdock.com/` ("Component Dock").

#### Scenario: User checks the footer

- **Given** the user scrolls to the bottom of the page
- **Then** they see the copyright notice and the required Component Dock link

## Verification Checklist

- [ ] Spec validates (`npm run spec:validate`)
- [ ] App builds successfully
- [ ] 100% test coverage on all components
- [ ] Footer links Component Dock
- [ ] Responsive across screen sizes
