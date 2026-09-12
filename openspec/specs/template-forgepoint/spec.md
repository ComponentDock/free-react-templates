# Template: ForgePoint (Industrial / Manufacturing)

## Purpose

Recreation of the ColorLib **Inds** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `inds`
- **ColorLib page:** https://colorlib.com/wp/template/inds/
- **Live preview:** https://preview.colorlib.com/theme/inds/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/inds-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#f27420` (orange) | CTA buttons, accent elements, "Get a Quote" button |
| Dark navy | `#021a47` | Dark section backgrounds, hover states, header background |
| Deepest navy | `#00163e` | Footer background, darkest areas |
| Text primary | `#0b1c39` | Headings, body text |
| Link accent | `#1696e7` (blue) | Hyperlink color |
| Gold accent | `#dca73a` | Secondary accent, testimonial quote icon |
| Background light | `#f7f7f7` | Alternating section backgrounds |
| Background white | `#ffffff` | Main content background |
| Font primary | `"Barlow", sans-serif` | Main headings and body text (weights 200-900) |
| Font secondary | `"Roboto", sans-serif` | Body text fallback (weights 300-900) |
| Button style | `.btn` + `.hero-btn` / `.get-btn` / `.white-btn` | Orange fill for primary CTAs, white fill for secondary |
| Hero | Dark overlay on slider images, text animations | Multiple slides with fadeInUp animations |

## Gherkin requirements

### Header / Navbar
```gherkin
Feature: Header Navbar

  Scenario: Top info bar and main navigation
    Given the user is on the page
    Then a top info bar displays phone number, email, and business hours
    And a main navbar shows the logo, navigation links, and a "Get a Quote" CTA button
    And the nav links are: Home, About, Industries, Works, Blog (with submenu), Pages, Contact, Element

  Scenario: Mobile hamburger menu
    Given the viewport is narrow (< 992px)
    When the user taps the hamburger icon
    Then the navigation menu slides open with all links visible
```

### Hero / Slider
```gherkin
Feature: Hero Slider

  Scenario: Hero slider displays on load
    Given the user is on the page
    Then a full-width hero slider is visible with background images
    And each slide has the heading "Industrial Solutions!"
    And each slide has a subtitle paragraph
    And each slide has an "Our Services" CTA button

  Scenario: Slider auto-advance
    Given the hero slider is visible
    When the user waits
    Then the slider automatically transitions to the next slide
    And navigation dots or arrows are available for manual control
```

### Services
```gherkin
Feature: Services Section

  Scenario: Three service cards
    Given the user scrolls past the hero
    Then a services area is visible with three service cards in a row
    And each card has an icon, title, and an arrow button
    And the services are: Automotive Manufacturing, Heavy Industry Market, Industry Analysis

  Scenario: Service card hover
    Given the service cards are visible
    When the user hovers over a card
    Then the card lifts slightly with a shadow effect
```

### Safe Industry Solutions
```gherkin
Feature: Safe Industry Solutions

  Scenario: About/solutions section with image and mission
    Given the user scrolls to the safe industry area
    Then the heading reads "Safe Industrial Solutions That Saves our Valuable Time and Money!"
    And two paragraphs of descriptive text are displayed
    And an "Our Services" button is available
    And an "Our Mission" alert box with an image is displayed on the right

  Scenario: Mission alert box
    Given the safe industry section is visible
    Then the "Our Mission" box has a colored background and displays a mission statement
```

### Gallery / Works
```gherkin
Feature: Gallery Section

  Scenario: Portfolio grid
    Given the user scrolls to the gallery area
    Then a grid of project images is displayed
    And each project has an image and title "Floride Chemicals Factory"
    And each project has a "Read more" link
    And the grid shows 8 projects in a 4-column layout

  Scenario: Gallery hover effect
    Given the gallery items are visible
    When the user hovers over a project
    Then an overlay appears with the project title and link
```

### Team
```gherkin
Feature: Team Section

  Scenario: Team member profiles
    Given the user scrolls to the team area
    Then the heading reads "Our Team Best Members"
    And four team member cards are displayed
    And each card has a photo, name ("Bruce Roberts"), and role
    And a "Contact Us" button is available

  Scenario: Team card hover
    Given the team cards are visible
    When the user hovers over a card
    Then social media icons or an overlay appears
```

### Testimonials
```gherkin
Feature: Testimonials

  Scenario: Testimonial carousel
    Given the user scrolls to the testimonial area
    Then a carousel shows customer testimonials
    And each testimonial has a quote icon, review text, founder name ("Jessya Inn"), and role ("Co Founder")
    And navigation dots are present to cycle through testimonials

  Scenario: Testimonial auto-advance
    Given the testimonials section is visible
    When the user waits
    Then the carousel automatically advances to the next testimonial
```

### Blog / David Droga
```gherkin
Feature: Blog Section

  Scenario: Two blog post cards
    Given the user scrolls to the blog area
    Then two blog post items are displayed side by side
    And each post has an image, date/author info, title, and "Read more" link
    And the blog titles reference advertising/industry topics

  Scenario: Blog hover effect
    Given the blog cards are visible
    When the user hovers over a post
    Then an overlay or shadow effect appears
```

### Call to Action
```gherkin
Feature: CTA Section

  Scenario: Work with us CTA
    Given the user scrolls past the blog
    Then a section with heading "Want To Work With Us? Hit The Button." is visible
    And a "Let's Work Together" white button is displayed

  Scenario: CTA button hover
    Given the CTA section is visible
    When the user hovers over the "Let's Work Together" button
    Then the button changes to an orange (#f27420) background
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer layout
    Given the user reaches the page bottom
    Then a dark navy (#00163e) footer is visible
    And the footer has four columns: About Us (with logo and description), Contact Info (phone, email), Photo Gallery, Important Links
    And social media icon links are present
    And a bottom bar shows copyright information

  Scenario: Footer copyright
    Given the footer is visible
    Then the copyright line is present
    And a link to https://www.componentdock.com/ ("Component Dock") is present (replacing ColorLib attribution)
```

## Verification checklist

- [ ] All sections render in correct order: Header → Hero Slider → Services → Safe Industry → Gallery → Team → Testimonials → Blog → CTA → Footer
- [ ] Barlow + Roboto fonts loaded via Google Fonts `<link>` in index.html
- [ ] Primary orange `#f27420` used for CTA buttons, accent elements
- [ ] Dark navy `#021a47` and `#00163e` used for dark backgrounds
- [ ] Text color `#0b1c39` for primary headings
- [ ] Link color `#1696e7` for hyperlinks
- [ ] Gold accent `#dca73a` for testimonial accents
- [ ] Hero slider with auto-advance and navigation controls
- [ ] Gallery grid with hover overlays
- [ ] Team cards with hover social icons
- [ ] Responsive: hamburger nav on mobile, stacked layouts on small screens
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No references to ColorLib in app source (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/forgepoint-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build succeeds (`npx vite build`)
