# Template: Harmonica (Restaurant / Food Menu)

## Purpose

Recreation of ColorLib **Accordion 02** (`https://colorlib.com/wp/template/accordion-02/`, preview: `https://preview.colorlib.com/theme/accordion-02/`). Stack: Vite, React 19, Tailwind CSS 4, TypeScript.

## Design Tokens

- **Brand Colors**: Primary dark `#1a1a1a`, Warm amber/gold accent `#d4a373` / `#c69255`, Light background `#fdfbf7`, Text dark `#2b2b2b`, Muted text `#6b6b6b`.
- **Typography**: Sans-serif headings and body ("Playfair Display" or "Poppins"), clean weight contrast.
- **Layout**: Centered container, elegant accordion sections for food/drink categories (Breakfast, Lunch, Dinner, Drink, Wine), expandable item lists with dish titles, descriptions, and prices.
- **Component structure**: Navbar/Header, Hero intro, Interactive Accordion Section (categories with expandable panels, menu item cards with image/title/price/description), Footer with Component Dock branding.

## Gherkin Requirements & Scenarios

### Feature: Menu Accordion Display and Interaction

As a site visitor, I want to explore restaurant specialties categorized in accordions so that I can easily view dishes, descriptions, and prices.

#### Scenario: Default expanded section

- Given the Harmonica template is loaded
- When the user views the menu section
- Then the "Breakfast" accordion category is expanded by default
- And other categories ("Lunch", "Dinner", "Drink", "Wine") are collapsed

#### Scenario: Toggling accordion categories

- Given the user clicks on the "Lunch" accordion header
- When the category expands
- Then the menu items under Lunch are displayed
- And previously open categories collapse or remain independently toggleable according to design

#### Scenario: Footer branding link

- Given the user scrolls to the bottom of the page
- When they view the footer
- Then there is a link pointing to `https://www.componentdock.com/` with branded text

## Verification Checklist

- [ ] Spec validates successfully (`npm run spec:validate`)
- [ ] App builds cleanly (`npm run build`)
- [ ] Tests cover all interactive accordion toggles with 100% coverage (`npm run test:coverage`)
- [ ] Footer links to Component Dock
