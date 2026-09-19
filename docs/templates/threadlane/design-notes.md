# Threadlane — Design Notes

## Section Structure (top to bottom)

1. **TopBar** — thin white bar, phone left, links right. Background #fff, text #777.
2. **Navbar** — absolute-positioned over hero. Logo left, nav center/right.
   Links: Home, Shop (dropdown), Blog (dropdown), Pages (dropdown), Contact.
   Style: white text on transparent (over dark hero), becomes sticky on scroll.
3. **HeroBanner** — full-width, min-height 900px. Background: seeded picsum
   image (dark overlay). Content centered: small subtitle "Fashion for",
   large heading "Upcoming Winter", lorem paragraph, blue (#1641ff) "View
   Collection" CTA button (square corners, uppercase).
4. **HotDeals** — two side-by-side panels. Each: dark background image,
   white heading "Hot Deals of this Month", white "shop now" link with
   underline. Equal-width columns, ~400px height each.
5. **ClientLogos** — horizontal row of gray partner logos on white bg.
   Simple flex row with gap, no carousel dependency (CSS auto-scroll or
   static row is fine).
6. **FeaturedProducts** — "Featured Products" centered heading (h2, dark
   text). 4-column grid, 2 rows = 8 cards. Each card: product image
   (picsum), overlay with cart icon on hover, product title below, price
   in bold. Light gray (#eeeeee) dividers between cards.
7. **Newsletter** — light lavender bg (#f9f9ff). Centered heading
   "Subscribe for Our Newsletter". Email input + blue submit button inline.
   Section padding: 100px top/bottom.
8. **Footer** — dark background (#222222). 4 columns:
   - About Us: paragraph + social icons (Facebook, Twitter, Behance, Dribbble)
   - Quick Links: navigation link list
   - Instagram Feed: 2x3 photo grid (picsum thumbnails)
   - Newsletter: email input + submit + social icons
   Bottom bar: copyright text, Component Dock link.

## Color Palette

| Token          | Hex       | Usage                           |
|----------------|-----------|---------------------------------|
| brand-blue     | #1641ff   | Buttons, links, hover states    |
| accent-gold    | #f8b600   | Sale badges, hot-deal highlights|
| text-primary   | #222222   | Headings, body text             |
| text-secondary | #777777   | Top bar text, captions          |
| bg-light       | #f9f9ff   | Newsletter section bg           |
| bg-white       | #ffffff   | Top bar, product cards          |
| border-gray    | #eeeeee   | Card dividers, borders          |

## Typography

- Font: Roboto (Google Fonts), loaded via <link> in index.html
- Headings: bold, dark (#222222)
- Body: regular weight, #777777 for secondary text

## Spacing

- Section padding: 100px top/bottom (`.section_gap`)
- Card gaps: 30px in product grid
- Footer column gaps: 30px

## Fidelity Notes

- Match 1:1 section order and count (7 sections + header + footer)
- Hero uses background image with dark overlay (use picsum + CSS overlay)
- Hot deals: two equal panels, not a carousel
- Products: static 4-col grid, no JS carousel needed
- Client logos: static row (no owl-carousel dependency)
- Newsletter: simple form, no complex styling
- Footer: 4-column grid, responsive (stacks on mobile)
