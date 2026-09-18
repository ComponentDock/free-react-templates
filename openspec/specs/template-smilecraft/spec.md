# Template: Smilecraft (Dental Clinic)

## Purpose

Recreation of ColorLib's "Dentacare" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

- **Source**: ColorLib "Dentacare" — https://colorlib.com/wp/template/dentacare/
- **Preview**: https://preview.colorlib.com/theme/dentacare/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Medical / Dental Clinic

## Design tokens

Extracted from the live preview's stylesheets (`css/style.css`).

### Fonts

| Role         | Font family                          | Weights        |
| ------------ | ------------------------------------ | -------------- |
| Body / UI    | Work Sans, sans-serif                | 300, 400, 700  |

Use Google Fonts `<link>` for Work Sans.

### Colors

| Token               | Hex / Value           | Usage                                        |
| ------------------- | --------------------- | -------------------------------------------- |
| primary             | `#78d5ef` (light blue)| Buttons, links, section accents              |
| price blue          | `#2f89fc` (blue)      | Pricing amounts, parallax gradient start     |
| gradient teal       | `#2cbcbc` (teal)      | Parallax gradient end, secondary accent      |
| gradient green      | `#00dc94` (green)     | Section overlay gradient end                 |
| background          | `#FFFFFF` (white)     | Main content sections                        |
| dark brown          | `#3c312e`             | Dark section backgrounds                     |
| footer bg           | `#191919` (charcoal)  | Footer background                            |
| text primary        | `#212529`             | Body text                                    |
| text muted          | `#6c757d`             | Secondary text                               |
| hero overlay        | `rgba(0,0,0,0.2)`    | Light overlay on hero images                 |
| hero text           | `#FFFFFF`             | Hero headings and body text                  |
| hero body           | `rgba(255,255,255,0.8)` | Hero paragraph text                       |
| border light        | `#f0f0f0`             | Pricing card borders                         |
| border table        | `#dee2e6`             | Table borders                                |
| footer text         | `rgba(255,255,255,0.7)` | Footer paragraph and link text            |
| footer heading      | `#FFFFFF`             | Footer section headings                      |
| footer link hover   | `#FFFFFF`             | Footer link hover                            |
| light bg            | `#f8f9fa`             | Light section backgrounds                    |

### Buttons

- **Primary** (`.btn-primary`): bg `#78d5ef`, border `#78d5ef`. Hover → darker shade.
- **Footer primary**: white bg, white border (inverted for dark footer).
- **Appointment form submit**: No border-radius (square), bottom border style.

### Layout

- **Navbar**: Transparent overlay on hero (absolute positioned, desktop). Black bg on mobile. Logo "DentaCare" white. Nav links white, 13px, uppercase.
- **Hero**: Owl Carousel, 700px height, background images with light black overlay (0.2 opacity). Centered white text: 40px heading + 20px paragraph with breadcrumbs above.
- **Emergency/Hours strip**: Dark brown bg (`#3c312e`), two columns: Emergency Cases (phone) + Opening Hours.
- **Appointment form**: Dark bg with form fields (name, phone, date, time, dropdown). White text, bottom-border inputs.
- **Services**: "Our Service Keeps you Smile" heading, 4-column grid (Teeth Whitening, Teeth Cleaning, Quality Brackets, Modern Anesthetic).
- **About section**: "Dentacare with a personal touch" heading, image left + text right with 3 feature cards (Well Experience Dentist, High Technology Facilities, Comfortable Clinics).
- **Team**: "Meet Our Experience Dentist" heading, 4-column grid of dentist cards (Tom Smith, Mark Wilson, Patrick Jacobson, Ivan Dorchsner).
- **Achievements**: Counter/stats section with gradient bg (blue→teal).
- **Pricing**: 4 cards (Basic, Standard, Premium, Platinum). Light border, blue price. Premium has gradient bg overlay (blue→teal).
- **Newsletter**: "Subscribe to our Newsletter" with email input.
- **Testimonials**: "Testimony" heading, carousel of reviews.
- **Blog**: "Latest Blog" heading, 3-column blog cards.
- **Footer**: Dark bg (#191919), 4 columns (About, Quick Links, Services, Newsletter). Copyright bar.

### Section backgrounds

| Section              | Background                                    |
| -------------------- | --------------------------------------------- |
| Body                 | `#FFFFFF`                                     |
| Navbar (desktop)     | Transparent (over hero)                       |
| Navbar (mobile)      | `#000000`                                     |
| Hero                 | Image + `rgba(0,0,0,0.2)` overlay             |
| Emergency/Hours      | `#3c312e` (dark brown)                        |
| Services             | White                                         |
| About                | White                                         |
| Team                 | `#f8f9fa` (light)                             |
| Achievements         | Gradient `#2f89fc` → `#2cbcbc`                |
| Pricing              | White                                         |
| Newsletter           | Gradient `#2f89fc` → `#00dc94` (blue→green)  |
| Testimonials         | `#f8f9fa` (light)                             |
| Blog                 | White                                         |
| Footer               | `#191919` (charcoal)                          |

## Gherkin requirements

```gherkin
Feature: Smilecraft dental clinic website

  Background:
    Given the user loads the Smilecraft page

  Scenario: Transparent navbar overlays hero
    Then a transparent navbar is positioned over the hero
    And the logo "Smilecraft" is shown in white
    And nav links appear: Home, About, Services, Doctors, Pricing, Blog, Contact
    And on mobile the navbar becomes black with hamburger toggle

  Scenario: Hero carousel displays
    Then a full-width hero carousel shows background images
    And each slide has a light dark overlay (0.2 opacity)
    And each slide shows white heading text and paragraph
    And breadcrumbs appear above the heading

  Scenario: Emergency and hours strip
    Then a dark brown strip shows "Emergency Cases" with phone number
    And "Opening Hours" shows the clinic schedule
    And the strip uses brown (#3c312e) background

  Scenario: Appointment form section
    Then an appointment form appears with fields: Name, Phone, Date, Time, Select
    And form inputs have white text with bottom borders
    And a submit button is styled with primary blue

  Scenario: Services section
    Then "Our Service Keeps you Smile" heading is displayed
    And 4 service cards are shown: Teeth Whitening, Teeth Cleaning, Quality Brackets, Modern Anesthetic
    And each card has an icon, heading, and description

  Scenario: About section
    Then "Dentacare with a personal touch" heading is shown
    And an image appears on the left
    And 3 feature cards appear on the right: Well Experience Dentist, High Technology Facilities, Comfortable Clinics

  Scenario: Team section
    Then "Meet Our Experience Dentist" heading is displayed
    And 4 dentist cards are shown with photos and names
    And names are: Tom Smith, Mark Wilson, Patrick Jacobson, Ivan Dorchsner

  Scenario: Achievements counter section
    Then a gradient section (blue→teal) shows achievement counters
    And the gradient goes from #2f89fc to #2cbcbc

  Scenario: Pricing section shows 4 plans
    Then 4 pricing cards are displayed: Basic, Standard, Premium, Platinum
    And each card has a light border (#f0f0f0)
    And prices are shown in blue (#2f89fc)
    And the Premium card has a gradient overlay (blue→teal)

  Scenario: Newsletter section
    Then "Subscribe to our Newsletter" heading is shown
    And a gradient background (blue→green) is displayed
    And an email input with subscribe button is provided

  Scenario: Testimonials section
    Then "Testimony" heading is displayed
    And a carousel of review cards is shown

  Scenario: Blog section
    Then "Latest Blog" heading is shown
    And 3 blog cards are displayed with images and titles

  Scenario: Footer
    Then a dark footer (#191919) is displayed
    And columns show: About, Quick Links, Services, Newsletter
    And footer links point to Component Dock
    And a copyright bar is shown

  Scenario: Responsive behavior
    When the viewport is below 992px
    Then the navbar switches to mobile hamburger
    And multi-column grids stack to fewer columns
```

## Verification checklist

- [ ] Transparent navbar over hero (desktop), black navbar (mobile)
- [ ] Hero carousel with background images, light overlay, white text
- [ ] Emergency/Hours dark brown strip
- [ ] Appointment form with dark bg, white text inputs
- [ ] Services 4-column grid (Teeth Whitening, etc.)
- [ ] About section with image + feature cards
- [ ] Team 4-column dentist grid
- [ ] Achievements gradient counter section
- [ ] Pricing 4 cards (Basic/Standard/Premium/Platinum)
- [ ] Newsletter gradient section (blue→green)
- [ ] Testimonials carousel
- [ ] Blog 3-column grid
- [ ] Dark footer (#191919) with columns + Component Dock link
- [ ] Brand blue #78d5ef / #2f89fc used consistently
- [ ] Work Sans font loaded
- [ ] Responsive at 992px breakpoint
- [ ] No ColorLib references in app code
