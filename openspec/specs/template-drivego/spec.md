# Template: DriveGo (Car Rental)

## Purpose

Recreation of ColorLib **Carrentals** template.

- Source: https://colorlib.com/wp/template/carrentals/
- Preview: https://preview.colorlib.com/theme/carrentals/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- New name: **DriveGo** (apps/drivego, `@free-react-templates/drivego`)

## Design tokens

Extracted from the preview's `css/style.css`:

| Token                 | Value                                                                             | Source                                                              |
| --------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Brand color (primary) | `#0779e4`                                                                         | `.btn-primary`, `.text-primary`, `.bg-primary`, `.trip-form` submit |
| Font family           | `"Roboto", sans-serif`                                                            | `@font-face` declarations (400, 700, 900 weights)                   |
| Hero heading          | `#000`, `font-size: 50px`, `font-weight: 900`                                     | `.hero .intro h1`                                                   |
| Trip form             | `border-radius: 7px`, white bg, `box-shadow: 0 15px 30px rgba(0,0,0,0.1)`         | `.trip-form`                                                        |
| Listings card         | `border-radius: 7px`, white bg, `padding: 20px`                                   | `.listing`                                                          |
| Testimonial card      | `border-radius: 7px`, `border-bottom: 4px solid #0779e4`                          | `.testimonial-2`                                                    |
| Step numbers          | `text-primary` (#0779e4)                                                          | `.step .number.text-primary`                                        |
| Service icon          | `border-radius: 50%` (circle)                                                     | `.service-1 .service-1-icon`                                        |
| CTA banner            | `background: #0779e4`, white text                                                 | `.bg-primary`                                                       |
| Button primary        | Bootstrap default `.btn-primary` + `padding: 12px 25px`                           | `.btn.btn-primary`                                                  |
| Button white (CTA)    | `background: #fff`, `color: #0779e4`                                              | `.btn.btn-white`                                                    |
| Navbar                | White bg, logo black (`#000`), nav links `rgba(0,0,0,0.7)`, active link `#0779e4` | `.site-navbar`                                                      |
| Footer                | Dark background, `color: rgba(0,0,0,0.5)` for links                               | `.site-footer`                                                      |

## Visual design (from screenshot)

The template has a clean, professional car-rental aesthetic:

- White navbar with bold "CarRental" logo on the left, navigation links on the right
- Full-screen hero with a dark car image, overlaid headline and a prominent white search form
- Clean white sections with subtle gray (`bg-light`) alternating backgrounds
- Blue (#0779e4) brand accent used sparingly: CTA buttons, step numbers, active nav, testimonial borders
- Card-based car listings with a side-by-side image+content layout
- Circle icon features section with hover effects
- Blue CTA banner before the dark footer

## Section structure (top to bottom)

1. **Navbar** — sticky, white, logo left, nav right (Home, Listing, Testimonials, Blog, About, Contact), mobile hamburger
2. **Hero** — full-viewport bg image, headline "Rent a car is within your finger tips", search form overlay (Select Type dropdown, Pick up date, Drop off date, Search Now button)
3. **How It Works** — 3 numbered steps (Select a car, Fill up form, Payment) with step numbers in blue + "Video how it works" play link
4. **Promo** — split layout: text left ("You can easily avail our promo for renting a car") + car image right, CTA button
5. **Car Listings** — 3-col grid of 6 car cards (image, car name, price/day, specs row: Luggage/Doors/Passenger, description, Rent Now button)
6. **Features** — 3x2 grid of 6 service cards with circle icons (home, gear, clock, user, video, key), title, description, "Learn more" link
7. **Testimonials** — 3-col grid, 3 testimonial cards (quote, avatar photo, name + role)
8. **CTA Banner** — blue bg-primary section: "What are you waiting for?" headline + "Rent a car now" button
9. **Footer** — About Us (with social icons), 4 link columns (Quick Links, Resources, Support, Company), copyright line

## Requirements

### Requirement: Navbar displays correctly

The navbar SHALL show the DriveGo logo on the left and navigation links (Home, Listing, Testimonials, Blog, About, Contact) on the right, be sticky on scroll, and show a mobile hamburger menu on small screens.

#### Scenario: Navbar renders all navigation links

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the navbar
- **THEN** the navbar should show the DriveGo logo on the left
- **AND** the navigation links should be: Home, Listing, Testimonials, Blog, About, Contact
- **AND** the navbar should be sticky on scroll
- **AND** a mobile hamburger menu should appear on small screens

### Requirement: Hero section renders

The hero SHALL be full-viewport height with a background image, headline, subtitle, and a search form with Select Type dropdown, Pick up/Drop off date inputs, and a Search Now button.

#### Scenario: Hero section renders with search form

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the hero section
- **THEN** the hero should be full-viewport height
- **AND** it should display the headline "Rent a car is within your finger tips"
- **AND** a search form should appear with a Select Type dropdown
- **AND** the form should have Pick up and Drop off date inputs
- **AND** the form should have a Search Now button

### Requirement: How It Works section shows 3 steps

The section SHALL display 3 numbered steps (Select a car, Fill up form, Payment) with blue numbers and a "Video how it works" link.

#### Scenario: Three steps are displayed

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the How It Works section
- **THEN** there should be 3 numbered steps
- **AND** step 1 should be "Select a car"
- **AND** step 2 should be "Fill up form"
- **AND** step 3 should be "Payment"
- **AND** a "Video how it works" link should be visible

### Requirement: Promo section shows car image with text

The promo section SHALL display a split layout with text on the left and a car image on the right, plus a CTA button.

#### Scenario: Promo section renders

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the promo section
- **THEN** a promo section should display a car image
- **AND** the text should describe a rental promo
- **AND** a "Meet them now" CTA button should be present

### Requirement: Car Listings shows 6 vehicle cards

The listings section SHALL display 6 car cards in a 3-column grid, each with image, name, price per day, specs (Luggage, Doors, Passenger), description, and Rent Now button.

#### Scenario: Six car cards are displayed

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the Car Listings section
- **THEN** the Car Listings section should display 6 car cards
- **AND** each card should show the car image, name, and price per day
- **AND** each card should show specs: Luggage, Doors, Passenger count
- **AND** each card should have a "Rent Now" button

### Requirement: Features section shows 6 service cards

The features section SHALL display 6 service cards in a 3x2 grid with circle icons, title, description, and Learn more link.

#### Scenario: Six feature cards are displayed

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the Features section
- **THEN** 6 service cards should be visible in a grid
- **AND** each card should have a circle icon, title, description, and "Learn more" link

### Requirement: Testimonials section shows 3 reviews

The testimonials section SHALL display 3 testimonial cards with quote, avatar, name, and role.

#### Scenario: Three testimonial cards are displayed

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the Testimonials section
- **THEN** 3 testimonial cards should be visible
- **AND** each card should show a quote, avatar, name, and role

### Requirement: CTA banner is present

The CTA banner SHALL have a blue background with "What are you waiting for?" heading and a "Rent a car now" button.

#### Scenario: CTA banner renders

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the CTA banner
- **THEN** a blue CTA banner should be visible
- **AND** it should show "What are you waiting for?"
- **AND** a "Rent a car now" button should be present

### Requirement: Footer is complete

The footer SHALL contain About Us text, social icons, 4 link columns (Quick Links, Resources, Support, Company), copyright line, and a link to Component Dock.

#### Scenario: Footer renders all sections

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the footer
- **THEN** the footer should contain About Us text and social icons
- **AND** it should have 4 link columns: Quick Links, Resources, Support, Company
- **AND** the copyright line should be present
- **AND** the footer should link to https://www.componentdock.com/

#### Scenario: Footer links to Component Dock

- **GIVEN** I am on the DriveGo page
- **WHEN** I look at the footer
- **THEN** the footer should contain a link to https://www.componentdock.com/
- **AND** it should be branded as "Component Dock"

## Verification checklist

- [ ] Navbar: logo renders, all nav links present, sticky behavior works, hamburger on mobile
- [ ] Hero: full viewport height, headline visible, search form with all inputs functional
- [ ] How It Works: 3 steps displayed with blue numbers, video link present
- [ ] Promo: car image + text + CTA button
- [ ] Car Listings: 6 cards in 3-column grid, each with image/name/price/specs/Rent Now
- [ ] Features: 6 service cards with circle icons, hover effect
- [ ] Testimonials: 3 cards with quote, avatar, name, role
- [ ] CTA Banner: blue background, headline, button
- [ ] Footer: About Us, 4 link columns, social icons, copyright, Component Dock link
- [ ] Design tokens: brand #0779e4, font Roboto, border-radius 7px, proper spacing
- [ ] No ColorLib references in app code
- [ ] Images use picsum.photos placeholders
- [ ] 100% test coverage (TDD)
- [ ] Spec folder: openspec/specs/template-drivego/spec.md
- [ ] Docs folder: docs/templates/drivego/
