# Template: Opulux (Hotel & Resort)

## Purpose

Recreation of ColorLib's "Deluxe" hotel template as a React 19 + Vite + Tailwind 4 + TypeScript template. The Opulux template provides a luxury hotel/resort website with booking functionality, room showcases, testimonials, and Instagram feed sections.

- **Source:** [ColorLib Deluxe](https://colorlib.com/wp/template/deluxe/)
- **Preview:** https://preview.colorlib.com/theme/deluxe/
- **New name:** Opulux
- **App folder:** `apps/opulux`
- **Package:** `@free-react-templates/opulux`
- **Deploy target:** `https://opulux.free.componentdock.com`

## Design Tokens

Extracted from the ColorLib preview's `css/style.css` and live DOM:

### Colors

| Token             | Value     | Usage                                         |
| ----------------- | --------- | --------------------------------------------- |
| Brand gold        | `#c9af7e` | Primary accent, headings accent, hover states |
| Brand gold light  | `#d1ba90` | Lighter accent variant                        |
| Brand gold dark   | `#8d703b` | Darker accent for emphasis                    |
| Brand brown       | `#7b6233` | Deep accent                                   |
| Brand dark brown  | `#3c312e` | Dark accent backgrounds                       |
| Button cyan       | `#4ac7ea` | Primary CTA button background                 |
| Button cyan hover | `#56caeb` | Button hover state                            |
| Button cyan light | `#78d5ef` | Button active/focus                           |
| Dark bg           | `#1d2124` | Navbar, footer dark backgrounds               |
| Dark bg alt       | `#232323` | Alternate dark sections                       |
| Light bg          | `#f8f9fa` | Light section backgrounds (`bg-light`)        |
| Off-white         | `#f6f2ea` | Warm off-white for booking form               |
| Pure white        | `#ffffff` | Card backgrounds, text on dark                |
| Text dark         | `#000000` | Primary text                                  |
| Text muted        | `#b3b3b3` | Secondary text                                |

### Fonts

| Token    | Font Stack                         | Usage                       |
| -------- | ---------------------------------- | --------------------------- |
| Heading  | `"Playfair Display", Arial, serif` | H1-H6, section headings     |
| Body     | `"Poppins", Arial, sans-serif`     | Body text, UI elements      |
| Body alt | `"Work Sans", sans-serif`          | General sans-serif fallback |

### Buttons

- **Primary CTA:** Cyan background (`#4ac7ea`), white text, rounded corners, padding ~12px 30px, hover transitions to `#56caeb`
- **Booking "Check Availability":** Gold/brown background (`#c9af7e` to `#8d703b`), white text, square corners
- **Room "View Details":** Outline or link-style, gold accent color

### Section Backgrounds

| Section       | Background                                                      |
| ------------- | --------------------------------------------------------------- |
| Hero slider   | Full-width image with dark overlay (`rgba(0,0,0,0.1-0.2)`)      |
| Booking form  | Warm off-white (`#f6f2ea`)                                      |
| About         | White                                                           |
| Rooms         | Light gray (`#f8f9fa`)                                          |
| Counter/stats | Parallax background image (`images/bg_1.jpg`) with dark overlay |
| Testimonials  | Light gray (`#f8f9fa`)                                          |
| Blog          | White                                                           |
| Instagram     | Image grid, no padding                                          |
| Footer        | Dark (`#1d2124`)                                                |

## Section Structure (in order)

1. **Navbar** — Fixed/dark navbar, brand text "DELUXE" (→ "Opulux"), links: Home, Rooms, Restaurant, About, Blog, Contact. Hamburger menu on mobile.
2. **Hero Slider** — Full-width owl-carousel with 2+ slides. Each slide: background image, dark overlay, centered text "Welcome To Deluxe" (→ "Welcome To Opulux"), subtitle "Hotels & Resorts", tagline "Enjoy A Luxury Experience", CTA button "Join With Us".
3. **Booking Form** — Horizontal form bar with 4 fields: Check-in Date (datepicker), Check-out Date (datepicker), Room (dropdown: Suite/Family/Deluxe/Classic/Superior/Luxury), Customer (dropdown: 1 Adult, 2 Adults, etc.), "Check Availability" submit button. Floating/overlapping hero bottom edge.
4. **About Section** — Two-column layout: left = image, right = heading "Welcome To Our Hotel" + descriptive paragraphs + 4 feature cards (25/7 Front Desk, Restaurant Bar, Transfer Services, Spa Suites) each with icon + title + description.
5. **Rooms Section** — Heading "Our Rooms", 3-column grid of room cards (6 total in 2 rows). Each card: image, room name, price per night, "View Room Details" link. Rooms: Suite Room $120, Family Room $20, Deluxe Room $150, Classic Room $130, Superior Room $300, Luxury Room $500.
6. **Counter Section** — Parallax background, 4-column stats: Happy Guests (8500+), Rooms (200+), Staffs (500+), Destination (100+). Animated count-up on scroll.
7. **Testimonials Section** — Carousel of guest testimonials. Each: quote text, guest name, role. Auto-rotating with dot indicators.
8. **Blog Section** — Heading "Recent Blog", 3-column blog cards. Each card: image, date, author, title, excerpt text.
9. **Instagram Section** — Horizontal row of 6 Instagram-style images with hover overlay icon.
10. **Footer** — Dark background, 3-column layout: Brand column (logo text + description), Useful Links column (Blog, Rooms, Amenities, Gift Card, Privacy, Career), Contact column (address, phone, email). Bottom copyright bar with Colorlib attribution (→ replaced with Component Dock link).

## Requirements

### Requirement: Navigation

Users SHALL be able to navigate the site via a sticky dark navbar with brand name and navigation links.

#### Scenario: Desktop navigation

- **WHEN** the page loads
- **THEN** the navbar displays the brand "Opulux" and navigation links (Home, Rooms, Restaurant, About, Blog, Contact)

#### Scenario: Mobile navigation

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** a mobile navigation menu opens with all links

#### Scenario: Mobile menu closes on link click

- **WHEN** the user clicks a navigation link in the mobile menu
- **THEN** the mobile menu closes

### Requirement: Hero Section

The hero SHALL display a full-width background image with overlay and welcome text.

#### Scenario: Hero displays welcome text

- **WHEN** the page loads
- **THEN** the hero shows "Welcome To Opulux" heading, "Hotels & Resorts" subtitle, and "Enjoy A Luxury Experience" tagline

#### Scenario: Hero CTA button

- **WHEN** the page loads
- **THEN** a "Join With Us" CTA button is visible

### Requirement: Booking Form

The booking form SHALL allow users to select check-in/out dates, room type, and guest count.

#### Scenario: Form fields display

- **WHEN** the user scrolls to the booking section
- **THEN** check-in date, check-out date, room type, and customer count fields are visible

#### Scenario: Form submission

- **WHEN** the user clicks "Check Availability"
- **THEN** the form submission is handled without page reload

### Requirement: About Section

The about section SHALL display hotel features with icons.

#### Scenario: Feature cards display

- **WHEN** the user scrolls to the about section
- **THEN** 4 feature cards are shown: 24/7 Front Desk, Restaurant & Bar, Transfer Services, Spa & Suites

### Requirement: Rooms Section

The rooms section SHALL display 6 room cards with pricing.

#### Scenario: Room cards display

- **WHEN** the user scrolls to the rooms section
- **THEN** 6 room cards are displayed: Suite Room ($120), Family Room ($20), Deluxe Room ($150), Classic Room ($130), Superior Room ($300), Luxury Room ($500)

### Requirement: Counter Section

The counter section SHALL display hotel statistics.

#### Scenario: Stats display

- **WHEN** the user scrolls to the counter section
- **THEN** 4 statistics are shown: Happy Guests (8,500+), Rooms (200+), Staff (500+), Destinations (100+)

### Requirement: Testimonials

The testimonials section SHALL display guest quotes with navigation.

#### Scenario: Testimonial navigation

- **WHEN** the user clicks next/prev buttons or dot indicators
- **THEN** the displayed testimonial changes

#### Scenario: Wrap-around navigation

- **WHEN** the user clicks next on the last testimonial
- **THEN** the first testimonial is shown

- **WHEN** the user clicks prev on the first testimonial
- **THEN** the last testimonial is shown

### Requirement: Blog Section

The blog section SHALL display 3 recent posts.

#### Scenario: Blog cards display

- **WHEN** the user scrolls to the blog section
- **THEN** 3 blog post cards are displayed with image, date, author, title, and excerpt

### Requirement: Instagram Gallery

The instagram gallery SHALL display 6 images with hover effect.

#### Scenario: Image grid

- **WHEN** the user scrolls to the instagram section
- **THEN** 6 images are displayed in a grid

### Requirement: Footer

The footer SHALL display brand info, links, contact, and newsletter.

#### Scenario: Footer content

- **WHEN** the user scrolls to the footer
- **THEN** brand name "Opulux", Useful Links, Contact information, and Newsletter form are displayed

#### Scenario: Component Dock link

- **WHEN** the user views the footer
- **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present

### Requirement: Responsive Design

The template SHALL be fully responsive.

#### Scenario: Mobile layout

- **WHEN** the viewport is less than 768px wide
- **THEN** the navbar shows hamburger menu, booking form stacks vertically, room cards display single column, and footer columns stack vertically

## Verification Checklist

- [ ] Navbar renders with brand name and navigation links
- [ ] Hero slider displays with correct text and CTA
- [ ] Booking form has all 4 fields and submit button
- [ ] About section shows 4 feature cards with icons
- [ ] Rooms section displays 6 room cards with pricing
- [ ] Counter section animates numbers on scroll
- [ ] Testimonials carousel rotates between quotes
- [ ] Blog section shows 3 post cards
- [ ] Instagram section shows image row with hover effect
- [ ] Footer has 3 columns with correct links
- [ ] Footer links to componentdock.com
- [ ] Responsive design works at mobile breakpoints
- [ ] No ColorLib references in app code (only in spec/docs/TEMPLATES.md)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Google Fonts loaded via index.html link tags
- [ ] Icons from lucide-react
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Build passes without errors
