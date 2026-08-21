# Template: Loadwise (Logistics & Transportation)

## Purpose

Recreation of the ColorLib **Logistic** template (source: https://colorlib.com/wp/template/logistic/, preview: https://preview.colorlib.com/theme/logistic/) as a modern React + Tailwind single-page marketing site for logistics, freight, and transportation businesses.

**Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library (100% coverage)

**Design category**: Business / Industrial / Logistics

**New name**: Loadwise (never reuse the ColorLib source name "Logistic")

---

## Design Tokens (extracted from preview stylesheet)

### Colors

| Token                         | Hex                                                               | Usage                                                              |
| ----------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------ |
| `--color-brand-primary`       | `#F02930`                                                         | Primary buttons, accents, hover states, header border, back-to-top |
| `--color-brand-primary-hover` | `#db2228`                                                         | Button hover backgrounds                                           |
| `--color-brand-dark`          | `#232F55`                                                         | Headings (h1–h6), body text, navbar links                          |
| `--color-brand-light`         | `#7EA0FF`                                                         | Section subtitle/label (e.g., "Our Services" prefix)               |
| `--color-text-body`           | `#232F55`                                                         | Paragraph text (same as dark)                                      |
| `--color-text-muted`          | `#635c5c`                                                         | Secondary links, placeholder text                                  |
| `--color-text-light`          | `#A2A6B2`                                                         | Header social icons, secondary meta                                |
| `--color-bg-light`            | `#F1FBFF`                                                         | Section backgrounds (gray-bg), hero overlay light areas            |
| `--color-bg-white`            | `#ffffff`                                                         | Card backgrounds, hero right panel, testimonial area               |
| `--color-bg-dark`             | `#232F55`                                                         | Footer background, submit button hover background                  |
| `--color-border-light`        | `#eceff8`                                                         | Horizontal rules, divider lines                                    |
| `--color-border-input`        | `#eaeaea`                                                         | Input borders, nice-select borders                                 |
| `--color-overlay-gradient`    | `linear-gradient(to bottom, rgba(139,129,129,0.4) … transparent)` | Hero slider overlay (`.hero-overly1::before`)                      |

### Typography

| Token                     | Value                                                      |
| ------------------------- | ---------------------------------------------------------- |
| `--font-family-base`      | `"Raleway", sans-serif` (weights 200–900 via Google Fonts) |
| `--font-family-heading`   | `"Raleway", sans-serif` (same family, weight 500–900)      |
| `--font-size-base`        | `16px`                                                     |
| `--line-height-base`      | `1.4` (body), `30px` (paragraphs)                          |
| `--font-weight-normal`    | `400`                                                      |
| `--font-weight-medium`    | `500`                                                      |
| `--font-weight-semibold`  | `600`                                                      |
| `--font-weight-bold`      | `700`                                                      |
| `--font-weight-extrabold` | `900` (hero h1)                                            |

### Spacing & Layout

| Token                        | Value                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------- |
| `--section-padding-y`        | `120px` top / `100px` bottom (desktop)                                        |
| `--section-padding-y-tablet` | `100px` / `90px`                                                              |
| `--section-padding-y-mobile` | `70px` / `40px`                                                               |
| `--footer-padding-top`       | `80px`                                                                        |
| `--container-max`            | `container-fluid` (full width with generous gutters)                          |
| `--header-height`            | Implicit via padding: `28px` vertical on nav links                            |
| `--hero-min-height`          | `850px` (desktop), `600px` (tablet), `500px` (small tablet), `750px` (mobile) |

### Border Radius

| Token             | Value                                           |
| ----------------- | ----------------------------------------------- |
| `--radius-none`   | `0px` (primary buttons, border-btn, header-btn) |
| `--radius-sm`     | `5px` (submit-btn, nice-select, some cards)     |
| `--radius-pill`   | `25px` (nice-select)                            |
| `--radius-circle` | `50%` (back-to-top, author images)              |

### Button Variants (from CSS)

| Variant                          | Background            | Border              | Text      | Radius | Padding               | Hover                     |
| -------------------------------- | --------------------- | ------------------- | --------- | ------ | --------------------- | ------------------------- |
| `.btn` (primary)                 | `#F02930` → `#db2228` | none                | `#fff`    | `0`    | `22px 32px`           | scaleY animation          |
| `.border-btn`                    | transparent           | `1px solid #fff`    | `#fff`    | `0`    | `17px 39px`           | bg `#fff`, text `#F02930` |
| `.header-btn2`                   | `#F02930`             | none                | `#fff`    | `0`    | `25px 30px`           | same as primary           |
| `.hero-btn` (border-btn in hero) | transparent           | `1px solid #fff`    | `#fff`    | `0`    | `18px 52px`           | bg `#fff`, text `#F02930` |
| `.submit-btn`                    | `#F02930` → `#232F55` | none                | `#fff`    | `5px`  | `30px 43px`           | scaleX animation          |
| `.submit-btn2`                   | `#F02930`             | none                | `#fff`    | `0`    | `10px 36px` (h: 50px) | —                         |
| `.boxed-btn`                     | `#fff`                | `1px solid #F02930` | `#F02930` | `0`    | `18px 44px`           | bg `#F02930`, text `#fff` |

### Shadows & Effects

| Token               | Value                                                                |
| ------------------- | -------------------------------------------------------------------- |
| `--shadow-sticky`   | `0 10px 15px rgba(25,25,25,0.1)`                                     |
| `--shadow-backtop`  | `0 0 10px 3px rgba(108,98,98,0.2)`                                   |
| `--shadow-submenu`  | `0 0 10px 3px rgba(0,0,0,0.05)`                                      |
| `--transition-base` | `all .3s ease-out` (links, buttons, social icons)                    |
| `--transition-btn`  | `transform 0.5s cubic-bezier(0.5, 1.6, 0.4, 0.7)` (scale animations) |

### Breakpoints (from CSS media queries)

| Name | Range                                                   |
| ---- | ------------------------------------------------------- |
| `xl` | `min-width: 1200px` (and up to 1400px, 1600px variants) |
| `lg` | `992px – 1199px`                                        |
| `md` | `768px – 991px`                                         |
| `sm` | `576px – 767px`                                         |
| `xs` | `max-width: 575px`                                      |

---

## Section Structure (in order, 1:1 from preview)

1. **Header / Navbar** — sticky, logo (two versions: main + sticky), navigation (Home, Services ↓, About, Blog ↓, Contact), social icons (FB, IG, LinkedIn), "Get Free Quote" CTA button
2. **Hero Slider** — 3 slides, each with split layout: left panel (brand red bg, h1 "Give your business a flow", "Our Services" border-btn), right panel (white bg, icon + h2 "Transport quality and excellence to enhance your business"), background images, prev/next arrows
3. **Our Services** — section title "Our Services", 3 service cards in a row (Air Shipping, Logistic Service, Ground Shipping) with image, numbered heading, description
4. **Solutions / Features** — "We have a wide range of solutions for your business", "Learn More" link, 2 feature boxes side-by-side (icon + "Tracking Is Easy", icon + "Multiple Warehouses")
5. **Control / About** — "We give you complete control of your shipments", two "Logistic Solution" blocks (heading + description + "Learn More" link with arrow icon)
6. **Get Free Quote / Contact Form** — heading "Get free quote", phone link, large quote request form with checkboxes (Ocean Freight, Air Freight ✓, Land Transport), cargo type, country of origin, destination, qty, weight, width, height, length, name, email, phone, "Request Quote" submit button
7. **Video Section** — background image, centered play button (YouTube popup)
8. **Client Testimonial** — slider with 2 testimonials (quote, author image, name "Jacson Miller", role "Designer @Colorlib"), prev/next arrows
9. **Map + Address** — Google Maps iframe (Burj Khalifa), address card (NYC address, phone, email, hours)
10. **Footer** — logo, description, social icons (FB, IG, Twitter, Pinterest), "Quick links" (Listing, Submit your Business, About, Blog, Cities), "Company" (Our Team, Privacy Policy, Testimonial, User Stories), copyright line with Colorlib credit (to be replaced with Component Dock link)

---

## Gherkin Requirements + Scenarios

### Feature: Header & Navigation

```gherkin
Feature: Header & Navigation
  As a visitor
  I want a sticky header with navigation and a quote CTA
  So that I can navigate the site and request a quote from any scroll position

  Scenario: Header renders with all elements
    Given the page loads
    Then the header is visible at the top
    And the logo (main version) is displayed
    And the navigation contains links: Home, Services, About, Blog, Contact
    And the Services and Blog items have dropdown submenus
    And social icons for Facebook, Instagram, LinkedIn are present
    And a "Get Free Quote" button with primary styling is displayed

  Scenario: Header becomes sticky on scroll
    Given the page loads
    When the user scrolls down past the hero
    Then the header gains a sticky/fixed position
    And the logo switches to the sticky version (logo2)
    And a subtle box-shadow appears

  Scenario: Navigation links navigate to correct sections/pages
    Given the header is visible
    When the user clicks "Services"
    Then the page navigates to the Services section (or services.html in original)
    When the user clicks "Get Free Quote"
    Then the page scrolls to the quote form section

  Scenario: Social icons have hover rotation effect
    Given the header social icons are visible
    When the user hovers a social icon
    Then the icon rotates 180deg on Y-axis
    And the color changes to brand primary (#F02930)
```

### Feature: Hero Slider

```gherkin
Feature: Hero Slider
  As a visitor
  I want an engaging hero slider with split panels and navigation
  So that I understand the value proposition immediately

  Scenario: Hero renders with three slides
    Given the page loads
    Then the hero section occupies at least 850px height (desktop)
    And three slides exist in the slider
    And each slide has a left panel (red bg) and right panel (white bg)

  Scenario: Slide content matches design
    Given a slide is active
    Then the left panel shows h1 "Give your business a flow"
    And a border-button "Our Services" linking to services
    And the right panel shows an icon and h2 "Transport quality and excellence to enhance your business"
    And each slide has a unique background image

  Scenario: Slider navigation works
    Given the hero slider is visible
    When the user clicks the next arrow
    Then the slider advances to the next slide
    When the user clicks the prev arrow
    Then the slider goes to the previous slide
    And the slider loops infinitely

  Scenario: Hero overlay gradient is present
    Given a slide is active
    Then a gradient overlay (rgba(139,129,129,0.4) → transparent) covers the slide
```

### Feature: Our Services Section

```gherkin
Feature: Our Services Section
  As a visitor
  I want to see the three core services with images and descriptions
  So that I understand what the company offers

  Scenario: Section renders with title and three cards
    Given the page loads and user scrolls to Services
    Then a section title "Our Services" is centered
    And three service cards display in a row (desktop)

  Scenario: Each service card has correct content
    Given the service cards are visible
    Then card 1 shows image, heading "01. Air Shipping", description
    And card 2 shows image, heading "02. Logistic Service", description
    And card 3 shows image, heading "03. Ground Shipping", description
    And each heading is a link (to service detail in original)
    And descriptions use the standard lorem ipsum text from preview
```

### Feature: Solutions / Features Section

```gherkin
Feature: Solutions & Features Section
  As a visitor
  I want to see key solution highlights with icons
  So that I understand the platform capabilities

  Scenario: Section renders with heading and feature boxes
    Given the user scrolls to the solutions section
    Then heading "We have a wide range of solutions for your business" displays
    And a "Learn More" link is present
    And two feature boxes display side-by-side

  Scenario: Feature boxes have icons and titles
    Given the feature boxes are visible
    Then box 1 has an icon and heading "Tracking Is Easy" with description
    And box 2 has an icon and heading "Multiple Warehouses" with description
```

### Feature: Control / About Section

```gherkin
Feature: Control & About Section
  As a visitor
  I want to see the control/benefits messaging with dual solution blocks
  So that I understand the value of shipment control

  Scenario: Section renders with headline and two solution blocks
    Given the user scrolls to this section
    Then headline "We give you complete control of your shipments" displays
    And two "Logistic Solution" blocks appear side-by-side
    And each block has heading, description, and "Learn More " link with arrow icon
```

### Feature: Quote Request Form

```gherkin
Feature: Quote Request Form
  As a potential customer
  I want to submit a detailed quote request
  So that I can get pricing for my shipment

  Scenario: Form renders with all fields
    Given the user scrolls to the quote section
    Then heading "Get free quote" displays
    And phone link "+10(78) 267 3565" is present
    And a form with the following fields renders:
      | Field Group | Fields |
      | Transport Type (checkboxes) | Ocean Freight, Air Freight (pre-checked), Land Transport |
      | Cargo Type | text input |
      | Country of Origin | text input |
      | Destination | text input |
      | QTY | text input |
      | Weight | text input |
      | Width | text input |
      | Height | text input |
      | Length | text input (note: source has typo "LEIGHT") |
      | Name | text input |
      | E-Mail | text input |
      | Phone | text input |
    And a "Request Quote" submit button (submit-btn2 styling)

  Scenario: Form validation and submission
    Given the form is visible
    When the user fills required fields and clicks "Request Quote"
    Then the form submits (in original, posts to contact form handler)
    And appropriate feedback displays
```

### Feature: Video Section

```gherkin
Feature: Video Section
  As a visitor
  I want to watch a promotional video
  So that I can learn more visually

  Scenario: Video section renders with play button
    Given the user scrolls to the video section
    Then a background image covers the section
    And a centered play button (popup-video) is present
    When the user clicks the play button
    Then a YouTube video opens in a lightbox (https://www.youtube.com/watch?v=up68UAfH0d0)
```

### Feature: Client Testimonial

```gherkin
Feature: Client Testimonial Slider
  As a visitor
  I want to see client testimonials
  So that I build trust in the service

  Scenario: Testimonial slider renders
    Given the user scrolls to testimonials
    Then heading "Client Testimonial" displays
    And a slider with 2 testimonials is present
    And prev/next navigation arrows display

  Scenario: Each testimonial has correct content
    Given a testimonial slide is active
    Then it shows a quote paragraph
    And author image, name "Jacson Miller", role "Designer @Colorlib"
```

### Feature: Map & Address

```gherkin
Feature: Map & Address
  As a visitor
  I want to see the company location and contact details
  So that I can find or contact them

  Scenario: Map and address card render
    Given the user scrolls to the map section
    Then a Google Maps iframe embed is present (Burj Khalifa location)
    And an address card on the right shows:
      | Field | Value |
      | Address | New York - 1060, Str. First Avenue 1 |
      | Phone | + (123) 1800-567-8990 |
      | Email | office@example.com |
      | Hours | Mon - Fri: 9:00 - 19:00, Closed on Weekends |
```

### Feature: Footer

```gherkin
Feature: Footer
  As a visitor
  I want a footer with links, social, and branding
  So that I can navigate and connect

  Scenario: Footer renders with all sections
    Given the user scrolls to the footer
    Then the footer displays:
      - Logo (footer version)
      - Description paragraph
      - Social icons: Facebook, Instagram, Twitter, Pinterest
      - "Quick links" column: Listing, Submit your Business, About, Blog, Cities
      - "Company" column: Our Team, Privacy Policy, Testimonial, User Stories
      - Copyright line with current year

  Scenario: Footer links to Component Dock (not Colorlib)
    Given the footer copyright line
    Then the attribution link points to https://www.componentdock.com/
    And reads "Made with Component Dock" or similar
    And does NOT link to colorlib.com
```

### Feature: Responsive Behavior

```gherkin
Feature: Responsive Design
  As a mobile/tablet user
  I want the layout to adapt gracefully
  So that I can use the site on any device

  Scenario: Mobile navbar collapses to hamburger
    Given viewport width < 768px
    Then the main navigation hides
    And a mobile menu toggle appears
    When the toggle is clicked
    Then the mobile menu opens with all nav items

  Scenario: Hero stacks on mobile
    Given viewport width < 576px
    Then hero left and right panels stack vertically
    And hero height adjusts to 750px

  Scenario: Service cards stack on mobile
    Given viewport width < 768px
    Then the 3 service cards stack in a single column

  Scenario: Form fields stack on mobile
    Given viewport width < 576px
    Then quote form fields stack in single column
    And checkboxes remain horizontal where space permits
```

### Feature: Design Token Fidelity

```gherkin
Feature: Design Token Fidelity
  As a developer
  I want the implemented design to match the ColorLib reference tokens
  So that the recreation is visually faithful

  Scenario: Brand colors match exactly
    Given the implemented page
    Then primary buttons use #F02930
    And primary button hover uses #db2228
    And headings use #232F55
    And section subtitles use #7EA0FF
    And light section backgrounds use #F1FBFF

  Scenario: Typography matches Raleway with correct weights
    Given the implemented page
    Then font-family is "Raleway", sans-serif
    And hero h1 uses weight 900
    And section h2 uses weight 700
    And body text uses weight 400, line-height 1.4

  Scenario: Button border-radius matches spec
    Given buttons are rendered
    Then primary buttons have radius 0
    And submit-btn has radius 5px
    And nice-select has radius 25px

  Scenario: Spacing matches section padding scale
    Given sections are rendered
    Then desktop sections have 120px/100px padding
    And tablet sections have 100px/90px padding
    And mobile sections have 70px/40px padding
```

---

## Verification Checklist

- [ ] Header: sticky, dual logo, nav with submenus, social icons with hover rotation, "Get Free Quote" CTA
- [ ] Hero: 3 slides, split panels (red/white), correct copy, background images (picsum placeholders), prev/next arrows, gradient overlay
- [ ] Services: centered title, 3 cards with images, numbered headings, descriptions
- [ ] Solutions: heading, "Learn More", 2 icon+text feature boxes
- [ ] Control/About: headline, 2 "Logistic Solution" blocks with arrow links
- [ ] Quote Form: all 13 fields + 3 checkboxes (Air Freight pre-checked), "Request Quote" button
- [ ] Video: background image, YouTube popup play button
- [ ] Testimonials: slider with 2 slides, quotes, author info, prev/next
- [ ] Map: Google Maps iframe, address card with 5 data lines
- [ ] Footer: logo, description, 4 social icons, 2 link columns, Component Dock copyright link
- [ ] Responsive: mobile hamburger, stacked hero, stacked cards, stacked form
- [ ] Design tokens: all colors, fonts, radii, spacing, shadows, transitions match spec
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md/PR)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images from picsum.photos with deterministic seeds
- [ ] Google Fonts link for Raleway in index.html
- [ ] Icons from lucide-react (not FontAwesome/themify)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] TypeScript strict mode passes
- [ ] ESLint + Prettier pass
- [ ] Build succeeds
- [ ] Knip + Fallow pass (no unused exports/deps)
