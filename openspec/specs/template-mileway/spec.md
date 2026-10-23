# Template: Mileway (Car Rental)
<!-- prep-status: shipped-as=drivego -->
> **SHIPPED-UNDER** — the ColorLib `carrentals` design this prep describes already
> ships as `apps/drivego` (<https://drivego.free.componentdock.com>).
> Do not scaffold `apps/mileway`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-drivego/spec.md`.

## Purpose

Recreation of ColorLib "Carrentals" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page car rental site.

- **ColorLib source:** `carrentals`
- **Preview URL:** https://preview.colorlib.com/theme/carrentals/
- **Source screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carrentals-free-template.jpg

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and screenshot analysis.

| Token                | Value                                                | Notes                                                                              |
| -------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Primary blue         | `#0779e4`                                            | Buttons, step numbers, accents, links. Bootstrap `text-primary` fallback `#007bff` |
| Dark text            | `#000` / `#212529`                                   | Headings, body text                                                                |
| Secondary text       | `#364d59` / `#888` / `#999`                          | Subheadings, captions                                                              |
| Light background     | `#f8f9fa` / `#f7f7f7`                                | Alternating section backgrounds (`.bg-light`)                                      |
| White                | `#fff`                                               | Card backgrounds, hero search bar, text on dark                                    |
| CTA banner bg        | `#0779e4` (`.bg-primary`)                            | "What are you waiting for?" banner                                                 |
| Dark footer bg       | `#111` / `#333`                                      | Footer area                                                                        |
| Font family          | `"Roboto", sans-serif`                               | Imported from Google Fonts                                                         |
| Section heading      | `font-weight: 700`, bold                             | `.section-heading strong`                                                          |
| Button border-radius | `4px`                                                | Standard Bootstrap `.btn`                                                          |
| Step number radius   | `50%`                                                | Circle number badges                                                               |
| Card radius          | `4px–7px`                                            | Listing cards                                                                      |
| Button padding       | `12px 25px` (`.btn-primary`), `8px 20px` (`.btn-md`) | Primary CTA and secondary                                                          |

## Sections (in order)

1. **Navbar** — Fixed/absolute top, logo ("Mileway"), right-aligned nav links (Home, Listings, Testimonials, About, Contact). Transparent over hero, solid on scroll.
2. **Hero** — Full-width background image (car keys / car photo). Overlay text: "Rent a car is within your fingertips." Search bar with inputs: Select Type (dropdown), Pick up (date), Drop off (date), Search Now button (blue).
3. **How It Works** — 3-column steps: 01 Select a car, 02 Fill up form, 03 Payment. Blue step numbers, dark headings, gray body text. White background. Optional video play button below.
4. **Promo Banner** — "You can easily avail our promo for renting a car." paragraph with descriptive text. Light background.
5. **Car Listings** — 3-column grid of 6 car cards. Each card: car image (left), name (h3), price/day, specs (Luggage, Doors, Passenger), description, "Rent Now" button. Cars: Mitsubishi Pajero, Nissan Moco, Honda Fitta, Skoda Laura, Mazda LaPuta, Buick LaCrosse.
6. **Features** — "Features" heading with 6 feature cards (Lorem ipsum placeholder content). Light background.
7. **Testimonials** — 3-column testimonial cards. Each: blockquote, person image, name + role. Mike Fisher (Owner, Ford), Jean Stanley (Traveler), Katie Rose (Customer). White background.
8. **CTA Banner** — Blue (`#0779e4`) full-width banner. "What are you waiting for?" heading (white), subtext, "Rent a car now" white button.
9. **Footer** — Dark background. 4 columns: About Us (text + social icons), Quick Links, Resources, Support. Copyright bar at bottom.

## Requirements

### Navbar

#### Scenario: Navbar displays logo and navigation links

- **GIVEN** the user loads the Mileway page
- **THEN** a "Mileway" logo text is visible in the top-left
- **AND** navigation links "Home", "Listings", "Testimonials", "About", "Contact" are visible

#### Scenario: Navbar becomes solid on scroll

- **GIVEN** the user has scrolled past the hero section
- **THEN** the navbar background becomes solid white

### Hero

#### Scenario: Hero shows headline and search bar

- **GIVEN** the user loads the Mileway page
- **THEN** a hero headline "Rent a car" is visible
- **AND** a search bar with "Select Type", "Pick up", "Drop off" inputs is shown
- **AND** a "Search Now" button is visible

#### Scenario: Search bar has three input fields

- **GIVEN** the user views the hero section
- **THEN** a car type selector is present
- **AND** a pick-up date picker is present
- **AND** a drop-off date picker is present

### How It Works

#### Scenario: Three-step process is displayed

- **GIVEN** the user scrolls to the "How it works" section
- **THEN** step "01" with title "Select a car" is visible
- **AND** step "02" with title "Fill up form" is visible
- **AND** step "03" with title "Payment" is visible

### Car Listings

#### Scenario: Car listing grid shows 6 vehicles

- **GIVEN** the user scrolls to the "Car Listings" section
- **THEN** 6 car cards are displayed in a grid
- **AND** each card shows a car name, price per day, and specs (Luggage, Doors, Passenger)
- **AND** each card has a "Rent Now" button

#### Scenario: Car cards show pricing and features

- **GIVEN** a car card is rendered
- **THEN** it displays a price formatted as "$XXX.XX/day"
- **AND** it shows Luggage, Doors, and Passenger counts

### Testimonials

#### Scenario: Three testimonials are displayed

- **GIVEN** the user scrolls to the "Testimonials" section
- **THEN** 3 testimonial cards are shown
- **AND** each card has a blockquote, person name, role, and avatar image

### CTA Banner

#### Scenario: CTA banner shows call to action

- **GIVEN** the user scrolls to the blue CTA banner
- **THEN** the heading "What are you waiting for?" is visible
- **AND** a "Rent a car now" button is displayed

### Footer

#### Scenario: Footer has four columns and social links

- **GIVEN** the user scrolls to the footer
- **THEN** "About Us", "Quick Links", "Resources", "Support" headings are visible
- **AND** social media icons (Facebook, Instagram, Twitter, LinkedIn) are present
- **AND** a "Component Dock" attribution link is in the footer

## Verification checklist

- [ ] Spec covers all 9 sections in correct order
- [ ] Design tokens match the original CSS (primary `#0779e4`, Roboto font, `4px` radius)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Car listing data (names, prices, specs) matches the original
- [ ] Search bar has 3 inputs + button
- [ ] Hero uses placeholder image from picsum (not original asset)
- [ ] 3 testimonial cards with name, role, avatar
- [ ] CTA banner uses blue background with white text
- [ ] Footer has 4 columns + social icons
- [ ] All `npm run spec:validate` checks pass
