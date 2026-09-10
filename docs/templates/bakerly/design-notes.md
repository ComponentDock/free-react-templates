# Bakerly — Design Notes & Task Outline

Source: ColorLib "Cakes" → https://preview.colorlib.com/theme/cakes/
New name: bakerly (no collision with apps/ list)

## Implementation task order

### 1. Scaffold
- Copy simplest existing app (e.g. apps/abjure or similar small template)
- Rename package to `@free-react-templates/bakerly`
- Update `public/CNAME` → `bakerly.free.componentdock.com`
- Update `vite.config.ts` homepage
- Run `npm install` at root to register workspace

### 2. Theme tokens (index.css)
```css
@import "tailwindcss";
@theme {
  --color-brand: #F04506;
  --color-brand-dark: #d83e06;
  --color-hero-bg: #FFF5F2;
  --color-footer-bg: #FFF7F3;
  --font-heading: "Quicksand", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --font-decorative: "Lobster", cursive;
}
```
- Add Google Fonts link for DM Sans, Quicksand, Lobster in index.html

### 3. Navbar component
- Sticky white header with shadow on scroll
- Logo (left), nav links (center), phone + "Order Online" pill button (right)
- Mobile: hamburger menu
- Dropdown submenu on "Blog" (optional — can simplify to single link)

### 4. Hero section
- Full-width background image (use picsum.photos placeholder)
- Left column (col-6): decorative Lobster "Delicious" watermark at 6% opacity,
  h1 "Delicious Cake For Everyone", paragraph, "Explore Menu" CTA pill button
- Right column: cake image in organic rounded/oval container
- Decorative cake shape bleeds at bottom-left (can be absolute-positioned)

### 5. Popular Products section
- Section label "Most Popular" (orange, uppercase, letter-spacing)
- Heading "Our Exclusive Cakes"
- 3-column grid of product cards
  - Each card: peach bg (#FFF5F2), rounded bottom-right (60px), product image,
    name, short description, "$20 | Order Now" pill button
  - Hover: image scale(1→1), button lifts up
- Use responsive grid, not carousel (simpler, equally faithful)

### 6. About section
- Split layout: large image left, text right
- Label "Fresh & Delicious" (orange), heading, paragraph
- "Our Story" outlined button (white bg, orange border, hover fills)

### 7. Services / Features section
- Label "Our Features", heading "Quality is Our First Priority"
- 3-column cards with lucide-react icons, title, description
- Decorative shape at bottom-right (optional)

### 8. Video section
- Full-width background image (picsum placeholder)
- Centered play button (circle with play icon)
- Simple modal or skip if no video content needed

### 9. Testimonials section
- Label "Testimonial", heading "What Customers Say"
- Carousel or single testimonial with avatar, quote, name, title
- Owl carousel replacement: use simple flex + auto-scroll or state-based carousel

### 10. Instagram feed section
- Horizontal row of 5–6 food images (picsum placeholders)
- Instagram icon overlay on hover
- Full-width, no padding between images

### 11. Footer
- 4-column layout:
  - Col 1: Logo + social icons (Twitter, Facebook, LinkedIn, Pinterest)
  - Col 2: Quick Links (Home, About, Services, Blog, Contact)
  - Col 3: Cake list (Blackforest, etc.)
  - Col 4: Contact info (address, phone)
- Footer bottom: copyright + Component Dock attribution
- Background: #FFF7F3

### 12. Back-to-top button
- Fixed position bottom-right, orange circle, scrolls to top

### 13. Tests (TDD)
- One describe per component
- Scenario-style it blocks matching spec
- 100% coverage required

### 14. Verification
- Run scripts/verify-app.sh bakerly
- Confirm no ColorLib references in apps/bakerly/

## Fidelity notes (section-by-section)

| Section         | Key fidelity points                                      |
| --------------- | -------------------------------------------------------- |
| Navbar          | Sticky, white bg, shadow on scroll, orange hover links   |
| Hero            | Lobster watermark at 6% opacity, split layout, organic shapes |
| Products        | Peach cards, rounded bottom-right 60px, hover effects    |
| About           | Image left, text right, outlined CTA button              |
| Services        | 3-column icon cards, decorative shape                    |
| Video           | Background image + play button overlay                   |
| Testimonials    | Quote + avatar carousel                                  |
| Instagram       | Full-width image row with hover icon                     |
| Footer          | 4-col warm pink bg, Component Dock attribution           |
