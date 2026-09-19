# Claymore — Implementation Tasks & Design Notes

**Source:** ColorLib Fashe (https://preview.colorlib.com/theme/fashe/)
**New name:** claymore
**Category:** E-Commerce

## Section Order (fidelity to source)

1. **Announcement Bar** — dark background (scheme 3: rgb(20,20,20)), rotating text messages. Use `setInterval` or CSS animation for rotation. Hidden on mobile optional.
2. **Sticky Header** — white bg, hamburger (mobile) + logo "Claymore." (with terracotta dot accent) + horizontal nav (Home, Shop dropdown, Product, Blog dropdown, About, Contact) + search/account/cart icons. Sticky `position: sticky top-0 z-50`.
3. **Hero Banner** — full-width with background image, dark overlay (scheme 3), centered content: "New season" eyebrow text (uppercase, small), "New season essentials" large headline (responsive clamp), subtext, "Shop now" solid dark button.
4. **Marquee Ticker** — scrolling text strip (scheme 3 dark bg), messages: "Free shipping over $100", "30 day returns", "Carbon neutral delivery", "Natural fibres only". CSS `@keyframes marquee` with `translateX(-50%)`.
5. **Shop by Category** — section heading "Shop by category", 3 collection cards (Clothing, Jewellery, Bags). Each: portrait image, category name, arrow icon. Responsive: 3-col → 2-col → 1-col.
6. **New Arrivals** — eyebrow "Just landed", heading "New arrivals", "View all" outline button. 4-column product grid. Each card: primary image with hover swap to secondary image, "Quick add" button overlay on hover, title link, price (with sale price + strikethrough for sale items), color swatch dots. "Sale" badge on discounted items.
7. **Made to Last** — image-with-text section (scheme 2 beige bg). 2-column grid: landscape image left, content right (heading "Made to last", description paragraph, "Our story" outline button).
8. **Why Shop With Us** — "Why shop with us" heading, 3-column grid: Free shipping, 30 day returns, Made responsibly. Each with h3 title + description text.
9. **Journal** — "Journal" heading, "All posts" outline button, 3 article cards. Each: landscape image, meta line (date + category), title link, excerpt paragraph.
10. **Footer** — 4-column grid: Brand column (heading + description + social icons Instagram/Facebook/Pinterest), Shop column (Clothing, Bags, Accessories, Jewellery, Shoes), Help column (Contact, Shipping, Returns, Size guide, FAQ), Newsletter column (heading + description + email input + Subscribe button). Bottom bar with copyright.

## Design Tokens

```
Accent:          rgb(200,85,61) = #c8553d   (terracotta)
Accent (dark):   rgb(226,160,135) = #e2a087 (lighter terracotta on dark bg)
Scheme 1 bg:     rgb(255,255,255)           (white)
Scheme 2 bg:     rgb(244,242,238)           (warm beige)
Scheme 3 bg:     rgb(20,20,20)              (near-black)
Text (light):    rgb(20,20,20)              (near-black)
Text (dark):     rgb(244,242,238)           (off-white)
Border:          rgb(228,228,228) = #e4e4e4 (light gray)
Font:            "Assistant", sans-serif
Heading weight:  700
Body weight:     400
Border radius:   0px (sharp corners everywhere)
Button:          Dark bg (#141414), white text, no radius
Outline button:  Transparent bg, dark border, dark text
Page width:      1440px max
Section padding: clamp(2.5rem, 6vw, 5rem)
```

## Implementation Notes

- Use CSS custom properties for color schemes (match the 4 schemes from source)
- Sharp corners: all elements use `rounded-none` (Tailwind) — no border-radius anywhere
- Announcement bar: CSS keyframe animation or `useState` + `useEffect` for text rotation
- Hero banner: `background-image` + dark overlay div, content centered with flex
- Marquee: CSS `@keyframes marquee` translating track by -50%, duplicated content group
- Collection cards: portrait aspect ratio images, overlay with category name + arrow
- Product cards: dual images (primary/secondary), hover swap via CSS or state, quick-add overlay
- Color swatches: small circular `span` elements with background-color
- Sale badge: absolute-positioned badge on card
- Image-with-text: 2-column grid on desktop, stacked on mobile
- Footer: 4-column responsive grid
- All placeholder images: `https://picsum.photos/seed/claymore-<n>/<w>/<h>`
- Icons: `lucide-react` (Search, User, ShoppingBag, ChevronRight, Instagram, Facebook, X)
- Footer MUST link https://www.componentdock.com/ (Component Dock branding)
