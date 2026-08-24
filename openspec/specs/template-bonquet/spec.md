# Spec: Bonquet (Food & Restaurant)

## Purpose

Recreation of ColorLib Restauco (`https://preview.colorlib.com/theme/restauco/`, source: `https://colorlib.com/wp/template/restauco/`). A modern, warm food and restaurant landing page featuring a hero section, healthy meal features, tabbed dishes menu, table reservation booking form, customer testimonials, and a comprehensive footer linking to Component Dock. Built with Vite, React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand Primary**: Coral Orange `#FE5F41` (Tailwind arbitrary / theme token)
- **Background Tints**: Soft peach/warm white `#FFF4F2` (hero), `#FFF7F3` (footer)
- **Text Color**: Deep warm brown `#4D312C` / neutral dark
- **Fonts**:
  - Body: `"Raleway", sans-serif`
  - Headings & Buttons: `"Mitr", sans-serif`
- **Buttons**: Pill-shaped (`rounded-full`), solid `#FE5F41` with white text, or bordered variant.

---

## Gherkin Requirements & Scenarios

### Feature: Header Navigation

- **Scenario**: User views the sticky header
  - Given the user loads the Bonquet page
  - When the header renders
  - Then it displays the logo, navigation links (Home, Menu, About, Blog, Contact), phone number, and "Book a Table" button.

### Feature: Hero Section

- **Scenario**: User views the hero banner
  - Given the user is on the home page
  - When the hero section renders
  - Then it displays the headline "Meet, Eat & Enjoy the true test", descriptive subtitle, "Our Menu" primary button, and a watch video action.

### Feature: Features & Services Intro

- **Scenario**: User views healthy food service cards
  - Given the user scrolls past the hero
  - When the features section renders
  - Then it displays 3 cards: Healthy Meal, Fast Food, and Delicious Coffee with descriptions.

### Feature: Most Popular Dishes Menu

- **Scenario**: User interacts with the tabbed menu
  - Given the user views the Most Popular Dishes section
  - When they click tabs (Breakfast, Lunches, Dinner, Drinks, Fastfood)
  - Then dish items (e.g. Tuna Steak, Hamburger) update accordingly with "Order Now" actions.

### Feature: Table Reservation Booking

- **Scenario**: User submits a table booking request
  - Given the user fills out the reservation form (guests, date, time, phone, message)
  - When they click "Sent Request"
  - Then the form validates input and displays a success confirmation.

### Feature: Customer Testimonials

- **Scenario**: User reads customer feedback
  - Given the user views the testimonials section
  - When the carousel renders
  - Then customer quotes and ratings are displayed.

### Feature: Footer & Attribution

- **Scenario**: User scrolls to the footer
  - Given the user reaches the bottom of the page
  - When the footer renders
  - Then it displays quick links, contact information, and a required link to `https://www.componentdock.com/` ("Component Dock").

---

## Verification Checklist

- [ ] TypeScript compilation (`npm run typecheck`)
- [ ] Linting (`npm run lint`)
- [ ] Vitest unit tests with 100% coverage (`npm run test:coverage`)
- [ ] Production build (`npm run build`)
- [ ] Footer links Component Dock correctly
- [ ] No mention of ColorLib in app code
