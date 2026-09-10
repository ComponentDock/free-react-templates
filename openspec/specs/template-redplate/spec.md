# Template: Redplate (Premium Restaurant)

## Purpose

Recreation of [ColorLib Caviar](https://colorlib.com/wp/template/caviar/) — a premium restaurant single-page template.
Preview URL: https://preview.colorlib.com/theme/caviar/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
Deploy: `https://redplate.free.componentdock.com`

## Design Tokens

| Token                | Value / Description                                                                                |
| -------------------- | -------------------------------------------------------------------------------------------------- |
| Brand red            | `#ff0000` — accent for buttons, scroll-to-top, active nav, hover states                            |
| Body background      | `#fafafa` — light warm gray                                                                        |
| Menu section bg      | `#333333` — dark charcoal                                                                          |
| Headings color       | `#000` (black)                                                                                     |
| Body text color      | `rgba(0,0,0,0.8)`                                                                                  |
| Subheading accent    | `#ff0000` (red)                                                                                    |
| Font — body          | `'Open Sans', sans-serif`                                                                          |
| Font — button/accent | `'Work Sans', sans-serif`                                                                          |
| Button (.caviar-btn) | White bg, no border-radius (square), black text, red circle indicator via `span`, hover → red text |
| Button radius        | `0` (square corners)                                                                               |
| Scroll-to-top bg     | `#ff0000` square, radius 3px                                                                       |
| Nav (sticky)         | `rgba(0,0,0,0.85)` background, white text                                                          |
| Nav active           | Red text (`#ff0000`)                                                                               |
| Hero overlay         | `rgba(0,0,0,0.5)` dark overlay over bg image                                                       |
| Avatar shapes        | `border-radius: 50%` (circular) for testimonials                                                   |
| Links                | No text-decoration, 500ms transition duration                                                      |

### CSS reference

Extracted from `https://preview.colorlib.com/theme/caviar/style.css` (see replication notes below).

## Requirements (Gherkin)

### Navbar

```gherkin
Feature: Navbar
  Scenario: Renders brand and navigation links
    Given the page loads
    Then the navbar displays the brand name "redplate"
    And navigation links are visible: Home, About Us, Menu, Awards, Testimonials, Reservation, Contact
    And a search icon button is present

  Scenario: Sticky behavior on scroll
    Given the user scrolls down past the hero
    Then the navbar sticks to the top with a dark semi-transparent background

  Scenario: Mobile toggle
    Given the viewport width is less than 992px
    When the user taps the hamburger icon
    Then the navigation links expand/collapse
```

### Hero

```gherkin
Feature: Hero Section
  Scenario: Full-screen background image
    Given the page loads
    Then a full-viewport hero section is displayed with a food-related background image
    And a dark overlay covers the background

  Scenario: Hero content
    Then a heading "Lorem Ipsum" is visible
    And a short paragraph description is below the heading
    And a "Reservation" button with a red circle indicator is visible

  Scenario: Social links sidebar
    Given the hero section is visible
    Then social media icons (Facebook, Instagram, Twitter) are positioned on the left edge
```

### About Us

```gherkin
Feature: About Us Section
  Scenario: Two-column layout (image left, text right)
    Given the user scrolls to the About section
    Then an image is displayed on the left
    And a section heading "About Us" is on the right
    And a subheading "restaurant style" in red is visible
    And a paragraph of descriptive text is below

  Scenario: Second about section (text left, image right)
    Then a subheading "our chef" in red is visible
    And descriptive text is on the left
    And an image is on the right
```

### Menu (Dish Grid)

```gherkin
Feature: Dish Menu Section
  Scenario: Dark background section with heading
    Given the user scrolls to the Menu section
    Then the section has a dark charcoal background
    And the heading "Special" is centered

  Scenario: Three-column dish grid
    Then three dish cards are displayed in a row
    And each card has a dish image (transparent PNG style)
    And each card shows a dish name and price

  Scenario: View The Menu button
    A "View The Menu" button with red circle indicator is below the heading
```

### Awards

```gherkin
Feature: Awards Section
  Scenario: Awards row
    Given the user scrolls to the Awards section
    Then the heading "Awards" is on the left
    And five award images are displayed in a horizontal row on the right
```

### Testimonials

```gherkin
Feature: Testimonials Section
  Scenario: Testimonial carousel
    Given the user scrolls to the Testimonials section
    Then the heading "Testimonials" is centered
    And three testimonials are displayed (circular avatar, name, quote)
    And a carousel/rotation is available to cycle through them

  Scenario: Testimonial card content
    Each testimonial shows: a circular profile image, person name, role/lorem text, and a quote paragraph
```

### Reservation

```gherkin
Feature: Reservation Section
  Scenario: Split layout (form left, image right)
    Given the user scrolls to the Reservation section
    Then a form area is on the right half
    And a large food-related image is on the left half

  Scenario: Reservation form fields
    Then the form has fields: date, time, number of persons, last name, message textarea
    And a "Reserve Your Desk" button with red circle indicator is at the bottom

  Scenario: Form layout
    Date and time fields are side by side on desktop
    Persons and last name fields are side by side on desktop
    The textarea spans full width
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer content
    Given the user scrolls to the bottom
    Then the footer displays the brand name "redplate"
    And a copyright notice with the current year is shown
    And a link to Component Dock is present
```

## Verification Checklist

- [ ] Navbar: brand name, all nav links, sticky behavior, mobile hamburger toggle
- [ ] Hero: full-screen bg image, dark overlay, heading + CTA button, social sidebar
- [ ] About Us: two alternating image+text rows, red subheadings, correct layout
- [ ] Menu: dark bg, "Special" heading, 3-column dish grid with images + prices, "View The Menu" CTA
- [ ] Awards: heading left, 5 award images right in a row
- [ ] Testimonials: centered heading, circular avatars, 3 testimonial cards with carousel
- [ ] Reservation: split layout (form right, image left), form fields (date, time, persons, name, message), CTA button
- [ ] Footer: brand name, copyright year, Component Dock link
- [ ] Design tokens: brand red #ff0000, body bg #fafafa, menu section #333, Open Sans + Work Sans fonts, square buttons
- [ ] No ColorLib references in app code (comments, text, data)
- [ ] All placeholder images use picsum.photos/seed URLs
- [ ] Footer links to https://www.componentdock.com/
