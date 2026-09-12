# Template: Wattage (E-commerce)

## Purpose

Recreation of the ColorLib "Electro" e-commerce template.
- **Source slug:** `electro`
- **Preview URL:** https://preview.colorlib.com/theme/electro/
- **Source page:** https://colorlib.com/wp/template/electro/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** E-commerce — multi-category electronics storefront with product carousels, hot-deal countdown, newsletter, and full footer.

## Design tokens (extracted from preview CSS)

| Token              | Value                              | Notes                                    |
| ------------------ | ---------------------------------- | ---------------------------------------- |
| `--color-body`     | `#333333`                          | Default body text color                  |
| `--color-heading`  | `#2B2D42`                          | Headings, nav links, product names       |
| `--color-primary`  | `#D10024`                          | Brand red — buttons, accents, hover      |
| `--color-dark`     | `#15161D` / `#1E1F29`              | Dark backgrounds (newsletter, footer)    |
| `--color-grey-100` | `#FBFBFC`                          | Lightest grey — section alt backgrounds  |
| `--color-grey-200` | `#E4E7ED`                          | Borders, input borders, dividers         |
| `--color-grey-400` | `#B9BABC`                          | Muted text, secondary elements           |
| `--color-grey-600` | `#8D99AE`                          | Icons, placeholder text                  |
| `--color-white`    | `#FFFFFF`                          | Button text, card backgrounds            |
| **Font family**    | `Montserrat` (Google Fonts)        | Weights: 400 (body), 500 (links), 700 (headings/buttons) |
| **Primary button** | `padding: 12px 30px`               | `border-radius: 40px`, bg `#D10024`, white text, uppercase, font-weight 700 |
| **Link default**   | color `#2B2D42`, weight 500        | Transition 0.2s                          |
| **Link hover**     | color `#D10024`                    | No underline                             |
| **Input border**   | `1px solid #E4E7ED`                | Height 40px, white bg                    |

## Section structure (from live preview DOM)

1. **TopHeader** — Phone, email, address (left); currency selector, My Account (right). Dark background (#2B2D42). Font Awesome icons.
2. **MainHeader** — Logo (left, col-md-3); Search bar with category dropdown + text input + Search button (center, col-md-6); Wishlist + Cart with dropdown + Menu toggle (right, col-md-3). White background.
3. **Navigation** — Horizontal nav bar with category links: Home, Hot Deals, Categories, Laptops, Smartphones, Cameras, Accessories. Primary red (#D10024) active state. Dark background.
4. **ShopCollections** — 3-column grid (col-md-4) of collection cards: Laptop Collection, Accessories Collection, Cameras Collection. Each card has background image + overlay text + "Shop now" CTA arrow button.
5. **NewProducts** — Section title "New Products" + tabbed nav (Laptops, Smartphones, Cameras, Accessories). Horizontal product carousel (Slick-style) with product cards: image, sale/NEW labels, category, name, price (old price struck), star rating, action buttons (wishlist, compare, quick view), "Add to cart" bar.
6. **HotDeal** — Full-width dark section (#1E1F29 background image). Countdown timer (Days, Hours, Mins, Secs) in circle badges. "HOT DEAL THIS WEEK" heading (uppercase). Subtext "New Collection Up to 50% OFF". Primary CTA button.
7. **TopSelling** — Same tabbed structure as NewProducts. "Top selling" section title.
8. **ProductWidgets** — 3-column grid. Each column has "Top selling" title with a product widget carousel (compact card: image + category + name + price). Each column has its own slick nav.
9. **Newsletter** — Dark background (#2B2D42). "Sign Up for the NEWSLETTER" text. Email input + Subscribe button (primary red). Social follow icons (Facebook, Twitter, Instagram, Pinterest).
10. **Footer** — 4-column layout: About Us (description, address/phone/email with icons), Categories (links list), Information (links list), My Account (links list). Dark background.
11. **BottomFooter** — Payment method icons (Visa, Credit Card, PayPal, Mastercard, Discover, Amex). Copyright text. Links to Component Dock.

## Gherkin scenarios

### Scenario: TopHeader displays contact info and account links
  Given the user visits the home page
  Then the top header shows a phone number, email, and address
  And a currency selector and "My Account" link are visible on the right

### Scenario: MainHeader shows logo, search, and cart
  Given the user visits the home page
  Then a logo is displayed on the left
  And a search bar with category dropdown is in the center
  And a wishlist link and cart dropdown are on the right

### Scenario: Cart dropdown shows items and subtotal
  Given the user hovers over the cart icon
  Then a dropdown appears with product thumbnails, names, and prices
  And a subtotal is displayed
  And View Cart and Checkout links are shown

### Scenario: Navigation bar shows category links
  Given the user visits the home page
  Then a horizontal navigation bar shows: Home, Hot Deals, Categories, Laptops, Smartphones, Cameras, Accessories
  And the active link is highlighted in primary red

### Scenario: ShopCollections shows three collection cards
  Given the user visits the home page
  Then three collection cards are displayed in a row
  And each card shows a collection name and "Shop now" CTA

### Scenario: NewProducts section shows tabbed product carousel
  Given the user visits the home page
  Then the "New Products" section displays with category tabs (Laptops, Smartphones, Cameras, Accessories)
  And products are shown in a horizontal carousel with image, labels, name, price, rating, and action buttons
  And an "Add to cart" button appears below each product

### Scenario: Product labels show sale and new badges
  Given a product has a sale discount
  Then a red "-30%" label is displayed on the product image
  And a "NEW" badge is displayed for new products

### Scenario: HotDeal section shows countdown and CTA
  Given the user visits the home page
  Then a dark banner section displays a countdown timer with Days, Hours, Mins, Secs
  And the heading "HOT DEAL THIS WEEK" is shown
  And subtext "New Collection Up to 50% OFF" is displayed
  And a primary CTA button "Shop now" is visible

### Scenario: TopSelling section shows tabbed products
  Given the user visits the home page
  Then a "Top selling" section displays with category tabs and a product carousel

### Scenario: ProductWidgets shows three sidebar carousels
  Given the user visits the home page
  Then three product widget columns are displayed side by side
  And each column shows compact product cards with image, category, name, and price

### Scenario: Newsletter section collects emails
  Given the user scrolls to the newsletter section
  Then an email input and "Subscribe" button are displayed
  And social media follow icons (Facebook, Twitter, Instagram, Pinterest) are shown

### Scenario: Footer shows four-column layout
  Given the user visits the home page
  Then the footer displays four columns: About Us, Categories, Information, My Account
  And the About Us column shows address, phone, and email with icons
  And a bottom footer shows payment method icons and copyright text
  And a "Component Dock" attribution link is present

### Scenario: Responsive behavior on mobile
  Given the user views the page on a mobile viewport
  Then the navigation collapses to a hamburger menu
  And the grid layouts stack vertically
  And the cart and wishlist show badge counts

## Verification checklist

- [ ] Font loaded: Montserrat (400, 500, 700) from Google Fonts
- [ ] Brand color #D10024 used for primary buttons, active nav, hover states
- [ ] Heading color #2B2D42 applied to all headings and product names
- [ ] Primary button: rounded-full (40px radius), uppercase, white text on #D10024
- [ ] TopHeader: dark bg, contact info left, account links right
- [ ] MainHeader: logo, search bar with category select, wishlist + cart
- [ ] Navigation: horizontal nav with 7 category links
- [ ] ShopCollections: 3 image-overlay collection cards
- [ ] NewProducts: tabbed carousel with product cards (image, labels, price, rating, actions)
- [ ] HotDeal: dark banner with countdown, heading, subtext, CTA
- [ ] TopSelling: tabbed product carousel (same layout as NewProducts)
- [ ] ProductWidgets: 3-column compact product widget carousels
- [ ] Newsletter: email input, subscribe button, social icons on dark bg
- [ ] Footer: 4-column layout (About Us, Categories, Information, My Account)
- [ ] BottomFooter: payment icons, copyright, Component Dock link
- [ ] Responsive: mobile nav hamburger, stacking grids
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images use picsum.photos with deterministic seeds
