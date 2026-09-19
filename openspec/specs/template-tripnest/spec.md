# Template: TripNest (Travel & Tourism)

## Purpose

Recreation of ColorLib **Travello** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/travello/
- **Preview:** https://preview.colorlib.com/theme/travello/
- **New name:** `tripnest` (apps/tripnest, @free-react-templates/tripnest)
- **Surge target:** https://tripnest.free.componentdock.com
- **Category:** Travel & Tourism (single-page)

## Design tokens (extracted from preview CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font (body) | `"Open Sans", sans-serif` | Google Fonts import in style.css line 1 |
| Font (headings) | `"Oswald", sans-serif` | style.css lines 8251+ |
| Primary / dark | `#1a1a2e` | Buttons, nav, headings, badges |
| Accent blue | `#3b82f6` | Links, focus rings, list bullets |
| Accent blue hover | `#2563eb` | Link hover state |
| Success green | `#2ecc71` | Price/color indicators |
| Danger red | `#e74c3c` | Chat badge, alerts |
| Amber | `#f39c12` | Star ratings |
| Body text | `#64748b` | Paragraphs, muted text |
| Body bg | `#FFFFFF` | Page background |
| Light bg | `#f8fafc` | Search inputs, office cards |
| Border / divider | `#e4e6e8` | Section dividers |
| Button radius | `24px` (pill) | .home_search_button, .button a |
| Card radius | `16px` | .destination_image, .why_item |
| Card shadow | `0 10px 15px -3px rgba(0,0,0,0.1)` | Hover shadow |
| Transition | `200ms cubic-bezier(0.4, 0, 0.2, 1)` | Throughout |

## Section structure (top to bottom from preview)

1. **Header** -- Fixed, transparent over hero. Logo "TripNest" (Oswald 30px), nav links (Home, About, Services, News, Contact), phone number, social icons. Hamburger for mobile.
2. **Hero slider** -- Full-width background image slider, large heading "Let us take you away" / "Discover the world" / "Adventure awaits" (Oswald 100px white). Right-side page nav (Offers 01, Testimonials 02, Latest 03).
3. **Search bar** -- Overlapping hero. White card with rounded top. Title "Search for your trip" + 4 inputs (City, Departure, Arrival, Budget) + "SEARCH" button (dark pill).
4. **Intro** -- White section. 3-column icons + titles: "Top Destinations", "The Best Prices", "Amazing Services".
5. **Popular Destinations** -- 3x2 grid of destination cards. Image with 16px rounded corners, "Special Offer" badge, title, description, price. Hover: scale + shadow.
6. **Why Choose Us** -- Parallax background image (full-width dark overlay). 3 white cards with image + icon circle + title + text. Cards: "Fast Services", "Expert Guides", "Best Deals".
7. **Featured Tours** -- Carousel of tour cards with image, badge ("Best Seller", "Special Offer", "New"), duration, location, rating, title, description, price, "View Details" button. "View All Tours" CTA below.
8. **Testimonials** -- Background image section. Slider with testimonial text + author name. Right-side nav links.
9. **Instagram Feed** -- 6-column grid of images with hover overlay (Instagram icon).
10. **News** -- 3 blog posts (image + date + title + category + excerpt). Sidebar: promotional discount card.
11. **Footer** -- Newsletter subscription (name + email + "SUBSCRIBE" button), 3-column contact info (phone, address, email), copyright line.

## Gherkin requirements

### Feature: TripNest -- Travel and Tourism single-page template

  Scenario: Header displays navigation and branding
    Given the user visits the page
    Then the header shows the logo "TripNest"
    And navigation links: Home, About, Services, News, Contact
    And a phone number is displayed
    And social media icons are visible

  Scenario: Hero slider cycles through slides
    Given the hero section is visible
    Then a large heading is displayed over a background image
    And the heading rotates through "Let us take you away", "Discover the world", "Adventure awaits"
    And page navigation links appear on the right side

  Scenario: Search bar accepts trip parameters
    Given the search section is visible
    Then 4 input fields are shown: City, Departure, Arrival, Budget
    And a "SEARCH" pill button is displayed
    When the user fills all inputs and clicks search
    Then the form is submitted

  Scenario: Intro features three value propositions
    Given the intro section is visible
    Then 3 items are shown: "Top Destinations", "The Best Prices", "Amazing Services"
    And each has an icon and subtitle text

  Scenario: Popular Destinations grid shows 6 cards
    Given the destinations section is visible
    Then 6 destination cards are rendered in a 3-column grid
    And each card has an image, title, description, and price
    And one card shows a "Special Offer" badge
    And hovering a card scales the image and deepens the shadow

  Scenario: Why Choose Us shows 3 feature cards
    Given the why section is visible
    Then a parallax background image is displayed
    And 3 white cards are shown: "Fast Services", "Expert Guides", "Best Deals"
    And each card has an image, icon circle, title, and description

  Scenario: Featured Tours carousel
    Given the tours section is visible
    Then a carousel of tour cards is displayed
    And each card shows image, badge, duration, location, rating, title, price
    And a "View Details" button appears on each card
    And a "View All Tours" button appears below the carousel

  Scenario: Testimonials slider
    Given the testimonials section is visible
    Then a background image is displayed behind the section
    And testimonial text and author name are shown
    And navigation links appear on the right side

  Scenario: Instagram feed grid
    Given the instagram section is visible
    Then 6 images are shown in a row
    And hovering shows an Instagram icon overlay

  Scenario: News section with sidebar
    Given the news section is visible
    Then 3 blog posts are shown with image, date, title, category, excerpt
    And a sidebar promotional card offers a discount

  Scenario: Footer newsletter and contact
    Given the footer is visible
    Then a newsletter form with name, email, and subscribe button is shown
    And 3 contact columns display phone, address, and email info
    And a copyright line appears at the bottom

## Verification checklist

- [ ] Header: fixed position, transparent bg over hero, logo + nav + phone + social
- [ ] Hero: full-width slider with Swiper, 3 slides with different headings
- [ ] Search: overlapping card with 4 inputs + pill button, form submission
- [ ] Intro: 3-column layout with icon + title + subtitle
- [ ] Destinations: 3x2 grid, image hover effects, badge, price
- [ ] Why: parallax bg, 3 white cards with icon circles
- [ ] Tours: carousel with card details, badges, ratings, CTA button
- [ ] Testimonials: background image, slider, author info
- [ ] Instagram: 6-column grid with hover overlay
- [ ] News: 3 posts + sidebar promo card
- [ ] Footer: newsletter form, 3 contact columns, copyright
- [ ] Mobile: hamburger menu, responsive grid collapses
- [ ] All fonts: Open Sans (body) + Oswald (headings)
- [ ] Colors: #1a1a2e primary, #3b82f6 accent, #64748b muted
- [ ] Buttons: pill radius 24px, dark bg, hover lift effect
