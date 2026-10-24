# Template: CarouselSwift (Carousel)
<!-- prep-status: shipped-as=spinwheel -->
> **SHIPPED-UNDER** — the ColorLib `carousel-17` design this prep describes already
> ships as `apps/spinwheel` (<https://spinwheel.free.componentdock.com>).
> Do not scaffold `apps/carouselswift`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-spinwheel/spec.md`.

## Purpose

Recreation of ColorLib [Carousel 17](https://colorlib.com/wp/template/carousel-17/), built with Vite, React 19, Tailwind CSS 4, and TypeScript.

- **Source template**: ColorLib Carousel 17 (`https://colorlib.com/wp/template/carousel-17/`)
- **Preview / Aesthetic**: Modern carousel & slider showcase layout featuring hero banner, interactive card carousels, feature highlights grid, testimonial slider, newsletter signup, and footer linking to Component Dock.
- **Tech Stack**: React 19, TypeScript, Tailwind CSS 4, Lucide React icons, Vite.
- **Source design:** ColorLib "Carousel 17" — https://colorlib.com/wp/template/carousel-17/

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

## Requirements

### Feature: CarouselSwift Showcase

As a visitor, I want to explore the carousel showcase, features, testimonials, and contact details so that I can evaluate interactive UI components.

#### Scenario: Navigation and Hero Banner

- **GIVEN** the user lands on the CarouselSwift homepage
- **WHEN** the header navigation and hero banner are displayed
- **THEN** the user should see brand title, nav links, headline, subtitle, and primary call-to-action buttons

#### Scenario: Interactive Carousel Section

- **GIVEN** the user scrolls to the carousel showcase section
- **WHEN** interactive slides/cards are presented with next/previous controls
- **THEN** the user can cycle through featured items smoothly

#### Scenario: Feature Highlights Grid

- **GIVEN** the user views the feature highlights
- **WHEN** cards are displayed with icons and descriptive text
- **THEN** each feature clearly communicates core capabilities

#### Scenario: Testimonial Slider

- **GIVEN** the user views the testimonials section
- **WHEN** user quotes and avatars are displayed in a slider format
- **THEN** users can navigate through client feedback

#### Scenario: Newsletter and Footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the newsletter subscription form and footer are rendered
- **THEN** the footer must prominently link to `https://www.componentdock.com/`

## Verification checklist

- [ ] App builds successfully with Vite and TypeScript strict mode.
- [ ] Tailwind v4 CSS tokens and styling match the design specification.
- [ ] All section components (Navbar, Hero, Carousel, Features, Testimonials, Newsletter, Footer) render correctly.
- [ ] Vitest tests pass with 100% coverage.
- [ ] Footer contains the mandatory Component Dock link (`https://www.componentdock.com/`).

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/bootstrap/carousel-17/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#4f46e5` — nearest `#0056b3` (d=95)
- `#f59e0b` — nearest `#0056b3` (d=306)
<!-- live-palette-unverified:end -->
