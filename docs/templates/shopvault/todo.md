# ShopVault — Implementation Tasks & Design Notes

**Source:** ColorLib Estore (https://preview.colorlib.com/theme/estore/)
**New name:** shopvault
**Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Section Order (top to bottom)

1. Header (sticky, two-tier: top info bar + main nav)
2. Hero Slider (2 slides, background image, model image, text + CTA)
3. Categories (4-card grid)
4. Latest Products (tabbed filter + 3-col product grid)
5. Featured Best Products (mixed layout: 2 large images + 3 small cards)
6. Best Collection Banner (full-width bg image + text + model)
7. Shop Methods (3-column info bar with icons)
8. Gallery (5-image horizontal strip)
9. Footer (4 columns + bottom bar with copyright + social)

## Section-by-Section Fidelity Notes

### 1. Header

- **Top bar:** black background (#000), white text. Left: flag icon + country dropdown + phone number. Right: My Account, Wish List, Shopping, Cart, Checkout links.
- **Bottom bar:** white bg, sticky on scroll. Logo left, main nav center (Home, Categories, Latest w/ dropdown, Blog w/ dropdown, Pages w/ dropdown, Contact), right: search input, wishlist heart, cart icon, Sign In pill button.
- **Mobile:** hamburger menu, stacked layout.
- **Component split:** `Header.tsx` (top bar + bottom bar), possibly sub-components for TopBar, MainNav, SearchBar.

### 2. Hero Slider

- **Full-width slider** with background image. Each slide: left = model/person image, right = text block.
- **Text:** "60% Discount" small label, "Winter Collection" heading (Playfair Display, large), "Best Cloth Collection By 2020!" subtitle, "Shop Now" pill button.
- **Implementation:** Use a simple CSS-based slider or state-driven slides. Background image via `picsum.photos/seed/shopvault-hero/1920/800`.
- **Model image:** `picsum.photos/seed/shopvault-model/600/800`.

### 3. Categories

- **4 cards** in a responsive grid (2-col mobile, 4-col desktop).
- Each card: product category image + caption below.
- Section heading: "Browse Top Categories" (Playfair Display).
- Images: `picsum.photos/seed/shopvault-cat-{1..4}/400/400`.

### 4. Latest Products

- **Tabs:** All, New, Featured, Offer. Active tab has blue bottom border (#2577fd).
- **Product grid:** 3 columns. Each card: image, 5-star rating (gold #dca73a), product name, price row (current + strikethrough original).
- **"New" badge:** small label overlay on some product images.
- **Section heading:** "Latest Products" (Playfair Display).
- **Images:** `picsum.photos/seed/shopvault-prod-{1..8}/400/500`.

### 5. Featured Best Products

- **Layout:** 2-column on desktop. Left half: large product image. Right half: large product image + 3 smaller product cards stacked below.
- Cards have star ratings and prices.
- **Images:** `picsum.photos/seed/shopvault-best-{1..5}/600/600`.

### 6. Best Collection Banner

- **Full-width section** with background image (dark overlay).
- Left text: "60% Discount" label, "Winter Collection" heading, description paragraph, "Shop Now" pill button.
- Right: model image (positioned absolute/relative).
- Background: `picsum.photos/seed/shopvault-banner/1920/600`.
- Model: `picsum.photos/seed/shopvault-model2/600/600`.

### 7. Shop Methods

- **3-column layout**, centered content.
- Each: icon (use lucide-react equivalents: Package, Shield, RefreshCw), title, description.
- Icons: 40px, color #282828. Titles: 20px, Poppins, weight 600.
- No background (white section).

### 8. Gallery

- **5-image horizontal strip**, full-width, equal columns (20% each on desktop).
- Images: `picsum.photos/seed/shopvault-gallery-{1..5}/400/400`.
- No text overlay, pure image grid.

### 9. Footer

- **Dark background** (use dark navy or near-black).
- **4 columns:** Logo + description paragraph (gray #868c98), Quick Links (About, Offers & Discounts, Get Coupon, Contact Us), New Products (Woman Cloth, Fashion Accessories, Man Accessories, Rubber made Toys), Support (FAQ, Terms & Conditions, Privacy Policy, Report a Payment Issue).
- **Bottom row:** copyright left, social icons right (Twitter, Facebook, Behance, Globe → use lucide-react equivalents).
- **Component Dock link** must appear in footer.

## Implementation Notes

- Copy `apps/abjure` or any simple existing app as the base scaffold.
- Theme tokens go in `src/index.css` using `@theme` block.
- All section components in `src/components/`.
- `App.tsx` composes sections in order.
- No ColorLib references in any app file.
- Use `cn()` from `packages/ui` for class merging.
- `vite.config.ts` must include `injectUiSource()`.
