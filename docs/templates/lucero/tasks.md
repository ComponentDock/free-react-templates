# Lucero — Design Notes & Task Outline

## Source
- ColorLib Calvin: https://colorlib.com/wp/template/calvin/
- Preview: https://preview.colorlib.com/theme/calvin/
- New name: lucero

## Section order (top to bottom)

1. **Header** — transparent sticky navbar
   - Logo (left), nav links (Home, Work, Service, Blog, Contact), "Let's Talk" outline button (right)
   - Sticky on scroll, mobile hamburger menu
   - Background becomes solid on scroll

2. **Hero** — split layout
   - Left (4 cols): portrait/person image
   - Right (8 cols): h1 "My name is Lucero. Digital Product Designer", subtitle "Head of design at Lucero Studio"
   - White/light background

3. **About Info Bar** — below hero, 3-column row
   - "Design For" → "Web & Mobile"
   - "Phone" → "+10 (67) 367-9034"
   - "Drop your Message" → email + icon
   - Light border-top, clean spacing

4. **Services** — "My Expertise" heading
   - 2×2 grid of service cards
   - Each: icon (SVG), h5 title, paragraph, "browse-btn" link with underline
   - No card borders, clean layout with padding

5. **Gallery** — "My Works" heading
   - 2×2 grid of portfolio images
   - Each: background-image div with overlay on hover
   - Overlay shows title text centered
   - "More Work" outline button below

6. **About Me** — split layout
   - Left (6 cols): "About Me" heading + 2 paragraphs
   - Right (6 cols): 3 skill bars
     - "User Interface Design" 60%
     - "User Experience" 89%
     - "Illustration" 95%
   - Skill bars: dark bar with orange (#FF8553) fill, animated on scroll

7. **Brand Carousel** — below About Me
   - Horizontal scrolling row of 6+ brand logos
   - Border-top/bottom, grayscale style

8. **Testimonials** — "Client Testimonial" heading
   - Carousel with single visible testimonial
   - Each: quote paragraph, founder image + name + role
   - Centered layout

9. **Blog** — "Latest News" heading
   - Carousel of blog post cards (2 visible at a time)
   - Each: image, category badge ("Tips"), date + author, title link
   - 3 blog posts in total

10. **CTA / Work With Me** — dark background (#010a27)
    - Left: logo image, description paragraph, social icons (Twitter, Facebook, Pinterest, Globe, Instagram)
    - Right: "Let's Talk" gradient button + "Download CV" outline button (white variant)

11. **Footer** — light background
    - Copyright line with heart icon
    - Footer nav links (Home, Work, Service, Blog, Contact)
    - Replace Colorlib attribution with Component Dock link

## Fidelity notes

- Brand color #FF8553 is the dominant accent — use for buttons, links, skill bar fills, browse-btn underlines
- Gradient buttons: `linear-gradient(to left, #FF8553, #ec703f, #FF8553)` with 25px radius
- Outline buttons: 30px radius, border color white (header) or orange
- Headings use Roboto Condensed, body uses DM Sans
- Hero section has no explicit background color (white/default)
- CTA section is very dark (#010a27), near-black
- Brand carousel should auto-scroll or be swipeable
- Testimonial and blog sections use carousel behavior
- All images should use picsum.photos placeholders with deterministic seeds
- No ColorLib references anywhere in app code — only in this spec file

## Implementation tasks

- [ ] Create apps/lucero workspace (copy simplest existing app, rename package)
- [ ] Set up index.html with Google Fonts (Roboto Condensed + DM Sans)
- [ ] Create index.css with Tailwind theme tokens (brand color, fonts)
- [ ] Implement Navbar component (transparent, sticky, hamburger)
- [ ] Implement Hero component (split layout, portrait + heading)
- [ ] Implement AboutInfoBar component (3-column contact info)
- [ ] Implement Services component (2×2 grid, 4 cards)
- [ ] Implement Gallery component (2×2 grid, hover overlays)
- [ ] Implement AboutMe component (text + skill bars)
- [ ] Implement BrandCarousel component (auto-scroll logos)
- [ ] Implement Testimonials component (carousel)
- [ ] Implement Blog component (carousel of post cards)
- [ ] Implement CTA component (dark section, buttons, social)
- [ ] Implement Footer (copyright + nav + Component Dock)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Verify: typecheck, lint, test, build all pass
