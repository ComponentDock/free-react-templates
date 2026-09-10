# Template: Feastly (Restaurant)

## Purpose

Recreation of ColorLib **Buri** — a Bootstrap-based restaurant website template.

- **Source slug:** `buri`
- **Preview URL:** https://preview.colorlib.com/theme/buri/
- **Original:** https://colorlib.com/wp/template/buri/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/buri-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from preview DOM + CSS)

| Token            | Value                             | Notes                                              |
| ---------------- | --------------------------------- | -------------------------------------------------- |
| Font heading     | `'Playfair Display', serif`       | Elegant serif for section headings and hero        |
| Font body        | `'Montserrat', sans-serif`        | Clean sans-serif for body, nav, buttons, labels    |
| Primary accent   | `#d6ad86` (warm gold-tan)         | Headings accent color, banner subtitle, highlights |
| Dark background  | `#1c1a18` (near-black warm)       | Footer background                                  |
| Light background | `#f7efe7` (warm cream)            | Review/testimonial section background              |
| Body text        | `#555555` (dark gray)             | Paragraph copy                                     |
| Star/highlight   | `#ffb830` (amber)                 | Star ratings, emphasis                             |
| Nav text         | `#2c3033` (charcoal)              | Navbar link text                                   |
| Footer text      | `#a9a9a9` (medium gray)           | Footer paragraph and link text                     |
| White            | `#fff`                            | Buttons, menu section bg, card text                |
| Button primary   | bg `#d6ad86`, color `#fff`        | CTA buttons (rounded, medium padding)              |
| Button border    | border `#d6ad86`, color `#d6ad86` | Ghost/outline button variant                       |
| Banner heading   | `65px`, weight 400, Montserrat    | Large hero heading                                 |

### Color palette summary

- Primary gold: `#d6ad86` (accent throughout — buttons, headings, highlights)
- Dark warm: `#1c1a18` (footer, dark backgrounds)
- Cream: `#f7efe7` (testimonial/review section)
- Amber: `#ffb830` (star ratings, secondary highlight)
- Dark text: `#2c3033`
- Body text: `#555555`
- White: `#fff` (menu section background)

## Section Order (from preview DOM)

1. **Navbar** — Transparent/white background, logo left, links: Home, About, Menu, Blog (dropdown), Pages (dropdown), Contact. Mobile hamburger. Bootstrap navbar.
2. **Banner/Hero** — Full-width background image with dark overlay. Subtitle "Expensive but the best", heading "Modern restaurant in center of the city", CTA button "Book a Table".
3. **About** — Two-column layout: left side text (subheading "about us", heading "Delicious food provider since 1990", two paragraphs, "Learn More" button), right side image (restaurant image).
4. **Food Menu** — Centered section title "Popular Menu" / "Delicious Food Menu". Two-column grid of 6 food items. Each item: food image thumbnail + title + description + price ("Form $40.00"). Items: Pork Sandwich, Roasted Marrow, Summer Cooking, Easter Delight, Tiener Schnitze, Chicken Roast.
5. **Intro Video** — Full-width dark background image with centered play button (YouTube popup link). Parallax/video intro area.
6. **Testimonials/Reviews** — Cream background (`#f7efe7`). Centered title "Testimonials" / "What they said". Owl carousel of review cards. Each card: testimonial text, client avatar image, client name, 5-star rating. 3 reviews shown in carousel.
7. **Contact** — Left-aligned contact info section: address (240, Kings street, New York), hours (Mon-Sun 9.00-19.00), reservation phone + email. No form — info-only layout.
8. **Footer** — Dark background (`#1c1a18`). Three columns: (1) Logo + phone + email + social icons (Facebook, Instagram), (2) Quick links (About, Menu, Reservation, Blog, Breakfast, Lunch, Dinner), (3) Newsletter subscription form with email input + send button. Copyright bar at bottom.

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navigation Bar

  Scenario: Desktop navbar displays all section links
    Given the user is on a desktop viewport
    When the page loads
    Then the navbar shows the logo and links for Home, About, Menu, Blog, Pages, Contact

  Scenario: Navbar becomes sticky on scroll
    Given the user scrolls past the hero section
    When the scroll position exceeds the navbar height
    Then the navbar should be fixed at the top of the viewport

  Scenario: Mobile hamburger menu toggles navigation
    Given the user is on a mobile viewport
    When they click the hamburger menu icon
    Then the navigation links should slide in or appear
    And clicking a link should close the menu and scroll to the section
```

### Banner / Hero

```gherkin
Feature: Hero / Banner Section

  Scenario: Hero displays headline and CTA
    Given the user views the page
    When the banner section is visible
    Then it shows the subtitle "Expensive but the best"
    And the heading "Modern restaurant in center of the city"
    And a "Book a Table" call-to-action button

  Scenario: Hero has a background image with overlay
    Given the user views the banner section
    Then the section displays a background restaurant image
    And the text is readable over the image via a dark overlay
```

### About

```gherkin
Feature: About Section

  Scenario: About section shows two-column layout
    Given the user scrolls to the about section
    Then the left column displays heading "Delicious food provider since 1990"
    And two descriptive paragraphs
    And a "Learn More" button
    And the right column displays a restaurant image

  Scenario: About section has white background
    Given the user views the about section
    Then the section background is white
```

### Food Menu

```gherkin
Feature: Food Menu Section

  Scenario: Menu section displays 6 food items
    Given the user scrolls to the menu section
    Then 6 food items are displayed in a two-column grid
    And each item shows a food image, title, description, and price

  Scenario: Menu items are correctly named
    Given the menu items are rendered
    Then the items include Pork Sandwich, Roasted Marrow, Summer Cooking, Easter Delight, Tiener Schnitze, and Chicken Roast

  Scenario: Menu section has white background
    Given the user views the menu section
    Then the section background is white
```

### Intro Video

```gherkin
Feature: Intro Video Section

  Scenario: Video section displays a play button
    Given the user scrolls to the video section
    Then a centered play button is visible
    And clicking it opens a YouTube video popup

  Scenario: Video section has a dark background image
    Given the user views the video section
    Then the section displays a dark parallax background image
```

### Testimonials

```gherkin
Feature: Testimonials / Reviews Section

  Scenario: Testimonials section shows review carousel
    Given the user scrolls to the testimonials section
    Then the heading "What they said" is displayed
    And 3 client reviews are shown in a carousel
    And each review shows testimonial text, client name, avatar image, and 5-star rating

  Scenario: Testimonials section has cream background
    Given the user views the testimonials section
    Then the section background is cream-colored (#f7efe7)
```

### Contact

```gherkin
Feature: Contact Section

  Scenario: Contact section displays address, hours, and phone
    Given the user scrolls to the contact section
    Then the address "240, Kings street, New York city USA" is displayed
    And the hours "Mon - Fri (9.00-19.00)" and "Sat - Sun (9.00-19.00)" are displayed
    And the phone number "+880 367 251 167" is displayed
    And the email "barires@contact.com" is displayed

  Scenario: Contact section has no form
    Given the user views the contact section
    Then the section shows contact information only (no input form)
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer has three-column layout
    Given the user scrolls to the footer
    Then the left column shows logo, phone, email, and social icons
    And the middle column shows quick links
    And the right column shows a newsletter subscription form

  Scenario: Footer has dark background
    Given the user views the footer
    Then the footer background is dark (#1c1a18)
    And the footer links are colored in accent gold (#d6ad86)

  Scenario: Footer links replace Colorlib attribution with Component Dock
    Given the user reads the copyright text
    Then it links to https://www.componentdock.com/ (branded as "Component Dock")
    And there are no references to Colorlib
```

## Verification Checklist

- [ ] Fonts loaded: Playfair Display (headings), Montserrat (body)
- [ ] Primary accent `#d6ad86` used consistently for highlights and buttons
- [ ] Hero section has full-width background image with dark overlay
- [ ] About section: two-column layout, heading, paragraphs, image, "Learn More" button
- [ ] Food Menu: 2x3 grid of 6 items with image, title, description, price
- [ ] Video section: centered play button over dark background
- [ ] Testimonials: carousel with reviews, star ratings, client avatars, cream background
- [ ] Contact: info-only layout (address, hours, phone, email) — no form
- [ ] Footer: dark background, 3 columns, newsletter form, Component Dock link
- [ ] No references to Colorlib in app code (provenance only in spec)
- [ ] Footer links to Component Dock
- [ ] Placeholder images via picsum.photos
- [ ] Responsive layout works on mobile
