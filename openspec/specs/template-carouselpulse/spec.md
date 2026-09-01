# Template: CarouselPulse (Carousel & Showcase category)

## Purpose

- Recreation of ColorLib **Carousel 11** (`https://colorlib.com/wp/template/carousel-11/`).
- Preview URL: `https://preview.colorlib.com/theme/bootstrap/carousel-11/`
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React icons, interactive image slider/carousel.

## Design tokens

- **Colors**: Neutral dark background (`#111827` / slate-900), white heading text (`#ffffff`), muted gray paragraphs (`#b3b3b3`), crisp white/translucent dot indicators (`rgba(255, 255, 255, 0.5)` to `white`).
- **Typography**: Font family: `"Roboto"`, sans-serif. Clean, modern typography with precise weight hierarchy.
- **Layout**: Centered container with responsive image slider, prominent prev/next floating control arrows, and bottom pagination dots.
- **Footer Attribution**: Must include link to `https://www.componentdock.com/` ("Component Dock").

## Gherkin requirements and scenarios

### Feature: Interactive Image Carousel

As a visitor, I want to browse high-resolution featured photos via an interactive carousel with navigation arrows and dot indicators.

#### Scenario: User navigates slides using next and previous buttons

- Given the CarouselPulse homepage is loaded
- When the user clicks the "Next" (`›`) or "Previous" (`‹`) arrow control
- Then the carousel transitions smoothly to the next or previous slide image
- And the active pagination indicator updates accordingly

#### Scenario: User clicks pagination dots to jump directly to a slide

- Given the CarouselPulse homepage is loaded
- When the user clicks a specific pagination dot at the bottom
- Then the carousel displays the corresponding slide image immediately

### Feature: Branding and Component Dock Footer

As a visitor, I want clear branding and a footer linking to Component Dock.

#### Scenario: Footer links to Component Dock

- Given the CarouselPulse application is rendered
- When the user scrolls to the footer
- Then they see a "Component Dock" link pointing to `https://www.componentdock.com/`

## Verification checklist

- [ ] `npm run build` succeeds without type or lint errors
- [ ] Vitest test suite passes with 100% coverage
- [ ] Interactive carousel next/prev and dot navigation work correctly
- [ ] Footer contains Component Dock link
