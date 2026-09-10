# WashBox — Design Notes

Source: ColorLib Carwash (https://preview.colorlib.com/theme/carwash/)
New name: washbox
Preview analyzed: 2026-09-11

## Section Order (fidelity match)

1. **Navbar** — Sticky white bar, logo left, 5 nav links, phone CTA button right (hidden on mobile).
2. **Hero** — Full-width bg image with dark overlay. "Car Wash" in 124px Poppins weight-800 white. "& Detailing" animated with stroke/fill toggle (CSS animation). Description text. Pill CTA button (blue gradient).
3. **Equipment** — Offset layout: left = decorative bg image (section-bg02), right = heading + text + CTA button. Light section.
4. **Pricing** — 3 cards in a row. White cards, subtle border. Each: icon, title, "Starting at", price in purple (#4C1E51), feature list (5 items), outlined pill "Get Started" button. Hover fills button with brand color.
5. **Testimonials** — Dark bg with decorative right image. Slider with dot nav. Quote text in white, founder avatar + name + role.
6. **Services** — "Why take our services?" heading + 4-column icon grid. Each: SVG icon, heading, description. White bg with subtle right-side decoration.
7. **Video CTA** — Dark bg image, centered green gradient circular play button, heading + description text to the right.
8. **Maps** — Two images side-by-side (map + contact info graphic). Decorative only — skip for React version.
9. **Footer** — Dark bg image. 4-column: logo + contact, opening hours, navigation links, social icons. Bottom bar: copyright.
10. **Scroll-to-top** — Fixed blue circle, bottom-right.

## Design Token Mapping → Tailwind

| Token | Tailwind usage |
|---|---|
| `#007AFF` primary | `@theme { --color-brand: #007AFF; }` → `bg-brand`, `text-brand`, `border-brand` |
| Button gradient | Custom gradient class or inline: `bg-gradient-to-l from-[#0BC6FF] via-[#0d80f3] to-[#0BC6FF]` |
| `#70D76A` green accent | `text-[#70D76A]` for section label spans |
| `#010A44` heading | `text-[#010A44]` on headings |
| `#10285d` body | Default body text color |
| `#072366` nav link | `text-[#072366]` on nav items |
| `#4C1E51` pricing price | `text-[#4C1E51]` on price display |
| `#E7E6EB` card border | `border-[#E7E6EB]` on pricing cards |
| `30px` pill radius | `rounded-[30px]` on buttons |
| Poppins font | `font-poppins` via Google Fonts link in index.html |
| Work Sans font | `font-['Work_Sans']` via Google Fonts link in index.html |

## Component Plan

| Component | Notes |
|---|---|
| `Navbar.tsx` | Sticky, mobile hamburger, phone CTA. Use `packages/ui` Button. |
| `Hero.tsx` | Full-width bg image, dark overlay via `bg-black/50` absolute. Animated text via CSS keyframes in index.css. |
| `Equipment.tsx` | Two-column offset layout, bg image area + text. |
| `Pricing.tsx` | 3 PricingCard sub-components, outlined button with hover fill. |
| `Testimonials.tsx` | Slider (could use simple state-based or CSS scroll-snap). Quote + founder. |
| `Services.tsx` | 4-column grid of service items with lucide-react icons. |
| `VideoCta.tsx` | Dark bg, centered play icon button, text block. |
| `Footer.tsx` | 4-column grid, Component Dock link, opening hours, social icons (lucide-react). |
| `ScrollToTop.tsx` | Fixed button, appears after scroll. |

## Notes

- Maps section is decorative only (two static images). Consider simplifying or merging with footer contact info for React version.
- Hero slider in original has dot navigation — can simplify to single hero for React since content is the same across slides.
- Pricing card features in original are placeholder "2 TB of space" etc. — replace with car-wash-relevant copy (e.g. exterior wash, interior vacuum, tire shine, etc.).
- Testimonial founder names are placeholder "Robart Brown" — use different names.
- All placeholder images via `https://picsum.photos/seed/washbox-<n>/<w>/<h>`.
