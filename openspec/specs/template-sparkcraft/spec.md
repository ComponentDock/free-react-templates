# Template: SparkCraft (Creative Agency / Inspiration)

## Purpose

Recreation of the ColorLib **Inspire** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `inspire`
- **ColorLib page:** https://colorlib.com/wp/template/inspire/
- **Live preview:** https://preview.colorlib.com/theme/inspire/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/inspire-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#1daff3` (bright cyan/blue) | CTA buttons, links, accent elements |
| Primary hover | `#30b6f4` (lighter blue) | Button hover states |
| Text primary | `#000000` (black) | Headings, body text |
| Background white | `#ffffff` | Main content background |
| Background light | `#f8f9fa` (Bootstrap light) | Services section background |
| Font family | `"Rubik", sans-serif` | Loaded via Google Fonts CDN (weights 300, 400, 700) |
| Button style | `.btn.btn-primary` | Bright blue fill, white text |
| Hero | Full-width with background image, dark overlay, centered text | AOS fade-up animations |
| Section spacing | Standard Bootstrap section padding | |

## Gherkin requirements

### Navbar
```gherkin
Feature: Navbar

  Scenario: Transparent sticky navbar
    Given the user is on the page
    Then a transparent navbar is visible over the hero
    And the nav links are visible on the right side
    And the navbar becomes opaque on scroll

  Scenario: Mobile hamburger menu
    Given the viewport is narrow (< 992px)
    When the user taps the hamburger icon
    Then the mobile navigation menu slides open
```

### Hero
```gherkin
Feature: Hero Section

  Scenario: Hero displays on load
    Given the user is on the page
    Then a full-width hero section with a background image is visible
    And the heading reads "We Inspire You To Create Great Things"
    And a descriptive paragraph is displayed below the heading
    And a play button for a Vimeo video is available

  Scenario: Video play button
    Given the hero section is visible
    When the user clicks the play button
    Then a Vimeo video opens in a lightbox/modal
```

### Services v1
```gherkin
Feature: Services Grid

  Scenario: Four service cards
    Given the user scrolls past the hero
    Then a light gray (#f8f9fa) background section is visible
    And four service cards are displayed: Inspire, Create, Innovate, Publish
    And each card has an icon, title, and a "See All Services" link

  Scenario: Service card hover
    Given the service cards are visible
    When the user hovers over a card
    Then the card lifts slightly with a shadow effect
```

### Why Are We Awesome
```gherkin
Feature: Why Are We Awesome

  Scenario: Awesome section with description
    Given the user scrolls to the awesome area
    Then the heading reads "Why Are We Awesome?"
    And a descriptive paragraph is displayed

  Scenario: Services v2 list
    Given the awesome section is visible
    Then four service items are displayed in a 2-column grid
    And each item has an icon, title, and description
    And the services are: Inspire Photography, Find it here, Inspire Photography, Fly Your Dreams
```

### Our Concept
```gherkin
Feature: Our Concept

  Scenario: Concept section with highlighted text
    Given the user scrolls to the concept area
    Then the heading reads "Our Concept"
    And a paragraph with highlighted text is displayed
    And a "Get started" blue button is available

  Scenario: Get started button hover
    Given the concept section is visible
    When the user hovers over the "Get started" button
    Then the button shows a hover state (darker blue)
```

### Testimonials
```gherkin
Feature: Testimonials

  Scenario: Testimonial carousel
    Given the user scrolls to the testimonials area
    Then the heading reads "Testimonials"
    And a carousel displays customer photos
    And navigation dots or arrows are present

  Scenario: Testimonial auto-advance
    Given the testimonials section is visible
    When the user waits
    Then the carousel automatically advances to the next testimonial
```

### Share / CTA
```gherkin
Feature: Share Section

  Scenario: Social sharing CTA
    Given the user scrolls past the testimonials
    Then a section with heading "Help Us Spread Our Works" is visible
    And a "Share them to social media!" blue button is displayed

  Scenario: Share button click
    Given the share section is visible
    When the user clicks the share button
    Then the button triggers a social sharing action or navigation
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer layout
    Given the user reaches the page bottom
    Then a footer is visible with three columns: Contact, Sources, Links
    And the Contact column has address, phone numbers, and email
    And the Sources and Links columns have navigation links

  Scenario: Footer copyright
    Given the footer is visible
    Then a copyright line is present
    And a link to https://www.componentdock.com/ ("Component Dock") is present (replacing ColorLib attribution)
```

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → Services Grid → Why Awesome → Concept → Testimonials → Share → Footer
- [ ] Rubik font loaded via Google Fonts `<link>` in index.html
- [ ] Primary blue `#1daff3` used for CTA buttons, links, accent elements
- [ ] Text color `#000000` for primary headings
- [ ] AOS (Animate On Scroll) animations on headings and service cards
- [ ] Hero with background image, dark overlay, video play button
- [ ] Services grid with 4 cards in a row
- [ ] Services v2 list with 4 items in 2-column grid
- [ ] Testimonials carousel with auto-advance
- [ ] Responsive: hamburger nav on mobile, stacked layouts on small screens
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No references to ColorLib in app source (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/sparkcraft-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build succeeds (`npx vite build`)
