# Hotelbreeze (ColorLib Bright Hotel) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-hotelbreeze`. Recreation name: **Hotelbreeze** (NEW name —
> the ColorLib source keeps its name "Bright Hotel").

## Source mapping

- **ColorLib item:** "Bright Hotel" (TEMPLATES.md line 1902; section "## Hotel (38)" near line 1900).
- **Source URL:** https://colorlib.com/wp/template/bright-hotel/
- **Preview URL:** https://preview.colorlib.com/theme/bright-hotel/ (UNREACHABLE at prep time — 404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/brighthotel-free-template.jpg (AVIF format, 1200x946)
- **Stack:** Bootstrap 4 grid + custom CSS + Font Awesome + Nice Select + OwlCarousel2 + SlickNav + Datepicker

## Reference research (done — do not redo)

### Screenshot analysis

Clean, minimal, sophisticated luxury hotel template. Full-width hero with restaurant/dining table background image, dark overlay, white text. Transparent navigation bar with "BRIGHThotel" logo left, nav links right. Hero contains "WELCOME" subtitle with horizontal line, "Simple & Elegant" large heading, "LEARN MORE" white button. White booking bar overlaps hero bottom with Check In/Out date pickers, Adults/Children dropdowns, red "CHECK AVAILABILITY" button. "SERVICES" section partially visible at bottom. Overall: light, airy, minimal luxury aesthetic with rectangular (sharp) button corners, uppercase section headings with underline accents.

### Section order (from screenshot + ColorLib description)

1. Navigation — transparent header, logo left, links right (Home, Rooms, Services, About Us, Blog, Contact)
2. Hero — full-width bg image (restaurant/dining), dark overlay, "WELCOME" + line, "Simple & Elegant", "LEARN MORE" button, slider arrows
3. Booking Bar — white card overlapping hero, Check In/Out dates, Adults/Children, red "CHECK AVAILABILITY"
4. Services — section with "SERVICES" heading, underline accent, service cards
5. Rooms — room showcase with images, names, descriptions, prices
6. About — "About Us" section with description
7. Testimonials — guest reviews
8. Contact — contact info/form
9. Footer — links, contact info, Component Dock link

### Design tokens (from CSS + screenshot analysis)

| Token | Value | Use |
|-------|-------|-----|
| Font | 'Poppins', sans-serif | All text |
| Primary brand | #e74c3c | CTA "CHECK AVAILABILITY" button, accent |
| Secondary | #1a73e8 | Links, hover states |
| Body text | #26282b | Body copy |
| White | #ffffff | Hero text, card backgrounds, hero button |
| Muted text | #999999, #888888 | Secondary text |
| Light bg | #f5f5f5, #f8f8f8 | Section backgrounds |
| Hero overlay | rgba(0,0,0,0.4) | Dark overlay on hero image |
| Button primary | #e74c3c bg, white text, radius 0 | Red CTA |
| Button secondary | #ffffff bg, #222222 text, radius 0 | Hero CTA |
| Navigation | transparent bg, white text | Top bar |
| Booking bar | #ffffff bg, shadow | Overlapping card |
| Section headings | uppercase, letter-spacing, underline accent | All section titles |
| Container | max-width: 1140px | Content container |

### Icon mapping (lucide-react)

| Source icon | Recreation |
|-------------|-----------|
| Font Awesome calendar | lucide-react: Calendar |
| Font Awesome chevron | lucide-react: ChevronLeft, ChevronRight |
| Font Awesome phone | lucide-react: Phone |
| Font Awesome envelope | lucide-react: Mail |
| Font Awesome map-marker | lucide-react: MapPin |

## Implementation tasks

1. **Scaffold** — Copy simplest existing hotel app, rename to `hotelbreeze`, update package.json + vite.config.ts
2. **Theme tokens** — Set up Tailwind `@theme` with design tokens (colors, fonts)
3. **Navbar** — Transparent header component with logo + nav links
4. **Hero** — Full-width hero with bg image, dark overlay, welcome text, heading, CTA button, slider arrows
5. **BookingBar** — White card with date pickers, dropdowns, red CTA button
6. **Services** — Section with heading + service cards
7. **Rooms** — Section with room showcase cards
8. **About** — About section with text and layout
9. **Testimonials** — Guest review cards
10. **Contact** — Contact section
11. **Footer** — Footer with links + Component Dock attribution
12. **Tests** — Vitest + Testing Library, 100% coverage
13. **Verify** — `scripts/verify-app.sh hotelbreeze` passes
