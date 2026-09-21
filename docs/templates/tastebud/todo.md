# Tastebud — Implementation Notes

Source: ColorLib Foodfun
Preview: https://preview.colorlib.com/theme/foodfun/
Spec: openspec/specs/template-tastebud/spec.md

## Section order (from live preview DOM)

1. **Navbar** — floating white rounded header, logo left, nav links right, hamburger on mobile
2. **Hero Banner** — full-width bg image, dark overlay, centered headline + subtitle
3. **Welcome** — split layout: left image, right text + gold "welcome" + CTA button
4. **Food Menu** — section heading + 6 food cards in 3-col grid (image, name, price, description, hover effects)
5. **Reservation CTA** — full-width bg image, dark overlay, heading + subtitle + gold button
6. **Special Dishes** — numbered items (01, 02) in alternating left-right layout with images
7. **Testimonials** — dark bg, customer carousel with circular photos, names, quotes
8. **Food Update / Blog** — 3 blog cards with image, meta (admin + date), title, description, "read more"
9. **Reservation Form** — dark bg, form with date/time/guests inputs + gold submit button
10. **Footer** — dark navy widget area (3 cols: logo+text, contact, hours) + copyright bar + social icons

## Design tokens (from CSS extraction)

- Brand gold: #ffb606 (CTAs, highlights, accents)
- Dark navy: #131230 (headings, nav, footer bg)
- Deep navy: #0d0d27 (copyright bar)
- Light lavender: #f9f9ff (cards, content areas)
- Body gray: #777777
- Overlay: rgba(1,7,16,0.7) / rgba(1,7,16,0.8)
- Heading font: "Playfair Display", serif (italic, weight 700)
- Body font: "Roboto", sans-serif
- Button radius: 3px
- Section padding: 130px 0

## Component plan

- `src/components/Navbar.tsx` — floating header
- `src/components/HeroBanner.tsx` — hero with bg image + overlay
- `src/components/WelcomeSection.tsx` — split layout
- `src/components/FoodMenu.tsx` — 6-card grid with hover
- `src/components/ReservationCTA.tsx` — CTA with bg image
- `src/components/SpecialDishes.tsx` — numbered alternating dishes
- `src/components/Testimonials.tsx` — carousel with customer cards
- `src/components/FoodUpdate.tsx` — 3-column blog cards
- `src/components/ReservationForm.tsx` — form with icon inputs
- `src/components/Footer.tsx` — 3-col footer + copyright bar

## Fidelity notes

- Header is floating (position absolute, centered, 80% width on large screens, rounded corners)
- Hero uses a food-themed background image with dark overlay
- Welcome section uses flexbox split: image left (with padding), text right
- Food cards have hover effect: image scales 1.1x, content bg turns gold, text turns navy
- Reservation CTA is full-width with background image + dark overlay
- Special dishes alternate: first dish = text left + image right, second = image left + text right
- Testimonials have dark overlay bg, white cards with circular customer photos
- Blog cards have post admin + date meta row, title, description, arrow link
- Reservation form: 3 input groups with FontAwesome icon prefixes
- Footer: dark navy (#131230) widget area, deeper navy (#0d0d27) copyright bar
- Social icons in copyright bar turn gold on hover
- All text headings use Playfair Display italic, body uses Roboto

## Placeholder images

- Hero bg: picsum.photos/seed/tastebud-hero/1920/1080
- Welcome img: picsum.photos/seed/tastebud-welcome/600/700
- Food items (6): picsum.photos/seed/tastebud-food-{1-6}/400/300
- Special dishes (2): picsum.photos/seed/tastebud-dish-{1,2}/600/500
- Testimonial bg: picsum.photos/seed/tastebud-test/1920/800
- Blog images (3): picsum.photos/seed/tastebud-blog-{1-3}/400/300
- Reservation bg: picsum.photos/seed/tastebud-reserve/1920/800
- Customer photos (2): picsum.photos/seed/tastebud-customer-{1,2}/200/200
