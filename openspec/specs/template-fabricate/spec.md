# Template: Fabricate (Industrial Business)

## Purpose

Recreation of ColorLib **Industry** template.
- Source slug: `industry`
- Preview URL: https://preview.colorlib.com/theme/industry/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/industry-free-template.jpg
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- New name: `fabricate` (apps/fabricate, @free-react-templates/fabricate)
- Deploy target: https://fabricate.free.componentdock.com

## Design tokens (extracted from live preview)

| Token | Value | Source |
|---|---|---|
| Brand primary | `#fab700` (amber gold) | `.primary-btn`, accent text, hover states |
| Header top bg | `#222222` (dark charcoal) | `.header-top` |
| Body text | `#777777` | Global body color |
| Heading text | `#222222` | h1-h6 defaults |
| About section bg | `#f9f9ff` (very light blue-grey) | `.home-about-area` |
| Footer bg | `#04091e` (very dark navy) | `.footer-area` |
| Overlay | `rgba(0,0,0,0.5)` on banner/stats/feedback | `.overlay-bg` |
| Font family | `Poppins` (weights 300, 400, 500, 600, 700) | Inline `@font-face` |
| Button radius | `25px` (pill shape) | `.primary-btn` border-radius |
| Button bg | `#fab700`, text `#fff` | `.primary-btn` |
| Button hover | transparent bg, `#fab700` border + text | `.primary-btn:hover` |
| Form panel bg | `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8))` over image | `.home-about-right` |
| Counter circle | white inner ring on dark overlay bg | `.single-faq .circle` |

## Visual design notes (from screenshot)

The template has a dark industrial aesthetic with a prominent amber/yellow accent.
The hero is a full-bleed background image with dark overlay. The about section
splits into text + a dark quote-request form panel. Services are image cards.
Stats use animated counters on a dark strip. Projects displayed in an asymmetric
gallery grid. Testimonials combine a video play button with a star-rated
carousel. Blog uses standard 3-column cards. Footer is very dark navy with
newsletter email input.

## Section order (from live DOM)

1. Header (top bar + nav)
2. Banner/Hero (fullscreen bg image, dark overlay, heading, CTA)
3. Features (3 hexagon icon cards: Maintenance, Residential, Commercial)
4. About (split: text left + quote form right)
5. Services (3 image cards: Automotive, Construction, Industrial)
6. Stats/Counter (4 animated counters on dark overlay)
7. Projects (asymmetric image gallery)
8. Feedback/Testimonials (video play + review carousel on dark overlay)
9. Blog (3-column cards with author/date)
10. Footer (About Us, Newsletter, Follow Us social icons)

## Gherkin requirements

### Header

```gherkin
Feature: Header

  Scenario: Top bar displays social icons, phone, and email
    Given the page loads
    Then a dark top bar shows social icons (Facebook, Twitter, Dribbble, Behance)
    And a phone number "+880 012 3654 896" is displayed
    And an email "support@colorlib.com" is displayed

  Scenario: Navigation menu renders all links
    Given the page loads
    Then a navigation bar shows logo and links: Home, About, Service, Projects, Blog, Contact
    And "Blog" has a dropdown with Blog Home and Blog Single
    And the currently active page link is highlighted
```

### Banner/Hero

```gherkin
Feature: Banner/Hero

  Scenario: Hero section shows heading and CTA
    Given the banner is visible
    Then a subtitle "Don't look further, here is the key" appears
    And heading "We're Industrial solution" is displayed
    And a paragraph of descriptive text is shown
    And a "Get Started" button with pill shape and amber background is present

  Scenario: Hero has a background image with dark overlay
    Given the banner is visible
    Then a background image covers the hero area
    And a semi-transparent dark overlay sits on top of the image
```

### Features

```gherkin
Feature: Features (Hexagon Icons)

  Scenario: Three feature cards are displayed
    Given the features section is visible
    Then 3 hexagon icon cards are shown in a row
    And each card has a title: "Maintenance", "Residential Service", "Commercial Service"
    And each card has a descriptive paragraph
```

### About

```gherkin
Feature: About Section

  Scenario: About section shows text and quote form
    Given the about section is visible
    Then left side displays an accent subtitle "Brand new app to blow your mind"
    And heading "We've made a life that will change you"
    And descriptive paragraphs and a "Get Started Now" button
    And right side displays a dark-background "Request a Quote" form
    And the form has a service dropdown, name, phone, email inputs, textarea, and submit button

  Scenario: Quote form is interactive
    Given the quote form is visible
    When user selects a service from the dropdown
    And fills in name, phone, email, and message
    And clicks "Request Free Quote"
    Then the form should validate required fields
```

### Services

```gherkin
Feature: Services Section

  Scenario: Three service cards with images
    Given the services section is visible
    Then heading "Our Capturing Market Sectors" is displayed
    And 3 image cards are shown: "Automotive Engineering", "Construction & Engineering", "Industrial Engineering"
    And each card has an image, title, and descriptive paragraph
```

### Stats/Counter

```gherkin
Feature: Stats Counter

  Scenario: Four statistics are displayed
    Given the stats section is visible
    Then 4 counters are shown: "2K+ Projects Completed", "5.5K Total Employees", "959 Happy Clients", "367 Tickets Submitted"
    And each has a circular ring decoration
    And the section has a dark overlay background
```

### Projects

```gherkin
Feature: Projects Gallery

  Scenario: Asymmetric project grid
    Given the projects section is visible
    Then heading "Latest Finished Projects" is displayed
    And 4 project images are shown in an asymmetric grid
    And the grid has one large image, one medium, and two equal-width images
```

### Feedback/Testimonials

```gherkin
Feature: Feedback/Testimonials

  Scenario: Testimonial carousel with video
    Given the feedback section is visible
    Then heading "Enjoy our Client's Feedback" is shown
    And a video play button is displayed on the left
    And a review carousel on the right shows reviewer name, star rating, and testimonial text
    And the section has a dark overlay background

  Scenario: Carousel cycles through reviews
    Given the feedback section is visible
    When the carousel advances
    Then the next review slides in with name, stars, and text
```

### Blog

```gherkin
Feature: Blog Section

  Scenario: Three blog cards
    Given the blog section is visible
    Then heading "Latest posts from our Blog" is displayed
    And 3 blog cards are shown in a row
    And each card has a thumbnail image, author avatar + name, date, like count, comment count, title, and excerpt
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer has three columns
    Given the footer is visible
    Then a dark navy background (#04091e) is applied
    And column 1 shows "About Us" with description and copyright
    And column 2 shows "Newsletter" with email input and submit arrow
    And column 3 shows "Follow Us" with social icons (Facebook, Twitter, Dribbble, Behance)
    And the copyright includes a link to Component Dock
```

## Verification checklist

- [ ] Header top bar: dark bg, social icons, phone, email
- [ ] Navigation: logo, all links, Blog dropdown, active state
- [ ] Hero: bg image, dark overlay, heading, subtext, pill CTA button (#fab700)
- [ ] Features: 3 hexagon icon cards with titles and descriptions
- [ ] About: split layout, accent subtitle (#fab700), quote form with dark bg panel
- [ ] Services: 3 image cards with titles and descriptions
- [ ] Stats: 4 animated counters with circular ring decoration, dark overlay
- [ ] Projects: asymmetric image gallery grid
- [ ] Feedback: video play button + testimonial carousel, dark overlay
- [ ] Blog: 3 cards with image, author, date, stats, title, excerpt
- [ ] Footer: dark navy (#04091e), About Us + Newsletter + Follow Us columns
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Brand color #fab700 used via Tailwind @theme token
- [ ] Font: Poppins loaded via Google Fonts in index.html
- [ ] All placeholder images use picsum.photos/seed/fabricate-N/
- [ ] Package name: @free-react-templates/fabricate
- [ ] CNAME: fabricate.free.componentdock.com
