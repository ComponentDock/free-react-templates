# Quark — Design Notes & Implementation Todo

Source: ColorLib Atomic (https://preview.colorlib.com/theme/atomic/)

## Structure Order

1. Navbar
2. Hero Cover
3. Features (3-column)
4. About
5. Services (6-item grid)
6. Gallery (4 image cards)
7. Counter (3 stats)
8. Testimonials (carousel)
9. Footer (4-column)

## Section-by-Section Fidelity Notes

### Navbar
- Logo: text "Quark" (not an image)
- Links: Home, About, Services (dropdown), Gallery, Blog, Contact
- Mobile: hamburger (spin animation), blue bg `#0389FF`, white text
- Desktop: transparent, absolute positioned over hero, white text
- On scroll: transitions to solid `#0389FF` background
- Dropdown: Services has 3 nested sub-links with box-shadow

### Hero Cover
- Split layout: text left, image right (col-lg-6 each)
- Heading: h1, 50px on desktop, 30px on mobile, black
- Subtext: gray `#999999`, regular weight
- CTA: "FREE DOWNLOAD" button, `#0389FF`, square (radius 0), uppercase, letter-spacing
- Play button: 80px circle, 2px black border, play triangle inside
- Background: full-height image or split gradient
- Placeholder image: use `picsum.photos/seed/quark-hero/1200/800`

### Features
- 3 equal columns in a row
- Each: line-art icon (use lucide-react equivalents) + h3 heading + paragraph text
- White background section
- Icons: lightbulb, pencil, infinity → use lucide `Lightbulb`, `Pencil`, `Infinity`
- Placeholder: icon color `#d6dadd`

### About
- White background
- h2: "Good Design is a Good Start"
- Link text styled as a button/link
- 2–3 paragraphs of descriptive text
- Text-heavy, left-aligned

### Services
- Light gray background `#f8f9fa`
- 6 items in a 3x2 grid
- Each: icon (80px, gray `#d6dadd`) + h3 + paragraph
- CTA link "More Features" at bottom
- Use lucide-react icons for each service

### Gallery
- Same light gray section (continues from services)
- 4 image cards in a row (2x2 on tablet, 1 column on mobile)
- Each card: 500px height, background image, dark overlay on hover
- Hover reveals: title (h2, white) + category tags ("Design, Illustration")
- Overlay transitions: 0.3s ease
- Placeholder images: `picsum.photos/seed/quark-gallery-1/600/500` etc.

### Counter
- Primary blue background `#0389FF`
- 3 counters centered in a row
- Each: large number (50px, white) + uppercase label (opacity 0.5, white)
- Animate count-up on scroll into view (intersection observer)
- Numbers are placeholder (e.g. 1200, 500, 10000)

### Testimonials
- White background
- Carousel/slider with quotes
- Each slide: large opening quote mark (100px, black) + quoted text + author info
- Dot/arrow navigation between slides
- Can implement as simple state-based carousel

### Footer
- Light background `#f8f9fa`
- 4 columns: About (paragraph), Learn More (4 links), Support (4 links), About Us (4 links)
- Social links row ("Connect With Us")
- "Download for free" link
- Copyright: "All rights reserved | Made with Component Dock"
- Footer link: https://www.componentdock.com/

## Component Mapping

| Section | Component File |
| --- | --- |
| Navbar | `Navbar.tsx` |
| Hero Cover | `Hero.tsx` |
| Features | `Features.tsx` |
| About | `About.tsx` |
| Services | `Services.tsx` |
| Gallery | `Gallery.tsx` |
| Counter | `Counter.tsx` |
| Testimonials | `Testimonials.tsx` |
| Footer | `Footer.tsx` |

## Token Usage in @theme

```css
@theme {
  --color-primary: #0389FF;
  --color-primary-hover: #0075dc;
  --color-primary-active: #006ecf;
  --font-family-body: "Work Sans", arial, sans-serif;
}
```

## Implementation Order

1. Scaffold app from simplest existing template
2. Set up index.html with Google Font (Work Sans)
3. Create theme tokens in index.css
4. Build Navbar (desktop + mobile + scroll effect)
5. Build Hero (split layout, play button)
6. Build Features (3-column grid)
7. Build About (text section)
8. Build Services (6-item grid)
9. Build Gallery (4 image cards with hover)
10. Build Counter (animated stats)
11. Build Testimonials (carousel)
12. Build Footer (4-column)
13. Compose App.tsx with all sections
14. Write tests for each component
15. Verify 100% coverage
