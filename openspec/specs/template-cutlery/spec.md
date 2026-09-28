# Template: Cutlery (Restaurant)

## Purpose

Recreation of ColorLib "Meal" template.
- Source slug: `meal`
- Preview URL: https://preview.colorlib.com/theme/meal/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/meal-free-template.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview CSS)

| Token | Value |
|-------|-------|
| Body font | `"Open Sans", Arial, sans-serif` |
| Heading font | `"Playfair Display", serif` |
| Brand / accent | `#ff7a5c` (coral/salmon — form focus ring, loader spinner) |
| Body text | `gray` |
| Heading text | `#000` |
| Background | `#fff` (default), `#f8f9fa` / light gray sections |
| Border | `#cccccc` (form inputs) |
| Button style | Uppercase, letter-spacing 0.2em, 14px bold, 2px solid outline |
| Button primary | `btn-outline-primary` with `border: 2px solid #fff` |
| Logo | Single letter "M" with `border: 2px solid #000`, 30px |
| Header | Fixed top, transparent overlay on hero, white bg on scroll |
| Nav menu | Right-side slide-in panel (mobile), smooth anchor scroll |
| Section headings | 50px on desktop, 30px mobile |
| Form inputs | 2px border, focus: 2px solid `#ff7a5c` |
| Loader | Full-screen spinner with `#ff7a5c` stroke |

## Visual design notes (from screenshot + DOM analysis)

- **Hero**: Full-width parallax background image, centered "Welcome to Meal" heading (white, Playfair Display), "Reserve A Table" outline-white CTA button
- **Food grid**: Two-row image-text alternating layout (flex columns on mobile, side-by-side on desktop). Left image / right text, then reversed. Each card: category label (e.g. "Vegies"), dish name (Playfair), description, "Learn More" link arrow
- **About section**: Centered text on white bg, "The Restaurant" heading
- **Decorative hero image**: Full-width centered image below about
- **Chefs section**: Two side-by-side chef cards on white bg. Each: circular/rounded photo with overlaid name + role, bio text below, social icons (Facebook, Twitter, Instagram)
- **Menu section**: Tabbed interface (Breakfast / Brunch / Dinner). Each tab: list of menu items with thumbnail, dish name, description, price right-aligned
- **Services section**: 6 icon-feature cards in 3-col grid on white bg (Quality Cuisine, Fresh Food, Bread & Pancake, Reserve Now, Fresh Vegies Salad, Whole Chicken). Each: icon, title, short text
- **Reservation section**: Light gray bg, form with Name, Email, Phone, Number of Persons (select), Date, Message, "Send Message" button
- **Customer Reviews**: Carousel (Owl Carousel) with blockquote testimonials, circular author photo, name, role
- **Contact section**: Same form layout as reservation (Name, Email, Phone, Message, Send Message)
- **Footer**: Three columns — About + Read More button, Service hours (Lunch/Dinner), Social links + Newsletter signup. Copyright line at bottom
- **Color palette**: Minimal — predominantly white/light backgrounds, black text, coral `#ff7a5c` as sole accent. Elegant, clean, monochrome with single warm accent

## Gherkin requirements

### Feature: Cutlery restaurant template

  Background:
    Given the user visits the Cutlery template page
    Then the page loads without errors

  Scenario: Header navigation
    Given the header is visible
    When the user clicks the hamburger menu
    Then a right-side slide-in navigation panel opens
    And the panel contains links: Home, About Us, Our Menu, Reserve A Table, Contact
    When the user clicks a nav link
    Then the page scrolls to the corresponding section

  Scenario: Hero section
    Given the hero section is in view
    Then a full-width background image is displayed
    And the heading "Welcome to Meal" is shown in white
    And a "Reserve A Table" outline-white button links to the reservation section

  Scenario: Food features grid
    Given the food features section is visible
    Then 4 food items are displayed in alternating image-text rows
    And each item shows a category label, dish name, description, and "Learn More" link

  Scenario: About section
    Given the about section is in view
    Then a centered "The Restaurant" heading appears
    And descriptive text paragraphs are displayed below

  Scenario: Chefs section
    Given the chefs section is visible
    Then 2 chef cards are displayed side by side
    And each card shows a photo, chef name, role title, bio text, and social icons

  Scenario: Menu section with tabs
    Given the menu section is in view
    Then 3 tab buttons are visible: Breakfast, Brunch, Dinner
    When the user clicks the "Breakfast" tab
    Then 4 breakfast menu items are shown with thumbnail, name, description, and price
    When the user clicks the "Brunch" tab
    Then 4 brunch menu items are shown
    When the user clicks the "Dinner" tab
    Then 4 dinner menu items are shown
    And the Breakfast tab is active by default

  Scenario: Services section
    Given the services section is visible
    Then 6 service feature cards are displayed in a 3-column grid
    And each card has an icon, title, and short description

  Scenario: Reservation form
    Given the reservation section is in view
    Then a form with fields: Name, Email, Phone, Number of Persons, Date, Message is displayed
    And a "Send Message" submit button is present
    When the user focuses an input field
    Then the border highlights in coral `#ff7a5c`

  Scenario: Customer reviews carousel
    Given the reviews section is visible
    Then a testimonial carousel is displayed
    And each slide shows a quote, author photo, author name, and role

  Scenario: Contact form
    Given the contact section is in view
    Then a form with fields: Name, Email, Phone, Message is displayed
    And a "Send Message" submit button is present

  Scenario: Footer
    Given the footer is visible
    Then it contains 3 columns: About, Service hours, Social + Newsletter
    And a "Component Dock" link is present in the footer
    And social icons for Facebook, Twitter, Instagram are shown
    And a newsletter email input with send button is present

  Scenario: Responsive layout
    Given the user is on a mobile viewport
    Then the hamburger menu is visible
    And food grid items stack vertically
    And chef cards stack vertically
    And menu tabs remain accessible
    And services cards stack vertically
    And footer columns stack vertically
