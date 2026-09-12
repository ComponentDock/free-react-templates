# Solvox — Design Notes & Implementation Todo

Source: ColorLib Eroo (https://colorlib.com/wp/template/eroo/)
Preview: https://preview.colorlib.com/theme/eroo/

## Section order (from live preview)

1. Navbar (sticky, dark, logo + 6 links)
2. Hero (full-height slider, 2 slides, overlay, 2 CTAs)
3. Services (dark textured bg, heading + 6 service cards in 3-col grid)
4. About (bg image, overlay, 2-col: image left / text right)
5. Counter (4 stats, animated count-up, bg image overlay)
6. Experience/FAQ (split: skill bars left, accordion right, light bg)
7. Team (4 member cards in row, hover social icons)
8. Portfolio (dark bg, grid of items, filter tabs)
9. Testimonials (carousel, quotes + author, light bg)
10. Blog (3 post cards in row)
11. Newsletter (email input + subscribe, dark bg)
12. Footer (4 columns + contact, dark bg)

## Fidelity notes

- **Color palette:** Brand accent is gold #cdb30c (service card active state,
  counter icons). Dark surfaces: #1a1a1a (cards), #232429 (portfolio),
  #141b25 (navbar). Button primary: #007bff (blue). Light sections: #f4f5f9.
- **Typography:** Headings use "Roboto Condensed", body uses "Roboto". Load
  both via Google Fonts <link> in index.html.
- **Service cards:** Dark cards with icon on right side, title + description.
  On hover/active, background transitions to gold #cdb30c with white text.
  Box-shadow: 0 2px 25px -16px rgba(0,0,0,0.26). Border-radius: 5px.
- **Hero slider:** Two slides with background images, semi-transparent dark
  overlay (opacity 0.5). Each slide has heading + subheading + paragraph +
  two CTA buttons. Use a simple auto-rotating slider (CSS transitions or
  a lightweight React solution).
- **About section:** Background image with parallax (background-attachment:
  fixed). Two columns: left has the image, right has "Welcome to Solvox" +
  heading + description + CTA. The section has no top/bottom padding on
  the outer wrapper.
- **Counter section:** 4 items in a row. Each has a FontAwesome icon (in the
  original) — use lucide-react icons instead. Numbers animate from 0 to
  target when scrolled into view (use IntersectionObserver).
- **Experience/FAQ:** Split layout — left column has 4 animated skill bars
  with percentage labels, right column has an accordion FAQ (4 items).
  Only one FAQ item open at a time. Light background.
- **Team section:** 4 cards in a row. Each has a circular or rounded photo,
  name (h3), and role (span). On hover, social media icon overlays appear
  over the photo. Use lucide-react for social icons.
- **Portfolio:** Dark background (#232429). Grid of items with image +
  category label overlay. Filter tabs at the top. "View All Projects" link.
  Use picsum.photos for placeholder images.
- **Testimonials:** Carousel with navigation dots. Each slide has a quote
  paragraph, author name, and author photo. Light background.
- **Blog:** 3 cards in a row. Each has a featured image, category badge,
  title, date, and excerpt paragraph. Hover lifts the card.
- **Newsletter:** Dark background section with centered text, email input,
  and subscribe button inline. Use a form with preventDefault.
- **Footer:** 4 columns. Col 1: logo + description. Col 2: Explore links.
  Col 3: Info links. Col 4: Company links. Plus a "Have a Questions?"
  section with address and phone. Copyright line must link to
  https://www.componentdock.com/ branded as "Component Dock".

## Implementation todo

- [ ] Scaffold app: copy simplest existing app, rename to solvox
- [ ] Install Google Fonts (Roboto + Roboto Condensed) in index.html
- [ ] Set up Tailwind theme tokens in index.css (@theme block)
- [ ] Build Navbar component (sticky, dark, responsive hamburger)
- [ ] Build Hero component (slider with auto-rotation, 2 slides)
- [ ] Build Services component (heading + 6 cards, gold hover)
- [ ] Build About component (bg image, overlay, 2-col layout)
- [ ] Build Counter component (4 stats, IntersectionObserver animation)
- [ ] Build Experience component (skill bars + FAQ accordion)
- [ ] Build Team component (4 cards, hover social icons)
- [ ] Build Portfolio component (grid, filter tabs, dark bg)
- [ ] Build Testimonials component (carousel, dots)
- [ ] Build Blog component (3 post cards)
- [ ] Build Newsletter component (email input + subscribe)
- [ ] Build Footer component (4 columns, contact, copyright)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck + lint + test:coverage + build pass
- [ ] Update TEMPLATES.md marker
