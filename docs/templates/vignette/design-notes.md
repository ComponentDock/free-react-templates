# Vignette — Design Notes

## Source

- **ColorLib template:** Bato
- **Preview URL:** https://preview.colorlib.com/theme/bato/
- **Listing:** https://colorlib.com/wp/template/bato/

## Structure order (single-page React)

1. **Navbar** — centered logo ("Vignette"), hamburger toggle on mobile
2. **Hero Carousel** — 3 slides, each with split layout:
   - Left ~75%: full-height background image
   - Right ~25%: slide number (01/03), category tag, serif heading, description, CTA button
3. **Gallery / Work** — responsive grid of portfolio images, hover overlay with search icon
4. **About** — split layout: image one side, text description other side
5. **Blog** — blog post previews (cards or list)
6. **Contact** — form with name, email, subject, message fields + submit button
7. **Footer** — muted teal-gray background, Component Dock branding + link

## Section-by-section fidelity notes

### Navbar
- Original: side-sliding overlay with hamburger toggle + search input + nav links + gallery thumbnails
- React: Simplify to top navbar with hamburger for mobile. The full overlay menu with gallery thumbnails is a nice-to-have but not essential for a single-page recreation. Keep the logo centered, nav links in a row on desktop.
- Accessibility: `aria-label` on hamburger button, `aria-expanded` toggle

### Hero Carousel
- Original: Owl Carousel with 3 slides, each has the split layout (col-three-forth + col-one-forth)
- React: Use a simple auto-advancing carousel or manual navigation. Each slide has:
  - Background image (full-height, left)
  - Text panel (right): slide number, category tag, heading, paragraph, CTA
- Slide numbers: "01/03", "02/03", "03/03"
- Tags: "Welcome", "Photography", "Discover"
- Headings: "Photography is on it's way.", "Capture interesting things.", "Discover New Things"
- CTA: "View Galleries →" with black border, uppercase, letter-spacing

### Gallery / Work
- Original: Work page with image grid, hover overlays
- React: Responsive grid of 4-6 portfolio images using picsum.photos
- Hover: overlay with search icon (lucide-react `Search`)
- Use a masonry or uniform grid layout

### About
- Original: Split layout (about-flex) with image carousel (owl) on one side, description on the other
- React: Static image + text. Heading "About", description text, maybe a skills/services list with icons

### Contact
- Original: Contact page with form
- React: Standard contact form (name, email, subject, message, submit)
- Validation: basic required field validation
- Submit button: brand yellow background

### Footer
- Original: Muted background, social icons, copyright
- React: Component Dock branding, social links, copyright line
- Background: #b7c2c2 (muted teal-gray)

## Design tokens summary

| Token | Value |
|-------|-------|
| Brand color | #F9CE00 (warm yellow) |
| Brand hover | #ffd614 |
| Background | #ffffff |
| Heading font | Playfair Display |
| Body font | Karla |
| Text color | gray |
| Heading color | rgba(0,0,0,0.8) |
| Footer bg | #b7c2c2 |
| Border radius | 2px (inputs) |
| CTA style | uppercase, 13px, 7px letter-spacing, black border |

## Assets

- Placeholder images: `https://picsum.photos/seed/vignette-<n>/<w>/<h>`
- Icons: lucide-react (Search, ArrowRight, Menu, X, etc.)
- Fonts: Google Fonts (Karla + Playfair Display) via `<link>` in index.html

## Gotchas

- The original uses Owl Carousel — we'll implement a simple custom carousel or use a lightweight React carousel
- The side navigation overlay is complex — simplify for single-page
- The original is multi-page (Home, Work, Blog, About, Contact) — we combine into one scrollable page
- Images are from the original's `images/` folder — use picsum.photos placeholders
- No ColorLib references in app code
- Footer must link Component Dock
