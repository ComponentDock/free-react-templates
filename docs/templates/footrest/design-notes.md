# Footrest — Tasks & Design Notes

## Source

- ColorLib Bootstrap Footer 07: https://colorlib.com/wp/template/bootstrap-footer-07/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-07/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-07.jpg

## Design Notes

- Full-width dark footer with solid black (#000) background
- White logo text (1.5rem) top-left with description paragraph below
- Four-column layout: logo+desc | nav links col 1 | nav links col 2 | nav links col 3 + social + CTA
- Nav links: grey text, white on hover, vertical list with 10px bottom margin
- Social icons: inline horizontal row (Instagram, Twitter, Facebook, Pinterest, Dribbble)
- Pink pill-shaped "Contact Us" CTA button (#e42c64, border-radius 30px)
- Copyright bar at bottom with dark grey (#404040) top border, centered text
- Roboto font family throughout
- Smooth 0.3s hover transitions on links and icons
- Clean, dark, minimal aesthetic

## Tokens

- Brand/accent: #e42c64 (pink/magenta)
- Background: #000 (black)
- Text: #777 (grey)
- Logo: #fff (white), 1.5rem
- Link default: gray
- Link hover: #fff
- Social icon: gray, hover: #fff
- Button bg: #e42c64, text: #fff, radius: 30px, padding: 10px 20px
- Copyright border: #404040
- Footer padding: 7rem 0
- Font: Roboto

## Implementation

- Component: Footer.tsx (single component with logo, nav columns, social, CTA, copyright)
- App: App.tsx with placeholder content area + Footer
- Social icons: use lucide-react icons (Instagram, Twitter, Facebook, Pinterest, Dribbble)
- CTA button: pill-shaped with pink background
- Copyright bar: centered with top border
