# LedgerPeak — Implementation Tasks & Design Notes

**Source**: ColorLib Book Keeping (`book-keeping` / `bookkeeping`)
**Preview**: https://preview.colorlib.com/theme/bookkeeping/
**Spec**: openspec/specs/template-ledgerpeak/spec.md

---

## Section Order (top → bottom, matching original)

1. **Top Utility Bar** — light bg, question + phone + email
2. **Navbar** — sticky, logo (blue circle + $ icon), nav links (Home, About, Services w/ dropdown, Blog, Contact), social icons
3. **Hero Carousel** — full-viewport bg image, dark overlay, headline + subtitle + CTA; 2 slides (can simplify to single static hero)
4. **About Us** — two-column (image left, text right), caption + heading with underline + body + two-col arrow lists
5. **Statistics** — 4-column row: 32,594 Clients · 25 Years · 1,029 Employees · 10,200 Coffees
6. **Services** — light bg, 6 cards (3×2): icon wrapper + title + desc + "Learn More" CTA
7. **CTA Banner** — full-width bg image, centered headline + button
8. **Testimonials** — dark overlay on bg image, owl carousel of person cards (name, role, quote)
9. **News/Blog** — 3-column blog cards with image + date badge + title + author + excerpt
10. **Newsletter** — bg image + navy overlay, "Subscribe" heading + email input + send button
11. **Footer** — dark navy `#183661`, 4 columns (logo+desc, Solutions, Services, Contact), copyright + Component Dock link

## Component Mapping

| Section | Component File | Notes |
|---------|---------------|-------|
| TopBar | `TopBar.tsx` | Utility bar, `bg-light`, small text, icons |
| Navbar | `Navbar.tsx` | Sticky, flex layout, social icons as circles |
| Hero | `Hero.tsx` | Background image, overlay, centered text, carousel optional |
| About | `About.tsx` | Two-column grid, caption, heading with underline div, arrow lists |
| Stats | `Stats.tsx` | 4-column row, large bold numbers, small labels |
| Services | `Services.tsx` | Light bg, 6 cards, icon wrapper (pentagon/house shape via SVG clip-path or border-radius) |
| CTABanner | `CTABanner.tsx` | Background image, overlay, centered text + button |
| Testimonials | `Testimonials.tsx` | Dark overlay bg, carousel of testimonial cards |
| News | `News.tsx` | 3 blog cards, image with date badge overlay |
| Newsletter | `Newsletter.tsx` | Bg image + navy overlay, horizontal form |
| Footer | `Footer.tsx` | Dark navy, 4 columns, copyright + Component Dock link |

## Fidelity Notes

- **Font**: Original uses "Muli" (renamed to "Mulish" on Google Fonts). Use Mulish via Google Fonts link in `index.html`.
- **Brand blue**: `#5577B4` — use as `--color-brand` in Tailwind `@theme`.
- **Dark navy**: `#183661` — use as `--color-navy` in Tailwind `@theme`.
- **Button shape**: 4px border-radius, uppercase, 12px font, 14px 20px padding. Bootstrap-like `.btn-primary` with brand blue.
- **Section underline**: `title-with-line` uses `::after` pseudo-element — 30px wide, 2px tall, brand blue, left-aligned under heading.
- **Icon wrappers**: Pentagonal/house shape in original (CSS clip-path on `.icon-wrapper`). Simplify to rounded squares or use a CSS clip-path in Tailwind.
- **Arrow lists**: `ul-arrow` uses icomoon icon `→` in brand blue. Replace with lucide-react `ArrowRight` icon.
- **Social icons**: Solid circles (40×40, brand blue, 50% border-radius). Use lucide-react icons.
- **Hero carousel**: Can simplify to single hero slide (static bg image) since carousel JS is jQuery-based. Two slides in original.
- **Testimonials carousel**: Original uses owl-carousel. Implement as simple CSS carousel or auto-scrolling carousel.
- **News date badge**: Absolute-positioned badge at bottom-left of image thumbnail, with day + month stacked, white text on brand blue bg.
- **Newsletter overlay**: `#183661` at 0.7 opacity over background image.
- **Placeholder images**: Use `picsum.photos/seed/ledgerpeak-<n>/...` for all images.
- **Footer attribution**: Replace "Colorlib" with "Component Dock" linking to `https://www.componentdock.com/`.
