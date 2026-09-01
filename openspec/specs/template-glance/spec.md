# Template: Glance (Carousel & Product Showcase)

## Purpose

Recreation of ColorLib **Carousel 12** (`https://colorlib.com/wp/template/carousel-12/`, previewed at `https://preview.colorlib.com/theme/bootstrap/carousel-12/`).
Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Font Family**: Roboto (`sans-serif`)
- **Colors**:
  - Background (left half section): `#f8f9fa` (light gray)
  - Text primary / Card headings: `#6c757d` (muted gray)
  - Section title: `#007bff` (primary blue)
  - Paragraphs / Muted text: `#b3b3b3`
- **Layout & Aesthetic**: Clean modern carousel showcase with a split background effect on the section, prominent card images, bold titles, and clean dot indicators.

## Gherkin Requirements & Scenarios

### Feature: Product Showcase Carousel

As a visitor, I want to browse products in an interactive carousel so that I can see featured items clearly.

#### Scenario: Display section header and carousel items

- Given the page is loaded
- When the user views the "Our Products" section
- Then the section heading is visible in primary blue
- And the carousel displays product cards with images and bold titles

#### Scenario: Carousel navigation and indicators

- Given the product carousel is displayed
- When the user interacts with the carousel pagination dots or arrows
- Then the active product items slide into view smoothly
- And the active indicator dot highlights correctly

### Feature: Footer Attribution

#### Scenario: Footer links to Component Dock

- Given the page footer is displayed
- Then it contains a link to `https://www.componentdock.com/` branded as "Component Dock"

## Verification Checklist

- [ ] TypeScript compilation passes without errors
- [ ] Linting and formatting rules satisfied
- [ ] 100% test coverage for all new components
- [ ] Footer contains Component Dock link
- [ ] No mention of ColorLib in app source code
