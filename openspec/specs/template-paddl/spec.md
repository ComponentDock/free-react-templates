# Template: Paddl (Classified Ads / Auction Marketplace)

## Purpose

Recreation of the ColorLib "Auction" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **ColorLib source:** Auction (slug: `auction`)
- **Preview URL:** https://preview.colorlib.com/theme/auction/
- **ColorLib page:** https://colorlib.com/wp/template/auction/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/auction-free-template.jpg
- **Category:** Classified Ads (auction marketplace)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `paddl` (auction paddle — single lowercase kebab-case word, different from source name "Auction")

## Design tokens

Extracted from the live preview at `https://preview.colorlib.com/theme/auction/` and its stylesheet `css/style.css`.

### Colors

| Token           | Value                | Usage                                                                                      |
| --------------- | -------------------- | ------------------------------------------------------------------------------------------ |
| brand-primary   | `#f37121`            | Orange — primary button, price badges, logo, accent links, step borders, testimonial icons |
| text-dark       | `#000000`            | Headings, primary text                                                                     |
| text-body       | `#212529`            | Body text                                                                                  |
| text-secondary  | `#343a40`            | Secondary headings                                                                         |
| text-muted      | `#999999`            | Muted/caption text                                                                         |
| text-light-gray | `#b3b3b3`            | Disabled/muted links                                                                       |
| text-white      | `#ffffff`            | Text on dark backgrounds                                                                   |
| bg-white        | `#ffffff`            | Section backgrounds, cards                                                                 |
| bg-light        | `#f8f9fa`            | Footer background, step hover                                                              |
| bg-gray         | `#f4f5f9`            | Nav dropdown hover                                                                         |
| bg-overlay      | `rgba(0, 0, 0, 0.2)` | Hero section overlay                                                                       |
| bg-overlay-dark | `rgba(0, 0, 0, 0.3)` | Testimonials section overlay                                                               |
| border-light    | `#edf0f5`            | Card borders, dividers                                                                     |
| border-dark     | `#e3e3e3`            | Subtle borders                                                                             |
| loader-stroke   | `#51be78`            | Loading spinner accent                                                                     |

### Typography

| Token        | Value                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------- |
| Font family  | `"Muli", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| Google Fonts | Muli (300, 400, 700, 900) — now Mulish                                                               |
| Hero h1      | 60px / weight 900 / line-height 1 (34px on mobile)                                                   |
| Body         | Default Bootstrap base (~16px)                                                                       |
| Section sub  | 20px (hero subtitle)                                                                                 |

### Spacing & Layout

| Token              | Value                                     |
| ------------------ | ----------------------------------------- |
| Section padding    | `2.5em 0` (mobile) / `5em 0` (desktop)    |
| Footer padding     | `4em 0`                                   |
| Grid               | Bootstrap 4 / 12-col grid                 |
| Hero               | Full-viewport height (`100vh`, min 500px) |
| Hero min height sm | `300px` (`.intro-section.small`)          |

### Components

| Element          | Styles                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| Primary button   | `btn btn-primary` — orange `#f37121` background, white text, 0 border-radius                         |
| Bid button       | `btn btn-bid` — outlined/solid style, orange accent                                                  |
| Price badge      | Circular `border-radius: 50%`, orange background `#f37121`, white text, positioned top-left on image |
| Step icon circle | `border-radius: 50%`, white background, `border-top: 2px solid #f37121`                              |
| Section divider  | `.section-bg` — full-width background-image with dark overlay, parallax-ready                        |
| Footer           | `#f8f9fa` background, dark headings, underlined links, centered copyright                            |

### Visual design (from screenshot analysis)

The template presents a **clean, modern auction marketplace** with:

- Warm neutral hero with blurred background image, bold white headline, orange CTA
- Product card grid (4-column on desktop) with circular orange price badges
- "How It Works" 4-step process with circular icons and top-border accents
- About section: image left, feature list with icons right
- Testimonials: dark background overlay with client photos and quotes carousel
- CTA banner: white background with centered text + orange Register button
- Footer: light gray with 4-column layout (logo, Solutions, Services, Contact)

## Gherkin requirements

### Feature: Paddl — Auction Marketplace Landing Page

#### Scenario: Page loads with header navigation

- Given the user visits the Paddl homepage
- Then a fixed navigation bar is visible at the top
- And the navigation contains links: Home, Buy, Sell, Services (dropdown), Blog, About, Contact
- And a "Sign In / Register" link is visible on the right

#### Scenario: Hero section displays

- Given the user visits the Paddl homepage
- Then a full-viewport hero section is displayed
- And the hero has a background image with dark overlay
- And the heading reads "The Best Place to Buy and Sell"
- And a "Register" button is visible below the subtitle

#### Scenario: Hero Register button is interactive

- Given the hero section is displayed
- When the user clicks the "Register" button
- Then the button is focusable and responds to click

#### Scenario: Current Auctions section displays product grid

- Given the user scrolls past the hero
- Then a "Current Auctions" section is visible
- And a caption label "Auctions" appears above the heading
- And a 4-column grid of auction items is displayed (8 items total across 2 rows)

#### Scenario: Each auction item card shows details

- Given the auction grid is visible
- Then each item card displays a product image
- And an orange circular price badge (e.g. "$95") overlays the image top-left
- And a product title is shown below the image
- And a category label and bid count are shown
- And a "Submit a Bid" button is present

#### Scenario: Submit a Bid button is interactive

- Given an auction item card is displayed
- When the user clicks "Submit a Bid"
- Then the button is focusable and responds to click

#### Scenario: How It Works section displays

- Given the user scrolls past the auctions grid
- Then a "How It Works" section is visible with a "How?" caption
- And 4 steps are displayed in a row: Register, Buy or Bid, Submit a bid, Win
- And each step has a circular icon with an orange top border
- And each step has a title and description paragraph

#### Scenario: About Us section displays

- Given the user scrolls past the How It Works section
- Then an "About Us" section is visible with a "About?" caption
- And an image is displayed on the left half
- And 3 feature items are displayed on the right half: Fast Support, Happy Customers, 24/7 Support
- And each feature has an icon and description

#### Scenario: Testimonials section displays

- Given the user scrolls past the About Us section
- Then a dark-background testimonials section is visible
- And the section has a background image with dark overlay
- And a "Testimonials" caption and "Happy Clients" heading are centered
- And a carousel of testimonial cards is displayed
- And each card shows a person photo, name, role, and quote

#### Scenario: Testimonials carousel is interactive

- Given the testimonials carousel is displayed
- When the user interacts with the carousel
- Then it scrolls through testimonial cards

#### Scenario: CTA section displays

- Given the user scrolls past the testimonials
- Then a call-to-action section is visible
- And the text reads "Create an account and start Buy, Bid or Sell Now!"
- And a "Register" button is present

#### Scenario: Footer displays

- Given the user scrolls to the bottom of the page
- Then a footer section is visible with a light gray background
- And the footer contains 4 columns: logo/description, Solutions, Services, Contact
- And a copyright line is shown at the bottom
- And the footer links to "Component Dock" (https://www.componentdock.com/)

## Verification checklist

- [ ] All 8 sections render in correct order (Header, Hero, Auctions, How It Works, About, Testimonials, CTA, Footer)
- [ ] Brand color `#f37121` used for primary buttons, price badges, and accents
- [ ] Font family Mulish (formerly Muli) loaded from Google Fonts
- [ ] Hero is full-viewport with background image and dark overlay
- [ ] Auction grid: 4 columns desktop, 2 columns mobile, 8 product cards
- [ ] Each card has: image, circular price badge, title, category, bid count, Submit a Bid button
- [ ] How It Works: 4-step icons with circular shape and orange top border
- [ ] About Us: split layout (image left, features right with icons)
- [ ] Testimonials: dark overlay background, carousel of client cards
- [ ] CTA: centered text + orange Register button
- [ ] Footer: 4-column layout, light gray background, Component Dock link
- [ ] Responsive: stacks to single-column on mobile
- [ ] No references to ColorLib anywhere in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `paddl.free.componentdock.com`
- [ ] `homepage` in package.json is `https://paddl.free.componentdock.com`
- [ ] Placeholder images via `https://picsum.photos/seed/paddl-<n>/<w>/<h>`
- [ ] No external asset files copied (images, fonts, CSS)
