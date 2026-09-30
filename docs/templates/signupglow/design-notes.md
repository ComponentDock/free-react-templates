# SignupGlow — Design Notes

Source: ColorLib Signup Form 09 (`signup-form-09`)
Preview: https://preview.colorlib.com/theme/signup-form-09/ (404 as of 2026-09-30)
Spec: openspec/specs/template-signupglow/spec.md

## Structure (top → bottom)

1. Full-page gray background (`#f5f5f5`)
2. Centered white card (~480px max-width, rounded corners, subtle shadow)
   - "Sign Up" heading (dark gray, ~28px)
   - Subtitle paragraph (gray, ~14px)
   - Name input (underline border-bottom only, gray placeholder)
   - Email input (underline border-bottom only)
   - Password input (underline border-bottom only, type=password)
   - Re-type Password input (underline border-bottom only, type=password)
   - Row: checkbox "Agree our Terms and Conditions" (left) + "Sign In" link (right)
   - Full-width Register button (green gradient pill)
   - "or register with" centered text
   - Three circular social icons: Facebook (blue), Twitter (light blue), Google (red)

## Fidelity notes

- The card uses **underline-only** input borders — not full border boxes. Each input has a single bottom border line, no background fill.
- The Register button is a **full-width pill** (border-radius ~30px) with a subtle green gradient.
- Social icons are **circles** (~40px) with solid brand-color backgrounds and white icons.
- The terms checkbox row is a flex row with the checkbox+label on the left and the "Sign In" link pushed to the right via `justify-between` or `ml-auto`.
- The card has generous vertical padding (~40-50px top/bottom, ~30-40px horizontal).

## Tasks

1. Create `apps/signupglow/` from an existing simple app (copy + rename)
2. Build `src/components/SignupCard.tsx` — the main card container
3. Build `src/components/SocialButtons.tsx` — the three circular social icons
4. Build `src/App.tsx` — compose card on gray background
5. Add form validation (zod + required fields, password match)
6. Write tests for all scenarios in spec (100% coverage)
7. Verify responsive layout (mobile 375px, desktop 1280px)
8. Ensure footer links to Component Dock
9. Run `scripts/verify-app.sh signupglow`
