# Pendulum — Design Notes & Task Outline

Source: ColorLib "Watch" (https://colorlib.com/wp/template/watch/)
Preview: https://preview.colorlib.com/theme/watch/
New name: pendulum

## Section-by-section fidelity notes

### 1. Navbar
- Sticky, transparent overlay on hero
- Logo text "Pendulum" (left), nav links (right)
- Nav links: Home, About, Features, Products, Reviews, FAQ
- Hamburger on mobile
- Use lucide-react Menu icon for hamburger toggle

### 2. Hero/Banner
- Full-viewport dark background image (use picsum.photos with dark seed)
- Subtitle above headline: "Now you can feel the Heat" (uppercase, white)
- Headline: "Smart New Future" (large, white, h1)
- CTA: "Buy Now" — gradient blue→cyan (#235ee7→#4ae7fa), pill shape (rounded-full), white text
- Gradient: `bg-gradient-to-r from-[#235ee7] to-[#4ae7fa]`

### 3. Video/About split
- Two-column on desktop (text left, video right)
- Left: subtitle "Brand new app to blow your mind", heading, paragraph, "Get Started now" CTA
- Right: video placeholder with play button overlay (dark semi-transparent bg)
- On mobile: stack vertically, video first

### 4. Features grid
- Background: #f9f9ff (light lavender) — `bg-[#f9f9ff]`
- Heading: "Top Courses That are open for Students"
- Subtext: "Who are in extremely love with eco friendly system."
- Layout: 2 cards left + central product image + 2 cards right (4-col desktop)
- Each card: lucide-react icon (Rocket, Cog, Building2, Phone), title, description
- Central image: picsum.photos placeholder

### 5. Home About split
- Two-column: product image left, text right
- Heading: "We've made a life that will change you"
- Description paragraph + "Get Started now" CTA button
- No background color (white default)

### 6. Services
- Heading: "Some Features that Made us Unique"
- 6 cards in 3×2 grid (col-lg-4 col-md-6)
- Each card: bg #f9f9ff, rounded-xl (10px), padding 30px, icon (lucide), title, description
- Hover: blue shadow `shadow-[0_20px_30px_rgba(35,94,231,0.2)]`
- Services: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recommended, Positive Reviews
- Icons: User, Shield, Phone, Rocket, Diamond, MessageCircle

### 7. Products/Unique Features
- Background: #04091e (dark navy) — `bg-[#04091e]`
- Heading in white: "Some Features that Made us Unique"
- 4 product cards in a row (col-lg-3 col-md-6)
- Each card: white bg, product image (picsum), name "Apple Watch", price "£399.00", "Pre Order" CTA
- CTA: gradient bg, white text, uppercase

### 8. Reviews
- Heading: "Some Features that Made us Unique" (same as products)
- 3 reviewer cards (col-lg-4 col-md-6)
- Each card: name, review text, star rating (3 filled + 2 empty pattern)
- Use lucide-react Star icon, filled/unfilled variants

### 9. FAQ
- Heading: "Frequently Asked Questions"
- 4 accordion items
- FAQ header bg: gradient blue→cyan, white text
- Body: white bg
- Use React state for expand/collapse (aria-expanded)
- One open at a time (controlled accordion)

### 10. Footer
- Background: #04091e (dark navy) — `bg-[#04091e]`
- 3 columns: About Us (text), Newsletter (email input + arrow button), Follow Us (social icons)
- Social icons: Facebook, Twitter, Dribbble, Behance (use lucide-react)
- Attribution: "Made with Component Dock" linking to https://www.componentdock.com/
- No ColorLib attribution

## Implementation order

1. Scaffold app from simplest existing template (copy + rename)
2. Navbar.tsx — sticky, responsive hamburger
3. Hero.tsx — full-viewport, gradient CTA
4. VideoAbout.tsx — split layout
5. Features.tsx — card grid with central image
6. HomeAbout.tsx — split layout
7. Services.tsx — 6-card grid
8. Products.tsx — dark bg, 4 product cards
9. Reviews.tsx — 3 reviewer cards with stars
10. FAQ.tsx — controlled accordion
11. Footer.tsx — 3-column, newsletter, social
12. App.tsx — compose all sections
13. index.css — Tailwind + theme tokens
14. Tests — 100% coverage

## Key design token mapping (Tailwind)

| Token | CSS value | Tailwind class |
|-------|-----------|----------------|
| Brand blue | #235ee7 | `text-[#235ee7]` / `bg-[#235ee7]` |
| Accent cyan | #4ae7fa | `text-[#4ae7fa]` / `bg-[#4ae7fa]` |
| Gradient | 0deg #235ee7→#4ae7fa | `bg-gradient-to-r from-[#235ee7] to-[#4ae7fa]` |
| Dark navy | #04091e | `bg-[#04091e]` |
| Lavender bg | #f9f9ff | `bg-[#f9f9ff]` |
| Body text | #777777 | `text-[#777777]` |
| Headings | #222222 | `text-[#222222]` |
| Pill button | border-radius 25px | `rounded-full` |
| Card radius | 10px | `rounded-[10px]` or `rounded-xl` |
| Section gap | 120px | `py-[120px]` or `py-24` |
| Card hover shadow | rgba(35,94,231,0.2) | `hover:shadow-[0_20px_30px_rgba(35,94,231,0.2)]` |
