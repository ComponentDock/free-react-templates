# Shopfront — Implementation Tasks & Design Notes

**Source:** ColorLib E Shop (https://preview.colorlib.com/theme/e-shop/)
**New name:** shopfront
**Category:** E-Commerce

## Section Order (fidelity to source)

1. **Top Header Bar** — dark bar (#30323A), welcome text left, utility links right (Store, Newsletter, FAQ, language dropdown ENG, currency dropdown USD)
2. **Main Header** — logo left, full-width search bar (text input + category select + search icon button), account dropdown (My Account + Login/Join), cart widget (icon + qty badge + total), mobile hamburger
3. **Category Navigation** — "Categories" button with dropdown, horizontal menu links (Women's Clothing, Men's Clothing, Electronics, Home & Garden). Mega-dropdowns on hover with 3-column subcategory lists + promotional banner
4. **Hero Slider** — large carousel with product images, text overlay ("Bags sale", "Up to 50% Discount"), "Shop Now" CTA button
5. **Category Banners** — 4-column grid of category cards with image backgrounds and centered text overlays
6. **Deals of the Day** — product carousel with "HOT" label, star ratings, prices, add-to-cart buttons
7. **Latest Products** — 4-column product grid with images, ratings, prices, cart/wishlist/compare action buttons
8. **Picked For You** — similar product grid section
9. **Footer** — light gray (#F6F7F8) background, 4-column layout:
   - Column 1: Logo + description + social icons (Facebook, Twitter, Instagram, Google+, Pinterest)
   - Column 2: "My Account" links (My Account, My Wishlist, Compare, Checkout, Login)
   - Column 3: "Customer Service" links (About Us, Shipping & Return, Shipping Guide, FAQ)
   - Column 4: "Stay Connected" — email input + "Join Newsletter" button
   - Copyright bar centered at bottom

## Design Tokens

```
Body text:        #4A4E5A   (dark gray)
Headings/Strong:  #30323A   (very dark, nearly black)
Primary accent:   #F8694A   (orange/coral — buttons, hovers, accents)
Section grey bg:  #F6F7F8   (footer, alternating sections)
Border grey:      #DADADA   (borders, button outlines, input shadows)
Font family:      "Hind", sans-serif
Primary button:   #F8694A bg, white text, uppercase, no radius
Main button:      white bg, #30323A text, #DADADA inset shadow, no radius
Input style:      no border, #DADADA inset shadow, focus turns #F8694A
Link hover:       #F8694A
```

## Implementation Notes

- Replace Bootstrap grid with Tailwind responsive utilities
- Two-tier header: top bar is `bg-[#30323A] text-white`, main header has search bar
- Search bar: flex row with text input + select dropdown + icon button, styled with inset box-shadow (no border)
- Category nav: horizontal list with hover-triggered mega-dropdowns (CSS only or minimal state)
- Hero slider: CSS-based carousel or lightweight auto-scroll (no heavy lib needed)
- Product cards: no border-radius, star ratings with Font Awesome/Lucide icons, price display, 3 action buttons (cart, wishlist, compare)
- Buttons: all sharp corners (no border-radius), uppercase, bold, box-shadow inset effect on hover
- Footer: `bg-[#F6F7F8]` with dark text, 4-column grid
- All placeholder images: `https://picsum.photos/seed/shopfront-<n>/<w>/<h>`
- Icons: `lucide-react` (Search, ShoppingCart, Heart, GitCompare, Star, Facebook, Twitter, Instagram, Mail, MapPin, Phone)
- Footer MUST link https://www.componentdock.com/ (Component Dock branding)
