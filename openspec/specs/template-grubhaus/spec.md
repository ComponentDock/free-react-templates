# Template: Grubhaus (Food / Restaurant)

## Purpose

Recreation of ColorLib's **Foodbar** template as a React 19 + Vite + Tailwind 4 + TypeScript site.
- **Source slug:** `foodbar`
- **Preview URL:** https://preview.colorlib.com/theme/foodbar/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/foodbar-free-template.jpg)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Food / Restaurant — single-page restaurant site with split hero, featured dishes grid, menu list, photo gallery, testimonial carousel, reservation form, and multi-column footer.

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

## Gherkin Requirements

### Feature: Grubhaus — Food / Restaurant Template

#### Scenario: Site header and navigation display correctly
- **Given** the user loads the page
- **Then** a sticky header with transparent background is visible at top
- **And** a logo (image or text) is on the left
- **And** navigation links include: Home, About, Menu, Book a Table, Pages (dropdown with Gallery, Elements), Blog (dropdown with Blog, Blog Details), Contact
- **And** a hamburger toggle icon is visible on small screens
- **And** the header background changes to dark navy (#04091e) on scroll (sticky/fixed)

#### Scenario: Hero banner section displays correctly
- **Given** the user views the hero section
- **Then** a full-height split layout is displayed (two halves)
- **And** the left side has a light gray (#f9f9ff) background with centered text
- **And** the heading reads "delicious cupcakes" (or equivalent) in Oswald font
- **And** a description paragraph is below the heading
- **And** a CTA button labeled "check our menu" (or equivalent) in red (#f42f2c) is displayed
- **And** the right side shows animated decorative circular shapes (planet-like rings)
- **And** a face/person image is overlaid on the right side

#### Scenario: Top Dishes section shows 3 featured dishes
- **Given** the user scrolls past the hero
- **Then** a section heading "Our Top Rated Dishes" is displayed
- **And** a red (#f42f2c) horizontal line (hr) is below the heading
- **And** 3 dish cards are displayed in a single row (3-column grid)
- **And** each card has: a dish image (top), dish name (h4), short description (p), and price (h5 in red)
- **And** dishes include: Bread Fruit Cheese Sandwich, Beef Cutlet with Spring Onion, Meat with sauce & Vegetables
- **And** all prices show "$5.59"

#### Scenario: Menu section displays two columns of menu items
- **Given** the user scrolls to the menu section
- **Then** the section has a light gray (#f9f9ff) background
- **And** a heading "Our favourite Menu" is displayed
- **And** a red horizontal line (hr) is below the heading
- **And** two columns of menu items are displayed (6 items each)
- **And** each item shows: dish name (h4), price (span, right-aligned), and ingredient description (p)
- **And** items include: Wonton with french fries, Roasted Red Potatoes with Rosemary, Bacon-Wrapped Shrimp with Garlic, Apple Smoked Chicken with White Sauce, Imported Oysters Grill (5 Pieces)

#### Scenario: Gallery section displays masonry grid
- **Given** the user scrolls to the gallery section
- **Then** a heading "foodbar galleries" is displayed
- **And** a red horizontal line is below the heading
- **And** a masonry-style grid of 7 gallery images is shown
- **And** the layout uses varying column widths: row 1 (col-7 + col-5), row 2 (col-4 + col-4 + col-4), row 3 (col-5 + col-7)
- **And** hovering over an image shows a dark overlay with a picture icon

#### Scenario: Testimonials carousel displays reviews
- **Given** the user scrolls to the testimonials section
- **Then** the section has a light gray (#f9f9ff) background
- **And** a carousel/slider of testimonial items is displayed
- **And** each item has: an author photo (left, col-4), and text content (right, col-8)
- **And** the text includes: author name (h4), author title/role (h5), and a quoted review (p, italic)
- **And** carousel navigation (prev/next) is available

#### Scenario: Reservation form displays correctly
- **Given** the user scrolls to the reservation section
- **Then** a heading "Make Reservation" is displayed
- **And** a red horizontal line is below the heading
- **And** a form with 5 fields is shown: name (text), email (email), phone (text), date & time (text), event select (dropdown)
- **And** the event dropdown includes options: Select event, Dhaka, Dilli, Newyork, Islamabad
- **And** a "Make Reservation" submit button in red (#f42f2c) is at the bottom
- **And** the form is centered (offset columns on desktop)

#### Scenario: Footer displays correctly
- **Given** the user scrolls to the footer
- **Then** the footer has a dark navy (#04091e) background
- **And** 5 footer columns are displayed: Top Products, Quick Links, Features, Resources, Newsletter
- **And** each column has a heading (Oswald font, white) and 4 link items
- **And** the Newsletter column has a description "Stay updated with our latest trends" and an email subscribe form with arrow submit button
- **And** a copyright line is at the bottom
- **And** social icons (Facebook, Twitter, Dribbble, Behance) are on the right in dark (#1e2235) circle buttons
- **And** social icon hover changes background to red (#f42f2c)
- **And** the copyright line includes a "Made with Component Dock" link

#### Scenario: Responsive behavior on mobile
- **Given** the user views the page on a mobile viewport (≤768px)
- **Then** the navbar collapses to a hamburger toggle
- **And** the hero section stacks vertically (text on top, shapes/image below)
- **And** the top dishes grid stacks to 1-2 columns
- **And** the menu columns stack vertically
- **And** the gallery grid stacks to single column
- **And** the testimonials stack (photo above text)
- **And** the reservation form fields go full-width
- **And** the footer columns stack vertically
- **And** a canvas/off-canvas side menu slides in from the right when hamburger is clicked

#### Scenario: Dark mode styling
- **Given** the user enables dark mode
- **Then** the page background becomes dark
- **And** text colors adjust to white/light
- **And** card backgrounds use dark tones
- **And** Brand Red (#f42f2c) accents remain visible on buttons and links

## Verification Checklist

- [ ] Spec validated (`npm run spec:validate` passes)
- [ ] All Gherkin scenarios are implementable
- [ ] Design tokens extracted and documented
- [ ] Preview DOM structure analyzed
- [ ] Screenshot reviewed for visual fidelity
- [ ] Section order matches original: Header → Hero (split) → Top Dishes → Menu → Gallery → Testimonials → Reservation → Footer
