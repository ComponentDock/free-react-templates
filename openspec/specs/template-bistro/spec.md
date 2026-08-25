# Template: Bistro (Design category: Food & Dining / Menu Accordions)

## Purpose

Recreation of ColorLib [Bootstrap Accordion V02](https://colorlib.com/wp/template/accordion-02/) (preview URL: `https://preview.colorlib.com/theme/accordion-02/`), built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Colors**: Warm cream background (`#fcf8f2`), dark espresso text (`#2c221e`), warm amber/gold accents (`#d4a373` / `#bc6c25`), clean white card surfaces (`#ffffff`).
- **Font Family**: Sans-serif headings and body (e.g., Poppins or Inter via Google Fonts).
- **Button / Accordion Styling**: Clean rounded pill or rectangular accordion headers with subtle hover states, smooth expand/collapse transitions, and clear active indicators.
- **Layout**: Centered container featuring "Our Specialties" section with interactive accordion tabs for Breakfast, Lunch, Dinner, Drink, and Wine, listing menu items with titles, prices, and descriptions.

## Gherkin Requirements & Scenarios

### Feature: Interactive Food Menu Accordions

As a site visitor, I want to explore food and drink menus via interactive accordion sections so that I can easily view meal categories and items.

#### Scenario: Viewing default open section

- **Given** the user opens the Bistro menu page
- **When** the page loads
- **Then** the "Breakfast" section is expanded by default showing menu items with titles, prices, and descriptions
- **And** other sections (Lunch, Dinner, Drink, Wine) are collapsed

#### Scenario: Toggling accordion sections

- **Given** the user is viewing the menu
- **When** the user clicks on the "Lunch" accordion header
- **Then** the "Lunch" section expands to reveal its items
- **And** the previously open section collapses

#### Scenario: Footer Attribution

- **Given** the user scrolls to the bottom of the page
- **Then** the footer displays a link to `https://www.componentdock.com/` ("Component Dock")

## Verification Checklist

- [ ] Spec validation passes (`npm run spec:validate`)
- [ ] Per-app checks pass (`scripts/verify-app.sh bistro`)
- [ ] 100% test coverage maintained
- [ ] Footer correctly links Component Dock
