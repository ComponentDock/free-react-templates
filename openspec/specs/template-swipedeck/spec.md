# Template: SwipeDeck (Carousel)

## Purpose

Recreation of ColorLib **Carousel 13** (`https://colorlib.com/wp/template/carousel-13/`), preview URL: `https://preview.colorlib.com/theme/bootstrap/carousel-13/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript (strict).

## Design tokens

- **Font family**: "Roboto", sans-serif.
- **Brand colors**: Dark overlay (`rgba(0, 0, 0, 0.1)` to `0.4`), white heading text (`#ffffff`), dark/neutral background for page container.
- **Button / Navigation shapes**: Carousel navigation arrows with distinct borders/styling, pagination dots (active dot solid white, inactive `rgba(255, 255, 255, 0.5)`).
- **Layout**: Full-screen (`100vh`) hero slider with background images, centered slide titles (`Impedit Ipsam Quae Natus`), and interactive arrow/dot navigation.

## Gherkin Requirements & Scenarios

### Feature: SwipeDeck Hero Carousel

As a visitor, I want to view a full-screen image carousel with slide headings and navigation controls, so I can browse through featured slides smoothly.

#### Scenario: Display main carousel slides with overlay and headings

- Given the SwipeDeck template is loaded
- When the user views the main carousel
- Then three or more full-screen slide items should be visible
- And each slide should display a background image with a dark overlay
- And each slide should display a centered heading (`Impedit Ipsam Quae Natus` or variation)

#### Scenario: Navigate between slides using next and previous buttons

- Given the carousel is displaying slide 1
- When the user clicks the next navigation arrow (``)
- Then the carousel should transition to display slide 2
- When the user clicks the previous navigation arrow (``)
- Then the carousel should transition back to slide 1

#### Scenario: Navigate using pagination dots

- Given the carousel is loaded with multiple slides
- When the user clicks the second pagination dot
- Then the carousel should jump directly to slide 2
- And the second dot should be highlighted as active

#### Scenario: Component Dock footer attribution

- Given the SwipeDeck template is fully loaded
- When the user scrolls to the footer
- Then a "Made with Component Dock" link pointing to `https://www.componentdock.com/` must be visible

## Verification Checklist

- [ ] TypeScript strict compilation passes without errors
- [ ] Vitest test suite runs and achieves 100% test coverage
- [ ] Footer links to https://www.componentdock.com/
- [ ] No mention of ColorLib in source code
