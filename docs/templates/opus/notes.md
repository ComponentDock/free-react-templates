# Opus — Template Replication Notes

**Source:** ColorLib "Music 2" — https://colorlib.com/wp/template/music-2/
**Preview:** https://preview.colorlib.com/theme/music-2/ (UNREACHABLE — fallback to screenshot)
**New name:** Opus
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Research Notes

- Live preview returned 404 at time of prep. Screenshot was the primary
  reference source for section structure and design tokens.
- The ColorLib listing page meta description confirms: "Music is the best
  free mobile-ready music website template for bands, artists, event
  organizers, audio streaming and other musical projects."
- Screenshot analysis yielded all section order, color palette, and layout
  patterns needed for faithful recreation.

## Section Order (top to bottom)

1. Navbar (logo + links + Login/Register)
2. Hero (full-viewport dark bg, headline, inputs, CTA, LIVE badge)
3. Follow Bar (social icons + SCROLL DOWN)
4. Song of the Week (artist info + audio player)
5. Footer (Component Dock attribution)

## Design Notes

- **Color palette:** Deep navy/purple (#1a1147) primary bg, lime green
  (#a4c400) accent, bright yellow (#ffeb3b) headline accent, hot pink
  (#ff1493) badge. All on dark background.
- **Typography:** Poppins (Google Fonts), bold 700 for headlines,
  regular 400 for body. All text is white or light grey on dark bg.
- **Buttons:** Pill-shaped (border-radius: 30px), lime green bg with
  dark text. Inputs also pill-shaped with light borders on dark bg.
- **Social icons:** Circular (50% radius), lime green bg, white icon
  glyphs.
- **LIVE badge:** Circular pink (#ff1493), small, positioned near
  headline area.
- **Audio player:** Dark card-style section with play/pause/stop controls
  as circular buttons, green progress bar, volume icon, timestamps.

## Implementation Tasks

- [ ] Scaffold app: copy simplest existing app, rename package to
      @free-react-templates/opus
- [ ] Create src/components/Navbar.tsx — logo + nav links + Login/Register
- [ ] Create src/components/Hero.tsx — full-viewport hero with headline,
      inputs, CTA button, LIVE badge
- [ ] Create src/components/FollowBar.tsx — social icons + SCROLL DOWN
- [ ] Create src/components/SongOfTheWeek.tsx — artist info + audio player
- [ ] Create src/components/Footer.tsx — Component Dock attribution
- [ ] Compose in src/App.tsx — stack all sections vertically
- [ ] Write tests for each component (100% coverage required)
- [ ] Verify: typecheck, lint, test:coverage, build
- [ ] Update public/CNAME to opus.free.componentdock.com
- [ ] Update package.json homepage to https://opus.free.componentdock.com

## Fidelity Checklist

- [ ] Section order matches original 1:1
- [ ] Dark navy/purple background on all sections
- [ ] Headline "YOUR MUSIC." with "MUSIC." in lime green
- [ ] Pill-shaped inputs and CTA button
- [ ] LIVE pink badge
- [ ] Social media icons in green circles
- [ ] Song of the Week with audio player controls
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
