# Festivora — Implementation Todo

Source: ColorLib Evento → https://preview.colorlib.com/theme/evento/

## Tasks

1. [ ] Scaffold `apps/festivora/` from an existing simple app (copy + rename package)
2. [ ] Set up `public/CNAME` with `festivora.free.componentdock.com`
3. [ ] Set `homepage` in `package.json`
4. [ ] Write tests for Navbar component (100% coverage)
5. [ ] Implement Navbar — fixed-top, dark bg, logo + nav links + search icon, hamburger mobile
6. [ ] Write tests for HeroSlider component
7. [ ] Implement HeroSlider — full-viewport carousel, 3 slides, dot nav, overlay, CTA button
8. [ ] Write tests for EventInfo component
9. [ ] Implement EventInfo — 4-column icon cards (date, location, speakers, tickets)
10. [ ] Write tests for Countdown component
11. [ ] Implement Countdown — bg image overlay, heading, 4 red countdown boxes
12. [ ] Write tests for AboutEvent component
13. [ ] Implement AboutEvent — centered title with red accent, 2-col description
14. [ ] Write tests for EventFeatures component
15. [ ] Implement EventFeatures — 4 feature cards with icons, titles, descriptions, links
16. [ ] Write tests for Speakers component
17. [ ] Implement Speakers — 4-col grid, 8 cards with hover-reveal info
18. [ ] Write tests for PricingTable component
19. [ ] Implement PricingTable — 3 pricing cards, "recommended" badge, feature lists
20. [ ] Write tests for EventCalendar component
21. [ ] Implement EventCalendar — table layout, 3 event rows with images/dates/buttons
22. [ ] Write tests for Partners component
23. [ ] Implement Partners — logo carousel, opacity 0.3 to 1 on hover
24. [ ] Write tests for GetTickets component
25. [ ] Implement GetTickets — bg image overlay, heading, CTA button
26. [ ] Write tests for Footer component
27. [ ] Implement Footer — dark bg, 3-col (logo+social, Instagram grid, newsletter), copyright
28. [ ] Compose all sections in App.tsx
29. [ ] Add Tailwind theme tokens (`#f50136` primary, `#18181c` dark, Montserrat font)
30. [ ] Run `npm run verify:app festivora` — typecheck + lint + tests + build
31. [ ] Run `npm install` at root to register workspace in lockfile

## Design Notes

### Section Order (must match 1:1)
1. Navbar (fixed-top, dark, logo + nav + search)
2. Hero Slider (full-viewport, 3 slides, dots, overlay)
3. Event Info (4-column icon cards)
4. Countdown (bg image overlay, 4 red timer boxes)
5. About the Event (title with red accent, 2-col text)
6. Event Features (4 cards: speakers, marathon, broadcast, early bird)
7. Speakers (4-col grid, 8 cards, hover reveal)
8. Pricing Table (3 cards, recommended badge)
9. Event Calendar (table rows with images/dates/buttons)
10. Partners (logo carousel on gray bg)
11. Get Tickets (bg image overlay, CTA)
12. Footer (dark, 3-col: social, Instagram, newsletter)
13. Copyright Footer (very dark, copyright + nav links)

### Color Palette
- Primary/accent: `#f50136` (vivid red) — buttons, section accent lines, social hover
- Headings: `#18181c` (very dark charcoal)
- Body text: `#838383` (medium gray)
- Backgrounds: `#ffffff` (white), `#f7f7f7` (light gray), `#f0f2f6` (soft blue-gray)
- Footer: `#18181c` (dark charcoal), copyright `#080113` (deep purple-black)
- Social icons: `#1f1039` (dark purple) bg circles
- Countdown boxes: `#F44336` (Material red)
- Overlay: `rgba(0, 0, 0, 0.2)` hero, `rgba(0, 0, 0, 0.4)` bg-images

### Typography
- All text: "Montserrat" (Google Fonts), weights 400/500/700/900
- Section titles: uppercase, 36px, with 3px red top-border pseudo-element
- Cover title: 48px, weight 500, white on dark overlay
- Cover XL text: 120px, weight 900, white
- Body: 14px, line-height 24px, weight 400

### Buttons
- Primary: `#f50136` bg, white text, rounded (50px), uppercase, 12px font
- Hover: `#18181c` bg, white text
- All buttons are pill-shaped (border-radius: 50px)

### Placeholder Images
- Hero slides: `https://picsum.photos/seed/festivora-hero/1920/1080`
- Speaker portraits: `https://picsum.photos/seed/festivora-speaker-N/400/400`
- Event calendar images: `https://picsum.photos/seed/festivora-event-N/100/100`
- Countdown bg: `https://picsum.photos/seed/festivora-countdown/1920/400`
- Tickets bg: `https://picsum.photos/seed/festivora-tickets/1920/400`
- Partner logos: gray placeholder rectangles
- Instagram grid: `https://picsum.photos/seed/festivora-insta-N/200/200`

### Icons (lucide-react equivalents)
- Calendar: `Calendar`
- Location: `MapPin`
- Person: `User`
- Price tag: `Tag`
- Mic: `Mic`
- Rocket: `Rocket`
- Bullhorn: `Megaphone`
- Clock: `Clock`
- Search: `Search`
- Social: `Facebook`, `Twitter`/`X`, `Instagram`, `Dribbble`, `Pinterest`
