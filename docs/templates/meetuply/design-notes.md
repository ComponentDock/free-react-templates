# Meetuply — Design Notes & Implementation Todo

**Source:** ColorLib Eventalk (https://colorlib.com/wp/template/eventalk/)
**Preview:** https://preview.colorlib.com/theme/eventalk/

## Section order (matches original 1:1)

1. **Navbar** — Fixed dark transparent, brand "Meetuply", 6 nav links + "Buy ticket" CTA (bg #6b76ff, border #6b76ff, radius 2px)
2. **Hero** — Full viewport, background image + purple-blue gradient overlay, countdown timer (days/hours/min/sec), heading + date/location subtext, "Buy ticket" button
3. **Venue/About** — White bg, section title "Venue", 4 feature cards in a row: Venue (pin icon), Transport (car icon), Hotel (bed icon), Restaurant (utensils icon), each with description
4. **Fun Facts** — White bg, section title "Fun Facts", descriptive paragraph
5. **Counters** — White bg, 4 stat boxes: Speakers, Sponsor, Total Seats, Topics — animated count-up on scroll
6. **Speakers** — White bg, section title "Our Speakers", responsive grid of speaker cards with image, name, role
7. **Schedule** — Light gray bg (#f2f2f2), section title "Schedule / Event Schedule", day tabs (Day 01-04), each day lists time slots with talk title, description, speaker name + role
8. **Testimony** — Dark brown bg (#3c312e), parallax background
9. **Pricing** — White bg, section title "Pricing", 2+ pricing cards with price, feature list, "Buy Ticket" button
10. **Blog** — Light gray bg (#f2f2f2), section title "Recent Blog", blog entry grid with date badge, title, excerpt
11. **Newsletter CTA** — Dark brown bg (#3c312e), parallax, "Subscribe to our Newsletter" heading, email input + submit
12. **Footer** — Dark charcoal bg (#222831), brand "Meetuply", Useful Links column, Have a Questions? column with address/phone/email, social icons, copyright

## Design tokens (from css/style.css)

- Brand: `#6b76ff` (purple-blue) — links, CTA buttons, accents
- Gradient: `linear-gradient(45deg, #6b75ff 0%, #59b7ff 100%)` — hero overlay
- Dark charcoal: `#222831` — footer
- Dark brown: `#3c312e` — testimony/newsletter parallax sections
- Light gray: `#f2f2f2` — alternate sections (schedule, blog)
- White: `#fff` — most sections
- Body text: `#4d4d4d`
- Button accent (primary): `#78d5ef` (light blue, Bootstrap override)
- Font: Work Sans (Google Fonts, weights 100-900)
- CTA buttons: border-radius 2px, bg #6b76ff, color #fff
- Navbar CTA: border 1px solid #6b76ff, bg #6b76ff, radius 2px
- Link color: #6b76ff

## Fidelity notes

- Hero has a gradient overlay (purple-blue), not a solid dark overlay
- Countdown timer: live countdown to a target date (use interval + state)
- Counter animation: count-up on scroll into view (intersection observer + requestAnimationFrame)
- Schedule uses vertical tabs (Bootstrap-style pills), not horizontal tabs
- Parallax sections (testimony, newsletter) use `background-attachment: fixed`
- Pricing cards have a highlighted/featured state with border accent
- Blog entries have a date badge (day number + month/year) on the left
- Footer must link to https://www.componentdock.com/ (Component Dock)

## Implementation todo

- [ ] Create `apps/meetuply/` from simplest existing app, rename package
- [ ] Set up index.html with Work Sans Google Font link
- [ ] Create `src/App.tsx` composing all sections
- [ ] Implement `src/components/Navbar.tsx`
- [ ] Implement `src/components/Hero.tsx` (with countdown timer)
- [ ] Implement `src/components/Venue.tsx` (4 feature cards)
- [ ] Implement `src/components/FunFacts.tsx`
- [ ] Implement `src/components/Counters.tsx` (animated count-up)
- [ ] Implement `src/components/Speakers.tsx` (responsive grid)
- [ ] Implement `src/components/Schedule.tsx` (tabbed day view)
- [ ] Implement `src/components/Testimony.tsx` (parallax)
- [ ] Implement `src/components/Pricing.tsx` (pricing cards)
- [ ] Implement `src/components/Blog.tsx` (blog entry grid)
- [ ] Implement `src/components/Newsletter.tsx` (email input + CTA)
- [ ] Implement `src/components/Footer.tsx`
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: no ColorLib references in app code
- [ ] Verify: footer links to componentdock.com
- [ ] Verify: all placeholder images use picsum.photos/seed
