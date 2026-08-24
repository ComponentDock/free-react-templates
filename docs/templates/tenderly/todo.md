# Tenderly — Prep Notes

## Source

- ColorLib: Lovecare (https://colorlib.com/wp/template/lovecare/)
- Preview: https://preview.colorlib.com/theme/lovecare/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lovecare-colorlib-template.jpg

## Design Fidelity Notes

### Color Palette

- Primary brand: gold #d49a3a (CTAs, accents, icons, hover states)
- Secondary: teal #0a686e (fund bar, secondary backgrounds)
- Dark overlay: #0a4f53 (hero gradient start)
- Very dark: #042628 (footer), #39311d (fund-wrap bg, headings)
- Light: #f3f0eb (cream sections, icon backgrounds)
- Text: white on dark, #39311d on light, #4d4d4d for muted

### Typography

- Body/nav/footer: "Poppins", Arial, sans-serif
- Hero h1 + appointment headings: "Patrick Hand", cursive (80px hero, 30px appointment)
- Font weights: 400 (body), 500 (headings), 600 (breadcrumbs, captions)

### Layout Structure (section order)

1. Navbar — transparent → solid, 5 links
2. Hero — full-viewport, gradient overlay, cursive h1
3. Fund/Donate — two-column: stat card (teal bar) + donation form (dark bg)
4. Mission — white bg, 3 action cards (icon + heading)
5. Stats Counter — dark teal parallax overlay, 4 stat cards (semi-transparent white)
6. Causes — carousel of cause cards with progress bars
7. CTA Banner — cream bg, parallax, two buttons (gold + teal)
8. Volunteers — 4 cards (avatar + name + social icons)
9. Testimonials — dark section, carousel of quote cards
10. Video CTA — background image, dark overlay, heading + button
11. Blog — 3 cards (image + meta + heading + excerpt + Read More)
12. Footer — very dark teal, 3 columns, Component Dock link

### Key Visual Details

- Fund-wrap has rounded corners (10px) and overlaps hero by -136px margin-top
- Fund-raised bar: teal #0a686e with gold icon + white text
- Testimony cards: white bg, 4px border-radius, subtle box-shadow, gold circle icon
- Hero gradient: 135deg from #0a4f53 to gold-tinted transparent
- Counter section: semi-transparent white cards (rgba(255,255,255,0.1))
- All circular elements: 50% border-radius
- Footer bottom bar: #053336 (slightly lighter than main footer)

### Component Reuse Opportunities

- Use packages/ui Button for CTAs (white variant, gold variant, teal variant)
- Use packages/ui Card for cause cards, volunteer cards, blog cards, testimony cards
- Circular avatar pattern can be a shared component
- Progress bar for causes can be a shared component

### Implementation Notes

- Hero uses background-image + gradient overlay (not a solid color)
- Fund section uses negative margin-top to overlap hero
- Parallax effect on stats counter and CTA banner (background-attachment: fixed)
- Causes section needs a carousel (tns slider in original — use simple state-based carousel)
- Testimonials carousel similarly needs dot pagination
- Mobile: hero h1 shrinks from 80px to 40px, fund-wrap loses negative margin
