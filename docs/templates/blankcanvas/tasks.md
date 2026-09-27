# BlankCanvas — Implementation Notes

Source: ColorLib Whitespace → https://preview.colorlib.com/theme/whitespace/
New name: blankcanvas
Category: Portfolio (TEMPLATES.md line 2578)

## Section Order (top → bottom)

1. Navbar (fixed, dark, hamburger mobile)
2. Hero (black bg, heading + subtext + yellow pill CTA)
3. What We Can Do (4 feature cards with icons)
4. Services Grid (2×4 layout, image + 4 text items)
5. Counter / Interesting Facts (4 animated counters, dark overlay)
6. Projects Carousel (horizontal scroll, image thumbnails with category overlays)
7. Testimonials (yellow bg, carousel of quote cards)
8. Case Study / Blog (3-column cards: image, meta, title, excerpt)
9. Pricing (4 tiers: Free, Startup, Premium, Pro)
10. Partner Logos (grayscale row)
11. Footer (dark, 4-column, Component Dock link)

## Design Tokens (from live preview CSS)

- Brand primary: #fcd307 (yellow — testimonials bg, CTAs)
- Hero bg: #000000 (pure black)
- Footer bg: #141313 (very dark)
- Font heading: "Poppins", sans-serif
- Font body: "Work Sans", sans-serif
- Button radius: 30px (pill)
- Card radius: 4px
- Icon radius: 50% (circular)

## Component Outline

### App.tsx
- Compose all 11 section components in order

### components/Navbar.tsx
- Fixed top navbar, dark bg (#1a1a1a or similar)
- Logo text "BlankCanvas"
- Desktop: horizontal nav links (Home, About, Work, Pricing, Blog, Contact)
- Mobile: hamburger toggle with slide-down menu
- Use lucide-react Menu/X icons

### components/Hero.tsx
- Full-width, min-h-[750px], bg-black, white text
- Heading: "We Help to Build You the Product"
- Subtext: "Business Solution"
- CTA: pill button (bg-[#fcd307], text-black, rounded-full)
- Use picsum.photos for background or dark gradient

### components/WhatWeCanDo.tsx
- 4-column grid (responsive: 1 col mobile, 2 tablet, 4 desktop)
- Each card: circular icon (lucide), title, description paragraph
- Icons: Search/DollarSign/TrendingUp/Headphones (Market Research, Financial, Marketing, Support)

### components/ServicesGrid.tsx
- Left column: image (picsum placeholder)
- Right column: 4 service items, each with icon + title + description
- Alternating layout on larger screens

### components/Counter.tsx
- Dark overlay section (bg-black/80 or bg-[#1a1a1a])
- 4 counters in a row: number + label
- Animate on intersection observer (count from 0 to target)
- Use a simple counter hook or react-countup

### components/ProjectsCarousel.tsx
- Horizontal scroll carousel (CSS snap or simple state-based)
- 6+ project thumbnails: image with gradient overlay + text labels
- Category labels: "Branding & Illustration Design", "Web Design"

### components/Testimonials.tsx
- Background: #fcd307 (brand yellow)
- Heading: "My satisfied customer says"
- Carousel of 4 testimonial cards
- Each: avatar (picsum), quote text, name, role

### components/BlogCards.tsx
- 3-column grid of blog post cards
- Each: image, date, author, comment count, title, excerpt
- Placeholder content with lorem ipsum

### components/Pricing.tsx
- Light gray bg (#f8f9fa)
- 4 pricing cards: Free/$0, Startup/$19, Premium/$49, Pro/$99
- Each: tier name, price, feature list (Bandwidth, Storage, Overages), "Get Started" button
- "Get Started" links to /#contact or similar

### components/PartnerLogos.tsx
- Row of grayscale partner logo placeholders
- Use lucide icons or placeholder images

### components/Footer.tsx
- Dark bg (#141313)
- 4-column layout: Logo+tagline, Useful Links, Quick Links, Contact
- Bottom bar: copyright + social icons
- MUST include: "Made with Component Dock" link → https://www.componentdock.com/

## Fidelity Notes

- Match the dark hero → light services → dark counter → projects → yellow testimonials → light pricing → dark footer rhythm
- The yellow #fcd307 is the dominant accent — use it sparingly for CTAs and the testimonial section
- Pill-shaped buttons (rounded-full, px-8 py-3) are a key design element
- The counter section uses animated counting — implement with IntersectionObserver + requestAnimationFrame
- Projects carousel uses horizontal scrolling with image overlays
- The services grid uses a 2-column layout with image on one side and text items on the other

## Files to Create

- `apps/blankcanvas/` — full Vite + React app
- `apps/blankcanvas/public/CNAME` — `blankcanvas.free.componentdock.com`
- `apps/blankcanvas/package.json` — `@free-react-templates/blankcanvas`
- `apps/blankcanvas/vite.config.ts` — with injectUiSource()
- `apps/blankcanvas/src/App.tsx` — compose all sections
- `apps/blankcanvas/src/components/` — all 11 section components
- `apps/blankcanvas/src/index.css` — Tailwind entry + theme tokens
- `apps/blankcanvas/src/main.tsx` — entry point
- `apps/blankcanvas/src/test/setup.ts` — jest-dom import
- `apps/blankcanvas/src/**/*.test.tsx` — Vitest + RTL tests (100% coverage)
