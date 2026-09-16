# ChapelGlow — Implementation Notes

## Source
- **ColorLib template:** Advent
- **Preview URL:** https://preview.colorlib.com/theme/advent/
- **Category:** Church & Religious
- **New name:** chapelglow

## Section Order (implementation order)

1. **Navbar** — dark bg, brand "ChapelGlow", 4 nav links + Ministries dropdown, hamburger toggle
2. **Hero Slider** — 2 slides with bg images, centered headline + description + white outline button. Use CSS transitions or a simple state-based slider (skip owl-carousel dependency).
3. **Upcoming Events Highlight** — 2-col row: left = event title + meta (time, location, speaker), right = countdown timer component
4. **Worship Time** — split layout: left = image, right = heading + worship schedule list (3 services with name + time)
5. **Recent Sermons** — centered heading, 3 sermon cards: title, author/date meta, audio player (use native `<audio>` element)
6. **Events & Ministries** — centered heading, 3 ministry cards: thumbnail, title, date/category, description
7. **Footer** — dark bg, 3 columns (about + social icons, quick links, contact), copyright with ComponentDock link

## Fidelity Notes

### Design Tokens (from live preview CSS)
- **Heading font:** `"Playfair Display", serif` → import from Google Fonts
- **Body font:** `"Open Sans", sans-serif` → import from Google Fonts
- **Body background:** `#262626` → dark charcoal, use as main bg
- **Body text:** `#b3b3b3` → muted gray on dark
- **Accent gold:** `#ffc107` → Tailwind theme color, primary buttons + highlights
- **Button radius:** `0` → `rounded-none` class
- **White text:** `#fff` → headings, nav, outline buttons

### Hero Slider
- Full-width background images with centered text
- Use a simple React state-based slider (no jQuery/owl-carousel)
- 2 slides: "Arise, Shine" + "Explore Our Weekend Services"
- White outline buttons: `border border-white text-white hover:bg-white hover:text-black`
- Optional: auto-advance every 5s

### Upcoming Events
- Left: section heading "Upcoming Events" in small caps/uppercase, event title as h2, meta with icons (clock, location, person)
- Right: countdown timer component (days, hours, minutes, seconds)
- Use a simple countdown hook or component

### Worship Time
- Split layout: image on one side, text on the other
- Worship schedule as a styled list with service name + time
- Use `flex` or `grid` for the split

### Sermons
- 3 cards in a row
- Each: title, "by Author on Date" meta, native `<audio>` player
- Skip MediaElement.js dependency — use native HTML5 audio

### Ministries
- 3 cards in a row
- Each: small thumbnail image, title as h3, date + category meta, description paragraph

### Footer
- Dark background (same #262626)
- 3 columns: About + social (Twitter, Facebook, LinkedIn, Instagram), Quick Links, Contact Info
- Social icons via lucide-react
- Copyright with ComponentDock link

## Placeholder Images

All use `https://picsum.photos/seed/chapelglow-<n>/<w>/<h>`:
- Hero slides: `chapelglow-hero-1/1920/1080`, `chapelglow-hero-2/1920/1080`
- Worship image: `chapelglow-worship/600/600`
- Ministry thumbnails (×3): `chapelglow-ministry-1` through `chapelglow-ministry-3/300/300`

## Dependencies to Reuse
- `packages/ui` — Button, ButtonLink, cn()
- `lucide-react` — icons (Clock, MapPin, User, Twitter, Facebook, Linkedin, Instagram, Heart, Play, Music)
- Native `<audio>` element for sermon players (no external audio library)

## Component File Structure
```
apps/chapelglow/
  src/
    main.tsx
    App.tsx
    index.css (Tailwind + theme tokens)
    components/
      Navbar.tsx
      HeroSlider.tsx
      UpcomingEvents.tsx
      WorshipTime.tsx
      RecentSermons.tsx
      Ministries.tsx
      Footer.tsx
    test/
      setup.ts
  vite.config.ts
  package.json
  public/CNAME
```
