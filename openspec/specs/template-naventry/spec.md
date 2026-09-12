# Template: NavEntry (Immigration / Visa Consultation)

## Purpose

Recreation of the ColorLib **Immigration** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source slug:** `immigration`
- **ColorLib page:** https://colorlib.com/wp/template/immigration/
- **Live preview:** https://preview.colorlib.com/theme/immigration/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/immigration-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, lucide-react (icons), `packages/ui` shared components where possible.

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
|---|---|---|
| Primary brand color | `#f6214b` (crimson red) | Banner background, primary CTA buttons, accent links |
| Secondary accent (cyan) | `#4cd3e3` | Feature icon backgrounds, secondary buttons |
| Secondary accent (blue) | `#38a4ff` | Tertiary accent for secondary feature icons |
| Text primary | `#222222` | Headings, body text |
| Text muted | `#777777` | Secondary paragraphs, captions |
| Background alt | `#f9f9ff` | Alternating section backgrounds (light blue-gray) |
| Background primary | `#ffffff` | Main content background |
| Font family | `"Poppins", sans-serif` | Loaded via Google Fonts CDN |
| Button shape | `.genric-btn.circle` — fully rounded pill buttons | border-radius: 20px on all CTA buttons |
| Banner overlay | Dark semi-transparent overlay on hero image | Red background-color: #f6214b on .banner-area |
| Section spacing | Bootstrap `section-gap` class (~80px vertical padding) | |
| Cards | White background, subtle shadow, rounded corners | Feature and blog cards |

## Gherkin requirements

### Navbar
```gherkin
Feature: Navbar

  Scenario: Sticky header with tagline, logo, and phone
    Given the user is on the page
    Then a header bar is visible with a left tagline ("We believe we helps people for happier lives"), a centered logo, and a right-aligned phone number
    And the nav links are: Home, About, Immigration, Course, Country, Blog (with submenu), Contact

  Scenario: Mobile hamburger menu toggle
    Given the viewport is narrow (< 768px)
    When the user taps the hamburger icon
    Then the navigation menu slides open with all links visible
```

### Hero / Banner
```gherkin
Feature: Hero Banner

  Scenario: Hero section displays on load
    Given the user is on the page
    Then a full-width banner with a red (#f6214b) background is visible
    And the heading reads "Immigrations & Visa Consultation"
    And the subheading reads "Process Visa without within hours"
    And a pill-shaped CTA button reads "Book Consultancy"

  Scenario: CTA button hover
    Given the hero banner is visible
    When the user hovers over the "Book Consultancy" button
    Then the button shows a hover state (lighter red / white background transition)
```

### Call-to-Top
```gherkin
Feature: Call-to-Top strip

  Scenario: Consultation request strip below hero
    Given the hero banner is visible
    Then a horizontal strip below the hero contains a "Request Free Consultancy" button
    And the strip has a light background
```

### Service Area
```gherkin
Feature: Service Cards

  Scenario: Four immigration requirement cards
    Given the user scrolls to the service area
    Then the heading reads "Requirements to be Immigrants"
    And four service cards are displayed in a row
    And each card has an icon, title, and short description
    And each card has a "Find Out More" link

  Scenario: Card hover effect
    Given the service cards are visible
    When the user hovers over a card
    Then the card lifts slightly (shadow increase) and the icon changes color
```

### Booking / Consultancy
```gherkin
Feature: Booking Consultancy Section

  Scenario: Consultancy call-to-action section
    Given the user scrolls past the service area
    Then a dark overlay section is visible
    And the heading reads "Book Free Consultancy!"
    And the text invites the user to schedule a free consultation
```

### Features Area
```gherkin
Feature: Features Section

  Scenario: Six feature items displayed
    Given the user scrolls to the features area
    Then the heading reads "Our Unique Features that can impress you"
    And six feature items are displayed in a 2-column grid
    And each feature has a circular icon, title, and description
    And the features are: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews

  Scenario: Feature icon color scheme
    Given the features section is visible
    Then the icon circles alternate between cyan (#4cd3e3) and blue (#38a4ff) backgrounds
```

### Reviews / Testimonials
```gherkin
Feature: Reviews Section

  Scenario: Customer testimonials carousel
    Given the user scrolls to the reviews area
    Then the heading reads "How Our Customers Treat Us"
    And a carousel/slider shows customer testimonials
    And each testimonial includes a photo, name, and review text
    And navigation dots or arrows are present to cycle through reviews
```

### Brand Logos
```gherkin
Feature: Brand Logos

  Scenario: Partner/brand logos strip
    Given the user scrolls past the reviews
    Then a horizontal strip of partner logos is displayed
    And logos are displayed in a single row with equal spacing
```

### Latest Blog
```gherkin
Feature: Latest Blog

  Scenario: Two blog post cards
    Given the user scrolls to the blog area
    Then the heading reads "Latest News from our Blog"
    And two blog post cards are displayed in a row
    And each card has an image, tags (e.g. "Travel", "Life style"), title, and date
    And each card has a "Read More" link

  Scenario: Blog tag hover
    Given the blog cards are visible
    When the user hovers over a tag
    Then the tag background changes to the primary brand color (#f6214b)
```

### Call-to-Action
```gherkin
Feature: Final Call-to-Action

  Scenario: CTA section before footer
    Given the user scrolls past the blog section
    Then a full-width section with a red overlay (#f6214b) background is visible
    And the heading reads "No Look Further. Try us today!"
    And a descriptive paragraph invites the user to get in touch
```

### Footer
```gherkin
Feature: Footer

  Scenario: Footer layout
    Given the user reaches the page bottom
    Then a footer with three columns is visible: About Us, Contact Us, Newsletter
    And the Contact Us section includes a phone number
    And the Newsletter section has an email input and submit button
    And social media icon links are present (Facebook, Twitter, Dribbble, Behance)
    And the copyright line reads "All rights reserved | This template is made with ❤ by Colorlib" (to be replaced with Component Dock branding)
    And a link to https://www.componentdock.com/ ("Component Dock") is present
```

## Verification checklist

- [ ] All sections render in correct order: Header → Hero → Call-to-Top → Services → Booking → Features → Reviews → Brands → Blog → CTA → Footer
- [ ] Poppins font loaded via Google Fonts `<link>` in index.html
- [ ] Primary brand color `#f6214b` used for banner, CTA buttons, tag hover
- [ ] Cyan `#4cd3e3` and blue `#38a4ff` used for feature icon circles
- [ ] Text colors `#222222` (primary) and `#777777` (muted) applied correctly
- [ ] Light background `#f9f9ff` on alternating sections
- [ ] All buttons are pill-shaped (rounded-full / border-radius: 20px)
- [ ] Responsive: hamburger nav on mobile, single-column layouts on small screens
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No references to ColorLib in app source (provenance only in spec)
- [ ] Placeholder images via `https://picsum.photos/seed/naventry-<n>/<w>/<h>`
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build succeeds (`npx vite build`)
