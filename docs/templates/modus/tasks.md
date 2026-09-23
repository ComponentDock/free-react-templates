# Modus — Implementation Notes

> Recreation of ColorLib [Interd](https://colorlib.com/wp/template/interd/)

## Design tokens

- Heebo (headings) + Mulish (body) via Google Fonts
- Brand gradient: #ff8a7a → #ffc99e
- Navy headings: #232F55
- Body text: #232F55 / #999999
- Section bg: #f9f9ff

## Sections

1. Navbar — transparent, sticky, logo + nav + phone CTA
2. Hero — split layout, headline + CTA + image
3. Services — "What We Do", 3-col cards
4. About — image left, text + CTA right
5. Testimonials — quotes with avatars
6. Gallery — "Our Work", 3 project cards with hover overlay
7. Accordion — 4 items with expand/collapse
8. CTA Banner — brand gradient background
9. Footer — 4 columns, Component Dock attribution

## Files

- `apps/modus/` — app workspace
- `openspec/specs/template-modus/spec.md` — Gherkin spec
- `apps/modus/public/CNAME` — modus.free.componentdock.com
