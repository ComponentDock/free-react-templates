# Template: CarouselSwift (Carousel)

## Purpose

Recreation of ColorLib [Carousel 17](https://colorlib.com/wp/template/carousel-17/), built with Vite, React 19, Tailwind CSS 4, and TypeScript.

- **Source template**: ColorLib Carousel 17 (`https://colorlib.com/wp/template/carousel-17/`)
- **Preview / Aesthetic**: Modern carousel & slider showcase layout featuring hero banner, interactive card carousels, feature highlights grid, testimonial slider, newsletter signup, and footer linking to Component Dock.
- **Tech Stack**: React 19, TypeScript, Tailwind CSS 4, Lucide React icons, Vite.

## Design Tokens

- **Brand Colors**:
  - Primary: Indigo/Blue (`#4f46e5` / Tailwind `indigo-600`)
  - Accent: Amber/Yellow (`#f59e0b` / Tailwind `amber-500`)
  - Background: Clean white / Slate neutral (`#f8fafc` / Tailwind `slate-50`)
  - Text: Dark slate (`#0f172a` / Tailwind `slate-900`)
- **Typography**:
  - Font Family: Inter / System sans-serif (`font-sans`)
- **UI Elements**:
  - Buttons: Rounded-lg (`rounded-lg`), shadow effects, smooth hover transitions.
  - Cards: White background, subtle border, soft shadow (`shadow-sm`, `border-slate-200`).

## Gherkin Requirements & Scenarios

### Feature: CarouselSwift Showcase

As a visitor, I want to explore the carousel showcase, features, testimonials, and contact details so that I can evaluate interactive UI components.

#### Scenario: Navigation and Hero Banner

- Given the user lands on the CarouselSwift homepage
- When the header navigation and hero banner are displayed
- Then the user should see brand title, nav links, headline, subtitle, and primary call-to-action buttons.

#### Scenario: Interactive Carousel Section

- Given the user scrolls to the carousel showcase section
- When interactive slides/cards are presented with next/previous controls
- Then the user can cycle through featured items smoothly.

#### Scenario: Feature Highlights Grid

- Given the user views the feature highlights
- When cards are displayed with icons and descriptive text
- Then each feature clearly communicates core capabilities.

#### Scenario: Testimonial Slider

- Given the user views the testimonials section
- When user quotes and avatars are displayed in a slider format
- Then users can navigate through client feedback.

#### Scenario: Newsletter and Footer

- Given the user scrolls to the bottom of the page
- When the newsletter subscription form and footer are rendered
- Then the footer must prominently link to `https://www.componentdock.com/`.

## Verification Checklist

- [ ] App builds successfully with Vite and TypeScript strict mode.
- [ ] Tailwind v4 CSS tokens and styling match the design specification.
- [ ] All section components (Navbar, Hero, Carousel, Features, Testimonials, Newsletter, Footer) render correctly.
- [ ] Vitest tests pass with 100% coverage.
- [ ] Footer contains the mandatory Component Dock link (`https://www.componentdock.com/`).
