# Placecraft — Implementation TODO

Source: ColorLib Listed2 (https://preview.colorlib.com/theme/listed2/)

## Structure order

1. Navbar — logo + 5 links + About dropdown + mobile hamburger
2. Hero — cover image, dark overlay, typed headline, subtitle, search form (4 fields)
3. Most Visited Places — heading + 3 listing cards (image, badge, title, address)
4. Popular Categories — heading + 6 category cards (icon, label, count)
5. Why Us — split: image left, heading + text + checkmark list right
6. Testimonials — heading + carousel with 4 cards (photo, name, quote)
7. Our Blog — heading + 2 blog cards (image, title, meta, excerpt)
8. FAQ — heading + 4 accordion items
9. CTA Banner — purple bg, heading, subtitle, outlined button
10. Footer — 4 link columns + newsletter form + Component Dock link

## Fidelity notes

- Brand color: #7971ea (purple/violet) — use as Tailwind custom theme color
- Font: Quicksand via Google Fonts link in index.html (weights 300–700)
- Buttons: square corners (border-radius: 0), primary = #7971ea
- Nav active: purple pill (border-radius: 30px)
- Footer: dark #333333 bg, links #999999
- Testimonials: light bg section (#f4f5f9)
- Checkmarks: green #8bc34a
- Hero overlay: rgba(0,0,0,0.6)
- Images: use picsum.photos/seed/placecraft-n for placeholders
- Icons: lucide-react for social icons, category icons; icomoon flaticon equivalents
- Typed animation in hero: can use a simple React interval-based word cycling
- Carousel for testimonials: implement with state or a lightweight carousel

## Components to build

- Navbar.tsx
- Hero.tsx (with typed-text animation)
- SearchForm.tsx (used in Hero)
- MostVisitedPlaces.tsx
- ListingCard.tsx
- PopularCategories.tsx
- CategoryCard.tsx
- WhyUs.tsx
- Testimonials.tsx
- TestimonialCard.tsx
- BlogPosts.tsx
- BlogCard.tsx
- FaqAccordion.tsx
- CtaBanner.tsx
- Footer.tsx
