# Elixir — Implementation TODO

## Pre-implementation
- [x] Spec written (`openspec/specs/template-elixir/spec.md`)
- [x] Design notes documented (`docs/templates/elixir/design-notes.md`)
- [x] Replication research: preview unreachable (404), screenshot AVIF (not analyzable), design from ColorLib meta + CSS

## Component breakdown
- [ ] Scaffold `apps/elixir/` from simplest existing app
- [ ] Create `WizardContainer.tsx` — main wizard wrapper
  - Manages currentStep state (0-3)
  - Manages formData state (username, email, password, confirmPassword)
  - Renders StepIndicator + StepContent + NavigationButtons
- [ ] Create `StepIndicator.tsx` — horizontal step bar
  - 4 steps with labels: Username, Email, Password, Confirm
  - States: active (green), completed (green checkmark), inactive (gray)
  - Uses lucide-react icons
- [ ] Create `StepContent.tsx` — form area for current step
  - Step 0: UsernameForm (text input)
  - Step 1: EmailForm (email input)
  - Step 2: PasswordForm (password input)
  - Step 3: ConfirmForm (password confirmation input)
- [ ] Create `NavigationButtons.tsx` — Back / Next / Submit
  - Back: ghost/outline style, hidden on step 0
  - Next: solid green (#77CC6D), shown on steps 0-2
  - Submit: solid green (#77CC6D), shown on step 3
- [ ] Create `App.tsx` — page wrapper with centered card + wizard
- [ ] Add form validation (per-step):
  - Username: non-empty
  - Email: valid format
  - Password: non-empty, minimum length
  - Confirm: must match password
- [ ] Configure Tailwind theme tokens (brand green, fonts)
- [ ] Add Component Dock footer link

## Testing
- [ ] Write tests for WizardContainer
  - Renders step indicator with 4 steps
  - Starts on step 1 (Username)
  - Advances to next step on valid input + Next click
  - Returns to previous step on Back click
  - Preserves form data when going back
  - Shows Submit on final step
- [ ] Write tests for StepIndicator
  - Shows correct active/completed/inactive states
  - Green accent on active step
- [ ] Write tests for form validation
  - Blocks advancement with empty username
  - Blocks advancement with invalid email
  - Blocks submission with mismatched passwords
- [ ] Write tests for NavigationButtons
  - Back hidden on step 0
  - Next shown on steps 0-2
  - Submit shown on step 3
- [ ] Write tests for responsive layout
- [ ] Write tests for keyboard accessibility
- [ ] Achieve 100% coverage

## Final verification
- [ ] `scripts/verify-app.sh elixir` passes (typecheck + lint + tests + build)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME file: `elixir.free.componentdock.com`
- [ ] Homepage in package.json: `https://elixir.free.componentdock.com`
