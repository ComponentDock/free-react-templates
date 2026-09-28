# Supperhouse — Design Notes & Task Outline

## Source

- ColorLib template: Restaurant
- Slug: `restaurant`
- Preview: https://preview.colorlib.com/theme/restaurant/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/restaurant-free-restaurant-website-template.jpg

## Design Overview

Classic restaurant landing page with warm tones. Dark wood-hero background, red (#f42f2c) accent throughout, Poppins font family. Professional food-photography-forward aesthetic with hover animations on cards. Clean white content sections alternating with a light blue-grey (team area) and dark footer.

## Section-by-Section Fidelity Notes

### 1. Navbar

- Transparent header, white nav links on hero
- Sticky scroll effect: bg transitions to `rgba(34,34,34,0.9)` with box-shadow
- Logo: red text mark (e.g. "S." for Supperhouse)
- Nav links: uppercase, 12px, weight 400, active = brand red
- Mobile: hamburger menu with slide-in dark overlay panel

### 2. Hero / Banner

- Full-width background image (dark wood texture + plate of food on right)
- Left-aligned white text: subtitle (uppercase, letter-spacing 3px), h1 (60px, weight 700), paragraph (white, weight 300)
- CTA button: "Check Our Menu", pill shape (border-radius 25px), red bg, white text, uppercase
- Button hover: transparent bg, white border, white text
- Scallop/wave SVG divider at bottom edge

### 3. Top Rated Dishes

- White background, section-gap padding (120px)
- Centered title ("Our Top Rated Dishes") + subtitle
- 3-column grid: image + h4 heading (uppercase) + paragraph
- Hover: image rotates 5deg + scales 1.2, heading turns red
- Use `picsum.photos/seed/supperhouse-dish-<n>` for placeholder images

### 4. Video / Promo

- Full-width background image (dark food-prep scene)
- Centered play button (play icon image, links to YouTube lightbox)
- White heading + subtitle below play button
- Padding: 200px vertical

### 5. Features

- White background, top padding 100px, bottom border (1px solid #eee)
- 4-column grid: icon image + heading (uppercase pt-20 pb-20) + paragraph
- Features: "Refreshing Breakfast", "Awesome Lunch", "Soothing Dinner", "Rich Quality Buffet"
- Use lucide-react icons or placeholder SVGs

### 6. Featured Food Menus (Carousel)

- White background, section-gap
- Centered title + subtitle
- Carousel/slider with dish items: large heading + paragraph + CTA button
- Implement as a simple React state-based carousel (no heavy deps)
- CTA: primary-btn style

### 7. Our Chefs / Team

- Light blue-grey background (`#f9f9ff`)
- 3-column grid: chef photos with red hover overlay
- Overlay: `rgba(244,47,44,0.8)` tint, shows name (uppercase, letter-spacing 3px) + role + social icons (3 icons: Twitter, Facebook, Instagram)
- Hover transition: opacity 0 → 1
- Use `picsum.photos/seed/supperhouse-chef-<n>` for placeholder images

### 8. Blog

- White background, section-gap
- Centered title + subtitle
- 4-column grid: image + date badge (black bg, white text, 2px 15px padding) + title (h4, hover turns red) + excerpt + meta (likes count + comments count with lnr icons)
- Image hover: scale 1.2 with overflow hidden on container

### 9. Contact

- Split layout: left = map placeholder (545px height), right = form
- Form fields: name, email (with pattern validation), message textarea
- "Send Message" button (primary-btn, with arrow icon)
- Common-input style: border 1px rgba(111,117,152,0.3), 48px line-height, 25px horizontal padding
- Use a static div with placeholder for map (no Google Maps API key)

### 10. Footer

- Dark background (`#222`)
- 3-column layout:
  - About Us: paragraph text
  - Contact Us: paragraph + phone numbers (h4.number, color #f42f2c, font-size 24px, weight 600)
  - Newsletter: paragraph + email input (border-radius 20px) + subscribe button (arrow icon, red)
- Bottom bar: copyright text (links to Component Dock) + social icons (4 squares: Facebook, Twitter, Dribbble, Behance)
- Social icon squares: bg `#111`, padding 12px 16px, hover bg `#f42f2c`, icon color `#ccc`, hover icon color `#fff`

## Implementation Tasks

1. [ ] Create app scaffold: `apps/supperhouse/` with Vite + React 19 + Tailwind 4 + TypeScript
2. [ ] Add Poppins font link to `index.html`
3. [ ] Set up `@theme` tokens in `src/index.css` (brand red #f42f2c, body text #777, heading #222, footer #222, team bg #f9f9ff, nav font size 12px)
4. [ ] Build Navbar component (transparent, sticky scroll effect, mobile hamburger)
5. [ ] Build Hero component (background image, text hierarchy, CTA button, wave SVG divider)
6. [ ] Build TopDishes component (3-column card grid with hover effects)
7. [ ] Build VideoSection component (background image, play button overlay)
8. [ ] Build Features component (4-column icon grid)
9. [ ] Build FeaturedMenus component (carousel with state management)
10. [ ] Build TeamSection component (3-column grid with hover overlay)
11. [ ] Build BlogSection component (4-column cards with date badge + meta)
12. [ ] Build ContactSection component (split map + form)
13. [ ] Build Footer component (3-column, newsletter input, social icons, Component Dock link)
14. [ ] Compose all sections in App.tsx in correct order
15. [ ] Add responsive breakpoints (mobile stacking, hamburger nav)
16. [ ] Write tests (100% coverage)
17. [ ] Verify: typecheck + lint + test + build pass
