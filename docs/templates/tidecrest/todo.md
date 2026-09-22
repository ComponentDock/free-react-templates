# Tidecrest — Implementation Todo & Design Notes

## Structure Order (match preview 1:1)

1. **Navbar** — sticky header, logo, nav links (Home, About, Service, Blog, Contact), "Book Online" CTA
2. **Hero Slider** — 3-slide carousel, dark overlay, centered heading/subtitle, dot nav
3. **Booking Form** — floating card (-89px margin-top), 5 fields + "Book Now" button
4. **About Section** — two-column: images left + text right, "25 Years" badge
5. **Room Cards** — decorative heading, 6 cards in 3×2 grid, "View more" CTA
6. **Dining & Facilities** — two stacked parallax sections (restaurant + pool)
7. **Testimonials** — carousel with star rating + quote + author
8. **Blog** — decorative heading, 3 cards in grid with metadata
9. **Gallery** — full-width image carousel
10. **Footer** — dark bg, 4-column: logo/social, links, reservations, location + newsletter

## Fidelity Notes

### Navbar
- Original uses Bootstrap grid (col-xl-2 / col-xl-8 / col-xl-2) — use Tailwind flex
- Logo is image-based; replace with text "Tidecrest"
- Nav links have padding 38px 19px on desktop, collapse to hamburger on mobile
- "Book Online" button: golden amber bg, white text, rounded 5px
- Sticky header with transition on scroll (transparent → white bg)

### Hero Slider
- 3 identical slides (original uses same image/text on all)
- Full-width background image with dark overlay
- Min-height: 800px desktop, 600px tablet, 350px mobile
- Heading: "top hotel in the city" — Noto Serif, white, fadeInUp animation
- Subtitle: "Hotel & Resort" — Noto Serif, white, fadeInDown animation
- Dot-style navigation (not arrows)

### Booking Form
- Overlaps hero by -89px (negative margin)
- White card: border-radius 10px, box-shadow `0 8px 79px rgba(0,0,0,0.08)`
- Padding: 39px 80px 20px 80px (desktop)
- 5 input groups in a flex row (wraps on mobile)
- Check In / Check Out: date inputs (use native date pickers or simple text)
- Adults / Children / Rooms: select dropdowns (1–4 options)
- "Book Now" button: golden amber, slightly lower alignment (pt-45)

### About Section
- Left side: overlapping customer images (2 images stacked)
- "25 Years of Service Experience" — circular badge with heartbeat animation
- Right side: "About our company" label, heading, two paragraphs, "Learn More" link
- Background: white, no special treatment

### Room Cards
- Decorative heading: "Our Rooms" with double-text archivment effect (back text offset)
- 6 room cards in 3-column grid (3×2 on desktop)
- Each card: image (with link), title "Classic Double Bed", price "$150 / par night"
- Price has underlined "$" + large number + small "/ par night"
- "View more" CTA: golden amber button with arrow icon

### Dining & Facilities
- Two stacked sections, each with full-width background image
- First: "Our restaurant" → "Dining & Drinks" (left-aligned text over right-aligned image)
- Second: "Our Pool" → "Swimming Pool" (right-aligned text)
- Text has: span label, h3 heading, two paragraphs, "Learn More" border button
- Border button: transparent bg, border, arrow icon

### Testimonials
- Decorative heading with testimonial logo image
- Carousel with 2+ testimonials
- 5-star rating (gold stars using FontAwesome)
- Quote text centered
- Author: "Clifford Frazier, Regular Client"

### Blog
- Decorative heading: "Our Blog" (front) / "Recent News" (back)
- 3 cards in 3-column grid
- Each card: image, category tag ("news"), author ("Jhon Guru"), title, date, comment count with icon
- Blog title: "5 Simple Tricks for Getting Stellar Hotel Service Wherever You Are"

### Gallery
- Full-width owl-carousel-style slider
- 3 images in a row with hover effects
- Fluid container (container-fluid, p-0)

### Footer
- Dark background: `#16161a`
- 4-column layout:
  1. Logo (image2_footer) + social icons (Facebook, Twitter, Globe, Behance) + copyright
  2. Quick Links: "About Mariana" → "About Tidecrest", "Our Best Rooms", "Our Photo Gallery", "Pool Service"
  3. Reservations: phone, Skype, email
  4. Our Location: address + newsletter email input with submit button
- Social icons: 40×40 white border circles, hover → transparent + white text
- Newsletter: email input with envelope icon submit button
- Copyright links to componentdock.com

## Component Plan

| Component | File | Notes |
|-----------|------|-------|
| Navbar | `src/components/Navbar.tsx` | Sticky, scroll bg transition, mobile hamburger |
| HeroSlider | `src/components/HeroSlider.tsx` | 3 slides, dots, overlay, animations |
| BookingForm | `src/components/BookingForm.tsx` | 5 fields, floating card, responsive |
| AboutSection | `src/components/AboutSection.tsx` | Two-column, overlapping images, badge |
| RoomCards | `src/components/RoomCards.tsx` | Decorative heading, 6-card grid |
| DiningSection | `src/components/DiningSection.tsx` | Two stacked parallax sections |
| Testimonials | `src/components/Testimonials.tsx` | Carousel, stars, quote |
| BlogSection | `src/components/BlogSection.tsx` | Decorative heading, 3-card grid |
| Gallery | `src/components/Gallery.tsx` | Full-width carousel |
| Footer | `src/components/Footer.tsx` | 4-column dark footer |
| App | `src/App.tsx` | Compose all sections |

## Test Plan
- One `describe` per component
- Scenario-style `it` blocks matching the Gherkin scenarios
- 100% line/function/branch/statement coverage required
- Use `getByRole`, `getByText`, `getByLabelText` (query like a user)
