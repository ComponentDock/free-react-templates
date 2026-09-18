# Shrine — Implementation Todo & Design Notes

Source: ColorLib "Church Wordpress Themes"
New name: `shrine`
Spec: `openspec/specs/template-shrine/spec.md`

## Implementation Order

1. **Scaffold** — Copy simplest existing app, rename package, set up folder structure
2. **Design tokens** — Add colors/fonts to `src/index.css` Tailwind theme
3. **Navbar** — Red coral bar, logo, nav links, Donate button, mobile hamburger
4. **Countdown Top Bar** — Dark charcoal bar with countdown timer logic
5. **Hero Slider** — Full-width image carousel, headings, CTA button, arrows
6. **Latest Sermon** — Avatar, sermon heading, speaker info, media icon circles
7. **Content Sections** — About, Ministries grid, Events list, Gallery
8. **Newsletter** — Email signup form with distinct background
9. **Footer** — Multi-column with Component Dock link
10. **Responsive** — Mobile hamburger, stacked layouts, readable text
11. **Tests** — TDD: write tests before/during each component
12. **Verification** — `npm run spec:validate`, full coverage, build, push

## Section-by-Section Fidelity Notes

### Countdown Top Bar
- Full-width `#3a3a3a` background
- "NEXT BIG EVENT IN:" label in white, uppercase, small
- Countdown values in white bold, each in bordered cell (thin white border)
- "Read More" link in coral accent, right-aligned
- Use `useState` + `useEffect` with `setInterval` for countdown logic
- Default: 2 days from now

### Navbar
- Background: `#d94f44` coral red
- Logo: wheat/leaf icon (lucide-react `Wheat` or `Leaf`) + text
- Nav links: uppercase, white, letter-spacing, font-weight ~500
- "Donate" button: white text, transparent or slightly darker bg, rounded
- Mobile: hamburger → full-screen overlay with dark bg, links centered vertically
- Sticky on scroll via `position: sticky; top: 0; z-index: 50`

### Hero Slider
- Full-viewport-height hero (80vh-100vh)
- Background image: `https://picsum.photos/seed/shrine-hero-1/1920/1080`
- Dark overlay: `bg-black/50` or `bg-gradient-to-r from-black/60 to-transparent`
- Heading: 3rem+ white bold, left-aligned
- Subtitle: 1.2rem white/gray, left-aligned
- CTA: `#d94f44` bg, white text, padding, rounded-md
- Left/right arrows: white, circular bg, positioned at edges
- Use `useState` for slide index, CSS transition for slide change

### Latest Sermon
- Light bg, flex row layout (mobile: stack vertically)
- Left: 80px circular avatar, border-radius-full
- Center: heading in coral `#d94f44`, serif or bold sans
- Below: speaker name (coral), date, category (muted gray)
- Right: 4 circular icon buttons (Video, Headphones, FileText, Link from lucide-react)
- Icons: light gray bg `#f5f5f5`, ~50px circles, hover darkens

### Section Divider
- `hr` or `border-t` with `border-gray-200`
- Centered text, gray, ~1rem font-size

### Ministries / Services
- 3-column grid (desktop), 1-col mobile
- Each card: icon (lucide), title, description
- White bg, subtle shadow, padding

### Events
- List or grid of event cards
- Date badge (coral bg), title, brief description
- "Read More" link

### Gallery
- 2-3 column masonry or grid
- Images from `picsum.photos/seed/shrine-gallery-<n>/400/300`
- Hover overlay with zoom icon

### Newsletter
- Full-width section with coral or dark background
- Heading, subtitle
- Email input + submit button (coral)
- White text

### Footer
- Dark bg `#3a3a3a`
- 3-4 columns: Logo, Quick Links, Contact, Social
- Bottom bar: "Made with Component Dock" link → `https://www.componentdock.com/`
- Social icons from lucide-react

## Key Implementation Notes

- **No ColorLib references** in any app file — all provenance in spec/docs/TEMPLATES.md
- **Images**: `picsum.photos/seed/shrine-<variant>-<n>/<w>/<h>` for deterministic placeholders
- **Fonts**: Load Montserrat + Open Sans via Google Fonts `<link>` in `index.html`
- **Icons**: All from `lucide-react` (Wheat, Leaf, Video, Headphones, FileText, Link, Menu, ChevronLeft, ChevronRight, Mail, Phone, MapPin, etc.)
- **Brand color** in Tailwind theme: `coral: '#d94f44'` — use via `bg-coral`, `text-coral`, etc.
- **Footer** must include `<a href="https://www.componentdock.com/" target="_blank" rel="noopener noreferrer">Component Dock</a>`
