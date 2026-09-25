# BoldCraft — Implementation Notes

## Source
- ColorLib: Calvin (https://colorlib.com/wp/template/calvin/)
- Preview: https://preview.colorlib.com/theme/calvin/
- Category: Personal Portfolio / Agency

## Section Order (fidelity reference)

1. **Header** — Transparent sticky nav. Logo left, nav center/right, "Let's Talk" border button far right. Mobile: hamburger menu.
2. **Hero** — Full-width background image (dark). Two columns: portrait image (327×327 circular or square) left, large headline "My name is [Name]. Digital Product Designer" + role subtitle right. Min-height ~950px desktop.
3. **About Info Bar** — Absolute-positioned at hero bottom. Three columns: "Design For: Web & Mobile", Phone number, Email with envelope icon. White text on hero bg.
4. **Our Services** — Title "My Expertise". 2×2 grid of cards. Each: SVG icon top, title, description paragraph, browse/link text. Cards separated by left+bottom borders (#EFEFEF). Hover: subtle orange shadow.
5. **Gallery** — Title "My Works". 2×2 grid of portfolio images. Each: background image, rounded corners (10px), orange-tinted overlay on hover showing title. "More Work" border button centered below.
6. **About Me** — Two-column. Left: title "About Me" + two paragraphs + pull quote in brand orange. Right: 3 progress bars (skill name + %, orange fill on light track #FFE7DE).
7. **Brand Area** — Horizontal row/carousel of 6 partner logos. Auto-scrolling.
8. **Testimonials** — Title "Client Testimonial". Carousel of cards. Each: quote text, founder image, founder name (orange), role text. Card bg: #FFFBF9, rounded 12px.
9. **Blog** — Title "Latest News". Carousel of 3 cards. Each: image with rounded corners, overlay text at bottom (category pill in orange, date + author, post title). Hover: image scales.
10. **Footer** — Two zones:
    - (a) WantToWork CTA: black bg, logo, description text, social icons (Twitter, Facebook, Pinterest, Globe, Instagram), "Let's Talk" + "Download CV" buttons
    - (b) Footer bottom: copyright with Component Dock link, nav links repeated

## Key Fidelity Notes

- **Fonts:** DM Sans (body), Roboto Condensed (headings) — load via Google Fonts link
- **Brand orange:** #FF8553 — used pervasively (buttons, links, progress bars, overlays, social icons, testimonial names, blog tags)
- **About area pseudo-element:** Light gray (#F8F8F8) rounded right shape behind the text/skills columns
- **Blog area pseudo-element:** Same light gray, rounded left shape
- **Buttons:** Gradient orange `.btn` with 25px radius, transparent `.border-btn` with 30px radius
- **Service cards:** No background, separated by thin borders, hover adds orange-tinted shadow
- **Gallery overlay:** rgba(255, 133, 83, 0.3) — semi-transparent orange
- **Testimonial card bg:** #FFFBF9 (very light peach), 12px radius
- **Footer:** Full black background, social icons in rgba orange circles

## Component Breakdown

```
src/
  App.tsx              — composes all sections
  components/
    Header.tsx         — transparent sticky nav + logo + CTA
    Hero.tsx           — background image + portrait + headline
    AboutInfoBar.tsx   — absolute bar with 3 info columns
    Services.tsx       — 2×2 grid of service cards
    ServiceCard.tsx    — individual service card
    Gallery.tsx        — 2×2 portfolio grid + "More Work" button
    GalleryItem.tsx    — single gallery item with overlay
    AboutMe.tsx        — 2-column text + skills
    SkillBar.tsx       — individual progress bar
    BrandLogos.tsx     — horizontal logo carousel
    Testimonials.tsx   — carousel of testimonial cards
    TestimonialCard.tsx — single testimonial card
    Blog.tsx           — carousel of blog cards
    BlogCard.tsx       — single blog card
    Footer.tsx         — CTA section + bottom bar
  index.css            — Tailwind + theme tokens
```

## Placeholder Images

- Hero background: `https://picsum.photos/seed/boldcraft-hero/1920/950`
- Portrait: `https://picsum.photos/seed/boldcraft-portrait/327/327`
- Gallery items: `https://picsum.photos/seed/boldcraft-work-1/600/400` (etc.)
- Blog images: `https://picsum.photos/seed/boldcraft-blog-1/600/400` (etc.)
- Testimonial avatar: `https://picsum.photos/seed/boldcraft-testimonial/80/80`
- Brand logos: Use text placeholders or simple SVG shapes

## Implementation Priority

1. Set up app scaffold (copy simplest existing app, rename)
2. Install Google Fonts (DM Sans + Roboto Condensed) in index.html
3. Define theme tokens in index.css (@theme block with brand orange)
4. Build Header + Hero + AboutInfoBar (above-fold)
5. Build Services section
6. Build Gallery section
7. Build AboutMe + SkillBar
8. Build BrandLogos carousel
9. Build Testimonials carousel
10. Build Blog carousel
11. Build Footer
12. Write tests (Vitest + RTL) for each component
13. Verify 100% coverage
