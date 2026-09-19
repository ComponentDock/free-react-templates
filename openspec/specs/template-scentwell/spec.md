# Template: Scentwell (E-commerce / Shop)

## Purpose

Recreation of ColorLib "Aroma Shop" as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/aroma/
- **Preview:** https://preview.colorlib.com/theme/aroma/
- **New name:** `scentwell`
- **Category:** E-commerce / Shop
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#384aeb` | Buttons, links, accents, hero left bar, section intro underline |
| Brand secondary | `#8894ff` | Product card overlay buttons (hover → primary) |
| Heading font | `"Oswald", sans-serif` | h1–h6, footer titles, section headings |
| Body font | `"Roboto", sans-serif` | Body text, paragraphs, form inputs |
| Button border-radius | `30px` | Pill-shaped CTA buttons |
| Hero background | `#F1F6F7` | Hero banner section, checkout areas |
| Hero left accent | `#384aeb` | 35% width left pseudo-element on hero |
| Footer background | `#002347` | Dark navy footer |
| Heading text | `#222` | All headings |
| Body text | `#777` | Paragraphs, body copy |
| Secondary text | `#555555` | Subtitles, secondary info |
| Tertiary text | `#999` | Blog meta, form placeholders |
| Subscribe card shadow | `0px -5px 20px 0px rgba(56,74,235,0.1)` | Newsletter section |
| Red accent | `#C5322D` | Register button |
| Card hover transform | `translateY(0)` + `opacity: 1` | Product overlay on hover |

## Section Structure (from live preview DOM)

1. **Navbar** — logo, nav links (Home, Shop dropdown, Blog dropdown, Pages dropdown, Contact), search/cart icons, "Buy Now" button
2. **Hero Banner** — split layout: product image left (col-5), content right (col-6 offset). Headline "Shop is fun" / "Browse Our Premium Product" / CTA "Browse Now". Light `#F1F6F7` background with blue left accent bar.
3. **Categories** — 3 product category cards (image + dark overlay with category name), horizontal layout
4. **Trending Products** — section title with blue underline accent, 4-column product grid. Product cards: image + hover overlay (wishlist/cart/compare icons) + title + price
5. **Offer / Parallax** — full-width parallax background section with centered text (50% off promotion), CTA button
6. **Best Sellers** — carousel/slider section with product cards (similar to trending)
7. **Latest News / Blog** — 3-column blog card layout. Each card: image + meta (date, author) + title + excerpt + "Read More" link
8. **Subscribe / Newsletter** — centered card with white background, purple shadow, email input + "Subscribe Now" button
9. **Footer** — dark navy background (`#002347`), 4 columns: Our Mission (about text), Quick Links, Gallery (instagram-style thumbnails), Contact Us (address/phone/email). Footer bottom with copyright.
10. **Instagram Feed** — row of 6 square images with hover scale effect

## Gherkin Scenarios

### Navbar
```gherkin
Scenario: Navbar displays logo and navigation links
  Given the user visits the homepage
  Then the navbar shows the logo on the left
  And navigation links include Home, Shop, Blog, Pages, Contact
  And a search icon, cart icon with badge, and "Buy Now" button are visible

Scenario: Shop dropdown reveals sub-links
  Given the navbar is visible
  When the user hovers or taps "Shop"
  Then a dropdown shows Shop Category, Product Details, Product Checkout, Confirmation, Shopping Cart

Scenario: Navbar becomes fixed on scroll
  Given the page is scrolled past the header
  Then the navbar has a fixed white background with shadow
```

### Hero Banner
```gherkin
Scenario: Hero banner shows split layout
  Given the user visits the homepage
  Then the hero section has a light gray background (#F1F6F7)
  And a blue accent bar appears on the left side
  And a product image is shown on the left (hidden on mobile)
  And the right side shows "Shop is fun" heading
  And "Browse Our Premium Product" main heading
  And a "Browse Now" CTA button
```

### Categories
```gherkin
Scenario: Categories section shows 3 category cards
  Given the user scrolls past the hero
  Then 3 category cards are displayed horizontally
  Each card has a background image and a dark overlay with the category name
```

### Trending Products
```gherkin
Scenario: Trending products grid renders
  Given the user views the trending section
  Then the section title shows "Trending" with "Product" underlined in blue
  And 4 product cards are displayed in a grid
  Each card has an image, product name, and price

Scenario: Product card shows overlay on hover
  Given a product card is visible
  When the user hovers over the product image
  Then an overlay with wishlist, cart, and compare buttons appears
  And the product name turns to brand color (#384aeb)
```

### Offer / Parallax
```gherkin
Scenario: Offer section displays promotional content
  Given the user scrolls to the offer section
  Then a parallax background image is visible
  And promotional text (e.g. "50% Off") is centered
  And a CTA button is present
```

### Best Sellers
```gherkin
Scenario: Best sellers section renders a carousel
  Given the user views the best sellers section
  Then the section title shows "Best" with "Sellers" underlined in blue
  And product cards are displayed in a scrollable carousel
```

### Blog / Latest News
```gherkin
Scenario: Blog section shows 3 recent posts
  Given the user scrolls to the blog section
  Then the section title shows "Latest" with "News" underlined in blue
  And 3 blog cards are displayed, each with an image, meta info, title, and "Read More" link

Scenario: Blog card hover highlights title and link
  Given a blog card is visible
  When the user hovers over the card
  Then the title and "Read More" link turn to brand color (#384aeb)
  And the "Read More" arrow slides right
```

### Subscribe / Newsletter
```gherkin
Scenario: Newsletter section renders subscription form
  Given the user scrolls to the subscribe section
  Then a centered card with white background and purple shadow is visible
  And the title "Get Update From Anywhere" is displayed
  And an email input field and "Subscribe Now" button are present
```

### Footer
```gherkin
Scenario: Footer displays 4-column layout on dark navy background
  Given the user reaches the bottom of the page
  Then the footer has a dark navy background (#002347)
  And 4 columns are shown: Our Mission, Quick Links, Gallery, Contact Us
  And footer text uses light colors (#7b838a) on dark background
  And the footer bottom shows copyright text

Scenario: Footer links use brand color on hover
  Given the footer is visible
  When the user hovers over a footer link
  Then the link color changes to brand primary (#384aeb)
```

## Verification Checklist

- [ ] Section order matches preview DOM exactly (Navbar → Hero → Categories → Trending → Offer → Best Sellers → Blog → Subscribe → Instagram Feed → Footer)
- [ ] Brand color `#384aeb` used consistently for buttons, links, accents, underlines
- [ ] Oswald font for headings, Roboto for body text
- [ ] Pill-shaped buttons (`border-radius: 30px`)
- [ ] Hero banner: `#F1F6F7` background, blue left accent, split layout (image left, content right)
- [ ] Product cards: hover overlay with icon buttons, color transition on title
- [ ] Section titles: "Accent Word" underlined with 2px solid `#384aeb`
- [ ] Blog cards: hover effect on title and read-more link
- [ ] Newsletter: white card, purple shadow, email input + subscribe button
- [ ] Footer: `#002347` dark navy, 4-column layout, light text
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] All images use `picsum.photos` placeholders
- [ ] Lucide React icons replace Font Awesome / Themify icons
- [ ] Responsive: hero image hidden on mobile, grid collapses, footer stacks
