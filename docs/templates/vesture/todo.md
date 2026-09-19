# Vesture — Implementation Notes

Source: ColorLib "Fashe" — https://preview.colorlib.com/theme/fashe/

## Section order (implement top-to-bottom)

1. AnnouncementBar — dark bg, scrolling marquee text
2. Navbar — logo + nav links + cart icon, sticky
3. Hero — full-width background image, overlay text + CTA
4. ShopByCategory — 3 image cards (Clothing, Jewellery, Bags)
5. NewArrivals — product grid, 6 cards with image/title/price/Quick add
6. MadeToLast — editorial split (text left, image right), warm beige bg
7. WhyShopWithUs — 3 feature cards with icon, title, description
8. Journal — 2-3 blog cards with image/date/category/title/excerpt
9. Footer — 4-column layout, newsletter form, copyright, Component Dock link

## Fidelity notes

- Brand color #C8553D (terracotta) — use as accent throughout
- Font: Assistant via Google Fonts link in index.html
- Sharp corners (border-radius: 0px) — no rounded buttons/cards
- Section bg alternation: white (#FFF) → warm beige (#F4F2EE) → dark (#141414)
- Announcement bar: dark bg with white text, scrolling effect
- Product cards: image top, title, price, "Quick add" button (black bg, white text)
- Sale prices: show original crossed out + sale price
- Footer: dark bg, 4 columns, newsletter email input
- Mobile: hamburger nav, single-column grids, stacked cards
- Placeholder images: picsum.photos/seed/vesture-n/W/H
- No ColorLib references in any app file
