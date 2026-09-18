# Velour — Implementation Notes

Source: ColorLib "Eiser" (https://colorlib.com/wp/template/eiser/)
Preview: https://preview.colorlib.com/theme/eiser/
New name: Velour (apps/velour, @free-react-templates/velour)

## Section order (top to bottom)

1. TopInfoBar — grey bar, phone/email, utility links
2. Navbar — logo, nav links with dropdowns, icon bar (search, cart, user, heart)
3. HeroBanner — full-width bg image, headline with green accents, CTA button
4. FeatureCards — 4-column grid, icon + title + description, bordered cards
5. FeaturedProducts — title with underline, 3-column product grid, hover overlay
6. OfferSection — bg image, large "50% off" text, CTA
7. NewProducts — split: left featured item (grey bg) + right 2×2 product grid
8. InspiredProducts — title, 4×2 product grid (8 items)
9. BlogPosts — title, 3-column blog cards with image/meta/title/excerpt
10. Footer — dark navy bg, 5-column links/newsletter, social icons, copyright

## Design notes

### Typography
- Headings: Heebo 400/500/700 (Google Fonts)
- Body: Roboto 300/400/500 (Google Fonts)
- Nav links: 13px Heebo uppercase
- Feature titles: 15px Heebo uppercase
- Banner headline: 52px Roboto 700
- Product names: 14px Roboto 400 uppercase
- Prices: 20px Heebo 500

### Colors
- Brand green: #71cd14 (buttons, active states, accents, hover fills)
- Heading ink: #2a2a2a
- Body text: #797979
- Secondary: #4a4a4a (icons, top menu)
- Light bg: #f6f6f6 (top menu, new product area, offer mobile fallback)
- Footer: #0d0d1f (dark navy)
- Card border: #eff2f3
- Product overlay: rgba(113,205,20,0.4)
- Social icon bg: rgba(255,255,255,0.15)

### Key patterns
- Product hover: image scales 1.1×, .p_icon slides from bottom -100px to 0
- Product icon circles: white bg, turn green on hover, border-radius 30px
- Button (.main_btn): green bg, 5px radius, 12px Roboto 500 uppercase
  - Hover: transparent bg, green text (border stays green)
- Dropdown menus: white bg, items 45px height, hover fills green + white text
- Offer section: bg image cover, fallback #f6f6f6 on mobile
- Footer social: square buttons, hover turns green

### Placeholder images
- Use picsum.photos/seed/velour-<n>/<w>/<h> for product and blog images
- Hero banner: use a picsum fashion/men's wear image or solid color bg
- Offer section: use a picsum image or solid color bg

### Component mapping
- TopInfoBar → separate component (simple flex row)
- Navbar → component with useState for mobile toggle, dropdown open state
- HeroBanner → component with bg image, text overlay
- FeatureCards → component with 4 feature items (could be data-driven)
- ProductCard → reusable component (used in Featured, New, Inspired sections)
- ProductGrid → wrapper for responsive product grid layout
- OfferSection → component with bg image, centered text
- BlogCard → reusable component for blog posts
- Footer → component with link columns, newsletter form, social icons

### Fidelity notes
- The source uses Bootstrap 4 grid — recreate with Tailwind grid/flex
- The source uses flaticon/themify-icons — replace with lucide-react
- The source uses jQuery dropdowns — replace with React state/CSS
- No real forms needed (newsletter is mock, contact is a link)
- The .new_product featured item has a unique layout (tall grey box) —
  give it appropriate aspect ratio and centering
