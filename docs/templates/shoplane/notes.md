# ShopLane — Design Notes & Implementation Tasks

## Source

- ColorLib template: **Coloshop** (slug: `coloshop`)
- Preview: https://preview.colorlib.com/theme/coloshop/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/coloshop-free-bootstrap-ecommerce-website-template.jpg

## Section Order (top to bottom)

1. Top Nav — Shipping banner + currency/language/account selectors
2. Main Nav — Logo ("colo" + "shop" accent) + nav links + user icons + cart + hamburger
3. Category Banners — 3 equal image banners (Women's, Accessories, Men's)
4. New Arrivals — Filter tabs + 4-column product grid
5. Deal of the Week — Split: product image + countdown timer + CTA
6. Best Sellers — Product carousel with nav arrows
7. Benefits — 4-column icons row (Free Shipping, COD, 45 Days Return, Opening All Week)
8. Latest Blogs — 3 blog cards with background images
9. Newsletter — Heading + email form
10. Footer — Nav links + social icons + copyright

## Fidelity Notes

### Color Tokens
- Primary: `#fe4c50` (coral red) — buttons, icons, logo accent, "new" badges
- Hover: `#FE7C7F` (light coral) — button hover, link hover
- Text dark: `#1e1e27` — headings, logo
- Body text: `#51545f` — paragraphs, footer links
- Muted: `#b5aec4` — secondary text, prices
- White: `#FFFFFF` — page bg, card bg
- Light bg: `#f2f2f2` — newsletter section
- Benefit bg: `#f3f3f3` — benefits row
- Sale badge: `#51a042` (green)
- New badge: `#fe4c50` (red, same as primary)

### Typography
- Font: Poppins (Google Fonts), weights 400, 500, 600, 700, 900
- h1: 72px, h2: 40px, h3: 28px, h4: 24px
- Body: 14px, weight 400
- Text is generally uppercase for labels, buttons, and section titles

### Buttons
- Primary button (`.red_button`): bg `#fe4c50`, border-radius 3px, height 40px
- Hover: bg `#FE7C7F`
- Text: white, uppercase, 14px
- Newsletter submit: similar red button
- "Shop Now" and "Subscribe" are the main CTAs

### Layout
- Bootstrap 4 grid (12 cols)
- Category banners: 3 equal columns (col-md-4)
- New arrivals: 4 equal columns (col-lg-3)
- Deal of the week: 6/12 + 6/12 split
- Best sellers: product carousel (OwlCarousel2)
- Benefits: 4 equal columns with white right borders
- Blogs: 3 equal columns (col-lg-4)
- Newsletter: 6/12 + 6/12 split
- Footer: 6/12 + 6/12 (nav left, social right)

### Section Backgrounds
- Most sections: white (#FFFFFF)
- Newsletter: #f2f2f2
- Benefits: #f3f3f3
- Blog cards: background images with overlay

## Implementation Tasks

- [ ] Scaffold app: copy simplest existing e-commerce app, rename to `shoplane`
- [ ] Set up Poppins font in index.html (Google Fonts import)
- [ ] Configure Tailwind theme tokens (primary #fe4c50, hover #FE7C7F, text colors)
- [ ] Implement TopNav component (shipping banner + currency/language selectors)
- [ ] Implement Header/Navbar component (logo + nav links + user icons + cart + hamburger)
- [ ] Implement CategoryBanners component (3 image cards with labels)
- [ ] Implement NewArrivals component (filter tabs + product grid)
- [ ] Implement ProductCard component (image, name, price, badges)
- [ ] Implement DealOfWeek component (image + countdown timer + CTA)
- [ ] Implement BestSellers component (product carousel)
- [ ] Implement Benefits component (4 icon columns)
- [ ] Implement LatestBlogs component (3 blog cards)
- [ ] Implement Newsletter component (heading + email form)
- [ ] Implement Footer component (nav + social + copyright + ComponentDock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Verify with `scripts/verify-app.sh shoplane`
