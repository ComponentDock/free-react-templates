# Wardcraft — Implementation Tasks

**Source**: ColorLib Wizard 7 — https://colorlib.com/wp/template/colorlib-wizard-7/
**New name**: wardcraft
**Preview**: unreachable (404) — screenshot-only reference

## Design Notes

### Visual Design (from screenshot analysis)

- Premium restaurant reservation wizard, 3-step booking process
- Split layout: gourmet food photography on left, dark form card on right
- Card slightly overlaps the food image for visual depth
- Moody, sophisticated dark palette — targeting high-end dining
- Minimalist approach: clean lines, ample whitespace, restrained color use

### Structure Order

1. **Page wrapper** — white background, flex row layout
2. **Food image panel** — left side, full height, dark background with gourmet photo
3. **Reservation card** — right side, dark charcoal, overlapping left panel
4. **Card header** — "BOOK A TABLE" title + cursive subtitle
5. **Step 1 fields** — People (dropdown) + Date (text input)
6. **Step 2 fields** — Time (two side-by-side dropdowns: start/end)
7. **Step 3 fields** — Confirmation summary + Book Now CTA
8. **NEXT button** — ghost/outline style, bottom-right of card
9. **Step pagination** — "1 / 3" text, right-aligned below button
10. **Footer** — Component Dock link

### Component Breakdown

- `App.tsx` — main layout, step state management
- `components/Navbar.tsx` — minimal or absent (wizard has no nav)
- `components/FoodPanel.tsx` — left-side food photography (placeholder via picsum)
- `components/ReservationCard.tsx` — right-side dark form card container
- `components/Step1.tsx` — People dropdown + Date input
- `components/Step2.tsx` — Time two-dropdown selectors
- `components/Step3.tsx` — Summary + CTA
- `components/StepPagination.tsx` — "1 / 3" counter display
- `components/Footer.tsx` — Component Dock attribution

### Fidelity Notes

- **Colors**: Dark charcoal card (#1a1a2e), black food bg, white text, cream accent
- **Fonts**: Montserrat (headings/form), Dancing Script (subtitle)
- **Button**: Ghost outline — no fill, light gray border, white text, uppercase
- **Inputs**: Bottom-border-only styling, dark bg blending with card
- **Icons**: White line-art (lucide-react: Users, Calendar, Clock)
- **Layout**: CSS Grid or Flexbox split — image panel 55%, card 45% overlapping
- **Placeholder image**: `https://picsum.photos/seed/wardcraft-food/800/1000`

### Implementation Priority

1. Create app scaffold (copy from simplest existing wizard app)
2. Build layout shell (split panels, card positioning)
3. Implement step state machine (1→2→3, back navigation)
4. Build Step 1: People dropdown + Date input with icons
5. Build Step 2: Time dual-dropdown selectors
6. Build Step 3: Confirmation summary + CTA
7. Add pagination indicator
8. Style everything to match dark theme tokens
9. Add responsive mobile layout (stacked)
10. Footer + final polish
11. Write tests (100% coverage)
