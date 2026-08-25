# Template: Expandia (Food & Beverage / Menu Accordion)

## Purpose

Recreation of ColorLib **Accordion 02** (`https://colorlib.com/wp/template/accordion-02/`), preview URL: `https://preview.colorlib.com/theme/bac/accordion-02/`.
Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens (Extracted from Source CSS & Preview)

- **Primary / Brand Accent Color**: `#feba2c` (Yellow / Amber accent for badge/circle highlights and price underlines)
- **Header / Banner Accent Color**: `#866ec7` (Purple header background for "Our Specialties")
- **Body Background**: `#fafafa` (Light gray page background)
- **Card Background**: `#fff` (White container background with soft shadow `0px 10px 29px -16px rgba(0,0,0,0.12)`)
- **Card Body Background**: `rgba(0, 0, 0, 0.02)` (Subtle tinted background for expanded menu items)
- **Typography**: Font family `"Poppins", Arial, sans-serif`
- **Buttons / Radii**: Rounded container corners (`5px`), circular menu item thumbnails (`rounded-full`), circular icon highlight badges (`rounded-full`).

## Gherkin Requirements & Scenarios

### Feature: Interactive Food Menu Accordion

As a visitor, I want to explore restaurant menu categories (Breakfast, Lunch, Dinner, Drink, Wine) via an interactive accordion so that I can easily view dishes, descriptions, and prices.

#### Scenario: Default state with Breakfast expanded

- Given the user loads the Expandia template page
- Then the "Our Specialties" header is displayed
- And the accordion sections (Breakfast, Lunch, Dinner, Drink, Wine) are rendered
- And the "Breakfast" section is expanded by default showing menu items (Grilled Beef with potatoes, etc.) with prices ($29) and circular item images
- And all other sections are collapsed

#### Scenario: Toggling accordion categories

- Given the user clicks on the "Lunch" accordion header
- Then the "Lunch" section expands to show lunch menu items
- And the previously expanded "Breakfast" section collapses

#### Scenario: Footer attribution

- Given the user scrolls to the bottom of the page
- Then the footer displays a link to `https://www.componentdock.com/` ("Component Dock")

## Verification Checklist

- [ ] Spec validation (`npm run spec:validate`) passes
- [ ] Vitest test suite passes with 100% coverage on new components
- [ ] Build succeeds without errors
- [ ] Footer links correctly to Component Dock
- [ ] App is responsive on mobile and desktop
