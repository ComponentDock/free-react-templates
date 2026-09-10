# Template: Transithub (Business — Logistics & Freight)

## Purpose

Recreation of ColorLib **Carries** — a logistics, freight, and transportation business template.

- **ColorLib source:** [carries](https://colorlib.com/wp/template/carries/)
- **Preview URL:** https://preview.colorlib.com/theme/carries/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carries-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Description:** A professional logistics/freight business landing page featuring a full-width hero slider, service cards (ocean/air/street freight), about section with quote form and stats, service details with hexagon icons, promotional features grid, parallax CTA banner, client testimonials carousel, newsletter subscription footer, and four-column footer with contact info.

## Design tokens

Extracted from `https://preview.colorlib.com/theme/carries/style.css`:

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#f39c12` | Orange accent — buttons, icons, links, hover states, border-color |
| text-heading | `#3c4a62` | Dark navy heading text |
| text-body | `#687284` | Body paragraph text |
| text-subtle | `#5d6b82` | Secondary text, footer dark bg |
| text-light | `#a1a7b2` | Tertiary text |
| bg-gray | `#f7f9fc` | Gray section background (`.gray-bg`) |
| bg-light | `#eff1ff` | Alternate light section bg |
| bg-dark | `#5d6b82` | Dark section bg (footer) |
| bg-footer-top | `#3c4147` | Top footer area overlay |
| bg-footer-bottom | `#212121` | Bottom footer area |
| bg-white | `#fff` | Card backgrounds, form backgrounds |
| overlay-dark | `rgba(0,0,0,0.6)` | Hero image overlay |
| cta-orange | `rgba(243,156,18,0.9)` | CTA button hover overlay |

### Typography
| Property | Value |
|----------|-------|
| Font family | `'Roboto', sans-serif` |
| Heading weight | bold (700) |
| Body weight | regular (400) |
| Text transform | uppercase (nav, hero heading, section titles) |

### Layout & Shapes
| Property | Value |
|----------|-------|
| Button border-radius | `3px` (standard), `5px` (CTA/large) |
| Icon badge | `border-radius: 50%` (service icons) |
| Hexagon icons | Custom CSS hex shape for service icons |
| Section padding | Standard `section-padding` class |
| Grid | Bootstrap 12-column responsive grid |
| Hero | Full-width parallax background with dark overlay, centered text |
| CTA banner | Parallax background with dark overlay |

### Hero Slides
- Slide 1: Semi-truck on highway at golden hour (`img/slider/slide_1.jpg`)
- Slide 2: Slide 2 image (`img/slider/slide_2.jpg`)
- Slide 3: Slide 3 image (`img/slider/slide_3.jpg`)
- Dark semi-transparent overlay on each slide
- Centered white text with two outlined CTA buttons

## Requirements (Gherkin)

### Navbar
```gherkin
Scenario: Sticky navbar with logo, nav links, and utility icons
  Given the user is on the page
  Then the navbar displays a brand logo on the left
  And the navbar has navigation links: Home, About, Service, Blog, Contact
  And the navbar shows utility icons (user, search, cart, language selector)
  And the navbar becomes sticky on scroll
```

### Hero Slider
```gherkin
Scenario: Full-width hero slider with transport imagery
  Given the user is on the page
  Then a full-width hero slider displays with background images of freight/transport
  And the hero has a dark semi-transparent overlay for text readability
  And the hero heading reads "WE MAKE STRONGEST SERVICE ABOVE THE WORLD"
  And there are two CTA buttons: "Our Service" and "Get A Quote"
  And slider navigation arrows are visible

Scenario: Hero auto-advances slides
  Given the user is viewing the hero slider
  When 5 seconds elapse
  Then the slider advances to the next slide
```

### Freight Services Grid (Blog Area)
```gherkin
Scenario: Three-column freight service cards
  Given the user scrolls past the hero
  Then three service cards are displayed in a row
  And each card has a transport image at the top
  And each card has an icon badge (ship, plane, truck)
  And the cards show: Ocean Freight, Air Freight, Street Freight
  And each card has a short description and "Read More" link
```

### About Section with Quote Form
```gherkin
Scenario: About section with stats and quote form
  Given the user scrolls to the about section
  Then a "Get A Quote" form is displayed on the left with fields: Name, Email, Phone, Type, Quantity, Destination, Message
  And the about content on the right shows "We have 25 years experience in this passion"
  And three stat counters are shown: 120 Project Done, 100 Project Done, 30 Project Done
  And a "read more" link is available

Scenario: Quote form has all required fields
  Given the user is on the about section
  Then the form displays 7 input fields
  And the form has a "Send" submit button
```

### Service Area
```gherkin
Scenario: Service section with headline and details
  Given the user scrolls to the service section
  Then an "Our Service" title is displayed centered
  And a subtitle describes the service offering
  And a left column shows "we offer quick & powerful logistics solution" with "Learn More" link
  And a right column shows a cargo image with "Why Choose Us?" overlay and checklist
  And checklist items have checkmark icons

Scenario: Service list with hexagon icons
  Given the user scrolls to the service bottom area
  Then four service items are listed vertically on the right side
  And each item has a hexagonal icon badge (dropbox, truck, ship, anchor)
  And each item shows: Ware House, Road Freight, Ocean Freight, Air Freight
  And each item has a description and "read more" link
```

### Promo Area
```gherkin
Scenario: Features grid with icon-text pairs
  Given the user scrolls to the promo section
  Then four feature items are displayed in a 2x2 grid
  And each item has an icon and heading: Our Location, Latest News, 24/7 Support, Fast Delivery
  And each item has a short description

Scenario: Parallax CTA banner
  Given the user scrolls to the promo bottom area
  Then a parallax banner with dark overlay is displayed
  And the banner heading reads "we provide international freight & logistics service worldwide"
  And a "Get a quote" button is centered
```

### Testimonials Section
```gherkin
Scenario: Client testimonials with carousel
  Given the user scrolls to the testimonial section
  Then a "what client's say" title is displayed centered
  And a row of client photos is shown in a carousel
  And prev/next navigation arrows are available
  And testimonial text is displayed with a quote
  And client name and title are shown below the quote
```

### Footer
```gherkin
Scenario: Newsletter subscription bar
  Given the user scrolls to the footer
  Then a dark background newsletter section is displayed
  And "Weekly Newsletter" heading with description is shown
  And an email input with "subscribe" button is displayed

Scenario: Four-column footer with contact info
  Given the user views the bottom footer
  Then four columns are displayed: About Us, Latest Tweets, Customer Service, Social/Instagram
  And the About Us column shows phone, email, and address
  And the Customer Service column shows links: Support Forums, Communication, FAQS, Privacy Policy, Rules & Condition, Contact Us
  And a "Made with Component Dock" attribution is in the footer
```

## Verification checklist

- [ ] Navbar renders with logo, nav links, utility icons
- [ ] Hero slider displays with background images and dark overlay
- [ ] Hero heading and two CTA buttons render correctly
- [ ] Three freight service cards display in grid
- [ ] About section shows quote form with 7 fields + stats counters
- [ ] Service section shows headline, description, and hexagon icon list
- [ ] Promo area shows 4-feature grid + parallax CTA banner
- [ ] Testimonials carousel with photos, quotes, and navigation
- [ ] Newsletter subscription form in footer
- [ ] Four-column footer with contact info and Component Dock link
- [ ] All design tokens match: brand orange #f39c12, Roboto font, dark navy #3c4a62
- [ ] Responsive layout works across breakpoints
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
