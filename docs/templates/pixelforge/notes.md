# Pixelforge — Implementation Notes

## Source
- **ColorLib:** Pixel (https://colorlib.com/wp/template/pixel/)
- **New name:** pixelforge
- **Category:** Creative Agency / Portfolio
- **Preview:** https://preview.colorlib.com/theme/pixel/ (LIVE — tokens verified from CSS)

## Section Order (from live preview DOM)

1. **Navbar** — Sticky header with logo, nav links (Home, About, Services, Pages dropdown, Contact), hamburger on mobile
2. **Hero Slider** — Owl-carousel, 2 slides with background images, h2 headline, h4 subtext, "View Project" CTA
3. **Top Category Area** — Flex-wrap row of category/service cards with images
4. **Newsletter** — "Stay in touch with us", blue email input, orange submit
5. **Portfolio** — "Made by pixel" heading, filter tabs (All/Visual/Advertising/Web Dev), masonry grid with hover overlays
6. **Contact** — "Get In Touch" heading, form (name, email, subject, message), "Send Message" button
7. **Footer** — Logo, Address widget, Support widget, Social widget (6 icons), copyright → Component Dock

## Design Tokens (verified from live preview CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font | Poppins 300–900 | Google Fonts import in style.css |
| Brand orange | #ff7902 | `.pixel-btn` background |
| Brand blue | #688bfe | Preloader, `.btn-2`, newsletter input |
| Headings | #000000, weight 500 | h1–h6 base styles |
| Body text | #969696, 15px, line-height 2 | p base styles |
| Dark text | #212121 | Nav links, footer |
| Light bg | #f8f8f8 | Section alt backgrounds |
| Button radius | 0 (sharp) | `.pixel-btn` |
| Button hover | 500ms transition | a base styles |
| Section padding | 100px top/bottom | `.section-padding-100` |

## Implementation Order

1. Set up app scaffold (copy from simplest existing app, rename to pixelforge)
2. Build Navbar component (sticky, hamburger on mobile)
3. Build HeroSlider component (auto-rotating carousel, 2 slides)
4. Build TopCategoryArea component (flex-wrap card row)
5. Build Newsletter component (blue input, orange submit)
6. Build Portfolio component (filter tabs, masonry grid, hover overlays)
7. Build ContactForm component (fields + validation)
8. Build Footer component (3-column, social icons, Component Dock link)
9. Compose all in App.tsx
10. Write tests for each component
11. Verify 100% coverage

## Placeholder Images

- Hero slides: `https://picsum.photos/seed/pixelforge-hero1/1920/900`, `.../hero2/...`
- Category cards: `https://picsum.photos/seed/pixelforge-cat{N}/600/400`
- Portfolio items: `https://picsum.photos/seed/pixelforge-port{N}/800/600`
- Footer logo: use text or simple SVG

## Key Implementation Notes

- **Button style:** All `.pixel-btn` buttons have 0 border-radius (sharp corners). Orange (#ff7902) default, hover transitions to blue (#688bfe) over 500ms.
- **Newsletter input:** Blue (#688bfe) background, left-rounded (5px 0 0 5px), placeholder text.
- **Portfolio filter:** Client-side filter using data attributes (`.visual`, `.add`, `.web`). All button active by default.
- **Hero carousel:** In original uses Owl-carousel; recreate with a simple auto-rotating carousel or use a lightweight React carousel.
- **Nav dropdown:** Pages menu has nested dropdowns (2 levels deep); simplify to single-level dropdown for React.
- **Social icons:** Original uses Font Awesome; use lucide-react icons instead.
