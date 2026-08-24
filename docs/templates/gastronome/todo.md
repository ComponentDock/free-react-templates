# Gastronome — Implementation Notes

**Source:** ColorLib Pato (https://colorlib.com/wp/template/pato/)
**Preview:** https://preview.colorlib.com/theme/pato/
**Category:** Restaurant

## Section order (build sequence)

1. `Navbar.tsx` — Fixed header with gradient overlay, logo, nav links, mobile hamburger
2. `HeroSlider.tsx` — Full-width carousel (Swiper), 3 slides, centered text + CTA
3. `Welcome.tsx` — Two-column: text left (subtitle, heading, desc, link), image right
4. `IntroFeatures.tsx` — Parallax banner + 3-column feature cards
5. `OurMenu.tsx` — Patterned bg, asymmetric grid, 6 category images with overlay buttons
6. `EventsSlider.tsx` — Background image slider, event card with countdown timer
7. `Booking.tsx` — Patterned bg, reservation form (6 fields) + side image
8. `Reviews.tsx` — Customer review carousel with avatars, quotes, stars
9. `VideoSection.tsx` — Parallax bg, centered play button
10. `Blog.tsx` — 3 blog cards with date badges and "Continue Reading" links
11. `SignUp.tsx` — Email input + button on patterned background
12. `Footer.tsx` — 3-column footer + bottom bar with social icons + Component Dock link

## Design fidelity notes

- **Gradient header:** `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0))` over hero images
- **Pattern backgrounds:** Use subtle repeating pattern on dark bg (#222222) for Welcome, Booking, Sign-up. Implement with a CSS repeating pattern or subtle noise texture.
- **Image hover zoom:** `scale(1.1)` transition 0.6s on all image cards
- **Buttons:** btn1 = white bg, 10px radius (hero CTA); btn3 = #111111 bg, white text, hover #ec1d25 (form submit, sign-up)
- **Countdown timer:** Static mock (no real timer logic needed, display hardcoded values)
- **Review avatars:** Circular with `4px solid #ec1d25` border
- **Menu grid:** Asymmetric — large image left (2/3 width), 2 small images stacked right (1/3), plus full-width Happy Hour row
- **Footer bottom:** Replace "@ Colorlib. Get The Theme" with Component Dock link

## Placeholder images

Use `https://picsum.photos/seed/gastronome-<n>/<w>/<h>` for all images:

- Hero slides: `seed/gastronome-hero-1/1920/1080`, `-hero-2`, `-hero-3`
- Welcome image: `seed/gastronome-story/600/400`
- Intro cards: `seed/gastronome-intro-1/400/300`, `-intro-2`, `-intro-3`
- Menu images: `seed/gastronome-menu-1/600/400`, etc. (6 total)
- Event background: `seed/gastronome-event/1920/800`
- Booking image: `seed/gastronome-booking/600/400`
- Review avatars: `seed/gastronome-avatar-1/100/100` (3 total)
- Video bg: `seed/gastronome-video/1920/800`
- Blog images: `seed/gastronome-blog-1/400/300`, `-blog-2`, `-blog-3`
- Footer gallery: `seed/gastronome-gallery-1/150/150` through `-12`
