# Spec: Merch (recreation of ColorLib Product)

## Purpose

Merch is a single-page e-commerce fashion store template in the
free-react-templates monorepo. It is an original React recreation of
the ColorLib free "Product" website template
(source: https://preview.colorlib.com/theme/product/), built under a
DIFFERENT name (Merch — evokes product/merchandise; single lowercase word,
no collision with apps/ or existing specs) per the monorepo naming mandate.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens

- Font: Muli (body, 400/700), Libre Baskerville (headings, 400/700) via Google Fonts
- Brand green (primary): #0fb78d — buttons, links, accents
- Brand green hover: #11ca9c
- Black secondary: #000000 — secondary buttons, nav icons, headings
- Body text: #333333
- Page background: #ffffff
- Light section bg: #f8f9fa
- Form border: #43434d
- Button: sharp corners (radius 0), uppercase, 11px, 700 weight
- Selection: black bg, white text

## Requirements

### Requirement: Navbar displays logo and navigation

The template SHALL display a sticky top navigation bar with the logo "Merch"
(with green dot accent), menu links (New, Men, Women, Accessories, Jewelry,
About, Contact), and action icons (search, user, cart).

#### Scenario: Desktop nav shows all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the logo "Merch." should be visible
- **AND** all 7 menu links should be present
- **AND** search, user, and cart icon buttons should be visible

#### Scenario: Mobile nav toggles

- **WHEN** the user clicks the hamburger menu icon on mobile
- **THEN** the mobile menu should open showing all navigation links
- **WHEN** the user clicks a link
- **THEN** the mobile menu should close

### Requirement: Hero section displays promotional content

The template SHALL display a full-width hero section with a background image,
overlay text, and a call-to-action button.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** a headline "The New Way To Display Product" should be visible
- **AND** a "Spring / Summer Collection" subtitle should appear
- **AND** a green "Explore now" CTA button should be present

### Requirement: Features bar shows three benefits

The template SHALL display a 3-column features section with icons and
descriptions for Worldwide Delivery, Secure Payments, and Simple Returns.

#### Scenario: Features render correctly

- **WHEN** the page loads
- **THEN** 3 feature items should appear in a row
- **AND** each should have an icon, heading, and description text

### Requirement: New Arrivals product grid

The template SHALL display a "New Arrivals" section with a 3-column grid
of 6 product cards, each showing an image, name, price, badge, and
add-to-cart button.

#### Scenario: Product cards render

- **WHEN** the page loads
- **THEN** a "New Arrivals" heading should appear
- **AND** 6 product cards should display in a grid
- **AND** each card should show an image, product name, and price
- **AND** some cards should have "new" or "sale" badges

#### Scenario: Product card interactions

- **WHEN** a user hovers over a product card
- **THEN** a heart/favorite icon should become visible

### Requirement: Deal of the Week with countdown

The template SHALL display a deal section with a product image on the left
and a countdown timer (days/hours/mins/secs) on the right.

#### Scenario: Deal section renders

- **WHEN** the page loads
- **THEN** a "Week Deal" label should appear
- **AND** a countdown timer should show days, hours, minutes, seconds
- **AND** a dark "Shop Now" button should be visible

#### Scenario: Countdown timer decrements

- **WHEN** time passes
- **THEN** the seconds value should decrement

### Requirement: Popular Items section

The template SHALL display a "Popular Items" section with a 3-column grid
of 6 product cards using the same card pattern.

#### Scenario: Popular items render

- **WHEN** the page loads
- **THEN** a "Popular Items" heading should appear
- **AND** 6 product cards should display

### Requirement: Newsletter signup form

The template SHALL display a newsletter section with an email input and
subscribe button.

#### Scenario: Newsletter form renders

- **WHEN** the page loads
- **THEN** an email input field should be present
- **AND** a "Subscribe" button should be visible

#### Scenario: Newsletter form clears on submit

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the email input should be cleared

### Requirement: Footer with Component Dock link

The template SHALL display a footer with Help, About, and Shop link columns,
a newsletter signup, and a copyright line linking to Component Dock.

#### Scenario: Footer columns render

- **WHEN** the page loads
- **THEN** Help, About, and Shop columns should be present
- **AND** a newsletter signup should be in the footer

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is visible
- **THEN** a link to https://www.componentdock.com/ should be present
- **AND** it should display as "More templates at Component Dock"
