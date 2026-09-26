# Statform — Implementation Task Outline

## ColorLib Source
- Template: Politics
- URL: https://colorlib.com/wp/template/politics/
- Preview: https://preview.colorlib.com/theme/politics/

## Design Notes

### Overall Structure (Section Order)
1. TopBar — dark strip with social icons (left) + phone/email (right)
2. Navbar — fixed white bar, logo left, menu right (7 items, Blog has dropdown)
3. Hero Banner — full-height, dark overlay on background image, centered white text, primary CTA button
4. Countdown — split layout: heading+text left, countdown timer on blue bg right
5. Services — 3 image cards with title + description
6. About — split: left = background image (CSS pseudo-element), right = heading + text + 2 icon-feature boxes
7. Gallery — 4 images in responsive grid (8+4 top, 6+6 bottom)
8. Counter/Stats — dark bg image, 4 circular blue badges with numbers
9. FAQ/Feedback — accordion (4 items) left, video play button with dark overlay right
10. Brands — horizontal carousel, 5 grayscale logos → color on hover
11. Blog — 4 post cards: image, date badge, title, excerpt, likes/comments
12. Footer — dark navy, 3 columns (links, newsletter, instagram feed), bottom bar with copyright + social icons

### Key Tokens
- Brand: #3898f8
- Body text: #777
- Headings: #222
- Light bg: #f9f9ff
- Footer bg: #04091e
- Font: Poppins (300-700)
- Primary button: pill (border-radius 25px), #3898f8 bg, white text
- Section padding: 120px 0

### Component Inventory
- TopBar
- Navbar (with mobile drawer)
- HeroBanner
- CountdownSection (timer logic)
- ServiceCards (3 cards, image + text)
- AboutSection (pseudo-element bg, 2 feature boxes with Linearicons)
- GalleryGrid (4 images, hover effect)
- StatsCounter (circular badges, animated count)
- FAQAccordion (4 items, toggle state)
- VideoPlayButton (dark overlay area)
- BrandCarousel (5 logos, grayscale hover)
- BlogGrid (4 cards, date badge, meta)
- Footer (newsletter form, instagram grid, copyright)

### Fidelity Notes
- Banner bg image → use picsum.photos placeholder
- About section uses CSS :after pseudo-element for left image — use a positioned div instead (React)
- Counter uses jQuery counterup → implement with simple animate or framer-motion
- Brand carousel uses Owl Carousel → implement with CSS scroll-snap or a lightweight carousel
- FAQ accordion uses custom JS mn-accordion → implement with React state
- Video play button links to YouTube — use a placeholder link
- Gallery images open with Magnific Popup → skip lightbox for simplicity (can add later)
- All images → picsum.photos with deterministic seeds

## Implementation Tasks

1. Scaffold app: copy simplest existing app, rename to `statform`
2. Set up `index.html` with Poppins font (Google Fonts link)
3. Set up `src/index.css` with Tailwind theme tokens (brand color, font family)
4. Build TopBar component (dark bg, social icons via lucide-react, phone + email)
5. Build Navbar component (fixed position, logo, menu items, mobile hamburger + drawer)
6. Build HeroBanner component (full-height, dark overlay, heading, subtitle, CTA button)
7. Build CountdownSection component (split layout, countdown timer with days/hours/min/sec)
8. Build ServiceCards component (3 cards with image, title, description)
9. Build AboutSection component (split layout, image area, text, 2 feature boxes with icons)
10. Build GalleryGrid component (4 images, responsive grid, hover opacity)
11. Build StatsCounter component (dark bg, 4 circular stat items)
12. Build FAQAccordion component (4 items, toggle open/close)
13. Build VideoPlayButton component (dark overlay with play icon)
14. Build BrandCarousel component (5 logos, grayscale → color on hover)
15. Build BlogGrid component (4 post cards with all meta)
16. Build Footer component (3 columns, newsletter form, instagram grid, copyright with Component Dock link)
17. Compose App.tsx with all sections in order
18. Write tests (100% coverage) for every component
19. Verify: typecheck, lint, test:coverage, build
