# Template: Bitforge (Cryptocurrency / Fintech)
<!-- prep-status: shipped-as=coinwave -->
> **SHIPPED-UNDER** — the ColorLib `bitcoin` design this prep describes already
> ships as `apps/coinwave` (<https://coinwave.free.componentdock.com>).
> Do not scaffold `apps/bitforge`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-coinwave/spec.md`.

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

## Requirements

### Navbar

Feature: Navbar

#### Scenario: Renders navigation links

- **GIVEN** the page loads
- **WHEN** the navbar is visible
- **THEN** it shows links for Home, Convert, Features, Price, Blog

#### Scenario: Fixed positioning on scroll

- **GIVEN** the user scrolls down
- **WHEN** the navbar is visible
- **THEN** it remains fixed at the top with a dark background

#### Scenario: Brand logo links to top

- **GIVEN** the user clicks the logo
- **WHEN** the click is processed
- **THEN** the page scrolls to the top

### Hero / Banner

Feature: Hero Banner

#### Scenario: Displays current rate

- **GIVEN** the page loads
- **WHEN** the hero section is visible
- **THEN** it shows "Currently Purchase Rate" as a subtitle
- **AND** it shows a large price figure (e.g. "$12,356")

#### Scenario: Dark overlay renders over background

- **GIVEN** the page loads
- **WHEN** the hero is visible
- **THEN** a dark semi-transparent overlay covers the background image

#### Scenario: CTA button visible

- **GIVEN** the hero is rendered
- **WHEN** the user looks for the primary action
- **THEN** a "Buy Bitcoin" button is visible with an orange gradient background

### Currency Converter

Feature: Currency Converter

#### Scenario: Converter card overlaps hero

- **GIVEN** the page loads
- **WHEN** the converter section is visible
- **THEN** it overlaps the hero with a negative top margin and elevated z-index

#### Scenario: Form inputs are present

- **GIVEN** the converter is visible
- **WHEN** the user looks at the form
- **THEN** there are input fields for currency conversion amounts
- **AND** a submit button ("Convert" or similar) is present

#### Scenario: Button on gradient background

- **GIVEN** the converter is visible
- **WHEN** the user sees the button
- **THEN** the button has a white background with dark text

### Simple Services (3-column icons)

Feature: Simple Services

#### Scenario: Three service cards rendered

- **GIVEN** the page loads
- **WHEN** the services section is visible
- **THEN** exactly 3 service cards are displayed in a row

#### Scenario: Each card has icon, title, description

- **GIVEN** the services section is visible
- **WHEN** the user views a card
- **THEN** it contains an icon/image, a title link, and a description paragraph

### About Us

Feature: About Us

#### Scenario: Dark background section

- **GIVEN** the page loads
- **WHEN** the about section is visible
- **THEN** it has a dark (#222) background with white text

#### Scenario: Split layout

- **GIVEN** the about section is visible
- **WHEN** the user views the layout
- **THEN** the left half shows an image carousel
- **AND** the right half shows a heading and description

### Features (6-card grid)

Feature: Features

#### Scenario: Six feature cards

- **GIVEN** the page loads
- **WHEN** the features section is visible
- **THEN** 6 feature cards are displayed in a 3x2 grid

#### Scenario: Each card has icon and text

- **GIVEN** the features section is visible
- **WHEN** the user views a card
- **THEN** it contains a linear icon, an h4 title, and a description

#### Scenario: Hover highlights title

- **GIVEN** the features are visible
- **WHEN** the user hovers over a feature card
- **THEN** the title color changes to brand orange (#f78f3d)

### Statistics

Feature: Statistics

#### Scenario: Chart and text split

- **GIVEN** the page loads
- **WHEN** the statistics section is visible
- **THEN** the left side shows a chart/graph image
- **AND** the right side shows a heading, description, and button

#### Scenario: View Details button

- **GIVEN** the statistics section is visible
- **WHEN** the user views the button
- **THEN** a "View Details" button is present
- **AND** it has orange border on hover

### Call to Action

Feature: Call to Action

#### Scenario: Gradient background bar

- **GIVEN** the page loads
- **WHEN** the call-to-action section is visible
- **THEN** it displays a gold-to-orange gradient background

#### Scenario: White text and button

- **GIVEN** the call-to-action is visible
- **WHEN** the user views the content
- **THEN** heading and description text are white
- **AND** a "Buy Bitcoin Now!" button is white with dark text

### Pricing

Feature: Pricing Cards

#### Scenario: Three pricing cards

- **GIVEN** the page loads
- **WHEN** the pricing section is visible
- **THEN** 3 pricing cards are displayed in a row

#### Scenario: Card structure

- **GIVEN** the pricing section is visible
- **WHEN** the user views a card
- **THEN** it has a top bar with name, a description, a price with dollar sign, and a "Get Started" button

#### Scenario: Hover effect

- **GIVEN** the pricing cards are visible
- **WHEN** the user hovers over a card
- **THEN** the bottom area background changes to gold gradient

### Blog

Feature: Blog Cards

#### Scenario: Three blog posts

- **GIVEN** the page loads
- **WHEN** the blog section is visible
- **THEN** 3 blog cards are displayed in a row

#### Scenario: Card structure

- **GIVEN** the blog section is visible
- **WHEN** the user views a card
- **THEN** it contains a thumbnail image, title, excerpt, author avatar, author name, and date

#### Scenario: Hover highlights title

- **GIVEN** the blog cards are visible
- **WHEN** the user hovers over a card title
- **THEN** the title color changes to brand orange

### Footer

Feature: Footer

#### Scenario: Dark background with columns

- **GIVEN** the page loads
- **WHEN** the footer is visible
- **THEN** it has a dark (#04091e) background
- **AND** it contains 3 columns: About Us, Top Products, Newsletter

#### Scenario: Newsletter form

- **GIVEN** the footer is visible
- **WHEN** the user views the newsletter column
- **THEN** an email input field and submit button are present

#### Scenario: Social links

- **GIVEN** the footer is visible
- **WHEN** the user views the bottom bar
- **THEN** social icons (Facebook, Twitter, Dribbble, Behance) are present

#### Scenario: Component Dock attribution

- **GIVEN** the footer is visible
- **WHEN** the user views the copyright line
- **THEN** it links to https://www.componentdock.com/ branded as "Component Dock"

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
