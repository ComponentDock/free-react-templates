# Tasks & Research Notes: SpellStep (Colorlib Wizard 6)

## Research Summary

- **Source**: Colorlib Wizard 6 (`https://colorlib.com/wp/template/colorlib-wizard-6/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-6/` — returned 404 at research time; all design reference derived from screenshot.
- **Screenshot**: `https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-6.jpg`
- **Category**: Forms / Multi-step Wizard (3-step account creation)
- **Description**: A 3-step account creation snippet with profile photo upload, personal/team info fields, pastel gradient background, pill-shaped inputs with indicator dots, and a centered card layout.

## Design Tokens (from screenshot analysis)

| Token               | Value                                      |
| ------------------- | ------------------------------------------ |
| Background gradient | Top: `#b4c8e2` (periwinkle) → Bottom: `#f0c6e2` (rose pink) |
| Card background     | `#ffffff` white, rounded 12px, drop-shadow `#d5d5d5` |
| Input background    | `#e0e4ec` light gray, pill-shaped (full radius) |
| Input indicator dot | `#d2c4e5` lavender                         |
| Button background   | `#8ea4c9` muted blue                       |
| Button text         | `#ffffff` white, uppercase, sans-serif     |
| Label text          | `#444444` dark gray, uppercase             |
| Active progress dot | `#666666` dark gray                        |
| Inactive dot        | `#cccccc` light gray                       |
| Profile border      | `#d2c4e5` lavender                         |
| Font                | Poppins (or similar rounded sans-serif)    |

## Section Implementation Plan

1. **App entry** (`src/main.tsx`, `src/App.tsx`): Compose the wizard container with gradient background and decorative text overlay.
2. **WizardContainer component**: Centered card with state management for 3-step navigation. Holds `currentStep` state (1–3), form data, and validation state.
3. **StepIndicator component**: Three circular progress dots at card bottom. Active dot filled, inactive hollow.
4. **Step1 — Profile & Personal Info**:
   - Profile photo upload (circular placeholder + "CHOOSE PICTURE" label + camera icon)
   - Fields: First Name, Last Name, Team Name, Email, Password
   - All inputs: pill-shaped with lavender indicator dot
5. **Step2 — Additional Details** (inferred from 3-step structure): Collect secondary info (e.g., company role, phone, timezone). Same pill-shaped input style.
6. **Step3 — Review & Confirm**: Summary of entered data with option to edit, plus a submit/complete action.
7. **CompletionScreen**: Success message with reset option.
8. **Form validation**: Zod schemas for each step; inline error messages below invalid fields.
9. **Back/Continue buttons**: Pill or rounded-rect buttons at card bottom, "Continue →" on steps 1–2, "Complete" on step 3.
10. **Footer**: "More templates at Component Dock" linking `https://www.componentdock.com/`.
11. **Theme tokens** (`src/index.css`): Define gradient, card, input, button, and text tokens as Tailwind `@theme` custom properties.

## Fidelity Notes

- Match the pastel gradient exactly (blue→pink).
- Card must be centered with soft shadow, not hard-edged.
- Inputs must be pill-shaped (rounded-full or very high border-radius) with the small dot indicator.
- Profile photo circle must have the lavender border.
- Background decorative text ("TELL US ABOUT YOURS") must be large, italic, low-opacity, positioned behind the card.
- Progress dots must sit below the card, not inside it.
- Step 2 and 3 content are inferred (ColorLib preview unreachable); implementer may adapt based on screenshot + description.
