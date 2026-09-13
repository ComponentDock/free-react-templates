# Template: Medvista (Medical/Healthcare)

## Purpose

Recreation of ColorLib **Mediplus** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/mediplus/
- **Preview URL:** https://preview.colorlib.com/theme/mediplus/
- **New name:** `medvista` (apps/medvista, @free-react-templates/medvista)
- **Category:** Medical/Healthcare
- **Design reference:** Screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/mediplus-free-template.jpg

## Design tokens

Extracted from the live preview CSS (`css/style.css`) and inline styles:

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", Arial, sans-serif` | Loaded via Google Fonts / CF fonts |
| Primary brand | `#207dff` | CTA button hover, active nav link, department hover bg, staff position color |
| Bootstrap primary | `#007bff` | `btn-primary` background |
| Bootstrap secondary | `#6c757d` | `btn-secondary` background, contact form submit |
| Accent (service icons, CTA border) | `#fe5f55` | Service icon color, nav CTA border |
| Body text | `#000000` (headings), `#212529` (body) | Dark text on white |
| Light section bg | `#f8f9fa` | Services section, contact info boxes |
| Top bar bg | `#000000` | Black top bar with white text |
| Navbar bg (scrolled) | `#000000` | Dark navbar, white text |
| Overlay | Dark semi-transparent over hero/intro/testimonials/footer | `position: absolute; background: rgba(0,0,0,...)` |
| Button radius | `0.25rem` (Bootstrap default) | Rounded corners on all buttons |
| Hero height | `700px` | Full-height hero with background image |
| CTA button white | `#fff bg, #fff border, #000 text` | `.btn-white` on parallax CTA |

## Gherkin requirements

### TopBar

```gherkin
Feature: Top Bar
  Scenario: Display contact info and auth links
    Given the user visits the page
    Then a black top bar is visible at the very top
    And it shows a phone number with phone icon
    And it shows an email address with paper-plane icon
    And it shows "Sign Up" and "Sign In" links on the right

  Scenario: Hidden on mobile
    Given the user is on a viewport < 992px wide
    Then the top bar is hidden
```

### Navbar

```gherkin
Feature: Navbar
  Scenario: Display navigation links
    Given the user visits the page
    Then the navbar shows the brand "Medvista"
    And it has nav links: Home, About, Department, Doctors, Blog, Contact
    And it has an "Appointment" CTA button with coral (#fe5f55) border

  Scenario: Sticky dark navbar on scroll
    Given the user scrolls past the hero
    Then the navbar becomes sticky with a dark (#000) background
    And the brand and nav links are white text

  Scenario: Mobile hamburger menu
    Given the user is on a viewport < 992px wide
    Then a hamburger toggle button is visible
    And clicking it expands the nav links vertically
```

### Hero

```gherkin
Feature: Hero Section
  Scenario: Full-height hero with background image
    Given the user visits the page
    Then a full-height hero section is displayed with a background image
    And a dark semi-transparent overlay covers the image
    And it shows "Welcome to Medvista" as a small uppercase subheading
    And it shows "We are here for your Care" as the main heading
    And it shows a paragraph of descriptive text
    And it shows a "Make an appointment" primary button

  Scenario: Hero text positioned left
    Given the user visits the page
    Then the hero text content is left-aligned within the left half of the hero
```

### About

```gherkin
Feature: About Section
  Scenario: Two-column about layout
    Given the user scrolls to the about section
    Then a left column shows a background image
    And a right column shows the heading "We Are Medvista A Medical Clinic"
    And it shows two paragraphs of descriptive text
    And it shows "Make an appointment" and "Contact us" buttons side by side
```

### Services

```gherkin
Feature: Services Section
  Scenario: 2x2 service grid with appointment form
    Given the user scrolls to the services section
    Then a light (#f8f9fa) background section is displayed
    And the left side shows "Our Services" heading
    And a 2x2 grid shows 4 service cards: Emergency Services, Qualified Doctors, Outdoors Checkup, 24 Hours Service
    And each service card has a coral (#fe5f55) icon and a title + description
    And the right side shows a "Free Consultation" form
    And the form has fields: First Name, Last Name, Service select, Phone, Date, Time, Message
    And the form has an "Appointment" submit button (secondary style)

  Scenario: Service card hover
    Given the user hovers over a service card
    Then the icon scales up with a smooth transition
```

### CTA Banner

```gherkin
Feature: CTA Banner
  Scenario: Parallax CTA section
    Given the user scrolls to the CTA banner
    Then a full-width section with a background image and dark overlay is displayed
    And it shows "Your Health is Our Priority" as a large white heading
    And it shows a descriptive paragraph
    And it shows a "Search Places" white outlined button
```

### Departments

```gherkin
Feature: Departments Section
  Scenario: Asymmetric department layout
    Given the user scrolls to the departments section
    Then a full-width container is displayed with no gutters
    And a left column (1/3 width) shows a tall background image
    And a right column (2/3 width) shows a 3-column grid of 9 department cards
    And each department card shows a blue (#207dff) stethoscope icon, department name, and description
    And departments include: Neurology, Surgical, Dental, Ophthalmology, Cardiology, Traumatology, Nuclear Magnetic, X-ray, Cardiology

  Scenario: Department card hover
    Given the user hovers over a department card
    Then the card background becomes blue (#207dff)
    And the text and icon become white
```

### Doctors

```gherkin
Feature: Doctors Section
  Scenario: Doctor cards grid
    Given the user scrolls to the doctors section
    Then it shows the heading "Our Qualified Doctors"
    And a subtitle paragraph is displayed
    And a 4-column grid shows 4 doctor cards
    And each card has a doctor photo, name, specialty, description, and social links (Twitter, Facebook, Google, Instagram)
    And each card has a "Book now" primary button
    And the specialty text is uppercase blue (#207dff) with letter-spacing

  Scenario: Doctor card hover
    Given the user hovers over a doctor card
    Then the photo overlay transitions and the faded description area reveals
```

### Blog

```gherkin
Feature: Blog Section
  Scenario: Blog cards grid
    Given the user scrolls to the blog section
    Then a light (#f8f9fa) background section is displayed
    And it shows "Gets Every Single Updates Here" heading
    And a 3-column grid shows 6 blog cards
    And each card has a background image, meta (date, author, comment count), title, excerpt, and "Read more" primary button

  Scenario: Blog card hover
    Given the user hovers over a blog card image
    Then the image scales or transitions smoothly
```

### Testimonials

```gherkin
Feature: Testimonials Section
  Scenario: Parallax testimonials carousel
    Given the user scrolls to the testimonials section
    Then a full-width section with background image and dark overlay is displayed
    And it shows "Read testimonials" subheading
    And it shows "Our Patient Says" heading
    And a carousel shows testimonial cards
    And each card has a circular user photo, quote icon, testimonial text, patient name, and role
```

### Contact

```gherkin
Feature: Contact Section
  Scenario: Contact info and form
    Given the user scrolls to the contact section
    Then it shows "Contact Us" heading
    And 4 info boxes show: address (map marker icon), phone (phone icon), email (envelope icon), website (globe icon)
    And each info box has a light (#f8f9fa) background with centered icon and text
    And a contact form has fields: Name, Email, Subject, Message
    And the form has a "Send Message" submit button

  Scenario: Map embed
    Given the user scrolls past the contact form
    Then a full-width Google Map embed is displayed
```

### Footer

```gherkin
Feature: Footer
  Scenario: Multi-column footer with parallax
    Given the user scrolls to the footer
    Then a footer with a background image and dark overlay is displayed
    And it has multiple widget columns with headings and lists
    And it shows a social links list (Twitter, Facebook, Google, Instagram)
    And it shows a copyright line
    And it links to https://www.componentdock.com/ ("Component Dock")
```

## Verification checklist

- [ ] Spec folder: `openspec/specs/template-medvista/spec.md`
- [ ] Docs folder: `docs/templates/medvista/`
- [ ] No `apps/` code written (prep stream only)
- [ ] Source slug recorded: `mediplus`
- [ ] Preview URL analyzed: https://preview.colorlib.com/theme/mediplus/
- [ ] Design tokens captured from live CSS
- [ ] All 11 sections documented in Gherkin scenarios
- [ ] New name `medvista` has no collision with existing apps/specs
