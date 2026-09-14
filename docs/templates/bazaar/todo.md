# Bazaar — Tasks & Design Notes

## Template Info

- **New name:** Bazaar
- **ColorLib source:** Store (https://colorlib.com/wp/template/store/)
- **Preview URL:** https://preview.colorlib.com/theme/store/
- **Category:** E-Commerce / Fashion

## Design Tokens (from css/style.css)

| Token              | Value             | Usage                          |
| ------------------ | ----------------- | ------------------------------ |
| Brand              | #FFC300           | Buttons, accents, prices, tags |
| Brand dark         | #E5AD00           | Button hover                   |
| Body text          | #595959           | Main text                      |
| Muted text         | #999999           | Descriptions, meta             |
| Heading            | #000000           | Headings, navbar               |
| Background         | #FFFFFF           | Page background                |
| Light section      | #F8F8F8           | Testimonial bg                 |
| Font family        | Roboto            | Body text                      |
| Display font       | Playfair Display  | Headings                       |
| Button radius      | 4px               | Rounded buttons                |
| Testimonial images | 50% border-radius | Circular avatars               |

## Sections (in order)

1. **Navbar** — Sticky top, logo "Bazaar", nav links with Shop dropdown, cart icon [0]
2. **Hero Slider** — 3 slides with background images, dark overlays, centered text, auto-advance
3. **Featured Products** — 2-col mixed-size grid (1 tall, 2 small, 1 full-width)
4. **New Arrivals** — 4-col grid, 8 products with New tags, hover action overlay
5. **Promo** — Parallax bg, 45% Off Sale block, description, CTA buttons
6. **Our Products** — 4-col grid, 8 products with New/Sale tags, sale prices
7. **Testimonials** — 3 testimonials with avatars, names, locations, quotes
8. **Blog** — 3-col grid, blog cards with images, dates, excerpts
9. **Newsletter** — Dark bg, email input, Subscribe button
10. **Footer** — 5 columns (About, Customer Care, Information, News, Contact), social icons
11. **Copyright** — "Made with ♥ by Component Dock" linking componentdock.com

## Implementation Notes

- All placeholder images use picsum.photos with seeded URLs
- Social icons use inline SVGs (brand icons removed from lucide-react)
- Hero slider uses useState + useEffect with 5s interval
- Product cards use Tailwind group hover for action overlay
- No ColorLib references in any app files
- Footer links to https://www.componentdock.com/
