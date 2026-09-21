# Gateau — Implementation Notes

**Source:** ColorLib "Cakes" (https://colorlib.com/wp/template/cakes/)
**Preview:** https://preview.colorlib.com/theme/cakes/
**New name:** gateau

## Section-by-section implementation order

### 1. Navbar (sticky)
- Logo left (use placeholder text or SVG)
- Nav links: Home, Products, About, Blog (with dropdown), Contact
- Right side: phone number link + "Order Online" pill button
- Sticky on scroll with white bg + subtle shadow
- Mobile: hamburger menu

### 2. Hero
- Full-width section with background image (picsum.photos/seed/gateau-hero/1920/820)
- Decorative "Delicious" text in Lobster font, large, low opacity orange
- h1: "Delicious Cake For Everyone" in Quicksand 700
- Paragraph subtext below
- "Explore Menu" pill button (orange gradient, 30px radius)

### 3. PopularItems
- Section title: small "Most Popular" label in brand orange, h2 "Our Exclusive Cakes"
- Horizontal scrolling carousel (CSS scroll-snap or simple flex overflow)
- 4+ product cards: image top (with bottom-right 40px radius), name, description, "$XX | Order Now" button
- Card bg: #FFF5F2, card shape: 0 0 60px 0 radius

### 4. About
- Two-column layout (image left, text right)
- Image: picsum.photos/seed/gateau-about/600/500
- Small label: "Fresh & Delicious" in brand orange
- h2: "A Simple Way to Eating Delicious"
- Paragraph with lorem-style bakery copy
- "Our Story" button (outline or solid style)

### 5. Services/Features
- "Our Features" label, h2 "Quality is Our First Priority"
- 3 cards in a row, each with:
  - SVG icon (use lucide-react: Cake, Coffee, Heart or similar)
  - Title (e.g. "Custom Cakes", "Fresh Ingredients", "Fast Delivery")
  - Short description paragraph
- Light background, centered layout

### 6. VideoSection
- Dark background image (picsum.photos/seed/gateau-video/1920/600)
- Centered play button (circle with triangle icon)
- On click: could open a modal or be decorative
- Overlay with semi-transparent dark layer

### 7. Testimonials
- "Testimonial" label, h2 "What Customers Say"
- Carousel of testimonial cards
- Each card: quote text, avatar image (picsum), person name, job title
- 2-3 testimonials visible

### 8. InstagramFeed
- Full-width horizontal strip
- 6 square images in a row (picsum.photos/seed/gateau-insta-N/300/300)
- On hover: dark overlay with Instagram icon (lucide-react Instagram)
- No gaps between images

### 9. Footer
- 4-column layout on warm #FFF7F3 background
  - Col 1: Logo + description paragraph + social icons (Twitter, Facebook, LinkedIn, Pinterest)
  - Col 2: Quick Links (Home, About, Services, Blog, Contact)
  - Col 3: Product categories (list 4 cake types)
  - Col 4: Contact Us (address, phone number)
- Bottom bar: copyright + "Made with ❤ by Component Dock" link to componentdock.com

## Design tokens for Tailwind @theme

```css
@theme {
  --color-brand: #F04506;
  --color-brand-dark: #d83e06;
  --color-dark: #140C40;
  --color-card: #FFF5F2;
  --color-footer-bg: #FFF7F3;
  --color-text-body: #5E5E5E;
  --font-heading: "Quicksand", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --font-display: "Lobster", cursive;
}
```

## Fidelity notes

- Original uses Bootstrap grid — convert to Tailwind flex/grid
- Original carousel (Owl Carousel / Slick) — use CSS scroll-snap or simple state
- Original magnific-popup for video — use simple modal or skip
- Original nice-select for dropdowns — use native or custom select
- Original preloader — skip (not needed for SPA)
- All images → picsum.photos with deterministic seeds
- Icons → lucide-react (Cake, Phone, Menu, Play, Instagram, Heart, ArrowUp)
- Footer "Made with ❤ by Colorlib" → "Made with ❤ by Component Dock"
