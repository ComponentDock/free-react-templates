# Template: Bidwell (Auction / Marketplace Landing)

## Purpose

Recreation of ColorLib "Auction" template.

- Source slug: `auction`
- ColorLib page: https://colorlib.com/wp/template/auction/
- Live preview: https://preview.colorlib.com/theme/auction/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview stylesheet `css/style.css`)

| Token             | Value                                                            |
| ----------------- | ---------------------------------------------------------------- |
| Primary color     | `#f37121` (warm orange)                                          |
| Body text         | `#999999` (muted gray)                                           |
| Heading text      | `#000` / `#212529` (near-black)                                  |
| Caption/accent    | `#f37121` (same as primary)                                      |
| Light background  | `#f8f9fa` (near-white)                                           |
| Dark background   | `#000` / `#25262a`                                               |
| Border color      | `#ccc` / `#dee2e6`                                               |
| Font family       | `"Muli", sans-serif`                                             |
| Body weight       | 300 (light)                                                      |
| Body font-size    | 15px                                                             |
| Line height       | 1.7                                                              |
| Heading weight    | 600–700 (bold)                                                   |
| Button radius     | `0` (square / no border-radius)                                  |
| Button padding    | `14px 20px`                                                      |
| Section padding   | `2.5em 0`                                                        |
| Caption style     | uppercase, 11px, letter-spacing .2rem, weight 700, color #f37121 |
| Cover min-height  | ~800px (hero section)                                            |
| Hero h1 size      | ~50px (white, bold, centered)                                    |
| Hero subtext      | ~15px (white, muted)                                             |
| Item shadow       | `0 1px 2px 0 rgba(0,0,0,0.05)`                                   |
| Bid button        | padding 7px 15px, bg #f8f9fa, color #000, border-radius 0        |
| Testimonial text  | color #fff, font-size 20px                                       |
| Footer background | `#f8f9fa`                                                        |

## Visual design notes (from screenshot analysis)

- **Overall aesthetic**: Clean, modern, approachable auction/e-commerce landing. Warm, trustworthy feel with a muted photographic hero and white content sections.
- **Hero**: Full-width blurred photographic background (shopping/laptop context) with warm muted tones. Centered white headline ("The Best Place to Buy and Sell"), muted subtext, and a bright orange "Register" CTA button (square corners).
- **Product cards**: 4-column grid of auction items. Each card has an orange circular price badge (top-left on image), product photo, item name (dark, semi-bold), category + bid count row, and a light gray "Submit a Bid" button. No visible card borders — white space and subtle shadow separate items.
- **Step icons**: 4-column layout with icon + title + description. Steps: Register → Buy or Bid → Submit a bid → Win.
- **About section**: Split layout — large image on left, feature list on right with icon + title + description rows (Fast Support, Happy Customers, 24/7 Support).
- **Testimonials**: Parallax background image overlay, white text. Carousel of testimonial cards with circular avatar, name/title, and quote text.
- **CTA section**: Centered headline + orange Register button on white background.
- **Footer**: 4-column layout — logo + text, Solutions links, Services links, Contact links. Light gray (#f8f9fa) background.
- **Navbar**: Logo left with orange underline, horizontal nav links center-left, "Sign In / Register" right.

## Section structure (in page order)

1. **Navbar** — logo, nav links (Home, Buy, Sell, Services with dropdown, Blog, About, Contact), Sign In / Register
2. **Hero** — full-width background image, centered h1 + subtext + Register CTA button
3. **Current Auctions** — section caption "Auctions" + heading, 4-column grid of 8 auction item cards (price badge, image, name, category, bid count, Submit a Bid button)
4. **How It Works** — section caption "How?" + heading, 4 steps in a row (icon + title + description)
5. **About Us** — split layout: large image left, feature list right (3 items with icon + title + description)
6. **Testimonials** — parallax background, section caption "Testimonials" + heading, carousel of testimonial cards (avatar, name, title, quote)
7. **CTA** — centered headline + Register button
8. **Footer** — 4 columns (logo + text, Solutions, Services, Contact), copyright line

## Gherkin scenarios

### Navbar

```gherkin
Scenario: Logo is visible and links to home
  Given the page is loaded
  Then the logo is visible in the top-left of the navbar

Scenario: Navigation links are present
  Given the page is loaded
  Then the navbar contains links for "Home", "Buy", "Sell", "Services", "Blog", "About", "Contact"

Scenario: Services link has dropdown submenu
  Given the page is loaded
  When I hover over the "Services" nav link
  Then a dropdown appears with "Sell Items", "Buy Items", "Submit a Bid"

Scenario: Sign In / Register link is present
  Given the page is loaded
  Then a "Sign In / Register" link is visible in the navbar
```

### Hero

```gherkin
Scenario: Hero section displays headline and CTA
  Given the page is loaded
  Then the hero section displays "The Best Place to Buy and Sell" as the heading
  And a "Register" call-to-action button is visible

Scenario: Hero has a background image
  Given the page is loaded
  Then the hero section has a background image covering the full width
```

### Current Auctions

```gherkin
Scenario: Auctions section heading is displayed
  Given the page is loaded
  Then the "Current Auctions" section heading is visible
  And the caption "Auctions" appears above it

Scenario: Eight auction items are displayed in a grid
  Given the page is loaded
  Then 8 auction item cards are displayed in a 4-column grid

Scenario: Each auction item shows price, image, name, category, and bid count
  Given the page is loaded
  Then each auction item card displays a price badge
  And each card displays a product image
  And each card displays the item name
  And each card displays the item category
  And each card displays the bid count

Scenario: Each auction item has a Submit a Bid button
  Given the page is loaded
  Then each auction item card contains a "Submit a Bid" button
```

### How It Works

```gherkin
Scenario: How It Works section displays four steps
  Given the page is loaded
  Then the "How It Works" section heading is visible
  And four step cards are displayed in a row
  And step 1 is titled "Register"
  And step 2 is titled "Buy or Bid"
  And step 3 is titled "Submit a bid"
  And step 4 is titled "Win"

Scenario: Each step has an icon, title, and description
  Given the page is loaded
  Then each step card contains an icon, a title, and a description paragraph
```

### About Us

```gherkin
Scenario: About Us section shows image and features
  Given the page is loaded
  Then the "About Us" section heading is visible
  And a large image is displayed on the left
  And three feature items are displayed on the right

Scenario: Feature items have icon, title, and description
  Given the page is loaded
  Then feature 1 is "Fast Support"
  And feature 2 is "Happy Customers"
  And feature 3 is "24/7 Support"
  And each feature item has an icon and description
```

### Testimonials

```gherkin
Scenario: Testimonials section displays with parallax background
  Given the page is loaded
  Then the "Happy Clients" heading is visible
  And the section has a parallax background image

Scenario: Testimonials carousel shows testimonial cards
  Given the page is loaded
  Then multiple testimonial cards are displayed
  And each card has an avatar image, a name, a title, and a quote
```

### CTA

```gherkin
Scenario: CTA section encourages registration
  Given the page is loaded
  Then the CTA section displays "Create an account and start Buy, Bid or Sell Now!"
  And a "Register" button is visible
```

### Footer

```gherkin
Scenario: Footer displays four columns
  Given the page is loaded
  Then the footer shows a logo column with description and "Learn More" link
  And a "Solutions" column with links
  And a "Services" column with links
  And a "Contact" column with links

Scenario: Footer has copyright line
  Given the page is loaded
  Then a copyright notice is displayed at the bottom of the footer
  And the footer links to Component Dock
```

## Verification checklist

- [ ] Navbar renders with all nav links and Sign In / Register
- [ ] Hero section has background image, h1, subtext, Register button
- [ ] Current Auctions section shows 8 items in 4-column grid
- [ ] Each auction item has price badge, image, name, category, bids, Submit a Bid button
- [ ] How It Works section shows 4 steps in a row with icons
- [ ] About Us section has split layout (image + features)
- [ ] Testimonials section has parallax background and carousel
- [ ] CTA section has heading and Register button
- [ ] Footer has 4 columns and Component Dock link
- [ ] Design tokens match: brand color #f37121, Muli font, square buttons, no border-radius
- [ ] Caption style: uppercase, 11px, letter-spacing .2rem
- [ ] Section order matches original 1:1
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass with 100% coverage
- [ ] `npm run spec:validate` passes
