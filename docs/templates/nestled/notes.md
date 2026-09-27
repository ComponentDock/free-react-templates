# Nestled — Implementation Notes

## Source

ColorLib "Homey" — https://colorlib.com/wp/template/homey/
Preview: https://preview.colorlib.com/theme/homey/

## Design Analysis

- Real estate property listing template
- Orange (#FB742D) primary accent, teal (#12947f) secondary
- Lato font family, clean modern design
- Property hero slider with pricing overlay
- Services grid, property carousel, testimonials
- Dark footer with social links

## Sections (from preview DOM)

1. Navbar — logo + nav + login CTA
2. Hero Slider — property images with price/specs overlay
3. Services — 4-column icon grid
4. Properties Carousel — card-based property listing
5. Features — 2-column info cards
6. Why Us — 3-column (icons + image + text)
7. Testimonials — 2-column quote cards
8. Footer — 4-column + dark bottom bar

## Token Extraction

From css/style.css:

- brand: #FB742D (orange)
- secondary: #12947f (teal)
- body: #999
- headings: #000
- font: Lato
- buttons: border-radius 30px (pill)
- light sections: bg #f8f9fa
- footer dark: ~#302e2e

## Implementation Approach

- Copy domicile scaffold (real estate template, similar structure)
- Replace color tokens with Homey palette
- Sections match 1:1 with preview
- Property data as typed arrays
- Hero as state-driven carousel
- Properties as horizontal scroll cards
- Testimonials as flex layout
