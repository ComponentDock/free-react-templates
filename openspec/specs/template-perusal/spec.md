# Template: Perusal (Directory / Listing)

## Purpose

Recreation of ColorLib's **Browse** template.
- Source: https://colorlib.com/wp/template/browse/
- Preview: https://preview.colorlib.com/theme/browse/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/browse-free-template.jpg
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- Category: Directory / local business listing with search, categories, and testimonials

## Design tokens

| Token | Value | Source |
|---|---|---|
| Brand primary | `#00918e` (teal) | `.text-primary`, `.btn-primary` in style.css |
| Font family | `"Rubik", sans-serif` | `font-family` declaration in style.css |
| Button radius | `30px` (pill) | `.btn-primary` border-radius in style.css |
| Button primary bg | `#00918e` | `.btn-primary { background: #00918e }` |
| Button primary text | `#fff` | `.btn-primary { color: #fff }` |
| Body text | `#4d4d4d` | `body { color: #4d4d4d }` |
| Secondary text | `#737373`, `#999` | `.color-black-opacity-5`, `.meta` |
| Section heading | `#00918e` | `.text-primary` on all h2 section headings |
| Light section bg | `#f4f5f9` | `.popular-category` hover, also `.bg-light` on testimonials |
| Footer bg | `#000` (black) | `.site-footer { background: #000 }` |
| CTA section bg | `#00918e` (teal) | `.py-5.bg-primary` wrapper |
| Hero overlay | `rgba(0,0,0,0.6)` | `.site-blocks-cover.overlay` |
| Card border-radius | `0` (square) | `.listing-item` default |
| White bg | `#fff` | `.form-search-wrap`, card backgrounds |

## Visual design (from screenshot)

- **Category:** Directory / local business listing site (hotels, restaurants, events, spa, fitness).
- **Hero:** Full-width background image (dark overlay), large centered headline "Find Nearby [typed-words]" with a typewriter effect cycling through "Attractions", "Events", "Hotels", "Restaurants". Below: white search bar card with 4 fields (text input, location input with icon, category dropdown, teal Search button).
- **Most Visited Places:** 3-column grid of 6 listing cards. Each card has a large image, heart/bookmark icon, category badge (white pill), place name, and address. Square corners.
- **Popular Categories:** 6-column icon grid with flaticon icons, category name, and listing count. Teal hover state. "View All Categories" outline button below.
- **Why Us:** Two-column layout — left: large image; right: 4-item Bootstrap accordion FAQ with border/padding cards.
- **How It Works:** 3-column step cards — each has an SVG illustration, large step number, title, and description.
- **Satisfied Customers:** Light gray background (`bg-light`), owl carousel of testimonials — avatar image, name, quoted text.
- **Tips & Articles:** 3-column blog cards — image, title, author + date, short excerpt.
- **CTA Banner:** Full-width teal background, white text "Let's get started. Create your account", outline-white Sign Up button.
- **Footer:** Black background, 4-column layout (Quick Links, Products, Features, Follow Us social icons) + Newsletter subscribe form. Copyright line at bottom.

## Gherkin requirements

### Navbar
```gherkin
Feature: Perusal Navbar
  Scenario: Logo renders as site name
    Given the page is loaded
    Then a link with text "Perusal" is visible in the header
    And it links to "/"

  Scenario: Navigation links present
    Given the page is loaded
    Then the navigation contains links: "Home", "Listings", "About", "Blog", "Contact"

  Scenario: Mobile hamburger toggle
    Given the viewport is mobile
    When the hamburger menu button is clicked
    Then the mobile navigation menu becomes visible
```

### Hero Section
```gherkin
Feature: Perusal Hero
  Scenario: Hero displays headline with typed text
    Given the page is loaded
    Then a heading "Find Nearby" is visible in the hero
    And a typing animation cycles through place types

  Scenario: Search bar renders with all fields
    Given the page is loaded
    Then a text input with placeholder "What are you looking for?" is visible
    And a text input with placeholder "Location" is visible
    And a dropdown with label "All Categories" is visible
    And a "Search" button is visible

  Scenario: Hero background image
    Given the page is loaded
    Then the hero section has a background image with a dark overlay
```

### Most Visited Places
```gherkin
Feature: Most Visited Places
  Scenario: Section heading
    Given the page is loaded
    Then a heading "Most Visited Places" is visible

  Scenario: Listing cards render
    Given the page is loaded
    Then 6 listing cards are displayed in a 3-column grid

  Scenario: Each listing card has required content
    Given a listing card is displayed
    Then it shows an image, a category badge, a place name, and an address
    And a heart/bookmark icon is present
```

### Popular Categories
```gherkin
Feature: Popular Categories
  Scenario: Section heading
    Given the page is loaded
    Then a heading "Popular Categories" is visible

  Scenario: Category grid renders
    Given the page is loaded
    Then 6 category items are displayed in a grid
    And each category shows an icon, name, and count number

  Scenario: View All Categories button
    Given the page is loaded
    Then a "View All Categories" button is visible
    And it has an outline style
```

### Why Us (Accordion FAQ)
```gherkin
Feature: Why Us FAQ
  Scenario: Section layout
    Given the page is loaded
    Then a heading "Why Us" is visible
    And an image is displayed alongside the FAQ

  Scenario: Accordion items render
    Given the page is loaded
    Then 4 accordion FAQ items are displayed
    And each item has a clickable question heading
    And clicking a question toggles its answer text
```

### How It Works
```gherkin
Feature: How It Works
  Scenario: Section heading
    Given the page is loaded
    Then a heading "How It Works" is visible

  Scenario: Steps render
    Given the page is loaded
    Then 3 step cards are displayed
    And each step shows an illustration, step number, title, and description
```

### Satisfied Customers (Testimonials)
```gherkin
Feature: Satisfied Customers
  Scenario: Section heading
    Given the page is loaded
    Then a heading "Satisfied Customers" is visible

  Scenario: Testimonials render in carousel
    Given the page is loaded
    Then at least 3 testimonials are available
    And each testimonial shows an avatar image, name, and quoted text
    And the section has a light gray background
```

### Tips & Articles
```gherkin
Feature: Tips & Articles
  Scenario: Section heading
    Given the page is loaded
    Then a heading "Tips & Articles" is visible

  Scenario: Blog cards render
    Given the page is loaded
    Then 3 blog cards are displayed in a 3-column grid
    And each card shows an image, title, author, date, and excerpt
```

### CTA Banner
```gherkin
Feature: CTA Banner
  Scenario: CTA renders
    Given the page is loaded
    Then a banner with teal background is visible
    And it displays "Let's get started. Create your account"
    And a "Sign Up" button with outline-white style is visible
```

### Footer
```gherkin
Feature: Footer
  Scenario: Footer links render
    Given the page is loaded
    Then the footer contains 4 link columns: Quick Links, Products, Features, Follow Us
    And social media icons (Facebook, Twitter, Instagram, LinkedIn) are displayed

  Scenario: Newsletter form
    Given the page is loaded
    Then a newsletter email input is visible in the footer
    And a "Send" button is visible

  Scenario: Footer attribution
    Given the page is loaded
    Then a "Component Dock" link is present in the footer
```

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App folder: `apps/perusal/`
- [ ] Package name: `@free-react-templates/perusal`
- [ ] All 10 sections render correctly matching the reference
- [ ] Design tokens: brand color `#00918e`, font Rubik, pill buttons (radius-30)
- [ ] Typed.js effect implemented in hero (or equivalent React typing animation)
- [ ] Search bar with 4 fields in hero
- [ ] 6 listing cards in Most Visited Places
- [ ] 6 category items in Popular Categories grid
- [ ] Accordion FAQ in Why Us section
- [ ] 3 step cards in How It Works
- [ ] Testimonial carousel in Satisfied Customers (light bg)
- [ ] 3 blog cards in Tips & Articles
- [ ] CTA banner with teal bg + Sign Up button
- [ ] Footer with 4 columns + newsletter form + Component Dock link
- [ ] No ColorLib references in app code
- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `npm run verify:app perusal` passes
- [ ] CNAME: `perusal.free.componentdock.com`
- [ ] Homepage: `https://perusal.free.componentdock.com`
