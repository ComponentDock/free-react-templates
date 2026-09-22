# FitNest — Implementation Tasks & Design Notes

## Template identity

- **New name:** FitNest
- **Source:** ColorLib "Fitnezz" — https://colorlib.com/wp/template/fitnezz/
- **Preview:** https://preview.colorlib.com/theme/fitnezz/
- **Category:** Health Fitness / Gym
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order (top → bottom)

1. **Navbar** — Absolute over hero (desktop), black bg (mobile). Brand "FitNest" (accent on "Nest" in pink). Links: Home, About, Services (dropdown). Pink CTA button.
2. **HeroSlider** — Full-width background image slider (2 slides). Centered heading + paragraph + two buttons (outline-white "Get Started", text-link "Download"). Auto-advance.
3. **FeaturedClasses** — White bg. Heading "Featured Classes" with decorative back-text "The Classes". Carousel of 4 class cards: full-bleed image, pink price badge, white heading text. Hover: image scales 1.1x, badge toggles to outline.
4. **Schedule** — Light bg (#f7f7f7). Heading "Our Schedule" with back-text "Schedule". 2x2 grid, each item: 50/50 image + text (class name, description, time w/ clock icon, date w/ calendar icon, "Join from $15" btn-primary btn-sm). Images alternate sides.
5. **Trainers** — White bg. Heading "Expert Trainers" with back-text "Our Trainers". Carousel of 3 trainer cards: portrait image, name, "Gym Trainer" subtitle.
6. **Testimonial** — White bg. Heading "Testimonial" with back-text "Testimonial". 3-column grid of blockquotes: quote text, avatar, name, company.
7. **Blog** — White bg. Heading "Blog" with back-text "Our Blog". 2-column grid of blog cards: 50/50 image + text (title, date, excerpt, "Read More" btn-primary).
8. **Footer** — Dark bg (#262626). 3 columns: About Us + social icons, Contact Info, Quick Links. Copyright + Component Dock link.

## Fidelity notes

- **Decorative back-text:** Each section heading has oversized light gray text (#e3e3e3 on white bg, #e3e3e3 on light bg) positioned behind the heading. Implement as absolutely-positioned span with z-index 0.
- **Section headings:** h2 centered, with decorative `back-text` span below/behind.
- **Button style:** Square corners (radius 0), uppercase, 0.2em letter-spacing, 13px font-size, 2px border. Primary = white text on brand pink bg. On hover: border-color changes.
- **Class cards:** Position relative, overflow hidden. Text absolutely positioned at top:50% translateY(-50%). Image scales on hover. Price badge: inline-block, bg #f73471, white text, bold 20px.
- **Schedule items:** `d-flex` with bg-image (cover, centered) and text (padding 30px). On desktop: 50% each. On mobile: stacked with bg-image height 200px.
- **Trainer cards:** `media-custom text-center` layout. Portrait image + name + subtitle.
- **Testimonial:** blockquote with avatar (80x80px circular) + quote text (20px, black) + name + company.
- **Blog cards:** Same layout pattern as schedule items (50/50 image + text).

## Implementation checklist

- [ ] Copy simplest existing app as base, rename package to @free-react-templates/fitnest
- [ ] Set up theme tokens in index.css (@theme with #f73471 primary)
- [ ] Load Open Sans from Google Fonts in index.html
- [ ] Build Navbar component (responsive, dropdown, pink CTA)
- [ ] Build HeroSlider component (2 slides, auto-advance, background images)
- [ ] Build FeaturedClasses component (carousel, cards with price badges)
- [ ] Build Schedule component (2x2 grid, 50/50 image-text items)
- [ ] Build Trainers component (carousel of portrait cards)
- [ ] Build Testimonial component (3-col blockquotes with avatars)
- [ ] Build Blog component (2-col cards with image + text)
- [ ] Build Footer component (3-col, social icons, Component Dock link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck + lint + tests + build pass
