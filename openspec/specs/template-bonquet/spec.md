# Template: Bonquet (Food & Restaurant)

## Purpose

Recreation of ColorLib [Restauco](https://colorlib.com/wp/template/restauco/) (`https://preview.colorlib.com/theme/restauco/`). A modern, warm food and restaurant landing page featuring a hero section, healthy meal features, tabbed dishes menu, table reservation booking form, customer testimonials, and a comprehensive footer linking to Component Dock. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Colors:**
  - Primary / Accent: `#FE5F41` (Warm Orange / Coral)
  - Heading Color: `#4D312C` (Deep Brown)
  - Body Text: `#94817E` (Muted Brown / Gray)
  - Background Light / Section Alt: `#FFF4F2` (Soft Cream / Peach Tint)
- **Fonts:**
  - Headings: "Mitr", sans-serif
  - Body: "Raleway", sans-serif
- **Button / Shape:**
  - Rounded Pill Buttons (`rounded-full` / `rounded-[35px]`, padding `py-5 px-8`)
  - Shadows: `shadow-[0_15px_25px_rgba(254,95,65,0.14)]`

## Gherkin Requirements & Scenarios

### Feature: Landing Page & Navigation

As a visitor, I want to view the top navigation bar with brand logo, links (Home, Menu, About, Blog, Contact), Book a Table button, and phone number, so that I can easily navigate the restaurant site.

- **Scenario: Navigation renders correctly**
  - Given the user loads the Bonquet home page
  - Then the brand logo and navigation links are displayed
  - And the "Book a Table" button and phone contact are visible

### Feature: Hero Section

As a visitor, I want to see a welcoming hero section with headline, subtitle, action buttons, and hero imagery, so that I immediately understand the restaurant's value proposition.

- **Scenario: Hero content and interactions**
  - Given the user views the hero section
  - Then the headline "Meet, Eat & Enjoy the true test" is displayed
  - And the "Our Menu" and video watch buttons are clickable

### Feature: Menu & Dishes

As a visitor, I want to browse categorized restaurant dishes with tabs, so that I can choose what to order.

- **Scenario: Menu filtering and item display**
  - Given the user scrolls to the menu section
  - Then dish categories (e.g. Breakfast, Lunch, Dinner, Desserts) can be toggled
  - And dish cards show images, titles, descriptions, and prices

### Feature: Table Reservation

As a visitor, I want to fill out a table reservation form with date, time, guests, and contact info, so that I can book a table in advance.

- **Scenario: Successful table reservation submission**
  - Given the user fills in the reservation form inputs
  - When the user clicks the reservation submit button
  - Then a confirmation message is displayed to the user

### Feature: Footer & Component Dock Link

As a visitor, I want to see a footer with brand info, quick links, and a link to Component Dock, so that I can access more templates.

- **Scenario: Footer renders Component Dock attribution**
  - Given the user scrolls to the bottom of the page
  - Then the footer contains copyright information and a link to `https://www.componentdock.com/`

## Verification Checklist

- [ ] TypeScript strict compilation (`npm run build` / typecheck)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Responsive mobile/desktop layout
- [ ] Footer links to Component Dock
- [ ] No mention of ColorLib in app code
