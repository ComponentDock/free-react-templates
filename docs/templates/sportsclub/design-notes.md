# SportsClub — Design Notes & Task Outline

## Source
- ColorLib: Sportify — https://colorlib.com/wp/template/sportify/
- Preview: https://preview.colorlib.com/theme/sportify/

## Structure order (top to bottom)
1. Navbar (fixed, transparent → solid on scroll)
2. Hero (full-viewport slider, dark overlay)
3. Intro boxes (3-column, circular icons, light bg)
4. About (dark bg, 2-col: text + image)
5. CTA banner (gradient overlay on bg image)
6. Classes (carousel slider, cards)
7. Testimonial/quote (dark bg, centered text)
8. Pricing (carousel/slider, 3 cards, one alt)
9. Footer (3-col, icons, social, copyright)

## Section-by-section fidelity notes

### Navbar
- Centered logo + nav links
- Social icons (Pinterest, Facebook, Twitter, Dribbble, Behance) → use lucide-react
- Hamburger for mobile (full-screen slide-in menu)
- Scroll behavior: transparent bg → solid white on scroll past hero

### Hero
- Full-viewport height slider (carousel with 3 slides)
- Each slide: large headline split across lines ("be the best version of" / "yourself"), subtitle, CTA button
- Dark overlay on background images (rgba(15,4,50,0.85) approx)
- Background images → use picsum.photos/seed/sportsclub-hero-<n>/1920/1080

### Intro boxes
- 3-column grid, each box: circular icon (border-radius 50%), title, description
- Light background: #eef3f6
- Use lucide-react icons (Dumbbell, Heart, Zap or similar)

### About
- Dark background: #0f0432
- Two columns: text left, image right
- Section subtitle + title
- CTA button with gradient

### CTA banner
- Full-width, background image with purple-to-red gradient overlay
- "join our gym" heading, buttons

### Classes
- Carousel/slider showing class cards
- Each card: image, class name, description, "read more" link
- Use a simple CSS scroll-snap or custom carousel (no owl-carousel)

### Testimonial
- Dark background
- Centered quote text, author name
- Decorative quotation mark icon

### Pricing
- 3 pricing cards in a row
- Each: plan name, price, "per month", feature list, CTA button
- One card highlighted (alt background)
- Cards could use scroll-snap on mobile

### Footer
- 3 columns: logo center, contact info (phone, location, email with icons), social links
- Copyright bar at bottom
- MUST link https://www.componentdock.com/ ("Component Dock")

## Design tokens to define in index.css @theme
```css
@theme {
  --color-brand: #7800ff;
  --color-brand-secondary: #ff0e3b;
  --color-dark: #0f0432;
  --color-dark-mid: #190a49;
  --color-light-bg: #eef3f6;
  --color-gold: #ffc016;
  --color-salmon: #ffa07f;
}
```

## Placeholder images
- Hero slides: `https://picsum.photos/seed/sportsclub-hero-1/1920/1080` etc.
- About image: `https://picsum.photos/seed/sportsclub-about/600/400`
- Class cards: `https://picsum.photos/seed/sportsclub-class-1/400/300` etc.
