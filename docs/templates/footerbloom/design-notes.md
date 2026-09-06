# FooterBloom — Design Notes

## Source

- ColorLib template: Bootstrap Footer 15
- Preview URL: https://preview.colorlib.com/theme/bft/bootstrap-footer-15/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-15.jpg

## Design Tokens (extracted from preview CSS)

| Token               | Value                  | Usage                         |
| ------------------- | ---------------------- | ----------------------------- |
| Footer background   | #68983b                | Main footer background        |
| Border accent       | #75aa42                | Dividers within footer        |
| Link color          | #fff8a1                | All links and headings        |
| Text muted          | rgba(255,255,255,0.5)  | Body text, meta, contact info |
| Heading color       | #fff                   | Section headings              |
| Social border       | #81ba4c                | Social icon borders           |
| Social hover border | #fff8a1                | Social icon hover             |
| Subscribe border    | #81ba4c                | Subscribe input border        |
| Subscribe submit bg | #81ba4c                | Subscribe button background   |
| Section bg          | #f8f8f8                | Main content area             |
| Font                | Poppins (Google Fonts) | All text                      |

## Layout Structure

1. Hero section (light bg, centered heading)
2. Footer: top row (logo + social icons, border-bottom)
3. Footer: 4-column grid (brand+contact+subscribe, news, product, instagram)
4. Footer: copyright bar (border-top)

## Fidelity Notes

- Original uses Bootstrap 4 grid — rebuilt with Tailwind CSS grid/flex
- Original uses Ionicons — replaced with lucide-react icons + inline SVG brand icons
- Original has background-image URLs — replaced with picsum.photos seeded placeholders
- Subscribe form has square corners (no border-radius)
- Social icons have circular border (border: 1px solid #81ba4c)
- All links are #fff8a1 (pale yellow)
- Footer padding: 4em 0
- Border colors: #75aa42 (both top and bottom borders in footer)
