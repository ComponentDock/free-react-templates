# Template: Revlane (Car Rental Service)

## Purpose

Revlane is a single-page car rental service landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Carrentals" free template (source:
https://colorlib.com/wp/template/carrentals/), built under a DIFFERENT
name (**Revlane**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

Preview URL: https://preview.colorlib.com/theme/carrentals/

The original is a Bootstrap 4 + jQuery single-page car rental template with
a full-viewport hero image background, a trip search form overlay, how-it-works
steps, a split promo section, car listings grid, features grid, testimonials,
a CTA banner, and a multi-column footer.

## Design Tokens (from live preview CSS analysis)

### Colors
- **Primary / Brand blue:** `#0779e4` (Bootstrap `.btn-primary`, links,
  `.text-primary` on step numbers)
- **Text dark:** `#000` (body headings, hero h1)
- **Text secondary:** `rgba(0, 0, 0, 0.5)` (subtext, descriptions)
- **Text light on primary:** `#fff` (white text on primary bg)
- **Background page:** `#fff` (white)
- **Background light sections:** `#f8f9fa` (`.bg-light` on listings,
  testimonials)
- **Background primary CTA:** `#0779e4` (`.bg-primary` section)
- **Footer text:** `#000`, links hover `#0779e4`
- **Border/divider:** `#e6e6e6`, `#e3e3e3`

### Typography
- **Font family:** `"Roboto"` (Google Fonts), sans-serif
- **Weights used:** 300 (body text), 400 (regular), 700 (bold headings),
  900 (hero h1, section heading strong, step numbers)
- **Hero heading:** 50px, weight 900, color `#000`
- **Section headings:** `<strong>` inside h2, weight 900

### Buttons
- **Primary button:** bg `#0779e4`, color `#fff`, padding `12px 25px`,
  border-radius `4px` (Bootstrap default)
- **Hero search button:** full width `.btn-block`, padding `py-3`
- **White variant:** `.btn-white` on `.bg-primary` section (white bg,
  blue text)

### Layout & Spacing
- **Hero:** `100vh` min-height `570px`, background-image cover, centered
  content with intro text left-aligned
- **Grid:** Bootstrap 12-column, `col-lg-4` for 3-column sections
- **Section padding:** default Bootstrap `.site-section` (vertical padding)
- **Car listings:** `.bg-light` sections, 3-column card grid
- **Listing cards:** image left + content right layout (`.d-block
  .align-items-stretch`), border-radius `7px`
- **Footer:** multi-column (About + Quick Links + Resources + Support +
  Company), dark background with social icons

### Circular Elements
- **Step numbers:** circular spans with `border-radius: 50%`
- **Service/feature icons:** circular `.service-1-icon` with `border-radius: 50%`
- **Play button:** circular with `border-radius: 50%`

## Section Structure (from live preview DOM)

1. **Navbar** — sticky top, logo "CarRental" (bold), nav links: Home,
   Listing, Testimonials, Blog, About, Contact. Mobile hamburger menu.
2. **Hero** — full-viewport background image, heading "Rent a car is within
   your finger tips.", trip search form with: Select Type (dropdown),
   Pick up (date), Drop off (date), Search Now button.
3. **How It Works** — heading "How it works?", subtext "Easy steps to get
   you started". Three step cards in a row: 01. Select a car, 02. Fill up
   form, 03. Payment. Each has circular number, title, description. Below:
   video play button link.
4. **Promo Split** — two columns: left shows an image (feature_01.png),
   right has heading "You can easily avail our promo for renting a car."
   with description and "Meet them now" button.
5. **Car Listings** — `.bg-light` section, heading "Car Listings". Six car
   cards in 3x2 grid. Each card: car image, car name, price "$389.00/day",
   specs row (Luggage: 8, Doors: 4, Passenger: 4), description, "Rent Now"
   button. Cars: Mitsubishi Pajero, Nissan Moco, Honda Fitta, Skoda Laura,
   Mazda LaPuta, Buick LaCrosse.
6. **Features** — heading "Features". Six feature cards in 3x2 grid. Each
   card has circular icon (home, gear, clock, verified, video, key), title
   "Lorem ipsum dolor", description, "Learn more" link.
7. **Testimonials** — `.bg-light` section, heading "Testimonials". Three
   testimonial cards. Each: blockquote with quote text, avatar image,
   author name + role. Authors: Mike Fisher (Owner, Ford), Jean Stanley
   (Traveler), Katie Rose (Customer).
8. **CTA Banner** — `.bg-primary` blue section, heading "What are you
   waiting for?" with description, "Rent a car now" white button.
9. **Footer** — five columns: About Us (with social icons: Facebook,
   Instagram, Twitter, LinkedIn), Quick Links, Resources, Support, Company.
   Copyright bottom bar.

## Gherkin Requirements

### Navbar
```gherkin
Feature: Navbar
  Scenario: Displays logo and navigation links
    Given the user loads the page
    Then the navbar shows the logo "Revlane" as a bold link
    And the navbar displays links: Home, Listing, Testimonials, Blog, About, Contact

  Scenario: Mobile hamburger toggle
    Given the viewport is narrow (mobile)
    Then a hamburger icon is visible
    When the user clicks the hamburger icon
    Then the mobile menu opens with the same nav links
```

### Hero
```gherkin
Feature: Hero Section
  Scenario: Displays hero with search form
    Given the user loads the page
    Then a full-viewport hero section is visible with a background image
    And the heading reads "Rent a car is within your finger tips."
    And a search form is shown with a vehicle type dropdown, pick-up date,
      drop-off date, and a "Search Now" button

  Scenario: Search form has correct fields
    Given the hero section is visible
    Then the dropdown contains at least 3 vehicle options
    And the pick-up input accepts a date
    And the drop-off input accepts a date
    And the search button is styled as a full-width primary button
```

### How It Works
```gherkin
Feature: How It Works
  Scenario: Displays three-step process
    Given the user scrolls to the "How it works" section
    Then three step cards are visible in a row
    And step 1 reads "Select a car" with number "01."
    And step 2 reads "Fill up form" with number "02."
    And step 3 reads "Payment" with number "03."
    And each step card has a description paragraph

  Scenario: Video play link
    Given the how-it-works section is visible
    Then a "Video how it works" play button link is displayed below the steps
```

### Promo Split
```gherkin
Feature: Promo Section
  Scenario: Displays promo with image and text
    Given the user scrolls to the promo section
    Then a feature image is shown on one side
    And the text "You can easily avail our promo for renting a car." is visible
    And a "Meet them now" primary button is displayed
```

### Car Listings
```gherkin
Feature: Car Listings
  Scenario: Displays car cards in grid
    Given the user scrolls to the Car Listings section
    Then six car cards are visible in a 3-column grid
    And each card shows a car image, name, price, specs, and description
    And each card has a "Rent Now" primary button

  Scenario: Car card details
    Given a car listing card is visible
    Then the price displays as "$389.00/day"
    And the specs show Luggage, Doors, and Passenger counts
    And the specs are separated by a border-bottom divider
```

### Features
```gherkin
Feature: Features Section
  Scenario: Displays feature cards
    Given the user scrolls to the Features section
    Then six feature cards are visible in a 3-column grid
    And each card has a circular icon, title, description, and "Learn more" link
```

### Testimonials
```gherkin
Feature: Testimonials
  Scenario: Displays customer testimonials
    Given the user scrolls to the Testimonials section
    Then three testimonial cards are visible
    And each card shows a blockquote, avatar image, author name, and role
```

### CTA Banner
```gherkin
Feature: CTA Banner
  Scenario: Displays call-to-action
    Given the user scrolls to the CTA section
    Then a blue banner reads "What are you waiting for?"
    And a "Rent a car now" white button is displayed
```

### Footer
```gherkin
Feature: Footer
  Scenario: Displays multi-column footer
    Given the user scrolls to the footer
    Then five columns are visible: About Us, Quick Links, Resources,
      Support, and Company
    And the About Us column shows social media icon links
    And a copyright bar is at the bottom

  Scenario: Footer links to Component Dock
    Given the footer is visible
    Then a link to https://www.componentdock.com/ is present
```

## Verification Checklist

- [ ] Navbar: logo bold, all 6 nav links, mobile hamburger toggle
- [ ] Hero: full-viewport bg image, heading text, search form with 4 fields
- [ ] How It Works: 3 step cards with circular numbers, video link
- [ ] Promo Split: image + heading + description + CTA button
- [ ] Car Listings: 6 cards in 3-col grid, each with image/name/price/specs/CTA
- [ ] Features: 6 cards in 3-col grid, circular icons, "Learn more" links
- [ ] Testimonials: 3 cards with blockquote + avatar + name + role
- [ ] CTA Banner: blue bg, white heading, white button
- [ ] Footer: 5 columns, social icons, copyright, Component Dock link
- [ ] Brand color #0779e4 used consistently (buttons, links, accents)
- [ ] Font Roboto loaded from Google Fonts
- [ ] All images use picsum.photos placeholders
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Responsive layout works at mobile/tablet/desktop breakpoints
