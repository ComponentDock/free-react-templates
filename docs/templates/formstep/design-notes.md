# FormStep — Design Notes & Implementation Tasks

## Source Mapping

- **ColorLib source**: Colorlib Wizard 1
- **Preview URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-1/index.html`
- **Source slug**: `colorlib-wizard-1`
- **New name**: `formstep`
- **Category**: Forms / Multi-step Wizard

## Section Order (from preview HTML)

1. **Wrapper** — full viewport, cream background (#f9f6f1), flex center
2. **Step indicators** — 3 horizontal dots (12px circles) with connecting lines (58px, 2px), positioned absolute over the card
3. **Form card** — flex row, white background, subtle shadow
   - **Image holder** (40%) — left side, 521px tall, placeholder image
   - **Form content** (60%) — right side, padded
     - **Form header** — centered h3 "Registration" in purple (#453e79), uppercase, letter-spacing 7px, bordered
     - **Subtext** — centered paragraph in olive green (#6d7f52)
4. **Step 1 form fields** — First Name, Last Name (side by side), Email, Phone (side by side), Age + Gender radio (side by side), Terms checkbox
5. **Step 2 form fields** — Address (full width), City, Zip Code (side by side), Country dropdown (custom)
6. **Step 3 form fields** — Message textarea (full width), Terms-and-conditions checkbox
7. **Action buttons** — Previous (beige, bottom-right) / Next (green, bottom-right)

## Fidelity Notes

- The original uses `jquery.steps.js` for wizard logic. In React, implement with local state tracking `currentStep` (0, 1, 2) and conditionally render the active section.
- Step indicators are positioned absolute over the card at `top: 27.44%; right: 30%`. In React, use relative positioning on the card wrapper.
- The form heading h3 has a visible border (#dad8e4) and uppercase styling with letter-spacing. This is a distinctive design element — preserve it.
- The underline-only input style (no box border, just bottom border) is key to the clean aesthetic. Use `border: none; border-bottom: 2px solid #e6e6e6`.
- The custom dropdown uses a `<ul>` toggled by JS. In React, use a controlled component with state.
- Radio buttons use custom circular checkmarks (CSS-only, no library). Replicate with styled `<input type="radio">`.
- Checkbox uses a circular checkmark style (not square). Same approach.
- The original uses Material Design Iconic Font for button arrows and checkbox checkmarks. In React, use `lucide-react` icons instead.
- Button styling: Previous is full-width within its column (144px), Next/Submit is 135px/124px. Both are 41px tall with inline-flex centering.
- Responsive breakpoint at 768px: card becomes block layout, image goes full-width on top.

## Implementation Tasks

1. Scaffold `apps/formstep` (copy simplest existing app, rename package)
2. Set up `index.html` with Google Fonts link for Mulish
3. Create `src/index.css` with Tailwind `@theme` tokens matching the CSS:
   - `--color-brand: #6d7f52` (olive green)
   - `--color-heading: #453e79` (deep purple)
   - `--color-bg: #f9f6f1` (cream)
   - `--color-input-border: #e6e6e6`
   - `--color-input-focus: #e9e0cf`
   - `--color-btn-prev: #e9e0cf`
   - `--color-step-inactive: #e9e0cf`
4. Build `src/components/WizardSteps.tsx` — horizontal step indicator with 3 dots + connector lines
5. Build `src/components/Step1Personal.tsx` — First Name, Last Name, Email, Phone, Age, Gender radio, terms checkbox
6. Build `src/components/Step2Address.tsx` — Address, City, Zip Code, Country dropdown
7. Build `src/components/Step3Message.tsx` — Message textarea, terms-and-conditions checkbox
8. Build `src/components/FormCard.tsx` — split-layout card (image + form content area)
9. Build `src/components/ActionButtons.tsx` — Previous / Next / Submit buttons
10. Compose in `src/App.tsx` — state machine for currentStep, conditional rendering
11. Add responsive styles (stack below 768px)
12. Add footer with Component Dock link
13. Write tests (Vitest + Testing Library)
14. Verify 100% coverage, typecheck, lint, build
