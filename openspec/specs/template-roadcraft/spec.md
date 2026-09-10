# Template: Roadcraft (Car Rental)

## Purpose

Recreation of ColorLib "Autoroad" — a car rental / vehicle booking website template with a hero booking form, service cards, car grid, how-it-works steps, testimonials carousel, blog, and dark footer.

- **Source slug:** `autoroad`
- **Preview URL:** https://preview.colorlib.com/theme/autoroad/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/autoraod-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **Category:** Car Rental / Vehicle Booking

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

### Colors

| Token            | Value             | Usage                                                        |
| ---------------- | ----------------- | ------------------------------------------------------------ |
| brand-orange     | `#fc983c`         | Primary brand color, accent throughout (buttons, highlights) |
| brand-gold       | `#f7b71d`         | Secondary accent                                             |
| btn-black        | `#000000`         | Car card buttons (Book now, Details), outline variant        |
| btn-primary-blue | `#007bff`         | Search Vehicle CTA buttons                                   |
| footer-dark      | `#3c312e`         | Footer background (warm dark brown)                          |
| overlay-black    | `rgba(0,0,0,0.4)` | Hero overlay, background section overlay                     |
| white            | `#fff`            | Hero text, button text, card text                            |
| body-text        | `#000000`         | Body paragraph text                                          |
| muted-text       | `#b3b3b3`         | Secondary/muted text                                         |
| border-light     | `#e6e6e6`         | Light borders and dividers                                   |
| bg-light         | `#f8f9fa`         | Light section backgrounds                                    |

### Typography

- **Font family:** `"Poppins", Arial, sans-serif` (loaded via Google Fonts)
- **Body:** 16px base, `line-height: 1.7`, `font-weight: 400`
- **Headings:** Poppins bold (700)
- **Hero h1:** Large, white text on dark overlay, with `<span>` accent for "It's easy for you" / "rent a car"
- **Section subheading (`.subheading`):** Small, muted text above section headings
- **Section heading (`.heading-title`):** Poppins bold with accent underline after pseudo-element
- **Service card heading (`.heading`):** Bold with left padding

### Buttons & Shapes

- **Primary CTA (`.btn-primary`):** `#007bff` blue bg, white text, square corners (Bootstrap default), used for "Search Vehicle"
- **Black outline (`.btn-black.btn-outline-black`):** `#000` border, transparent bg, `#000` text; on hover: `#000` bg, `#fff` text — used on car cards ("Book now", "Details")
- **Car card buttons:** Small, side-by-side, black outline style

### Section Backgrounds

1. **Navbar:** Dark (`bg-dark`)
2. **Hero:** Background image (`images/bg_1.jpg`) + black overlay (opacity 0.4, 850px height)
3. **Services (Our Services):** White/light bg
4. **Car Grid (Choose Your Car):** White/light bg
5. **How it Works:** Background image (`images/bg_2.jpg`) + dark overlay
6. **Testimonials (Happy Clients):** White/light bg
7. **About CTA (Choose A Perfect Car):** White/light bg
8. **Blog (Recent Blog):** White/light bg
9. **Footer:** Dark warm brown `#3c312e`

## Section Structure (page order)

1. **Navbar** — dark bg, sticky top:
   - Brand: "Roadcraft" (white text)
   - Nav links: Home, About, Pricing, Our Car, Blog, Contact
   - Mobile: hamburger toggle

2. **Hero** — full-width background image + dark overlay:
   - Left column (col-6): Heading "Now It's easy for you rent a car" (white, with span accents), description paragraph, video play icon link ("Easy steps for renting a car")
   - Right column (col-4): Booking form "Make your trip"
     - Pick-up location (text input)
     - Drop-off location (text input)
     - Pick-up date (date input)
     - Drop-off date (date input)
     - Time (time input)
     - "Search Vehicle" blue CTA button

3. **Search Wrap** — secondary search bar area (no padding):
   - Extended search form with dropdowns for car type, price range, etc.
   - "Search" blue CTA button

4. **Services ("Our Services")** — 4-column card grid:
   - 24/7 Car Support (customer-support icon)
   - Lots of Location (route icon)
   - Reservation (select icon)
   - Rental Cars (rent icon)
   - Each card: icon + heading + description paragraph
   - Left-aligned icon + heading layout

5. **Car Grid ("Choose Your Car")** — 4-column card grid (2 rows = 8 cars):
   - Each card: background image (car photo), price overlay ("$25 From /Day"), car name heading, brand subheading, "Book now" + "Details" black outline buttons
   - Cars: Mercedes Grand Sedan (Audi, Ford, etc.), with different car images

6. **How It Works** — full-width bg image + dark overlay, 4-column grid:
   - Pick Destination (route icon)
   - Select Term (select icon)
   - Choose A Car (rent icon)
   - Enjoy The Ride (flaticon icon)
   - Each step: centered icon + heading + description

7. **Testimonials ("Happy Clients")** — owl-carousel style slider:
   - Testimonial cards with: circular user photo, quote text, name, position
   - 5 testimonial items (Roger Scott — Marketing Manager, Interface Designer, etc.)
   - Centered layout with carousel navigation

8. **About CTA ("Choose A Perfect Car")** — text-heavy section:
   - Heading + 2 paragraphs of description
   - "Search Vehicle" blue CTA button

9. **Blog ("Recent Blog")** — 3-column card grid:
   - 3 blog cards: background image, date + author meta, title heading, "Read more" link
   - Blog titles: "Why Lead Generation is Key for Business Growth"

10. **Footer** — dark warm brown bg `#3c312e`, 4-column layout:
    - About: "About Roadcraft" heading, description, social icons (Twitter, Facebook, Instagram)
    - Information: links list (About, Services, Terms, etc.)
    - Customer Support: links list (FAQ, Payment, Booking Tips, etc.)
    - Contact: address, phone, email
    - Copyright line + "Made with Component Dock" link

## Gherkin Scenarios

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation links
  Given the user is on the Roadcraft homepage
  Then the navbar shows the brand "Roadcraft"
  And the nav contains links: Home, About, Pricing, Our Car, Blog, Contact

Scenario: Navbar is sticky on scroll
  Given the user scrolls down the page
  Then the navbar remains fixed at the top of the viewport
```

### Hero Section

```gherkin
Scenario: Hero displays booking form
  Given the user is on the Roadcraft homepage
  Then the hero section shows a heading about renting a car
  And a booking form with fields: pick-up location, drop-off location, pick-up date, drop-off date, time
  And a "Search Vehicle" button is visible

Scenario: Hero has dark overlay on background image
  Given the user views the hero section
  Then a dark semi-transparent overlay covers the background image
  And the heading text is white and readable against the overlay
```

### Services Section

```gherkin
Scenario: Services section shows 4 service cards
  Given the user scrolls to the "Our Services" section
  Then 4 service cards are displayed in a row
  And each card shows an icon, heading, and description
  And the services are: 24/7 Car Support, Lots of Location, Reservation, Rental Cars
```

### Car Grid

```gherkin
Scenario: Car grid displays vehicle cards
  Given the user scrolls to the "Choose Your Car" section
  Then 8 car cards are displayed in a 4-column grid
  And each card shows a car image, price, car name, and brand
  And each card has "Book now" and "Details" buttons

Scenario: Car card buttons are interactive
  Given the user hovers over a car card "Book now" button
  Then the button style changes from outline to filled black
```

### How It Works

```gherkin
Scenario: How it works shows 4 steps
  Given the user scrolls to the "How it works" section
  Then 4 steps are displayed: Pick Destination, Select Term, Choose A Car, Enjoy The Ride
  And each step shows an icon, heading, and description
  And the section has a dark overlay background image
```

### Testimonials

```gherkin
Scenario: Testimonials carousel displays client reviews
  Given the user scrolls to the "Happy Clients" section
  Then a carousel of testimonial cards is visible
  And each card shows a user photo, quote, name, and position
```

### About CTA

```gherkin
Scenario: About CTA section has description and button
  Given the user scrolls to the "Choose A Perfect Car" section
  Then a heading and descriptive paragraphs are shown
  And a "Search Vehicle" blue CTA button is present
```

### Blog Section

```gherkin
Scenario: Blog section shows recent posts
  Given the user scrolls to the "Recent Blog" section
  Then 3 blog cards are displayed
  And each card shows an image, date, author, and title
```

### Footer

```gherkin
Scenario: Footer displays columns and contact info
  Given the user scrolls to the footer
  Then 4 columns are shown: About, Information, Customer Support, Contact
  And the About column has social media icons
  And the Contact column shows address, phone, and email
  And a "Made with Component Dock" link is present

Scenario: Footer has dark background
  Given the user views the footer
  Then the background color is dark warm brown (#3c312e)
  And the text is light/white
```

## Verification Checklist

- [ ] Navbar: sticky, dark bg, brand + 6 nav links, mobile hamburger
- [ ] Hero: background image + dark overlay, heading with span accents, booking form (5 inputs + CTA)
- [ ] Search wrap: secondary search area with dropdowns
- [ ] Services: 4 cards with icons, headings, descriptions
- [ ] Car grid: 8 cards in 4-col grid, price overlay, Book now + Details buttons
- [ ] How it works: bg image + overlay, 4 steps with icons
- [ ] Testimonials: carousel with user photos, quotes, names, positions
- [ ] About CTA: heading, paragraphs, Search Vehicle button
- [ ] Blog: 3 cards with image, meta, title
- [ ] Footer: dark bg, 4 columns, social icons, contact info, Component Dock link
- [ ] Design tokens: brand-orange #fc983c, footer-dark #3c312e, btn-black #000, btn-primary #007bff, Poppins font
- [ ] Responsive: mobile hamburger, stacked columns on small screens
- [ ] Accessibility: semantic HTML, aria labels, keyboard navigation
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to componentdock.com
