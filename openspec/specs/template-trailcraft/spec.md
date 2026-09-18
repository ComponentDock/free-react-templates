# Template: Trailcraft (Travel Template)

## Purpose

Trailcraft is a single-page travel agency template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Adventure 2"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Adventure 2" — Travel agency template
  (source: https://colorlib.com/wp/template/adventure-2/).
  Description: "Adventure 2 is an impressive free HTML travel website template
  for agencies and other tourism businesses willing to get their names out there."
- **Preview URL:** https://preview.colorlib.com/theme/adventure2/ — HTTP 200,
  full rendered DOM analyzed via curl (title: "Adventure - Free Bootstrap 4
  Template by Colorlib"). Stylesheets: `css/style.css` (main), plus
  `open-iconic-bootstrap.min.css`, `animate.css`, `owl.carousel.min.css`,
  `owl.theme.default.min.css`, `magnific-popup.css`, `aos.css`, `ionicons.min.css`,
  `bootstrap-datepicker.css`, `jquery.timepicker.css`, `flaticon.css`, `icomoon.css`.
  Fonts: Google Fonts **Poppins 200–700** (body) + **Abril Fatface 400**
  (display headings on destination entry titles).
  Cross-checked against the TEMPLATES.md screenshot
  (`adventure2-free-template.jpg`). The demo brands itself "Adventure";
  our recreation uses the NEW name **Trailcraft**.
- **Section order (1:1):** Navbar → Hero → Search Tabs → Intro Features →
  Latest Vacation Ideas → About / Best Travel Agency → Services →
  Most Popular Destinations → Counter Stats → Testimonials →
  Recommended Restaurants → Newsletter CTA → Footer

## Section-by-section structure

### 1. Navbar
- Dark Bootstrap navbar (`.navbar-dark .bg-dark`)
- Logo "Adventure" → "Trailcraft" (brand text, not image)
- Nav links: Home (active), About, Places, Hotels, Blog, Contact
- Right-aligned hamburger toggle on mobile (`.navbar-toggler`)
- Sticky on scroll (`.ftco-navbar-light` adds light bg + shadow after scroll)

### 2. Hero Section
- Full-height hero (`.hero-wrap.js-fullheight`, min-height 100vh)
- Background image with dark overlay (`.overlay`, rgba dark)
- Centered text: `<h1>` "Discover \nA new Place" (large, white, bold)
- Subtext: "Find great places to stay, eat, shop, or visit from local experts"
- Scroll animation (data-scrollax attributes)

### 3. Search/Booking Tabs
- Three pill-style tabs: Flight | Hotel | Car Rent
- White background form area
- Flight tab: From, Where, Check In, Check Out, Travelers (select), Search button
- Hotel tab: Check In, Check Out, Guest (select), Search button
- Car Rent tab: Where, Check In, Check Out, Search button
- Primary button color `#78d5ef` (light blue/cyan)
- Form inputs with icon prefixes (location, calendar icons)

### 4. Intro Features (bg-light, 3 columns)
- Section background: `#f8f9fa` (bg-light)
- 3 columns: "01 Travel", "02 Experience", "03 Relax"
- Number badges styled with `<span>` inside `<h3>`
- Short paragraph descriptions below each heading

### 5. Latest Vacation Ideas
- Section heading: "See our latest vacation ideas" (centered)
- 3 image cards (col-md-4 each):
  - Beachfront Scape, Group Holidays, City Breaks
- Each card: background image, white text overlay at bottom (Abril Fatface font)
- Cards are `<a>` links with `.destination-entry` class, height 300px

### 6. About / Best Travel Agency
- Two-column layout (`.ftco-about.d-md-flex`)
- Left: image, Right: heading + content
- Heading: "The Best Travel Agency"
- Paragraph with lorem ipsum text
- Or image + text in alternating column order (flex-column-reverse)

### 7. Services (bg-light, 4 columns)
- Section background: `#f8f9fa`
- 4 icon-service cards:
  - Special Activities
  - Travel Arrangements
  - Private Guide
  - Location Manager
- Each: icon + h3 heading + short paragraph

### 8. Most Popular Destinations
- Section heading: "Most Popular Destination" (centered)
- Full-width fluid grid (`.container-fluid`, responsive columns)
- Destination cards with:
  - Background image (`.img-2`)
  - Overlay icon (link icon)
  - Name (h3, e.g. "Paris, Italy")
  - Star rating (4.5 stars + "8 Rating" text)
  - Price (`$200`, styled in `.price`)
  - Description paragraph
  - Duration badge ("2 days 3 nights")
  - Bottom area: location + "Discover" link
- Alternating layout: some cards have image on top, text below (flex-column-reverse)

### 9. Counter Stats
- Parallax background image
- 4 stat counters (animated numbers):
  - 120 destinations
  - 100+ packages
  - 85+ hotel partners
  - 100+ customer reviews
- Numbers animate on scroll (Owl Carousel / AOS)

### 10. Testimonials
- Section heading: "Our satisfied customer says" (centered)
- Owl Carousel with testimonial cards:
  - Customer avatar (circular image)
  - Star rating (4-5 stars)
  - Quote text
  - Customer name
- Multiple slides, auto-scroll

### 11. Recommended Restaurants
- Section heading: "Recommended Restaurants" (centered)
- 4 restaurant cards (col-md-6 col-lg-3):
  - Background image
  - Restaurant name overlay
  - Rating, location info

### 12. Newsletter CTA
- Parallax background image
- Dark overlay with white text
- Heading: "Subcribe to our Newsletter" (note: original typo preserved in heading)
- Description paragraph
- Email input + "Subscribe" button (inline flex layout)
- Button styling: `#78d5ef` primary, `#212529` text

### 13. Footer
- Dark background: `#222831` (footer body), `#3c312e` (`.ftco-bg-dark`)
- 4 columns:
  - Brand column: Logo "Adventure" → "Trailcraft" + description + social icons
    (Twitter, Facebook, Instagram)
  - Information: About Us, Online enquiry, Call Us, General enquiries,
    Booking Conditions, Privacy and Policy, Refund policy
  - Experience: Beach, Adventure, Wildlife, Honeymoon, Nature, Party
  - Contact: Address (203 Fake St. Mountain View...), Phone, Email
- Bottom copyright bar with Component Dock link

## Design tokens (extracted from live preview CSS)

- **Primary color:** `#78d5ef` (light blue/cyan) — buttons, active states, accents
- **Primary hover:** `#56caeb`
- **Primary active:** `#4ac7ea`
- **Footer background:** `#222831` (dark blue-grey)
- **Footer dark accent:** `#3c312e` (dark brown)
- **Body text:** `#999999` (light gray), `#666666` (medium gray)
- **Muted text:** `#b3b3b3`
- **Headings:** `#1a1a1a` (near-black)
- **Nav links:** white (on dark navbar), `#999` (footer links)
- **Border/divider:** `#e9ecef`
- **Section backgrounds:** white `#fff`, light gray `#f8f9fa`
- **Hero overlay:** dark rgba overlay on background image
- **Body font:** `"Poppins", Arial, sans-serif` (weights 200–700)
- **Display font:** `"Abril Fatface", cursive` (destination entry titles)
- **Button radius:** Bootstrap default (0.25rem)
- **Card height:** 300px (destination entries)

## Gherkin requirements

Feature: Trailcraft Travel Agency Template
  As a visitor to a travel agency website
  I want to browse destinations, book trips, and find restaurants
  So that I can plan my next adventure

  Background:
    Given the Trailcraft template is loaded
    And the viewport is at desktop width (≥1200px)

  # --- Navbar ---
  Scenario: Navbar displays brand and navigation links
    Then I should see the brand "Trailcraft" in the navbar
    And I should see navigation links: Home, About, Places, Hotels, Blog, Contact
    And the "Home" link should be visually active/highlighted

  Scenario: Navbar becomes sticky on scroll
    When I scroll down past the hero section
    Then the navbar should become sticky at the top
    And it should have a white/light background

  # --- Hero ---
  Scenario: Hero section displays with background and heading
    Then I should see a full-height hero section
    And it should display the heading "Discover A new Place"
    And it should display the subtext about finding places to stay, eat, shop
    And it should have a dark overlay over the background image

  # --- Search Tabs ---
  Scenario: Search tabs show Flight, Hotel, Car Rent options
    Then I should see three tabs: Flight, Hotel, Car Rent
    And the Flight tab should be active by default

  Scenario: Flight search form displays correct fields
    Given the Flight tab is active
    Then I should see form fields: From, Where, Check In, Check Out, Travelers
    And I should see a "Search" button with primary color

  Scenario: Hotel search form displays correct fields
    When I click the "Hotel" tab
    Then I should see form fields: Check In, Check Out, Guest
    And I should see a "Search" button

  Scenario: Car Rent search form displays correct fields
    When I click the "Car Rent" tab
    Then I should see form fields: Where, Check In, Check Out
    And I should see a "Search" button

  # --- Intro Features ---
  Scenario: Intro section shows three feature columns
    Given I scroll to the intro section
    Then I should see three columns with headings: Travel, Experience, Relax
    And each column should have a numbered badge (01, 02, 03)
    And each column should have a descriptive paragraph
    And the section should have a light background

  # --- Latest Vacation Ideas ---
  Scenario: Vacation ideas section shows three cards
    Given I scroll to the vacation ideas section
    Then I should see the heading "See our latest vacation ideas"
    And I should see three destination cards: Beachfront Scape, Group Holidays, City Breaks
    And each card should have a background image and text overlay

  # --- About / Best Travel Agency ---
  Scenario: About section displays agency information
    Given I scroll to the about section
    Then I should see the heading "The Best Travel Agency"
    And I should see an image alongside descriptive text
    And the layout should be side-by-side (two columns)

  # --- Services ---
  Scenario: Services section shows four service cards
    Given I scroll to the services section
    Then I should see four services: Special Activities, Travel Arrangements, Private Guide, Location Manager
    And each service should have an icon and description paragraph
    And the section should have a light background

  # --- Popular Destinations ---
  Scenario: Destinations section shows destination cards
    Given I scroll to the destinations section
    Then I should see the heading "Most Popular Destination"
    And I should see destination cards with: image, name, star rating, price, description, duration
    And each card should have a "Discover" link

  # --- Counter Stats ---
  Scenario: Counter section shows animated statistics
    Given I scroll to the counter section
    Then I should see 4 statistics with animated counters
    And the section should have a parallax background image

  # --- Testimonials ---
  Scenario: Testimonials carousel displays customer reviews
    Given I scroll to the testimonials section
    Then I should see the heading "Our satisfied customer says"
    And I should see testimonial cards with avatar, star rating, quote, and customer name
    And the testimonials should be in a carousel format

  # --- Recommended Restaurants ---
  Scenario: Restaurants section shows restaurant cards
    Given I scroll to the restaurants section
    Then I should see the heading "Recommended Restaurants"
    And I should see restaurant cards with image and name

  # --- Newsletter CTA ---
  Scenario: Newsletter section accepts email subscriptions
    Given I scroll to the newsletter section
    Then I should see the heading "Subcribe to our Newsletter"
    And I should see an email input field
    And I should see a "Subscribe" button
    And the section should have a parallax background image with dark overlay

  # --- Footer ---
  Scenario: Footer displays brand, links, and contact info
    Given I scroll to the footer
    Then I should see the brand "Trailcraft" with description
    And I should see social media icons (Twitter, Facebook, Instagram)
    And I should see four link columns: Brand, Information, Experience, Contact
    And I should see contact information: address, phone, email
    And I should see a copyright bar with Component Dock attribution

  # --- Responsive ---
  Scenario: Template is responsive on mobile
    Given the viewport width is 375px
    Then the navbar should show a hamburger toggle
    And the search tabs should stack vertically
    And the destination cards should stack in a single column
    And the footer columns should stack vertically

## Verification checklist

- [ ] Navbar: brand text, nav links, sticky behavior, mobile hamburger
- [ ] Hero: full-height, background image, dark overlay, heading + subtext
- [ ] Search tabs: 3 tabs (Flight/Hotel/Car Rent), correct form fields per tab
- [ ] Intro: 3 columns, numbered headings, light background
- [ ] Vacation ideas: 3 image cards with text overlays
- [ ] About: two-column layout, heading + image + text
- [ ] Services: 4 service cards with icons, light background
- [ ] Destinations: fluid grid, star ratings, prices, "Discover" links
- [ ] Counter: parallax bg, 4 animated stats
- [ ] Testimonials: carousel with avatars, ratings, quotes
- [ ] Restaurants: 4 cards with images
- [ ] Newsletter: parallax bg, dark overlay, email form
- [ ] Footer: 4 columns, social icons, contact info, Component Dock link
- [ ] Responsive: mobile hamburger, stacking columns, single-column cards
- [ ] Design tokens: `#78d5ef` primary, Poppins font, Abril Fatface display
- [ ] No ColorLib references in app code (provenance in spec + TEMPLATES.md only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` = `trailcraft.free.componentdock.com`
- [ ] `homepage` in package.json = `https://trailcraft.free.componentdock.com`
