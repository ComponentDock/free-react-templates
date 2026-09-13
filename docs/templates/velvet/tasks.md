# Velvet — Implementation Tasks & Design Notes

Source: ColorLib Karl (https://preview.colorlib.com/theme/karl/)
New name: velvet
Package: @free-react-templates/velvet

## Section-by-Section Implementation Order

### 1. Top Header Bar
- Full-width bar, bg `#ff084e`
- Left: brand logo image (use placeholder or text logo)
- Right: cart icon with quantity badge + "Your Bag $20" text + hamburger icon
- Use flexbox, justify-between, items-center

### 2. Main Navigation
- Social icons row on left (Pinterest, Facebook, Twitter, LinkedIn) — use lucide-react
- Centered nav: Home, Pages (dropdown), Dresses, Shoes (with "hot" badge), Contact
- Right: phone icon + help line number
- Nav background `#ff084e`, text white
- Mobile: hamburger toggles nav

### 3. Top Discount Bar
- 3 equal columns, flex or grid
- Each column: heading (h5) + subtext/link (h6)
- Subtle background, text centered per column

### 4. Hero Slider
- Full-width, 800px height on desktop
- Background image with dark overlay (`rgba(0,0,0,0.5)`)
- Content centered: subtitle, headline (h2), CTA button (.karl-btn style)
- Use a simple state-based slider (no owl-carousel dependency)
- 3 slides with different headlines + CTAs

### 5. Top Categories
- 2-column layout, each with bg image + overlay
- Left: "On Accessories / Sale 30% / SHOP NOW"
- Right: "Designer bags / SHOP NOW"
- 50/50 split on desktop, stacked on mobile

### 6. New Arrivals Product Grid
- Section heading "New Arrivals"
- Filter tabs: ALL, WOMAN, MAN, ACCESSORIES, SHOES, KIDS
- 3-column grid (col-4 on md+), single column on mobile
- 6 product cards with category data attributes for filtering
- Each card: image (picsum), quick-view overlay on hover, price, description, "ADD TO CART"
- Implement filter via React state (no library needed)

### 7. Offer / Featured Product
- Full-width, 700px height, bg image with overlay
- Right-aligned content block (col-6 or col-8)
- "White t-shirt" + "Hot" badge, free shipping note, price block (strikethrough + sale)
- "Shop Now" CTA button

### 8. Testimonials
- Section heading "Testimonials"
- Simple carousel (state-based, 3 testimonials)
- Each: large quote mark (text-6xl), quote text, author row (thumbnail + name + location)
- Centered layout

### 9. Footer
- 4-column grid on desktop, stacked on mobile
- Col 1: Logo + copyright text
- Col 2: Nav links (About, Blog, Faq, Returns, Contact)
- Col 3: Account links (My Account, Shipping, Our Policies, Affiliates)
- Col 4: Newsletter form (email input + Subscribe button)
- Bottom row: social icons (Pinterest, Facebook, Twitter, LinkedIn)
- Footer bg: `#ff084e`, text white
- MUST include "Component Dock" link (https://www.componentdock.com/)

## Design Fidelity Notes

- Brand color `#ff084e` is hot pink/magenta — use as primary in Tailwind @theme
- Font: Open Sans via Google Fonts link in index.html
- Buttons: 2px border-radius, white text, `#ff084e` background on hover
- Product cards: no border-radius (sharp corners), clean minimal style
- Hero slider: dark overlay on full-bleed images, white text
- Section backgrounds alternate: white → bg image → white → bg image → pink footer
- Filter tabs: pill-style buttons, active state has `#ff084e` bg + white text
- Testimonials: large decorative quote marks, centered layout

## Placeholder Image Strategy

- Hero images: `https://picsum.photos/seed/velvet-hero-1/1920/800`, `velvet-hero-2`, `velvet-hero-3`
- Category backgrounds: `https://picsum.photos/seed/velvet-cat-1/960/700`, `velvet-cat-2`
- Products: `https://picsum.photos/seed/velvet-prod-1/600/700` through `velvet-prod-6`
- Offer: `https://picsum.photos/seed/velvet-offer/1920/700`
- Testimonial avatars: `https://picsum.photos/seed/velvet-avatar-1/100/100`
