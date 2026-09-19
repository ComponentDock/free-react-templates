# Essence — Implementation Todo and Design Notes

## Source mapping
- ColorLib template: "Aroma"
- Preview URL: https://preview.colorlib.com/theme/aroma/
- Screenshot: aroma-free-template.jpg
- New name: essence

## Implementation order (section-by-section)

1. Header — fixed navbar with logo, nav links (Home, Shop, Blog, Pages, Contact), search/cart icons, "Buy Now" button
2. HeroBanner — light bg (#F1F6F7), blue left stripe, product image left, text right ("Shop is fun" + heading + CTA)
3. HeroCarousel — Owl Carousel (or React Slick) with 3 product slides, hover overlay with product name/category
4. TrendingProducts — section intro + 4-column grid of 8 product cards with hover overlay action buttons
5. OfferParallax — full-width parallax bg section with "Up To 50% Off" heading + "Shop Now" button
6. BestSellersCarousel — section intro + carousel of 8 product cards (same card component as Trending)
7. BlogNews — section intro + 3-column grid of blog cards (image, meta, title, excerpt, "Read More")
8. Newsletter — centered subscribe card with email input + pill button
9. Footer — dark navy bg (#002347), 4-column layout (Mission, Quick Links, Gallery, Contact), bottom copyright with Component Dock

## Design notes

### Colors
- Brand primary: #384aeb (indigo-blue — buttons, accents, nav hover, active states, hero stripe, overlays)
- Dark primary: #222 (near-black — headings, nav, body)
- Secondary text: #777 (gray — body, prices)
- Muted text: #999999 (light gray — meta, placeholders)
- Subtitle text: #555555 (medium gray — subheadings)
- Warning: #fbd600 (yellow — star ratings only)
- Error: #c5322d (red — register button, radio)
- Hero banner bg: #F1F6F7 (light blue-gray)
- Hero stripe: #384aeb (5-35% width responsive)
- Footer bg: #002347 (dark navy)
- Footer bottom: rgba(0,35,71,0.98)
- Card hover overlay: rgba(255,255,255,0.5) with #8894ff icon buttons → #384aeb on hover
- Subscribe card shadow: rgba(56,74,235,0.1)

### Typography
- Body: "Roboto", sans-serif, 15px, 400, line-height 1.667
- Headings: "Oswald", sans-serif, 400/500/600 weights
- Hero subtitle: 30px Roboto, #555555
- Hero heading: 50px (desktop) Roboto, uppercase, 700, #222
- Section intro: "Popular Item in the market" (subtitle) + heading with #384aeb bottom border
- Product title: 20px, #222
- Product price: 18px, 500 weight
- Footer title: 18px Oswald, white
- Footer large title: 36px Oswald, 600 weight
- Subscribe title: 28-36px Oswald, uppercase, 500 weight

### Layout patterns
- Navbar: fixed, shadow, flex with justify-between
- Hero: two-col flex (image left 5/12, text right 6/12 + offset-1)
- Product grid: 4-col (col-xl-3, col-lg-4, col-md-6)
- Product card: border:0, white bg, image → overlay (hover) → body (category, title, price)
- Blog grid: 3-col (col-md-6 col-lg-4)
- Blog card: image, body (meta, title, excerpt, link)
- Subscribe: centered card with shadow
- Footer: 4-col (col-lg-3 + offset-1 col-lg-2 + col-lg-2 + offset-1 col-lg-3)
- Buttons: border-radius: 30px (pill), #384aeb bg, white text, 12px 50px padding
- Button hover: transparent bg, #222 text, border #384aeb
- Button-header: transparent bg, #222 text, #EEE border
- Section intro accent: 2px solid #384aeb bottom border, padding-bottom 8px

### Fidelity notes
- Hero carousel uses Owl Carousel → replace with React Slick or embla-carousel
- Parallax effect: use CSS background-attachment: fixed or framer-motion
- Icons: FontAwesome/themify → lucide-react (Search, ShoppingCart, Heart, MessageCircle, ArrowRight, MapPin, Phone, Mail)
- Images: picsum.photos/seed/essence-<n>/<w>/<h>
- Footer: replace Colorlib attribution with Component Dock link
- Product card overlay: CSS transform translateY(30px)→0 + opacity 0→1
- Mobile: navbar hamburger, hero hides image, grid stacks
- Subscribe form: rounded input + pill button, centered
- Section-intro__style: border-bottom: 2px solid #384aeb, padding-bottom 8px
