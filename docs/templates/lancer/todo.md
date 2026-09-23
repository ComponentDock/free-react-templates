# Lancer — Implementation Outline

**Source:** ColorLib Ronin → `https://preview.colorlib.com/theme/ronin/`
**New name:** `lancer`

## Structure order

1. Navbar (sticky, logo + nav links with dropdowns)
2. Hero / Banner (split: portrait left, text right, gradient CTA)
3. Welcome / About (split: stats left, skill bars right)
4. Features / Offerings (6 cards in 3×2 grid)
5. Projects / Portfolio (filter tabs + 6 cards with hover overlay)
6. Testimonials (carousel with star ratings)
7. Blog (3 post cards)
8. Footer (3 columns: About, Newsletter, Social)

## Section-by-section fidelity notes

### Navbar
- Logo on left, links on right (Home, About, Services, Pages dropdown, Blog dropdown, Contact)
- Use `Navbar` from `packages/ui` if available, else build standalone
- Sticky on scroll with backdrop blur or shadow

### Hero
- Full-width background image (use `picsum.photos/seed/lancer-hero/1920/1080`)
- Two-column: left = portrait (`picsum.photos/seed/lancer-portrait/600/800`), right = text
- Subtitle small uppercase, headline large bold Heebo, paragraph in Roboto gray
- Gradient CTA button: `linear-gradient(to right, #8490ff, #62bdfc)`, `border-radius: 5px`, white text, hover slides gradient

### About / Welcome
- Two-column layout
- Left: "About Myself" heading + paragraph + 3 stat counters with Linearicons-style icons (use Lucide equivalents)
- Right: "Tools Expertness" — animated progress bars for 5 skills
- Stats: use counter animation on scroll (Intersection Observer)

### Features
- Background `#f9f9ff`
- Section title + subtitle paragraph
- 6 feature cards: white `#fff` background, `border-radius: 10px`, icon + title + description
- Icons: use Lucide equivalents of flaticon icons (Building, Paintbrush, Lightbulb, etc.)

### Projects
- Background `#fff`
- Section title + subtitle
- Filter tabs: All, Branding, Creative Work, Web Design
- 6 project cards in 3×2 grid with image + hover overlay showing title
- Implement filter with React state (no isotope needed)

### Testimonials
- Background `#f9f9ff`
- Carousel: implement with simple auto-sliding or manual arrows
- 3 testimonial cards: quote text, author name, 4.5-star rating (Star icons from Lucide)

### Blog
- Background `#fff`
- 3 blog post cards: image, date/author line, title, excerpt
- Images from `picsum.photos/seed/lancer-blog-{1,2,3}/800/600`

### Footer
- Background `#f9f9ff`
- 3 columns:
  - About Me: heading + paragraph
  - Newsletter: heading + email input + submit arrow button
  - Follow Me: heading + social icons (Facebook, Twitter, Dribbble, Behance → Lucide)
- Copyright line with Component Dock link (`https://www.componentdock.com/`)

## Key design tokens to apply in `index.css` @theme

```css
@theme {
  --color-primary: #8490ff;
  --color-primary-light: #62bdfc;
  --color-accent: #f8b600;
  --color-bg-alt: #f9f9ff;
  --color-text: #222222;
  --color-text-secondary: #777777;
}
```

## Fonts (load in index.html)

- Heebo (headings) — Google Fonts
- Roboto (body/UI) — Google Fonts
