# Template: Revspot (Car Rental)

## Purpose

Recreation of ColorLib **CarRental** template.
- Source slug: `carrentals`
- Preview URL: https://preview.colorlib.com/theme/carrentals/
- ColorLib page: https://colorlib.com/wp/template/carrentals/
- Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript
- App path: `apps/revspot`
- Package: `@free-react-templates/revspot`

A single-page car rental website with a hero search form, how-it-works steps,
car listing cards, features grid, testimonials, CTA banner, and footer.

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and inline styles.

| Token              | Value / Notes                                                    |
| ------------------ | ---------------------------------------------------------------- |
| Brand color        | `#0779e4` (blue) — used on links, step numbers, price text, nav active state |
| Bootstrap primary  | `#007bff` — used on `bg-primary` class (CTA banner background) |
| Background dark    | `#000` (hero text color)                                        |
| Background light   | `#f8f9fa` / `bg-light` — listings section & testimonials section |
| Background white   | `#fff` — cards, listings, testimonials, service icons            |
| Text dark          | `#000` — headings, hero h1, footer headings                     |
| Text muted         | `#888` — listing features, service descriptions                  |
| Text light         | `#999` — secondary text                                         |
| Font family        | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` |
| Font weights       | 400 (body), 700 (headings, section-heading strong), 900 (hero h1, step numbers, listing h3) |
| Button style       | Bootstrap `.btn-primary` — `padding: 12px 25px`, no explicit border-radius (default Bootstrap ~0.25rem) |
| Button white       | `.btn-white` — bg `#fff`, color `#0779e4`                        |
| Card border-radius | `7px` — listings, testimonials, play icon                        |
| Card box-shadow    | `0 15px 30px 0 rgba(0,0,0,0.1)`                                 |
| Feature icon bg    | `#fff` — 90x90px circle on service-1 icons                       |
| Hero               | Full viewport height (`100vh`, min 570px), background-image cover |
| Section padding    | `2.5em 0` (default), `5em 0` (lg screens)                       |
| Footer padding     | `4em 0` (default), `8em 0` (lg)                                 |
| Footer link color  | `rgba(0,0,0,0.5)`                                               |
| Footer heading     | `16px`, color `#000`                                             |

### Section backgrounds

| Section          | Background                                |
| ---------------- | ----------------------------------------- |
| Hero             | Full-bleed background image (dark overlay implied by white text) |
| How it Works     | White (`#fff`)                            |
| Promo/Feature    | White (`#fff`)                            |
| Car Listings     | Light (`bg-light` / `#f8f9fa`)           |
| Features         | White (`#fff`)                            |
| Testimonials     | Light (`bg-light` / `#f8f9fa`)           |
| CTA Banner       | Primary (`bg-primary` / `#007bff`)       |
| Footer           | White (`#fff`)                            |

## Gherkin Requirements

### Feature: Header Navigation

  Scenario: Logo display
    Given the page loads
    Then the navbar shows "CarRental" as a bold logo link

  Scenario: Navigation links
    Given the page loads
    Then the navbar contains links: Home, Listing, Testimonials, Blog, About, Contact
    And "Home" is marked as the active link

  Scenario: Mobile menu toggle
    Given the viewport is narrow (< 992px)
    When the user clicks the hamburger menu icon
    Then the mobile navigation menu opens
    When the user clicks the close icon
    Then the mobile navigation menu closes

### Feature: Hero Section with Search Form

  Scenario: Hero background and heading
    Given the page loads
    Then the hero section displays a full-viewport background image
    And the heading reads "Rent a car is within your finger tips."

  Scenario: Search form fields
    Given the hero search form is visible
    Then the form contains a "Select Type" dropdown
    And a "Pick up" date input
    And a "Drop off" date input
    And a "Search Now" submit button

  Scenario: Search form submission
    Given the user selects a car type, pick up date, and drop off date
    When the user clicks "Search Now"
    Then the form is submitted (placeholder behavior)

### Feature: How It Works

  Scenario: Steps display
    Given the user scrolls to the "How it works?" section
    Then 3 steps are shown in a row: "Select a car", "Fill up form", "Payment"
    And each step has a numbered indicator (01., 02., 03.) in brand blue

  Scenario: Video play link
    Given the how-it-works section is visible
    Then a "Video how it works" play button is displayed below the steps

### Feature: Promo / Feature Split Section

  Scenario: Promo layout
    Given the user scrolls to the promo section
    Then a large feature image is shown on the right
    And a heading "You can easily avail our promo for renting a car." on the left
    And a "Meet them now" primary button is below the text

### Feature: Car Listings

  Scenario: Listing cards grid
    Given the user scrolls to the Car Listings section (light background)
    Then 6 car listing cards are displayed in a 3-column grid
    And each card shows a car image, name, and daily price (e.g. "$389.00/day")

  Scenario: Car card details
    Given a car listing card is rendered
    Then it shows feature specs: Luggage, Doors, Passenger counts
    And a "Rent Now" primary button is at the bottom

### Feature: Features Grid

  Scenario: Feature cards
    Given the user scrolls to the Features section
    Then 6 service/feature cards are displayed in a 3-column x 2-row grid
    And each card has an icon, a title, a description, and a "Learn more" link
    And cards have hover shadow effect

### Feature: Testimonials

  Scenario: Testimonial cards
    Given the user scrolls to the Testimonials section (light background)
    Then 3 testimonial cards are displayed in a 3-column grid
    And each card shows a blockquote with review text
    And an author avatar (circular), name, and role below the quote

### Feature: CTA Banner

  Scenario: Call to action
    Given the user scrolls to the CTA section (blue background)
    Then the heading reads "What are you waiting for?"
    And a subtext is shown below
    And a "Rent a car now" white button is displayed on the right

### Feature: Footer

  Scenario: Footer columns
    Given the page footer is visible
    Then it contains 5 columns: About Us (with social icons), Quick Links, Resources, Support, Company
    And a copyright line is shown at the bottom
    And the copyright links to Component Dock (replaces original Colorlib attribution)

  Scenario: Footer social icons
    Given the About Us column is visible
    Then social icons for Facebook, Instagram, Twitter, and LinkedIn are displayed

## Verification Checklist

- [ ] Hero displays full-viewport background image with search form overlay
- [ ] Search form has 4 fields: Select Type dropdown, Pick up, Drop off, Search Now
- [ ] "How it Works" shows 3 numbered steps in a row with brand-blue numbers
- [ ] Video play button is centered below the steps
- [ ] Promo section has split layout: image right, text + CTA left
- [ ] Car Listings shows 6 cards in 3-col grid with image, name, price, specs, "Rent Now"
- [ ] Features section shows 6 cards in 3x2 grid with icons, titles, descriptions, "Learn more"
- [ ] Testimonials section shows 3 cards with quotes, circular avatars, author info
- [ ] CTA banner has blue background, white text, "Rent a car now" white button
- [ ] Footer has 5 columns (About + social, Quick Links, Resources, Support, Company)
- [ ] Footer copyright links to Component Dock (not ColorLib)
- [ ] Brand color #0779e4 used throughout (links, prices, step numbers)
- [ ] Font is Roboto with weights 400/700/900
- [ ] Card border-radius is 7px with box-shadow
- [ ] No reference to ColorLib in app source code
- [ ] placeholder images use picsum.photos
- [ ] Footer links to https://www.componentdock.com/
