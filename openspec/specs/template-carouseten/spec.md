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

## Requirements

### Requirement: Hero Banner & Overview

The hero section SHALL display a compelling headline, description, and quick action buttons to explore the carousel slides.

#### Scenario: User loads the carousel showcase template

- **GIVEN** the user navigates to the Carouseten landing page.
- **WHEN** the page renders.
- **THEN** the hero section displays a headline, description, and CTA buttons.

### Requirement: Interactive Thumbnail Carousel

The carousel component SHALL display multiple slides with thumbnail previews, navigation arrows, and active slide indicators.

#### Scenario: User browses carousel items

- **GIVEN** the carousel component is mounted with multiple slides and thumbnail previews.
- **WHEN** the user clicks navigation arrows, thumbnail items, or dot indicators.
- **THEN** the active slide updates smoothly, displaying the corresponding image, caption, and title.

### Requirement: Feature Highlights Grid

The feature grid section SHALL display cards detailing responsive layouts, touch gesture support, custom styling, and performance.

#### Scenario: User reviews feature cards

- **GIVEN** the feature grid section is visible.
- **WHEN** the user scrolls through the feature cards.
- **THEN** they see cards with icons, titles, and descriptions.

### Requirement: Newsletter Subscription

The newsletter form SHALL validate email input and display subscription status.

#### Scenario: User subscribes with valid email

- **GIVEN** the newsletter subscription form is displayed.
- **WHEN** the user enters a valid email address and clicks subscribe.
- **THEN** a success message is displayed confirming the subscription.

#### Scenario: User enters invalid email

- **GIVEN** the newsletter subscription form is displayed.
- **WHEN** the user enters an invalid email address and clicks subscribe.
- **THEN** an error message is displayed asking for a valid email.

### Requirement: Footer & Branding

The footer SHALL display the template name, copyright notice, and a link to Component Dock.

#### Scenario: User checks the page footer

- **GIVEN** the page is scrolled to the bottom.
- **WHEN** the footer is rendered.
- **THEN** it contains the copyright notice and a link to https://www.componentdock.com/ (Component Dock).

## Verification Checklist

- [ ] TypeScript strict compilation passes without errors.
- [ ] ESLint and code quality checks pass.
- [ ] Vitest unit tests achieve 100% test coverage across all components.
- [ ] Footer correctly links `https://www.componentdock.com/`.
- [ ] No references to ColorLib remain in the app source code.
- [ ] Build completes successfully with correct CNAME and homepage setup.
