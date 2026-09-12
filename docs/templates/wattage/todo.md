# Wattage — Implementation TODO & Design Notes

Recreation of ColorLib Electro (https://preview.colorlib.com/theme/electro/).

## Section order (from live preview, top to bottom)

1. TopHeader
2. MainHeader
3. Navigation
4. ShopCollections (3 cards)
5. NewProducts (tabbed carousel)
6. HotDeal (countdown banner)
7. TopSelling (tabbed carousel)
8. ProductWidgets (3-column widget carousels)
9. Newsletter
10. Footer (4 columns)
11. BottomFooter (payment icons + copyright)

## Fidelity notes

### TopHeader
- Dark background (#2B2D42)
- Left side: phone icon + number, envelope icon + email, map-marker icon + address
- Right side: dollar icon + "USD", user icon + "My Account"
- Uses Font Awesome icons → use lucide-react equivalents

### MainHeader
- White background, container layout
- Left (col-md-3): Logo image → use text logo "Wattage" or placeholder
- Center (col-md-6): Search form with category <select> dropdown + text input + "Search" button
- Right (col-md-3): Heart icon "Your Wishlist" with badge count (2), Shopping cart icon "Your Cart" with badge count (3) and dropdown panel showing 2 product previews + subtotal + View Cart / Checkout buttons
- Mobile: hamburger menu toggle visible on small screens

### Navigation
- Dark background (#2B2D42)
- Horizontal nav links: Home, Hot Deals, Categories, Laptops, Smartphones, Cameras, Accessories
- Active state: primary red (#D10024) text or bottom border

### ShopCollections
- 3 equal columns (col-md-4 col-xs-6)
- Each card: background image with dark overlay, collection name (white, bold, line breaks), "Shop now →" CTA (primary button style with arrow icon)
- Collections: Laptop, Accessories, Cameras

### NewProducts
- Section title "New Products" (left), tab nav (right): Laptops, Smartphones, Cameras, Accessories
- Horizontal product carousel (CSS scroll-snap or embla to replace Slick)
- Product card: image, overlay labels (sale: red badge "-30%", new: green badge "NEW"), category text, product name (h3), price with old price struck, star rating (5 stars using lucide Star/StarHalf), action buttons row (heart, compare/arrows, eye icons), "Add to cart" bar at bottom
- 5 products per slide group

### HotDeal
- Full-width section, dark background image with overlay
- Centered content: countdown timer (4 circles: Days, Hours, Mins, Secs with h3 number + span label)
- "HOT DEAL THIS WEEK" uppercase heading
- "New Collection Up to 50% OFF" subtext
- Primary CTA button "Shop now"

### TopSelling
- Same structure as NewProducts with "Top selling" title

### ProductWidgets
- 3-column layout (col-md-4)
- Each column: "Top selling" title with left/right nav arrows, product widget carousel
- Compact product card: image + category + name + price
- 3 products per slide, 2 slides per widget

### Newsletter
- Dark background (#2B2D42)
- "Sign Up for the NEWSLETTER" text
- Email input + "Subscribe" button (with envelope icon)
- Social follow icons: Facebook, Twitter, Instagram, Pinterest (use lucide-react)

### Footer
- 4-column layout (col-md-3 each)
- About Us: paragraph text + address/phone/email list items with icons
- Categories: links list (Hot deals, Laptops, Smartphones, Cameras, Accessories)
- Information: links list (About Us, Contact Us, Privacy Policy, Orders and Returns, Terms & Conditions)
- My Account: links list (My Account, Wishlist, Track My Order, Help)
- Dark background, light text

### BottomFooter
- Centered: payment icons row (Visa, Credit Card, PayPal, Mastercard, Discover, Amex) → use lucide icons or text
- Copyright text + Component Dock attribution link

## Component mapping

| Original class        | React component       | Notes                        |
| --------------------- | --------------------- | ---------------------------- |
| `#top-header`         | `TopHeader`           | Contact info + account links |
| `#header`             | `MainHeader`          | Logo, search, cart           |
| `#navigation`         | `Navigation`          | Horizontal nav bar           |
| `.section` (shops)    | `ShopCollections`     | 3 collection cards           |
| New Products section  | `NewProducts`         | Tabbed product carousel      |
| `#hot-deal`           | `HotDeal`             | Countdown banner             |
| Top Selling section   | `TopSelling`          | Tabbed product carousel      |
| Product widgets       | `ProductWidgets`      | 3-column widget carousels    |
| `#newsletter`         | `Newsletter`          | Email form + social icons    |
| `#footer`             | `Footer`              | 4-column footer              |
| `#bottom-footer`      | `BottomFooter`        | Payment icons + copyright    |

## Design token Tailwind mapping

```css
@theme {
  --color-brand: #D10024;
  --color-heading: #2B2D42;
  --color-body: #333333;
  --color-dark: #15161D;
  --color-surface: #1E1F29;
  --color-grey-100: #FBFBFC;
  --color-grey-200: #E4E7ED;
  --color-grey-400: #B9BABC;
  --color-grey-600: #8D99AE;
}
```

## Pitfalls

- **Carousel:** Slick.js is jQuery-based → replace with embla-carousel-react or CSS scroll-snap for React-native solution
- **Countdown timer:** Implement as a live React hook (useState + useEffect + setInterval), not static HTML
- **Cart dropdown:** Complex sub-component with product list, subtotal, and buttons → test interactions thoroughly
- **Tab switching:** Implement with React state (no Bootstrap jQuery tabs)
- **Responsive:** Original uses Bootstrap grid → translate to Tailwind grid/cols breakpoints
