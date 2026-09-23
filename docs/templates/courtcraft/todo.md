# Courtcraft — Implementation TODO

## Overview

Recreation of ColorLib "Lawmaker" as a React 19 + Vite + Tailwind 4 +
TypeScript single-page law-firm landing template.

Source: https://colorlib.com/wp/template/lawmaker/
Preview: https://preview.colorlib.com/theme/lawmaker/

## Section order (top → bottom)

1. Navbar (nav.ftco-nav)
2. Hero slider (aside#ftco-hero, FlexSlider, 3 slides)
3. Statistics counter (div#ftco-counter, parallax bg, 4 stats)
4. Services / Practice Areas (div#ftco-content, 6 cards 2×3 grid)
5. CTA parallax banner (div#ftco-started, bg-image + button)
6. Testimonials (div#ftco-testimonial, carousel)
7. Contact form (div#ftco-consult, form fields)
8. Blog posts (div#ftco-blog, 3 cards)
9. Attorney team (div#ftco-about, 3 cards)
10. Intro banner (div#ftco-intro, 3-column strip)
11. Footer (footer#ftco-footer, 4 columns + copyright)

## Design tokens

- Brand blue: #2f89fc (primary, links, hover)
- Darker blue: #3f52e3 (button bg)
- Text: #000 (headings), #fff (on dark), #828282 (muted)
- Overlay: rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.4)
- Font: "Work Sans" (Google Fonts, 400 weight)
- Button: border-radius 4px, .btn-primary bg #3f52e3, hover #2f89fc
- Section padding: 7em 0 (most sections)

## Fidelity notes

- Hero is a FlexSlider with 3 slides, each with parallax bg-image + overlay gradient
- Counter section: animated numbers, lucide-react icons replacing Flaticon glyphs
- Services grid: 2×3 layout, each card has icon + title + paragraph
- CTA: parallax bg-image with dark overlay, centered text + button
- Testimonials: client avatars + quotes in a carousel
- Contact form: split layout (bg-image left, form right)
- Blog: 3 cards in a row, each with image + title + meta + description
- Attorneys: 3 cards, photo + name + role
- Intro banner: 3-column strip with contact info
- Footer: 4-column widget layout + copyright

## Component plan

- App.tsx: compose all sections
- Navbar.tsx: sticky nav, logo, links, dropdown, mobile toggle
- HeroSlider.tsx: FlexSlider-like auto-rotating slides
- StatsCounter.tsx: 4-column counter with animated numbers
- ServicesGrid.tsx: 2×3 practice area cards
- CtaBanner.tsx: parallax bg + text + button
- Testimonials.tsx: carousel with client quotes
- ContactForm.tsx: split layout form
- BlogPosts.tsx: 3-column blog cards
- AttorneyTeam.tsx: 3-column attorney cards
- IntroBanner.tsx: 3-column strip
- Footer.tsx: 4-column widgets + copyright
