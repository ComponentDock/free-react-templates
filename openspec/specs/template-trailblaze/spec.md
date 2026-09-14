# Template: Trailblaze (Travel / Safari)

## Purpose

Recreation of ColorLib **Safario** — a travel/safari-themed template.
- Source slug: `safario`
- Preview URL: https://preview.colorlib.com/theme/safario/
- Source URL: https://colorlib.com/wp/template/safario/
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token          | Value                       | Usage                               |
| -------------- | --------------------------- | ----------------------------------- |
| Primary        | `#6059f6`                   | Buttons, links, accents             |
| Primary hover  | `#7676ff` / `#201aa3`       | Hover state, dark primary           |
| Text primary   | `#2a2a2a`                   | Headings, body text                 |
| Text muted     | `#999999` / `#888888`       | Secondary text, descriptions        |
| Text light     | `#777777`                   | Subtext                             |
| White          | `#fff`                      | Card backgrounds, button text       |
| Light bg       | `#f0e9ff` / `#fbf9ff`       | Section backgrounds (alt rows)      |
| Very light bg  | `#f8f8ff` / `#ebebff`       | Subtle section tint                 |
| Dark bg        | `#04091e`                   | Footer area                         |
| Font heading   | `Roboto Condensed, sans-serif` | Section titles, headings          |
| Font body      | `Roboto, sans-serif`         | Body text, paragraphs               |
| Radius cards   | `5px`                       | Tour cards, service cards           |
| Radius buttons | `30px` (pill)               | Primary CTA buttons                 |
| Radius images  | `12px`                      | Rounded image corners               |

## Section structure (from preview DOM)

1. **Navbar** — `header.header_area` + `nav.navbar.navbar-expand-lg`
   - Logo (left), nav links (right), hamburger on mobile
   - Links: Home, About, Packages, Elements, News, Contact
2. **Hero Banner** — `section.hero-banner.magic-ball`
   - Full-width background image
   - Overlay text: "Travel More To Discover Yourself"
   - CTA button (pill-shaped, primary)
3. **Popular Services** — `section.section-margin.generic-margin`
   - Heading: "Our Popular Services"
   - 3 service cards in a row: Hotel Booking, Flight Booking, Destination Booking
   - Each card: icon/image + title + description
4. **About Section** — `section.bg-gray.section-padding.magic-ball.magic-ball-about`
   - Two-column layout: image (left) + text content (right)
   - Heading: "Exploration is really the essence of the human spirit"
   - Body text describing the travel company
   - CTA button
5. **Popular Tours** — `section.section-margin.pb-xl-5`
   - Heading: "We offer worldwise tour plan recently"
   - 4 tour cards in a 2×2 grid
   - Each card: background image + overlay + title + price ($65/day)
   - Hover overlay effect
6. **Testimonials** — `section.bg-gray.section-padding.magic-ball.magic-ball-testimonial.pb-xl-5`
   - Owl carousel with testimonial items
   - Each item: avatar + author name + testimonial text
7. **Newsletter** — `section.section-margin`
   - Heading + email input + subscribe button
8. **Footer** — `footer.footer-area`
   - Dark background (#04091e)
   - 4 widget columns: About text, Quick Links, Newsletter, Instagram feed
   - Copyright bar at bottom
   - MUST link `https://www.componentdock.com/` (branded "Component Dock")

## Gherkin requirements

### Navbar
```gherkin
Feature: Trailblaze Navbar

  Scenario: Renders logo and navigation links
    Given the page loads
    Then a navbar is visible at the top
    And the logo text "Trailblaze" is displayed
    And navigation links are present

  Scenario: Mobile hamburger toggle
    Given the viewport is below 992px wide
    When the user clicks the hamburger button
    Then the navigation menu expands
    When the user clicks the hamburger button again
    Then the navigation menu collapses
```

### Hero Banner
```gherkin
Feature: Trailblaze Hero Banner

  Scenario: Displays hero content
    Given the page loads
    Then a full-width hero banner is visible
    And the heading "Travel More To Discover Yourself" is displayed
    And a call-to-action button is present

  Scenario: CTA button is interactive
    Given the hero banner is visible
    When the user hovers over the CTA button
    Then the button shows a hover state
```

### Popular Services
```gherkin
Feature: Trailblaze Popular Services

  Scenario: Displays three service cards
    Given the page loads
    Then 3 service cards are visible
    And each card has a title and description
    And the section heading "Our Popular Services" is displayed
```

### About Section
```gherkin
Feature: Trailblaze About Section

  Scenario: Displays about content with image
    Given the page loads
    Then an about section is visible
    And a heading about exploration is displayed
    And body text describing the service is present
    And an image is displayed alongside the text
    And a CTA button is present
```

### Popular Tours
```gherkin
Feature: Trailblaze Popular Tours

  Scenario: Displays tour cards with pricing
    Given the page loads
    Then 4 tour cards are visible
    And each card shows a destination name and price
    And the section heading about tour plans is displayed

  Scenario: Tour card hover effect
    Given the tour cards are visible
    When the user hovers over a tour card
    Then an overlay effect appears on the card
```

### Testimonials
```gherkin
Feature: Trailblaze Testimonials

  Scenario: Displays testimonials carousel
    Given the page loads
    Then a testimonials section is visible
    And at least one testimonial item is displayed
    And each item has an author name and testimonial text

  Scenario: Testimonial carousel navigation
    Given the testimonials section is visible
    When the user navigates the carousel
    Then different testimonial items are shown
```

### Newsletter
```gherkin
Feature: Trailblaze Newsletter

  Scenario: Displays newsletter signup
    Given the page loads
    Then a newsletter section is visible
    And an email input field is present
    And a subscribe button is present
```

### Footer
```gherkin
Feature: Trailblaze Footer

  Scenario: Displays footer with widget columns
    Given the page loads
    Then a footer is visible at the bottom
    And it contains 4 widget columns
    And the copyright bar is present
    And a "Component Dock" link is present in the footer
```

## Verification checklist

- [ ] All 8 sections render correctly
- [ ] Section order matches preview: Navbar → Hero → Services → About → Tours → Testimonials → Newsletter → Footer
- [ ] Primary color `#6059f6` used for buttons and accents
- [ ] Font families: Roboto Condensed (headings), Roboto (body)
- [ ] Pill-shaped CTA buttons (border-radius: 30px)
- [ ] Tour cards have hover overlay effect
- [ ] Testimonials carousel works
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Responsive layout (mobile hamburger, stacked cards)
- [ ] `vite.config.ts` registers `injectUiSource()`
- [ ] `public/CNAME` contains `trailblaze.free.componentdock.com`
