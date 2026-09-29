# Querry — Design Notes

## Replication source

- **Template**: ColorLib Colorlib Search 4
- **Preview**: https://preview.colorlib.com/theme/colorlib-search-4/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-4.jpg

## Visual analysis (from screenshot)

The template is a fashion e-commerce search page with:

1. **Full-screen hero** — a fashion photograph fills the entire viewport. The image shows a person in an orange shirt against a light gray background. No dark overlay; the image is bright and clean.

2. **Heading** — large, bold, uppercase white text centered vertically in the hero: "WHAT ARE YOU LOOKING FOR?"

3. **Search bar** — a white rounded (pill-shaped) input below the heading with placeholder text "Type to search." and a magnifying glass icon button on the right side. The search bar is centered horizontally.

4. **Category navigation** — a horizontal row of white text links below the search bar: "New Arrivals", "Ladies", "Mens", "Accessories" (bold/underlined, indicating active state), "Sale". Evenly spaced.

5. **No footer visible in screenshot** — the original is likely a minimal or no-footer design. We add a minimal footer with Component Dock branding per project rules.

## Token extraction

- Font: Poppins (Google Fonts)
- Colors: white text on image, white search bar (#ffffff), dark gray active state (#333333)
- Search bar: rounded-full or rounded-3xl, white bg, padding
- Heading: uppercase, bold, large font size (text-4xl to text-6xl)
- Category nav: flex row, gap, white text, hover underline
