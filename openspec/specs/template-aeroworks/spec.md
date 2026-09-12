# Template: AeroWorks (Car Dealership / Rental)

## Purpose

Recreation of the ColorLib **Hvac** template
([colorlib.com/wp/template/hvac/](https://colorlib.com/wp/template/hvac/)),
preview at [preview.colorlib.com/theme/hvac/](https://preview.colorlib.com/theme/hvac/).

> **Note:** Despite the name "Hvac," this template is a **car rental / dealership**
> site — hero with car search, service cards, vehicle listings, blog, and footer.

**Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript.
**Name:** `aeroworks` (apps/aeroworks, @free-react-templates/aeroworks).

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and DOM analysis.

| Token | Value | Notes |
|-------|-------|-------|
| **Primary brand** | `#db2d2e` | Red — buttons, accents, active states |
| **Text dark** | `#353535` | Headings, body text |
| **Text medium** | `#727171` | Secondary text, descriptions |
| **Text light** | `#8d8d8d` | Muted text, labels |
| **Header top bar** | `#323232` | Dark top bar background |
| **Section light bg** | `#f7f7f7` | Feature + Choose Us sections |
| **Border** | `#ebebeb` | Service card borders, dividers |
| **White** | `#ffffff` | Cards, form backgrounds, text on dark |
| **Font family** | `"Lato", sans-serif` | All text |
| **Font weights** | 300, 400, 700 | Light, regular, bold |
| **Button radius** | `2px` | Sharp corners on all buttons |
| **Card radius** | `2px` | Service cards, form cards |
| **Button padding** | `15px 35px 12px 38px` | `.site-btn` style |
| **Section padding** | `140px 0` (hero) | Generous vertical spacing |

## Section Structure (in order)

1. **Header** — Top bar (phone, email, social icons, dark `#323232` bg) + main nav bar (logo left, nav links center, "Add Car" button right). Nav links: Home, Cars, Blog, Pages dropdown (About Us, Car Details, Blog Details).
2. **Hero** — Full-width background image (car photo). Overlay: "Find Your Dream Car" headline, subheadline "Buy Your Dream Car", model name + price tag, two CTA buttons ("Test Drive" + "Learn More"). Below: tabbed search form (Car Rental / Buy Car) with dropdowns (Year, Brand, Model, Mileage, Price Range).
3. **Services** — 4 service cards in a row: "Rental A Cars", "Buying A Cars", "Car Maintenance", "Support 24/7". Each card: icon + title + description. White cards with `1px solid #ebebeb` border, `border-radius: 2px`.
4. **Feature** — Split layout: left side = "We Are a Trusted Name In Auto" heading + description + two buttons ("About Us", "Our Partners"); right side = 6 feature items in 2×3 grid with icons: Engine, Turbo, Cooling, Suspension, Electrical, Brakes. Background: `#f7f7f7`.
5. **Car Listings** — "Best Vehicle Offers" heading + filter row. Grid of car cards (owl-carousel image slider per card), each showing: car name, price (monthly or lump sum), brief specs. Cards have image carousel + text overlay.
6. **Choose Us** — Split layout: left = "Why People Choose Us" heading + text + "About Us" button; right = video thumbnail/placeholder with play button overlay. Background: `#f7f7f7`.
7. **Latest News** — "Latest News Updates" heading. 3 blog post cards in a row: each with background image thumbnail, date, title, short excerpt. Cards stacked vertically with image on top.
8. **Footer** — Dark background (set-bg). Three columns: Contact (phone, email, address), About (logo + social icons), Information (links: Purchase, Payment, Shipping, Return). Bottom row: Top Brand logos + copyright bar.

## Gherkin Requirements

### Feature: Header Navigation

```gherkin
Scenario: Top bar displays contact info
  Given the user is on any page
  Then the top bar shows a phone number and email address
  And the top bar has a dark background (#323232)
  And social media icons are visible

Scenario: Main navigation renders all links
  Given the user is on any page
  Then the nav bar shows logo on the left
  And links: Home, Cars, Blog, Pages
  And an "Add Car" button is visible on the right

Scenario: Pages dropdown shows sub-links
  Given the user hovers over "Pages" in the nav
  Then a dropdown appears with: About Us, Car Details, Blog Details
```

### Feature: Hero Section

```gherkin
Scenario: Hero displays car hero content
  Given the user is on the home page
  Then the hero section shows a full-width background image
  And "Find Your Dream Car" headline is visible
  And a car model name and monthly price are displayed
  And two CTA buttons are visible: "Test Drive" and "Learn More"

Scenario: Hero search form has two tabs
  Given the user scrolls to the hero search area
  Then tabs "Car Rental" and "Buy Car" are visible
  And the rental tab shows dropdowns for Year, Brand, Model, Mileage
  And a price range slider is visible

Scenario: Search form submits
  Given the user selects filters in the search form
  When they click the search/submit button
  Then the form triggers a search action
```

### Feature: Services Section

```gherkin
Scenario: Four service cards are displayed
  Given the user scrolls to the services section
  Then 4 service cards are visible in a row
  And each card has an icon, title, and description
  And the cards have white backgrounds with light borders

Scenario: Service cards have correct content
  Then the services are: Rental A Cars, Buying A Cars, Car Maintenance, Support 24/7
```

### Feature: Feature Section

```gherkin
Scenario: Feature section shows trust message and items
  Given the user scrolls to the feature section
  Then "We Are a Trusted Name In Auto" heading is visible
  And a description paragraph is shown
  And "About Us" and "Our Partners" buttons are visible
  And 6 feature items are shown in a grid: Engine, Turbo, Cooling, Suspension, Electrical, Brakes

Scenario: Feature items have icons
  Then each feature item has an icon above its label
  And the section has a light gray (#f7f7f7) background
```

### Feature: Car Listings

```gherkin
Scenario: Car grid displays vehicle cards
  Given the user scrolls to the car listings section
  Then "Best Vehicle Offers" heading is visible
  And multiple car cards are shown in a grid layout
  And each card has an image slider, car name, and price
  And prices show either monthly rate or full price

Scenario: Car cards are interactive
  Given a car card is visible
  When the user hovers over the card
  Then hover effects are visible (opacity/overlay change)
```

### Feature: Choose Us Section

```gherkin
Scenario: Choose Us section renders
  Given the user scrolls to the choose us section
  Then "Why People Choose Us" heading is visible
  And an "About Us" button is shown
  And a video thumbnail with play button is on the right
  And the section has a light gray (#f7f7f7) background
```

### Feature: Latest News

```gherkin
Scenario: Blog cards are displayed
  Given the user scrolls to the latest news section
  Then "Latest News Updates" heading is visible
  And 3 blog post cards are shown in a row
  And each card has a thumbnail image, date, and title

Scenario: Blog cards link to articles
  Given a blog card is visible
  When the user clicks on it
  Then they navigate to the blog post detail page
```

### Feature: Footer

```gherkin
Scenario: Footer shows contact and info columns
  Given the user scrolls to the footer
  Then "Contact Us Now!" heading is visible with phone and email
  And an Information column shows links: Purchase, Payment, Shipping, Return
  And a Top Brand section shows brand logos
  And copyright text is displayed at the bottom

Scenario: Footer has Component Dock link
  Given the user is on any page
  Then the footer contains a link to https://www.componentdock.com/
  And the link text mentions "Component Dock"
```

## Verification Checklist

- [ ] All 8 sections render in correct order
- [ ] Design tokens match: #db2d2e primary, Lato font, 2px radius
- [ ] Header: top bar dark, nav links, "Add Car" button
- [ ] Hero: bg image, headline, search form with tabs
- [ ] Services: 4 cards with icons, borders, centered text
- [ ] Feature: split layout, 6 icon items, #f7f7f7 background
- [ ] Car listings: grid of cards with image sliders and prices
- [ ] Choose Us: split layout with video placeholder
- [ ] Latest News: 3 blog cards with thumbnails
- [ ] Footer: dark bg, contact/info/brands columns, copyright
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds (vite build)
