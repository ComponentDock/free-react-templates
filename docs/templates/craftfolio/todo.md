# Craftfolio — Implementation Task Outline

## ColorLib Source
- Template: Beckham
- URL: https://colorlib.com/wp/template/beckham/
- Preview: https://preview.colorlib.com/theme/beckham/

## Design Notes

### Overall Structure (Section Order)
1. ScrollProgress — thin progress bar at top, fills as user scrolls
2. SideNav — slide-in drawer with author portrait background, numbered nav links
3. Header — fixed bar with author name/logo (small portrait + name) + hamburger toggle
4. HeroSlider — full-height Owl Carousel with 2 slides, dark overlay, background images, centered text
5. About — split: left = portrait image (parallax), right = "About" heading + bio + social links + contact
6. Services — centered heading, 3 icon-based service blocks in a row
7. Portfolio — centered heading, 6 alternating image+text portfolio items with parallax
8. Counters — dark section, centered heading, 3 large number counters with labels
9. Footer — dark bg, centered social icons (circles), "Contact Us" with email, copyright bar

### Key Tokens
- Primary: #79efb4 (green/teal — links, hover accents)
- Secondary: #2f89fc (blue — service icons, counter numbers, progress bar)
- Footer bg: #121212
- Dark section: #3c312e
- Body text: #6c757d
- Font: Poppins (300-700)
- Social circles: 60px, border-radius 50%, bg rgba(255,255,255,0.05)
- Section padding: 7em 0
- Counter number: 180px (80px mobile), blue
- Heading section: uppercase span, letter-spacing 5px, h2 40px bold

### Component Inventory
- ScrollProgress (scroll-tracking bar)
- SideNav (drawer, portrait bg, numbered links)
- Header (fixed, logo + hamburger)
- HeroSlider (2 slides with parallax bg + overlay)
- AboutSection (portrait + bio + social + contact)
- ServiceBlocks (3 icon cards)
- PortfolioShowcase (6 alternating items)
- StatsCounter (3 large numbers)
- Footer (social circles + contact + copyright)

### Fidelity Notes
- Hero uses Owl Carousel → implement with CSS scroll-snap or a lightweight carousel
- Portfolio items have parallax scroll effect → use CSS `background-attachment: fixed` or framer-motion
- About section portrait uses `data-scrollax` parallax → use CSS background-position or framer-motion
- AOS (Animate on Scroll) library used for `.ftco-animate` → implement with framer-motion or Intersection Observer
- Scroll progress bar at top → simple scroll listener + width calculation
- Side navigation uses jQuery toggle → implement with React state
- Counter uses `jquery.animateNumber.min.js` → implement with requestAnimationFrame or simple animation
- No images need to be copied — all use picsum.photos placeholders
- Author portrait → use a portrait-themed picsum URL

## Implementation Tasks

1. Scaffold app: copy simplest existing app, rename to `craftfolio`
2. Set up `index.html` with Poppins font (Google Fonts link)
3. Set up `src/index.css` with Tailwind theme tokens (primary #79efb4, secondary #2f89fc)
4. Build ScrollProgress component (thin bar, scroll listener)
5. Build SideNav component (drawer, portrait bg, numbered links, open/close state)
6. Build Header component (fixed, logo with portrait, hamburger toggle)
7. Build HeroSlider component (2 slides, dark overlay, parallax bg, centered text)
8. Build AboutSection component (left portrait parallax, right content with social icons + contact)
9. Build ServiceBlocks component (3 icon-based service cards)
10. Build PortfolioShowcase component (6 alternating items, parallax images, hover overlay)
11. Build StatsCounter component (dark bg, 3 large blue numbers, animated count)
12. Build Footer component (social circles, contact info, copyright with Component Dock link)
13. Compose App.tsx with all sections in order
14. Write tests (100% coverage) for every component
15. Verify: typecheck, lint, test:coverage, build
