# ForgeBase — Design Notes & Task Outline

## Source mapping
- **ColorLib source:** Industry (slug: `industry`)
- **Preview URL:** https://preview.colorlib.com/theme/industry/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/industry-free-template.jpg

## Section order (from live preview DOM)

| # | Section | CSS class | Notes |
|---|---------|-----------|-------|
| 1 | Navbar | `#nav-menu-container` | Sticky nav with logo, links: Home, About, Service, Projects, Blog (submenu), Contact, Elements. Top bar: phone, email, social icons. |
| 2 | Hero Banner | `.banner-area` | Full-width with background image, dark overlay. "Don't look further, here is the key" subheading, heading, golden yellow "Get Started" CTA button. |
| 3 | Categories | `.cat-area` | 3 hexagonal service cards: Maintenance, Residential Service, Commercial Service. Hexagon icon containers with golden yellow borders. |
| 4 | About / Quote | `.home-about-area` | Two-column: left has "Brand new app to blow your mind" heading + text; right has golden yellow "Request a Quote" form with select dropdown. |
| 5 | Market Sectors | `.service-area` | "Our Capturing Market Sectors" heading. 3 service items: Automotive Engineering, Construction & Engineering, Industrial Engineering. |
| 6 | Counter Stats | `.faq-area` | Dark overlay section. 4 animated counters: 2K+, 5.5K, 959, 367. Count-up on scroll. |
| 7 | Projects | `.project-area` | "Latest Finished Projects" heading. 4 project images in grid. Clickable for lightbox/magnific popup. |
| 8 | Testimonials | `.feedback-area` | Dark overlay. "Enjoy our Client's Feedback" heading. Carousel with customer photos, names, review text. Video play button (YouTube lightbox). |
| 9 | Blog | `.blog-area` | "Latest posts from our Blog" heading. 3 blog cards: image, author (Mark Wiens), date, title, description. |
| 10 | Footer | `.footer-area` | 3 columns: About Us (text + social icons), Newsletter (email + subscribe), Follow Us (social icons). Copyright. |

## Design token mapping (Tailwind `@theme`)

```css
@theme {
  --color-brand: #fab700;
  --color-brand-dark: #e0a500;
  --color-cyan: #4cd3e3;
  --color-text-primary: #222222;
  --color-text-muted: #777777;
  --color-bg-alt: #f9f9ff;
  --color-bg-white: #ffffff;
}
```

## Section-by-section fidelity notes

### Navbar
- Sticky, dark transparent overlay on scroll
- Logo centered, nav links in row
- Top bar: social icons (left), phone (center), email (center)
- Mobile: hamburger menu

### Hero Banner
- Full-width, full-height section
- Background image with dark overlay
- Golden yellow (#fab700) CTA button: "Get Started"

### Categories
- 3 cards in a row
- Hexagonal icon containers (`.hb-sm` class)
- Icons: magic wand, rocket, bug (linearicons)
- Golden yellow hexagon borders

### About / Quote
- Two-column layout
- Left: heading, 2 paragraphs of text, "Download" link
- Right: golden yellow background form with "Request a Quote" heading, service select dropdown, submit button

### Market Sectors
- 3 service cards in a row
- Each: icon, title, description
- Cards stretch to equal height

### Counter Stats
- Dark overlay background
- 4 counter items: 2K+, 5.5K, 959, 367
- Animated count-up on scroll into viewport

### Projects
- 4 project images in a 2x2 or 4-column grid
- Each: image with hover overlay (title + magnifying glass icon)
- Clickable: opens lightbox/magnific popup

### Testimonials
- Dark overlay background
- Carousel with customer photos, names, review text
- Video play button linking to YouTube

### Blog
- 3 blog cards in a row
- Each: image, author, date, title, description
- Hover: card lifts with shadow

### Footer
- 3 columns: About Us, Newsletter, Follow Us
- Social icons: Facebook, Twitter, Dribbble, Behance
- Newsletter: email input + subscribe
- Copyright → Component Dock link

## Implementation tasks

- [ ] Scaffold `apps/forgebase/` from simplest existing app
- [ ] Rename package to `@free-react-templates/forgebase`
- [ ] Set up `public/CNAME` → `forgebase.free.componentdock.com`
- [ ] Add Poppins font via Google Fonts `<link>` in index.html
- [ ] Configure `@theme` tokens in `src/index.css`
- [ ] Implement `Navbar.tsx` — sticky nav, logo, links, top bar with phone/email/social
- [ ] Implement `HeroBanner.tsx` — full-width hero, background image, dark overlay, golden yellow CTA
- [ ] Implement `Categories.tsx` — 3 hexagonal service cards
- [ ] Implement `AboutQuote.tsx` — two-column layout, heading, text, golden yellow quote form
- [ ] Implement `MarketSectors.tsx` — 3 service cards with icons
- [ ] Implement `CounterStats.tsx` — dark overlay, 4 animated counters
- [ ] Implement `Projects.tsx` — 4 project images with lightbox/hover overlay
- [ ] Implement `Testimonials.tsx` — carousel with photos, names, video play button
- [ ] Implement `Blog.tsx` — 3 blog cards with images, author, date, title
- [ ] Implement `Footer.tsx` — 3-column layout, social icons, newsletter, copyright with Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write Vitest tests for every component (100% coverage)
- [ ] Run `scripts/verify-app.sh forgebase` — typecheck + lint + test:coverage + build
- [ ] Update `docs/templates/forgebase/` README with status
- [ ] Run `npm run readme:status` at repo root
- [ ] Commit and push to main
