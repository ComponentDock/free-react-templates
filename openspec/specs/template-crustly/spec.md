# Template: Crustly (Restaurant/Bakery)

## Purpose

Recreation of ColorLib's **Bakery2** template.

- **Source:** https://colorlib.com/wp/template/bakery2/
- **Preview:** https://preview.colorlib.com/theme/bakery2/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Design category:** Restaurant / Bakery / Food

## Design Tokens (extracted from preview)

| Token | Value |
|-------|-------|
| Primary brand color | `#f42f2c` (vivid red) |
| Dark navy / header bg | `#04091e` |
| Body text | `#777777` |
| Heading text | `#222222` |
| Light background | `#fafaff` |
| Input background | `#e8e8e8` |
| Border color | `#ededed` / `#eeeeee` |
| Heading font | Playfair Display, serif (Google Fonts) |
| Body font | Roboto, sans-serif (Google Fonts) |
| Button radius (main) | 0px (square) |
| Button radius (newsletter) | 45px (pill) |
| Button radius (form submit) | 3px |

## Replication Reference

- **Live preview fetched:** Yes (200 OK). HTML + CSS analyzed.
- **CSS:** `css/style.css` fetched — tokens above extracted from it.
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/bakery2-free-template.jpg`
  (not analyzed in browser — preview DOM is the primary reference)

## Section Structure (1:1 fidelity)

| # | Section | Description |
|---|---------|-------------|
| 1 | Navbar | Transparent header over hero. Links: Home, About, Menu, Pages (dropdown), Blog (dropdown), Contact. White text, red `#f42f2c` on hover. Logo left, nav right. |
| 2 | Canvas Menu Bar | Sticky bar below navbar with hamburger icon (left) and "Contact Us" button (right). Dark background `#04091e`. |
| 3 | Hero Banner | Full-width Swiper slider, 3 slides with food images. Overlay text image (slider-content.png). |
| 4 | About Our Story | Two-column: left text "About Our Story" + paragraph + "View Full Menu" button; right image. Light `#fafaff` bg. |
| 5 | Feature Story (Honey Chocolate Pie) | Two-column reversed: left image, right text "Honey Chocolate Pie" + description + CTA. Same light bg. |
| 6 | Our Menu | Carousel (Owl) with 3 slides: Starter, Main Courses, Desserts. Each slide: left column menu items (item name, price, description), right column image. Section title "Our Menu / Explore". |
| 7 | Testimonials | Carousel: person image (4 cols) + text (8 cols): name, role, quote. 3 slides. |
| 8 | Book a Table | Two-column: left image, right form (name, email, phone, date/time, event select, "Make Reservation" button). |
| 9 | Footer | 4 link columns (Top Products, Quick Features, Quick Links, Resources) + Newsletter column (email input + arrow button). Bottom bar with copyright + social icons. |

## Gherkin Scenarios

```gherkin
Feature: Crustly Template

  Scenario: Page loads with hero banner
    Given the user visits the Crustly homepage
    Then a full-width hero banner is visible
    And the banner contains a call-to-action overlay

  Scenario: Navigation links work
    Given the navbar is visible
    When the user clicks "About"
    Then the page scrolls to the about section
    When the user clicks "Menu"
    Then the page scrolls to the menu section

  Scenario: Menu carousel slides
    Given the Our Menu section is visible
    When the user clicks the next carousel arrow
    Then the next menu category is displayed

  Scenario: Testimonials carousel
    Given the testimonials section is visible
    When the user navigates testimonials
    Then the next testimonial is displayed

  Scenario: Book a Table form
    Given the Book a Table section is visible
    When the user fills in name, email, phone, and date
    And clicks "Make Reservation"
    Then the form submission is triggered

  Scenario: Newsletter signup
    Given the footer newsletter section is visible
    When the user enters an email and clicks the arrow button
    Then the newsletter form is submitted

  Scenario: Footer links and social icons
    Given the footer is visible
    Then link columns are displayed (Top Products, Quick Features, Quick Links, Resources)
    And social media icons (Facebook, Twitter, Dribbble, Behance) are present
    And the copyright line includes a Component Dock link
```

## Verification Checklist

- [ ] All 9 sections present in order
- [ ] Brand color `#f42f2c` used for buttons and hover states
- [ ] Playfair Display for headings, Roboto for body
- [ ] Hero banner is full-width with slider
- [ ] Menu section uses carousel with 3 food categories
- [ ] Testimonials carousel with person image + text
- [ ] Book a Table form with all fields
- [ ] Footer with 4 link columns + newsletter + social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive (mobile nav toggle)
