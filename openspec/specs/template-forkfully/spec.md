# Template: Forkfully (Food & Restaurant)

## Purpose

Recreation of ColorLib "Foodbar" — a free restaurant/bakery website template.
- **Source:** https://colorlib.com/wp/template/foodbar/
- **Preview:** https://preview.colorlib.com/theme/foodbar/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/foodbar-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **New name:** forkfully (replaces "Foodbar" throughout)

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Brand primary | `#f42f2c` | Buttons, hover states, active nav links |
| Background light | `#f9f9ff` | Banner left panel, section backgrounds |
| Heading color | `#222222` | All h1–h6 |
| Body text | `#777777` | Paragraphs, body copy |
| Heading font | `"Oswald", sans-serif` | All headings, weight 700 |
| Body font | `"Roboto", sans-serif` | Body text, weight 400 |
| Button background | `#f42f2c` | `.main_btn`, `.submit_btn` |
| Button hover | transparent + `#f42f2c` border/text | Hover state |
| Footer newsletter btn | gradient `#2c28b1` → `#9b5cf6` | `.sub-btn` |
| Footer background | `#ffffff` | `.footer-area` |
| Section padding | `120px 0` | `.p_120`, `.section_gap` |
| Border color | `#ededed`, `#eeeeee` | Dividers, dropdown borders |
| Navbar text | `#222222`, uppercase, 13px | `.nav-link` |

## Sections (in order)

1. **Navbar** — Fixed transparent header with logo, nav links (Home, About, Menu, Book a Table, Pages dropdown, Blog dropdown, Contact), hamburger toggle for mobile, off-canvas side menu
2. **Hero/Banner** — Split layout: left panel (#f9f9ff background) with "delicious cupcakes" headline, description paragraph, "Check Our Menu" CTA button; right panel with decorative animated planet circles and food image
3. **Top Rated Dishes** — Section title "Our Top Rated Dishes", 3-column grid of dish cards (image, dish name, ingredients description, price)
4. **Menu Area** — Section title "Our favourite Menu", two-column layout of menu items (dish name + price in each row, ingredient description below)
5. **Gallery** — Section title "foodbar galleries", masonry-style image grid (7/5/4/4/5 column layout across rows), hover overlay with icon
6. **Testimonials** — Owl-carousel slider, each slide: person image (left col) + name, role, quote text (right col)
7. **Reservation** — Section title "Make Reservation", form with name, email, phone, date/time, event dropdown, submit button
8. **Footer** — 4 link columns (Top Products, Quick Links, Features, Resources) + Newsletter signup (email input + gradient purple submit arrow) + Copyright bar with social icons (Facebook, Twitter, Dribbble, Behance)

## Gherkin Requirements

### Navbar
```gherkin
Feature: Forkfully Navbar

  Scenario: Desktop navbar displays all navigation links
    Given the user is on a desktop viewport
    Then the navbar shows links: Home, About, Menu, Book a Table, Pages, Blog, Contact

  Scenario: Navbar becomes visible on scroll
    Given the user scrolls down from the hero
    Then the navbar becomes sticky with a white background

  Scenario: Mobile hamburger menu opens off-canvas
    Given the user is on a mobile viewport
    When the user taps the hamburger icon
    Then an off-canvas side menu slides in from the left
    And the menu shows all navigation links vertically
```

### Hero
```gherkin
Feature: Forkfully Hero Banner

  Scenario: Hero displays split layout
    Given the user loads the page
    Then the hero has a left panel with light background (#f9f9ff)
    And the left panel contains a headline "delicious cupcakes"
    And the left panel contains a description paragraph
    And the left panel contains a "Check Our Menu" CTA button

  Scenario: Hero right panel shows decorative elements
    Given the user loads the page
    Then the hero right panel displays a circular animated planet graphic
    And a food image is visible in the right panel
```

### Top Rated Dishes
```gherkin
Feature: Forkfully Top Dishes

  Scenario: Displays three dish cards in a grid
    Given the user scrolls to the Top Rated Dishes section
    Then a section title "Our Top Rated Dishes" is visible
    And three dish cards are shown in a 3-column grid
    And each card has an image, dish name, ingredients text, and price

  Scenario: Dish cards show correct content
    Given the user views a dish card
    Then the card displays the dish image at the top
    And the dish name is below the image
    And ingredient text is shown below the name
    And the price is displayed in a styled element
```

### Menu
```gherkin
Feature: Forkfully Menu Section

  Scenario: Displays two-column menu list
    Given the user scrolls to the Menu section
    Then a section title "Our favourite Menu" is visible
    And menu items are displayed in two columns
    And each item shows dish name, price span, and ingredient description

  Scenario: Menu items are formatted consistently
    Given the user views a menu item
    Then the dish name is an h4 with the price as an inline span
    And the ingredient text is shown as a paragraph below
```

### Gallery
```gherkin
Feature: Forkfully Gallery

  Scenario: Gallery displays masonry image grid
    Given the user scrolls to the Gallery section
    Then a section title is visible
    And images are arranged in a masonry layout across rows
    And each image has a hover overlay with a picture icon

  Scenario: Gallery images have overlay interaction
    Given the user hovers over a gallery image
    Then a semi-transparent overlay appears
    And an icon is centered on the overlay
```

### Testimonials
```gherkin
Feature: Forkfully Testimonials

  Scenario: Testimonials carousel displays reviewer info
    Given the user scrolls to the Testimonials section
    Then a carousel slider is visible
    And each slide shows a person image on the left
    And the person's name, role, and quote text on the right

  Scenario: Carousel can navigate between slides
    Given the user is viewing the testimonials
    When the user clicks the next navigation arrow
    Then the next testimonial slide is displayed
```

### Reservation
```gherkin
Feature: Forkfully Reservation Form

  Scenario: Reservation form displays all fields
    Given the user scrolls to the Reservation section
    Then a section title "Make Reservation" is visible
    And the form has fields: Name, Email, Phone Number, Date & Time, Event select
    And a "Make Reservation" submit button is at the bottom

  Scenario: Form fields accept input
    Given the user is on the reservation form
    When the user types into the Name field
    Then the field displays the entered text
    When the user types into the Email field
    Then the field displays the entered email
```

### Footer
```gherkin
Feature: Forkfully Footer

  Scenario: Footer shows link columns and newsletter
    Given the user scrolls to the footer
    Then four link columns are visible (Top Products, Quick Links, Features, Resources)
    And a newsletter signup section is on the right with email input and submit button
    And the submit button has a purple gradient style

  Scenario: Footer shows copyright and social links
    Given the user views the footer bottom
    Then a copyright line is displayed
    And social icons (Facebook, Twitter, Dribbble, Behance) are visible
    And a "Component Dock" attribution link is present
```

## Verification Checklist

- [ ] All 8 sections render in correct order
- [ ] Navbar: transparent → sticky on scroll, mobile hamburger works
- [ ] Hero: split layout, headline, CTA button, decorative right panel
- [ ] Top Dishes: 3-column grid, image + name + ingredients + price
- [ ] Menu: two-column list, dish name + price + ingredients
- [ ] Gallery: masonry grid, hover overlay with icon
- [ ] Testimonials: carousel with person photo, name, role, quote
- [ ] Reservation: form with all fields, submit button styled
- [ ] Footer: 4 link columns, newsletter signup, copyright, social icons
- [ ] Brand color #f42f2c applied to buttons and hover states
- [ ] Fonts: Oswald for headings, Roboto for body
- [ ] Footer includes Component Dock link
- [ ] No ColorLib references in app code
- [ ] Placeholder images use picsum.photos
- [ ] 100% test coverage
