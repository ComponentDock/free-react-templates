# Template: AutoRent (Car Rental Landing Page)
<!-- prep-status: shipped-as=drivego -->
> **SHIPPED-UNDER** — the ColorLib `carrentals` design this prep describes already
> ships as `apps/drivego` (<https://drivego.free.componentdock.com>).
> Do not scaffold `apps/autorent`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-drivego/spec.md`.

## Purpose

Recreation of ColorLib "Carrentals" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. The original is a car rental landing page with a hero booking form, how-it-works steps, a promo section, car listing cards, features grid, testimonials, and a call-to-action banner.

- **ColorLib source:** https://colorlib.com/wp/template/carrentals/
- **Live preview:** https://preview.colorlib.com/theme/carrentals/
- **New name:** `autorent` (apps/autorent, @free-react-templates/autorent)
- **Deploy target:** https://autorent.free.componentdock.com

## Design Tokens (from live preview CSS analysis)

### Colors
| Token | Hex | Usage |
|---|---|---|
| brand-primary | `#0779e4` | Navbar links hover, primary buttons, icon circles, step numbers |
| white | `#fff` | Navbar bg, card bg, button-on-dark text, listing cards |
| bg-light | `#f6f5f5` | Light section backgrounds (car listings, testimonials) |
| bg-light-alt | `#f8f9fa` | Active states |
| text-dark | `#000` | Hero heading, body text |
| text-muted | `#888` | Secondary text, step descriptions |
| border-gray | `#ccc` | Dividers, form controls |
| border-light | `#ced4da` | Form control borders, listing dividers |
| gray-dark | `#364d59` | Overlay tones |
| bg-primary | `#0779e4` | CTA section full-width background |

### Typography
- **Primary font:** `Roboto, sans-serif` (Google Fonts)
- **Headings:** bold weight (500–900), Roboto
- **Body:** regular weight (400), Roboto
- **Hero h1:** 50px, black, bold

### Buttons
- **Primary btn:** bg `#0779e4`, text white, padding `12px 25px`, border-radius `4px`
- **White btn:** bg `#fff`, text `#0779e4`, border-radius `4px`
- **Shape:** slightly rounded (`border-radius: 4px`), standard Bootstrap `.btn` sizing

### Other Tokens
- **Border-radius:** `4px` (cards, buttons), `50%` (avatar circles, step icons)
- **Card bg:** `#fff` (listing cards, step-inner)
- **Section heading underline:** `#0779e4` accent bar
- **Feature icons:** white circles on `#0779e4` bg

## Section Structure (top to bottom)

1. **Navbar** — Sticky top, white bg, logo left ("AutoRent"), nav links (Home), responsive mobile menu
2. **Hero** — Full viewport height, background image (`hero_1_a.jpg`), dark overlay, heading "Rent a car is within your finger tips.", car type selector dropdown (Ferrari, Toyota, Ford, Lamborghini), CTA button
3. **How It Works** — 3 numbered steps in a row: "Select a car", "Fill up form", "Payment" — each with a step number circle (primary color), title, and description
4. **Promo / Why Choose Us** — 2-column layout: left has a video play button (image `feature_01.png`), right has heading "You can easily avail our promo for renting a car." + description + "Meet them now" primary button
5. **Car Listings** — Heading "Car Listings" + subtitle, 6 car cards in a 2-column grid on light bg (`#f6f5f5`). Each card: image left, name + price `$389.00/day` + 3 features (Luggage: 8, Doors: 4, Passenger: 4) + description + "Rent Now" button
6. **Features** — Heading "Features" + subtitle, 6 feature cards in a 3-column grid. Each: icon circle (white on blue), title "Lorem ipsum dolor", description, "Learn more" link
7. **Testimonials** — Heading "Testimonials" + subtitle, 3 testimonial cards on light bg. Each: quote text, name, role (e.g. "Mike Fisher, Owner, Ford")
8. **CTA Banner** — Full-width primary bg (`#0779e4`), heading "What are you waiting for?", subtitle, "Rent a car now" white button
9. **Footer** — Dark bg, 4 columns: About Us (social icons), Quick Links, Resources, Support + copyright + Component Dock attribution

## Requirements

### Feature: AutoRent template behaviour

#### Scenario: Navbar renders correctly

- **GIVEN** the user visits the AutoRent landing page
- **THEN** the navbar is visible with the "AutoRent" logo on the left
- **AND** the navbar has a white background
- **AND** the navbar is sticky at the top of the viewport

#### Scenario: Hero section displays booking form

- **GIVEN** the user sees the hero section
- **THEN** a full-viewport-height hero with a background image is displayed
- **AND** the heading "Rent a car is within your finger tips." is visible
- **AND** a car type selector dropdown is shown with options
- **WHEN** the user selects a car type from the dropdown
- **THEN** the selection is updated without page reload

#### Scenario: How It Works section shows 3 steps

- **GIVEN** the user scrolls to the "How It Works" section
- **THEN** the heading "How it works?" and subtitle "Easy steps to get you started" are displayed
- **AND** 3 steps are shown in a horizontal row
- **AND** step 1 is "Select a car" with number 01
- **AND** step 2 is "Fill up form" with number 02
- **AND** step 3 is "Payment" with number 03
- **AND** each step has a blue number circle, title, and description text

#### Scenario: Promo section displays with video play button

- **GIVEN** the user scrolls to the promo section
- **THEN** a heading "You can easily avail our promo for renting a car." is displayed
- **AND** a descriptive paragraph is shown below the heading
- **AND** a "Meet them now" primary button is visible
- **AND** a video play button overlay is shown on a promotional image

#### Scenario: Car Listings section shows 6 car cards

- **GIVEN** the user scrolls to the car listings section
- **THEN** the heading "Car Listings" is displayed with a subtitle
- **AND** 6 car listing cards are rendered
- **AND** each card shows a car image, car name, price "$389.00/day"
- **AND** each card shows 3 features: Luggage, Doors, Passenger with values
- **AND** each card has a description paragraph and a "Rent Now" button
- **AND** the section has a light gray background

#### Scenario: Features section displays 6 feature cards

- **GIVEN** the user scrolls to the features section
- **THEN** the heading "Features" is displayed with a subtitle
- **AND** 6 feature cards are shown in a 3-column grid
- **AND** each card has a circular blue icon, title, description, and "Learn more" link

#### Scenario: Testimonials section shows 3 cards

- **GIVEN** the user scrolls to the testimonials section
- **THEN** the heading "Testimonials" is displayed with a subtitle
- **AND** 3 testimonial cards are shown
- **AND** each card shows a quote, author name, and role
- **AND** the section has a light background

#### Scenario: CTA banner encourages action

- **GIVEN** the user scrolls to the call-to-action section
- **THEN** a full-width section with blue background is displayed
- **AND** the heading "What are you waiting for?" is shown
- **AND** a subtitle paragraph is displayed
- **AND** a "Rent a car now" white button is visible

#### Scenario: Footer renders with columns and attribution

- **GIVEN** the user scrolls to the footer
- **THEN** a 4-column footer layout is displayed
- **AND** social media icons (Facebook, Instagram, Twitter, LinkedIn) are shown
- **AND** Quick Links, Resources, and Support sections are present
- **AND** the footer contains a link to "Component Dock" (https://www.componentdock.com/)

## Verification checklist

- [ ] Navbar: sticky, white bg, logo, mobile responsive
- [ ] Hero: full viewport, background image, heading, dropdown selector, no overflow
- [ ] How It Works: 3 numbered steps, blue circle numbers, horizontal layout
- [ ] Promo section: heading, description, CTA button, play button image
- [ ] Car Listings: 6 cards, image + name + price + features + Rent Now button, light bg
- [ ] Features: 6 cards, icon + title + description + Learn more link, 3-col grid
- [ ] Testimonials: 3 cards, quote + name + role, light bg
- [ ] CTA: full-width blue bg, heading, subtitle, white button
- [ ] Footer: 4 columns, social icons, Component Dock link
- [ ] All sections match original structure order 1:1
- [ ] Brand color `#0779e4` used consistently for primary actions
- [ ] Font Roboto applied via Google Fonts
- [ ] Placeholder images use `https://picsum.photos/seed/autorent-<n>/<w>/<h>`
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
