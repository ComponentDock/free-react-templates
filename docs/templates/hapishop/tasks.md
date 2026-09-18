# HapiShop — Implementation Tasks & Design Notes

## Source
- **ColorLib slug:** coloshop
- **Preview URL:** https://preview.colorlib.com/theme/coloshop/
- **New name:** hapishop

## Section Order (from preview DOM, top to bottom)

1. Header (top nav + main nav)
2. Hero Slider
3. Banner (3 category cards)
4. New Arrivals (filter tabs + product grid)
5. Deal of the Week (image + countdown timer)
6. Best Sellers (product carousel)
7. Benefits (4-column icon row)
8. Blogs (3-column cards)
9. Newsletter (email form)
10. Footer (nav + social + copyright)

## Design Notes

### Color Palette
- Primary CTA red: `#fe4c50` — used on all buttons, newsletter submit, footer link hover
- Hover red: `#FE7C7F` — button hover state
- Dark navy: `#1e1e27` — top nav background, deal button background
- Section gray: `#f2f2f2` — deal section, newsletter section backgrounds
- Body text: `#989898` — paragraph text
- Headings: `#282828` — h1–h6
- Footer text: `#51545f` — nav links and copyright
- Green badge: `#51a042` — "new" product badge
- Selection highlight: `#fde0db` bg / `#FF6347` text

### Typography
- Font: Poppins (Google Fonts), weights 400/500/600/700/900
- h1: 72px, h2: 40px, h3: 28px, h4: 24px, h5: 16px, h6: 14px
- Body: 14px, line-height 23px, weight 400

### Buttons
- `.red_button`: inline-flex, height 40px, bg `#fe4c50`, border-radius 3px, transition 300ms
- White text, uppercase, 14px, font-weight 500
- Deal button uses dark navy (`#1e1e27`) bg instead

### Header
- Fixed position, white bg, z-index 10
- Top nav: 50px height, dark navy bg, text color `#b5aec4`
- Main nav: logo left, menu center, user icons right, hamburger on mobile
- Currency/language/account dropdowns in top nav

### Hero Slider
- Full-width, background-image based (use picsum.photos with seed)
- Content centered vertically: subtitle (h6), headline (h1), CTA button
- Original has single static slide (no carousel logic needed)

### Banner
- 3 equal columns, background-image cards with centered category label
- Labels: women's, accessories, men's
- Hover: label becomes more prominent

### New Arrivals
- Section title "New Arrivals"
- Filter tabs: all (*) / women's (.women) / accessories (.accessories) / men's (.men)
- 4-column product grid
- Product card: image, favorite heart icon, discount/new bubble (red/green), name, price (with strikethrough original), "add to cart" button
- Use React state for filter tabs (no isotope needed — filter with CSS/Tailwind)

### Deal of the Week
- Gray (#f2f2f2) background section
- 2-column layout: large product image left, content right
- Countdown timer: 4 items (days/hours/mins/secs) with static initial values
- Dark navy "shop now" button
- Timer can be static or functional (implementer's choice, spec requires numeric values)

### Best Sellers
- Same product card as New Arrivals
- Horizontal scrollable carousel
- Implement with overflow-x scroll + snap (no external carousel lib needed)

### Benefits
- 4 equal columns, each with icon (lucide-react) + title + description
- Items: Free Shipping (TruckIcon), Cash on Delivery (BanknoteIcon), 45 Days Return (UndoIcon), Opening All Week (ClockIcon)
- Title h6 weight 600, description 14px gray text

### Blogs
- Section title "Latest Blogs"
- 3 equal columns, each card: background image + overlay content
- Overlay: centered vertically and horizontally, white text
- Title (h4), meta (span, gray), "Read more" link
- Hover: content becomes more visible (opacity transition)

### Newsletter
- Gray (#f2f2f2) background
- 2-column: left = heading "Newsletter" + description, right = form
- Form: email input (required) + "subscribe" red button
- Email validation via HTML5 required attribute

### Footer
- Simple: nav links (Blog, FAQs, Contact us) left, social icons right
- Copyright line below
- Social icons: lucide-react equivalents (Facebook, Twitter, Instagram, Skype, Pinterest)
- MUST link to https://www.componentdock.com/ (replace Colorlib attribution)

## Component Breakdown

| Component | Section | Notes |
|-----------|---------|-------|
| `Navbar.tsx` | Header | TopNav + MainNav; hamburger toggle on mobile |
| `HeroSlider.tsx` | Hero | Full-width bg image, text overlay, CTA |
| `CategoryBanners.tsx` | Banner | 3-column image cards |
| `NewArrivals.tsx` | New Arrivals | Filter tabs + product grid; manages filter state |
| `ProductCard.tsx` | Shared | Reusable: image, name, price, badge, CTA button |
| `DealOfTheWeek.tsx` | Deal | Split layout with countdown |
| `CountdownTimer.tsx` | Deal sub | Timer display (static or functional) |
| `BestSellers.tsx` | Best Sellers | Horizontal scroll carousel of ProductCards |
| `Benefits.tsx` | Benefits | 4-column icon + text row |
| `BlogCards.tsx` | Blogs | 3-column blog cards with hover effect |
| `Newsletter.tsx` | Newsletter | Email form with validation |
| `Footer.tsx` | Footer | Nav links, social icons, copyright |

## Placeholder Images

Use picsum.photos with deterministic seeds per product:
- Hero: `https://picsum.photos/seed/hapishop-hero/1920/800`
- Banner 1: `https://picsum.photos/seed/hapishop-cat1/600/400`
- Banner 2: `https://picsum.photos/seed/hapishop-cat2/600/400`
- Banner 3: `https://picsum.photos/seed/hapishop-cat3/600/400`
- Products: `https://picsum.photos/seed/hapishop-prodN/300/300` (N=1–8)
- Deal: `https://picsum.photos/seed/hapishop-deal/540/540`
- Blogs: `https://picsum.photos/seed/hapishop-blogN/600/400` (N=1–3)
