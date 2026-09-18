# Draped — Tasks & Design Notes

## Source

- **ColorLib slug:** dealers
- **Preview URL:** https://preview.colorlib.com/theme/dealers/
- **Screenshot:** dealers-free-template.jpg

## Section order (implementation sequence)

1. **Navbar** — "Draped" logo + Collection/Shop/Catalogs/Contact + icons (search, heart, bag)
2. **Hero** — product name "Madewell" + subtitle + pricing display + "Shop Now" buttons + product image
3. **Product grid** — 3-column cards (image, title, collection label, price)
4. **Featured banner 1** — "#New Summer Collection 2019" + "Jacket" + "Shop Now" + image
5. **Collections carousel** — "Collections" heading + horizontally scrollable product cards
6. **Featured banner 2** — "#New Summer Collection 2019" + "New Denim Coat" + "Shop Now" + image
7. **Footer** — About Us, Newsletter, Quick Links, Contact Info + Component Dock link

## Design token reference (from css/style.css)

| Token              | Value                                   |
|--------------------|-----------------------------------------|
| Primary color      | #207dff (blue — buttons, links)         |
| Dark accent        | #25262a (btn-black background)          |
| Heading text       | #333333                                 |
| Body text          | #737b8a                                 |
| Light bg           | #f4f5f9 (section alt bg)                |
| Near-white bg      | #f9f9f9                                 |
| Border color       | #e6e8ed                                 |
| Font               | Rubik (400/700) via Google Fonts         |
| Button radius      | 0 (square/sharp)                        |
| Button styles      | .btn-primary (blue), .btn-outline-primary (blue outline), .btn-black (dark) |
| Sale tag bg        | #ffe5ae (gold/yellow)                   |
| Footer bg          | white with top border                   |

## Fidelity notes

- Navbar is white bg with logo text, not an image — simple text logo "Draped".
- Hero: left-aligned text with large product name, subtitle, and pricing
  display (current price bold, old price strikethrough). Right side has a
  product image (transparent PNG style — use a seeded picsum photo).
- Product grid: no gutters, 3 columns on desktop, cards have image on top
  with item-info overlay (title, collection label, price).
- Featured banners: full-width with background image and overlay, content on
  left with large heading and black button. Use seeded picsum photos as
  backgrounds with dark overlays.
- Collections carousel: implement as CSS horizontal scroll-snap instead of
  owl-carousel. Reuse the same product card component.
- Footer: light bg with top border, 4 columns (About, Newsletter, Quick
  Links, Contact). Newsletter has email input. Replace ColorLib attribution
  with ComponentDock link.
- All buttons are square (border-radius: 0) — this is a distinctive design
  choice, keep it sharp.
- Primary blue (#207dff) is used for links, active states, and primary buttons.
- Font: Rubik is a geometric sans-serif — clean and modern feel.

## Components to reuse from packages/ui

- Button / ButtonLink (for CTA buttons)
- Card (for product cards)
- Badge (for sale tag)
- cn (class merging utility)

## Images

All placeholder images: `https://picsum.photos/seed/draped-<n>/<w>/<h>`
