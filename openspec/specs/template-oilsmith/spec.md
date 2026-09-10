# Template: OilSmith (Automotive Repair)

## Purpose

Recreation of ColorLib "Autorepair" free auto repair website template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template**: [ColorLib Autorepair](https://colorlib.com/wp/template/autorepair/)
- **Live preview**: https://preview.colorlib.com/theme/autorepair/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/autorepair-free-template.jpg
- **New name**: `oilsmith` (app folder `apps/oilsmith`, package `@free-react-templates/oilsmith`)

## Design Tokens

Extracted from the live preview CSS (`style.css`) and rendered HTML:

| Token                 | Value                    | Notes                                                  |
| --------------------- | ------------------------ | ------------------------------------------------------ |
| Font family           | `Poppins`, sans-serif    | Primary typeface, Google Fonts (weights 300–900)       |
| Brand color (amber)   | `#f79f24`               | CTAs, accents, highlights, counters, links (11+ uses)  |
| Bootstrap primary     | `#007bff`               | `.btn-primary` background/border                       |
| Dark bg (nav)         | `#ffffff`               | Navbar light mode (dark on mobile: `#000000`)           |
| Dark counter bg       | `#202020`               | Counter/stats section background                       |
| Footer bg             | `#252525`               | Footer background                                      |
| Light section bg      | `#f8f9fd`, `#e6e6e6`    | Alternating section backgrounds (`.bg-light`)          |
| White                 | `#ffffff`               | Text on dark backgrounds, cards                        |
| Overlay               | `#000000` at 0.4 opacity| Hero slider overlay                                    |
| Button radius         | None (square/rectangular)| Default Bootstrap rectangular buttons                  |
| Accent blue           | `#064acb`               | Secondary accent (8 occurrences in CSS)                |

## Visual Design Notes

- Clean white navbar with black text and amber (#f79f24) underline hover animation
- Full-width hero slider (carousel) with dark image overlays and white text + amber accents
- Intro CTA banner: wrench icon + "Are you ready? Let's repair it now!" + amber CTA button
- Services section: 3-column grid with 6 service cards (Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck, + more) each with flaticon icons
- About section: welcome text + checkmark feature list + side image
- Stats counter strip: dark background (#202020) with amber numbers (Years, Projects, Customers, Awards)
- Appointment/Booking section: split layout — image left, form right with amber overlay
- Testimonials: carousel with user images, quotes, and names
- Blog/News: 3-card grid with images, dates, and excerpts
- Pricing: 3-tier card layout (First PMS, Engine Diagnostics, Tow Truck) with prices and checkmarks
- Projects gallery: grid of completed work images with overlay text
- Footer: dark (#252525) background, 4-column layout (logo + description, services links, contact info, business hours)

## Gherkin Requirements

### Feature: OilSmith Template

```gherkin
Feature: OilSmith - Auto Repair Service Website
  As a visitor to OilSmith
  I want to see a professional auto repair service website
  So that I can learn about services, book appointments, and contact the shop

  Background:
    Given the user navigates to the OilSmith homepage

  # --- Navbar ---
  Scenario: Navbar displays correctly
    Then the navbar is visible at the top of the page
    And the brand name "OilSmith" is displayed
    And the navigation links include "Home", "About", "Services", "Projects", "Blog", and "Contact"
    And the navbar has a white background with dark text

  Scenario: Navbar brand has amber accent
    Then the brand name period "." is displayed in amber (#f79f24)

  Scenario: Navbar link hover shows amber underline
    When the user hovers over a navigation link
    Then an amber (#f79f24) underline appears below the link

  # --- Hero Slider ---
  Scenario: Hero slider displays with overlay
    Then a hero slider is visible below the navbar
    And the hero has a dark overlay (black at 0.4 opacity)
    And the hero text is white

  Scenario: Hero slide 1 shows repair headline
    Then slide 1 displays "We are best car repair services" as the subtitle
    And slide 1 displays "Make your car last longer" as the main heading
    And slide 1 has a "Book an appointment" button

  Scenario: Hero slide 2 shows alternate content
    Then slide 2 displays "We care about your car" as the subtitle
    And slide 2 displays "It's time to come to repair your car" as the main heading
    And slide 2 has a "Book an appointment" button

  Scenario: Hero heading accent word is amber
    Then the accent words in hero headings are displayed in amber (#f79f24)

  # --- Intro CTA Banner ---
  Scenario: Intro CTA banner displays correctly
    Then an intro CTA banner is visible below the hero
    And it displays a wrench icon on the left
    And it displays "Are you ready? Let's repair it now!" as heading text
    And it has a "Book an Appointment" button with amber background

  Scenario: Intro CTA button is clickable
    When the user clicks "Book an Appointment"
    Then the user is navigated to the appointment section

  # --- Services Section ---
  Scenario: Services section displays 6 services in 3 columns
    Then a "Our car services" heading is visible
    And the subheading reads "We offer Services"
    And 6 service cards are displayed in a 3-column grid

  Scenario: Service cards show icon, title, description, and link
    Then each service card has an icon, a heading, a description paragraph, and a "Read more" link

  Scenario: Services include Oil Change, Tire Change, Batteries, Engine Repair, Tow Truck
    Then the services include "Oil change", "Tire Change", "Batteries", "Engine Repair", and "Tow Truck"

  # --- About Section ---
  Scenario: About section displays on light background
    Then the about section has a light gray (#f8f9fd) background
    And it displays "Welcome to OilSmith" as a heading
    And it displays "We help more than 45 years serving customer car" as a tagline

  Scenario: About section has feature checklist
    Then a checklist of features is displayed with checkmark icons

  # --- Stats Counter ---
  Scenario: Counter section displays 4 statistics
    Then 4 statistics are displayed on a dark (#202020) background
    And the statistics are "Years of Experience", "Projects Completed", "Happy Customers", and "Awards Winning"

  Scenario: Counter numbers are animated in amber
    Then the counter numbers are displayed in amber (#f79f24)
    And the counter labels are uppercase and light-colored

  # --- Appointment Form ---
  Scenario: Appointment section has split layout
    Then the appointment section has a left half with an image
    And a right half with amber (#f79f24) overlay background
    And a "Free Consultation" heading is visible

  Scenario: Appointment form has service selector
    Then a "Select services" dropdown is displayed
    And the options include "Change Oil", "Engine Repair", "Battery Replace", "Change Tire", and "Tow Truck"

  Scenario: Appointment form has contact fields
    Then the form includes name, email, date, time, phone number, and message fields

  # --- Testimonials ---
  Scenario: Testimonials section displays on light background
    Then the testimonials section has a light (#f8f9fd) background
    And it displays "Happy Clients & Feedbacks" as heading
    And the subheading reads "Testimonies"

  Scenario: Testimonials carousel shows client feedback
    Then client testimonials are displayed with user images, names, positions, and quotes
    And the carousel has previous/next navigation arrows

  # --- Blog Section ---
  Scenario: Blog section displays 3 blog cards
    Then a "Latest news from our blog" heading is visible
    And 3 blog cards are displayed in a grid
    And each card has an image, author name, date, and article title

  # --- Pricing Section ---
  Scenario: Pricing section shows 3 pricing cards
    Then a "Pricing" heading is visible
    And 3 pricing cards are displayed: "First PMS" ($78.98), "Engine Diagnostics" ($83.75), and "Tow Truck" ($85.00)
    And each card has a description, feature checkmarks, and a "Get Started" button

  # --- Projects Gallery ---
  Scenario: Projects section displays completed work
    Then a "Done Projects" heading is visible
    And completed project images are shown in a grid with overlay labels

  # --- Footer ---
  Scenario: Footer displays on dark background
    Then the footer has a dark (#252525) background
    And the footer brand name is white with an amber period
    And social media links (Twitter, Facebook, Instagram) are displayed

  Scenario: Footer shows contact information
    Then the footer displays the address, phone number, and email
    And the footer shows business hours (Monday-Friday, Saturday, Sunday closures)

  Scenario: Footer has Component Dock link
    Then the footer contains a link to "https://www.componentdock.com/"
    And the link text includes "Component Dock"

  Scenario: Footer services list
    Then the footer lists services: Oil Change, Batteries, Tow Truck, Tire Change, Engine Repair
```

## Verification Checklist

- [ ] Navbar: white bg, dark text, amber hover underlines, brand with amber period
- [ ] Hero: full-width carousel, dark overlay, white text, amber accents, "Book an appointment" CTA
- [ ] Intro CTA: wrench icon, heading text, amber "Book an Appointment" button
- [ ] Services: 3-column grid, 6 service cards with icons + titles + descriptions + "Read more" links
- [ ] About: light bg, welcome heading, feature checklist with checkmarks
- [ ] Counter: dark (#202020) bg, 4 animated stats with amber numbers
- [ ] Appointment: split layout (image left, form right), amber overlay, service dropdown, contact fields
- [ ] Testimonials: light bg, carousel with client photos, names, quotes, nav arrows
- [ ] Blog: 3-card grid with images, dates, titles
- [ ] Pricing: 3 cards with prices, descriptions, checkmarks, "Get Started" buttons
- [ ] Projects: completed work gallery grid with overlay labels
- [ ] Footer: dark (#252525) bg, 4-column layout, services list, contact info, business hours, Component Dock link
- [ ] Design tokens: Poppins font, #f79f24 amber brand, #202020 counter, #252525 footer
- [ ] No ColorLib references in app code (only in spec, TEMPLATES.md, and PR)
- [ ] Footer links to https://www.componentdock.com/
