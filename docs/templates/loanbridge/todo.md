# LoanBridge — Prep Notes

## Source

- ColorLib "Loan": https://colorlib.com/wp/template/loan/
- Preview: https://preview.colorlib.com/theme/loan/
- Category: Finance

## Section Order (fidelity checklist)

1. Navbar (transparent, sticky, logo + nav + phone button)
2. Hero Slider (2 slides, bg image + overlay, subtitle + h1 + CTA + hero image)
3. Hero Stats Bar (dark bg, 4 items: image + 3 icon-text pairs)
4. About Section (2-col: text left with h2 + paragraphs + button, overlapping images right)
5. Services Section (bg image, centered heading, 4-col service cards with icons)
6. Why Choose Us (2-col: large image + badge left, h2 + checklist right)
7. Application Form (bg image, centered heading, 2 dropdowns + text input + submit)
8. Team Section (centered heading, 4-col team cards with social overlay)
9. Testimonial (dark bg, carousel: quote + founder info)
10. Blog Section (centered heading, 2-col blog cards)
11. Footer (4-col: logo/desc, Quick Links, New Products, Support; bottom: copyright + social)

## Design Notes

- Brand blue: #3589f1 — use for buttons, links, accents
- Dark navy: #000a2d — hero overlay, testimonial bg
- Accent orange: #ff872d — sparse accent
- Light gray: #f7f7f7 — alternate section bg
- Fonts: Rubik (body, sans-serif), Rufina (headings/buttons, serif)
- Buttons: uppercase, letter-spacing 3px, 1px border, padding 18px 44px, sharp corners
- Team cards: social overlay appears on hover (absolute positioned over image)
- Testimonial: dark background with centered carousel
- Application form: 2 select dropdowns + 1 text input + submit button in a horizontal row
- Stats bar: dark bg below hero, icon + text pairs
- About: overlapping image layout (one image behind another)

## Component Mapping

- `Navbar.tsx` — transparent sticky header, phone button
- `Hero.tsx` — slider with 2 slides, hero images
- `StatsBar.tsx` — dark bar with icon-text pairs
- `About.tsx` — 2-col with overlapping images
- `Services.tsx` — 4 service cards grid
- `WhyChooseUs.tsx` — image + checklist layout
- `ApplicationForm.tsx` — loan config form
- `Team.tsx` — 4 team cards with social overlay
- `Testimonial.tsx` — carousel with dark bg
- `Blog.tsx` — 2 blog cards
- `Footer.tsx` — 4-col footer + bottom bar
