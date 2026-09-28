# Template: Repast (Restaurant)

## Purpose

Recreation of ColorLib "Meal" — a free restaurant website template.

- **Source:** [ColorLib Meal](https://colorlib.com/wp/template/meal/)
- **Preview:** https://preview.colorlib.com/theme/meal/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Restaurant / Food & Dining

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Brand color (accent) | `#ff7a5c` | Coral/salmon orange — buttons, active tabs, focus borders, loader stroke |
| Heading font | `"Playfair Display", serif` | All h2/h3/h4 headings |
| Body font | `"Open Sans", Arial, sans-serif` | Body text, paragraphs, form labels |
| Body font-weight | 300 (light) | Light body text |
| Body font-size | 20px | Base size |
| Body line-height | 1.8 | Generous spacing |
| Text color (body) | `gray` | Paragraphs, descriptions |
| Text color (headings) | `#000` | All headings (h2/h3/h4) |
| Background (page) | `#fff` | White page background |
| Background (sections) | alternating `#fff` and `bg-light` (≈ `#f8f9fa`) | Sections alternate white and light gray |
| Button style | Uppercase, letter-spacing: 0.2em, font-size: 14px, font-weight: 700 | All buttons |
| Button primary (outline) | border: 2px solid `#ff7a5c`, bg: white, text: `#ff7a5c` | Primary CTA style |
| Button outline-white | border: 2px solid `#fff`, bg: none, text: `#fff` | Hero CTA |
| Button hover (outline-white) | bg: `#fff`, text: `#000` | Hover fills white |
| Form control border | 2px solid `#cccccc` | Default input border |
| Form control focus | 2px solid `#ff7a5c` | Focus/accent border |
| Logo | "M" — bordered square: `border: 2px solid #000`, text: `#000`, font-size: 30px, font-weight: bold | Minimal geometric logo |
| Section heading size | 50px (desktop), 30px (mobile < 992px) | Large serif headings |
| Card/icon color | `#b3b3b3` | Muted icons |
| Social link hover | `#ff7a5c` | Coral accent on hover |
| Menu tab active | border-bottom: 2px solid `#ff7a5c`, color: black | Active tab underline |
| Menu price border | border-bottom: 1px dotted `#ccc` | Dotted separator before price |
| Testimonial quote color | `gray` | Quote text |
| Loader stroke | `#ff7a5c` | Coral loading spinner |

### Visual Design Notes (from screenshot analysis)

- Clean, elegant restaurant aesthetic with generous whitespace
- Hero: full-width parallax background image with centered heading and white outline CTA button
- Logo is a single letter "M" in a square border (minimalist)
- Featured dishes section uses alternating image-text rows (zigzag layout)
- Chef cards: circular/rectangular photo with overlay name, subtitle, bio, social icons
- Menu: tabbed interface (Breakfast/Brunch/Dinner) with food items showing image, name, description, and price
- Reservation and Contact forms use icon-prefixed inputs with coral focus borders
- Testimonials carousel with customer photos and quotes
- Footer: 3-column layout with About text, service hours, social links, and newsletter signup
- Overall: white/light gray alternating sections, coral accent pops, serif headings for elegance

## Requirements (Gherkin)

### Hero Section

Scenario: Hero displays with heading and CTA
  Given the visitor is on the homepage
  When the hero section loads
  Then a background image is visible
  And the heading "Welcome to Repast" is displayed
  And a "Reserve A Table" button is visible
  And the button has a white outline style

Scenario: Hero CTA links to reservation
  Given the visitor sees the hero CTA button
  When they click "Reserve A Table"
  Then the page scrolls to the reservation section

### Navigation

Scenario: Navbar is visible
  Given the visitor is on the homepage
  When the page loads
  Then a navigation bar is present with links: Home, About Us, Our Menu, Reserve A Table, Contact

Scenario: Navbar becomes fixed on scroll
  Given the visitor scrolls down past the hero
  When the header reaches the top of the viewport
  Then the header becomes fixed/sticky with a white background

Scenario: Mobile hamburger menu opens
  Given the visitor is on a mobile viewport
  When they click the hamburger icon
  Then a side navigation menu slides in from the right

### Featured Dishes

Scenario: Featured dishes grid displays correctly
  Given the visitor scrolls to the featured dishes section
  Then 3 dish cards are visible in an alternating image-text layout
  And each card has a category label, dish name, description, and "Learn More" link

Scenario: Featured dishes alternate layout
  Given the featured dishes section loads
  Then the first row shows image-left then text-right
  And the second row shows text-left then image-right

### About Section

Scenario: About section displays restaurant description
  Given the visitor scrolls to the About section
  Then the heading "The Restaurant" is visible
  And a descriptive paragraph about the restaurant is displayed
  And the section has a white background

### Meet The Chefs

Scenario: Chef cards display correctly
  Given the visitor scrolls to the chefs section
  Then 2 chef cards are visible side by side
  And each card shows a chef photo, name, title "Master Chef", bio text, and social media icons

Scenario: Chef social links are clickable
  Given a chef card is displayed
  When the visitor clicks a social icon (Facebook, Twitter, Instagram)
  Then the link opens in a new tab

### Menu Section

Scenario: Menu tabs switch content
  Given the visitor scrolls to the menu section
  Then 3 tabs are visible: Breakfast, Brunch, Dinner
  And the Breakfast tab is active by default
  When the visitor clicks the "Brunch" tab
  Then the Brunch menu items are displayed
  And the Breakfast items are hidden

Scenario: Menu items display correctly
  Given a menu tab is active
  Then each menu item shows a food image, dish name, description, and price
  And 4 items are displayed per tab

Scenario: Menu items have price formatting
  Given a menu item is displayed
  Then the price is shown in bold with a dollar sign
  And a dotted border separates the item from the price

### Other Services

Scenario: Services section displays 3 feature cards
  Given the visitor scrolls to the services section
  Then 3 service cards are visible in a row
  And each card has an icon, title, and description

### Reservation Form

Scenario: Reservation form displays all fields
  Given the visitor scrolls to the reservation section
  Then a form is visible with fields: Name, Email, Phone, Number of Persons (select), Date, Time, Message
  And each field has a right-aligned icon
  And a "Make A Reservation" submit button is present

Scenario: Reservation form validates required fields
  Given the visitor leaves the Name field empty
  When they click "Make A Reservation"
  Then a validation message appears for the Name field

### Customer Reviews

Scenario: Testimonials carousel displays
  Given the visitor scrolls to the reviews section
  Then a carousel of testimonials is visible
  And each testimonial shows a quote, author photo, author name, and title

Scenario: Testimonials carousel navigates
  Given the testimonials carousel is displayed
  When the visitor clicks the next/previous arrow
  Then the next/previous testimonial slides into view

### Contact Form

Scenario: Contact form displays all fields
  Given the visitor scrolls to the contact section
  Then a form is visible with fields: Name, Email, Phone, Message
  And a "Send Message" submit button is present

### Footer

Scenario: Footer displays 3 columns
  Given the visitor scrolls to the footer
  Then 3 columns are visible: About, Service Hours, Follow Along

Scenario: Footer about column shows description
  Given the footer is displayed
  Then the About column shows "About Repast" heading and a description paragraph
  And a "Read More" button is present

Scenario: Footer service hours
  Given the footer is displayed
  Then Lunch Service shows "Booking from 12:00pm — 1:30pm"
  And Dinner Service shows "Booking from 6:00pm — 9:00pm"

Scenario: Footer social links
  Given the footer is displayed
  Then social icons are visible for TripAdvisor, Twitter, Facebook, Instagram

Scenario: Footer newsletter signup
  Given the footer is displayed
  Then an email input and submit button are visible in the Newsletter section

Scenario: Footer copyright and Component Dock link
  Given the footer is displayed
  Then a copyright notice is shown
  And a "Component Dock" link points to https://www.componentdock.com/

## Verification Checklist

- [ ] Hero: parallax background image, heading, white outline CTA
- [ ] Navigation: 5 links, fixed on scroll, mobile hamburger with slide-in menu
- [ ] Featured dishes: 3 items, alternating image-text layout, "Learn More" links
- [ ] About: centered heading "The Restaurant", descriptive text, white bg
- [ ] Decorative hero image between About and Chefs
- [ ] Chefs: 2 cards side by side, photo, name, title, bio, social icons
- [ ] Menu: 3 tabs (Breakfast/Brunch/Dinner), 4 items each, image + name + description + price
- [ ] Services: 3 feature cards with icon, title, description
- [ ] Reservation: form with 7 fields, icon-prefixed inputs, coral focus border
- [ ] Reviews: owl-carousel style testimonials with quote, photo, name, title
- [ ] Contact: form with 4 fields, "Send Message" button
- [ ] Footer: 3 columns (About, Hours, Social+Newsletter), Component Dock link
- [ ] Design tokens: coral #ff7a5c accent, Playfair Display headings, Open Sans body
- [ ] Buttons: uppercase, 0.2em letter-spacing, 14px, 700 weight
- [ ] No ColorLib references in app code — provenance in spec only
