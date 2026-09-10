# Gearshift — Design Notes

Source: ColorLib "Automotive" (https://preview.colorlib.com/theme/automotive/)

## Section Order

1. HeaderTop — dark bar, phone/hours/map/social
2. Navbar — white, logo + nav links + search/cart icons
3. Hero — full-width bg image, dark overlay, heading + CTA button
4. Services — "What We Do?" heading, 3-col grid (icon-text blocks + image blocks alternating)
5. ChooseUs — split layout: left image, right text with features + primary CTA
6. Products — product card grid
7. Counter — dark bg, animated stat counters
8. Latest — blog card grid (image, date, title, excerpt)
9. Testimonial — carousel/slider with quote, name, role, avatar
10. Footer — dark bg, 4 widgets (about, links, news, address), copyright bar with social + ComponentDock link

## Design Token Notes

- Primary brand: #5F67FF (blue-violet) — used on .primary-btn background, active nav underline, icon accents
- Secondary: #2C85AE (teal) — service icons
- Accent: #3EAFF0 (light blue) — additional icon color
- Dark surfaces: #25282C (top bar, footer), #353535 (counter section)
- Font: "Public Sans" via Google Fonts — geometric sans-serif
- Buttons: border-radius 2px, padding 14px 25px 12px, bold 700 weight
- Section vertical padding: ~70px (spad class)
- Light alternating bg: #f7f7f7

## Fidelity Notes

- Hero uses a real automotive photo (oil pouring into engine). Use picsum.photos/seed/gearshift-hero/1920/900 with a dark overlay.
- Service icons are thin-line automotive icons. Use lucide-react equivalents (Wrench, Gauge, Droplets, Zap, Car, Settings).
- Testimonial carousel — use CSS-based slider or simple React carousel (no external dep needed).
- Counter section numbers — animate on scroll into view (use IntersectionObserver + requestAnimationFrame).
- Footer has 4 widget columns: about + button, quick links, recent news (3 items), address + social icons.
- Logo: gear icon (lucide Settings) + "Gearshift" text in bold.
