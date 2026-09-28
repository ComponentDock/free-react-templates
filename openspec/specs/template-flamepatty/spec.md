# Template: Flamepatty (Restaurant/Burger)

## Purpose

Recreation of ColorLib's **Burger** template.

- **Source:** https://colorlib.com/wp/template/burger/
- **Preview:** https://preview.colorlib.com/theme/burger/
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/burger-free-template.jpg`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** Flamepatty (replaces original "Burger" branding)

## Design Tokens

Extracted from the preview CSS (`style.css`) on 2026-09-28.

| Token | Value | Usage |
|-------|-------|-------|
| **Font — body** | `'Raleway', sans-serif` | Body text, paragraphs, nav links |
| **Font — accent** | `'Montserrat', sans-serif` | Headings, special elements, section titles |
| **Brand color** | `#F0542C` (orange-red) | Price tags, highlight text, hover accents |
| **CTA / accent** | `#F2C64D` (golden yellow) | Primary CTA buttons (`boxed-btn3`), star ratings, deal badges |
| **Dark bg** | `#040E27` (deep navy) | Header area, footer background |
| **Body text** | `#1F1F1F` | Headings, main body text |
| **Body subtext** | `#4D4D4D` | Secondary body text |
| **Muted text** | `#7e7e7e` | Tertiary text, captions |
| **Button radius** | `30px–50px` | Rounded pill buttons (`boxed-btn3`, `boxed-btn5`) |
| **Overlay** | `rgba(4,14,39,0.5)` | Hero sliders, video section dark overlay |
| **Section bg — menu** | `#fff` (white) | Best Burgers menu area |
| **Section bg — featured** | image (`burger_bg_1.png`) | Burger President section (dark image bg) |
| **Section bg — video** | image (`video.png`) | Video/CTA area (dark image bg) |
| **Section bg — testimonials** | `#fff` (white) | Testimonial carousel area |
| **Section bg — instagram** | `#fff` (white) | Instagram grid area |
| **Footer bg** | `#040E27` (dark navy) | Footer top area |
| **Footer text** | `#cccccc` | Footer body text |
| **Footer heading** | `#fff` | Footer column headings |

### Visual Design Notes (from screenshot + DOM)

- **Header:** Sticky, transparent/dark, centered logo, nav links on left, social icons + phone on right. Mobile hamburger menu.
- **Hero:** Full-width image carousel (2 slides) with dark overlay. "Big Deal" badge (yellow/golden), large heading "Burger Bachelor" with "Maxican" subtitle. Centered text.
- **Best Burgers Menu:** Section with "Burger Menu" label + "Best Ever Burgers" heading. 2-column grid of 8 burger items — each has a circular burger image on left, name + description + price ($5) on right. "More Items" pill button below.
- **Burger President (Featured):** Full-width dark image background. 2 featured burger cards side by side — each has a large burger image with a text overlay at bottom: price ($20), name, description, "Order Now" pill button (yellow).
- **About Us:** 2-column layout. Left: 2 overlapping images (one large, one small offset). Right: "About Us" label, "Best Burger in your City" heading, paragraph text, signature image.
- **Video Area:** Dark image background with centered play button (circle), heading "Burger Bachelor", subtitle "How we make delicious Burger".
- **Testimonials:** White background. "Testimonials" label, "Happy Customers" heading. Carousel with customer quotes, avatar images, names, and 4.5-star ratings.
- **Instagram Grid:** 4 equal-width images in a row. Each has an overlay on hover with an Instagram icon.
- **Footer:** Dark navy background. 3-column layout: 2 location blocks (address, email, phone) + newsletter signup form (input + "Sign Up" button). Social links row below. Copyright line at bottom with "Component Dock" branding replacing Colorlib credit.

## Gherkin Requirements

### Hero Section

Scenario: Hero carousel displays on page load
  Given the user is on the Flamepatty homepage
  Then a full-width hero carousel is visible
  And the carousel shows a "Big Deal" badge
  And the heading reads "Flamepatty Bachelor" (or equivalent)
  And the carousel auto-plays between slides

Scenario: Hero carousel navigation
  Given the hero carousel is visible
  When the user clicks the next/prev arrow
  Then the carousel advances/goes back one slide

### Best Burgers Menu Section

Scenario: Menu grid displays burger items
  Given the user scrolls to the menu section
  Then 8 burger items are displayed in a 2-column grid
  And each item shows a burger image, name, description, and price

Scenario: More Items button
  Given the menu section is visible
  When the user clicks "More Items"
  Then a menu page or section is navigated to

### Featured Burgers Section

Scenario: Featured burgers display with overlay
  Given the user scrolls to the featured section
  Then 2 featured burger cards are displayed side by side
  And each card has a dark overlay with price, name, description, and "Order Now" button

Scenario: Order Now button
  Given a featured burger card is visible
  When the user clicks "Order Now"
  Then a navigation or action is triggered

### About Us Section

Scenario: About section displays correctly
  Given the user scrolls to the About section
  Then 2 overlapping images are displayed on the left
  And the right side shows an "About Us" label, heading, paragraph, and signature

### Video Area

Scenario: Video play button
  Given the user scrolls to the video section
  Then a play button is visible in a dark image background
  And the heading and subtitle text are displayed

Scenario: Video popup on play click
  Given the video play button is visible
  When the user clicks the play button
  Then a YouTube video popup opens

### Testimonials Section

Scenario: Testimonial carousel displays
  Given the user scrolls to the testimonials section
  Then a carousel of customer testimonials is displayed
  And each testimonial shows a quote, avatar, name, and star rating

Scenario: Testimonial carousel navigation
  Given the testimonial carousel is visible
  When the user clicks next/prev
  Then the carousel advances/goes back

### Instagram Grid Section

Scenario: Instagram grid displays images
  Given the user scrolls to the Instagram section
  Then 4 images are displayed in a row
  And each image shows an Instagram icon overlay on hover

### Footer

Scenario: Footer displays contact info and newsletter
  Given the user scrolls to the footer
  Then 2 location blocks are displayed with addresses and phone numbers
  And a newsletter signup form with input and "Sign Up" button is shown
  And social media links are displayed
  And the copyright line includes "Component Dock" branding

### Responsive Design

Scenario: Mobile layout
  Given the user views the page on a mobile viewport (< 768px)
  Then the navigation collapses to a hamburger menu
  And the grid layouts stack to single column
  And the hero text is centered and readable

## Verification Checklist

- [ ] Hero carousel renders with overlay and auto-play
- [ ] Menu section shows 8 burger items in 2-column grid
- [ ] Featured section shows 2 cards with dark overlay
- [ ] About section shows overlapping images + text
- [ ] Video section shows play button with popup
- [ ] Testimonials carousel works with navigation
- [ ] Instagram grid shows 4 images with hover overlay
- [ ] Footer has 3-column layout with newsletter form
- [ ] Footer links to Component Dock
- [ ] Responsive: mobile hamburger, stacked grids
- [ ] Fonts: Raleway (body) + Montserrat (headings) via Google Fonts
- [ ] Colors match tokens: #F0542C brand, #F2C64D accent, #040E27 dark
- [ ] Pill-shaped buttons (30-50px radius)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
