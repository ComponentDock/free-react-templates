# Template: RoxyGlow (Hotel & Resort)

## Purpose

Recreation of ColorLib's **Roxandrea** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

- **Source slug:** `roxandrea`
- **ColorLib page:** https://colorlib.com/wp/template/roxandrea/
- **Live preview:** https://preview.colorlib.com/theme/roxandrea/
- **New name:** `roxyglow` (package `@free-react-templates/roxyglow`)
- **Surge target:** `roxyglow.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#b69100` | Gold — nav active links, primary buttons, star ratings, price text, accents |
| `--brand-primary-hover` | `transparent` with `#b69100` border | Button hover states (outline style) |
| `--brand-dark` | `#000000` | Black — booking form button, overlay backgrounds, dark footer |
| `--bg-white` | `#ffffff` | White sections, booking form cards, testimony background |
| `--bg-light` | `#f8f9fa` (Bootstrap bg-light) | Light gray — rooms section, testimony section backgrounds |
| `--text-dark` | `#000000` | Headings, nav links, room names |
| `--text-body` | `#777777` (implied) | Body text, descriptions |
| `--text-muted` | `#cccccc` | Testimony position labels, dividers |
| `--font-heading` | `"Playfair Display", serif` | Large headings (h1, h2, section titles) |
| `--font-body` | `"Poppins", sans-serif` | Body text, nav, forms, buttons, UI elements |
| `--btn-radius` | `0px` | Sharp rectangular buttons (no border-radius) |
| `--btn-bg` | `#000000` | Booking form "Check Availability" button |
| `--btn-text` | `#ffffff` | Button text |
| `--star-color` | `#b69100` | Gold star ratings (ion-ios-star) |
| `--section-counter-bg` | `#312b30` | Dark purple-brown — counter section background |

## Section Structure (from preview DOM)

### 1. Navbar
- Dark background (`navbar-dark bg-dark`)
- Brand text "Roxandrea" (left side)
- Nav links (right side, ml-auto): Home, Rooms, Restaurant, About, Blog, Contact
- Responsive hamburger toggle on mobile
- Sticky on scroll with background transition (`ftco-navbar-light`)

### 2. Hero Slider
- Full-width owl-carousel slider (2 slides)
- Each slide: parallax background image with dark overlay (`.overlay`)
- Slide 1: "Roxandrea" (h1) + "More than a hotel... an experience" (h2)
- Slide 2: "Experience Epic Beauty" (h1) + "Roxandrea Hotel & Resort" (h2)
- Video play button (top-right, circular, links to YouTube)

### 3. Booking Form
- Overlapping white card (`.ftco-booking`)
- 5-column row: Check-in Date, Check-out Date, Room (dropdown), Guests (dropdown), Check Availability button
- White background cards with labels + form controls
- "Check Availability" button: black bg, full height, "Best Price Guaranteed!" subtext
- Room options: Suite, Family Room, Deluxe Room, Classic Room, Superior Room, Luxury Room
- Guest options: 1–6 Adult

### 4. Services Grid
- 4-column image grid (`.services-wrap`)
- Each card: background image with hover overlay + centered text label
- Cards: Special Rooms, Swimming Pool, Restaurant, Suites & Rooms (with arrow icon)
- Last card has dark overlay with icon + arrow CTA

### 5. Welcome / Services Section
- Section heading: "Welcome to Roxandrea Hotel" (subtitle) + "A New Vision of Luxury Hotel" (h2)
- 5-column icon service cards: Friendly Service, Get Breakfast, Transfer Services, Suits & SPA, Cozy Rooms
- Each card: icon (flaticon/ionicons) + heading, centered
- Middle card has "active" state (highlighted)

### 6. Rooms Section
- Light background (`.bg-light`)
- Section heading: "Roxandrea Rooms" (subtitle) + "Hotel Master's Rooms" (h2)
- First row: large welcome image (full width) with overlay text
- Room grid (2-col alternating layout):
  - Each room: image + half-width text panel (alternating left/right with arrows)
  - Text panel: 5 gold stars, price ($120.00 per night), room name, "View Room Details" link
  - Rooms: Suite Room, Family Room, Deluxe Room, Luxury Room, Superior Room

### 7. Testimonials
- Light background (`.bg-light`)
- Section heading: "Testimony" (subtitle) + "Our Happy Guest Says" (h2)
- Owl-carousel testimonial cards:
  - Circular avatar image (100px, border-radius: 50%)
  - Quote icon overlay (bottom-right, white circle, gold icon)
  - 5 gold stars
  - Testimonial text paragraph
  - Author name + "Guests" position
- 5 testimonial cards in carousel

### 8. Video Hero
- Full-width parallax background image with dark overlay
- Height: 800px
- Large heading: "We're Most Recommended Hotel"
- YouTube video background integration (muted, autoplay, loop)

### 9. Restaurant / Menu
- Background: restaurant pattern image (`.ftco-menu`)
- Section heading: "Restaurant" (subtitle + h2)
- 2-column grid of pricing entries
- Each entry: food image + dish name + price + description
- Dishes: Grilled Crab with Onion ($20), Grilled Beef with Potatoes ($29), etc.

### 10. Footer
- Dark background (`.ftco-bg-dark`)
- 4-column layout:
  - Column 1: Brand name "Roxandrea" + description + social icons (Twitter, Facebook, Instagram)
  - Column 2: "Useful Links" — Blog, Rooms, Amenities, Gift Card
  - Column 3: "Privacy" — Career, About Us, Contact Us, Services
  - Column 4: "Have a Questions?" — address, phone, email (icon + text)
- Bottom bar: copyright text

## Verification Checklist

- [ ] Section order matches original: Navbar → Hero Slider → Booking → Services Grid → Welcome/Services → Rooms → Testimonials → Video Hero → Restaurant → Footer
- [ ] Playfair Display + Poppins font pairing loaded via Google Fonts
- [ ] Sharp-cornered buttons (border-radius: 0px) matching Roxandrea style
- [ ] Gold primary color (#b69100) used consistently for CTAs, stars, prices, accents
- [ ] Black (#000000) used for booking button and dark overlays
- [ ] Hero has 2-slide carousel with parallax background + dark overlay
- [ ] Booking form has 5-field grid with dropdowns + "Check Availability" black button
- [ ] Services section uses 4-column image grid with hover overlays
- [ ] Rooms section uses alternating 2-col layout (image + text panel with arrows)
- [ ] Testimonials on light bg with circular avatars + gold quote icons + star ratings
- [ ] Video hero section with large heading (800px height)
- [ ] Restaurant section with 2-col menu grid + pattern background
- [ ] Footer has 4-column layout + social icons
- [ ] No ColorLib references in app code; footer links to Component Dock
- [ ] `public/CNAME` contains `roxyglow.free.componentdock.com`
- [ ] `package.json` homepage set to `https://roxyglow.free.componentdock.com`
