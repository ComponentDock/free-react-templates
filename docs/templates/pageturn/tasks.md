# PageTurn — Implementation Todo

Recreation of ColorLib **Author** template.
Source: https://preview.colorlib.com/theme/author/

## Section Build Order

1. [ ] `Navbar.tsx` — Dark sticky nav, brand + 7 anchor links, mobile hamburger
2. [ ] `Hero.tsx` — Full-height split: left text + CTA, right illustration (picsum or SVG placeholder)
3. [ ] `Partners.tsx` — 5-column row of partner logo placeholders
4. [ ] `AboutBook.tsx` — 2-column: left bg image, right heading + 3 feature sub-headings
5. [ ] `StatsCounter.tsx` — Full-width bg image overlay, 4 counter cards (animate on scroll optional)
6. [ ] `Chapter.tsx` — Sidebar TOC (8 links) + scrollable page content area
7. [ ] `Services.tsx` — 3-column icon cards on bg-light
8. [ ] `Testimonials.tsx` — Dark bg image, heading, carousel of quote cards
9. [ ] `MyBooks.tsx` — 2×4 grid of book cover cards with overlay text
10. [ ] `AuthorBio.tsx` — 2-column: left portrait, right info list + CTA
11. [ ] `Contact.tsx` — 4 info cards (green circles) + form + map placeholder
12. [ ] `Footer.tsx` — 4-column footer (black bg) + copyright + Component Dock link

## Design Fidelity Notes

- **Brand accent:** `#17b978` (green) — used ONLY in subheading text and contact icon circles. NOT as a general-purpose color.
- **Hero:** dark semi-transparent overlay over full-width background image. Left side text with uppercase subheading. Right side book-lover illustration.
- **Stats section:** background image (dark) with 4 bg-light counter cards. Numbers in `#263b5e` navy.
- **Chapter:** sidebar navigation with links, main content area with page cards.
- **Services:** 3 equal-width cards, bg-light, each with a flaticon icon + heading + description. Use `lucide-react` icons instead of flaticon.
- **Testimonials:** dark background image with overlay. White text. Quote icon. Avatar circles. Carousel behavior (use CSS or simple state).
- **My Books:** 4-column grid of book cover images with dark overlay at bottom, title + genre tag in white.
- **Contact icons:** 100px circles, `#17b978` background, white icon inside. Font Awesome → `lucide-react`.
- **Footer:** black background, 4 columns. Social links as circular icons (rgba white background). Copyright line.
- **No ColorLib references** in any component code.

## Component Notes

- Use `cn()` from `packages/ui` for all class composition
- Placeholder images: `https://picsum.photos/seed/pageturn-<n>/<w>/<h>`
- Icons: `lucide-react` (replace Font Awesome + flaticon)
- Fonts: system fonts (already default in Tailwind)
- Footer must link `https://www.componentdock.com/`
- Package name: `@free-react-templates/pageturn`
