# Voguish — Tasks & Design Notes

Source: ColorLib "Persuit" (https://colorlib.com/wp/template/persuit/)
Preview: https://preview.colorlib.com/theme/persuit/
New name: Voguish (apps/voguish)

## Task Outline

1. Scaffold `apps/voguish` from simplest existing app (copy, rename package
   to `@free-react-templates/voguish`, update CNAME + homepage).
2. Set up `index.css` with Tailwind `@theme` block: brand red `#d91522`,
   dark headings `#29263a` / `#0b1033`, body font stack Poppins + Montserrat.
3. Add Google Fonts `<link>` in `index.html` for Poppins (300–800) and
   Montserrat (300–800).
4. Implement `TopHeader.tsx` — 3-column layout: left (search input), center
   (phone + email + logo), right (social icons + user/cart).
5. Implement `Navbar.tsx` — Bootstrap-style responsive navbar with logo,
   Categories dropdown, Home/Pages/Shop/Blog/Lookbook/Contact links.
   Use repo-standard dark-mode toggle in navbar.
6. Implement `HeroSlider.tsx` — CSS-based carousel (no Revolution Slider)
   with 2 slides, each showing a picsum background, "Best Summer Collection"
   heading, and "read more" CTA button (red bg, square).
7. Implement `FeaturePromos.tsx` — 3-column grid: 2 promo cards with hover
   overlays + badges (Sale red circle, 10% off), 1 plain image card.
8. Implement `LatestProducts.tsx` — Product carousel with 8 product cards,
   each showing image, name, price (with strikethrough for discounts),
   compare/cart/wishlist action icons.
9. Implement `BigPromos.tsx` — 2 equal-width promo cards with hover overlays
   showing "Best Summer Collection" + "Shop Now".
10. Implement `CategoryListing.tsx` — 3-column layout (Men, Women,
    Accessories) with subcategory link lists and category images.
11. Implement `FeaturedProducts.tsx` — Left sidebar (4 featured items with
    thumbnails), right panel (filter tabs + product carousel with badges).
12. Implement `BlogSection.tsx` — "From The Blog" title with red underline,
    3 blog cards (image, category, excerpt, date).
13. Implement `Footer.tsx` — 5-column layout (About, Information, Customer
    Service, Extras, My Account) with Component Dock attribution in copyright.
14. Compose all sections in `App.tsx`, set document title "Voguish — Fashion
    Store".
15. Write tests (Vitest + RTL) for each component to achieve 100% coverage.
16. Run `scripts/verify-app.sh voguish` — must pass.
17. Commit, push PR, merge immediately.

## Section-by-Section Fidelity Notes

### Top Header
- 3 columns: left (search + selectors), center (contact + logo), right
  (social + user/cart).
- White background, `padding-bottom: 50px`.
- Phone: `+84 987 654 321`, email: `support@yourdomain.com`.
- Social icons: Facebook, Twitter, Pinterest, Instagram, YouTube (use
  lucide-react equivalents or inline SVGs for brand icons).

### Navbar
- Light bg, logo left, dropdown menus.
- Simplify: repo-standard responsive navbar with categories as a
  dropdown-trigger button. Links: Home, Shop, Blog, Contact.
- Include dark-mode toggle (repo standard).

### Hero Slider
- 2 slides, each with: background photo (picsum), heading "Best Summer
  Collection" (Montserrat bold 48px), "read more" button.
- Simplify to CSS-only carousel (no Revolution Slider dependency).
- Button: `#d91522` bg, white text, `padding: 0 40px`, `line-height: 48px`,
  `border-radius: 0`.

### Feature Promos
- 3-column: col-5 (large, Sale badge), col-4 (medium, 10% off badge),
  col-3 (small, image only).
- Hover overlay: semi-transparent dark bg + "Best Summer Collection" heading
  + "Shop Now" arrow link.
- Badge: circular (`border-radius: 50%`), `#d91522` bg, white text.

### Latest Products
- Owl Carousel simplified to CSS overflow-x scroll or simple JS carousel.
- 8 products in pairs per slide.
- Each card: product image, 3 action icons (compare, cart, wishlist),
  product name, price. Discounted: original strikethrough + sale price.
- Product data is static/placeholder.

### Big Promos
- 2 equal-width cards (col-6 each).
- Hover: white text "Best Summer Collection" + "Shop Now" link.

### Category Listing
- 3 columns: Men, Women, Accessories.
- Each: subcategory list (text links) + category image (picsum).
- Links: Down Jackets, Hoodies, Suits, Jeans, Casual Pants, Sunglass.

### Featured Products
- Left col-3 sidebar: "Featured Products" title + 4 media items (thumb +
  name + price).
- Right col-9: filter tabs (men's, Woman, Shoes, Bags) + product carousel.
- Filter tabs toggle visible products (simple CSS/JS filtering).

### Blog Section
- Centered title "From The Blog" with red underline (`#d91522`, 2px,
  positioned absolute bottom).
- 3 cards: image, category label "fashion", excerpt, date "21.09.2017".

### Footer
- 5-column grid: About (logo + text + social), Information, Customer
  Service, Extras, My Account.
- Top border: `1px solid #cccccc`.
- Copyright: centered, "Component Dock" link replacing Colorlib attribution.
