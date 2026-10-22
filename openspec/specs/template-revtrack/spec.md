# Template: RevTrack (Car Rental)
<!-- prep-status: shipped-as=drivego -->
> **SHIPPED-UNDER** — the ColorLib `carrentals` design this prep describes already
> ships as `apps/drivego` (<https://drivego.free.componentdock.com>).
> Do not scaffold `apps/revtrack`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-drivego/spec.md`.

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

## Requirements

### Feature: Navbar

#### Scenario: Navbar displays brand and navigation

- **GIVEN** the user loads the page
- **THEN** the navbar shows "CarRental" brand text on the left
- **AND** navigation links are visible: Home, Listing, Testimonials, Blog, About, Contact
- **AND** the active link is highlighted in blue (#0779e4)

#### Scenario: Navbar is responsive

- **GIVEN** the user is on a mobile viewport
- **THEN** the navigation links collapse into a hamburger menu
- **AND** clicking the hamburger reveals the navigation links

### Feature: Hero

#### Scenario: Hero section displays with background image

- **GIVEN** the user loads the page
- **THEN** the hero section fills the viewport height
- **AND** a background image is displayed
- **AND** the headline "Rent a car is within your finger tips." is visible
- **AND** "Rent a car" is rendered in bold/900 weight

#### Scenario: Search form is functional

- **GIVEN** the user views the hero section
- **THEN** a search form is visible with Select Type, Pick up, Drop off fields
- **AND** a "Search Now" button is displayed

#### Scenario: Select Type dropdown has options

- **GIVEN** the user clicks the Select Type dropdown
- **THEN** options include car types (Ferrari, Toyota, Ford, Lamborghini)

### Feature: How It Works

#### Scenario: Three steps are displayed

- **GIVEN** the user scrolls to the How It Works section
- **THEN** three step cards are visible in a row
- **AND** step 1 is "Select a car" with number 01
- **AND** step 2 is "Fill up form" with number 02
- **AND** step 3 is "Payment" with number 03

#### Scenario: Step cards have visual design

- **GIVEN** the step cards are rendered
- **THEN** each card has a large translucent number background
- **AND** each card has a white background with box shadow
- **AND** the large number is colored blue (#0779e4) at 100px

#### Scenario: Video link is present

- **GIVEN** the user views the How It Works section
- **THEN** a "Video how it works" link with play icon is centered below the steps

### Feature: Promo Section

#### Scenario: Promo section displays two columns

- **GIVEN** the user scrolls to the promo section
- **THEN** an image is shown on one side (right on desktop)
- **AND** a heading "You can easily avail our promo for renting a car." is shown on the other side
- **AND** a "Meet them now" button is displayed

### Feature: Car Listings

#### Scenario: Six car listings are displayed

- **GIVEN** the user scrolls to the Car Listings section
- **THEN** six car cards are visible in a 3-column grid
- **AND** each card shows a car image, name, price per day, and features

#### Scenario: Each listing card has required content

- **GIVEN** a car listing card is rendered
- **THEN** it shows the car name (e.g. "Mitsubishi Pajero")
- **AND** it shows a price (e.g. "$389.00/day") in blue
- **AND** it shows features: Luggage, Doors, Passenger counts
- **AND** it has a description paragraph
- **AND** it has a "Rent Now" button

### Feature: Features Section

#### Scenario: Six feature items are displayed

- **GIVEN** the user scrolls to the Features section
- **THEN** six feature cards are visible in a 3-column grid
- **AND** each has an icon, title, and description

### Feature: Testimonials

#### Scenario: Three testimonials are displayed

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** three testimonial cards are visible
- **AND** each shows a blockquote with a quote
- **AND** each shows author name and role with an avatar image

### Feature: CTA Banner

#### Scenario: CTA banner encourages action

- **GIVEN** the user scrolls to the CTA section
- **THEN** the section has a blue background
- **AND** heading text "What are you waiting for?" is displayed
- **AND** a "Rent a car now" button is shown on the right

### Feature: Footer

#### Scenario: Footer has four-column layout

- **GIVEN** the user scrolls to the footer
- **THEN** an "About Us" column is shown with description and social icons
- **AND** three link columns are shown: Quick Links, Resources, Support, Company
- **AND** a copyright line is displayed at the bottom

#### Scenario: Footer links are present

- **GIVEN** the footer is rendered
- **THEN** Quick Links include: About Us, Testimonials, Terms of Service, Privacy, Contact Us

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
