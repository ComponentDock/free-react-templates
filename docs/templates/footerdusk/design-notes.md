# FooterDusk — Design Notes

## Source

- **ColorLib template:** Bootstrap Footer 19
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-19/
- **Original CSS class:** `.footer-09`

## Visual Design

Deep purple gradient background (bottom-left #2a1a5e to top-right #5126a7 at 45deg). Four equal columns with white headings, pink/magenta accent links and circular icon badges. Dark, rich aesthetic with contrast from the pink accents. The subscribe form has a semi-transparent dark input with pink border, and a solid pink submit button. Instagram section shows a 3x2 grid of thumbnail images.

## Section Order (from left to right)

1. **About** — Heading with ionic logo icon circle, address (pin icon), phone (call icon), email (send icon), email subscribe form (input + send button)
2. **Latest News** — Heading with list-box icon circle, two blog post cards (thumbnail left, heading + meta right)
3. **Information** — Heading with document icon circle, vertical link list (About, Products, Blog, Contact, Help & Support)
4. **Instagram** — Heading with Instagram logo icon circle, 3x2 image grid (100px height thumbnails, rounded)

Below all four columns: copyright row with border-top separator.

## Fidelity Notes

- Background is a CSS linear-gradient at 45deg, NOT a solid color. Tailwind: use `bg-gradient-to-br from-[#2a1a5e] to-[#5126a7]`
- Heading icon circles are 40x40px, border-radius 50%, 1px solid #fe59d7, color #fe59d7. Use `lucide-react` icons.
- Subscribe form input: semi-transparent dark bg (rgba(0,0,0,0.05)), 2px solid #fe8ce3 border, 0 border-radius, 16px font
- Submit button: 52x52px square, #fe8ce3 background, white text/icon, 0 border-radius
- Blog post cards use flexbox with thumbnail on left (`.img.mr-4.rounded`) and text on right
- Instagram grid: 3 columns x 2 rows, each image 100px height, rounded corners
- Copyright: left-aligned year + "All rights reserved", right-aligned "Made with ♥ by Component Dock"
- Separator: border-top with rgba(255,255,255,0.1)
- All text uses Poppins font family
- Images: use `https://picsum.photos/seed/footerdusk-<n>/<w>/<h>` placeholders
- Social/Instagram images: `https://picsum.photos/seed/footerdusk-insta-<n>/200/200`
