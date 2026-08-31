# Template: Roundabout (Carousel)

## Purpose

Recreation of ColorLib **Carousel V06** (`https://colorlib.com/wp/template/carousel-06/`), styled as a modern interactive multi-item carousel and slider showcase for digital agencies and product features.

- **Source Slug:** `carousel-06`
- **Preview URL:** `https://roundabout.free.componentdock.com`
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons, Vitest.

## Design Tokens

- **Brand Colors:**
  - Primary / Accent: `#3b82f6` (Blue-500) / `#2563eb` (Blue-600)
  - Neutral Dark: `#0f172a` (Slate-900)
  - Neutral Light: `#f8fafc` (Slate-50)
  - Muted: `#64748b` (Slate-500)
- **Typography:**
  - Font Family: Inter, system-ui, sans-serif
- **UI Elements:**
  - Rounded corners (`rounded-xl`, `rounded-2xl`)
  - Soft shadows (`shadow-lg`, `shadow-xl`)
  - Smooth sliding transitions and interactive card focus states.

## Gherkin Requirements & Scenarios

### Feature: Interactive Carousel Showcase

As a site visitor, I want to browse multiple featured slides in a responsive carousel with smooth navigation controls so that I can explore featured content efficiently.

#### Scenario: Hero Showcase Carousel

- **Given** the user visits the Roundabout home page
- **When** the hero section loads
- **Then** a prominent featured carousel displays multiple slides with active pagination dots and left/right navigation arrows.

#### Scenario: Slide Navigation & Interaction

- **Given** the carousel is displayed
- **When** the user clicks the "Next" arrow or pagination indicator
- **Then** the active slide transitions smoothly to display the next featured item with updated heading, description, and call-to-action button.

#### Scenario: Feature Highlights Section

- **Given** the user scrolls past the hero carousel
- **When** the feature grid section is visible
- **Then** multiple feature cards display with icons, titles, and descriptive text.

#### Scenario: Component Dock Footer Attribution

- **Given** the user scrolls to the bottom of the page
- **When** the footer is rendered
- **Then** it contains copyright and a prominent link to `https://www.componentdock.com/` labeled "Component Dock".

## Verification Checklist

- [ ] TypeScript strict mode compiles without errors.
- [ ] All Vitest tests pass with 100% coverage.
- [ ] Tailwind v4 CSS tokens and `injectUiSource()` configured correctly.
- [ ] Footer includes Component Dock link.
