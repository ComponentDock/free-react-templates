# Traverse — Design Notes & Task Outline

Source: ColorLib Cruise (https://colorlib.com/wp/template/cruise/)
Preview: https://preview.colorlib.com/theme/cruise/
New name: traverse

## Design Tokens Summary

- Brand: #ff5533 (coral red-orange)
- Green accent: #71bc42 (feature check icons)
- Body/heading: #364d59
- Dark section: #1c2d37
- Footer: #000
- Light bg: #f6f5f5
- Font: DM Sans (300/400/700)
- Button radius: 4px
- Section padding: 7rem top/bottom (desktop)

## Section Order (fidelity reference)

1. **Navbar** — Centered logo text, split left/right nav links. Transparent
   over hero → sticky white with shadow. Mobile: slide-in menu from right.
   Active link color: #ff5533.

2. **Hero / Cover** — Full viewport height. Background image with black
   overlay at 0.5 opacity. Centered white heading + subtitle paragraph.
   Heading: font-weight 300, font-size 3rem.

3. **What We Do** — White bg. Centered header: "What We do" span in brand
   color (uppercase, letter-spacing), h2, description paragraph. Below: 3
   column cards with image on top. On hover, white overlay slides in with
   title + description + "Learn More" link (uppercase, border-bottom brand).

4. **Our Features (Dark)** — Dark bg #1c2d37. Header in white text. Two
   rows of 9:3 layout (image : sticky sidebar). Sidebar has coral bold
   caption (01., 02.), white h3, white description paragraphs. Rows
   alternate: first has image left, second has image right (order-lg-2).

5. **Design for the Future** — White bg. Centered header with brand label.
   2×2 grid centered. Each item: green icomoon check icon (left, absolute
   positioned), h3 title, description paragraph.

6. **Testimonial** — White bg, top border #efefef. Centered blockquote.
   Coral quote icon (2rem), p text (1.5rem), cite with author name (black)
   and title (muted).

7. **Blog / Posts** — Light bg #f6f5f5. 4-column post cards. Each: image
   thumbnail, white content area with date meta (uppercase, #ccc), h2 title,
   "Learn More" link (uppercase, border-bottom brand).

8. **Footer** — Black bg. 2 main columns: left has About Us (col-7) +
   Features links (col-4); right has newsletter form (input-group with
   subscribe btn) + social icons. Bottom: copyright bar with Component Dock.

## Implementation Tasks

- [ ] Scaffold app: copy simplest existing app, rename to traverse
- [ ] index.html: add DM Sans Google Font link
- [ ] src/index.css: define @theme tokens (brand #ff5533, green #71bc42,
      dark #1c2d37, body #364d55, light #f6f5f5)
- [ ] src/components/Navbar.tsx — centered logo, split nav, sticky behavior
- [ ] src/components/Hero.tsx — full-viewport, dark overlay, centered text
- [ ] src/components/WhatWeDo.tsx — section header + 3 hover-reveal cards
- [ ] src/components/FeaturesShowcase.tsx — dark bg, 2 image+sidebar rows
- [ ] src/components/DesignFuture.tsx — 2×2 grid with green check icons
- [ ] src/components/Testimonial.tsx — blockquote with coral quote icon
- [ ] src/components/BlogPosts.tsx — 4-column post cards on light bg
- [ ] src/components/Footer.tsx — black bg, about/features/newsletter/social
- [ ] src/App.tsx — compose all sections in order
- [ ] Tests for each component (100% coverage)
- [ ] Verify: typecheck + lint + build + test:coverage
