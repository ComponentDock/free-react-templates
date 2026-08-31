# Template: Slideway (Carousel / Slideshow)

## Purpose

Recreation of ColorLib **Carousel 07** (`https://colorlib.com/wp/template/carousel-07/`), implemented as a modern React 19 + Tailwind CSS 4 + TypeScript template named **Slideway**.

- **Preview URL**: `https://preview.colorlib.com/theme/carousel-07/` (preview unreachable during prep; built from screenshot & standard carousel layout conventions)
- **Stack**: Vite, React 19, Tailwind CSS 4, Lucide React, TypeScript (strict).

## Design Tokens & Styling

- **Brand Colors**:
  - Primary: Indigo / Slate (`#4f46e5` / `bg-indigo-600`)
  - Secondary: Teal / Cyan (`#06b6d4` / `bg-cyan-500`)
  - Neutral dark: Slate 900 (`#0f172a`)
  - Neutral light: Slate 50 (`#f8fafc`)
- **Typography**: Sans-serif (`Inter`, `system-ui`, sans-serif).
- **Button Shapes**: Rounded-lg (`rounded-lg`), smooth transitions, subtle shadows.
- **Section Layouts**: Hero header with interactive carousel slider, featured slides/cards section, testimonial/feature highlights with dot navigation, statistics counter, call-to-action banner, and professional footer linking Component Dock.

## Requirements & Gherkin Scenarios

### 1. Navigation Header

- **Requirement**: The header must contain a brand logo, navigation links (Home, Features, Showcases, Testimonials, Contact), and a CTA action button.
- **Scenario**: User views the navigation bar
  - Given the app is loaded
  - When the user looks at the top header
  - Then they see the brand logo and navigation links

### 2. Hero Carousel Section

- **Requirement**: The hero section features a dynamic carousel with title, subtitle, CTA buttons, and slide navigation controls (previous/next buttons and dot indicators).
- **Scenario**: User interacts with the hero carousel
  - Given the hero section is displayed with slide 1 active
  - When the user clicks the next arrow or a pagination dot
  - Then the carousel smoothly transitions to slide 2 with updated headline and image

### 3. Features Grid

- **Requirement**: A section highlighting key features with icons, titles, and descriptions in a responsive grid.
- **Scenario**: User browses the features
  - Given the user scrolls down to the features section
  - When they view the feature cards
  - Then each card displays an icon, title, and descriptive text

### 4. Interactive Showcase & Slides

- **Requirement**: A dedicated showcase slider section displaying cards with imagery and descriptions.
- **Scenario**: User navigates the showcase carousel
  - Given the showcase slider is visible
  - When the user interacts with slide controls
  - Then the items scroll correctly into view

### 5. Statistics Counter & Testimonials

- **Requirement**: Sections displaying key metrics and customer/user testimonials.
- **Scenario**: User reads testimonials
  - Given the user views the testimonial section
  - When they switch between testimonial slides
  - Then the respective review text and author details appear

### 6. Call to Action & Footer

- **Requirement**: A conversion CTA banner and a professional footer linking `https://www.componentdock.com/`.
- **Scenario**: User reaches the footer
  - Given the user scrolls to the bottom of the page
  - When they inspect the footer
  - Then they see copyright info and a branded link to Component Dock

## Verification Checklist

- [ ] TypeScript strict compilation (`npm run typecheck`) passes without errors.
- [ ] All unit tests pass with **100% coverage** (`npm run test:coverage`).
- [ ] Lint and formatting checks pass.
- [ ] Footer correctly links `https://www.componentdock.com/`.
- [ ] No mention of ColorLib in app source code.
