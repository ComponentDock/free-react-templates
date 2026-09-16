# Coachcraft — Implementation Notes

## Source mapping

- **ColorLib source**: "Life Coaching" (slug: `life-coaching`)
- **Preview URL**: https://preview.colorlib.com/#life-coaching (unreachable as of 2026-09-16)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/lifecoaching-free-template.jpg
- **New name**: `coachcraft`

## Section structure (implementation order)

1. **TopBar** — Dark gray bar (#333333), flex row: phone icon + number left, social icons right. Uses lucide-react for phone and social icons. Minimal component.
2. **Navbar** — White sticky nav. Logo text "coachcraft" (LIFE normal, COACH bold via font-weight). Links: Home, About, Services, Stories, Blog, Contact. Search icon (lucide-react magnifier). Active link olive green bg. Mobile: hamburger → slide-in menu.
3. **HeroSlider** — Full-viewport hero. Background image (picsum.photos/seed/coachcraft-hero-1/1920/1080) with dark gradient overlay via `bg-gradient-to-b from-black/60 to-transparent`. Centered content: subtitle "IMPROVING THE WORLD" (olive green uppercase tracking-widest), heading h1 white text, outlined button "CONNECT WITH US". Carousel dots at bottom.
4. **InfoBar** — 3-column grid below hero. Column 1: phone icon + number + address. Column 2: clock icon + opening hours. Column 3: "MAKE AN APPOINTMENT" solid olive green button. Light background.
5. **Services** — White section. Centered heading + olive green subtitle. 4-column grid (2 on mobile). Each card: teal circle (#8dd1d1) with lucide-react icon, bold title, paragraph. Cards: Career & Business, Mental & Physical Care, People & Relationships, Life coaching.
6. **Statistics** — Background image or solid color. 3-4 counter items with animated number (use intersection observer + counting animation). Labels below each number.
7. **About** — Two-column layout: image left, text right. Heading + paragraphs + possibly a CTA button.
8. **Pricing** — 3 pricing cards in a row. Each: plan name, price, feature list with check icons, CTA button. One card visually highlighted (scale/shadow/border).
9. **Stories** — Blog/testimonial section. 3-column card grid with image, title, excerpt, date.
10. **Contact** — Two-column: left = form (name, email, subject, message textarea, submit button), right = Google Maps iframe or placeholder.
11. **Footer** — Dark bg (#333333). Multi-column: about text, quick links, contact info. Social icons. Bottom bar: copyright + "Component Dock" link.

## Design fidelity notes

- **Olive green accent**: Use `#a3b627` as the brand color in `@theme` and reference via Tailwind classes (e.g., `bg-brand`, `text-brand`).
- **Teal service icons**: `#8dd1d1` for circular icon backgrounds. Icons in white inside.
- **Fonts**: Open Sans from Google Fonts. Load via `<link>` in index.html.
- **Button style**: Rounded (4px radius), olive green bg, white text, hover darkens slightly.
- **Hero overlay**: Use CSS gradient overlay, not a separate div, to keep text selectable.
- **No ColorLib references**: All provenance lives only in spec, TEMPLATES.md, and PR. Replace any provenance comments with design-token notes.
- **Placeholder images**: Use `https://picsum.photos/seed/coachcraft-<n>/<w>/<h>` for all images.
- **Footer**: Must include Component Dock link (https://www.componentdock.com/).

## Testing strategy

- Each component gets its own `*.test.tsx` colocated file.
- Query by role/text (getByRole, getByText).
- Test responsive behavior: mobile menu toggle, grid column stacking.
- Test hero carousel dot interaction.
- Test form validation (if zod/react-hook-form used).
- Test statistics animation triggers on scroll intersection.
- Target: 100% lines/functions/branches/statements coverage.
