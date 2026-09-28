# Template: Bistrox (Restaurant)

## Purpose

Recreation of ColorLib **Tasty** — a restaurant landing template with hero slider, reservation form, tabbed menu, specials, testimonials, blog, and instagram grid.

- **Source slug:** `tasty`
- **Preview URL:** https://preview.colorlib.com/theme/tasty/
- **Original:** https://colorlib.com/wp/template/tasty/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/tasty-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens (from preview DOM + CSS)

| Token            | Value                     | Notes                                |
| ---------------- | ------------------------- | ------------------------------------ |
| Heading font     | `'Muli', sans-serif`      | Google Font, weights 300/400/600/700 |
| Primary accent   | `#F96D00` (orange)        | Navbar loader, brand buttons, CTAs   |
| Secondary accent | `#ffb400` (golden yellow) | Hover states, highlights             |
| Text dark        | `#212529` (near-black)    | Body text, headings                  |
| Text muted       | `#999999` (gray)          | Secondary descriptions               |
| BG light         | `#f8f9fa` (light gray)    | Alternating section backgrounds      |
| Body BG          | `#ffffff` (white)         | Default section background           |
| Dark BG          | `#333333` (dark gray)     | Navbar, footer, overlays             |
| Button radius    | None (sharp corners)      | Bootstrap-style buttons              |
| Button padding   | `px-5 py-3` (hero)        | Large CTAs                           |

## Section Order (from preview DOM)

1. **Navbar** — Dark navbar with "Bistrox" brand. Links: Home, Menu, Specialties, Reservation, Blog, About, Contact. Sticky on scroll. Mobile hamburger menu.
2. **Hero Slider** — 3 slides with food bg images + dark overlay. Headings: "Book a table for yourself at a time convenient for you" / "Tasty & Delicious Food". CTA: "Book a table" orange button.
3. **Reservation Form** — Inline form: Name, Phone, Date, Time, Person (select 1-4+). "Book a table" submit button (orange).
4. **About** — Two columns: image left, text right. Subheading "About Bistrox". Heading "Our chef cooks the most delicious food for you". Description paragraphs.
5. **Menu** — Tabbed: Main / Dessert / Drinks. Each tab: 2-column grid of dish items (image + name + ingredients + $29 price). "Make a Reservation" CTA below.
6. **Parallax** — Full-width bg image with dark overlay. Heading "Our Specialties".
7. **Specialties** — 2-column grid alternating image/text. Dishes: Beef Steak, Beef Ribs Steak, Chopsuey, Roasted Chicken. Name + description + "from $10.00".
8. **Testimonials** — Carousel: star ratings, review text, author name + position. 3 unique testimonials.
9. **Blog** — 3 blog cards: image, date, author, title, "Read more", comment count.
10. **Instagram** — 5-column grid of images with hover Instagram icon overlay.
11. **Footer** — Dark bg. 4 columns: Brand+desc+social icons, Opening Hours (Mon-Sun 08:00-22:00), Contact Info, Newsletter (email+subscribe). Copyright: "More templates at Component Dock" → https://www.componentdock.com/

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navigation Bar
  Scenario: Desktop navbar displays all section links
    Given the user is on a desktop viewport
    When the page loads
    Then the navbar shows the logo "Bistrox" and links for Home, Menu, Specialties, Reservation, Blog, About, Contact

  Scenario: Mobile hamburger menu toggles navigation
    Given the user is on a mobile viewport
    When the user taps the hamburger icon
    Then the navigation menu expands
    When the user taps the hamburger icon again
    Then the navigation menu collapses
```

### Hero

```gherkin
Feature: Hero Slider
  Scenario: Hero displays heading and CTA
    Given the user views the page
    When the hero section loads
    Then a heading containing "Book a table" is visible
    And a "Book a table" CTA button is visible
```

### Reservation Form

```gherkin
Feature: Reservation Form
  Scenario: Form displays all fields
    Given the reservation form is visible
    Then Name, Phone, Date, Time, and Person fields are displayed
    And a "Book a table" submit button is visible

  Scenario: User can fill and submit the form
    Given the reservation form is visible
    When the user fills in Name, Phone, Date, Time, and selects Person count
    And clicks "Book a table"
    Then the form does not navigate away
```

### Menu

```gherkin
Feature: Menu Section
  Scenario: Menu displays tabbed content
    Given the menu section is visible
    Then tabs for Main, Dessert, and Drinks are displayed
    And Main tab items are shown by default

  Scenario: Switching tabs shows different items
    Given the menu section is visible
    When the user clicks the Dessert tab
    Then dessert menu items are displayed
    When the user clicks the Drinks tab
    Then drink menu items are displayed
```

### Testimonials

```gherkin
Feature: Testimonials
  Scenario: Testimonials carousel displays reviews
    Given the testimonials section is visible
    Then a testimonial with author name and star rating is displayed
    And navigation buttons are available

  Scenario: User can navigate between testimonials
    Given the testimonials section is visible
    When the user clicks next
    Then a different testimonial is shown
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a link to https://www.componentdock.com/ is displayed
    And the link text mentions "Component Dock"

  Scenario: Footer shows business info
    Given the footer is visible
    Then Opening Hours, Contact Information, and Newsletter sections are displayed
```

## Verification Checklist

- [ ] Navbar is sticky on scroll, collapses to hamburger on mobile
- [ ] Hero displays heading and CTA with bg image overlay
- [ ] Reservation form has all fields and is functional
- [ ] About section has two-column layout
- [ ] Menu section has 3 tabs (Main/Dessert/Drinks) with items
- [ ] Parallax section has bg image with overlay
- [ ] Specialties grid shows 4 dishes with prices
- [ ] Testimonials carousel with star ratings and navigation
- [ ] Blog section shows 3 cards
- [ ] Instagram grid shows 5 images
- [ ] Footer has 4 columns + Component Dock link
- [ ] Font loaded: Muli (Google Fonts)
- [ ] Brand color #F96D00 used consistently
- [ ] All images use picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage
- [ ] Typecheck + lint pass
