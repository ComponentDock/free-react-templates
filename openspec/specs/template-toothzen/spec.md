# Template: Toothzen (Dental Clinic)

## Purpose

Recreation of ColorLib's "Dentamax" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

- **Source**: ColorLib "Dentamax" — https://colorlib.com/wp/template/dentamax/
- **Preview**: https://preview.colorlib.com/theme/dentamax/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Medical / Dental Clinic

## Design tokens

Extracted from the live preview's stylesheets (`css/style.css`).

### Fonts

| Role         | Font family                          | Weights        |
| ------------ | ------------------------------------ | -------------- |
| Body / UI    | Roboto, sans-serif                   | 300, 400, 500, 700 |

Use Google Fonts `<link>` for Roboto.

### Colors

| Token               | Hex / Value           | Usage                                        |
| ------------------- | --------------------- | -------------------------------------------- |
| primary blue        | `#007bff`             | Buttons, links, primary accent               |
| dark blue           | `#0f4883`             | Footer headings, logo text, appointment heading |
| teal accent         | `#65d8ea`             | Icon color, logo accent, service icons       |
| icon bg             | `#e1f9fb`             | Service icon circle background               |
| hero gradient peach | `rgba(255,207,148,0.35)` | Hero overlay start (warm peach)          |
| hero gradient tan   | `rgba(227,209,163,0.35)` | Hero overlay middle (tan)                |
| hero gradient teal  | `#65d8ea`             | Hero overlay end (teal)                      |
| background          | `#FFFFFF` (white)     | Main content sections                        |
| text primary        | `#212529`             | Body text                                    |
| text muted          | `#6c757d`             | Secondary text                               |
| footer text         | `#6c8faf`             | Footer paragraph and link text               |
| footer heading      | `#0f4883`             | Footer section headings                      |
| light bg            | `#f8f9fa`             | Light section backgrounds                    |

### Buttons

- **Primary** (`.btn-primary`): bg `#007bff`, border `#007bff`. Standard Bootstrap styling.
- **Custom** (`.btn-custom`): Used in service cards for "Read more" links.

### Layout

- **Navbar**: Transparent overlay on hero (desktop), dark bg on mobile. Logo "DentaMax" with teal accent span. Nav links white.
- **Hero**: Full-width parallax background image with gradient overlay (peach → tan → teal). Two slides: "Achieve Desired Perfect Smile" and "Dentist Services that You Can Trust".
- **Services strip**: 4-column row of service cards (Emergency Service, Qualified Dentist, General Treatment, Online Appointment). Each has teal circular icon (90px, -80px margin-top overlapping hero), white bg, heading, description.
- **Features row**: 4 items (Easy Booking, Experience, Flexible Schedule, Best Price Guarantee). Flex layout with icon + text.
- **Appointment form**: Gradient bg (same peach→tan→teal), heading "Appointment Form" in dark blue uppercase with letter-spacing 3px. Form fields with input styling.
- **About section**: "We Are Dentamax A Dental Clinic" heading, image + text split.
- **Team**: "Our Qualified Dentist" heading, 4-column grid of dentist cards (John Doe × 4).
- **Footer**: Light bg with gradient overlay (0.2 opacity, same peach→teal gradient). Dark blue (#0f4883) headings, teal (#65d8ea) logo accent, muted blue (#6c8faf) text. 4 columns: About, Services, Quick Links, Newsletter.

### Section backgrounds

| Section              | Background                                    |
| -------------------- | --------------------------------------------- |
| Body                 | `#FFFFFF`                                     |
| Navbar (desktop)     | Transparent (over hero)                       |
| Navbar (mobile)      | Dark (black)                                  |
| Hero                 | Image + gradient overlay (peach→tan→teal)     |
| Services strip       | White (cards with teal icon circles)          |
| Features             | White                                         |
| Appointment form     | Gradient (peach→tan→teal)                     |
| About                | White                                         |
| Team                 | `#f8f9fa` (light)                             |
| Footer               | Light bg + gradient overlay (0.2 opacity)     |

## Gherkin requirements

```gherkin
Feature: Toothzen dental clinic website

  Background:
    Given the user loads the Toothzen page

  Scenario: Transparent navbar overlays hero
    Then a transparent navbar is positioned over the hero
    And the logo "Toothzen" is shown in dark blue with teal accent
    And nav links appear in white
    And on mobile the navbar becomes dark with hamburger toggle

  Scenario: Hero parallax displays
    Then a full-width parallax hero shows a background image
    And a gradient overlay (peach→tan→teal) covers the image
    And white heading text is centered
    And two slides cycle with different headings

  Scenario: Services strip
    Then 4 service cards are displayed in a row
    And each card has a teal circular icon overlapping the hero
    And cards are: Emergency Service, Qualified Dentist, General Treatment, Online Appointment
    And each card has white background with heading and description

  Scenario: Features row
    Then 4 feature items are shown: Easy Booking, Experience, Flexible Schedule, Best Price Guarantee
    And each has an icon and text description

  Scenario: Appointment form
    Then the appointment form has a gradient background (peach→tan→teal)
    And the heading "Appointment Form" is in dark blue, uppercase, with letter-spacing
    And form fields include Name, Phone, Date, Time, Service

  Scenario: About section
    Then "We Are Dentamax A Dental Clinic" heading is displayed
    And an image appears alongside descriptive text

  Scenario: Team section
    Then "Our Qualified Dentist" heading is shown
    And 4 dentist cards are displayed in a row
    And each card has a photo and name

  Scenario: Footer
    Then a light footer with subtle gradient overlay is displayed
    And footer headings are in dark blue (#0f4883)
    And footer text is in muted blue (#6c8faf)
    And footer links point to Component Dock
    And a copyright bar is shown

  Scenario: Responsive behavior
    When the viewport is below 992px
    Then the navbar switches to mobile hamburger
    And multi-column grids stack to fewer columns
```

## Verification checklist

- [ ] Transparent navbar over hero (desktop), dark navbar (mobile)
- [ ] Hero parallax with gradient overlay (peach→tan→teal)
- [ ] Services strip with teal circular icons overlapping hero
- [ ] Features row (Easy Booking, Experience, Flexible Schedule, Best Price Guarantee)
- [ ] Appointment form with gradient bg, dark blue heading
- [ ] About section with image + text
- [ ] Team 4-column dentist grid
- [ ] Light footer with gradient overlay + dark blue headings
- [ ] Brand teal #65d8ea and blue #007bff used consistently
- [ ] Roboto font loaded from Google Fonts
- [ ] Responsive at 992px breakpoint
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
