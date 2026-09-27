# Template: BlueCoast (Real Estate)

## Purpose

Recreation of ColorLib **Bluesky** — a real estate website template with hero carousel, property search, recent listings, city exploration, testimonials, and newsletter signup.

- **Source:** https://colorlib.com/wp/template/bluesky/
- **Preview:** https://preview.colorlib.com/theme/bluesky/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `bluecoast` (never reuse "bluesky")

## Design Tokens

Extracted from `styles/main_styles.css` on the live preview:

| Token | Value | Notes |
|---|---|---|
| Font family | `'Montserrat', sans-serif` | Google Fonts |
| Primary gradient | `linear-gradient(to right, #487fee, #32fa95)` | Blue-to-green; used on parallax overlays, search button, newsletter button |
| Primary blue | `#3f6fce` | Header, nav active states, footer backgrounds |
| Accent green | `#2cd983` | Highlight links, feature icons |
| Text dark | `#282828` | Headings |
| Text gray | `#828282` | Body text |
| Light gray | `#a5a5a5` / `#929191` | Secondary text |
| CTA red | `#FF6347` | Link/button hover accent |
| White | `#FFFFFF` | Section backgrounds |
| Border radius (buttons) | `45px` / `35px` | Pill-shaped buttons |
| Border radius (cards) | `36px` / `22px` / `20px` | Rounded cards and containers |
| Border radius (small) | `16px` | Search input fields |

## Section Structure (top to bottom)

1. **Header** — White bar, logo left, nav links (Home, About us, Properties, News, Contact), phone number right. Transparent over hero on scroll.
2. **Hero Slider** — Full-width image carousel (3 slides). Each slide: background image, overlay with subtitle ("super offer"), title ("Villa with sea view"), feature icons (sqft, bedrooms, bathrooms), price. Gradient overlay at bottom.
3. **Search Bar** — Floating search form overlapping hero. 5 select dropdowns (For rent, All types, City, Bedrooms, Bathrooms) + green gradient "search" button (pill shape, 45px radius).
4. **Recent Properties** — Section title "Recent Properties", 3 property cards in a row. Each card: image, price badge, location, features (sqft/bed/bath), "For rent" label.
5. **Cities** — Title "Find properties in these cities" + subtitle. 8 city image cards in a flex grid (4x2). Each card: image with dark overlay, city name centered, rental price text.
6. **Testimonials** — Title "What our clients say" + subtitle. 3 testimonial cards: title, paragraph text, author image (circular), author name, 5-star rating.
7. **Newsletter** — Parallax background image with blue-green gradient overlay. Left: title "Are you buying or selling?" + subtitle. Right: email input + "subscribe now" button.
8. **Footer** — Dark background. Row 1: logo + "Latest Properties" title. Row 2: about text + 3 latest property listings (thumbnail, location, name, price). Bottom bar: copyright + nav links + phone number. Footer MUST link `https://www.componentdock.com/`.

## Gherkin Requirements

### Feature: Header Navigation

```gherkin
Scenario: Logo is visible in the header
  Given I am on the BlueCoast homepage
  Then I see the site logo in the header

Scenario: Navigation links are present
  Given I am on the BlueCoast homepage
  Then I see nav links for "Home", "About us", "Properties", "News", "Contact"

Scenario: Phone number is displayed
  Given I am on the BlueCoast homepage
  Then I see a phone number in the header

Scenario: Mobile menu toggle exists
  Given I am on the BlueCoast homepage on a mobile viewport
  Then I see a hamburger menu icon
  And clicking it opens a fullscreen overlay menu
```

### Feature: Hero Slider

```gherkin
Scenario: Hero slider displays property slides
  Given I am on the BlueCoast homepage
  Then I see a hero carousel with background images

Scenario: Each slide shows property details
  Given I view a hero slide
  Then I see a subtitle (e.g. "super offer")
  And I see a title (e.g. "Villa with sea view")
  And I see property features (sqft, bedrooms, bathrooms)
  And I see a price

Scenario: Slides can be navigated
  Given I am on the BlueCoast homepage
  When I click the next slide indicator
  Then the carousel advances to the next slide
```

### Feature: Property Search

```gherkin
Scenario: Search form is displayed below the hero
  Given I am on the BlueCoast homepage
  Then I see a search form with filter dropdowns

Scenario: Search form has all filter fields
  Given I see the search form
  Then I see selects for "For rent", "All types", "City", "Bedrooms", "Bathrooms"
  And I see a "search" button

Scenario: Search button has gradient styling
  Given I see the search form
  Then the "search" button has a blue-to-green gradient background
```

### Feature: Recent Properties

```gherkin
Scenario: Recent properties section is present
  Given I am on the BlueCoast homepage
  Then I see a section titled "Recent Properties"

Scenario: Property cards display key details
  Given I see the recent properties section
  Then I see at least 3 property cards
  And each card shows an image, price, location, and feature icons
```

### Feature: Cities Grid

```gherkin
Scenario: Cities section is present
  Given I am on the BlueCoast homepage
  Then I see a section titled "Find properties in these cities"

Scenario: City cards show location and pricing
  Given I see the cities grid
  Then I see at least 8 city cards
  And each card shows a city name and rental price on a dark overlay
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials section is present
  Given I am on the BlueCoast homepage
  Then I see a section titled "What our clients say"

Scenario: Testimonial cards show author info
  Given I see the testimonials section
  Then I see at least 3 testimonial cards
  And each card shows a title, text, author image, author name, and star rating
```

### Feature: Newsletter

```gherkin
Scenario: Newsletter section has parallax background
  Given I am on the BlueCoast homepage
  Then I see a newsletter section with a parallax background image

Scenario: Newsletter has email signup form
  Given I see the newsletter section
  Then I see a title "Are you buying or selling?"
  And I see an email input field
  And I see a "subscribe now" button
```

### Feature: Footer

```gherkin
Scenario: Footer has logo and latest properties
  Given I am on the BlueCoast homepage
  Then I see the footer with a logo and "Latest Properties" section

Scenario: Footer has about text and property listings
  Given I see the footer
  Then I see an about paragraph
  And I see 3 latest property listings with thumbnail, location, name, and price

Scenario: Footer has navigation and contact info
  Given I see the footer
  Then I see footer nav links and a phone number

Scenario: Footer links to Component Dock
  Given I am on the BlueCoast homepage
  Then the footer contains a link to "https://www.componentdock.com/"
```

## Verification Checklist

- [ ] Header: logo, 5 nav links, phone number, mobile hamburger menu
- [ ] Hero slider: 3 slides with background images, subtitles, titles, features, prices
- [ ] Search form: 5 dropdowns + gradient search button, pill-shaped
- [ ] Recent Properties: section title, 3 property cards with image/price/location/features
- [ ] Cities: section title + subtitle, 8 city cards with overlay text
- [ ] Testimonials: section title + subtitle, 3 cards with title/text/author/rating
- [ ] Newsletter: parallax background, title, email input, subscribe button
- [ ] Footer: logo, about text, 3 latest listings, nav links, phone, Component Dock link
- [ ] Design tokens: Montserrat font, #487fee→#32fa95 gradient, #3f6fce blue, #2cd983 green, pill buttons (45px radius)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images via `picsum.photos`
- [ ] Google Font loaded via `<link>` in `index.html`
