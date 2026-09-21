# Template: VenuePoint (Restaurant / Dining)

## Purpose

Recreation of ColorLib's **Thevenue** restaurant template.

- Source: https://colorlib.com/wp/template/thevenue/
- Preview: https://preview.colorlib.com/theme/thevenue/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Requirements

### Requirement: Header displays navigation and contact

Users SHALL see a sticky header with the restaurant logo, navigation links (Home, About Us, Menu, Delivery, Blog, Contact), and a reservation phone number.

#### Scenario: Header renders on page load

- **WHEN** the user visits the page
- **THEN** the header shows the restaurant logo "The Venue"
- **AND** navigation links: Home, About Us, Menu, Delivery, Blog, Contact
- **AND** a reservation phone number "+34 586 778 8892"

#### Scenario: Mobile menu toggle

- **WHEN** the user is on a mobile viewport
- **THEN** a hamburger menu button appears
- **AND** clicking it opens a fullscreen navigation overlay
- **AND** clicking a link closes the overlay

### Requirement: Hero section displays parallax background

Users SHALL see a full-width parallax background with centered heading and description.

#### Scenario: Hero section renders

- **WHEN** the user scrolls to the hero section
- **THEN** it shows a full-width parallax background image
- **AND** the heading "An Extraordinary Experience"
- **AND** a description paragraph
- **AND** a scroll-down indicator

### Requirement: Intro section displays two images

Users SHALL see a subtitle, heading, description, and two-column image grid.

#### Scenario: Intro section renders

- **WHEN** the user scrolls to the intro section
- **THEN** it shows subtitle "Something new"
- **AND** heading "An Extraordinary Experience"
- **AND** a description paragraph
- **AND** a two-column image grid

### Requirement: Video section shows play button

Users SHALL see a parallax background with text and a play button.

#### Scenario: Video section renders

- **WHEN** the user scrolls to the video section
- **THEN** it shows a parallax background
- **AND** text "Food for the soul"
- **AND** a play button linking to a video

### Requirement: Signature dish section shows featured item

Users SHALL see a two-column layout with dish details and an order button.

#### Scenario: Signature dish section renders

- **WHEN** the user scrolls to the signature dish section
- **THEN** it shows subtitle "Something new"
- **AND** heading "Our Signature Dish"
- **AND** a 5-star rating
- **AND** dish name, price, ingredient list
- **AND** an "Order Now" button
- **AND** a dish image on the right

### Requirement: Menu section displays three categories

Users SHALL see a menu with three columns: Starters, Main, and Desserts.

#### Scenario: Menu section renders

- **WHEN** the user scrolls to the menu section
- **THEN** it shows "The Menu" title with 5 stars
- **AND** three columns: Starters, Main, Desserts
- **AND** each column contains 5 dishes with title, price, ingredients, and order link

### Requirement: Reservation form accepts party details

Users SHALL see a reservation form with date, time, and party size inputs.

#### Scenario: Reservation form renders

- **WHEN** the user scrolls to the reservations section
- **THEN** it shows a date picker input
- **AND** a time picker input
- **AND** a party size select (2-6 persons)
- **AND** a "Make a Reservation" submit button

### Requirement: Footer displays restaurant info and Component Dock link

Users SHALL see a footer with logo, about, contact, and a link to Component Dock.

#### Scenario: Footer renders

- **WHEN** the user scrolls to the footer
- **THEN** it shows the restaurant logo and subtitle
- **AND** a copyright notice
- **AND** an about paragraph
- **AND** contact details: address, phone, email
- **AND** a link to https://www.componentdock.com/

## Design Tokens

| Token          | Value                                   | Notes                            |
| -------------- | --------------------------------------- | -------------------------------- |
| Brand color    | `#b49383` (warm tan/brown)              | Primary accent, buttons, borders |
| Secondary      | `#c4ab9f` (muted rose-tan)              | Hover state, secondary accent    |
| Light accent   | `#ffa07f` (light salmon)                | Hover underline, highlights      |
| Text primary   | `#232323` (near-black)                  | Headings                         |
| Text secondary | `#636363` (dark gray)                   | Body copy                        |
| Text muted     | `#a5a5a5` (medium gray)                 | Subtle text                      |
| Background     | `#FFFFFF` (white)                       | Main sections                    |
| Alt background | `#F7F7F7` (off-white)                   | Menu section                     |
| Font heading   | Great Vibes (Google Fonts)              | Elegant script/display font      |
| Font body      | PT Sans Narrow (sans-serif)             | Clean, narrow sans-serif         |
| Button radius  | 7px                                     | Rounded pill shape               |
| Button style   | Outlined (2px border) → filled on hover | Brand color transition           |
