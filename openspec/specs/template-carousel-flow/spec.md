# Template: CarouselFlow (Carousel)
<!-- prep-status: shipped-as=slidesync -->
> **SHIPPED-UNDER** — the ColorLib `carousel-12` design this prep describes already
> ships as `apps/slidesync` (<https://slidesync.free.componentdock.com>).
> Do not scaffold `apps/carousel-flow`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-slidesync/spec.md`.

## Purpose

- Recreation of ColorLib Carousel 12 (`https://colorlib.com/wp/template/carousel-12/`, preview: `https://preview.colorlib.com/theme/bootstrap/carousel-12/`).
- Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide React.
- Design category: Carousel / UI component showcase.
- **Source design:** ColorLib "Carousel 12" — https://colorlib.com/wp/template/carousel-12/

## Design Tokens (Extracted from Reference)

- **Primary Brand Color**: `#007bff` (Bootstrap primary blue, active dot color).
- **Text & Headers**: Font family `"Roboto"`, sans-serif. Paragraph text `#b3b3b3` (font-weight 300), product titles `#6c757d` (font-weight 900).
- **Backgrounds**: Main background `#ffffff`, section background split/left half `#f8f9fa`.
- **UI Elements**: Carousel cards with bottom margin, clean image wrappers (`img-fluid`), distinct pagination dots (15px width x 3px height rectangles).

## Requirements

### Feature: Carousel Showcase

As a visitor, I want to browse products and items in an interactive carousel so that I can discover key items.

#### Scenario: View Page Header and Section

- **GIVEN** the user visits the CarouselFlow application
- **WHEN** the page loads
- **THEN** the header displays "Carousel #2"
- **AND** the section displays the title "Our Products"

#### Scenario: Interact with Carousel Items

- **GIVEN** the product carousel contains 6 default items with images and titles
- **WHEN** the user views or navigates through the carousel items
- **THEN** each item displays an image (`img-fluid`) and a bold title (e.g., "Consectetur Adipisicing Elit")
- **AND** pagination indicators are visible at the bottom of the carousel

#### Scenario: Footer Attribution

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is rendered
- **THEN** it includes a link to `https://www.componentdock.com/` ("Component Dock")

## Verification checklist

- [ ] App builds successfully without TypeScript or lint errors.
- [ ] All sections match the 1:1 structure of ColorLib carousel-12.
- [ ] Tailwind v4 `@theme` includes primary blue (`#007bff`) and Roboto font.
- [ ] Footer links to Component Dock.
- [ ] 100% test coverage on all components.
