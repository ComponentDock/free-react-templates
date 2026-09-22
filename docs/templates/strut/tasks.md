# Strut — Prep Notes & Task Outline

**Source:** ColorLib Durg → https://preview.colorlib.com/theme/durg/
**New name:** strut (structural engineering term)
**Preview analyzed:** Yes (live DOM + CSS fetched successfully)

## Section-by-Section Fidelity Notes

### 1. Header
- Two-tier header: top bar (black bg, phone/email + nav links) + main nav (white bg, sticky)
- Main nav: logo left, centered nav links (Home, About, Services, Projects, Blog dropdown, Contact), search icon + "Get a quote" CTA right
- Sticky behavior: box-shadow + transform on scroll
- Mobile: hamburger menu (`.mobile_menu`)
- Use lucide-react for phone, envelope, search icons

### 2. Hero Slider
- Full-width carousel, 760px height (600px mobile)
- Background image with dark overlay (opacity 0.2)
- White content box on left side: tagline (orange, 16px), heading (60px, dark navy), CTA button
- Dots on right side (15x15 circles, white border, filled when active)
- Since carousel is complex, simplify to single static hero slide

### 3. Brand Logos
- Gray (#f5f5f5) bg, horizontal scrolling logos
- Simple flex row of grayscale/partner logos
- Use placeholder SVG icons or picsum images for brand placeholders

### 4. Services
- Section title: "OUR SERVICES" (orange span) + heading
- 3-column grid: each card has image (top), title (h3), description (p), "Read More" link
- Use `https://picsum.photos/seed/strut-svc-{1,2,3}/400/300` for images
- "Read More" links with underline on hover

### 5. Projects
- Dark overlay bg (bg-img-2 with #020c26 overlay at 0.851 opacity)
- Left 40%: heading + description + "More Projects" link (white text)
- Right 60%: carousel of project cards (image + category span in orange + h3 title)
- Use `https://picsum.photos/seed/strut-proj-{1,2}/600/400` for images
- Simplify carousel to a static grid of 2-4 project cards

### 6. About
- Left: video thumbnail with play icon (use lucide-react Play icon)
- Right: section title "Deliver innovative Industrial solution" + "Learn More" CTA
- Below: testimonial carousel — quote icon, 5 gold stars (#ffba00), quote text, author photo + name + role
- "350+" review count badge
- Use `https://picsum.photos/seed/strut-about/700/500` for about image
- Use `https://picsum.photos/seed/strut-author/80/80` for author avatar

### 7. CTA Banner
- Full-width background image with dark overlay
- Heading "Let's talk about your industrial problems"
- Description paragraph
- Black "Discuss now" button with arrow icon
- Use `https://picsum.photos/seed/strut-cta/1200/400` for bg

### 8. Address Section
- Black bg, 3 columns
- Each column: icon (use lucide-react MapPin, Clock, Mail), heading, text, optional link
- Links use orange underline-hover style

### 9. Footer
- 4 columns: Logo + description + social icons | Company links | Solutions links | Branch offices
- Social: Facebook, Twitter, LinkedIn (lucide-react icons)
- Copyright bar at bottom with Component Dock link (replace Colorlib attribution)

## Component Map

| Component | Sections |
|-----------|----------|
| `Navbar.tsx` | Header (top bar + main nav) |
| `Hero.tsx` | Hero slider (static single slide) |
| `BrandLogos.tsx` | Brand logos row |
| `Services.tsx` | Services section (3 cards) |
| `Projects.tsx` | Projects section (dark bg + grid) |
| `About.tsx` | About section (video + testimonials) |
| `CtaBanner.tsx` | CTA banner |
| `AddressSection.tsx` | Address/contact section |
| `Footer.tsx` | Footer (4-col + copyright) |

## Implementation Tasks

- [ ] Copy simplest existing app as scaffold (e.g. `apps/strut/`)
- [ ] Rename package to `@free-react-templates/strut`
- [ ] Set up `index.css` with Tailwind + `@theme` tokens (Rubik font, brand colors)
- [ ] Implement `Navbar.tsx` (two-tier sticky header)
- [ ] Implement `Hero.tsx` (static hero with content box overlay)
- [ ] Implement `BrandLogos.tsx` (flex row of placeholder logos)
- [ ] Implement `Services.tsx` (3-column card grid)
- [ ] Implement `Projects.tsx` (dark overlay, heading + project cards)
- [ ] Implement `About.tsx` (video thumbnail + testimonials)
- [ ] Implement `CtaBanner.tsx` (full-width bg + CTA)
- [ ] Implement `AddressSection.tsx` (3-col black bg)
- [ ] Implement `Footer.tsx` (4-col + copyright with Component Dock link)
- [ ] Compose `App.tsx` from all components
- [ ] Write tests for all components (100% coverage)
- [ ] Verify `public/CNAME` and `package.json` homepage
- [ ] Run `npm run verify:app strut` to pass local gate
- [ ] Commit and push as `feat: add strut template (ColorLib Durg)`
