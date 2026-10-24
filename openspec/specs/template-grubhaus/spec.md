# Template: Grubhaus (Food / Restaurant)

## Purpose

Recreation of ColorLib's **Foodbar** template as a React 19 + Vite + Tailwind 4 + TypeScript site.
- **Source slug:** `foodbar`
- **Preview URL:** https://preview.colorlib.com/theme/foodbar/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/foodbar-free-template.jpg)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Food / Restaurant — single-page restaurant site with split hero, featured dishes grid, menu list, photo gallery, testimonial carousel, reservation form, and multi-column footer.
- **Source design:** ColorLib "Foodbar" — https://colorlib.com/wp/template/foodbar/

## Design Tokens (extracted from preview stylesheet)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand Red | `#f42f2c` | Buttons, nav hover, accents, links, social icon hover |
| Dark Navy | `#04091e` | Footer background, sticky header background |
| Light Gray | `#f9f9ff` | Hero left bg, menu area, testimonials, off-canvas menu bg |
| Heading Dark | `#222222` | All headings (h1–h6) |
| Body Gray | `#777777` | Body text, secondary text |
| Border Light | `#eeeeee` | Dropdown borders, dividers |
| Social Icon BG | `#1e2235` | Social icon button backgrounds |
| White | `#ffffff` | Page background, text on dark, dropdown bg |

### Fonts
| Role | Family | Fallback |
|------|--------|----------|
| Headings | Oswald | serif, sans-serif |
| Body | Roboto | sans-serif |
| Surface (measured) | `#f8b600` | paints it ×19 — `background` on `.genric-btn.primary`; style.css (80,764 B, sha256 63560ea63033) · <https://preview.colorlib.com/theme/foodbar/> |

### Buttons & Shapes
- **Primary button (.main_btn):** padding 0 30px, background #f42f2c, color white, font-size 13px, uppercase Roboto, line-height ~40px. No border-radius (sharp/square corners).
- **Button hover:** transparent background, #f42f2c text, no box-shadow
- **Submit button (.submit_btn):** same red background, full-width inline
- **Border radius:** 0px (buttons), 3px (select dropdown), 5px (testimonial images), 50% (decorative planet circles)
- **Decorative planets:** nested border-radius 50% circles with rotating shape animations (CSS keyframes spin1/spin2)

### Section Backgrounds
- **Hero:** Split — left side #f9f9ff (light gray) with text, right side white with animated planet shapes + face image overlay
- **Top Dishes:** White background, 3-column grid of dish cards
- **Menu:** #f9f9ff (light gray), 2-column menu list with item names + prices + descriptions
- **Gallery:** White background, masonry grid (7 images, varying col-lg widths: 7+5, 4+4+4, 5+7), overlay + icon on hover
- **Testimonials:** #f9f9ff, owl-carousel with author photo + name + title + quote
- **Reservation:** White background, centered form (name, email, phone, date/time, event select, submit)
- **Footer:** Dark navy #04091e, 5-column layout (Top Products, Quick Links, Features, Resources, Newsletter), copyright line + social icons

## Requirements

### Feature: Grubhaus — Food / Restaurant Template

#### Scenario: Site header and navigation display correctly

- **GIVEN** the user loads the page
- **THEN** a sticky header with transparent background is visible at top
- **AND** a logo (image or text) is on the left
- **AND** navigation links include: Home, About, Menu, Book a Table, Pages (dropdown with Gallery, Elements), Blog (dropdown with Blog, Blog Details), Contact
- **AND** a hamburger toggle icon is visible on small screens
- **AND** the header background changes to dark navy (#04091e) on scroll (sticky/fixed)

#### Scenario: Hero banner section displays correctly

- **GIVEN** the user views the hero section
- **THEN** a full-height split layout is displayed (two halves)
- **AND** the left side has a light gray (#f9f9ff) background with centered text
- **AND** the heading reads "delicious cupcakes" (or equivalent) in Oswald font
- **AND** a description paragraph is below the heading
- **AND** a CTA button labeled "check our menu" (or equivalent) in red (#f42f2c) is displayed
- **AND** the right side shows animated decorative circular shapes (planet-like rings)
- **AND** a face/person image is overlaid on the right side

#### Scenario: Top Dishes section shows 3 featured dishes

- **GIVEN** the user scrolls past the hero
- **THEN** a section heading "Our Top Rated Dishes" is displayed
- **AND** a red (#f42f2c) horizontal line (hr) is below the heading
- **AND** 3 dish cards are displayed in a single row (3-column grid)
- **AND** each card has: a dish image (top), dish name (h4), short description (p), and price (h5 in red)
- **AND** dishes include: Bread Fruit Cheese Sandwich, Beef Cutlet with Spring Onion, Meat with sauce & Vegetables
- **AND** all prices show "$5.59"

#### Scenario: Menu section displays two columns of menu items

- **GIVEN** the user scrolls to the menu section
- **THEN** the section has a light gray (#f9f9ff) background
- **AND** a heading "Our favourite Menu" is displayed
- **AND** a red horizontal line (hr) is below the heading
- **AND** two columns of menu items are displayed (6 items each)
- **AND** each item shows: dish name (h4), price (span, right-aligned), and ingredient description (p)
- **AND** items include: Wonton with french fries, Roasted Red Potatoes with Rosemary, Bacon-Wrapped Shrimp with Garlic, Apple Smoked Chicken with White Sauce, Imported Oysters Grill (5 Pieces)

#### Scenario: Gallery section displays masonry grid

- **GIVEN** the user scrolls to the gallery section
- **THEN** a heading "foodbar galleries" is displayed
- **AND** a red horizontal line is below the heading
- **AND** a masonry-style grid of 7 gallery images is shown
- **AND** the layout uses varying column widths: row 1 (col-7 + col-5), row 2 (col-4 + col-4 + col-4), row 3 (col-5 + col-7)
- **AND** hovering over an image shows a dark overlay with a picture icon

#### Scenario: Testimonials carousel displays reviews

- **GIVEN** the user scrolls to the testimonials section
- **THEN** the section has a light gray (#f9f9ff) background
- **AND** a carousel/slider of testimonial items is displayed
- **AND** each item has: an author photo (left, col-4), and text content (right, col-8)
- **AND** the text includes: author name (h4), author title/role (h5), and a quoted review (p, italic)
- **AND** carousel navigation (prev/next) is available

#### Scenario: Reservation form displays correctly

- **GIVEN** the user scrolls to the reservation section
- **THEN** a heading "Make Reservation" is displayed
- **AND** a red horizontal line is below the heading
- **AND** a form with 5 fields is shown: name (text), email (email), phone (text), date & time (text), event select (dropdown)
- **AND** the event dropdown includes options: Select event, Dhaka, Dilli, Newyork, Islamabad
- **AND** a "Make Reservation" submit button in red (#f42f2c) is at the bottom
- **AND** the form is centered (offset columns on desktop)

#### Scenario: Footer displays correctly

- **GIVEN** the user scrolls to the footer
- **THEN** the footer has a dark navy (#04091e) background
- **AND** 5 footer columns are displayed: Top Products, Quick Links, Features, Resources, Newsletter
- **AND** each column has a heading (Oswald font, white) and 4 link items
- **AND** the Newsletter column has a description "Stay updated with our latest trends" and an email subscribe form with arrow submit button
- **AND** a copyright line is at the bottom
- **AND** social icons (Facebook, Twitter, Dribbble, Behance) are on the right in dark (#1e2235) circle buttons
- **AND** social icon hover changes background to red (#f42f2c)
- **AND** the copyright line includes a "Made with Component Dock" link

#### Scenario: Responsive behavior on mobile

- **GIVEN** the user views the page on a mobile viewport (≤768px)
- **THEN** the navbar collapses to a hamburger toggle
- **AND** the hero section stacks vertically (text on top, shapes/image below)
- **AND** the top dishes grid stacks to 1-2 columns
- **AND** the menu columns stack vertically
- **AND** the gallery grid stacks to single column
- **AND** the testimonials stack (photo above text)
- **AND** the reservation form fields go full-width
- **AND** the footer columns stack vertically
- **AND** a canvas/off-canvas side menu slides in from the right when hamburger is clicked

#### Scenario: Dark mode styling

- **GIVEN** the user enables dark mode
- **THEN** the page background becomes dark
- **AND** text colors adjust to white/light
- **AND** card backgrounds use dark tones
- **AND** Brand Red (#f42f2c) accents remain visible on buttons and links

## Verification checklist

- [ ] Spec validated (`npm run spec:validate` passes)
- [ ] All Gherkin scenarios are implementable
- [ ] Design tokens extracted and documented
- [ ] Preview DOM structure analyzed
- [ ] Screenshot reviewed for visual fidelity
- [ ] Section order matches original: Header → Hero (split) → Top Dishes → Menu → Gallery → Testimonials → Reservation → Footer
