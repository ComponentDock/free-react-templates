# Pixelate — Implementation Tasks

## Template: Pixelate (recreation of ColorLib Calvin)

### Design Tokens

- Fonts: DM Sans (body), Roboto Condensed (headings)
- Brand blue: #6382e6
- Accent coral: #FF8553
- Background: #fbf9ff (light purple-white)
- Dark text: #000d21

### Components (10)

1. Navbar — fixed header, logo, nav links, CTA, mobile menu
2. Hero — split layout with image + heading
3. AboutInfo — horizontal contact bar
4. Services — 4 service cards in 2×2 grid
5. Gallery — 4 portfolio items with hover overlay
6. AboutMe — text + 3 skill bars
7. BrandCarousel — 6 brand placeholders
8. Testimonials — quotes + avatars
9. Blog — 3 blog cards
10. Footer — CTA + copyright with Component Dock link

### Test Coverage

- 41 tests across 11 test files
- 100% lines/functions/branches/statements coverage
- Per-app gate passes (typecheck + lint + tests + build)

### Verification

- `scripts/verify-app.sh pixelate` — PASS
- `npx openspec validate template-pixelate --type spec` — VALID
