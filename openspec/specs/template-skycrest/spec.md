# Template: SkyCrest (Real Estate)

## Purpose

Recreation of ColorLib's **Bluesky** real estate template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source**: [colorlib.com/wp/template/bluesky/](https://colorlib.com/wp/template/bluesky/)
- **Preview**: [preview.colorlib.com/theme/bluesky/](https://preview.colorlib.com/theme/bluesky/)
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript strict
- **New name**: `skycrest` (apps/skycrest)
- **Package**: `@free-react-templates/skycrest`

## Design tokens (extracted from preview stylesheet)

| Token | Value | Notes |
|-------|-------|-------|
| Font family | Montserrat (300–900) | Google Fonts, weights 300,400,500,600,700,800,900 |
| Brand gradient | `linear-gradient(to right, #487fee, #32fa95)` | Blue-to-green; used on buttons, header border |
| Primary blue | `#3f6fce` | Header background |
| Button gradient start | `#487fee` | Blue |
| Button gradient end | `#32fa95` | Green |
| Button shape | Pill (border-radius: 36px), 193×72 px | Full-width on mobile |
| Body text | `#a5a5a5` | Body font-color |
| Paragraph text | `#929191` | Line-height: 2 |
| Section title | `#282828`, weight 600, 30px | |
| Section subtitle | `#828282`, weight 500, 14px | |
| Link hover accent | `#ffa07f` | Salmon underline on hover |
| Selection highlight | `#32f996` | Green |
| Form control | `#db5246` | Red accent for inputs |
| Footer bg | Dark (near-black) | Contrast section |
| Newsletter parallax | Full-width background image | Parallax scroll effect |

## Sections (order from preview)

1. **Header** — Fixed top; logo left, nav links (Home, About us, Properties, News, Contact), phone number right. Background: `#3f6fce` blue with gradient bottom border.
2. **Hero / Home Slider** — Full-width image carousel (Owl Carousel). Each slide: background image, subtitle ("super offer"), title ("Villa with sea view"), detail pills (sqft, bedrooms, bathrooms with icons), price. Pill-shaped gradient button or text overlay.
3. **Home Search** — Overlay bar on hero; dropdown selects (For rent, All types, City, Bedrooms, Bathrooms) + gradient "search" button. Horizontal flex layout, wraps on mobile.
4. **Recent Properties** — Section title "Recent Properties" / "Search your dream home". Carousel of property cards: image with "Featured"/"Offer" tag badge, location, title link, price, footer icons (sqft, bedrooms, bathrooms). "see more" gradient pill button below.
5. **Cities** — Title "Find properties in these cities". Grid (8 cards, 2 rows of 4): city image with dark overlay, centered city title + rental price text on hover.
6. **Testimonials** — Title "What our clients say". 3-column layout: testimonial title, paragraph text, author image (round), author name + role, 5-star rating icons.
7. **Newsletter** — Parallax background image section. Title "Are you buying or selling?" + subtitle + email input + "subscribe now" gradient button. Side-by-side layout (stack on mobile).
8. **Footer** — Dark bg. 4-column layout: logo + about text, 3× "Latest Properties" cards (image + location + name + price). Footer bar below: copyright, nav links, phone number.

## Gherkin scenarios

```gherkin
Feature: SkyCrest Real Estate Template

  Background:
    Given the SkyCrest app is loaded at "/"

  # Header
  Scenario: Fixed header displays logo, navigation, and phone number
    Then I should see a logo image
    And I should see navigation links: "Home", "About us", "Properties", "News", "Contact"
    And I should see the phone number "652-345 3222 11"
    And the header should be fixed to the top of the viewport

  Scenario: Header has blue background with gradient border
    Then the header background should be the primary blue (#3f6fce)
    And the header should have a gradient bottom border (blue-to-green)

  # Hero Slider
  Scenario: Hero displays property slides in a carousel
    Then I should see a carousel with at least 3 slides
    And each slide should show a subtitle, title, property details, and price

  Scenario: Hero slide shows property detail pills
    Then each slide should display square footage, bedrooms, and bathrooms icons

  # Home Search
  Scenario: Search form displays filter dropdowns and search button
    Then I should see dropdown selects for "For rent", "All types", "City", "Bedrooms", "Bathrooms"
    And I should see a "search" button with gradient styling

  # Recent Properties
  Scenario: Recent Properties section shows property cards in a carousel
    Given I scroll to the "Recent Properties" section
    Then I should see property cards with image, location, title, price, and footer icons
    And cards should have "Featured" or "Offer" tag badges

  Scenario: Recent Properties has "see more" button
    Given I scroll to the "Recent Properties" section
    Then I should see a "see more" button with pill gradient styling

  # Cities
  Scenario: Cities section shows 8 city cards in a grid
    Given I scroll to the "Find properties in these cities" section
    Then I should see 8 city cards
    And each card should show a city image with overlay text (city name + rental price)

  # Testimonials
  Scenario: Testimonials section shows 3 client reviews
    Given I scroll to the "What our clients say" section
    Then I should see 3 testimonial cards
    And each card should show a title, text, author image, author name, role, and star rating

  # Newsletter
  Scenario: Newsletter section has parallax background and email form
    Given I scroll to the newsletter section
    Then I should see a parallax background image
    And I should see the title "Are you buying or selling?"
    And I should see an email input field and a "subscribe now" button

  # Footer
  Scenario: Footer shows logo, about text, latest properties, and navigation
    Then I should see the footer with a logo, about text, 3 latest property cards, nav links, and phone number
    And the footer should link to "https://www.componentdock.com/" labeled "Component Dock"

  # Responsive
  Scenario: Mobile hamburger menu is accessible
    Given I resize the viewport to 375px width
    Then I should see a hamburger menu icon
    And clicking it should toggle the mobile menu overlay

  Scenario: Search form stacks on mobile
    Given I resize the viewport to 375px width
    Then the search form dropdowns should stack vertically
```

## Verification checklist

- [ ] Header: fixed position, blue bg (#3f6fce), gradient border, logo, 5 nav links, phone number
- [ ] Hero slider: full-width carousel, 3+ slides, each with subtitle/title/details/price
- [ ] Search form: 5 dropdown selects, gradient search button, horizontal layout desktop / stacked mobile
- [ ] Recent Properties: carousel of property cards, image + tag + location + title + price + icon row, "see more" button
- [ ] Cities: 8-card grid, city image + overlay text, 2 rows × 4 columns
- [ ] Testimonials: 3-column, author round image, name/role, 5-star rating
- [ ] Newsletter: parallax background, title + subtitle, email input + subscribe button
- [ ] Footer: 4-column (logo, about, 3× latest props, nav + phone), dark bg, Component Dock link
- [ ] Font: Montserrat from Google Fonts
- [ ] Colors: brand gradient #487fee→#32fa95, header #3f6fce, titles #282828
- [ ] Buttons: pill shape (radius 36px), gradient bg
- [ ] Responsive: hamburger menu, stacked layout on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
