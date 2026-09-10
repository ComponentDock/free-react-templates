# Template: RepairHub (Automotive / Auto Repair)

## Purpose

Recreation of ColorLib "Autorepair" free Bootstrap 4 template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source template**: [ColorLib Autorepair](https://colorlib.com/wp/template/autorepair/)
- **Live preview**: https://preview.colorlib.com/theme/autorepair/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/autorepair-free-template.jpg
- **New name**: `repairhub` (app folder `apps/repairhub`, package `@free-react-templates/repairhub`)

## Design Tokens

Extracted from the live preview CSS (`style.css`) and rendered HTML:

| Token                | Value                        | Notes                                      |
| -------------------- | ---------------------------- | ------------------------------------------ |
| Font family          | `Poppins`, Arial, sans-serif | Primary typeface, Google Fonts             |
| Brand color (orange) | `#f79f24`                    | CTAs, accents, highlights (38 occurrences) |
| Primary blue         | `#007bff`                    | Bootstrap primary, button backgrounds      |
| Link/accent blue     | `#064acb`                    | Hyperlink and secondary accent             |
| Dark bg              | `#202020`                    | Counter section, dark panels               |
| Light bg             | `#f8f9fa`                    | Alternating section backgrounds (bg-light) |
| Text primary         | `#000000`                    | Headings, body text                        |
| Text secondary       | `#343a40`, `#212529`         | Subtext, muted content                     |
| Text muted           | `#6c757d`                    | Tertiary text, labels                      |
| White                | `#ffffff`                    | Text on dark backgrounds, cards            |
| Button radius        | `0.25rem` (4px)              | Slightly rounded rectangular buttons       |
| Button padding       | Bootstrap `.btn` defaults    | ~0.375rem 0.75rem                          |

## Visual Design Notes

- Dark navbar at top, full-width background-image hero slider with overlay
- Orange brand color is the primary CTA accent throughout
- Alternating white / light-gray (#f8f9fa) section backgrounds
- Icon cards for services (flaticon automotive icons → use lucide-react equivalents)
- Counter stats strip with dark (#202020) background, white text, orange accents
- Testimonial carousel on light background
- Pricing cards with orange-highlighted price
- Project gallery with image overlays
- Footer: dark background, 4-column layout (brand/about, services links, contact info)

## Gherkin Requirements

### Feature: RepairHub Template

```gherkin
Feature: RepairHub - Auto Repair Service Website
  As a visitor to RepairHub
  I want to see a professional auto repair service website
  So that I can learn about services and book an appointment

  Background:
    Given the user navigates to the RepairHub homepage

  # --- Navbar ---
  Scenario: Navbar displays correctly
    Then the navbar is visible at the top of the page
    And the brand name "RepairHub" is displayed
    And the navigation links include "Home", "About", "Services", "Projects", "Blog", and "Contact"
    And the navbar has a dark background

  Scenario: Navbar scrolls to sections
    When the user clicks "Services" in the navbar
    Then the page scrolls to the Services section
    When the user clicks "Contact" in the navbar
    Then the page scrolls to the Contact/Appointment section

  # --- Hero Slider ---
  Scenario: Hero slider shows first slide
    Then a hero slider is displayed
    And the first slide shows heading "We are best car repair services"
    And the first slide shows subheading "Make your car last longer"
    And the first slide has a "Book an appointment" button

  Scenario: Hero slider shows second slide
    When the slider transitions to the second slide
    Then the second slide shows heading "We care about your car"
    And the second slide shows subheading "It's time to come to repair your car"
    And the second slide has a "Book an appointment" button

  Scenario: Hero slides transition automatically
    Given the hero slider is on slide 1
    When 5 seconds pass without user interaction
    Then the slider transitions to slide 2

  # --- Intro Banner ---
  Scenario: Intro banner displays CTA
    Then the intro banner section is visible below the hero
    And it shows the heading "Are you ready? Let's repair it now!"
    And it has a wrench/repair icon
    And it has a "Book an Appointment" button with orange primary color

  # --- Services Section ---
  Scenario: Services section lists all services
    Then the "Our car services" section is visible
    And the subtitle reads "We offer Services"
    And 6 service items are displayed in a 3-column layout

  Scenario Outline: Each service card renders correctly
    Given the services section is visible
    When the user views the <position> service card
    Then it displays icon, heading "<title>", description text, and "Read more" link

    Examples:
      | position | title            |
      | 1st      | Oil Change       |
      | 2nd      | Tire Change      |
      | 3rd      | Batteries        |
      | 4th      | Engine Repair    |
      | 5th      | Tow Truck        |
      | 6th      | Car Maintenance  |

  # --- About / Stats Section ---
  Scenario: About section shows company description
    Then the about section is visible with heading "We help more than 45 years serving customer car"
    And it has descriptive body text about the company

  Scenario: Stats counter displays correctly
    Then the stats counter strip is visible with dark background
    And 4 stat items are displayed: "Years of Experienced", "Project completed", "Happy Customers", "Award Winning"
    And each stat shows a numeric value

  # --- Appointment Section ---
  Scenario: Appointment form renders correctly
    Then the "Free Consultation" appointment section is visible
    And the form has input fields for name, phone number, date, time, and message
    And the form has a submit button

  Scenario: Appointment form validates required fields
    Given the appointment form is visible
    When the user clicks submit without filling any fields
    Then validation errors are displayed for required fields

  # --- Testimonials Section ---
  Scenario: Testimonials section displays correctly
    Then the "Happy Clients & Feedbacks" section is visible
    And at least 3 testimonial cards are displayed
    And each testimonial shows a quote, client name, and role/title

  # --- Blog Section ---
  Scenario: Blog section shows latest posts
    Then the "Latest news from our blog" section is visible
    And 3 blog post cards are displayed
    And each card shows an image, title, date, and author

  # --- Pricing Section ---
  Scenario: Pricing section displays plans
    Then the "Pricing" section is visible
    And 4 pricing plans are displayed

  Scenario Outline: Each pricing card renders correctly
    Given the pricing section is visible
    Then the plan "<name>" shows price "<price>" and a description
    And each plan has a "Get Started" button

    Examples:
      | name              | price   |
      | First PMS         | $78.98  |
      | Engine Diagnostics | $83.75  |
      | Tow Truck         | $85.00  |
      | Car Wash          | $30.50  |

  # --- Projects Gallery ---
  Scenario: Projects gallery displays correctly
    Then the "Done Projects" section is visible
    And project images are displayed in a grid layout
    And each project has an overlay with title and description

  # --- Footer ---
  Scenario: Footer renders correctly
    Then the footer is visible at the bottom of the page
    And the footer shows the brand name "RepairHub"
    And the footer has a brief about/description text
    And the footer lists service links: "Oil Change", "Batteries", "Tow Truck", "Tire Change", "Engine Repair"
    And the footer shows contact information including phone and email
    And the footer links to https://www.componentdock.com/

  # --- Responsive ---
  Scenario: Page is responsive on mobile
    Given the user views the page on a 375px wide viewport
    Then the navbar collapses into a hamburger menu
    And the hero slider is full-width
    And service cards stack vertically
    And pricing cards stack vertically
    And the footer columns stack vertically
```

## Verification Checklist

- [ ] All 11 sections present in correct order (Navbar → Hero → Intro → Services → About/Stats → Appointment → Testimonials → Blog → Pricing → Projects → Footer)
- [ ] Hero slider auto-plays and transitions between 2 slides
- [ ] Brand color `#f79f24` used for CTAs and accents (via Tailwind theme token)
- [ ] Font Poppins loaded via Google Fonts link in index.html
- [ ] 6 service cards with icon + title + description + "Read more"
- [ ] 4 stats counter items with numbers
- [ ] Appointment form with 5 fields + validation
- [ ] Testimonial carousel with 3+ items
- [ ] 3 blog post cards
- [ ] 4 pricing plans with prices
- [ ] Project gallery with image overlays
- [ ] Footer with brand, services, contact, Component Dock link
- [ ] Responsive layout (mobile hamburger, stacked grids)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] All `picsum.photos` placeholder images used (deterministic seeds)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] `npm run verify:app repairhub` passes
