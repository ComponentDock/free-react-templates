# GalaFlow — Implementation Todo

Source: ColorLib Eventro → https://preview.colorlib.com/theme/eventro/

## Tasks

1. [ ] Scaffold `apps/galaflow/` from an existing simple app (copy + rename package)
2. [ ] Set up `public/CNAME` with `galaflow.free.componentdock.com`
3. [ ] Set `homepage` in `package.json`
4. [ ] Write tests for Navbar component (100% coverage)
5. [ ] Implement Navbar — transparent over hero, logo + nav + "Buy Ticket" button, sticky
6. [ ] Write tests for HeroSlider component
7. [ ] Implement HeroSlider — full-viewport slider, 2 slides, date/heading/CTAs, decorative text
8. [ ] Write tests for AboutConference component
9. [ ] Implement AboutConference — title, 2-col image + info, location/clock icons
10. [ ] Write tests for NewEra component
11. [ ] Implement NewEra — title, description, CTA, right image
12. [ ] Write tests for SubscribeSection component
13. [ ] Implement SubscribeSection — bg image, heading, email form, subscribe button
14. [ ] Write tests for ProgramSchedule component
15. [ ] Implement ProgramSchedule — tabs (4 dates), program entries per tab
16. [ ] Write tests for Speakers component
17. [ ] Implement Speakers — 4-col grid, hover-reveal social icons, purple gradient
18. [ ] Write tests for BookSeat component
19. [ ] Implement BookSeat — bg image overlay, heading, CTA button
20. [ ] Write tests for Footer component
21. [ ] Implement Footer — dark purple bg, 3-col, social, newsletter, copyright
22. [ ] Compose all sections in App.tsx
23. [ ] Add Tailwind theme tokens (#FDE449 yellow, #302072 purple, Oswald/Roboto fonts)
24. [ ] Run `npm run verify:app galaflow`
25. [ ] Run `npm install` at root to register workspace

## Design Notes

### Section Order (must match 1:1)
1. Navbar (transparent, sticky, logo + nav + Buy Ticket)
2. Hero Slider (full-viewport, 2 slides, yellow date, large heading)
3. About Conference (title, 2-col image + info)
4. The New Era (title, description, CTA, right image)
5. Subscribe (bg image, form, subscribe button)
6. Program Schedule (tabs, program entries)
7. Our Speakers (4-col grid, hover social)
8. Book Your Seat (bg image, CTA)
9. Footer (dark purple, 3-col, newsletter)

### Color Palette
- Primary: `#FDE449` (bright yellow) — buttons, accents, back-to-top
- Secondary: `#302072` (deep purple) — headings, header btn, dropdown, footer bg
- Body text: `#79709D` (muted purple-gray)
- Link base: `#635c5c` (gray)
- Light section bg: `#F6F7FF` (pale purple)
- Blue section bg: `#0154F7`
- Dark bg: `#000000`
- Subtitle text: `#140C40` (dark indigo)

### Typography
- Headings: "Oswald" (Google Fonts), weights 200-700
- Body: "Roboto" (Google Fonts), weights 300-900
- Section titles: 60px, Oswald, `#302072`
- Hero heading: 120px, Oswald, white, weight 500
- Hero date span: 40px, Oswald, `#FDE449`, uppercase

### Buttons
- Primary: `#FDE449` bg, `#302072` text, rounded 5px, animated scaleX hover sweep
- Header: `#302072` bg, `#FDE449` text, rounded 5px
- Video: transparent, white border, rounded 5px
- Back-to-top: `#FDE449` circle, 50px

### Placeholder Images
- Hero: `https://picsum.photos/seed/galaflow-hero/1920/900`
- About: `https://picsum.photos/seed/galaflow-about/700/500`
- About2: `https://picsum.photos/seed/galaflow-about2/600/500`
- Speaker portraits: `https://picsum.photos/seed/galaflow-speaker-N/400/400`
- Subscribe bg: `https://picsum.photos/seed/galaflow-subscribe/1920/600`
- Book seat bg: `https://picsum.photos/seed/galaflow-bookseat/1920/600`
- Program images: `https://picsum.photos/seed/galaflow-program-N/100/100`

### Icons (lucide-react equivalents)
- Location: `MapPin`
- Clock: `Clock`
- Play circle: `PlayCircle`
- Facebook: `Facebook`
- Twitter: `Twitter`/`X`
- LinkedIn: `Linkedin`
