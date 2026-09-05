# Elixir — Design Notes

## Source
- ColorLib: Wizard 29
- Slug: `colorlib-wizard-29`
- Preview: https://preview.colorlib.com/theme/colorlib-wizard-29/ (404 — unreachable)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-29.jpg (AVIF, not analyzable)
- Description: "A very simple free registration wizard template that features username, email, password and password confirmation steps."

## Visual analysis (from ColorLib page meta + embedded CSS)

This is a **simple 4-step registration wizard** component. The original is a
Bootstrap-based multi-step form with a horizontal step indicator.

### Layout structure (section order)
1. **Step indicator bar** — horizontal row of 4 numbered/labeled steps
   - Step 1: Username
   - Step 2: Email
   - Step 3: Password
   - Step 4: Confirm (password confirmation)
2. **Form area** — single form with inputs specific to the current step
3. **Navigation buttons** — Previous (ghost) + Next/Submit (solid green)

### Design tokens (from ColorLib page CSS)
- **Accent color:** #77CC6D (green) — used on `.ticon` and `.builder-top-icon`
- **Step borders:** #eeeeee (`.step-block` border)
- **Hover:** rgba(0,0,0,0.03) background on step hover
- **Font:** System sans-serif stack
- **Card border:** 1px solid #eeeeee on step blocks

### Fidelity notes for implementer
- This is a small component, not a full page. Wrap in a centered card layout.
- The wizard should be fully functional: state-managed step progression.
- Use useState to track: currentStep (0-3), formData (username, email, password, confirmPassword).
- Step indicator: show numbered circles or pills with active/completed/inactive states.
- Active step: green (#77CC6D) background or border.
- Completed steps: green checkmark or filled indicator.
- Inactive steps: gray/outlined.
- Form validation at each step before allowing progression.
- Password confirmation must match password from step 3.
- Back button preserves previously entered data.
- Use lucide-react icons (User, Mail, Lock, CheckCircle) for step indicators.
- Buttons: "Next" for steps 1-3, "Submit" for step 4, "Back" for steps 2-4.
- Responsive: step indicator stays horizontal even on mobile (scrollable if needed).

### What to adapt
- Keep the 4-step structure exactly as described
- Use placeholder text / labels as appropriate
- Green accent matches the original's #77CC6D
