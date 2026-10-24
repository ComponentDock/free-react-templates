# Template: Gyrate (Carousel / Split-Screen)
<!-- prep-status: shipped-as=slidespot -->
> **SHIPPED-UNDER** — the ColorLib `carousel-06` design this prep describes already
> ships as `apps/slidespot` (<https://slidespot.free.componentdock.com>).
> Do not scaffold `apps/gyrate`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-slidespot/spec.md`.

## Purpose

Recreation of ColorLib "Carousel V06" (`https://colorlib.com/wp/template/carousel-06/`).
Stack: Vite, React 19, Tailwind CSS 4, TypeScript.
A responsive and flexible split-screen carousel template featuring imagery, descriptive text, feature highlights, and interactive CTA buttons.

## Design Tokens

- **Colors**:
  - Background primary: `#ffffff` (White)
  - Background secondary / soft tint: `#fdf3f1` (Warm Blush Tint)
  - Text primary: `#111827` (Gray 900)
  - Text muted: `#4b5563` (Gray 600)
  - Accent / Primary CTA: `#e11d48` (Rose 600) / `#f43f5e` (Rose 500)
  - Border / Divider: `#e5e7eb` (Gray 200)
- **Typography**:
  - Font Family: Inter, system-ui, sans-serif
  - Headings: Bold, clean sans-serif
- **Buttons & UI Elements**:
  - Border Radius: `rounded-lg` (8px) / `rounded-full` for pill buttons & indicators
  - Shadows: Subtle drop shadows for cards and active carousel panels

## Requirements

### Feature 1: Navigation Bar

As a visitor, I want a clean sticky navigation bar with brand logo, links, and CTA so that I can easily navigate the site.

#### Scenario: User views header

- **GIVEN** the page is loaded
- **THEN** the header displays the brand logo "Gyrate", navigation links (Home, Features, Gallery, About, Contact), and a "Get Started" button

### Feature 2: Split-Screen Carousel Hero

As a visitor, I want an interactive split-screen carousel displaying striking imagery paired with engaging headlines, descriptions, and CTA buttons so that I can explore featured content.

#### Scenario: User interacts with the split-screen carousel

- **GIVEN** the hero carousel is displayed with text on one side and imagery on the other
- **WHEN** the user clicks the next/previous carousel controls or pagination dots
- **THEN** the slide updates smoothly with new headline, description, and high-resolution picture

### Feature 3: Features / Highlights Section

As a visitor, I want to see key features presented in a structured grid with icons so that I understand the core benefits of the service.

#### Scenario: User views feature cards

- **GIVEN** the user scrolls down to the features section
- **THEN** multiple cards with icons, titles, and descriptive text are shown in a responsive grid

### Feature 4: Interactive Call to Action (CTA) Banner

As a visitor, I want a prominent banner encouraging action so that I can subscribe or sign up.

#### Scenario: User submits newsletter / CTA form

- **GIVEN** the CTA banner is visible with an email input field
- **WHEN** the user enters a valid email and clicks subscribe
- **THEN** a success confirmation message is displayed

### Feature 5: Footer with Component Dock Link

As a visitor, I want a footer containing standard links and the mandatory Component Dock attribution.

#### Scenario: User scrolls to footer

- **GIVEN** the page footer is rendered
- **THEN** it contains copyright info, social links, and a prominent link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [x] App workspace `@free-react-templates/gyrate` correctly created in `apps/gyrate` — superseded: shipped as `apps/slidespot`.
- [ ] TypeScript strict checking passes without errors.
- [ ] Vitest test suite achieves 100% test coverage.
- [ ] Footer links to `https://www.componentdock.com/`.
- [ ] No mention of ColorLib in source code or assets.
- [ ] Navigation Bar — the header displays the brand logo "Gyrate", navigation links (Home, Features, Gallery, About, Contact), and a "Get Started" button
- [ ] Split-Screen Carousel Hero — the slide updates smoothly with new headline, description, and high-resolution picture
- [ ] Features / Highlights Section — multiple cards with icons, titles, and descriptive text are shown in a responsive grid
- [ ] Interactive Call to Action (CTA) Banner — a success confirmation message is displayed
