# Template: Premises (Real Estate)

## Purpose

Recreation of ColorLib's **Royalestate** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/royalestate/
- **Preview:** https://preview.colorlib.com/theme/royalestate/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict)
- **New name:** `premises` (app folder: `apps/premises`, package: `@free-react-templates/premises`)
- **Deploy target:** `https://premises.free.componentdock.com`

## Design tokens

Extracted from live preview CSS (`css/style.css`) and screenshot analysis:

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#78d5ef` | Brand cyan — buttons, active nav items, accents, CTA backgrounds |
| `--primary-hover` | `#56caeb` / `#4ac7ea` | Button hover states |
| `--accent` | `#f05d23` | Price text, orange highlights |
| `--dark` | `#252a2b` | Top bar, navbar bg, footer bg |
| `--dark-alt` | `#3c312e` | Parallax/counter section overlay |
| `--body` | `#212529` | Body text |
| `--light` | `#f8f9fa` | Alternate section backgrounds (`bg-light`) |
| `--white` | `#ffffff` | Card backgrounds, text on dark |
| `--muted` | `#546062` | Top bar text |
| `--border` | `#2e3536` | Top bar dividers |

### Typography

- **Font family:** `"Poppins", sans-serif` (loaded via Google Fonts CDN — weights 300, 400, 500, 600, 700)
- **Heading weight:** 400–600 depending on section
- **Body weight:** 400

### Buttons

- **Primary CTA:** `bg-primary` (#78d5ef), white text, uppercase, `p-3 px-4`, `btn-custom` class, icon inline (plus icon)
- **Navbar Sign-In:** dark bg with icon, border styling
- **Navbar Sign-Up:** `cta-colored` — primary bg (#78d5ef)
- **Search button:** dark bg (#252a2b), white text
- **Footer subscribe:** white bg, dark text

### Section backgrounds

- Top bar: `#252a2b` solid
- Navbar: dark solid (bg-dark)
- Hero slider: full-width background image with dark overlay
- Search bar: light bg
- Services/Features: `#f8f9fa` (bg-light)
- Properties grid: white
- Counter/stats: background image with overlay
- Testimonials: `#f8f9fa` (bg-light)
- Blog cards: white
- Newsletter: background image with parallax overlay
- Footer: `#252a2b` solid

### Border radius

- Default: `0` (square/Bootstrap default)
- Form controls: `0.25rem` (4px)
- No rounded corners on cards or buttons

## Section structure (top → bottom)

1. **Top bar** — social icons (left), phone number (right), dark bg `#252a2b`
2. **Navbar** — brand "Premises" (bold + light weight split), nav links (Home, Property, Agents, About, Blog, Contact), Sign-In + Sign-Up CTAs (right)
3. **Hero slider** — Owl Carousel style, full-width property images with dark overlay, property card overlay (title, location, description, price, "View Details" CTA)
4. **Search Property** — horizontal form bar with 8 fields: Keyword, Location, Property Type (dropdown), Property Status (dropdown), Min Beds, Min Bathroom, Min Price, Max Price, Min Area, Max Area, Search button
5. **Services/Features** — 4-column grid with icon + heading + short description (Find Places, Agents With Experience, Buy & Rent, Making Money)
6. **Recent Properties** — 4-column grid of property cards (image, title, address, price, badge)
7. **Most Recommended Properties** — 4-column grid of property cards (same structure)
8. **Counter/Stats** — background image with overlay, 4 stats (9,000 Happy Customers, 10,000 Properties, 1,000 Agents, 500 Awards)
9. **Testimonials** — Owl Carousel, quote cards with user image, quote text, author name, position
10. **Recent Blog** — 4-column blog cards (image, title, date, author, comment count)
11. **Newsletter** — parallax background image, heading, description, email input + Subscribe button
12. **Footer** — dark bg `#252a2b`, 4 columns (brand + social, Buy links, Sell links, Contact), copyright bar at bottom

## Gherkin requirements

### Feature: Premises — Real Estate Template

```gherkin
Feature: Premises real estate template
  As a visitor to the Premises real estate site
  I want to browse properties, search, and contact agents
  So that I can find and purchase/rent real estate

  Background:
    Given the template is loaded at the root URL

  # --- Top Bar ---
  Scenario: Top bar displays social icons and phone number
    Then I see social media icons (Facebook, Twitter, Google, Pinterest) on the left
    And I see a phone number on the right
    And the top bar has a dark background (#252a2b)

  # --- Navbar ---
  Scenario: Navbar displays brand and navigation links
    Then I see the brand "Premises" (split styled)
    And I see navigation links: Home, Property, Agents, About, Blog, Contact
    And I see Sign-In and Sign-Up buttons on the right
    And the navbar has a dark background

  Scenario: Navbar becomes sticky on scroll
    When I scroll down the page
    Then the navbar remains fixed at the top
    And the navbar background becomes slightly lighter on scroll

  # --- Hero Slider ---
  Scenario: Hero slider shows property images with overlay card
    Then I see a full-width property image with a dark overlay
    And I see a property title, location, description, and price
    And I see a "View Details" button

  Scenario: Hero slider has multiple slides
    Then I see multiple property slides
    And navigation dots or arrows allow slide switching

  # --- Search Property ---
  Scenario: Search bar provides property search form
    Then I see a "Search Property" heading
    And I see form fields: Keyword, Location, Property Type, Property Status
    And I see fields: Min Beds, Min Bathroom, Min Price, Max Price, Min Area, Max Area
    And I see a "Search" button

  Scenario: Search form fields are interactive
    When I type in the Keyword field
    Then the field accepts text input
    When I select from the Property Type dropdown
    Then the dropdown shows options (Commercial, Residential, Villa, Condominium, Apartment)

  # --- Services/Features ---
  Scenario: Services section displays four feature cards
    Then I see four feature cards in a row
    And each card has an icon, heading, and short description
    And the features are: Find Places, Agents With Experience, Buy & Rent, Making Money

  # --- Recent Properties ---
  Scenario: Recent properties grid displays property cards
    Then I see a "Recent Properties" heading
    And I see a grid of property cards
    And each card has an image, title, location, and price
    And the price is displayed in orange (#f05d23)

  # --- Most Recommended Properties ---
  Scenario: Recommended properties section displays cards
    Then I see a "Most Recommended Properties" heading
    And I see a grid of property cards
    And each card has an image, title, location, and price

  # --- Counter/Stats ---
  Scenario: Stats section shows key metrics
    Then I see a "Some fun facts" heading
    And I see four statistics with animated counters
    And the stats are: Happy Customers (9,000), Properties (10,000), Agents (1,000), Awards (500)
    And the section has a background image with overlay

  # --- Testimonials ---
  Scenario: Testimonials carousel shows client quotes
    Then I see a testimonial carousel
    And each testimonial has a quote, user image, author name, and position
    And carousel navigation allows switching between testimonials

  # --- Blog ---
  Scenario: Blog section displays recent posts
    Then I see a "Recent Blog" heading
    And I see four blog cards
    And each card has an image, title, date, author, and comment count

  # --- Newsletter ---
  Scenario: Newsletter section has email subscription form
    Then I see a "Subscribe to our Newsletter" heading
    And I see a description paragraph
    And I see an email input field and a "Subscribe" button
    And the section has a parallax background image

  # --- Footer ---
  Scenario: Footer displays brand info, links, and social
    Then I see the brand name "Premises" in the footer
    And I see social media icons (Twitter, Facebook, Instagram)
    And I see Buy links (Home For Sale, Open Houses, New Listing, Recently Reduce, Off-Market Homes)
    And I see Sell links (Sell Your Home, Get A Home Valuation, Local Home Prices, Guides & Rules)
    And I see contact information
    And the footer links to "https://www.componentdock.com/" (Component Dock)
    And the footer has a dark background (#252a2b)

  # --- Responsive ---
  Scenario: Template is responsive on mobile
    When I view the page on a mobile viewport
    Then the navbar collapses to a hamburger menu
    And the search form stacks vertically
    And property cards stack in a single column
    And the footer columns stack vertically
```

## Verification checklist

- [ ] All 12 sections rendered in correct order
- [ ] Brand color `#78d5ef` used for primary CTAs
- [ ] Orange accent `#f05d23` used for prices
- [ ] Font is Poppins (loaded from Google Fonts)
- [ ] Dark top bar and navbar with social icons + phone
- [ ] Hero slider with property cards and "View Details" CTA
- [ ] Search bar with all 10 form fields
- [ ] 4-column services/features grid
- [ ] Property cards in 2 sections (Recent + Recommended)
- [ ] Counter/stats section with animated numbers
- [ ] Testimonials carousel with quotes and user images
- [ ] Blog cards with image, title, date, author, comments
- [ ] Newsletter with email input and parallax bg
- [ ] Footer with brand, Buy/Sell links, social, contact, Component Dock link
- [ ] Responsive: hamburger nav, stacked cards on mobile
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Placeholder images via `picsum.photos`
- [ ] Tests: 100% coverage (Vitest + Testing Library)
