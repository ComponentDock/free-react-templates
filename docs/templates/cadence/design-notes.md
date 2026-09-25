# Cadence — Design Notes

## Replication Analysis

### Original (ColorLib Musica)

- Music artist/band landing page
- Dark purple theme with hot pink accent gradient
- Sections: navbar, hero slider, artist bio, upcoming shows, music player, featured album, music/artists search, footer
- Font: Raleway (sans-serif) + Allura (decorative/signature)
- Button style: gradient #cc1573 → #5722a9, white text, rounded

### Recreation (Cadence)

- Faithful section-for-section recreation
- Replaced carousel/slider with static hero (no JS carousel library needed)
- Used picsum.photos seeded placeholders for all images
- Used lucide-react icons (Play, ChevronDown, Menu, X, etc.)
- All text content adapted but same structure/feel
- Footer links to Component Dock instead of ColorLib

### Key Decisions

- No audio elements (React templates don't need actual audio playback)
- Simplified music player to visual cards with play buttons
- Mobile hamburger menu with useState toggle
- Sticky navbar with backdrop-blur

## Files

- `apps/cadence/` — template app
- `openspec/specs/template-cadence/spec.md` — Gherkin spec
- `docs/templates/cadence/` — this folder
