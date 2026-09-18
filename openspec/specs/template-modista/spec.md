# Template: Modista (Fashion E-Commerce Shop)

## Purpose

Modista is a single-page fashion e-commerce shop template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Persuit" free template (source:
https://colorlib.com/wp/template/persuit/), built under a DIFFERENT name
(**Modista**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

**Source mapping:**
- **ColorLib item:** "Persuit" (TEMPLATES.md line 1129)
- **Source URL:** https://colorlib.com/wp/template/persuit/
- **Preview URL:** https://preview.colorlib.com/theme/persuit/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/persuit-free-template.jpg

The original is a Bootstrap 4 e-commerce shop home page with Revolution
Slider, Owl Carousel, Isotope filtering, and a multi-column footer. The
recreation uses React components with Tailwind CSS 4 utility classes,
lucide-react icons, and picsum.photos placeholder images. No jQuery,
no Bootstrap JS, no Revolution Slider — plain React state for carousels
and filtering.

**WHAT MAKES MODISTA DISTINCT (signature behaviors):**

1. **Two-tier header: utility bar + shop navigation.** The top utility
   bar (`header_top_area`) has a language/currency selector on the left,
   a centered logo flanked by phone/email links, and social icons + user/cart
   on the right. Below it, the main shop nav (`shop_header_area`) has a
   categories dropdown, multi-level dropdown menus (Home, Pages, Shop),
   Blog, Lookbook, and Contact links. The recreation simplifies to a single
   responsive nav with mobile hamburger.

2. **Full-width hero slider with overlay text.** Revolution Slider
   replaced with a simple React image carousel (2-3 slides, auto-advance
   with dots). Each slide has a full-bleed background image with
   right-aligned overlaid text ("Best Summer Collection") and a red CTA
   button ("read more").

3. **Three-column feature ad banners with hover overlays.** A 5/4/3
   column grid of product images. The larger two have hover-reveal
   overlays (heading + "Shop Now" link with arrow) and colored badge
   labels ("Sale" / "10% off"). The third is a standalone image.

4. **Latest products carousel.** Owl Carousel → React horizontal
   scrollable row of product cards. Each card has an image, icon actions
   (compare, wishlist), "Add To Cart" button, product name, and price
   (with optional strikethrough for sale items).

5. **Two-column large promotional banners.** Equal-width 6/6 grid of
   large images with hover overlays (same "Best Summer Collection" +
   "Shop Now" pattern). White text on dark hover.

6. **Three-column category listing.** Men / Women / Accessories columns,
   each with a list of subcategory links (Down Jackets, Hoodies, Suits,
   Jeans, Casual Pants, Sunglass) and a category image. Static links
   only.

7. **Featured products with filter tabs.** Left sidebar with 4 featured
   products (thumbnail + name + price). Right main area has filter tabs
   (Men's / Woman / Shoes / Bags) with an Isotope-style carousel of
   filtered products. Badge labels (Sale, New, -10%).

8. **Blog section.** Three-column grid of blog cards: image, category
   tag ("fashion"), excerpt text, and date.

9. **Five-column mega footer.** About widget (logo + description +
   social icons), Information links, Customer Service links, Extras links,
   My Account links. Dark background. Copyright bar at bottom with
   "Component Dock" branding.

## Design tokens

Extracted from `https://preview.colorlib.com/theme/persuit/css/style.css`
(139 KB) and inline styles in the preview HTML.

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| brand-primary | `#d91522` | CTA hover states, sale badges, slider button hover |
| brand-dark | `#262121` | "Add To Cart" button bg, dark accents |
| text-primary | `#000` | Body text, nav links |
| text-dark | `#29263a` | Slider heading text |
| text-heading | `#333333` | Section headings, footer text |
| text-navy | `#0b1033` | Footer background, dark sections |
| text-secondary | `#666666` | Subtitles, descriptions, prices |
| text-muted | `#999999` | Placeholder text, minor labels |
| border-light | `#e5e5e5` | Dividers, card borders |
| border-medium | `#cccccc` | Secondary borders |
| bg-white | `#fff` | Card backgrounds, content areas |
| bg-light | `#f8f9fa` | Page body background |
| accent-teal | `#1cbbb4` | Minor accent (social) |
| accent-gold | `#efb504` | Minor accent (sale badge alt) |

### Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Navigation | Montserrat | 600 | `font-family: "Montserrat", sans-serif` |
| Headings | Poppins | 600 | Primary heading font |
| Body | Poppins | 400 | Main body text |
| Secondary body | Lato | 400 | Some body copy |
| Decorative | Playfair Display | 400 | Accent text (if used) |
| Icons | Font Awesome 5 + Simple Line Icons + Elegant Icons | — | **Replace with lucide-react** |

### Buttons

| Button | Background | Text | Border | Radius | Hover |
|--------|-----------|------|--------|--------|-------|
| CTA (checkout_btn) | `#d42421` | `#fff` | `1px solid #d42421` | `0px` (square) | bg → `#333333` |
| Add To Cart | `#262121` | `#fff` | `1px solid #262121` | `3px` | bg → transparent, text → `#262121` |
| Shop Now (add_btn) | transparent | `#000` | none | none | color → `#d91522` |
| Slider CTA | `#d42421` | `#fff` | `1px solid #d42421` | `0px` | bg → `#d91522` |

### Layout

- Container: Bootstrap-like `1140px` max-width centered
- Grid: 12-column responsive (col-lg-* patterns)
- Section padding: ~60-80px vertical
- Footer: dark `#0b1033` background, 5-column grid
- Border radius on product images: `0px` (square corners throughout)
- Border radius on badges: `3px` (Sale/New/Discount)

## Gherkin requirements

### Scenario: Header utility bar renders with contact info and social links
```
Given the user visits the Modista homepage
When the header utility bar renders
Then it shows a centered logo
And it shows phone number "+84 987 654 321"
And it shows email "support@yourdomain.com"
And it shows social icon links (Facebook, Twitter, Pinterest, Instagram, YouTube)
And it shows user account and cart icons
```

### Scenario: Main navigation renders with dropdown menus
```
Given the user visits the Modista homepage
When the main navigation renders
Then it shows "Home", "Pages", "Shop", "Blog", "Lookbook", "Contact" links
And the Home link has a dropdown with variant options
And the nav is responsive with a mobile hamburger toggle
```

### Scenario: Hero slider displays with auto-advance
```
Given the user visits the Modista homepage
When the hero slider loads
Then it shows a full-width background image
And it shows the text "Best Summer Collection"
And it shows a "read more" CTA button with red background
And the slider auto-advances between slides every ~5 seconds
And dot indicators allow manual slide selection
```

### Scenario: Feature ad banners show with hover overlays
```
Given the user visits the Modista homepage
When the feature ad banners render
Then three images are displayed in a 5/4/3 column layout
And the first banner shows a "Sale" badge
And the second banner shows a "10% off" badge
And hovering a banner reveals a heading and "Shop Now" link
```

### Scenario: Latest products carousel shows product cards
```
Given the user visits the Modista homepage
When the latest products section renders
Then it shows a heading "Our Latest Product"
And it displays product cards in a scrollable carousel
And each card has an image, name, and price
And each card shows "Add To Cart" and wishlist/compare icon buttons
And sale items show original price with strikethrough and discounted price
```

### Scenario: Large promotional banners display with hover
```
Given the user visits the Modista homepage
When the promotional banners render
Then two large images are shown side by side
And each has a hover overlay with "Best Summer Collection" heading
And each has a "Shop Now" link with arrow icon
```

### Scenario: Category listing shows product categories
```
Given the user visits the Modista homepage
When the category listing renders
Then three category columns are shown: Men, Women, Accessories
And each column lists subcategory links (Down Jackets, Hoodies, Suits, Jeans, Casual Pants, Sunglass)
And each column has a category image on the right
```

### Scenario: Featured products with filter tabs
```
Given the user visits the Modista homepage
When the featured products section renders
Then a left sidebar shows 4 featured products with thumbnails, names, and prices
And the main area shows filter tabs: Men's, Woman, Shoes, Bags
And clicking a tab filters the product carousel accordingly
And products show badge labels (Sale, New, -10%)
```

### Scenario: Blog section shows three blog cards
```
Given the user visits the Modista homepage
When the blog section renders
Then it shows a heading "From The Blog"
And three blog cards are displayed in a row
And each card has an image, category tag "fashion", excerpt, and date
```

### Scenario: Footer renders five columns with links
```
Given the user visits the Modista homepage
When the footer renders
Then it shows five columns: About, Information, Customer Service, Extras, My Account
And the About column has a logo, description, and social icon links
And each link column has 4-5 navigation links
And a copyright bar at the bottom reads "Component Dock"
And the footer has a dark (#0b1033) background
```

### Scenario: Page is responsive
```
Given the user visits the Modista homepage on a mobile viewport
When the layout reflows
Then the navigation collapses to a hamburger menu
And product carousels become horizontally scrollable
And multi-column grids stack to single column
And the footer columns stack vertically
```

## Verification checklist

- [ ] Header utility bar: logo, phone, email, social icons, user/cart icons
- [ ] Main nav: all links present, dropdowns functional, mobile hamburger
- [ ] Hero slider: 2+ slides, auto-advance, dot navigation, CTA button
- [ ] Feature ad banners: 3-column layout, hover overlays, badge labels
- [ ] Latest products: carousel with product cards, prices, Add To Cart
- [ ] Promotional banners: 2-column, hover overlays
- [ ] Category listing: 3 columns (Men/Women/Accessories) with links
- [ ] Featured products: sidebar + filter tabs + product carousel
- [ ] Blog section: 3 cards with image, category, excerpt, date
- [ ] Footer: 5 columns, dark bg, social icons, Component Dock branding
- [ ] Responsive: mobile hamburger, stacking grids, scrollable carousels
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to componentdock.com
- [ ] public/CNAME contains modista.free.componentdock.com
- [ ] package.json homepage matches deploy URL
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] lucide-react icons replace Font Awesome / Simple Line Icons
