# Template: Bellows (Accordion / UI Component)

## Purpose

Recreation of ColorLib **Accordion 03** (`https://colorlib.com/wp/template/accordion-03/`), preview URL `https://preview.colorlib.com/theme/accordion-03/` (preview unreachable, designed from ColorLib screenshot and clean Bootstrap accordion patterns). Built with Vite, React 19, Tailwind CSS 4, TypeScript.

## Design Tokens

- Brand Primary: `#3b82f6` (Blue)
- Neutral Dark: `#1e293b` (Slate 800)
- Neutral Light: `#f8fafc` (Slate 50)
- Font Family: `Inter, sans-serif`
- Border Radius: `0.5rem` (rounded-lg)

## Requirements & Gherkin Scenarios

### Feature: Accordion Section Display & Interaction

- Scenario: User views the accordion list and expands/collapses items
  - Given the user is on the Bellows accordion template home page
  - When the user clicks an accordion header
  - Then the corresponding accordion content expands smoothly
  - And clicking another header toggles its content visibility

### Feature: Component Dock Footer Attribution

- Scenario: User views the page footer
  - Given the user scrolls to the bottom of the page
  - When the footer is rendered
  - Then it displays a "Made with Component Dock" link pointing to `https://www.componentdock.com/`

## Verification Checklist

- [ ] TypeScript strict compilation (`npm run build`)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Footer links Component Dock correctly
- [ ] Responsive design across viewports
