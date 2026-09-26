# Scepter — Implementation Tasks & Design Notes

ColorLib source: Monarchy
Preview: https://preview.colorlib.com/theme/monarchy/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/monarchy-free-template.jpg
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Structure Order (top to bottom)

1. **Navbar** — Sticky white header with "Scepter" text logo + nav links (right-aligned)
2. **Hero** — Full-width cover section, warm beige bg, centered text + play button
3. **Services** — 3-column cards with icons (Interface Design, Product Design, Quality Results)
4. **Portfolio** — 3-column grid of 6 images with hover effects
5. **Testimonials** — 4-column customer cards with circular avatars
6. **Blog** — Horizontal carousel of article cards (Owl-style)
7. **Clients** — 4-column logo strip on light gray background
8. **Footer** — Warm beige bg, logo + description + contact + link columns
9. **Copyright** — Warm beige bg, social icons + copyright line

## Section-by-Section Fidelity Notes

### Navbar
- Sticky header, white background, scrolls with page
- Logo: "Scepter" text (bold, left-aligned)
- Nav links: Home, Portfolio, About, Services, Blog, Contact (right-aligned)
- Active link highlighted in orange (#f26200)
- Mobile: hamburger toggle, slide-in mobile menu

### Hero
- Full-width cover section with warm beige (#f5ecdb) background
- Centered content: "Do What You Love" heading (h1)
- Subtitle paragraph below
- Circular play button (Fancybox video link in original; use a button/link)
- Play button: orange (#f26200) circle with play icon

### Services
- White background
- 3 equal columns, each with:
  - Icon wrap (circular, orange accent)
  - Title (h3): Interface Design / Product Design / Quality Results
  - Description paragraph
- Use lucide-react icons (Layers, Lightbulb, Target or similar)

### Portfolio
- White background
- Heading: "Portfolio" (h2)
- 3-column CSS grid of 6 images
- Images: picsum.photos/seed/scepter-port-1 through scepter-port-6
- Hover effect: overlay with link icon
- Links to "#" (single-page, no detail pages)

### Testimonials
- White background
- Heading: "Testimonials" (h2, centered)
- 4 equal columns, each with:
  - Customer name (h3)
  - Role label ("Customer")
  - Circular avatar image (50% border-radius)
  - Quote text paragraph
- Customers: Chad Hawkins, Ayisha Atherton, Riccardo Gilliam, Jasleen Dunkley

### Blog Carousel
- White background
- Heading: "Blog Updates" (h2, bold)
- Subtitle paragraph
- Horizontal carousel (CSS scroll-snap or simple overflow-x)
- Each card: image, date, title link, author avatar + name + role
- At least 4 cards visible
- Navigation arrows (prev/next)

### Client Logos
- Light gray (#f8f9fa) background
- 4 equal columns with brand logos
- Use placeholder text/SVGs or picsum for logo images
- Original: Google, Invision, Nike, Microsoft

### Footer
- Warm beige (#f5ecdb) background
- Left column: "Scepter" logo + description
- Right area: 3 sub-columns
  - Contact info: email, phone, support
  - Links: Home, Blog, Services, About Us
  - Links: Home, Blog, Services, About Us (duplicate in original)
- Footer links: rgba(0,0,0,0.5), hover: #000

### Copyright
- Warm beige (#f5ecdb) background
- Social icons: Facebook, Twitter, LinkedIn, Instagram, Skype (centered)
- Copyright text with Component Dock link

## Design Tokens for Tailwind @theme

```css
@theme {
  --color-accent-orange: #f26200;
  --color-warm-beige: #f5ecdb;
  --color-page-bg: #ffffff;
  --color-text: #757575;
  --color-heading: #000000;
  --color-section-light: #f8f9fa;
  --font-family-body: "Jost", sans-serif;
}
```

## Component Map

| Section      | Component File         | Notes                                    |
| ------------ | ---------------------- | ---------------------------------------- |
| Navbar       | Navbar.tsx             | Sticky, white bg, text logo             |
| Hero         | Hero.tsx               | Beige cover, centered text, play btn    |
| Services     | Services.tsx           | 3-column cards with icons               |
| Portfolio    | Portfolio.tsx          | 3-col grid, 6 images                    |
| Testimonials | Testimonials.tsx       | 4-column cards, circular avatars        |
| Blog         | Blog.tsx               | Horizontal carousel of article cards    |
| Clients      | Clients.tsx            | 4-column logo strip                     |
| Footer       | Footer.tsx             | Beige bg, 4-col layout                  |

## Testing Notes

- Navbar: sticky on scroll, active link highlighted
- Hero: play button visible, centered text renders
- Services: 3 cards render with correct titles
- Portfolio: 6 images render in grid
- Testimonials: 4 cards with names and avatars
- Blog: carousel items render with dates and titles
- Clients: 4 logo images render
- Footer: contact info, links, social icons visible
- Footer has Component Dock link
- Responsive: all sections stack on mobile
