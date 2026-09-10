# Template: Savorly (Restaurant)

## Purpose

Recreation of ColorLib **Buri** — a single-page restaurant landing template.

- **Source slug:** `buri`
- **Preview URL:** https://preview.colorlib.com/theme/buri/
- **Original:** https://colorlib.com/wp/template/buri/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/buri-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from preview DOM + CSS)

| Token              | Value                           | Notes                                              |
| ------------------ | ------------------------------- | -------------------------------------------------- |
| Heading font       | `'Playfair Display', serif`     | Google Font, used for all headings and hero text    |
| Body font          | `'Montserrat', sans-serif`      | Google Font, body copy and UI elements              |
| Primary accent     | `#d6ad86` (warm tan/brown)      | Navbar, section dividers, brand color               |
| Section BG         | `#f9f9ff` (light lavender)      | Alternating section backgrounds                     |
| Heading text       | `#2c3033` (near-black)          | Section headings and body text                      |
| Muted text         | `#999999` (gray)                | Secondary descriptions and captions                 |
| Button accent 1    | `#415094` (navy blue)           | Primary CTA buttons                                 |
| Button accent 2    | `#4cd3e3` (sky blue)            | Secondary accent elements                           |
| Button accent 3    | `#f4e700` (bright yellow)       | Highlight accents                                   |
| Button accent 4    | `#f44a40` (red-orange)          | Alert / callout accents                             |
| Button accent 5    | `#38a4ff` (bright blue)         | Additional accent                                   |
| Button accent 6    | `#73fbaf` (mint green)           | Success / highlight accents                         |
| Button accent 7    | `#6382e6` (purple-blue)         | Alternate accent                                    |
| Button accent 8    | `#e66686` (pink)                | Alternate accent                                    |
| Button accent 9    | `#ffb830` (amber)               | Alternate accent                                    |
| Hero BG            | Full-width food image           | Dark overlay with text overlay                       |
| Body text          | `#828bb2` (slate gray)          | Paragraph text and descriptions                      |
| Border / divider   | `#d6ad86` (tan)                 | Consistent with primary accent                       |
| Button radius      | Rounded (border-radius ~4px)    | Small rounded corners on buttons                     |

### Color palette (menu item category dots)
- Category dots: `#d6ad86` (tan), `#415094` (navy), `#4cd3e3` (sky blue), `#f44a40` (red-orange), `#f4e700` (yellow), `#38a4ff` (blue), `#73fbaf` (green), `#6382e6` (purple), `#e66686` (pink), `#ffb830` (amber)

## Section Order (from preview DOM)

1. **Navbar** — Fixed top navbar with "Buri" logo (left) and links: Home, About, Menu, Blog, Elements, Contact. Dropdown menus on some items. Hamburger menu on mobile.
2. **Hero/Banner** — Full-width background image of food/dining. Heading: "Expensive but the best". Subtext: "Modern restaurant in center of the city". CTA button: "book a table". Dark overlay on image.
3. **About** — Section heading: "about us" / "Delicious food provider since 1990". Description paragraph about the restaurant. "Learn More" button. Two-column layout: text left, image right (or stacked on mobile).
4. **Food Menu** — Section heading: "Popular Menu" / "Delicious Food Menu". 2×3 grid of menu items. Each item has: food image, dish name, short description, price ("Form $40.00" — likely typo for "From"). Items: Pork Sandwich, Roasted Marrow, Summer Cooking, Easter Delight, Tiener Schnitze, Chicken Roast. Category filter tabs at top.
5. **Video/Intro** — Full-width background image with play button overlay. Video introduction section with dark overlay.
6. **Testimonials** — Section heading: "What they said". Rotating/carousel review cards. Each card has: testimonial quote text, author name ("Mosan Cameron"), author photo. Clean layout with quotation marks.
7. **Contact** — Contact information section. Address: "240, Kings street, New York city USA". Hours: "Mon - Fri (9.00-19.00) Sat - Sun (9.00-19.00)". Phone: "+880 367 251 167". Email: "barires@contact.com". Map or location display.
8. **Footer** — Quick links (About, Menu, Reservation, Breakfast, Lunch, Dinner). Newsletter subscription form ("Subscribe newsletter to get all updates about discount and offers"). Copyright: "All rights reserved | This template is made with by Colorlib" (replaced with Component Dock attribution).

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navigation Bar

  Scenario: Desktop navbar displays all section links
    Given the user is on a desktop viewport
    When the page loads
    Then the navbar shows the logo and links for Home, About, Menu, Blog, Elements, Contact

  Scenario: Navbar becomes sticky on scroll
    Given the user scrolls past the hero section
    When the scroll position exceeds the navbar height
    Then the navbar should be fixed at the top of the viewport

  Scenario: Mobile hamburger menu toggles navigation
    Given the user is on a mobile viewport
    When the user taps the hamburger icon
    Then the navigation menu should expand or collapse
```

### Hero/Banner

```gherkin
Feature: Hero Banner

  Scenario: Hero section displays heading and CTA
    Given the user views the page
    When the hero section loads
    Then the heading "Expensive but the best" is visible
    And the subtext "Modern restaurant in center of the city" is visible
    And the "book a table" CTA button is visible

  Scenario: Hero has a full-width food background image
    Given the user views the page
    When the hero section loads
    Then a full-width background image with a dark overlay is displayed
```

### About

```gherkin
Feature: About Section

  Scenario: About section displays heading and description
    Given the user scrolls to the about section
    When the section loads
    Then the heading "Delicious food provider since 1990" is visible
    And a description paragraph is displayed
    And a "Learn More" button is visible

  Scenario: About section has two-column layout on desktop
    Given the user is on a desktop viewport
    When the about section loads
    Then text content appears on one side and an image on the other
```

### Food Menu

```gherkin
Feature: Food Menu Section

  Scenario: Menu section displays all menu items
    Given the user scrolls to the menu section
    When the section loads
    Then 6 menu items are displayed in a grid
    And each item shows a food image, name, description, and price

  Scenario: Menu items display correct data
    Given the menu section is visible
    When the user views each menu item
    Then the dish names are: Pork Sandwich, Roasted Marrow, Summer Cooking, Easter Delight, Tiener Schnitze, Chicken Roast
    And each item shows a price starting with "From $40.00"

  Scenario: Menu section has category filter tabs
    Given the menu section is visible
    When the user views the filter tabs
    Then category filter options are displayed at the top of the menu grid
```

### Video/Intro

```gherkin
Feature: Video Introduction Section

  Scenario: Video section displays with play button
    Given the user scrolls to the video section
    When the section loads
    Then a full-width background image with a dark overlay is displayed
    And a play button icon is visible in the center

  Scenario: Play button triggers video modal or external link
    Given the video section is visible
    When the user clicks the play button
    Then a video modal or external video link opens
```

### Testimonials

```gherkin
Feature: Testimonials Section

  Scenario: Testimonials section displays review cards
    Given the user scrolls to the testimonials section
    When the section loads
    Then the heading "What they said" is visible
    And review cards with testimonial text and author names are displayed

  Scenario: Testimonials carousel rotates through reviews
    Given the testimonials section is visible
    When the carousel advances
    Then different review cards are shown with author attribution
```

### Contact

```gherkin
Feature: Contact Section

  Scenario: Contact section displays business information
    Given the user scrolls to the contact section
    When the section loads
    Then the address "240, Kings street, New York city USA" is visible
    And business hours "Mon - Fri (9.00-19.00) Sat - Sun (9.00-19.00)" are visible
    And phone number "+880 367 251 167" is visible
    And email "barires@contact.com" is visible
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer displays links and newsletter subscription
    Given the user scrolls to the footer
    When the footer loads
    Then quick links for About, Menu, Reservation, Blog, Breakfast, Lunch, Dinner are visible
    And a newsletter subscription form is visible with an email input and subscribe button

  Scenario: Footer has Component Dock attribution
    Given the footer is visible
    When the user views the copyright line
    Then the text includes a link to https://www.componentdock.com/
```

## Verification Checklist

- [ ] Navbar is sticky on scroll, collapses to hamburger on mobile
- [ ] Hero has background image with dark overlay, heading, subtext, CTA
- [ ] About section has two-column layout on desktop, stacked on mobile
- [ ] Food menu shows 6 items with images, names, descriptions, prices
- [ ] Video section has play button overlay
- [ ] Testimonials carousel displays review cards with author info
- [ ] Contact section shows all business information
- [ ] Footer has quick links, newsletter form, Component Dock attribution
- [ ] Fonts loaded: Playfair Display (headings) + Montserrat (body)
- [ ] Primary accent #d6ad86 used consistently across sections
- [ ] All images use picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
- [ ] Typecheck + lint pass
