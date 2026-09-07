# Formpath — Implementation Tasks

**Source:** ColorLib Wizard 29  
**Preview URL:** https://preview.colorlib.com/theme/colorlib-wizard-29/ (404 — design based on screenshot + metadata)  
**New name:** formpath  
**Spec:** openspec/specs/template-formpath/spec.md

## Design Notes

### Structure Order (top to bottom)

1. Page background — clean white/light gray
2. Centered wizard card — white with shadow, max-width ~500px
3. Step indicator — horizontal row of 4 numbered circles with lines
4. Step title heading
5. Form input(s) — single field per step
6. Navigation buttons — Back (gray) + Next/Submit (blue)

### Section-by-Section Fidelity Notes

- **Step Indicator:** Four circles connected by horizontal lines. Active = blue (#1a73e8), completed = green (#77CC6D), inactive = gray (#eeeeee bg, #999999 text). Circles are 50% radius (round).
- **Step 1 (Username):** Single text input. No Back button on first step. Next button only.
- **Step 2 (Email):** Single email input. Back + Next buttons. Preserves step 1 data on back nav.
- **Step 3 (Password):** Single password input. Back + Next buttons.
- **Step 4 (Confirm Password):** Single password input. Back + Submit buttons. Submit triggers success state.
- **Buttons:** Slightly rounded (4px radius), blue for Next/Submit, gray for Back. Hover darkens.
- **Card:** White background, 8px border-radius, subtle shadow, ~40px padding.
- **Typography:** System sans-serif stack (no custom fonts needed). Clean, functional aesthetic.
- **Responsive:** Card stays centered on mobile. Inputs and buttons go full-width within card.

### Key Differences from FormForge (Wizard 28)

- Wizard 28 has a vibrant gradient background; Wizard 29 is clean/minimal
- Wizard 28 has 3 steps; Wizard 29 has 4 steps
- Wizard 28 uses pill-shaped buttons; Wizard 29 uses slightly rounded buttons
- Wizard 28 has a progress bar; Wizard 29 has step indicator circles
- Wizard 28 includes card heading overlay; Wizard 29 is simpler

## Implementation Tasks

1. [ ] Create `apps/formpath/` from simplest existing app (copy + rename package)
2. [ ] Set up `vite.config.ts` with `injectUiSource()` helper
3. [ ] Create `src/App.tsx` composing all sections
4. [ ] Build `src/components/WizardCard.tsx` — main card container
5. [ ] Build `src/components/StepIndicator.tsx` — numbered circles + lines
6. [ ] Build `src/components/UsernameStep.tsx` — step 1 form
7. [ ] Build `src/components/EmailStep.tsx` — step 2 form
8. [ ] Build `src/components/PasswordStep.tsx` — step 3 form
9. [ ] Build `src/components/ConfirmPasswordStep.tsx` — step 4 form
10. [ ] Build `src/components/NavigationButtons.tsx` — Back/Next/Submit
11. [ ] Implement step state management (current step, form data, validation)
12. [ ] Write `src/index.css` with Tailwind + theme tokens
13. [ ] Add `public/CNAME` with `formpath.free.componentdock.com`
14. [ ] Update `package.json` homepage to `https://formpath.free.componentdock.com`
15. [ ] Write tests for each component (Vitest + RTL)
16. [ ] Verify 100% coverage: `npm run test:coverage`
17. [ ] Run `scripts/verify-app.sh formpath` (typecheck + lint + test + build)
18. [ ] Commit: `feat: formpath — four-step registration wizard (ColorLib Wizard 29)`
19. [ ] Push branch, open PR, merge immediately
20. [ ] Update TEMPLATES.md: mark `[x]` with surge URL
