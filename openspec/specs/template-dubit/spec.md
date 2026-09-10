# Template: Dubit (Cryptocurrency / Bitcoin Landing Page)

## Purpose

Recreation of the ColorLib **Bitcoin** template — a cryptocurrency landing page
featuring a hero with live price display, currency converter, services, pricing
cards, and blog. This spec covers a React 19 + Vite + Tailwind 4 + TypeScript
implementation faithful to the original design.

- **Source slug:** `bitcoin`
- **ColorLib page:** https://colorlib.com/wp/template/bitcoin/
- **Live preview:** https://preview.colorlib.com/theme/bitcoin/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bitcoin-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/dubit`
- **Deploy target:** `dubit.free.componentdock.com`

## Visual design notes

The template is a **dark-themed cryptocurrency landing page** with a strong
orange/gold accent:

- **Hero** is fullscreen with a dark background image (Bitcoin coin, dark
  vignette `rgba(4,9,30,0.85)` overlay), centered white text showing a
  purchase rate headline ("$12,356"), description, and orange gradient CTA button.
- **Currency Converter** card overlaps the hero bottom (negative margin, z-index
  2). It has a golden-to-orange gradient background, a Bitcoin logo image, 4
  white input fields, and a CTA button.
- **Simple Services** section: 3-column icons with titles on white background.
- **About Us** area: dark background (`#222`) with an image carousel on the
  left and text heading on the right.
- **Service Area** (Features): 2×3 grid of service cards with icons
  (Expert Technicians, Professional Service, Great Support, Technical Skills,
  Highly Recommended, Positive Reviews).
- **Stat Area**: light purple-gray background (`#f9f9ff`), text content with
  CTA button ("View Details").
- **Call-to-Action**: golden-to-orange gradient banner with centered white text
  ("Huge Transaction in last Week") and CTA button.
- **Pricing Area**: 3 pricing cards (Ripple $7999, Ethereum $9999, Bitcoin
  $5999) with light bg headers, gradient orange bottom sections, and CTA buttons.
- **Blog Area**: 3-column blog cards with images and excerpts.
- **Footer**: very dark navy (`#04091e`), newsletter form, social icons,
  copyright.

## Design tokens

Extracted from the live preview CSS (`main.css`) at
`https://preview.colorlib.com/theme/bitcoin/css/main.css`:

### Colors

| Token            | Value     | Usage                                              |
| ---------------- | --------- | -------------------------------------------------- |
| primary          | `#f78f3d` | Brand orange — links, icons, hover states           |
| gradient-start   | `#f3c400` | Gradient start (golden yellow)                      |
| gradient-end     | `#f88845` | Gradient end (orange)                               |
| gradient         | `linear-gradient(0deg, #f3c400 0%, #f88845 100%)` | Primary button & converter card bg |
| banner-overlay   | `rgba(4,9,30,0.85)` | Hero banner dark navy overlay              |
| bg-dark          | `#222222` | About Us section background                         |
| bg-footer        | `#04091e` | Footer background (very dark navy)                  |
| bg-light         | `#f9f9ff` | Stat area background, input backgrounds             |
| bg-form          | `#1e2235` | Footer newsletter form input                        |
| text-heading     | `#222222` | Headings                                            |
| text-body        | `#777777` | Body text                                           |
| white            | `#fff`    | Hero text, button text                              |
| accent-highlight | `#f78f3d` | Selection highlight (`::selection`)                 |

### Typography

| Token     | Value                    | Usage                          |
| --------- | ------------------------ | ------------------------------ |
| font-body | `"Poppins", sans-serif`  | All text                       |
| weight-300 | 300                     | Body text (default)            |
| weight-400 | 400                     | Navigation links               |
| weight-500 | 500                     | Buttons, mid-weight            |
| weight-600 | 600                     | Headings (h1–h6)               |
| weight-700 | 700                     | Hero headline, bold text       |
| weight-900 | 900                     | Mobile nav, extra-bold          |

### Buttons

| Token          | Value    | Usage                               |
| -------------- | -------- | ----------------------------------- |
| border-radius  | 25px     | `.primary-btn` — pill-shaped        |
| banner-radius  | 3px      | `.banner-area .primary-btn` — squared |
| padding        | 0 30px / 0 60px | Horizontal padding (varies)  |
| line-height    | 42px     | Button height                       |
| text-transform | uppercase | Button text                        |
| hover-bg       | transparent | Hover state (border 1px solid #fff) |

### Layout

| Token                  | Value                      | Usage                          |
| ---------------------- | -------------------------- | ------------------------------ |
| section-gap            | 120px padding              | Most sections                  |
| converter-overlap      | -105px margin-top          | Converter card overlapping hero|
| footer-bottom-pad      | 6rem                       | Footer bottom margin           |

### Section backgrounds

| Section              | Background                              |
| -------------------- | --------------------------------------- |
| Hero/Banner          | `url(../img/header-bg.jpg)` + dark overlay |
| Convert Card         | Gradient (golden→orange)                |
| Simple Services      | White `#fff`                            |
| About Us             | Dark `#222`                             |
| Service Area (Features) | White `#fff`                        |
| Stat Area            | `#f9f9ff`                               |
| Call-to-Action       | Gradient (golden→orange)                |
| Pricing              | White cards with gradient bottoms       |
| Blog                 | White `#fff`                            |
| Footer               | `#04091e` (very dark navy)              |

## Gherkin requirements

### Feature: Hero Banner

```gherkin
Scenario: Hero displays purchase rate and CTA
  Given I visit the homepage
  Then I see the heading "Currently Purchase Rate"
  And I see the headline "$12,356" (or a dynamic price)
  And I see a "Buy Bitcoin" CTA button
  And the hero has a dark background image with navy overlay

Scenario: Hero CTA button has gradient style
  Given the hero section is visible
  Then the "Buy Bitcoin" button has a gradient background (golden to orange)
  And the button text is white and uppercase
```

### Feature: Currency Converter

```gherkin
Scenario: Converter card overlaps hero
  Given I scroll to the converter section
  Then I see "The Currency Converter" heading
  And I see 4 input fields for conversion values
  And I see a "Calculate" CTA button
  And the card has a golden-to-orange gradient background

Scenario: Converter has Bitcoin logo
  Given the converter card is visible
  Then I see a Bitcoin logo/image element
```

### Feature: Simple Services

```gherkin
Scenario: Three services displayed in a row
  Given I scroll to the services section
  Then I see 3 service items in a horizontal layout
  And each service has an icon and title
  And the titles are "Get Paid through Bitcoin", "Bitcoin Exchange Analysis", "Send & Receive Bitcoin"
```

### Feature: About Us

```gherkin
Scenario: About section has dark background with carousel
  Given I scroll to the about section
  Then I see the section has a dark (#222) background
  And I see an image carousel on the left side
  And I see a heading on the right side
```

### Feature: Service Features

```gherkin
Scenario: Six feature cards in a grid
  Given I scroll to the feature section
  Then I see the heading "Why choose us during purchase bitcoin"
  And I see 6 feature cards in a 2×3 grid
  And each card has an icon and title
  And the titles are: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews
```

### Feature: Stats Section

```gherkin
Scenario: Stats section with CTA
  Given I scroll to the stats section
  Then I see the heading "Ups and Downs"
  And I see descriptive text below the heading
  And I see a "View Details" CTA button
  And the section has a light (#f9f9ff) background
```

### Feature: Call-to-Action Banner

```gherkin
Scenario: CTA banner with gradient background
  Given I scroll to the call-to-action section
  Then I see the heading "Huge Transaction in last Week"
  And I see a "Buy Bitcoin Now!" button
  And the section has a golden-to-orange gradient background
  And the text is white
```

### Feature: Pricing Cards

```gherkin
Scenario: Three pricing cards displayed
  Given I scroll to the pricing section
  Then I see 3 pricing cards side by side
  And the cards are labeled "Ripple", "Ethereum", "Bitcoin"
  And the prices are "$7999", "$9999", "$5999"
  And each card has a "Get Started" CTA button
  And the bottom portion of each card has the gradient background
```

### Feature: Blog Area

```gherkin
Scenario: Three blog posts displayed
  Given I scroll to the blog section
  Then I see the heading "Latest Posts from our Blog"
  And I see 3 blog cards in a row
  And each card has an image, title, and excerpt text
```

### Feature: Footer

```gherkin
Scenario: Footer with newsletter and social links
  Given I scroll to the footer
  Then I see a newsletter subscription form
  And I see social media icons
  And I see a copyright line
  And the footer has a very dark navy (#04091e) background
  And the footer contains a link to https://www.componentdock.com/
```

### Feature: Navigation

```gherkin
Scenario: Fixed header with navigation
  Given I visit the homepage
  Then I see a fixed navigation bar at the top
  And it contains links: Home, Convert, Feature, Price, Blog, Pages
  And the navigation is transparent over the hero
  And the navigation becomes solid dark when scrolled
```

### Feature: Footer Component Dock Link

```gherkin
Scenario: Footer links to Component Dock
  Given I view the footer
  Then I see a link to https://www.componentdock.com/
  And the link text references "Component Dock"
```

## Verification checklist

- [ ] Hero renders with dark background image and navy overlay
- [ ] Purchase rate headline and price displayed centered
- [ ] "Buy Bitcoin" CTA button has gradient style
- [ ] Currency converter card overlaps hero with gradient bg
- [ ] Converter has 4 input fields and CTA button
- [ ] Bitcoin logo displayed in converter section
- [ ] 3 simple services in horizontal row with icons
- [ ] About section has dark background, carousel, and heading
- [ ] 6 feature cards in 2×3 grid with icons and titles
- [ ] Stats section with light background and CTA
- [ ] CTA banner with gradient background and white text
- [ ] 3 pricing cards with correct labels and prices
- [ ] Blog area with 3 cards, images, titles, excerpts
- [ ] Footer with newsletter form, social icons, copyright
- [ ] Footer links to Component Dock
- [ ] Fixed navigation with correct links
- [ ] Navigation transitions from transparent to solid on scroll
- [ ] All text uses Poppins font family
- [ ] All buttons use gradient orange (golden→orange)
- [ ] Responsive layout works at mobile breakpoints
