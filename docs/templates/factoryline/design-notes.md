# FactoryLine — Design Notes & Task Outline

## Source mapping
- **ColorLib source:** Industries (slug: `industries`)
- **Preview URL:** https://preview.colorlib.com/theme/industries/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/industries-free-template.jpg

## Section order (from live preview DOM)

| # | Section | CSS class | Notes |
|---|---------|-----------|-------|
| 1 | Navbar | `navbar-dark bg-dark` | Dark navbar, logo, links: Home, About, Services, Projects, Blog, Contact. Mobile hamburger. |
| 2 | Hero Slider | `.home-slider.owl-carousel` | Full-width slider with background images, dark overlay. Slides: "We Are Industrial Company" / "Create, Enhance and Sustain". Play button for Vimeo video. Navigation dots. |
| 3 | Services | `.section.bg-light` | Light gray background. 3 cards: Automotive Parts, Maintenance Services, Green Energy. Icon + title + description. |
| 4 | About Engineering | `.section` | "We Are Reliable Engineering In House" heading. Two-column: framed image (left) + 4 feature items (right): Green Energy, Precision Mechanics, Construction Machines, Reliable and Stable. |
| 5 | Parallax Quote | `.section.element-animate` | Full-width parallax background. "Create, Enhance and Sustain" heading. |
| 6 | Projects | `.section.border-t` | "Our Latest Projects" heading. 3-column grid, 6 project cards. Each: image + title. Projects: Ducting Design in Colorado, Tanks Project In California, Structural Design in New York, Stacks Design, Intercate Custom, Banker Design. |
| 7 | Testimonials | `.section.bg-light.block-11` | "Happy Clients" heading. Carousel: customer names (John Smith, Joshua Darren), review text. Auto-advancing. |
| 8 | Blog | `.section.blog` | "Blog Posts" heading. 4 blog cards in a row. Each: image + title link. |
| 9 | CTA | `.section.bg-primary` | Blue (#007bff) background. "Create, Enhance and Sustain" heading. "Download This Template" white outline button. |
| 10 | Footer | `.site-footer` | Dark background. 3 columns: About Us (text + social icons), Contact Info (address, phone, email), Quick Links. Social: Twitter, Facebook, LinkedIn, Instagram. Copyright. |

## Design token mapping (Tailwind `@theme`)

```css
@theme {
  --color-brand: #fd5f00;
  --color-brand-dark: #d75100;
  --color-brand-darker: #ca4c00;
  --color-text-primary: #212529;
  --color-text-secondary: #495057;
  --color-text-muted: #6c757d;
  --color-pink: #e83e8c;
  --color-border-accent: #ffae7e;
  --color-bg-light: #e9ecef;
  --color-bg-lighter: #f8f9fa;
  --color-bg-white: #ffffff;
  --color-cta-blue: #007bff;
}
```

## Section-by-section fidelity notes

### Navbar
- Dark background (#343a40), responsive collapse
- Logo on left, nav links centered/right
- Mobile: hamburger toggle

### Hero Slider
- Owl Carousel with auto-advance
- Background images with dark overlay
- Play button (ionicons play icon) linking to Vimeo video
- Headings: "We Are Industrial Company" / "Create, Enhance and Sustain"
- Navigation dots at bottom

### Services
- Light gray (#f8f9fa) background
- 3 equal-width cards (col-md-4)
- Each: icon, title, short description
- Cards stretch to equal height

### About Engineering
- Two-column layout
- Left: framed image with border/frame effect
- Right: 4 feature items with icon + title + description
- Features: Green Energy, Precision Mechanics, Construction Machines, Reliable and Stable

### Parallax Quote
- Full-width parallax background image
- "Create, Enhance and Sustain" heading centered

### Projects
- Top border separator
- "Our Latest Projects" heading
- 3-column grid, 2 rows (6 items)
- Each: image with hover overlay, title below

### Testimonials
- Light gray background
- "Happy Clients" heading
- Owl Carousel with testimonials
- Each: customer name, review text
- Auto-advancing with dot navigation

### Blog
- "Blog Posts" heading
- 4 blog cards in a row
- Each: image, title link
- Hover overlay effect

### CTA
- Blue (#007bff) background
- "Create, Enhance and Sustain" heading (white)
- "Download This Template" white outline button

### Footer
- Dark background
- 3 columns: About Us (description + social icons), Contact Info (address, phone, email), Quick Links (About, Terms, Disclaimers, Contact)
- Social icons: Twitter, Facebook, LinkedIn, Instagram
- Copyright line → replace with Component Dock

## Implementation tasks

- [ ] Scaffold `apps/factoryline/` from simplest existing app
- [ ] Rename package to `@free-react-templates/factoryline`
- [ ] Set up `public/CNAME` → `factoryline.free.componentdock.com`
- [ ] Add Montserrat + Oxygen fonts via Google Fonts `<link>` in index.html
- [ ] Configure `@theme` tokens in `src/index.css`
- [ ] Implement `Navbar.tsx` — dark navbar, logo, nav links, mobile hamburger
- [ ] Implement `HeroSlider.tsx` — full-width slider, background images, play button, auto-advance, dots
- [ ] Implement `Services.tsx` — light gray background, 3 service cards with icons
- [ ] Implement `AboutEngineering.tsx` — two-column layout, framed image, 4 feature items
- [ ] Implement `ParallaxQuote.tsx` — full-width parallax section with heading
- [ ] Implement `Projects.tsx` — 3-column grid of 6 project cards with hover overlays
- [ ] Implement `Testimonials.tsx` — carousel with customer names and reviews
- [ ] Implement `Blog.tsx` — 4 blog cards with images and title links
- [ ] Implement `CtaSection.tsx` — blue background, heading, white outline button
- [ ] Implement `Footer.tsx` — 3-column layout, social icons, copyright with Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write Vitest tests for every component (100% coverage)
- [ ] Run `scripts/verify-app.sh factoryline` — typecheck + lint + test:coverage + build
- [ ] Update `docs/templates/factoryline/` README with status
- [ ] Run `npm run readme:status` at repo root
- [ ] Commit and push to main
