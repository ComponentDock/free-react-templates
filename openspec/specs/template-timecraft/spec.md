# Template: TimeCraft (Smartwatch / Tech Product)

## Purpose

Recreation of ColorLib **Watch** — a smartwatch/tech product landing page template.

- **ColorLib source:** https://colorlib.com/wp/template/watch/
- **Preview URL:** https://preview.colorlib.com/theme/watch/
- **New name:** `timecraft` (apps/timecraft, @free-react-templates/timecraft)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens (from live preview CSS)

| Token              | Value                              | Source                      |
| ------------------ | ---------------------------------- | --------------------------- |
| Brand color        | `#235ee7` (blue)                   | .genric-btn.primary, prices |
| Brand gradient     | `linear-gradient(0deg, #235ee7, #4ae7fa)` | .primary-btn background |
| Accent             | `#4ae7fa` (cyan)                   | gradient end                |
| Dark bg            | `#04091e` (near-black)             | .unique-feature-area        |
| Font family        | "Poppins", sans-serif              | @font-face declarations     |
| Button radius      | 25px (pill)                        | .primary-btn border-radius  |
| Button style       | gradient bg, uppercase, white text | .primary-btn                |
| Card radius        | 10px                               | .single-unique-product      |
| Section spacing    | 120px vertical padding             | .section-gap                |
| Section bg light   | `#f9f9ff`                          | .single-unique-product desc |
| Footer bg          | light gray                         | .footer-area section-gap    |
| Star checked       | Font Awesome filled                | .fa-star.checked            |
| Star unchecked     | Font Awesome outline               | .fa-star                    |
| Icon font          | Linearicons (lnr-*), FontAwesome  | CSS files                   |

## Visual design (from preview)

A clean, modern smartwatch product landing page. The hero uses a background
image with centered white text ("Smart New Future") and a gradient "Buy Now"
pill button. Below is a video section with a play button overlay (two-column
layout: text left, video right).

A "Top Courses" section shows a centered smartwatch image flanked by 4 feature
items (High Performance, High Performance, High Performance, High Performance)
with linearicons.

The about section is a full-width two-column layout (image left, text right)
with a CTA. The features section has 6 cards in a 3-column grid on a white
background.

The "Unique Features" section uses a dark navy background (#04091e) with 4
white product cards showing watch images, prices in blue, and dark "Pre Order"
buttons.

Reviews display 6 cards in a 3-column grid with star ratings. An FAQ accordion
uses Bootstrap collapse. The footer has 3 columns: About Us, Newsletter, Follow
Us with social icons.

## Section order (top to bottom)

1. Navbar — sticky header, logo image, nav links (Home, About, Service, Unique Feature, Review, Faq)
2. Hero/Banner — fullscreen bg image, centered headline "Smart New Future", subtitle, "Buy Now" CTA
3. VideoSection — two-col: text left (headline + description + CTA) | video play button right
4. TopFeatures — centered smartwatch image with 4 feature items (icon + title + text) flanking it
5. About — two-col: image left | text right with headline + CTA
6. Features — 6 feature cards in 3-col grid (icon + title + description)
7. Products — dark bg, 4 product cards (image + name + price + "Pre Order" CTA)
8. Reviews — 6 review cards in 3-col grid (name + text + star rating)
9. Faq — accordion with 4 expandable Q&A items
10. Footer — 3-col: About Us + Newsletter + Follow Us (social icons)

## Gherkin requirements

### Scenario: Navbar displays with navigation links
  **Given** the page loads
  **When** the user views the header
  **Then** a logo is displayed on the left
  **And** navigation links are visible: Home, About, Service, Unique Feature, Review, Faq
  **And** the navbar becomes sticky on scroll

### Scenario: Hero banner renders
  **Given** the page loads
  **When** the user views the hero section
  **Then** a full-width background image is displayed
  **And** a subtitle "Now you can feel the Heat" is shown in uppercase
  **And** a headline "Smart New Future" is displayed in large white text
  **And** a "Buy Now" gradient pill button is visible

### Scenario: Video section renders
  **Given** the page loads
  **When** the user scrolls to the video section
  **Then** a two-column layout is displayed
  **And** the left column shows a subtitle, headline "We've made a life that will change you", description text, and a "Get Started now" CTA
  **And** the right column shows a play button with a dark overlay

### Scenario: Top features section renders
  **Given** the page loads
  **When** the user views the top features section
  **Then** a centered smartwatch image is displayed
  **And** 4 feature items flank the image (2 left, 2 right)
  **And** each feature has an icon, title, and description text

### Scenario: About section renders
  **Given** the page loads
  **When** the user views the about section
  **Then** a two-column full-width layout is shown
  **And** the left side displays an image
  **And** the right side shows a headline "Globally Connected by Large Network", description, and a "get details" CTA button

### Scenario: Features grid renders
  **Given** the page loads
  **When** the user views the features section
  **Then** a heading "Some Features that Made us Unique" is displayed
  **And** 6 feature cards are shown in a 3-column grid
  **And** each card has an icon, title, and description
  **And** the features are: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews

### Scenario: Products section renders on dark background
  **Given** the page loads
  **When** the user views the products section
  **Then** a dark background (#04091e) section is displayed
  **And** 4 product cards are shown in a 4-column grid
  **And** each card has: product image, product name, price in blue, and a "Pre Order" button
  **And** hovering a card changes its button style

### Scenario: Reviews section renders
  **Given** the page loads
  **When** the user views the reviews section
  **Then** 6 review cards are displayed in a 3-column grid
  **And** each card shows: reviewer name, review text, and a star rating (out of 5)
  **And** checked stars are filled, unchecked stars are outlined

### Scenario: FAQ accordion works
  **Given** the page loads
  **When** the user views the FAQ section
  **Then** 4 FAQ items are displayed in an accordion
  **And** clicking a question expands its answer
  **And** only one answer is expanded at a time (accordion behavior)

### Scenario: Footer renders with all elements
  **Given** the page loads
  **When** the user scrolls to the footer
  **Then** an "About Us" column with description text is shown
  **And** a "Newsletter" column with email input and submit button is shown
  **And** a "Follow Us" column with social media icons (Facebook, Twitter, Dribbble, Behance) is shown
  **And** a "Component Dock" attribution link replaces the Colorlib credit

## Verification checklist

- [ ] Navbar with logo and navigation links renders
- [ ] Navbar becomes sticky on scroll
- [ ] Hero banner with background image, headline, subtitle, and CTA renders
- [ ] Video section with two-column layout and play button renders
- [ ] Top features section with flanking features and center image renders
- [ ] About section with image and text columns renders
- [ ] Features grid with 6 cards renders
- [ ] Products section with dark background and 4 product cards renders
- [ ] Reviews section with 6 cards and star ratings renders
- [ ] FAQ accordion with 4 items expands/collapses correctly
- [ ] Footer with About Us, Newsletter, and Follow Us renders
- [ ] Responsive layout works across mobile, tablet, desktop
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] No ColorLib references in app code
- [ ] Component Dock link present in footer
