# Template: RevTrack (Car Rental)

## Purpose

- **Recreation of ColorLib source**: Carrentals (`https://colorlib.com/wp/template/carrentals/`)
- **Preview URL**: `https://preview.colorlib.com/theme/carrentals/`
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/carrentals-free-template.jpg`
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript
- **New name**: RevTrack (no ColorLib references in app code)

## Design Tokens (extracted from preview)

| Token            | Value                                    | Usage                                       |
| ---------------- | ---------------------------------------- | ------------------------------------------- |
| brand-primary    | `#0779e4` (cobalt blue)                 | Step numbers, active nav, rent price, accents |
| bootstrap-primary| `#007bff` (Bootstrap default)            | Buttons, bg-primary CTA banner              |
| body-text        | `#364d59` (dark teal-gray)              | Body text, headings                         |
| text-black       | `#000`                                   | Hero headline, logo, nav hover, card titles |
| text-muted       | `#888` / `#999`                         | Step descriptions, listing descriptions     |
| bg-white         | `#fff`                                   | Page background, cards, step boxes          |
| bg-light         | `#f8f9fa` (Bootstrap)                   | Listings section, testimonials section      |
| bg-primary       | `#007bff`                                | CTA banner background                      |
| font-family      | `"Roboto", sans-serif`                   | All text (weights: 300 body, 700 headings, 900 logo/numbers) |
| card-radius      | `7px`                                    | Listing cards, listing images               |
| card-shadow      | `0 15px 30px 0 rgba(0,0,0,0.1)`         | Step boxes, listing image shadows           |
| hero-height      | `100vh` (min 570px)                     | Hero section                                |
| hero-heading     | `50px`, font-weight 900, color `#000`   | Hero h1                                     |
| step-number-size | `100px`, font-weight 900, color `#0779e4` | Large step background number              |
| btn-padding      | `12px 25px`                              | Primary buttons                             |
| dropdown-border  | `2px solid #0779e4`                      | Nav dropdown top accent                     |

## Section Order (from preview DOM)

1. **Navbar** — Fixed/absolute top bar: bold logo "CarRental" left, horizontal nav links right (Home, Listing, Testimonials, Blog, About, Contact). Active item highlighted in `#0779e4`. Mobile hamburger menu.

2. **Hero** — Full-viewport background image (`hero_1_a.jpg`), centered content. Headline: `<strong>Rent a car</strong> is within your finger tips.` below which sits a white search form with 4 fields in a row: Select Type dropdown, Pick up date, Drop off date, Search Now button.

3. **How It Works** — White background section. Heading "How it works?" + subtitle "Easy steps to get you started". Three horizontal cards (col-lg-4) each with: large translucent step number background (1/2/3), bold small number (01./02./03.), title (Select a car / Fill up form / Payment), description text. Below the cards: a "Video how it works" link with circular play icon.

4. **Promo Section** — Two-column layout: left has product image (`feature_01.png`), right has heading "You can easily avail our promo for renting a car." + description + "Meet them now" CTA button.

5. **Car Listings** — Light gray background. Heading "Car Listings" + subtitle. Six car cards in a 3-column grid. Each card: car image at top with negative top margin and box shadow, car name (bold 18px), price (e.g. `$389.00/day` in blue), feature row (Luggage/Doors/Passenger), description, "Rent Now" small button.

6. **Features** — White background. Heading "Features". Six feature items in a 3-column grid, each with an icon, title, and description.

7. **Testimonials** — Light gray background. Heading "Testimonials". Three testimonial cards in a row, each with a blockquote and author info (avatar image + name + role).

8. **CTA Banner** — Blue background (`#007bff`). Two-column: left has "What are you waiting for?" heading + subtitle, right has "Rent a car now" white button.

9. **Footer** — Dark/white footer. Four columns: About Us (with social links: Facebook, Instagram, Twitter, LinkedIn), Quick Links, Resources, Support, Company. Copyright line at bottom.

## Gherkin Requirements

### Feature: Navbar

  Scenario: Navbar displays brand and navigation
    Given the user loads the page
    Then the navbar shows "CarRental" brand text on the left
    And navigation links are visible: Home, Listing, Testimonials, Blog, About, Contact
    And the active link is highlighted in blue (#0779e4)

  Scenario: Navbar is responsive
    Given the user is on a mobile viewport
    Then the navigation links collapse into a hamburger menu
    And clicking the hamburger reveals the navigation links

### Feature: Hero

  Scenario: Hero section displays with background image
    Given the user loads the page
    Then the hero section fills the viewport height
    And a background image is displayed
    And the headline "Rent a car is within your finger tips." is visible
    And "Rent a car" is rendered in bold/900 weight

  Scenario: Search form is functional
    Given the user views the hero section
    Then a search form is visible with Select Type, Pick up, Drop off fields
    And a "Search Now" button is displayed

  Scenario: Select Type dropdown has options
    Given the user clicks the Select Type dropdown
    Then options include car types (Ferrari, Toyota, Ford, Lamborghini)

### Feature: How It Works

  Scenario: Three steps are displayed
    Given the user scrolls to the How It Works section
    Then three step cards are visible in a row
    And step 1 is "Select a car" with number 01
    And step 2 is "Fill up form" with number 02
    And step 3 is "Payment" with number 03

  Scenario: Step cards have visual design
    Given the step cards are rendered
    Then each card has a large translucent number background
    And each card has a white background with box shadow
    And the large number is colored blue (#0779e4) at 100px

  Scenario: Video link is present
    Given the user views the How It Works section
    Then a "Video how it works" link with play icon is centered below the steps

### Feature: Promo Section

  Scenario: Promo section displays two columns
    Given the user scrolls to the promo section
    Then an image is shown on one side (right on desktop)
    And a heading "You can easily avail our promo for renting a car." is shown on the other side
    And a "Meet them now" button is displayed

### Feature: Car Listings

  Scenario: Six car listings are displayed
    Given the user scrolls to the Car Listings section
    Then six car cards are visible in a 3-column grid
    And each card shows a car image, name, price per day, and features

  Scenario: Each listing card has required content
    Given a car listing card is rendered
    Then it shows the car name (e.g. "Mitsubishi Pajero")
    And it shows a price (e.g. "$389.00/day") in blue
    And it shows features: Luggage, Doors, Passenger counts
    And it has a description paragraph
    And it has a "Rent Now" button

### Feature: Features Section

  Scenario: Six feature items are displayed
    Given the user scrolls to the Features section
    Then six feature cards are visible in a 3-column grid
    And each has an icon, title, and description

### Feature: Testimonials

  Scenario: Three testimonials are displayed
    Given the user scrolls to the Testimonials section
    Then three testimonial cards are visible
    And each shows a blockquote with a quote
    And each shows author name and role with an avatar image

### Feature: CTA Banner

  Scenario: CTA banner encourages action
    Given the user scrolls to the CTA section
    Then the section has a blue background
    And heading text "What are you waiting for?" is displayed
    And a "Rent a car now" button is shown on the right

### Feature: Footer

  Scenario: Footer has four-column layout
    Given the user scrolls to the footer
    Then an "About Us" column is shown with description and social icons
    And three link columns are shown: Quick Links, Resources, Support, Company
    And a copyright line is displayed at the bottom

  Scenario: Footer links are present
    Given the footer is rendered
    Then Quick Links include: About Us, Testimonials, Terms of Service, Privacy, Contact Us

## Verification Checklist

- [ ] Navbar: brand text visible, all nav links present, active state uses #0779e4
- [ ] Navbar: responsive hamburger menu on mobile
- [ ] Hero: full viewport height, background image, headline with bold "Rent a car"
- [ ] Hero: search form with select, pick up, drop off, search button
- [ ] How It Works: 3 step cards with large numbers, titles, descriptions
- [ ] How It Works: "Video how it works" link with play icon
- [ ] Promo: two-column layout with image and CTA
- [ ] Car Listings: 6 cards in 3-col grid, each with image, name, price, features, description, Rent Now button
- [ ] Features: 6 items in 3-col grid with icons
- [ ] Testimonials: 3 cards with quotes, author name/role/avatar
- [ ] CTA Banner: blue bg, heading, white button
- [ ] Footer: 4-column layout, social icons, copyright, links
- [ ] Typography: Roboto font family, correct weights (300/700/900)
- [ ] Colors: brand-primary #0779e4 used consistently for accents
- [ ] Cards: border-radius 7px, box-shadow applied
- [ ] No ColorLib references in any app code
- [ ] Footer links to Component Dock
- [ ] All placeholder images use picsum.photos
