# Eventify — Prep Notes & Task Outline

**Source:** ColorLib Evento
**Preview:** https://preview.colorlib.com/theme/evento/
**New name:** eventify
**Category:** Conference / Event landing page

---

## Section order (from live DOM)

1. Navbar (fixed top, dark)
2. Hero slider (3 slides, parallax bg, overlay, centered text + CTA)
3. Event info (4 icon boxes: date, location, speakers, tickets)
4. Countdown (dark bg + overlay, countdown timer)
5. About the event (heading, 2-col text, 4 feature icon boxes)
6. Our speakers (heading, 8 speaker cards, 4×2 grid, hover info)
7. Pricing table (heading, 3 cards: Early Bird / Start up / Corporate)
8. Event calendar (heading, table with 3 rows)
9. Our partners (gray bg, logo carousel)
10. Get your tickets (parallax bg, CTA)
11. Footer (3 columns: logo+social, instagram grid, newsletter form)
12. Copyright footer (attribution + nav links)

---

## Fidelity notes per section

### Navbar
- Fixed top, dark `#18181c` background
- Logo left, nav links right (flex-sm-row-reverse in Bootstrap)
- Links: Home (active), Speakers, Events, News, Contact
- Search icon on far right
- Mobile: hamburger toggle

### Hero slider
- Full-width carousel (owl-carousel in original → use React carousel or CSS)
- Background image with dark overlay `rgba(0,0,0,0.4)`
- Centered content: small heading "Prepare yourself for the", large bold "conference", date line, "Buy Tickets Now" pill button
- Dot navigation at bottom (3 dots, numbers)
- 3 slides with same content but different alignment (center/left)

### Event info
- 4 equal-width columns on desktop, 2×2 on mobile
- Each: icon (ionicons style → use lucide-react), title (uppercase), detail text
- White background, generous padding

### Countdown
- Dark background image with overlay
- Heading "Counter until the big event" in white
- Countdown widget (days, hours, minutes, seconds)

### About the event
- Section heading "About the event" centered
- 2-column lorem ipsum text
- 4 feature cards in a row: icon (lnr icons → lucide-react), title, short blurb, "read more" link
- Cards: mic, rocket, bullhorn, clock icons

### Speakers
- Section heading "our speakers"
- 8 cards in a 4×2 grid (no gutters)
- Each card: speaker photo (full-width), info overlay (name + position) that appears on hover
- Background: white

### Pricing
- Section heading "Pricing table" (serif font Georgia)
- 3 cards: Early Bird ($65, highlighted "recommended"), Start up ($85), Corporate ($95)
- Each card: header (title + subtitle), price tag (large number + $ sup), feature list (ul), "Purchase" pill button
- Highlighted card: dark background with "recommended" badge on top

### Event calendar
- Table with custom styling
- Header row: calendar icon + "next events calendar"
- Each row: event image, date (large number + month), event details (title, time, speaker), "Read More" pill button, "buy now" text link
- 3 event rows

### Partners
- Gray background `#f0f2f6`
- Heading "our partners"
- Logo carousel (5 logos in original)

### Get tickets
- Parallax background image with overlay
- Heading "GEt your tikets" in white
- Description text in white
- "buy now" pill button

### Footer
- Dark background `#18181c`
- 3 columns:
  1. Logo + description + social icons (Pinterest, Facebook, Twitter, Dribbble, Instagram)
  2. Instagram grid (6 small images)
  3. Newsletter subscribe form (email input + "SUBSCRIBE" pill button)
- Copyright bar: attribution + bottom nav links

---

## Implementation tasks

- [ ] Create `apps/eventify/` from simplest existing app scaffold
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `public/CNAME` with `eventify.free.componentdock.com`
- [ ] Set up `package.json` with `@free-react-templates/eventify` + homepage
- [ ] Create `src/index.css` with Tailwind entry + theme tokens (brand-red, Montserrat font)
- [ ] Create `src/App.tsx` composing all sections
- [ ] Implement `Navbar.tsx` — fixed top, dark, logo + links + search icon
- [ ] Implement `HeroSlider.tsx` — carousel with overlay, headline, CTA, dots
- [ ] Implement `EventInfo.tsx` — 4 icon boxes
- [ ] Implement `Countdown.tsx` — dark bg, overlay, countdown widget
- [ ] Implement `About.tsx` — heading, 2-col text, 4 feature boxes
- [ ] Implement `Speakers.tsx` — heading, 8 cards in 4×2 grid with hover
- [ ] Implement `Pricing.tsx` — 3 pricing cards, one highlighted
- [ ] Implement `EventCalendar.tsx` — table with 3 event rows
- [ ] Implement `Partners.tsx` — gray bg, logo carousel
- [ ] Implement `GetTickets.tsx` — parallax bg, CTA
- [ ] Implement `Footer.tsx` — 3 columns + ComponentDock link
- [ ] Implement `CopyrightFooter.tsx` — attribution + nav links
- [ ] Write tests for all components (100% coverage)
- [ ] Run `scripts/verify-app.sh eventify`
- [ ] Commit as `feat: add eventify template (ColorLib Evento)`
