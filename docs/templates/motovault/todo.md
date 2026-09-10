# Motovault — Todo & Design Notes

## Source
- ColorLib template: Carrentals
- Source URL: https://colorlib.com/wp/template/carrentals/
- Preview URL: https://preview.colorlib.com/theme/carrentals/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carrentals-free-template.jpg

## New name
- App name: `motovault`
- Package: `@free-react-templates/motovault`
- Deploy: `motovault.free.componentdock.com`

## Section Build Order

### 1. Navbar
- Fixed/sticky top navbar
- Logo text "Motovault" (left)
- Nav links: Home, Listing, Testimonials, Blog, About, Contact (right-aligned)
- Mobile: hamburger menu toggle
- Component: `src/components/Navbar.tsx`

### 2. Hero
- Full viewport height (100vh) with background image
- Heading: "Rent a car is within your finger tips"
- Trip booking form overlay (white card, 7px radius, shadow):
  - Car type select dropdown
  - Pick-up date input
  - Drop-off date input
  - "Search Now" primary button (#0779e4)
- Component: `src/components/Hero.tsx`

### 3. How It Works
- Section heading: "How it works?"
- Subtitle: "Easy steps to get you started"
- 3-column row, each step:
  - Large faded step number (100px, #0779e4, weight 900)
  - Step number label (01., 02., 03.) in #0779e4
  - Title + description
- "Video how it works" play link below
- Component: `src/components/HowItWorks.tsx`

### 4. Promo Feature
- Split layout: text left (col-lg-4), image right (col-lg-7, order-lg-2)
- Heading: "You can easily avail our promo for renting a car"
- Body paragraph
- "Meet them now" primary button
- Feature illustration (placeholder image)
- Component: `src/components/PromoFeature.tsx`

### 5. Car Listings
- Light background section (#f8f9fa)
- Section heading: "Car Listings"
- Subtitle text
- 3-column grid, 6 cards:
  - Each card: white bg, 7px radius, 20px padding, shadow
  - Car image (negative top margin -40px, rounded)
  - Car name (h3, 18px, weight 900)
  - Price: "$389.00/day" (price in #0779e4)
  - Specs row: Luggage, Doors, Passengers
  - Description paragraph
  - "Rent Now" primary button (small)
- Component: `src/components/CarListings.tsx`
- Sub-component: `src/components/CarCard.tsx`

### 6. Features
- Section heading: "Features"
- 3-column grid, 6 cards:
  - Dark card style, white text
  - Icon in 90x90px white bordered square (border: 1px solid #e9ecef)
  - Title + description
  - "Learn more" link
- Component: `src/components/Features.tsx`
- Sub-component: `src/components/FeatureCard.tsx`

### 7. Testimonials
- Light background section (#f8f9fa)
- Section heading: "Testimonials"
- 3-column grid, 3 cards:
  - White bg, 7px radius, 30px padding, shadow
  - Blue bottom border (4px solid #0779e4)
  - Blockquote text (18px)
  - Author: 50px circle avatar, name, role
- Component: `src/components/Testimonials.tsx`
- Sub-component: `src/components/TestimonialCard.tsx`

### 8. CTA Banner
- Full-width #0779e4 blue background
- Heading: "What are you waiting for?"
- Description (opacity 0.7 white)
- "Rent a car now" white button (#0779e4 text)
- Component: `src/components/CtaBanner.tsx`

### 9. Footer
- White background, dark text
- Left: "About Us" + description + social icons (Facebook, Instagram, Twitter, LinkedIn)
- Right: 4 link columns (Quick Links, Resources, Support, Company)
- Bottom: copyright + heart icon
- Link to Component Dock (mandatory)
- Component: `src/components/Footer.tsx`

## Fidelity Notes

- **Font**: Use Roboto via Google Fonts `<link>` in index.html
- **Primary color**: #0779e4 — set in Tailwind @theme as `--color-primary`
- **Card radius**: 7px throughout (listings, form, testimonials)
- **Card shadow**: `0 15px 30px 0 rgba(0,0,0,0.1)` for elevated cards
- **Step numbers**: 100px font-size, weight 900, #0779e4, positioned absolutely behind content
- **Testimonial accent**: 4px solid #0779e4 bottom border
- **Service icons**: 90x90px white squares with 1px #e9ecef border
- **Hero**: Full viewport (100vh), background image cover, trip form overlay with z-index
- **Trip form**: White card, 7px radius, 40px padding, shadow, positioned over hero
- **CTA section**: bg-primary (#0779e4) with white text and white button
- **Placeholder images**: `https://picsum.photos/seed/motovault-hero/1920/1080`, `https://picsum.photos/seed/motovault-car-<n>/400/300`, etc.
- **Icons**: Use lucide-react for service icons (home, settings/cog, clock, shield-check, video, key)
- **No ColorLib references** in any app code — provenance only in spec + TEMPLATES.md
- **Footer**: Must link https://www.componentdock.com/ (branded "Component Dock")
