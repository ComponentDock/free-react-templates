# TechVane — Design Notes & Task Outline

Source: ColorLib "It Solution" → https://preview.colorlib.com/theme/itsolution/
New name: techvane (apps/techvane, @free-react-templates/techvane)

## Section implementation order

1. **Navbar** (`components/Navbar.tsx`)
   - Dark transparent → white on scroll
   - Logo text "TechVane" left, nav links right
   - Hamburger menu on mobile (Lucide `Menu`/`X` icons)
   - Fidelity notes: original uses Bootstrap navbar with `.ftco-navbar-light`
   - Use `IntersectionObserver` or scroll listener for opaque transition

2. **Hero** (`components/Hero.tsx`)
   - Full viewport height, background image with dark overlay
   - Overlay color: #060a24 at 60% opacity
   - Left-aligned content: tagline, h1 heading, CTA button
   - Fidelity notes: original uses `js-fullheight` + parallax (`stellar`)
   - Simplify: CSS `h-screen` + `bg-cover` + overlay div

3. **IntroServices** (`components/IntroServices.tsx`)
   - 3 cards in a row, right-aligned in container
   - Each: icon (Lucide), heading, no body text
   - Services: IT Consultancy, Product Design, Cyber Security
   - Fidelity notes: `.services-1` class with `.line` top accent

4. **ServicesSection** (`components/ServicesSection.tsx`)
   - Centered heading with accent span
   - 4-column grid of icon+heading+description cards
   - Fidelity notes: `.services-2` with `.block-6` layout
   - Use `lucide-react`: Code, Database, Shield, Palette icons

5. **CounterSection** (`components/CounterSection.tsx`)
   - Split: left image, right blue (#007bff) panel
   - Heading + paragraph + 4 animated stat counters
   - Fidelity notes: `.ftco-counter` with `.bg-primary`, counters use
     `data-number` with scroll-triggered animation
   - Implement with `useInView` + count-up animation

6. **Projects** (`components/Projects.tsx`)
   - Heading "Our Strategic Work"
   - 4-column grid: bg image, category label, title, expand icon
   - Fidelity notes: `.project` cards with `.img` bg-image and `.text` overlay
   - Use `picsum.photos/seed/techvane-n/` for images

7. **Faq** (`components/Faq.tsx`)
   - Split: left = 3 images, right = accordion
   - 4 collapsible items with questions and list answers
   - Fidelity notes: Bootstrap accordion → implement as controlled state
   - Use Lucide `ChevronDown` for expand indicator

8. **Testimonials** (`components/Testimonials.tsx`)
   - Full-width bg image with dark overlay
   - Heading "Our insights & creative ideas"
   - Carousel of testimonial cards: quote, name, position
   - Fidelity notes: Owl Carousel → implement as simple CSS carousel
   - Overlay: rgba(0,0,0,0.2) + #060a24

9. **Blog** (`components/Blog.tsx`)
   - Light bg (#f7f7f7)
   - Heading "Read our latest blog"
   - 3-column card grid: image with date badge, title
   - Fidelity notes: `.blog-entry` with `.block-20` image + date overlay

10. **Contact** (`components/Contact.tsx`)
    - Full-width bg image with overlay
    - Heading "Don't hesitate to contact us"
    - Form: Name, Email, Service select, Message textarea, Submit button
    - Fidelity notes: `.ftco-appointment` section

11. **Footer** (`components/Footer.tsx`)
    - Dark bg, 4-column: brand+social, Explore, Legal, Contact
    - Social: Twitter, Facebook, Instagram (Lucide icons)
    - Contact: address, phone, email
    - Copyright line + Component Dock link (required)
    - Fidelity notes: `.ftco-footer-2` dark footer variant

## Design token summary

```
Primary:       #007bff (blue)
Navbar accent: #323edd (indigo-blue)
Hero overlay:  #060a24 @ 60% (dark navy)
Body text:     #212529
Light bg:      #f7f7f7
Accent:        #ffa41b (orange-amber, decorative lines)
Font:          Montserrat (Google Fonts)
Icon set:      lucide-react (replaces FA + Flaticon)
Button radius: 3px (subtle)
```

## Component dependencies

- `packages/ui`: Button, ButtonLink, cn utility
- External: Google Fonts (Montserrat via `<link>` in index.html)
- Images: `picsum.photos/seed/techvane-<n>/<w>/<h>` for all placeholders
