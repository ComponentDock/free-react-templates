# Triumph — Prep Notes

Source: ColorLib "Victor" (https://colorlib.com/wp/template/victor/)
Preview: https://preview.colorlib.com/theme/victor/
New name: triumph

## Section order (from preview DOM)

1. Header (transparent, sticky)
2. Hero / Slider (dark bg, headline, CTA, decorative image)
3. Client testimonials (3 columns: Happier customers, Faster growth, Connected workflow)
4. Emergency / About (image background, CTA)
5. Services area (gray bg, "Improved Digital Experience", service cards)
6. Testimonial quote (CEO quote with avatar)
7. Portfolio / Handpicked (project grid)
8. Support / Services list (categories, contact info, CTA)
9. Footer (gradient, multi-column, Component Dock link)

## Design tokens for implementer

- Font: DM Sans (Google Fonts link in index.html)
- Brand orange: #FF6D21 → use as @theme primary
- Navy headings: #232F55 → use as @theme navy
- Slate body: #454E6D
- Section subtitle blue: #7EA0FF
- Gray bg: #F8FAFC
- Button radius: 5px (main), 35px (submit)
- Section padding: 120px (desktop), 70px (mobile)
- Hero height: 900px desktop → auto on mobile
- Hero heading: 67px desktop → 33px mobile
- Section h2: 44px desktop → 24px mobile
- Footer gradient: 45deg #454e6d → #232f55

## Fidelity notes

- Hero is a slider area but we implement as static hero (single slide)
- The "emergency care" section uses a background image — use picsum placeholder
- Portfolio cards use real project images — use picsum with seeds
- Testimonial has an avatar image — use picsum
- Mobile menu: hamburger toggle with slide-down nav
- Footer newsletter form: email input + submit button (no real backend)
- All section headings use the .section-tittle pattern (subtitle span + h2)
- CTA buttons use the .btn class with sweep animation (::before scaleX)
- The "Browse" links use .browse-btn with underline animation
