# SoleShine — Design Notes & Implementation Outline

## Source

- **ColorLib:** Solestyle (`solestyle`)
- **Preview:** https://preview.colorlib.com/theme/solestyle/
- **New name:** `soleshine` (e-commerce shoe store)

## Section Order (top to bottom)

1. Announcement Bar — orange gradient, white text, centered
2. Navbar — sticky, logo left, nav links center, icons right (search, account, cart)
3. Hero — full viewport dark (gray-950), gradient overlay, headline + CTAs + floating shoe
4. Shop by Category — 6-column grid cards with dark overlay
5. Featured Collection — gray-50 bg, product cards grid (2/3 cols), ratings + prices
6. Trust Badges — white bg, 4 icon+label badges in a row
7. New Arrivals — dark (gray-950) bg, product cards with hover overlay
8. Customer Reviews — dark bg, star ratings, testimonial cards
9. Newsletter CTA — dark bg, glowing orange orb, email signup
10. Footer — dark, links + Component Dock attribution

## Design Tokens Summary

- **Primary:** Orange (#f97316) — buttons, badges, glows, announcement bar
- **Display font:** Outfit (headings, hero)
- **Body font:** Inter (body, nav, cards)
- **Hero bg:** Gray-950 with gradient to primary-950, blur orbs at 10% opacity
- **Rounded:** rounded-xl for cards/buttons, rounded-2xl/3xl for containers
- **Dark sections:** gray-950 bg for hero, new arrivals, reviews, CTA, footer
- **Light sections:** white for categories, gray-50 for featured, white for trust

## Component Architecture

```
src/
  App.tsx
  components/
    AnnouncementBar.tsx
    Navbar.tsx
    Hero.tsx
    ShopByCategory.tsx
    FeaturedCollection.tsx
    TrustBadges.tsx
    NewArrivals.tsx
    CustomerReviews.tsx
    NewsletterCTA.tsx
    Footer.tsx
  index.css          (Tailwind + @theme tokens)
  main.tsx
```

## Fidelity Notes

- Hero floating animation: CSS keyframe `float` (translateY + rotate)
- Sale badge: animated pulse (2s ease-in-out)
- Category cards: overlay gradient from gray-900 to transparent (top-to-bottom)
- Product cards: hover lift (translateY(-4px)) + shadow + image quick-view overlay
- Navbar scroll: data-header attribute toggles `.scrolled` class (white/95% bg + shadow + blur)
- Star ratings: text-yellow-400 for filled, gray for empty
- Price display: original price in gray-500 line-through, current in gray-900 bold
- Trust badge icons: use lucide-react (Truck, RotateCcw, Ruler, ShieldCheck)
- Images: picsum.photos/seed/soleshine-N/W/H for determinism

## Open Questions for Implementer

- Hero shoe image: use a high-quality shoe photo or abstract shoe silhouette
- Mobile grid: categories go to 2-col, products to 1-col on small screens
- Newsletter: simple email input + button (no backend)
