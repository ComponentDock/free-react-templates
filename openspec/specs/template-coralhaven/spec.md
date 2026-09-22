# Template: CoralHaven (Hotel / Resort)

## Purpose

Recreation of ColorLib "IslaGrande" hotel template.

- Source slug: `islagrande`
- Source URL: https://colorlib.com/wp/template/islagrande/
- Preview URL: https://preview.colorlib.com/theme/islagrande/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Category: Hotel / Resort / Reservation

## Design tokens (extracted from preview)

### Colors

- Brand accent (salmon/coral pink): `#fb929e` — used on nav pill active states, buttons, highlights, footer bg
- Footer bg: `#fa6b7b` (slightly deeper salmon)
- Primary link: `#78d5ef` (cyan — Bootstrap primary color override)
- Primary hover: `#34c0e7` (darker cyan)
- Dark: `#343a40` (near-black — footer text, dark sections)
- Body text: `#212529` (black)
- Muted text: `#6c757d` (gray)
- White: `#ffffff` (hero text, button text)
- Light section bg: `#f8f9fa` (rooms section, blog section)
- Booking form bg: `#fb929e` (salmon/coral pink full-width strip)
- Overlay on slider images: dark semi-transparent

### Typography

- Heading font (hero h1/h2): `"Poppins", Arial, sans-serif` (weight 400-700)
- Serif accent (subheadings): `"Playfair Display", Georgia, serif` (weight 400, 700)
- Body font: `"Work Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` (weight 400)
- Section subheadings (`.subheading`): Poppins, uppercase, small, letter-spaced
- h1 hero: large (~48-56px), white, Playfair Display
- h2 section headings: ~30px, dark, Poppins
- h3 service/room headings: ~18px, Poppins

### Buttons

- Hero CTA (`.btn-custom`): white text, transparent bg with bottom border animation (underline slides in on hover), Playfair Display font, padding ~12px 24px
- Service/room CTA (`.btn-customize`): coral pink `#fb929e` text, bottom border animation, padding ~8px 16px
- Booking form submit (`.btn-primary`): white bg, coral pink text, square corners (border-radius: 0), padding 12px 16px
- Footer CTA: white bg, coral text, square corners

### Section backgrounds

- Hero: split-screen — left solid coral pink `#fb929e`, right image slider (owl-carousel, 4 slides)
- Booking form: coral pink `#fb929e` full-width strip
- Services: white (default)
- Rooms: light gray `#f8f9fa`
- Restaurant menu: white (default)
- Video/About: light gray `#f8f9fa`
- Testimonials: white (default)
- Blog: light gray `#f8f9fa`
- Counter/Stats: parallax background image (bg_3.jpg) with dark overlay
- Footer: coral pink `#fa6b7b`

### Other tokens

- Border radius: 0 (buttons), 50% (testimony user images), 4px (blog meta chips)
- Parallax: `data-stellar-background-ratio="0.5"` on counter section
- Star ratings: icon-star (flaticon font) — replace with lucide Star
- Icons: flaticon font (flaticon-reception-bell, flaticon-serving-dish, flaticon-car, flaticon-spa) — replace with lucide

## Requirements

### Requirement: Navbar displays brand and navigation links

The navbar SHALL display the brand name and navigation links on a dark transparent background.

#### Scenario: Navbar renders on desktop

- **WHEN** the page loads
- **THEN** the navbar shows the brand name "CoralHaven"
- **AND** navigation links are visible: Home, About, Amenities, Blog, Rooms, Restaurant, Contact
- **AND** the navbar has a dark/transparent background

#### Scenario: Navbar toggles mobile menu

- **WHEN** the user clicks the hamburger menu icon
- **THEN** the navigation menu expands/collapses
- **AND** all navigation links are accessible

### Requirement: Hero section displays split-screen with image slider

The hero SHALL display a split-screen layout: left side with solid coral pink background and welcome text, right side with an image carousel.

#### Scenario: Hero renders text on left

- **WHEN** the page loads
- **THEN** the subheading "Welcome to CoralHaven Hotel" is visible (white text on coral pink bg)
- **AND** the heading "A Perfect Place To Stay" is visible (large, white, Playfair Display)
- **AND** a "Make A Booking" CTA button with underline animation is visible

#### Scenario: Hero renders image slider on right

- **WHEN** the page loads
- **THEN** an image carousel is visible on the right half of the hero
- **AND** the carousel shows 4 slides with hotel/resort images
- **AND** the carousel auto-advances between slides

### Requirement: Booking form displays reservation fields

The booking form SHALL display a horizontal reservation form on a coral pink background strip.

#### Scenario: Booking form renders all fields

- **WHEN** the page loads
- **THEN** the heading "Reserve A Perfect Room" is visible
- **AND** check-in date input is present
- **AND** check-out date input is present
- **AND** room type select dropdown is present with options: Suite, Family Room, Deluxe Room, Classic Room, Superior Room, Luxury Room
- **AND** adults select dropdown is present (1-5)
- **AND** children select dropdown is present (1-5)
- **AND** a "Reserve" submit button is visible

### Requirement: Services section shows hotel amenities

The services section SHALL display 4 service cards in a row with icons and descriptions.

#### Scenario: Services renders all cards

- **WHEN** the page loads
- **THEN** 4 service items are visible: 24/7 Front Desk, Restaurant Bar, Transfer Services, Spa Suites
- **AND** each service card shows an icon, heading, description, and "Read More" link

#### Scenario: Service cards have hover effect

- **WHEN** the user hovers over a service card
- **THEN** the icon background changes to coral pink `#fb929e`
- **AND** the icon color changes to white

### Requirement: Rooms section shows room carousel

The rooms section SHALL display a carousel of 6 room cards on a light gray background.

#### Scenario: Rooms renders all cards

- **WHEN** the page loads
- **THEN** the section heading "Book A Room" is visible with subheading "Rooms"
- **AND** 6 room cards are present: Suite Room ($100/night), Family Room ($140/night), Deluxe Room ($130/night), Classic Room ($200/night), Superior Room ($120/night), Luxe Room ($500/night)
- **AND** each card shows a background image, room name, star rating (4.5 stars), price, and "Reserve A Room" link

#### Scenario: Rooms carousel navigation

- **WHEN** the user interacts with the carousel
- **THEN** prev/next navigation arrows are available
- **AND** dots indicator shows current position

### Requirement: Restaurant menu section with tabbed dishes

The restaurant section SHALL display a tabbed menu with 3 categories: Main Dish, Drinks, Desserts, each showing 3 items.

#### Scenario: Restaurant menu renders tabs

- **WHEN** the page loads
- **THEN** the section heading "Our Restaurants" is visible with subheading "Discover"
- **AND** 3 tabs are visible: Main Dish, Drinks, Desserts
- **AND** the Main Dish tab is active by default

#### Scenario: Restaurant menu shows dish items

- **WHEN** a tab is selected
- **THEN** 3 menu items are visible in a 3-column grid
- **AND** each item shows a food image, name, star rating, description, price, and "Add to cart" link

#### Scenario: Restaurant menu tab switching

- **WHEN** the user clicks a different tab
- **THEN** the content switches to show items for that category
- **AND** the clicked tab becomes active (coral pink underline)

### Requirement: Video/About section with social links

The about section SHALL display a video thumbnail with play button on the left and descriptive text with social links on the right.

#### Scenario: About section renders content

- **WHEN** the page loads
- **THEN** a video thumbnail image is visible on the left with a play button overlay
- **AND** the subheading "Welcome to CoralHaven Hotel" is visible
- **AND** the heading "Watch Our Video" is visible
- **AND** descriptive text paragraphs are present
- **AND** social media icon links (Twitter, Facebook, Google+, Instagram) are visible

### Requirement: Testimonials section shows guest reviews

The testimonials section SHALL display a carousel of guest review cards.

#### Scenario: Testimonials renders reviews

- **WHEN** the page loads
- **THEN** the section heading "Our satisfied customer says" is visible with subheading "Testimony"
- **AND** a testimonial carousel is visible
- **AND** each testimonial shows a circular profile photo, star rating, quote text, guest name, and location

### Requirement: Blog section shows latest posts

The blog section SHALL display 3 blog post cards on a light gray background.

#### Scenario: Blog renders posts

- **WHEN** the page loads
- **THEN** the section heading "Our Latest Blog" is visible with subheading "Blog"
- **AND** 3 blog post cards are visible
- **AND** each card shows a post image, date, author, comment count, and heading

### Requirement: Counter/Stats section with parallax background

The counter section SHALL display 4 statistics on a parallax background image.

#### Scenario: Counter renders stats

- **WHEN** the page loads
- **THEN** a parallax background image is visible
- **AND** 4 statistics are displayed: 50 Hotel Branches, 20000 Happy Guests, 100 Rooms, 100 Destinations
- **AND** the numbers animate/count up on scroll

### Requirement: Footer displays links and contact info

The footer SHALL display a 4-column layout with about text, company links, services links, and contact info on a coral pink background.

#### Scenario: Footer renders content

- **WHEN** the page loads
- **THEN** the footer has a coral pink `#fa6b7b` background
- **AND** column 1 shows "About CoralHaven" with description and social media icons
- **AND** column 2 shows Company links: Home, About Us, Rooms, Amenities, Blog, Contact
- **AND** column 3 shows Services links: Spa, Rooms, Restaurants, Gym, Promotion
- **AND** column 4 shows contact info: address, phone, email
- **AND** copyright text with "Component Dock" link is present

## Verification checklist

- [ ] All sections from the original template are present in order: Navbar → Hero (split-screen) → Booking Form → Services → Rooms → Restaurant Menu → Video/About → Testimonials → Blog → Counter/Stats → Footer
- [ ] Design tokens match: coral pink `#fb929e`, cyan `#78d5ef`, footer `#fa6b7b`, fonts Poppins + Playfair Display + Work Sans
- [ ] Section backgrounds: hero (split coral pink + image), booking (coral pink), services (white), rooms (light gray), restaurant (white), video (light gray), testimonials (white), blog (light gray), counter (parallax), footer (coral pink)
- [ ] Hero split-screen layout: left text on coral pink, right image carousel
- [ ] All 4 service cards render with correct names and hover effects
- [ ] All 6 room cards render with prices and star ratings
- [ ] Restaurant menu tabs switch correctly (Main Dish, Drinks, Desserts)
- [ ] Testimonial carousel slides
- [ ] Blog post cards render with metadata
- [ ] Counter numbers display correctly
- [ ] Footer links and contact info present
- [ ] Mobile responsive: stacked layouts, hamburger menu
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to Component Dock (`https://www.componentdock.com/`)
- [ ] `public/CNAME` contains `coralhaven.free.componentdock.com`
- [ ] `homepage` in `package.json` set to `https://coralhaven.free.componentdock.com`
