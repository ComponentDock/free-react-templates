# Template: Grandeur (Luxury Hotel)

## Purpose

Recreation of ColorLib's **Radisson** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page site.

- **Source:** [colorlib.com/wp/template/radisson/](https://colorlib.com/wp/template/radisson/)
- **Preview:** [preview.colorlib.com/theme/radisson/](https://preview.colorlib.com/theme/radisson/)
- **Screenshot:** `![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/radisson-free-template.jpg)`
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **New name:** `grandeur` (apps/grandeur, @free-react-templates/grandeur)

## Design Tokens (extracted from preview CSS)

| Token            | Value                                         | Usage                       |
| ---------------- | --------------------------------------------- | --------------------------- |
| Brand blue       | `#4d8eff`                                     | Buttons, accents, icons     |
| Heading font     | `Playfair Display`, serif                     | Section headings, brand     |
| Body font        | `Roboto`, sans-serif                          | Body copy, nav, buttons     |
| Body text        | `#777777`                                     | Paragraph text              |
| Heading text     | `#222222`                                     | h1, h2, h3                  |
| Light section bg | `#f1f9ff`                                     | Testimonials, Blog sections |
| Button style     | bg `#4d8eff`, white text, radius `0` (square) | CTAs                        |

## Requirements

### Requirement: Navbar renders with brand name and navigation links

The navbar shall display the brand name "Grandeur" with navigation links: Home, About, Gallery, Pages (dropdown), Blog (dropdown), Contact. A top bar shall show contact phone number and currency/language selects.

#### Scenario: Navbar renders all links

- **WHEN** the user visits Grandeur
- **THEN** the navbar shows links: Home, About, Gallery, Pages, Blog, Contact
- **AND** a top bar shows the phone contact and currency/language selects

#### Scenario: Mobile toggle opens and closes menu

- **WHEN** the user clicks the mobile toggle button
- **THEN** the mobile menu opens with all navigation links
- **AND** clicking the toggle again closes the menu

### Requirement: Hero section displays welcome heading with play button

The hero section shall show a full-width background image with an overlay, centered "Welcome to" subtitle, "Grandeur" heading, description paragraph, and a circular play video button.

#### Scenario: Hero renders content

- **WHEN** the user views the hero section
- **THEN** a "Welcome to" subtitle is displayed above the "Grandeur" heading
- **AND** a description paragraph about luxury hospitality is shown
- **AND** a play video button with accessible label is present

### Requirement: Booking form with date inputs and CTA

The booking form shall show 4 fields in a row: Check-in date, Check-out date, Total guests, and a "Check Availability" button with a coupon code link.

#### Scenario: Booking form renders all fields

- **WHEN** the user views the booking form
- **THEN** check-in and check-out date inputs are shown
- **AND** a total guests number input is shown
- **AND** a "Check Availability" submit button is present

#### Scenario: Booking form submits without error

- **WHEN** the user clicks "Check Availability"
- **THEN** the form submits without errors

### Requirement: About Us section with heading and video area

The about section shall display a centered subtitle, heading "About Us Our History Mission & Vision", description text, "Request Custom Price" button, and a video area with play overlay.

#### Scenario: About section renders

- **WHEN** the user views the about section
- **THEN** the heading reads "About Us Our History"
- **AND** a "Request Custom Price" button is shown
- **AND** a video area with play overlay is present

### Requirement: Rooms section with room cards and amenities

The rooms section shall display the heading "Our Rooms", a description, and 2 room cards. Each card shows a room image, price per night, room name, description, 6 amenity icons, and a "Book Now" button.

#### Scenario: Rooms renders two room cards

- **WHEN** the user views the rooms section
- **THEN** two room cards are displayed (Double Deluxe Room, Premium Suite)
- **AND** each shows a price per night ($250, $420)
- **AND** each has 6 amenity icons (Air Condition, Car Parking, Swimming Pool, Restaurant & Bar, Vehicle Rental, Complimentary Meal)
- **AND** each has a "Book Now" button

### Requirement: Testimonials section with star ratings

The testimonials section shall display 3 testimonial cards on a light blue background, each with an avatar, author name, 5-star rating, and quote text.

#### Scenario: Testimonials renders all cards

- **WHEN** the user views the testimonials section
- **THEN** 3 testimonial cards are displayed
- **AND** each has an avatar image, author name, 5 stars, and quote text

### Requirement: Blog posts section with 3-column grid

The blog posts section shall display the heading "Our Blog Posts", a description, and 3 blog cards on a light blue background. Each card shows an image, Travel category tag, date, comment count, title, and excerpt.

#### Scenario: Blog posts renders 3 cards

- **WHEN** the user views the blog posts section
- **THEN** 3 blog cards are displayed
- **AND** each has an image, Travel tag, date, comments count, title, and excerpt

### Requirement: Footer with 4 columns and Component Dock link

The footer shall display 4 columns: About, Quick Links (2 sublists), Newsletter (email input + subscribe), Instagram (image grid). The bottom bar shall show copyright, a link to Component Dock (https://www.componentdock.com/), and social icons.

#### Scenario: Footer renders all columns

- **WHEN** the user views the footer
- **THEN** 4 columns are shown: About, Quick Links, Newsletter, Instagram
- **AND** the Newsletter has an email input and subscribe button

#### Scenario: Footer contains Component Dock branding

- **WHEN** the user views the footer bottom bar
- **THEN** a link to https://www.componentdock.com/ is displayed with text "Component Dock"
- **AND** social icons for Facebook, Twitter, and Dribbble are shown

## Verification Checklist

- [x] Section order matches 1:1 with preview DOM
- [x] Brand blue `#4d8eff` used for buttons, accents
- [x] Playfair Display serif for headings, Roboto for body
- [x] Square-cornered buttons (radius 0)
- [x] Light blue sections (#f1f9ff) for Testimonials and Blog
- [x] Hero with parallax background + centered text + play button
- [x] Booking form with check-in/out dates + guests + CTA
- [x] About section with heading + description + CTA + video area
- [x] Rooms with 2 cards: price, name, amenities, Book Now
- [x] Testimonials with 3 cards, avatars, star ratings, quotes
- [x] Blog posts with 3 cards, category tags, dates
- [x] Footer with 4 columns + Component Dock link + social icons
- [x] No ColorLib references in app code (provenance in spec only)
- [x] Uses picsum.photos placeholder images
- [x] Uses lucide-react for icons
- [x] Uses Google Fonts (Playfair Display + Roboto) via index.html link
