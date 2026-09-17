# Formmint — Implementation Todo

## Pre-implementation
- [x] Spec written: `openspec/specs/template-formmint/spec.md`
- [x] Design notes: `docs/templates/formmint/design-notes.md`
- [ ] `npm install` at repo root (after app folder created)

## Implementation
- [ ] Copy simplest existing app (e.g. `apps/formwell` or similar minimal form)
- [ ] Rename package to `@free-react-templates/formmint`
- [ ] Update `vite.config.ts` with `injectUiSource()` helper
- [ ] Set `public/CNAME` to `formmint.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://formmint.free.componentdock.com`
- [ ] Update `src/App.tsx` — page wrapper, flex center, bg #f2f2f2
- [ ] Update `src/index.css` — Tailwind entry + `@theme` tokens (colors, font)
- [ ] Add Google Fonts link for Ubuntu in `index.html`
- [ ] Create `src/components/ContactForm.tsx`:
  - Title: "Send Us A Message", uppercase, dark indigo, 30px
  - Full Name input (placeholder "Full Name")
  - E-mail input (placeholder "E-mail")
  - Phone input (placeholder "Phone")
  - Message textarea (placeholder "Your Message")
  - Send button: purple bg, white text, uppercase, pill shape
  - Focus expansion effect (pseudo-element or CSS transition)
  - Hover effect on button (darkens to #403866, expands)
  - Validation: error tooltips on empty submit (optional enhancement)
- [ ] Add footer with "Component Dock" link

## Verification
- [ ] `npm run verify:app formmint` passes (typecheck + lint + tests + build)
- [ ] 100% coverage on new components
- [ ] No ColorLib references anywhere in `apps/formmint/`
- [ ] Footer links to componentdock.com
- [ ] Surge deploy: `formmint.free.componentdock.com` works
