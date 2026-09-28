# Spec: Supper — Restaurant Template

**Recreation of:** ColorLib "Meal" (https://colorlib.com/wp/template/meal/)
**Preview:** https://preview.colorlib.com/theme/meal/
**New name:** Supper (apps/supper, @free-react-templates/supper)

## Design Tokens (from preview CSS)

- **Fonts:** Playfair Display (headings, serif), Open Sans (body, sans-serif)
- **Brand/accent color:** #ff7a5c (coral/orange)
- **Dark background:** #000000 (black)
- **Light section bg:** #f8f9fa (light gray)
- **Body text:** #999999 (gray), headings #000000
- **Button style:** Outline white on dark bg, rounded, hover fills white
- **Logo:** Single letter "S" in Playfair Display, black circle

## Sections (in order, matching original)

1. **Navbar** — Sticky top nav, logo "S" centered, nav links: Home, About, Menu, Reserve A Table, Contact. Black background on scroll, transparent initially.
2. **Hero** — Full-width background image, overlay text "Welcome to Supper", "Reserve A Table" button (outline white)
3. **Features** — "Find your best food" heading, 3 food cards in zigzag layout (image + text alternating left/right), each with category label, dish name, description, "Learn More" link
4. **About** — "The Restaurant" heading, descriptive paragraphs, white background
5. **Hero Divider** — Full-width decorative image
6. **Chefs** — "Meet The Chefs" heading, 2 chef cards with circular photo, name, title, bio, social icons (Facebook, Twitter, Instagram)
7. **Menu** — "Menu" heading, grid of 8+ menu items (dish name + description), light gray background
8. **Reservation** — "Reservation" heading, form: Name, Email, Phone, Number of Persons (select), Date, Time, Message, Submit button
9. **Testimonials** — "Customer Reviews" heading, carousel of 4 reviews (quote, author photo, name, title)
10. **Contact** — "Get In Touch" heading, form: Name, Email, Phone, Message, Submit button
11. **Footer** — 3-column layout: About text + "Read More" btn, Service Hours (Lunch + Dinner), Social icons + Newsletter signup. Bottom: Component Dock link (mandatory)

## Gherkin Scenarios

```gherkin
Feature: Supper — Restaurant Template

  Background:
    Given I am on the Supper homepage

  Scenario: Page loads with hero section
    Then I should see the heading "Welcome to Supper"
    And I should see a "Reserve A Table" button

  Scenario: Navbar shows all navigation links
    Then I should see links for "Home", "About", "Menu", "Reserve A Table", "Contact"

  Scenario: Features section shows food items
    Then I should see "Find your best food" heading
    And I should see 3 food cards

  Scenario: About section is visible
    Then I should see "The Restaurant" heading

  Scenario: Chefs section shows chef profiles
    Then I should see "Meet The Chefs" heading
    And I should see 2 chef profiles

  Scenario: Menu section displays items
    Then I should see "Menu" heading
    And I should see menu item entries

  Scenario: Reservation form has all fields
    Then I should see "Reservation" heading
    And I should see form fields for Name, Email, Phone, Date, Time, Message
    And I should see a persons dropdown

  Scenario: Testimonials section shows reviews
    Then I should see "Customer Reviews" heading

  Scenario: Contact form has required fields
    Then I should see "Get In Touch" heading
    And I should see form fields for Name, Email, Phone, Message

  Scenario: Footer links to Component Dock
    Then I should see a link to "https://www.componentdock.com/"
    And the link text should contain "Component Dock"
```
