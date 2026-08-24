# Template: Plated (Restaurant / Dining)

## Purpose

- **Recreation of:** ColorLib [Restauco](https://colorlib.com/wp/template/restauco/) (`https://preview.colorlib.com/theme/restauco/`)
- **App Name:** `plated` (`@free-react-templates/plated`)
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript

## Design Tokens (Extracted from Reference)

- **Primary Brand Color:** Coral / Orange-Red (`#FE5F41`, `rgb(254, 95, 65)`)
- **Heading Color & Accent Dark:** Deep Brown / Chocolate (`#4D312C`, `rgb(77, 49, 44)`)
- **Text Color:** Muted Taupe / Brown-Gray (`#94817E`, `rgb(148, 129, 126)` / `#5E5E5E`)
- **Backgrounds:** Warm Peach / Cream (`#FFF4F2`, `rgb(255, 244, 242)` for hero/slider; `#FFF7F3` for footer; white for content sections)
- **Fonts:**
  - Headings: `Mitr`, sans-serif (medium/bold, 500/700)
  - Body: `Raleway`, sans-serif (normal, 400/500)
- **Buttons / Radii:** Pill buttons (`border-radius: 35px` / `rounded-full`), smooth hover transitions.

## Section Structure (1:1 with Restauco)

1. **Header / Navbar:** Sticky header with logo ("Plated."), navigation links (Home, Menu, About, Blog, Contact), "Book a Table" CTA button, and phone number contact badge.
2. **Hero / Slider Section:** Large warm peach background (`#FFF4F2`), headline ("Meet, Eat & Enjoy the true test"), subtitle paragraph, "Our Menu" & "Watch Video" CTA buttons, floating rating/review badge card, and hero food photography image.
3. **Features / Categories Section ("Best way to eat healthy food"):** 3-column feature cards (Healthy Meal, Fast Food, Delicious Coffee) with icons/headings and descriptions.
4. **Popular Dishes Section (Menu Tabs):** Filterable category tabs (Breakfast, Lunches, Dinner, Drinks, Fastfood), dish cards with photography, titles, prices, and "Order Now" action.
5. **Book a Table Section (Reservation Form):** Booking form with inputs for number of guests, date, phone number, and message, plus "Send Request" submit button.
6. **Testimonials Section ("What our customer sayes"):** Customer reviews slider / carousel with avatars, quotes, and navigation arrows.
7. **Footer ("What our customer says" / footer wrapper):** 4-column layout (Brand bio + social links, Quick Links, Popular Cakes / Specialties, Contact Us with address, phone, email, and mandatory Component Dock attribution footer).

## Gherkin Requirements & Scenarios

### Feature: Plated Restaurant Template Landing Page

Scenario: User views the Hero section and main CTAs
Given the user navigates to the Plated home page
When the Hero section is displayed
Then they should see the heading "Meet, Eat & Enjoy the true test"
And they should see "Our Menu" and "Watch Video" action buttons

Scenario: User explores feature categories
Given the user scrolls to the features section
When the feature cards load
Then they should see "Healthy Meal", "Fast Food", and "Delicious Coffee" categories with descriptive text

Scenario: User filters popular dishes by category
Given the user views the Popular Dishes menu section
When they click on the "Breakfast" or "Lunches" tab
Then the corresponding dish items should be displayed with "Order Now" actions

Scenario: User submits a table reservation request
Given the user scrolls to the "Book a table" section
When they fill in guest count, date, phone number, and message
And click "Send Request"
Then a success confirmation message should appear

Scenario: User views customer testimonials
Given the user views the testimonials section
Then they should see customer review quotes and navigation controls

Scenario: User interacts with the footer and Component Dock attribution
Given the user scrolls to the bottom of the page
When the footer renders
Then it should display quick links, contact info, and a link to https://www.componentdock.com/
