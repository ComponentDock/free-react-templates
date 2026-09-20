# ConveneWell — Implementation Todo

Source: ColorLib Eventcon → https://preview.colorlib.com/theme/eventcon/

## Tasks

1. [ ] Scaffold `apps/convenewell/` from an existing simple app (copy + rename package)
2. [ ] Set up `public/CNAME` with `convenewell.free.componentdock.com`
3. [ ] Set `homepage` in `package.json`
4. [ ] Write tests for Navbar component (100% coverage)
5. [ ] Implement Navbar — transparent over hero, logo + nav + "Buy Tickets" button, sticky
6. [ ] Write tests for Hero component
7. [ ] Implement Hero — full-width bg image, gradient overlay, date, heading, location
8. [ ] Write tests for Performers section
9. [ ] Implement Performers — black bg, 2-col grid, 4 cards with portrait/name/role
10. [ ] Write tests for AboutProgram section
11. [ ] Implement AboutProgram — black bg, centered title, 2-col: image + text/CTA
12. [ ] Write tests for ProgramDetails section
13. [ ] Implement ProgramDetails — overlay2 bg, vertical timeline, alternating cards, teal dots
14. [ ] Write tests for MapSection component
15. [ ] Implement MapSection — map placeholder + location info overlay card
16. [ ] Write tests for Sponsors section
17. [ ] Implement Sponsors — black bg, logo carousel
18. [ ] Write tests for Footer component
19. [ ] Implement Footer — black bg, date/heading/CTA, copyright, Component Dock link
20. [ ] Compose all sections in App.tsx
21. [ ] Add Tailwind theme tokens (`#FF4533` primary, `#001D38` headings, `#AAB1B7` body, `#1EC6B6` teal, Anton/Muli fonts)
22. [ ] Run `npm run verify:app convenewell` — typecheck + lint + tests + build
23. [ ] Run `npm install` at root to register workspace in lockfile

## Design Notes

### Section Order (must match 1:1)
1. Navbar (transparent, sticky, logo + nav + buy tickets button)
2. Hero (full-width bg image, gradient overlay, centered text, 900px height)
3. Performers (black bg, 2-col grid, 4 performer cards)
4. About Program (black bg, centered title, 2-col layout, CTA)
5. Program Details (overlay2 gradient, vertical timeline, alternating cards)
6. Map (full-width map + location info overlay)
7. Sponsors (black bg, carousel logo strip)
8. Footer (black bg, CTA, copyright, Component Dock)

### Color Palette
- Primary/accent: `#FF4533` (red-orange) — buttons, section h4 titles, footer h4, timeline is NOT this
- Headings: `#001D38` (dark navy) on light, `#FFFFFF` (white) on dark bg
- Body text: `#AAB1B7` (light gray on dark backgrounds)
- Link text: `#1F1F1F` (near-black on light)
- Section backgrounds: `#000000` (solid black) for performer, about, sponsors, footer
- Timeline dots: `#1EC6B6` (teal)
- Timeline line: `rgba(255,255,255,0.2)` (white at 20% opacity)
- Overlay gradients: rgba(0,0,0,0.3)→black (hero), black→rgba(0,0,0,0.8) (program)

### Typography
- Body: "Muli" (Google Fonts), weights 400/500/600
- Headings: "Anton" (Google Fonts), weight 400 — all h1-h5 use Anton
- Special/decorative: "Monoton" (Google Fonts) — imported, may be used sparingly
- Section title h3 on dark bg: 80px desktop, 30px mobile, white, Anton
- Section title h4: 30px, `#FF4533`, Anton

### Buttons
- Primary: `#FF4533` bg, white text, square corners (border-radius 0), Anton font, 14px/35px padding
- Hover: transparent bg, `#FF4533` text, `#FF4533` border
- Header "Buy Tickets": same red bg, Anton font, 12px/46px padding, square
- No rounded corners anywhere — the original uses entirely square buttons

### Placeholder Images
- Hero banner: `https://picsum.photos/seed/convenewell-hero/1920/900`
- Performer portraits: `https://picsum.photos/seed/convenewell-performer-N/400/400`
- About image: `https://picsum.photos/seed/convenewell-about/700/500`
- Program detail images: `https://picsum.photos/seed/convenewell-program-N/300/300`
- Sponsor logos: simple gray rectangles or text placeholders
- Footer bg: reuse hero or `https://picsum.photos/seed/convenewell-footer/1920/600`

### Icons (lucide-react equivalents)
- Nav dropdown: `ChevronDown`
- Social links: `Facebook`, `Twitter`/`X`, `Instagram`
- Map marker: `MapPin`
- Phone: `Phone`
- Email: `Mail`
