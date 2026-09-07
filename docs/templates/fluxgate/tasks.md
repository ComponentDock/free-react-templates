# Tasks & Research Notes: FluxGate (Colorlib Wizard 30)

## Research Summary

- **Source**: Colorlib Wizard 30 (`https://colorlib.com/wp/template/colorlib-wizard-30/`)
- **New Name**: `fluxgate`
- **Preview Status**: Unreachable (404) — fallback to screenshot and general ColorLib wizard patterns
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-30.jpg` (AVIF format)
- **Design Tokens**: Indigo primary (`#4f46e5`), light gray neutral background (`#f5f5f5`), clean vertical step indicator navigation for wizard steps.

## Section Implementation Plan

1. **Navbar / Header**: Minimal branding and home link.
2. **Wizard Container**: Centered card with vertical step tracker (1. Account Setup, 2. Personal Details, 3. Payment Information).
3. **Step Forms**: Reactive state management for inputs with validation.
4. **Success Screen**: Completion message with reset functionality.
5. **Footer**: Component Dock branded attribution footer linking `https://www.componentdock.com/`.

## Design Notes

- **Color Palette**: Indigo (`#4f46e5`) as primary accent, light gray (`#f5f5f5`) background, white card/form background.
- **Typography**: Poppins font family (Google Fonts), clean modern aesthetic.
- **Step Indicator**: Vertical sidebar with circular step numbers, connecting lines, checkmarks for completed steps.
- **Form Layout**: Full-width inputs within card, consistent spacing and padding.
- **Transitions**: Smooth fade/slide animations between wizard steps.
- **Responsive**: Stack vertically on mobile, full-width inputs and step indicator.

## Implementation Order

1. Create base app structure with Vite + React + Tailwind + TypeScript
2. Build wizard container component with step state management
3. Create step indicator component (vertical sidebar)
4. Build step 1 form (Account Setup)
5. Build step 2 form (Personal Details)
6. Build step 3 form (Payment Information)
7. Build success screen component
8. Add form validation (email, password match, required fields)
9. Add step navigation (Next, Back buttons)
10. Add smooth transitions between steps
11. Add responsive design
12. Add footer with Component Dock branding
13. Write tests for all components and functionality
14. Verify 100% test coverage
