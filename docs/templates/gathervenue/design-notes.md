# GatherVenue — Design Notes & Implementation Todo

**Source:** ColorLib Event (https://colorlib.com/wp/template/event/)
**Preview:** https://preview.colorlib.com/theme/event/

## Section order (matches original 1:1)

1. **Navbar** — Sticky, dark navy (#0b0b28), 6 nav links + "Buy Ticket" CTA button (#dd0a37)
2. **Hero (#home)** — Full viewport (100vh), background image, centered heading + subtext
3. **About (#about)** — Section title "About Event" (two-span, second word red), paragraph, then nested Numbers row
4. **Numbers (#numbers)** — 4 stat counters (900+ Hours, 750+ Venues, 50+ Country, 100+ Speakers), animated count-up
5. **Gallery (#galery)** — Owl-carousel-style horizontal image carousel with 3 images
6. **Video CTA (#video-cta)** — Parallax background image, play button icon, "Watch this video" heading + subtext
7. **Schedule (#schedule)** — Events list, each with: date badge (day + month/year), time, title, description, speaker link; "Download Schedule" button
8. **Speakers (#speakers)** — Light gray bg (#F9F9FA), 3-col grid of speaker cards, image with overlay (social icons + name/role), modal on click
9. **Sponsors (#sponsors)** — 4-col grid of sponsor logo images (8 total)
10. **CTA (#cta)** — Parallax background image, "Get Ticket Now!" heading, "Buy Ticket" button
11. **Contact (#contact)** — 3-column: Address, Phone, Email with headings
12. **Map (#map)** — 380px tall map placeholder
13. **Footer (#footer)** — Logo centered, social icons, copyright line

## Design tokens (from `css/style.css`)

- Brand: `#dd0a37` (red) — buttons, accent words
- Dark: `#0b0b28` (navy) — navbar
- Light bg: `#F9F9FA` — speakers section
- White: `#FFF` — most sections
- Font: Poppins (Google Fonts), sans-serif
- Buttons: `.main-btn` — bg #dd0a37, color #FFF, padding 14px 50px, border-radius 2px, uppercase, opacity 0.8 on hover
- Section title pattern: two spans, first default color, second #dd0a37

## Fidelity notes

- Parallax sections (Video CTA, CTA) use `background-attachment: fixed` or equivalent
- Gallery uses carousel/slider behavior — consider embla-carousel or similar
- Speaker cards have image overlay that slides up on hover showing social icons
- Speaker modal: click card opens a modal with full details (image, name, website, social, sessions)
- Counter animation: animated count-up on scroll into view (use intersection observer + requestAnimationFrame)
- Map section is a placeholder — use a static map image or embed placeholder
- Footer must link to https://www.componentdock.com/ (Component Dock)

## Implementation todo

- [ ] Create `apps/gathervenue/` from simplest existing app, rename package
- [ ] Set up index.html with Poppins Google Font link
- [ ] Create `src/App.tsx` composing all sections
- [ ] Implement `src/components/Navbar.tsx`
- [ ] Implement `src/components/Hero.tsx`
- [ ] Implement `src/components/About.tsx` (including Numbers stats)
- [ ] Implement `src/components/Gallery.tsx` (carousel)
- [ ] Implement `src/components/VideoCta.tsx`
- [ ] Implement `src/components/Schedule.tsx`
- [ ] Implement `src/components/Speakers.tsx` (with modal)
- [ ] Implement `src/components/Sponsors.tsx`
- [ ] Implement `src/components/CtaSection.tsx`
- [ ] Implement `src/components/Contact.tsx`
- [ ] Implement `src/components/MapPlaceholder.tsx`
- [ ] Implement `src/components/Footer.tsx`
- [ ] Write tests for each component (100% coverage)
- [ ] Run `npm run verify:app gathervenue`
- [ ] Commit and push
