# Hawker — Implementation Notes

## Source
- ColorLib slug: `selling`
- Preview: https://preview.colorlib.com/theme/selling/
- New name: `hawker`

## Section order (fidelity)

1. Nav — sticky white header, "Selling." logo, nav links, offcanvas mobile
2. Hero — "Shop With Us" heading, description, CTA
3. Products — "Our Products" grid
4. Newsletter — email subscribe form
5. FeaturedProducts — "Featured Products" grid
6. AboutUs — "About Us" text
7. Leadership — "Leadership" team cards
8. SummerSale — dark bg promotional banner
9. Services — "We Offer Services" cards
10. Testimonials — testimonial cards
11. BlogPosts — "Blog Posts" 3 cards
12. Contact — "Get In Touch" form
13. Footer — dark #333333, 4 columns

## Design tokens (from CSS)

| Token | Value |
|-------|-------|
| accent | #f16821 (orange) |
| black | #000000 |
| footer bg | #333333 |
| body text | gray |
| font | Muli (sans-serif) |
| btn-black | #000 bg, white text |
| btn-white | #fff bg, black text |
| btn radius | 0 (square) |

## Component mapping

- `Navbar.tsx` — sticky white header
- `Hero.tsx` — hero with heading and CTA
- `ProductGrid.tsx` — products section
- `Newsletter.tsx` — email subscribe
- `FeaturedProducts.tsx` — featured items
- `AboutUs.tsx` — company description
- `Leadership.tsx` — team member cards
- `SummerSale.tsx` — dark promotional banner
- `Services.tsx` — service cards
- `Testimonials.tsx` — testimonial cards
- `BlogPosts.tsx` — blog post cards
- `Contact.tsx` — contact form
- `Footer.tsx` — dark 4-column footer

## Fidelity notes

- Use placeholder images from picsum.photos with seed `hawker-N`
- Icons from lucide-react
- Google Font: Muli via index.html
- All buttons square, uppercase, small
- Sticky header on scroll
- Summer sale: dark bg with white heading
- Footer must link Component Dock
- No ColorLib references in app code
