# GymVault — Design Notes

Recreation of ColorLib "Sportify" as a React 19 + Vite + Tailwind 4 + TypeScript gym/fitness landing page.

## Source Reference

- **ColorLib source:** Sportify — https://colorlib.com/wp/template/sportify/
- **Live preview:** https://preview.colorlib.com/theme/sportify/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/sportify-free-template.jpg

## Section Structure Order

1. Header (transparent → fixed on scroll)
2. Hero Slider (full-width bg image + overlay + text + CTA)
3. Intro (3 info boxes with icons)
4. About (2-column: text left, image right)
5. Quote (centered blockquote)
6. CTA (split: image left, checklist + buttons right)
7. Classes (centered title + carousel of class cards)
8. Pricing (parallax bg + 3 pricing cards carousel)
9. Footer (logo + 3 contact columns + copyright bar)

## Fidelity Notes

### Header
- Transparent background initially; dark navy (`#190a49`) fixed header on scroll
- Logo on left, nav centered, social icons right
- Social icons: pinterest, facebook, twitter, dribbble, behance (use lucide-react equivalents or simple SVGs)
- Hamburger menu for mobile (full-screen overlay with dark navy bg)
- Mobile nav overlay: centered links, social icons below, close button

### Hero
- Full-width background image with dark overlay (rgba(25,10,73,0.9))
- Subtitle: "go to the gym now!" — small, uppercase, letter-spacing
- Title: "never limit yourself" — split across two h1 elements, "never" in a span (likely styled differently)
- Button: 186×65px, transparent bg, 2px red border (`#ff0e3b`), fill animation on hover (rotated pseudo-element)

### Intro
- 3 equal-width boxes in a flex row
- Each: SVG icon (top), h3 title, paragraph text
- Background: white (`#ffffff`)
- Text colors: titles `#2c2c2c`, paragraphs `#909090`

### About
- 8-col left / 4-col right layout
- Subtitle "aerobics program" — small uppercase, color likely `#443586` (purple)
- Title "about sportify" — large uppercase h1
- Paragraph text in `#909090`
- "read more" button (primary style)
- Right column: image (use placeholder)

### Quote
- Light background (`#eef3f6`)
- Centered italic-style blockquote
- Author attribution below with em-dash

### CTA
- Split layout: left half = bg image, right half = content
- Subtitle + title same style as About
- Checklist: 4 items with check icons (use lucide-react Check)
- Two buttons: primary (outlined red) and alt (filled red variant)
- Both buttons same text "read more"

### Classes
- Centered section title + subtitle
- Carousel/slider (implement as horizontal scroll or CSS grid with overflow)
- Each card: h3 title, paragraph, circular instructor image (border-radius: 50%)
- Cards: "aerobics", "pilates", "yoga"

### Pricing
- Parallax background (use CSS `background-attachment: fixed` or `bg-fixed`)
- Dark overlay on parallax image
- 3 pricing cards in a row (carousel on mobile)
- Card structure: name, price (large), period, 5-item feature list, "order plan" button
- Middle card uses alt/filled button style
- White card backgrounds on dark parallax

### Footer
- Dark background (navy/purple)
- Logo centered at top
- 3 columns: phone, email, address — each with icon, title, list items
- Copyright bar: "Made with ❤ by Component Dock" (replaces Colorlib attribution)
- Text colors: white on dark

## Implementation Notes

- Replace OwlCarousel with a simple CSS horizontal scroll or a lightweight carousel approach
- Parallax: use `bg-fixed` Tailwind class or a lightweight JS solution
- Header scroll behavior: use IntersectionObserver or scroll event listener
- Mobile hamburger: full-screen overlay menu with animation
- All images: use `https://picsum.photos/seed/gymvault-<n>/<w>/<h>` placeholders
- Icons: lucide-react for social/check/contact icons (no Font Awesome)
- Brand gradient: `linear-gradient(to right, rgba(120,0,255,0.34), rgba(255,14,59,0.34))` — use as overlay where applicable
