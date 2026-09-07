# Template: Satoshi (Cryptocurrency Landing)

## Purpose

Recreation of ColorLib "Bitcoin" — a cryptocurrency landing page template featuring a hero with live price display, currency converter, services, about section, features, statistics, pricing cards, blog, and newsletter footer. Source: https://colorlib.com/wp/template/bitcoin/. Preview URL: https://preview.colorlib.com/theme/bitcoin/. Source slug: `bitcoin`.

**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript. Single-page landing with multiple sections, pricing cards, and newsletter signup.

## Design Tokens (from reference CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family | `'Poppins', sans-serif` | Google Fonts, body |
| Primary brand color | `#f78f3d` (orange) | `.primary-btn`, links, accents |
| Selection color | `#f78f3d` | `::selection` |
| Button gradient | `linear-gradient(0deg, #f3c400, #f88845)` | `.primary-btn` background-image |
| Banner overlay | `rgba(4, 9, 30, 0.85)` | `.banner-area .overlay-bg` |
| About section bg | `#222` (dark charcoal) | `.aboutus-area` |
| Footer bg | `#04091e` (dark navy) | `.footer-area` |
| Stat area bg | `#f9f9ff` (light off-white) | `.stat-area` |
| Body text color | `#777` (gray) | `body` |
| Heading color | `#222` (near-black) | `h1–h6` |
| Body background | `#fff` (white) | `body` |
| Section gap | `120px 0` | `.section-gap` |
| Primary button radius | `25px` | `.primary-btn` |
| Banner button radius | `3px` | `.banner-area .primary-btn` |
| Heading font weight | `600` | `h1–h6` |
| Body font weight | `300` | `body` |
| Input border radius | `0` | `.convert-wrap .form-control` |
| Pricing card top bg | `#fbfcff` | `.single-price .price-top` |
| Pricing card bottom bg | `#f9f9ff` | `.single-price .price-bottom` |
| Footer newsletter input bg | `#1e2235` | `.navbar-form .form-control` |
| Footer link color | `#777777` | `.footer-menu li a` |
| Footer social bg | `#111111` | `.footer-social a` |

## Gherkin Requirements

### Feature: Cryptocurrency Landing Page

#### Scenario: Header Navigation
  Given the user loads the page
  Then a fixed header is displayed at the top
  And the header contains a logo and navigation links: Home, Convert, Feature, Price, Blog
  And the header is transparent initially and gains a dark background on scroll

#### Scenario: Banner Hero Section
  Given the user views the hero section
  Then a dark overlay covers the background image
  And the heading "Currently Purchase Rate" is displayed
  And a large price "$12,356" is shown
  And descriptive paragraph text is displayed
  And a "Buy Bitcoin" CTA button with gradient (yellow-to-orange) is present

#### Scenario: Currency Converter Section
  Given the user scrolls to the converter section
  Then the heading "The Currency Converter" is visible
  And a Bitcoin icon/image is displayed
  And input fields for currency values are shown (feet, pounds, inches)
  And a "Calculate Your BMI" button is present (placeholder CTA)

#### Scenario: Simple Services Section
  Given the user scrolls to the services section
  Then three service cards are displayed in a row
  And each card has an icon image, a title link, and a description paragraph
  And the card titles are "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", "Send & Receive Bitcoin"

#### Scenario: About Us Section
  Given the user scrolls to the about section
  Then the layout splits into two columns
  And the left column shows an image carousel
  And the right column shows an icon, heading "Exchange Bitcoin is not that tough Anymore", and descriptive text
  And the section has a dark charcoal (#222) background

#### Scenario: Features Section
  Given the user scrolls to the features section
  Then the heading "Why choose us during purchase bitcoin" is displayed
  And a subtitle "Who are in extremely love with eco friendly system." is shown
  And four feature cards are displayed in a 2x2 grid
  And each card has a Linearicons icon, title, and description
  And the feature titles are "Expert Technicians", "Professional Service", "Great Support", and one more

#### Scenario: Statistics Section
  Given the user scrolls to the statistics section
  Then a chart/image is displayed on the left
  And the heading "Ups and Downs of Bitcoin (Realtime)" is shown on the right
  And descriptive text and a "View Details" button are present
  And the section has a light off-white (#f9f9ff) background

#### Scenario: Call to Action Section
  Given the user scrolls to the CTA section
  Then the heading "Huge Transaction in last Week" is displayed
  And descriptive paragraph text is shown
  And a "Buy Bitcoin Now!" gradient button is present
  And the section has a gradient background

#### Scenario: Pricing Section
  Given the user scrolls to the pricing section
  Then the heading "Purchase whatever you want" is displayed
  And three pricing cards are shown in a row
  And each card has a top area with a coin name (Ripple $7999, Ethereum $9999, Bitcoin $5999)
  And each card has a description and a "Get Started" button
  And the middle card has a gradient "Get Started" button while the others have dark buttons

#### Scenario: Blog Section
  Given the user scrolls to the blog section
  Then the heading "Latest Posts from our Blog" is displayed
  And three blog cards are shown in a row
  And each card has a thumbnail image, title, description, and author info (avatar + name + date)

#### Scenario: Footer Section
  Given the user views the footer
  Then a dark navy (#04091e) footer is displayed
  And three columns are shown: "About Us" text, "Top Products" links, and "Newsletter" form
  And the newsletter has an email input and an arrow submit button
  And a footer bottom bar shows copyright text and social media icons (Facebook, Twitter, Dribbble, Behance)
  And the footer links to Component Dock

#### Scenario: Responsive Layout
  Given the page is viewed on mobile
  Then the navigation collapses to a hamburger menu
  And sections stack vertically
  And pricing cards stack vertically
  And the about section stacks to single column

## Verification Checklist

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
