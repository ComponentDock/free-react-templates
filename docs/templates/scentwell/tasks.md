# Scentwell — Design Notes & Implementation Tasks

## Source
- ColorLib "Aroma Shop" → https://colorlib.com/wp/template/aroma/
- Preview: https://preview.colorlib.com/theme/aroma/
- Category: E-commerce / Shop

## New Name: `scentwell`

## Structure Order (from live DOM)

1. **Navbar** (`Navbar.tsx`)
   - Logo left, nav links center (Home, Shop, Blog, Pages, Contact), icons + Buy Now right
   - Shop/Blog/Pages have dropdown submenus
   - Becomes fixed with white bg + shadow on scroll

2. **Hero Banner** (`Hero.tsx`)
   - Split layout: product image left (col-5), content right
   - `#F1F6F7` background, blue left accent bar (::before, 35% width)
   - Copy: "Shop is fun" (subtitle), "Browse Our Premium Product" (h1), "Browse Now" CTA

3. **Categories** (`Categories.tsx`)
   - 3 category cards in a row
   - Each: full-width image + dark overlay + category name
   - On hover: overlay turns blue (`rgba(56,74,235,0.85)`)

4. **Trending Products** (`TrendingProducts.tsx`)
   - Section title: "Trending" normal + "Product" underlined (2px solid `#384aeb`)
   - 4-column product grid
   - Card: image → hover overlay (wishlist/cart/compare icons on `#8894ff` bg) → title + price
   - On hover: overlay slides up, title color → `#384aeb`

5. **Offer / Parallax** (`Offer.tsx`)
   - Full-width parallax background image
   - Centered text with offer headline + CTA button
   - Large padding (100–135px vertical)

6. **Best Sellers** (`BestSellers.tsx`)
   - Section title: "Best" + "Sellers" underlined
   - Carousel/slider layout (4 visible at once on desktop)
   - Same card pattern as trending products

7. **Blog / Latest News** (`Blog.tsx`)
   - Section title: "Latest" + "News" underlined
   - 3-column card grid
   - Each card: image → meta (date, author) → title → excerpt → "Read More" link
   - Hover: title/link → `#384aeb`, read-more arrow slides right

8. **Subscribe / Newsletter** (`Subscribe.tsx`)
   - Centered white card with purple box-shadow
   - Title: "Get Update From Anywhere"
   - Email input (rounded, `border-radius: 30px`) + "Subscribe Now" button
   - Positioned above footer with negative top offset on desktop

9. **Instagram Feed** (`InstagramFeed.tsx`)
   - Row of 6 square images
   - Hover: scale 1.05
   - Optional centered "Follow" button overlay

10. **Footer** (`Footer.tsx`)
    - Dark navy background: `#002347`
    - 4 columns: Our Mission (large title + text), Quick Links (list), Gallery (6 thumbnails), Contact Us (address/phone/email)
    - Footer bottom: darker bg, copyright text centered
    - All links hover → `#384aeb`

## Fidelity Notes

- **Fonts**: Oswald for headings, Roboto for body (via Google Fonts link in index.html)
- **Buttons**: pill-shaped (`border-radius: 30px`), primary `#384aeb`, hover → transparent + `#384aeb` border
- **Section spacing**: margin `45px` mobile → `120px` desktop (`.section-margin`)
- **Images**: use `picsum.photos/seed/scentwell-<n>/<w>/<h>` placeholders
- **Icons**: Lucide React (replace Font Awesome `ti-search`, `ti-shopping-cart`, `fa-envelope`, etc.)
- **No parallax JS needed**: use `background-attachment: fixed` for offer section

## Implementation Tasks

- [ ] Scaffold app: `apps/scentwell/` from simplest existing app, rename package
- [ ] Set up `index.css` with `@theme` tokens (brand color, fonts)
- [ ] Create `Navbar.tsx` with dropdowns and fixed-on-scroll behavior
- [ ] Create `Hero.tsx` with split layout and blue accent bar
- [ ] Create `Categories.tsx` with 3 overlay cards
- [ ] Create `TrendingProducts.tsx` with 4-column grid + hover overlay
- [ ] Create `Offer.tsx` with parallax background
- [ ] Create `BestSellers.tsx` with carousel layout
- [ ] Create `Blog.tsx` with 3-column card grid
- [ ] Create `Subscribe.tsx` with email form
- [ ] Create `InstagramFeed.tsx` with 6 images + hover scale
- [ ] Create `Footer.tsx` with 4-column dark layout + Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write tests for each component (Vitest + RTL)
- [ ] Verify: 100% coverage, typecheck, lint, build
- [ ] Add `public/CNAME` with `scentwell.free.componentdock.com`
- [ ] Update `package.json` homepage
