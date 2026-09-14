---
name: Expedio
description: Travel agency landing page template with hero, services, about, tour packages, testimonials, search form, blog, and footer
source: https://colorlib.com/wp/template/safario/
preview: https://preview.colorlib.com/theme/safario/
status: draft
---

## Purpose

Recreation of ColorLib "Safario" — a travel agency landing page with hero, services, about, tour packages, testimonials, search form, blog, and footer sections. The original uses Roboto/Roboto Condensed fonts with a purple (#6059f6) brand color, sharp-cornered buttons, and a clean travel-themed layout.

Design tokens extracted from the original CSS:

- Fonts: Roboto (body), Roboto Condensed (headings)
- Brand: #6059f6 (purple), #7676ff (hover), #d1cff4 (light), #ebebff (lighter bg)
- Text: #2a2a2a (headings), #888888 (body), #555555 (secondary)
- Backgrounds: #f8f8ff (gray sections), #fff (white sections)
- Buttons: #6059f6 bg, white text, sharp corners

## Requirements

### Requirement: Navbar renders with brand and navigation

The page SHALL display a navigation bar with the brand name "Expedio" and links for Home, About, Packages, Blog, Contact, plus a "Get Started" CTA button.

#### Scenario: Brand and nav links visible

- **WHEN** the user views the page
- **THEN** the navbar shows "Expedio" brand text
- **AND** navigation links for Home, About, Packages, Blog, Contact are present
- **AND** a "Get Started" button is visible

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu opens
- **AND** clicking close hides the mobile menu

### Requirement: Hero section displays travel headline

The hero SHALL show "Travel More To Discover Yourself" with description text, a CTA button, a hero image, and badge overlays.

#### Scenario: Hero content renders

- **WHEN** the user views the hero section
- **THEN** the headline "Travel More To Discover Yourself" is displayed
- **AND** a "Get Started" CTA link is present
- **AND** a hero image with badge overlays (500+ Destinations, Guided Tours) is shown

### Requirement: Services section shows three service cards

The services section SHALL display "Our Popular Services" heading with three service cards (Hotel Booking, Flight Booking, Destination Booking) each with an icon, title, and description.

#### Scenario: Three service cards render

- **WHEN** the user scrolls to the services section
- **THEN** "Our Popular Services" heading is visible
- **AND** three cards are displayed with titles "Hotel Booking", "Flight Booking", "Destination Booking"
- **AND** each card has a description text

### Requirement: About section shows exploration text

The about section SHALL display an image alongside text about exploration with a "Learn More" button.

#### Scenario: About content renders

- **WHEN** the user scrolls to the about section
- **THEN** the heading "Exploration is really the essence of the human spirit" is visible
- **AND** a "Learn More" button is present
- **AND** a travel exploration image is displayed

### Requirement: Tours section shows tour package cards

The tours section SHALL display "We offer worldwide tour plan recently" heading with tour cards showing destination names, durations, and prices.

#### Scenario: Tour cards render with pricing

- **WHEN** the user scrolls to the tours section
- **THEN** four tour cards are displayed (Paris Tour, Bali Escape, Tokyo Adventure, Santorini Retreat)
- **AND** each card shows its price ($65/day, $85/day, $95/day, $110/day)
- **AND** each card shows its duration

### Requirement: Testimonials section shows client quotes

The testimonials section SHALL display "Our client says" heading with testimonial cards containing avatar, name, role, and quote text.

#### Scenario: Testimonial cards render

- **WHEN** the user scrolls to the testimonials section
- **THEN** three testimonial cards are displayed
- **AND** each card shows the client name, role, and testimonial text
- **AND** each card has an avatar image

### Requirement: Search Package form has all fields

The search section SHALL display a search form with text input, category select, duration select, date input, price range select, and a "Search Package" submit button.

#### Scenario: Search form renders with all fields

- **WHEN** the user scrolls to the search section
- **THEN** a text input with placeholder "Where do you want to go?" is shown
- **AND** dropdowns for Category, Tour duration, and Price range are present
- **AND** a date picker input is available
- **AND** a "Search Package" submit button is present

#### Scenario: Form fields are interactive

- **WHEN** the user selects options in the form fields
- **THEN** the selected values are updated
- **AND** the form can be submitted without errors

### Requirement: Blog section shows three blog posts

The blog section SHALL display "From our Blog" heading with three blog post cards each having an image, title, date, comment count, and excerpt.

#### Scenario: Blog cards render

- **WHEN** the user scrolls to the blog section
- **THEN** three blog post cards are displayed
- **AND** each card shows a title, date, comment count, and description
- **AND** each card has a blog post image

### Requirement: Footer links to Component Dock

The footer SHALL contain an "About Agency" section, "Navigation Links", "Newsletter" with email form, "Follow Us" social section, and a copyright line with a link to componentdock.com.

#### Scenario: Footer renders all sections

- **WHEN** the user scrolls to the footer
- **THEN** "About Agency", "Navigation Links", "Newsletter", and "Follow Us" sections are visible
- **AND** a link to "https://www.componentdock.com/" with text "Component Dock" is present
- **AND** a copyright line with "Expedio" is shown
