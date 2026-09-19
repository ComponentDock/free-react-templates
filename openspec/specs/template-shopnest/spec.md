# Spec: ShopNest — Furniture E-Commerce Landing Template

## Purpose

Recreation of ColorLib "Amado" (https://colorlib.com/wp/template/amado/) as "ShopNest" — a furniture e-commerce landing page with sidebar navigation, product category grid with hover overlays, newsletter section, and footer. Built with React 19, Tailwind CSS 4, and TypeScript.

**Replication reference:**
- Source: ColorLib "Amado" — Furniture Ecommerce Template
- Preview: https://preview.colorlib.com/theme/amado/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/amado-free-template.jpg
- Preview fetched: Yes (15,228 bytes HTML, 44,292 bytes core CSS, 610 bytes custom CSS)
- CSS tokens extracted: Yes — brand colors, fonts, button styles, backgrounds

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| brand | `#fbb710` (golden yellow) | Buttons, active states, accents, hover highlights |
| dark | `#131212` (near-black) | Dark backgrounds, button hover, dark sections |
| body | `#242424` (dark gray) | Primary text, headings |
| secondary | `#6d6d6d` | Secondary/body text |
| light-bg | `#f5f7fa` (light gray-blue) | Section backgrounds, alternating rows |
| white | `#ffffff` | Card backgrounds, text on dark |
| red | `#ff0000` | Alert tags, sale badges |
| font-primary | Helvetica Neue Bold | Headings, nav links |
| font-secondary | Helvetica Neue Medium | Body text, descriptions |
| button-radius | `0` (sharp corners) | All buttons are square/rectangle, no rounding |
| button-hover | `#131212` (dark) | Button background on hover |

## Requirements

### Requirement: Sidebar navigation (left panel)

The left sidebar displays the ShopNest logo, vertical navigation links (Home, Shop, Product, Cart, Checkout), promotional buttons (%Discount%, New this week), utility links (Cart with count, Favourite, Search), and social media icons.

#### Scenario: Desktop sidebar renders all elements

- **WHEN** the page loads on desktop (>= 992px)
- **THEN** the sidebar is visible on the left side of the page
- **AND** the logo "ShopNest" is displayed at the top
- **AND** navigation links "Home", "Shop", "Product", "Cart", "Checkout" are rendered vertically
- **AND** two promotional buttons ("%Discount%" and "New this week") are displayed below the nav
- **AND** utility links "Cart (0)", "Favourite", "Search" are shown
- **AND** social icons (Pinterest, Instagram, Facebook, Twitter) are at the bottom

#### Scenario: Mobile nav toggles

- **WHEN** the page loads on mobile (< 768px)
- **THEN** the sidebar is hidden by default
- **AND** a hamburger menu toggle button is visible
- **WHEN** the user clicks the toggle
- **THEN** the sidebar slides in from the left
- **AND** the sidebar can be closed via a close button

### Requirement: Product categories grid

A responsive grid of 9 product category cards, each displaying a product image with a hover overlay showing price and product name. Cards are arranged in a masonry-like layout with varied heights.

#### Scenario: Category cards render on load

- **WHEN** the page loads
- **THEN** 9 product category cards are displayed in a grid
- **AND** each card shows a product image (placeholder via picsum)
- **AND** each card has a product name and starting price (e.g. "Modern Chair — From $180")

#### Scenario: Hover overlay on category cards

- **WHEN** the user hovers over a product category card
- **THEN** an overlay appears with a decorative line, price text, and product name
- **AND** the overlay uses the brand color (#fbb710) for the decorative line

#### Scenario: Category cards link to shop

- **WHEN** the user clicks a product category card
- **THEN** the card navigates to the shop page (link wrapping the card)

### Requirement: Newsletter subscription section

A newsletter section with a heading "Subscribe for a 25% Discount", description text, and an email subscription form with input and submit button.

#### Scenario: Newsletter renders with heading and form

- **WHEN** the newsletter section is visible
- **THEN** the heading "Subscribe for a 25% Discount" is displayed
- **AND** a description paragraph is shown
- **AND** an email input field with placeholder "Your E-mail" is present
- **AND** a "Subscribe" button is rendered

#### Scenario: Newsletter form submission

- **WHEN** the user enters an email and clicks "Subscribe"
- **THEN** the form triggers a submit action (prevent default, no backend)

### Requirement: Footer with logo, copyright, and navigation

The footer displays the ShopNest logo, copyright text, and a horizontal navigation menu with links matching the sidebar (Home, Shop, Product, Cart, Checkout). Footer links "Component Dock" branding replaces any external attribution.

#### Scenario: Footer renders all elements

- **WHEN** the footer is visible
- **THEN** the ShopNest logo is displayed on the left
- **AND** copyright text is shown below the logo
- **AND** a horizontal navigation bar on the right shows "Home", "Shop", "Product", "Cart", "Checkout"
- **AND** a "Component Dock" link is present in the footer

#### Scenario: Footer nav responsive collapse

- **WHEN** the viewport is narrow (< 992px)
- **THEN** the footer nav collapses behind a hamburger toggle
- **WHEN** the toggle is clicked
- **THEN** the footer nav links are revealed

### Requirement: Responsive layout

The layout adapts from sidebar+grid on desktop to stacked mobile layout.

#### Scenario: Desktop layout

- **WHEN** viewport >= 992px
- **THEN** sidebar is on the left (~250px wide)
- **AND** product grid fills the remaining right area

#### Scenario: Tablet/mobile layout

- **WHEN** viewport < 768px
- **THEN** sidebar is hidden (hamburger accessible)
- **AND** product grid is full-width single column
- **AND** newsletter stacks vertically

## Verification Checklist

- [ ] Sidebar renders logo, nav, buttons, utility links, social icons
- [ ] Mobile hamburger toggles sidebar visibility
- [ ] 9 product category cards render with images and names
- [ ] Hover overlays appear on category cards with price + name
- [ ] Newsletter heading, description, email input, subscribe button render
- [ ] Newsletter form handles submit (prevent default)
- [ ] Footer renders logo, copyright, nav, Component Dock link
- [ ] Footer nav collapses on mobile
- [ ] Responsive: sidebar hidden on mobile, grid full-width
- [ ] Brand color #fbb710 used for buttons and accents
- [ ] Sharp button corners (border-radius: 0)
- [ ] Font family approximates Helvetica Neue
- [ ] All images use picsum-seeded placeholders
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links Component Dock
