# Template: CoinPulse (Cryptocurrency Website)
<!-- prep-status: shipped-as=coinwave -->
> **SHIPPED-UNDER** — the ColorLib `bitcoin` design this prep describes already
> ships as `apps/coinwave` (<https://coinwave.free.componentdock.com>).
> Do not scaffold `apps/coinpulse`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-coinwave/spec.md`.

## Purpose

Recreation of ColorLib Bitcoin — a free cryptocurrency website template with a
dark-themed hero, currency converter, services, about section, pricing, blog,
and footer. The original is a Bootstrap-based single-page template for crypto
businesses.

- **Source template**: [Colorlib Bitcoin](https://colorlib.com/wp/template/bitcoin/)
- **New Name**: `coinpulse` (App directory: `apps/coinpulse`, Package: `@free-react-templates/coinpulse`)
- **Category**: Landing Page / Cryptocurrency
- **Preview URL**: `https://preview.colorlib.com/theme/bitcoin/` (reachable at prep time)
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/bitcoin-free-template.jpg`
- **Stack**: React 19, Vite, Tailwind CSS 4, TypeScript (strict)

## Design tokens

> Extracted from the live preview CSS (`css/main.css`) and HTML structure.

| Token                          | Value                                             | Notes                                                     |
| ------------------------------ | ------------------------------------------------- | --------------------------------------------------------- |
| Font family                    | `"Poppins", sans-serif`                           | Weights: 300, 400, 500, 600, 700                          |
| Accent / CTA                   | `#f78f3d` (orange)                                | Primary buttons, links, hover states, selection highlight |
| Primary gradient               | `linear-gradient(0deg, #f3c400 0%, #f88845 100%)` | Yellow-to-orange gradient for `.primary-btn`              |
| Button hover (pricing)         | `#ca9814`                                         | Darker gold for pricing section button hover              |
| Banner overlay                 | `rgba(4, 9, 30, 0.85)`                            | Dark navy-black overlay on hero background image          |
| Background (body)              | `#ffffff`                                         | White page background                                     |
| Background (about)             | `#222222`                                         | Dark section for about area                               |
| Background (stat area)         | `#f9f9ff`                                         | Very light blue-gray for stats section                    |
| Background (footer)            | `#04091e`                                         | Very dark navy for footer                                 |
| Background (convert wrap)      | `#f78f3d` (gradient)                              | Orange gradient background for converter section          |
| Background (pricing top)       | `#fbfcff`                                         | Near-white for pricing card headers                       |
| Background (pricing bottom)    | `#f9f9ff`                                         | Light blue-gray for pricing card bodies                   |
| Text primary (headings)        | `#222222`                                         | Dark text for headings                                    |
| Text body                      | `#777777`                                         | Gray for body paragraphs                                  |
| Text on dark                   | `#ffffff`                                         | White text on dark backgrounds                            |
| Border radius (primary button) | `25px`                                            | Pill-shaped buttons                                       |
| Border radius (banner button)  | `3px`                                             | Square-ish hero CTA button                                |
| Border (pricing card)          | `1px solid #eee`                                  | Light border for pricing cards                            |
| Section spacing                | `120px 0`                                         | `.section-gap` padding                                    |
| Transitions                    | `all 0.3s ease 0s`                                | Consistent hover transitions                              |
| Icons                          | Linearicons (`lnr-*`)                             | Used in service features section                          |

## Requirements

### Feature: CoinPulse — Cryptocurrency Landing Page

#### Scenario: Page loads with hero banner

- **GIVEN** the user opens the CoinPulse page
- **THEN** the navigation bar should be visible at the top with logo and menu items
- **AND** the hero section should display "Currently Purchase Rate" headline
- **AND** the hero should show a Bitcoin price value (e.g. "$12,356")
- **AND** a "Buy Bitcoin" CTA button should be visible in the hero

#### Scenario: Navigation menu items

- **GIVEN** the page is loaded
- **THEN** the navigation should contain links for "Home", "Convert", "Feature", "Price", "Blog"
- **AND** the "Home" link should be the active/current item
- **AND** clicking a nav link should scroll to the corresponding section

#### Scenario: Currency converter section

- **GIVEN** the user scrolls to the converter section
- **THEN** a "The Currency Converter" heading should be visible
- **AND** there should be 4 input fields for currency conversion
- **AND** a "Calculate" action button should be visible
- **AND** the section should have a gradient orange background

#### Scenario: Services section with three cards

- **GIVEN** the user scrolls to the simple services section
- **THEN** 3 service cards should be visible in a row
- **AND** the cards should be titled "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", "Send & Receive Bitcoin"
- **AND** each card should have an icon/image, title, and description text

#### Scenario: About section with split layout

- **GIVEN** the user scrolls to the about section
- **THEN** the left side should show an image carousel or slider
- **AND** the right side should show "Exchange Bitcoin is not that tough Anymore" heading
- **AND** a descriptive paragraph should be below the heading
- **AND** the section should have a dark background (#222)

#### Scenario: Feature services grid

- **GIVEN** the user scrolls to the feature/services section
- **THEN** a "Why choose us during purchase bitcoin" heading should be visible
- **AND** 6 service items should be displayed in a 3-column grid
- **AND** each item should have a Linearicons icon, title, and description
- **AND** the items should be: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews

#### Scenario: Bitcoin stats section

- **GIVEN** the user scrolls to the stats section
- **THEN** a chart image should be visible on the left side
- **AND** "Ups and Downs of Bitcoin (Realtime)" heading should be on the right
- **AND** a "View Details" CTA button should be visible
- **AND** the section should have a light background (#f9f9ff)

#### Scenario: Call-to-action banner

- **GIVEN** the user scrolls to the call-to-action section
- **THEN** a "Huge Transaction in last Week" heading should be visible
- **AND** a "Buy Bitcoin Now!" button should be visible
- **AND** the section should have a gradient orange background

#### Scenario: Pricing section with three cards

- **GIVEN** the user scrolls to the pricing section
- **THEN** a "Purchase whatever you want" heading should be visible
- **AND** 3 pricing cards should be displayed for Ripple, Ethereum, Bitcoin
- **AND** each card should show a price ($7999, $9999, $5999)
- **AND** each card should have a "Get Started" button
- **AND** the featured/active card should have an orange gradient background on hover

#### Scenario: Blog section with three posts

- **GIVEN** the user scrolls to the blog section
- **THEN** a "Latest Posts from our Blog" heading should be visible
- **AND** 3 blog post cards should be displayed
- **AND** each card should have a thumbnail image, title, excerpt, and author info
- **AND** the author info should show name and date

#### Scenario: Footer with links and social icons

- **GIVEN** the user scrolls to the footer
- **THEN** the footer should have a dark background (#04091e)
- **AND** it should contain widget columns with navigation links
- **AND** it should have social media icon links
- **AND** a "Component Dock" link should be present (per conventions)

#### Scenario: Responsive layout on mobile

- **GIVEN** the user opens the page on a viewport width less than 768px
- **THEN** the navigation should collapse to a hamburger menu
- **AND** all sections should stack vertically
- **AND** pricing cards should stack vertically
- **AND** service grids should adapt to single-column layout

#### Scenario: Smooth scroll navigation

- **GIVEN** the user clicks a navigation menu item
- **THEN** the page should smoothly scroll to the target section
- **AND** the clicked nav item should become active/highlighted

## Verification checklist

- [ ] Fixed navbar with logo and menu items (Home, Convert, Feature, Price, Blog)
- [ ] Hero section with dark overlay, price display, and "Buy Bitcoin" CTA
- [ ] Converter section with orange gradient background and input fields
- [ ] 3-column services section with icons and descriptions
- [ ] About section with split layout (image left, text right), dark background
- [ ] 6-item feature grid with Linearicons icons
- [ ] Stats section with chart image and "View Details" button
- [ ] Call-to-action banner with gradient background
- [ ] 3 pricing cards (Ripple $7999, Ethereum $9999, Bitcoin $5999)
- [ ] Blog section with 3 post cards and author info
- [ ] Dark footer with widgets, social links, and Component Dock link
- [ ] Poppins font loaded (weights 300-700)
- [ ] Orange accent (#f78f3d) used consistently for CTAs and highlights
- [ ] Primary button gradient (yellow-to-orange) with 25px border-radius
- [ ] Smooth hover transitions (0.3s ease) on all interactive elements
- [ ] Responsive: hamburger menu, stacking layouts on mobile
- [ ] No references to ColorLib in app code
- [ ] Uses `cn()` from `packages/ui` for class composition
- [ ] 100% test coverage (lines, functions, branches, statements)
