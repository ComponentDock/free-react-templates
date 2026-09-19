# TripCraft — Implementation Todo and Design Notes

## Source mapping
- ColorLib template: "Travelers"
- Preview URL: https://preview.colorlib.com/theme/travelers/
- Screenshot: travelers-free-template.jpg
- New name: tripcraft

## Implementation order (section-by-section)

1. Navbar — sticky header, brand text left, nav center, social icons right
2. HeroSlider — two-slide carousel replacement, parallax bg images
3. DestinationCards — 3-column image cards with hover text overlay
4. FeatureIcons — 3-column icon + text row (Air Ticketing, Cruises, Tour Packages)
5. Testimonials — carousel with photo + white quote card layout
6. DestinationsGrid — 6 cards (2x3) with price + location name
7. VideoCtaBand — parallax bg + play button + heading
8. Services — 6 icon cards on light bg (reuses FeatureIcons pattern)
9. BlogPosts — 2-column blog cards + "View All" outline button
10. CtaBanner — centered heading + primary button
11. Footer — dark bg, 3-column layout, newsletter form, Component Dock link

## Design notes

### Colors
- Primary/brand: #ef6c57 (coral/orange-red)
- Text: #4d4d4d (body), #000 (headings)
- Backgrounds: white (default), #f4f5f9 (light sections), #333333 (footer)
- Footer text: white, links #737373/#999999

### Typography
- Font: Poppins (200, 300, 400, 700, 900)
- Hero headings: Poppins font-weight-light (300), white, large
- Section headings: Poppins font-weight-light, #000
- Body: Poppins 400, #4d4d4d

### Layout patterns
- All buttons: square corners (border-radius: 0)
- .btn-primary: solid #ef6c57, white text, hover = transparent + #000 text
- .btn-outline-primary: transparent, #ef6c57 border, hover = solid #ef6c57
- Card overlay (unit-1): full-width image, centered text on hover
- Testimonial layout: photo left + white card right (overlap-left)
- Footer: 3-col grid, dark bg

### Fidelity notes
- Hero has 2 slides with parallax background images
- The "overlap-section" class on destination cards creates visual overlap
  with the section below — replicate with negative margin or relative positioning
- Testimonials use owl-carousel — replace with a React carousel or simple state
- Video CTA has a circular play button — use lucide-react Play icon in a circle
- Services section reuses the same card pattern as Feature Icons (icon + text)
- Blog posts have a meta line: "by Author · Date · Category"
- Footer has a newsletter email input + "Send" button
- Replace Colorlib attribution with Component Dock link in footer copyright
