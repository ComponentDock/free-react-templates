# Ringdesk — Design & Implementation Notes

## Source
- **ColorLib:** Callcenter
- **Slug:** `callcenter`
- **Preview URL:** `https://preview.colorlib.com/theme/callcenter/` (live, analyzed)
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/callcenter-free-template.jpg` (404 — unavailable)
- **Analysis method:** Live preview DOM + CSS extraction

## Structure Order (top-to-bottom)
1. Navbar (fixed, white, logo + links)
2. Hero/Banner (dark overlay, heading, subtext, CTA)
3. Features (3-column icon cards)
4. Testimonials (dark bg, slider, white cards)
5. Offered Services (3x2 icon grid)
6. Facts/Stats (5 gradient counters)
7. Services (dark overlay, 6 cards)
8. About/Info (split: text left, play button right)
9. Brand Logos (grayscale row)
10. Contact (form + address)
11. Footer (dark, 3 columns, newsletter, social)

## Design Notes

### Colors
- Primary accent: `#8490FF` (soft purple-blue)
- Gradient: `#62bdfc → #8490ff` (top-to-bottom, used on CTAs + overlays)
- Text headings: `#222222`
- Text body: `#777777`
- Light bg: `#f9f9ff` (very light blue-gray)
- Dark bg: `#222222` (hero overlay, footer, services section)
- Success: `#4cd3e3` (teal)

### Typography
- Font: Poppins (300, 400, 500, 600, 700)
- Hero heading: 60px bold
- Section headings: 30-36px semi-bold
- Body: 14px, weight 300, line-height 1.625

### Buttons
- Primary CTA: pill shape (border-radius 25px), gradient bg, white text
- Hover: transparent bg with border
- Arrow icon on right side

### Key Patterns
- Section spacing: 120px vertical (.section-gap)
- Dark sections use overlay pattern: bg image + semi-transparent black overlay
- Feature cards: simple icon + heading, minimal styling
- Testimonial cards: white bg, horizontal layout (avatar + quote)
- Stats: large numbers with CSS gradient text effect (background-clip: text)
- Service cards: transparent on dark bg, gradient border on hover
- Brand logos: grayscale filter → full color on hover
- Footer: dark bg, light text, purple accents for links/numbers

## Implementation Outline

### Components
- `Ringdesk.tsx` — main page composing all sections
- `Navbar.tsx` — fixed top nav with logo, links, mobile toggle
- `Hero.tsx` — full-screen hero with overlay, heading, CTA
- `Features.tsx` — 3-column feature cards
- `Testimonials.tsx` — dark bg slider with white cards
- `OfferedServices.tsx` — 3x2 icon service grid
- `Stats.tsx` — 5 counter/stats with gradient numbers
- `Services.tsx` — dark overlay section with 6 service cards
- `About.tsx` — split layout with play button
- `BrandLogos.tsx` — grayscale partner logos row
- `Contact.tsx` — form + address info
- `Footer.tsx` — 3-column dark footer with newsletter

### State Management
- Minimal state: mobile nav toggle, testimonial slider index
- No complex state management needed

### Dependencies
- `lucide-react` for icons (Play, ArrowRight, social icons)
- `packages/ui` for shared components (Button, cn)
- No new dependencies expected

### Assets
- Hero bg: `https://picsum.photos/seed/ringdesk-hero/1920/1080`
- Testimonial bg: `https://picsum.photos/seed/ringdesk-test/1920/600`
- Services bg: `https://picsum.photos/seed/ringdesk-svc/1920/800`
- Feature icons: lucide-react
- Client avatars: `https://picsum.photos/seed/ringdesk-av-{n}/80/80`
- Brand logos: placeholder SVGs or lucide icons
