# MicDrop — Implementation Tasks

## Prep Notes
- **Source:** ColorLib "The Hustle Hour" (`the-hustle-hour`)
- **Preview:** 404 — design based on screenshot analysis
- **Key characteristic:** Dark-themed podcast site, red accent, clean minimal layout

## Task Checklist

### Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. `apps/podlane` or `apps/podium`)
- [ ] Rename package to `@free-react-templates/micdrop`
- [ ] Set `public/CNAME` to `micdrop.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://micdrop.free.componentdock.com`
- [ ] Add Inter font via Google Fonts `<link>` in `index.html`
- [ ] Define theme tokens in `src/index.css` (brand red, dark bg, etc.)

### Phase 2: Components (in order)
- [ ] `Navbar.tsx` — sticky dark navbar with logo (mic icon + text), nav links, dark mode toggle, red CTA
- [ ] `Hero.tsx` — dark section: badge pill, headline (white + red accent), subtitle, two CTAs, platform pill links
- [ ] `StatsBar.tsx` — dark section with 4 stat items (white text), top border divider
- [ ] `StatsHighlight.tsx` — light section with 4 red stat numbers, subtitle labels
- [ ] `Episodes.tsx` — episode card grid/list with play buttons, filtering
- [ ] `GuestProfiles.tsx` — guest cards with photo, name, role, bio
- [ ] `Newsletter.tsx` — email capture form with validation
- [ ] `Footer.tsx` — links, social icons, Component Dock attribution

### Phase 3: Integration
- [ ] Compose all sections in `App.tsx`
- [ ] Dark mode toggle with localStorage persistence
- [ ] Responsive mobile menu (hamburger)
- [ ] Wire up newsletter form validation (zod)

### Phase 4: Tests + Verification
- [ ] Write Vitest tests for each component (100% coverage)
- [ ] Run `scripts/verify-app.sh micdrop`
- [ ] Verify no ColorLib references in app code
- [ ] Commit and push

## Design Notes

### Section Order (top to bottom)
1. Navbar (sticky, dark)
2. Hero (dark, centered, full-width)
3. Stats Bar (dark, 4 metrics, divider)
4. Stats Highlight (light bg, 4 red metrics)
5. Episodes (dark or light, card grid)
6. Guest Profiles (cards)
7. Newsletter (email capture)
8. Footer (dark, links + social)

### Color Strategy
- Primary dark: `#0f0f11` — used for hero, navbar, stats bar
- Brand red: `#dc2626` — CTAs, accent text, stat numbers on light bg
- Light section: `#f8f9fa` — secondary stats, possibly newsletter
- Text: white on dark, `#111827` on light

### Typography
- Inter font (Google Fonts)
- Hero heading: extrabold (800), ~4rem, "Stories That" white / "Spark Ideas" red
- Stats numbers: bold (800), ~2.5rem, brand red on light bg
- Body: regular (400), `#9ca3af` on dark, `#374151` on light

### Button Patterns
- Primary: red bg, white text, rounded-full, padding ~1.5rem/0.75rem, icon prefix
- Secondary: border white/30, white text, rounded-full
- Platform pills: border white/20, rounded-full, small text, icon

### Dark Mode
- Toggle via moon/sun icon in navbar
- Persist preference in localStorage
- Apply `.dark` class on `document.documentElement`
