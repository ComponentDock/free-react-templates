# Template: LuxStay (Hotel / Luxury Hospitality)

## Purpose

LuxStay is a single-page luxury hotel landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Luxehotel" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Luxehotel" — luxury hotel landing template
  (source: https://colorlib.com/wp/template/luxehotel/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/luxehotel/
  (HTTP 200, title "Luxehotel Template"). Stylesheets: `css/style.css`
  (SCSS-compiled) + plugin libs (animate.css, icomoon, bootstrap,
  magnific-popup, flexslider, owl.carousel, bootstrap-datepicker,
  flaticon). Bootstrap 4 grid + utility classes.
- **Screenshot:** `luxehotel-free-template.jpg` (TEMPLATES.md line 1916) —
  luxury hotel site with fullscreen hero slider, dark reservation bar,
  services grid, room cards carousel, dining menu, blog section,
  testimonials, newsletter overlay, and multi-column footer.
- **Visual design (from DOM + CSS tokens):** Elegant luxury hotel landing
  page — fullscreen image slider hero with dark overlay, serif headings
  (Playfair Display), body font Poppins. **Brand/primary blue `#4586FF`**
  used on links, social icons, form focus, carousel nav buttons, service
  icons, contact info icons, and room price numbers. **Accent orange
  `#F96D00`** used on the hero "Know More" button, dining section
  background, menu item price tags, amenities "free" label. **Gold star
  `#F7AF1D`** for star ratings (3-star and 5-star variants). White `#fff`
  body background, light grey `#fafafa` for alternating sections
  (rooms, testimonials). Dark purple `#302939` reservation search bar.
  Text grey `#595959`, headings black `#000`. Circular profile images
  (120px) and blog thumbnails (90px) with `border-radius: 50%`. Booking
  buttons with `border-radius: 30px` (pill shape). Dining section:
  orange `#F96D00` full-width background with tabbed menu (Mains /
  Desserts / Drinks) on left half, cover image on right half. Service
  icons in circular grey containers (120px, `border-radius: 50%`, bg
  `#f7f7f7`). Footer: 4-column layout with brand description, quick
  links, recent blog posts, and contact information. The demo brands
  itself "Luxehotel"; recreation uses the NEW name **LuxStay**.

- **Fonts (Google Fonts via Cloudflare CDN):**
  - `Poppins` (weights 300, 400, 500, 700) — body text, nav, buttons
  - `Playfair Display` (weights 400, 700) — headings (h1-h6),
    restaurant/price typography

- **Design tokens extracted from style.css:**
  - `--brand-blue: #4586FF` — links, social icons, form focus, carousel
    nav, service icons, contact icons, room price (Playfair Display 40px)
  - `--accent-orange: #F96D00` — hero "Know More" btn, dining section
    background, menu prices, video play icon, amenities "free" label
  - `--gold-star: #F7AF1D` — filled star ratings
  - `--star-empty: #fce3b1` — empty star rating color
  - `--dark-purple: #302939` — reservation bar background
  - `--heading-color: #000` — all headings (Playfair Display)
  - `--text-color: #595959` — body text (Poppins 14px, weight 400)
  - `--bg-white: #fff` — page background
  - `--bg-light-grey: #fafafa` — alternating section bg
  - `--bg-icon-circle: #f7f7f7` — service icon background
  - `--nav-dropdown-bg: #000` — dropdown menu background
  - `--nav-text: rgba(0,0,0,0.7)` — nav link color
  - `--section-padding: 6em 0` — top/bottom padding per section
  - `--radius-pill: 30px` — booking buttons
  - `--radius-circle: 50%` — profile images, service icons, blog
    thumbnails, menu item images
  - `--radius-dropdown: 4px` — nav dropdown
  - `--overlay-dark: rgba(0,0,0,0.5)` — hero slider overlay
  - `--hero-min-height: 650px` — hero slider minimum height

- **Section structure (1:1 order from the DOM):**
  1. **Top Bar** (`div.top` — `background: whitesmoke`) — left: site URL
     text; right: phone number + social icons (Twitter, Facebook, LinkedIn,
     Dribbble in brand blue)
  2. **Main Nav** (`div.top-menu`) — left: "LuxStay" logo text
     (uppercase, 24px, weight 600, black); right: menu links (Home
     active, Rooms with dropdown, Dining & Bar, Amenities, Blog, About,
     Contact) — 15px, `rgba(0,0,0,0.7)`, padding 30px 12px
  3. **Hero Slider** (`aside#colorlib-hero` — full width, min-height
     650px, FlexSlider carousel, 4 slides) — fullscreen background images
     with dark overlay (`rgba(0,0,0,0.5)`), centered white text: h2
     (18px) + h1 (40px, Playfair Display, weight 300) + two buttons
     ("View Detail" in brand blue bg, "Know More" in accent orange bg).
     Each slide: different hotel image + different headline copy.
  4. **Reservation Form Bar** (`div#colorlib-reservation` — dark purple
     `#302939` bg, overlapping hero with negative margin `-6.66em`) —
     row of form fields: Check-in date, Check-out date, Adults (select),
     Children (select), Search button (brand blue, block width). White
     labels, transparent-bg inputs with white borders.
  5. **Services** (`div#colorlib-services` — white bg) — centered heading
     with 5 gold stars, h2 "Services", subtext. 4-column grid of service
     cards: circular icon container (120px, `#f7f7f7` bg, brand blue
     icon) + h3 title + description paragraph. Items: 24/7 Front Desk,
     Spa Suites, Transfer Services, Restaurant & Bar. Flaticon icons.
  6. **Rooms & Suites** (`div#colorlib-rooms` — light grey `#fafafa` bg) —
     centered heading with 5 gold stars, h2 "Rooms & Suites", subtext.
     OwlCarousel of room cards: background image (300px height) +
     white description card (shadow) with star rating, room type h3,
     price (Playfair Display, brand blue currency + price number),
     feature checklist (icon-check items), "Book now!" pill button
     (brand blue, radius 30px). 6 room types: Suite ($99), Double Room
     ($199), Family Room ($249), Classic Double Room ($150), Superior
     Double Room ($200), Superior Family Room ($299). "View all rooms"
     link at bottom.
  7. **Dining & Bar** (`div#colorlib-dining-bar` — white bg with orange
     `#F96D00` inner container) — centered heading with 5 gold stars, h2
     "Dining & Bar", subtext. Split layout (50/50): left half = tabbed
     menu (nav tabs: Mains / Desserts / Drinks, tab content with menu
     items = circular thumbnail + dish name + category + price in
     Playfair Display on right). Right half = full-height cover image.
     Menu items have hover bg `rgba(255,255,255,0.1)`. Tabs: active =
     white text with red border; inactive = `#ffa660` orange text.
  8. **Blog** (`div#colorlib-blog` — white bg) — centered heading with 5
     gold stars, h2 "Recent Blog", subtext. Flex layout: left half =
     video thumbnail with overlay + circular play button (white bg,
     shadow, orange icon); right half = 3 blog post entries (circular
     thumbnail 90px + date + title + category tag). "View all blog post"
     link.
  9. **Testimonials** (`div#colorlib-testimony` — light grey `#fafafa` bg)
     — centered heading with 3 gold stars, h2 "Our Satisfied Guests
     says", subtext. 3-column cards: circular user photo (120px), user
     name (20px), "Satisfied Customer" label (grey 14px), blockquote
     text. White card with box-shadow. 3 testimonials: Brian Doe,
     Nathalie Miller, Shara Jones.
  10. **Newsletter / Subscribe** (`div#colorlib-subscribe` — background
      image with dark overlay) — centered heading with 5 gold stars, h2
      "Sign Up for a Newsletter", subtext. Email input + "Subscribe"
      button (brand blue).
  11. **Footer** (`footer#colorlib-footer` — white bg, `6em` padding) —
      4-column row: (1) Brand name + description + social icons; (2)
      Quick Links (Accommodation, Dining & Bar, Restaurants, Beach &
      Resorts); (3) Recent Blog Post titles; (4) Contact Information
      (address, phone, email, website). Bottom: copyright line with
      "Component Dock" link (replaces Colorlib attribution).
  12. **Back-to-top button** (`.gototop` — fixed position, appears on
      scroll, dark bg, white up-arrow icon)

## Gherkin requirements

### Top Bar
```gherkin
Feature: Top Bar
  Scenario: Top bar displays site info and social links
    Given the page loads
    Then a top bar is visible at the very top
    And the top bar has a light grey background
    And a site URL or placeholder text is shown on the left
    And a phone number is shown on the right
    And social icons for Twitter, Facebook, LinkedIn, and Dribbble are displayed

  Scenario: Top bar is responsive
    Given the viewport is 768px or narrower
    Then the phone number is hidden
    And the site URL remains visible
```

### Main Navigation
```gherkin
Feature: Main Navigation
  Scenario: Navigation displays logo and menu
    Given the page loads
    Then the logo "LuxStay" is displayed on the left
    And menu items Home, Rooms, Dining & Bar, Amenities, Blog, About, Contact are shown

  Scenario: Rooms menu item has dropdown
    Given the user hovers over or taps "Rooms"
    Then a dropdown appears with submenu items
    And the dropdown has a dark background with light grey text

  Scenario: Navigation is responsive
    Given the viewport is 768px or narrower
    Then the menu items are hidden
    And a hamburger toggle is available
```

### Hero Slider
```gherkin
Feature: Hero Slider
  Scenario: Hero displays fullscreen slider
    Given the page loads
    Then a fullscreen hero slider is visible
    And it contains at least 4 slides
    And each slide has a background image with a dark overlay
    And each slide displays a headline (h1) and subheadline (h2)
    And each slide has two CTA buttons

  Scenario: Hero CTA buttons styled correctly
    Given the hero slider is displayed
    Then one button has a blue background ("View Detail")
    And the other button has an orange background ("Know More")
    And both buttons have uppercase text with letter-spacing

  Scenario: Hero slider is responsive
    Given the viewport is 480px or narrower
    Then the CTA buttons stack vertically at full width
    And the headline text scales down to 28px
```

### Reservation Form Bar
```gherkin
Feature: Reservation Form Bar
  Scenario: Reservation form displays over hero
    Given the hero slider is visible
    Then a dark reservation bar overlaps the bottom of the hero
    And it contains Check-in date, Check-out date, Adults, Children fields
    And a Search button is displayed

  Scenario: Reservation form fields are interactive
    Given the reservation form is displayed
    When the user clicks on a date input
    Then a date picker or input focus is shown
    And when the user selects adults or children
    Then a dropdown of options (1-5+) is shown
```

### Services Section
```gherkin
Feature: Services Section
  Scenario: Services section displays 4 service cards
    Given the page loads
    Then a Services section is visible with a white background
    And it has a centered heading "Services" with 5 gold stars above
    And 4 service cards are displayed in a row: 24/7 Front Desk, Spa Suites, Transfer Services, Restaurant & Bar
    And each card has a circular icon, a title, and a description

  Scenario: Service icons are circular
    Given the services section is visible
    Then each service icon is inside a circular container with grey background
    And the icon color is brand blue
```

### Rooms & Suites
```gherkin
Feature: Rooms and Suites
  Scenario: Rooms carousel displays room cards
    Given the page loads
    Then a Rooms & Suites section is visible with light grey background
    And it has a centered heading with 5 gold stars
    And a carousel of room cards is displayed
    And each room card has a background image, star rating, room type, price, features list, and Book Now button

  Scenario: Room card pricing is styled
    Given a room card is displayed
    Then the price is shown in Playfair Display font
    And the currency symbol and price number are in brand blue
    And the "per night" label is smaller grey text

  Scenario: Book Now button is pill-shaped
    Given a room card is displayed
    Then the "Book now!" button has rounded pill shape
    And the button background is brand blue
    And a "View all rooms" link is shown below the carousel
```

### Dining & Bar
```gherkin
Feature: Dining and Bar
  Scenario: Dining section has tabbed menu
    Given the page loads
    Then a Dining & Bar section is visible
    And it has a centered heading with 5 gold stars
    And three tabs are shown: Mains, Desserts, Drinks
    And the Mains tab is active by default
    And each menu item shows a circular thumbnail, dish name, category, and price

  Scenario: Dining section has orange background
    Given the Dining & Bar section is visible
    Then the left half (tabbed menu area) has an orange background
    And the right half displays a full-height cover image

  Scenario: Tab switching works
    Given the Dining section is visible
    When the user clicks the "Desserts" tab
    Then the dessert menu items are displayed
    And when the user clicks the "Drinks" tab
    Then the drinks menu items are displayed
```

### Blog Section
```gherkin
Feature: Blog Section
  Scenario: Blog section displays video and posts
    Given the page loads
    Then a Blog section is visible with a white background
    And it has a centered heading "Recent Blog" with 5 gold stars
    And a video thumbnail with play button is shown on the left
    And 3 blog posts are listed on the right
    And each post has a circular thumbnail, date, title, and category

  Scenario: Video play button is circular
    Given the blog section is visible
    Then the video play button is a white circle with shadow
    And the play icon is orange
```

### Testimonials
```gherkin
Feature: Testimonials
  Scenario: Testimonials display customer reviews
    Given the page loads
    Then a Testimonials section is visible with light grey background
    And it has a centered heading "Our Satisfied Guests says" with 3 gold stars
    And 3 testimonial cards are displayed in a row
    And each card has a circular user photo, name, "Satisfied Customer" label, and a quote

  Scenario: Testimonial cards have shadow
    Given the testimonials section is visible
    Then each testimonial card has a subtle box-shadow
    And the card background is white
```

### Newsletter / Subscribe
```gherkin
Feature: Newsletter Subscribe
  Scenario: Newsletter section collects emails
    Given the page loads
    Then a newsletter section is visible with a background image and dark overlay
    And a centered heading "Sign Up for a Newsletter" with 5 gold stars is shown
    And an email input field is displayed
    And a "Subscribe" button is next to the input
    And the subscribe button is brand blue
```

### Footer
```gherkin
Feature: Footer
  Scenario: Footer has 4 columns
    Given the page loads
    Then a footer is visible at the bottom
    And it has 4 columns: Brand, Quick Links, Recent Blog Posts, Contact Information
    And the brand column shows the site name and social icons
    And the contact column shows address, phone, email, and website

  Scenario: Footer links Component Dock
    Given the footer is visible
    Then a copyright line is present
    And it contains a link to https://www.componentdock.com/ labeled "Component Dock"
    And there are no references to ColorLib
```

### Back-to-Top Button
```gherkin
Feature: Back to Top
  Scenario: Back to top button appears on scroll
    Given the user scrolls down past the hero
    Then a back-to-top button appears in the bottom-right corner
    And clicking it scrolls smoothly to the top
```

## Verification checklist

- [ ] Top bar: grey bg, site URL left, phone + social icons right, responsive
- [ ] Nav: "LuxStay" logo, menu items, Rooms dropdown, hamburger on mobile
- [ ] Hero: fullscreen slider, 4+ slides, bg images, overlay, h1+h2, two CTA buttons (blue + orange)
- [ ] Reservation bar: dark purple bg, overlapping hero, date pickers, adults/children selects, search button
- [ ] Services: white bg, 5-star heading, 4 circular-icon service cards
- [ ] Rooms: light grey bg, 5-star heading, carousel with 6 room cards (image + price + features + book button)
- [ ] Dining: orange bg container, 3 tabs (Mains/Desserts/Drinks), menu items with thumbnails, right-side cover image
- [ ] Blog: white bg, 5-star heading, video thumbnail with play button + 3 blog post entries
- [ ] Testimonials: light grey bg, 3-star heading, 3 cards with circular user photos
- [ ] Newsletter: background image with overlay, email input + subscribe button
- [ ] Footer: 4 columns, brand + links + blog posts + contact, Component Dock link, no ColorLib references
- [ ] Back-to-top button functional
- [ ] All images use placeholder URLs (picsum.photos/seed/luxstay-N/W/H)
- [ ] Fonts loaded: Poppins + Playfair Display via Google Fonts
- [ ] Brand blue #4586FF used consistently for interactive elements
- [ ] Accent orange #F96D00 used for dining section and secondary CTAs
- [ ] No ColorLib references in app code (only in spec and TEMPLATES.md)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tailwind theme tokens defined in index.css for brand colors
