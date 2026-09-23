# Plead — Implementation Task Outline

**Source**: ColorLib Justice (https://colorlib.com/wp/template/justice/)
**Preview**: https://preview.colorlib.com/theme/justice/
**Category**: Lawyer
**Design tokens**: Rubik font, #b49c73 tan/gold accent, #37373f dark bg, 30px pill buttons

## Section order (1:1 with original)

1. **Navbar** — dark sticky, "Plead." brand (dot in accent), 6 nav links, mobile hamburger
2. **Hero** — bg image with dark overlay, "We Fight For Your Right" heading, "Free Consultation" CTA
3. **Practice Areas** — 2-col: left (heading + desc + Learn More btn), right (4 items with icons)
4. **Statistics** — "50 Years of Experience" heading, 4 counters (90+ Awards, 3K+ Cases, 2K+ Clients, 200+ Attorneys)
5. **Testimonials** — dark section, "Happy Clients" heading, carousel of 5 cards with quote + author
6. **Expertise** — "More Expertise" heading, 4 service cards in grid with icons + Learn More links
7. **CTA Banner** — bg image overlay, "Call us Now" heading, "Call Us Now" button
8. **Footer** — 4-col (Home, Practice Area, Services, Contact+social), copyright with Component Dock link

## Fidelity notes

- Use placeholder images: `https://picsum.photos/seed/plead-hero/1920/1080` for hero/CTA backgrounds, `https://picsum.photos/seed/plead-person-N/150/150` for testimonial avatars
- Icons: use `lucide-react` equivalents (Briefcase for Banking, Users for Corporate, Target for Criminal, etc.)
- Testimonials: use a simple React carousel (useState + index) instead of owl-carousel
- Statistics: no animated counter needed — just display the numbers statically
- Button shape: fully rounded pill (border-radius: 30px / rounded-full)
- The "practice areas" section has dark bg (#000 or #37373f) with white text — verify via CSS
- The hero/CTA share the same background image (`hero_bg.jpg`) — use one consistent placeholder
- Footer copyright must link to `https://www.componentdock.com/` (branded as "Component Dock")
- No ColorLib references anywhere in the app code
