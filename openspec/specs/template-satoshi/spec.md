# Template: Satoshi (Cryptocurrency Landing)

## Purpose

Recreation of ColorLib "Bitcoin" — a cryptocurrency landing page template featuring a hero with live price display, currency converter, services, about section, features, statistics, pricing cards, blog, and newsletter footer. Preview URL: https://preview.colorlib.com/theme/bitcoin/. Source slug: `bitcoin`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Single-page landing with multiple sections, pricing cards, and newsletter signup.

## Design Tokens (from reference CSS)

| Token                      | Value                                     | Source                          |
| -------------------------- | ----------------------------------------- | ------------------------------- |
| Font family                | `'Poppins', sans-serif`                   | Google Fonts, body              |
| Primary brand color        | `#f78f3d` (orange)                        | `.primary-btn`, links, accents  |
| Selection color            | `#f78f3d`                                 | `::selection`                   |
| Button gradient            | `linear-gradient(0deg, #f3c400, #f88845)` | `.primary-btn` background-image |
| Banner overlay             | `rgba(4, 9, 30, 0.85)`                    | `.banner-area .overlay-bg`      |
| About section bg           | `#222` (dark charcoal)                    | `.aboutus-area`                 |
| Footer bg                  | `#04091e` (dark navy)                     | `.footer-area`                  |
| Stat area bg               | `#f9f9ff` (light off-white)               | `.stat-area`                    |
| Body text color            | `#777` (gray)                             | `body`                          |
| Heading color              | `#222` (near-black)                       | `h1–h6`                         |
| Body background            | `#fff` (white)                            | `body`                          |
| Section gap                | `120px 0`                                 | `.section-gap`                  |
| Primary button radius      | `25px`                                    | `.primary-btn`                  |
| Banner button radius       | `3px`                                     | `.banner-area .primary-btn`     |
| Heading font weight        | `600`                                     | `h1–h6`                         |
| Body font weight           | `300`                                     | `body`                          |
| Input border radius        | `0`                                       | `.convert-wrap .form-control`   |
| Pricing card top bg        | `#fbfcff`                                 | `.single-price .price-top`      |
| Pricing card bottom bg     | `#f9f9ff`                                 | `.single-price .price-bottom`   |
| Footer newsletter input bg | `#1e2235`                                 | `.navbar-form .form-control`    |
| Footer link color          | `#777777`                                 | `.footer-menu li a`             |
| Footer social bg           | `#111111`                                 | `.footer-social a`              |

## Requirements

### Feature: Cryptocurrency Landing Page

#### Scenario: Header Navigation

- **GIVEN** the user loads the page
- **THEN** a fixed header is displayed at the top
- **AND** the header contains a logo and navigation links: Home, Convert, Feature, Price, Blog
- **AND** the header is transparent initially and gains a dark background on scroll

#### Scenario: Banner Hero Section

- **GIVEN** the user views the hero section
- **THEN** a dark overlay covers the background image
- **AND** the heading "Currently Purchase Rate" is displayed
- **AND** a large price "$12,356" is shown
- **AND** descriptive paragraph text is displayed
- **AND** a "Buy Bitcoin" CTA button with gradient (yellow-to-orange) is present

#### Scenario: Currency Converter Section

- **GIVEN** the user scrolls to the converter section
- **THEN** the heading "The Currency Converter" is visible
- **AND** a Bitcoin icon/image is displayed
- **AND** input fields for currency values are shown (feet, pounds, inches)
- **AND** a "Calculate Your BMI" button is present (placeholder CTA)

#### Scenario: Simple Services Section

- **GIVEN** the user scrolls to the services section
- **THEN** three service cards are displayed in a row
- **AND** each card has an icon image, a title link, and a description paragraph
- **AND** the card titles are "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", "Send & Receive Bitcoin"

#### Scenario: About Us Section

- **GIVEN** the user scrolls to the about section
- **THEN** the layout splits into two columns
- **AND** the left column shows an image carousel
- **AND** the right column shows an icon, heading "Exchange Bitcoin is not that tough Anymore", and descriptive text
- **AND** the section has a dark charcoal (#222) background

#### Scenario: Features Section

- **GIVEN** the user scrolls to the features section
- **THEN** the heading "Why choose us during purchase bitcoin" is displayed
- **AND** a subtitle "Who are in extremely love with eco friendly system." is shown
- **AND** four feature cards are displayed in a 2x2 grid
- **AND** each card has a Linearicons icon, title, and description
- **AND** the feature titles are "Expert Technicians", "Professional Service", "Great Support", and one more

#### Scenario: Statistics Section

- **GIVEN** the user scrolls to the statistics section
- **THEN** a chart/image is displayed on the left
- **AND** the heading "Ups and Downs of Bitcoin (Realtime)" is shown on the right
- **AND** descriptive text and a "View Details" button are present
- **AND** the section has a light off-white (#f9f9ff) background

#### Scenario: Call to Action Section

- **GIVEN** the user scrolls to the CTA section
- **THEN** the heading "Huge Transaction in last Week" is displayed
- **AND** descriptive paragraph text is shown
- **AND** a "Buy Bitcoin Now!" gradient button is present
- **AND** the section has a gradient background

#### Scenario: Pricing Section

- **GIVEN** the user scrolls to the pricing section
- **THEN** the heading "Purchase whatever you want" is displayed
- **AND** three pricing cards are shown in a row
- **AND** each card has a top area with a coin name (Ripple $7999, Ethereum $9999, Bitcoin $5999)
- **AND** each card has a description and a "Get Started" button
- **AND** the middle card has a gradient "Get Started" button while the others have dark buttons

#### Scenario: Blog Section

- **GIVEN** the user scrolls to the blog section
- **THEN** the heading "Latest Posts from our Blog" is displayed
- **AND** three blog cards are shown in a row
- **AND** each card has a thumbnail image, title, description, and author info (avatar + name + date)

#### Scenario: Footer Section

- **GIVEN** the user views the footer
- **THEN** a dark navy (#04091e) footer is displayed
- **AND** three columns are shown: "About Us" text, "Top Products" links, and "Newsletter" form
- **AND** the newsletter has an email input and an arrow submit button
- **AND** a footer bottom bar shows copyright text and social media icons (Facebook, Twitter, Dribbble, Behance)
- **AND** the footer links to Component Dock

#### Scenario: Responsive Layout

- **GIVEN** the page is viewed on mobile
- **THEN** the navigation collapses to a hamburger menu
- **AND** sections stack vertically
- **AND** pricing cards stack vertically
- **AND** the about section stacks to single column

## Verification checklist

- [ ] Fixed header with logo and navigation links
- [ ] Hero section with dark overlay, price display, and "Buy Bitcoin" CTA
- [ ] Currency converter section with inputs and CTA button
- [ ] 3-column services cards with icons
- [ ] About Us split layout with carousel left, text right, dark bg
- [ ] 4-column features grid with Linearicons
- [ ] Statistics section with chart image and text
- [ ] Call-to-action gradient section
- [ ] 3 pricing cards with coin names and prices
- [ ] 3-column blog cards with author info
- [ ] Dark footer with newsletter form and social icons
- [ ] Footer links to Component Dock
- [ ] Brand colors: orange (#f78f3d), gradient (#f3c400→#f88845)
- [ ] Font: Poppins
- [ ] Button radius: 25px (primary), 3px (banner)
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
