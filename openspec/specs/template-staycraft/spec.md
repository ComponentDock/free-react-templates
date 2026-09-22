# Template: Staycraft (Hotel / Hospitality)

## Purpose

Recreation of the ColorLib **Casahotel** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source slug:** `casahotel`
- **Source URL:** https://colorlib.com/wp/template/casahotel/
- **Preview URL:** https://preview.colorlib.com/theme/casahotel/
- **New name:** `staycraft`
- **Package:** `@free-react-templates/staycraft`
- **Deploy target:** `https://staycraft.free.componentdock.com`

## Design tokens

Extracted from the live preview stylesheet (`css/style.css` + `css/bootstrap.css`):

| Token              | Value                          | Notes                                         |
| ------------------ | ------------------------------ | --------------------------------------------- |
| **Primary brand**  | `#fd7e14` (vivid orange)       | Buttons, selection highlight, links, accents   |
| **Body text**      | `#6c757d` (medium gray)        | Paragraph text, form labels                    |
| **Heading text**   | `#000` (black)                 | h1–h5, nav menu                               |
| **Background**     | `#fff` (white)                 | Default section background                     |
| **Light sections** | Bootstrap `bg-light` (`#f8f9fa`) | Check availability, great offers, events       |
| **Hero overlay**   | `rgba(0, 0, 0, 0.45)`         | Dark semi-transparent overlay on hero image    |
| **Font: headings** | `"Playfair Display", times, serif` | h1–h5, logo, nav menu, hero heading     |
| **Font: body**     | `"Mukta Mahee", arial, sans-serif` | Body text, weight 200                    |
| **Button radius**  | `50px` (pill shape)            | All `.btn` elements                           |
| **Button padding** | `10px 30px`                    | Horizontal 30px, vertical 10px                |
| **Hero heading**   | 80px (40px mobile), bold, `Playfair Display`, white | Centered over hero    |
| **Border radius (testimonial images)** | `50%` (circle) | `rounded-circle` on author photos |
| **Footer bg**      | `#222` or dark (from footer section CSS) | Dark footer                                  |

## Section structure (in order)

1. **Navbar** — absolute-positioned overlay on hero. Logo left (Playfair Display italic, white), hamburger menu right (3 white bars). Mobile: full-screen white overlay nav with large Playfair Display links.
2. **Hero** — full-viewport height background image with dark overlay (`rgba(0,0,0,0.45)`). Centered white heading: "Enjoy A Luxury Experience". Mouse scroll-down icon at bottom.
3. **Check Availability** — `bg-light` section. Centered heading "Check Availability". 4-column form: Check In (date picker icon), Check Out (date picker icon), Adults (select), Children (select), plus "Check Availability" CTA button (pill, orange).
4. **Welcome / About** — Two-column layout (image left ~55%, text right ~45%). Heading "Welcome *to* Staycraft." with italic "to". Lead paragraph, description, two CTAs: "Read More" (pill, orange) and "See video" (text link with play icon).
5. **Great Offers** — `bg-light` section. Centered heading "Great Offers" + lead text. Two half-width room cards side-by-side: each has an image on one side, pricing ($199/$299 per night with large orange price), room title, description paragraphs, and "Book Now" pill button. Second card mirrors layout (image right, text left). "View All Rooms" centered CTA below.
6. **Gallery Slider** — Centered heading "See The Gallery" + lead. Owl-carousel of 7 hotel images (full-width slider). "View More Photos" link below.
7. **Testimonials** — Centered heading "Testimonial". Owl-carousel of 3+ testimonials. Each: circular author photo, blockquote with quote, author name in italic. Dots navigation.
8. **Events / Blog** — `bg-light` section. Centered heading "Events" + lead. 3-column grid of blog cards: each has image, date meta, and title link.
9. **CTA Banner** — `border-top` section. Two-column: left text ("Make Yourself Comfortable in Any of Our Fully Air-conditioned Rooms"), right "Reserve Now" pill button (orange, large padding).
10. **Footer** — Dark background. 4-column layout: two link columns, contact info (address/phone/email with orange icons), newsletter signup form. Bottom row: copyright left, social icons right (TripAdvisor, Facebook, Twitter).

## Gherkin requirements

### Navbar

```gherkin
Feature: Navbar
  Scenario: Logo displays correctly
    Given the page loads
    Then the logo "Staycraft" is visible in the top-left
    And the logo uses Playfair Display font in white

  Scenario: Hamburger menu toggles on mobile
    Given the viewport is mobile-width
    When the user clicks the hamburger icon
    Then a full-screen navigation overlay appears
    And navigation links are displayed in large Playfair Display text
    When the user clicks the close button or a link
    Then the overlay closes
```

### Hero

```gherkin
Feature: Hero section
  Scenario: Hero renders with heading and scroll icon
    Given the page loads
    Then a full-viewport hero image is displayed
    And a dark semi-transparent overlay covers the image
    And the heading "Enjoy A Luxury Experience" is centered in white
    And a mouse scroll-down icon is visible at the bottom center

  Scenario: Scroll icon links to availability section
    Given the hero section is visible
    When the user clicks the scroll-down mouse icon
    Then the page scrolls smoothly to the check availability section
```

### Check Availability

```gherkin
Feature: Check Availability form
  Scenario: Form displays all fields
    Given the check availability section is visible
    Then a "Check Availability" heading is shown
    And form fields are displayed: Check In, Check Out, Adults, Children
    And an orange "Check Availability" pill button is shown

  Scenario: Form fields are interactive
    Given the check availability section is visible
    When the user selects a check-in date
    Then the check-in field updates with the selected date
    When the user selects a number of adults
    Then the adults field updates with the selection
```

### Welcome / About

```gherkin
Feature: Welcome section
  Scenario: Welcome section displays with image and text
    Given the page loads
    Then a welcome section is visible with a hotel image on one side
    And a heading "Welcome to Staycraft." is shown (italic "to")
    And a lead paragraph and description text are visible
    And a "Read More" pill button and a "See video" link are shown
```

### Great Offers

```gherkin
Feature: Great Offers section
  Scenario: Room cards display with pricing
    Given the great offers section is visible
    Then two room cards are displayed side by side
    And each card shows an image, price ($199/$299 per night), room title, description
    And each card has a "Book Now" pill button

  Scenario: View All Rooms button is visible
    Given the great offers section is visible
    Then a centered "View All Rooms" pill button is shown below the cards
```

### Gallery

```gherkin
Feature: Gallery slider
  Scenario: Gallery displays images in a carousel
    Given the gallery section is visible
    Then a "See The Gallery" heading is shown
    And a carousel displays multiple hotel images
    And a "View More Photos" link is visible below the carousel
```

### Testimonials

```gherkin
Feature: Testimonials
  Scenario: Testimonials display with author info
    Given the testimonial section is visible
    Then a "Testimonial" heading is shown
    And testimonial cards display circular author photos
    And each card shows a quoted text and author name in italic
    And carousel navigation dots are visible
```

### Events / Blog

```gherkin
Feature: Events section
  Scenario: Blog cards display in a grid
    Given the events section is visible
    Then an "Events" heading is shown
    And three blog cards are displayed in a row
    And each card shows an image, date, and title
```

### CTA Banner

```gherkin
Feature: CTA banner
  Scenario: Reserve Now call to action
    Given the CTA banner section is visible
    Then text reads "Make Yourself Comfortable in Any of Our Fully Air-conditioned Rooms"
    And an orange "Reserve Now" pill button is displayed on the right
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer displays links and contact info
    Given the footer is visible
    Then four columns are shown: two link lists, contact info, and newsletter signup
    And contact info includes address, phone, and email with orange icons
    And a newsletter email input and submit button are shown
    And a copyright line is displayed
    And social icons (TripAdvisor, Facebook, Twitter) are shown
    And a "Component Dock" attribution link is present

  Scenario: Footer links are functional
    Given the footer is visible
    When the user clicks a navigation link
    Then the page scrolls to or navigates to the target section
```

## Verification checklist

- [ ] All 10 sections rendered in correct order
- [ ] Navbar: logo (Playfair Display, white), hamburger toggle works
- [ ] Hero: full-viewport, dark overlay, heading centered, scroll icon functional
- [ ] Check Availability: all 4 form fields + orange pill button
- [ ] Welcome: 2-column layout, italic "to", Read More + See video
- [ ] Great Offers: 2 room cards with pricing, Book Now buttons, View All Rooms
- [ ] Gallery: carousel with images, View More Photos link
- [ ] Testimonials: circular author images, quotes, dots navigation
- [ ] Events: 3-column blog grid with images, dates, titles
- [ ] CTA Banner: text + Reserve Now button
- [ ] Footer: 4 columns, contact info, newsletter, copyright, social icons, Component Dock link
- [ ] Design tokens match: `#fd7e14` orange, Playfair Display headings, Mukta Mahee body, pill buttons
- [ ] Responsive: mobile hamburger nav, stacked columns on small screens
- [ ] No ColorLib references in app code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` = `staycraft.free.componentdock.com`
- [ ] `homepage` in package.json = `https://staycraft.free.componentdock.com`
