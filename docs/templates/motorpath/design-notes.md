# Motorpath — Design Notes & Implementation Todo

**Source:** ColorLib "Autoroad" — https://preview.colorlib.com/theme/autoroad/
**New name:** motorpath
**Category:** Car Rental / Automotive Services

## Implementation Order (section by section)

### 1. Navbar

- Dark bg (#000), brand logo "Motor" (white) + "path" (orange #fc983c)
- Nav links: Home, About, Pricing, Our Car, Blog, Contact
- Responsive hamburger menu on mobile
- Sticky/fixed on scroll (with background transition)

### 2. Hero Section

- Full-width background image with dark overlay (rgba(0,0,0,0.5))
- Two-column layout: content left (6 cols) + booking form right (4 cols)
- Left: heading "Now It's easy for you rent a car", subtext, video play link
- Right: "Make your trip" form with location/date/time inputs, vehicle selects
- "Search Vehicle" orange CTA button (#fc983c)
- Use picsum.photos/seed/motorpath-hero for hero bg

### 3. Search Filter Bar

- Horizontal form below hero with white/light bg
- 4 select dropdowns: Model, Brand, Year, Price Limit
- "Search" orange CTA button
- Form fields wrap on mobile

### 4. Services Section

- "Our Services" heading centered
- 4-column grid (3 cols on tablet, 1 on mobile)
- Each card: icon (lucide-react), title, short text
- Services: 24/7 Car Support, Lots of location, Reservation, Rental Cars

### 5. Car Fleet Section

- "Choose Your Car" heading centered
- 4-column grid of car cards
- Each card: background image with price badge overlay, car name, brand, two black buttons
- Use picsum.photos/seed/motorpath-car-<n> for car images
- Buttons: "Book now" + "Details" (black bg, white text)

### 6. How It Works (Parallax)

- Full-width background image with dark overlay + parallax effect
- White heading text on dark overlay
- "Work flow" subheading, "How it works" heading
- 4 steps: Pick Destination, Select Term, Choose A Car, Drive Off
- Each step: centered icon, title, text — white text

### 7. Testimonials

- Carousel with auto-scroll (use a simple React carousel or CSS-only)
- Each testimonial: avatar image, name, role, quote text
- 5 testimonials total
- Light/white background section

### 8. About Us

- "About us" heading, "Choose A Perfect Car" subheading
- Two text paragraphs
- "Search Vehicle" orange CTA button
- White/light background

### 9. Blog Section

- "Recent Blog" heading centered
- 3-column blog card grid
- Each card: featured image, date badge, admin name, comment count, title, excerpt
- Use picsum.photos/seed/motorpath-blog-<n> for blog images

### 10. Footer

- Solid black bg
- 4-column layout: About, Information, Customer Support, Have a Questions?
- Social icons (Twitter, Facebook, Instagram) in About column
- Copyright bar with Component Dock link (https://www.componentdock.com/)
- NO ColorLib attribution

## Design Token Summary (for index.css @theme)

```
--color-primary: #fc983c;
--color-accent: #f7b71d;
--color-dark: #000000;
--color-dark-brown: #3c312e;
--color-body: #3c312e;
--color-bg-light: #f7f7f7;
--color-bg-offwhite: #fafafa;
--font-family: "Poppins", sans-serif;
```

## Fidelity Notes

- Match the hero two-column layout exactly: content left, form right
- The search filter bar is a separate horizontal form below the hero (not inside it)
- The parallax section uses a background image with fixed scroll — implement via `bg-fixed` / `background-attachment: fixed`
- Car cards use background images with price overlay — implement as relative-positioned divs
- Testimonials use a carousel — consider a lightweight CSS-only approach or a minimal React state carousel
- The original uses Bootstrap 4 grid — translate to Tailwind grid/flex equivalents
- Icons: original uses flaticon/ionicons — replace with lucide-react equivalents:
  - flaticon-customer-support → Headphones
  - flaticon-route → MapPin
  - flaticon-online-booking → CalendarCheck
  - flaticon-rent → Car
  - flaticon-select → MousePointerClick
  - ion-ios-play → Play
  - ion-ios-arrow-down → ChevronDown
  - icon-twitter → Twitter
  - icon-facebook → Facebook
  - icon-instagram → Instagram
  - icon-heart → Heart
  - icon-map-marker → MapPin
  - icon-phone → Phone
  - icon-envelope → Mail
