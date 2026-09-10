# Loaf — Bakery Template Tasks

## Checklist

- [x] Analyze ColorLib Bakery preview (DOM, CSS tokens, screenshot)
- [x] Write spec (openspec/specs/template-loaf/spec.md)
- [x] Create app scaffold (apps/loaf/)
- [x] Implement Navbar component + tests
- [x] Implement Hero component + tests
- [x] Implement About component + tests
- [x] Implement Categories component + tests
- [x] Implement VideoSection component + tests
- [x] Implement Testimonials component + tests
- [x] Implement Blog component + tests
- [x] Implement Footer component + tests
- [x] Wire App.tsx
- [x] Run verify-app.sh (typecheck + lint + coverage + build)
- [x] PR and merge
- [x] Bookkeeping (TEMPLATES.md [x], surge URL, homepage, readme:status)

## Design Notes

### Source

ColorLib "Bakery" — single-page bakery landing page.
Preview: https://preview.colorlib.com/theme/bakery/

### Tokens

- Brand: #d1ab7f (warm tan/gold)
- Body: #777, Headings: #222
- Surface: #f9f9ff, Navy: #04091e
- Font: Poppins (300–700)
- Button radius: 25px

### Structure

8 sections: Navbar → Hero → About → Categories → Video → Testimonials → Blog → Footer

### Differences from Source

- Images replaced with picsum.photos seeded placeholders
- Social icons are inline SVGs (no brand icons in lucide-react)
- Footer links to Component Dock instead of external sources
- Name changed from "Bakery" to "Loaf"
- No ColorLib references in app code
