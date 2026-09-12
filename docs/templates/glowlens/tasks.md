# Glowlens — Tasks

Recreation of ColorLib "Halo" (https://colorlib.com/wp/template/halo/).

## Checklist

- [x] Spec written (openspec/specs/template-glowlens/spec.md)
- [x] App scaffolded (apps/glowlens/)
- [x] Components implemented (8 sections)
- [x] Tests written with 100% coverage
- [x] Verification gate passed
- [x] PR created and merged
- [x] Bookkeeping completed

## Design Notes

### Source

- ColorLib "Halo" — Photography Portfolio Template
- Preview: https://preview.colorlib.com/theme/halo/
- Font: Open Sans (Google Fonts)
- Brand colors: #222121 (headings), #868686 (body), #2b2b2b (dark sections)
- Button style: bordered (top + bottom 2px solid), uppercase, transparent bg

### Sections (in order)

1. Navbar — Logo + nav + search + hamburger
2. Hero — Full-width bg image + overlay text
3. Intro — Text left, image right
4. Portfolio — 7-item grid with hover overlays
5. Milestones — 4 stat boxes with icons
6. Services — Text + 4 icon cards
7. Contact — Background image, info + form
8. Footer — CTA + social + Component Dock link

### Tokens

- Font: Open Sans (300, 400, 600, 700)
- Headings: #222121, uppercase, letter-spacing 6px
- Body: #868686, line-height 2.2
- Button: transparent bg, 2px solid #222121 borders, uppercase
- Section padding: 130px
- Dark sections: #2b2b2b bg
