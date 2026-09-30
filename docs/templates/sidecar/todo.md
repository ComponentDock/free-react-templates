# Sidecar — Prep Notes

Source: ColorLib Sidebar V09 (colorlib-sidebar-v09)
Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v09/ (404 — design from screenshot)

## Section order (1:1 from screenshot)

1. **Header** — thin top bar, right-aligned bag icon with "$150 / 3 items"
2. **Main content grid** — 2-column blog post cards (avatar + title + date)
3. **Shopping bag sidebar** — slides in from right, opens on bag icon click
   - Close button (X) + "YOUR BAG" heading
   - Product list: thumbnail, name, price, Remove link per item
   - Divider
   - Subtotal row + Checkout button

## Design tokens

- Accent: #1a73e8 (Google Blue)
- Body: #26282b
- Background: #ffffff
- Sidebar BG: #f5f5f5 or #ffffff with border-left
- Font: system sans-serif stack
- Button: subtle 4px radius, dark bg for Checkout
- Borders: #e0e0e0

## Fidelity notes

- The sidebar is a slide-in panel (transform/transition), not a permanent layout column
- Blog post grid uses circular avatars (~60px), post titles are bold, dates are light gray
- Product thumbnails are small (~80px square), no border radius
- "Remove" links are plain text, underlined, blue
- Checkout button is dark (#26282b) with white text, full-width or near-full-width
- The sidebar has a close button (X) in the top-left corner
- No parallax, no hero section, no footer visible in the screenshot — this is a sidebar component demo, not a full page

## Implementation notes

- State management: use React state for cart items array, sidebar open/close toggle
- CartContext or useReducer for add/remove/update operations
- Sidebar animation: CSS transform translateX with transition
- Product thumbnails: picsum.photos placeholder images
- Author avatars: picsum.photos placeholder images
- No external dependencies needed beyond lucide-react for icons (X, ShoppingBag, Trash2)
