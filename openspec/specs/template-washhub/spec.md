# Template: WashHub (Laundry Service)

## Purpose

Recreation of ColorLib **Laundry** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- Source: https://colorlib.com/wp/template/laundry/
- Live demo: https://technext.github.io/laundry/ (verified reachable)
- ColorLib preview: https://preview.colorlib.com/theme/laundry/ (returns 200)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/laundry-free-template.jpg
- New name: `washhub` (apps/washhub, @free-react-templates/washhub)
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Category: Laundry / cleaning service business

## Design tokens (extracted from live demo CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Primary blue | `#072366` | Headings (h1–h6), dark text |
| Accent blue | `#6785FF` | Section tags, footer background, outlined buttons, CTA text |
| Green accent | `#09cc7f` | Secondary CTA buttons, decorative accents |
| Dark navy | `#1c165c` | Offer service card text |
| Light bg | `#F5F9FB` / `#f7f7f7` | Body background, alternating sections |
| Dark overlay | `rgba(29,37,70, 0.78→0)` | Hero gradient overlay (left-to-right fade) |
| Body text | `#7a8290` / `#707b8e` | Paragraphs, secondary text |
| Dark text | `#212025` | About section body text |
| White | `#fff` | Text on dark backgrounds, button text |
| Heading font | `"Raleway", sans-serif` | All headings, section tags |
| Body font | `"Muli", sans-serif` | Body text, paragraphs |
| Button radius | `30px` | Primary CTA buttons (pill-shaped) |
| Card radius | `12px`, `20px` | Service cards, offer cards |
| Icon radius | `50%` | Circular icon containers |
| Section tag | `rgba(103,133,255,0.1)` bg + `#6785FF` text | Light blue pill tag above headings |

## Page structure (section order, from live demo DOM)

1. **Navbar** — Sticky header, left: logo text "WashHub", right: nav links (Home, About, Services, Blog, Contact) + call button. White background with shadow on scroll. Responsive hamburger menu on mobile.
2. **Hero** — Full-width slider (owl-carousel), dark navy gradient overlay fading right. Content: H1 "Quality laundry service in your city", subtitle, two CTA buttons (solid blue "Get a quote" + outlined "Learn more"). Background: laundry-related hero image (use picsum.photos/seed/washhub-hero/1920/765).
3. **How We Work** — White background, centered section tag "This is how we work", H2 heading. 3-column step flow: "We collect your clothes" → "Wash your clothes" → "Get delivery". Each step has a circular icon, step title, and short description. Connected by arrow/line elements.
4. **Service Categories** — White background, centered section tag "Services we offer", H2 heading. 3 service category cards in a row: "Cloth laundry", "Cloth ironing", + 1 more. Each card: circular icon (teal/green bg), service name, description, hover effect.
5. **Promotional Banner** — Dark navy/gradient background with left-aligned content: "Call us for a service" heading, phone number, CTA button. Right side: decorative image or pattern.
6. **Testimonials** — Light background with border-bottom, testimonial carousel. Each item: star rating, quote text, client avatar (circular), client name. Navigation dots below.
7. **Additional Services** — White background, centered section tag, heading. 3-column grid of service items with icons and descriptions. Similar layout to categories but different services.
8. **Company Achievement** — Decorative section with statistics/numbers (years of service, clients served, etc.) or promotional content.
9. **About Company** — White background, two-column layout. Left: image (use picsum.photos/seed/washhub-about/600/400). Right: H2 "About company", descriptive paragraphs, CTA link/button.
10. **Footer** — Blue `#6785FF` background, 4-column layout: Brand logo + description, Services links, Quick links, Get in touch (address, phone, email). Bottom bar: copyright text + social icons. Component Dock attribution.

## Gherkin requirements

### Feature: WashHub Laundry Service Template

```gherkin
Feature: WashHub — Laundry Service Website Template
  As a user visiting the WashHub website
  I want to see a professional laundry service website
  So that I can learn about services, get a quote, and contact the provider

  Scenario: Navbar displays brand and navigation links
    Given I am on the WashHub homepage
    Then I see a sticky navbar with brand name "WashHub"
    And I see navigation links: Home, About, Services, Blog, Contact
    And I see a call-to-action button with a phone number
    And the navbar collapses to a hamburger menu on mobile

  Scenario: Hero section shows headline and CTAs
    Given I am on the WashHub homepage
    Then I see a hero section with a dark gradient overlay
    And I see the heading "Quality laundry service in your city"
    And I see a "Get a quote" primary button (solid blue)
    And I see a "Learn more" outlined button
    And the hero has a background image

  Scenario: How We Work section shows 3 steps
    Given I scroll to the How We Work section
    Then I see the section tag "This is how we work"
    And I see 3 steps: "We collect your clothes", "Wash your clothes", "Get delivery"
    And each step has a circular icon, title, and description

  Scenario: Service categories section shows 3 cards
    Given I scroll to the service categories section
    Then I see the section tag "Services we offer"
    And I see 3 service category cards
    And each card has a circular icon, service name, and description
    And cards have hover effects

  Scenario: Promotional banner encourages calling
    Given I scroll to the promotional banner
    Then I see a dark background section
    And I see the heading "Call us for a service"
    And I see a phone number and CTA button

  Scenario: Testimonials section shows client reviews
    Given I scroll to the testimonials section
    Then I see a carousel of testimonials
    And each testimonial has a star rating, quote text, and client info
    And client avatars are displayed in circles
    And navigation dots are visible

  Scenario: Additional services section shows more offerings
    Given I scroll to the additional services section
    Then I see a centered section tag and heading
    And I see 3 service items with icons and descriptions

  Scenario: About company section displays info
    Given I scroll to the about section
    Then I see the heading "About company"
    And I see an image on the left
    And I see descriptive paragraphs on the right
    And I see a CTA link/button

  Scenario: Footer displays links and contact info
    Given I scroll to the footer
    Then I see a blue background footer
    And I see 4 columns: Brand, Services, Quick links, Get in touch
    And I see contact information (address, phone, email)
    And I see social media icons
    And the footer links to https://www.componentdock.com/

  Scenario: Page composes all sections in correct order
    Given I am on the WashHub homepage
    When the page loads
    Then I see sections in order: Navbar, Hero, How We Work, Service Categories, Promo Banner, Testimonials, Additional Services, About, Footer
    And the document title is "WashHub — Laundry Service Template"
```

## Verification checklist

- [ ] All sections present in correct order
- [ ] Navbar: sticky, responsive hamburger, brand "WashHub", nav links + call button
- [ ] Hero: gradient overlay, heading, two CTA buttons, background image
- [ ] How We Work: 3-step flow with icons and descriptions
- [ ] Service Categories: 3 cards with circular icons, hover effects
- [ ] Promo Banner: dark bg, "Call us" heading, phone number
- [ ] Testimonials: carousel, star ratings, avatars, navigation dots
- [ ] Additional Services: 3 items with icons
- [ ] About: image + text layout, heading, CTA
- [ ] Footer: blue bg, 4-column layout, Component Dock link
- [ ] Design tokens match: primary blue `#072366`, accent `#6785FF`, green `#09cc7f`
- [ ] Fonts: Raleway for headings, Muli for body
- [ ] Dark mode toggle functional
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
