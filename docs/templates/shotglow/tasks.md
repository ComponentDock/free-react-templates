# Shotglow — Tasks

Recreation of ColorLib Shotgear (photography studio portfolio).

## Tasks

- [x] Analyze original design (preview DOM + CSS tokens)
- [x] Write spec (openspec/specs/template-shotglow/spec.md)
- [ ] Create app scaffold (apps/shotglow/)
- [ ] Implement Navbar component
- [ ] Implement Hero component
- [ ] Implement About component
- [ ] Implement Gallery component (with category filtering)
- [ ] Implement Services component
- [ ] Implement Testimonials component
- [ ] Implement Pricing component
- [ ] Implement Blog component
- [ ] Implement Footer component (Component Dock link)
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] PR + merge + bookkeeping

## Design notes

- Oswald (headings) + Roboto (body) — Google Fonts
- Dark hero with right-aligned text overlay
- Gallery uses category data attributes for filtering (state-driven in React)
- Pricing: 3 identical-tier cards (common in template demos)
- Footer: newsletter form, social icons (inline SVG), Instagram grid, copyright with Component Dock
- No ColorLib references in app source — provenance only in spec + TEMPLATES.md
