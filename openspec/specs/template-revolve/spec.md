# Template: Revolve (Travel & Carousel Showcase)

## Purpose

Recreation of ColorLib **Carousel 01** (`https://colorlib.com/wp/template/carousel-01/`), preview URL: `https://preview.colorlib.com/theme/bootstrap/carousel-01/`.
Tech stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict), Lucide React / React Icons, Vitest + Testing Library (100% coverage).

## Design tokens

- **Brand Colors**:
  - Primary / Accent: `#ffc107` (Amber / Gold)
  - Dark / Overlay: `rgba(0, 0, 0, 0.4)` to `rgba(0, 0, 0, 0.6)`
  - Text / Headings: `#ffffff` (White), `#f8f9fa`
  - Backgrounds: Deep immersive travel photography backdrops (Japan, Singapore, Norway, etc.)
- **Typography**:
  - Font Family: `Poppins, Arial, sans-serif`
  - Headings: Bold, uppercase, elegant letter-spacing (`tracking-wider`, `text-4xl` to `text-6xl`)
- **UI Elements & Shape**:
  - Full-screen immersive carousel slider
  - Navigation arrows: Circular or subtle square backdrop with icons (`⟨` / `⟩`)
  - Pagination indicators: Minimalist dot indicators at the bottom
  - Call to Action: Discover / Explore destination buttons with smooth hover transitions

## Requirements & Gherkin Scenarios

### Requirement 1: Full-Screen Immersive Carousel

- As a visitor, I want to view an immersive full-screen carousel showcasing top travel destinations (Japan, Singapore, Norway) with high-impact photography and bold typography.
- **Scenario**: Initial load and slide transition
  - Given the user opens the Revolve template
  - When the carousel displays the first slide ("BEST PLACE TO TRAVEL" / "JAPAN")
  - Then the background image should cover the full viewport with a dark gradient overlay
  - And the heading and subtitle should be prominently displayed in centered or left-aligned layout
  - And navigation arrows and pagination dots should be interactive

### Requirement 2: Navigation & Controls

- As a user, I want to use next/prev arrows or pagination dots to browse different destinations seamlessly.
- **Scenario**: Clicking next arrow advances slide
  - Given the carousel is on slide 1
  - When the user clicks the next arrow or pagination dot for slide 2
  - Then the active slide transitions to slide 2 ("SINGAPORE") with smooth animation

### Requirement 3: ComponentDock Footer Compliance

- As a visitor, I want a clean footer with a link to Component Dock.
- **Scenario**: Footer branding check
  - Given the user scrolls to or views the page footer
  - Then it must display a link to `https://www.componentdock.com/` with anchor text "Component Dock"

## Verification Checklist

- [ ] TypeScript strict compilation (`npm run typecheck`) passes with zero errors.
- [ ] Tailwind CSS 4 setup correctly styling colors, fonts, and layout.
- [ ] Vitest test suite runs and achieves 100% coverage (`npm run test:coverage`).
- [ ] Footer contains the mandatory ComponentDock link.
