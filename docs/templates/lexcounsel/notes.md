# Lexcounsel — Implementation Notes

Source: ColorLib "The Lawyer" (thelawyer)
Preview: https://preview.colorlib.com/theme/thelawyer/
Stack: React 19 + Vite + Tailwind 4 + TypeScript

## Section Order (top to bottom)

1. **Header** — Sticky nav, logo left, 6 nav links + phone CTA right
2. **Hero** — Full-width bg image, centered content left: label, h1, paragraph, button
3. **Practice Areas** — 3-column cards: icon, title, description, "Read More >"
4. **About** — Split: left image, right heading + text + button
5. **Contact Form** — Dark bg section, centered white form (5 fields + submit)
6. **Recent Work** — Tabbed gallery (3 tabs), 2-col image cards per tab
7. **CTA Banner** — Dark bg, heading + "Contact Now" button
8. **Team** — 3-col grid: photo, name, role
9. **Testimonial** — Bg image, carousel: quote, founder photo + name + role
10. **Blog** — 2-col cards: image, date overlay, title, excerpt, "Read More"
11. **Footer** — 4-col: logo+contact, Support links, Quick links, Newsletter; bottom bar with copyright + socials

## Fidelity Notes

- Brand color `#3957ff` used everywhere: section labels, nav hover, links, buttons, preloader border
- Buttons are SQUARE (border-radius: 0) — must match, no rounding
- Hero heading uses "Rubik" font (not Josefin Sans like other headings)
- Section labels are uppercase with a left line (54px wide, 2px height, blue)
- Hero CTA button has `#112957` background (not the brand blue)
- Form section has a dark background with white form wrapper
- Testimonial section uses a full-width background image with quote SVG marks
- Footer has 4-column layout with newsletter email input + send button
- Mobile: nav collapses, columns stack, hero scales down to 500px height

## Component Breakdown

| Component | Props | Notes |
|-----------|-------|-------|
| Navbar | — | Logo + nav links + phone CTA, sticky |
| HeroSlider | slides[] | Slick-style carousel, min 1 slide |
| PracticeAreaCard | icon, title, description | 3 in a grid |
| AboutSection | — | Image left, text right, CTA button |
| ContactForm | — | 5 fields: name, phone, practice-area, email, message |
| RecentWork | tabs[], cards | Tab nav + card grid per tab |
| CTABanner | — | Full-width dark bg, heading + button |
| TeamMember | photo, name, role | 3 in a grid |
| Testimonial | quotes[] | Carousel with founder info |
| BlogCard | image, date, title, excerpt | 2-column grid |
| Footer | — | 4-col + bottom bar with copyright + socials |

## Placeholder Images

- Hero bg: `https://picsum.photos/seed/lexcounsel-hero/1920/900`
- About image: `https://picsum.photos/seed/lexcounsel-about/800/600`
- Service cards: `https://picsum.photos/seed/lexcounsel-svc-1/600/400` etc.
- Team: `https://picsum.photos/seed/lexcounsel-team-1/400/500` etc.
- Blog: `https://picsum.photos/seed/lexcounsel-blog-1/600/400` etc.
- Testimonial bg: `https://picsum.photos/seed/lexcounsel-testi/1920/600`
