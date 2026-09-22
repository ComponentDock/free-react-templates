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

| Token | Value | Usage |
|-------|-------|-------|
| Brand gold | `#c9af7e` | Primary accent, headings accent, hover states |
| Brand gold light | `#d1ba90` | Lighter accent variant |
| Brand gold dark | `#8d703b` | Darker accent for emphasis |
| Brand brown | `#7b6233` | Deep accent |
| Brand dark brown | `#3c312e` | Dark accent backgrounds |
| Button cyan | `#4ac7ea` | Primary CTA button background |
| Button cyan hover | `#56caeb` | Button hover state |
| Button cyan light | `#78d5ef` | Button active/focus |
| Dark bg | `#1d2124` | Navbar, footer dark backgrounds |
| Dark bg alt | `#232323` | Alternate dark sections |
| Light bg | `#f8f9fa` | Light section backgrounds (`bg-light`) |
| Off-white | `#f6f2ea` | Warm off-white for booking form |
| Pure white | `#ffffff` | Card backgrounds, text on dark |
| Text dark | `#000000` | Primary text |
| Text muted | `#b3b3b3` | Secondary text |

### Fonts

| Token | Font Stack | Usage |
|-------|-----------|-------|
| Heading | `"Playfair Display", Arial, serif` | H1-H6, section headings |
| Body | `"Poppins", Arial, sans-serif` | Body text, UI elements |
| Body alt | `"Work Sans", sans-serif` | General sans-serif fallback |

### Buttons

- **Primary CTA:** Cyan background (`#4ac7ea`), white text, rounded corners, padding ~12px 30px, hover transitions to `#56caeb`
- **Booking "Check Availability":** Gold/brown background (`#c9af7e` to `#8d703b`), white text, square corners
- **Room "View Details":** Outline or link-style, gold accent color

### Section Backgrounds

| Section | Background |
|---------|-----------|
| Hero slider | Full-width image with dark overlay (`rgba(0,0,0,0.1-0.2)`) |
| Booking form | Warm off-white (`#f6f2ea`) |
| About | White |
| Rooms | Light gray (`#f8f9fa`) |
| Counter/stats | Parallax background image (`images/bg_1.jpg`) with dark overlay |
| Testimonials | Light gray (`#f8f9fa`) |
| Blog | White |
| Instagram | Image grid, no padding |
| Footer | Dark (`#1d2124`) |

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

## Gherkin Requirements

### Scenario: Navbar renders correctly
```gherkin
Given the user visits the Opulux homepage
Then the navbar displays the brand name "Opulux"
And the navbar contains links: Home, Rooms, Restaurant, About, Blog, Contact
And the navbar has a dark background
And the navbar is responsive with a hamburger menu on mobile
```

### Scenario: Hero slider displays
```gherkin
Given the user visits the Opulux homepage
Then a full-width hero slider is visible
And the slider shows "Welcome To Opulux" heading
And the slider shows "Hotels & Resorts" subtitle
And the slider shows "Enjoy A Luxury Experience" tagline
And the slider has a "Join With Us" CTA button
And the slider has a dark overlay on the background image
```

### Scenario: Booking form is interactive
```gherkin
Given the user visits the Opulux homepage
Then the booking form is visible below the hero
And the form has a check-in date picker
And the form has a check-out date picker
And the form has a room type dropdown (Suite, Family, Deluxe, Classic, Superior, Luxury)
And the form has a customer count dropdown
And the form has a "Check Availability" button
```

### Scenario: About section shows hotel features
```gherkin
Given the user scrolls to the About section
Then a heading "Welcome To Our Hotel" is visible
And descriptive text about the hotel is displayed
And 4 feature cards are shown: 25/7 Front Desk, Restaurant Bar, Transfer Services, Spa Suites
And each feature card has an icon, title, and description
```

### Scenario: Rooms section displays room cards
```gherkin
Given the user scrolls to the Rooms section
Then a heading "Our Rooms" is visible
And 6 room cards are displayed in a 3-column grid
And each room card shows: image, room name, price per night, "View Room Details" link
And the rooms are: Suite Room ($120), Family Room ($20), Deluxe Room ($150), Classic Room ($130), Superior Room ($300), Luxury Room ($500)
```

### Scenario: Counter section shows statistics
```gherkin
Given the user scrolls to the Counter section
Then 4 statistics are displayed: Happy Guests, Rooms, Staffs, Destination
And the numbers animate (count up) when scrolled into view
And the section has a parallax background image
```

### Scenario: Testimonials carousel works
```gherkin
Given the user scrolls to the Testimonials section
Then a carousel of guest testimonials is displayed
And each testimonial shows: quote text, guest name, role
And the carousel auto-rotates between testimonials
```

### Scenario: Blog section shows recent posts
```gherkin
Given the user scrolls to the Blog section
Then a heading "Recent Blog" is visible
And 3 blog post cards are displayed
And each card shows: image, date, author, title, excerpt
```

### Scenario: Instagram section shows image grid
```gherkin
Given the user scrolls to the Instagram section
Then a row of 6 Instagram-style images is displayed
And hovering over an image shows an Instagram icon overlay
```

### Scenario: Footer renders correctly
```gherkin
Given the user scrolls to the footer
Then the footer has a dark background
And the footer shows the brand name "Opulux Hotel"
And the footer has a Useful Links column
And the footer has a Contact column with address, phone, and email
And the footer links to https://www.componentdock.com/
```

### Scenario: Responsive design works
```gherkin
Given the user views the Opulux page on a mobile device (< 768px)
Then the navbar collapses to a hamburger menu
And the booking form fields stack vertically
And room cards display in a single column
And the about section stacks vertically
And the footer columns stack vertically
```

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
