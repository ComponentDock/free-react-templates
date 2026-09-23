# FoundryHaus — Prep Notes

## Source mapping
- ColorLib "Staging" → `foundryhaus`
- Preview: https://preview.colorlib.com/theme/staging/
- Spec: `openspec/specs/template-foundryhaus/spec.md`

## Section order (from live preview DOM)

1. **Header** — absolute, 3-col: logo | nav (Home, Projects, About, Pages dropdown, Blog, Contact) | phone widget
2. **Hero** — full-width image slider (2 slides), heading "Quality is not only our standard.", two CTAs + social icons
3. **About** — 2-col: text left (span "who are we" + h2 + 2 paragraphs + "Learn More" btn) | image right
4. **Projects** — "Our works" / "Latest projects", 4-col slider cards with hover overlay (category + title)
5. **Services** — "Our specialization" / "What we do", 4 cards (icon + h4 + p): Interior Design, Office Design, Home Design, Design Drawing
6. **Counters** — dark bg: 85 Projects Completed, 127 Happy Clients, 36 Awards Received, 74 Cups Of Coffee
7. **Testimonials** — image bg, "Testimonials" / "What your clients say", quote carousel + client avatar carousel (5 items, center-active)
8. **Logo carousel** — 6 partner logos in owl carousel
9. **Team** — "Our Team" / "Meet our team", 3 cards (bg image + name + role + bio + social) + "View All" btn
10. **CTA** — image bg, "Why choose us?" + h2 + "Contact Us" btn
11. **Blog** — "Latest News" / "From our blog", 3 cards (image + category + h4 + "Read more") + "View All" btn right-aligned
12. **Footer** — image bg: top (h2 "Ready To Work With Us?" + newsletter form), below (4-col: about+address+social | Company links | Services links | more links)

## Key design tokens

- Brand: `#dfa667` (warm gold)
- Heading font: Aldrich (Google Fonts)
- Body font: Poppins (Google Fonts, weights 300-900)
- Primary button: transparent bg, white text, corner bracket `::before`/`::after` (2px borders, 4px radius corners), hover fills entire border
- Normal-btn variant: same bracket decoration, `#c4c4c4` borders, `#111111` text
- Section title span: `#dfa667`, 16px, 600 weight, uppercase, letter-spacing 1px
- Section title h2: 42px, `#111111`, uppercase, line-height 50px
- Card shadow: `0 15px 60px rgba(67,69,70,0.1)`
- Client avatar: `border-radius: 50%`
- Spacing: `.spad` = 100px top + 100px bottom

## Fidelity notes for implementer

- Use `picsum.photos/seed/foundryhaus-<n>/<w>/<h>` for all images
- Header must be absolute and overlay hero; add `pt-` padding to hero
- Hero slider can use a simple state-based slide rotation or CSS transition (no need for Owl Carousel)
- Project section slider similarly can be a horizontal scroll or CSS grid
- Testimonial carousel: center-active slide pattern; can use simple state management
- Logo carousel: horizontal auto-scroll or static row
- Counter numbers: static display (no animation required, but can add)
- Footer newsletter form: controlled input + submit handler (can be no-op)
- All social links use `lucide-react` icons instead of Font Awesome
- No ColorLib references in app code — use design-token comments only
