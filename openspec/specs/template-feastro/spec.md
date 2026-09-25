# Template: Feastro (Restaurant)

## Purpose

Recreation of ColorLib **Meal** template
(preview: https://preview.colorlib.com/theme/meal/).

**Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript (strict).
**Name origin:** "Feastro" — a single lowercase word derived from "feast" + "o", distinct from "meal".

**Source reference:** https://colorlib.com/wp/template/meal/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/meal-free-template.jpg

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token              | Value / Detail                                      |
| ------------------ | --------------------------------------------------- |
| Brand color        | `#ff7a5c` (coral/salmon) — accent, loader, active dots |
| Text primary       | `#000` (headings), `gray` (body text)               |
| Text secondary     | `#b3b3b3` (subheadings, muted labels)               |
| Background         | `#fff` (body, sections), `#f8f9fa` (bg-light)       |
| Footer background  | `#121212` (near-black)                              |
| Form border focus  | `2px solid #ff7a5c`                                 |
| Heading font       | `"Playfair Display", serif` (weight 300/400/700/800) |
| Body font          | `"Open Sans", Arial, sans-serif` (weight 300/400/700) |
| Logo style         | `border: 2px solid #000`, padding 2px 10px, serif    |
| Button (outline)   | `border: 2px solid #fff`, uppercase, letter-spacing .2em, font-size 14px |
| Button (primary)   | Bootstrap `btn-primary btn-outline-primary`, border 2px |
| Button radius      | None (square/flat)                                  |
| Chef avatar        | `border-radius: 50%`, width 200px                   |
| Form wrap          | `padding: 40px`, white bg, `box-shadow: 0 10px 20px -5px rgba(0,0,0,0.1)` |
| Section padding    | `7em 0`                                             |
| Hero height        | `100vh`, overlay `#000` at `opacity: .2`            |
| Link arrow         | `btn-link` — uppercase, 12px, letter-spacing .15em, weight 900 |
| Testimonial dots   | `#ff7a5c` active, `#ccc` inactive                   |

## Visual Design (from screenshot)

- **Hero:** Full-viewport food photo (dumplings/food on wooden plate), dark overlay, large white serif heading "Welcome to Meal", outlined white CTA button "Reserve A Table".
- **Aesthetic:** Clean, elegant, editorial — generous whitespace, Playfair Display serif headings, minimal coral accent. Minimalist with strong photography.
- **Layout:** Single-column centered text sections interspersed with full-width image/food showcases. Chef profiles are circular portraits. Menu uses tab navigation.
- **Color feel:** White and light gray backgrounds, near-black footer, coral (#ff7a5c) as the only accent color.

## Section Order (DOM)

1. **Navbar** — Fixed side-panel slide-out menu (Home, About Us, Our Menu, Reserve A Table, Contact). Centered logo "M" in bordered box. Hamburger toggle on right.
2. **Hero** — Full-viewport background image with dark overlay. Large serif heading + outlined CTA button.
3. **Food Showcase** — Heading "Find your best food" + subtitle. Two rows of 3-column image-text cards with arrow-shaped connectors between text blocks. Items: Vegies/Beef Empanadas, Food/Buttermilk Chicken Jibaritos, Food/Chicken Chimichurri Croquettes. Each has "Learn More →" link.
4. **About / The Restaurant** — Centered text, white background, heading + 2 paragraphs.
5. **Divider Image** — Full-width centered image (bg_hero.png) on white background.
6. **Meet The Chefs** — Heading + 2-column grid. Each chef: circular photo, name (serif, 30px), role subtitle, bio text, social icons (Facebook, Twitter, Instagram). Chefs: Daniel Graham (Master Chef), Nick Browning (Master Chef).
7. **Menu** — Heading + subtitle, light gray background. Tabbed navigation: Breakfast / Brunch / Dinner. Each tab has 4 menu items: image, dish name (h3), description, price. Items include Warm Spinach Dip & Chips ($10.49), Key Wast Machos ($11.99), Crispy Onions Rings ($11.99), Lobster & Shrimp Quesadilla ($13.99).
8. **Reservation** — Heading + subtitle, light gray background. Form with fields: Name, Email, Phone, Number of Persons (dropdown), Date, Time. All with icon prefixes. "Book a Table" submit button (primary outlined).
9. **Customer Reviews** — Heading, carousel/testimonial slider. 4 reviews: each has quote text, circular author photo, name, role. Authors: Maxim Smith, Geert Green, Dennis Roman, Geert Green.
10. **Get In Touch** — Heading, contact form in white card. Fields: Name, Email, Phone, Message (textarea). "Send Message" submit button.
11. **Map** — Google Maps embed area (445px height, negative top margin).
12. **Footer** — Near-black (#121212) background. 3 columns: About Meal (text + Read More button), Service Hours (Lunch/Dinner), Follow Along (social icons: TripAdvisor, Twitter, Facebook, Instagram) + Newsletter (email input). Bottom: copyright line.
13. **Loader** — Full-screen white overlay with animated circular spinner (coral stroke #ff7a5c).

## Gherkin Requirements

### Navbar
Scenario: Fixed side-panel navigation
  Given the page is loaded
  When the user clicks the hamburger menu icon
  Then a side panel slides in from the right
  And the menu shows links: Home, About Us, Our Menu, Reserve A Table, Contact
  When the user clicks a menu link
  Then the page scrolls to the corresponding section
  And the side panel closes

Scenario: Centered logo in header
  Given the header is visible
  Then the logo displays as a bordered letter "M"
  And the logo is centered horizontally

### Hero
Scenario: Full-viewport hero section
  Given the page loads
  Then a full-viewport hero image is displayed
  And a dark overlay covers the image
  And the heading "Welcome to Meal" is centered in white serif text
  And a "Reserve A Table" outlined button is displayed below the heading

Scenario: Hero CTA scrolls to reservation
  Given the hero section is displayed
  When the user clicks "Reserve A Table"
  Then the page scrolls to the reservation section

### Food Showcase
Scenario: Two-row food grid with arrow connectors
  Given the food showcase section is visible
  Then a heading "Find your best food" is displayed
  And row 1 shows: image → text card (Vegies, Beef Empanadas) → image
  And row 2 shows: text card (Food, Buttermilk Chicken Jibaritos) → image → text card (Food, Chicken Chimichurri Croquettes)
  And each text card has a "Learn More →" link
  And text cards have arrow-shaped CSS connectors pointing to adjacent images

### About
Scenario: Restaurant description section
  Given the about section is visible
  Then the heading "The Restaurant" is centered
  And two paragraphs of descriptive text are displayed
  And the section has a white background

### Chefs
Scenario: Chef profiles in 2-column grid
  Given the chefs section is visible
  Then the heading "Meet The Chefs" is centered
  And 2 chef cards are displayed in a grid
  And each card shows: circular photo, name in serif, role subtitle, bio text
  And each card has 3 social icons (Facebook, Twitter, Instagram)

### Menu
Scenario: Tabbed menu with food items
  Given the menu section is visible
  Then a heading "Menu" is displayed
  And 3 tabs are shown: Breakfast, Brunch, Dinner
  And the Breakfast tab is active by default
  And each tab shows 4 menu items
  And each menu item has: thumbnail image, dish name, description, price

Scenario: Tab switching
  Given the menu section is visible
  When the user clicks the "Brunch" tab
  Then the Brunch menu items are displayed
  And the Breakfast items are hidden

### Reservation
Scenario: Reservation form fields
  Given the reservation section is visible
  Then a heading "Reservation" is displayed
  And a form shows fields: Name, Email, Phone, Number of Persons (select), Date, Time
  And each input has an icon prefix
  And a "Book a Table" submit button is displayed

### Reviews
Scenario: Testimonial carousel
  Given the reviews section is visible
  Then the heading "Customer Reviews" is displayed
  And a carousel shows 4 testimonial cards
  And each card shows: quote text, circular author photo, author name, role
  And carousel navigation dots are shown

### Contact
Scenario: Contact form
  Given the contact section is visible
  Then the heading "Get In Touch" is displayed
  And a form shows fields: Name, Email, Phone, Message (textarea)
  And a "Send Message" submit button is displayed
  And the form is in a white card with shadow

### Footer
Scenario: Dark footer with 3 columns
  Given the footer is visible
  Then it has a near-black (#121212) background
  And column 1: "About Meal" heading with description and "Read More" button
  And column 2: Lunch Service and Dinner Service hours
  And column 3: "Follow Along" social icons and Newsletter email input
  And a copyright line is centered at the bottom
  And the footer links to Component Dock

## Verification Checklist

- [ ] Spec matches section order from live preview DOM exactly
- [ ] Design tokens (colors, fonts, radii) match extracted CSS values
- [ ] Navbar implements slide-out side panel (not top bar)
- [ ] Hero uses full-viewport height with dark overlay
- [ ] Food showcase has arrow-shaped CSS connectors between text cards
- [ ] Chef cards use circular photos (border-radius: 50%)
- [ ] Menu uses tab navigation with Breakfast/Brunch/Dinner
- [ ] Reservation form has 6 fields with icon prefixes
- [ ] Reviews carousel with dot navigation
- [ ] Contact form in white card with shadow
- [ ] Footer is near-black with 3 columns
- [ ] Footer links to Component Dock (not Colorlib)
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
