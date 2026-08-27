# BtnPulse — Design Notes & Task Outline

## Source

- **ColorLib**: Bootstrap Buttons 04
- **Preview**: https://preview.colorlib.com/theme/bb/bootstrap-buttons-04/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-04.jpg
- **New name**: `btnpulse`

## Structure Order (top → bottom)

1. Page title heading ("#04 — Bootstrap Buttons")
2. Button sizes row (Large, Medium, Small — primary color, labeled)
3. "Button Colors" subheading
4. 18 color button grid (wrapping flex row)
5. Full-width block button
6. Footer (Component Dock link)

## Section-by-Section Fidelity Notes

### Title

- Simple `<h2>` with dark text, 20px font-size
- Left-aligned within centered container

### Button Sizes

- Horizontal row of 3 buttons, each with a small label above
- Labels are centered `<small>` elements
- Buttons: btn-primary with btn-lg, default, btn-sm classes

### Button Colors

- 18 buttons in a wrapping flex row
- Each button is `btn mb-3 mr-3` with the color class
- Standard Bootstrap colors + 10 custom colors (orange, indigo, pink, deep-orange, aqua, dark, black, purple, blue, brown, blue-gray)

### Full-Width Button

- Single `btn btn-primary btn-block` spanning container width
- Labeled "Button"

### Hover Effect (Critical)

- CSS `::before` pseudo-element with `rgba(255,255,255,0.2)` background
- Transitions from `height: 0%` to `height: 100%` on hover
- 0.2s ease-in-out transition
- Positioned absolute, bottom: 0, full width

### Button Base CSS (must replicate exactly)

- `border-radius: 4px`
- `border: none`
- `text-transform: uppercase`
- `letter-spacing: .03rem`
- `box-shadow: 0 2px 5px -1px rgba(0,0,0,0.2)`
- `overflow: hidden` (for pseudo-element)
- Active/focus: `box-shadow: none`

## Implementation Tasks

1. Scaffold `apps/btnpulse/` from simplest existing app (btncraft or btnstack)
2. Rename package to `@free-react-templates/btnpulse`
3. Create `src/components/ButtonSizes.tsx` — 3 labeled buttons
4. Create `src/components/ButtonColors.tsx` — 18 color variant buttons
5. Create `src/components/FullWidthButton.tsx` — block button
6. Create `src/App.tsx` composing all sections
7. Set up Tailwind theme tokens for custom colors in `index.css`
8. Implement hover overlay effect (CSS `::before` pseudo-element or Tailwind equivalent)
9. Add footer with Component Dock link
10. Write tests for all components (100% coverage)
11. Set `public/CNAME` and `homepage`
12. Run `npm run verify:app btnpulse`
