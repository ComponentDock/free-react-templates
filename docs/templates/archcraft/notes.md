# Archcraft — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Archs" — https://colorlib.com/wp/template/archs/
- **Preview:** https://preview.colorlib.com/theme/archs/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/archs-free-template.jpg
- **Preview fetched:** Yes (48,960 bytes HTML, 24,541 bytes style.css)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Top Bar** — social icons (left) + email/phone (right), dark/transparent bg
2. **Navbar** — sticky, logo "Archcraft" left, nav right with dropdowns
3. **Hero** — full-width parallax bg image + dark overlay, play button, "Interior Design" headline, italic subtitle
4. **Features Strip** — 3 items: Innovative Structure, Architectural, Interior Design (border-bottom)
5. **About** — "About Us" heading + paragraph text
6. **Team** — 6 members in 3-col grid (photo, name, role, social overlay)
7. **Pricing** — 3 cards: Starter ($30), Professional ($72), Enterprise ($149)
8. **FAQ** — split layout: left image + right accordion (5 questions)
9. **Testimonials** — carousel with 4 client quotes
10. **Projects** — 6 project cards in 3-col grid (image + name + category)
11. **News/Blog** — 3 post cards + "View All Posts" CTA
12. **Services** — 6 service items with flaticon icons
13. **Contact** — bg-light, form (Name, Email, Message, Send Message)
14. **Footer** — About Us, Navigation, Recent News, Subscribe, Follow Us + Component Dock

## Fidelity Notes

### Top Bar
- Social icons: Twitter, Facebook, LinkedIn, Instagram — use lucide-react equivalents
- Contact info: email + phone — right-aligned
- Font size: 0.8rem, border-bottom: 1px solid rgba(255,255,255,0.1)

### Navbar
- Logo is plain text "Archs" (→ "Archcraft") in h1
- Dropdown on "About Us": Team, Pricing, FAQ, More Links (with nested dropdown)
- Sticky header: use Intersection Observer or scroll listener
- Mobile: hamburger → slide-out menu with close button

### Hero
- Full-width with parallax background image (use picsum.photos/seed/archcraft-hero/1920/1080)
- Dark overlay (rgba(0,0,0,0.5) or similar)
- Video play button: circle with play icon — link to a placeholder or skip video
- Headline: uppercase, large, white text
- Subtitle: italic, smaller, white text

### Features Strip
- 3 items side by side (col-lg-4 col-md-6)
- Each: flaticon-style icon → use lucide-react icons (Building2, Ruler, Lamp)
- Heading + short description
- Section has bottom border (border-bottom class)

### About
- Simple text section: "About Us" heading + paragraph
- No special layout — just centered content in container

### Team
- 3-column grid (col-lg-4 col-md-6), 6 members
- Each card: photo (rounded), social icon overlay (shown on hover via CSS), name (h2), role (subtitle), paragraph
- Use picsum.photos/seed/archcraft-team-<n>/400/400 for photos
- Social icons: Facebook, Twitter, Instagram → lucide-react

### Pricing
- 3 equal columns, each with a bordered rounded card
- Card content: plan name, price (currency sup + number + period), billing note, feature list (checkmarks for included, strikethrough for excluded)
- "Buy Now" button: primary, rounded-0, full-width
- Prices: $30/year (Starter), $72/year (Professional), $149/year (Enterprise)

### FAQ
- Split layout: left col = image, right col = accordion
- 5 accordion items, Bootstrap-style single-expand (only one open at a time)
- Use React state for accordion open/close
- Questions cover: pricing, process, timeline, plans, application

### Testimonials
- Carousel/slider with 4 items
- Each: circular photo, name, role, quoted text
- Replace OwlCarousel with a simple React carousel (CSS scroll-snap or custom)
- Use picsum.photos/seed/archcraft-testimonial-<n>/200/200 for photos

### Projects Gallery
- 6 items in 3-column grid
- Each: clickable image thumbnail, project name (h3 link), category (muted text)
- Lightbox effect: use a simple React lightbox or skip fancybox (open image in new tab)
- Use picsum.photos/seed/archcraft-project-<n>/600/400 for images

### News/Blog
- 3 post cards in 3-column grid
- Each: image, date (muted), title (h3 link)
- "View All Posts" button centered below (primary, rounded-0)
- Use picsum.photos/seed/archcraft-blog-<n>/600/400 for images

### Services
- 6 items in 3-column grid (col-lg-4 col-md-6)
- Each: icon (lucide-react: Building2, Ruler, Lamp, Window, HardHat, Compass) + heading + description
- Services: Innovative Structure, Architectural Design, Interior Design, Modern Window Design, Experts Architect, Space Planning

### Contact
- Light background (#f8f9fa)
- White form card with padding
- Fields: Full Name (text), Email (email), Message (textarea, 5 rows)
- "Send Message" submit button: primary, rounded-0, lg
- Form focus border: brand color #ff5733

### Footer
- 4-column layout:
  - Col 1: About Us paragraph + Navigation links (2 sub-columns)
  - Col 2: Recent News (3 items: thumbnail + date + title)
  - Col 3: Subscribe Newsletter (email input + submit)
  - Col 4: Follow Us (social icon links)
- Add "Made with Component Dock" / "More templates at Component Dock" link
- Border-top separator

## Component Mapping

| Original | React Component | Notes |
|----------|----------------|-------|
| Top bar | `TopBar.tsx` | Social icons + contact |
| Navbar | `Navbar.tsx` | Sticky, dropdown, mobile menu |
| Hero | `Hero.tsx` | Parallax bg, play button, headline |
| Features | `Features.tsx` | 3-item grid |
| About | `About.tsx` | Simple text section |
| Team | `Team.tsx` | 6 member cards |
| Pricing | `Pricing.tsx` | 3 pricing cards |
| FAQ | `Faq.tsx` | Split layout + accordion |
| Testimonials | `Testimonials.tsx` | Carousel |
| Projects | `Projects.tsx` | 6-item gallery grid |
| News | `News.tsx` | 3 blog cards + CTA |
| Services | `Services.tsx` | 6-item icon grid |
| Contact | `Contact.tsx` | Form with validation |
| Footer | `Footer.tsx` | 4-column footer |

## Shared UI Components to Reuse

- `Button` / `ButtonLink` from `packages/ui` for CTAs
- `cn()` from `packages/ui` for class composition
- Form inputs: standard HTML with Tailwind styling (no shared form component needed)
