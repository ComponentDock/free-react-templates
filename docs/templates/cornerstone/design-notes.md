# Cornerstone — Tasks & Design Notes

## Source

- ColorLib Bootstrap Footer 08: https://colorlib.com/wp/template/bootstrap-footer-08/
- Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-08/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-08.jpg

## Design Notes

- Full-width footer with background image (landscape/nature photo) + dark overlay (rgba(0,0,0,0.7))
- White logo text (1.5rem) top-left with description paragraph below
- Five-column layout: logo+desc | Discover (nav) | About (nav) | Help (nav) | Follow Us (social)
- Each nav column has a white bold heading (16px, 30px bottom margin)
- Nav links: light grey (#999999) text, white on hover, vertical list with 10px bottom margin
- Social icons: inline horizontal row (Instagram, Twitter, Facebook, Pinterest, Dribbble)
- No CTA button (unlike Footer 07)
- Copyright bar at bottom with medium grey (#595959) top border, centered text
- Poppins font family throughout
- Clean, dark, atmospheric aesthetic — background image adds depth
- Link transitions: 0.3s ease

## Tokens

- Brand/accent: #e42c64 (pink/magenta — available for CTA but not used in this variant)
- Background: image + rgba(0,0,0,0.7) overlay
- Text: #777 (grey)
- Logo: #fff (white), 1.5rem
- Heading: #fff (white), 16px, bold, 30px margin-bottom
- Link default: #999999 (light grey)
- Link hover: #fff
- Social icon: gray, hover: #fff
- Copyright border: #595959
- Footer padding: 7rem 0
- Font: Poppins
- Overlay: rgba(0,0,0,0.7)

## Implementation

- Component: Footer.tsx (single component with background image, overlay, logo, nav columns with headings, social, copyright)
- App: App.tsx with placeholder content area + Footer
- Social icons: use lucide-react icons (Instagram, Twitter, Facebook, Pinterest, Dribbble)
- Background: use picsum.photos for placeholder image, dark overlay via pseudo-element or overlay div
- Copyright bar: centered with top border
- Column headings: white, bold, 16px
