# Template: CarouselPulse (Carousel & Showcase category)
<!-- prep-status: shipped-as=reel -->
> **SHIPPED-UNDER** — the ColorLib `carousel-11` design this prep describes already
> ships as `apps/reel` (<https://reel.free.componentdock.com>).
> Do not scaffold `apps/carouselpulse`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-reel/spec.md`.

## Purpose

- Recreation of ColorLib "Carousel 11" (`https://colorlib.com/wp/template/carousel-11/`).
- Preview URL: `https://preview.colorlib.com/theme/bootstrap/carousel-11/`
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons, interactive image slider/carousel.

## Design tokens

- **Colors**: Neutral dark background (`#111827` / slate-900), white heading text (`#ffffff`), muted gray paragraphs (`#b3b3b3`), crisp white/translucent dot indicators (`rgba(255, 255, 255, 0.5)` to `white`).
- **Typography**: Font family: `"Roboto"`, sans-serif. Clean, modern typography with precise weight hierarchy.
- **Layout**: Centered container with responsive image slider, prominent prev/next floating control arrows, and bottom pagination dots.
- **Footer Attribution**: Must include link to `https://www.componentdock.com/` ("Component Dock").

## Requirements

### Feature: Interactive Image Carousel

As a visitor, I want to browse high-resolution featured photos via an interactive carousel with navigation arrows and dot indicators.

#### Scenario: User navigates slides using next and previous buttons

- **GIVEN** the CarouselPulse homepage is loaded
- **WHEN** the user clicks the "Next" (`›`) or "Previous" (`‹`) arrow control
- **THEN** the carousel transitions smoothly to the next or previous slide image
- **AND** the active pagination indicator updates accordingly

#### Scenario: User clicks pagination dots to jump directly to a slide

- **GIVEN** the CarouselPulse homepage is loaded
- **WHEN** the user clicks a specific pagination dot at the bottom
- **THEN** the carousel displays the corresponding slide image immediately

### Feature: Branding and Component Dock Footer

As a visitor, I want clear branding and a footer linking to Component Dock.

#### Scenario: Footer links to Component Dock

- **GIVEN** the CarouselPulse application is rendered
- **WHEN** the user scrolls to the footer
- **THEN** they see a "Component Dock" link pointing to `https://www.componentdock.com/`

## Verification checklist

- [ ] `npm run build` succeeds without type or lint errors
- [ ] Vitest test suite passes with 100% coverage
- [ ] Interactive carousel next/prev and dot navigation work correctly
- [ ] Footer contains Component Dock link
