# Calvino — Implementation Todo & Design Notes

## Source
- **ColorLib:** Calvin — https://colorlib.com/wp/template/calvin/
- **Preview:** https://preview.colorlib.com/theme/calvin/
- **New name:** calvino

## Section Order (top → bottom)

1. Header (sticky, transparent → white on scroll)
2. Hero Area (dark gradient, portrait, headline)
3. About Info Bar (Design For / Phone / Email)
4. Services "My Experties" (2×2 grid)
5. Gallery "My Works" (2×2 grid + hover overlay)
6. About Me (text left, skill bars right)
7. Brand Carousel (horizontal scrolling logos)
8. Testimonials (centered quote + author)
9. Blog "Latest News" (horizontal card carousel)
10. Footer CTA "Want To Work" (dark bg, buttons)
11. Footer Bottom (copyright + nav)

## Fidelity Notes

### Header
- Transparent background on hero, becomes solid white on scroll (sticky)
- Logo left, nav center, "Let's Talk" border button right
- Mobile: hamburger menu

### Hero
- Background: dark navy-blue gradient (#010a27 → #0b34c9)
- Left column: circular employee image (327×327 on desktop, scales down)
- Right column: large heading "My name is Calvin. Digital Product Designer"
- Subtitle below heading
- Height: full viewport (100vh equivalent)

### About Info Bar
- Full-width bar directly below hero
- Left: "Design For" label + "Web & Mobile"
- Right: Phone number + Email with envelope icon
- Background: matches hero or dark overlay

### Services
- Heading: "My Experties"
- 2-column, 2-row grid (no gutters)
- Each card: SVG icon (top), title, description paragraph, orange "browse" link with underline
- Light background (#f7f7f7 or white)

### Gallery
- Heading: "My Works"
- 2-column, 2-row grid
- Each item: background image with dark overlay on hover
- Overlay text: category label ("Strategy & Direction")
- "More Work" border button centered below
- Uses hover-direction-snake effect in original (simplify to CSS fade)

### About Me
- Left: "About Me" heading + two paragraphs of text
- Right: 3 skill progress bars
  - User Interface Design: 60%
  - User Experience: 89%
  - Illustration: 95%
- Progress bars animate on scroll (use CSS animation or intersection observer)

### Brand Carousel
- Horizontal scrolling row of brand logos
- Original uses owl carousel (simplify to CSS-only or minimal JS)
- Logos: placeholder gray SVGs or text

### Testimonials
- Heading: "Client Testimonial"
- Centered blockquote text
- Author: circular avatar + name + title below
- Simple carousel (can be static single testimonial)

### Blog
- Heading: "Latest News"
- Horizontal scrollable card row
- Each card: image (top), category tag (orange pill), date + author, article title link
- 3 cards visible (scroll for more)

### Footer
- CTA section: dark bg, logo image, text, "Let's Talk" button (orange), "Download CV" border button
- Bottom bar: copyright text + footer nav links (Home, Work, Service, Blog, Contact)
- Replace Colorlib attribution with "Component Dock" link

## Design Tokens Summary
- Primary: #FF8553 (orange)
- Gradient: #FF8553 → #ec703f
- Body font: DM Sans
- Heading font: Roboto Condensed
- Button radius: 25px (primary), 30px (border)
- Section padding: 120px
- Hero bg: #010a27 → #0b34c9 gradient
- Footer bg: #000

## Implementation Notes
- Use picsum.photos/seed/calvino-<n> for all placeholder images
- Circular portrait: 327×327 on desktop, responsive down
- Skill bars: use Tailwind width utility with animation
- Brand logos: simple gray SVG placeholders
- Testimonials: static single quote (no carousel needed)
- Blog cards: horizontal scroll with snap
