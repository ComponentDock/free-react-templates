# Template: Stridecraft (Footwear / E-commerce)

## Purpose

Recreation of ColorLib "Solestyle" — a modern footwear e-commerce template.

- **Source:** https://colorlib.com/wp/template/solestyle/
- **Preview:** https://preview.colorlib.com/theme/solestyle/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Dark mode:** yes (class-based toggle)

## Design tokens

Extracted from the live preview CSS (Tailwind v4.3.3 theme layer):

| Token | Value |
|---|---|
| Primary brand color | `#ea580c` (orange-600) — used for CTAs, badges, links |
| Primary accent | `#f97316` (orange-500) — hover states, gradients |
| Dark background | `gray-950` (#030712) — hero, trending, testimonials sections |
| Dark surface | `gray-900` (#111827) — card backgrounds, footer dark |
| Light surface | `white` / `gray-50` (#f9fafb) |
| Font body | Inter (sans-serif, weights 400-700) |
| Font display | Outfit (sans-serif, weights 400-800) |
| Border radius (cards) | `rounded-2xl` (1rem) |
| Border radius (buttons) | `rounded-full` (pill) for hero CTA; `rounded-lg` (0.5rem) for standard |
| Announcement bar gradient | `from-primary-600 to-primary-500` |
| CTA button style | White bg with primary text on dark sections; primary bg on light sections |

## Section structure (top → bottom)

1. **AnnouncementBar** — gradient orange bar, promo text, coupon code
2. **Header** — sticky, white/95 bg, logo (lightning bolt icon + "Stride"), nav (Shop, Categories, New Arrivals, Sale, About), action icons (search, dark mode toggle, wishlist, cart with badge)
3. **MobileMenu** — slide-down nav for small screens
4. **SearchModal** — overlay with input, popular tags, Esc to close
5. **Hero** — full-height dark section (min-h-[90vh]), gradient mesh bg, headline "Step Into Style", subtext, two CTAs (Shop Now primary pill, View Collection ghost), featured product card with image/rating/price
6. **FeaturesBar** — dark bg, 3 columns: "100+ Styles Available", "Free Shipping over $75", "30-Day Guarantee"
7. **TrendingProducts** — dark bg, section header with badge, 6-column product grid (image, category, name, rating stars, price, color swatches, size count), each card has add-to-cart + wishlist buttons
8. **Testimonials** — dark bg, section header, 3-column review cards (5 stars, quote, author photo+name+role), trust badges row (50K+, 4.9/5, 15K+, 98%)
9. **NewsletterCTA** — primary-600 bg with grid pattern overlay, "Ready to Step Up Your Game?" headline, email form with pill button "Get 15% Off", app store badges (Apple, Google Play)
10. **Footer** — light bg (gray-50), newsletter form, 4-column grid (brand+socials, Shop links, Help links, About links), bottom bar (copyright, Privacy, Terms, payment icons)

## Gherkin scenarios

### Scenario: Announcement bar displays promo text
```
Given the page loads
When the announcement bar is visible
Then it shows "Free shipping on orders over $75"
And it shows the coupon code "STRIDE20"
```

### Scenario: Sticky header navigation
```
Given the user scrolls down
Then the header remains sticky at the top
And the header has a backdrop blur effect
```

### Scenario: Header nav links
```
Given the header is rendered
When I look at the desktop navigation
Then I see links for Shop, Categories, New Arrivals, Sale, and About
```

### Scenario: Dark mode toggle
```
Given the page is in light mode
When I click the dark mode toggle button
Then the page switches to dark mode
And the toggle icon changes to sun
```

### Scenario: Mobile menu opens and closes
```
Given the viewport is mobile
When I click the hamburger menu button
Then the mobile menu slides open
And all nav links are visible
When I click a nav link
Then the mobile menu closes
```

### Scenario: Search modal opens and closes
```
Given the page is loaded
When I click the search icon
Then the search modal overlay appears
And the search input is focused
When I press Escape
Then the search modal closes
```

### Scenario: Hero section renders
```
Given the hero section is visible
Then the headline says "Step Into Style"
And there are two CTA buttons: "Shop Now" and "View Collection"
And the featured product card shows a rating of 4.8
```

### Scenario: Features bar displays three features
```
Given the features bar is visible
Then it shows "100+ Styles Available"
And it shows "Free Shipping over $75"
And it shows "30-Day Guarantee"
```

### Scenario: Product cards in trending section
```
Given the trending products section is loaded
Then there are 6 product cards displayed
And each card has an image, category label, product name, star rating, price, color swatches, and size count
And each card has an "Add to Cart" button and a wishlist heart icon
```

### Scenario: Add to cart interaction
```
Given a product card is visible
When I click the "Add to Cart" button
Then a toast notification appears saying "Added to cart!"
And the cart badge count increments by 1
```

### Scenario: Wishlist toggle interaction
```
Given a product card is visible
When I click the wishlist heart icon
Then the heart fills with red color
And a toast notification says "Added to wishlist!"
When I click it again
Then the heart becomes unfilled
And a toast notification says "Removed from wishlist"
```

### Scenario: Testimonials section
```
Given the testimonials section is visible
Then there are 3 review cards
And each card has 5 yellow stars
And each card has a quote, author name, role, and photo
```

### Scenario: Trust badges
```
Given the trust badges row is visible
Then it shows "50K+" Happy Customers
And it shows "4.9/5" Average Rating
And it shows "15K+" 5-Star Reviews
And it shows "98%" Would Recommend
```

### Scenario: Newsletter signup form
```
Given the newsletter CTA section is visible
Then there is an email input field
And there is a "Get 15% Off" submit button
```

### Scenario: Footer structure
```
Given the footer is visible
Then it has a newsletter form with "Join the Stride Club"
And it has 4 columns: Brand, Shop, Help, About
And the Brand column has social media icon links (Instagram, Facebook, Twitter, YouTube, TikTok)
And the bottom bar shows copyright, Privacy link, Terms link, and payment icons (Visa, Mastercard, Amex, Apple Pay)
```

### Scenario: Footer links to Component Dock
```
Given the footer renders
Then it includes a link to https://www.componentdock.com/
```

## Verification checklist

- [ ] Announcement bar renders with promo text and coupon code
- [ ] Sticky header with backdrop blur on scroll
- [ ] All 5 desktop nav links present
- [ ] Dark mode toggle works (class on html element, localStorage persistence)
- [ ] Mobile hamburger menu opens/closes correctly
- [ ] Search modal opens on click, closes on Escape
- [ ] Hero section: full height, headline, two CTAs, featured product card
- [ ] Features bar: 3 feature items
- [ ] Trending products: 6 cards with image, category, name, rating, price, colors, sizes
- [ ] Add to cart: toast notification, cart badge increment
- [ ] Wishlist toggle: fill/unfill heart, toast notifications
- [ ] Testimonials: 3 review cards with stars, quote, author
- [ ] Trust badges: 4 stat items
- [ ] Newsletter CTA: email input + submit button
- [ ] Footer: newsletter form, 4-column links, social icons, payment icons
- [ ] Footer links to Component Dock
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] No ColorLib references in app code
