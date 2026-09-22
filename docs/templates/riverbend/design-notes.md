# Riverbend — Implementation Notes

ColorLib source: The River (theriver)
Preview: https://preview.colorlib.com/theme/theriver/
Spec: openspec/specs/template-riverbend/spec.md

## Section Order & Fidelity Notes

### 1. Header (Navbar.tsx)
- Fixed position, transparent background initially
- Logo on left, nav links center/right, "Book Online" CTA button (peach bg), phone icon+number
- Hamburger icon for mobile (slide-in menu from right with overlay)
- Use lucide-react for phone icon; hamburger uses Menu icon
- Nav items: Home, About Us, Rooms, Blog, Contact (anchor links)

### 2. Hero (Hero.tsx)
- Full viewport height (100vh), background image slider
- Centered content: heading "A Luxury Stay", booking form below
- Booking form: 4 inputs in a flex row (xl) / column (sm): Check In (date), Check Out (date), Children (number), Room (number)
- "SEARCH" button (peach #ffa37b, no radius, 152x54px)
- Auto-sliding carousel with dot navigation
- Dark overlay rgba(0,0,0,0.7)
- Use picsum.photos/seed/riverbend-1/1920x1080 etc. for slide backgrounds

### 3. Features (Features.tsx)
- 3-column grid (col-lg-4 each)
- Each: SVG icon (use lucide-react: Mountain, Waves, Spa or similar), title (h2), paragraph
- Centered text, generous padding
- White background

### 4. Gallery (Gallery.tsx)
- Horizontal carousel (can use CSS scroll-snap or a lightweight carousel)
- 4-5 images with hover overlay effect
- Use picsum.photos/seed/riverbend-gallery-N/800x600
- No lightbox needed (simplify from colorbox)

### 5. About (About.tsx)
- 2-column layout: left = text, right = 3 images in flex row
- Title: "Riverbend / 10 years of excellence" (h2)
- Paragraph: placeholder lorem text
- Images: picsum.photos/seed/riverbend-about-N/300x200

### 6. Testimonials (Testimonials.tsx)
- Parallax background image with dark overlay rgba(0,0,0,0.62)
- Centered slider with:
  - 5 star icons (use lucide-react Star filled, color #db5246)
  - Title link (peach color)
  - Review paragraph
  - Circular user avatar (60-80px)
  - Author name + location
- 2-3 testimonial slides, auto-rotating
- Dot navigation

### 7. Book a Room (Booking.tsx)
- Centered title "Book a room" + paragraph
- 3-column carousel of room cards
- Each card: background image, dark overlay on hover, price tag ("$120/Night"), room name link
- Cards: picsum.photos/seed/riverbend-room-N/400x300
- Price text in peach, room name in white

### 8. Blog (Blog.tsx)
- Full-width carousel of blog posts
- Each: background image with dark overlay, date badge (peach bg), title
- 3 blog slides
- Picsum for backgrounds

### 9. Footer (Footer.tsx)
- Background: #0f0e24 (dark navy)
- Top row: centered logo text + "since 1945"
- 4-column grid: Our Address | Reservations | Newsletter | Certificates
- Newsletter: email input + "Subscribe" button (peach, flat)
- Certificates: 2 placeholder badge images
- Copyright line at bottom
- "Made with ❤️ by Component Dock" link to https://www.componentdock.com/

## Design Token Summary (for index.css @theme)

```
--color-brand: #ffa37b;
--color-brand-dark: #e8956d;
--color-footer: #0f0e24;
--color-text-body: #6d6d6d;
--color-text-dark: #121212;
--color-text-light: #ffffff;
--color-star: #db5246;
--color-overlay: rgba(0,0,0,0.7);
--color-overlay-light: rgba(0,0,0,0.62);
--font-family: 'Raleway', sans-serif;
```

## Key Differences from Source

- No owl-carousel: use CSS scroll-snap or a lightweight React carousel
- No jQuery datepicker: use native HTML date inputs
- No colorbox lightbox: omit (simplify gallery)
- No parallax JS library: use CSS `background-attachment: fixed` for parallax effect
- Placeholder images via picsum.photos with deterministic seeds
- No Font Awesome: replace with lucide-react icons
- All copy is paraphrased, not copied verbatim
