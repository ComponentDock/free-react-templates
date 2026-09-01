# Template: CarouselFlow (Carousel)

## Purpose

- Recreation of ColorLib Carousel 12 (`https://colorlib.com/wp/template/carousel-12/`, preview: `https://preview.colorlib.com/theme/bootstrap/carousel-12/`).
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.
- Design category: Carousel / UI component showcase.

## Design Tokens (Extracted from Reference)

- **Primary Brand Color**: `#007bff` (Bootstrap primary blue, active dot color).
- **Text & Headers**: Font family `"Roboto"`, sans-serif. Paragraph text `#b3b3b3` (font-weight 300), product titles `#6c757d` (font-weight 900).
- **Backgrounds**: Main background `#ffffff`, section background split/left half `#f8f9fa`.
- **UI Elements**: Carousel cards with bottom margin, clean image wrappers (`img-fluid`), distinct pagination dots (15px width x 3px height rectangles).

## Requirements & Gherkin Scenarios

### Feature: Carousel Showcase

As a visitor, I want to browse products and items in an interactive carousel so that I can discover key items.

#### Scenario: View Page Header and Section

- Given the user visits the CarouselFlow application
- When the page loads
- Then the header displays "Carousel #2"
- And the section displays the title "Our Products"

#### Scenario: Interact with Carousel Items

- Given the product carousel contains 6 default items with images and titles
- When the user views or navigates through the carousel items
- Then each item displays an image (`img-fluid`) and a bold title (e.g., "Consectetur Adipisicing Elit")
- And pagination indicators are visible at the bottom of the carousel

#### Scenario: Footer Attribution

- Given the user scrolls to the bottom of the page
- When the footer is rendered
- Then it includes a link to `https://www.componentdock.com/` ("Component Dock")

## Verification Checklist

- [ ] App builds successfully without TypeScript or lint errors.
- [ ] All sections match the 1:1 structure of ColorLib carousel-12.
- [ ] Tailwind v4 `@theme` includes primary blue (`#007bff`) and Roboto font.
- [ ] Footer links to Component Dock.
- [ ] 100% test coverage on all components.
