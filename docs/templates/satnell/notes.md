# Satnell — Implementation Notes

**Source:** ColorLib Satner
**Preview:** https://preview.colorlib.com/theme/satner/
**Spec:** openspec/specs/template-satnell/spec.md

## Section Order (matching original 1:1)

1. **Navbar** — Sticky top, logo left, nav links right (Home, About, Services, Portfolio, Contact). Hamburger on mobile.
2. **Hero Banner** — Full-width background image, left: greeting + name + role + 2 CTAs, right: portrait illustration.
3. **About** — Left: portrait image (offset). Right: heading + 2 paragraphs + "Download CV" button.
4. **Brand Logos** — Horizontal row of 6-9 brand logos, centered.
5. **Services/Features** — Heading + subtitle + 4 service cards (icon + title + description) in a 4-col grid. Light `#f9f9fd` background.
6. **Portfolio** — Heading + filter tabs (All/Popular/Latest/Following/Upcoming) + 3-col grid of items with overlay hover effect.
7. **Testimonials** — Heading + subtitle + carousel of client testimonials (photo + name + review).
8. **Newsletter** — Dark background, heading + subtitle + email input + "Get Started" button. White text.
9. **Footer** — Centered logo + "Follow Me" + social icons (FB, Twitter, Dribbble, Behance) + copyright with Component Dock link. Light lavender `#fcf8ff`.

## Design Fidelity Notes

- **Gradient accent:** `linear-gradient(90deg, #4458dc 0%, #854fee 100%)` — used on primary buttons and accent elements. Implement as Tailwind `bg-gradient-to-r from-[#4458dc] to-[#854fee]`.
- **Primary button:** 5px radius, gradient fill, white text. Outline variant (`.tr-bg`) has transparent bg + dark text.
- **Feature cards:** `#f9f9fd` background, centered content, hover transition effect. Use `transition-all duration-400`.
- **Newsletter:** Dark full-width section. The original uses a background image (`subscribe-bg.png`). Use a solid dark color or gradient placeholder.
- **Portfolio filter:** Tab-style buttons. Active tab = primary color. Items filter by category (all, popular, latest, following, upcoming). Implement as React state filter.
- **Testimonials:** Owl Carousel in original. Implement as a simple carousel component (state-driven prev/next or auto-scroll).
- **Footer:** Light lavender `#fcf8ff` background. Minimal content — just logo, social icons, and copyright line with Component Dock.
- **Typography:** Rubik for headings and UI, Roboto for body text. Load via Google Fonts link in index.html.

## Placeholder Assets

- Hero banner: `https://picsum.photos/seed/satnell-hero/1920/1080`
- About portrait: `https://picsum.photos/seed/satnell-about/600/700`
- Brand logos: Use lucide-react icons or SVG placeholders
- Service icons: lucide-react (Code, Palette, Monitor, Smartphone)
- Portfolio items: `https://picsum.photos/seed/satnell-port{n}/600/400` (n=1..6)
- Testimonial photos: `https://picsum.photos/seed/satnell-test{n}/200/200` (n=1..3)

## Key Implementation Decisions

- Single-page app: all sections in App.tsx, one component per section
- Portfolio filter: React state + CSS transitions (no external library)
- Testimonial carousel: Simple state-driven (prev/next buttons or dot indicators)
- No parallax or complex scroll effects needed
- Responsive: Bootstrap-like grid via Tailwind (container, row, cols)
