# Convene — Implementation Todo

Source: ColorLib Confe → https://preview.colorlib.com/theme/confe/

## Tasks

1. [ ] Scaffold `apps/convene/` from an existing simple app (copy + rename package)
2. [ ] Set up `public/CNAME` with `convene.free.componentdock.com`
3. [ ] Set `homepage` in `package.json`
4. [ ] Write tests for Navbar component (100% coverage)
5. [ ] Implement Navbar — sticky, white bg, logo + nav links + mobile hamburger
6. [ ] Write tests for Hero component
7. [ ] Implement Hero — full-width bg image, dark overlay, heading, date, CTAs
8. [ ] Write tests for About section
9. [ ] Implement About — heading, countdown, description, CTA button
10. [ ] Write tests for ImageGallery component
11. [ ] Implement ImageGallery — two side-by-side full-height images
12. [ ] Write tests for Speakers section
13. [ ] Implement Speakers — 3-col grid, 6 cards with portrait/name/role
14. [ ] Write tests for WhyUs section
15. [ ] Implement WhyUs — 3 feature cards with lucide icons, titles, descriptions
16. [ ] Write tests for Sponsors section
17. [ ] Implement Sponsors — logo grid, grayscale, CTA button
18. [ ] Write tests for ConferenceEvents section
19. [ ] Implement Events — 3-col card grid with images/titles/descriptions
20. [ ] Write tests for Footer component
21. [ ] Implement Footer — bg image overlay, two columns, social icons, Component Dock link
22. [ ] Compose all sections in App.tsx
23. [ ] Add Tailwind theme tokens (`#f23a2e` primary, font families)
24. [ ] Run `npm run verify:app convene` — typecheck + lint + tests + build
25. [ ] Run `npm install` at root to register workspace in lockfile

## Design Notes

### Section Order (must match 1:1)
1. Navbar (sticky, white)
2. Hero (full-width bg image, dark overlay, centered)
3. About The Conference (centered, countdown timer)
4. Image Gallery — pair 1 (two side-by-side)
5. Speakers (3-col grid, 6 cards)
6. Image Gallery — pair 2 (two side-by-side)
7. Why Us? (3 feature cards, light gray bg)
8. Sponsors (logo grid, grayscale)
9. Conference Events (3-col card grid)
10. Footer (bg image + overlay, two columns)

### Color Palette
- Primary/accent: `#f23a2e` (red) — buttons, links, hover states
- Text: `#000000`
- Backgrounds: `#ffffff` (white), `#f8f9fa` (light gray)
- Overlay on hero/footer: semi-transparent dark over background image

### Typography
- Body: "Work Sans" (Google Fonts), weights 300/400/700
- Display/headings: "Amatic SC" (Google Fonts), weights 400/700
- Fallback stacks per CSS standard

### Buttons
- Primary: `#f23a2e` bg, white text, rounded corners
- Pill variant: fully rounded (`border-radius: 50px`)
- Text link: white text on dark overlay backgrounds

### Placeholder Images
- Hero: `https://picsum.photos/seed/convene-hero/1920/1080`
- Gallery images: `https://picsum.photos/seed/convene-gal-1/800/600` etc.
- Speaker portraits: `https://picsum.photos/seed/convene-speaker-N/400/400`
- Event cards: `https://picsum.photos/seed/convene-event-N/600/400`
- Footer bg: reuse hero or `https://picsum.photos/seed/convene-footer/1920/600`
- Sponsor logos: gray placeholder rectangles or text-based

### Icons (lucide-react equivalents)
- Speaker icon → `Megaphone`
- Chat icon → `MessageCircle`
- Paper plane icon → `Send`
- Social: `Facebook`, `Twitter`/`X`, `Instagram`
