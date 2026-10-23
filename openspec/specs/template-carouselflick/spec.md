# Template: CarouselFlick (Carousel / Portfolio Showcase)

## Purpose

Recreation of ColorLib Carousel V11 (`https://colorlib.com/wp/template/carousel-11/`), built with Vite, React 19, Tailwind CSS 4, and TypeScript.
Features an immersive image & content carousel showcase, portfolio highlights, interactive slide controls, captions, thumbnail navigation, feature grid, and newsletter CTA.

## Design Tokens

- **Brand Primary:** `#0f172a` (slate-900), Accent: `#f59e0b` (amber-500), Background: `#020617` (slate-950), Surface: `#1e293b` (slate-800), Text: `#f8fafc` (slate-50).
- **Fonts:** Inter / Poppins sans-serif.
- **Radii:** Rounded-xl for cards, rounded-lg for buttons and controls.

## Requirements

### Feature 1: Navigation Bar

#### Scenario: Feature 1: Navigation Bar

- Scenario: User views header
- **GIVEN** the application is loaded
- **THEN** the navigation bar displays brand logo "CarouselFlick", menu links (Home, Showcase, Gallery, About, Contact), and a CTA button ("Explore")

### Feature 2: Immersive Hero Carousel

#### Scenario: Feature 2: Immersive Hero Carousel

- Scenario: User interacts with the main carousel slider
- **GIVEN** the carousel is displayed in the hero section
- **WHEN** the user clicks the "Next" or "Prev" buttons or thumbnail indicators
- **THEN** the active slide updates with a smooth transition, displaying new imagery, title, category badge, description, and action button

### Feature 3: Thumbnail Navigation Strip

#### Scenario: Feature 3: Thumbnail Navigation Strip

- Scenario: User selects a slide from the thumbnail strip
- **GIVEN** the thumbnail strip is visible below the main slider
- **WHEN** the user clicks a specific thumbnail preview
- **THEN** the main carousel jumps directly to that selected slide

### Feature 4: Portfolio Highlights Grid

#### Scenario: Feature 4: Portfolio Highlights Grid

- Scenario: User explores feature grid
- **GIVEN** the portfolio highlights section is rendered
- **THEN** visitor sees cards showcasing featured creative projects with images, tags, and detail links

### Feature 5: Newsletter Subscription CTA

#### Scenario: Feature 5: Newsletter Subscription CTA

- Scenario: User subscribes to updates
- **GIVEN** the newsletter section is visible
- **WHEN** the user enters a valid email address and clicks Subscribe
- **THEN** a success confirmation message is displayed

### Feature 6: Footer with Component Dock Attribution

#### Scenario: Feature 6: Footer with Component Dock Attribution

- Scenario: User scrolls to footer
- **GIVEN** the footer is rendered at the bottom of the page
- **THEN** it displays copyright, social links, and a prominent link to https://www.componentdock.com/ ("Component Dock")

## Verification checklist

- [ ] TypeScript compilation passes with zero errors
- [ ] ESLint and oxlint report no issues
- [ ] Vitest component tests pass with 100% coverage across lines, functions, branches, statements
- [ ] Production build succeeds via Vite
- [ ] Footer contains the mandatory Component Dock link
- [ ] Navigation Bar — the navigation bar displays brand logo "CarouselFlick", menu links (Home, Showcase, Gallery, About, Contact), and a CTA button ("Explore")
- [ ] Immersive Hero Carousel — the active slide updates with a smooth transition, displaying new imagery, title, category badge, description, and action button
- [ ] Thumbnail Navigation Strip — the main carousel jumps directly to that selected slide
- [ ] Portfolio Highlights Grid — visitor sees cards showcasing featured creative projects with images, tags, and detail links
- [ ] Newsletter Subscription CTA — a success confirmation message is displayed

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/carousel-11/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#f59e0b` — nearest `#0056b3` (d=306)
<!-- live-palette-unverified:end -->
