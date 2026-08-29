# BtnSnap — Tasks & Implementation Plan

Recreation of ColorLib **Bootstrap Buttons 20** (`https://colorlib.com/wp/template/bootstrap-buttons-20/`, live preview: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-20/`).

## Architecture & Section Order

1. **Header / Title Banner**: Section heading "Button #20" / "BtnSnap Component Showcase".
2. **Pick Your Style Section**: Default primary buttons (solid & outline) with text, icon + text, and icon-only.
3. **Pick Your Color Section**: Primary, secondary, tertiary, and quaternary buttons in solid and outline variants.
4. **Grid Social Buttons**: 4-column grid of social platform buttons (Twitter, Facebook, Dribbble) with various roundness and outline combinations.
5. **Social Buttons Detailed List**: Expanded rows for Facebook, Twitter, LinkedIn, Pinterest, and Dribbble featuring icon-only, rounded, outline, counter badges ("Share - 8.2k"), and full call-to-action buttons.
6. **Footer**: Component Dock branded attribution link (`https://www.componentdock.com/`).

## Design Tokens & Styling

- **Colors**:
  - Primary: `#007bff`
  - Secondary: `#6c757d`
  - Tertiary: `#ff4893`
  - Quaternary: `#01d28e`
  - Social: Twitter `#69b6f0`, Facebook `#4f69a2`, Dribbble `#ea6294`, LinkedIn `#2884ba`, Pinterest `#d03940`
- **Typography**: Sans-serif stack, 32px heading section.
- **Radii**: Default 4px (`rounded`), Rounded pills `40px` (`rounded-full`).

## TDD / Testing Plan

- Test rendering of all sections.
- Test button click handlers and hover states.
- 100% coverage requirement across all components.
