# NavEntry — Design Notes & Task Outline

## Source mapping
- **ColorLib source:** Immigration (slug: `immigration`)
- **Preview URL:** https://preview.colorlib.com/theme/immigration/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/immigration-free-template.jpg

## Section order (from live preview DOM)

| # | Section | CSS class | Notes |
|---|---------|-----------|-------|
| 1 | Header/Navbar | `#header` | Tagline (left), logo (center), phone (right), sticky nav with Home, About, Immigration, Course, Country, Blog (submenu), Contact, Elements |
| 2 | Hero Banner | `.banner-area` | Red background `#f6214b`, heading "Immigrations & Visa Consultation", sub "Process Visa without within hours", pill CTA "Book Consultancy" |
| 3 | Call-to-Top Strip | `.calltotop-area` | Horizontal strip, "Request Free Consultancy" button |
| 4 | Service Cards | `.service-area` | Heading "Requirements to be Immigrants", 4-card grid, icon + title + description + "Find Out More" link |
| 5 | Booking Consultancy | `.booking-area` | Dark overlay section, "Book Free Consultancy!", invitation text |
| 6 | Features | `.feature-area` | Heading "Our Unique Features that can impress you", 6 features in 2-column grid, circular colored icons (cyan #4cd3e3 / blue #38a4ff) |
| 7 | Reviews/Testimonials | `.review-area` | Heading "How Our Customers Treat Us", carousel with customer photos, names, review text, dot navigation |
| 8 | Brand Logos | `.brand-area` | Horizontal partner logo strip |
| 9 | Latest Blog | `.latest-blog-area` | Heading "Latest News from our Blog", 2 blog cards (image, tags, title, date, "Read More") |
| 10 | Final CTA | `.callto-area` | Red overlay, "No Look Further. Try us today!", descriptive paragraph |
| 11 | Footer | `.footer-area` | Three columns: About Us, Contact Us (phone), Newsletter (email input). Social icons. Copyright. |

## Design token mapping (Tailwind `@theme`)

```css
@theme {
  --color-brand: #f6214b;
  --color-brand-dark: #d81a3f;
  --color-brand-light: #ff4d6d;
  --color-cyan: #4cd3e3;
  --color-blue: #38a4ff;
  --color-text-primary: #222222;
  --color-text-muted: #777777;
  --color-bg-alt: #f9f9ff;
  --color-bg-white: #ffffff;
}
```

## Section-by-section fidelity notes

### Header/Navbar
- Three-column top bar: tagline left, logo center, phone right
- Thin `<hr>` separator below top bar
- Full-width nav with centered links, green active state on "Home"
- Mobile: hamburger menu slide-in

### Hero Banner
- Full-width, full-height section (`min-height: 100vh`)
- Solid red `#f6214b` background (CSS: `.banner-area { background-color: #f6214b }`)
- Heading in white, large font, left-aligned within `col-lg-9`
- Pill-shaped CTA button (white text, transparent or white border, hover fills white)
- Decorative image on the right side (header-img)

### Call-to-Top
- Simple horizontal row with icon, text, and button
- Light background, centered content

### Service Cards
- 4 equal-width cards in a row (Bootstrap `col-lg-3 col-md-6`)
- Each card: icon at top, title, description, "Find Out More" link
- Hover: card lifts (shadow), icon color changes to brand red

### Booking Consultancy
- Full-width with dark overlay background image
- White text, centered
- "Book Free Consultancy!" as main heading

### Features
- 2-column layout, 3 rows (6 items total)
- Circular icon containers: alternating `#4cd3e3` (cyan) and `#38a4ff` (blue)
- Title + short description next to icon

### Reviews
- Owl Carousel (or equivalent) for testimonials
- Each slide: customer photo (circular), name as link, review text
- Navigation dots below

### Brand Logos
- Horizontal row of grayscale partner logos
- Equal spacing, single-line display

### Blog
- 2 blog cards side by side (Bootstrap `col-lg-6`)
- Each: featured image, tag list (pill-shaped links), title, date, description, "Read More" link
- Tags hover: background changes to brand red

### CTA
- Full-width section with red overlay (same brand red)
- White text, centered
- "No Look Further. Try us today!" heading + paragraph

### Footer
- Three columns: About Us (text), Contact Us (phone), Newsletter (email input + button)
- Social media icon row (Facebook, Twitter, Dribbble, Behance using lucide-react equivalents)
- Copyright line → replace with "Component Dock" attribution + link to componentdock.com

## Implementation tasks

- [ ] Scaffold `apps/naventry/` from simplest existing app
- [ ] Rename package to `@free-react-templates/naventry`
- [ ] Set up `public/CNAME` → `naventry.free.componentdock.com`
- [ ] Add Poppins font via Google Fonts `<link>` in `index.html`
- [ ] Configure `@theme` tokens in `src/index.css`
- [ ] Implement `Navbar.tsx` — sticky header, three-column top bar, nav links
- [ ] Implement `Hero.tsx` — red banner, heading, CTA button, decorative image
- [ ] Implement `CallToTop.tsx` — horizontal strip with button
- [ ] Implement `ServiceCards.tsx` — 4-card grid with icons, hover effect
- [ ] Implement `BookingConsultancy.tsx` — dark overlay section
- [ ] Implement `Features.tsx` — 6-feature grid, alternating icon colors
- [ ] Implement `Reviews.tsx` — carousel with testimonials
- [ ] Implement `BrandLogos.tsx` — partner logo strip
- [ ] Implement `LatestBlog.tsx` — 2 blog cards, tag hover
- [ ] Implement `CallToAction.tsx` — final CTA section
- [ ] Implement `Footer.tsx` — three columns, social icons, Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write Vitest tests for every component (100% coverage)
- [ ] Run `scripts/verify-app.sh naventry` — typecheck + lint + test:coverage + build
- [ ] Update `docs/templates/naventry/` README with status
- [ ] Run `npm run readme:status` at repo root
- [ ] Commit and push to main
