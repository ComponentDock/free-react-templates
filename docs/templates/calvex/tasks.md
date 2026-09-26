# Calvex — Design Notes & Task Outline

Source: ColorLib "Calvin" — https://colorlib.com/wp/template/calvin/
Preview: https://preview.colorlib.com/theme/calvin/
New name: calvex

## Section Order (top → bottom)

1. Header (transparent overlay, logo, nav, "Let's Talk" button)
2. Hero (background image, portrait, name + role heading)
3. About Info Bar (Design For, Phone, Email)
4. Services / My Experties (4 cards, 2x2 grid)
5. Gallery / My Works (4 items, 2x2 grid, hover overlay)
6. About Me (text + skill progress bars)
7. Brand Area (logo carousel)
8. Client Testimonial (carousel)
9. Blog / Latest News (3 cards)
10. Footer (Want To Work CTA + copyright/nav)

## Design Notes

### Header
- Transparent header overlays hero. Logo left, horizontal nav right.
- Nav: Home, Work, Service, Blog (dropdown: Blog, Blog Details, Elements), Contact.
- "Let's Talk" white outline button (`.border-btn`, border-radius 30px).
- Mobile: hamburger menu (slicknav).

### Hero
- Full-width background image (cover, 950px height desktop).
- Two columns: portrait image (327px) left, hero caption right.
- Heading: "My name is Calvin. Digital Product Designer" — 70px, weight 400, white.
- Subtitle: "Head of design at Calvino" — 30px, black.

### About Info Bar
- Below hero, inside hero area. 3 columns:
  - "Design For" → "Web & Mobile"
  - "Phone" → "+10 (67) 367-9034"
  - "Drop your Message" → "calvino90@gmail.com" with email icon

### Services
- Section title: "My Experties" (left-aligned, 50px).
- 4 cards in 2x2 grid (no gutters). Each: SVG icon + h5 title + paragraph + browse link.
- All use same content pattern (placeholder).

### Gallery
- Section title: "My Works" (left-aligned, 50px).
- 4 items in 2x2 grid. Each: background-image div + hover overlay with link.
- Hover: snake direction effect (hover-direction-snake.js).
- "More Work" orange outline button centered below.

### About Me
- Split: left text (col-6), right skills (col-6).
- Left: "About Me" heading + 2 paragraphs.
- Right: 3 progress bars (barfiller.js): UI Design 60%, UX 89%, Illustration 95%.

### Brand Area
- Owl-carousel of brand logos. 6+ logos, auto-scrolling. Border top/bottom.

### Testimonial
- "Client Testimonial" centered heading.
- Owl-carousel, 2 slides. Each: quote + avatar + name + role.
- Background: #FFFBF9 (warm white).

### Blog
- "Latest News" left-aligned heading.
- Owl-carousel, 3 cards. Each: image + "Tips" badge + date/author + title.
- Background: #fbf9ff (very light purple).

### Footer
- **Footer top (Want To Work):** Dark bg. Logo + description + social icons (5) + "Let's Talk" solid button + "Download CV" white outline button.
- **Footer bottom:** Copyright + nav links (Home, Work, Service, Blog, Contact). Copyright links Component Dock.

## Component Plan

| Component         | Sections covered              | Notes                                  |
| ----------------- | ----------------------------- | -------------------------------------- |
| Header            | 1                             | Transparent, sticky, nav + CTA button  |
| HeroSection       | 2                             | Background image, portrait, heading    |
| AboutInfoBar      | 3                             | 3-column contact info strip            |
| ServiceCards      | 4                             | 2x2 grid, 4 cards with icons           |
| PortfolioGallery  | 5                             | 2x2 grid, hover overlay, "More Work"   |
| AboutMe           | 6                             | Text + skill progress bars             |
| BrandCarousel     | 7                             | Logo carousel (owl-carousel)           |
| TestimonialCarousel| 8                            | Quote carousel with avatars            |
| BlogCards         | 9                             | 3 blog cards in carousel               |
| Footer            | 10                            | Two-part: CTA top + copyright/nav bottom|

## Fidelity Priorities

1. **Color accuracy:** #FF8553 orange is the dominant brand — must match exactly.
2. **Font:** DM Sans throughout, weight 400/500/600/700.
3. **Button styles:** Pill-shaped (25-30px border-radius). Solid orange, white outline, orange outline variants.
4. **Transparent header:** Must overlay hero without its own background.
5. **Hero layout:** Portrait image left, heading right — asymmetric split.
6. **Skill bars:** Animated progress bars with percentage labels — use intersection observer.
7. **Gallery hover:** Snake direction hover effect — can use CSS transitions.
8. **Carousel behavior:** Multiple carousels (brand, testimonial, blog) — use lightweight carousel.
9. **Responsive:** Mobile hamburger, stacked columns, full-width hero on small screens.
