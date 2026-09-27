# Servhub — Design Notes

## Source Template

- **ColorLib Name:** Services
- **Slug:** services
- **Preview URL:** https://preview.colorlib.com/theme/services/

## Design Tokens (extracted from preview)

| Token            | Value                                    |
| ---------------- | ---------------------------------------- |
| Brand color      | #C2E54F (lime green)                     |
| Font family      | Jost (Google Fonts, weights 400/700/900) |
| Body text        | #666666                                  |
| Headings         | #000000                                  |
| Dark background  | #000000                                  |
| Light background | #f8f9fa / #eff1f3                        |
| Button hover     | bg #000, text #fff                       |

## Sections (in order)

1. **Navbar** — Sticky header, brand left, 6 nav links right, mobile hamburger
2. **Hero** — Full-width bg image + dark overlay, heading + subtext + CTA
3. **About** — 3-col: text, image, text
4. **Services** — 2×3 grid with icons (lucide-react)
5. **Projects** — Filterable gallery (All/Web/Design/Brand), 3-col grid
6. **Testimonials** — Lime-green bg carousel, 3 testimonials
7. **Blog** — 3-col cards with image, title, date, excerpt
8. **Contact** — Form + 2 office locations
9. **Footer** — 4-col: info, services, resources, templates + social + copyright

## Differences from Original

- Brand icons (Twitter, Facebook, etc.) replaced with inline SVGs (lucide-react removed brand icons)
- Placeholder images via picsum.photos instead of ColorLib assets
- No ColorLib attribution in footer; replaced with Component Dock link
- Google Fonts loaded via `<link>` in index.html
