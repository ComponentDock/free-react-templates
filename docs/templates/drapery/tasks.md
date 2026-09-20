# Drapery — Implementation Tasks & Design Notes

## Source mapping

- **ColorLib slug:** `fashion`
- **ColorLib page:** https://colorlib.com/wp/template/fashion/
- **Preview (live):** https://preview.colorlib.com/theme/fashion/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fashion-bold-free-fashion-website-template.jpg
- **Research source:** Live preview HTML + css/style.css extracted 2026-09-21

## Structure order (top to bottom)

1. **Navbar** — Sticky top nav with brand "Drapery" + coral dot, dropdown menus, hamburger on mobile
2. **Hero Section** — Split layout: left figure-2 image + "Learn more"; right carousel with 3 rotating headings + fashion images + prev/next arrows
3. **Collections** — "Collections" heading, prev/next, product carousel (8 items: Minimal, Collecta, Nine8, Hut repeated)
4. **About / Boutique** — "A Fashion Boutique" heading, descriptive text, two stacked fashion images
5. **Testimonials** — "Testimonials" heading, 3 cards (Adam Aderson, Lukas Devlin, Kayla Bryant) with circular avatars
6. **Blog Posts** — "Blog Posts" heading, 4 post cards in responsive grid with top border dividers
7. **Footer** — About text, "Connect with us" social icons, "Navigations" 3-column link grid, copyright bar, Component Dock link

## Section-by-section fidelity notes

### Navbar
- Brand: "Drapery" black text + coral dot (`#ff6363`), left-aligned
- Nav links: Home, Dropdown (nested sub-menus), Inner Page, Contact Us
- Sticky on scroll (white bg, no visible border)
- Mobile: hamburger icon → slide-out/overlay menu
- Font: Lato sans-serif

### Hero Section
- Split layout: left column (col-md-3) has figure-2 image + fig-2-text with "Learn more" coral link
- Right column (col-md-5) has owl carousel with:
  - Pagination: "1 of 0" (owl-current / owl-total)
  - Text carousel: "Fashion Presents", "Creative Design", "Modern Fashion" (Playfair Display, large, bold)
  - Image carousel: fashion photos (use picsum.photos placeholders)
  - Custom prev/next arrows: coral SVG arrows (#ff6363)
- AOS fade-up animations on elements
- Description paragraph above the carousel

### Collections
- Heading: "Collections" with line-top decoration
- Prev/Next links (text, no arrows)
- Product carousel: 4 items visible, 8 total (duplicated)
  - Each: product image, name (Playfair Display bold), price ($29 bold)
  - Hover: image scale/zoom effect
  - Names: Minimal, Collecta, Nine8, Hut (repeat)
- Responsive: 4 cols → 2 cols → 1 col

### About / Boutique
- Two-column: text left, images right (stacked vertically)
- Heading: "A Fashion Boutique" (line-top)
- Body text: gray color (#a09b9b)
- Images: two stacked fashion photos (use picsum.photos)
- AOS fade-up animations

### Testimonials
- Heading: "Testimonials" centered, line-top
- 3 cards in a row (max-width 500px each, centered)
- Each card: circular avatar (70px, 50% border-radius), quote paragraph, name (18px, #000)
- Names: Adam Aderson, Lukas Devlin, Kayla Bryant

### Blog Posts
- Sub-heading: "BLOG POSTS" (12px Lato uppercase, #000)
- Main heading: "Blog Posts" (line-top)
- 4 cards in responsive grid, separated by 1px #efefef top border
- Each card: thumbnail image (left on desktop), title link (14px bold, #000), date, excerpt (14px, #a09b9b)
- Hover: title turns coral (#ff6363)

### Footer
- Two-column layout (col-lg-4 + col-lg-6)
- Left: "About" heading + paragraph, "Connect with us" + social icons (Facebook, Twitter, Instagram, Dribbble, LinkedIn)
- Right: "Navigations" heading, 3 columns of links (black text, coral hover)
- Copyright bar: centered, "All rights reserved" + Component Dock link
- Light background (white), no dark footer

## Design tokens reference

- Headings: "Playfair Display", serif — editorial/luxury feel
- Body: "Lato", sans-serif — clean and readable
- Accent: #ff6363 (coral-red) — CTAs, links, highlights, arrows
- Accent hover: #ff7777 (lighter coral)
- Text: #000000 (headings), #303030 (body implied)
- Muted: #a09b9b (descriptions, testimonials)
- Borders/dividers: #efefef
- Backgrounds: #ffffff (all sections, no dark sections)
- Buttons: pill-shaped (30px radius), #ff6363 bg, white text, hover #ff7777
- Social icons: #000000 default, #ff6363 hover
- Container: Bootstrap container (no custom border-radius)

## Placeholder images

- Hero figure-2: `https://picsum.photos/seed/drapery-hero-1/600/800`
- Hero carousel slides: `https://picsum.photos/seed/drapery-slide-1/800/600`, `-slide-2/...`, `-slide-3/...`
- Product cards: `https://picsum.photos/seed/drapery-prod-1/400/500`, etc. (8 total)
- About section images: `https://picsum.photos/seed/drapery-about-1/600/400`, `drapery-about-2/600/400`
- Testimonial avatars: `https://picsum.photos/seed/drapery-avatar-1/70/70`, etc. (3 total)
- Blog post thumbnails: `https://picsum.photos/seed/drapery-blog-1/600/400`, etc. (4 total)
