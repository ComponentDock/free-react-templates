# Dishcraft (ColorLib Meal) — Implementation Notes

Source: https://colorlib.com/wp/template/meal/
Preview: https://preview.colorlib.com/theme/meal/

## Section order (implement in this order)

1. Navbar — fixed logo (bordered square letter) + hamburger toggle → slide-out side panel with nav links
2. Hero — full-width bg image, centered heading, white outline CTA button
3. Food Highlights — "Find your best food", 3 items with alternating image+text layout
4. About — centered heading + paragraphs on white bg
5. Chef Banner — decorative centered image
6. Meet The Chefs — 2 cards with photo, name, title, bio, social icons
7. Menu — tabbed (Breakfast/Brunch/Dinner), 4 items per tab with thumbnail, name, desc, price
8. Other Services — 3x2 grid of icon + title + description cards
9. Reservation Form — 6 fields with icons + submit
10. Customer Reviews — testimonial carousel
11. Contact Form — 4 fields + submit
12. Map placeholder
13. Footer — 3 columns (About, Hours, Social+Newsletter) + copyright + Component Dock link

## Fidelity notes

- Logo: bordered square with initial letter (implement as "D" for Dishcraft)
- Fonts: Playfair Display (headings) + Open Sans (body) via Google Fonts
- Brand accent: #ff7a5c (coral/salmon) — use for links, button outlines, loader spinner
- Hero button: white outline, px-5 py-3 padding
- Form submit buttons: full-width outline primary, #ff7a5c border
- Section headings: centered h2 with serif font + sub-heading in gray
- Food highlights: alternating left/right image-text layout with arrow indicators
- Menu tabs: Bootstrap-style pills, active tab highlighted
- Chef cards: photo on top, name + title below, bio text, social row
- Reservation form: 2-row layout (3 fields each row), icons per field
- Testimonial carousel: quote text, circular author photo, name + title below
- Footer: dark bg, 3 columns, newsletter input with envelope icon button
- Map: placeholder div (Google Maps or generic map)
