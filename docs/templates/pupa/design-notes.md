# Pupa — Design Notes

## Source

- ColorLib "Cocoon": https://colorlib.com/wp/template/cocoon/
- Live preview: https://preview.colorlib.com/theme/cocoon/

## Structure Order (single-page)

1. **Sidebar** (fixed left, dark panel)
2. **Portfolio Grid** (home/default view, masonry)
3. **About Section** (split: image + text + counters + testimonials)
4. **Services Section** (split: image + service list)
5. **Blog Section** (cards + sidebar)
6. **Contact Section** (split: image + form)

## Section-by-Section Fidelity Notes

### Sidebar

- Dark background (#18181c), full height (min-height: 100vh)
- Logo at top center
- Nav links: Home, About, Services, Portfolio, Blog, Contact
- Filter sub-menu: All, Branding, Design, Photography, Architecture
- Social icons: Pinterest, Facebook, Twitter, Dribbble (use lucide-react equivalents)
- Copyright at bottom
- On mobile: collapses to a hamburger menu button (fixed bottom-right, pill shape, #99896e icon)

### Portfolio Grid

- Masonry layout using CSS Grid or a masonry library
- 4 columns on lg, 2 on md, 1 on sm
- Each item: image + hover overlay with plus icon + "project name" text
- Overlay: semi-transparent dark background, centered content
- Filter: show/hide items by data attribute, animate transition
- Use `https://picsum.photos/seed/pupa-<n>/400/300` for placeholder images

### About Section

- Split: left = image card, right = content
- Heading: "Just a few words about us"
- Body paragraph text
- 3 counter boxes: Years of experience (12), Happy clients (257), Projects completed (192)
- Counter animation on scroll (use Intersection Observer + count-up)
- Testimonial carousel below counters (4 testimonials, auto-rotate or manual)
- Each testimonial: quote text, author name ("maria smith"), role ("project manager, company")

### Services Section

- Split: left = image card, right = content
- 6 service items in a list/grid:
  1. Typography Courses
  2. Mix and Match
  3. Architecture Plans
  4. Brand Identity
  5. Interior Design
  6. Collateral Design
- Each: title (h4) + short description paragraph

### Blog Section

- Main content (8-col): blog post cards
- Each card: image, date badge (top-left overlay), title, excerpt
- Sidebar (4-col):
  - Search widget (input + button)
  - Categories widget (list of categories)
  - Instagram widget (grid of small images)
  - Tags widget (tag pills)

### Contact Section

- Split: left = image, right = form
- Form fields: Name (text), Email (email), Subject (text), Message (textarea)
- Submit button: "Send", pill shape, #99896e background
- Form uses basic validation

## Design Tokens (from CSS)

```css
--font-family: "Montserrat", sans-serif;
--brand: #99896e;
--dark: #18181c;
--body-text: #9c9ca9;
--heading: #18181c;
--bg: #f7f7f7;
--white: #ffffff;
--btn-radius: 50px;
--section-underline: 2px solid #99896e;
```

## Key Implementation Notes

- Sidebar is fixed position, full viewport height
- Content area is offset by sidebar width (col-lg-10)
- Use Tailwind's grid utilities for masonry-like layout
- Portfolio filter uses CSS transitions for smooth show/hide
- Counter animation: count from 0 to target on scroll into view
- Testimonial carousel: simple slide or fade between cards
- All placeholder images via picsum.photos with deterministic seeds
