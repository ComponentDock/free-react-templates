# Lacecraft (ColorLib Solestyle) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-lacecraft`. Recreation name: **Lacecraft** (NEW name —
> the ColorLib source keeps its name "Solestyle").

## Source mapping

- **ColorLib item:** "Solestyle" (TEMPLATES.md line 1605; first unchecked item).
- **Source URL:** https://colorlib.com/wp/template/solestyle/
- **Preview URL:** https://preview.colorlib.com/theme/solestyle/ (HTTP 200, verified)
- **Preview CSS:** `_astro/Base.LD3yxqgO.css` (53KB, Tailwind v4 utility classes + custom properties)
- **Fonts:** Google Fonts — Outfit (display) + Inter (body)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/solestyle-template-1770211411401.jpg (AVIF despite .jpg extension)

## Section order (from live preview, 1:1 fidelity)

1. **Sticky Navbar** — brand "Stride" (→ "Lacecraft"), nav links (Shop, Categories, New Arrivals, Sale, About), wishlist icon, account link, promo banner at top
2. **Hero** — dark `gray-950` bg, `min-h-[90vh]`, "Step Into Your Best" headline, subtext, "Shop Now" CTA (orange), "Browse Categories" secondary link, stats row (50K+, 4.9, 300+, Free Shipping)
3. **Shop by Category** — white bg, 4 category cards (Running 48, Sneakers 86, Basketball 32, Sandals 24) with product counts and "Shop Now" links, "View All" link
4. **Featured Collection** — gray-50 bg, product grid cards with image, badge (BESTSELLER/NEW), discount %, name, category tag, star rating, price (with strikethrough original), sizes count, hover Add-to-Cart
5. **Benefits Strip** — gray-50 bg, top/bottom border, 4-column: Free Shipping, 60-Day Returns, Size Guarantee, Secure Checkout
6. **New Arrivals** — white bg, "Just Dropped" heading, product grid with NEW badges
7. **Customer Testimonials** — dark `gray-950` bg, testimonial cards with quotes, star ratings, author names/roles, aggregate stats (15K+ reviews, 98% recommend, avg rating)
8. **Newsletter CTA** — `primary-600` orange bg with gradient, email signup form, "Get 15% Off" button, app download badges (App Store + Google Play)
9. **Footer** — gray-50 bg, brand, nav links, payment icons, Privacy/Terms, Component Dock link

## Fidelity notes

### Section-by-section design details

1. **Navbar:** Sticky, `z-40`, white/95 background with `backdrop-blur-md` when scrolled. Promo banner strip above with scrolling text. Mobile: hamburger toggle with slide-out menu.

2. **Hero:** Full viewport height (`min-h-[90vh]`), dark `gray-950` background. Likely has a parallax product image. Headline uses Outfit font, very large. Stats row uses card-like containers with icons. Primary CTA is large rounded-lg button.

3. **Categories:** 4-column grid on desktop (lg:grid-cols-4), stacked on mobile. Each card has category image, name, product count, and "Shop Now" link. Light background with hover shadow effect.

4. **Featured Collection:** 4-column product card grid. Cards have: product image with hover overlay for Add-to-Cart, badge pill (BESTSELLER in primary, NEW in green), discount percentage in red, star rating in yellow, price with strikethrough for originals, size availability text. Cards have `rounded-lg` border radius.

5. **Benefits Strip:** Horizontal 4-column layout with icons (use lucide-react: Truck, RotateCcw, Ruler, ShieldCheck). Bordered top and bottom.

6. **New Arrivals:** Same card grid as Featured but with "NEW" badges. "Just Dropped" eyebrow text above "New Arrivals" heading.

7. **Testimonials:** Dark section, testimonial cards with white/gray text on dark bg. Quote marks, star ratings, author avatar (circle), name and role. Stats in a row below testimonials.

8. **Newsletter CTA:** Orange `primary-600` background with possible gradient. Centered text. Email input + submit button. App store badges below. Overflow hidden suggests decorative elements.

9. **Footer:** Light gray-50 background. Multi-column layout with brand, navigation, social links, payment icons. Component Dock attribution link required.

### Component structure (suggested)

```
src/
  App.tsx
  components/
    Navbar.tsx          (sticky header + promo banner + mobile menu)
    Hero.tsx            (dark hero with stats row)
    CategoryGrid.tsx    (4-column category cards)
    FeaturedProducts.tsx (product card grid)
    ProductCard.tsx     (reusable: image, badge, rating, price, sizes)
    BenefitsStrip.tsx   (4-column value props)
    NewArrivals.tsx     (product grid, reuses ProductCard)
    Testimonials.tsx    (review cards + aggregate stats)
    NewsletterCTA.tsx   (email form + app badges)
    Footer.tsx          (multi-column footer with Component Dock link)
```

### Image strategy

- Product images: `https://picsum.photos/seed/lacecraft-product-<n>/400/400`
- Category images: `https://picsum.photos/seed/lacecraft-cat-<n>/600/400`
- Hero background: gradient overlay on a picsum seed image
- Avatars: `https://picsum.photos/seed/lacecraft-avatar-<n>/80/80`
