# Gearhaus — Implementation Notes

Recreation of ColorLib "AutoMotive" → https://preview.colorlib.com/theme/automotive/

## Section order (implement in this order)

1. Header (Navbar component)
2. Hero
3. Services
4. ChooseUs
5. Products
6. Testimonial
7. Counter
8. LatestNews
9. Footer

## Design tokens

- Brand: #5F67FF (indigo-blue)
- Dark bg: #25282C (counter), #353535 (top bar, footer)
- Text: #353535 (headings), #727171 (body), #b4b4b4 (secondary)
- Font: Public Sans (Google Fonts, weights 400-900)
- Buttons: square, #5F67FF bg, white text, 15px/700, padding 14px 25px 12px
- Section title: 40px, #353535, 700 weight, centered

## Section-by-section fidelity notes

### 1. Header (Navbar)
- Two-tier: dark utility bar (#353535) with phone/hours/map/social + main nav bar (off-white #f7f7f7)
- Logo on left, nav links center (Home, Services, Shop, Pages, Blog), search/cart right
- Mobile: hamburger menu, offcanvas panel with full nav + contact info
- Active link: blue underline on "Home"

### 2. Hero
- Full-width background image with dark semi-transparent overlay
- "Welcome To" in lighter weight above the main heading
- Main heading: large (60px), bold, white
- Body paragraph below
- "Our Services" CTA button (primary-btn style)

### 3. Services ("What We Do?")
- Centered section title
- 2x2 grid alternating: text cards (icon + h4 title + p) and image cards
- Text cards: white bg, blue line-art icons, dark title, gray description
- Image cards: automotive service photos filling the card
- 4 services: Engine Overhaul, Power Steering, Oil Change, Upgrades Car

### 4. Choose Us
- Split layout: image left (48% width, absolute positioned offset -60px top)
- Text panel right: box-shadow card (10px 10px 40px rgba(0,0,0,0.08))
- Text: left-aligned section title, bullet list with check icons, "Our Services" CTA
- Use a placeholder engine/mechanic photo for the image side

### 5. Products ("Our Products")
- 4-column grid of product cards
- Each: image + hover overlay (heart/eye/exchange icons) + product name + price + "Add To Cart"
- Placeholder automotive product images (parts, wheels, accessories)
- 4 sample products: High Flow Fuel ($800), Revolution Wheels ($800), Tone Interior Kit ($800), + 1 more

### 6. Testimonial
- Carousel/slider component
- Each slide: quotation mark icon (elegant-icons), quote text
- White background, centered content
- Dot pagination below (10px circles)

### 7. Counter
- Dark background (#25282C), overlaps hero area (negative margin -120px top)
- 4 stat counters in a row: icon + large number (#5F67FF, 46px/700) + label
- Sample stats: happy clients, total projects, support hours, staff members

### 8. Latest News
- 3-column grid of blog cards
- Each: image with author/date overlay badge + title + excerpt paragraph
- Use placeholder images for blog post covers

### 9. Footer
- Dark background with image overlay
- Top row: 3 info cards (Booking Repair / Appointment, Phone / Number, Location / Map link) with icons, separated by right borders
- Middle: 4 columns — About (logo + description + Contact Us CTA), Quick Links, News items, Address + social icons
- Bottom: copyright text + social media icon links
- MUST link to https://www.componentdock.com/
- Footer links to Component Dock, not ColorLib

## Component mapping

| Section | Component file | Notes |
| --- | --- | --- |
| Navbar | Navbar.tsx | Two-tier, mobile offcanvas |
| Hero | Hero.tsx | Background image + overlay |
| Services | Services.tsx | 4-card alternating grid |
| ChooseUs | ChooseUs.tsx | Split layout |
| Products | Products.tsx | 4-col product grid with hover |
| Testimonial | Testimonial.tsx | Carousel/slider |
| Counter | Counter.tsx | Dark bg, stat counters |
| LatestNews | LatestNews.tsx | 3-col blog grid |
| Footer | Footer.tsx | Multi-row dark footer |

## Placeholder images

Use `https://picsum.photos/seed/gearhaus-<n>/<w>/<h>` for deterministic placeholders:
- Hero bg: `gearhaus-hero/1920/800`
- Service images: `gearhaus-svc-1` through `gearhaus-svc-4`
- Choose Us image: `gearhaus-choose/600/600`
- Product images: `gearhaus-prod-1` through `gearhaus-prod-4/400/300`
- Blog images: `gearhaus-blog-1` through `gearhaus-blog-3/400/250`
- Footer bg: `gearhaus-footer/1920/400`
