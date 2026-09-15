# Symposium — Implementation Tasks & Design Notes

## Source

- **ColorLib**: Umeet
- **Slug**: `umeet`
- **Preview**: `https://preview.colorlib.com/theme/umeet/`
- **Category**: Event / Conference Landing Page

## Section Order (fidelity)

1. **Navbar** — Transparent background, logo left, nav links right (Home, About, Speakers, Pages dropdown, Blog dropdown, Contact), "Get Ticket" CTA button
2. **Hero Banner** — Full-width background image, center-aligned: flaticon-sing icon, date/location text, large headline, "Buy Ticket" pink CTA button
3. **Innovation / Countdown** — Split layout: left text (heading + subtitle + description), right countdown timer (Days/Hours/Mins) with background-image boxes + "Get Ticket" link below
4. **Why Join / Features** — Section intro + 3 feature cards (flaticon icon in circular bg, title, description) + "Learn More" + "Buy Ticket" buttons centered below
5. **Meet The Speakers** — Dark background-image section, 6 speaker cards in 3-col grid (image + footer with name/role + hover overlay with social icons)
6. **Conference Schedule** — Tabbed day navigation (Day 1–4), each tab shows 2–3 session cards with speaker identity panel (purple bg, avatar, name, role) + session content (time, title, description)
7. **Pricing Tables** — 3 pricing cards on gray bg (Normal $45, Advance $50, Ultimate $60) with feature list (check/close icons) + "Buy Now" button; hover turns card purple
8. **Sponsors** — Two groups: Gold (3 logos) + Silver (3 logos) in white bordered frames on dark background image
9. **Event Gallery** — 6 images in 3-col grid on dark background image, hover overlay with dark tint + pink circle plus icon
10. **Blog Carousel** — 4 blog cards (image + title + date/comment count), carousel layout, hover turns card purple
11. **Footer** — Dark navy bg (#111429): 4-col layout (About text, Navigation links, Newsletter form, Instagram feed) + social icons row + copyright line + Component Dock link

## Fidelity Notes

- **Fonts**: Load `Oswald` (400,500,600,700) and `Roboto` (300,400,500,700) via Google Fonts `<link>` in index.html
- **Primary purple**: `#3b1d82` — used in headings, button borders, tab active, schedule card left panel, speaker card footer, feature icon color
- **Accent pink**: `#ea0763` — used in nav hover, hero CTA bg, schedule hover state, gallery overlay icon, footer text links, pricing negative icons
- **Gray background**: `#f7f7f7` — Innovation section bg, pricing section bg, schedule card bg, tab inactive bg
- **Dark footer**: `#111429` — footer area bg
- **Hero banner**: Background image placeholder → `https://picsum.photos/seed/symposium-hero/1920/1080`
- **Countdown timer boxes**: Use solid color/pattern backgrounds instead of image files → purple gradient or solid `#3b1d82`
- **Feature icon backgrounds**: Circular bg pattern → use Tailwind `bg-gray-100 rounded-full` with hover state change
- **Speaker background**: `https://picsum.photos/seed/symposium-speakers/1920/800` for the section bg image
- **Gallery bg**: `https://picsum.photos/seed/symposium-gallery/1920/600` for the section bg image
- **Sponsor bg**: `https://picsum.photos/seed/symposium-sponsors/1920/600` for the section bg image
- **Sponsor logos**: Use placeholder SVGs or text-based logos (no external asset files)
- **Blog images**: `https://picsum.photos/seed/symposium-blog-n/600/400` (n=1–4)
- **Speaker images**: `https://picsum.photos/seed/symposium-speaker-n/400/400` (n=1–6)
- **Schedule avatars**: `https://picsum.photos/seed/symposium-schedule-n/80/80`
- **Icons**: Use `lucide-react` (Music for flaticon-sing, Trophy for flaticon-prize, Globe for flaticon-earth-globe, Facebook/Twitter/Instagram/Skype for social, Plus for gallery, Check/X for pricing, Clock/Calendar for blog info)
- **No carousel JS needed**: Use CSS scroll-snap or overflow-x-auto for the blog carousel
- **Schedule tabs**: Use React state to manage active tab, no Bootstrap JS
- **Responsive**: Features stack vertically on mobile, speakers go 2-col then 1-col, pricing stacks vertically, gallery goes 2-col then 1-col
- **Footer MUST link**: `https://www.componentdock.com/` with "Component Dock" text
- **No ColorLib references** in app code — only in spec and TEMPLATES.md

## Tasks

- [ ] Create `apps/symposium/` with Vite + React 19 + Tailwind 4 + TypeScript
- [ ] Set up package.json (`@free-react-templates/symposium`), public/CNAME, vite.config.ts with `injectUiSource()`
- [ ] Load Oswald + Roboto fonts via Google Fonts link in index.html
- [ ] Define Tailwind theme tokens in index.css (primary-purple, accent-pink, gray-bg, dark-footer, fonts)
- [ ] Implement Navbar component (transparent, fixed on scroll, logo, nav links, "Get Ticket" CTA)
- [ ] Implement HeroBanner component (bg image, icon, date text, headline, CTA button)
- [ ] Implement InnovationSection component (text left, countdown timer right)
- [ ] Implement CountdownTimer component (Days/Hours/Mins with styled boxes)
- [ ] Implement FeaturesSection component (3 feature cards + buttons)
- [ ] Implement SpeakersSection component (dark bg, 6 speaker cards with hover overlay)
- [ ] Implement ScheduleSection component (tabbed days, session cards with speaker identity)
- [ ] Implement PricingSection component (3 pricing tables with features list)
- [ ] Implement SponsorsSection component (Gold + Silver sponsor grids)
- [ ] Implement GallerySection component (6-image grid with hover overlay)
- [ ] Implement BlogCarousel component (4 blog cards with scroll-snap)
- [ ] Implement Footer component (4-col layout, newsletter form, social icons, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Style everything with Tailwind using design tokens from spec
- [ ] Add responsive styles (stack on mobile, adjust grids)
- [ ] Write tests with Vitest + Testing Library (100% coverage)
- [ ] Run `npm run spec:validate` and `scripts/verify-app.sh symposium`
- [ ] Commit as `feat: add symposium template (ColorLib umeet)`

## Component Structure

```
apps/symposium/
  src/
    main.tsx
    App.tsx
    components/
      Navbar.tsx               — Sticky navbar with logo, nav links, CTA
      HeroBanner.tsx           — Full-width hero with bg image, headline, CTA
      InnovationSection.tsx    — Countdown timer + event info text
      CountdownTimer.tsx       — Days/Hours/Mins countdown boxes
      FeaturesSection.tsx      — 3 feature cards with icons
      SpeakersSection.tsx      — 6 speaker cards on dark background
      SpeakerCard.tsx          — Single speaker card with hover overlay
      ScheduleSection.tsx      — Tabbed day schedule with session cards
      ScheduleCard.tsx         — Single session card (identity + content)
      PricingSection.tsx       — 3 pricing tier cards
      PricingCard.tsx          — Single pricing card
      SponsorsSection.tsx      — Gold + Silver sponsor grids
      GallerySection.tsx       — 6-image grid with hover overlay
      BlogCarousel.tsx         — 4 blog cards carousel
      BlogCard.tsx             — Single blog card
      Footer.tsx               — 4-col footer with newsletter + social
    index.css
    test/
      setup.ts
  public/
    CNAME (symposium.free.componentdock.com)
  package.json
  vite.config.ts
  tsconfig.json
```
