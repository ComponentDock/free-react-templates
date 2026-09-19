# Modehaus — Implementation Tasks & Design Notes

Source: ColorLib "Malefashion" (https://colorlib.com/wp/template/malefashion/)
Preview: https://preview.colorlib.com/theme/malefashion/
New name: modehaus
Spec: openspec/specs/template-modehaus/spec.md

## Section order (1:1 with original)

1. Header
   - Top bar: promo text left, utility links right (Sign In, FAQs, currency)
   - Main header: logo left, centered nav (Home, Shop, Pages, Blog, Contacts), icons right (search, heart, cart with price)
   - Mobile: hamburger → offcanvas menu

2. Hero
   - Full-width carousel (owl-carousel in original → use a simple React carousel)
   - Each slide: left text block (subtitle in red, h2, description, CTA button), right image
   - Social icons below CTA
   - Left/right navigation arrows
   - At least 2 slides with different images and copy

3. Banner
   - 3 cards in a row: large first card (offset left), two smaller stacked cards
   - Each: product image + text overlay with heading + "Shop now" link
   - Middle card styled differently (larger/offset)

4. Product
   - Filter tabs: Best Sellers | New Arrivals | Hot Sales
   - 4-column grid of 8 product cards
   - Each card: image, product name, price, hover color swatches
   - "New" label badge on new-arrival items
   - Filter logic: show/hide by category

5. Categories
   - Warm-grey background (#f3f2ee)
   - Left: heading "Clothing Collections 2030" + "Shop now" link
   - Right: product image
   - Countdown timer below (days/hours/minutes/seconds)

6. Instagram
   - 5 equal-width images in a row
   - Instagram icon overlay on hover

7. Blog
   - Section title: "Latest News" (red) / "Fashion New Trends" (h2)
   - 3 blog cards: thumbnail, date, title, "Read More"

8. Footer
   - Dark background (#111111)
   - 4 columns: About/Logo, Quick Links, Contact, Newsletter
   - Newsletter: email input + subscribe button
   - "Made with Component Dock" attribution

## Design notes

- **Palette:** black (#000), near-black (#111), red accent (#e53637), warm grey (#f3f2ee), body text (#3d3d3d), muted (#b7b7b7, #999)
- **Typography:** Nunito Sans — load via Google Fonts `<link>` in index.html. Headings 700 weight. Section subtitles: uppercase, letter-spacing 2px, 14px, red.
- **Buttons:** black pill (60px radius), 14px/30px padding, uppercase, letter-spacing 4px. Hover: opacity transition.
- **Spacing:** generous vertical padding on sections (spad class in original = ~60px top/bottom). Container max-width ~1200px centered.
- **Product cards:** white bg, image fills card, hover reveals color dot row. Clean minimal style.
- **No parallax** in this template — flat layout throughout.
- **Image seeds:** use picsum.photos/seed/modehaus-<n> for all placeholders.

## Component outline

```
src/
  main.tsx
  App.tsx
  index.css          (Tailwind entry + @theme tokens)
  components/
    Header.tsx       (TopBar + MainNav + MobileMenu)
    Hero.tsx         (Carousel with slides)
    Banner.tsx       (3-column banner cards)
    Product.tsx      (Filter tabs + 4-col grid)
    ProductCard.tsx  (Individual product card with hover)
    Categories.tsx   (Deal section with countdown)
    Instagram.tsx    (5-col image grid)
    Blog.tsx         (3-col blog cards)
    Footer.tsx       (4-column footer + newsletter)
    Newsletter.tsx   (Email input + subscribe)
```
