# Template: CarouselTwelve (carousel-twelve)

## Purpose

Recreation of ColorLib **Carousel V12** (`https://colorlib.com/wp/template/carousel-12/`), a product list and item showcase carousel template built with React 19, Tailwind CSS 4, and TypeScript.

## Design tokens

- **Brand Colors**:
  - Primary / Accent: `#3b82f6` (Blue) / `#2563eb`
  - Neutral dark: `#1e293b` (Slate 800)
  - Neutral light: `#f8fafc` (Slate 50)
  - Card background: `#ffffff` with subtle shadows
- **Typography**:
  - Font Family: Inter, system-ui, sans-serif
  - Heading Weight: Bold (700)
  - Body Weight: Regular (400) / Medium (500)
- **UI Elements**:
  - Border radius: `rounded-xl` for cards, `rounded-full` for navigation buttons and badges
  - Shadows: `shadow-md` and `shadow-lg` for card elevation

## Requirements

### 1. Header / Navbar

- **Requirement**: The header shall display a brand logo, navigation links (Home, Products, Features, Testimonials, Contact), and a CTA button ("Get Started").

#### Scenario: User views header

- **GIVEN** the user loads the CarouselTwelve template
- **WHEN** the header renders
- **THEN** all navigation links and the CTA button are visible and interactive

### 2. Hero Showcase

- **Requirement**: The hero section shall display an attention-grabbing headline, description, and primary CTA alongside an inspiring featured visual/carousel preview.

#### Scenario: User views hero section

- **GIVEN** the user is on the main page
- **WHEN** the hero section renders
- **THEN** the headline, descriptive subtext, and call-to-action buttons are clearly displayed

### 3. Product Carousel Section

- **Requirement**: The product carousel shall present interactive slides containing product cards with images, titles, pricing, and "View Details" actions, supporting next/prev navigation and dot indicators.

#### Scenario: User interacts with the product carousel

- **GIVEN** the user scrolls to the product carousel
- **WHEN** the user clicks the next or previous carousel controls
- **THEN** the active product slides transition smoothly and update the visible items

### 4. Features Grid

- **Requirement**: The features section shall highlight key product benefits in a clean multi-column grid with custom icons and descriptive text.

#### Scenario: User reviews product features

- **GIVEN** the user views the features section
- **WHEN** the section renders
- **THEN** all feature cards display correct icons, titles, and descriptions

### 5. Testimonials Section

- **Requirement**: The testimonials section shall showcase customer reviews in quote cards with avatars and ratings.

#### Scenario: User reads testimonials

- **GIVEN** the user scrolls to the testimonials area
- **WHEN** the testimonials render
- **THEN** user feedback cards display with proper formatting and ratings

### 6. Footer

- **Requirement**: The footer shall contain company links, newsletter subscription, social icons, and the mandatory Component Dock attribution link (`https://www.componentdock.com/`).

#### Scenario: User checks footer attribution

- **GIVEN** the user reaches the bottom of the page
- **WHEN** the footer renders
- **THEN** the Component Dock attribution link is present and correctly pointed

## Verification checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] 100% test coverage maintained across new components
- [ ] Component Dock attribution present in footer
- [ ] Responsive layouts verified on mobile and desktop viewports
- [ ] 1. Header / Navbar — all navigation links and the CTA button are visible and interactive
- [ ] 2. Hero Showcase — the headline, descriptive subtext, and call-to-action buttons are clearly displayed
- [ ] 3. Product Carousel Section — the active product slides transition smoothly and update the visible items
- [ ] 4. Features Grid — all feature cards display correct icons, titles, and descriptions
- [ ] 5. Testimonials Section — user feedback cards display with proper formatting and ratings

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/carousel-12/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#3b82f6` — nearest `#007bff` (d=60)
- `#2563eb` — nearest `#007bff` (d=48)
<!-- live-palette-unverified:end -->
