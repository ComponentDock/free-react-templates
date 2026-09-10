# Template: Fleetly (Car Rental)

## Purpose

Recreation of the ColorLib "Car Rental" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page car rental template.

- **Source:** ColorLib Car Rental — https://colorlib.com/wp/template/car-rental/
- **Live preview:** https://preview.colorlib.com/theme/carrental/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carrental-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/fleetly`
- **Deploy target:** `fleetly.free.componentdock.com`
- **Footer:** Must link `https://www.componentdock.com/` branded as "Component Dock"

## Design tokens (extracted from preview CSS)

| Token            | Value                                     | Notes                                                    |
| ---------------- | ----------------------------------------- | -------------------------------------------------------- |
| Brand primary    | `#fab700` (yellow/gold)                   | Primary buttons, facts section background, active states |
| Accent teal      | `#4cd3e3`                                 | Secondary color variation in the color palette           |
| Accent blue      | `#38a4ff`                                 | Another color variation in the color palette             |
| Text dark        | `#222`                                    | Headings (h1–h6)                                         |
| Body text        | `#777`                                    | Paragraph text                                           |
| Light bg         | `#f9f9ff`                                 | Alternate section backgrounds (features, reviews)        |
| White bg         | `#fff`                                    | Main content sections                                    |
| Footer bg        | `#04091e`                                 | Very dark navy footer background                         |
| Font family      | `"Poppins", sans-serif`                   | Body + headings (loaded via Cloudflare Fonts)            |
| Button shape     | Rectangular, border-radius: 3px           | `.primary-btn` — nearly square corners                   |
| Button padding   | 12px 40px (line-height: 42px)             | Horizontal emphasis, vertical centering                  |
| Button text      | Uppercase, white on gold bg               | `text-transform: uppercase`, `font-weight: 500`          |
| Banner overlay   | `rgba(0,0,0,0.8)` on hero                 | Dark overlay on hero background image                    |
| CTA overlay      | `rgba(4,9,30,0.75)` on callaction-area    | Dark navy overlay on CTA background image                |
| Section gap      | Consistent `section-gap` vertical padding | Standard section spacing throughout                      |
| Facts background | `#fab700` (brand yellow)                  | Full-width yellow bar for stats section                  |
| Footer heading   | White (`#fff`), 18px, font-weight: 600    | Footer column headings                                   |

## Page structure (section order, from DOM analysis)

1. **Navbar** — Fixed top, white bg, logo left, nav links (Home, About, Cars, Service, Team, Blog, Contact, Pages dropdown)
2. **Hero/Banner** — Full-screen bg image with dark overlay (0.8 opacity). Left side: subtitle "the Royal Essence of Journey", headline "Relaxed Journey Ever", paragraph, "Rent Car Now" gold CTA button. Right side: booking form with car select dropdown, pickup location, pickup date, dropoff location, dropoff date, name, email, phone fields, "Confirm Car Booking" button
3. **Features** — 6 feature cards (3×2 grid) on white bg: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews — each with Linearicons icon, title, description
4. **About** — Full-width split layout: left = image, right = "Globally Connected by Large Network" heading, subtitle "We are here to listen from you deliver excellence", paragraph, "get details" gold CTA button
5. **Car Models** — "Choose your Desired Car Model" heading, carousel of car cards. Each card: left = car image, right = car name (e.g. "Audi 3000 msi"), price "$149/day", description, specs (Capacity, Doors, Air Condition, Transmission), "Book This Car Now" gold CTA
6. **Facts/Stats** — Full-width yellow bg (`#fab700`), 5 stat counters in a row: Projects Completed (2536), Really Happy Clients (6784), Total Tasks Completed (1059), Cups of Coffee Taken (2239), In House Professionals (435)
7. **Reviews** — "Some Features that Made us Unique" heading, 6 review cards (3×2 grid) on light bg: each with reviewer name, review text, 3-star rating (filled/unfilled stars)
8. **Call-to-Action** — Bg image with dark navy overlay, centered "Experience Great Support" heading (white), paragraph, "Reach Our Support Team" outlined CTA button
9. **Blog** — "Latest From Our Blog" heading, 4 blog cards (4-column grid): thumbnail image, date, title, excerpt, likes count, comments count with icons
10. **Footer** — Dark navy bg (`#04091e`): 4 columns (Quick Links, Features, Resources with link lists, Social with icons) + Newsletter (email input + arrow submit button) + copyright bar with Component Dock link

## Gherkin requirements

### Feature: Navbar

- Scenario: Navbar displays logo and navigation
  - Given the page loads
  - Then a fixed navbar is visible at the top
  - And the logo is displayed on the left
  - And navigation links include Home, About, Cars, Service, Team, Blog, Contact
  - And a Pages dropdown menu is present

- Scenario: Navbar links navigate to sections
  - Given the user clicks the "Cars" nav link
  - Then the page scrolls to the car models section

### Feature: Hero Banner

- Scenario: Hero displays booking form
  - Given the user is on the home section
  - Then a full-screen hero with background image and dark overlay is displayed
  - And the subtitle "the Royal Essence of Journey" is shown
  - And the headline "Relaxed Journey Ever" is displayed in large bold uppercase text
  - And a "Rent Car Now" gold CTA button is present

- Scenario: Hero booking form is functional
  - Given the booking form is displayed on the right side
  - Then a car selection dropdown is present with car brand options
  - And a pickup location dropdown is present
  - And a pickup date picker is present
  - And a dropoff location dropdown is present
  - And a dropoff date picker is present
  - And name, email, and phone input fields are present
  - And a "Confirm Car Booking" submit button is present

### Feature: Features Section

- Scenario: Six feature cards display
  - Given the features section is visible
  - Then 6 feature cards are displayed in a 3×2 grid
  - And each card has an icon, title, and description
  - And the titles are: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews

- Scenario: Feature cards have hover effect
  - Given the user hovers over a feature card
  - Then the card background changes color

### Feature: About Section

- Scenario: About section displays split layout
  - Given the about section is visible
  - Then a left-side image is displayed
  - And the heading "Globally Connected by Large Network" is shown on the right
  - And the subtitle "We are here to listen from you deliver excellence" is displayed
  - And a "get details" gold CTA button is present

### Feature: Car Models Section

- Scenario: Car models display in a carousel
  - Given the car models section is visible
  - Then the heading "Choose your Desired Car Model" is displayed
  - And a carousel of car model cards is shown
  - And each card shows a car image, name, price per day, description, and specs (Capacity, Doors, Air Condition, Transmission)
  - And a "Book This Car Now" gold CTA button is on each card

- Scenario: Car model carousel is navigable
  - Given the car models carousel is displayed
  - When the user clicks the next navigation dot
  - Then the next car model card slides into view

### Feature: Facts/Stats Section

- Scenario: Stats display with yellow background
  - Given the facts section is visible
  - Then a full-width yellow background section is displayed
  - And 5 stat counters are shown in a row
  - And the stats include Projects Completed, Happy Clients, Total Tasks, Cups of Coffee, and In House Professionals

### Feature: Reviews Section

- Scenario: Review cards display with ratings
  - Given the reviews section is visible
  - Then the heading "Some Features that Made us Unique" is displayed
  - And 6 review cards are shown in a 3×2 grid
  - And each card shows a reviewer name, review text, and star rating
  - And filled stars are visually distinct from empty stars

### Feature: Call-to-Action Section

- Scenario: CTA section displays with background image
  - Given the CTA section is visible
  - Then a background image with dark navy overlay is displayed
  - And the heading "Experience Great Support" is shown in white
  - And a "Reach Our Support Team" outlined button is present

### Feature: Blog Section

- Scenario: Blog cards display
  - Given the blog section is visible
  - Then the heading "Latest From Our Blog" is displayed
  - And 4 blog cards are shown in a 4-column grid
  - And each card has a thumbnail image, date, title, excerpt, likes count, and comments count

### Feature: Footer

- Scenario: Footer displays with links and newsletter
  - Given the footer is visible
  - Then a dark navy background is displayed
  - And column headings include Quick Links, Features, Resources, Follow Us, Newsletter
  - And a newsletter email input with an arrow submit button is present
  - And social media icon links are displayed (Facebook, Twitter, Dribbble, Behance)
  - And a copyright notice is shown
  - And a link to "Component Dock" is present in the copyright

## Verification checklist

- [ ] Navbar is fixed at top with all nav links
- [ ] Hero section has full-screen bg image + dark overlay
- [ ] Booking form in hero has all fields (car select, pickup/dropoff, dates, name, email, phone)
- [ ] Features section shows 6 cards in 3×2 grid with icons
- [ ] About section has split image + text layout
- [ ] Car models carousel works with navigation dots
- [ ] Facts section has yellow `#fab700` background with 5 stat counters
- [ ] Reviews section shows 6 cards with star ratings
- [ ] CTA section has bg image + dark overlay + white heading
- [ ] Blog section shows 4 cards in 4-column grid
- [ ] Footer has dark navy bg, column links, newsletter form, social icons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] All design tokens match the original (Poppins font, `#fab700` gold, `#04091e` footer)
- [ ] All images use `https://picsum.photos/seed/fleetly-<n>/<w>/<h>` placeholders
- [ ] No ColorLib references in app source code
