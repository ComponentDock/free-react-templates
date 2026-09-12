# Impulse — Prep Notes

Source: ColorLib Innova (https://preview.colorlib.com/theme/innova/)
New name: Impulse (apps/impulse)

## Section order (top → bottom)

1. **Navbar** — transparent over hero (desktop), black bg on mobile, brand in Abril Fatface uppercase, nav links: Home, About, Services, Projects, Contact
2. **Hero** — full-viewport parallax bg image, dark overlay (0.3 opacity), centered large heading in white (Abril Fatface 7rem desktop / 3rem mobile)
3. **Services** — 4-column grid on desktop (stacks on mobile), each card: purple icon (3rem), h3 title, short description. Items: Email Design, Web Design, Mobile Design, Research
4. **Portfolio ("Selected Work")** — 2×2 grid, images with 10px white border, hover overlay reveals project name + category in centered white text
5. **Testimonials ("Happy Client")** — light gray bg (#f8f9fa), carousel with avatar (circle), name, company, blockquote. Dots nav below
6. **CTA ("Get Started")** — brand purple bg (#6f42c1), centered white heading + subtitle, outline-white button "Get In Touch!"
7. **Footer** — 3 columns: About Us (text), Navigation (links), Social icons (Twitter, Facebook, LinkedIn, Instagram). Component Dock link

## Design token notes

- Brand purple: #6f42c1 — use as Tailwind custom theme color
- Abril Fatface for headings, Roboto Mono for body (Google Fonts)
- Buttons: square (border-radius 0), uppercase, letter-spacing 0.2em, font-weight 900
- Hero overlay: black at 0.3 opacity
- Portfolio hover: black overlay at 0.5 opacity fading in on hover

## Fidelity pitfalls

- Hero heading is VERY large (7rem desktop). Don't shrink it to look "normal"
- Portfolio images use white border (10px solid white), not borderless
- Navbar is transparent overlay on hero (absolute positioned), NOT a static dark bar
- Testimonials use a carousel/slider — use a simple React carousel or CSS scroll-snap
- CTA section is full-width with brand purple bg, no container padding on sides
- Footer social icons: circular with border, hover inverts to white bg + black text

## Implementation notes

- Copy structure from simplest existing app (check apps/ for smallest package)
- Use picsum.photos/seed/impulse-1 through impulse-8 for placeholder images
- Lucide-react icons for service section (Mail, Monitor, Smartphone, Search)
- Hero bg: use a picsum seed image or solid gradient fallback
