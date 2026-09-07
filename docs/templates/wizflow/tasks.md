# WizFlow — Implementation Tasks & Design Notes

## Source

- **ColorLib template:** Colorlib Wizard 20
- **Preview URL:** https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-20.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Structure order (section-by-section)

1. **Background gradient** — full-page purple-to-blue gradient
2. **Wizard container** — centered, max-width ~373px
3. **Step indicator** — 3 numbered circles connected by white line
4. **Form card** — white, rounded (10px), shadow
5. **Step 1: Account Setup** — email, password, confirm password
6. **Step 2: Social Profiles** — Twitter, Facebook, Google Plus
7. **Step 3: Personal Details** — name, phone, address
8. **Action buttons** — Next/Previous with gradient

## Design notes

### Visual design
- Purple-blue gradient background creates a modern, vibrant feel
- White card with rounded corners and shadow provides clean contrast
- Numbered step indicator with gradient-highlighted active step
- Poppins font family (Google Fonts) — clean, modern sans-serif
- Input fields with subtle borders, gradient border on focus

### Fidelity notes
- Original uses jQuery Steps library for wizard functionality
- React version should use state-based step management (no jQuery dependency)
- Original step indicator is flexbox with absolute-positioned connector line
- Gradient direction: bottom-to-top (0deg) — #884d80 (purple) → #9795f0 (light purple) → #2b5876 (blue) → #4e4376 (dark purple)
- Focus gradient adds #a1c4fd (light blue) at the start

### Implementation approach
1. Create `src/components/StepIndicator.tsx` — renders the 3 step circles + connector
2. Create `src/components/StepContent.tsx` — container for step forms
3. Create `src/components/AccountSetup.tsx` — Step 1 form
4. Create `src/components/SocialProfiles.tsx` — Step 2 form
5. Create `src/components/PersonalDetails.tsx` — Step 3 form
6. Create `src/components/ActionButton.tsx` — Next/Previous buttons
7. Create `src/App.tsx` — wizard state machine, composes components

### Color tokens for Tailwind
```css
@theme {
  --color-brand-purple: #884d80;
  --color-brand-purple-light: #9795f0;
  --color-brand-blue-dark: #2b5876;
  --color-brand-purple-dark: #4e4376;
  --color-brand-blue-light: #a1c4fd;
}
```

### Responsive behavior
- Container: 373px on desktop, full-width minus 40px padding on mobile (< 480px)
- Action buttons: 120px wide on desktop, full-width on mobile
- Step connector: 290px on desktop, 230px on very small screens (< 400px)

## Tasks

- [ ] Set up workspace: `apps/wizflow/` with package.json, vite.config.ts, index.html
- [ ] Install dependencies: react, react-dom, tailwindcss, vitest, testing-library
- [ ] Create `src/index.css` with Tailwind v4 + gradient theme tokens
- [ ] Create `src/main.tsx` entry point
- [ ] Create `StepIndicator` component + tests
- [ ] Create `AccountSetup` component + tests
- [ ] Create `SocialProfiles` component + tests
- [ ] Create `PersonalDetails` component + tests
- [ ] Create `ActionButton` component + tests
- [ ] Create `App.tsx` wizard state machine + tests
- [ ] Add `public/CNAME` with `wizflow.free.componentdock.com`
- [ ] Add footer linking to https://www.componentdock.com/
- [ ] Run `npm install` at repo root for lockfile
- [ ] Verify with `scripts/verify-app.sh wizflow`
- [ ] Commit and push
