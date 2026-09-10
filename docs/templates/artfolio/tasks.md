# Artfolio — Implementation Tasks

Source: ColorLib Breed2 — https://preview.colorlib.com/theme/breed2/

## Section order (must match 1:1)

1. **Navbar** — Transparent overlay, logo left, nav links right, hamburger on mobile
2. **Hero** — Full-width background image, greeting + name + subtitle + CTA + social icons, banner image right
3. **Statistics** — 3 stat cards overlapping hero (negative margin), gradient text numbers
4. **About** — Image left + text right (hidden on mobile), heading + description + "Download CV" button
5. **Services** — 3-column cards: icon + title + description + "Learn More" link, purple hover
6. **Testimonials** — Carousel/slider with avatar + name + role + quote + star rating
7. **Portfolio** — Filter tabs + 3-column grid with hover overlay (blue)
8. **Blog** — 3-column cards with date badge, title, excerpt, "Learn More"
9. **Brands** — Logo carousel (single row)
10. **Footer** — Dark bg, centered logo, social circles, nav links, copyright, Component Dock

## Design fidelity notes

- **Font:** Google Fonts Roboto (300/400/500/700) — load via `<link>` in index.html
- **Primary gradient:** `linear-gradient(90deg, #1345e6, #ed239f)` — used on CTA buttons, stat text, social hover
- **Card bg:** `#f8faff` (light blue-gray) for stats, services, blog details
- **Service hover:** solid `#5f30ff` purple fill on hover, text goes white
- **Portfolio hover:** `rgba(19,69,230,0.9)` overlay slides in from edges, title/category visible
- **Footer:** Very dark `#021017`, social icons are full-round white circles
- **Section spacing:** `padding: 140px 0` desktop, `80px 0` mobile
- **Buttons:** Uppercase, `border-radius: 5px`, `line-height: 50px`, gradient fill
- **Blog date badge:** `#1345e6` background, `border-radius: 5px`, floats over image bottom-left
- **Stats overlap:** `margin-top: -121px` on desktop to pull up over hero
- **Navbar scroll:** fixed white bar with box-shadow appears after scrolling past hero

## Component breakdown

| Component          | Notes                                                                         |
| ------------------ | ----------------------------------------------------------------------------- |
| `Navbar.tsx`       | Transparent/fixed states, mobile hamburger toggle, dropdown menus             |
| `Hero.tsx`         | Background image, greeting, name, subtitle, CTA button, social icons row      |
| `Statistics.tsx`   | 3 stat items with gradient text, responsive grid                              |
| `About.tsx`        | Two-column: image left, text + button right                                   |
| `Services.tsx`     | 3-column grid, each card: icon (lucide-react), title, desc, "Learn More" link |
| `Testimonials.tsx` | Carousel (CSS or simple state), star rating, avatar                           |
| `Portfolio.tsx`    | Filter tabs, 3-col grid with hover overlay                                    |
| `Blog.tsx`         | 3 blog cards with date badge overlay on image                                 |
| `Brands.tsx`       | Simple row/carousel of brand logo images                                      |
| `Footer.tsx`       | Dark bg, logo, social circles, nav links, copyright + Component Dock          |

## Placeholder images

- Hero background: `https://picsum.photos/seed/artfolio-hero/1920/890`
- Hero right image: `https://picsum.photos/seed/artfolio-hero-right/600/700`
- About image: `https://picsum.photos/seed/artfolio-about/500/600`
- Service icons: lucide-react icons (Code, Palette, Monitor)
- Testimonial avatar: `https://picsum.photos/seed/artfolio-testimonial/100/100`
- Portfolio items: `https://picsum.photos/seed/artfolio-portfolio-<1-6>/600/500`
- Blog thumbnails: `https://picsum.photos/seed/artfolio-blog-<1-3>/600/400`
- Brand logos: `https://picsum.photos/seed/artfolio-brand-<1-5>/140/50`

## Testing notes

- Each section component gets its own test file
- Focus: renders all elements, correct text, hover states, responsive behavior
- Navbar: test scroll behavior (fixed class toggle)
- Portfolio: test filter tab click changes active state
- Carousel: test slide transition if implemented
