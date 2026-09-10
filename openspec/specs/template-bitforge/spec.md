# Template: Bitforge (Cryptocurrency / Fintech)

## Purpose

Recreation of the ColorLib "Bitcoin" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source template:** ColorLib Bitcoin — https://colorlib.com/wp/template/bitcoin/
- **Preview URL:** https://preview.colorlib.com/theme/bitcoin/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bitcoin-free-template.jpg
- **New name:** `bitforge` (apps/bitforge, @free-react-templates/bitforge)
- **Deploy target:** https://bitforge.free.componentdock.com

## Design Tokens (extracted from preview CSS)

| Token                      | Value                                     | Usage                                                               |
| -------------------------- | ----------------------------------------- | ------------------------------------------------------------------- |
| Font family                | `"Poppins", sans-serif`                   | Body, headings, buttons (weights 300–700)                           |
| Brand primary              | `#f78f3d`                                 | Selection highlight, icon accents, footer links, hover states       |
| Primary gradient           | `linear-gradient(0deg, #f3c400, #f88845)` | Primary buttons, banner, convert area, call-action bar, price hover |
| Heading color              | `#222`                                    | All h1–h6                                                           |
| Body text color            | `#777`                                    | Paragraphs, footer links                                            |
| Light bg                   | `#f9f9ff`                                 | Stat section, form inputs, pricing bottom                           |
| Dark section bg            | `#222`                                    | About Us section                                                    |
| Footer bg                  | `#04091e`                                 | Footer area                                                         |
| Banner overlay             | `rgba(4, 9, 30, 0.85)`                    | Hero banner dark overlay                                            |
| Section padding            | `120px 0`                                 | `.section-gap` — consistent vertical rhythm                         |
| Button radius (primary)    | `25px`                                    | `.primary-btn`                                                      |
| Button radius (banner CTA) | `3px`                                     | `.banner-area .primary-btn`                                         |
| Newsletter button radius   | `57px`                                    | Footer newsletter submit                                            |
| Form control bg            | transparent with `#f9c065` border         | Convert area inputs                                                 |

## Section Structure (order from preview)

1. **Navbar** — Fixed header, logo left, nav links right (Home, Convert, Features, Price, Blog). Transparent over hero; dark bg (#222 rgba) on scroll.
2. **Hero / Banner** — Fullscreen section with background image, dark overlay (rgba(4,9,30,0.85)). "Currently Purchase Rate" subtitle (uppercase, letter-spaced), large price display ($12,356 in 100px bold white), description paragraph, "Buy Bitcoin" CTA button (orange bg, 3px radius, white text).
3. **Currency Converter** — Overlapping card (negative margin -105px, z-index 2) on gradient background. Heading + subtitle centered. Left: crypto icon image. Right: 4 form inputs (amount, currency from, currency to, amount out) + "Convert" button.
4. **Simple Services** — 3-column grid, each with circular icon (top), title link, description paragraph. Cards: icon image + h4 title + p blurb. Light bg.
5. **About Us** — Full-width dark (#222) section. Split: left half = image carousel (OWL-style), right half = brand icon, h1 heading ("Exchange Bitcoin is not that tough Anymore"), description text. White text on dark.
6. **Features** — "Why choose us" header centered. 3x2 grid of feature cards with linear icon + h4 title + description. 6 features: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews. Light bg.
7. **Statistics** — Light bg (#f9f9ff). Split: left = chart/graph image, right = h1 heading ("Ups and Downs of Bitcoin (Realtime)"), description, "View Details" button (orange outline on hover).
8. **Call to Action** — Full-width gradient bar (gold-to-orange), centered text. White heading + description + "Buy Bitcoin Now!" white button.
9. **Pricing** — Centered heading. 3-column pricing cards (bordered, no padding). Each: top bar (name), description, bottom card with large price ($X,XXX) + "Get Started" button. Cards: Ripple ($7,999), Ethereum ($9,999), Bitcoin ($5,999). Hover: bottom bg becomes gold gradient.
10. **Blog** — Centered heading. 3-column blog cards with thumbnail image, h4 title, excerpt, author row (avatar + name + date). Hover: title turns brand orange.
11. **Footer** — Dark (#04091e) section. 3 columns: About Us text, Top Products links, Newsletter (email input + submit). Bottom bar: copyright + social icons (Facebook, Twitter, Dribbble, Behance). Footer links hover to #f78f3d. Footer MUST link https://www.componentdock.com/ (Component Dock).

## Gherkin Requirements & Scenarios

### Navbar

```gherkin
Feature: Navbar

  Scenario: Renders navigation links
    Given the page loads
    When the navbar is visible
    Then it shows links for Home, Convert, Features, Price, Blog

  Scenario: Fixed positioning on scroll
    Given the user scrolls down
    When the navbar is visible
    Then it remains fixed at the top with a dark background

  Scenario: Brand logo links to top
    Given the user clicks the logo
    When the click is processed
    Then the page scrolls to the top
```

### Hero / Banner

```gherkin
Feature: Hero Banner

  Scenario: Displays current rate
    Given the page loads
    When the hero section is visible
    Then it shows "Currently Purchase Rate" as a subtitle
    And it shows a large price figure (e.g. "$12,356")

  Scenario: Dark overlay renders over background
    Given the page loads
    When the hero is visible
    Then a dark semi-transparent overlay covers the background image

  Scenario: CTA button visible
    Given the hero is rendered
    When the user looks for the primary action
    Then a "Buy Bitcoin" button is visible with an orange gradient background
```

### Currency Converter

```gherkin
Feature: Currency Converter

  Scenario: Converter card overlaps hero
    Given the page loads
    When the converter section is visible
    Then it overlaps the hero with a negative top margin and elevated z-index

  Scenario: Form inputs are present
    Given the converter is visible
    When the user looks at the form
    Then there are input fields for currency conversion amounts
    And a submit button ("Convert" or similar) is present

  Scenario: Button on gradient background
    Given the converter is visible
    When the user sees the button
    Then the button has a white background with dark text
```

### Simple Services (3-column icons)

```gherkin
Feature: Simple Services

  Scenario: Three service cards rendered
    Given the page loads
    When the services section is visible
    Then exactly 3 service cards are displayed in a row

  Scenario: Each card has icon, title, description
    Given the services section is visible
    When the user views a card
    Then it contains an icon/image, a title link, and a description paragraph
```

### About Us

```gherkin
Feature: About Us

  Scenario: Dark background section
    Given the page loads
    When the about section is visible
    Then it has a dark (#222) background with white text

  Scenario: Split layout
    Given the about section is visible
    When the user views the layout
    Then the left half shows an image carousel
    And the right half shows a heading and description
```

### Features (6-card grid)

```gherkin
Feature: Features

  Scenario: Six feature cards
    Given the page loads
    When the features section is visible
    Then 6 feature cards are displayed in a 3x2 grid

  Scenario: Each card has icon and text
    Given the features section is visible
    When the user views a card
    Then it contains a linear icon, an h4 title, and a description

  Scenario: Hover highlights title
    Given the features are visible
    When the user hovers over a feature card
    Then the title color changes to brand orange (#f78f3d)
```

### Statistics

```gherkin
Feature: Statistics

  Scenario: Chart and text split
    Given the page loads
    When the statistics section is visible
    Then the left side shows a chart/graph image
    And the right side shows a heading, description, and button

  Scenario: View Details button
    Given the statistics section is visible
    When the user views the button
    Then a "View Details" button is present
    And it has orange border on hover
```

### Call to Action

```gherkin
Feature: Call to Action

  Scenario: Gradient background bar
    Given the page loads
    When the call-to-action section is visible
    Then it displays a gold-to-orange gradient background

  Scenario: White text and button
    Given the call-to-action is visible
    When the user views the content
    Then heading and description text are white
    And a "Buy Bitcoin Now!" button is white with dark text
```

### Pricing

```gherkin
Feature: Pricing Cards

  Scenario: Three pricing cards
    Given the page loads
    When the pricing section is visible
    Then 3 pricing cards are displayed in a row

  Scenario: Card structure
    Given the pricing section is visible
    When the user views a card
    Then it has a top bar with name, a description, a price with dollar sign, and a "Get Started" button

  Scenario: Hover effect
    Given the pricing cards are visible
    When the user hovers over a card
    Then the bottom area background changes to gold gradient
```

### Blog

```gherkin
Feature: Blog Cards

  Scenario: Three blog posts
    Given the page loads
    When the blog section is visible
    Then 3 blog cards are displayed in a row

  Scenario: Card structure
    Given the blog section is visible
    When the user views a card
    Then it contains a thumbnail image, title, excerpt, author avatar, author name, and date

  Scenario: Hover highlights title
    Given the blog cards are visible
    When the user hovers over a card title
    Then the title color changes to brand orange
```

### Footer

```gherkin
Feature: Footer

  Scenario: Dark background with columns
    Given the page loads
    When the footer is visible
    Then it has a dark (#04091e) background
    And it contains 3 columns: About Us, Top Products, Newsletter

  Scenario: Newsletter form
    Given the footer is visible
    When the user views the newsletter column
    Then an email input field and submit button are present

  Scenario: Social links
    Given the footer is visible
    When the user views the bottom bar
    Then social icons (Facebook, Twitter, Dribbble, Behance) are present

  Scenario: Component Dock attribution
    Given the footer is visible
    When the user views the copyright line
    Then it links to https://www.componentdock.com/ branded as "Component Dock"
```

## Verification Checklist

- [ ] Navbar: fixed on scroll, correct links, dark background on scroll
- [ ] Hero: full-width dark overlay, price display, CTA button, gradient styling
- [ ] Converter: overlapping card layout, form inputs, white button on gradient
- [ ] Services: 3-column card grid, icon + title + description
- [ ] About: dark bg, split carousel + text layout
- [ ] Features: 6 cards in 3x2 grid, icons, hover color change
- [ ] Statistics: split layout, chart placeholder, button with hover outline
- [ ] CTA: gradient bar, white text, white button
- [ ] Pricing: 3 cards, price display, hover gradient effect
- [ ] Blog: 3 cards, image + meta, hover title color
- [ ] Footer: dark bg, 3 columns, newsletter form, social links, Component Dock link
- [ ] Responsive: all sections adapt to mobile (single-column on small screens)
- [ ] Tokens: Poppins font, #f78f3d brand, gradient buttons, correct section backgrounds
- [ ] No ColorLib references in app code
- [ ] Footer links https://www.componentdock.com/ as "Component Dock"
