# BtnQuint — Design Notes & Task Outline

## Source

- **ColorLib**: Bootstrap Buttons 05
- **Preview**: https://preview.colorlib.com/theme/bootstrap-buttons-05/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-buttons-05.jpg
- **New name**: `btnquint`

## Structure Order (top → bottom)

1. Page title heading ("#05 — Bootstrap Buttons")
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
- Standard Bootstrap colors + custom color variants

### Full-Width Button

- Single `btn btn-primary btn-block` spanning container width
- Labeled "Button"

### Hover Effect (Critical)

- CSS `::before` pseudo-element with `rgba(255,255,255,0.2)` background
- Transitions from `height: 0%` to `height: 100%` on hover
- 0.2s ease-in-out transition
- Positioned absolute, bottom: 0, full width

### Button Base CSS

- `border-radius: 4px`
- `border: none`
- `text-transform: uppercase`
- `letter-spacing: .03rem`
- `box-shadow: 0 2px 5px -1px rgba(0,0,0,0.2)`
- `overflow: hidden`

## Implementation Tasks

1. Scaffold `apps/btnquint/` from simplest existing app
2. Rename package to `@free-react-templates/btnquint`
3. Create `src/components/ButtonSizes.tsx`
4. Create `src/components/ButtonColors.tsx`
5. Create `src/components/FullWidthButton.tsx`
6. Create `src/App.tsx` composing all sections
7. Set up Tailwind theme tokens for custom colors in `index.css`
8. Implement hover overlay effect
9. Add footer with Component Dock link
10. Write tests for all components (100% coverage)
11. Set `public/CNAME` and `homepage`
12. Run `npm run verify:app btnquint`
