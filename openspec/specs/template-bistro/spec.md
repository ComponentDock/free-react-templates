# Template: Bistro (Menu / Restaurant Category)

## Purpose

- **ColorLib Source**: `accordion-02` (https://colorlib.com/wp/template/accordion-02/)
- **Live Preview URL**: https://preview.colorlib.com/theme/bac/accordion-02/
- **Stack**: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide Icons

## Design Tokens (Extracted from Reference)

- **Primary Font**: 'Poppins', sans-serif
- **Brand Colors**:
  - Primary Accent: Warm Gold / Amber (`#c59b27` / `#dfa974`)
  - Background: Dark / Charcoal (`#1a1a1a` / `#111111`) or Clean Light Neutral cards
  - Text: High contrast dark headings with muted gray descriptions (`#777777`, `#333333`)
- **Radii**: Subtle rounded corners (`rounded-lg`, `rounded-xl`)
- **Layout Rhythm**: Centered accordion cards with expandable categories (Breakfast, Lunch, Dinner, Drink, Wine), featuring rich menu items with titles, descriptions, and prices.

## Gherkin Requirements & Scenarios

### Feature: Interactive Restaurant Menu Accordions

- **Scenario**: User views the main menu categories
  - Given the Bistro application is loaded
  - When the user views the "Our Specialties" section
  - Then all menu categories (Breakfast, Lunch, Dinner, Drink, Wine) are displayed as interactive accordions
  - And the default active category is expanded to show its items

- **Scenario**: User toggles a menu category
  - Given the Bistro application is loaded
  - When the user clicks on a collapsed category header (e.g. "Lunch")
  - Then the category expands smoothly to reveal its menu items
  - And previously expanded categories collapse if in single-accordion mode

- **Scenario**: Footer branding check
  - Given the user scrolls to the bottom of the page
  - Then the footer displays the required copyright and a link to `https://www.componentdock.com/` labeled "Component Dock"

## Verification Checklist

- [ ] App builds cleanly without type errors
- [ ] 100% test coverage maintained on all components
- [ ] Footer links correctly to Component Dock
- [ ] Responsive layout across mobile and desktop
