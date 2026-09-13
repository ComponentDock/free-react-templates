# Pharmvault — Prep Notes

**Source:** ColorLib Pharmative
**Preview:** https://preview.colorlib.com/theme/pharmative/
**New name:** Pharmvault

## Section Order (matches DOM exactly)

1. Navbar — white bg, logo (bold-green prefix + dark suffix), nav links (Home, Store, Products dropdown, About, Contact), search icon, cart badge
2. Hero Carousel — 2 slides, background images with dark overlay, centered heading + subtext + green Shop Now button
3. Features — 3-col row on white: icon + title + description + "Learn more →" link
4. Products Carousel — gray bg, heading "Pharmacy Products", product cards with image + name + price + optional Sale badge
5. CTA Banner — dark overlay on image, "Sign up for discount up to 55% OFF", outlined-white button
6. Testimonials + Why Us — split: left = testimonial carousel (avatar, quote, green author), right = "Why Us" with 3 numbered steps
7. Footer — 3-col: About, Navigation links, Contact Info; copyright with Component Dock link

## Design Tokens

- Brand: #75b239 (green)
- Body bg: #efefef
- Body text: #8c92a0
- Dark text: #25262a / #000
- Navbar bg: #fff
- Footer bg: #f8f9fa (bg-light)
- Font: Nunito (400, 700)
- Buttons: uppercase, 2px border, transparent-on-hover, px-5 py-3
- Testimonial images: 70px, 40% border-radius
- Section rhythm: white → gray → dark-overlay → white

## Component Outline

- `Navbar.tsx` — Logo (split bold/green prefix), nav items with dropdown, search + cart icons
- `HeroCarousel.tsx` — 2-slide carousel with overlay, heading, subtext, CTA button
- `Features.tsx` — 3-column feature cards with icon, title, description, "Learn more" link
- `ProductsCarousel.tsx` — Product cards in horizontal carousel, Sale badge overlay
- `CtaBanner.tsx` — Full-width dark overlay section with heading + outlined button
- `TestimonialsWhyUs.tsx` — Two-column: testimonial carousel + numbered why-us steps
- `Footer.tsx` — Three-column footer with About, Navigation, Contact + copyright

## Fidelity Notes

- Match the green brand color exactly (#75b239)
- Logo must split "Pharm" as bold/green + "vault" as normal/dark (matches original "Pharma"+"tive" pattern)
- Hero carousel needs dark semi-transparent overlay on background images
- Product cards: simple layout with image, text, price — Sale badge absolute-positioned
- Testimonial avatars: round with 40% border-radius (not fully circular)
- CTA section uses outlined-white button (not filled)
- Footer uses bg-light (Bootstrap gray)
- Use picsum.photos for all placeholder images with template-seeded URLs
