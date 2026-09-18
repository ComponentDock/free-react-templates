# Trailcraft — Implementation Todo & Design Notes

## Source mapping
- **ColorLib source:** Adventure 2
- **Source slug:** `adventure-2` / `adventure2`
- **Preview URL:** https://preview.colorlib.com/theme/adventure2/
- **Listing URL:** https://colorlib.com/wp/template/adventure-2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/adventure2-free-template.jpg
- **Category:** Travel

## Section structure (top → bottom)

| # | Section | Component name | Notes |
|---|---------|---------------|-------|
| 1 | Navbar | `Navbar.tsx` | Dark bg, brand text, 6 nav links, sticky on scroll, mobile hamburger |
| 2 | Hero | `Hero.tsx` | Full-viewport bg image, dark overlay, h1 + subtitle |
| 3 | Search Tabs | `SearchTabs.tsx` | 3 pill tabs (Flight/Hotel/Car Rent), form fields per tab, Search btn |
| 4 | Intro Features | `IntroFeatures.tsx` | 3 cols: numbered headings + paragraphs, bg-light |
| 5 | Vacation Ideas | `VacationIdeas.tsx` | 3 image cards with text overlay, center heading |
| 6 | About | `About.tsx` | Two-column flex: image + text, heading "The Best Travel Agency" |
| 7 | Services | `Services.tsx` | 4 icon-service cards, bg-light, center heading |
| 8 | Destinations | `Destinations.tsx` | Fluid grid, image + text cards, star ratings, prices, duration |
| 9 | Counter Stats | `CounterStats.tsx` | Parallax bg image, 4 animated number counters |
| 10 | Testimonials | `Testimonials.tsx` | Carousel, avatar + stars + quote + name |
| 11 | Restaurants | `Restaurants.tsx` | 4 cards with image + name overlay |
| 12 | Newsletter | `Newsletter.tsx` | Parallax bg, dark overlay, email form + subscribe btn |
| 13 | Footer | `Footer.tsx` | Dark bg, 4 columns, social icons, contact, Component Dock link |

## Design token notes

```
--brand-primary: #78d5ef      (light blue/cyan buttons)
--brand-hover: #56caeb
--brand-active: #4ac7ea
--footer-bg: #222831           (dark blue-grey)
--footer-dark: #3c312e         (darker accent)
--text-primary: #1a1a1a        (near-black headings)
--text-body: #999999           (light gray body)
--text-muted: #b3b3b3
--text-secondary: #666666
--bg-light: #f8f9fa
--border: #e9ecef
--font-body: 'Poppins', sans-serif (weights 200-700)
--font-display: 'Abril Fatface', cursive (destination titles)
```

## Component implementation notes

### Navbar
- Use `<nav className="navbar navbar-expand-lg navbar-dark bg-dark">`
- Sticky behavior: use `useEffect` + scroll listener to toggle a class
- Mobile: Bootstrap-style hamburger collapse

### Hero
- Full-viewport height with `min-h-screen`
- Background image: `picsum.photos/seed/trailcraft-hero/1920/1080`
- Dark overlay: `bg-black/50` or `bg-black/60`
- White heading (text-5xl/6xl, font-bold) + subtext (text-lg)

### Search Tabs
- State-managed tab selection (Flight/Hotel/Car Rent)
- Pill buttons with active state using brand primary color
- Form fields with icons (use lucide-react: MapPin, Calendar, Users, Plane)
- Primary button: `bg-[#78d5ef] hover:bg-[#56caeb]`

### Vacation Ideas
- 3-column grid with image cards
- Each card: `h-80` with bg image, text at bottom with white bg
- Use Abril Fatface for card titles
- Hover effect: slight scale or overlay transition

### About Section
- Two-column layout with image on left, text on right
- Alternating row (reverse) for visual variety

### Destinations
- Responsive grid: 4 cols desktop, 2 cols tablet, 1 col mobile
- Each card: image top (or bottom for alternate), text panel below
- Star rating: use lucide-react Star icons
- Price badge styled with brand color

### Counter Stats
- Use `IntersectionObserver` to trigger count animation
- Parallax: `bg-fixed` + bg image

### Testimonials
- Simple carousel (can implement with CSS scroll-snap or state-based)
- Each card: circular avatar, star rating, blockquote, name

### Newsletter
- Parallax bg with dark overlay (same pattern as hero)
- Email input + subscribe button inline

### Footer
- Dark background with 4-column grid
- Social icons: lucide-react (Twitter, Facebook, Instagram)
- Component Dock link in copyright bar

## Dependencies to reuse
- `packages/ui` components: Button, ButtonLink, cn()
- lucide-react for all icons
- No additional npm packages needed (carousel can be CSS-only)

## Pitfalls
- No ColorLib references in any app file (comments, strings, metadata)
- Footer MUST link to https://www.componentdock.com/
- Every new template needs `npm install` at repo root before committing
- `vite.config.ts` MUST include `injectUiSource()` helper
- Test coverage must be 100% on new code
