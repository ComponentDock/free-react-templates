# BlueCoast — Implementation Notes

Source: ColorLib Bluesky (https://colorlib.com/wp/template/bluesky/)
Preview: https://preview.colorlib.com/theme/bluesky/

## Section Order (top to bottom)

1. Header (logo, nav, phone)
2. Hero Slider (3 slides, background images, property details overlay)
3. Search Bar (5 dropdowns + gradient button, floating over hero)
4. Recent Properties (3 cards)
5. Cities Grid (8 city cards with overlay)
6. Testimonials (3 cards)
7. Newsletter (parallax + email form)
8. Footer (logo, about, 3 listings, nav, phone, Component Dock link)

## Fidelity Notes

### Header
- White background, flex row: logo left, nav center, phone right
- Nav items: Home, About us, Properties, News, Contact
- Phone number with phone icon, right-aligned
- Hamburger icon for mobile (hidden on desktop)
- Active nav item has distinct styling (underline or color)

### Hero Slider
- Full-width carousel (use embla or similar, NOT owl-carousel)
- Each slide: background image (cover, centered), dark overlay
- Content positioned bottom-left within slide
- Subtitle in small uppercase text (green accent color #2cd983)
- Title in large white bold text
- Feature list: icon + text in horizontal row (sqft, bedrooms, bathrooms)
- Price in large white text
- Navigation dots/arrows at bottom
- Gradient overlay from transparent to blue-green at bottom edge

### Search Bar
- Positioned to overlap hero bottom edge (negative margin or absolute)
- White background container with shadow
- 5 select dropdowns in a flex row, pill-shaped (border-radius: 35px)
- Each select: rounded border, gray text, custom dropdown arrow
- "search" button: blue-to-green gradient, pill shape (45px radius), white text
- Responsive: wraps on mobile

### Recent Properties
- Section title: "Recent Properties" centered
- 3 property cards in a row (grid or flex)
- Each card: image with price badge overlay (top-right), location text, feature icons row
- Cards have rounded corners (22px)
- Hover state on cards

### Cities Grid
- Title "Find properties in these cities" + subtitle "Search your dream home"
- 8 city cards in flex-wrap row (4 per row on desktop, 2 on tablet, 1 on mobile)
- Each card: square image with dark overlay on hover
- Overlay: city name (large, centered) + "Rentals from $X/month" text
- Cards have slight gap between them

### Testimonials
- Title "What our clients say" + subtitle
- 3 testimonial cards in a row
- Each card: title (bold), paragraph text, circular author image, author name (linked), role span, 5-star rating icons
- Cards have white background, subtle shadow

### Newsletter
- Parallax background image (use CSS background-attachment: fixed or intersection observer)
- Blue-to-green gradient overlay (rgba)
- Two-column layout: left has title + subtitle, right has email form
- Email input: transparent/white background, pill shape
- "subscribe now" button: white background, pill shape, dark text
- Responsive: stacks vertically on mobile

### Footer
- Dark background (#282828 or similar)
- Top section: logo (large) + "Latest Properties" title
- Middle section: 4-column layout (about text + 3 latest property listings)
- Each listing: thumbnail image, location, property name (link), price
- Bottom bar: copyright text + nav links + phone number
- MUST include link to https://www.componentdock.com/

## Component Map

```
App.tsx
├── Header.tsx (logo, nav, phone, hamburger)
├── HeroSlider.tsx (carousel + slides)
├── SearchBar.tsx (5 selects + button)
├── RecentProperties.tsx (3 property cards)
├── CitiesGrid.tsx (8 city cards)
├── Testimonials.tsx (3 testimonial cards)
├── Newsletter.tsx (parallax + form)
└── Footer.tsx (logo, about, listings, nav, phone)
```

## Key Dependencies (no new ones expected)

- lucide-react for icons (phone, bed, bath, maximize, star, etc.)
- packages/ui for shared components (Button, ButtonLink, cn)
