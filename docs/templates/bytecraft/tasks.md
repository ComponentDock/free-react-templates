# ByteCraft — Implementation Tasks

Source: ColorLib "Datarc" — https://colorlib.com/wp/template/datarc/
Preview: https://preview.colorlib.com/theme/datarc/
New name: bytecraft

## Structure order (top to bottom, matching the source)

1. **Header** — Sticky nav bar with logo, nav links (Home, Services,
   Portfolio, Team, Blog, Contact), search icon, social icons
2. **Hero Banner** — Fullscreen dark overlay, white text headline +
   subheadline, green CTA button
3. **About** — Gray bg, centered title + description, 3 service cards
   (icon + title + desc + Explore link)
4. **Services** — Dark `#222222` bg, "Why Choose Us", 4 feature cards
   with green icons
5. **Portfolio** — "Remarkable Works", filter tabs (All, Categories,
   Branding, Image Manipulation, Creative Work, Web Design), image grid
6. **Team** — "Creative People", 4 member cards (circular photo, name,
   role, social icons)
7. **Studio/Parallax** — Purple-blue gradient overlay, white text +
   green CTA
8. **Pricing** — 3 pricing tables (Standard, Business, Premium),
   dark `#4a4fad` header, green CTA
9. **Instagram Feed** — Row of square placeholder images
10. **Blog** — "Latest From Blog", 4 article cards (image, date, author,
    title, excerpt, Details link)
11. **Contact** — Gray bg, address + phone info, contact form (name,
    email, subject, message, send)
12. **CTA Bar** — Purple-blue gradient, "Not yet convinced" + green CTA
13. **Footer** — 3 columns (About, Navigation, Newsletter) + footer
    bottom with copyright and social icons + Component Dock link

## Design notes

### Tokens to carry into Tailwind @theme

- Brand green: `#00ff8c` — buttons, links, hover states, icon strokes
- Dark bg: `#222222` — services section background, primary text
- Gray bg: `#f9f9ff` — about, team, blog, contact, instagram sections
- Muted text: `#777777`
- Purple gradient start: `rgba(60, 64, 143, 0.95)` (#3c3f8f)
- Purple gradient end: `rgba(91, 97, 207, 0.95)` (#5b61cf)
- Pricing header: `#4a4fad`
- Button radius: `20px` (pill shape)
- Font: Poppins 300/500/600

### Component breakdown (suggested)

- `src/components/Navbar.tsx` — sticky header with nav, search, social
- `src/components/Hero.tsx` — fullscreen banner with overlay
- `src/components/About.tsx` — gray bg section with service cards
- `src/components/Services.tsx` — dark bg section with feature grid
- `src/components/Portfolio.tsx` — filterable gallery with tabs
- `src/components/Team.tsx` — member grid with circular photos
- `src/components/Studio.tsx` — parallax gradient section
- `src/components/Pricing.tsx` — 3-column pricing tables
- `src/components/InstagramFeed.tsx` — image row strip
- `src/components/Blog.tsx` — article card grid
- `src/components/Contact.tsx` — form + contact info
- `src/components/CtaBar.tsx` — gradient CTA section
- `src/components/Footer.tsx` — multi-column footer

### Fidelity notes

- Hero uses `overlay overlay-bg` on a dark background image; use a
  dark solid color or gradient instead of shipping an image asset
- Portfolio filter is client-side show/hide (not a real gallery plugin)
- Team member photos are circular (`border-radius: 50%`); use picsum
  placeholders
- Instagram feed uses square images in a flex row; use picsum
- Contact form is mock-only (no backend)
- All sections use Bootstrap-like grid via Tailwind responsive utilities
- Buttons are transparent with green border + green hover fill
- Footer newsletter input is decorative (no real subscription)
