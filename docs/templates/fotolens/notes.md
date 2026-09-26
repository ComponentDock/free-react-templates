# Fotolens — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Fotograp" — https://colorlib.com/wp/template/fotograp/
- **Preview:** https://preview.colorlib.com/theme/fotograp/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fotograp-free-template.jpg
- **Preview fetched:** Yes (19,201 bytes HTML, CSS extracted)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Navbar** — white bg, logo text, nav links, social icons, hamburger on mobile
2. **Hero** — full-screen parallax bg with dark overlay, heading
3. **Specialties** — 4 items in 2-col grid, bg image + text
4. **Testimonials** — parallax bg, carousel with testimonials
5. **Photography Gallery** — 6 cards in 3-col grid, gradient overlays
6. **CTA** — "Need a photographer?" + red button
7. **Footer** — About, Navigations, Social, Copyright

## Fidelity Notes

### Navbar
- Logo: "fotolens" text (black, with red dot accent — use `text-red-500` for dot)
- Nav links: Home, Photography (dropdown: Nature, Portrait, Wedding, Sub Menu), Services, About, Contact
- Social icons on right: Facebook, Twitter, Instagram, YouTube (use `lucide-react`)
- Hamburger on mobile → offcanvas slide-in menu
- White background with bottom border

### Hero
- Full-width parallax background (`background-attachment: fixed`)
- Dark overlay: `rgba(0,0,0,0.6)`
- Heading: "I'm Ben Botsford a Professional Photographer Live in Oakland" (replace name)
- Full viewport height

### Specialties
- "My Specialties" heading (centered, with underline decoration via `::after`)
- 4 items in 2-column grid (col-md-6)
- Each: horizontal layout — bg image (left) + text (right)
- Items: Nature Photography, Portrait Photography, Wedding Photography, Food & Drink Photography
- Each has heading + description paragraph

### Testimonials
- Parallax background image with dark overlay
- Carousel with testimonials (use React carousel)
- Each: circular photo, blockquote text, name with em-dash
- Testimonial: Marrygrace Woodland

### Photography Gallery
- "My Photography" heading (centered)
- 6 cards in 3-column grid (col-lg-4)
- Each: image with gradient overlay on hover + title + "5 photos / Nature" category
- Projects: Autumn Leaf, Sea Creatures, Enjoying Deep Sea, Beautiful Beach, Laughter is Science, Knot Tying
- AOS fade-up with staggered delays

### CTA
- Two-column: "Need a photographer?" heading (left) + "Contact Me" button (right)
- Button: Bootstrap danger red (`#dc3545`), square (no border-radius), large padding

### Footer
- Dark background
- 3-column: About (left), Navigations (center, 2-col links), Follow Me (right, social icons)
- Social: Facebook, Twitter, Instagram, LinkedIn
- Copyright with "Component Dock" link
- Footer MUST link `https://www.componentdock.com/`

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `Navbar.tsx` | Header | Logo text, nav links, social, hamburger |
| `Hero.tsx` | Hero | Parallax bg, heading |
| `Specialties.tsx` | Specialties | 4 items, bg image + text |
| `Testimonials.tsx` | Testimonials | Parallax bg, carousel |
| `Gallery.tsx` | Photography Gallery | 6 cards, gradient overlays |
| `Cta.tsx` | CTA | Heading + red button |
| `Footer.tsx` | Footer | About, Navigations, Social, Copyright |

## Placeholder Assets

- Hero background: `https://picsum.photos/seed/fotolens-hero/1920/1080`
- Specialty images: `https://picsum.photos/seed/fotolens-specialty-<n>/600/400`
- Testimonial bg: `https://picsum.photos/seed/fotolens-testimonial-bg/1920/800`
- Testimonial photo: `https://picsum.photos/seed/fotolens-testimonial/150/150`
- Gallery images: `https://picsum.photos/seed/fotolens-gallery-<n>/600/400`

## Key Differences from Original

- No FontAwesome/icomoon/flaticon — use `lucide-react` for all icons
- No OwlCarousel — pure React carousel
- No MagnificPopup/lightGallery — React lightbox/modal
- No AOS library — CSS animations + intersection observer
- No jQuery/Stellar.js — CSS `background-attachment: fixed` for parallax
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
