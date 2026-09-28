# Grillmark — Steakhouse Restaurant Template

> **Original ColorLib source:** [Steakshop](https://preview.colorlib.com/theme/steakshop/)
> **Preview URL:** https://preview.colorlib.com/theme/steakshop/

## Design Tokens

| Token            | Value                                                                                  | Notes              |
| ---------------- | -------------------------------------------------------------------------------------- | ------------------ |
| Heading font     | Pacifico, cursive                                                                      | h1–h6              |
| Body font        | Roboto, sans-serif                                                                     | 14px base          |
| Brand color      | #f42f2c                                                                                | Primary red        |
| Brand light      | #f48464                                                                                | Gradient endpoint  |
| Brand gradient   | linear-gradient(90deg, #f42f2c 0%, #f48464 100%)                                       | Buttons, accents   |
| Heading color    | #222222                                                                                | All headings       |
| Body text color  | #777777                                                                                | Paragraphs, labels |
| Button style     | White bg, red border 1px, border-radius 2px, uppercase, letter-spacing 1px             |
| Button hover     | White text, bg #f42f2c, transparent border, box-shadow 0 20px 20px rgba(244,47,44,0.1) |
| Reservation card | White bg, padding 70px 50px, box-shadow, inputs bottom-border only                     |
| Footer           | Dark bg with overlay, 5-column grid                                                    |
| Main title       | Centered, margin-bottom 75px, h1 font-size 36px                                        |

## Sections

1. **Navbar** — Responsive top navigation with site logo, nav links (Home, About, Breakfast, Lunch, Reservation, Chef, Gallery, Contact), and a hamburger menu on mobile.
2. **Hero** — Full-screen background image with dark overlay, tagline text, and call-to-action button.
3. **BannerBottom** — Overlapping banner below hero with video play icon, headline "Premium cuts, expertly crafted", and "Explore Menu" CTA.
4. **Breakfast** — Two-column layout: left side with heading, description text, and details; right side with overlapping food images.
5. **Lunch** — Two-column layout: left side with overlapping images; right side with heading, description, and a chef testimonial (avatar, name, title).
6. **Reservation** — Background image with a centered white card containing a reservation form (Name, Email, Phone, People, Date/Time, Event type, submit button).
7. **Chef** — Large chef image on the left with text and signature on the right; four small circular food thumbnails overlapping the chef area.
8. **FoodGallery** — Horizontal scrolling carousel of food images with navigation arrows.
9. **Brands** — "In association with" heading followed by a row of partner brand logos (text-based with opacity).
10. **Footer** — Five-column layout (Top Products, Quick Links, Features, Resources, Newsletter), bottom bar with copyright, Component Dock link, and social icons (Facebook, Twitter, Dribbble, Behance).

## Gherkin Scenarios

### Navbar

```gherkin
Feature: Navbar

  Scenario: Renders the site name and navigation links
    Given the Grillmark page is loaded
    Then the "Grillmark" logo link is visible
    And the navigation links "Home", "About", "Breakfast", "Lunch", "Reservation", "Chef", "Gallery", "Contact" are visible

  Scenario: Opens and closes the mobile hamburger menu
    Given the Grillmark page is loaded
    When the user clicks the hamburger menu button
    Then the mobile navigation menu is visible
    When the user clicks the close button
    Then the mobile navigation menu is not visible
```

### Hero

```gherkin
Feature: Hero

  Scenario: Displays the hero headline and call-to-action
    Given the Grillmark page is loaded
    Then the hero headline "Premium cuts, expertly crafted" is visible
    And the "Explore Menu" call-to-action button is visible

  Scenario: Shows the background image
    Given the Grillmark page is loaded
    Then a background image is displayed with an accessible name
```

### BannerBottom

```gherkin
Feature: BannerBottom

  Scenario: Shows the video play icon and headline
    Given the Grillmark page is loaded
    Then the banner headline "Premium cuts, expertly crafted" is visible
    And the video play button is visible
    And the "Explore Menu" link is visible
```

### Breakfast

```gherkin
Feature: Breakfast

  Scenario: Displays the breakfast section heading and description
    Given the Grillmark page is loaded
    Then the breakfast heading "Daily Food Courses with Drinks" is visible
    And the breakfast description text is visible

  Scenario: Shows food images
    Given the Grillmark page is loaded
    Then food images are displayed in the breakfast section
```

### Lunch

```gherkin
Feature: Lunch

  Scenario: Displays the lunch section heading and description
    Given the Grillmark page is loaded
    Then the lunch heading is visible
    And the lunch description text is visible

  Scenario: Shows the chef testimonial
    Given the Grillmark page is loaded
    Then the chef testimonial avatar image is visible
    And the chef name "Walter White" is visible
    And the chef title "Head Chef" is visible
```

### Reservation

```gherkin
Feature: Reservation

  Scenario: Displays the reservation form
    Given the Grillmark page is loaded
    Then the reservation form is visible
    And the "Name" input field is visible
    And the "Email" input field is visible
    And the "Phone" input field is visible
    And the "Number of People" select is visible
    And the "Date" input is visible
    And the "Time" input is visible
    And the "Event" select is visible
    And the "Make Reservation" button is visible

  Scenario: Shows validation error for empty submission
    Given the Grillmark page is loaded
    When the user clicks the "Make Reservation" button
    Then a validation error message is displayed

  Scenario: Shows success message on valid submission
    Given the Grillmark page is loaded
    When the user fills in valid reservation details
    And the user clicks the "Make Reservation" button
    Then a success confirmation message is displayed
```

### Chef

```gherkin
Feature: Chef

  Scenario: Displays the chef section content
    Given the Grillmark page is loaded
    Then the chef image is visible
    And the chef section heading is visible
    And the chef signature text is visible

  Scenario: Shows the food thumbnails
    Given the Grillmark page is loaded
    Then four food thumbnail images are visible in the chef section
```

### FoodGallery

```gherkin
Feature: FoodGallery

  Scenario: Displays the food gallery carousel
    Given the Grillmark page is loaded
    Then the food gallery section heading is visible
    And food gallery images are displayed
    And left and right navigation arrows are visible

  Scenario: Scrolls the gallery with navigation arrows
    Given the Grillmark page is loaded
    When the user clicks the right arrow
    Then the gallery scrolls right
    When the user clicks the left arrow
    Then the gallery scrolls left
```

### Brands

```gherkin
Feature: Brands

  Scenario: Displays the brands section
    Given the Grillmark page is loaded
    Then the "In association with" heading is visible
    And brand partner logos are displayed
```

### Footer

```gherkin
Feature: Footer

  Scenario: Displays footer columns and links
    Given the Grillmark page is loaded
    Then the footer shows "Top Products" column
    And the footer shows "Quick Links" column
    And the footer shows "Features" column
    And the footer shows "Resources" column
    And the footer shows "Newsletter" column

  Scenario: Newsletter subscription form works
    Given the Grillmark page is loaded
    When the user enters a valid email in the newsletter field
    And the user clicks the subscribe button
    Then a subscription confirmation is displayed

  Scenario: Footer contains Component Dock link
    Given the Grillmark page is loaded
    Then a link to "https://www.componentdock.com/" labeled "Component Dock" is visible in the footer

  Scenario: Footer social icons are visible
    Given the Grillmark page is loaded
    Then the Facebook, Twitter, Dribbble, and Behance social icons are visible in the footer
```
