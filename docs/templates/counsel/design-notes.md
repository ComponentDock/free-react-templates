# Counsel — Design Notes

## Source Template

- **ColorLib Name:** Ariclaw
- **Slug:** ariclaw
- **Category:** Business / Lawyer
- **Preview:** https://preview.colorlib.com/theme/ariclaw/

## Visual Analysis

The original Ariclaw template is a law firm landing page with a warm, professional aesthetic:

- **Color palette:** Gold/tan brand (#ab7636 → #d7af7e gradient for CTAs), warm gray section backgrounds (#f3f1ef), dark text
- **Typography:** Cardo (serif) for headings, Roboto for body — conveys authority and professionalism
- **Layout:** Single-page with clear section divisions, centered content in containers, 3-4 column grids
- **Imagery:** Professional law office/team photos (replaced with picsum.photos placeholders)
- **Tone:** Authoritative, trustworthy, established

## Sections

1. Navbar — sticky, logo + nav + CTA
2. Hero — large heading + CTA
3. About — quote + images + description
4. Services — 4-column icon cards
5. Case Studies — 3 image cards with hover overlays
6. Team — 3 attorney cards with hover social links
7. Consultation CTA — dark band with button
8. Testimonials — slider with thumbnails
9. Blog — 3 post cards
10. Footer — 4-column with services, contact, Instagram grid, Component Dock credit

## Replication Notes

- Original uses Bootstrap grid → Tailwind grid/flex
- Original uses themify-icons → lucide-react
- Original uses owl carousel/swiper → useState-based simple slider
- Original jQuery interactions → React state + effects
- All placeholder images via picsum.photos with deterministic seeds
