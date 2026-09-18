# Shingle — Task Outline

## Source

- ColorLib "Roofing": https://colorlib.com/wp/template/roofing/
- Preview: https://preview.colorlib.com/theme/roofing/

## Design Tokens

- Brand gold: `#d9ba2b` (accent, buttons, highlights)
- Primary blue: `#007bff` (secondary CTA)
- Font: Poppins (Google Fonts)
- Background: white, `#f8f9fa` light gray sections
- Hero overlay: `#000000` at 40% opacity

## Sections (in order)

1. TopBar — gold bar, logo, social icons
2. Navbar — sticky white, 6 links, mobile toggle
3. Hero — full-width bg image, overlay, heading, CTA
4. AppointmentSection — about tabs + Get a Quote form
5. Counter — 4 stat cards
6. Services — 6 service cards with icons
7. Gallery — 8 project images in responsive grid
8. Testimonials — 3 client cards
9. Blog — 3 post cards
10. Footer — 4-column, Component Dock link

## Files

- `apps/shingle/` — all components, tests, config
- `openspec/specs/template-shingle/spec.md` — Gherkin requirements
- `docs/templates/shingle/` — this folder

## Verification

- `bash scripts/verify-app.sh shingle` — passed
- 36 tests, 100% coverage
- Typecheck, lint, build all pass
