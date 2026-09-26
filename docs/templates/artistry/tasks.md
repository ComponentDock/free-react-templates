# Artistry — Implementation Notes

## Source
- ColorLib: Jony (https://colorlib.com/wp/template/jony/)
- Preview: https://preview.colorlib.com/theme/jony/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/jony-free-template.jpg
- Category: Personal Portfolio / Creative Director

## Section Order (fidelity reference)

1. **Header** — Sticky nav. Logo "Artistry." left, nav center (Home, Works, Services, About, Blog), "Let's Talk" border button far right. Mobile: hamburger menu. Dark navy bg (#001D38).
2. **Hero** — Full-width dark background image. Two columns: headline "Hi there, I am Artistry" + subtitle "Creative Director" (golden amber) left (~75%), portrait image right. "View Works" outlined button.
3. **About / Skills** — Bold headline ("I'm a Creative director based on New York, who loves clean, simple & unique design"). Two columns: left has paragraphs + "Download CV" outlined button; right has 3 progress bars (Wireframing 90%, UI/UX 70%, Interaction design 45%). White background.
4. **Services** — Title "My Services". 3 cards in a row (Web & Mobile Design, Web Development, E-commerce). Each: SVG icon, title, description paragraph. Dark background (#311E25), white text.
5. **Gallery** — Title "My Works". 2×2 grid of portfolio items. Each: image thumbnail, category tag (e.g. "Mobile App"), project title. "More Works" outlined button centered below. White background.
6. **Testimonials** — Title "What Clients say". Carousel of cards. Each: quote text, circular avatar, author name, role. Dark brown bg (#3B2930), white text.
7. **Footer** — Two zones:
    - (a) CTA: dark bg (#311E25), headline "Do you have any Project? Let's Talk", description text
    - (b) Social links row: Behance, Dribbble, Medium, LinkedIn
    - (c) Copyright bar: "All rights reserved | Made with ❤ by Component Dock"

## Key Fidelity Notes

- **Font:** Roboto (body + headings) — single font family, load via Google Fonts link
- **Brand accent:** #DB9A64 (golden amber) — buttons, links, progress bars, subtitle text
- **Secondary accent:** #FD8E5E (orange) — secondary button fill
- **Hero bg:** Dark image with geometric triangle patterns, portrait overlaid on right
- **About section:** White background. Bold headline spans full width. Two-column layout below.
- **Buttons:** `.boxed-btn3-line` — transparent, 1px solid #DB9A64 border, border-radius 0, uppercase. Hover: fill #DB9A64.
- **Services:** Dark bg (#311E25), centered cards with SVG icons, white text
- **Gallery:** White bg, 2×2 grid, category tags + titles overlaid on images
- **Testimonials:** Carousel with circular avatars, dark brown bg (#3B2930)
- **Footer:** Dark bg with background image, CTA headline, social icon links, copyright

## Component Breakdown

```
src/
  App.tsx              — composes all sections
  components/
    Header.tsx         — sticky nav + logo + CTA
    Hero.tsx           — dark bg + portrait + headline + button
    AboutSkills.tsx    — headline + text + progress bars
    SkillBar.tsx       — individual progress bar
    Services.tsx       — 3 service cards in a row
    ServiceCard.tsx    — individual service card
    Gallery.tsx        — 2×2 portfolio grid + "More Works" button
    GalleryItem.tsx    — single gallery item with tag + title
    Testimonials.tsx   — carousel of testimonial cards
    TestimonialCard.tsx — single testimonial card
    Footer.tsx         — CTA section + social links + copyright
  index.css            — Tailwind + theme tokens
```

## Placeholder Images

- Hero portrait: `https://picsum.photos/seed/artistry-portrait/500/600`
- Gallery items: `https://picsum.photos/seed/artistry-work-1/600/400` (etc.)
- Service icons: Use lucide-react icons (PenTool, Code2, ShoppingCart)
- Testimonial avatar: `https://picsum.photos/seed/artistry-testimonial/80/80`

## Implementation Priority

1. Set up app scaffold (copy simplest existing app, rename to artistry)
2. Install Google Fonts (Roboto) in index.html
3. Define theme tokens in index.css (@theme block with brand golden amber #DB9A64)
4. Build Header + Hero (above-fold)
5. Build AboutSkills + SkillBar
6. Build Services + ServiceCard
7. Build Gallery + GalleryItem
8. Build Testimonials + TestimonialCard
9. Build Footer
10. Write tests (Vitest + RTL) for each component
11. Verify 100% coverage
