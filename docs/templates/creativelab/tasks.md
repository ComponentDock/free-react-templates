# Creativelab — Implementation Tasks

**Source**: ColorLib Creative Agency (`creative-agency`)
**Preview**: https://preview.colorlib.com/theme/creative-agency/
**Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Section order (top → bottom)

1. Navbar
2. Hero
3. About
4. Portfolio
5. Services
6. Why Choose Us
7. Numbers / Stats
8. Pricing
9. Testimonial
10. Team
11. Blog
12. Contact
13. Footer

## Design notes

- **Brand color**: `#6195FF` blue — primary for all CTAs, links, hover states
- **Fonts**: Montserrat (headings) + Varela Round (body) via Google Fonts
- **Buttons**: 3px border-radius, uppercase, bold; three variants: solid blue (.main-btn), white (.white-btn), outline (.outline-btn)
- **Section rhythm**: alternating white / light-grey (#FAFAFA) backgrounds
- **Dark sections**: hero, numbers, testimonial — all use background images with dark semi-transparent overlay
- **Footer**: dark (#1C1D21) background, centered logo, social icons, copyright
- **Parallax-like**: background-attachment: fixed on dark image sections (hero, numbers, testimonial)
- **Icons**: Lucide React replacements for Font Awesome icons (cogs, magic, mobile, diamond, rocket, flask, pencil, check, etc.)
- **Images**: placeholder via picsum.photos/seed/creativelab-<n>
- **No ColorLib references** in app code — provenance only in spec + TEMPLATES.md + PR
- **Footer must link** https://www.componentdock.com/ ("Component Dock")

## Fidelity notes

- Match 1:1 section order from DOM
- Portfolio grid: 3 columns × 2 rows with hover overlay (category, title, link + lightbox icons)
- Numbers section: 4 columns with animated counters over background image
- Pricing: 3 cards with price, feature list, and outline "Purchase now" button
- Testimonials: carousel/slider with avatar, name, role, and quote
- Team: 3 cards with photo, hover social overlay, name, and role
- Blog: 3 cards with image, meta row (author, date, comments), title, excerpt, read more
- Contact: 3 info items (phone, email, address) + form (name, email, subject, message)
