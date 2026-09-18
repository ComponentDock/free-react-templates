# Virtuoso — Prep Notes

Source: ColorLib Virtualassistant
Preview: https://preview.colorlib.com/theme/virtualassistant/
New name: virtuoso
App folder: apps/virtuoso
Package: @free-react-templates/virtuoso

## Section order (fidelity)

1. Navbar (dark, sticky, 7 links)
2. Hero (full-width bg image + dark overlay + headline + CTA)
3. Why Choose Us (fullwidth split: image left, 4 feature items right)
4. Services (8 cards in 4-col grid, centered icons)
5. About / VA Comparison (split: image left, text + 2 progress circles right)
6. Testimonials (dark overlay, owl-carousel of client quotes)
7. How It Works (3 numbered step cards, active middle card)
8. Pricing (4 plan cards: $49, $79, $109, $149)
9. Blog (3 post cards)
10. Footer (dark, 5 columns, social icons, contact info)

## Design tokens captured

- Brand accent: #21bf73 (green) — subheading text, decorative lines, pricing numbers
- CTA/Primary: #007bff (blue) — buttons
- Font: Roboto (300, 400, 500, 700)
- Button radius: 0.25rem
- Footer bg: #1a1a1a
- Testimonial overlay: dark
- Light section bg: #f8f9fa (How It Works, Pricing)
- Heading text: #212529
- Body text: #495057
- Card shadow: 0px 24px 48px -13px rgba(0,0,0,0.05)

## Implementation tasks

- [ ] Create apps/virtuoso scaffold (copy simplest existing app, rename package)
- [ ] Set up Tailwind theme tokens in index.css (@theme block)
- [ ] Implement Navbar component (dark bg, responsive hamburger)
- [ ] Implement Hero component (bg image, dark overlay, headline, CTA button)
- [ ] Implement WhyChooseUs component (split layout: image + 4 feature items)
- [ ] Implement Services component (8-card grid with icons from lucide-react)
- [ ] Implement AboutComparison component (split: image + text + 2 progress circles)
- [ ] Implement Testimonials component (carousel of quote cards)
- [ ] Implement HowItWorks component (3 numbered step cards)
- [ ] Implement Pricing component (4 plan cards with green price numbers)
- [ ] Implement Blog component (3 post cards with image, date, author, title)
- [ ] Implement Footer component (dark bg, 5 columns, social icons, contact, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Add placeholder images (picsum.photos with deterministic seeds)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: npm run verify:app virtuoso passes
- [ ] Update TEMPLATES.md status
