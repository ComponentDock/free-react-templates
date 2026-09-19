# Template: Hawker (Multi-Purpose Selling)

## Purpose

Recreation of the ColorLib **Selling** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/selling/
- **Preview:** https://preview.colorlib.com/theme/selling/
- **New name:** `hawker` (app folder `apps/hawker`, package `@free-react-templates/hawker`)
- **Surge target:** `hawker.free.componentdock.com`
- **Category:** E-Commerce / Multi-Purpose Selling

## Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Accent / orange | `#f16821` | Links, text-primary, borders, highlights |
| Black | `#000000` | Headings, btn-black, text-black |
| White | `#ffffff` | btn-white, section backgrounds |
| Footer bg | `#333333` | Dark footer |
| Body text | `gray` | Paragraph text |
| Font | `"Muli", sans-serif` | All text, headings |
| Button radius | `0` (square) | Small uppercase buttons |
| btn-black | bg `#000`, text `#fff` | Primary CTA |
| btn-white | bg `#fff`, text `#000` | Light CTA |
| btn-outline-black | transparent, `#000` border | Outline variant |

## Section structure (page order)

1. **Nav** — Sticky header, white bg. Logo "Selling." left (with orange dot). Nav links right (Home, Shop, Featured, About, Blog, Contact). Mobile offcanvas.
2. **Hero** — "Shop With Us" large heading, description, CTA buttons, background image.
3. **Products (Our Products)** — "Our Products" section title, product card grid.
4. **Newsletter** — "Get notified on each updates" email subscribe form.
5. **Featured Products** — "Featured Products" section title, product cards.
6. **About Us** — "About Us" section title, company description text.
7. **Leadership** — "Leadership" section title, team member cards.
8. **Summer Sale** — Dark bg promotional banner, "Summer Sale" white heading.
9. **Services** — "We Offer Services" section title, service cards.
10. **Testimonials** — "Testimonials" section title, testimonial cards.
11. **Blog Posts** — "Blog Posts" section title, 3 blog cards with images.
12. **Get In Touch** — "Get In Touch" heading, "Contact Form" subheading, contact form.
13. **Footer** — Dark (#333) bg. 4 columns: About Us, Quick Links, Follow Us, Featured Product. Copyright with Component Dock.

## Gherkin scenarios

### Nav

```gherkin
Feature: Hawker Navigation

  Scenario: Nav displays logo and links
    Given the user is on the Hawker page
    Then the logo "Selling." with an orange dot is visible
    And navigation links are visible: Home, Shop, Featured, About, Blog, Contact
    And the header is sticky on scroll
```

### Hero

```gherkin
Feature: Hawker Hero

  Scenario: Hero displays heading and CTA
    Given the user is on the Hawker page
    Then a "Shop With Us" heading is displayed
    And a description paragraph is present
    And CTA buttons are available
```

### Products

```gherkin
Feature: Hawker Products

  Scenario: Products section displays items
    Given the user scrolls to the products section
    Then a "Our Products" heading is displayed
    And product cards are shown in a grid
    And each card has an image, title, and price
```

### Newsletter

```gherkin
Feature: Hawker Newsletter

  Scenario: Newsletter form displays
    Given the user scrolls to the newsletter section
    Then a "Get notified on each updates" heading is shown
    And an email input field is present
    And a subscribe button is present
```

### Featured Products

```gherkin
Feature: Hawker Featured Products

  Scenario: Featured products section renders
    Given the user scrolls to the featured section
    Then a "Featured Products" heading is displayed
    And product cards are shown
```

### About Us

```gherkin
Feature: Hawker About Us

  Scenario: About section renders
    Given the user scrolls to the about section
    Then an "About Us" heading is displayed
    And company description text is present
```

### Leadership

```gherkin
Feature: Hawker Leadership

  Scenario: Team section renders
    Given the user scrolls to the leadership section
    Then a "Leadership" heading is displayed
    And team member cards are shown
```

### Summer Sale

```gherkin
Feature: Hawker Summer Sale

  Scenario: Promotional banner renders
    Given the user scrolls to the summer sale section
    Then the section has a dark background
    And a "Summer Sale" white heading is displayed
```

### Services

```gherkin
Feature: Hawker Services

  Scenario: Services section renders
    Given the user scrolls to the services section
    Then a "We Offer Services" heading is displayed
    And service cards are shown
```

### Testimonials

```gherkin
Feature: Hawker Testimonials

  Scenario: Testimonials section renders
    Given the user scrolls to the testimonials section
    Then a "Testimonials" heading is displayed
    And testimonial cards are shown
```

### Blog Posts

```gherkin
Feature: Hawker Blog

  Scenario: Blog section renders
    Given the user scrolls to the blog section
    Then a "Blog Posts" heading is displayed
    And 3 blog post cards are shown
    And each card has an image and title
```

### Get In Touch

```gherkin
Feature: Hawker Contact

  Scenario: Contact form renders
    Given the user scrolls to the contact section
    Then a "Get In Touch" heading is displayed
    And a "Contact Form" subheading is shown
    And a contact form with input fields is present
```

### Footer

```gherkin
Feature: Hawker Footer

  Scenario: Footer displays widgets
    Given the user scrolls to the footer
    Then the footer has a dark (#333333) background
    And 4 widget columns are displayed (About Us, Quick Links, Follow Us, Featured Product)
    And a copyright bar is at the bottom

  Scenario: Footer links to Component Dock
    Given the footer is rendered
    Then the copyright includes a link to "Component Dock" (https://www.componentdock.com/)
    And no ColorLib references appear in the app code
```

## Verification checklist

- [ ] All 13 sections present in correct order
- [ ] Design tokens match: #f16821 accent, Muli font, #333333 footer
- [ ] Square buttons (no border-radius)
- [ ] Sticky white header with "Selling." logo
- [ ] Hero with "Shop With Us" heading
- [ ] Products, Featured Products sections
- [ ] Newsletter subscribe form
- [ ] About Us, Leadership team section
- [ ] Summer Sale dark promotional banner
- [ ] Services, Testimonials, Blog Posts sections
- [ ] Contact form section
- [ ] Footer with 4 columns and Component Dock link
- [ ] No ColorLib references in app code
