# Template: Roamcraft (Travel Agency)

## Purpose

Recreation of ColorLib **Pacific** — a travel agency website template with a dark hero banner, tour search/booking form, destination carousels, tour cards, testimonials, and blog section.

- **Source:** https://colorlib.com/wp/template/pacific/
- **Preview:** https://preview.colorlib.com/theme/pacific/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pacific-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `roamcraft` (apps/roamcraft, @free-react-templates/roamcraft)

## Design Tokens

| Token | Value | Notes |
|---|---|---|
| Font family (body) | `"Poppins", sans-serif` | Google Fonts, weights 300–800 |
| Font family (accent) | `"Arizonia", cursive` | Google Fonts, subheadings only |
| Primary brand | `#f15d30` | Orange — buttons, badges, accents, nav active, subheading color |
| Brand dark | `#c7390d` | Darker orange — badge pseudo-element borders, hover states |
| Body text | `#212529` | Headings, paragraphs |
| Muted text | `rgba(0,0,0,0.4)` | Form placeholder text |
| Label text | `rgba(0,0,0,0.8)` | Form labels (override: `#f15d30` uppercase) |
| White | `#fff` | Search tabs active, video play button bg |
| Dark overlay | `rgba(0,0,0,0.3)` | Hero, video banner, testimonial section overlays |
| Dark bg | `#000000` | Hero overlay base |
| Button primary | bg `#f15d30`, text `#fff`, border-radius `4px` | Hover: transparent bg, orange text, orange border |
| Button outline | bg transparent, text `#f15d30` | Secondary CTA variant |
| Search tabs | bg `#f15d30`, text `#fff`, border-radius `5px` | Active: bg `#fff`, text `gray` |
| Tab content | bg `#fff`, border-radius `7px` | Box shadow: `0px 10px 33px -27px rgba(0,0,0,0.4)` |
| Search form | border-radius `0` (inputs) | Labels uppercase, brand color |
| Card (destination) | border-radius `5px` | Height `320px`, bg image cover |
| Card (tour) | bg `#fff`, box-shadow `0px 10px 23px -8px rgba(0,0,0,0.11)` | Price badge: bg `#f15d30`, border-radius `0` |
| Video play button | bg `#fff`, border-radius `50%`, `80px × 80px` | Icon color `#f15d30` |
| Testimonial star | `#f15d30` | Star icon color |
| Footer heading | `#000000` | Widget title color |
| Footer link hover | `#f15d30` | Orange |
| Footer social icon | `#f15d30` | Hover: white |
| Navbar | bg `dark` (dark bg), text white | Brand: "Pacific" bold + "Travel Agency" subtitle |

## Section Structure (order from preview)

1. **Navbar** — Dark bg, brand text "Pacific" (bold, white) + "Travel Agency" (small, orange), nav links: Home, About, Destination, Hotel, Blog, Contact. Hamburger on mobile.
2. **Hero** — Full-height bg image, dark overlay (0.3 opacity), "Welcome to Pacific" subheading (Arizonia font, orange), "Discover Your Favorite Place with Us" h1 (white, 55px), tagline paragraph (white/0.9), circular video play button (white circle, orange icon).
3. **Search/Booking Form** — Floating over hero bottom (margin-top: -100px), tab pills ("Search Tour" active, "Hotel"), form fields in row: Destination (text input), Check-in date, Check-out date, Price Limit (select dropdown), Search button (orange). White bg, box shadow.
4. **Services** — 2-col layout: left = heading "It's time to start your adventure" + paragraph + "Search Destination" CTA; right = 2×2 grid of service cards with bg images + icon overlay: Activities, Travel Arrangements, Private Guide, Location Manager.
5. **Select Destination** — Parallax bg image, heading "Select Your Destination", owl carousel of destination cards (Philippines 8 Tours, Canada 2 Tours, Thailand 5 Tours, Australia 5 Tours, Greece 7 Tours). Cards have bg image, orange label badge with triangle pseudo-elements, tour count badge.
6. **Tour Destinations** — 6-card grid (3×2), each card: bg image (300px height), orange price badge ("$550/person") with triangle pseudo-elements, white content area below with "X Days Tour" label, location, amenity icons (shower, bed, mountain/beach).
7. **Video/Parallax Banner** — Full-width bg image, dark overlay (0.3), centered circular play button (white, orange icon).
8. **About Us** — 2-col: left = bg image, right = "About Us" subheading (Arizonia, orange) + heading "Make Your Tour Memorable and Safe With Us" + paragraphs + "Book Your Destination" CTA (orange).
9. **Testimonials** — Bg image + dark overlay, heading "Tourist Feedback", owl carousel of testimonial cards: 5 orange stars, quote text, user avatar, name, position.
10. **Blog** — 3-card grid, each card: bg image, date badge (day + month + year), heading "Most Popular Place In This World", "Read more" CTA (orange).
11. **CTA Banner** — Full-width bg image, dark overlay, "We Are Pacific A Travel Agency" heading + "Ask For A Quote" CTA (orange).
12. **Footer** — Bg image + dark overlay, 4-column layout: About text + social icons (Twitter, Facebook, Instagram), Information links, Experience links, Contact info (address, phone, email). Copyright line at bottom.

## Gherkin Requirements

### Feature: Navbar

```gherkin
Scenario: Navbar displays brand and navigation links
  Given the user visits the Roamcraft homepage
  Then a dark navbar with brand text "Roamcraft" is visible
  And nav links "Home", "About", "Destination", "Hotel", "Blog", "Contact" are displayed

Scenario: Navbar shows hamburger on mobile
  Given the user resizes to mobile viewport
  Then a hamburger menu icon is displayed
  And clicking it toggles the mobile navigation menu
```

### Feature: Hero Section

```gherkin
Scenario: Hero displays fullscreen with dark overlay
  Given the user visits the Roamcraft homepage
  Then a fullscreen hero section with a background image and dark overlay is visible
  And the subheading "Welcome to Roamcraft" is displayed in Arizonia font and orange color
  And the heading "Discover Your Favorite Place with Us" is displayed in large white text
  And a circular video play button is displayed to the right of the text

Scenario: Hero is responsive
  Given the user resizes the viewport to mobile width
  Then the hero content remains centered and readable
  And the heading font size reduces for mobile
```

### Feature: Search/Booking Form

```gherkin
Scenario: Search form displays with tabs
  Given the user views the search section
  Then two tab pills are visible: "Search Tour" (active) and "Hotel"
  And the active tab has an orange background
  And clicking "Hotel" switches to the hotel search form

Scenario: Search form contains all fields
  Given the user views the search form
  Then fields for Destination, Check-in date, Check-out date, Price Limit, and a Search button are visible
  And the Search button has an orange background
  And the form has a white background with rounded corners and box shadow
```

### Feature: Services Section

```gherkin
Scenario: Services section shows text and 4 service cards
  Given the user scrolls to the services section
  Then a heading "It's time to start your adventure" is displayed on the left
  And 4 service cards are displayed on the right in a 2×2 grid
  And the service cards are: Activities, Travel Arrangements, Private Guide, Location Manager
  And each card has a background image, icon, title, and description
```

### Feature: Select Destination

```gherkin
Scenario: Destination carousel displays destination cards
  Given the user scrolls to the destination section
  Then a heading "Select Your Destination" is displayed
  And a carousel of destination cards is visible
  And each card shows a destination name and tour count
  And destination cards have orange label badges

Scenario: Destination section has parallax background
  Given the user views the destination section
  Then a parallax background image is visible behind the carousel
```

### Feature: Tour Destinations

```gherkin
Scenario: Tour destination grid shows 6 cards
  Given the user scrolls to the tour destinations section
  Then 6 tour cards are displayed in a 3×2 grid
  And each card shows a price badge in orange, tour duration, location, and amenities
  And each card has a background image with a white content area below

Scenario: Tour cards are responsive
  Given the user resizes the viewport to mobile width
  Then the tour cards stack vertically
```

### Feature: Video/Parallax Banner

```gherkin
Scenario: Video banner displays with play button
  Given the user scrolls to the video banner
  Then a full-width background image with dark overlay is visible
  And a centered circular play button is displayed
```

### Feature: About Us

```gherkin
Scenario: About section shows image and text side by side
  Given the user scrolls to the about section
  Then an image is displayed on the left
  And the heading "Make Your Tour Memorable and Safe With Us" is on the right
  And a "Book Your Destination" CTA button in orange is displayed

Scenario: About section has Arizonia subheading
  Given the user views the about section
  Then the subheading "About Us" is displayed in Arizonia cursive font
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials carousel displays with star ratings
  Given the user scrolls to the testimonials section
  Then a carousel of testimonial cards is visible
  And each card shows 5 orange stars, a quote, user avatar, name, and position
  And the section has a background image with dark overlay

Scenario: Testimonials carousel cycles through items
  Given the user views the testimonial section
  Then the testimonials rotate through multiple items automatically
```

### Feature: Blog

```gherkin
Scenario: Blog section shows 3 post cards
  Given the user scrolls to the blog section
  Then 3 blog post cards are displayed in a row
  And each card has a background image, date badge, heading, and "Read more" CTA

Scenario: Blog cards are responsive
  Given the user resizes the viewport to mobile width
  Then the blog cards stack vertically
```

### Feature: CTA Banner

```gherkin
Scenario: CTA banner displays with call to action
  Given the user scrolls to the CTA banner
  Then a full-width background image with dark overlay is visible
  And the heading "We Are Roamcraft A Travel Agency" is displayed
  And an "Ask For A Quote" CTA button in orange is shown
```

### Feature: Footer

```gherkin
Scenario: Footer displays 4 columns of content
  Given the user scrolls to the footer
  Then 4 columns are displayed: About (with social icons), Information links, Experience links, Contact info
  And a copyright line is at the bottom
  And the footer has a background image with dark overlay

Scenario: Footer social icons use orange color
  Given the user hovers over a footer social icon
  Then the icon color is orange (#f15d30)

Scenario: Footer links have hover effect
  Given the user hovers over a footer link
  Then the link color changes to orange (#f15d30)
```

## Verification Checklist

- [ ] Section order matches original: Navbar → Hero → Search Form → Services → Select Destination → Tour Destinations → Video Banner → About Us → Testimonials → Blog → CTA Banner → Footer
- [ ] Font: Poppins (300–800) + Arizonia (cursive) loaded from Google Fonts
- [ ] Brand color: #f15d30 (orange) used for buttons, badges, accents, subheadings
- [ ] Hero: fullscreen, dark overlay (0.3), Arizonia subheading in orange, white h1, circular play button
- [ ] Search form: floating over hero, tab pills (orange active), 5 fields, white bg, box shadow
- [ ] Services: 2-col layout, 4 service cards with bg images in 2×2 grid
- [ ] Select Destination: parallax bg, carousel of destination cards with orange badges
- [ ] Tour Destinations: 3×2 grid, price badges, amenity icons, white content cards
- [ ] Video banner: full-width bg image, dark overlay, circular play button
- [ ] About Us: 2-col split, Arizonia subheading, CTA button
- [ ] Testimonials: bg image + overlay, star ratings, carousel, user avatars
- [ ] Blog: 3 cards, date badges, "Read more" CTA
- [ ] CTA banner: bg image, overlay, heading + CTA button
- [ ] Footer: bg image + overlay, 4 columns, social icons, copyright
- [ ] Responsive: hamburger nav on mobile, stacked columns, reduced font sizes
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Placeholder images via picsum.photos
- [ ] All text paraphrased, no copied assets
