# Spec: Bazaar — Fashion E-Commerce Landing Template

## Purpose

Recreation of ColorLib "Store" (https://colorlib.com/wp/template/store/) as "Bazaar" — a fashion e-commerce landing page with product grids, promotional sections, testimonials, blog, and newsletter. Built with React 19, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Navbar with logo, navigation, and cart

The navbar displays the "Bazaar" logo, navigation links (Home, Shop with dropdown, Blog, About, Contact), and a cart icon with item count.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads
- **THEN** the navbar displays "Bazaar" logo and navigation links (Home, Shop, Blog, About, Contact)
- **AND** the cart link shows item count "[0]"

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the menu expands (aria-expanded becomes true)
- **AND** mobile navigation links are visible

#### Scenario: Shop dropdown

- **WHEN** the user hovers over the "Shop" link
- **THEN** a dropdown appears with Product Detail, Shipping Cart, and Checkout links

### Requirement: Hero slider with rotating slides

The hero section displays a full-width image slider with 3 slides, each with heading text, description, and "Shop Collection" CTA button. Slides auto-advance every 5 seconds.

#### Scenario: First slide renders on load

- **WHEN** the page loads
- **THEN** the hero shows the first slide with "Men's", "Jeans", "Collection" headings

#### Scenario: Next/prev navigation

- **WHEN** the user clicks the next slide button
- **THEN** the slider advances to the next slide
- **WHEN** the user clicks the previous slide button
- **THEN** the slider goes to the previous slide

### Requirement: Featured products mixed-size grid

A 2-column grid with 4 featured product cards in mixed sizes: one tall left card, two smaller right cards, and one full-width bottom card.

#### Scenario: Featured cards render with titles

- **WHEN** the featured section loads
- **THEN** 4 product cards display: "Fashion for men", "New Arrival Dress", "Sale 20% off", "Shoes for men"

### Requirement: New arrivals product grid

An 8-product grid with "New Arrival" heading, each product card showing image, "New" tag, hover action icons (cart, eye, heart, chart), name, and price.

#### Scenario: Products render with prices

- **WHEN** the new arrivals section loads
- **THEN** 8 product cards display with "$300.00" prices and "New" tags

#### Scenario: Hover reveals action icons

- **WHEN** the user hovers over a product card
- **THEN** cart, eye, heart, and chart action icons become visible

### Requirement: Promotional 45% off section

A parallax background section with "45% Off Sale" promo block, description text, and "Shop Now" / "Read more" buttons.

#### Scenario: Promo content renders

- **WHEN** the promo section loads
- **THEN** "45" and "Off" and "Sale" text are visible
- **AND** "Shop Now" and "Read more" buttons are present

### Requirement: Our Products grid

An 8-product grid with "Our Products" heading, mix of "New" and "Sale" tags, some with strikethrough original prices.

#### Scenario: Products with sale prices

- **WHEN** the products section loads
- **THEN** products display with Sale and New tags
- **AND** sale products show both current and original prices

### Requirement: Testimonials section

Three customer testimonials with circular avatars, names, locations, and quotes.

#### Scenario: Testimonials render

- **WHEN** the testimonials section loads
- **THEN** 3 testimonials display with names (Alysha Myers, James Fisher, Jacob Webb) and quotes

### Requirement: Blog section

Three blog cards with images, date badges, author names, titles, and excerpts.

#### Scenario: Blog cards render

- **WHEN** the blog section loads
- **THEN** 3 blog cards display with "Openning Branches" titles and "Noah Henderson" authors

### Requirement: Newsletter subscription

Dark background section with email input and "Subscribe" button. Form clears on submission.

#### Scenario: Email input and submit

- **WHEN** the user types an email and clicks Subscribe
- **THEN** the email input clears

### Requirement: Footer with columns and copyright

Five-column footer: About Bazaar with social icons, Customer Care, Information, News, Contact Information. Copyright section links to Component Dock.

#### Scenario: Footer columns render

- **WHEN** the footer loads
- **THEN** all 5 columns display with their headings
- **AND** social media links (Twitter, Facebook, LinkedIn, Dribbble) are present

#### Scenario: Copyright links to Component Dock

- **WHEN** the copyright section renders
- **THEN** it contains a link to https://www.componentdock.com/ with text "Component Dock"

### Requirement: Back to top button

A fixed-position back-to-top button appears in the bottom-right corner.

#### Scenario: Back to top renders

- **WHEN** the page loads
- **THEN** a "Back to top" link is visible
