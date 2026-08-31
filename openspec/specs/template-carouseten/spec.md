# Template: Carouseten (Carousel Showcase)

## Purpose

Recreation of ColorLib `carousel-10` (`https://colorlib.com/wp/template/carousel-10/`), built as a modern, responsive React 19 + Tailwind CSS 4 + TypeScript web application.

- **Preview URL:** https://preview.colorlib.com/theme/carousel-10/
- **Original Source Slug:** `carousel-10`
- **Stack:** Vite, React 19, Tailwind CSS 4, Lucide React, Vitest + Testing Library (100% coverage).

## Design Tokens

- **Brand Colors:**
  - Primary / Accent: Indigo / Blue gradient (`bg-gradient-to-r from-indigo-600 to-blue-500`, text `#4f46e5`)
  - Backgrounds: Clean light neutral backdrop (`bg-slate-50` / `bg-white`), dark mode slate-900.
  - Text: Slate-800 for primary headings, slate-600 for body copy.
- **Typography:**
  - Font Family: `Inter`, system-ui, sans-serif.
  - Headings: Bold, clean sans-serif (`font-bold tracking-tight`).
- **Layout & Components:**
  - Responsive multi-item thumbnail carousel with active preview display, navigation arrows, dot indicators, and slide captions.
  - Hero introduction banner explaining the carousel collection.
  - Interactive feature showcase grid highlighting responsive design, touch support, and smooth transitions.
  - Interactive CTA newsletter subscription card.
  - Footer with required attribution linking `https://www.componentdock.com/`.

## Requirements & Scenarios

### Feature 1: Hero Banner & Overview

- **Scenario:** User loads the carousel showcase template.
  - **Given** the user navigates to the Carouseten landing page.
  - **When** the page renders.
  - **Then** the hero section displays a compelling headline, description, and quick action buttons to explore the carousel slides.

### Feature 2: Interactive Thumbnail Carousel

- **Scenario:** User browses and interacts with the featured carousel items.
  - **Given** the carousel component is mounted with multiple slides and thumbnail previews.
  - **When** the user clicks navigation arrows, thumbnail items, or dot indicators.
  - **Then** the active slide updates smoothly, displaying the corresponding image, caption, and title.

### Feature 3: Feature Highlights Grid

- **Scenario:** User reviews the carousel's technical features.
  - **Given** the feature grid section is visible.
  - **When** the user scrolls through the feature cards.
  - **Then** they see cards detailing responsive layouts, touch gesture support, custom styling, and performance.

### Feature 4: Newsletter Subscription

- **Scenario:** User subscribes to updates.
  - **Given** the newsletter subscription form is displayed.
  - **When** the user enters a valid email address and clicks subscribe.
  - **Then** a success message is displayed confirming the subscription.

### Feature 5: Footer & Branding

- **Scenario:** User checks the page footer.
  - **Given** the page is scrolled to the bottom.
  - **When** the footer is rendered.
  - **Then** it contains the copyright notice and a clear link to `https://www.componentdock.com/` ("Component Dock").

## Verification Checklist

- [ ] TypeScript strict compilation passes without errors.
- [ ] ESLint and code quality checks pass.
- [ ] Vitest unit tests achieve 100% test coverage across all components.
- [ ] Footer correctly links `https://www.componentdock.com/`.
- [ ] No references to ColorLib remain in the app source code.
- [ ] Build completes successfully with correct CNAME and homepage setup.
