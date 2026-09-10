# Grille — Implementation Notes

Source: ColorLib "Caviar" (https://preview.colorlib.com/theme/caviar/)
New name: grille
Preview URL: https://preview.colorlib.com/theme/caviar/

## Section Order (top to bottom)

1. Navbar (fixed, transparent → dark scroll)
2. Hero (full-width carousel with background images)
3. About Us (two-column, alternating image/text)
4. Dish Menu (3-column grid, dish cards)
5. Awards (horizontal row of 5 badges)
6. Testimonials (carousel, avatar + quote cards)
7. Reservation (form + side image split)
8. Footer (dark, logo + copyright)

## Component Outline

- `Navbar.tsx` — fixed nav, transparent bg → dark on scroll (IntersectionObserver or scroll listener). Brand "grille". Nav links array. Hamburger toggle on mobile. Search icon.
- `Hero.tsx` — carousel (use simple CSS-based slider or state-based). Background images via inline style. Left-side vertical social links. Slide thumbnail nav on right edge.
- `AboutUs.tsx` — two rows. Row 1: image left (50%), text right (50%) with "restaurant style" span + paragraph. Row 2: reversed layout with "our chef" label.
- `DishMenu.tsx` — centered heading "Special". CTA button "View The Menu". 3-column grid of `DishCard` sub-components: image, name, price. Hover effect changes text to brand red.
- `Awards.tsx` — left heading "Awards". Flex row of 5 award badge images.
- `Testimonials.tsx` — centered heading "Testimonials". Carousel of `TestimonialCard` sub-components: avatar image, name, title, quote text.
- `Reservation.tsx` — split layout: form area (left) with date/time/persons/name/message inputs + submit button, side image (right). Underline-style inputs (border-bottom only).
- `Footer.tsx` — dark bg (#333). Brand "grille". Copyright line with Component Dock link.

## Design Token Notes

- Brand red: #ff0000 — use as Tailwind custom color in `@theme`
- Body font: Open Sans (Google Fonts link in index.html)
- Button font: Work Sans (Google Fonts link in index.html)
- Button style: white bg, black text, sharp corners (no radius), 180px min-width, circular red dot indicator
- Header: transparent → rgba(0,0,0,0.85) on sticky
- Footer: bg #333333
- Section headings: 36px, bold
- Form inputs: border-bottom only (#c1c1c1), no box-shadow on focus
- Social links: white, vertical stack
- Testimonial cards: 1px solid #eaeaea borders

## Fidelity Notes

- Hero uses background images (not <img> tags) — use inline style with picsum.photos
- Carousel can be simplified to a CSS-based or state-driven slider (no Owl Carousel dependency)
- The circular span inside .caviar-btn is a small 8px red circle — can be a pseudo-element or inline span
- About Us section has generous padding (~200px top on second row)
- Dish cards are image-only (circular) with hover transition on name/price color
- Reservation form uses underline-style inputs — simple border-bottom styling
- Awards section is a flex row with 5 images — use picsum.photos placeholders
- Footer is minimal: logo + single copyright line
