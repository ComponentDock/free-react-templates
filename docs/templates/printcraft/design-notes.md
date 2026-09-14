# Printcraft — Implementation Design Notes

## Section Order (top to bottom)

1. **Navbar** — dark bg (`#1a1a1a`), logo left, nav links center (Home, About, Coming Soon, Top Seller, Books, Author, Blog, Contact), search form right. Responsive: hamburger on mobile.
2. **Hero** — full-width cover image with dark overlay, serif heading, two CTA buttons (primary + white outline). Height ~700px.
3. **About** — "Publishing Company Created By Authors" heading, descriptive paragraph, possible author imagery. White bg.
4. **Counter/Stats** — 4 animated number blocks (75,678 · 3,040 · 283 · 14,500) with labels. Light bg (`#f7f7f7`), teal overlay at 30% opacity.
5. **New Release** — heading + grid of book cards (cover image, title, author). White bg.
6. **Testimonials** — "Kind Words From Clients", carousel or grid of testimonial cards (quote text, author name, avatar). Warm white bg (`#f5f4f0`).
7. **Pricing** — "Affordable Packages", 3 pricing cards ($8, $12, $20), each with features list + "Get Started" button. Light bg (`#f7f7f7`).
8. **Contact/CTA** — full-width bg image with overlay, "Send a Message & Get in touch!" heading, contact form. Dark overlay treatment.
9. **Blog** — "Recent Blog", 3 blog post cards (image, title, meta, excerpt). White bg.
10. **Footer** — dark bg (`#343a40`), 4 columns (Extra Links, Legal, Company, Have a Questions?), copyright bar at bottom. Component Dock link required.

## Component Map

```
App.tsx
├── Navbar.tsx          — sticky dark navbar with search toggle
├── Hero.tsx            — full-width hero with overlay + CTAs
├── About.tsx           — company description section
├── CounterStats.tsx    — animated stat counters
├── NewReleases.tsx     — book cards grid
├── Testimonials.tsx    — client testimonial cards
├── Pricing.tsx         — pricing cards with "Get Started"
├── ContactCTA.tsx      — contact form with bg image
├── Blog.tsx            — blog post cards
└── Footer.tsx          — 4-column dark footer
```

## Fidelity Notes

### Navbar
- Dark background (#1a1a1a), logo text "Printcraft"
- Uppercase nav links with Roboto font
- Search form icon on the right side
- Hamburger toggle on mobile (<992px)

### Hero
- Background image (use picsum.photos seed for placeholder)
- Dark semi-transparent overlay
- Serif heading (Lora) centered on left side
- Two buttons: primary (#007bff) + white outline
- Height: 700px desktop, shorter on mobile

### About Section
- Two-column layout (text + image)
- Heading uses Lora serif font
- Body text in Roboto

### Counter Stats
- 4 columns, each with animated number + label
- Numbers animate on scroll into view (use IntersectionObserver)
- Light background with teal (#95adbe) overlay at 30% opacity
- Circular number backgrounds (border-radius: 50%)

### New Releases
- Grid of book cards with cover images (use picsum.photos)
- Card has image, title, short description

### Testimonials
- Cards with quote text, author name, optional avatar
- Warm white background (#f5f4f0)

### Pricing
- 3 plan cards side by side
- Each has: plan name, price, feature list, "Get Started" button
- One card can have a "sale" badge (coral #ff7a5c)

### Contact/CTA
- Full-width bg image with dark overlay
- Heading "Send a Message & Get in touch!"
- Form with name, email, message fields + submit button

### Blog
- 3 blog post cards in a row
- Each: image, category, date, title, excerpt, "Read more" link

### Footer
- Dark background (#343a40)
- 4 columns: Extra Links, Legal, Company, Have a Questions
- Bottom bar with copyright + Component Dock link (mandatory)
- Social media icon links

## Placeholder Strategy

- Images: `https://picsum.photos/seed/printcraft-<n>/<w>/<h>` (deterministic)
- Fonts: Google Fonts link for Lora + Roboto
- Icons: lucide-react
