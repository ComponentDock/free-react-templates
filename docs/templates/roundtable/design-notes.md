# Roundtable — Implementation Notes

Source: ColorLib Workshop (https://preview.colorlib.com/theme/workshop/)

## Section order (top to bottom)

1. **Navbar** — sticky, logo "Roundtable" (white + brand color split), 5 nav links + "Buy Tickets" CTA. Mobile hamburger menu.
2. **Hero** — full-viewport dark bg, gradient heading "Web Design Conference 2025", date/location, gradient "Buy Tickets" button. AOS fade-up animations.
3. **Speakers** — heading left + description right, then 4 speaker cards alternating image/text layout. Each: photo, name (white), role (uppercase, #ff5733), bio, social links (FB/Twitter/GitHub icons).
4. **Programs** — heading left + description right, then 6 schedule rows (time on left, title + speaker on right). Rows separated by dark borders. Break rows have no speaker.
5. **Sponsors** — heading left + description right, 3x2 logo grid, centered "Be a Sponsor" gradient CTA button below.
6. **News** — heading left + description right, 3 blog entry cards: thumbnail, title (link), author avatar + name (#ff5733) + date, excerpt.
7. **Footer** — dark bg (#1b1d24), 3 columns (About Event, Quick Links, Connect with Us), copyright with Component Dock link. Social icons in Connect column.

## Fidelity notes

### Colors & tokens
- Body bg: `#232531` (dark charcoal)
- Footer bg: `#1b1d24` (darker)
- Primary brand: `#ff5733` (orange-red)
- Accent: `#c70039` (dark red)
- Brand gradient: `linear-gradient(to right, #c70033, #ff5733 70%)`
- Text: `#cfcfd1` (light gray on dark)
- Muted: `#818186`
- Borders light: `#edf0f5`, dark: `#383b4f`
- Light section bg: `#f4f5f9`

### Typography
- Font: Roboto Mono (monospace) — load from Google Fonts
- Hero heading: gradient text, ~6rem desktop / ~2rem mobile
- Speaker names: white, large
- Program time: large h4 white
- Footer headings: uppercase, muted (#818186), 16px

### Layout
- Bootstrap-like grid (recreate with Tailwind grid/flex)
- Sections: container with heading left (col-4) + description right (col-5/6) pattern
- Speakers: 2-column alternating (image left/right)
- Programs: 2-column rows (time col-3, content col-9)
- Sponsors: 3-column grid (col-md-6 col-lg-4)
- News: 3-column card grid (col-md-6 col-lg-4)
- Footer: 3-column (col-md-4, col-md-3, col-md-4)

### Buttons
- Sharp corners (border-radius: 0)
- Gradient background (#c70039 → #ff5733)
- White text
- Used for: "Buy Tickets", "Be a Sponsor"

### Animations
- AOS (Animate On Scroll) — fade-up, fade-right, fade-left effects with delays
- Replicate with Tailwind animate or framer-motion

### Images
- Speaker photos: `https://picsum.photos/seed/roundtable-speaker-N/600/600`
- Blog thumbnails: `https://picsum.photos/seed/roundtable-blog-N/600/400`
- Sponsor logos: placeholder SVGs or text-based logos
- Author avatars: `https://picsum.photos/seed/roundtable-author-N/36/36`

## Component structure

```
src/
  App.tsx              — composes all sections
  main.tsx             — entry point
  index.css            — Tailwind entry + @theme tokens
  components/
    Navbar.tsx         — sticky nav with logo, links, mobile menu
    Hero.tsx           — full-viewport hero with gradient heading
    Speakers.tsx       — section heading + 4 alternating speaker cards
    SpeakerCard.tsx    — individual speaker (image + info)
    Programs.tsx       — section heading + 6 schedule rows
    ProgramRow.tsx     — individual schedule row (time + title)
    Sponsors.tsx       — section heading + logo grid + CTA
    News.tsx           — section heading + 3 blog cards
    BlogCard.tsx       — individual blog entry card
    Footer.tsx         — 3-column footer + copyright
```

## Implementation tasks

- [ ] Scaffold app from simplest existing template (copy + rename)
- [ ] Install dependencies, register workspace in root package.json
- [ ] Create `src/index.css` with @theme tokens (brand colors, font)
- [ ] Create `public/CNAME` with `roundtable.free.componentdock.com`
- [ ] Set `"homepage"` in package.json
- [ ] Implement Navbar component (sticky, mobile menu)
- [ ] Implement Hero component (gradient heading, CTA button)
- [ ] Implement Speakers section (4 alternating cards)
- [ ] Implement Programs section (6 schedule rows)
- [ ] Implement Sponsors section (logo grid + CTA)
- [ ] Implement News section (3 blog cards)
- [ ] Implement Footer (3 columns + Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Add scroll animations (fade-up, fade-right, fade-left)
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh and fix any issues
- [ ] Update TEMPLATES.md status
