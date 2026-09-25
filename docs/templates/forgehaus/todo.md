# Forgehaus — Implementation Notes

## Source
- ColorLib: Create (https://colorlib.com/wp/template/create/)
- Preview: https://preview.colorlib.com/theme/create/

## Section Order (implement in this order)

1. TopBar.tsx — dark bar, phone/email, social icons (lucide-react: Phone, Mail, Facebook, Twitter, Instagram, Linkedin)
2. Navbar.tsx — sticky white header, "Forgehaus." logo with teal dot, nav links with dropdown for About
3. Hero.tsx — full-width background image (picsum.photos), dark overlay, animated typed text, "Watch Video" button
4. Features.tsx — 3-column, numbered (01-03), teal headings, bullet check lists
5. Portfolio.tsx — 3-col grid, 6 items with hover overlay (picsum.photos images)
6. AboutDark.tsx — full-width dark bg, image left, 4 icon features (Strategy, Web Dev, Art Direction, Copywriting)
7. Testimonials.tsx — carousel of quotes with person photos
8. Services.tsx — 3-col, 6 icon items with title+desc+link
9. AboutUs.tsx — two-column, text left with 2 specialties, image right
10. Team.tsx — 3 circular member cards with bios and social links
11. Blog.tsx — 3 post cards with image+title+meta+excerpt
12. Contact.tsx — form (5 fields) + info cards, light bg
13. CtaBanner.tsx — teal full-width "Let's Get Started"
14. Footer.tsx — dark bg, about/features/social/newsletter, Component Dock link

## Design Token Notes

- Primary brand: #32dbc6 (teal/mint) — use as Tailwind theme color
- Dark bg: #000 (top bar, about dark), #333333 (footer)
- Body text: #4d4d4d, muted: #737373
- Light bg: #f4f5f9 (contact section)
- Font: Quicksand (Google Fonts, weights 300-900)
- Buttons: pill-shaped (border-radius: 30px), teal bg, white text
- AOS fade animations on scroll

## Component Notes

- Hero typed text: use a React typewriter library or CSS animation (no jQuery dependency)
- Testimonials: use a simple React carousel (no owl.carousel dependency)
- Portfolio hover: CSS overlay on image hover
- Dropdown: use state-based toggle for About nav item
- All images: picsum.photos/seed/forgehaus-N/W/H (deterministic)
- Footer MUST link https://www.componentdock.com/ as "Component Dock"
- No ColorLib references in any app file

## App Setup

```
apps/forgehaus/
├── public/CNAME          # forgehaus.free.componentdock.com
├── package.json          # @free-react-templates/forgehaus
├── src/
│   ├── main.tsx
│   ├── App.tsx           # Composes all sections
│   ├── index.css          # Tailwind + theme tokens
│   ├── test/setup.ts
│   └── components/
│       ├── TopBar.tsx
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── Portfolio.tsx
│       ├── AboutDark.tsx
│       ├── Testimonials.tsx
│       ├── Services.tsx
│       ├── AboutUs.tsx
│       ├── Team.tsx
│       ├── Blog.tsx
│       ├── Contact.tsx
│       ├── CtaBanner.tsx
│       └── Footer.tsx
└── vite.config.ts
```
