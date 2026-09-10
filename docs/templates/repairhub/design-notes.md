# RepairHub — Implementation Notes

**Source**: ColorLib Autorepair (https://preview.colorlib.com/theme/autorepair/)
**New name**: `repairhub`

---

## Section Order (top → bottom)

1. Navbar
2. Hero Slider (2 slides, auto-advancing)
3. Intro CTA Banner
4. Services (6 items, 3-col grid)
5. About + Stats Counter (4 items)
6. Appointment / Free Consultation Form
7. Testimonials (carousel, 3+ items)
8. Blog (3 cards)
9. Pricing (4 plans)
10. Done Projects (image grid with overlays)
11. Footer

## Component Breakdown

| Component         | Notes                                                             |
| ----------------- | ----------------------------------------------------------------- |
| `Navbar`          | Dark bg, brand "RepairHub", 6 nav links, hamburger on mobile      |
| `HeroSlider`      | 2 slides, auto-advance (5s), overlay, heading + CTA button        |
| `IntroBanner`     | Icon (wrench), heading "Are you ready? Let's repair it now!", CTA |
| `Services`        | 6 cards, icon + title + desc + "Read more", 3-col responsive grid |
| `AboutStats`      | Company description paragraph + 4 counter items on dark bg        |
| `Appointment`     | "Free Consultation" heading, form (name, phone, date, time, msg)  |
| `Testimonials`    | Carousel/slider with quote + name + role                          |
| `Blog`            | 3 cards: image, title, date, author                               |
| `Pricing`         | 4 cards: plan name, price, description, "Get Started" button      |
| `ProjectsGallery` | Grid of project images with hover overlays                        |
| `Footer`          | 4-col: brand/about, services links, contact info, social links    |

## Design Token Mapping (→ Tailwind)

| Original Token       | Tailwind Theme Variable    | Tailwind Class Example       |
| -------------------- | -------------------------- | ---------------------------- |
| Brand orange #f79f24 | `--color-brand: #f79f24`   | `bg-brand`, `text-brand`     |
| Primary blue #007bff | `--color-primary: #007bff` | `bg-primary`, `text-primary` |
| Dark bg #202020      | `--color-dark: #202020`    | `bg-dark`                    |
| Light bg #f8f9fa     | Tailwind `gray-50`         | `bg-gray-50`                 |
| Text #000000         | Tailwind `black`           | `text-black`                 |
| Text muted #6c757d   | Tailwind `gray-500`        | `text-gray-500`              |
| Button radius 4px    | `rounded` (0.25rem)        | `rounded`                    |

## Fidelity Notes

- Hero slider: use CSS-based fade/slide transition (no heavy carousel lib needed)
- Flaticon automotive icons → replace with `lucide-react`: Wrench, Zap, Battery, Settings, Truck, Car
- Stats counter: implement with `IntersectionObserver` + animated number counting
- Testimonial carousel: simple CSS scroll-snap or minimal state-managed carousel
- Pricing cards: highlight the brand orange on price text or top border
- Project gallery: grid with CSS overlay on hover (title + description)
- All images use `picsum.photos/seed/repairhub-N/W/H` for deterministic placeholders
- Poppins font loaded via Google Fonts `<link>` in index.html
- Footer MUST link https://www.componentdock.com/

## Potential Pitfalls

- Hero slider timing: use `useEffect` + `setInterval`, clean up on unmount
- Stats counter animation: must only trigger when section enters viewport
- Form validation: use zod schemas + controlled inputs
- Mobile nav: hamburger toggle with `aria-expanded` for accessibility
- No `colorlib.com` or `preview.colorlib.com` references anywhere in app code
