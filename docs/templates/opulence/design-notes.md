# Opulence — Design Notes & Task Outline

Source: ColorLib Deluxe → https://preview.colorlib.com/theme/deluxe/

## Section Order (top to bottom)

1. **Navbar** — Sticky, transparent → solid on scroll. Logo "Opulence" left, nav links right (Home, Rooms, Restaurant, About, Blog, Contact).
2. **Hero Slider** — Full viewport height (900px), carousel of slides with dark overlay. Each slide: heading + subheading + CTA button.
3. **Booking Form** — Floating over hero bottom. White card with fields: Check In date, Check Out date, Special Request textarea, "Check Availability" button. Labels use gold accent `#8d703b`.
4. **About / Welcome** — Two-column: image left, text right. Heading "Welcome To Our Hotel" + paragraphs.
5. **Amenities** — 4 cards in a row with icons: Front Desk (24/7), Restaurant Bar, Transfer Services, Spa Suites.
6. **Rooms** — 3-column grid, 6 room cards. Each: image, room name, price/night, "View Room Details" link. Background `#f7f7f7`.
7. **Counter / Stats** — Parallax background image. 4 stat counters: Happy Guests, Rooms, Staffs, Destination. Numbers animate on scroll.
8. **Testimonials** — Carousel with avatar, quote, author name. Background `#f7f7f7`.
9. **Blog** — 4 blog entry cards in a row. Each: image, date, title, excerpt, "Read more" link.
10. **Instagram Strip** — 6-column image grid with heading "Instagram".
11. **Footer** — Dark `#232323`. Columns: site links, Privacy, Services, Contact (phone + email). "Made with Component Dock" link.

## Fidelity Notes

- Hero height is 900px in the original — use `min-h-screen` or fixed height with responsive breakpoint.
- Booking form uses negative margin (`-230px`) to float over hero — replicate with relative positioning.
- Room card images should use `picsum.photos/seed/opulence-room-<n>/600/400` for deterministic placeholders.
- Blog card images: `picsum.photos/seed/opulence-blog-<n>/600/400`.
- Counter numbers should animate (count up) on scroll intersection.
- Testimonial carousel needs left/right arrows and dot indicators.
- Instagram strip: 6 equal-width images in a flex row.
- All interactive elements need `focus-visible` rings for accessibility.
- Footer MUST include a link to `https://www.componentdock.com/` (Component Dock).

## Color Mapping to Tailwind

| Original | Tailwind token |
|----------|---------------|
| `#78d5ef` (brand blue) | `bg-sky-300` / custom `--color-brand` |
| `#56caeb` (hover blue) | `bg-sky-400` / custom `--color-brand-hover` |
| `#4ac7ea` (deep blue) | `bg-sky-500` / custom `--color-brand-deep` |
| `#8d703b` (gold accent) | custom `--color-gold` |
| `#232323` (dark surface) | `bg-neutral-800` |
| `#f7f7f7` (light bg) | `bg-gray-50` |
| `#212529` (body text) | `text-neutral-900` |
| `#6c757d` (muted text) | `text-neutral-500` |

## Task Checklist

- [ ] Copy simplest existing app as base
- [ ] Rename package to `@free-react-templates/opulence`
- [ ] Set up `public/CNAME` with `opulence.free.componentdock.com`
- [ ] Set `"homepage"` in `package.json`
- [ ] Implement `Navbar.tsx` (sticky, transparent→solid)
- [ ] Implement `HeroSlider.tsx` (carousel, overlay, CTA)
- [ ] Implement `BookingForm.tsx` (floating, date inputs, gold labels)
- [ ] Implement `AboutSection.tsx` (2-column, image + text)
- [ ] Implement `Amenities.tsx` (4 cards, icons from lucide-react)
- [ ] Implement `Rooms.tsx` (6 cards, 3-col grid, prices)
- [ ] Implement `CounterSection.tsx` (4 stats, scroll animation)
- [ ] Implement `Testimonials.tsx` (carousel)
- [ ] Implement `BlogSection.tsx` (4 cards)
- [ ] Implement `InstagramStrip.tsx` (6 images)
- [ ] Implement `Footer.tsx` (dark, columns, Component Dock link)
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh opulence`
