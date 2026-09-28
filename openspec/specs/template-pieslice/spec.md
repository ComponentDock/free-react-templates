## Purpose

Pieslice is a pizza restaurant landing page template that recreates the ColorLib "Luigi's" design (https://colorlib.com/wp/template/luigis/) with a React 19 + Vite + Tailwind CSS 4 + TypeScript stack. It features a hero section, our story, best sellers grid, filterable menu, and a branded footer.

## Requirements

### Requirement: Navbar renders navigation and phone order

Users SHALL see a fixed navbar with the site logo, navigation links (Home, About, Menu, Best Sellers, Contact), and a phone order button.

#### Scenario: Desktop navbar displays all links

- **WHEN** the user loads the page on desktop
- **THEN** the navbar shows the logo "Pieslice"
- **AND** all five navigation links are visible
- **AND** the phone order button with number is visible

#### Scenario: Mobile hamburger toggle

- **WHEN** the user is on a mobile viewport
- **AND** clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking a nav link closes the menu

### Requirement: Hero section displays restaurant branding

Users SHALL see a full-width hero with a background image, subtitle, main heading, and a call-to-action button.

#### Scenario: Hero content renders correctly

- **WHEN** the user loads the page
- **THEN** the hero shows "Best in Town" subtitle
- **AND** shows "Pizza & Pasta" as the main heading
- **AND** shows a "See Today's Menu" button linking to #menu

### Requirement: Our Story section shows two-column text

Users SHALL see a two-column story section with a heading and descriptive paragraphs.

#### Scenario: Story content renders

- **WHEN** the user scrolls to the About section
- **THEN** the "Our Story" heading is visible
- **AND** two columns of text are displayed

### Requirement: Best Sellers shows product cards with badges

Users SHALL see an 8-card grid of best-selling items with names, prices, and order buttons. Some items SHALL have ribbon badges.

#### Scenario: Product cards render

- **WHEN** the user views the Best Sellers section
- **THEN** 8 product cards are displayed
- **AND** each card has a name, price, and "Order Now" button

#### Scenario: Ribbon badges display

- **WHEN** the Best Sellers section renders
- **THEN** OFFER, SPECIALITY, and PLUS SIZE badges are visible on their respective items

### Requirement: Our Menu provides category filtering

Users SHALL see a tabbed menu with category filters (All, Pizza, Pasta, Salads, Desserts) and a 2-column grid of menu items.

#### Scenario: All items visible by default

- **WHEN** the user loads the page
- **THEN** all 8 menu items are visible

#### Scenario: Tab filtering works

- **WHEN** the user clicks the "Pizza" tab
- **THEN** only pizza category items are shown
- **AND** items from other categories are hidden
- **WHEN** the user clicks the "All" tab
- **THEN** all 8 menu items are visible again

### Requirement: Footer shows contact info and Component Dock attribution

Users SHALL see a footer with address, phone, email, social media links, and a Component Dock attribution link.

#### Scenario: Contact information renders

- **WHEN** the user scrolls to the footer
- **THEN** the address, phone number, and email are displayed

#### Scenario: Component Dock link is present

- **WHEN** the footer renders
- **THEN** at least one link to componentdock.com is visible with "Component Dock" text
