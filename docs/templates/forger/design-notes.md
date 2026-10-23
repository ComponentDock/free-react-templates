# Forger — Template Research Notes

## Source

- ColorLib: Niko (https://colorlib.com/wp/template/niko/)
- Preview: https://preview.colorlib.com/theme/niko/
- New name: Forger

## Design Tokens

- Brand: #0075f6 (blue)
- Font: Poppins (Google Fonts)
- Dark bg: #000000 (navbar, footer, hero)
- Light bg: #f2f2f2 (skills, blog sections)
- Muted text: #b3b3b3
- Skill bar accents: blue, teal, green, orange, purple, pink

## Section Order

1. Navbar (dark, sticky, brand "F" logo)
2. Hero (background image, "Hello" badge, name, subtitle, CTA)
3. About Me (split: image + text + services + counter)
4. Skills (6 progress bars, 2-col grid)
5. What I Do (3 service columns with icons)
6. Hire Me CTA (blue banner)
7. Projects (responsive grid, 5 cards)
8. Blog (3 cards)
9. Contact (form + image split)
10. Footer (4-col, dark, Component Dock link)

## Fidelity Notes

- Original uses Owl Carousel for hero — simplified to static hero (no carousel JS dependency)
- Progress bars use multi-color accents matching original CSS color-1 through color-6
- Project grid follows original 8/4 + 4/8 layout pattern
- Footer 4-column layout matches original (brand+social, links, services, contact)
