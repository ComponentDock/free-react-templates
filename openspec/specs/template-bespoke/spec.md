# Bespoke — Fashion Boutique Landing Page

Recreation of ColorLib "Fashion" (https://colorlib.com/wp/template/fashion/)

## Purpose

Provide a free, production-ready fashion boutique landing page template with a hero carousel, product collections, about section, testimonials, blog grid, and a full footer. Built with React 19, Tailwind CSS 4, and TypeScript.

## Design Tokens

- **Brand color**: #FF6363 (coral/salmon red)
- **Primary font**: "Lato", sans-serif (body)
- **Heading font**: "Playfair Display", serif (headings)
- **Background**: white (#ffffff), light gray (#f8f9fa) for testimonials
- **Text**: black (#000000), gray for body copy
- **Buttons**: border-radius 30px (pill shape), coral #FF6363 background, #FF7777 hover
- **Footer**: dark background (#000000), white text

## Requirements

### Requirement: Navbar with responsive mobile menu

The template SHALL display a navbar with the "Bespoke" logo and navigation links (Home, Collections, About, Blog, Contact). On mobile, a burger menu toggles the nav links open/closed.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads
- **THEN** the logo "Bespoke" is visible
- **AND** nav links "Home", "Collections", "About", "Blog", "Contact" are visible

#### Scenario: Mobile menu opens and closes

- **WHEN** the user clicks the mobile menu button
- **THEN** the menu expands showing all nav links
- **AND** clicking a link closes the menu

### Requirement: Hero carousel with rotating headings

The hero section SHALL display a split layout with a fashion image on the left and a carousel on the right. The carousel rotates through three headings: "Bespoke Presents", "Creative Design", "Modern Fashion" with prev/next navigation.

#### Scenario: Initial slide displays correctly

- **WHEN** the page loads
- **THEN** the heading "Bespoke Presents" is visible
- **AND** a "Learn more" link is visible

#### Scenario: Next slide advances heading

- **WHEN** the user clicks the next arrow
- **THEN** the heading changes to "Creative Design"

#### Scenario: Previous slide wraps from first

- **WHEN** the user clicks the previous arrow from the first slide
- **THEN** the heading changes to "Modern Fashion" (last slide)

#### Scenario: Next wraps to first from last

- **WHEN** the user clicks next from the last slide
- **THEN** the heading returns to "Bespoke Presents"

### Requirement: Product collections carousel

The collections section SHALL display four products (Minimal $29, Collecta $21, Nine8 $38, Hut $49) with prev/next navigation.

#### Scenario: All products render with prices

- **WHEN** the page loads
- **THEN** the "Collections" heading is visible
- **AND** products "Minimal", "Collecta", "Nine8", "Hut" are visible with their prices

#### Scenario: Product carousel navigation

- **WHEN** the user clicks "Next" or "Prev"
- **THEN** the product display updates

### Requirement: About section with stacked images

The about section SHALL display "A Fashion Boutique" heading with stacked images and a "Learn more" link.

#### Scenario: About section renders

- **WHEN** the page loads
- **THEN** "A Fashion Boutique" heading is visible
- **AND** a "Learn more" link is visible

### Requirement: Testimonials section

The testimonials section SHALL display three customer testimonials with avatars, names, and quotes.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** "Testimonials" heading is visible
- **AND** "Adam Aderson", "Lukas Devlin", "Kayla Bryant" are visible

### Requirement: Blog posts grid

The blog section SHALL display four blog cards in a responsive grid with dates, titles, and excerpts.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** "Blog Posts" heading is visible
- **AND** four blog cards are rendered

### Requirement: Footer with Component Dock link

The footer SHALL display about text, social icons, navigation columns, and a copyright line linking to Component Dock.

#### Scenario: Footer renders with Component Dock

- **WHEN** the page loads
- **THEN** "Component Dock" link is visible in the footer
- **AND** social icons are visible
- **AND** navigation links are visible
