# Talentflow — Design Notes

## Source

- **ColorLib template:** Humanresources
- **Preview URL:** https://preview.colorlib.com/theme/humanresources/
- **New name:** Talentflow

## Design Tokens (extracted from CSS)

| Token                 | Value                       | Usage                                                 |
| --------------------- | --------------------------- | ----------------------------------------------------- |
| Font                  | "Work Sans" (300, 400, 700) | Body + headings (Google Fonts)                        |
| Primary               | #0389FF                     | Buttons, navbar bg, counter numbers, links            |
| Body text             | #999999                     | Paragraphs, descriptions                              |
| Headings              | #000000                     | h1–h5                                                 |
| Light bg              | #f8f9fa                     | Stats section, footer bg                              |
| Button radius         | 0                           | Square buttons, uppercase, 14px, letter-spacing 0.1em |
| Button hover          | #0075dc / #006ecf           | Primary button hover states                           |
| Footer widget heading | uppercase, 15px, #cccccc    | Footer column titles                                  |

## Section Layout

1. **Navbar** — fixed on mobile (bg #0389FF), absolute on desktop (transparent over hero). White text, uppercase links.
2. **Hero** — full-width background image, dark overlay (rgba 0,0,0,0.3), heading + subtext + CTA. Min-height 800px in original.
3. **Features** — 3-column grid with overlap cards (mt:-200px in original). White bg, shadow, icon + title + description + "Learn More".
4. **About** — 2-column: left = image slider (owl-carousel in original → simple image with dots), right = "Why Us?" accordion (4 items, chevron toggle).
5. **Stats** — bg-light, 3 counters centered (number in primary blue, label uppercase gray).
6. **Team** — "The Leadership" heading, 3 staff cards (bg image, bottom info panel, hover expand to show bio).
7. **Testimonials** — "Happy Customers" heading, centered blockquote with large quote mark.
8. **Blog** — "Our Blog" heading, 2 rows of 2 cards each (asymmetric: 1/3 + 2/3). Cards are bg images with hover overlay + text.
9. **Footer** — bg-light, 4-column (About, Learn More, Support, Connect), bottom copyright with Component Dock link.

## Differences from Original

- Simplified carousel to single image with dot navigation (no owl-carousel dependency)
- Accordion uses controlled React state instead of Bootstrap collapse
- Social icons use inline SVGs instead of IcoMoon font
- Blog cards use CSS hover instead of CSS opacity transitions with visibility
- Team cards use CSS group-hover instead of JS hover handlers
- All placeholder images via picsum.photos (deterministic seeds)
