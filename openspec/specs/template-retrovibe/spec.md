# Template: RetroVibe (Photography / Portfolio)

## Purpose

Recreation of ColorLib **Rettro** — a photography portfolio template with retro aesthetic.

- **Source:** https://colorlib.com/wp/template/rettro/
- **Preview:** https://preview.colorlib.com/theme/rettro/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `retrovibe` (never reuse source name "rettro")

## Design Tokens

Extracted from `style.css` at preview.colorlib.com/theme/rettro/:

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#1f2b7b` | Dark navy — headings, accents |
| `--brand-secondary` | `#6382e6` | Blue — buttons, links, highlights |
| `--brand-accent` | `#f4e700` | Yellow — accent highlights |
| `--brand-pink` | `#e66686` | Pink — secondary accents |
| `--brand-green` | `#73fbaf` | Mint green — accent highlights |
| `--brand-purple` | `#a367e7` | Purple — accent highlights |
| `--brand-orange` | `#f09359` | Orange — accent highlights |
| `--text-primary` | `#071112` | Near-black — body text |
| `--text-muted` | `#999999` | Gray — secondary text |
| `--bg-light` | `#fbf9ff` | Off-white — page background |
| `--bg-section` | `#f7f7f7` | Light gray — section backgrounds |
| `--bg-dark` | `#010a44` | Deep navy — dark section bg |
| `--white` | `#fff` | White — text on dark, card bg |

### Fonts
| Token | Value | Usage |
|-------|-------|-------|
| `--font-heading` | `"Playfair Display", serif` | Headings |
| `--font-body` | `"Montserrat", sans-serif` | Body text, nav, buttons |

### Border Radius
| Value | Usage |
|-------|-------|
| `0` | Buttons — sharp square edges (retro look) |
| `50%` | Circular elements (avatar, slider nav) |
| `8px` | Cards, containers |
| `12px` | Modals, overlays |

## Section Structure (in page order)

1. **Navbar** — sticky top, logo left, nav links center, hamburger for mobile
2. **Hero/Slider** — full-width carousel with 3 slides, each with "Photography" heading, "Travel pro" label, description, CTA. Dark overlay on background images.
3. **Gallery** — "With my camera, I capture daily life" — 4-column image grid with hover overlay labels (Travelshots, Experimental, Father's Day, Curious Cats). "More Portfolio" CTA button.
4. **About/Startup** — "I'm Ready to Exceed Expectations" — text content + "About Me" button link. Left-aligned text with description.
5. **Services/Categories** — "Life is about Creating Experiences" — 4 service items with icons, title, description (Ipsam voluptatem quia voluptas pattern).
6. **Testimonials** — dark background section, carousel with testimonial quote, author name, role. Background image overlay.
7. **Pricing** — "Choose a plan" — 3 pricing cards (Silver $50, Gold $100, Platinum $50). Features list, "Get Started" CTA. "Most Popular" badge on Gold.
8. **Instagram Feed** — horizontal image row (6 images).
9. **Footer** — nav links (Home, About, Portfolio, Pricing, Blog, Contact), copyright, "Made with Component Dock" branding.

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Sticky navbar with navigation links
  Given the page loads
  Then a sticky navbar is visible at the top
  And it contains the logo "RetroVibe"
  And it shows nav links: Home, About, Portfolio, Pricing, Blog, Contact
  And on mobile a hamburger menu toggle is visible

Scenario: Navbar remains visible on scroll
  Given the user scrolls down
  Then the navbar stays fixed at the top of the viewport
```

### Hero Slider
```gherkin
Scenario: Hero carousel displays 3 slides
  Given the page loads
  Then a full-width hero carousel is visible
  And slide 1 shows "Photography" heading and "Travel pro" subtitle
  And slide 2 shows "Photography" heading and "Travel pro" subtitle
  And slide 3 shows "Photography" heading and "Travel pro" subtitle
  And each slide has a description paragraph and CTA button

Scenario: Hero carousel auto-plays
  Given the hero is visible
  When 5 seconds pass
  Then the carousel advances to the next slide automatically
```

### Gallery
```gherkin
Scenario: Gallery section shows 4 images
  Given the gallery section is in view
  Then the heading reads "With my camera, I capture daily life"
  And 4 gallery images are displayed in a grid
  And each image has a label (Travelshots, Experimental, Father's Day, Curious Cats)
  And a "More Portfolio" button is visible

Scenario: Gallery images respond to hover
  Given the gallery is visible
  When the user hovers over a gallery image
  Then a dark overlay with the label text appears
```

### About Section
```gherkin
Scenario: About section displays with heading and CTA
  Given the about section scrolls into view
  Then the heading reads "I'm Ready to Exceed Expectations"
  And a descriptive paragraph is shown
  And an "About Me" button/link is visible
```

### Services/Categories
```gherkin
Scenario: Services section shows 4 service cards
  Given the services section is in view
  Then the heading reads "Life is about Creating Experiences"
  And 4 service items are displayed
  And each item has an icon, title, and description paragraph
```

### Testimonials
```gherkin
Scenario: Testimonials section displays on dark background
  Given the testimonials section scrolls into view
  Then a dark/navy background is visible
  And at least 1 testimonial quote is displayed
  And author name and role are shown below the quote
```

### Pricing
```gherkin
Scenario: Pricing section shows 3 plans
  Given the pricing section is in view
  Then the heading reads "Choose a plan"
  And 3 pricing cards are displayed: Silver, Gold, Platinum
  And each card shows a price ($50.00, $100.00, $50.00)
  And each card lists features (2 TB space, unlimited bandwidth, etc.)
  And each card has a "Get Started" button
  And the Gold plan has a "Most Popular" badge
```

### Instagram Feed
```gherkin
Scenario: Instagram section shows horizontal image row
  Given the instagram section is in view
  Then 6 images are displayed in a horizontal row
```

### Footer
```gherkin
Scenario: Footer displays with nav links and copyright
  Given the footer is visible
  Then it contains navigation links: Home, About, Portfolio, Pricing, Blog, Contact
  And a copyright notice is shown
  And "Made with Component Dock" branding is present
```

## Verification Checklist

- [ ] Navbar: sticky positioning, logo, nav links, hamburger on mobile
- [ ] Hero: 3-slide carousel with auto-play, dark overlay, CTA buttons
- [ ] Gallery: 4-column grid, hover overlay, label text, CTA button
- [ ] About: heading, description, "About Me" button
- [ ] Services: 4 cards with icons, titles, descriptions
- [ ] Testimonials: dark bg, carousel, quote + author
- [ ] Pricing: 3 cards, prices, features, "Most Popular" badge, CTAs
- [ ] Instagram: 6 horizontal images
- [ ] Footer: nav links, copyright, Component Dock branding
- [ ] Responsive: mobile hamburger, stacked layouts on small screens
- [ ] Design tokens: brand colors (#1f2b7b, #6382e6), Playfair Display + Montserrat fonts, sharp button edges (border-radius: 0)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
