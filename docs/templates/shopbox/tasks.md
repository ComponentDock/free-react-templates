# Shopbox — Implementation Notes

## Template Info
- **New name:** Shopbox
- **ColorLib source:** "Wordpress Ecommerce Themes" (Shopkeeper design)
- **Source slug:** `wordpress-ecommerce-themes`
- **Preview URL:** https://preview.colorlib.com/theme/wordpress-ecommerce-themes/ (UNREACHABLE — 404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/shopkeeper.jpg
- **Category:** Ecommerce / Online Store

## Section implementation order

1. **TopBar** — thin dark bar, contact info left, utility links right. Simple flex row.
2. **Navbar** — sticky white header. Logo left, centered nav links, icons right. Mobile hamburger + off-canvas cart. Use `position: sticky` with `top: 0` and `z-index`.
3. **Hero** — full-width section with background image (`picsum.photos/seed/shopbox-hero/1920/800`), centered overlay content. Dark text on image or with a semi-transparent overlay.
4. **FeaturedCategories** — 4-column responsive grid (grid-cols-2 md:grid-cols-4). Category cards with image and caption overlay. Hover scale effect.
5. **FeaturedProducts** — 4-column product grid. Cards: image, name, price, star rating. Hover reveals quick-add icons (ShoppingCart, Heart from lucide-react). Price: display current price, optional strikethrough original.
6. **PromoBanner** — full-width dark or image background, centered text + CTA button. Contrast with surrounding white sections.
7. **NewArrivals** — same grid as FeaturedProducts but with "NEW" badge overlay (absolute positioned, top-left corner).
8. **BlogSection** — 3-column blog cards. Image, meta (date + category), title, excerpt, "Read More" link.
9. **Newsletter** — centered section on `#f8f9fa` bg. Headline, subtext, inline email form (input + button). Simple controlled state.
10. **Footer** — dark `#1a1a2e` bg. 4-column grid. Col 1: logo + about + social icons. Col 2: Quick Links. Col 3: Customer Service. Col 4: Contact Info. Copyright bar at bottom with Component Dock link.

## Design token notes

- Primary dark: `#1a1a2e` (navy) — header bar, footer, primary buttons
- Accent: `#e94560` (coral/red) — sale badges, hover accents
- Body font: Poppins (Google Fonts, weights 300–600)
- Buttons: nearly square (2px radius), dark fill or outline variants
- Light sections alternate white and `#f8f9fa`
- Product cards: white bg, subtle shadow on hover, image fills card width

## Fidelity notes

- Original likely uses Bootstrap grid → recreate with Tailwind CSS grid
- Original likely uses jQuery carousel for product rows → static grid or simple scroll
- Original likely uses Font Awesome icons → replace with lucide-react
- Product data: static array of placeholder products with picsum.photos images
- Blog data: static array of 3 placeholder posts
- No WooCommerce functionality — static display only
- All images via `picsum.photos/seed/shopbox-<n>/<w>/<h>`
- Icons from lucide-react (Search, User, ShoppingCart, Heart, Star, Mail, Phone, MapPin, Facebook, Twitter, Instagram, etc.)

## Reference existing specs

- `template-cartly/spec.md` — similar ecommerce layout (Eiser source)
- `template-boutique/spec.md` — detailed spec format reference (Theplaza source)
- `template-shopcraft/spec.md` — another ecommerce template for pattern reference
