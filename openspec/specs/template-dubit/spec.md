# Template: Dubit (Cryptocurrency / Bitcoin Landing Page)

## Purpose

Recreation of the ColorLib **Bitcoin** template — a cryptocurrency landing page
featuring a hero with live price display, currency converter, services, pricing
cards, and blog. This spec covers a React 19 + Vite + Tailwind 4 + TypeScript
implementation faithful to the original design.

- **Source slug:** `bitcoin`
- **ColorLib page:** https://colorlib.com/wp/template/bitcoin/
- **Live preview:** https://preview.colorlib.com/theme/bitcoin/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bitcoin-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/dubit`
- **Deploy target:** `dubit.free.componentdock.com`

## Visual design notes

The template is a **dark-themed cryptocurrency landing page** with a strong
orange/gold accent:

- **Hero** is fullscreen with a dark background image (Bitcoin coin, dark
  vignette `rgba(4,9,30,0.85)` overlay), centered white text showing a
  purchase rate headline ("$12,356"), description, and orange gradient CTA button.
- **Currency Converter** card overlaps the hero bottom (negative margin, z-index
  2). It has a golden-to-orange gradient background, a Bitcoin logo image, 4
  white input fields, and a CTA button.
- **Simple Services** section: 3-column icons with titles on white background.
- **About Us** area: dark background (`#222`) with an image carousel on the
  left and text heading on the right.
- **Service Area** (Features): 2×3 grid of service cards with icons
  (Expert Technicians, Professional Service, Great Support, Technical Skills,
  Highly Recommended, Positive Reviews).
- **Stat Area**: light purple-gray background (`#f9f9ff`), text content with
  CTA button ("View Details").
- **Call-to-Action**: golden-to-orange gradient banner with centered white text
  ("Huge Transaction in last Week") and CTA button.
- **Pricing Area**: 3 pricing cards (Ripple $7999, Ethereum $9999, Bitcoin
  $5999) with light bg headers, gradient orange bottom sections, and CTA buttons.
- **Blog Area**: 3-column blog cards with images and excerpts.
- **Footer**: very dark navy (`#04091e`), newsletter form, social icons,
  copyright.

## Design tokens

Extracted from the live preview CSS (`main.css`) at
`https://preview.colorlib.com/theme/bitcoin/css/main.css`:

### Colors

| Token            | Value     | Usage                                              |
| ---------------- | --------- | -------------------------------------------------- |
| primary          | `#f78f3d` | Brand orange — links, icons, hover states           |
| gradient-start   | `#f3c400` | Gradient start (golden yellow)                      |
| gradient-end     | `#f88845` | Gradient end (orange)                               |
| gradient         | `linear-gradient(0deg, #f3c400 0%, #f88845 100%)` | Primary button & converter card bg |
| banner-overlay   | `rgba(4,9,30,0.85)` | Hero banner dark navy overlay              |
| bg-dark          | `#222222` | About Us section background                         |
| bg-footer        | `#04091e` | Footer background (very dark navy)                  |
| bg-light         | `#f9f9ff` | Stat area background, input backgrounds             |
| bg-form          | `#1e2235` | Footer newsletter form input                        |
| text-heading     | `#222222` | Headings                                            |
| text-body        | `#777777` | Body text                                           |
| white            | `#fff`    | Hero text, button text                              |
| accent-highlight | `#f78f3d` | Selection highlight (`::selection`)                 |

### Typography

| Token     | Value                    | Usage                          |
| --------- | ------------------------ | ------------------------------ |
| font-body | `"Poppins", sans-serif`  | All text                       |
| weight-300 | 300                     | Body text (default)            |
| weight-400 | 400                     | Navigation links               |
| weight-500 | 500                     | Buttons, mid-weight            |
| weight-600 | 600                     | Headings (h1–h6)               |
| weight-700 | 700                     | Hero headline, bold text       |
| weight-900 | 900                     | Mobile nav, extra-bold          |

### Buttons

| Token          | Value    | Usage                               |
| -------------- | -------- | ----------------------------------- |
| border-radius  | 25px     | `.primary-btn` — pill-shaped        |
| banner-radius  | 3px      | `.banner-area .primary-btn` — squared |
| padding        | 0 30px / 0 60px | Horizontal padding (varies)  |
| line-height    | 42px     | Button height                       |
| text-transform | uppercase | Button text                        |
| hover-bg       | transparent | Hover state (border 1px solid #fff) |

### Layout

| Token                  | Value                      | Usage                          |
| ---------------------- | -------------------------- | ------------------------------ |
| section-gap            | 120px padding              | Most sections                  |
| converter-overlap      | -105px margin-top          | Converter card overlapping hero|
| footer-bottom-pad      | 6rem                       | Footer bottom margin           |

### Section backgrounds

| Section              | Background                              |
| -------------------- | --------------------------------------- |
| Hero/Banner          | `url(../img/header-bg.jpg)` + dark overlay |
| Convert Card         | Gradient (golden→orange)                |
| Simple Services      | White `#fff`                            |
| About Us             | Dark `#222`                             |
| Service Area (Features) | White `#fff`                        |
| Stat Area            | `#f9f9ff`                               |
| Call-to-Action       | Gradient (golden→orange)                |
| Pricing              | White cards with gradient bottoms       |
| Blog                 | White `#fff`                            |
| Footer               | `#04091e` (very dark navy)              |

## Requirements

### Feature: Hero Banner

#### Scenario: Hero displays purchase rate and CTA

- **GIVEN** I visit the homepage
- **THEN** I see the heading "Currently Purchase Rate"
- **AND** I see the headline "$12,356" (or a dynamic price)
- **AND** I see a "Buy Bitcoin" CTA button
- **AND** the hero has a dark background image with navy overlay

#### Scenario: Hero CTA button has gradient style

- **GIVEN** the hero section is visible
- **THEN** the "Buy Bitcoin" button has a gradient background (golden to orange)
- **AND** the button text is white and uppercase

### Feature: Currency Converter

#### Scenario: Converter card overlaps hero

- **GIVEN** I scroll to the converter section
- **THEN** I see "The Currency Converter" heading
- **AND** I see 4 input fields for conversion values
- **AND** I see a "Calculate" CTA button
- **AND** the card has a golden-to-orange gradient background

#### Scenario: Converter has Bitcoin logo

- **GIVEN** the converter card is visible
- **THEN** I see a Bitcoin logo/image element

### Feature: Simple Services

#### Scenario: Three services displayed in a row

- **GIVEN** I scroll to the services section
- **THEN** I see 3 service items in a horizontal layout
- **AND** each service has an icon and title
- **AND** the titles are "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", "Send & Receive Bitcoin"

### Feature: About Us

#### Scenario: About section has dark background with carousel

- **GIVEN** I scroll to the about section
- **THEN** I see the section has a dark (#222) background
- **AND** I see an image carousel on the left side
- **AND** I see a heading on the right side

### Feature: Service Features

#### Scenario: Six feature cards in a grid

- **GIVEN** I scroll to the feature section
- **THEN** I see the heading "Why choose us during purchase bitcoin"
- **AND** I see 6 feature cards in a 2×3 grid
- **AND** each card has an icon and title
- **AND** the titles are: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews

### Feature: Stats Section

#### Scenario: Stats section with CTA

- **GIVEN** I scroll to the stats section
- **THEN** I see the heading "Ups and Downs"
- **AND** I see descriptive text below the heading
- **AND** I see a "View Details" CTA button
- **AND** the section has a light (#f9f9ff) background

### Feature: Call-to-Action Banner

#### Scenario: CTA banner with gradient background

- **GIVEN** I scroll to the call-to-action section
- **THEN** I see the heading "Huge Transaction in last Week"
- **AND** I see a "Buy Bitcoin Now!" button
- **AND** the section has a golden-to-orange gradient background
- **AND** the text is white

### Feature: Pricing Cards

#### Scenario: Three pricing cards displayed

- **GIVEN** I scroll to the pricing section
- **THEN** I see 3 pricing cards side by side
- **AND** the cards are labeled "Ripple", "Ethereum", "Bitcoin"
- **AND** the prices are "$7999", "$9999", "$5999"
- **AND** each card has a "Get Started" CTA button
- **AND** the bottom portion of each card has the gradient background

### Feature: Blog Area

#### Scenario: Three blog posts displayed

- **GIVEN** I scroll to the blog section
- **THEN** I see the heading "Latest Posts from our Blog"
- **AND** I see 3 blog cards in a row
- **AND** each card has an image, title, and excerpt text

### Feature: Footer

#### Scenario: Footer with newsletter and social links

- **GIVEN** I scroll to the footer
- **THEN** I see a newsletter subscription form
- **AND** I see social media icons
- **AND** I see a copyright line
- **AND** the footer has a very dark navy (#04091e) background
- **AND** the footer contains a link to https://www.componentdock.com/

### Feature: Navigation

#### Scenario: Fixed header with navigation

- **GIVEN** I visit the homepage
- **THEN** I see a fixed navigation bar at the top
- **AND** it contains links: Home, Convert, Feature, Price, Blog, Pages
- **AND** the navigation is transparent over the hero
- **AND** the navigation becomes solid dark when scrolled

### Feature: Footer Component Dock Link

#### Scenario: Footer links to Component Dock

- **GIVEN** I view the footer
- **THEN** I see a link to https://www.componentdock.com/
- **AND** the link text references "Component Dock"

## Verification checklist

- [ ] Hero renders with dark background image and navy overlay
- [ ] Purchase rate headline and price displayed centered
- [ ] "Buy Bitcoin" CTA button has gradient style
- [ ] Currency converter card overlaps hero with gradient bg
- [ ] Converter has 4 input fields and CTA button
- [ ] Bitcoin logo displayed in converter section
- [ ] 3 simple services in horizontal row with icons
- [ ] About section has dark background, carousel, and heading
- [ ] 6 feature cards in 2×3 grid with icons and titles
- [ ] Stats section with light background and CTA
- [ ] CTA banner with gradient background and white text
- [ ] 3 pricing cards with correct labels and prices
- [ ] Blog area with 3 cards, images, titles, excerpts
- [ ] Footer with newsletter form, social icons, copyright
- [ ] Footer links to Component Dock
- [ ] Fixed navigation with correct links
- [ ] Navigation transitions from transparent to solid on scroll
- [ ] All text uses Poppins font family
- [ ] All buttons use gradient orange (golden→orange)
- [ ] Responsive layout works at mobile breakpoints
