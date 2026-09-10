# Scrubline — Prep Notes

Source: ColorLib **Carwash** — https://preview.colorlib.com/theme/carwash/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/carwash-free-template.jpg

## Section order (implement in this sequence)

1. Navbar — sticky white, logo + nav links + phone CTA pill button
2. Hero — full-width image with dark navy→blue gradient overlay, large "Car Wash" heading, animated "& Detailing" outline text, subtext, "Our Services" pill CTA
3. Equipment/About — light blue (#EEF6FF) section, left image, right white card with heading, paragraph, "About Us" outlined button
4. Pricing — 3 cards (Car wash $50, Detailing $100, Wash & Detailing $200), white bg, blue border outlined "Get Started" buttons
5. Testimonials — blue gradient bg carousel, quote text, author avatar + name + role
6. Services — "Why take our services?" heading, 4 icon+text cards in a row
7. Video — dark background, green gradient play button, heading, subtext
8. Map — static placeholder image (no interactivity required)
9. Footer — dark bg, 4-column: logo/contact, hours, nav, social icons, bottom Component Dock bar

## Fidelity notes

- Hero text animation: first "& Detailing" is transparent with 2px white stroke; second is solid white with clip-path keyframe animation. Implement with CSS keyframes or Tailwind `animate`.
- Button gradient: `.btn` uses `background-image: linear-gradient(to left, #0BC6FF, #0d80f3, #0BC6FF)` with `background-size: 200%` and `background-position` shift on hover.
- Equipment section: the white content card overlaps the section image via negative top margin (-100px), creating depth.
- Pricing cards: clean white cards with 1px `#E7E6EB` border, centered layout, icon at top, price in `#4C1E51`.
- Testimonial gradient: `linear-gradient(to bottom, #1592e6, #007aff 1%, #10cafc 100%)` — subtle teal-to-blue.
- Services icons: use `lucide-react` equivalents (droplets, sun/wind, smartphone, shield).
- Video section: parallax dark background with centered play button and white text.
- Footer background: dark image with content overlay. 4-column responsive grid.
- Mobile: collapsible hamburger nav, stacked columns for pricing and services.
