# Template: Ravida (Fine-Dining Restaurant)

## Purpose

Recreation of ColorLib **Buri** — a premium fine-dining restaurant template
with a moody, upscale aesthetic. The React 19 + Vite + Tailwind 4 + TypeScript
recreation preserves section order, design tokens, and layout fidelity while
using placeholder images and the Component Dock brand.

- **Source:** [ColorLib Buri](https://colorlib.com/wp/template/buri/)
- **Preview:** https://preview.colorlib.com/theme/buri/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/buri-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Requirements

### Requirement: Hero section with dark food photography background

Users SHALL see a full-width hero section with a dark food photography background, a Playfair Display serif headline "Modern restaurant in center of the city", a subtitle "Expensive but the best", and a "Book a Table" CTA button with warm taupe (#d6ad86) background.

#### Scenario: Hero displays with dark background and headline

- **GIVEN** the user is on the Ravida homepage
- **WHEN** the page loads
- **THEN** a full-width hero section is visible with a dark background image
- **AND** the headline "Modern restaurant in center of the city" is displayed in Playfair Display serif
- **AND** a subtitle describing the restaurant is shown above the headline
- **AND** a "Book a Table" CTA button with warm taupe background is visible

### Requirement: Navigation overlays the hero

Users SHALL see a navigation bar positioned over the hero section with the logo "Ravida" in white and navigation links (Home, About, Menu, Blog, Contact).

#### Scenario: Navigation bar is visible over the hero

- **GIVEN** the user is on the Ravida homepage
- **WHEN** the page loads
- **THEN** the navigation bar is positioned over the hero section
- **AND** the logo text "Ravida" is displayed in white
- **AND** navigation links include Home, About, Menu, Blog, Contact

#### Scenario: Navigation collapses to hamburger on mobile

- **GIVEN** the user views the Ravida homepage on a mobile device
- **WHEN** the screen width is less than 768px
- **THEN** the navigation collapses to a hamburger menu button
- **AND** clicking the hamburger toggles the mobile menu open/closed

### Requirement: About section with two-column layout

Users SHALL see an About section with a white background, negative margin overlap (-250px), two-column layout (text left, image right), heading "Delicious food provider since 1990", and a "Learn More" link.

#### Scenario: About section displays content

- **GIVEN** the user scrolls past the hero
- **WHEN** the About section is visible
- **THEN** an "About Us" label and "Delicious food provider since 1990" heading are displayed
- **AND** descriptive text paragraphs are shown
- **AND** a "Learn More" link is visible
- **AND** a restaurant image is displayed in the right column

### Requirement: Food menu section with 2-column grid

Users SHALL see a food menu section titled "Delicious Food Menu" with subtitle "Popular Menu" containing 6 food items in a 2-column grid, each with a thumbnail image, name, description, and price.

#### Scenario: Menu section displays food items

- **GIVEN** the user scrolls to the Menu section
- **WHEN** the section is visible
- **THEN** a "Popular Menu" subtitle and "Delicious Food Menu" heading are displayed
- **AND** 6 food items are shown: Pork Sandwich, Roasted Marrow, Summer Cooking, Easter Delight, Tiener Schnitze, Chicken Roast
- **AND** each item shows a thumbnail image, name, description, and price

### Requirement: Parallax section between menu and testimonials

Users SHALL see a full-width parallax section with a dark background image and a centered play button.

#### Scenario: Parallax section is displayed

- **GIVEN** the user scrolls past the food menu
- **WHEN** the parallax section is visible
- **THEN** a full-width section with a dark background image is displayed
- **AND** a centered play button is visible

### Requirement: Testimonials carousel

Users SHALL see a testimonials section titled "What they said" with subtitle "Testimonials" containing a carousel of review cards with quote, reviewer name, star rating, and navigation arrows.

#### Scenario: Testimonials section shows client reviews

- **GIVEN** the user scrolls to the Testimonials section
- **WHEN** the section is visible
- **THEN** a "Testimonials" subtitle and "What they said" heading are displayed
- **AND** a review card with a quote, reviewer name, and star rating is shown
- **AND** previous/next navigation buttons are available

### Requirement: Contact section with reservation info

Users SHALL see a contact section with a dark background image, "Contact Us" heading, address, operating hours, reservation phone number, quick links, and a newsletter subscription form.

#### Scenario: Contact section displays info

- **GIVEN** the user scrolls to the Contact section
- **WHEN** the section is visible
- **THEN** a "Contact Us" heading is displayed
- **AND** the address "240, Kings Street, New York City USA" is shown
- **AND** operating hours "Mon - Fri (9.00-19.00)" are displayed
- **AND** a reservation phone number is shown
- **AND** a newsletter subscription form with email input and subscribe button is available

### Requirement: Footer with Component Dock branding

Users SHALL see a dark footer (#1c1a18) with quick links, newsletter subscription, copyright line, and a "Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer displays with Component Dock link

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is visible
- **THEN** the footer has a dark background (#1c1a18)
- **AND** quick links are displayed
- **AND** a "Made with Component Dock" or "More templates at Component Dock" link points to https://www.componentdock.com/
- **AND** a copyright line is displayed

### Requirement: Responsive design

Users SHALL see the layout adapt to mobile viewports with stacked columns, reduced font sizes, and a hamburger navigation menu.

#### Scenario: Layout adapts to mobile

- **GIVEN** the user views Ravida on a screen width less than 768px
- **WHEN** the page renders
- **THEN** the navigation collapses to a hamburger menu
- **AND** the about section becomes single-column
- **AND** the food menu grid becomes single-column
- **AND** the contact section stacks its columns vertically
- **AND** the footer columns stack vertically

### Requirement: Design tokens match original

The template SHALL use Playfair Display for display headings and Montserrat for body text, with brand color #d6ad86 (warm taupe/gold), dark background #1c1a18, and body text #555555.

#### Scenario: Fonts and colors match original design

- **GIVEN** the user views any section of the Ravida template
- **WHEN** headings are displayed
- **THEN** they use Playfair Display serif font
- **AND** body text uses Montserrat sans-serif font
- **AND** CTA buttons use #d6ad86 background color
