# Placecraft — Implementation TODO
<!-- prep-status: shipped-as=spotlight -->
> **SHIPPED-UNDER** — the ColorLib `listed2` design this prep describes already
> ships as `apps/spotlight` (<https://spotlight.free.componentdock.com>).
> Do not scaffold `apps/placecraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-spotlight/spec.md`.

> **REFERENCE IDENTITY (2026-10-24)** — this design's demo is
> `theme/listed2/` (200, 28,515 B, `Listed — Colorlib Website Template`,
> Quicksand, `#7971ea`), NOT `theme/listed/`; the catalogue's `listed2` key
> carries the sibling's URL by mistake. Geometry: header 73 · hero 900 · Most
> Visited Places 598 · Popular Categories 478 · Why Us 624 · Testimonials 636 ·
> Our Blog 900 · FAQ 562 · CTA 248 · footer 642. The hero Search button is a
> 30px pill (`.form-search-wrap .btn`), not a square corner.

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
