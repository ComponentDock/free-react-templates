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

## Requirements

### Requirement: Top bar displays site info and social links

The system SHALL render a top bar at the very top of the page with a light grey background, site URL on the left, phone number on the right, and social icons.

#### Scenario: Top bar displays site info and social links

- **GIVEN** the page loads
- **THEN** a top bar is visible at the very top
- **AND** the top bar has a light grey background
- **AND** a site URL or placeholder text is shown on the left
- **AND** a phone number is shown on the right
- **AND** social icons for Twitter, Facebook, LinkedIn, and Dribbble are displayed

#### Scenario: Top bar is responsive

- **GIVEN** the viewport is 768px or narrower
- **THEN** the phone number is hidden
- **AND** the site URL remains visible

### Requirement: Navigation displays logo and menu with dropdown

The system SHALL render a sticky navigation bar with the LuxStay logo and menu items, including a Rooms dropdown with dark background.

#### Scenario: Navigation displays logo and menu

- **GIVEN** the page loads
- **THEN** the logo "LuxStay" is displayed on the left
- **AND** menu items Home, Rooms, Dining & Bar, Amenities, Blog, About, Contact are shown

#### Scenario: Rooms menu item has dropdown

- **GIVEN** the user hovers over or taps "Rooms"
- **THEN** a dropdown appears with submenu items
- **AND** the dropdown has a dark background with light grey text

#### Scenario: Navigation is responsive

- **GIVEN** the viewport is 768px or narrower
- **THEN** the menu items are hidden
- **AND** a hamburger toggle is available

### Requirement: Hero slider with fullscreen slides and CTA buttons

The system SHALL render a fullscreen hero slider with at least 4 slides, each having a background image, dark overlay, headline, and two CTA buttons.

#### Scenario: Hero displays fullscreen slider

- **GIVEN** the page loads
- **THEN** a fullscreen hero slider is visible
- **AND** it contains at least 4 slides
- **AND** each slide has a background image with a dark overlay
- **AND** each slide displays a headline (h1) and subheadline (h2)
- **AND** each slide has two CTA buttons

#### Scenario: Hero CTA buttons styled correctly

- **GIVEN** the hero slider is displayed
- **THEN** one button has a blue background ("View Detail")
- **AND** the other button has an orange background ("Know More")
- **AND** both buttons have uppercase text with letter-spacing

#### Scenario: Hero slider is responsive

- **GIVEN** the viewport is 480px or narrower
- **THEN** the CTA buttons stack vertically at full width
- **AND** the headline text scales down to 28px

### Requirement: Reservation form bar overlapping hero

The system SHALL render a dark purple reservation bar that overlaps the hero with date pickers, guest selects, and a search button.

#### Scenario: Reservation form displays over hero

- **GIVEN** the hero slider is visible
- **THEN** a dark reservation bar overlaps the bottom of the hero
- **AND** it contains Check-in date, Check-out date, Adults, Children fields
- **AND** a Search button is displayed

#### Scenario: Reservation form fields are interactive

- **GIVEN** the reservation form is displayed
- **WHEN** the user clicks on a date input
- **THEN** a date picker or input focus is shown
- **AND** when the user selects adults or children
- **THEN** a dropdown of options (1-5+) is shown

### Requirement: Services section with 4 service cards

The system SHALL render a Services section with a white background, centered heading with 5 gold stars, and 4 service cards with circular icons.

#### Scenario: Services section displays 4 service cards

- **GIVEN** the page loads
- **THEN** a Services section is visible with a white background
- **AND** it has a centered heading "Services" with 5 gold stars above
- **AND** 4 service cards are displayed: 24/7 Front Desk, Spa Suites, Transfer Services, Restaurant & Bar
- **AND** each card has a circular icon, a title, and a description

#### Scenario: Service icons are circular

- **GIVEN** the services section is visible
- **THEN** each service icon is inside a circular container with grey background
- **AND** the icon color is brand blue

### Requirement: Rooms and Suites carousel

The system SHALL render a Rooms & Suites section with light grey background, centered heading with 5 gold stars, and a carousel of room cards with images, prices, and Book Now buttons.

#### Scenario: Rooms carousel displays room cards

- **GIVEN** the page loads
- **THEN** a Rooms & Suites section is visible with light grey background
- **AND** it has a centered heading with 5 gold stars
- **AND** a carousel of room cards is displayed
- **AND** each room card has a background image, star rating, room type, price, features list, and Book Now button

#### Scenario: Room card pricing is styled

- **GIVEN** a room card is displayed
- **THEN** the price is shown in Playfair Display font
- **AND** the currency symbol and price number are in brand blue
- **AND** the "per night" label is smaller grey text

#### Scenario: Book Now button is pill-shaped

- **GIVEN** a room card is displayed
- **THEN** the "Book now!" button has rounded pill shape
- **AND** the button background is brand blue
- **AND** a "View all rooms" link is shown below the carousel

### Requirement: Dining and Bar section with tabbed menu

The system SHALL render a Dining & Bar section with orange background, tabbed menu (Mains/Desserts/Drinks), and a cover image on the right.

#### Scenario: Dining section has tabbed menu

- **GIVEN** the page loads
- **THEN** a Dining & Bar section is visible
- **AND** it has a centered heading with 5 gold stars
- **AND** three tabs are shown: Mains, Desserts, Drinks
- **AND** the Mains tab is active by default
- **AND** each menu item shows a circular thumbnail, dish name, category, and price

#### Scenario: Dining section has orange background

- **GIVEN** the Dining & Bar section is visible
- **THEN** the left half (tabbed menu area) has an orange background
- **AND** the right half displays a full-height cover image

#### Scenario: Tab switching works

- **GIVEN** the Dining section is visible
- **WHEN** the user clicks the "Desserts" tab
- **THEN** the dessert menu items are displayed
- **AND** when the user clicks the "Drinks" tab
- **THEN** the drinks menu items are displayed

### Requirement: Blog section with video and posts

The system SHALL render a Blog section with a white background, video thumbnail with play button, and 3 blog post entries.

#### Scenario: Blog section displays video and posts

- **GIVEN** the page loads
- **THEN** a Blog section is visible with a white background
- **AND** it has a centered heading "Recent Blog" with 5 gold stars
- **AND** a video thumbnail with play button is shown on the left
- **AND** 3 blog posts are listed on the right
- **AND** each post has a circular thumbnail, date, title, and category

#### Scenario: Video play button is circular

- **GIVEN** the blog section is visible
- **THEN** the video play button is a white circle with shadow
- **AND** the play icon is orange

### Requirement: Testimonials with customer reviews

The system SHALL render a Testimonials section with light grey background, centered heading with 3 gold stars, and 3 testimonial cards.

#### Scenario: Testimonials display customer reviews

- **GIVEN** the page loads
- **THEN** a Testimonials section is visible with light grey background
- **AND** it has a centered heading "Our Satisfied Guests Say" with 3 gold stars
- **AND** 3 testimonial cards are displayed in a row
- **AND** each card has a circular user photo, name, "Satisfied Customer" label, and a quote

#### Scenario: Testimonial cards have shadow

- **GIVEN** the testimonials section is visible
- **THEN** each testimonial card has a subtle box-shadow
- **AND** the card background is white

### Requirement: Newsletter section collects emails

The system SHALL render a Newsletter section with a background image and dark overlay, email input, and Subscribe button.

#### Scenario: Newsletter section collects emails

- **GIVEN** the page loads
- **THEN** a newsletter section is visible with a background image and dark overlay
- **AND** a centered heading "Sign Up for a Newsletter" with 5 gold stars is shown
- **AND** an email input field is displayed
- **AND** a "Subscribe" button is next to the input
- **AND** the subscribe button is brand blue

### Requirement: Footer with 4 columns and Component Dock link

The system SHALL render a footer with 4 columns (Brand, Quick Links, Recent Blog Posts, Contact Information) and a copyright line linking to Component Dock.

#### Scenario: Footer has 4 columns

- **GIVEN** the page loads
- **THEN** a footer is visible at the bottom
- **AND** it has 4 columns: Brand, Quick Links, Recent Blog Posts, Contact Information
- **AND** the brand column shows the site name and social icons
- **AND** the contact column shows address, phone, email, and website

#### Scenario: Footer links Component Dock

- **GIVEN** the footer is visible
- **THEN** a copyright line is present
- **AND** it contains a link to https://www.componentdock.com/ labeled "Component Dock"
- **AND** there are no references to ColorLib

### Requirement: Back to top button appears on scroll

The system SHALL render a fixed back-to-top button in the bottom-right corner that appears when the user scrolls past 200px.

#### Scenario: Back to top button appears on scroll

- **GIVEN** the user scrolls down past the hero
- **THEN** a back-to-top button appears in the bottom-right corner
- **AND** clicking it scrolls smoothly to the top

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
