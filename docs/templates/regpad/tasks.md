# RegPad — Implementation Todo

## Pre-implementation (done)
- [x] Fetch live demo HTML + CSS from https://colorlib.com/etc/regform/colorlib-regform-3/
- [x] Analyze design tokens (gradient, card, form fields, button)
- [x] View screenshot and note visual design
- [x] Write OpenSpec spec (openspec/specs/template-regpad/spec.md)
- [x] Write design notes (docs/templates/regpad/design-notes.md)

## Implementation (for implementer)
- [ ] Copy simplest existing app to `apps/regpad`, rename package to
      `@free-react-templates/regpad`
- [ ] Add Poppins Google Font link to `index.html`
- [ ] Set up `@theme` tokens in `src/index.css`:
      - `--color-page-from: #fbc2eb`
      - `--color-page-to: #a18cd1`
      - `--color-card-bg: #000`
      - `--color-btn: #57b846`
      - `--color-btn-hover: #4dae3c`
      - `--color-placeholder: #ccc`
      - `--color-border: rgba(255,255,255,0.2)`
- [ ] Create `src/components/PageWrapper.tsx` — full-viewport gradient bg
- [ ] Create `src/components/RegistrationCard.tsx` — split card container
      (table layout desktop, stacked mobile)
- [ ] Create `src/components/PhotoColumn.tsx` — left column with picsum
      placeholder image
- [ ] Create `src/components/FormPanel.tsx` — right column with heading
      and form
- [ ] Create `src/components/RegistrationForm.tsx` — the 5-field form
      with underline-only inputs, calendar icon, gender select, submit
- [ ] Create `src/components/Footer.tsx` — Component Dock attribution
- [ ] Create `src/App.tsx` — compose all sections
- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Ensure 100% coverage on all new code
- [ ] Run `npm run verify:app -- regpad` (typecheck + lint + test:coverage + build)
- [ ] Add `public/CNAME` with `regpad.free.componentdock.com`
- [ ] Run `npm install` at repo root for lockfile registration

## Fidelity checklist
- [ ] Gradient matches `linear-gradient(to top, #fbc2eb 0%, #a18cd1 100%)`
- [ ] Card is 780px max-width, 10px radius, black bg, correct shadow
- [ ] Split layout: table-cell on desktop, stacked on mobile (<768px)
- [ ] Photo column: 50% width, cover bg, 400px tall on mobile
- [ ] Form heading: "Registration Info", 24px white, weight 400
- [ ] Five fields in source order with correct types and placeholders
- [ ] Underline borders: `1px solid rgba(255,255,255,0.2)`, 33px spacing
- [ ] Calendar icon on Birthdate (lucide Calendar, absolute positioned)
- [ ] Gender select: disabled "Gender" placeholder, Male/Female/Other
- [ ] Submit button: green pill (#57b846, radius 20px), hover #4dae3c
- [ ] Mobile: stacked layout with 400px image block
- [ ] No ColorLib references in app code
- [ ] Footer links componentdock.com
