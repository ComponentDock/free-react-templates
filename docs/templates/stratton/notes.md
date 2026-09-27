# Stratton — Design Notes & Task Outline

## Source Mapping
- **ColorLib source:** Schmidt (https://colorlib.com/wp/template/schmidt/)
- **Preview URL:** https://preview.colorlib.com/theme/schmidt/
- **New name:** stratton
- **Preview analyzed:** 2026-09-27

## Structure Order (consolidated single-page SPA)

1. Navbar (sticky, brand "Strat.", 7 nav links)
2. Hero (full viewport, split: left text + right golden overlay + portrait image)
3. About (2-col: stat counters + about info list)
4. Services (grid of 7 service cards, hover effect)
5. Experience (resume timeline, 6 items)
6. Works/Portfolio (grid of 9 project images with hover overlay)
7. Testimonials (carousel of cards)
8. Blog (grid of blog entry cards)
9. Contact (form + info + map placeholder)
10. Footer (Component Dock link)

## Section-by-Section Fidelity Notes

### Navbar
- Brand text: "Strat." (was "Schmt." in original)
- 7 nav items: Home, About, Services, Experience, Works, Blog, Contact
- Sticky/fixed on scroll, responsive with hamburger on mobile
- Use lucide-react icons for mobile toggle

### Hero
- Full viewport height (100vh)
- Left half: dark background image, white text
- Right half: golden-yellow overlay (#d5c455), portrait image
- Subheading: uppercase, letter-spacing, brand color (was "UI/UX Designer & Developer")
- Name headline: large, white, bold
- Two CTAs: "More About Me" (primary blue #0d6efd) + "Hire Me" (white outline)
- On mobile: overlay hidden, content stacks, dark background

### About
- Two-column layout on desktop, stacked on mobile
- Left column: 4 stat counters in 2x2 grid (5000/1200/500/587)
  - Numbers use countup animation
  - Labels: Happy Clients, Projects Done, Cups of Coffee, Working Hours
- Right column: "About Me" heading, bio paragraph, info list
  - Info list: Name, Birthday, Age, etc. with brand-colored values

### Services
- 7 cards in responsive grid (3 cols desktop, 2 tablet, 1 mobile)
- Each card: icon (use lucide-react), title, description paragraph
- White bg, subtle shadow, 3px border-radius
- Hover: bg changes to #d5c455, text/icon to white, stronger shadow

### Experience
- Timeline/resume items with left border accent
- 6 items alternating education + work
- Fade-in-up animation on scroll (AOS-style, use IntersectionObserver)
- Each: title + description paragraph

### Works/Portfolio
- Grid of 9 project items (3x3 desktop)
- Each: background image (picsum.photos), centered title text on hover
- Overlay darkens image, shows project title
- Square aspect ratio items

### Testimonials
- Carousel/slider with dot navigation
- Cards: white bg, 4px border-radius, shadow
- Each: user image (picsum.photos), name, role, quote
- Navigation dots at bottom

### Blog
- Grid of entry cards (3 cols desktop)
- Each: image, meta line (author, date, comments), title, excerpt
- Responsive: 2 cols tablet, 1 col mobile

### Contact
- Two-column: left = contact form + info, right = map placeholder
- Form: name, email, subject, message fields + submit button
- Info: address, phone, email with icons
- Map: placeholder div with static image or colored bg

### Footer
- Simple footer with copyright text
- MUST include "Component Dock" link (https://www.componentdock.com/)

## Component Map

```
App.tsx
├── Navbar.tsx
├── Hero.tsx
├── About.tsx
├── Services.tsx
├── Experience.tsx
├── Works.tsx
├── Testimonials.tsx
├── Blog.tsx
├── Contact.tsx
└── Footer.tsx
```

## Design Token Implementation

```css
/* index.css @theme tokens */
--color-brand: #d5c455;
--color-brand-hover: #c4b34a;
--font-family-heading: "Poppins", Arial, sans-serif;
--font-family-body: "Poppins", Arial, sans-serif;
```

## Placeholder Images

- Hero portrait: `https://picsum.photos/seed/stratton-portrait/600/800`
- Stat counters: no images needed
- Service icons: lucide-react (Layout, Code, Palette, Megaphone, Smartphone, PenTool, Monitor)
- Portfolio projects: `https://picsum.photos/seed/stratton-proj-{n}/600/600` (n=1-9)
- Testimonial users: `https://picsum.photos/seed/stratton-user-{n}/100/100` (n=1-3)
- Blog images: `https://picsum.photos/seed/stratton-blog-{n}/800/500` (n=1-3)

## Dependencies

- No new dependencies needed (all available via packages/ui and lucide-react)
