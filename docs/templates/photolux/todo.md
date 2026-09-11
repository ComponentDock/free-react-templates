# PhotoLux — Implementation Notes

Source: ColorLib Credo (https://colorlib.com/wp/template/credo/)
Preview: https://preview.colorlib.com/theme/credo/
New name: photolux

## Section order (must match original 1:1)

1. **Navbar** — centered logo "PhotoLux" with split nav (Home/About/Services | Photography/Blog/Contact). Sticky header. Background changes on scroll (#eff1f3 / #fff).
2. **Hero** — full-width cover section with dark overlay (`rgba(0,0,0,0.4)`), heading "I'm [Name]", subtitle with roles, intro paragraph, "Contact Me" CTA button (pill shape), portrait image floated right. `bg-light` base.
3. **Services** — light gray section (`bg-light`), centered heading "Services", 2×2 grid. Each card: icon + title + description. Icons from lucide-react.
4. **About Me** — white section, two-column layout. Left: image + bio paragraphs. Right: skill labels with progress bars (Photographer 89%, Wedding 75%, Events 94%, Conferences 94%).
5. **Photography (Portfolio)** — white section, centered heading "My Photography", 3-column masonry grid of images. Hover overlay with search icon. Lightbox on click (use a simple modal or lightbox component).
6. **Testimonials** — brand color `#fab95b` background, centered heading "What Clients Are Saying", carousel/slider with blockquotes and citations. Auto-play + dots/arrows.
7. **Blog Posts** — light background, centered heading "Blog Posts", 3-column card layout. Each card: featured image + white content area (title, date, "Read More" link, excerpt).
8. **Contact** — brand color `#fab95b` background, centered heading "Say Hello", form: first name, full name, email, subject, message textarea, "Send Message" button (dark/black).
9. **Footer** — light background. 4 columns: brand + address, Services links, Resources links, Quick Links, social icons (Twitter/Facebook/Instagram/Dribbble/LinkedIn). Copyright line with Component Dock link.

## Design tokens (Tailwind @theme)

```
--color-brand: #fab95b;
--color-brand-dark: #e5a44e;
--color-surface: #eff1f3;
--color-surface-alt: #f7f7f7;
--color-dark: #000000;
--font-primary: "Nunito", sans-serif;
```

## Implementation notes

- **Hero portrait**: use `https://picsum.photos/seed/photolux-portrait/600/800`
- **Portfolio images**: use `https://picsum.photos/seed/photolux-<n>/600/600` (n=1..12)
- **Blog images**: use `https://picsum.photos/seed/photolux-blog-<n>/600/400` (n=1..3)
- **Icons**: lucide-react (Glass, Video, Flame, Magnet for services; Search for portfolio; Twitter/Facebook/Instagram/Dribbble/Linkedin for social)
- **Carousel**: implement with simple state-based slider or CSS-only approach; no extra dependencies needed
- **Progress bars**: animated on scroll into view (use IntersectionObserver)
- **Mobile**: hamburger menu toggle, responsive grid breakpoints match Bootstrap originals
- **Footer**: replace Colorlib attribution with "Made with Component Dock" / link to componentdock.com
