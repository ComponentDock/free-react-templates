# Spec: Bonquet (Food & Restaurant)

## Purpose

Recreation of ColorLib Restauco (`https://preview.colorlib.com/theme/restauco/`, source: `https://colorlib.com/wp/template/restauco/`). A modern, warm food and restaurant landing page featuring a hero section, healthy meal features, tabbed dishes menu, table reservation booking form, customer testimonials, and a comprehensive footer linking to Component Dock. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Header Navigation

Users SHALL see a sticky header with logo, navigation links (Home, Menu, About, Blog, Contact), phone number, and "Book a Table" button.

#### Scenario: Desktop header renders

- **WHEN** the user loads the Bonquet page
- **THEN** the header displays the logo, navigation links, phone number, and "Book a Table" button

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu icon on mobile
- **THEN** the mobile navigation menu opens

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero Section

Users SHALL see a hero banner with headline, subtitle, "Our Menu" button, and "Watch Video" action.

#### Scenario: Hero renders

- **WHEN** the user is on the home page
- **THEN** the hero section displays the headline "Meet, Eat & Enjoy the true test", descriptive subtitle, "Our Menu" button, and "Watch Video" action

### Requirement: Features and Services

Users SHALL see 3 feature cards: Healthy Meal, Fast Food, and Delicious Coffee.

#### Scenario: Feature cards render

- **WHEN** the user scrolls past the hero
- **THEN** 3 feature cards are displayed with titles and descriptions

### Requirement: Most Popular Dishes Menu

Users SHALL see a tabbed menu with 5 categories (Breakfast, Lunches, Dinner, Drinks, Fastfood) and dish items with "Order Now" actions.

#### Scenario: Default tab

- **WHEN** the menu section renders
- **THEN** the Breakfast tab is selected and breakfast dishes are shown

#### Scenario: Tab switching

- **WHEN** the user clicks a different tab
- **THEN** the corresponding dishes are displayed

### Requirement: Table Reservation Booking

Users SHALL see a reservation form with guests, date, time, phone, message fields and a "Sent Request" button.

#### Scenario: Form renders

- **WHEN** the user views the reservation section
- **THEN** all form fields and the submit button are displayed

#### Scenario: Form submission

- **WHEN** the user fills out the form and clicks "Sent Request"
- **THEN** a success confirmation message is displayed

### Requirement: Customer Testimonials

Users SHALL see customer testimonials with star ratings and quotes.

#### Scenario: Testimonials render

- **WHEN** the testimonials section is visible
- **THEN** customer names, quotes, and star ratings are displayed

### Requirement: Footer and Attribution

Users SHALL see a footer with quick links, contact information, and a required link to `https://www.componentdock.com/` (branded "Component Dock").

#### Scenario: Footer renders

- **WHEN** the user scrolls to the bottom
- **THEN** the footer displays quick links, cakes links, contact info, and the Component Dock attribution link

#### Scenario: Go to top button

- **WHEN** the user clicks the go-to-top button
- **THEN** the page scrolls smoothly to the top

## Verification Checklist

- [ ] TypeScript compilation (`npm run typecheck`)
- [ ] Linting (`npm run lint`)
- [ ] Vitest unit tests with 100% coverage (`npm run test:coverage`)
- [ ] Production build (`npm run build`)
- [ ] Footer links Component Dock correctly
- [ ] No mention of ColorLib in app code
