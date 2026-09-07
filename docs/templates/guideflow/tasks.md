# GuideFlow — Implementation Tasks

Source: Colorlib Wizard 5 (4-step eCommerce order wizard)
New name: `guideflow`
Preview: https://preview.colorlib.com/theme/colorlib-wizard-5/ (404 at prep time)

## Structure order (matching original)

1. **StepIndicator** — Horizontal 4-step progress bar with numbered circles
2. **OrderStep (Step 1)** — Full Name, Email, Phone, Product selection
3. **ShippingStep (Step 2)** — Address, City, State, Zip, Country
4. **PaymentStep (Step 3)** — Card Number, Cardholder, Expiry, CVV
5. **ReviewStep (Step 4)** — Read-only summary of all data, masked card
6. **FormActions** — Back/Next arrow buttons (arrow icon, no text)
7. **SuccessScreen** — Order confirmation after submit
8. **Footer** — Component Dock branding link

## Design notes

- Dark theme: `#1a1a2e` page bg, `#16213e` card bg
- Font: Poppins (Google Fonts, loaded via index.html)
- Accent: coral-red `#e94560` for active step + buttons
- Completed steps: green `#4caf50` checkmark icons
- Card: white/transparent inside dark container, 8px border-radius
- Inputs: dark `#0f3460` bg, `#2a2a4a` border, 4px radius
- Smooth transitions between steps (CSS transition on opacity/transform)
- Responsive: stacks vertically on mobile (<768px)

## Fidelity notes (from screenshot analysis)

- Screenshot shows a dark-themed multi-step form with numbered step circles
- The 4 steps are displayed in a horizontal bar at the top of the form card
- Active step is highlighted with accent color, completed steps show checkmarks
- Form fields are laid out in a clean grid within each step
- Navigation uses arrow icons (→) for forward, (←) for back
- The card has a subtle shadow effect against the dark background
- Overall aesthetic: clean, modern, dark professional look

## Tasks

- [ ] Copy simplest existing app as scaffold (e.g. wizardform or wizardry)
- [ ] Rename package to `@free-react-templates/guideflow`
- [ ] Set up `public/CNAME` and `homepage` in package.json
- [ ] Implement StepIndicator component (4 steps, numbered circles)
- [ ] Implement OrderStep (Step 1) with form fields
- [ ] Implement ShippingStep (Step 2) with address fields
- [ ] Implement PaymentStep (Step 3) with card fields
- [ ] Implement ReviewStep (Step 4) with summary display
- [ ] Implement FormActions with Back/Next arrow buttons
- [ ] Implement SuccessScreen for order confirmation
- [ ] Implement App.tsx with wizard state management
- [ ] Add form validation (zod + react-hook-form patterns)
- [ ] Add smooth transitions between steps
- [ ] Add responsive layout for mobile
- [ ] Write tests for all components (100% coverage)
- [ ] Verify with `scripts/verify-app.sh guideflow`
