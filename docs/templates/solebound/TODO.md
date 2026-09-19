# Solebound — Implementation Notes

## Source
- ColorLib: Solestyle (https://colorlib.com/wp/template/solestyle/)
- Preview: https://preview.colorlib.com/theme/solestyle/
- Category: E-Commerce / Footwear Landing Page

## Section Order (top to bottom)
1. AnnouncementBar — gradient bg, promo text
2. Header — sticky, backdrop-blur, logo, nav, icons, mobile menu
3. Hero — dark 90vh, gradient mesh, grid pattern, 2-col (text + image), floating badges, sale circle, stats row, scroll indicator
4. Categories — white bg, heading + 6-card grid (3x2)
5. FeaturedProducts — gray-50 bg, heading + product card grid
6. Testimonials — gray-950 bg, heading + 3-card grid + trust stats
7. CTA — primary-600 bg, heading + email form + app badges
8. Footer — gray-50 bg, newsletter form + logo + 3-col links + social + copyright

## Fidelity Notes

### AnnouncementBar
- Full width, py-2, text-sm, white text on primary gradient (primary-600 to primary-500)
- Bold promo code inline

### Header
- Sticky top-0, z-40, white bg/95 with backdrop-blur-md
- Border-bottom: border-gray-100
- Logo: primary gradient icon (rounded-xl) + "Solebound" text (Outfit font, bold)
- Nav links: text-sm, font-medium, hover:text-primary-600
- Utility icons: Search, Dark mode toggle, Wishlist (hidden on mobile), Cart with badge
- Mobile: hamburger toggle, vertical menu with all links

### Hero
- min-h-[90vh], bg-gray-950
- Background layers: gradient mesh (from-gray-900 via-gray-950 to-primary-950), blurred circles, grid pattern overlay
- Content: max-w-7xl, 2-col grid on lg
  - Left: badge pill, heading (Outfit extrabold, text-5xl to text-7xl), subtitle (gray-400), 2 CTA buttons (filled + outlined)
  - Right: hero image with float animation, floating glass badges (bg-white/10 backdrop-blur-md rounded-xl), sale badge (primary-500 rounded-full)
- Stats row below: 3 metrics with vertical dividers (border-white/10)
- Scroll indicator at bottom

### Categories
- White bg (dark: gray-950), py-20/28
- Heading + "Browse All" link
- 6 cards in grid (sm:2, lg:3 cols), each card:
  - aspect-[4/3] image, gradient overlay (from-gray-900 via-gray-900/50 to-transparent)
  - Category name (Outfit text-2xl bold white) + description (text-sm gray-300)
  - Arrow link (text-primary-600)

### FeaturedProducts
- Gray-50 bg, py-20/28
- Product cards: rounded-2xl, image area, name, price, sale price, add-to-cart button (white bg, shadow-lg), wishlist button

### Testimonials
- Gray-950 bg, py-20/28
- "Customer Love" badge (primary-500/10), heading, subtitle
- 3 cards: gray-900 bg, rounded-2xl p-8, star ratings (yellow-400), blockquote, author avatar + name + role
- Trust badges: 4 stats in a row with vertical dividers

### CTA
- primary-600 bg, grid pattern overlay, blurred circles
- Heading (Outfit text-4xl/5xl), subtitle
- Email form: max-w-md, rounded-full input + "Get 15% Off" button (white bg, primary-600 text)
- App store badges: black/30 rounded-xl

### Footer
- Gray-50 bg (dark: gray-900)
- Newsletter: "Join the Stride Club", email input + submit button (rounded-lg)
- Logo + tagline
- 3-col links: Shop, Help, About
- Social icons: Instagram, Facebook, Twitter, YouTube, TikTok
- Copyright + privacy/terms links
- Component Dock attribution link
