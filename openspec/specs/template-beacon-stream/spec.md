# Template: Beacon Stream (Carousel Showcase / UI Component)
<!-- prep-status: shipped-as=carouselhub -->
> **SHIPPED-UNDER** — the ColorLib `carousel-03` design this prep describes already
> ships as `apps/carouselhub` (<https://carouselhub.free.componentdock.com>).
> Do not scaffold `apps/beacon-stream`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-carouselhub/spec.md`.

## Purpose

- Recreation of ColorLib "Carousel 03" (`https://colorlib.com/wp/template/carousel-03/`).
- Preview URL: `https://preview.colorlib.com/theme/carousel-03/`
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons, Vitest.
- Category: Carousel & Content Showcase UI.

## Design Tokens

- **Brand Colors**:
  - Primary Accent: `#3b82f6` (Blue-500)
  - Secondary Accent: `#6366f1` (Indigo-500)
  - Background: `#f8fafc` (Slate-50)
  - Card Background: `#ffffff` (White)
  - Text Primary: `#0f172a` (Slate-900)
  - Text Muted: `#64748b` (Slate-500)
- **Typography**:
  - Font Family: `Inter, system-ui, -apple-system, sans-serif`
- **Component Styling**:
  - Border Radius: `rounded-xl` (12px) for cards, `rounded-full` for navigation buttons/pills.
  - Shadows: `shadow-lg`, `shadow-md` for carousel cards and floating controls.

## Requirements

### Requirement 1: Hero Header & Overview

#### Scenario: Hero Header & Overview

- The page must feature a clean header displaying the carousel showcase title, subtitle, and theme navigation.
- Scenario: User loads Beacon Stream and views header info
- **GIVEN** the user navigates to the Beacon Stream showcase
- **WHEN** the page renders
- **THEN** the header displays "Beacon Stream" with an intuitive subtitle and quick navigation links

### Requirement 2: Interactive Card Carousel

#### Scenario: Interactive Card Carousel

- The template must display a responsive, smooth-scrolling card carousel featuring rich media, titles, descriptions, and action links.
- Scenario: User interacts with the carousel navigation
- **GIVEN** the carousel is displayed with multiple slide cards
- **WHEN** the user clicks the "Next" or "Previous" navigation buttons (or drags/swipes)
- **THEN** the active slide updates smoothly with transition effects and highlights the corresponding pagination dot

### Requirement 3: Detailed Slide Cards & CTAs

#### Scenario: Detailed Slide Cards & CTAs

- Each slide card must contain high-quality preview imagery, category tags, headline text, metadata (author/date), and a call-to-action button.
- Scenario: User clicks a slide action button
- **GIVEN** a slide card is visible in the active viewport
- **WHEN** the user clicks the "Explore" or "View Details" button
- **THEN** an interactive modal or feedback toast triggers displaying full item details

### Requirement 4: Footer with Component Dock Link

#### Scenario: Footer with Component Dock Link

- The footer must contain copyright notice, social links, and a mandatory link to `https://www.componentdock.com/`.
- Scenario: User views the page footer
- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer renders
- **THEN** it displays copyright information and a prominent link to Component Dock (`https://www.componentdock.com/`)

## Verification checklist

- [ ] Spec validation (`npm run spec:validate`) passes.
- [ ] Unit & component tests cover all carousel interactions and states (100% coverage).
- [ ] Responsive layout verified across mobile, tablet, and desktop viewports.
- [ ] Footer contains the required Component Dock attribution link.

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/carousel-03/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#3b82f6` — nearest `#007bff` (d=60)
- `#6366f1` — nearest `#b063c5` (d=89)
- `#64748b` — nearest `#b063c5` (d=97)
<!-- live-palette-unverified:end -->
