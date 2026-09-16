# Brickhaus — Implementation Tasks & Design Notes

Recreation of ColorLib Homebuilder (construction company template).

Source: https://colorlib.com/wp/template/homebuilder/
Preview: https://preview.colorlib.com/theme/homebuilder/

## Section Order (replicate exactly)

1. TopBar
2. Navbar
3. Hero Carousel
4. Services Row 1 (4-column icons)
5. Services Row 2 (3-column cards)
6. About with Tabs
7. Counter Stats
8. Work Gallery (3×2)
9. Testimonials Carousel
10. Blog Cards (3-column)
11. Newsletter Bar
12. Footer (dark, multi-column + quote form)

## Design Notes

### TopBar
- Logo text "Brickhaus." with "haus." in bold/span
- Social icons row: Facebook, Twitter, Instagram, Dribbble
- Use lucide-react icons (Facebook → custom, or just use lucide equivalents)
- Light border-bottom or no border; white bg

### Navbar
- Dark background (bg-gray-900 or similar)
- Links: Home, About, Our team, Project, Blog, Contact
- Search input on the right with search icon button
- Mobile: hamburger toggler, collapsible menu
- Active link has gold (#fdbe34) highlight

### Hero Carousel
- Full-width, background-image with dark gradient overlay
- 3 slides, each with h2 subtitle + h1 main title
- Dot indicators at bottom center
- Use a simple React state-based carousel (no owl-carousel)
- Overlay: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0,0.4) 100%)
- Placeholder images: `https://picsum.photos/seed/brickhaus-hero-1/1920/1080` etc.

### Services Row 1
- 4-column grid, each card centered
- Gold circular icon (90px diameter, bg #fdbe34, box-shadow)
- Secondary circle behind (bg #fede99, border-radius 50%)
- Heading + short paragraph below
- Lucide icons: HardHat (construction), Home (renovation), PaintBucket (painting), Ruler (architecture)

### Services Row 2
- 3-column, no gutters, each full-height
- Horizontal layout: icon circle + text
- Card 1: bg #f8f9fd (light gray), normal text
- Card 2: bg #fdbe34 (gold), black text, white icon circle border
- Card 3: bg #00043c (navy), white text, gold icon, muted text

### About Section
- Split: left = image with play button overlay, right = content
- Image: placeholder with play button (circle + triangle icon)
- Right side: subheading "Welcome to Brickhaus", h2 "We create and turn into reality"
- 3 tabs: Our Mission, Our Vision, Our Value
- Tab content in a light bg rounded panel
- Use React state for tab switching

### Counter Stats
- 4-column grid
- Each: large number (50px, bold) + label text (uppercase, 18px, bold)
- Numbers: 50 (Years Experienced), 8500 (Project Done), 378 (Professional Expert), 1200 (Machineries)
- Animate count-up on scroll into view (use IntersectionObserver + useState)

### Work Gallery
- 3×2 grid, full-width (container-fluid)
- Each card: background-image, overlay on hover with expand icon
- Category label (e.g. "Building") + project title
- Placeholder images: `https://picsum.photos/seed/brickhaus-work-1/600/400` etc.

### Testimonials
- Gold (#fdbe34) background
- Carousel of testimonial cards
- Each: quote icon, text paragraph, circular avatar (80px), name + position
- Use simple state-based carousel
- Placeholder avatars: `https://picsum.photos/seed/brickhaus-person-1/80/80`

### Blog Cards
- 3-column grid
- Each card: rounded-top image, meta row (date + author + comment count), title
- Placeholder images: `https://picsum.photos/seed/brickhaus-blog-1/600/400`

### Newsletter Bar
- Gold (#fdbe34) background, rounded container
- Left: "Subscribe to our Newsletter" heading (white, 24px)
- Right: email input + subscribe button
- Simple form with state

### Footer
- Dark navy (#00043c) or dark bg
- Left side (9 cols): About us + social links, Services links, About links, Resources links
- Right side (3 cols): "Request A Quote" form (name, email, subject, message, send button)
- Copyright line with "Made with Component Dock" link → https://www.componentdock.com/

## Component Structure

```
src/
  main.tsx
  App.tsx
  index.css
  components/
    TopBar.tsx
    Navbar.tsx
    HeroCarousel.tsx
    ServicesRow.tsx
    ServicesRow2.tsx
    About.tsx
    CounterStats.tsx
    WorkGallery.tsx
    Testimonials.tsx
    BlogCards.tsx
    Newsletter.tsx
    Footer.tsx
  test/
    setup.ts
```

## Key Implementation Notes

- All icons from lucide-react (not Font Awesome or Flaticon)
- All images use picsum.photos placeholders with deterministic seeds
- Google Fonts: Poppins (weights 300, 400, 500, 600, 700, 800) via `<link>` in index.html
- Brand color #fdbe34 goes in Tailwind @theme as primary
- Navy #00043c as dark accent
- All border-radius on buttons: 3px
- Sections use 7em vertical padding (5em on mobile)
- Use cn() from packages/ui for conditional classes
- Test: one describe per component, scenario-style it blocks
- 100% coverage required
