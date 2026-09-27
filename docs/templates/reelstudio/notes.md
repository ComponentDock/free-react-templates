# ReelStudio — Design Notes

## Source
- ColorLib: Videograph
- Preview: https://preview.colorlib.com/theme/videograph/
- Category: Video production / videographer portfolio

## Section Order (top → bottom)

1. **Header** — Sticky nav, logo left, links center/right, social icons right
2. **Hero Slider** — Full-width bg images, text overlay (subtitle + headline + CTA)
3. **Services** — "What We do?", 4 service cards (2×2 grid)
4. **Work/Gallery** — Portfolio image grid (4 columns)
5. **Counter** — 3 stat blocks with animated numbers
6. **Team** — "OUR Team", 4 member cards with social overlays
7. **Blog** — "Blog Update", 3 blog cards with thumbnails
8. **CTA** — Full-width bg image, headline + CTA button
9. **Footer** — Logo/social, 4-column link layout, copyright

## Fidelity Notes

### Color Palette
- Deep purple-navy (#100028) dominates all section backgrounds
- Cyan accent (#00bfe7) used for section-title underlines, button border animation, and highlights
- White text on all dark backgrounds
- Muted gray (#adadad) for secondary text

### Typography
- Josefin Sans for all headings (display font)
- Play for body text and buttons (clean geometric sans)
- Section titles: uppercase, bold, with 5px cyan underline bar (absolute positioned pseudo-element)

### Button Style
- Primary CTA: white text, uppercase, letter-spacing 2px, Play font
- Border animation: 4 sequential 2px cyan borders animate in on hover (left→top→right→bottom)
- Padding: 14px 32px

### Section-Specific Notes

**Hero:**
- Full-width slider (3 slides in original)
- Each slide: background image, text overlay (subtitle span + h2 + CTA button)
- Text positioned left (col-lg-6)

**Services:**
- 4 cards in 2×2 grid
- Each: icon (top) + h4 title + p description
- Cards: Motion graphics, Scriptwriting and editing, Video distribution, Video hosting

**Counter:**
- 3 stat blocks side by side
- Numbers: 230, 1068, 230 (placeholders)
- Labels: Completed Projects, Happy Clients, Perspective Clients

**Team:**
- 4 member cards in a row
- Each: photo, h4 name, p role, social icon overlay on hover
- Placeholder: "Amanda Stone, Videographer"

**Blog:**
- 3 cards in a row
- Each: thumbnail, h4 title, p excerpt, "Read more" link

**CTA:**
- Full-width background image
- Left-aligned text: h2 headline + p subtitle + CTA button

**Footer:**
- 3 tiers: top (logo + social), option (4 columns), bottom (copyright)
- Columns: About us, Who we are, Our work, Newsletter
- Social: Facebook, X/Twitter, Dribbble, Instagram, YouTube

## Implementation Strategy

1. Start from an existing dark-themed template (e.g. boldcraft or similar) as scaffold
2. Copy scaffold to apps/reelstudio, rename package
3. Implement sections top → bottom
4. Use picsum.photos/seed/reelstudio-1/... for placeholder images
5. Google Fonts link in index.html for Josefin Sans + Play
6. Tailwind theme tokens in index.css for brand colors
7. Component structure:
   - src/components/Header.tsx
   - src/components/Hero.tsx
   - src/components/Services.tsx
   - src/components/WorkGallery.tsx
   - src/components/Counter.tsx
   - src/components/Team.tsx
   - src/components/Blog.tsx
   - src/components/CallToAction.tsx
   - src/components/Footer.tsx
