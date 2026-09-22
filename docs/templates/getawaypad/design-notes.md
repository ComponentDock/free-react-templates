# GetawayPad — Implementation Notes

ColorLib source: Vacation Rental (vacationrental)
Preview: https://preview.colorlib.com/theme/vacationrental/
Spec: openspec/specs/template-getawaypad/spec.md

## Section Order & Fidelity Notes

### 1. TopBar.tsx
- Thin bar above navbar
- Left: phone number + email (use Mail and Phone icons from lucide-react)
- Right: social media icons (Facebook, Twitter, Instagram — use lucide-react)
- Background: dark (#000 or very dark)
- Text: small, white

### 2. Navbar.tsx
- Sticky/fixed dark background navbar
- Logo: "Getaway" in white + "Pad" in brand color (#fd7792)
- Nav links: Home, About, Services, Apartment Room, Blog, Contact
- Hamburger icon for mobile (Menu icon from lucide-react)
- Mobile: slide-in menu from right with overlay

### 3. Hero.tsx
- Full viewport height (100vh), parallax background image
- Dark overlay (rgba(0,0,0,0.5))
- Left-aligned text (not centered): subheading + heading + two buttons
- "Learn more" button: primary pink (#fd7792), uppercase, 4px radius
- "Contact us" button: white outline, uppercase, 4px radius
- Use picsum.photos/seed/getawaypad-hero/1920x1080

### 4. BookingForm.tsx
- Section below hero, slightly overlapping (negative margin)
- "Book your apartment" heading (h3)
- Form fields in 2-column grid:
  - Full Name (text input)
  - Check-In (date input)
  - Check-Out (date input)
  - Room Type (select: Suite, Standard, Family, Deluxe)
  - Guests (select: 1-6)
  - Phone number (text input)
  - Time (time input)
- "Book Apartment Now" submit button (primary pink, full width on mobile)
- Card with white background, subtle shadow

### 5. Services.tsx
- 3-column grid of service cards
- Each card: image header (200px height, background-image), title, paragraph, "Read more" button
- Cards: white bg, border-radius 5px, shadow
- Service icon circles: green (#a3cb4c), 70px, centered
- Services: "Map Direction", "Accommodation Services", "Great Experience"
- Use picsum.photos/seed/getawaypad-service-N/400x200

### 6. Rooms.tsx
- "Apartment Room" heading centered
- 2×2 grid (col-lg-6 each)
- Each room card: flex layout with image (50%) + text (50%)
- Text: 5-star rating (Star icon, color #fd7792), room name (h3), amenity list, "View Room Details" link
- Alternating layout: odd = image left, even = image right
- Rooms: Suite Room, Standard Room, Family Room, Deluxe Room
- Amenities: Max: 3 Persons, Size: 45 m², View: Sea View, Bed: 1
- Use picsum.photos/seed/getawaypad-room-N/600x400

### 7. Testimonials.tsx
- "Happy Clients & Feedbacks" heading centered
- Background: #f3f4f7 (bg-light)
- Carousel of testimonial items
- Each: circular avatar image (60px), quote icon (Quote from lucide-react), paragraph, author name (bold), position
- Auto-rotating carousel with dot navigation
- Use picsum.photos/seed/getawaypad-person-N/100x100 for avatars

### 8. CtaBanner.tsx
- Full-width parallax background with dark overlay
- Can be a simple CTA text or empty parallax section
- Use picsum.photos/seed/getawaypad-cta/1920x400

### 9. Blog.tsx
- 3-column grid of blog entries
- Each: background image (rounded, block-20), title (h3), meta (date + author + comment count), paragraph
- Use picsum.photos/seed/getawaypad-blog-N/400x300

### 10. Footer.tsx
- Dark background
- 4-column grid:
  - Col 1: Logo + short description + "Read more" link
  - Col 2: "Services" heading + list (Map Direction, Accommodation Services, Great Experience, Perfect Central Location)
  - Col 3: "Tag cloud" heading + tag links (apartment, home, vacation, rental, rent, house, place)
  - Col 4: "Subscribe" heading + email form (input + paper-plane button) + "Follow us" social links
- Bottom: copyright line + Terms/Privacy links
- "Made with ❤️ by Component Dock" link to https://www.componentdock.com/

## Design Token Summary (for index.css @theme)

```
--color-brand: #fd7792;
--color-brand-dark: #e5667e;
--color-bg-light: #f3f4f7;
--color-service-icon: #a3cb4c;
--color-text-dark: #000000;
--color-text-body: #666666;
--color-text-light: #ffffff;
--color-overlay: rgba(0,0,0,0.5);
--font-family: 'Poppins', Arial, sans-serif;
--btn-radius: 4px;
--card-radius: 5px;
```

## Key Differences from Source

- No owl-carousel: use CSS scroll-snap or a lightweight React carousel
- No jQuery datepicker: use native HTML date inputs
- No Font Awesome: replace with lucide-react icons
- No stellar.js parallax: use CSS `background-attachment: fixed`
- No Bootstrap: fully Tailwind CSS 4
- Placeholder images via picsum.photos with deterministic seeds
- All copy is paraphrased, not copied verbatim
- Footer links to Component Dock instead of ColorLib
