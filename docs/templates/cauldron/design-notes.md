# Cauldron — Design Notes & Task Outline

**Source:** ColorLib "Colorlib Wizard 6"
**Slug:** `colorlib-wizard-6`
**Preview:** https://preview.colorlib.com/theme/colorlib-wizard-6/ (404 at time of prep — design from screenshot)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg

## Structure Order (top to bottom)

1. macOS Browser Window Chrome (optional wrapper)
   - Traffic light buttons (red #ff5f57, yellow #febc2e, green #28c840)
   - URL bar with lock icon
   - Window controls

2. Background Layer
   - Full-viewport gradient: #a8b8d1 (blue) → #e8b8d1 (pink)
   - Watermark text: "TELL US ABOUT YOURSELF" — bold italic large, low opacity (~0.15-0.2)

3. Wizard Card (centered, elevated)
   - Container: #f7f7f8, rounded ~10-12px, subtle box-shadow
   - Two-column layout on desktop: avatar (left) + form fields (right)
   - Single column on mobile: avatar on top

   a. Avatar Section (left column)
      - Circular avatar placeholder with outer border (#e0e0e2) and inner accent ring (#d8a8d8)
      - "CHOOSE PICTURE" text + camera icon below

   b. Form Fields (right column)
      - 5 inputs, each pill-shaped (full rounded corners):
        - FIRST NAME
        - LAST NAME
        - TEAM NAME
        - EMAIL
        - CREATE A PASSWORD
      - Each has a small mauve dot indicator (#d8a8d8) to the left
      - Background: #f2f2f4, border: #e0e0e2, placeholder text: #9a9aa0

   c. Action Button
      - "CONTINUE →" — pill-shaped, background #a8b8d2, white text

4. Pagination Indicators
   - Three dots below the card
   - Active: #666666 solid; Inactive: #cccccc outline

## Fidelity Notes

- The macOS window chrome is a decorative wrapper — should be present for visual fidelity but can be simplified.
- The background gradient is the key visual signature — ensure smooth blue-to-pink transition.
- The watermark text should be barely visible (opacity ~0.15-0.2), large (120-200px), bold italic.
- Inputs are distinctly pill-shaped with generous border-radius (~20px).
- The mauve accent dots on inputs are a unique design touch — include them.
- The avatar ring has a double-ring effect: outer neutral border + inner pink accent.
- Step 2 and 3 content are not visible in the screenshot — extrapolate reasonable onboarding steps (team setup, preferences/confirmation).
- Pagination dots should animate smoothly on step transitions.

## Tasks

- [ ] Set up workspace: copy simplest existing app, rename to `cauldron`
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind theme tokens (gradient colors, card colors, accent colors)
- [ ] Implement WizardShell component (macOS chrome wrapper)
- [ ] Implement BackgroundLayer component (gradient + watermark text)
- [ ] Implement WizardCard component (container with shadow + rounding)
- [ ] Implement AvatarUpload component (circle placeholder + choose picture)
- [ ] Implement WizardInput component (pill-shaped input with accent dot)
- [ ] Implement StepOne component (profile fields)
- [ ] Implement StepTwo component (team configuration — extrapolated)
- [ ] Implement StepThree component (confirmation/completion — extrapolated)
- [ ] Implement PaginationDots component (active/inactive states)
- [ ] Implement WizardNavigation component (continue button + step management)
- [ ] Implement App.tsx composing all wizard sections
- [ ] Add multi-step state management (current step, form data)
- [ ] Add form validation (required fields per step)
- [ ] Add responsive layout (single column on mobile)
- [ ] Add keyboard accessibility (focus management, tab order)
- [ ] Add Component Dock footer link
- [ ] Write tests (100% coverage, Vitest + RTL)
- [ ] Run verify-app.sh, ensure all gates pass
- [ ] Commit and push
