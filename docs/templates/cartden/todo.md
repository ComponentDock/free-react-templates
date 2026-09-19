# CartDen — Implementation Todo

Source: ColorLib E Shop (slug: `e-shop`)
Preview: https://preview.colorlib.com/theme/e-shop/

## Section Order (top to bottom)

1. **TopBar** — dark charcoal strip, welcome text, utility links (Store, Newsletter, FAQ), language/currency selectors
2. **Header** — white bar, coral "CartDen" logo, category dropdown search, account icon, cart icon with count
3. **Navigation** — dark charcoal bar, coral "CATEGORIES" button, menu links with dropdowns (Home, Shop, Women, Men, Sales, Pages)
4. **CategorySidebar** — flyout/left sidebar listing product categories with chevron sub-indicators
5. **HeroSlider** — full-width image slider with overlay headline "NEW PRODUCT COLLECTION" + coral "SHOP NOW" CTA
6. **CategoryCards** — 3 equal-width image cards ("NEW COLLECTION") representing product categories
7. **DealsOfDay** — "Deals Of The Day" title, 4-column product grid with countdown timers, badges (New, -20%), prices, hover actions
8. **PromoBanners** — side-by-side "Hot Deal" (50% OFF) and "New Collection" banner cards
9. **LatestProducts** — "Latest Products" title, tabbed product grid, same card pattern as deals
10. **Footer** — dark charcoal, 4-column layout (logo/about, account links, customer service, newsletter), copyright bar with Component Dock link

## Design Notes

- **Brand color:** #F8694A (coral-orange) — use as primary in Tailwind @theme
- **Dark color:** #30323A — for header top bar, nav bar, footer bg
- **Body bg:** #F6F7F8 (light gray)
- **Font:** Hind via Google Fonts `<link>`
- **Buttons:** primary CTAs are rectangular (no border-radius); icon buttons are 50% rounded
- **Icons:** replace FontAwesome with lucide-react (search, heart, cart, user, chevron, etc.)
- **Images:** use `picsum.photos/seed/cartden-<n>/<w>/<h>` for all placeholder images

## Fidelity Checklist

- [ ] TopBar: dark bg, welcome text, 3 utility links, language + currency dropdowns
- [ ] Header: coral logo text, category dropdown in search, account + cart icons
- [ ] Navigation: dark bg, coral CATEGORIES button, dropdown menus
- [ ] HeroSlider: 3 slides, prev/next arrows, overlay text + CTA button
- [ ] CategoryCards: 3 equal cards, image + text overlay
- [ ] DealsOfDay: section title + subtitle, 4 product cards, countdown timer, badges, prices, hover actions
- [ ] PromoBanners: side-by-side cards, background images, CTA buttons
- [ | ] LatestProducts: section title, product cards (same pattern as deals)
- [ ] Footer: 4-column, newsletter form, copyright + Component Dock link
