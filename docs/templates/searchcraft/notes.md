# SearchCraft — Implementation Notes

## Source

- ColorLib slug: `seo`
- Preview: https://preview.colorlib.com/theme/seo/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/seo-free-seo-website-template.jpg

## Section Order (implement bottom-up or top-down, match original)

1. Navbar — absolute positioned, transparent on hero, solid on scroll
2. Banner/Hero — dark gradient overlay, 2-col: text left, image right
3. Services — 3-col grid, icons from lucide-react (replace Linearicons)
4. About — 2-col: left = donut chart (use placeholder or simple SVG), right = text + CTA
5. Related — carousel: 2+ slides with text + image, use simple CSS scroll or framer-motion
6. Pricing — 3 cards, gradient buttons on hover, feature list
7. Team — 4 cards, social overlay on hover
8. Testimonials — dark overlay bg, carousel, avatar + quote
9. Brand Logos — 5 grayscale logos in a flex row
10. Contact — form with name/email/subject/message + send button
11. Footer — 3-col (links, newsletter, instagram grid) + copyright + social icons

## Design Token Mapping (Tailwind)

```css
/* index.css @theme */
--color-brand: #f54349;
--color-brand-start: #f45622;
--color-brand-end: #f53e54;
--color-accent: #4cd3e3;
--color-bg-alt: #f9f9ff;
--color-text-body: #777777;
--color-text-heading: #222222;
```

Font: Google Fonts Poppins (weights 300,400,500,600,700) via `<link>` in index.html.
Buttons: `.primary-btn` = gradient bg, square corners (border-radius: 0).
Cards: slight border-radius (3px), white bg.
Section gap: consistent vertical padding via `section-gap` class (~80px).

## Component Plan

- `Navbar.tsx` — top info bar + main nav with dropdown
- `Hero.tsx` — 2-column banner with overlay
- `Services.tsx` — 3 service cards
- `About.tsx` — chart placeholder + text
- `Related.tsx` — carousel slider
- `Pricing.tsx` — 3 pricing cards
- `Team.tsx` — 4 team member cards with hover overlay
- `Testimonials.tsx` — carousel with dark overlay
- `BrandLogos.tsx` — 5 grayscale logos
- `Contact.tsx` — form with validation
- `Footer.tsx` — 3-column footer + copyright + social

## Fidelity Notes

- Hero gradient: `linear-gradient(90deg, #f45622 0%, #f53e54 100%)` — use Tailwind gradient or CSS
- Primary button: square (border-radius: 0), gradient bg, white text, arrow icon on right
- Donut chart in About: use a simple SVG ring or placeholder image
- Team hover overlay: semi-transparent dark background with social icons centered
- Testimonials: dark overlay bg on entire section (same gradient as hero)
- Instagram feed in footer: 3x3 grid of thumbnail placeholders
- Replace Linearicons with lucide-react equivalents
