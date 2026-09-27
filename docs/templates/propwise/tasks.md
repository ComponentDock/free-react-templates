# Propwise Template — Tasks & Design Notes

## ColorLib Source
- Template: Real Estate (https://colorlib.com/wp/template/real-estate/)
- Real estate agency landing page
- Preview unreachable (404); screenshot used as primary reference
- Poppins typeface, dark navy headings, red/coral (#e74c3c) accent
- Warm golden hero overlay on cityscape photo

## Design Tokens
- `--color-propwise-heading`: #1a1a2e (dark navy headings)
- `--color-propwise-body`: #666666 (gray body text)
- `--color-propwise-brand`: #e74c3c (warm red/coral — buttons, badges)
- `--color-propwise-accent`: #f39c12 (amber/gold — slider thumbs)
- `--color-propwise-card`: #ffffff (white card backgrounds)
- `--color-propwise-bg-alt`: #f8f9fa (light gray section backgrounds)
- `--color-propwise-hero-overlay`: rgba(243, 156, 18, 0.3) (warm golden overlay)
- Font: Poppins (Google Fonts)

## Section Order (from screenshot)
1. Top utility bar (phone, SELL/RENT, LOGIN/REGISTER)
2. Sticky navbar (logo + Home, Service, Property, Contact)
3. Hero (cityscape bg + golden overlay + "WE'RE REAL ESTATE KING")
4. Property search card (dropdowns + range sliders + CTA)
5. Features ("Why we are the best" — 3 cards)
6. Property listings (6+ cards in grid)
7. CTA section (background image + heading + button)
8. Footer (columns + Component Dock link)

## Tasks
- [x] Spec written
- [ ] App scaffolded (package.json, vite.config, tsconfig, CNAME)
- [ ] Tests written (App + ~9 components)
- [ ] Implementation complete
- [ ] Per-app gate passes (verify-app.sh propwise)
- [ ] PR created and merged
- [ ] Bookkeeping (TEMPLATES.md [x], readme:status)

## Fidelity Notes
- The hero search form with range sliders is the most distinctive section —
  recreate the white card overlay with dropdowns and styled range inputs
- The "Sell / Rent" toggle in the search bar uses the brand red color
- Property cards should show image, price badge, location, and specs
- Footer replaces any ColorLib attribution with Component Dock link
- No ColorLib references in app code — provenance only in spec + TEMPLATES.md
