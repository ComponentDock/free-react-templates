# ModeBox — Prep Notes

## Source
- ColorLib template: Fashiop
- Source URL: https://colorlib.com/wp/template/fashiop/
- Preview URL: https://preview.colorlib.com/theme/fashiop/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fashiop-free-template.jpg

## Section Order (top to bottom)
1. **Navbar** — Logo left, nav links center (Home, Shop▼, Blog▼, Pages▼, Contact), utility icons right (search, user, heart, cart) separated by vertical dividers
2. **Hero Banner** — Full-width background image + dark overlay, centered white text "Fashion for Upcoming Winter", subtitle, "View Collection" white button
3. **Hot Deals** — Two equal col-lg-6 cards, black background, product image with text overlay "Hot Deals of this Month" / "shop now"
4. **Client Logos** — 5 grayscale logos in horizontal carousel
5. **Featured Products** — "Featured Products" heading, 5-column scrollable grid of 10 product cards (image + hover icons + name + price), pagination below
6. **Newsletter Subscription** — Lavender `#f9f9ff` bg, centered heading + subtitle, email input + "Get Started" button (blue, absolute positioned right)
7. **Footer** — 4 columns (About Us, Newsletter, Instagram Feed 8 thumbnails, Follow Us social icons), copyright line

## Component Mapping
| Original Class | React Component | Notes |
|----------------|-----------------|-------|
| `header_area` | `Navbar.tsx` | Top menu bar (phone, login/register, contact) + main nav + utility icons |
| `home_banner_area` | `Hero.tsx` | Background image, overlay div, centered content |
| `hot_deals_area` | `HotDeals.tsx` | Two deal cards side by side |
| `clients_logo_area` | `ClientLogos.tsx` | Simple logo row (no carousel needed, just flex row) |
| `feature_product_area` | `FeaturedProducts.tsx` | Scrollable product grid with pagination |
| `subscription-area` | `Newsletter.tsx` | Email subscription form |
| `footer-area` | `Footer.tsx` | 4-column footer + copyright |

## Design Token Notes
- Brand color: `#1641ff` (blue) — used for active nav, buttons, links, hover states
- Page bg: white `#ffffff`
- Section bg for newsletter: `#f9f9ff` (very light lavender)
- Nav bg: `#f8f8f8`
- Text colors: headings `#222222`, body `#777777`
- Font: Roboto (Google Fonts), weights 300–700
- Hero overlay: `rgba(0,0,0,0.33)`
- CTA button radius: 5px
- Section vertical padding: 120px (60px mobile)
- Product grid: 5 columns desktop (`flex: 0 0 20%`), 2 columns tablet, 1 column mobile

## Fidelity Notes
- The original uses Bootstrap 4 grid + jQuery + Owl Carousel — replace with Tailwind grid + CSS scroll snap for carousel
- Product card hover overlay: heart + cart icons, use lucide-react (Heart, ShoppingCart)
- Newsletter "Get Started" button is absolute-positioned to the right of the input on desktop; stacks on mobile
- Hot deals cards have a dark background with text overlay — use relative positioning with absolute text
- Client logos: simple grayscale flex row (no need for carousel library)
- Footer Instagram grid: 8 images in a 2x4 CSS grid
- No ColorLib references in any app files
- Footer must link to https://www.componentdock.com/
