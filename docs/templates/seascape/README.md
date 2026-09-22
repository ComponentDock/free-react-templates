# Seascape — Prep Notes

Source: ColorLib "The River" (https://colorlib.com/wp/template/theriver/)
Preview: https://preview.colorlib.com/theme/theriver/

## Implementation TODO

- [ ] `npm create vite@latest` → apps/seascape (React 19 + TS + Tailwind 4)
- [ ] Add `@source` inject in vite.config.ts (copy pattern from existing app)
- [ ] Create `src/index.css` with Tailwind entry + `@theme` brand tokens:
  - `--color-brand: #ffa37b` (coral/salmon primary)
  - `--color-brand-dark: #ff6347` (tomato accent)
  - `--color-heading: #393939`
  - `--color-body: #6d6d6d`
  - `--color-muted: #a5a5a5`
  - `--color-dark-bg: #0f0e24`
- [ ] Load Raleway from Google Fonts in index.html
- [ ] Build components in `src/components/`:

### Component Breakdown

1. **Navbar.tsx** — Fixed header, transparent → dark on scroll (use `useEffect` + scroll listener)
   - Logo: white-bordered box with "Seascape" text
   - Nav links: Home, About us, Rooms, Blog, Contact
   - CTA: "Book Online" coral button
   - Phone widget with icon (use lucide-react Phone icon)
   - Mobile hamburger menu (slide-in overlay)

2. **Hero.tsx** — Full-width background image with overlay
   - Headline: "A Luxury Stay" centered white text, large (text-6xl)
   - Booking form: 4 inputs (Check in, Check out, Children, Room) + "Book Now" coral button
   - Numbered slide dots (01, 02, 03) at bottom-left
   - Use placeholder: `https://picsum.photos/seed/seascape-hero/1920/1080`

3. **Features.tsx** — 3-column grid, centered content
   - Each: SVG icon (use lucide-react: Building2, Waves, Bed), title, paragraph
   - White background section

4. **Gallery.tsx** — Horizontal image carousel
   - 4 images: `https://picsum.photos/seed/seascape-gal-<1-4>/1200/800`
   - CSS scroll-snap or simple flex carousel (no external deps)

5. **About.tsx** — 2-column layout
   - Left: heading "Seascape / 10 years of excellence" + body text
   - Right: 3 inline images `https://picsum.photos/seed/seascape-about-<1-3>/300/300`

6. **Testimonials.tsx** — Parallax-style section
   - Background image with dark overlay (`bg-dark-bg/80`)
   - Testimonial cards: star rating (5 gold stars), title, text, user avatar, author + location
   - Carousel for multiple testimonials
   - Background: `https://picsum.photos/seed/seascape-test/1920/800`

7. **BookingRooms.tsx** — "Book a room" section
   - Heading + description text
   - 3 room cards: Family Room, Deluxe Room, Single Room
   - Each: background image, dark overlay on hover, price badge ($120/Night), link
   - Images: `https://picsum.photos/seed/seascape-room-<1-3>/600/400`

8. **BlogSlider.tsx** — Horizontal blog post slider
   - 3 posts: date + title overlay on background images
   - Images: `https://picsum.photos/seed/seascape-blog-<1-3>/1200/600`

9. **Footer.tsx** — Dark background (`#0f0e24`)
   - Centered logo "Seascape" / "since 1945"
   - 4-column grid: Address, Reservations, Newsletter (email input + Subscribe), Certificates (placeholder images)
   - Copyright bar with Component Dock link: `https://www.componentdock.com/`

## Section Order (fidelity-critical)

```
Header (fixed, transparent → opaque on scroll)
Hero (full-width slider with booking form)
Features (3 icon boxes)
Gallery (horizontal image carousel)
About (2-column: text + images)
Testimonials (parallax background, review cards)
Booking (room cards with price badges)
Blog (post slider)
Footer (dark, 4-column, newsletter)
```

## Design Notes

- **Color palette:** Coral/salmon (`#ffa37b`) is the hero brand color. Dark navy (`#0f0e24`) anchors footer and overlays. White sections between dark ones create rhythm.
- **Typography:** Raleway across all elements. Headings at weight 600. Body at 400–500. Generous line-height (2.0 on paragraphs).
- **Buttons:** Square corners (no border-radius). Coral background, white text. Hover: transparent bg with coral text.
- **Logo:** White-bordered square box with text — simple and clean.
- **Parallax:** Testimonials section uses parallax background (CSS `background-attachment: fixed` or scroll-based transform).
- **Overlays:** Dark semi-transparent overlays on hero, testimonials, booking cards. Use `bg-black/60`–`bg-black/80` patterns.
- **Spacing:** Generous padding (py-20+ on sections). Full-width sections alternating with contained (max-width) content.
- **Imagery:** Luxury hotel/resort feel — warm interiors, pools, rooms, beaches. Use picsum seeds for consistency.

## Key Differences from Original

- OwlCarousel → CSS scroll-snap or simple carousel (no jQuery dependency)
- jQuery datepicker → native HTML date inputs
- Font Awesome → lucide-react icons
- Parallax plugin → CSS `background-attachment: fixed` or intersection observer
- Colorbox lightbox → can omit or use a lightweight React lightbox
- Bootstrap grid → Tailwind grid/flex utilities
