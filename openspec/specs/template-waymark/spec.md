# Template: Waymark (Travel Agency)

## Purpose

Recreation of ColorLib's **Tour** template as a React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source:** https://colorlib.com/wp/template/tour/
- **Preview:** https://preview.colorlib.com/theme/tour/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/tour-free-template.jpg
- **New name:** `waymark` (avoids reuse of source slug "tour")
- **App folder:** `apps/waymark`
- **Package:** `@free-react-templates/waymark`
- **Deploy URL:** `https://waymark.free.componentdock.com`

## Design tokens

Extracted from `css/style.css` on the live preview.

| Token | Value | Usage |
|---|---|---|
| Brand yellow | `#FFDD00` | Reservation section bg, button hover, accent highlights |
| Accent blue | `#00BBF0` | Secondary accent (links, hover states) |
| Dark navy | `#2C2E3E` | Footer background |
| Body bg | `#ffffff` | Page background |
| Light grey | `#f2f2f2` | Hotels section background |
| Text dark | `#333333` | Body text, headings |
| Text mid | `#595959` | Secondary text |
| Text light | `#999999` / `#b3b3b3` | Muted text, captions |
| Overlay | `rgba(0,0,0,0.7)` | Intro banner and subscribe section parallax overlays |
| Button bg | `#000000` | Primary buttons (black) |
| Button hover | `#FFDD00` / `#ffe01a` | Primary button hover state |
| Button radius | `30px` | Rounded pill buttons |
| Font family | `"Quicksand", Arial, sans-serif` | All text (loaded via Google Fonts) |
| Font weight | 400 (body), 700 (headings) | Regular and bold |

## Section structure (DOM order from preview)

1. **Navbar** (`colorlib-nav`) — Fixed top nav: logo "Tour" (→ "Waymark"), links: Home, Tours, Destination, Cruises, Hotels, Services, Blog, About, Contact. Hamburger menu on mobile.

2. **Hero Slider** (`flexslider`) — Full-width image slider with 4 slides, each with background image, subtitle (e.g. "2 Days Tour"), title (e.g. "Amazing Maldives Tour"), and CTA button. Parallax-style transitions.

3. **Reservation Search** (`colorlib-reservation`) — Yellow `#FFDD00` background. 4 tabs: Flight, Hotel, Car Rent, Cruises. Each tab has search fields (destination, dates, guests/passengers, categories) and a "Book Now" CTA. Subtitle: "Book Your Trip".

4. **Services** (`colorlib-services`) — 4-column grid of service cards with icons and descriptions. Cards: "Amazing Travel", "Our Cruises", "Book Your Trip", "Nice Support". Subtitle: "Explore our most travel agency" / Title: "Our Travel Agency".

5. **Blog** (`colorlib-blog`) — 3 blog entry cards in a row. Each has an image, date, category tag, title, and excerpt. Subtitle: "Recent Blog".

6. **Intro/Sale Banner** (`colorlib-intro`) — Full-width parallax image section with dark overlay (`rgba(0,0,0,0.7)`). Shows "45% Off Sale", "Just hurry up limited offer!", and two CTA buttons ("Book Now", "Read more"). Title: "Experience the Best Trip Ever".

7. **Hotels** (`colorlib-hotel`) — Light grey `#f2f2f2` background. 4 hotel cards in a row. Each shows: image, price (`$120 /night`), review count, hotel name, location. Subtitle: "Recommended Hotels".

8. **Testimonials** (`colorlib-testimony`) — Carousel with 3 testimonials. Each has a quote, author name, and location. Light grey background section. Title: "Our Satisfied Guests says".

9. **Newsletter Subscribe** (`colorlib-subscribe`) — Full-width parallax image with dark overlay. Email input + "Subscribe" button. Title: "Sign Up for a Newsletter", subtitle: "Sign up for our mailing list to get latest updates and offers."

10. **Footer** (`colorlib-footer`) — Dark navy `#2C2E3E` background. 5 columns: Agency info + social icons, "Book Now" links, "Hotels" links, "Blog Post" links, "Contact Information". Bottom bar with copyright and "Component Dock" attribution link.

## Gherkin requirements

### Navbar
```gherkin
Feature: Navigation bar

  Scenario: Logo and nav links render
    Given the page loads
    Then the navbar displays the "Waymark" logo
    And nav links include: Home, Tours, Destination, Cruises, Hotels, Services, Blog, About, Contact

  Scenario: Mobile hamburger menu
    Given the viewport is below 768px
    When the user taps the hamburger icon
    Then a mobile menu slides open with all nav links

  Scenario: Navbar is fixed on scroll
    Given the user scrolls down
    Then the navbar remains fixed at the top of the viewport
```

### Hero Slider
```gherkin
Feature: Hero image slider

  Scenario: Slides display content
    Given the hero slider renders
    Then 4 slides are present
    And each slide shows a subtitle, title, and CTA button

  Scenario: Auto-rotation
    Given the slider is visible
    When 5 seconds elapse
    Then the slider advances to the next slide

  Scenario: Manual navigation
    Given the slider is visible
    When the user clicks the next arrow
    Then the slider advances to the next slide
```

### Reservation Search
```gherkin
Feature: Travel search form

  Scenario: Tab navigation
    Given the reservation section renders
    Then tabs for Flight, Hotel, Car Rent, and Cruises are visible
    When the user clicks the "Hotel" tab
    Then the Hotel search form becomes active
    And the Flight form is hidden

  Scenario: Flight search fields
    Given the Flight tab is active
    Then fields for Where, Check-in, Check-out, and Guest count are visible
    And a "Book Now" button is present

  Scenario: Hotel search fields
    Given the Hotel tab is active
    Then fields for Where, Check-in, Check-out, and Guest count are visible
    And a "Book Now" button is present

  Scenario: Car Rent search fields
    Given the Car Rent tab is active
    Then fields for Where, Start Date, and Return Date are visible

  Scenario: Cruises search fields
    Given the Cruises tab is active
    Then fields for Where, Start Date, and category selection are visible
    And categories include: Suite, Super Deluxe, Balcony, Economy, Luxury
```

### Services
```gherkin
Feature: Services section

  Scenario: Four service cards render
    Given the services section is visible
    Then 4 service cards are displayed
    And cards show: "Amazing Travel", "Our Cruises", "Book Your Trip", "Nice Support"
    And each card has an icon, title, and description paragraph

  Scenario: Section heading
    Given the services section is visible
    Then the subtitle reads "Explore our most travel agency"
    And the title reads "Our Travel Agency"
```

### Blog
```gherkin
Feature: Blog section

  Scenario: Three blog entries render
    Given the blog section is visible
    Then 3 blog entries are displayed
    And each entry shows an image, date, category, title, and excerpt

  Scenario: Section heading
    Given the blog section is visible
    Then the title reads "Recent Blog"
```

### Intro / Sale Banner
```gherkin
Feature: Sale banner

  Scenario: Parallax banner displays
    Given the intro section is visible
    Then a full-width parallax image with dark overlay is shown
    And "45% Off Sale" text is displayed
    And "Just hurry up limited offer!" subtitle is shown
    And "Book Now" and "Read more" buttons are present

  Scenario: Title and description
    Given the intro section is visible
    Then the title reads "Experience the Best Trip Ever"
```

### Hotels
```gherkin
Feature: Hotels section

  Scenario: Four hotel cards render
    Given the hotels section is visible
    Then 4 hotel cards are displayed
    And each card shows: image, price ($120/night), review count, hotel name, location

  Scenario: Section heading
    Given the hotels section is visible
    Then the title reads "Recommended Hotels"
```

### Testimonials
```gherkin
Feature: Testimonials carousel

  Scenario: Three testimonials render
    Given the testimonials section is visible
    Then a carousel with 3 testimonials is displayed
    And each testimonial has a quote, author name, and location

  Scenario: Carousel navigation
    Given the testimonials carousel is visible
    When the user clicks the next indicator
    Then the next testimonial slides into view

  Scenario: Section heading
    Given the testimonials section is visible
    Then the title reads "Our Satisfied Guests says"
```

### Newsletter Subscribe
```gherkin
Feature: Newsletter subscription

  Scenario: Subscribe form renders
    Given the subscribe section is visible
    Then a parallax image with dark overlay is shown
    And an email input field is present
    And a "Subscribe" button is present

  Scenario: Section heading
    Given the subscribe section is visible
    Then the title reads "Sign Up for a Newsletter"
    And the subtitle reads "Sign up for our mailing list to get latest updates and offers."
```

### Footer
```gherkin
Feature: Footer

  Scenario: Five-column layout
    Given the footer is visible
    Then 5 columns are displayed
    And columns contain: Agency info, Book Now links, Hotels links, Blog Post links, Contact Information

  Scenario: Component Dock attribution
    Given the footer is visible
    Then a link to "https://www.componentdock.com/" is present
    And the link text mentions "Component Dock"
```

### Responsive
```gherkin
Feature: Responsive design

  Scenario: Mobile layout
    Given the viewport is 375px wide
    Then the navbar collapses to a hamburger menu
    And service cards stack vertically
    And hotel cards stack vertically
    And blog entries stack vertically
    And footer columns stack vertically

  Scenario: Tablet layout
    Given the viewport is 768px wide
    Then the layout adapts to 2-column grids where applicable
```

## Verification checklist

- [ ] All 10 sections render in correct DOM order
- [ ] Navbar is fixed, mobile-responsive with hamburger menu
- [ ] Hero slider has 4 slides with background images, auto-rotates, and has manual navigation
- [ ] Reservation form has 4 working tabs with correct fields per tab
- [ ] Services section shows 4 cards with icons and descriptions
- [ ] Blog section shows 3 entries with images, dates, categories, titles
- [ ] Intro banner has parallax background, sale text, and two CTAs
- [ ] Hotels section shows 4 cards with price, reviews, name, location
- [ ] Testimonials carousel shows 3 testimonials with navigation
- [ ] Newsletter section has email input and subscribe button over parallax bg
- [ ] Footer has 5 columns, contact info, and Component Dock link
- [ ] Design tokens match: #FFDD00 brand yellow, #2C2E3E footer, Quicksand font, 30px pill buttons
- [ ] All placeholder images use `picsum.photos/seed/waymark-<n>/...`
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] `apps/waymark/public/CNAME` contains `waymark.free.componentdock.com`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Typecheck passes, lint passes, tests pass at 100% coverage, build succeeds
