# Ease — Implementation Notes

## Source

- ColorLib: Unwind (https://colorlib.com/wp/template/unwind/)
- Preview: https://preview.colorlib.com/theme/unwind/

## Section order (from preview DOM)

1. Navbar — sticky, transparent → solid on scroll, links: Home, About, Rooms, Resto & Bar, Blog, Contact
2. Hero — full-viewport, bg image with dark (#222) overlay, heading "Most Relaxing Place"
3. Booking Form — row of 4 fields (Check-In, Check-Out, Rooms, Guests) + Book Now button
4. About — two-column: left heading "Unwind A Hotel Booking Agency" + text, right image grid
5. Services — 6 cards in 2 rows of 3: icon (gold #c5a880), h2 title, description
6. Intro CTA — parallax image bg with "Find the Best Hotel in Your Next Vacation"
7. Featured Rooms — heading + room cards with images, titles, pricing
8. Restaurant & Bar — heading + description + food images
9. Video Section — dark parallax bg (600px height, #222 overlay at 0.5 opacity)
10. Testimonials ("Happy Guests") — light bg, testimonial carousel/cards
11. Counter — animated stats (rooms, guests, staff, etc.)
12. Gallery — photo grid (full-width, masonry-like with consistent gap)
13. Footer — dark bg, 4 columns: brand+tagline, Services, Quick Links, Have a Questions?

## Design token notes

- Brand accent: #c5a880 (gold/brandy) — used on links, hover, service icons
- Hero overlay: #222222 at ~0.5–0.7 opacity
- Fonts: "Nunito" (body), "Old Standard TT" (headings)
- Buttons: Bootstrap 5 default .btn-primary (#0d6efd)
- Light sections: #f8f9fa
- Dark sections: #151515 / #1a1a1a (footer, dark areas)

## Fidelity notes

- Match the dark+gold aesthetic — key differentiator from typical hotel templates
- Booking form inline in hero (not separate section)
- Services use large gold icons (60px font-size in original)
- Counter section uses animated number counters on scroll
- Gallery is a fluid grid, not masonry — images fill equal columns
- Footer has a contact form ("Have a Questions?") — include as decorative form
- Parallax sections use background-attachment: fixed (CSS parallax)

## Placeholder images

- Hero: picsum.photos/seed/ease-hero/1920/1080
- Rooms: picsum.photos/seed/ease-room-1/600/400 (etc.)
- Gallery: picsum.photos/seed/ease-gal-1/400/300 (etc.)
- Restaurant: picsum.photos/seed/ease-food/600/400
- Services icons: use lucide-react icons (Wifi, CalendarCheck, UtensilsCrossed, Waves, Heart, HelpCircle)
