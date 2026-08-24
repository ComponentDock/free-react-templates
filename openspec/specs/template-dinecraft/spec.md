# Template: DineCraft (Restaurant & Hospitality)

## Purpose

Recreation of ColorLib [Restauco](https://colorlib.com/wp/template/restauco/) (`https://preview.colorlib.com/theme/restauco/`), built as a high-conversion modern React single-page application using Vite, React 19, Tailwind CSS 4, and TypeScript. Designed for restaurants, cafes, and hospitality businesses with online table reservation, categorized menu showcase, services overview, customer testimonials, and contact integration.

## Design Tokens

- **Brand Primary:** Coral Orange (`#FE5F41`), Hover (`#ec583a`)
- **Heading Color:** Deep Chocolate Brown (`#4D312C`)
- **Body Text Color:** Muted Taupe/Gray (`#94817E` / `#5E5E5E`)
- **Background Tones:** Soft Warm Cream (`#FFF4F2`, `#FFF7F3`), Pure White (`#ffffff`)
- **Fonts:** Heading: `"Mitr"`, sans-serif; Body: `"Raleway"`, sans-serif
- **Button Radius:** Pill / Rounded (`35px`)
- **Section Spacing:** Generous padding (`py-24` or `py-32`)

## Sections & Structure (1:1 with ColorLib Restauco)

1. **Header / Navbar:** Sticky header with brand logo ("DineCraft"), navigation links (Home, Menu, About, Blog, Contact), "Book a Table" button, and contact phone number (`+10 (78) 783 3674`).
2. **Hero Section:** Large headline ("Meet, Eat & Enjoy the true test"), welcoming subtitle, CTA buttons ("Our Menu", "Watch Video"), and customer rating badge highlight.
3. **Services / Features Section:** "Best way to eat healthy food" intro with cards for Healthy Meal, Fast Food, and Delicious Coffee with descriptions and links.
4. **Popular Dishes Section:** Tabbed menu showcase (Breakfast, Lunches, Dinner, Drinks, Fastfood) featuring dishes (Hamburger, Sandwich, etc.) with prices, images (`https://picsum.photos/...`), and "Order Now" CTAs.
5. **Table Reservation Form:** "Book a table" section with interactive form (Number of guests, Date, Phone no., Message, "Sent Request" button).
6. **Testimonials Section:** Customer reviews carousel / showcase ("What our customer sayes") with star ratings and feedback quotes.
7. **Footer:** Multi-column footer with brand blurb, social links, Quick Links, Special Items (Cakes), Contact Us info (Address, Phone, Email), and mandatory Component Dock attribution footer (`https://www.componentdock.com/`).

## Requirements & Gherkin Scenarios

### Requirement 1: Navigation and Header

- The header must display the brand logo, navigation links, and a quick phone contact.
- **Scenario:** User views the header
  - Given the user loads the page
  - When they look at the header
  - Then they see the DineCraft logo, navigation links (Home, Menu, About, Blog, Contact), and the reservation phone number.

### Requirement 2: Hero Section

- The hero must present a welcoming headline, subtext, and call-to-action buttons.
- **Scenario:** User interacts with hero CTAs
  - Given the user is on the landing view
  - When they click "Our Menu"
  - Then the view smoothly scrolls to the popular dishes section.

### Requirement 3: Tabbed Menu Showcase

- Users can switch between menu categories (Breakfast, Lunches, Dinner, Drinks, Fastfood).
- **Scenario:** Switching menu tabs
  - Given the menu section is displayed
  - When the user clicks the "Lunche" or "Dinner" tab
  - Then the corresponding dishes grid updates with relevant items.

### Requirement 4: Table Reservation Form

- Users can submit table booking requests with guest count, date, phone, and message.
- **Scenario:** Submitting valid reservation request
  - Given the user fills out the reservation form with guest count, date, and phone number
  - When they click "Sent Request"
  - Then a success confirmation toast or message is displayed.

## Verification Checklist

- [ ] TypeScript compilation succeeds with zero errors (`npm run typecheck`).
- [ ] Tailwind CSS compiles successfully with brand tokens (`#FE5F41`, `#4D312C`).
- [ ] All interactive sections (tabs, reservation form) work correctly.
- [ ] Footer links to `https://www.componentdock.com/`.
- [ ] Vitest test suite achieves 100% coverage on new components (`npm run test:coverage`).
- [ ] App builds successfully (`npm run build`).
