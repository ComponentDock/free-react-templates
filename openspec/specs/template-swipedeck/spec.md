# Template: SwipeDeck (Carousel)
<!-- prep-status: shipped-as=carouselroll -->
> **SHIPPED-UNDER** — the ColorLib `carousel-13` design this prep describes already
> ships as `apps/carouselroll` (<https://carouselroll.free.componentdock.com>).
> Do not scaffold `apps/swipedeck`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-carouselroll/spec.md`.

## Purpose

Recreation of ColorLib "Carousel 13" (`https://colorlib.com/wp/template/carousel-13/`), preview URL: `https://preview.colorlib.com/theme/bootstrap/carousel-13/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict).

## Design tokens

- **Font family**: "Roboto", sans-serif.
- **Brand colors**: Dark overlay (`rgba(0, 0, 0, 0.1)` to `0.4`), white heading text (`#ffffff`), dark/neutral background for page container.
- **Button / Navigation shapes**: Carousel navigation arrows with distinct borders/styling, pagination dots (active dot solid white, inactive `rgba(255, 255, 255, 0.5)`).
- **Layout**: Full-screen (`100vh`) hero slider with background images, centered slide titles (`Impedit Ipsam Quae Natus`), and interactive arrow/dot navigation.

## Requirements

### Feature: SwipeDeck Hero Carousel

As a visitor, I want to view a full-screen image carousel with slide headings and navigation controls, so I can browse through featured slides smoothly.

#### Scenario: Display main carousel slides with overlay and headings

- **GIVEN** the SwipeDeck template is loaded
- **WHEN** the user views the main carousel
- **THEN** three or more full-screen slide items should be visible
- **AND** each slide should display a background image with a dark overlay
- **AND** each slide should display a centered heading (`Impedit Ipsam Quae Natus` or variation)

#### Scenario: Navigate between slides using next and previous buttons

- **GIVEN** the carousel is displaying slide 1
- **WHEN** the user clicks the next navigation arrow (``)
- **THEN** the carousel should transition to display slide 2
- **WHEN** the user clicks the previous navigation arrow (``)
- **THEN** the carousel should transition back to slide 1

#### Scenario: Navigate using pagination dots

- **GIVEN** the carousel is loaded with multiple slides
- **WHEN** the user clicks the second pagination dot
- **THEN** the carousel should jump directly to slide 2
- **AND** the second dot should be highlighted as active

#### Scenario: Component Dock footer attribution

- **GIVEN** the SwipeDeck template is fully loaded
- **WHEN** the user scrolls to the footer
- **THEN** a "Made with Component Dock" link pointing to `https://www.componentdock.com/` must be visible

## Verification checklist

- [ ] TypeScript strict compilation passes without errors
- [ ] Vitest test suite runs and achieves 100% test coverage
- [ ] Footer links to https://www.componentdock.com/
- [ ] No mention of ColorLib in source code
