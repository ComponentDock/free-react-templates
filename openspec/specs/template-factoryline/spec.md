# Template: FactoryLine (Industrial / Manufacturing)

## Purpose

Recreation of the ColorLib **Industries** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `industries`
- **ColorLib page:** https://colorlib.com/wp/template/industries/
- **Live preview:** https://preview.colorlib.com/theme/industries/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/industries-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#fd5f00` (orange) | CTA buttons, accent elements |
| Primary dark | `#d75100` / `#ca4c00` | Button hover states |
| Text primary | `#212529` | Headings, body text |
| Text muted | `#6c757d` | Secondary text, metadata |
| Text secondary | `#495057` | Paragraphs, descriptions |
| Pink accent | `#e83e8c` | Testimonial quote marks |
| Border accent | `#ffae7e` | Testimonial border |
| Background light | `#e9ecef` / `#f8f9fa` | Alternating section backgrounds |
| Background white | `#ffffff` | Main content background |
| Font primary | `"Montserrat", sans-serif` | Headings (weights 400, 700) |
| Font secondary | `"Oxygen", sans-serif` | Body text (weights 400, 700) |
| Button style | `.btn-outline-white` / `.btn-primary` | Orange fill for primary CTAs, white outline for secondary |
| Hero | Full-width slider with background images, dark overlay, play button for video | Multiple slides with auto-advance |

## Gherkin requirements

### Navbar
```gherkin
Feature: Navbar

  Scenario: Dark sticky navbar
    Given the user is on the page
    Then a dark (#343a40) navbar is visible at the top
    And the nav links are: Home, About, Services, Projects, Blog, Contact
    And the navbar is responsive with a hamburger toggle on mobile

  Scenario: Mobile hamburger menu
    Given the viewport is narrow (< 992px)
    When the user taps the hamburger icon
    Then the navigation menu collapses open with all links visible
```

### Hero Slider
```gherkin
Feature: Hero Slider

  Scenario: Hero slider displays on load
    Given the user is on the page
    Then a full-width hero slider is visible with background images
    And each slide has a heading: "We Are Industrial Company" or "Create, Enhance and Sustain"
    And each slide has a play button for a video (Vimeo link)
    And navigation dots are present

  Scenario: Slider auto-advance
    Given the hero slider is visible
    When the user waits
    Then the slider automatically transitions to the next slide
```

### Services
```gherkin
Feature: Services Section

  Scenario: Three service cards
    Given the user scrolls past the hero
    Then a light gray (#f8f9fa) background section is visible
    And three service cards are displayed in a row
    And each card has an icon, title, and description
    And the services are: Automotive Parts, Maintenance Services, Green Energy

  Scenario: Service card hover
    Given the service cards are visible
    When the user hovers over a card
    Then the card lifts slightly with a shadow effect
```

### About / Engineering
```gherkin
Feature: About Engineering Section

  Scenario: Two-column about section
    Given the user scrolls to the about area
    Then the heading reads "We Are Reliable Engineering In House"
    And a left column shows a framed image (industrial scene)
    And the layout is two-column with image on left, content on right

  Scenario: Feature highlights
    Given the about section is visible
    Then four feature items are listed: Green Energy, Precision Mechanics, Construction Machines, Reliable and Stable
    And each feature has a title and brief description
```

### Parallax Quote
```gherkin
Feature: Parallax Quote Section

  Scenario: Full-width parallax with quote
    Given the user scrolls past the features
    Then a full-width parallax background section is visible
    And the heading reads "Create, Enhance and Sustain"
```

### Projects
```gherkin
Feature: Projects Section

  Scenario: Project portfolio grid
    Given the user scrolls to the projects area
    Then the heading reads "Our Latest Projects"
    And six project cards are displayed in a 3-column grid
    And each project has an image and title
    And projects include: Ducting Design in Colorado, Tanks Project In California, Structural Design in New York, Stacks Design, Intercate Custom, Banker Design

  Scenario: Project hover effect
    Given the project cards are visible
    When the user hovers over a project
    Then an overlay appears with the project title
```

### Testimonials
```gherkin
Feature: Testimonials

  Scenario: Customer testimonials
    Given the user scrolls to the testimonials area
    Then the heading reads "Happy Clients"
    And a carousel shows customer testimonials
    And each testimonial has a name (e.g. "John Smith", "Joshua Darren") and review text
    And navigation dots are present

  Scenario: Testimonial auto-advance
    Given the testimonials section is visible
    When the user waits
    Then the carousel automatically advances to the next testimonial
```

### Blog
```gherkin
Feature: Blog Section

  Scenario: Four blog post cards
    Given the user scrolls to the blog area
    Then the heading reads "Blog Posts"
    And four blog cards are displayed in a row
    And each card has an image and title link

  Scenario: Blog hover effect
    Given the blog cards are visible
    When the user hovers over a card
    Then an overlay or shadow effect appears
```

### CTA
```gherkin
Feature: CTA Section

  Scenario: Download CTA section
    Given the user scrolls past the blog
    Then a blue (#007bff) background section is visible
    And the heading reads "Create, Enhance and Sustain"
    And a "Download This Template" white outline button is displayed
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer layout
    Given the user reaches the page bottom
    Then a dark footer is visible
    And the footer has three columns: About Us (with description and social icons), Contact Info (address, phone, email), Quick Links (About, Terms, Disclaimers, Contact)
    And social media icon links are present (Twitter, Facebook, LinkedIn, Instagram)

  Scenario: Footer copyright
    Given the footer is visible
    Then the copyright line is present
    And a link to https://www.componentdock.com/ ("Component Dock") is present (replacing ColorLib attribution)
```

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero Slider → Services → About → Parallax Quote → Projects → Testimonials → Blog → CTA → Footer
- [ ] Montserrat + Oxygen fonts loaded via Google Fonts in index.html
- [ ] Primary orange `#fd5f00` used for CTA buttons and accent elements
- [ ] Text colors `#212529` (primary) and `#6c757d` (muted) applied correctly
- [ ] Pink accent `#e83e8c` used for testimonial quote marks
- [ ] Hero slider with auto-advance, play button, and navigation dots
- [ ] Projects grid with 6 items in 3-column layout
- [ ] Testimonials carousel with auto-advance
- [ ] Blog cards with hover overlays
- [ ] Blue CTA section at bottom
- [ ] Responsive: hamburger nav on mobile, stacked layouts on small screens
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No references to ColorLib in app source (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/factoryline-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build succeeds (`npx vite build`)
