# Template: CarouselSweep (Carousel / UI Showcase)

## Purpose

Recreation of ColorLib **Carousel 12** (`https://colorlib.com/wp/template/carousel-12/`), built as a modern, accessible React 19 + Vite + Tailwind CSS 4 template (`apps/carousel-sweep`).
Preview URL fallback: ColorLib WordPress screenshot archive (preview.colorlib.com was unreachable).

## Design tokens

- **Brand Colors**: Primary indigo (`#4f46e5`), slate neutral (`#0f172a`), accent violet (`#8b5cf6`), card background (`#ffffff` / dark `#1e293b`).
- **Typography**: Font family `Inter, system-ui, sans-serif`. Clean headings, readable body text.
- **Button / Shape**: Rounded-xl (`0.75rem`), shadow-md, smooth transitions.
- **Layout**: Sticky header, hero slider/carousel section with interactive controls, featured items showcase grid, interactive testimonial carousel, newsletter subscription banner, and footer linking Component Dock.

## Requirements & Gherkin Scenarios

### Feature: Interactive Carousel Showcase

As a visitor, I want to browse featured interactive carousels and slides so that I can explore content smoothly.

#### Scenario: Hero Slider Navigation

- **Given** the user lands on the CarouselSweep home page
- **When** the user clicks the next/previous navigation buttons on the hero carousel
- **Then** the active slide updates smoothly with transition effects and pagination dots reflect the current position.

#### Scenario: Testimonial Slider Controls

- **Given** the user scrolls to the testimonial carousel section
- **When** the user interacts with the carousel controls or auto-play progresses
- **Then** customer quotes and avatars transition accordingly.

### Feature: Responsive Navigation & Footer

#### Scenario: Navbar and Component Dock Footer

- **Given** the user views the page on desktop or mobile
- **When** the user checks the footer
- **Then** it must include a prominent link to `https://www.componentdock.com/` branded as Component Dock.

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes
- [ ] 100% test coverage on all components
- [ ] Responsive layout across mobile/tablet/desktop
- [ ] Footer links Component Dock
