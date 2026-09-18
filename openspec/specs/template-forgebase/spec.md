# Template: ForgeBase (Industrial / Engineering)

## Purpose

Recreation of the ColorLib **Industry** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `industry`
- **ColorLib page:** https://colorlib.com/wp/template/industry/
- **Live preview:** https://preview.colorlib.com/theme/industry/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/industry-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#fab700` (golden yellow) | Banner background, CTA buttons, accent elements, hexagon icons |
| Secondary accent | `#4cd3e3` (cyan/teal) | Feature icons, secondary button colors |
| Text primary | `#222222` | Headings, body text |
| Text muted | `#777777` | Secondary text, descriptions |
| Background alt | `#f9f9ff` | Alternating section backgrounds (light blue-gray) |
| Background white | `#ffffff` | Main content background |
| Font family | `"Poppins", sans-serif` | Loaded via Google Fonts CDN |
| Button style | `.primary-btn` / `.genric-btn` | Golden yellow fill buttons, rounded corners |
| Hero | Full-width section with background image, dark overlay, yellow CTA | |
| Hexagon icons | `.hb-sm` hexagon shape | Used for service/feature icons in hexagonal containers |
| Section spacing | Bootstrap `section-gap` (~80px vertical padding) | |

## Gherkin requirements

### Navbar
```gherkin
Feature: Navbar

  Scenario: Sticky header with logo and nav links
    Given the user is on the page
    Then a sticky navbar is visible at the top
    And the nav links are: Home, About, Service, Projects, Blog (submenu), Contact, Elements
    And a phone number (+880 012 3654 896) and email are displayed in the top bar

  Scenario: Mobile hamburger menu
    Given the viewport is narrow (< 768px)
    When the user taps the hamburger icon
    Then the navigation menu slides open with all links visible
```

### Hero / Banner
```gherkin
Feature: Hero Banner

  Scenario: Hero section displays on load
    Given the user is on the page
    Then a full-width hero section with a background image and dark overlay is visible
    And the subheading reads "Don't look further, here is the key"
    And the heading reads "Industry" (or similar)
    And a golden yellow (#fab700) "Get Started" CTA button is displayed
```

### Category / Services
```gherkin
Feature: Category Section

  Scenario: Three hexagonal service cards
    Given the user scrolls past the hero
    Then three service cards are displayed in a row
    And each card has a hexagonal icon container, title, and description
    And the services are: Maintenance, Residential Service, Commercial Service

  Scenario: Hexagonal icon styling
    Given the category section is visible
    Then the icons are displayed in hexagonal containers with golden yellow (#fab700) borders
```

### About / Request Quote
```gherkin
Feature: About Section

  Scenario: Two-column about with quote form
    Given the user scrolls to the about area
    Then a two-column layout is displayed
    And the left column has heading "Brand new app to blow your mind" and descriptive text
    And the right column has a "Request a Quote" form with golden yellow background
    And the form has a service select dropdown and submit button

  Scenario: Quote form interaction
    Given the quote form is visible
    When the user fills in the form and submits
    Then the form triggers a submission action
```

### Market Sectors
```gherkin
Feature: Market Sectors

  Scenario: Three service sectors
    Given the user scrolls to the service area
    Then the heading reads "Our Capturing Market Sectors"
    And three service items are displayed: Automotive Engineering, Construction & Engineering, Industrial Engineering
    And each item has a title and description

  Scenario: Sector card hover
    Given the sector cards are visible
    When the user hovers over a card
    Then the card lifts slightly with a shadow effect
```

### Counter Stats
```gherkin
Feature: Counter Stats

  Scenario: Animated statistics
    Given the user scrolls to the counter section
    Then a dark overlay section is visible
    And four stat items are displayed: 2K+, 5.5K, 959, 367
    And each stat has an animated count-up number

  Scenario: Number animation on scroll
    Given the counter section enters the viewport
    When the section becomes visible
    Then the numbers animate from 0 to their target values
```

### Projects
```gherkin
Feature: Projects Section

  Scenario: Project gallery
    Given the user scrolls to the projects area
    Then the heading reads "Latest Finished Projects"
    And four project images are displayed in a grid
    And each image is clickable (lightbox/magnific popup)

  Scenario: Project image hover
    Given the project images are visible
    When the user hovers over an image
    Then an overlay appears with the image title
```

### Testimonials / Feedback
```gherkin
Feature: Testimonials

  Scenario: Customer feedback carousel
    Given the user scrolls to the feedback area
    Then a dark overlay section is visible
    And the heading reads "Enjoy our Client's Feedback"
    And a carousel shows customer testimonials with photos, names, and review text
    And a video play button is available for a video testimonial

  Scenario: Video play button
    Given the feedback section is visible
    When the user clicks the play button
    Then a YouTube video opens in a lightbox/modal
```

### Blog
```gherkin
Feature: Blog Section

  Scenario: Three blog post cards
    Given the user scrolls to the blog area
    Then the heading reads "Latest posts from our Blog"
    And three blog cards are displayed in a row
    And each card has an image, author name ("Mark Wiens"), date, title, and description

  Scenario: Blog card hover
    Given the blog cards are visible
    When the user hovers over a card
    Then the card lifts slightly with a shadow effect
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer layout
    Given the user reaches the page bottom
    Then a footer with three columns is visible: About Us, Newsletter, Follow Us
    And the About Us column has a description and social media icon links
    And the Newsletter column has an email input and subscribe button
    And the Follow Us column has social media icon links (Facebook, Twitter, Dribbble, Behance)

  Scenario: Footer copyright
    Given the footer is visible
    Then the copyright line is present
    And a link to https://www.componentdock.com/ ("Component Dock") is present (replacing ColorLib attribution)
```

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → Categories → About/Quote → Market Sectors → Counter → Projects → Testimonials → Blog → Footer
- [ ] Poppins font loaded via Google Fonts `<link>` in index.html
- [ ] Primary golden yellow `#fab700` used for CTA buttons, banner, accent elements
- [ ] Secondary cyan `#4cd3e3` used for feature icons
- [ ] Text colors `#222222` (primary) and `#777777` (muted) applied correctly
- [ ] Light background `#f9f9ff` on alternating sections
- [ ] Hexagonal icon containers for service cards
- [ ] Quote form with select dropdown in about section
- [ ] Counter section with animated count-up numbers
- [ ] Project gallery with lightbox/magnific popup
- [ ] Testimonials carousel with video play button
- [ ] Responsive: hamburger nav on mobile, stacked layouts on small screens
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No references to ColorLib in app source (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/forgebase-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build succeeds (`npx vite build`)
