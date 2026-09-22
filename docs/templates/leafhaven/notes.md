# LeafHaven — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Ecoho" — https://colorlib.com/wp/template/ecoho/
- **Preview:** https://preview.colorlib.com/theme/ecoho/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ecoho-free-template.jpg
- **Preview fetched:** Yes (587 lines HTML, 71,647 bytes minified CSS)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Navbar** — sticky, logo left, nav right (Home, Rooms, About, Blog, Contact), phone/address info, "Book Now" CTA
2. **Hero Slider** — dark brown bg (#391F14), large serif heading, subtext, "View More" button, hero image
3. **About** — light gray bg (#f5f5f5), centered intro text, 2-column (text + overlapping images)
4. **Popular Rooms** — full-width carousel of room cards (image, title, price, description)
5. **Video** — dark bg image, play button icon, "Hotel Preview" text
6. **Booking Form** — 2-column (heading + form with date pickers, selects, submit)
7. **Blog** — 3-column card grid (image, title, description)
8. **Testimonials** — warm cream bg (#FFF7F3), slider with client quotes
9. **Footer** — warm cream bg, 3-column (logo+social, nav links, address), copyright bar

## Fidelity Notes

### Navbar
- Logo on the left, nav links on the right
- Phone and address info in a sub-header strip (desktop only)
- "Book Now" button with dark rust (#A85432) background
- Sticky header on scroll
- Mobile: hamburger → dropdown or slide-out menu

### Hero Slider
- Full-width dark chocolate brown background (#391F14)
- Left 60%: content area with serif heading, subtext, CTA button
- Right 40%: hotel room image
- Hero height ~870px min-height
- Content fades in with animation delays
- "View More" button: square, #FD8F5F coral bg, white text, padding 22px 44px

### About Section
- Light gray (#f5f5f5) background
- Centered paragraph heading (50px, weight 600)
- Two columns: left has heading + paragraph + "Learn More" button; right has two overlapping hotel images (one foreground, one offset behind)
- Use CSS overlap/positioning for the image nesting effect

### Popular Rooms Carousel
- Replace OwlCarousel with a React carousel (CSS scroll-snap or simple slider)
- Each card: large image on top, title + price on same row below, description text
- Price displayed as "$450/Night" or similar
- Horizontal scrollable with dot/arrow navigation

### Video Section
- Full-width dark background image
- Centered play button (SVG icon) with "Hotel Preview" text
- Popup video on click (YouTube embed via modal/lightbox)
- Height ~560px

### Booking Form
- Left column: heading "Ullamcorper mattis, pulvinar dapibus" + description
- Right column: form with:
  - Check-in / Check-out date inputs (use native date inputs or a date picker library)
  - Room type select dropdown
  - Guest count select dropdown
  - "Check Availability" full-width submit button (#A85432, square, 60px height)
- Form inputs: 1px solid #eaeaea border, #a3a3a3 text color, no border-radius

### Blog Section
- Light background, 3 equal-width columns
- Each card: image on top, title + description below
- ~110px top/bottom padding

### Testimonials
- Warm cream (#FFF7F3) background
- Horizontal slider of testimonial items
- Each item: client name, star rating, quote text
- Dot indicators for slide navigation

### Footer
- Warm cream (#FFF7F3) background
- 3-column layout:
  - Left: Logo + paragraph + 4 social icon links (Twitter, Facebook, LinkedIn, Pinterest)
  - Center: Navigation links list (About, Our Rooms, Book A Room, Blog, Privacy & Policy, Contact)
  - Right: Address heading + address text + phone number + email
- Bottom bar: copyright text (must link to Component Dock, NOT Colorlib)
- Footer padding: ~120px top

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `Navbar.tsx` | Header | Sticky, logo + nav + info strip + CTA |
| `Hero.tsx` | Hero Slider | Dark bg, serif heading, hero image, CTA |
| `About.tsx` | About | Gray bg, 2-column with overlapping images |
| `PopularRooms.tsx` | Popular Rooms | Carousel of room cards |
| `VideoSection.tsx` | Video | Dark bg, play button, popup video |
| `BookingForm.tsx` | Contact Form | 2-column with form fields |
| `Blog.tsx` | Home Blog | 3-column card grid |
| `Testimonials.tsx` | Client Say | Slider with testimonials |
| `Footer.tsx` | Footer | 3-column + copyright bar |

## Placeholder Assets

- Hero image: `https://picsum.photos/seed/leafhaven-hero/800/600`
- About images: `https://picsum.photos/seed/leafhaven-about-1/600/400` and `https://picsum.photos/seed/leafhaven-about-2/600/400`
- Room images: `https://picsum.photos/seed/leafhaven-room-<n>/600/400`
- Video background: `https://picsum.photos/seed/leafhaven-video/1920/560`
- Blog images: `https://picsum.photos/seed/leafhaven-blog-<n>/600/400`
- Feature/service icons: `lucide-react` icons

## Key Differences from Original

- No FontAwesome/Themify — use `lucide-react` for all icons
- No jQuery/OwlCarousel — pure React carousel implementation (CSS scroll-snap)
- No Gijgo date picker — use native `<input type="date">` or a lightweight React date picker
- No Nice Select — use native `<select>` styled with Tailwind
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
- Video popup uses React modal instead of Magnific Popup
