# SignupRift — Design Notes

Source: ColorLib Signup Form 11 (`signup-form-11`)
Preview: https://preview.colorlib.com/theme/signup-form-11/ (404 as of 2026-09-30)
Spec: openspec/specs/template-signuprift/spec.md

## Structure (top → bottom)

1. Full-page gray background (`#f5f5f5`)
2. "Sign Up #01" title above the card (dark gray, ~24px, centered)
3. Centered white card (~480px max-width, rounded corners ~12px, subtle shadow)
   - Green circle icon (~50px) with white pencil/edit icon (centered)
   - "Create Your Account" heading (dark gray, ~20px, centered)
   - FULL NAME field: green uppercase label + bordered input (placeholder "John Doe")
   - EMAIL ADDRESS field: green uppercase label + bordered input (placeholder "johndoe@gmail.com")
   - PASSWORD field: green uppercase label + bordered input (placeholder "Password") + eye toggle icon
   - Green checkbox "I Agree All Statements In Terms Of Service"
   - Full-width mint green "Sign Up" button (~6px border-radius)
   - "I'm already a member! Sign In" (green link)

## Fidelity notes

- Inputs use **full border boxes** (not underline-only like signup-form-09). Light gray border, rounded corners ~4px.
- Labels are **uppercase** and **green** (mint/teal ~#38d39f), not standard gray.
- The icon at the top is a **green circle** (~50px diameter) with a white pencil/edit icon — this is a key visual differentiator from other signup forms.
- The password field has a **visibility toggle** (eye icon) on the right side.
- No social login buttons — this template is simpler than signup-form-09.
- The "Sign In" link is inline with "I'm already a member!" text, not a separate row.
- The card has generous vertical padding (~40px top/bottom).

## Tasks

1. Create `apps/signuprift/` from an existing simple app (copy + rename)
2. Build `src/components/SignupCard.tsx` — the main card container with icon, heading, form
3. Build `src/components/PasswordInput.tsx` — password field with visibility toggle
4. Build `src/App.tsx` — compose card on gray background with title
5. Add form validation (zod + required fields)
6. Write tests for all scenarios in spec (100% coverage)
7. Verify responsive layout (mobile 375px, desktop 1280px)
8. Ensure footer links to Component Dock
9. Run `scripts/verify-app.sh signuprift`
