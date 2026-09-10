# Crudo — Prep Notes

Source: ColorLib **Caviar** — https://preview.colorlib.com/theme/caviar/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/caviar-free-template.jpg

## Section order (implement in this sequence)

1. Navbar — fixed, transparent → semi-black on scroll, logo left, nav links right, search icon
2. Hero — full-screen slider with background images, left-aligned content card (heading, text, square CTA), social icons on left edge, slide-nav thumbnail
3. About Us — two alternating image+text blocks (image-left/text-right then text-left/image-right), subtitles "restaurant style" and "our chef"
4. Dish Menu — "Special" heading centered, "View The Menu" square CTA, 3-column dish cards (image + name + price)
5. Awards — "Awards" heading left, horizontal row of 5 award logos/badges
6. Testimonials — "Testimonials" heading centered, carousel with author image + name + quote
7. Reservation — split: left image, right form (date, time, persons, name, message, submit), dark bg
8. Footer — minimal dark footer, logo + copyright + Component Dock attribution

## Fidelity notes

- Dark/moody aesthetic: black backgrounds on header, hero, reservation. Light sections (#f9f9f9) for About, Menu, Awards, Testimonials.
- Buttons are SQUARE (border-radius: 0) — white bg with 1px #b2b2b2 border, hover turns text red (#ff0000). NOT pill-shaped.
- Fonts: "Open Sans" for body, "Work Sans" for headings/buttons.
- Navbar: starts transparent (100px height), becomes rgba(0,0,0,0.85) at 70px on scroll. Use Tailwind + scroll listener or IntersectionObserver.
- Hero: full-height slider with owl-carousel. Each slide has a small nav thumbnail in bottom-right corner. Social icons stacked vertically on left edge of viewport.
- About Us: two large image blocks with generous vertical spacing (padding-top: 200px for second block). Text blocks are offset to one side.
- Dish Menu: cards show dish image, name below, price. Simple hover effect.
- Reservation: form fields are basic — date input, time input, text inputs for persons/name, textarea for message. Background image on left side, form on right.
- Footer is very minimal — just logo text and single copyright line.
- Mobile: hamburger nav, stacked layout for About blocks and Menu cards.
