# Template: Revly (Car Rental)

## Purpose

Recreation of ColorLib **Car Rental** template.
- Source: https://colorlib.com/wp/template/car-rental/
- Preview (analyzed): https://preview.colorlib.com/theme/carrental/
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- Design category: Car rental / vehicle booking

## Design tokens

| Token | Value | Source |
|---|---|---|
| Brand color | `#fab700` (golden yellow) | `.primary-btn`, `.facts-area`, `.callaction-btn` |
| Font family | `"Poppins", sans-serif` | Body default |
| Text dark | `#222222` | Headings, body text |
| Text muted | `#777777` | Paragraphs, descriptions |
| Footer bg | `#04091e` (dark navy) | `.footer-area` |
| Blog bg | `#f9f9ff` (light lavender) | `.blog-area` |
| Banner overlay | `rgba(0, 0, 0, 0.8)` | `.banner-area .overlay-bg` |
| CTA overlay | `rgba(4, 9, 30, 0.75)` | `.callaction-area .overlay-bg` |
| Button radius | `20px` | `.primary-btn` style |
| Button padding | `0 40px`, line-height `42px` | `.primary-btn` |
| Button hover | transparent bg, `#fab700` border+text | `.primary-btn:hover` |
| Section gap | `section-gap` class | Consistent vertical spacing |

## Visual design (from preview + CSS)

Dark hero banner with golden yellow brand accent. The banner has a full-bleed background image with a dark semi-transparent overlay. A booking form sits on the right side of the hero. Below: white-background feature/service cards, a split about section (image left, text right), a car model carousel with pricing, a bright yellow stats/facts bar, a testimonials/reviews carousel, a dark call-to-action band, light lavender blog cards, and a dark navy footer.

## Gherkin requirements

### 1. Navbar

Scenario: Sticky navigation bar renders with logo and links
  Given the user is on the Revly homepage
  When the page loads
  Then a sticky navbar is visible at the top
  And it contains the logo text "Revly"
  And navigation links include: Home, About, Cars, Services, Blog, Contact
  And the active link is visually highlighted

### 2. Hero / Banner

Scenario: Hero section displays with booking form
  Given the user is on the Revly homepage
  When the hero section is visible
  Then a dark overlay covers the hero background image
  And a heading reads "The Royal Essence of Journey"
  And a subheading paragraph is present
  And a primary CTA button reads "Rent Car Now"
  And a booking form is displayed with:
    - Car selection dropdown (e.g. BMW, Ferrari, Toyota)
    - Pickup date picker
    - Dropoff date picker
    - Pickup location dropdown
    - Dropoff location dropdown
    - A "Book Your Car Today" submit button

### 3. Features / Services

Scenario: Six service feature cards are displayed
  Given the user scrolls to the services section
  When the feature area is visible
  Then a heading reads "What Services We Offer"
  And a subheading "Who are in extremely love with eco friendly system" is shown
  And 6 service cards are displayed in a 3×2 grid
  And each card has an icon, title, and description paragraph

### 4. About Section

Scenario: Split about section with text and image
  Given the user scrolls to the about section
  When the about area is visible
  Then a heading reads "Globally Connected by Large Network"
  And a subheading "We are here to listen from you deliver excellence" is shown
  And two paragraphs of descriptive text are present
  And a primary button reads "Get Details"
  And an image occupies the left half

### 5. Car Models

Scenario: Car model cards with carousel navigation
  Given the user scrolls to the car models section
  When the model area is visible
  Then a heading reads "Choose Your Desired Car Model"
  And car cards display with:
    - Car image
    - Car name (e.g. "Audi 3000 msi")
    - Price per day (e.g. "$149 /day")
    - Specs: Capacity, Doors, Air Condition, Transmission, Fuel
  And a "Book This Car Now" button on each card
  And carousel dots allow navigation between pages of cars

### 6. Facts / Stats

Scenario: Statistics bar with animated counters
  Given the user scrolls to the facts section
  When the facts area is visible
  Then a yellow (#fab700) background spans the full width
  And 5 stat counters are displayed:
    - Projects Completed
    - Happy Clients
    - Total Tasks Completed
    - Cups of Coffee Taken
    - In House Professionals
  And the counter values animate on scroll into view

### 7. Reviews / Testimonials

Scenario: Testimonials carousel
  Given the user scrolls to the reviews section
  When the reviews area is visible
  Then a heading reads "Some Features That Made Us Unique"
  And a subheading "Who are in extremely love with eco friendly system" is shown
  And testimonial cards are displayed in a carousel
  And each card has a quote, reviewer name, and role

### 8. Call to Action

Scenario: Full-width CTA band with dark overlay
  Given the user scrolls to the call-to-action section
  When the CTA area is visible
  Then a dark overlay covers the background image
  And a heading reads "Experience Great Support"
  And a paragraph of supporting text is present
  And a CTA button reads "Reach Our Support Team"

### 9. Blog

Scenario: Blog post cards in a grid
  Given the user scrolls to the blog section
  When the blog area is visible
  Then a heading reads "Latest From Our Blog"
  And 3 blog post cards are displayed
  And each card shows:
    - Post image
    - Date
    - Post title
    - Excerpt text
    - Like count and comment count

### 10. Footer

Scenario: Dark footer with columns and newsletter
  Given the user scrolls to the footer
  When the footer is visible
  Then the background is dark navy (#04091e)
  And three columns are displayed:
    - Quick Links
    - Resources
    - Newsletter signup
  And a "Follow Us" social links section is present
  And a copyright notice is shown
  And a "Component Dock" attribution link is present in the footer

### 11. Responsive

Scenario: Mobile layout adapts correctly
  Given the user views on a mobile viewport (< 768px)
  When the page loads
  Then the navbar collapses into a hamburger menu
  And the booking form stacks vertically
  And service cards stack into a single column
  And the about section stacks image above text
  And car model cards display one per row
  And blog cards stack vertically

## Verification checklist

- [ ] Navbar sticky, logo + links, mobile hamburger
- [ ] Hero: dark overlay, heading, booking form with dropdowns and date pickers
- [ ] Services: 6 cards in 3×2 grid, icons, titles, descriptions
- [ ] About: split layout, heading, text, CTA button, image
- [ ] Car models: card carousel, pricing, specs, "Book This Car Now"
- [ ] Facts: yellow bg, 5 animated counters
- [ ] Reviews: testimonial carousel with quotes and names
- [ ] CTA: dark overlay, heading, paragraph, button
- [ ] Blog: 3 post cards with image, date, title, excerpt, likes/comments
- [ ] Footer: dark navy, 3 columns, newsletter, social, Component Dock link
- [ ] Responsive: hamburger menu, stacked layouts on mobile
- [ ] Design tokens match: #fab700 brand, Poppins font, #04091e footer, #f9f9ff blog bg
