# Template: BizFlow (Business / Corporate)

## Purpose

Recreation of ColorLib **Busicol** — a business/corporate template with green accent.

- **Source:** https://colorlib.com/wp/template/busicol/
- **Preview:** https://preview.colorlib.com/theme/busicol/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `bizflow` (never reuse source name "busicol")

## Design Tokens

Extracted from `css/style.css` at preview.colorlib.com/theme/busicol/:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#28AE60` | Green — primary buttons, accents, highlights |
| `--brand-orange` | `#ff5e13` | Orange — secondary accent, hover states |
| `--text-dark` | `#2C2C2C` | Near-black — headings, body text |
| `--text-muted` | `#999999` | Gray — secondary text |
| `--text-light` | `#919191` | Light gray — tertiary text |
| `--white` | `#fff` | White — text on dark, card bg |
| `--bg-light` | `#fbf9ff` | Off-white — page background |
| `--bg-dark` | `#2C2C2C` | Dark — footer background |

### Fonts
| Token | Value | Usage |
|-------|-------|-------|
| `--font-body` | `"Poppins", sans-serif` | All text (headings + body) |

### Border Radius
| Value | Usage |
|-------|-------|
| `0` | Most elements — sharp rectangular style |
| `12px` | Cards, containers |
| `20px` | Rounded elements |
| `50%` | Circular elements |

## Section Structure (in page order)

1. **Navbar** — sticky top, logo, nav links
2. **Hero Slider** — 3-slide carousel. "Grow Big with Musicol Business" heading, description, "Our Services" + "See How it Work" CTAs. Dark overlay.
3. **Services** — "Explore Our Solutions" heading. 3 service cards: Invoicing, Business Growth, Problem Solving. Each with icon, title, description.
4. **About** — "The Largest Business Expert" heading, description, "About Us" CTA.
5. **Counter** — 3 statistics: 520+ Total Projects, 244 On Going Projects, 95% Job Success. Animated counters.
6. **Gallery/Portfolio** — "Our Recent Works" heading. 5 portfolio items: Product Branding. "More Works" CTA.
7. **Features** — "Unlimited Control", "Rapidly Growth", "Problem Solving" — 3 feature cards with icons.
8. **Financial Solution** — "Gives you the best Financial solution for business" — 2 columns with content.
9. **Testimonials** — Carousel with quotes and author info (Robert Jonson, Business Owner).
10. **CTA/Project** — "Do you Have any Project?" — call-to-action section with "Contact Us" button.
11. **Footer** — Multi-column: Services links, Useful Links, Address, Contact. Copyright with "Made with Component Dock".

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Sticky navbar with navigation links
  Given the page loads
  Then a sticky navbar is visible at the top
  And it contains the logo
  And it shows nav links for Home, Services, About, Portfolio, Blog, Contact

Scenario: Navbar remains visible on scroll
  Given the user scrolls down
  Then the navbar stays fixed at the top of the viewport
```

### Hero Slider
```gherkin
Scenario: Hero carousel displays 3 slides
  Given the page loads
  Then a full-width hero carousel is visible
  And slide 1 shows "Grow Big with Musicol Business" heading
  And each slide has a description and 2 CTA buttons

Scenario: Hero carousel auto-plays
  Given the hero is visible
  When 5 seconds pass
  Then the carousel advances to the next slide automatically
```

### Services
```gherkin
Scenario: Services section shows 3 service cards
  Given the services section scrolls into view
  Then the heading reads "Explore Our Solutions"
  And 3 service cards are displayed
  And each card has an icon, title, and description
  And the services are: Invoicing, Business Growth, Problem Solving
```

### About
```gherkin
Scenario: About section displays with CTA
  Given the about section is in view
  Then the heading reads "The Largest Business Expert"
  And a description paragraph is shown
  And an "About Us" button is visible
```

### Counter
```gherkin
Scenario: Counter section displays statistics
  Given the counter section scrolls into view
  Then 3 statistics are shown: 520+ Projects, 244 On Going, 95% Success
  And the counters animate on scroll
```

### Gallery
```gherkin
Scenario: Gallery section shows portfolio items
  Given the gallery section is in view
  Then the heading reads "Our Recent Works"
  And 5 portfolio items are displayed
  And each item has an image and "Product Branding" title
  And a "More Works" button is visible
```

### Features
```gherkin
Scenario: Features section shows 3 feature cards
  Given the features section is in view
  Then 3 feature cards are displayed
  And the features are: Unlimited Control, Rapidly Growth, Problem Solving
  And each card has an icon and description
```

### Financial Solution
```gherkin
Scenario: Financial solution section displays
  Given the financial section is in view
  Then the heading reads "Gives you the best Financial solution for business"
  And 2 columns of content are displayed
```

### Testimonials
```gherkin
Scenario: Testimonials section shows quotes
  Given the testimonials section is in view
  Then at least 1 testimonial quote is displayed
  And author name and role are shown (Robert Jonson, Business Owner)
```

### CTA/Project
```gherkin
Scenario: CTA section displays call-to-action
  Given the CTA section is in view
  Then the heading reads "Do you Have any Project?"
  And a "Contact Us" button is visible
```

### Footer
```gherkin
Scenario: Footer displays with links and contact
  Given the footer is visible
  Then it contains Services links, Useful Links, and Address
  And a copyright notice is shown
  And "Made with Component Dock" branding is present
```

## Verification Checklist

- [ ] Navbar: sticky, logo, nav links
- [ ] Hero: 3-slide carousel with dark overlay, CTAs
- [ ] Services: 3 cards with icons, titles, descriptions
- [ ] About: heading, description, CTA button
- [ ] Counter: 3 animated statistics
- [ ] Gallery: 5 portfolio items with images, "More Works" CTA
- [ ] Features: 3 cards with icons, descriptions
- [ ] Financial Solution: 2-column layout with content
- [ ] Testimonials: carousel with quotes and author info
- [ ] CTA: heading, description, "Contact Us" button
- [ ] Footer: multi-column links, address, copyright, Component Dock
- [ ] Design tokens: green (#28AE60), orange (#ff5e13), Poppins font
- [ ] Responsive: stacked layouts on mobile
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
