# Template: Chronopulse (Tech Landing Page)

## Purpose

Recreation of the ColorLib **Watch** template
(preview: https://preview.colorlib.com/theme/watch/,
source: https://colorlib.com/wp/template/watch/).

A single-page tech/smartwatch landing site with a dark hero banner,
video showcase, feature grids, product cards, testimonials, FAQ
accordion, and newsletter footer.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#235ee7` | Deep blue — primary buttons, accents |
| Brand secondary | `#4ae7fa` | Cyan — gradient endpoint on primary-btn |
| Accent cyan | `#4cd3e3` | Used on service icons/accents |
| Accent light blue | `#38a4ff` | Alternative accent |
| Accent yellow | `#f4e700` | Highlight accent |
| Accent red | `#f44a40` | Alert/error accent |
| Text dark | `#222222` | Body text, headings |
| Text gray | `#777777` | Subtext, secondary copy |
| Background light | `#f9f9ff` | Section alternation background |
| Background white | `#fff` | Default section bg |
| Primary button gradient | linear-gradient(0deg, #235ee7, #4ae7fa) | Rounded pill buttons (radius 25px) |
| Font family | Poppins (Google Fonts) | Weights 300–700 |
| Button radius | 25px (pill shape) | Primary CTA buttons |
| Card radius | 3px | Subtle rounding on cards |
| Banner | Background image (dark overlay) | Full-screen hero section |

## Section structure (DOM order)

1. **Navbar** — Sticky header: logo left, nav links right (Home, About, Service, Unique Feature, Review, FAQ, Pages dropdown)
2. **Banner/Hero** — Full-screen background image, dark overlay. Content: h5 subtitle "Now you can feel the Heat", h1 "Smart New Future", white pill CTA "Buy Now"
3. **Video Section** — Split layout (col-6 each): left = text (h6 eyebrow, h1 headline, body copy, black CTA); right = video embed with play button overlay on dark background
4. **Courses/Features Grid** — Center image flanked by 2 feature cards on each side (4 total). Each card: icon (Linearicons), h4 title, body copy. Title: "Top Courses That are open for Students"
5. **About Section** — Full-width split: left = image, right = text (h1 headline, subtitle span, body copy, CTA). Title: "Globally Connected by Large Network"
6. **Service Area** — 3×2 grid of 6 service cards. Each: icon (Linearicons), h4 title, body paragraph. Heading: "Some Features that Made us Unique"
7. **Unique Features / Products** — Dark (#235ee7) background. 4 product cards in a row: product image, h4 name ("Apple Watch White"), h6 price ("£399.00"), white pill CTA "Pre Order"
8. **Reviews / Testimonials** — 7 review cards in a horizontal row. Each: h4 reviewer name, body text, 5-star rating (filled/unfilled). Heading: "Some Features that Made us Unique"
9. **FAQ Accordion** — Left-aligned accordion (4 items). Each: clickable header toggles body text. Heading: "Frequently Asked Questions"
10. **Footer** — 3-column layout: About Us text + copyright, Newsletter form (email input + arrow submit button), Follow Us social icons (Facebook, Twitter, Dribbble, Behance)

## Gherkin scenarios

### Navbar
- **Scenario: Navbar renders all navigation links**
  - Given the page loads
  - Then the navbar displays links: Home, About, Service, Unique Feature, Review, FAQ
  - And the logo is visible on the left

- **Scenario: Navbar is sticky on scroll**
  - Given the user scrolls past the hero
  - Then the navbar remains fixed at the top of the viewport

### Banner / Hero
- **Scenario: Hero section displays headline and CTA**
  - Given the page loads
  - Then the banner shows subtitle "Now you can feel the Heat"
  - And headline "Smart New Future"
  - And a "Buy Now" CTA button

- **Scenario: Banner is full-screen height**
  - Given the page loads on desktop
  - Then the banner occupies the full viewport height

### Video Section
- **Scenario: Video section shows text and video embed**
  - Given the user scrolls to the about section
  - Then a text block is visible on the left with headline and CTA
  - And a video play button is visible on the right

- **Scenario: Video CTA button is clickable**
  - Given the video section is visible
  - When the user clicks "Get Started now"
  - Then no page navigation occurs (SPA behavior)

### Courses/Features Grid
- **Scenario: Feature grid displays 4 cards around center image**
  - Given the user scrolls to the courses section
  - Then 4 feature cards are visible (2 left, 2 right)
  - And a center product image is displayed

- **Scenario: Each feature card has icon, title, and description**
  - Given the courses section is visible
  - Then each card displays an icon, an h4 title, and a paragraph

### About Section
- **Scenario: About section shows image and text side by side**
  - Given the user scrolls to the about section
  - Then an image is displayed on the left half
  - And text content (headline + body + CTA) is on the right half

- **Scenario: About CTA is clickable**
  - Given the about section is visible
  - When the user clicks "Get Details"
  - Then no page navigation occurs

### Service Area
- **Scenario: Service section displays 6 feature cards**
  - Given the user scrolls to the service section
  - Then 6 service cards are displayed in a 3×2 grid
  - And each card has an icon, title, and description

### Unique Features / Products
- **Scenario: Products section shows 4 product cards on dark background**
  - Given the user scrolls to the unique features section
  - Then 4 product cards are visible
  - And the section background is the brand primary color

- **Scenario: Each product card shows image, name, price, and CTA**
  - Given the products section is visible
  - Then each card displays a product image, name, price, and "Pre Order" button

### Reviews / Testimonials
- **Scenario: Reviews section displays testimonial cards**
  - Given the user scrolls to the reviews section
  - Then at least 5 review cards are visible
  - And each card shows a name, review text, and star rating

### FAQ Accordion
- **Scenario: FAQ section shows collapsible questions**
  - Given the user scrolls to the FAQ section
  - Then 4 FAQ items are visible
  - And the first item is expanded by default

- **Scenario: Clicking an FAQ item toggles its content**
  - Given the FAQ section is visible
  - When the user clicks the second FAQ header
  - Then the second item's answer becomes visible
  - And the first item collapses

### Footer
- **Scenario: Footer displays three columns**
  - Given the user scrolls to the footer
  - Then an "About Us" column is visible
  - And a "Newsletter" column with email input is visible
  - And a "Follow Us" column with social icons is visible

- **Scenario: Newsletter form has email input and submit**
  - Given the footer is visible
  - Then an email input field is present
  - And a submit button (arrow icon) is present

- **Scenario: Footer links to Component Dock**
  - Given the footer renders
  - Then a link to https://www.componentdock.com/ is present

## Verification checklist

- [ ] Navbar sticky on scroll
- [ ] Hero full-screen with background image + dark overlay
- [ ] Primary buttons: pill shape (radius 25px), gradient #235ee7→#4ae7fa, white text
- [ ] Poppins font loaded via Google Fonts
- [ ] Video section: split layout, play button overlay
- [ ] Courses grid: center image, 4 surrounding cards with Linearicons
- [ ] About section: full-width split (image left, text right)
- [ ] Service area: 6 cards in 3×2 grid with icons
- [ ] Products section: dark blue bg, 4 cards with image/name/price/CTA
- [ ] Reviews: horizontal scroll or row of testimonial cards with stars
- [ ] FAQ accordion: expand/collapse, first item open by default
- [ ] Footer: 3-column (About, Newsletter, Social)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive layout (mobile breakpoints)
