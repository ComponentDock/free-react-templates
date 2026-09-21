# Crispshot — Implementation Notes

**Source:** ColorLib Alime (https://preview.colorlib.com/theme/alime/)
**New name:** crispshot
**Category:** Photography

## Section order (matches preview 1:1)

1. Navbar (fixed, transparent)
2. Hero (full-width carousel with bg image + overlay)
3. Portfolio Gallery (filterable grid)
4. Instagram Feed (carousel with hover overlay)
5. Footer (copyright + logo + social icons)

## Fidelity notes

### Navbar
- Fixed position, transparent background, white text
- Logo left, nav links center, search icon right
- Hamburger toggler on mobile (<992px)
- Links: Home, About, Gallery, Blog, Contact
- Active state on Home by default

### Hero / Welcome
- Full-viewport-height section with background image
- Dark overlay via `::after` pseudo-element (rgba(0,0,0,0.4))
- Left-aligned text (col-12 col-lg-8 col-xl-6)
- Headline: large text, e.g. "Hello I'm Jackson" / "Hello I'm Crispshot"
- Paragraph: photography philosophy text
- CTA button: pill shape (border-radius 60px), transparent bg, white border, fills #fc6060 on hover
- Email link next to button
- Original uses owl-carousel for multiple slides; React version can use a simple carousel or single hero

### Portfolio Gallery
- Section with padding 80px
- Filter bar: All | Human | Nature | Country | Video
- "All" button active by default (`.active` class)
- 4-column grid on desktop (col-lg-3), 2-column on mobile (col-sm-6)
- Each item: image + hover overlay with "+" icon
- Hover: overlay appears, image scales 1.1x
- One item spans 2 columns (col-lg-6) for variety
- "View More" button at bottom, pill style (`.btn-2` variant: dark text, fills on hover)

### Instagram Feed
- Section heading: "Follow Instagram" + handle text
- 6 images in a carousel/row
- Each image has hover overlay: `rgba(252, 96, 96, 0.9)` background
- Overlay shows Instagram icon + handle text in white
- Image scales 1.1x on hover
- Smooth 500ms transitions

### Footer
- Simple horizontal flex layout: copyright | logo | social icons
- White/light background
- Copyright text in #252525
- Social icons: Facebook, Twitter, LinkedIn, Pinterest in #252525
- Social hover: #fc6060
- Replace ColorLib attribution with Component Dock link

## Implementation approach

1. Start from simplest existing photography app as base
2. Create `apps/crispshot/` with standard structure
3. Components: `Navbar.tsx`, `Hero.tsx`, `Gallery.tsx`, `InstagramFeed.tsx`, `Footer.tsx`
4. Use `packages/ui` components (Button, cn) where possible
5. Filter logic for gallery: useState for active filter, filter items by tag
6. Carousel for hero: simple CSS-based or lightweight (avoid new deps)
7. Placeholder images: `https://picsum.photos/seed/crispshot-<n>/<w>/<h>`
8. Icons: lucide-react (Instagram, Facebook, Twitter, Linkedin, Pinterest, Search, Menu, X, Plus)
