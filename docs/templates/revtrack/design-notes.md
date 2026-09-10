# RevTrack — Implementation Notes

## Source
- ColorLib: Carrentals (`https://colorlib.com/wp/template/carrentals/`)
- Preview: `https://preview.colorlib.com/theme/carrentals/`
- Design category: Car Rental / Automotive

## Section Order (build sequence)

1. **Navbar** (`Navbar.tsx`)
   - Brand text left, nav links right, responsive hamburger
   - Active link color: `#0779e4`
   - Mobile: collapsible menu with hamburger icon

2. **Hero** (`Hero.tsx`)
   - Full-viewport background image (picsum.photos)
   - Headline: "Rent a car is within your finger tips." with bold "Rent a car"
   - Search form: Select Type, Pick up, Drop off, Search Now button
   - 4-column form layout on desktop, stacked on mobile

3. **HowItWorks** (`HowItWorks.tsx`)
   - 3 step cards in a row (col-lg-4)
   - Each: large translucent number (100px, #0779e4), bold small number, title, description
   - White card background, box-shadow
   - "Video how it works" link with circular play icon below

4. **PromoSection** (`PromoSection.tsx`)
   - Two-column: image (right) + text (left)
   - Heading: "You can easily avail our promo for renting a car."
   - "Meet them now" CTA button

5. **CarListings** (`CarListings.tsx`)
   - bg-light background
   - 6 car cards in 3-column grid
   - Each card: image (top, negative margin, shadow), name, price/day, feature row, description, "Rent Now" button
   - Cards: border-radius 7px, shadow

6. **Features** (`Features.tsx`)
   - 6 feature items in 3-column grid
   - Each: icon + title + description

7. **Testimonials** (`Testimonials.tsx`)
   - bg-light background
   - 3 testimonial cards
   - Each: blockquote + author (avatar + name + role)

8. **CTABanner** (`CTABanner.tsx`)
   - bg-primary (#007bff) background
   - Two-column: heading + subtitle left, button right
   - "What are you waiting for?" + "Rent a car now"

9. **Footer** (`Footer.tsx`)
   - 4-column layout: About Us (description + social icons), Quick Links, Resources, Support, Company
   - Copyright at bottom
   - Links to Component Dock

## Design Token Mapping (Tailwind @theme)

```css
@theme {
  --color-brand: #0779e4;
  --color-brand-dark: #0062cc;
  --color-body: #364d59;
  --color-heading: #364d59;
  --color-card-bg: #ffffff;
  --color-section-light: #f8f9fa;
  --color-cta-bg: #007bff;
  --color-text-muted: #888888;
  --color-step-number: #0779e4;
}
```

## Fidelity Notes

- Hero background image: use a car-related picsum.photos seed
- Step numbers: absolute positioned, large translucent blue numbers
- Card shadows: `0 15px 30px 0 rgba(0,0,0,0.1)` for step and listing cards
- Listing images: negative top margin for overlapping card effect
- Price display: blue (#0779e4) bold text with slash separator
- Feature row: Luggage, Doors, Passenger with number values
- Testimonials: blockquote style with author avatar
- CTA: full-width blue bar, two-column layout
- Footer social: icon buttons for Facebook, Instagram, Twitter, LinkedIn

## Image Placeholders

| Original         | Replacement                               |
| ---------------- | ----------------------------------------- |
| hero_1_a.jpg     | `https://picsum.photos/seed/revtrack-hero/1920/1080` |
| car_2.jpg–car_6.jpg | `https://picsum.photos/seed/revtrack-car-N/600/400` |
| feature_01.png   | `https://picsum.photos/seed/revtrack-feature/800/600` |
| person_1–3.jpg   | `https://picsum.photos/seed/revtrack-person-N/100/100` |
