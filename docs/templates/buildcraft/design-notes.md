# BuildCraft — Implementation Notes

**Source**: ColorLib Celt (https://preview.colorlib.com/theme/celt/)
**New name**: `buildcraft`

---

## Section Order (top → bottom)

1. Navbar
2. Hero ("We Build Your Dream" + "Learn more" CTA)
3. Features (3 cards: Certified Experience, Teamwork, Technology)
4. About Us + Stats Counter (4 items)
5. Featured Works / Portfolio (4 project cards + "View All")
6. Our Services (6 items: Construction, Renovation, Architecture, Painting, Decorating, Consulting)
7. Why Choose Us (accordion + Contact Us CTA)
8. Happy Clients / Testimonials (carousel, 3+ items)
9. Latest News / Blog (3 cards)
10. Footer (dark, contact info, CTA)

## Component Breakdown

| Component      | Notes                                                               |
| -------------- | ------------------------------------------------------------------- |
| `Navbar`       | Dark navy bg, brand "BuildCraft", 6 nav links, hamburger on mobile  |
| `Hero`         | Full-width dark overlay, large heading, paragraph, "Learn more" btn |
| `Features`     | 3-column cards, icon + title + desc + "Read more"                   |
| `AboutStats`   | "About Us" paragraph + 4 animated counter items                     |
| `Portfolio`    | 4 project cards (image + overlay title/category), "View All" link   |
| `Services`     | 6 service cards with icons, title, description, "Read more"         |
| `WhyChooseUs`  | Accordion with expandable panels + "Contact Us" CTA                 |
| `Testimonials` | Client carousel with quote, name, role                              |
| `Blog`         | 3 cards: title, date, author, excerpt, "Read more"                  |
| `Footer`       | Dark navy bg, contact info, CTA button, Component Dock link         |

## Design Token Mapping (→ Tailwind)

| Original Token       | Tailwind Theme Variable      | Tailwind Class Example   |
| -------------------- | ---------------------------- | ------------------------ |
| Brand yellow #ffd626 | `--color-brand: #ffd626`     | `bg-brand`, `text-brand` |
| Dark navy #004       | `--color-navy: #004`         | `bg-navy`                |
| Darker navy #001232  | `--color-navy-deep: #001232` | `bg-navy-deep`           |
| Muted text #64728a   | `--color-muted: #64728a`     | `text-muted`             |
| Light bg #eee        | Tailwind `gray-200`          | `bg-gray-200`            |
| Off-white #f8f8f8    | Tailwind `gray-50`           | `bg-gray-50`             |
| White #ffffff        | Tailwind `white`             | `text-white`             |

## Fidelity Notes

- Hero: dark navy overlay with white text and yellow accent on heading/CTA
- Features: icon + title + short description, 3-column grid, "Read more" text link
- Stats counter: use `IntersectionObserver` + animated number counting
- Portfolio: 4 cards in a 2x2 grid, image with dark overlay showing title + category on hover
- Services: 6 cards in 3-column grid, each with icon (lucide-react: HardHat, Hammer, Compass, PaintBucket, Palette, MessageCircle)
- Accordion: use `aria-expanded` and `aria-controls` for accessibility, animate height
- Testimonials: simple state-managed carousel with prev/next
- Blog: 3 cards with image, date, author, title, excerpt, "Read more"
- All images use `picsum.photos/seed/buildcraft-N/W/H` for deterministic placeholders
- Poppins font loaded via Google Fonts `<link>` in index.html
- Footer MUST link https://www.componentdock.com/

## Potential Pitfalls

- Accordion: manage open/closed state with `useState`, ensure only one panel open at a time
- Counter animation: must only trigger when section enters viewport (IntersectionObserver)
- Portfolio hover overlay: CSS-only approach with opacity transition
- Mobile nav: hamburger toggle with `aria-expanded`
- No `colorlib.com` or `preview.colorlib.com` references anywhere in app code
