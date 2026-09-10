# Brushmark — Design Notes

Source template: ColorLib "Breed2" — Creative Art Director Portfolio
Preview: https://preview.colorlib.com/theme/breed2/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/breed2-free-template.jpg

## Visual design summary

- **Aesthetic:** Clean, modern personal portfolio with a professional art-director
  vibe. White/light backgrounds (#f8faff) with a dark navy footer (#021017).
  The hero uses a background image (person at desk/workspace) with text overlay.
- **Color palette:** Blue-to-pink gradient (#1345e6 → #ed239f) as the primary
  accent, applied to buttons, social icon hovers, stat numbers, and portfolio
  overlays. Dark teal (#05364d) for all headings and nav links. Gray (#797979)
  for body text. Purple (#5f30ff) for service card hover.
- **Typography:** Roboto at weights 300/400/500/700. Light weight (300) for body,
  bold (700) for headings. Section headings are 42px with 52px line-height.
  Uppercase labels with letter-spacing for section top-text.
- **Layout:** Single-column sections, 3-column grids for services/blog/portfolio,
  2-column for about and testimonials. Hero is full-width with right-aligned
  image. Statistics overlap hero with negative margin.
- **Interactions:** Service cards transition to purple on hover. Portfolio items
  get a blue overlay with title/category on hover. Blog cards gain shadow and
  image scales. Social icons in footer get gradient background on hover.
  Primary CTA button has a sliding gradient background-size animation.

## Section structure (exact order from preview)

1. Header (transparent navbar, logo left, links right, hamburger on mobile)
2. Hero Banner (bg image, left text, right portrait)
3. Statistics (3 cards overlapping hero bottom)
4. About (image left offset, text right)
5. Services (3 cards in row)
6. Testimonials (carousel, 2-col per slide: image + text)
7. Portfolio (filter tabs + 6-item grid)
8. Blog (3 cards in row)
9. Brands (logo carousel)
10. Footer (dark, centered content)

## Fidelity notes

- The hero background image is decorative; use a picsum placeholder with
  seed "brushmark-hero".
- Stats use a gradient text fill (background-clip: text). Implement with
  Tailwind's bg-clip-text + text-transparent utilities.
- The top-text accent (pink blur underline) is a pseudo-element with
  background blur filter. Approximate with a small colored bar.
- Portfolio filter tabs use data-filter attributes in original; implement
  with React state for client-side filtering.
- Testimonials carousel can use CSS scroll-snap or a lightweight React
  carousel (avoid adding heavy deps).
- Brands section is a simple horizontal logo row; use picsum placeholders.
- The about image has a right offset (-220px) on large screens; simplify
  to standard column layout in the recreation.
