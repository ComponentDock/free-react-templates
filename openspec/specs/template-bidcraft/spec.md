# Template: Bidcraft (Auction Marketplace)

## Purpose

Bidcraft is a single-page auction marketplace landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Auction" free template design
(source: https://colorlib.com/wp/template/auction/), built under a
DIFFERENT name (Bidcraft) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Live preview: https://preview.colorlib.com/theme/auction/

Design tokens extracted from the ColorLib preview CSS (css/style.css):

- Font: Mulish (Google Fonts, replaces the original "Muli")
- Brand color: #f37121 (orange) — buttons, heading accents, dropdown borders
- Body text: #999999
- Headings: #000000 (black)
- Button style: square corners (no radius), orange primary
- Section backgrounds: white, hero with background image + dark overlay
- Navbar: dark overlay on hero, white text

## Requirements

### Requirement: Navbar with navigation links and brand

The template SHALL display a fixed navigation bar with the "Bidcraft" brand
name and links to Home, Buy, Sell, Services (with dropdown), Blog, About,
and Contact sections. A "Sign In / Register" link SHALL be visible.

#### Scenario: Brand and links render

- **WHEN** the page loads
- **THEN** the navbar displays "Bidcraft" brand text
- **AND** navigation links for Home, Buy, Sell, Services, Blog, About, Contact are present
- **AND** a "Sign In / Register" link is visible

#### Scenario: Services dropdown

- **WHEN** the user hovers over the Services link
- **THEN** a dropdown appears with Sell Items, Buy Items, and Submit a Bid links

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu button
- **THEN** a mobile navigation panel opens with all nav links

### Requirement: Hero section with CTA

The template SHALL display a full-width hero section with a background image,
dark overlay, heading "The Best Place to Buy and Sell", descriptive subtext,
and a "Register" call-to-action button.

#### Scenario: Hero renders

- **WHEN** the hero section is visible
- **THEN** the heading "The Best Place to Buy and Sell" is displayed
- **AND** a "Register" button is present

### Requirement: Auction grid with product cards

The template SHALL display 8 product auction cards in a responsive grid.
Each card SHALL show a price badge, product image, title, category, bid
count, and a "Submit a Bid" button.

#### Scenario: Grid displays all items

- **WHEN** the auctions section renders
- **THEN** 8 product cards are displayed
- **AND** each card shows a price, image, title, category, and bid count

#### Scenario: Submit a Bid buttons

- **WHEN** the user views the auction grid
- **THEN** each card has a "Submit a Bid" button

### Requirement: How It Works steps

The template SHALL display a "How It Works" section with 4 steps: Register,
Buy or Bid, Submit a Bid, and Win. Each step SHALL have an icon, title,
and description.

#### Scenario: Steps render

- **WHEN** the how-it-works section is visible
- **THEN** 4 step items are displayed with titles Register, Buy or Bid,
  Submit a Bid, and Win

### Requirement: About Us split section

The template SHALL display an About Us section with an image on the left
and feature items (Fast Support, 24/7 Support) on the right.

#### Scenario: About features

- **WHEN** the about section renders
- **THEN** "Fast Support" and "24/7 Support" feature items are listed

### Requirement: Testimonials section

The template SHALL display a testimonials section with a background image
overlay, heading "Happy Clients", and at least one testimonial card with
a photo, name, role, and quote.

#### Scenario: Testimonial cards

- **WHEN** the testimonials section renders
- **THEN** the heading "Happy Clients" is visible
- **AND** testimonial cards show names, roles, and quotes

### Requirement: Call to action section

The template SHALL display a CTA section with the text "Create an account
and start Buy, Bid or Sell Now!" and a "Register" button.

#### Scenario: CTA renders

- **WHEN** the CTA section is visible
- **THEN** the CTA text and Register button are displayed

### Requirement: Footer with Component Dock link

The template SHALL display a footer with 4 columns (brand, Solutions,
Services, Contact) and a copyright line. The footer SHALL link to
https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer structure

- **WHEN** the footer renders
- **THEN** it contains Solutions, Services, and Contact column headings
- **AND** a copyright line with a "Component Dock" link pointing to
  https://www.componentdock.com/ is present
