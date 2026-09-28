# Template: Bites (Food Bar / Restaurant)

## Purpose

Recreation of ColorLib's **Foodbar** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source slug:** `foodbar`
- **Preview URL:** https://preview.colorlib.com/theme/foodbar/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/foodbar-free-template.jpg)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Restaurant / Food Bar — single-page restaurant site with hero banner, top dishes showcase, menu list, photo gallery, testimonials, reservation form, and footer.

## Design Tokens (extracted from preview stylesheet)

### Colors

| Token     | Hex       | Usage                           |
| --------- | --------- | ------------------------------- |
| Brand Red | `#f42f2c` | Buttons, accents, active states |
| Dark Red  | `#d42824` | Button hover states             |
| Dark      | `#222222` | Headings, body text             |
| Body Gray | `#777777` | Secondary text                  |
| Light BG  | `#f9f9ff` | Hero left panel, alt sections   |
| Navy      | `#04091e` | Footer background               |
| Border    | `#eeeeee` | Dividers, borders               |
| White     | `#ffffff` | Page background, cards          |

### Fonts

| Role     | Family | Fallback   |
| -------- | ------ | ---------- |
| Headings | Oswald | sans-serif |
| Body     | Roboto | sans-serif |

### Buttons & Shapes

- **Primary button:** border-radius 4px, white text on brand red (#f42f2c) background, hover darkens to #d42824
- **Hero:** full viewport height, split layout — left panel with light background (#f9f9ff), right side with decorative concentric circles
- **Section headings:** centered, Oswald font, bold, with small red underline bar
- **Gallery:** grid layout with hover overlay (dark tint + icon)
- **Footer:** dark navy (#04091e) background, 5-column layout, newsletter input with arrow button

## Requirements

### Requirement: Navbar visibility and navigation

The site SHALL display a fixed navigation bar with the brand name "Bites" and links to Home, About, Menu, Book a Table, and Contact.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the brand name "Bites"
- **AND** all five navigation links are visible and clickable

#### Scenario: Mobile navigation toggle

- **WHEN** the page loads on a mobile viewport
- **THEN** a hamburger menu button is visible
- **WHEN** the user taps the hamburger button
- **THEN** a mobile menu opens with all navigation links
- **WHEN** the user taps a link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero section content

The hero section SHALL display a heading "Delicious Cupcakes", a descriptive paragraph, a "Check Our Menu" CTA button linking to the menu section, and a decorative circular graphic area.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero section shows the heading "Delicious Cupcakes"
- **AND** a paragraph about the food bar
- **AND** a "Check Our Menu" button that links to #menu

### Requirement: Top Dishes showcase

The site SHALL display a "Our Top Rated Dishes" section with three dish cards, each showing an image, dish name, ingredients description, and price.

#### Scenario: Three dishes are displayed

- **WHEN** the page loads
- **THEN** the "Our Top Rated Dishes" section shows exactly 3 dish cards
- **AND** each card has an image, name, description, and price

### Requirement: Menu section

The site SHALL display a "Our Favourite Menu" section with menu items listed in two columns, each showing the item name, price, and ingredients.

#### Scenario: Menu items are listed

- **WHEN** the page loads
- **THEN** the "Our Favourite Menu" section shows 6 menu items
- **AND** each item displays a name, price, and ingredient list

### Requirement: Gallery section

The site SHALL display a "Foodbar Galleries" section with a grid of food images that show a hover overlay effect.

#### Scenario: Gallery grid renders images

- **WHEN** the page loads
- **THEN** the gallery section shows 6 images in a grid layout
- **AND** each image has descriptive alt text

### Requirement: Testimonials section

The site SHALL display a "What Our Guests Say" section with reviewer cards showing avatar, name, role, and quote.

#### Scenario: Testimonials are displayed

- **WHEN** the page loads
- **THEN** the testimonials section shows 3 reviewer cards
- **AND** each card shows a name, role, quote, and avatar image

### Requirement: Reservation form

The site SHALL display a "Make Reservation" section with a form containing name, email, phone, date/time, event type, and a submit button.

#### Scenario: Reservation form renders all fields

- **WHEN** the page loads
- **THEN** the reservation form shows inputs for name, email, phone, and date/time
- **AND** a dropdown for event type with options (Dinner, Lunch, Brunch, Private Event)
- **AND** a "Make Reservation" submit button

#### Scenario: Form submission shows confirmation

- **WHEN** the user fills all required fields and clicks submit
- **THEN** a confirmation message "Thank you" is displayed

### Requirement: Footer with Component Dock link

The footer SHALL display navigation columns, a newsletter signup, social icons, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders all sections

- **WHEN** the page loads
- **THEN** the footer shows columns for Top Products, Quick Links, Features, Resources, and Newsletter
- **AND** a newsletter email input with subscribe button
- **AND** social media icons (Facebook, Twitter, Dribbble, LinkedIn)
- **AND** a copyright line with a link to Component Dock

#### Scenario: Newsletter subscription

- **WHEN** the user enters an email and clicks the subscribe button
- **THEN** the email input is cleared
