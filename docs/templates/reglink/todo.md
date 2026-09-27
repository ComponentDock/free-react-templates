# Reglink — Implementation Notes

Source: Colorlib Regform 27 (https://colorlib.com/wp/template/colorlib-regform-27/)
Design: 3-step wizard registration form with gradient background and dark sidebar

## Section Order

1. Full-page gradient wrapper (teal→purple at 136deg, flex centered)
2. White form card (820px, rounded 10px, shadow)
3. Step sidebar (280px, dark navy #3e4061)
   - 3 step indicators with numbered circle icons
4. Content area (540px, white)
   - Step 1: Personal Information (6 fields)
   - Step 2: Connect Bank Account (search + 6 bank logos)
   - Step 3: Set Financial Goals (3 plan options)
5. Navigation bar (Back Step + Next/Finish green circle buttons)

## Fidelity Notes

- **Font:** Open Sans (Google Fonts) — Regular, SemiBold, Bold
- **Gradient:** `linear-gradient(136deg, rgb(116,235,213), rgb(63,43,150))`
- **Sidebar:** Dark navy (#3e4061), step icons are 40px circles, active=green (#4fab40)
- **Card:** White, 820px, border-radius 10px, shadow 0 8px 20px rgba(0,0,0,0.15)
- **Inputs:** Inside fieldset with 2px #e5e5e5 border, 4px radius
- **Bank grid:** 3×2 grid of radio buttons with bank logo images (use placeholder logos)
- **Plan selection:** 65px circular icons, active=green (#4fab40), inactive=gray (#999)
- **Navigation:** 50px green circles, hover darkens to #36782c
- **Animation:** Step content fades in (0.3s ease)
- **Responsive:** 4 breakpoints — desktop, laptop, tablet (horizontal steps), mobile (stacked)
- **State management:** React useState for current step, form data per step

## Component Structure

```
src/
  main.tsx                    — entry point
  App.tsx                     — compose wizard page
  components/
    WizardForm.tsx            — main wizard container + state
    StepSidebar.tsx           — left sidebar with step indicators
    StepContent.tsx           — right content area wrapper
    steps/
      PersonalInfo.tsx        — Step 1: name, email, phone, birth date, SSN
      BankAccount.tsx         — Step 2: bank search + logo grid
      FinancialGoals.tsx      — Step 3: plan selection
    NavigationBar.tsx         — Back/Next/Finish buttons
  index.css                   — Tailwind entry + @theme tokens
```

## Reuse from packages/ui

- Button component (green circle variant for nav)
- cn() utility for class merging
