# Sudsly — Design Notes & Task Outline

Source: ColorLib "Carwash" (https://colorlib.com/wp/template/carwash/)
Preview: https://preview.colorlib.com/theme/carwash/

## Section Order (top → bottom)

1. **Navbar** — Sticky header, white background, logo left, 5 nav links centered, phone CTA button right
2. **Hero Slider** — Full-width background image, "Car Wash" 124px heading, "& Detailing" animated stroke text, subtitle, "Our Services" pill button
3. **Equipment/About** — Light blue `#EEF6FF` outer bg, white card offset right (col-7 offset-xl-5), heading + paragraph + "About Us" border button
4. **Pricing Cards** — Centered heading, 3 equal-width cards in a row (Car Wash $50 / Detailing $100 / Wash & Detailing $200), each with icon + title + price + feature list + "Get Started" border button
5. **Testimonials** — Blue gradient bg (`#1592e6`→`#007AFF`→`#10cafc`), carousel with quote text, founder avatar + name + role, right-side decorative image
6. **Services/Categories** — 4-column grid with SVG icons, titles, descriptions; green accent span (`#70D76A`) in section subheading
7. **Video CTA** — Dark background image, circular green play button with ripple animation, heading + description text overlay
8. **Map/Location** — Two map images side by side (full width)
9. **Footer** — Dark bg with image overlay, 4 columns: logo+contact, opening hours, navigation links, social icons; bottom bar with copyright

## Design Token Mapping (ColorLib → Tailwind)

| Token class | Tailwind theme / utility |
|---|---|
| `brand-primary` | `#007AFF` → `@theme { --color-brand: #007AFF; }` |
| `brand-gradient` | `bg-gradient-to-l from-[#0BC6FF] via-[#0d80f3] to-[#0BC6FF]` |
| `heading-color` | `#010A44` → `text-[#010A44]` or theme |
| `body-text` | `#10285d` → `text-[#10285d]` |
| `accent-green` | `#70D76A` → `text-[#70D76A]` |
| `office-section-bg` | `#EEF6FF` → `bg-[#EEF6FF]` |
| `pricing-price` | `#4C1E51` → `text-[#4C1E51]` |
| `nav-text` | `#072366` → `text-[#072366]` |

## Fidelity Notes

- Hero text animation (stroke clip-path) is CSS-only in the original; use Tailwind keyframes or a simple CSS animation in `index.css`.
- The "stock text" effect (`-webkit-text-stroke: 2px #fff`) for the first "& Detailing" needs a Tailwind arbitrary class or inline style.
- Hero overlay gradient: `linear-gradient(to right, rgba(1,10,68,0.8) 0%, rgba(0,42,255,0.5) 100%)` — use CSS custom property or inline style on the overlay div.
- Pricing cards: use a `Card` compound component from `packages/ui` if available, otherwise local component with `border border-[#E7E6EB]`.
- Testimonial carousel: keep it simple — 2 testimonial items with a toggle or auto-rotate. No heavy slider library.
- Video play button: use a circular button with CSS `::after` pseudo-element for the ripple border animation.
- Map section: just two side-by-side images; no interactivity needed.
- Footer social icons: use `lucide-react` icons (Twitter, Facebook, Pinterest equivalents).
- All placeholder images: `https://picsum.photos/seed/sudsly-hero/1920/850` (hero), `https://picsum.photos/seed/sudsly-about/800/600` (about), etc.
- No ColorLib references in any component file. Provenance lives in spec + TEMPLATES.md only.

## Component Breakdown

| Component | File | Description |
|---|---|---|
| `Navbar` | `src/components/Navbar.tsx` | Sticky header with logo, nav links, phone CTA |
| `Hero` | `src/components/Hero.tsx` | Full-width hero with animated text + CTA |
| `Equipment` | `src/components/Equipment.tsx` | Offset white card on light blue bg |
| `Pricing` | `src/components/Pricing.tsx` | 3-column pricing cards |
| `Testimonials` | `src/components/Testimonials.tsx` | Blue gradient carousel section |
| `Services` | `src/components/Services.tsx` | 4-column feature grid |
| `VideoCta` | `src/components/VideoCta.tsx` | Dark bg with play button + text |
| `MapLocation` | `src/components/MapLocation.tsx` | Two side-by-side map images |
| `Footer` | `src/components/Footer.tsx` | 4-column dark footer |
| `ScrollToTop` | `src/components/ScrollToTop.tsx` | Floating round button |
