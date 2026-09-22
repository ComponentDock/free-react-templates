# SweatLab — Prep Notes

## Source
- ColorLib template: Fitness
- Source URL: https://colorlib.com/wp/template/fitness/
- Preview: https://preview.colorlib.com/theme/fitness/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitness-free-template.jpg

## Design Tokens Captured
- Primary: #f6214b (red-pink)
- Font: Poppins (Google Fonts, 300–700)
- Banner overlay: rgba(0,0,0,0.2)
- Button: #f6214b bg, white text, no radius, 30px padding
- Footer: white bg, #f6214b accent
- Text: #222 headings, #777 body, #999 light
- Light section bg: #f9f9ff / #fafaff

## Section Structure (implementation order)
1. Navbar — sticky, logo center, dropdown menus (Blog, Pages)
2. Banner/Hero — bg image + overlay, h1 "Shape your Perfect body", CTA
3. Top Course Area — carousel of course cards (thumb, JOIN NOW, title + price)
4. CTA Area — two side-by-side dark-overlay panels with buttons
5. Feature Area — image left, 3+ feature items right (h4 + p)
6. Calculation Area — BMI calculator or pricing, bg overlay
7. Image Gallery — masonry/grid, magnific-popup hover
8. Testimonial Area — carousel, avatar + quote + name + title
9. Brands Area — logo strip
10. Newsletter CTA — email input + submit, bg overlay
11. Footer — 4 columns (About, Contact, Hours, Newsletter), copyright bar

## Fidelity Notes
- Hero: full-width bg image, dark overlay 20%, left-aligned white h1 uppercase
- Course cards: horizontal carousel, each card = thumb img + JOIN NOW btn + title-price row
- CTA panels: equal-width split, dark overlay 50%, each with title + desc + primary btn
- Features: 6/6 grid, left img, right stacked feature items with h4 + paragraph
- Gallery: 3-column masonry with hover overlay + lightbox
- Testimonials: carousel, centered avatar (circle), quote in italics?, name bold + title light
- Brands: simple horizontal strip of greyscale logos
- Newsletter: bg image + overlay, centered form (email input + submit btn)
- Footer: 4 columns, white bg, h4 headings, text + contact info, bottom copyright with links
- All sections use `.section-gap` (consistent vertical spacing ~80px)

## Placeholder Images
- Hero bg: `https://picsum.photos/seed/sweatlab-hero/1920/1080`
- Course thumbnails: `https://picsum.photos/seed/sweatlab-course-{1-8}/400/300`
- Feature image: `https://picsum.photos/seed/sweatlab-feature/600/400`
- Gallery images: `https://picsum.photos/seed/sweatlab-gallery-{1-9}/400/400`
- Testimonial avatars: `https://picsum.photos/seed/sweatlab-avatar-{1-3}/100/100`
- Brand logos: `https://picsum.photos/seed/sweatlab-brand-{1-5}/120/40`
- Newsletter bg: `https://picsum.photos/seed/sweatlab-newsletter/1920/600`
