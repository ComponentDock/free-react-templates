# Template: Skyline (Fine Dining Restaurant)

## Purpose

Skyline is a fine-dining restaurant landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Rooftop" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a restaurant page with gold accents on a light background:
a hero with "Rooftop" heading, a menu section with categories and prices,
an image gallery grid, a reservation booking form on dark background,
a chef's quotes testimonial, featured dish cards, a contact section with
map, and a multi-column footer. Skyline recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Rooftop" — free restaurant website template
  (source: https://colorlib.com/wp/template/rooftop/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/rooftop/`
  (HTTP 200, 31.8KB). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`rooftop-free-template-1.jpg`) confirms the
  visual design (light sections, gold accents, dark reservation area).
- **Design tokens from `css/main.css`:** brand gold `#ad9966`, body text
  `#777777`, headings `#000000`, section bg `#f9f9ff`, font headings
  "Playfair Display", font body "Roboto".

## Requirements

### Requirement: Navbar with navigation and booking CTA

The template SHALL render a sticky header with the logo "Skyline" and
navigation links (Home, Menu, Gallery, Contact) plus a "Book Table" CTA
button. On mobile, a hamburger menu toggles the navigation links.

#### Scenario: Desktop navigation renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the logo "Skyline" is visible
- **AND** navigation links for Home, Menu, Gallery, and Contact are visible
- **AND** a "Book Table" link pointing to #reservation is visible

#### Scenario: Mobile hamburger toggles navigation

- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation panel appears with all nav links
- **AND** the button aria-label changes to "Close menu"

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section with background and heading

The template SHALL render a full-height hero section with a dark overlay
background image, the heading "Skyline", a subtitle "Fine Dining Restaurant",
and a scroll-down arrow linking to the menu section.

#### Scenario: Hero renders heading and subtitle

- **WHEN** the hero section renders
- **THEN** a heading containing "Skyline" is visible
- **AND** the text "Fine Dining Restaurant" is visible

#### Scenario: Scroll-down arrow links to menu

- **WHEN** the hero section renders
- **THEN** a link labeled "Scroll to menu" points to #menu

### Requirement: Menu section with categories and prices

The template SHALL render a menu section with a section title, a "See Full
Menu" CTA button, and three menu categories (Appetizer, Main Courses,
Drinks & Juices) each listing items with prices.

#### Scenario: Menu categories and items render

- **WHEN** the menu section renders
- **THEN** the heading "Our Menu" is visible
- **AND** categories "Appetizer", "Main Courses", and "Drinks & Juices" are visible
- **AND** menu items with prices (e.g. "$12", "$28") are displayed

#### Scenario: See Full Menu button is present

- **WHEN** the menu section renders
- **THEN** a "See Full Menu" link is visible

### Requirement: Gallery section with image grid

The template SHALL render a gallery section with a heading and a grid of
four restaurant-themed images with alt text.

#### Scenario: Gallery renders images

- **WHEN** the gallery section renders
- **THEN** the heading "Gallery" is visible
- **AND** 4 images with descriptive alt text are displayed

### Requirement: Reservation form on dark background

The template SHALL render a reservation booking form with fields for event
name, date, time, guest count, phone, contact name, and special requests.
On submission, a confirmation message is displayed.

#### Scenario: All form fields render

- **WHEN** the reservation section renders
- **THEN** input fields for Event Name, Event Date, Event Time, Number of Guests,
  Phone Number, Contact Name, and Special Requests are visible

#### Scenario: Form submission shows confirmation

- **WHEN** the user fills all required fields and clicks "Book Now"
- **THEN** a confirmation message "Reservation Received!" appears

### Requirement: Chef's Quotes testimonial section

The template SHALL render a section with the heading "Chef's Quotes", a
testimonial quote paragraph, an attribution line, and a chef image.

#### Scenario: Chef's quotes content renders

- **WHEN** the chef's quotes section renders
- **THEN** a heading containing "Chef's" and "Quotes" is visible
- **AND** a quote paragraph is visible
- **AND** a chef attribution ("Marco Bellini") is visible
- **AND** a chef image is displayed

### Requirement: Featured dishes call-to-action

The template SHALL render a section with three featured dish cards, each
with an image, dish name, and description.

#### Scenario: Dish cards render

- **WHEN** the featured dishes section renders
- **THEN** the heading "Featured Dishes" is visible
- **AND** three dish cards (Main Course, Signature Pasta, Dessert Platter)
  with images and descriptions are visible

### Requirement: Contact section with address and map

The template SHALL render a contact section with a map placeholder, the
restaurant name, address, phone numbers, and email addresses.

#### Scenario: Contact details render

- **WHEN** the contact section renders
- **THEN** the address "432 Wyandotte Ave, Lakewood, OH 44107" is visible
- **AND** phone numbers are visible
- **AND** email addresses are visible

### Requirement: Footer with columns, newsletter, and Component Dock link

The template SHALL render a footer with four link columns (Top Products,
Quick Links, Features, Resources), a newsletter signup form with email
validation, and a copyright line containing a "Component Dock" link to
https://www.componentdock.com/.

#### Scenario: Footer columns render

- **WHEN** the footer renders
- **THEN** columns for Top Products, Quick Links, Features, Resources,
  and Newsletter are visible

#### Scenario: Newsletter validates email

- **WHEN** the user submits the newsletter form with an invalid email
- **THEN** an error message about a valid email being required appears

#### Scenario: Newsletter shows success

- **WHEN** the user submits the newsletter form with a valid email
- **THEN** a "Thanks for subscribing!" message appears

#### Scenario: Component Dock link present

- **WHEN** the footer renders
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is visible
