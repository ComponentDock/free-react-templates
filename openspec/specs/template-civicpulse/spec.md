# Template: CivicPulse (Political / Party)

## Purpose

Recreation of ColorLib **Politics** — a political party/campaign template with blue brand color.

- **Source:** https://colorlib.com/wp/template/politics/
- **Preview:** https://preview.colorlib.com/theme/politics/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `civicpulse` (never reuse source name "politics")

## Design Tokens

Extracted from `css/main.css` at preview.colorlib.com/theme/politics/:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#3898f8` | Bright blue — primary buttons, links, accents, headings |
| `--text-dark` | `#222` | Near-black — body text, headings |
| `--text-muted` | `#777` | Gray — secondary text |
| `--text-light` | `#ccc` | Light gray — borders, dividers |
| `--white` | `#fff` | White — text on dark, card bg |
| `--bg-light` | `#f9f9ff` | Off-white — page background |
| `--bg-dark` | `#222222` | Dark — footer background |
| `--bg-black` | `#000` | Black — footer sections |

### Fonts
| Token | Value | Usage |
|-------|-------|-------|
| `--font-body` | `"Poppins", sans-serif` | All text (headings + body) |

### Border Radius
| Value | Usage |
|-------|-------|
| `0` | Most elements — sharp rectangular style |
| `20px` | Newsletter input |
| `25px` | Rounded elements |
| `3px` | Small rounded corners |

## Section Structure (in page order)

1. **Navbar** — sticky top, logo, nav links with anchor scroll
2. **Banner/Hero** — "Don't look further, This is our Leader" + "Support Our Party" heading, description, "Get Started" CTA. Countdown timer section below.
3. **Services** — "What we Offer to our Supporters" — 3 service cards: Conduct Campaign, Generate Member, Energy Saving Policy. Each with icon, title, description.
4. **About** — "Who we are to Serve the nation" — text content + 2 feature items: Expert Services, Great Support. Left text, right image.
5. **Gallery** — "Our Gallery Archive" — image grid of portfolio items.
6. **Counter** — Statistics section: 2K+ Projects, 5.5K Employees, 959 Happy Clients, 367 Tickets. Animated counters.
7. **Testimonials/Goals** — "Goals to Achieve for the leadership" — testimonial carousel with quotes and author info.
8. **Blog** — "Latest From Our Blog" — 3 blog cards with image, date, category, title, excerpt, likes/comments count.
9. **Footer** — Multi-column: Top Products links, Newsletter subscription, Instagram Feed. Copyright with "Made with Component Dock".

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Sticky navbar with navigation links
  Given the page loads
  Then a sticky navbar is visible at the top
  And it contains the logo
  And it shows nav links for Home, Service, About, Gallery, Blog, Contact

Scenario: Navbar scrolls to sections
  Given the navbar is visible
  When the user clicks a nav link
  Then the page scrolls to the corresponding section
```

### Banner/Hero
```gherkin
Scenario: Hero banner displays with CTA
  Given the page loads
  Then the banner heading reads "Don't look further, This is our Leader"
  And "Support Our Party" subheading is visible
  And a description paragraph is shown
  And a "Get Started" button is visible

Scenario: Countdown timer is displayed
  Given the banner is visible
  Then a countdown timer section is present below the hero content
```

### Services
```gherkin
Scenario: Services section shows 3 service cards
  Given the services section scrolls into view
  Then the heading reads "What we Offer to our Supporters"
  And 3 service cards are displayed
  And each card has an icon, title, and description
  And the services are: Conduct Campaign, Generate Member, Energy Saving Policy
```

### About
```gherkin
Scenario: About section displays with features
  Given the about section is in view
  Then the heading reads "Who we are to Serve the nation"
  And a description paragraph is shown
  And 2 feature items are displayed: Expert Services, Great Support
  And each feature has an icon and description
```

### Gallery
```gherkin
Scenario: Gallery section shows portfolio images
  Given the gallery section is in view
  Then the heading reads "Our Gallery Archive"
  And a grid of portfolio images is displayed
```

### Counter
```gherkin
Scenario: Counter section displays statistics
  Given the counter section scrolls into view
  Then 4 statistics are shown
  And they display: 2K+ Projects, 5.5K Employees, 959 Clients, 367 Tickets
  And the counters animate on scroll
```

### Testimonials
```gherkin
Scenario: Testimonials section shows quotes
  Given the testimonials section is in view
  Then the heading reads "Goals to Achieve for the leadership"
  And at least 1 testimonial quote is displayed
  And author name and role are shown
```

### Blog
```gherkin
Scenario: Blog section shows 3 articles
  Given the blog section is in view
  Then the heading reads "Latest From Our Blog"
  And 3 blog cards are displayed
  And each card has an image, date, category, title, and excerpt
  And each card shows likes and comments count
```

### Footer
```gherkin
Scenario: Footer displays with newsletter and links
  Given the footer is visible
  Then it contains product/service links
  And a newsletter subscription form is present
  And an Instagram feed section is shown
  And copyright notice with "Made with Component Dock" branding is present
```

## Verification Checklist

- [ ] Navbar: sticky, logo, nav links, anchor scroll
- [ ] Banner: hero heading, subheading, description, CTA, countdown
- [ ] Services: 3 cards with icons, titles, descriptions
- [ ] About: heading, description, 2 feature items with icons
- [ ] Gallery: image grid
- [ ] Counter: 4 animated statistics
- [ ] Testimonials: carousel with quotes and author info
- [ ] Blog: 3 cards with images, metadata, likes/comments
- [ ] Footer: links, newsletter, Instagram feed, copyright, Component Dock
- [ ] Design tokens: brand blue (#3898f8), Poppins font, sharp edges
- [ ] Responsive: stacked layouts on mobile
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
