# FormStep — Implementation Tasks

## Pre-Implementation

- [x] Fetch and analyze ColorLib preview HTML + CSS
- [x] Extract design tokens (colors, fonts, layout, spacing)
- [x] Write OpenSpec spec with Gherkin scenarios
- [x] Write design notes with section order and fidelity notes
- [ ] Validate spec with `npm run spec:validate`

## Implementation

- [ ] Scaffold `apps/formstep` workspace (copy simplest app, rename package to `@free-react-templates/formstep`)
- [ ] Add Google Fonts (Mulish) link to `index.html`
- [ ] Set up Tailwind theme tokens in `src/index.css`
- [ ] Build `WizardSteps` component (horizontal step indicator)
- [ ] Build `Step1Personal` component (name, email, phone, age, gender, checkbox)
- [ ] Build `Step2Address` component (address, city, zip, country dropdown)
- [ ] Build `Step3Message` component (message textarea, terms checkbox)
- [ ] Build `FormCard` component (split layout: image + form content)
- [ ] Build `ActionButtons` component (Previous / Next / Submit)
- [ ] Compose wizard in `App.tsx` with step state management
- [ ] Add responsive styles (mobile stack below 768px)
- [ ] Add footer with Component Dock link
- [ ] Write `public/CNAME` → `formstep.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
- [ ] Run `npm install` at repo root to register workspace in lockfile

## Testing

- [ ] Write tests for WizardSteps (active step rendering)
- [ ] Write tests for Step1Personal (field rendering, validation)
- [ ] Write tests for Step2Address (field rendering, dropdown)
- [ ] Write tests for Step3Message (textarea, checkbox)
- [ ] Write tests for FormCard (image + form layout)
- [ ] Write tests for ActionButtons (previous/next/submit visibility)
- [ ] Write tests for App.tsx (step navigation, form submission)
- [ ] Verify 100% lines/functions/branches/statements coverage

## Verification

- [ ] `npx tsc --noEmit` passes
- [ ] `npx oxlint src/` passes
- [ ] `npm run test:coverage` — 100% on all metrics
- [ ] `npm run build` succeeds
- [ ] No ColorLib references in `apps/formstep/` code
- [ ] Footer links to Component Dock
