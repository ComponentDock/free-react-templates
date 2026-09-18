# Zing — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Zeta" — https://colorlib.com/wp/template/zeta/
- **Preview:** https://preview.colorlib.com/theme/zeta/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/zeta-free-template.jpg
- **Preview fetched:** Yes (24,713 bytes HTML, 23,319 bytes main CSS)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Navbar** — sticky, logo left, nav right, hamburger → fullscreen overlay
2. **Hero Slider** — 3-slide parallax carousel with animated text + Discover CTA
3. **Features** — 3-col grid, icon + heading + description
4. **About** — parallax bg, "About Our Project" heading, 4 skill progress bars
5. **Testimonials** — carousel, 3 items (photo, name, title, quote)
6. **Services** — parallax bg, 3-col grid, icon + heading + description
7. **Clients** — logo carousel
8. **Contact** — parallax bg, "Let's Work Together" heading + CTA button
9. **Footer** — copyright + 6 social icon links

## Fidelity Notes

### Navbar
- Full-screen overlay menu on hamburger click (dark bg, centered nav + social icons)
- Social icons in overlay: Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn
- Use `lucide-react` icons for social (or inline SVGs) since FontAwesome is not reused

### Hero Slider
- Replace OwlCarousel with a React carousel (or simple CSS/JS slider)
- 3 slides, each with the same parallax background image but different sub-heading
- Custom dot indicators (small circles, active state)
- Nav arrows left/right
- Content fades/slides in on active slide

### Features
- 3 equal columns, centered content
- White background, clean spacing
- Use placeholder icons from `lucide-react`

### About (Skills)
- Parallax background image with dark overlay
- 4 skill bars: Management, Design, Projects, Inspiration
- Progress bars use brand orange (`#ff4200`) as fill
- Use percentage-based widths for progress bars

### Testimonials
- Light background (`rgba(242,244,249,...)`)
- Section heading with decorative letter span ("Testimonials" + styled "Z")
- Circular user photo (use `picsum.photos/seed/zing-testimonial-<n>/...`)
- Quote mark character, name, title, paragraph

### Services
- Parallax background with dark overlay (same pattern as About)
- 3-column grid, white text
- 3 items: smart structure, elements, bold colors

### Clients
- Simple horizontal logo carousel
- Use placeholder logos or company name text

### Contact
- Parallax background with dark overlay
- "Let's Work Together" heading with decorative "Z" span
- Description paragraph
- "Contact" button (brand orange, square, no border-radius)
- Note: original has NO form — just a CTA button linking to contact page

### Footer
- Dark background (`#171717`)
- Copyright text left-aligned
- 6 social icon links right-aligned
- Footer MUST link `https://www.componentdock.com/` (replaces Colorlib attribution)

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `Navbar.tsx` | Header | Hamburger + fullscreen overlay |
| `Hero.tsx` | Hero Slider | 3-slide carousel, parallax bg |
| `Features.tsx` | Features | 3-column grid |
| `About.tsx` | About + Skills | Parallax + progress bars |
| `Testimonials.tsx` | Testimonials | Carousel with testimonials |
| `Services.tsx` | Services | 3-column grid on parallax |
| `Clients.tsx` | Clients | Logo carousel |
| `Contact.tsx` | Contact | CTA section, no form |
| `Footer.tsx` | Footer | Copyright + social links |

## Placeholder Assets

- Hero images: `https://picsum.photos/seed/zing-hero/1920/1080`
- About background: `https://picsum.photos/seed/zing-about/1920/800`
- Services background: `https://picsum.photos/seed/zing-services/1920/800`
- Contact background: `https://picsum.photos/seed/zing-contact/1920/800`
- Testimonial avatars: `https://picsum.photos/seed/zing-testimonial-<n>/150/150`
- Feature/service icons: `lucide-react` icons

## Key Differences from Original

- No FontAwesome — use `lucide-react` for all icons
- No jQuery/OwlCarousel — pure React carousel implementation
- No parallax plugin — CSS `background-attachment: fixed` or a lightweight React parallax hook
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
