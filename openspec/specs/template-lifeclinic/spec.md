# Template: LifeClinic (Medical/Healthcare)

## Purpose

Recreation of ColorLib **Medilife** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/medilife/
- **Preview URL:** https://preview.colorlib.com/theme/medilife/
- **New name:** `lifeclinic` (apps/lifeclinic, @free-react-templates/lifeclinic)
- **Category:** Medical/Healthcare
- **Design reference:** Screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/medilife-free-template.jpg

## Design tokens

Extracted from the live preview CSS (`style.css`) and inline styles:

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Roboto", sans-serif` | Single Google Font throughout |
| Primary brand | `#006cff` | Blue — CTA button hover, active nav links, hero indicator dots, emergency area bg |
| Top bar bg | `#081f3e` | Dark navy — top header bar, main header when sticky |
| Top bar text | `#b5b5b5` | Light gray text in top bar |
| Top bar accent | `#006cff` | Blue highlight for "Welcome" span text and phone number |
| CTA button bg | `#ff0000` | Red — appointment CTA button ("For emergencies Click here") |
| CTA button hover | `#006cff` | Blue — on hover CTA inverts to blue bg + white text |
| Main header bg (default) | `rgba(0,108,255,0.5)` | Semi-transparent blue overlay |
| Main header bg (sticky) | `#081f3e` | Solid dark navy on scroll |
| Body text | `#1d1d1d` / `#57595c` / `#5f5f5f` | Dark gray for headings and body |
| Light section bg | `#f5f7f9` | Subtle light gray background for sections |
| Border color | `#536174` / `#b4b4b4` / `#cacaca` | Various grays for form borders, dividers |
| Footer bg | `#020f20` | Very dark navy, almost black |
| Emergency area bg | `#006cff` | Full-width blue banner for emergency contact info |
| Button radius | `0` / `6px` | Sharp corners on CTA button, 6px on form inputs |
| CTA button height | `50px` | Fixed height, uppercase text |
| CTA button text | uppercase, `14px`, `font-weight: 500` | Bold uppercase label |

## Gherkin requirements

### TopBar

```gherkin
Feature: Top Bar
  Scenario: Display welcome message and contact info
    Given the user visits the page
    Then a dark navy (#081f3e) top bar is visible at the very top
    And it shows "Welcome to LifeClinic" with "LifeClinic" highlighted in blue (#006cff)
    And it shows "Opening Hours : Monday to Saturday - 8am to 10pm"
    And it shows a contact phone number highlighted in blue

  Scenario: Hidden on mobile
    Given the user is on a viewport < 768px wide
    Then the top bar text stacks vertically instead of side-by-side
```

### Navbar

```gherkin
Feature: Navbar
  Scenario: Display navigation links
    Given the user visits the page
    Then a semi-transparent blue overlay navbar is visible
    And it shows a logo image on the left
    And it has nav links: Home, Pages (dropdown), About Us, Services, News, Contact
    And it has a red (#ff0000) "For emergencies Click here" CTA button on the right

  Scenario: Sticky dark navbar on scroll
    Given the user scrolls past the hero
    Then the navbar becomes sticky with dark navy (#081f3e) background
    And it has a shadow effect
    And the height reduces

  Scenario: Mobile hamburger menu
    Given the user is on a viewport < 999px wide
    Then a hamburger toggle button is visible
    And clicking it expands the nav links vertically
```

### Hero

```gherkin
Feature: Hero Section
  Scenario: Carousel hero with background images
    Given the user visits the page
    Then a full-width hero carousel is displayed with background images
    And each slide shows "Medical Services that You can Trust 100%" heading
    And each slide shows a descriptive paragraph
    And each slide has a "Discover" CTA link
    And carousel navigation arrows (left/right) are displayed in dark navy boxes
    And carousel dots/indicators are shown at the bottom

  Scenario: Hero carousel auto-plays
    Given the user stays on the page
    Then the hero carousel transitions between slides automatically
    And the active indicator dot is highlighted in blue (#006cff)
```

### Appointment Form

```gherkin
Feature: Appointment Booking Form
  Scenario: Display appointment form
    Given the user scrolls past the hero
    Then an appointment section is displayed with a dark navy (#081f3e) left panel
    And the form shows a heading "Make an Appointment"
    And dropdown fields are provided: Speciality (5 options), Doctors (5 options)
    And a "Make an Appointment" blue (#006cff) submit button is shown
    And contact info is displayed on the right side: hours (Mon-Sat 08:00-21:00, Sunday CLOSED), phone, email, address

  Scenario: Appointment form fields
    Given the user interacts with the appointment form
    Then they can select a speciality from a dropdown
    And they can select a doctor from a dropdown
    And they can click the appointment button
```

### About Us

```gherkin
Feature: About Us Section
  Scenario: Display about content with services
    Given the user scrolls to the about section
    Then a white section with padding is displayed
    And it shows "We always put our patients first" heading
    And it shows a descriptive paragraph
    And a "View the services +" link is provided
    And a 2x2 grid of 4 service items is shown: The Best Doctors, Baby Nursery, Laboratory, Emergency Room
    And each service item has an icon, title, and short description

  Scenario: Service items hover
    Given the user hovers over a service item
    Then the item highlights or transitions smoothly
```

### Cool Facts

```gherkin
Feature: Cool Facts / Stats Counter
  Scenario: Display statistics counters
    Given the user scrolls to the cool facts section
    Then a section with 4 statistics is displayed in a row
    And it shows "5632 Blood donations"
    And it shows "23 k Patients"
    And it shows "25 Specialities"
    And it shows "723 Doctors"
    And each stat has a number and a label below
```

### Gallery

```gherkin
Feature: Gallery Carousel
  Scenario: Display gallery carousel
    Given the user scrolls to the gallery section
    Then an owl-carousel gallery is displayed
    And it shows gallery images in a carousel format
    And a "See More +" button is overlaid on the gallery
```

### Features

```gherkin
Feature: Features Section
  Scenario: Display features content
    Given the user scrolls to the features section
    Then a section with two columns is displayed
    And the left column shows a thumbnail image
    And the right column shows "A new way to treat patients in a revolutionary facility" heading
    And it shows descriptive paragraphs
    And a "View the services +" link is provided
```

### Blog

```gherkin
Feature: Blog Section
  Scenario: Display blog post cards
    Given the user scrolls to the blog section
    Then a section with "Latest News" heading is displayed
    And a 3-column grid shows 3 blog cards
    And each card has a thumbnail image with a date overlay (day + month)
    And each card shows a title, excerpt text, and "3 Comments" link
    And each card has an author attribution

  Scenario: Blog card hover
    Given the user hovers over a blog card image
    Then the image scales or transitions smoothly
```

### Emergency / Helpline

```gherkin
Feature: Emergency Helpline Section
  Scenario: Display emergency contact locations
    Given the user scrolls to the emergency section
    Then a full-width blue (#006cff) banner is displayed
    And it shows "For Emergency calls" heading with a phone icon
    And it shows the phone number "+12-823-611-8721"
    And it shows 4 location cards: London, New Castle, Manchester, Bristol
    And each location card has a phone icon, phone number, email, and address
```

### Footer

```gherkin
Feature: Footer
  Scenario: Multi-column footer
    Given the user scrolls to the footer
    Then a dark navy (#020f20) footer is displayed
    And it has 4 columns of widgets
    And the first column shows a footer logo and social icons (4 links)
    And the second column shows "Latest News" with 3 recent blog post previews
    And the third column shows a "Contact Form" with input fields
    And the fourth column shows a "News Letter" subscription form with email input and subscribe button
    And a bottom bar shows copyright text

  Scenario: Footer social links
    Given the user views the footer
    Then 4 social media icon links are displayed below the logo
```

## Verification checklist

- [ ] Spec folder: `openspec/specs/template-lifeclinic/spec.md`
- [ ] Docs folder: `docs/templates/lifeclinic/`
- [ ] No `apps/` code written (prep stream only)
- [ ] Source slug recorded: `medilife`
- [ ] Preview URL analyzed: https://preview.colorlib.com/theme/medilife/
- [ ] Design tokens captured from live CSS
- [ ] All 10 sections documented in Gherkin scenarios
- [ ] New name `lifeclinic` has no collision with existing apps/specs
