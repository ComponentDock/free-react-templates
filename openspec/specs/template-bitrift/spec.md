# Template: Bitrift (Cryptocurrency Landing Page)
<!-- prep-status: shipped-as=coinwave -->
> **SHIPPED-UNDER** — the ColorLib `bitcoin` design this prep describes already
> ships as `apps/coinwave` (<https://coinwave.free.componentdock.com>).
> Do not scaffold `apps/bitrift`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-coinwave/spec.md`.

## Purpose

Recreation of ColorLib's **Bitcoin** template as a React 19 + Vite +
Tailwind 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/bitcoin/
- **Preview:** https://preview.colorlib.com/theme/bitcoin/
- **New name:** `bitrift` (apps/bitrift, @free-react-templates/bitrift)
- **Deploy:** https://bitrift.free.componentdock.com
- **Category:** Cryptocurrency / Fintech Landing Page
- **Source design:** ColorLib "Bitcoin" — https://colorlib.com/wp/template/bitcoin/

## Design tokens (extracted from live preview DOM + CSS)

| Token              | Value                                      | Notes                                                    |
| ------------------ | ------------------------------------------ | -------------------------------------------------------- |
| Font family        | `"Poppins", sans-serif`                    | Weights: 300 (body), 400 (regular), 500 (medium), 600 (headings), 700 (bold) |
| Brand orange       | `#f78f3d`                                  | Primary CTA, accents, hover states, footer social hover  |
| Gradient primary   | `linear-gradient(0deg, #f3c400 0%, #f88845 100%)` | Primary buttons, converter card bg, CTA section bg, pricing hover |
| Dark background    | `#222`                                     | About section bg, headings color                         |
| Very dark bg       | `#04091e`                                  | Footer bg, hero overlay (`rgba(4,9,30,0.85)`)           |
| Body text          | `#777`                                     | Paragraphs, secondary text                               |
| Heading text       | `#222`                                     | All h1-h6 headings                                       |
| Light bg           | `#f9f9ff`                                  | Stat section bg, price card bottom bg, form inputs       |
| White bg           | `#fff`                                     | Page bg, service section, call-to-action button           |
| Card top bg        | `#fbfcff`                                  | Pricing card top area                                    |
| Border color       | `#eee`                                     | Pricing cards border, dividers                           |
| Button radius      | 25px                                       | `.primary-btn` pill shape (banner btn: 3px square)      |
| Button radius (sm) | 57px                                       | Newsletter submit button in footer                       |
| Section spacing    | 120px vertical (`.section-gap`)            | Generous section padding                                 |
| Selection color    | `#f78f3d` bg, `#fff` text                 | Text selection highlight                                  |
| Overlay            | `rgba(4,9,30,0.85)`                       | Hero dark overlay on bg image                            |

## Section structure (order from DOM)

1. **Navbar** — transparent overlay at top, logo left, nav links right:
   Home, Convert, Feature, Price, Blog, Pages (dropdown: Generic, Elements).
   Becomes sticky on scroll. Mobile: hamburger toggle.

2. **Hero / Banner** — full-width, background image (physical bitcoins),
   dark overlay (`rgba(4,9,30,0.85)`). Content:
   - Subheading: "Currently Purchase Rate" (white, uppercase, small)
   - Large price: "$12,356" (huge white text, bold)
   - Paragraph of placeholder copy (white)
   - "Buy Bitcoin" CTA button (orange gradient, pill shape on desktop, square 3px radius on mobile)

3. **Converter** — gradient card (`#f3c400 → #f88845`) overlapping hero bottom
   (negative margin -105px, z-index 2). Contains:
   - Heading: "The Currency Converter" (white)
   - Subtext (white)
   - Bitcoin logo icon (left)
   - 4 input fields in 2-column grid (feet/pounds, inches/pounds — placeholder text)
   - "Calculate Your BMI" button (white bg, dark text, pill shape) — note: template copy is placeholder

4. **Simple Services** — white bg, 3-column grid:
   - "Get Paid through Bitcoin" (icon + heading + description)
   - "Bitcoin Exchange Analysis"
   - "Send & Receive Bitcoin"
   Each with icon image, heading, paragraph.

5. **About Us** — dark bg (`#222`), 2-column no-gutters:
   - Left: image carousel (about-img.jpg with owl-carousel navigation)
   - Right: small Bitcoin icon, heading "Exchange Bitcoin is not that tough Anymore" (white), description paragraph

6. **Features / Why Choose Us** — white bg, centered header:
   - "Why choose us during purchase bitcoin" (h1)
   - "Who are in extremely love with eco friendly system." (subtitle)
   - 6-item grid (3×2): Expert Technicians, Professional Service, Great Support,
     Technical Skills, Highly Recommended, Positive Reviews
   Each with linear icon (lnr-*), title, description.

7. **Stats / Chart** — light bg (`#f9f9ff`), 2-column:
   - Left: chart image (bitcoin price chart)
   - Right: "Ups and Downs of Bitcoin (Realtime)" heading, description, "View Details" button (orange border hover)

8. **Call to Action** — gradient section (`#f3c400 → #f88845`):
   - "Huge Transaction in last Week" (white heading)
   - Description paragraph (white)
   - "Buy Bitcoin Now!" button (white bg, dark text)

9. **Pricing** — white bg, centered header:
   - "Purchase whatever you want" heading
   - 3 pricing cards (Ripple $7999, Ethereum $9999, Bitcoin $5999)
   Each card: top area (coin name), description, bottom area (large price, "Get Started" button — dark bg, hover: gradient)

10. **Blog** — white bg, centered header:
    - "Latest Posts from our Blog" heading
    - 3 blog cards (thumbnail image, title, excerpt, author photo + name + date)

11. **Footer** — very dark bg (`#04091e`), multi-column:
    - About Us (description)
    - Top Products (links: Managed Website, Reputation, Tools, Service)
    - Newsletter (email input + arrow submit button with gradient)
    - Bottom bar: copyright text + social icons (Facebook, Twitter, Dribbble, Behance)
    - Footer social icons: dark bg (`#111`), orange hover, gray icon color

## Requirements

### Navbar

#### Scenario: Navbar shows brand and navigation links

- **GIVEN** the page is loaded
- **THEN** the brand "Bitrift" is visible in the navbar
- **AND** nav links "Home", "Convert", "Feature", "Price", "Blog", "Pages" are shown

#### Scenario: Navbar becomes sticky on scroll

- **GIVEN** the page is loaded
- **WHEN** the user scrolls down
- **THEN** the navbar remains visible at the top of the viewport

### Hero

#### Scenario: Hero displays current price and CTA

- **GIVEN** the hero section is visible
- **THEN** the subheading "Currently Purchase Rate" is displayed
- **AND** a large price value is prominently shown
- **AND** a "Buy Bitcoin" button with gradient background is visible

#### Scenario: Hero has dark overlay on background image

- **GIVEN** the hero section is visible
- **THEN** a dark semi-transparent overlay covers the background image
- **AND** the overlay color is approximately rgba(4,9,30,0.85)

### Converter

#### Scenario: Converter shows form inputs and CTA

- **GIVEN** the converter section is visible
- **THEN** the heading "The Currency Converter" is displayed
- **AND** input fields for currency conversion are shown
- **AND** a "Calculate" button is visible

#### Scenario: Converter overlaps the hero section

- **GIVEN** the converter section is visible
- **THEN** it overlaps the bottom of the hero section
- **AND** has a yellow-to-orange gradient background

### Simple Services

#### Scenario: Simple services shows 3 service items

- **GIVEN** the simple services section is visible
- **THEN** 3 service items are shown in a row
- **AND** each item has an icon, heading, and description

### About Us

#### Scenario: About section shows two-column layout

- **GIVEN** the about section is visible
- **THEN** the left side displays an image carousel
- **AND** the right side shows the heading "Exchange Bitcoin is not that tough Anymore"
- **AND** the about section has a dark background

#### Scenario: About carousel has navigation

- **GIVEN** the about section is visible
- **THEN** up and down navigation arrows are displayed for the image carousel

### Features

#### Scenario: Features section shows 6 items

- **GIVEN** the features section is visible
- **THEN** the header "Why choose us during purchase bitcoin" is displayed
- **AND** 6 feature items are shown in a 3x2 grid
- **AND** each item has an icon, title, and description

### Stats

#### Scenario: Stats section shows chart and text

- **GIVEN** the stats section is visible
- **THEN** a chart image is displayed on the left
- **AND** "Ups and Downs of Bitcoin (Realtime)" heading is shown on the right
- **AND** a "View Details" button is visible

### Call to Action

#### Scenario: CTA section displays with gradient background

- **GIVEN** the call-to-action section is visible
- **THEN** "Huge Transaction in last Week" heading is displayed in white
- **AND** a "Buy Bitcoin Now!" button is shown with white background
- **AND** the section has a yellow-to-orange gradient background

### Pricing

#### Scenario: Pricing shows 3 crypto packages

- **GIVEN** the pricing section is visible
- **THEN** "Purchase whatever you want" heading is displayed
- **AND** 3 pricing cards are shown (Ripple, Ethereum, Bitcoin)
- **AND** each card shows a price and "Get Started" button

#### Scenario: Pricing card highlights on hover

- **GIVEN** the pricing section is visible
- **WHEN** the user hovers over a pricing card
- **THEN** the bottom section background changes to gradient

### Blog

#### Scenario: Blog shows 3 post cards

- **GIVEN** the blog section is visible
- **THEN** "Latest Posts from our Blog" heading is displayed
- **AND** 3 blog cards are shown
- **AND** each card has a thumbnail, title, excerpt, and author info

### Footer

#### Scenario: Footer shows company info and newsletter

- **GIVEN** the footer is visible
- **THEN** About Us description and social links are displayed
- **AND** Top Products navigation links are shown
- **AND** a newsletter email input and submit button are visible

#### Scenario: Footer includes Component Dock attribution

- **GIVEN** the footer is visible
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Navbar: transparent overlay, sticky on scroll, brand + nav links
- [ ] Hero: full-width bg image, dark overlay, price display, "Buy Bitcoin" CTA
- [ ] Converter: gradient card overlapping hero, form inputs, calculate button
- [ ] Simple Services: 3-column grid with icons
- [ ] About Us: dark bg, 2-column, image carousel with nav arrows
- [ ] Features: 6-item grid (3×2), centered header
- [ ] Stats: chart image + "Ups and Downs" text + CTA
- [ ] Call to Action: gradient bg, white heading, white button
- [ ] Pricing: 3 cards (Ripple, Ethereum, Bitcoin), hover gradient effect
- [ ] Blog: 3 cards with thumbnails and author info
- [ ] Footer: dark bg (#04091e), newsletter form, social icons
- [ ] All design tokens match (Poppins font, #f78f3d orange, yellow-orange gradient)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Footer links to https://www.componentdock.com/
