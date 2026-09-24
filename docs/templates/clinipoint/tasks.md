# Clinipoint Template — Task Outline

Recreation of ColorLib Medica (https://colorlib.com/wp/template/medica/).

## Design Notes

### Sections (in order)

1. **TopBar** — gradient (cyan→blue), social icons + quick menu, hidden on mobile
2. **Navbar** — sticky white, logo + 5 links + search icon, hamburger on mobile
3. **Hero** — full-width dark overlay, "We provide top medical services", 2 CTA buttons
4. **ContactInfo** — 3 cards: hours, phone, address
5. **Welcome** — 3 stacked cards (emergency/doctors/appointment) + about text with 8 specialties + doctor image
6. **Services** — gradient overlay bg, 6 service cards in 3x2 grid
7. **Doctors** — 4 doctor profile cards with social links
8. **Testimonials** — dark overlay, patient quotes
9. **Stats** — gradient bg, 4 counter cards
10. **AppointmentForm** — form + medical image, two columns
11. **Partners** — 5 partner logos
12. **Footer** — dark, 4 columns + bottom bar with Component Dock link

### Design Tokens

- Primary blue: #2f88fd
- Accent cyan: #3de6fa
- Gradient: linear-gradient(to right, #3de6fa, #243eff)
- Hero overlay: rgba(0, 28, 100, 0.85)
- Footer bg: #172538
- Footer bottom: #0b131e
- Heading font: Open Sans
- Body font: Roboto

### Fidelity Notes

- Original uses Bootstrap grid → we use Tailwind grid/flex
- Original uses Owl Carousel for hero/testimonials → we use static single-slide
- Original uses Font Awesome → we use lucide-react + inline SVGs for social
- Original uses jQuery animations → we use CSS transitions
- picsum.photos for all image placeholders with descriptive seeds
