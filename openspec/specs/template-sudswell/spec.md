# Template: Sudswell (Cleaning Company)

## Purpose

Sudswell is a single-page cleaning company landing page in the
free-react-templates monorepo. It is a React recreation of the
ColorLib "Cleanex" free template (source:
https://colorlib.com/wp/template/cleanex/), built under a DIFFERENT name
(**Sudswell**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 + jQuery template with a yellow top bar, dark
navbar, full-height hero with background image, appointment booking form,
about section, feature cards, counter stats, service cards with prices,
how-it-works steps, testimonial carousel, pricing table, CTA banner, blog
posts, and a dark image-background footer. Uses Font Awesome 4 icons and
Flaticon custom cleaning icons.

**Preview URL:** https://preview.colorlib.com/theme/cleanex/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cleanex-template.jpg

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| Font family | `"Roboto", Arial, sans-serif` | Google Fonts Roboto 300/400/500/700 |
| Brand primary | `#225ae1` | Blue — links, navbar active, btn-primary bg, service icons |
| Brand secondary | `#fedd32` | Yellow — top bar bg, btn-secondary bg, service-3 badge |
| Heading color | `#161655` | Dark navy — h1–h5, navbar brand text |
| Body text | `#999999` | Gray — paragraph text |
| Body bg | `#ffffff` | White page background |
| Top bar bg | `#fedd32` | Yellow, hidden on mobile |
| Top bar text | `#161655` | Dark navy |
| Top bar accent | `#225ae1` | Blue — phone/email icons |
| Navbar desktop | transparent (over hero) | Scrolled state: white bg + shadow |
| Navbar mobile | `#000000` | Black |
| Navbar brand text | `#161655` (desktop), `#fff` (mobile) | |
| Navbar brand icon | `#225ae1` (desktop), `#fedd32` (mobile) | |
| Nav link color | `#161655` | Hover/active: `#225ae1` |
| btn-primary | bg `#225ae1`, border `#225ae1`, text `#fff` | Hover: transparent bg, `#225ae1` text |
| btn-secondary | bg `#fedd32`, border `#fedd32`, text `#000000` | Hover: transparent bg, `#fedd32` text |
| Button radius | `4px` | |
| Button shadow | `0px 24px 36px -11px rgba(0,0,0,0.09)` | |
| Button font-size | `13px` | Letter-spacing 1px, weight 500 |
| Section bg-light | `#f4f5f0` | Testimonials, blog, bg-light overrides |
| Hero height | `900px` | Full-bleed background image + dark overlay |
| Hero heading | 60px white, weight 600 | |
| Services card radius | `5px` | With box-shadow hover lift |
| Services-2 icon | Radial gradient → `#225ae1` | 60×60px circle |
| Services-3 (steps) | White icon circles on dark image bg | Numbered badge: `#fedd32` bg, `#225ae1` text |
| Pricing active | `.pricing-entry.active` | Highlighted plan (Premium) |
| Footer bg | Background image (`bg_2.jpg`) | Dark overlay, white text |
| Footer bottom bar | `bg-black` class | Copyright with 50% white text |

## Section Order (from live preview DOM)

1. **TopBar** — email, phone, hours, social media icons (yellow bg, hidden mobile)
2. **Navbar** — logo ("Cleanex" → "Sudswell"), nav links (Home, About, Pricing, Services, Blog, Contact), "Request A Quote" button
3. **Hero** — full-height background image, overlay, subheading + h1 + paragraph + CTA button
4. **AppointmentForm** — left column: booking form (First Name, Last Name, Service select, Phone, Date, Time, Submit); right column: about text
5. **WhyChooseUs** — 4 feature cards (Trained Staff, Best Equipment, 100% Warranty, Fast Service) with flaticon icons
6. **Counter** — background image, 4 stats (Projects: 4800, Employees: 14000, Clients: 200, Awards: 71650)
7. **IndustriesWeServe** — left: background image, right: checklist of 8 industries
8. **OurServices** — 6 service cards (Residential, Commercial, Construction, Windows, Carpet, Furniture) with images, prices, hover effect
9. **HowItWorks** — 3 steps on dark image bg (Pick Plan, Set Schedule, Get Things Done)
10. **Testimonials** — carousel of 5 testimonial cards with avatar images
11. **Pricing** — 4 plans (Basic $29, Standard $59, Premium $79, Ultimate $89.50) with feature lists
12. **CTA** — background image, heading + phone/email buttons
13. **Blog** — 3 blog post cards with images, dates, authors, comments
14. **Footer** — logo, recent posts, explore links, contact info, copyright bar

## Gherkin Requirements

### TopBar
```gherkin
Feature: TopBar section
  Scenario: Displays contact info and social links
    Given the user loads the page
    Then a yellow top bar is visible with email, phone, and hours
    And social media icon links are present (Twitter, Facebook, Instagram)

  Scenario: Hidden on mobile
    Given the viewport is below 768px
    Then the top bar is not visible
```

### Navbar
```gherkin
Feature: Navbar
  Scenario: Desktop navigation
    Given the user loads the page on desktop
    Then the navbar is transparent and overlays the hero
    And the brand shows "Sudswell" with a cleaning icon
    And nav links are: Home, About, Pricing, Services, Blog, Contact
    And a "Request A Quote" button is visible

  Scenario: Scrolled state
    Given the user scrolls down past the hero
    Then the navbar gains a white background with shadow
    And nav link text turns dark

  Scenario: Mobile hamburger
    Given the viewport is below 992px
    Then a hamburger menu toggle is visible
    And clicking it reveals the nav links vertically
```

### Hero
```gherkin
Feature: Hero section
  Scenario: Full-height hero with CTA
    Given the user loads the page
    Then a full-height hero section is visible with a background image
    And the heading reads "A Clean Home is A Happy Home"
    And a "Request A Quote" CTA button is present
```

### AppointmentForm
```gherkin
Feature: Appointment booking form
  Scenario: Form fields are present
    Given the user scrolls to the appointment section
    Then a "Book A Service" form is visible
    And fields include: First Name, Last Name, Service dropdown, Phone, Date, Time
    And a "Submit Details" button is present

  Scenario: Service dropdown options
    Given the form is visible
    Then the service dropdown includes: Residential, Commercial, Construction, Windows, Carpet, Furniture, Other
```

### WhyChooseUs
```gherkin
Feature: Why Choose Us
  Scenario: Four feature cards
    Given the user scrolls to the features section
    Then 4 feature cards are displayed in a row
    And each card has an icon, title, and description
```

### Counter
```gherkin
Feature: Counter statistics
  Scenario: Stats are displayed
    Given the user scrolls to the counter section
    Then 4 stats are shown: Projects (4800), Employees (14000), Clients (200), Awards (71650)
    And each stat has an icon and a number with label
```

### IndustriesWeServe
```gherkin
Feature: Industries We Serve
  Scenario: Industry checklist
    Given the user scrolls to the industries section
    Then an image is shown on the left
    And a checklist of 8 industries is shown on the right
```

### OurServices
```gherkin
Feature: Our Services
  Scenario: Six service cards
    Given the user scrolls to the services section
    Then 6 service cards are displayed in a 3-column grid
    And each card has an image, title, price, and hover arrow button
```

### HowItWorks
```gherkin
Feature: How It Works
  Scenario: Three-step process
    Given the user scrolls to the how-it-works section
    Then 3 steps are shown on a dark background image
    And each step has a numbered icon and description
```

### Testimonials
```gherkin
Feature: Testimonials
  Scenario: Carousel of testimonials
    Given the user scrolls to the testimonials section
    Then a carousel of testimonial cards is displayed
    And each card has an avatar, name, location, and quote
```

### Pricing
```gherkin
Feature: Pricing
  Scenario: Four pricing plans
    Given the user scrolls to the pricing section
    Then 4 plans are displayed: Basic ($29), Standard ($59), Premium ($79), Ultimate ($89.50)
    And each plan has a feature list and a "Sign Up" button
    And the Premium plan is highlighted as active
```

### CTA
```gherkin
Feature: CTA banner
  Scenario: Contact call-to-action
    Given the user scrolls to the CTA section
    Then a heading "Need to clean your house? Just hire us!" is visible
    And two buttons are present: phone number and email
```

### Blog
```gherkin
Feature: Blog posts
  Scenario: Three blog entries
    Given the user scrolls to the blog section
    Then 3 blog post cards are displayed
    And each card has an image, date, author, comment count, title, and excerpt
```

### Footer
```gherkin
Feature: Footer
  Scenario: Multi-column footer
    Given the user scrolls to the footer
    Then the footer shows: logo + description, recent posts, explore links, and contact info
    And social media icons are present
    And a copyright bar is at the bottom

  Scenario: Component Dock link
    Given the footer is rendered
    Then a link to https://www.componentdock.com/ is present
```

## Verification Checklist

- [ ] All 14 sections render in correct order
- [ ] Design tokens match: Roboto font, `#225ae1` blue, `#fedd32` yellow, `#161655` navy
- [ ] Top bar hidden on mobile, visible on desktop
- [ ] Navbar transparent on load, white on scroll
- [ ] Hero is full-height with background image
- [ ] Appointment form has all fields including service dropdown
- [ ] Service cards show hover lift effect
- [ ] Counter section has animated numbers (or static fallback)
- [ ] Pricing shows 4 plans with Premium highlighted
- [ ] CTA section has phone + email buttons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md/PR)
- [ ] Footer links to `https://www.componentdock.com/`
