# Template: Palatable (Food / Recipe Blog)

## Purpose

Recreation of ColorLib's **Delicious** template as a React 19 + Vite + Tailwind 4 + TypeScript site.
- **Source slug:** `delicious`
- **Preview URL:** https://preview.colorlib.com/theme/delicious/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/delicious-free-template.jpg)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Food / Recipe Blog — single-page food blog site with top header bar, navbar, hero carousel, featured categories, best recipes grid, CTA banner, small recipes list, quote/newsletter/ad row, Instagram gallery, and footer.

## Design Tokens (extracted from preview stylesheet)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary Green | `#40ba37` | Buttons, accents, scroll-up button, CTA highlights |
| Dark Green | `#1c8314` | Button hover/active states, preloader spinner |
| Black | `#000000` | Headings (h1–h6) |
| Body Gray | `#9b9b9b` | Paragraph text |
| Link Gray | `#474747` | Anchor/link text |
| White | `#FFFFFF` | Page background, button text, text on dark backgrounds |
| Input Background | `#f3f5f8` | Select/input fields |
| Select Text | `#2f2f2f` | Nice-select dropdown text |
| Overlay | `rgba(10, 12, 18, 0.55)` | Dark overlay on background images |

### Fonts
| Role | Family | Fallback |
|------|--------|----------|
| Body + Headings | Open Sans | sans-serif |
| Weights used | 300, 400, 600, 700, 800 | — |

### Buttons & Shapes
- **Primary button (.delicious-btn):** border-radius 0 (square), height 60px, min-width 160px, solid Primary Green background, white text, 16px font-weight 600
- **Button hover:** Dark Green (#1c8314) background
- **Button variant 2:** Dark Green default → Primary Green on hover (inverted)
- **Button variant 3:** Gray (#474747) default → Primary Green on hover
- **Button variant 4 (outline):** transparent bg, 3px solid Primary Green border, green text → fills green on hover
- **Mobile button:** height shrinks to 40px on ≤767px

### Section Backgrounds
- **Top Header Bar:** White background with breaking news ticker and social icons
- **Navbar:** White background, sticky
- **Hero Carousel:** Full-width background images with dark overlay, 3 slides
- **Top Categories:** White background, 2-column featured categories with image overlays
- **Best Recipes:** White background, 6 recipe cards in 3-column grid
- **CTA Banner:** Full-width background image with dark overlay (`bg4.jpg`)
- **Small Recipes:** White background, 2-column list of 9 recipes with thumbnails
- **Quote/Newsletter/Ad:** White background, 3-column layout (quote | newsletter with bg overlay | ad image)
- **Instagram Gallery:** 6-column row of images with hover icon overlay
- **Footer:** White background, centered logo + social links + copyright

## Gherkin Requirements

### Feature: Palatable — Food / Recipe Blog Template

#### Scenario: Top header bar displays correctly
- **Given** the user loads the page
- **Then** a top header bar is visible above the navbar
- **And** it contains a breaking news ticker on the left
- **And** social media icons (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn) are on the right

#### Scenario: Navbar displays correctly
- **Given** the user loads the page
- **Then** a sticky navbar is visible with a logo on the left
- **And** navigation links include: Home, Pages (dropdown), Mega Menu, Receipies, 4 Vegans, Contact
- **And** a search icon button is visible on the right

#### Scenario: Hero carousel shows slides
- **Given** the user views the hero section
- **Then** a full-width image carousel is displayed with auto-rotation
- **And** each slide has a background image with dark overlay
- **And** each slide shows a heading ("Delicios Homemade Burger"), descriptive text, and a "See Receipe" CTA button
- **And** carousel navigation dots/arrows allow manual control

#### Scenario: Top categories section shows featured items
- **Given** the user scrolls to the top categories section
- **Then** 2 featured category cards are displayed in a 2-column layout
- **And** each card has a background image with overlaid text (title + subtitle + CTA button)
- **And** the cards are: "Strawberry Cake" and "Chinesse Noodles" (or equivalent content)

#### Scenario: Best recipes grid displays items
- **Given** the user scrolls to the best recipes section
- **Then** a "The best Receipies" heading is shown
- **And** 6 recipe cards are displayed in a 3-column responsive grid
- **And** each card shows a recipe image, recipe title, and star rating (4 out of 5 stars)
- **And** recipes include: Sushi Easy Receipy, Homemade Burger, Vegan Smoothie, and 3 more

#### Scenario: CTA banner section displays
- **Given** the user scrolls to the CTA section
- **Then** a full-width banner with a background image and dark overlay is shown
- **And** heading and call-to-action content are centered on the banner

#### Scenario: Small recipes list shows items
- **Given** the user scrolls to the small recipes section
- **Then** a list of 9 recipe items is displayed in a 2-column layout
- **And** each item shows a thumbnail image, recipe title, and meta info (date/comments or cook time)

#### Scenario: Quote, newsletter, and ad section displays
- **Given** the user scrolls to the quote-subscribe-adds section
- **Then** a 3-column layout is shown
- **And** the left column contains a quote with quotation mark, text, author, date, and comment count
- **And** the middle column contains a newsletter signup form with email input and "Subscribe" button over a background image
- **And** the right column contains a promotional ad image

#### Scenario: Instagram gallery shows images
- **Given** the user scrolls to the Instagram section
- **Then** a "Follow Us Instragram" heading is shown
- **And** 6 images are displayed in a horizontal row
- **And** each image has an Instagram icon overlay on hover

#### Scenario: Footer displays correctly
- **Given** the user scrolls to the footer
- **Then** social media icons (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn) are displayed
- **And** a logo is centered
- **And** a copyright line with "Made with ❤ by Component Dock" is shown

#### Scenario: Responsive behavior on mobile
- **Given** the user views the page on a mobile viewport (≤768px)
- **Then** the navbar collapses to a hamburger menu
- **And** the hero carousel text is centered and scaled down
- **And** the top categories stack to a single column
- **And** the best recipes grid stacks to a single column
- **And** the small recipes list stacks to a single column
- **And** the quote/newsletter/ad section stacks vertically
- **And** the Instagram gallery wraps to multiple rows

#### Scenario: Dark mode styling
- **Given** the user enables dark mode
- **Then** the page background becomes dark
- **And** text colors adjust to white/light
- **And** card backgrounds use dark tones
- **And** Primary Green (#40ba37) accents remain visible

## Verification Checklist

- [ ] Spec validated (`npm run spec:validate` passes)
- [ ] All Gherkin scenarios are implementable
- [ ] Design tokens extracted and documented
- [ ] Preview DOM structure analyzed
- [ ] Screenshot reviewed for visual fidelity
- [ ] Section order matches original: Top Header → Navbar → Hero Carousel → Top Categories → Best Recipes → CTA Banner → Small Recipes → Quote/Newsletter/Ad → Instagram Gallery → Footer
