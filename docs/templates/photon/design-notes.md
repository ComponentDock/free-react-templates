# Photon — Design Notes

**Source:** ColorLib "Atomic" (https://colorlib.com/wp/template/atomic/)
**Preview:** https://preview.colorlib.com/theme/atomic/

## Section-by-section fidelity notes

### 1. Navbar
- Transparent background, positioned absolute over hero
- Dark text (logo + nav links)
- Logo left-aligned (col-3), nav right (col-9)
- Services has a dropdown with 3 sub-links (Service 1/2/3 repeated in 3 levels)
- Collapse to hamburger on mobile

### 2. Hero / Cover
- Full-width background image (cover, min-height 800px)
- Two-column layout inside: left = text, right = image + play button
- Headline: 50px bold black, subtext 30px gray (#999)
- Blue CTA button "Free Download" (#0389FF solid)
- Circular play button (80×80, 50% radius, 2px border) on the right image
- In React: use picsum.photos seed for hero image, lucide-react Play icon

### 3. Features (3-column)
- White background, standard section padding (7em 0)
- Each column: icon (top) + h3 title + paragraph
- Use lucide-react icons: Lightbulb, Carrot (or similar), Infinity
- Columns: col-md-4 each

### 4. About (2-column)
- White background, heading "Good Design is a Good Start"
- Left column: heading + paragraph + "More Features" link
- Right column: image (picsum.photos)
- Heading h2, link styled as button or text link

### 5. Gallery Carousel (full-width)
- Full-width container-fluid
- owl-carousel replacement: use a simple React carousel or CSS scroll-snap
- 3+ slide items with images (picsum.photos)
- Fade-up animation on scroll (AOS-style)

### 6. Services (3-column, light bg)
- Background: #f8f9fa (bg-light)
- 3 columns: icon + h3 title + description
- Use lucide-react icons: RefreshCw (Regular Update), Sparkles (Infinite), Shield (Security)

### 7. Counter / Stats (blue bg)
- Background: #0389FF (bg-primary)
- 3 counters in a row: Lines of Codes, Number of Projects, Number of Clients
- Large white numbers (50px), uppercase labels with opacity 0.5
- Animate count on scroll into view (use IntersectionObserver + state)

### 8. Testimonials (carousel)
- White background, centered layout (col-md-8)
- Carousel with quote text + attribution
- Replace owl-carousel with React carousel component

### 9. Footer (light bg)
- Background: #f8f9fa
- Multi-column: About text, Learn More links, Support links, About Us
- Copyright bar at bottom
- MUST include ComponentDock link

## Component structure

```
apps/photon/src/
  main.tsx
  App.tsx
  index.css          (Tailwind + @theme tokens)
  components/
    Navbar.tsx
    Hero.tsx
    Features.tsx
    About.tsx
    Gallery.tsx
    Services.tsx
    Counter.tsx
    Testimonials.tsx
    Footer.tsx
  test/
    setup.ts
```

## Design token mapping to Tailwind @theme

```css
@theme {
  --color-primary: #0389FF;
  --color-primary-hover: #0075dc;
  --color-bg-light: #f8f9fa;
  --font-sans: "Work Sans", arial, sans-serif;
}
```
