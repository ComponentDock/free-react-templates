# OpenRoad — Implementation Tasks & Design Notes

## Source
- ColorLib: Autoroad — https://colorlib.com/wp/template/autoroad/
- Preview: https://preview.colorlib.com/theme/autoroad/
- New name: openroad

## Section Order (top to bottom)

1. **Navbar** — dark bg, brand "OpenRoad" with accent span, 5 nav links, sticky
2. **Hero** — bg image + overlay, headline left, booking form card right
3. **Search Filter** — 4-column dropdown bar (Model, Brand, Year, Min Year)
4. **Services** — dark overlay bg, 4 icon cards in a row
5. **Car Listings** — grid of car cards with pricing overlay
6. **How It Works** — 4-step horizontal flow with icons
7. **Testimonials** — carousel with client photos and quotes
8. **About** — heading + description + CTA button
9. **Blog** — 3 cards with image, date, author, title, excerpt
10. **Footer** — dark, 4 columns, social icons, Component Dock attribution

## Fidelity Notes

### Navbar
- Dark background (#000 or very dark)
- Brand: "OpenRoad" with "Road" in a colored span (primary blue #007bff)
- Links: Home, About, Pricing, Our Car, Blog, Contact
- Becomes sticky on scroll

### Hero
- Full-width background image with rgba(0,0,0,0.7) overlay
- Left side: large white headline, paragraph, video play button link
- Right side: white card (border-radius 5px, shadow) with booking form
- Form fields: pick-up location, drop-off location, pick-up date, drop-off date, pick-up time
- Blue "Search Vehicle" submit button

### Search Filter
- White background bar below hero
- 4 equal columns with select dropdowns
- Each select has a down-arrow icon
- "Search Vehicle" button on the right

### Services
- Dark overlay background (same as hero style)
- Centered heading "Our Services"
- 4 cards in a row: icon (flaticon) + title + description
- Cards: 24/7 Car Support, Lots of location, Reservation, Rental Cars
- Replace flaticon with lucide-react equivalents

### Car Listings
- "Choose Your Car" heading
- Grid of car cards (3-4 per row on desktop)
- Each card: car image, price overlay (orange #fc983c rate), car name, brand badge
- "Book now" and "Details" buttons at bottom
- Subtle shadow on cards

### How It Works
- "How it works" heading
- 4 horizontal steps with icons
- Steps: Pick Destination, Select Term, Choose A Car, Enjoy The Ride
- Each with icon + title + short description

### Testimonials
- "Happy Clients" heading
- Owl carousel style → use a React carousel (e.g. embla or custom)
- Each slide: client photo, quote text, name, role
- 5 testimonials in original

### About
- "Choose A Perfect Car" heading
- 2-column layout: text left, could be image or empty right
- "Search Vehicle" CTA button

### Blog
- "Recent Blog" heading
- 3 blog cards in a row
- Each: thumbnail image, date, author, title, excerpt
- Cards have border and shadow

### Footer
- Black (#000) background
- 4 columns: About Autoroad (text + social icons), Information (links), Customer Support (links), Contact Us (address, phone, email)
- Social: Facebook, Twitter, Instagram icons
- Bottom: copyright + "Component Dock" attribution
- Footer newsletter input with white button

## Implementation Order

1. Create app scaffold: copy simplest existing app, rename package
2. Navbar component
3. Hero component (with booking form)
4. SearchFilter component
5. Services component
6. CarListings component
7. HowItWorks component
8. Testimonials component
9. About component
10. Blog component
11. Footer component
12. Compose in App.tsx
13. Tests (TDD: write tests for each component)
14. Design token refinement in index.css @theme

## Key Tailwind Decisions

- Primary blue: use Tailwind's `blue-500` or custom `--color-primary: #007bff`
- Accent orange: custom `--color-accent: #fc983c`
- Dark bg: `bg-black` or custom `--color-dark: #000`
- Hero overlay: `bg-black/70` (Tailwind opacity)
- Form card: `bg-white rounded-lg shadow-lg` (5px radius ≈ rounded-lg)
- Car card shadow: custom shadow or Tailwind `shadow-md`
- Poppins font: load via Google Fonts link in index.html
