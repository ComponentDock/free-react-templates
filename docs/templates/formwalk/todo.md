# FormWalk — Implementation Tasks & Design Notes

## Source mapping
- **Original:** ColorLib Wizard 30
- **Slug:** `colorlib-wizard-30`
- **Preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html
- **New name:** `formwalk`
- **Package:** `@free-react-templates/formwalk`

## Section order (from original)

1. **Full-page background** — background-image covering the viewport, centered, cover
2. **Wizard card** — centered white container (850px, border-radius 8px, box-shadow)
3. **Header bar** — blue (#3760e5) top section with "FORM WIZARD" title
4. **Step indicators** — 3 circles (60px) connected by lines, active=blue, inactive=gray
5. **Form step 1** — First Name + Last Name text inputs
6. **Form step 2** — Email Address + Password inputs
7. **Form step 3** — Subject dropdown + Comment text input
8. **Action buttons** — Next (pill, blue) + Back (on steps 2/3)

## Implementation tasks

- [ ] Create `apps/formwalk/` workspace (copy simplest existing app, rename package)
- [ ] Install Montserrat from Google Fonts via `<link>` in `index.html`
- [ ] Create `src/index.css` with Tailwind entry + `@theme` tokens:
  - `--color-brand: #3760e5`
  - `--color-brand-hover: #2b4ab3`
- [ ] Build `WizardCard.tsx` — centered container with white bg, 8px radius, shadow
- [ ] Build `WizardHeader.tsx` — blue header with title
- [ ] Build `StepIndicator.tsx` — 3 circles with connecting lines, active/done states
- [ ] Build `StepContent.tsx` — renders the current step's form fields
- [ ] Build `FormStep1.tsx` — First Name + Last Name inputs
- [ ] Build `FormStep2.tsx` — Email + Password inputs
- [ ] Build `FormStep3.tsx` — Subject dropdown + Comment input
- [ ] Build `FormActions.tsx` — Next (always) + Back (steps 2/3) pill buttons
- [ ] Wire step navigation logic in `App.tsx` (state: currentStep, stepData)
- [ ] Style inputs: 5px radius, 1px #e5e5e5 border, Montserrat font, 16px/600
- [ ] Style buttons: 25px radius (pill), 50px height, 160px width, blue bg
- [ ] Responsive: single-column on <576px, smaller circles on mobile
- [ ] Use picsum.photos for background image placeholder
- [ ] Write tests for each component (Vitest + RTL, 100% coverage)
- [ ] Add `public/CNAME` → `formwalk.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Footer: link to componentdock.com
- [ ] Run `scripts/verify-app.sh formwalk`

## Fidelity notes

- The original uses jQuery Steps plugin for wizard behavior — we replace with React state
- Background image should use `picsum.photos/seed/formwalk-bg/1920/1080` as placeholder
- Step circles use CSS pseudo-element `::before` for connecting lines — in React, use a separate `<div>` between circles
- The `select` element needs custom styling to remove browser default appearance (`appearance: unset`)
- Original has `outline: none` on inputs and step links — we replicate with `focus-visible:ring-0` + custom focus styles for accessibility
- Step transition: the original uses jQuery animations; we use CSS transitions on bg-color of step circles
- Back button is hidden on step 1 (original: `li:first-child { display: none }`)
- Header border-radius: top-left and top-right 8px only (matches card corners)
