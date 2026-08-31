# Template: SlideBay (Carousel / Slider UI)

## Purpose

Recreation of ColorLib **Carousel 05** (`https://colorlib.com/wp/template/carousel-05/`), a modern slide/carousel interface template featuring high-impact hero carousel slides, interactive navigation controls, feature cards, testimonial slider, call-to-action sections, and fully responsive layout. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens (Extracted from Preview / Screenshot Reference)

- **Brand Colors:**
  - Primary: Deep Indigo / Blue (`#4f46e5` / `indigo-600`)
  - Accent: Vibrant Coral / Orange (`#f97316` / `orange-500`)
  - Backgrounds: Neutral Slate (`#f8fafc` / `slate-50`, `#0f172a` / `slate-900`)
  - Text: Dark Charcoal (`#1e293b` / `slate-800`), Light Muted (`#64748b` / `slate-500`)
- **Typography:**
  - Font Family: `Inter`, `system-ui`, sans-serif
  - Headings: Bold sans-serif, high contrast
- **UI Elements & Layout:**
  - Rounded card containers (`rounded-xl` / `rounded-2xl`)
  - Smooth slide transition wrappers with interactive dot/arrow navigation
  - Clean feature grids and responsive navigation bar

## Gherkin Requirements & Scenarios

### Feature 1: Hero Carousel Section

- **Scenario:** User views the hero carousel
  - **Given** the user visits the SlideBay home page
  - **When** the page loads
  - **Then** the primary carousel banner is visible with headline, subtitle, and CTA buttons
  - **And** next/previous arrow controls and pagination dots allow switching slides

### Feature 2: Interactive Feature Showcase

- **Scenario:** User browses core features
  - **Given** the user scrolls to the feature section
  - **When** feature cards are displayed
  - **Then** each card highlights a distinct capability with icon, title, and description

### Feature 3: Testimonials / Carousel Display

- **Scenario:** User interacts with the testimonial slider
  - **Given** the user views the testimonials section
  - **When** clicking pagination or swiping through slides
  - **Then** testimonial quotes and author details update smoothly

### Feature 4: Call to Action & Footer

- **Scenario:** User reaches the footer
  - **Given** the user scrolls to the bottom of the page
  - **When** the footer is rendered
  - **Then** navigation links, copyright, and the mandatory "Component Dock" link (`https://www.componentdock.com/`) are prominently displayed

## Verification Checklist

- [ ] App builds successfully with Vite and Tailwind CSS 4
- [ ] All sections match the Carousel 05 reference structure
- [ ] 100% test coverage with Vitest and Testing Library
- [ ] Footer links to `https://www.componentdock.com/`
